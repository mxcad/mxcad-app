import { d as p, f as v, m as u, o as l, w as s, l as V, c as h, F as _, b as g, q as x, t as w, Q as B, G as C } from "./vue.js";
import { a_ as t, X as D } from "./lib.js";
import { i as U } from "./vuetify.js";
var k = {
  class: "pa-4"
};
const R = /* @__PURE__ */ p({
  __name: "index",
  setup: function(L) {
    var n = t.isShow, i = t.showDialog, o = v([]);
    t.onReveal(function(e) {
      e && (o.value = e);
    });
    var f = function() {
      t.confirm(o.value), n.value = !1;
    }, d = function() {
      i(!1);
    }, m = [{
      name: "取消",
      fun: d
    }, {
      name: "确认",
      primary: !0,
      fun: f
    }];
    return function(e, r) {
      return l(), u(D, {
        title: e.t("4318"),
        footerBtnList: m,
        modelValue: C(n),
        "onUpdate:modelValue": r[0] || (r[0] = function(a) {
          return B(n) ? n.value = a : null;
        }),
        "max-width": 400
      }, {
        default: s(function() {
          return [V("div", k, [(l(!0), h(_, null, g(o.value, function(a) {
            return l(), u(U, {
              modelValue: a.tag,
              "onUpdate:modelValue": function(c) {
                return a.tag = c;
              },
              class: "mt-2"
            }, {
              prepend: s(function() {
                return [x(w(a.prompt) + ": ", 1)];
              }),
              _: 2
            }, 1032, ["modelValue", "onUpdate:modelValue"]);
          }), 256))])];
        }),
        _: 1
      }, 8, ["title", "modelValue"]);
    };
  }
});
export {
  R as default
};
