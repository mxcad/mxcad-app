import { B as c, l as ce, bn as ue, I as ge, t as r, $ as Y, aI as se, x as ee, X as re, b2 as he, u as Se, b3 as be, R as me, H as Ce, bo as R, bp as Z, h as Ve } from "./lib.js";
import { f as G, g as W, d as ie, h as ve, E as _e, m as oe, o as A, w as h, c as X, s as ke, l as u, a as d, t as g, G as f, q as N, F as ae, b as ye, ae as xe, i as ne, ap as we, Q as Oe, n as De } from "./vue.js";
import { A as P, C as O } from "./mxcad.js";
import { s as Ee } from "./pinia.js";
import { C as Le } from "./color.js";
import { i as q, j as I, V as U, _ as Ne, c as Be, b as pe, k as je, d as Ue } from "./vuetify.js";
function de(v, s) {
  var i = Object.keys(v);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(v);
    s && (n = n.filter(function(e) {
      return Object.getOwnPropertyDescriptor(v, e).enumerable;
    })), i.push.apply(i, n);
  }
  return i;
}
function D(v) {
  for (var s = 1; s < arguments.length; s++) {
    var i = arguments[s] != null ? arguments[s] : {};
    s % 2 ? de(Object(i), !0).forEach(function(n) {
      ce(v, n, i[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(v, Object.getOwnPropertyDescriptors(i)) : de(Object(i)).forEach(function(n) {
      Object.defineProperty(v, n, Object.getOwnPropertyDescriptor(i, n));
    });
  }
  return v;
}
var te = function() {
  try {
    return c.keys() || [c.defaultName];
  } catch (s) {
    return console.error("获取多线样式名称失败:", s), [c.defaultName];
  }
}, $e = function(s) {
  try {
    var i = te();
    return i.includes(s) ? (c.currentName = s, !0) : !1;
  } catch (n) {
    return console.error("设置当前多线样式失败:", n), !1;
  }
}, Me = function(s) {
  try {
    if (!s.name) return !1;
    var i = s.name;
    return c.set(i, s), !0;
  } catch (n) {
    return console.error("保存多线样式失败:", n), !1;
  }
}, Te = function(s) {
  try {
    if (s === c.defaultName)
      return !1;
    var i = te();
    return i.includes(s) ? (c.remove(s), !0) : !1;
  } catch (n) {
    return console.error("删除多线样式失败:", n), !1;
  }
}, Ie = function(s, i) {
  try {
    if (s === c.defaultName)
      return !1;
    var n = te();
    if (n.includes(i))
      return !1;
    if (n.includes(s)) {
      var e = c.get(s);
      return c.set(i, e), c.remove(s), c.currentName === s && (c.currentName = i), !0;
    }
    return !1;
  } catch (y) {
    return console.error("重命名多线样式失败:", y), !1;
  }
}, Pe = function() {
  var s = G([]), i = G(null), n = G(null), e = G(!1), y = function() {
    var p = te();
    s.value = p.map(function(k) {
      var w = c.get(k);
      return D(D({}, w), {}, {
        name: k
      });
    });
  };
  y();
  var B = W(function() {
    return s.value;
  }), E = c.get(c.defaultName);
  E && (i.value = D(D({}, E), {}, {
    name: c.defaultName
  })), E && (n.value = D(D({}, E), {}, {
    name: c.defaultName
  }));
  var $ = function(p) {
    n.value = JSON.parse(JSON.stringify(p)), e.value = !1;
  }, j = function() {
    var p = c.get(c.defaultName);
    c.defaultValue, p && (n.value = D(D({}, JSON.parse(JSON.stringify(p))), {}, {
      name: "",
      // 清空名称，需要用户输入
      description: "新建样式"
    })), e.value = !0;
  }, l = function(p) {
    n.value = JSON.parse(JSON.stringify(p)), n.value && (n.value.name = ""), e.value = !0;
  }, M = function() {
    e.value = !1;
  }, T = function() {
    if (!n.value || !n.value.name.trim())
      return !1;
    var p = Me(n.value);
    if (p) {
      y();
      var k = c.get(n.value.name);
      k && (i.value = D(D({}, k), {}, {
        name: n.value.name
      })), e.value = !1;
    }
    return p;
  }, F = function(p) {
    if (!p || p.name === c.defaultName) return !1;
    var k = Te(p.name);
    if (k) {
      var w;
      if (y(), ((w = i.value) === null || w === void 0 ? void 0 : w.name) === p.name) {
        var b = c.get(c.defaultName);
        b && (i.value = D(D({}, b), {}, {
          name: c.defaultName
        }));
      }
    }
    return k;
  }, K = function() {
    i.value && ($e(i.value.name), ue && ue(i.value.name));
  }, J = function() {
    n.value && n.value.elements && n.value.elements.length < 16 && n.value.elements.push({
      offset: 0,
      color: P.kBylayer,
      lineType: "ByLayer"
    });
  }, H = function(p) {
    n.value && n.value.elements && n.value.elements.length > 1 && n.value.elements.splice(p, 1);
  }, Q = function(p, k) {
    var w = Ie(p, k);
    return w && y(), w;
  };
  return {
    styleList: B,
    currentStyle: i,
    editingStyle: n,
    isCreating: e,
    startEditing: $,
    startCreating: j,
    cancelEditing: M,
    saveStyle: T,
    deleteStyle: F,
    applyStyle: K,
    addElement: J,
    removeElement: H,
    extendStyle: l,
    renameStyle: Q,
    refreshStyleList: y
  };
}, Ae = {
  key: 0,
  class: "d-flex flex-column pa-4"
}, Je = {
  class: "mb-4"
}, Re = {
  class: "mb-2"
}, ze = {
  class: "mb-2"
}, Fe = {
  class: "d-flex"
}, Ke = {
  class: "flex-grow-1 flex-shrink-0",
  style: {
    width: "40%"
  }
}, qe = {
  class: "mb-2"
}, Ge = {
  class: "d-flex mb-2"
}, We = {
  class: "d-flex align-center"
}, He = {
  class: "mr-2"
}, Qe = {
  class: "d-flex mb-2"
}, Xe = {
  class: "d-flex align-center"
}, Ye = {
  class: "mr-2"
}, Ze = {
  class: "d-flex mb-2"
}, et = {
  class: "d-flex align-center"
}, tt = {
  class: "mr-2"
}, lt = {
  class: "ml-4 flex-grow-0 flex-shrink-0",
  style: {
    width: "60%"
  }
}, nt = {
  class: "d-flex justify-space-between align-center mb-2"
}, at = {
  style: {
    width: "15%"
  }
}, rt = {
  style: {
    width: "30%"
  }
}, it = {
  style: {
    width: "30%"
  }
}, ot = {
  style: {
    width: "15%"
  }
};
const ut = /* @__PURE__ */ ie({
  __name: "index",
  props: {
    modelValue: {
      type: Boolean
    },
    style: {},
    isCreate: {
      type: Boolean
    }
  },
  emits: ["update:modelValue", "save", "cancel"],
  setup: function(s, i) {
    var n = i.emit, e = s, y = n, B = ge(), E = Ee(B), $ = E.lineTypeList, j = G(), l = ve({
      // 当前编辑的样式（深拷贝）
      style: {},
      // 是否为创建模式
      isCreating: e.isCreate,
      // 对话框是否已初始化
      initialized: !1
    }), M = W(function() {
      if (l.isCreating) {
        var b;
        return r("2303") + ": " + (((b = l.style) === null || b === void 0 ? void 0 : b.name) || "");
      } else {
        var t;
        return r("2304") + ": " + (((t = l.style) === null || t === void 0 ? void 0 : t.name) || "");
      }
    }), T = function() {
      e.modelValue && !l.initialized && (l.style = JSON.parse(JSON.stringify(e.style)), l.isCreating = e.isCreate, l.initialized = !0);
    }, F = function() {
      l.initialized = !1;
    };
    _e(function() {
      e.modelValue ? T() : F();
    });
    var K = function(t) {
      var a;
      if (!(!((a = l.style) !== null && a !== void 0 && a.fill) || !t)) {
        var V = null;
        t.method === O.kNone ? V = P.kBylayer : t.method === O.kByColor ? V = parseInt(t.color.replace("#", ""), 16) : t.method === O.kByLayer ? V = P.kBylayer : t.method === O.kByBlock ? V = P.kByblock : t.index !== -1 && (V = t.index), l.style.fill.color = V;
      }
    }, J = function(t, a) {
      var V;
      if (!(!((V = l.style) !== null && V !== void 0 && V.elements) || !t)) {
        var x = null;
        t.method === O.kNone ? x = P.kBylayer : t.method === O.kByColor ? x = parseInt(t.color.replace("#", ""), 16) : t.method === O.kByLayer ? x = P.kBylayer : t.method === O.kByBlock ? x = P.kByblock : t.index !== -1 && (x = t.index), l.style.elements[a].color = x;
      }
    }, H = function() {
      var t;
      (t = l.style) !== null && t !== void 0 && t.elements && l.style.elements.length < 16 && l.style.elements.push({
        offset: 0,
        color: P.kBylayer,
        lineType: "ByLayer"
      });
    }, Q = function(t) {
      var a;
      (a = l.style) !== null && a !== void 0 && a.elements && l.style.elements.length > 1 && l.style.elements.splice(t, 1);
    }, _ = function(t) {
      var a = he(t), V = Se(), x = V.createColor, m = V.colorSelectList, o = m.find(function(S) {
        if (S.method === a.method) {
          if (S.method === O.kByLayer || S.method === O.kByBlock || S.method === O.kByACI && S.index === a.colorIndex)
            return !0;
          if (S.method === O.kByColor) {
            var L = Le(S.color);
            return L.red() === a.red && L.green() === a.green && L.blue() === a.blue;
          }
        }
        return !1;
      });
      if (!o) {
        var C = be(a);
        o = x({
          color: C,
          name: C,
          method: a.method,
          index: a.colorIndex,
          n: a.n
        });
      }
      return o;
    }, p = function() {
      y("save", l.style), y("update:modelValue", !1);
    }, k = function() {
      y("cancel"), y("update:modelValue", !1);
    }, w = [{
      name: r("1829"),
      fun: p,
      primary: !0
    }, {
      name: r("201"),
      fun: k
    }, {
      name: r("240"),
      fun: function() {
      }
    }];
    return function(b, t) {
      return A(), oe(re, {
        maxWidth: "800",
        "model-value": b.modelValue,
        keys: {
          enter: p
        },
        "onUpdate:modelValue": t[12] || (t[12] = function(a) {
          return y("update:modelValue", a);
        }),
        title: M.value,
        footerBtnList: w
      }, {
        default: h(function() {
          return [l.initialized ? (A(), X("div", Ae, [u("div", Je, [u("div", Re, g(f(r)("1923") + "(N)") + ":", 1), d(q, {
            modelValue: l.style.name,
            "onUpdate:modelValue": t[0] || (t[0] = function(a) {
              return l.style.name = a;
            }),
            variant: "outlined",
            "hide-details": "",
            class: "mb-4",
            "bg-color": "grey-lighten-4",
            disabled: !l.isCreating
          }, null, 8, ["modelValue", "disabled"]), u("div", ze, g(f(r)("2306")) + ":", 1), d(q, {
            modelValue: l.style.description,
            "onUpdate:modelValue": t[1] || (t[1] = function(a) {
              return l.style.description = a;
            }),
            variant: "outlined",
            "hide-details": "",
            class: "mb-4",
            "bg-color": "grey-lighten-4"
          }, null, 8, ["modelValue"])]), u("div", Fe, [u("div", Ke, [u("div", qe, g(f(r)("2307")), 1), d(Y, {
            title: f(r)("2308")
          }, {
            default: h(function() {
              return [u("div", Ge, [d(I, {
                modelValue: l.style.startCaps.line,
                "onUpdate:modelValue": t[2] || (t[2] = function(a) {
                  return l.style.startCaps.line = a;
                }),
                label: f(r)("173")
              }, null, 8, ["modelValue", "label"]), d(I, {
                modelValue: l.style.startCaps.outerArc,
                "onUpdate:modelValue": t[3] || (t[3] = function(a) {
                  return l.style.startCaps.outerArc = a;
                }),
                label: f(r)("2309")
              }, null, 8, ["modelValue", "label"]), d(I, {
                modelValue: l.style.startCaps.innerArc,
                "onUpdate:modelValue": t[4] || (t[4] = function(a) {
                  return l.style.startCaps.innerArc = a;
                }),
                label: f(r)("2310")
              }, null, 8, ["modelValue", "label"])]), u("div", We, [u("div", He, g(f(r)("169") + "(A)") + ":", 1), d(q, {
                modelValue: l.style.startCaps.angle,
                "onUpdate:modelValue": t[5] || (t[5] = function(a) {
                  return l.style.startCaps.angle = a;
                }),
                type: "number",
                variant: "outlined",
                density: "compact",
                "hide-details": ""
              }, null, 8, ["modelValue"])])];
            }),
            _: 1
          }, 8, ["title"]), d(Y, {
            title: f(r)("189")
          }, {
            default: h(function() {
              return [u("div", Qe, [d(I, {
                modelValue: l.style.endCaps.line,
                "onUpdate:modelValue": t[6] || (t[6] = function(a) {
                  return l.style.endCaps.line = a;
                }),
                label: f(r)("173")
              }, null, 8, ["modelValue", "label"]), d(I, {
                modelValue: l.style.endCaps.outerArc,
                "onUpdate:modelValue": t[7] || (t[7] = function(a) {
                  return l.style.endCaps.outerArc = a;
                }),
                label: f(r)("2309")
              }, null, 8, ["modelValue", "label"]), d(I, {
                modelValue: l.style.endCaps.innerArc,
                "onUpdate:modelValue": t[8] || (t[8] = function(a) {
                  return l.style.endCaps.innerArc = a;
                }),
                label: f(r)("2310")
              }, null, 8, ["modelValue", "label"])]), u("div", Xe, [u("div", Ye, g(f(r)("169") + "(A)") + ":", 1), d(q, {
                modelValue: l.style.endCaps.angle,
                "onUpdate:modelValue": t[9] || (t[9] = function(a) {
                  return l.style.endCaps.angle = a;
                }),
                type: "number",
                variant: "outlined",
                density: "compact",
                "hide-details": ""
              }, null, 8, ["modelValue"])])];
            }),
            _: 1
          }, 8, ["title"]), d(Y, {
            title: f(r)("241")
          }, {
            default: h(function() {
              return [u("div", Ze, [d(I, {
                modelValue: l.style.fill.enabled,
                "onUpdate:modelValue": t[10] || (t[10] = function(a) {
                  return l.style.fill.enabled = a;
                }),
                label: f(r)("2312")
              }, null, 8, ["modelValue", "label"])]), u("div", et, [u("div", tt, g(f(r)("2313")) + ":", 1), d(se, {
                ref_key: "fillColorSelectRef",
                ref: j,
                "model-value": _(l.style.fill.color),
                onChange: K,
                disabled: !l.style.fill.enabled
              }, null, 8, ["model-value", "disabled"])])];
            }),
            _: 1
          }, 8, ["title"]), d(Y, {
            class: "mt-2"
          }, {
            default: h(function() {
              return [d(I, {
                modelValue: l.style.displayJoints,
                "onUpdate:modelValue": t[11] || (t[11] = function(a) {
                  return l.style.displayJoints = a;
                }),
                label: f(r)("2314")
              }, null, 8, ["modelValue", "label"])];
            }),
            _: 1
          })]), u("div", lt, [u("div", nt, [u("div", null, g(f(r)("2315")), 1), d(U, {
            size: "small",
            color: "primary",
            class: "mr-2",
            onClick: H
          }, {
            default: h(function() {
              return [N(g(f(r)("2047")), 1)];
            }),
            _: 1
          })]), d(Ne, {
            density: "compact",
            class: "border mb-3",
            height: "290",
            hover: !1
          }, {
            default: h(function() {
              return [u("thead", null, [u("tr", null, [u("th", at, g(f(r)("242")), 1), u("th", rt, g(f(r)("210")), 1), u("th", it, g(f(r)("218")), 1), u("th", ot, g(f(r)("2053")), 1)])]), u("tbody", null, [(A(!0), X(ae, null, ye(l.style.elements, function(a, V) {
                return A(), X("tr", {
                  key: V
                }, [u("td", null, [d(q, {
                  modelValue: a.offset,
                  "onUpdate:modelValue": function(m) {
                    return a.offset = m;
                  },
                  "hide-details": "",
                  type: "number"
                }, null, 8, ["modelValue", "onUpdate:modelValue"])]), u("td", null, [d(se, {
                  "model-value": _(a.color),
                  onChange: function(m) {
                    return J(m, V);
                  }
                }, null, 8, ["model-value", "onChange"])]), u("td", null, [d(Be, {
                  modelValue: a.lineType,
                  "onUpdate:modelValue": function(m) {
                    return a.lineType = m;
                  },
                  items: f($),
                  "item-title": "name",
                  "item-value": "name"
                }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])]), u("td", null, [d(U, {
                  size: "x-small",
                  variant: "text",
                  icon: "",
                  onClick: function(m) {
                    return Q(V);
                  },
                  disabled: l.style.elements.length <= 1
                }, {
                  default: h(function() {
                    return [d(pe, {
                      size: "x-large"
                    }, {
                      default: h(function() {
                        return ee(t[13] || (t[13] = [N("cha", -1)]));
                      }),
                      _: 1
                    })];
                  }),
                  _: 1
                }, 8, ["onClick", "disabled"])])]);
              }), 128))])];
            }),
            _: 1
          })])])])) : ke("", !0)];
        }),
        _: 1
      }, 8, ["model-value", "keys", "title"]);
    };
  }
}), st = /* @__PURE__ */ me(ut, [["__scopeId", "data-v-5b2e8b8f"]]);
var dt = {
  class: "pa-4"
}, ft = {
  class: "d-flex justify-end pa-3 gap-2"
};
const ct = /* @__PURE__ */ ie({
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
  setup: function(s, i) {
    var n = i.emit, e = s, y = n, B = G(e.defaultValue || ""), E = function() {
      B.value.trim() && (y("confirm", B.value.trim()), y("update:modelValue", !1));
    }, $ = function() {
      y("cancel"), y("update:modelValue", !1);
    };
    return function(j, l) {
      return A(), oe(re, {
        title: j.title,
        "model-value": j.modelValue,
        "onUpdate:modelValue": l[1] || (l[1] = function(M) {
          return y("update:modelValue", M);
        }),
        "max-width": "400"
      }, {
        actions: h(function() {
          return [u("div", ft, [d(U, {
            class: "mr-1",
            color: "primary",
            onClick: E
          }, {
            default: h(function() {
              return [N(g(f(r)("1829")), 1)];
            }),
            _: 1
          }), d(U, {
            onClick: $
          }, {
            default: h(function() {
              return [N(g(f(r)("201")), 1)];
            }),
            _: 1
          })])];
        }),
        default: h(function() {
          return [u("div", dt, [d(q, {
            modelValue: B.value,
            "onUpdate:modelValue": l[0] || (l[0] = function(M) {
              return B.value = M;
            }),
            autofocus: "",
            onKeyup: xe(E, ["enter"])
          }, null, 8, ["modelValue"])])];
        }),
        _: 1
      }, 8, ["title", "model-value"]);
    };
  }
});
function fe(v, s) {
  var i = Object.keys(v);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(v);
    s && (n = n.filter(function(e) {
      return Object.getOwnPropertyDescriptor(v, e).enumerable;
    })), i.push.apply(i, n);
  }
  return i;
}
function z(v) {
  for (var s = 1; s < arguments.length; s++) {
    var i = arguments[s] != null ? arguments[s] : {};
    s % 2 ? fe(Object(i), !0).forEach(function(n) {
      ce(v, n, i[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(v, Object.getOwnPropertyDescriptors(i)) : fe(Object(i)).forEach(function(n) {
      Object.defineProperty(v, n, Object.getOwnPropertyDescriptor(i, n));
    });
  }
  return v;
}
var mt = {
  class: "d-flex flex-column pa-4"
}, vt = {
  class: "d-flex align-center mb-4 flex-wrap"
}, yt = {
  class: "mr-4"
}, pt = {
  class: "text-body-2 font-weight-medium"
}, gt = {
  class: "text-primary font-weight-bold"
}, ht = {
  class: "d-flex"
}, St = {
  class: "flex-grow-1"
}, bt = {
  class: "mb-2"
}, Ct = {
  class: "ml-4 d-flex flex-column",
  style: {
    width: "180px"
  }
}, Vt = {
  class: "mt-4"
}, _t = {
  class: "mb-2"
}, kt = {
  class: "grey lighten-4 pa-2 border"
};
const xt = /* @__PURE__ */ ie({
  __name: "index",
  setup: function(s) {
    var i = Ve(), n = Ce(), e = ve({
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
    }), y = Pe(), B = y.styleList, E = y.currentStyle, $ = y.refreshStyleList, j = y.deleteStyle, l = y.applyStyle, M = y.renameStyle;
    ne(B, function(m) {
      e.styleList = ee(m);
    }, {
      immediate: !0
    }), ne(E, function(m) {
      m ? e.currentStyle = z({}, m) : e.currentStyle = null;
    }, {
      immediate: !0
    });
    var T = W(function() {
      return R.value;
    }), F = W(function() {
      return T.value;
    }), K = W(function() {
      return e.currentStyle && e.currentStyle.name !== c.defaultName;
    }), J = W(function() {
      return e.currentStyle !== null;
    }), H = function(o) {
      o && o.name && (e.currentStyle = z({}, o));
    }, Q = function() {
      e.currentStyle && (l(), R.value = e.currentStyle.name);
    }, _ = function() {
      var o = c.get(c.defaultName);
      o && (e.editingStyle = z(z({}, JSON.parse(JSON.stringify(o))), {}, {
        name: p("NewStyle"),
        description: r("2021")
      }), e.isCreating = !0, e.showEditDialog = !0);
    }, p = function(o) {
      for (var C = 1, S = "".concat(o).concat(C); e.styleList.some(function(L) {
        return L.name === S;
      }); )
        C++, S = "".concat(o).concat(C);
      return S;
    }, k = function() {
      e.currentStyle && (e.editingStyle = JSON.parse(JSON.stringify(e.currentStyle)), e.isCreating = !1, e.showEditDialog = !0);
    }, w = function() {
      if (e.currentStyle) {
        if (e.editingStyle = JSON.parse(JSON.stringify(e.currentStyle)), e.editingStyle) {
          var o = "Copy_of_" + e.currentStyle.name;
          e.editingStyle.name = p(o), e.editingStyle.description = r("2022") + " " + e.currentStyle.name;
        }
        e.isCreating = !0, e.showEditDialog = !0;
      }
    }, b = function() {
      e.currentStyle && e.currentStyle.name !== c.defaultName && (e.inputDialog = {
        title: r("2023"),
        label: r("2024"),
        defaultValue: e.currentStyle.name
      }, e.showInputDialog = !0);
    }, t = function(o) {
      if (o && o.trim() !== "" && e.currentStyle) {
        var C = e.styleList.find(function(le) {
          return le.name.toLowerCase() === o.toLowerCase() && le.name !== e.currentStyle.name;
        });
        if (C) {
          i.warning(r("2025") + ' "' + o + '" ' + r("2026"));
          return;
        }
        var S = e.currentStyle.name, L = M(S, o);
        L && ($(), T.value === S && (R.value = o));
      }
    }, a = function() {
      e.currentStyle && e.currentStyle.name !== c.defaultName && n.open({
        title: r("2027"),
        text: r("2028") + " " + e.currentStyle.name + "?",
        defineTitle: r("1829"),
        cancelTitle: r("201"),
        define: function() {
          e.currentStyle && j(e.currentStyle);
        }
      });
    }, V = function(o) {
      if (e.isCreating) {
        var C = e.styleList.find(function(S) {
          return S.name.toLowerCase() === o.name.toLowerCase() && (e.currentStyle ? S.name !== e.currentStyle.name : !0);
        });
        if (C) {
          i.warning(r("2025") + ' "' + o.name + '" ' + r("2026"));
          return;
        }
      }
      e.editingStyle = o, c.set(o.name, o), $(), e.currentStyle = z({}, o), T.value && e.currentStyle && T.value === e.currentStyle.name && (R.value = e.currentStyle.name), e.showEditDialog = !1;
    }, x = function() {
      e.showEditDialog = !1;
    };
    return ne(function() {
      return Z.value;
    }, function(m) {
      if (m && ($(), R.value)) {
        var o = c.get(R.value);
        o && (e.currentStyle = z(z({}, o), {}, {
          name: R.value
        }));
      }
    }), function(m, o) {
      return A(), X(ae, null, [d(re, {
        maxWidth: "700",
        modelValue: f(Z),
        "onUpdate:modelValue": o[0] || (o[0] = function(C) {
          return Oe(Z) ? Z.value = C : null;
        }),
        title: f(r)("220")
      }, {
        actions: h(function() {
          return ee(o[4] || (o[4] = [u("div", null, null, -1)]));
        }),
        default: h(function() {
          var C;
          return [u("div", mt, [u("div", vt, [u("div", yt, [u("span", pt, g(f(r)("2030")) + ": ", 1), u("span", gt, g(F.value), 1)])]), u("div", ht, [u("div", St, [u("div", bt, g(f(r)("2031")) + ":", 1), d(je, {
            density: "compact",
            "bg-color": "grey-lighten-3",
            height: "180",
            class: "border",
            "select-strategy": "single-independent"
          }, {
            default: h(function() {
              return [(A(!0), X(ae, null, ye(e.styleList, function(S) {
                var L;
                return A(), oe(Ue, {
                  key: S.name,
                  active: ((L = e.currentStyle) === null || L === void 0 ? void 0 : L.name) === S.name,
                  "active-class": "bg-primary text-white",
                  onClick: function(wt) {
                    return H(S);
                  },
                  title: S.name,
                  class: "py-1"
                }, we({
                  _: 2
                }, [S.name === F.value ? {
                  name: "append",
                  fn: h(function() {
                    return [d(pe, {
                      size: "small",
                      color: "success"
                    }, {
                      default: h(function() {
                        return ee(o[3] || (o[3] = [N("mdi-check-circle", -1)]));
                      }),
                      _: 1
                    })];
                  }),
                  key: "0"
                } : void 0]), 1032, ["active", "onClick", "title"]);
              }), 128))];
            }),
            _: 1
          })]), u("div", Ct, [d(U, {
            class: "mb-2",
            color: "grey-lighten-2",
            block: "",
            onClick: Q,
            disabled: !J.value
          }, {
            default: h(function() {
              return [N(g(f(r)("2032")), 1)];
            }),
            _: 1
          }, 8, ["disabled"]), d(U, {
            class: "mb-2",
            color: "grey-lighten-2",
            block: "",
            onClick: _
          }, {
            default: h(function() {
              return [N(g(f(r)("2033")) + "... ", 1)];
            }),
            _: 1
          }), d(U, {
            class: "mb-2",
            color: "grey-lighten-2",
            block: "",
            onClick: w,
            disabled: !J.value
          }, {
            default: h(function() {
              return [N(g(f(r)("2034")) + "... ", 1)];
            }),
            _: 1
          }, 8, ["disabled"]), d(U, {
            class: "mb-2",
            color: "grey-lighten-2",
            block: "",
            onClick: k,
            disabled: !J.value
          }, {
            default: h(function() {
              return [N(g(f(r)("2035")) + "... ", 1)];
            }),
            _: 1
          }, 8, ["disabled"]), d(U, {
            class: "mb-2",
            color: "grey-lighten-2",
            block: "",
            onClick: b,
            disabled: !K.value
          }, {
            default: h(function() {
              return [N(g(f(r)("2036")), 1)];
            }),
            _: 1
          }, 8, ["disabled"]), d(U, {
            class: "mb-2",
            color: "grey-lighten-2",
            block: "",
            onClick: a,
            disabled: !K.value
          }, {
            default: h(function() {
              return [N(g(f(r)("2037")), 1)];
            }),
            _: 1
          }, 8, ["disabled"])])]), u("div", Vt, [u("div", _t, g(f(r)("1970")) + ":", 1), u("div", kt, g(((C = e.currentStyle) === null || C === void 0 ? void 0 : C.description) || ""), 1)])])];
        }),
        _: 1
      }, 8, ["modelValue", "title"]), d(st, {
        modelValue: e.showEditDialog,
        "onUpdate:modelValue": o[1] || (o[1] = function(C) {
          return e.showEditDialog = C;
        }),
        style: De(e.editingStyle || {}),
        "is-create": e.isCreating,
        onSave: V,
        onCancel: x
      }, null, 8, ["modelValue", "style", "is-create"]), d(ct, {
        modelValue: e.showInputDialog,
        "onUpdate:modelValue": o[2] || (o[2] = function(C) {
          return e.showInputDialog = C;
        }),
        title: e.inputDialog.title,
        label: e.inputDialog.label,
        "default-value": e.inputDialog.defaultValue,
        onConfirm: t
      }, null, 8, ["modelValue", "title", "label", "default-value"])], 64);
    };
  }
}), jt = /* @__PURE__ */ me(xt, [["__scopeId", "data-v-e2a81c25"]]);
export {
  jt as default
};
