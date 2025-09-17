import { McGeVector3d, McDbHatch, McGePoint3d, McGePoint3dArray, McDbCustomEntity, IMcDbDwgFiler, MxCADWorldDraw, McDbEntity, McDbText, McDb, MxCpp, McGeMatrix3d, McDbMText, MxCADUtility } from 'mxcad';
import Barcode from './index.js';

// 自定义条形码
export class McDbTestBarCode extends McDbCustomEntity {
    /** 条形码位置 */
    private position: McGePoint3d = new McGePoint3d();
    /** 字高  */
    private textHeight: number = 120;
    /** 条形码信息文字 */
    private text: string = '';
    // 条形码高度
    private codeHeight: number = 300;
    // 条形码宽度
    private codeWidth: number = 10;
    // 条形码类型
    private codeType: string = 'CODE39';
    // 条形码内容设置
    private codeContent: string = 'ABCDEFG';
    // 是否显示条形码文字内容
    private showText: boolean = false;
    /** 包围盒最大点 包围盒最小点 */
    private minPt: McGePoint3d = new McGePoint3d();
    private maxPt: McGePoint3d = new McGePoint3d();

    constructor(imp?: any) {
        super(imp);
    }
    public create(imp: any) {
        return new McDbTestBarCode(imp)
    }
    /** 获取类名 */
    public getTypeName(): string {
        return "McDbTestBarCode";
    }
    //设置或获取基点
    public set barCodePos(val: McGePoint3d) {
        this.position = val.clone();
    }
    public get barCodePos(): McGePoint3d {
        return this.position;
    }
    //设置或获取条形码文字
    public set barCodeText(val: string) {
        this.text = val;
    }
    public get barCodeText(): string {
        return this.text;
    }
    //设置或获取条形码高度
    public set barCodeHeight(val: number) {
        this.codeHeight = val;
    }
    public get barCodeHeight(): number {
        return this.codeHeight;
    }
    //设置或获取条形码类型
    public set barCodeType(val: string) {
        this.codeType = val;
    }
    public get barCodeType(): string {
        return this.codeType;
    }
    //设置或获取条形码宽度
    public set barCodeWidth(val: number) {
        this.codeWidth = val;
    }
    public get barCodeWidth(): number {
        return this.codeWidth;
    }
    // 设置或获取条形码文字高度
    public set barCodeTextHeight(val: number) {
        this.textHeight = val;
    }
    public get barCodeHeigth(): number {
        return this.textHeight;
    }
    // 设置或获取是否显示条形码文字内容
    public set barCodeShowText(val: boolean) {
        this.showText = val;
    }
    public get barCodeShowText(): boolean {
        return this.showText;
    }
    // 设置或获取条形码文字内容
    public set barCodeContent(val: string) {
        this.codeContent = val;
    }
    public get barCodeContent(): string {
        return this.codeContent;
    }
    /** 读取数据 */
    public dwgInFields(filter: IMcDbDwgFiler): boolean {
        this.position = filter.readPoint("position").val;
        this.codeWidth = filter.readDouble("codeWidth").val;
        this.codeHeight = filter.readDouble("codeHeight").val;
        this.textHeight = filter.readDouble("textHeight").val;
        this.text = filter.readString("text").val;
        this.codeType = filter.readString("codeType").val;
        this.codeContent = filter.readString("codeContent").val;
        const isShowText = filter.readLong("showText").val;
        this.showText = isShowText ? true : false;
        this.minPt = filter.readPoint("minPt").val;
        this.maxPt = filter.readPoint("maxPt").val;
        return true;
    }
    /** 写入数据 */
    public dwgOutFields(filter: IMcDbDwgFiler): boolean {
        filter.writePoint("position", this.position);
        filter.writeDouble("codeWidth", this.codeWidth);
        filter.writeDouble("codeHeight", this.codeHeight);
        filter.writeString("text", this.text);
        filter.writeDouble("textHeight", this.textHeight);
        filter.writeString("codeType", this.codeType);
        filter.writeString("codeContent", this.codeContent);
        const isShowText = this.showText ? 1 : 0;
        filter.writeLong("showText", isShowText);
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
        const code = new Barcode[this.codeType](this.codeContent, { flat: true });
        if (!code.valid()) return alert('条形码类型与内容不匹配！请重新设置！');
        let encoded = code.encode();
        const v = McGeVector3d.kYAxis.clone().mult(this.codeHeight);
        const _v = McGeVector3d.kXAxis.clone().mult(this.codeWidth);
        encoded.data.split('').forEach((val:string, index:number) => {
            const solid = new McDbHatch();
            const point1 = new McGePoint3d(this.position.x + index * this.codeWidth, this.position.y, this.position.z);
            const point2 = point1.clone().addvec(v);
            const point3 = point2.clone().addvec(_v);
            const point4 = point1.clone().addvec(_v);
            const points = new McGePoint3dArray([point1, point2, point3, point4]);
            solid.appendLoop(points);
            if (val == '1') {
                draw.drawEntity(solid);
                allEntityArr.push(solid)
            }
        })
        if (this.showText) {
            const text = this.getCodeText();
            draw.drawEntity(text);
            allEntityArr.push(text)
        }
        this.getBox(allEntityArr);
    };
    private getBox(entityArr: McDbEntity[]) {
        const mxcad = MxCpp.getCurrentMxCAD();
        let _minPt:McGePoint3d|null = null;
        let _maxPt:McGePoint3d|null = null;
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
            if (_minPt && (minPt.x < _minPt.x)) _minPt.x = minPt.x;
            if (_minPt && (minPt.y < _minPt.y)) _minPt.y = minPt.y;
            if (_maxPt && (maxPt.x > _maxPt.x)) _maxPt.x = maxPt.x;
            if (_maxPt && (maxPt.y > _maxPt.y)) _maxPt.y = maxPt.y;
        });
        if (_minPt && _maxPt) {
            this.maxPt = _maxPt;
            this.minPt = _minPt
        }
    }
    // 设置条形码文字实体
    private getCodeText(): McDbEntity {
        if (!this.text) this.text = this.codeContent;
        const text = new McDbText();
        text.textString = this.text;
        text.height = this.textHeight;
        const v = McGeVector3d.kYAxis.clone().negate().mult(this.textHeight * (4 / 3));
        text.position = text.alignmentPoint = this.position.clone().addvec(v);
        text.horizontalMode = McDb.TextHorzMode.kTextLeft;
        return text
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


export async function Mx_drawBarCode() {
    const mxcad = MxCpp.getCurrentMxCAD();
    mxcad.newFile();
    mxcad.setViewBackgroundColor(255, 255, 255);
    // CODE39 类型条形码
    const barCode = new McDbTestBarCode();
    barCode.barCodePos = new McGePoint3d(100, 100, 0);
    barCode.barCodeShowText = true;
    mxcad.drawEntity(barCode);

    // CODE128 类型条形码
    const barCode2 = new McDbTestBarCode();
    barCode2.barCodeContent = 'A little test!';
    barCode2.barCodeType = 'CODE128';
    barCode2.barCodePos = new McGePoint3d(-2000, 100, 0);
    barCode2.barCodeShowText = true;
    mxcad.drawEntity(barCode2);

    // EAN13 类型条形码
    const barCode3 = new McDbTestBarCode();
    barCode3.barCodeContent = '5901234123457';
    barCode3.barCodeType = 'EAN13';
    barCode3.barCodePos = new McGePoint3d(-2000, -800, 0);
    barCode3.barCodeShowText = true;
    mxcad.drawEntity(barCode3);

    // codabar 类型条形码
    const barCode4 = new McDbTestBarCode();
    barCode4.barCodeContent = 'C1234567890D';
    barCode4.barCodeType = 'codabar';
    barCode4.barCodePos = new McGePoint3d(100, -800, 0);
    barCode4.barCodeShowText = true;
    mxcad.drawEntity(barCode4);
    mxcad.zoomAll();
    mxcad.zoomScale(4);
}

