///////////////////////////////////////////////////////////////////////////////
//版权所有（C）2002-2022，成都梦想凯德科技有限公司。
//本软件代码及其文档和相关资料归成都梦想凯德科技有限公司,应用包含本软件的程序必须包括以下版权声明
//此应用程序应与成都梦想凯德科技有限公司达成协议，使用本软件、其文档或相关材料
//https://www.mxdraw.com/
///////////////////////////////////////////////////////////////////////////////

import Mx, { MxFun } from "mxdraw";
import {
    MxCADUiPrInt, MxCADUiPrEntity, McDbLine, McDbText, McDbMText, McGeVector3d, MxCpp, MxCADResbuf, MxCADUtility,
    MxCADUiPrString, McDb, MxCADUiPrKeyWord, MxCADUiPrPoint, McGePoint3d, McDbPolyline, MxCADUiPrDist, McDbEntity,
    McGeMatrix3d, MxCADSelectionSet, McObjectId, McDbArc, DxfCode,
    McDbCurve,
    McDbCircle,
    McGeLongArray,
    McDbAttribute,
    McDbBlockReference,
    McDbProxyEntity,
    MxCanvas2Image
} from "mxcad";
// 按线对齐
async function Mx_AlignByLine() {
    let filter = new MxCADResbuf();
    filter.AddMcDbEntityTypes("LINE");
    const getLineObj = new MxCADUiPrEntity();
    getLineObj.setMessage("请选择目标对齐线对象(选择直线)");
    getLineObj.setFilter(filter);
    const lineObj_id = await getLineObj.go();
    if (!lineObj_id.id) return;
    const lineObj = lineObj_id.getMcDbEntity() as McDbLine;
    const getTextObj = new MxCADUiPrEntity();

    let filter2 = new MxCADResbuf();
    filter2.AddMcDbEntityTypes("TEXT");
    getTextObj.setMessage("请选择目标文字对象");
    getTextObj.setFilter(filter2);
    const textObj_id = await getTextObj.go();
    if (!textObj_id.id) return;
    const textObj = textObj_id.getMcDbEntity() as McDbText;

    const line_v = lineObj.getFirstDeriv(lineObj.getStartPoint().val);// 直线初始点切向量
    let angle1 = line_v.val.angleTo2(McGeVector3d.kXAxis, McGeVector3d.kNegateZAxis);//直线与水平方向角度
    let angle2 = textObj.rotation;//文字初始角度
    textObj.rotate(textObj.position, angle1 - angle2)
    const mxcad = MxCpp.App.getCurrentMxCAD();
    mxcad.updateDisplay()
}

// 改字高
async function Mx_TextHeight() {
    let filter = new MxCADResbuf();
    filter.AddMcDbEntityTypes("TEXT, MTEXT");
    const aryIds = await MxCADUtility.userSelect("选择文字对象", filter);
    if (aryIds.length == 0) {
        return;
    };
    const getHeight = new MxCADUiPrString();
    getHeight.setMessage("请设置字高");
    const height = await getHeight.go();
    if (!height || !Number(height)) return;
    aryIds.forEach(id => {
        const text = id.getMcDbEntity() as McDbText;
        text.height = Number(height);
    })
    MxCpp.getCurrentMxCAD().updateDisplay()
}

// 改字宽
async function Mx_TextWidth() {
    let filter = new MxCADResbuf();
    filter.AddMcDbEntityTypes("TEXT, MTEXT");
    const aryIds = await MxCADUtility.userSelect("选择文字对象", filter);
    if (aryIds.length == 0) {
        return;
    };
    const getWidth = new MxCADUiPrString();
    getWidth.setMessage("请设置字宽");
    const width = await getWidth.go();
    if (!width || !Number(width)) return;
    aryIds.forEach(id => {
        const text = id.getMcDbEntity() as McDbText;
        text.widthFactor = Number(width);
    })
    MxCpp.getCurrentMxCAD().updateDisplay()
}

// 刷内容
async function Mx_BrushCon() {
    const filter = new MxCADResbuf();
    filter.AddMcDbEntityTypes("TEXT");
    const getCopyObj = new MxCADUiPrEntity();
    getCopyObj.setMessage("请选择源文字");
    getCopyObj.setFilter(filter);
    const copyObj_id = await getCopyObj.go();
    if (!copyObj_id?.id) return;
    const copyObj = copyObj_id.getMcDbEntity() as McDbText;
    let aryId = await MxCADUtility.userSelect('请选择目标文字', filter);
    if (aryId.length == 0) {
        return;
    }
    const mxcad = MxCpp.App.getCurrentMxCAD();
    aryId.forEach(id => {
        let event = id.getMcDbEntity() as McDbText;
        event.textString = copyObj.textString
    });
    mxcad.updateDisplay();
}

// 换内容
async function Mx_ReplaceCon() {
    const filter = new MxCADResbuf();
    filter.AddMcDbEntityTypes("TEXT");
    const getFirstObj = new MxCADUiPrEntity();
    getFirstObj.setFilter(filter);
    getFirstObj.setMessage("请选择第一个文字");
    const firstObj_id = await getFirstObj.go();
    if (!firstObj_id?.id) return;
    const firstObj = firstObj_id.getMcDbEntity() as McDbText;
    const mxcad = MxCpp.App.getCurrentMxCAD();
    const getSecondObj = new MxCADUiPrEntity();
    getSecondObj.setFilter(filter);
    getSecondObj.setMessage("请选择第二个文字");
    const secondObj_id = await getSecondObj.go();
    if (!secondObj_id?.id) return;
    const secondObj = secondObj_id.getMcDbEntity() as McDbText;
    let str1 = firstObj.textString;
    let str2 = secondObj.textString;
    let event1 = firstObj.clone() as McDbText;
    let event2 = secondObj.clone() as McDbText;
    event1.textString = str2;
    event2.textString = str1;
    mxcad.drawEntity(event1)
    mxcad.drawEntity(event2)
    firstObj_id.erase();
    secondObj_id.erase();
}

// 左右对齐
async function Mx_AlignLeft() {
    // 选择对齐文字
    const filter = new MxCADResbuf();
    filter.AddMcDbEntityTypes("TEXT");
    let aryIds = await MxCADUtility.userSelect('请选择需要对齐的文字', filter);
    if (aryIds.length == 0) {
        return;
    };
    // 设置对齐选项
    const getKeyWord = new MxCADUiPrKeyWord();
    getKeyWord.setMessage("请选择对齐方式");
    getKeyWord.setKeyWords(`[左(L)/中(M)/右(R)]`);
    const keyWord = await getKeyWord.go();
    if (!keyWord) return;

    // 选择对齐基点
    const getBasePt = new MxCADUiPrPoint();
    getBasePt.setMessage("请选择对齐基点");
    const basePt = await getBasePt.go();
    if (!basePt) return;

    const mxcad = MxCpp.getCurrentMxCAD();
    if (keyWord === 'L') {
        // 左对齐
        aryIds.forEach(id => {
            const text = id.getMcDbEntity() as McDbText;
            const text_clone = text.clone() as McDbText;
            const aPt = text.alignmentPoint;
            const pt = text.position;
            text_clone.horizontalMode = McDb.TextHorzMode.kTextLeft;
            text_clone.alignmentPoint = new McGePoint3d(basePt.x, aPt.y);
            text_clone.position = new McGePoint3d(basePt.x, pt.y);
            mxcad.drawEntity(text_clone);
            id.erase();
        })
    } else if (keyWord === 'R') {
        // 右对齐
        aryIds.forEach(id => {
            const text = id.getMcDbEntity() as McDbText;
            const text_clone = text.clone() as McDbText;
            const aPt = text.alignmentPoint;
            const pt = text.position;
            text_clone.horizontalMode = McDb.TextHorzMode.kTextRight;
            text_clone.alignmentPoint = new McGePoint3d(basePt.x, aPt.y);
            text_clone.position = new McGePoint3d(basePt.x, pt.y);
            mxcad.drawEntity(text_clone);
            id.erase();
        })
    } else if (keyWord === 'M') {
        // 居中对齐
        aryIds.forEach(id => {
            const text = id.getMcDbEntity() as McDbText;
            const text_clone = text.clone() as McDbText;
            const aPt = text.alignmentPoint;
            const pt = text.position;
            text_clone.horizontalMode = McDb.TextHorzMode.kTextCenter;
            text_clone.alignmentPoint = new McGePoint3d(basePt.x, aPt.y);
            text_clone.position = new McGePoint3d(basePt.x, pt.y);
            mxcad.drawEntity(text_clone);
            id.erase();
        })
    }
}

// 上下对齐
async function Mx_AlignUp() {
    // 选择对齐文字
    const filter = new MxCADResbuf();
    filter.AddMcDbEntityTypes("TEXT");
    let aryIds = await MxCADUtility.userSelect('请选择需要对齐的文字', filter);
    if (aryIds.length == 0) {
        return;
    };

    // 选择对齐基点
    const getBasePt = new MxCADUiPrPoint();
    getBasePt.setMessage("请选择对齐基点");
    const basePt = await getBasePt.go();
    if (!basePt) return;

    aryIds.forEach(id => {
        const text = id.getMcDbEntity() as McDbText;
        const pt = text.position;
        text.alignmentPoint = text.position = new McGePoint3d(pt.x, basePt.y);
    });

    MxCpp.getCurrentMxCAD().updateDisplay();

}

// 文字反转
async function Mx_TextReversal() {
    // 选择需要反转的文字
    const filter = new MxCADResbuf();
    filter.AddMcDbEntityTypes("TEXT");
    let aryIds = await MxCADUtility.userSelect('请选择需要反转的文字', filter);
    if (aryIds.length == 0) {
        return;
    };

    const mxcad = MxCpp.App.getCurrentMxCAD();
    aryIds.forEach(id => {
        const event = id.getMcDbEntity() as McDbText;
        const event_clone = event.clone() as McDbText;

        // 将文字中心点做旋转基点
        let bound = event.getBoundingBox();
        if (!bound.ret) return;
        const maxPt: McGePoint3d = bound.maxPt;
        const minPt: McGePoint3d = bound.minPt;
        const line = new McDbLine(minPt, maxPt);
        const midPt = line.getPointAtDist(line.getLength().val / 2).val;

        // 文字在自身旋转角度上再旋转180度
        const angle = McGeVector3d.kXAxis.angleTo1(new McGeVector3d(-1, 0, 0)) + event.rotation
        event_clone.rotate(midPt, angle);
        id.erase()
        mxcad.drawEntity(event_clone);
    })
}

// 去空格
async function Mx_TextTrim() {
    // 选择需要去空格的对象
    const filter = new MxCADResbuf();
    filter.AddMcDbEntityTypes("TEXT, MTEXT");
    let aryIds = await MxCADUtility.userSelect("请选择需要去空格的文字", filter);
    if (aryIds.length == 0) {
        return;
    };

    // 去除文字空格
    aryIds.forEach(id => {
        const event = id.getMcDbEntity();
        let event_clone: McDbText | McDbMText = new McDbText;
        if (event instanceof McDbText) {
            event_clone = event.clone() as McDbText;
            event_clone.textString = event.textString.replace(/\s+/g, '');
        } else if (event instanceof McDbMText) {
            event_clone = event.clone() as McDbMText;
            event_clone.contents = event.contents.replace(/\s+/g, '');
        }
        id.erase()
        MxCpp.App.getCurrentMxCAD().drawEntity(event_clone);
    })
}

// 文字加框
async function Mx_TextTraming() {
    // 选择文字对象
    const filter = new MxCADResbuf();
    filter.AddMcDbEntityTypes("TEXT, MTEXT");
    let aryIds = await MxCADUtility.userSelect('请选择文字对象', filter);
    if (aryIds.length == 0) {
        return;
    };

    aryIds.forEach(id => {
        const event = id.getMcDbEntity();
        if (!event) return;
        // 获取文字的两个角点
        let bound = event.getBoundingBox();
        if (!bound.ret) return;
        const maxPt: McGePoint3d = bound.maxPt;
        const minPt: McGePoint3d = bound.minPt;
        // 获取其他两个角点
        const pt1 = new McGePoint3d(minPt.x, maxPt.y);
        const pt2 = new McGePoint3d(maxPt.x, minPt.y);
        // 为文字框设置内边距
        const vec1 = minPt.clone().sub(maxPt).normalize().mult(2);
        const vec2 = pt1.clone().sub(pt2).normalize().mult(2);
        // 绘制文字框
        const pl = new McDbPolyline();
        pl.addVertexAt(minPt.addvec(vec1));
        pl.addVertexAt(pt1.addvec(vec2));
        pl.addVertexAt(maxPt.subvec(vec1));
        pl.addVertexAt(pt2.subvec(vec2));
        pl.isClosed = true;
        MxCpp.getCurrentMxCAD().drawEntity(pl);
    })
}

// 下划线
async function Mx_Underline() {
    // 选择文字对象
    const filter = new MxCADResbuf();
    filter.AddMcDbEntityTypes("TEXT");
    let aryIds = await MxCADUtility.userSelect('请选择文字对象', filter);
    if (aryIds.length == 0) {
        return;
    };

    // 设置下划线宽度
    const getWidth = new MxCADUiPrInt();
    getWidth.setMessage("请输入下划线宽度 ");
    const width = await getWidth.go() || 0;

    // 设置下划线距离
    const getDist = new MxCADUiPrDist();
    getDist.setMessage("请设置下划线距离 ");
    const val = await getDist.go();
    let dist: number = 0;
    if (val) {
        dist = getDist.value();
    }

    // 设置下划线延长距离
    const getExDist = new MxCADUiPrDist();
    getExDist.setMessage("请设置下划线延长距离 ");
    const ex_val = await getExDist.go();
    let exDist: number = 0;
    if (ex_val) {
        exDist = getExDist.value();
    }

    aryIds.forEach(id => {
        const event = id.getMcDbEntity() as McDbText;
        // 获取文字的两个角点
        let bound = event.getBoundingBox();
        if (!bound.ret) return;
        const maxPt: McGePoint3d = bound.maxPt;
        const minPt: McGePoint3d = bound.minPt;

        // 延长下划线
        const line1 = new McDbLine(minPt.x, minPt.y, 0, maxPt.x, minPt.y, 0);
        const line2 = new McDbLine(maxPt.x, minPt.y, 0, minPt.x, minPt.y, 0);
        const length = line2.getLength().val;
        const pt1 = line1.getPointAtDist(length + exDist).val;
        const pt2 = line2.getPointAtDist(length + exDist).val;
        const pl = new McDbPolyline();
        pl.addVertexAt(pt1, 0, width, width);
        pl.addVertexAt(pt2, 0, width, width);

        // 平移
        const closePt = pl.getClosestPointTo(maxPt, true).val;
        // 转换向量长度
        const vex = closePt.clone().sub(maxPt);
        vex.normalize().mult(dist)
        const toPt = closePt.clone().addvec(vex);
        const matrix = new McGeMatrix3d();
        matrix.setToTranslation(toPt.sub(closePt));
        pl.transformBy(matrix)
        MxCpp.getCurrentMxCAD().drawEntity(pl)
    })

}

// 图名线
async function Mx_TitleLine() {
    // 选择文字对象
    const filter = new MxCADResbuf();
    filter.AddMcDbEntityTypes("TEXT");
    let aryIds = await MxCADUtility.userSelect('请选择文字对象', filter);
    if (aryIds.length == 0) {
        return;
    };

    aryIds.forEach(id => {
        const event = id.getMcDbEntity();
        if (!event) return;
        // 获取文字的两个角点
        let bound = event.getBoundingBox();
        if (!bound.ret) return;
        const maxPt: McGePoint3d = bound.maxPt;
        const minPt: McGePoint3d = bound.minPt;
        // 利用多段线绘制图名线
        const pl1 = new McDbPolyline();
        pl1.addVertexAt(minPt, 0, 2, 2);
        pl1.addVertexAt(new McGePoint3d(maxPt.x, minPt.y), 0, 2, 2);
        const pl2 = new McDbPolyline();
        pl2.addVertexAt(minPt);
        pl2.addVertexAt(new McGePoint3d(maxPt.x, minPt.y));
        // 平移
        const closePt = pl1.getClosestPointTo(maxPt, true).val;
        // 转换向量长度
        const vex1 = closePt.clone().sub(maxPt);
        const vex2 = closePt.clone().sub(maxPt);
        vex1.normalize().mult(2)
        vex2.normalize().mult(4)
        const toPt1 = closePt.clone().addvec(vex1);
        const toPt2 = closePt.clone().addvec(vex2);
        const matrix1 = new McGeMatrix3d();
        const matrix2 = new McGeMatrix3d();
        matrix1.setToTranslation(toPt1.sub(closePt));
        pl1.transformBy(matrix1);
        matrix2.setToTranslation(toPt2.sub(closePt));
        pl2.transformBy(matrix2);
        MxCpp.getCurrentMxCAD().drawEntity(pl1);
        MxCpp.getCurrentMxCAD().drawEntity(pl2);
    })
}

// 大小写
async function Mx_Case() {
    const filter = new MxCADResbuf();
    filter.AddMcDbEntityTypes("TEXT");
    let aryIds = await MxCADUtility.userSelect('请选择文字对象', filter);
    if (aryIds.length == 0) {
        return;
    };
    // 设置关键词列表
    const getKey = new MxCADUiPrKeyWord;
    getKey.setMessage("请选择操作选项 ");
    getKey.setKeyWords(`[大写(C)/小写(S)/句首大写(I)]`);
    const key = await getKey.go();
    if (!key) return;

    const mxcad = MxCpp.getCurrentMxCAD();
    if (key === 'C') {
        aryIds.forEach(id => {
            const event = id.getMcDbEntity() as McDbText;
            const str = event.textString;
            const event_clone = event.clone() as McDbText;
            event_clone.textString = str.toUpperCase();
            console.log(event_clone.textString)
            event.erase();
            mxcad.drawEntity(event_clone)
        })
    } else if (key === 'S') {
        aryIds.forEach(id => {
            const event = id.getMcDbEntity() as McDbText;
            const str = event.textString;
            const event_clone = event.clone() as McDbText;
            event_clone.textString = str.toLowerCase();
            console.log(event_clone.textString)
            event.erase();
            mxcad.drawEntity(event_clone)
        })
    } else if (key === 'I') {
        aryIds.forEach(id => {
            const event = id.getMcDbEntity() as McDbText;
            const str = event.textString;
            const event_clone = event.clone() as McDbText;
            event_clone.textString = str.charAt(0).toUpperCase() + str.slice(1);
            event.erase();
            mxcad.drawEntity(event_clone)
        })
    }
}

// 数字求和
async function Mx_NumSum() {
    const filter = new MxCADResbuf();
    filter.AddMcDbEntityTypes("TEXT");
    let aryIds = await MxCADUtility.userSelect('请选择数字对象', filter);
    if (aryIds.length == 0) {
        return;
    };
    let num_arr: number[] = []
    aryIds.forEach(id => {
        const text = id.getMcDbEntity() as McDbText;
        const num = Number(text.textString);
        if (isNaN(num)) return;
        num_arr.push(num);
    })

    if (num_arr.length !== aryIds.length) return;
    let sum = num_arr.reduce((acc, curr) => acc + curr, 0);

    const getPoint = new MxCADUiPrPoint();
    const text = new McDbText();
    text.textString = sum.toString();
    text.height = 10;
    getPoint.setMessage("请选择文字插入点 ");
    getPoint.setUserDraw((pt, pw) => {
        text.position = pt;
        text.alignmentPoint = pt;
        pw.drawMcDbEntity(text);
    })
    const point = await getPoint.go();
    if (!point) return;
    const mxcad = MxCpp.getCurrentMxCAD();
    text.position = point;
    text.alignmentPoint = point;
    mxcad.drawEntity(text);
}

// 选特定字
async function Mx_SSWords() {
    const filter = new MxCADResbuf();
    // 添加对象类型，选择集只选择文字类型的对象
    filter.AddMcDbEntityTypes("TEXT")
    let ss = new MxCADSelectionSet();
    if (!await ss.userSelect('选择要查找的范围:', filter)) return;
    if (ss.count() == 0) return;
    // 设置查找模式
    const getKey = new MxCADUiPrKeyWord();
    getKey.setMessage("请选择查找模式 ");
    getKey.setKeyWords(`[等于(A)/包含(B)/前缀为(C)/后缀为(D)]`);
    const key = await getKey.go();
    if (!key) return;
    // 设置关键字
    const getStr = new MxCADUiPrString();
    getStr.setMessage("请输入关键字 ");
    const string = await getStr.go();
    if (!string) return;

    // 选中对象
    const mxcad = MxCpp.getCurrentMxCAD();
    let objArr: McObjectId[] = [];
    ss.forEach((id: McObjectId) => {
        const obj = id.getMcDbEntity() as McDbText;
        const str = obj.textString;
        if (key === 'A') {
            if (str === string) {
                objArr.push(id);
            }
        } else if (key === 'B') {
            if (str.includes(string)) {
                objArr.push(id);
            }
        } else if (key === 'C') {
            if (str.startsWith(string)) {
                objArr.push(id);
            }
        } else if (key === 'D') {
            if (str.endsWith(string)) {
                objArr.push(id);
            }
        }
    });
    if (objArr.length > 0) {
        objArr.forEach(id => {
            mxcad.addCurrentSelect(id)
        })
    }
}

// 前后缀
async function Mx_Prefix() {
    const filter = new MxCADResbuf();
    // 添加对象类型，选择集只选择文字类型的对象
    filter.AddMcDbEntityTypes("TEXT")
    let ss = new MxCADSelectionSet();
    if (!await ss.userSelect("选择要操作的范围:", filter)) return;
    if (ss.count() == 0) return;
    // 设置操作方式
    const getPrefType = new MxCADUiPrKeyWord();
    getPrefType.setMessage("选择操作方式");
    getPrefType.setKeyWords(`[添加(A)/删除(D)]`);
    let type = await getPrefType.go();
    if (!type) return;

    // 设置模式
    const getPrefModel = new MxCADUiPrKeyWord();
    getPrefModel.setMessage("选择操作位置");
    getPrefModel.setKeyWords(`[前缀(P)/后缀(S)]`);
    let model = await getPrefModel.go();
    if (!model) return;

    // 设置内容
    const getPrefixStr = new MxCADUiPrString();
    getPrefixStr.setMessage("请输入内容");
    const string = await getPrefixStr.go();
    if (!string) return;

    // 开始操作
    ss.forEach(id => {
        const obj = id.getMcDbEntity() as McDbText;
        const str = obj.textString;
        if (type === 'A') {
            // 添加
            if (model === 'P') {
                // 前缀
                obj.textString = string + str;
            } else if (model === 'S') {
                // 后缀
                obj.textString = str + string;
            }
        } else if (type === 'D') {
            // 删除
            if (model === 'P') {
                // 前缀
                if (str.startsWith(string)) {
                    obj.textString = str.slice(string.length)
                }
            } else if (model === 'S') {
                // 后缀
                if (str.endsWith(string)) {
                    obj.textString = str.slice(0, -string.length);
                }
            }
        }
    });
}

// 连接文字
async function Mx_ConnectText() {
    const filter = new MxCADResbuf();
    // 添加对象类型，选择集只选择文字类型的对象
    filter.AddMcDbEntityTypes('TEXT');
    const mxcad = MxCpp.getCurrentMxCAD();
    while (true) {
        const getPoint = new MxCADUiPrPoint();
        getPoint.setMessage("请选择文本 ");
        const point = await getPoint.go();
        if (!point) break;
        let objId = MxCADUtility.findEntAtPoint(point.x, point.y, point.z, -1, filter);
        mxcad.addCurrentSelect(objId);
    }

    const objIds = MxCADUtility.getCurrentSelect();
    if (!objIds.length) return;
    let str: string = '';
    objIds.forEach((objId: McObjectId, index: number) => {
        const text = objId.getMcDbEntity() as McDbText;
        str += text.textString;
        if (index !== 0) {
            objId.erase()
        }
    })
    const event = objIds[0].getMcDbEntity() as McDbText;
    event.textString = str;
    // 清除选择
    mxcad.mxdraw.clearMxCurrentSelect()
}

// 文字竖向
async function Mx_VerticalText() {
    const filter = new MxCADResbuf();
    // 添加对象类型，选择集只选择文字类型的对象
    filter.AddMcDbEntityTypes('TEXT');
    const getEvent = new MxCADUiPrEntity();
    getEvent.setMessage("请选择文本 ");
    const ent_id = await getEvent.go();
    if (!ent_id) return;

    const text = ent_id.getMcDbEntity() as McDbText;
    const str = text.textString.split('').join('\\P');

    const mText = new McDbMText();
    mText.contents = str;
    mText.textHeight = text.height;
    mText.location = text.position;
    mText.trueColor = text.trueColor;
    mText.colorIndex = text.colorIndex;
    mText.layerId = text.layerId;

    const mxcad = MxCpp.getCurrentMxCAD();
    ent_id.erase();
    mxcad.drawEntity(mText);

}

// 按弧对齐
async function Mx_AlignByArc() {
    // 获取目标文本
    const filter = new MxCADResbuf();
    // 添加对象类型，选择集只选择文字类型的对象
    filter.AddMcDbEntityTypes('TEXT');
    const getText = new MxCADUiPrEntity();
    getText.setFilter(filter);
    getText.setMessage("请选择文本 ");
    const ent_id = await getText.go();
    if (!ent_id.id) return;
    const text = ent_id.getMcDbEntity() as McDbText;
    text.highlight(true);


    // 获取参考圆弧
    const filter2 = new MxCADResbuf();
    filter2.AddMcDbEntityTypes('ARC');
    const getArc = new MxCADUiPrEntity();
    getArc.setFilter(filter2);
    getArc.setMessage("请选择圆弧 ");
    const arc_id = await getArc.go();
    if (!arc_id.id) return;
    const arc = arc_id.getMcDbEntity() as McDbArc;
    arc.highlight(true);

    // 切割文字，并在圆弧上取点
    const textArr: string[] = text.textString.split('');
    textArr.reverse();
    const dist: number = arc.getLength().val / (textArr.length - 1);
    const mxcad = MxCpp.getCurrentMxCAD();
    for (let i = 0; i < textArr.length; i++) {
        const point = arc.getPointAtDist(dist * i).val;
        const t = new McDbText();
        t.textString = textArr[i];
        t.position = t.alignmentPoint = point;
        t.horizontalMode = McDb.TextHorzMode.kTextMid;
        t.trueColor = text.trueColor;
        t.colorIndex = text.colorIndex;
        t.height = text.height;
        t.widthFactor = text.widthFactor;
        t.rotation = text.rotation;
        mxcad.drawEntity(t)
    };
    text.highlight(false);
    arc.highlight(false);
}

// 修改全局文字样式
async function Mx_EditTextStyle() {
    // 获取全局文字样式表
    const mxcad = MxCpp.getCurrentMxCAD();
    const textSyleTable = mxcad.getDatabase().getTextStyleTable();
    //获取文字样式表记录的文字样式名
    const recIds = textSyleTable.getAllRecordId();
    let name: string = "";
    let list: McObjectId[] = [];
    recIds.forEach((id, index) => {
        const rec = id.getMcDbTextStyleTableRecord()
        if (rec) name += `${rec.name}(${index})/`;
        list.push(id)
    })
    // 设置文字样式
    const getKey = new MxCADUiPrKeyWord;
    getKey.setMessage("请选择文字样式")
    getKey.setKeyWords(`[${name}]`)
    const keyVal = await getKey.go();

    // 修改全局文字的文字样式
    const ss = new MxCADSelectionSet();
    //选择所有图形元素
    ss.allSelect(new MxCADResbuf([DxfCode.kEntityType, "TEXT, MTEXT"]));
    ss.forEach((id) => {
        let ent = id.getMcDbEntity();
        if(ent) ent.textStyleId = list[Number(keyVal)];
    });
    MxCpp.getCurrentMxCAD().updateDisplay();
}

// 提取文字
async function Mx_ExtractText() {
    const filter = new MxCADResbuf([DxfCode.kEntityType, "MTEXT,TEXT"]);
    const ss = new MxCADSelectionSet();
    if (!await ss.userSelect('请设置文字提取范围', filter)) return;
    if (ss.count() == 0) return;

    let content: string = '';
    ss.forEach(id => {
        const ent = id.getMcDbEntity();
        if (ent) {
            const objName = ent.objectName;
            if (objName === 'McDbText') {
                const _clone = ent.clone() as McDbText;
                content += `${_clone.textString} `;
            } else if (objName === 'McDbMText') {
                const _clone = ent.clone() as McDbMText;
                content += _clone.contents.replace('\\P', ` `);
            }
        }

    });
    alert(content);
}

// 单转多
async function Mx_TextToMText() {
    const getEnt = new MxCADUiPrEntity();
    getEnt.setMessage("请选择一个单行文本");
    const filter = new MxCADResbuf([DxfCode.kEntityType, "TEXT"]);
    getEnt.setFilter(filter);
    const entId = await getEnt.go();
    if (!entId.id) return;
    const text = entId.getMcDbEntity() as McDbText;

    const mText = new McDbMText();
    mText.textStyleId = text.textStyleId;
    mText.trueColor = text.trueColor;
    mText.location = text.position;
    mText.contents = text.textString;
    mText.textHeight = text.height;
    mText.colorIndex = text.colorIndex;

    switch (text.horizontalMode) {
        case McDb.TextHorzMode.kTextLeft:
            mText.attachment = McDb.AttachmentPoint.kBottomLeft;
            break;
        case McDb.TextHorzMode.kTextCenter:
            mText.attachment = McDb.AttachmentPoint.kBottomCenter;
            break;
        case McDb.TextHorzMode.kTextRight:
            mText.attachment = McDb.AttachmentPoint.kBottomRight;
            break;
        case McDb.TextHorzMode.kTextMid:
            mText.attachment = McDb.AttachmentPoint.kBottomCenter;
            break;
        default:
            mText.attachment = McDb.AttachmentPoint.kBottomLeft;
            break;
    };

    const mxcad = MxCpp.getCurrentMxCAD();
    mxcad.drawEntity(mText);
    text.erase();
    mxcad.updateDisplay();
}

// 多转多个单
async function Mx_MTextToMultiple() {
    const getEnt = new MxCADUiPrEntity();
    getEnt.setMessage("请选择一个多行文本");
    const filter = new MxCADResbuf([DxfCode.kEntityType, "MTEXT"]);
    getEnt.setFilter(filter);
    const entId = await getEnt.go();
    if (!entId.id) return;
    let aryIdLong = new McGeLongArray();
    aryIdLong.copyFormAryId([entId]);
    MxCpp.App.MxCADAssist.MxExplode(entId);
}
// 多转单个单
async function Mx_MTextToSingle() {
    const getEnt = new MxCADUiPrEntity();
    getEnt.setMessage("请选择一个多行文本");
    const filter = new MxCADResbuf([DxfCode.kEntityType, "MTEXT"]);
    getEnt.setFilter(filter);
    const entId = await getEnt.go();
    if (!entId.id) return;
    const mText = entId.getMcDbEntity() as McDbMText;
    const text = new McDbText();
    text.textString = mText.getTextString();
    text.textStyleId = mText.textStyleId;
    text.trueColor = mText.trueColor;
    text.height = mText.textHeight;
    text.colorIndex = mText.colorIndex;
    const getPos = new MxCADUiPrPoint();
    getPos.setMessage("请设置文字插入点");
    getPos.setUserDraw((pt, pw) => {
        text.position = text.alignmentPoint = pt;
        pw.drawMcDbEntity(text);
    });
    const pos = await getPos.go();
    if (!pos) return;
    text.position = text.alignmentPoint = pos;

    MxCpp.getCurrentMxCAD().drawEntity(text);
}
// 多单转一多
async function Mx_MultipleToMText() {
    const ss = new MxCADSelectionSet();
    const filter = new MxCADResbuf([DxfCode.kEntityType, "TEXT"]);
    await ss.userSelect('请选择单行文本', filter);
    if (!ss.count()) return;
    const textArr: McDbText[] = [];
    ss.forEach(id => {
        const text = id.getMcDbEntity() as McDbText;
        textArr.push(text);
    });

    const mText = new McDbMText();
    mText.textStyleId = textArr[0].textStyleId;
    mText.trueColor = textArr[0].trueColor;
    mText.location = textArr[0].position;
    mText.contents = textArr[0].textString;
    mText.textHeight = textArr[0].height;
    mText.colorIndex = textArr[0].colorIndex;
    let str: string = '';
    textArr.sort((a, b) => b.position.y - a.position.y).forEach(text => {
        str += `${text.textString}\\P`;
    });
    mText.contents = str;

    const getPos = new MxCADUiPrPoint();
    getPos.setMessage("请设置文字插入点");
    getPos.setUserDraw((pt, pw) => {
        mText.location = pt;
        pw.drawMcDbEntity(mText);
    });
    const pos = await getPos.go();
    if (!pos) return;
    mText.location = pos;

    MxCpp.getCurrentMxCAD().drawEntity(mText);
}

function MxText_GetBlockRecordText(idBlkRec: McObjectId, mat: McGeMatrix3d) {

  let allEnt = idBlkRec.getMcDbBlockTableRecord()?.getAllEntityId();
  if (allEnt) {
    allEnt.forEach(id => {
      let ent = id.getMcDbEntity();
      if (!ent) return;
      if (ent instanceof McDbText) {
        let txt = (ent as McDbText);
        console.log(txt.textString);
        console.log(txt.position.clone().transformBy(mat));
      }
      else if (ent instanceof McDbMText) {
        let mtxt = (ent as McDbMText);
        console.log(mtxt.contents);
        console.log(mtxt.location.clone().transformBy(mat));
      }
      else if (ent instanceof McDbBlockReference) {
        let blkRef: McDbBlockReference = ent;
        MxText_GetBlockRecordText(blkRef.blockTableRecordId, blkRef.blockTransform);
        let aryId = blkRef.getAllAttribute();
        aryId.forEach((id) => {
          let attribt: McDbAttribute = id.getMcDbEntity() as any;
          console.log(attribt.textString);
          console.log(attribt.position.clone().transformBy(mat));
        })
      }
    })
  }
}

// 获取图纸所有文本
function MxText_GetAllText() {
  let mxcad = MxCpp.getCurrentMxCAD();
  MxText_GetBlockRecordText(mxcad.database.currentSpace.getObjectID(), new McGeMatrix3d());
}

// 文字查找定位
async function MxTest_FindText() {
  //let sFindText1 = "STRAT";
  let sFindText1 = "0601";
  let sFindText2 = "001A";

  let ss = new MxCADSelectionSet();
  let filter = new MxCADResbuf();
  filter.AddMcDbEntityTypes("TEXT,MTEXT,INSERT,ACAD_PROXY_ENTITY");
  ss.allSelect(filter);
  let findPos: any;
  let entBox: any;
  let iCount = ss.count();
  for (let i = 0; i < iCount; i++) {
    let id = ss.item(i);
    let ent = id.getMcDbEntity();
    if (!ent) return;

    if (ent instanceof McDbText) {
      let txt = (ent as McDbText);
      if (txt.textString == sFindText1) {
        findPos = txt.position;
        entBox = txt.getBoundingBox();
        break;
      }

    }
    else if (ent instanceof McDbMText) {
      let mtxt = (ent as McDbMText);
      if (mtxt.contents == sFindText1) {
        findPos = mtxt.location;
        entBox = mtxt.getBoundingBox();
        break;
      }
    }

    else if (ent instanceof McDbBlockReference) {
      let blkRef: McDbBlockReference = ent;
      let aryId = blkRef.getAllAttribute();
      let iFind = 0;
      aryId.forEach((id) => {
        let attribt: McDbAttribute = id.getMcDbEntity() as any;
        if (attribt.textString == sFindText1) {
          iFind++;

        }
        else if (attribt.textString == sFindText2) {
          iFind++;
        }
      })

      if (iFind == 2) {
        findPos = blkRef.position;
        entBox = blkRef.getBoundingBox();
        break;
      }
    }

    else if (ent instanceof McDbProxyEntity) {
      let proxyEntity: McDbProxyEntity = ent;
      let aryText = proxyEntity.getAllTextContent();
      let iFind = 0;
      aryText.forEach((val) => {
        if (val == sFindText1) {
          iFind++;
        }
      });

      if (iFind >= 1) {
        entBox = proxyEntity.getBoundingBox();
        if (entBox && entBox.ret) {
          findPos = new McGePoint3d(entBox.minPt.x + (entBox.maxPt.x - entBox.minPt.x) * 0.5, entBox.minPt.y + (entBox.maxPt.y - entBox.minPt.y) * 0.5);
        }
        break;
      }
    }
  }

  if (entBox && entBox.ret) {

    console.log(entBox);
    let len = entBox.minPt.distanceTo(entBox.maxPt) * 2;
    MxFun.getCurrentDraw().zoomW(new THREE.Vector3(entBox.minPt.x - len, entBox.minPt.y - len, 0),
      new THREE.Vector3(entBox.maxPt.x + len, entBox.maxPt.y + len, 0));

  }
  else if (findPos) {

    MxFun.getCurrentDraw().zoomCenter(findPos.x, findPos.y);
  }
  else {
    console.log("没有找到文字:" + sFindText1)
  }
}

// 获取图纸相同文字
async function Mx_Test_GetText() {
  // 获取目标文字
  const getText = new MxCADUiPrEntity();
  getText.setMessage("请选择目标文字");
  const ent_id = await getText.go();
  if (!ent_id.id) return;
  const text = ent_id.getMcDbEntity() as McDbText;

  // 获取全局文字
  const ss = new MxCADSelectionSet();
  const dataArr = [];

  //选择所有图形元素
  ss.allSelect(new MxCADResbuf([DxfCode.kEntityType, "TEXT"]));
  ss.forEach(async (id) => {
    let ent = id.getMcDbEntity() as McDbText;
    if (ent.textString == text.textString) {
      const position = ent.position;
      console.log("文字位置:" + "X：" + position.x + "Y：" + position.y + "Z：" + position.z)
      const height = ent.height;
      // 获取文字包围点
      let { minPt, maxPt, ret } = ent.getBoundingBox();
      if (!ret) return;
      // 扩大截图范围
      const x = McGeVector3d.kXAxis.normalize().mult(height * 4);
      const y = McGeVector3d.kYAxis.normalize().mult(height * 4);
      minPt.addvec(x.negate()).addvec(y.negate());
      maxPt.subvec(x).subvec(y);

      // 获取截图宽高
      let w = Math.abs(minPt.x - maxPt.x);
      let h = Math.abs(minPt.y - maxPt.y);
      if (w < 1 || h < 1) return;
      let jpg_width = 200;
      let jpg_height = jpg_width * h / w;

      dataArr.push({
        type: "image/bmp",
        width: jpg_width,
        height: jpg_height,
        range_pt1: minPt.toVector3(),
        range_pt2: maxPt.toVector3(),
      });

    };

  });
  // 获取图片信息
  let str = ""
  for (let i = 0; i < dataArr.length; i++) {
    let imageData = await myCreateCanvasImageData({
      ...dataArr[i]
    });
    str += '<img src="' + imageData + '"/>'
  }
  // 截图预览
  let newWindow: any = window.open();
  if (newWindow != null) {
    newWindow.document.write(`<div style="display:flex;align-item:center;justify-content:space-evenly;">${str}</div>`);
  }
}

// 截图异步函数
export function myCreateCanvasImageData(param: any): Promise<String> {
  return new Promise<String>((resolve, reject) => {
    // 关闭坐标轴显示
    MxCpp.getCurrentMxCAD().setAttribute({ ShowCoordinate: false });
    MxFun.getCurrentDraw().createCanvasImageData(
      (imageData: String) => {
        let canvas2image = new MxCanvas2Image(document);
        const mxcad = MxCpp.getCurrentMxCAD();
        let img = canvas2image.convertToImage(mxcad.mxdraw.getCanvas(), undefined, undefined, "bmp");
        resolve(img.src);
        mxcad.setAttribute({ ShowCoordinate: true });
      },
      param
    );
  });
}

export function init() {
    MxFun.addCommand("Mx_AlignByLine", Mx_AlignByLine);
    MxFun.addCommand("Mx_TextHeight", Mx_TextHeight);
    MxFun.addCommand("Mx_TextWidth", Mx_TextWidth);
    MxFun.addCommand("Mx_BrushCon", Mx_BrushCon);
    MxFun.addCommand("Mx_ReplaceCon", Mx_ReplaceCon);
    MxFun.addCommand("Mx_AlignLeft", Mx_AlignLeft);
    MxFun.addCommand("Mx_AlignUp", Mx_AlignUp);
    MxFun.addCommand("Mx_TextReversal", Mx_TextReversal);
    MxFun.addCommand("Mx_TextTrim", Mx_TextTrim);
    MxFun.addCommand("Mx_TextTraming", Mx_TextTraming);
    MxFun.addCommand("Mx_Underline", Mx_Underline);
    MxFun.addCommand("Mx_TitleLine", Mx_TitleLine);
    MxFun.addCommand("Mx_Case", Mx_Case);
    MxFun.addCommand("Mx_NumSum", Mx_NumSum);
    MxFun.addCommand("Mx_SSWords", Mx_SSWords);
    MxFun.addCommand("Mx_Prefix", Mx_Prefix);
    MxFun.addCommand("Mx_ConnectText", Mx_ConnectText);
    MxFun.addCommand("Mx_VerticalText", Mx_VerticalText);
    MxFun.addCommand("Mx_AlignByArc", Mx_AlignByArc);
    MxFun.addCommand("Mx_EditTextStyle", Mx_EditTextStyle);
    MxFun.addCommand("Mx_ExtractText", Mx_ExtractText);
    MxFun.addCommand("Mx_TextToMText", Mx_TextToMText);
    MxFun.addCommand("Mx_MultipleToMText", Mx_MultipleToMText);
    MxFun.addCommand("Mx_MTextToMultiple", Mx_MTextToMultiple);
    MxFun.addCommand("Mx_MTextToSingle", Mx_MTextToSingle);
    MxFun.addCommand("MxTest_FindText", MxTest_FindText);
    MxFun.addCommand("Mx_Test_GetText", Mx_Test_GetText);
    MxFun.addCommand("MxText_GetAllText", MxText_GetAllText);
}