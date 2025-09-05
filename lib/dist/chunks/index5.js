import { d as V, m as w, o as g, w as e, l, a as n, t as a, q as y, Q as D, G as B } from "./vue.js";
import { aa as _, a6 as f, $ as p, Z as C, X as j } from "./lib.js";
import { D as s, C as u, i as r, b as m, j as o, Q as X, S as c } from "./vuetify.js";
var k = {
  class: "px-3"
}, F = {
  class: ""
}, R = {
  class: ""
}, S = {
  class: "mt-1 mb-4",
  style: {
    "margin-right": "42px"
  }
}, M = {
  class: ""
}, N = {
  class: ""
}, G = {
  class: ""
}, L = {
  class: "w-100 d-flex justify-space-between"
}, Q = {
  class: ""
}, T = {
  class: ""
}, $ = {
  class: ""
}, q = {
  class: ""
}, A = {
  class: "d-flex flex-column justify-center align-center"
}, I = {
  class: "text-center"
};
const H = /* @__PURE__ */ V({
  __name: "index",
  setup: function(U) {
    var i = _.isShow, v = _.showDialog, h = [{
      name: "开始转换",
      fun: function() {
      },
      primary: !0
    }, {
      name: "取消",
      fun: function() {
        return v(!1);
      }
    }];
    return function(t, d) {
      return g(), w(j, {
        modelValue: B(i),
        "onUpdate:modelValue": d[0] || (d[0] = function(b) {
          return D(i) ? i.value = b : null;
        }),
        footerBtnList: h,
        "max-width": "450",
        title: "CAD转PDF"
      }, {
        default: e(function() {
          return [l("div", k, [n(s, {
            class: "mt-1"
          }, {
            default: e(function() {
              return [n(u, {
                cols: "8"
              }, {
                default: e(function() {
                  return [n(r, null, {
                    prepend: e(function() {
                      return [l("span", F, a(t.t("1933")) + ":", 1)];
                    }),
                    append: e(function() {
                      return [n(f, null, {
                        default: e(function() {
                          return [n(m, {
                            icon: "class:iconfont more"
                          })];
                        }),
                        _: 1
                      })];
                    }),
                    _: 1
                  })];
                }),
                _: 1
              }), n(u, {
                cols: "4"
              }, {
                default: e(function() {
                  return [n(o, {
                    class: "ml-2",
                    label: t.t("1934")
                  }, null, 8, ["label"])];
                }),
                _: 1
              })];
            }),
            _: 1
          }), n(s, null, {
            default: e(function() {
              return [n(u, null, {
                default: e(function() {
                  return [n(r, null, {
                    prepend: e(function() {
                      return [l("span", R, a(t.t("1935")) + ":", 1)];
                    }),
                    append: e(function() {
                      return [n(f, null, {
                        default: e(function() {
                          return [n(m, {
                            icon: "class:iconfont more"
                          })];
                        }),
                        _: 1
                      })];
                    }),
                    _: 1
                  })];
                }),
                _: 1
              })];
            }),
            _: 1
          }), l("div", S, [n(s, null, {
            default: e(function() {
              return [n(u, null, {
                default: e(function() {
                  return [n(r, null, {
                    prepend: e(function() {
                      return [l("span", M, a(t.t("1936")) + ":", 1)];
                    }),
                    _: 1
                  })];
                }),
                _: 1
              })];
            }),
            _: 1
          }), n(s, {
            justify: "space-between"
          }, {
            default: e(function() {
              return [n(u, {
                cols: "5"
              }, {
                default: e(function() {
                  return [n(r, null, {
                    prepend: e(function() {
                      return [l("span", N, a(t.t("1937")) + ":", 1)];
                    }),
                    _: 1
                  })];
                }),
                _: 1
              }), n(u, {
                cols: "5"
              }, {
                default: e(function() {
                  return [n(r, null, {
                    prepend: e(function() {
                      return [l("span", G, a(t.t("1938")) + ":", 1)];
                    }),
                    _: 1
                  })];
                }),
                _: 1
              })];
            }),
            _: 1
          }), n(s, {
            justify: "end",
            "no-gutters": ""
          }, {
            default: e(function() {
              return [n(u, {
                cols: "8"
              }), n(u, {
                cols: "4"
              }, {
                default: e(function() {
                  return [n(o, {
                    class: "",
                    label: t.t("1939")
                  }, null, 8, ["label"])];
                }),
                _: 1
              })];
            }),
            _: 1
          }), n(o, {
            class: "",
            label: t.t("1940")
          }, null, 8, ["label"]), n(o, {
            class: "mt-1",
            label: t.t("1941")
          }, null, 8, ["label"]), n(p, {
            title: t.t("1942")
          }, {
            default: e(function() {
              return [n(X, {
                class: ""
              }, {
                default: e(function() {
                  return [l("div", L, [n(c, {
                    label: t.t("1943"),
                    value: "1"
                  }, null, 8, ["label"]), n(c, {
                    label: t.t("1944"),
                    value: "2"
                  }, null, 8, ["label"]), n(c, {
                    label: t.t("1945"),
                    value: "3"
                  }, null, 8, ["label"])])];
                }),
                _: 1
              }), n(s, null, {
                default: e(function() {
                  return [n(u, {
                    cols: "6"
                  }, {
                    default: e(function() {
                      return [n(r, null, {
                        prepend: e(function() {
                          return [l("span", Q, a(t.t("1946")) + "X1:", 1)];
                        }),
                        _: 1
                      })];
                    }),
                    _: 1
                  }), n(u, {
                    cols: "6"
                  }, {
                    default: e(function() {
                      return [n(r, null, {
                        prepend: e(function() {
                          return [l("span", T, a(t.t("1946")) + "X1:", 1)];
                        }),
                        _: 1
                      })];
                    }),
                    _: 1
                  })];
                }),
                _: 1
              }), n(s, null, {
                default: e(function() {
                  return [n(u, {
                    cols: "6"
                  }, {
                    default: e(function() {
                      return [n(r, null, {
                        prepend: e(function() {
                          return [l("span", $, a(t.t("1946")) + "X1:", 1)];
                        }),
                        _: 1
                      })];
                    }),
                    _: 1
                  }), n(u, {
                    cols: "6"
                  }, {
                    default: e(function() {
                      return [n(r, null, {
                        prepend: e(function() {
                          return [l("span", q, a(t.t("1946")) + "X1:", 1)];
                        }),
                        _: 1
                      })];
                    }),
                    _: 1
                  })];
                }),
                _: 1
              })];
            }),
            _: 1
          }, 8, ["title"]), n(p, {
            title: t.t("1942")
          }, {
            default: e(function() {
              return [l("div", A, [l("p", I, a(t.t("1947")), 1), n(f, {
                class: "mt-2"
              }, {
                default: e(function() {
                  return [n(C, {
                    "key-name": "B"
                  }, {
                    default: e(function() {
                      return [y(a(t.t("1948")) + "F", 1)];
                    }),
                    _: 1
                  })];
                }),
                _: 1
              })])];
            }),
            _: 1
          }, 8, ["title"])])])];
        }),
        _: 1
      }, 8, ["modelValue"]);
    };
  }
});
export {
  H as default
};
