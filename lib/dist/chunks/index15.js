import { a$ as p, l as Le, b0 as ve, t as u, X as de, h as fe, I as Ee, $ as z, b1 as Ie, aI as ie, b2 as he, u as Ce, b3 as We, b4 as Me, aK as je, b5 as $e, b6 as ne, x as se, b7 as Ae, aD as Je, b8 as Re, b9 as Fe, ba as ze, bb as pe, bc as Ke, ac as Ge, R as Be, H as He, bd as ue, be as qe, a6 as H, Z as q, bf as ae, bg as Qe } from "./lib.js";
import { f as j, g as G, d as J, i as Y, m as F, o as x, w as n, l as b, a as e, ae as Xe, q as P, t as v, G as s, c as A, s as E, n as le, D as oe, h as Ze, F as ge, b as Ye, p as et, Q as tt } from "./vue.js";
import { i as I, V as be, D as k, C as m, c as N, j as Q, Q as nt, S as Ve, k as lt, d as rt, l as ut, b as Z } from "./vuetify.js";
import { j as S, C as B, A as $ } from "./mxcad.js";
import { s as at } from "./pinia.js";
import { C as De } from "./color.js";
function Se(g, d) {
  var l = Object.keys(g);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(g);
    d && (o = o.filter(function(t) {
      return Object.getOwnPropertyDescriptor(g, t).enumerable;
    })), l.push.apply(l, o);
  }
  return l;
}
function T(g) {
  for (var d = 1; d < arguments.length; d++) {
    var l = arguments[d] != null ? arguments[d] : {};
    d % 2 ? Se(Object(l), !0).forEach(function(o) {
      Le(g, o, l[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(g, Object.getOwnPropertyDescriptors(l)) : Se(Object(l)).forEach(function(o) {
      Object.defineProperty(g, o, Object.getOwnPropertyDescriptor(l, o));
    });
  }
  return g;
}
var me = function() {
  try {
    return p.keys() || [p.defaultName];
  } catch (d) {
    return console.error("获取引线样式名称失败:", d), [p.defaultName];
  }
}, ot = function(d) {
  try {
    if (!d.name) return !1;
    var l = d.name;
    return p.set(l, d), !0;
  } catch (o) {
    return console.error("保存引线样式失败:", o), !1;
  }
}, it = function(d) {
  try {
    if (d === p.defaultName)
      return !1;
    var l = me();
    return l.includes(d) ? (p.remove(d), !0) : !1;
  } catch (o) {
    return console.error("删除引线样式失败:", o), !1;
  }
}, st = function(d, l) {
  try {
    if (d === p.defaultName)
      return !1;
    var o = me();
    if (o.includes(l))
      return !1;
    if (o.includes(d)) {
      var t = p.get(d);
      return p.set(l, t), p.remove(d), p.currentName === d && (p.currentName = l), !0;
    }
    return !1;
  } catch (L) {
    return console.error("重命名引线样式失败:", L), !1;
  }
}, dt = function() {
  var d = j([]), l = j(null), o = j(null), t = j(!1), L = function() {
    var c = me();
    d.value = c.map(function(C) {
      var K = p.get(C);
      return T(T({}, K), {}, {
        name: C
      });
    });
  };
  L();
  var D = G(function() {
    return d.value;
  }), V = p.get(p.defaultName);
  V && (l.value = T(T({}, V), {}, {
    name: p.defaultName
  })), V && (o.value = T(T({}, V), {}, {
    name: p.defaultName
  }));
  var U = function(c) {
    o.value = JSON.parse(JSON.stringify(c)), t.value = !1;
  }, i = function() {
    var c = p.get(p.defaultName);
    p.defaultValue, c && (o.value = T(T({}, JSON.parse(JSON.stringify(c))), {}, {
      name: "",
      // 清空名称，需要用户输入
      description: "新建样式"
    })), t.value = !0;
  }, r = function(c) {
    o.value = JSON.parse(JSON.stringify(c)), o.value && (o.value.name = ""), t.value = !0;
  }, a = function() {
    t.value = !1;
  }, y = function() {
    if (!o.value || !o.value.name.trim())
      return !1;
    var c = ot(o.value);
    if (c) {
      L();
      var C = p.get(o.value.name);
      C && (l.value = T(T({}, C), {}, {
        name: o.value.name
      })), t.value = !1;
    }
    return c;
  }, M = function(c) {
    if (!c || c.name === p.defaultName) return !1;
    var C = it(c.name);
    if (C) {
      var K;
      if (L(), ((K = l.value) === null || K === void 0 ? void 0 : K.name) === c.name) {
        var ee = p.get(p.defaultName);
        ee && (l.value = T(T({}, ee), {}, {
          name: p.defaultName
        }));
      }
    }
    return C;
  }, w = function() {
    return l.value ? (p.currentName = l.value.name, ve && ve(l.value.name), !0) : !1;
  }, O = function(c, C) {
    return !c || !C || c === p.defaultName ? !1 : st(c, C);
  };
  return {
    styleList: D,
    currentStyle: l,
    editingStyle: o,
    isCreating: t,
    refreshStyleList: L,
    startEditing: U,
    startCreating: i,
    extendStyle: r,
    cancelEditing: a,
    saveStyle: y,
    deleteStyle: M,
    applyStyle: w,
    renameStyle: O
  };
}, ft = {
  class: "pa-4"
}, mt = {
  class: "d-flex justify-end pa-3 gap-2"
};
const ct = /* @__PURE__ */ J({
  __name: "InputDialog",
  props: {
    modelValue: {
      type: Boolean
    },
    title: {},
    label: {},
    defaultValue: {}
  },
  emits: ["update:modelValue", "confirm", "cancel"],
  setup: function(d, l) {
    var o = l.emit, t = fe(), L = d, D = o, V = j(L.defaultValue || "");
    Y(function() {
      return L.defaultValue;
    }, function(r) {
      r !== void 0 && (V.value = r);
    });
    var U = function() {
      if (!V.value.trim()) {
        t.warning(u("4106"));
        return;
      }
      D("confirm", V.value.trim()), D("update:modelValue", !1);
    }, i = function() {
      D("cancel"), D("update:modelValue", !1);
    };
    return function(r, a) {
      return x(), F(de, {
        title: r.title,
        "model-value": r.modelValue,
        "onUpdate:modelValue": a[1] || (a[1] = function(y) {
          return D("update:modelValue", y);
        }),
        "max-width": "400",
        persistent: ""
      }, {
        actions: n(function() {
          return [b("div", mt, [e(be, {
            class: "mr-1",
            color: "primary",
            onClick: U
          }, {
            default: n(function() {
              return [P(v(s(u)("1829")), 1)];
            }),
            _: 1
          }), e(be, {
            onClick: i
          }, {
            default: n(function() {
              return [P(v(s(u)("201")), 1)];
            }),
            _: 1
          })])];
        }),
        default: n(function() {
          return [b("div", ft, [e(I, {
            modelValue: V.value,
            "onUpdate:modelValue": a[0] || (a[0] = function(y) {
              return V.value = y;
            }),
            label: r.label,
            autofocus: "",
            onKeyup: Xe(U, ["enter"])
          }, null, 8, ["modelValue", "label"])])];
        }),
        _: 1
      }, 8, ["title", "model-value"]);
    };
  }
});
var yt = {
  key: 0
};
const vt = /* @__PURE__ */ J({
  __name: "LeaderLine",
  props: {
    style: {}
  },
  setup: function(d) {
    var l = d, o = Ee(), t = at(o), L = t.lineTypeList, D = G(function() {
      return [{
        text: u("4134"),
        value: S.LineWeight.kLnWtByLayer
      }, {
        text: u("4135"),
        value: S.LineWeight.kLnWtByBlock
      }, {
        text: u("4136"),
        value: S.LineWeight.kLnWtByLwDefault
      }, {
        text: "0.00mm",
        value: S.LineWeight.kLnWt000
      }, {
        text: "0.05mm",
        value: S.LineWeight.kLnWt005
      }, {
        text: "0.09mm",
        value: S.LineWeight.kLnWt009
      }, {
        text: "0.13mm",
        value: S.LineWeight.kLnWt013
      }, {
        text: "0.15mm",
        value: S.LineWeight.kLnWt015
      }, {
        text: "0.18mm",
        value: S.LineWeight.kLnWt018
      }, {
        text: "0.20mm",
        value: S.LineWeight.kLnWt020
      }, {
        text: "0.25mm",
        value: S.LineWeight.kLnWt025
      }, {
        text: "0.30mm",
        value: S.LineWeight.kLnWt030
      }, {
        text: "0.35mm",
        value: S.LineWeight.kLnWt035
      }, {
        text: "0.40mm",
        value: S.LineWeight.kLnWt040
      }, {
        text: "0.50mm",
        value: S.LineWeight.kLnWt050
      }, {
        text: "0.53mm",
        value: S.LineWeight.kLnWt053
      }, {
        text: "0.60mm",
        value: S.LineWeight.kLnWt060
      }, {
        text: "0.70mm",
        value: S.LineWeight.kLnWt070
      }, {
        text: "0.80mm",
        value: S.LineWeight.kLnWt080
      }, {
        text: "0.90mm",
        value: S.LineWeight.kLnWt090
      }, {
        text: "1.00mm",
        value: S.LineWeight.kLnWt100
      }, {
        text: "1.06mm",
        value: S.LineWeight.kLnWt106
      }, {
        text: "1.20mm",
        value: S.LineWeight.kLnWt120
      }, {
        text: "1.40mm",
        value: S.LineWeight.kLnWt140
      }, {
        text: "1.58mm",
        value: S.LineWeight.kLnWt158
      }, {
        text: "2.00mm",
        value: S.LineWeight.kLnWt200
      }, {
        text: "2.11mm",
        value: S.LineWeight.kLnWt211
      }];
    }), V = function(r) {
      var a = he(r), y = Ce(), M = y.createColor, w = y.colorSelectList, O = w.find(function(c) {
        if (c.method === a.method) {
          if (c.method === B.kByLayer || c.method === B.kByBlock || c.method === B.kByACI && c.index === a.colorIndex)
            return !0;
          if (c.method === B.kByColor) {
            var C = De(c.color);
            return C.red() === a.red && C.green() === a.green && C.blue() === a.blue;
          }
        }
        return !1;
      });
      if (!O) {
        var h = We(a);
        O = M({
          color: h,
          name: h,
          method: a.method,
          index: a.colorIndex,
          n: a.n
        });
      }
      return O;
    }, U = function(r) {
      var a;
      if (!(!((a = l.style) !== null && a !== void 0 && a.line) || !r)) {
        var y = null;
        r.method === B.kNone ? y = $.kBylayer : r.method === B.kByColor ? y = parseInt(r.color.replace("#", ""), 16) : r.method === B.kByLayer ? y = $.kBylayer : r.method === B.kByBlock ? y = $.kByblock : r.index !== -1 && (y = r.index), l.style.line.color = y;
      }
    };
    return function(i, r) {
      return i.style ? (x(), A("div", yt, [e(k, null, {
        default: n(function() {
          return [e(m, {
            cols: "12"
          }, {
            default: n(function() {
              return [e(z, {
                title: s(u)("4137")
              }, {
                default: n(function() {
                  return [e(k, null, {
                    default: n(function() {
                      return [e(m, {
                        cols: "12"
                      }, {
                        default: n(function() {
                          return [b("div", null, v(s(u)("4138")) + ":", 1), e(N, {
                            modelValue: i.style.line.type,
                            "onUpdate:modelValue": r[0] || (r[0] = function(a) {
                              return i.style.line.type = a;
                            }),
                            items: s(Ie),
                            "item-title": "title",
                            "item-value": "value"
                          }, null, 8, ["modelValue", "items"])];
                        }),
                        _: 1
                      }), e(m, {
                        cols: "12"
                      }, {
                        default: n(function() {
                          return [b("div", null, v(s(u)("4139")) + ":", 1), e(ie, {
                            "model-value": V(i.style.line.color),
                            onChange: U
                          }, null, 8, ["model-value"])];
                        }),
                        _: 1
                      }), e(m, {
                        cols: "12"
                      }, {
                        default: n(function() {
                          return [b("div", null, v(s(u)("218")) + ":", 1), e(N, {
                            modelValue: i.style.line.lineType,
                            "onUpdate:modelValue": r[1] || (r[1] = function(a) {
                              return i.style.line.lineType = a;
                            }),
                            items: s(L),
                            "item-title": "name",
                            "item-value": "name"
                          }, null, 8, ["modelValue", "items"])];
                        }),
                        _: 1
                      }), e(m, {
                        cols: "12"
                      }, {
                        default: n(function() {
                          return [b("div", null, v(s(u)("1810")) + ":", 1), e(N, {
                            modelValue: i.style.line.lineWeight,
                            "onUpdate:modelValue": r[2] || (r[2] = function(a) {
                              return i.style.line.lineWeight = a;
                            }),
                            items: D.value,
                            "item-title": "text",
                            "item-value": "value"
                          }, null, 8, ["modelValue", "items"])];
                        }),
                        _: 1
                      })];
                    }),
                    _: 1
                  })];
                }),
                _: 1
              }, 8, ["title"])];
            }),
            _: 1
          })];
        }),
        _: 1
      })])) : E("", !0);
    };
  }
});
var pt = {
  key: 0
};
const gt = /* @__PURE__ */ J({
  __name: "LeaderArrow",
  props: {
    style: {}
  },
  setup: function(d) {
    return function(l, o) {
      return l.style ? (x(), A("div", pt, [e(k, null, {
        default: n(function() {
          return [e(m, {
            cols: "12"
          }, {
            default: n(function() {
              return [e(z, {
                title: s(u)("4113")
              }, {
                default: n(function() {
                  return [e(k, null, {
                    default: n(function() {
                      return [e(m, {
                        cols: "12"
                      }, {
                        default: n(function() {
                          return [b("div", null, v(s(u)("4114")) + ":", 1), e(N, {
                            modelValue: l.style.arrow.symbol,
                            "onUpdate:modelValue": o[0] || (o[0] = function(t) {
                              return l.style.arrow.symbol = t;
                            }),
                            items: s(Me),
                            "item-title": "title",
                            "item-value": "value"
                          }, null, 8, ["modelValue", "items"])];
                        }),
                        _: 1
                      }), e(m, {
                        cols: "12"
                      }, {
                        default: n(function() {
                          return [b("div", null, v(s(u)("2275")) + ":", 1), e(I, {
                            modelValue: l.style.arrow.size,
                            "onUpdate:modelValue": o[1] || (o[1] = function(t) {
                              return l.style.arrow.size = t;
                            }),
                            modelModifiers: {
                              number: !0
                            },
                            type: "number",
                            min: "0",
                            step: "0.1"
                          }, null, 8, ["modelValue"])];
                        }),
                        _: 1
                      })];
                    }),
                    _: 1
                  })];
                }),
                _: 1
              }, 8, ["title"])];
            }),
            _: 1
          })];
        }),
        _: 1
      })])) : E("", !0);
    };
  }
});
var bt = {
  key: 0
};
const Vt = /* @__PURE__ */ J({
  __name: "LeaderGeneral",
  props: {
    style: {}
  },
  setup: function(d) {
    return function(l, o) {
      return l.style ? (x(), A("div", bt, [e(k, null, {
        default: n(function() {
          return [e(m, {
            cols: "12"
          }, {
            default: n(function() {
              return [e(z, {
                title: s(u)("4133")
              }, {
                default: n(function() {
                  return [e(k, null, {
                    default: n(function() {
                      return [e(m, {
                        cols: "12"
                      }, {
                        default: n(function() {
                          return [b("div", null, v(s(u)("2025")), 1), e(I, {
                            modelValue: l.style.name,
                            "onUpdate:modelValue": o[0] || (o[0] = function(t) {
                              return l.style.name = t;
                            })
                          }, null, 8, ["modelValue"])];
                        }),
                        _: 1
                      }), e(m, {
                        cols: "12"
                      }, {
                        default: n(function() {
                          return [b("div", null, v(s(u)("2100")), 1), e(I, {
                            modelValue: l.style.description,
                            "onUpdate:modelValue": o[1] || (o[1] = function(t) {
                              return l.style.description = t;
                            })
                          }, null, 8, ["modelValue"])];
                        }),
                        _: 1
                      })];
                    }),
                    _: 1
                  })];
                }),
                _: 1
              }, 8, ["title"])];
            }),
            _: 1
          })];
        }),
        _: 1
      }), e(k, {
        class: "mt-2"
      }, {
        default: n(function() {
          return [e(m, {
            cols: "12"
          }, {
            default: n(function() {
              return [e(vt, {
                style: le(l.style)
              }, null, 8, ["style"])];
            }),
            _: 1
          })];
        }),
        _: 1
      }), e(k, {
        class: "mt-2"
      }, {
        default: n(function() {
          return [e(m, {
            cols: "12"
          }, {
            default: n(function() {
              return [e(gt, {
                style: le(l.style)
              }, null, 8, ["style"])];
            }),
            _: 1
          })];
        }),
        _: 1
      })])) : E("", !0);
    };
  }
});
var St = {
  key: 0
};
const kt = /* @__PURE__ */ J({
  __name: "LeaderConstraints",
  props: {
    style: {}
  },
  setup: function(d) {
    return function(l, o) {
      return l.style ? (x(), A("div", St, [e(k, null, {
        default: n(function() {
          return [e(m, {
            cols: "12"
          }, {
            default: n(function() {
              return [e(z, {
                title: s(u)("4115")
              }, {
                default: n(function() {
                  return [e(k, {
                    class: "mt-2"
                  }, {
                    default: n(function() {
                      return [e(m, {
                        cols: "6"
                      }, {
                        default: n(function() {
                          return [e(Q, {
                            modelValue: l.style.constraints.enableMaxPoints,
                            "onUpdate:modelValue": o[0] || (o[0] = function(t) {
                              return l.style.constraints.enableMaxPoints = t;
                            }),
                            label: s(u)("4116")
                          }, null, 8, ["modelValue", "label"])];
                        }),
                        _: 1
                      }), e(m, {
                        cols: "6"
                      }, {
                        default: n(function() {
                          return [e(I, {
                            modelValue: l.style.constraints.maxPoints,
                            "onUpdate:modelValue": o[1] || (o[1] = function(t) {
                              return l.style.constraints.maxPoints = t;
                            }),
                            modelModifiers: {
                              number: !0
                            },
                            type: "number",
                            min: "0",
                            step: "1",
                            disabled: !l.style.constraints.enableMaxPoints
                          }, null, 8, ["modelValue", "disabled"])];
                        }),
                        _: 1
                      })];
                    }),
                    _: 1
                  }), e(k, {
                    class: "mt-4"
                  }, {
                    default: n(function() {
                      return [e(m, {
                        cols: "6"
                      }, {
                        default: n(function() {
                          return [e(Q, {
                            modelValue: l.style.constraints.enableFirstSegmentAngle,
                            "onUpdate:modelValue": o[2] || (o[2] = function(t) {
                              return l.style.constraints.enableFirstSegmentAngle = t;
                            }),
                            label: s(u)("1661")
                          }, null, 8, ["modelValue", "label"])];
                        }),
                        _: 1
                      }), e(m, {
                        cols: "6"
                      }, {
                        default: n(function() {
                          return [e(I, {
                            modelValue: l.style.constraints.firstSegmentAngle,
                            "onUpdate:modelValue": o[3] || (o[3] = function(t) {
                              return l.style.constraints.firstSegmentAngle = t;
                            }),
                            modelModifiers: {
                              number: !0
                            },
                            type: "number",
                            min: "0",
                            max: "360",
                            step: "1",
                            disabled: !l.style.constraints.enableFirstSegmentAngle
                          }, null, 8, ["modelValue", "disabled"])];
                        }),
                        _: 1
                      })];
                    }),
                    _: 1
                  }), e(k, {
                    class: "mt-4"
                  }, {
                    default: n(function() {
                      return [e(m, {
                        cols: "6"
                      }, {
                        default: n(function() {
                          return [e(Q, {
                            modelValue: l.style.constraints.enableSecondSegmentAngle,
                            "onUpdate:modelValue": o[4] || (o[4] = function(t) {
                              return l.style.constraints.enableSecondSegmentAngle = t;
                            }),
                            label: s(u)("1662")
                          }, null, 8, ["modelValue", "label"])];
                        }),
                        _: 1
                      }), e(m, {
                        cols: "6"
                      }, {
                        default: n(function() {
                          return [e(I, {
                            modelValue: l.style.constraints.secondSegmentAngle,
                            "onUpdate:modelValue": o[5] || (o[5] = function(t) {
                              return l.style.constraints.secondSegmentAngle = t;
                            }),
                            modelModifiers: {
                              number: !0
                            },
                            type: "number",
                            min: "0",
                            max: "360",
                            step: "1",
                            disabled: !l.style.constraints.enableSecondSegmentAngle
                          }, null, 8, ["modelValue", "disabled"])];
                        }),
                        _: 1
                      })];
                    }),
                    _: 1
                  })];
                }),
                _: 1
              }, 8, ["title"])];
            }),
            _: 1
          })];
        }),
        _: 1
      })])) : E("", !0);
    };
  }
});
var Lt = {
  key: 0
};
const ht = /* @__PURE__ */ J({
  __name: "LeaderStructure",
  props: {
    style: {}
  },
  setup: function(d) {
    return function(l, o) {
      return l.style ? (x(), A("div", Lt, [e(k, null, {
        default: n(function() {
          return [e(m, {
            cols: "12"
          }, {
            default: n(function() {
              return [e(kt, {
                style: le(l.style)
              }, null, 8, ["style"])];
            }),
            _: 1
          })];
        }),
        _: 1
      }), e(k, null, {
        default: n(function() {
          return [e(m, {
            cols: "12"
          }, {
            default: n(function() {
              return [e(z, {
                title: s(u)("4140")
              }, {
                default: n(function() {
                  return [e(k, null, {
                    default: n(function() {
                      return [e(m, {
                        cols: "12"
                      }, {
                        default: n(function() {
                          return [e(Q, {
                            modelValue: l.style.baseline.autoInclude,
                            "onUpdate:modelValue": o[0] || (o[0] = function(t) {
                              return l.style.baseline.autoInclude = t;
                            }),
                            label: s(u)("4141")
                          }, null, 8, ["modelValue", "label"])];
                        }),
                        _: 1
                      }), e(m, {
                        cols: "12"
                      }, {
                        default: n(function() {
                          return [e(I, {
                            modelValue: l.style.baseline.distance,
                            "onUpdate:modelValue": o[1] || (o[1] = function(t) {
                              return l.style.baseline.distance = t;
                            }),
                            modelModifiers: {
                              number: !0
                            },
                            type: "number",
                            min: "0",
                            step: "1"
                          }, {
                            prepend: n(function() {
                              return [b("div", null, v(s(u)("4142")) + ":", 1)];
                            }),
                            _: 1
                          }, 8, ["modelValue"])];
                        }),
                        _: 1
                      })];
                    }),
                    _: 1
                  })];
                }),
                _: 1
              }, 8, ["title"])];
            }),
            _: 1
          })];
        }),
        _: 1
      })])) : E("", !0);
    };
  }
});
var Ct = {
  key: 0
}, Wt = {
  class: "mb-2"
}, Bt = {
  class: "mb-2"
}, Dt = {
  class: "mb-2"
};
const wt = /* @__PURE__ */ J({
  __name: "LeaderContent",
  props: {
    style: {}
  },
  setup: function(d) {
    var l = d;
    Y(function() {
      return l.style;
    }, function(i) {
      var r;
      i != null && (r = i.content) !== null && r !== void 0 && r.connection && (i.content.connection.horizontal || (i.content.connection.horizontal = !1));
    }, {
      immediate: !0
    });
    var o = function(r) {
      var a = he(r), y = Ce(), M = y.createColor, w = y.colorSelectList, O = w.find(function(c) {
        if (c.method === a.method) {
          if (c.method === B.kByLayer || c.method === B.kByBlock || c.method === B.kByACI && c.index === a.colorIndex)
            return !0;
          if (c.method === B.kByColor) {
            var C = De(c.color);
            return C.red() === a.red && C.green() === a.green && C.blue() === a.blue;
          }
        }
        return !1;
      });
      if (!O) {
        var h = We(a);
        O = M({
          color: h,
          name: h,
          method: a.method,
          index: a.colorIndex,
          n: a.n
        });
      }
      return O;
    }, t = function(r) {
      var a;
      if (!(!((a = l.style) !== null && a !== void 0 && a.content.mtext) || !r)) {
        var y = null;
        r.method === B.kNone ? y = $.kBylayer : r.method === B.kByColor ? y = parseInt(r.color.replace("#", ""), 16) : r.method === B.kByLayer ? y = $.kBylayer : r.method === B.kByBlock ? y = $.kByblock : r.index !== -1 && (y = r.index), l.style.content.mtext.textColor = y;
      }
    }, L = function(r) {
      var a;
      if (!(!((a = l.style) !== null && a !== void 0 && (a = a.content) !== null && a !== void 0 && a.block) || !r)) {
        var y = null;
        r.method === B.kNone ? y = $.kBylayer : r.method === B.kByColor ? y = parseInt(r.color.replace("#", ""), 16) : r.method === B.kByLayer ? y = $.kBylayer : r.method === B.kByBlock ? y = $.kByblock : r.index !== -1 && (y = r.index), l.style.content.block.color = y;
      }
    }, D = je(), V = D.textStyles, U = D.initList;
    return function(i, r) {
      return i.style ? (x(), A("div", Ct, [e(k, null, {
        default: n(function() {
          return [e(m, {
            cols: "12"
          }, {
            default: n(function() {
              return [e(N, {
                modelValue: i.style.content.type,
                "onUpdate:modelValue": r[0] || (r[0] = function(a) {
                  return i.style.content.type = a;
                }),
                items: s($e),
                "item-title": "title",
                "item-value": "value"
              }, {
                prepend: n(function() {
                  return [b("div", null, v(s(u)("4117")) + ":", 1)];
                }),
                _: 1
              }, 8, ["modelValue", "items"])];
            }),
            _: 1
          })];
        }),
        _: 1
      }), i.style.content.type === s(ne).MText && i.style.content.mtext ? (x(), F(k, {
        key: 0,
        class: "mt-4"
      }, {
        default: n(function() {
          return [e(m, {
            cols: "12"
          }, {
            default: n(function() {
              return [e(z, {
                title: s(u)("4118")
              }, {
                default: n(function() {
                  return [e(k, null, {
                    default: n(function() {
                      return [e(m, {
                        cols: "12"
                      }, {
                        default: n(function() {
                          return [b("div", null, v(s(u)("2371")) + ":", 1), e(N, {
                            modelValue: i.style.content.mtext.textStyle,
                            "onUpdate:modelValue": r[1] || (r[1] = function(a) {
                              return i.style.content.mtext.textStyle = a;
                            }),
                            "onUpdate:menu": r[2] || (r[2] = function(a) {
                              return a && s(U)();
                            }),
                            items: s(V)
                          }, null, 8, ["modelValue", "items"])];
                        }),
                        _: 1
                      }), e(m, {
                        cols: "12"
                      }, {
                        default: n(function() {
                          return [b("div", null, v(s(u)("2372")) + ":", 1), e(I, {
                            modelValue: i.style.content.mtext.textHeight,
                            "onUpdate:modelValue": r[3] || (r[3] = function(a) {
                              return i.style.content.mtext.textHeight = a;
                            }),
                            modelModifiers: {
                              number: !0
                            },
                            type: "number",
                            min: "0",
                            step: "0.1"
                          }, null, 8, ["modelValue"])];
                        }),
                        _: 1
                      }), e(m, {
                        cols: "12"
                      }, {
                        default: n(function() {
                          return [b("div", null, v(s(u)("4119")) + ":", 1), e(ie, {
                            "model-value": o(i.style.content.mtext.textColor),
                            onChange: t
                          }, null, 8, ["model-value"])];
                        }),
                        _: 1
                      }), e(m, {
                        cols: "12",
                        class: "d-flex"
                      }, {
                        default: n(function() {
                          return [e(Q, {
                            class: "mr-4",
                            modelValue: i.style.content.mtext.alwaysLeftAlign,
                            "onUpdate:modelValue": r[4] || (r[4] = function(a) {
                              return i.style.content.mtext.alwaysLeftAlign = a;
                            }),
                            label: s(u)("4120")
                          }, null, 8, ["modelValue", "label"]), e(Q, {
                            modelValue: i.style.content.mtext.textFrame,
                            "onUpdate:modelValue": r[5] || (r[5] = function(a) {
                              return i.style.content.mtext.textFrame = a;
                            }),
                            label: s(u)("4121")
                          }, null, 8, ["modelValue", "label"])];
                        }),
                        _: 1
                      })];
                    }),
                    _: 1
                  })];
                }),
                _: 1
              }, 8, ["title"])];
            }),
            _: 1
          })];
        }),
        _: 1
      })) : E("", !0), i.style.content.type === s(ne).Block && i.style.content.block ? (x(), F(k, {
        key: 1,
        class: "mt-4"
      }, {
        default: n(function() {
          return [e(m, {
            cols: "12"
          }, {
            default: n(function() {
              return [e(z, {
                title: s(u)("4122")
              }, {
                default: n(function() {
                  return [e(k, {
                    class: "mt-2"
                  }, {
                    default: n(function() {
                      return [e(m, {
                        cols: "12"
                      }, {
                        default: n(function() {
                          return [b("div", Wt, v(s(u)("4123")), 1), e(N, {
                            modelValue: i.style.content.block.source,
                            "onUpdate:modelValue": r[6] || (r[6] = function(a) {
                              return i.style.content.block.source = a;
                            }),
                            items: [].concat(se(s(Ae)), se(s(Je)().map(function(a) {
                              return {
                                title: a,
                                value: a
                              };
                            })))
                          }, null, 8, ["modelValue", "items"])];
                        }),
                        _: 1
                      }), e(m, {
                        cols: "12"
                      }, {
                        default: n(function() {
                          return [b("div", Bt, v(s(u)("4124")), 1), e(N, {
                            modelValue: i.style.content.block.attachment,
                            "onUpdate:modelValue": r[7] || (r[7] = function(a) {
                              return i.style.content.block.attachment = a;
                            }),
                            items: s(Re)
                          }, null, 8, ["modelValue", "items"])];
                        }),
                        _: 1
                      }), e(m, {
                        cols: "12",
                        class: ""
                      }, {
                        default: n(function() {
                          return [b("div", null, v(s(u)("210")) + ":", 1), e(ie, {
                            "model-value": o(i.style.content.block.color),
                            onChange: L
                          }, null, 8, ["model-value"])];
                        }),
                        _: 1
                      }), e(m, {
                        cols: "12"
                      }, {
                        default: n(function() {
                          return [b("div", Dt, v(s(u)("1686")), 1), e(I, {
                            modelValue: i.style.content.block.scale,
                            "onUpdate:modelValue": r[8] || (r[8] = function(a) {
                              return i.style.content.block.scale = a;
                            }),
                            modelModifiers: {
                              number: !0
                            },
                            type: "number",
                            min: "0"
                          }, null, 8, ["modelValue"])];
                        }),
                        _: 1
                      })];
                    }),
                    _: 1
                  })];
                }),
                _: 1
              }, 8, ["title"])];
            }),
            _: 1
          })];
        }),
        _: 1
      })) : E("", !0), i.style.content.type === s(ne).MText && i.style.content.mtext ? (x(), F(k, {
        key: 2,
        class: "mt-4"
      }, {
        default: n(function() {
          return [e(m, {
            cols: "12"
          }, {
            default: n(function() {
              return [e(z, {
                title: s(u)("4125")
              }, {
                default: n(function() {
                  return [e(nt, {
                    modelValue: i.style.content.connection.horizontal,
                    "onUpdate:modelValue": r[9] || (r[9] = function(a) {
                      return i.style.content.connection.horizontal = a;
                    })
                  }, {
                    default: n(function() {
                      return [e(Ve, {
                        class: "mr-4",
                        label: s(u)("4126"),
                        value: !0
                      }, null, 8, ["label"]), e(Ve, {
                        label: s(u)("4127"),
                        value: !1
                      }, null, 8, ["label"])];
                    }),
                    _: 1
                  }, 8, ["modelValue"]), i.style.content.connection.horizontal ? E("", !0) : (x(), F(k, {
                    key: 0,
                    class: "mt-4"
                  }, {
                    default: n(function() {
                      return [e(m, {
                        cols: "12"
                      }, {
                        default: n(function() {
                          return [b("div", null, v(s(u)("4128")) + ":", 1), e(N, {
                            modelValue: i.style.content.connection.topPosition,
                            "onUpdate:modelValue": r[10] || (r[10] = function(a) {
                              return i.style.content.connection.topPosition = a;
                            }),
                            items: s(Fe),
                            "item-title": "title",
                            "item-value": "value"
                          }, null, 8, ["modelValue", "items"])];
                        }),
                        _: 1
                      }), e(m, {
                        cols: "12"
                      }, {
                        default: n(function() {
                          return [b("div", null, v(s(u)("4129")) + ":", 1), e(N, {
                            modelValue: i.style.content.connection.bottomPosition,
                            "onUpdate:modelValue": r[11] || (r[11] = function(a) {
                              return i.style.content.connection.bottomPosition = a;
                            }),
                            items: s(ze),
                            "item-title": "title",
                            "item-value": "value"
                          }, null, 8, ["modelValue", "items"])];
                        }),
                        _: 1
                      })];
                    }),
                    _: 1
                  })), i.style.content.connection.horizontal ? (x(), F(k, {
                    key: 1,
                    class: "mt-4"
                  }, {
                    default: n(function() {
                      return [e(m, {
                        cols: "6"
                      }, {
                        default: n(function() {
                          return [b("div", null, v(s(u)("4130")), 1), e(N, {
                            modelValue: i.style.content.connection.leftPosition,
                            "onUpdate:modelValue": r[12] || (r[12] = function(a) {
                              return i.style.content.connection.leftPosition = a;
                            }),
                            items: s(pe),
                            "item-title": "title",
                            "item-value": "value"
                          }, null, 8, ["modelValue", "items"])];
                        }),
                        _: 1
                      }), e(m, {
                        cols: "6"
                      }, {
                        default: n(function() {
                          return [b("div", null, v(s(u)("4131")), 1), e(N, {
                            modelValue: i.style.content.connection.rightPosition,
                            "onUpdate:modelValue": r[13] || (r[13] = function(a) {
                              return i.style.content.connection.rightPosition = a;
                            }),
                            items: s(pe),
                            "item-title": "title",
                            "item-value": "value"
                          }, null, 8, ["modelValue", "items"])];
                        }),
                        _: 1
                      })];
                    }),
                    _: 1
                  })) : E("", !0), e(k, null, {
                    default: n(function() {
                      return [e(m, null, {
                        default: n(function() {
                          return [b("div", null, v(s(u)("4132")) + ":", 1), e(I, {
                            modelValue: i.style.content.connection.gap,
                            "onUpdate:modelValue": r[14] || (r[14] = function(a) {
                              return i.style.content.connection.gap = a;
                            }),
                            modelModifiers: {
                              number: !0
                            },
                            type: "number",
                            min: "0",
                            step: "0.1"
                          }, null, 8, ["modelValue"])];
                        }),
                        _: 1
                      })];
                    }),
                    _: 1
                  })];
                }),
                _: 1
              }, 8, ["title"])];
            }),
            _: 1
          })];
        }),
        _: 1
      })) : E("", !0)])) : E("", !0);
    };
  }
});
var Ot = {
  key: 0,
  class: "pa-3"
};
const _t = /* @__PURE__ */ J({
  __name: "index",
  props: {
    modelValue: {
      type: Boolean
    },
    style: {},
    isCreating: {
      type: Boolean
    }
  },
  emits: ["update:modelValue", "save", "cancel"],
  setup: function(d, l) {
    var o = l.emit, t = fe(), L = d, D = o, V = j(null), U = j(0);
    Y(function() {
      return L.style;
    }, function(w) {
      if (w && (V.value = JSON.parse(JSON.stringify(w)), V.value && V.value.content.type === ne.MText && !V.value.content.mtext)) {
        var O = Ke();
        V.value.content.mtext = {
          defaultText: O.children,
          textStyle: "Standard",
          textAngle: 0,
          textColor: 256,
          textHeight: 2.5,
          alwaysLeftAlign: !1,
          textFrame: !1
        };
      }
    }, {
      immediate: !0
    });
    var i = G(function() {
      return L.isCreating ? u("创建引线样式") : u("修改引线样式");
    }), r = G(function() {
      return [{
        tab: u("引线格式"),
        component: function() {
          return oe(Vt, {
            style: V.value
          });
        }
      }, {
        tab: u("引线结构"),
        component: function() {
          return oe(ht, {
            style: V.value
          });
        }
      }, {
        tab: u("内容"),
        component: function() {
          return oe(wt, {
            style: V.value
          });
        }
      }];
    }), a = function() {
      if (!V.value) {
        t.error(u("无效的样式数据"));
        return;
      }
      if (!V.value.name.trim()) {
        t.warning(u("样式名称不能为空"));
        return;
      }
      D("save", V.value);
    }, y = function() {
      D("cancel"), D("update:modelValue", !1);
    }, M = [{
      name: u("确定"),
      fun: a,
      primary: !0
    }, {
      name: u("取消"),
      fun: y
    }];
    return function(w, O) {
      return x(), F(de, {
        title: i.value,
        "model-value": w.modelValue,
        "onUpdate:modelValue": O[1] || (O[1] = function(h) {
          return D("update:modelValue", h);
        }),
        "max-width": "500",
        persistent: "",
        "footer-btn-list": M
      }, {
        default: n(function() {
          return [V.value ? (x(), A("div", Ot, [e(Ge, {
            items: r.value,
            modelValue: U.value,
            "onUpdate:modelValue": O[0] || (O[0] = function(h) {
              return U.value = h;
            }),
            height: 500,
            isTabMinWidthAuto: ""
          }, null, 8, ["items", "modelValue"])])) : E("", !0)];
        }),
        _: 1
      }, 8, ["title", "model-value"]);
    };
  }
}), xt = /* @__PURE__ */ Be(_t, [["__scopeId", "data-v-196aa0c4"]]);
var Ut = ["description"];
function ke(g, d) {
  var l = Object.keys(g);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(g);
    d && (o = o.filter(function(t) {
      return Object.getOwnPropertyDescriptor(g, t).enumerable;
    })), l.push.apply(l, o);
  }
  return l;
}
function te(g) {
  for (var d = 1; d < arguments.length; d++) {
    var l = arguments[d] != null ? arguments[d] : {};
    d % 2 ? ke(Object(l), !0).forEach(function(o) {
      Le(g, o, l[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(g, Object.getOwnPropertyDescriptors(l)) : ke(Object(l)).forEach(function(o) {
      Object.defineProperty(g, o, Object.getOwnPropertyDescriptor(l, o));
    });
  }
  return g;
}
var Nt = {
  class: "px-3 pt-2"
}, Tt = {
  class: "mt-3"
};
const Pt = /* @__PURE__ */ J({
  __name: "index",
  setup: function(d) {
    var l = fe(), o = He(), t = Ze({
      // 样式列表
      styleList: [],
      // 当前选中的样式
      currentStyle: null,
      // 当前编辑的样式（用于编辑对话框）
      editingStyle: null,
      // 是否为新建模式
      isCreating: !1,
      // 对话框状态
      showEditDialog: !1,
      showInputDialog: !1,
      // 输入对话框配置
      inputDialog: {
        title: "",
        label: "",
        defaultValue: ""
      }
    }), L = dt(), D = L.styleList, V = L.currentStyle, U = L.refreshStyleList, i = L.deleteStyle, r = L.applyStyle, a = L.renameStyle;
    Y(D, function(_) {
      t.styleList = se(_);
    }, {
      immediate: !0
    }), Y(V, function(_) {
      _ ? t.currentStyle = te({}, _) : t.currentStyle = null;
    }, {
      immediate: !0
    });
    var y = G(function() {
      return ue.value;
    }), M = G(function() {
      return y.value;
    }), w = j(0), O = function(f) {
      w.value = f, t.currentStyle = t.styleList[f];
    }, h = j([u("4091"), u("4092")]), c = j(h.value[0]), C = G(function() {
      return t.currentStyle && t.currentStyle.name !== p.defaultName;
    }), K = function() {
      if (t.currentStyle) {
        var f = r();
        f && (ue.value = t.currentStyle.name, l.success(u("4093") + " " + t.currentStyle.name + " " + u("4094")));
      }
    }, ee = function() {
      var f = p.get(p.defaultName);
      f && (t.editingStyle = te(te({}, JSON.parse(JSON.stringify(f))), {}, {
        name: ye("NewStyle"),
        description: u("2021")
      }), t.isCreating = !0, t.showEditDialog = !0);
    }, ce = 1, ye = function(f) {
      var W = "".concat(f).concat(ce);
      return ce++, W;
    }, we = function() {
      t.currentStyle && (t.editingStyle = JSON.parse(JSON.stringify(t.currentStyle)), t.isCreating = !1, t.showEditDialog = !0);
    }, Oe = function() {
      if (t.currentStyle) {
        if (t.editingStyle = JSON.parse(JSON.stringify(t.currentStyle)), t.editingStyle) {
          var f = "Copy_of_" + t.currentStyle.name;
          t.editingStyle.name = ye(f), t.editingStyle.description = u("2022") + " " + t.currentStyle.name;
        }
        t.isCreating = !0, t.showEditDialog = !0;
      }
    }, _e = function() {
      t.currentStyle && t.currentStyle.name !== p.defaultName && (t.inputDialog = {
        title: u("2023"),
        label: u("2024"),
        defaultValue: t.currentStyle.name
      }, t.showInputDialog = !0);
    }, xe = function(f) {
      if (f && f.trim() !== "" && t.currentStyle) {
        var W = t.styleList.find(function(re) {
          return re.name.toLowerCase() === f.toLowerCase() && re.name !== t.currentStyle.name;
        });
        if (W) {
          l.warning(u("2025") + ' "' + f + '" ' + u("2026"));
          return;
        }
        var R = t.currentStyle.name, X = a(R, f);
        X ? (U(), y.value === R && (ue.value = f), l.success(u("4095"))) : l.error(u("4096"));
      }
    }, Ue = function() {
      t.currentStyle && t.currentStyle.name !== p.defaultName && o.open({
        title: u("2027"),
        text: u("2028") + ' "' + t.currentStyle.name + '" ' + u("4097"),
        defineTitle: u("1829"),
        cancelTitle: u("201"),
        define: function() {
          if (t.currentStyle) {
            var W = i(t.currentStyle);
            W ? l.success(u("4098")) : l.error(u("4099"));
          }
        }
      });
    }, Ne = function(f) {
      if (t.isCreating) {
        var W = t.styleList.find(function(X) {
          return X.name.toLowerCase() === f.name.toLowerCase() && (t.currentStyle ? X.name !== t.currentStyle.name : !0);
        });
        if (W) {
          l.warning(u("2025") + ' "' + f.name + '" ' + u("2026"));
          return;
        }
      }
      t.editingStyle = f, f.description;
      var R = Qe(f, Ut);
      p.set(f.name, R), U(), t.currentStyle = te({}, f), t.showEditDialog = !1, t.isCreating ? l.success(u("4100")) : l.success(u("4101"));
    }, Te = function() {
      t.showEditDialog = !1;
    }, Pe = [{
      name: u("2006"),
      fun: function() {
        return qe(!1);
      }
    }];
    return function(_, f) {
      return x(), A(ge, null, [e(de, {
        title: s(u)("4102"),
        modelValue: s(ae),
        "onUpdate:modelValue": f[1] || (f[1] = function(W) {
          return tt(ae) ? ae.value = W : null;
        }),
        "max-width": "400",
        footerBtnList: Pe
      }, {
        default: n(function() {
          return [b("div", Nt, [b("p", null, v(s(u)("4103") + ":" + M.value), 1), e(k, {
            class: "mt-1"
          }, {
            default: n(function() {
              return [e(m, {
                cols: 6,
                "align-self": "start"
              }, {
                default: n(function() {
                  return [b("p", null, [P(v(s(u)("1624")) + "(", 1), f[4] || (f[4] = b("span", {
                    class: "text-decoration-underline"
                  }, "S", -1)), f[5] || (f[5] = P("):", -1))]), e(lt, {
                    density: "compact",
                    class: "list-border overflow-y py-0",
                    height: "260"
                  }, {
                    default: n(function() {
                      return [(x(!0), A(ge, null, Ye(c.value === h.value[0] ? t.styleList : t.styleList.filter(function(W) {
                        return W.name === M.value;
                      }), function(W, R) {
                        return x(), F(rt, {
                          key: R + W.name,
                          onClick: function(re) {
                            return O(R);
                          },
                          class: et([w.value === R ? "bg-light-blue-darken-2" : "", "pa-0 list-item"]),
                          "min-height": "24",
                          height: "24"
                        }, {
                          default: n(function() {
                            return [e(ut, {
                              textContent: v(W.name)
                            }, null, 8, ["textContent"])];
                          }),
                          _: 2
                        }, 1032, ["onClick", "class"]);
                      }), 128))];
                    }),
                    _: 1
                  }), b("p", Tt, [P(v(s(u)("1973")) + "(", 1), f[6] || (f[6] = b("span", {
                    class: "text-decoration-underline"
                  }, "L", -1)), f[7] || (f[7] = P("):", -1))]), e(N, {
                    class: "",
                    modelValue: c.value,
                    "onUpdate:modelValue": f[0] || (f[0] = function(W) {
                      return c.value = W;
                    }),
                    items: h.value
                  }, null, 8, ["modelValue", "items"])];
                }),
                _: 1
              }), e(m, {
                cols: 6,
                "align-self": "start"
              }, {
                default: n(function() {
                  return [e(H, {
                    class: "mt-5 w-100",
                    onClick: K
                  }, {
                    default: n(function() {
                      return [e(q, {
                        "key-name": "U"
                      }, {
                        default: n(function() {
                          return [P(v(s(u)("213")), 1)];
                        }),
                        _: 1
                      })];
                    }),
                    _: 1
                  }), e(H, {
                    class: "mt-2 w-100",
                    onClick: ee
                  }, {
                    default: n(function() {
                      return [e(q, {
                        "key-name": "N"
                      }, {
                        default: n(function() {
                          return [P(v(s(u)("181")), 1)];
                        }),
                        _: 1
                      }), e(Z, {
                        icon: "class:iconfont more"
                      })];
                    }),
                    _: 1
                  }), e(H, {
                    class: "mt-2 w-100",
                    onClick: we
                  }, {
                    default: n(function() {
                      return [e(q, {
                        "key-name": "M"
                      }, {
                        default: n(function() {
                          return [P(v(s(u)("214")), 1)];
                        }),
                        _: 1
                      }), e(Z, {
                        icon: "class:iconfont more"
                      })];
                    }),
                    _: 1
                  }), e(H, {
                    class: "mt-2 w-100",
                    onClick: Ue,
                    disabled: !C.value
                  }, {
                    default: n(function() {
                      return [e(q, {
                        "key-name": "D"
                      }, {
                        default: n(function() {
                          return [P(v(s(u)("205")), 1)];
                        }),
                        _: 1
                      }), e(Z, {
                        icon: "class:iconfont more"
                      })];
                    }),
                    _: 1
                  }, 8, ["disabled"]), e(H, {
                    class: "mt-2 w-100",
                    onClick: _e,
                    disabled: !C.value
                  }, {
                    default: n(function() {
                      return [e(q, {
                        "key-name": "R"
                      }, {
                        default: n(function() {
                          return [P(v(s(u)("4104")), 1)];
                        }),
                        _: 1
                      }), e(Z, {
                        icon: "class:iconfont more"
                      })];
                    }),
                    _: 1
                  }, 8, ["disabled"]), e(H, {
                    class: "mt-2 w-100",
                    onClick: Oe
                  }, {
                    default: n(function() {
                      return [e(q, {
                        "key-name": "E"
                      }, {
                        default: n(function() {
                          return [P(v(s(u)("4105")), 1)];
                        }),
                        _: 1
                      }), e(Z, {
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
          })])];
        }),
        _: 1
      }, 8, ["title", "modelValue"]), e(ct, {
        modelValue: t.showInputDialog,
        "onUpdate:modelValue": f[2] || (f[2] = function(W) {
          return t.showInputDialog = W;
        }),
        title: t.inputDialog.title,
        label: t.inputDialog.label,
        "default-value": t.inputDialog.defaultValue,
        onConfirm: xe
      }, null, 8, ["modelValue", "title", "label", "default-value"]), e(xt, {
        modelValue: t.showEditDialog,
        "onUpdate:modelValue": f[3] || (f[3] = function(W) {
          return t.showEditDialog = W;
        }),
        style: le(t.editingStyle),
        "is-creating": t.isCreating,
        onSave: Ne,
        onCancel: Te
      }, null, 8, ["modelValue", "style", "is-creating"])], 64);
    };
  }
}), Jt = /* @__PURE__ */ Be(Pt, [["__scopeId", "data-v-f0c566cf"]]);
export {
  Jt as default
};
