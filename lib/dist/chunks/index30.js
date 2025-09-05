import { k as M, t as p, _ as H, x as ee, a as A, bg as Xe, d as Ze, c as xe, l as Te, bS as ae, H as me, h as re, aL as _e, X as Pe, bT as er, R as Ve, bU as Ce } from "./lib.js";
import { f as R, g as te, i as he, j as $e, u as je, d as Ne, m as le, o as Q, w as W, l as U, a as B, y as fe, x as se, G as j, p as ce, Q as ge, k as rr, c as ie, q as X, t as G, F as ve, b as Ke, s as Ae } from "./vue.js";
import "./mxcad.js";
import { a9 as ar, i as de, v as nr, d as Be, c as tr, aa as ir, V as or, b as _, k as ur, ab as lr, l as sr, m as cr, _ as fr, a as pe } from "./vuetify.js";
var dr = ["skipConflictCheck"];
function ye(i, n) {
  var e = typeof Symbol != "undefined" && i[Symbol.iterator] || i["@@iterator"];
  if (!e) {
    if (Array.isArray(i) || (e = vr(i)) || n) {
      e && (i = e);
      var u = 0, k = function() {
      };
      return { s: k, n: function() {
        return u >= i.length ? { done: !0 } : { done: !1, value: i[u++] };
      }, e: function(v) {
        throw v;
      }, f: k };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var C, D = !0, T = !1;
  return { s: function() {
    e = e.call(i);
  }, n: function() {
    var v = e.next();
    return D = v.done, v;
  }, e: function(v) {
    T = !0, C = v;
  }, f: function() {
    try {
      D || e.return == null || e.return();
    } finally {
      if (T) throw C;
    }
  } };
}
function vr(i, n) {
  if (i) {
    if (typeof i == "string") return Ee(i, n);
    var e = {}.toString.call(i).slice(8, -1);
    return e === "Object" && i.constructor && (e = i.constructor.name), e === "Map" || e === "Set" ? Array.from(i) : e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e) ? Ee(i, n) : void 0;
  }
}
function Ee(i, n) {
  (n == null || n > i.length) && (n = i.length);
  for (var e = 0, u = Array(n); e < n; e++) u[e] = i[e];
  return u;
}
function Le(i, n) {
  var e = Object.keys(i);
  if (Object.getOwnPropertySymbols) {
    var u = Object.getOwnPropertySymbols(i);
    n && (u = u.filter(function(k) {
      return Object.getOwnPropertyDescriptor(i, k).enumerable;
    })), e.push.apply(e, u);
  }
  return e;
}
function Z(i) {
  for (var n = 1; n < arguments.length; n++) {
    var e = arguments[n] != null ? arguments[n] : {};
    n % 2 ? Le(Object(e), !0).forEach(function(u) {
      Te(i, u, e[u]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(e)) : Le(Object(e)).forEach(function(u) {
      Object.defineProperty(i, u, Object.getOwnPropertyDescriptor(e, u));
    });
  }
  return i;
}
var pr = navigator.platform.toLowerCase().includes("win") || navigator.userAgent.includes("Windows"), yr = function() {
  var n = R([]), e = R(/* @__PURE__ */ new Map()), u = R({
    isLoading: !1,
    hasChanges: !1,
    lastError: null
  }), k = function(o) {
    var r = n.value.find(function(t) {
      return t.id === o;
    });
    if (!r) return !1;
    var l = M.isKeySuspended(o), s = r.isSuspended;
    return l !== s && (console.warn("Shortcut suspension state mismatch:", {
      id: o,
      managerState: l,
      localState: s
    }), s ? M.suspendKey(o) : M.resumeKey(o)), !0;
  }, C = function(o, r) {
    var l = Array.isArray(o) ? o : [o], s = [];
    return n.value.forEach(function(t) {
      if (!(r && t.id === r || t.isSuspended)) {
        var f = [];
        Array.isArray(t.key) ? f.push.apply(f, ee(t.key)) : t.key && f.push(t.key), pr && t.winKey && (Array.isArray(t.winKey) ? f.push.apply(f, ee(t.winKey)) : f.push(t.winKey));
        var d = function(y, g) {
          var b = {
            ctrlKey: !!y.ctrlKey,
            shiftKey: !!y.shiftKey,
            altKey: !!y.altKey,
            metaKey: !!y.metaKey,
            keyCode: y.keyCode
          }, F = {
            ctrlKey: !!g.ctrlKey,
            shiftKey: !!g.shiftKey,
            altKey: !!g.altKey,
            metaKey: !!g.metaKey,
            keyCode: g.keyCode
          }, O = b.ctrlKey === F.ctrlKey && b.shiftKey === F.shiftKey && b.altKey === F.altKey && b.metaKey === F.metaKey, m = b.keyCode === F.keyCode;
          if (b.keyCode === "*" || F.keyCode === "*")
            return O;
          var c = O && m;
          return c && console.debug("Key comparison details:", {
            key1: b,
            key2: F,
            modifiersMatch: O,
            keyCodeMatch: m
          }), c;
        }, L = l.some(function(S) {
          return f.some(function(y) {
            var g = d(S, y);
            return g && console.debug("Conflict detected:", {
              new: {
                keyCode: S.keyCode,
                ctrlKey: !!S.ctrlKey,
                shiftKey: !!S.shiftKey,
                altKey: !!S.altKey,
                metaKey: !!S.metaKey
              },
              existing: {
                keyCode: y.keyCode,
                ctrlKey: !!y.ctrlKey,
                shiftKey: !!y.shiftKey,
                altKey: !!y.altKey,
                metaKey: !!y.metaKey
              },
              shortcut: {
                id: t.id,
                label: t.info.label,
                command: t.info.command
              }
            }), g;
          });
        });
        L && s.push(t);
      }
    }), s.length > 0 && console.warn("Shortcut conflicts found:", {
      newKeys: l.map(function(t) {
        return {
          keyCode: t.keyCode,
          ctrlKey: !!t.ctrlKey,
          shiftKey: !!t.shiftKey,
          altKey: !!t.altKey,
          metaKey: !!t.metaKey
        };
      }),
      conflicts: s.map(function(t) {
        return {
          id: t.id,
          label: t.info.label,
          command: t.info.command,
          key: Array.isArray(t.key) ? t.key.map(function(f) {
            return {
              keyCode: f.keyCode,
              ctrlKey: !!f.ctrlKey,
              shiftKey: !!f.shiftKey,
              altKey: !!f.altKey,
              metaKey: !!f.metaKey
            };
          }) : t.key ? {
            keyCode: t.key.keyCode,
            ctrlKey: !!t.key.ctrlKey,
            shiftKey: !!t.key.shiftKey,
            altKey: !!t.key.altKey,
            metaKey: !!t.key.metaKey
          } : null
        };
      })
    }), s;
  }, D = /* @__PURE__ */ function() {
    var a = H(/* @__PURE__ */ A.mark(function o(r) {
      var l;
      return A.wrap(function(s) {
        for (; ; ) switch (s.prev = s.next) {
          case 0:
            l = n.value.findIndex(function(t) {
              return t.id === r;
            }), l !== -1 && (n.value.splice(l, 1), M.unregister(r), u.value.hasChanges = !0);
          case 1:
          case "end":
            return s.stop();
        }
      }, o);
    }));
    return function(r) {
      return a.apply(this, arguments);
    };
  }(), T = function() {
    try {
      var o = M.getRegisteredShortcuts(), r = M.getSuspendedKeys();
      n.value = o.filter(function(f) {
        return !!(f.info && typeof f.info.label == "string" && typeof f.info.command == "string" && typeof f.info.category == "string" && typeof f.info.description == "string");
      }).map(function(f) {
        e.value.set(f.id, {
          key: f.key,
          winKey: f.winKey,
          when: f.when,
          action: f.action,
          isNoPreventDefault: f.isNoPreventDefault,
          info: f.info
        });
        var d = r.includes(f.id);
        return Z(Z({}, f), {}, {
          isSuspended: d
        });
      });
      var l = ye(n.value), s;
      try {
        for (l.s(); !(s = l.n()).done; ) {
          var t = s.value;
          t.isSuspended && M.suspendKey(t.id);
        }
      } catch (f) {
        l.e(f);
      } finally {
        l.f();
      }
      n.value.forEach(function(f) {
        k(f.id);
      });
    } catch (f) {
      console.error(p("2346") + ":", f), u.value.lastError = f;
    }
  }, w = /* @__PURE__ */ function() {
    var a = H(/* @__PURE__ */ A.mark(function o(r, l) {
      var s, t, f, d, L, S, y, g;
      return A.wrap(function(b) {
        for (; ; ) switch (b.prev = b.next) {
          case 0:
            if (b.prev = 0, u.value.isLoading = !0, s = n.value.findIndex(function(F) {
              return F.id === r;
            }), s !== -1) {
              b.next = 1;
              break;
            }
            return b.abrupt("return");
          case 1:
            if (t = e.value.get(r), t) {
              b.next = 2;
              break;
            }
            return b.abrupt("return");
          case 2:
            if (f = l.skipConflictCheck, d = Xe(l, dr), !(!f && d.key)) {
              b.next = 6;
              break;
            }
            if (!Array.isArray(d.key)) {
              b.next = 4;
              break;
            }
            if (d.key.length !== 0) {
              b.next = 3;
              break;
            }
            throw new Error(p("2347"));
          case 3:
            d.key.forEach(function(F, O) {
              if (!F.keyCode)
                throw new Error("".concat(p("2348")).concat(p("1690")).concat(p("2349"), " ").concat(O + 1, " ").concat(p("1920")).concat(p("2350")));
            }), b.next = 5;
            break;
          case 4:
            if (d.key.keyCode) {
              b.next = 5;
              break;
            }
            throw new Error(p("2351"));
          case 5:
            if (L = C(d.key, r), !(L.length > 0)) {
              b.next = 6;
              break;
            }
            throw S = L.map(function(F) {
              return {
                label: F.info.label,
                command: F.info.command,
                key: Array.isArray(F.key) ? F.key[0] : F.key
              };
            }), console.warn("Shortcut conflict detected:", {
              newKey: d.key,
              conflicts: S
            }), new Error("".concat(p("2352"), "：").concat(p("1771")).concat(p("1703"), ' "').concat(L.map(function(F) {
              return F.info.label;
            }).join('", "'), '" ').concat(p("2353")));
          case 6:
            if (y = Z(Z(Z({}, n.value[s]), d), {}, {
              action: t.action,
              when: t.when
            }), n.value[s] = y, !("isSuspended" in d)) {
              b.next = 7;
              break;
            }
            d.isSuspended ? (M.unregister(r), M.suspendKey(r), console.debug("Suspended shortcut:", r)) : (M.resumeKey(r), M.registerWithId(r, {
              key: y.key,
              winKey: y.winKey,
              when: t.when,
              action: t.action,
              isNoPreventDefault: y.isNoPreventDefault,
              info: t.info
            }), console.debug("Resumed and re-registered shortcut with original ID:", r)), b.next = 8;
            break;
          case 7:
            if (y.isSuspended) {
              b.next = 8;
              break;
            }
            return b.next = 8, M.updateShortcut(r, {
              key: y.key,
              winKey: y.winKey,
              when: t.when,
              action: t.action,
              isNoPreventDefault: y.isNoPreventDefault,
              info: t.info
            });
          case 8:
            u.value.hasChanges = !0, console.debug("Shortcut updated:", {
              id: r,
              isSuspended: y.isSuspended,
              key: y.key
            }), b.next = 10;
            break;
          case 9:
            throw b.prev = 9, g = b.catch(0), u.value.lastError = g, console.error(p("2354") + ":", g), g;
          case 10:
            return b.prev = 10, u.value.isLoading = !1, b.finish(10);
          case 11:
          case "end":
            return b.stop();
        }
      }, o, null, [[0, 9, 10, 11]]);
    }));
    return function(r, l) {
      return a.apply(this, arguments);
    };
  }(), v = /* @__PURE__ */ function() {
    var a = H(/* @__PURE__ */ A.mark(function o() {
      var r, l, s, t, f, d, L, S, y;
      return A.wrap(function(g) {
        for (; ; ) switch (g.prev = g.next) {
          case 0:
            g.prev = 0, r = ye(n.value);
            try {
              for (r.s(); !(l = r.n()).done; )
                s = l.value, M.unregister(s.id);
            } catch (b) {
              r.e(b);
            } finally {
              r.f();
            }
            M.resumeAllKeys(), n.value = [], t = ye(e.value.entries());
            try {
              for (t.s(); !(f = t.n()).done; )
                d = Ze(f.value, 2), L = d[0], S = d[1], M.registerWithId(L, {
                  key: S.key,
                  winKey: S.winKey,
                  when: S.when,
                  action: S.action,
                  isNoPreventDefault: S.isNoPreventDefault,
                  info: S.info
                }), n.value.push({
                  id: L,
                  key: S.key,
                  winKey: S.winKey,
                  when: S.when,
                  action: S.action,
                  isNoPreventDefault: S.isNoPreventDefault,
                  info: S.info,
                  isSuspended: !1
                });
            } catch (b) {
              t.e(b);
            } finally {
              t.f();
            }
            return localStorage.removeItem("mxcad-shortcuts"), localStorage.removeItem("mxcad-suspended-keys"), g.next = 1, T();
          case 1:
            u.value.hasChanges = !0, console.debug("Reset to default completed, shortcuts count:", n.value.length), g.next = 3;
            break;
          case 2:
            throw g.prev = 2, y = g.catch(0), console.error(p("2355") + ":", y), y;
          case 3:
          case "end":
            return g.stop();
        }
      }, o, null, [[0, 2]]);
    }));
    return function() {
      return a.apply(this, arguments);
    };
  }(), h = /* @__PURE__ */ function() {
    var a = H(/* @__PURE__ */ A.mark(function o(r) {
      var l, s, t, f;
      return A.wrap(function(d) {
        for (; ; ) switch (d.prev = d.next) {
          case 0:
            if (d.prev = 0, u.value.isLoading = !0, l = Math.max.apply(Math, ee(n.value.map(function(L) {
              return L.id;
            })).concat([0])) + 1, s = {
              id: l,
              key: r.key,
              winKey: r.winKey,
              info: r.info,
              action: function(S) {
                r.info.command && xe(r.info.command);
              },
              isSuspended: !1
            }, t = C(r.key), !(t.length > 0)) {
              d.next = 1;
              break;
            }
            throw new Error("".concat(p("2352"), "：").concat(p("1771")).concat(p("1703"), ' "').concat(t.map(function(L) {
              return L.info.label;
            }).join('", "'), '" ').concat(p("2353")));
          case 1:
            return M.registerWithId(l, {
              key: r.key,
              winKey: r.winKey,
              action: s.action,
              info: r.info
            }), n.value.push(s), e.value.set(l, {
              key: r.key,
              winKey: r.winKey,
              action: s.action,
              info: r.info
            }), u.value.hasChanges = !0, d.abrupt("return", l);
          case 2:
            throw d.prev = 2, f = d.catch(0), u.value.lastError = f, console.error(p("2356") + ":", f), f;
          case 3:
            return d.prev = 3, u.value.isLoading = !1, d.finish(3);
          case 4:
          case "end":
            return d.stop();
        }
      }, o, null, [[0, 2, 3, 4]]);
    }));
    return function(r) {
      return a.apply(this, arguments);
    };
  }(), K = /* @__PURE__ */ function() {
    var a = H(/* @__PURE__ */ A.mark(function o(r) {
      var l;
      return A.wrap(function(s) {
        for (; ; ) switch (s.prev = s.next) {
          case 0:
            l = n.value.findIndex(function(t) {
              return t.id === r;
            }), l !== -1 && (n.value[l] = Z(Z({}, n.value[l]), {}, {
              key: [],
              winKey: void 0
            }), M.unregister(r), u.value.hasChanges = !0);
          case 1:
          case "end":
            return s.stop();
        }
      }, o);
    }));
    return function(r) {
      return a.apply(this, arguments);
    };
  }();
  return T(), {
    shortcuts: n,
    operationState: u,
    updateShortcut: w,
    resetToDefault: v,
    validateShortcutState: k,
    checkConflict: C,
    removeShortcut: D,
    addShortcut: h,
    emptiedShortcut: K
  };
}, mr = function(n) {
  var e = R(""), u = R("asc"), k = R("label"), C = function(o, r) {
    var l;
    if (!r) return !0;
    var s = r.toLowerCase().trim();
    if (!s) return !0;
    var t = Array.isArray(o.key) ? o.key.map(function(f) {
      return ae(f).toLowerCase();
    }) : o.key ? [ae(o.key).toLowerCase()] : [];
    return o.info.label.toLowerCase().includes(s) || o.info.command.toLowerCase().includes(s) || (((l = o.info.description) === null || l === void 0 ? void 0 : l.toLowerCase()) || "").includes(s) || t.some(function(f) {
      return f.includes(s);
    });
  }, D = te(function() {
    var a = ee(n.value);
    return e.value && (a = a.filter(function(o) {
      return C(o, e.value);
    })), a.sort(function(o, r) {
      var l = K(o, k.value), s = K(r, k.value), t = l.localeCompare(s);
      return u.value === "asc" ? t : -t;
    }), a;
  }), T = te(function() {
    var a = n.value.length, o = D.value.length;
    return {
      total: a,
      filtered: o,
      hasFilter: e.value !== ""
    };
  }), w = function(o) {
    k.value === o ? u.value = u.value === "asc" ? "desc" : "asc" : (k.value = o, u.value = "asc");
  }, v = function() {
    e.value = "", u.value = "asc", k.value = "label";
  }, h = function() {
    e.value = "";
  }, K = function(o, r) {
    switch (r) {
      case "label":
        return o.info.label.toLowerCase();
      case "command":
        return o.info.command.toLowerCase();
      case "category":
        return o.info.category.toLowerCase();
      default:
        return "";
    }
  };
  return {
    // 状态
    searchText: e,
    sortOrder: u,
    sortBy: k,
    // 计算属性
    filteredShortcuts: D,
    searchStats: T,
    // 方法
    resetAll: v,
    resetFilter: h,
    toggleSort: w
  };
}, hr = function(n, e) {
  var u = R(null), k = R(!1), C = null, D = !1, T = /* @__PURE__ */ function() {
    var h = H(/* @__PURE__ */ A.mark(function K(a) {
      var o, r, l, s, t, f;
      return A.wrap(function(d) {
        for (; ; ) switch (d.prev = d.next) {
          case 0:
            if (!(!u.value || !k.value || D)) {
              d.next = 1;
              break;
            }
            return d.abrupt("return");
          case 1:
            if (d.prev = 1, D = !0, a.preventDefault(), a.stopPropagation(), a.stopImmediatePropagation(), !["Control", "Shift", "Alt", "Meta", "Escape"].includes(a.key)) {
              d.next = 2;
              break;
            }
            return a.key === "Escape" && v(), d.abrupt("return");
          case 2:
            if (o = {
              keyCode: a.code,
              ctrlKey: a.ctrlKey,
              shiftKey: a.shiftKey,
              altKey: a.altKey,
              metaKey: a.metaKey
            }, r = e(o, u.value.id), !(r.length > 0)) {
              d.next = 4;
              break;
            }
            return l = me(), s = r.map(function(L) {
              return '"'.concat(L.info.label, '"');
            }).join("、"), d.next = 3, l.open({
              title: p("2352"),
              text: "".concat(p("1809"), ' "').concat(ae(o), '" ').concat(p("2357"), `：
`).concat(s),
              defineTitle: p("1829")
            });
          case 3:
            return d.abrupt("return");
          case 4:
            return d.next = 5, n(u.value.id, {
              key: o,
              winKey: void 0
            });
          case 5:
            v(), d.next = 7;
            break;
          case 6:
            return d.prev = 6, f = d.catch(1), console.error(p("2354") + ":", f), t = me(), d.next = 7, t.open({
              title: p("2358"),
              text: p("2354"),
              defineTitle: p("1829")
            });
          case 7:
            return d.prev = 7, D = !1, d.finish(7);
          case 8:
          case "end":
            return d.stop();
        }
      }, K, null, [[1, 6, 7, 8]]);
    }));
    return function(a) {
      return h.apply(this, arguments);
    };
  }(), w = function(K) {
    C && (C(), C = null), u.value = K, k.value = !0, D = !1;
    var a = function(l) {
      k.value && (l.preventDefault(), l.stopPropagation(), T(l));
    };
    document.addEventListener("keydown", a, !0);
    var o = function(l) {
      var s = l.target, t = s.closest(".shortcut-input");
      t && t.classList.contains("editing") ? (l.preventDefault(), l.stopPropagation()) : v();
    };
    document.addEventListener("click", o, !0), C = function() {
      document.removeEventListener("keydown", a, !0), document.removeEventListener("click", o, !0), D = !1;
    };
  }, v = function() {
    C && (C(), C = null), u.value = null, k.value = !1, D = !1, setTimeout(function() {
      D = !1;
    }, 100);
  };
  return {
    editingShortcut: u,
    isEditing: k,
    handleKeyPress: T,
    startEdit: w,
    cancelEdit: v
  };
}, ke = [{
  id: "all",
  name: p("182"),
  icon: "$mdi-folder-multiple-outline",
  description: p("2333")
}, {
  id: "common",
  name: p("2334"),
  icon: "$mdi-star-outline",
  description: p("2335")
}, {
  id: "draw",
  name: p("2336"),
  icon: "$mdi-pencil-outline",
  description: p("2337")
}, {
  id: "edit",
  name: p("2338"),
  icon: "$mdi-pencil-ruler",
  description: p("2339")
}, {
  id: "view",
  name: p("2340"),
  icon: "$mdi-eye-outline",
  description: p("2341")
}, {
  id: "dim",
  name: p("2342"),
  icon: "$mdi-ruler",
  description: p("2343")
}, {
  id: "custom",
  name: p("2344"),
  icon: "$mdi-cog-outline",
  description: p("2345")
}], gr = function(n) {
  var e = R("all"), u = R(ke), k = te(function() {
    var K = /* @__PURE__ */ new Map();
    return u.value.forEach(function(a) {
      K.set(a.id, 0);
    }), n.value.forEach(function(a) {
      var o = a.info.category;
      K.set(o, (K.get(o) || 0) + 1);
    }), K.set("all", n.value.length), K;
  }), C = function(a) {
    a !== "all" && k.value.get(a) === 0 || (e.value = a);
  }, D = function(a) {
    return u.value.find(function(o) {
      return o.id === a;
    });
  }, T = function() {
    e.value = "all";
  }, w = function(a) {
    var o;
    return ((o = D(a)) === null || o === void 0 ? void 0 : o.icon) || ke[0].icon;
  }, v = function(a) {
    var o;
    return ((o = D(a)) === null || o === void 0 ? void 0 : o.name) || a;
  }, h = function(a) {
    return e.value === "all" ? a : a.filter(function(o) {
      return o.info.category === e.value;
    });
  };
  return {
    categories: u.value,
    currentCategory: e,
    categoryCounts: k,
    switchCategory: C,
    getCategoryInfo: D,
    getCategoryIcon: w,
    getCategoryName: v,
    filterByCategory: h,
    resetCategory: T
  };
};
function kr(i, n) {
  var e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, u = null, k = !0, C = function() {
    for (var w = arguments.length, v = new Array(w), h = 0; h < w; h++)
      v[h] = arguments[h];
    var K = this;
    if (e && k) {
      i.apply(K, v), k = !1;
      return;
    }
    u && clearTimeout(u), u = setTimeout(function() {
      i.apply(K, v), u = null, e && (k = !0);
    }, n);
  }, D = function() {
    u && (clearTimeout(u), u = null), e && (k = !0);
  };
  return {
    exec: C,
    cancel: D
  };
}
function De(i, n) {
  var e = Object.keys(i);
  if (Object.getOwnPropertySymbols) {
    var u = Object.getOwnPropertySymbols(i);
    n && (u = u.filter(function(k) {
      return Object.getOwnPropertyDescriptor(i, k).enumerable;
    })), e.push.apply(e, u);
  }
  return e;
}
function oe(i) {
  for (var n = 1; n < arguments.length; n++) {
    var e = arguments[n] != null ? arguments[n] : {};
    n % 2 ? De(Object(e), !0).forEach(function(u) {
      Te(i, u, e[u]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(e)) : De(Object(e)).forEach(function(u) {
      Object.defineProperty(i, u, Object.getOwnPropertyDescriptor(e, u));
    });
  }
  return i;
}
function ue(i, n) {
  var e = typeof Symbol != "undefined" && i[Symbol.iterator] || i["@@iterator"];
  if (!e) {
    if (Array.isArray(i) || (e = wr(i)) || n) {
      e && (i = e);
      var u = 0, k = function() {
      };
      return { s: k, n: function() {
        return u >= i.length ? { done: !0 } : { done: !1, value: i[u++] };
      }, e: function(v) {
        throw v;
      }, f: k };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var C, D = !0, T = !1;
  return { s: function() {
    e = e.call(i);
  }, n: function() {
    var v = e.next();
    return D = v.done, v;
  }, e: function(v) {
    T = !0, C = v;
  }, f: function() {
    try {
      D || e.return == null || e.return();
    } finally {
      if (T) throw C;
    }
  } };
}
function wr(i, n) {
  if (i) {
    if (typeof i == "string") return Oe(i, n);
    var e = {}.toString.call(i).slice(8, -1);
    return e === "Object" && i.constructor && (e = i.constructor.name), e === "Map" || e === "Set" ? Array.from(i) : e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e) ? Oe(i, n) : void 0;
  }
}
function Oe(i, n) {
  (n == null || n > i.length) && (n = i.length);
  for (var e = 0, u = Array(n); e < n; e++) u[e] = i[e];
  return u;
}
var Sr = function(n, e) {
  var u = R(!1), k = R(!1), C = R({
    lastSyncTime: null,
    isSyncing: !1,
    syncError: null
  }), D = /* @__PURE__ */ new Map(), T = function() {
    n.value.forEach(function(l) {
      D.set(l.id, {
        when: l.when,
        action: l.action,
        isNoPreventDefault: l.isNoPreventDefault
      });
    });
  }, w = kr(/* @__PURE__ */ H(/* @__PURE__ */ A.mark(function r() {
    var l;
    return A.wrap(function(s) {
      for (; ; ) switch (s.prev = s.next) {
        case 0:
          return s.prev = 0, C.value.isSyncing = !0, s.next = 1, a();
        case 1:
          C.value.lastSyncTime = /* @__PURE__ */ new Date(), s.next = 3;
          break;
        case 2:
          s.prev = 2, l = s.catch(0), C.value.syncError = l, console.error(p("2363") + ":", l);
        case 3:
          return s.prev = 3, C.value.isSyncing = !1, s.finish(3);
        case 4:
        case "end":
          return s.stop();
      }
    }, r, null, [[0, 2, 3, 4]]);
  })), 1e3), v = w.cancel, h = /* @__PURE__ */ function() {
    var r = H(/* @__PURE__ */ A.mark(function l() {
      var s, t, f, d, L;
      return A.wrap(function(S) {
        for (; ; ) switch (S.prev = S.next) {
          case 0:
            try {
              k.value = !0, s = {
                version: "1.0.0",
                shortcuts: n.value.map(function(y) {
                  return {
                    id: y.id,
                    key: y.key,
                    winKey: y.winKey,
                    info: {
                      label: y.info.label,
                      command: y.info.command,
                      category: y.info.category,
                      description: y.info.description
                    },
                    isSuspended: !!y.isSuspended
                  };
                })
              }, t = new Blob([JSON.stringify(s, null, 2)], {
                type: "application/json"
              }), f = URL.createObjectURL(t), d = document.createElement("a"), d.href = f, d.download = "shortcuts-".concat((/* @__PURE__ */ new Date()).toISOString().slice(0, 10), ".json"), document.body.appendChild(d), d.click(), document.body.removeChild(d), URL.revokeObjectURL(f);
            } catch (y) {
              console.error(p("2364") + ":", y), L = me(), L.open({
                title: p("2358"),
                text: p("2364"),
                defineTitle: p("1829")
              });
            } finally {
              k.value = !1;
            }
          case 1:
          case "end":
            return S.stop();
        }
      }, l);
    }));
    return function() {
      return r.apply(this, arguments);
    };
  }(), K = /* @__PURE__ */ function() {
    var r = H(/* @__PURE__ */ A.mark(function l() {
      var s, t, f, d, L, S, y, g, b, F, O;
      return A.wrap(function(m) {
        for (; ; ) switch (m.prev = m.next) {
          case 0:
            return m.prev = 0, u.value = !0, s = document.createElement("input"), s.type = "file", s.accept = ".json", m.next = 1, new Promise(function(c, V) {
              s.onchange = function(J) {
                var q = J.target.files;
                q && q.length > 0 ? c(q[0]) : V(new Error("未选择文件"));
              }, s.click();
            });
          case 1:
            return t = m.sent, m.next = 2, t.text();
          case 2:
            if (f = m.sent, d = JSON.parse(f), !(!d.version || !Array.isArray(d.shortcuts))) {
              m.next = 3;
              break;
            }
            throw new Error("无效的配置文件格式");
          case 3:
            L = ue(d.shortcuts), m.prev = 4, y = /* @__PURE__ */ A.mark(function c() {
              var V, J, q;
              return A.wrap(function(z) {
                for (; ; ) switch (z.prev = z.next) {
                  case 0:
                    if (V = S.value, J = n.value.find(function(ne) {
                      return ne.id === V.id;
                    }), !J) {
                      z.next = 1;
                      break;
                    }
                    if (q = D.get(V.id), !q) {
                      z.next = 1;
                      break;
                    }
                    return z.next = 1, e(V.id, oe(oe({
                      key: V.key,
                      winKey: V.winKey,
                      isSuspended: V.isSuspended
                    }, q), {}, {
                      skipConflictCheck: !0
                    }));
                  case 1:
                  case "end":
                    return z.stop();
                }
              }, c);
            }), L.s();
          case 5:
            if ((S = L.n()).done) {
              m.next = 7;
              break;
            }
            return m.delegateYield(y(), "t0", 6);
          case 6:
            m.next = 5;
            break;
          case 7:
            m.next = 9;
            break;
          case 8:
            m.prev = 8, F = m.catch(4), L.e(F);
          case 9:
            return m.prev = 9, L.f(), m.finish(9);
          case 10:
            g = re(), g.success("快捷键配置导入成功"), m.next = 12;
            break;
          case 11:
            m.prev = 11, O = m.catch(0), console.error("导入快捷键配置失败:", O), b = re(), b.error("导入快捷键配置失败");
          case 12:
            return m.prev = 12, u.value = !1, m.finish(12);
          case 13:
          case "end":
            return m.stop();
        }
      }, l, null, [[0, 11, 12, 13], [4, 8, 9, 10]]);
    }));
    return function() {
      return r.apply(this, arguments);
    };
  }(), a = /* @__PURE__ */ function() {
    var r = H(/* @__PURE__ */ A.mark(function l() {
      var s, t, f, d, L, S, y, g, b, F, O, m;
      return A.wrap(function(c) {
        for (; ; ) switch (c.prev = c.next) {
          case 0:
            c.prev = 0, C.value.isSyncing = !0, s = {
              version: "1.0.0",
              shortcuts: n.value.map(function(V) {
                return {
                  id: V.id,
                  key: V.key,
                  winKey: V.winKey,
                  info: V.info,
                  isSuspended: !!V.isSuspended
                };
              })
            }, localStorage.setItem("mxcad-shortcuts", JSON.stringify(s)), t = ue(n.value), c.prev = 1, t.s();
          case 2:
            if ((f = t.n()).done) {
              c.next = 6;
              break;
            }
            if (d = f.value, !d.isSuspended) {
              c.next = 4;
              break;
            }
            return c.next = 3, M.suspendKey(d.id);
          case 3:
            c.next = 5;
            break;
          case 4:
            return c.next = 5, M.resumeKey(d.id);
          case 5:
            c.next = 2;
            break;
          case 6:
            c.next = 8;
            break;
          case 7:
            c.prev = 7, F = c.catch(1), t.e(F);
          case 8:
            return c.prev = 8, t.f(), c.finish(8);
          case 9:
            L = ue(n.value), c.prev = 10, L.s();
          case 11:
            if ((S = L.n()).done) {
              c.next = 13;
              break;
            }
            return y = S.value, g = {
              key: y.key,
              winKey: y.winKey,
              when: y.when,
              action: y.action,
              isNoPreventDefault: y.isNoPreventDefault,
              info: y.info
            }, c.next = 12, M.updateShortcut(y.id, g);
          case 12:
            c.next = 11;
            break;
          case 13:
            c.next = 15;
            break;
          case 14:
            c.prev = 14, O = c.catch(10), L.e(O);
          case 15:
            return c.prev = 15, L.f(), c.finish(15);
          case 16:
            C.value.lastSyncTime = /* @__PURE__ */ new Date(), C.value.syncError = null, c.next = 18;
            break;
          case 17:
            throw c.prev = 17, m = c.catch(0), C.value.syncError = m, console.error("保存快捷键配置失败:", m), b = re(), b.error("保存快捷键配置失败"), m;
          case 18:
            return c.prev = 18, C.value.isSyncing = !1, c.finish(18);
          case 19:
          case "end":
            return c.stop();
        }
      }, l, null, [[0, 17, 18, 19], [1, 7, 8, 9], [10, 14, 15, 16]]);
    }));
    return function() {
      return r.apply(this, arguments);
    };
  }(), o = /* @__PURE__ */ function() {
    var r = H(/* @__PURE__ */ A.mark(function l() {
      var s, t, f, d, L, S, y;
      return A.wrap(function(g) {
        for (; ; ) switch (g.prev = g.next) {
          case 0:
            if (g.prev = 0, s = localStorage.getItem("mxcad-shortcuts"), s) {
              g.next = 1;
              break;
            }
            return g.abrupt("return");
          case 1:
            t = JSON.parse(s), f = ue(t.shortcuts), g.prev = 2, L = /* @__PURE__ */ A.mark(function b() {
              var F, O, m;
              return A.wrap(function(c) {
                for (; ; ) switch (c.prev = c.next) {
                  case 0:
                    if (F = d.value, O = n.value.find(function(V) {
                      return V.id === F.id;
                    }), !O) {
                      c.next = 1;
                      break;
                    }
                    if (m = D.get(F.id), !m) {
                      c.next = 1;
                      break;
                    }
                    return c.next = 1, e(F.id, oe(oe({
                      key: F.key,
                      winKey: F.winKey,
                      isSuspended: F.isSuspended
                    }, m), {}, {
                      skipConflictCheck: !0
                    }));
                  case 1:
                  case "end":
                    return c.stop();
                }
              }, b);
            }), f.s();
          case 3:
            if ((d = f.n()).done) {
              g.next = 5;
              break;
            }
            return g.delegateYield(L(), "t0", 4);
          case 4:
            g.next = 3;
            break;
          case 5:
            g.next = 7;
            break;
          case 6:
            g.prev = 6, S = g.catch(2), f.e(S);
          case 7:
            return g.prev = 7, f.f(), g.finish(7);
          case 8:
            g.next = 10;
            break;
          case 9:
            throw g.prev = 9, y = g.catch(0), console.error("加载快捷键配置失败:", y), y;
          case 10:
          case "end":
            return g.stop();
        }
      }, l, null, [[0, 9], [2, 6, 7, 8]]);
    }));
    return function() {
      return r.apply(this, arguments);
    };
  }();
  return he(n, function() {
  }, {
    deep: !0
  }), $e(/* @__PURE__ */ H(/* @__PURE__ */ A.mark(function r() {
    return A.wrap(function(l) {
      for (; ; ) switch (l.prev = l.next) {
        case 0:
          return T(), l.next = 1, o();
        case 1:
        case "end":
          return l.stop();
      }
    }, r);
  }))), je(function() {
    v();
  }), {
    syncState: C,
    exportToFile: h,
    importFromFile: K,
    saveToLocalStorage: a,
    loadFromLocalStorage: o,
    cancelAutoSave: v
  };
}, br = function(n, e) {
  return Sr(n, e);
};
function Fe(i, n) {
  var e = typeof Symbol != "undefined" && i[Symbol.iterator] || i["@@iterator"];
  if (!e) {
    if (Array.isArray(i) || (e = Cr(i)) || n) {
      e && (i = e);
      var u = 0, k = function() {
      };
      return { s: k, n: function() {
        return u >= i.length ? { done: !0 } : { done: !1, value: i[u++] };
      }, e: function(v) {
        throw v;
      }, f: k };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var C, D = !0, T = !1;
  return { s: function() {
    e = e.call(i);
  }, n: function() {
    var v = e.next();
    return D = v.done, v;
  }, e: function(v) {
    T = !0, C = v;
  }, f: function() {
    try {
      D || e.return == null || e.return();
    } finally {
      if (T) throw C;
    }
  } };
}
function Cr(i, n) {
  if (i) {
    if (typeof i == "string") return Ie(i, n);
    var e = {}.toString.call(i).slice(8, -1);
    return e === "Object" && i.constructor && (e = i.constructor.name), e === "Map" || e === "Set" ? Array.from(i) : e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e) ? Ie(i, n) : void 0;
  }
}
function Ie(i, n) {
  (n == null || n > i.length) && (n = i.length);
  for (var e = 0, u = Array(n); e < n; e++) u[e] = i[e];
  return u;
}
var Kr = function(n, e) {
  var u = /* @__PURE__ */ function() {
    var T = H(/* @__PURE__ */ A.mark(function w(v) {
      var h, K;
      return A.wrap(function(a) {
        for (; ; ) switch (a.prev = a.next) {
          case 0:
            if (h = n.value.find(function(o) {
              return o.id === v;
            }), h) {
              a.next = 1;
              break;
            }
            return a.abrupt("return");
          case 1:
            return a.prev = 1, a.next = 2, e(v, {
              isSuspended: !0
            });
          case 2:
            M.suspendKey(v), a.next = 4;
            break;
          case 3:
            throw a.prev = 3, K = a.catch(1), console.error(p("2359") + ":", K), K;
          case 4:
          case "end":
            return a.stop();
        }
      }, w, null, [[1, 3]]);
    }));
    return function(v) {
      return T.apply(this, arguments);
    };
  }(), k = /* @__PURE__ */ function() {
    var T = H(/* @__PURE__ */ A.mark(function w(v) {
      var h, K;
      return A.wrap(function(a) {
        for (; ; ) switch (a.prev = a.next) {
          case 0:
            if (h = n.value.find(function(o) {
              return o.id === v;
            }), h) {
              a.next = 1;
              break;
            }
            return a.abrupt("return");
          case 1:
            return a.prev = 1, a.next = 2, e(v, {
              isSuspended: !1
            });
          case 2:
            M.resumeKey(v), a.next = 4;
            break;
          case 3:
            throw a.prev = 3, K = a.catch(1), console.error(p("2360") + ":", K), K;
          case 4:
          case "end":
            return a.stop();
        }
      }, w, null, [[1, 3]]);
    }));
    return function(v) {
      return T.apply(this, arguments);
    };
  }(), C = /* @__PURE__ */ function() {
    var T = H(/* @__PURE__ */ A.mark(function w() {
      var v, h, K, a, o;
      return A.wrap(function(r) {
        for (; ; ) switch (r.prev = r.next) {
          case 0:
            r.prev = 0, v = Fe(n.value), r.prev = 1, v.s();
          case 2:
            if ((h = v.n()).done) {
              r.next = 4;
              break;
            }
            return K = h.value, r.next = 3, e(K.id, {
              isSuspended: !0
            });
          case 3:
            r.next = 2;
            break;
          case 4:
            r.next = 6;
            break;
          case 5:
            r.prev = 5, a = r.catch(1), v.e(a);
          case 6:
            return r.prev = 6, v.f(), r.finish(6);
          case 7:
            r.next = 9;
            break;
          case 8:
            throw r.prev = 8, o = r.catch(0), console.error(p("2361") + ":", o), o;
          case 9:
          case "end":
            return r.stop();
        }
      }, w, null, [[0, 8], [1, 5, 6, 7]]);
    }));
    return function() {
      return T.apply(this, arguments);
    };
  }(), D = /* @__PURE__ */ function() {
    var T = H(/* @__PURE__ */ A.mark(function w() {
      var v, h, K, a, o;
      return A.wrap(function(r) {
        for (; ; ) switch (r.prev = r.next) {
          case 0:
            r.prev = 0, v = Fe(n.value), r.prev = 1, v.s();
          case 2:
            if ((h = v.n()).done) {
              r.next = 4;
              break;
            }
            return K = h.value, r.next = 3, e(K.id, {
              isSuspended: !1
            });
          case 3:
            r.next = 2;
            break;
          case 4:
            r.next = 6;
            break;
          case 5:
            r.prev = 5, a = r.catch(1), v.e(a);
          case 6:
            return r.prev = 6, v.f(), r.finish(6);
          case 7:
            M.resumeAllKeys(), r.next = 9;
            break;
          case 8:
            throw r.prev = 8, o = r.catch(0), console.error(p("2362") + ":", o), o;
          case 9:
          case "end":
            return r.stop();
        }
      }, w, null, [[0, 8], [1, 5, 6, 7]]);
    }));
    return function() {
      return T.apply(this, arguments);
    };
  }();
  return {
    suspendShortcut: u,
    resumeShortcut: k,
    suspendAllShortcuts: C,
    resumeAllShortcuts: D
  };
}, Ar = {
  class: "pa-4"
};
const Er = /* @__PURE__ */ Ne({
  __name: "AddShortcutDialog",
  props: {
    checkConflict: {
      type: Function
    }
  },
  emits: ["save"],
  setup: function(n, e) {
    var u = e.expose, k = e.emit, C = _e(!1, "MxCAD_AddShortcut"), D = C.isShow, T = C.showDialog, w = R(!1), v = R({
      label: "",
      command: "",
      key: ""
    }), h = R({
      label: "",
      command: void 0,
      category: "custom",
      description: "",
      key: null
    }), K = {
      label: [function(O) {
        return !!O || p("命令名称不能为空");
      }],
      command: [function(O) {
        return !!O || p("命令不能为空");
      }],
      key: [function(O) {
        return !!O || p("快捷键不能为空");
      }]
    }, a = R(), o = R([]), r = R(!1), l = function(m) {
      if (!m) {
        o.value = [];
        return;
      }
      var c = m.toLowerCase();
      o.value = er.value.filter(function(V) {
        return V.toLowerCase().includes(c);
      }), r.value = !0;
    }, s = function(m) {
      h.value.command = m, h.value.label || (h.value.label = m), r.value = !1;
    }, t = R(!1), f = te(function() {
      return h.value.key ? ae(h.value.key) : p("点击设置快捷键");
    }), d = n, L = /* @__PURE__ */ function() {
      var O = H(/* @__PURE__ */ A.mark(function m(c) {
        var V, J, q;
        return A.wrap(function(z) {
          for (; ; ) switch (z.prev = z.next) {
            case 0:
              if (t.value) {
                z.next = 1;
                break;
              }
              return z.abrupt("return");
            case 1:
              if (c.preventDefault(), c.stopPropagation(), !["Control", "Shift", "Alt", "Meta", "Escape"].includes(c.key)) {
                z.next = 2;
                break;
              }
              return c.key === "Escape" && (t.value = !1, document.removeEventListener("keydown", L, !0)), z.abrupt("return");
            case 2:
              V = {
                keyCode: c.code,
                ctrlKey: c.ctrlKey,
                shiftKey: c.shiftKey,
                altKey: c.altKey,
                metaKey: c.metaKey
              }, J = d.checkConflict(V), J.length > 0 ? (q = re(), q.warning("".concat(p("快捷键冲突"), "：").concat(p("与")).concat(p("命令"), ' "').concat(J.map(function(ne) {
                return ne.info.label;
              }).join('", "'), '" ').concat(p("冲突"))), h.value.key = null) : h.value.key = V, t.value = !1, document.removeEventListener("keydown", L, !0);
            case 3:
            case "end":
              return z.stop();
          }
        }, m);
      }));
      return function(c) {
        return O.apply(this, arguments);
      };
    }(), S = function() {
      if (v.value = {
        label: "",
        command: "",
        key: ""
      }, !h.value.label) {
        v.value.label = p("命令名称不能为空");
        return;
      }
      if (!h.value.command) {
        v.value.command = p("命令不能为空");
        return;
      }
      if (!h.value.key) {
        v.value.key = p("快捷键不能为空");
        return;
      }
      F("save", {
        key: h.value.key,
        info: {
          label: h.value.label,
          command: h.value.command,
          category: h.value.category,
          description: h.value.description
        }
      }), g(), T(!1);
    }, y = function() {
      t.value = !0, document.addEventListener("keydown", L, !0);
    }, g = function() {
      t.value = !1, document.removeEventListener("keydown", L, !0), h.value = {
        label: "",
        command: "",
        category: "custom",
        description: "",
        key: null
      }, v.value = {
        label: "",
        command: "",
        key: ""
      }, o.value = [], r.value = !1, w.value = !1;
    }, b = [{
      name: p("确定"),
      fun: S,
      primary: !0
    }, {
      name: p("取消"),
      fun: function() {
        g(), T(!1);
      }
    }], F = k;
    return u({
      showDialog: T
    }), function(O, m) {
      return Q(), le(Pe, {
        title: O.t("2331"),
        modelValue: j(D),
        "onUpdate:modelValue": m[5] || (m[5] = function(c) {
          return ge(D) ? D.value = c : null;
        }),
        maxWidth: "600",
        footerBtnList: b
      }, {
        default: W(function() {
          return [U("div", Ar, [B(ar, {
            onSubmit: fe(S, ["prevent"])
          }, {
            default: W(function() {
              return [B(de, {
                modelValue: h.value.label,
                "onUpdate:modelValue": m[0] || (m[0] = function(c) {
                  return h.value.label = c;
                }),
                rules: K.label,
                placeholder: O.t("2099"),
                required: "",
                class: "mb-3",
                "error-messages": v.value.label
              }, null, 8, ["modelValue", "rules", "placeholder", "error-messages"]), B(nr, {
                modelValue: h.value.command,
                "onUpdate:modelValue": [m[1] || (m[1] = function(c) {
                  return h.value.command = c;
                }), s],
                rules: K.command,
                placeholder: O.t("1703"),
                required: "",
                class: "mb-3",
                ref_key: "commandInput",
                ref: a,
                items: o.value,
                "menu-props": {
                  modelValue: r.value,
                  maxHeight: 200
                },
                "onUpdate:search": l,
                "error-messages": v.value.command
              }, {
                item: W(function(c) {
                  var V = c.item, J = c.props;
                  return [B(Be, se(J, {
                    title: V.raw,
                    onClick: function(z) {
                      return s(V.raw);
                    }
                  }), null, 16, ["title", "onClick"])];
                }),
                _: 1
              }, 8, ["modelValue", "rules", "placeholder", "items", "menu-props", "error-messages"]), B(tr, {
                modelValue: h.value.category,
                "onUpdate:modelValue": m[2] || (m[2] = function(c) {
                  return h.value.category = c;
                }),
                items: j(ke).filter(function(c) {
                  return c.id !== "all";
                }),
                "item-title": "name",
                "item-value": "id",
                required: "",
                class: "mb-3"
              }, null, 8, ["modelValue", "items"]), B(ir, {
                modelValue: h.value.description,
                "onUpdate:modelValue": m[3] || (m[3] = function(c) {
                  return h.value.description = c;
                }),
                label: O.t("2100"),
                rows: "3",
                class: "mb-3"
              }, null, 8, ["modelValue", "label"]), B(de, {
                "model-value": f.value,
                onClick: y,
                rules: K.key,
                class: ce({
                  editing: t.value
                }),
                placeholder: t.value ? O.t("2101") : O.t("2332"),
                "error-messages": v.value.key,
                readonly: "",
                clearable: "",
                "clear-icon": "$mdi-recovery",
                "onClick:clear": m[4] || (m[4] = fe(function(c) {
                  return h.value.key = null;
                }, ["stop"]))
              }, null, 8, ["model-value", "rules", "class", "placeholder", "error-messages"])];
            }),
            _: 1
          })])];
        }),
        _: 1
      }, 8, ["title", "modelValue"]);
    };
  }
}), Lr = /* @__PURE__ */ Ve(Er, [["__scopeId", "data-v-15adb779"]]);
var Dr = {
  class: "shortcut-dialog pa-4"
}, Or = {
  class: "d-flex align-center mb-4"
}, Fr = {
  class: "d-flex"
}, Ir = {
  class: "d-flex align-center justify-center"
}, Tr = {
  class: "d-flex align-center justify-center"
}, Pr = {
  class: "text-center"
}, Vr = {
  class: "text-center"
}, $r = {
  class: "text-center",
  style: {
    width: "86px"
  }
}, jr = {
  class: "text-center text-no-wrap"
}, Nr = {
  class: "text-center text-no-wrap text-medium-emphasis"
}, Br = {
  class: "text-center"
}, Mr = {
  class: "d-flex align-center"
}, Ur = {
  class: "text-center text-caption text-medium-emphasis description-cell"
}, Rr = {
  class: "text-center"
}, Hr = {
  class: "d-flex justify-center"
};
const zr = /* @__PURE__ */ Ne({
  __name: "index",
  setup: function(n) {
    var e = Ce.isShow, u = Ce.showDialog, k = yr(), C = k.shortcuts, D = k.updateShortcut, T = k.resetToDefault, w = k.checkConflict, v = k.removeShortcut, h = k.addShortcut, K = k.emptiedShortcut, a = gr(C), o = a.categories, r = a.currentCategory, l = a.categoryCounts, s = a.switchCategory, t = a.getCategoryIcon, f = a.getCategoryName, d = a.filterByCategory, L = a.resetCategory, S = mr(C), y = S.searchText, g = S.sortOrder, b = S.sortBy, F = S.filteredShortcuts, O = S.toggleSort, m = S.resetAll, c = hr(D, w), V = c.editingShortcut, J = c.startEdit, q = c.cancelEdit, z = br(C, D), ne = z.exportToFile, Me = z.importFromFile, Ue = z.saveToLocalStorage, Re = z.loadFromLocalStorage, we = Kr(C, D), He = we.suspendShortcut, ze = we.resumeShortcut, We = te(function() {
      return d(F.value);
    });
    he(e, /* @__PURE__ */ function() {
      var P = H(/* @__PURE__ */ A.mark(function I(E) {
        return A.wrap(function(N) {
          for (; ; ) switch (N.prev = N.next) {
            case 0:
              if (!E)
                try {
                  q();
                } catch ($) {
                  console.error("关闭对话框清理失败:", $);
                }
            case 1:
            case "end":
              return N.stop();
          }
        }, I);
      }));
      return function(I) {
        return P.apply(this, arguments);
      };
    }(), {
      immediate: !0
    });
    var qe = function(I) {
      I.isSuspended ? ze(I.id) : He(I.id);
    }, Je = function() {
      T(), m(), L();
    }, Se = R(!1), Ge = [{
      name: p("确定"),
      fun: function() {
        var P = H(/* @__PURE__ */ A.mark(function E() {
          var N;
          return A.wrap(function($) {
            for (; ; ) switch ($.prev = $.next) {
              case 0:
                return $.prev = 0, $.next = 1, Ue();
              case 1:
                Se.value = !Se.value, u(!1), $.next = 3;
                break;
              case 2:
                $.prev = 2, N = $.catch(0), console.error("保存快捷键配置失败:", N);
              case 3:
              case "end":
                return $.stop();
            }
          }, E, null, [[0, 2]]);
        }));
        function I() {
          return P.apply(this, arguments);
        }
        return I;
      }(),
      primary: !0
    }, {
      name: p("恢复系统默认"),
      fun: Je
    }, {
      name: p("导出配置"),
      fun: ne
    }, {
      name: p("导入配置"),
      fun: Me
    }, {
      name: p("取消"),
      fun: function() {
        var P = H(/* @__PURE__ */ A.mark(function E() {
          var N;
          return A.wrap(function($) {
            for (; ; ) switch ($.prev = $.next) {
              case 0:
                return $.prev = 0, $.next = 1, Re();
              case 1:
                u(!1), $.next = 3;
                break;
              case 2:
                $.prev = 2, N = $.catch(0), console.error("加载快捷键配置失败:", N);
              case 3:
              case "end":
                return $.stop();
            }
          }, E, null, [[0, 2]]);
        }));
        function I() {
          return P.apply(this, arguments);
        }
        return I;
      }()
    }];
    he(V, function(P) {
      P && rr(function() {
        var I = document.querySelector(".shortcut-input.editing input");
        I instanceof HTMLElement && I.focus({
          preventScroll: !0
        });
      });
    }), $e(function() {
      document.addEventListener("click", function(P) {
        V.value && !P.target.closest(".shortcut-input") && q();
      });
    }), je(function() {
      try {
        q();
      } catch (P) {
        console.error("组件卸载清理失败:", P);
      }
    });
    var Ye = function(I) {
      return I.key ? Array.isArray(I.key) ? I.key.length > 0 ? ae(I.key[0]) : "" : ae(I.key) : "";
    }, be = R(null), Qe = /* @__PURE__ */ function() {
      var P = H(/* @__PURE__ */ A.mark(function I(E) {
        var N, $, x;
        return A.wrap(function(Y) {
          for (; ; ) switch (Y.prev = Y.next) {
            case 0:
              return Y.prev = 0, Y.next = 1, h(E);
            case 1:
              N = re(), N.success(p("添加快捷键成功")), Y.next = 3;
              break;
            case 2:
              Y.prev = 2, x = Y.catch(0), console.error("添加快捷键失败:", x), $ = re(), $.error(x instanceof Error ? x.message : p("添加快捷键失败"));
            case 3:
            case "end":
              return Y.stop();
          }
        }, I, null, [[0, 2]]);
      }));
      return function(E) {
        return P.apply(this, arguments);
      };
    }();
    return function(P, I) {
      return Q(), ie(ve, null, [B(Pe, {
        title: P.t("226"),
        modelValue: j(e),
        "onUpdate:modelValue": I[4] || (I[4] = function(E) {
          return ge(e) ? e.value = E : null;
        }),
        maxWidth: "1000",
        footerBtnList: Ge
      }, {
        default: W(function() {
          return [U("div", Dr, [U("div", Or, [B(de, {
            modelValue: j(y),
            "onUpdate:modelValue": I[0] || (I[0] = function(E) {
              return ge(y) ? y.value = E : null;
            }),
            placeholder: P.t("2096"),
            "prepend-inner-icon": "$mdi-magnify",
            clearable: "",
            class: "flex-grow-1"
          }, null, 8, ["modelValue", "placeholder"]), B(or, {
            color: "primary",
            class: "ml-4",
            onClick: I[1] || (I[1] = function(E) {
              var N;
              return (N = be.value) === null || N === void 0 ? void 0 : N.showDialog(!0);
            })
          }, {
            default: W(function() {
              return [B(_, null, {
                default: W(function() {
                  return ee(I[5] || (I[5] = [X("$mdi-plus", -1)]));
                }),
                _: 1
              }), X(" " + G(P.t("2097")), 1)];
            }),
            _: 1
          })]), U("div", Fr, [B(ur, {
            density: "compact",
            nav: "",
            rounded: "lg",
            width: 240,
            class: "mr-4"
          }, {
            default: W(function() {
              return [B(lr, null, {
                default: W(function() {
                  return [X(G(P.t("2098")), 1)];
                }),
                _: 1
              }), (Q(!0), ie(ve, null, Ke(j(o), function(E) {
                return Q(), le(Be, {
                  key: E.id,
                  active: j(r) === E.id,
                  onClick: function($) {
                    return j(s)(E.id);
                  },
                  class: ce({
                    "selected-category": j(r) === E.id
                  }),
                  rounded: "lg"
                }, {
                  prepend: W(function() {
                    return [B(_, {
                      icon: j(t)(E.id),
                      size: "small",
                      color: j(r) === E.id ? "primary" : ""
                    }, null, 8, ["icon", "color"])];
                  }),
                  default: W(function() {
                    return [B(sr, {
                      class: "d-flex align-center"
                    }, {
                      default: W(function() {
                        return [X(G(P.t(j(f)(E.id))) + " ", 1), B(cr, {
                          size: "x-small",
                          class: "ml-auto",
                          color: j(r) === E.id ? "primary" : "",
                          variant: "flat"
                        }, {
                          default: W(function() {
                            return [X(G(j(l).get(E.id)), 1)];
                          }),
                          _: 2
                        }, 1032, ["color"])];
                      }),
                      _: 2
                    }, 1024)];
                  }),
                  _: 2
                }, 1032, ["active", "onClick", "class"]);
              }), 128))];
            }),
            _: 1
          }), B(fr, {
            class: "w-100",
            height: "300px"
          }, {
            default: W(function() {
              return [U("thead", null, [U("tr", null, [U("th", {
                class: "text-center sortable",
                onClick: I[2] || (I[2] = function(E) {
                  return j(O)("label");
                })
              }, [U("div", Ir, [X(G(P.t("2099")) + " ", 1), j(b) === "label" ? (Q(), le(_, {
                key: 0,
                size: "small",
                class: "ml-1",
                icon: j(g) === "asc" ? "$mdi-arrow-up" : "$mdi-arrow-down",
                color: "primary"
              }, null, 8, ["icon"])) : Ae("", !0)])]), U("th", {
                class: "text-center sortable",
                onClick: I[3] || (I[3] = function(E) {
                  return j(O)("command");
                })
              }, [U("div", Tr, [X(G(P.t("1703")) + " ", 1), j(b) === "command" ? (Q(), le(_, {
                key: 0,
                size: "small",
                class: "ml-1",
                icon: j(g) === "asc" ? "$mdi-arrow-up" : "$mdi-arrow-down"
              }, null, 8, ["icon"])) : Ae("", !0)])]), U("th", Pr, G(P.t("1809")), 1), U("th", Vr, G(P.t("2100")), 1), U("th", $r, G(P.t("2053")), 1)])]), U("tbody", null, [(Q(!0), ie(ve, null, Ke(We.value, function(E) {
                return Q(), ie("tr", {
                  key: E.id,
                  class: ce({
                    suspended: E.isSuspended
                  })
                }, [U("td", jr, G(P.t(E.info.label)), 1), U("td", Nr, G(E.info.command), 1), U("td", Br, [U("div", Mr, [B(de, {
                  "model-value": Ye(E),
                  class: ce(["shortcut-input mx-auto", {
                    editing: j(V) === E,
                    disabled: E.isSuspended
                  }]),
                  onClick: fe(function(N) {
                    return j(J)(E);
                  }, ["stop"]),
                  onFocus: function($) {
                    return j(J)(E);
                  },
                  readonly: !0,
                  placeholder: j(V) === E ? P.t("2101") : "",
                  clearable: "",
                  "clear-icon": "$mdi-recovery",
                  "onClick:clear": fe(function() {
                    j(K)(E.id), j(J)(E);
                  }, ["stop"])
                }, null, 8, ["model-value", "onClick", "onFocus", "class", "placeholder", "onClick:clear"])])]), U("td", Ur, [B(pe, {
                  text: E.info.description,
                  location: "top",
                  "max-width": "300",
                  "open-delay": 500
                }, {
                  activator: W(function(N) {
                    var $ = N.props;
                    return [U("div", se({
                      ref_for: !0
                    }, $, {
                      class: "description-text"
                    }), G(E.info.description), 17)];
                  }),
                  _: 2
                }, 1032, ["text"])]), U("td", Rr, [U("div", Hr, [B(pe, {
                  text: E.isSuspended ? P.t("2102") : P.t("2103"),
                  location: "top",
                  "open-delay": 500
                }, {
                  activator: W(function(N) {
                    var $ = N.props;
                    return [B(_, se({
                      ref_for: !0
                    }, $, {
                      icon: E.isSuspended ? "$mdi-play" : "$mdi-pause",
                      size: "x-small",
                      class: "v-icon--clickable mr-2",
                      color: E.isSuspended ? "warning" : "",
                      onClick: function(Y) {
                        return qe(E);
                      }
                    }), {
                      default: W(function() {
                        return ee(I[6] || (I[6] = []));
                      }),
                      _: 1
                    }, 16, ["icon", "color", "onClick"])];
                  }),
                  _: 2
                }, 1032, ["text"]), B(pe, {
                  text: P.t("2104"),
                  location: "top",
                  "open-delay": 500
                }, {
                  activator: W(function(N) {
                    var $ = N.props;
                    return [B(_, se({
                      ref_for: !0
                    }, $, {
                      icon: "$mdi-close",
                      size: "x-small",
                      class: "v-icon--clickable",
                      onClick: function(Y) {
                        return j(v)(E.id);
                      }
                    }), null, 16, ["onClick"])];
                  }),
                  _: 2
                }, 1032, ["text"])])])], 2);
              }), 128))])];
            }),
            _: 1
          })])])];
        }),
        _: 1
      }, 8, ["title", "modelValue"]), B(Lr, {
        ref_key: "addShortcutDialog",
        ref: be,
        onSave: Qe,
        checkConflict: j(w)
      }, null, 8, ["checkConflict"])], 64);
    };
  }
}), Yr = /* @__PURE__ */ Ve(zr, [["__scopeId", "data-v-dd02cd72"]]);
export {
  Yr as default
};
