import { bY as I, t as d, X as R, _ as c, a as i, bZ as W, b_ as X } from "./lib.js";
import { d as j, f as m, m as G, o as H, w as v, l as p, t as w, G as o, a as b, q as D, Q as L } from "./vue.js";
import { F as P, M as Q, g as Y } from "./mxcad.js";
import { i as y, j as Z } from "./vuetify.js";
var z = {
  class: "d-flex flex-column"
}, J = {
  class: "d-flex align-center justify-space-between mt-1"
}, K = {
  for: "exportTableInputId",
  class: "d-flex align-center"
}, O = {
  class: "d-flex justify-space-between mt-1"
}, $ = {
  class: "mt-1"
}, _ = {
  class: "d-flex align-center mt-1"
};
const ue = /* @__PURE__ */ j({
  __name: "index",
  setup: function(re) {
    var U = I.isShow, x = I.showDialog, V = m(4), F = m(4), B = m(50), C = m(20), g = m(""), h = m(!1), N = /* @__PURE__ */ function() {
      var f = c(/* @__PURE__ */ i.mark(function r() {
        var e, n;
        return i.wrap(function(a) {
          for (; ; ) switch (a.prev = a.next) {
            case 0:
              try {
                e = new P(), e.colWidth = B.value, e.rowHeight = C.value, n = S(F.value + (h.value ? 1 : 0), V.value), h.value && g.value && (n[0][0] = g.value, e.setMergeCells([{
                  row: 0,
                  col: 0,
                  rowspan: 1,
                  colspan: V.value
                }])), e.setFromArray(n), requestAnimationFrame(/* @__PURE__ */ c(/* @__PURE__ */ i.mark(function t() {
                  return i.wrap(function(s) {
                    for (; ; ) switch (s.prev = s.next) {
                      case 0:
                        return s.next = 1, M(e);
                      case 1:
                      case "end":
                        return s.stop();
                    }
                  }, t);
                })));
              } catch (t) {
                console.error("创建表格失败:", t);
              }
            case 1:
            case "end":
              return a.stop();
          }
        }, r);
      }));
      return function() {
        return f.apply(this, arguments);
      };
    }(), E = /* @__PURE__ */ function() {
      var f = c(/* @__PURE__ */ i.mark(function r(e) {
        var n, a, t, s, u, T;
        return i.wrap(function(l) {
          for (; ; ) switch (l.prev = l.next) {
            case 0:
              if (n = e.target, !(!n.files || n.files.length === 0)) {
                l.next = 1;
                break;
              }
              return l.abrupt("return");
            case 1:
              return a = n.files[0], l.prev = 2, l.next = 3, q(a);
            case 3:
              return t = l.sent, l.next = 4, W.readFromArrayBuffer(t);
            case 4:
              s = l.sent, u = new P(), u.setFromWorkbook(s), x(!1), requestAnimationFrame(/* @__PURE__ */ c(/* @__PURE__ */ i.mark(function k() {
                return i.wrap(function(A) {
                  for (; ; ) switch (A.prev = A.next) {
                    case 0:
                      return A.next = 1, M(u);
                    case 1:
                    case "end":
                      return A.stop();
                  }
                }, k);
              }))), l.next = 6;
              break;
            case 5:
              l.prev = 5, T = l.catch(2), console.error("导入表格失败:", T);
            case 6:
              return l.prev = 6, n.value = "", l.finish(6);
            case 7:
            case "end":
              return l.stop();
          }
        }, r, null, [[2, 5, 6, 7]]);
      }));
      return function(e) {
        return f.apply(this, arguments);
      };
    }(), S = function(r, e) {
      for (var n = [], a = 0; a < r; a++) {
        for (var t = [], s = 0; s < e; s++)
          t.push("");
        n.push(t);
      }
      return n;
    }, q = function(r) {
      return new Promise(function(e, n) {
        var a = new FileReader();
        a.onload = function() {
          return e(a.result);
        }, a.onerror = n, a.readAsArrayBuffer(r);
      });
    }, M = /* @__PURE__ */ function() {
      var f = c(/* @__PURE__ */ i.mark(function r(e) {
        var n, a, t, s;
        return i.wrap(function(u) {
          for (; ; ) switch (u.prev = u.next) {
            case 0:
              return u.prev = 0, n = Q.getCurrentMxCAD(), a = new Y(), a.setMessage(`
` + d("3858")), a.setUserDraw(function(T, l) {
                var k = e.clone();
                k.position = T, l.drawMcDbEntity(k);
              }), u.next = 1, a.go();
            case 1:
              if (t = u.sent, t) {
                u.next = 2;
                break;
              }
              return u.abrupt("return");
            case 2:
              e.position = t, e.styleName = X.currentName, n.drawEntity(e), n.updateDisplay(), console.log("表格插入成功!"), u.next = 4;
              break;
            case 3:
              u.prev = 3, s = u.catch(0), console.error("插入表格失败:", s);
            case 4:
            case "end":
              return u.stop();
          }
        }, r, null, [[0, 3]]);
      }));
      return function(e) {
        return f.apply(this, arguments);
      };
    }();
    return function(f, r) {
      return H(), G(R, {
        title: o(d)("228"),
        "max-width": "500",
        modelValue: o(U),
        "onUpdate:modelValue": r[6] || (r[6] = function(e) {
          return L(U) ? U.value = e : null;
        }),
        footerBtnList: [{
          name: o(d)("1829"),
          fun: function() {
            var e = c(/* @__PURE__ */ i.mark(function a() {
              return i.wrap(function(t) {
                for (; ; ) switch (t.prev = t.next) {
                  case 0:
                    return t.next = 1, N();
                  case 1:
                    o(x)(!1);
                  case 2:
                  case "end":
                    return t.stop();
                }
              }, a);
            }));
            function n() {
              return e.apply(this, arguments);
            }
            return n;
          }(),
          primary: !0
        }, {
          name: o(d)("2006"),
          fun: function() {
            return o(x)(!1);
          }
        }]
      }, {
        default: v(function() {
          return [p("div", z, [p("div", J, [p("label", K, [p("div", null, w(o(d)("2111")) + ":", 1), p("input", {
            id: "exportTableInputId",
            class: "mb-1",
            accept: ".xls,.xlsx,.xlsm,.csv,.xlsb",
            type: "file",
            onChange: E
          }, null, 32)])]), p("div", O, [p("div", null, [b(y, {
            modelValue: F.value,
            "onUpdate:modelValue": r[0] || (r[0] = function(e) {
              return F.value = e;
            }),
            type: "number",
            class: "pa-0"
          }, {
            prepend: v(function() {
              return [D(w(o(d)("2112")) + ":", 1)];
            }),
            _: 1
          }, 8, ["modelValue"]), b(y, {
            modelValue: V.value,
            "onUpdate:modelValue": r[1] || (r[1] = function(e) {
              return V.value = e;
            }),
            type: "number",
            class: "pa-0 mt-1"
          }, {
            prepend: v(function() {
              return [D(w(o(d)("2113")) + ":", 1)];
            }),
            _: 1
          }, 8, ["modelValue"])]), p("div", $, [b(y, {
            modelValue: C.value,
            "onUpdate:modelValue": r[2] || (r[2] = function(e) {
              return C.value = e;
            }),
            type: "number",
            class: "pa-0",
            density: "compact",
            "hide-details": ""
          }, {
            prepend: v(function() {
              return [D(w(o(d)("2114")) + ":", 1)];
            }),
            _: 1
          }, 8, ["modelValue"]), b(y, {
            modelValue: B.value,
            "onUpdate:modelValue": r[3] || (r[3] = function(e) {
              return B.value = e;
            }),
            type: "number",
            class: "pa-0 mt-1",
            density: "compact",
            "hide-details": ""
          }, {
            prepend: v(function() {
              return [D(w(o(d)("2115")) + ":", 1)];
            }),
            _: 1
          }, 8, ["modelValue"])])]), p("div", _, [b(Z, {
            modelValue: h.value,
            "onUpdate:modelValue": r[4] || (r[4] = function(e) {
              return h.value = e;
            }),
            "hide-details": "",
            class: "ma-0 pa-0"
          }, {
            label: v(function() {
              return [p("span", null, w(o(d)("2116")) + ":", 1)];
            }),
            _: 1
          }, 8, ["modelValue"]), b(y, {
            modelValue: g.value,
            "onUpdate:modelValue": r[5] || (r[5] = function(e) {
              return g.value = e;
            }),
            class: "ml-2",
            disabled: !h.value,
            "hide-details": "",
            density: "compact"
          }, null, 8, ["modelValue", "disabled"])])])];
        }),
        _: 1
      }, 8, ["title", "modelValue", "footerBtnList"]);
    };
  }
});
export {
  ue as default
};
