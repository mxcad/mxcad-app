import { bz as v, bA as V, bB as u, Z as l, bC as r, X as D, bD as b, bE as k, R as S } from "./lib.js";
import { d as w, i as z, m as B, o as f, w as t, l as c, a as o, c as h, F as C, b as P, G as s, p as E, q as d, t as m, Q as _ } from "./vue.js";
import { b as R, i as I, Q as M, S as x } from "./vuetify.js";
var F = {
  class: "px-3"
}, L = {
  class: "d-flex flex-wrap justify-center"
}, N = ["onClick"], U = {
  class: "d-flex flex-column"
};
const Z = /* @__PURE__ */ w({
  __name: "index",
  setup: function(G) {
    var i = v.isShow, p = v.showDialog, y = [{
      name: "确定",
      fun: function() {
        k(), p(!1);
      },
      primary: !0
    }, {
      name: "关闭",
      fun: function() {
        p(!1);
      }
    }], g = ["xiaodian", "", "shizi", "cha", "daunshuxian", "yuanshangyidian", "yuan", "yuanzhonshizi", "yuanzhoncha", "yuanzhonbanshuxian", "fangkuangdain", "fangkuang", "shizikuang1", "fangkuangchaocha", "fangkuangyishangshuxian", "a-1", "a-2", "a-3", "a-4", "a-5"].map(function(a, e) {
      return {
        icon: a,
        value: b[e]
      };
    });
    return z(i, function(a) {
      a && V();
    }), function(a, e) {
      return f(), B(D, {
        title: a.t("222"),
        "max-width": "240",
        modelValue: s(i),
        "onUpdate:modelValue": e[2] || (e[2] = function(n) {
          return _(i) ? i.value = n : null;
        }),
        footerBtnList: y
      }, {
        default: t(function() {
          return [c("div", F, [c("div", L, [(f(!0), h(C, null, P(s(g), function(n) {
            return f(), h("div", {
              class: E(["mx-1 mt-2 box-point-style", n.value === s(u).PDMODE ? "active" : ""]),
              onClick: function(Q) {
                return s(u).PDMODE = n.value;
              }
            }, [o(R, {
              size: "20px",
              icon: "class:iconfont " + n.icon
            }, null, 8, ["icon"])], 10, N);
          }), 256))]), o(I, {
            class: "mt-2 ml-1 w-75",
            type: "number",
            modelValue: s(u).PDSIZE,
            "onUpdate:modelValue": e[0] || (e[0] = function(n) {
              return s(u).PDSIZE = n;
            })
          }, {
            prepend: t(function() {
              return [o(l, {
                class: "",
                "key-name": "S"
              }, {
                default: t(function() {
                  return [d(m(a.t("2049")), 1)];
                }),
                _: 1
              })];
            }),
            _: 1
          }, 8, ["modelValue"]), o(M, {
            column: "",
            class: "mt-2",
            modelValue: s(r),
            "onUpdate:modelValue": e[1] || (e[1] = function(n) {
              return _(r) ? r.value = n : null;
            })
          }, {
            default: t(function() {
              return [c("div", U, [o(x, {
                value: !0,
                class: "mt-1"
              }, {
                label: t(function() {
                  return [o(l, {
                    class: "",
                    "key-name": "R"
                  }, {
                    default: t(function() {
                      return [d(m(a.t("2050")), 1)];
                    }),
                    _: 1
                  })];
                }),
                _: 1
              }), o(x, {
                value: !1,
                class: "mt-1"
              }, {
                label: t(function() {
                  return [o(l, {
                    class: "",
                    "key-name": "A"
                  }, {
                    default: t(function() {
                      return [d(m(a.t("2051")), 1)];
                    }),
                    _: 1
                  })];
                }),
                _: 1
              })])];
            }),
            _: 1
          }, 8, ["modelValue"])])];
        }),
        _: 1
      }, 8, ["title", "modelValue"]);
    };
  }
}), q = /* @__PURE__ */ S(Z, [["__scopeId", "data-v-0cb1d074"]]);
export {
  q as default
};
