import { MxCpp, McCmColor, McDbPolyline, McGePoint3d, MxCADUiPrPoint } from "mxcad";
import { MxFun } from "mxdraw";
import { arePointsInRectangle } from '../editTools/extractForm'

function Mx_ViewBackgroundColor() {
    MxCpp.getCurrentMxCAD().setViewBackgroundColor(255, 255, 255);
    MxFun.callEvent("updateBackgroundColor", new McCmColor(255, 255, 255))
}

let lAng = 0;
export async function MxTest_TestSetViewAngle() {
    lAng += Math.PI * 0.5;
    let mxcad = MxCpp.getCurrentMxCAD()
    mxcad.zoomAngle(lAng);
}

// 固定视区范围
async function MxTest_FixedViewRange() {
    const getPt1 = new MxCADUiPrPoint();
    getPt1.setMessage("指定范围角点1:");
    let point1 = (await getPt1.go());
    if (!point1) return;

    const getPt2 = new MxCADUiPrPoint();
    getPt2.setMessage("指定范围角点2:");
    getPt2.setUserDraw((pt, pw) => {
        pw.setColor(0xFF0000);
        let pl = new McDbPolyline();
        pl.addVertexAt(point1);
        pl.addVertexAt(new McGePoint3d(point1.x, pt.y))
        pl.addVertexAt(pt);
        pl.addVertexAt(new McGePoint3d(pt.x, point1.y))
        pl.constantWidth = MxFun.screenCoordLong2Doc(2);
        pl.isClosed = true;
        pw.drawMcDbEntity(pl);
    });
    let point2 = (await getPt2.go());
    if (!point2) return;
    const mxcad = MxCpp.getCurrentMxCAD();
    mxcad.zoomW(point1, point2);

    const reacPts = [point1, new McGePoint3d(point1.x, point2.y), point2, new McGePoint3d(point2.x, point1.y)];

    let flag = true;
    mxcad.mxdraw.on("viewchange", () => {
        if (flag) {
            setTimeout(() => {
                const { pt1, pt2, pt3, pt4 } = mxcad.getViewCADCoord();
                const res = arePointsInRectangle(reacPts, [pt1, pt2, pt3, pt4]);
                if (!res) {
                    mxcad.zoomW(point1, point2);
                    flag = false;
                }
            }, 200)
        }else{
            flag = true;
        }
    });
}

export function init() {
    MxFun.addCommand("Mx_ViewBackgroundColor", Mx_ViewBackgroundColor);
    MxFun.addCommand("MxTest_TestSetViewAngle", Mx_ViewBackgroundColor);
    MxFun.addCommand("MxTest_FixedViewRange", MxTest_FixedViewRange);
}