import { z as D, X as R, x as c } from "./lib.js";
import { d as M, f as v, g as F, m as y, o as m, w as _, l as T, a as L, c as b, F as K, b as N, Q as U, G as z } from "./vue.js";
import { s as A } from "./pinia.js";
import { u as E } from "./hooks3.js";
import { i as G, k as O, d as Q } from "./vuetify.js";
var W = {
  class: "d-flex algin-center"
};
const Y = /* @__PURE__ */ M({
  __name: "index",
  setup: function(j) {
    var V = E(), n = V.dialog, s = n.isShow, p = v(!1);
    n.onReveal(function(t) {
      p.value = !!t.isMultiple;
    });
    var g = D(), k = A(g), C = k.list, l = v([]), u = F(function() {
      var t = C.value.filter(function(e) {
        return e.name;
      }).map(function(e) {
        var a = e.name;
        return a;
      });
      return t;
    }), i = v(""), x = function() {
      i.value === "" ? l.value = [] : l.value = [u.value.findIndex(function(e) {
        return e.toLocaleLowerCase() === i.value.toLocaleLowerCase();
      })];
    }, w = [{
      name: "确定",
      fun: function() {
        n.confirm(l.value.map(function(e) {
          return u.value[e];
        }));
      },
      primary: !0
    }, {
      name: "关闭",
      fun: function() {
        return n.showDialog(!1);
      }
    }], S = function(e, a) {
      if (p.value) {
        if (e.ctrlKey) {
          var r = l.value.indexOf(a);
          r === -1 ? l.value = [].concat(c(l.value), [a]) : l.value = l.value.filter(function(h) {
            return h !== a;
          });
        } else if (e.shiftKey) {
          var f = l.value, o = Math.min.apply(Math, c(f)), d = Math.max.apply(Math, c(f));
          o > a ? o = a : d = a, l.value = u.value.map(function(h, B) {
            return B;
          }).slice(o, d + 1);
        }
      } else
        l.value = [a];
    };
    return function(t, e) {
      return m(), y(R, {
        maxWidth: "400px",
        ref: "layerDialog",
        modelValue: z(s),
        "onUpdate:modelValue": e[1] || (e[1] = function(a) {
          return U(s) ? s.value = a : null;
        }),
        title: "选择图层",
        footerBtnList: w
      }, {
        default: _(function() {
          return [T("div", W, [L(G, {
            placeholder: t.t("2082"),
            modelValue: i.value,
            "onUpdate:modelValue": [e[0] || (e[0] = function(a) {
              return i.value = a;
            }), x]
          }, null, 8, ["placeholder", "modelValue"])]), L(O, {
            density: "compact",
            color: "primary",
            style: {
              height: "300px"
            }
          }, {
            default: _(function() {
              return [(m(!0), b(K, null, N(u.value, function(a, r) {
                return m(), y(Q, {
                  class: "ma-0",
                  title: a,
                  ref_for: !0,
                  ref: "refItems",
                  key: r,
                  onClick: function(o) {
                    return S(o, r);
                  },
                  active: l.value.includes(r)
                }, null, 8, ["title", "onClick", "active"]);
              }), 128))];
            }),
            _: 1
          })];
        }),
        _: 1
      }, 8, ["modelValue"]);
    };
  }
});
export {
  Y as default
};
