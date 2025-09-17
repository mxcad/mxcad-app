import { MxCpp, McGePoint3d, McDbLine, McCmColor, MxCADUiPrPoint } from "mxcad";
import { MxFun } from "mxdraw"
//画线
export async function Mx_drawLine() {
    // 获取线段起点
    let getFristPoint = new MxCADUiPrPoint();
    getFristPoint.setMessage("请点击确定起始点");
    let fristPoint = await getFristPoint.go();
    if (!fristPoint) return

    // 获取线段终点
    let getSecondPoint = new MxCADUiPrPoint();
    getSecondPoint.setMessage("请点击确定终点");
    getSecondPoint.setUserDraw((pt, pw) => {
        let line = new McDbLine(fristPoint.x, fristPoint.y, fristPoint.z, pt.x, pt.y, pt.z);
        pw.drawMcDbEntity(line)
    })
    let secondPoint = await getSecondPoint.go();
    if (!secondPoint) return

    // 绘制线段
    let line = new McDbLine(fristPoint.x, fristPoint.y, fristPoint.z, secondPoint.x, secondPoint.y, secondPoint.z);
    const mxcad = MxCpp.getCurrentMxCAD();
    mxcad.drawEntity(line)
};



MxFun.addCommand("Mx_drawLine", Mx_drawLine)