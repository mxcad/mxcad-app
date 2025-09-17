///////////////////////////////////////////////////////////////////////////////
//版权所有（C）2002-2022，成都梦想凯德科技有限公司。
//本软件代码及其文档和相关资料归成都梦想凯德科技有限公司,应用包含本软件的程序必须包括以下版权声明
//此应用程序应与成都梦想凯德科技有限公司达成协议，使用本软件、其文档或相关材料
//https://www.mxdraw.com/
///////////////////////////////////////////////////////////////////////////////
import { MxFun, MrxDbgUiPrBaseReturn, MxDbRect, DynamicInputType } from "mxdraw";
import {
    MxCpp, MxCADSelectionSet, MxCADUiPrPoint, MxCADUiPrInt, McDbEntity,
    MxCADResbuf, McGePoint3d, McGeMatrix3d, MxCADUtility, McDbArc, McDbCircle,
    McObjectId, MxCADUiPrAngle, McGeVector3d, McDbPolyline, McCmColor, McDbLine,
    McDb, McDbCurve, MxCADUiPrEntity, McDbObject, MxCADUiPrDist, MxCADUiPrKeyWord,
    MxCADUiPrString, McDbHatch, DxfCode, McDbBlockTableRecord, McDbBlockReference,
    McGePoint3dArray,
    McDbSpatialFilter,
    IMcDbDwgFiler,
    McDbCustomEntity,
    McDbMText,
    MxCADWorldDraw
} from "mxcad";
import { McDbText } from "mxcad";
// 多重复制
async function Mx_Multicopy() {
    // 选择集选择多重复制对象
    let ss = new MxCADSelectionSet();
    if (!await ss.userSelect("选择对象:")) return;
    if (ss.count() == 0) return;

    const objIds: McObjectId[][] = [];
    const mxcad = MxCpp.getCurrentMxCAD();
    const getBasePt = new MxCADUiPrPoint();
    getBasePt.setMessage("指定基点");
    const basePt = await getBasePt.go();
    if (!basePt) return;
    while (true) {
        const getNextPt = new MxCADUiPrPoint();
        getNextPt.setMessage("指定第二个点 ");
        // 设置关键字列表
        if (objIds.length > 0) {
            getNextPt.setKeyWords(`[阵列(A)/退出(E)/放弃(U)]`);
        } else {
            getNextPt.setKeyWords(`[阵列(A)/退出(E)]`);
        }
        // 动态绘制
        getNextPt.setUserDraw((pt, pw) => {
            pw.drawLine(pt.toVector3(), basePt.toVector3())
            ss.forEach((id) => {
                let ent = id.getMcDbEntity();
                if (!ent) return;
                let ent_clone = ent.clone() as McDbEntity;
                ent_clone.move(basePt, pt);
                pw.drawMcDbEntity(ent_clone);
            })
        })
        const nextPt = await getNextPt.go();
        // 根据用户输入状态进行对应操作
        if (getNextPt.getStatus() === MrxDbgUiPrBaseReturn.kKeyWord) {
            // 输入关键字
            if (getNextPt.isKeyWordPicked("E")) {
                // 退出
                return;
            } else if (getNextPt.isKeyWordPicked("U")) {
                // 放弃、撤回
                if (objIds.length > 0) {
                    objIds[objIds.length - 1].forEach(id => {
                        id.erase()
                    });
                    objIds.pop();
                } else {
                    return;
                }
            } else if (getNextPt.isKeyWordPicked("A")) {
                // 阵列 即对目标对象多次平移
                const getNum = new MxCADUiPrInt();
                getNum.clearLastInputPoint()
                getNum.setMessage("输入要进行阵列的项目数 ");
                const num = await getNum.go() || 1;
                let arr: McGePoint3d[] = []
                getNextPt.setUserDraw((pt, pw) => {
                    pw.drawLine(pt.toVector3(), basePt.toVector3())
                    arr.length = 0;
                    let lastPt = pt.clone()
                    arr.push(lastPt)
                    for (let i = 0; i < num - 1; i++) {
                        lastPt = lastPt.clone().addvec(pt.sub(basePt))
                        arr.push(lastPt)
                    }
                    ss.forEach((id) => {
                        let ent = id.getMcDbEntity();
                        if (!ent) return;
                        arr.forEach(item => {
                            let matrix = new McGeMatrix3d();
                            let event_clone = ent.clone() as McDbEntity;
                            matrix.clone();
                            matrix.setToTranslation(item.sub(basePt));//平移
                            event_clone.transformBy(matrix);
                            pw.drawMcDbEntity(event_clone);
                        })
                    })
                })
                let nextPt = await getNextPt.go();
                if (!nextPt) return;
                objIds.push([])
                ss.forEach((id) => {
                    let ent = id.getMcDbEntity();
                    if (!ent) return;
                    arr.forEach(item => {
                        let matrix = new McGeMatrix3d();
                        let event_clone = ent.clone() as McDbEntity;
                        matrix.clone();
                        matrix.setToTranslation(item.sub(basePt));//平移
                        event_clone.transformBy(matrix);
                        objIds[objIds.length - 1].push(mxcad.drawEntity(event_clone));
                    })
                })
            }
        } else if (getNextPt.getStatus() === MrxDbgUiPrBaseReturn.kOk) {
            // 未输入关键字
            if (!nextPt) return
            objIds.push([])
            ss.forEach((id) => {
                let ent = id.getMcDbEntity();
                if (!ent) return;
                let ent_clone = ent.clone() as McDbEntity;
                ent_clone.move(basePt, nextPt);
                objIds[objIds.length - 1].push(mxcad.drawEntity(ent_clone))
            })
        } else {
            return
        }
    }

}

// 弧转圆
async function Mx_ArcToCircle() {
    // 筛选圆弧
    let filter = new MxCADResbuf();
    filter.AddMcDbEntityTypes("ARC");
    let aryId = await MxCADUtility.userSelect("选择圆弧对象", filter);
    if (aryId.length == 0) {
        return;
    }
    // 获取圆弧圆心、半径
    aryId.forEach(async (id) => {
        let event: any = await id.getMcDbEntity();
        let arc = event as McDbArc;
        let centerPt = arc.center;
        let radius = arc.radius;
        let cricle = new McDbCircle();
        cricle.center = centerPt;
        cricle.radius = radius;
        event.erase();
        let mxcad = MxCpp.getCurrentMxCAD();
        mxcad.drawEntity(cricle);
    })
}

// 复制旋转
async function Mx_CopyRotation() {
    const mxcad = MxCpp.getCurrentMxCAD();
    // 选择复制对象
    let ss = new MxCADSelectionSet();
    if (!await ss.userSelect("选择复制旋转对象:")) return;
    if (ss.count() == 0) return;
    const getBasePt = new MxCADUiPrPoint();
    getBasePt.setMessage("指定基点");
    const basePt = await getBasePt.go();
    if (!basePt) return;
    const getNextPt = new MxCADUiPrPoint();
    getNextPt.setMessage("请指定目标点 ");
    getNextPt.setUserDraw((pt, pw) => {
        pw.drawLine(pt.toVector3(), basePt.toVector3())
        ss.forEach((id) => {
            let ent = id.getMcDbEntity();
            if (!ent) return;
            let ent_clone = ent.clone() as McDbEntity;
            ent_clone.move(basePt, pt);
            pw.drawMcDbEntity(ent_clone);
        })
    })
    const nextPt = await getNextPt.go();
    if (!nextPt) return;
    let objs: McObjectId[] = [];
    ss.forEach((id) => {
        let ent = id.getMcDbEntity();
        if (!ent) return;
        let ent_clone = ent.clone() as McDbEntity;
        ent_clone.move(basePt, nextPt);
        objs.push(mxcad.drawEntity(ent_clone));
    })

    // 指定旋转角度
    let getAngle = new MxCADUiPrAngle();
    getAngle.setMessage("请指定旋转角度")
    getAngle.setBasePt(nextPt);
    getAngle.setUserDraw((pt, pw) => {
        pw.drawLine(pt.toVector3(), nextPt.toVector3())
        objs.forEach(id => {
            let ent = id.getMcDbEntity();
            if (!ent) return;
            let event_clone = ent.clone() as McDbEntity;
            let a = pt.sub(nextPt).angleTo2(McGeVector3d.kXAxis, McGeVector3d.kNegateZAxis)
            event_clone.rotate(nextPt, a)
            pw.drawMcDbEntity(event_clone);
        })
    })
    let val = await getAngle.go();
    if (!val) return;
    const angle = getAngle.value();
    objs.forEach(id => {
        let ent = id.getMcDbEntity();
        if (!ent) return;
        let event_clone = ent.clone() as McDbEntity;
        event_clone.rotate(nextPt, angle)
        mxcad.drawEntity(event_clone);
        ent.erase();
    })
}

// 圆转多边
async function Mx_CricleTotoll() {
    // 选中圆
    let filter = new MxCADResbuf();
    filter.AddMcDbEntityTypes("CIRCLE");
    let aryId = await MxCADUtility.userSelect("选择要转成多边形的对象", filter);
    if (aryId.length == 0) {
        return;
    }

    // 设置多边形
    let getNum = new MxCADUiPrInt();
    getNum.setMessage("设置多边形边数");
    let num = await getNum.go() || 5;
    getNum.clearLastInputPoint()
    if (!num) return;
    const getPoint = new MxCADUiPrPoint();
    getPoint.setMessage(" 输入选项")
    getPoint.setKeyWords(`[内接于圆(I)/外切于圆(C)]`)
    getPoint.clearLastInputPoint()
    await getPoint.go();
    let tollType = 'inside'
    if (getPoint.isKeyWordPicked("i")) tollType = 'inside'
    if (getPoint.isKeyWordPicked("c")) tollType = 'outside'
    let mxcad = MxCpp.getCurrentMxCAD();
    aryId.forEach(async (id) => {
        let event: any = await id.getMcDbEntity();
        let cricle = event as McDbCircle;
        let arr1: McGePoint3d[] = [];
        if (tollType === 'inside') {
            //    多边形内切圆
            for (let i = 0; i < num; i++) {
                let point = cricle.getPointAtDist(cricle.getLength().val / num * i);
                if (point.ret) arr1.push(point.val)
            }
            let pl1 = new McDbPolyline();
            arr1.forEach(i => {
                pl1.addVertexAt(i)
            })
            pl1.isClosed = true;
            mxcad.drawEntity(pl1);
        } else if (tollType === 'outside') {
            //  多边形外切圆
            /**
             * 知道三个角加一条边求其他两边
             * 一条边：r
             * 三个角 90 360/num*2 
             */
            let angle = 90 - (360 / (num * 2))
            let sinValue = Math.sin(angle * Math.PI / 180); // 返回0.5
            let R = cricle.radius / sinValue;
            let r = new McDbCircle();
            r.center = cricle.center;
            r.radius = R;
            let arr2: McGePoint3d[] = [];
            for (let i = 0; i < num; i++) {
                let point = r.getPointAtDist(r.getLength().val / num * i);
                if (point.ret) arr2.push(point.val)
            }
            let pl2 = new McDbPolyline();
            arr2.forEach(i => {
                pl2.addVertexAt(i)
            })
            pl2.isClosed = true;
            mxcad.drawEntity(pl2);
        }
        event.erase()
    })
}

// 改颜色
async function Mx_ChangeColor() {
    let aryId = await MxCADUtility.userSelect("选择要修改颜色的对象");
    if (aryId.length == 0) {
        return;
    }
    const getColor = new MxCADUiPrInt();
    getColor.setMessage(`输入颜色索引(0~256)`);
    let colorNum = await getColor.go() || 20;
    let color = new McCmColor();
    color.setColorIndex(colorNum);
    aryId.forEach(async (id) => {
        let event = id.getMcDbEntity() as McDbEntity;
        event.trueColor = color;
    })
}

// 圆弧切角
async function Mx_ArcToAngle() {
    // 选中圆弧
    let filter = new MxCADResbuf();
    filter.AddMcDbEntityTypes("ARC");
    let aryId = await MxCADUtility.userSelect("选择圆弧对象", filter);
    if (aryId.length == 0) {
        return;
    };

    aryId.forEach(async (id) => {
        // 获取圆弧实体
        let event = await id.getMcDbEntity();
        if (!event) return
        let arc = (event.clone()) as McDbArc
        /**
        * 获取圆弧开始点与结束点
        * 并根据两点获取切向量
        */
        let dist = arc.getLength();
        let startPt = arc.getStartPoint().val;
        let mxcad = MxCpp.getCurrentMxCAD();
        let circle = new McDbCircle();
        circle.center = arc.center;
        circle.radius = arc.radius;
        let d = circle.getDistAtPoint(startPt);
        let endPt = circle.getPointAtDist(dist.val + d.val).val;
        let vec_start = arc.getFirstDeriv(startPt);
        if (!vec_start.ret) return;
        let pt1 = startPt.clone();
        pt1.addvec(vec_start.val);
        let vec_end = arc.getFirstDeriv(endPt);
        if (!vec_end.ret) return;
        let pt2 = endPt.clone();
        pt2.addvec(vec_end.val);

        // 延长两条切向量取交点
        let line_1 = new McDbLine();
        line_1.startPoint = startPt;
        line_1.endPoint = pt1;
        let line_2 = new McDbLine();
        line_2.startPoint = endPt;
        line_2.endPoint = pt2;
        let intPt = line_1.IntersectWith(line_2, McDb.Intersect.kExtendBoth);
        if (intPt.length() === 0) return
        let lastPt = intPt.at(0)
        line_1.endPoint = lastPt;
        line_2.endPoint = lastPt;
        mxcad.drawEntity(line_1)
        mxcad.drawEntity(line_2)
    })
}

// 临时隐藏
async function Mx_TemHiding() {
    let mxcad = MxCpp.getCurrentMxCAD();
    const getKey = new MxCADUiPrKeyWord();
    getKey.setMessage(" 输入选项")
    getKey.setKeyWords(`[隐藏(A)/隐藏未选(B)/全部显示(C)]`);
    const keyVal = await getKey.go();
    if (!keyVal) return;
    if (keyVal === 'A' || keyVal === 'B') {
        let aryId = await MxCADUtility.userSelect("选择目标的对象");
        if (aryId.length == 0) {
            return;
        }
        let arr: number[] = [];
        aryId.forEach((obj_id: McObjectId) => arr.push(obj_id.id))
        if (keyVal === 'A') {
            aryId.forEach(async (id) => {
                let event = await id.getMcDbEntity() as McDbEntity;
                if (event) event.visible = false;
            })
        } else if (keyVal === 'B') {
            // 获取图纸所有对象id，遍历筛除选择对象的id
            let selectArr = new MxCADSelectionSet();
            selectArr.allSelect();
            selectArr.forEach(async obj_id => {
                if (!arr.includes(obj_id.id)) {
                    let event = await obj_id.getMcDbEntity();
                    if (event) event.visible = false;
                }
            })
        }
    } else if (keyVal === 'C') {
        let selectArr = new MxCADSelectionSet();
        selectArr.allSelect();
        selectArr.forEach(async id => {
            let event: any = await id.getMcDbEntity();
            if (event && event.visible === false) {
                event.visible = true;
            }
        })
    } else {
        return;
    };
    mxcad.updateDisplay()
}

// 方框删除
async function Mx_BoxDel() {
    // 绘制方框
    const getPoint = new MxCADUiPrPoint();
    let drawColor = MxCpp.getCurrentMxCAD().getCurrentDatabaseDrawColor();
    getPoint.setMessage(" 指定删除方框第一点:");
    let pt1 = await getPoint.go();
    if (!pt1) {
        return;
    }
    let mxcad = MxCpp.getCurrentMxCAD();
    let rect = new MxDbRect();
    rect.pt1 = pt1.toVector3();
    // 在点取第二点时，设置动态绘制.
    getPoint.setUserDraw((currentPoint: McGePoint3d, worldDraw) => {
        rect.pt2 = currentPoint.toVector3();
        rect.setColor(drawColor);
        worldDraw.drawCustomEntity(rect);
    });
    getPoint.setMessage(" 指定删除方框第二点:");
    getPoint.setDynamicInputType(DynamicInputType.kXYCoordInput);
    let pt2 = await getPoint.go();
    if (!pt2) {
        return;
    }
    rect.pt2 = pt2.toVector3();
    let pl = new McDbPolyline();
    pl.addVertexAt(pt1);
    pl.addVertexAt(new McGePoint3d(pt1.x, pt2.y));
    pl.addVertexAt(pt2);
    pl.addVertexAt(new McGePoint3d(pt2.x, pt1.y));
    pl.isClosed = true;
    let d_id = mxcad.drawEntity(pl);

    // 根据方框角点设置选择集删除对象
    const ss = new MxCADSelectionSet();
    ss.crossingSelect(pt1.x, pt1.y, pt2.x, pt2.y);
    ss.getIds().forEach(id => {
        if (id && id.id !== d_id.id) {
            // 获取并打断与方框相交的对象，删除框内对象
            let event = id.getMcDbEntity() as McDbCurve;
            let points = event.IntersectWith(pl, McDb.Intersect.kOnBothOperands);
            if (points.length() === 0) {
                id.erase()
            } else {
                let PointsArr: McGePoint3d[] = []
                points.forEach(val => PointsArr.push(val))
                event.splitCurves(PointsArr).forEach(e => {
                    mxcad.drawEntity(e as McDbEntity)
                })
                id.erase()
            }
        }
    })

    // 累加选择，精确删除方框内的实体
    while (true) {
        const getPoint = new MxCADUiPrPoint()
        getPoint.setMessage(" 选择需要精确删除的实体")
        const point = await getPoint.go()
        if (!point) break;
        let objId = MxCADUtility.findEntAtPoint(point.x, point.y, point.z, -1)
        mxcad.addCurrentSelect(objId)
    }
    const objIds = MxCADUtility.getCurrentSelect()
    objIds.forEach((objId: McObjectId) => {
        objId.erase()
    })
    mxcad.mxdraw.clearMxCurrentSelect()

}

// 角度复制
async function Mx_AngleCopy() {
    const mxcad = MxCpp.getCurrentMxCAD();
    const angleCopyObj = new MxCADUiPrEntity();//角度复制对象
    angleCopyObj.setMessage(" 请选择角度复制对象")
    const angleCopyObj_id = await angleCopyObj.go();
    if (angleCopyObj_id === null) return;
    const angleCopyEvent = (await angleCopyObj_id.getMcDbEntity()) as McDbEntity;//角度复制的实例对象

    const getNum = new MxCADUiPrInt();
    getNum.setMessage(" 请输入角度复制数量");
    const num = await getNum.go() || 1;

    const getPoint = new MxCADUiPrPoint();
    getPoint.setMessage(" 请输入角度复制的基点");
    const point = await getPoint.go(); //角度复制的基点
    if (!point) return;

    const getAngle = new MxCADUiPrAngle();
    getAngle.setMessage(" 请输入复制角度");
    getAngle.setBasePt(point);
    getAngle.setUserDraw((pt, pw) => {
        const angle = pt.sub(point).angleTo2(McGeVector3d.kXAxis, McGeVector3d.kNegateZAxis);
        for (let i = 1; i < num + 1; i++) {
            let event_clone = angleCopyEvent.clone() as McDbEntity;
            event_clone.rotate(point, angle * i);
            pw.drawMcDbEntity(event_clone)
        }
    })
    let a = await getAngle.go();
    if (!a) return;
    const angle = getAngle.value();
    for (let i = 1; i < num + 1; i++) {
        let event_clone = angleCopyEvent.clone() as McDbEntity;
        event_clone.rotate(point, angle * i);
        mxcad.drawEntity(event_clone)
    }
}

// 顶点复制
async function Mx_VertexRep() {
    // 选择顶点对象
    let filter = new MxCADResbuf();
    filter.AddMcDbEntityTypes("LWPOLYLINE");
    let aryIds = await MxCADUtility.userSelect("请选择顶点对象", filter);
    if (aryIds.length == 0) return;

    // 选择复制对象
    let copyIds = await MxCADUtility.userSelect("请选择复制对象");
    if (copyIds.length == 0) return;

    // 选择复制基点
    const getBasePt = new MxCADUiPrPoint();
    getBasePt.setMessage("请确定复制基点");
    const basePt = await getBasePt.go();
    if (!basePt) return;

    // 平移对象到顶点
    const mxcad = MxCpp.getCurrentMxCAD()
    aryIds.forEach(id => {
        let event = id.getMcDbEntity() as McDbPolyline;
        if (!event) return
        let num = event.numVerts();
        for (let i = 0; i < num; i++) {
            const pt = event.getPointAt(i).val;
            copyIds.forEach(obj_id => {
                const e = obj_id.getMcDbEntity() as McDbEntity;
                const e_clone = e.clone() as McDbEntity;
                e_clone.move(basePt, pt);
                mxcad.drawEntity(e_clone)
            })
        }
    })
}

// 交点打断
async function Mx_IntersectBreak() {
    // 选择参考曲线
    let eventObj = new MxCADUiPrEntity();
    eventObj.setMessage("请选择参考曲线");
    let eventObj_id = await eventObj.go();
    let event = await eventObj_id.getMcDbEntity()//获取实例对象
    if (event === null) return;
    const mxcad = MxCpp.App.getCurrentMxCAD();
    let curve = event.clone();
    let filter = new MxCADResbuf();
    filter.AddMcDbEntityTypes("CIRCLE,ARC,LINE,LWPOLYLINE,ELLIPSE");
    let aryId = await MxCADUtility.userSelect("选择打断对象", filter);//选中对象的id
    if (aryId.length == 0) return;
    let dTol = mxcad.mxdraw.viewCoordLong2Cad(0.5);// 设置精度值
    aryId.forEach(async (id) => {
        if (id.id !== eventObj_id.id) {
            let breakEvent: McDbCurve = (await id.getMcDbEntity()) as McDbCurve;
            let breakArr = breakEvent.IntersectWith(curve as McDbEntity, McDb.Intersect.kOnBothOperands);//与实体相交的点集合
            if (breakArr.length() != 0) {
                //有交点的对象
                let arr: McGePoint3d[] = [];//交点数组
                breakArr.forEach((item: McGePoint3d) => {
                    arr.push(item)
                })
                let breakPoint: McGePoint3d[] = [];
                arr.forEach(pt => {
                    let closePoint = breakEvent.getClosestPointTo(pt, false);//曲线上离鼠标位置最近的点
                    if (!closePoint.ret) return;
                    let vec = breakEvent.getFirstDeriv(closePoint.val);//断点所在位置的向量
                    if (!vec.ret) return;
                    vec.val.normalize().mult(MxFun.viewCoordLong2Cad(10));//断开的距离
                    let pt1 = closePoint.val.clone();
                    pt1.addvec(vec.val);
                    let pt2 = closePoint.val.clone();
                    pt2.subvec(vec.val);

                    // 如果是曲线端点相交，则需要特殊处理
                    const startPt = breakEvent.getPointAtDist(0).val;
                    const endPt = breakEvent.getPointAtDist(breakEvent.getLength().val).val;
                    if (startPt.distanceTo(closePoint.val) < dTol || endPt.distanceTo(closePoint.val) < dTol) {
                        const num = breakEvent.getDistAtPoint(pt1);
                        breakPoint.push(closePoint.val)
                        num.ret ? breakPoint.push(pt1) : breakPoint.push(pt2);
                    } else {
                        breakPoint.push(pt1);
                        breakPoint.push(pt2);
                    }
                });
                let breakcurve = breakEvent.splitCurves(breakPoint);
                if (breakcurve.empty()) {
                    breakEvent.highlight(false);
                    return;
                }
                breakcurve.forEach((obj: McDbObject, index: number) => {
                    if (index % 2 == 0) mxcad.drawEntity(obj as McDbEntity);
                });
                breakEvent.erase()
            }
        }
    })
}

// 双向偏移
async function Mx_DoubleOff() {
    let mxcad = MxCpp.App.getCurrentMxCAD();

    //获取偏移对象
    let filter = new MxCADResbuf();
    filter.AddMcDbEntityTypes("CIRCLE,ARC,LINE,LWPOLYLINE,ELLIPSE");
    let getEvent = new MxCADUiPrEntity();
    getEvent.setFilter(filter);
    getEvent.setMessage("指定偏移对象");
    let event_id = await getEvent.go();
    if (!event_id) return;

    //获取偏移距离
    const getOffDist = new MxCADUiPrDist();
    getOffDist.setMessage("请输入偏移距离");
    const distVal = await getOffDist.go();
    if (!distVal) return;
    const offDist = getOffDist.value();
    let event = (await event_id.getMcDbEntity()) as McDbCurve;
    // 获取曲线两侧的点作为偏移点
    const startPt = event.getStartPoint().val;
    const vec = event.getFirstDeriv(startPt).val;
    const vecP = vec.rotateBy(McGeVector3d.kYAxis.angleTo1(McGeVector3d.kXAxis))
    const nextPt1 = startPt.clone().addvec(vecP)
    const nextPt2 = startPt.clone().subvec(vecP)
    let objArr1 = event.offsetCurves(offDist, nextPt1);
    if (objArr1.length() === 0) return;
    objArr1.forEach((obj: McDbObject) => {
        mxcad.drawEntity(obj as McDbEntity);
    });
    let objArr2 = event.offsetCurves(offDist, nextPt2);
    if (objArr2.length() === 0) return;
    objArr2.forEach((obj: McDbObject) => {
        mxcad.drawEntity(obj as McDbEntity);
    });
}

// 伸缩
async function Mx_Telescoping() {
    const filter = new MxCADResbuf();
    filter.AddMcDbEntityTypes("ARC,LINE,LWPOLYLINE");
    const getEvent = new MxCADUiPrEntity();
    getEvent.setFilter(filter);
    getEvent.setMessage("指定伸缩对象(选择直线、多段线、圆弧)");
    const event_id = await getEvent.go();
    if (!event_id) return;
    const mxcad = MxCpp.App.getCurrentMxCAD();
    const event = event_id.getMcDbEntity();
    if (event instanceof McDbArc) {
        // 圆弧
        const event_clone = event.clone() as McDbArc;
        const center = event_clone.center;
        const getPoint = new MxCADUiPrPoint();
        getPoint.setMessage("伸缩至");
        event.visible = false;
        getPoint.setUserDraw((pt, pw) => {
            event_clone.endAngle = pt.sub(center).angleTo2(McGeVector3d.kXAxis, McGeVector3d.kNegateZAxis);
            pw.drawMcDbEntity(event_clone)
        })
        const point = await getPoint.go();
        event.visible = true;
        if (!point) return
        event.endAngle = point.sub(center).angleTo2(McGeVector3d.kXAxis, McGeVector3d.kNegateZAxis);
        mxcad.updateDisplay();
    } else if (event instanceof McDbLine) {
        // 直线
        const event_clone = event.clone() as McDbLine;
        const getPoint = new MxCADUiPrPoint();
        getPoint.setMessage("伸缩至");
        event.visible = false;
        let endPt: McGePoint3d = new McGePoint3d();
        getPoint.setUserDraw((pt, pw) => {
            endPt = event_clone.getClosestPointTo(pt, true).val
            event_clone.endPoint = endPt;
            pw.drawMcDbEntity(event_clone)
        })
        const point = await getPoint.go();
        event.visible = true;
        if (!point) return
        event.endPoint = endPt;
        mxcad.updateDisplay();
    } else if (event instanceof McDbPolyline) {
        // 多段线
        const event_clone = event.clone() as McDbPolyline;
        const getPoint = new MxCADUiPrPoint();
        getPoint.setMessage("伸缩至");
        event.visible = false;
        let endPt: McGePoint3d = new McGePoint3d();
        const num = event.numVerts()
        const bulge = event.getBulgeAt(num - 1)
        const widths = event.getWidthsAt(num - 1)
        getPoint.setUserDraw((pt, pw) => {
            endPt = event_clone.getClosestPointTo(pt, true).val;
            event_clone.setPointAt(num - 1, endPt);
            event_clone.setBulgeAt(num - 1, bulge);
            event_clone.setWidthsAt(num - 1, widths.val1, widths.val2);
            pw.drawMcDbEntity(event_clone)
        });
        const point = await getPoint.go();
        event.visible = true;
        if (!point) return
        event.setPointAt(num - 1, endPt);
        event.setBulgeAt(num - 1, bulge);
        event.setWidthsAt(num - 1, widths.val1, widths.val2);
        mxcad.updateDisplay();
    }
}

// 改圆大小
async function Mx_EitCircle() {
    // 框选圆
    const filter = new MxCADResbuf();
    filter.AddMcDbEntityTypes("CIRCLE");
    let aryIds = await MxCADUtility.userSelect("选择对象", filter);
    if (aryIds.length == 0) {
        return;
    };
    // 设置圆半径
    const getRadius = new MxCADUiPrDist();
    getRadius.setMessage("请输入圆半径");
    // 动态绘制圆
    // 以选中的第一个圆为参考圆
    const c = aryIds[0].getMcDbEntity() as McDbCircle;
    getRadius.setBasePt(c.center)
    getRadius.setUserDraw((pt, pw) => {
        const r = pt.distanceTo(c.center);
        aryIds.forEach((id: McObjectId) => {
            const circle = id.getMcDbEntity();
            if (circle) {
                const circle_clone = circle.clone() as McDbCircle;
                circle_clone.radius = r;
                pw.drawMcDbEntity(circle_clone)
            }
        })
    })
    const radiusVal = await getRadius.go();
    if (!radiusVal) return;
    const radius = getRadius.value();
    aryIds.forEach((id: McObjectId) => {
        const circle = id.getMcDbEntity() as McDbCircle;
        circle.radius = radius;
    })
}

// 线型比例
async function Mx_LayerTypeScale() {
    let filter = new MxCADResbuf();
    filter.AddMcDbEntityTypes("LWPOLYLINE,ARC,LINE,CIRCLE,ELLIPSE");
    let aryId = await MxCADUtility.userSelect("选择要修改线型比例的对象", filter);
    if (aryId.length == 0) {
        return;
    }
    const getScale = new MxCADUiPrString();
    getScale.setMessage("请输入线型比例");
    const scaleVal = await getScale.go();
    if (!scaleVal) return;
    const scale = Number(getScale.value());
    if (!scale) return;
    aryId.forEach(async (id) => {
        let event = id.getMcDbEntity();
        if (event) event.linetypeScale = scale;
    })
}

// 按弧阵列
/**
 * 指定对象的平移和旋转
 * 平移距离：指定对象到指定圆弧位置的距离
 * 旋转方向：阵列点垂直向量与Y轴的夹角
 */
async function Mx_ArcOrder() {
    const mxcad = MxCpp.App.getCurrentMxCAD();

    // 设置阵列间距
    const getDist = new MxCADUiPrDist();
    getDist.setMessage("请输入阵列间距");
    const distVal = await getDist.go();
    if (!distVal) return;
    const dist = getDist.value();

    // 指定圆弧
    const filter = new MxCADResbuf();
    filter.AddMcDbEntityTypes("ARC");
    const arcEventObj = new MxCADUiPrEntity();
    arcEventObj.setFilter(filter);
    arcEventObj.setMessage("请选择圆弧")
    const arcEvent_id = await arcEventObj.go();
    if (!arcEvent_id.id) return;
    const arcEvent: McDbArc = arcEvent_id.getMcDbEntity() as McDbArc;

    // 指定排列对象
    const aryIds = await MxCADUtility.userSelect("选择排列对象");
    if (aryIds.length == 0) {
        return;
    }
    // 指定排列基点
    const getPoint = new MxCADUiPrPoint();
    getPoint.setMessage("指定排列基点")
    const point = await getPoint.go();
    if (!point) return;

    // 排列
    aryIds.forEach(async (orderObj_id) => {
        let orderEvent = orderObj_id.getMcDbEntity() as McDbEntity;
        let eventInd = arcEvent.getLength().val / dist;// 根据阵列距离得出阵列数
        if (eventInd < 1) return;
        for (let i = 0; i < eventInd; i++) {
            let orderEvent_clone = orderEvent.clone() as McDbEntity;
            let evePt = arcEvent.getPointAtDist(i * dist);
            if (!evePt.ret) return;
            let v = evePt.val.sub(point)//平移距离和方向
            let matrix = new McGeMatrix3d();
            matrix.setToTranslation(v);
            orderEvent_clone.transformBy(matrix);
            let tangentV = arcEvent.getFirstDeriv(evePt.val).val;//曲线阵列点切向量
            let verticalV = tangentV.rotateBy(McGeVector3d.kYAxis.angleTo1(McGeVector3d.kXAxis));//阵列点垂直向量
            let angle = verticalV.negate().angleTo2(McGeVector3d.kYAxis, McGeVector3d.kNegateZAxis);//旋转角度
            orderEvent_clone.rotate(evePt.val, angle)
            mxcad.drawEntity(orderEvent_clone);
        }
    })
}

// pl圆角
/**
 * 将pl打断成n段直线
 * 根据圆角半径求圆心
 */
async function Mx_PlRoundCorners() {
    // 选择目标pl
    let filter = new MxCADResbuf();
    filter.AddMcDbEntityTypes("LWPOLYLINE");
    let ss = new MxCADSelectionSet();
    if (!await ss.userSelect("选择目标多段线:", filter)) return;
    if (ss.count() == 0) return;

    // 设置圆角半径s
    const getRadius = new MxCADUiPrDist();
    getRadius.setMessage("请输入圆角半径<5>");
    let radius: number = 5;
    const radiusVal = await getRadius.go();
    if (radiusVal) {
        radius = getRadius.value();
    }

    const mxcad = MxCpp.getCurrentMxCAD();
    ss.forEach(id => {
        const pl = id.getMcDbEntity() as McDbPolyline;

        const pl_new = new McDbPolyline();
        pl_new.trueColor = pl.trueColor;
        pl_new.isClosed = pl.isClosed;
        pl_new.colorIndex = pl.colorIndex;
        pl_new.layerId = pl.layerId;
        const num = pl.numVerts();
        const vertPts: McGePoint3d[] = [];
        for (let i = 0; i < num; i++) {
            vertPts.push(pl.getPointAt(i).val);
        };

        if (pl.isClosed === true) {
            // 闭合曲线多一条线
            vertPts.push(...[vertPts[0], vertPts[1]])
        }
        vertPts.forEach((pt1, index) => {
            if (index + 2 >= vertPts.length) return;
            const pt2 = vertPts[index + 1];
            const pt3 = vertPts[index + 2];
            const line1 = new McDbLine(pt2, pt1);
            const line2 = new McDbLine(pt2, pt3);

            // 获取圆角起始点
            const angle = pt1.sub(pt2).angleTo2(pt3.sub(pt2), McGeVector3d.kNegateZAxis);
            let b = radius * Math.sin(Math.PI / 2 - angle / 2) / Math.sin(angle / 2);
            if (b < 0) b = -b;
            const p1 = line1.getPointAtDist(b).val;
            const p2 = line2.getPointAtDist(b).val;

            // 获取圆角中点
            line1.rotate(p1, Math.PI / 2);
            line2.rotate(p2, Math.PI / 2);
            const pointsVal = line1.IntersectWith(line2, McDb.Intersect.kExtendBoth);
            if (!pointsVal.length()) return;
            const center = pointsVal.at(0);

            const line = new McDbLine(center, pt2);
            const midPt = line.getPointAtDist(radius).val;

            let retB = MxCADUtility.calcBulge(p1, midPt, p2).val;//三点计算当前弧线的凸度

            if (index === 0 && pl.isClosed === false) {
                let w = pl.getWidthsAt(index)
                pl_new.addVertexAt(pt1, 0, w.val1, w.val2);
            }
            let widths;
            if (pl.isClosed === true && index + 2 === vertPts.length - 1) {
                widths = pl.getWidthsAt(index);
            } else {
                widths = pl.getWidthsAt(index + 1);
            }
            pl_new.addVertexAt(p1, retB, widths.val1, widths.val2);
            pl_new.addVertexAt(p2, 0, widths.val1, widths.val2);

            if (index + 2 === vertPts.length - 1 && pl.isClosed === false) {
                pl_new.addVertexAt(pt3, 0, widths.val1, widths.val2);
            }
        })
        pl.erase();
        mxcad.drawEntity(pl_new);
    })
}

// 填充比例
async function MxTest_ModifyPatternScale() {
    let retIds = await MxCADUtility.selectEnt("选择图案填充对象");
    if (retIds.length == 0) {
        return;
    }
    let id = retIds[0];
    let ent = id.getMcDbEntity();

    if (!(ent instanceof McDbHatch)) return
    // 获取填充比例
    const getRatio = new MxCADUiPrString();
    getRatio.setMessage("请输入填充比例");
    const ratioVal = await getRatio.go();
    if (!ratioVal) return;
    const ratio = Number(getRatio.value());
    if (!ratio) return;
    let hatch = ent as McDbHatch;
    hatch.scalePattern(ratio);
    MxCpp.getCurrentMxCAD().updateDisplay();
}
// 继承填充
async function Mx_InheritanceFill() {
    const getEnt = new MxCADUiPrEntity();
    getEnt.setMessage("请选择原填充图形");
    const entId = await getEnt.go();
    if (!entId.id) return;
    const mxcad = MxCpp.getCurrentMxCAD();
    const ent = entId.getMcDbEntity();
    if (ent instanceof McDbHatch) {
        while (true) {
            const getPoint = new MxCADUiPrPoint();
            getPoint.disableAllTrace()
            getPoint.setDisableDynInput(true)
            getPoint.clearLastInputPoint()
            getPoint.setMessage("请点击填充图形内部任意一点");
            const point = await getPoint.go();
            if (!point) return;
            const hatch = MxCADUtility.builderHatchFromPoint(point);
            if (!hatch) {
                MxFun.acutPrintf("没有找到闭合区域 ")
                return;
            }
            const id = mxcad.drawHatch(hatch);
            const _hatch = id.getMcDbEntity() as McDbHatch;
            const num = ent.numPatternDefinitions;
            if (num) {
                for (let i = 0; i < num; i++) {
                    const res = ent.getPatternDefinitionAt(i);
                    _hatch.addPatternDefinition(res.angle, res.baseX, res.baseY, res.offsetX, res.offsetY, res.aryDashes)
                }
            }
            _hatch.setPattern(ent.patternType(), ent.patternName());
            _hatch.patternAngle = ent.patternAngle;
            _hatch.patternScale = ent.patternScale;
            _hatch.patternSpace = ent.patternSpace;
            _hatch.patternDouble = ent.patternDouble;
            _hatch.setHatchStyle(ent.hatchStyle());
            mxcad.updateDisplay();
        }
    }
}

// pl线反向
async function Mx_PlReverse() {
    const filter = new MxCADResbuf();
    filter.AddMcDbEntityTypes('LWPOLYLINE');

    const getEntity = new MxCADUiPrEntity();
    getEntity.setMessage("请选择线对象");
    getEntity.setFilter(filter);
    const entId = await getEntity.go();
    console.log(entId)
    if (!entId.id) return;
    const ent = entId.getMcDbEntity() as McDbPolyline;
    const vertNum = ent.numVerts();
    const pl = new McDbPolyline();
    for (let i = vertNum - 1; i >= 0; i--) {
        const pt = ent.getPointAt(i).val;
        if (i > 0) {
            const widths = ent.getWidthsAt(i - 1);
            const bulge = ent.getBulgeAt(i - 1);
            pl.addVertexAt(pt, -bulge, widths.val2, widths.val1);
        } else {
            const widths = ent.getWidthsAt(i);
            const bulge = ent.getBulgeAt(i);
            pl.addVertexAt(pt, -bulge, widths.val2, widths.val2);
        }
    }
    const mxcad = MxCpp.getCurrentMxCAD();
    pl.isClosed = ent.isClosed;
    mxcad.drawEntity(pl);
    ent.erase()
}

//得到所有直线对象
async function Mx_TestGetAllLineByLayer() {
    let ss = new MxCADSelectionSet();
    ss.allSelect(new MxCADResbuf([DxfCode.kEntityType, "LINE"]));
    console.log("得到对象数目:" + ss.count());
    ss.forEach(id => {
        const ent = id.getMcDbEntity();
        if (ent) ent.highlight(true);
    });
    MxCpp.getCurrentMxCAD().updateDisplay();
}

// 等分点标注
export class MxDbTestDivide extends McDbCustomEntity {
    // 定义MxDbTestDivide内部的点对象 
    // 等分点圆心，半径
    private center: McGePoint3d = new McGePoint3d();
    private _radius: number = 1;
    /** 包围盒最大点 包围盒最小点 */
    private minPt: McGePoint3d = new McGePoint3d();
    private maxPt: McGePoint3d = new McGePoint3d();;
    // 构造函数
    constructor(imp?: any) {
        super(imp);
    }
    // 创建函数
    public create(imp: any) {
        return new MxDbTestDivide(imp)
    }
    // 获取类名
    public getTypeName(): string {
        return "MxDbTestDivide";
    }
    //设置或获取云线半圆弧半径
    public set radius(val: number) {
        this._radius = val;
    }
    public get radius(): number {
        return this._radius;
    }
    // 读取自定义实体数据pt1、pt2
    public dwgInFields(filter: IMcDbDwgFiler): boolean {
        this.center = filter.readPoint("center").val;
        this._radius = filter.readDouble("radius").val;
        this.minPt = filter.readPoint("minPt").val;
        this.maxPt = filter.readPoint("maxPt").val;
        return true;
    }
    // 写入自定义实体数据pt1、pt2
    public dwgOutFields(filter: IMcDbDwgFiler): boolean {
        filter.writePoint("center", this.center);
        filter.writeDouble("radius", this._radius);
        filter.writePoint("minPt", this.minPt);
        filter.writePoint("maxPt", this.maxPt);
        return true;
    }

    // 移动自定义对象的夹点
    public moveGripPointsAt(iIndex: number, dXOffset: number, dYOffset: number, dZOffset: number) {
        this.assertWrite();
        this.center.x += dXOffset;
        this.center.y += dYOffset;
        this.center.z += dZOffset;
    };
    // 获取自定义对象的夹点
    public getGripPoints(): McGePoint3dArray {
        let ret = new McGePoint3dArray()
        ret.append(this.center);
        return ret;
    };
    // 绘制实体
    public worldDraw(draw: MxCADWorldDraw): void {

        const allEntityArr: McDbEntity[] = [];

        const circle = new McDbCircle(this.center.x, this.center.y, this.center.z, this._radius);
        draw.drawEntity(circle);
        const { minPt, maxPt, ret } = circle.getBoundingBox();
        if (!ret) return;
        const line1 = new McDbLine(minPt, maxPt);
        const line2 = new McDbLine(new McGePoint3d(minPt.x, maxPt.y, 0), new McGePoint3d(maxPt.x, minPt.y, 0));
        draw.drawEntity(line1);
        draw.drawEntity(line2);

        allEntityArr.push(circle)
        allEntityArr.push(line1)
        allEntityArr.push(line2);

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

    // 设置圆心
    public setCenter(pt: McGePoint3d) {
        this.assertWrite();
        this.center = pt.clone();
    }
    // 获取圆心
    public getCenter() {
        return this.center;
    }
    // 获取包围盒
    public getBoundingBox(): { minPt: McGePoint3d; maxPt: McGePoint3d; ret: boolean; } {
        return { minPt: this.minPt, maxPt: this.maxPt, ret: true }
    }
}

// 等分
async function Mx_Bisection() {
    // 设置模式
    const getPrefModel = new MxCADUiPrKeyWord();
    getPrefModel.setMessage("选择等分模式");
    getPrefModel.setKeyWords(`[定距等分(ME)/定数等分(DIV)/偏移等分(O)/复制等分(CO)]`);
    let model = await getPrefModel.go();
    if (!model) return;

    // 设置过滤器
    const filter = new MxCADResbuf();
    filter.AddMcDbEntityTypes('LINE');

    // 获取需要等分的线段
    const getEnt = new MxCADUiPrEntity();
    getEnt.setFilter(filter);
    if (model === "O") {
        getEnt.setMessage("请选择偏移等分对象");
    } else if (model === "CO") {
        getEnt.setMessage("请选择复制等分对象");
    } else {
        getEnt.setMessage("请选择需要等分的线段");
    }
    const entId = await getEnt.go();
    if (!entId.id) return;
    const line = entId.getMcDbEntity() as McDbLine;
    const length = line.getLength().val;

    const mxcad = MxCpp.getCurrentMxCAD();

    //根据不同模式等分线段
    if (model === "ME") {
        // 设置等分距离
        const getDist = new MxCADUiPrDist();
        getDist.setMessage("请设置等分距离");
        const val = await getDist.go();
        if (!val) return;
        const dist = getDist.value();

        // 根据距离确定等分点
        const num = length / dist;
        for (let i = 1; i < num; i++) {
            const point = line.getPointAtDist(i * dist).val;
            const dividept = new MxDbTestDivide();
            dividept.setCenter(point);
            mxcad.drawEntity(dividept);
        }
    } else if (model === "DIV") {
        // 设置等分的数量
        const getCount = new MxCADUiPrInt();
        getCount.setMessage("请设置等分的数量");
        const val = await getCount.go();
        if (!val) return;
        const count = getCount.value();

        // 根据等分数量获取等分距离并得到等分点
        const dist = length / count;
        for (let i = 1; i < count; i++) {
            const point = line.getPointAtDist(i * dist).val;
            const dividept = new MxDbTestDivide();
            dividept.setCenter(point);
            mxcad.drawEntity(dividept);
        }
    } else if (model === "O") {
        // 指定偏移距离
        const getDist = new MxCADUiPrDist();
        getDist.setMessage("请设置偏移距离");
        const val = await getDist.go();
        if (!val) return;
        const dist = getDist.value();

        let num = 1;
        while (true) {
            // 指定偏移点
            const getOffPoint = new MxCADUiPrPoint();
            getOffPoint.setMessage("请指定偏移点");
            getOffPoint.setUserDraw((pt, pw) => {
                line.offsetCurves(dist * num, pt).forEach(obj => {
                    pw.drawMcDbEntity(obj as McDbEntity);
                })
            })
            const offPoint = await getOffPoint.go();
            if (!offPoint) return;
            line.offsetCurves(dist * num, offPoint).forEach(obj => {
                mxcad.drawEntity(obj as McDbEntity);
                num++;
            })
        }
    } else if (model === "CO") {
        // 指定复制基点
        const getBasePt = new MxCADUiPrPoint();
        getBasePt.setMessage("请指定复制基点");
        const basePt = await getBasePt.go();
        if (!basePt) return;

        // 指定复制数量
        const getCount = new MxCADUiPrInt();
        getCount.setMessage("请指定复制等分数量");
        const val = await getCount.go();
        if (!val) return;
        const count = getCount.value();

        // 指定端点
        const getEndPt = new MxCADUiPrPoint();
        getEndPt.setMessage("请指定复制等分端点");
        // 动态绘制
        getEndPt.setUserDraw((pt, pw) => {
            const l = new McDbLine(basePt, pt);
            pw.drawMcDbEntity(l);
            const dist = l.getLength().val / count;
            for (let i = 1; i < count + 1; i++) {
                const ent = line.clone() as McDbLine;
                ent.move(basePt, l.getPointAtDist(dist * i).val);
                pw.drawMcDbEntity(ent)
            }
        })
        const endPt = await getEndPt.go();
        if (!endPt) return;

        // 根据端点与基点以及复制数量确定等分点
        const l = new McDbLine(basePt, endPt);
        const dist = l.getLength().val / count;
        for (let i = 1; i < count + 1; i++) {
            const ent = line.clone() as McDbLine;
            ent.move(basePt, l.getPointAtDist(dist * i).val);
            mxcad.drawEntity(ent)
        }
    }

}

// 矩形缩放
/**
 * 将选中的实体整合成块
 * 根据矩形的大小设置缩放因子
 */
async function Mx_RectangularScaling() {
    // 获取需要缩放的实体
    let ss = new MxCADSelectionSet();
    if (!await ss.userSelect("请选择需要矩形缩放的实体:")) return;
    if (ss.count() == 0) return;

    // 将目标实体整合成块对象
    let mxcad = MxCpp.getCurrentMxCAD();
    let blkTable = mxcad.getDatabase().getBlockTable();
    let blkRecId = blkTable.add(new McDbBlockTableRecord());//图块记录
    let blkTableRecord: McDbBlockTableRecord = blkRecId.getMcDbBlockTableRecord() as any;
    if (blkTableRecord == null) return;

    ss.forEach(id => {
        const ent = id.getMcDbEntity();
        if (!ent) return;
        const ent_clone = ent.clone() as McDbEntity;
        blkTableRecord.appendAcDbEntity(ent_clone);
    })

    let blkRef = new McDbBlockReference();
    blkRef.blockTableRecordId = blkRecId;
    // 通过计算实体包围盒设置块基点
    const { ret, maxPt, minPt } = blkRef.getBoundingBox();
    if (!ret) return;
    const line = new McDbLine(minPt, maxPt);
    const length = line.getLength().val;
    blkTableRecord.origin = line.getPointAtDist(length / 2).val;

    // 选择矩形的两个角点
    const getPt1 = new MxCADUiPrPoint();
    getPt1.setMessage("请指定矩形的角点1");
    const pt1 = await getPt1.go();
    if (!pt1) return;
    const getPt2 = new MxCADUiPrPoint();
    getPt2.setMessage("请指定矩形角点2");
    getPt2.setUserDraw((pt, pw) => {
        let pl = new McDbPolyline();
        pl.addVertexAt(pt1);
        pl.addVertexAt(new McGePoint3d(pt1.x, pt.y));
        pl.addVertexAt(pt);
        pl.addVertexAt(new McGePoint3d(pt.x, pt1.y));
        pl.isClosed = true;
        pw.drawMcDbEntity(pl);
    })
    const pt2 = await getPt2.go();
    if (!pt2) return;

    // 计算缩放因子
    const scaleX = Math.abs(pt1.x - pt2.x) / Math.abs(minPt.x - maxPt.x);
    const scaleY = Math.abs(pt1.y - pt2.y) / Math.abs(minPt.y - maxPt.y);
    blkRef.scaleFactors = new McGePoint3d(scaleX, scaleY, 0);
    const l = new McDbLine(pt1, pt2);
    blkRef.position = l.getPointAtDist(l.getLength().val / 2).val;
    mxcad.drawEntity(blkRef);
}

// 自定义局部放大类
class McDbTestEnlarge extends McDbCustomEntity {
    // 定义McDbTestReactArea内部的点对象 
    // 放大中心点
    private center: McGePoint3d = new McGePoint3d();
    // 放大范围
    private radius: number = 20;
    // 放大倍数
    private scale: number = 50;
    // 插入点
    private position: McGePoint3d = new McGePoint3d();
    /** 包围盒最大点 包围盒最小点 */
    private minPt: McGePoint3d = new McGePoint3d();
    private maxPt: McGePoint3d = new McGePoint3d();
    // 构造函数
    constructor(imp?: any) {
        super(imp);
    }
    // 创建函数
    public create(imp: any) {
        return new McDbTestEnlarge(imp)
    }
    // 获取类名
    public getTypeName(): string {
        return "McDbTestEnlarge";
    }
    //设置或获取放大中心点
    public set enlargeCenter(val: McGePoint3d) {
        this.center = val;
    }
    public get enlargeCenter(): McGePoint3d {
        return this.center;
    }
    //设置或获取放大范围
    public set enlargeRadius(val: number) {
        this.radius = val;
    }
    public get enlargeRadius(): number {
        return this.radius;
    }
    //设置或获取放大倍数
    public set enlargeScale(val: number) {
        this.scale = val;
    }
    public get enlargeScale(): number {
        return this.scale;
    }
    // 读取自定义实体数据pt1、pt2
    public dwgInFields(filter: IMcDbDwgFiler): boolean {
        this.center = filter.readPoint("center").val;
        this.position = filter.readPoint("position").val;
        this.radius = filter.readDouble("radius").val;
        this.scale = filter.readDouble("scale").val;
        this.minPt = filter.readPoint("minPt").val;
        this.maxPt = filter.readPoint("maxPt").val;
        return true;
    }
    // 写入自定义实体数据pt1、pt2
    public dwgOutFields(filter: IMcDbDwgFiler): boolean {
        filter.writePoint("center", this.center);
        filter.writePoint("position", this.position);
        filter.writeDouble("radius", this.radius);
        filter.writeDouble("scale", this.scale);
        filter.writePoint("minPt", this.minPt);
        filter.writePoint("maxPt", this.maxPt);
        return true;
    }

    // 移动自定义对象的夹点
    public moveGripPointsAt(iIndex: number, dXOffset: number, dYOffset: number, dZOffset: number) {
        this.assertWrite();
        if (iIndex == 0) {
            this.center.x += dXOffset;
            this.center.y += dYOffset;
            this.center.z += dZOffset;
        }
        else if (iIndex == 1) {
            this.position.x += dXOffset;
            this.position.y += dYOffset;
            this.position.z += dZOffset;
        }
    };
    // 获取自定义对象的夹点
    public getGripPoints(): McGePoint3dArray {
        let ret = new McGePoint3dArray()
        ret.append(this.center);
        ret.append(this.position);
        return ret;
    };
    // 绘制实体
    public worldDraw(draw: MxCADWorldDraw): void {
        const allEntityArr: McDbEntity[] = [];

        const circle = new McDbCircle();
        circle.center = this.center;
        circle.radius = this.radius;
        draw.drawEntity(circle);
        allEntityArr.push(circle)

        const { minPt, maxPt, ret } = circle.getBoundingBox();
        if (!ret) return;
        let ss = new MxCADSelectionSet();
        ss.crossingSelect(minPt.x, minPt.y, maxPt.x, maxPt.y)

        const mxcad = MxCpp.getCurrentMxCAD();
        let blkTable = mxcad.getDatabase().getBlockTable();
        let blkRec = new McDbBlockTableRecord();
        let blkRecId = blkTable.add(blkRec);
        let blkTableRecord: McDbBlockTableRecord = blkRecId.getMcDbBlockTableRecord() as any;
        if (blkTableRecord == null) return;

        ss.forEach((id) => {
            let ent = id.getMcDbEntity();
            if (!ent) return;
            let cent = ent.clone() as McDbEntity;
            blkTableRecord.appendAcDbEntity(cent);
        });
        // 设置图块的插入基点，在图形对象的中心位置。
        blkTableRecord.origin = new McGePoint3d(this.center.x, this.center.y, 0);
        let blkRef = new McDbBlockReference();
        blkRef.blockTableRecordId = blkRecId;
        blkRef.position = this.position;
        const blkRefId = mxcad.drawEntity(blkRef);
        blkRef = blkRefId.getMcDbEntity() as McDbBlockReference;

        // 设置一个圆做它的剪切边界.
        let samplePoints = circle.getSamplePoints(this.radius * 0.00001);
        let aryPoint = new McGePoint3dArray();
        samplePoints.forEach((val, _type, dxf) => {
            if (dxf === 1010) {
                const point = new McGePoint3d(val.x, val.y, val.z);
                aryPoint.append(point);
            }
        });
        blkRef.createSpatialFilter();
        blkRef.setScale(this.scale);
        let idSpatialFilter = blkRef.getSpatialFilterId();
        let blkFilter: McDbSpatialFilter = idSpatialFilter.getMcDbObject() as any;
        blkFilter.setBoundary(aryPoint);
        draw.drawEntity(blkRef);
        allEntityArr.push(blkRef)
        blkRefId.erase();

        const vec = this.position.sub(this.center).normalize();
        const pt1 = this.center.clone().addvec(vec.mult(this.radius));
        const pt2 = this.position.clone().subvec(vec.mult(this.scale));
        const line = new McDbLine(pt1, pt2);
        draw.drawEntity(line)
        allEntityArr.push(line)

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
// 局部放大功能
async function Mx_Enlarge() {

    const getPoint = new MxCADUiPrPoint();
    getPoint.setMessage("请选择放大中心点");
    const point = await getPoint.go();
    if (!point) return;

    // 设置放大范围
    const getDist = new MxCADUiPrDist();
    getDist.setMessage("请选择放大范围");
    getDist.setBasePt(point);
    getDist.setUserDraw((pt, pw) => {
        const radius = point.distanceTo(pt);
        const circle = new McDbCircle(point.x, point.y, point.z, radius);
        pw.drawMcDbEntity(circle);
    });
    const distVal = await getDist.go();
    if (!distVal) return;
    const dist = getDist.value();

    const mxcad = MxCpp.getCurrentMxCAD();
    const circle1 = new McDbCircle(point.x, point.y, point.z, dist);
    // 设置放大倍数
    const getAmplifyDist = new MxCADUiPrDist();
    getAmplifyDist.setMessage("请设置放大倍数");
    getAmplifyDist.setBasePt(point);
    getAmplifyDist.setUserDraw((pt, pw) => {
        const radius = point.distanceTo(pt);
        const circle = new McDbCircle(point.x, point.y, point.z, radius);
        pw.drawMcDbEntity(circle);
        pw.drawMcDbEntity(circle1);
    });
    const aDistVal = await getAmplifyDist.go();
    if (!aDistVal) return;
    const aDist = getAmplifyDist.value();

    // 设置放大插入点
    const getInsertPt = new MxCADUiPrPoint();
    getInsertPt.setMessage("请选择放大插入点");
    getInsertPt.setUserDraw((pt, pw) => {
        const circle = new McDbCircle(pt.x, pt.y, pt.z, aDist);
        pw.drawMcDbEntity(circle);
        pw.drawMcDbEntity(circle1);
    })
    const insertPt = await getInsertPt.go();
    if (!insertPt) return;

    const enlarge = new McDbTestEnlarge();
    enlarge.enlargeCenter = point;
    enlarge.enlargeRadius = dist;
    enlarge.enlargeScale = aDist / dist;
    enlarge.setPosition(insertPt);
    mxcad.drawEntity(enlarge)
}

// 打断
async function Mx_Interrupt() {
    // 选中需要打断的曲线
    const getCurve = new MxCADUiPrEntity();
    getCurve.setMessage("请选择一条需要打断的曲线");
    const filter = new MxCADResbuf([DxfCode.kEntityType, "LWPOLYLINE,LINE,ARC,CIRCLE,ELLIPSE"]);
    getCurve.setFilter(filter);
    const curveId = await getCurve.go();
    if (!curveId.id) return;
    const curve = curveId.getMcDbEntity() as McDbCurve;
    curve.highlight(true);

    // 选取曲线的打断点
    const getBreakPoint = new MxCADUiPrPoint();
    getBreakPoint.setMessage("请在曲线上选取打断点");
    const pointsArr: McGePoint3d[] = [];
    const radius = MxFun.screenCoordLong2Doc(5)
    while (true) {
        // 动态绘制打断点
        getBreakPoint.setUserDraw((pt, pw) => {
            if (pointsArr.length > 0) {
                pointsArr.forEach(pt => {
                    const circle = new McDbCircle();
                    circle.center = pt;
                    circle.radius = radius;
                    pw.drawMcDbEntity(circle)
                })
            };
            pw.drawCircle(new THREE.Vector3(pt.x, pt.y), radius)
        })
        const point = await getBreakPoint.go();
        if (!point) break;
        pointsArr.push(point);
    }

    // 打断曲线
    const mxcad = MxCpp.getCurrentMxCAD();
    if (pointsArr.length === 0) return;
    curve.splitCurves(pointsArr).forEach(obj => {
        mxcad.drawEntity(obj as McDbCurve)
    });
    curve.highlight(false);
    curveId.erase();
    mxcad.updateDisplay();
}

// 环形阵列
async function Mx_PolarArray() {
    // 获取阵列数量
    const getNumber = new MxCADUiPrInt();
    getNumber.setMessage(`请输入阵列数量<5>`);
    let num = await getNumber.go();
    if (!num) num = 5;

    // 获取是否旋转阵列图形
    const getIsRotate = new MxCADUiPrKeyWord();
    getIsRotate.setMessage(`是否开启旋转？<N>`)
    getIsRotate.setKeyWords(`[是(Y)/否(N)]`)
    let key = await getIsRotate.go();
    if (!key) key = "N";


    // 获取阵列图形
    const ss = new MxCADSelectionSet();
    if (!await ss.userSelect("请选择需要阵列的图形:")) return;
    if (ss.count() == 0) return;
    let _minPt: McGePoint3d | null = null;
    let _maxPt: McGePoint3d | null = null;
    // 获取阵列图形中心点
    ss.forEach(id => {
        const ent = id.getMcDbEntity();
        if (!ent) return;
        const { minPt, maxPt, ret } = ent.getBoundingBox();
        if (!_minPt) _minPt = minPt.clone();
        if (!_maxPt) _maxPt = maxPt.clone();
        console.log(_minPt, _maxPt);
        if (minPt.x < _minPt.x) _minPt.x = minPt.x;
        if (minPt.y < _minPt.y) _minPt.y = minPt.y;
        if (maxPt.x > _maxPt.x) _maxPt.x = maxPt.x;
        if (maxPt.y > _maxPt.y) _maxPt.y = maxPt.y;
    })
    if (!_minPt || !_maxPt) return;
    const line = new McDbLine(_minPt, _maxPt);
    const midPt = line.getPointAtDist(line.getLength().val / 2).val;
    const getCenter = new MxCADUiPrPoint();
    getCenter.setMessage("请选择阵列中心点");
    let entityArr: McDbEntity[] = [];
    getCenter.setUserDraw((pt, pw) => {
        entityArr.length = 0;
        const dist = pt.distanceTo(midPt);
        const circle = new McDbCircle(pt.x, pt.y, pt.z, dist);
        pw.drawMcDbEntity(circle);
        const length = circle.getLength().val;
        const baseLength = circle.getDistAtPoint(midPt).val;
        const intervalDist = length / num;
        for (let i = 1; i < num; i++) {
            let distance = i * intervalDist + baseLength;
            if (distance > length) distance = distance - length;
            const pt = circle.getPointAtDist(i * intervalDist + baseLength).val;
            const v = circle.getFirstDeriv(pt).val;
            const angle = v.angleTo2(McGeVector3d.kXAxis)
            ss.forEach(id => {
                const entity = id.getMcDbEntity();
                if (!entity) return;
                const clone = entity.clone() as McDbEntity;
                if (key === "Y") {
                    clone.rotate(midPt, angle);
                }
                clone.move(midPt, pt);
                pw.drawMcDbEntity(clone);
                entityArr.push(clone);
            })
        }
    })
    const center = await getCenter.go();
    if (!center) return;

    // 旋转阵列图形
    entityArr.forEach(entity => {
        MxCpp.getCurrentMxCAD().drawEntity(entity);
    })
}

// pl线中插入点并重新排序
function insertAndSort(arr: McGePoint3d[], elements: McGePoint3d[], pl: McDbPolyline): { array: McGePoint3d[] } {
    // 检查输入是否有效
    if (!Array.isArray(arr)) {
        throw new Error("第一个参数必须是数组");
    }
    if (!Array.isArray(elements) || elements.length !== 2) {
        throw new Error("第二个参数必须是一个包含两个元素的数组");
    }
    // 定义一个二分查找函数，用于找到插入位置
    function binarySearch(arr: McGePoint3d[], target: McGePoint3d) {
        let left = 0;
        let right = arr.length - 1;

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            const baseNum = pl.getDistAtPoint(arr[mid]).val;
            const num = pl.getDistAtPoint(target).val;
            if (baseNum < num) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return left; // 返回插入位置
    }
    // 遍历需要插入的元素
    for (const element of elements) {
        const index = binarySearch(arr, element); // 找到插入位置
        arr.splice(index, 0, element); // 在指定位置插入元素
    }
    arr = deduplicatePoints(arr);
    return {
        array: arr
    };
}
// 切割多边形
async function Mx_PolygonClipping() {
    const getBasePl = new MxCADUiPrEntity();
    getBasePl.setMessage('请选择一条PL线');
    const filter = new MxCADResbuf([DxfCode.kEntityType, "LWPOLYLINE"]);
    getBasePl.setFilter(filter);
    const entId = await getBasePl.go();
    if (!entId.id) return;
    const pl = entId.getMcDbEntity() as McDbPolyline;
    if (!pl.isClosed) return MxFun.acutPrintf("请选择闭合多边形！")
    const pointArr: McGePoint3d[] = [];
    const ptsNum = pl.numVerts();
    for (let i = 0; i < ptsNum; i++) {
        pointArr.push(pl.getPointAt(i).val)
    }

    const getPt1 = new MxCADUiPrPoint();
    getPt1.setMessage("请选择第一个点");
    const pt1 = await getPt1.go();
    if (!pt1) return;
    const linePt1 = pl.getClosestPointTo(pt1, false).val;

    const getPt2 = new MxCADUiPrPoint();
    getPt2.setMessage("请选择第二个点");
    getPt2.setUserDraw((pt, pw) => {
        pw.drawMcDbEntity(new McDbLine(pt1, pt))
    })
    const pt2 = await getPt2.go();
    if (!pt2) return;
    const linePt2 = pl.getClosestPointTo(pt2, false).val;

    const result = insertAndSort(pointArr, [linePt1, linePt2], pl);

    const indices: number[] = [];
    result.array.forEach((pt, index) => {
        if (pt.distanceTo(linePt1) < 0.0001) indices.push(index);
        if (pt.distanceTo(linePt2) < 0.0001) indices.push(index);
    })

    indices.sort((a, b) => a - b)
    // 切割指定范围内的元素
    const sliced = result.array.slice(indices[0], indices[1] + 1); // 包含 end 索引
    // 剩下的元素
    const remaining = result.array.slice(0, indices[0] + 1).concat(result.array.slice(indices[1]));
    drawNewPl([sliced, remaining]);
    entId.erase();
}
// 绘制闭合多段线
const drawNewPl = (plPointsArr: any[]) => {
    plPointsArr.forEach(arr => {
        const newPl = new McDbPolyline();
        arr.forEach((pt: McGePoint3d) => newPl.addVertexAt(pt));
        newPl.isClosed = true;
        MxCpp.getCurrentMxCAD().drawEntity(optimizePolyline(newPl));
    })
}

// 合并多边形
async function Mx_MergePolygons() {
    // 设置过滤器
    const filter = new MxCADResbuf([DxfCode.kEntityType, "LWPOLYLINE"]);
    // 选中两个闭合多边形
    const getPolygon = new MxCADUiPrEntity();
    getPolygon.setMessage("请选择第一个闭合多边形");
    const polygonId = await getPolygon.go();
    if (!polygonId.id) return;
    const polygon1 = polygonId.getMcDbEntity()?.clone() as McDbPolyline;

    getPolygon.setMessage("请选择第二个闭合多边形");
    const polygon2Id = await getPolygon.go();
    if (!polygon2Id.id) return;
    const polygon2 = polygon2Id.getMcDbEntity()?.clone() as McDbPolyline;

    if (!polygon1.isClosed || !polygon2.isClosed) return MxFun.acutPrintf("请选择两个闭合多边形");

    const mxcad = MxCpp.getCurrentMxCAD();
    const options = polygon1.IntersectWith(polygon2, McDb.Intersect.kOnBothOperands);
    if (options.length() < 2) return MxFun.acutPrintf("两个多边形没有重合边！");
    const pls = [polygon1, polygon2];
    // 将重合的点加入pl线中
    let newArr1: McGePoint3d[] = [];
    let newArr2: McGePoint3d[] = [];
    pls.forEach((pl, index) => {
        const points: { point: McGePoint3d, dist: number }[] = [];
        const num = pl.numVerts();
        for (let i = 0; i < num; i++) {
            const pt = pl.getPointAt(i).val;
            points.push({ point: pt, dist: pl.getDistAtPoint(pt).val });
        };
        const arr = insertIntoSortedArray(points, pl, options);
        index === 0 ? newArr1.push(...arr) : newArr2.push(...arr)
    });

    let allPoints: McGePoint3d[] = [];
    if (newArr1[0].distanceTo(newArr2[0]) < 0.00001) {
        allPoints.push(...newArr1, ...newArr2.reverse());
    } else {
        allPoints.push(...newArr1, ...newArr2);
    }
    allPoints = deduplicatePoints(allPoints);
    drawNewPl([allPoints]);
    polygonId.erase(); polygon2Id.erase();
    mxcad.updateDisplay();
};

// 点数组去重
export function deduplicatePoints(points: McGePoint3d[]): McGePoint3d[] {
    const allPoints: McGePoint3d[] = [];
    points.forEach((item, index) => {
        const res = points.filter((j, ind) => {
            return ind > index && item.distanceTo(j) < 0.00001
        });
        if (!res.length) allPoints.push(item)
    });
    return allPoints;
}

/**
 * 处理非连续数组，提取连续子序列并降序排列后合并
 * @param {number[]} arr - 原始数字数组
 * @returns {number[]} 处理后的数组
 */
function processNonContinuousArray(arr: Number[]) {
    // 辅助函数：判断数组是否是连续递增的
    function isContinuous(sortedArr: number[]) {
        for (let i = 1; i < sortedArr.length; i++) {
            if (sortedArr[i] - sortedArr[i - 1] !== 1) {
                return false;
            }
        }
        return true;
    }

    const sorted: any[] = [...new Set(arr)].sort((a, b) => (a as number) - (b as number)); // 去重 + 升序

    if (isContinuous(sorted)) {
        return sorted.reverse(); // 如果是连续的，整体降序返回
    }

    // 否则开始分组连续子序列
    const groups: number[][] = [];
    let currentGroup: number[] = [sorted[0]];

    for (let i = 1; i < sorted.length; i++) {
        if (sorted[i] - sorted[i - 1] === 1) {
            currentGroup.push(sorted[i]);
        } else {
            groups.push(currentGroup);
            currentGroup = [sorted[i]];
        }
    }
    if (currentGroup.length) groups.push(currentGroup);

    // 对每个子序列降序，并按起始值排序整个组
    groups.forEach(group => group.sort((a, b) => b - a));
    groups.sort((a, b) => a[a.length - 1] - b[b.length - 1]);

    // 合并所有组
    return groups.flat();
}
// 二分法插入数组
function insertIntoSortedArray(vertArr: { point: McGePoint3d, dist: number }[], pl: McDbPolyline, points: McGePoint3dArray): McGePoint3d[] {
    let plPoints: McGePoint3d[] = [];
    for (let i = 0; i < points.length(); i++) {
        plPoints.push(points.at(i));
    };
    // 将重合线上的点先去重
    plPoints = deduplicatePoints(plPoints);
    // 再将这些点push进原始pl线后再去重
    const newPlPoints = deduplicatePoints([...vertArr.map(item => item.point), ...plPoints]);
    newPlPoints.sort((a, b) => pl.getDistAtPoint(a).val - pl.getDistAtPoint(b).val);
    let indexArr: number[] = [];
    newPlPoints.forEach((item, index) => { if (plPoints.includes(item)) indexArr.push(index) });
    const insertPl = new McDbPolyline();
    indexArr = processNonContinuousArray(indexArr)
    for (let i = 0; i < indexArr.length; i++) {
        const pt = newPlPoints[indexArr[i]]
        insertPl.addVertexAt(pt);
    };
    // 筛选出不在重合线上的点
    const newVertArr = vertArr.filter(item => {
        const pt = insertPl.getClosestPointTo(item.point, false).val;
        return pt.distanceTo(item.point) > 0.00001;
    })
    const insertPts = [insertPl.getPointAt(0).val, insertPl.getPointAt(indexArr.length - 1).val]
    insertPts.forEach(pt => {
        const arr = newVertArr.map(item => item.dist);
        const num = pl.getDistAtPoint(pt).val;
        let left = 0;
        let right = arr.length - 1;
        // 二分查找找到插入位置
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (arr[mid] < num) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        };
        newVertArr.splice(left, 0, { point: pt, dist: num })
    });
    const reordered = reorderPointsWithWrapAround(newVertArr.map(item => item.point), insertPts[0], insertPts[1]);
    return reordered;
}

// 工具函数：查找最接近给定点的点索引
function findClosestPointIndex(points: McGePoint3d[], targetPoint: McGePoint3d): number {
    let closestIndex = 0;
    let minDistance = Infinity;
    for (let i = 0; i < points.length; i++) {
        const p = points[i];
        const dist = targetPoint.distanceTo(p);

        if (dist < minDistance) {
            minDistance = dist;
            closestIndex = i;
        }
    }
    return closestIndex;
}

// 主函数：按新起点和终点重排所有点
function reorderPointsWithWrapAround(points: McGePoint3d[], newStartPoint: McGePoint3d, newEndPoint: McGePoint3d): McGePoint3d[] {
    if (!Array.isArray(points) || points.length < 2) {
        throw new Error("至少需要两个点");
    }

    // 查找起点和终点在原路径中的索引
    const startIndex = findClosestPointIndex(points, newStartPoint);
    const endIndex = findClosestPointIndex(points, newEndPoint);
    const n = points.length;
    // 构建一个新的双倍长度的数组用于循环截取
    const doubledPoints = [...points, ...points];
    // 计算从 startIndex 开始，最多取 2n 个点中的一段
    const result: McGePoint3d[] = [];

    let i = startIndex;
    while (true) {
        result.push(doubledPoints[i]);

        if (i === endIndex) break;

        i = (i + 1) % n;
        if (i === startIndex) break; // 防止无限循环
    }
    return result;
}

// 优化多段线顶点
function optimizePolyline(pl: McDbPolyline): McDbPolyline {
    const num = pl.numVerts();
    const points: McGePoint3d[] = [];
    for (let i = 0; i < num; i++) {
        const pt = pl.getPointAt(i).val;
        points.push(pt);
    }
    const ptsArr = [...points];
    ptsArr.push(pl.getPointAt(0).val);
    const indexArr: number[] = [];
    let vec: McGeVector3d | null = null;
    ptsArr.forEach((pt, index) => {
        let v = new McGeVector3d();
        if (index < ptsArr.length - 1) {
            v = ptsArr[index + 1].sub(pt);
        } else {
            v = ptsArr[1].sub(pt);
        }
        if (vec) {
            const a1 = vec.angleTo2(McGeVector3d.kXAxis);
            const a2 = v.angleTo2(McGeVector3d.kXAxis);
            if (Math.abs(a1 - a2) < 0.0001) indexArr.push(index);
        }
        vec = v.clone();

    });
    const i = indexArr.findIndex(val => val === ptsArr.length - 1);
    if (i > 0) indexArr[i] = 0;
    const _points = indexArr.length > 0 ? points.filter((pt, index) => !indexArr.includes(index)) : points;
    const _pl = new McDbPolyline();
    _points.forEach(pt => {
        _pl.addVertexAt(pt);
    });
    _pl.isClosed = true;
    return _pl;
}

// 获取多边形需要添加顶点的边
function findLine(pl: McDbPolyline, dist: number) {
    const arr: number[] = [];
    for (let i = 0; i < pl.numVerts(); i++) {
        const dist = pl.getDistAtPoint(pl.getPointAt(i).val).val;
        arr.push(dist);
    }
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] === dist) {
            left = mid + 1;
        } else if (arr[mid] < dist) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    arr.splice(left, 0, dist);
    return { index: left, newArray: arr };
}
// 为多边形添加顶点
async function Mx_AddVertex() {
    const mxcad = MxCpp.getCurrentMxCAD();
    const filter = new MxCADResbuf([DxfCode.kEntityType, 'LWPOLYLINE']);
    const getPl = new MxCADUiPrEntity();
    getPl.setMessage("请选择目标多边形");
    getPl.setFilter(filter);
    const entId = await getPl.go();
    if (!entId) return;
    const pl = entId.getMcDbEntity() as McDbPolyline;

    // 选中多边形需要添加顶点的边
    const getClosePt = new MxCADUiPrPoint();
    getClosePt.setMessage("请选择多边形需要添加顶点的边");
    const closePt = await getClosePt.go();
    if (!closePt) return;
    const point = pl.getClosestPointTo(closePt, false);
    if (!point.ret) return;
    const dist = pl.getDistAtPoint(point.val).val;
    const { index } = findLine(pl, dist);
    const { val2: startwidth } = pl.getWidthsAt(index);
    const { val1: endwidth } = pl.getWidthsAt(index + 1 === pl.numVerts() ? 0 : index + 1);

    // 设置添加的顶点位置
    const getAddPt = new MxCADUiPrPoint();
    getAddPt.setMessage("请设置添加的顶点位置");
    getAddPt.setUserDraw((pt, pw) => {
        const _pl = pl.clone() as McDbPolyline;
        _pl.addVertexAt(pt, 0, startwidth, endwidth, index);
        pw.drawMcDbEntity(_pl);
    })
    const addPt = await getAddPt.go();
    if (!addPt) return;
    pl.addVertexAt(addPt, 0, startwidth, endwidth, index);
    mxcad.updateDisplay();
}

// 删除多边形顶点
async function Mx_DeleteVertex() {
    const mxcad = MxCpp.getCurrentMxCAD();
    const filter = new MxCADResbuf([DxfCode.kEntityType, 'LWPOLYLINE']);
    const getPl = new MxCADUiPrEntity();
    getPl.setMessage("请选择目标多边形");
    getPl.setFilter(filter);
    const entId = await getPl.go();
    if (!entId) return;
    const pl = entId.getMcDbEntity() as McDbPolyline;

    // 选中多边形需要删除的顶点
    const getDeletePt = new MxCADUiPrPoint();
    getDeletePt.setMessage("请选择多边形需要删除的顶点");
    const deletePt = await getDeletePt.go();
    if (!deletePt) return;
    const point = pl.getClosestPointTo(deletePt, false);
    if (!point.ret) return;
    // 获取到离point最近的顶点；
    const num = pl.numVerts();
    const arr: { index: number, dist: number }[] = []
    for (let i = 0; i < num; i++) {
        const dist = point.val.distanceTo(pl.getPointAt(i).val);
        arr.push({ index: i, dist })
    };
    // 根据距离排序找到最近的顶点
    arr.sort((a, b) => a.dist - b.dist);
    const index = arr[0].index;
    pl.removeVertexAt(index);
    mxcad.updateDisplay();
}

// 拉伸多边形单边
async function Mx_StretchPolygon() {
    const mxcad = MxCpp.getCurrentMxCAD();
    const filter = new MxCADResbuf([DxfCode.kEntityType, 'LWPOLYLINE']);
    const getPl = new MxCADUiPrEntity();
    getPl.setMessage("请选择目标多边形");
    getPl.setFilter(filter);
    const entId = await getPl.go();
    if (!entId) return;
    const pl = entId.getMcDbEntity() as McDbPolyline;

    // 选中多边形需要拉伸的边
    const getClosePt = new MxCADUiPrPoint();
    getClosePt.setMessage("请选择多边形需要拉伸的边");
    const closePt = await getClosePt.go();
    if (!closePt) return;
    const point = pl.getClosestPointTo(closePt, false);
    if (!point.ret) return;
    const dist = pl.getDistAtPoint(point.val).val;
    let { index } = findLine(pl, dist);
    if (index === pl.numVerts()) index = 0;
    const _index = index - 1 < 0 ? pl.numVerts() - 1 : index - 1;
    const pt1 = pl.getPointAt(index).val;
    const pt2 = pl.getPointAt(_index).val;
    const midPt = pt1.clone().addvec(pt2.sub(pt1).mult(1 / 2));

    // 指定目标边拉伸位置
    const getPoint = new MxCADUiPrPoint();
    getPoint.setMessage("请指定拉伸位置");
    getPoint.setUserDraw((pt, pw) => {
        const _pl = pl.clone() as McDbPolyline;
        const v = pt.sub(midPt);
        _pl.setPointAt(index, pt1.clone().addvec(v));
        _pl.setPointAt(_index, pt2.clone().addvec(v));
        pw.drawMcDbEntity(_pl)
    })
    const pos = await getPoint.go();
    if (!pos) return;
    const v = pos.sub(midPt);
    pl.setPointAt(index, pt1.clone().addvec(v));
    pl.setPointAt(_index, pt2.clone().addvec(v));
    mxcad.updateDisplay();
}
// 选点填充
async function MxTest_DrawHatchFormPoint() {
    const getPoint = new MxCADUiPrPoint();
    getPoint.setMessage("指定填充区域内部一点:");
    getPoint.disableAllTrace(true);
    getPoint.setDisableOsnap(true);
    let pt = (await getPoint.go()) as McGePoint3d;
    if (!pt) return;

    let hatch = MxCADUtility.builderHatchFromPoint(pt);
    if (!hatch) {
        MxFun.acutPrintf("没有找到闭合区域 ")
        return;
    }

    let mxcad = MxCpp.getCurrentMxCAD();
    mxcad.drawEntity(hatch);
}
// 打碎对象
async function MxTest_Explode() {
    let mxcad = MxCpp.getCurrentMxCAD();
    let retIds = await MxCADUtility.selectEnt("xxxx");
    if (retIds.length == 0) {
        return;
    }
    let id = retIds[0];
    let ent = id.getMcDbEntity();
    if (ent) {
        let retExplode: MxCADResbuf = ent.explode();
        if (retExplode.GetCount() == 0) return;
        let iExplodeConut = retExplode.GetCount();
        for (let j = 0; j < iExplodeConut; j++) {
            let tmpobj = retExplode.AtObject(j).val;
            if (tmpobj instanceof McDbEntity) {
                mxcad.drawEntity(tmpobj);
            }
        }

        ent.erase();
    }
}

async function Mx_Test_CreateGroup() {

    let ss = new MxCADSelectionSet();
    if (!await ss.userSelect("选择要做成组的对象:")) return;
    if (ss.count() == 0) return;
    let mxcad = MxCpp.getCurrentMxCAD();
    mxcad.getDatabase().CreateGroup(ss.getIds());
}

async function Mx_Test_OffsetIn_DrawLine() {
    const getPoint = new MxCADUiPrPoint();
    getPoint.setMessage("指定一点:");
    getPoint.setOffsetInputPostion(true);
    let pt1 = (await getPoint.go());
    if (!pt1) return;

    getPoint.setBasePt(pt1);
    getPoint.setUseBasePt(true);

    getPoint.setMessage("指定二点:");
    let pt2 = (await getPoint.go());
    if (!pt2) return;

    MxCpp.getCurrentMxCAD().drawLine(pt1.x, pt1.y, pt2.x, pt2.y);
}

async function Mx_Test_SetCurrentlyDraw() {
    let mxcad = MxCpp.getCurrentMxCAD();
    let database = mxcad.getDatabase();

    // 设置当前使用的颜色
    database.setCurrentlyTrueColor(new McCmColor(255, 100, 0));

    // 设置当前使用的线重
    database.setCurrentlyLineWeight(McDb.LineWeight.kLnWt030);

    // 设置显示线重
    mxcad.showLineWeight(true);
}

export function init() {
    new McDbTestEnlarge().rxInit();
    new MxDbTestDivide().rxInit();

    MxFun.addCommand("Mx_Multicopy", Mx_Multicopy);
    MxFun.addCommand("Mx_ArcToCircle", Mx_ArcToCircle);
    MxFun.addCommand("Mx_CopyRotation", Mx_CopyRotation);
    MxFun.addCommand("Mx_CricleTotoll", Mx_CricleTotoll);
    MxFun.addCommand("Mx_ChangeColor", Mx_ChangeColor);
    MxFun.addCommand("Mx_ArcToAngle", Mx_ArcToAngle);
    MxFun.addCommand("Mx_TemHiding", Mx_TemHiding);
    MxFun.addCommand("Mx_BoxDel", Mx_BoxDel);
    MxFun.addCommand("Mx_AngleCopy", Mx_AngleCopy);
    MxFun.addCommand("Mx_VertexRep", Mx_VertexRep);
    MxFun.addCommand("Mx_IntersectBreak", Mx_IntersectBreak);
    MxFun.addCommand("Mx_DoubleOff", Mx_DoubleOff);
    MxFun.addCommand("Mx_Telescoping", Mx_Telescoping);
    MxFun.addCommand("Mx_EitCircle", Mx_EitCircle);
    MxFun.addCommand("Mx_LayerTypeScale", Mx_LayerTypeScale);
    MxFun.addCommand("Mx_ArcOrder", Mx_ArcOrder);
    MxFun.addCommand("Mx_PlRoundCorners", Mx_PlRoundCorners);
    MxFun.addCommand("Mx_PlReverse", Mx_PlReverse);
    MxFun.addCommand("Mx_TestGetAllLineByLayer", Mx_TestGetAllLineByLayer);
    MxFun.addCommand("Mx_Bisection", Mx_Bisection);
    MxFun.addCommand("Mx_RectangularScaling", Mx_RectangularScaling);
    MxFun.addCommand("Mx_Enlarge", Mx_Enlarge);
    MxFun.addCommand("Mx_Interrupt", Mx_Interrupt);
    MxFun.addCommand("Mx_PolarArray", Mx_PolarArray);
    MxFun.addCommand("Mx_PolygonClipping", Mx_PolygonClipping);
    MxFun.addCommand("Mx_MergePolygons", Mx_MergePolygons);
    MxFun.addCommand("Mx_AddVertex", Mx_AddVertex);
    MxFun.addCommand("Mx_DeleteVertex", Mx_DeleteVertex);
    MxFun.addCommand("Mx_StretchPolygon", Mx_StretchPolygon);
    MxFun.addCommand("Mx_InheritanceFill", Mx_InheritanceFill);
    MxFun.addCommand("MxTest_DrawHatchFormPoint", MxTest_DrawHatchFormPoint);
    MxFun.addCommand("MxTest_ModifyPatternScale", MxTest_ModifyPatternScale);
    MxFun.addCommand("MxTest_Explode", MxTest_Explode);
    MxFun.addCommand("Mx_Test_CreateGroup", Mx_Test_CreateGroup);
    MxFun.addCommand("Mx_Test_OffsetIn_DrawLine", Mx_Test_OffsetIn_DrawLine);
    MxFun.addCommand("Mx_Test_SetCurrentlyDraw", Mx_Test_SetCurrentlyDraw);
}
