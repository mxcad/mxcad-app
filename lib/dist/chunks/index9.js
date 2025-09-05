import { z as Ze, W as _e, t as i, a6 as ve, $ as me, aD as er, a0 as Ve, x as H, aF as be, X as rr, _ as A, a as w, h as g, aG as Z, aH as T, F as ar, R as tr } from "./lib.js";
import { d as nr, f as B, i as Me, g as sr, a7 as ur, m as X, o as D, w as m, c as G, s as ge, l as E, a as f, G as d, q as F, t as W, A as lr, F as he, b as De, p as Fe, n as ir, y as or, x as _, Q as pr } from "./vue.js";
import { M as ee, o as I, L as Pe, f as cr, p as fr, g as dr, z as vr } from "./mxcad.js";
import { r as mr, M as br, d as gr } from "./mxdraw.js";
import { i as Ae } from "./identificationFrame.js";
import { s as hr } from "./pinia.js";
import { i as yr, Q as kr, S as ye, j as Te, v as Ee, a7 as wr, f as xr, b as $, H as Sr, a as re, V as ae } from "./vuetify.js";
function ke(k, P) {
  var y = typeof Symbol != "undefined" && k[Symbol.iterator] || k["@@iterator"];
  if (!y) {
    if (Array.isArray(k) || (y = Cr(k)) || P) {
      y && (k = y);
      var C = 0, Y = function() {
      };
      return { s: Y, n: function() {
        return C >= k.length ? { done: !0 } : { done: !1, value: k[C++] };
      }, e: function(U) {
        throw U;
      }, f: Y };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var V, v = !0, J = !1;
  return { s: function() {
    y = y.call(k);
  }, n: function() {
    var U = y.next();
    return v = U.done, U;
  }, e: function(U) {
    J = !0, V = U;
  }, f: function() {
    try {
      v || y.return == null || y.return();
    } finally {
      if (J) throw V;
    }
  } };
}
function Cr(k, P) {
  if (k) {
    if (typeof k == "string") return Ne(k, P);
    var y = {}.toString.call(k).slice(8, -1);
    return y === "Object" && k.constructor && (y = k.constructor.name), y === "Map" || y === "Set" ? Array.from(k) : y === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(y) ? Ne(k, P) : void 0;
  }
}
function Ne(k, P) {
  (P == null || P > k.length) && (P = k.length);
  for (var y = 0, C = Array(P); y < P; y++) C[y] = k[y];
  return C;
}
var Vr = {
  key: 0,
  class: "d-flex align-center"
}, Mr = {
  class: "d-flex"
}, Dr = {
  class: "position-relative"
}, Fr = {
  class: "d-flex align-center justify-space-between"
}, Pr = {
  class: "ml-2 multi-select-actions"
}, Ar = {
  class: "d-flex flex-wrap justify-space-start overflow-y-auto",
  style: {
    "max-height": "340px"
  }
}, Tr = ["onClick"], Er = {
  class: "cut-box-actions"
}, Nr = {
  class: "cut-box-jump"
}, Ur = {
  key: 0,
  class: "cut-box-filename"
}, zr = {
  class: "cut-box-add ma-2"
};
const Br = /* @__PURE__ */ nr({
  __name: "index",
  setup: function(P) {
    var y = [{
      name: "全部导出",
      primary: !0,
      fun: function() {
        return Le();
      }
    }, {
      name: "关闭",
      fun: function() {
        v.value = [], T(!1);
      }
    }], C = B(!1);
    Me(C, function(l) {
      l || v.value.forEach(function(r) {
        r.selected = !1;
      });
    });
    var Y = [{
      name: "批量删除",
      icon: "delete",
      color: "error",
      fun: Ue
    }, {
      name: "批量导出",
      icon: "lingcunweiDWG",
      color: "primary",
      fun: ze
    }], V = B(!1), v = B([]), J = function() {
      return v.value.filter(function(r) {
        return r.selected;
      }).length;
    };
    function N(l) {
      if (C.value) {
        var r = v.value[l];
        r.selected = !r.selected, V.value = !1;
      }
    }
    Me(C, function() {
      V.value = !1;
    });
    function U() {
      var l = v.value.some(function(r) {
        return !r.selected;
      });
      v.value.forEach(function(r) {
        r.selected = l;
      }), V.value = !1;
    }
    function Ue() {
      v.value = v.value.filter(function(l) {
        return !l.selected;
      }), V.value = !1;
    }
    function ze() {
      return te.apply(this, arguments);
    }
    function te() {
      return te = A(/* @__PURE__ */ w.mark(function l() {
        var r, a, e, n, t, u, o;
        return w.wrap(function(p) {
          for (; ; ) switch (p.prev = p.next) {
            case 0: {
              p.next = 3;
              break;
            }
            case 1:
              return p.next = 2, Z.hasPath(L.value);
            case 2:
              if (p.sent) {
                p.next = 3;
                break;
              }
              return g().error(i("3717")), p.abrupt("return");
            case 3:
              if (v.value.length !== 0) {
                p.next = 4;
                break;
              }
              return g().error(i("3718")), p.abrupt("return");
            case 4:
              r = v.value.map(function(b, c) {
                return b.selected ? c : -1;
              }).filter(function(b) {
                return b !== -1;
              }), a = [], e = ke(r), p.prev = 5, e.s();
            case 6:
              if ((n = e.n()).done) {
                p.next = 10;
                break;
              }
              return t = n.value, v.value[t].exportStatus = "ready", p.next = 7, ue(t);
            case 7:
              return u = p.sent, V.value = !1, p.next = 8, new Promise(function(b) {
                return setTimeout(b, 500);
              });
            case 8:
              u && a.push(t);
            case 9:
              p.next = 6;
              break;
            case 10:
              p.next = 12;
              break;
            case 11:
              p.prev = 11, o = p.catch(5), e.e(o);
            case 12:
              return p.prev = 12, e.f(), p.finish(12);
            case 13:
              a.length === 0 ? g().error(i("3719")) : g().success(i("3720")), V.value = !1;
            case 14:
            case "end":
              return p.stop();
          }
        }, l, null, [[5, 11, 12, 13]]);
      })), te.apply(this, arguments);
    }
    function Be(l) {
      var r = v.value[l];
      if (r) {
        var a = parseFloat(r.param.bd_pt1_x), e = parseFloat(r.param.bd_pt1_y), n = parseFloat(r.param.bd_pt2_x), t = parseFloat(r.param.bd_pt2_y), u = Math.abs(n - a), o = Math.abs(t - e), p = 0.2, b = a - u * p, c = e - o * p, x = n + u * p, s = t + o * p;
        T(!1);
        var S = ee.getCurrentMxCAD();
        S.zoomW(new I(b, c), new I(x, s));
        var M = S.mxdraw.getTempMarkDraw();
        M.clear();
        var O = new THREE.Vector3(a, e, 0), q = new THREE.Vector3(n, e, 0), h = new THREE.Vector3(n, t, 0), fe = new THREE.Vector3(a, t, 0), K = mr.createLines([O, q, h, fe, O], 16711680);
        M.drawEntity(K), S.updateDisplay(), setTimeout(function() {
          g().warning(i("4317")), document.addEventListener("click", function() {
            M.clear(), T(!0);
          }, {
            once: !0
          });
        });
      }
    }
    var R = B("manual"), z = B("");
    function Ie(l) {
      v.value.splice(l, 1), V.value = !1;
    }
    var Q = B(!1), ne = /* @__PURE__ */ function() {
      var l = A(/* @__PURE__ */ w.mark(function r(a, e) {
        return w.wrap(function(n) {
          for (; ; ) switch (n.prev = n.next) {
            case 0:
              return n.abrupt("return", new Promise(function(t, u) {
                var o = ee.getCurrentMxCAD();
                o.setAttribute({
                  ShowCoordinate: !1
                });
                var p = Math.abs(a.x - e.x), b = Math.abs(a.y - e.y);
                if (p < 1 || b < 1) return t(void 0);
                var c = 800, x, s;
                p <= c ? (x = p, s = b) : (x = c, s = c * (b / p)), o.mxdraw.createCanvasImageData(function(S) {
                  t(S), o.setAttribute({
                    ShowCoordinate: !0
                  });
                }, {
                  width: x,
                  // 图片宽
                  height: s,
                  // 图片高
                  range_pt1: a.toVector3(),
                  // 截图范围角点1
                  range_pt2: e.toVector3()
                  // 截图范围角点2
                });
              }));
            case 1:
            case "end":
              return n.stop();
          }
        }, r);
      }));
      return function(a, e) {
        return l.apply(this, arguments);
      };
    }();
    function Re(l) {
      return v.value.some(function(r) {
        var a = 1e-3, e = Math.abs(parseFloat(r.param.bd_pt1_x) - parseFloat(l.bd_pt1_x)) < a, n = Math.abs(parseFloat(r.param.bd_pt1_y) - parseFloat(l.bd_pt1_y)) < a, t = Math.abs(parseFloat(r.param.bd_pt2_x) - parseFloat(l.bd_pt2_x)) < a, u = Math.abs(parseFloat(r.param.bd_pt2_y) - parseFloat(l.bd_pt2_y)) < a;
        return e && n && t && u;
      });
    }
    function se(l, r) {
      if (Re(r)) {
        g().info(i("3721"));
        return;
      }
      v.value.push({
        imgBase64: l,
        param: r,
        exportStatus: "ready",
        selected: !1
      }), V.value = !0;
    }
    var L = B(""), ue = /* @__PURE__ */ function() {
      var l = A(/* @__PURE__ */ w.mark(function r(a) {
        var e, n, t, u, o, p, b, c, x, s, S, M, O, q;
        return w.wrap(function(h) {
          for (; ; ) switch (h.prev = h.next) {
            case 0: {
              h.next = 3;
              break;
            }
            case 1:
              return h.next = 2, Z.hasPath(L.value);
            case 2:
              if (h.sent) {
                h.next = 3;
                break;
              }
              return g().error(i("3717")), h.abrupt("return");
            case 3:
              if (!(a < 0 || a >= v.value.length)) {
                h.next = 4;
                break;
              }
              return h.abrupt("return");
            case 4:
              e = ee.getCurrentMxCAD().mxdraw.getTempMarkDraw(), e.clear(), n = v.value[a], n.exportStatus = "exporting";
              {
                h.next = 11;
                break;
              }
            case 6:
              if (u = h.sent, !u) {
                h.next = 7;
                break;
              }
              return n.exportStatus = "success", n.fileName = t, h.abrupt("return", !0);
            case 7:
              n.exportStatus = "error", n.fileName = "";
            case 8:
              h.next = 10;
              break;
            case 9:
              h.prev = 9, O = h.catch(5), n.exportStatus = "error", console.error("导出DWG失败:", O);
            case 10:
              h.next = 15;
              break;
            case 11:
              return o = ar() || {}, p = o.baseUrl, b = p === void 0 ? "" : p, c = o.mxfilepath, x = c === void 0 ? "" : c, s = o.cutDwgUrl, S = s === void 0 ? "" : s, M = "".concat((/* @__PURE__ */ new Date()).getTime(), "_").concat(a, ".dwg"), h.prev = 12, h.next = 13, new Promise(function(fe, K) {
                ee.getCurrentMxCAD().saveFileToUrl(S, function(Ir, de) {
                  try {
                    var Se = JSON.parse(de);
                    if (Se.ret == "ok") {
                      var Ke = b + x + Se.file;
                      vr.downloadFileFromUrl(Ke, M), n.exportStatus = "success", n.fileName = M, fe();
                    } else
                      console.error("导出DWG失败:", de), n.exportStatus = "error", K(new Error(de));
                  } catch (Ce) {
                    console.error("导出DWG错误:", Ce), n.exportStatus = "error", K(Ce);
                  }
                }, void 0, JSON.stringify(n.param));
              });
            case 13:
              h.next = 15;
              break;
            case 14:
              h.prev = 14, q = h.catch(12), console.error("导出过程中发生错误:", q), n.exportStatus = "error";
            case 15:
            case "end":
              return h.stop();
          }
        }, r, null, [[5, 9], [12, 14]]);
      }));
      return function(a) {
        return l.apply(this, arguments);
      };
    }(), Le = /* @__PURE__ */ function() {
      var l = A(/* @__PURE__ */ w.mark(function r() {
        var a, e, n;
        return w.wrap(function(t) {
          for (; ; ) switch (t.prev = t.next) {
            case 0:
              if (v.value.length !== 0) {
                t.next = 1;
                break;
              }
              return g().error(i("3718")), t.abrupt("return");
            case 1: {
              t.next = 4;
              break;
            }
            case 2:
              return t.next = 3, Z.hasPath(L.value);
            case 3:
              if (t.sent) {
                t.next = 4;
                break;
              }
              return g().error(i("3717")), t.abrupt("return");
            case 4:
              a = [], e = 0;
            case 5:
              if (!(e < v.value.length)) {
                t.next = 9;
                break;
              }
              return v.value[e].exportStatus = "ready", t.next = 6, ue(e);
            case 6:
              return n = t.sent, V.value = !1, t.next = 7, new Promise(function(u) {
                return setTimeout(u, 500);
              });
            case 7:
              n && a.push(e);
            case 8:
              e++, t.next = 5;
              break;
            case 9:
              a.length === 0 ? g().error(i("3719")) : g().success(i("3722")), V.value = !1;
            case 10:
            case "end":
              return t.stop();
          }
        }, r);
      }));
      return function() {
        return l.apply(this, arguments);
      };
    }();
    function le(l) {
      var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1, a = r, e = r, n = new I(l.minPt.x - a, l.minPt.y - e, l.minPt.z), t = new I(l.maxPt.x + a, l.maxPt.y + e, l.maxPt.z);
      return {
        minPt: n,
        maxPt: t
      };
    }
    var Ge = /* @__PURE__ */ function() {
      var l = A(/* @__PURE__ */ w.mark(function r() {
        var a, e, n, t, u, o, p, b, c, x;
        return w.wrap(function(s) {
          for (; ; ) switch (s.prev = s.next) {
            case 0:
              return s.next = 1, Ae({
                method: "polyline",
                isSpecifiedRange: !Q.value,
                layerName: we()
              });
            case 1:
              if (a = s.sent, a.length !== 0) {
                s.next = 2;
                break;
              }
              return g().error(i("3723")), s.abrupt("return");
            case 2:
              e = ke(a), s.prev = 3, e.s();
            case 4:
              if ((n = e.n()).done) {
                s.next = 9;
                break;
              }
              if (t = n.value, t) {
                s.next = 5;
                break;
              }
              return s.abrupt("continue", 8);
            case 5:
              return u = le(t), o = u.minPt, p = u.maxPt, s.next = 6, ne(o, p);
            case 6:
              if (b = s.sent, b) {
                s.next = 7;
                break;
              }
              return s.abrupt("continue", 8);
            case 7:
              c = {
                bd_pt1_x: "" + o.x,
                bd_pt1_y: "" + o.y,
                bd_pt2_x: "" + p.x,
                bd_pt2_y: "" + p.y
              }, se(b, c);
            case 8:
              s.next = 4;
              break;
            case 9:
              s.next = 11;
              break;
            case 10:
              s.prev = 10, x = s.catch(3), e.e(x);
            case 11:
              return s.prev = 11, e.f(), s.finish(11);
            case 12:
            case "end":
              return s.stop();
          }
        }, r, null, [[3, 10, 11, 12]]);
      }));
      return function() {
        return l.apply(this, arguments);
      };
    }(), j = B(""), we = function() {
      return j.value !== "" ? j.value : void 0;
    }, We = hr(Ze()), je = We.list, He = sr(function() {
      return je.value.map(function(l) {
        return l.name;
      });
    });
    function $e() {
      return ie.apply(this, arguments);
    }
    function ie() {
      return ie = A(/* @__PURE__ */ w.mark(function l() {
        var r, a, e, n, t;
        return w.wrap(function(u) {
          for (; ; ) switch (u.prev = u.next) {
            case 0:
              return T(!1), u.prev = 1, r = new Pe(), r.setMessage(i("3724")), u.next = 2, r.go();
            case 2:
              if (a = u.sent, a.isValid()) {
                u.next = 3;
                break;
              }
              return g().warning(i("3725")), u.abrupt("return");
            case 3:
              if (e = a.getMcDbEntity(), e) {
                u.next = 4;
                break;
              }
              return g().warning(i("3726")), u.abrupt("return");
            case 4:
              if (n = e.layer, n) {
                u.next = 5;
                break;
              }
              return g().warning(i("3727")), u.abrupt("return");
            case 5:
              j.value = n, g().success(i("3728") + n), u.next = 7;
              break;
            case 6:
              u.prev = 6, t = u.catch(1), console.error("获取图层名失败:", t), g().error(i("3729"));
            case 7:
              return u.prev = 7, T(!0), u.finish(7);
            case 8:
            case "end":
              return u.stop();
          }
        }, l, null, [[1, 6, 7, 8]]);
      })), ie.apply(this, arguments);
    }
    function Oe() {
      return oe.apply(this, arguments);
    }
    function oe() {
      return oe = A(/* @__PURE__ */ w.mark(function l() {
        var r, a, e, n, t, u;
        return w.wrap(function(o) {
          for (; ; ) switch (o.prev = o.next) {
            case 0:
              return T(!1), o.prev = 1, r = new Pe(), r.setMessage(i("3730")), o.next = 2, r.go();
            case 2:
              if (a = o.sent, a.isValid()) {
                o.next = 3;
                break;
              }
              return g().warning(i("3725")), o.abrupt("return");
            case 3:
              if (e = a.getMcDbEntity(), e) {
                o.next = 4;
                break;
              }
              return g().warning(i("3726")), o.abrupt("return");
            case 4:
              if (!(e instanceof cr)) {
                o.next = 6;
                break;
              }
              if (n = e, t = n.blockName, t) {
                o.next = 5;
                break;
              }
              return g().warning(i("3731")), o.abrupt("return");
            case 5:
              z.value = t, g().success(i("3732") + t), o.next = 7;
              break;
            case 6:
              g().warning(i("3733"));
            case 7:
              o.next = 9;
              break;
            case 8:
              o.prev = 8, u = o.catch(1), console.error("获取图块名失败:", u), g().error(i("3734"));
            case 9:
              return o.prev = 9, T(!0), o.finish(9);
            case 10:
            case "end":
              return o.stop();
          }
        }, l, null, [[1, 8, 9, 10]]);
      })), oe.apply(this, arguments);
    }
    var Xe = /* @__PURE__ */ function() {
      var l = A(/* @__PURE__ */ w.mark(function r() {
        var a, e, n, t, u, o, p, b, c, x;
        return w.wrap(function(s) {
          for (; ; ) switch (s.prev = s.next) {
            case 0:
              if (z.value !== "") {
                s.next = 1;
                break;
              }
              return g().error(i("3587")), s.abrupt("return");
            case 1:
              return s.next = 2, Ae({
                method: "block",
                blockName: z.value !== "" ? z.value : void 0,
                isSpecifiedRange: !Q.value,
                layerName: we()
              });
            case 2:
              if (a = s.sent, a.length !== 0) {
                s.next = 3;
                break;
              }
              return g().error(i("3723")), s.abrupt("return");
            case 3:
              e = ke(a), s.prev = 4, e.s();
            case 5:
              if ((n = e.n()).done) {
                s.next = 10;
                break;
              }
              if (t = n.value, t) {
                s.next = 6;
                break;
              }
              return s.abrupt("continue", 9);
            case 6:
              return u = le(t), o = u.minPt, p = u.maxPt, s.next = 7, ne(o, p);
            case 7:
              if (b = s.sent, b) {
                s.next = 8;
                break;
              }
              return s.abrupt("continue", 9);
            case 8:
              c = {
                bd_pt1_x: "" + o.x,
                bd_pt1_y: "" + o.y,
                bd_pt2_x: "" + p.x,
                bd_pt2_y: "" + p.y
              }, se(b, c);
            case 9:
              s.next = 5;
              break;
            case 10:
              s.next = 12;
              break;
            case 11:
              s.prev = 11, x = s.catch(4), e.e(x);
            case 12:
              return s.prev = 12, e.f(), s.finish(12);
            case 13:
            case "end":
              return s.stop();
          }
        }, r, null, [[4, 11, 12, 13]]);
      }));
      return function() {
        return l.apply(this, arguments);
      };
    }();
    function Ye() {
      return pe.apply(this, arguments);
    }
    function pe() {
      return pe = A(/* @__PURE__ */ w.mark(function l() {
        var r;
        return w.wrap(function(a) {
          for (; ; ) switch (a.prev = a.next) {
            case 0:
              if (!(R.value === "block" && z.value === "")) {
                a.next = 1;
                break;
              }
              return g().error(i("3587")), a.abrupt("return");
            case 1:
              T(!1), a.prev = 2, r = R.value, a.next = r === "polyline" ? 3 : r === "block" ? 5 : 7;
              break;
            case 3:
              return a.next = 4, Ge();
            case 4:
              return a.abrupt("continue", 9);
            case 5:
              return a.next = 6, Xe();
            case 6:
              return a.abrupt("continue", 9);
            case 7:
              return a.next = 8, Je();
            case 8:
              return a.abrupt("continue", 9);
            case 9:
              return a.prev = 9, T(!0), a.finish(9);
            case 10:
            case "end":
              return a.stop();
          }
        }, l, null, [[2, , 9, 10]]);
      })), pe.apply(this, arguments);
    }
    function Je() {
      return ce.apply(this, arguments);
    }
    function ce() {
      return ce = A(/* @__PURE__ */ w.mark(function l() {
        var r, a, e, n, t, u, o, p, b;
        return w.wrap(function(c) {
          for (; ; ) switch (c.prev = c.next) {
            case 0:
              return r = new dr(), r.clearLastInputPoint(), r.setMessage(i("3589")), c.next = 1, r.go();
            case 1:
              if (a = c.sent, a) {
                c.next = 2;
                break;
              }
              return c.abrupt("return");
            case 2:
              return r.setMessage(i("3590")), r.setUserDraw(function(x, s) {
                s.setColor(16711680);
                var S = new fr();
                S.addVertexAt(a), S.addVertexAt(new I(a.x, x.y)), S.addVertexAt(x), S.addVertexAt(new I(x.x, a.y)), S.constantWidth = br.screenCoordLong2Doc(2), S.isClosed = !0, s.drawMcDbEntity(S);
                var M = [];
                M.push(a.toVector3()), M.push(new THREE.Vector3(a.x, x.y)), M.push(x.toVector3()), M.push(new THREE.Vector3(x.x, a.y)), s.setColor(12868), s.drawSolid(M, 0.5);
              }), r.setDisableOsnap(!0), r.setDisableOrthoTrace(!0), r.setDynamicInputType(gr.kXYCoordInput), c.next = 3, r.go();
            case 3:
              if (e = c.sent, e) {
                c.next = 4;
                break;
              }
              return c.abrupt("return");
            case 4:
              return n = {
                minPt: new I(Math.min(a.x, e.x), Math.min(a.y, e.y), Math.min(a.z, e.z)),
                maxPt: new I(Math.max(a.x, e.x), Math.max(a.y, e.y), Math.max(a.z, e.z))
              }, t = le(n), u = t.minPt, o = t.maxPt, p = {
                bd_pt1_x: "" + u.x,
                bd_pt1_y: "" + u.y,
                bd_pt2_x: "" + o.x,
                bd_pt2_y: "" + o.y
              }, c.next = 5, ne(u, o);
            case 5:
              if (b = c.sent, b) {
                c.next = 6;
                break;
              }
              return c.abrupt("return");
            case 6:
              se(b, p);
            case 7:
            case "end":
              return c.stop();
          }
        }, l);
      })), ce.apply(this, arguments);
    }
    var xe = function() {
      z.value = "", j.value = "", v.value = [], T(!1);
    }, Qe = {
      esc: xe
    }, qe = /* @__PURE__ */ function() {
      var l = A(/* @__PURE__ */ w.mark(function r() {
        var a;
        return w.wrap(function(e) {
          for (; ; ) switch (e.prev = e.next) {
            case 0:
              return e.next = 1, Z.showDirSelectBox(L.value);
            case 1:
              a = e.sent, a && (L.value = a);
            case 2:
            case "end":
              return e.stop();
          }
        }, r);
      }));
      return function() {
        return l.apply(this, arguments);
      };
    }();
    return function(l, r) {
      var a = ur("scroll-bottom");
      return D(), X(rr, {
        title: d(i)("1990"),
        modelValue: d(be),
        "onUpdate:modelValue": r[7] || (r[7] = function(e) {
          return pr(be) ? be.value = e : null;
        }),
        "max-width": "610",
        footerBtnList: y,
        keys: Qe,
        onClickClose: xe
      }, {
        default: m(function() {
          return [d(_e)() ? (D(), G("div", Vr, [f(yr, {
            modelValue: L.value,
            "onUpdate:modelValue": r[0] || (r[0] = function(e) {
              return L.value = e;
            }),
            class: "flex-grow-1 mr-2"
          }, {
            prepend: m(function() {
              return [F(W(d(i)("3735")) + ": ", 1)];
            }),
            _: 1
          }, 8, ["modelValue"]), f(ve, {
            small: "",
            onClick: qe
          }, {
            default: m(function() {
              return [F(W(d(i)("3736")), 1)];
            }),
            _: 1
          })])) : ge("", !0), E("div", Mr, [f(me, {
            title: d(i)("3591"),
            class: "mr-2"
          }, {
            default: m(function() {
              return [f(kr, {
                modelValue: R.value,
                "onUpdate:modelValue": r[1] || (r[1] = function(e) {
                  return R.value = e;
                }),
                inline: !1
              }, {
                default: m(function() {
                  return [f(ye, {
                    value: "manual",
                    label: d(i)("3592")
                  }, null, 8, ["label"]), f(ye, {
                    value: "polyline",
                    class: "mt-2",
                    label: d(i)("3593")
                  }, null, 8, ["label"]), f(ye, {
                    value: "block",
                    class: "mt-2",
                    label: d(i)("3594")
                  }, null, 8, ["label"])];
                }),
                _: 1
              }, 8, ["modelValue"])];
            }),
            _: 1
          }, 8, ["title"]), f(me, {
            title: d(i)("3737")
          }, {
            default: m(function() {
              return [f(Te, {
                modelValue: Q.value,
                "onUpdate:modelValue": r[2] || (r[2] = function(e) {
                  return Q.value = e;
                }),
                label: d(i)("3738"),
                disabled: R.value === "manual"
              }, null, 8, ["modelValue", "label", "disabled"]), f(Ee, {
                modelValue: z.value,
                "onUpdate:modelValue": r[3] || (r[3] = function(e) {
                  return z.value = e;
                }),
                class: "mt-2",
                items: d(er)(),
                disabled: R.value !== "block",
                clearable: ""
              }, {
                prepend: m(function() {
                  return [F(W(d(i)("3739")) + ": ", 1)];
                }),
                append: m(function() {
                  return [f(Ve, {
                    text: d(i)("3740"),
                    onClick: Oe
                  }, null, 8, ["text"])];
                }),
                _: 1
              }, 8, ["modelValue", "items", "disabled"]), f(Ee, {
                class: "mt-2",
                modelValue: j.value,
                "onUpdate:modelValue": r[4] || (r[4] = function(e) {
                  return j.value = e;
                }),
                items: He.value,
                disabled: R.value === "manual",
                clearable: ""
              }, {
                prepend: m(function() {
                  return [F(W(d(i)("3741")) + ": ", 1)];
                }),
                append: m(function() {
                  return [f(Ve, {
                    text: d(i)("3742"),
                    onClick: $e
                  }, null, 8, ["text"])];
                }),
                _: 1
              }, 8, ["modelValue", "items", "disabled"])];
            }),
            _: 1
          }, 8, ["title"])]), f(me, {
            title: d(i)("3597"),
            class: "mt-2",
            style: {
              "min-height": "420px"
            }
          }, {
            default: m(function() {
              return [E("div", Dr, [E("div", Fr, [f(wr, {
                class: "ml-4",
                modelValue: C.value,
                "onUpdate:modelValue": r[5] || (r[5] = function(e) {
                  return C.value = e;
                }),
                label: C.value ? d(i)("3743") : d(i)("3744"),
                density: "compact",
                color: "primary",
                "hide-details": ""
              }, null, 8, ["modelValue", "label"]), E("div", Pr, [f(ve, {
                small: "",
                onClick: U,
                disabled: v.value.length === 0 || !C.value
              }, {
                default: m(function() {
                  return [F(W(v.value.some(function(e) {
                    return !e.selected;
                  }) ? d(i)("1871") : d(i)("3745")), 1)];
                }),
                _: 1
              }, 8, ["disabled"]), (D(), G(he, null, De(Y, function(e, n) {
                return f(ve, {
                  small: "",
                  disabled: !(J() > 0),
                  key: n,
                  class: "ml-1",
                  onClick: e.fun
                }, {
                  default: m(function() {
                    return [F(W(e.name), 1)];
                  }),
                  _: 2
                }, 1032, ["disabled", "onClick"]);
              }), 64))])]), f(xr, {
                class: "mb-2"
              }), lr((D(), G("div", Ar, [(D(!0), G(he, null, De(v.value, function(e, n) {
                return D(), G("div", {
                  key: n,
                  class: Fe(["cut-box-container ma-2", {
                    "selected-box": e.selected
                  }])
                }, [E("div", {
                  class: "cut-box bg-black",
                  style: ir({
                    backgroundImage: "url(".concat(e.imgBase64, ")"),
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "contain"
                  }),
                  onClick: function(u) {
                    return C.value && N(n);
                  }
                }, [E("div", {
                  class: Fe(["cut-box-status", [e.exportStatus === "ready" ? "status-ready" : e.exportStatus === "exporting" ? "status-exporting" : e.exportStatus === "success" ? "status-success" : "status-error"]])
                }, [C.value ? (D(), X(Te, {
                  key: 0,
                  style: {
                    "--v-selection-control-size": "24px",
                    "margin-left": "2px",
                    "margin-top": "1.5px"
                  },
                  modelValue: e.selected,
                  "onUpdate:modelValue": function(u) {
                    return e.selected = u;
                  },
                  color: "primary",
                  onClick: r[6] || (r[6] = or(function() {
                  }, ["stop"]))
                }, null, 8, ["modelValue", "onUpdate:modelValue"])) : (D(), G(he, {
                  key: 1
                }, [e.exportStatus === "ready" ? (D(), X($, {
                  key: 0,
                  size: "small"
                }, {
                  default: m(function() {
                    return H(r[8] || (r[8] = [F("pending", -1)]));
                  }),
                  _: 1
                })) : e.exportStatus === "exporting" ? (D(), X(Sr, {
                  key: 1,
                  indeterminate: "",
                  size: "16",
                  width: "2",
                  color: "white"
                })) : e.exportStatus === "success" ? (D(), X($, {
                  key: 2,
                  color: "success",
                  size: "small"
                }, {
                  default: m(function() {
                    return H(r[9] || (r[9] = [F("class:iconfont gou", -1)]));
                  }),
                  _: 1
                })) : ge("", !0)], 64))], 2), E("div", Er, [f(re, {
                  text: d(i)("205"),
                  location: "top"
                }, {
                  activator: m(function(t) {
                    var u = t.props;
                    return [f(ae, _({
                      ref_for: !0
                    }, u, {
                      icon: "",
                      variant: "outlined",
                      color: "error",
                      class: "delete-btn",
                      onClick: function(p) {
                        return Ie(n);
                      }
                    }), {
                      default: m(function() {
                        return [f($, {
                          size: "14"
                        }, {
                          default: m(function() {
                            return H(r[10] || (r[10] = [F("cha", -1)]));
                          }),
                          _: 1
                        })];
                      }),
                      _: 1
                    }, 16, ["onClick"])];
                  }),
                  _: 2
                }, 1032, ["text"]), f(re, {
                  text: e.exportStatus === "ready" ? d(i)("3598") : e.exportStatus === "exporting" ? d(i)("3599") : e.exportStatus === "success" ? d(i)("3600") : d(i)("3601"),
                  location: "top"
                }, {
                  activator: m(function(t) {
                    var u = t.props;
                    return [f(ae, _({
                      ref_for: !0
                    }, u, {
                      icon: "",
                      variant: "outlined",
                      color: e.exportStatus === "success" ? "success" : e.exportStatus === "error" ? "warning" : "primary",
                      class: "export-btn",
                      disabled: e.exportStatus === "exporting",
                      loading: e.exportStatus === "exporting",
                      onClick: function(p) {
                        return ue(n);
                      }
                    }), {
                      default: m(function() {
                        return [f($, {
                          size: "14"
                        }, {
                          default: m(function() {
                            return H(r[11] || (r[11] = [F("lingcunweiDWG", -1)]));
                          }),
                          _: 1
                        })];
                      }),
                      _: 1
                    }, 16, ["color", "disabled", "loading", "onClick"])];
                  }),
                  _: 2
                }, 1032, ["text"])]), E("div", Nr, [f(re, {
                  text: d(i)("3746"),
                  location: "top"
                }, {
                  activator: m(function(t) {
                    var u = t.props;
                    return [f(ae, _({
                      ref_for: !0
                    }, u, {
                      icon: "",
                      variant: "outlined",
                      color: "info",
                      class: "jump-btn",
                      onClick: function(p) {
                        return Be(n);
                      }
                    }), {
                      default: m(function() {
                        return [f($, {
                          size: "14"
                        }, {
                          default: m(function() {
                            return H(r[12] || (r[12] = [F("chuangkousuofang", -1)]));
                          }),
                          _: 1
                        })];
                      }),
                      _: 1
                    }, 16, ["onClick"])];
                  }),
                  _: 2
                }, 1032, ["text"])])], 12, Tr), e.fileName ? (D(), G("div", Ur, W(e.fileName), 1)) : ge("", !0)], 2);
              }), 128)), E("div", zr, [f(re, {
                text: d(i)("3602"),
                location: "top"
              }, {
                activator: m(function(e) {
                  var n = e.props;
                  return [f(ae, _({
                    class: "add-btn"
                  }, n, {
                    variant: "outlined",
                    color: "primary",
                    onClick: Ye
                  }), {
                    default: m(function() {
                      return [f($, {
                        size: "36"
                      }, {
                        default: m(function() {
                          return H(r[13] || (r[13] = [F("class:iconfont plus", -1)]));
                        }),
                        _: 1
                      })];
                    }),
                    _: 1
                  }, 16)];
                }),
                _: 1
              }, 8, ["text"])])])), [[a, V.value]])])];
            }),
            _: 1
          }, 8, ["title"])];
        }),
        _: 1
      }, 8, ["title", "modelValue"]);
    };
  }
}), Or = /* @__PURE__ */ tr(Br, [["__scopeId", "data-v-f1a2b3f7"]]);
export {
  Or as default
};
