///////////////////////////////////////////////////////////////////////////////
//版权所有（C）2002-2022，成都梦想凯德科技有限公司。
//本软件代码及其文档和相关资料归成都梦想凯德科技有限公司,应用包含本软件的程序必须包括以下版权声明
//此应用程序应与成都梦想凯德科技有限公司达成协议，使用本软件、其文档或相关材料
//https://www.mxdraw.com/
///////////////////////////////////////////////////////////////////////////////

import { McEdGetPointWorldDrawObject, MrxDbgUiPrPoint, MxDb2LineAngularDimension, MxDbAlignedDimension, MxDbCoord, MxFun, MxType } from "mxdraw";
import {
    MxCADUiPrEntity, MxCpp, MxCADResbuf, MxCADUiPrPoint, McDb,
    McDbText, McDbCurve, McGePoint3d, MxCADUtility, McDbLine, McDbMText,
    McDbPolyline, MxCADUiPrDist, McDbBlockReference, McDbBlockTableRecord,
    MxCADUiPrString,
    IMcDbDwgFiler,
    McDbCustomEntity,
    McGePoint3dArray,
    MxCADWorldDraw,
    DxfCode,
    McObjectId,
    McDbArc,
    McCmColor,
    McDbCircle,
    McGeVector3d,
    McDb2LineAngularDimension,
    McDbEntity,
} from "mxcad";

// 统计长度
async function Mx_StaLength() {
    const mxcad = MxCpp.App.getCurrentMxCAD();
    const strLen = new McDbText();
    strLen.height = 10;
    let pt: McGePoint3d | null = new McGePoint3d();

    let filter = new MxCADResbuf();
    filter.AddMcDbEntityTypes("CIRCLE,ARC,LINE,LWPOLYLINE,ELLIPSE");
    let aryId = await MxCADUtility.userSelect("选择目标曲线", filter);
    if (aryId.length == 0) {
        return;
    }
    let length = 0;
    aryId.forEach(async (id) => {
        let event = id.getMcDbEntity() as McDbCurve;
        length += event.getLength().val
    });
    strLen.textString = length.toFixed(2).toString();
    const getSumPoint = new MxCADUiPrPoint();
    getSumPoint.setMessage("指定长度标注点");
    getSumPoint.setUserDraw((pt, pw) => {
        strLen.position = pt;
        strLen.alignmentPoint = pt;
        pw.drawMcDbEntity(strLen);
    })
    pt = await getSumPoint.go();
    if (!pt) return;
    strLen.alignmentPoint = pt;
    strLen.position = pt;
    mxcad.drawEntity(strLen)
}

// 统计面积
async function Mx_StaArea() {
    const mxcad = MxCpp.App.getCurrentMxCAD();
    const strLen = new McDbText();
    strLen.height = 10;
    let pt: McGePoint3d | null = new McGePoint3d();

    let filter = new MxCADResbuf();
    filter.AddMcDbEntityTypes("CIRCLE,LWPOLYLINE,ELLIPSE");
    let aryId = await MxCADUtility.userSelect("选择目标对象", filter);
    if (aryId.length == 0) {
        return;
    }
    let area = 0;
    aryId.forEach(async (id) => {
        let event = id.getMcDbEntity() as McDbCurve;
        area += event.getArea().val
    });
    strLen.textString = area.toFixed(2).toString();
    const getSumPoint = new MxCADUiPrPoint();
    getSumPoint.setMessage("指定长度标注点");
    getSumPoint.setUserDraw((pt, pw) => {
        strLen.position = pt;
        strLen.alignmentPoint = pt;
        pw.drawMcDbEntity(strLen);
    })
    pt = await getSumPoint.go();
    if (!pt) return;
    strLen.alignmentPoint = pt;
    strLen.position = pt;
    mxcad.drawEntity(strLen)
}

// 标斜率
async function Mx_StandardSlope() {
    let filter = new MxCADResbuf();
    filter.AddMcDbEntityTypes("LINE");

    const getLine = new MxCADUiPrEntity();
    getLine.setFilter(filter);
    getLine.setMessage("请选择目标斜率对象");
    const line_id = await getLine.go();
    if (!line_id.id) return;
    const line = line_id.getMcDbEntity() as McDbLine;

    const getHeight = new MxCADUiPrDist();
    getHeight.setMessage("请设置标注文字高度");
    const val = await getHeight.go();
    if (!val) return;
    const height = getHeight.value();

    const getPoint = new MxCADUiPrPoint();
    getPoint.setMessage("指定斜率标注点");
    let blkRef = new McDbBlockReference();
    const mxcad = MxCpp.getCurrentMxCAD();
    getPoint.setUserDraw((pt, pw) => {
        const pt1 = line.getClosestPointTo(pt, true).val;
        const pt2 = new McGePoint3d(pt1.x, pt1.y + height * 4);
        const l = new McDbLine(pt1, pt2);
        const l_clone = l.clone() as McDbLine;
        l_clone.rotate(pt2, Math.PI * 1 / 2);
        const pt3 = line.IntersectWith(l_clone, McDb.Intersect.kExtendBoth).at(0);
        const pt0 = line.getClosestPointTo(pt1, false).val
        const pl = new McDbPolyline();
        pl.isClosed = true;
        pl.addVertexAt(pt0);
        pl.addVertexAt(pt1);
        pl.addVertexAt(pt2);
        pl.addVertexAt(pt3);

        const text = new McDbText();
        text.height = height;
        text.position = l.getPointAtDist(l.getLength().val / 2).val;
        text.alignmentPoint = text.position;
        text.rotation = - Math.PI / 2;
        text.horizontalMode = McDb.TextHorzMode.kTextMid;
        text.textString = '1000';//基准数字

        const text1 = new McDbText();
        const l1 = new McDbLine(pt3, pt2);
        text1.height = height;
        text1.position = l1.getPointAtDist(pt3.distanceTo(pt2) / 2).val;
        text1.alignmentPoint = text1.position;
        text1.horizontalMode = McDb.TextHorzMode.kTextMid;
        text1.textString = (1000 * pt3.distanceTo(pt2) / l.getLength().val).toFixed(0).toString();

        // 整装成块
        let blkTable = mxcad.getDatabase().getBlockTable();
        let blkRecId = blkTable.add(new McDbBlockTableRecord());//图块记录
        let blkTableRecord: McDbBlockTableRecord = blkRecId.getMcDbBlockTableRecord() as any;
        if (blkTableRecord == null) return;
        blkTableRecord.appendAcDbEntity(pl);
        blkTableRecord.appendAcDbEntity(text);
        blkTableRecord.appendAcDbEntity(text1);
        blkTableRecord.name = '斜率test'

        blkTableRecord.origin = pt1;
        blkRef.blockTableRecordId = blkRecId;
        blkRef.position = pt1;
        pw.drawMcDbEntity(blkRef)
    });
    const pt = await getPoint.go();
    if (!pt) return;
    mxcad.drawEntity(blkRef);
}

// 自定义测量坐标标注类
class McDbTestCoordinateLabeling extends McDbCustomEntity {
    // 定义McDbTestCoordinateLabeling内部的点对象 
    // 点对象
    private point: McGePoint3d = new McGePoint3d();
    // 标注点
    private position: McGePoint3d = new McGePoint3d();
    // 字高
    private height: number = 30;
    // 构造函数
    constructor(imp?: any) {
        super(imp);
    }
    // 创建函数
    public create(imp: any) {
        return new McDbTestCoordinateLabeling(imp)
    }
    // 获取类名
    public getTypeName(): string {
        return "McDbTestCoordinateLabeling";
    }
    //设置或获取测量点坐标
    public set coordinatePoint(val: McGePoint3d) {
        this.point = val.clone();
    }
    public get coordinatePoint(): McGePoint3d {
        return this.point;
    }
    //设置或获取字高
    public set coordinateHeight(val: number) {
        this.height = val;
    }
    public get coordinateHeight(): number {
        return this.height;
    }
    // 读取自定义实体数据point、position、height
    public dwgInFields(filter: IMcDbDwgFiler): boolean {
        this.point = filter.readPoint("point").val;
        this.position = filter.readPoint("position").val;
        this.height = filter.readDouble("height").val;
        return true;
    }
    // 写入自定义实体数据point、position、height
    public dwgOutFields(filter: IMcDbDwgFiler): boolean {
        filter.writePoint("point", this.point);
        filter.writePoint("position", this.position);
        filter.writeDouble("height", this.height);
        return true;
    }

    // 移动自定义对象的夹点
    public moveGripPointsAt(iIndex: number, dXOffset: number, dYOffset: number, dZOffset: number) {
        this.assertWrite();
        if (iIndex === 0) {
            this.point.x += dXOffset;
            this.point.y += dYOffset;
            this.point.z += dZOffset;
        } else {
            this.position.x += dXOffset;
            this.position.y += dYOffset;
            this.position.z += dZOffset;
        }
    };
    // 获取自定义对象的夹点
    public getGripPoints(): McGePoint3dArray {
        let ret = new McGePoint3dArray()
        ret.append(this.point);
        ret.append(this.position);
        return ret;
    };
    // 绘制实体
    public worldDraw(draw: MxCADWorldDraw): void {
        const text = new McDbMText();
        text.textHeight = MxFun.screenCoordLong2Doc(this.height);
        text.attachment = McDb.AttachmentPoint.kMiddleLeft;
        text.contents = `X=${(this.point.x).toFixed(3)}\\PY=${(this.point.y).toFixed(3)}`;
        text.location = this.position;
        draw.drawEntity(text);

        const mxcad = MxCpp.getCurrentMxCAD();
        const id = mxcad.drawEntity(text);
        const { maxPt, minPt } = (id.getMcDbEntity() as McDbMText).getBoundingBox();
        id.erase();

        const length = Math.abs(maxPt.x - minPt.x);
        const pt3 = new McGePoint3d(this.position.x + length * 1.2, this.position.y);
        const pl = new McDbPolyline();
        pl.addVertexAt(this.point);
        pl.addVertexAt(this.position);
        pl.addVertexAt(pt3);
        draw.drawEntity(pl);
    }
    // 获取position
    public setPosition(pt: McGePoint3d) {
        this.assertWrite();
        this.position = pt.clone();
    }
    // 获取position
    public getPosition() {
        return this.position;
    }
}

// 坐标标注
async function Mx_CoordAnnotation() {

    const getPoint1 = new MxCADUiPrPoint();
    getPoint1.setMessage("请选择目标坐标点");
    const pt1 = await getPoint1.go();
    if (!pt1) return;

    const coord = new McDbTestCoordinateLabeling();
    coord.coordinatePoint = pt1;
    const getPoint2 = new MxCADUiPrPoint();
    getPoint2.setMessage("请指定标注位置");
    getPoint2.setUserDraw((pt, pw) => {
        coord.setPosition(pt);
        pw.drawMcDbEntity(coord);
    });
    const pt2 = await getPoint2.go();
    if (!pt2) return;
    coord.setPosition(pt2);
    MxCpp.getCurrentMxCAD().drawEntity(coord);
}

// 智能标高
async function Mx_Elevation() {

    const getPoint1 = new MxCADUiPrPoint();
    getPoint1.setMessage("指定起点");
    const pt1 = await getPoint1.go();
    if (!pt1) return;

    // 标注文字
    const height = 10;
    const mxcad = MxCpp.getCurrentMxCAD();
    const text = new McDbText();
    text.height = height;
    text.textString = pt1.y.toFixed(2);
    text.position = pt1;
    const id = mxcad.drawEntity(text);

    let line1: McDbLine;
    let pl: McDbPolyline;
    let textHt: McDbText;
    setTimeout(async () => {
        // 获取标注文字长度
        const minBox = (id.getMcDbEntity() as McDbText).getBoundingBox();
        const w = minBox.maxPt.distanceTo(new McGePoint3d(minBox.minPt.x, minBox.maxPt.y));
        id.erase();

        const getPoint2 = new MxCADUiPrPoint();
        getPoint2.setMessage("指定终点");
        getPoint2.setUserDraw((pt, pw) => {
            line1 = new McDbLine(pt1, new McGePoint3d(pt1.x + height, pt1.y, 0));
            line1.startPoint = pt1;
            line1.endPoint = line1.getClosestPointTo(pt, true).val;
            pw.drawMcDbEntity(line1);

            const p1 = new McGePoint3d(pt.x, pt1.y + height, 0);
            const p2 = line1.getPointAtDist(line1.getLength().val - height).val;
            const p3 = line1.getPointAtDist(line1.getLength().val - height * 2).val;
            pl = new McDbPolyline();
            pl.addVertexAt(p1);
            pl.addVertexAt(p2);
            pl.addVertexAt(new McGePoint3d(p3.x, p3.y + height, 0));
            if (pt.x > pt1.x) {
                pl.addVertexAt(new McGePoint3d(p1.x + w, p1.y, 0));
            } else {
                pl.addVertexAt(new McGePoint3d(p1.x - w, p1.y, 0));
            }
            pw.drawMcDbEntity(pl);

            textHt = text.clone() as McDbText;
            textHt.position = textHt.alignmentPoint = p1;
            // 根据文字所在位置确定文字对齐方式
            if (pt.x > pt1.x) {
                text.horizontalMode = McDb.TextHorzMode.kTextLeft;
            } else {
                text.horizontalMode = McDb.TextHorzMode.kTextRight;
            }
            pw.drawMcDbEntity(textHt);
        })
        const pt2 = await getPoint2.go();
        if (!pt2) return;

        const getPosition = new MxCADUiPrPoint();
        getPosition.setMessage("指定标注方向");
        getPosition.setUserDraw((pt, pw) => {
            const pl_clone = pl.clone() as McDbPolyline;
            const text_clone = textHt.clone() as McDbText;
            if (pt.y < line1.endPoint.y) {
                pl_clone.mirror(pl.getPointAt(1).val, line1.endPoint);
                const p = pl_clone.getPointAt(0).val;
                text_clone.position = text_clone.alignmentPoint = new McGePoint3d(p.x, p.y - height, 0)
            }
            pw.drawMcDbEntity(text_clone);
            pw.drawMcDbEntity(pl_clone);
            pw.drawMcDbEntity(line1);
        })

        const position = await getPosition.go();
        if (!position) return;
        // 设置标注方向
        if (position.y < line1.endPoint.y) {
            pl.mirror(pl.getPointAt(1).val, line1.endPoint);
            const p = pl.getPointAt(0).val;
            textHt.position = textHt.alignmentPoint = new McGePoint3d(p.x, p.y - height, 0)
        }

        mxcad.drawEntity(line1);
        mxcad.drawEntity(textHt);
        mxcad.drawEntity(pl);

    }, 0)
}

// 粗糙度
async function Mx_Roughness() {
    // 设置标注文字内容
    const getStr = new MxCADUiPrString();
    getStr.setMessage("请设置文字内容");
    const str = await getStr.go();
    if (!str) return;
    const text = new McDbText();
    text.textString = str;
    text.height = 10;
    text.position = text.alignmentPoint = new McGePoint3d(0, 0, 0);
    text.horizontalMode = McDb.TextHorzMode.kTextMid;
    const mxcad = MxCpp.getCurrentMxCAD();
    const id = mxcad.drawEntity(text);

    setTimeout(async () => {
        // 获取文字宽度
        const minBox = (id.getMcDbEntity() as McDbText).getBoundingBox();
        const w = minBox.maxPt.distanceTo(new McGePoint3d(minBox.minPt.x, minBox.maxPt.y));
        id.erase();

        const getPoint = new MxCADUiPrPoint();
        getPoint.setMessage("请指定标注位置");
        let pl: McDbPolyline = new McDbPolyline();
        let _clone: McDbText = new McDbText();
        getPoint.setUserDraw((pt, pw) => {
            const midPt = new McGePoint3d(pt.x, pt.y + w, 0);
            const startPt = new McGePoint3d(midPt.x - w / 2, midPt.y, 0);
            const endPt = new McGePoint3d(midPt.x + w / 2, midPt.y, 0);
            const line = new McDbLine(pt, endPt);
            const lastPt = line.getPointAtDist(line.getLength().val + w).val;
            pl = new McDbPolyline();
            pl.addVertexAt(endPt);
            pl.addVertexAt(startPt);
            pl.addVertexAt(pt);
            pl.addVertexAt(lastPt);
            pw.drawMcDbEntity(pl);

            _clone = text.clone() as McDbText;
            _clone.position = _clone.alignmentPoint = midPt;
            pw.drawMcDbEntity(_clone)
        });

        const pt = await getPoint.go();
        if (!pt) return;

        mxcad.drawEntity(pl);
        mxcad.drawEntity(_clone);
    }, 0)

}

// 自定义面积标注类
class McDbTestAreaComment extends McDbCustomEntity {
    /** 点数组 */
    private ptArr: McGePoint3d[] = [];
    /** 标注点 */
    private pt: McGePoint3d = new McGePoint3d();
    /** 字高 */
    private height: number = 30;
    /** 凸度数组 */
    private dbulges: number[] = [];
    /** 测量对象是否为矩形 */
    private isReactFlag: boolean = false;
    /** 包围盒最大点 包围盒最小点 */
    private minPt: McGePoint3d = new McGePoint3d();
    private maxPt: McGePoint3d = new McGePoint3d();
    constructor(imp?: any) {
        super(imp);
    }
    public create(imp: any) {
        return new McDbTestAreaComment(imp)
    }
    /** 获取类名 */
    public getTypeName(): string {
        return "McDbTestAreaComment";
    }
    //设置或获取文本字高
    public set textHeight(val: number) {
        this.height = val;
    }
    public get textHeight(): number {
        return this.height;
    }
    //设置或获取测量对象是否为矩形
    public set isReact(val: boolean) {
        this.isReactFlag = val;
    }
    public get isReact(): boolean {
        return this.isReactFlag;
    }
    /** 读取数据 */
    public dwgInFields(filter: IMcDbDwgFiler): boolean {
        this.ptArr = filter.readPoints('ptArr').val;
        this.pt = filter.readPoint("pt").val;
        const _dbulges = filter.readString("dbulges").val;
        this.dbulges = _dbulges.split(",").map(Number);
        this.isReactFlag = filter.readLong("isReactFlag").val ? true : false;
        this.minPt = filter.readPoint("minPt").val;
        this.maxPt = filter.readPoint("maxPt").val;
        return true;
    }
    /** 写入数据 */
    public dwgOutFields(filter: IMcDbDwgFiler): boolean {
        filter.writePoints("ptArr", this.ptArr);
        filter.writePoint("pt", this.pt);
        const _dbulges = this.dbulges.toString();
        filter.writeString("dbulges", _dbulges);
        filter.writeLong("isReactFlag", this.isReactFlag ? 1 : 0);
        filter.writePoint("minPt", this.minPt);
        filter.writePoint("maxPt", this.maxPt);
        return true;
    }
    /** 移动夹点 */
    public moveGripPointsAt(iIndex: number, dXOffset: number, dYOffset: number, dZOffset: number) {
        this.assertWrite();
        this.ptArr.forEach((point, index) => {
            if (index === iIndex) {
                point.x += dXOffset;
                point.y += dYOffset;
                point.z += dZOffset;
            }
        });
        if (iIndex === this.ptArr.length) {
            this.pt.x += dXOffset;
            this.pt.y += dYOffset;
            this.pt.z += dZOffset;
        }
    };
    /** 获取夹点 */
    public getGripPoints(): McGePoint3dArray {
        let ret = new McGePoint3dArray();
        this.ptArr.forEach(point => {
            ret.append(point);
        })
        ret.append(this.pt);
        return ret;
    };
    /** 动态绘制 */
    public worldDraw(draw: MxCADWorldDraw): void {

        const allEntityArr: McDbEntity[] = [];

        const pl = new McDbPolyline();
        pl.isClosed = true;
        if (this.isReactFlag) {
            // 测量的是矩形，得到的就是矩形的两个角点
            pl.addVertexAt(this.ptArr[0], 0, 0.1, 0.1);
            pl.addVertexAt(new McGePoint3d(this.ptArr[1].x, this.ptArr[0].y), 0, 0.1, 0.1);
            pl.addVertexAt(this.ptArr[1], 0, 0.1, 0.1);
            pl.addVertexAt(new McGePoint3d(this.ptArr[0].x, this.ptArr[1].y), 0, 0.1, 0.1);
        } else {
            // 测量的是多边形
            this.ptArr.forEach((pt, index) => {
                pl.addVertexAt(pt, this.dbulges[index], 0.1, 0.1);
            });
        }
        // 获取对象数据信息
        const area = pl.getArea().val;
        const length = pl.getLength().val;
        // 构造对文本对象
        const text = new McDbMText();
        text.contents = `面积：${area.toFixed(2)}\\P周长：${length.toFixed(2)} `;
        text.attachment = McDb.AttachmentPoint.kMiddleCenter;
        text.location = this.pt;
        text.textHeight = MxFun.screenCoordLong2Doc(this.height);
        // 设置标注颜色
        text.trueColor = this.trueColor;
        draw.trueColor = this.trueColor;
        // 绘制标注对象
        draw.drawEntity(text);
        draw.drawEntity(pl);
        allEntityArr.push(text)
        allEntityArr.push(pl)

        this.getBox(allEntityArr);

    }

    private getBox(entityArr: McDbEntity[]) {
        const mxcad = MxCpp.getCurrentMxCAD();
        let _minPt: McGePoint3d | null = null;
        let _maxPt: McGePoint3d | null = null;
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

    /** 设置标注点 */
    public setPoint(pt: McGePoint3d) {
        this.assertWrite();
        this.pt = pt.clone();
    }
    /** 增加顶点 */
    public addVertex(pt: McGePoint3d, dbulge?: number) {
        this.assertWrite();
        this.ptArr.push(pt.clone());
        this.dbulges.push(dbulge ? dbulge : 0);
    }
    /** 获取标注点 */
    public getPoint() {
        return this.pt;
    }

    // 获取包围盒
    public getBoundingBox(): { minPt: McGePoint3d; maxPt: McGePoint3d; ret: boolean; } {
        return { minPt: this.minPt, maxPt: this.maxPt, ret: true }
    }
}

// 面积
async function Mx_Area() {
    const ptArr: McGePoint3d[] = [];

    const getPt1 = new MxCADUiPrPoint();
    getPt1.setMessage("请选择面积的第一个点");
    const pt1 = await getPt1.go();
    if (!pt1) return;
    ptArr.push(pt1);

    while (true) {
        const getPt = new MxCADUiPrPoint();
        getPt.setMessage("请选择下一个点");
        getPt.setKeyWords("[回退(B)/结束(O)]");
        getPt.setUserDraw((pt, pw) => {
            const draw_pl = new McDbPolyline();
            ptArr.forEach(point => {
                draw_pl.addVertexAt(point, 0, 0.1, 0.1);
            });
            draw_pl.addVertexAt(pt);
            pw.drawMcDbEntity(draw_pl);
        });
        const pt = await getPt.go();
        const key = getPt.keyWordPicked();
        if (key === 'B') {
            if (ptArr.length > 1) {
                ptArr.pop();
            }
        } else if (key === 'O') {
            break;
        } else {
            if (!pt) break;
            ptArr.push(pt);
        }
    };

    if (ptArr.length < 3) return;
    const mxcad = MxCpp.getCurrentMxCAD();
    const area = new McDbTestAreaComment();
    ptArr.forEach((point) => {
        area.addVertex(point, 0);
    });
    const position = new MxCADUiPrPoint();
    position.setMessage("请选择面积标注的位置");
    position.setUserDraw((pt, pw) => {
        pw.setColor(0xFF0000)
        area.setPoint(pt);
        pw.drawMcDbEntity(area);
    })
    const positionPt = await position.go();
    if (!positionPt) return;
    area.setPoint(positionPt);
    area.trueColor = new McCmColor(255, 0, 0)
    mxcad.drawEntity(area);
}

// 矩形面积
async function Mx_ReactArea() {
    const getPt1 = new MxCADUiPrPoint();
    getPt1.setMessage("请选择矩形的角点1");
    const pt1 = await getPt1.go();
    if (!pt1) return;

    const getPt2 = new MxCADUiPrPoint();
    getPt2.setMessage("请选择矩形的角点2");
    getPt2.setUserDraw((pt, pw) => {
        const pl = new McDbPolyline();
        pl.isClosed = true;
        pl.addVertexAt(pt1);
        pl.addVertexAt(new McGePoint3d(pt.x, pt1.y));
        pl.addVertexAt(pt);
        pl.addVertexAt(new McGePoint3d(pt1.x, pt.y));
        pw.drawMcDbEntity(pl);
    })
    const pt2 = await getPt2.go();
    if (!pt2) return;

    const reactArea = new McDbTestAreaComment();
    reactArea.isReact = true;
    reactArea.addVertex(pt1);
    reactArea.addVertex(pt2);

    const getPos = new MxCADUiPrPoint();
    getPos.setMessage("请设置面积标注的位置");
    getPos.setUserDraw((pt, pw) => {
        pw.setColor(0xFF0000)
        reactArea.setPoint(pt);
        pw.drawMcDbEntity(reactArea);
    });
    const position = await getPos.go();
    if (!position) return;
    reactArea.setPoint(position);
    reactArea.trueColor = new McCmColor(255, 0, 0)
    MxCpp.getCurrentMxCAD().drawEntity(reactArea);
}

// 点到直线的距离
async function Mx_DistFromPointToLine() {
    const getPt = new MxCADUiPrPoint();
    getPt.setMessage("请选择一个测量点");
    const pt = await getPt.go();
    if (!pt) return;

    // 设置过滤器   
    const filter = new MxCADResbuf([DxfCode.kEntityType, "LINE"]);
    const getEnt = new MxCADUiPrEntity();
    getEnt.setMessage("请选择一条直线")
    getEnt.setFilter(filter);
    const entId = await getEnt.go();
    if (!entId.id) return;
    const line = entId.getMcDbEntity() as McDbLine;

    // 获取垂点
    const verPt = line.getClosestPointTo(pt, true).val;

    let id!: McObjectId;
    const mxcad = MxCpp.getCurrentMxCAD();
    const getPos = new MxCADUiPrPoint();
    getPos.setMessage("请设置尺寸线的位置");
    getPos.setUserDraw((point, pw) => {
        id && id.erase()
        id = mxcad.drawDimAligned(pt.x, pt.y, verPt.x, verPt.y, point.x, point.y);
    });
    const position = await getPos.go();
    if (!position) {
        id && id.erase()
        return
    };
    id && id.erase();
    mxcad.drawDimAligned(pt.x, pt.y, verPt.x, verPt.y, position.x, position.y);
}

// 自定义弧长标注类
class McDbTestArcComment extends McDbCustomEntity {
    /** 圆弧圆心 */
    private center: McGePoint3d = new McGePoint3d();
    /** 圆弧半径 */
    private radius: number = 0;
    /** 圆弧开始角度 */
    private startAngle: number = 0;
    /** 圆弧结束角度 */
    private endAngle: number = 0;
    /** 弧线标注点 */
    private position: McGePoint3d = new McGePoint3d();
    /** 弧线标注文本高度 */
    private height: number = 30;
    /** 包围盒最大点 包围盒最小点 */
    private minPt: McGePoint3d = new McGePoint3d();
    private maxPt: McGePoint3d = new McGePoint3d();
    constructor(imp?: any) {
        super(imp);
    }
    public create(imp: any) {
        return new McDbTestArcComment(imp)
    }
    /** 获取类名 */
    public getTypeName(): string {
        return "McDbTestArcComment";
    }
    //设置或获取标注圆弧圆心
    public set arcCenter(val: McGePoint3d) {
        this.center = val.clone();
    }
    public get arcCenter(): McGePoint3d {
        return this.center;
    }
    //设置或获取标注圆弧半径
    public set arcRadius(val: number) {
        this.radius = val;
    }
    public get arcRadius(): number {
        return this.radius;
    }
    //设置或获取标注文本高度
    public set textHeight(val: number) {
        this.height = val;
    }
    public get textHeight(): number {
        return this.height;
    }
    //设置或获取标注圆弧起始角度
    public set arcStartAngle(val: number) {
        this.startAngle = val;
    }
    public get arcStartAngle(): number {
        return this.startAngle;
    }
    public set arcEndAngle(val: number) {
        this.endAngle = val;
    }
    public get arcEndAngle(): number {
        return this.endAngle;
    }
    /** 读取数据 */
    public dwgInFields(filter: IMcDbDwgFiler): boolean {
        this.position = filter.readPoint("position").val;
        this.center = filter.readPoint("center").val;
        this.startAngle = filter.readDouble('startAngle').val;
        this.endAngle = filter.readDouble('endAngle').val;
        this.radius = filter.readDouble('radius').val;
        this.height = filter.readDouble('textHeight').val;
        this.minPt = filter.readPoint("minPt").val;
        this.maxPt = filter.readPoint("maxPt").val;
        return true;
    }
    /** 写入数据 */
    public dwgOutFields(filter: IMcDbDwgFiler): boolean {
        filter.writePoint("position", this.position);
        filter.writePoint("center", this.center);
        filter.writeDouble("startAngle", this.startAngle);
        filter.writeDouble("endAngle", this.endAngle);
        filter.writeDouble("radius", this.radius);
        filter.writeDouble("textHeight", this.height);
        filter.writePoint("minPt", this.minPt);
        filter.writePoint("maxPt", this.maxPt);
        return true;
    }
    /** 移动夹点 */
    public moveGripPointsAt(iIndex: number, dXOffset: number, dYOffset: number, dZOffset: number) {
        this.assertWrite();
        this.position.x += dXOffset;
        this.position.y += dYOffset;
        this.position.z += dZOffset;
    };
    /** 获取夹点 */
    public getGripPoints(): McGePoint3dArray {
        let ret = new McGePoint3dArray();
        ret.append(this.position);
        return ret;
    };
    // 绘制标注样式线段
    private drawLine(pt1: McGePoint3d, pt2: McGePoint3d): any {
        const vec = pt2.sub(pt1).normalize().mult(MxFun.screenCoordLong2Doc(this.height * 0.4));
        const _pt = pt2.clone().addvec(vec);
        const _ptClone = pt2.clone().subvec(vec);
        const line = new McDbLine(_pt, _ptClone)
        line.rotate(pt2, Math.PI / 4);
        return { line, pt: _pt };
    }
    private pt1: McGePoint3d = new McGePoint3d();
    private pt2: McGePoint3d = new McGePoint3d();
    private dbulge: number = 0;
    /** 动态绘制 */
    public worldDraw(draw: MxCADWorldDraw): void {
        const allEntityArr: McDbEntity[] = [];

        // 获取测量目标圆弧基础信息
        const arc = new McDbArc();
        arc.center = this.center;
        arc.startAngle = this.startAngle;
        arc.endAngle = this.endAngle;
        arc.radius = this.radius;
        const length = arc.getLength().val;
        const startPt = arc.getPointAtDist(0).val;
        const endPt = arc.getPointAtDist(length).val;

        // 构造标注圆弧长度文本信息
        const lText = new McDbText();
        lText.textString = `${length.toFixed(2)}`;
        lText.height = MxFun.screenCoordLong2Doc(this.height);
        lText.horizontalMode = McDb.TextHorzMode.kTextCenter;
        lText.position = lText.alignmentPoint = this.position;
        // 弧线偏移
        const closePt = arc.getClosestPointTo(this.position, true).val;
        const dist = closePt.distanceTo(this.position);
        arc.offsetCurves(dist, this.position).forEach(obj => {
            const offsetEnt = obj.clone() as McDbArc;
            const length = offsetEnt.getLength().val;
            this.pt1 = offsetEnt.getPointAtDist(0).val;
            this.pt2 = offsetEnt.getPointAtDist(length).val;
            const midPt = offsetEnt.getPointAtDist(length / 2).val;
            this.dbulge = MxCADUtility.calcBulge(this.pt1, midPt, this.pt2).val;
        })
        // 绘制标注样式
        const pl = new McDbPolyline();
        pl.addVertexAt(this.pt1, this.dbulge);
        pl.addVertexAt(this.pt2);
        // 调整文本角度
        const angle = this.pt1.sub(this.pt2).angleTo2(McGeVector3d.kXAxis, McGeVector3d.kNegateZAxis);
        lText.rotation = angle === Math.PI ? 0 : angle;

        const { line: line1, pt: _pt1 } = this.drawLine(startPt, this.pt1);
        const { line: line2, pt: _pt2 } = this.drawLine(endPt, this.pt2);
        pl.trueColor = lText.trueColor = line1.trueColor = line2.trueColor = this.trueColor;
        draw.drawEntity(pl);
        draw.drawEntity(lText);
        draw.drawEntity(line1);
        draw.drawEntity(line2);
        draw.drawEntity(new McDbLine(startPt, _pt1))
        draw.drawEntity(new McDbLine(endPt, _pt2))

        allEntityArr.push(pl)
        allEntityArr.push(lText)
        allEntityArr.push(line1)
        allEntityArr.push(line2)
        allEntityArr.push(new McDbLine(startPt, _pt1))
        allEntityArr.push(new McDbLine(endPt, _pt2))

        this.getBox(allEntityArr);
    }
    private getBox(entityArr: McDbEntity[]) {
        const mxcad = MxCpp.getCurrentMxCAD();
        let _minPt: McGePoint3d | null = null;
        let _maxPt: McGePoint3d | null = null;
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
    /** 设置标注点 */
    public setPosition(pt: McGePoint3d) {
        this.assertWrite();
        this.position = pt.clone();
    }
    /** 获取标注点 */
    public getPoint() {
        return this.position;
    }

    // 获取包围盒
    public getBoundingBox(): { minPt: McGePoint3d; maxPt: McGePoint3d; ret: boolean; } {
        return { minPt: this.minPt, maxPt: this.maxPt, ret: true }
    }
}

// 弧长
async function Mx_ArcLength() {
    const filter = new MxCADResbuf([DxfCode.kEntityType, "ARC"]);
    const getEnt = new MxCADUiPrEntity();
    getEnt.setMessage("请选择一条弧线");
    getEnt.setFilter(filter);
    const entId = await getEnt.go();
    if (!entId.id) return;

    const arc = entId.getMcDbEntity() as McDbArc;
    const mArc = new McDbTestArcComment();
    mArc.arcCenter = arc.center;
    mArc.arcStartAngle = arc.startAngle;
    mArc.arcEndAngle = arc.endAngle;
    mArc.arcRadius = arc.radius;

    // 指定标注位置
    const getPos = new MxCADUiPrPoint();
    getPos.setMessage("请指定尺寸线位置");
    getPos.setUserDraw((pt, pw) => {
        pw.setColor(0xFF0000);
        mArc.setPosition(pt);
        pw.drawMcDbEntity(mArc)
    });
    const position = await getPos.go();
    if (!position) return;
    mArc.setPosition(position);
    mArc.trueColor = new McCmColor(255, 0, 0);
    const mxcad = MxCpp.getCurrentMxCAD();
    mxcad.drawEntity(mArc);
}

// 自定义测量圆类
class McDbTestMeasuringCircle extends McDbCustomEntity {
    // 定义McDbTestMeasuringCircle内部的点对象 
    // 圆心
    private center: McGePoint3d = new McGePoint3d();
    // 标注点
    private position: McGePoint3d = new McGePoint3d();
    // 圆半径
    private radius: number = 0;
    /** 包围盒最大点 包围盒最小点 */
    private minPt: McGePoint3d = new McGePoint3d();
    private maxPt: McGePoint3d = new McGePoint3d();
    // 构造函数
    constructor(imp?: any) {
        super(imp);
    }
    // 创建函数
    public create(imp: any) {
        return new McDbTestMeasuringCircle(imp)
    }
    // 获取类名
    public getTypeName(): string {
        return "McDbTestMeasuringCircle";
    }
    //设置或获取圆半径
    public set circleRadius(val: number) {
        this.radius = val;
    }
    public get circleRadius(): number {
        return this.radius;
    }
    // 读取自定义实体数据pt1、pt2
    public dwgInFields(filter: IMcDbDwgFiler): boolean {
        this.center = filter.readPoint("center").val;
        this.position = filter.readPoint("position").val;
        this.radius = filter.readDouble("radius").val;
        this.minPt = filter.readPoint("minPt").val;
        this.maxPt = filter.readPoint("maxPt").val;

        return true;
    }
    // 写入自定义实体数据pt1、pt2
    public dwgOutFields(filter: IMcDbDwgFiler): boolean {
        filter.writePoint("center", this.center);
        filter.writePoint("position", this.position);
        filter.writeDouble("radius", this.radius);
        filter.writePoint("minPt", this.minPt);
        filter.writePoint("maxPt", this.maxPt);

        return true;
    }

    // 移动自定义对象的夹点
    public moveGripPointsAt(iIndex: number, dXOffset: number, dYOffset: number, dZOffset: number) {
        this.assertWrite();
        this.position.x += dXOffset;
        this.position.y += dYOffset;
        this.position.z += dZOffset;
    };
    // 获取自定义对象的夹点
    public getGripPoints(): McGePoint3dArray {
        let ret = new McGePoint3dArray()
        ret.append(this.position);
        return ret;
    };
    // 绘制实体
    public worldDraw(draw: MxCADWorldDraw): void {
        const allEntityArr: McDbEntity[] = [];

        const circle = new McDbCircle();
        circle.center = this.center;
        circle.radius = this.radius;
        const length = circle.getLength().val;
        const radius = circle.radius;
        const area = Math.PI * radius * radius;

        const mText = new McDbMText();
        mText.contents = `半径：${radius.toFixed(2)} \\P 周长：${length.toFixed(2)} \\P 面积：${area.toFixed(2)}`
        mText.textHeight = radius / 6;
        mText.attachment = McDb.AttachmentPoint.kMiddleCenter;
        mText.location = this.position;
        mText.trueColor = circle.trueColor = this.trueColor;
        draw.drawEntity(mText);
        draw.drawEntity(circle);

        allEntityArr.push(mText)
        allEntityArr.push(circle)
        this.getBox(allEntityArr);
    }
    private getBox(entityArr: McDbEntity[]) {
        const mxcad = MxCpp.getCurrentMxCAD();
        let _minPt: McGePoint3d | null = null
        let _maxPt: McGePoint3d | null = null;
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
    // 设置pt1
    public setCenter(pt: McGePoint3d) {
        this.assertWrite();
        this.center = pt.clone();
    }
    // 获取pt1
    public getCenter() {
        return this.center;
    }
    // 获取position
    public setPosition(pt: McGePoint3d) {
        this.assertWrite();
        this.position = pt.clone();
    }
    // 获取position
    public getPosition() {
        return this.position;
    }
    // 获取包围盒
    public getBoundingBox(): { minPt: McGePoint3d; maxPt: McGePoint3d; ret: boolean; } {
        return { minPt: this.minPt, maxPt: this.maxPt, ret: true }
    }
}

// 测量圆
async function Mx_MeasuringCircle() {
    const filter = new MxCADResbuf([DxfCode.kEntityType, "CIRCLE"]);
    const getEnt = new MxCADUiPrEntity();
    getEnt.setMessage("请选择一个圆对象");
    getEnt.setFilter(filter);
    const entId = await getEnt.go();
    if (!entId.id) return;

    const circle = entId.getMcDbEntity() as McDbCircle;
    circle.highlight(true);
    const mCircle = new McDbTestMeasuringCircle();
    mCircle.setCenter(circle.center);
    mCircle.circleRadius = circle.radius;


    const getPt = new MxCADUiPrPoint();
    getPt.setMessage("请指定文字位置");
    getPt.setUserDraw((pt, pw) => {
        pw.setColor(0xFF0000);
        mCircle.setPosition(pt);
        pw.drawMcDbEntity(mCircle);
    });
    const point = await getPt.go();
    if (!point) return;
    mCircle.setPosition(point);
    mCircle.trueColor = new McCmColor(255, 0, 0)
    const mxcad = MxCpp.getCurrentMxCAD();
    mxcad.drawEntity(mCircle);
    circle.highlight(false);
};

// 自定义连续测量类
class McDbTestConMeasurement extends McDbCustomEntity {
    // 定义McDbTestConMeasurement内部的点对象 
    // 测量点数组
    private points: McGePoint3d[] = [];
    private dbulges: number[] = [];
    // 文字点位置
    private position: McGePoint3d = new McGePoint3d();
    // 文字高度
    private height: number = 30;
    /** 标注颜色 */
    private dimColor: McCmColor = new McCmColor(255, 0, 0);
    /** 标注线段宽度 */
    private width: number = 0.1;
    /** 是否显示分段长度 */
    private showSegLength: boolean = false;
    /** 包围盒最大点 包围盒最小点 */
    private minPt: McGePoint3d = new McGePoint3d();
    private maxPt: McGePoint3d = new McGePoint3d();

    // 构造函数
    constructor(imp?: any) {
        super(imp);
    }
    // 创建函数
    public create(imp: any) {
        return new McDbTestConMeasurement(imp)
    }
    // 获取类名
    public getTypeName(): string {
        return "McDbTestConMeasurement";
    }
    //设置或获取文本字高
    public set textHeight(val: number) {
        this.height = val;
    }
    public get textHeight(): number {
        return this.height;
    }
    /** 设置或获取标注颜色
     * val:颜色rgb值数组
     */
    public set color(val: McCmColor) {
        this.dimColor = val.clone();
    }
    public get color(): McCmColor {
        return this.dimColor;
    }
    /** 设置线段宽度 */
    public set conWidth(val: number) {
        this.width = MxFun.screenCoordLong2Doc(val);
    }
    public get conWidth(): number {
        return this.width;
    }
    /** 显示分段长度 */
    public set isShowSegLength(val: boolean) {
        this.showSegLength = val;
    }
    public get isShowSegLength(): boolean {
        return this.showSegLength;
    }
    // 读取自定义实体数据
    public dwgInFields(filter: IMcDbDwgFiler): boolean {
        this.points = filter.readPoints("points").val;
        this.position = filter.readPoint("position").val;
        const _dbulges = filter.readString("dbulges").val;
        this.dbulges = _dbulges.split(",").map(Number);
        const _dimColor = filter.readString("dimColor").val;
        this.dimColor = new McCmColor(..._dimColor.split(",").map(Number));
        this.width = filter.readDouble("conWidth").val;
        this.showSegLength = filter.readLong('showSegLength').val === 1;
        this.minPt = filter.readPoint("minPt").val;
        this.maxPt = filter.readPoint("maxPt").val;
        return true;
    }
    // 写入自定义实体数据
    public dwgOutFields(filter: IMcDbDwgFiler): boolean {
        const _dbulges = this.dbulges.toString();
        const _color = `${this.dimColor.red},${this.dimColor.green},${this.dimColor.blue}`;
        const _showSegLength = this.showSegLength ? 1 : 0;
        filter.writePoints("points", this.points);
        filter.writePoint("position", this.position);
        filter.writeString("dbulges", _dbulges);
        filter.writeString("dimColor", _color);
        filter.writeDouble("conWidth", this.width);
        filter.writeLong('showSegLength', _showSegLength);
        filter.writePoint("minPt", this.minPt);
        filter.writePoint("maxPt", this.maxPt);
        return true;
    }

    // 移动自定义对象的夹点
    public moveGripPointsAt(iIndex: number, dXOffset: number, dYOffset: number, dZOffset: number) {
        this.assertWrite();
        if (iIndex < this.points.length) {
            this.points[iIndex].x += dXOffset;
            this.points[iIndex].y += dYOffset;
            this.points[iIndex].z += dZOffset;
        } else {
            this.position.x += dXOffset;
            this.position.y += dYOffset;
            this.position.z += dZOffset;
        }
    };
    // 获取自定义对象的夹点
    public getGripPoints(): McGePoint3dArray {
        let ret = new McGePoint3dArray()
        this.points.forEach(pt => {
            ret.append(pt)
        });
        ret.append(this.position);
        return ret;
    };
    // 绘制实体
    public worldDraw(draw: MxCADWorldDraw): void {
        const allEntityArr: McDbEntity[] = [];

        const pl = new McDbPolyline();
        const lengthArr: McDbText[] = [];
        this.points.forEach((pt, index) => {
            let width = this.width;
            if (index === this.points.length - 1) width = 0;
            pl.addVertexAt(pt, this.dbulges[index], width, width);
            if (index > 0) {
                const pt1 = this.points[index - 1];
                const l = new McDbPolyline();
                l.addVertexAt(pt1, this.dbulges[index - 1]);
                l.addVertexAt(pt, this.dbulges[index]);
                const length = l.getLength().val;
                const position = l.getPointAtDist(length / 2).val;
                const text = new McDbText();
                text.textString = `${length.toFixed(2)}`;
                text.height = MxFun.screenCoordLong2Doc(this.height * 0.6);
                text.horizontalMode = McDb.TextHorzMode.kTextCenter;
                // 旋转角度
                let vec;
                if (pt1.x <= pt.x) {
                    vec = pt.sub(pt1);
                } else {
                    vec = pt1.sub(pt);
                }
                // 取垂直向量
                const perpVec = vec.clone().perpVector().normalize();
                const textNum = MxFun.screenCoordLong2Doc(this.height * 0.15);
                const line = new McDbLine(pt1, pt);
                const midPt = line.getPointAtDist(line.getLength().val / 2).val;
                if (midPt.y >= position.y) {
                    position.addvec(perpVec.mult(textNum));
                } else {
                    position.subvec(perpVec.mult(textNum));
                };
                text.position = text.alignmentPoint = position;
                const angle = vec.angleTo2(McGeVector3d.kXAxis, McGeVector3d.kNegateZAxis);
                text.rotation = angle === Math.PI ? 0 : angle;
                lengthArr.push(text)
            }
        });
        const mxcad = MxCpp.getCurrentMxCAD();
        const plId = mxcad.drawEntity(pl);
        const length = (plId.getMcDbEntity() as McDbPolyline).getLength().val;
        const endPt = this.points[this.points.length - 1];
        const vec = pl.getFirstDeriv(endPt).val;
        const _vec = vec.clone();
        _vec.rotateBy(Math.PI / 4).normalize().mult(this.width * 5);
        const pt1 = endPt.clone().addvec(_vec);
        const pt2 = endPt.clone().subvec(_vec)
        const line = new McDbPolyline();
        line.addVertexAt(pt1, 0, this.width, this.width);
        line.addVertexAt(pt2);
        plId.erase();
        const text = new McDbText();
        text.textString = `${length.toFixed(2)}`;
        text.height = MxFun.screenCoordLong2Doc(this.height);
        const num = MxFun.screenCoordLong2Doc(4)
        text.position = text.alignmentPoint = new McGePoint3d(this.position.x + num, this.position.y + num);
        text.horizontalMode = McDb.TextHorzMode.kTextLeft;
        const textId = mxcad.drawEntity(text);
        const { minPt, maxPt } = (textId.getMcDbEntity() as McDbText).getBoundingBox();
        textId.erase();
        const lastPoint = new McGePoint3d(this.position.x + Math.abs(minPt.x - maxPt.x) + num * 6, this.position.y);
        pl.addVertexAt(this.position);
        pl.addVertexAt(lastPoint);
        if (this.showSegLength) {
            lengthArr.forEach(ent => {
                draw.drawEntity(ent);
                allEntityArr.push(ent)
            })
        }
        draw.trueColor = this.dimColor;
        draw.drawEntity(pl);
        draw.drawEntity(text);
        draw.drawEntity(line);

        allEntityArr.push(pl)
        allEntityArr.push(text)
        allEntityArr.push(line);
        this.getBox(allEntityArr);
    }

    private getBox(entityArr: McDbEntity[]) {
        const mxcad = MxCpp.getCurrentMxCAD();
        let _minPt: McGePoint3d | null = null;
        let _maxPt: McGePoint3d | null = null;
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

    // 设置pt1
    public addVertex(pt: McGePoint3d, dbulge: number) {
        this.assertWrite();
        this.dbulges.push(dbulge);
        this.points.push(pt);
    }
    // 获取pt1
    public getPoints() {
        return this.points;
    }
    // 获取position
    public setPosition(pt: McGePoint3d) {
        this.assertWrite();
        this.position = pt.clone();
    }
    // 获取position
    public getPosition() {
        return this.position;
    }
    // 获取包围盒
    public getBoundingBox(): { minPt: McGePoint3d; maxPt: McGePoint3d; ret: boolean; } {
        return { minPt: this.minPt, maxPt: this.maxPt, ret: true }
    }
}

/**
 * 设置系统变量
 * 关闭正交,格栅
 * 打开所有对象追踪
 * @param param:0 恢复 1设置
 */
let orginSet: { name: string, value: number }[] = [];
function setSystemVariables(param: number) {
    const mxcad = MxCpp.getCurrentMxCAD();
    if (param === 1) {
        orginSet.push(
            {
                name: "ORTHOMODE",
                value: mxcad.getSysVarLong("ORTHOMODE"),
            },
            {
                name: "GRIDMODE",
                value: mxcad.getSysVarLong("GRIDMODE"),
            },
            {
                name: "OSMODE",
                value: mxcad.getSysVarLong("OSMODE"),
            }
        )
        // 关闭正交、格栅、打开所有对象追踪
        mxcad.setSysVarLong("ORTHOMODE", 0);
        mxcad.setSysVarLong("GRIDMODE", 0);
        mxcad.setSysVarLong("OSMODE", 16383);
    } else if (param === 0) {
        orginSet.forEach(item => {
            mxcad.setSysVarLong(item.name, item.value);
        })
    }
}

// 连续取点（含弧线凸度）
async function ContinuousSampling() {
    // 设置系统变量
    setSystemVariables(1);
    let ptArr: { pt: McGePoint3d, dbulge: number }[] = []; // 测量点数组
    let flag: boolean = false; // 第一次点击是否为圆弧标注
    const filter = new MxCADResbuf([DxfCode.kEntityType, "ARC"]); // 筛选弧线
    const mxcad = MxCpp.getCurrentMxCAD();
    let dTol = mxcad.mxdraw.screenCoordLong2Doc(0.5);// 设置精度值

    // 记录最后选择的圆弧id
    let arcId: McObjectId | null = null;
    while (true) {
        // 循环取测量点
        const getPt = new MxCADUiPrPoint();
        getPt.setMessage("请选择直线的端点或弧线");
        getPt.setKeyWords("[回退(B)/结束(O)]");
        if (ptArr.length > 0) getPt.setBasePt(ptArr[ptArr.length - 1].pt);
        getPt.setUserDraw((pt, pw) => {
            const pl = new McDbPolyline();
            ptArr.forEach(obj => {
                pl.addVertexAt(obj.pt, obj.dbulge, 0.1, 0.1);
            });
            pw.drawMcDbEntity(pl)
        })
        const pt = await getPt.go();
        const key = getPt.keyWordPicked();
        if (key === "B") {
            // 回退
            if (ptArr.length > 1) ptArr.pop();
            arcId = null;
        } else if (key === "O") {
            // 结束
            break;
        } else {
            // 添加测量点
            if (!pt) break;
            const entId = MxCADUtility.findEntAtPoint(pt.x, pt.y, pt.z, -1, filter);
            if (!entId.id) {
                arcId = null;
                if (flag) {
                    // 第一次是弧线
                    const res = ptArr.filter(item => item.pt.distanceTo(pt) < dTol);
                    if (!res.length) {
                        alert("请选择连续的线段！")
                    }
                } else {
                    ptArr.push({ pt, dbulge: 0 })
                }
            } else {
                const arc = entId.getMcDbEntity() as McDbArc;
                const length = arc.getLength().val;
                const startPt = arc.getPointAtDist(0).val;
                const endPt = arc.getPointAtDist(length).val;

                if (startPt.distanceTo(pt) < dTol || endPt.distanceTo(pt) < dTol) {
                    // pt为圆弧端点
                    if (flag) {
                        // 第一次点击为圆弧
                        const dbulge = -ptArr[0].dbulge;
                        const pt1 = ptArr[ptArr.length - 2].pt;
                        const pt2 = ptArr[ptArr.length - 1].pt;
                        if (pt1.distanceTo(pt) < dTol) {
                            ptArr.slice(0, ptArr.length - 2);
                            ptArr.push({ pt: pt2, dbulge });
                            ptArr.push({ pt: pt1, dbulge: 0 });
                        };
                        flag = false;
                        arcId = entId;
                    } else {
                        ptArr.push({ pt, dbulge: 0 })
                    }
                } else {
                    // pt为圆弧上的点
                    if (ptArr.length > 0) {
                        const lastPt = ptArr[ptArr.length - 1].pt;
                        if (startPt.distanceTo(lastPt) < dTol || endPt.distanceTo(lastPt) < dTol) {
                            if (arcId?.id === entId.id) {
                                console.log('点击同一个圆弧');
                                ptArr.pop();
                                const preItem = ptArr[ptArr.length - 1]
                                // 三点确定凸度 lastPt pt 以及两点的中间点 
                                const l1 = arc.getDistAtPoint(preItem.pt).val;
                                const l2 = arc.getDistAtPoint(pt).val;
                                let midPt = arc.getPointAtDist(l1 + (l2 - l1) / 2).val; // 两点的中间点
                                let arcTest = new McDbArc();
                                arcTest.computeArc(preItem.pt.x, preItem.pt.y, midPt.x, midPt.y, pt.x, pt.y);//三点画圆弧
                                if (arcTest.getLength().val > arc.getLength().val) {
                                    const _clone = arcTest.clone() as McDbArc;
                                    arcTest.startAngle = _clone.endAngle;
                                    arcTest.endAngle = _clone.startAngle;
                                    midPt = arcTest.getPointAtDist(arcTest.getLength().val / 2).val;
                                }
                                preItem.dbulge = MxCADUtility.calcBulge(preItem.pt, midPt, pt).val;
                                ptArr.push({ pt, dbulge: 0 });
                                arcId = null;
                            } else {
                                const point = startPt.distanceTo(lastPt) < dTol ? endPt : startPt; // 结束点
                                ptArr[ptArr.length - 1].dbulge = MxCADUtility.calcBulge(lastPt, pt, point).val;
                                ptArr.push({ pt: point, dbulge: 0 });
                                arcId = entId;
                            }
                        } else {
                            alert("请选择连续的线段！");
                        }
                    } else {
                        // 第一次点击就是arc
                        const dbulge = MxCADUtility.calcBulge(startPt, pt, endPt).val;
                        ptArr.push({ pt: startPt, dbulge });
                        ptArr.push({ pt: endPt, dbulge: 0 });
                        flag = true;
                        arcId = entId;
                    }
                }
            }
        }
    };
    // 恢复初始系统变量
    setSystemVariables(0)
    return ptArr
}

// 连续测量
async function Mx_ContinueMeasurement() {

    const mxcad = MxCpp.getCurrentMxCAD();
    const ptArr = await ContinuousSampling();
    if (ptArr.length < 2) return;
    // 绘制测量标注
    const plDim = new McDbTestConMeasurement();
    ptArr.forEach(item => {
        plDim.addVertex(item.pt, item.dbulge)
    });
    const getPos = new MxCADUiPrPoint();
    getPos.setMessage("请指定文字的位置");
    getPos.setUserDraw((pt, pw) => {
        plDim.setPosition(pt);
        pw.drawMcDbEntity(plDim)
    });
    const position = await getPos.go();
    if (!position) return;
    plDim.setPosition(position);
    mxcad.drawEntity(plDim);
}

// 查看分段长度
async function Mx_CountList() {
    const getEnt = new MxCADUiPrEntity();
    getEnt.setMessage("请选择一个连续测量的标注");
    const entId = await getEnt.go();
    if (!entId.id) return;
    const ent = entId.getMcDbEntity();
    if (!(ent instanceof McDbCustomEntity)) return;
    if (ent.getTypeName() === 'McDbTestConMeasurement') {
        const _clone = ent.clone() as McDbTestConMeasurement;
        _clone.isShowSegLength = !_clone.isShowSegLength;
        MxCpp.getCurrentMxCAD().drawEntity(_clone);
        entId.erase();
    }

}

// 面积含弧线
async function Mx_AreaArc() {

    const ptArr = await ContinuousSampling()
    const mxcad = MxCpp.getCurrentMxCAD();
    const area = new McDbTestAreaComment();
    ptArr.forEach(item => {
        area.addVertex(item.pt, item.dbulge);
    });
    const position = new MxCADUiPrPoint();
    position.setMessage("请选择面积标注的位置");
    position.setUserDraw((pt, pw) => {
        area.setPoint(pt);
        pw.drawMcDbEntity(area);
    })
    const positionPt = await position.go();
    if (!positionPt) return;
    area.setPoint(positionPt);
    area.trueColor = new McCmColor(255, 0, 0);
    mxcad.drawEntity(area);

}

// 测量角度
async function Mx_MeasuringAngle() {
    // 设置过滤器，过滤出直线
    const filter = new MxCADResbuf();
    filter.AddMcDbEntityTypes('LINE')

    const getLine1 = new MxCADUiPrEntity();
    getLine1.setMessage("请选择一条直线");
    getLine1.setFilter(filter);
    const entId1 = await getLine1.go();
    if (!entId1) return;
    const line1 = entId1.getMcDbEntity() as McDbLine;
    line1.highlight(true);

    const getLine2 = new MxCADUiPrEntity();
    getLine2.setMessage("请选择第二条直线");
    getLine2.setFilter(filter);
    const entId2 = await getLine2.go();
    if (!entId2) return;
    const line2 = entId2.getMcDbEntity() as McDbLine;
    line2.highlight(true);

    const getPos = new MxCADUiPrPoint();
    getPos.setMessage("请设置角度标注的位置");
    const dimStyleId = MxCpp.getCurrentMxCAD().addDimStyle("MyDimStyle2", "41,0.18,141,0.09,40,20", "77,1,271,3", "", "");
    const angleDim = new McDb2LineAngularDimension();
    angleDim.xLine1Start = line1.startPoint;
    angleDim.xLine1End = line1.endPoint;
    angleDim.xLine2Start = line2.startPoint;
    angleDim.xLine2End = line2.endPoint;
    angleDim.dimensionStyle = dimStyleId;
    line1.highlight(false);
    line2.highlight(false);

    getPos.setUserDraw((pt, pw) => {
        angleDim.arcPoint = pt;
        pw.drawMcDbEntity(angleDim)
    });
    const position = await getPos.go();
    if (!position) return;
    angleDim.arcPoint = position;
    MxCpp.getCurrentMxCAD().drawEntity(angleDim)
}
export function init() {
    new McDbTestAreaComment().rxInit();
    new McDbTestConMeasurement().rxInit();
    new McDbTestMeasuringCircle().rxInit();
    new McDbTestArcComment().rxInit();
    new McDbTestCoordinateLabeling().rxInit();
    
    MxFun.addCommand("Mx_StaLength", Mx_StaLength);
    MxFun.addCommand("Mx_StaArea", Mx_StaArea);
    MxFun.addCommand("Mx_StandardSlope", Mx_StandardSlope);
    MxFun.addCommand("Mx_CoordAnnotation", Mx_CoordAnnotation);
    MxFun.addCommand("Mx_Elevation", Mx_Elevation);
    MxFun.addCommand("Mx_Area", Mx_Area);
    MxFun.addCommand("Mx_ReactArea", Mx_ReactArea);
    MxFun.addCommand("Mx_DistFromPointToLine", Mx_DistFromPointToLine);
    MxFun.addCommand("Mx_ArcLength", Mx_ArcLength);
    MxFun.addCommand("Mx_MeasuringCircle", Mx_MeasuringCircle);
    MxFun.addCommand("Mx_ContinueMeasurement", Mx_ContinueMeasurement);
    MxFun.addCommand("Mx_CountList", Mx_CountList);
    MxFun.addCommand("Mx_AreaArc", Mx_AreaArc);
    MxFun.addCommand("Mx_MeasuringAngle", Mx_MeasuringAngle);
}