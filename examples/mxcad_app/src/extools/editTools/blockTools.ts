///////////////////////////////////////////////////////////////////////////////
//版权所有（C）2002-2022，成都梦想凯德科技有限公司。
//本软件代码及其文档和相关资料归成都梦想凯德科技有限公司,应用包含本软件的程序必须包括以下版权声明
//此应用程序应与成都梦想凯德科技有限公司达成协议，使用本软件、其文档或相关材料
//https://www.mxdraw.com/
///////////////////////////////////////////////////////////////////////////////

import { MxFun, DetailedResult } from "mxdraw";
import {
    MxCADUiPrInt, MxCADUiPrEntity, McDbLine, McGeVector3d, MxCpp, MxCADResbuf, MxCADUiPrString,
    MxCADUiPrKeyWord, MxCADUiPrPoint, McDbPolyline, MxCADUiPrDist, McGeMatrix3d,
    MxCADSelectionSet, McDbBlockReference, McDbBlockTableRecord, McCmColor, ColorIndexType,
    McDbEntity,
    McGePoint3d,
    McDbCircle,
    McDbSpatialFilter,
    McGePoint3dArray,
} from "mxcad";
import { MxDrawTable } from "../pluginDemo/drawTable";

// 改块名
async function Mx_ChangeBN() {
    // 选择目标块
    let filter = new MxCADResbuf();
    filter.AddMcDbEntityTypes("INSERT");
    const getBlockObj = new MxCADUiPrEntity();
    getBlockObj.setMessage("请选择目标块对象");
    getBlockObj.setFilter(filter);
    const blockObj_id = await getBlockObj.go();
    if (!blockObj_id.id) return;

    // 修改块名
    const getBlockName = new MxCADUiPrString();
    getBlockName.setMessage("请输入新块名");
    const blockName = await getBlockName.go();
    if (!blockName) return;

    const blkRec = (blockObj_id.getMcDbEntity() as McDbBlockReference).blockTableRecordId.getMcDbBlockTableRecord();
    if (!blkRec) return;
    console.log('原块名', blkRec.name);
    blkRec.name = blockName;
    console.log('新块名', blkRec.name);
}

// 改块基点
async function Mx_BlkPt() {
    // 选择目标块
    let filter = new MxCADResbuf();
    filter.AddMcDbEntityTypes("INSERT");
    const getBlockEvent = new MxCADUiPrEntity()
    getBlockEvent.setMessage("选择需要修改基点的块");
    getBlockEvent.setFilter(filter);
    const block_id = await getBlockEvent.go();
    if (!block_id.id) return;
    // 块实体
    const blkRef = block_id.getMcDbEntity() as McDbBlockReference;
    // 获取基点
    const getPoint = new MxCADUiPrPoint();
    const mxcad = MxCpp.getCurrentMxCAD();
    getPoint.setMessage("设置基点");
    const pt = await getPoint.go();
    if (!pt) return;
    // 图形记录对象
    let blkTableRecord: McDbBlockTableRecord = blkRef.blockTableRecordId.getMcDbBlockTableRecord() as McDbBlockTableRecord;

    let ptOrigin = blkTableRecord.origin.clone();

    let mat = blkRef.blockTransform;
    ptOrigin.transformBy(mat);

    const vec = pt.sub(ptOrigin);
    mat.invert();
    pt.transformBy(mat);

    blkTableRecord.origin = pt;
    blkRef.position = blkRef.position.addvec(vec);
    mxcad.updateDisplay()
}

function Mx_ModyfBlockRecordEntityColor(blkRec: McDbBlockTableRecord | null) {
    if (!blkRec) return;
    blkRec.getAllEntityId().forEach(id => {
        let ent = id.getMcDbEntity();
        if (ent) {
            ent.colorIndex = ColorIndexType.kByblock;
            if (ent instanceof McDbBlockReference) {
                let blkref = ent as McDbBlockReference;
                Mx_ModyfBlockRecordEntityColor(blkref.blockTableRecordId.getMcDbBlockTableRecord());
            }
        }
    })
}

// 改块颜色
async function Mx_BlkColor() {
    // 选择目标块
    let filter = new MxCADResbuf();
    filter.AddMcDbEntityTypes("INSERT");
    const getBlockEvent = new MxCADUiPrEntity()
    getBlockEvent.setMessage("选择需要修改颜色的块");
    getBlockEvent.setFilter(filter);
    const block_id = await getBlockEvent.go();
    if (!block_id.id) return;
    // 块实体
    const blkRef = block_id.getMcDbEntity() as McDbBlockReference;
    let blkRec = blkRef.blockTableRecordId.getMcDbBlockTableRecord();
    if (!blkRec) return;
    Mx_ModyfBlockRecordEntityColor(blkRec);

    // 设置块颜色
    const getColor = new MxCADUiPrInt();
    getColor.setMessage("输入颜色索引(0~256)");
    let colorNum = await getColor.go() || 0;
    let color = new McCmColor();
    color.setColorIndex(colorNum);
    blkRef.trueColor = color;
    const mxcad = MxCpp.getCurrentMxCAD();
    mxcad.updateDisplay()
}

// 刷块
async function Mx_BushBlk() {
    // 选择目标块
    let filter = new MxCADResbuf();
    filter.AddMcDbEntityTypes("INSERT");
    const getBlockEvent = new MxCADUiPrEntity()
    getBlockEvent.setMessage("请选择源块");
    getBlockEvent.setFilter(filter);
    const block_id = await getBlockEvent.go();
    if (!block_id.id) return;
    // 块实体
    const blkRef = block_id.getMcDbEntity() as McDbBlockReference;

    // 选择要刷的块
    let ss = new MxCADSelectionSet();
    if (!await ss.userSelect("选择要刷的目标块:", filter)) return;
    if (ss.count() == 0) return;

    ss.forEach(id => {
        const event = id.getMcDbEntity() as McDbBlockReference;
        const clone = blkRef.clone() as McDbBlockReference;
        clone.position = event.position;
        id.erase();
        MxCpp.getCurrentMxCAD().drawEntity(clone);
    })
}

// 块连线
async function Mx_ConBlk() {
    // 选择连接方式
    const getType = new MxCADUiPrKeyWord();
    getType.setMessage("选择连接方式");
    getType.setKeyWords(`[${"手动逐个连线')}(H)/${t('自动批量连线"}(A)]`)
    const type = await getType.go();
    if (!type) return;

    const mxcad = MxCpp.getCurrentMxCAD();
    let filter = new MxCADResbuf();
    filter.AddMcDbEntityTypes("INSERT");
    if (type === 'A') {
        // 选择要连接的块
        let ss = new MxCADSelectionSet();
        if (!await ss.userSelect("选择要刷的目标块:", filter)) return;
        if (ss.count() == 0) return;
        const pl = new McDbPolyline();
        ss.forEach(id => {
            const blkRef = id.getMcDbEntity() as McDbBlockReference;
            pl.addVertexAt(blkRef.position)
        });
        mxcad.drawEntity(pl)
    } else if (type === 'H') {
        const pl = new McDbPolyline();
        // 手动逐个连线
        while (true) {
            const getBlockEvent = new MxCADUiPrEntity()
            getBlockEvent.setMessage("请选择连线的块");
            getBlockEvent.setFilter(filter);
            getBlockEvent.setUserDraw((pt, pw) => {
                const _clone = pl.clone() as McDbPolyline;
                _clone.addVertexAt(pt);
                pw.drawMcDbEntity(_clone)
            })
            const block_id = await getBlockEvent.go();
            if (!block_id.id) break;
            const blkRef = block_id.getMcDbEntity() as McDbBlockReference;
            pl.addVertexAt(blkRef.position);
        }
        mxcad.drawEntity(pl);
    }


}

// 多块旋转
async function Mx_BlkRotate() {
    // 选择目标块
    let filter = new MxCADResbuf();
    filter.AddMcDbEntityTypes("INSERT");
    let ss = new MxCADSelectionSet();
    if (!await ss.userSelect("选择要旋转的目标块:", filter)) return;
    if (ss.count() == 0) return;

    const baseEnt = ss.item(0).getMcDbEntity() as McDbBlockReference
    // 设置旋转角度
    const getAngle = new MxCADUiPrDist();
    getAngle.setMessage("设置旋转角度");
    getAngle.setBasePt(baseEnt.position);
    let angle: number = 0;
    getAngle.setUserDraw((pt, pw) => {
        angle = pt.sub(baseEnt.position).angleTo2(McGeVector3d.kXAxis, McGeVector3d.kNegateZAxis);
        ss.forEach(id => {
            const blkRef = id.getMcDbEntity();
            if (blkRef) {
                const _clone = blkRef.clone() as McDbBlockReference;
                _clone.rotate(_clone.position, angle);
                pw.drawMcDbEntity(_clone)
            }

        })
    })
    const val = await getAngle.go();
    if (!val) return;
    if (getAngle.getDetailedResult() === DetailedResult.kCoordIn) {
        angle = val * Math.PI / 180
    }
    // 旋转块
    ss.forEach(id => {
        const blkRef = id.getMcDbEntity() as McDbBlockReference;
        blkRef.rotate(blkRef.position, angle);
    })
    const mxcad = MxCpp.getCurrentMxCAD();
    mxcad.updateDisplay()
}

// 多块缩放
async function Mx_BlkScale() {
    // 选择目标块
    let filter = new MxCADResbuf();
    filter.AddMcDbEntityTypes("INSERT");
    let ss = new MxCADSelectionSet();
    if (!await ss.userSelect("选择要旋转的目标块:", filter)) return;
    if (ss.count() == 0) return;

    // 设置缩放比例
    const getScale = new MxCADUiPrDist();
    getScale.setMessage("请设置缩放比例");
    let baseEvn = ss.item(0).getMcDbEntity() as McDbBlockReference;
    getScale.setBasePt(baseEvn.position);
    getScale.setUserDraw((pt, pw) => {
        const scale = pt.distanceTo(baseEvn.position);
        ss.forEach(id => {
            const blkRef = id.getMcDbEntity();
            if (blkRef) {
                const _clone = blkRef.clone() as McDbBlockReference;
                let mat = new McGeMatrix3d();
                mat.setToScaling(scale, _clone.position);
                _clone.transformBy(mat);
                pw.drawMcDbEntity(_clone);
            }
        })
    })
    const val = await getScale.go();
    if (!val) return;
    const scale = getScale.value() || 1;

    // 缩放块
    ss.forEach(id => {
        const blkRef = id.getMcDbEntity() as McDbBlockReference;
        let mat = new McGeMatrix3d();
        mat.setToScaling(scale, blkRef.position);
        blkRef.transformBy(mat);
    })
    const mxcad = MxCpp.getCurrentMxCAD();
    mxcad.updateDisplay()
}

// 刷块角度
async function Mx_BlkAngle() {
    // 选择目标块
    let filter = new MxCADResbuf();
    filter.AddMcDbEntityTypes("INSERT");
    const getBlockEvent = new MxCADUiPrEntity()
    getBlockEvent.setMessage("请选择源块");
    getBlockEvent.setFilter(filter);
    const block_id = await getBlockEvent.go();
    if (!block_id.id) return;
    // 块实体
    const blkRef = block_id.getMcDbEntity() as McDbBlockReference;
    const angle = blkRef.rotation;

    // 选择要刷的块
    let ss = new MxCADSelectionSet();
    if (!await ss.userSelect("选择要刷的目标块:", filter)) return;
    if (ss.count() == 0) return;

    ss.forEach(id => {
        const ent = id.getMcDbEntity() as McDbBlockReference;
        ent.rotation = angle;
    });
    const mxcad = MxCpp.getCurrentMxCAD();
    mxcad.updateDisplay();
}

// 按块选择
async function Mx_BlkSelect() {
    // 选择目标块
    let filter = new MxCADResbuf();
    filter.AddMcDbEntityTypes("INSERT");
    const getBlockEvent = new MxCADUiPrEntity()
    getBlockEvent.setMessage("请选择源块");
    getBlockEvent.setFilter(filter);
    const block_id = await getBlockEvent.go();
    if (!block_id.id) return;
    // 块实体
    const blkRef = block_id.getMcDbEntity() as McDbBlockReference;
    const blkName = blkRef.blockName;

    // 选择范围
    let ss = new MxCADSelectionSet();
    if (!await ss.userSelect("请设置选择范围:", filter)) return;
    if (ss.count() == 0) return;

    ss.forEach(id => {
        const ent = id.getMcDbEntity() as McDbBlockReference;
        const entName = ent.blockName;
        if (entName == blkName) {
            MxCpp.getCurrentMxCAD().addCurrentSelect(id)
        }
    })
}

// 按块全选
async function Mx_BlkAllSelect() {
    // 选择目标块
    let filter = new MxCADResbuf();
    filter.AddMcDbEntityTypes("INSERT");
    const getBlockEvent = new MxCADUiPrEntity()
    getBlockEvent.setMessage("请选择目标块");
    getBlockEvent.setFilter(filter);
    const block_id = await getBlockEvent.go();
    if (!block_id.id) return;
    // 块实体
    const blkRef = block_id.getMcDbEntity() as McDbBlockReference;
    const blkName = blkRef.blockName;

    // 全局选择目标块
    let ss = new MxCADSelectionSet();
    ss.allSelect(filter);
    if (ss.count() == 0) return;
    ss.forEach(id => {
        const ent = id.getMcDbEntity() as McDbBlockReference;
        const entName = ent.blockName;
        if (entName == blkName) {
            MxCpp.getCurrentMxCAD().addCurrentSelect(id)
        }
    })
}

// 统计单块
async function Mx_SSBlk() {
    // 设置过滤器
    const filter = new MxCADResbuf();
    filter.AddMcDbEntityTypes("INSERT");

    const getEntity = new MxCADUiPrEntity();
    getEntity.setMessage("请选择目标块");
    getEntity.setFilter(filter);
    const blk_id = await getEntity.go();
    if (!blk_id.id) return;
    const blkRef = blk_id.getMcDbEntity() as McDbBlockReference;
    const blkName = blkRef.blockName;
    // 设置统计范围
    const ss = new MxCADSelectionSet();
    if (!await ss.userSelect("请设置统计范围", filter)) return;
    if (ss.count() == 0) return;

    let num: number = 0;
    ss.forEach(id => {
        const ent = id.getMcDbEntity() as McDbBlockReference;
        const entName = ent.blockName;
        if (entName == blkName) {
            num += 1;
        }
    })

    console.log(`找到块${blkName}：共${num}个`)
}

// 统计多块
async function Mx_SMBlk() {
    // 设置过滤器
    const filter = new MxCADResbuf();
    filter.AddMcDbEntityTypes("INSERT");
    // 设置统计范围
    const ss = new MxCADSelectionSet();
    if (!await ss.userSelect("请设置统计范围", filter)) return;
    if (ss.count() == 0) return;

    let blkName_arr: string[] = [];
    ss.forEach(id => {
        const ent = id.getMcDbEntity() as McDbBlockReference;
        const blkName = ent.blockName;
        blkName_arr.push(blkName);
    });
    let sticBlkArr: { blkName: string, num: number }[] = [];
    Array.from(new Set(blkName_arr)).forEach(name => {
        const num = blkName_arr.filter(blkName => blkName === name).length;
        sticBlkArr.push({ blkName: name, num })
    })
    let draw = new MxDrawTable();
    draw.data.addColumn("名称", 100);
    draw.data.addColumn("数量", 30);
    sticBlkArr.forEach(item => {
        draw.data.addRow([item.blkName, item.num.toString()])
    })

    let getPoint = new MxCADUiPrPoint();
    getPoint.setMessage("指定表格插入点:");
    let pt = await getPoint.go();
    if (!pt) return;

    let lScale = MxFun.screenCoordLong2Doc(100) / 200;
    draw.draw(pt, lScale);
}

// 修改块图层
async function Mx_BlkLayer() {
    // 设置过滤器
    const filter = new MxCADResbuf();
    filter.AddMcDbEntityTypes("INSERT");

    const getEntity = new MxCADUiPrEntity();
    getEntity.setMessage("请选择目标块");
    getEntity.setFilter(filter);
    const blk_id = await getEntity.go();
    if (!blk_id.id) return;
    const blkRef = blk_id.getMcDbEntity() as McDbBlockReference;
    const mxcad = MxCpp.getCurrentMxCAD();

    const layerId = mxcad.addLayer("测试图层")
    blkRef.layerId = layerId;
    console.log(blkRef.layer);
    mxcad.updateDisplay();
}
// 创建块
async function MxTest_SelectEntitysToBlock() {
    let ss = new MxCADSelectionSet();
    if (!await ss.userSelect("选择要做成块的对象:")) return;
    if (ss.count() == 0) return;

    let mxcad = MxCpp.getCurrentMxCAD();
    let blkTable = mxcad.getDatabase().getBlockTable();
    let blkRecId = blkTable.add(new McDbBlockTableRecord());
    let blkTableRecord: McDbBlockTableRecord = blkRecId.getMcDbBlockTableRecord() as any;
    if (blkTableRecord == null) return;

    let pt1x: any, pt1y: any, pt2x: any, pt2y: any;
    ss.forEach((id) => {
        let ent = id.getMcDbEntity();
        if (!ent) return;

        let cent = ent.clone() as McDbEntity;
        blkTableRecord.appendAcDbEntity(cent);

        let entBox = ent.getBoundingBox();
        if (entBox.ret) {
            if (!pt1x) {
                pt1x = entBox.minPt.x;
                pt1y = entBox.minPt.y;
                pt2x = entBox.maxPt.x;
                pt2y = entBox.maxPt.y;
            }
            else {
                if (pt1x > entBox.minPt.x) pt1x = entBox.minPt.x;
                if (pt1y > entBox.minPt.y) pt1y = entBox.minPt.y;
                if (pt2x < entBox.maxPt.x) pt2x = entBox.maxPt.x;
                if (pt2y < entBox.maxPt.y) pt2y = entBox.maxPt.y;
            }
        }
    })
    if (pt1x === undefined) {
        return;
    }
    let insertPtx = pt1x + (pt2x - pt1x) * 0.5;
    let insertPty = pt1y + (pt2y - pt1y) * 0.5;
    // 设置图块的插入基点，在图形对象的中心位置。
    blkTableRecord.origin = new McGePoint3d(insertPtx, insertPty, 0);


    let blkRef = new McDbBlockReference();
    blkRef.blockTableRecordId = blkRecId;
    blkRef.position = new McGePoint3d(insertPtx, insertPty, 0);

    blkRef = mxcad.drawEntity(blkRef).getMcDbEntity() as McDbBlockReference;

    ss.forEach((id) => {
        let ent = id.getMcDbEntity();
        if (!ent) return;
        ent.erase();
    });
}

// 创建边缘裁剪块
async function MxTest_SelectEntitysToSpatialFilterBlock() {
    let ss = new MxCADSelectionSet();
    if (!await ss.userSelect("选择要做成块的对象:")) return;
    if (ss.count() == 0) return;

    let mxcad = MxCpp.getCurrentMxCAD();
    let blkTable = mxcad.getDatabase().getBlockTable();
    let blkRec = new McDbBlockTableRecord();
    let blkRecId = blkTable.add(blkRec);
    let blkTableRecord: McDbBlockTableRecord = blkRecId.getMcDbBlockTableRecord() as any;
    if (blkTableRecord == null) return;

    let pt1x: any, pt1y: any, pt2x: any, pt2y: any;
    ss.forEach((id) => {
        let ent = id.getMcDbEntity();
        if (!ent) return;

        let cent = ent.clone() as McDbEntity;
        blkTableRecord.appendAcDbEntity(cent);

        let entBox = ent.getBoundingBox();
        if (entBox.ret) {
            if (!pt1x) {
                pt1x = entBox.minPt.x;
                pt1y = entBox.minPt.y;
                pt2x = entBox.maxPt.x;
                pt2y = entBox.maxPt.y;
            }
            else {
                if (pt1x > entBox.minPt.x) pt1x = entBox.minPt.x;
                if (pt1y > entBox.minPt.y) pt1y = entBox.minPt.y;
                if (pt2x < entBox.maxPt.x) pt2x = entBox.maxPt.x;
                if (pt2y < entBox.maxPt.y) pt2y = entBox.maxPt.y;
            }
        }
    })
    if (pt1x === undefined) {
        return;
    }
    let insertPtx = pt1x + (pt2x - pt1x) * 0.5;
    let insertPty = pt1y + (pt2y - pt1y) * 0.5;
    // 设置图块的插入基点，在图形对象的中心位置。
    blkTableRecord.origin = new McGePoint3d(insertPtx, insertPty, 0);


    let blkRef = new McDbBlockReference();
    blkRef.blockTableRecordId = blkRecId;
    blkRef.position = new McGePoint3d(insertPtx + (pt2x - pt1x) * 3, insertPty + (pt2y - pt1y) * 3, 0);

    blkRef = mxcad.drawEntity(blkRef).getMcDbEntity() as McDbBlockReference;


    // 设置一个圆做它的剪切边界.
    let dR = (pt2x - pt1x);
    if (dR < (pt2y - pt1y)) dR = (pt2y - pt1y);
    dR *= 0.3;
    let circle = new McDbCircle(insertPtx, insertPty, 0, dR);
    let samplePoints = circle.getSamplePoints(dR * 0.00001);
    let aryPoint = new McGePoint3dArray();
    samplePoints.forEach((val, _type, dxf) => {
        if (dxf === 1010) {
            const point = new McGePoint3d(val.x, val.y, val.z)
            aryPoint.append(point);
        }
    });

    blkRef.createSpatialFilter();
    blkRef.scaleFactors = new McGePoint3d(3, 3, 3);
    let idSpatialFilter = blkRef.getSpatialFilterId();
    let blkFilter: McDbSpatialFilter = idSpatialFilter.getMcDbObject() as any;
    blkFilter.setBoundary(aryPoint);
    circle.center = blkRef.position;
    circle.radius = circle.radius * 3;
    mxcad.drawEntity(circle);
}

// 遍历块内部实体
async function Mx_ForEachBlkEntity() {
    // 选择目标块
    let filter = new MxCADResbuf();
    filter.AddMcDbEntityTypes("INSERT");
    const getBlockEvent = new MxCADUiPrEntity()
    getBlockEvent.setMessage('选择目标块');
    getBlockEvent.setFilter(filter);
    const block_id = await getBlockEvent.go();
    if (!block_id.id) return;
    // 获取块实体
    const blkRef = block_id.getMcDbEntity() as McDbBlockReference;
    // 获取块表记录对象
    let blkRec = blkRef.blockTableRecordId.getMcDbBlockTableRecord();
    // 遍历图块实体
    Mx_ModyfBlockRecordEntity(blkRec, blkRef.blockTransform)
}
function Mx_ModyfBlockRecordEntity(blkRec: McDbBlockTableRecord, mart) {
    // 获取图块中所有实体Id
    blkRec.getAllEntityId().forEach(id => {
        let ent = id.getMcDbEntity();
        // 若实体为图块，则递归遍历
        if (ent instanceof McDbBlockReference) {
            let blkref = ent as McDbBlockReference;
            let mat = blkref.blockTransform.clone();
            mat.preMultBy(mart);
            Mx_ModyfBlockRecordEntity(blkref.blockTableRecordId.getMcDbBlockTableRecord(), mat);
        } else {
            // 输出实体id、实体类名
            const { minPt, maxPt } = ent.getBoundingBox();
            minPt.transformBy(mart);
            maxPt.transformBy(mart);
            MxCpp.getCurrentMxCAD().drawLine(minPt.x, minPt.y, maxPt.x, maxPt.y)
        }
    })
}
export function init() {
    MxFun.addCommand("Mx_ChangeBN", Mx_ChangeBN);
    MxFun.addCommand("Mx_BushBlk", Mx_BushBlk);
    MxFun.addCommand("Mx_ConBlk", Mx_ConBlk);
    MxFun.addCommand("Mx_BlkPt", Mx_BlkPt);
    MxFun.addCommand("Mx_BlkColor", Mx_BlkColor);
    MxFun.addCommand("Mx_BlkRotate", Mx_BlkRotate);
    MxFun.addCommand("Mx_BlkScale", Mx_BlkScale);
    MxFun.addCommand("Mx_BlkAngle", Mx_BlkAngle);
    MxFun.addCommand("Mx_BlkSelect", Mx_BlkSelect);
    MxFun.addCommand("Mx_BlkAllSelect", Mx_BlkAllSelect);
    MxFun.addCommand("Mx_SSBlk", Mx_SSBlk);
    MxFun.addCommand("Mx_SMBlk", Mx_SMBlk);
    MxFun.addCommand("Mx_BlkLayer", Mx_BlkLayer);
    MxFun.addCommand("MxTest_SelectEntitysToBlock", MxTest_SelectEntitysToBlock);
    MxFun.addCommand("MxTest_SelectEntitysToSpatialFilterBlock", MxTest_SelectEntitysToSpatialFilterBlock);
    MxFun.addCommand("Mx_ForEachBlkEntity", Mx_ForEachBlkEntity);
}