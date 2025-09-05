import { c4 as g, z as W, x as y, c5 as X, c6 as A, t as S, a0 as H, a6 as M, X as Y, _ as Z, a as E } from "./lib.js";
import { d as I, f as c, g as B, i as k, a7 as ee, m as x, o as h, w as v, l as ae, A as te, a as f, ae as re, c as le, F as ne, b as ue, q as R, t as F, G as J, Q as oe } from "./vue.js";
import { s as se } from "./pinia.js";
import { h as ie, d as fe } from "./mxcad.js";
import { i as ce, j as O, k as ve, d as me, a2 as de } from "./vuetify.js";
import { b as ye } from "./@vueuse/core.js";
var pe = {
  class: "d-flex algin-center"
};
const ke = /* @__PURE__ */ I({
  __name: "index",
  setup: function(he) {
    var p = g.isShow, m = W(), T = m.setValue, D = m.stringifyJSON, U = m.remove, K = m.setLayerList, G = se(m), V = G.list, s = c(!1), i = B(function() {
      var t = V.value.filter(function(e) {
        return e.name;
      }).map(function(e) {
        var r = e.name;
        return r;
      });
      return t;
    }), l = c(y(i.value)), L, w = c(!0);
    k(p, function(t) {
      t ? L = X() : L && w.value && A(L);
    }), k(l, ye(function(t) {
      V.value.forEach(function(e, r) {
        T("visible", t.includes(e.name), r);
      }), A(D());
    }, 100));
    var d = c(""), b = c(!1), j = /* @__PURE__ */ function() {
      var t = Z(/* @__PURE__ */ E.mark(function e() {
        var r, a;
        return E.wrap(function(n) {
          for (; ; ) switch (n.prev = n.next) {
            case 0:
              return g.showDialog(!1), n.next = 1, fe.userSelect(S("选择对象"));
            case 1:
              r = n.sent, a = /* @__PURE__ */ new Set(), r.forEach(function(u) {
                var o = u.getMcDbEntity();
                o && a.add(o.layer);
              }), l.value = Array.from(a), g.showDialog(!0);
            case 2:
            case "end":
              return n.stop();
          }
        }, e);
      }));
      return function() {
        return t.apply(this, arguments);
      };
    }();
    k(d, function(t) {
      t === "" && (b.value = !1, s.value = !1);
    });
    var $ = function() {
      if (d.value === "") {
        l.value = [];
        return;
      }
      b.value = !0, s.value = !0, l.value = i.value.filter(function(e) {
        return e.toLocaleLowerCase() === d.value.toLocaleLowerCase();
      });
    }, _ = c([]), q = function(e) {
      var r = e(_.value.map(function(u) {
        return u.$el;
      }), function(u, o) {
        return o;
      }), a = r.map;
      if (a.length !== 0) {
        var n = s.value ? l.value : i.value;
        l.value = a.map(function(u) {
          return n[u];
        });
      }
    }, z = function(e, r, a) {
      if (e.ctrlKey) {
        var n = l.value.indexOf(r);
        n === -1 ? l.value = [].concat(y(l.value), [r]) : l.value = l.value.filter(function(C) {
          return C !== r;
        });
      } else if (e.shiftKey) {
        var u = l.value.map(function(C) {
          return i.value.indexOf(C);
        }), o = Math.min.apply(Math, y(u)), N = Math.max.apply(Math, y(u));
        o > a ? o = a : N = a, l.value = i.value.slice(o, N + 1);
      } else
        l.value = [r];
    }, P = B(function() {
      return "".concat(S("图层漫游"), " - ").concat(S("图层数"), ":") + i.value.length;
    }), Q = function() {
      var e = new ie(), r = /* @__PURE__ */ new Set();
      e.allSelect(), e.forEach(function(n) {
        var u = n.getMcDbEntity();
        u && r.add(u.layer);
      });
      var a = Array.from(r);
      U(V.value.filter(function(n) {
        var u = n.name;
        return !a.includes(u);
      }), "this"), K(D());
    };
    return function(t, e) {
      var r = ee("box-selection");
      return h(), x(Y, {
        maxWidth: "400px",
        ref: "layerDialog",
        modelValue: J(p),
        "onUpdate:modelValue": e[4] || (e[4] = function(a) {
          return oe(p) ? p.value = a : null;
        }),
        title: P.value
      }, {
        actions: v(function() {
          return [f(de, {
            class: "mx-1 mt-0 mb-1 py-0 px-2 bg-dialog-card-text d-flex justify-end"
          }, {
            default: v(function() {
              return [f(O, {
                class: "mr-5",
                label: t.t("2149"),
                modelValue: w.value,
                "onUpdate:modelValue": e[2] || (e[2] = function(a) {
                  return w.value = a;
                })
              }, null, 8, ["label", "modelValue"]), f(M, {
                onClick: Q
              }, {
                default: v(function() {
                  return [R(F(t.t("2150")), 1)];
                }),
                _: 1
              }), f(M, {
                onClick: e[3] || (e[3] = function(a) {
                  return J(g).showDialog(!1);
                })
              }, {
                default: v(function() {
                  return [R(F(t.t("2006")), 1)];
                }),
                _: 1
              })];
            }),
            _: 1
          })];
        }),
        default: v(function() {
          return [ae("div", pe, [f(H, {
            onClick: j
          }), f(ce, {
            modelValue: d.value,
            "onUpdate:modelValue": e[0] || (e[0] = function(a) {
              return d.value = a;
            }),
            onKeydown: re($, ["enter"])
          }, null, 8, ["modelValue"]), f(O, {
            label: t.t("2148"),
            modelValue: s.value,
            "onUpdate:modelValue": e[1] || (e[1] = function(a) {
              return s.value = a;
            }),
            disabled: !b.value
          }, null, 8, ["label", "modelValue", "disabled"])]), te((h(), x(ve, {
            density: "compact",
            color: "primary",
            style: {
              height: "300px"
            }
          }, {
            default: v(function() {
              return [(h(!0), le(ne, null, ue(s.value ? y(l.value) : i.value, function(a, n) {
                return h(), x(me, {
                  class: "ma-0",
                  title: a,
                  ref_for: !0,
                  ref_key: "refItems",
                  ref: _,
                  key: n,
                  onClick: function(o) {
                    return z(o, a, n);
                  },
                  active: s.value ? s.value : l.value.includes(a)
                }, null, 8, ["title", "onClick", "active"]);
              }), 128))];
            }),
            _: 1
          })), [[r, q]])];
        }),
        _: 1
      }, 8, ["modelValue", "title"]);
    };
  }
});
export {
  ke as default
};
