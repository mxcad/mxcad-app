import { d as v, m as w, o as g, w as h, l as V, a as x, G as s, Q as u } from "./vue.js";
import { ab as i, ac as _, ad as b, X as B, ae as m } from "./lib.js";
var C = {
  class: "px-1"
};
const M = /* @__PURE__ */ v({
  __name: "index",
  setup: function(S) {
    var a = i.isShow, r = i.showDialog, e = b(), d = e.items, f = e.color, t = e.tab, c = e.method, p = [{
      name: "确定",
      fun: function() {
        m && m(f.value, c.value), r(!1);
      },
      primary: !0
    }, {
      name: "取消",
      fun: function() {
        return r(!1);
      }
    }];
    return function(l, o) {
      return g(), w(B, {
        modelValue: s(a),
        "onUpdate:modelValue": o[1] || (o[1] = function(n) {
          return u(a) ? a.value = n : null;
        }),
        footerBtnList: p,
        "max-width": "580",
        title: l.t("1949")
      }, {
        default: h(function() {
          return [V("div", C, [x(_, {
            modelValue: s(t),
            "onUpdate:modelValue": o[0] || (o[0] = function(n) {
              return u(t) ? t.value = n : null;
            }),
            items: s(d),
            "tabs-props": {
              grow: !0
            },
            height: 386
          }, null, 8, ["modelValue", "items"])])];
        }),
        _: 1
      }, 8, ["modelValue", "title"]);
    };
  }
});
export {
  M as default
};
