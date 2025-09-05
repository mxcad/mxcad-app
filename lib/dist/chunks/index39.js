import { t as n, a1 as z, _ as E, a as k } from "./lib.js";
import { d as v, o as N, Y as M, s as g, M as Z, N as F } from "./mxcad.js";
import { M as S, U as B } from "./mxdraw.js";
function J() {
  return R.apply(this, arguments);
}
function R() {
  return R = E(/* @__PURE__ */ k.mark(function P() {
    var e, i, y, t, l, u, f, s, o, m;
    return k.wrap(function(r) {
      for (; ; ) switch (r.prev = r.next) {
        case 0:
          return e = new F(), e.setMessage(n("1595") + n("1678") + ":"), e.setUserInputControls(B.kNoZeroResponseAccepted | B.kNoNegativeResponseAccepted), r.next = 1, e.go();
        case 1:
          if (i = r.sent, i != null) {
            r.next = 2;
            break;
          }
          return r.abrupt("return");
        case 2:
          return e.setMessage(n("1595") + n("1679") + ":"), r.next = 3, e.go();
        case 3:
          if (y = r.sent, y != null) {
            r.next = 4;
            break;
          }
          return r.abrupt("return");
        case 4:
          return r.next = 5, v.getCorner(n("1595") + n("1680"));
        case 5:
          if (t = r.sent, t) {
            r.next = 6;
            break;
          }
          return r.abrupt("return");
        case 6:
          return l = t.pt2.x - t.pt1.x, u = t.pt2.y - t.pt1.y, r.next = 7, v.userSelect(n("1581") + n("1681"));
        case 7:
          if (f = r.sent, s = v.getMcDbEntitysBoundingBox(f), s) {
            r.next = 8;
            break;
          }
          return r.abrupt("return");
        case 8:
          o = new N(), l > 0 ? o.x = s.minPt.x : o.x = s.maxPt.x, u > 0 ? o.y = s.minPt.y : o.y = s.maxPt.y, m = 0, V({
            iColNum: y,
            iRowNum: i,
            dColOffset: l,
            dRowOffset: u,
            aryId: f,
            dAng: m
          });
        case 9:
        case "end":
          return r.stop();
      }
    }, P);
  })), R.apply(this, arguments);
}
var V = function(e) {
  var i = e.iRowNum, y = i === void 0 ? 0 : i, t = e.iColNum, l = t === void 0 ? 0 : t, u = e.dColOffset, f = u === void 0 ? 0 : u, s = e.dRowOffset, o = s === void 0 ? 0 : s, m = e.aryId, r = m === void 0 ? [] : m, c = e.dAng, T = c === void 0 ? 0 : c, p = v.getMcDbEntitysBoundingBox(r);
  if (p) {
    var a = new N();
    f > 0 ? a.x = p.minPt.x : a.x = p.maxPt.x, o > 0 ? a.y = p.minPt.y : a.y = p.maxPt.y;
    for (var h = new M().setToRotation(T * Math.PI / 180, g.kZAxis, a), b = 5e4, I = 0, w = 0; w < y; w++)
      for (var D = new g(0, o * w, 0), $ = new M().setToTranslation(D), x = 0; x < l; x++)
        if (!(w == 0 && x == 0)) {
          var O = new g(f * x, 0, 0), U = new M().setToTranslation(O), d = new N(a.x, a.y, a.z);
          d.transformBy($), d.transformBy(U), d.transformBy(h);
          for (var G = new M().setToTranslation(new g(d.x - a.x, d.y - a.y, d.z - a.z)), C = 0; C < r.length; C++) {
            var A = r[C].clone();
            if (A && (A.transformBy(G), Z.getCurrentMxCAD().drawEntity(A), I++, I > b)) {
              S.acutPrintf(n("1682") + b + n("1683") + `
`);
              return;
            }
          }
          z();
        }
  }
};
export {
  J as M,
  V as r
};
