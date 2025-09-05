import { bV as k, $ as c, a6 as a, Z as r, x as s, X as A } from "./lib.js";
import { d as L, f as m, g as h, m as b, o as f, w as t, l, a as e, q as i, c as C, F as D, b as S, A as B, p as M, t as w, Q as R, G as j } from "./vue.js";
import { D as q, C as v, k as V, _ as F, R as I } from "./vuetify.js";
var N = {
  class: "px-3 ShortcutKeySettingsDialog"
}, $ = {
  class: "d-flex justify-end my-2"
}, E = {
  class: "w-100 text-left"
}, T = ["onClick"], z = {
  class: "d-flex justify-start my-2"
}, G = {
  class: "d-flex justify-space-between"
}, K = {
  class: "d-flex justify-space-between my-2"
};
const W = /* @__PURE__ */ L({
  __name: "index",
  setup: function(U) {
    var o = k.isShow;
    k.showDialog;
    var _ = m([{
      title: "功能",
      type: "",
      value: 0,
      list: [{
        name: "A",
        cmd: "S",
        cmdList: [{
          cmd: "f"
        }, {
          cmd: "l"
        }]
      }, {
        name: "B",
        cmd: "S",
        cmdList: [{
          cmd: "a"
        }, {
          cmd: "d"
        }]
      }]
    }, {
      title: "绘图",
      type: "",
      value: 1,
      list: [{
        name: "画线",
        cmd: "MxLine",
        cmdList: [{
          cmd: "line"
        }, {
          cmd: "l"
        }]
      }, {
        name: "画圆弧",
        cmd: "Mx_Arc",
        cmdList: [{
          cmd: "arc"
        }, {
          cmd: "_arc"
        }]
      }]
    }]), p = m(0), x = h(function() {
      return _.value[p.value].list;
    }), d = m(0), y = h(function() {
      return x.value[d.value].cmdList;
    });
    return function(X, n) {
      return f(), b(A, {
        title: "命令行快捷命令设置",
        "max-width": "800",
        modelValue: j(o),
        "onUpdate:modelValue": n[0] || (n[0] = function(u) {
          return R(o) ? o.value = u : null;
        })
      }, {
        actions: t(function() {
          return s(n[9] || (n[9] = [l("div", {
            class: "my-1"
          }, null, -1)]));
        }),
        default: t(function() {
          return [l("div", N, [e(q, {
            class: "mt-2",
            "align-stretch": "",
            "no-gutters": ""
          }, {
            default: t(function() {
              return [e(v, {
                cols: "3",
                "align-self": "stretch",
                class: "h-100"
              }, {
                default: t(function() {
                  return [e(c, {
                    title: "分类"
                  }, {
                    default: t(function() {
                      return [e(V, {
                        class: "mt-1",
                        height: "300px",
                        items: _.value,
                        "active-class": "active",
                        selected: [p.value]
                      }, null, 8, ["items", "selected"])];
                    }),
                    _: 1
                  }), l("div", $, [e(a, {
                    isAction: "",
                    class: "mr-4"
                  }, {
                    default: t(function() {
                      return [e(r, {
                        "key-name": "E"
                      }, {
                        default: t(function() {
                          return s(n[1] || (n[1] = [i("导出设置文件", -1)]));
                        }),
                        _: 1
                      })];
                    }),
                    _: 1
                  })])];
                }),
                _: 1
              }), e(v, {
                cols: "6",
                "align-self": "stretch",
                style: {
                  height: "300px"
                }
              }, {
                default: t(function() {
                  return [e(c, {
                    title: "功能列表"
                  }, {
                    default: t(function() {
                      return [e(F, {
                        class: "mt-1 mx-table",
                        height: "300px"
                      }, {
                        default: t(function() {
                          return [n[2] || (n[2] = l("thead", null, [l("tr", null, [l("th", null, "功能名称"), l("th", null, "快捷键")])], -1)), l("tbody", E, [(f(!0), C(D, null, S(x.value, function(u, g) {
                            return B((f(), C("tr", {
                              key: u.cmd,
                              class: M(d.value === g ? "active" : ""),
                              onClick: function(H) {
                                return d.value = g;
                              }
                            }, [l("td", null, w(u.name), 1), l("td", null, w(u.cmd), 1)], 10, T)), [[I]]);
                          }), 128))])];
                        }),
                        _: 1
                      })];
                    }),
                    _: 1
                  }), l("div", z, [e(a, {
                    isAction: "",
                    class: "ml-4"
                  }, {
                    default: t(function() {
                      return [e(r, {
                        "key-name": "I"
                      }, {
                        default: t(function() {
                          return s(n[3] || (n[3] = [i("导入设置文件", -1)]));
                        }),
                        _: 1
                      })];
                    }),
                    _: 1
                  }), e(a, {
                    isAction: "",
                    class: "ml-8"
                  }, {
                    default: t(function() {
                      return [e(r, {
                        "key-name": "R"
                      }, {
                        default: t(function() {
                          return s(n[4] || (n[4] = [i("恢复默认设置", -1)]));
                        }),
                        _: 1
                      })];
                    }),
                    _: 1
                  })])];
                }),
                _: 1
              }), e(v, {
                cols: "3",
                "align-self": "stretch",
                class: "h-100"
              }, {
                default: t(function() {
                  return [e(c, {
                    title: "快捷命令"
                  }, {
                    default: t(function() {
                      return [l("div", G, [e(a, null, {
                        default: t(function() {
                          return [e(r, {
                            "key-name": "A"
                          }, {
                            default: t(function() {
                              return s(n[5] || (n[5] = [i("新增", -1)]));
                            }),
                            _: 1
                          })];
                        }),
                        _: 1
                      }), e(a, {
                        class: "ml-2"
                      }, {
                        default: t(function() {
                          return [e(r, {
                            "key-name": "D"
                          }, {
                            default: t(function() {
                              return s(n[6] || (n[6] = [i("删除", -1)]));
                            }),
                            _: 1
                          })];
                        }),
                        _: 1
                      })]), e(V, {
                        class: "mt-1",
                        height: "279px",
                        items: y.value,
                        "item-title": "cmd",
                        "item-value": "cmd",
                        "active-class": "active",
                        selected: [y.value[0].cmd]
                      }, null, 8, ["items", "selected"])];
                    }),
                    _: 1
                  }), l("div", K, [e(a, {
                    primary: "",
                    isAction: ""
                  }, {
                    default: t(function() {
                      return s(n[7] || (n[7] = [i(" 确定 ", -1)]));
                    }),
                    _: 1
                  }), e(a, {
                    class: "ml-2",
                    isAction: ""
                  }, {
                    default: t(function() {
                      return s(n[8] || (n[8] = [i(" 取消 ", -1)]));
                    }),
                    _: 1
                  })])];
                }),
                _: 1
              })];
            }),
            _: 1
          })])];
        }),
        _: 1
      }, 8, ["modelValue"]);
    };
  }
});
export {
  W as default
};
