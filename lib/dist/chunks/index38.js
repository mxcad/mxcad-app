import { _ as ee, a as w, g as mr, c as kr, i as wr, t as o, b as oe, u as yt, d as ut, e as Xt, k as Gt, f as $t, h as Mr, j as $a, l as Fe, m as pa, n as va, o as kt, p as wt, q as qa, r as qt, s as Cr, v as Ja, w as Vr, x as Wr, y as Jt, z as lr, A as Pt, S as fa, B as Ea, C as Zt, M as Qt, D as _t, E as Dt, F as At, G as lt, H as en, I as rn, J as an, K as tn, L as nn, N as sn, O as un, P as ln } from "./lib.js";
import { a3 as cn, M as we, z as Mt, o as Ae, p as ke, S as on, g as Te, c as Kr, L as He, n as Ie, a as Sa, m as tr, O as ra, t as xe, q as je, s as Be, E as rr, d as Me, P as ba, r as yr, a4 as dn, j as Fr, h as ha, V as zr, a5 as ct, _ as hr, a6 as fn, f as gn, N as Ct, b as Za, k as Ta, R as ot, i as pn, a7 as La } from "./mxcad.js";
import { M as vn } from "./index39.js";
import { s as bn } from "./hooks.js";
import { D as G, m as ue, M as U, d as Et, r as Br, v as Lt, t as It, w as dr, x as hn, e as mn, f as St } from "./mxdraw.js";
import "./vue.js";
import { C as dt } from "./color.js";
import { p as yn } from "./print-js.js";
import { s as Er } from "./pinia.js";
import { d as kn } from "./hooks2.js";
import { u as Tt } from "./hooks3.js";
import { u as wn } from "./useMultilineTextDialog.js";
import { a as Pn } from "./axios.js";
var Dn = function() {
  var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1, a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
  return new Promise(/* @__PURE__ */ function() {
    var n = ee(/* @__PURE__ */ w.mark(function t(s, c) {
      var u, l, f;
      return w.wrap(function(g) {
        for (; ; ) switch (g.prev = g.next) {
          case 0:
            u = we.App.getCurrentMxCAD().getCurrentOriginaFileName(), u.length == 0 ? u = "temp_empty" + mr(!0) : u.indexOf(".") == -1 ? u += mr(!0) : u.substring(u.length - 6) != mr(!0) && (u += mr(!0)), l = u;
            {
              g.next = 2;
              break;
            }
          case 1:
            l = g.sent;
          case 2:
            f = we.App.getCurrentMxCAD().saveFile(u, /* @__PURE__ */ function() {
              var i = ee(/* @__PURE__ */ w.mark(function p(v) {
                var M, A;
                return w.wrap(function(b) {
                  for (; ; ) switch (b.prev = b.next) {
                    case 0:
                      A = /^((?!chrome|android).)*safari/i.test(navigator.userAgent), A ? M = new Blob([v.buffer], {
                        type: "application/octet-stream"
                      }) : M = new Blob([v.buffer], {
                        type: "application/octet-binary"
                      });
                      try {
                        s({
                          blob: M,
                          data: v,
                          filename: l
                        });
                      } catch (P) {
                        c(P), console.error(P);
                      }
                    case 1:
                    case "end":
                      return b.stop();
                  }
                }, p);
              }));
              return function(p) {
                return i.apply(this, arguments);
              };
            }(), a, e, r ? void 0 : {
              compression: 0
            }), !f && c(o("1697"));
          case 3:
          case "end":
            return g.stop();
        }
      }, t);
    }));
    return function(t, s) {
      return n.apply(this, arguments);
    };
  }());
}, Rt = /* @__PURE__ */ function() {
  var d = ee(/* @__PURE__ */ w.mark(function r() {
    var a, e, n, t, s;
    return w.wrap(function(c) {
      for (; ; ) switch (c.prev = c.next) {
        case 0:
          c.prev = 0;
          {
            c.next = 2;
            break;
          }
        case 1:
          c.next = 5;
          break;
        case 2:
          return a = wr(), c.next = 3, Dn(!0, !1, !1);
        case 3:
          return e = c.sent, n = e.filename, t = e.blob, e.data, c.next = 4, cn({
            blob: t,
            filename: n,
            types: [{
              description: "webcad File",
              accept: {
                "application/octet-stream": [mr(!0)]
              }
            }]
          });
        case 4:
          a && kr("MxFullScreen");
        case 5:
          c.next = 7;
          break;
        case 6:
          c.prev = 6, s = c.catch(0), console.error(s);
        case 7:
        case "end":
          return c.stop();
      }
    }, r, null, [[0, 6]]);
  }));
  return function() {
    return d.apply(this, arguments);
  };
}(), An = /* @__PURE__ */ function() {
  var d = ee(/* @__PURE__ */ w.mark(function r() {
    var a;
    return w.wrap(function(e) {
      for (; ; ) switch (e.prev = e.next) {
        case 0: {
          e.next = 5;
          break;
        }
        case 2:
          e.next = 4;
          break;
        case 3:
          e.prev = 3, a = e.catch(1), console.error(a);
        case 4:
          e.next = 6;
          break;
        case 5:
          return e.next = 6, Rt();
        case 6:
        case "end":
          return e.stop();
      }
    }, r, null, [[1, 3]]);
  }));
  return function() {
    return d.apply(this, arguments);
  };
}();
function Mn(d, r) {
  return Ra.apply(this, arguments);
}
function Ra() {
  return Ra = ee(/* @__PURE__ */ w.mark(function d(r, a) {
    var e, n, t, s, c;
    return w.wrap(function(u) {
      for (; ; ) switch (u.prev = u.next) {
        case 0:
          return e = r + "_preloading.json", u.next = 1, Mt.getJsonFromUrl(e);
        case 1:
          if (n = u.sent, t = {
            ok: !0,
            tz: !1
          }, n) {
            u.next = 2;
            break;
          }
          return u.abrupt("return", new Promise(function(l, f) {
            l(t);
          }));
        case 2:
          if (n.tz && (t.tz = n.tz), s = [], n.images.forEach(function(l) {
            l.substring(0, 5) != "http:" && l.substring(0, 6) != "https:" && s.push(l);
          }), n.images = s, !(n.images.length === 0 && n.externalReference.length === 0)) {
            u.next = 3;
            break;
          }
          return u.abrupt("return", new Promise(function(l, f) {
            l(t);
          }));
        case 3:
          return n.hash = a, u.next = 4, bn(n);
        case 4:
          return c = u.sent, c != null && c.data ? t.ok = !0 : t.ok = !1, u.abrupt("return", new Promise(function(l, f) {
            l(t);
          }));
        case 5:
        case "end":
          return u.stop();
      }
    }, d);
  })), Ra.apply(this, arguments);
}
var Cn = /* @__PURE__ */ function() {
  var d = ee(/* @__PURE__ */ w.mark(function r() {
    var a, e, n, t, s, c, u, l, f, g, i, p;
    return w.wrap(function(v) {
      for (; ; ) switch (v.prev = v.next) {
        case 0:
          return a = new He(), a.setMessage(o("1638")), a.setUserDraw(function(M) {
            e = M;
          }), v.next = 1, a.go();
        case 1:
          if (n = v.sent, n) {
            v.next = 2;
            break;
          }
          return v.abrupt("return");
        case 2:
          if (n.isValid()) {
            v.next = 3;
            break;
          }
          return v.abrupt("return");
        case 3:
          if (t = n.getMcDbCurve(), t) {
            v.next = 4;
            break;
          }
          return v.abrupt("return");
        case 4:
          if (t instanceof Kr) {
            v.next = 5;
            break;
          }
          return v.abrupt("return");
        case 5:
          return s = new Te(), s.setUserDraw(function(M, A) {
            if (t && e) {
              var b = t.clone();
              b && (b.move(e, M), A.drawMcDbEntity(b));
            }
          }), v.next = 6, s.go();
        case 6:
          if (c = v.sent, c) {
            v.next = 7;
            break;
          }
          return v.abrupt("return");
        case 7:
          if (u = t.clone(), u) {
            v.next = 8;
            break;
          }
          return v.abrupt("return");
        case 8:
          if (u.move(e, c), !(t instanceof ke)) {
            v.next = 9;
            break;
          }
          l = we.getCurrentMxCAD().drawEntity(u), f = new on(), f.copyFormAryId([l]), we.App.MxCADAssist.MxExplode(f.imp), v.next = 11;
          break;
        case 9:
          if (g = u.getSamplePoints(0.1), g.GetCount() !== 0) {
            v.next = 10;
            break;
          }
          return v.abrupt("return");
        case 10:
          p = we.getCurrentMxCAD(), g.forEach(function(M, A) {
            if (A === 1010) {
              var b = new Ae(M.x, M.y, M.z);
              if (i) {
                var P = new Ie();
                P.startPoint = i, P.endPoint = b, P.colorIndex = u.colorIndex, P.trueColor = u.trueColor, P.drawOrder = u.drawOrder, P.layer = u.layer, P.layerId = u.layerId, P.linetype = u.linetype, P.linetypeScale = u.linetypeScale, P.lineweight = P.lineweight, P.textStyle = P.textStyle, p.drawEntity(P);
              }
              i = b;
            }
          }), p.updateDisplay();
        case 11:
        case "end":
          return v.stop();
      }
    }, r);
  }));
  return function() {
    return d.apply(this, arguments);
  };
}();
oe("_SampleCurve", Cn);
function xr(d, r, a) {
  var e = r.clone(), n = a.clone(), t = d.clone(), s = t.sub(e), c = n.sub(e), u = t.sub(n), l, f = s.crossProduct(c).length() / c.length(), g = s.dotProduct(c), i = c.clone().mult(g / Math.pow(c.length(), 2));
  return e.clone().addvec(i), g < 0 ? l = s.length() : g > Math.pow(c.length(), 2) ? l = u.length() : l = f, Math.floor(l);
}
var En = /* @__PURE__ */ function() {
  var d = ee(/* @__PURE__ */ w.mark(function r() {
    var a, e, n, t, s, c, u, l, f, g, i, p, v, M, A, b, P, m, D, C, K, R, h, y, N, T, E, F;
    return w.wrap(function(S) {
      for (; ; ) switch (S.prev = S.next) {
        case 0:
          return a = we.getCurrentMxCAD(), e = new Te(), e.setMessage(o("1601")), e.setKeyWords(""), S.next = 1, e.go();
        case 1:
          if (n = S.sent, e.getStatus() !== ue.kNone) {
            S.next = 12;
            break;
          }
          c = new He(), u = new rr(), u.AddMcDbEntityTypes("CIRCLE,ARC,LINE,LWPOLYLINE"), f = function(_, fe) {
            l = _;
            var ge = Me.findEntAtPoint(_.x, _.y, _.z, -1, u);
            if (ge && ge.isValid()) {
              var ve = ge.getMcDbEntity();
              ve && (s && s.highlight(!1), ve.highlight(!0), s = ve);
            }
          };
        case 2:
          return c.setMessage(o("1603")), c.setUserDraw(f), c.setFilter(u), S.next = 3, c.go();
        case 3:
          if (g = S.sent, i = g.getMcDbEntity(), s && s.highlight(!1), c.getStatus() !== ue.kCancel) {
            S.next = 4;
            break;
          }
          return S.abrupt("return");
        case 4:
          if (!(i instanceof je)) {
            S.next = 6;
            break;
          }
          if (p = i.getStartPoint().val, v = i.radius, M = Be.kXAxis.clone().rotateBy(i.endAngle).mult(v), A = i.center, b = A.clone().addvec(M), !(!p || !b)) {
            S.next = 5;
            break;
          }
          return S.abrupt("return");
        case 5:
          return n = p, t = b, S.abrupt("continue", 12);
        case 6:
          if (!(i instanceof xe)) {
            S.next = 8;
            break;
          }
          if (P = i.center, m = i.getStartPoint().val, m) {
            S.next = 7;
            break;
          }
          return S.abrupt("return");
        case 7:
          return n = m, t = m.clone().addvec(P.sub(m).mult(2)), S.abrupt("continue", 12);
        case 8:
          if (!(i instanceof Ie)) {
            S.next = 9;
            break;
          }
          return n = i.startPoint, t = i.endPoint, S.abrupt("continue", 12);
        case 9:
          if (!(i instanceof ke)) {
            S.next = 10;
            break;
          }
          for (D = 0; D < i.numVerts(); D++)
            C = i.getPointAt(D).val, K = i.getPointAt(D + 1).val, R = i.getClosestPointTo(l, !1).val, K && xr(R, C, K) === 0 && (n = C, t = K);
          return S.abrupt("continue", 12);
        case 10:
          return U.acutPrintf(`
` + o("1604")), S.abrupt("continue", 2);
        case 11:
          S.next = 2;
          break;
        case 12:
          if (n) {
            S.next = 13;
            break;
          }
          return S.abrupt("return");
        case 13:
          if (t) {
            S.next = 15;
            break;
          }
          return e.setMessage(o("1605")), e.setUserDraw(function(I, _) {
            n && _.drawMcDbLine(n.x, n.y, n.z, I.x, I.y, I.z);
          }), S.next = 14, e.go();
        case 14:
          if (t = S.sent, t) {
            S.next = 15;
            break;
          }
          return S.abrupt("return");
        case 15:
          E = /* @__PURE__ */ w.mark(function I() {
            var _, fe, ge, ve, pe, ne, j, ie, J, X, B, O, he, Y;
            return w.wrap(function(z) {
              for (; ; ) switch (z.prev = z.next) {
                case 0:
                  return e.setMessage(o("1606")), e.setKeyWords("[".concat(o("1607"), "(T)/").concat(o("169"), "(A)").concat(typeof T == "undefined" ? o("1612") + "/(H)/" + o("1613") + "(V)" : "", "/").concat(o("176"), "(R)]")), e.clearLastInputPoint(), fe = n.clone(), ge = t.clone(), e.setUserDraw(function(H) {
                    if (!(!n || !t)) {
                      _ && _.erase(), s instanceof xe && (ve || (ve = s.center.clone().addvec(Be.kXAxis.clone().rotateBy(Math.PI / 2).mult(s.radius))), pe || (pe = s.center.clone().addvec(Be.kXAxis.clone().rotateBy(-Math.PI / 2).mult(s.radius))), H.y < ve.y && H.y > pe.y && (H.x > n.x || H.x < t.x) && (n = ve, t = pe), H.x < fe.x && H.x > ge.x && (H.y > ve.y || H.y < pe.y) && (n = fe, t = ge)), T === "H" && (H.x < n.x ? H.x = n.x : H.x > t.x && (H.x = t.x)), T === "V" && (H.y < n.y && (H.y = n.y), H.y > t.y && (H.y = t.y)), _ = a.drawDimRotated(n.x, n.y, t.x, t.y, H.x, H.y, N || 0);
                      var L = _.getMcDbDimension();
                      L && (L.textPosition = H, L.useSetTextPosition(), h && (L.dimensionText = h), y && (L.textRotation = y), L.trueColor = new Sa(0, 255, 0));
                    }
                  }), z.next = 1, e.go();
                case 1:
                  if (ne = z.sent, !e.isKeyWordPicked("T")) {
                    z.next = 4;
                    break;
                  }
                  return ie = new ra(), ie.clearLastInputPoint(), ie.setMessage("".concat(o("1608"), "<").concat(h || ((j = _.getMcDbDimension()) === null || j === void 0 ? void 0 : j.dimensionText) || "", ">")), ie.setKeyWords(""), z.next = 2, ie.go();
                case 2:
                  if (J = z.sent, typeof J == "string") {
                    z.next = 3;
                    break;
                  }
                  return z.abrupt("return", {
                    v: void 0
                  });
                case 3:
                  return h = J, _ && _.erase(), z.abrupt("return", 0);
                case 4:
                  if (_ && _.erase(), !e.isKeyWordPicked("A")) {
                    z.next = 8;
                    break;
                  }
                  return X = new tr(), X.clearLastInputPoint(), X.setMessage(o("1597")), z.next = 5, X.go();
                case 5:
                  if (B = z.sent, B) {
                    z.next = 6;
                    break;
                  }
                  return z.abrupt("return", {
                    v: void 0
                  });
                case 6:
                  if (X.getStatus() !== ue.kCancel) {
                    z.next = 7;
                    break;
                  }
                  return z.abrupt("return", {
                    v: void 0
                  });
                case 7:
                  return X.getDetailedResult() === G.kCoordIn ? y = B * (Math.PI / 180) : y = B, z.abrupt("return", 0);
                case 8:
                  if (!e.isKeyWordPicked("H")) {
                    z.next = 9;
                    break;
                  }
                  return T = "H", z.abrupt("return", 0);
                case 9:
                  if (!e.isKeyWordPicked("V")) {
                    z.next = 10;
                    break;
                  }
                  return T = "V", z.abrupt("return", 0);
                case 10:
                  if (!e.isKeyWordPicked("R")) {
                    z.next = 14;
                    break;
                  }
                  return O = new tr(), O.clearLastInputPoint(), O.setMessage(o("1615")), z.next = 11, O.go();
                case 11:
                  if (he = z.sent, he) {
                    z.next = 12;
                    break;
                  }
                  return z.abrupt("return", {
                    v: void 0
                  });
                case 12:
                  if (O.getStatus() !== ue.kCancel) {
                    z.next = 13;
                    break;
                  }
                  return z.abrupt("return", {
                    v: void 0
                  });
                case 13:
                  return O.getDetailedResult() === G.kCoordIn ? N = he * (Math.PI / 180) : N = he, z.abrupt("return", 0);
                case 14:
                  if (ne) {
                    z.next = 15;
                    break;
                  }
                  return z.abrupt("return", {
                    v: void 0
                  });
                case 15:
                  if (T === "H" && (ne.x < n.x ? ne.x = n.x : ne.x > t.x && (ne.x = t.x)), T === "V" && (ne.y < n.y && (ne.y = n.y), ne.y > t.y && (ne.y = t.y)), _ = a.drawDimRotated(n.x, n.y, t.x, t.y, ne.x, ne.y, N || 0), Y = _.getMcDbDimension(), Y) {
                    z.next = 16;
                    break;
                  }
                  return z.abrupt("return", {
                    v: void 0
                  });
                case 16:
                  return Y.textPosition = ne, Y.useSetTextPosition(), h && (Y.dimensionText = h), y && (Y.textRotation = y), Y.trueColor = new Sa(0, 255, 0), a.updateDisplay(), z.abrupt("return", 1);
                case 17:
                case "end":
                  return z.stop();
              }
            }, I);
          });
        case 16:
          return S.delegateYield(E(), "t0", 17);
        case 17:
          if (F = S.t0, F !== 0) {
            S.next = 18;
            break;
          }
          return S.abrupt("continue", 16);
        case 18:
          if (F !== 1) {
            S.next = 19;
            break;
          }
          return S.abrupt("continue", 21);
        case 19:
          if (!F) {
            S.next = 20;
            break;
          }
          return S.abrupt("return", F.v);
        case 20:
          S.next = 16;
          break;
        case 21:
        case "end":
          return S.stop();
      }
    }, r);
  }));
  return function() {
    return d.apply(this, arguments);
  };
}();
oe("_DrawRotatedDimension", En);
var Ln = /* @__PURE__ */ function() {
  var d = ee(/* @__PURE__ */ w.mark(function r() {
    var a, e, n, t, s, c, u, l, f, g, i, p, v, M, A, b, P, m, D, C, K, R, h, y, N, T;
    return w.wrap(function(E) {
      for (; ; ) switch (E.prev = E.next) {
        case 0:
          return a = we.getCurrentMxCAD(), console.log(a.drawDimStyle), e = new Te(), e.setMessage("".concat(o("1601"), "<").concat(o("1602"), ">")), e.setKeyWords(""), E.next = 1, e.go();
        case 1:
          if (n = E.sent, e.getStatus() !== ue.kNone) {
            E.next = 12;
            break;
          }
          s = new He(), c = new rr(), c.AddMcDbEntityTypes("CIRCLE,ARC,LINE,LWPOLYLINE"), f = function(S, I) {
            u = S;
            var _ = Me.findEntAtPoint(S.x, S.y, S.z, -1, c);
            if (_ && _.isValid()) {
              var fe = _.getMcDbEntity();
              fe && (l && l.highlight(!1), fe.highlight(!0), l = fe);
            }
          };
        case 2:
          return s.setMessage(o("1603")), s.setUserDraw(f), s.setFilter(c), E.next = 3, s.go();
        case 3:
          if (g = E.sent, i = g.getMcDbEntity(), l && l.highlight(!1), s.getStatus() !== ue.kCancel) {
            E.next = 4;
            break;
          }
          return E.abrupt("return");
        case 4:
          if (!(i instanceof je)) {
            E.next = 6;
            break;
          }
          if (p = i.getStartPoint().val, v = i.radius, M = Be.kXAxis.clone().rotateBy(i.endAngle).mult(v), A = i.center, b = A.clone().addvec(M), !(!p || !b)) {
            E.next = 5;
            break;
          }
          return E.abrupt("return");
        case 5:
          return n = p, t = b, E.abrupt("continue", 12);
        case 6:
          if (!(i instanceof xe)) {
            E.next = 8;
            break;
          }
          if (P = i.center, m = i.getClosestPointTo(u, !1).val, m) {
            E.next = 7;
            break;
          }
          return E.abrupt("return");
        case 7:
          return n = m, t = m.clone().addvec(P.sub(m).mult(2)), E.abrupt("continue", 12);
        case 8:
          if (!(i instanceof Ie)) {
            E.next = 9;
            break;
          }
          return n = i.startPoint, t = i.endPoint, E.abrupt("continue", 12);
        case 9:
          if (!(i instanceof ke)) {
            E.next = 10;
            break;
          }
          for (D = 0; D < i.numVerts(); D++)
            C = i.getPointAt(D).val, K = i.getPointAt(D + 1).val, R = i.getClosestPointTo(u, !1).val, K && xr(R, C, K) === 0 && (n = C, t = K);
          return E.abrupt("continue", 12);
        case 10:
          return U.acutPrintf(`
` + o("1604")), E.abrupt("continue", 2);
        case 11:
          E.next = 2;
          break;
        case 12:
          if (n) {
            E.next = 13;
            break;
          }
          return E.abrupt("return");
        case 13:
          if (t) {
            E.next = 15;
            break;
          }
          return e.setMessage(o("1605")), e.setUserDraw(function(F, S) {
            n && S.drawMcDbLine(n.x, n.y, n.z, F.x, F.y, F.z);
          }), E.next = 14, e.go();
        case 14:
          if (t = E.sent, t) {
            E.next = 15;
            break;
          }
          return E.abrupt("return");
        case 15:
          N = /* @__PURE__ */ w.mark(function F() {
            var S, I, _, fe, ge, ve, pe, ne;
            return w.wrap(function(j) {
              for (; ; ) switch (j.prev = j.next) {
                case 0:
                  return e.setMessage(o("1606")), e.setKeyWords("[".concat(o("1607"), "(T)/").concat(o("169"), "(A)]")), e.clearLastInputPoint(), e.setUserDraw(function(ie) {
                    if (!(!n || !t)) {
                      S && S.erase(), S = a.drawDimAligned(n.x, n.y, t.x, t.y, ie.x, ie.y);
                      var J = S.getMcDbDimension();
                      J && (h && (J.dimensionText = h), y && (J.textRotation = y));
                    }
                  }), j.next = 1, e.go();
                case 1:
                  if (I = j.sent, !e.isKeyWordPicked("T")) {
                    j.next = 4;
                    break;
                  }
                  return fe = new ra(), fe.clearLastInputPoint(), fe.setMessage("".concat(o("1608"), "<").concat(h || ((_ = S.getMcDbDimension()) === null || _ === void 0 ? void 0 : _.dimensionText) || "", ">")), fe.setKeyWords(""), j.next = 2, fe.go();
                case 2:
                  if (ge = j.sent, typeof ge == "string") {
                    j.next = 3;
                    break;
                  }
                  return j.abrupt("return", {
                    v: void 0
                  });
                case 3:
                  return h = ge, S && S.erase(), j.abrupt("return", 0);
                case 4:
                  if (S && S.erase(), !e.isKeyWordPicked("A")) {
                    j.next = 8;
                    break;
                  }
                  return ve = new tr(), ve.clearLastInputPoint(), ve.setMessage(o("1597")), j.next = 5, ve.go();
                case 5:
                  if (pe = j.sent, pe) {
                    j.next = 6;
                    break;
                  }
                  return j.abrupt("return", {
                    v: void 0
                  });
                case 6:
                  if (ve.getStatus() !== ue.kCancel) {
                    j.next = 7;
                    break;
                  }
                  return j.abrupt("return", {
                    v: void 0
                  });
                case 7:
                  return ve.getDetailedResult() === G.kCoordIn ? y = pe * (Math.PI / 180) : y = pe, j.abrupt("return", 0);
                case 8:
                  if (I) {
                    j.next = 9;
                    break;
                  }
                  return j.abrupt("return", {
                    v: void 0
                  });
                case 9:
                  if (S = a.drawDimAligned(n.x, n.y, t.x, t.y, I.x, I.y), ne = S.getMcDbDimension(), ne) {
                    j.next = 10;
                    break;
                  }
                  return j.abrupt("return", {
                    v: void 0
                  });
                case 10:
                  return ne.textPosition = I, h && (ne.dimensionText = h), y && (ne.textRotation = y), a.updateDisplay(), j.abrupt("return", 1);
                case 11:
                case "end":
                  return j.stop();
              }
            }, F);
          });
        case 16:
          return E.delegateYield(N(), "t0", 17);
        case 17:
          if (T = E.t0, T !== 0) {
            E.next = 18;
            break;
          }
          return E.abrupt("continue", 16);
        case 18:
          if (T !== 1) {
            E.next = 19;
            break;
          }
          return E.abrupt("continue", 21);
        case 19:
          if (!T) {
            E.next = 20;
            break;
          }
          return E.abrupt("return", T.v);
        case 20:
          E.next = 16;
          break;
        case 21:
        case "end":
          return E.stop();
      }
    }, r);
  }));
  return function() {
    return d.apply(this, arguments);
  };
}();
oe("_DrawAlignedDimension", Ln);
function In() {
  return Va.apply(this, arguments);
}
function Va() {
  return Va = ee(/* @__PURE__ */ w.mark(function d() {
    var r, a;
    return w.wrap(function(e) {
      for (; ; ) switch (e.prev = e.next) {
        case 0:
          r = U.getCurrentDraw().getViewAngle(), r -= Math.PI * 0.5, a = we.getCurrentMxCAD(), a.zoomAngle(r);
        case 1:
        case "end":
          return e.stop();
      }
    }, d);
  })), Va.apply(this, arguments);
}
function Sn() {
  return Na.apply(this, arguments);
}
function Na() {
  return Na = ee(/* @__PURE__ */ w.mark(function d() {
    var r, a, e, n, t, s, c, u, l;
    return w.wrap(function(f) {
      for (; ; ) switch (f.prev = f.next) {
        case 0:
          return r = new ba(), r.setMessage(o("1564")), r.setKeyWords("[".concat(o("1565"), " UCS(C)/").concat(o("1566"), "(W)/").concat(o("169"), "(A)/").concat(o("1567"), "(X)]")), f.next = 1, r.go();
        case 1:
          if (a = f.sent, a == null || a.toLocaleLowerCase(), a == null || a.toLocaleLowerCase(), (a == null ? void 0 : a.toLocaleLowerCase()) !== "a") {
            f.next = 4;
            break;
          }
          return e = new tr(), e.clearLastInputPoint(), e.setMessage(o("1568")), f.next = 2, e.go();
        case 2:
          if (n = f.sent, n) {
            f.next = 3;
            break;
          }
          return f.abrupt("return");
        case 3:
          e.getDetailedResult() === G.kCoordIn && (n = n * (Math.PI / 180)), t = we.getCurrentMxCAD(), t.zoomAngle(n);
        case 4:
          if ((a == null ? void 0 : a.toLocaleLowerCase()) !== "x") {
            f.next = 7;
            break;
          }
          return s = new tr(), s.clearLastInputPoint(), s.setMessage(o("1569")), f.next = 5, s.go();
        case 5:
          if (c = f.sent, c) {
            f.next = 6;
            break;
          }
          return f.abrupt("return");
        case 6:
          s.getDetailedResult() === G.kCoordIn && (c = c * (Math.PI / 180)), u = U.getCurrentDraw().getViewAngle(), u += c, l = we.getCurrentMxCAD(), l.zoomAngle(u);
        case 7:
        case "end":
          return f.stop();
      }
    }, d);
  })), Na.apply(this, arguments);
}
oe("Mx_Plan90CCW", In);
oe("Mx_Plan", Sn);
function Tn() {
  var d = we.getCurrentMxCAD(), r = d.mxdraw.getViewColor(), a = yt(), e = a.createColor;
  kr("Mx_Color", {
    color: e({
      color: dt(r).toString()
    }),
    call: function(t) {
      var s = dt(t), c = s.red(), u = s.green(), l = s.blue();
      d.setViewBackgroundColor(c, u, l), U.callEvent("updateBackgroundColor", new Sa(c, u, l));
    }
  });
}
oe("_ViewColor", Tn);
function Vt(d, r) {
  var a = document.timeline ? document.timeline.currentTime : performance.now(), e = !1;
  function n(t) {
    if (!e) {
      var s = t - a, c = Math.round(s / d);
      r(c);
      var u = (c + 1) * d + a, l = document.timeline ? document.timeline.currentTime : performance.now();
      return setTimeout(
        function() {
          requestAnimationFrame(n);
        },
        u - l
        // 算出距离下次interval开始时间
      );
    }
  }
  return n(a), function() {
    e = !0;
  };
}
function Nt(d, r, a) {
  for (var e = r, n = a; n - e > 1e-4; ) {
    var t = (e + n) / 2, s = Math.floor(d / t);
    s * t > d || t < r ? n = t : e = t;
  }
  var c = Math.floor(d / e);
  return d / c;
}
function Nr(d, r, a, e) {
  var n = d.distanceTo(r), t = [], s = Nt(n, a, e);
  if (isNaN(s)) return t;
  for (var c = n / s, u = r.sub(d).normalize(), l = 0; l < c; l++)
    t.push(d.clone().addvec(u.clone().mult(s * l)));
  return t;
}
function Rn() {
  var d = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : new Ae(), r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : new Ae(), a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 3, e = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : Math.PI * 2, n = [];
  a = Math.max(3, a), n.push(r);
  for (var t = e / a, s = 1; s < a; s++) {
    var c = Math.cos(t * s), u = Math.sin(t * s), l = d.clone(), f = r.clone(), g = f.x - l.x, i = f.y - l.y, p = g * c - i * u + l.x, v = g * u + i * c + l.y, M = new Ae(p, v);
    n.push(M);
  }
  return n;
}
var Vn = function(r, a) {
  var e = new Ae(r.x, a.y, r.z), n = new Ae(a.x, r.y, a.z);
  return [r, e, a, n];
};
function Nn() {
  return Wa.apply(this, arguments);
}
function Wa() {
  return Wa = ee(/* @__PURE__ */ w.mark(function d() {
    var r, a, e, n, t, s, c, u, l, f, g, i, p;
    return w.wrap(function(v) {
      for (; ; ) switch (v.prev = v.next) {
        case 0:
          g = function(A, b) {
            A.colorIndex = b.colorIndex, A.trueColor = b.trueColor, A.drawOrder = b.drawOrder, A.layer = b.layer, A.layerId = b.layerId, A.linetype = b.linetype, A.linetypeScale = b.linetypeScale, A.lineweight = b.lineweight, A.textStyle = b.textStyle;
          }, r = U.viewCoordLong2Cad(2), a = Number(localStorage.getItem("mx_revcloud_minArcLength")), e = Number(localStorage.getItem("mx_revcloud_maxArcLength")), (isNaN(a) || a < 1e-4) && (n = U.viewCoordLong2Cad(12), localStorage.setItem("mx_revcloud_minArcLength", n.toString())), (isNaN(e) || e < 1e-4) && (t = U.viewCoordLong2Cad(12), localStorage.setItem("mx_revcloud_maxArcLength", t.toString())), s = new Te(), c = -0.45, u = !1, l = !1, f = !1, i = /* @__PURE__ */ w.mark(function M() {
            var A, b, P, m, D, C, K, R, h, y, N, T, E, F, S, I, _, fe, ge, ve, pe, ne, j, ie, J, X, B, O, he, Y, z, H;
            return w.wrap(function(L) {
              for (; ; ) switch (L.prev = L.next) {
                case 0:
                  return A = o("1616"), u && (A = o("1617")), l && (A = o("1618")), s.setMessage(A), s.setKeyWords("[".concat(o("1619"), "(A)/").concat(o("177"), "(O)/").concat(o("178"), "(R)/").concat(o("179"), "(P)/").concat(o("180"), "(F)/").concat(o("1624"), "(S)]")), b = new ke(), s.clearLastInputPoint(), P = /* @__PURE__ */ function() {
                    var Z = ee(/* @__PURE__ */ w.mark(function x(re) {
                      var $, Q, V;
                      return w.wrap(function(de) {
                        for (; ; ) switch (de.prev = de.next) {
                          case 0:
                            return s.clearLastInputPoint(), s.setMessage(o("1625")), s.setKeyWords("[".concat(o("1626"), "(Y)/").concat(o("1627"), "(N)]")), de.next = 1, s.go();
                          case 1:
                            if (s.isKeyWordPicked("Y"))
                              for ($ = re.numVerts(), Q = 0; Q < $; Q++)
                                V = re.getBulgeAt(Q), re.setBulgeAt(Q, -V);
                            return de.abrupt("return", !0);
                          case 2:
                          case "end":
                            return de.stop();
                        }
                      }, x);
                    }));
                    return function(re) {
                      return Z.apply(this, arguments);
                    };
                  }(), L.next = 1, s.go();
                case 1:
                  if (m = L.sent, !s.isKeyWordPicked("A")) {
                    L.next = 7;
                    break;
                  }
                  return D = new yr(), D.setMessage(o("1628")), L.next = 2, D.go();
                case 2:
                  if (C = L.sent, typeof C == "number") {
                    L.next = 3;
                    break;
                  }
                  return L.abrupt("return", {
                    v: void 0
                  });
                case 3:
                  if (!(C < 1e-5)) {
                    L.next = 4;
                    break;
                  }
                  return U.acutPrintf(`
` + o("1629")), L.abrupt("return", {
                    v: void 0
                  });
                case 4:
                  return a = C, localStorage.setItem("mx_revcloud_minArcLength", C.toString()), K = /* @__PURE__ */ function() {
                    var Z = ee(/* @__PURE__ */ w.mark(function x() {
                      var re;
                      return w.wrap(function($) {
                        for (; ; ) switch ($.prev = $.next) {
                          case 0:
                            return D.setMessage(o("1630")), $.next = 1, D.go();
                          case 1:
                            if (re = $.sent, typeof re == "number") {
                              $.next = 2;
                              break;
                            }
                            return $.abrupt("return", !1);
                          case 2:
                            if (!(re < 1e-5)) {
                              $.next = 3;
                              break;
                            }
                            return U.acutPrintf(`
` + o("1631")), $.abrupt("return");
                          case 3:
                            if (!(re < a)) {
                              $.next = 5;
                              break;
                            }
                            return U.acutPrintf(`
` + o("1632")), $.next = 4, K();
                          case 4:
                            return $.abrupt("return", $.sent);
                          case 5:
                            e = re, localStorage.setItem("mx_revcloud_maxArcLength", re.toString());
                          case 6:
                          case "end":
                            return $.stop();
                        }
                      }, x);
                    }));
                    return function() {
                      return Z.apply(this, arguments);
                    };
                  }(), L.next = 5, K();
                case 5:
                  if (H = L.sent, H !== !1) {
                    L.next = 6;
                    break;
                  }
                  return L.abrupt("return", {
                    v: void 0
                  });
                case 6:
                  return L.abrupt("return", 0);
                case 7:
                  if (!s.isKeyWordPicked("O")) {
                    L.next = 16;
                    break;
                  }
                  return R = new rr(), R.AddMcDbEntityTypes("CIRCLE,ARC,LINE,LWPOLYLINE,ELLIPSE"), L.next = 8, Me.userSelect(o("1602"), R);
                case 8:
                  if (h = L.sent, y = h[0], y) {
                    L.next = 9;
                    break;
                  }
                  return L.abrupt("return", {
                    v: void 0
                  });
                case 9:
                  if (N = y.getMcDbEntity(), N) {
                    L.next = 10;
                    break;
                  }
                  return L.abrupt("return", {
                    v: void 0
                  });
                case 10:
                  if (!(N instanceof ke)) {
                    L.next = 12;
                    break;
                  }
                  for (b.isClosed = N.isClosed, b.constantWidth = N.constantWidth, g(b, N), T = N.numVerts(), F = 0; F < T; F++)
                    S = N.getPointAt(F).val, E && S && Nr(E, S, a, e).forEach(function(Z) {
                      b.addVertexAt(Z, c, void 0, f ? r : void 0);
                    }), E = S;
                  return b.isClosed ? Nr(E, N.getPointAt(0).val, a, e).forEach(function(Z) {
                    b.addVertexAt(Z, c, void 0, f ? r : void 0);
                  }) : b.addVertexAt(E, c), L.next = 11, P(b);
                case 11:
                  return N.erase(), L.abrupt("return", {
                    v: we.getCurrentMxCAD().drawEntity(b)
                  });
                case 12:
                  if (!(N instanceof Ie)) {
                    L.next = 14;
                    break;
                  }
                  return g(b, N), Nr(N.startPoint, N.endPoint, a, e).forEach(function(Z) {
                    b.addVertexAt(Z, c, void 0, f ? r : void 0);
                  }), b.addVertexAt(N.endPoint, c, void 0, f ? r : void 0), L.next = 13, P(b);
                case 13:
                  return N.erase(), L.abrupt("return", {
                    v: we.getCurrentMxCAD().drawEntity(b)
                  });
                case 14:
                  if (!(N instanceof xe)) {
                    L.next = 16;
                    break;
                  }
                  return I = N.getLength().val, _ = I / Nt(I, a, e), fe = N.getStartPoint().val, Rn(N.center, fe, _).forEach(function(Z) {
                    b.addVertexAt(Z, c, void 0, f ? r : void 0);
                  }), g(b, N), N instanceof xe && (b.isClosed = !0), L.next = 15, P(b);
                case 15:
                  return N.erase(), L.abrupt("return", {
                    v: we.getCurrentMxCAD().drawEntity(b)
                  });
                case 16:
                  if (!s.isKeyWordPicked("R")) {
                    L.next = 17;
                    break;
                  }
                  return u = !0, l = !1, L.abrupt("return", 0);
                case 17:
                  if (!s.isKeyWordPicked("P")) {
                    L.next = 18;
                    break;
                  }
                  return l = !0, u = !1, L.abrupt("return", 0);
                case 18:
                  if (!s.isKeyWordPicked("F")) {
                    L.next = 19;
                    break;
                  }
                  return l = !1, u = !1, L.abrupt("return", 0);
                case 19:
                  if (!s.isKeyWordPicked("S")) {
                    L.next = 25;
                    break;
                  }
                  return s.setMessage(o("1633")), s.setKeyWords("[".concat(o("1634"), "(N)/").concat(o("1635"), "(C)]")), L.next = 20, s.go();
                case 20:
                  if (s.getDetailedResult() !== G.kEcsIn) {
                    L.next = 21;
                    break;
                  }
                  return L.abrupt("return", {
                    v: void 0
                  });
                case 21:
                  if (s.getDetailedResult() !== G.kNewCommadIn) {
                    L.next = 22;
                    break;
                  }
                  return L.abrupt("return", {
                    v: void 0
                  });
                case 22:
                  if (s.getStatus() !== ue.kNone) {
                    L.next = 23;
                    break;
                  }
                  return L.abrupt("return", {
                    v: void 0
                  });
                case 23:
                  if (s.getStatus() !== ue.kCancel) {
                    L.next = 24;
                    break;
                  }
                  return L.abrupt("return", {
                    v: void 0
                  });
                case 24:
                  return s.isKeyWordPicked("N") && (f = !1), s.isKeyWordPicked("C") && (f = !0), L.abrupt("return", 0);
                case 25:
                  if (m) {
                    L.next = 26;
                    break;
                  }
                  return L.abrupt("return", {
                    v: void 0
                  });
                case 26:
                  if (!u) {
                    L.next = 29;
                    break;
                  }
                  return s.setMessage(o("1610")), s.setMessage(""), ge = function(x, re) {
                    if (m) {
                      var $ = Vn(m, re), Q = ut($, 4), V = Q[0], de = Q[1], Pe = Q[2], q = Q[3], be = m.x < re.x && m.y < re.y || m.x > re.x && m.y > re.y;
                      [[V, de], [de, Pe], [Pe, q], [q, V]].forEach(function(le) {
                        var ae = ut(le, 2), W = ae[0], se = ae[1];
                        Nr(W, se, a, e).forEach(function(me) {
                          x.addVertexAt(me, be ? c : -c, void 0, f ? r : void 0);
                        });
                      }), x.isClosed = !0;
                    }
                  }, s.setUserDraw(function(Z, x) {
                    var re = new ke();
                    ge(re, Z), x.drawMcDbEntity(re);
                  }), L.next = 27, s.go();
                case 27:
                  if (ve = L.sent, ve) {
                    L.next = 28;
                    break;
                  }
                  return L.abrupt("return", {
                    v: void 0
                  });
                case 28:
                  return ge(b, ve), L.abrupt("return", {
                    v: we.getCurrentMxCAD().drawEntity(b)
                  });
                case 29:
                  if (!l) {
                    L.next = 37;
                    break;
                  }
                  pe = m, ne = [], ne.push(pe), j = function(x, re) {
                    var $;
                    re.forEach(function(Q) {
                      $ && Nr($, Q, a, e).forEach(function(V) {
                        x.addVertexAt(V, c, void 0, f ? r : void 0);
                      }), $ = Q;
                    }), re.length > 2 ? (x.isClosed = !0, Nr($, re[0], a, e).forEach(function(Q) {
                      x.addVertexAt(Q, c, void 0, f ? r : void 0);
                    })) : x.addVertexAt($, c, void 0, f ? r : void 0);
                  }, s.setUserDraw(function(Z, x) {
                    var re = new ke();
                    j(re, [].concat(ne, [Z])), x.drawMcDbEntity(re);
                  });
                case 30:
                  return s.setMessage(o("1636")), s.setKeyWords(ne.length < 2 ? "" : "[".concat(o("1552"), "(U)]")), L.next = 31, s.go();
                case 31:
                  if (ie = L.sent, !s.isKeyWordPicked("U")) {
                    L.next = 32;
                    break;
                  }
                  return ne.pop(), s.clearLastInputPoint(), L.abrupt("continue", 30);
                case 32:
                  if (!(s.getDetailedResult() === G.kNullEnterIn || s.getDetailedResult() === G.kMouseRightIn)) {
                    L.next = 34;
                    break;
                  }
                  return j(b, ne), L.next = 33, P(b);
                case 33:
                  return L.abrupt("return", {
                    v: we.getCurrentMxCAD().drawEntity(b)
                  });
                case 34:
                  if (ie) {
                    L.next = 35;
                    break;
                  }
                  return L.abrupt("return", {
                    v: void 0
                  });
                case 35:
                  return ne.push(ie), L.abrupt("continue", 30);
                case 36:
                  L.next = 42;
                  break;
                case 37:
                  return b.addVertexAt(m, c, void 0, f ? r : void 0), J = m.clone(), X = 0, B = m, O = /* @__PURE__ */ function() {
                    var Z = ee(/* @__PURE__ */ w.mark(function x() {
                      var re;
                      return w.wrap(function($) {
                        for (; ; ) switch ($.prev = $.next) {
                          case 0:
                            return Y(), $.next = 1, P(b);
                          case 1:
                            re = we.getCurrentMxCAD(), re.drawEntity(b);
                          case 2:
                          case "end":
                            return $.stop();
                        }
                      }, x);
                    }));
                    return function() {
                      return Z.apply(this, arguments);
                    };
                  }(), s.setMessage(o("1637") + "..."), s.setKeyWords(""), s.setUserDraw(function(Z, x) {
                    m && (B = Z, X = m.distanceTo(Z), x.drawMcDbEntity(b.clone()), x.drawLine(m.toVector3(), Z.toVector3()));
                  }), s.clearLastInputPoint(), he = !1, Y = Vt(20, /* @__PURE__ */ ee(/* @__PURE__ */ w.mark(function Z() {
                    return w.wrap(function(x) {
                      for (; ; ) switch (x.prev = x.next) {
                        case 0:
                          if (!(X < a)) {
                            x.next = 1;
                            break;
                          }
                          return x.abrupt("return");
                        case 1:
                          if (!(B.distanceTo(J) < a)) {
                            x.next = 2;
                            break;
                          }
                          return b.isClosed = !0, U.stopRunCommand(), he = !0, x.abrupt("return");
                        case 2:
                          b.addVertexAt(B, c, void 0, f ? r : void 0), m = B, X = 0;
                        case 3:
                        case "end":
                          return x.stop();
                      }
                    }, Z);
                  }))), L.next = 38, s.go();
                case 38:
                  if (z = L.sent, !(s.getDetailedResult() === G.kMouseRightIn || s.getDetailedResult() === G.kNullEnterIn)) {
                    L.next = 39;
                    break;
                  }
                  return L.next = 39, O();
                case 39:
                  if (!(!z && !he)) {
                    L.next = 40;
                    break;
                  }
                  return L.abrupt("return", {
                    v: Y()
                  });
                case 40:
                  return z && b.addVertexAt(z, c, void 0, f ? r : void 0), L.next = 41, O();
                case 41:
                  return L.abrupt("return", 1);
                case 42:
                case "end":
                  return L.stop();
              }
            }, M);
          });
        case 1:
          return v.delegateYield(i(), "t0", 2);
        case 2:
          if (p = v.t0, p !== 0) {
            v.next = 3;
            break;
          }
          return v.abrupt("continue", 1);
        case 3:
          if (p !== 1) {
            v.next = 4;
            break;
          }
          return v.abrupt("continue", 6);
        case 4:
          if (!p) {
            v.next = 5;
            break;
          }
          return v.abrupt("return", p.v);
        case 5:
          v.next = 1;
          break;
        case 6:
        case "end":
          return v.stop();
      }
    }, d);
  })), Wa.apply(this, arguments);
}
oe("_Revcloud", Nn);
function Wn() {
  return Oa.apply(this, arguments);
}
function Oa() {
  return Oa = ee(/* @__PURE__ */ w.mark(function d() {
    var r, a, e, n, t, s, c, u, l;
    return w.wrap(function(f) {
      for (; ; ) switch (f.prev = f.next) {
        case 0:
          r = wr(), a = function() {
            r && kr("MxFullScreen");
          }, e = function(i, p) {
            var v = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 210, M = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 297, A = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0, b = Xt() || {}, P = b.baseUrl, m = P === void 0 ? "" : P, D = b.mxfilepath, C = D === void 0 ? "" : D, K = b.printPdfUrl, R = K === void 0 ? "" : K, h = {
              width: "" + v,
              height: "" + M,
              roate_angle: A,
              bd_pt1_x: "" + i.x,
              bd_pt1_y: "" + i.y,
              bd_pt2_x: "" + p.x,
              bd_pt2_y: "" + p.y
            };
            we.getCurrentMxCAD().saveFileToUrl(R, function(y, N) {
              try {
                var T = JSON.parse(N);
                if (T.ret == "ok") {
                  var E = m + C + T.file;
                  yn(E), a();
                } else
                  console.log(N);
              } catch (F) {
                console.log("Mx: sserverResult error");
              }
            }, void 0, JSON.stringify(h));
          }, U.acutPrintf(`
` + o("1570")), n = we.getCurrentMxCAD(), t = 0, s = !1, c = /* @__PURE__ */ w.mark(function g() {
            var i, p, v, M, A, b, P, m, D, C, K, R, h, y, N, T;
            return w.wrap(function(E) {
              for (; ; ) switch (E.prev = E.next) {
                case 0:
                  return i = new Te(), i.setMessage(`
` + o("1571") + ":"), i.setKeyWords("[".concat(o("1572"), "(S)/[").concat(o("1573"), "(D)]")), i.disableAllTrace(), E.next = 1, i.go();
                case 1:
                  if (p = E.sent, !i.isKeyWordPicked("D")) {
                    E.next = 2;
                    break;
                  }
                  s = !0, E.next = 15;
                  break;
                case 2:
                  if (!i.isKeyWordPicked("S")) {
                    E.next = 11;
                    break;
                  }
                  return v = new ba(), v.setMessage(o("1574")), v.setKeyWords("[A1(A)/A2(B)/A3(C)/A4(D)/".concat(o("170"), "16.55x23.90(E)]")), v.setDisableDynInput(!0), E.next = 3, v.go();
                case 3:
                  if (M = E.sent, M) {
                    E.next = 4;
                    break;
                  }
                  return E.abrupt("return", {
                    v: void 0
                  });
                case 4:
                  if (A = {
                    A: {
                      w: 594,
                      h: 841
                    },
                    B: {
                      w: 420,
                      h: 594
                    },
                    C: {
                      w: 297,
                      h: 420
                    },
                    D: {
                      w: 210,
                      h: 297
                    },
                    E: {
                      w: 165.5,
                      h: 239,
                      nw: 130,
                      nh: 190
                    }
                  }, A[M]) {
                    E.next = 5;
                    break;
                  }
                  return E.abrupt("return", {
                    v: void 0
                  });
                case 5:
                  return b = new ra(), b.setMessage("".concat(o("1576"), "(").concat(o("1577"), ")")), E.next = 6, b.go();
                case 6:
                  if (P = E.sent, P) {
                    E.next = 7;
                    break;
                  }
                  return E.abrupt("return", {
                    v: void 0
                  });
                case 7:
                  if (u = parseFloat(P), !isNaN(u)) {
                    E.next = 8;
                    break;
                  }
                  return U.acutPrintf(o("1578")), E.abrupt("return", {
                    v: void 0
                  });
                case 8:
                  return m = A[M].w * u, D = A[M].h * u, C = 0, K = 0, A[M].nw && (C = A[M].nw * u), A[M].nh && (K = A[M].nh * u), s && (R = m, m = D, D = R, R = C, C = K, K = R), i = new Te(), i.disableAllTrace(), i.setMessage(`
` + o("1579")), i.setKeyWords(""), i.setUserDraw(function(F, S) {
                    S.setColor(16711680);
                    var I = new ke(), _ = new Ae(F.x - m * 0.5, F.y - D * 0.5), fe = new Ae(F.x - m * 0.5, F.y + D * 0.5), ge = new Ae(F.x + m * 0.5, F.y + D * 0.5), ve = new Ae(F.x + m * 0.5, F.y - D * 0.5);
                    I.addVertexAt(_), I.addVertexAt(fe), I.addVertexAt(ge), I.addVertexAt(ve), I.constantWidth = U.screenCoordLong2Doc(2), I.isClosed = !0, S.drawMcDbEntity(I);
                    var pe = [];
                    if (pe.push(_.toVector3()), pe.push(fe.toVector3()), pe.push(ge.toVector3()), pe.push(ve.toVector3()), S.setColor(12868), S.drawSolid(pe, 0.5), C > 0 && K > 0) {
                      var ne = new Ae(F.x - C * 0.5, F.y - K * 0.5), j = new Ae(F.x - C * 0.5, F.y + K * 0.5), ie = new Ae(F.x + C * 0.5, F.y + K * 0.5), J = new Ae(F.x + C * 0.5, F.y - K * 0.5), X = [];
                      X.push(ne.toVector3()), X.push(j.toVector3()), X.push(ie.toVector3()), X.push(J.toVector3()), X.push(ne.toVector3());
                      var B = n.mxdraw.viewCoordLong2Cad(3), O = Br.createDashedLines(X, 16777215, B * 2, B);
                      S.drawEntity(O);
                    }
                  }), E.next = 9, i.go();
                case 9:
                  if (h = E.sent, h) {
                    E.next = 10;
                    break;
                  }
                  return E.abrupt("return", {
                    v: a()
                  });
                case 10:
                  return y = new Ae(h.x - m * 0.5, h.y - D * 0.5), N = new Ae(h.x + m * 0.5, h.y + D * 0.5), e(y, N, s ? A[M].h : A[M].w, s ? A[M].w : A[M].h, t), E.abrupt("return", {
                    v: void 0
                  });
                case 11:
                  if (p) {
                    E.next = 12;
                    break;
                  }
                  return E.abrupt("return", {
                    v: a()
                  });
                case 12:
                  return i.setMessage(`
` + o("1580") + ":"), i.setUserDraw(function(F, S) {
                    if (!p) return a();
                    S.setColor(16711680);
                    var I = new ke();
                    I.addVertexAt(p), I.addVertexAt(new Ae(p.x, F.y)), I.addVertexAt(F), I.addVertexAt(new Ae(F.x, p.y)), I.constantWidth = U.screenCoordLong2Doc(2), I.isClosed = !0, S.drawMcDbEntity(I);
                    var _ = [];
                    _.push(p.toVector3()), _.push(new THREE.Vector3(p.x, F.y)), _.push(F.toVector3()), _.push(new THREE.Vector3(F.x, p.y)), S.setColor(12868), S.drawSolid(_, 0.5);
                  }), i.setDisableOsnap(!0), i.setDisableOrthoTrace(!0), i.setDynamicInputType(Et.kXYCoordInput), E.next = 13, i.go();
                case 13:
                  if (T = E.sent, T) {
                    E.next = 14;
                    break;
                  }
                  return E.abrupt("return", {
                    v: a()
                  });
                case 14:
                  return e(p, T, s ? 297 : 210, s ? 210 : 297, t), E.abrupt("return", {
                    v: void 0
                  });
                case 15:
                case "end":
                  return E.stop();
              }
            }, g);
          });
        case 1:
          return f.delegateYield(c(), "t0", 2);
        case 2:
          if (l = f.t0, !l) {
            f.next = 3;
            break;
          }
          return f.abrupt("return", l.v);
        case 3:
          f.next = 1;
          break;
        case 4:
        case "end":
          return f.stop();
      }
    }, d);
  })), Oa.apply(this, arguments);
}
oe("Plot", Wn);
function On() {
  return Ka.apply(this, arguments);
}
function Ka() {
  return Ka = ee(/* @__PURE__ */ w.mark(function d() {
    var r, a, e, n, t, s, c, u, l;
    return w.wrap(function(f) {
      for (; ; ) switch (f.prev = f.next) {
        case 0:
          return r = U.viewCoordLong2Cad(20), a = new Te(), a.setDisableDynInput(!0), a.setDynamicInputType(Et.kNoInput), f.next = 1, a.go();
        case 1:
          if (e = f.sent, e) {
            f.next = 2;
            break;
          }
          return f.abrupt("return");
        case 2:
          return n = new ke(), t = 0, s = e, c = Vt(20, function() {
            t < r || (n.addVertexAt(s), e = s, t = 0);
          }), a.setUserDraw(function(g, i) {
            e && (s = g, t = e.distanceTo(g), i.drawMcDbEntity(n.clone()), i.drawLine(e.toVector3(), g.toVector3()));
          }), f.next = 3, a.go();
        case 3:
          if (u = f.sent, u) {
            f.next = 4;
            break;
          }
          return f.abrupt("return", c());
        case 4:
          c(), n.addVertexAt(u), l = we.getCurrentMxCAD(), l.drawEntity(n);
        case 5:
        case "end":
          return f.stop();
      }
    }, d);
  })), Ka.apply(this, arguments);
}
oe("MxET_Pencil", On);
function Kn(d) {
  var r = d.requestFullscreen || d.mozRequestFullScreen || d.webkitRequestFullScreen || d.msRequestFullscreen;
  r ? r.call(d) : (Mr().error(o("1546") + "!"), console.error(o("1546") + "!"));
}
function Fn() {
  var d = document.exitFullscreen || document.mozCancelFullScreen || document.webkitExitFullscreen || document.msExitFullscreen;
  d ? d.call(document) : (Mr().error(o("1546") + "!"), console.error(o("1546") + "!"));
}
window.addEventListener("keydown", function(d) {
  d.keyCode === 122 && (d.returnValue = !1, kr("MxFullScreen"));
}, !0);
Gt.register({
  key: {
    keyCode: "Escape"
  },
  when: function(r) {
    return r.isRunCommand ? !1 : wr();
  },
  action: function() {
    kr("MxFullScreen");
  }
});
oe("MxFullScreen", function() {
  if (wr())
    Fn(), "keyboard" in navigator && navigator.keyboard.unlock();
  else {
    var d = $t();
    Kn(typeof d == "string" ? document.body : d), "keyboard" in navigator && navigator.keyboard.lock();
  }
});
function zn() {
  return Fa.apply(this, arguments);
}
function Fa() {
  return Fa = ee(/* @__PURE__ */ w.mark(function d() {
    var r, a, e, n, t, s, c, u, l, f, g;
    return w.wrap(function(i) {
      for (; ; ) switch (i.prev = i.next) {
        case 0:
          return r = new yr(), r.setMessage(o("1598")), i.next = 1, r.go();
        case 1:
          if (a = i.sent, a) {
            i.next = 2;
            break;
          }
          return i.abrupt("return");
        case 2:
          return r.setMessage(o("1599")), i.next = 3, r.go();
        case 3:
          if (e = i.sent, e) {
            i.next = 4;
            break;
          }
          return i.abrupt("return");
        case 4:
          return n = new Te(), n.clearLastInputPoint(), n.setMessage(o("1600")), n.setUserDraw(function(p, v) {
            var M = new xe(), A = new xe();
            M.radius = a / 2, A.radius = e / 2, M.center = p, A.center = p, v.drawMcDbEntity(M), v.drawMcDbEntity(A);
          }), i.next = 5, n.go();
        case 5:
          if (t = i.sent, t) {
            i.next = 6;
            break;
          }
          return i.abrupt("return");
        case 6:
          s = Math.abs(a - e) / 4, c = Math.min(a, e), u = t.clone().addvec(Be.kXAxis.clone().mult(c / 2 + s)), l = t.clone().addvec(Be.kXAxis.clone().negate().mult(c / 2 + s)), f = new ke(), g = 1, f.addVertexAt(u, g), f.addVertexAt(l, g), f.addVertexAt(u, g), f.isClosed = !0, f.constantWidth = s * 2, we.getCurrentMxCAD().drawEntity(f);
        case 7:
        case "end":
          return i.stop();
      }
    }, d);
  })), Fa.apply(this, arguments);
}
oe("_donut", zn);
function Ur(d, r) {
  for (var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, e = d.numVerts(), n = 0; n < d.numVerts(); n++) {
    var t = d.getPointAt(n).val, s = d.getPointAt(n + 1).val, c = d.getBulgeAt(n);
    if (c === 0) {
      if (n + 1 === e && d.isClosed && (s = d.getPointAt(0).val), s && xr(r, t, s) < a)
        return {
          start: t,
          end: s,
          startIndex: n,
          endIndex: n + 1
        };
    } else if (s) {
      var u = d.getParamAtPoint(t).val, l = d.getParamAtPoint(s).val, f = d.getParamAtPoint(r).val;
      if (l > f && f > u)
        return {
          start: t,
          end: s,
          startIndex: n,
          endIndex: n + 1
        };
    }
  }
  if (d.isClosed) {
    var g = d.getPointAt(0).val, i = d.getPointAt(d.numVerts() - 1).val;
    if (xr(r, i, g) < a)
      return {
        start: i,
        end: g,
        startIndex: d.numVerts() - 1,
        endIndex: 0,
        isClosed: !0
      };
  }
}
function Bn() {
  return za.apply(this, arguments);
}
function za() {
  return za = ee(/* @__PURE__ */ w.mark(function d() {
    var r, a, e, n, t, s, c, u, l, f, g, i, p, v, M, A, b, P, m, D, C, K, R, h, y;
    return w.wrap(function(N) {
      for (; ; ) switch (N.prev = N.next) {
        case 0:
          r = we.getCurrentMxCAD(), a = new He(), l = new rr(), l.AddMcDbEntityTypes("CIRCLE,ARC,LINE,LWPOLYLINE"), i = function(E, F) {
            f = E;
            var S = Me.findEntAtPoint(E.x, E.y, E.z, -1, l);
            if (S && S.isValid()) {
              var I = S.getMcDbEntity();
              I && (g && g.highlight(!1), I.highlight(!0), g = I);
            }
          }, p = /* @__PURE__ */ w.mark(function T() {
            var E, F, S, I, _, fe, ge, ve, pe, ne, j, ie, J, X, B, O, he, Y, z, H, L, Z, x, re, $, Q, V, de, Pe, q, be, le, ae;
            return w.wrap(function(W) {
              for (; ; ) switch (W.prev = W.next) {
                case 0:
                  return a.setMessage("".concat(o("1581")).concat(o("171"), "、").concat(o("172"), "、").concat(o("173")).concat(o("1585"), " <").concat(o("1586"), ">")), a.setUserDraw(i), a.setFilter(l), W.next = 1, a.go();
                case 1:
                  if (E = W.sent, F = E.getMcDbEntity(), g && g.highlight(!1), a.getStatus() !== ue.kCancel) {
                    W.next = 2;
                    break;
                  }
                  return W.abrupt("return", {
                    v: void 0
                  });
                case 2:
                  if (a.getStatus() !== ue.kNone) {
                    W.next = 9;
                    break;
                  }
                  return S = new Te(), S.clearLastInputPoint(), S.setMessage(o("1587")), W.next = 3, S.go();
                case 3:
                  if (I = W.sent, I) {
                    W.next = 4;
                    break;
                  }
                  return W.abrupt("return", {
                    v: void 0
                  });
                case 4:
                  return S.setBasePt(I), S.setMessage(o("1588")), W.next = 5, S.go();
                case 5:
                  if (_ = W.sent, _) {
                    W.next = 6;
                    break;
                  }
                  return W.abrupt("return", {
                    v: void 0
                  });
                case 6:
                  return S.setMessage(o("1589")), W.next = 7, S.go();
                case 7:
                  if (fe = W.sent, fe) {
                    W.next = 8;
                    break;
                  }
                  return W.abrupt("return", {
                    v: void 0
                  });
                case 8:
                  return e = I.x, n = I.y, t = _.x, s = _.y, c = fe.x, u = fe.y, W.abrupt("return", 0);
                case 9:
                  if (!(F instanceof je)) {
                    W.next = 11;
                    break;
                  }
                  if (ge = F.getStartPoint().val, ve = F.radius, pe = Be.kXAxis.clone().rotateBy(F.endAngle).mult(ve), ne = F.center, j = ne.clone().addvec(pe), !(!ge || !j)) {
                    W.next = 10;
                    break;
                  }
                  return W.abrupt("return", {
                    v: void 0
                  });
                case 10:
                  return t = ge.x, s = ge.y, c = j.x, u = j.y, e = ne.x, n = ne.y, W.abrupt("return", 0);
                case 11:
                  if (!(F instanceof xe)) {
                    W.next = 14;
                    break;
                  }
                  return ie = F.center, e = ie.x, n = ie.y, t = f.x, s = f.y, J = new Te(), J.setMessage(o("1589")), W.next = 12, J.go();
                case 12:
                  if (X = W.sent, X) {
                    W.next = 13;
                    break;
                  }
                  return W.abrupt("return", {
                    v: void 0
                  });
                case 13:
                  return B = F.getClosestPointTo(X, !1).val, c = B.x, u = B.y, W.abrupt("return", 0);
                case 14:
                  if (!(F instanceof Ie || F instanceof ke)) {
                    W.next = 26;
                    break;
                  }
                  if (O = new He(), he = new rr(), he.AddMcDbEntityTypes("LINE,LWPOLYLINE"), O.setFilter(he), g = null, O.setUserDraw(function(se, me) {
                    i(se, me), Y = se;
                  }), z = F.getClosestPointTo(f, !1).val, t = z.x, s = z.y, F instanceof Ie ? (H = F, H.highlight(!0)) : (L = Ur(F, z, 2) || {}, Z = L.start, x = L.end, Z && x && (H = new Ie(Z, x)), F.highlight(!1)), H) {
                    W.next = 15;
                    break;
                  }
                  return W.abrupt("return", {
                    v: void 0
                  });
                case 15:
                  return O.setMessage(o("1590")), W.next = 16, O.go();
                case 16:
                  if ($ = W.sent, O.getStatus() !== ue.kCancel) {
                    W.next = 17;
                    break;
                  }
                  return W.abrupt("return", {
                    v: H.highlight(!1)
                  });
                case 17:
                  if ($) {
                    W.next = 18;
                    break;
                  }
                  return W.abrupt("continue", 15);
                case 18:
                  if ($.isValid()) {
                    W.next = 19;
                    break;
                  }
                  return W.abrupt("continue", 15);
                case 19:
                  if (Q = $.getMcDbEntity(), V = void 0, !(Q instanceof ke)) {
                    W.next = 20;
                    break;
                  }
                  de = Ur(Q, O.getDocPickPoint(), 2) || {}, Pe = de.start, q = de.end, V = new Ie(Pe, q), Q.highlight(!1), W.next = 22;
                  break;
                case 20:
                  if (!(Q instanceof Ie)) {
                    W.next = 21;
                    break;
                  }
                  V = Q, W.next = 22;
                  break;
                case 21:
                  return U.acutPrintf(`
` + o("1591")), W.abrupt("continue", 15);
                case 22:
                  if (V) {
                    W.next = 23;
                    break;
                  }
                  return W.abrupt("return", {
                    v: H.highlight(!1)
                  });
                case 23:
                  if (H.highlight(!1), V.highlight(!1), be = (re = H.clone()) === null || re === void 0 ? void 0 : re.IntersectWith(V.clone(), Fr.Intersect.kExtendBoth), !be.isEmpty()) {
                    W.next = 24;
                    break;
                  }
                  return W.abrupt("continue", 15);
                case 24:
                  return le = be.at(0), ae = V.getClosestPointTo(Y, !1).val, c = ae.x, u = ae.y, e = le.x, n = le.y, W.abrupt("continue", 25);
                case 25:
                  return W.abrupt("return", 0);
                case 26:
                case "end":
                  return W.stop();
              }
            }, T);
          });
        case 1:
          return N.delegateYield(p(), "t0", 2);
        case 2:
          if (v = N.t0, v !== 0) {
            N.next = 3;
            break;
          }
          return N.abrupt("continue", 5);
        case 3:
          if (!v) {
            N.next = 4;
            break;
          }
          return N.abrupt("return", v.v);
        case 4:
          N.next = 1;
          break;
        case 5:
          if (M = new Te(), M.clearLastInputPoint(), ![e, n, t, s, c, u].some(function(T) {
            return typeof T != "number";
          })) {
            N.next = 6;
            break;
          }
          return N.abrupt("return");
        case 6:
          return M.setMessage(o("1592")), M.setKeyWords("[".concat(o("174"), "(T)/").concat(o("169"), "(A)/").concat(o("175"), "(Q)]")), M.setUserDraw(function(T, E) {
            var F = new dn();
            F.compute(e, n, t, s, c, u, T.x, T.y), b && (F.dimensionText = b), P && (F.textRotation = P), E.drawMcDbEntity(F, !0);
          }), N.next = 7, M.go();
        case 7:
          if (m = N.sent, !M.isKeyWordPicked("T")) {
            N.next = 10;
            break;
          }
          return C = new ra(), C.clearLastInputPoint(), C.setMessage("".concat(o("1595")).concat(o("1596"), "<").concat(b || ((D = A.getMcDbDimension()) === null || D === void 0 ? void 0 : D.dimensionText) || "", ">")), C.setKeyWords(""), N.next = 8, C.go();
        case 8:
          if (K = N.sent, typeof K == "string") {
            N.next = 9;
            break;
          }
          return N.abrupt("return");
        case 9:
          return b = K, N.abrupt("continue", 6);
        case 10:
          if (!M.isKeyWordPicked("A")) {
            N.next = 14;
            break;
          }
          return R = new tr(), R.clearLastInputPoint(), R.setMessage(o("1597")), N.next = 11, R.go();
        case 11:
          if (h = N.sent, h) {
            N.next = 12;
            break;
          }
          return N.abrupt("return");
        case 12:
          if (R.getStatus() !== ue.kCancel) {
            N.next = 13;
            break;
          }
          return N.abrupt("return");
        case 13:
          return R.getDetailedResult() === G.kCoordIn ? P = h * (Math.PI / 180) : P = h, N.abrupt("continue", 6);
        case 14:
          if (M.isKeyWordPicked("Q"), m) {
            N.next = 15;
            break;
          }
          return N.abrupt("return");
        case 15:
          if (r.drawUseDefaultProperties = !0, A = r.drawDimAngular(e, n, t, s, c, u, m.x, m.y), y = A.getMcDbDimension(), y) {
            N.next = 16;
            break;
          }
          return N.abrupt("return");
        case 16:
          return b && (y.dimensionText = b), P && (y.textRotation = P), N.abrupt("return");
        case 17:
        case "end":
          return N.stop();
      }
    }, d);
  })), za.apply(this, arguments);
}
oe("_dimangular", Bn);
function ft(d, r, a) {
  var e = r.x, n = r.y, t = a.x, s = a.y, c = d.x, u = d.y, l = Math.min(e, t), f = Math.min(n, s), g = Math.max(e, t), i = Math.max(n, s);
  return c >= l && c <= g && u >= f && u <= i;
}
function Ia(d, r, a, e, n) {
  var t = r.sub(d), s = a.distanceTo(e) === 0, c = a.x > e.x;
  c || (t = t.negate()), n.forEach(function(u) {
    if (u) {
      var l = u.getGripPoints();
      if (!l.isEmpty()) {
        if ((u instanceof je || u instanceof xe || u instanceof zr) && (ft(u.center, a, e) || s)) {
          u.move(d, r);
          return;
        }
        l.forEach(function(f, g) {
          if (ft(f, a, e) && !((u instanceof je || u instanceof zr || u instanceof xe) && u.center.isEqualTo(f)) && !(u instanceof Ie && g === 2)) {
            if (u instanceof ke && l.length() !== u.numVerts())
              for (var i = u.numVerts(), p = 0, v = 0; v < i; v++) {
                if (u.getPointAt(v).val, u.getBulgeAt(v) !== 0 && (p++, p === g))
                  return;
                p++;
              }
            u.moveGripPointsAt(g, t.x, t.y, t.z);
          }
        });
      }
    }
  });
}
var ua = $a(0, "_stretch_offsetX"), la = $a(0, "_stretch_offsetY"), ca = $a(0, "_stretch_offsetZ");
function xn() {
  return Ba.apply(this, arguments);
}
function Ba() {
  return Ba = ee(/* @__PURE__ */ w.mark(function d() {
    var r, a, e, n, t, s, c, u, l, f, g, i, p;
    return w.wrap(function(v) {
      for (; ; ) switch (v.prev = v.next) {
        case 0:
          if (r = new ha(), a = Me.getCurrentSelect(), !(a.length <= 0)) {
            v.next = 3;
            break;
          }
          return v.next = 1, r.userSelect(o("1602"));
        case 1:
          if (v.sent) {
            v.next = 2;
            break;
          }
          return v.abrupt("return");
        case 2:
          a = r.getIds(), t = r.getSelectPoint(), e = t.pt1, n = t.pt2, v.next = 4;
          break;
        case 3:
          s = Me.getCurrentSelectPoints(), c = s.point1, u = s.point2, e = c, n = u;
        case 4:
          return l = new Te(), l.setMessage(`
` + o("1640")), l.setKeyWords("[".concat(o("1641"), "(D)]")), v.next = 5, l.go();
        case 5:
          if (f = v.sent, g = /* @__PURE__ */ function() {
            var M = ee(/* @__PURE__ */ w.mark(function A(b) {
              var P, m, D, C;
              return w.wrap(function(K) {
                for (; ; ) switch (K.prev = K.next) {
                  case 0:
                    if (typeof b != "undefined") {
                      K.next = 2;
                      break;
                    }
                    return l.setMessage(`
`.concat(o("1642"), "<").concat(ua.value, ", ").concat(la.value, ", ").concat(ca.value, ">")), l.setKeyWords(""), l.clearLastInputPoint(), K.next = 1, l.go();
                  case 1:
                    if (b = K.sent, b) {
                      K.next = 2;
                      break;
                    }
                    return K.abrupt("return");
                  case 2:
                    if (b) {
                      K.next = 4;
                      break;
                    }
                    if (!(ua.value === 0 && la.value === 0 && ca.value === 0)) {
                      K.next = 3;
                      break;
                    }
                    return K.abrupt("return");
                  case 3:
                    b = new Ae(ua.value, la.value, ca.value), K.next = 5;
                    break;
                  case 4:
                    P = b, m = P.x, D = P.y, C = P.z, ua.value = m, la.value = D, ca.value = C;
                  case 5:
                    Ia(new Ae(), b, e, n, a.map(function(R) {
                      return R.getMcDbEntity();
                    }));
                  case 6:
                  case "end":
                    return K.stop();
                }
              }, A);
            }));
            return function(b) {
              return M.apply(this, arguments);
            };
          }(), !(l.isKeyWordPicked("D") || l.getStatus() === ue.kNone)) {
            v.next = 7;
            break;
          }
          return v.next = 6, g();
        case 6:
          return v.abrupt("return", v.sent);
        case 7:
          if (f) {
            v.next = 8;
            break;
          }
          return v.abrupt("return");
        case 8:
          return l.setMessage(`
`.concat(o("1643")).concat(o("1585"), "<").concat(o("1644"), ">")), l.setBasePt(f), l.setKeyWords(""), l.setUserDraw(function(M, A) {
            var b = a.map(function(P) {
              return P.clone();
            });
            Ia(f, M, e, n, b), b.forEach(function(P, m) {
              var D, C = (D = a[m]) === null || D === void 0 ? void 0 : D.getMcDbEntity();
              if (C) {
                var K = C.trueColor.getColorValue(C.layerId);
                A.setColor(Number(K));
              }
              A.drawMcDbEntity(P);
            });
          }), v.next = 9, l.go();
        case 9:
          if (i = v.sent, l.getStatus() !== ue.kNone) {
            v.next = 11;
            break;
          }
          return v.next = 10, g(f);
        case 10:
          return v.abrupt("return", v.sent);
        case 11:
          if (i) {
            v.next = 12;
            break;
          }
          return v.abrupt("return");
        case 12:
          p = a.map(function(M) {
            return M.getMcDbEntity();
          }).filter(function(M) {
            return !!M;
          }), Ia(f, i, e, n, p);
        case 13:
        case "end":
          return v.stop();
      }
    }, d);
  })), Ba.apply(this, arguments);
}
oe("_stretch", xn);
function gt(d, r) {
  var a = Object.keys(d);
  if (Object.getOwnPropertySymbols) {
    var e = Object.getOwnPropertySymbols(d);
    r && (e = e.filter(function(n) {
      return Object.getOwnPropertyDescriptor(d, n).enumerable;
    })), a.push.apply(a, e);
  }
  return a;
}
function pt(d) {
  for (var r = 1; r < arguments.length; r++) {
    var a = arguments[r] != null ? arguments[r] : {};
    r % 2 ? gt(Object(a), !0).forEach(function(e) {
      Fe(d, e, a[e]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(d, Object.getOwnPropertyDescriptors(a)) : gt(Object(a)).forEach(function(e) {
      Object.defineProperty(d, e, Object.getOwnPropertyDescriptor(a, e));
    });
  }
  return d;
}
var Un = /* @__PURE__ */ function() {
  function d(r) {
    va(this, d), Fe(this, "resizeObserver", null), Fe(this, "mutationObserver", null), Fe(this, "element", null), this.callback = r;
  }
  return pa(d, [{
    key: "addListener",
    value: function(a) {
      this.element = a, this.setupResizeObserver(), this.setupMutationObserver();
    }
  }, {
    key: "removeListener",
    value: function() {
      this.resizeObserver && (this.resizeObserver.unobserve(this.element), this.resizeObserver.disconnect(), this.resizeObserver = null), this.mutationObserver && (this.mutationObserver.disconnect(), this.mutationObserver = null), this.element = null;
    }
  }, {
    key: "setupResizeObserver",
    value: function() {
      typeof ResizeObserver != "undefined" && (this.resizeObserver = new ResizeObserver(this.callback), this.resizeObserver.observe(this.element));
    }
  }, {
    key: "setupMutationObserver",
    value: function() {
      typeof MutationObserver != "undefined" && (this.mutationObserver = new MutationObserver(this.callback), this.mutationObserver.observe(this.element, {
        attributes: !0
      }));
    }
  }]);
}();
function Hn(d, r) {
  var a = new Un(r);
  return a.addListener(d), a;
}
function jn(d) {
  d.removeListener();
}
function Yn(d, r) {
  var a;
  return function() {
    for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++)
      n[t] = arguments[t];
    clearTimeout(a), a = setTimeout(function() {
      return d.apply(void 0, n);
    }, r);
  };
}
function Xn(d, r, a) {
  typeof r == "string" && (r = parseFloat(r));
  var e = document.createElement("canvas"), n = e.getContext("2d");
  if (n) {
    n.font = r + "px " + a;
    var t = n.measureText(d), s = t.width, c = r * 1.2, u = c;
    return e.remove(), s = Math.ceil(s), u = Math.ceil(u), {
      width: s,
      height: u
    };
  }
}
function Gn(d) {
  var r = document.createElement("template");
  r.innerHTML = d.trim();
  var a = document.createElement("div");
  a.style.position = "absolute", a.style.visibility = "hidden", a.style.pointerEvents = "none", a.appendChild(r.content.cloneNode(!0)), document.body.appendChild(a);
  var e = a.getBoundingClientRect(), n = e.width, t = e.height;
  return n = Math.ceil(n) + 5, t = Math.ceil(t), document.body.removeChild(a), {
    width: n,
    height: t
  };
}
function $n(d) {
  var r = {
    watermark_txt: o("1645"),
    watermark_html: "",
    watermark_x: 20,
    //水印起始位置x轴坐标
    watermark_y: 20,
    //水印起始位置Y轴坐标
    watermark_rows: 200,
    //水印行数
    watermark_cols: 200,
    //水印列数
    watermark_x_space: 80,
    //水印x轴间隔
    watermark_y_space: 80,
    //水印y轴间隔
    watermark_color: "#aaa",
    //水印字体颜色
    watermark_alpha: 0.4,
    //水印透明度
    watermark_fontsize: "15px",
    //水印字体大小
    watermark_font: "微软雅黑",
    //水印字体
    watermark_width: "auto",
    //水印宽度
    watermark_height: "auto",
    //水印长度
    watermark_angle: 15,
    //水印倾斜度数
    watermark_className: "mx_mask_div"
  };
  r = pt(pt({}, r), d);
  var a = we.getCurrentMxCAD().mxdraw.getCanvas(), e = null, n = null, t, s = function() {
    var f = document.querySelectorAll("." + r.watermark_className);
    f.forEach(function(g) {
      return g.remove();
    });
  }, c = function() {
    s(), t && jn(t);
  }, u = function() {
    var f = document.createDocumentFragment(), g = a.parentElement, i = g.clientWidth, p = g.clientHeight;
    if (!(i === e && p === n)) {
      e = i, n = p, s();
      var v = Math.max(g.scrollWidth, g.clientWidth), M = Math.max(g.scrollHeight, g.clientHeight);
      if (r.watermark_width === "auto" || r.watermark_height === "auto")
        if (r.watermark_html !== "") {
          var A = Gn(r.watermark_html), b = A.width, P = A.height;
          r.watermark_width === "auto" && (r.watermark_width = b), r.watermark_height === "auto" && (r.watermark_height = P);
        } else {
          var m = r.watermark_txt.length, D = parseFloat(r.watermark_fontsize) || 16, C = Xn(r.watermark_txt, r.watermark_fontsize, r.watermark_font) || {}, K = C.width, R = K === void 0 ? m * D : K, h = C.height, y = h === void 0 ? D + r.watermark_x_space + r.watermark_y_space : h;
          r.watermark_width === "auto" && (r.watermark_width = R), r.watermark_height === "auto" && (r.watermark_height = y);
        }
      r.watermark_cols = Math.ceil(v / (r.watermark_x_space + r.watermark_width)), r.watermark_rows = Math.ceil(M / (r.watermark_y_space + r.watermark_height));
      for (var N, T, E = 0; E < r.watermark_rows; E++) {
        T = r.watermark_y + (r.watermark_y_space + r.watermark_height) * E;
        for (var F = 0; F < r.watermark_cols; F++) {
          N = r.watermark_x + (r.watermark_width + r.watermark_x_space) * F;
          var S = document.createElement("div");
          S.id = (r.watermark_className || "") + E + F, S.className = r.watermark_className || "", r.watermark_html !== "" ? S.innerHTML = r.watermark_html : S.appendChild(document.createTextNode(r.watermark_txt)), S.style.webkitTransform = "rotate(-" + r.watermark_angle + "deg)", S.style.MozTransform = "rotate(-" + r.watermark_angle + "deg)", S.style.msTransform = "rotate(-" + r.watermark_angle + "deg)", S.style.OTransform = "rotate(-" + r.watermark_angle + "deg)", S.style.transform = "rotate(-" + r.watermark_angle + "deg)", S.style.visibility = "", S.style.position = "absolute", S.style.left = N + "px", S.style.top = T + "px", S.style.overflow = "hidden", S.style.zIndex = "1050", S.style.pointerEvents = "none", S.style.opacity = r.watermark_alpha.toString(), S.style.fontSize = r.watermark_fontsize, S.style.fontFamily = r.watermark_font, S.style.color = r.watermark_color, S.style.textAlign = "center", S.style.width = r.watermark_width + "px", S.style.height = r.watermark_height + "px", S.style.display = "block", f.appendChild(S);
        }
      }
      g.appendChild(f);
    }
  };
  return u(), t = Hn(a, Yn(u, 200)), c;
}
oe("_watermark", $n);
function qn() {
  return xa.apply(this, arguments);
}
function xa() {
  return xa = ee(/* @__PURE__ */ w.mark(function d() {
    var r, a, e, n, t, s, c, u, l, f, g;
    return w.wrap(function(i) {
      for (; ; ) switch (i.prev = i.next) {
        case 0:
          r = we.getCurrentMxCAD();
        case 1:
          return a = new He(), a.setMessage(o("1609")), i.next = 2, a.go();
        case 2:
          if (e = i.sent, a.getStatus() !== ue.kCancel) {
            i.next = 3;
            break;
          }
          return i.abrupt("return");
        case 3:
          if (a.getStatus() !== ue.kNone) {
            i.next = 4;
            break;
          }
          return i.abrupt("return");
        case 4:
          if (n = e.getMcDbEntity(), !(n instanceof je || n instanceof xe)) {
            i.next = 8;
            break;
          }
          return t = new Te(), t.setMessage(o("1610")), i.next = 5, t.go();
        case 5:
          if (s = i.sent, t.getStatus() !== ue.kCancel) {
            i.next = 6;
            break;
          }
          return i.abrupt("return");
        case 6:
          if (t.getStatus() !== ue.kNone) {
            i.next = 7;
            break;
          }
          return i.abrupt("return");
        case 7:
          return s && (c = n.center.clone(), u = s.sub(c).normalize().mult(n.radius), l = c.clone().addvec(u), f = c.clone().addvec(u.clone().negate()), g = Math.min(f.distanceTo(s), l.distanceTo(s)), r.drawDimDiametric(l.x, l.y, f.x, f.y, g)), i.abrupt("continue", 10);
        case 8:
          return U.acutPrintf(o("1611")), i.abrupt("continue", 1);
        case 9:
          i.next = 1;
          break;
        case 10:
        case "end":
          return i.stop();
      }
    }, d);
  })), xa.apply(this, arguments);
}
oe("_DrawDiametricDimension", qn);
function Jn() {
  return Ua.apply(this, arguments);
}
function Ua() {
  return Ua = ee(/* @__PURE__ */ w.mark(function d() {
    var r, a, e, n, t, s, c;
    return w.wrap(function(u) {
      for (; ; ) switch (u.prev = u.next) {
        case 0:
          r = we.getCurrentMxCAD();
        case 1:
          return a = new He(), a.setMessage(o("1609")), u.next = 2, a.go();
        case 2:
          if (e = u.sent, a.getStatus() !== ue.kCancel) {
            u.next = 3;
            break;
          }
          return u.abrupt("return");
        case 3:
          if (a.getStatus() !== ue.kNone) {
            u.next = 4;
            break;
          }
          return u.abrupt("return");
        case 4:
          if (n = e.getMcDbEntity(), !(n instanceof je || n instanceof xe)) {
            u.next = 5;
            break;
          }
          return t = n.center.clone(), s = Be.kXAxis.clone().mult(n.radius), c = t.clone().addvec(s), r.drawDimDiametric(t.x, t.y, c.x, c.y, n.radius), u.abrupt("continue", 7);
        case 5:
          return U.acutPrintf(o("1611")), u.abrupt("continue", 1);
        case 6:
          u.next = 1;
          break;
        case 7:
        case "end":
          return u.stop();
      }
    }, d);
  })), Ua.apply(this, arguments);
}
oe("_DrawRadialDimension", Jn);
function Wt(d) {
  return new Promise(function(r) {
    var a = kt(), e = a.hideLoading, n = a.showLoading;
    try {
      var t = Mr().info(o("1801") + "..."), s = we.App.getCurrentMxCAD().openWebFile(d, function(c) {
        c === 0 ? (Mr().success(o("1802")), r(!0)) : (Mr().error(o("1543")), r(!1)), e(), t();
      });
      wt(d).then(function(c) {
        c / (1024 * 1024) > 1 && s && n();
      }), r(s);
    } catch (c) {
      e(), r(!1);
    }
  });
}
function Zn(d) {
  Wt(d);
}
oe("_openMxweb", Zn);
U.on("mxcadApplicationCreatedMxCADObject", function() {
  var d, r = [], a = we.getCurrentMxCAD().mxdraw.getOrbitControls();
  a.addEventListener("change", function() {
    clearTimeout(d), d = setTimeout(function() {
      var n = a.object.position.clone(), t = a.object.zoom, s = a.target.clone(), c = we.getCurrentMxCAD().mxdraw.getCamera();
      r.push({
        zoom: t,
        position: n,
        target: s,
        camera: c.clone(!1)
      });
    }, 500);
  });
  var e = function(t) {
    if (!t) return !1;
    var s = we.getCurrentMxCAD().mxdraw, c = s.getOrbitControls(), u = c.object.position.clone(), l = c.object.zoom, f = c.target.clone(), g = we.getCurrentMxCAD().mxdraw.getCamera();
    return g.copy(t.camera, !1), g.updateProjectionMatrix(), l === t.zoom && u.equals(t.position) && f.equals(t.target) ? e(r.pop()) : (c.object.position.copy(t.position), c.object.zoom = t.zoom, c.target.copy(t.target), c.update(), s._mxdrawObj.mcObject.updateDisplayMatrixData(), !0);
  };
  oe("Mx_WindowZoom", /* @__PURE__ */ ee(/* @__PURE__ */ w.mark(function n() {
    var t, s, c, u, l, f, g, i;
    return w.wrap(function(p) {
      for (; ; ) switch (p.prev = p.next) {
        case 0:
          return t = new Te(), t.setMessage(`
` + o("1698")), t.setKeyWords("[".concat(o("182"), "(A)/").concat(o("183"), "(E)/").concat(o("184"), "(P)/").concat(o("177"), "(O)]")), s = we.getCurrentMxCAD(), p.next = 1, t.go();
        case 1:
          if (c = p.sent, !t.isKeyWordPicked("A")) {
            p.next = 2;
            break;
          }
          return p.abrupt("return", s.mxdraw.zoomInitialStates());
        case 2:
          if (!t.isKeyWordPicked("E")) {
            p.next = 3;
            break;
          }
          return p.abrupt("return", s.zoomAll(!0));
        case 3:
          if (!t.isKeyWordPicked("P")) {
            p.next = 4;
            break;
          }
          return e(r.pop()) || U.acutPrintf(`
` + o("1702") + `
` + o("1703")), p.abrupt("return");
        case 4:
          if (!t.isKeyWordPicked("O")) {
            p.next = 8;
            break;
          }
          return p.next = 5, Me.userSelect("ZOOM ".concat(o("1602")));
        case 5:
          if (u = p.sent, !(u.length <= 0)) {
            p.next = 6;
            break;
          }
          return p.abrupt("return");
        case 6:
          if (l = Me.getMcDbEntitysBoundingBox(u), l) {
            p.next = 7;
            break;
          }
          return p.abrupt("return");
        case 7:
          return f = l.minPt, g = l.maxPt, p.abrupt("return", s.zoomW(f, g));
        case 8:
          if (c != null) {
            p.next = 9;
            break;
          }
          return p.abrupt("return");
        case 9:
          return t.setUserDraw(function(v, M) {
            M.drawRect(ct.cad2doc1(c), ct.cad2doc1(v));
          }), t.setKeyWords(""), p.next = 10, t.go();
        case 10:
          if (i = p.sent, i != null) {
            p.next = 11;
            break;
          }
          return p.abrupt("return");
        case 11:
          s.zoomW(c, i);
        case 12:
        case "end":
          return p.stop();
      }
    }, n);
  })));
});
function Qn(d, r, a) {
  return r = Cr(r), Ja(d, Ot() ? Reflect.construct(r, a || [], Cr(d).constructor) : r.apply(d, a));
}
function Ot() {
  try {
    var d = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch (r) {
  }
  return (Ot = function() {
    return !!d;
  })();
}
function vt(d, r, a, e) {
  var n = qt(Cr(d.prototype), r, a);
  return typeof n == "function" ? function(t) {
    return n.apply(a, t);
  } : n;
}
var _r = /* @__PURE__ */ function(d) {
  function r() {
    var a;
    va(this, r);
    for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++)
      n[t] = arguments[t];
    return a = Qn(this, r, [].concat(n)), Fe(a, "dDashArray", 0.03), Fe(a, "dDashRatio", 0.1), Fe(a, "isAligned", !1), Fe(a, "fixedSize", !0), Fe(a, "referenceAxis", new THREE.Vector3(0, 1, 1)), Fe(a, "offsetHeight", void 0), Fe(a, "isDrawsMallRound", !0), a;
  }
  return qa(r, d), pa(r, [{
    key: "getTypeName",
    value: function() {
      return "MxAuxiliaryLine";
    }
  }, {
    key: "create",
    value: function() {
      return new r();
    }
  }, {
    key: "onViewChange",
    value: function() {
      return this.fixedSize ? (this.setNeedUpdateDisplay(!1), !0) : !1;
    }
  }, {
    key: "worldDraw",
    value: function(e) {
      var n = this.getDash(), t = n.dDashArray, s = n.dDashRatio, c = e.getMxObject();
      e.setLineWidth(0.7), e.setDash(t, s);
      var u = this.toSmallcoord(c, this.pt1), l = this.toSmallcoord(c, this.pt2), f = u, g = l;
      typeof this.offsetHeight == "undefined" && (this.offsetHeight = c.screenCoordLong2World(40));
      var i = this.offsetHeight;
      if (this.isAligned) {
        u.x > l.x && (u = this.pt2, l = this.pt1);
        var p = l.clone().sub(u).cross(this.referenceAxis.clone().normalize()).normalize();
        f = u.clone().add(p.clone().multiplyScalar(i)), g = l.clone().add(p.clone().multiplyScalar(i));
      } else {
        var v = Math.abs(this.referenceAxis.y ? u.y - l.y : u.x - l.x) + i, M = i, A = v;
        (this.referenceAxis.x !== 0 && u.x > l.x || this.referenceAxis.y !== 0 && u.y > l.y) && (u = this.pt2, l = this.pt1), this.referenceAxis.x > 0 && (M = v, A = i), this.referenceAxis.y > 0 && (M = v, A = i), f = u.clone().add(this.referenceAxis.clone().multiplyScalar(M)), g = l.clone().add(this.referenceAxis.clone().multiplyScalar(A));
      }
      f.setZ(u.z), g.setZ(l.z);
      var b = Br.createDashedLines([u, f, g, l], 8421504, 0.1, 0.1);
      if (e.drawEntity(b), this.isDrawsMallRound) {
        var P = c.screenCoordLong2World(1);
        e.drawCircle(u, P), e.drawCircle(l, P), e.drawCircle(f, P), e.drawCircle(g, P);
      }
      var m = f.distanceTo(g).toFixed(3);
      if (e.getType() === Lt.kWorldDraw) {
        var D = new It();
        D.opacity = 1, D.text = m, D.backgroundColor = 16777185, D.color = 16, D.position = new THREE.Vector3((f.x + g.x) / 2, (f.y + g.y) / 2), D.setFontSize(36), D.height = c.screenCoordLong2World(16), D.setLineWidthByPixels(!0), D.setUseSmallcoordDisplay(this.use_smallcoord_display), D.worldDraw(e);
      } else {
        var C = Br.creatTextSprite(m, new THREE.Vector3((f.x + g.x) / 2, (f.y + g.y) / 2), c.screenCoordLong2World(16), 0, 16777215);
        C && e.drawEntity(C);
      }
    }
  }, {
    key: "getGripPoints",
    value: function() {
      return [this.pt1, this.pt2];
    }
  }, {
    key: "moveGripPointsAt",
    value: function(e, n) {
      return e === 0 && this.pt1.add(n), e === 1 && this.pt2.add(n), !0;
    }
  }, {
    key: "dwgIn",
    value: function(e) {
      return vt(r, "dwgIn", this)([e]), this.dwgInHelp(e, ["referenceAxis", "isAligned", "offsetHeight", "fixedSize", "isDrawsMallRound"]), !0;
    }
  }, {
    key: "dwgOut",
    value: function(e) {
      return e = vt(r, "dwgOut", this)([e]), this.dwgOutHelp(e, ["referenceAxis", "isAligned", "offsetHeight", "fixedSize", "isDrawsMallRound"]), e;
    }
  }]);
}(dr);
function _n(d, r, a) {
  return r = Cr(r), Ja(d, Kt() ? Reflect.construct(r, a || [], Cr(d).constructor) : r.apply(d, a));
}
function Kt() {
  try {
    var d = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch (r) {
  }
  return (Kt = function() {
    return !!d;
  })();
}
var Or = /* @__PURE__ */ function(d) {
  function r() {
    var a;
    va(this, r);
    for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++)
      n[t] = arguments[t];
    return a = _n(this, r, [].concat(n)), Fe(a, "dDashArray", 0.03), Fe(a, "dDashRatio", 0.1), Fe(a, "pt1", void 0), Fe(a, "pt2", void 0), Fe(a, "center", void 0), Fe(a, "fixedSize", !0), Fe(a, "offsetDist", void 0), Fe(a, "isClockwise", "auto"), Fe(a, "isDrawsMallRound", !0), Fe(a, "isMaxRadius", !1), Fe(a, "radius", void 0), a;
  }
  return qa(r, d), pa(r, [{
    key: "getTypeName",
    value: function() {
      return "MxAuxiliaryArc";
    }
  }, {
    key: "create",
    value: function() {
      return new r();
    }
  }, {
    key: "onViewChange",
    value: function() {
      return this.fixedSize ? (this.setNeedUpdateDisplay(!1), !0) : !1;
    }
  }, {
    key: "calculateLineAngle",
    value: function(e, n, t) {
      var s = Math.PI * 2 / 360, c = Math.atan2(n.y - e.y, n.x - e.x) * 180 / Math.PI * s, u = Math.atan2(t.y - e.y, t.x - e.x) * 180 / Math.PI * s;
      return {
        startAngle: c,
        endAngle: u
      };
    }
  }, {
    key: "getClockwise",
    value: function() {
      var e = this.getStartPoint(), n = this.getEndPoint(), t = this.isClockwise;
      if (t === "auto") {
        var s = e.clone().sub(this.center), c = n.clone().sub(this.center), u = s.x * c.y - s.y * c.x;
        t = u < 0;
      }
      return t;
    }
  }, {
    key: "getAngle",
    value: function() {
      var e = this.center, n = this.getStartPoint(), t = this.getEndPoint(), s = this.getClockwise(), c = this.calculateLineAngle(e, n, t), u = c.startAngle, l = c.endAngle, f = l - u;
      return !s && f < 0 ? f += 2 * Math.PI : s && f > 0 && (f -= 2 * Math.PI), Math.abs(f);
    }
  }, {
    key: "getRadius",
    value: function() {
      var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
      return this.radius ? this.radius + (e && this.offsetDist || 0) : this.isMaxRadius ? Math.max(this.center.distanceTo(this.pt1), this.center.distanceTo(this.pt2)) : this.center.distanceTo(this.pt2) + (e && this.offsetDist || 0);
    }
  }, {
    key: "getStartPoint",
    value: function() {
      var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : U.getCurrentDraw(), n = this.pt1;
      this.pt2;
      var t = this.center, s = n;
      typeof this.offsetDist == "undefined" && (this.offsetDist = e.screenCoordLong2World(40));
      var c = this.offsetDist, u = n.clone().sub(t).normalize(), l = this.getRadius() + c;
      return s = t.clone().add(u.multiplyScalar(l)), s.setZ(n.z), s;
    }
  }, {
    key: "getEndPoint",
    value: function() {
      var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : U.getCurrentDraw(), n = this.pt2, t = this.center, s = n;
      typeof this.offsetDist == "undefined" && (this.offsetDist = e.screenCoordLong2World(40));
      var c = this.offsetDist, u = n.clone().sub(t).normalize(), l = this.getRadius() + c;
      return s = t.clone().add(u.multiplyScalar(l)), s.setZ(n.z), s;
    }
  }, {
    key: "worldDraw",
    value: function(e) {
      var n = this.getDash(), t = n.dDashArray, s = n.dDashRatio, c = e.getMxObject();
      e.setDash(t, s), e.setLineWidth(0.7), this.toSmallcoord(c, this.pt2);
      var u = this.center;
      typeof this.offsetDist == "undefined" && (this.offsetDist = c.screenCoordLong2World(40));
      var l = this.offsetDist, f = this.getStartPoint(), g = this.getEndPoint(), i = this.getRadius() + l, p = this.calculateLineAngle(u, f, g), v = p.startAngle, M = p.endAngle, A = this.getClockwise(), b = new THREE.ArcCurve(u.x, u.y, i, v, M, A), P = new THREE.Geometry().setFromPoints(b.getPoints(50)), m = Br.createDashedLines([f, u, g], 8421504, 0.1, 0.1);
      if (e.setColor(8421504), e.drawEntity(m), e.drawGeometryLines(P), this.isDrawsMallRound) {
        var D = c.screenCoordLong2World(2);
        e.drawCircle(f, D), e.drawCircle(g, D);
      }
      var C = this.getAngle(), K = THREE.MathUtils.radToDeg(C).toFixed(3) + "°", R = b.getPointAt(0.5), h = R.x, y = R.y, N = new THREE.Vector3(h, y);
      if (e.getType() === Lt.kWorldDraw) {
        var T = new It();
        T.opacity = 1, T.text = K, T.backgroundColor = 16777185, T.color = 16, T.position = N, T.setFontSize(36), T.height = c.screenCoordLong2World(16), T.setLineWidthByPixels(!0), T.setUseSmallcoordDisplay(this.use_smallcoord_display), T.worldDraw(e);
      } else {
        var E = Br.creatTextSprite(K, N, c.screenCoordLong2World(16), 0, 16777215);
        E && e.drawEntity(E);
      }
    }
  }, {
    key: "getGripPoints",
    value: function() {
      return [this.pt1, this.pt2, this.center];
    }
  }, {
    key: "moveGripPointsAt",
    value: function(e, n) {
      return e === 0 && this.pt1.add(n), e === 1 && this.pt2.add(n), e === 2 && this.center.add(n), !0;
    }
  }, {
    key: "dwgIn",
    value: function(e) {
      return this.dwgInHelp(e, ["fixedSize", "isDrawsMallRound", "offsetDist", "pt1", "pt2", "center", "isClockwise", "isMaxRadius", "radius"]), !0;
    }
  }, {
    key: "dwgOut",
    value: function(e) {
      return this.dwgOutHelp(e, ["fixedSize", "isDrawsMallRound", "offsetDist", "pt1", "pt2", "center", "isClockwise", "isMaxRadius", "radius"]), e;
    }
  }]);
}(hn);
function Zr(d, r, a) {
  if (d.isEqualTo(r)) return 0;
  var e = d.c().addvec(r.c().sub(d).mult(0.5)), n = r.c().sub(d);
  n.rotateBy(Math.PI / 2, Be.kZAxis);
  var t = new Ie(e, e.c().addvec(n)), s = a.c();
  s.rotateBy(Math.PI / 2, Be.kZAxis);
  var c = new Ie(d, d.c().addvec(s)), u = t.IntersectWith(c, Fr.Intersect.kExtendBoth);
  if (u.isEmpty()) return 0;
  var l = u.at(0), f = l.distanceTo(d);
  n.normalize(), n.mult(f);
  var g = l.c().addvec(n), i = l.c().subvec(n), p = g.c().sub(d), v = i.c().sub(d), M = g;
  return p.angleTo1(a) > v.angleTo1(a) && (M = i), Me.calcBulge(d, M, r).val;
}
var Ft = /* @__PURE__ */ function() {
  var d = ee(/* @__PURE__ */ w.mark(function r(a, e) {
    var n, t, s, c, u, l, f, g, i, p, v, M, A, b;
    return w.wrap(function(P) {
      for (; ; ) switch (P.prev = P.next) {
        case 0:
          if (n = !0, t = new Te(), s = !1, c = function(D) {
            D.key === "Control" && (s = !0);
          }, u = we.getCurrentMxCAD(), l = function() {
            return s = !1;
          }, window.addEventListener("keydown", c), window.addEventListener("keyup", l), f = function() {
            window.removeEventListener("keydown", c), window.removeEventListener("keyup", l);
          }, a) {
            P.next = 4;
            break;
          }
          return t.clearLastInputPoint(), t.setMessage(o("1684")), P.next = 1, t.go();
        case 1:
          if (g = P.sent, t.getDetailedResult() !== G.kNewCommadIn) {
            P.next = 2;
            break;
          }
          return f(), P.abrupt("return", !1);
        case 2:
          if (g) {
            P.next = 3;
            break;
          }
          return P.abrupt("return", f());
        case 3:
          a = g;
        case 4:
          i = [{
            point: a
          }], p = /* @__PURE__ */ w.mark(function m() {
            var D, C, K, R, h, y, N, T, E, F, S, I, _, fe, ge, ve, pe, ne, j, ie, J, X, B, O, he, Y, z, H, L, Z, x, re, $, Q, V, de, Pe, q, be, le, ae, W, se, me, Re, Se, Ve, Xe, qe, Ge, Ze, ar, Qe, _e, Je, fr, gr, cr, pr, Lr, Pr, Dr, nr, Le, Ye, Ue, ir, or, aa, jr, ze, We, vr, Ir, Yr, ma, ya, ka, Sr, wa, Qa, _a, ta, Pa, et, Da, rt, at, na, Aa, Xr, tt, Gr, br, $r, sr, qr, Tr, Ma, ia, Ca, sa, Rr, nt, it, st;
            return w.wrap(function(k) {
              for (; ; ) switch (k.prev = k.next) {
                case 0:
                  if (!n) {
                    k.next = 11;
                    break;
                  }
                  return t.setMessage(o("1727")), t.setKeyWords("[".concat(o("171"), "(A)/").concat(i.length > 2 ? o("1728") + "(C)/" : "").concat(o("1552"), "(U)/").concat(o("1549"), "(T)]")), t.setUserDraw(function(te, De) {
                    var ce = new ke();
                    i.forEach(function(ye) {
                      var Ce = ye.point, Ee = ye.bulge;
                      ce.addVertexAt(Ce, Ee);
                    }), ce.addVertexAt(te), De.drawMcDbEntity(ce);
                  }), k.next = 1, t.go();
                case 1:
                  if (D = k.sent, !(t.getDetailedResult() === G.kNullEnterIn || t.getDetailedResult() === G.kNullSpaceIn)) {
                    k.next = 2;
                    break;
                  }
                  return C = new ke(), i.forEach(function(te) {
                    var De = te.point, ce = te.bulge;
                    C.addVertexAt(De, ce);
                  }), K = C.getLength().val, R = u.drawEntity(C), e && e(i), k.abrupt("return", {
                    v: {
                      dist: K,
                      pl: C,
                      plId: R
                    }
                  });
                case 2:
                  if (t.getDetailedResult() !== G.kNewCommadIn) {
                    k.next = 3;
                    break;
                  }
                  return f(), k.abrupt("return", {
                    v: !1
                  });
                case 3:
                  if (t.getStatus() !== ue.kCancel) {
                    k.next = 4;
                    break;
                  }
                  return k.abrupt("return", {
                    v: f()
                  });
                case 4:
                  if (t.getStatus() !== ue.kNone) {
                    k.next = 5;
                    break;
                  }
                  return k.abrupt("return", {
                    v: f()
                  });
                case 5:
                  if (!t.isKeyWordPicked("A")) {
                    k.next = 6;
                    break;
                  }
                  return n = !1, k.abrupt("return", 0);
                case 6:
                  if (!t.isKeyWordPicked("U")) {
                    k.next = 7;
                    break;
                  }
                  return i.length === 0 ? U.acutPrintf(o("1729")) : (i.pop(), !((h = i[i.length - 1]) === null || h === void 0) && h.point && t.setLastInputPoint(i[i.length - 1].point), e && e(i)), k.abrupt("return", 0);
                case 7:
                  if (!t.isKeyWordPicked("T")) {
                    k.next = 8;
                    break;
                  }
                  return y = new ke(), i.forEach(function(te) {
                    var De = te.point, ce = te.bulge;
                    y.addVertexAt(De, ce);
                  }), N = y.getLength().val, T = u.drawEntity(y), e && e(i), k.abrupt("return", {
                    v: {
                      dist: N,
                      pl: y,
                      plId: T
                    }
                  });
                case 8:
                  if (!t.isKeyWordPicked("C")) {
                    k.next = 9;
                    break;
                  }
                  return E = new ke(), E.isClosed = !0, i.forEach(function(te) {
                    var De = te.point, ce = te.bulge;
                    E.addVertexAt(De, ce);
                  }), F = E.getLength().val, e && e(i), S = u.drawEntity(E), k.abrupt("return", {
                    v: {
                      dist: F,
                      pl: E,
                      plId: S
                    }
                  });
                case 9:
                  if (!D) {
                    k.next = 10;
                    break;
                  }
                  return i.push({
                    point: D
                  }), e && e(i), k.abrupt("return", 0);
                case 10:
                  k.next = 82;
                  break;
                case 11:
                  return I = t, I.setMessage(hr("NO1_ID_ARX_PL5", "".concat(o("1730"), "(").concat(o("1731"), ")"))), I.setKeyWords("[".concat(o("169"), "(A)/").concat(o("185"), "(CE)/").concat(i.length > 2 ? o("1728") + "(C)/" : "").concat(o("186"), "(D)/").concat(o("173"), "(L)/").concat(o("187"), "(R)/").concat(o("1735"), "(S)/").concat(o("1552"), "(U)]")), _ = new Be(), i.length < 2 ? _.copy(Be.kXAxis) : (fe = i.length, ge = i[fe - 2].point, ve = i[fe - 2].bulge, pe = i[fe - 1].point, !ve || Math.abs(ve) < 1e-7 ? _ = new Ae(pe.x, pe.y, 0).sub(new Ae(ge.x, ge.y, 0)) : (ne = new ke(), ne.addVertexAt(ge, ve), ne.addVertexAt(pe), j = ne.getFirstDeriv(new Ae(pe.x, pe.y, 0)), j.ret ? _ = j.val : _.copy(Be.kXAxis))), ie = i[i.length - 1], I.setUserDraw(function(te, De) {
                    var ce = Zr(ie.point, te, s ? _.clone().negate() : _), ye = new ke();
                    i.forEach(function(Ce) {
                      var Ee = Ce.point, Ne = Ce.bulge;
                      ye.addVertexAt(Ee, Ne);
                    }), ye.addVertexAt(ie.point, ce), ye.addVertexAt(te), De.drawMcDbEntity(ye);
                  }), k.next = 12, I.go();
                case 12:
                  if (J = k.sent, !(I.getDetailedResult() === G.kNullEnterIn || I.getDetailedResult() === G.kNullSpaceIn)) {
                    k.next = 13;
                    break;
                  }
                  return X = new ke(), i.forEach(function(te) {
                    var De = te.point, ce = te.bulge;
                    X.addVertexAt(De, ce);
                  }), B = X.getLength().val, O = u.drawEntity(X), e && e(i), k.abrupt("return", {
                    v: {
                      dist: B,
                      pl: X,
                      plId: O
                    }
                  });
                case 13:
                  if (J === null) {
                    k.next = 14;
                    break;
                  }
                  he = {
                    point: J,
                    bulge: 0
                  }, i[i.length - 1].bulge = Zr(ie.point, he.point, s ? _.clone().negate() : _), i.push(he), e && e(i), k.next = 82;
                  break;
                case 14:
                  if (I.getStatus() != ue.kKeyWord) {
                    k.next = 80;
                    break;
                  }
                  if (!I.isKeyWordPicked("A")) {
                    k.next = 31;
                    break;
                  }
                  return Y = new tr(), Y.setBasePt(ie.point), Y.setMessage(hr("ID_ARX_PLGET_I_ANGLE", o("1736"))), k.next = 15, Y.go();
                case 15:
                  if (z = k.sent, Y.getDetailedResult() !== G.kNewCommadIn) {
                    k.next = 16;
                    break;
                  }
                  return f(), k.abrupt("return", {
                    v: !1
                  });
                case 16:
                  if (z !== null) {
                    k.next = 17;
                    break;
                  }
                  return k.abrupt("return", 1);
                case 17:
                  return I.setMessage("".concat(o("1730"), "(").concat(o("1731"), ")")), I.setKeyWords("[".concat(o("185"), "(CE)/").concat(o("187"), "(R)]")), I.setLastInputPoint(ie.point), H = i[i.length - 1].point, L = function(De) {
                    var ce = Math.PI / 2 - z / 2, ye = new Ae((De.x + H.x) / 2, (De.y + H.y) / 2), Ce = ye.distanceTo(H), Ee = Ce / Math.sin(ce), Ne = Ce / Math.tan(ce), Oe = ye.sub(H).rotateBy(Math.PI / 2).normalize().mult(s ? -Ee - Ne : Ee - Ne), Ke = ye.addvec(Oe);
                    return Me.calcBulge(H, Ke, De).val;
                  }, I.setUserDraw(function(te, De) {
                    var ce = L(te), ye = new ke();
                    i.forEach(function(Ce) {
                      var Ee = Ce.point, Ne = Ce.bulge;
                      ye.addVertexAt(Ee, Ne);
                    }), ye.addVertexAt(ie.point, ce), ye.addVertexAt(te), De.drawMcDbEntity(ye);
                  }), k.next = 18, I.go();
                case 18:
                  if (Z = k.sent, !I.isKeyWordPicked("CE")) {
                    k.next = 22;
                    break;
                  }
                  return I.setMessage(o("1737")), I.setKeyWords(""), I.setBasePt(H), I.setUserDraw(function(te, De) {
                    var ce = te.distanceTo(H), ye = te.addvec(te.sub(H).rotateBy(z).normalize().mult(ce)), Ce = L(ye), Ee = new ke();
                    i.forEach(function(Ne) {
                      var Oe = Ne.point, Ke = Ne.bulge;
                      Ee.addVertexAt(Oe, Ke);
                    }), Ee.addVertexAt(ie.point, Ce), Ee.addVertexAt(ye), De.drawMcDbEntity(Ee);
                  }), k.next = 19, I.go();
                case 19:
                  if (x = k.sent, I.getDetailedResult() !== G.kNewCommadIn) {
                    k.next = 20;
                    break;
                  }
                  return f(), k.abrupt("return", {
                    v: !1
                  });
                case 20:
                  if (x) {
                    k.next = 21;
                    break;
                  }
                  return k.abrupt("return", 1);
                case 21:
                  return re = x.distanceTo(H), $ = x.addvec(x.sub(H).rotateBy(z).normalize().mult(re)), Q = {}, Q.bulge = 0, Q.point = $, i[i.length - 1].bulge = L($), i.push(Q), I.setLastInputPoint($), e && e(i), k.abrupt("return", 0);
                case 22:
                  if (!I.isKeyWordPicked("R")) {
                    k.next = 29;
                    break;
                  }
                  return V = new yr(), V.setMessage(o("1738")), V.setKeyWords(""), k.next = 23, V.go();
                case 23:
                  if (de = k.sent, V.getDetailedResult() !== G.kNewCommadIn) {
                    k.next = 24;
                    break;
                  }
                  return f(), k.abrupt("return", {
                    v: !1
                  });
                case 24:
                  if (typeof de == "number") {
                    k.next = 25;
                    break;
                  }
                  return k.abrupt("return", 1);
                case 25:
                  return Pe = de * Math.sin(z / 2), I.setBasePt(H), I.setMessage("".concat(o("1739"), "(").concat(o("1740"), ")")), I.setKeyWords(""), I.setUserDraw(function(te, De) {
                    var ce = H.clone().addvec(te.sub(H).normalize().mult(Pe * 2)), ye = L(ce), Ce = new ke();
                    i.forEach(function(Ee) {
                      var Ne = Ee.point, Oe = Ee.bulge;
                      Ce.addVertexAt(Ne, Oe);
                    }), Ce.addVertexAt(ie.point, ye), Ce.addVertexAt(ce), De.drawMcDbEntity(Ce);
                  }), k.next = 26, I.go();
                case 26:
                  if (q = k.sent, I.getDetailedResult() !== G.kNewCommadIn) {
                    k.next = 27;
                    break;
                  }
                  return f(), k.abrupt("return", {
                    v: !1
                  });
                case 27:
                  if (q) {
                    k.next = 28;
                    break;
                  }
                  return k.abrupt("return", 1);
                case 28:
                  return be = H.clone().addvec(q.sub(H).normalize().mult(Pe * 2)), le = {}, le.bulge = 0, le.point = be, i[i.length - 1].bulge = L(be), i.push(le), e && e(i), k.abrupt("return", 0);
                case 29:
                  if (Z) {
                    k.next = 30;
                    break;
                  }
                  return k.abrupt("return", 1);
                case 30:
                  ae = {}, ae.bulge = 0, ae.point = Z, i[i.length - 1].bulge = L(Z), i.push(ae), e && e(i);
                case 31:
                  if (!I.isKeyWordPicked("CE")) {
                    k.next = 47;
                    break;
                  }
                  return I.setMessage(o("1737")), I.setKeyWords(""), I.setUserDraw(function() {
                  }), k.next = 32, I.go();
                case 32:
                  if (W = k.sent, I.getDetailedResult() !== G.kNewCommadIn) {
                    k.next = 33;
                    break;
                  }
                  return f(), k.abrupt("return", {
                    v: !1
                  });
                case 33:
                  if (W) {
                    k.next = 34;
                    break;
                  }
                  return k.abrupt("return", {
                    v: f()
                  });
                case 34:
                  return se = ie.point, me = W.distanceTo(se), I.setLastInputPoint(se), I.setMessage("".concat(o("1730"), "(").concat(o("1731"), ")")), I.setKeyWords("[".concat(o("169"), "(A)/").concat(o("188"), "(L)]")), I.clearLastInputPoint(), I.setUserDraw(function(te, De) {
                    De.drawLine(te.toVector3(), W.toVector3());
                    var ce = W.clone().addvec(te.sub(W).normalize().mult(me)), ye = W.sub(se).angleTo2(W.sub(ce), Be.kZAxis), Ce = new Ae((se.x + ce.x) / 2, (se.y + ce.y) / 2), Ee = W.sub(Ce).normalize().mult(-me), Ne = W.clone().addvec((s ? ye < Math.PI : ye > Math.PI) ? Ee.negate() : Ee), Oe = Me.calcBulge(se, Ne, ce).val, Ke = new ke();
                    i.forEach(function($e) {
                      var ur = $e.point, Jr = $e.bulge;
                      Ke.addVertexAt(ur, Jr);
                    }), Ke.addVertexAt(ie.point, Oe), Ke.addVertexAt(ce), De.drawMcDbEntity(Ke);
                  }), k.next = 35, I.go();
                case 35:
                  if (Re = k.sent, !I.isKeyWordPicked("A")) {
                    k.next = 39;
                    break;
                  }
                  return Se = new tr(), Se.setBasePt(W), Se.setMessage(hr("ID_ARX_PLGET_I_ANGLE", "".concat(o("1736"), "(").concat(o("1731"), ")"))), Se.setKeyWords(""), Se.setUserDraw(function(te, De) {
                    var ce = Be.kXAxis.clone().angleTo2(te.sub(W), Be.kZAxis), ye = s ? Math.PI * 2 - ce / 2 : ce / 2, Ce = se.sub(W).rotateBy(ye).normalize().mult(me), Ee = se.sub(W).rotateBy(ce).normalize().mult(me), Ne = W.clone().addvec(Ce), Oe = W.clone().addvec(Ee), Ke = Me.calcBulge(se, Ne, Oe).val, $e = new ke();
                    i.forEach(function(ur) {
                      var Jr = ur.point, Yt = ur.bulge;
                      $e.addVertexAt(Jr, Yt);
                    }), $e.addVertexAt(ie.point, Ke), $e.addVertexAt(Oe), De.drawMcDbEntity($e);
                  }), k.next = 36, Se.go();
                case 36:
                  if (Ve = k.sent, Se.getDetailedResult() !== G.kNewCommadIn) {
                    k.next = 37;
                    break;
                  }
                  return f(), k.abrupt("return", {
                    v: !1
                  });
                case 37:
                  if (Ve !== null) {
                    k.next = 38;
                    break;
                  }
                  return k.abrupt("return", 1);
                case 38:
                  return Xe = s ? Math.PI * 2 - Ve / 2 : Ve / 2, qe = se.sub(W).rotateBy(Xe).normalize().mult(me), Ge = se.sub(W).rotateBy(Ve).normalize().mult(me), Ze = W.clone().addvec(qe), ar = W.clone().addvec(Ge), Qe = Me.calcBulge(se, Ze, ar).val, _e = {}, _e.bulge = 0, _e.point = ar, i[i.length - 1].bulge = Qe, i.push(_e), new ke(), e && e(i), k.abrupt("return", 0);
                case 39:
                  if (!I.isKeyWordPicked("L")) {
                    k.next = 44;
                    break;
                  }
                  return Je = new yr(), Je.setMessage("".concat(o("1742"), "(").concat(o("1731"), ")")), Je.setKeyWords(""), Je.setBasePt(se), Je.setUserDraw(function(te, De) {
                    var ce = te.distanceTo(se);
                    if (!(ce > me * 2)) {
                      var ye = Math.asin(ce / 2 / me) * 2, Ce = se.sub(W).normalize().mult(me), Ee = W.clone().addvec(Ce.clone().rotateBy(s ? Math.PI - ye / 2 : ye / 2)), Ne = W.clone().addvec(Ce.clone().rotateBy(ye)), Oe = Me.calcBulge(se, Ee, Ne).val, Ke = new ke();
                      i.forEach(function($e) {
                        var ur = $e.point, Jr = $e.bulge;
                        Ke.addVertexAt(ur, Jr);
                      }), Ke.addVertexAt(ie.point, Oe), Ke.addVertexAt(Ne), De.drawMcDbEntity(Ke);
                    }
                  }), k.next = 40, Je.go();
                case 40:
                  if (fr = k.sent, Je.getDetailedResult() !== G.kNewCommadIn) {
                    k.next = 41;
                    break;
                  }
                  return f(), k.abrupt("return", {
                    v: !1
                  });
                case 41:
                  if (typeof fr == "number") {
                    k.next = 42;
                    break;
                  }
                  return k.abrupt("return", 1);
                case 42:
                  if (!(fr > me * 2)) {
                    k.next = 43;
                    break;
                  }
                  return U.acutPrintf("*".concat(o("1743"), " ").concat(o("1744"), "*")), I.setLastInputPoint(se), k.abrupt("return", 0);
                case 43:
                  return gr = Math.asin(fr / 2 / me) * 2, cr = se.sub(W).normalize().mult(me), pr = W.clone().addvec(cr.clone().rotateBy(s ? Math.PI - gr / 2 : gr / 2)), Lr = W.clone().addvec(cr.clone().rotateBy(gr)), Pr = Me.calcBulge(se, pr, Lr).val, Dr = {}, Dr.bulge = 0, Dr.point = Lr, i[i.length - 1].bulge = Pr, i.push(Dr), I.setLastInputPoint(Lr), e && e(i), k.abrupt("return", 0);
                case 44:
                  if (I.getDetailedResult() !== G.kNewCommadIn) {
                    k.next = 45;
                    break;
                  }
                  return f(), k.abrupt("return", {
                    v: !1
                  });
                case 45:
                  if (Re) {
                    k.next = 46;
                    break;
                  }
                  return k.abrupt("return", {
                    v: f()
                  });
                case 46:
                  return nr = W.clone().addvec(Re.sub(W).normalize().mult(me)), Le = W.sub(se).angleTo2(W.sub(nr), Be.kZAxis), Ye = new Ae((se.x + nr.x) / 2, (se.y + nr.y) / 2), Ue = W.sub(Ye).normalize().mult(-me), ir = W.clone().addvec((s ? Le < Math.PI : Le > Math.PI) ? Ue.negate() : Ue), or = Me.calcBulge(se, ir, nr).val, aa = {}, aa.bulge = 0, aa.point = nr, i[i.length - 1].bulge = or, i.push(aa), I.setLastInputPoint(nr), e && e(i), k.abrupt("return", 0);
                case 47:
                  if (!I.isKeyWordPicked("R")) {
                    k.next = 62;
                    break;
                  }
                  return jr = new yr(), jr.setMessage(hr("ID_ARX_PLGETSTARTRADIUS", o("1745"))), jr.setKeyWords(""), k.next = 48, jr.go();
                case 48:
                  if (ze = k.sent, jr.getDetailedResult() !== G.kNewCommadIn) {
                    k.next = 49;
                    break;
                  }
                  return f(), k.abrupt("return", {
                    v: !1
                  });
                case 49:
                  if (ze !== null) {
                    k.next = 50;
                    break;
                  }
                  return k.abrupt("return", 1);
                case 50:
                  return We = ie.point, I.setLastInputPoint(We), I.setMessage("".concat(o("1730"), "(").concat(o("1731"), ")")), I.setKeyWords("[".concat(o("169"), "(A)]")), I.setUserDraw(function(te, De) {
                    if (ze) {
                      var ce = te.distanceTo(We);
                      if (!(ce > ze * 2)) {
                        var ye = Math.acos(ce / 2 / ze), Ce = We.clone().addvec(te.sub(We).rotateBy(ye).normalize().mult(ze)), Ee = Ce.clone().addvec(new Ae((We.x + te.x) / 2, (We.y + te.y) / 2).sub(Ce).normalize().mult(s ? -ze : ze)), Ne = Me.calcBulge(We, Ee, te).val, Oe = new ke();
                        i.forEach(function(Ke) {
                          var $e = Ke.point, ur = Ke.bulge;
                          Oe.addVertexAt($e, ur);
                        }), Oe.addVertexAt(ie.point, Ne), Oe.addVertexAt(te), De.drawMcDbEntity(Oe);
                      }
                    }
                  }), k.next = 51, I.go();
                case 51:
                  if (vr = k.sent, !I.isKeyWordPicked("A")) {
                    k.next = 58;
                    break;
                  }
                  return Ir = new tr(), Ir.setMessage(hr("ID_ARX_PLGET_I_ANGLE", o("1736"))), Ir.setKeyWords(""), Ir.setBasePt(We), k.next = 52, Ir.go();
                case 52:
                  if (Yr = k.sent, Ir.getDetailedResult() !== G.kNewCommadIn) {
                    k.next = 53;
                    break;
                  }
                  return f(), k.abrupt("return", {
                    v: !1
                  });
                case 53:
                  if (typeof Yr == "number") {
                    k.next = 54;
                    break;
                  }
                  return k.abrupt("return", 1);
                case 54:
                  return ma = Math.sin(Yr / 2) * ze * 2, I.setMessage("".concat(o("1739"), "(").concat(o("1731"), ")")), I.setKeyWords(""), I.setBasePt(We), I.setUserDraw(function(te, De) {
                    if (ze) {
                      var ce = te.sub(We).normalize(), ye = We.clone().addvec(ce.clone().mult(ma)), Ce = ye.clone().addvec(ce.clone().negate().rotateBy(-(Math.PI / 2 - Yr / 2)).mult(ze)), Ee = Ce.clone().addvec(Ce.sub(new Ae((We.x + ye.x) / 2, (We.y + ye.y) / 2)).normalize().mult(s ? ze : -ze)), Ne = Me.calcBulge(We, Ee, ye).val, Oe = new ke();
                      i.forEach(function(Ke) {
                        var $e = Ke.point, ur = Ke.bulge;
                        Oe.addVertexAt($e, ur);
                      }), Oe.addVertexAt(ie.point, Ne), Oe.addVertexAt(ye), De.drawMcDbEntity(Oe);
                    }
                  }), k.next = 55, I.go();
                case 55:
                  if (ya = k.sent, I.getDetailedResult() !== G.kNewCommadIn) {
                    k.next = 56;
                    break;
                  }
                  return f(), k.abrupt("return", {
                    v: !1
                  });
                case 56:
                  if (ya) {
                    k.next = 57;
                    break;
                  }
                  return k.abrupt("return", 1);
                case 57:
                  return ka = ya.sub(We).normalize(), Sr = We.clone().addvec(ka.clone().mult(ma)), wa = Sr.clone().addvec(ka.clone().negate().rotateBy(-(Math.PI / 2 - Yr / 2)).mult(ze)), Qa = wa.clone().addvec(wa.sub(new Ae((We.x + Sr.x) / 2, (We.y + Sr.y) / 2)).normalize().mult(s ? ze : -ze)), _a = Me.calcBulge(We, Qa, Sr).val, ta = {}, ta.bulge = 0, ta.point = Sr, i[i.length - 1].bulge = _a, i.push(ta), e && e(i), k.abrupt("return", 0);
                case 58:
                  if (I.getDetailedResult() !== G.kNewCommadIn) {
                    k.next = 59;
                    break;
                  }
                  return f(), k.abrupt("return", {
                    v: !1
                  });
                case 59:
                  if (vr) {
                    k.next = 60;
                    break;
                  }
                  return k.abrupt("return", 1);
                case 60:
                  if (Pa = vr.distanceTo(We), !(Pa > ze * 2)) {
                    k.next = 61;
                    break;
                  }
                  return U.acutPrintf("".concat(o("1730"), " *").concat(o("1744"), "*")), k.abrupt("return", 0);
                case 61:
                  return et = Math.acos(Pa / 2 / ze), Da = We.clone().addvec(vr.sub(We).rotateBy(et).normalize().mult(ze)), rt = Da.clone().addvec(new Ae((We.x + vr.x) / 2, (We.y + vr.y) / 2).sub(Da).normalize().mult(s ? -ze : ze)), at = Me.calcBulge(We, rt, vr).val, na = {}, na.bulge = 0, na.point = vr, i[i.length - 1].bulge = at, i.push(na), e && e(i), k.abrupt("return", 0);
                case 62:
                  if (!I.isKeyWordPicked("D")) {
                    k.next = 68;
                    break;
                  }
                  return I.setMessage(o("1746")), I.setKeyWords(""), I.setUserDraw(function(te, De) {
                    De.drawLine(te.toVector3(), ie.point.toVector3());
                  }), k.next = 63, I.go();
                case 63:
                  if (Aa = k.sent, I.getDetailedResult() !== G.kNewCommadIn) {
                    k.next = 64;
                    break;
                  }
                  return f(), k.abrupt("return", {
                    v: !1
                  });
                case 64:
                  if (Aa) {
                    k.next = 65;
                    break;
                  }
                  return k.abrupt("return", 1);
                case 65:
                  return Xr = Aa.sub(ie.point), I.setLastInputPoint(ie.point), I.setMessage("".concat(o("1730"), "(").concat(o("1731"), ")")), I.setKeyWords(""), I.setUserDraw(function(te, De) {
                    var ce = Zr(ie.point, te, s ? Xr.clone().negate() : Xr), ye = new ke();
                    i.forEach(function(Ce) {
                      var Ee = Ce.point, Ne = Ce.bulge;
                      ye.addVertexAt(Ee, Ne);
                    }), ye.addVertexAt(ie.point, ce), ye.addVertexAt(te), De.drawMcDbEntity(ye);
                  }), k.next = 66, I.go();
                case 66:
                  if (tt = k.sent, I.getDetailedResult() !== G.kNewCommadIn) {
                    k.next = 67;
                    break;
                  }
                  return f(), k.abrupt("return", {
                    v: !1
                  });
                case 67:
                  return Gr = {}, Gr.bulge = 0, Gr.point = tt, i[i.length - 1].bulge = Zr(ie.point, Gr.point, s ? Xr.clone().negate() : Xr), i.push(Gr), e && e(i), k.abrupt("return", 0);
                case 68:
                  if (!I.isKeyWordPicked("L")) {
                    k.next = 69;
                    break;
                  }
                  n = !0, k.next = 79;
                  break;
                case 69:
                  if (!I.isKeyWordPicked("S")) {
                    k.next = 77;
                    break;
                  }
                  return br = new Ae(i[i.length - 1].point.x, i[i.length - 1].point.y, 0), $r = new Te(), $r.setMessage(hr("NO1_ID_SPECIFY_ARC2", o("1747"))), $r.setBasePt(br), k.next = 70, $r.go();
                case 70:
                  if (sr = k.sent, $r.getDetailedResult() !== G.kNewCommadIn) {
                    k.next = 71;
                    break;
                  }
                  return f(), k.abrupt("return", {
                    v: !1
                  });
                case 71:
                  if (sr !== null) {
                    k.next = 72;
                    break;
                  }
                  return k.abrupt("return", 1);
                case 72:
                  return qr = new Te(), qr.setMessage(hr("ID_CIRCULAR_ENDPOINT", "".concat(o("1730"), "(").concat(o("1731"), ")"))), qr.setUserDraw(function(te, De) {
                    var ce = new je();
                    ce.computeArc(br.x, br.y, sr.x, sr.y, te.x, te.y);
                    var ye = sr;
                    s && (ye = ce.center.clone().addvec(ce.center.clone().sub(sr)));
                    var Ce = Me.calcBulge(br, ye, te).val, Ee = new ke();
                    i.forEach(function(Ne) {
                      var Oe = Ne.point, Ke = Ne.bulge;
                      Ee.addVertexAt(Oe, Ke);
                    }), Ee.addVertexAt(ie.point, Ce), Ee.addVertexAt(te), De.drawMcDbEntity(Ee);
                  }), k.next = 73, qr.go();
                case 73:
                  if (Tr = k.sent, Tr === null) {
                    k.next = 74;
                    break;
                  }
                  Ma = sr, s && (ia = new je(), ia.computeArc(br.x, br.y, sr.x, sr.y, Tr.x, Tr.y), Ma = ia.center.clone().addvec(ia.center.clone().sub(sr))), Ca = Me.calcBulge(br, Ma, Tr), Ca.ret ? (sa = {}, sa.point = Tr, sa.dBluge = 0, i[i.length - 1].bulge = Ca.val, i.push(sa), e && e(i)) : U.acutPrintf(hr("ID_ENDPOINT_INVALID1", `
 `.concat(o("189"), " *").concat(o("1744"), "*"))), k.next = 76;
                  break;
                case 74:
                  if (qr.getDetailedResult() !== G.kNewCommadIn) {
                    k.next = 75;
                    break;
                  }
                  return f(), k.abrupt("return", {
                    v: !1
                  });
                case 75:
                  return k.abrupt("return", 1);
                case 76:
                  k.next = 79;
                  break;
                case 77:
                  if (!I.isKeyWordPicked("C")) {
                    k.next = 78;
                    break;
                  }
                  return i[i.length - 1].bulge = Zr(ie.point, a, s ? _.clone().negate() : _), Rr = new ke(), Rr.isClosed = !0, i.forEach(function(te) {
                    var De = te.point, ce = te.bulge;
                    Rr.addVertexAt(De, ce);
                  }), nt = Rr.getLength().val, e && e(i), it = u.drawEntity(Rr), k.abrupt("return", {
                    v: {
                      dist: nt,
                      pl: Rr,
                      plId: it
                    }
                  });
                case 78:
                  I.isKeyWordPicked("U") && i.length > 1 && (i.pop(), st = new ke(), i.forEach(function(te) {
                    var De = te.point, ce = te.bulge;
                    st.addVertexAt(De, ce);
                  }), e && e(i), i.length > 0 && I.setLastInputPoint(i[i.length - 1].point));
                case 79:
                  k.next = 82;
                  break;
                case 80:
                  if (I.getDetailedResult() !== G.kNewCommadIn) {
                    k.next = 81;
                    break;
                  }
                  return f(), k.abrupt("return", {
                    v: !1
                  });
                case 81:
                  return k.abrupt("return", 1);
                case 82:
                case "end":
                  return k.stop();
              }
            }, m);
          });
        case 5:
          return P.delegateYield(p(), "t0", 6);
        case 6:
          if (v = P.t0, v !== 0) {
            P.next = 7;
            break;
          }
          return P.abrupt("continue", 5);
        case 7:
          if (v !== 1) {
            P.next = 8;
            break;
          }
          return P.abrupt("continue", 10);
        case 8:
          if (!v) {
            P.next = 9;
            break;
          }
          return P.abrupt("return", v.v);
        case 9:
          P.next = 5;
          break;
        case 10:
          return M = new ke(), i.forEach(function(m) {
            var D = m.point, C = m.bulge;
            M.addVertexAt(D, C);
          }), A = M.getLength().val, e && e(i), b = u.drawEntity(M), P.abrupt("return", {
            dist: A,
            pl: M,
            plId: b
          });
        case 11:
        case "end":
          return P.stop();
      }
    }, r);
  }));
  return function(a, e) {
    return d.apply(this, arguments);
  };
}();
function bt(d, r) {
  var a = r.x, e = r.y;
  return d.x > a && d.y > e || d.x < a && d.y < e;
}
function ei(d, r) {
  var a = (d.x + r.x) / 2, e = (d.y + r.y) / 2;
  return new Ae(a, e);
}
function ri(d, r, a) {
  var e = bt(d, a), n = bt(r, a);
  return e && n;
}
function zt() {
  return Ha.apply(this, arguments);
}
function Ha() {
  return Ha = ee(/* @__PURE__ */ w.mark(function d() {
    var r, a, e, n, t, s, c, u, l, f, g, i, p, v, M, A, b, P, m, D, C, K, R = arguments;
    return w.wrap(function(h) {
      for (; ; ) switch (h.prev = h.next) {
        case 0:
          return r = R.length > 0 && R[0] !== void 0 ? R[0] : !1, a = new Te(), e = [], a.clearLastInputPoint(), a.setMessage(o("1684")), h.next = 1, a.go();
        case 1:
          if (n = h.sent, a.getDetailedResult() !== G.kNewCommadIn) {
            h.next = 2;
            break;
          }
          return h.abrupt("return", !1);
        case 2:
          if (n) {
            h.next = 3;
            break;
          }
          return h.abrupt("return");
        case 3:
          return a.setUserDraw(function(y, N) {
            N.drawLine(n.toVector3(), y.toVector3());
          }), a.setMessage(o("1694")), a.setKeyWords("[".concat(o("1769"), "(M)]")), h.next = 4, a.go();
        case 4:
          if (t = h.sent, a.getDetailedResult() !== G.kNewCommadIn) {
            h.next = 5;
            break;
          }
          return h.abrupt("return", !1);
        case 5:
          if (a.getStatus() !== ue.kCancel) {
            h.next = 6;
            break;
          }
          return h.abrupt("return");
        case 6:
          if (!a.isKeyWordPicked("M")) {
            h.next = 10;
            break;
          }
          return h.next = 7, Ft(n, function(y) {
            var N = new ke();
            y.forEach(function(T) {
              var E = T.point, F = T.bulge;
              N.addVertexAt(E, F);
            }), U.acutPrintf(o("191") + " = " + N.getLength().val);
          });
        case 7:
          if (s = h.sent, s !== !1) {
            h.next = 8;
            break;
          }
          return h.abrupt("return", s);
        case 8:
          if (c = s || {}, u = c.plId, u) {
            h.next = 9;
            break;
          }
          return h.abrupt("return");
        case 9:
          return l = u.getMcDbEntity(), l && e.push(l), h.abrupt("return", {
            markedLines: e
          });
        case 10:
          if (!t) {
            h.next = 11;
            break;
          }
          return r && (f = ri(n, t, ei(n, t)), g = new _r(), g.referenceAxis = new THREE.Vector3(0, 0, f ? -1 : 1), g.isAligned = !0, g.pt1 = n.toVector3(), g.pt2 = t.toVector3(), U.addToCurrentSpace(g), e.push(g), Math.abs(n.x - t.x) > 1e-3 && Math.abs(n.y - t.y) > 1e-3 && (i = new _r(), i.isAligned = !1, i.referenceAxis = new THREE.Vector3(0, n.y > t.y ? 1 : -1, -1), i.pt1 = n.toVector3(), i.pt2 = t.toVector3(), U.addToCurrentSpace(i), e.push(i), p = new _r(), p.isAligned = !1, p.referenceAxis = new THREE.Vector3(n.x > t.x ? 1 : -1, 0, -1), p.pt1 = n.toVector3(), p.pt2 = t.toVector3(), U.addToCurrentSpace(p), e.push(p), v = new Or(), v.offsetDist = 0, v.center = n.toVector3(), v.pt1 = n.toVector3().add(new THREE.Vector3(1, 0, 0)), v.pt2 = t.toVector3(), U.addToCurrentSpace(v), e.push(v)), M = new dr(), M.pt1 = n.toVector3(), M.pt2 = t.toVector3(), U.addToCurrentSpace(M), e.push(M)), A = n.distanceTo(t), b = t.x - n.x, P = t.y - n.y, m = t.z - n.z, D = Math.atan2(P, b) * (180 / Math.PI), C = Math.sqrt(b * b + P * P + m * m), K = C === 0 ? 0 : Math.asin(m / C) * (180 / Math.PI), U.acutPrintf("".concat(o("191"), " = ").concat(Vr(A, 4), " , XY ").concat(o("1770"), " = ").concat(Vr(D, 4), " , ").concat(o("1771"), " XY ").concat(o("1772"), " = ").concat(Vr(K, 4), `
 X 增量 = `).concat(Vr(b, 4), "，  Y 增量 = ").concat(Vr(P, 4), "，   Z 增量 = ").concat(Vr(m, 4))), h.abrupt("return", {
            dist: A,
            angleInDegrees: D,
            angleWithZAxis: K,
            deltaX: b,
            deltaY: P,
            deltaZ: m,
            markedLines: e
          });
        case 11:
        case "end":
          return h.stop();
      }
    }, d);
  })), Ha.apply(this, arguments);
}
oe("_MxMeasurementDistance", zt);
function ai() {
  return ja.apply(this, arguments);
}
function ja() {
  return ja = ee(/* @__PURE__ */ w.mark(function d() {
    var r, a, e, n, t, s, c, u, l, f, g, i = arguments;
    return w.wrap(function(p) {
      for (; ; ) switch (p.prev = p.next) {
        case 0:
          r = i.length > 0 && i[0] !== void 0 ? i[0] : !1;
        case 1:
          return a = new He(), e = new rr(), e.AddMcDbEntityTypes("CIRCLE,ARC"), a.setFilter(e), a.setMessage(o("1762")), p.next = 2, a.go();
        case 2:
          if (n = p.sent, a.getDetailedResult() !== G.kCodeAbort) {
            p.next = 3;
            break;
          }
          return p.abrupt("return");
        case 3:
          if (a.getDetailedResult() !== G.kEcsIn) {
            p.next = 4;
            break;
          }
          return p.abrupt("return");
        case 4:
          if (a.getDetailedResult() !== G.kMouseRightIn) {
            p.next = 5;
            break;
          }
          return p.abrupt("return");
        case 5:
          if (a.getDetailedResult() !== G.kNewCommadIn) {
            p.next = 6;
            break;
          }
          return p.abrupt("return", !1);
        case 6:
          if (a.getDetailedResult() !== G.kNullSpaceIn) {
            p.next = 7;
            break;
          }
          return p.abrupt("return");
        case 7:
          if (a.getDetailedResult() !== G.kNullEnterIn) {
            p.next = 8;
            break;
          }
          return p.abrupt("return");
        case 8:
          if (n) {
            p.next = 9;
            break;
          }
          return p.abrupt("return");
        case 9:
          if (t = n.getMcDbEntity(), !(t instanceof je || t instanceof xe)) {
            p.next = 12;
            break;
          }
          if (s = [], !r) {
            p.next = 11;
            break;
          }
          if (c = t.getClosestPointTo(a.getDocPickPoint(), !1), u = c.val, l = c.ret, !(!l || !u)) {
            p.next = 10;
            break;
          }
          return p.abrupt("return");
        case 10:
          f = t.center, g = new _r(), g.pt1 = u.toVector3(), g.pt2 = f.toVector3(), g.isAligned = !0, g.offsetHeight = 0, U.addToCurrentSpace(g), s.push(g);
        case 11:
          return U.acutPrintf(o("187") + " = " + t.radius + `
` + o("190") + " = " + t.radius * 2 + `
`), p.abrupt("return", {
            radius: t.radius,
            markedLines: s
          });
        case 12:
          p.next = 1;
          break;
        case 13:
        case "end":
          return p.stop();
      }
    }, d);
  })), ja.apply(this, arguments);
}
function ga(d, r, a, e) {
  var n = xr(e, d, a), t = xr(e, r, a);
  return isNaN(t) ? !0 : isNaN(n) ? !1 : t === n ? a.distanceTo(d) > a.distanceTo(r) : n < t;
}
function ti() {
  return Ya.apply(this, arguments);
}
function Ya() {
  return Ya = ee(/* @__PURE__ */ w.mark(function d() {
    var r, a, e, n;
    return w.wrap(function(t) {
      for (; ; ) switch (t.prev = t.next) {
        case 0:
          r = new He(), a = new rr(), a.AddMcDbEntityTypes("CIRCLE,ARC,LINE,LWPOLYLINE"), e = /* @__PURE__ */ w.mark(function s() {
            var c, u, l, f, g, i, p, v, M, A, b, P, m, D, C, K, R, h, y, N, T, E, F, S, I, _, fe, ge, ve, pe, ne, j, ie, J, X, B, O, he, Y, z, H, L, Z, x, re, $, Q;
            return w.wrap(function(V) {
              for (; ; ) switch (V.prev = V.next) {
                case 0:
                  return r.setFilter(a), r.setMessage("".concat(o("1581")).concat(o("171"), "、").concat(o("172"), "、").concat(o("173"), "<").concat(o("1586"), ">")), V.next = 1, r.go();
                case 1:
                  if (c = V.sent, u = r.getDetailedResult(), l = [], r.getDetailedResult() !== G.kNewCommadIn) {
                    V.next = 2;
                    break;
                  }
                  return V.abrupt("return", {
                    v: !1
                  });
                case 2:
                  if (r.getDetailedResult() !== G.kCodeAbort) {
                    V.next = 3;
                    break;
                  }
                  return V.abrupt("return", {
                    v: !1
                  });
                case 3:
                  if (r.getDetailedResult() !== G.kEcsIn) {
                    V.next = 4;
                    break;
                  }
                  return V.abrupt("return", {
                    v: void 0
                  });
                case 4:
                  if (!(u === G.kNullEnterIn || u === G.kNullSpaceIn || u === G.kMouseRightIn)) {
                    V.next = 11;
                    break;
                  }
                  return f = new mn(), g = new Or(), f.setMessage(`
`.concat(o("1750"))), V.next = 5, f.go();
                case 5:
                  if (i = V.sent, i) {
                    V.next = 6;
                    break;
                  }
                  return V.abrupt("return", {
                    v: void 0
                  });
                case 6:
                  return g.center = i, f.setMessage("\n${t('1588')}"), f.setUserDraw(function(de, Pe) {
                    Pe.drawLine(de, i);
                  }), V.next = 7, f.go();
                case 7:
                  if (p = V.sent, p) {
                    V.next = 8;
                    break;
                  }
                  return V.abrupt("return", {
                    v: void 0
                  });
                case 8:
                  return g.pt1 = p, f.setMessage(`
`.concat(o("1589"), ":")), f.setUserDraw(function(de, Pe) {
                    Pe.drawLine(de, i), Pe.drawLine(p, i), g.offsetDist = 0, g.pt2 = de, Pe.drawCustomEntity(g);
                  }), V.next = 9, f.go();
                case 9:
                  if (v = V.sent, v) {
                    V.next = 10;
                    break;
                  }
                  return V.abrupt("return", {
                    v: void 0
                  });
                case 10:
                  return g.pt2 = v, M = i.distanceTo(p) - i.distanceTo(v), g.offsetDist = M < 0 ? 0 : M / 2, A = new dr(), A.pt1 = i, A.pt2 = p, b = new dr(), b.pt1 = i, b.pt2 = v, U.addToCurrentSpace(A), U.addToCurrentSpace(b), U.addToCurrentSpace(g), P = g.getAngle(), U.acutPrintf(o("169") + " = " + P + "°"), l.push(g, A, b), V.abrupt("return", {
                    v: {
                      angle: P,
                      markedArcs: l
                    }
                  });
                case 11:
                  if (c) {
                    V.next = 12;
                    break;
                  }
                  return V.abrupt("return", 0);
                case 12:
                  if (m = c.getMcDbEntity(), m) {
                    V.next = 13;
                    break;
                  }
                  return V.abrupt("return", 0);
                case 13:
                  if (!(m instanceof Ie || m instanceof ke)) {
                    V.next = 30;
                    break;
                  }
                  if (h = r.getDocPickPoint(), m instanceof ke ? (N = Ur(m, h, 2) || {}, T = N.start, E = N.end, D = T, C = E) : (D = m.startPoint, C = m.endPoint), D) {
                    V.next = 14;
                    break;
                  }
                  return V.abrupt("return", 0);
                case 14:
                  if (C) {
                    V.next = 15;
                    break;
                  }
                  return V.abrupt("return", 0);
                case 15:
                  return F = new rr(), F.AddMcDbEntityTypes("LINE,LWPOLYLINE"), r.setFilter(F), r.setMessage(o("1590")), V.next = 16, r.go();
                case 16:
                  if (S = V.sent, y = r.getDocPickPoint(), r.getDetailedResult() !== G.kNewCommadIn) {
                    V.next = 17;
                    break;
                  }
                  return V.abrupt("return", {
                    v: !1
                  });
                case 17:
                  if (r.getDetailedResult() !== G.kCodeAbort) {
                    V.next = 18;
                    break;
                  }
                  return V.abrupt("return", {
                    v: !1
                  });
                case 18:
                  if (r.getDetailedResult() !== G.kEcsIn) {
                    V.next = 19;
                    break;
                  }
                  return V.abrupt("return", {
                    v: void 0
                  });
                case 19:
                  if (S) {
                    V.next = 20;
                    break;
                  }
                  return V.abrupt("continue", 15);
                case 20:
                  if (S.isValid()) {
                    V.next = 21;
                    break;
                  }
                  return V.abrupt("continue", 15);
                case 21:
                  if (I = S.getMcDbEntity(), I instanceof ke ? (_ = Ur(I, y, 2) || {}, fe = _.start, ge = _.end, K = fe, R = ge) : I instanceof Ie && (K = I.startPoint, R = I.endPoint), !(K && R)) {
                    V.next = 22;
                    break;
                  }
                  return V.abrupt("continue", 23);
                case 22:
                  return V.abrupt("continue", 15);
                case 23:
                  if (ve = new Ie(D, C).IntersectWith(new Ie(K, R), Fr.Intersect.kExtendBoth), !ve.isEmpty()) {
                    V.next = 24;
                    break;
                  }
                  return U.acutPrintf(o("1751")), V.abrupt("return", {
                    v: void 0
                  });
                case 24:
                  if (D) {
                    V.next = 25;
                    break;
                  }
                  return V.abrupt("return", 0);
                case 25:
                  if (C) {
                    V.next = 26;
                    break;
                  }
                  return V.abrupt("return", 0);
                case 26:
                  if (K) {
                    V.next = 27;
                    break;
                  }
                  return V.abrupt("return", 0);
                case 27:
                  if (R) {
                    V.next = 28;
                    break;
                  }
                  return V.abrupt("return", 0);
                case 28:
                  if (y) {
                    V.next = 29;
                    break;
                  }
                  return V.abrupt("return", 0);
                case 29:
                  return pe = ve.at(0), ne = ga(D, C, pe, h), j = ne ? D : C, ie = ga(K, R, pe, h), J = ie ? K : R, X = new Or(), X.center = pe.toVector3(), X.pt1 = j.toVector3(), X.pt2 = J.toVector3(), X.isMaxRadius = !0, X.offsetDist = 0, U.addToCurrentSpace(X), B = X.getAngle(), U.acutPrintf(o("169") + " = " + B + "°"), l.push(X), O = new dr(), O.pt1 = X.pt1, O.pt2 = X.center, he = new dr(), he.pt1 = X.center, he.pt2 = X.pt2, U.addToCurrentSpace(O), U.addToCurrentSpace(he), l.push(O, he), V.abrupt("return", {
                    v: {
                      angle: B,
                      markedArcs: l
                    }
                  });
                case 30:
                  if (!(m instanceof je)) {
                    V.next = 31;
                    break;
                  }
                  return Y = new Or(), Y.offsetDist = m.radius, Y.center = m.center.toVector3(), Y.pt1 = new THREE.Vector3(m.radius), Y.pt1.applyAxisAngle(new THREE.Vector3(0, 0, 1), m.startAngle).add(m.center.toVector3()), Y.pt2 = new THREE.Vector3(m.radius), Y.pt2.applyAxisAngle(new THREE.Vector3(0, 0, 1), m.endAngle).add(m.center.toVector3()), z = m.endAngle - m.startAngle, z > Math.PI ? z -= Math.PI * 2 : z < -Math.PI && (z += Math.PI * 2), Y.isClockwise = Math.abs(z) > Math.PI && z > 0, U.addToCurrentSpace(Y), H = Y.getAngle(), U.acutPrintf(o("169") + " = " + H + "°"), l.push(Y), L = new dr(), L.pt1 = Y.pt1, L.pt2 = Y.center, Z = new dr(), Z.pt1 = Y.center, Z.pt2 = Y.pt2, U.addToCurrentSpace(L), U.addToCurrentSpace(Z), l.push(L, Z), V.abrupt("return", {
                    v: {
                      angle: H,
                      markedArcs: l
                    }
                  });
                case 31:
                  if (!(m instanceof xe)) {
                    V.next = 35;
                    break;
                  }
                  return x = new Or(), x.center = m.center.toVector3(), x.pt1 = r.getDocPickPoint().toVector3(), re = new Te(), re.setUserDraw(function(de, Pe) {
                    x.pt2 = de.toVector3(), x.offsetDist = 0, Pe.drawCustomEntity(x);
                  }), re.setMessage(o("1752")), V.next = 32, re.go();
                case 32:
                  if ($ = V.sent, re.getDetailedResult() !== G.kNewCommadIn) {
                    V.next = 33;
                    break;
                  }
                  return V.abrupt("return", {
                    v: !1
                  });
                case 33:
                  if ($) {
                    V.next = 34;
                    break;
                  }
                  return V.abrupt("return", {
                    v: void 0
                  });
                case 34:
                  return x.pt2 = $.toVector3(), x.offsetDist = m.radius, U.addToCurrentSpace(x), Q = x.getAngle(), U.acutPrintf(o("169") + " = " + Q + "°"), l.push(x), V.abrupt("return", {
                    v: {
                      angle: Q,
                      markedArcs: l
                    }
                  });
                case 35:
                case "end":
                  return V.stop();
              }
            }, s);
          });
        case 1:
          return t.delegateYield(e(), "t0", 2);
        case 2:
          if (n = t.t0, n !== 0) {
            t.next = 3;
            break;
          }
          return t.abrupt("continue", 1);
        case 3:
          if (!n) {
            t.next = 4;
            break;
          }
          return t.abrupt("return", n.v);
        case 4:
          t.next = 1;
          break;
        case 5:
        case "end":
          return t.stop();
      }
    }, d);
  })), Ya.apply(this, arguments);
}
var Bt = function(r) {
  var a = r.numVerts(), e = [];
  if (a < 3) return e;
  var n = we.getCurrentMxCAD(), t = r.getPointAt(0).val, s = r.getPointAt(a - 1).val;
  if (!r.isClosed && !t.isEqualTo(s)) return e;
  n.pathMoveTo(t.x, t.y);
  for (var c = 0; c < a; c++) {
    var u = r.getPointAt(c).val, l = r.getBulgeAt(c), f = r.getWidthsAt(c), g = f.val1, i = f.val2;
    n.pathLineToEx(u.x, u.y, g, i, l);
  }
  n.pathLineTo(s.x, s.y);
  var p = n.drawPathToHatch(), v = p.getMcDbEntity();
  return v && e.push(v), e;
}, ni = /* @__PURE__ */ function() {
  var d = ee(/* @__PURE__ */ w.mark(function r(a) {
    var e, n, t, s, c, u, l, f, g, i, p, v, M, A, b;
    return w.wrap(function(P) {
      for (; ; ) switch (P.prev = P.next) {
        case 0:
          if (e = we.getCurrentMxCAD(), !(a instanceof ke)) {
            P.next = 1;
            break;
          }
          return P.abrupt("return", Bt(a));
        case 1:
          if (!(a instanceof xe)) {
            P.next = 3;
            break;
          }
          if (e.pathMoveTo(a.center.x, a.center.y), e.pathCircle(a.center.x, a.center.y, a.radius), n = e.drawPathToHatch(), t = n.getMcDbEntity(), !t) {
            P.next = 2;
            break;
          }
          return P.abrupt("return", [t]);
        case 2:
          P.next = 5;
          break;
        case 3:
          return s = a.clone(), c = e.getDatabase().currentSpace.getBoundingBox(), u = c.minPt, l = c.maxPt, f = u.clone(), g = l.clone(), s.move(f, g), i = s.getBoundingBox(), p = new Ae((i.minPt.x + i.maxPt.x) / 2, (i.minPt.y + i.maxPt.y) / 2), v = e.drawEntity(s), P.next = 4, ee(/* @__PURE__ */ w.mark(function m() {
            return w.wrap(function(D) {
              for (; ; ) switch (D.prev = D.next) {
                case 0:
                  return D.abrupt("return", new Promise(function(C) {
                    return setTimeout(C, 1);
                  }));
                case 1:
                case "end":
                  return D.stop();
              }
            }, m);
          }))();
        case 4:
          if (M = Me.builderHatchFromPoint(p), v.erase(), s.erase(), !M) {
            P.next = 5;
            break;
          }
          if (M.move(g, f), A = e.drawEntity(M), b = A.getMcDbEntity(), !b) {
            P.next = 5;
            break;
          }
          return P.abrupt("return", [b]);
        case 5:
        case "end":
          return P.stop();
      }
    }, r);
  }));
  return function(a) {
    return d.apply(this, arguments);
  };
}(), ii = /* @__PURE__ */ function() {
  var d = ee(/* @__PURE__ */ w.mark(function r() {
    var a, e, n, t, s, c, u, l, f, g, i, p, v, M, A, b, P, m, D, C, K;
    return w.wrap(function(R) {
      for (; ; ) switch (R.prev = R.next) {
        case 0:
          a = new Te(), e = [], n = !1, t = !1, s = 0;
        case 1:
          return a.setMessage((n ? "(".concat(o("1753"), ")") : "") + (t ? "(".concat(o("1754"), ")") : "") + "".concat(o("1617"), "<").concat(o("177"), ">")), a.setKeyWords("[".concat(o("177"), "(O)/").concat(n ? "" : o("1755") + "(A)/").concat(t ? "" : o("1756") + "(S)/").concat(o("1757"), "(X)]")), R.next = 2, ee(/* @__PURE__ */ w.mark(function h() {
            return w.wrap(function(y) {
              for (; ; ) switch (y.prev = y.next) {
                case 0:
                  return y.abrupt("return", new Promise(function(N) {
                    return setTimeout(N, 1);
                  }));
                case 1:
                case "end":
                  return y.stop();
              }
            }, h);
          }))();
        case 2:
          return R.next = 3, a.go();
        case 3:
          if (c = R.sent, a.getDetailedResult() !== G.kNewCommadIn) {
            R.next = 4;
            break;
          }
          return R.abrupt("return", e.length > 0 ? {
            markedLines: e
          } : !1);
        case 4:
          if (a.getDetailedResult() !== G.kCodeAbort) {
            R.next = 5;
            break;
          }
          return R.abrupt("return", e.length > 0 ? {
            markedLines: e
          } : !1);
        case 5:
          if (!(a.getDetailedResult() === G.kEcsIn || a.getDetailedResult() === G.kMouseRightIn)) {
            R.next = 6;
            break;
          }
          return R.abrupt("return", e.length > 0 ? {
            markedLines: e
          } : void 0);
        case 6:
          if (!(a.isKeyWordPicked("O") || a.getDetailedResult() === G.kNullEnterIn || a.getDetailedResult() === G.kNullSpaceIn)) {
            R.next = 18;
            break;
          }
        case 7:
          return u = new He(), u.setMessage(o("1602")), R.next = 8, ee(/* @__PURE__ */ w.mark(function h() {
            return w.wrap(function(y) {
              for (; ; ) switch (y.prev = y.next) {
                case 0:
                  return y.abrupt("return", new Promise(function(N) {
                    return setTimeout(N, 1);
                  }));
                case 1:
                case "end":
                  return y.stop();
              }
            }, h);
          }))();
        case 8:
          return R.next = 9, u.go();
        case 9:
          if (l = R.sent, u.getDetailedResult() !== G.kNewCommadIn) {
            R.next = 10;
            break;
          }
          return R.abrupt("return", e.length > 0 ? {
            markedLines: e
          } : !1);
        case 10:
          if (u.getDetailedResult() !== G.kCodeAbort) {
            R.next = 11;
            break;
          }
          return R.abrupt("return", e.length > 0 ? {
            markedLines: e
          } : !1);
        case 11:
          if (u.getDetailedResult() !== G.kEcsIn) {
            R.next = 12;
            break;
          }
          return R.abrupt("return", e.length > 0 ? {
            markedLines: e
          } : !1);
        case 12:
          if (!(u.getDetailedResult() === G.kNullEnterIn || u.getDetailedResult() === G.kNullSpaceIn || u.getDetailedResult() === G.kMouseRightIn)) {
            R.next = 13;
            break;
          }
          return R.abrupt("continue", 18);
        case 13:
          if (l) {
            R.next = 14;
            break;
          }
          return R.abrupt("continue", 7);
        case 14:
          if (f = l.getMcDbEntity(), f) {
            R.next = 15;
            break;
          }
          return R.abrupt("continue", 7);
        case 15:
          return g = f.getArea().val, i = 0, f instanceof Kr && (i = f.getLength().val), R.next = 16, ni(f);
        case 16:
          if (p = R.sent, p && e.push.apply(e, Wr(p)), g === 0 && p && (f instanceof xe ? g = Math.PI * Math.pow(f.radius, 2) : f instanceof zr && f.startAngle === 0 && f.endAngle === Math.PI * 2 ? (v = Math.sqrt(f.majorAxis.x * f.majorAxis.x + f.majorAxis.y * f.majorAxis.y) / 2, M = v * f.radiusRatio, g = Math.PI * v * M, A = Math.pow((v - M) / (v + M), 2), i = Math.PI * (v + M) * (1 + 3 * A / (10 + Math.sqrt(4 - 3 * A)))) : g = p.reduce(function(h, y) {
            return h + y.getArea().val;
          }, 0)), g === 0 ? U.acutPrintf(o("1758") + `
`) : U.acutPrintf("".concat(o("1759"), " = ").concat(g, ", ").concat(o("1760"), " = ").concat(i, `
`)), !(n || t)) {
            R.next = 17;
            break;
          }
          return n ? s += g : s -= g, U.acutPrintf("".concat(o("1761"), " = ").concat(s, `
`)), R.abrupt("continue", 7);
        case 17:
          return R.abrupt("return", {
            markedLines: e
          });
        case 18:
          if (!a.isKeyWordPicked("A")) {
            R.next = 19;
            break;
          }
          return n = !0, t = !1, R.abrupt("continue", 1);
        case 19:
          if (!a.isKeyWordPicked("S")) {
            R.next = 20;
            break;
          }
          return t = !0, n = !1, R.abrupt("continue", 1);
        case 20:
          if (!a.isKeyWordPicked("X")) {
            R.next = 21;
            break;
          }
          return U.acutPrintf("".concat(o("1761"), " = ").concat(s, `
`)), R.abrupt("return", e.length > 0 ? {
            markedLines: e
          } : void 0);
        case 21:
          if (!c) {
            R.next = 26;
            break;
          }
          return R.next = 22, Ft(c);
        case 22:
          if (b = R.sent, b !== !1) {
            R.next = 23;
            break;
          }
          return R.abrupt("return", e.length > 0 ? {
            markedLines: e
          } : b);
        case 23:
          if (P = b || {}, m = P.plId, m) {
            R.next = 24;
            break;
          }
          return R.abrupt("return", e.length > 0 ? {
            markedLines: e
          } : void 0);
        case 24:
          if (D = m.getMcDbEntity(), !(D instanceof ke)) {
            R.next = 26;
            break;
          }
          if (D.isClosed = !0, e.push(D), C = Bt(D), e.push.apply(e, Wr(C)), K = D.getArea().val, U.acutPrintf("".concat(o("1759"), " = ").concat(D.getArea().val, ", ").concat(o("1760"), " = ").concat(D.getLength().val, `
`)), !(n || t)) {
            R.next = 25;
            break;
          }
          return n ? s += K : s -= K, U.acutPrintf("".concat(o("1761"), " = ").concat(s, `
`)), R.abrupt("continue", 1);
        case 25:
          return R.abrupt("return", {
            markedLines: e
          });
        case 26:
          R.next = 1;
          break;
        case 27:
        case "end":
          return R.stop();
      }
    }, r);
  }));
  return function() {
    return d.apply(this, arguments);
  };
}();
function si(d, r, a) {
  return r = Cr(r), Ja(d, xt() ? Reflect.construct(r, a || [], Cr(d).constructor) : r.apply(d, a));
}
function xt() {
  try {
    var d = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch (r) {
  }
  return (xt = function() {
    return !!d;
  })();
}
var ui = /* @__PURE__ */ function(d) {
  function r() {
    return va(this, r), si(this, r, arguments);
  }
  return qa(r, d), pa(r, [{
    key: "getTypeName",
    value: function() {
      return "MxSelectLine";
    }
  }, {
    key: "worldDraw",
    value: function(e) {
      e.setLineWidthByPixels(!0), e.setLineWidth(10), e.setColor(16737894), e.drawSelectLine(this.pt1, this.pt2);
    }
  }]);
}(dr);
function Ut(d, r, a) {
  var e = d.distanceTo(r), n = e / 2, t = n * a, s = (n * n + t * t) / (2 * t), c = (d.x + r.x) / 2, u = (d.y + r.y) / 2;
  return new Ae(c, u).addvec(r.clone().sub(d).perpVector().normalize().mult(s - t));
}
function li(d, r, a, e) {
  var n = r.clone().sub(d), t = a.clone().sub(d), s = n.length(), c = new THREE.Vector3().crossVectors(n, t);
  typeof e == "undefined" && (e = c.dot(new THREE.Vector3(0, 0, 1)) < 0);
  var u = n.clone().add(t);
  e && (u = u.negate()), u = u.normalize();
  var l = d.clone().add(u.multiplyScalar(s));
  return l;
}
oe("_MEASUREGEOM", /* @__PURE__ */ ee(/* @__PURE__ */ w.mark(function d() {
  var r, a, e, n, t, s, c, u;
  return w.wrap(function(l) {
    for (; ; ) switch (l.prev = l.next) {
      case 0:
        e = o("1764"), n = [], t = function() {
          n.forEach(function(g) {
            g.erase();
          });
        }, l.prev = 1, s = /* @__PURE__ */ w.mark(function f() {
          var g, i, p, v, M, A, b, P, m, D, C, K, R, h, y, N, T, E, F, S, I, _, fe, ge, ve, pe, ne, j, ie;
          return w.wrap(function(J) {
            for (; ; ) switch (J.prev = J.next) {
              case 0:
                return b = new Te(), b.setCursorType(St.kCross), b.disableAllTrace(), b.setDisableDynInput(!0), b.clearLastInputPoint(), b.setMessage(e), P = "[".concat(o("191"), "(D)/").concat(o("187"), "(R)/").concat(o("169"), "(A)/").concat(o("192"), "(AR)/").concat(o("1767"), "(Q)/").concat(o("193"), "(M)/").concat(o("1757"), "(X)]"), b.setKeyWords(P), m = we.getCurrentMxCAD(), D = new ha(), C = new rr([fn.kEntityType, "LINE,ARC,CIRCLE,LWPOLYLINE,INSERT"]), K = function(B, O, he) {
                  for (var Y, z, H, L = function() {
                    var $ = B[x], Q = $.getMcDbEntity();
                    if (!Q) return 0;
                    if (Q instanceof gn) {
                      var V = Q.blockTableRecordId.getMcDbBlockTableRecord();
                      return V ? {
                        v: K(V.getAllEntityId(), O.clone(), he.clone())
                      } : 0;
                    }
                    if (!(Q instanceof Kr)) return 0;
                    var de = Q.IntersectWith(new Ie(O, he), Fr.Intersect.kOnBothOperands);
                    if (Q instanceof ke && Q.isClosed) {
                      var Pe = Q.numVerts() - 1, q = Q.getPointAt(0).val, be = Q.getPointAt(Pe).val, le = new Ie(q, be).IntersectWith(new Ie(O, he), Fr.Intersect.kOnBothOperands);
                      if (!le.isEmpty()) {
                        var ae = le.at(0), W = ae.distanceTo(O);
                        (typeof Y == "undefined" || W < Y) && (z = Q, Y = W, H = ae);
                      }
                    }
                    if (de.isEmpty()) return 0;
                    var se, me;
                    de.forEach(function(Re) {
                      var Se = Re.distanceTo(O);
                      (typeof me == "undefined" || Se < me) && (me = Se, se = Re);
                    }), (typeof Y == "undefined" || me < Y) && (z = Q, Y = me, H = se);
                  }, Z, x = 0; x < B.length; x++)
                    if (Z = L(), Z !== 0 && Z)
                      return Z.v;
                  if (z)
                    return {
                      minDistEnt: z,
                      minDist: Y,
                      intersectPt: H
                    };
                }, R = function(B, O) {
                  if (D.crossingSelect(B.x, B.y, O.x, O.y, C), !D.isNull()) {
                    var he = K(D.getIds(), B, O);
                    return he;
                  }
                }, h = function(B, O, he, Y) {
                  var z = O.clone().addvec(he.clone().mult(U.viewCoordLong2Cad(16))), H = Br.createDashedLines([O.toVector3(), z.toVector3()], 8421504, 0.1, 0.1), L = O.clone().addvec(he.clone().mult(U.viewCoordLong2Cad(28)));
                  B.drawEntity(H), B.drawText(Y, U.viewCoordLong2Cad(16), 0, L.toVector3());
                }, y = function(B, O, he, Y, z) {
                  var H;
                  if (O instanceof ke || O instanceof Ie) {
                    var L, Z;
                    if (O instanceof Ie && (L = O.startPoint, Z = O.endPoint), O instanceof ke) {
                      var x = Ur(O, z, 10);
                      if (!x) return;
                      var re = O.getBulgeAt(x.startIndex);
                      if (re === 0)
                        L = x.start, Z = x.end;
                      else {
                        var $ = O.getParamAtPoint(x.start).val, Q = O.getParamAtPoint(x.end).val, V = O.getDistAtParam($).val, de = O.getDistAtParam(Q).val, Pe = Ut(x.start, x.end, re);
                        B.drawCircle(x.end.toVector3(), 5);
                        var q = li(Pe.toVector3(), x.start.toVector3(), x.end.toVector3()), be = q.x, le = q.y, ae = new Ae(be, le), W = ae.clone().sub(Pe).normalize(), se = Pe.distanceTo(ae);
                        Math.abs(re) > 1 && (ae.addvec(Pe.clone().sub(ae).normalize().mult(se * 2)), W.negate()), h(B, ae, W, Math.abs(de - V).toFixed(3));
                      }
                    }
                    if (L && Z) {
                      var me = new ui();
                      me.pt1 = L.toVector3(), me.pt2 = Z.toVector3(), B.drawCustomEntity(me);
                      var Re = new _r();
                      Re.pt1 = L.toVector3(), Re.pt2 = Z.toVector3(), Re.isAligned = !0, H = function() {
                        var ar = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Y.x > he.x || Y.y < he.y;
                        Re.referenceAxis = new THREE.Vector3(0, 0, ar ? 1 : -1), B.drawCustomEntity(Re);
                      };
                      var Se = new Ie(L, Z);
                      return {
                        draw: H,
                        line: Se
                      };
                    }
                  }
                  if (O instanceof xe) {
                    var Ve = new Be(-1, 0, 0), Xe = O.center.clone().addvec(Ve.clone().mult(O.radius));
                    h(B, Xe, Ve, O.getLength().val.toFixed(3));
                  }
                  if (O instanceof je) {
                    var qe = O.getGripPoints(), Ge = qe.at(2);
                    h(B, Ge, Ge.sub(O.center).normalize(), O.getLength().val.toFixed(3));
                  }
                }, N = function(B, O, he, Y, z) {
                  if (Y && z && !(Y.startPoint.isEqualTo(z.startPoint) && Y.endPoint.isEqualTo(z.endPoint))) {
                    var H = Y.IntersectWith(z, Fr.Intersect.kOnBothOperands);
                    if (!H.isEmpty()) {
                      var L = new Or();
                      L.offsetDist = 0;
                      var Z = H.at(0), x = ga(Y.startPoint, Y.endPoint, Z, O), re = ga(z.startPoint, z.endPoint, Z, he);
                      x ? L.pt1 = Y.startPoint.toVector3() : L.pt1 = Y.endPoint.toVector3(), re ? L.pt2 = z.startPoint.toVector3() : L.pt2 = z.endPoint.toVector3(), L.center = Z.toVector3();
                      var $ = L.getAngle();
                      if ($ === Math.PI / 2) {
                        B.setColor(16760576), L.radius = Math.min(U.viewCoordLong2Cad(10), Math.min(Y.getLength().val, z.getLength().val) / 10);
                        var Q = L.getRadius(!0), V = L.getStartPoint().clone().add(L.center.clone().sub(L.pt1).normalize().negate().multiplyScalar(Q)), de = L.getEndPoint().clone().add(L.center.clone().sub(L.pt2).normalize().negate().multiplyScalar(Q)), Pe = new THREE.Vector3(V.x + de.x - L.center.x, V.y + de.y - L.center.y);
                        B.drawLine(V, Pe), B.drawLine(de, Pe);
                      } else
                        L.radius = U.viewCoordLong2Cad(26), B.drawCustomEntity(L);
                      return $;
                    }
                  }
                }, T = function(B, O, he, Y, z, H) {
                  var L = new Ie(O, he), Z = new Ie(O, Y), x = new Ie(O, z), re = new Ie(O, H), $ = R(O, he), Q = R(O, Y), V = R(O, z), de = R(O, H);
                  $ && (L.endPoint = $.intersectPt), Q && (Z.endPoint = Q.intersectPt), V && (x.endPoint = V.intersectPt), de && (re.endPoint = de.intersectPt), B.setColor(16777215);
                  var Pe = $ && y(B, $.minDistEnt, O, he, $.intersectPt) || {}, q = Pe.line, be = Pe.draw, le = Q && y(B, Q.minDistEnt, O, Y, Q.intersectPt) || {}, ae = le.line, W = le.draw, se = V && y(B, V.minDistEnt, O, z, V.intersectPt) || {}, me = se.line, Re = se.draw, Se = de && y(B, de.minDistEnt, O, H, de.intersectPt) || {}, Ve = Se.line, Xe = Se.draw, qe = $ && V && N(B, $.intersectPt, V.intersectPt, q, me), Ge = $ && de && N(B, $.intersectPt, de.intersectPt, q, Ve), Ze = Q && V && N(B, Q.intersectPt, V.intersectPt, ae, me), ar = Q && de && N(B, Q.intersectPt, de.intersectPt, ae, Ve);
                  $ && Q && N(B, $.intersectPt, Q.intersectPt, q, ae), V && de && N(B, V.intersectPt, de.intersectPt, me, Ve);
                  var Qe = Math.PI / 2, _e = qe === Qe && Ge === Qe && Ze === Qe && ar === Qe;
                  function Je(Le) {
                    return Le.startPoint.x === Le.endPoint.x ? 1 / 0 : (Le.endPoint.y - Le.startPoint.y) / (Le.endPoint.x - Le.startPoint.x);
                  }
                  var fr = function(Ye, Ue) {
                    var ir = Je(Ye), or = Je(Ue);
                    return ir === or;
                  }, gr = function(Ye, Ue) {
                    var ir = Ye.getLength().val, or = Ue.getLength().val;
                    return ir === or;
                  }, cr = function(Ye, Ue) {
                    return fr(Ye, Ue) && gr(Ye, Ue);
                  }, pr = [];
                  q && pr.push({
                    line: q,
                    draw: be,
                    info: $
                  }), ae && pr.push({
                    line: ae,
                    draw: W,
                    info: Q
                  }), me && pr.push({
                    line: me,
                    draw: Re,
                    info: V
                  }), Ve && pr.push({
                    line: Ve,
                    draw: Xe,
                    info: de
                  });
                  var Lr = pr.reduce(function(Le, Ye) {
                    for (var Ue = !1, ir = 0; ir < Le.length; ir++) {
                      var or = Le[ir];
                      if (cr(or[0].line, Ye.line)) {
                        or.push(Ye), Ue = !0;
                        break;
                      }
                    }
                    return Ue || Le.push([Ye]), Le;
                  }, []);
                  Lr.forEach(function(Le) {
                    if (Le.length === 1) {
                      if (cr(Le[0].line, new Ie(L.endPoint, Z.endPoint)) || cr(Le[0].line, new Ie(x.endPoint, re.endPoint)))
                        return;
                      Le[0].draw && Le[0].draw();
                    } else if (!_e)
                      if (Le.length === 2) {
                        if (cr(Le[1].line, new Ie(L.endPoint, Z.endPoint)) || cr(Le[1].line, new Ie(x.endPoint, re.endPoint)))
                          return;
                        $ && Q || V && de ? ($ && Q && ($.intersectPt.distanceTo(O) < Q.intersectPt.distanceTo(O) ? be && be(!0) : W && W()), V && de && (V.intersectPt.distanceTo(O) < de.intersectPt.distanceTo(O) ? Re && Re(!1) : Xe && Xe())) : (Le[0].draw && Le[0].draw(), Le[1].draw && Le[1].draw());
                      } else
                        Le.forEach(function(Ye) {
                          var Ue = Ye.draw;
                          Ue && Ue();
                        });
                  }), B.setColor(16760576), B.drawMcDbEntity(L), B.drawMcDbEntity(Z), B.drawMcDbEntity(x), B.drawMcDbEntity(re);
                  var Pr = U.viewCoordLong2Cad(16);
                  if ($ && Q) {
                    var Dr = L.endPoint.distanceTo(Z.endPoint);
                    L.endPoint.distanceTo(O) > Z.endPoint.distanceTo(O) ? B.drawText(Dr.toFixed(3), Pr, 0, new THREE.Vector3((O.x + L.endPoint.x) / 2, (O.y + L.endPoint.y) / 2)) : B.drawText(Dr.toFixed(3), Pr, 0, new THREE.Vector3((O.x + Z.endPoint.x) / 2, (O.y + Z.endPoint.y) / 2));
                  }
                  if (V && de) {
                    var nr = x.endPoint.distanceTo(re.endPoint);
                    x.endPoint.distanceTo(O) > re.endPoint.distanceTo(O) ? B.drawText(nr.toFixed(3), Pr, 0, new THREE.Vector3((O.x + x.endPoint.x) / 2, (O.y + x.endPoint.y) / 2)) : B.drawText(nr.toFixed(3), Pr, 0, new THREE.Vector3((O.x + re.endPoint.x) / 2, (O.y + re.endPoint.y) / 2));
                  }
                }, b.setUserDraw(function(X, B) {
                  var O = U.viewCoordLong2Cad(m.mxdraw.getViewWidth()), he = U.viewCoordLong2Cad(m.mxdraw.getViewHeight()), Y = new Ae(-O, X.y), z = new Ae(X.x + O, X.y), H = new Ae(X.x, X.y + he), L = new Ae(X.x, -he);
                  T(B, X, Y, z, H, L);
                }), J.next = 1, b.go();
              case 1:
                if (r = b.keyWordPicked(), b.getStatus() !== ue.kCancel) {
                  J.next = 2;
                  break;
                }
                return J.abrupt("return", 0);
              case 2:
                if (b.getDetailedResult() !== G.kCodeAbort) {
                  J.next = 3;
                  break;
                }
                return J.abrupt("return", 0);
              case 3:
                if (b.getDetailedResult() !== G.kEcsIn) {
                  J.next = 4;
                  break;
                }
                return J.abrupt("return", 0);
              case 4:
                if ((b.getDetailedResult() === G.kMouseRightIn || b.getDetailedResult() === G.kNullSpaceIn || b.getDetailedResult() === G.kNullEnterIn) && (r = a), ((g = r) === null || g === void 0 ? void 0 : g.toLocaleUpperCase()) !== "D") {
                  J.next = 7;
                  break;
                }
                return t(), J.next = 5, zt(!0);
              case 5:
                if (E = J.sent, E !== !1) {
                  J.next = 6;
                  break;
                }
                return J.abrupt("return", 0);
              case 6:
                return F = E || {}, S = F.markedLines, S && n.push.apply(n, Wr(S)), J.next = 7, ee(/* @__PURE__ */ w.mark(function X() {
                  return w.wrap(function(B) {
                    for (; ; ) switch (B.prev = B.next) {
                      case 0:
                        return B.abrupt("return", new Promise(function(O) {
                          return setTimeout(O, 1);
                        }));
                      case 1:
                      case "end":
                        return B.stop();
                    }
                  }, X);
                }))();
              case 7:
                if (((i = r) === null || i === void 0 ? void 0 : i.toLocaleUpperCase()) !== "R") {
                  J.next = 10;
                  break;
                }
                return t(), J.next = 8, ai(!0);
              case 8:
                if (I = J.sent, I !== !1) {
                  J.next = 9;
                  break;
                }
                return J.abrupt("return", 0);
              case 9:
                return _ = I || {}, fe = _.markedLines, fe && n.push.apply(n, Wr(fe)), J.next = 10, ee(/* @__PURE__ */ w.mark(function X() {
                  return w.wrap(function(B) {
                    for (; ; ) switch (B.prev = B.next) {
                      case 0:
                        return B.abrupt("return", new Promise(function(O) {
                          return setTimeout(O, 1);
                        }));
                      case 1:
                      case "end":
                        return B.stop();
                    }
                  }, X);
                }))();
              case 10:
                if (((p = r) === null || p === void 0 ? void 0 : p.toLocaleUpperCase()) !== "A") {
                  J.next = 13;
                  break;
                }
                return t(), J.next = 11, ti();
              case 11:
                if (ge = J.sent, ge !== !1) {
                  J.next = 12;
                  break;
                }
                return J.abrupt("return", 0);
              case 12:
                return ve = ge || {}, pe = ve.markedArcs, pe && n.push.apply(n, Wr(pe)), J.next = 13, ee(/* @__PURE__ */ w.mark(function X() {
                  return w.wrap(function(B) {
                    for (; ; ) switch (B.prev = B.next) {
                      case 0:
                        return B.abrupt("return", new Promise(function(O) {
                          return setTimeout(O, 1);
                        }));
                      case 1:
                      case "end":
                        return B.stop();
                    }
                  }, X);
                }))();
              case 13:
                if (((v = r) === null || v === void 0 ? void 0 : v.toLocaleUpperCase()) !== "AR") {
                  J.next = 16;
                  break;
                }
                return t(), J.next = 14, ii();
              case 14:
                if (ne = J.sent, ne !== !1) {
                  J.next = 15;
                  break;
                }
                return J.abrupt("return", 0);
              case 15:
                return j = ne || {}, ie = j.markedLines, ie && n.push.apply(n, Wr(ie)), J.next = 16, ee(/* @__PURE__ */ w.mark(function X() {
                  return w.wrap(function(B) {
                    for (; ; ) switch (B.prev = B.next) {
                      case 0:
                        return B.abrupt("return", new Promise(function(O) {
                          return setTimeout(O, 1);
                        }));
                      case 1:
                      case "end":
                        return B.stop();
                    }
                  }, X);
                }))();
              case 16:
                if (((M = r) === null || M === void 0 ? void 0 : M.toLocaleUpperCase()) === "Q" && t(), ((A = r) === null || A === void 0 ? void 0 : A.toLocaleUpperCase()) !== "X") {
                  J.next = 17;
                  break;
                }
                return J.abrupt("return", 0);
              case 17:
                return P.includes(r) && r !== "" && (a = r), J.abrupt("return", 1);
              case 18:
              case "end":
                return J.stop();
            }
          }, f);
        });
      case 2:
        return l.delegateYield(s(), "t0", 3);
      case 3:
        if (c = l.t0, c !== 0) {
          l.next = 4;
          break;
        }
        return l.abrupt("continue", 6);
      case 4:
        if (c !== 1) {
          l.next = 5;
          break;
        }
        return l.abrupt("continue", 2);
      case 5:
        l.next = 2;
        break;
      case 6:
        l.next = 8;
        break;
      case 7:
        l.prev = 7, u = l.catch(1), console.warn(u);
      case 8:
        t();
      case 9:
      case "end":
        return l.stop();
    }
  }, d, null, [[1, 7]]);
})));
function ci() {
  return Xa.apply(this, arguments);
}
function Xa() {
  return Xa = ee(/* @__PURE__ */ w.mark(function d() {
    var r, a;
    return w.wrap(function(e) {
      for (; ; ) switch (e.prev = e.next) {
        case 0:
          return r = new Te(), r.setMessage(o("1749")), e.next = 1, r.go();
        case 1:
          if (a = e.sent, a) {
            e.next = 2;
            break;
          }
          return e.abrupt("return");
        case 2:
          U.acutPrintf("X = ".concat(a.x, "     Y = ").concat(a.y, "     Z = ").concat(a.z, ` 
`));
        case 3:
        case "end":
          return e.stop();
      }
    }, d);
  })), Xa.apply(this, arguments);
}
oe("ID", ci);
function er(d, r, a, e) {
  var n = d - a, t = r - e, s = 0;
  return n == 0 ? s = Math.PI / 2 : s = Math.atan(Math.abs(t / n)), n < 0 && t >= 0 ? s = Math.PI - s : n < 0 && t < 0 ? s = Math.PI + s : n >= 0 && t < 0 && (s = Math.PI * 2 - s), s - Math.PI;
}
function oi(d, r, a) {
  var e = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1, n = {
    x: r.x - d.x,
    y: r.y - d.y
  }, t = {
    x: a.x - d.x,
    y: a.y - d.y
  }, s = n.x * n.x + n.y * n.y;
  if (s === 0 || e) {
    var c = s === 0 ? 0 : (t.x * n.x + t.y * n.y) / s;
    return new Ae(d.x + n.x * c, d.y + n.y * c);
  } else {
    var u = (t.x * n.x + t.y * n.y) / s;
    return u < 0 ? d : u > 1 ? r : new Ae(d.x + n.x * u, d.y + n.y * u);
  }
}
function di(d, r, a) {
  var e = {
    x: r.x - d.x,
    y: r.y - d.y
  }, n = {
    x: a.x - d.x,
    y: a.y - d.y
  }, t = e.x * e.x + e.y * e.y;
  if (t === 0) return a.x === d.x && a.y === d.y;
  var s = (n.x * e.x + n.y * e.y) / t;
  return s >= 0 && s <= 1 ? !0 : s < 0 ? {
    isStart: !0
  } : {
    isStart: !1
  };
}
var oa = 0, da = 0, fi = 0, ht = 0, mt = 0, gi = {
  DE: o("1547"),
  P: o("1548"),
  T: o("1549"),
  DY: o("1550")
}, Ar = "DE", Qr = function(r, a, e, n) {
  var t = r.getLength().val, s = r.getDistAtPoint(e).val, c = r.getStartPoint().val, u = r.getEndPoint().val, l = s < t / 2, f;
  if (r instanceof Ie) {
    var g = r.startPoint, i = r.endPoint;
    return l ? (r.startPoint = c.clone().addvec(c.sub(u).normalize().mult(a)), f = function() {
      r.startPoint = g;
    }) : (r.endPoint = r.endPoint.clone().addvec(u.sub(c).normalize().mult(a)), f = function() {
      r.endPoint = i;
    }), {
      ent: r,
      fallback: f
    };
  }
  if (r instanceof je) {
    var p = r.startAngle, v = r.endAngle, M = r.clone();
    l ? (M.startAngle = r.startAngle, M.endAngle = r.startAngle - 1e-7) : (M.startAngle = r.endAngle, M.endAngle = r.endAngle - 1e-7);
    var A = M.getLength().val, b = r.center, P = r.getGripPoints().at(2), m = Me.calcBulge(c, P, u).val, D = m > 0, C;
    if (l)
      if (C = M.getPointAtDist(D ? A - a : a).val, D)
        r.startAngle = er(b.x, b.y, C.x, C.y), f = function() {
          r.startAngle = p;
        };
      else {
        var K = r.endAngle;
        r.startAngle = K, r.endAngle = er(b.x, b.y, C.x, C.y), f = function() {
          r.startAngle = p, r.endAngle = v;
        };
      }
    else if (C = M.getPointAtDist(D ? a : A - a).val, D)
      r.endAngle = er(b.x, b.y, C.x, C.y), f = function() {
        r.endAngle = v;
      };
    else {
      var R = r.startAngle;
      r.startAngle = er(b.x, b.y, C.x, C.y), r.endAngle = R, f = function() {
        r.startAngle = p, r.endAngle = v;
      };
    }
    return {
      fallback: f,
      ent: r
    };
  }
  if (r instanceof zr) {
    var h = r.clone();
    h.startAngle = 0, h.endAngle = Math.PI * 2;
    var y = h.getLength().val, N = y - t;
    if (a > N) return;
    var T = h.getPointAtDist(0).val, E = h.getPointAtDist(l ? h.getDistAtPoint(c).val - a : h.getDistAtPoint(u).val + a).val, F = T.sub(h.center), S = E.sub(h.center), I = Math.atan2(F.y, F.x), _ = Math.atan2(S.y, S.x), fe = _ - I;
    fe < 0 && (fe += 2 * Math.PI);
    var ge = r.startAngle, ve = r.endAngle;
    l ? r.startAngle = fe : r.endAngle = fe;
    var pe = function() {
      l ? r.startAngle = ge : r.endAngle = ve;
    };
    return {
      fallback: pe,
      ent: r
    };
  }
  if (r instanceof ke) {
    if (r.isClosed) return;
    var ne = function(q) {
      for (var be = [], le = 0; le < q.numVerts(); le++) {
        var ae = q.getWidthsAt(le), W = ae.val1, se = ae.val2;
        be.push({
          point: q.getPointAt(le).val,
          bulge: q.getBulgeAt(le),
          startWidth: W,
          endWidth: se
        });
      }
      return be;
    }, j = function(q, be) {
      for (; q.removeVertexAt(0); )
        ;
      for (var le = 0; le < be.length; le++) {
        var ae = be[le];
        q.addVertexAt(ae.point, ae.bulge, ae.startWidth, ae.endWidth, le);
      }
    }, ie = function(q, be, le) {
      var ae = Ut(q, be, le), W = new je();
      return W.center = ae, W.radius = ae.sub(q).length(), W.startAngle = er(ae.x, ae.y, q.x, q.y), W.endAngle = er(ae.x, ae.y, be.x, be.y), W;
    }, J = function(q, be, le, ae) {
      if (le)
        if (ae)
          q.startAngle = er(q.center.x, q.center.y, be.x, be.y);
        else {
          var W = q.endAngle;
          q.startAngle = W, q.endAngle = er(q.center.x, q.center.y, be.x, be.y);
        }
      else if (ae)
        q.endAngle = er(q.center.x, q.center.y, be.x, be.y);
      else {
        var se = q.startAngle;
        q.startAngle = er(q.center.x, q.center.y, be.x, be.y), q.endAngle = se;
      }
      return q;
    }, X = function(q, be, le, ae) {
      var W = ae.startIndex, se = ae.endIndex, me = ae.numVerts, Re = ne(q);
      if (q.setPointAt(le ? W : se, be), le)
        for (var Se = 0; Se < W; Se++)
          q.removeVertexAt(0);
      else
        for (var Ve = se + 1; Ve < me; Ve++)
          q.removeVertexAt(se + 1);
      return function() {
        return j(q, Re);
      };
    }, B = function(q, be, le, ae) {
      var W = ae.start, se = ae.end, me = ae.startIndex, Re = ae.endIndex, Se = ae.numVerts, Ve = ae.bulge, Xe = ne(q), qe = ie(W, se, Ve), Ge = Ve > 0;
      J(qe, be, le, Ge);
      var Ze = qe.getGripPoints().at(2), ar = Me.calcBulge(le ? be : W, Ze, le ? se : be).val;
      if (q.setPointAt(le ? me : Re, be), q.setBulgeAt(me, ar), le)
        for (var Qe = 0; Qe < me; Qe++)
          q.removeVertexAt(0);
      else
        for (var _e = Re + 1; _e < Se; _e++)
          q.removeVertexAt(Re + 1);
      return function() {
        return j(q, Xe);
      };
    }, O = function(q, be, le, ae) {
      var W = ae.startPoint, se = ae.endPoint, me = ae.numVerts, Re = le ? W.clone().addvec(W.sub(se).normalize().mult(be)) : se.clone().addvec(se.sub(W).normalize().mult(be)), Se = le ? 0 : me - 1, Ve = le ? W : se;
      return q.setPointAt(Se, Re), function() {
        return q.setPointAt(Se, Ve);
      };
    }, he = function(q, be, le, ae) {
      var W = ae.startPoint, se = ae.endPoint, me = ae.numVerts, Re = ae.bulge, Se = ie(W, se, Re), Ve = Se.clone();
      Ve.startAngle = le ? Se.startAngle : Se.endAngle, Ve.endAngle = Ve.startAngle - 1e-7;
      var Xe = Ve.getLength().val, qe = Re > 0, Ge = be % Xe, Ze = Ve.getPointAtDist(le ? qe ? Xe - Ge : Ge : qe ? Ge : Xe - Ge).val;
      J(Se, Ze, le, qe);
      var ar = Se.getGripPoints().at(2), Qe = Me.calcBulge(le ? Ze : W, ar, le ? se : Ze).val, _e = le ? 0 : me - 1, Je = le ? 0 : me - 2, fr = le ? W : se, gr = Re;
      return q.setPointAt(_e, Ze), q.setBulgeAt(Je, Qe), function() {
        q.setPointAt(_e, fr), q.setBulgeAt(Je, gr);
      };
    }, Y = r.numVerts();
    if (a < 0) {
      var z = l ? r.getPointAtDist(Math.abs(a)).val : r.getPointAtDist(t - Math.abs(a)).val, H = Ur(r, z, 0.1);
      if (!H) return;
      var L = H.start, Z = H.end, x = H.startIndex, re = H.endIndex, $ = r.getBulgeAt(x), Q = $ === 0 ? X(r, z, l, {
        startIndex: x,
        endIndex: re,
        numVerts: Y
      }) : B(r, z, l, {
        start: L,
        end: Z,
        startIndex: x,
        endIndex: re,
        numVerts: Y,
        bulge: $
      });
      return {
        ent: r,
        fallback: Q
      };
    } else {
      u = l ? r.getPointAt(1).val : u, c = l ? c : r.getPointAt(Y - 2).val;
      var V = l ? r.getBulgeAt(0) : r.getBulgeAt(Y - 2), de = V === 0 ? O(r, a, l, {
        startPoint: c,
        endPoint: u,
        numVerts: Y
      }) : he(r, a, l, {
        startPoint: c,
        endPoint: u,
        numVerts: Y,
        bulge: V
      });
      return {
        ent: r,
        fallback: de
      };
    }
  }
};
oe("Mx_lengthen", /* @__PURE__ */ ee(/* @__PURE__ */ w.mark(function d() {
  var r, a, e, n, t, s, c;
  return w.wrap(function(u) {
    for (; ; ) switch (u.prev = u.next) {
      case 0:
        r = [], a = new He(), e = new rr(), e.AddMcDbEntityTypes("LWPOLYLINE,LINE,ARC,ELLIPSE"), a.setFilter(e), n = /* @__PURE__ */ function() {
          var l = ee(/* @__PURE__ */ w.mark(function f(g) {
            var i, p;
            return w.wrap(function(v) {
              for (; ; ) switch (v.prev = v.next) {
                case 0:
                  i = /* @__PURE__ */ w.mark(function M() {
                    var A, b, P, m, D;
                    return w.wrap(function(C) {
                      for (; ; ) switch (C.prev = C.next) {
                        case 0:
                          return a.setMessage(o("1551")), a.setKeyWords("[".concat(o("1552"), "(U)]")), a.setUserDraw(function(K, R) {
                            var h = Me.findEntAtPoint(K.x, K.y, K.z, void 0, e);
                            A && A.highlight(!1), A = h.getMcDbCurve();
                            var y = h.clone();
                            y && y instanceof Kr && Qr(y, typeof g == "number" ? g : g(y, K), K) && (A && A.highlight(!0), R.setColor(Number(y.trueColor.getColorValue(y.layerId))), R.drawMcDbEntity(y));
                          }), C.next = 1, a.go();
                        case 1:
                          if (b = C.sent, A && A.highlight(!1), !(a.getStatus() === ue.kCancel || a.getStatus() === ue.kNone)) {
                            C.next = 2;
                            break;
                          }
                          return C.abrupt("return", {
                            v: !0
                          });
                        case 2:
                          if (!a.isKeyWordPicked("U")) {
                            C.next = 3;
                            break;
                          }
                          return P = r.pop(), P ? P == null || P.fallback() : U.acutPrintf(`
` + o("1553")), C.abrupt("return", 0);
                        case 3:
                          if (b !== null) {
                            C.next = 4;
                            break;
                          }
                          return C.abrupt("return", {
                            v: !0
                          });
                        case 4:
                          if (m = b.getMcDbCurve(), m !== null) {
                            C.next = 5;
                            break;
                          }
                          return C.abrupt("return", {
                            v: !0
                          });
                        case 5:
                          return D = Qr(m, typeof g == "number" ? g : g(m, a.pickPoint()), a.pickPoint()), D && r.push(D), C.abrupt("return", 0);
                        case 6:
                        case "end":
                          return C.stop();
                      }
                    }, M);
                  });
                case 1:
                  return v.delegateYield(i(), "t0", 2);
                case 2:
                  if (p = v.t0, p !== 0) {
                    v.next = 3;
                    break;
                  }
                  return v.abrupt("continue", 1);
                case 3:
                  if (!p) {
                    v.next = 4;
                    break;
                  }
                  return v.abrupt("return", p.v);
                case 4:
                  v.next = 1;
                  break;
                case 5:
                case "end":
                  return v.stop();
              }
            }, f);
          }));
          return function(g) {
            return l.apply(this, arguments);
          };
        }(), t = /* @__PURE__ */ function() {
          var l = ee(/* @__PURE__ */ w.mark(function f(g) {
            var i, p, v;
            return w.wrap(function(M) {
              for (; ; ) switch (M.prev = M.next) {
                case 0:
                  i = function(b) {
                    if (b instanceof je) {
                      var P = b.clone();
                      return P.startAngle = 0, P.endAngle = g, P.getLength().val;
                    }
                    if (b instanceof zr) {
                      var m = b.clone(), D = m.getLength().val;
                      return m.endAngle += g, m.getLength().val - D;
                    }
                    return 0;
                  }, p = /* @__PURE__ */ w.mark(function A() {
                    var b, P, m, D, C, K, R;
                    return w.wrap(function(h) {
                      for (; ; ) switch (h.prev = h.next) {
                        case 0:
                          return a.setMessage(o("1551")), a.setKeyWords("[".concat(o("1552"), "(U)]")), P = new rr(), P.AddMcDbEntityTypes("LWPOLYLINE,ARC,ELLIPSE"), a.setUserDraw(function(y, N) {
                            var T = Me.findEntAtPoint(y.x, y.y, y.z, void 0, P);
                            b && b.highlight(!1), b = T.getMcDbCurve();
                            var E = T.clone();
                            if (E && E instanceof Kr) {
                              var F = i(E);
                              Qr(E, F, y) && (b && b.highlight(!0), N.setColor(Number(E.trueColor.getColorValue(E.layerId))), N.drawMcDbEntity(E));
                            }
                          }), h.next = 1, a.go();
                        case 1:
                          if (m = h.sent, b && b.highlight(!1), !(a.getStatus() === ue.kCancel || a.getStatus() === ue.kNone)) {
                            h.next = 2;
                            break;
                          }
                          return h.abrupt("return", {
                            v: !0
                          });
                        case 2:
                          if (!a.isKeyWordPicked("U")) {
                            h.next = 3;
                            break;
                          }
                          return D = r.pop(), D ? D == null || D.fallback() : U.acutPrintf(`
` + o("1553")), h.abrupt("return", 0);
                        case 3:
                          if (m !== null) {
                            h.next = 4;
                            break;
                          }
                          return h.abrupt("return", {
                            v: !0
                          });
                        case 4:
                          if (C = m.getMcDbCurve(), C !== null) {
                            h.next = 5;
                            break;
                          }
                          return h.abrupt("return", {
                            v: !0
                          });
                        case 5:
                          return K = i(C), R = Qr(C, K, a.pickPoint()), R && r.push(R), h.abrupt("return", 0);
                        case 6:
                        case "end":
                          return h.stop();
                      }
                    }, A);
                  });
                case 1:
                  return M.delegateYield(p(), "t0", 2);
                case 2:
                  if (v = M.t0, v !== 0) {
                    M.next = 3;
                    break;
                  }
                  return M.abrupt("continue", 1);
                case 3:
                  if (!v) {
                    M.next = 4;
                    break;
                  }
                  return M.abrupt("return", v.v);
                case 4:
                  M.next = 1;
                  break;
                case 5:
                case "end":
                  return M.stop();
              }
            }, f);
          }));
          return function(g) {
            return l.apply(this, arguments);
          };
        }(), s = /* @__PURE__ */ w.mark(function l() {
          var f, g, i, p, v, M, A, b, P, m, D, C, K, R, h;
          return w.wrap(function(y) {
            for (; ; ) switch (y.prev = y.next) {
              case 0:
                return a.setMessage("".concat(o("1554"), "<").concat(gi[Ar], "(DE)>")), a.setKeyWords("[".concat(o("1547"), "(DE)/").concat(o("1548"), "(P)/").concat(o("1549"), "(T)/").concat(o("1550"), "(DY)]")), y.next = 1, a.go();
              case 1:
                if (f = y.sent, a.getStatus() !== ue.kCancel) {
                  y.next = 2;
                  break;
                }
                return y.abrupt("return", 0);
              case 2:
                if (a.getStatus() !== ue.kNone) {
                  y.next = 3;
                  break;
                }
                return setTimeout(function() {
                  Ar && U.setCommandLineInputData(Ar, 13);
                }), y.abrupt("return", 1);
              case 3:
                if (!a.isKeyWordPicked("DE")) {
                  y.next = 14;
                  break;
                }
                return Ar = "DE", g = new yr(), g.setMessage("".concat(o("1555"), "<").concat(oa.toFixed(4), ">")), g.setKeyWords("[".concat(o("169"), "(A)]")), y.next = 4, g.go();
              case 4:
                if (i = y.sent, g.getStatus() !== ue.kCancel) {
                  y.next = 5;
                  break;
                }
                return y.abrupt("return", 0);
              case 5:
                if (g.getStatus() === ue.kNone && typeof oa == "number" && (i = oa), !g.isKeyWordPicked("A")) {
                  y.next = 10;
                  break;
                }
                return p = new tr(), p.setMessage(o("1557")), y.next = 6, p.go();
              case 6:
                if (v = y.sent, p.getStatus() === ue.kNone && (v = fi), g.getStatus() !== ue.kCancel) {
                  y.next = 7;
                  break;
                }
                return y.abrupt("return", 0);
              case 7:
                if (typeof v == "number") {
                  y.next = 8;
                  break;
                }
                return y.abrupt("return", 0);
              case 8:
                return y.next = 9, t(v);
              case 9:
                if (!y.sent) {
                  y.next = 10;
                  break;
                }
                return y.abrupt("return", 0);
              case 10:
                if (typeof i != "number") {
                  y.next = 13;
                  break;
                }
                return oa = i, y.next = 11, n(i);
              case 11:
                if (!y.sent) {
                  y.next = 12;
                  break;
                }
                return y.abrupt("return", 0);
              case 12:
                y.next = 14;
                break;
              case 13:
                return y.abrupt("return", 0);
              case 14:
                if (!a.isKeyWordPicked("P")) {
                  y.next = 23;
                  break;
                }
                Ar = "P";
              case 15:
                return M = new Ct(), M.setMessage("".concat(o("1558"), "<").concat(da.toFixed(4), ">")), y.next = 16, M.go();
              case 16:
                if (A = y.sent, M.getStatus() !== ue.kCancel) {
                  y.next = 17;
                  break;
                }
                return y.abrupt("return", 2);
              case 17:
                if (M.getStatus() === ue.kNone && typeof A == "number" && (da = A), typeof A != "number") {
                  y.next = 21;
                  break;
                }
                if (!(A <= 0)) {
                  y.next = 18;
                  break;
                }
                return U.acutPrintf(`
` + o("1559")), y.abrupt("continue", 15);
              case 18:
                return da = A, y.next = 19, n(function(N) {
                  var T = N.getLength().val;
                  return T / 100 * da - T;
                });
              case 19:
                if (!y.sent) {
                  y.next = 20;
                  break;
                }
                return y.abrupt("return", 2);
              case 20:
                y.next = 22;
                break;
              case 21:
                return y.abrupt("continue", 23);
              case 22:
                y.next = 15;
                break;
              case 23:
                if (!a.isKeyWordPicked("T")) {
                  y.next = 33;
                  break;
                }
                return Ar = "T", b = new yr(), b.setMessage(o("1560") + "<" + ht.toFixed(4) + ">"), b.setKeyWords("[".concat(o("169"), "(A)]")), y.next = 24, b.go();
              case 24:
                if (P = y.sent, b.getStatus() === ue.kNone && (P = ht), b.getStatus() !== ue.kCancel) {
                  y.next = 25;
                  break;
                }
                return y.abrupt("return", 0);
              case 25:
                if (!b.isKeyWordPicked("A")) {
                  y.next = 30;
                  break;
                }
                return m = new tr(), m.setMessage(o("1561") + "<" + mt.toFixed(4) + ">"), y.next = 26, m.go();
              case 26:
                if (D = y.sent, b.getStatus() !== ue.kCancel) {
                  y.next = 27;
                  break;
                }
                return y.abrupt("return", 0);
              case 27:
                if (b.getStatus() === ue.kNone && (D = mt), typeof D == "number") {
                  y.next = 28;
                  break;
                }
                return y.abrupt("return", 0);
              case 28:
                return y.next = 29, n(function(N) {
                  return 0;
                });
              case 29:
                if (!y.sent) {
                  y.next = 30;
                  break;
                }
                return y.abrupt("return", 0);
              case 30:
                if (typeof P == "number") {
                  y.next = 31;
                  break;
                }
                return y.abrupt("return", 0);
              case 31:
                return y.next = 32, n(function(N) {
                  return P - N.getLength().val;
                });
              case 32:
                if (!y.sent) {
                  y.next = 33;
                  break;
                }
                return y.abrupt("return", 0);
              case 33:
                if (!a.isKeyWordPicked("DY")) {
                  y.next = 38;
                  break;
                }
                Ar = "DY", C = function(T, E, F, S, I, _) {
                  if (!(T instanceof ke)) {
                    if (T instanceof Ie) {
                      var fe = 0, ge = oi(T.startPoint, T.endPoint, E, !0), ve = di(T.startPoint, T.endPoint, ge);
                      if (Jt(ve) === "object" && ve.isStart !== F) {
                        var pe = T.startPoint, ne = T.endPoint;
                        ve.isStart ? (T.endPoint = pe, T.startPoint = ge) : (T.startPoint = ne, T.endPoint = ge);
                        var j = function() {
                          T.startPoint = pe, T.endPoint = ne;
                        };
                        return {
                          ent: T,
                          fallback: j
                        };
                      } else
                        return F ? fe = ge.distanceTo(T.endPoint) - S : fe = ge.distanceTo(T.startPoint) - S, Qr(T, fe, I);
                    }
                    if (T instanceof je) {
                      var ie = T.startAngle, J = T.endAngle, X = T.getClosestPointTo(E, !0).val, B = T.getGripPoints().at(2), O = Me.calcBulge(T.getGripPoints().at(0), B, T.getGripPoints().at(1)).val, he = O > 0, Y = T.center, z;
                      if (he)
                        T.endAngle = er(Y.x, Y.y, X.x, X.y), z = function() {
                          T.endAngle = J;
                        };
                      else {
                        var H = T.startAngle;
                        T.startAngle = er(Y.x, Y.y, X.x, X.y), T.endAngle = H, z = function() {
                          T.startAngle = ie, T.endAngle = J;
                        };
                      }
                      return {
                        ent: T,
                        fallback: z
                      };
                    }
                    if (T instanceof zr) {
                      var L = T.endAngle, Z = T.center, x = Math.atan2(E.y - Z.y, E.x - Z.x), re = Math.atan2(T.majorAxis.y, T.majorAxis.x), $ = (x - re + Math.PI * 2) % (Math.PI * 2);
                      $ < T.startAngle && ($ += Math.PI * 2), T.endAngle = $;
                      var Q = function() {
                        T.endAngle = L;
                      };
                      return {
                        ent: T,
                        fallback: Q
                      };
                    }
                  }
                }, K = /* @__PURE__ */ w.mark(function N() {
                  var T, E, F, S, I, _, fe, ge, ve, pe, ne;
                  return w.wrap(function(j) {
                    for (; ; ) switch (j.prev = j.next) {
                      case 0:
                        return a.setMessage(o("1551")), a.setKeyWords("[".concat(o("1552"), "(U)]")), j.next = 1, a.go();
                      case 1:
                        if (E = j.sent, !a.isKeyWordPicked("U")) {
                          j.next = 2;
                          break;
                        }
                        return F = r.pop(), F ? F == null || F.fallback() : U.acutPrintf(`
` + o("1553")), j.abrupt("return", 0);
                      case 2:
                        if (!(a.getStatus() === ue.kCancel || a.getStatus() === ue.kNone)) {
                          j.next = 3;
                          break;
                        }
                        return j.abrupt("return", {
                          v: {
                            v: !0
                          }
                        });
                      case 3:
                        if (E) {
                          j.next = 4;
                          break;
                        }
                        return j.abrupt("return", 0);
                      case 4:
                        if (T = E.getMcDbCurve(), T) {
                          j.next = 5;
                          break;
                        }
                        return j.abrupt("return", 0);
                      case 5:
                        return S = a.pickPoint(), I = T.getLength().val, _ = T.getDistAtPoint(S).val, fe = _ < I / 2, ge = new Te(), ge.setMessage(o("1562")), a.setKeyWords("[".concat(o("1552"), "(U)]")), ge.setUserDraw(function(ie, J) {
                          if (T) {
                            T.highlight(!1);
                            var X = E.clone();
                            X instanceof Kr && C(X, ie, fe, I, S, J) && (T.highlight(!0), J.setColor(Number(T.trueColor.getColorValue(T.layerId))), J.drawMcDbEntity(X));
                          }
                        }), j.next = 6, ge.go();
                      case 6:
                        if (ve = j.sent, T && T.highlight(!1), !(ge.getStatus() === ue.kCancel || a.getStatus() === ue.kNone)) {
                          j.next = 7;
                          break;
                        }
                        return j.abrupt("return", {
                          v: {
                            v: !0
                          }
                        });
                      case 7:
                        if (!ge.isKeyWordPicked("U")) {
                          j.next = 8;
                          break;
                        }
                        return pe = r.pop(), pe ? pe == null || pe.fallback() : U.acutPrintf(`
` + o("1553")), j.abrupt("return", 0);
                      case 8:
                        if (ve !== null) {
                          j.next = 9;
                          break;
                        }
                        return j.abrupt("return", {
                          v: {
                            v: !0
                          }
                        });
                      case 9:
                        return T && (ne = C(T, ve, fe, I, S), ne && r.push(ne)), j.abrupt("return", 0);
                      case 10:
                      case "end":
                        return j.stop();
                    }
                  }, N);
                });
              case 34:
                return y.delegateYield(K(), "t0", 35);
              case 35:
                if (R = y.t0, R !== 0) {
                  y.next = 36;
                  break;
                }
                return y.abrupt("continue", 34);
              case 36:
                if (!R) {
                  y.next = 37;
                  break;
                }
                return y.abrupt("return", R.v);
              case 37:
                y.next = 34;
                break;
              case 38:
                if (f) {
                  y.next = 39;
                  break;
                }
                return y.abrupt("return", 1);
              case 39:
                if (h = f.getMcDbCurve(), h) {
                  y.next = 40;
                  break;
                }
                return y.abrupt("return", 1);
              case 40:
                return U.acutPrintf(`
` + o("1563") + ": " + h.getLength().val.toFixed(4)), y.abrupt("return", 1);
              case 41:
              case "end":
                return y.stop();
            }
          }, l);
        });
      case 1:
        return u.delegateYield(s(), "t0", 2);
      case 2:
        if (c = u.t0, c !== 0) {
          u.next = 3;
          break;
        }
        return u.abrupt("continue", 7);
      case 3:
        if (c !== 1) {
          u.next = 4;
          break;
        }
        return u.abrupt("continue", 1);
      case 4:
        if (c !== 2) {
          u.next = 5;
          break;
        }
        return u.abrupt("continue", 7);
      case 5:
        if (!c) {
          u.next = 6;
          break;
        }
        return u.abrupt("return", c.v);
      case 6:
        u.next = 1;
        break;
      case 7:
      case "end":
        return u.stop();
    }
  }, d);
})));
oe("deselect", function() {
  var d = we.getCurrentMxCAD();
  d.mxdraw.clearMxCurrentSelect(), d.updateDisplay();
});
var ea = /* @__PURE__ */ function() {
  var d = ee(/* @__PURE__ */ w.mark(function r(a) {
    var e, n;
    return w.wrap(function(t) {
      for (; ; ) switch (t.prev = t.next) {
        case 0:
          return e = Tt(), n = e.dialog, n.showDialog(!0, a), t.prev = 1, t.next = 2, function() {
            return new Promise(function(s, c) {
              n.onConfirm(s), n.onCancel(c);
            });
          }();
        case 2:
          return t.abrupt("return", t.sent);
        case 3:
          return t.prev = 3, t.catch(1), t.abrupt("return", [""]);
        case 4:
        case "end":
          return t.stop();
      }
    }, r, null, [[1, 3]]);
  }));
  return function(a) {
    return d.apply(this, arguments);
  };
}(), Ht = /* @__PURE__ */ function() {
  var d = ee(/* @__PURE__ */ w.mark(function r(a) {
    var e, n, t, s, c, u;
    return w.wrap(function(l) {
      for (; ; ) switch (l.prev = l.next) {
        case 0:
          return l.next = 1, Me.userSelect("选择需要".concat(a ? "锁定" : "解锁", "图层的对象"));
        case 1:
          e = l.sent, n = /* @__PURE__ */ new Set(), t = lr(), s = t.setValue, c = Er(t), u = c.list, e.forEach(function(f) {
            if (f.type === Za.kMxCAD) {
              var g = f.getMcDbEntity();
              if (!g) return;
              var i = u.value.findIndex(function(p) {
                var v = p.name;
                return v === g.layer;
              });
              i >= 0 && n.add(i);
            }
          }), s("lock", a, Array.from(n), !0);
        case 2:
        case "end":
          return l.stop();
      }
    }, r);
  }));
  return function(a) {
    return d.apply(this, arguments);
  };
}();
oe("_OpenAllLayer", function() {
  var d = lr(), r = d.setLayerList, a = d.stringifyJSON;
  kn(!0), r(a());
});
oe("_SelOffLayer", /* @__PURE__ */ ee(/* @__PURE__ */ w.mark(function d() {
  var r, a, e, n, t, s, c, u;
  return w.wrap(function(l) {
    for (; ; ) switch (l.prev = l.next) {
      case 0:
        return l.next = 1, Me.userSelect("选择需要关闭图层的实体");
      case 1:
        r = l.sent, a = /* @__PURE__ */ new Set(), e = lr(), n = e.setValue, t = e.setLayerList, s = e.stringifyJSON, c = Er(e), u = c.list, r.forEach(function(f) {
          if (f.type === Za.kMxCAD) {
            var g = f.getMcDbEntity();
            if (!g) return;
            var i = u.value.findIndex(function(p) {
              var v = p.name;
              return v === g.layer;
            });
            i >= 0 && a.add(i);
          }
        }), n("visible", !1, Array.from(a)), t(s());
      case 2:
      case "end":
        return l.stop();
    }
  }, d);
})));
oe("_layer_recovery", function() {
  var d = lr(), r = d.recoveryLayerStateHistory;
  r();
});
oe("_layer_putCurrent", /* @__PURE__ */ ee(/* @__PURE__ */ w.mark(function d() {
  var r, a, e, n, t, s, c, u;
  return w.wrap(function(l) {
    for (; ; ) switch (l.prev = l.next) {
      case 0:
        return r = new He(), r.setMessage("选择将使其图层将成为当前图层的对象"), l.next = 1, r.go();
      case 1:
        if (a = l.sent, a) {
          l.next = 2;
          break;
        }
        return l.abrupt("return");
      case 2:
        if (a.isValid()) {
          l.next = 3;
          break;
        }
        return l.abrupt("return");
      case 3:
        if (e = a.getMcDbEntity(), e) {
          l.next = 4;
          break;
        }
        return l.abrupt("return");
      case 4:
        if (n = lr(), t = n.putCurrent, s = Er(n), c = s.list, u = c.value.findIndex(function(f) {
          var g = f.name;
          return e.layer === g;
        }), !(u < 0)) {
          l.next = 5;
          break;
        }
        return l.abrupt("return");
      case 5:
        t(u);
      case 6:
      case "end":
        return l.stop();
    }
  }, d);
})));
oe("_layer_matching", /* @__PURE__ */ ee(/* @__PURE__ */ w.mark(function d() {
  var r, a, e, n, t, s, c;
  return w.wrap(function(u) {
    for (; ; ) switch (u.prev = u.next) {
      case 0:
        return u.next = 1, Me.userSelect("选择需要修改图层的对象");
      case 1:
        return r = u.sent, a = new He(), a.setMessage("选择匹配图层的对象"), a.setKeyWords("[名称(N)]"), u.next = 2, a.go();
      case 2:
        if (e = u.sent, n = "", !a.isKeyWordPicked("N")) {
          u.next = 7;
          break;
        }
        return t = Tt(), s = t.dialog, s.showDialog(!0), u.prev = 3, u.next = 4, ea();
      case 4:
        n = u.sent[0], u.next = 6;
        break;
      case 5:
        return u.prev = 5, u.catch(3), u.abrupt("return");
      case 6:
        u.next = 11;
        break;
      case 7:
        if (e) {
          u.next = 8;
          break;
        }
        return u.abrupt("return");
      case 8:
        if (e.isValid()) {
          u.next = 9;
          break;
        }
        return u.abrupt("return");
      case 9:
        if (c = e.getMcDbEntity(), c) {
          u.next = 10;
          break;
        }
        return u.abrupt("return");
      case 10:
        n = c.layer;
      case 11:
        if (n !== "") {
          u.next = 12;
          break;
        }
        return u.abrupt("return");
      case 12:
        r.forEach(function(l) {
          var f = l.getMcDbEntity();
          f && (f.layer = n);
        }), we.getCurrentMxCAD().updateDisplay();
      case 13:
      case "end":
        return u.stop();
    }
  }, d, null, [[3, 5]]);
})));
oe("_layer_setEntToCurrentLayer", /* @__PURE__ */ ee(/* @__PURE__ */ w.mark(function d() {
  var r, a;
  return w.wrap(function(e) {
    for (; ; ) switch (e.prev = e.next) {
      case 0:
        return e.next = 1, Me.userSelect("选择需要修改图层的对象");
      case 1:
        r = e.sent, a = Pt().getCurrentlyLayerName(), r.forEach(function(n) {
          var t = n.getMcDbEntity();
          t && (t.layer = a);
        }), we.getCurrentMxCAD().updateDisplay();
      case 2:
      case "end":
        return e.stop();
    }
  }, d);
})));
oe("_layer_CopyObjectsToNewLayer", /* @__PURE__ */ ee(/* @__PURE__ */ w.mark(function d() {
  var r, a, e, n, t, s, c, u;
  return w.wrap(function(l) {
    for (; ; ) switch (l.prev = l.next) {
      case 0:
        return l.next = 1, Me.userSelect("选择要复制的对象");
      case 1:
        return r = l.sent, a = new He(), a.setMessage("选择目标图层上的对象"), a.setKeyWords("[名称(N)]"), l.next = 2, a.go();
      case 2:
        if (e = l.sent, n = "", !a.isKeyWordPicked("N")) {
          l.next = 4;
          break;
        }
        return l.next = 3, ea();
      case 3:
        n = l.sent[0], l.next = 8;
        break;
      case 4:
        if (e) {
          l.next = 5;
          break;
        }
        return l.abrupt("return");
      case 5:
        if (e.isValid()) {
          l.next = 6;
          break;
        }
        return l.abrupt("return");
      case 6:
        if (t = e.getMcDbEntity(), t) {
          l.next = 7;
          break;
        }
        return l.abrupt("return");
      case 7:
        n = t.layer;
      case 8:
        return s = new Te(), s.setMessage("指定基点"), l.next = 9, s.go();
      case 9:
        if (c = l.sent, c) {
          l.next = 10;
          break;
        }
        return l.abrupt("return");
      case 10:
        return s.setMessage("指定位移的第二个点"), s.setUserDraw(function(f, g) {
          r.forEach(function(i) {
            if (c) {
              var p = i.clone();
              p && (p.layer = n, p.move(c, f), g.drawMcDbEntity(p));
            }
          });
        }), l.next = 11, s.go();
      case 11:
        u = l.sent, r.forEach(function(f) {
          if (c && u) {
            var g = f.clone();
            if (g) {
              g.move(c, u);
              var i = we.getCurrentMxCAD().drawEntity(g), p = i.getMcDbEntity();
              p && (p.layer = n);
            }
          }
        });
      case 12:
      case "end":
        return l.stop();
    }
  }, d);
})));
oe("_layer_freeze", /* @__PURE__ */ ee(/* @__PURE__ */ w.mark(function d() {
  var r, a, e, n, t, s;
  return w.wrap(function(c) {
    for (; ; ) switch (c.prev = c.next) {
      case 0:
        return c.next = 1, Me.userSelect("选择需要冻结图层的对象");
      case 1:
        r = c.sent, a = /* @__PURE__ */ new Set(), e = lr(), n = e.setValue, t = Er(e), s = t.list, r.forEach(function(u) {
          if (u.type === Za.kMxCAD) {
            var l = u.getMcDbEntity();
            if (!l) return;
            var f = s.value.findIndex(function(g) {
              var i = g.name;
              return i === l.layer;
            });
            f >= 0 && a.add(f);
          }
        }), n("freeze", !0, Array.from(a), !0);
      case 2:
      case "end":
        return c.stop();
    }
  }, d);
})));
oe("_layer_thawedAll", function() {
  var d = lr(), r = d.setValue, a = Er(d), e = a.list;
  r("freeze", !1, e.value.map(function(n, t) {
    return t;
  }), !0);
});
oe("_layer_lock", function() {
  return Ht(!0);
});
oe("_layer_unlock", function() {
  return Ht(!1);
});
oe("_layer_combined", /* @__PURE__ */ ee(/* @__PURE__ */ w.mark(function d() {
  var r, a, e, n, t, s, c, u, l, f, g, i, p, v, M, A, b, P;
  return w.wrap(function(m) {
    for (; ; ) switch (m.prev = m.next) {
      case 0:
        return m.next = 1, Me.userSelect("选择要合并的图层上的对象", null, /* @__PURE__ */ function() {
          var D = ee(/* @__PURE__ */ w.mark(function C(K, R) {
            return w.wrap(function(h) {
              for (; ; ) switch (h.prev = h.next) {
                case 0:
                  r = R, R.setKeyWords("[命名(N)]");
                case 1:
                case "end":
                  return h.stop();
              }
            }, C);
          }));
          return function(C, K) {
            return D.apply(this, arguments);
          };
        }());
      case 1:
        if (a = m.sent, e = [], !(r && r.isKeyWordPicked("N"))) {
          m.next = 3;
          break;
        }
        return m.next = 2, ea({
          isMultiple: !0
        });
      case 2:
        e = m.sent, m.next = 4;
        break;
      case 3:
        a && (n = /* @__PURE__ */ new Set(), a.forEach(function(D) {
          var C = D.getMcDbEntity();
          C && n.add(C.layer);
        }), e = Array.from(n));
      case 4:
        if (!(e.length > 0 && e[0] === "")) {
          m.next = 5;
          break;
        }
        return m.abrupt("return");
      case 5:
        return U.acutPrintf(`
选定的图层:` + e.join(",")), t = new He(), t.setMessage("选择目标图层上的对象"), t.setKeyWords("名称(N)"), m.next = 6, t.go();
      case 6:
        if (s = m.sent, c = "", !t.isKeyWordPicked("N")) {
          m.next = 8;
          break;
        }
        return m.next = 7, ea();
      case 7:
        c = m.sent[0], m.next = 12;
        break;
      case 8:
        if (s) {
          m.next = 9;
          break;
        }
        return m.abrupt("return");
      case 9:
        if (s.isValid()) {
          m.next = 10;
          break;
        }
        return m.abrupt("return");
      case 10:
        if (u = s.getMcDbEntity(), u) {
          m.next = 11;
          break;
        }
        return m.abrupt("return");
      case 11:
        c = u.layer;
      case 12:
        return U.acutPrintf(`
将要把` + e.length + '个图层合并到图层"' + c + '"中。'), l = new ba(), l.setMessage("是否继续?"), l.setKeyWords("[是(Y)/否(N)]"), m.next = 13, l.go();
      case 13:
        f = m.sent, (f == null ? void 0 : f.toLocaleUpperCase()) === "Y" && (g = new ha(), g.allSelect(), g.forEach(function(D) {
          var C = D.getMcDbEntity();
          C && e.includes(C.layer) && (C.layer = c);
        }), i = lr(), p = i.remove, v = i.setLayerList, M = i.stringifyJSON, A = Er(i), b = A.list, P = e.map(function(D) {
          return b.value.findIndex(function(C) {
            return C.name === D;
          });
        }), p(P), v(M()));
      case 14:
      case "end":
        return m.stop();
    }
  }, d);
})));
oe("_layer_remove", /* @__PURE__ */ ee(/* @__PURE__ */ w.mark(function d() {
  var r, a, e, n, t, s, c, u, l, f, g, i, p, v, M, A, b, P;
  return w.wrap(function(m) {
    for (; ; ) switch (m.prev = m.next) {
      case 0:
        return m.next = 1, Me.userSelect("选择要合并的图层上的对象", null, /* @__PURE__ */ function() {
          var D = ee(/* @__PURE__ */ w.mark(function C(K, R) {
            return w.wrap(function(h) {
              for (; ; ) switch (h.prev = h.next) {
                case 0:
                  r = R, R.setKeyWords("[命名(N)]");
                case 1:
                case "end":
                  return h.stop();
              }
            }, C);
          }));
          return function(C, K) {
            return D.apply(this, arguments);
          };
        }());
      case 1:
        if (a = m.sent, e = [], !(r && r.isKeyWordPicked("N"))) {
          m.next = 3;
          break;
        }
        return m.next = 2, ea({
          isMultiple: !0
        });
      case 2:
        e = m.sent, m.next = 4;
        break;
      case 3:
        a && (n = /* @__PURE__ */ new Set(), a.forEach(function(D) {
          var C = D.getMcDbEntity();
          C && n.add(C.layer);
        }), e = Array.from(n));
      case 4:
        if (!(e.length > 0 && e[0] === "")) {
          m.next = 5;
          break;
        }
        return m.abrupt("return");
      case 5:
        return t = new ba(), t.setMessage("删除图层上的对象"), t.setKeyWords("[删除(D)/不删除对象改为当前图层(C)]"), m.next = 6, t.go();
      case 6:
        if (s = m.sent, t.getStatus() !== ue.kCancel) {
          m.next = 7;
          break;
        }
        return m.abrupt("return");
      case 7:
        c = (s == null ? void 0 : s.toLocaleUpperCase()) === "D", u = Pt().getCurrentlyLayerName(), l = lr(), f = l.remove, g = l.setLayerList, i = l.stringifyJSON, p = Er(l), v = p.list, M = e.map(function(D) {
          return v.value.findIndex(function(C) {
            return C.name === D;
          });
        }), A = f(M), g(i()), A ? (b = new ha(), b.allSelect(), P = A.map(function(D) {
          var C = D.name;
          return C;
        }), b.forEach(function(D) {
          var C = D.getMcDbEntity();
          C && P.includes(C.layer) && (c ? C.erase() : C.layer = u);
        }), U.acutPrintf(`
已删除的图层:` + P.join(",") + `"
命令`)) : U.acutPrintf(`删除图层失败
命令`);
      case 8:
      case "end":
        return m.stop();
    }
  }, d);
})));
var pi = /* @__PURE__ */ function() {
  var d = ee(/* @__PURE__ */ w.mark(function r() {
    var a, e, n;
    return w.wrap(function(t) {
      for (; ; ) switch (t.prev = t.next) {
        case 0:
          a = 0, e = /* @__PURE__ */ w.mark(function s() {
            var c, u, l, f, g, i, p, v, M;
            return w.wrap(function(A) {
              for (; ; ) switch (A.prev = A.next) {
                case 0:
                  if (!((c = fa.instance) !== null && c !== void 0 && c.isDialogOpen)) {
                    A.next = 1;
                    break;
                  }
                  return A.abrupt("return", {
                    v: void 0
                  });
                case 1:
                  return u = new Te(), u.clearLastInputPoint(), u.setMessage(o("2105") + ":"), u.setCursorType(St.kCross), A.next = 2, u.go();
                case 2:
                  if (l = A.sent, u.getStatus() !== ue.kCancel) {
                    A.next = 3;
                    break;
                  }
                  return A.abrupt("return", {
                    v: void 0
                  });
                case 3:
                  if (l) {
                    A.next = 4;
                    break;
                  }
                  return A.abrupt("return", 0);
                case 4:
                  if (a !== 0) {
                    A.next = 8;
                    break;
                  }
                  return f = new yr(), f.setMessage(o("2106") + ":"), A.next = 5, f.go();
                case 5:
                  if (g = A.sent, f.getStatus() !== ue.kCancel) {
                    A.next = 6;
                    break;
                  }
                  return A.abrupt("return", {
                    v: void 0
                  });
                case 6:
                  if (g !== null) {
                    A.next = 7;
                    break;
                  }
                  return A.abrupt("return", {
                    v: void 0
                  });
                case 7:
                  a = g;
                case 8:
                  return i = new Ta(), i.textString = "", i.position = l, i.alignmentPoint = i.position, i.height = a, p = we.getCurrentMxCAD().drawEntity(i), v = p.getMcDbEntity(), A.prev = 9, A.next = 10, new Promise(function(b) {
                    if (v instanceof Ta) {
                      var P = new fa(v, l);
                      P.onClose(function(m) {
                        m || i.erase(), b();
                      });
                    }
                  });
                case 10:
                  return A.abrupt("return", 0);
                case 11:
                  return A.prev = 11, M = A.catch(9), i.erase(), console.error(M), A.abrupt("return", 1);
                case 12:
                case "end":
                  return A.stop();
              }
            }, s, null, [[9, 11]]);
          });
        case 1:
          return t.delegateYield(e(), "t0", 2);
        case 2:
          if (n = t.t0, n !== 0) {
            t.next = 3;
            break;
          }
          return t.abrupt("continue", 1);
        case 3:
          if (n !== 1) {
            t.next = 4;
            break;
          }
          return t.abrupt("continue", 6);
        case 4:
          if (!n) {
            t.next = 5;
            break;
          }
          return t.abrupt("return", n.v);
        case 5:
          t.next = 1;
          break;
        case 6:
        case "end":
          return t.stop();
      }
    }, r);
  }));
  return function() {
    return d.apply(this, arguments);
  };
}(), vi = /* @__PURE__ */ function() {
  var d = ee(/* @__PURE__ */ w.mark(function r() {
    var a, e, n;
    return w.wrap(function(t) {
      for (; ; ) switch (t.prev = t.next) {
        case 0:
          if (!((a = fa.instance) !== null && a !== void 0 && a.isDialogOpen)) {
            t.next = 1;
            break;
          }
          return t.abrupt("return");
        case 1:
          e = /* @__PURE__ */ w.mark(function s() {
            var c, u, l, f, g;
            return w.wrap(function(i) {
              for (; ; ) switch (i.prev = i.next) {
                case 0:
                  return c = new rr(), c.AddMcDbEntityTypes("TEXT,MTEXT,CUSTOMENTITY"), u = new He(), u.setFilter(c), u.setMessage(o("2107")), i.next = 1, u.go();
                case 1:
                  if (l = i.sent, u.getStatus() !== ue.kCancel) {
                    i.next = 2;
                    break;
                  }
                  return i.abrupt("return", {
                    v: void 0
                  });
                case 2:
                  if (!(!l || !l.isValid())) {
                    i.next = 3;
                    break;
                  }
                  return i.abrupt("return", 0);
                case 3:
                  if (f = l.getMcDbEntity(), !(f instanceof Ta)) {
                    i.next = 7;
                    break;
                  }
                  return i.prev = 4, i.next = 5, new Promise(function(p) {
                    var v = new fa(f, u.pickPoint());
                    v.onClose(function(M) {
                      p();
                    });
                  });
                case 5:
                  return i.abrupt("return", 0);
                case 6:
                  return i.prev = 6, g = i.catch(4), console.error(g), i.abrupt("return", 1);
                case 7:
                case "end":
                  return i.stop();
              }
            }, s, null, [[4, 6]]);
          });
        case 2:
          return t.delegateYield(e(), "t0", 3);
        case 3:
          if (n = t.t0, n !== 0) {
            t.next = 4;
            break;
          }
          return t.abrupt("continue", 2);
        case 4:
          if (n !== 1) {
            t.next = 5;
            break;
          }
          return t.abrupt("continue", 7);
        case 5:
          if (!n) {
            t.next = 6;
            break;
          }
          return t.abrupt("return", n.v);
        case 6:
          t.next = 2;
          break;
        case 7:
        case "end":
          return t.stop();
      }
    }, r);
  }));
  return function() {
    return d.apply(this, arguments);
  };
}();
oe("Mx_EditText", vi);
oe("_DrawText", pi);
var bi = /* @__PURE__ */ function() {
  var d = ee(/* @__PURE__ */ w.mark(function r() {
    var a, e, n, t, s, c, u, l, f, g, i, p, v, M, A, b, P, m, D, C, K, R;
    return w.wrap(function(h) {
      for (; ; ) switch (h.prev = h.next) {
        case 0:
          a = we.getCurrentMxCAD(), e = new ot(), e.setStyleName(Ea.currentName), n = e.getJustification(), t = e.getScale(), e.setJustification(n), e.setScale(t), s = [], c = function(N, T) {
            if (s.length !== 0) {
              var E = new ot();
              E.setJustification(n), E.setScale(t), E.setStyleName(Ea.currentName), s.forEach(function(F) {
                E.addVertex(F);
              }), E.addVertex(N), T.drawMcDbEntity(E);
            }
          }, u = function() {
          }, h.prev = 1;
        case 2:
          return l = new Te(), l.clearLastInputPoint(), l.setMessage(o("1684")), l.setKeyWords("[".concat(o("1685"), "(J)/").concat(o("1686"), "(M)/").concat(o("1624"), "(S)]")), h.next = 3, l.go();
        case 3:
          if (f = h.sent, l.getStatus() !== ue.kCancel) {
            h.next = 4;
            break;
          }
          return u(), h.abrupt("return", !1);
        case 4:
          if (l.getDetailedResult() !== G.kNewCommadIn) {
            h.next = 5;
            break;
          }
          return u(), h.abrupt("return", !1);
        case 5:
          if (!l.isKeyWordPicked("J")) {
            h.next = 10;
            break;
          }
          return g = new Te(), g.setMessage(o("1687") + "<" + o("1688") + ">"), g.setKeyWords("[".concat(o("1689"), "(T)/").concat(o("1690"), "(M)/").concat(o("1691"), "(B)/").concat(o("1688"), "(A)]")), h.next = 6, g.go();
        case 6:
          if (console.log(g.getStatus()), g.getStatus() !== ue.kNone) {
            h.next = 7;
            break;
          }
          n = 1, h.next = 8;
          break;
        case 7:
          if (g.getStatus() !== ue.kCancel) {
            h.next = 8;
            break;
          }
          return h.abrupt("continue", 2);
        case 8:
          if (g.getDetailedResult() !== G.kNewCommadIn) {
            h.next = 9;
            break;
          }
          return u(), h.abrupt("return", !1);
        case 9:
          return g.isKeyWordPicked("T") ? n = 0 : g.isKeyWordPicked("M") ? n = 1 : g.isKeyWordPicked("B") ? n = 2 : g.isKeyWordPicked("A") && (n = -1), e.setJustification(n), h.abrupt("continue", 2);
        case 10:
          if (!l.isKeyWordPicked("M")) {
            h.next = 14;
            break;
          }
          return i = new Ct(), i.setMessage(o("1692") + "<" + t.toString() + ">"), h.next = 11, i.go();
        case 11:
          if (p = h.sent, i.getStatus() !== ue.kCancel) {
            h.next = 12;
            break;
          }
          return h.abrupt("continue", 2);
        case 12:
          if (i.getDetailedResult() !== G.kNewCommadIn) {
            h.next = 13;
            break;
          }
          return u(), h.abrupt("return", !1);
        case 13:
          return i.getStatus() === ue.kOk && typeof p == "number" && (v = p, !isNaN(v) && v > 0 && (t = v, e.setScale(t))), h.abrupt("continue", 2);
        case 14:
          if (!l.isKeyWordPicked("S")) {
            h.next = 16;
            break;
          }
          return M = new ra(), M.setMessage(o("1693")), h.next = 15, M.go();
        case 15:
          return A = h.sent, A && (b = Ea.keys(), b.includes(A) && e.setStyleName(A)), h.abrupt("continue", 2);
        case 16:
          if (!f) {
            h.next = 17;
            break;
          }
          return s.push(f.clone()), e.addVertex(f), h.abrupt("continue", 18);
        case 17:
          h.next = 2;
          break;
        case 18:
          P = !0;
        case 19:
          return m = P ? o("1694") : o("1636"), D = new Te(), D.setMessage(m), P || D.setKeyWords(s.length > 2 ? "[".concat(o("1728"), "(C)/").concat(o("1654"), "(U)]") : "[".concat(o("1654"), "(U)]")), C = s[s.length - 1], D.setBasePt(C), D.setUserDraw(function(y, N) {
            return c(y, N), 1;
          }), h.next = 20, D.go();
        case 20:
          if (K = h.sent, D.getDetailedResult() !== G.kMouseRightIn) {
            h.next = 21;
            break;
          }
          return h.abrupt("continue", 28);
        case 21:
          if (D.getStatus() !== ue.kCancel) {
            h.next = 23;
            break;
          }
          if (!(s.length > 1)) {
            h.next = 22;
            break;
          }
          return h.abrupt("continue", 28);
        case 22:
          return u(), h.abrupt("return", !1);
        case 23:
          if (D.getDetailedResult() !== G.kNewCommadIn) {
            h.next = 24;
            break;
          }
          return u(), h.abrupt("return", !1);
        case 24:
          if (!D.isKeyWordPicked("U")) {
            h.next = 25;
            break;
          }
          return s.length > 1 && (s.pop(), e.removeVertexAt(e.getVertexCount() - 1), P = s.length === 1), h.abrupt("continue", 19);
        case 25:
          if (!D.isKeyWordPicked("C")) {
            h.next = 27;
            break;
          }
          if (!(s.length >= 3)) {
            h.next = 26;
            break;
          }
          return e.setIsClosed(!0), a.drawEntity(e), h.abrupt("return", !0);
        case 26:
          return U.acutPrintf(o("3714")), h.abrupt("continue", 19);
        case 27:
          K && (s.push(K.clone()), e.addVertex(K), P = !1), h.next = 19;
          break;
        case 28:
          if (!(s.length >= 2)) {
            h.next = 29;
            break;
          }
          return a.drawEntity(e), h.abrupt("return", !0);
        case 29:
          return h.abrupt("return", !1);
        case 30:
          return h.prev = 30, R = h.catch(1), console.error("绘制多线出错:", R), h.abrupt("return", !1);
        case 31:
          return h.prev = 31, u(), h.finish(31);
        case 32:
        case "end":
          return h.stop();
      }
    }, r, null, [[1, 30, 31, 32]]);
  }));
  return function() {
    return d.apply(this, arguments);
  };
}(), hi = /* @__PURE__ */ function() {
  var d = ee(/* @__PURE__ */ w.mark(function r() {
    return w.wrap(function(a) {
      for (; ; ) switch (a.prev = a.next) {
        case 0:
          return console.log(o("1695")), a.next = 1, bi();
        case 1:
          return a.abrupt("return", !0);
        case 2:
        case "end":
          return a.stop();
      }
    }, r);
  }));
  return function() {
    return d.apply(this, arguments);
  };
}(), mi = function() {
  oe("MLINE", hi);
};
mi();
Zt(function() {
  new Qt().rxInit();
});
_t();
function jt(d, r) {
  return Ga.apply(this, arguments);
}
function Ga() {
  return Ga = ee(/* @__PURE__ */ w.mark(function d(r, a) {
    return w.wrap(function(e) {
      for (; ; ) switch (e.prev = e.next) {
        case 0:
          return e.abrupt("return", new Promise(/* @__PURE__ */ function() {
            var n = ee(/* @__PURE__ */ w.mark(function t(s) {
              var c, u, l, f, g, i, p, v, M, A, b, P, m, D, C, K, R, h, y, N;
              return w.wrap(function(T) {
                for (; ; ) switch (T.prev = T.next) {
                  case 0:
                    c = r.hash, u = r.type, l = r.file, f = kt(), g = f.hideLoading, i = f.showLoading;
                    {
                      T.next = 2;
                      break;
                    }
                  case 1:
                    return T.abrupt("return", s(!0));
                  case 2:
                    if (u !== mr()) {
                      T.next = 3;
                      break;
                    }
                    l.source.source.size / 1048576 > 1 && i(), p = URL.createObjectURL(l.source.source), setTimeout(function() {
                      Wt(p), setTimeout(function() {
                        URL.revokeObjectURL(p);
                      }, 5e3);
                    }), T.next = 7;
                    break;
                  case 3:
                    if (v = At() || {}, M = v.mxfilepath, A = M === void 0 ? "" : M, b = ln(), P = b + A + c + "." + u + mr(!0), m = b + A + c + "/___mx___tz___.dwg.mxweb", D = !1, r.isUseServerExistingFile) {
                      T.next = 6;
                      break;
                    }
                    return T.next = 4, Mn(P, c);
                  case 4:
                    if (C = T.sent, C.ok) {
                      T.next = 5;
                      break;
                    }
                    return g(), T.abrupt("return", s(!1));
                  case 5:
                    C.tz && (D = !0);
                  case 6:
                    tn(o("1541") + "..."), nn(!0), K = (/* @__PURE__ */ new Date()).getTime(), R = 0, a || (R = La.EMSCRIPTEN_FETCH_LOAD_TO_MEMORY | La.EMSCRIPTEN_FETCH_PERSIST_FILE | La.EMSCRIPTEN_FETCH_REPLACE), h = we.App.getCurrentMxCAD(), y = !1, sn.emit("startOpenFile"), N = h.openWebFile(P, function(E) {
                      if (g(), y = !0, un(), E === 0) {
                        s(!0);
                        var F = (/* @__PURE__ */ new Date()).getTime();
                        if (F - K > 5e3 && Mr().success(o("1542") + "..."), D) {
                          var S = b + "/mxcad/files/tz";
                          Pn.post(S, {
                            fileHash: c
                          }).then(function(I) {
                            I && I.data && I.data.code == 0 && h.getImp().loadTz(m);
                          });
                        }
                      } else
                        s(!1), Mr().error(o("1543"));
                    }, void 0, void 0, R, !D), wt(P).then(function(E) {
                      E / 1048576 > 1 && N && !y && i();
                    }), s(!!N), s(!1);
                  case 7:
                    an(l.name);
                  case 8:
                  case "end":
                    return T.stop();
                }
              }, t);
            }));
            return function(t) {
              return n.apply(this, arguments);
            };
          }()));
        case 1:
        case "end":
          return e.stop();
      }
    }, d);
  })), Ga.apply(this, arguments);
}
var Hr = wr();
oe("OpenDwg", /* @__PURE__ */ ee(/* @__PURE__ */ w.mark(function d() {
  return w.wrap(function(r) {
    for (; ; ) switch (r.prev = r.next) {
      case 0: {
        r.next = 1;
        break;
      }
      case 1:
        return Hr = wr(), r.next = 2, Dt(!1, "OpenDwgImp");
      case 2:
        Hr && kr("MxFullScreen");
      case 3:
      case "end":
        return r.stop();
    }
  }, d);
})));
oe("OpenDwg_DoNotUseCache", /* @__PURE__ */ ee(/* @__PURE__ */ w.mark(function d() {
  return w.wrap(function(r) {
    for (; ; ) switch (r.prev = r.next) {
      case 0: {
        r.next = 1;
        break;
      }
      case 1:
        return Hr = wr(), r.next = 2, Dt(!0, "OpenDwgImp_DoNotUseCache");
      case 2:
        Hr && kr("MxFullScreen");
      case 3:
      case "end":
        return r.stop();
    }
  }, d);
})));
oe("OpenDwgImp_DoNotUseCache", /* @__PURE__ */ function() {
  var d = ee(/* @__PURE__ */ w.mark(function r(a) {
    return w.wrap(function(e) {
      for (; ; ) switch (e.prev = e.next) {
        case 0:
          return e.next = 1, jt(a, !1);
        case 1:
        case "end":
          return e.stop();
      }
    }, r);
  }));
  return function(r) {
    return d.apply(this, arguments);
  };
}());
oe("OpenDwgImp", /* @__PURE__ */ function() {
  var d = ee(/* @__PURE__ */ w.mark(function r(a) {
    return w.wrap(function(e) {
      for (; ; ) switch (e.prev = e.next) {
        case 0:
          return e.next = 1, jt(a, !0);
        case 1:
        case "end":
          return e.stop();
      }
    }, r);
  }));
  return function(r) {
    return d.apply(this, arguments);
  };
}());
oe("Mx_SaveAs", Rt);
oe("Mx_QSave", An);
oe("Mx_Export_DWG", /* @__PURE__ */ ee(/* @__PURE__ */ w.mark(function d() {
  var r, a, e, n, t, s, c, u, l;
  return w.wrap(function(f) {
    for (; ; ) switch (f.prev = f.next) {
      case 0: {
        f.next = 2;
        break;
      }
      case 1:
        f.next = 3;
        break;
      case 2:
        Hr = wr(), r = function() {
          Hr && kr("MxFullScreen");
        }, a = At() || {}, e = a.baseUrl, n = e === void 0 ? "" : e, t = a.saveDwgUrl, s = t === void 0 ? "" : t, c = a.mxfilepath, u = c === void 0 ? "" : c, n.substring(0, 16) == "http://localhost" && (n = lt() + n.substring(16)), s.substring(0, 16) == "http://localhost" && (s = lt() + s.substring(16)), l = we.getCurrentMxCAD(), l.saveFileToUrl(s, function(g, i) {
          try {
            var p = JSON.parse(i);
            if (p.ret == "ok") {
              var v = n + u + p.file;
              fetch(v).then(/* @__PURE__ */ function() {
                var M = ee(/* @__PURE__ */ w.mark(function A(b) {
                  var P, m, D;
                  return w.wrap(function(C) {
                    for (; ; ) switch (C.prev = C.next) {
                      case 0:
                        return D = function(R) {
                          var h = R.toLowerCase(), y = h.lastIndexOf(".");
                          if (y !== -1) {
                            var N = h.substring(y);
                            if (N === mr(!0))
                              return R.substring(0, y) + ".dwg";
                            if (N === ".dwg" || N === ".dxf")
                              return R;
                          }
                          return R + ".dwg";
                        }, C.next = 1, b.blob();
                      case 1:
                        return P = C.sent, m = l.getCurrentOriginaFileName(), m = D(m), C.next = 2, Mt.saveAsFileDialog({
                          blob: P,
                          filename: m,
                          types: [{
                            description: "dwg" + o("1544"),
                            accept: {
                              "application/octet-stream": [".dwg"]
                            }
                          }]
                        });
                      case 2:
                        r();
                      case 3:
                      case "end":
                        return C.stop();
                    }
                  }, A);
                }));
                return function(A) {
                  return M.apply(this, arguments);
                };
              }());
            } else
              console.log(i);
          } catch (M) {
            console.log("Mx: sserverResult error");
          }
        });
      case 3:
      case "end":
        return f.stop();
    }
  }, d);
})));
oe("Mx_debug", function() {
});
oe("Mx_clear_buf", function() {
});
oe("Mx_Array", vn);
oe("Mx_NewFile", function() {
  en().open({
    title: o("181"),
    text: o("是否新建一个文件") + "?",
    cancelTitle: o("201"),
    defineTitle: o("1829"),
    define: function() {
      var r = we.getCurrentMxCAD();
      r.newFile();
      var a = lr(), e = a.initLayerList, n = yt(), t = n.initColorIndexList, s = rn(), c = s.initLineTypeList;
      e(), t(), c();
    }
  });
});
oe("Mx_NewFile_Template", function() {
  var d = we.getCurrentMxCAD();
  d.openWebFile("empty_template.mxweb");
});
oe("MxPE_DrawMText_old", /* @__PURE__ */ ee(/* @__PURE__ */ w.mark(function d() {
  var r, a, e, n, t, s, c, u, l, f;
  return w.wrap(function(g) {
    for (; ; ) switch (g.prev = g.next) {
      case 0:
        return r = new Te(), r.setMessage(o("1545")), g.next = 1, r.go();
      case 1:
        if (a = g.sent, a) {
          g.next = 2;
          break;
        }
        return g.abrupt("return");
      case 2:
        return e = wn(), n = e.open, g.next = 3, n();
      case 3:
        if (t = g.sent, typeof t != "boolean") {
          g.next = 4;
          break;
        }
        return g.abrupt("return");
      case 4:
        return s = t.text, c = t.size, u = new pn(), u.contents = s || "", c && (u.textHeight = c), u.location = a, l = we.getCurrentMxCAD(), f = l.drawEntity(u), l.updateDisplay(), g.abrupt("return", f);
      case 5:
      case "end":
        return g.stop();
    }
  }, d);
})));
