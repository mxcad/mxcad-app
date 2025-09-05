import { x as P, t as C, h as ne, l as He, d as Pe, af as Ae, _ as N, a as D, R as Ce, ag as ze, X as Ne } from "./lib.js";
import { f as E, J as te, g as B, i as Q, k as le, d as be, j as We, u as Je, c as G, o as j, l as _, A as Ke, p as ee, s as ie, F as Ge, b as qe, m as q, y as ce, w as L, t as H, B as Qe, a as $, q as ae, G as I, Q as ye, x as de, af as Xe } from "./vue.js";
import "./es.regexp.constructor.js";
import { b as Ye } from "./@vueuse/core.js";
import { m as Ze, V as me, b as re, i as Se, G as ea, H as aa, a as we, T as ra } from "./vuetify.js";
var na = function(s) {
  var a = E({
    searchText: "",
    sortBy: "command",
    sortOrder: "asc"
  }), l = te([]), e = te([]), b = function(y, c) {
    if (!c) return y;
    var r = c.toLowerCase().split(/\s+/);
    return y.map(function(t) {
      var w = t.command.toLowerCase(), F = t.aliases.join(" ").toLowerCase(), f = 0;
      return r.forEach(function(n) {
        w === n ? f += 5 : w.startsWith(n) ? f += 4 : w.includes(n) ? f += 3 : t.aliases.some(function(i) {
          return i.toLowerCase() === n;
        }) ? f += 2 : F.includes(n) && (f += 1);
      }), {
        item: t,
        score: f
      };
    }).filter(function(t) {
      var w = t.score;
      return w > 0;
    }).sort(function(t, w) {
      var F = w.score - t.score;
      return F !== 0 ? F : t.item.command.localeCompare(w.item.command);
    }).map(function(t) {
      var w = t.item;
      return w;
    });
  }, k = function(y) {
    return P(y).sort(function(c, r) {
      var t = 0;
      if (a.value.sortBy === "command")
        t = c.command.localeCompare(r.command, void 0, {
          numeric: !0
        });
      else {
        var w = c.aliases[0] || "", F = r.aliases[0] || "";
        c.aliases.length === 0 && r.aliases.length > 0 ? t = 1 : c.aliases.length > 0 && r.aliases.length === 0 ? t = -1 : t = w.localeCompare(F, void 0, {
          numeric: !0
        });
      }
      return a.value.sortOrder === "asc" ? t : -t;
    });
  }, M = Ye(function() {
    l.value = b(s.value, a.value.searchText), e.value = k(l.value);
  }, 200), x = B(function() {
    return M(), e.value;
  }), g = B({
    get: function() {
      return a.value.searchText;
    },
    set: function(y) {
      a.value.searchText = y, M();
    }
  }), O = B(function() {
    return a.value.sortBy;
  }), v = B(function() {
    return a.value.sortOrder;
  }), u = function(y) {
    a.value.sortBy === y ? a.value.sortOrder = a.value.sortOrder === "asc" ? "desc" : "asc" : (a.value.sortBy = y, a.value.sortOrder = "asc"), e.value = k(l.value);
  }, o = function() {
    a.value = {
      searchText: "",
      sortBy: "command",
      sortOrder: "asc"
    }, l.value = [], e.value = k(s.value);
  };
  return l.value = s.value, e.value = k(s.value), {
    searchText: g,
    filteredAliasList: x,
    sortBy: O,
    sortOrder: v,
    toggleSort: u,
    resetAll: o
  };
}, ta = function() {
  var s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 50, a = arguments.length > 1 ? arguments[1] : void 0, l = te([]), e = te([]), b = function(o) {
    return {
      aliasList: JSON.parse(JSON.stringify(o)),
      timestamp: Date.now()
    };
  }, k = function(o) {
    var p = b(o);
    l.value = [].concat(P(l.value), [p]).slice(-s), e.value = [];
  }, M = function() {
    if (l.value.length !== 0) {
      var o = b(a.value);
      e.value = [].concat(P(e.value), [o]);
      var p = l.value.pop();
      p && (a.value = JSON.parse(JSON.stringify(p.aliasList)));
    }
  }, x = function() {
    if (e.value.length !== 0) {
      var o = b(a.value);
      l.value = [].concat(P(l.value), [o]);
      var p = e.value.pop();
      p && (a.value = JSON.parse(JSON.stringify(p.aliasList)));
    }
  }, g = function() {
    l.value = [], e.value = [];
  }, O = B(function() {
    return l.value.length > 0;
  }), v = B(function() {
    return e.value.length > 0;
  });
  return {
    addHistory: k,
    handleUndo: M,
    handleRedo: x,
    clearHistory: g,
    canUndo: O,
    canRedo: v
  };
};
function ve(d, s) {
  var a = typeof Symbol != "undefined" && d[Symbol.iterator] || d["@@iterator"];
  if (!a) {
    if (Array.isArray(d) || (a = la(d)) || s) {
      a && (d = a);
      var l = 0, e = function() {
      };
      return { s: e, n: function() {
        return l >= d.length ? { done: !0 } : { done: !1, value: d[l++] };
      }, e: function(g) {
        throw g;
      }, f: e };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var b, k = !0, M = !1;
  return { s: function() {
    a = a.call(d);
  }, n: function() {
    var g = a.next();
    return k = g.done, g;
  }, e: function(g) {
    M = !0, b = g;
  }, f: function() {
    try {
      k || a.return == null || a.return();
    } finally {
      if (M) throw b;
    }
  } };
}
function la(d, s) {
  if (d) {
    if (typeof d == "string") return Me(d, s);
    var a = {}.toString.call(d).slice(8, -1);
    return a === "Object" && d.constructor && (a = d.constructor.name), a === "Map" || a === "Set" ? Array.from(d) : a === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? Me(d, s) : void 0;
  }
}
function Me(d, s) {
  (s == null || s > d.length) && (s = d.length);
  for (var a = 0, l = Array(s); a < s; a++) l[a] = d[a];
  return l;
}
var ia = function(s, a, l, e) {
  var b = ne(), k = function(v) {
    return v.length < 1 ? {
      valid: !1,
      message: C("2209")
    } : v.length > 50 ? {
      valid: !1,
      message: C("1961") + v + C("2210")
    } : /[<>:"\/\\|?*\x00-\x1F]/.test(v) ? {
      valid: !1,
      message: C("1961") + v + C("2211")
    } : {
      valid: !0
    };
  }, M = function(v, u) {
    var o = s.value.find(function(f) {
      return f.id === v;
    });
    if (!o) return {
      success: !1,
      message: C("2212")
    };
    var p = u.map(function(f) {
      return f.trim();
    }).filter(Boolean).map(function(f) {
      return {
        alias: f,
        validation: k(f)
      };
    }), y = p.filter(function(f) {
      return !f.validation.valid;
    }).map(function(f) {
      return f.validation.message;
    });
    if (y.length > 0)
      return {
        success: !1,
        message: y.join(`
`),
        type: "validation"
      };
    var c = p.map(function(f) {
      return f.alias;
    }), r = ve(c), t;
    try {
      var w = function() {
        var n = t.value;
        if (e(n, o.command)) {
          var i = ve(s.value), A;
          try {
            for (i.s(); !(A = i.n()).done; ) {
              var S = A.value;
              if (S.id !== v && (S.command.toLowerCase() === n.toLowerCase() || S.aliases.some(function(U) {
                return U.toLowerCase() === n.toLowerCase();
              })))
                return {
                  v: {
                    success: !1,
                    message: "".concat(C("1961"), '"').concat(n, '"').concat(C("2213"), '"').concat(S.command, '"').concat(C("2214")),
                    type: "conflict"
                  }
                };
            }
          } catch (U) {
            i.e(U);
          } finally {
            i.f();
          }
        }
      }, F;
      for (r.s(); !(t = r.n()).done; )
        if (F = w(), F) return F.v;
    } catch (f) {
      r.e(f);
    } finally {
      r.f();
    }
    try {
      return l(s.value), a(v, c), {
        success: !0
      };
    } catch (f) {
      return console.error("更新别名失败:", f), {
        success: !1,
        message: C("2215"),
        type: "error"
      };
    }
  }, x = function(v, u) {
    var o = s.value.find(function(p) {
      return p.id === v;
    });
    if (!o)
      return b.error(C("2212")), !1;
    try {
      return l(s.value), a(v, o.aliases.filter(function(p) {
        return p !== u;
      })), !0;
    } catch (p) {
      return console.error("删除别名失败:", p), b.error(C("2216")), !1;
    }
  }, g = function(v) {
    var u = {
      success: [],
      failed: []
    }, o = ve(v), p;
    try {
      for (o.s(); !(p = o.n()).done; ) {
        var y = p.value, c = M(y.id, y.aliases);
        c.success ? u.success.push(y.id) : u.failed.push({
          id: y.id,
          message: c.message || C("2217")
        });
      }
    } catch (r) {
      o.e(r);
    } finally {
      o.f();
    }
    return u;
  };
  return {
    handleUpdateAlias: M,
    handleRemoveAlias: x,
    handleBatchUpdate: g,
    validateAlias: k
  };
};
function xe(d, s) {
  var a = Object.keys(d);
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(d);
    s && (l = l.filter(function(e) {
      return Object.getOwnPropertyDescriptor(d, e).enumerable;
    })), a.push.apply(a, l);
  }
  return a;
}
function fe(d) {
  for (var s = 1; s < arguments.length; s++) {
    var a = arguments[s] != null ? arguments[s] : {};
    s % 2 ? xe(Object(a), !0).forEach(function(l) {
      He(d, l, a[l]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(d, Object.getOwnPropertyDescriptors(a)) : xe(Object(a)).forEach(function(l) {
      Object.defineProperty(d, l, Object.getOwnPropertyDescriptor(a, l));
    });
  }
  return d;
}
var sa = function(s, a, l) {
  var e = E({
    searchInputMap: {},
    menuModeMap: {},
    expandedMap: {},
    aliasFilterMap: {},
    focusedId: null
  }), b = function() {
    for (var r = new Set(s.value.map(function(se) {
      return se.id;
    })), t = fe({}, e.value), w = 0, F = Object.keys(t.searchInputMap); w < F.length; w++) {
      var f = F[w];
      r.has(f) || delete t.searchInputMap[f];
    }
    for (var n = 0, i = Object.keys(t.menuModeMap); n < i.length; n++) {
      var A = i[n];
      r.has(A) || delete t.menuModeMap[A];
    }
    for (var S = 0, U = Object.keys(t.expandedMap); S < U.length; S++) {
      var X = U[S];
      r.has(X) || delete t.expandedMap[X];
    }
    for (var W = 0, J = Object.keys(t.aliasFilterMap); W < J.length; W++) {
      var Y = J[W];
      r.has(Y) || delete t.aliasFilterMap[Y];
    }
    e.value = t;
  };
  Q(function() {
    return s.value;
  }, function() {
    le(b);
  }, {
    deep: !0
  });
  var k = function(r) {
    e.value.focusedId = r, a(r) && (e.value.menuModeMap[r] = !0);
  }, M = function(r) {
    setTimeout(function() {
      e.value.focusedId === r && (e.value.focusedId = null), e.value.searchInputMap[r] || (e.value.menuModeMap[r] = !1);
    }, 200);
  }, x = function(r) {
    var t;
    if (l.value) {
      e.value.expandedMap[r] = !e.value.expandedMap[r];
      return;
    }
    var w = (t = Object.entries(e.value.expandedMap).find(function(F) {
      var f = Pe(F, 2);
      f[0];
      var n = f[1];
      return n;
    })) === null || t === void 0 ? void 0 : t[0];
    if (e.value.expandedMap[r]) {
      e.value.expandedMap[r] = !1;
      return;
    }
    w && (e.value.expandedMap[w] = !1), e.value.expandedMap[r] = !0;
  }, g = function(r, t) {
    e.value.aliasFilterMap[r] = t, t && (e.value.expandedMap[r] = !0);
  }, O = function(r) {
    e.value.searchInputMap[r] = "", e.value.menuModeMap[r] = !1, e.value.aliasFilterMap[r] = "";
  }, v = B({
    get: function() {
      return e.value.searchInputMap;
    },
    set: function(r) {
      return e.value.searchInputMap = r;
    }
  }), u = B({
    get: function() {
      return e.value.menuModeMap;
    },
    set: function(r) {
      return e.value.menuModeMap = r;
    }
  }), o = B({
    get: function() {
      var r = fe({}, e.value.expandedMap);
      return s.value.forEach(function(t) {
        typeof r[t.id] != "boolean" && (r[t.id] = !1);
      }), r;
    },
    set: function(r) {
      return e.value.expandedMap = r;
    }
  }), p = B({
    get: function() {
      var r = fe({}, e.value.aliasFilterMap);
      return s.value.forEach(function(t) {
        r[t.id] || (r[t.id] = "");
      }), r;
    },
    set: function(r) {
      return e.value.aliasFilterMap = r;
    }
  }), y = function() {
    e.value = {
      searchInputMap: {},
      menuModeMap: {},
      expandedMap: {},
      aliasFilterMap: {},
      focusedId: null
    };
  };
  return {
    searchInputMap: v,
    menuModeMap: u,
    expandedMap: o,
    aliasFilterMap: p,
    handleClear: O,
    handleFocus: k,
    handleBlur: M,
    toggleExpand: x,
    setAliasFilter: g,
    resetState: y
  };
}, ua = Ae.isShow, pe = Ae.showDialog, oa = function() {
  var s = E(), a = E(!1), l = ne(), e = /* @__PURE__ */ function() {
    var x = N(/* @__PURE__ */ D.mark(function g(O) {
      var v;
      return D.wrap(function(u) {
        for (; ; ) switch (u.prev = u.next) {
          case 0:
            return a.value = !0, u.prev = 1, u.next = 2, O();
          case 2:
            u.next = 4;
            break;
          case 3:
            u.prev = 3, v = u.catch(1), console.error("操作失败:", v), l.error(C("2205"));
          case 4:
            return u.prev = 4, a.value = !1, u.finish(4);
          case 5:
          case "end":
            return u.stop();
        }
      }, g, null, [[1, 3, 4, 5]]);
    }));
    return function(O) {
      return x.apply(this, arguments);
    };
  }(), b = function() {
    var g;
    return (g = s.value) === null || g === void 0 ? void 0 : g.click();
  }, k = /* @__PURE__ */ function() {
    var x = N(/* @__PURE__ */ D.mark(function g(O, v) {
      var u;
      return D.wrap(function(o) {
        for (; ; ) switch (o.prev = o.next) {
          case 0:
            if (u = O.target.files, u != null && u[0]) {
              o.next = 1;
              break;
            }
            return o.abrupt("return");
          case 1:
            return o.next = 2, e(/* @__PURE__ */ N(/* @__PURE__ */ D.mark(function p() {
              return D.wrap(function(y) {
                for (; ; ) switch (y.prev = y.next) {
                  case 0:
                    return y.next = 1, v(u[0]);
                  case 1:
                  case "end":
                    return y.stop();
                }
              }, p);
            })));
          case 2:
            s.value && (s.value.value = "");
          case 3:
          case "end":
            return o.stop();
        }
      }, g);
    }));
    return function(O, v) {
      return x.apply(this, arguments);
    };
  }(), M = function(g, O, v, u) {
    return [{
      name: C("1877"),
      fun: function() {
        var o = N(/* @__PURE__ */ D.mark(function y() {
          return D.wrap(function(c) {
            for (; ; ) switch (c.prev = c.next) {
              case 0:
                return c.next = 1, e(/* @__PURE__ */ N(/* @__PURE__ */ D.mark(function r() {
                  return D.wrap(function(t) {
                    for (; ; ) switch (t.prev = t.next) {
                      case 0:
                        return t.next = 1, g();
                      case 1:
                        u.value = !u.value, pe(!1);
                      case 2:
                      case "end":
                        return t.stop();
                    }
                  }, r);
                })));
              case 1:
              case "end":
                return c.stop();
            }
          }, y);
        }));
        function p() {
          return o.apply(this, arguments);
        }
        return p;
      }(),
      primary: !0
    }, {
      name: C("2206"),
      fun: function() {
        O();
      }
    }, {
      name: C("2207"),
      fun: v
    }, {
      name: C("2208"),
      fun: b
    }, {
      name: C("201"),
      fun: function() {
        pe(!1);
      }
    }];
  };
  return {
    isShow: ua,
    showDialog: pe,
    fileInput: s,
    loading: a,
    handleImport: b,
    handleFileSelect: k,
    createFooterBtnList: M,
    withLoading: e
  };
}, ca = {
  class: "alias-cell"
}, da = {
  class: "alias-container"
}, va = {
  class: "chips-container"
}, fa = ["title"], pa = {
  key: 0,
  class: "more-hint"
}, ma = {
  class: "expanded-wrapper"
}, ha = {
  class: "expanded-content"
}, ga = {
  class: "alias-input"
}, ya = ["title"];
const wa = /* @__PURE__ */ be({
  __name: "AliasCell",
  props: {
    item: {},
    expanded: {
      type: Boolean
    },
    filterText: {}
  },
  emits: ["update:aliases", "remove", "toggle-expand", "update:filterText", "show-error"],
  setup: function(s, a) {
    var l = a.emit, e = s, b = l, k = B(function() {
      var n = 800, i = 200, A = n - i - 48, S = 100;
      return Math.floor(A / S);
    }), M = E(""), x = E(!1), g = E(!1), O = B(function() {
      return e.filterText ? e.item.aliases.filter(function(n) {
        var i;
        return n.toLowerCase().includes(((i = e.filterText) === null || i === void 0 ? void 0 : i.toLowerCase()) || "");
      }) : e.item.aliases;
    }), v = B(function() {
      var n = e.filterText ? O.value : e.item.aliases;
      return e.expanded || n.length <= k.value ? n : n.slice(0, k.value);
    }), u = B(function() {
      return O.value.length > k.value;
    }), o = B(function() {
      var n = O.value.length, i = e.expanded ? n : Math.min(n, k.value);
      return n - i;
    }), p = B(function() {
      return !!(x.value || e.filterText || M.value.trim());
    });
    Q(p, function(n) {
      n && !e.expanded && b("toggle-expand");
    });
    var y = function(i) {
      var A, S = i.target;
      S.closest(".v-chip__close, .add-btn, .v-field__input") || (A = window.getSelection()) !== null && A !== void 0 && A.toString() || b("toggle-expand");
    }, c = function() {
      var i = M.value.trim();
      if (i) {
        var A = i.split(/[\s,]+/).map(function(S) {
          return S.trim();
        }).filter(function(S) {
          return S && !e.item.aliases.includes(S);
        });
        if (A.length === 0) {
          b("show-error", C("2195"));
          return;
        }
        b("update:aliases", [].concat(P(e.item.aliases), P(A))), M.value = "", le(function() {
          var S;
          (S = F.value) === null || S === void 0 || S.focus({
            preventScroll: !0
          });
        });
      }
    };
    B(function() {
      return M.value.trim() ? C("2196") : C("2197");
    });
    var r = function(i) {
      i.key === "Enter" ? (i.preventDefault(), c()) : i.key === "Escape" ? (i.preventDefault(), M.value = "", g.value = !1, i.target.blur()) : i.key === "Tab" ? M.value.trim() || (i.preventDefault(), b("toggle-expand")) : i.key === "," && (i.preventDefault(), c());
    }, t = function() {
      x.value = !0, g.value = !0;
    }, w = function() {
      x.value = !1, setTimeout(function() {
        g.value = !1;
      }, 200);
    }, F = E();
    Q(function() {
      return e.expanded;
    }, function(n) {
      n && le(function() {
        var i;
        (i = F.value) === null || i === void 0 || i.focus({
          preventScroll: !0
        });
      });
    });
    var f = function(i) {
      if (e.expanded) {
        var A = i.target, S = A.closest(".alias-cell"), U = A.closest(".v-dialog");
        U && !S && b("toggle-expand");
      }
    };
    return We(function() {
      document.addEventListener("click", f);
    }), Je(function() {
      document.removeEventListener("click", f);
    }), Q(M, function(n) {
      n.trim() && (g.value = !0);
    }, {
      immediate: !0
    }), B(function() {
      var n = 150, i = 768;
      return Math.floor(i / n);
    }), function(n, i) {
      return j(), G("div", ca, [_("div", {
        class: ee(["alias-content", {
          "is-expanded": n.expanded
        }]),
        onClick: ce(y, ["stop"])
      }, [_("div", da, [_("div", {
        class: ee(["chips-wrapper", {
          "has-focus": x.value,
          "has-many": n.item.aliases.length > k.value,
          clickable: !n.expanded && n.item.aliases.length > 0
        }])
      }, [_("div", va, [(j(!0), G(Ge, null, qe(v.value, function(A) {
        return j(), q(Ze, {
          key: A,
          size: "x-small",
          closable: n.expanded,
          class: ee(["ma-1", {
            highlight: M.value === A
          }]),
          "onClick:close": ce(function(S) {
            return b("remove", A);
          }, ["stop"])
        }, {
          default: L(function() {
            return [_("span", {
              class: "alias-text",
              title: A
            }, H(A), 9, fa)];
          }),
          _: 2
        }, 1032, ["closable", "onClick:close", "class"]);
      }), 128))]), !n.expanded && u.value ? (j(), G("span", pa, " +" + H(o.value), 1)) : ie("", !0)], 2)]), Ke(_("div", ma, [_("div", ha, [_("div", ga, [$(Se, {
        ref_key: "inputRef",
        ref: F,
        modelValue: M.value,
        "onUpdate:modelValue": i[0] || (i[0] = function(A) {
          return M.value = A;
        }),
        placeholder: I(C)("2197"),
        onKeydown: r,
        onFocus: t,
        onBlur: w
      }, {
        append: L(function() {
          return [$(me, {
            color: "primary",
            variant: "text",
            size: "small",
            onClick: ce(c, ["stop"]),
            disabled: !M.value.trim(),
            class: "add-btn"
          }, {
            default: L(function() {
              return [$(re, {
                start: "",
                size: "small",
                icon: "$mdi-plus"
              }), ae(" " + H(I(C)("2047")), 1)];
            }),
            _: 1
          }, 8, ["disabled"])];
        }),
        _: 1
      }, 8, ["modelValue", "placeholder"])]), !n.expanded && o.value > 0 ? (j(), G("span", {
        key: 0,
        class: "more-hint",
        title: I(C)("2198", [o.value])
      }, " +" + H(o.value), 9, ya)) : ie("", !0)])], 512), [[Qe, n.expanded]])], 2)]);
    };
  }
}), Ma = /* @__PURE__ */ Ce(wa, [["__scopeId", "data-v-abbc7474"]]);
var xa = {
  class: "alias-dialog"
}, Aa = {
  class: "search-bar mb-2"
}, Ca = {
  class: "d-flex align-center gap-2 ml-4"
}, ba = {
  class: "grid-container"
}, Sa = {
  class: "grid-header"
}, ka = {
  class: "grid-body custom-scrollbar"
}, Fa = {
  key: 0,
  class: "empty-state"
}, Oa = {
  class: "mt-2"
}, Ta = ["onClick"], Ia = {
  class: "command-cell"
}, _a = {
  class: "alias-cell"
};
const Ba = /* @__PURE__ */ be({
  __name: "index",
  setup: function(s) {
    var a = ze(), l = a.aliasList, e = a.initData, b = a.updateAlias, k = a.saveConfig, M = a.resetToDefault, x = a.exportConfig, g = a.importConfig, O = a.checkConflict, v = oa(), u = v.isShow, o = v.showDialog, p = v.fileInput, y = v.handleFileSelect, c = v.createFooterBtnList, r = E(!1), t = c(k, M, x, r), w = na(l), F = w.searchText, f = w.filteredAliasList, n = w.sortBy, i = w.sortOrder, A = w.toggleSort, S = w.resetAll, U = ta(50, l), X = U.addHistory, W = U.handleUndo, J = U.handleRedo, Y = U.canUndo, se = U.canRedo, he = ia(l, b, X, O), ke = he.handleUpdateAlias, Fe = he.handleRemoveAlias, Oe = {
      "ctrl + z": W,
      "ctrl + y": J,
      "ctrl + s": function() {
        var R = N(/* @__PURE__ */ D.mark(function T() {
          var h;
          return D.wrap(function(V) {
            for (; ; ) switch (V.prev = V.next) {
              case 0:
                return V.prev = 0, V.next = 1, k();
              case 1:
                r.value = !r.value, o(!1), V.next = 3;
                break;
              case 2:
                V.prev = 2, h = V.catch(0), console.error("保存失败:", h);
              case 3:
              case "end":
                return V.stop();
            }
          }, T, null, [[0, 2]]);
        }));
        function m() {
          return R.apply(this, arguments);
        }
        return m;
      }()
    }, Te = B(function() {
      return {
        height: 400,
        itemHeight: 32,
        items: f.value
      };
    }), ue = E(null), Ie = function(m) {
      ue.value = m.id;
    }, _e = function(m) {
      var T = l.value.find(function(h) {
        return h.id === m;
      });
      return T ? T.aliases.length > 3 : !1;
    };
    Q(function() {
      return l.value;
    }, function() {
      le(function() {
        Ue.value = {};
      });
    }, {
      deep: !0
    });
    var Z = E(!1), Be = /* @__PURE__ */ function() {
      var R = N(/* @__PURE__ */ D.mark(function m() {
        var T;
        return D.wrap(function(h) {
          for (; ; ) switch (h.prev = h.next) {
            case 0:
              return Z.value = !0, h.prev = 1, h.next = 2, e();
            case 2:
              S(), ue.value = null, oe.success(C("加载成功")), h.next = 4;
              break;
            case 3:
              h.prev = 3, T = h.catch(1), console.error("初始化失败:", T), oe.error(C("加载失败"));
            case 4:
              return h.prev = 4, Z.value = !1, h.finish(4);
            case 5:
            case "end":
              return h.stop();
          }
        }, m, null, [[1, 3, 4, 5]]);
      }));
      return function() {
        return R.apply(this, arguments);
      };
    }();
    Be();
    var oe = ne(), Re = function(m) {
      y(m, g);
    }, K = sa(l, _e, F), Ue = K.menuModeMap, De = K.expandedMap, Ve = K.aliasFilterMap, $e = K.toggleExpand, Ee = K.setAliasFilter, Le = function(m) {
      return {
        "table-row": !0,
        "is-highlighted": m.id === ue.value,
        "has-aliases": m.aliases.length > 0
      };
    }, ge = function(m) {
      (m === "command" || m === "aliases") && A(m);
    }, je = function(m, T) {
      var h = ke(m, T);
      !h.success && h.message && ne().error(h.message);
    };
    return function(R, m) {
      return j(), q(Ne, {
        title: R.t("211"),
        modelValue: I(u),
        "onUpdate:modelValue": m[4] || (m[4] = function(T) {
          return ye(u) ? u.value = T : null;
        }),
        maxWidth: "800",
        footerBtnList: I(t),
        keys: Oe
      }, {
        default: L(function() {
          return [_("div", xa, [$(ea, {
            modelValue: Z.value,
            "onUpdate:modelValue": m[0] || (m[0] = function(T) {
              return Z.value = T;
            }),
            class: "align-center justify-center"
          }, {
            default: L(function() {
              return [$(aa, {
                indeterminate: ""
              })];
            }),
            _: 1
          }, 8, ["modelValue"]), _("div", Aa, [$(Se, {
            modelValue: I(F),
            "onUpdate:modelValue": m[1] || (m[1] = function(T) {
              return ye(F) ? F.value = T : null;
            }),
            placeholder: R.t("1960"),
            "prepend-inner-icon": "$mdi-magnify",
            class: "flex-grow-1",
            clearable: ""
          }, null, 8, ["modelValue", "placeholder"]), _("div", Ca, [$(we, {
            text: R.t("1654"),
            location: "top"
          }, {
            activator: L(function(T) {
              var h = T.props;
              return [$(me, de(h, {
                icon: "houtui",
                disabled: !I(Y),
                onClick: I(W),
                variant: "text",
                size: "32"
              }), null, 16, ["disabled", "onClick"])];
            }),
            _: 1
          }, 8, ["text"]), $(we, {
            text: R.t("204"),
            location: "top"
          }, {
            activator: L(function(T) {
              var h = T.props;
              return [$(me, de(h, {
                icon: "qianjin",
                disabled: !I(se),
                onClick: I(J),
                variant: "text",
                size: "32"
              }), {
                append: L(function() {
                  return P(m[5] || (m[5] = []));
                }),
                _: 1
              }, 16, ["disabled", "onClick"])];
            }),
            _: 1
          }, 8, ["text"])])]), _("div", ba, [_("div", Sa, [_("div", {
            class: "command-header text-center",
            onClick: m[2] || (m[2] = function(T) {
              return ge("command");
            })
          }, [ae(H(R.t("1703")) + " ", 1), I(n) === "command" ? (j(), q(re, {
            key: 0,
            size: "20",
            icon: I(i) === "asc" ? "$mdi-arrow-up" : "$mdi-arrow-down",
            color: "primary",
            class: "ml-1"
          }, null, 8, ["icon"])) : ie("", !0)]), _("div", {
            class: "alias-header text-center",
            onClick: m[3] || (m[3] = function(T) {
              return ge("aliases");
            })
          }, [ae(H(R.t("1961")) + " ", 1), I(n) === "aliases" ? (j(), q(re, {
            key: 0,
            size: "20",
            icon: I(i) === "asc" ? "$mdi-arrow-up" : "$mdi-arrow-down",
            color: "primary",
            class: "ml-1"
          }, null, 8, ["icon"])) : ie("", !0)])]), _("div", ka, [I(f).length === 0 ? (j(), G("div", Fa, [$(re, {
            size: "48",
            color: "grey"
          }, {
            default: L(function() {
              return P(m[6] || (m[6] = [ae("$mdi-magnify", -1)]));
            }),
            _: 1
          }), _("p", Oa, H(R.t("1962")), 1)])) : (j(), q(ra, Xe(de({
            key: 1
          }, Te.value)), {
            default: L(function(T) {
              var h = T.item;
              return [_("div", {
                class: ee(["grid-row", Le(h)]),
                onClick: function(z) {
                  return Ie(h);
                }
              }, [_("div", Ia, H(h.command), 1), _("div", _a, [$(Ma, {
                item: h,
                expanded: !!I(De)[h.id],
                filterText: I(Ve)[h.id],
                "onUpdate:filterText": function(z) {
                  return I(Ee)(h.id, z);
                },
                "onUpdate:aliases": function(z) {
                  return je(h.id, z);
                },
                onRemove: function(z) {
                  return I(Fe)(h.id, z);
                },
                onToggleExpand: function(z) {
                  return I($e)(h.id);
                },
                onShowError: I(oe).error
              }, null, 8, ["item", "expanded", "filterText", "onUpdate:filterText", "onUpdate:aliases", "onRemove", "onToggleExpand", "onShowError"])])], 10, Ta)];
            }),
            _: 1
          }, 16))])])]), _("input", {
            type: "file",
            ref_key: "fileInput",
            ref: p,
            accept: ".json",
            style: {
              display: "none"
            },
            onChange: Re
          }, null, 544)];
        }),
        _: 1
      }, 8, ["title", "modelValue", "footerBtnList"]);
    };
  }
}), Ea = /* @__PURE__ */ Ce(Ba, [["__scopeId", "data-v-ceffdd01"]]);
export {
  Ea as default
};
