import { d as B, f as C, m as r, o as i, w as t, l as o, a as e, q as n, t as l, c as L, F as S, b as D, Q as x, G as F } from "./vue.js";
import { c2 as v, Z as p, a6 as f, $ as _, X as I } from "./lib.js";
import { a8 as j, i as G, Q as M, S as c, j as b, k as N, ac as R, ad as T, d as Q, l as W } from "./vuetify.js";
var $ = {
  class: "px-3 mt-2"
}, q = {
  class: "d-flex justify-space-between w-100"
}, A = {
  class: "d-flex justify-space-between align-center mt-2"
};
const H = /* @__PURE__ */ B({
  __name: "index",
  setup: function(U) {
    var s = v.isShow, V = v.showDialog, g = [{
      name: "确定",
      fun: function() {
      },
      primary: !0
    }, {
      name: "关闭",
      fun: function() {
        return V(!1);
      }
    }], h = C([{
      title: "小数",
      value: 1
    }, {
      title: "小数",
      value: 2
    }, {
      title: "小数",
      value: 3
    }, {
      title: "小数",
      value: 3
    }, {
      title: "小数",
      value: 1
    }, {
      title: "小数",
      value: 2
    }, {
      title: "小数",
      value: 3
    }, {
      title: "小数",
      value: 3
    }]);
    return function(a, d) {
      return i(), r(I, {
        title: a.t("2122"),
        "max-width": "450",
        modelValue: F(s),
        "onUpdate:modelValue": d[0] || (d[0] = function(u) {
          return x(s) ? s.value = u : null;
        }),
        footerBtnList: g
      }, {
        default: t(function() {
          return [o("div", $, [e(p, {
            "key-name": "W",
            colon: ""
          }, {
            default: t(function() {
              return [n(l(a.t("2123")), 1)];
            }),
            _: 1
          }), e(j, {
            class: "mb-1",
            items: []
          }, {
            append: t(function() {
              return [e(f, null, {
                default: t(function() {
                  return [n(l(a.t("2124")), 1)];
                }),
                _: 1
              })];
            }),
            _: 1
          }), e(p, {
            "key-name": "W",
            colon: ""
          }, {
            default: t(function() {
              return [n(l(a.t("2125")), 1)];
            }),
            _: 1
          }), e(G, {
            class: "",
            items: []
          }, {
            append: t(function() {
              return [e(f, null, {
                default: t(function() {
                  return [n(l(a.t("2126")), 1)];
                }),
                _: 1
              })];
            }),
            _: 1
          }), e(_, {
            title: a.t("2127")
          }, {
            default: t(function() {
              return [e(M, {
                class: ""
              }, {
                default: t(function() {
                  return [o("div", q, [e(c, {
                    label: a.t("2128"),
                    value: 0
                  }, null, 8, ["label"]), e(c, {
                    label: a.t("2129"),
                    value: 1
                  }, null, 8, ["label"]), e(c, {
                    label: a.t("2130"),
                    value: 2
                  }, null, 8, ["label"])])];
                }),
                _: 1
              }), o("div", A, [e(b, {
                class: ""
              }, {
                label: t(function() {
                  return [n(l(a.t("2131")), 1)];
                }),
                _: 1
              }), e(f, null, {
                default: t(function() {
                  return [n(l(a.t("2132")), 1)];
                }),
                _: 1
              })])];
            }),
            _: 1
          }, 8, ["title"]), e(_, {
            title: a.t("2133")
          }, {
            default: t(function() {
              return [e(b, {
                class: ""
              }, {
                label: t(function() {
                  return [n(l(a.t("2134")), 1)];
                }),
                _: 1
              }), e(N, {
                border: "",
                height: "140",
                density: "compact",
                variant: "text"
              }, {
                default: t(function() {
                  return [e(R, {
                    multiple: "",
                    class: "mr-8"
                  }, {
                    default: t(function() {
                      return [(i(!0), L(S, null, D(h.value, function(u, k) {
                        return i(), r(T, null, {
                          default: t(function(m) {
                            var w = m.isSelected, y = m.toggle;
                            return [(i(), r(Q, {
                              key: k,
                              value: u,
                              "active-class": "bg-light-blue-darken-2",
                              active: w,
                              onClick: y
                            }, {
                              default: t(function() {
                                return [e(W, {
                                  textContent: l(u.title)
                                }, null, 8, ["textContent"])];
                              }),
                              _: 2
                            }, 1032, ["value", "active", "onClick"]))];
                          }),
                          _: 2
                        }, 1024);
                      }), 256))];
                    }),
                    _: 1
                  })];
                }),
                _: 1
              })];
            }),
            _: 1
          }, 8, ["title"])])];
        }),
        _: 1
      }, 8, ["title", "modelValue"]);
    };
  }
});
export {
  H as default
};
