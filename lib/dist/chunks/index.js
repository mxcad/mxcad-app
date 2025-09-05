import { t as w, x as fe, Q as ve, R as pe, T as he, l as ge } from "./lib.js";
import { f as S, g as te, d as me, i as ae, a7 as xe, m as be, o as z, A as ye, s as ne, G as t, c as Z, l as x, a as b, t as C, w as D, q as Q, ae as re, Q as le, T as we, v as q } from "./vue.js";
import "./es.regexp.constructor.js";
import { M as _e } from "./mxcad.js";
import { b as Se } from "./@vueuse/core.js";
import { h as Ce, b as De, V as M, i as ie, j as E } from "./vuetify.js";
function Fe(n, e) {
  var a = typeof Symbol != "undefined" && n[Symbol.iterator] || n["@@iterator"];
  if (!a) {
    if (Array.isArray(n) || (a = Ve(n)) || e) {
      a && (n = a);
      var o = 0, u = function() {
      };
      return { s: u, n: function() {
        return o >= n.length ? { done: !0 } : { done: !1, value: n[o++] };
      }, e: function(r) {
        throw r;
      }, f: u };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var c, F = !0, m = !1;
  return { s: function() {
    a = a.call(n);
  }, n: function() {
    var r = a.next();
    return F = r.done, r;
  }, e: function(r) {
    m = !0, c = r;
  }, f: function() {
    try {
      F || a.return == null || a.return();
    } finally {
      if (m) throw c;
    }
  } };
}
function Ve(n, e) {
  if (n) {
    if (typeof n == "string") return oe(n, e);
    var a = {}.toString.call(n).slice(8, -1);
    return a === "Object" && n.constructor && (a = n.constructor.name), a === "Map" || a === "Set" ? Array.from(n) : a === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? oe(n, e) : void 0;
  }
}
function oe(n, e) {
  (e == null || e > n.length) && (e = n.length);
  for (var a = 0, o = Array(e); a < e; a++) o[a] = n[a];
  return o;
}
var ee = function(e, a) {
  var o = S(!1), u = S(""), c = S(""), F = S(!1), m = S({
    matchCase: !1,
    matchWholeWord: !1,
    useWildcards: !1,
    matchDiacritics: !1,
    matchHalfFullWidth: !1
  }), v = S({
    current: 0,
    total: 0
  }), r = S([]), d = S(-1), G = te(function() {
    return !u.value;
  }), N = te(function() {
    return !u.value || v.value.total === 0;
  }), H = function() {
    if (!u.value) return [];
    var i = [], s = e.mText.textString;
    if (!s) return [];
    var h = s, p = u.value;
    if (m.value.matchCase || (h = s.toLowerCase(), p = u.value.toLowerCase()), m.value.matchHalfFullWidth || (h = T(h), p = T(p)), m.value.matchDiacritics || (h = K(h), p = K(p)), m.value.useWildcards)
      return $(h, p);
    for (var _ = 0, g; (g = h.indexOf(p, _)) !== -1; ) {
      if (m.value.matchWholeWord) {
        var W = g > 0 ? h[g - 1] : null, O = g + p.length < h.length ? h[g + p.length] : null, Y = !W || !/\w/.test(W), de = !O || !/\w/.test(O);
        if (!(Y && de)) {
          _ = g + 1;
          continue;
        }
      }
      i.push({
        index: g,
        length: p.length
      }), _ = g + 1;
    }
    return i;
  }, T = function(i) {
    return i.replace(/[\uFF01-\uFF5E]/g, function(s) {
      return String.fromCharCode(s.charCodeAt(0) - 65248);
    });
  }, K = function(i) {
    return i.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }, $ = function(i, s) {
    for (var h = [], p = s.replace(/\*/g, ".*").replace(/\?/g, ".").replace(/\./g, "\\."), _ = new RegExp(p, "g"), g; (g = _.exec(i)) !== null; )
      h.push({
        index: g.index,
        length: g[0].length
      }), g.index === _.lastIndex && _.lastIndex++;
    return h;
  }, A = function(i) {
    e.selectionStart = i.index, e.selectionEnd = i.index + i.length, e.isSelecting = !0, e.cursorPosition = i.index + i.length, e.updateCursorPosition(), e.updateSelectionHighlight(), e.cursor.focus();
  }, U = function() {
    u.value && (V(), r.value.length !== 0 && (d.value === -1 || d.value >= r.value.length - 1 ? d.value = 0 : d.value++, v.value.current = d.value + 1, A(r.value[d.value])));
  }, k = function() {
    u.value && (V(), r.value.length !== 0 && (d.value === -1 || d.value <= 0 ? d.value = r.value.length - 1 : d.value--, v.value.current = d.value + 1, A(r.value[d.value])));
  }, B = function(i) {
    if (!u.value || i.length === 0) return 0;
    var s = e.mText.textString, h = fe(i).sort(function(O, Y) {
      return Y.index - O.index;
    });
    e.saveToHistory();
    var p = s, _ = Fe(h), g;
    try {
      for (_.s(); !(g = _.n()).done; ) {
        var W = g.value;
        p = p.substring(0, W.index) + c.value + p.substring(W.index + W.length);
      }
    } catch (O) {
      _.e(O);
    } finally {
      _.f();
    }
    return e.mText.textString = p, e.updateBox(), e.clearSelection(), d.value = -1, r.value = [], V(), _e.getCurrentMxCAD().updateDisplay(), h.length;
  }, J = function() {
    if (!(d.value === -1 || r.value.length === 0)) {
      var i = r.value[d.value];
      B([i]), r.value.length > 0 && U();
    }
  }, P = function() {
    if (r.value.length !== 0) {
      var i = B(r.value);
      i > 0 && console.log(w("已替换 ".concat(i, " 处文本")));
    }
  }, L = function() {
    d.value = -1, r.value = [], v.value = {
      current: 0,
      total: 0
    }, e.clearSelection();
  }, V = Se(function() {
    L(), u.value && (r.value = H(), v.value.total = r.value.length, F.value = !0, r.value.length > 0 && (d.value = 0, v.value.current = 1, A(r.value[0])));
  }, 300), X = function() {
    if (e.hasSelection()) {
      var i = e.getSelectedText();
      i && (u.value = i);
    }
    o.value = !0, setTimeout(function() {
      V();
    }, 100);
  }, j = function() {
    o.value = !1, e.clearSelection(), L(), a != null && a.onClose && a.onClose();
  }, R = function() {
    var i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
    i ? X() : j();
  };
  return {
    isShow: o,
    findText: u,
    replaceText: c,
    optionsRef: m,
    resultStats: v,
    hasSearched: F,
    disableFind: G,
    disableReplace: N,
    findNext: U,
    findPrevious: k,
    replaceCurrent: J,
    replaceAll: P,
    refreshSearch: V,
    showDialog: R,
    closeDialog: j
  };
}, Te = {
  class: "find-replace-header",
  id: "single_line_text_find_replace_dialog_header"
}, ke = {
  class: "dialog-title"
}, Re = {
  class: "find-replace-content"
}, We = {
  class: "input-row find-row"
}, Oe = {
  class: "label"
}, Ae = {
  class: "input-row replace-row"
}, Pe = {
  class: "label"
}, Le = {
  class: "options-area"
}, je = {
  class: "option-row"
}, Me = {
  class: "option-row"
}, Ee = {
  class: "option-row"
}, Ie = {
  class: "option-row"
}, Ne = {
  class: "option-row"
}, He = {
  class: "right-buttons"
}, Ke = {
  key: 0,
  class: "search-stats mt-2"
}, Ue = {
  key: 1,
  class: "search-stats mt-2 error-text"
};
const Be = /* @__PURE__ */ me({
  __name: "index",
  props: {
    editor: {},
    onClose: {
      type: Function
    }
  },
  setup: function(e, a) {
    var o = a.expose, u = e, c = ee(u.editor, {
      onClose: u.onClose
    }), F = c.isShow, m = c.findText, v = c.replaceText, r = c.optionsRef, d = c.resultStats, G = c.hasSearched, N = c.disableFind, H = c.disableReplace, T = c.findNext, K = c.findPrevious, $ = c.replaceCurrent, A = c.replaceAll, U = c.showDialog, k = c.closeDialog, B = c.refreshSearch, J = S(null), P = S(null), L = function(l) {
      l.key === "Escape" ? k() : l.key === "Enter" && l.ctrlKey && T();
    }, V = S(0), X = S(0), j = function() {
      setTimeout(function() {
        P.value && P.value.focus({
          preventScroll: !0
        });
      });
    };
    return ae([m, function() {
      return r.value;
    }], function() {
      B(), j();
    }, {
      deep: !0
    }), ae(F, function(R) {
      R ? (document.addEventListener("keydown", L), j()) : document.removeEventListener("keydown", L);
    }), o({
      showDialog: U
    }), function(R, l) {
      var i = xe("draggable");
      return z(), be(we, {
        to: "body"
      }, [t(F) ? ye((z(), Z("div", {
        key: 0,
        ref_key: "dialogRef",
        ref: J,
        class: "find-replace-dialog",
        onKeydown: l[7] || (l[7] = re(
          //@ts-ignore
          function() {
            return t(k) && t(k).apply(void 0, arguments);
          },
          ["esc"]
        ))
      }, [x("div", Te, [x("div", ke, [b(Ce, {
        src: t(ve)(),
        alt: "logo",
        width: "24",
        height: "24",
        class: "mr-2"
      }, null, 8, ["src"]), x("span", null, C(t(w)("1823")), 1)]), b(M, {
        icon: "",
        size: "x-small",
        variant: "text",
        onClick: t(k),
        class: "close-btn"
      }, {
        default: D(function() {
          return [b(De, {
            icon: "cha",
            size: "small"
          })];
        }),
        _: 1
      }, 8, ["onClick"])]), x("div", Re, [x("div", We, [b(t(ie), {
        modelValue: t(m),
        "onUpdate:modelValue": l[0] || (l[0] = function(s) {
          return le(m) ? m.value = s : null;
        }),
        onKeyup: re(t(T), ["enter"]),
        ref_key: "findInputRef",
        ref: P
      }, {
        prepend: D(function() {
          return [x("label", Oe, C(t(w)("2167")) + ":", 1)];
        }),
        append: D(function() {
          return [b(M, {
            onClick: t(T),
            width: "80",
            height: "21",
            disabled: t(N)
          }, {
            default: D(function() {
              return [Q(C(t(w)("2168")), 1)];
            }),
            _: 1
          }, 8, ["onClick", "disabled"])];
        }),
        _: 1
      }, 8, ["modelValue", "onKeyup"])]), x("div", Ae, [b(t(ie), {
        modelValue: t(v),
        "onUpdate:modelValue": l[1] || (l[1] = function(s) {
          return le(v) ? v.value = s : null;
        })
      }, {
        prepend: D(function() {
          return [x("label", Pe, C(t(w)("2169")) + ":", 1)];
        }),
        append: D(function() {
          return [b(M, {
            onClick: t($),
            width: "80",
            height: "21",
            disabled: t(H)
          }, {
            default: D(function() {
              return [Q(C(t(w)("2170")), 1)];
            }),
            _: 1
          }, 8, ["onClick", "disabled"])];
        }),
        _: 1
      }, 8, ["modelValue"])]), x("div", Le, [x("div", je, [b(E, {
        modelValue: t(r).matchCase,
        "onUpdate:modelValue": l[2] || (l[2] = function(s) {
          return t(r).matchCase = s;
        }),
        label: t(w)("2171")
      }, null, 8, ["modelValue", "label"])]), x("div", Me, [b(E, {
        modelValue: t(r).matchWholeWord,
        "onUpdate:modelValue": l[3] || (l[3] = function(s) {
          return t(r).matchWholeWord = s;
        }),
        label: t(w)("2172")
      }, null, 8, ["modelValue", "label"])]), x("div", Ee, [b(E, {
        modelValue: t(r).useWildcards,
        "onUpdate:modelValue": l[4] || (l[4] = function(s) {
          return t(r).useWildcards = s;
        }),
        label: t(w)("2173")
      }, null, 8, ["modelValue", "label"])]), x("div", Ie, [b(E, {
        modelValue: t(r).matchDiacritics,
        "onUpdate:modelValue": l[5] || (l[5] = function(s) {
          return t(r).matchDiacritics = s;
        }),
        label: t(w)("2174")
      }, null, 8, ["modelValue", "label"])]), x("div", Ne, [b(E, {
        modelValue: t(r).matchHalfFullWidth,
        "onUpdate:modelValue": l[6] || (l[6] = function(s) {
          return t(r).matchHalfFullWidth = s;
        }),
        label: t(w)("2175")
      }, null, 8, ["modelValue", "label"])])]), x("div", He, [b(M, {
        onClick: t(K),
        width: "80",
        height: "21",
        disabled: t(N),
        class: "mb-2"
      }, {
        default: D(function() {
          return [Q(C(t(w)("184")), 1)];
        }),
        _: 1
      }, 8, ["onClick", "disabled"]), b(M, {
        onClick: t(A),
        width: "80",
        height: "21",
        disabled: t(H)
      }, {
        default: D(function() {
          return [Q(C(t(w)("2176")), 1)];
        }),
        _: 1
      }, 8, ["onClick", "disabled"]), t(d).total > 0 ? (z(), Z("div", Ke, C(t(d).current) + " / " + C(t(d).total), 1)) : t(m) && t(G) ? (z(), Z("div", Ue, C(t(w)("2177")), 1)) : ne("", !0)])])], 32)), [[i, {
        downEl: "#single_line_text_find_replace_dialog_header",
        x: V.value,
        y: X.value
      }]]) : ne("", !0)]);
    };
  }
}), se = /* @__PURE__ */ pe(Be, [["__scopeId", "data-v-0ba36a08"]]);
function ue(n, e) {
  var a = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(n);
    e && (o = o.filter(function(u) {
      return Object.getOwnPropertyDescriptor(n, u).enumerable;
    })), a.push.apply(a, o);
  }
  return a;
}
function ze(n) {
  for (var e = 1; e < arguments.length; e++) {
    var a = arguments[e] != null ? arguments[e] : {};
    e % 2 ? ue(Object(a), !0).forEach(function(o) {
      ge(n, o, a[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(a)) : ue(Object(a)).forEach(function(o) {
      Object.defineProperty(n, o, Object.getOwnPropertyDescriptor(a, o));
    });
  }
  return n;
}
var f, y, I = !1;
function Qe() {
  try {
    var n = he();
    return n || null;
  } catch (e) {
    return console.error("获取应用实例失败:", e), null;
  }
}
var qe = function(e) {
  try {
    if (I && f && f.component) {
      var a = f.component;
      a && a.exposed && a.exposed.showDialog(!0);
      return;
    }
    ce();
    var o = Qe();
    y || (y = document.createElement("div"), document.body.appendChild(y)), f = b(se, ze({}, e)), o && o._context && (f.appContext = o._context), y && (q(f, y), I = !0, setTimeout(function() {
      if (f && f.component) {
        var u = f.component;
        u && u.exposed && u.exposed.showDialog(!0);
      }
    }, 0));
  } catch (u) {
    console.error("显示单行文本查找替换对话框时出错:", u);
  }
}, ce = function() {
  try {
    if (f && f.component) {
      var e = f.component;
      e && e.exposed && e.exposed.showDialog(!1), e.props && typeof e.props.onClose == "function" && e.props.onClose(), setTimeout(function() {
        y && (q(null, y), I = !1);
      }, 300);
    }
  } catch (a) {
    if (console.error("隐藏单行文本查找替换对话框时出错:", a), y) {
      try {
        q(null, y);
      } catch (o) {
      }
      I = !1;
    }
  }
}, Ge = function() {
  try {
    y && (f && f.component && (f.component.exposed && f.component.exposed.showDialog(!1), f.component.props && typeof f.component.props.onClose == "function" && f.component.props.onClose()), q(null, y), y.parentNode && y.parentNode.removeChild(y), y = void 0, f = void 0, I = !1);
  } catch (e) {
    console.error("清理单行文本查找替换对话框资源时出错:", e);
  }
};
const tt = {
  SingleLineFindReplaceDialog: se,
  useSingleLineFindReplace: ee,
  // 创建并返回hook实例
  create: function(e) {
    return ee(e);
  },
  // 显示和隐藏对话框
  show: qe,
  hide: ce,
  cleanup: Ge
};
export {
  se as SingleLineFindReplaceDialog,
  Ge as cleanup,
  tt as default,
  ce as hideSingleLineFindReplaceDialog,
  qe as showSingleLineFindReplaceDialog,
  ee as useSingleLineFindReplace
};
