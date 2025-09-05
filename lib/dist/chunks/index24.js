import { d as k, j as _, m as a, o, w as i, l as T, c as v, G as t, F as w, q as r, t as u, C, s as f, Q as D } from "./vue.js";
import { H as V, a6 as y, X as B } from "./lib.js";
import { s as S } from "./pinia.js";
var h = {
  class: "d-flex justify-center algin-center py-7"
}, j = {
  key: 0,
  class: "d-flex justify-space-evenly py-3"
};
const $ = /* @__PURE__ */ k({
  __name: "index",
  setup: function(N) {
    var c = V(), d = S(c), e = d.options, s = d.isShow, p = c.showDialog, x = function() {
      e.value.define && e.value.define(), p(!1);
    }, g = function() {
      e.value.cancel && e.value.cancel(), p(!1);
    };
    return _(function() {
      e.value.mounted && e.value.mounted();
    }), function(m, n) {
      return o(), a(B, {
        title: t(e).title,
        modelValue: t(s),
        "onUpdate:modelValue": n[2] || (n[2] = function(l) {
          return D(s) ? s.value = l : null;
        }),
        "max-width": "250"
      }, {
        actions: i(function() {
          return [t(e).defineTitle || t(e).cancelTitle ? (o(), v("div", j, [typeof t(e).defineTitle == "string" ? (o(), a(y, {
            key: 0,
            isAction: "",
            primary: "",
            onClick: n[0] || (n[0] = function(l) {
              return x();
            })
          }, {
            default: i(function() {
              return [r(u(t(e).defineTitle), 1)];
            }),
            _: 1
          })) : f("", !0), typeof t(e).cancelTitle == "string" ? (o(), a(y, {
            key: 1,
            isAction: "",
            onClick: n[1] || (n[1] = function(l) {
              return g();
            })
          }, {
            default: i(function() {
              return [r(u(t(e).cancelTitle), 1)];
            }),
            _: 1
          })) : f("", !0)])) : f("", !0)];
        }),
        default: i(function() {
          return [T("div", h, [typeof t(e).text == "string" ? (o(), v(w, {
            key: 0
          }, [r(u(t(e).text), 1)], 64)) : (o(), a(C(t(e).text), {
            key: 1
          }))])];
        }),
        _: 1
      }, 8, ["title", "modelValue"]);
    };
  }
});
export {
  $ as default
};
