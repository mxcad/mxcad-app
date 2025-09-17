///////////////////////////////////////////////////////////////////////////////
//版权所有（C）2002-2022，成都梦想凯德科技有限公司。
//本软件代码及其文档和相关资料归成都梦想凯德科技有限公司,应用包含本软件的程序必须包括以下版权声明
//此应用程序应与成都梦想凯德科技有限公司达成协议，使用本软件、其文档或相关材料
//https://www.mxdraw.com/
///////////////////////////////////////////////////////////////////////////////
import {
    McGePoint3dArray,
    MxCpp, MxCADUiPrPoint, MxCADUiPrInt, McDbEntity,
    MxCADResbuf, McGePoint3d, MxCADUtility, McDbArc, McDbCircle,
    McObjectId, McGeVector3d, McDbPolyline, McCmColor, McDbLine,
    McDb, McDbCurve, MxCADUiPrEntity, McDbObject, MxCADUiPrDist, MxCADUiPrKeyWord,
    McDbText, MxCADUiPrString, McDbBlockTableRecord, McDbBlockReference, McGeMatrix3d,
    DxfCode,
    IMcDbDwgFiler,
    McDbCustomEntity,
    MxCADWorldDraw,
    McDbHatch,
    McDbMText,
    McDbRasterImage,
    McDbWipeout,
} from "mxcad";
import { DynamicInputType, MxDbRect, MxFun } from "mxdraw";
import { init as insertFrame } from "./InsertFrame"
import { init as initRoads } from './roads';
import { deduplicatePoints } from "./fitTools"
// 星形
async function Mx_DrawStart() {
    const starVert = new MxCADUiPrInt()
    starVert.setMessage(" 请输入星形顶点数：")
    const starNum = await starVert.go()
    if (!starNum) return;
    const getCenter = new MxCADUiPrPoint()
    getCenter.setMessage(" 指定星形中心点:")
    const center = await getCenter.go()
    if (!center) return;
    const getRadius1 = new MxCADUiPrDist();
    getRadius1.setBasePt(center);
    getRadius1.setMessage('请设置星形的内半径:')
    const rVal = await getRadius1.go();
    let radius1;
    if (!rVal) radius1 = 5;
    else radius1 = getRadius1.value();
    const circle1 = new McDbCircle(center.x, center.y, center.z, radius1)

    let pointsArr: McGePoint3d[] = []
    const getRadius2 = new MxCADUiPrDist();
    getRadius2.setBasePt(center);
    getRadius2.setMessage('指定星形的外半径:')
    getRadius2.setUserDraw((pt, pw) => {
        let circle2 = new McDbCircle(center.x, center.y, center.z, pt.distanceTo(center));
        let length1 = circle1.getLength();
        let length2 = circle2.getLength();
        if (!length1 || !length2) return;
        let pointArr: McGePoint3d[] = [];
        for (let i = 0; i < starNum * 2; i++) {
            let point1 = circle1.getPointAtDist(length1.val / (starNum * 2) * i);
            if (!point1.ret) return
            let point2 = circle2.getPointAtDist(length2.val / (starNum * 2) * i);
            if (!point2.ret) return
            if (i % 2 === 0) {
                pointArr.push(point1.val)
            } else {
                pointArr.push(point2.val)
            }
        }
        let pl = new McDbPolyline();
        pointArr.forEach(pt => {
            pl.addVertexAt(pt)
        })
        pl.isClosed = true
        pw.drawMcDbEntity(pl)
        pointsArr = [...pointArr]
    })
    const rVal2 = await getRadius2.go()
    if (!rVal2) return;
    let mxcad = MxCpp.getCurrentMxCAD();
    let pl = new McDbPolyline();
    pointsArr.forEach(pt => {
        pl.addVertexAt(pt)
    })
    pl.isClosed = true;
    mxcad.drawEntity(pl)
}

// 凹凸线
async function Mx_ConcavoVex() {
    let width = 5;
    const getWidth = new MxCADUiPrDist();
    getWidth.setMessage(" 请输入凹凸线宽度<5>");
    const widthVal = await getWidth.go()
    if (widthVal) {
        width = getWidth.value()
    }

    let height = 10;
    const getHeight = new MxCADUiPrDist();
    getHeight.setMessage(" 请输入凹凸线高度<10>");
    const heightVal = await getHeight.go();
    if (heightVal) {
        height = getHeight.value()
    }

    let getFirstPoint = new MxCADUiPrPoint();
    getFirstPoint.setMessage("请点击确定起始点");
    let firstPoint: any = await getFirstPoint.go();
    if (!firstPoint) return
    let getSecondPoint = new MxCADUiPrPoint();
    getSecondPoint.setMessage("请点击确定终点");
    getSecondPoint.setUserDraw((pt, pw) => {
        let line = new McDbLine(firstPoint.x, firstPoint.y, firstPoint.z, pt.x, pt.y, pt.z);
        pw.drawMcDbEntity(line)
    });
    let secondPoint: any = await getSecondPoint.go();
    if (!secondPoint) return

    /**
     * 根据绘制直线上下偏移，并在两条偏移线上取点
     * 最终用Pl线连接
     */
    let line = new McDbLine(firstPoint.x, firstPoint.y, firstPoint.z, secondPoint.x, secondPoint.y, secondPoint.z);
    let line_clone = line.clone() as McDbLine;
    let length = line.getLength();
    let midPt = line.getPointAtDist(length.val / 2).val;
    let angle = McGeVector3d.kYAxis.angleTo1(McGeVector3d.kXAxis)
    line_clone.rotate(midPt, angle);
    let offPt1 = line_clone.getPointAtDist(length.val / 2 + height / 2).val;
    let offPt2 = line_clone.getPointAtDist(length.val / 2 - height / 2).val;
    let objArr1 = line.offsetCurves(height / 2, offPt1);
    let objArr2 = line.offsetCurves(height / 2, offPt2);
    let mxcad = MxCpp.App.getCurrentMxCAD();
    if (objArr1.length() === 0 || objArr2.length() === 0) return;
    let line_1: McDbLine = new McDbLine();
    let line_2: McDbLine = new McDbLine();
    objArr1.forEach((obj: McDbObject) => {
        line_1 = obj.clone() as McDbLine;
    });
    objArr2.forEach((obj: McDbObject) => {
        line_2 = obj.clone() as McDbLine;
    });
    let ptArr: McGePoint3d[] = [];
    let num = length.val / width;
    for (let i = 0; i < num; i++) {
        if (i % 2 === 0) {
            ptArr.push(line_1.getPointAtDist(width * i).val)
            ptArr.push(line_2.getPointAtDist(width * i).val)
        } else {
            ptArr.push(line_2.getPointAtDist(width * i).val)
            ptArr.push(line_1.getPointAtDist(width * i).val)
        }
    }
    let pl = new McDbPolyline;
    ptArr.forEach(pt => {
        pl.addVertexAt(pt)
    })
    let endPt = line.getPointAtDist(width * (parseInt(num.toString()))).val;
    pl.setPointAt(0, line.startPoint);
    pl.setPointAt(ptArr.length - 1, endPt);
    mxcad.drawEntity(pl)

}

// 锯齿线
async function Mx_ZigzagLine() {
    let width = 5;
    const getWidth = new MxCADUiPrDist();
    getWidth.setMessage(" 请输入锯齿线宽度<5>");
    const widthVal = await getWidth.go();
    if (widthVal) {
        width = getWidth.value()
    }

    let height = 10;
    const getHeight = new MxCADUiPrDist();
    getHeight.setMessage(" 请输入锯齿线高度<10>");
    const heightVal = await getHeight.go();
    if (heightVal) {
        height = getHeight.value()
    }

    let getFirstPoint = new MxCADUiPrPoint();
    getFirstPoint.setMessage("请点击确定起始点");
    let firstPoint: any = await getFirstPoint.go();
    if (!firstPoint) return
    let getSecondPoint = new MxCADUiPrPoint();
    getSecondPoint.setMessage("请点击确定终点");
    getSecondPoint.setUserDraw((pt, pw) => {
        let line = new McDbLine(firstPoint.x, firstPoint.y, firstPoint.z, pt.x, pt.y, pt.z);
        pw.drawMcDbEntity(line)
    });
    let secondPoint: any = await getSecondPoint.go();
    if (!secondPoint) return
    let line = new McDbLine(firstPoint.x, firstPoint.y, firstPoint.z, secondPoint.x, secondPoint.y, secondPoint.z);
    let line_clone = line.clone() as McDbLine;
    let length = line.getLength();
    let midPt = line.getPointAtDist(length.val / 2).val;
    let angle = McGeVector3d.kYAxis.angleTo1(McGeVector3d.kXAxis)
    line_clone.rotate(midPt, angle);
    let offPt1 = line_clone.getPointAtDist(length.val / 2 + height / 2).val;
    let offPt2 = line_clone.getPointAtDist(length.val / 2 - height / 2).val;
    let objArr1 = line.offsetCurves(height / 2, offPt1);
    let objArr2 = line.offsetCurves(height / 2, offPt2);
    let mxcad = MxCpp.App.getCurrentMxCAD();
    if (objArr1.length() === 0 || objArr2.length() === 0) return;
    let line_1: McDbLine = new McDbLine();
    let line_2: McDbLine = new McDbLine();
    objArr1.forEach((obj: McDbObject) => {
        line_1 = obj.clone() as McDbLine;
    });
    objArr2.forEach((obj: McDbObject) => {
        line_2 = obj.clone() as McDbLine;
    });
    let ptArr: McGePoint3d[] = [];
    let num = length.val / (width / 2);
    for (let i = 0; i < num; i++) {
        if (i % 2 === 0) {
            ptArr.push(line_1.getPointAtDist(width / 2 * i).val)
        } else {
            ptArr.push(line_2.getPointAtDist(width / 2 * i).val)
        }
    }
    let pl = new McDbPolyline;
    ptArr.forEach(pt => {
        pl.addVertexAt(pt)
    })
    let endPt = line.getPointAtDist(width / 2 * (parseInt(num.toString()))).val;
    pl.setPointAt(0, line.startPoint);
    pl.setPointAt(ptArr.length - 1, endPt);
    mxcad.drawEntity(pl)
}

// 中心矩形
async function Mx_CenterRect() {
    let width = 5;
    const getWidth = new MxCADUiPrDist();
    getWidth.setMessage(" 请输入矩形宽度<5>");
    const widthVal = await getWidth.go();
    if (widthVal) {
        width = getWidth.value()
    }

    let height = 10;
    const getHeight = new MxCADUiPrDist();
    getHeight.setMessage(" 请输入矩形高度<10>");
    const heightVal = await getHeight.go();
    if (heightVal) {
        height = getHeight.value()
    }

    // 根据中心点计算矩形的四个顶点
    const getPoints = (centerPt: McGePoint3d): McGePoint3d[] => {
        const ptArr: McGePoint3d[] = [];
        ptArr.push(new McGePoint3d(centerPt.x + width / 2, centerPt.y + height / 2, centerPt.z));
        ptArr.push(new McGePoint3d(centerPt.x - width / 2, centerPt.y + height / 2, centerPt.z));
        ptArr.push(new McGePoint3d(centerPt.x - width / 2, centerPt.y - height / 2, centerPt.z));
        ptArr.push(new McGePoint3d(centerPt.x + width / 2, centerPt.y - height / 2, centerPt.z));
        return ptArr;
    }
    const getCenterPt = new MxCADUiPrPoint();
    getCenterPt.setMessage("请点击确定矩形中心");
    getCenterPt.setUserDraw((pt, pw) => {
        const ptArr = getPoints(pt);
        let pl = new McDbPolyline;
        ptArr.forEach(pt => {
            pl.addVertexAt(pt)
        });
        pl.isClosed = true;
        pw.drawMcDbEntity(pl)
    })
    const centerPt = await getCenterPt.go();
    if (!centerPt) return;
    const ptArr = getPoints(centerPt);
    let pl = new McDbPolyline;
    ptArr.forEach(pt => {
        pl.addVertexAt(pt)
    })
    const mxcad = MxCpp.App.getCurrentMxCAD();
    pl.isClosed = true;
    mxcad.drawEntity(pl);
}

// 圆中心线
async function Mx_CCLine() {
    let filter = new MxCADResbuf();
    filter.AddMcDbEntityTypes("CIRCLE");
    let aryId = await MxCADUtility.userSelect("选择目标对象", filter);
    if (aryId.length == 0) {
        return;
    };
    aryId.forEach(async (id) => {
        let event = (await id.getMcDbEntity()) as McDbCircle;
        let center = event.center;
        let radius = event.radius;
        let mxcad = MxCpp.App.getCurrentMxCAD();
        let line1 = new McDbLine(center.x + radius * 1.3, center.y, center.z, center.x - radius * 1.3, center.y, center.z);
        line1.trueColor = new McCmColor(255, 0, 0)
        let line2 = new McDbLine(center.x, center.y + radius * 1.3, center.z, center.x, center.y - radius * 1.3, center.z);
        line2.trueColor = new McCmColor(255, 0, 0);
        mxcad.drawEntity(line1)
        mxcad.drawEntity(line2)
    })
}

// 管道
async function Mx_Piping() {

    let diameter = 10
    const getDiameter = new MxCADUiPrDist();
    getDiameter.setMessage(" 请输入管径<10>");
    const diameterVal = await getDiameter.go();
    if (diameterVal) {
        diameter = getDiameter.value()
    }

    let outLen = 10
    const getOutLen = new MxCADUiPrDist();
    getOutLen.setMessage(" 请输入长出管口长度<5>");
    const outLenVal = await getOutLen.go();
    if (outLenVal) {
        outLen = getOutLen.value()
    }

    let getFristPoint = new MxCADUiPrPoint();
    getFristPoint.setMessage("请点击确定起点");
    const fristPt = await getFristPoint.go();
    if (!fristPt) return;
    const getSecondPoint = new MxCADUiPrPoint();
    getSecondPoint.setMessage("请点击确定终点");
    getSecondPoint.setUserDraw((pt, pw) => {
        const line = new McDbLine(fristPt.x, fristPt.y, fristPt.z, pt.x, pt.y, pt.z);
        pw.drawMcDbEntity(line)
    })
    const secondPt = await getSecondPoint.go();
    if (!secondPt) return

    // 上下偏移取线
    const line = new McDbLine(fristPt.x, fristPt.y, fristPt.z, secondPt.x, secondPt.y, secondPt.z);
    const mxcad = MxCpp.App.getCurrentMxCAD();
    let length = line.getLength().val;
    let startPt = line.getPointAtDist(length + outLen);
    let endPt = line.getPointAtDist(0 - outLen);
    let midPt = line.getPointAtDist(length / 2).val;
    let angle = McGeVector3d.kXAxis.angleTo1(McGeVector3d.kYAxis);
    let line_clone = line.clone() as McDbLine;
    line_clone.rotate(midPt, angle);
    let pt1 = line_clone.getPointAtDist(length / 2 + diameter / 2).val
    let pt2 = line_clone.getPointAtDist(length / 2 - diameter / 2).val
    line.offsetCurves(diameter / 2, pt1).forEach(e => {
        (e as McDbEntity).trueColor = new McCmColor(0, 255, 0)
        mxcad.drawEntity(e as McDbEntity)
    })
    line.offsetCurves(diameter / 2, pt2).forEach(e => {
        (e as McDbEntity).trueColor = new McCmColor(0, 255, 0)
        mxcad.drawEntity(e as McDbEntity)
    })

    // 设置中线的线型
    let lintype = mxcad.addLinetypeEx("TestMyLine", '25,-5');
    if (!lintype.isValid()) return;
    line.linetypeId = lintype;
    line.endPoint = endPt.val;
    line.startPoint = startPt.val;
    line.trueColor = new McCmColor(255, 0, 0);
    mxcad.drawEntity(line);
}

// 剖管符
async function Mx_CutPipeline() {

    const getFirstPoint = new MxCADUiPrPoint();
    getFirstPoint.setMessage('指定剖管线起点');
    const pt1 = await getFirstPoint.go();
    if (!pt1) return
    const getNextPoint = new MxCADUiPrPoint();
    getNextPoint.setMessage('指定剖管线终点');
    getNextPoint.setUserDraw((pt, pw) => {
        let line = new McDbLine(pt1.x, pt1.y, pt1.z, pt.x, pt.y, pt.z);
        pw.drawMcDbEntity(line)
    })
    const pt2 = await getNextPoint.go();
    if (!pt2) return;
    const line = new McDbLine(pt1.x, pt1.y, pt1.z, pt2.x, pt2.y, pt2.z);
    const length = line.getLength().val;
    const dist = length / 8;
    const midPt = line.getPointAtDist(length / 2).val;
    const line_clone = line.clone() as McDbLine;
    line_clone.rotate(midPt, Math.PI / 2);
    const offPt1 = line_clone.getPointAtDist(length / 2 + dist).val;
    const offPt2 = line_clone.getPointAtDist(length / 2 - dist).val;
    const mxcad = MxCpp.App.getCurrentMxCAD();
    let line_1: McDbLine = new McDbLine();
    (line.clone() as McDbLine).offsetCurves(dist, offPt1).forEach(event => {
        line_1 = event as McDbLine;
    })//偏移距离，偏移点
    let line_2: any
    (line.clone() as McDbLine).offsetCurves(dist, offPt2).forEach(event => {
        line_2 = event as McDbLine;
    })//偏移距离，偏移点
    const pointArr1: McGePoint3d[] = [];
    const pointArr2: McGePoint3d[] = [];
    for (let i = 0; i < 4; i++) {
        if (i % 2 !== 0) {
            pointArr1.push(line_1.getPointAtDist(i * dist * 2).val)
            pointArr2.push(line_2.getPointAtDist(i * dist * 2).val)
        }
    }
    let objectId: McObjectId
    let arc1 = new McDbArc()
    arc1.computeArc(pt1.x, pt1.y, pointArr1[0].x, pointArr1[0].y, midPt.x, midPt.y);
    mxcad.drawEntity(arc1);
    let arc2 = new McDbArc()
    arc2.computeArc(pt1.x, pt1.y, pointArr2[0].x, pointArr2[0].y, midPt.x, midPt.y);
    mxcad.drawEntity(arc2)
    let arc3 = new McDbArc()
    arc3.computeArc(midPt.x, midPt.y, pointArr2[1].x, pointArr2[1].y, pt2.x, pt2.y);
    objectId = mxcad.drawEntity(arc3)
    let getKey = new MxCADUiPrKeyWord;
    while (true) {
        getKey.setMessage("选择剖管线圆弧方向")
        getKey.setKeyWords('[左边(L)/右边(R)]')
        const keyWord = await getKey.go();
        if (!keyWord) return;
        if (keyWord == 'L') {
            let arc3 = new McDbArc()
            objectId.erase();
            arc3.computeArc(midPt.x, midPt.y, pointArr2[1].x, pointArr2[1].y, pt2.x, pt2.y);
            objectId = mxcad.drawEntity(arc3)
        } else if (keyWord == 'R') {
            objectId.erase();
            let arc3 = new McDbArc()
            arc3.computeArc(midPt.x, midPt.y, pointArr1[1].x, pointArr1[1].y, pt2.x, pt2.y);
            objectId = mxcad.drawEntity(arc3);
        }
    }
}

// 焊缝线
async function Mx_WelLine() {
    // 选择模式
    const getKeyWord = new MxCADUiPrKeyWord();
    getKeyWord.setMessage("选择模式");
    getKeyWord.setKeyWords(`[直线焊缝(L)/弧线焊缝(A)]`);
    const keyWord = await getKeyWord.go();
    if (!keyWord) return;

    // 获取焊缝半径
    let radius = 5;
    const getRadius = new MxCADUiPrDist();
    getRadius.setMessage(" 请输入焊缝半径<5>");
    const radiusVal = await getRadius.go();
    if (radiusVal) {
        radius = getRadius.value()
    }

    // 根据选择模式绘制曲线
    let curve = new McDbCurve()
    if (keyWord === 'L') {
        let getFirstPoint = new MxCADUiPrPoint();
        getFirstPoint.setMessage("请点击确定起始点");
        let firstPoint: any = await getFirstPoint.go();
        if (!firstPoint) return;
        let getSecondPoint = new MxCADUiPrPoint();
        getSecondPoint.setMessage("请点击确定终点");
        getSecondPoint.setUserDraw((pt, pw) => {
            let line = new McDbLine(firstPoint.x, firstPoint.y, firstPoint.z, pt.x, pt.y, pt.z);
            pw.drawMcDbEntity(line)
        });
        let secondPoint = await getSecondPoint.go();
        if (!secondPoint) return
        curve = new McDbLine(firstPoint.x, firstPoint.y, firstPoint.z, secondPoint.x, secondPoint.y, secondPoint.z);
    } else if (keyWord === 'A') {
        let getFristPoint = new MxCADUiPrPoint();
        getFristPoint.setMessage('指定起点');
        let fristPoint = (await getFristPoint.go()) as McGePoint3d;
        if (!fristPoint) return
        let getSecondPoint = new MxCADUiPrPoint();
        getSecondPoint.setMessage('指定圆弧的第二个点')
        getSecondPoint.setUserDraw((pt, pw) => {
            pw.drawLine(fristPoint.toVector3(), pt.toVector3())
        })
        let secondPoint = await getSecondPoint.go();
        if (!secondPoint) return;
        let getThirdPoint = new MxCADUiPrPoint();
        getThirdPoint.setMessage('指定圆弧的端点')
        getThirdPoint.setUserDraw((pt, pw) => {
            let arc = new McDbArc();
            arc.computeArc(fristPoint.x, fristPoint.y, secondPoint.x, secondPoint.y, pt.x, pt.y);//三点画圆弧
            pw.drawMcDbEntity(arc)
        });
        let thirdPoint = await getThirdPoint.go();
        if (!thirdPoint) return
        let arc = new McDbArc();
        arc.computeArc(fristPoint.x, fristPoint.y, secondPoint.x, secondPoint.y, thirdPoint.x, thirdPoint.y);//三点画圆弧
        curve = arc;
    }

    // 将曲线转化为焊缝线
    const mxcad = MxCpp.App.getCurrentMxCAD()
    let length = curve.getLength().val;
    let num = length / radius;
    let arcArr: McDbCurve[] = [];
    let center: McGePoint3d;
    let r: number;
    if (keyWord === 'A') {
        center = (curve as McDbArc).center;
        r = (curve as McDbArc).radius;
    }
    for (let i = 0; i < num; i++) {
        let pt = curve.getPointAtDist(radius * i).val;
        let circle = new McDbCircle(pt.x, pt.y, pt.z, radius);
        const intPts = circle.IntersectWith(curve, McDb.Intersect.kExtendBoth);
        if (!intPts.length()) return;
        let ptArr: McGePoint3d[] = [];
        intPts.forEach(pt => { ptArr.push(pt) });
        // 如果是圆弧模式,取远离圆心的那一段圆弧;
        let mergeArr: McDbCurve[] = [];
        let res: McDbCurve[] = [];
        circle.splitCurves(ptArr).forEach((obj: McDbObject, index: number) => {
            if (keyWord === 'L') {
                if (index % 2 !== 0) {
                    arcArr.push(obj as McDbCurve)
                }
            } else if (keyWord === 'A') {
                let c = obj.clone() as McDbCurve;
                let midPt = c.getPointAtDist(c.getLength().val / 2).val;
                if (midPt.distanceTo(center) > r) {
                    mergeArr.push(c);
                } else {
                    res.push(c)
                }
            }
        });
        if (mergeArr.length === 1 && keyWord === 'A') {
            arcArr.push(mergeArr[0]);
        } else if (keyWord === 'A' && mergeArr.length > 1) {
            res[0].rotate(circle.center, Math.PI);
            arcArr.push(res[0])
        }
    }
    arcArr.forEach((item, index) => {
        if (index === 0) {
            mxcad.drawEntity(item)
        } else {
            let intPts = item.IntersectWith(arcArr[index - 1], McDb.Intersect.kExtendThis);
            if (intPts.length() === 0) return;
            let arr: McGePoint3d[] = [];
            intPts.forEach(pt => { arr.push(pt) });
            let objArr: any[] = []
            item.splitCurves(arr).forEach((obj: McDbObject, index: number) => {
                objArr.push({ obj_cur: obj, lenth: (obj as McDbCurve).getLength().val })
            })
            let lengthArr = objArr.map(item => item.lenth)
            mxcad.drawEntity(objArr[lengthArr.indexOf(Math.max(...lengthArr))].obj_cur)
        }
    })

}

// 中垂线
async function Mx_PerpLine() {
    let filter = new MxCADResbuf();
    filter.AddMcDbEntityTypes("LINE,LWPOLYLINE");
    let aryId = await MxCADUtility.userSelect("选择对象", filter);
    if (aryId.length == 0) {
        return;
    };
    aryId.forEach(async (id) => {
        let event = await id.getMcDbEntity();
        if (!event) return
        let line = (event.clone()) as McDbLine
        let dist = line.getLength();
        let minPt = line.getPointAtDist(dist.val / 2).val;
        let vec = line.getFirstDeriv(minPt);
        if (!vec.ret) return;
        let angle1 = McGeVector3d.kYAxis.angleTo1(McGeVector3d.kXAxis);
        line.rotate(minPt, angle1)
        let mxcad = MxCpp.App.getCurrentMxCAD();
        line.trueColor = new McCmColor(255, 0, 0);
        mxcad.drawEntity(line)
    })
}

// 楼梯
async function Mx_StairLine() {
    let width = 25;
    const getWidth = new MxCADUiPrDist();
    getWidth.setMessage("请输入宽度<25>");
    const widthval = await getWidth.go();
    if (widthval) {
        width = getWidth.value()
    }

    let height = 15;
    const getHeight = new MxCADUiPrDist();
    getHeight.setMessage("请输入高度<15>");
    const heightVal = await getHeight.go();
    if (heightVal) {
        height = getHeight.value()
    }

    const getNum = new MxCADUiPrInt();
    getNum.setMessage("请输入楼梯级数<10>");
    const num = await getNum.go() || 10;

    const l = Math.sqrt(width * width + height * height);
    const getFristPoint = new MxCADUiPrPoint();
    getFristPoint.setMessage("请点击确定起点");
    const fristPt = await getFristPoint.go();
    if (!fristPt) return;
    const getSecondPoint = new MxCADUiPrPoint();
    getSecondPoint.setMessage("请点击确定终点");
    getSecondPoint.setUserDraw((pt, pw) => {
        const line = new McDbLine(fristPt.x, fristPt.y, fristPt.z, pt.x, pt.y, pt.z);
        pw.drawMcDbEntity(line)
    })
    const secondPt = await getSecondPoint.go();
    if (!secondPt) return
    const line = new McDbLine(fristPt.x, fristPt.y, fristPt.z, secondPt.x, secondPt.y, secondPt.z);
    const pointArr: McGePoint3d[] = []
    for (let i = 0; i < num + 1; i++) {
        let pt = line.getPointAtDist(l * i).val;
        pointArr.push(pt);
    }
    const pl = new McDbPolyline;
    pointArr.forEach((pt, index) => {
        pl.addVertexAt(pt)
        if (index != pointArr.length - 1) {
            let nextPt = new McGePoint3d(pt.x, pointArr[index + 1].y, pt.z)
            pl.addVertexAt(nextPt)
        }
    })
    const mxcad = MxCpp.App.getCurrentMxCAD();
    mxcad.drawEntity(pl)
}

// 实心圆
async function Mx_SolidCircle() {
    const getCenter = new MxCADUiPrPoint();
    getCenter.setMessage('请确定圆心位置 ');
    const center = await getCenter.go();
    if (!center) return;
    const getRadius = new MxCADUiPrDist();
    getRadius.setBasePt(center);
    getRadius.setMessage('请输入圆半径');
    getRadius.setUserDraw((pt, pw) => {
        const r = pt.distanceTo(center);
        const circle = new McDbCircle();
        circle.center = center;
        circle.radius = r;
        pw.drawMcDbEntity(circle)
    })
    const radiusVal = await getRadius.go();
    if (!radiusVal) return;
    const radius = getRadius.value();
    const mxcad = MxCpp.getCurrentMxCAD();
    mxcad.pathCircle(center.x, center.y, radius);
    mxcad.drawPathToHatch();
}

// 保温棉
async function Mx_CottonInsulation() {
    let width = 5;
    const getWidth = new MxCADUiPrDist();
    getWidth.setMessage(" 请输入保温棉宽度<5>");
    const widthVal = await getWidth.go();
    if (widthVal) {
        width = getWidth.value()
    }

    let height = 10;
    const getHeight = new MxCADUiPrDist();
    getHeight.setMessage(" 请输入保温棉高度<10>");
    const heightVal = await getHeight.go();
    if (heightVal) {
        height = getHeight.value()
    }

    const getFristPoint = new MxCADUiPrPoint();
    getFristPoint.setMessage("请点击确定起点");
    const fristPt = await getFristPoint.go();
    if (!fristPt) return
    const getNextPoint = new MxCADUiPrPoint();
    getNextPoint.setMessage('请点击下一个点');
    getNextPoint.setUserDraw((pt, pw) => {
        const line = new McDbLine(fristPt.x, fristPt.y, fristPt.z, pt.x, pt.y, pt.z);
        pw.drawMcDbEntity(line)
    })
    const nextPt = await getNextPoint.go();
    if (!nextPt) return
    const line = new McDbLine(fristPt.x, fristPt.y, fristPt.z, nextPt.x, nextPt.y, nextPt.z);
    if (fristPt.y < nextPt.y) {
        line.startPoint = new McGePoint3d(nextPt.x, nextPt.y, nextPt.z);
        line.endPoint = new McGePoint3d(fristPt.x, fristPt.y, fristPt.z);;
    }
    const midPt = line.getPointAtDist(line.getLength().val / 2).val;
    const line_clone = line.clone() as McDbLine;
    line_clone.rotate(midPt, Math.PI / 2);
    const pt1 = line_clone.getPointAtDist(line.getLength().val / 2 + height / 2).val;
    const pt2 = line_clone.getPointAtDist(line.getLength().val / 2 - height / 2).val;
    let line1: any;
    let line2: any;
    line.offsetCurves(height / 2, pt1).forEach(e => {
        line1 = e;
    })
    line.offsetCurves(height / 2, pt2).forEach(e => {
        line2 = e;
    })
    let num = line.getLength().val / width * 2;
    let ptArr: McGePoint3d[] = [];
    let center1: McGePoint3d[] = [];
    let center2: McGePoint3d[] = [];
    for (let i = 0; i < num; i++) {
        if (i % 2 == 0) {
            let pt = line2.getPointAtDist(i * (width / 2)).val;
            let center = line1.getPointAtDist(i * (width / 2)).val;
            center1.push(center);
            ptArr.push(pt);
        } else {
            let pt = line1.getPointAtDist(i * (width / 2)).val;
            let center = line2.getPointAtDist(i * (width / 2)).val;
            center2.push(center);
            ptArr.push(pt);
        }
    };
    const pl = new McDbPolyline();
    ptArr.forEach(pt => {
        pl.addVertexAt(pt)
    })
    const mxcad = MxCpp.App.getCurrentMxCAD();
    mxcad.drawEntity(pl);
    center1.forEach(pt => {
        const arc = new McDbArc();
        arc.center = pt;
        arc.radius = width / 2;
        arc.startAngle = -(new McGeVector3d(line.endPoint.x - line.startPoint.x, line.endPoint.y - line.startPoint.y)).angleTo1(McGeVector3d.kXAxis);
        arc.endAngle = (new McGeVector3d(line.startPoint.x - line.endPoint.x, line.startPoint.y - line.endPoint.y)).angleTo1(McGeVector3d.kXAxis);
        mxcad.drawEntity(arc);
    })
    center2.forEach(pt => {
        const arc = new McDbArc();
        arc.center = pt;
        arc.radius = width / 2;
        arc.startAngle = (new McGeVector3d(line.startPoint.x - line.endPoint.x, line.startPoint.y - line.endPoint.y)).angleTo1(McGeVector3d.kXAxis);
        arc.endAngle = -(new McGeVector3d(line.endPoint.x - line.startPoint.x, line.endPoint.y - line.startPoint.y)).angleTo1(McGeVector3d.kXAxis);
        mxcad.drawEntity(arc)
    })
}

// 中心线
async function Mx_CenterLine() {
    let filter = new MxCADResbuf();
    filter.AddMcDbEntityTypes("LINE");
    const obj1 = new MxCADUiPrEntity();
    obj1.setFilter(filter);
    obj1.setMessage("请选择第一条线");
    const line1_id = await obj1.go();
    if (!line1_id.id) return;
    const line1 = line1_id.getMcDbEntity() as McDbLine;
    const line1_clone = new McDbLine(line1.startPoint, line1.endPoint)


    const obj2 = new MxCADUiPrEntity();
    obj2.setFilter(filter);
    obj2.setMessage("请选择第二条线");
    const line2_id = await obj2.go();
    if (!line2_id.id) return;
    const line2 = line2_id.getMcDbEntity() as McDbLine;
    const line2_clone = new McDbLine(line2.startPoint, line2.endPoint)

    const mxcad = MxCpp.getCurrentMxCAD();
    let points = line1.IntersectWith(line2_clone, McDb.Intersect.kExtendBoth);
    console.log(points.length())
    if (points.length() === 0) {
        /**
         * 若两条线段平行，选最短的一条线段旋转90度与另一条直线相交
         * 得到两条直线间距离dist
         * 最短的直线偏移 1/2dist
         */
        const l1 = line1.getLength().val > line2.getLength().val ? line2.clone() as McDbLine : line1.clone() as McDbLine;
        const l2 = line1.getLength().val > line2.getLength().val ? line1_clone : line2_clone;
        const l_clone = l1.clone() as McDbLine;
        const midPt = l1.getPointAtDist(l1.getLength().val / 2).val
        l1.rotate(midPt, Math.PI / 2);
        points = l1.IntersectWith(l2, McDb.Intersect.kExtendBoth);
        if (!points.length()) return;
        // 偏移距离
        const offDist = points.at(0).distanceTo(midPt) / 2;
        l_clone.offsetCurves(offDist, points.at(0)).forEach((obj) => {
            (obj as McDbEntity).trueColor = new McCmColor(255, 0, 0);
            mxcad.drawEntity(obj as McDbEntity);
        })
    } else {
        // 若两条线段相交，中心线即为两条直线的角平分线
        /**
         * 求两直线交点，短直线长为圆半径画圆
         * 若两条直线已经相交，取长度长的那一边做角平分线
         */
        const circle = new McDbCircle();
        let radius: number;
        let event: McDbLine;
        let dist_1 = line1_clone.endPoint.distanceTo(points.at(0));
        let dist_2 = line1_clone.startPoint.distanceTo(points.at(0));
        if (dist_1 !== 0 && dist_2 !== 0) {
            if (dist_1 > dist_2) {
                line1_clone.startPoint = points.at(0);
            } else {
                line1_clone.endPoint = points.at(0);
            }
        }
        let dist_3 = line2_clone.endPoint.distanceTo(points.at(0));
        let dist_4 = line2_clone.startPoint.distanceTo(points.at(0));
        if (dist_3 !== 0 && dist_4 !== 0) {
            if (dist_4 > dist_3) {
                line2_clone.startPoint = points.at(0);
            } else {
                line2_clone.endPoint = points.at(0);
            }
        }
        if (line1_clone.getLength().val > line2_clone.getLength().val) {
            radius = line2_clone.getLength().val;
            event = new McDbLine(line2.startPoint, line2_clone.endPoint);
        } else {
            radius = line1.getLength().val;
            event = new McDbLine(line1_clone.startPoint, line1_clone.endPoint);
        }

        circle.center = points.at(0);
        circle.radius = radius;

        /**
         * 圆与直线交点形成的圆弧中点与直线交点即为角平分线
         */
        let pt1 = circle.IntersectWith(line1_clone, McDb.Intersect.kOnBothOperands);
        let pt2 = circle.IntersectWith(line2_clone, McDb.Intersect.kOnBothOperands);
        if (!pt1.length() || !pt2.length()) return;
        let startAngle = pt1.at(0).sub(points.at(0)).angleTo2(McGeVector3d.kXAxis)
        let endAngle = pt2.at(0).sub(points.at(0)).angleTo2(McGeVector3d.kXAxis)
        let arc = new McDbArc();
        arc.center = points.at(0);
        arc.radius = radius;
        arc.startAngle = startAngle;
        arc.endAngle = endAngle;
        const pt = arc.getPointAtDist(arc.getLength().val / 2).val
        const centerLine = new McDbLine(points.at(0), pt);

        const getPt = new MxCADUiPrPoint();
        getPt.setMessage("请选择终点");
        getPt.setUserDraw((pt, pw) => {
            let p = centerLine.getClosestPointTo(pt, true).val;
            let _clone = centerLine.clone() as McDbLine;
            _clone.endPoint = p;
            pw.drawMcDbEntity(_clone)
        });
        const point = await getPt.go();
        if (!point) return;
        centerLine.endPoint = centerLine.getClosestPointTo(point, true).val;
        centerLine.trueColor = new McCmColor(255, 0, 0);
        mxcad.drawEntity(centerLine)
    }
}

// 开洞
/**
 * 选中矩形
 * 将离鼠标点设为最近的顶点index
 */
async function Mx_DoHole() {
    // 获取目标矩形
    let filter = new MxCADResbuf();
    filter.AddMcDbEntityTypes("LWPOLYLINE");
    const getObj = new MxCADUiPrEntity();
    getObj.setFilter(filter);
    getObj.setMessage("请选择目标矩形");
    const rect_id = await getObj.go();
    if (!rect_id.id) return;

    // 遍历回去顶点
    const rect = rect_id.getMcDbEntity() as McDbPolyline;
    let pointsArr: McGePoint3d[] = []
    const num: number = rect.numVerts()
    for (let i = 0; i < num; i++) {
        pointsArr.push(rect.getPointAt(i).val)
    }

    // 获取最近顶点
    const getPoint = new MxCADUiPrPoint()
    let index: number = 0;
    getPoint.setUserDraw((pt, pw) => {
        let disArr: number[] = []
        pointsArr.forEach(point => {
            disArr.push(point.distanceTo(pt))
        })
        index = disArr.findIndex(value => value === Math.min(...disArr))
        let obj_clone = rect.clone() as McDbPolyline
        obj_clone.setPointAt(index, pt)
        pw.drawMcDbEntity(obj_clone)
    })
    const point = await getPoint.go()
    if (!point) return
    let obj_clone = rect.clone() as McDbPolyline
    obj_clone.setPointAt(index, point)
    MxCpp.getCurrentMxCAD().drawEntity(obj_clone);
}

// 指北针
async function Mx_Compass() {
    const getCenter = new MxCADUiPrPoint();
    getCenter.setMessage('设置指北针中心点');
    const center = await getCenter.go();
    if (!center) return;

    // 获取指北针半径
    const getRadius = new MxCADUiPrDist();
    getRadius.setMessage('设置指北针半径');
    getRadius.setBasePt(center);
    getRadius.setUserDraw((pt, pw) => {
        const r = pt.distanceTo(center);
        pw.drawCircle(center.toVector3(), r);
    })
    const radiusVal = await getRadius.go();
    if (!radiusVal) return;
    const radius = getRadius.value();

    // 圆盘
    const mxcad = MxCpp.App.getCurrentMxCAD();
    const cricle = new McDbCircle();
    cricle.trueColor = new McCmColor(0, 255, 0)
    cricle.center = center;
    cricle.radius = radius;
    mxcad.drawEntity(cricle);

    // 指针
    const pt1 = new McGePoint3d(center.x, center.y + radius);
    const pt2 = new McGePoint3d(center.x, center.y - radius);
    const line = new McDbLine();
    line.startPoint = pt1;
    line.endPoint = pt2;
    const line_clone1 = line.clone() as McDbLine;
    line_clone1.rotate(pt1, Math.PI / 30);
    const line_clone2 = line.clone() as McDbLine;
    line_clone2.rotate(pt1, -Math.PI / 30);
    let pt3: McGePoint3d = new McGePoint3d();
    let pt4: McGePoint3d = new McGePoint3d();
    line_clone1.IntersectWith(cricle, McDb.Intersect.kOnBothOperands).forEach(pt => {
        if (pt.x !== pt1.x && pt.y !== pt1.y) {
            pt3 = pt
        }
    })
    line_clone2.IntersectWith(cricle, McDb.Intersect.kOnBothOperands).forEach(pt => {
        if (pt.x !== pt1.x && pt.y !== pt1.y) {
            pt4 = pt
        }
    })
    let dBulge = MxCADUtility.calcBulge(pt3, pt2, pt4)
    mxcad.pathMoveToEx(pt3.x, pt3.y, 0, 0, dBulge.val);
    //路径的一下个点
    mxcad.pathLineTo(pt4.x, pt4.y);
    //路径的一下个点
    mxcad.pathLineTo(pt1.x, pt1.y);
    //路径的一下个点
    mxcad.pathLineTo(pt3.x, pt3.y);
    mxcad.drawColor = new McCmColor(25, 255, 0);
    //把路径变成一个填充
    mxcad.drawPathToHatch(1);
    const text = new McDbText();
    text.height = radius / 3;
    text.position = new McGePoint3d(center.x, center.y + radius * 1.2);
    text.alignmentPoint = text.position;
    text.textString = 'N';
    text.horizontalMode = McDb.TextHorzMode.kTextMid;
    text.trueColor = new McCmColor(25, 255, 0);
    mxcad.drawEntity(text)
}

// 提示框
async function Mx_MassegeBox() {

    // 选择提示框指向
    const getType = new MxCADUiPrKeyWord();
    getType.setMessage('选择提示框指向');
    getType.setKeyWords('[向上(U)/向下(D)]');
    const keyWord = await getType.go();
    if (!keyWord) return;

    // 绘制方框
    const getPoint = new MxCADUiPrPoint();
    let drawColor = MxCpp.getCurrentMxCAD().getCurrentDatabaseDrawColor();
    getPoint.setMessage(" 指定消息框第一点:");
    let pt1 = await getPoint.go();
    if (!pt1) {
        return;
    }
    let mxcad = MxCpp.getCurrentMxCAD();
    let rect = new MxDbRect();
    rect.pt1 = pt1.toVector3();
    // 在点取第二点时，设置动态绘制矩形
    getPoint.setUserDraw((currentPoint: McGePoint3d, worldDraw) => {
        rect.pt2 = currentPoint.toVector3();
        rect.setColor(drawColor);
        worldDraw.drawCustomEntity(rect);
    });
    getPoint.setMessage(" 指定消息框第二点:");
    getPoint.setDynamicInputType(DynamicInputType.kXYCoordInput);
    let pt2 = await getPoint.go();
    if (!pt2) {
        return;
    }
    rect.pt2 = pt2.toVector3();

    // 根据绘制方向确定指向点
    let pl = new McDbPolyline();
    pl.isClosed = true;
    let line: McDbLine = new McDbLine();
    if ((pt1.y > pt2.y && keyWord === 'U') || (pt1.y < pt2.y && keyWord === 'D')) {
        line = new McDbLine(pt1, new McGePoint3d(pt2.x, pt1.y));
        pl.addVertexAt(new McGePoint3d(pt2.x, pt1.y));
        pl.addVertexAt(pt2);
        pl.addVertexAt(new McGePoint3d(pt1.x, pt2.y));
        pl.addVertexAt(pt1);
    } else if ((pt1.y > pt2.y && keyWord === 'D') || (pt1.y < pt2.y && keyWord === 'U')) {
        line = new McDbLine(pt2, new McGePoint3d(pt1.x, pt2.y));
        pl.addVertexAt(new McGePoint3d(pt1.x, pt2.y));
        pl.addVertexAt(pt1);
        pl.addVertexAt(new McGePoint3d(pt2.x, pt1.y));
        pl.addVertexAt(pt2);
    }
    const dist = pt1.distanceTo(pt2) / 6 //指向缺口，可自定义
    const p1 = line.getPointAtDist(dist).val;
    const p2 = line.getPointAtDist(line.getLength().val - dist).val;
    line.startPoint = p1;
    line.endPoint = p2;
    const getEndPoint = new MxCADUiPrPoint();
    getEndPoint.setMessage(" 设置消息框指向:");

    let pt3: McGePoint3d = new McGePoint3d();
    let pt4: McGePoint3d = new McGePoint3d();
    getEndPoint.setUserDraw((pt, pw) => {
        const closePt = line.getClosestPointTo(pt, false).val;
        let vec = pl.getFirstDeriv(closePt);
        if (!vec.ret) return;
        vec.val.normalize().mult(dist / 4);
        pt3 = closePt.clone();
        pt3.addvec(vec.val);
        pt4 = closePt.clone();
        pt4.subvec(vec.val);
        let _clone = pl.clone() as McDbPolyline;
        _clone.addVertexAt(pt4);
        _clone.addVertexAt(pt);
        _clone.addVertexAt(pt3);
        pw.drawMcDbEntity(_clone)
    })
    let endPt = await getEndPoint.go();
    if (!endPt) return;
    pl.addVertexAt(pt4);
    pl.addVertexAt(endPt);
    pl.addVertexAt(pt3);
    mxcad.drawEntity(pl);
}

// 自定义基准符
class McDbTestDatumSymbol extends McDbCustomEntity {
    /** 基点 */
    private basePt: McGePoint3d = new McGePoint3d();
    /** 符号位置 */
    private symbolPos: McGePoint3d = new McGePoint3d();
    /** 旋转角度 */
    private angle: number | null = null;
    /** 基准符大小 */
    private size: number = 30;
    /** 基准符文字 */
    private text: string = "A";
    /** 是否关联实体 */
    private isEntity: boolean = false;
    /** 包围盒最大点 包围盒最小点 */
    private minPt: McGePoint3d = new McGePoint3d();
    private maxPt: McGePoint3d = new McGePoint3d();

    constructor(imp?: any) {
        super(imp);
    }
    public create(imp: any) {
        return new McDbTestDatumSymbol(imp)
    }
    /** 获取类名 */
    public getTypeName(): string {
        return "McDbTestDatumSymbol";
    }
    //设置或获取基点
    public set datumBasePt(val: McGePoint3d) {
        this.basePt = val.clone();
    }
    public get datumBasePt(): McGePoint3d {
        return this.basePt;
    }
    //设置或获取符号位置
    public set symbolPosition(val: McGePoint3d) {
        if (this.isEntity) {
            const vec = McGeVector3d.kXAxis.clone().rotateBy(this.angle || 0).mult(this.size);
            const pt = this.basePt.clone().addvec(vec.perpVector());
            const line = new McDbLine(pt, this.basePt);
            this.symbolPos = line.getClosestPointTo(val, true).val;
        } else {
            this.symbolPos = val.clone();
        }
    }
    public get symbolPosition(): McGePoint3d {
        return this.symbolPos;
    }
    //设置或获取旋转角度
    public set symbolAngle(val: number) {
        this.isEntity = true;
        this.angle = val;
    }
    public get symbolAngle(): number {
        return this.angle || 0;
    }
    //设置或获取基准符大小
    public set symbolSize(val: number) {
        this.size = val;
    }
    public get symbolSize(): number {
        return this.size;
    }
    //设置或获取基准符文字
    public set symbolText(val: string) {
        this.text = val;
    }
    public get symbolText(): string {
        return this.text;
    }
    /** 读取数据 */
    public dwgInFields(filter: IMcDbDwgFiler): boolean {
        this.basePt = filter.readPoint("basePt").val;
        this.symbolPos = filter.readPoint("symbolPos").val;
        this.angle = filter.readDouble("angle").val;
        this.size = filter.readDouble("size").val;
        this.text = filter.readString("text").val;
        const _isEntity = filter.readLong("isEntity").val;
        this.isEntity = _isEntity ? true : false;
        this.minPt = filter.readPoint("minPt").val;
        this.maxPt = filter.readPoint("maxPt").val;
        return true;
    }
    /** 写入数据 */
    public dwgOutFields(filter: IMcDbDwgFiler): boolean {
        filter.writePoint("basePt", this.basePt);
        filter.writePoint("symbolPos", this.symbolPos);
        filter.writeDouble("angle", this.angle || 0);
        filter.writeDouble("size", this.size);
        filter.writeString("text", this.text);
        const _isEntity = this.isEntity ? 1 : 0;
        filter.writeLong("isEntity", _isEntity);
        filter.writePoint("minPt", this.minPt);
        filter.writePoint("maxPt", this.maxPt);
        return true;
    }
    /** 移动夹点 */
    public moveGripPointsAt(iIndex: number, dXOffset: number, dYOffset: number, dZOffset: number) {
        this.assertWrite();
        if (iIndex === 0) {
            this.basePt.x += dXOffset;
            this.basePt.y += dYOffset;
            this.basePt.z += dZOffset;
            this.symbolPos.x += dXOffset;
            this.symbolPos.y += dYOffset;
            this.symbolPos.z += dZOffset;
            this.isEntity = false;
        } else if (iIndex === 1) {
            this.symbolPos.x += dXOffset;
            this.symbolPos.y += dYOffset;
            this.symbolPos.z += dZOffset;
            if (this.isEntity) {
                const vec = McGeVector3d.kXAxis.clone().rotateBy(this.angle || 0).mult(this.size);
                const pt = this.basePt.clone().addvec(vec.perpVector());
                const line = new McDbLine(pt, this.basePt);
                this.symbolPos = line.getClosestPointTo(this.symbolPos, true).val;
            }
        }
    };
    /** 获取夹点 */
    public getGripPoints(): McGePoint3dArray {
        let ret = new McGePoint3dArray();
        ret.append(this.basePt);
        ret.append(this.symbolPos);
        return ret;
    };
    /** 动态绘制 */
    public worldDraw(draw: MxCADWorldDraw): void {
        const allEntityArr: McDbEntity[] = [];

        // 底部三角形填充
        const angle = McGeVector3d.kXAxis.angleTo2(this.basePt.sub(this.symbolPos));
        const vec_x = McGeVector3d.kXAxis;
        const vec_y = McGeVector3d.kYAxis;
        const v = vec_x.clone().mult(this.size / 2);
        const pt1 = this.basePt.clone().addvec(v);
        const pt2 = this.basePt.clone().subvec(v);
        const pt3 = this.basePt.clone().addvec(v.clone().perpVector().mult(this.size * (4 / 5)));
        const solid = new McDbHatch();
        const points = new McGePoint3dArray();
        points.append(pt1);
        points.append(pt2);
        points.append(pt3);
        solid.appendLoop(points);
        solid.rotate(this.basePt, Math.PI / 2 - angle);
        draw.drawEntity(solid);
        allEntityArr.push(solid)

        const line = new McDbLine(this.basePt, this.symbolPos);

        // 符号位置
        const vec = this.symbolPos.sub(this.basePt);
        const symbolPos = this.basePt.clone().addvec(vec);
        const textPos = symbolPos.clone().addvec(vec_y.clone().negate().mult(this.size / 2));
        const text = new McDbText();
        text.textString = this.text;
        text.height = this.size;
        text.position = textPos;
        text.alignmentPoint = text.position;
        text.horizontalMode = McDb.TextHorzMode.kTextMid;
        draw.drawEntity(text);
        allEntityArr.push(text)
        // 包围框
        const corner1 = textPos.clone().addvec(vec_x.clone().mult(this.size * (3 / 4))).addvec(vec_y.clone().negate().mult(this.size * (1 / 4)));
        const corner2 = textPos.clone().subvec(vec_x.clone().mult(this.size * (3 / 4))).addvec(vec_y.clone().negate().mult(this.size * (1 / 4)));
        const corner3 = corner2.clone().addvec((vec_y.clone().mult(this.size * (3 / 2))));
        const corner4 = corner1.clone().addvec((vec_y.clone().mult(this.size * (3 / 2))));
        const pl = new McDbPolyline();
        pl.isClosed = true;
        pl.addVertexAt(corner1);
        pl.addVertexAt(corner2);
        pl.addVertexAt(corner3);
        pl.addVertexAt(corner4);
        draw.drawEntity(pl);
        allEntityArr.push(pl)

        pl.IntersectWith(line, McDb.Intersect.kOnBothOperands).forEach(pt => {
            const line = new McDbLine(pt, this.basePt);
            draw.drawEntity(line);
            allEntityArr.push(line)
        })
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
    // 获取包围盒
    public getBoundingBox(): { minPt: McGePoint3d; maxPt: McGePoint3d; ret: boolean; } {
        return { minPt: this.minPt, maxPt: this.maxPt, ret: true }
    }
}

// 基准符
async function Mx_DatumSymbol() {

    const getString = new MxCADUiPrString;
    getString.setMessage("请设置基准符文字");
    const str = await getString.go();
    if (!str) return;

    const getDist = new MxCADUiPrDist();
    getDist.setMessage("请设置文字高度");
    const heightVal = await getDist.go();
    if (!heightVal) return;
    const height = getDist.value();

    const getPoint = new MxCADUiPrPoint();
    getPoint.setMessage("请设置基准符位置");

    const mxcad = MxCpp.getCurrentMxCAD();

    let blkRef = new McDbBlockReference();

    getPoint.setUserDraw((pt, pw) => {
        // 基线
        const baseLine = new McDbPolyline();
        baseLine.addVertexAt(new McGePoint3d(pt.x + height, pt.y, 0), 0, 2, 2);
        baseLine.addVertexAt(new McGePoint3d(pt.x - height, pt.y, 0));
        // 竖线
        const line = new McDbLine(pt, new McGePoint3d(pt.x, pt.y + height * (8 / 7), 0));
        const circle = new McDbCircle();
        circle.center = new McGePoint3d(pt.x, pt.y + height * (15 / 7), 0);
        circle.radius = height;
        // 文字
        const text = new McDbText();
        text.textString = str;
        text.height = height;
        text.position = text.alignmentPoint = new McGePoint3d(pt.x, pt.y + height * (25 / 14), 0);
        text.horizontalMode = McDb.TextHorzMode.kTextMid;
        // 整装成块
        let blkTable = mxcad.getDatabase().getBlockTable();
        let blkRecId = blkTable.add(new McDbBlockTableRecord());//图块记录
        let blkTableRecord: McDbBlockTableRecord = blkRecId.getMcDbBlockTableRecord() as any;
        if (blkTableRecord == null) return;

        blkTableRecord.appendAcDbEntity(baseLine);
        blkTableRecord.appendAcDbEntity(line);
        blkTableRecord.appendAcDbEntity(circle);
        blkTableRecord.appendAcDbEntity(text);
        blkTableRecord.name = '基准符'

        blkTableRecord.origin = pt;
        blkRef.blockTableRecordId = blkRecId;
        blkRef.position = pt;
        pw.drawMcDbEntity(blkRef)
    })
    const pt = await getPoint.go();
    if (!pt) return;
    mxcad.drawEntity(blkRef);
}

async function Mx_DatumSymbol2() {
    const getPoint = new MxCADUiPrPoint();
    getPoint.setMessage("请设置定位点或圆弧或直线");
    const pt = await getPoint.go();
    if (!pt) return;
    // 点选
    const filter = new MxCADResbuf()
    filter.AddMcDbEntityTypes("LINE,ARC,CIRCLE");
    let objId = MxCADUtility.findEntAtPoint(pt.x, pt.y, pt.z, -1, filter);
    const symbol = new McDbTestDatumSymbol();
    symbol.datumBasePt = pt;
    if (objId.isValid()) {
        const curve = objId.getMcDbEntity() as McDbCurve;
        const v = curve.getFirstDeriv(pt).val;
        const angle = v.angleTo2(McGeVector3d.kXAxis);
        symbol.symbolAngle = angle;
    }

    const getPos = new MxCADUiPrPoint();
    getPos.setMessage("请设置符号位置");
    getPos.setUserDraw((pt, pw) => {
        symbol.symbolPosition = pt;
        pw.drawMcDbEntity(symbol)
    })
    const pos = await getPos.go();
    if (!pos) return;
    symbol.symbolPosition = pos;

    const mxcad = MxCpp.getCurrentMxCAD();
    mxcad.drawEntity(symbol);
}

// 同心圆
async function Mx_ConcentricCircles() {
    const getPoint = new MxCADUiPrPoint();
    getPoint.setMessage("请设置圆心");
    let pt = await getPoint.go();
    if (!pt) return;
    const mxcad = MxCpp.getCurrentMxCAD();
    for (let i = 1; i < 4; i++) {
        const circle = new McDbCircle();
        circle.center = pt;
        circle.radius = 10 * i;
        mxcad.drawEntity(circle);
    }
}

// 齿轮
async function Mx_Gear() {
    // 设置齿轮圆心
    const getCenter = new MxCADUiPrPoint();
    getCenter.setMessage('请设置齿轮圆心');
    const center = await getCenter.go();
    if (!center) return;

    // 设置齿轮半径
    const getRadius = new MxCADUiPrDist();
    getRadius.setBasePt(center);
    getRadius.setMessage('请设置齿轮半径');
    getRadius.setUserDraw((pt, pw) => {
        const circle = new McDbCircle();
        circle.center = center;
        circle.radius = pt.distanceTo(center);
        pw.drawMcDbEntity(circle);
    });
    const val = await getRadius.go();
    let radius: number = 10;
    if (val) {
        radius = getRadius.value();
    };

    const mxcad = MxCpp.getCurrentMxCAD();
    const circle = new McDbCircle();
    circle.center = center;
    circle.radius = radius;

    // 根据齿轮数阵列锯齿
    const gearNum = 30;//设置齿轮数
    const dist = circle.getLength().val / (gearNum * 2);
    const midPt = new McGePoint3d(center.x, center.y + radius, center.z);
    const l = circle.getDistAtPoint(midPt).val;
    const pt1 = circle.getPointAtDist(l + dist / 2).val;
    const pt2 = circle.getPointAtDist(l - dist / 2).val;
    // 基础锯齿
    const entArr: McDbEntity[] = [];
    const pl = new McDbPolyline();
    pl.addVertexAt(pt1);
    pl.addVertexAt(new McGePoint3d(pt1.x, pt1.y + 5, pt1.z));
    pl.addVertexAt(new McGePoint3d(pt2.x, pt2.y + 5, pt2.z));
    pl.addVertexAt(pt2);
    entArr.push(pl);
    // 平移旋转
    for (let i = 0; i < gearNum * 2; i++) {
        let orderEvent_clone = pl.clone() as McDbEntity;
        let evePt = circle.getPointAtDist(l + i * dist);
        if (!evePt.ret) return;
        let v = evePt.val.sub(midPt)//平移距离和方向
        let matrix = new McGeMatrix3d();
        matrix.setToTranslation(v);
        orderEvent_clone.transformBy(matrix);
        let tangentV = circle.getFirstDeriv(evePt.val).val;//曲线阵列点切向量
        let verticalV = tangentV.rotateBy(McGeVector3d.kYAxis.angleTo1(McGeVector3d.kXAxis));//阵列点垂直向量
        let angle = verticalV.negate().angleTo2(McGeVector3d.kYAxis, McGeVector3d.kNegateZAxis);//旋转角度
        orderEvent_clone.rotate(evePt.val, angle);
        entArr.push(orderEvent_clone)
    }

    // 绘制阵列后的锯齿
    const pointArr: McGePoint3d[] = [];
    entArr.forEach((ent, index) => {
        if (index % 2 !== 0) {
            const pts = ent.IntersectWith(circle, McDb.Intersect.kOnBothOperands);
            pts.forEach((pt) => {
                pointArr.push(pt)
            })
            mxcad.drawEntity(ent)
        }
    })

    // 根据锯齿点切割
    const arc = new McDbArc();
    const p = new McGePoint3d(center.x, center.y - radius, center.z)
    arc.computeArc(pt1.x, pt1.y, p.x, p.y, pt2.x, pt2.y);
    arc.splitCurves(pointArr).forEach((obj, index) => {
        if (index % 2 !== 0) {
            mxcad.drawEntity(obj as McDbEntity)
        }
    })
}

// 块中心线
async function Mx_BlkCenterLine() {
    // 设置过滤器
    const filter = new MxCADResbuf();
    filter.AddMcDbEntityTypes("INSERT");
    // 选择目标块
    const getEvent = new MxCADUiPrEntity();
    getEvent.setFilter(filter);
    getEvent.setMessage('请选择目标块')
    const entId = await getEvent.go();
    if (!entId.id) return;
    const ent = entId.getMcDbEntity() as McDbBlockReference;
    const ret = ent.getBoundingBox();
    const line = new McDbLine(ret.minPt, ret.maxPt);
    const midPt = line.getPointAtDist(line.getLength().val / 2).val;
    // 设置中心线长度
    const getDist = new MxCADUiPrDist();
    let dist = 10;
    getDist.setMessage(" 请设置中心线长度10>");
    getDist.setBasePt(midPt);
    getDist.setUserDraw((pt, pw) => {
        const d = pt.distanceTo(midPt);
        const pt1 = midPt.clone().addvec(McGeVector3d.kXAxis.normalize().mult(d));
        const pt2 = midPt.clone().addvec(McGeVector3d.kXAxis.normalize().mult(d).negate());
        const pt3 = midPt.clone().addvec(McGeVector3d.kYAxis.normalize().mult(d));
        const pt4 = midPt.clone().addvec(McGeVector3d.kYAxis.normalize().mult(d).negate());
        const line1 = new McDbLine(pt1, pt2);
        const line2 = new McDbLine(pt3, pt4);
        pw.drawMcDbEntity(line1);
        pw.drawMcDbEntity(line2)
    })
    const val = await getDist.go();
    if (val) {
        dist = getDist.value()
    };
    // 绘制块中心线
    const mxcad = MxCpp.getCurrentMxCAD();
    const pt1 = midPt.clone().addvec(McGeVector3d.kXAxis.normalize().mult(dist));
    const pt2 = midPt.clone().addvec(McGeVector3d.kXAxis.normalize().mult(dist).negate());
    const pt3 = midPt.clone().addvec(McGeVector3d.kYAxis.normalize().mult(dist));
    const pt4 = midPt.clone().addvec(McGeVector3d.kYAxis.normalize().mult(dist).negate());
    const line1 = new McDbLine(pt1, pt2);
    const line2 = new McDbLine(pt3, pt4);
    mxcad.drawEntity(line1);
    mxcad.drawEntity(line2)
}

// 圆切公线
async function Mx_RoundCutPublicLine() {
    // 设置筛选器，筛选圆对象
    const filter = new MxCADResbuf([DxfCode.kEntityType, "CIRCLE"]);
    const mxcad = MxCpp.getCurrentMxCAD();

    // 选择第一个圆
    const getCircle1 = new MxCADUiPrEntity();
    getCircle1.setFilter(filter);
    getCircle1.setMessage("请选择第一个圆");
    const circle1Id = await getCircle1.go();
    if (!circle1Id) return;

    // 选择第二个圆
    const getCircle2 = new MxCADUiPrEntity();
    getCircle2.setFilter(filter);
    getCircle2.setMessage("请选择第二个圆");
    const circle2Id = await getCircle2.go();
    if (!circle2Id) return;

    // 计算两圆之间的交点
    const circle1 = circle1Id.getMcDbEntity() as McDbCircle;
    const circle2 = circle2Id.getMcDbEntity() as McDbCircle;
    const center1 = circle1.center;
    const center2 = circle2.center;
    const vec = center1.sub(center2).normalize();
    const pt1 = center1.clone().addvec(vec.clone().perpVector().mult(circle1.radius));
    const pt2 = center2.clone().addvec(vec.clone().perpVector().mult(circle2.radius));
    const line1 = new McDbLine(pt1, pt2);
    if (Math.abs(circle1.radius - circle2.radius) > 0.0001) {
        // 两圆半径不相等
        const line2 = new McDbLine(center1, center2);
        const pointsArr = line1.IntersectWith(line2, McDb.Intersect.kExtendBoth);
        if (pointsArr.length() > 0) {
            const pt0 = pointsArr.at(0);
            let circleClose: McDbCircle, circleOther: McDbCircle
            if (pt0.distanceTo(center1) > pt0.distanceTo(center2)) {
                circleClose = circle2
                circleOther = circle1
            } else {
                circleClose = circle1;
                circleOther = circle2
            }
            const center = pt0.clone().addvec(circleClose.center.sub(pt0).mult(1 / 2));
            const radius = pt0.distanceTo(circleClose.center) / 2;
            const angle = Math.asin(circleClose.radius / (2 * radius));
            const v = circleClose.center.sub(center)
            const point1 = center.clone().addvec(v.clone().rotateBy(angle * 2));
            const point2 = center.clone().addvec(v.clone().rotateBy(-angle * 2));
            const vec1 = point1.sub(circleClose.center).normalize();
            const vec2 = point2.sub(circleClose.center).normalize();
            const _point1 = circleOther.center.clone().addvec(vec1.clone().mult(circleOther.radius));
            const _point2 = circleOther.center.clone().addvec(vec2.clone().mult(circleOther.radius));
            mxcad.drawLine(point1.x, point1.y, _point1.x, _point1.y)
            mxcad.drawLine(point2.x, point2.y, _point2.x, _point2.y)
        }
    } else {
        // 两圆半径相等
        const pt1 = center1.clone().addvec(vec.clone().perpVector().negate().mult(circle1.radius));
        const pt2 = center2.clone().addvec(vec.clone().perpVector().negate().mult(circle2.radius));
        const line2 = new McDbLine(pt1, pt2);
        mxcad.drawEntity(line1);
        mxcad.drawEntity(line2);
    }
}


// 自定义圆角矩形
class McDbTestRoundedRectangle extends McDbCustomEntity {
    /** 角点1 */
    private point1: McGePoint3d = new McGePoint3d();
    /** 角点2 */
    private point2: McGePoint3d = new McGePoint3d();
    /** 圆角半径 */
    private radius: number = 30;
    /** 包围盒最大点 包围盒最小点 */
    private minPt: McGePoint3d = new McGePoint3d();
    private maxPt: McGePoint3d = new McGePoint3d();
    constructor(imp?: any) {
        super(imp);
    }
    public create(imp: any) {
        return new McDbTestRoundedRectangle(imp)
    }
    /** 获取类名 */
    public getTypeName(): string {
        return "McDbTestRoundedRectangle";
    }
    //设置或获取角点1
    public set CornerPoint1(val: McGePoint3d) {
        this.point1 = val.clone();
    }
    public get CornerPoint1(): McGePoint3d {
        return this.point1;
    }
    //设置或获取角点2
    public set CornerPoint2(val: McGePoint3d) {
        this.point2 = val.clone();
    }
    public get CornerPoint2(): McGePoint3d {
        return this.point2;
    }
    //设置或获取圆弧半径
    public set arcRadius(val: number) {
        this.radius = val;
    }
    public get arcRadius(): number {
        return this.radius;
    }
    /** 读取数据 */
    public dwgInFields(filter: IMcDbDwgFiler): boolean {
        this.point1 = filter.readPoint('point1').val;
        this.point2 = filter.readPoint('point2').val;
        this.radius = filter.readDouble('radius').val;
        this.minPt = filter.readPoint("minPt").val;
        this.maxPt = filter.readPoint("maxPt").val;
        return true;
    }
    /** 写入数据 */
    public dwgOutFields(filter: IMcDbDwgFiler): boolean {
        filter.writePoint("point1", this.point1);
        filter.writePoint("point2", this.point2);
        filter.writeDouble("radius", this.radius);
        filter.writePoint("minPt", this.minPt);
        filter.writePoint("maxPt", this.maxPt);
        return true;
    }
    /** 移动夹点 */
    public moveGripPointsAt(iIndex: number, dXOffset: number, dYOffset: number, dZOffset: number) {
        this.assertWrite();
        if (iIndex === 0) {
            this.point1.x += dXOffset;
            this.point1.y += dYOffset;
            this.point1.z += dZOffset;
        } else if (iIndex === 1) {
            this.point2.x += dXOffset;
            this.point2.y += dYOffset;
            this.point2.z += dZOffset;
        }
    };
    /** 获取夹点 */
    public getGripPoints(): McGePoint3dArray {
        let ret = new McGePoint3dArray();
        ret.append(this.point1);
        ret.append(this.point2);
        return ret;
    };
    /** 动态绘制 */
    public worldDraw(draw: MxCADWorldDraw): void {
        const allEntityArr: McDbEntity[] = [];

        let r = this.radius;
        const point3 = new McGePoint3d(this.point1.x, this.point2.y);
        const point4 = new McGePoint3d(this.point2.x, this.point1.y);
        const dist1 = this.point1.distanceTo(point3);
        const dist2 = this.point2.distanceTo(point3);

        const dist = dist1 < dist2 ? dist1 : dist2;
        if (this.radius > dist / 2) r = dist / 2;
        const pointArr = [this.point1, point3, this.point2, point4];
        const pl = new McDbPolyline();
        pl.isClosed = true;
        pointArr.forEach((pt) => {
            pl.addVertexAt(pt);
        })

        const v1 = point3.sub(this.point1).normalize().mult(r);
        const v2 = point4.sub(this.point1).normalize().mult(r);
        const circlePt1 = this.point1.clone().addvec(v1).addvec(v2);
        const circlePt2 = point3.clone().addvec(v1.clone().negate()).addvec(v2);
        const circlePt3 = this.point2.clone().addvec(v1.clone().negate()).addvec(v2.clone().negate());
        const circlePt4 = point4.clone().addvec(v1).addvec(v2.clone().negate());
        const circlePtArr = [circlePt1, circlePt2, circlePt3, circlePt4];
        const breakPts: McGePoint3d[] = [];
        const dTol = 0.0001;
        circlePtArr.forEach((pt) => {
            const circle = new McDbCircle();
            circle.center = pt;
            circle.radius = r;

            const res = pl.IntersectWith(circle, McDb.Intersect.kExtendBoth);
            const pointArr: McGePoint3d[] = [];
            if (res.length() > 0) {
                res.forEach(pt => pointArr.push(pt))
            }
            breakPts.push(...pointArr);
            circle.splitCurves(pointArr).forEach((obj, index) => {
                const curve = obj.clone() as McDbCurve;
                const length = curve.getLength().val;
                const startPt = curve.getPointAtDist(0).val;
                const endPt = curve.getPointAtDist(length).val;
                const r = pointArr.filter(pt => pt.distanceTo(startPt) < dTol || pt.distanceTo(endPt) < dTol);
                const distance = Math.abs(length - circle.getLength().val / 4);
                if (r.length === pointArr.length && distance < dTol) {
                    draw.drawEntity(obj as McDbCurve);
                    allEntityArr.push(obj as McDbCurve)
                }
            });
        })
        pl.splitCurves(breakPts).forEach((obj, index) => {
            const curve = obj.clone() as McDbPolyline;
            const length = curve.getLength().val;
            if (Math.abs(length - this.radius) > dTol && Math.abs(length - 2 * this.radius) > dTol) {
                draw.drawEntity(obj as McDbCurve);
                allEntityArr.push(obj as McDbCurve)
            }
            if (Math.abs(length - 2 * this.radius) < dTol) {
                const num = curve.numVerts();
                let plVertArr: McGePoint3d[] = [];
                for (let i = 0; i < num; i++) {
                    const vertPoint = curve.getPointAt(i).val;
                    plVertArr = pointArr.filter(pt => vertPoint.distanceTo(pt) < dTol);
                }
                if (num !== 3 && plVertArr.length === 0) {
                    draw.drawEntity(obj as McDbCurve);
                    allEntityArr.push(obj as McDbCurve)
                }
            }
        })

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
    // 获取包围盒
    public getBoundingBox(): { minPt: McGePoint3d; maxPt: McGePoint3d; ret: boolean; } {
        return { minPt: this.minPt, maxPt: this.maxPt, ret: true }
    }
}
// 圆角矩形
async function Mx_RREC() {

    const mxcad = MxCpp.getCurrentMxCAD();
    const getPoint1 = new MxCADUiPrPoint();
    getPoint1.setMessage("请设置矩形左上角点");
    const point1 = await getPoint1.go();
    if (!point1) return;

    let rect = new MxDbRect();
    rect.pt1 = point1.toVector3();
    const getPoint2 = new MxCADUiPrPoint();
    getPoint2.setMessage("请设置矩形右下角点");
    getPoint2.setUserDraw((pt, pw) => {
        rect.pt2 = pt.toVector3();
        pw.drawCustomEntity(rect);
    });
    const point2 = await getPoint2.go();
    if (!point2) return;

    let pl = new McDbPolyline();
    pl.addVertexAt(point1);
    pl.addVertexAt(new McGePoint3d(point1.x, point2.y));
    pl.addVertexAt(point2);
    pl.addVertexAt(new McGePoint3d(point2.x, point1.y));
    pl.isClosed = true;
    const id = mxcad.drawEntity(pl);

    const getRadius = new MxCADUiPrDist();
    getRadius.setMessage("请设置圆角半径");
    getRadius.setBasePt(point1);
    let radius = await getRadius.go();
    if (!radius) radius = MxFun.screenCoordLong2Doc(20);
    id.erase();

    const rectBoder = new McDbTestRoundedRectangle();
    rectBoder.CornerPoint1 = point1;
    rectBoder.CornerPoint2 = point2;
    rectBoder.arcRadius = radius;
    mxcad.drawEntity(rectBoder);
}

// 绘制任意多边形
async function Mx_DrawPolygon() {
    const mxcad = MxCpp.getCurrentMxCAD();
    const pointsArr: McGePoint3d[] = [];
    const getPoint = new MxCADUiPrPoint();
    getPoint.setMessage('请选择多边形起点');
    const point = await getPoint.go();
    if (!point) return;
    pointsArr.push(point);
    let oldId: McObjectId | null = null
    while (true) {
        if (oldId) oldId.erase();
        if (pointsArr.length >= 2) {
            const pl = new McDbPolyline();
            pointsArr.forEach(pt => pl.addVertexAt(pt));
            oldId = mxcad.drawEntity(pl);
        }
        const getNextPoint = new MxCADUiPrPoint();
        getNextPoint.setMessage('请选择多边形顶点');
        getNextPoint.setUserDraw((pt, pw) => {
            const line = new McDbLine(pt, pointsArr[pointsArr.length - 1]);
            pw.drawMcDbEntity(line);
        })
        const pt = await getNextPoint.go();
        if (!pt) break;
        pointsArr.push(pt);
        if (pt && pt.distanceTo(pointsArr[0]) < 0.0001) break;
    };
    if (oldId) oldId.erase();
    const pl = new McDbPolyline();
    deduplicatePoints(pointsArr).forEach(pt => pl.addVertexAt(pt));
    pl.isClosed = true;
    mxcad.drawEntity(pl);
}

// 绘半透明线
async function Mx_Test_DrawTransparencyLine() {
    let mxcad = MxCpp.getCurrentMxCAD();
    const getPoint = new MxCADUiPrPoint();
    getPoint.setMessage("指定一点:");
    let pt1 = (await getPoint.go());
    if (!pt1) return;

    getPoint.setBasePt(pt1);
    getPoint.setUseBasePt(true);

    getPoint.setMessage("指定二点:");
    let pt2 = (await getPoint.go());
    if (!pt2) return;

    let pl = new McDbPolyline();
    pl.addVertexAt(pt1);
    pl.addVertexAt(pt2);
    pl.constantWidth = mxcad.mxdraw.viewCoordLong2Cad(10);
    pl.trueColor = new McCmColor(255, 255, 255, 160);

    mxcad.drawEntity(pl);
    mxcad.updateDisplay();
}

// 插入图片
function getCurrentPagePath() {
    return window.location.origin + window.location.pathname
}
let idImage: any;
async function Mx_Test_DrawImage() {
    const getPoint = new MxCADUiPrPoint();
    getPoint.setMessage("指定插入点:");
    let pt = await getPoint.go();
    if (!pt) return;

    let mxcad = MxCpp.getCurrentMxCAD();
    let imagUrl = "https://cdn.pixabay.com/photo/2022/11/15/12/23/winter-7593872_960_720.jpg";

    // let imagUrl = getCurrentPagePath() + "mxcad.jpg"
    mxcad.loadImage(imagUrl, (image) => {
        if (!image) {
            console.log("loadImage failed");
            return;
        }
        let width = mxcad.mxdraw.viewCoordLong2Cad(100);
        let height = (image.height / image.width) * width;

        //let imageAngle = mxcad.mxdraw.getViewAngle() * 180  / Math.PI;
        //let imageAngle = mxcad.database.ucsMatrix.angleXYPlane() * 180  / Math.PI;
        let imageAngle = 0;

        idImage = mxcad.drawImage((pt as any).x, (pt as any).y, width, height, imageAngle, imagUrl, true, image.width, image.height);
        let ent = idImage.getMcDbEntity() as McDbRasterImage;
        let minmaxOrder = MxCpp.getCurrentDatabase().currentSpace.getMinMaxDrawOrder();
        if (ent) {
            // 设置透明度160
            //ent.trueColor = new McCmColor(255,255,255,160);
            ent.drawOrder = minmaxOrder.maxDrawOrder + 1;
        }
        mxcad.updateDisplay();
    });

}
function Mx_Test_ModifyImage() {
    if (!idImage) return;
    let mxcad = MxCpp.getCurrentMxCAD();
    let imagUrl = "https://cdn.pixabay.com/photo/2022/11/15/12/23/winter-7593872_960_720.jpg";
    mxcad.loadImage(imagUrl, (imagedata) => {
        if (!imagedata) {
            console.log("loadImage failed");
            return;
        }
        let imagedefid = mxcad.addImageDefine(imagUrl, "winter-7593872_960_720.jpg", true);
        let image = idImage.getMcDbEntity() as McDbRasterImage;
        if (image) {
            image.setImageDefId(imagedefid);
        }
        mxcad.updateDisplay();
    });
}

// 绘制标记圆
async function Mx_Test_DrawMarkCircle() {
    while (true) {
        const getPoint = new MxCADUiPrPoint();
        getPoint.setMessage(" 指定一点:");
        getPoint.setOffsetInputPostion(true);
        getPoint.clearLastInputPoint();
        let pt1 = (await getPoint.go());
        if (!pt1) return;

        let mxdraw = MxFun.getCurrentDraw();

        mxdraw.getTempMarkDraw().drawCircleMark(pt1.toVector3(), mxdraw.viewCoordLong2Cad(50), 0xFF0000);
        mxdraw.updateDisplay();
    }
}

// 绘制遮罩层
async function Mx_Test_Wipeout() {
    const getPoint = new MxCADUiPrPoint();
    getPoint.setMessage(" 指定第一点:");
    let pt1 = await getPoint.go();
    if (!pt1) return;


    let pt_corner = await MxCADUtility.getCorner(" 指定第二点:", pt1);

    if (!pt_corner) return;

    let pt2 = pt_corner.pt2;

    let points = new McGePoint3dArray();
    points.append(pt1);
    points.append(new McGePoint3d(pt1.x, pt2.y, 0));
    points.append(new McGePoint3d(pt2.x, pt2.y, 0));

    points.append(new McGePoint3d(pt2.x, pt1.y, 0));

    let wipeout = new McDbWipeout

    wipeout.setVertices(points);

    let mxcad = MxCpp.getCurrentMxCAD();
    wipeout = mxcad.drawEntity(wipeout).getMcDbObject() as McDbWipeout;

    let minmaxOrder = MxCpp.getCurrentDatabase().currentSpace.getMinMaxDrawOrder();
    let lOrder = minmaxOrder.maxDrawOrder + 1;
    wipeout.drawOrder = lOrder;
     

}

export function init() {

    new McDbTestRoundedRectangle().rxInit();
    new McDbTestDatumSymbol().rxInit();

    insertFrame(); initRoads();

    MxFun.addCommand("Mx_DrawStart", Mx_DrawStart);
    MxFun.addCommand("Mx_ConcavoVex", Mx_ConcavoVex);
    MxFun.addCommand("Mx_ZigzagLine", Mx_ZigzagLine);
    MxFun.addCommand("Mx_CenterRect", Mx_CenterRect);
    MxFun.addCommand("Mx_RREC", Mx_RREC);
    MxFun.addCommand("Mx_CCLine", Mx_CCLine);
    MxFun.addCommand("Mx_Piping", Mx_Piping);
    MxFun.addCommand("Mx_CutPipeline", Mx_CutPipeline);
    MxFun.addCommand("Mx_WelLine", Mx_WelLine);
    MxFun.addCommand("Mx_PerpLine", Mx_PerpLine);
    MxFun.addCommand("Mx_StairLine", Mx_StairLine);
    MxFun.addCommand("Mx_SolidCircle", Mx_SolidCircle);
    MxFun.addCommand("Mx_CottonInsulation", Mx_CottonInsulation);
    MxFun.addCommand("Mx_CenterLine", Mx_CenterLine);
    MxFun.addCommand("Mx_DoHole", Mx_DoHole);
    MxFun.addCommand("Mx_Compass", Mx_Compass);
    MxFun.addCommand("Mx_MassegeBox", Mx_MassegeBox);
    MxFun.addCommand("Mx_DatumSymbol", Mx_DatumSymbol);
    MxFun.addCommand("Mx_ConcentricCircles", Mx_ConcentricCircles);
    MxFun.addCommand("Mx_Gear", Mx_Gear);
    MxFun.addCommand("Mx_BlkCenterLine", Mx_BlkCenterLine);
    MxFun.addCommand("Mx_RoundCutPublicLine", Mx_RoundCutPublicLine);
    MxFun.addCommand("Mx_DatumSymbol2", Mx_DatumSymbol2);
    MxFun.addCommand("Mx_DrawPolygon", Mx_DrawPolygon);
    MxFun.addCommand("Mx_Test_DrawTransparencyLine", Mx_Test_DrawTransparencyLine);
    MxFun.addCommand("Mx_Test_DrawImage", Mx_Test_DrawImage);
    MxFun.addCommand("Mx_Test_DrawMarkCircle", Mx_Test_DrawMarkCircle);
    MxFun.addCommand("Mx_Test_Wipeout", Mx_Test_Wipeout);
    MxFun.addCommand("Mx_Test_ModifyImage", Mx_Test_ModifyImage);
}
   