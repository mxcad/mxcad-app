import { DxfCode, McDb, McDbBlockReference, McDbBlockTableRecord, McDbCurve, McDbLine, McDbPolyline, McGeBound, McGeLongArray, McGePoint3d, McObjectId, MxCADResbuf, MxCADSelectionSet, MxCADUiPrEntity, MxCADUiPrPoint, MxCADUtility, MxCpp } from "mxcad";
import { DynamicInputType, McGiWorldDraw, McGiWorldDrawType, MxDbEntity, MxDbHatch, MxFun } from "mxdraw";
import { Vector3 } from "three";
import { Mx_GetTable, Mx_EditTable } from './extractForm'
import { McGePoint3dToString } from "../pluginDemo/database";

const color = 0x003244;//初始填充颜色
const activeColor = 0xFF0000;//悬停填充颜色

// 设置自定义矩形实体
class MxDbTestReact extends MxDbEntity {
  /** 构成多边形的顶点集合 */
  public points: Array<THREE.Vector3> = []
  public isFill: boolean = false
  public fillColor: number | string | THREE.Color = 0x663244
  public fillOpacity: number = 0.7

  public getTypeName(): string {
    return 'MxDbTestReact'
  }

  public create(): MxDbEntity {
    return new MxDbTestReact()
  }

  public worldDraw(pWorldDraw: McGiWorldDraw): void {
    if (this.points.length < 3) {
      if (this.points.length == 2) {
        pWorldDraw.drawLine(this.points[0], this.points[1])
      }
      return
    }

    let pt1 = this.points[0];
    let iCount = this.points.length
    for (let i = 1; i < iCount; i++) {
      let pt2 = this.points[i]
      pWorldDraw.drawLine(pt1, pt2)
      pt1 = pt2
    }
    pWorldDraw.drawLine(pt1, this.points[0]);

    if (pWorldDraw.getType() == McGiWorldDrawType.kWorldDraw && this.isFill) {
      pWorldDraw.setColor(this.fillColor)
      pWorldDraw.setOpacity(this.fillOpacity)
      pWorldDraw.setRenderOrder(pWorldDraw.getRenderOrder() - 1)
      const mxDbHatch = new MxDbHatch()
      mxDbHatch.points = this.points
      mxDbHatch.worldDraw(pWorldDraw)
    }
  }

  public getGripPoints(): Array<THREE.Vector3> {
    return this.points
  }

  public moveGripPointsAt(index: number, offset: THREE.Vector3): boolean {
    if (index >= this.points.length) {
      return false
    }
    this.points[index].add(offset)
    return true
  }

  public dwgIn(obj: any): boolean {
    this.onDwgIn(obj)

    let ary: THREE.Vector3[] = obj.points
    this.points = []
    ary.forEach(val => {
      this.points.push(new THREE.Vector3(val.x, val.y, val.z))
    })

    this.dwgInHelp(obj, ['isFill', 'fillColor', 'fillOpacity'])

    return true
  }

  public dwgOut(obj: any): object {
    this.onDwgOut(obj)
    obj.points = this.points

    this.dwgOutHelp(obj, ['isFill', 'fillColor', 'fillOpacity'])
    return obj
  }

  /**
   * 添加构成多边形的点
   * @param pt 位置坐标
   *  */
  public addPoint(pt: THREE.Vector3): void {
    this.points.push(pt.clone())
  }
  /**
   * 获取构成多边形的顶点集合
   *  */
  public getPoints(): Array<THREE.Vector3> {
    return this.points
  }
  /**
   * 清空构成多边形的顶点集合
   *  */
  public clearPoint(): void {
    this.points = []
  }
}

// 节流
function throttle<T extends (...args: any[]) => void>(
  fn: T,
  delay: number
): (this: ThisParameterType<T>, ...args: Parameters<T>) => void {
  let last = 0;
  return function (this: ThisParameterType<T>, ...args: Parameters<T>) {
    const now = Date.now();
    if (now - last >= delay) {
      fn.apply(this, args);
      last = now;
    }
  };
}

let num = 0;
// 悬停变色
export function Mx_ReactChangeColor() {
  const mxcad = MxCpp.getCurrentMxCAD();
  const canvas = document.getElementById("myCanvas");
  // 修改实体颜色
  const changeMxEntityColor = (pt: Vector3) => {
    const mxdraw = MxFun.getCurrentDraw();
    const allEntity = mxdraw.getAllMxEntity();
    const entity = mxdraw.findMxEntityAtPoint(pt);
    if (!allEntity.length) return;
    allEntity.forEach(item => {
      if (item.getTypeName() === 'MxDbTestReact') {
        if (entity.includes(item)) {
          (item as MxDbTestReact).fillColor = activeColor;
        } else {
          (item as MxDbTestReact).fillColor = color;
        }
        item.setNeedUpdateDisplay(true);
      }
    });
    mxcad.updateDisplay();
  }
  // 添加鼠标移动监听事件
  if (!num) canvas?.addEventListener("mousemove", throttle((touch: MouseEvent) => {
    const pt = mxcad.mxdraw.viewCoord2Cad(touch.clientX, touch.clientY, 0);
    changeMxEntityColor(pt)
  }, 100));

  mxcad.newFile();

  const react = new MxDbTestReact();
  react.addPoint(new THREE.Vector3(1000, 1000));
  react.addPoint(new THREE.Vector3(1000, 3000));
  react.addPoint(new THREE.Vector3(3000, 3000));
  react.addPoint(new THREE.Vector3(3000, 1000));
  react.isFill = true;
  react.fillColor = color;
  react.fillOpacity = 0.5;
  MxFun.getCurrentDraw().addMxEntity(react);
  num += 1;
}

// 查找多边形区域内实体
async function Mx_Test_FindPolygonEntitys() {
  // 选择PL线，得到pl线据区域内的对象。
  let retIds = await MxCADUtility.selectEnt("选择PL线", new MxCADResbuf([DxfCode.kEntityType, "LWPOLYLINE"]));
  if (retIds.length == 0) {
    return;
  }
  let id = retIds[0];
  let ent = id.getMcDbEntity();
  if (ent && ent instanceof McDbPolyline) {
    let pl: McDbPolyline = ent;

    // 得到pl线的最小长矩形外包。
    let bound = pl.getBoundingBox();
    if (!bound.ret) return;

    // 得到pl线的外包边界线点.
    let aryPoints = pl.getSamplePoints(0.1).GetPoints();
    if (aryPoints.length() < 3) return;

    let aryIds: McObjectId[] = [];
    let ss = new MxCADSelectionSet();

    // 得到矩形范围内所有对象.
    ss.crossingSelect(bound.minPt.x, bound.minPt.y, bound.maxPt.x, bound.maxPt.y);
    ss.forEach((entid) => {
      if (entid.id == id.id) return;
      let findEnt = entid.getMcDbEntity();
      if (findEnt) {
        let entBound = findEnt.getBoundingBox();
        if (!entBound.ret) return;

        // 判断该对象，是否在pl线的外包边界区域内。
        let ptMidPt = entBound.minPt.clone().addvec(entBound.maxPt.sub(entBound.minPt).mult(0.5));

        // 判断该对象，是否在pl线的外包边界区域内。
        if (MxCADUtility.pointInPolygon(aryPoints, ptMidPt.x, ptMidPt.y)) {
          // 找到一个对象。
          aryIds.push(entid);
        }
      }
    })
    console.log(aryIds);
  }
}

// 添加到当前选择
export async function MxTest_TestAddCurrentSelect() {
    let mxcad = MxCpp.getCurrentMxCAD();
    let getPoint = new MxCADUiPrPoint();
    let pt1 = await getPoint.go();
    if (pt1 == null) return;

    getPoint.setBasePt(pt1);
    let pt2 = await getPoint.go();
    if (pt2 == null) return;

    let id = mxcad.drawLine(pt1.x, pt1.y, pt2.x, pt2.y);
    mxcad.addCurrentSelect(id);
}

// 交互选择实体
async function MxTest_SelectEntity() {
    let getEnt = new MxCADUiPrEntity();
    getEnt.setMessage("select entity:");
    let id = await getEnt.go();
    let ent = id.getMcDbEntity();
    if (ent === null) return;

    console.log("ent.objectName",ent.objectName);
    if (ent instanceof McDbBlockReference) {
        let blkRef: McDbBlockReference = ent;
        let retExplode: MxCADResbuf = blkRef.explode();
        if (retExplode.GetCount() == 0) return;
        let iExplodeConut = retExplode.GetCount();
        for (let j = 0; j < iExplodeConut; j++) {
            let tmpobj = retExplode.AtObject(j).val;
            if(tmpobj instanceof McDbPolyline){
                let polyline:McDbPolyline = tmpobj;
                let num = polyline.numVerts();
                for (let i = 0; i < num; i++) {
                  let pt = polyline.getPointAt(i);
                  let bulge = polyline.getBulgeAt(i);
                  console.log("polyline.pt" + i + ":" + McGePoint3dToString(pt.val));
                  console.log("polyline.bulge" + i + ":" + bulge);
                }
            }
        }
    }
    else if(ent instanceof McDbPolyline){
        let polyline:McDbPolyline = ent;
        let num = polyline.numVerts();
        for (let i = 0; i < num; i++) {
          let pt = polyline.getPointAt(i);
          let bulge = polyline.getBulgeAt(i);
          console.log("polyline.pt" + i + ":" + McGePoint3dToString(pt.val));
          console.log("polyline.bulge" + i + ":" + bulge);
        }
    }
}

// 计算交点
async function Mx_Test_IntersectWith() {

    let mxcad = MxCpp.getCurrentMxCAD();
    const getPoint = new MxCADUiPrPoint();
    getPoint.setMessage("指定第一点:");
    let pt1 = await getPoint.go();
    if (!pt1) return;
    getPoint.setMessage("指定第二点:");
    getPoint.setBasePt(pt1);
    let pt2 = await getPoint.go();
    if (!pt2) return;

    // 通过两点构造一个搜索矩形范围.
    let vec = pt2.sub(pt1);
    vec.rotateBy(Math.PI * 0.5).normalize().mult(MxFun.screenCoordLong2Doc(10));
    let p1 = pt1.clone().addvec(vec);
    let p2 = pt1.clone().subvec(vec);
    let p3 = pt2.clone().addvec(vec);
    let p4 = pt2.clone().subvec(vec);

    let bound = new McGeBound([p1, p2, p3, p4]);
    let minPt = bound.minPoint;
    let maxPt = bound.maxPoint;
    let ss = new MxCADSelectionSet();

    // 根据搜索框，选择框内的对象。
    ss.crossingSelect(minPt.x, minPt.y, maxPt.x, maxPt.y,
        new MxCADResbuf([DxfCode.kEntityType, "LINE,ARC,CIRCLE,LWPOLYLINE"]));

    let dR = MxFun.screenCoordLong2Doc(5);
    let line = new McDbLine(pt1, pt2);
    ss.forEach(id => {
        let ent = id.getMcDbEntity() as McDbCurve;
        // 与直线求交点 。
        let points = ent.IntersectWith(line, McDb.Intersect.kOnBothOperands);
        if (points.length() != 0) {
            let inpt = points.at(0);
            mxcad.drawCircle(inpt.x, inpt.y, dR);
        }
    })

}

export function init() {
  MxFun.addCommand("Mx_ReactChangeColor", Mx_ReactChangeColor);
  MxFun.addCommand("Mx_TestGetTable", Mx_GetTable);
  MxFun.addCommand("Mx_Test_FindPolygonEntitys", Mx_Test_FindPolygonEntitys);
  MxFun.addCommand("MxTest_TestAddCurrentSelect", MxTest_TestAddCurrentSelect);
  MxFun.addCommand("MxTest_SelectEntity", MxTest_SelectEntity);
  MxFun.addCommand("Mx_Test_IntersectWith", Mx_Test_IntersectWith);
}