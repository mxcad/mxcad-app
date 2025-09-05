import { d, m as p, o as c, w as g, l as V, a as v, Q as u, G as o } from "./vue.js";
import { aO as w, ac as x, aP as s, aQ as t, X as _, aR as r } from "./lib.js";
var D = {
  class: "px-3"
};
const k = /* @__PURE__ */ d({
  __name: "index",
  setup: function(h) {
    var i = w(t), l = i.items, f = i.define, m = [{
      name: "确定",
      fun: function() {
        f.value(), r(!1);
      },
      primary: !0
    }, {
      name: "关闭",
      fun: function() {
        return r(!1);
      }
    }];
    return function(a, e) {
      return c(), p(_, {
        title: a.t("1985"),
        modelValue: o(t),
        "onUpdate:modelValue": e[1] || (e[1] = function(n) {
          return u(t) ? t.value = n : null;
        }),
        footerBtnList: m,
        "max-width": "600"
      }, {
        default: g(function() {
          return [V("div", D, [v(x, {
            items: o(l),
            modelValue: o(s),
            "onUpdate:modelValue": e[0] || (e[0] = function(n) {
              return u(s) ? s.value = n : null;
            }),
            height: 312,
            tabsProps: {
              grow: !0
            }
          }, null, 8, ["items", "modelValue"])])];
        }),
        _: 1
      }, 8, ["title", "modelValue"]);
    };
  }
});
export {
  k as default
};
