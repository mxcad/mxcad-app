import { d as v, f as _, m as i, o as l, w as s, l as t, a as u, t as a, G as r, s as w, q as V, Q as h } from "./vue.js";
import { U as d, V as g, W as x, X as C, R as D } from "./lib.js";
import { M as B } from "./mxcad.js";
import { D as k, C as N, i as S } from "./vuetify.js";
var b = {
  class: "px-3"
}, y = {
  class: "title"
}, L = {
  class: "info mt-3"
}, M = {
  class: "version-info mt-2"
}, R = {
  class: "url"
};
const G = /* @__PURE__ */ v({
  __name: "index",
  setup: function(T) {
    var f = d.showDialog, n = d.isShow, p = [
      // {
      //   name: "检查更新",
      //   fun: () => {
      //     isElectron() && MxElectronAPI.checkForUpdates()
      //   }
      // },
      {
        name: "确定",
        fun: function() {
          f(!1);
        },
        primary: !0
      }
    ], m = _("");
    return function(e, o) {
      return l(), i(C, {
        title: e.t("207"),
        modelValue: r(n),
        "onUpdate:modelValue": o[0] || (o[0] = function(c) {
          return h(n) ? n.value = c : null;
        }),
        "max-width": "320",
        footerBtnList: p
      }, {
        default: s(function() {
          return [t("div", b, [u(k, {
            class: "mt-4"
          }, {
            default: s(function() {
              return [u(N, null, {
                default: s(function() {
                  return [t("p", y, a(e.t("1897")) + " " + a(r(g)()), 1), t("p", L, a(e.t("1898")), 1), t("p", M, [t("p", null, a(e.t("1899")) + ":" + a(r(B).App.GetVersionDateString()), 1)])];
                }),
                _: 1
              })];
            }),
            _: 1
          }), t("div", R, [t("p", null, [V(a(e.t("1900")) + ": ", 1), o[1] || (o[1] = t("a", {
            href: "https://www.mxdraw3d.com/",
            target: "_blank"
          }, "https://www.mxdraw3d.com", -1))]), r(x)() ? (l(), i(S, {
            key: 0,
            "model-value": m.value
          }, {
            prepend: s(function() {
              return [t("div", null, a(e.t("1901")) + ":", 1)];
            }),
            _: 1
          }, 8, ["model-value"])) : w("", !0)])])];
        }),
        _: 1
      }, 8, ["title", "modelValue"]);
    };
  }
}), F = /* @__PURE__ */ D(G, [["__scopeId", "data-v-8c98b70b"]]);
export {
  F as default
};
