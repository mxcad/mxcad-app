import { MxCpp, McDbCustomEntity, McGePoint3d, IMcDbDwgFiler, McGePoint3dArray, MxCADWorldDraw, McGeMatrix3d, McDbEntity, McDb, McDbMText, McDbText, MxCADUtility } from "mxcad";
import { QRCode } from './qrCode'

// 自定义二维码实体
export class McDbTestQrCode extends McDbCustomEntity {
    /** 二维码的位置 */
    private position: McGePoint3d = new McGePoint3d();
    // 二维码高度
    private codeHeight: number = 300;
    // 二维码宽度
    private codeWidth: number = 10;
    // 二维码内容设置
    private codeContent: string = 'https://demo.mxdraw3d.com:3000/mxcad/';
    /** 包围盒最大点 包围盒最小点 */
    private minPt: McGePoint3d = new McGePoint3d();
    private maxPt: McGePoint3d = new McGePoint3d();

    constructor(imp?: any) {
        super(imp);
    }
    public create(imp: any) {
        return new McDbTestQrCode(imp)
    }
    /** 获取类名 */
    public getTypeName(): string {
        return "McDbTestQrCode";
    }
    //设置或获取基点
    public set qrCodePos(val: McGePoint3d) {
        this.position = val.clone();
    }
    public get qrCodePos(): McGePoint3d {
        return this.position;
    }
    //设置或获取码高度
    public set qrCodeHeight(val: number) {
        this.codeHeight = val;
    }
    public get qarCodeHeight(): number {
        return this.codeHeight;
    }
    //设置或获取码宽度
    public set qrCodeWidth(val: number) {
        this.codeWidth = val;
    }
    public get qrCodeWidth(): number {
        return this.codeWidth;
    }
    // 设置或获取二维码内容
    public set qrCodeContent(val: string) {
        this.codeContent = val;
    }
    public get qrCodeContent(): string {
        return this.codeContent;
    }
    /** 读取数据 */
    public dwgInFields(filter: IMcDbDwgFiler): boolean {
        this.position = filter.readPoint("position").val;
        this.codeWidth = filter.readDouble("codeWidth").val;
        this.codeHeight = filter.readDouble("codeHeight").val;
        this.codeContent = filter.readString("codeContent").val;
        this.minPt = filter.readPoint("minPt").val;
        this.maxPt = filter.readPoint("maxPt").val;
        return true;
    }
    /** 写入数据 */
    public dwgOutFields(filter: IMcDbDwgFiler): boolean {
        filter.writePoint("position", this.position);
        filter.writeDouble("codeWidth", this.codeWidth);
        filter.writeDouble("codeHeight", this.codeHeight);
        filter.writeString("codeContent", this.codeContent);
        filter.writePoint("minPt", this.minPt);
        filter.writePoint("maxPt", this.maxPt);
        return true;
    }
    /** 移动夹点 */
    public moveGripPointsAt(iIndex: number, dXOffset: number, dYOffset: number, dZOffset: number) {
        this.assertWrite();
        if (iIndex === 0) {
            this.position.x += dXOffset;
            this.position.y += dYOffset;
            this.position.z += dZOffset;
        }
    };
    /** 获取夹点 */
    public getGripPoints(): McGePoint3dArray {
        let ret = new McGePoint3dArray();
        ret.append(this.position);
        return ret;
    };
    /** 动态绘制 */
    public worldDraw(draw: MxCADWorldDraw): void {
        const allEntityArr: McDbEntity[] = [];

        const qrcode = new QRCode('', {
            width: this.codeWidth,
            height: this.codeHeight
        });
        const objArr = qrcode.makeMxcadCode(this.codeContent);
        objArr.forEach((obj: McDbEntity) => {
            const entity = obj.clone() as McDbEntity;
            entity.move(new McGePoint3d(0, 0, 0), this.position);
            draw.drawEntity(entity);
            allEntityArr.push(entity)
        })
        this.getBox(allEntityArr);
    };
        private getBox(entityArr: McDbEntity[]) {
            const mxcad = MxCpp.getCurrentMxCAD();
            let _minPt: McGePoint3d|null = null;
            let _maxPt: McGePoint3d|null = null;
            let result;
            entityArr.forEach(entity => {
                if (entity instanceof McDbText) {
                    const ent = new McDbMText()
                    ent.contents = entity.textString;
                    ent.textHeight = entity.height;
                    ent.location = entity.position;
                    switch (entity.horizontalMode) {
                        case McDb.TextHorzMode.kTextLeft:
                            ent.attachment = McDb.AttachmentPoint.kBottomLeft;
                            break;
                        case McDb.TextHorzMode.kTextCenter:
                            ent.attachment = McDb.AttachmentPoint.kBottomCenter;
                            break;
                        case McDb.TextHorzMode.kTextRight:
                            ent.attachment = McDb.AttachmentPoint.kBottomRight;
                            break;
                        case McDb.TextHorzMode.kTextMid:
                            ent.attachment = McDb.AttachmentPoint.kBottomCenter;
                            break;
                        default:
                            ent.attachment = McDb.AttachmentPoint.kBottomLeft;
                            break;
                    }
                    // 将ent的文字样式设置为当前文字样式
                    const textStyleId = mxcad.getDatabase().getCurrentlyTextStyleId();
                    ent.textStyleId = textStyleId;
                    ent.reCompute();
                    result = MxCADUtility.getTextEntityBox(ent, false);
                } else if (entity instanceof McDbMText) {
                    entity.reCompute();
                    result = MxCADUtility.getTextEntityBox(entity, false);
                } else {
                    result = entity.getBoundingBox();
                }
                const { minPt, maxPt, ret } = result;
                if (!_minPt) _minPt = minPt.clone();
                if (!_maxPt) _maxPt = maxPt.clone();
                if (_minPt && minPt.x < _minPt.x) _minPt.x = minPt.x;
                if (_minPt && minPt.y < _minPt.y) _minPt.y = minPt.y;
                if (_maxPt && maxPt.x > _maxPt.x) _maxPt.x = maxPt.x;
                if (_maxPt && maxPt.y > _maxPt.y) _maxPt.y = maxPt.y;
            });
            if (_minPt && _maxPt) {
                this.maxPt = _maxPt;
                this.minPt = _minPt
            }
        }
    // 编辑变换
    public transformBy(_mat: McGeMatrix3d): boolean {
        this.position.transformBy(_mat);
        return true;
    }
    // 获取包围盒
    public getBoundingBox(): { minPt: McGePoint3d; maxPt: McGePoint3d; ret: boolean; } {
        return { minPt: this.minPt, maxPt: this.maxPt, ret: true }
    }
}

//画二维码
export async function Mx_drawQrCode() {
    const mxcad = MxCpp.getCurrentMxCAD();
    mxcad.newFile();
    const qrcode = new McDbTestQrCode();
    qrcode.qrCodePos = new McGePoint3d(1000, 1000, 0);
    qrcode.qrCodeContent = 'https://demo.mxdraw3d.com:3000/mxcad/';
    qrcode.qrCodeWidth = 1500;
    qrcode.qrCodeHeight = 1500;
    mxcad.drawEntity(qrcode);
    mxcad.zoomAll();
};

