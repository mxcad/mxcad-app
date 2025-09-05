import { c3 as H, aK as fe, aL as de, H as me, Z as f, x as P, $ as _, a6 as c, X as E, R as ve } from "./lib.js";
import { d as pe, f as O, g as V, i as W, a7 as ce, c as X, o as w, a as t, w as n, l as d, t as s, G as a, A as ye, q as r, m as j, F as G, b as ge, p as ke, Q as D, k as Ve } from "./vue.js";
import { s as we } from "./pinia.js";
import { M as K } from "./mxcad.js";
import { D as U, C as y, k as Ce, d as Se, l as be, c as A, j as xe, i as C } from "./vuetify.js";
var Fe = {
  class: "px-3 mt-2"
}, Be = {
  class: "h-100"
}, Ne = {
  class: "h-100"
}, _e = {
  class: "w-50"
}, De = {
  class: "w-50"
}, Ue = {
  class: "mr-1"
}, Ae = {
  class: "ml-5"
};
const Le = /* @__PURE__ */ pe({
  __name: "index",
  setup: function(he) {
    var g = H.isShow, Q = H.showDialog, m = fe(), v = we(m), L = v.list, k = v.current, o = v.index, T = v.fontNames, h = v.fontStyles, Y = v.isUpdate, S = v.newStyleName, Z = m.setIndex, J = m.putCurrent, ee = m.add, te = m.remove, I = m.apply, $ = m.init;
    $();
    var ne = [{
      name: "应用",
      fun: function() {
        I();
      },
      disabled: function() {
        return !Y.value;
      },
      primary: !0,
      labelProps: {
        "key-name": "A"
      }
    }, {
      name: "关闭",
      fun: function() {
        return Q(!1);
      }
    }], le = {
      a: function() {
        I();
      }
    }, M = de(!1), b = M.isShow, x = M.showDialog, ae = me(), ue = ae.open, F = O("所有样式"), R = V(function() {
      return F.value === "正在使用样式";
    }), i = V(function() {
      return R.value ? [k.value] : L.value;
    }), oe = V(function() {
      return i.value[o.value] === k.value;
    }), B = O(!1), ie = function() {
      B.value = !0, Ve(function() {
        B.value = !1;
      });
    };
    W(R, function() {
      o.value = i.value.indexOf(k.value);
    }), W(g, function(u) {
      u && $();
    });
    var q = function() {
      ee(), x(!1), ie();
    }, se = {
      enter: q
    }, p = V(function() {
      return L.value[o.value].isBigFont;
    }), z = function(e) {
      return (e.includes("\\") || e.includes("/")) && (e = e.split(/[\\\/]/).pop() || e), p.value && (e = e.toLocaleLowerCase(), e = e.endsWith(".shx") ? e : e + ".shx"), e;
    };
    return function(u, e) {
      var re = ce("scroll-bottom");
      return w(), X(G, null, [t(E, {
        title: u.t("230"),
        "max-width": "600",
        modelValue: a(g),
        "onUpdate:modelValue": e[9] || (e[9] = function(l) {
          return D(g) ? g.value = l : null;
        }),
        footerBtnList: ne,
        keys: le
      }, {
        default: n(function() {
          return [d("div", Fe, [d("p", null, s(u.t("2136")) + ": " + s(a(k).name), 1), t(U, {
            "align-stretch": ""
          }, {
            default: n(function() {
              return [t(y, {
                cols: "4",
                class: "h-100",
                "align-self": "start"
              }, {
                default: n(function() {
                  return [d("div", Be, [t(f, {
                    "key-name": "S",
                    colon: ""
                  }, {
                    default: n(function() {
                      return [r(s(u.t("1624")), 1)];
                    }),
                    _: 1
                  }), ye((w(), j(Ce, {
                    density: "compact",
                    class: "overflow-y py-0 list-border",
                    height: "230"
                  }, {
                    default: n(function() {
                      return [(w(!0), X(G, null, ge(i.value, function(l, N) {
                        return w(), j(Se, {
                          key: l.id,
                          onClick: function($e) {
                            return a(Z)(N);
                          },
                          value: l,
                          class: ke(["pa-0 mb-0", a(o) === N ? "bg-light-blue-darken-2" : ""]),
                          "min-height": "18",
                          height: "18"
                        }, {
                          prepend: n(function() {
                            return P(e[14] || (e[14] = [d("div", {
                              style: {
                                width: "24px"
                              }
                            }, null, -1)]));
                          }),
                          default: n(function() {
                            return [t(be, {
                              textContent: s(l.name)
                            }, null, 8, ["textContent"])];
                          }),
                          _: 2
                        }, 1032, ["onClick", "value", "class"]);
                      }), 128))];
                    }),
                    _: 1
                  })), [[re, B.value]]), t(A, {
                    class: "mt-2",
                    modelValue: F.value,
                    "onUpdate:modelValue": e[0] || (e[0] = function(l) {
                      return F.value = l;
                    }),
                    items: ["所有样式", "正在使用样式"]
                  }, null, 8, ["modelValue"])])];
                }),
                _: 1
              }), t(y, {
                cols: "6",
                class: "h-100"
              }, {
                default: n(function() {
                  return [d("div", Ne, [t(_, {
                    title: u.t("1834"),
                    class: "mb-1"
                  }, {
                    default: n(function() {
                      return [t(U, null, {
                        default: n(function() {
                          return [d("div", _e, [t(f, {
                            "key-name": p.value ? "X" : "B",
                            class: "ml-1"
                          }, {
                            default: n(function() {
                              return [r(s(p.value ? u.t("2137") : u.t("2138")), 1)];
                            }),
                            _: 1
                          }, 8, ["key-name"]), t(A, {
                            class: "mx-1",
                            "menu-props": {
                              maxHeight: "200px"
                            },
                            items: a(T),
                            "model-value": z((i.value[a(o)].isBigFont ? i.value[a(o)].fileName : i.value[a(o)].typeFace) || a(T)[0]),
                            "onUpdate:modelValue": e[1] || (e[1] = function(l) {
                              i.value[a(o)].isBigFont ? i.value[a(o)].fileName = l : i.value[a(o)].typeFace = l, a(K).App.loadFonts([l], [l], [l], function() {
                              });
                            })
                          }, null, 8, ["items", "model-value"])]), d("div", De, [t(f, {
                            "key-name": p.value ? "B" : "Y",
                            class: "ml-1"
                          }, {
                            default: n(function() {
                              return [r(s(p.value ? u.t("2139") : u.t("2140")), 1)];
                            }),
                            _: 1
                          }, 8, ["key-name"]), t(A, {
                            class: "mx-1",
                            "menu-props": {
                              maxHeight: "200px"
                            },
                            items: a(h),
                            "model-value": z(i.value[a(o)].isBigFont ? i.value[a(o)].bigFontFileName || a(h)[0] : "常规"),
                            "onUpdate:modelValue": e[2] || (e[2] = function(l) {
                              i.value[a(o)].isBigFont && (i.value[a(o)].bigFontFileName = l), a(K).App.loadFonts([l], [l], [l], function() {
                              });
                            })
                          }, null, 8, ["items", "model-value"])])];
                        }),
                        _: 1
                      }), t(xe, {
                        class: "mt-2",
                        "model-value": p.value,
                        "onUpdate:modelValue": e[3] || (e[3] = function(l) {
                          l !== null && (i.value[a(o)].isBigFont = l);
                        })
                      }, {
                        label: n(function() {
                          return [t(f, {
                            "key-name": "U"
                          }, {
                            default: n(function() {
                              return [r(s(u.t("2141")), 1)];
                            }),
                            _: 1
                          })];
                        }),
                        _: 1
                      }, 8, ["model-value"])];
                    }),
                    _: 1
                  }, 8, ["title"]), t(_, {
                    title: u.t("2061"),
                    class: "mt-4"
                  }, {
                    default: n(function() {
                      return [t(C, {
                        modelValue: i.value[a(o)].textSize,
                        "onUpdate:modelValue": e[4] || (e[4] = function(l) {
                          return i.value[a(o)].textSize = l;
                        }),
                        type: "number",
                        min: "0",
                        step: "0.001"
                      }, {
                        prepend: n(function() {
                          return [t(f, {
                            "key-name": "T"
                          }, {
                            default: n(function() {
                              return [r(s(u.t("1835")), 1)];
                            }),
                            _: 1
                          })];
                        }),
                        _: 1
                      }, 8, ["modelValue"])];
                    }),
                    _: 1
                  }, 8, ["title"]), t(_, {
                    title: u.t("2142"),
                    class: "mt-4"
                  }, {
                    default: n(function() {
                      return [t(C, {
                        modelValue: i.value[a(o)].xScale,
                        "onUpdate:modelValue": e[5] || (e[5] = function(l) {
                          return i.value[a(o)].xScale = l;
                        }),
                        type: "number",
                        step: "0.001"
                      }, {
                        prepend: n(function() {
                          return [t(f, {
                            "key-name": "W",
                            colon: ""
                          }, {
                            default: n(function() {
                              return [r(s(u.t("2143")), 1)];
                            }),
                            _: 1
                          })];
                        }),
                        _: 1
                      }, 8, ["modelValue"]), t(C, {
                        class: "mt-2",
                        modelValue: i.value[a(o)].obliquingAngle,
                        "onUpdate:modelValue": e[6] || (e[6] = function(l) {
                          return i.value[a(o)].obliquingAngle = l;
                        }),
                        type: "number",
                        step: "0.001"
                      }, {
                        prepend: n(function() {
                          return [t(f, {
                            "key-name": "O",
                            colon: ""
                          }, {
                            default: n(function() {
                              return [r(s(u.t("2144")), 1)];
                            }),
                            _: 1
                          })];
                        }),
                        _: 1
                      }, 8, ["modelValue"])];
                    }),
                    _: 1
                  }, 8, ["title"])])];
                }),
                _: 1
              }), t(y, {
                cols: "2",
                "align-self": "start"
              }, {
                default: n(function() {
                  return [t(c, {
                    class: "mt-5 w-100",
                    isAction: ""
                  }, {
                    default: n(function() {
                      return [t(f, {
                        "key-name": "C",
                        onClick: a(J)
                      }, {
                        default: n(function() {
                          return [r(s(u.t("213")), 1)];
                        }),
                        _: 1
                      }, 8, ["onClick"])];
                    }),
                    _: 1
                  }), t(c, {
                    class: "mt-4 w-100",
                    isAction: ""
                  }, {
                    default: n(function() {
                      return [t(f, {
                        "key-name": "N",
                        onClick: e[7] || (e[7] = function(l) {
                          return a(x)();
                        })
                      }, {
                        default: n(function() {
                          return [r(s(u.t("181")), 1)];
                        }),
                        _: 1
                      })];
                    }),
                    _: 1
                  }), t(c, {
                    class: "mt-4 w-100",
                    isAction: "",
                    onClick: e[8] || (e[8] = function(l) {
                      return a(ue)({
                        text: u.t("2145") + ":" + u.t("1624") + "1?",
                        define: function() {
                          return a(te)();
                        }
                      });
                    }),
                    disabled: oe.value
                  }, {
                    default: n(function() {
                      return [t(f, {
                        "key-name": "D"
                      }, {
                        default: n(function() {
                          return [r(s(u.t("205")), 1)];
                        }),
                        _: 1
                      })];
                    }),
                    _: 1
                  }, 8, ["disabled"])];
                }),
                _: 1
              })];
            }),
            _: 1
          })])];
        }),
        _: 1
      }, 8, ["title", "modelValue"]), t(E, {
        title: u.t("2146"),
        modelValue: a(b),
        "onUpdate:modelValue": e[13] || (e[13] = function(l) {
          return D(b) ? b.value = l : null;
        }),
        "max-width": "300",
        keys: se
      }, {
        actions: n(function() {
          return P(e[15] || (e[15] = [d("div", {
            class: "pa-1"
          }, null, -1)]));
        }),
        default: n(function() {
          return [t(U, {
            class: "py-3"
          }, {
            default: n(function() {
              return [t(y, {
                cols: "7",
                "align-self": "start"
              }, {
                default: n(function() {
                  return [t(C, {
                    class: "mt-1 ml-8",
                    modelValue: a(S),
                    "onUpdate:modelValue": e[10] || (e[10] = function(l) {
                      return D(S) ? S.value = l : null;
                    })
                  }, {
                    prepend: n(function() {
                      return [d("span", Ue, s(u.t("2147")) + ":", 1)];
                    }),
                    _: 1
                  }, 8, ["modelValue"])];
                }),
                _: 1
              }), t(y, {
                cols: "5"
              }, {
                default: n(function() {
                  return [d("div", Ae, [t(c, {
                    primary: "",
                    onClick: e[11] || (e[11] = function(l) {
                      return q();
                    }),
                    isAction: ""
                  }, {
                    default: n(function() {
                      return [r(s(u.t("1829")), 1)];
                    }),
                    _: 1
                  }), t(c, {
                    class: "mt-2",
                    onClick: e[12] || (e[12] = function(l) {
                      return a(x)();
                    }),
                    isAction: ""
                  }, {
                    default: n(function() {
                      return [r(s(u.t("201")), 1)];
                    }),
                    _: 1
                  })])];
                }),
                _: 1
              })];
            }),
            _: 1
          })];
        }),
        _: 1
      }, 8, ["title", "modelValue"])], 64);
    };
  }
}), Pe = /* @__PURE__ */ ve(Le, [["__scopeId", "data-v-82d72a12"]]);
export {
  Pe as default
};
