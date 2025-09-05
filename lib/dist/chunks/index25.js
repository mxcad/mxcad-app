import { aL as tt, bF as X, d as ze, _ as we, w as z, h as le, t as L, a as J, e as at, c as rt, i as nt, X as Xe, $ as Be, Z as He, a6 as Ce, aT as Ve } from "./lib.js";
import { f as Q, i as it, d as lt, c as Te, o as Ue, a as m, w as v, l as b, t as S, F as Ye, b as ot, G as f, A as ut, ac as st, q as B, Q as q, x as We } from "./vue.js";
import { M as Z, g as Le, p as Oe, o as M } from "./mxcad.js";
import { d as $e, M as Ee, r as dt, t as pt, y as ct } from "./mxdraw.js";
import { p as vt } from "./print-js.js";
import { i as ft } from "./identificationFrame.js";
import { _ as mt, V as Ie, D as gt, C as Ne, Q as ht, S as Ge, i as pe, c as Je, d as Qe } from "./vuetify.js";
function qe(oe, P, u, T) {
  var A = Math.abs(T.x - u.x), F = Math.abs(T.y - u.y), O;
  return oe / A < P / F ? O = A / oe : O = F / P, O;
}
function wt(oe, P, u, T, A) {
  var F = oe * A, O = P * A, H = (u.x + T.x) / 2, k = (u.y + T.y) / 2, ce = new M(H - F / 2, k + O / 2), E = new M(H + F / 2, k - O / 2);
  return [ce, E];
}
var Ct = function() {
  var P = Q(!0), u = Q(0), T = Q(0), A = Q(0), F = Q(0), O = ["A1", "A2", "A3", "A4", "自定义16.55x23.90"], H = Q("A4"), k = function() {
    switch (H.value) {
      case "A1":
        return {
          w: 594,
          h: 841
        };
      case "A2":
        return {
          w: 420,
          h: 594
        };
      case "A3":
        return {
          w: 297,
          h: 420
        };
      case "A4":
        return {
          w: 210,
          h: 297
        };
      case "自定义16.55x23.90":
        return {
          w: 165.5,
          h: 239,
          nw: 130,
          nh: 190
        };
    }
  }, ce = ["横向", "纵向"], E = Q("横向"), Y = Q(1), U = Q(1), te, ae, ue = U.value / Y.value, ye = function() {
    var t = k(), r = t.w, a = t.h, e = U.value / Y.value;
    if (!(Math.abs(e - ue) < 1e-6)) {
      ue = e;
      var l = wt(r, a, te, ae, e), i = ze(l, 2), o = i[0], d = i[1];
      u.value = z((o == null ? void 0 : o.x) || 0, 4), T.value = z((o == null ? void 0 : o.y) || 0, 4), A.value = z((d == null ? void 0 : d.x) || 0, 4), F.value = z((d == null ? void 0 : d.y) || 0, 4), I.pt1 = o, I.pt2 = d, I.w = r, I.h = a;
    }
  }, Se = function() {
    var t = k(), r = t.w, a = t.h, e = qe(r, a, te, ae);
    ue = e, U.value = z(Y.value * e, 4), ye();
  }, ve = [], I, $ = function(t, r) {
    te = t, ae = r;
    var a = k(), e = a.w, l = a.h, i = a.nw, o = a.nh, d = E.value === "横向";
    if (d) {
      var c = e;
      e = l, l = c, c = i, i = o, o = c;
    }
    I && ve.push(I);
    var p = qe(e, l, t, r);
    return ue = p, U.value = z(Y.value * p, 4), I = {
      pt1: t,
      pt2: r,
      w: e,
      h: l,
      size: H.value,
      paperOrientation: E.value,
      printParameterMillimeter: Y.value,
      printParametersCADDrawingUnits: U.value,
      isDrawingBoundary: P.value
    }, u.value = z((t == null ? void 0 : t.x) || 0, 4), T.value = z((t == null ? void 0 : t.y) || 0, 4), A.value = z((r == null ? void 0 : r.x) || 0, 4), F.value = z((r == null ? void 0 : r.y) || 0, 4), I;
  }, fe = function() {
    var t = Z.getCurrentDatabase().currentSpace.getBoundingBox(), r = t.minPt, a = t.maxPt, e = $(r, a);
    return e;
  }, De = function() {
    var t = Z.getCurrentMxCAD().getViewCADCoord(), r = t.pt1, a = t.pt3, e = $(r, a);
    return e;
  }, be = function() {
    typeof P.value == "boolean" && (P.value ? fe() : De());
  }, Pe = function() {
    var t = ve.pop();
    if (!t) return le().error(L("2323"));
    var r = t.pt1, a = t.pt2, e = t.size;
    return I = t, u.value = z((r == null ? void 0 : r.x) || 0, 4), T.value = z((r == null ? void 0 : r.y) || 0, 4), A.value = z((a == null ? void 0 : a.x) || 0, 4), F.value = z((a == null ? void 0 : a.y) || 0, 4), H.value = e, E.value = t.paperOrientation, Y.value = t.printParameterMillimeter, U.value = t.printParametersCADDrawingUnits, P.value = t.isDrawingBoundary, P.value = null, le().success(L("2324"));
  }, Me = /* @__PURE__ */ function() {
    var h = we(/* @__PURE__ */ J.mark(function t() {
      var r, a, e, l;
      return J.wrap(function(i) {
        for (; ; ) switch (i.prev = i.next) {
          case 0:
            return X.isShow.value = !1, r = function() {
              X.isShow.value = !0;
            }, a = new Le(), a.clearLastInputPoint(), a.setMessage(`
` + L("1571") + ":"), a.disableAllTrace(), i.next = 1, a.go();
          case 1:
            if (e = i.sent, e) {
              i.next = 2;
              break;
            }
            return i.abrupt("return", r());
          case 2:
            return a.setMessage(`
` + L("1580") + ":"), a.setUserDraw(function(o, d) {
              if (e) {
                d.setColor(16711680);
                var c = new Oe();
                c.addVertexAt(e), c.addVertexAt(new M(e.x, o.y)), c.addVertexAt(o), c.addVertexAt(new M(o.x, e.y)), c.constantWidth = Ee.screenCoordLong2Doc(2), c.isClosed = !0, d.drawMcDbEntity(c);
                var p = [];
                p.push(e.toVector3()), p.push(new THREE.Vector3(e.x, o.y)), p.push(o.toVector3()), p.push(new THREE.Vector3(o.x, e.y)), d.setColor(12868), d.drawSolid(p, 0.5);
              }
            }), a.setDisableOsnap(!0), a.setDisableOrthoTrace(!0), a.setDynamicInputType($e.kXYCoordInput), i.next = 3, a.go();
          case 3:
            if (l = i.sent, l) {
              i.next = 4;
              break;
            }
            return i.abrupt("return", r());
          case 4:
            $(e, l), P.value = null, X.isShow.value = !0, le().success(L("2325"));
          case 5:
          case "end":
            return i.stop();
        }
      }, t);
    }));
    return function() {
      return h.apply(this, arguments);
    };
  }(), Ae = /* @__PURE__ */ function() {
    var h = we(/* @__PURE__ */ J.mark(function t() {
      var r, a, e, l, i, o, d, c, p, j, D, G;
      return J.wrap(function(V) {
        for (; ; ) switch (V.prev = V.next) {
          case 0:
            return r = function(C, y, x, _) {
              var ee = Math.abs(_.x - x.x), K = Math.abs(_.y - x.y), W;
              ee > K ? W = ee / C : W = K / y;
              var xe = C * W, ke = y * W, Re = new M(x.x + xe, x.y - ke);
              return Re;
            }, X.isShow.value = !1, a = function() {
              X.isShow.value = !0;
            }, e = new Le(), e.clearLastInputPoint(), e.setMessage(`
` + L("2326") + ":"), e.disableAllTrace(), l = k(), i = l.w, o = l.h, d = l.nw, c = l.nh, p = U.value / Y.value, j = function(C) {
              i = i * C, o = o * C, d && (d = d * C), c && (c = c * C);
              var y = E.value === "横向";
              if (y) {
                var x = i;
                i = o, o = x, x = d, d = c, c = x;
              }
            }, j(p), V.next = 1, e.go();
          case 1:
            if (D = V.sent, D) {
              V.next = 2;
              break;
            }
            return V.abrupt("return", a());
          case 2:
            return e.setMessage(`
` + L("2327") + ":"), e.setUserDraw(function(g, C) {
              if (D) {
                C.setColor(16711680), g = r(i, o, D, g);
                var y = new Oe();
                y.addVertexAt(D), y.addVertexAt(new M(D.x, g.y)), y.addVertexAt(g), y.addVertexAt(new M(g.x, D.y)), y.constantWidth = Ee.screenCoordLong2Doc(2), y.isClosed = !0, C.drawMcDbEntity(y);
                var x = [];
                x.push(D.toVector3()), x.push(new THREE.Vector3(D.x, g.y)), x.push(g.toVector3()), x.push(new THREE.Vector3(g.x, D.y)), C.setColor(12868), C.drawSolid(x, 0.5);
              }
            }), e.setDisableOsnap(!0), e.setDisableOrthoTrace(!0), e.setDynamicInputType($e.kXYCoordInput), V.next = 3, e.go();
          case 3:
            if (G = V.sent, G) {
              V.next = 4;
              break;
            }
            return V.abrupt("return", a());
          case 4:
            G = r(i, o, D, G), $(D, G), P.value = null, X.isShow.value = !0, le().success(L("2325"));
          case 5:
          case "end":
            return V.stop();
        }
      }, t);
    }));
    return function() {
      return h.apply(this, arguments);
    };
  }(), me = /* @__PURE__ */ function() {
    var h = we(/* @__PURE__ */ J.mark(function t() {
      var r, a, e, l, i, o, d, c, p, j, D, G;
      return J.wrap(function(V) {
        for (; ; ) switch (V.prev = V.next) {
          case 0:
            return X.isShow.value = !1, r = U.value / Y.value, a = k(), e = a.w, l = a.h, i = a.nw, o = a.nh, d = function(C) {
              e = e * C, l = l * C, i && (i = i * C), o && (o = o * C);
              var y = E.value === "横向";
              if (y) {
                var x = e;
                e = l, l = x, x = i, i = o, o = x;
              }
            }, d(r), c = new Le(), c.clearLastInputPoint(), c.disableAllTrace(), c.setMessage(`
` + L("1579")), c.setKeyWords(""), p = Z.getCurrentMxCAD(), c.setUserDraw(function(g, C) {
              C.setColor(16711680);
              var y = new Oe(), x = g.clone(), _ = new M(g.x, g.y + l), ee = new M(g.x + e, g.y + l), K = new M(g.x + e, g.y);
              y.addVertexAt(x), y.addVertexAt(_), y.addVertexAt(ee), y.addVertexAt(K), y.constantWidth = Ee.screenCoordLong2Doc(2), y.isClosed = !0, C.drawMcDbEntity(y);
              var W = [];
              if (W.push(x.toVector3()), W.push(_.toVector3()), W.push(ee.toVector3()), W.push(K.toVector3()), C.setColor(12868), C.drawSolid(W, 0.5), i && o && i > 0 && o > 0) {
                var xe = g.clone(), ke = new M(g.x, g.y + l), Re = new M(g.x + e, g.y + l), _e = new M(g.x + e, g.y), de = [];
                de.push(xe.toVector3()), de.push(ke.toVector3()), de.push(Re.toVector3()), de.push(_e.toVector3()), de.push(xe.toVector3());
                var je = p.mxdraw.viewCoordLong2Cad(3), et = dt.createDashedLines(de, 16777215, je * 2, je);
                C.drawEntity(et);
              }
            }), V.next = 1, c.go();
          case 1:
            if (j = V.sent, j) {
              V.next = 2;
              break;
            }
            return V.abrupt("return", X.isShow.value = !0);
          case 2:
            D = j.clone(), G = new M(j.x + e, j.y + l), $(D, G), X.isShow.value = !0, P.value = null, le().success(L("2325"));
          case 3:
          case "end":
            return V.stop();
        }
      }, t);
    }));
    return function() {
      return h.apply(this, arguments);
    };
  }(), ge = function(t, r, a, e) {
    var l = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1;
    return new Promise(function(i) {
      var o = Z.getCurrentMxCAD(), d = {
        width: "" + a,
        height: "" + e,
        roate_angle: 0,
        bd_pt1_x: "" + t.x,
        bd_pt1_y: "" + t.y,
        bd_pt2_x: "" + r.x,
        bd_pt2_y: "" + r.y
      };
      o.database.isCurrentModelSpace || (d.layout_name = o.getCurrentLayout(), d.create_clip_block = !1);
      var c = nt(), p = function() {
        c && rt("MxFullScreen");
      };
      {
        var j = at() || {}, D = j.baseUrl, G = D === void 0 ? "" : D, V = j.mxfilepath, g = V === void 0 ? "" : V, C = j.printPdfUrl, y = C === void 0 ? "" : C;
        Z.getCurrentMxCAD().saveFileToUrl(y, function(x, _) {
          try {
            var ee = JSON.parse(_);
            if (ee.ret == "ok") {
              var K = G + g + ee.file;
              if (l)
                return i(K);
              vt(K), p(), le().success(L("2329")), i(K);
            } else
              console.log(_), le().error(L("2328")), i(!1);
          } catch (W) {
            console.log("Mx: sserverResult error"), i(!1);
          }
        }, void 0, JSON.stringify(d));
      }
    });
  }, Fe = function() {
    var t = I || fe(), r = t.pt1, a = t.pt2, e = t.w, l = t.h;
    ge(r, a, e, l), X.isShow.value = !1;
  }, he = function(t, r) {
    var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 16711680, e = new ct();
    return e.pt1 = t.toVector3(), e.pt2 = r.toVector3(), e.setLineWidth(10), e.color = a, e.top(), e;
  }, re = tt(!1, "Mx_batch_PrintDialog"), ne = [], ie = Q([]), n = [], w = /* @__PURE__ */ function() {
    var h = we(/* @__PURE__ */ J.mark(function t() {
      return J.wrap(function(r) {
        for (; ; ) switch (r.prev = r.next) {
          case 0:
            return X.isShow.value = !1, re.isShow.value = !1, r.next = 1, ft();
          case 1:
            n = r.sent, ie.value = n.map(function(a, e) {
              return {
                name: L("2330") + e,
                index: e
              };
            }), ne = n.filter(function(a) {
              return !!a;
            }).map(function(a, e) {
              var l = a.minPt, i = a.maxPt, o = he(l, i), d = Z.getCurrentMxCAD();
              d.getMxDrawObject().addMxEntity(o);
              var c = new M((l.x + i.x) / 2, (l.y + i.y) / 2), p = new pt();
              return p.text = e.toString(), p.position = c.toVector3(), p.color = 16711680, p.height = l.distanceTo(i) * 0.5, d.getMxDrawObject().addMxEntity(p), [p, o];
            }), re.isShow.value = !0;
          case 2:
          case "end":
            return r.stop();
        }
      }, t);
    }));
    return function() {
      return h.apply(this, arguments);
    };
  }();
  function s(h, t) {
    var r = document.createElement("a");
    r.setAttribute("href", h), r.setAttribute("download", t), document.body.appendChild(r), r.click(), document.body.removeChild(r);
  }
  var R = /* @__PURE__ */ function() {
    var h = we(/* @__PURE__ */ J.mark(function t() {
      var r, a, e, l, i, o, d, c;
      return J.wrap(function(p) {
        for (; ; ) switch (p.prev = p.next) {
          case 0:
            r = k(), a = r.w, e = r.h, l = 0;
          case 1:
            if (!(l < n.length)) {
              p.next = 6;
              break;
            }
            if (i = n[l] || {}, o = i.minPt, d = i.maxPt, o) {
              p.next = 2;
              break;
            }
            return p.abrupt("continue", 5);
          case 2:
            if (d) {
              p.next = 3;
              break;
            }
            return p.abrupt("continue", 5);
          case 3:
            return p.next = 4, ge(o, d, a, e, !0);
          case 4:
            c = p.sent, c && s(c, ie.value[l].name);
          case 5:
            l++, p.next = 1;
            break;
          case 6:
            re.isShow.value = !1;
          case 7:
          case "end":
            return p.stop();
        }
      }, t);
    }));
    return function() {
      return h.apply(this, arguments);
    };
  }(), N = function() {
    var t = Z.getCurrentMxCAD();
    ne.forEach(function(r) {
      var a = ze(r, 2), e = a[0], l = a[1];
      t.mxdraw.eraseMxEntity(e.objectId()), t.mxdraw.eraseMxEntity(l.objectId());
    }), ne = [], n = [], ie.value = [], t.updateDisplay();
  };
  it(re.isShow, function(h) {
    h || N();
  });
  var se = function(t) {
    var r = ze(ne[t], 2), a = r[0], e = r[1], l = Z.getCurrentMxCAD();
    l.mxdraw.eraseMxEntity(a.objectId()), l.mxdraw.eraseMxEntity(e.objectId()), l.updateDisplay(), n.splice(t, 1), ne.splice(t, 1), ie.value.splice(t, 1);
  }, Ke = function(t) {
    if (n[t]) {
      var r = n[t], a = r.maxPt, e = r.minPt, l = k(), i = l.w, o = l.h;
      ge(e, a, i, o, !0);
    }
  }, Ze = function(t) {
    if (n[t]) {
      var r = n[t], a = r.maxPt, e = r.minPt, l = Z.getCurrentMxCAD(), i = e.distanceTo(a) * 0.1;
      a = a.clone(), e = e.clone(), e.x -= i, e.y -= i, a.x += i, a.y += i, l.zoomW(e, a);
    }
  };
  return {
    dialog: X,
    isDrawingBoundary: P,
    lowerLeftCornerCoordinateX: u,
    lowerLeftCornerCoordinateY: T,
    upperRightCornerCoordinateX: A,
    upperRightCornerCoordinateY: F,
    sheetSizes: O,
    sheetSize: H,
    paperOrientations: ce,
    paperOrientation: E,
    printParameterMillimeter: Y,
    printParametersCADDrawingUnits: U,
    scopeHistory: ve,
    callLastTimeScopeHistory: Pe,
    callFreeChoiceOfRange: Me,
    callFixedProportionalSelection: Ae,
    callFixedDrawingSizeSelection: me,
    callPrint: Fe,
    updateDrawingBoundary: be,
    updatePrintParameters: ye,
    updateSize: Se,
    universalBatchPrinting: R,
    frameIndexArr: ie,
    removeFrame: se,
    removeFramesRectBoxArr: N,
    frameRecognition: w,
    batchPrintingDialog: re,
    framePrint: Ke,
    positioningFrame: Ze
  };
}, yt = ["onUpdate:modelValue"], xt = {
  class: "d-flex flex-column"
}, Vt = {
  class: "h-100 mt-2"
}, St = {
  class: "d-flex align-center flex-column"
};
const Rt = /* @__PURE__ */ lt({
  __name: "index",
  setup: function(P) {
    var u = Ct(), T = u.dialog, A = u.isDrawingBoundary, F = u.lowerLeftCornerCoordinateX, O = u.lowerLeftCornerCoordinateY, H = u.upperRightCornerCoordinateX, k = u.upperRightCornerCoordinateY, ce = u.sheetSizes, E = u.sheetSize, Y = u.paperOrientations, U = u.paperOrientation, te = u.printParameterMillimeter, ae = u.printParametersCADDrawingUnits, ue = u.callLastTimeScopeHistory, ye = u.callFreeChoiceOfRange, Se = u.callFixedProportionalSelection, ve = u.callFixedDrawingSizeSelection, I = u.callPrint, $ = u.updateDrawingBoundary, fe = u.updatePrintParameters, De = u.updateSize, be = u.universalBatchPrinting, Pe = u.frameIndexArr, Me = u.removeFrame, Ae = u.frameRecognition, me = u.batchPrintingDialog, ge = u.framePrint, Fe = u.positioningFrame, he = T.isShow, re = T.showDialog, ne = [{
      name: "生成打印PDF",
      fun: I,
      primary: !0
    }, {
      name: "取消",
      fun: function() {
        return re(!1);
      }
    }], ie = [{
      name: "批量下载",
      fun: be,
      primary: !0
    }, {
      name: "取消",
      fun: function() {
        return me.showDialog(!1);
      }
    }];
    return function(n, w) {
      return Ue(), Te(Ye, null, [m(Xe, {
        title: n.t("2052"),
        modelValue: f(me).isShow.value,
        "onUpdate:modelValue": w[0] || (w[0] = function(s) {
          return f(me).isShow.value = s;
        }),
        "max-width": "600",
        footerBtnList: ie
      }, {
        default: v(function() {
          return [m(mt, {
            density: "compact",
            "fixed-header": "",
            height: 300,
            class: "attribute_table",
            style: {
              "table-layout": "fixed"
            }
          }, {
            default: v(function() {
              return [b("thead", null, [b("tr", null, [b("th", null, "pdf" + S(n.t("1923")), 1), b("th", null, S(n.t("2053")), 1)])]), b("tbody", null, [(Ue(!0), Te(Ye, null, ot(f(Pe), function(s, R) {
                return Ue(), Te("tr", {
                  key: R
                }, [b("td", null, [ut(b("input", {
                  class: "w-100 h-100",
                  "onUpdate:modelValue": function(se) {
                    return s.name = se;
                  }
                }, null, 8, yt), [[st, s.name]])]), b("td", null, [m(Ie, {
                  onClick: function(se) {
                    return f(Me)(R);
                  }
                }, {
                  default: v(function() {
                    return [B(S(n.t("205")), 1)];
                  }),
                  _: 1
                }, 8, ["onClick"]), m(Ie, {
                  onClick: function(se) {
                    return f(ge)(R);
                  },
                  class: "ml-1"
                }, {
                  default: v(function() {
                    return [B(S(n.t("203")), 1)];
                  }),
                  _: 1
                }, 8, ["onClick"]), m(Ie, {
                  onClick: function(se) {
                    return f(Fe)(R);
                  },
                  class: "ml-1"
                }, {
                  default: v(function() {
                    return [B(S(n.t("2054")), 1)];
                  }),
                  _: 1
                }, 8, ["onClick"])])]);
              }), 128))])];
            }),
            _: 1
          })];
        }),
        _: 1
      }, 8, ["title", "modelValue"]), m(Xe, {
        title: n.t("203"),
        modelValue: f(he),
        "onUpdate:modelValue": w[10] || (w[10] = function(s) {
          return q(he) ? he.value = s : null;
        }),
        "max-width": "600",
        footerBtnList: ne
      }, {
        default: v(function() {
          return [m(gt, {
            align: "stretch"
          }, {
            default: v(function() {
              return [m(Ne, {
                cols: "6",
                "align-self": "start"
              }, {
                default: v(function() {
                  return [m(Be, {
                    title: n.t("2055"),
                    class: "mt-2"
                  }, {
                    default: v(function() {
                      return [m(ht, {
                        modelValue: f(A),
                        "onUpdate:modelValue": [w[1] || (w[1] = function(s) {
                          return q(A) ? A.value = s : null;
                        }), f($)],
                        inline: !1
                      }, {
                        default: v(function() {
                          return [m(Ge, {
                            value: !0,
                            onClick: f($)
                          }, {
                            label: v(function() {
                              return [m(He, {
                                class: "",
                                "key-name": "W"
                              }, {
                                default: v(function() {
                                  return [B(S(n.t("1544") + n.t("2056")), 1)];
                                }),
                                _: 1
                              })];
                            }),
                            _: 1
                          }, 8, ["onClick"]), m(Ge, {
                            class: "mt-1",
                            value: !1,
                            onClick: f($)
                          }, {
                            label: v(function() {
                              return [m(He, {
                                class: "",
                                "key-name": "R"
                              }, {
                                default: v(function() {
                                  return [B(S(n.t("2057") + n.t("1759")), 1)];
                                }),
                                _: 1
                              })];
                            }),
                            _: 1
                          }, 8, ["onClick"])];
                        }),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue"]), b("div", xt, [m(Ce, {
                        class: "mt-2",
                        onClick: f(ue)
                      }, {
                        default: v(function() {
                          return [B(S(n.t("2058") + n.t("183")), 1)];
                        }),
                        _: 1
                      }, 8, ["onClick"]), m(Ce, {
                        class: "mt-1",
                        onClick: f(ye)
                      }, {
                        default: v(function() {
                          return [B(S(n.t("2059") + n.t("1581")), 1)];
                        }),
                        _: 1
                      }, 8, ["onClick"]), m(Ce, {
                        class: "mt-1",
                        onClick: f(Se)
                      }, {
                        default: v(function() {
                          return [B(S(n.t("2060") + n.t("1686") + n.t("1581")), 1)];
                        }),
                        _: 1
                      }, 8, ["onClick"]), m(Ce, {
                        class: "mt-1",
                        onClick: f(ve)
                      }, {
                        default: v(function() {
                          return [B(S(n.t("2060") + n.t("1544") + n.t("2061") + n.t("1581")), 1)];
                        }),
                        _: 1
                      }, 8, ["onClick"]), m(Ce, {
                        class: "mt-1",
                        onClick: f(Ae)
                      }, {
                        default: v(function() {
                          return [B(S(n.t("2062") + " " + n.t("2063")), 1)];
                        }),
                        _: 1
                      }, 8, ["onClick"])]), m(pe, {
                        modelValue: f(F),
                        "onUpdate:modelValue": w[2] || (w[2] = function(s) {
                          return q(F) ? F.value = s : null;
                        }),
                        class: "mt-2",
                        type: "number"
                      }, {
                        prepend: v(function() {
                          return [b("span", null, S(n.t("2064") + n.t("2065") + n.t("2066")) + "X:", 1)];
                        }),
                        _: 1
                      }, 8, ["modelValue"]), m(pe, {
                        modelValue: f(O),
                        "onUpdate:modelValue": w[3] || (w[3] = function(s) {
                          return q(O) ? O.value = s : null;
                        }),
                        class: "mt-1",
                        type: "number"
                      }, {
                        prepend: v(function() {
                          return [b("span", null, S(n.t("2064") + n.t("2065") + n.t("2066")) + "Y:", 1)];
                        }),
                        _: 1
                      }, 8, ["modelValue"]), m(pe, {
                        modelValue: f(H),
                        "onUpdate:modelValue": w[4] || (w[4] = function(s) {
                          return q(H) ? H.value = s : null;
                        }),
                        class: "mt-1",
                        type: "number"
                      }, {
                        prepend: v(function() {
                          return [b("span", null, S(n.t("2067") + n.t("2065") + n.t("2066")) + "X:", 1)];
                        }),
                        _: 1
                      }, 8, ["modelValue"]), m(pe, {
                        modelValue: f(k),
                        "onUpdate:modelValue": w[5] || (w[5] = function(s) {
                          return q(k) ? k.value = s : null;
                        }),
                        class: "mt-1",
                        type: "number"
                      }, {
                        prepend: v(function() {
                          return [b("span", null, S(n.t("2067") + n.t("2065") + n.t("2066")) + "Y:", 1)];
                        }),
                        _: 1
                      }, 8, ["modelValue"])];
                    }),
                    _: 1
                  }, 8, ["title"])];
                }),
                _: 1
              }), m(Ne, {
                cols: "6",
                "align-self": "start"
              }, {
                default: v(function() {
                  return [b("div", Vt, [m(Be, {
                    title: n.t("1544") + n.t("2068")
                  }, {
                    default: v(function() {
                      return [m(Je, {
                        modelValue: f(E),
                        "onUpdate:modelValue": [w[6] || (w[6] = function(s) {
                          return q(E) ? E.value = s : null;
                        }), f(De)],
                        items: f(ce),
                        class: "mr-1 my-2"
                      }, {
                        prepend: v(function() {
                          return [b("span", null, S(n.t("1544") + n.t("2061")) + ":", 1)];
                        }),
                        selection: v(function(s) {
                          var R = s.item;
                          return [B(S(f(Ve)(R.title)), 1)];
                        }),
                        item: v(function(s) {
                          var R = s.item, N = s.props;
                          return [m(Qe, We(N, {
                            title: f(Ve)(R.title)
                          }), null, 16, ["title"])];
                        }),
                        _: 1
                      }, 8, ["modelValue", "items", "onUpdate:modelValue"]), m(Je, {
                        modelValue: f(U),
                        "onUpdate:modelValue": [w[7] || (w[7] = function(s) {
                          return q(U) ? U.value = s : null;
                        }), f($)],
                        items: f(Y),
                        class: "mr-1 my-2"
                      }, {
                        prepend: v(function() {
                          return [b("span", null, S(n.t("1544") + n.t("186")) + ":", 1)];
                        }),
                        selection: v(function(s) {
                          var R = s.item;
                          return [B(S(f(Ve)(R.title)), 1)];
                        }),
                        item: v(function(s) {
                          var R = s.item, N = s.props;
                          return [m(Qe, We(N, {
                            title: f(Ve)(R.title)
                          }), null, 16, ["title"])];
                        }),
                        _: 1
                      }, 8, ["modelValue", "items", "onUpdate:modelValue"])];
                    }),
                    _: 1
                  }, 8, ["title"]), m(Be, {
                    class: "my-4 py-4",
                    title: n.t("203") + n.t("2069")
                  }, {
                    default: v(function() {
                      return [b("div", St, [m(pe, {
                        modelValue: f(te),
                        "onUpdate:modelValue": w[8] || (w[8] = function(s) {
                          return q(te) ? te.value = s : null;
                        }),
                        modelModifiers: {
                          lazy: !0
                        },
                        min: "0",
                        "onUpdate:focused": f(fe),
                        class: "w-75 mr-1",
                        type: "number"
                      }, {
                        append: v(function() {
                          return [B(S(n.t("1779")), 1)];
                        }),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:focused"]), w[11] || (w[11] = b("span", null, "=", -1)), m(pe, {
                        modelValue: f(ae),
                        "onUpdate:modelValue": w[9] || (w[9] = function(s) {
                          return q(ae) ? ae.value = s : null;
                        }),
                        modelModifiers: {
                          lazy: !0
                        },
                        min: "0",
                        "onUpdate:focused": f(fe),
                        class: "w-75 ml-1 mr-1",
                        type: "number"
                      }, {
                        append: v(function() {
                          return [B(S("CAD" + n.t("223") + n.t("2071")), 1)];
                        }),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:focused"])])];
                    }),
                    _: 1
                  }, 8, ["title"])])];
                }),
                _: 1
              })];
            }),
            _: 1
          })];
        }),
        _: 1
      }, 8, ["title", "modelValue"])], 64);
    };
  }
});
export {
  Rt as default
};
