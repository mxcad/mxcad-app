import { $ as r, bh as o, X as z, bi as h, R as _ } from "./lib.js";
import { d as v, f as y, m as V, o as d, w as e, l as s, a as t, c as b, F as g, b as k, t as m, Q as B, G as w } from "./vue.js";
import { D as L, C as f, k as x, d as C, l as D, f as F, j as I, F as R } from "./vuetify.js";
var S = {
  class: "px-3 mt-2"
}, M = {
  class: "d-flex algin-center",
  style: {
    width: "50px"
  }
}, N = {
  class: "ml-7"
}, U = {
  class: "ml-2"
}, j = {
  class: ""
}, A = {
  class: ""
}, E = {
  class: "mt-2"
};
const G = /* @__PURE__ */ v({
  __name: "index",
  setup: function(T) {
    var c = [{
      name: "确定",
      fun: function() {
      },
      primary: !0
    }, {
      name: "取消",
      fun: function() {
        return h(!1);
      }
    }], l = y(0.2), u = [{
      name: "ByLayer",
      size: 0.01
    }, {
      name: "ByBlock",
      size: 0.01
    }, {
      name: "默认",
      size: 0.01
    }, {
      name: "0.00mm",
      size: 0.01
    }, {
      name: "0.05mm",
      size: 0.05
    }, {
      name: "0.09mm",
      size: 0.09
    }, {
      name: "0.13mm",
      size: 0.13
    }, {
      name: "0.15mm",
      size: 0.15
    }, {
      name: "0.18mm",
      size: 0.18
    }, {
      name: "0.20mm",
      size: 0.2
    }, {
      name: "0.25mm",
      size: 0.25
    }, {
      name: "0.30mm",
      size: 0.3
    }, {
      name: "0.35mm",
      size: 0.35
    }, {
      name: "0.40mm",
      size: 0.4
    }, {
      name: "0.50mm",
      size: 0.5
    }, {
      name: "0.53mm",
      size: 0.53
    }, {
      name: "0.60mm",
      size: 0.6
    }, {
      name: "0.70mm",
      size: 0.7
    }, {
      name: "0.80mm",
      size: 0.8
    }, {
      name: "0.90mm",
      size: 0.9
    }, {
      name: "1.00mm",
      size: 1
    }, {
      name: "1.06mm",
      size: 1.06
    }, {
      name: "1.20mm",
      size: 1.2
    }, {
      name: "1.40mm",
      size: 1.4
    }, {
      name: "1.58mm",
      size: 1.58
    }, {
      name: "2.00mm",
      size: 2
    }, {
      name: "2.11mm",
      size: 2.11
    }];
    return function(a, i) {
      return d(), V(z, {
        title: a.t("2014"),
        "max-width": "500",
        modelValue: w(o),
        "onUpdate:modelValue": i[1] || (i[1] = function(n) {
          return B(o) ? o.value = n : null;
        }),
        footerBtnList: c
      }, {
        default: e(function() {
          return [s("div", S, [t(L, null, {
            default: e(function() {
              return [t(f, {
                cols: "5"
              }, {
                default: e(function() {
                  return [t(r, {
                    title: a.t("1810")
                  }, {
                    default: e(function() {
                      return [t(x, {
                        density: "compact",
                        class: "list-border overflow-y py-0",
                        selected: [u[0].name],
                        "active-class": "bg-light-blue-darken-2",
                        height: "160"
                      }, {
                        default: e(function() {
                          return [(d(), b(g, null, k(u, function(n, p) {
                            return t(C, {
                              key: p,
                              value: n.name,
                              mandatory: "",
                              class: "pa-0",
                              "min-height": "20",
                              height: "20"
                            }, {
                              prepend: e(function() {
                                return [s("div", M, [t(F, {
                                  class: "border-opacity-100",
                                  thickness: n.size * l.value * 10,
                                  length: "50"
                                }, null, 8, ["thickness"])])];
                              }),
                              default: e(function() {
                                return [t(D, {
                                  textContent: m(n.name),
                                  class: "ml-2"
                                }, null, 8, ["textContent"])];
                              }),
                              _: 2
                            }, 1032, ["value"]);
                          }), 64))];
                        }),
                        _: 1
                      }, 8, ["selected"])];
                    }),
                    _: 1
                  }, 8, ["title"])];
                }),
                _: 1
              }), t(f, {
                cols: "7",
                "align-self": "auto"
              }, {
                default: e(function() {
                  return [t(r, {
                    title: a.t("2015")
                  }, {
                    default: e(function() {
                      return [s("div", N, m(a.t("1779")) + "(mm) ", 1)];
                    }),
                    _: 1
                  }, 8, ["title"]), t(I, {
                    class: "my-2 ml-10"
                  }, {
                    label: e(function() {
                      return [s("span", U, m(a.t("2016")), 1)];
                    }),
                    _: 1
                  }), t(r, {
                    title: a.t("2017")
                  }, {
                    default: e(function() {
                      return [t(R, {
                        step: "0.1",
                        class: "my-4",
                        "tick-size": "4",
                        "thumb-size": 10,
                        min: "0",
                        max: "1",
                        modelValue: l.value,
                        "onUpdate:modelValue": i[0] || (i[0] = function(n) {
                          return l.value = n;
                        }),
                        "thumb-label": "",
                        "hide-details": "",
                        color: "#007AD9"
                      }, {
                        prepend: e(function() {
                          return [s("span", j, m(a.t("2018")), 1)];
                        }),
                        append: e(function() {
                          return [s("span", A, m(a.t("2019")), 1)];
                        }),
                        _: 1
                      }, 8, ["modelValue"])];
                    }),
                    _: 1
                  }, 8, ["title"])];
                }),
                _: 1
              })];
            }),
            _: 1
          }), s("p", E, m(a.t("2020")) + "：ByLayer", 1)])];
        }),
        _: 1
      }, 8, ["title", "modelValue"]);
    };
  }
}), H = /* @__PURE__ */ _(G, [["__scopeId", "data-v-c4802db6"]]);
export {
  H as default
};
