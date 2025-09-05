import { G as Z, M as ee, N as te, f as h, O as re, i as z, g as ne, J as oe, k as ae } from "../vue.js";
var C;
const j = typeof window != "undefined", Qe = (e) => typeof e == "boolean", ie = (e) => typeof e == "function", se = (e) => typeof e == "string", b = () => {
};
j && ((C = window == null ? void 0 : window.navigator) != null && C.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function P(e) {
  return typeof e == "function" ? e() : Z(e);
}
function x(e, t) {
  function r(...n) {
    return new Promise((a, o) => {
      Promise.resolve(e(() => t.apply(this, n), { fn: t, thisArg: this, args: n })).then(a).catch(o);
    });
  }
  return r;
}
const X = (e) => e();
function ue(e, t = {}) {
  let r, n, a = b;
  const o = (i) => {
    clearTimeout(i), a(), a = b;
  };
  return (i) => {
    const s = P(e), c = P(t.maxWait);
    return r && o(r), s <= 0 || c !== void 0 && c <= 0 ? (n && (o(n), n = null), Promise.resolve(i())) : new Promise((p, d) => {
      a = t.rejectOnCancel ? d : p, c && !n && (n = setTimeout(() => {
        r && o(r), n = null, p(i());
      }, c)), r = setTimeout(() => {
        n && o(n), n = null, p(i());
      }, s);
    });
  };
}
function le(e, t = !0, r = !0, n = !1) {
  let a = 0, o, f = !0, i = b, s;
  const c = () => {
    o && (clearTimeout(o), o = void 0, i(), i = b);
  };
  return (d) => {
    const m = P(e), v = Date.now() - a, g = () => s = d();
    return c(), m <= 0 ? (a = Date.now(), g()) : (v > m && (r || !f) ? (a = Date.now(), g()) : t && (s = new Promise((u, O) => {
      i = n ? O : u, o = setTimeout(() => {
        a = Date.now(), f = !0, u(g()), c();
      }, Math.max(0, m - v));
    })), !r && !o && (o = setTimeout(() => f = !0, m)), f = !1, s);
  };
}
function ce(e = X) {
  const t = h(!0);
  function r() {
    t.value = !1;
  }
  function n() {
    t.value = !0;
  }
  const a = (...o) => {
    t.value && e(...o);
  };
  return { isActive: re(t), pause: r, resume: n, eventFilter: a };
}
function fe(e) {
  return e;
}
function Y(e) {
  return ee() ? (te(e), !0) : !1;
}
function N() {
  const e = [], t = (a) => {
    const o = e.indexOf(a);
    o !== -1 && e.splice(o, 1);
  };
  return {
    on: (a) => {
      e.push(a);
      const o = () => t(a);
      return Y(o), {
        off: o
      };
    },
    off: t,
    trigger: (a) => {
      e.forEach((o) => o(a));
    }
  };
}
function Ve(e, t = 200, r = {}) {
  return x(ue(t, r), e);
}
function Je(e, t = 200, r = !1, n = !0, a = !1) {
  return x(le(t, r, n, a), e);
}
var D = Object.getOwnPropertySymbols, pe = Object.prototype.hasOwnProperty, de = Object.prototype.propertyIsEnumerable, me = (e, t) => {
  var r = {};
  for (var n in e)
    pe.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && D)
    for (var n of D(e))
      t.indexOf(n) < 0 && de.call(e, n) && (r[n] = e[n]);
  return r;
};
function ve(e, t, r = {}) {
  const n = r, {
    eventFilter: a = X
  } = n, o = me(n, [
    "eventFilter"
  ]);
  return z(e, x(a, t), o);
}
var ge = Object.defineProperty, ye = Object.defineProperties, Oe = Object.getOwnPropertyDescriptors, I = Object.getOwnPropertySymbols, B = Object.prototype.hasOwnProperty, k = Object.prototype.propertyIsEnumerable, H = (e, t, r) => t in e ? ge(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, we = (e, t) => {
  for (var r in t || (t = {}))
    B.call(t, r) && H(e, r, t[r]);
  if (I)
    for (var r of I(t))
      k.call(t, r) && H(e, r, t[r]);
  return e;
}, _e = (e, t) => ye(e, Oe(t)), he = (e, t) => {
  var r = {};
  for (var n in e)
    B.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && I)
    for (var n of I(e))
      t.indexOf(n) < 0 && k.call(e, n) && (r[n] = e[n]);
  return r;
};
function be(e, t, r = {}) {
  const n = r, {
    eventFilter: a
  } = n, o = he(n, [
    "eventFilter"
  ]), { eventFilter: f, pause: i, resume: s, isActive: c } = ce(a);
  return { stop: ve(e, t, _e(we({}, o), {
    eventFilter: f
  })), pause: i, resume: s, isActive: c };
}
function Pe(e) {
  var t;
  const r = P(e);
  return (t = r == null ? void 0 : r.$el) != null ? t : r;
}
const S = j ? window : void 0, Se = j ? window.document : void 0;
function w(...e) {
  let t, r, n, a;
  if (se(e[0]) || Array.isArray(e[0]) ? ([r, n, a] = e, t = S) : [t, r, n, a] = e, !t)
    return b;
  Array.isArray(r) || (r = [r]), Array.isArray(n) || (n = [n]);
  const o = [], f = () => {
    o.forEach((p) => p()), o.length = 0;
  }, i = (p, d, m, v) => (p.addEventListener(d, m, v), () => p.removeEventListener(d, m, v)), s = z(() => [Pe(t), P(a)], ([p, d]) => {
    f(), p && o.push(...r.flatMap((m) => n.map((v) => i(p, m, v, d))));
  }, { immediate: !0, flush: "post" }), c = () => {
    s(), f();
  };
  return Y(c), c;
}
const T = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {}, $ = "__vueuse_ssr_handlers__";
T[$] = T[$] || {};
const Ee = T[$];
function Ie(e, t) {
  return Ee[e] || t;
}
function Fe(e) {
  return e == null ? "any" : e instanceof Set ? "set" : e instanceof Map ? "map" : e instanceof Date ? "date" : typeof e == "boolean" ? "boolean" : typeof e == "string" ? "string" : typeof e == "object" ? "object" : Number.isNaN(e) ? "any" : "number";
}
var Ne = Object.defineProperty, W = Object.getOwnPropertySymbols, Te = Object.prototype.hasOwnProperty, $e = Object.prototype.propertyIsEnumerable, R = (e, t, r) => t in e ? Ne(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, M = (e, t) => {
  for (var r in t || (t = {}))
    Te.call(t, r) && R(e, r, t[r]);
  if (W)
    for (var r of W(t))
      $e.call(t, r) && R(e, r, t[r]);
  return e;
};
const je = {
  boolean: {
    read: (e) => e === "true",
    write: (e) => String(e)
  },
  object: {
    read: (e) => JSON.parse(e),
    write: (e) => JSON.stringify(e)
  },
  number: {
    read: (e) => Number.parseFloat(e),
    write: (e) => String(e)
  },
  any: {
    read: (e) => e,
    write: (e) => String(e)
  },
  string: {
    read: (e) => e,
    write: (e) => String(e)
  },
  map: {
    read: (e) => new Map(JSON.parse(e)),
    write: (e) => JSON.stringify(Array.from(e.entries()))
  },
  set: {
    read: (e) => new Set(JSON.parse(e)),
    write: (e) => JSON.stringify(Array.from(e))
  },
  date: {
    read: (e) => new Date(e),
    write: (e) => e.toISOString()
  }
}, Q = "vueuse-storage";
function xe(e, t, r, n = {}) {
  var a;
  const {
    flush: o = "pre",
    deep: f = !0,
    listenToStorageChanges: i = !0,
    writeDefaults: s = !0,
    mergeDefaults: c = !1,
    shallow: p,
    window: d = S,
    eventFilter: m,
    onError: v = (l) => {
      console.error(l);
    }
  } = n, g = (p ? oe : h)(t);
  if (!r)
    try {
      r = Ie("getDefaultStorage", () => {
        var l;
        return (l = S) == null ? void 0 : l.localStorage;
      })();
    } catch (l) {
      v(l);
    }
  if (!r)
    return g;
  const u = P(t), O = Fe(u), E = (a = n.serializer) != null ? a : je[O], { pause: G, resume: A } = be(g, () => U(g.value), { flush: o, deep: f, eventFilter: m });
  return d && i && (w(d, "storage", F), w(d, Q, q)), F(), g;
  function U(l) {
    try {
      if (l == null)
        r.removeItem(e);
      else {
        const y = E.write(l), _ = r.getItem(e);
        _ !== y && (r.setItem(e, y), d && d.dispatchEvent(new CustomEvent(Q, {
          detail: {
            key: e,
            oldValue: _,
            newValue: y,
            storageArea: r
          }
        })));
      }
    } catch (y) {
      v(y);
    }
  }
  function K(l) {
    const y = l ? l.newValue : r.getItem(e);
    if (y == null)
      return s && u !== null && r.setItem(e, E.write(u)), u;
    if (!l && c) {
      const _ = E.read(y);
      return ie(c) ? c(_, u) : O === "object" && !Array.isArray(_) ? M(M({}, u), _) : _;
    } else return typeof y != "string" ? y : E.read(y);
  }
  function q(l) {
    F(l.detail);
  }
  function F(l) {
    if (!(l && l.storageArea !== r)) {
      if (l && l.key == null) {
        g.value = u;
        return;
      }
      if (!(l && l.key !== e)) {
        G();
        try {
          g.value = K(l);
        } catch (y) {
          v(y);
        } finally {
          l ? ae(A) : A();
        }
      }
    }
  }
}
function Le(e = h(!1)) {
  const t = N(), r = N(), n = N();
  let a = b;
  const o = (s) => (n.trigger(s), e.value = !0, new Promise((c) => {
    a = c;
  })), f = (s) => {
    e.value = !1, t.trigger(s), a({ data: s, isCanceled: !1 });
  }, i = (s) => {
    e.value = !1, r.trigger(s), a({ data: s, isCanceled: !0 });
  };
  return {
    isRevealed: ne(() => e.value),
    reveal: o,
    confirm: f,
    cancel: i,
    onReveal: n.on,
    onConfirm: t.on,
    onCancel: r.on
  };
}
const Ae = ["mousedown", "mouseup", "keydown", "keyup"];
function ze(e, t = {}) {
  const {
    events: r = Ae,
    document: n = Se,
    initial: a = null
  } = t, o = h(a);
  return n && r.forEach((f) => {
    w(n, f, (i) => {
      typeof i.getModifierState == "function" && (o.value = i.getModifierState(e));
    });
  }), o;
}
function Xe(e, t, r = {}) {
  const { window: n = S } = r;
  return xe(e, t, n == null ? void 0 : n.localStorage, r);
}
function Ye(e = {}) {
  const {
    type: t = "page",
    touch: r = !0,
    resetOnTouchEnds: n = !1,
    initialValue: a = { x: 0, y: 0 },
    window: o = S,
    eventFilter: f
  } = e, i = h(a.x), s = h(a.y), c = h(null), p = (u) => {
    t === "page" ? (i.value = u.pageX, s.value = u.pageY) : t === "client" ? (i.value = u.clientX, s.value = u.clientY) : t === "movement" && (i.value = u.movementX, s.value = u.movementY), c.value = "mouse";
  }, d = () => {
    i.value = a.x, s.value = a.y;
  }, m = (u) => {
    if (u.touches.length > 0) {
      const O = u.touches[0];
      t === "page" ? (i.value = O.pageX, s.value = O.pageY) : t === "client" && (i.value = O.clientX, s.value = O.clientY), c.value = "touch";
    }
  }, v = (u) => f === void 0 ? p(u) : f(() => p(u), {}), g = (u) => f === void 0 ? m(u) : f(() => m(u), {});
  return o && (w(o, "mousemove", v, { passive: !0 }), w(o, "dragover", v, { passive: !0 }), r && t !== "movement" && (w(o, "touchstart", g, { passive: !0 }), w(o, "touchmove", g, { passive: !0 }), n && w(o, "touchend", d, { passive: !0 }))), {
    x: i,
    y: s,
    sourceType: c
  };
}
var V;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(V || (V = {}));
var Ce = Object.defineProperty, J = Object.getOwnPropertySymbols, De = Object.prototype.hasOwnProperty, He = Object.prototype.propertyIsEnumerable, L = (e, t, r) => t in e ? Ce(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, We = (e, t) => {
  for (var r in t || (t = {}))
    De.call(t, r) && L(e, r, t[r]);
  if (J)
    for (var r of J(t))
      He.call(t, r) && L(e, r, t[r]);
  return e;
};
const Re = {
  easeInSine: [0.12, 0, 0.39, 0],
  easeOutSine: [0.61, 1, 0.88, 1],
  easeInOutSine: [0.37, 0, 0.63, 1],
  easeInQuad: [0.11, 0, 0.5, 0],
  easeOutQuad: [0.5, 1, 0.89, 1],
  easeInOutQuad: [0.45, 0, 0.55, 1],
  easeInCubic: [0.32, 0, 0.67, 0],
  easeOutCubic: [0.33, 1, 0.68, 1],
  easeInOutCubic: [0.65, 0, 0.35, 1],
  easeInQuart: [0.5, 0, 0.75, 0],
  easeOutQuart: [0.25, 1, 0.5, 1],
  easeInOutQuart: [0.76, 0, 0.24, 1],
  easeInQuint: [0.64, 0, 0.78, 0],
  easeOutQuint: [0.22, 1, 0.36, 1],
  easeInOutQuint: [0.83, 0, 0.17, 1],
  easeInExpo: [0.7, 0, 0.84, 0],
  easeOutExpo: [0.16, 1, 0.3, 1],
  easeInOutExpo: [0.87, 0, 0.13, 1],
  easeInCirc: [0.55, 0, 1, 0.45],
  easeOutCirc: [0, 0.55, 0.45, 1],
  easeInOutCirc: [0.85, 0, 0.15, 1],
  easeInBack: [0.36, 0, 0.66, -0.56],
  easeOutBack: [0.34, 1.56, 0.64, 1],
  easeInOutBack: [0.68, -0.6, 0.32, 1.6]
};
We({
  linear: fe
}, Re);
export {
  w as a,
  Ve as b,
  ze as c,
  Xe as d,
  Je as e,
  Ye as f,
  Qe as i,
  Le as u
};
