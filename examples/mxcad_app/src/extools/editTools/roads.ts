import { McDb, McDbLine, McGeVector3d, MxCADUiPrPoint, MxCpp, McGePoint3d, McDbArc, McDbCurve, McObjectId, McCmColor, MxCADSelectionSet, MxCADResbuf, DxfCode, McDbLayerTableRecord } from "mxcad";
import { MxFun } from "mxdraw";

// 绘制道路
async function Mx_drawRoads() {
    const getStartPt = new MxCADUiPrPoint();
    getStartPt.setMessage("请设置道路起点");
    const startPt = await getStartPt.go();
    if (!startPt) return;

    let lastPoint: McGePoint3d = startPt.clone();
    // 设置道路上下偏移距离
    const offsetDist = 30;
    // 设置圆角半径
    const radius = 20;
    const mxcad = MxCpp.getCurrentMxCAD()
    const layerName = mxcad.getDatabase().getCurrentlyLayerName();
    while (true) {
        const getNextPt = new MxCADUiPrPoint();
        getNextPt.setMessage("请设置下一点");
        getNextPt.setBasePt(lastPoint);
        getNextPt.setUserDraw((pt, pw) => {
            const line = new McDbLine(lastPoint, pt);
            pw.drawMcDbEntity(line);
            const v = lastPoint.sub(pt).perpVector().normalize().mult(offsetDist);
            const pt1 = pt.clone().addvec(v);
            const pt2 = pt.clone().subvec(v)
            line.offsetCurves(offsetDist, pt1).forEach(item => {
                pw.drawMcDbEntity(item)
            })
            line.offsetCurves(offsetDist, pt2).forEach(item => {
                pw.drawMcDbEntity(item)
            })
        });
        const nextPt = await getNextPt.go();
        if (!nextPt) break;
        // 绘制道路
        const roads = new MxCADTestRoads();
        roads.startPt = lastPoint;
        roads.endPt = nextPt;
        roads.drawRoads();
        roads.radius = radius;
        lastPoint = nextPt.clone();
    };

    mxcad.getDatabase().setCurrentlyLayerName(layerName);
}

class MxCADTestRoads {
    public offsetDist: number = 30;
    public radius: number = 20;
    public startPt: McGePoint3d = new McGePoint3d();
    public endPt: McGePoint3d = new McGePoint3d();
    private mxcad = MxCpp.getCurrentMxCAD();
    private dTol: number = 0.0001;
    private setLayer = () => {
        const layerTable = this.mxcad.getDatabase().getLayerTable();
        if (!layerTable.has("ROAD_DOTE")) {
            const id = this.mxcad.addLayer("ROAD_DOTE");
            (id.getMcDbLayerTableRecord() as McDbLayerTableRecord).color = new McCmColor(255, 0, 0)
        }
        if (!layerTable.has("ROAD")) {
            const id = this.mxcad.addLayer("ROAD");
            (id.getMcDbLayerTableRecord() as McDbLayerTableRecord).color = new McCmColor(255, 255, 0)
        }
    }
    public drawRoads = () => {
        this.setLayer();
        const lineDote = new McDbLine(this.startPt, this.endPt);
        this.mxcad.getDatabase().setCurrentlyLayerName("ROAD_DOTE");
        const id = this.mxcad.drawEntity(lineDote);
        this.processingCross(id);
    }
    // 绘制偏移曲线
    private drawOffsetEntity = (entityArr: McDbCurve[], isDrawOffsetCurve: boolean = true): McDbCurve[] => {
        if (!entityArr.length) return [];
        const curveArr: McDbCurve[] = [];
        this.mxcad.getDatabase().setCurrentlyLayerName("ROAD");
        entityArr.forEach((entity: McDbCurve) => {
            const pt = entity.getPointAtDist(entity.getLength().val / 2).val;
            const v = entity.getEndPoint().val.sub(entity.getStartPoint().val).perpVector().normalize().mult(this.offsetDist);
            const pt1 = pt.clone().addvec(v);
            const pt2 = pt.clone().subvec(v)
            entity.offsetCurves(this.offsetDist, pt1).forEach(item => {
                curveArr.push(item as McDbCurve);
                if (isDrawOffsetCurve) this.mxcad.drawEntity(item as McDbCurve)
            })
            entity.offsetCurves(this.offsetDist, pt2).forEach(item => {
                curveArr.push(item as McDbCurve);
                if (isDrawOffsetCurve) this.mxcad.drawEntity(item as McDbCurve)
            });
        })
        return curveArr
    }
    // 处理圆角
    private processingCross(lineId: McObjectId) {
        const line = lineId.getMcDbEntity() as McDbLine;
        const startPt = line.startPoint;
        const endPt = line.endPoint;
        // 判断道路上有无相交或交叉的道路
        this.assessTheSituation(startPt, endPt, lineId)
    }
    // 处理道路相交圆角
    private processingRoundedCorners(line1: McDbLine, line2: McDbLine, radius: number, layerName: string, isDrawLine2: boolean = true): { curveArr: McDbCurve[], objId: McObjectId } {

        const obj = { curveArr: [new McDbCurve()], objId: new McObjectId() };
        const getVec = (line: McDbLine, pt: McGePoint3d): { v: McGeVector3d, newLine: McDbLine } => {
            const dist1 = pt.distanceTo(line.startPoint);
            const dist2 = pt.distanceTo(line.endPoint);
            let v, newLine
            if (dist1 > dist2) {
                v = line.endPoint.sub(line.startPoint);
                newLine = new McDbLine(pt, line.startPoint);
            } else {
                v = line.startPoint.sub(line.endPoint);
                newLine = new McDbLine(pt, line.endPoint);
            }
            return { v, newLine }
        }
        // 获取圆角起始点
        const pointArr = line1.IntersectWith(line2, McDb.Intersect.kExtendBoth);
        if (pointArr.length() != 1) return obj;
        const intersectPt = pointArr.at(0);
        const { v: v1, newLine: l1 } = getVec(line1, intersectPt);
        const { v: v2, newLine: l2 } = getVec(line2, intersectPt);
        const angle = v1.angleTo2(v2, McGeVector3d.kNegateZAxis);
        let b = radius * Math.sin(Math.PI / 2 - angle / 2) / Math.sin(angle / 2);
        if (b < 0) b = -b;
        const p1 = l1.getPointAtDist(b).val;
        const p2 = l2.getPointAtDist(b).val;
        // 获取圆角中点
        const l1_clone = l1.clone() as McDbLine;
        const l2_clone = l2.clone() as McDbLine;
        l1.startPoint = p1;
        l2.startPoint = p2;
        l1_clone.rotate(p1, Math.PI / 2);
        l2_clone.rotate(p2, Math.PI / 2);
        const pointsVal = l1_clone.IntersectWith(l2_clone, McDb.Intersect.kExtendBoth);
        if (!pointsVal.length()) return obj;
        const center = pointsVal.at(0);

        const line = new McDbLine(center, intersectPt);
        const midPt = line.getPointAtDist(radius).val;
        let arc = new McDbArc();
        arc.computeArc(p1.x, p1.y, midPt.x, midPt.y, p2.x, p2.y);//三点画圆弧

        line1.erase(); line2.erase();
        this.mxcad.getDatabase().setCurrentlyLayerName(layerName);
        this.mxcad.drawEntity(l1);
        this.mxcad.drawEntity(arc);
        if (!isDrawLine2) {
            l2.visible = false;
        };
        obj.objId = this.mxcad.drawEntity(l2);
        obj.curveArr = [l1, l2, arc];
        return obj
    }
    // 删除目标点周围的道路线
    private delectAllRoad(point: McGePoint3d, isDeleteAll: boolean = true, offsetCurve?: McDbCurve[]) {
        if (!isDeleteAll && !offsetCurve?.length) return;
        const v_x = McGeVector3d.kXAxis.clone().mult(this.offsetDist + this.radius);
        const v_y = McGeVector3d.kYAxis.clone().mult(this.offsetDist + this.radius);
        const pt1 = point.clone().addvec(v_x).addvec(v_y);
        const pt2 = point.clone().subvec(v_x).subvec(v_y);
        // 道路线
        const filter = new MxCADResbuf();
        filter.AddMcDbEntityTypes('LINE');
        filter.AddString('ROAD', 8);
        const ss = new MxCADSelectionSet();
        pt2.x > pt1.x ? ss.crossingSelect(pt2.x, pt2.y, pt1.x, pt1.y, filter) : ss.crossingSelect(pt1.x, pt1.y, pt2.x, pt2.y, filter);
        ss.forEach(objId => {
            if (isDeleteAll) {
                objId.erase();
            } else if(offsetCurve){
                const obj = objId.getMcDbEntity() as McDbLine;
                offsetCurve.forEach(curve => {
                    const pt1 = curve.getStartPoint().val;
                    const pt2 = curve.getEndPoint().val;
                    const dist1 = pt1.distanceTo(obj.getClosestPointTo(pt1, false).val);
                    const dist2 = pt2.distanceTo(obj.getClosestPointTo(pt2, false).val);
                    const midPt = curve.getPointAtDist(curve.getLength().val / 2).val
                    if (dist1 < this.dTol) {
                        const v = midPt.sub(pt1);
                        const v1 = obj.startPoint.sub(pt1);
                        const v2 = obj.endPoint.sub(pt1);
                        if (v1.angleTo1(v) < Math.PI / 2) {
                            obj.startPoint = pt1
                        }
                        if (v2.angleTo1(v) < Math.PI / 2) {
                            obj.endPoint = pt1;
                        }
                    } else if (dist2 < this.dTol) {
                        const v = midPt.sub(pt2);
                        const v1 = obj.startPoint.sub(pt2);
                        const v2 = obj.endPoint.sub(pt2);
                        if (v1.angleTo1(v) < Math.PI / 2) {
                            obj.startPoint = pt2;
                        }
                        if (v2.angleTo1(v) < Math.PI / 2) {
                            obj.endPoint = pt2;
                        }
                    }
                })
            }
        });
    }
    // 判断道路情况
    private assessTheSituation(pt1: McGePoint3d, pt2: McGePoint3d, lineId: McObjectId) {
        const v = pt2.sub(pt1).normalize().mult(pt1.distanceTo(pt2) / 5);
        const angle = v.angleTo1(McGeVector3d.kYAxis);
        if (angle < this.dTol || Math.abs(Math.PI - angle) < this.dTol || Math.abs(angle - Math.PI / 2) < this.dTol) {
            v.rotateBy(Math.PI / 12);
        }
        const _pt1 = pt1.clone().subvec(v);
        const _pt2 = pt2.clone().addvec(v);
        // 判断与中心线相交的线
        const filter = new MxCADResbuf();
        filter.AddString('ROAD_DOTE', 8);
        filter.AddMcDbEntityTypes('LINE');
        const ss = new MxCADSelectionSet();
        ss.crossingSelect(_pt1.x, _pt1.y, _pt2.x, _pt2.y, filter);
        const line = lineId.getMcDbEntity() as McDbLine;
        let num = 0;
        if (ss.count() < 1) return this.drawOffsetEntity([line]);
        // 相交直线数组
        const startPtArr: McDbLine[] = []
        const endPtArr: McDbLine[] = []
        const intersectPtArr: McDbLine[] = []
        ss.forEach(objId => {
            if (objId.id != lineId.id) {
                const obj = objId.getMcDbEntity() as McDbLine;
                const pointArr = obj.IntersectWith(line, McDb.Intersect.kExtendBoth);
                if (pointArr.length() === 1) {
                    const intersectPt = pointArr.at(0);
                    const dist1OfIntersetPt = intersectPt.distanceTo(line.getClosestPointTo(intersectPt, false).val);
                    const dist2OfIntersetPt = intersectPt.distanceTo(obj.getClosestPointTo(intersectPt, false).val);
                    if (dist1OfIntersetPt < this.dTol && dist2OfIntersetPt < this.dTol) {
                        num += 1;
                        const dist1 = line.startPoint.distanceTo(intersectPt);
                        const dist2 = line.endPoint.distanceTo(intersectPt);
                        const _dist1 = obj.startPoint.distanceTo(intersectPt);
                        const _dist2 = obj.endPoint.distanceTo(intersectPt);
                        if ((dist1 > this.offsetDist && dist2 > this.offsetDist) || (_dist1 > this.offsetDist && _dist2 > this.offsetDist)) {
                            intersectPtArr.push(obj)
                        } else if (dist1 <= this.offsetDist && (_dist1 <= this.offsetDist || _dist2 <= this.offsetDist)) {
                            startPtArr.push(obj)
                        } else if (dist2 <= this.offsetDist && (_dist1 <= this.offsetDist || _dist2 <= this.offsetDist)) {
                            endPtArr.push(obj)
                        }
                    }

                }
            }
        });
        if (!num) this.drawOffsetEntity([line]);

        if (startPtArr.length && !intersectPtArr.length && !endPtArr.length) {
            // 只有开始点有相交道路
            startPtArr.forEach(_line => {
                this.handleTheBeginningAndEnd(_line, line, line.startPoint, 'start')
            })
        };
        if (endPtArr.length && !intersectPtArr.length && !startPtArr.length) {
            // 只有结束点有相交道路
            endPtArr.forEach(_line => {
                this.handleTheBeginningAndEnd(_line, line, line.endPoint, 'end')
            })
        }
        if (endPtArr.length === 1 && !intersectPtArr.length && startPtArr.length === 1) {
            // 首尾均有相交道路
            const obj = this.handleTheBeginningAndEnd(startPtArr[0], line, line.startPoint, 'start')
            setTimeout(() => {
                if (!obj.objId) return;
                const newLine = obj.objId.getMcDbEntity() as McDbLine;
                this.handleTheBeginningAndEnd(endPtArr[0], newLine, line.endPoint)
                obj.objId.erase();
            }, 10)
        }
        if (intersectPtArr.length && !startPtArr.length && !endPtArr.length) {
            this.processingCrossingRoad(intersectPtArr, line);
        }
        if (intersectPtArr.length && startPtArr.length && !endPtArr.length) {
            let newLine = new McDbLine();
            startPtArr.forEach(_line => {
                const obj = this.processingRoundedCorners(_line, line, this.radius + this.offsetDist, 'ROAD_DOTE');
                const offsetCurve = this.drawOffsetEntity([obj.curveArr[2]]);
                if (_line.getxData().AtString(0).val === 'isCrossingLine') {
                    this.delectAllRoad(line.startPoint, false, offsetCurve);
                } else {
                    this.drawOffsetEntity([obj.curveArr[0]]);
                    this.delectAllRoad(line.startPoint);
                }
                newLine = obj.objId.getMcDbEntity() as McDbLine;
                newLine.setxData(new MxCADResbuf([{ type: DxfCode.kExDataName, val: "isCrossingLine" }, { type: DxfCode.kString, val: "1" }]))
            })
            setTimeout(() => {
                this.processingCrossingRoad(intersectPtArr, newLine)
            }, 10)
        }
        if (intersectPtArr.length && !startPtArr.length && endPtArr.length) {
            let newLine = new McDbLine();
            endPtArr.forEach(_line => {
                const obj = this.processingRoundedCorners(_line, line, this.radius + this.offsetDist, 'ROAD_DOTE');
                const offsetCurve = this.drawOffsetEntity([obj.curveArr[2]]);
                if (_line.getxData().AtString(0).val === 'isCrossingLine') {
                    this.delectAllRoad(line.startPoint, false, offsetCurve);
                } else {
                    this.drawOffsetEntity([obj.curveArr[0]]);
                    this.delectAllRoad(line.startPoint);
                }
                newLine = obj.objId.getMcDbEntity() as McDbLine;
                newLine.setxData(new MxCADResbuf([{ type: DxfCode.kExDataName, val: "isCrossingLine" }, { type: DxfCode.kString, val: "1" }]))
            })
            setTimeout(() => {
                this.processingCrossingRoad(intersectPtArr, newLine)
            }, 10)
        }
        if (intersectPtArr.length && startPtArr.length && endPtArr.length) {
            // 首尾均有相交道路
            const obj = this.handleTheBeginningAndEnd(startPtArr[0], line, line.startPoint)
            setTimeout(() => {
                if (!obj.objId) return;
                const newLine = obj.objId.getMcDbEntity() as McDbLine;
                const _obj = this.handleTheBeginningAndEnd(endPtArr[0], newLine, line.endPoint)
                obj.objId.erase();
                setTimeout(() => {
                    const _newLine = _obj.objId.getMcDbEntity() as McDbLine;
                    this.processingCrossingRoad(intersectPtArr, _newLine);
                })
            }, 10)
        }
    }

    // 单独处理交叉情况下的道路
    private crossRoundedCorners(crossBaseLine: McDbLine, crossLines: McDbLine[], radius: number, crossPt: McGePoint3d): McDbCurve[] {
        const curveArr: McDbCurve[] = [];
        crossLines.forEach(line => {
            const pointArr = crossBaseLine.IntersectWith(line, McDb.Intersect.kOnBothOperands);
            if (pointArr.length() > 0) {
                const pt = pointArr.at(0);
                const v = pt.sub(crossPt);
                const v_start = crossBaseLine.startPoint.sub(crossPt);
                const v_end = crossBaseLine.endPoint.sub(crossPt);
                const angle1 = v.angleTo1(v_start);
                const angle2 = v.angleTo1(v_end);
                let line1 = new McDbLine();
                if (angle1 <= Math.PI / 2) line1 = new McDbLine(crossBaseLine.startPoint, pt);
                if (angle2 <= Math.PI / 2) line1 = new McDbLine(crossBaseLine.endPoint, pt);
                const obj = this.processingRoundedCorners(line1, line, radius, "ROAD", false);
                curveArr.push(obj.curveArr[2])
            }
        });
        return curveArr
    }
    // 处理道路线交叉情况并绘制新道路线
    private getNewRoads(point: McGePoint3d, v: McGeVector3d, line: McDbLine): McDbCurve[] {
        const v_x = McGeVector3d.kXAxis.clone().mult(this.offsetDist + this.radius);
        const v_y = McGeVector3d.kYAxis.clone().mult(this.offsetDist + this.radius);
        const pt1 = point.clone().addvec(v_x).addvec(v_y);
        const pt2 = point.clone().subvec(v_x).subvec(v_y);
        // 获取道路线
        const _filter = new MxCADResbuf();
        _filter.AddMcDbEntityTypes('LINE');
        _filter.AddString('ROAD', 8);
        const _ss = new MxCADSelectionSet();
        _ss.crossingSelect(pt2.x, pt2.y, pt1.x, pt1.y, _filter);
        let crossBaseLine = new McDbLine(), crossLines: McDbLine[] = [], crossPt: McGePoint3d = new McGePoint3d();

        _ss.forEach(objId => {
            const obj = objId.getMcDbEntity() as McDbLine;
            const pt = obj.getClosestPointTo(point, false).val;
            const _v = pt.sub(point);
            const angle = _v.angleTo1(v);// v:目标线向量
            if (angle < Math.PI / 2) {
                crossBaseLine = obj;
                crossLines = this.drawOffsetEntity([line], false) as McDbLine[];
                crossPt = line.startPoint;
                obj.highlight(true);
            }
        });
        const curveArr = this.crossRoundedCorners(crossBaseLine, crossLines, this.radius, crossPt);
        crossBaseLine.erase();
        return curveArr
    }
    // 处理首尾端点有相交道路的情况
    private handleTheBeginningAndEnd(_line: McDbLine, line: McDbLine, point: McGePoint3d, flag?: string): { curveArr: McDbCurve[], objId: McObjectId } {
        const obj = this.processingRoundedCorners(_line, line, this.radius + this.offsetDist, 'ROAD_DOTE');
        if (_line.getxData().AtString(0).val === 'isCrossingLine') {
            if (flag && flag == 'start') this.drawOffsetEntity([obj.curveArr[1]]);
            if (flag && flag === 'end') this.drawOffsetEntity([obj.curveArr[0]]);
            const offsetCurve = this.drawOffsetEntity([obj.curveArr[2]]);
            this.delectAllRoad(point, false, offsetCurve);
            return obj
        } else {
            this.drawOffsetEntity(obj.curveArr);
            this.delectAllRoad(point);
            return obj
        };
    }
    // 处理交叉道路
    private processingCrossingRoad(intersectPtArr: McDbCurve[], line: McDbLine) {
        const getSingleRoadPt = (curveArr: McDbCurve[], intersectPt: McGePoint3d, v: McGeVector3d) => {
            curveArr.forEach((curve) => {
                const startPt = curve.getStartPoint().val;
                const endPt = curve.getEndPoint().val;
                const v1 = startPt.sub(intersectPt);
                const v2 = endPt.sub(intersectPt)
                const angle1 = v1.angleTo1(v)
                const angle2 = v2.angleTo1(v)
                if (angle1 < angle2) {
                    putInArr([startPt], v)
                } else {
                    putInArr([endPt], v)
                }
            })
        }
        const putInArr = (pointArr: McGePoint3d[], v: McGeVector3d) => {
            if (!linePtArr1.length) {
                linePtArr1.push(...pointArr)
            } else {
                const _v = pointArr[0].sub(linePtArr1[0]);
                if (_v.angleTo1(v) < this.dTol || Math.abs(Math.PI - _v.angleTo1(v)) < this.dTol) {
                    linePtArr1.push(...pointArr);
                } else {
                    linePtArr2.push(...pointArr);
                }
            }
        }
        const lineCurves = this.drawOffsetEntity([line], false);
        const vec = line.endPoint.sub(line.startPoint);
        const linePtArr1: McGePoint3d[] = [];
        const linePtArr2: McGePoint3d[] = [];
        let flag: string[] = [];
        line.setxData(new MxCADResbuf([{ type: DxfCode.kExDataName, val: "isCrossingLine" }, { type: DxfCode.kString, val: "1" }]));
        intersectPtArr.forEach(obj => {
            obj.setxData(new MxCADResbuf([{ type: DxfCode.kExDataName, val: "isCrossingLine" }, { type: DxfCode.kString, val: "1" }]))
            const intersectPt = obj.IntersectWith(line, McDb.Intersect.kExtendBoth).at(0);
            const v_start = line.startPoint.sub(intersectPt);
            const v_end = line.endPoint.sub(intersectPt);
            const line_start = new McDbLine(intersectPt, line.startPoint);
            const line_end = new McDbLine(intersectPt, line.endPoint);
            const curveArr1 = intersectPt.distanceTo(line.startPoint) > this.dTol ? this.getNewRoads(intersectPt, v_start, line_start) : [];
            const curveArr2 = intersectPt.distanceTo(line.endPoint) > this.dTol ? this.getNewRoads(intersectPt, v_end, line_end) : [];
            if (curveArr1.length && curveArr2.length) {
                curveArr1.forEach((item) => {
                    const startPt = item.getStartPoint().val;
                    const endPt = item.getEndPoint().val;
                    const dist1 = startPt.distanceTo(line.getClosestPointTo(startPt, true).val);
                    const dist2 = endPt.distanceTo(line.getClosestPointTo(endPt, true).val);
                    curveArr2.forEach(i => {
                        const _startPt = i.getStartPoint().val;
                        const _dist1 = _startPt.distanceTo(line.getClosestPointTo(_startPt, true).val);
                        if (Math.abs(_dist1 - this.offsetDist) < this.dTol) {
                            if (Math.abs(dist1 - this.offsetDist) < this.dTol) {
                                const v1 = _startPt.sub(startPt);
                                if (v1.angleTo1(vec) < this.dTol || Math.abs(Math.PI - v1.angleTo1(vec)) < this.dTol) {
                                    putInArr([_startPt, startPt], vec)
                                }
                            }
                            if (Math.abs(dist2 - this.offsetDist) < this.dTol) {
                                const _v1 = _startPt.sub(endPt);
                                if (_v1.angleTo1(vec) < this.dTol || Math.abs(Math.PI - _v1.angleTo1(vec)) < this.dTol) {
                                    putInArr([_startPt, endPt], vec)
                                }
                            }
                        }

                        const _endPt = i.getEndPoint().val;
                        const _dist2 = _endPt.distanceTo(line.getClosestPointTo(_endPt, true).val);
                        if (Math.abs(_dist2 - this.offsetDist) < this.dTol) {
                            if (Math.abs(dist1 - this.offsetDist) < this.dTol) {
                                const v2 = _endPt.sub(startPt);
                                if (v2.angleTo1(vec) < this.dTol || Math.abs(Math.PI - v2.angleTo1(vec)) < this.dTol) {
                                    putInArr([_endPt, startPt], vec)
                                }
                            }
                            if (Math.abs(dist2 - this.offsetDist) < this.dTol) {
                                const _v2 = _endPt.sub(endPt);
                                if (_v2.angleTo1(vec) < this.dTol || Math.abs(Math.PI - _v2.angleTo1(vec)) < this.dTol) {
                                    putInArr([_endPt, endPt], vec)
                                }
                            }

                        }

                    })
                })
            }
            if (curveArr1.length && !curveArr2.length) {
                getSingleRoadPt(curveArr1, intersectPt, v_start);
                flag.push('end');
            }
            if (!curveArr1.length && curveArr2.length) {
                getSingleRoadPt(curveArr2, intersectPt, v_end);
                flag.push('start');
            }
        })
        if (!linePtArr1.length || !linePtArr2.length) return;
        const vec1 = linePtArr1[0].sub(lineCurves[0].getStartPoint().val);
        if (vec.angleTo1(vec1) < this.dTol || Math.abs(Math.PI - vec.angleTo1(vec1)) < this.dTol) {
            this.countCrossRoadPt(lineCurves[0], linePtArr1, flag);
            this.countCrossRoadPt(lineCurves[1], linePtArr2, flag);
        } else {
            this.countCrossRoadPt(lineCurves[1], linePtArr1, flag);
            this.countCrossRoadPt(lineCurves[0], linePtArr2, flag);
        }
        this.recombinationPtArr(linePtArr1).forEach((pt, index) => {
            if (index % 2 === 0) {
                const line = new McDbLine(pt, linePtArr1[index + 1]);
                this.mxcad.drawEntity(line);
            };
        })
        this.recombinationPtArr(linePtArr2).forEach((pt, index) => {
            if (index % 2 === 0) {
                const line = new McDbLine(pt, linePtArr2[index + 1]);
                this.mxcad.drawEntity(line);
            }
        })
    }
    // 计算道路交叉端点
    private countCrossRoadPt(lineCurve: McDbCurve, linePtArr: McGePoint3d[], flag: string[]) {
        const startPt = lineCurve.getStartPoint().val;
        const endPt = lineCurve.getEndPoint().val;
        const dist1 = startPt.distanceTo(linePtArr[0]);
        const dist2 = startPt.distanceTo(linePtArr[linePtArr.length - 1]);
        if (dist1 < dist2) {
            if (!flag.length || !flag.includes('start')) linePtArr.unshift(startPt);
            if (!flag.length || !flag.includes('end')) linePtArr.push(endPt)
        } else {
            if (!flag.length || !flag.includes('start')) linePtArr.push(startPt);
            if (!flag.length || !flag.includes('end')) linePtArr.unshift(endPt)
        }
    }
    // 重组点位数组
    private recombinationPtArr(pointArr: McGePoint3d[]): McGePoint3d[] {
        pointArr.sort((pt1, pt2) => {
            return pt1.distanceTo(pointArr[0]) - pt2.distanceTo(pointArr[0]); // 按 value 的值升序排序
        });
        return pointArr
    }
}
export function init() {
    MxFun.addCommand('Mx_drawRoads', Mx_drawRoads)
}