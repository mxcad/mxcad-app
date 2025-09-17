import { McDbLine, McGePoint3d, McDbPolyline, McDbText, McGeVector3d, MxCADUiPrKeyWord, MxCADUiPrPoint, MxCpp, McDb } from "mxcad";
import { MxFun } from "mxdraw";

// 插入图框
async function Mx_InsterFrame() {
    const getFrameDire = new MxCADUiPrKeyWord();
    getFrameDire.setMessage("请设置图框方向<N>");
    getFrameDire.setKeyWords(`[横向(T)/纵向(P)]`);
    let direct = await getFrameDire.go();
    switch (direct) {
        case 'T':
            direct = FrameDirect.Transverse;
            break;
        case 'P':
            direct = FrameDirect.Portrait;
            break;
        default:
            direct = FrameDirect.Transverse;
            break;
    }

    const frame = new MxTestFrame();
    frame.direct = direct;

    const getFrameSize = new MxCADUiPrKeyWord();
    getFrameSize.setMessage("请设置图框尺寸<4>");
    getFrameSize.setKeyWords("[A0(0)/A1(1)/A2(2)/A3(3)/A4(4)]");
    let size = await getFrameSize.go();
    if (!size) size = "4";
    frame.size = size;
    const getPos = new MxCADUiPrPoint();
    getPos.setMessage("请设置图框位置");
    let pos = await getPos.go();
    if (!pos) return;
    frame.framePos = pos;
    frame.tableScale = '1:10';
    frame.draw();
}

enum FrameDirect {
    Transverse = 'T',
    Portrait = 'P'
}

class MxTestFrame {
    // 图框尺寸
    public size = "4";
    // 图框方向
    public direct: string = FrameDirect.Transverse;
    // 表格比例
    private scale = 1;
    // 表格数据
    public tableData = [
        {
            width: 18,
            data: [
                {
                    rowNum: 1,
                    value:'',
                    label: ""
                },
                {
                    label: "比例",
                    value: `1:${this.scale}`,
                    rowNum: 1,
                },
                {
                    label: "尺寸",
                    value: `A${this.size}`,
                    rowNum: 1,
                }
            ]
        },
        {
            width: 30,
            data: [
                {
                    label: '日期',
                    rowNum: 1,
                    value:''
                },
                {
                    label: '审核',
                    rowNum: 1,
                },
                {
                    label: '绘制',
                    rowNum: 1,
                    value:''
                }
            ]
        },
        {
            width: 45,
            data: [
                {
                    label: '图号',
                    rowNum: 1,
                    value:''
                },
                {
                    label: '图名',
                    rowNum: 2,
                    value:''
                }
            ]
        }
    ];
    // 图框位置
    public framePos = new McGePoint3d();
    // 表格行数
    public rowNum = 3;
    // 表格label宽度
    public lableWidth = 18;
    // 表格高度
    public lableHeight = 6;
    // cell绘制基点
    private _pos = new McGePoint3d();
    public set tableScale(value: string) {
        this.scale = Number(value.split(':')[1]);
        this.tableData.forEach(item=>{
            item.data.forEach(i=>{
                if(i.label === '比例') i.value = `1:${this.scale}`;
            })
        })
    }
    public get tableScale(): string {
        return `1:${this.scale}`
    }
    // 绘制图框外边框
    private drawFrameOutside = () => {
        const mxcad = MxCpp.getCurrentMxCAD();
        const frameObj = this.getFrameSpecifications(this.size, this.direct);
        if (!frameObj) return;
        // 绘制图框 长、宽
        const w = McGeVector3d.kYAxis.clone().mult(frameObj.height);
        const h = McGeVector3d.kXAxis.clone().negate().mult(frameObj.width);
        const point1 = this.framePos.clone().addvec(w);
        const point2 = this.framePos.clone().addvec(h);
        const point3 = this.framePos.clone().addvec(w).addvec(h);
        const pl = new McDbPolyline();
        pl.addVertexAt(this.framePos);
        pl.addVertexAt(point1);
        pl.addVertexAt(point3);
        pl.addVertexAt(point2);
        pl.isClosed = true;
        mxcad.drawEntity(pl);

        const midPt = this.framePos.clone().addvec(point3.sub(this.framePos).mult(1 / 2));
        const dist = 5*this.scale;
        let tablePl = new McDbPolyline();
        pl.offsetCurves(dist, midPt).forEach(obj => {
            tablePl = obj.clone() as McDbPolyline;
            mxcad.drawEntity(obj as McDbPolyline);
        });
        this._pos = tablePl.getPointAt(0).val;
    }
    // 绘制表格内容
    private drawContent = () => {
        const mxcad = MxCpp.getCurrentMxCAD();
        const totalWidth = this.tableData.reduce((accumulator, currentItem) => {
            return accumulator + currentItem.width;
        }, 0) * this.scale;
        const tableVecX = McGeVector3d.kXAxis.clone().negate().mult(this.tableData.length * this.lableWidth + totalWidth)
        const tableVecY = McGeVector3d.kYAxis.clone().mult(this.lableHeight * this.rowNum);

        const tablePt2 = this._pos.clone().addvec(tableVecY);
        const tablePt3 = this._pos.clone().addvec(tableVecX).addvec(tableVecY);
        const lineX = new McDbLine(tablePt2, tablePt3);
        mxcad.drawEntity(lineX);

        let position = this._pos.clone();
        this.tableData.forEach(item => {
            const vecX = McGeVector3d.kXAxis.clone().negate().mult(item.width * this.scale);
            const vecCellX = McGeVector3d.kXAxis.clone().negate().mult(this.lableWidth);
            let num = 0;
            const cellStartPos = position.clone();
            item.data.forEach((cell, ind) => {
                num += cell.rowNum;
                const vecY = McGeVector3d.kYAxis.clone().mult(this.lableHeight * num);

                const pointX = cellStartPos.clone().addvec(vecX);
                const pointY = cellStartPos.clone().addvec(vecY);
                const pointXY = cellStartPos.clone().addvec(vecY).addvec(vecX);

                const lineY = new McDbLine(pointX, pointXY);
                const lineX = new McDbLine(pointY, pointXY);

                // 表格value
                if (cell.value) {
                    const midPt = lineX.getPointAtDist(lineX.getLength().val / 2).val
                    const text = this.getText(midPt, cell.value, this.lableHeight, cell.rowNum);
                    mxcad.drawEntity(text);
                }

                const _ptXY = pointXY.clone().addvec(vecCellX);
                const _ptX = pointX.clone().addvec(vecCellX);
                if (ind === 0) {
                    position = _ptX.clone();
                }
                const cellX = new McDbLine(_ptXY, pointXY);
                const cellY = new McDbLine(_ptXY, _ptX);
                if (ind < item.data.length - 1) {
                    mxcad.drawEntity(lineX);
                    mxcad.drawEntity(cellX);
                }
                if (ind === item.data.length - 1) {
                    mxcad.drawEntity(lineY);
                    mxcad.drawEntity(cellY);
                }

                // 表格key
                if (cell.label) {
                    const midPt = cellX.getPointAtDist(cellX.getLength().val / 2).val
                    const text = this.getText(midPt, cell.label, this.lableHeight, cell.rowNum);
                    mxcad.drawEntity(text)
                }
            })
        });
    };
    // 绘制文字
    private getText = (pos: McGePoint3d, str: string, lableHeight: number, num: number) => {
        const text = new McDbText();
        text.textString = str;
        text.height = lableHeight * (3 / 5);
        text.position = text.alignmentPoint = pos.clone().subvec(McGeVector3d.kYAxis.clone().mult(num * lableHeight / 2 + text.height * (1 / 2)));
        text.horizontalMode = McDb.TextHorzMode.kTextCenter;
        return text
    };
    // 获取图框尺寸
    private getFrameSpecifications = (param:string, direct:string) => {
        const frameObj = { width: 0, length: 0 };
        switch (param) {
            case "0":
                frameObj.width = 841;
                frameObj.length = 1189;
                break;
            case "1":
                frameObj.width = 594;
                frameObj.length = 841;
                break;
            case "2":
                frameObj.width = 420;
                frameObj.length = 594;
                break;
            case "3":
                frameObj.width = 297;
                frameObj.length = 420;
                break;
            case "4":
                frameObj.width = 210;
                frameObj.length = 297;
                break;
        }
        if (direct === "P") {
            // 纵向
            return { height: frameObj.length* this.scale, width: frameObj.width* this.scale }
        } else if (direct === "T") {
            // 横向
            return { height: frameObj.width * this.scale, width: frameObj.length * this.scale }
        }
    }
    // 绘制图框
    public draw = () => {
        if (this.direct === FrameDirect.Transverse) {
            this.tableData.push({
                width: 55,
                data: [
                    {
                        label: "建设单位",
                        rowNum: 1
                    },
                    {
                        label: "设计单位",
                        rowNum: 1,
                    },
                    {
                        label: "工程名称",
                        rowNum: 1,
                    }
                ]
            });
        };
        this.lableWidth = this.lableWidth * this.scale;
        this.lableHeight = this.lableHeight * this.scale;
        this.drawFrameOutside();
        this.drawContent();
    };
}


export function init() {
    MxFun.addCommand("Mx_InsterFrame", Mx_InsterFrame);
} 