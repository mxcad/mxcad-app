var $c = Object.defineProperty, Oc = Object.defineProperties;
var Rc = Object.getOwnPropertyDescriptors;
var wa = Object.getOwnPropertySymbols;
var yo = Object.prototype.hasOwnProperty, bo = Object.prototype.propertyIsEnumerable;
var xe = Math.pow, ho = (e, n, t) => n in e ? $c(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, v = (e, n) => {
  for (var t in n || (n = {}))
    yo.call(n, t) && ho(e, t, n[t]);
  if (wa)
    for (var t of wa(n))
      bo.call(n, t) && ho(e, t, n[t]);
  return e;
}, J = (e, n) => Oc(e, Rc(n));
var He = (e, n) => {
  var t = {};
  for (var a in e)
    yo.call(e, a) && n.indexOf(a) < 0 && (t[a] = e[a]);
  if (e != null && wa)
    for (var a of wa(e))
      n.indexOf(a) < 0 && bo.call(e, a) && (t[a] = e[a]);
  return t;
};
var Ke = (e, n, t) => new Promise((a, l) => {
  var i = (u) => {
    try {
      r(t.next(u));
    } catch (c) {
      l(c);
    }
  }, o = (u) => {
    try {
      r(t.throw(u));
    } catch (c) {
      l(c);
    }
  }, r = (u) => u.done ? a(u.value) : Promise.resolve(u.value).then(i, o);
  r((t = t.apply(e, n)).next());
});
import { i as Q, N as it, U as mi, h as dt, g as S, E as Re, V as gn, Y as Nn, F as re, Z as Nc, _ as Hc, J as Z, G as ut, $ as za, H as zc, W as Ce, a0 as Be, f as G, d as Wc, D as hn, a1 as Ir, P as ze, a as s, x as H, I as ot, O as gi, j as rt, a2 as _r, a3 as jc, k as _e, a4 as hi, a5 as Wt, Q as pn, S as $, a6 as Ar, A as pe, a7 as mt, B as Pt, a8 as Yc, a9 as Gc, C as Uc, K as Kc, T as qc, aa as Xc, q as jt, u as Zc, ab as Jc, y as So, t as Qc, ac as ed } from "./vue.js";
function ct(e, n) {
  let t;
  function a() {
    t = mi(), t.run(() => n.length ? n(() => {
      t == null || t.stop(), a();
    }) : n());
  }
  Q(e, (l) => {
    l && !t ? a() : l || (t == null || t.stop(), t = void 0);
  }, {
    immediate: !0
  }), it(() => {
    t == null || t.stop();
  });
}
const Ie = typeof window != "undefined", yi = Ie && "IntersectionObserver" in window, td = Ie && ("ontouchstart" in window || window.navigator.maxTouchPoints > 0), ko = Ie && "EyeDropper" in window;
function Co(e, n, t) {
  nd(e, n), n.set(e, t);
}
function nd(e, n) {
  if (n.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object");
}
function ad(e, n, t) {
  return e.set(Lr(e, n), t), t;
}
function Jt(e, n) {
  return e.get(Lr(e, n));
}
function Lr(e, n, t) {
  if (typeof e == "function" ? e === n : e.has(n)) return arguments.length < 3 ? n : t;
  throw new TypeError("Private element is not present on this object");
}
function Tr(e, n, t) {
  const a = n.length - 1;
  if (a < 0) return e === void 0 ? t : e;
  for (let l = 0; l < a; l++) {
    if (e == null)
      return t;
    e = e[n[l]];
  }
  return e == null || e[n[a]] === void 0 ? t : e[n[a]];
}
function Lt(e, n) {
  if (e === n) return !0;
  if (e instanceof Date && n instanceof Date && e.getTime() !== n.getTime() || e !== Object(e) || n !== Object(n))
    return !1;
  const t = Object.keys(e);
  return t.length !== Object.keys(n).length ? !1 : t.every((a) => Lt(e[a], n[a]));
}
function rn(e, n, t) {
  return e == null || !n || typeof n != "string" ? t : e[n] !== void 0 ? e[n] : (n = n.replace(/\[(\w+)\]/g, ".$1"), n = n.replace(/^\./, ""), Tr(e, n.split("."), t));
}
function qe(e, n, t) {
  if (n === !0) return e === void 0 ? t : e;
  if (n == null || typeof n == "boolean") return t;
  if (e !== Object(e)) {
    if (typeof n != "function") return t;
    const l = n(e, t);
    return typeof l == "undefined" ? t : l;
  }
  if (typeof n == "string") return rn(e, n, t);
  if (Array.isArray(n)) return Tr(e, n, t);
  if (typeof n != "function") return t;
  const a = n(e, t);
  return typeof a == "undefined" ? t : a;
}
function _t(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  return Array.from({
    length: e
  }, (t, a) => n + a);
}
function ee(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "px";
  if (!(e == null || e === ""))
    return isNaN(+e) ? String(e) : isFinite(+e) ? `${Number(e)}${n}` : void 0;
}
function Br(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e);
}
function xo(e) {
  let n;
  return e !== null && typeof e == "object" && ((n = Object.getPrototypeOf(e)) === Object.prototype || n === null);
}
function bi(e) {
  if (e && "$el" in e) {
    const n = e.$el;
    return (n == null ? void 0 : n.nodeType) === Node.TEXT_NODE ? n.nextElementSibling : n;
  }
  return e;
}
const wo = Object.freeze({
  enter: 13,
  tab: 9,
  delete: 46,
  esc: 27,
  space: 32,
  up: 38,
  down: 40,
  left: 37,
  right: 39,
  end: 35,
  home: 36,
  del: 46,
  backspace: 8,
  insert: 45,
  pageup: 33,
  pagedown: 34,
  shift: 16
}), Ml = Object.freeze({
  enter: "Enter",
  tab: "Tab",
  delete: "Delete",
  esc: "Escape",
  space: "Space",
  up: "ArrowUp",
  down: "ArrowDown",
  left: "ArrowLeft",
  right: "ArrowRight",
  end: "End",
  home: "Home",
  del: "Delete",
  backspace: "Backspace",
  insert: "Insert",
  pageup: "PageUp",
  pagedown: "PageDown",
  shift: "Shift"
});
function Dr(e) {
  return Object.keys(e);
}
function en(e, n) {
  return n.every((t) => e.hasOwnProperty(t));
}
function Si(e, n) {
  const t = {}, a = new Set(Object.keys(e));
  for (const l of n)
    a.has(l) && (t[l] = e[l]);
  return t;
}
function pl(e, n, t) {
  const a = /* @__PURE__ */ Object.create(null), l = /* @__PURE__ */ Object.create(null);
  for (const i in e)
    n.some((o) => o instanceof RegExp ? o.test(i) : o === i) ? a[i] = e[i] : l[i] = e[i];
  return [a, l];
}
function We(e, n) {
  const t = v({}, e);
  return n.forEach((a) => delete t[a]), t;
}
function Wa(e, n) {
  const t = {};
  return n.forEach((a) => t[a] = e[a]), t;
}
const Mr = /^on[^a-z]/, ja = (e) => Mr.test(e), ld = ["onAfterscriptexecute", "onAnimationcancel", "onAnimationend", "onAnimationiteration", "onAnimationstart", "onAuxclick", "onBeforeinput", "onBeforescriptexecute", "onChange", "onClick", "onCompositionend", "onCompositionstart", "onCompositionupdate", "onContextmenu", "onCopy", "onCut", "onDblclick", "onFocusin", "onFocusout", "onFullscreenchange", "onFullscreenerror", "onGesturechange", "onGestureend", "onGesturestart", "onGotpointercapture", "onInput", "onKeydown", "onKeypress", "onKeyup", "onLostpointercapture", "onMousedown", "onMousemove", "onMouseout", "onMouseover", "onMouseup", "onMousewheel", "onPaste", "onPointercancel", "onPointerdown", "onPointerenter", "onPointerleave", "onPointermove", "onPointerout", "onPointerover", "onPointerup", "onReset", "onSelect", "onSubmit", "onTouchcancel", "onTouchend", "onTouchmove", "onTouchstart", "onTransitioncancel", "onTransitionend", "onTransitionrun", "onTransitionstart", "onWheel"], id = ["ArrowUp", "ArrowDown", "ArrowRight", "ArrowLeft", "Enter", "Escape", "Tab", " "];
function od(e) {
  return e.isComposing && id.includes(e.key);
}
function Gt(e) {
  const [n, t] = pl(e, [Mr]), a = We(n, ld), [l, i] = pl(t, ["class", "style", "id", /^data-/]);
  return Object.assign(l, n), Object.assign(i, a), [l, i];
}
function Me(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e];
}
function rd(e, n) {
  let t = 0;
  const a = function() {
    for (var l = arguments.length, i = new Array(l), o = 0; o < l; o++)
      i[o] = arguments[o];
    clearTimeout(t), t = setTimeout(() => e(...i), ut(n));
  };
  return a.clear = () => {
    clearTimeout(t);
  }, a.immediate = e, a;
}
function Ne(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
  return Math.max(n, Math.min(t, e));
}
function Vo(e) {
  const n = e.toString().trim();
  return n.includes(".") ? n.length - n.indexOf(".") - 1 : 0;
}
function Po(e, n) {
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "0";
  return e + t.repeat(Math.max(0, n - e.length));
}
function Io(e, n) {
  return (arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "0").repeat(Math.max(0, n - e.length)) + e;
}
function sd(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  const t = [];
  let a = 0;
  for (; a < e.length; )
    t.push(e.substr(a, n)), a += n;
  return t;
}
function _o(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1e3;
  if (e < n)
    return `${e} B`;
  const t = n === 1024 ? ["Ki", "Mi", "Gi"] : ["k", "M", "G"];
  let a = -1;
  for (; Math.abs(e) >= n && a < t.length - 1; )
    e /= n, ++a;
  return `${e.toFixed(1)} ${t[a]}B`;
}
function at() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, t = arguments.length > 2 ? arguments[2] : void 0;
  const a = {};
  for (const l in e)
    a[l] = e[l];
  for (const l in n) {
    const i = e[l], o = n[l];
    if (xo(i) && xo(o)) {
      a[l] = at(i, o, t);
      continue;
    }
    if (t && Array.isArray(i) && Array.isArray(o)) {
      a[l] = t(i, o);
      continue;
    }
    a[l] = o;
  }
  return a;
}
function pr(e) {
  return e.map((n) => n.type === re ? pr(n.children) : n).flat();
}
function nn() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  if (nn.cache.has(e)) return nn.cache.get(e);
  const n = e.replace(/[^a-z]/gi, "-").replace(/\B([A-Z])/g, "-$1").toLowerCase();
  return nn.cache.set(e, n), n;
}
nn.cache = /* @__PURE__ */ new Map();
function Dn(e, n) {
  if (!n || typeof n != "object") return [];
  if (Array.isArray(n))
    return n.map((t) => Dn(e, t)).flat(1);
  if (n.suspense)
    return Dn(e, n.ssContent);
  if (Array.isArray(n.children))
    return n.children.map((t) => Dn(e, t)).flat(1);
  if (n.component) {
    if (Object.getOwnPropertySymbols(n.component.provides).includes(e))
      return [n.component];
    if (n.component.subTree)
      return Dn(e, n.component.subTree).flat(1);
  }
  return [];
}
var Va = /* @__PURE__ */ new WeakMap(), An = /* @__PURE__ */ new WeakMap();
class ud {
  constructor(n) {
    Co(this, Va, []), Co(this, An, 0), this.size = n;
  }
  push(n) {
    Jt(Va, this)[Jt(An, this)] = n, ad(An, this, (Jt(An, this) + 1) % this.size);
  }
  values() {
    return Jt(Va, this).slice(Jt(An, this)).concat(Jt(Va, this).slice(0, Jt(An, this)));
  }
}
function cd(e) {
  return "touches" in e ? {
    clientX: e.touches[0].clientX,
    clientY: e.touches[0].clientY
  } : {
    clientX: e.clientX,
    clientY: e.clientY
  };
}
function ki(e) {
  const n = dt({}), t = S(e);
  return Re(() => {
    for (const a in t.value)
      n[a] = t.value[a];
  }, {
    flush: "sync"
  }), gn(n);
}
function Ma(e, n) {
  return e.includes(n);
}
function Er(e) {
  return e[2].toLowerCase() + e.slice(3);
}
const Je = () => [Function, Array];
function Ao(e, n) {
  return n = "on" + Nn(n), !!(e[n] || e[`${n}Once`] || e[`${n}Capture`] || e[`${n}OnceCapture`] || e[`${n}CaptureOnce`]);
}
function Ci(e) {
  for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
    t[a - 1] = arguments[a];
  if (Array.isArray(e))
    for (const l of e)
      l(...t);
  else typeof e == "function" && e(...t);
}
function Zn(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  const t = ["button", "[href]", 'input:not([type="hidden"])', "select", "textarea", "[tabindex]"].map((a) => `${a}${n ? ':not([tabindex="-1"])' : ""}:not([disabled])`).join(", ");
  return [...e.querySelectorAll(t)];
}
function Fr(e, n, t) {
  var o;
  let a, l = e.indexOf(document.activeElement);
  const i = n === "next" ? 1 : -1;
  do
    l += i, a = e[l];
  while ((!a || a.offsetParent == null || !((o = t == null ? void 0 : t(a)) == null || o)) && l < e.length && l >= 0);
  return a;
}
function an(e, n) {
  var a, l, i, o;
  const t = Zn(e);
  if (!n)
    (e === document.activeElement || !e.contains(document.activeElement)) && ((a = t[0]) == null || a.focus());
  else if (n === "first")
    (l = t[0]) == null || l.focus();
  else if (n === "last")
    (i = t.at(-1)) == null || i.focus();
  else if (typeof n == "number")
    (o = t[n]) == null || o.focus();
  else {
    const r = Fr(t, n);
    r ? r.focus() : an(e, n === "next" ? "first" : "last");
  }
}
function Pa(e) {
  return e == null || typeof e == "string" && e.trim() === "";
}
function $r() {
}
function En(e, n) {
  if (!(Ie && typeof CSS != "undefined" && typeof CSS.supports != "undefined" && CSS.supports(`selector(${n})`))) return null;
  try {
    return !!e && e.matches(n);
  } catch (a) {
    return null;
  }
}
function Ya(e) {
  return e.some((n) => Nc(n) ? n.type === Hc ? !1 : n.type !== re || Ya(n.children) : !0) ? e : null;
}
function dd(e, n) {
  if (!Ie || e === 0)
    return n(), () => {
    };
  const t = window.setTimeout(n, e);
  return () => window.clearTimeout(t);
}
function vd(e, n) {
  const t = e.clientX, a = e.clientY, l = n.getBoundingClientRect(), i = l.left, o = l.top, r = l.right, u = l.bottom;
  return t >= i && t <= r && a >= o && a <= u;
}
function pa() {
  const e = Z(), n = (t) => {
    e.value = t;
  };
  return Object.defineProperty(n, "value", {
    enumerable: !0,
    get: () => e.value,
    set: (t) => e.value = t
  }), Object.defineProperty(n, "el", {
    enumerable: !0,
    get: () => bi(e.value)
  }), n;
}
function Ea(e) {
  const n = e.key.length === 1, t = !e.ctrlKey && !e.metaKey && !e.altKey;
  return n && t;
}
const Or = ["top", "bottom"], fd = ["start", "end", "left", "right"];
function El(e, n) {
  let [t, a] = e.split(" ");
  return a || (a = Ma(Or, t) ? "start" : Ma(fd, t) ? "top" : "center"), {
    side: Fl(t, n),
    align: Fl(a, n)
  };
}
function Fl(e, n) {
  return e === "start" ? n ? "right" : "left" : e === "end" ? n ? "left" : "right" : e;
}
function wl(e) {
  return {
    side: {
      center: "center",
      top: "bottom",
      bottom: "top",
      left: "right",
      right: "left"
    }[e.side],
    align: e.align
  };
}
function Vl(e) {
  return {
    side: e.side,
    align: {
      center: "center",
      top: "bottom",
      bottom: "top",
      left: "right",
      right: "left"
    }[e.align]
  };
}
function Lo(e) {
  return {
    side: e.align,
    align: e.side
  };
}
function To(e) {
  return Ma(Or, e.side) ? "y" : "x";
}
class ln {
  constructor(n) {
    let {
      x: t,
      y: a,
      width: l,
      height: i
    } = n;
    this.x = t, this.y = a, this.width = l, this.height = i;
  }
  get top() {
    return this.y;
  }
  get bottom() {
    return this.y + this.height;
  }
  get left() {
    return this.x;
  }
  get right() {
    return this.x + this.width;
  }
}
function Bo(e, n) {
  return {
    x: {
      before: Math.max(0, n.left - e.left),
      after: Math.max(0, e.right - n.right)
    },
    y: {
      before: Math.max(0, n.top - e.top),
      after: Math.max(0, e.bottom - n.bottom)
    }
  };
}
function Rr(e) {
  return Array.isArray(e) ? new ln({
    x: e[0],
    y: e[1],
    width: 0,
    height: 0
  }) : e.getBoundingClientRect();
}
function xi(e) {
  const n = e.getBoundingClientRect(), t = getComputedStyle(e), a = t.transform;
  if (a) {
    let l, i, o, r, u;
    if (a.startsWith("matrix3d("))
      l = a.slice(9, -1).split(/, /), i = +l[0], o = +l[5], r = +l[12], u = +l[13];
    else if (a.startsWith("matrix("))
      l = a.slice(7, -1).split(/, /), i = +l[0], o = +l[3], r = +l[4], u = +l[5];
    else
      return new ln(n);
    const c = t.transformOrigin, d = n.x - r - (1 - i) * parseFloat(c), f = n.y - u - (1 - o) * parseFloat(c.slice(c.indexOf(" ") + 1)), m = i ? n.width / i : e.offsetWidth + 1, g = o ? n.height / o : e.offsetHeight + 1;
    return new ln({
      x: d,
      y: f,
      width: m,
      height: g
    });
  } else
    return new ln(n);
}
function tn(e, n, t) {
  if (typeof e.animate == "undefined") return {
    finished: Promise.resolve()
  };
  let a;
  try {
    a = e.animate(n, t);
  } catch (l) {
    return {
      finished: Promise.resolve()
    };
  }
  return typeof a.finished == "undefined" && (a.finished = new Promise((l) => {
    a.onfinish = () => {
      l(a);
    };
  })), a;
}
const Ta = /* @__PURE__ */ new WeakMap();
function md(e, n) {
  Object.keys(n).forEach((t) => {
    if (ja(t)) {
      const a = Er(t), l = Ta.get(e);
      if (n[t] == null)
        l == null || l.forEach((i) => {
          const [o, r] = i;
          o === a && (e.removeEventListener(a, r), l.delete(i));
        });
      else if (!l || ![...l].some((i) => i[0] === a && i[1] === n[t])) {
        e.addEventListener(a, n[t]);
        const i = l || /* @__PURE__ */ new Set();
        i.add([a, n[t]]), Ta.has(e) || Ta.set(e, i);
      }
    } else
      n[t] == null ? e.removeAttribute(t) : e.setAttribute(t, n[t]);
  });
}
function gd(e, n) {
  Object.keys(n).forEach((t) => {
    if (ja(t)) {
      const a = Er(t), l = Ta.get(e);
      l == null || l.forEach((i) => {
        const [o, r] = i;
        o === a && (e.removeEventListener(a, r), l.delete(i));
      });
    } else
      e.removeAttribute(t);
  });
}
const Ln = 2.4, Do = 0.2126729, Mo = 0.7151522, po = 0.072175, hd = 0.55, yd = 0.58, bd = 0.57, Sd = 0.62, Ia = 0.03, Eo = 1.45, kd = 5e-4, Cd = 1.25, xd = 1.25, Fo = 0.078, $o = 12.82051282051282, _a = 0.06, Oo = 1e-3;
function Ro(e, n) {
  const t = xe(e.r / 255, Ln), a = xe(e.g / 255, Ln), l = xe(e.b / 255, Ln), i = xe(n.r / 255, Ln), o = xe(n.g / 255, Ln), r = xe(n.b / 255, Ln);
  let u = t * Do + a * Mo + l * po, c = i * Do + o * Mo + r * po;
  if (u <= Ia && (u += xe(Ia - u, Eo)), c <= Ia && (c += xe(Ia - c, Eo)), Math.abs(c - u) < kd) return 0;
  let d;
  if (c > u) {
    const f = (xe(c, hd) - xe(u, yd)) * Cd;
    d = f < Oo ? 0 : f < Fo ? f - f * $o * _a : f - _a;
  } else {
    const f = (xe(c, Sd) - xe(u, bd)) * xd;
    d = f > -Oo ? 0 : f > -Fo ? f - f * $o * _a : f + _a;
  }
  return d * 100;
}
function wt(e) {
  za(`Vuetify: ${e}`);
}
function Jn(e) {
  za(`Vuetify error: ${e}`);
}
function wd(e, n) {
  n = Array.isArray(n) ? n.slice(0, -1).map((t) => `'${t}'`).join(", ") + ` or '${n.at(-1)}'` : `'${n}'`, za(`[Vuetify UPGRADE] '${e}' is deprecated, use ${n} instead.`);
}
const Fa = 0.20689655172413793, Vd = (e) => e > xe(Fa, 3) ? Math.cbrt(e) : e / (3 * xe(Fa, 2)) + 4 / 29, Pd = (e) => e > Fa ? xe(e, 3) : 3 * xe(Fa, 2) * (e - 4 / 29);
function Nr(e) {
  const n = Vd, t = n(e[1]);
  return [116 * t - 16, 500 * (n(e[0] / 0.95047) - t), 200 * (t - n(e[2] / 1.08883))];
}
function Hr(e) {
  const n = Pd, t = (e[0] + 16) / 116;
  return [n(t + e[1] / 500) * 0.95047, n(t), n(t - e[2] / 200) * 1.08883];
}
const Id = [[3.2406, -1.5372, -0.4986], [-0.9689, 1.8758, 0.0415], [0.0557, -0.204, 1.057]], _d = (e) => e <= 31308e-7 ? e * 12.92 : 1.055 * xe(e, 1 / 2.4) - 0.055, Ad = [[0.4124, 0.3576, 0.1805], [0.2126, 0.7152, 0.0722], [0.0193, 0.1192, 0.9505]], Ld = (e) => e <= 0.04045 ? e / 12.92 : xe((e + 0.055) / 1.055, 2.4);
function zr(e) {
  const n = Array(3), t = _d, a = Id;
  for (let l = 0; l < 3; ++l)
    n[l] = Math.round(Ne(t(a[l][0] * e[0] + a[l][1] * e[1] + a[l][2] * e[2])) * 255);
  return {
    r: n[0],
    g: n[1],
    b: n[2]
  };
}
function wi(e) {
  let {
    r: n,
    g: t,
    b: a
  } = e;
  const l = [0, 0, 0], i = Ld, o = Ad;
  n = i(n / 255), t = i(t / 255), a = i(a / 255);
  for (let r = 0; r < 3; ++r)
    l[r] = o[r][0] * n + o[r][1] * t + o[r][2] * a;
  return l;
}
function $l(e) {
  return !!e && /^(#|var\(--|(rgb|hsl)a?\()/.test(e);
}
function Td(e) {
  return $l(e) && !/^((rgb|hsl)a?\()?var\(--/.test(e);
}
const No = new RegExp("^(?<fn>(?:rgb|hsl)a?)\\((?<values>.+)\\)"), Bd = {
  rgb: (e, n, t, a) => ({
    r: e,
    g: n,
    b: t,
    a
  }),
  rgba: (e, n, t, a) => ({
    r: e,
    g: n,
    b: t,
    a
  }),
  hsl: (e, n, t, a) => Ho({
    h: e,
    s: n,
    l: t,
    a
  }),
  hsla: (e, n, t, a) => Ho({
    h: e,
    s: n,
    l: t,
    a
  }),
  hsv: (e, n, t, a) => Et({
    h: e,
    s: n,
    v: t,
    a
  }),
  hsva: (e, n, t, a) => Et({
    h: e,
    s: n,
    v: t,
    a
  })
};
function St(e) {
  if (typeof e == "number")
    return (isNaN(e) || e < 0 || e > 16777215) && wt(`'${e}' is not a valid hex color`), {
      r: (e & 16711680) >> 16,
      g: (e & 65280) >> 8,
      b: e & 255
    };
  if (typeof e == "string" && No.test(e)) {
    const {
      groups: n
    } = e.match(No), {
      fn: t,
      values: a
    } = n, l = a.split(/,\s*/).map((i) => i.endsWith("%") && ["hsl", "hsla", "hsv", "hsva"].includes(t) ? parseFloat(i) / 100 : parseFloat(i));
    return Bd[t](...l);
  } else if (typeof e == "string") {
    let n = e.startsWith("#") ? e.slice(1) : e;
    [3, 4].includes(n.length) ? n = n.split("").map((a) => a + a).join("") : [6, 8].includes(n.length) || wt(`'${e}' is not a valid hex(a) color`);
    const t = parseInt(n, 16);
    return (isNaN(t) || t < 0 || t > 4294967295) && wt(`'${e}' is not a valid hex(a) color`), Ur(n);
  } else if (typeof e == "object") {
    if (en(e, ["r", "g", "b"]))
      return e;
    if (en(e, ["h", "s", "l"]))
      return Et(Vi(e));
    if (en(e, ["h", "s", "v"]))
      return Et(e);
  }
  throw new TypeError(`Invalid color: ${e == null ? e : String(e) || e.constructor.name}
Expected #hex, #hexa, rgb(), rgba(), hsl(), hsla(), object or number`);
}
function Et(e) {
  const {
    h: n,
    s: t,
    v: a,
    a: l
  } = e, i = (r) => {
    const u = (r + n / 60) % 6;
    return a - a * t * Math.max(Math.min(u, 4 - u, 1), 0);
  }, o = [i(5), i(3), i(1)].map((r) => Math.round(r * 255));
  return {
    r: o[0],
    g: o[1],
    b: o[2],
    a: l
  };
}
function Ho(e) {
  return Et(Vi(e));
}
function Ga(e) {
  if (!e) return {
    h: 0,
    s: 1,
    v: 1,
    a: 1
  };
  const n = e.r / 255, t = e.g / 255, a = e.b / 255, l = Math.max(n, t, a), i = Math.min(n, t, a);
  let o = 0;
  l !== i && (l === n ? o = 60 * (0 + (t - a) / (l - i)) : l === t ? o = 60 * (2 + (a - n) / (l - i)) : l === a && (o = 60 * (4 + (n - t) / (l - i)))), o < 0 && (o = o + 360);
  const r = l === 0 ? 0 : (l - i) / l, u = [o, r, l];
  return {
    h: u[0],
    s: u[1],
    v: u[2],
    a: e.a
  };
}
function Wr(e) {
  const {
    h: n,
    s: t,
    v: a,
    a: l
  } = e, i = a - a * t / 2, o = i === 1 || i === 0 ? 0 : (a - i) / Math.min(i, 1 - i);
  return {
    h: n,
    s: o,
    l: i,
    a: l
  };
}
function Vi(e) {
  const {
    h: n,
    s: t,
    l: a,
    a: l
  } = e, i = a + t * Math.min(a, 1 - a), o = i === 0 ? 0 : 2 - 2 * a / i;
  return {
    h: n,
    s: o,
    v: i,
    a: l
  };
}
function jr(e) {
  let {
    r: n,
    g: t,
    b: a,
    a: l
  } = e;
  return l === void 0 ? `rgb(${n}, ${t}, ${a})` : `rgba(${n}, ${t}, ${a}, ${l})`;
}
function Yr(e) {
  return jr(Et(e));
}
function Aa(e) {
  const n = Math.round(e).toString(16);
  return ("00".substr(0, 2 - n.length) + n).toUpperCase();
}
function Gr(e) {
  let {
    r: n,
    g: t,
    b: a,
    a: l
  } = e;
  return `#${[Aa(n), Aa(t), Aa(a), l !== void 0 ? Aa(Math.round(l * 255)) : ""].join("")}`;
}
function Ur(e) {
  e = Dd(e);
  let [n, t, a, l] = sd(e, 2).map((i) => parseInt(i, 16));
  return l = l === void 0 ? l : l / 255, {
    r: n,
    g: t,
    b: a,
    a: l
  };
}
function Kr(e) {
  const n = Ur(e);
  return Ga(n);
}
function qr(e) {
  return Gr(Et(e));
}
function Dd(e) {
  return e.startsWith("#") && (e = e.slice(1)), e = e.replace(/([^0-9a-f])/gi, "F"), (e.length === 3 || e.length === 4) && (e = e.split("").map((n) => n + n).join("")), e.length !== 6 && (e = Po(Po(e, 6), 8, "F")), e;
}
function Md(e, n) {
  const t = Nr(wi(e));
  return t[0] = t[0] + n * 10, zr(Hr(t));
}
function pd(e, n) {
  const t = Nr(wi(e));
  return t[0] = t[0] - n * 10, zr(Hr(t));
}
function Ol(e) {
  const n = St(e);
  return wi(n)[1];
}
function Ed(e, n) {
  const t = Ol(e), a = Ol(n), l = Math.max(t, a), i = Math.min(t, a);
  return (l + 0.05) / (i + 0.05);
}
function Xr(e) {
  const n = Math.abs(Ro(St(0), St(e)));
  return Math.abs(Ro(St(16777215), St(e))) > Math.min(n, 50) ? "#fff" : "#000";
}
function M(e, n) {
  return (t) => Object.keys(e).reduce((a, l) => {
    const o = typeof e[l] == "object" && e[l] != null && !Array.isArray(e[l]) ? e[l] : {
      type: e[l]
    };
    return t && l in t ? a[l] = J(v({}, o), {
      default: t[l]
    }) : a[l] = o, n && !a[l].source && (a[l].source = n), a;
  }, {});
}
const te = M({
  class: [String, Array, Object],
  style: {
    type: [String, Array, Object],
    default: null
  }
}, "component");
function Fe(e, n) {
  const t = zc();
  if (!t)
    throw new Error(`[Vuetify] ${e} must be called from inside a setup function`);
  return t;
}
function Tt() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "composables";
  const n = Fe(e).type;
  return nn((n == null ? void 0 : n.aliasName) || (n == null ? void 0 : n.name));
}
let Zr = 0, Ba = /* @__PURE__ */ new WeakMap();
function Qe() {
  const e = Fe("getUid");
  if (Ba.has(e)) return Ba.get(e);
  {
    const n = Zr++;
    return Ba.set(e, n), n;
  }
}
Qe.reset = () => {
  Zr = 0, Ba = /* @__PURE__ */ new WeakMap();
};
function Fd(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Fe("injectSelf");
  const {
    provides: t
  } = n;
  if (t && e in t)
    return t[e];
}
const Fn = Symbol.for("vuetify:defaults");
function $d(e) {
  return G(e);
}
function Pi() {
  const e = Ce(Fn);
  if (!e) throw new Error("[Vuetify] Could not find defaults instance");
  return e;
}
function Ee(e, n) {
  const t = Pi(), a = G(e), l = S(() => {
    if (ut(n == null ? void 0 : n.disabled)) return t.value;
    const o = ut(n == null ? void 0 : n.scoped), r = ut(n == null ? void 0 : n.reset), u = ut(n == null ? void 0 : n.root);
    if (a.value == null && !(o || r || u)) return t.value;
    let c = at(a.value, {
      prev: t.value
    });
    if (o) return c;
    if (r || u) {
      const d = Number(r || 1 / 0);
      for (let f = 0; f <= d && !(!c || !("prev" in c)); f++)
        c = c.prev;
      return c && typeof u == "string" && u in c && (c = at(at(c, {
        prev: c
      }), c[u])), c;
    }
    return c.prev ? at(c.prev, c) : c;
  });
  return Be(Fn, l), l;
}
function Od(e, n) {
  var t, a;
  return typeof ((t = e.props) == null ? void 0 : t[n]) != "undefined" || typeof ((a = e.props) == null ? void 0 : a[nn(n)]) != "undefined";
}
function Jr() {
  var u;
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 ? arguments[1] : void 0, t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Pi();
  const a = Fe("useDefaults");
  if (n = (u = n != null ? n : a.type.name) != null ? u : a.type.__name, !n)
    throw new Error("[Vuetify] Could not determine component name");
  const l = S(() => {
    var c, d;
    return (d = t.value) == null ? void 0 : d[(c = e._as) != null ? c : n];
  }), i = new Proxy(e, {
    get(c, d) {
      var m, g, y, b, h, k, C;
      const f = Reflect.get(c, d);
      return d === "class" || d === "style" ? [(m = l.value) == null ? void 0 : m[d], f].filter((I) => I != null) : typeof d == "string" && !Od(a.vnode, d) ? ((g = l.value) == null ? void 0 : g[d]) !== void 0 ? (y = l.value) == null ? void 0 : y[d] : ((h = (b = t.value) == null ? void 0 : b.global) == null ? void 0 : h[d]) !== void 0 ? (C = (k = t.value) == null ? void 0 : k.global) == null ? void 0 : C[d] : f : f;
    }
  }), o = Z();
  Re(() => {
    if (l.value) {
      const c = Object.entries(l.value).filter((d) => {
        let [f] = d;
        return f.startsWith(f[0].toUpperCase());
      });
      o.value = c.length ? Object.fromEntries(c) : void 0;
    } else
      o.value = void 0;
  });
  function r() {
    const c = Fd(Fn, a);
    Be(Fn, S(() => {
      var d;
      return o.value ? at((d = c == null ? void 0 : c.value) != null ? d : {}, o.value) : c == null ? void 0 : c.value;
    }));
  }
  return {
    props: i,
    provideSubDefaults: r
  };
}
function Rd() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 ? arguments[1] : void 0;
  const {
    props: t,
    provideSubDefaults: a
  } = Jr(e, n);
  return a(), t;
}
function gt(e) {
  var n, t;
  if (e._setup = (n = e._setup) != null ? n : e.setup, !e.name)
    return wt("The component is missing an explicit name, unable to generate default prop value"), e;
  if (e._setup) {
    e.props = M((t = e.props) != null ? t : {}, e.name)();
    const a = Object.keys(e.props).filter((l) => l !== "class" && l !== "style");
    e.filterProps = function(i) {
      return Si(i, a);
    }, e.props._as = String, e.setup = function(i, o) {
      var f;
      const r = Pi();
      if (!r.value) return e._setup(i, o);
      const {
        props: u,
        provideSubDefaults: c
      } = Jr(i, (f = i._as) != null ? f : e.name, r), d = e._setup(u, o);
      return c(), d;
    };
  }
  return e;
}
function N() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
  return (n) => (e ? gt : Wc)(n);
}
function Nd(e, n) {
  return n.props = e, n;
}
function Bt(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "div", t = arguments.length > 2 ? arguments[2] : void 0;
  return N()({
    name: t != null ? t : Nn(Ir(e.replace(/__/g, "-"))),
    props: v({
      tag: {
        type: String,
        default: n
      }
    }, te()),
    setup(a, l) {
      let {
        slots: i
      } = l;
      return () => {
        var o;
        return hn(a.tag, {
          class: [e, a.class],
          style: a.style
        }, (o = i.default) == null ? void 0 : o.call(i));
      };
    }
  });
}
function Qr(e) {
  if (typeof e.getRootNode != "function") {
    for (; e.parentNode; ) e = e.parentNode;
    return e !== document ? null : document;
  }
  const n = e.getRootNode();
  return n !== document && n.getRootNode({
    composed: !0
  }) !== document ? null : n;
}
const Qn = "cubic-bezier(0.4, 0, 0.2, 1)", Hd = "cubic-bezier(0.0, 0, 0.2, 1)", zd = "cubic-bezier(0.4, 0, 1, 1)";
function zo(e, n, t) {
  return Object.keys(e).filter((a) => ja(a) && a.endsWith(n)).reduce((a, l) => (a[l.slice(0, -n.length)] = (i) => e[l](i, t(i)), a), {});
}
function Ii(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
  for (; e; ) {
    if (n ? Wd(e) : _i(e)) return e;
    e = e.parentElement;
  }
  return document.scrollingElement;
}
function $a(e, n) {
  const t = [];
  if (n && e && !n.contains(e)) return t;
  for (; e && (_i(e) && t.push(e), e !== n); )
    e = e.parentElement;
  return t;
}
function _i(e) {
  if (!e || e.nodeType !== Node.ELEMENT_NODE) return !1;
  const n = window.getComputedStyle(e);
  return n.overflowY === "scroll" || n.overflowY === "auto" && e.scrollHeight > e.clientHeight;
}
function Wd(e) {
  if (!e || e.nodeType !== Node.ELEMENT_NODE) return !1;
  const n = window.getComputedStyle(e);
  return ["scroll", "auto"].includes(n.overflowY);
}
function jd(e) {
  for (; e; ) {
    if (window.getComputedStyle(e).position === "fixed")
      return !0;
    e = e.offsetParent;
  }
  return !1;
}
function z(e) {
  const n = Fe("useRender");
  n.render = e;
}
function oe(e, n, t) {
  let a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : (f) => f, l = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : (f) => f;
  const i = Fe("useProxiedModel"), o = G(e[n] !== void 0 ? e[n] : t), r = nn(n), c = r !== n ? S(() => {
    var f, m, g, y;
    return e[n], !!(((f = i.vnode.props) != null && f.hasOwnProperty(n) || (m = i.vnode.props) != null && m.hasOwnProperty(r)) && ((g = i.vnode.props) != null && g.hasOwnProperty(`onUpdate:${n}`) || (y = i.vnode.props) != null && y.hasOwnProperty(`onUpdate:${r}`)));
  }) : S(() => {
    var f, m;
    return e[n], !!((f = i.vnode.props) != null && f.hasOwnProperty(n) && ((m = i.vnode.props) != null && m.hasOwnProperty(`onUpdate:${n}`)));
  });
  ct(() => !c.value, () => {
    Q(() => e[n], (f) => {
      o.value = f;
    });
  });
  const d = S({
    get() {
      const f = e[n];
      return a(c.value ? f : o.value);
    },
    set(f) {
      const m = l(f), g = ze(c.value ? e[n] : o.value);
      g === m || a(g) === f || (o.value = m, i == null || i.emit(`update:${n}`, m));
    }
  });
  return Object.defineProperty(d, "externalValue", {
    get: () => c.value ? e[n] : o.value
  }), d;
}
const Yd = {
  badge: "Badge",
  open: "Open",
  close: "Close",
  dismiss: "Dismiss",
  confirmEdit: {
    ok: "OK",
    cancel: "Cancel"
  },
  dataIterator: {
    noResultsText: "No matching records found",
    loadingText: "Loading items..."
  },
  dataTable: {
    itemsPerPageText: "Rows per page:",
    ariaLabel: {
      sortDescending: "Sorted descending.",
      sortAscending: "Sorted ascending.",
      sortNone: "Not sorted.",
      activateNone: "Activate to remove sorting.",
      activateDescending: "Activate to sort descending.",
      activateAscending: "Activate to sort ascending."
    },
    sortBy: "Sort by"
  },
  dataFooter: {
    itemsPerPageText: "Items per page:",
    itemsPerPageAll: "All",
    nextPage: "Next page",
    prevPage: "Previous page",
    firstPage: "First page",
    lastPage: "Last page",
    pageText: "{0}-{1} of {2}"
  },
  dateRangeInput: {
    divider: "to"
  },
  datePicker: {
    itemsSelected: "{0} selected",
    range: {
      title: "Select dates",
      header: "Enter dates"
    },
    title: "Select date",
    header: "Enter date",
    input: {
      placeholder: "Enter date"
    }
  },
  noDataText: "No data available",
  carousel: {
    prev: "Previous visual",
    next: "Next visual",
    ariaLabel: {
      delimiter: "Carousel slide {0} of {1}"
    }
  },
  calendar: {
    moreEvents: "{0} more",
    today: "Today"
  },
  input: {
    clear: "Clear {0}",
    prependAction: "{0} prepended action",
    appendAction: "{0} appended action",
    otp: "Please enter OTP character {0}"
  },
  fileInput: {
    counter: "{0} files",
    counterSize: "{0} files ({1} in total)"
  },
  timePicker: {
    am: "AM",
    pm: "PM",
    title: "Select Time"
  },
  pagination: {
    ariaLabel: {
      root: "Pagination Navigation",
      next: "Next page",
      previous: "Previous page",
      page: "Go to page {0}",
      currentPage: "Page {0}, Current page",
      first: "First page",
      last: "Last page"
    }
  },
  stepper: {
    next: "Next",
    prev: "Previous"
  },
  rating: {
    ariaLabel: {
      item: "Rating {0} of {1}"
    }
  },
  loading: "Loading...",
  infiniteScroll: {
    loadMore: "Load more",
    empty: "No more"
  }
}, Wo = "$vuetify.", jo = (e, n) => e.replace(/\{(\d+)\}/g, (t, a) => String(n[+a])), es = (e, n, t) => function(a) {
  for (var l = arguments.length, i = new Array(l > 1 ? l - 1 : 0), o = 1; o < l; o++)
    i[o - 1] = arguments[o];
  if (!a.startsWith(Wo))
    return jo(a, i);
  const r = a.replace(Wo, ""), u = e.value && t.value[e.value], c = n.value && t.value[n.value];
  let d = rn(u, r, null);
  return d || (wt(`Translation key "${a}" not found in "${e.value}", trying fallback locale`), d = rn(c, r, null)), d || (Jn(`Translation key "${a}" not found in fallback`), d = a), typeof d != "string" && (Jn(`Translation key "${a}" has a non-string value`), d = a), jo(d, i);
};
function ts(e, n) {
  return (t, a) => new Intl.NumberFormat([e.value, n.value], a).format(t);
}
function Pl(e, n, t) {
  var l, i;
  const a = oe(e, n, (l = e[n]) != null ? l : t.value);
  return a.value = (i = e[n]) != null ? i : t.value, Q(t, (o) => {
    e[n] == null && (a.value = t.value);
  }), a;
}
function ns(e) {
  return (n) => {
    const t = Pl(n, "locale", e.current), a = Pl(n, "fallback", e.fallback), l = Pl(n, "messages", e.messages);
    return {
      name: "vuetify",
      current: t,
      fallback: a,
      messages: l,
      t: es(t, a, l),
      n: ts(t, a),
      provide: ns({
        current: t,
        fallback: a,
        messages: l
      })
    };
  };
}
function Gd(e) {
  var l, i;
  const n = Z((l = e == null ? void 0 : e.locale) != null ? l : "en"), t = Z((i = e == null ? void 0 : e.fallback) != null ? i : "en"), a = G(v({
    en: Yd
  }, e == null ? void 0 : e.messages));
  return {
    name: "vuetify",
    current: n,
    fallback: t,
    messages: a,
    t: es(n, t, a),
    n: ts(n, t),
    provide: ns({
      current: n,
      fallback: t,
      messages: a
    })
  };
}
const $n = Symbol.for("vuetify:locale");
function Ud(e) {
  return e.name != null;
}
function Kd(e) {
  const n = e != null && e.adapter && Ud(e == null ? void 0 : e.adapter) ? e == null ? void 0 : e.adapter : Gd(e), t = Zd(n, e);
  return v(v({}, n), t);
}
function $e() {
  const e = Ce($n);
  if (!e) throw new Error("[Vuetify] Could not find injected locale instance");
  return e;
}
function qd(e) {
  const n = Ce($n);
  if (!n) throw new Error("[Vuetify] Could not find injected locale instance");
  const t = n.provide(e), a = Jd(t, n.rtl, e), l = v(v({}, t), a);
  return Be($n, l), l;
}
function Xd() {
  return {
    af: !1,
    ar: !0,
    bg: !1,
    ca: !1,
    ckb: !1,
    cs: !1,
    de: !1,
    el: !1,
    en: !1,
    es: !1,
    et: !1,
    fa: !0,
    fi: !1,
    fr: !1,
    hr: !1,
    hu: !1,
    he: !0,
    id: !1,
    it: !1,
    ja: !1,
    km: !1,
    ko: !1,
    lv: !1,
    lt: !1,
    nl: !1,
    no: !1,
    pl: !1,
    pt: !1,
    ro: !1,
    ru: !1,
    sk: !1,
    sl: !1,
    srCyrl: !1,
    srLatn: !1,
    sv: !1,
    th: !1,
    tr: !1,
    az: !1,
    uk: !1,
    vi: !1,
    zhHans: !1,
    zhHant: !1
  };
}
function Zd(e, n) {
  var l;
  const t = G((l = n == null ? void 0 : n.rtl) != null ? l : Xd()), a = S(() => {
    var i;
    return (i = t.value[e.current.value]) != null ? i : !1;
  });
  return {
    isRtl: a,
    rtl: t,
    rtlClasses: S(() => `v-locale--is-${a.value ? "rtl" : "ltr"}`)
  };
}
function Jd(e, n, t) {
  const a = S(() => {
    var l, i;
    return (i = (l = t.rtl) != null ? l : n.value[e.current.value]) != null ? i : !1;
  });
  return {
    isRtl: a,
    rtl: n,
    rtlClasses: S(() => `v-locale--is-${a.value ? "rtl" : "ltr"}`)
  };
}
function je() {
  const e = Ce($n);
  if (!e) throw new Error("[Vuetify] Could not find injected rtl instance");
  return {
    isRtl: e.isRtl,
    rtlClasses: e.rtlClasses
  };
}
const Ua = {
  "001": 1,
  AD: 1,
  AE: 6,
  AF: 6,
  AG: 0,
  AI: 1,
  AL: 1,
  AM: 1,
  AN: 1,
  AR: 1,
  AS: 0,
  AT: 1,
  AU: 1,
  AX: 1,
  AZ: 1,
  BA: 1,
  BD: 0,
  BE: 1,
  BG: 1,
  BH: 6,
  BM: 1,
  BN: 1,
  BR: 0,
  BS: 0,
  BT: 0,
  BW: 0,
  BY: 1,
  BZ: 0,
  CA: 0,
  CH: 1,
  CL: 1,
  CM: 1,
  CN: 1,
  CO: 0,
  CR: 1,
  CY: 1,
  CZ: 1,
  DE: 1,
  DJ: 6,
  DK: 1,
  DM: 0,
  DO: 0,
  DZ: 6,
  EC: 1,
  EE: 1,
  EG: 6,
  ES: 1,
  ET: 0,
  FI: 1,
  FJ: 1,
  FO: 1,
  FR: 1,
  GB: 1,
  "GB-alt-variant": 0,
  GE: 1,
  GF: 1,
  GP: 1,
  GR: 1,
  GT: 0,
  GU: 0,
  HK: 0,
  HN: 0,
  HR: 1,
  HU: 1,
  ID: 0,
  IE: 1,
  IL: 0,
  IN: 0,
  IQ: 6,
  IR: 6,
  IS: 1,
  IT: 1,
  JM: 0,
  JO: 6,
  JP: 0,
  KE: 0,
  KG: 1,
  KH: 0,
  KR: 0,
  KW: 6,
  KZ: 1,
  LA: 0,
  LB: 1,
  LI: 1,
  LK: 1,
  LT: 1,
  LU: 1,
  LV: 1,
  LY: 6,
  MC: 1,
  MD: 1,
  ME: 1,
  MH: 0,
  MK: 1,
  MM: 0,
  MN: 1,
  MO: 0,
  MQ: 1,
  MT: 0,
  MV: 5,
  MX: 0,
  MY: 1,
  MZ: 0,
  NI: 0,
  NL: 1,
  NO: 1,
  NP: 0,
  NZ: 1,
  OM: 6,
  PA: 0,
  PE: 0,
  PH: 0,
  PK: 0,
  PL: 1,
  PR: 0,
  PT: 0,
  PY: 0,
  QA: 6,
  RE: 1,
  RO: 1,
  RS: 1,
  RU: 1,
  SA: 0,
  SD: 6,
  SE: 1,
  SG: 0,
  SI: 1,
  SK: 1,
  SM: 1,
  SV: 0,
  SY: 6,
  TH: 0,
  TJ: 1,
  TM: 1,
  TR: 1,
  TT: 0,
  TW: 0,
  UA: 1,
  UM: 0,
  US: 0,
  UY: 1,
  UZ: 1,
  VA: 1,
  VE: 0,
  VI: 0,
  VN: 1,
  WS: 0,
  XK: 1,
  YE: 0,
  ZA: 0,
  ZW: 0
};
function Qd(e, n, t) {
  var d;
  const a = [];
  let l = [];
  const i = as(e), o = ls(e), r = (d = t != null ? t : Ua[n.slice(-2).toUpperCase()]) != null ? d : 0, u = (i.getDay() - r + 7) % 7, c = (o.getDay() - r + 7) % 7;
  for (let f = 0; f < u; f++) {
    const m = new Date(i);
    m.setDate(m.getDate() - (u - f)), l.push(m);
  }
  for (let f = 1; f <= o.getDate(); f++) {
    const m = new Date(e.getFullYear(), e.getMonth(), f);
    l.push(m), l.length === 7 && (a.push(l), l = []);
  }
  for (let f = 1; f < 7 - c; f++) {
    const m = new Date(o);
    m.setDate(m.getDate() + f), l.push(m);
  }
  return l.length > 0 && a.push(l), a;
}
function ev(e, n, t) {
  var i;
  const a = (i = t != null ? t : Ua[n.slice(-2).toUpperCase()]) != null ? i : 0, l = new Date(e);
  for (; l.getDay() !== a; )
    l.setDate(l.getDate() - 1);
  return l;
}
function tv(e, n) {
  var l;
  const t = new Date(e), a = (((l = Ua[n.slice(-2).toUpperCase()]) != null ? l : 0) + 6) % 7;
  for (; t.getDay() !== a; )
    t.setDate(t.getDate() + 1);
  return t;
}
function as(e) {
  return new Date(e.getFullYear(), e.getMonth(), 1);
}
function ls(e) {
  return new Date(e.getFullYear(), e.getMonth() + 1, 0);
}
function nv(e) {
  const n = e.split("-").map(Number);
  return new Date(n[0], n[1] - 1, n[2]);
}
const av = /^([12]\d{3}-([1-9]|0[1-9]|1[0-2])-([1-9]|0[1-9]|[12]\d|3[01]))$/;
function is(e) {
  if (e == null) return /* @__PURE__ */ new Date();
  if (e instanceof Date) return e;
  if (typeof e == "string") {
    let n;
    if (av.test(e))
      return nv(e);
    if (n = Date.parse(e), !isNaN(n)) return new Date(n);
  }
  return null;
}
const Yo = new Date(2e3, 0, 2);
function lv(e, n) {
  var a;
  const t = (a = n != null ? n : Ua[e.slice(-2).toUpperCase()]) != null ? a : 0;
  return _t(7).map((l) => {
    const i = new Date(Yo);
    return i.setDate(Yo.getDate() + t + l), new Intl.DateTimeFormat(e, {
      weekday: "narrow"
    }).format(i);
  });
}
function iv(e, n, t, a) {
  var r;
  const l = (r = is(e)) != null ? r : /* @__PURE__ */ new Date(), i = a == null ? void 0 : a[n];
  if (typeof i == "function")
    return i(l, n, t);
  let o = {};
  switch (n) {
    case "fullDate":
      o = {
        year: "numeric",
        month: "long",
        day: "numeric"
      };
      break;
    case "fullDateWithWeekday":
      o = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
      };
      break;
    case "normalDate":
      const u = l.getDate(), c = new Intl.DateTimeFormat(t, {
        month: "long"
      }).format(l);
      return `${u} ${c}`;
    case "normalDateWithWeekday":
      o = {
        weekday: "short",
        day: "numeric",
        month: "short"
      };
      break;
    case "shortDate":
      o = {
        month: "short",
        day: "numeric"
      };
      break;
    case "year":
      o = {
        year: "numeric"
      };
      break;
    case "month":
      o = {
        month: "long"
      };
      break;
    case "monthShort":
      o = {
        month: "short"
      };
      break;
    case "monthAndYear":
      o = {
        month: "long",
        year: "numeric"
      };
      break;
    case "monthAndDate":
      o = {
        month: "long",
        day: "numeric"
      };
      break;
    case "weekday":
      o = {
        weekday: "long"
      };
      break;
    case "weekdayShort":
      o = {
        weekday: "short"
      };
      break;
    case "dayOfMonth":
      return new Intl.NumberFormat(t).format(l.getDate());
    case "hours12h":
      o = {
        hour: "numeric",
        hour12: !0
      };
      break;
    case "hours24h":
      o = {
        hour: "numeric",
        hour12: !1
      };
      break;
    case "minutes":
      o = {
        minute: "numeric"
      };
      break;
    case "seconds":
      o = {
        second: "numeric"
      };
      break;
    case "fullTime":
      o = {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: !0
      };
      break;
    case "fullTime12h":
      o = {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: !0
      };
      break;
    case "fullTime24h":
      o = {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: !1
      };
      break;
    case "fullDateTime":
      o = {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: !0
      };
      break;
    case "fullDateTime12h":
      o = {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: !0
      };
      break;
    case "fullDateTime24h":
      o = {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: !1
      };
      break;
    case "keyboardDate":
      o = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit"
      };
      break;
    case "keyboardDateTime":
      o = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: !1
      };
      break;
    case "keyboardDateTime12h":
      o = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: !0
      };
      break;
    case "keyboardDateTime24h":
      o = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: !1
      };
      break;
    default:
      o = i != null ? i : {
        timeZone: "UTC",
        timeZoneName: "short"
      };
  }
  return new Intl.DateTimeFormat(t, o).format(l);
}
function ov(e, n) {
  const t = e.toJsDate(n), a = t.getFullYear(), l = Io(String(t.getMonth() + 1), 2, "0"), i = Io(String(t.getDate()), 2, "0");
  return `${a}-${l}-${i}`;
}
function rv(e) {
  const [n, t, a] = e.split("-").map(Number);
  return new Date(n, t - 1, a);
}
function sv(e, n) {
  const t = new Date(e);
  return t.setMinutes(t.getMinutes() + n), t;
}
function uv(e, n) {
  const t = new Date(e);
  return t.setHours(t.getHours() + n), t;
}
function cv(e, n) {
  const t = new Date(e);
  return t.setDate(t.getDate() + n), t;
}
function dv(e, n) {
  const t = new Date(e);
  return t.setDate(t.getDate() + n * 7), t;
}
function vv(e, n) {
  const t = new Date(e);
  return t.setDate(1), t.setMonth(t.getMonth() + n), t;
}
function fv(e) {
  return e.getFullYear();
}
function mv(e) {
  return e.getMonth();
}
function gv(e) {
  return e.getDate();
}
function hv(e) {
  return new Date(e.getFullYear(), e.getMonth() + 1, 1);
}
function yv(e) {
  return new Date(e.getFullYear(), e.getMonth() - 1, 1);
}
function bv(e) {
  return e.getHours();
}
function Sv(e) {
  return e.getMinutes();
}
function kv(e) {
  return new Date(e.getFullYear(), 0, 1);
}
function Cv(e) {
  return new Date(e.getFullYear(), 11, 31);
}
function xv(e, n) {
  return Oa(e, n[0]) && Pv(e, n[1]);
}
function wv(e) {
  const n = new Date(e);
  return n instanceof Date && !isNaN(n.getTime());
}
function Oa(e, n) {
  return e.getTime() > n.getTime();
}
function Vv(e, n) {
  return Oa(Rl(e), Rl(n));
}
function Pv(e, n) {
  return e.getTime() < n.getTime();
}
function Go(e, n) {
  return e.getTime() === n.getTime();
}
function Iv(e, n) {
  return e.getDate() === n.getDate() && e.getMonth() === n.getMonth() && e.getFullYear() === n.getFullYear();
}
function _v(e, n) {
  return e.getMonth() === n.getMonth() && e.getFullYear() === n.getFullYear();
}
function Av(e, n) {
  return e.getFullYear() === n.getFullYear();
}
function Lv(e, n, t) {
  const a = new Date(e), l = new Date(n);
  switch (t) {
    case "years":
      return a.getFullYear() - l.getFullYear();
    case "quarters":
      return Math.floor((a.getMonth() - l.getMonth() + (a.getFullYear() - l.getFullYear()) * 12) / 4);
    case "months":
      return a.getMonth() - l.getMonth() + (a.getFullYear() - l.getFullYear()) * 12;
    case "weeks":
      return Math.floor((a.getTime() - l.getTime()) / (1e3 * 60 * 60 * 24 * 7));
    case "days":
      return Math.floor((a.getTime() - l.getTime()) / (1e3 * 60 * 60 * 24));
    case "hours":
      return Math.floor((a.getTime() - l.getTime()) / (1e3 * 60 * 60));
    case "minutes":
      return Math.floor((a.getTime() - l.getTime()) / (1e3 * 60));
    case "seconds":
      return Math.floor((a.getTime() - l.getTime()) / 1e3);
    default:
      return a.getTime() - l.getTime();
  }
}
function Tv(e, n) {
  const t = new Date(e);
  return t.setHours(n), t;
}
function Bv(e, n) {
  const t = new Date(e);
  return t.setMinutes(n), t;
}
function Dv(e, n) {
  const t = new Date(e);
  return t.setMonth(n), t;
}
function Mv(e, n) {
  const t = new Date(e);
  return t.setDate(n), t;
}
function pv(e, n) {
  const t = new Date(e);
  return t.setFullYear(n), t;
}
function Rl(e) {
  return new Date(e.getFullYear(), e.getMonth(), e.getDate(), 0, 0, 0, 0);
}
function Ev(e) {
  return new Date(e.getFullYear(), e.getMonth(), e.getDate(), 23, 59, 59, 999);
}
class Fv {
  constructor(n) {
    this.locale = n.locale, this.formats = n.formats;
  }
  date(n) {
    return is(n);
  }
  toJsDate(n) {
    return n;
  }
  toISO(n) {
    return ov(this, n);
  }
  parseISO(n) {
    return rv(n);
  }
  addMinutes(n, t) {
    return sv(n, t);
  }
  addHours(n, t) {
    return uv(n, t);
  }
  addDays(n, t) {
    return cv(n, t);
  }
  addWeeks(n, t) {
    return dv(n, t);
  }
  addMonths(n, t) {
    return vv(n, t);
  }
  getWeekArray(n, t) {
    return Qd(n, this.locale, t ? Number(t) : void 0);
  }
  startOfWeek(n, t) {
    return ev(n, this.locale, t ? Number(t) : void 0);
  }
  endOfWeek(n) {
    return tv(n, this.locale);
  }
  startOfMonth(n) {
    return as(n);
  }
  endOfMonth(n) {
    return ls(n);
  }
  format(n, t) {
    return iv(n, t, this.locale, this.formats);
  }
  isEqual(n, t) {
    return Go(n, t);
  }
  isValid(n) {
    return wv(n);
  }
  isWithinRange(n, t) {
    return xv(n, t);
  }
  isAfter(n, t) {
    return Oa(n, t);
  }
  isAfterDay(n, t) {
    return Vv(n, t);
  }
  isBefore(n, t) {
    return !Oa(n, t) && !Go(n, t);
  }
  isSameDay(n, t) {
    return Iv(n, t);
  }
  isSameMonth(n, t) {
    return _v(n, t);
  }
  isSameYear(n, t) {
    return Av(n, t);
  }
  setMinutes(n, t) {
    return Bv(n, t);
  }
  setHours(n, t) {
    return Tv(n, t);
  }
  setMonth(n, t) {
    return Dv(n, t);
  }
  setDate(n, t) {
    return Mv(n, t);
  }
  setYear(n, t) {
    return pv(n, t);
  }
  getDiff(n, t, a) {
    return Lv(n, t, a);
  }
  getWeekdays(n) {
    return lv(this.locale, n ? Number(n) : void 0);
  }
  getYear(n) {
    return fv(n);
  }
  getMonth(n) {
    return mv(n);
  }
  getDate(n) {
    return gv(n);
  }
  getNextMonth(n) {
    return hv(n);
  }
  getPreviousMonth(n) {
    return yv(n);
  }
  getHours(n) {
    return bv(n);
  }
  getMinutes(n) {
    return Sv(n);
  }
  startOfDay(n) {
    return Rl(n);
  }
  endOfDay(n) {
    return Ev(n);
  }
  startOfYear(n) {
    return kv(n);
  }
  endOfYear(n) {
    return Cv(n);
  }
}
const os = Symbol.for("vuetify:date-options"), Uo = Symbol.for("vuetify:date-adapter");
function $v(e, n) {
  const t = at({
    adapter: Fv,
    locale: {
      af: "af-ZA",
      // ar: '', # not the same value for all variants
      bg: "bg-BG",
      ca: "ca-ES",
      ckb: "",
      cs: "cs-CZ",
      de: "de-DE",
      el: "el-GR",
      en: "en-US",
      // es: '', # not the same value for all variants
      et: "et-EE",
      fa: "fa-IR",
      fi: "fi-FI",
      // fr: '', #not the same value for all variants
      hr: "hr-HR",
      hu: "hu-HU",
      he: "he-IL",
      id: "id-ID",
      it: "it-IT",
      ja: "ja-JP",
      ko: "ko-KR",
      lv: "lv-LV",
      lt: "lt-LT",
      nl: "nl-NL",
      no: "no-NO",
      pl: "pl-PL",
      pt: "pt-PT",
      ro: "ro-RO",
      ru: "ru-RU",
      sk: "sk-SK",
      sl: "sl-SI",
      srCyrl: "sr-SP",
      srLatn: "sr-SP",
      sv: "sv-SE",
      th: "th-TH",
      tr: "tr-TR",
      az: "az-AZ",
      uk: "uk-UA",
      vi: "vi-VN",
      zhHans: "zh-CN",
      zhHant: "zh-TW"
    }
  }, e);
  return {
    options: t,
    instance: rs(t, n)
  };
}
function rs(e, n) {
  var a;
  const t = dt(typeof e.adapter == "function" ? new e.adapter({
    locale: (a = e.locale[n.current.value]) != null ? a : n.current.value,
    formats: e.formats
  }) : e.adapter);
  return Q(n.current, (l) => {
    var i, o;
    t.locale = (o = (i = e.locale[l]) != null ? i : l) != null ? o : t.locale;
  }), t;
}
function Hn() {
  const e = Ce(os);
  if (!e) throw new Error("[Vuetify] Could not find injected date options");
  const n = $e();
  return rs(e, n);
}
function Ov(e, n) {
  const t = e.toJsDate(n);
  let a = t.getFullYear(), l = new Date(a, 0, 1);
  if (t < l)
    a = a - 1, l = new Date(a, 0, 1);
  else {
    const r = new Date(a + 1, 0, 1);
    t >= r && (a = a + 1, l = r);
  }
  const i = Math.abs(t.getTime() - l.getTime()), o = Math.ceil(i / (1e3 * 60 * 60 * 24));
  return Math.floor(o / 7) + 1;
}
const Ka = ["sm", "md", "lg", "xl", "xxl"], Nl = Symbol.for("vuetify:display"), Ko = {
  mobileBreakpoint: "lg",
  thresholds: {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920,
    xxl: 2560
  }
}, Rv = function() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Ko;
  return at(Ko, e);
};
function qo(e) {
  return Ie && !e ? window.innerWidth : typeof e == "object" && e.clientWidth || 0;
}
function Xo(e) {
  return Ie && !e ? window.innerHeight : typeof e == "object" && e.clientHeight || 0;
}
function Zo(e) {
  const n = Ie && !e ? window.navigator.userAgent : "ssr";
  function t(y) {
    return !!n.match(y);
  }
  const a = t(/android/i), l = t(/iphone|ipad|ipod/i), i = t(/cordova/i), o = t(/electron/i), r = t(/chrome/i), u = t(/edge/i), c = t(/firefox/i), d = t(/opera/i), f = t(/win/i), m = t(/mac/i), g = t(/linux/i);
  return {
    android: a,
    ios: l,
    cordova: i,
    electron: o,
    chrome: r,
    edge: u,
    firefox: c,
    opera: d,
    win: f,
    mac: m,
    linux: g,
    touch: td,
    ssr: n === "ssr"
  };
}
function Nv(e, n) {
  const {
    thresholds: t,
    mobileBreakpoint: a
  } = Rv(e), l = Z(Xo(n)), i = Z(Zo(n)), o = dt({}), r = Z(qo(n));
  function u() {
    l.value = Xo(), r.value = qo();
  }
  function c() {
    u(), i.value = Zo();
  }
  return Re(() => {
    const d = r.value < t.sm, f = r.value < t.md && !d, m = r.value < t.lg && !(f || d), g = r.value < t.xl && !(m || f || d), y = r.value < t.xxl && !(g || m || f || d), b = r.value >= t.xxl, h = d ? "xs" : f ? "sm" : m ? "md" : g ? "lg" : y ? "xl" : "xxl", k = typeof a == "number" ? a : t[a], C = r.value < k;
    o.xs = d, o.sm = f, o.md = m, o.lg = g, o.xl = y, o.xxl = b, o.smAndUp = !d, o.mdAndUp = !(d || f), o.lgAndUp = !(d || f || m), o.xlAndUp = !(d || f || m || g), o.smAndDown = !(m || g || y || b), o.mdAndDown = !(g || y || b), o.lgAndDown = !(y || b), o.xlAndDown = !b, o.name = h, o.height = l.value, o.width = r.value, o.mobile = C, o.mobileBreakpoint = a, o.platform = i.value, o.thresholds = t;
  }), Ie && window.addEventListener("resize", u, {
    passive: !0
  }), J(v({}, gn(o)), {
    update: c,
    ssr: !!n
  });
}
const yn = M({
  mobile: {
    type: Boolean,
    default: !1
  },
  mobileBreakpoint: [Number, String]
}, "display");
function ht() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Tt();
  const t = Ce(Nl);
  if (!t) throw new Error("Could not find Vuetify display injection");
  const a = S(() => {
    if (e.mobile != null) return e.mobile;
    if (!e.mobileBreakpoint) return t.mobile.value;
    const i = typeof e.mobileBreakpoint == "number" ? e.mobileBreakpoint : t.thresholds.value[e.mobileBreakpoint];
    return t.width.value < i;
  }), l = S(() => n ? {
    [`${n}--mobile`]: a.value
  } : {});
  return J(v({}, t), {
    displayClasses: l,
    mobile: a
  });
}
const ss = Symbol.for("vuetify:goto");
function us() {
  return {
    container: void 0,
    duration: 300,
    layout: !1,
    offset: 0,
    easing: "easeInOutCubic",
    patterns: {
      linear: (e) => e,
      easeInQuad: (e) => xe(e, 2),
      easeOutQuad: (e) => e * (2 - e),
      easeInOutQuad: (e) => e < 0.5 ? 2 * xe(e, 2) : -1 + (4 - 2 * e) * e,
      easeInCubic: (e) => xe(e, 3),
      easeOutCubic: (e) => xe(--e, 3) + 1,
      easeInOutCubic: (e) => e < 0.5 ? 4 * xe(e, 3) : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1,
      easeInQuart: (e) => xe(e, 4),
      easeOutQuart: (e) => 1 - xe(--e, 4),
      easeInOutQuart: (e) => e < 0.5 ? 8 * xe(e, 4) : 1 - 8 * xe(--e, 4),
      easeInQuint: (e) => xe(e, 5),
      easeOutQuint: (e) => 1 + xe(--e, 5),
      easeInOutQuint: (e) => e < 0.5 ? 16 * xe(e, 5) : 1 + 16 * xe(--e, 5)
    }
  };
}
function Hv(e) {
  var n;
  return (n = Ai(e)) != null ? n : document.scrollingElement || document.body;
}
function Ai(e) {
  return typeof e == "string" ? document.querySelector(e) : bi(e);
}
function Il(e, n, t) {
  if (typeof e == "number") return n && t ? -e : e;
  let a = Ai(e), l = 0;
  for (; a; )
    l += n ? a.offsetLeft : a.offsetTop, a = a.offsetParent;
  return l;
}
function zv(e, n) {
  return {
    rtl: n.isRtl,
    options: at(us(), e)
  };
}
function Jo(e, n, t, a) {
  return Ke(this, null, function* () {
    var g, y, b;
    const l = t ? "scrollLeft" : "scrollTop", i = at((g = a == null ? void 0 : a.options) != null ? g : us(), n), o = a == null ? void 0 : a.rtl.value, r = (y = typeof e == "number" ? e : Ai(e)) != null ? y : 0, u = i.container === "parent" && r instanceof HTMLElement ? r.parentElement : Hv(i.container), c = typeof i.easing == "function" ? i.easing : i.patterns[i.easing];
    if (!c) throw new TypeError(`Easing function "${i.easing}" not found.`);
    let d;
    if (typeof r == "number")
      d = Il(r, t, o);
    else if (d = Il(r, t, o) - Il(u, t, o), i.layout) {
      const k = window.getComputedStyle(r).getPropertyValue("--v-layout-top");
      k && (d -= parseInt(k, 10));
    }
    d += i.offset, d = Wv(u, d, !!o, !!t);
    const f = (b = u[l]) != null ? b : 0;
    if (d === f) return Promise.resolve(d);
    const m = performance.now();
    return new Promise((h) => requestAnimationFrame(function k(C) {
      const A = (C - m) / i.duration, x = Math.floor(f + (d - f) * c(Ne(A, 0, 1)));
      if (u[l] = x, A >= 1 && Math.abs(x - u[l]) < 10)
        return h(d);
      if (A > 2)
        return wt("Scroll target is not reachable"), h(u[l]);
      requestAnimationFrame(k);
    }));
  });
}
function cs() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const n = Ce(ss), {
    isRtl: t
  } = je();
  if (!n) throw new Error("[Vuetify] Could not find injected goto instance");
  const a = J(v({}, n), {
    // can be set via VLocaleProvider
    rtl: S(() => n.rtl.value || t.value)
  });
  function l(i, o) {
    return Ke(this, null, function* () {
      return Jo(i, at(e, o), !1, a);
    });
  }
  return l.horizontal = (i, o) => Ke(this, null, function* () {
    return Jo(i, at(e, o), !0, a);
  }), l;
}
function Wv(e, n, t, a) {
  const {
    scrollWidth: l,
    scrollHeight: i
  } = e, [o, r] = e === document.scrollingElement ? [window.innerWidth, window.innerHeight] : [e.offsetWidth, e.offsetHeight];
  let u, c;
  return a ? t ? (u = -(l - o), c = 0) : (u = 0, c = l - o) : (u = 0, c = i + -r), Math.max(Math.min(n, c), u);
}
const jv = {
  collapse: "mdi-chevron-up",
  complete: "mdi-check",
  cancel: "mdi-close-circle",
  close: "mdi-close",
  delete: "mdi-close-circle",
  // delete (e.g. v-chip close)
  clear: "mdi-close-circle",
  success: "mdi-check-circle",
  info: "mdi-information",
  warning: "mdi-alert-circle",
  error: "mdi-close-circle",
  prev: "mdi-chevron-left",
  next: "mdi-chevron-right",
  checkboxOn: "mdi-checkbox-marked",
  checkboxOff: "mdi-checkbox-blank-outline",
  checkboxIndeterminate: "mdi-minus-box",
  delimiter: "mdi-circle",
  // for carousel
  sortAsc: "mdi-arrow-up",
  sortDesc: "mdi-arrow-down",
  expand: "mdi-chevron-down",
  menu: "mdi-menu",
  subgroup: "mdi-menu-down",
  dropdown: "mdi-menu-down",
  radioOn: "mdi-radiobox-marked",
  radioOff: "mdi-radiobox-blank",
  edit: "mdi-pencil",
  ratingEmpty: "mdi-star-outline",
  ratingFull: "mdi-star",
  ratingHalf: "mdi-star-half-full",
  loading: "mdi-cached",
  first: "mdi-page-first",
  last: "mdi-page-last",
  unfold: "mdi-unfold-more-horizontal",
  file: "mdi-paperclip",
  plus: "mdi-plus",
  minus: "mdi-minus",
  calendar: "mdi-calendar",
  treeviewCollapse: "mdi-menu-down",
  treeviewExpand: "mdi-menu-right",
  eyeDropper: "mdi-eyedropper"
}, Yv = {
  // Not using mergeProps here, functional components merge props by default (?)
  component: (e) => hn(Li, J(v({}, e), {
    class: "mdi"
  }))
}, ve = [String, Function, Object, Array], Hl = Symbol.for("vuetify:icons"), qa = M({
  icon: {
    type: ve
  },
  // Could not remove this and use makeTagProps, types complained because it is not required
  tag: {
    type: String,
    required: !0
  }
}, "icon"), zl = N()({
  name: "VComponentIcon",
  props: qa(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    return () => {
      const a = e.icon;
      return s(e.tag, null, {
        default: () => {
          var l;
          return [e.icon ? s(a, null, null) : (l = t.default) == null ? void 0 : l.call(t)];
        }
      });
    };
  }
}), Xa = gt({
  name: "VSvgIcon",
  inheritAttrs: !1,
  props: qa(),
  setup(e, n) {
    let {
      attrs: t
    } = n;
    return () => s(e.tag, H(t, {
      style: null
    }), {
      default: () => [s("svg", {
        class: "v-icon__svg",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        role: "img",
        "aria-hidden": "true"
      }, [Array.isArray(e.icon) ? e.icon.map((a) => Array.isArray(a) ? s("path", {
        d: a[0],
        "fill-opacity": a[1]
      }, null) : s("path", {
        d: a
      }, null)) : s("path", {
        d: e.icon
      }, null)])]
    });
  }
}), Gv = gt({
  name: "VLigatureIcon",
  props: qa(),
  setup(e) {
    return () => s(e.tag, null, {
      default: () => [e.icon]
    });
  }
}), Li = gt({
  name: "VClassIcon",
  props: qa(),
  setup(e) {
    return () => s(e.tag, {
      class: e.icon
    }, null);
  }
});
function Uv() {
  return {
    svg: {
      component: Xa
    },
    class: {
      component: Li
    }
  };
}
function Kv(e) {
  var a;
  const n = Uv(), t = (a = e == null ? void 0 : e.defaultSet) != null ? a : "mdi";
  return t === "mdi" && !n.mdi && (n.mdi = Yv), at({
    defaultSet: t,
    sets: n,
    aliases: J(v({}, jv), {
      /* eslint-disable max-len */
      vuetify: ["M8.2241 14.2009L12 21L22 3H14.4459L8.2241 14.2009Z", ["M7.26303 12.4733L7.00113 12L2 3H12.5261C12.5261 3 12.5261 3 12.5261 3L7.26303 12.4733Z", 0.6]],
      "vuetify-outline": "svg:M7.26 12.47 12.53 3H2L7.26 12.47ZM14.45 3 8.22 14.2 12 21 22 3H14.45ZM18.6 5 12 16.88 10.51 14.2 15.62 5ZM7.26 8.35 5.4 5H9.13L7.26 8.35Z",
      "vuetify-play": ["m6.376 13.184-4.11-7.192C1.505 4.66 2.467 3 4.003 3h8.532l-.953 1.576-.006.01-.396.677c-.429.732-.214 1.507.194 2.015.404.503 1.092.878 1.869.806a3.72 3.72 0 0 1 1.005.022c.276.053.434.143.523.237.138.146.38.635-.25 2.09-.893 1.63-1.553 1.722-1.847 1.677-.213-.033-.468-.158-.756-.406a4.95 4.95 0 0 1-.8-.927c-.39-.564-1.04-.84-1.66-.846-.625-.006-1.316.27-1.693.921l-.478.826-.911 1.506Z", ["M9.093 11.552c.046-.079.144-.15.32-.148a.53.53 0 0 1 .43.207c.285.414.636.847 1.046 1.2.405.35.914.662 1.516.754 1.334.205 2.502-.698 3.48-2.495l.014-.028.013-.03c.687-1.574.774-2.852-.005-3.675-.37-.391-.861-.586-1.333-.676a5.243 5.243 0 0 0-1.447-.044c-.173.016-.393-.073-.54-.257-.145-.18-.127-.316-.082-.392l.393-.672L14.287 3h5.71c1.536 0 2.499 1.659 1.737 2.992l-7.997 13.996c-.768 1.344-2.706 1.344-3.473 0l-3.037-5.314 1.377-2.278.004-.006.004-.007.481-.831Z", 0.6]]
      /* eslint-enable max-len */
    })
  }, e);
}
const qv = (e) => {
  const n = Ce(Hl);
  if (!n) throw new Error("Missing Vuetify Icons provide!");
  return {
    iconData: S(() => {
      var u;
      const a = ut(e);
      if (!a) return {
        component: zl
      };
      let l = a;
      if (typeof l == "string" && (l = l.trim(), l.startsWith("$") && (l = (u = n.aliases) == null ? void 0 : u[l.slice(1)])), l || wt(`Could not find aliased icon "${a}"`), Array.isArray(l))
        return {
          component: Xa,
          icon: l
        };
      if (typeof l != "string")
        return {
          component: zl,
          icon: l
        };
      const i = Object.keys(n.sets).find((c) => typeof l == "string" && l.startsWith(`${c}:`)), o = i ? l.slice(i.length + 1) : l;
      return {
        component: n.sets[i != null ? i : n.defaultSet].component,
        icon: o
      };
    })
  };
}, ea = Symbol.for("vuetify:theme"), Se = M({
  theme: String
}, "theme");
function Qo() {
  return {
    defaultTheme: "light",
    variations: {
      colors: [],
      lighten: 0,
      darken: 0
    },
    themes: {
      light: {
        dark: !1,
        colors: {
          background: "#FFFFFF",
          surface: "#FFFFFF",
          "surface-bright": "#FFFFFF",
          "surface-light": "#EEEEEE",
          "surface-variant": "#424242",
          "on-surface-variant": "#EEEEEE",
          primary: "#1867C0",
          "primary-darken-1": "#1F5592",
          secondary: "#48A9A6",
          "secondary-darken-1": "#018786",
          error: "#B00020",
          info: "#2196F3",
          success: "#4CAF50",
          warning: "#FB8C00"
        },
        variables: {
          "border-color": "#000000",
          "border-opacity": 0.12,
          "high-emphasis-opacity": 0.87,
          "medium-emphasis-opacity": 0.6,
          "disabled-opacity": 0.38,
          "idle-opacity": 0.04,
          "hover-opacity": 0.04,
          "focus-opacity": 0.12,
          "selected-opacity": 0.08,
          "activated-opacity": 0.12,
          "pressed-opacity": 0.12,
          "dragged-opacity": 0.08,
          "theme-kbd": "#212529",
          "theme-on-kbd": "#FFFFFF",
          "theme-code": "#F5F5F5",
          "theme-on-code": "#000000"
        }
      },
      dark: {
        dark: !0,
        colors: {
          background: "#121212",
          surface: "#212121",
          "surface-bright": "#ccbfd6",
          "surface-light": "#424242",
          "surface-variant": "#a3a3a3",
          "on-surface-variant": "#424242",
          primary: "#2196F3",
          "primary-darken-1": "#277CC1",
          secondary: "#54B6B2",
          "secondary-darken-1": "#48A9A6",
          error: "#CF6679",
          info: "#2196F3",
          success: "#4CAF50",
          warning: "#FB8C00"
        },
        variables: {
          "border-color": "#FFFFFF",
          "border-opacity": 0.12,
          "high-emphasis-opacity": 1,
          "medium-emphasis-opacity": 0.7,
          "disabled-opacity": 0.5,
          "idle-opacity": 0.1,
          "hover-opacity": 0.04,
          "focus-opacity": 0.12,
          "selected-opacity": 0.08,
          "activated-opacity": 0.12,
          "pressed-opacity": 0.16,
          "dragged-opacity": 0.08,
          "theme-kbd": "#212529",
          "theme-on-kbd": "#FFFFFF",
          "theme-code": "#343434",
          "theme-on-code": "#CCCCCC"
        }
      }
    }
  };
}
function Xv() {
  var a, l, i;
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Qo();
  const n = Qo();
  if (!e) return J(v({}, n), {
    isDisabled: !0
  });
  const t = {};
  for (const [o, r] of Object.entries((a = e.themes) != null ? a : {})) {
    const u = r.dark || o === "dark" ? (l = n.themes) == null ? void 0 : l.dark : (i = n.themes) == null ? void 0 : i.light;
    t[o] = at(u, r);
  }
  return at(n, J(v({}, e), {
    themes: t
  }));
}
function Zv(e) {
  const n = Xv(e), t = G(n.defaultTheme), a = G(n.themes), l = S(() => {
    const d = {};
    for (const [f, m] of Object.entries(a.value)) {
      const g = d[f] = J(v({}, m), {
        colors: v({}, m.colors)
      });
      if (n.variations)
        for (const y of n.variations.colors) {
          const b = g.colors[y];
          if (b)
            for (const h of ["lighten", "darken"]) {
              const k = h === "lighten" ? Md : pd;
              for (const C of _t(n.variations[h], 1))
                g.colors[`${y}-${h}-${C}`] = Gr(k(St(b), C));
            }
        }
      for (const y of Object.keys(g.colors)) {
        if (/^on-[a-z]/.test(y) || g.colors[`on-${y}`]) continue;
        const b = `on-${y}`, h = St(g.colors[y]);
        g.colors[b] = Xr(h);
      }
    }
    return d;
  }), i = S(() => l.value[t.value]), o = S(() => {
    var y;
    const d = [];
    (y = i.value) != null && y.dark && Qt(d, ":root", ["color-scheme: dark"]), Qt(d, ":root", er(i.value));
    for (const [b, h] of Object.entries(l.value))
      Qt(d, `.v-theme--${b}`, [`color-scheme: ${h.dark ? "dark" : "normal"}`, ...er(h)]);
    const f = [], m = [], g = new Set(Object.values(l.value).flatMap((b) => Object.keys(b.colors)));
    for (const b of g)
      /^on-[a-z]/.test(b) ? Qt(m, `.${b}`, [`color: rgb(var(--v-theme-${b})) !important`]) : (Qt(f, `.bg-${b}`, [`--v-theme-overlay-multiplier: var(--v-theme-${b}-overlay-multiplier)`, `background-color: rgb(var(--v-theme-${b})) !important`, `color: rgb(var(--v-theme-on-${b})) !important`]), Qt(m, `.text-${b}`, [`color: rgb(var(--v-theme-${b})) !important`]), Qt(m, `.border-${b}`, [`--v-border-color: var(--v-theme-${b})`]));
    return d.push(...f, ...m), d.map((b, h) => h === 0 ? b : `    ${b}`).join("");
  });
  function r() {
    return {
      style: [{
        children: o.value,
        id: "vuetify-theme-stylesheet",
        nonce: n.cspNonce || !1
      }]
    };
  }
  function u(d) {
    if (n.isDisabled) return;
    const f = d._context.provides.usehead;
    if (f)
      if (f.push) {
        const m = f.push(r);
        Ie && Q(o, () => {
          m.patch(r);
        });
      } else
        Ie ? (f.addHeadObjs(S(r)), Re(() => f.updateDOM())) : f.addHeadObjs(r());
    else {
      let g = function() {
        if (typeof document != "undefined" && !m) {
          const y = document.createElement("style");
          y.type = "text/css", y.id = "vuetify-theme-stylesheet", n.cspNonce && y.setAttribute("nonce", n.cspNonce), m = y, document.head.appendChild(m);
        }
        m && (m.innerHTML = o.value);
      }, m = Ie ? document.getElementById("vuetify-theme-stylesheet") : null;
      Ie ? Q(o, g, {
        immediate: !0
      }) : g();
    }
  }
  const c = S(() => n.isDisabled ? void 0 : `v-theme--${t.value}`);
  return {
    install: u,
    isDisabled: n.isDisabled,
    name: t,
    themes: a,
    current: i,
    computedThemes: l,
    themeClasses: c,
    styles: o,
    global: {
      name: t,
      current: i
    }
  };
}
function Pe(e) {
  Fe("provideTheme");
  const n = Ce(ea, null);
  if (!n) throw new Error("Could not find Vuetify theme injection");
  const t = S(() => {
    var o;
    return (o = e.theme) != null ? o : n.name.value;
  }), a = S(() => n.themes.value[t.value]), l = S(() => n.isDisabled ? void 0 : `v-theme--${t.value}`), i = J(v({}, n), {
    name: t,
    current: a,
    themeClasses: l
  });
  return Be(ea, i), i;
}
function Ti() {
  Fe("useTheme");
  const e = Ce(ea, null);
  if (!e) throw new Error("Could not find Vuetify theme injection");
  return e;
}
function Qt(e, n, t) {
  e.push(`${n} {
`, ...t.map((a) => `  ${a};
`), `}
`);
}
function er(e) {
  const n = e.dark ? 2 : 1, t = e.dark ? 1 : 2, a = [];
  for (const [l, i] of Object.entries(e.colors)) {
    const o = St(i);
    a.push(`--v-theme-${l}: ${o.r},${o.g},${o.b}`), l.startsWith("on-") || a.push(`--v-theme-${l}-overlay-multiplier: ${Ol(i) > 0.18 ? n : t}`);
  }
  for (const [l, i] of Object.entries(e.variables)) {
    const o = typeof i == "string" && i.startsWith("#") ? St(i) : void 0, r = o ? `${o.r}, ${o.g}, ${o.b}` : void 0;
    a.push(`--v-${l}: ${r != null ? r : i}`);
  }
  return a;
}
function Vt(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "content";
  const t = pa(), a = G();
  if (Ie) {
    const l = new ResizeObserver((i) => {
      e == null || e(i, l), i.length && (n === "content" ? a.value = i[0].contentRect : a.value = i[0].target.getBoundingClientRect());
    });
    ot(() => {
      l.disconnect();
    }), Q(() => t.el, (i, o) => {
      o && (l.unobserve(o), a.value = void 0), i && l.observe(i);
    }, {
      flush: "post"
    });
  }
  return {
    resizeRef: t,
    contentRect: gi(a)
  };
}
const ta = Symbol.for("vuetify:layout"), ds = Symbol.for("vuetify:layout-item"), tr = 1e3, vs = M({
  overlaps: {
    type: Array,
    default: () => []
  },
  fullHeight: Boolean
}, "layout"), bn = M({
  name: {
    type: String
  },
  order: {
    type: [Number, String],
    default: 0
  },
  absolute: Boolean
}, "layout-item");
function Bi() {
  const e = Ce(ta);
  if (!e) throw new Error("[Vuetify] Could not find injected layout");
  return {
    getLayoutItem: e.getLayoutItem,
    mainRect: e.mainRect,
    mainStyles: e.mainStyles
  };
}
function Sn(e) {
  var r;
  const n = Ce(ta);
  if (!n) throw new Error("[Vuetify] Could not find injected layout");
  const t = (r = e.id) != null ? r : `layout-item-${Qe()}`, a = Fe("useLayoutItem");
  Be(ds, {
    id: t
  });
  const l = Z(!1);
  _r(() => l.value = !0), jc(() => l.value = !1);
  const {
    layoutItemStyles: i,
    layoutItemScrimStyles: o
  } = n.register(a, J(v({}, e), {
    active: S(() => l.value ? !1 : e.active.value),
    id: t
  }));
  return ot(() => n.unregister(t)), {
    layoutItemStyles: i,
    layoutRect: n.layoutRect,
    layoutItemScrimStyles: o
  };
}
const Jv = (e, n, t, a) => {
  let l = {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  };
  const i = [{
    id: "",
    layer: v({}, l)
  }];
  for (const o of e) {
    const r = n.get(o), u = t.get(o), c = a.get(o);
    if (!r || !u || !c) continue;
    const d = J(v({}, l), {
      [r.value]: parseInt(l[r.value], 10) + (c.value ? parseInt(u.value, 10) : 0)
    });
    i.push({
      id: o,
      layer: d
    }), l = d;
  }
  return i;
};
function fs(e) {
  const n = Ce(ta, null), t = S(() => n ? n.rootZIndex.value - 100 : tr), a = G([]), l = dt(/* @__PURE__ */ new Map()), i = dt(/* @__PURE__ */ new Map()), o = dt(/* @__PURE__ */ new Map()), r = dt(/* @__PURE__ */ new Map()), u = dt(/* @__PURE__ */ new Map()), {
    resizeRef: c,
    contentRect: d
  } = Vt(), f = S(() => {
    var w;
    const P = /* @__PURE__ */ new Map(), T = (w = e.overlaps) != null ? w : [];
    for (const _ of T.filter((B) => B.includes(":"))) {
      const [B, V] = _.split(":");
      if (!a.value.includes(B) || !a.value.includes(V)) continue;
      const L = l.get(B), D = l.get(V), p = i.get(B), R = i.get(V);
      !L || !D || !p || !R || (P.set(V, {
        position: L.value,
        amount: parseInt(p.value, 10)
      }), P.set(B, {
        position: D.value,
        amount: -parseInt(R.value, 10)
      }));
    }
    return P;
  }), m = S(() => {
    const P = [...new Set([...o.values()].map((w) => w.value))].sort((w, _) => w - _), T = [];
    for (const w of P) {
      const _ = a.value.filter((B) => {
        var V;
        return ((V = o.get(B)) == null ? void 0 : V.value) === w;
      });
      T.push(..._);
    }
    return Jv(T, l, i, r);
  }), g = S(() => !Array.from(u.values()).some((P) => P.value)), y = S(() => m.value[m.value.length - 1].layer), b = S(() => v({
    "--v-layout-left": ee(y.value.left),
    "--v-layout-right": ee(y.value.right),
    "--v-layout-top": ee(y.value.top),
    "--v-layout-bottom": ee(y.value.bottom)
  }, g.value ? void 0 : {
    transition: "none"
  })), h = S(() => m.value.slice(1).map((P, T) => {
    let {
      id: w
    } = P;
    const {
      layer: _
    } = m.value[T], B = i.get(w), V = l.get(w);
    return J(v({
      id: w
    }, _), {
      size: Number(B.value),
      position: V.value
    });
  })), k = (P) => h.value.find((T) => T.id === P), C = Fe("createLayout"), I = Z(!1);
  rt(() => {
    I.value = !0;
  }), Be(ta, {
    register: (P, T) => {
      let {
        id: w,
        order: _,
        position: B,
        layoutSize: V,
        elementSize: L,
        active: D,
        disableTransitions: p,
        absolute: R
      } = T;
      o.set(w, _), l.set(w, B), i.set(w, V), r.set(w, D), p && u.set(w, p);
      const q = Dn(ds, C == null ? void 0 : C.vnode).indexOf(P);
      q > -1 ? a.value.splice(q, 0, w) : a.value.push(w);
      const K = S(() => h.value.findIndex((Y) => Y.id === w)), E = S(() => t.value + m.value.length * 2 - K.value * 2), F = S(() => {
        var ce;
        const Y = B.value === "left" || B.value === "right", ie = B.value === "right", ne = B.value === "bottom", ue = (ce = L.value) != null ? ce : V.value, W = ue === 0 ? "%" : "px", ae = v({
          [B.value]: 0,
          zIndex: E.value,
          transform: `translate${Y ? "X" : "Y"}(${(D.value ? 0 : -(ue === 0 ? 100 : ue)) * (ie || ne ? -1 : 1)}${W})`,
          position: R.value || t.value !== tr ? "absolute" : "fixed"
        }, g.value ? void 0 : {
          transition: "none"
        });
        if (!I.value) return ae;
        const se = h.value[K.value];
        if (!se) throw new Error(`[Vuetify] Could not find layout item "${w}"`);
        const ye = f.value.get(w);
        return ye && (se[ye.position] += ye.amount), J(v({}, ae), {
          height: Y ? `calc(100% - ${se.top}px - ${se.bottom}px)` : L.value ? `${L.value}px` : void 0,
          left: ie ? void 0 : `${se.left}px`,
          right: ie ? `${se.right}px` : void 0,
          top: B.value !== "bottom" ? `${se.top}px` : void 0,
          bottom: B.value !== "top" ? `${se.bottom}px` : void 0,
          width: Y ? L.value ? `${L.value}px` : void 0 : `calc(100% - ${se.left}px - ${se.right}px)`
        });
      }), O = S(() => ({
        zIndex: E.value - 1
      }));
      return {
        layoutItemStyles: F,
        layoutItemScrimStyles: O,
        zIndex: E
      };
    },
    unregister: (P) => {
      o.delete(P), l.delete(P), i.delete(P), r.delete(P), u.delete(P), a.value = a.value.filter((T) => T !== P);
    },
    mainRect: y,
    mainStyles: b,
    getLayoutItem: k,
    items: h,
    layoutRect: d,
    rootZIndex: t
  });
  const A = S(() => ["v-layout", {
    "v-layout--full-height": e.fullHeight
  }]), x = S(() => ({
    zIndex: n ? t.value : void 0,
    position: n ? "relative" : void 0,
    overflow: n ? "hidden" : void 0
  }));
  return {
    layoutClasses: A,
    layoutStyles: x,
    getLayoutItem: k,
    items: h,
    layoutRect: d,
    layoutRef: c
  };
}
function ms() {
  const b = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, {
    blueprint: n
  } = b, t = He(b, [
    "blueprint"
  ]), a = at(n, t), {
    aliases: l = {},
    components: i = {},
    directives: o = {}
  } = a, r = $d(a.defaults), u = Nv(a.display, a.ssr), c = Zv(a.theme), d = Kv(a.icons), f = Kd(a.locale), m = $v(a.date, f), g = zv(a.goTo, f);
  return {
    install: (h) => {
      for (const k in o)
        h.directive(k, o[k]);
      for (const k in i)
        h.component(k, i[k]);
      for (const k in l)
        h.component(k, gt(J(v({}, l[k]), {
          name: k,
          aliasName: l[k].name
        })));
      if (c.install(h), h.provide(Fn, r), h.provide(Nl, u), h.provide(ea, c), h.provide(Hl, d), h.provide($n, f), h.provide(os, m.options), h.provide(Uo, m.instance), h.provide(ss, g), Ie && a.ssr)
        if (h.$nuxt)
          h.$nuxt.hook("app:suspense:resolve", () => {
            u.update();
          });
        else {
          const {
            mount: k
          } = h;
          h.mount = function() {
            const C = k(...arguments);
            return _e(() => u.update()), h.mount = k, C;
          };
        }
      Qe.reset(), h.mixin({
        computed: {
          $vuetify() {
            return dt({
              defaults: Tn.call(this, Fn),
              display: Tn.call(this, Nl),
              theme: Tn.call(this, ea),
              icons: Tn.call(this, Hl),
              locale: Tn.call(this, $n),
              date: Tn.call(this, Uo)
            });
          }
        }
      });
    },
    defaults: r,
    display: u,
    theme: c,
    icons: d,
    locale: f,
    date: m,
    goTo: g
  };
}
const gs = "3.7.2";
ms.version = gs;
function Tn(e) {
  var a, l, i;
  const n = this.$, t = (i = (a = n.parent) == null ? void 0 : a.provides) != null ? i : (l = n.vnode.appContext) == null ? void 0 : l.provides;
  if (t && e in t)
    return t[e];
}
const A1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  createVuetify: ms,
  useDate: Hn,
  useDefaults: Rd,
  useDisplay: ht,
  useGoTo: cs,
  useLayout: Bi,
  useLocale: $e,
  useRtl: je,
  useTheme: Ti,
  version: gs
}, Symbol.toStringTag, { value: "Module" })), Qv = M(v(v(v({}, te()), vs({
  fullHeight: !0
})), Se()), "VApp"), ef = N()({
  name: "VApp",
  props: Qv(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = Pe(e), {
      layoutClasses: l,
      getLayoutItem: i,
      items: o,
      layoutRef: r
    } = fs(e), {
      rtlClasses: u
    } = je();
    return z(() => {
      var c;
      return s("div", {
        ref: r,
        class: ["v-application", a.themeClasses.value, l.value, u.value, e.class],
        style: [e.style]
      }, [s("div", {
        class: "v-application__wrap"
      }, [(c = t.default) == null ? void 0 : c.call(t)])]);
    }), {
      getLayoutItem: i,
      items: o,
      theme: a
    };
  }
}), me = M({
  tag: {
    type: String,
    default: "div"
  }
}, "tag"), hs = M(v(v({
  text: String
}, te()), me()), "VToolbarTitle"), Di = N()({
  name: "VToolbarTitle",
  props: hs(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    return z(() => {
      const a = !!(t.default || t.text || e.text);
      return s(e.tag, {
        class: ["v-toolbar-title", e.class],
        style: e.style
      }, {
        default: () => {
          var l;
          return [a && s("div", {
            class: "v-toolbar-title__placeholder"
          }, [t.text ? t.text() : e.text, (l = t.default) == null ? void 0 : l.call(t)])];
        }
      });
    }), {};
  }
}), tf = M({
  disabled: Boolean,
  group: Boolean,
  hideOnLeave: Boolean,
  leaveAbsolute: Boolean,
  mode: String,
  origin: String
}, "transition");
function yt(e, n, t) {
  return N()({
    name: e,
    props: tf({
      mode: t,
      origin: n
    }),
    setup(a, l) {
      let {
        slots: i
      } = l;
      const o = {
        onBeforeEnter(r) {
          a.origin && (r.style.transformOrigin = a.origin);
        },
        onLeave(r) {
          if (a.leaveAbsolute) {
            const {
              offsetTop: u,
              offsetLeft: c,
              offsetWidth: d,
              offsetHeight: f
            } = r;
            r._transitionInitialStyles = {
              position: r.style.position,
              top: r.style.top,
              left: r.style.left,
              width: r.style.width,
              height: r.style.height
            }, r.style.position = "absolute", r.style.top = `${u}px`, r.style.left = `${c}px`, r.style.width = `${d}px`, r.style.height = `${f}px`;
          }
          a.hideOnLeave && r.style.setProperty("display", "none", "important");
        },
        onAfterLeave(r) {
          if (a.leaveAbsolute && (r != null && r._transitionInitialStyles)) {
            const {
              position: u,
              top: c,
              left: d,
              width: f,
              height: m
            } = r._transitionInitialStyles;
            delete r._transitionInitialStyles, r.style.position = u || "", r.style.top = c || "", r.style.left = d || "", r.style.width = f || "", r.style.height = m || "";
          }
        }
      };
      return () => {
        const r = a.group ? hi : Wt;
        return hn(r, v(v({
          name: a.disabled ? "" : e,
          css: !a.disabled
        }, a.group ? void 0 : {
          mode: a.mode
        }), a.disabled ? {} : o), i.default);
      };
    }
  });
}
function ys(e, n) {
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "in-out";
  return N()({
    name: e,
    props: {
      mode: {
        type: String,
        default: t
      },
      disabled: Boolean,
      group: Boolean
    },
    setup(a, l) {
      let {
        slots: i
      } = l;
      const o = a.group ? hi : Wt;
      return () => hn(o, v({
        name: a.disabled ? "" : e,
        css: !a.disabled
      }, a.disabled ? {} : n), i.default);
    }
  });
}
function bs() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  const t = (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1) ? "width" : "height", a = Ir(`offset-${t}`);
  return {
    onBeforeEnter(o) {
      o._parent = o.parentNode, o._initialStyle = {
        transition: o.style.transition,
        overflow: o.style.overflow,
        [t]: o.style[t]
      };
    },
    onEnter(o) {
      const r = o._initialStyle;
      o.style.setProperty("transition", "none", "important"), o.style.overflow = "hidden";
      const u = `${o[a]}px`;
      o.style[t] = "0", o.offsetHeight, o.style.transition = r.transition, e && o._parent && o._parent.classList.add(e), requestAnimationFrame(() => {
        o.style[t] = u;
      });
    },
    onAfterEnter: i,
    onEnterCancelled: i,
    onLeave(o) {
      o._initialStyle = {
        transition: "",
        overflow: o.style.overflow,
        [t]: o.style[t]
      }, o.style.overflow = "hidden", o.style[t] = `${o[a]}px`, o.offsetHeight, requestAnimationFrame(() => o.style[t] = "0");
    },
    onAfterLeave: l,
    onLeaveCancelled: l
  };
  function l(o) {
    e && o._parent && o._parent.classList.remove(e), i(o);
  }
  function i(o) {
    const r = o._initialStyle[t];
    o.style.overflow = o._initialStyle.overflow, r != null && (o.style[t] = r), delete o._initialStyle;
  }
}
const nf = M({
  target: [Object, Array]
}, "v-dialog-transition"), Za = N()({
  name: "VDialogTransition",
  props: nf(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = {
      onBeforeEnter(i) {
        i.style.pointerEvents = "none", i.style.visibility = "hidden";
      },
      onEnter(i, o) {
        return Ke(this, null, function* () {
          var g;
          yield new Promise((y) => requestAnimationFrame(y)), yield new Promise((y) => requestAnimationFrame(y)), i.style.visibility = "";
          const {
            x: r,
            y: u,
            sx: c,
            sy: d,
            speed: f
          } = ar(e.target, i), m = tn(i, [{
            transform: `translate(${r}px, ${u}px) scale(${c}, ${d})`,
            opacity: 0
          }, {}], {
            duration: 225 * f,
            easing: Hd
          });
          (g = nr(i)) == null || g.forEach((y) => {
            tn(y, [{
              opacity: 0
            }, {
              opacity: 0,
              offset: 0.33
            }, {}], {
              duration: 225 * 2 * f,
              easing: Qn
            });
          }), m.finished.then(() => o());
        });
      },
      onAfterEnter(i) {
        i.style.removeProperty("pointer-events");
      },
      onBeforeLeave(i) {
        i.style.pointerEvents = "none";
      },
      onLeave(i, o) {
        return Ke(this, null, function* () {
          var g;
          yield new Promise((y) => requestAnimationFrame(y));
          const {
            x: r,
            y: u,
            sx: c,
            sy: d,
            speed: f
          } = ar(e.target, i);
          tn(i, [{}, {
            transform: `translate(${r}px, ${u}px) scale(${c}, ${d})`,
            opacity: 0
          }], {
            duration: 125 * f,
            easing: zd
          }).finished.then(() => o()), (g = nr(i)) == null || g.forEach((y) => {
            tn(y, [{}, {
              opacity: 0,
              offset: 0.2
            }, {
              opacity: 0
            }], {
              duration: 125 * 2 * f,
              easing: Qn
            });
          });
        });
      },
      onAfterLeave(i) {
        i.style.removeProperty("pointer-events");
      }
    };
    return () => e.target ? s(Wt, H({
      name: "dialog-transition"
    }, a, {
      css: !1
    }), t) : s(Wt, {
      name: "dialog-transition"
    }, t);
  }
});
function nr(e) {
  var t;
  const n = (t = e.querySelector(":scope > .v-card, :scope > .v-sheet, :scope > .v-list")) == null ? void 0 : t.children;
  return n && [...n];
}
function ar(e, n) {
  const t = Rr(e), a = xi(n), [l, i] = getComputedStyle(n).transformOrigin.split(" ").map((k) => parseFloat(k)), [o, r] = getComputedStyle(n).getPropertyValue("--v-overlay-anchor-origin").split(" ");
  let u = t.left + t.width / 2;
  o === "left" || r === "left" ? u -= t.width / 2 : (o === "right" || r === "right") && (u += t.width / 2);
  let c = t.top + t.height / 2;
  o === "top" || r === "top" ? c -= t.height / 2 : (o === "bottom" || r === "bottom") && (c += t.height / 2);
  const d = t.width / a.width, f = t.height / a.height, m = Math.max(1, d, f), g = d / m || 0, y = f / m || 0, b = a.width * a.height / (window.innerWidth * window.innerHeight), h = b > 0.12 ? Math.min(1.5, (b - 0.12) * 10 + 1) : 1;
  return {
    x: u - (l + a.left),
    y: c - (i + a.top),
    sx: g,
    sy: y,
    speed: h
  };
}
const af = yt("fab-transition", "center center", "out-in"), lf = yt("dialog-bottom-transition"), of = yt("dialog-top-transition"), na = yt("fade-transition"), Mi = yt("scale-transition"), rf = yt("scroll-x-transition"), sf = yt("scroll-x-reverse-transition"), uf = yt("scroll-y-transition"), cf = yt("scroll-y-reverse-transition"), df = yt("slide-x-transition"), vf = yt("slide-x-reverse-transition"), pi = yt("slide-y-transition"), ff = yt("slide-y-reverse-transition"), Ja = ys("expand-transition", bs()), Ei = ys("expand-x-transition", bs("", !0)), mf = M({
  defaults: Object,
  disabled: Boolean,
  reset: [Number, String],
  root: [Boolean, String],
  scoped: Boolean
}, "VDefaultsProvider"), he = N(!1)({
  name: "VDefaultsProvider",
  props: mf(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      defaults: a,
      disabled: l,
      reset: i,
      root: o,
      scoped: r
    } = gn(e);
    return Ee(a, {
      reset: i,
      root: o,
      scoped: r,
      disabled: l
    }), () => {
      var u;
      return (u = t.default) == null ? void 0 : u.call(t);
    };
  }
}), Ye = M({
  height: [Number, String],
  maxHeight: [Number, String],
  maxWidth: [Number, String],
  minHeight: [Number, String],
  minWidth: [Number, String],
  width: [Number, String]
}, "dimension");
function Ge(e) {
  return {
    dimensionStyles: S(() => {
      const t = {}, a = ee(e.height), l = ee(e.maxHeight), i = ee(e.maxWidth), o = ee(e.minHeight), r = ee(e.minWidth), u = ee(e.width);
      return a != null && (t.height = a), l != null && (t.maxHeight = l), i != null && (t.maxWidth = i), o != null && (t.minHeight = o), r != null && (t.minWidth = r), u != null && (t.width = u), t;
    })
  };
}
function gf(e) {
  return {
    aspectStyles: S(() => {
      const n = Number(e.aspectRatio);
      return n ? {
        paddingBottom: String(1 / n * 100) + "%"
      } : void 0;
    })
  };
}
const Ss = M(v(v({
  aspectRatio: [String, Number],
  contentClass: null,
  inline: Boolean
}, te()), Ye()), "VResponsive"), Wl = N()({
  name: "VResponsive",
  props: Ss(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      aspectStyles: a
    } = gf(e), {
      dimensionStyles: l
    } = Ge(e);
    return z(() => {
      var i;
      return s("div", {
        class: ["v-responsive", {
          "v-responsive--inline": e.inline
        }, e.class],
        style: [l.value, e.style]
      }, [s("div", {
        class: "v-responsive__sizer",
        style: a.value
      }, null), (i = t.additional) == null ? void 0 : i.call(t), t.default && s("div", {
        class: ["v-responsive__content", e.contentClass]
      }, [t.default()])]);
    }), {};
  }
});
function Fi(e) {
  return ki(() => {
    const n = [], t = {};
    if (e.value.background)
      if ($l(e.value.background)) {
        if (t.backgroundColor = e.value.background, !e.value.text && Td(e.value.background)) {
          const a = St(e.value.background);
          if (a.a == null || a.a === 1) {
            const l = Xr(a);
            t.color = l, t.caretColor = l;
          }
        }
      } else
        n.push(`bg-${e.value.background}`);
    return e.value.text && ($l(e.value.text) ? (t.color = e.value.text, t.caretColor = e.value.text) : n.push(`text-${e.value.text}`)), {
      colorClasses: n,
      colorStyles: t
    };
  });
}
function tt(e, n) {
  const t = S(() => ({
    text: pn(e) ? e.value : n ? e[n] : null
  })), {
    colorClasses: a,
    colorStyles: l
  } = Fi(t);
  return {
    textColorClasses: a,
    textColorStyles: l
  };
}
function Le(e, n) {
  const t = S(() => ({
    background: pn(e) ? e.value : n ? e[n] : null
  })), {
    colorClasses: a,
    colorStyles: l
  } = Fi(t);
  return {
    backgroundColorClasses: a,
    backgroundColorStyles: l
  };
}
const De = M({
  rounded: {
    type: [Boolean, Number, String],
    default: void 0
  },
  tile: Boolean
}, "rounded");
function Oe(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Tt();
  return {
    roundedClasses: S(() => {
      const a = pn(e) ? e.value : e.rounded, l = pn(e) ? e.value : e.tile, i = [];
      if (a === !0 || a === "")
        i.push(`${n}--rounded`);
      else if (typeof a == "string" || a === 0)
        for (const o of String(a).split(" "))
          i.push(`rounded-${o}`);
      else (l || a === !1) && i.push("rounded-0");
      return i;
    })
  };
}
const It = M({
  transition: {
    type: [Boolean, String, Object],
    default: "fade-transition",
    validator: (e) => e !== !0
  }
}, "transition"), lt = (e, n) => {
  let {
    slots: t
  } = n;
  const c = e, {
    transition: a,
    disabled: l,
    group: i
  } = c, o = He(c, [
    "transition",
    "disabled",
    "group"
  ]), d = typeof a == "object" ? a : {}, {
    component: r = i ? hi : Wt
  } = d, u = He(d, [
    "component"
  ]);
  return hn(r, H(typeof a == "string" ? {
    name: l ? "" : a
  } : u, typeof a == "string" ? {} : Object.fromEntries(Object.entries({
    disabled: l,
    group: i
  }).filter((f) => {
    let [m, g] = f;
    return g !== void 0;
  })), o), t);
};
function hf(e, n) {
  if (!yi) return;
  const t = n.modifiers || {}, a = n.value, {
    handler: l,
    options: i
  } = typeof a == "object" ? a : {
    handler: a,
    options: {}
  }, o = new IntersectionObserver(function() {
    var f;
    let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], u = arguments.length > 1 ? arguments[1] : void 0;
    const c = (f = e._observe) == null ? void 0 : f[n.instance.$.uid];
    if (!c) return;
    const d = r.some((m) => m.isIntersecting);
    l && (!t.quiet || c.init) && (!t.once || d || c.init) && l(d, r, u), d && t.once ? ks(e, n) : c.init = !0;
  }, i);
  e._observe = Object(e._observe), e._observe[n.instance.$.uid] = {
    init: !1,
    observer: o
  }, o.observe(e);
}
function ks(e, n) {
  var a;
  const t = (a = e._observe) == null ? void 0 : a[n.instance.$.uid];
  t && (t.observer.unobserve(e), delete e._observe[n.instance.$.uid]);
}
const Qa = {
  mounted: hf,
  unmounted: ks
}, Cs = M(v(v(v(v({
  absolute: Boolean,
  alt: String,
  cover: Boolean,
  color: String,
  draggable: {
    type: [Boolean, String],
    default: void 0
  },
  eager: Boolean,
  gradient: String,
  lazySrc: String,
  options: {
    type: Object,
    // For more information on types, navigate to:
    // https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
    default: () => ({
      root: void 0,
      rootMargin: void 0,
      threshold: void 0
    })
  },
  sizes: String,
  src: {
    type: [String, Object],
    default: ""
  },
  crossorigin: String,
  referrerpolicy: String,
  srcset: String,
  position: String
}, Ss()), te()), De()), It()), "VImg"), Ft = N()({
  name: "VImg",
  directives: {
    intersect: Qa
  },
  props: Cs(),
  emits: {
    loadstart: (e) => !0,
    load: (e) => !0,
    error: (e) => !0
  },
  setup(e, n) {
    let {
      emit: t,
      slots: a
    } = n;
    const {
      backgroundColorClasses: l,
      backgroundColorStyles: i
    } = Le($(e, "color")), {
      roundedClasses: o
    } = Oe(e), r = Fe("VImg"), u = Z(""), c = G(), d = Z(e.eager ? "loading" : "idle"), f = Z(), m = Z(), g = S(() => e.src && typeof e.src == "object" ? {
      src: e.src.src,
      srcset: e.srcset || e.src.srcset,
      lazySrc: e.lazySrc || e.src.lazySrc,
      aspect: Number(e.aspectRatio || e.src.aspect || 0)
    } : {
      src: e.src,
      srcset: e.srcset,
      lazySrc: e.lazySrc,
      aspect: Number(e.aspectRatio || 0)
    }), y = S(() => g.value.aspect || f.value / m.value || 0);
    Q(() => e.src, () => {
      b(d.value !== "idle");
    }), Q(y, (L, D) => {
      !L && D && c.value && A(c.value);
    }), Ar(() => b());
    function b(L) {
      if (!(e.eager && L) && !(yi && !L && !e.eager)) {
        if (d.value = "loading", g.value.lazySrc) {
          const D = new Image();
          D.src = g.value.lazySrc, A(D, null);
        }
        g.value.src && _e(() => {
          var D;
          t("loadstart", ((D = c.value) == null ? void 0 : D.currentSrc) || g.value.src), setTimeout(() => {
            var p;
            if (!r.isUnmounted)
              if ((p = c.value) != null && p.complete) {
                if (c.value.naturalWidth || k(), d.value === "error") return;
                y.value || A(c.value, null), d.value === "loading" && h();
              } else
                y.value || A(c.value), C();
          });
        });
      }
    }
    function h() {
      var L;
      r.isUnmounted || (C(), A(c.value), d.value = "loaded", t("load", ((L = c.value) == null ? void 0 : L.currentSrc) || g.value.src));
    }
    function k() {
      var L;
      r.isUnmounted || (d.value = "error", t("error", ((L = c.value) == null ? void 0 : L.currentSrc) || g.value.src));
    }
    function C() {
      const L = c.value;
      L && (u.value = L.currentSrc || L.src);
    }
    let I = -1;
    ot(() => {
      clearTimeout(I);
    });
    function A(L) {
      let D = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 100;
      const p = () => {
        if (clearTimeout(I), r.isUnmounted) return;
        const {
          naturalHeight: R,
          naturalWidth: U
        } = L;
        R || U ? (f.value = U, m.value = R) : !L.complete && d.value === "loading" && D != null ? I = window.setTimeout(p, D) : (L.currentSrc.endsWith(".svg") || L.currentSrc.startsWith("data:image/svg+xml")) && (f.value = 1, m.value = 1);
      };
      p();
    }
    const x = S(() => ({
      "v-img__img--cover": e.cover,
      "v-img__img--contain": !e.cover
    })), P = () => {
      var p;
      if (!g.value.src || d.value === "idle") return null;
      const L = s("img", {
        class: ["v-img__img", x.value],
        style: {
          objectPosition: e.position
        },
        src: g.value.src,
        srcset: g.value.srcset,
        alt: e.alt,
        crossorigin: e.crossorigin,
        referrerpolicy: e.referrerpolicy,
        draggable: e.draggable,
        sizes: e.sizes,
        ref: c,
        onLoad: h,
        onError: k
      }, null), D = (p = a.sources) == null ? void 0 : p.call(a);
      return s(lt, {
        transition: e.transition,
        appear: !0
      }, {
        default: () => [pe(D ? s("picture", {
          class: "v-img__picture"
        }, [D, L]) : L, [[Pt, d.value === "loaded"]])]
      });
    }, T = () => s(lt, {
      transition: e.transition
    }, {
      default: () => [g.value.lazySrc && d.value !== "loaded" && s("img", {
        class: ["v-img__img", "v-img__img--preload", x.value],
        style: {
          objectPosition: e.position
        },
        src: g.value.lazySrc,
        alt: e.alt,
        crossorigin: e.crossorigin,
        referrerpolicy: e.referrerpolicy,
        draggable: e.draggable
      }, null)]
    }), w = () => a.placeholder ? s(lt, {
      transition: e.transition,
      appear: !0
    }, {
      default: () => [(d.value === "loading" || d.value === "error" && !a.error) && s("div", {
        class: "v-img__placeholder"
      }, [a.placeholder()])]
    }) : null, _ = () => a.error ? s(lt, {
      transition: e.transition,
      appear: !0
    }, {
      default: () => [d.value === "error" && s("div", {
        class: "v-img__error"
      }, [a.error()])]
    }) : null, B = () => e.gradient ? s("div", {
      class: "v-img__gradient",
      style: {
        backgroundImage: `linear-gradient(${e.gradient})`
      }
    }, null) : null, V = Z(!1);
    {
      const L = Q(y, (D) => {
        D && (requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            V.value = !0;
          });
        }), L());
      });
    }
    return z(() => {
      const L = Wl.filterProps(e);
      return pe(s(Wl, H({
        class: ["v-img", {
          "v-img--absolute": e.absolute,
          "v-img--booting": !V.value
        }, l.value, o.value, e.class],
        style: [{
          width: ee(e.width === "auto" ? f.value : e.width)
        }, i.value, e.style]
      }, L, {
        aspectRatio: y.value,
        "aria-label": e.alt,
        role: e.alt ? "img" : void 0
      }), {
        additional: () => s(re, null, [s(P, null, null), s(T, null, null), s(B, null, null), s(w, null, null), s(_, null, null)]),
        default: a.default
      }), [[mt("intersect"), {
        handler: b,
        options: e.options
      }, null, {
        once: !0
      }]]);
    }), {
      currentSrc: u,
      image: c,
      state: d,
      naturalWidth: f,
      naturalHeight: m
    };
  }
}), vt = M({
  border: [Boolean, Number, String]
}, "border");
function bt(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Tt();
  return {
    borderClasses: S(() => {
      const a = pn(e) ? e.value : e.border, l = [];
      if (a === !0 || a === "")
        l.push(`${n}--border`);
      else if (typeof a == "string" || a === 0)
        for (const i of String(a).split(" "))
          l.push(`border-${i}`);
      return l;
    })
  };
}
const Xe = M({
  elevation: {
    type: [Number, String],
    validator(e) {
      const n = parseInt(e);
      return !isNaN(n) && n >= 0 && // Material Design has a maximum elevation of 24
      // https://material.io/design/environment/elevation.html#default-elevations
      n <= 24;
    }
  }
}, "elevation");
function et(e) {
  return {
    elevationClasses: S(() => {
      const t = pn(e) ? e.value : e.elevation, a = [];
      return t == null || a.push(`elevation-${t}`), a;
    })
  };
}
const yf = [null, "prominent", "default", "comfortable", "compact"], xs = M(v(v(v(v(v(v({
  absolute: Boolean,
  collapse: Boolean,
  color: String,
  density: {
    type: String,
    default: "default",
    validator: (e) => yf.includes(e)
  },
  extended: Boolean,
  extensionHeight: {
    type: [Number, String],
    default: 48
  },
  flat: Boolean,
  floating: Boolean,
  height: {
    type: [Number, String],
    default: 64
  },
  image: String,
  title: String
}, vt()), te()), Xe()), De()), me({
  tag: "header"
})), Se()), "VToolbar"), jl = N()({
  name: "VToolbar",
  props: xs(),
  setup(e, n) {
    var g;
    let {
      slots: t
    } = n;
    const {
      backgroundColorClasses: a,
      backgroundColorStyles: l
    } = Le($(e, "color")), {
      borderClasses: i
    } = bt(e), {
      elevationClasses: o
    } = et(e), {
      roundedClasses: r
    } = Oe(e), {
      themeClasses: u
    } = Pe(e), {
      rtlClasses: c
    } = je(), d = Z(!!(e.extended || (g = t.extension) != null && g.call(t))), f = S(() => parseInt(Number(e.height) + (e.density === "prominent" ? Number(e.height) : 0) - (e.density === "comfortable" ? 8 : 0) - (e.density === "compact" ? 16 : 0), 10)), m = S(() => d.value ? parseInt(Number(e.extensionHeight) + (e.density === "prominent" ? Number(e.extensionHeight) : 0) - (e.density === "comfortable" ? 4 : 0) - (e.density === "compact" ? 8 : 0), 10) : 0);
    return Ee({
      VBtn: {
        variant: "text"
      }
    }), z(() => {
      var k;
      const y = !!(e.title || t.title), b = !!(t.image || e.image), h = (k = t.extension) == null ? void 0 : k.call(t);
      return d.value = !!(e.extended || h), s(e.tag, {
        class: ["v-toolbar", {
          "v-toolbar--absolute": e.absolute,
          "v-toolbar--collapse": e.collapse,
          "v-toolbar--flat": e.flat,
          "v-toolbar--floating": e.floating,
          [`v-toolbar--density-${e.density}`]: !0
        }, a.value, i.value, o.value, r.value, u.value, c.value, e.class],
        style: [l.value, e.style]
      }, {
        default: () => [b && s("div", {
          key: "image",
          class: "v-toolbar__image"
        }, [t.image ? s(he, {
          key: "image-defaults",
          disabled: !e.image,
          defaults: {
            VImg: {
              cover: !0,
              src: e.image
            }
          }
        }, t.image) : s(Ft, {
          key: "image-img",
          cover: !0,
          src: e.image
        }, null)]), s(he, {
          defaults: {
            VTabs: {
              height: ee(f.value)
            }
          }
        }, {
          default: () => {
            var C, I, A;
            return [s("div", {
              class: "v-toolbar__content",
              style: {
                height: ee(f.value)
              }
            }, [t.prepend && s("div", {
              class: "v-toolbar__prepend"
            }, [(C = t.prepend) == null ? void 0 : C.call(t)]), y && s(Di, {
              key: "title",
              text: e.title
            }, {
              text: t.title
            }), (I = t.default) == null ? void 0 : I.call(t), t.append && s("div", {
              class: "v-toolbar__append"
            }, [(A = t.append) == null ? void 0 : A.call(t)])])];
          }
        }), s(he, {
          defaults: {
            VTabs: {
              height: ee(m.value)
            }
          }
        }, {
          default: () => [s(Ja, null, {
            default: () => [d.value && s("div", {
              class: "v-toolbar__extension",
              style: {
                height: ee(m.value)
              }
            }, [h])]
          })]
        })]
      });
    }), {
      contentHeight: f,
      extensionHeight: m
    };
  }
}), bf = M({
  scrollTarget: {
    type: String
  },
  scrollThreshold: {
    type: [String, Number],
    default: 300
  }
}, "scroll");
function Sf(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    canScroll: t
  } = n;
  let a = 0, l = 0;
  const i = G(null), o = Z(0), r = Z(0), u = Z(0), c = Z(!1), d = Z(!1), f = S(() => Number(e.scrollThreshold)), m = S(() => Ne((f.value - o.value) / f.value || 0)), g = () => {
    const y = i.value;
    if (!y || t && !t.value) return;
    a = o.value, o.value = "window" in y ? y.pageYOffset : y.scrollTop;
    const b = y instanceof Window ? document.documentElement.scrollHeight : y.scrollHeight;
    if (l !== b) {
      l = b;
      return;
    }
    d.value = o.value < a, u.value = Math.abs(o.value - f.value);
  };
  return Q(d, () => {
    r.value = r.value || o.value;
  }), Q(c, () => {
    r.value = 0;
  }), rt(() => {
    Q(() => e.scrollTarget, (y) => {
      var h;
      const b = y ? document.querySelector(y) : window;
      if (!b) {
        wt(`Unable to locate element with identifier ${y}`);
        return;
      }
      b !== i.value && ((h = i.value) == null || h.removeEventListener("scroll", g), i.value = b, i.value.addEventListener("scroll", g, {
        passive: !0
      }));
    }, {
      immediate: !0
    });
  }), ot(() => {
    var y;
    (y = i.value) == null || y.removeEventListener("scroll", g);
  }), t && Q(t, g, {
    immediate: !0
  }), {
    scrollThreshold: f,
    currentScroll: o,
    currentThreshold: u,
    isScrollActive: c,
    scrollRatio: m,
    // required only for testing
    // probably can be removed
    // later (2 chars chlng)
    isScrollingUp: d,
    savedScroll: r
  };
}
function kn() {
  const e = Z(!1);
  return rt(() => {
    window.requestAnimationFrame(() => {
      e.value = !0;
    });
  }), {
    ssrBootStyles: S(() => e.value ? void 0 : {
      transition: "none !important"
    }),
    isBooted: gi(e)
  };
}
const kf = M(J(v(v(v({
  scrollBehavior: String,
  modelValue: {
    type: Boolean,
    default: !0
  },
  location: {
    type: String,
    default: "top",
    validator: (e) => ["top", "bottom"].includes(e)
  }
}, xs()), bn()), bf()), {
  height: {
    type: [Number, String],
    default: 64
  }
}), "VAppBar"), Cf = N()({
  name: "VAppBar",
  props: kf(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = G(), l = oe(e, "modelValue"), i = S(() => {
      var I, A;
      const C = new Set((A = (I = e.scrollBehavior) == null ? void 0 : I.split(" ")) != null ? A : []);
      return {
        hide: C.has("hide"),
        fullyHide: C.has("fully-hide"),
        inverted: C.has("inverted"),
        collapse: C.has("collapse"),
        elevate: C.has("elevate"),
        fadeImage: C.has("fade-image")
        // shrink: behavior.has('shrink'),
      };
    }), o = S(() => {
      const C = i.value;
      return C.hide || C.fullyHide || C.inverted || C.collapse || C.elevate || C.fadeImage || // behavior.shrink ||
      !l.value;
    }), {
      currentScroll: r,
      scrollThreshold: u,
      isScrollingUp: c,
      scrollRatio: d
    } = Sf(e, {
      canScroll: o
    }), f = S(() => i.value.hide || i.value.fullyHide), m = S(() => e.collapse || i.value.collapse && (i.value.inverted ? d.value > 0 : d.value === 0)), g = S(() => e.flat || i.value.fullyHide && !l.value || i.value.elevate && (i.value.inverted ? r.value > 0 : r.value === 0)), y = S(() => i.value.fadeImage ? i.value.inverted ? 1 - d.value : d.value : void 0), b = S(() => {
      var A, x, P, T;
      if (i.value.hide && i.value.inverted) return 0;
      const C = (x = (A = a.value) == null ? void 0 : A.contentHeight) != null ? x : 0, I = (T = (P = a.value) == null ? void 0 : P.extensionHeight) != null ? T : 0;
      return f.value ? r.value < u.value || i.value.fullyHide ? C + I : C : C + I;
    });
    ct(S(() => !!e.scrollBehavior), () => {
      Re(() => {
        f.value ? i.value.inverted ? l.value = r.value > u.value : l.value = c.value || r.value < u.value : l.value = !0;
      });
    });
    const {
      ssrBootStyles: h
    } = kn(), {
      layoutItemStyles: k
    } = Sn({
      id: e.name,
      order: S(() => parseInt(e.order, 10)),
      position: $(e, "location"),
      layoutSize: b,
      elementSize: Z(void 0),
      active: l,
      absolute: $(e, "absolute")
    });
    return z(() => {
      const C = jl.filterProps(e);
      return s(jl, H({
        ref: a,
        class: ["v-app-bar", {
          "v-app-bar--bottom": e.location === "bottom"
        }, e.class],
        style: [v(J(v({}, k.value), {
          "--v-toolbar-image-opacity": y.value,
          height: void 0
        }), h.value), e.style]
      }, C, {
        collapse: m.value,
        flat: g.value
      }), t);
    }), {};
  }
}), xf = [null, "default", "comfortable", "compact"], Ze = M({
  density: {
    type: String,
    default: "default",
    validator: (e) => xf.includes(e)
  }
}, "density");
function st(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Tt();
  return {
    densityClasses: S(() => `${n}--density-${e.density}`)
  };
}
const wf = ["elevated", "flat", "tonal", "outlined", "text", "plain"];
function Ut(e, n) {
  return s(re, null, [e && s("span", {
    key: "overlay",
    class: `${n}__overlay`
  }, null), s("span", {
    key: "underlay",
    class: `${n}__underlay`
  }, null)]);
}
const Ct = M({
  color: String,
  variant: {
    type: String,
    default: "elevated",
    validator: (e) => wf.includes(e)
  }
}, "variant");
function Cn(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Tt();
  const t = S(() => {
    const {
      variant: i
    } = ut(e);
    return `${n}--variant-${i}`;
  }), {
    colorClasses: a,
    colorStyles: l
  } = Fi(S(() => {
    const {
      variant: i,
      color: o
    } = ut(e);
    return {
      [["elevated", "flat"].includes(i) ? "background" : "text"]: o
    };
  }));
  return {
    colorClasses: a,
    colorStyles: l,
    variantClasses: t
  };
}
const ws = M(v(v(v(v(v(v(v(v({
  baseColor: String,
  divided: Boolean
}, vt()), te()), Ze()), Xe()), De()), me()), Se()), Ct()), "VBtnGroup"), Yl = N()({
  name: "VBtnGroup",
  props: ws(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      themeClasses: a
    } = Pe(e), {
      densityClasses: l
    } = st(e), {
      borderClasses: i
    } = bt(e), {
      elevationClasses: o
    } = et(e), {
      roundedClasses: r
    } = Oe(e);
    Ee({
      VBtn: {
        height: "auto",
        baseColor: $(e, "baseColor"),
        color: $(e, "color"),
        density: $(e, "density"),
        flat: !0,
        variant: $(e, "variant")
      }
    }), z(() => s(e.tag, {
      class: ["v-btn-group", {
        "v-btn-group--divided": e.divided
      }, a.value, i.value, l.value, o.value, r.value, e.class],
      style: e.style
    }, t));
  }
}), xn = M({
  modelValue: {
    type: null,
    default: void 0
  },
  multiple: Boolean,
  mandatory: [Boolean, String],
  max: Number,
  selectedClass: String,
  disabled: Boolean
}, "group"), wn = M({
  value: null,
  disabled: Boolean,
  selectedClass: String
}, "group-item");
function Vn(e, n) {
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
  const a = Fe("useGroupItem");
  if (!a)
    throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");
  const l = Qe();
  Be(Symbol.for(`${n.description}:id`), l);
  const i = Ce(n, null);
  if (!i) {
    if (!t) return i;
    throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${n.description}`);
  }
  const o = $(e, "value"), r = S(() => !!(i.disabled.value || e.disabled));
  i.register({
    id: l,
    value: o,
    disabled: r
  }, a), ot(() => {
    i.unregister(l);
  });
  const u = S(() => i.isSelected(l)), c = S(() => i.items.value[0].id === l), d = S(() => i.items.value[i.items.value.length - 1].id === l), f = S(() => u.value && [i.selectedClass.value, e.selectedClass]);
  return Q(u, (m) => {
    a.emit("group:selected", {
      value: m
    });
  }, {
    flush: "sync"
  }), {
    id: l,
    isSelected: u,
    isFirst: c,
    isLast: d,
    toggle: () => i.select(l, !u.value),
    select: (m) => i.select(l, m),
    selectedClass: f,
    value: o,
    disabled: r,
    group: i
  };
}
function Kt(e, n) {
  let t = !1;
  const a = dt([]), l = oe(e, "modelValue", [], (m) => m == null ? [] : Vs(a, Me(m)), (m) => {
    const g = Pf(a, m);
    return e.multiple ? g : g[0];
  }), i = Fe("useGroup");
  function o(m, g) {
    const y = m, b = Symbol.for(`${n.description}:id`), k = Dn(b, i == null ? void 0 : i.vnode).indexOf(g);
    ut(y.value) == null && (y.value = k, y.useIndexAsValue = !0), k > -1 ? a.splice(k, 0, y) : a.push(y);
  }
  function r(m) {
    if (t) return;
    u();
    const g = a.findIndex((y) => y.id === m);
    a.splice(g, 1);
  }
  function u() {
    const m = a.find((g) => !g.disabled);
    m && e.mandatory === "force" && !l.value.length && (l.value = [m.id]);
  }
  rt(() => {
    u();
  }), ot(() => {
    t = !0;
  }), Yc(() => {
    for (let m = 0; m < a.length; m++)
      a[m].useIndexAsValue && (a[m].value = m);
  });
  function c(m, g) {
    const y = a.find((b) => b.id === m);
    if (!(g && (y != null && y.disabled)))
      if (e.multiple) {
        const b = l.value.slice(), h = b.findIndex((C) => C === m), k = ~h;
        if (g = g != null ? g : !k, k && e.mandatory && b.length <= 1 || !k && e.max != null && b.length + 1 > e.max) return;
        h < 0 && g ? b.push(m) : h >= 0 && !g && b.splice(h, 1), l.value = b;
      } else {
        const b = l.value.includes(m);
        if (e.mandatory && b) return;
        l.value = (g != null ? g : !b) ? [m] : [];
      }
  }
  function d(m) {
    if (e.multiple && wt('This method is not supported when using "multiple" prop'), l.value.length) {
      const g = l.value[0], y = a.findIndex((k) => k.id === g);
      let b = (y + m) % a.length, h = a[b];
      for (; h.disabled && b !== y; )
        b = (b + m) % a.length, h = a[b];
      if (h.disabled) return;
      l.value = [a[b].id];
    } else {
      const g = a.find((y) => !y.disabled);
      g && (l.value = [g.id]);
    }
  }
  const f = {
    register: o,
    unregister: r,
    selected: l,
    select: c,
    disabled: $(e, "disabled"),
    prev: () => d(a.length - 1),
    next: () => d(1),
    isSelected: (m) => l.value.includes(m),
    selectedClass: S(() => e.selectedClass),
    items: S(() => a),
    getItemIndex: (m) => Vf(a, m)
  };
  return Be(n, f), f;
}
function Vf(e, n) {
  const t = Vs(e, [n]);
  return t.length ? e.findIndex((a) => a.id === t[0]) : -1;
}
function Vs(e, n) {
  const t = [];
  return n.forEach((a) => {
    const l = e.find((o) => Lt(a, o.value)), i = e[a];
    (l == null ? void 0 : l.value) != null ? t.push(l.id) : i != null && t.push(i.id);
  }), t;
}
function Pf(e, n) {
  const t = [];
  return n.forEach((a) => {
    const l = e.findIndex((i) => i.id === a);
    if (~l) {
      const i = e[l];
      t.push(i.value != null ? i.value : l);
    }
  }), t;
}
const $i = Symbol.for("vuetify:v-btn-toggle"), If = M(v(v({}, ws()), xn()), "VBtnToggle"), _f = N()({
  name: "VBtnToggle",
  props: If(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      isSelected: a,
      next: l,
      prev: i,
      select: o,
      selected: r
    } = Kt(e, $i);
    return z(() => {
      const u = Yl.filterProps(e);
      return s(Yl, H({
        class: ["v-btn-toggle", e.class]
      }, u, {
        style: e.style
      }), {
        default: () => {
          var c;
          return [(c = t.default) == null ? void 0 : c.call(t, {
            isSelected: a,
            next: l,
            prev: i,
            select: o,
            selected: r
          })];
        }
      });
    }), {
      next: l,
      prev: i,
      select: o
    };
  }
}), Af = ["x-small", "small", "default", "large", "x-large"], Dt = M({
  size: {
    type: [String, Number],
    default: "default"
  }
}, "size");
function zn(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Tt();
  return ki(() => {
    let t, a;
    return Ma(Af, e.size) ? t = `${n}--size-${e.size}` : e.size && (a = {
      width: ee(e.size),
      height: ee(e.size)
    }), {
      sizeClasses: t,
      sizeStyles: a
    };
  });
}
const Lf = M(v(v(v(v({
  color: String,
  disabled: Boolean,
  start: Boolean,
  end: Boolean,
  icon: ve
}, te()), Dt()), me({
  tag: "i"
})), Se()), "VIcon"), Ve = N()({
  name: "VIcon",
  props: Lf(),
  setup(e, n) {
    let {
      attrs: t,
      slots: a
    } = n;
    const l = G(), {
      themeClasses: i
    } = Pe(e), {
      iconData: o
    } = qv(S(() => l.value || e.icon)), {
      sizeClasses: r
    } = zn(e), {
      textColorClasses: u,
      textColorStyles: c
    } = tt($(e, "color"));
    return z(() => {
      var m, g;
      const d = (m = a.default) == null ? void 0 : m.call(a);
      d && (l.value = (g = pr(d).filter((y) => y.type === Gc && y.children && typeof y.children == "string")[0]) == null ? void 0 : g.children);
      const f = !!(t.onClick || t.onClickOnce);
      return s(o.value.component, {
        tag: e.tag,
        icon: o.value.icon,
        class: ["v-icon", "notranslate", i.value, r.value, u.value, {
          "v-icon--clickable": f,
          "v-icon--disabled": e.disabled,
          "v-icon--start": e.start,
          "v-icon--end": e.end
        }, e.class],
        style: [r.value ? void 0 : {
          fontSize: ee(e.size),
          height: ee(e.size),
          width: ee(e.size)
        }, c.value, e.style],
        role: f ? "button" : void 0,
        "aria-hidden": !f,
        tabindex: f ? e.disabled ? -1 : 0 : void 0
      }, {
        default: () => [d]
      });
    }), {};
  }
});
function el(e, n) {
  const t = G(), a = Z(!1);
  if (yi) {
    const l = new IntersectionObserver((i) => {
      a.value = !!i.find((o) => o.isIntersecting);
    }, n);
    ot(() => {
      l.disconnect();
    }), Q(t, (i, o) => {
      o && (l.unobserve(o), a.value = !1), i && l.observe(i);
    }, {
      flush: "post"
    });
  }
  return {
    intersectionRef: t,
    isIntersecting: a
  };
}
const Tf = M(v(v(v(v({
  bgColor: String,
  color: String,
  indeterminate: [Boolean, String],
  modelValue: {
    type: [Number, String],
    default: 0
  },
  rotate: {
    type: [Number, String],
    default: 0
  },
  width: {
    type: [Number, String],
    default: 4
  }
}, te()), Dt()), me({
  tag: "div"
})), Se()), "VProgressCircular"), On = N()({
  name: "VProgressCircular",
  props: Tf(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = 20, l = 2 * Math.PI * a, i = G(), {
      themeClasses: o
    } = Pe(e), {
      sizeClasses: r,
      sizeStyles: u
    } = zn(e), {
      textColorClasses: c,
      textColorStyles: d
    } = tt($(e, "color")), {
      textColorClasses: f,
      textColorStyles: m
    } = tt($(e, "bgColor")), {
      intersectionRef: g,
      isIntersecting: y
    } = el(), {
      resizeRef: b,
      contentRect: h
    } = Vt(), k = S(() => Math.max(0, Math.min(100, parseFloat(e.modelValue)))), C = S(() => Number(e.width)), I = S(() => u.value ? Number(e.size) : h.value ? h.value.width : Math.max(C.value, 32)), A = S(() => a / (1 - C.value / I.value) * 2), x = S(() => C.value / I.value * A.value), P = S(() => ee((100 - k.value) / 100 * l));
    return Re(() => {
      g.value = i.value, b.value = i.value;
    }), z(() => s(e.tag, {
      ref: i,
      class: ["v-progress-circular", {
        "v-progress-circular--indeterminate": !!e.indeterminate,
        "v-progress-circular--visible": y.value,
        "v-progress-circular--disable-shrink": e.indeterminate === "disable-shrink"
      }, o.value, r.value, c.value, e.class],
      style: [u.value, d.value, e.style],
      role: "progressbar",
      "aria-valuemin": "0",
      "aria-valuemax": "100",
      "aria-valuenow": e.indeterminate ? void 0 : k.value
    }, {
      default: () => [s("svg", {
        style: {
          transform: `rotate(calc(-90deg + ${Number(e.rotate)}deg))`
        },
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: `0 0 ${A.value} ${A.value}`
      }, [s("circle", {
        class: ["v-progress-circular__underlay", f.value],
        style: m.value,
        fill: "transparent",
        cx: "50%",
        cy: "50%",
        r: a,
        "stroke-width": x.value,
        "stroke-dasharray": l,
        "stroke-dashoffset": 0
      }, null), s("circle", {
        class: "v-progress-circular__overlay",
        fill: "transparent",
        cx: "50%",
        cy: "50%",
        r: a,
        "stroke-width": x.value,
        "stroke-dasharray": l,
        "stroke-dashoffset": P.value
      }, null)]), t.default && s("div", {
        class: "v-progress-circular__content"
      }, [t.default({
        value: k.value
      })])]
    })), {};
  }
}), lr = {
  center: "center",
  top: "bottom",
  bottom: "top",
  left: "right",
  right: "left"
}, Rt = M({
  location: String
}, "location");
function Pn(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, t = arguments.length > 2 ? arguments[2] : void 0;
  const {
    isRtl: a
  } = je();
  return {
    locationStyles: S(() => {
      if (!e.location) return {};
      const {
        side: i,
        align: o
      } = El(e.location.split(" ").length > 1 ? e.location : `${e.location} center`, a.value);
      function r(c) {
        return t ? t(c) : 0;
      }
      const u = {};
      return i !== "center" && (n ? u[lr[i]] = `calc(100% - ${r(i)}px)` : u[i] = 0), o !== "center" ? n ? u[lr[o]] = `calc(100% - ${r(o)}px)` : u[o] = 0 : (i === "center" ? u.top = u.left = "50%" : u[{
        top: "left",
        bottom: "left",
        left: "top",
        right: "top"
      }[i]] = "50%", u.transform = {
        top: "translateX(-50%)",
        bottom: "translateX(-50%)",
        left: "translateY(-50%)",
        right: "translateY(-50%)",
        center: "translate(-50%, -50%)"
      }[i]), u;
    })
  };
}
const Bf = M(v(v(v(v(v({
  absolute: Boolean,
  active: {
    type: Boolean,
    default: !0
  },
  bgColor: String,
  bgOpacity: [Number, String],
  bufferValue: {
    type: [Number, String],
    default: 0
  },
  bufferColor: String,
  bufferOpacity: [Number, String],
  clickable: Boolean,
  color: String,
  height: {
    type: [Number, String],
    default: 4
  },
  indeterminate: Boolean,
  max: {
    type: [Number, String],
    default: 100
  },
  modelValue: {
    type: [Number, String],
    default: 0
  },
  opacity: [Number, String],
  reverse: Boolean,
  stream: Boolean,
  striped: Boolean,
  roundedBar: Boolean
}, te()), Rt({
  location: "top"
})), De()), me()), Se()), "VProgressLinear"), tl = N()({
  name: "VProgressLinear",
  props: Bf(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    var V;
    let {
      slots: t
    } = n;
    const a = oe(e, "modelValue"), {
      isRtl: l,
      rtlClasses: i
    } = je(), {
      themeClasses: o
    } = Pe(e), {
      locationStyles: r
    } = Pn(e), {
      textColorClasses: u,
      textColorStyles: c
    } = tt(e, "color"), {
      backgroundColorClasses: d,
      backgroundColorStyles: f
    } = Le(S(() => e.bgColor || e.color)), {
      backgroundColorClasses: m,
      backgroundColorStyles: g
    } = Le(S(() => e.bufferColor || e.bgColor || e.color)), {
      backgroundColorClasses: y,
      backgroundColorStyles: b
    } = Le(e, "color"), {
      roundedClasses: h
    } = Oe(e), {
      intersectionRef: k,
      isIntersecting: C
    } = el(), I = S(() => parseFloat(e.max)), A = S(() => parseFloat(e.height)), x = S(() => Ne(parseFloat(e.bufferValue) / I.value * 100, 0, 100)), P = S(() => Ne(parseFloat(a.value) / I.value * 100, 0, 100)), T = S(() => l.value !== e.reverse), w = S(() => e.indeterminate ? "fade-transition" : "slide-x-transition"), _ = Ie && ((V = window.matchMedia) == null ? void 0 : V.call(window, "(forced-colors: active)").matches);
    function B(L) {
      if (!k.value) return;
      const {
        left: D,
        right: p,
        width: R
      } = k.value.getBoundingClientRect(), U = T.value ? R - L.clientX + (p - R) : L.clientX - D;
      a.value = Math.round(U / R * I.value);
    }
    return z(() => s(e.tag, {
      ref: k,
      class: ["v-progress-linear", {
        "v-progress-linear--absolute": e.absolute,
        "v-progress-linear--active": e.active && C.value,
        "v-progress-linear--reverse": T.value,
        "v-progress-linear--rounded": e.rounded,
        "v-progress-linear--rounded-bar": e.roundedBar,
        "v-progress-linear--striped": e.striped
      }, h.value, o.value, i.value, e.class],
      style: [v({
        bottom: e.location === "bottom" ? 0 : void 0,
        top: e.location === "top" ? 0 : void 0,
        height: e.active ? ee(A.value) : 0,
        "--v-progress-linear-height": ee(A.value)
      }, e.absolute ? r.value : {}), e.style],
      role: "progressbar",
      "aria-hidden": e.active ? "false" : "true",
      "aria-valuemin": "0",
      "aria-valuemax": e.max,
      "aria-valuenow": e.indeterminate ? void 0 : P.value,
      onClick: e.clickable && B
    }, {
      default: () => [e.stream && s("div", {
        key: "stream",
        class: ["v-progress-linear__stream", u.value],
        style: J(v({}, c.value), {
          [T.value ? "left" : "right"]: ee(-A.value),
          borderTop: `${ee(A.value / 2)} dotted`,
          opacity: parseFloat(e.bufferOpacity),
          top: `calc(50% - ${ee(A.value / 4)})`,
          width: ee(100 - x.value, "%"),
          "--v-progress-linear-stream-to": ee(A.value * (T.value ? 1 : -1))
        })
      }, null), s("div", {
        class: ["v-progress-linear__background", _ ? void 0 : d.value],
        style: [f.value, {
          opacity: parseFloat(e.bgOpacity),
          width: e.stream ? 0 : void 0
        }]
      }, null), s("div", {
        class: ["v-progress-linear__buffer", _ ? void 0 : m.value],
        style: [g.value, {
          opacity: parseFloat(e.bufferOpacity),
          width: ee(x.value, "%")
        }]
      }, null), s(Wt, {
        name: w.value
      }, {
        default: () => [e.indeterminate ? s("div", {
          class: "v-progress-linear__indeterminate"
        }, [["long", "short"].map((L) => s("div", {
          key: L,
          class: ["v-progress-linear__indeterminate", L, _ ? void 0 : y.value],
          style: b.value
        }, null))]) : s("div", {
          class: ["v-progress-linear__determinate", _ ? void 0 : y.value],
          style: [b.value, {
            width: ee(P.value, "%")
          }]
        }, null)]
      }), t.default && s("div", {
        class: "v-progress-linear__content"
      }, [t.default({
        value: P.value,
        buffer: x.value
      })])]
    })), {};
  }
}), nl = M({
  loading: [Boolean, String]
}, "loader");
function ca(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Tt();
  return {
    loaderClasses: S(() => ({
      [`${n}--loading`]: e.loading
    }))
  };
}
function da(e, n) {
  var a;
  let {
    slots: t
  } = n;
  return s("div", {
    class: `${e.name}__loader`
  }, [((a = t.default) == null ? void 0 : a.call(t, {
    color: e.color,
    isActive: e.active
  })) || s(tl, {
    absolute: e.absolute,
    active: e.active,
    color: e.color,
    height: "2",
    indeterminate: !0
  }, null)]);
}
const Df = ["static", "relative", "fixed", "absolute", "sticky"], Wn = M({
  position: {
    type: String,
    validator: (
      /* istanbul ignore next */
      (e) => Df.includes(e)
    )
  }
}, "position");
function jn(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Tt();
  return {
    positionClasses: S(() => e.position ? `${n}--${e.position}` : void 0)
  };
}
function Mf() {
  const e = Fe("useRoute");
  return S(() => {
    var n;
    return (n = e == null ? void 0 : e.proxy) == null ? void 0 : n.$route;
  });
}
function Ps() {
  var e, n;
  return (n = (e = Fe("useRouter")) == null ? void 0 : e.proxy) == null ? void 0 : n.$router;
}
function va(e, n) {
  var f, m;
  const t = Uc("RouterLink"), a = S(() => !!(e.href || e.to)), l = S(() => (a == null ? void 0 : a.value) || Ao(n, "click") || Ao(e, "click"));
  if (typeof t == "string" || !("useLink" in t)) {
    const g = $(e, "href");
    return {
      isLink: a,
      isClickable: l,
      href: g,
      linkProps: dt({
        href: g
      })
    };
  }
  const i = S(() => J(v({}, e), {
    to: $(() => e.to || "")
  })), o = t.useLink(i.value), r = S(() => e.to ? o : void 0), u = Mf(), c = S(() => {
    var g, y, b, h, k;
    return r.value ? e.exact ? u.value ? ((k = r.value.isExactActive) == null ? void 0 : k.value) && Lt(r.value.route.value.query, u.value.query) : (h = (b = r.value.isExactActive) == null ? void 0 : b.value) != null ? h : !1 : (y = (g = r.value.isActive) == null ? void 0 : g.value) != null ? y : !1 : !1;
  }), d = S(() => {
    var g;
    return e.to ? (g = r.value) == null ? void 0 : g.route.value.href : e.href;
  });
  return {
    isLink: a,
    isClickable: l,
    isActive: c,
    route: (f = r.value) == null ? void 0 : f.route,
    navigate: (m = r.value) == null ? void 0 : m.navigate,
    href: d,
    linkProps: dt({
      href: d,
      "aria-current": S(() => c.value ? "page" : void 0)
    })
  };
}
const fa = M({
  href: String,
  replace: Boolean,
  to: [String, Object],
  exact: Boolean
}, "router");
let _l = !1;
function pf(e, n) {
  let t = !1, a, l;
  Ie && (_e(() => {
    window.addEventListener("popstate", i), a = e == null ? void 0 : e.beforeEach((o, r, u) => {
      _l ? t ? n(u) : u() : setTimeout(() => t ? n(u) : u()), _l = !0;
    }), l = e == null ? void 0 : e.afterEach(() => {
      _l = !1;
    });
  }), it(() => {
    window.removeEventListener("popstate", i), a == null || a(), l == null || l();
  }));
  function i(o) {
    var r;
    (r = o.state) != null && r.replaced || (t = !0, setTimeout(() => t = !1));
  }
}
function Ef(e, n) {
  Q(() => {
    var t;
    return (t = e.isActive) == null ? void 0 : t.value;
  }, (t) => {
    e.isLink.value && t && n && _e(() => {
      n(!0);
    });
  }, {
    immediate: !0
  });
}
const Gl = Symbol("rippleStop"), Ff = 80;
function ir(e, n) {
  e.style.transform = n, e.style.webkitTransform = n;
}
function Ul(e) {
  return e.constructor.name === "TouchEvent";
}
function Is(e) {
  return e.constructor.name === "KeyboardEvent";
}
const $f = function(e, n) {
  var f;
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, a = 0, l = 0;
  if (!Is(e)) {
    const m = n.getBoundingClientRect(), g = Ul(e) ? e.touches[e.touches.length - 1] : e;
    a = g.clientX - m.left, l = g.clientY - m.top;
  }
  let i = 0, o = 0.3;
  (f = n._ripple) != null && f.circle ? (o = 0.15, i = n.clientWidth / 2, i = t.center ? i : i + Math.sqrt(xe(a - i, 2) + xe(l - i, 2)) / 4) : i = Math.sqrt(xe(n.clientWidth, 2) + xe(n.clientHeight, 2)) / 2;
  const r = `${(n.clientWidth - i * 2) / 2}px`, u = `${(n.clientHeight - i * 2) / 2}px`, c = t.center ? r : `${a - i}px`, d = t.center ? u : `${l - i}px`;
  return {
    radius: i,
    scale: o,
    x: c,
    y: d,
    centerX: r,
    centerY: u
  };
}, Ra = {
  /* eslint-disable max-statements */
  show(e, n) {
    var g;
    let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    if (!((g = n == null ? void 0 : n._ripple) != null && g.enabled))
      return;
    const a = document.createElement("span"), l = document.createElement("span");
    a.appendChild(l), a.className = "v-ripple__container", t.class && (a.className += ` ${t.class}`);
    const {
      radius: i,
      scale: o,
      x: r,
      y: u,
      centerX: c,
      centerY: d
    } = $f(e, n, t), f = `${i * 2}px`;
    l.className = "v-ripple__animation", l.style.width = f, l.style.height = f, n.appendChild(a);
    const m = window.getComputedStyle(n);
    m && m.position === "static" && (n.style.position = "relative", n.dataset.previousPosition = "static"), l.classList.add("v-ripple__animation--enter"), l.classList.add("v-ripple__animation--visible"), ir(l, `translate(${r}, ${u}) scale3d(${o},${o},${o})`), l.dataset.activated = String(performance.now()), setTimeout(() => {
      l.classList.remove("v-ripple__animation--enter"), l.classList.add("v-ripple__animation--in"), ir(l, `translate(${c}, ${d}) scale3d(1,1,1)`);
    }, 0);
  },
  hide(e) {
    var i;
    if (!((i = e == null ? void 0 : e._ripple) != null && i.enabled)) return;
    const n = e.getElementsByClassName("v-ripple__animation");
    if (n.length === 0) return;
    const t = n[n.length - 1];
    if (t.dataset.isHiding) return;
    t.dataset.isHiding = "true";
    const a = performance.now() - Number(t.dataset.activated), l = Math.max(250 - a, 0);
    setTimeout(() => {
      t.classList.remove("v-ripple__animation--in"), t.classList.add("v-ripple__animation--out"), setTimeout(() => {
        var r;
        e.getElementsByClassName("v-ripple__animation").length === 1 && e.dataset.previousPosition && (e.style.position = e.dataset.previousPosition, delete e.dataset.previousPosition), ((r = t.parentNode) == null ? void 0 : r.parentNode) === e && e.removeChild(t.parentNode);
      }, 300);
    }, l);
  }
};
function _s(e) {
  return typeof e == "undefined" || !!e;
}
function aa(e) {
  const n = {}, t = e.currentTarget;
  if (!(!(t != null && t._ripple) || t._ripple.touched || e[Gl])) {
    if (e[Gl] = !0, Ul(e))
      t._ripple.touched = !0, t._ripple.isTouch = !0;
    else if (t._ripple.isTouch) return;
    if (n.center = t._ripple.centered || Is(e), t._ripple.class && (n.class = t._ripple.class), Ul(e)) {
      if (t._ripple.showTimerCommit) return;
      t._ripple.showTimerCommit = () => {
        Ra.show(e, t, n);
      }, t._ripple.showTimer = window.setTimeout(() => {
        var a;
        (a = t == null ? void 0 : t._ripple) != null && a.showTimerCommit && (t._ripple.showTimerCommit(), t._ripple.showTimerCommit = null);
      }, Ff);
    } else
      Ra.show(e, t, n);
  }
}
function or(e) {
  e[Gl] = !0;
}
function ft(e) {
  const n = e.currentTarget;
  if (n != null && n._ripple) {
    if (window.clearTimeout(n._ripple.showTimer), e.type === "touchend" && n._ripple.showTimerCommit) {
      n._ripple.showTimerCommit(), n._ripple.showTimerCommit = null, n._ripple.showTimer = window.setTimeout(() => {
        ft(e);
      });
      return;
    }
    window.setTimeout(() => {
      n._ripple && (n._ripple.touched = !1);
    }), Ra.hide(n);
  }
}
function As(e) {
  const n = e.currentTarget;
  n != null && n._ripple && (n._ripple.showTimerCommit && (n._ripple.showTimerCommit = null), window.clearTimeout(n._ripple.showTimer));
}
let la = !1;
function Ls(e) {
  !la && (e.keyCode === wo.enter || e.keyCode === wo.space) && (la = !0, aa(e));
}
function Ts(e) {
  la = !1, ft(e);
}
function Bs(e) {
  la && (la = !1, ft(e));
}
function Ds(e, n, t) {
  var o;
  const {
    value: a,
    modifiers: l
  } = n, i = _s(a);
  if (i || Ra.hide(e), e._ripple = (o = e._ripple) != null ? o : {}, e._ripple.enabled = i, e._ripple.centered = l.center, e._ripple.circle = l.circle, Br(a) && a.class && (e._ripple.class = a.class), i && !t) {
    if (l.stop) {
      e.addEventListener("touchstart", or, {
        passive: !0
      }), e.addEventListener("mousedown", or);
      return;
    }
    e.addEventListener("touchstart", aa, {
      passive: !0
    }), e.addEventListener("touchend", ft, {
      passive: !0
    }), e.addEventListener("touchmove", As, {
      passive: !0
    }), e.addEventListener("touchcancel", ft), e.addEventListener("mousedown", aa), e.addEventListener("mouseup", ft), e.addEventListener("mouseleave", ft), e.addEventListener("keydown", Ls), e.addEventListener("keyup", Ts), e.addEventListener("blur", Bs), e.addEventListener("dragstart", ft, {
      passive: !0
    });
  } else !i && t && Ms(e);
}
function Ms(e) {
  e.removeEventListener("mousedown", aa), e.removeEventListener("touchstart", aa), e.removeEventListener("touchend", ft), e.removeEventListener("touchmove", As), e.removeEventListener("touchcancel", ft), e.removeEventListener("mouseup", ft), e.removeEventListener("mouseleave", ft), e.removeEventListener("keydown", Ls), e.removeEventListener("keyup", Ts), e.removeEventListener("dragstart", ft), e.removeEventListener("blur", Bs);
}
function Of(e, n) {
  Ds(e, n, !1);
}
function Rf(e) {
  delete e._ripple, Ms(e);
}
function Nf(e, n) {
  if (n.value === n.oldValue)
    return;
  const t = _s(n.oldValue);
  Ds(e, n, t);
}
const qt = {
  mounted: Of,
  unmounted: Rf,
  updated: Nf
}, al = M(v(v(v(v(v(v(v(v(v(v(v(v(v(v(v({
  active: {
    type: Boolean,
    default: void 0
  },
  activeColor: String,
  baseColor: String,
  symbol: {
    type: null,
    default: $i
  },
  flat: Boolean,
  icon: [Boolean, String, Function, Object],
  prependIcon: ve,
  appendIcon: ve,
  block: Boolean,
  readonly: Boolean,
  slim: Boolean,
  stacked: Boolean,
  ripple: {
    type: [Boolean, Object],
    default: !0
  },
  text: String
}, vt()), te()), Ze()), Ye()), Xe()), wn()), nl()), Rt()), Wn()), De()), fa()), Dt()), me({
  tag: "button"
})), Se()), Ct({
  variant: "elevated"
})), "VBtn"), we = N()({
  name: "VBtn",
  props: al(),
  emits: {
    "group:selected": (e) => !0
  },
  setup(e, n) {
    let {
      attrs: t,
      slots: a
    } = n;
    const {
      themeClasses: l
    } = Pe(e), {
      borderClasses: i
    } = bt(e), {
      densityClasses: o
    } = st(e), {
      dimensionStyles: r
    } = Ge(e), {
      elevationClasses: u
    } = et(e), {
      loaderClasses: c
    } = ca(e), {
      locationStyles: d
    } = Pn(e), {
      positionClasses: f
    } = jn(e), {
      roundedClasses: m
    } = Oe(e), {
      sizeClasses: g,
      sizeStyles: y
    } = zn(e), b = Vn(e, e.symbol, !1), h = va(e, t), k = S(() => {
      var V;
      return e.active !== void 0 ? e.active : h.isLink.value ? (V = h.isActive) == null ? void 0 : V.value : b == null ? void 0 : b.isSelected.value;
    }), C = S(() => {
      var V;
      return k.value && (V = e.activeColor) != null ? V : e.color;
    }), I = S(() => {
      var L, D, p;
      return {
        color: ((b == null ? void 0 : b.isSelected.value) && (!h.isLink.value || ((L = h.isActive) == null ? void 0 : L.value)) || !b || ((D = h.isActive) == null ? void 0 : D.value)) && (p = C.value) != null ? p : e.baseColor,
        variant: e.variant
      };
    }), {
      colorClasses: A,
      colorStyles: x,
      variantClasses: P
    } = Cn(I), T = S(() => (b == null ? void 0 : b.disabled.value) || e.disabled), w = S(() => e.variant === "elevated" && !(e.disabled || e.flat || e.border)), _ = S(() => {
      if (!(e.value === void 0 || typeof e.value == "symbol"))
        return Object(e.value) === e.value ? JSON.stringify(e.value, null, 0) : e.value;
    });
    function B(V) {
      var L;
      T.value || h.isLink.value && (V.metaKey || V.ctrlKey || V.shiftKey || V.button !== 0 || t.target === "_blank") || ((L = h.navigate) == null || L.call(h, V), b == null || b.toggle());
    }
    return Ef(h, b == null ? void 0 : b.select), z(() => {
      const V = h.isLink.value ? "a" : e.tag, L = !!(e.prependIcon || a.prepend), D = !!(e.appendIcon || a.append), p = !!(e.icon && e.icon !== !0);
      return pe(s(V, H({
        type: V === "a" ? void 0 : "button",
        class: ["v-btn", b == null ? void 0 : b.selectedClass.value, {
          "v-btn--active": k.value,
          "v-btn--block": e.block,
          "v-btn--disabled": T.value,
          "v-btn--elevated": w.value,
          "v-btn--flat": e.flat,
          "v-btn--icon": !!e.icon,
          "v-btn--loading": e.loading,
          "v-btn--readonly": e.readonly,
          "v-btn--slim": e.slim,
          "v-btn--stacked": e.stacked
        }, l.value, i.value, A.value, o.value, u.value, c.value, f.value, m.value, g.value, P.value, e.class],
        style: [x.value, r.value, d.value, y.value, e.style],
        "aria-busy": e.loading ? !0 : void 0,
        disabled: T.value || void 0,
        tabindex: e.loading || e.readonly ? -1 : void 0,
        onClick: B,
        value: _.value
      }, h.linkProps), {
        default: () => {
          var R, U;
          return [Ut(!0, "v-btn"), !e.icon && L && s("span", {
            key: "prepend",
            class: "v-btn__prepend"
          }, [a.prepend ? s(he, {
            key: "prepend-defaults",
            disabled: !e.prependIcon,
            defaults: {
              VIcon: {
                icon: e.prependIcon
              }
            }
          }, a.prepend) : s(Ve, {
            key: "prepend-icon",
            icon: e.prependIcon
          }, null)]), s("span", {
            class: "v-btn__content",
            "data-no-activator": ""
          }, [!a.default && p ? s(Ve, {
            key: "content-icon",
            icon: e.icon
          }, null) : s(he, {
            key: "content-defaults",
            disabled: !p,
            defaults: {
              VIcon: {
                icon: e.icon
              }
            }
          }, {
            default: () => {
              var q, K;
              return [(K = (q = a.default) == null ? void 0 : q.call(a)) != null ? K : e.text];
            }
          })]), !e.icon && D && s("span", {
            key: "append",
            class: "v-btn__append"
          }, [a.append ? s(he, {
            key: "append-defaults",
            disabled: !e.appendIcon,
            defaults: {
              VIcon: {
                icon: e.appendIcon
              }
            }
          }, a.append) : s(Ve, {
            key: "append-icon",
            icon: e.appendIcon
          }, null)]), !!e.loading && s("span", {
            key: "loader",
            class: "v-btn__loader"
          }, [(U = (R = a.loader) == null ? void 0 : R.call(a)) != null ? U : s(On, {
            color: typeof e.loading == "boolean" ? void 0 : e.loading,
            indeterminate: !0,
            width: "2"
          }, null)])];
        }
      }), [[qt, !T.value && e.ripple, "", {
        center: !!e.icon
      }]]);
    }), {
      group: b
    };
  }
}), Hf = M(v({}, al({
  icon: "$menu",
  variant: "text"
})), "VAppBarNavIcon"), zf = N()({
  name: "VAppBarNavIcon",
  props: Hf(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    return z(() => s(we, H(e, {
      class: ["v-app-bar-nav-icon"]
    }), t)), {};
  }
}), Wf = N()({
  name: "VAppBarTitle",
  props: hs(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    return z(() => s(Di, H(e, {
      class: "v-app-bar-title"
    }), t)), {};
  }
}), ps = Bt("v-alert-title"), jf = ["success", "info", "warning", "error"], Yf = M(v(v(v(v(v(v(v(v(v(v({
  border: {
    type: [Boolean, String],
    validator: (e) => typeof e == "boolean" || ["top", "end", "bottom", "start"].includes(e)
  },
  borderColor: String,
  closable: Boolean,
  closeIcon: {
    type: ve,
    default: "$close"
  },
  closeLabel: {
    type: String,
    default: "$vuetify.close"
  },
  icon: {
    type: [Boolean, String, Function, Object],
    default: null
  },
  modelValue: {
    type: Boolean,
    default: !0
  },
  prominent: Boolean,
  title: String,
  text: String,
  type: {
    type: String,
    validator: (e) => jf.includes(e)
  }
}, te()), Ze()), Ye()), Xe()), Rt()), Wn()), De()), me()), Se()), Ct({
  variant: "flat"
})), "VAlert"), Gf = N()({
  name: "VAlert",
  props: Yf(),
  emits: {
    "click:close": (e) => !0,
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      emit: t,
      slots: a
    } = n;
    const l = oe(e, "modelValue"), i = S(() => {
      var x;
      if (e.icon !== !1)
        return e.type ? (x = e.icon) != null ? x : `$${e.type}` : e.icon;
    }), o = S(() => {
      var x;
      return {
        color: (x = e.color) != null ? x : e.type,
        variant: e.variant
      };
    }), {
      themeClasses: r
    } = Pe(e), {
      colorClasses: u,
      colorStyles: c,
      variantClasses: d
    } = Cn(o), {
      densityClasses: f
    } = st(e), {
      dimensionStyles: m
    } = Ge(e), {
      elevationClasses: g
    } = et(e), {
      locationStyles: y
    } = Pn(e), {
      positionClasses: b
    } = jn(e), {
      roundedClasses: h
    } = Oe(e), {
      textColorClasses: k,
      textColorStyles: C
    } = tt($(e, "borderColor")), {
      t: I
    } = $e(), A = S(() => ({
      "aria-label": I(e.closeLabel),
      onClick(x) {
        l.value = !1, t("click:close", x);
      }
    }));
    return () => {
      const x = !!(a.prepend || i.value), P = !!(a.title || e.title), T = !!(a.close || e.closable);
      return l.value && s(e.tag, {
        class: ["v-alert", e.border && {
          "v-alert--border": !!e.border,
          [`v-alert--border-${e.border === !0 ? "start" : e.border}`]: !0
        }, {
          "v-alert--prominent": e.prominent
        }, r.value, u.value, f.value, g.value, b.value, h.value, d.value, e.class],
        style: [c.value, m.value, y.value, e.style],
        role: "alert"
      }, {
        default: () => {
          var w, _, B;
          return [Ut(!1, "v-alert"), e.border && s("div", {
            key: "border",
            class: ["v-alert__border", k.value],
            style: C.value
          }, null), x && s("div", {
            key: "prepend",
            class: "v-alert__prepend"
          }, [a.prepend ? s(he, {
            key: "prepend-defaults",
            disabled: !i.value,
            defaults: {
              VIcon: {
                density: e.density,
                icon: i.value,
                size: e.prominent ? 44 : 28
              }
            }
          }, a.prepend) : s(Ve, {
            key: "prepend-icon",
            density: e.density,
            icon: i.value,
            size: e.prominent ? 44 : 28
          }, null)]), s("div", {
            class: "v-alert__content"
          }, [P && s(ps, {
            key: "title"
          }, {
            default: () => {
              var V, L;
              return [(L = (V = a.title) == null ? void 0 : V.call(a)) != null ? L : e.title];
            }
          }), (_ = (w = a.text) == null ? void 0 : w.call(a)) != null ? _ : e.text, (B = a.default) == null ? void 0 : B.call(a)]), a.append && s("div", {
            key: "append",
            class: "v-alert__append"
          }, [a.append()]), T && s("div", {
            key: "close",
            class: "v-alert__close"
          }, [a.close ? s(he, {
            key: "close-defaults",
            defaults: {
              VBtn: {
                icon: e.closeIcon,
                size: "x-small",
                variant: "text"
              }
            }
          }, {
            default: () => {
              var V;
              return [(V = a.close) == null ? void 0 : V.call(a, {
                props: A.value
              })];
            }
          }) : s(we, H({
            key: "close-btn",
            icon: e.closeIcon,
            size: "x-small",
            variant: "text"
          }, A.value), null)])];
        }
      });
    };
  }
}), Uf = M(v(v(v(v(v(v(v(v({
  start: Boolean,
  end: Boolean,
  icon: ve,
  image: String,
  text: String
}, vt()), te()), Ze()), De()), Dt()), me()), Se()), Ct({
  variant: "flat"
})), "VAvatar"), kt = N()({
  name: "VAvatar",
  props: Uf(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      themeClasses: a
    } = Pe(e), {
      borderClasses: l
    } = bt(e), {
      colorClasses: i,
      colorStyles: o,
      variantClasses: r
    } = Cn(e), {
      densityClasses: u
    } = st(e), {
      roundedClasses: c
    } = Oe(e), {
      sizeClasses: d,
      sizeStyles: f
    } = zn(e);
    return z(() => s(e.tag, {
      class: ["v-avatar", {
        "v-avatar--start": e.start,
        "v-avatar--end": e.end
      }, a.value, l.value, i.value, u.value, c.value, d.value, r.value, e.class],
      style: [o.value, f.value, e.style]
    }, {
      default: () => [t.default ? s(he, {
        key: "content-defaults",
        defaults: {
          VImg: {
            cover: !0,
            src: e.image
          },
          VIcon: {
            icon: e.icon
          }
        }
      }, {
        default: () => [t.default()]
      }) : e.image ? s(Ft, {
        key: "image",
        src: e.image,
        alt: "",
        cover: !0
      }, null) : e.icon ? s(Ve, {
        key: "icon",
        icon: e.icon
      }, null) : e.text, Ut(!1, "v-avatar")]
    })), {};
  }
}), Kf = M(v(v({
  text: String,
  onClick: Je()
}, te()), Se()), "VLabel"), Yn = N()({
  name: "VLabel",
  props: Kf(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    return z(() => {
      var a;
      return s("label", {
        class: ["v-label", {
          "v-label--clickable": !!e.onClick
        }, e.class],
        style: e.style,
        onClick: e.onClick
      }, [e.text, (a = t.default) == null ? void 0 : a.call(t)]);
    }), {};
  }
}), Es = Symbol.for("vuetify:selection-control-group"), Oi = M(v(v(v({
  color: String,
  disabled: {
    type: Boolean,
    default: null
  },
  defaultsTarget: String,
  error: Boolean,
  id: String,
  inline: Boolean,
  falseIcon: ve,
  trueIcon: ve,
  ripple: {
    type: [Boolean, Object],
    default: !0
  },
  multiple: {
    type: Boolean,
    default: null
  },
  name: String,
  readonly: {
    type: Boolean,
    default: null
  },
  modelValue: null,
  type: String,
  valueComparator: {
    type: Function,
    default: Lt
  }
}, te()), Ze()), Se()), "SelectionControlGroup"), qf = M(v({}, Oi({
  defaultsTarget: "VSelectionControl"
})), "VSelectionControlGroup"), Fs = N()({
  name: "VSelectionControlGroup",
  props: qf(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = oe(e, "modelValue"), l = Qe(), i = S(() => e.id || `v-selection-control-group-${l}`), o = S(() => e.name || i.value), r = /* @__PURE__ */ new Set();
    return Be(Es, {
      modelValue: a,
      forceUpdate: () => {
        r.forEach((u) => u());
      },
      onForceUpdate: (u) => {
        r.add(u), it(() => {
          r.delete(u);
        });
      }
    }), Ee({
      [e.defaultsTarget]: {
        color: $(e, "color"),
        disabled: $(e, "disabled"),
        density: $(e, "density"),
        error: $(e, "error"),
        inline: $(e, "inline"),
        modelValue: a,
        multiple: S(() => !!e.multiple || e.multiple == null && Array.isArray(a.value)),
        name: o,
        falseIcon: $(e, "falseIcon"),
        trueIcon: $(e, "trueIcon"),
        readonly: $(e, "readonly"),
        ripple: $(e, "ripple"),
        type: $(e, "type"),
        valueComparator: $(e, "valueComparator")
      }
    }), z(() => {
      var u;
      return s("div", {
        class: ["v-selection-control-group", {
          "v-selection-control-group--inline": e.inline
        }, e.class],
        style: e.style,
        role: e.type === "radio" ? "radiogroup" : void 0
      }, [(u = t.default) == null ? void 0 : u.call(t)]);
    }), {};
  }
}), ll = M(v(v({
  label: String,
  baseColor: String,
  trueValue: null,
  falseValue: null,
  value: null
}, te()), Oi()), "VSelectionControl");
function Xf(e) {
  const n = Ce(Es, void 0), {
    densityClasses: t
  } = st(e), a = oe(e, "modelValue"), l = S(() => e.trueValue !== void 0 ? e.trueValue : e.value !== void 0 ? e.value : !0), i = S(() => e.falseValue !== void 0 ? e.falseValue : !1), o = S(() => !!e.multiple || e.multiple == null && Array.isArray(a.value)), r = S({
    get() {
      const g = n ? n.modelValue.value : a.value;
      return o.value ? Me(g).some((y) => e.valueComparator(y, l.value)) : e.valueComparator(g, l.value);
    },
    set(g) {
      if (e.readonly) return;
      const y = g ? l.value : i.value;
      let b = y;
      o.value && (b = g ? [...Me(a.value), y] : Me(a.value).filter((h) => !e.valueComparator(h, l.value))), n ? n.modelValue.value = b : a.value = b;
    }
  }), {
    textColorClasses: u,
    textColorStyles: c
  } = tt(S(() => {
    if (!(e.error || e.disabled))
      return r.value ? e.color : e.baseColor;
  })), {
    backgroundColorClasses: d,
    backgroundColorStyles: f
  } = Le(S(() => r.value && !e.error && !e.disabled ? e.color : e.baseColor)), m = S(() => r.value ? e.trueIcon : e.falseIcon);
  return {
    group: n,
    densityClasses: t,
    trueValue: l,
    falseValue: i,
    model: r,
    textColorClasses: u,
    textColorStyles: c,
    backgroundColorClasses: d,
    backgroundColorStyles: f,
    icon: m
  };
}
const Yt = N()({
  name: "VSelectionControl",
  directives: {
    Ripple: qt
  },
  inheritAttrs: !1,
  props: ll(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      attrs: t,
      slots: a
    } = n;
    const {
      group: l,
      densityClasses: i,
      icon: o,
      model: r,
      textColorClasses: u,
      textColorStyles: c,
      backgroundColorClasses: d,
      backgroundColorStyles: f,
      trueValue: m
    } = Xf(e), g = Qe(), y = Z(!1), b = Z(!1), h = G(), k = S(() => e.id || `input-${g}`), C = S(() => !e.disabled && !e.readonly);
    l == null || l.onForceUpdate(() => {
      h.value && (h.value.checked = r.value);
    });
    function I(T) {
      C.value && (y.value = !0, En(T.target, ":focus-visible") !== !1 && (b.value = !0));
    }
    function A() {
      y.value = !1, b.value = !1;
    }
    function x(T) {
      T.stopPropagation();
    }
    function P(T) {
      if (!C.value) {
        h.value && (h.value.checked = r.value);
        return;
      }
      e.readonly && l && _e(() => l.forceUpdate()), r.value = T.target.checked;
    }
    return z(() => {
      var V, L, D;
      const T = a.label ? a.label({
        label: e.label,
        props: {
          for: k.value
        }
      }) : e.label, [w, _] = Gt(t), B = s("input", H({
        ref: h,
        checked: r.value,
        disabled: !!e.disabled,
        id: k.value,
        onBlur: A,
        onFocus: I,
        onInput: P,
        "aria-disabled": !!e.disabled,
        "aria-label": e.label,
        type: e.type,
        value: m.value,
        name: e.name,
        "aria-checked": e.type === "checkbox" ? r.value : void 0
      }, _), null);
      return s("div", H({
        class: ["v-selection-control", {
          "v-selection-control--dirty": r.value,
          "v-selection-control--disabled": e.disabled,
          "v-selection-control--error": e.error,
          "v-selection-control--focused": y.value,
          "v-selection-control--focus-visible": b.value,
          "v-selection-control--inline": e.inline
        }, i.value, e.class]
      }, w, {
        style: e.style
      }), [s("div", {
        class: ["v-selection-control__wrapper", u.value],
        style: c.value
      }, [(V = a.default) == null ? void 0 : V.call(a, {
        backgroundColorClasses: d,
        backgroundColorStyles: f
      }), pe(s("div", {
        class: ["v-selection-control__input"]
      }, [(D = (L = a.input) == null ? void 0 : L.call(a, {
        model: r,
        textColorClasses: u,
        textColorStyles: c,
        backgroundColorClasses: d,
        backgroundColorStyles: f,
        inputNode: B,
        icon: o.value,
        props: {
          onFocus: I,
          onBlur: A,
          id: k.value
        }
      })) != null ? D : s(re, null, [o.value && s(Ve, {
        key: "icon",
        icon: o.value
      }, null), B])]), [[mt("ripple"), e.ripple && [!e.disabled && !e.readonly, null, ["center", "circle"]]]])]), T && s(Yn, {
        for: k.value,
        onClick: x
      }, {
        default: () => [T]
      })]);
    }), {
      isFocused: y,
      input: h
    };
  }
}), $s = M(v({
  indeterminate: Boolean,
  indeterminateIcon: {
    type: ve,
    default: "$checkboxIndeterminate"
  }
}, ll({
  falseIcon: "$checkboxOff",
  trueIcon: "$checkboxOn"
})), "VCheckboxBtn"), $t = N()({
  name: "VCheckboxBtn",
  props: $s(),
  emits: {
    "update:modelValue": (e) => !0,
    "update:indeterminate": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = oe(e, "indeterminate"), l = oe(e, "modelValue");
    function i(u) {
      a.value && (a.value = !1);
    }
    const o = S(() => a.value ? e.indeterminateIcon : e.falseIcon), r = S(() => a.value ? e.indeterminateIcon : e.trueIcon);
    return z(() => {
      const u = We(Yt.filterProps(e), ["modelValue"]);
      return s(Yt, H(u, {
        modelValue: l.value,
        "onUpdate:modelValue": [(c) => l.value = c, i],
        class: ["v-checkbox-btn", e.class],
        style: e.style,
        type: "checkbox",
        falseIcon: o.value,
        trueIcon: r.value,
        "aria-checked": a.value ? "mixed" : void 0
      }), t);
    }), {};
  }
});
function Os(e) {
  const {
    t: n
  } = $e();
  function t(a) {
    var u;
    let {
      name: l
    } = a;
    const i = {
      prepend: "prependAction",
      prependInner: "prependAction",
      append: "appendAction",
      appendInner: "appendAction",
      clear: "clear"
    }[l], o = e[`onClick:${l}`], r = o && i ? n(`$vuetify.input.${i}`, (u = e.label) != null ? u : "") : void 0;
    return s(Ve, {
      icon: e[`${l}Icon`],
      "aria-label": r,
      onClick: o
    }, null);
  }
  return {
    InputIcon: t
  };
}
const Zf = M(v(v({
  active: Boolean,
  color: String,
  messages: {
    type: [Array, String],
    default: () => []
  }
}, te()), It({
  transition: {
    component: pi,
    leaveAbsolute: !0,
    group: !0
  }
})), "VMessages"), Rs = N()({
  name: "VMessages",
  props: Zf(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = S(() => Me(e.messages)), {
      textColorClasses: l,
      textColorStyles: i
    } = tt(S(() => e.color));
    return z(() => s(lt, {
      transition: e.transition,
      tag: "div",
      class: ["v-messages", l.value, e.class],
      style: [i.value, e.style],
      role: "alert",
      "aria-live": "polite"
    }, {
      default: () => [e.active && a.value.map((o, r) => s("div", {
        class: "v-messages__message",
        key: `${r}-${a.value}`
      }, [t.message ? t.message({
        message: o
      }) : o]))]
    })), {};
  }
}), ma = M({
  focused: Boolean,
  "onUpdate:focused": Je()
}, "focus");
function Nt(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Tt();
  const t = oe(e, "focused"), a = S(() => ({
    [`${n}--focused`]: t.value
  }));
  function l() {
    t.value = !0;
  }
  function i() {
    t.value = !1;
  }
  return {
    focusClasses: a,
    isFocused: t,
    focus: l,
    blur: i
  };
}
const Ns = Symbol.for("vuetify:form"), Jf = M({
  disabled: Boolean,
  fastFail: Boolean,
  readonly: Boolean,
  modelValue: {
    type: Boolean,
    default: null
  },
  validateOn: {
    type: String,
    default: "input"
  }
}, "form");
function Qf(e) {
  const n = oe(e, "modelValue"), t = S(() => e.disabled), a = S(() => e.readonly), l = Z(!1), i = G([]), o = G([]);
  function r() {
    return Ke(this, null, function* () {
      const d = [];
      let f = !0;
      o.value = [], l.value = !0;
      for (const m of i.value) {
        const g = yield m.validate();
        if (g.length > 0 && (f = !1, d.push({
          id: m.id,
          errorMessages: g
        })), !f && e.fastFail) break;
      }
      return o.value = d, l.value = !1, {
        valid: f,
        errors: o.value
      };
    });
  }
  function u() {
    i.value.forEach((d) => d.reset());
  }
  function c() {
    i.value.forEach((d) => d.resetValidation());
  }
  return Q(i, () => {
    let d = 0, f = 0;
    const m = [];
    for (const g of i.value)
      g.isValid === !1 ? (f++, m.push({
        id: g.id,
        errorMessages: g.errorMessages
      })) : g.isValid === !0 && d++;
    o.value = m, n.value = f > 0 ? !1 : d === i.value.length ? !0 : null;
  }, {
    deep: !0,
    flush: "post"
  }), Be(Ns, {
    register: (d) => {
      let {
        id: f,
        vm: m,
        validate: g,
        reset: y,
        resetValidation: b
      } = d;
      i.value.some((h) => h.id === f) && wt(`Duplicate input name "${f}"`), i.value.push({
        id: f,
        validate: g,
        reset: y,
        resetValidation: b,
        vm: Kc(m),
        isValid: null,
        errorMessages: []
      });
    },
    unregister: (d) => {
      i.value = i.value.filter((f) => f.id !== d);
    },
    update: (d, f, m) => {
      const g = i.value.find((y) => y.id === d);
      g && (g.isValid = f, g.errorMessages = m);
    },
    isDisabled: t,
    isReadonly: a,
    isValidating: l,
    isValid: n,
    items: i,
    validateOn: $(e, "validateOn")
  }), {
    errors: o,
    isDisabled: t,
    isReadonly: a,
    isValidating: l,
    isValid: n,
    items: i,
    validate: r,
    reset: u,
    resetValidation: c
  };
}
function il() {
  return Ce(Ns, null);
}
const Hs = M(v({
  disabled: {
    type: Boolean,
    default: null
  },
  error: Boolean,
  errorMessages: {
    type: [Array, String],
    default: () => []
  },
  maxErrors: {
    type: [Number, String],
    default: 1
  },
  name: String,
  label: String,
  readonly: {
    type: Boolean,
    default: null
  },
  rules: {
    type: Array,
    default: () => []
  },
  modelValue: null,
  validateOn: String,
  validationValue: null
}, ma()), "validation");
function zs(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Tt(), t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Qe();
  const a = oe(e, "modelValue"), l = S(() => e.validationValue === void 0 ? a.value : e.validationValue), i = il(), o = G([]), r = Z(!0), u = S(() => !!(Me(a.value === "" ? null : a.value).length || Me(l.value === "" ? null : l.value).length)), c = S(() => {
    var x;
    return !!((x = e.disabled) != null ? x : i != null && i.isDisabled.value);
  }), d = S(() => {
    var x;
    return !!((x = e.readonly) != null ? x : i != null && i.isReadonly.value);
  }), f = S(() => {
    var x;
    return (x = e.errorMessages) != null && x.length ? Me(e.errorMessages).concat(o.value).slice(0, Math.max(0, +e.maxErrors)) : o.value;
  }), m = S(() => {
    var T, w;
    let x = ((T = e.validateOn) != null ? T : i == null ? void 0 : i.validateOn.value) || "input";
    x === "lazy" && (x = "input lazy"), x === "eager" && (x = "input eager");
    const P = new Set((w = x == null ? void 0 : x.split(" ")) != null ? w : []);
    return {
      input: P.has("input"),
      blur: P.has("blur") || P.has("input") || P.has("invalid-input"),
      invalidInput: P.has("invalid-input"),
      lazy: P.has("lazy"),
      eager: P.has("eager")
    };
  }), g = S(() => {
    var x;
    return e.error || (x = e.errorMessages) != null && x.length ? !1 : e.rules.length ? r.value ? o.value.length || m.value.lazy ? null : !0 : !o.value.length : !0;
  }), y = Z(!1), b = S(() => ({
    [`${n}--error`]: g.value === !1,
    [`${n}--dirty`]: u.value,
    [`${n}--disabled`]: c.value,
    [`${n}--readonly`]: d.value
  })), h = Fe("validation"), k = S(() => {
    var x;
    return (x = e.name) != null ? x : ut(t);
  });
  Ar(() => {
    i == null || i.register({
      id: k.value,
      vm: h,
      validate: A,
      reset: C,
      resetValidation: I
    });
  }), ot(() => {
    i == null || i.unregister(k.value);
  }), rt(() => Ke(this, null, function* () {
    m.value.lazy || (yield A(!m.value.eager)), i == null || i.update(k.value, g.value, f.value);
  })), ct(() => m.value.input || m.value.invalidInput && g.value === !1, () => {
    Q(l, () => {
      if (l.value != null)
        A();
      else if (e.focused) {
        const x = Q(() => e.focused, (P) => {
          P || A(), x();
        });
      }
    });
  }), ct(() => m.value.blur, () => {
    Q(() => e.focused, (x) => {
      x || A();
    });
  }), Q([g, f], () => {
    i == null || i.update(k.value, g.value, f.value);
  });
  function C() {
    return Ke(this, null, function* () {
      a.value = null, yield _e(), yield I();
    });
  }
  function I() {
    return Ke(this, null, function* () {
      r.value = !0, m.value.lazy ? o.value = [] : yield A(!m.value.eager);
    });
  }
  function A() {
    return Ke(this, arguments, function* () {
      var T;
      let x = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
      const P = [];
      y.value = !0;
      for (const w of e.rules) {
        if (P.length >= +((T = e.maxErrors) != null ? T : 1))
          break;
        const B = yield (typeof w == "function" ? w : () => w)(l.value);
        if (B !== !0) {
          if (B !== !1 && typeof B != "string") {
            console.warn(`${B} is not a valid value. Rule functions must return boolean true or a string.`);
            continue;
          }
          P.push(B || "");
        }
      }
      return o.value = P, y.value = !1, r.value = x, o.value;
    });
  }
  return {
    errorMessages: f,
    isDirty: u,
    isDisabled: c,
    isReadonly: d,
    isPristine: r,
    isValid: g,
    isValidating: y,
    reset: C,
    resetValidation: I,
    validate: A,
    validationClasses: b
  };
}
const Ht = M(v(v(v(v(v({
  id: String,
  appendIcon: ve,
  centerAffix: {
    type: Boolean,
    default: !0
  },
  prependIcon: ve,
  hideDetails: [Boolean, String],
  hideSpinButtons: Boolean,
  hint: String,
  persistentHint: Boolean,
  messages: {
    type: [Array, String],
    default: () => []
  },
  direction: {
    type: String,
    default: "horizontal",
    validator: (e) => ["horizontal", "vertical"].includes(e)
  },
  "onClick:prepend": Je(),
  "onClick:append": Je()
}, te()), Ze()), Wa(Ye(), ["maxWidth", "minWidth", "width"])), Se()), Hs()), "VInput"), nt = N()({
  name: "VInput",
  props: v({}, Ht()),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      attrs: t,
      slots: a,
      emit: l
    } = n;
    const {
      densityClasses: i
    } = st(e), {
      dimensionStyles: o
    } = Ge(e), {
      themeClasses: r
    } = Pe(e), {
      rtlClasses: u
    } = je(), {
      InputIcon: c
    } = Os(e), d = Qe(), f = S(() => e.id || `input-${d}`), m = S(() => `${f.value}-messages`), {
      errorMessages: g,
      isDirty: y,
      isDisabled: b,
      isReadonly: h,
      isPristine: k,
      isValid: C,
      isValidating: I,
      reset: A,
      resetValidation: x,
      validate: P,
      validationClasses: T
    } = zs(e, "v-input", f), w = S(() => ({
      id: f,
      messagesId: m,
      isDirty: y,
      isDisabled: b,
      isReadonly: h,
      isPristine: k,
      isValid: C,
      isValidating: I,
      reset: A,
      resetValidation: x,
      validate: P
    })), _ = S(() => {
      var B;
      return (B = e.errorMessages) != null && B.length || !k.value && g.value.length ? g.value : e.hint && (e.persistentHint || e.focused) ? e.hint : e.messages;
    });
    return z(() => {
      var p, R, U, q;
      const B = !!(a.prepend || e.prependIcon), V = !!(a.append || e.appendIcon), L = _.value.length > 0, D = !e.hideDetails || e.hideDetails === "auto" && (L || !!a.details);
      return s("div", {
        class: ["v-input", `v-input--${e.direction}`, {
          "v-input--center-affix": e.centerAffix,
          "v-input--hide-spin-buttons": e.hideSpinButtons
        }, i.value, r.value, u.value, T.value, e.class],
        style: [o.value, e.style]
      }, [B && s("div", {
        key: "prepend",
        class: "v-input__prepend"
      }, [(p = a.prepend) == null ? void 0 : p.call(a, w.value), e.prependIcon && s(c, {
        key: "prepend-icon",
        name: "prepend"
      }, null)]), a.default && s("div", {
        class: "v-input__control"
      }, [(R = a.default) == null ? void 0 : R.call(a, w.value)]), V && s("div", {
        key: "append",
        class: "v-input__append"
      }, [e.appendIcon && s(c, {
        key: "append-icon",
        name: "append"
      }, null), (U = a.append) == null ? void 0 : U.call(a, w.value)]), D && s("div", {
        class: "v-input__details"
      }, [s(Rs, {
        id: m.value,
        active: L,
        messages: _.value
      }, {
        message: a.message
      }), (q = a.details) == null ? void 0 : q.call(a, w.value)])]);
    }), {
      reset: A,
      resetValidation: x,
      validate: P,
      isValid: C,
      errorMessages: g
    };
  }
}), em = M(v(v({}, Ht()), We($s(), ["inline"])), "VCheckbox"), tm = N()({
  name: "VCheckbox",
  inheritAttrs: !1,
  props: em(),
  emits: {
    "update:modelValue": (e) => !0,
    "update:focused": (e) => !0
  },
  setup(e, n) {
    let {
      attrs: t,
      slots: a
    } = n;
    const l = oe(e, "modelValue"), {
      isFocused: i,
      focus: o,
      blur: r
    } = Nt(e), u = Qe(), c = S(() => e.id || `checkbox-${u}`);
    return z(() => {
      const [d, f] = Gt(t), m = nt.filterProps(e), g = $t.filterProps(e);
      return s(nt, H({
        class: ["v-checkbox", e.class]
      }, d, m, {
        modelValue: l.value,
        "onUpdate:modelValue": (y) => l.value = y,
        id: c.value,
        focused: i.value,
        style: e.style
      }), J(v({}, a), {
        default: (y) => {
          let {
            id: b,
            messagesId: h,
            isDisabled: k,
            isReadonly: C,
            isValid: I
          } = y;
          return s($t, H(g, {
            id: b.value,
            "aria-describedby": h.value,
            disabled: k.value,
            readonly: C.value
          }, f, {
            error: I.value === !1,
            modelValue: l.value,
            "onUpdate:modelValue": (A) => l.value = A,
            onFocus: o,
            onBlur: r
          }), a);
        }
      }));
    }), {};
  }
});
function nm(e) {
  let {
    selectedElement: n,
    containerElement: t,
    isRtl: a,
    isHorizontal: l
  } = e;
  const i = ia(l, t), o = Ws(l, a, t), r = ia(l, n), u = js(l, n), c = r * 0.4;
  return o > u ? u - c : o + i < u + r ? u - i + r + c : o;
}
function am(e) {
  let {
    selectedElement: n,
    containerElement: t,
    isHorizontal: a
  } = e;
  const l = ia(a, t), i = js(a, n), o = ia(a, n);
  return i - l / 2 + o / 2;
}
function rr(e, n) {
  const t = e ? "scrollWidth" : "scrollHeight";
  return (n == null ? void 0 : n[t]) || 0;
}
function lm(e, n) {
  const t = e ? "clientWidth" : "clientHeight";
  return (n == null ? void 0 : n[t]) || 0;
}
function Ws(e, n, t) {
  if (!t)
    return 0;
  const {
    scrollLeft: a,
    offsetWidth: l,
    scrollWidth: i
  } = t;
  return e ? n ? i - l + a : a : t.scrollTop;
}
function ia(e, n) {
  const t = e ? "offsetWidth" : "offsetHeight";
  return (n == null ? void 0 : n[t]) || 0;
}
function js(e, n) {
  const t = e ? "offsetLeft" : "offsetTop";
  return (n == null ? void 0 : n[t]) || 0;
}
const Ys = Symbol.for("vuetify:v-slide-group"), Ri = M(v(v(v(v({
  centerActive: Boolean,
  direction: {
    type: String,
    default: "horizontal"
  },
  symbol: {
    type: null,
    default: Ys
  },
  nextIcon: {
    type: ve,
    default: "$next"
  },
  prevIcon: {
    type: ve,
    default: "$prev"
  },
  showArrows: {
    type: [Boolean, String],
    validator: (e) => typeof e == "boolean" || ["always", "desktop", "mobile"].includes(e)
  }
}, te()), yn({
  mobile: null
})), me()), xn({
  selectedClass: "v-slide-group-item--active"
})), "VSlideGroup"), oa = N()({
  name: "VSlideGroup",
  props: Ri(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      isRtl: a
    } = je(), {
      displayClasses: l,
      mobile: i
    } = ht(e), o = Kt(e, e.symbol), r = Z(!1), u = Z(0), c = Z(0), d = Z(0), f = S(() => e.direction === "horizontal"), {
      resizeRef: m,
      contentRect: g
    } = Vt(), {
      resizeRef: y,
      contentRect: b
    } = Vt(), h = cs(), k = S(() => ({
      container: m.el,
      duration: 200,
      easing: "easeOutQuart"
    })), C = S(() => o.selected.value.length ? o.items.value.findIndex((F) => F.id === o.selected.value[0]) : -1), I = S(() => o.selected.value.length ? o.items.value.findIndex((F) => F.id === o.selected.value[o.selected.value.length - 1]) : -1);
    if (Ie) {
      let F = -1;
      Q(() => [o.selected.value, g.value, b.value, f.value], () => {
        cancelAnimationFrame(F), F = requestAnimationFrame(() => {
          if (g.value && b.value) {
            const O = f.value ? "width" : "height";
            c.value = g.value[O], d.value = b.value[O], r.value = c.value + 1 < d.value;
          }
          if (C.value >= 0 && y.el) {
            const O = y.el.children[I.value];
            x(O, e.centerActive);
          }
        });
      });
    }
    const A = Z(!1);
    function x(F, O) {
      let Y = 0;
      O ? Y = am({
        containerElement: m.el,
        isHorizontal: f.value,
        selectedElement: F
      }) : Y = nm({
        containerElement: m.el,
        isHorizontal: f.value,
        isRtl: a.value,
        selectedElement: F
      }), P(Y);
    }
    function P(F) {
      if (!Ie || !m.el) return;
      const O = ia(f.value, m.el), Y = Ws(f.value, a.value, m.el);
      if (!(rr(f.value, m.el) <= O || // Prevent scrolling by only a couple of pixels, which doesn't look smooth
      Math.abs(F - Y) < 16)) {
        if (f.value && a.value && m.el) {
          const {
            scrollWidth: ne,
            offsetWidth: ue
          } = m.el;
          F = ne - ue - F;
        }
        f.value ? h.horizontal(F, k.value) : h(F, k.value);
      }
    }
    function T(F) {
      const {
        scrollTop: O,
        scrollLeft: Y
      } = F.target;
      u.value = f.value ? Y : O;
    }
    function w(F) {
      if (A.value = !0, !(!r.value || !y.el)) {
        for (const O of F.composedPath())
          for (const Y of y.el.children)
            if (Y === O) {
              x(Y);
              return;
            }
      }
    }
    function _(F) {
      A.value = !1;
    }
    let B = !1;
    function V(F) {
      var O;
      !B && !A.value && !(F.relatedTarget && ((O = y.el) != null && O.contains(F.relatedTarget))) && p(), B = !1;
    }
    function L() {
      B = !0;
    }
    function D(F) {
      if (!y.el) return;
      function O(Y) {
        F.preventDefault(), p(Y);
      }
      f.value ? F.key === "ArrowRight" ? O(a.value ? "prev" : "next") : F.key === "ArrowLeft" && O(a.value ? "next" : "prev") : F.key === "ArrowDown" ? O("next") : F.key === "ArrowUp" && O("prev"), F.key === "Home" ? O("first") : F.key === "End" && O("last");
    }
    function p(F) {
      var Y, ie;
      if (!y.el) return;
      let O;
      if (!F)
        O = Zn(y.el)[0];
      else if (F === "next") {
        if (O = (Y = y.el.querySelector(":focus")) == null ? void 0 : Y.nextElementSibling, !O) return p("first");
      } else if (F === "prev") {
        if (O = (ie = y.el.querySelector(":focus")) == null ? void 0 : ie.previousElementSibling, !O) return p("last");
      } else F === "first" ? O = y.el.firstElementChild : F === "last" && (O = y.el.lastElementChild);
      O && O.focus({
        preventScroll: !0
      });
    }
    function R(F) {
      const O = f.value && a.value ? -1 : 1, Y = (F === "prev" ? -O : O) * c.value;
      let ie = u.value + Y;
      if (f.value && a.value && m.el) {
        const {
          scrollWidth: ne,
          offsetWidth: ue
        } = m.el;
        ie += ne - ue;
      }
      P(ie);
    }
    const U = S(() => ({
      next: o.next,
      prev: o.prev,
      select: o.select,
      isSelected: o.isSelected
    })), q = S(() => {
      switch (e.showArrows) {
        case "always":
          return !0;
        case "desktop":
          return !i.value;
        case !0:
          return r.value || Math.abs(u.value) > 0;
        case "mobile":
          return i.value || r.value || Math.abs(u.value) > 0;
        default:
          return !i.value && (r.value || Math.abs(u.value) > 0);
      }
    }), K = S(() => Math.abs(u.value) > 1), E = S(() => {
      if (!m.value) return !1;
      const F = rr(f.value, m.el), O = lm(f.value, m.el);
      return F - O - Math.abs(u.value) > 1;
    });
    return z(() => s(e.tag, {
      class: ["v-slide-group", {
        "v-slide-group--vertical": !f.value,
        "v-slide-group--has-affixes": q.value,
        "v-slide-group--is-overflowing": r.value
      }, l.value, e.class],
      style: e.style,
      tabindex: A.value || o.selected.value.length ? -1 : 0,
      onFocus: V
    }, {
      default: () => {
        var F, O, Y, ie, ne;
        return [q.value && s("div", {
          key: "prev",
          class: ["v-slide-group__prev", {
            "v-slide-group__prev--disabled": !K.value
          }],
          onMousedown: L,
          onClick: () => K.value && R("prev")
        }, [(O = (F = t.prev) == null ? void 0 : F.call(t, U.value)) != null ? O : s(na, null, {
          default: () => [s(Ve, {
            icon: a.value ? e.nextIcon : e.prevIcon
          }, null)]
        })]), s("div", {
          key: "container",
          ref: m,
          class: "v-slide-group__container",
          onScroll: T
        }, [s("div", {
          ref: y,
          class: "v-slide-group__content",
          onFocusin: w,
          onFocusout: _,
          onKeydown: D
        }, [(Y = t.default) == null ? void 0 : Y.call(t, U.value)])]), q.value && s("div", {
          key: "next",
          class: ["v-slide-group__next", {
            "v-slide-group__next--disabled": !E.value
          }],
          onMousedown: L,
          onClick: () => E.value && R("next")
        }, [(ne = (ie = t.next) == null ? void 0 : ie.call(t, U.value)) != null ? ne : s(na, null, {
          default: () => [s(Ve, {
            icon: a.value ? e.prevIcon : e.nextIcon
          }, null)]
        })])];
      }
    })), {
      selected: o.selected,
      scrollTo: R,
      scrollOffset: u,
      focus: p,
      hasPrev: K,
      hasNext: E
    };
  }
}), Gs = Symbol.for("vuetify:v-chip-group"), im = M(v(v(v(v(v(v({
  column: Boolean,
  filter: Boolean,
  valueComparator: {
    type: Function,
    default: Lt
  }
}, Ri()), te()), xn({
  selectedClass: "v-chip--selected"
})), me()), Se()), Ct({
  variant: "tonal"
})), "VChipGroup"), om = N()({
  name: "VChipGroup",
  props: im(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      themeClasses: a
    } = Pe(e), {
      isSelected: l,
      select: i,
      next: o,
      prev: r,
      selected: u
    } = Kt(e, Gs);
    return Ee({
      VChip: {
        color: $(e, "color"),
        disabled: $(e, "disabled"),
        filter: $(e, "filter"),
        variant: $(e, "variant")
      }
    }), z(() => {
      const c = oa.filterProps(e);
      return s(oa, H(c, {
        class: ["v-chip-group", {
          "v-chip-group--column": e.column
        }, a.value, e.class],
        style: e.style
      }), {
        default: () => {
          var d;
          return [(d = t.default) == null ? void 0 : d.call(t, {
            isSelected: l,
            select: i,
            next: o,
            prev: r,
            selected: u.value
          })];
        }
      });
    }), {};
  }
}), rm = M(v(v(v(v(v(v(v(v(v(v(v({
  activeClass: String,
  appendAvatar: String,
  appendIcon: ve,
  closable: Boolean,
  closeIcon: {
    type: ve,
    default: "$delete"
  },
  closeLabel: {
    type: String,
    default: "$vuetify.close"
  },
  draggable: Boolean,
  filter: Boolean,
  filterIcon: {
    type: String,
    default: "$complete"
  },
  label: Boolean,
  link: {
    type: Boolean,
    default: void 0
  },
  pill: Boolean,
  prependAvatar: String,
  prependIcon: ve,
  ripple: {
    type: [Boolean, Object],
    default: !0
  },
  text: String,
  modelValue: {
    type: Boolean,
    default: !0
  },
  onClick: Je(),
  onClickOnce: Je()
}, vt()), te()), Ze()), Xe()), wn()), De()), fa()), Dt()), me({
  tag: "span"
})), Se()), Ct({
  variant: "tonal"
})), "VChip"), Gn = N()({
  name: "VChip",
  directives: {
    Ripple: qt
  },
  props: rm(),
  emits: {
    "click:close": (e) => !0,
    "update:modelValue": (e) => !0,
    "group:selected": (e) => !0,
    click: (e) => !0
  },
  setup(e, n) {
    let {
      attrs: t,
      emit: a,
      slots: l
    } = n;
    const {
      t: i
    } = $e(), {
      borderClasses: o
    } = bt(e), {
      colorClasses: r,
      colorStyles: u,
      variantClasses: c
    } = Cn(e), {
      densityClasses: d
    } = st(e), {
      elevationClasses: f
    } = et(e), {
      roundedClasses: m
    } = Oe(e), {
      sizeClasses: g
    } = zn(e), {
      themeClasses: y
    } = Pe(e), b = oe(e, "modelValue"), h = Vn(e, Gs, !1), k = va(e, t), C = S(() => e.link !== !1 && k.isLink.value), I = S(() => !e.disabled && e.link !== !1 && (!!h || e.link || k.isClickable.value)), A = S(() => ({
      "aria-label": i(e.closeLabel),
      onClick(T) {
        T.preventDefault(), T.stopPropagation(), b.value = !1, a("click:close", T);
      }
    }));
    function x(T) {
      var w;
      a("click", T), I.value && ((w = k.navigate) == null || w.call(k, T), h == null || h.toggle());
    }
    function P(T) {
      (T.key === "Enter" || T.key === " ") && (T.preventDefault(), x(T));
    }
    return () => {
      const T = k.isLink.value ? "a" : e.tag, w = !!(e.appendIcon || e.appendAvatar), _ = !!(w || l.append), B = !!(l.close || e.closable), V = !!(l.filter || e.filter) && h, L = !!(e.prependIcon || e.prependAvatar), D = !!(L || l.prepend), p = !h || h.isSelected.value;
      return b.value && pe(s(T, H({
        class: ["v-chip", {
          "v-chip--disabled": e.disabled,
          "v-chip--label": e.label,
          "v-chip--link": I.value,
          "v-chip--filter": V,
          "v-chip--pill": e.pill
        }, y.value, o.value, p ? r.value : void 0, d.value, f.value, m.value, g.value, c.value, h == null ? void 0 : h.selectedClass.value, e.class],
        style: [p ? u.value : void 0, e.style],
        disabled: e.disabled || void 0,
        draggable: e.draggable,
        tabindex: I.value ? 0 : void 0,
        onClick: x,
        onKeydown: I.value && !C.value && P
      }, k.linkProps), {
        default: () => {
          var R, U;
          return [Ut(I.value, "v-chip"), V && s(Ei, {
            key: "filter"
          }, {
            default: () => [pe(s("div", {
              class: "v-chip__filter"
            }, [l.filter ? s(he, {
              key: "filter-defaults",
              disabled: !e.filterIcon,
              defaults: {
                VIcon: {
                  icon: e.filterIcon
                }
              }
            }, l.filter) : s(Ve, {
              key: "filter-icon",
              icon: e.filterIcon
            }, null)]), [[Pt, h.isSelected.value]])]
          }), D && s("div", {
            key: "prepend",
            class: "v-chip__prepend"
          }, [l.prepend ? s(he, {
            key: "prepend-defaults",
            disabled: !L,
            defaults: {
              VAvatar: {
                image: e.prependAvatar,
                start: !0
              },
              VIcon: {
                icon: e.prependIcon,
                start: !0
              }
            }
          }, l.prepend) : s(re, null, [e.prependIcon && s(Ve, {
            key: "prepend-icon",
            icon: e.prependIcon,
            start: !0
          }, null), e.prependAvatar && s(kt, {
            key: "prepend-avatar",
            image: e.prependAvatar,
            start: !0
          }, null)])]), s("div", {
            class: "v-chip__content",
            "data-no-activator": ""
          }, [(U = (R = l.default) == null ? void 0 : R.call(l, {
            isSelected: h == null ? void 0 : h.isSelected.value,
            selectedClass: h == null ? void 0 : h.selectedClass.value,
            select: h == null ? void 0 : h.select,
            toggle: h == null ? void 0 : h.toggle,
            value: h == null ? void 0 : h.value.value,
            disabled: e.disabled
          })) != null ? U : e.text]), _ && s("div", {
            key: "append",
            class: "v-chip__append"
          }, [l.append ? s(he, {
            key: "append-defaults",
            disabled: !w,
            defaults: {
              VAvatar: {
                end: !0,
                image: e.appendAvatar
              },
              VIcon: {
                end: !0,
                icon: e.appendIcon
              }
            }
          }, l.append) : s(re, null, [e.appendIcon && s(Ve, {
            key: "append-icon",
            end: !0,
            icon: e.appendIcon
          }, null), e.appendAvatar && s(kt, {
            key: "append-avatar",
            end: !0,
            image: e.appendAvatar
          }, null)])]), B && s("button", H({
            key: "close",
            class: "v-chip__close",
            type: "button"
          }, A.value), [l.close ? s(he, {
            key: "close-defaults",
            defaults: {
              VIcon: {
                icon: e.closeIcon,
                size: "x-small"
              }
            }
          }, l.close) : s(Ve, {
            key: "close-icon",
            icon: e.closeIcon,
            size: "x-small"
          }, null)])];
        }
      }), [[mt("ripple"), I.value && e.ripple, null]]);
    };
  }
}), Kl = Symbol.for("vuetify:list");
function Us() {
  const e = Ce(Kl, {
    hasPrepend: Z(!1),
    updateHasPrepend: () => null
  }), n = {
    hasPrepend: Z(!1),
    updateHasPrepend: (t) => {
      t && (n.hasPrepend.value = t);
    }
  };
  return Be(Kl, n), e;
}
function Ks() {
  return Ce(Kl, null);
}
const Ni = (e) => {
  const n = {
    activate: (t) => {
      let {
        id: a,
        value: l,
        activated: i
      } = t;
      return a = ze(a), e && !l && i.size === 1 && i.has(a) || (l ? i.add(a) : i.delete(a)), i;
    },
    in: (t, a, l) => {
      let i = /* @__PURE__ */ new Set();
      if (t != null)
        for (const o of Me(t))
          i = n.activate({
            id: o,
            value: !0,
            activated: new Set(i),
            children: a,
            parents: l
          });
      return i;
    },
    out: (t) => Array.from(t)
  };
  return n;
}, qs = (e) => {
  const n = Ni(e);
  return {
    activate: (a) => {
      let u = a, {
        activated: l,
        id: i
      } = u, o = He(u, [
        "activated",
        "id"
      ]);
      i = ze(i);
      const r = l.has(i) ? /* @__PURE__ */ new Set([i]) : /* @__PURE__ */ new Set();
      return n.activate(J(v({}, o), {
        id: i,
        activated: r
      }));
    },
    in: (a, l, i) => {
      let o = /* @__PURE__ */ new Set();
      if (a != null) {
        const r = Me(a);
        r.length && (o = n.in(r.slice(0, 1), l, i));
      }
      return o;
    },
    out: (a, l, i) => n.out(a, l, i)
  };
}, sm = (e) => {
  const n = Ni(e);
  return {
    activate: (a) => {
      let u = a, {
        id: l,
        activated: i,
        children: o
      } = u, r = He(u, [
        "id",
        "activated",
        "children"
      ]);
      return l = ze(l), o.has(l) ? i : n.activate(v({
        id: l,
        activated: i,
        children: o
      }, r));
    },
    in: n.in,
    out: n.out
  };
}, um = (e) => {
  const n = qs(e);
  return {
    activate: (a) => {
      let u = a, {
        id: l,
        activated: i,
        children: o
      } = u, r = He(u, [
        "id",
        "activated",
        "children"
      ]);
      return l = ze(l), o.has(l) ? i : n.activate(v({
        id: l,
        activated: i,
        children: o
      }, r));
    },
    in: n.in,
    out: n.out
  };
}, cm = {
  open: (e) => {
    let {
      id: n,
      value: t,
      opened: a,
      parents: l
    } = e;
    if (t) {
      const i = /* @__PURE__ */ new Set();
      i.add(n);
      let o = l.get(n);
      for (; o != null; )
        i.add(o), o = l.get(o);
      return i;
    } else
      return a.delete(n), a;
  },
  select: () => null
}, Xs = {
  open: (e) => {
    let {
      id: n,
      value: t,
      opened: a,
      parents: l
    } = e;
    if (t) {
      let i = l.get(n);
      for (a.add(n); i != null && i !== n; )
        a.add(i), i = l.get(i);
      return a;
    } else
      a.delete(n);
    return a;
  },
  select: () => null
}, dm = {
  open: Xs.open,
  select: (e) => {
    let {
      id: n,
      value: t,
      opened: a,
      parents: l
    } = e;
    if (!t) return a;
    const i = [];
    let o = l.get(n);
    for (; o != null; )
      i.push(o), o = l.get(o);
    return new Set(i);
  }
}, Hi = (e) => {
  const n = {
    select: (t) => {
      let {
        id: a,
        value: l,
        selected: i
      } = t;
      if (a = ze(a), e && !l) {
        const o = Array.from(i.entries()).reduce((r, u) => {
          let [c, d] = u;
          return d === "on" && r.push(c), r;
        }, []);
        if (o.length === 1 && o[0] === a) return i;
      }
      return i.set(a, l ? "on" : "off"), i;
    },
    in: (t, a, l) => {
      let i = /* @__PURE__ */ new Map();
      for (const o of t || [])
        i = n.select({
          id: o,
          value: !0,
          selected: new Map(i),
          children: a,
          parents: l
        });
      return i;
    },
    out: (t) => {
      const a = [];
      for (const [l, i] of t.entries())
        i === "on" && a.push(l);
      return a;
    }
  };
  return n;
}, Zs = (e) => {
  const n = Hi(e);
  return {
    select: (a) => {
      let u = a, {
        selected: l,
        id: i
      } = u, o = He(u, [
        "selected",
        "id"
      ]);
      i = ze(i);
      const r = l.has(i) ? /* @__PURE__ */ new Map([[i, l.get(i)]]) : /* @__PURE__ */ new Map();
      return n.select(J(v({}, o), {
        id: i,
        selected: r
      }));
    },
    in: (a, l, i) => {
      let o = /* @__PURE__ */ new Map();
      return a != null && a.length && (o = n.in(a.slice(0, 1), l, i)), o;
    },
    out: (a, l, i) => n.out(a, l, i)
  };
}, vm = (e) => {
  const n = Hi(e);
  return {
    select: (a) => {
      let u = a, {
        id: l,
        selected: i,
        children: o
      } = u, r = He(u, [
        "id",
        "selected",
        "children"
      ]);
      return l = ze(l), o.has(l) ? i : n.select(v({
        id: l,
        selected: i,
        children: o
      }, r));
    },
    in: n.in,
    out: n.out
  };
}, fm = (e) => {
  const n = Zs(e);
  return {
    select: (a) => {
      let u = a, {
        id: l,
        selected: i,
        children: o
      } = u, r = He(u, [
        "id",
        "selected",
        "children"
      ]);
      return l = ze(l), o.has(l) ? i : n.select(v({
        id: l,
        selected: i,
        children: o
      }, r));
    },
    in: n.in,
    out: n.out
  };
}, mm = (e) => {
  const n = {
    select: (t) => {
      let {
        id: a,
        value: l,
        selected: i,
        children: o,
        parents: r
      } = t;
      a = ze(a);
      const u = new Map(i), c = [a];
      for (; c.length; ) {
        const f = c.shift();
        i.set(ze(f), l ? "on" : "off"), o.has(f) && c.push(...o.get(f));
      }
      let d = ze(r.get(a));
      for (; d; ) {
        const f = o.get(d), m = f.every((y) => i.get(ze(y)) === "on"), g = f.every((y) => !i.has(ze(y)) || i.get(ze(y)) === "off");
        i.set(d, m ? "on" : g ? "off" : "indeterminate"), d = ze(r.get(d));
      }
      return e && !l && Array.from(i.entries()).reduce((m, g) => {
        let [y, b] = g;
        return b === "on" && m.push(y), m;
      }, []).length === 0 ? u : i;
    },
    in: (t, a, l) => {
      let i = /* @__PURE__ */ new Map();
      for (const o of t || [])
        i = n.select({
          id: o,
          value: !0,
          selected: new Map(i),
          children: a,
          parents: l
        });
      return i;
    },
    out: (t, a) => {
      const l = [];
      for (const [i, o] of t.entries())
        o === "on" && !a.has(i) && l.push(i);
      return l;
    }
  };
  return n;
}, ra = Symbol.for("vuetify:nested"), Js = {
  id: Z(),
  root: {
    register: () => null,
    unregister: () => null,
    parents: G(/* @__PURE__ */ new Map()),
    children: G(/* @__PURE__ */ new Map()),
    open: () => null,
    openOnSelect: () => null,
    activate: () => null,
    select: () => null,
    activatable: G(!1),
    selectable: G(!1),
    opened: G(/* @__PURE__ */ new Set()),
    activated: G(/* @__PURE__ */ new Set()),
    selected: G(/* @__PURE__ */ new Map()),
    selectedValues: G([]),
    getPath: () => []
  }
}, gm = M({
  activatable: Boolean,
  selectable: Boolean,
  activeStrategy: [String, Function, Object],
  selectStrategy: [String, Function, Object],
  openStrategy: [String, Object],
  opened: null,
  activated: null,
  selected: null,
  mandatory: Boolean
}, "nested"), hm = (e) => {
  let n = !1;
  const t = G(/* @__PURE__ */ new Map()), a = G(/* @__PURE__ */ new Map()), l = oe(e, "opened", e.opened, (y) => new Set(y), (y) => [...y.values()]), i = S(() => {
    if (typeof e.activeStrategy == "object") return e.activeStrategy;
    if (typeof e.activeStrategy == "function") return e.activeStrategy(e.mandatory);
    switch (e.activeStrategy) {
      case "leaf":
        return sm(e.mandatory);
      case "single-leaf":
        return um(e.mandatory);
      case "independent":
        return Ni(e.mandatory);
      case "single-independent":
      default:
        return qs(e.mandatory);
    }
  }), o = S(() => {
    if (typeof e.selectStrategy == "object") return e.selectStrategy;
    if (typeof e.selectStrategy == "function") return e.selectStrategy(e.mandatory);
    switch (e.selectStrategy) {
      case "single-leaf":
        return fm(e.mandatory);
      case "leaf":
        return vm(e.mandatory);
      case "independent":
        return Hi(e.mandatory);
      case "single-independent":
        return Zs(e.mandatory);
      case "classic":
      default:
        return mm(e.mandatory);
    }
  }), r = S(() => {
    if (typeof e.openStrategy == "object") return e.openStrategy;
    switch (e.openStrategy) {
      case "list":
        return dm;
      case "single":
        return cm;
      case "multiple":
      default:
        return Xs;
    }
  }), u = oe(e, "activated", e.activated, (y) => i.value.in(y, t.value, a.value), (y) => i.value.out(y, t.value, a.value)), c = oe(e, "selected", e.selected, (y) => o.value.in(y, t.value, a.value), (y) => o.value.out(y, t.value, a.value));
  ot(() => {
    n = !0;
  });
  function d(y) {
    const b = [];
    let h = y;
    for (; h != null; )
      b.unshift(h), h = a.value.get(h);
    return b;
  }
  const f = Fe("nested"), m = /* @__PURE__ */ new Set(), g = {
    id: Z(),
    root: {
      opened: l,
      activatable: $(e, "activatable"),
      selectable: $(e, "selectable"),
      activated: u,
      selected: c,
      selectedValues: S(() => {
        const y = [];
        for (const [b, h] of c.value.entries())
          h === "on" && y.push(b);
        return y;
      }),
      register: (y, b, h) => {
        if (m.has(y)) {
          const k = d(y).join(" -> "), C = d(b).concat(y).join(" -> ");
          Jn(`Multiple nodes with the same ID
	${k}
	${C}`);
          return;
        } else
          m.add(y);
        b && y !== b && a.value.set(y, b), h && t.value.set(y, []), b != null && t.value.set(b, [...t.value.get(b) || [], y]);
      },
      unregister: (y) => {
        var h;
        if (n) return;
        m.delete(y), t.value.delete(y);
        const b = a.value.get(y);
        if (b) {
          const k = (h = t.value.get(b)) != null ? h : [];
          t.value.set(b, k.filter((C) => C !== y));
        }
        a.value.delete(y);
      },
      open: (y, b, h) => {
        f.emit("click:open", {
          id: y,
          value: b,
          path: d(y),
          event: h
        });
        const k = r.value.open({
          id: y,
          value: b,
          opened: new Set(l.value),
          children: t.value,
          parents: a.value,
          event: h
        });
        k && (l.value = k);
      },
      openOnSelect: (y, b, h) => {
        const k = r.value.select({
          id: y,
          value: b,
          selected: new Map(c.value),
          opened: new Set(l.value),
          children: t.value,
          parents: a.value,
          event: h
        });
        k && (l.value = k);
      },
      select: (y, b, h) => {
        f.emit("click:select", {
          id: y,
          value: b,
          path: d(y),
          event: h
        });
        const k = o.value.select({
          id: y,
          value: b,
          selected: new Map(c.value),
          children: t.value,
          parents: a.value,
          event: h
        });
        k && (c.value = k), g.root.openOnSelect(y, b, h);
      },
      activate: (y, b, h) => {
        if (!e.activatable)
          return g.root.select(y, !0, h);
        f.emit("click:activate", {
          id: y,
          value: b,
          path: d(y),
          event: h
        });
        const k = i.value.activate({
          id: y,
          value: b,
          activated: new Set(u.value),
          children: t.value,
          parents: a.value,
          event: h
        });
        k && (u.value = k);
      },
      children: t,
      parents: a,
      getPath: d
    }
  };
  return Be(ra, g), g.root;
}, Qs = (e, n) => {
  const t = Ce(ra, Js), a = Symbol(Qe()), l = S(() => e.value !== void 0 ? e.value : a), i = J(v({}, t), {
    id: l,
    open: (o, r) => t.root.open(l.value, o, r),
    openOnSelect: (o, r) => t.root.openOnSelect(l.value, o, r),
    isOpen: S(() => t.root.opened.value.has(l.value)),
    parent: S(() => t.root.parents.value.get(l.value)),
    activate: (o, r) => t.root.activate(l.value, o, r),
    isActivated: S(() => t.root.activated.value.has(ze(l.value))),
    select: (o, r) => t.root.select(l.value, o, r),
    isSelected: S(() => t.root.selected.value.get(ze(l.value)) === "on"),
    isIndeterminate: S(() => t.root.selected.value.get(l.value) === "indeterminate"),
    isLeaf: S(() => !t.root.children.value.get(l.value)),
    isGroupActivator: t.isGroupActivator
  });
  return !t.isGroupActivator && t.root.register(l.value, t.id.value, n), ot(() => {
    !t.isGroupActivator && t.root.unregister(l.value);
  }), n && Be(ra, i), i;
}, ym = () => {
  const e = Ce(ra, Js);
  Be(ra, J(v({}, e), {
    isGroupActivator: !0
  }));
}, bm = gt({
  name: "VListGroupActivator",
  setup(e, n) {
    let {
      slots: t
    } = n;
    return ym(), () => {
      var a;
      return (a = t.default) == null ? void 0 : a.call(t);
    };
  }
}), Sm = M(v(v({
  /* @deprecated */
  activeColor: String,
  baseColor: String,
  color: String,
  collapseIcon: {
    type: ve,
    default: "$collapse"
  },
  expandIcon: {
    type: ve,
    default: "$expand"
  },
  prependIcon: ve,
  appendIcon: ve,
  fluid: Boolean,
  subgroup: Boolean,
  title: String,
  value: null
}, te()), me()), "VListGroup"), ql = N()({
  name: "VListGroup",
  props: Sm(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      isOpen: a,
      open: l,
      id: i
    } = Qs($(e, "value"), !0), o = S(() => `v-list-group--id-${String(i.value)}`), r = Ks(), {
      isBooted: u
    } = kn();
    function c(g) {
      g.stopPropagation(), l(!a.value, g);
    }
    const d = S(() => ({
      onClick: c,
      class: "v-list-group__header",
      id: o.value
    })), f = S(() => a.value ? e.collapseIcon : e.expandIcon), m = S(() => ({
      VListItem: {
        active: a.value,
        activeColor: e.activeColor,
        baseColor: e.baseColor,
        color: e.color,
        prependIcon: e.prependIcon || e.subgroup && f.value,
        appendIcon: e.appendIcon || !e.subgroup && f.value,
        title: e.title,
        value: e.value
      }
    }));
    return z(() => s(e.tag, {
      class: ["v-list-group", {
        "v-list-group--prepend": r == null ? void 0 : r.hasPrepend.value,
        "v-list-group--fluid": e.fluid,
        "v-list-group--subgroup": e.subgroup,
        "v-list-group--open": a.value
      }, e.class],
      style: e.style
    }, {
      default: () => [t.activator && s(he, {
        defaults: m.value
      }, {
        default: () => [s(bm, null, {
          default: () => [t.activator({
            props: d.value,
            isOpen: a.value
          })]
        })]
      }), s(lt, {
        transition: {
          component: Ja
        },
        disabled: !u.value
      }, {
        default: () => {
          var g;
          return [pe(s("div", {
            class: "v-list-group__items",
            role: "group",
            "aria-labelledby": o.value
          }, [(g = t.default) == null ? void 0 : g.call(t)]), [[Pt, a.value]])];
        }
      })]
    })), {
      isOpen: a
    };
  }
}), km = M(v(v({
  opacity: [Number, String]
}, te()), me()), "VListItemSubtitle"), eu = N()({
  name: "VListItemSubtitle",
  props: km(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    return z(() => s(e.tag, {
      class: ["v-list-item-subtitle", e.class],
      style: [{
        "--v-list-item-subtitle-opacity": e.opacity
      }, e.style]
    }, t)), {};
  }
}), tu = Bt("v-list-item-title"), Cm = M(v(v(v(v(v(v(v(v(v(v({
  active: {
    type: Boolean,
    default: void 0
  },
  activeClass: String,
  /* @deprecated */
  activeColor: String,
  appendAvatar: String,
  appendIcon: ve,
  baseColor: String,
  disabled: Boolean,
  lines: [Boolean, String],
  link: {
    type: Boolean,
    default: void 0
  },
  nav: Boolean,
  prependAvatar: String,
  prependIcon: ve,
  ripple: {
    type: [Boolean, Object],
    default: !0
  },
  slim: Boolean,
  subtitle: [String, Number],
  title: [String, Number],
  value: null,
  onClick: Je(),
  onClickOnce: Je()
}, vt()), te()), Ze()), Ye()), Xe()), De()), fa()), me()), Se()), Ct({
  variant: "text"
})), "VListItem"), Ot = N()({
  name: "VListItem",
  directives: {
    Ripple: qt
  },
  props: Cm(),
  emits: {
    click: (e) => !0
  },
  setup(e, n) {
    let {
      attrs: t,
      slots: a,
      emit: l
    } = n;
    const i = va(e, t), o = S(() => e.value === void 0 ? i.href.value : e.value), {
      activate: r,
      isActivated: u,
      select: c,
      isOpen: d,
      isSelected: f,
      isIndeterminate: m,
      isGroupActivator: g,
      root: y,
      parent: b,
      openOnSelect: h,
      id: k
    } = Qs(o, !1), C = Ks(), I = S(() => {
      var Y;
      return e.active !== !1 && (e.active || ((Y = i.isActive) == null ? void 0 : Y.value) || (y.activatable.value ? u.value : f.value));
    }), A = S(() => e.link !== !1 && i.isLink.value), x = S(() => !e.disabled && e.link !== !1 && (e.link || i.isClickable.value || !!C && (y.selectable.value || y.activatable.value || e.value != null))), P = S(() => e.rounded || e.nav), T = S(() => {
      var Y;
      return (Y = e.color) != null ? Y : e.activeColor;
    }), w = S(() => {
      var Y;
      return {
        color: I.value && (Y = T.value) != null ? Y : e.baseColor,
        variant: e.variant
      };
    });
    Q(() => {
      var Y;
      return (Y = i.isActive) == null ? void 0 : Y.value;
    }, (Y) => {
      Y && b.value != null && y.open(b.value, !0), Y && h(Y);
    }, {
      immediate: !0
    });
    const {
      themeClasses: _
    } = Pe(e), {
      borderClasses: B
    } = bt(e), {
      colorClasses: V,
      colorStyles: L,
      variantClasses: D
    } = Cn(w), {
      densityClasses: p
    } = st(e), {
      dimensionStyles: R
    } = Ge(e), {
      elevationClasses: U
    } = et(e), {
      roundedClasses: q
    } = Oe(P), K = S(() => e.lines ? `v-list-item--${e.lines}-line` : void 0), E = S(() => ({
      isActive: I.value,
      select: c,
      isOpen: d.value,
      isSelected: f.value,
      isIndeterminate: m.value
    }));
    function F(Y) {
      var ie;
      l("click", Y), x.value && ((ie = i.navigate) == null || ie.call(i, Y), !g && (y.activatable.value ? r(!u.value, Y) : (y.selectable.value || e.value != null) && c(!f.value, Y)));
    }
    function O(Y) {
      (Y.key === "Enter" || Y.key === " ") && (Y.preventDefault(), Y.target.dispatchEvent(new MouseEvent("click", Y)));
    }
    return z(() => {
      const Y = A.value ? "a" : e.tag, ie = a.title || e.title != null, ne = a.subtitle || e.subtitle != null, ue = !!(e.appendAvatar || e.appendIcon), W = !!(ue || a.append), ae = !!(e.prependAvatar || e.prependIcon), se = !!(ae || a.prepend);
      return C == null || C.updateHasPrepend(se), e.activeColor && wd("active-color", ["color", "base-color"]), pe(s(Y, H({
        class: ["v-list-item", {
          "v-list-item--active": I.value,
          "v-list-item--disabled": e.disabled,
          "v-list-item--link": x.value,
          "v-list-item--nav": e.nav,
          "v-list-item--prepend": !se && (C == null ? void 0 : C.hasPrepend.value),
          "v-list-item--slim": e.slim,
          [`${e.activeClass}`]: e.activeClass && I.value
        }, _.value, B.value, V.value, p.value, U.value, K.value, q.value, D.value, e.class],
        style: [L.value, R.value, e.style],
        tabindex: x.value ? C ? -2 : 0 : void 0,
        onClick: F,
        onKeydown: x.value && !A.value && O
      }, i.linkProps), {
        default: () => {
          var ye;
          return [Ut(x.value || I.value, "v-list-item"), se && s("div", {
            key: "prepend",
            class: "v-list-item__prepend"
          }, [a.prepend ? s(he, {
            key: "prepend-defaults",
            disabled: !ae,
            defaults: {
              VAvatar: {
                density: e.density,
                image: e.prependAvatar
              },
              VIcon: {
                density: e.density,
                icon: e.prependIcon
              },
              VListItemAction: {
                start: !0
              }
            }
          }, {
            default: () => {
              var ce;
              return [(ce = a.prepend) == null ? void 0 : ce.call(a, E.value)];
            }
          }) : s(re, null, [e.prependAvatar && s(kt, {
            key: "prepend-avatar",
            density: e.density,
            image: e.prependAvatar
          }, null), e.prependIcon && s(Ve, {
            key: "prepend-icon",
            density: e.density,
            icon: e.prependIcon
          }, null)]), s("div", {
            class: "v-list-item__spacer"
          }, null)]), s("div", {
            class: "v-list-item__content",
            "data-no-activator": ""
          }, [ie && s(tu, {
            key: "title"
          }, {
            default: () => {
              var ce, X;
              return [(X = (ce = a.title) == null ? void 0 : ce.call(a, {
                title: e.title
              })) != null ? X : e.title];
            }
          }), ne && s(eu, {
            key: "subtitle"
          }, {
            default: () => {
              var ce, X;
              return [(X = (ce = a.subtitle) == null ? void 0 : ce.call(a, {
                subtitle: e.subtitle
              })) != null ? X : e.subtitle];
            }
          }), (ye = a.default) == null ? void 0 : ye.call(a, E.value)]), W && s("div", {
            key: "append",
            class: "v-list-item__append"
          }, [a.append ? s(he, {
            key: "append-defaults",
            disabled: !ue,
            defaults: {
              VAvatar: {
                density: e.density,
                image: e.appendAvatar
              },
              VIcon: {
                density: e.density,
                icon: e.appendIcon
              },
              VListItemAction: {
                end: !0
              }
            }
          }, {
            default: () => {
              var ce;
              return [(ce = a.append) == null ? void 0 : ce.call(a, E.value)];
            }
          }) : s(re, null, [e.appendIcon && s(Ve, {
            key: "append-icon",
            density: e.density,
            icon: e.appendIcon
          }, null), e.appendAvatar && s(kt, {
            key: "append-avatar",
            density: e.density,
            image: e.appendAvatar
          }, null)]), s("div", {
            class: "v-list-item__spacer"
          }, null)])];
        }
      }), [[mt("ripple"), x.value && e.ripple]]);
    }), {
      activate: r,
      isActivated: u,
      isGroupActivator: g,
      isSelected: f,
      list: C,
      select: c,
      root: y,
      id: k
    };
  }
}), xm = M(v(v({
  color: String,
  inset: Boolean,
  sticky: Boolean,
  title: String
}, te()), me()), "VListSubheader"), nu = N()({
  name: "VListSubheader",
  props: xm(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      textColorClasses: a,
      textColorStyles: l
    } = tt($(e, "color"));
    return z(() => {
      const i = !!(t.default || e.title);
      return s(e.tag, {
        class: ["v-list-subheader", {
          "v-list-subheader--inset": e.inset,
          "v-list-subheader--sticky": e.sticky
        }, a.value, e.class],
        style: [{
          textColorStyles: l
        }, e.style]
      }, {
        default: () => {
          var o, r;
          return [i && s("div", {
            class: "v-list-subheader__text"
          }, [(r = (o = t.default) == null ? void 0 : o.call(t)) != null ? r : e.title])];
        }
      });
    }), {};
  }
}), wm = M(v(v({
  color: String,
  inset: Boolean,
  length: [Number, String],
  opacity: [Number, String],
  thickness: [Number, String],
  vertical: Boolean
}, te()), Se()), "VDivider"), ga = N()({
  name: "VDivider",
  props: wm(),
  setup(e, n) {
    let {
      attrs: t,
      slots: a
    } = n;
    const {
      themeClasses: l
    } = Pe(e), {
      textColorClasses: i,
      textColorStyles: o
    } = tt($(e, "color")), r = S(() => {
      const u = {};
      return e.length && (u[e.vertical ? "height" : "width"] = ee(e.length)), e.thickness && (u[e.vertical ? "borderRightWidth" : "borderTopWidth"] = ee(e.thickness)), u;
    });
    return z(() => {
      const u = s("hr", {
        class: [{
          "v-divider": !0,
          "v-divider--inset": e.inset,
          "v-divider--vertical": e.vertical
        }, l.value, i.value, e.class],
        style: [r.value, o.value, {
          "--v-border-opacity": e.opacity
        }, e.style],
        "aria-orientation": !t.role || t.role === "separator" ? e.vertical ? "vertical" : "horizontal" : void 0,
        role: `${t.role || "separator"}`
      }, null);
      return a.default ? s("div", {
        class: ["v-divider__wrapper", {
          "v-divider__wrapper--vertical": e.vertical,
          "v-divider__wrapper--inset": e.inset
        }]
      }, [u, s("div", {
        class: "v-divider__content"
      }, [a.default()]), u]) : u;
    }), {};
  }
}), Vm = M({
  items: Array,
  returnObject: Boolean
}, "VListChildren"), au = N()({
  name: "VListChildren",
  props: Vm(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    return Us(), () => {
      var a, l, i;
      return (i = (a = t.default) == null ? void 0 : a.call(t)) != null ? i : (l = e.items) == null ? void 0 : l.map((o) => {
        var g, y, b, h;
        let {
          children: r,
          props: u,
          type: c,
          raw: d
        } = o;
        if (c === "divider")
          return (y = (g = t.divider) == null ? void 0 : g.call(t, {
            props: u
          })) != null ? y : s(ga, u, null);
        if (c === "subheader")
          return (h = (b = t.subheader) == null ? void 0 : b.call(t, {
            props: u
          })) != null ? h : s(nu, u, null);
        const f = {
          subtitle: t.subtitle ? (k) => {
            var C;
            return (C = t.subtitle) == null ? void 0 : C.call(t, J(v({}, k), {
              item: d
            }));
          } : void 0,
          prepend: t.prepend ? (k) => {
            var C;
            return (C = t.prepend) == null ? void 0 : C.call(t, J(v({}, k), {
              item: d
            }));
          } : void 0,
          append: t.append ? (k) => {
            var C;
            return (C = t.append) == null ? void 0 : C.call(t, J(v({}, k), {
              item: d
            }));
          } : void 0,
          title: t.title ? (k) => {
            var C;
            return (C = t.title) == null ? void 0 : C.call(t, J(v({}, k), {
              item: d
            }));
          } : void 0
        }, m = ql.filterProps(u);
        return r ? s(ql, H({
          value: u == null ? void 0 : u.value
        }, m), {
          activator: (k) => {
            let {
              props: C
            } = k;
            const I = J(v(v({}, u), C), {
              value: e.returnObject ? d : u.value
            });
            return t.header ? t.header({
              props: I
            }) : s(Ot, I, f);
          },
          default: () => s(au, {
            items: r,
            returnObject: e.returnObject
          }, t)
        }) : t.item ? t.item({
          props: u
        }) : s(Ot, H(u, {
          value: e.returnObject ? d : u.value
        }), f);
      });
    };
  }
}), lu = M({
  items: {
    type: Array,
    default: () => []
  },
  itemTitle: {
    type: [String, Array, Function],
    default: "title"
  },
  itemValue: {
    type: [String, Array, Function],
    default: "value"
  },
  itemChildren: {
    type: [Boolean, String, Array, Function],
    default: "children"
  },
  itemProps: {
    type: [Boolean, String, Array, Function],
    default: "props"
  },
  returnObject: Boolean,
  valueComparator: {
    type: Function,
    default: Lt
  }
}, "list-items");
function zt(e, n) {
  var r;
  const t = qe(n, e.itemTitle, n), a = qe(n, e.itemValue, t), l = qe(n, e.itemChildren), i = e.itemProps === !0 ? typeof n == "object" && n != null && !Array.isArray(n) ? "children" in n ? We(n, ["children"]) : n : void 0 : qe(n, e.itemProps), o = v({
    title: t,
    value: a
  }, i);
  return {
    title: String((r = o.title) != null ? r : ""),
    value: o.value,
    props: o,
    children: Array.isArray(l) ? iu(e, l) : void 0,
    raw: n
  };
}
function iu(e, n) {
  const t = [];
  for (const a of n)
    t.push(zt(e, a));
  return t;
}
function zi(e) {
  const n = S(() => iu(e, e.items)), t = S(() => n.value.some((i) => i.value === null));
  function a(i) {
    return t.value || (i = i.filter((o) => o !== null)), i.map((o) => e.returnObject && typeof o == "string" ? zt(e, o) : n.value.find((r) => e.valueComparator(o, r.value)) || zt(e, o));
  }
  function l(i) {
    return e.returnObject ? i.map((o) => {
      let {
        raw: r
      } = o;
      return r;
    }) : i.map((o) => {
      let {
        value: r
      } = o;
      return r;
    });
  }
  return {
    items: n,
    transformIn: a,
    transformOut: l
  };
}
function Pm(e) {
  return typeof e == "string" || typeof e == "number" || typeof e == "boolean";
}
function Im(e, n) {
  const t = qe(n, e.itemType, "item"), a = Pm(n) ? n : qe(n, e.itemTitle), l = qe(n, e.itemValue, void 0), i = qe(n, e.itemChildren), o = e.itemProps === !0 ? We(n, ["children"]) : qe(n, e.itemProps), r = v({
    title: a,
    value: l
  }, o);
  return {
    type: t,
    title: r.title,
    value: r.value,
    props: r,
    children: t === "item" && i ? ou(e, i) : void 0,
    raw: n
  };
}
function ou(e, n) {
  const t = [];
  for (const a of n)
    t.push(Im(e, a));
  return t;
}
function _m(e) {
  return {
    items: S(() => ou(e, e.items))
  };
}
const Am = M(v(v(v(v(v(J(v(v(v(v(v(v({
  baseColor: String,
  /* @deprecated */
  activeColor: String,
  activeClass: String,
  bgColor: String,
  disabled: Boolean,
  expandIcon: String,
  collapseIcon: String,
  lines: {
    type: [Boolean, String],
    default: "one"
  },
  slim: Boolean,
  nav: Boolean,
  "onClick:open": Je(),
  "onClick:select": Je(),
  "onUpdate:opened": Je()
}, gm({
  selectStrategy: "single-leaf",
  openStrategy: "list"
})), vt()), te()), Ze()), Ye()), Xe()), {
  itemType: {
    type: String,
    default: "type"
  }
}), lu()), De()), me()), Se()), Ct({
  variant: "text"
})), "VList"), ol = N()({
  name: "VList",
  props: Am(),
  emits: {
    "update:selected": (e) => !0,
    "update:activated": (e) => !0,
    "update:opened": (e) => !0,
    "click:open": (e) => !0,
    "click:activate": (e) => !0,
    "click:select": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      items: a
    } = _m(e), {
      themeClasses: l
    } = Pe(e), {
      backgroundColorClasses: i,
      backgroundColorStyles: o
    } = Le($(e, "bgColor")), {
      borderClasses: r
    } = bt(e), {
      densityClasses: u
    } = st(e), {
      dimensionStyles: c
    } = Ge(e), {
      elevationClasses: d
    } = et(e), {
      roundedClasses: f
    } = Oe(e), {
      children: m,
      open: g,
      parents: y,
      select: b,
      getPath: h
    } = hm(e), k = S(() => e.lines ? `v-list--${e.lines}-line` : void 0), C = $(e, "activeColor"), I = $(e, "baseColor"), A = $(e, "color");
    Us(), Ee({
      VListGroup: {
        activeColor: C,
        baseColor: I,
        color: A,
        expandIcon: $(e, "expandIcon"),
        collapseIcon: $(e, "collapseIcon")
      },
      VListItem: {
        activeClass: $(e, "activeClass"),
        activeColor: C,
        baseColor: I,
        color: A,
        density: $(e, "density"),
        disabled: $(e, "disabled"),
        lines: $(e, "lines"),
        nav: $(e, "nav"),
        slim: $(e, "slim"),
        variant: $(e, "variant")
      }
    });
    const x = Z(!1), P = G();
    function T(D) {
      x.value = !0;
    }
    function w(D) {
      x.value = !1;
    }
    function _(D) {
      var p;
      !x.value && !(D.relatedTarget && ((p = P.value) != null && p.contains(D.relatedTarget))) && L();
    }
    function B(D) {
      const p = D.target;
      if (!(!P.value || ["INPUT", "TEXTAREA"].includes(p.tagName))) {
        if (D.key === "ArrowDown")
          L("next");
        else if (D.key === "ArrowUp")
          L("prev");
        else if (D.key === "Home")
          L("first");
        else if (D.key === "End")
          L("last");
        else
          return;
        D.preventDefault();
      }
    }
    function V(D) {
      x.value = !0;
    }
    function L(D) {
      if (P.value)
        return an(P.value, D);
    }
    return z(() => s(e.tag, {
      ref: P,
      class: ["v-list", {
        "v-list--disabled": e.disabled,
        "v-list--nav": e.nav,
        "v-list--slim": e.slim
      }, l.value, i.value, r.value, u.value, d.value, k.value, f.value, e.class],
      style: [o.value, c.value, e.style],
      tabindex: e.disabled || x.value ? -1 : 0,
      role: "listbox",
      "aria-activedescendant": void 0,
      onFocusin: T,
      onFocusout: w,
      onFocus: _,
      onKeydown: B,
      onMousedown: V
    }, {
      default: () => [s(au, {
        items: a.value,
        returnObject: e.returnObject
      }, t)]
    })), {
      open: g,
      select: b,
      focus: L,
      children: m,
      parents: y,
      getPath: h
    };
  }
}), Lm = Bt("v-list-img"), Tm = M(v(v({
  start: Boolean,
  end: Boolean
}, te()), me()), "VListItemAction"), Bm = N()({
  name: "VListItemAction",
  props: Tm(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    return z(() => s(e.tag, {
      class: ["v-list-item-action", {
        "v-list-item-action--start": e.start,
        "v-list-item-action--end": e.end
      }, e.class],
      style: e.style
    }, t)), {};
  }
}), Dm = M(v(v({
  start: Boolean,
  end: Boolean
}, te()), me()), "VListItemMedia"), Mm = N()({
  name: "VListItemMedia",
  props: Dm(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    return z(() => s(e.tag, {
      class: ["v-list-item-media", {
        "v-list-item-media--start": e.start,
        "v-list-item-media--end": e.end
      }, e.class],
      style: e.style
    }, t)), {};
  }
});
function Al(e, n) {
  return {
    x: e.x + n.x,
    y: e.y + n.y
  };
}
function pm(e, n) {
  return {
    x: e.x - n.x,
    y: e.y - n.y
  };
}
function sr(e, n) {
  if (e.side === "top" || e.side === "bottom") {
    const {
      side: t,
      align: a
    } = e, l = a === "left" ? 0 : a === "center" ? n.width / 2 : a === "right" ? n.width : a, i = t === "top" ? 0 : t === "bottom" ? n.height : t;
    return Al({
      x: l,
      y: i
    }, n);
  } else if (e.side === "left" || e.side === "right") {
    const {
      side: t,
      align: a
    } = e, l = t === "left" ? 0 : t === "right" ? n.width : t, i = a === "top" ? 0 : a === "center" ? n.height / 2 : a === "bottom" ? n.height : a;
    return Al({
      x: l,
      y: i
    }, n);
  }
  return Al({
    x: n.width / 2,
    y: n.height / 2
  }, n);
}
const ru = {
  static: $m,
  // specific viewport position, usually centered
  connected: Rm
  // connected to a certain element
}, Em = M({
  locationStrategy: {
    type: [String, Function],
    default: "static",
    validator: (e) => typeof e == "function" || e in ru
  },
  location: {
    type: String,
    default: "bottom"
  },
  origin: {
    type: String,
    default: "auto"
  },
  offset: [Number, String, Array]
}, "VOverlay-location-strategies");
function Fm(e, n) {
  const t = G({}), a = G();
  Ie && ct(() => !!(n.isActive.value && e.locationStrategy), (i) => {
    var o, r;
    Q(() => e.locationStrategy, i), it(() => {
      window.removeEventListener("resize", l), a.value = void 0;
    }), window.addEventListener("resize", l, {
      passive: !0
    }), typeof e.locationStrategy == "function" ? a.value = (o = e.locationStrategy(n, e, t)) == null ? void 0 : o.updateLocation : a.value = (r = ru[e.locationStrategy](n, e, t)) == null ? void 0 : r.updateLocation;
  });
  function l(i) {
    var o;
    (o = a.value) == null || o.call(a, i);
  }
  return {
    contentStyles: t,
    updateLocation: a
  };
}
function $m() {
}
function Om(e, n) {
  const t = xi(e);
  return n ? t.x += parseFloat(e.style.right || 0) : t.x -= parseFloat(e.style.left || 0), t.y -= parseFloat(e.style.top || 0), t;
}
function Rm(e, n, t) {
  (Array.isArray(e.target.value) || jd(e.target.value)) && Object.assign(t.value, {
    position: "fixed",
    top: 0,
    [e.isRtl.value ? "right" : "left"]: 0
  });
  const {
    preferredAnchor: l,
    preferredOrigin: i
  } = ki(() => {
    const y = El(n.location, e.isRtl.value), b = n.origin === "overlap" ? y : n.origin === "auto" ? wl(y) : El(n.origin, e.isRtl.value);
    return y.side === b.side && y.align === Vl(b).align ? {
      preferredAnchor: Lo(y),
      preferredOrigin: Lo(b)
    } : {
      preferredAnchor: y,
      preferredOrigin: b
    };
  }), [o, r, u, c] = ["minWidth", "minHeight", "maxWidth", "maxHeight"].map((y) => S(() => {
    const b = parseFloat(n[y]);
    return isNaN(b) ? 1 / 0 : b;
  })), d = S(() => {
    if (Array.isArray(n.offset))
      return n.offset;
    if (typeof n.offset == "string") {
      const y = n.offset.split(" ").map(parseFloat);
      return y.length < 2 && y.push(0), y;
    }
    return typeof n.offset == "number" ? [n.offset, 0] : [0, 0];
  });
  let f = !1;
  const m = new ResizeObserver(() => {
    f && g();
  });
  Q([e.target, e.contentEl], (y, b) => {
    let [h, k] = y, [C, I] = b;
    C && !Array.isArray(C) && m.unobserve(C), h && !Array.isArray(h) && m.observe(h), I && m.unobserve(I), k && m.observe(k);
  }, {
    immediate: !0
  }), it(() => {
    m.disconnect();
  });
  function g() {
    if (f = !1, requestAnimationFrame(() => f = !0), !e.target.value || !e.contentEl.value) return;
    const y = Rr(e.target.value), b = Om(e.contentEl.value, e.isRtl.value), h = $a(e.contentEl.value), k = 12;
    h.length || (h.push(document.documentElement), e.contentEl.value.style.top && e.contentEl.value.style.left || (b.x -= parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x") || 0), b.y -= parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y") || 0)));
    const C = h.reduce((V, L) => {
      const D = L.getBoundingClientRect(), p = new ln({
        x: L === document.documentElement ? 0 : D.x,
        y: L === document.documentElement ? 0 : D.y,
        width: L.clientWidth,
        height: L.clientHeight
      });
      return V ? new ln({
        x: Math.max(V.left, p.left),
        y: Math.max(V.top, p.top),
        width: Math.min(V.right, p.right) - Math.max(V.left, p.left),
        height: Math.min(V.bottom, p.bottom) - Math.max(V.top, p.top)
      }) : p;
    }, void 0);
    C.x += k, C.y += k, C.width -= k * 2, C.height -= k * 2;
    let I = {
      anchor: l.value,
      origin: i.value
    };
    function A(V) {
      const L = new ln(b), D = sr(V.anchor, y), p = sr(V.origin, L);
      let {
        x: R,
        y: U
      } = pm(D, p);
      switch (V.anchor.side) {
        case "top":
          U -= d.value[0];
          break;
        case "bottom":
          U += d.value[0];
          break;
        case "left":
          R -= d.value[0];
          break;
        case "right":
          R += d.value[0];
          break;
      }
      switch (V.anchor.align) {
        case "top":
          U -= d.value[1];
          break;
        case "bottom":
          U += d.value[1];
          break;
        case "left":
          R -= d.value[1];
          break;
        case "right":
          R += d.value[1];
          break;
      }
      return L.x += R, L.y += U, L.width = Math.min(L.width, u.value), L.height = Math.min(L.height, c.value), {
        overflows: Bo(L, C),
        x: R,
        y: U
      };
    }
    let x = 0, P = 0;
    const T = {
      x: 0,
      y: 0
    }, w = {
      x: !1,
      y: !1
    };
    let _ = -1;
    for (; ; ) {
      if (_++ > 10) {
        Jn("Infinite loop detected in connectedLocationStrategy");
        break;
      }
      const {
        x: V,
        y: L,
        overflows: D
      } = A(I);
      x += V, P += L, b.x += V, b.y += L;
      {
        const p = To(I.anchor), R = D.x.before || D.x.after, U = D.y.before || D.y.after;
        let q = !1;
        if (["x", "y"].forEach((K) => {
          if (K === "x" && R && !w.x || K === "y" && U && !w.y) {
            const E = {
              anchor: v({}, I.anchor),
              origin: v({}, I.origin)
            }, F = K === "x" ? p === "y" ? Vl : wl : p === "y" ? wl : Vl;
            E.anchor = F(E.anchor), E.origin = F(E.origin);
            const {
              overflows: O
            } = A(E);
            (O[K].before <= D[K].before && O[K].after <= D[K].after || O[K].before + O[K].after < (D[K].before + D[K].after) / 2) && (I = E, q = w[K] = !0);
          }
        }), q) continue;
      }
      D.x.before && (x += D.x.before, b.x += D.x.before), D.x.after && (x -= D.x.after, b.x -= D.x.after), D.y.before && (P += D.y.before, b.y += D.y.before), D.y.after && (P -= D.y.after, b.y -= D.y.after);
      {
        const p = Bo(b, C);
        T.x = C.width - p.x.before - p.x.after, T.y = C.height - p.y.before - p.y.after, x += p.x.before, b.x += p.x.before, P += p.y.before, b.y += p.y.before;
      }
      break;
    }
    const B = To(I.anchor);
    return Object.assign(t.value, {
      "--v-overlay-anchor-origin": `${I.anchor.side} ${I.anchor.align}`,
      transformOrigin: `${I.origin.side} ${I.origin.align}`,
      // transform: `translate(${pixelRound(x)}px, ${pixelRound(y)}px)`,
      top: ee(Ll(P)),
      left: e.isRtl.value ? void 0 : ee(Ll(x)),
      right: e.isRtl.value ? ee(Ll(-x)) : void 0,
      minWidth: ee(B === "y" ? Math.min(o.value, y.width) : o.value),
      maxWidth: ee(ur(Ne(T.x, o.value === 1 / 0 ? 0 : o.value, u.value))),
      maxHeight: ee(ur(Ne(T.y, r.value === 1 / 0 ? 0 : r.value, c.value)))
    }), {
      available: T,
      contentBox: b
    };
  }
  return Q(() => [l.value, i.value, n.offset, n.minWidth, n.minHeight, n.maxWidth, n.maxHeight], () => g()), _e(() => {
    const y = g();
    if (!y) return;
    const {
      available: b,
      contentBox: h
    } = y;
    h.height > b.y && requestAnimationFrame(() => {
      g(), requestAnimationFrame(() => {
        g();
      });
    });
  }), {
    updateLocation: g
  };
}
function Ll(e) {
  return Math.round(e * devicePixelRatio) / devicePixelRatio;
}
function ur(e) {
  return Math.ceil(e * devicePixelRatio) / devicePixelRatio;
}
let Xl = !0;
const Na = [];
function Nm(e) {
  !Xl || Na.length ? (Na.push(e), Zl()) : (Xl = !1, e(), Zl());
}
let cr = -1;
function Zl() {
  cancelAnimationFrame(cr), cr = requestAnimationFrame(() => {
    const e = Na.shift();
    e && e(), Na.length ? Zl() : Xl = !0;
  });
}
const Da = {
  none: null,
  close: Wm,
  block: jm,
  reposition: Ym
}, Hm = M({
  scrollStrategy: {
    type: [String, Function],
    default: "block",
    validator: (e) => typeof e == "function" || e in Da
  }
}, "VOverlay-scroll-strategies");
function zm(e, n) {
  if (!Ie) return;
  let t;
  Re(() => Ke(this, null, function* () {
    t == null || t.stop(), n.isActive.value && e.scrollStrategy && (t = mi(), yield new Promise((a) => setTimeout(a)), t.active && t.run(() => {
      var a;
      typeof e.scrollStrategy == "function" ? e.scrollStrategy(n, e, t) : (a = Da[e.scrollStrategy]) == null || a.call(Da, n, e, t);
    }));
  })), it(() => {
    t == null || t.stop();
  });
}
function Wm(e) {
  var t;
  function n(a) {
    e.isActive.value = !1;
  }
  su((t = e.targetEl.value) != null ? t : e.contentEl.value, n);
}
function jm(e, n) {
  var o;
  const t = (o = e.root.value) == null ? void 0 : o.offsetParent, a = [.../* @__PURE__ */ new Set([...$a(e.targetEl.value, n.contained ? t : void 0), ...$a(e.contentEl.value, n.contained ? t : void 0)])].filter((r) => !r.classList.contains("v-overlay-scroll-blocked")), l = window.innerWidth - document.documentElement.offsetWidth, i = ((r) => _i(r) && r)(t || document.documentElement);
  i && e.root.value.classList.add("v-overlay--scroll-blocked"), a.forEach((r, u) => {
    r.style.setProperty("--v-body-scroll-x", ee(-r.scrollLeft)), r.style.setProperty("--v-body-scroll-y", ee(-r.scrollTop)), r !== document.documentElement && r.style.setProperty("--v-scrollbar-offset", ee(l)), r.classList.add("v-overlay-scroll-blocked");
  }), it(() => {
    a.forEach((r, u) => {
      const c = parseFloat(r.style.getPropertyValue("--v-body-scroll-x")), d = parseFloat(r.style.getPropertyValue("--v-body-scroll-y")), f = r.style.scrollBehavior;
      r.style.scrollBehavior = "auto", r.style.removeProperty("--v-body-scroll-x"), r.style.removeProperty("--v-body-scroll-y"), r.style.removeProperty("--v-scrollbar-offset"), r.classList.remove("v-overlay-scroll-blocked"), r.scrollLeft = -c, r.scrollTop = -d, r.style.scrollBehavior = f;
    }), i && e.root.value.classList.remove("v-overlay--scroll-blocked");
  });
}
function Ym(e, n, t) {
  let a = !1, l = -1, i = -1;
  function o(r) {
    Nm(() => {
      var d, f;
      const u = performance.now();
      (f = (d = e.updateLocation).value) == null || f.call(d, r), a = (performance.now() - u) / (1e3 / 60) > 2;
    });
  }
  i = (typeof requestIdleCallback == "undefined" ? (r) => r() : requestIdleCallback)(() => {
    t.run(() => {
      var r;
      su((r = e.targetEl.value) != null ? r : e.contentEl.value, (u) => {
        a ? (cancelAnimationFrame(l), l = requestAnimationFrame(() => {
          l = requestAnimationFrame(() => {
            o(u);
          });
        })) : o(u);
      });
    });
  }), it(() => {
    typeof cancelIdleCallback != "undefined" && cancelIdleCallback(i), cancelAnimationFrame(l);
  });
}
function su(e, n) {
  const t = [document, ...$a(e)];
  t.forEach((a) => {
    a.addEventListener("scroll", n, {
      passive: !0
    });
  }), it(() => {
    t.forEach((a) => {
      a.removeEventListener("scroll", n);
    });
  });
}
const Jl = Symbol.for("vuetify:v-menu"), Wi = M({
  closeDelay: [Number, String],
  openDelay: [Number, String]
}, "delay");
function ji(e, n) {
  let t = () => {
  };
  function a(o) {
    t == null || t();
    const r = Number(o ? e.openDelay : e.closeDelay);
    return new Promise((u) => {
      t = dd(r, () => {
        n == null || n(o), u(o);
      });
    });
  }
  function l() {
    return a(!0);
  }
  function i() {
    return a(!1);
  }
  return {
    clearDelay: t,
    runOpenDelay: l,
    runCloseDelay: i
  };
}
const Gm = M(v({
  target: [String, Object],
  activator: [String, Object],
  activatorProps: {
    type: Object,
    default: () => ({})
  },
  openOnClick: {
    type: Boolean,
    default: void 0
  },
  openOnHover: Boolean,
  openOnFocus: {
    type: Boolean,
    default: void 0
  },
  closeOnContentClick: Boolean
}, Wi()), "VOverlay-activator");
function Um(e, n) {
  let {
    isActive: t,
    isTop: a,
    contentEl: l
  } = n;
  const i = Fe("useActivator"), o = G();
  let r = !1, u = !1, c = !0;
  const d = S(() => e.openOnFocus || e.openOnFocus == null && e.openOnHover), f = S(() => e.openOnClick || e.openOnClick == null && !e.openOnHover && !d.value), {
    runOpenDelay: m,
    runCloseDelay: g
  } = ji(e, (w) => {
    w === (e.openOnHover && r || d.value && u) && !(e.openOnHover && t.value && !a.value) && (t.value !== w && (c = !0), t.value = w);
  }), y = G(), b = {
    onClick: (w) => {
      w.stopPropagation(), o.value = w.currentTarget || w.target, t.value || (y.value = [w.clientX, w.clientY]), t.value = !t.value;
    },
    onMouseenter: (w) => {
      var _;
      (_ = w.sourceCapabilities) != null && _.firesTouchEvents || (r = !0, o.value = w.currentTarget || w.target, m());
    },
    onMouseleave: (w) => {
      r = !1, g();
    },
    onFocus: (w) => {
      En(w.target, ":focus-visible") !== !1 && (u = !0, w.stopPropagation(), o.value = w.currentTarget || w.target, m());
    },
    onBlur: (w) => {
      u = !1, w.stopPropagation(), g();
    }
  }, h = S(() => {
    const w = {};
    return f.value && (w.onClick = b.onClick), e.openOnHover && (w.onMouseenter = b.onMouseenter, w.onMouseleave = b.onMouseleave), d.value && (w.onFocus = b.onFocus, w.onBlur = b.onBlur), w;
  }), k = S(() => {
    const w = {};
    if (e.openOnHover && (w.onMouseenter = () => {
      r = !0, m();
    }, w.onMouseleave = () => {
      r = !1, g();
    }), d.value && (w.onFocusin = () => {
      u = !0, m();
    }, w.onFocusout = () => {
      u = !1, g();
    }), e.closeOnContentClick) {
      const _ = Ce(Jl, null);
      w.onClick = () => {
        t.value = !1, _ == null || _.closeParents();
      };
    }
    return w;
  }), C = S(() => {
    const w = {};
    return e.openOnHover && (w.onMouseenter = () => {
      c && (r = !0, c = !1, m());
    }, w.onMouseleave = () => {
      r = !1, g();
    }), w;
  });
  Q(a, (w) => {
    var _;
    w && (e.openOnHover && !r && (!d.value || !u) || d.value && !u && (!e.openOnHover || !r)) && !((_ = l.value) != null && _.contains(document.activeElement)) && (t.value = !1);
  }), Q(t, (w) => {
    w || setTimeout(() => {
      y.value = void 0;
    });
  }, {
    flush: "post"
  });
  const I = pa();
  Re(() => {
    I.value && _e(() => {
      o.value = I.el;
    });
  });
  const A = pa(), x = S(() => e.target === "cursor" && y.value ? y.value : A.value ? A.el : uu(e.target, i) || o.value), P = S(() => Array.isArray(x.value) ? void 0 : x.value);
  let T;
  return Q(() => !!e.activator, (w) => {
    w && Ie ? (T = mi(), T.run(() => {
      Km(e, i, {
        activatorEl: o,
        activatorEvents: h
      });
    })) : T && T.stop();
  }, {
    flush: "post",
    immediate: !0
  }), it(() => {
    T == null || T.stop();
  }), {
    activatorEl: o,
    activatorRef: I,
    target: x,
    targetEl: P,
    targetRef: A,
    activatorEvents: h,
    contentEvents: k,
    scrimEvents: C
  };
}
function Km(e, n, t) {
  let {
    activatorEl: a,
    activatorEvents: l
  } = t;
  Q(() => e.activator, (u, c) => {
    if (c && u !== c) {
      const d = r(c);
      d && o(d);
    }
    u && _e(() => i());
  }, {
    immediate: !0
  }), Q(() => e.activatorProps, () => {
    i();
  }), it(() => {
    o();
  });
  function i() {
    let u = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : r(), c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e.activatorProps;
    u && md(u, H(l.value, c));
  }
  function o() {
    let u = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : r(), c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e.activatorProps;
    u && gd(u, H(l.value, c));
  }
  function r() {
    let u = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : e.activator;
    const c = uu(u, n);
    return a.value = (c == null ? void 0 : c.nodeType) === Node.ELEMENT_NODE ? c : void 0, a.value;
  }
}
function uu(e, n) {
  var a, l;
  if (!e) return;
  let t;
  if (e === "parent") {
    let i = (l = (a = n == null ? void 0 : n.proxy) == null ? void 0 : a.$el) == null ? void 0 : l.parentNode;
    for (; i != null && i.hasAttribute("data-no-activator"); )
      i = i.parentNode;
    t = i;
  } else typeof e == "string" ? t = document.querySelector(e) : "$el" in e ? t = e.$el : t = e;
  return t;
}
function cu() {
  if (!Ie) return Z(!1);
  const {
    ssr: e
  } = ht();
  if (e) {
    const n = Z(!1);
    return rt(() => {
      n.value = !0;
    }), n;
  } else
    return Z(!0);
}
const Yi = M({
  eager: Boolean
}, "lazy");
function Gi(e, n) {
  const t = Z(!1), a = S(() => t.value || e.eager || n.value);
  Q(n, () => t.value = !0);
  function l() {
    e.eager || (t.value = !1);
  }
  return {
    isBooted: t,
    hasContent: a,
    onAfterLeave: l
  };
}
function In() {
  const n = Fe("useScopeId").vnode.scopeId;
  return {
    scopeId: n ? {
      [n]: ""
    } : void 0
  };
}
const dr = Symbol.for("vuetify:stack"), qn = dt([]);
function qm(e, n, t) {
  const a = Fe("useStack"), l = !t, i = Ce(dr, void 0), o = dt({
    activeChildren: /* @__PURE__ */ new Set()
  });
  Be(dr, o);
  const r = Z(+n.value);
  ct(e, () => {
    var f;
    const d = (f = qn.at(-1)) == null ? void 0 : f[1];
    r.value = d ? d + 10 : +n.value, l && qn.push([a.uid, r.value]), i == null || i.activeChildren.add(a.uid), it(() => {
      if (l) {
        const m = ze(qn).findIndex((g) => g[0] === a.uid);
        qn.splice(m, 1);
      }
      i == null || i.activeChildren.delete(a.uid);
    });
  });
  const u = Z(!0);
  l && Re(() => {
    var f;
    const d = ((f = qn.at(-1)) == null ? void 0 : f[0]) === a.uid;
    setTimeout(() => u.value = d);
  });
  const c = S(() => !o.activeChildren.size);
  return {
    globalTop: gi(u),
    localTop: c,
    stackStyles: S(() => ({
      zIndex: r.value
    }))
  };
}
function Xm(e) {
  return {
    teleportTarget: S(() => {
      const t = e();
      if (t === !0 || !Ie) return;
      const a = t === !1 ? document.body : typeof t == "string" ? document.querySelector(t) : t;
      if (a == null) {
        za(`Unable to locate target ${t}`);
        return;
      }
      let l = [...a.children].find((i) => i.matches(".v-overlay-container"));
      return l || (l = document.createElement("div"), l.className = "v-overlay-container", a.appendChild(l)), l;
    })
  };
}
function Zm() {
  return !0;
}
function du(e, n, t) {
  if (!e || vu(e, t) === !1) return !1;
  const a = Qr(n);
  if (typeof ShadowRoot != "undefined" && a instanceof ShadowRoot && a.host === e.target) return !1;
  const l = (typeof t.value == "object" && t.value.include || (() => []))();
  return l.push(n), !l.some((i) => i == null ? void 0 : i.contains(e.target));
}
function vu(e, n) {
  return (typeof n.value == "object" && n.value.closeConditional || Zm)(e);
}
function Jm(e, n, t) {
  const a = typeof t.value == "function" ? t.value : t.value.handler;
  e.shadowTarget = e.target, n._clickOutside.lastMousedownWasOutside && du(e, n, t) && setTimeout(() => {
    vu(e, t) && a && a(e);
  }, 0);
}
function vr(e, n) {
  const t = Qr(e);
  n(document), typeof ShadowRoot != "undefined" && t instanceof ShadowRoot && n(t);
}
const Qm = {
  // [data-app] may not be found
  // if using bind, inserted makes
  // sure that the root element is
  // available, iOS does not support
  // clicks on body
  mounted(e, n) {
    const t = (l) => Jm(l, e, n), a = (l) => {
      e._clickOutside.lastMousedownWasOutside = du(l, e, n);
    };
    vr(e, (l) => {
      l.addEventListener("click", t, !0), l.addEventListener("mousedown", a, !0);
    }), e._clickOutside || (e._clickOutside = {
      lastMousedownWasOutside: !1
    }), e._clickOutside[n.instance.$.uid] = {
      onClick: t,
      onMousedown: a
    };
  },
  beforeUnmount(e, n) {
    e._clickOutside && (vr(e, (t) => {
      var i;
      if (!t || !((i = e._clickOutside) != null && i[n.instance.$.uid])) return;
      const {
        onClick: a,
        onMousedown: l
      } = e._clickOutside[n.instance.$.uid];
      t.removeEventListener("click", a, !0), t.removeEventListener("mousedown", l, !0);
    }), delete e._clickOutside[n.instance.$.uid]);
  }
};
function eg(e) {
  const l = e, {
    modelValue: n,
    color: t
  } = l, a = He(l, [
    "modelValue",
    "color"
  ]);
  return s(Wt, {
    name: "fade-transition",
    appear: !0
  }, {
    default: () => [e.modelValue && s("div", H({
      class: ["v-overlay__scrim", e.color.backgroundColorClasses.value],
      style: e.color.backgroundColorStyles.value
    }, a), null)]
  });
}
const ha = M(v(v(v(v(v(v(v(v({
  absolute: Boolean,
  attach: [Boolean, String, Object],
  closeOnBack: {
    type: Boolean,
    default: !0
  },
  contained: Boolean,
  contentClass: null,
  contentProps: null,
  disabled: Boolean,
  opacity: [Number, String],
  noClickAnimation: Boolean,
  modelValue: Boolean,
  persistent: Boolean,
  scrim: {
    type: [Boolean, String],
    default: !0
  },
  zIndex: {
    type: [Number, String],
    default: 2e3
  }
}, Gm()), te()), Ye()), Yi()), Em()), Hm()), Se()), It()), "VOverlay"), At = N()({
  name: "VOverlay",
  directives: {
    ClickOutside: Qm
  },
  inheritAttrs: !1,
  props: v({
    _disableGlobalStack: Boolean
  }, ha()),
  emits: {
    "click:outside": (e) => !0,
    "update:modelValue": (e) => !0,
    afterEnter: () => !0,
    afterLeave: () => !0
  },
  setup(e, n) {
    let {
      slots: t,
      attrs: a,
      emit: l
    } = n;
    const i = Fe("VOverlay"), o = G(), r = G(), u = G(), c = oe(e, "modelValue"), d = S({
      get: () => c.value,
      set: (W) => {
        W && e.disabled || (c.value = W);
      }
    }), {
      themeClasses: f
    } = Pe(e), {
      rtlClasses: m,
      isRtl: g
    } = je(), {
      hasContent: y,
      onAfterLeave: b
    } = Gi(e, d), h = Le(S(() => typeof e.scrim == "string" ? e.scrim : null)), {
      globalTop: k,
      localTop: C,
      stackStyles: I
    } = qm(d, $(e, "zIndex"), e._disableGlobalStack), {
      activatorEl: A,
      activatorRef: x,
      target: P,
      targetEl: T,
      targetRef: w,
      activatorEvents: _,
      contentEvents: B,
      scrimEvents: V
    } = Um(e, {
      isActive: d,
      isTop: C,
      contentEl: u
    }), {
      teleportTarget: L
    } = Xm(() => {
      var se, ye, ce;
      const W = e.attach || e.contained;
      if (W) return W;
      const ae = ((se = A == null ? void 0 : A.value) == null ? void 0 : se.getRootNode()) || ((ce = (ye = i.proxy) == null ? void 0 : ye.$el) == null ? void 0 : ce.getRootNode());
      return ae instanceof ShadowRoot ? ae : !1;
    }), {
      dimensionStyles: D
    } = Ge(e), p = cu(), {
      scopeId: R
    } = In();
    Q(() => e.disabled, (W) => {
      W && (d.value = !1);
    });
    const {
      contentStyles: U,
      updateLocation: q
    } = Fm(e, {
      isRtl: g,
      contentEl: u,
      target: P,
      isActive: d
    });
    zm(e, {
      root: o,
      contentEl: u,
      targetEl: T,
      isActive: d,
      updateLocation: q
    });
    function K(W) {
      l("click:outside", W), e.persistent ? ie() : d.value = !1;
    }
    function E(W) {
      return d.value && k.value && // If using scrim, only close if clicking on it rather than anything opened on top
      (!e.scrim || W.target === r.value || W instanceof MouseEvent && W.shadowTarget === r.value);
    }
    Ie && Q(d, (W) => {
      W ? window.addEventListener("keydown", F) : window.removeEventListener("keydown", F);
    }, {
      immediate: !0
    }), ot(() => {
      Ie && window.removeEventListener("keydown", F);
    });
    function F(W) {
      var ae, se;
      W.key === "Escape" && k.value && (e.persistent ? ie() : (d.value = !1, (ae = u.value) != null && ae.contains(document.activeElement) && ((se = A.value) == null || se.focus())));
    }
    const O = Ps();
    ct(() => e.closeOnBack, () => {
      pf(O, (W) => {
        k.value && d.value ? (W(!1), e.persistent ? ie() : d.value = !1) : W();
      });
    });
    const Y = G();
    Q(() => d.value && (e.absolute || e.contained) && L.value == null, (W) => {
      if (W) {
        const ae = Ii(o.value);
        ae && ae !== document.scrollingElement && (Y.value = ae.scrollTop);
      }
    });
    function ie() {
      e.noClickAnimation || u.value && tn(u.value, [{
        transformOrigin: "center"
      }, {
        transform: "scale(1.03)"
      }, {
        transformOrigin: "center"
      }], {
        duration: 150,
        easing: Qn
      });
    }
    function ne() {
      l("afterEnter");
    }
    function ue() {
      b(), l("afterLeave");
    }
    return z(() => {
      var W;
      return s(re, null, [(W = t.activator) == null ? void 0 : W.call(t, {
        isActive: d.value,
        targetRef: w,
        props: H({
          ref: x
        }, _.value, e.activatorProps)
      }), p.value && y.value && s(qc, {
        disabled: !L.value,
        to: L.value
      }, {
        default: () => [s("div", H({
          class: ["v-overlay", {
            "v-overlay--absolute": e.absolute || e.contained,
            "v-overlay--active": d.value,
            "v-overlay--contained": e.contained
          }, f.value, m.value, e.class],
          style: [I.value, {
            "--v-overlay-opacity": e.opacity,
            top: ee(Y.value)
          }, e.style],
          ref: o
        }, R, a), [s(eg, H({
          color: h,
          modelValue: d.value && !!e.scrim,
          ref: r
        }, V.value), null), s(lt, {
          appear: !0,
          persisted: !0,
          transition: e.transition,
          target: P.value,
          onAfterEnter: ne,
          onAfterLeave: ue
        }, {
          default: () => {
            var ae;
            return [pe(s("div", H({
              ref: u,
              class: ["v-overlay__content", e.contentClass],
              style: [D.value, U.value]
            }, B.value, e.contentProps), [(ae = t.default) == null ? void 0 : ae.call(t, {
              isActive: d
            })]), [[Pt, d.value], [mt("click-outside"), {
              handler: K,
              closeConditional: E,
              include: () => [A.value]
            }]])];
          }
        })])]
      })]);
    }), {
      activatorEl: A,
      scrimEl: r,
      target: P,
      animateClick: ie,
      contentEl: u,
      globalTop: k,
      localTop: C,
      updateLocation: q
    };
  }
}), Tl = Symbol("Forwarded refs");
function Bl(e, n) {
  let t = e;
  for (; t; ) {
    const a = Reflect.getOwnPropertyDescriptor(t, n);
    if (a) return a;
    t = Object.getPrototypeOf(t);
  }
}
function xt(e) {
  for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
    t[a - 1] = arguments[a];
  return e[Tl] = t, new Proxy(e, {
    get(l, i) {
      if (Reflect.has(l, i))
        return Reflect.get(l, i);
      if (!(typeof i == "symbol" || i.startsWith("$") || i.startsWith("__"))) {
        for (const o of t)
          if (o.value && Reflect.has(o.value, i)) {
            const r = Reflect.get(o.value, i);
            return typeof r == "function" ? r.bind(o.value) : r;
          }
      }
    },
    has(l, i) {
      if (Reflect.has(l, i))
        return !0;
      if (typeof i == "symbol" || i.startsWith("$") || i.startsWith("__")) return !1;
      for (const o of t)
        if (o.value && Reflect.has(o.value, i))
          return !0;
      return !1;
    },
    set(l, i, o) {
      if (Reflect.has(l, i))
        return Reflect.set(l, i, o);
      if (typeof i == "symbol" || i.startsWith("$") || i.startsWith("__")) return !1;
      for (const r of t)
        if (r.value && Reflect.has(r.value, i))
          return Reflect.set(r.value, i, o);
      return !1;
    },
    getOwnPropertyDescriptor(l, i) {
      var r, u;
      const o = Reflect.getOwnPropertyDescriptor(l, i);
      if (o) return o;
      if (!(typeof i == "symbol" || i.startsWith("$") || i.startsWith("__"))) {
        for (const c of t) {
          if (!c.value) continue;
          const d = (u = Bl(c.value, i)) != null ? u : "_" in c.value ? Bl((r = c.value._) == null ? void 0 : r.setupState, i) : void 0;
          if (d) return d;
        }
        for (const c of t) {
          const d = c.value && c.value[Tl];
          if (!d) continue;
          const f = d.slice();
          for (; f.length; ) {
            const m = f.shift(), g = Bl(m.value, i);
            if (g) return g;
            const y = m.value && m.value[Tl];
            y && f.push(...y);
          }
        }
      }
    }
  });
}
const fu = M(v({
  // TODO
  // disableKeys: Boolean,
  id: String,
  submenu: Boolean
}, We(ha({
  closeDelay: 250,
  closeOnContentClick: !0,
  locationStrategy: "connected",
  location: void 0,
  openDelay: 300,
  scrim: !1,
  scrollStrategy: "reposition",
  transition: {
    component: Za
  }
}), ["absolute"])), "VMenu"), Rn = N()({
  name: "VMenu",
  props: fu(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = oe(e, "modelValue"), {
      scopeId: l
    } = In(), {
      isRtl: i
    } = je(), o = Qe(), r = S(() => e.id || `v-menu-${o}`), u = G(), c = Ce(Jl, null), d = Z(/* @__PURE__ */ new Set());
    Be(Jl, {
      register() {
        d.value.add(o);
      },
      unregister() {
        d.value.delete(o);
      },
      closeParents(h) {
        setTimeout(() => {
          var k;
          !d.value.size && !e.persistent && (h == null || (k = u.value) != null && k.contentEl && !vd(h, u.value.contentEl)) && (a.value = !1, c == null || c.closeParents());
        }, 40);
      }
    }), ot(() => c == null ? void 0 : c.unregister()), _r(() => a.value = !1);
    function f(h) {
      return Ke(this, null, function* () {
        var I, A, x;
        const k = h.relatedTarget, C = h.target;
        yield _e(), a.value && k !== C && ((I = u.value) != null && I.contentEl) && // We're the topmost menu
        ((A = u.value) != null && A.globalTop) && // It isn't the document or the menu body
        ![document, u.value.contentEl].includes(C) && // It isn't inside the menu body
        !u.value.contentEl.contains(C) && ((x = Zn(u.value.contentEl)[0]) == null || x.focus());
      });
    }
    Q(a, (h) => {
      h ? (c == null || c.register(), document.addEventListener("focusin", f, {
        once: !0
      })) : (c == null || c.unregister(), document.removeEventListener("focusin", f));
    });
    function m(h) {
      c == null || c.closeParents(h);
    }
    function g(h) {
      var k, C, I, A, x;
      if (!e.disabled)
        if (h.key === "Tab" || h.key === "Enter" && !e.closeOnContentClick) {
          if (h.key === "Enter" && (h.target instanceof HTMLTextAreaElement || h.target instanceof HTMLInputElement && h.target.closest("form"))) return;
          h.key === "Enter" && h.preventDefault(), Fr(Zn((k = u.value) == null ? void 0 : k.contentEl, !1), h.shiftKey ? "prev" : "next", (T) => T.tabIndex >= 0) || (a.value = !1, (I = (C = u.value) == null ? void 0 : C.activatorEl) == null || I.focus());
        } else e.submenu && h.key === (i.value ? "ArrowRight" : "ArrowLeft") && (a.value = !1, (x = (A = u.value) == null ? void 0 : A.activatorEl) == null || x.focus());
    }
    function y(h) {
      var C;
      if (e.disabled) return;
      const k = (C = u.value) == null ? void 0 : C.contentEl;
      k && a.value ? h.key === "ArrowDown" ? (h.preventDefault(), h.stopImmediatePropagation(), an(k, "next")) : h.key === "ArrowUp" ? (h.preventDefault(), h.stopImmediatePropagation(), an(k, "prev")) : e.submenu && (h.key === (i.value ? "ArrowRight" : "ArrowLeft") ? a.value = !1 : h.key === (i.value ? "ArrowLeft" : "ArrowRight") && (h.preventDefault(), an(k, "first"))) : (e.submenu ? h.key === (i.value ? "ArrowLeft" : "ArrowRight") : ["ArrowDown", "ArrowUp"].includes(h.key)) && (a.value = !0, h.preventDefault(), setTimeout(() => setTimeout(() => y(h))));
    }
    const b = S(() => H({
      "aria-haspopup": "menu",
      "aria-expanded": String(a.value),
      "aria-owns": r.value,
      onKeydown: y
    }, e.activatorProps));
    return z(() => {
      var k;
      const h = At.filterProps(e);
      return s(At, H({
        ref: u,
        id: r.value,
        class: ["v-menu", e.class],
        style: e.style
      }, h, {
        modelValue: a.value,
        "onUpdate:modelValue": (C) => a.value = C,
        absolute: !0,
        activatorProps: b.value,
        location: (k = e.location) != null ? k : e.submenu ? "end" : "bottom",
        "onClick:outside": m,
        onKeydown: g
      }, l), {
        activator: t.activator,
        default: function() {
          for (var C = arguments.length, I = new Array(C), A = 0; A < C; A++)
            I[A] = arguments[A];
          return s(he, {
            root: "VMenu"
          }, {
            default: () => {
              var x;
              return [(x = t.default) == null ? void 0 : x.call(t, ...I)];
            }
          });
        }
      });
    }), xt({
      id: r,
      ΨopenChildren: d
    }, u);
  }
}), tg = M(v(v({
  active: Boolean,
  disabled: Boolean,
  max: [Number, String],
  value: {
    type: [Number, String],
    default: 0
  }
}, te()), It({
  transition: {
    component: pi
  }
})), "VCounter"), rl = N()({
  name: "VCounter",
  functional: !0,
  props: tg(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = S(() => e.max ? `${e.value} / ${e.max}` : String(e.value));
    return z(() => s(lt, {
      transition: e.transition
    }, {
      default: () => [pe(s("div", {
        class: ["v-counter", {
          "text-error": e.max && !e.disabled && parseFloat(e.value) > parseFloat(e.max)
        }, e.class],
        style: e.style
      }, [t.default ? t.default({
        counter: a.value,
        max: e.max,
        value: e.value
      }) : a.value]), [[Pt, e.active]])]
    })), {};
  }
}), ng = M(v({
  floating: Boolean
}, te()), "VFieldLabel"), Xn = N()({
  name: "VFieldLabel",
  props: ng(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    return z(() => s(Yn, {
      class: ["v-field-label", {
        "v-field-label--floating": e.floating
      }, e.class],
      style: e.style,
      "aria-hidden": e.floating || void 0
    }, t)), {};
  }
}), ag = ["underlined", "outlined", "filled", "solo", "solo-inverted", "solo-filled", "plain"], ya = M(v(v(v(v({
  appendInnerIcon: ve,
  bgColor: String,
  clearable: Boolean,
  clearIcon: {
    type: ve,
    default: "$clear"
  },
  active: Boolean,
  centerAffix: {
    type: Boolean,
    default: void 0
  },
  color: String,
  baseColor: String,
  dirty: Boolean,
  disabled: {
    type: Boolean,
    default: null
  },
  error: Boolean,
  flat: Boolean,
  label: String,
  persistentClear: Boolean,
  prependInnerIcon: ve,
  reverse: Boolean,
  singleLine: Boolean,
  variant: {
    type: String,
    default: "filled",
    validator: (e) => ag.includes(e)
  },
  "onClick:clear": Je(),
  "onClick:appendInner": Je(),
  "onClick:prependInner": Je()
}, te()), nl()), De()), Se()), "VField"), Un = N()({
  name: "VField",
  inheritAttrs: !1,
  props: v(v({
    id: String
  }, ma()), ya()),
  emits: {
    "update:focused": (e) => !0,
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      attrs: t,
      emit: a,
      slots: l
    } = n;
    const {
      themeClasses: i
    } = Pe(e), {
      loaderClasses: o
    } = ca(e), {
      focusClasses: r,
      isFocused: u,
      focus: c,
      blur: d
    } = Nt(e), {
      InputIcon: f
    } = Os(e), {
      roundedClasses: m
    } = Oe(e), {
      rtlClasses: g
    } = je(), y = S(() => e.dirty || e.active), b = S(() => !e.singleLine && !!(e.label || l.label)), h = Qe(), k = S(() => e.id || `input-${h}`), C = S(() => `${k.value}-messages`), I = G(), A = G(), x = G(), P = S(() => ["plain", "underlined"].includes(e.variant)), {
      backgroundColorClasses: T,
      backgroundColorStyles: w
    } = Le($(e, "bgColor")), {
      textColorClasses: _,
      textColorStyles: B
    } = tt(S(() => e.error || e.disabled ? void 0 : y.value && u.value ? e.color : e.baseColor));
    Q(y, (p) => {
      if (b.value) {
        const R = I.value.$el, U = A.value.$el;
        requestAnimationFrame(() => {
          const q = xi(R), K = U.getBoundingClientRect(), E = K.x - q.x, F = K.y - q.y - (q.height / 2 - K.height / 2), O = K.width / 0.75, Y = Math.abs(O - q.width) > 1 ? {
            maxWidth: ee(O)
          } : void 0, ie = getComputedStyle(R), ne = getComputedStyle(U), ue = parseFloat(ie.transitionDuration) * 1e3 || 150, W = parseFloat(ne.getPropertyValue("--v-field-label-scale")), ae = ne.getPropertyValue("color");
          R.style.visibility = "visible", U.style.visibility = "hidden", tn(R, v({
            transform: `translate(${E}px, ${F}px) scale(${W})`,
            color: ae
          }, Y), {
            duration: ue,
            easing: Qn,
            direction: p ? "normal" : "reverse"
          }).finished.then(() => {
            R.style.removeProperty("visibility"), U.style.removeProperty("visibility");
          });
        });
      }
    }, {
      flush: "post"
    });
    const V = S(() => ({
      isActive: y,
      isFocused: u,
      controlRef: x,
      blur: d,
      focus: c
    }));
    function L(p) {
      p.target !== document.activeElement && p.preventDefault();
    }
    function D(p) {
      var R;
      p.key !== "Enter" && p.key !== " " || (p.preventDefault(), p.stopPropagation(), (R = e["onClick:clear"]) == null || R.call(e, new MouseEvent("click")));
    }
    return z(() => {
      var E, F, O, Y;
      const p = e.variant === "outlined", R = !!(l["prepend-inner"] || e.prependInnerIcon), U = !!(e.clearable || l.clear), q = !!(l["append-inner"] || e.appendInnerIcon || U), K = () => l.label ? l.label(J(v({}, V.value), {
        label: e.label,
        props: {
          for: k.value
        }
      })) : e.label;
      return s("div", H({
        class: ["v-field", {
          "v-field--active": y.value,
          "v-field--appended": q,
          "v-field--center-affix": (E = e.centerAffix) != null ? E : !P.value,
          "v-field--disabled": e.disabled,
          "v-field--dirty": e.dirty,
          "v-field--error": e.error,
          "v-field--flat": e.flat,
          "v-field--has-background": !!e.bgColor,
          "v-field--persistent-clear": e.persistentClear,
          "v-field--prepended": R,
          "v-field--reverse": e.reverse,
          "v-field--single-line": e.singleLine,
          "v-field--no-label": !K(),
          [`v-field--variant-${e.variant}`]: !0
        }, i.value, T.value, r.value, o.value, m.value, g.value, e.class],
        style: [w.value, e.style],
        onClick: L
      }, t), [s("div", {
        class: "v-field__overlay"
      }, null), s(da, {
        name: "v-field",
        active: !!e.loading,
        color: e.error ? "error" : typeof e.loading == "string" ? e.loading : e.color
      }, {
        default: l.loader
      }), R && s("div", {
        key: "prepend",
        class: "v-field__prepend-inner"
      }, [e.prependInnerIcon && s(f, {
        key: "prepend-icon",
        name: "prependInner"
      }, null), (F = l["prepend-inner"]) == null ? void 0 : F.call(l, V.value)]), s("div", {
        class: "v-field__field",
        "data-no-activator": ""
      }, [["filled", "solo", "solo-inverted", "solo-filled"].includes(e.variant) && b.value && s(Xn, {
        key: "floating-label",
        ref: A,
        class: [_.value],
        floating: !0,
        for: k.value,
        style: B.value
      }, {
        default: () => [K()]
      }), s(Xn, {
        ref: I,
        for: k.value
      }, {
        default: () => [K()]
      }), (O = l.default) == null ? void 0 : O.call(l, J(v({}, V.value), {
        props: {
          id: k.value,
          class: "v-field__input",
          "aria-describedby": C.value
        },
        focus: c,
        blur: d
      }))]), U && s(Ei, {
        key: "clear"
      }, {
        default: () => [pe(s("div", {
          class: "v-field__clearable",
          onMousedown: (ie) => {
            ie.preventDefault(), ie.stopPropagation();
          }
        }, [s(he, {
          defaults: {
            VIcon: {
              icon: e.clearIcon
            }
          }
        }, {
          default: () => [l.clear ? l.clear(J(v({}, V.value), {
            props: {
              onKeydown: D,
              onFocus: c,
              onBlur: d,
              onClick: e["onClick:clear"]
            }
          })) : s(f, {
            name: "clear",
            onKeydown: D,
            onFocus: c,
            onBlur: d
          }, null)]
        })]), [[Pt, e.dirty]])]
      }), q && s("div", {
        key: "append",
        class: "v-field__append-inner"
      }, [(Y = l["append-inner"]) == null ? void 0 : Y.call(l, V.value), e.appendInnerIcon && s(f, {
        key: "append-icon",
        name: "appendInner"
      }, null)]), s("div", {
        class: ["v-field__outline", _.value],
        style: B.value
      }, [p && s(re, null, [s("div", {
        class: "v-field__outline__start"
      }, null), b.value && s("div", {
        class: "v-field__outline__notch"
      }, [s(Xn, {
        ref: A,
        floating: !0,
        for: k.value
      }, {
        default: () => [K()]
      })]), s("div", {
        class: "v-field__outline__end"
      }, null)]), P.value && b.value && s(Xn, {
        ref: A,
        floating: !0,
        for: k.value
      }, {
        default: () => [K()]
      })])]);
    }), {
      controlRef: x
    };
  }
});
function Ui(e) {
  const n = Object.keys(Un.props).filter((t) => !ja(t) && t !== "class" && t !== "style");
  return Si(e, n);
}
const lg = ["color", "file", "time", "date", "datetime-local", "week", "month"], sl = M(v(v({
  autofocus: Boolean,
  counter: [Boolean, Number, String],
  counterValue: [Number, Function],
  prefix: String,
  placeholder: String,
  persistentPlaceholder: Boolean,
  persistentCounter: Boolean,
  suffix: String,
  role: String,
  type: {
    type: String,
    default: "text"
  },
  modelModifiers: Object
}, Ht()), ya()), "VTextField"), sn = N()({
  name: "VTextField",
  directives: {
    Intersect: Qa
  },
  inheritAttrs: !1,
  props: sl(),
  emits: {
    "click:control": (e) => !0,
    "mousedown:control": (e) => !0,
    "update:focused": (e) => !0,
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      attrs: t,
      emit: a,
      slots: l
    } = n;
    const i = oe(e, "modelValue"), {
      isFocused: o,
      focus: r,
      blur: u
    } = Nt(e), c = S(() => {
      var P;
      return typeof e.counterValue == "function" ? e.counterValue(i.value) : typeof e.counterValue == "number" ? e.counterValue : ((P = i.value) != null ? P : "").toString().length;
    }), d = S(() => {
      if (t.maxlength) return t.maxlength;
      if (!(!e.counter || typeof e.counter != "number" && typeof e.counter != "string"))
        return e.counter;
    }), f = S(() => ["plain", "underlined"].includes(e.variant));
    function m(P, T) {
      var w, _;
      !e.autofocus || !P || (_ = (w = T[0].target) == null ? void 0 : w.focus) == null || _.call(w);
    }
    const g = G(), y = G(), b = G(), h = S(() => lg.includes(e.type) || e.persistentPlaceholder || o.value || e.active);
    function k() {
      var P;
      b.value !== document.activeElement && ((P = b.value) == null || P.focus()), o.value || r();
    }
    function C(P) {
      a("mousedown:control", P), P.target !== b.value && (k(), P.preventDefault());
    }
    function I(P) {
      k(), a("click:control", P);
    }
    function A(P) {
      P.stopPropagation(), k(), _e(() => {
        i.value = null, Ci(e["onClick:clear"], P);
      });
    }
    function x(P) {
      var w;
      const T = P.target;
      if (i.value = T.value, (w = e.modelModifiers) != null && w.trim && ["text", "search", "password", "tel", "url"].includes(e.type)) {
        const _ = [T.selectionStart, T.selectionEnd];
        _e(() => {
          T.selectionStart = _[0], T.selectionEnd = _[1];
        });
      }
    }
    return z(() => {
      const P = !!(l.counter || e.counter !== !1 && e.counter != null), T = !!(P || l.details), [w, _] = Gt(t), D = nt.filterProps(e), {
        modelValue: B
      } = D, V = He(D, [
        "modelValue"
      ]), L = Ui(e);
      return s(nt, H({
        ref: g,
        modelValue: i.value,
        "onUpdate:modelValue": (p) => i.value = p,
        class: ["v-text-field", {
          "v-text-field--prefixed": e.prefix,
          "v-text-field--suffixed": e.suffix,
          "v-input--plain-underlined": f.value
        }, e.class],
        style: e.style
      }, w, V, {
        centerAffix: !f.value,
        focused: o.value
      }), J(v({}, l), {
        default: (p) => {
          let {
            id: R,
            isDisabled: U,
            isDirty: q,
            isReadonly: K,
            isValid: E
          } = p;
          return s(Un, H({
            ref: y,
            onMousedown: C,
            onClick: I,
            "onClick:clear": A,
            "onClick:prependInner": e["onClick:prependInner"],
            "onClick:appendInner": e["onClick:appendInner"],
            role: e.role
          }, L, {
            id: R.value,
            active: h.value || q.value,
            dirty: q.value || e.dirty,
            disabled: U.value,
            focused: o.value,
            error: E.value === !1
          }), J(v({}, l), {
            default: (F) => {
              let {
                props: ne
              } = F, ue = ne, {
                class: O
              } = ue, Y = He(ue, [
                "class"
              ]);
              const ie = pe(s("input", H({
                ref: b,
                value: i.value,
                onInput: x,
                autofocus: e.autofocus,
                readonly: K.value,
                disabled: U.value,
                name: e.name,
                placeholder: e.placeholder,
                size: 1,
                type: e.type,
                onFocus: k,
                onBlur: u
              }, Y, _), null), [[mt("intersect"), {
                handler: m
              }, null, {
                once: !0
              }]]);
              return s(re, null, [e.prefix && s("span", {
                class: "v-text-field__prefix"
              }, [s("span", {
                class: "v-text-field__prefix__text"
              }, [e.prefix])]), l.default ? s("div", {
                class: O,
                "data-no-activator": ""
              }, [l.default(), ie]) : Xc(ie, {
                class: O
              }), e.suffix && s("span", {
                class: "v-text-field__suffix"
              }, [s("span", {
                class: "v-text-field__suffix__text"
              }, [e.suffix])])]);
            }
          }));
        },
        details: T ? (p) => {
          var R;
          return s(re, null, [(R = l.details) == null ? void 0 : R.call(l, p), P && s(re, null, [s("span", null, null), s(rl, {
            active: e.persistentCounter || o.value,
            value: c.value,
            max: d.value,
            disabled: e.disabled
          }, l.counter)])]);
        } : void 0
      }));
    }), xt({}, g, y, b);
  }
}), ig = M(v({
  renderless: Boolean
}, te()), "VVirtualScrollItem"), mu = N()({
  name: "VVirtualScrollItem",
  inheritAttrs: !1,
  props: ig(),
  emits: {
    "update:height": (e) => !0
  },
  setup(e, n) {
    let {
      attrs: t,
      emit: a,
      slots: l
    } = n;
    const {
      resizeRef: i,
      contentRect: o
    } = Vt(void 0, "border");
    Q(() => {
      var r;
      return (r = o.value) == null ? void 0 : r.height;
    }, (r) => {
      r != null && a("update:height", r);
    }), z(() => {
      var r, u;
      return e.renderless ? s(re, null, [(r = l.default) == null ? void 0 : r.call(l, {
        itemRef: i
      })]) : s("div", H({
        ref: i,
        class: ["v-virtual-scroll__item", e.class],
        style: e.style
      }, t), [(u = l.default) == null ? void 0 : u.call(l)]);
    });
  }
}), og = -1, rg = 1, Dl = 100, gu = M({
  itemHeight: {
    type: [Number, String],
    default: null
  },
  height: [Number, String]
}, "virtual");
function hu(e, n) {
  const t = ht(), a = Z(0);
  Re(() => {
    a.value = parseFloat(e.itemHeight || 0);
  });
  const l = Z(0), i = Z(Math.ceil(
    // Assume 16px items filling the entire screen height if
    // not provided. This is probably incorrect but it minimises
    // the chance of ending up with empty space at the bottom.
    // The default value is set here to avoid poisoning getSize()
    (parseInt(e.height) || t.height.value) / (a.value || 16)
  ) || 1), o = Z(0), r = Z(0), u = G(), c = G();
  let d = 0;
  const {
    resizeRef: f,
    contentRect: m
  } = Vt();
  Re(() => {
    f.value = u.value;
  });
  const g = S(() => {
    var E;
    return u.value === document.documentElement ? t.height.value : ((E = m.value) == null ? void 0 : E.height) || parseInt(e.height) || 0;
  }), y = S(() => !!(u.value && c.value && g.value && a.value));
  let b = Array.from({
    length: n.value.length
  }), h = Array.from({
    length: n.value.length
  });
  const k = Z(0);
  let C = -1;
  function I(E) {
    return b[E] || a.value;
  }
  const A = rd(() => {
    const E = performance.now();
    h[0] = 0;
    const F = n.value.length;
    for (let O = 1; O <= F - 1; O++)
      h[O] = (h[O - 1] || 0) + I(O - 1);
    k.value = Math.max(k.value, performance.now() - E);
  }, k), x = Q(y, (E) => {
    E && (x(), d = c.value.offsetTop, A.immediate(), R(), ~C && _e(() => {
      Ie && window.requestAnimationFrame(() => {
        q(C), C = -1;
      });
    }));
  });
  it(() => {
    A.clear();
  });
  function P(E, F) {
    const O = b[E], Y = a.value;
    a.value = Y ? Math.min(a.value, F) : F, (O !== F || Y !== a.value) && (b[E] = F, A());
  }
  function T(E) {
    return E = Ne(E, 0, n.value.length - 1), h[E] || 0;
  }
  function w(E) {
    return sg(h, E);
  }
  let _ = 0, B = 0, V = 0;
  Q(g, (E, F) => {
    F && (R(), E < F && requestAnimationFrame(() => {
      B = 0, R();
    }));
  });
  function L() {
    if (!u.value || !c.value) return;
    const E = u.value.scrollTop, F = performance.now();
    F - V > 500 ? (B = Math.sign(E - _), d = c.value.offsetTop) : B = E - _, _ = E, V = F, R();
  }
  function D() {
    !u.value || !c.value || (B = 0, V = 0, R());
  }
  let p = -1;
  function R() {
    cancelAnimationFrame(p), p = requestAnimationFrame(U);
  }
  function U() {
    if (!u.value || !g.value) return;
    const E = _ - d, F = Math.sign(B), O = Math.max(0, E - Dl), Y = Ne(w(O), 0, n.value.length), ie = E + g.value + Dl, ne = Ne(w(ie) + 1, Y + 1, n.value.length);
    if (
      // Only update the side we're scrolling towards,
      // the other side will be updated incidentally
      (F !== og || Y < l.value) && (F !== rg || ne > i.value)
    ) {
      const ue = T(l.value) - T(Y), W = T(ne) - T(i.value);
      Math.max(ue, W) > Dl ? (l.value = Y, i.value = ne) : (Y <= 0 && (l.value = Y), ne >= n.value.length && (i.value = ne));
    }
    o.value = T(l.value), r.value = T(n.value.length) - T(i.value);
  }
  function q(E) {
    const F = T(E);
    !u.value || E && !F ? C = E : u.value.scrollTop = F;
  }
  const K = S(() => n.value.slice(l.value, i.value).map((E, F) => ({
    raw: E,
    index: F + l.value
  })));
  return Q(n, () => {
    b = Array.from({
      length: n.value.length
    }), h = Array.from({
      length: n.value.length
    }), A.immediate(), R();
  }, {
    deep: !0
  }), {
    calculateVisibleItems: R,
    containerRef: u,
    markerRef: c,
    computedItems: K,
    paddingTop: o,
    paddingBottom: r,
    scrollToIndex: q,
    handleScroll: L,
    handleScrollend: D,
    handleItemResize: P
  };
}
function sg(e, n) {
  let t = e.length - 1, a = 0, l = 0, i = null, o = -1;
  if (e[t] < n)
    return t;
  for (; a <= t; )
    if (l = a + t >> 1, i = e[l], i > n)
      t = l - 1;
    else if (i < n)
      o = l, a = l + 1;
    else return i === n ? l : a;
  return o;
}
const ug = M(v(v(v({
  items: {
    type: Array,
    default: () => []
  },
  renderless: Boolean
}, gu()), te()), Ye()), "VVirtualScroll"), ul = N()({
  name: "VVirtualScroll",
  props: ug(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = Fe("VVirtualScroll"), {
      dimensionStyles: l
    } = Ge(e), {
      calculateVisibleItems: i,
      containerRef: o,
      markerRef: r,
      handleScroll: u,
      handleScrollend: c,
      handleItemResize: d,
      scrollToIndex: f,
      paddingTop: m,
      paddingBottom: g,
      computedItems: y
    } = hu(e, $(e, "items"));
    return ct(() => e.renderless, () => {
      function b() {
        var C, I;
        const k = (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1) ? "addEventListener" : "removeEventListener";
        o.value === document.documentElement ? (document[k]("scroll", u, {
          passive: !0
        }), document[k]("scrollend", c)) : ((C = o.value) == null || C[k]("scroll", u, {
          passive: !0
        }), (I = o.value) == null || I[k]("scrollend", c));
      }
      rt(() => {
        o.value = Ii(a.vnode.el, !0), b(!0);
      }), it(b);
    }), z(() => {
      const b = y.value.map((h) => s(mu, {
        key: h.index,
        renderless: e.renderless,
        "onUpdate:height": (k) => d(h.index, k)
      }, {
        default: (k) => {
          var C;
          return (C = t.default) == null ? void 0 : C.call(t, v({
            item: h.raw,
            index: h.index
          }, k));
        }
      }));
      return e.renderless ? s(re, null, [s("div", {
        ref: r,
        class: "v-virtual-scroll__spacer",
        style: {
          paddingTop: ee(m.value)
        }
      }, null), b, s("div", {
        class: "v-virtual-scroll__spacer",
        style: {
          paddingBottom: ee(g.value)
        }
      }, null)]) : s("div", {
        ref: o,
        class: ["v-virtual-scroll", e.class],
        onScrollPassive: u,
        onScrollend: c,
        style: [l.value, e.style]
      }, [s("div", {
        ref: r,
        class: "v-virtual-scroll__container",
        style: {
          paddingTop: ee(m.value),
          paddingBottom: ee(g.value)
        }
      }, [b])]);
    }), {
      calculateVisibleItems: i,
      scrollToIndex: f
    };
  }
});
function Ki(e, n) {
  const t = Z(!1);
  let a;
  function l(r) {
    cancelAnimationFrame(a), t.value = !0, a = requestAnimationFrame(() => {
      a = requestAnimationFrame(() => {
        t.value = !1;
      });
    });
  }
  function i() {
    return Ke(this, null, function* () {
      yield new Promise((r) => requestAnimationFrame(r)), yield new Promise((r) => requestAnimationFrame(r)), yield new Promise((r) => requestAnimationFrame(r)), yield new Promise((r) => {
        if (t.value) {
          const u = Q(t, () => {
            u(), r();
          });
        } else r();
      });
    });
  }
  function o(r) {
    return Ke(this, null, function* () {
      var d, f;
      if (r.key === "Tab" && ((d = n.value) == null || d.focus()), !["PageDown", "PageUp", "Home", "End"].includes(r.key)) return;
      const u = (f = e.value) == null ? void 0 : f.$el;
      if (!u) return;
      (r.key === "Home" || r.key === "End") && u.scrollTo({
        top: r.key === "Home" ? 0 : u.scrollHeight,
        behavior: "smooth"
      }), yield i();
      const c = u.querySelectorAll(":scope > :not(.v-virtual-scroll__spacer)");
      if (r.key === "PageDown" || r.key === "Home") {
        const m = u.getBoundingClientRect().top;
        for (const g of c)
          if (g.getBoundingClientRect().top >= m) {
            g.focus();
            break;
          }
      } else {
        const m = u.getBoundingClientRect().bottom;
        for (const g of [...c].reverse())
          if (g.getBoundingClientRect().bottom <= m) {
            g.focus();
            break;
          }
      }
    });
  }
  return {
    onScrollPassive: l,
    onKeydown: o
  };
}
const qi = M(v({
  chips: Boolean,
  closableChips: Boolean,
  closeText: {
    type: String,
    default: "$vuetify.close"
  },
  openText: {
    type: String,
    default: "$vuetify.open"
  },
  eager: Boolean,
  hideNoData: Boolean,
  hideSelected: Boolean,
  listProps: {
    type: Object
  },
  menu: Boolean,
  menuIcon: {
    type: ve,
    default: "$dropdown"
  },
  menuProps: {
    type: Object
  },
  multiple: Boolean,
  noDataText: {
    type: String,
    default: "$vuetify.noDataText"
  },
  openOnClear: Boolean,
  itemColor: String
}, lu({
  itemChildren: !1
})), "Select"), cg = M(v(v(v({}, qi()), We(sl({
  modelValue: null,
  role: "combobox"
}), ["validationValue", "dirty", "appendInnerIcon"])), It({
  transition: {
    component: Za
  }
})), "VSelect"), Xi = N()({
  name: "VSelect",
  props: cg(),
  emits: {
    "update:focused": (e) => !0,
    "update:modelValue": (e) => !0,
    "update:menu": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      t: a
    } = $e(), l = G(), i = G(), o = G(), r = oe(e, "menu"), u = S({
      get: () => r.value,
      set: (E) => {
        var F;
        r.value && !E && ((F = i.value) != null && F.ΨopenChildren.size) || (r.value = E);
      }
    }), {
      items: c,
      transformIn: d,
      transformOut: f
    } = zi(e), m = oe(e, "modelValue", [], (E) => d(E === null ? [null] : Me(E)), (E) => {
      var O;
      const F = f(E);
      return e.multiple ? F : (O = F[0]) != null ? O : null;
    }), g = S(() => typeof e.counterValue == "function" ? e.counterValue(m.value) : typeof e.counterValue == "number" ? e.counterValue : m.value.length), y = il(), b = S(() => m.value.map((E) => E.value)), h = Z(!1), k = S(() => u.value ? e.closeText : e.openText);
    let C = "", I;
    const A = S(() => e.hideSelected ? c.value.filter((E) => !m.value.some((F) => e.valueComparator(F, E))) : c.value), x = S(() => e.hideNoData && !A.value.length || e.readonly || (y == null ? void 0 : y.isReadonly.value)), P = S(() => {
      var E;
      return J(v({}, e.menuProps), {
        activatorProps: J(v({}, ((E = e.menuProps) == null ? void 0 : E.activatorProps) || {}), {
          "aria-haspopup": "listbox"
          // Set aria-haspopup to 'listbox'
        })
      });
    }), T = G(), w = Ki(T, l);
    function _(E) {
      e.openOnClear && (u.value = !0);
    }
    function B() {
      x.value || (u.value = !u.value);
    }
    function V(E) {
      Ea(E) && L(E);
    }
    function L(E) {
      var ie, ne;
      if (!E.key || e.readonly || y != null && y.isReadonly.value) return;
      ["Enter", " ", "ArrowDown", "ArrowUp", "Home", "End"].includes(E.key) && E.preventDefault(), ["Enter", "ArrowDown", " "].includes(E.key) && (u.value = !0), ["Escape", "Tab"].includes(E.key) && (u.value = !1), E.key === "Home" ? (ie = T.value) == null || ie.focus("first") : E.key === "End" && ((ne = T.value) == null || ne.focus("last"));
      const F = 1e3;
      if (e.multiple || !Ea(E)) return;
      const O = performance.now();
      O - I > F && (C = ""), C += E.key.toLowerCase(), I = O;
      const Y = c.value.find((ue) => ue.title.toLowerCase().startsWith(C));
      if (Y !== void 0) {
        m.value = [Y];
        const ue = A.value.indexOf(Y);
        Ie && window.requestAnimationFrame(() => {
          var W;
          ue >= 0 && ((W = o.value) == null || W.scrollToIndex(ue));
        });
      }
    }
    function D(E) {
      let F = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
      if (!E.props.disabled)
        if (e.multiple) {
          const O = m.value.findIndex((ie) => e.valueComparator(ie.value, E.value)), Y = F == null ? !~O : F;
          if (~O) {
            const ie = Y ? [...m.value, E] : [...m.value];
            ie.splice(O, 1), m.value = ie;
          } else Y && (m.value = [...m.value, E]);
        } else {
          const O = F !== !1;
          m.value = O ? [E] : [], _e(() => {
            u.value = !1;
          });
        }
    }
    function p(E) {
      var F;
      (F = T.value) != null && F.$el.contains(E.relatedTarget) || (u.value = !1);
    }
    function R() {
      var E;
      e.eager && ((E = o.value) == null || E.calculateVisibleItems());
    }
    function U() {
      var E;
      h.value && ((E = l.value) == null || E.focus());
    }
    function q(E) {
      h.value = !0;
    }
    function K(E) {
      if (E == null) m.value = [];
      else if (En(l.value, ":autofill") || En(l.value, ":-webkit-autofill")) {
        const F = c.value.find((O) => O.title === E);
        F && D(F);
      } else l.value && (l.value.value = "");
    }
    return Q(u, () => {
      if (!e.hideSelected && u.value && m.value.length) {
        const E = A.value.findIndex((F) => m.value.some((O) => e.valueComparator(O.value, F.value)));
        Ie && window.requestAnimationFrame(() => {
          var F;
          E >= 0 && ((F = o.value) == null || F.scrollToIndex(E));
        });
      }
    }), Q(() => e.items, (E, F) => {
      u.value || h.value && !F.length && E.length && (u.value = !0);
    }), z(() => {
      const E = !!(e.chips || t.chip), F = !!(!e.hideNoData || A.value.length || t["prepend-item"] || t["append-item"] || t["no-data"]), O = m.value.length > 0, Y = sn.filterProps(e), ie = O || !h.value && e.label && !e.persistentPlaceholder ? void 0 : e.placeholder;
      return s(sn, H({
        ref: l
      }, Y, {
        modelValue: m.value.map((ne) => ne.props.value).join(", "),
        "onUpdate:modelValue": K,
        focused: h.value,
        "onUpdate:focused": (ne) => h.value = ne,
        validationValue: m.externalValue,
        counterValue: g.value,
        dirty: O,
        class: ["v-select", {
          "v-select--active-menu": u.value,
          "v-select--chips": !!e.chips,
          [`v-select--${e.multiple ? "multiple" : "single"}`]: !0,
          "v-select--selected": m.value.length,
          "v-select--selection-slot": !!t.selection
        }, e.class],
        style: e.style,
        inputmode: "none",
        placeholder: ie,
        "onClick:clear": _,
        "onMousedown:control": B,
        onBlur: p,
        onKeydown: L,
        "aria-label": a(k.value),
        title: a(k.value)
      }), J(v({}, t), {
        default: () => s(re, null, [s(Rn, H({
          ref: i,
          modelValue: u.value,
          "onUpdate:modelValue": (ne) => u.value = ne,
          activator: "parent",
          contentClass: "v-select__content",
          disabled: x.value,
          eager: e.eager,
          maxHeight: 310,
          openOnClick: !1,
          closeOnContentClick: !1,
          transition: e.transition,
          onAfterEnter: R,
          onAfterLeave: U
        }, P.value), {
          default: () => {
            var ne;
            return [F && s(ol, H({
              ref: T,
              selected: b.value,
              selectStrategy: e.multiple ? "independent" : "single-independent",
              onMousedown: (ue) => ue.preventDefault(),
              onKeydown: V,
              onFocusin: q,
              tabindex: "-1",
              "aria-live": "polite",
              color: (ne = e.itemColor) != null ? ne : e.color
            }, w, e.listProps), {
              default: () => {
                var ue, W, ae, se;
                return [(ue = t["prepend-item"]) == null ? void 0 : ue.call(t), !A.value.length && !e.hideNoData && ((ae = (W = t["no-data"]) == null ? void 0 : W.call(t)) != null ? ae : s(Ot, {
                  title: a(e.noDataText)
                }, null)), s(ul, {
                  ref: o,
                  renderless: !0,
                  items: A.value
                }, {
                  default: (ye) => {
                    var j, le;
                    let {
                      item: ce,
                      index: X,
                      itemRef: ge
                    } = ye;
                    const ke = H(ce.props, {
                      ref: ge,
                      key: X,
                      onClick: () => D(ce, null)
                    });
                    return (le = (j = t.item) == null ? void 0 : j.call(t, {
                      item: ce,
                      index: X,
                      props: ke
                    })) != null ? le : s(Ot, H(ke, {
                      role: "option"
                    }), {
                      prepend: (fe) => {
                        let {
                          isSelected: de
                        } = fe;
                        return s(re, null, [e.multiple && !e.hideSelected ? s($t, {
                          key: ce.value,
                          modelValue: de,
                          ripple: !1,
                          tabindex: "-1"
                        }, null) : void 0, ce.props.prependAvatar && s(kt, {
                          image: ce.props.prependAvatar
                        }, null), ce.props.prependIcon && s(Ve, {
                          icon: ce.props.prependIcon
                        }, null)]);
                      }
                    });
                  }
                }), (se = t["append-item"]) == null ? void 0 : se.call(t)];
              }
            })];
          }
        }), m.value.map((ne, ue) => {
          function W(ce) {
            ce.stopPropagation(), ce.preventDefault(), D(ne, !1);
          }
          const ae = {
            "onClick:close": W,
            onKeydown(ce) {
              ce.key !== "Enter" && ce.key !== " " || (ce.preventDefault(), ce.stopPropagation(), W(ce));
            },
            onMousedown(ce) {
              ce.preventDefault(), ce.stopPropagation();
            },
            modelValue: !0,
            "onUpdate:modelValue": void 0
          }, se = E ? !!t.chip : !!t.selection, ye = se ? Ya(E ? t.chip({
            item: ne,
            index: ue,
            props: ae
          }) : t.selection({
            item: ne,
            index: ue
          })) : void 0;
          if (!(se && !ye))
            return s("div", {
              key: ne.value,
              class: "v-select__selection"
            }, [E ? t.chip ? s(he, {
              key: "chip-defaults",
              defaults: {
                VChip: {
                  closable: e.closableChips,
                  size: "small",
                  text: ne.title
                }
              }
            }, {
              default: () => [ye]
            }) : s(Gn, H({
              key: "chip",
              closable: e.closableChips,
              size: "small",
              text: ne.title,
              disabled: ne.props.disabled
            }, ae), null) : ye != null ? ye : s("span", {
              class: "v-select__selection-text"
            }, [ne.title, e.multiple && ue < m.value.length - 1 && s("span", {
              class: "v-select__selection-comma"
            }, [jt(",")])])]);
        })]),
        "append-inner": function() {
          var ae;
          for (var ne = arguments.length, ue = new Array(ne), W = 0; W < ne; W++)
            ue[W] = arguments[W];
          return s(re, null, [(ae = t["append-inner"]) == null ? void 0 : ae.call(t, ...ue), e.menuIcon ? s(Ve, {
            class: "v-select__menu-icon",
            icon: e.menuIcon
          }, null) : void 0]);
        }
      }));
    }), xt({
      isFocused: h,
      menu: u,
      select: D
    }, l);
  }
}), dg = (e, n, t) => e == null || n == null ? -1 : e.toString().toLocaleLowerCase().indexOf(n.toString().toLocaleLowerCase()), ba = M({
  customFilter: Function,
  customKeyFilter: Object,
  filterKeys: [Array, String],
  filterMode: {
    type: String,
    default: "intersection"
  },
  noFilter: Boolean
}, "filter");
function vg(e, n, t) {
  var r, u, c;
  const a = [], l = (r = t == null ? void 0 : t.default) != null ? r : dg, i = t != null && t.filterKeys ? Me(t.filterKeys) : !1, o = Object.keys((u = t == null ? void 0 : t.customKeyFilter) != null ? u : {}).length;
  if (!(e != null && e.length)) return a;
  e: for (let d = 0; d < e.length; d++) {
    const [f, m = f] = Me(e[d]), g = {}, y = {};
    let b = -1;
    if ((n || o > 0) && !(t != null && t.noFilter)) {
      if (typeof f == "object") {
        const C = i || Object.keys(m);
        for (const I of C) {
          const A = qe(m, I), x = (c = t == null ? void 0 : t.customKeyFilter) == null ? void 0 : c[I];
          if (b = x ? x(A, n, f) : l(A, n, f), b !== -1 && b !== !1)
            x ? g[I] = b : y[I] = b;
          else if ((t == null ? void 0 : t.filterMode) === "every")
            continue e;
        }
      } else
        b = l(f, n, f), b !== -1 && b !== !1 && (y.title = b);
      const h = Object.keys(y).length, k = Object.keys(g).length;
      if (!h && !k || (t == null ? void 0 : t.filterMode) === "union" && k !== o && !h || (t == null ? void 0 : t.filterMode) === "intersection" && (k !== o || !h)) continue;
    }
    a.push({
      index: d,
      matches: v(v({}, y), g)
    });
  }
  return a;
}
function Sa(e, n, t, a) {
  const l = G([]), i = G(/* @__PURE__ */ new Map()), o = S(() => a != null && a.transform ? ut(n).map((u) => [u, a.transform(u)]) : ut(n));
  Re(() => {
    const u = typeof t == "function" ? t() : ut(t), c = typeof u != "string" && typeof u != "number" ? "" : String(u), d = vg(o.value, c, {
      customKeyFilter: v(v({}, e.customKeyFilter), ut(a == null ? void 0 : a.customKeyFilter)),
      default: e.customFilter,
      filterKeys: e.filterKeys,
      filterMode: e.filterMode,
      noFilter: e.noFilter
    }), f = ut(n), m = [], g = /* @__PURE__ */ new Map();
    d.forEach((y) => {
      let {
        index: b,
        matches: h
      } = y;
      const k = f[b];
      m.push(k), g.set(k.value, h);
    }), l.value = m, i.value = g;
  });
  function r(u) {
    return i.value.get(u.value);
  }
  return {
    filteredItems: l,
    filteredMatches: i,
    getMatches: r
  };
}
function fg(e, n, t) {
  if (n == null) return e;
  if (Array.isArray(n)) throw new Error("Multiple matches is not implemented");
  return typeof n == "number" && ~n ? s(re, null, [s("span", {
    class: "v-autocomplete__unmask"
  }, [e.substr(0, n)]), s("span", {
    class: "v-autocomplete__mask"
  }, [e.substr(n, t)]), s("span", {
    class: "v-autocomplete__unmask"
  }, [e.substr(n + t)])]) : e;
}
const mg = M(v(v(v(v({
  autoSelectFirst: {
    type: [Boolean, String]
  },
  clearOnSelect: Boolean,
  search: String
}, ba({
  filterKeys: ["title"]
})), qi()), We(sl({
  modelValue: null,
  role: "combobox"
}), ["validationValue", "dirty", "appendInnerIcon"])), It({
  transition: !1
})), "VAutocomplete"), gg = N()({
  name: "VAutocomplete",
  props: mg(),
  emits: {
    "update:focused": (e) => !0,
    "update:search": (e) => !0,
    "update:modelValue": (e) => !0,
    "update:menu": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      t: a
    } = $e(), l = G(), i = Z(!1), o = Z(!0), r = Z(!1), u = G(), c = G(), d = oe(e, "menu"), f = S({
      get: () => d.value,
      set: (X) => {
        var ge;
        d.value && !X && ((ge = u.value) != null && ge.ΨopenChildren.size) || (d.value = X);
      }
    }), m = Z(-1), g = S(() => {
      var X;
      return (X = l.value) == null ? void 0 : X.color;
    }), y = S(() => f.value ? e.closeText : e.openText), {
      items: b,
      transformIn: h,
      transformOut: k
    } = zi(e), {
      textColorClasses: C,
      textColorStyles: I
    } = tt(g), A = oe(e, "search", ""), x = oe(e, "modelValue", [], (X) => h(X === null ? [null] : Me(X)), (X) => {
      var ke;
      const ge = k(X);
      return e.multiple ? ge : (ke = ge[0]) != null ? ke : null;
    }), P = S(() => typeof e.counterValue == "function" ? e.counterValue(x.value) : typeof e.counterValue == "number" ? e.counterValue : x.value.length), T = il(), {
      filteredItems: w,
      getMatches: _
    } = Sa(e, b, () => o.value ? "" : A.value), B = S(() => e.hideSelected ? w.value.filter((X) => !x.value.some((ge) => ge.value === X.value)) : w.value), V = S(() => !!(e.chips || t.chip)), L = S(() => V.value || !!t.selection), D = S(() => x.value.map((X) => X.props.value)), p = S(() => {
      var ge;
      return (e.autoSelectFirst === !0 || e.autoSelectFirst === "exact" && A.value === ((ge = B.value[0]) == null ? void 0 : ge.title)) && B.value.length > 0 && !o.value && !r.value;
    }), R = S(() => e.hideNoData && !B.value.length || e.readonly || (T == null ? void 0 : T.isReadonly.value)), U = G(), q = Ki(U, l);
    function K(X) {
      e.openOnClear && (f.value = !0), A.value = "";
    }
    function E() {
      R.value || (f.value = !0);
    }
    function F(X) {
      R.value || (i.value && (X.preventDefault(), X.stopPropagation()), f.value = !f.value);
    }
    function O(X) {
      var ge;
      Ea(X) && ((ge = l.value) == null || ge.focus());
    }
    function Y(X) {
      var j, le, fe;
      if (e.readonly || T != null && T.isReadonly.value) return;
      const ge = l.value.selectionStart, ke = x.value.length;
      if ((m.value > -1 || ["Enter", "ArrowDown", "ArrowUp"].includes(X.key)) && X.preventDefault(), ["Enter", "ArrowDown"].includes(X.key) && (f.value = !0), ["Escape"].includes(X.key) && (f.value = !1), p.value && ["Enter", "Tab"].includes(X.key) && !x.value.some((de) => {
        let {
          value: be
        } = de;
        return be === B.value[0].value;
      }) && ce(B.value[0]), X.key === "ArrowDown" && p.value && ((j = U.value) == null || j.focus("next")), ["Backspace", "Delete"].includes(X.key)) {
        if (!e.multiple && L.value && x.value.length > 0 && !A.value) return ce(x.value[0], !1);
        if (~m.value) {
          const de = m.value;
          ce(x.value[m.value], !1), m.value = de >= ke - 1 ? ke - 2 : de;
        } else X.key === "Backspace" && !A.value && (m.value = ke - 1);
      }
      if (e.multiple) {
        if (X.key === "ArrowLeft") {
          if (m.value < 0 && ge > 0) return;
          const de = m.value > -1 ? m.value - 1 : ke - 1;
          x.value[de] ? m.value = de : (m.value = -1, l.value.setSelectionRange((le = A.value) == null ? void 0 : le.length, (fe = A.value) == null ? void 0 : fe.length));
        }
        if (X.key === "ArrowRight") {
          if (m.value < 0) return;
          const de = m.value + 1;
          x.value[de] ? m.value = de : (m.value = -1, l.value.setSelectionRange(0, 0));
        }
      }
    }
    function ie(X) {
      if (En(l.value, ":autofill") || En(l.value, ":-webkit-autofill")) {
        const ge = b.value.find((ke) => ke.title === X.target.value);
        ge && ce(ge);
      }
    }
    function ne() {
      var X;
      e.eager && ((X = c.value) == null || X.calculateVisibleItems());
    }
    function ue() {
      var X;
      i.value && (o.value = !0, (X = l.value) == null || X.focus());
    }
    function W(X) {
      i.value = !0, setTimeout(() => {
        r.value = !0;
      });
    }
    function ae(X) {
      r.value = !1;
    }
    function se(X) {
      (X == null || X === "" && !e.multiple && !L.value) && (x.value = []);
    }
    const ye = Z(!1);
    function ce(X) {
      let ge = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
      if (!(!X || X.props.disabled))
        if (e.multiple) {
          const ke = x.value.findIndex((le) => e.valueComparator(le.value, X.value)), j = ge == null ? !~ke : ge;
          if (~ke) {
            const le = j ? [...x.value, X] : [...x.value];
            le.splice(ke, 1), x.value = le;
          } else j && (x.value = [...x.value, X]);
          e.clearOnSelect && (A.value = "");
        } else {
          const ke = ge !== !1;
          x.value = ke ? [X] : [], A.value = ke && !L.value ? X.title : "", _e(() => {
            f.value = !1, o.value = !0;
          });
        }
    }
    return Q(i, (X, ge) => {
      var ke, j;
      X !== ge && (X ? (ye.value = !0, A.value = e.multiple || L.value ? "" : String((j = (ke = x.value.at(-1)) == null ? void 0 : ke.props.title) != null ? j : ""), o.value = !0, _e(() => ye.value = !1)) : (!e.multiple && A.value == null && (x.value = []), f.value = !1, x.value.some((le) => {
        let {
          title: fe
        } = le;
        return fe === A.value;
      }) || (A.value = ""), m.value = -1));
    }), Q(A, (X) => {
      !i.value || ye.value || (X && (f.value = !0), o.value = !X);
    }), Q(f, () => {
      if (!e.hideSelected && f.value && x.value.length) {
        const X = B.value.findIndex((ge) => x.value.some((ke) => ge.value === ke.value));
        Ie && window.requestAnimationFrame(() => {
          var ge;
          X >= 0 && ((ge = c.value) == null || ge.scrollToIndex(X));
        });
      }
    }), Q(() => e.items, (X, ge) => {
      f.value || i.value && !ge.length && X.length && (f.value = !0);
    }), z(() => {
      const X = !!(!e.hideNoData || B.value.length || t["prepend-item"] || t["append-item"] || t["no-data"]), ge = x.value.length > 0, ke = sn.filterProps(e);
      return s(sn, H({
        ref: l
      }, ke, {
        modelValue: A.value,
        "onUpdate:modelValue": [(j) => A.value = j, se],
        focused: i.value,
        "onUpdate:focused": (j) => i.value = j,
        validationValue: x.externalValue,
        counterValue: P.value,
        dirty: ge,
        onChange: ie,
        class: ["v-autocomplete", `v-autocomplete--${e.multiple ? "multiple" : "single"}`, {
          "v-autocomplete--active-menu": f.value,
          "v-autocomplete--chips": !!e.chips,
          "v-autocomplete--selection-slot": !!L.value,
          "v-autocomplete--selecting-index": m.value > -1
        }, e.class],
        style: e.style,
        readonly: e.readonly,
        placeholder: ge ? void 0 : e.placeholder,
        "onClick:clear": K,
        "onMousedown:control": E,
        onKeydown: Y
      }), J(v({}, t), {
        default: () => s(re, null, [s(Rn, H({
          ref: u,
          modelValue: f.value,
          "onUpdate:modelValue": (j) => f.value = j,
          activator: "parent",
          contentClass: "v-autocomplete__content",
          disabled: R.value,
          eager: e.eager,
          maxHeight: 310,
          openOnClick: !1,
          closeOnContentClick: !1,
          transition: e.transition,
          onAfterEnter: ne,
          onAfterLeave: ue
        }, e.menuProps), {
          default: () => {
            var j;
            return [X && s(ol, H({
              ref: U,
              selected: D.value,
              selectStrategy: e.multiple ? "independent" : "single-independent",
              onMousedown: (le) => le.preventDefault(),
              onKeydown: O,
              onFocusin: W,
              onFocusout: ae,
              tabindex: "-1",
              "aria-live": "polite",
              color: (j = e.itemColor) != null ? j : e.color
            }, q, e.listProps), {
              default: () => {
                var le, fe, de, be;
                return [(le = t["prepend-item"]) == null ? void 0 : le.call(t), !B.value.length && !e.hideNoData && ((de = (fe = t["no-data"]) == null ? void 0 : fe.call(t)) != null ? de : s(Ot, {
                  title: a(e.noDataText)
                }, null)), s(ul, {
                  ref: c,
                  renderless: !0,
                  items: B.value
                }, {
                  default: (Ue) => {
                    var _n, ka;
                    let {
                      item: Ae,
                      index: Mt,
                      itemRef: pt
                    } = Ue;
                    const Te = H(Ae.props, {
                      ref: pt,
                      key: Mt,
                      active: p.value && Mt === 0 ? !0 : void 0,
                      onClick: () => ce(Ae, null)
                    });
                    return (ka = (_n = t.item) == null ? void 0 : _n.call(t, {
                      item: Ae,
                      index: Mt,
                      props: Te
                    })) != null ? ka : s(Ot, H(Te, {
                      role: "option"
                    }), {
                      prepend: (Xt) => {
                        let {
                          isSelected: Zt
                        } = Xt;
                        return s(re, null, [e.multiple && !e.hideSelected ? s($t, {
                          key: Ae.value,
                          modelValue: Zt,
                          ripple: !1,
                          tabindex: "-1"
                        }, null) : void 0, Ae.props.prependAvatar && s(kt, {
                          image: Ae.props.prependAvatar
                        }, null), Ae.props.prependIcon && s(Ve, {
                          icon: Ae.props.prependIcon
                        }, null)]);
                      },
                      title: () => {
                        var Xt, Zt, Kn;
                        return o.value ? Ae.title : fg(Ae.title, (Xt = _(Ae)) == null ? void 0 : Xt.title, (Kn = (Zt = A.value) == null ? void 0 : Zt.length) != null ? Kn : 0);
                      }
                    });
                  }
                }), (be = t["append-item"]) == null ? void 0 : be.call(t)];
              }
            })];
          }
        }), x.value.map((j, le) => {
          function fe(Ae) {
            Ae.stopPropagation(), Ae.preventDefault(), ce(j, !1);
          }
          const de = {
            "onClick:close": fe,
            onKeydown(Ae) {
              Ae.key !== "Enter" && Ae.key !== " " || (Ae.preventDefault(), Ae.stopPropagation(), fe(Ae));
            },
            onMousedown(Ae) {
              Ae.preventDefault(), Ae.stopPropagation();
            },
            modelValue: !0,
            "onUpdate:modelValue": void 0
          }, be = V.value ? !!t.chip : !!t.selection, Ue = be ? Ya(V.value ? t.chip({
            item: j,
            index: le,
            props: de
          }) : t.selection({
            item: j,
            index: le
          })) : void 0;
          if (!(be && !Ue))
            return s("div", {
              key: j.value,
              class: ["v-autocomplete__selection", le === m.value && ["v-autocomplete__selection--selected", C.value]],
              style: le === m.value ? I.value : {}
            }, [V.value ? t.chip ? s(he, {
              key: "chip-defaults",
              defaults: {
                VChip: {
                  closable: e.closableChips,
                  size: "small",
                  text: j.title
                }
              }
            }, {
              default: () => [Ue]
            }) : s(Gn, H({
              key: "chip",
              closable: e.closableChips,
              size: "small",
              text: j.title,
              disabled: j.props.disabled
            }, de), null) : Ue != null ? Ue : s("span", {
              class: "v-autocomplete__selection-text"
            }, [j.title, e.multiple && le < x.value.length - 1 && s("span", {
              class: "v-autocomplete__selection-comma"
            }, [jt(",")])])]);
        })]),
        "append-inner": function() {
          var de;
          for (var j = arguments.length, le = new Array(j), fe = 0; fe < j; fe++)
            le[fe] = arguments[fe];
          return s(re, null, [(de = t["append-inner"]) == null ? void 0 : de.call(t, ...le), e.menuIcon ? s(Ve, {
            class: "v-autocomplete__menu-icon",
            icon: e.menuIcon,
            onMousedown: F,
            onClick: $r,
            "aria-label": a(y.value),
            title: a(y.value),
            tabindex: "-1"
          }, null) : void 0]);
        }
      }));
    }), xt({
      isFocused: i,
      isPristine: o,
      menu: f,
      search: A,
      filteredItems: w,
      select: ce
    }, l);
  }
}), hg = M(v(v(v(v(v(v({
  bordered: Boolean,
  color: String,
  content: [Number, String],
  dot: Boolean,
  floating: Boolean,
  icon: ve,
  inline: Boolean,
  label: {
    type: String,
    default: "$vuetify.badge"
  },
  max: [Number, String],
  modelValue: {
    type: Boolean,
    default: !0
  },
  offsetX: [Number, String],
  offsetY: [Number, String],
  textColor: String
}, te()), Rt({
  location: "top end"
})), De()), me()), Se()), It({
  transition: "scale-rotate-transition"
})), "VBadge"), yg = N()({
  name: "VBadge",
  inheritAttrs: !1,
  props: hg(),
  setup(e, n) {
    const {
      backgroundColorClasses: t,
      backgroundColorStyles: a
    } = Le($(e, "color")), {
      roundedClasses: l
    } = Oe(e), {
      t: i
    } = $e(), {
      textColorClasses: o,
      textColorStyles: r
    } = tt($(e, "textColor")), {
      themeClasses: u
    } = Ti(), {
      locationStyles: c
    } = Pn(e, !0, (d) => {
      var m, g;
      return (e.floating ? e.dot ? 2 : 4 : e.dot ? 8 : 12) + (["top", "bottom"].includes(d) ? +((m = e.offsetY) != null ? m : 0) : ["left", "right"].includes(d) ? +((g = e.offsetX) != null ? g : 0) : 0);
    });
    return z(() => {
      const d = Number(e.content), f = !e.max || isNaN(d) ? e.content : d <= +e.max ? d : `${e.max}+`, [m, g] = pl(n.attrs, ["aria-atomic", "aria-label", "aria-live", "role", "title"]);
      return s(e.tag, H({
        class: ["v-badge", {
          "v-badge--bordered": e.bordered,
          "v-badge--dot": e.dot,
          "v-badge--floating": e.floating,
          "v-badge--inline": e.inline
        }, e.class]
      }, g, {
        style: e.style
      }), {
        default: () => {
          var y, b;
          return [s("div", {
            class: "v-badge__wrapper"
          }, [(b = (y = n.slots).default) == null ? void 0 : b.call(y), s(lt, {
            transition: e.transition
          }, {
            default: () => {
              var h, k;
              return [pe(s("span", H({
                class: ["v-badge__badge", u.value, t.value, l.value, o.value],
                style: [a.value, r.value, e.inline ? {} : c.value],
                "aria-atomic": "true",
                "aria-label": i(e.label, d),
                "aria-live": "polite",
                role: "status"
              }, m), [e.dot ? void 0 : n.slots.badge ? (k = (h = n.slots).badge) == null ? void 0 : k.call(h) : e.icon ? s(Ve, {
                icon: e.icon
              }, null) : f]), [[Pt, e.modelValue]])];
            }
          })])];
        }
      });
    }), {};
  }
}), bg = M(v({
  color: String,
  density: String
}, te()), "VBannerActions"), yu = N()({
  name: "VBannerActions",
  props: bg(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    return Ee({
      VBtn: {
        color: e.color,
        density: e.density,
        slim: !0,
        variant: "text"
      }
    }), z(() => {
      var a;
      return s("div", {
        class: ["v-banner-actions", e.class],
        style: e.style
      }, [(a = t.default) == null ? void 0 : a.call(t)]);
    }), {};
  }
}), bu = Bt("v-banner-text"), Sg = M(v(v(v(v(v(v(v(v(v(v(v({
  avatar: String,
  bgColor: String,
  color: String,
  icon: ve,
  lines: String,
  stacked: Boolean,
  sticky: Boolean,
  text: String
}, vt()), te()), Ze()), Ye()), yn({
  mobile: null
})), Xe()), Rt()), Wn()), De()), me()), Se()), "VBanner"), kg = N()({
  name: "VBanner",
  props: Sg(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      backgroundColorClasses: a,
      backgroundColorStyles: l
    } = Le(e, "bgColor"), {
      borderClasses: i
    } = bt(e), {
      densityClasses: o
    } = st(e), {
      displayClasses: r,
      mobile: u
    } = ht(e), {
      dimensionStyles: c
    } = Ge(e), {
      elevationClasses: d
    } = et(e), {
      locationStyles: f
    } = Pn(e), {
      positionClasses: m
    } = jn(e), {
      roundedClasses: g
    } = Oe(e), {
      themeClasses: y
    } = Pe(e), b = $(e, "color"), h = $(e, "density");
    Ee({
      VBannerActions: {
        color: b,
        density: h
      }
    }), z(() => {
      const k = !!(e.text || t.text), C = !!(e.avatar || e.icon), I = !!(C || t.prepend);
      return s(e.tag, {
        class: ["v-banner", {
          "v-banner--stacked": e.stacked || u.value,
          "v-banner--sticky": e.sticky,
          [`v-banner--${e.lines}-line`]: !!e.lines
        }, y.value, a.value, i.value, o.value, r.value, d.value, m.value, g.value, e.class],
        style: [l.value, c.value, f.value, e.style],
        role: "banner"
      }, {
        default: () => {
          var A;
          return [I && s("div", {
            key: "prepend",
            class: "v-banner__prepend"
          }, [t.prepend ? s(he, {
            key: "prepend-defaults",
            disabled: !C,
            defaults: {
              VAvatar: {
                color: b.value,
                density: h.value,
                icon: e.icon,
                image: e.avatar
              }
            }
          }, t.prepend) : s(kt, {
            key: "prepend-avatar",
            color: b.value,
            density: h.value,
            icon: e.icon,
            image: e.avatar
          }, null)]), s("div", {
            class: "v-banner__content"
          }, [k && s(bu, {
            key: "text"
          }, {
            default: () => {
              var x, P;
              return [(P = (x = t.text) == null ? void 0 : x.call(t)) != null ? P : e.text];
            }
          }), (A = t.default) == null ? void 0 : A.call(t)]), t.actions && s(yu, {
            key: "actions"
          }, t.actions)];
        }
      });
    });
  }
}), Cg = M(v(v(v(v(v(v(v(v(v({
  baseColor: String,
  bgColor: String,
  color: String,
  grow: Boolean,
  mode: {
    type: String,
    validator: (e) => !e || ["horizontal", "shift"].includes(e)
  },
  height: {
    type: [Number, String],
    default: 56
  },
  active: {
    type: Boolean,
    default: !0
  }
}, vt()), te()), Ze()), Xe()), De()), bn({
  name: "bottom-navigation"
})), me({
  tag: "header"
})), xn({
  selectedClass: "v-btn--selected"
})), Se()), "VBottomNavigation"), xg = N()({
  name: "VBottomNavigation",
  props: Cg(),
  emits: {
    "update:active": (e) => !0,
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      themeClasses: a
    } = Ti(), {
      borderClasses: l
    } = bt(e), {
      backgroundColorClasses: i,
      backgroundColorStyles: o
    } = Le($(e, "bgColor")), {
      densityClasses: r
    } = st(e), {
      elevationClasses: u
    } = et(e), {
      roundedClasses: c
    } = Oe(e), {
      ssrBootStyles: d
    } = kn(), f = S(() => Number(e.height) - (e.density === "comfortable" ? 8 : 0) - (e.density === "compact" ? 16 : 0)), m = oe(e, "active", e.active), {
      layoutItemStyles: g
    } = Sn({
      id: e.name,
      order: S(() => parseInt(e.order, 10)),
      position: S(() => "bottom"),
      layoutSize: S(() => m.value ? f.value : 0),
      elementSize: f,
      active: m,
      absolute: $(e, "absolute")
    });
    return Kt(e, $i), Ee({
      VBtn: {
        baseColor: $(e, "baseColor"),
        color: $(e, "color"),
        density: $(e, "density"),
        stacked: S(() => e.mode !== "horizontal"),
        variant: "text"
      }
    }, {
      scoped: !0
    }), z(() => s(e.tag, {
      class: ["v-bottom-navigation", {
        "v-bottom-navigation--active": m.value,
        "v-bottom-navigation--grow": e.grow,
        "v-bottom-navigation--shift": e.mode === "shift"
      }, a.value, i.value, l.value, r.value, u.value, c.value, e.class],
      style: [o.value, g.value, {
        height: ee(f.value)
      }, d.value, e.style]
    }, {
      default: () => [t.default && s("div", {
        class: "v-bottom-navigation__content"
      }, [t.default()])]
    })), {};
  }
}), Su = M(v({
  fullscreen: Boolean,
  retainFocus: {
    type: Boolean,
    default: !0
  },
  scrollable: Boolean
}, ha({
  origin: "center center",
  scrollStrategy: "block",
  transition: {
    component: Za
  },
  zIndex: 2400
})), "VDialog"), Ql = N()({
  name: "VDialog",
  props: Su(),
  emits: {
    "update:modelValue": (e) => !0,
    afterEnter: () => !0,
    afterLeave: () => !0
  },
  setup(e, n) {
    let {
      emit: t,
      slots: a
    } = n;
    const l = oe(e, "modelValue"), {
      scopeId: i
    } = In(), o = G();
    function r(d) {
      var g, y;
      const f = d.relatedTarget, m = d.target;
      if (f !== m && ((g = o.value) != null && g.contentEl) && // We're the topmost dialog
      ((y = o.value) != null && y.globalTop) && // It isn't the document or the dialog body
      ![document, o.value.contentEl].includes(m) && // It isn't inside the dialog body
      !o.value.contentEl.contains(m)) {
        const b = Zn(o.value.contentEl);
        if (!b.length) return;
        const h = b[0], k = b[b.length - 1];
        f === h ? k.focus() : h.focus();
      }
    }
    Ie && Q(() => l.value && e.retainFocus, (d) => {
      d ? document.addEventListener("focusin", r) : document.removeEventListener("focusin", r);
    }, {
      immediate: !0
    });
    function u() {
      var d;
      t("afterEnter"), (d = o.value) != null && d.contentEl && !o.value.contentEl.contains(document.activeElement) && o.value.contentEl.focus({
        preventScroll: !0
      });
    }
    function c() {
      t("afterLeave");
    }
    return Q(l, (d) => Ke(this, null, function* () {
      var f;
      d || (yield _e(), (f = o.value.activatorEl) == null || f.focus({
        preventScroll: !0
      }));
    })), z(() => {
      const d = At.filterProps(e), f = H({
        "aria-haspopup": "dialog"
      }, e.activatorProps), m = H({
        tabindex: -1
      }, e.contentProps);
      return s(At, H({
        ref: o,
        class: ["v-dialog", {
          "v-dialog--fullscreen": e.fullscreen,
          "v-dialog--scrollable": e.scrollable
        }, e.class],
        style: e.style
      }, d, {
        modelValue: l.value,
        "onUpdate:modelValue": (g) => l.value = g,
        "aria-modal": "true",
        activatorProps: f,
        contentProps: m,
        role: "dialog",
        onAfterEnter: u,
        onAfterLeave: c
      }, i), {
        activator: a.activator,
        default: function() {
          for (var g = arguments.length, y = new Array(g), b = 0; b < g; b++)
            y[b] = arguments[b];
          return s(he, {
            root: "VDialog"
          }, {
            default: () => {
              var h;
              return [(h = a.default) == null ? void 0 : h.call(a, ...y)];
            }
          });
        }
      });
    }), xt({}, o);
  }
}), wg = M(v({
  inset: Boolean
}, Su({
  transition: "bottom-sheet-transition"
})), "VBottomSheet"), Vg = N()({
  name: "VBottomSheet",
  props: wg(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = oe(e, "modelValue");
    return z(() => {
      const l = Ql.filterProps(e);
      return s(Ql, H(l, {
        contentClass: ["v-bottom-sheet__content", e.contentClass],
        modelValue: a.value,
        "onUpdate:modelValue": (i) => a.value = i,
        class: ["v-bottom-sheet", {
          "v-bottom-sheet--inset": e.inset
        }, e.class],
        style: e.style
      }), t);
    }), {};
  }
}), Pg = M(v({
  divider: [Number, String]
}, te()), "VBreadcrumbsDivider"), ku = N()({
  name: "VBreadcrumbsDivider",
  props: Pg(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    return z(() => {
      var a, l;
      return s("li", {
        class: ["v-breadcrumbs-divider", e.class],
        style: e.style
      }, [(l = (a = t == null ? void 0 : t.default) == null ? void 0 : a.call(t)) != null ? l : e.divider]);
    }), {};
  }
}), Ig = M(v(v(v({
  active: Boolean,
  activeClass: String,
  activeColor: String,
  color: String,
  disabled: Boolean,
  title: String
}, te()), fa()), me({
  tag: "li"
})), "VBreadcrumbsItem"), Cu = N()({
  name: "VBreadcrumbsItem",
  props: Ig(),
  setup(e, n) {
    let {
      slots: t,
      attrs: a
    } = n;
    const l = va(e, a), i = S(() => {
      var c;
      return e.active || ((c = l.isActive) == null ? void 0 : c.value);
    }), o = S(() => i.value ? e.activeColor : e.color), {
      textColorClasses: r,
      textColorStyles: u
    } = tt(o);
    return z(() => s(e.tag, {
      class: ["v-breadcrumbs-item", {
        "v-breadcrumbs-item--active": i.value,
        "v-breadcrumbs-item--disabled": e.disabled,
        [`${e.activeClass}`]: i.value && e.activeClass
      }, r.value, e.class],
      style: [u.value, e.style],
      "aria-current": i.value ? "page" : void 0
    }, {
      default: () => {
        var c, d, f, m;
        return [l.isLink.value ? s("a", H({
          class: "v-breadcrumbs-item--link",
          onClick: l.navigate
        }, l.linkProps), [(m = (f = t.default) == null ? void 0 : f.call(t)) != null ? m : e.title]) : (d = (c = t.default) == null ? void 0 : c.call(t)) != null ? d : e.title];
      }
    })), {};
  }
}), _g = M(v(v(v(v({
  activeClass: String,
  activeColor: String,
  bgColor: String,
  color: String,
  disabled: Boolean,
  divider: {
    type: String,
    default: "/"
  },
  icon: ve,
  items: {
    type: Array,
    default: () => []
  }
}, te()), Ze()), De()), me({
  tag: "ul"
})), "VBreadcrumbs"), Ag = N()({
  name: "VBreadcrumbs",
  props: _g(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      backgroundColorClasses: a,
      backgroundColorStyles: l
    } = Le($(e, "bgColor")), {
      densityClasses: i
    } = st(e), {
      roundedClasses: o
    } = Oe(e);
    Ee({
      VBreadcrumbsDivider: {
        divider: $(e, "divider")
      },
      VBreadcrumbsItem: {
        activeClass: $(e, "activeClass"),
        activeColor: $(e, "activeColor"),
        color: $(e, "color"),
        disabled: $(e, "disabled")
      }
    });
    const r = S(() => e.items.map((u) => typeof u == "string" ? {
      item: {
        title: u
      },
      raw: u
    } : {
      item: u,
      raw: u
    }));
    return z(() => {
      const u = !!(t.prepend || e.icon);
      return s(e.tag, {
        class: ["v-breadcrumbs", a.value, i.value, o.value, e.class],
        style: [l.value, e.style]
      }, {
        default: () => {
          var c;
          return [u && s("li", {
            key: "prepend",
            class: "v-breadcrumbs__prepend"
          }, [t.prepend ? s(he, {
            key: "prepend-defaults",
            disabled: !e.icon,
            defaults: {
              VIcon: {
                icon: e.icon,
                start: !0
              }
            }
          }, t.prepend) : s(Ve, {
            key: "prepend-icon",
            start: !0,
            icon: e.icon
          }, null)]), r.value.map((d, f, m) => {
            var b, h;
            let {
              item: g,
              raw: y
            } = d;
            return s(re, null, [(h = (b = t.item) == null ? void 0 : b.call(t, {
              item: g,
              index: f
            })) != null ? h : s(Cu, H({
              key: f,
              disabled: f >= m.length - 1
            }, typeof g == "string" ? {
              title: g
            } : g), {
              default: t.title ? () => {
                var k;
                return (k = t.title) == null ? void 0 : k.call(t, {
                  item: g,
                  index: f
                });
              } : void 0
            }), f < m.length - 1 && s(ku, null, {
              default: t.divider ? () => {
                var k;
                return (k = t.divider) == null ? void 0 : k.call(t, {
                  item: y,
                  index: f
                });
              } : void 0
            })]);
          }), (c = t.default) == null ? void 0 : c.call(t)];
        }
      });
    }), {};
  }
}), xu = N()({
  name: "VCardActions",
  props: te(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    return Ee({
      VBtn: {
        slim: !0,
        variant: "text"
      }
    }), z(() => {
      var a;
      return s("div", {
        class: ["v-card-actions", e.class],
        style: e.style
      }, [(a = t.default) == null ? void 0 : a.call(t)]);
    }), {};
  }
}), Lg = M(v(v({
  opacity: [Number, String]
}, te()), me()), "VCardSubtitle"), wu = N()({
  name: "VCardSubtitle",
  props: Lg(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    return z(() => s(e.tag, {
      class: ["v-card-subtitle", e.class],
      style: [{
        "--v-card-subtitle-opacity": e.opacity
      }, e.style]
    }, t)), {};
  }
}), Vu = Bt("v-card-title"), Tg = M(v(v({
  appendAvatar: String,
  appendIcon: ve,
  prependAvatar: String,
  prependIcon: ve,
  subtitle: [String, Number],
  title: [String, Number]
}, te()), Ze()), "VCardItem"), Pu = N()({
  name: "VCardItem",
  props: Tg(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    return z(() => {
      var c;
      const a = !!(e.prependAvatar || e.prependIcon), l = !!(a || t.prepend), i = !!(e.appendAvatar || e.appendIcon), o = !!(i || t.append), r = !!(e.title != null || t.title), u = !!(e.subtitle != null || t.subtitle);
      return s("div", {
        class: ["v-card-item", e.class],
        style: e.style
      }, [l && s("div", {
        key: "prepend",
        class: "v-card-item__prepend"
      }, [t.prepend ? s(he, {
        key: "prepend-defaults",
        disabled: !a,
        defaults: {
          VAvatar: {
            density: e.density,
            image: e.prependAvatar
          },
          VIcon: {
            density: e.density,
            icon: e.prependIcon
          }
        }
      }, t.prepend) : s(re, null, [e.prependAvatar && s(kt, {
        key: "prepend-avatar",
        density: e.density,
        image: e.prependAvatar
      }, null), e.prependIcon && s(Ve, {
        key: "prepend-icon",
        density: e.density,
        icon: e.prependIcon
      }, null)])]), s("div", {
        class: "v-card-item__content"
      }, [r && s(Vu, {
        key: "title"
      }, {
        default: () => {
          var d, f;
          return [(f = (d = t.title) == null ? void 0 : d.call(t)) != null ? f : e.title];
        }
      }), u && s(wu, {
        key: "subtitle"
      }, {
        default: () => {
          var d, f;
          return [(f = (d = t.subtitle) == null ? void 0 : d.call(t)) != null ? f : e.subtitle];
        }
      }), (c = t.default) == null ? void 0 : c.call(t)]), o && s("div", {
        key: "append",
        class: "v-card-item__append"
      }, [t.append ? s(he, {
        key: "append-defaults",
        disabled: !i,
        defaults: {
          VAvatar: {
            density: e.density,
            image: e.appendAvatar
          },
          VIcon: {
            density: e.density,
            icon: e.appendIcon
          }
        }
      }, t.append) : s(re, null, [e.appendIcon && s(Ve, {
        key: "append-icon",
        density: e.density,
        icon: e.appendIcon
      }, null), e.appendAvatar && s(kt, {
        key: "append-avatar",
        density: e.density,
        image: e.appendAvatar
      }, null)])])]);
    }), {};
  }
}), Bg = M(v(v({
  opacity: [Number, String]
}, te()), me()), "VCardText"), Iu = N()({
  name: "VCardText",
  props: Bg(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    return z(() => s(e.tag, {
      class: ["v-card-text", e.class],
      style: [{
        "--v-card-text-opacity": e.opacity
      }, e.style]
    }, t)), {};
  }
}), Dg = M(v(v(v(v(v(v(v(v(v(v(v(v(v({
  appendAvatar: String,
  appendIcon: ve,
  disabled: Boolean,
  flat: Boolean,
  hover: Boolean,
  image: String,
  link: {
    type: Boolean,
    default: void 0
  },
  prependAvatar: String,
  prependIcon: ve,
  ripple: {
    type: [Boolean, Object],
    default: !0
  },
  subtitle: [String, Number],
  text: [String, Number],
  title: [String, Number]
}, vt()), te()), Ze()), Ye()), Xe()), nl()), Rt()), Wn()), De()), fa()), me()), Se()), Ct({
  variant: "elevated"
})), "VCard"), Mg = N()({
  name: "VCard",
  directives: {
    Ripple: qt
  },
  props: Dg(),
  setup(e, n) {
    let {
      attrs: t,
      slots: a
    } = n;
    const {
      themeClasses: l
    } = Pe(e), {
      borderClasses: i
    } = bt(e), {
      colorClasses: o,
      colorStyles: r,
      variantClasses: u
    } = Cn(e), {
      densityClasses: c
    } = st(e), {
      dimensionStyles: d
    } = Ge(e), {
      elevationClasses: f
    } = et(e), {
      loaderClasses: m
    } = ca(e), {
      locationStyles: g
    } = Pn(e), {
      positionClasses: y
    } = jn(e), {
      roundedClasses: b
    } = Oe(e), h = va(e, t), k = S(() => e.link !== !1 && h.isLink.value), C = S(() => !e.disabled && e.link !== !1 && (e.link || h.isClickable.value));
    return z(() => {
      const I = k.value ? "a" : e.tag, A = !!(a.title || e.title != null), x = !!(a.subtitle || e.subtitle != null), P = A || x, T = !!(a.append || e.appendAvatar || e.appendIcon), w = !!(a.prepend || e.prependAvatar || e.prependIcon), _ = !!(a.image || e.image), B = P || w || T, V = !!(a.text || e.text != null);
      return pe(s(I, H({
        class: ["v-card", {
          "v-card--disabled": e.disabled,
          "v-card--flat": e.flat,
          "v-card--hover": e.hover && !(e.disabled || e.flat),
          "v-card--link": C.value
        }, l.value, i.value, o.value, c.value, f.value, m.value, y.value, b.value, u.value, e.class],
        style: [r.value, d.value, g.value, e.style],
        onClick: C.value && h.navigate,
        tabindex: e.disabled ? -1 : void 0
      }, h.linkProps), {
        default: () => {
          var L;
          return [_ && s("div", {
            key: "image",
            class: "v-card__image"
          }, [a.image ? s(he, {
            key: "image-defaults",
            disabled: !e.image,
            defaults: {
              VImg: {
                cover: !0,
                src: e.image
              }
            }
          }, a.image) : s(Ft, {
            key: "image-img",
            cover: !0,
            src: e.image
          }, null)]), s(da, {
            name: "v-card",
            active: !!e.loading,
            color: typeof e.loading == "boolean" ? void 0 : e.loading
          }, {
            default: a.loader
          }), B && s(Pu, {
            key: "item",
            prependAvatar: e.prependAvatar,
            prependIcon: e.prependIcon,
            title: e.title,
            subtitle: e.subtitle,
            appendAvatar: e.appendAvatar,
            appendIcon: e.appendIcon
          }, {
            default: a.item,
            prepend: a.prepend,
            title: a.title,
            subtitle: a.subtitle,
            append: a.append
          }), V && s(Iu, {
            key: "text"
          }, {
            default: () => {
              var D, p;
              return [(p = (D = a.text) == null ? void 0 : D.call(a)) != null ? p : e.text];
            }
          }), (L = a.default) == null ? void 0 : L.call(a), a.actions && s(xu, null, {
            default: a.actions
          }), Ut(C.value, "v-card")];
        }
      }), [[mt("ripple"), C.value && e.ripple]]);
    }), {};
  }
}), pg = (e) => {
  const {
    touchstartX: n,
    touchendX: t,
    touchstartY: a,
    touchendY: l
  } = e, i = 0.5, o = 16;
  e.offsetX = t - n, e.offsetY = l - a, Math.abs(e.offsetY) < i * Math.abs(e.offsetX) && (e.left && t < n - o && e.left(e), e.right && t > n + o && e.right(e)), Math.abs(e.offsetX) < i * Math.abs(e.offsetY) && (e.up && l < a - o && e.up(e), e.down && l > a + o && e.down(e));
};
function Eg(e, n) {
  var a;
  const t = e.changedTouches[0];
  n.touchstartX = t.clientX, n.touchstartY = t.clientY, (a = n.start) == null || a.call(n, v({
    originalEvent: e
  }, n));
}
function Fg(e, n) {
  var a;
  const t = e.changedTouches[0];
  n.touchendX = t.clientX, n.touchendY = t.clientY, (a = n.end) == null || a.call(n, v({
    originalEvent: e
  }, n)), pg(n);
}
function $g(e, n) {
  var a;
  const t = e.changedTouches[0];
  n.touchmoveX = t.clientX, n.touchmoveY = t.clientY, (a = n.move) == null || a.call(n, v({
    originalEvent: e
  }, n));
}
function Og() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const n = {
    touchstartX: 0,
    touchstartY: 0,
    touchendX: 0,
    touchendY: 0,
    touchmoveX: 0,
    touchmoveY: 0,
    offsetX: 0,
    offsetY: 0,
    left: e.left,
    right: e.right,
    up: e.up,
    down: e.down,
    start: e.start,
    move: e.move,
    end: e.end
  };
  return {
    touchstart: (t) => Eg(t, n),
    touchend: (t) => Fg(t, n),
    touchmove: (t) => $g(t, n)
  };
}
function Rg(e, n) {
  var r, u, c;
  const t = n.value, a = t != null && t.parent ? e.parentElement : e, l = (r = t == null ? void 0 : t.options) != null ? r : {
    passive: !0
  }, i = (u = n.instance) == null ? void 0 : u.$.uid;
  if (!a || !i) return;
  const o = Og(n.value);
  a._touchHandlers = (c = a._touchHandlers) != null ? c : /* @__PURE__ */ Object.create(null), a._touchHandlers[i] = o, Dr(o).forEach((d) => {
    a.addEventListener(d, o[d], l);
  });
}
function Ng(e, n) {
  var i, o;
  const t = (i = n.value) != null && i.parent ? e.parentElement : e, a = (o = n.instance) == null ? void 0 : o.$.uid;
  if (!(t != null && t._touchHandlers) || !a) return;
  const l = t._touchHandlers[a];
  Dr(l).forEach((r) => {
    t.removeEventListener(r, l[r]);
  }), delete t._touchHandlers[a];
}
const _u = {
  mounted: Rg,
  unmounted: Ng
}, Au = Symbol.for("vuetify:v-window"), Lu = Symbol.for("vuetify:v-window-group"), cl = M(v(v(v({
  continuous: Boolean,
  nextIcon: {
    type: [Boolean, String, Function, Object],
    default: "$next"
  },
  prevIcon: {
    type: [Boolean, String, Function, Object],
    default: "$prev"
  },
  reverse: Boolean,
  showArrows: {
    type: [Boolean, String],
    validator: (e) => typeof e == "boolean" || e === "hover"
  },
  touch: {
    type: [Object, Boolean],
    default: void 0
  },
  direction: {
    type: String,
    default: "horizontal"
  },
  modelValue: null,
  disabled: Boolean,
  selectedClass: {
    type: String,
    default: "v-window-item--active"
  },
  // TODO: mandatory should probably not be exposed but do this for now
  mandatory: {
    type: [Boolean, String],
    default: "force"
  }
}, te()), me()), Se()), "VWindow"), un = N()({
  name: "VWindow",
  directives: {
    Touch: _u
  },
  props: cl(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      themeClasses: a
    } = Pe(e), {
      isRtl: l
    } = je(), {
      t: i
    } = $e(), o = Kt(e, Lu), r = G(), u = S(() => l.value ? !e.reverse : e.reverse), c = Z(!1), d = S(() => {
      const A = e.direction === "vertical" ? "y" : "x", P = (u.value ? !c.value : c.value) ? "-reverse" : "";
      return `v-window-${A}${P}-transition`;
    }), f = Z(0), m = G(void 0), g = S(() => o.items.value.findIndex((A) => o.selected.value.includes(A.id)));
    Q(g, (A, x) => {
      const P = o.items.value.length, T = P - 1;
      P <= 2 ? c.value = A < x : A === T && x === 0 ? c.value = !0 : A === 0 && x === T ? c.value = !1 : c.value = A < x;
    }), Be(Au, {
      transition: d,
      isReversed: c,
      transitionCount: f,
      transitionHeight: m,
      rootRef: r
    });
    const y = S(() => e.continuous || g.value !== 0), b = S(() => e.continuous || g.value !== o.items.value.length - 1);
    function h() {
      y.value && o.prev();
    }
    function k() {
      b.value && o.next();
    }
    const C = S(() => {
      const A = [], x = {
        icon: l.value ? e.nextIcon : e.prevIcon,
        class: `v-window__${u.value ? "right" : "left"}`,
        onClick: o.prev,
        "aria-label": i("$vuetify.carousel.prev")
      };
      A.push(y.value ? t.prev ? t.prev({
        props: x
      }) : s(we, x, null) : s("div", null, null));
      const P = {
        icon: l.value ? e.prevIcon : e.nextIcon,
        class: `v-window__${u.value ? "left" : "right"}`,
        onClick: o.next,
        "aria-label": i("$vuetify.carousel.next")
      };
      return A.push(b.value ? t.next ? t.next({
        props: P
      }) : s(we, P, null) : s("div", null, null)), A;
    }), I = S(() => e.touch === !1 ? e.touch : v(v({}, {
      left: () => {
        u.value ? h() : k();
      },
      right: () => {
        u.value ? k() : h();
      },
      start: (x) => {
        let {
          originalEvent: P
        } = x;
        P.stopPropagation();
      }
    }), e.touch === !0 ? {} : e.touch));
    return z(() => pe(s(e.tag, {
      ref: r,
      class: ["v-window", {
        "v-window--show-arrows-on-hover": e.showArrows === "hover"
      }, a.value, e.class],
      style: e.style
    }, {
      default: () => {
        var A, x;
        return [s("div", {
          class: "v-window__container",
          style: {
            height: m.value
          }
        }, [(A = t.default) == null ? void 0 : A.call(t, {
          group: o
        }), e.showArrows !== !1 && s("div", {
          class: "v-window__controls"
        }, [C.value])]), (x = t.additional) == null ? void 0 : x.call(t, {
          group: o
        })];
      }
    }), [[mt("touch"), I.value]])), {
      group: o
    };
  }
}), Hg = M(v({
  color: String,
  cycle: Boolean,
  delimiterIcon: {
    type: ve,
    default: "$delimiter"
  },
  height: {
    type: [Number, String],
    default: 500
  },
  hideDelimiters: Boolean,
  hideDelimiterBackground: Boolean,
  interval: {
    type: [Number, String],
    default: 6e3,
    validator: (e) => Number(e) > 0
  },
  progress: [Boolean, String],
  verticalDelimiters: [Boolean, String]
}, cl({
  continuous: !0,
  mandatory: "force",
  showArrows: !0
})), "VCarousel"), zg = N()({
  name: "VCarousel",
  props: Hg(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = oe(e, "modelValue"), {
      t: l
    } = $e(), i = G();
    let o = -1;
    Q(a, u), Q(() => e.interval, u), Q(() => e.cycle, (c) => {
      c ? u() : window.clearTimeout(o);
    }), rt(r);
    function r() {
      !e.cycle || !i.value || (o = window.setTimeout(i.value.group.next, +e.interval > 0 ? +e.interval : 6e3));
    }
    function u() {
      window.clearTimeout(o), window.requestAnimationFrame(r);
    }
    return z(() => {
      const c = un.filterProps(e);
      return s(un, H({
        ref: i
      }, c, {
        modelValue: a.value,
        "onUpdate:modelValue": (d) => a.value = d,
        class: ["v-carousel", {
          "v-carousel--hide-delimiter-background": e.hideDelimiterBackground,
          "v-carousel--vertical-delimiters": e.verticalDelimiters
        }, e.class],
        style: [{
          height: ee(e.height)
        }, e.style]
      }), {
        default: t.default,
        additional: (d) => {
          let {
            group: f
          } = d;
          return s(re, null, [!e.hideDelimiters && s("div", {
            class: "v-carousel__controls",
            style: {
              left: e.verticalDelimiters === "left" && e.verticalDelimiters ? 0 : "auto",
              right: e.verticalDelimiters === "right" ? 0 : "auto"
            }
          }, [f.items.value.length > 0 && s(he, {
            defaults: {
              VBtn: {
                color: e.color,
                icon: e.delimiterIcon,
                size: "x-small",
                variant: "text"
              }
            },
            scoped: !0
          }, {
            default: () => [f.items.value.map((m, g) => {
              const y = {
                id: `carousel-item-${m.id}`,
                "aria-label": l("$vuetify.carousel.ariaLabel.delimiter", g + 1, f.items.value.length),
                class: ["v-carousel__controls__item", f.isSelected(m.id) && "v-btn--active"],
                onClick: () => f.select(m.id, !0)
              };
              return t.item ? t.item({
                props: y,
                item: m
              }) : s(we, H(m, y), null);
            })]
          })]), e.progress && s(tl, {
            class: "v-carousel__progress",
            color: typeof e.progress == "string" ? e.progress : void 0,
            modelValue: (f.getItemIndex(a.value) + 1) / f.items.value.length * 100
          }, null)]);
        },
        prev: t.prev,
        next: t.next
      });
    }), {};
  }
}), dl = M(v(v(v({
  reverseTransition: {
    type: [Boolean, String],
    default: void 0
  },
  transition: {
    type: [Boolean, String],
    default: void 0
  }
}, te()), wn()), Yi()), "VWindowItem"), cn = N()({
  name: "VWindowItem",
  directives: {
    Touch: _u
  },
  props: dl(),
  emits: {
    "group:selected": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = Ce(Au), l = Vn(e, Lu), {
      isBooted: i
    } = kn();
    if (!a || !l) throw new Error("[Vuetify] VWindowItem must be used inside VWindow");
    const o = Z(!1), r = S(() => i.value && (a.isReversed.value ? e.reverseTransition !== !1 : e.transition !== !1));
    function u() {
      !o.value || !a || (o.value = !1, a.transitionCount.value > 0 && (a.transitionCount.value -= 1, a.transitionCount.value === 0 && (a.transitionHeight.value = void 0)));
    }
    function c() {
      var y;
      o.value || !a || (o.value = !0, a.transitionCount.value === 0 && (a.transitionHeight.value = ee((y = a.rootRef.value) == null ? void 0 : y.clientHeight)), a.transitionCount.value += 1);
    }
    function d() {
      u();
    }
    function f(y) {
      o.value && _e(() => {
        !r.value || !o.value || !a || (a.transitionHeight.value = ee(y.clientHeight));
      });
    }
    const m = S(() => {
      const y = a.isReversed.value ? e.reverseTransition : e.transition;
      return r.value ? {
        name: typeof y != "string" ? a.transition.value : y,
        onBeforeEnter: c,
        onAfterEnter: u,
        onEnterCancelled: d,
        onBeforeLeave: c,
        onAfterLeave: u,
        onLeaveCancelled: d,
        onEnter: f
      } : !1;
    }), {
      hasContent: g
    } = Gi(e, l.isSelected);
    return z(() => s(lt, {
      transition: m.value,
      disabled: !i.value
    }, {
      default: () => {
        var y;
        return [pe(s("div", {
          class: ["v-window-item", l.selectedClass.value, e.class],
          style: e.style
        }, [g.value && ((y = t.default) == null ? void 0 : y.call(t))]), [[Pt, l.isSelected.value]])];
      }
    })), {
      groupItem: l
    };
  }
}), Wg = M(v(v({}, Cs()), dl()), "VCarouselItem"), jg = N()({
  name: "VCarouselItem",
  inheritAttrs: !1,
  props: Wg(),
  setup(e, n) {
    let {
      slots: t,
      attrs: a
    } = n;
    z(() => {
      const l = Ft.filterProps(e), i = cn.filterProps(e);
      return s(cn, H({
        class: ["v-carousel-item", e.class]
      }, i), {
        default: () => [s(Ft, H(a, l), t)]
      });
    });
  }
}), Yg = Bt("v-code"), Gg = M(v({
  color: {
    type: Object
  },
  disabled: Boolean,
  dotSize: {
    type: [Number, String],
    default: 10
  },
  height: {
    type: [Number, String],
    default: 150
  },
  width: {
    type: [Number, String],
    default: 300
  }
}, te()), "VColorPickerCanvas"), Ug = gt({
  name: "VColorPickerCanvas",
  props: Gg(),
  emits: {
    "update:color": (e) => !0,
    "update:position": (e) => !0
  },
  setup(e, n) {
    let {
      emit: t
    } = n;
    const a = Z(!1), l = G(), i = Z(parseFloat(e.width)), o = Z(parseFloat(e.height)), r = G({
      x: 0,
      y: 0
    }), u = S({
      get: () => r.value,
      set(h) {
        var I, A, x, P;
        if (!l.value) return;
        const {
          x: k,
          y: C
        } = h;
        r.value = h, t("update:color", {
          h: (A = (I = e.color) == null ? void 0 : I.h) != null ? A : 0,
          s: Ne(k, 0, i.value) / i.value,
          v: 1 - Ne(C, 0, o.value) / o.value,
          a: (P = (x = e.color) == null ? void 0 : x.a) != null ? P : 1
        });
      }
    }), c = S(() => {
      const {
        x: h,
        y: k
      } = u.value, C = parseInt(e.dotSize, 10) / 2;
      return {
        width: ee(e.dotSize),
        height: ee(e.dotSize),
        transform: `translate(${ee(h - C)}, ${ee(k - C)})`
      };
    }), {
      resizeRef: d
    } = Vt((h) => {
      var I;
      if (!((I = d.el) != null && I.offsetParent)) return;
      const {
        width: k,
        height: C
      } = h[0].contentRect;
      i.value = k, o.value = C;
    });
    function f(h, k, C) {
      const {
        left: I,
        top: A,
        width: x,
        height: P
      } = C;
      u.value = {
        x: Ne(h - I, 0, x),
        y: Ne(k - A, 0, P)
      };
    }
    function m(h) {
      h.type === "mousedown" && h.preventDefault(), !e.disabled && (g(h), window.addEventListener("mousemove", g), window.addEventListener("mouseup", y), window.addEventListener("touchmove", g), window.addEventListener("touchend", y));
    }
    function g(h) {
      if (e.disabled || !l.value) return;
      a.value = !0;
      const k = cd(h);
      f(k.clientX, k.clientY, l.value.getBoundingClientRect());
    }
    function y() {
      window.removeEventListener("mousemove", g), window.removeEventListener("mouseup", y), window.removeEventListener("touchmove", g), window.removeEventListener("touchend", y);
    }
    function b() {
      var A, x;
      if (!l.value) return;
      const h = l.value, k = h.getContext("2d");
      if (!k) return;
      const C = k.createLinearGradient(0, 0, h.width, 0);
      C.addColorStop(0, "hsla(0, 0%, 100%, 1)"), C.addColorStop(1, `hsla(${(x = (A = e.color) == null ? void 0 : A.h) != null ? x : 0}, 100%, 50%, 1)`), k.fillStyle = C, k.fillRect(0, 0, h.width, h.height);
      const I = k.createLinearGradient(0, 0, 0, h.height);
      I.addColorStop(0, "hsla(0, 0%, 0%, 0)"), I.addColorStop(1, "hsla(0, 0%, 0%, 1)"), k.fillStyle = I, k.fillRect(0, 0, h.width, h.height);
    }
    return Q(() => {
      var h;
      return (h = e.color) == null ? void 0 : h.h;
    }, b, {
      immediate: !0
    }), Q(() => [i.value, o.value], (h, k) => {
      b(), r.value = {
        x: u.value.x * h[0] / k[0],
        y: u.value.y * h[1] / k[1]
      };
    }, {
      flush: "post"
    }), Q(() => e.color, () => {
      if (a.value) {
        a.value = !1;
        return;
      }
      r.value = e.color ? {
        x: e.color.s * i.value,
        y: (1 - e.color.v) * o.value
      } : {
        x: 0,
        y: 0
      };
    }, {
      deep: !0,
      immediate: !0
    }), rt(() => b()), z(() => s("div", {
      ref: d,
      class: ["v-color-picker-canvas", e.class],
      style: e.style,
      onMousedown: m,
      onTouchstartPassive: m
    }, [s("canvas", {
      ref: l,
      width: i.value,
      height: o.value
    }, null), e.color && s("div", {
      class: ["v-color-picker-canvas__dot", {
        "v-color-picker-canvas__dot--disabled": e.disabled
      }],
      style: c.value
    }, null)])), {};
  }
});
function Kg(e, n) {
  if (n) {
    const t = e, {
      a
    } = t;
    return He(t, [
      "a"
    ]);
  }
  return e;
}
function qg(e, n) {
  if (n == null || typeof n == "string") {
    const t = qr(e);
    return e.a === 1 ? t.slice(0, 7) : t;
  }
  if (typeof n == "object") {
    let t;
    return en(n, ["r", "g", "b"]) ? t = Et(e) : en(n, ["h", "s", "l"]) ? t = Wr(e) : en(n, ["h", "s", "v"]) && (t = e), Kg(t, !en(n, ["a"]) && e.a === 1);
  }
  return e;
}
const Mn = {
  h: 0,
  s: 0,
  v: 0,
  a: 1
}, ei = {
  inputProps: {
    type: "number",
    min: 0
  },
  inputs: [{
    label: "R",
    max: 255,
    step: 1,
    getValue: (e) => Math.round(e.r),
    getColor: (e, n) => J(v({}, e), {
      r: Number(n)
    })
  }, {
    label: "G",
    max: 255,
    step: 1,
    getValue: (e) => Math.round(e.g),
    getColor: (e, n) => J(v({}, e), {
      g: Number(n)
    })
  }, {
    label: "B",
    max: 255,
    step: 1,
    getValue: (e) => Math.round(e.b),
    getColor: (e, n) => J(v({}, e), {
      b: Number(n)
    })
  }, {
    label: "A",
    max: 1,
    step: 0.01,
    getValue: (e) => {
      let {
        a: n
      } = e;
      return n != null ? Math.round(n * 100) / 100 : 1;
    },
    getColor: (e, n) => J(v({}, e), {
      a: Number(n)
    })
  }],
  to: Et,
  from: Ga
};
var Pr;
const Xg = J(v({}, ei), {
  inputs: (Pr = ei.inputs) == null ? void 0 : Pr.slice(0, 3)
}), ti = {
  inputProps: {
    type: "number",
    min: 0
  },
  inputs: [{
    label: "H",
    max: 360,
    step: 1,
    getValue: (e) => Math.round(e.h),
    getColor: (e, n) => J(v({}, e), {
      h: Number(n)
    })
  }, {
    label: "S",
    max: 1,
    step: 0.01,
    getValue: (e) => Math.round(e.s * 100) / 100,
    getColor: (e, n) => J(v({}, e), {
      s: Number(n)
    })
  }, {
    label: "L",
    max: 1,
    step: 0.01,
    getValue: (e) => Math.round(e.l * 100) / 100,
    getColor: (e, n) => J(v({}, e), {
      l: Number(n)
    })
  }, {
    label: "A",
    max: 1,
    step: 0.01,
    getValue: (e) => {
      let {
        a: n
      } = e;
      return n != null ? Math.round(n * 100) / 100 : 1;
    },
    getColor: (e, n) => J(v({}, e), {
      a: Number(n)
    })
  }],
  to: Wr,
  from: Vi
}, Zg = J(v({}, ti), {
  inputs: ti.inputs.slice(0, 3)
}), Tu = {
  inputProps: {
    type: "text"
  },
  inputs: [{
    label: "HEXA",
    getValue: (e) => e,
    getColor: (e, n) => n
  }],
  to: qr,
  from: Kr
}, Jg = J(v({}, Tu), {
  inputs: [{
    label: "HEX",
    getValue: (e) => e.slice(0, 7),
    getColor: (e, n) => n
  }]
}), on = {
  rgb: Xg,
  rgba: ei,
  hsl: Zg,
  hsla: ti,
  hex: Jg,
  hexa: Tu
}, Qg = (e) => {
  let a = e, {
    label: n
  } = a, t = He(a, [
    "label"
  ]);
  return s("div", {
    class: "v-color-picker-edit__input"
  }, [s("input", t, null), s("span", null, [n])]);
}, eh = M(v({
  color: Object,
  disabled: Boolean,
  mode: {
    type: String,
    default: "rgba",
    validator: (e) => Object.keys(on).includes(e)
  },
  modes: {
    type: Array,
    default: () => Object.keys(on),
    validator: (e) => Array.isArray(e) && e.every((n) => Object.keys(on).includes(n))
  }
}, te()), "VColorPickerEdit"), th = gt({
  name: "VColorPickerEdit",
  props: eh(),
  emits: {
    "update:color": (e) => !0,
    "update:mode": (e) => !0
  },
  setup(e, n) {
    let {
      emit: t
    } = n;
    const a = S(() => e.modes.map((i) => J(v({}, on[i]), {
      name: i
    }))), l = S(() => {
      var r;
      const i = a.value.find((u) => u.name === e.mode);
      if (!i) return [];
      const o = e.color ? i.to(e.color) : null;
      return (r = i.inputs) == null ? void 0 : r.map((u) => {
        let m = u, {
          getValue: c,
          getColor: d
        } = m, f = He(m, [
          "getValue",
          "getColor"
        ]);
        return J(v(v({}, i.inputProps), f), {
          disabled: e.disabled,
          value: o && c(o),
          onChange: (g) => {
            const y = g.target;
            y && t("update:color", i.from(d(o != null ? o : i.to(Mn), y.value)));
          }
        });
      });
    });
    return z(() => {
      var i;
      return s("div", {
        class: ["v-color-picker-edit", e.class],
        style: e.style
      }, [(i = l.value) == null ? void 0 : i.map((o) => s(Qg, o, null)), a.value.length > 1 && s(we, {
        icon: "$unfold",
        size: "x-small",
        variant: "plain",
        onClick: () => {
          const o = a.value.findIndex((r) => r.name === e.mode);
          t("update:mode", a.value[(o + 1) % a.value.length].name);
        }
      }, null)]);
    }), {};
  }
}), Zi = Symbol.for("vuetify:v-slider");
function ni(e, n, t) {
  const a = t === "vertical", l = n.getBoundingClientRect(), i = "touches" in e ? e.touches[0] : e;
  return a ? i.clientY - (l.top + l.height / 2) : i.clientX - (l.left + l.width / 2);
}
function nh(e, n) {
  return "touches" in e && e.touches.length ? e.touches[0][n] : "changedTouches" in e && e.changedTouches.length ? e.changedTouches[0][n] : e[n];
}
const Bu = M(J(v(v({
  disabled: {
    type: Boolean,
    default: null
  },
  error: Boolean,
  readonly: {
    type: Boolean,
    default: null
  },
  max: {
    type: [Number, String],
    default: 100
  },
  min: {
    type: [Number, String],
    default: 0
  },
  step: {
    type: [Number, String],
    default: 0
  },
  thumbColor: String,
  thumbLabel: {
    type: [Boolean, String],
    default: void 0,
    validator: (e) => typeof e == "boolean" || e === "always"
  },
  thumbSize: {
    type: [Number, String],
    default: 20
  },
  showTicks: {
    type: [Boolean, String],
    default: !1,
    validator: (e) => typeof e == "boolean" || e === "always"
  },
  ticks: {
    type: [Array, Object]
  },
  tickSize: {
    type: [Number, String],
    default: 2
  },
  color: String,
  trackColor: String,
  trackFillColor: String,
  trackSize: {
    type: [Number, String],
    default: 4
  },
  direction: {
    type: String,
    default: "horizontal",
    validator: (e) => ["vertical", "horizontal"].includes(e)
  },
  reverse: Boolean
}, De()), Xe({
  elevation: 2
})), {
  ripple: {
    type: Boolean,
    default: !0
  }
}), "Slider"), Du = (e) => {
  const n = S(() => parseFloat(e.min)), t = S(() => parseFloat(e.max)), a = S(() => +e.step > 0 ? parseFloat(e.step) : 0), l = S(() => Math.max(Vo(a.value), Vo(n.value)));
  function i(o) {
    if (o = parseFloat(o), a.value <= 0) return o;
    const r = Ne(o, n.value, t.value), u = n.value % a.value, c = Math.round((r - u) / a.value) * a.value + u;
    return parseFloat(Math.min(c, t.value).toFixed(l.value));
  }
  return {
    min: n,
    max: t,
    step: a,
    decimals: l,
    roundValue: i
  };
}, Mu = (e) => {
  let {
    props: n,
    steps: t,
    onSliderStart: a,
    onSliderMove: l,
    onSliderEnd: i,
    getActiveThumb: o
  } = e;
  const {
    isRtl: r
  } = je(), u = $(n, "reverse"), c = S(() => n.direction === "vertical"), d = S(() => c.value !== u.value), {
    min: f,
    max: m,
    step: g,
    decimals: y,
    roundValue: b
  } = t, h = S(() => parseInt(n.thumbSize, 10)), k = S(() => parseInt(n.tickSize, 10)), C = S(() => parseInt(n.trackSize, 10)), I = S(() => (m.value - f.value) / g.value), A = $(n, "disabled"), x = S(() => {
    var W;
    return n.error || n.disabled ? void 0 : (W = n.thumbColor) != null ? W : n.color;
  }), P = S(() => {
    var W;
    return n.error || n.disabled ? void 0 : (W = n.trackColor) != null ? W : n.color;
  }), T = S(() => {
    var W;
    return n.error || n.disabled ? void 0 : (W = n.trackFillColor) != null ? W : n.color;
  }), w = Z(!1), _ = Z(0), B = G(), V = G();
  function L(W) {
    var le;
    const ae = n.direction === "vertical", se = ae ? "top" : "left", ye = ae ? "height" : "width", ce = ae ? "clientY" : "clientX", {
      [se]: X,
      [ye]: ge
    } = (le = B.value) == null ? void 0 : le.$el.getBoundingClientRect(), ke = nh(W, ce);
    let j = Math.min(Math.max((ke - X - _.value) / ge, 0), 1) || 0;
    return (ae ? d.value : d.value !== r.value) && (j = 1 - j), b(f.value + j * (m.value - f.value));
  }
  const D = (W) => {
    i({
      value: L(W)
    }), w.value = !1, _.value = 0;
  }, p = (W) => {
    V.value = o(W), V.value && (V.value.focus(), w.value = !0, V.value.contains(W.target) ? _.value = ni(W, V.value, n.direction) : (_.value = 0, l({
      value: L(W)
    })), a({
      value: L(W)
    }));
  }, R = {
    passive: !0,
    capture: !0
  };
  function U(W) {
    l({
      value: L(W)
    });
  }
  function q(W) {
    W.stopPropagation(), W.preventDefault(), D(W), window.removeEventListener("mousemove", U, R), window.removeEventListener("mouseup", q);
  }
  function K(W) {
    var ae;
    D(W), window.removeEventListener("touchmove", U, R), (ae = W.target) == null || ae.removeEventListener("touchend", K);
  }
  function E(W) {
    var ae;
    p(W), window.addEventListener("touchmove", U, R), (ae = W.target) == null || ae.addEventListener("touchend", K, {
      passive: !1
    });
  }
  function F(W) {
    W.preventDefault(), p(W), window.addEventListener("mousemove", U, R), window.addEventListener("mouseup", q, {
      passive: !1
    });
  }
  const O = (W) => {
    const ae = (W - f.value) / (m.value - f.value) * 100;
    return Ne(isNaN(ae) ? 0 : ae, 0, 100);
  }, Y = $(n, "showTicks"), ie = S(() => Y.value ? n.ticks ? Array.isArray(n.ticks) ? n.ticks.map((W) => ({
    value: W,
    position: O(W),
    label: W.toString()
  })) : Object.keys(n.ticks).map((W) => ({
    value: parseFloat(W),
    position: O(parseFloat(W)),
    label: n.ticks[W]
  })) : I.value !== 1 / 0 ? _t(I.value + 1).map((W) => {
    const ae = f.value + W * g.value;
    return {
      value: ae,
      position: O(ae)
    };
  }) : [] : []), ne = S(() => ie.value.some((W) => {
    let {
      label: ae
    } = W;
    return !!ae;
  })), ue = {
    activeThumbRef: V,
    color: $(n, "color"),
    decimals: y,
    disabled: A,
    direction: $(n, "direction"),
    elevation: $(n, "elevation"),
    hasLabels: ne,
    isReversed: u,
    indexFromEnd: d,
    min: f,
    max: m,
    mousePressed: w,
    numTicks: I,
    onSliderMousedown: F,
    onSliderTouchstart: E,
    parsedTicks: ie,
    parseMouseMove: L,
    position: O,
    readonly: $(n, "readonly"),
    rounded: $(n, "rounded"),
    roundValue: b,
    showTicks: Y,
    startOffset: _,
    step: g,
    thumbSize: h,
    thumbColor: x,
    thumbLabel: $(n, "thumbLabel"),
    ticks: $(n, "ticks"),
    tickSize: k,
    trackColor: P,
    trackContainerRef: B,
    trackFillColor: T,
    trackSize: C,
    vertical: c
  };
  return Be(Zi, ue), ue;
}, ah = M(v({
  focused: Boolean,
  max: {
    type: Number,
    required: !0
  },
  min: {
    type: Number,
    required: !0
  },
  modelValue: {
    type: Number,
    required: !0
  },
  position: {
    type: Number,
    required: !0
  },
  ripple: {
    type: [Boolean, Object],
    default: !0
  },
  name: String
}, te()), "VSliderThumb"), ai = N()({
  name: "VSliderThumb",
  directives: {
    Ripple: qt
  },
  props: ah(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t,
      emit: a
    } = n;
    const l = Ce(Zi), {
      isRtl: i,
      rtlClasses: o
    } = je();
    if (!l) throw new Error("[Vuetify] v-slider-thumb must be used inside v-slider or v-range-slider");
    const {
      thumbColor: r,
      step: u,
      disabled: c,
      thumbSize: d,
      thumbLabel: f,
      direction: m,
      isReversed: g,
      vertical: y,
      readonly: b,
      elevation: h,
      mousePressed: k,
      decimals: C,
      indexFromEnd: I
    } = l, A = S(() => c.value ? void 0 : h.value), {
      elevationClasses: x
    } = et(A), {
      textColorClasses: P,
      textColorStyles: T
    } = tt(r), {
      pageup: w,
      pagedown: _,
      end: B,
      home: V,
      left: L,
      right: D,
      down: p,
      up: R
    } = Ml, U = [w, _, B, V, L, D, p, R], q = S(() => u.value ? [1, 2, 3] : [1, 5, 10]);
    function K(F, O) {
      if (!U.includes(F.key)) return;
      F.preventDefault();
      const Y = u.value || 0.1, ie = (e.max - e.min) / Y;
      if ([L, D, p, R].includes(F.key)) {
        const ue = (y.value ? [i.value ? L : D, g.value ? p : R] : I.value !== i.value ? [L, R] : [D, R]).includes(F.key) ? 1 : -1, W = F.shiftKey ? 2 : F.ctrlKey ? 1 : 0;
        O = O + ue * Y * q.value[W];
      } else if (F.key === V)
        O = e.min;
      else if (F.key === B)
        O = e.max;
      else {
        const ne = F.key === _ ? 1 : -1;
        O = O - ne * Y * (ie > 100 ? ie / 10 : 10);
      }
      return Math.max(e.min, Math.min(e.max, O));
    }
    function E(F) {
      const O = K(F, e.modelValue);
      O != null && a("update:modelValue", O);
    }
    return z(() => {
      const F = ee(I.value ? 100 - e.position : e.position, "%");
      return s("div", {
        class: ["v-slider-thumb", {
          "v-slider-thumb--focused": e.focused,
          "v-slider-thumb--pressed": e.focused && k.value
        }, e.class, o.value],
        style: [{
          "--v-slider-thumb-position": F,
          "--v-slider-thumb-size": ee(d.value)
        }, e.style],
        role: "slider",
        tabindex: c.value ? -1 : 0,
        "aria-label": e.name,
        "aria-valuemin": e.min,
        "aria-valuemax": e.max,
        "aria-valuenow": e.modelValue,
        "aria-readonly": !!b.value,
        "aria-orientation": m.value,
        onKeydown: b.value ? void 0 : E
      }, [s("div", {
        class: ["v-slider-thumb__surface", P.value, x.value],
        style: v({}, T.value)
      }, null), pe(s("div", {
        class: ["v-slider-thumb__ripple", P.value],
        style: T.value
      }, null), [[mt("ripple"), e.ripple, null, {
        circle: !0,
        center: !0
      }]]), s(Mi, {
        origin: "bottom center"
      }, {
        default: () => {
          var O, Y;
          return [pe(s("div", {
            class: "v-slider-thumb__label-container"
          }, [s("div", {
            class: ["v-slider-thumb__label"]
          }, [s("div", null, [(Y = (O = t["thumb-label"]) == null ? void 0 : O.call(t, {
            modelValue: e.modelValue
          })) != null ? Y : e.modelValue.toFixed(u.value ? C.value : 1)])])]), [[Pt, f.value && e.focused || f.value === "always"]])];
        }
      })]);
    }), {};
  }
}), lh = M(v({
  start: {
    type: Number,
    required: !0
  },
  stop: {
    type: Number,
    required: !0
  }
}, te()), "VSliderTrack"), pu = N()({
  name: "VSliderTrack",
  props: lh(),
  emits: {},
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = Ce(Zi);
    if (!a) throw new Error("[Vuetify] v-slider-track must be inside v-slider or v-range-slider");
    const {
      color: l,
      parsedTicks: i,
      rounded: o,
      showTicks: r,
      tickSize: u,
      trackColor: c,
      trackFillColor: d,
      trackSize: f,
      vertical: m,
      min: g,
      max: y,
      indexFromEnd: b
    } = a, {
      roundedClasses: h
    } = Oe(o), {
      backgroundColorClasses: k,
      backgroundColorStyles: C
    } = Le(d), {
      backgroundColorClasses: I,
      backgroundColorStyles: A
    } = Le(c), x = S(() => `inset-${m.value ? "block" : "inline"}-${b.value ? "end" : "start"}`), P = S(() => m.value ? "height" : "width"), T = S(() => ({
      [x.value]: "0%",
      [P.value]: "100%"
    })), w = S(() => e.stop - e.start), _ = S(() => ({
      [x.value]: ee(e.start, "%"),
      [P.value]: ee(w.value, "%")
    })), B = S(() => r.value ? (m.value ? i.value.slice().reverse() : i.value).map((L, D) => {
      var R, U;
      const p = L.value !== g.value && L.value !== y.value ? ee(L.position, "%") : void 0;
      return s("div", {
        key: L.value,
        class: ["v-slider-track__tick", {
          "v-slider-track__tick--filled": L.position >= e.start && L.position <= e.stop,
          "v-slider-track__tick--first": L.value === g.value,
          "v-slider-track__tick--last": L.value === y.value
        }],
        style: {
          [x.value]: p
        }
      }, [(L.label || t["tick-label"]) && s("div", {
        class: "v-slider-track__tick-label"
      }, [(U = (R = t["tick-label"]) == null ? void 0 : R.call(t, {
        tick: L,
        index: D
      })) != null ? U : L.label])]);
    }) : []);
    return z(() => s("div", {
      class: ["v-slider-track", h.value, e.class],
      style: [{
        "--v-slider-track-size": ee(f.value),
        "--v-slider-tick-size": ee(u.value)
      }, e.style]
    }, [s("div", {
      class: ["v-slider-track__background", I.value, {
        "v-slider-track__background--opacity": !!l.value || !d.value
      }],
      style: v(v({}, T.value), A.value)
    }, null), s("div", {
      class: ["v-slider-track__fill", k.value],
      style: v(v({}, _.value), C.value)
    }, null), r.value && s("div", {
      class: ["v-slider-track__ticks", {
        "v-slider-track__ticks--always-show": r.value === "always"
      }]
    }, [B.value])])), {};
  }
}), ih = M(J(v(v(v({}, ma()), Bu()), Ht()), {
  modelValue: {
    type: [Number, String],
    default: 0
  }
}), "VSlider"), li = N()({
  name: "VSlider",
  props: ih(),
  emits: {
    "update:focused": (e) => !0,
    "update:modelValue": (e) => !0,
    start: (e) => !0,
    end: (e) => !0
  },
  setup(e, n) {
    let {
      slots: t,
      emit: a
    } = n;
    const l = G(), {
      rtlClasses: i
    } = je(), o = Du(e), r = oe(e, "modelValue", void 0, (P) => o.roundValue(P == null ? o.min.value : P)), {
      min: u,
      max: c,
      mousePressed: d,
      roundValue: f,
      onSliderMousedown: m,
      onSliderTouchstart: g,
      trackContainerRef: y,
      position: b,
      hasLabels: h,
      readonly: k
    } = Mu({
      props: e,
      steps: o,
      onSliderStart: () => {
        a("start", r.value);
      },
      onSliderEnd: (P) => {
        let {
          value: T
        } = P;
        const w = f(T);
        r.value = w, a("end", w);
      },
      onSliderMove: (P) => {
        let {
          value: T
        } = P;
        return r.value = f(T);
      },
      getActiveThumb: () => {
        var P;
        return (P = l.value) == null ? void 0 : P.$el;
      }
    }), {
      isFocused: C,
      focus: I,
      blur: A
    } = Nt(e), x = S(() => b(r.value));
    return z(() => {
      const P = nt.filterProps(e), T = !!(e.label || t.label || t.prepend);
      return s(nt, H({
        class: ["v-slider", {
          "v-slider--has-labels": !!t["tick-label"] || h.value,
          "v-slider--focused": C.value,
          "v-slider--pressed": d.value,
          "v-slider--disabled": e.disabled
        }, i.value, e.class],
        style: e.style
      }, P, {
        focused: C.value
      }), J(v({}, t), {
        prepend: T ? (w) => {
          var _, B, V;
          return s(re, null, [(B = (_ = t.label) == null ? void 0 : _.call(t, w)) != null ? B : e.label ? s(Yn, {
            id: w.id.value,
            class: "v-slider__label",
            text: e.label
          }, null) : void 0, (V = t.prepend) == null ? void 0 : V.call(t, w)]);
        } : void 0,
        default: (w) => {
          let {
            id: _,
            messagesId: B
          } = w;
          return s("div", {
            class: "v-slider__container",
            onMousedown: k.value ? void 0 : m,
            onTouchstartPassive: k.value ? void 0 : g
          }, [s("input", {
            id: _.value,
            name: e.name || _.value,
            disabled: !!e.disabled,
            readonly: !!e.readonly,
            tabindex: "-1",
            value: r.value
          }, null), s(pu, {
            ref: y,
            start: 0,
            stop: x.value
          }, {
            "tick-label": t["tick-label"]
          }), s(ai, {
            ref: l,
            "aria-describedby": B.value,
            focused: C.value,
            min: u.value,
            max: c.value,
            modelValue: r.value,
            "onUpdate:modelValue": (V) => r.value = V,
            position: x.value,
            elevation: e.elevation,
            onFocus: I,
            onBlur: A,
            ripple: e.ripple,
            name: e.name
          }, {
            "thumb-label": t["thumb-label"]
          })]);
        }
      }));
    }), {};
  }
}), oh = M(v({
  color: {
    type: Object
  },
  disabled: Boolean,
  hideAlpha: Boolean
}, te()), "VColorPickerPreview"), rh = gt({
  name: "VColorPickerPreview",
  props: oh(),
  emits: {
    "update:color": (e) => !0
  },
  setup(e, n) {
    let {
      emit: t
    } = n;
    const a = new AbortController();
    Zc(() => a.abort());
    function l() {
      return Ke(this, null, function* () {
        var o;
        if (!ko) return;
        const i = new window.EyeDropper();
        try {
          const r = yield i.open({
            signal: a.signal
          }), u = Kr(r.sRGBHex);
          t("update:color", v(v({}, (o = e.color) != null ? o : Mn), u));
        } catch (r) {
        }
      });
    }
    return z(() => {
      var i, o, r, u;
      return s("div", {
        class: ["v-color-picker-preview", {
          "v-color-picker-preview--hide-alpha": e.hideAlpha
        }, e.class],
        style: e.style
      }, [ko && s("div", {
        class: "v-color-picker-preview__eye-dropper",
        key: "eyeDropper"
      }, [s(we, {
        onClick: l,
        icon: "$eyeDropper",
        variant: "plain",
        density: "comfortable"
      }, null)]), s("div", {
        class: "v-color-picker-preview__dot"
      }, [s("div", {
        style: {
          background: Yr((i = e.color) != null ? i : Mn)
        }
      }, null)]), s("div", {
        class: "v-color-picker-preview__sliders"
      }, [s(li, {
        class: "v-color-picker-preview__track v-color-picker-preview__hue",
        modelValue: (o = e.color) == null ? void 0 : o.h,
        "onUpdate:modelValue": (c) => {
          var d;
          return t("update:color", J(v({}, (d = e.color) != null ? d : Mn), {
            h: c
          }));
        },
        step: 0,
        min: 0,
        max: 360,
        disabled: e.disabled,
        thumbSize: 14,
        trackSize: 8,
        trackFillColor: "white",
        hideDetails: !0
      }, null), !e.hideAlpha && s(li, {
        class: "v-color-picker-preview__track v-color-picker-preview__alpha",
        modelValue: (u = (r = e.color) == null ? void 0 : r.a) != null ? u : 1,
        "onUpdate:modelValue": (c) => {
          var d;
          return t("update:color", J(v({}, (d = e.color) != null ? d : Mn), {
            a: c
          }));
        },
        step: 1 / 256,
        min: 0,
        max: 1,
        disabled: e.disabled,
        thumbSize: 14,
        trackSize: 8,
        trackFillColor: "white",
        hideDetails: !0
      }, null)])]);
    }), {};
  }
}), sh = {
  base: "#f44336",
  lighten5: "#ffebee",
  lighten4: "#ffcdd2",
  lighten3: "#ef9a9a",
  lighten2: "#e57373",
  lighten1: "#ef5350",
  darken1: "#e53935",
  darken2: "#d32f2f",
  darken3: "#c62828",
  darken4: "#b71c1c",
  accent1: "#ff8a80",
  accent2: "#ff5252",
  accent3: "#ff1744",
  accent4: "#d50000"
}, uh = {
  base: "#e91e63",
  lighten5: "#fce4ec",
  lighten4: "#f8bbd0",
  lighten3: "#f48fb1",
  lighten2: "#f06292",
  lighten1: "#ec407a",
  darken1: "#d81b60",
  darken2: "#c2185b",
  darken3: "#ad1457",
  darken4: "#880e4f",
  accent1: "#ff80ab",
  accent2: "#ff4081",
  accent3: "#f50057",
  accent4: "#c51162"
}, ch = {
  base: "#9c27b0",
  lighten5: "#f3e5f5",
  lighten4: "#e1bee7",
  lighten3: "#ce93d8",
  lighten2: "#ba68c8",
  lighten1: "#ab47bc",
  darken1: "#8e24aa",
  darken2: "#7b1fa2",
  darken3: "#6a1b9a",
  darken4: "#4a148c",
  accent1: "#ea80fc",
  accent2: "#e040fb",
  accent3: "#d500f9",
  accent4: "#aa00ff"
}, dh = {
  base: "#673ab7",
  lighten5: "#ede7f6",
  lighten4: "#d1c4e9",
  lighten3: "#b39ddb",
  lighten2: "#9575cd",
  lighten1: "#7e57c2",
  darken1: "#5e35b1",
  darken2: "#512da8",
  darken3: "#4527a0",
  darken4: "#311b92",
  accent1: "#b388ff",
  accent2: "#7c4dff",
  accent3: "#651fff",
  accent4: "#6200ea"
}, vh = {
  base: "#3f51b5",
  lighten5: "#e8eaf6",
  lighten4: "#c5cae9",
  lighten3: "#9fa8da",
  lighten2: "#7986cb",
  lighten1: "#5c6bc0",
  darken1: "#3949ab",
  darken2: "#303f9f",
  darken3: "#283593",
  darken4: "#1a237e",
  accent1: "#8c9eff",
  accent2: "#536dfe",
  accent3: "#3d5afe",
  accent4: "#304ffe"
}, fh = {
  base: "#2196f3",
  lighten5: "#e3f2fd",
  lighten4: "#bbdefb",
  lighten3: "#90caf9",
  lighten2: "#64b5f6",
  lighten1: "#42a5f5",
  darken1: "#1e88e5",
  darken2: "#1976d2",
  darken3: "#1565c0",
  darken4: "#0d47a1",
  accent1: "#82b1ff",
  accent2: "#448aff",
  accent3: "#2979ff",
  accent4: "#2962ff"
}, mh = {
  base: "#03a9f4",
  lighten5: "#e1f5fe",
  lighten4: "#b3e5fc",
  lighten3: "#81d4fa",
  lighten2: "#4fc3f7",
  lighten1: "#29b6f6",
  darken1: "#039be5",
  darken2: "#0288d1",
  darken3: "#0277bd",
  darken4: "#01579b",
  accent1: "#80d8ff",
  accent2: "#40c4ff",
  accent3: "#00b0ff",
  accent4: "#0091ea"
}, gh = {
  base: "#00bcd4",
  lighten5: "#e0f7fa",
  lighten4: "#b2ebf2",
  lighten3: "#80deea",
  lighten2: "#4dd0e1",
  lighten1: "#26c6da",
  darken1: "#00acc1",
  darken2: "#0097a7",
  darken3: "#00838f",
  darken4: "#006064",
  accent1: "#84ffff",
  accent2: "#18ffff",
  accent3: "#00e5ff",
  accent4: "#00b8d4"
}, hh = {
  base: "#009688",
  lighten5: "#e0f2f1",
  lighten4: "#b2dfdb",
  lighten3: "#80cbc4",
  lighten2: "#4db6ac",
  lighten1: "#26a69a",
  darken1: "#00897b",
  darken2: "#00796b",
  darken3: "#00695c",
  darken4: "#004d40",
  accent1: "#a7ffeb",
  accent2: "#64ffda",
  accent3: "#1de9b6",
  accent4: "#00bfa5"
}, yh = {
  base: "#4caf50",
  lighten5: "#e8f5e9",
  lighten4: "#c8e6c9",
  lighten3: "#a5d6a7",
  lighten2: "#81c784",
  lighten1: "#66bb6a",
  darken1: "#43a047",
  darken2: "#388e3c",
  darken3: "#2e7d32",
  darken4: "#1b5e20",
  accent1: "#b9f6ca",
  accent2: "#69f0ae",
  accent3: "#00e676",
  accent4: "#00c853"
}, bh = {
  base: "#8bc34a",
  lighten5: "#f1f8e9",
  lighten4: "#dcedc8",
  lighten3: "#c5e1a5",
  lighten2: "#aed581",
  lighten1: "#9ccc65",
  darken1: "#7cb342",
  darken2: "#689f38",
  darken3: "#558b2f",
  darken4: "#33691e",
  accent1: "#ccff90",
  accent2: "#b2ff59",
  accent3: "#76ff03",
  accent4: "#64dd17"
}, Sh = {
  base: "#cddc39",
  lighten5: "#f9fbe7",
  lighten4: "#f0f4c3",
  lighten3: "#e6ee9c",
  lighten2: "#dce775",
  lighten1: "#d4e157",
  darken1: "#c0ca33",
  darken2: "#afb42b",
  darken3: "#9e9d24",
  darken4: "#827717",
  accent1: "#f4ff81",
  accent2: "#eeff41",
  accent3: "#c6ff00",
  accent4: "#aeea00"
}, kh = {
  base: "#ffeb3b",
  lighten5: "#fffde7",
  lighten4: "#fff9c4",
  lighten3: "#fff59d",
  lighten2: "#fff176",
  lighten1: "#ffee58",
  darken1: "#fdd835",
  darken2: "#fbc02d",
  darken3: "#f9a825",
  darken4: "#f57f17",
  accent1: "#ffff8d",
  accent2: "#ffff00",
  accent3: "#ffea00",
  accent4: "#ffd600"
}, Ch = {
  base: "#ffc107",
  lighten5: "#fff8e1",
  lighten4: "#ffecb3",
  lighten3: "#ffe082",
  lighten2: "#ffd54f",
  lighten1: "#ffca28",
  darken1: "#ffb300",
  darken2: "#ffa000",
  darken3: "#ff8f00",
  darken4: "#ff6f00",
  accent1: "#ffe57f",
  accent2: "#ffd740",
  accent3: "#ffc400",
  accent4: "#ffab00"
}, xh = {
  base: "#ff9800",
  lighten5: "#fff3e0",
  lighten4: "#ffe0b2",
  lighten3: "#ffcc80",
  lighten2: "#ffb74d",
  lighten1: "#ffa726",
  darken1: "#fb8c00",
  darken2: "#f57c00",
  darken3: "#ef6c00",
  darken4: "#e65100",
  accent1: "#ffd180",
  accent2: "#ffab40",
  accent3: "#ff9100",
  accent4: "#ff6d00"
}, wh = {
  base: "#ff5722",
  lighten5: "#fbe9e7",
  lighten4: "#ffccbc",
  lighten3: "#ffab91",
  lighten2: "#ff8a65",
  lighten1: "#ff7043",
  darken1: "#f4511e",
  darken2: "#e64a19",
  darken3: "#d84315",
  darken4: "#bf360c",
  accent1: "#ff9e80",
  accent2: "#ff6e40",
  accent3: "#ff3d00",
  accent4: "#dd2c00"
}, Vh = {
  base: "#795548",
  lighten5: "#efebe9",
  lighten4: "#d7ccc8",
  lighten3: "#bcaaa4",
  lighten2: "#a1887f",
  lighten1: "#8d6e63",
  darken1: "#6d4c41",
  darken2: "#5d4037",
  darken3: "#4e342e",
  darken4: "#3e2723"
}, Ph = {
  base: "#607d8b",
  lighten5: "#eceff1",
  lighten4: "#cfd8dc",
  lighten3: "#b0bec5",
  lighten2: "#90a4ae",
  lighten1: "#78909c",
  darken1: "#546e7a",
  darken2: "#455a64",
  darken3: "#37474f",
  darken4: "#263238"
}, Ih = {
  base: "#9e9e9e",
  lighten5: "#fafafa",
  lighten4: "#f5f5f5",
  lighten3: "#eeeeee",
  lighten2: "#e0e0e0",
  lighten1: "#bdbdbd",
  darken1: "#757575",
  darken2: "#616161",
  darken3: "#424242",
  darken4: "#212121"
}, _h = {
  black: "#000000",
  white: "#ffffff",
  transparent: "#ffffff00"
}, Ah = {
  red: sh,
  pink: uh,
  purple: ch,
  deepPurple: dh,
  indigo: vh,
  blue: fh,
  lightBlue: mh,
  cyan: gh,
  teal: hh,
  green: yh,
  lightGreen: bh,
  lime: Sh,
  yellow: kh,
  amber: Ch,
  orange: xh,
  deepOrange: wh,
  brown: Vh,
  blueGrey: Ph,
  grey: Ih,
  shades: _h
}, Lh = M(v({
  swatches: {
    type: Array,
    default: () => Th(Ah)
  },
  disabled: Boolean,
  color: Object,
  maxHeight: [Number, String]
}, te()), "VColorPickerSwatches");
function Th(e) {
  return Object.keys(e).map((n) => {
    const t = e[n];
    return t.base ? [t.base, t.darken4, t.darken3, t.darken2, t.darken1, t.lighten1, t.lighten2, t.lighten3, t.lighten4, t.lighten5] : [t.black, t.white, t.transparent];
  });
}
const Bh = gt({
  name: "VColorPickerSwatches",
  props: Lh(),
  emits: {
    "update:color": (e) => !0
  },
  setup(e, n) {
    let {
      emit: t
    } = n;
    return z(() => s("div", {
      class: ["v-color-picker-swatches", e.class],
      style: [{
        maxHeight: ee(e.maxHeight)
      }, e.style]
    }, [s("div", null, [e.swatches.map((a) => s("div", {
      class: "v-color-picker-swatches__swatch"
    }, [a.map((l) => {
      const i = St(l), o = Ga(i), r = jr(i);
      return s("div", {
        class: "v-color-picker-swatches__color",
        onClick: () => o && t("update:color", o)
      }, [s("div", {
        style: {
          background: r
        }
      }, [e.color && Lt(e.color, o) ? s(Ve, {
        size: "x-small",
        icon: "$success",
        color: Ed(l, "#FFFFFF") > 2 ? "white" : "black"
      }, null) : void 0])]);
    })]))])])), {};
  }
}), vl = M(v(v(v(v(v(v(v(v(v({
  color: String
}, vt()), te()), Ye()), Xe()), Rt()), Wn()), De()), me()), Se()), "VSheet"), dn = N()({
  name: "VSheet",
  props: vl(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      themeClasses: a
    } = Pe(e), {
      backgroundColorClasses: l,
      backgroundColorStyles: i
    } = Le($(e, "color")), {
      borderClasses: o
    } = bt(e), {
      dimensionStyles: r
    } = Ge(e), {
      elevationClasses: u
    } = et(e), {
      locationStyles: c
    } = Pn(e), {
      positionClasses: d
    } = jn(e), {
      roundedClasses: f
    } = Oe(e);
    return z(() => s(e.tag, {
      class: ["v-sheet", a.value, l.value, o.value, u.value, d.value, f.value, e.class],
      style: [i.value, r.value, c.value, e.style]
    }, t)), {};
  }
}), Dh = M(v({
  canvasHeight: {
    type: [String, Number],
    default: 150
  },
  disabled: Boolean,
  dotSize: {
    type: [Number, String],
    default: 10
  },
  hideCanvas: Boolean,
  hideSliders: Boolean,
  hideInputs: Boolean,
  mode: {
    type: String,
    default: "rgba",
    validator: (e) => Object.keys(on).includes(e)
  },
  modes: {
    type: Array,
    default: () => Object.keys(on),
    validator: (e) => Array.isArray(e) && e.every((n) => Object.keys(on).includes(n))
  },
  showSwatches: Boolean,
  swatches: Array,
  swatchesMaxHeight: {
    type: [Number, String],
    default: 150
  },
  modelValue: {
    type: [Object, String]
  }
}, We(vl({
  width: 300
}), ["height", "location", "minHeight", "maxHeight", "minWidth", "maxWidth"])), "VColorPicker"), Mh = gt({
  name: "VColorPicker",
  props: Dh(),
  emits: {
    "update:modelValue": (e) => !0,
    "update:mode": (e) => !0
  },
  setup(e) {
    const n = oe(e, "mode"), t = G(null), a = oe(e, "modelValue", void 0, (u) => {
      if (u == null || u === "") return null;
      let c;
      try {
        c = Ga(St(u));
      } catch (d) {
        return wt(d), null;
      }
      return c;
    }, (u) => u ? qg(u, e.modelValue) : null), l = S(() => {
      var u;
      return a.value ? J(v({}, a.value), {
        h: (u = t.value) != null ? u : a.value.h
      }) : null;
    }), {
      rtlClasses: i
    } = je();
    let o = !0;
    Q(a, (u) => {
      if (!o) {
        o = !0;
        return;
      }
      u && (t.value = u.h);
    }, {
      immediate: !0
    });
    const r = (u) => {
      o = !1, t.value = u.h, a.value = u;
    };
    return rt(() => {
      e.modes.includes(n.value) || (n.value = e.modes[0]);
    }), Ee({
      VSlider: {
        color: void 0,
        trackColor: void 0,
        trackFillColor: void 0
      }
    }), z(() => {
      var c;
      const u = dn.filterProps(e);
      return s(dn, H({
        rounded: e.rounded,
        elevation: e.elevation,
        theme: e.theme,
        class: ["v-color-picker", i.value, e.class],
        style: [{
          "--v-color-picker-color-hsv": Yr(J(v({}, (c = l.value) != null ? c : Mn), {
            a: 1
          }))
        }, e.style]
      }, u, {
        maxWidth: e.width
      }), {
        default: () => [!e.hideCanvas && s(Ug, {
          key: "canvas",
          color: l.value,
          "onUpdate:color": r,
          disabled: e.disabled,
          dotSize: e.dotSize,
          width: e.width,
          height: e.canvasHeight
        }, null), (!e.hideSliders || !e.hideInputs) && s("div", {
          key: "controls",
          class: "v-color-picker__controls"
        }, [!e.hideSliders && s(rh, {
          key: "preview",
          color: l.value,
          "onUpdate:color": r,
          hideAlpha: !n.value.endsWith("a"),
          disabled: e.disabled
        }, null), !e.hideInputs && s(th, {
          key: "edit",
          modes: e.modes,
          mode: n.value,
          "onUpdate:mode": (d) => n.value = d,
          color: l.value,
          "onUpdate:color": r,
          disabled: e.disabled
        }, null)]), e.showSwatches && s(Bh, {
          key: "swatches",
          color: l.value,
          "onUpdate:color": r,
          maxHeight: e.swatchesMaxHeight,
          swatches: e.swatches,
          disabled: e.disabled
        }, null)]
      });
    }), {};
  }
});
function ph(e, n, t) {
  if (n == null) return e;
  if (Array.isArray(n)) throw new Error("Multiple matches is not implemented");
  return typeof n == "number" && ~n ? s(re, null, [s("span", {
    class: "v-combobox__unmask"
  }, [e.substr(0, n)]), s("span", {
    class: "v-combobox__mask"
  }, [e.substr(n, t)]), s("span", {
    class: "v-combobox__unmask"
  }, [e.substr(n + t)])]) : e;
}
const Eh = M(v(v(v(v({
  autoSelectFirst: {
    type: [Boolean, String]
  },
  clearOnSelect: {
    type: Boolean,
    default: !0
  },
  delimiters: Array
}, ba({
  filterKeys: ["title"]
})), qi({
  hideNoData: !0,
  returnObject: !0
})), We(sl({
  modelValue: null,
  role: "combobox"
}), ["validationValue", "dirty", "appendInnerIcon"])), It({
  transition: !1
})), "VCombobox"), Fh = N()({
  name: "VCombobox",
  props: Eh(),
  emits: {
    "update:focused": (e) => !0,
    "update:modelValue": (e) => !0,
    "update:search": (e) => !0,
    "update:menu": (e) => !0
  },
  setup(e, n) {
    var ge, ke;
    let {
      emit: t,
      slots: a
    } = n;
    const {
      t: l
    } = $e(), i = G(), o = Z(!1), r = Z(!0), u = Z(!1), c = G(), d = G(), f = oe(e, "menu"), m = S({
      get: () => f.value,
      set: (j) => {
        var le;
        f.value && !j && ((le = c.value) != null && le.ΨopenChildren.size) || (f.value = j);
      }
    }), g = Z(-1);
    let y = !1;
    const b = S(() => {
      var j;
      return (j = i.value) == null ? void 0 : j.color;
    }), h = S(() => m.value ? e.closeText : e.openText), {
      items: k,
      transformIn: C,
      transformOut: I
    } = zi(e), {
      textColorClasses: A,
      textColorStyles: x
    } = tt(b), P = oe(e, "modelValue", [], (j) => C(Me(j)), (j) => {
      var fe;
      const le = I(j);
      return e.multiple ? le : (fe = le[0]) != null ? fe : null;
    }), T = il(), w = S(() => !!(e.chips || a.chip)), _ = S(() => w.value || !!a.selection), B = Z(!e.multiple && !_.value && (ke = (ge = P.value[0]) == null ? void 0 : ge.title) != null ? ke : ""), V = S({
      get: () => B.value,
      set: (j) => {
        var le;
        if (B.value = j != null ? j : "", !e.multiple && !_.value && (P.value = [zt(e, j)]), j && e.multiple && ((le = e.delimiters) != null && le.length)) {
          const fe = j.split(new RegExp(`(?:${e.delimiters.join("|")})+`));
          fe.length > 1 && (fe.forEach((de) => {
            de = de.trim(), de && se(zt(e, de));
          }), B.value = "");
        }
        j || (g.value = -1), r.value = !j;
      }
    }), L = S(() => typeof e.counterValue == "function" ? e.counterValue(P.value) : typeof e.counterValue == "number" ? e.counterValue : e.multiple ? P.value.length : V.value.length);
    Q(B, (j) => {
      y ? _e(() => y = !1) : o.value && !m.value && (m.value = !0), t("update:search", j);
    }), Q(P, (j) => {
      var le, fe;
      !e.multiple && !_.value && (B.value = (fe = (le = j[0]) == null ? void 0 : le.title) != null ? fe : "");
    });
    const {
      filteredItems: D,
      getMatches: p
    } = Sa(e, k, () => r.value ? "" : V.value), R = S(() => e.hideSelected ? D.value.filter((j) => !P.value.some((le) => le.value === j.value)) : D.value), U = S(() => P.value.map((j) => j.value)), q = S(() => {
      var le;
      return (e.autoSelectFirst === !0 || e.autoSelectFirst === "exact" && V.value === ((le = R.value[0]) == null ? void 0 : le.title)) && R.value.length > 0 && !r.value && !u.value;
    }), K = S(() => e.hideNoData && !R.value.length || e.readonly || (T == null ? void 0 : T.isReadonly.value)), E = G(), F = Ki(E, i);
    function O(j) {
      y = !0, e.openOnClear && (m.value = !0);
    }
    function Y() {
      K.value || (m.value = !0);
    }
    function ie(j) {
      K.value || (o.value && (j.preventDefault(), j.stopPropagation()), m.value = !m.value);
    }
    function ne(j) {
      var le;
      Ea(j) && ((le = i.value) == null || le.focus());
    }
    function ue(j) {
      var de;
      if (od(j) || e.readonly || T != null && T.isReadonly.value) return;
      const le = i.value.selectionStart, fe = P.value.length;
      if ((g.value > -1 || ["Enter", "ArrowDown", "ArrowUp"].includes(j.key)) && j.preventDefault(), ["Enter", "ArrowDown"].includes(j.key) && (m.value = !0), ["Escape"].includes(j.key) && (m.value = !1), ["Enter", "Escape", "Tab"].includes(j.key) && (q.value && ["Enter", "Tab"].includes(j.key) && !P.value.some((be) => {
        let {
          value: Ue
        } = be;
        return Ue === R.value[0].value;
      }) && se(D.value[0]), r.value = !0), j.key === "ArrowDown" && q.value && ((de = E.value) == null || de.focus("next")), j.key === "Enter" && V.value && (se(zt(e, V.value)), _.value && (B.value = "")), ["Backspace", "Delete"].includes(j.key)) {
        if (!e.multiple && _.value && P.value.length > 0 && !V.value) return se(P.value[0], !1);
        if (~g.value) {
          const be = g.value;
          se(P.value[g.value], !1), g.value = be >= fe - 1 ? fe - 2 : be;
        } else j.key === "Backspace" && !V.value && (g.value = fe - 1);
      }
      if (e.multiple) {
        if (j.key === "ArrowLeft") {
          if (g.value < 0 && le > 0) return;
          const be = g.value > -1 ? g.value - 1 : fe - 1;
          P.value[be] ? g.value = be : (g.value = -1, i.value.setSelectionRange(V.value.length, V.value.length));
        }
        if (j.key === "ArrowRight") {
          if (g.value < 0) return;
          const be = g.value + 1;
          P.value[be] ? g.value = be : (g.value = -1, i.value.setSelectionRange(0, 0));
        }
      }
    }
    function W() {
      var j;
      e.eager && ((j = d.value) == null || j.calculateVisibleItems());
    }
    function ae() {
      var j;
      o.value && (r.value = !0, (j = i.value) == null || j.focus());
    }
    function se(j) {
      let le = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
      if (!(!j || j.props.disabled))
        if (e.multiple) {
          const fe = P.value.findIndex((be) => e.valueComparator(be.value, j.value)), de = le == null ? !~fe : le;
          if (~fe) {
            const be = de ? [...P.value, j] : [...P.value];
            be.splice(fe, 1), P.value = be;
          } else de && (P.value = [...P.value, j]);
          e.clearOnSelect && (V.value = "");
        } else {
          const fe = le !== !1;
          P.value = fe ? [j] : [], B.value = fe && !_.value ? j.title : "", _e(() => {
            m.value = !1, r.value = !0;
          });
        }
    }
    function ye(j) {
      o.value = !0, setTimeout(() => {
        u.value = !0;
      });
    }
    function ce(j) {
      u.value = !1;
    }
    function X(j) {
      (j == null || j === "" && !e.multiple && !_.value) && (P.value = []);
    }
    return Q(o, (j, le) => {
      if (!(j || j === le) && (g.value = -1, m.value = !1, V.value)) {
        if (e.multiple) {
          se(zt(e, V.value));
          return;
        }
        if (!_.value) return;
        P.value.some((fe) => {
          let {
            title: de
          } = fe;
          return de === V.value;
        }) ? B.value = "" : se(zt(e, V.value));
      }
    }), Q(m, () => {
      if (!e.hideSelected && m.value && P.value.length) {
        const j = R.value.findIndex((le) => P.value.some((fe) => e.valueComparator(fe.value, le.value)));
        Ie && window.requestAnimationFrame(() => {
          var le;
          j >= 0 && ((le = d.value) == null || le.scrollToIndex(j));
        });
      }
    }), Q(() => e.items, (j, le) => {
      m.value || o.value && !le.length && j.length && (m.value = !0);
    }), z(() => {
      const j = !!(!e.hideNoData || R.value.length || a["prepend-item"] || a["append-item"] || a["no-data"]), le = P.value.length > 0, fe = sn.filterProps(e);
      return s(sn, H({
        ref: i
      }, fe, {
        modelValue: V.value,
        "onUpdate:modelValue": [(de) => V.value = de, X],
        focused: o.value,
        "onUpdate:focused": (de) => o.value = de,
        validationValue: P.externalValue,
        counterValue: L.value,
        dirty: le,
        class: ["v-combobox", {
          "v-combobox--active-menu": m.value,
          "v-combobox--chips": !!e.chips,
          "v-combobox--selection-slot": !!_.value,
          "v-combobox--selecting-index": g.value > -1,
          [`v-combobox--${e.multiple ? "multiple" : "single"}`]: !0
        }, e.class],
        style: e.style,
        readonly: e.readonly,
        placeholder: le ? void 0 : e.placeholder,
        "onClick:clear": O,
        "onMousedown:control": Y,
        onKeydown: ue
      }), J(v({}, a), {
        default: () => s(re, null, [s(Rn, H({
          ref: c,
          modelValue: m.value,
          "onUpdate:modelValue": (de) => m.value = de,
          activator: "parent",
          contentClass: "v-combobox__content",
          disabled: K.value,
          eager: e.eager,
          maxHeight: 310,
          openOnClick: !1,
          closeOnContentClick: !1,
          transition: e.transition,
          onAfterEnter: W,
          onAfterLeave: ae
        }, e.menuProps), {
          default: () => {
            var de;
            return [j && s(ol, H({
              ref: E,
              selected: U.value,
              selectStrategy: e.multiple ? "independent" : "single-independent",
              onMousedown: (be) => be.preventDefault(),
              onKeydown: ne,
              onFocusin: ye,
              onFocusout: ce,
              tabindex: "-1",
              "aria-live": "polite",
              color: (de = e.itemColor) != null ? de : e.color
            }, F, e.listProps), {
              default: () => {
                var be, Ue, Ae, Mt;
                return [(be = a["prepend-item"]) == null ? void 0 : be.call(a), !R.value.length && !e.hideNoData && ((Ae = (Ue = a["no-data"]) == null ? void 0 : Ue.call(a)) != null ? Ae : s(Ot, {
                  title: l(e.noDataText)
                }, null)), s(ul, {
                  ref: d,
                  renderless: !0,
                  items: R.value
                }, {
                  default: (pt) => {
                    var Zt, Kn;
                    let {
                      item: Te,
                      index: _n,
                      itemRef: ka
                    } = pt;
                    const Xt = H(Te.props, {
                      ref: ka,
                      key: _n,
                      active: q.value && _n === 0 ? !0 : void 0,
                      onClick: () => se(Te, null)
                    });
                    return (Kn = (Zt = a.item) == null ? void 0 : Zt.call(a, {
                      item: Te,
                      index: _n,
                      props: Xt
                    })) != null ? Kn : s(Ot, H(Xt, {
                      role: "option"
                    }), {
                      prepend: (Ca) => {
                        let {
                          isSelected: xa
                        } = Ca;
                        return s(re, null, [e.multiple && !e.hideSelected ? s($t, {
                          key: Te.value,
                          modelValue: xa,
                          ripple: !1,
                          tabindex: "-1"
                        }, null) : void 0, Te.props.prependAvatar && s(kt, {
                          image: Te.props.prependAvatar
                        }, null), Te.props.prependIcon && s(Ve, {
                          icon: Te.props.prependIcon
                        }, null)]);
                      },
                      title: () => {
                        var Ca, xa, go;
                        return r.value ? Te.title : ph(Te.title, (Ca = p(Te)) == null ? void 0 : Ca.title, (go = (xa = V.value) == null ? void 0 : xa.length) != null ? go : 0);
                      }
                    });
                  }
                }), (Mt = a["append-item"]) == null ? void 0 : Mt.call(a)];
              }
            })];
          }
        }), P.value.map((de, be) => {
          function Ue(Te) {
            Te.stopPropagation(), Te.preventDefault(), se(de, !1);
          }
          const Ae = {
            "onClick:close": Ue,
            onKeydown(Te) {
              Te.key !== "Enter" && Te.key !== " " || (Te.preventDefault(), Te.stopPropagation(), Ue(Te));
            },
            onMousedown(Te) {
              Te.preventDefault(), Te.stopPropagation();
            },
            modelValue: !0,
            "onUpdate:modelValue": void 0
          }, Mt = w.value ? !!a.chip : !!a.selection, pt = Mt ? Ya(w.value ? a.chip({
            item: de,
            index: be,
            props: Ae
          }) : a.selection({
            item: de,
            index: be
          })) : void 0;
          if (!(Mt && !pt))
            return s("div", {
              key: de.value,
              class: ["v-combobox__selection", be === g.value && ["v-combobox__selection--selected", A.value]],
              style: be === g.value ? x.value : {}
            }, [w.value ? a.chip ? s(he, {
              key: "chip-defaults",
              defaults: {
                VChip: {
                  closable: e.closableChips,
                  size: "small",
                  text: de.title
                }
              }
            }, {
              default: () => [pt]
            }) : s(Gn, H({
              key: "chip",
              closable: e.closableChips,
              size: "small",
              text: de.title,
              disabled: de.props.disabled
            }, Ae), null) : pt != null ? pt : s("span", {
              class: "v-combobox__selection-text"
            }, [de.title, e.multiple && be < P.value.length - 1 && s("span", {
              class: "v-combobox__selection-comma"
            }, [jt(",")])])]);
        })]),
        "append-inner": function() {
          var Ae;
          for (var de = arguments.length, be = new Array(de), Ue = 0; Ue < de; Ue++)
            be[Ue] = arguments[Ue];
          return s(re, null, [(Ae = a["append-inner"]) == null ? void 0 : Ae.call(a, ...be), (!e.hideNoData || e.items.length) && e.menuIcon ? s(Ve, {
            class: "v-combobox__menu-icon",
            icon: e.menuIcon,
            onMousedown: ie,
            onClick: $r,
            "aria-label": l(h.value),
            title: l(h.value),
            tabindex: "-1"
          }, null) : void 0]);
        }
      }));
    }), xt({
      isFocused: o,
      isPristine: r,
      menu: m,
      search: V,
      selectionIndex: g,
      filteredItems: D,
      select: se
    }, i);
  }
}), $h = M({
  modelValue: null,
  color: String,
  cancelText: {
    type: String,
    default: "$vuetify.confirmEdit.cancel"
  },
  okText: {
    type: String,
    default: "$vuetify.confirmEdit.ok"
  }
}, "VConfirmEdit"), Oh = N()({
  name: "VConfirmEdit",
  props: $h(),
  emits: {
    cancel: () => !0,
    save: (e) => !0,
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      emit: t,
      slots: a
    } = n;
    const l = oe(e, "modelValue"), i = G();
    Re(() => {
      i.value = structuredClone(ze(l.value));
    });
    const {
      t: o
    } = $e(), r = S(() => Lt(l.value, i.value));
    function u() {
      l.value = i.value, t("save", i.value);
    }
    function c() {
      i.value = structuredClone(ze(l.value)), t("cancel");
    }
    let d = !1;
    return z(() => {
      var m;
      const f = s(re, null, [s(we, {
        disabled: r.value,
        variant: "text",
        color: e.color,
        onClick: c,
        text: o(e.cancelText)
      }, null), s(we, {
        disabled: r.value,
        variant: "text",
        color: e.color,
        onClick: u,
        text: o(e.okText)
      }, null)]);
      return s(re, null, [(m = a.default) == null ? void 0 : m.call(a, {
        model: i,
        save: u,
        cancel: c,
        isPristine: r.value,
        get actions() {
          return d = !0, f;
        }
      }), !d && f]);
    }), {
      save: u,
      cancel: c,
      isPristine: r
    };
  }
}), Eu = M({
  expandOnClick: Boolean,
  showExpand: Boolean,
  expanded: {
    type: Array,
    default: () => []
  }
}, "DataTable-expand"), Fu = Symbol.for("vuetify:datatable:expanded");
function fl(e) {
  const n = $(e, "expandOnClick"), t = oe(e, "expanded", e.expanded, (r) => new Set(r), (r) => [...r.values()]);
  function a(r, u) {
    const c = new Set(t.value);
    u ? c.add(r.value) : c.delete(r.value), t.value = c;
  }
  function l(r) {
    return t.value.has(r.value);
  }
  function i(r) {
    a(r, !l(r));
  }
  const o = {
    expand: a,
    expanded: t,
    expandOnClick: n,
    isExpanded: l,
    toggleExpand: i
  };
  return Be(Fu, o), o;
}
function $u() {
  const e = Ce(Fu);
  if (!e) throw new Error("foo");
  return e;
}
const Ji = M({
  groupBy: {
    type: Array,
    default: () => []
  }
}, "DataTable-group"), Ou = Symbol.for("vuetify:data-table-group");
function Qi(e) {
  return {
    groupBy: oe(e, "groupBy")
  };
}
function ml(e) {
  const {
    disableSort: n,
    groupBy: t,
    sortBy: a
  } = e, l = G(/* @__PURE__ */ new Set()), i = S(() => t.value.map((d) => {
    var f;
    return J(v({}, d), {
      order: (f = d.order) != null ? f : !1
    });
  }).concat(n != null && n.value ? [] : a.value));
  function o(d) {
    return l.value.has(d.id);
  }
  function r(d) {
    const f = new Set(l.value);
    o(d) ? f.delete(d.id) : f.add(d.id), l.value = f;
  }
  function u(d) {
    function f(m) {
      const g = [];
      for (const y of m.items)
        "type" in y && y.type === "group" ? g.push(...f(y)) : g.push(y);
      return g;
    }
    return f({
      items: d
    });
  }
  const c = {
    sortByWithGroups: i,
    toggleGroup: r,
    opened: l,
    groupBy: t,
    extractRows: u,
    isGroupOpen: o
  };
  return Be(Ou, c), c;
}
function Ru() {
  const e = Ce(Ou);
  if (!e) throw new Error("Missing group!");
  return e;
}
function Rh(e, n) {
  if (!e.length) return [];
  const t = /* @__PURE__ */ new Map();
  for (const a of e) {
    const l = rn(a.raw, n);
    t.has(l) || t.set(l, []), t.get(l).push(a);
  }
  return t;
}
function Nu(e, n) {
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "root";
  if (!n.length) return [];
  const l = Rh(e, n[0]), i = [], o = n.slice(1);
  return l.forEach((r, u) => {
    const c = n[0], d = `${a}_${c}_${u}`;
    i.push({
      depth: t,
      id: d,
      key: c,
      value: u,
      items: o.length ? Nu(r, o, t + 1, d) : r,
      type: "group"
    });
  }), i;
}
function Hu(e, n) {
  const t = [];
  for (const a of e)
    "type" in a && a.type === "group" ? (a.value != null && t.push(a), (n.has(a.id) || a.value == null) && t.push(...Hu(a.items, n))) : t.push(a);
  return t;
}
function gl(e, n, t) {
  return {
    flatItems: S(() => {
      if (!n.value.length) return e.value;
      const l = Nu(e.value, n.value.map((i) => i.key));
      return Hu(l, t.value);
    })
  };
}
function hl(e) {
  let {
    page: n,
    itemsPerPage: t,
    sortBy: a,
    groupBy: l,
    search: i
  } = e;
  const o = Fe("VDataTable"), r = S(() => ({
    page: n.value,
    itemsPerPage: t.value,
    sortBy: a.value,
    groupBy: l.value,
    search: i.value
  }));
  let u = null;
  Q(r, () => {
    Lt(u, r.value) || (u && u.search !== r.value.search && (n.value = 1), o.emit("update:options", r.value), u = r.value);
  }, {
    deep: !0,
    immediate: !0
  });
}
const eo = M({
  page: {
    type: [Number, String],
    default: 1
  },
  itemsPerPage: {
    type: [Number, String],
    default: 10
  }
}, "DataTable-paginate"), zu = Symbol.for("vuetify:data-table-pagination");
function to(e) {
  const n = oe(e, "page", void 0, (a) => +(a != null ? a : 1)), t = oe(e, "itemsPerPage", void 0, (a) => +(a != null ? a : 10));
  return {
    page: n,
    itemsPerPage: t
  };
}
function no(e) {
  const {
    page: n,
    itemsPerPage: t,
    itemsLength: a
  } = e, l = S(() => t.value === -1 ? 0 : t.value * (n.value - 1)), i = S(() => t.value === -1 ? a.value : Math.min(a.value, l.value + t.value)), o = S(() => t.value === -1 || a.value === 0 ? 1 : Math.ceil(a.value / t.value));
  Re(() => {
    n.value > o.value && (n.value = o.value);
  });
  function r(m) {
    t.value = m, n.value = 1;
  }
  function u() {
    n.value = Ne(n.value + 1, 1, o.value);
  }
  function c() {
    n.value = Ne(n.value - 1, 1, o.value);
  }
  function d(m) {
    n.value = Ne(m, 1, o.value);
  }
  const f = {
    page: n,
    itemsPerPage: t,
    startIndex: l,
    stopIndex: i,
    pageCount: o,
    itemsLength: a,
    nextPage: u,
    prevPage: c,
    setPage: d,
    setItemsPerPage: r
  };
  return Be(zu, f), f;
}
function Nh() {
  const e = Ce(zu);
  if (!e) throw new Error("Missing pagination!");
  return e;
}
function Wu(e) {
  const n = Fe("usePaginatedItems"), {
    items: t,
    startIndex: a,
    stopIndex: l,
    itemsPerPage: i
  } = e, o = S(() => i.value <= 0 ? t.value : t.value.slice(a.value, l.value));
  return Q(o, (r) => {
    n.emit("update:currentItems", r);
  }), {
    paginatedItems: o
  };
}
const Hh = {
  showSelectAll: !1,
  allSelected: () => [],
  select: (e) => {
    var a;
    let {
      items: n,
      value: t
    } = e;
    return new Set(t ? [(a = n[0]) == null ? void 0 : a.value] : []);
  },
  selectAll: (e) => {
    let {
      selected: n
    } = e;
    return n;
  }
}, ju = {
  showSelectAll: !0,
  allSelected: (e) => {
    let {
      currentPage: n
    } = e;
    return n;
  },
  select: (e) => {
    let {
      items: n,
      value: t,
      selected: a
    } = e;
    for (const l of n)
      t ? a.add(l.value) : a.delete(l.value);
    return a;
  },
  selectAll: (e) => {
    let {
      value: n,
      currentPage: t,
      selected: a
    } = e;
    return ju.select({
      items: t,
      value: n,
      selected: a
    });
  }
}, Yu = {
  showSelectAll: !0,
  allSelected: (e) => {
    let {
      allItems: n
    } = e;
    return n;
  },
  select: (e) => {
    let {
      items: n,
      value: t,
      selected: a
    } = e;
    for (const l of n)
      t ? a.add(l.value) : a.delete(l.value);
    return a;
  },
  selectAll: (e) => {
    let {
      value: n,
      allItems: t,
      selected: a
    } = e;
    return Yu.select({
      items: t,
      value: n,
      selected: a
    });
  }
}, Gu = M({
  showSelect: Boolean,
  selectStrategy: {
    type: [String, Object],
    default: "page"
  },
  modelValue: {
    type: Array,
    default: () => []
  },
  valueComparator: {
    type: Function,
    default: Lt
  }
}, "DataTable-select"), Uu = Symbol.for("vuetify:data-table-selection");
function yl(e, n) {
  let {
    allItems: t,
    currentPage: a
  } = n;
  const l = oe(e, "modelValue", e.modelValue, (k) => new Set(Me(k).map((C) => {
    var I, A;
    return (A = (I = t.value.find((x) => e.valueComparator(C, x.value))) == null ? void 0 : I.value) != null ? A : C;
  })), (k) => [...k.values()]), i = S(() => t.value.filter((k) => k.selectable)), o = S(() => a.value.filter((k) => k.selectable)), r = S(() => {
    if (typeof e.selectStrategy == "object") return e.selectStrategy;
    switch (e.selectStrategy) {
      case "single":
        return Hh;
      case "all":
        return Yu;
      case "page":
      default:
        return ju;
    }
  });
  function u(k) {
    return Me(k).every((C) => l.value.has(C.value));
  }
  function c(k) {
    return Me(k).some((C) => l.value.has(C.value));
  }
  function d(k, C) {
    const I = r.value.select({
      items: k,
      value: C,
      selected: new Set(l.value)
    });
    l.value = I;
  }
  function f(k) {
    d([k], !u([k]));
  }
  function m(k) {
    const C = r.value.selectAll({
      value: k,
      allItems: i.value,
      currentPage: o.value,
      selected: new Set(l.value)
    });
    l.value = C;
  }
  const g = S(() => l.value.size > 0), y = S(() => {
    const k = r.value.allSelected({
      allItems: i.value,
      currentPage: o.value
    });
    return !!k.length && u(k);
  }), b = S(() => r.value.showSelectAll), h = {
    toggleSelect: f,
    select: d,
    selectAll: m,
    isSelected: u,
    isSomeSelected: c,
    someSelected: g,
    allSelected: y,
    showSelectAll: b
  };
  return Be(Uu, h), h;
}
function bl() {
  const e = Ce(Uu);
  if (!e) throw new Error("Missing selection!");
  return e;
}
const Ku = M({
  sortBy: {
    type: Array,
    default: () => []
  },
  customKeySort: Object,
  multiSort: Boolean,
  mustSort: Boolean
}, "DataTable-sort"), qu = Symbol.for("vuetify:data-table-sort");
function Sl(e) {
  const n = oe(e, "sortBy"), t = $(e, "mustSort"), a = $(e, "multiSort");
  return {
    sortBy: n,
    mustSort: t,
    multiSort: a
  };
}
function kl(e) {
  const {
    sortBy: n,
    mustSort: t,
    multiSort: a,
    page: l
  } = e, i = (u) => {
    var f;
    if (u.key == null) return;
    let c = (f = n.value.map((m) => v({}, m))) != null ? f : [];
    const d = c.find((m) => m.key === u.key);
    d ? d.order === "desc" ? t.value ? d.order = "asc" : c = c.filter((m) => m.key !== u.key) : d.order = "desc" : a.value ? c = [...c, {
      key: u.key,
      order: "asc"
    }] : c = [{
      key: u.key,
      order: "asc"
    }], n.value = c, l && (l.value = 1);
  };
  function o(u) {
    return !!n.value.find((c) => c.key === u.key);
  }
  const r = {
    sortBy: n,
    toggleSort: i,
    isSorted: o
  };
  return Be(qu, r), r;
}
function Xu() {
  const e = Ce(qu);
  if (!e) throw new Error("Missing sort!");
  return e;
}
function ao(e, n, t, a) {
  const l = $e();
  return {
    sortedItems: S(() => {
      var o, r;
      return t.value.length ? zh(n.value, t.value, l.current.value, {
        transform: a == null ? void 0 : a.transform,
        sortFunctions: v(v({}, e.customKeySort), (o = a == null ? void 0 : a.sortFunctions) == null ? void 0 : o.value),
        sortRawFunctions: (r = a == null ? void 0 : a.sortRawFunctions) == null ? void 0 : r.value
      }) : n.value;
    })
  };
}
function zh(e, n, t, a) {
  const l = new Intl.Collator(t, {
    sensitivity: "accent",
    usage: "sort"
  });
  return e.map((o) => [o, a != null && a.transform ? a.transform(o) : o]).sort((o, r) => {
    var u, c, d;
    for (let f = 0; f < n.length; f++) {
      let m = !1;
      const g = n[f].key, y = (u = n[f].order) != null ? u : "asc";
      if (y === !1) continue;
      let b = rn(o[1], g), h = rn(r[1], g), k = o[0].raw, C = r[0].raw;
      if (y === "desc" && ([b, h] = [h, b], [k, C] = [C, k]), (c = a == null ? void 0 : a.sortRawFunctions) != null && c[g]) {
        const I = a.sortRawFunctions[g](k, C);
        if (I == null) continue;
        if (m = !0, I) return I;
      }
      if ((d = a == null ? void 0 : a.sortFunctions) != null && d[g]) {
        const I = a.sortFunctions[g](b, h);
        if (I == null) continue;
        if (m = !0, I) return I;
      }
      if (!m) {
        if (b instanceof Date && h instanceof Date)
          return b.getTime() - h.getTime();
        if ([b, h] = [b, h].map((I) => I != null ? I.toString().toLocaleLowerCase() : I), b !== h)
          return Pa(b) && Pa(h) ? 0 : Pa(b) ? -1 : Pa(h) ? 1 : !isNaN(b) && !isNaN(h) ? Number(b) - Number(h) : l.compare(b, h);
      }
    }
    return 0;
  }).map((o) => {
    let [r] = o;
    return r;
  });
}
const Wh = M({
  items: {
    type: Array,
    default: () => []
  },
  itemValue: {
    type: [String, Array, Function],
    default: "id"
  },
  itemSelectable: {
    type: [String, Array, Function],
    default: null
  },
  returnObject: Boolean
}, "DataIterator-items");
function jh(e, n) {
  const t = e.returnObject ? n : qe(n, e.itemValue), a = qe(n, e.itemSelectable, !0);
  return {
    type: "item",
    value: t,
    selectable: a,
    raw: n
  };
}
function Yh(e, n) {
  const t = [];
  for (const a of n)
    t.push(jh(e, a));
  return t;
}
function Gh(e) {
  return {
    items: S(() => Yh(e, e.items))
  };
}
const Uh = M(v(v(v(v(v(v(v(v(v(v({
  search: String,
  loading: Boolean
}, te()), Wh()), Gu()), Ku()), eo({
  itemsPerPage: 5
})), Eu()), Ji()), ba()), me()), It({
  transition: {
    component: na,
    hideOnLeave: !0
  }
})), "VDataIterator"), Kh = N()({
  name: "VDataIterator",
  props: Uh(),
  emits: {
    "update:modelValue": (e) => !0,
    "update:groupBy": (e) => !0,
    "update:page": (e) => !0,
    "update:itemsPerPage": (e) => !0,
    "update:sortBy": (e) => !0,
    "update:options": (e) => !0,
    "update:expanded": (e) => !0,
    "update:currentItems": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = oe(e, "groupBy"), l = $(e, "search"), {
      items: i
    } = Gh(e), {
      filteredItems: o
    } = Sa(e, i, l, {
      transform: (O) => O.raw
    }), {
      sortBy: r,
      multiSort: u,
      mustSort: c
    } = Sl(e), {
      page: d,
      itemsPerPage: f
    } = to(e), {
      toggleSort: m
    } = kl({
      sortBy: r,
      multiSort: u,
      mustSort: c,
      page: d
    }), {
      sortByWithGroups: g,
      opened: y,
      extractRows: b,
      isGroupOpen: h,
      toggleGroup: k
    } = ml({
      groupBy: a,
      sortBy: r
    }), {
      sortedItems: C
    } = ao(e, o, g, {
      transform: (O) => O.raw
    }), {
      flatItems: I
    } = gl(C, a, y), A = S(() => I.value.length), {
      startIndex: x,
      stopIndex: P,
      pageCount: T,
      prevPage: w,
      nextPage: _,
      setItemsPerPage: B,
      setPage: V
    } = no({
      page: d,
      itemsPerPage: f,
      itemsLength: A
    }), {
      paginatedItems: L
    } = Wu({
      items: I,
      startIndex: x,
      stopIndex: P,
      itemsPerPage: f
    }), D = S(() => b(L.value)), {
      isSelected: p,
      select: R,
      selectAll: U,
      toggleSelect: q
    } = yl(e, {
      allItems: i,
      currentPage: D
    }), {
      isExpanded: K,
      toggleExpand: E
    } = fl(e);
    hl({
      page: d,
      itemsPerPage: f,
      sortBy: r,
      groupBy: a,
      search: l
    });
    const F = S(() => ({
      page: d.value,
      itemsPerPage: f.value,
      sortBy: r.value,
      pageCount: T.value,
      toggleSort: m,
      prevPage: w,
      nextPage: _,
      setPage: V,
      setItemsPerPage: B,
      isSelected: p,
      select: R,
      selectAll: U,
      toggleSelect: q,
      isExpanded: K,
      toggleExpand: E,
      isGroupOpen: h,
      toggleGroup: k,
      items: D.value,
      groupedItems: L.value
    }));
    return z(() => s(e.tag, {
      class: ["v-data-iterator", {
        "v-data-iterator--loading": e.loading
      }, e.class],
      style: e.style
    }, {
      default: () => {
        var O, Y;
        return [(O = t.header) == null ? void 0 : O.call(t, F.value), s(lt, {
          transition: e.transition
        }, {
          default: () => {
            var ie, ne;
            return [e.loading ? s(da, {
              key: "loader",
              name: "v-data-iterator",
              active: !0
            }, {
              default: (ue) => {
                var W;
                return (W = t.loader) == null ? void 0 : W.call(t, ue);
              }
            }) : s("div", {
              key: "items"
            }, [L.value.length ? (ne = t.default) == null ? void 0 : ne.call(t, F.value) : (ie = t["no-data"]) == null ? void 0 : ie.call(t)])];
          }
        }), (Y = t.footer) == null ? void 0 : Y.call(t, F.value)];
      }
    })), {};
  }
});
function qh() {
  const e = G([]);
  Jc(() => e.value = []);
  function n(t, a) {
    e.value[a] = t;
  }
  return {
    refs: e,
    updateRef: n
  };
}
const Xh = M(v(v(v(v(v(v(v(v(v({
  activeColor: String,
  start: {
    type: [Number, String],
    default: 1
  },
  modelValue: {
    type: Number,
    default: (e) => e.start
  },
  disabled: Boolean,
  length: {
    type: [Number, String],
    default: 1,
    validator: (e) => e % 1 === 0
  },
  totalVisible: [Number, String],
  firstIcon: {
    type: ve,
    default: "$first"
  },
  prevIcon: {
    type: ve,
    default: "$prev"
  },
  nextIcon: {
    type: ve,
    default: "$next"
  },
  lastIcon: {
    type: ve,
    default: "$last"
  },
  ariaLabel: {
    type: String,
    default: "$vuetify.pagination.ariaLabel.root"
  },
  pageAriaLabel: {
    type: String,
    default: "$vuetify.pagination.ariaLabel.page"
  },
  currentPageAriaLabel: {
    type: String,
    default: "$vuetify.pagination.ariaLabel.currentPage"
  },
  firstAriaLabel: {
    type: String,
    default: "$vuetify.pagination.ariaLabel.first"
  },
  previousAriaLabel: {
    type: String,
    default: "$vuetify.pagination.ariaLabel.previous"
  },
  nextAriaLabel: {
    type: String,
    default: "$vuetify.pagination.ariaLabel.next"
  },
  lastAriaLabel: {
    type: String,
    default: "$vuetify.pagination.ariaLabel.last"
  },
  ellipsis: {
    type: String,
    default: "..."
  },
  showFirstLastPage: Boolean
}, vt()), te()), Ze()), Xe()), De()), Dt()), me({
  tag: "nav"
})), Se()), Ct({
  variant: "text"
})), "VPagination"), ii = N()({
  name: "VPagination",
  props: Xh(),
  emits: {
    "update:modelValue": (e) => !0,
    first: (e) => !0,
    prev: (e) => !0,
    next: (e) => !0,
    last: (e) => !0
  },
  setup(e, n) {
    let {
      slots: t,
      emit: a
    } = n;
    const l = oe(e, "modelValue"), {
      t: i,
      n: o
    } = $e(), {
      isRtl: r
    } = je(), {
      themeClasses: u
    } = Pe(e), {
      width: c
    } = ht(), d = Z(-1);
    Ee(void 0, {
      scoped: !0
    });
    const {
      resizeRef: f
    } = Vt((w) => {
      if (!w.length) return;
      const {
        target: _,
        contentRect: B
      } = w[0], V = _.querySelector(".v-pagination__list > *");
      if (!V) return;
      const L = B.width, D = V.offsetWidth + parseFloat(getComputedStyle(V).marginRight) * 2;
      d.value = b(L, D);
    }), m = S(() => parseInt(e.length, 10)), g = S(() => parseInt(e.start, 10)), y = S(() => e.totalVisible != null ? parseInt(e.totalVisible, 10) : d.value >= 0 ? d.value : b(c.value, 58));
    function b(w, _) {
      const B = e.showFirstLastPage ? 5 : 3;
      return Math.max(0, Math.floor(
        // Round to two decimal places to avoid floating point errors
        +((w - _ * B) / _).toFixed(2)
      ));
    }
    const h = S(() => {
      if (m.value <= 0 || isNaN(m.value) || m.value > Number.MAX_SAFE_INTEGER) return [];
      if (y.value <= 0) return [];
      if (y.value === 1) return [l.value];
      if (m.value <= y.value)
        return _t(m.value, g.value);
      const w = y.value % 2 === 0, _ = w ? y.value / 2 : Math.floor(y.value / 2), B = w ? _ : _ + 1, V = m.value - _;
      if (B - l.value >= 0)
        return [..._t(Math.max(1, y.value - 1), g.value), e.ellipsis, m.value];
      if (l.value - V >= (w ? 1 : 0)) {
        const L = y.value - 1, D = m.value - L + g.value;
        return [g.value, e.ellipsis, ..._t(L, D)];
      } else {
        const L = Math.max(1, y.value - 3), D = L === 1 ? l.value : l.value - Math.ceil(L / 2) + g.value;
        return [g.value, e.ellipsis, ..._t(L, D), e.ellipsis, m.value];
      }
    });
    function k(w, _, B) {
      w.preventDefault(), l.value = _, B && a(B, _);
    }
    const {
      refs: C,
      updateRef: I
    } = qh();
    Ee({
      VPaginationBtn: {
        color: $(e, "color"),
        border: $(e, "border"),
        density: $(e, "density"),
        size: $(e, "size"),
        variant: $(e, "variant"),
        rounded: $(e, "rounded"),
        elevation: $(e, "elevation")
      }
    });
    const A = S(() => h.value.map((w, _) => {
      const B = (V) => I(V, _);
      if (typeof w == "string")
        return {
          isActive: !1,
          key: `ellipsis-${_}`,
          page: w,
          props: {
            ref: B,
            ellipsis: !0,
            icon: !0,
            disabled: !0
          }
        };
      {
        const V = w === l.value;
        return {
          isActive: V,
          key: w,
          page: o(w),
          props: {
            ref: B,
            ellipsis: !1,
            icon: !0,
            disabled: !!e.disabled || +e.length < 2,
            color: V ? e.activeColor : e.color,
            "aria-current": V,
            "aria-label": i(V ? e.currentPageAriaLabel : e.pageAriaLabel, w),
            onClick: (L) => k(L, w)
          }
        };
      }
    })), x = S(() => {
      const w = !!e.disabled || l.value <= g.value, _ = !!e.disabled || l.value >= g.value + m.value - 1;
      return {
        first: e.showFirstLastPage ? {
          icon: r.value ? e.lastIcon : e.firstIcon,
          onClick: (B) => k(B, g.value, "first"),
          disabled: w,
          "aria-label": i(e.firstAriaLabel),
          "aria-disabled": w
        } : void 0,
        prev: {
          icon: r.value ? e.nextIcon : e.prevIcon,
          onClick: (B) => k(B, l.value - 1, "prev"),
          disabled: w,
          "aria-label": i(e.previousAriaLabel),
          "aria-disabled": w
        },
        next: {
          icon: r.value ? e.prevIcon : e.nextIcon,
          onClick: (B) => k(B, l.value + 1, "next"),
          disabled: _,
          "aria-label": i(e.nextAriaLabel),
          "aria-disabled": _
        },
        last: e.showFirstLastPage ? {
          icon: r.value ? e.firstIcon : e.lastIcon,
          onClick: (B) => k(B, g.value + m.value - 1, "last"),
          disabled: _,
          "aria-label": i(e.lastAriaLabel),
          "aria-disabled": _
        } : void 0
      };
    });
    function P() {
      var _;
      const w = l.value - g.value;
      (_ = C.value[w]) == null || _.$el.focus();
    }
    function T(w) {
      w.key === Ml.left && !e.disabled && l.value > +e.start ? (l.value = l.value - 1, _e(P)) : w.key === Ml.right && !e.disabled && l.value < g.value + m.value - 1 && (l.value = l.value + 1, _e(P));
    }
    return z(() => s(e.tag, {
      ref: f,
      class: ["v-pagination", u.value, e.class],
      style: e.style,
      role: "navigation",
      "aria-label": i(e.ariaLabel),
      onKeydown: T,
      "data-test": "v-pagination-root"
    }, {
      default: () => [s("ul", {
        class: "v-pagination__list"
      }, [e.showFirstLastPage && s("li", {
        key: "first",
        class: "v-pagination__first",
        "data-test": "v-pagination-first"
      }, [t.first ? t.first(x.value.first) : s(we, H({
        _as: "VPaginationBtn"
      }, x.value.first), null)]), s("li", {
        key: "prev",
        class: "v-pagination__prev",
        "data-test": "v-pagination-prev"
      }, [t.prev ? t.prev(x.value.prev) : s(we, H({
        _as: "VPaginationBtn"
      }, x.value.prev), null)]), A.value.map((w, _) => s("li", {
        key: w.key,
        class: ["v-pagination__item", {
          "v-pagination__item--is-active": w.isActive
        }],
        "data-test": "v-pagination-item"
      }, [t.item ? t.item(w) : s(we, H({
        _as: "VPaginationBtn"
      }, w.props), {
        default: () => [w.page]
      })])), s("li", {
        key: "next",
        class: "v-pagination__next",
        "data-test": "v-pagination-next"
      }, [t.next ? t.next(x.value.next) : s(we, H({
        _as: "VPaginationBtn"
      }, x.value.next), null)]), e.showFirstLastPage && s("li", {
        key: "last",
        class: "v-pagination__last",
        "data-test": "v-pagination-last"
      }, [t.last ? t.last(x.value.last) : s(we, H({
        _as: "VPaginationBtn"
      }, x.value.last), null)])])]
    })), {};
  }
}), lo = M({
  prevIcon: {
    type: ve,
    default: "$prev"
  },
  nextIcon: {
    type: ve,
    default: "$next"
  },
  firstIcon: {
    type: ve,
    default: "$first"
  },
  lastIcon: {
    type: ve,
    default: "$last"
  },
  itemsPerPageText: {
    type: String,
    default: "$vuetify.dataFooter.itemsPerPageText"
  },
  pageText: {
    type: String,
    default: "$vuetify.dataFooter.pageText"
  },
  firstPageLabel: {
    type: String,
    default: "$vuetify.dataFooter.firstPage"
  },
  prevPageLabel: {
    type: String,
    default: "$vuetify.dataFooter.prevPage"
  },
  nextPageLabel: {
    type: String,
    default: "$vuetify.dataFooter.nextPage"
  },
  lastPageLabel: {
    type: String,
    default: "$vuetify.dataFooter.lastPage"
  },
  itemsPerPageOptions: {
    type: Array,
    default: () => [{
      value: 10,
      title: "10"
    }, {
      value: 25,
      title: "25"
    }, {
      value: 50,
      title: "50"
    }, {
      value: 100,
      title: "100"
    }, {
      value: -1,
      title: "$vuetify.dataFooter.itemsPerPageAll"
    }]
  },
  showCurrentPage: Boolean
}, "VDataTableFooter"), sa = N()({
  name: "VDataTableFooter",
  props: lo(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      t: a
    } = $e(), {
      page: l,
      pageCount: i,
      startIndex: o,
      stopIndex: r,
      itemsLength: u,
      itemsPerPage: c,
      setItemsPerPage: d
    } = Nh(), f = S(() => e.itemsPerPageOptions.map((m) => typeof m == "number" ? {
      value: m,
      title: m === -1 ? a("$vuetify.dataFooter.itemsPerPageAll") : String(m)
    } : J(v({}, m), {
      title: isNaN(Number(m.title)) ? a(m.title) : m.title
    })));
    return z(() => {
      var g;
      const m = ii.filterProps(e);
      return s("div", {
        class: "v-data-table-footer"
      }, [(g = t.prepend) == null ? void 0 : g.call(t), s("div", {
        class: "v-data-table-footer__items-per-page"
      }, [s("span", null, [a(e.itemsPerPageText)]), s(Xi, {
        items: f.value,
        modelValue: c.value,
        "onUpdate:modelValue": (y) => d(Number(y)),
        density: "compact",
        variant: "outlined",
        "hide-details": !0
      }, null)]), s("div", {
        class: "v-data-table-footer__info"
      }, [s("div", null, [a(e.pageText, u.value ? o.value + 1 : 0, r.value, u.value)])]), s("div", {
        class: "v-data-table-footer__pagination"
      }, [s(ii, H({
        modelValue: l.value,
        "onUpdate:modelValue": (y) => l.value = y,
        density: "comfortable",
        "first-aria-label": e.firstPageLabel,
        "last-aria-label": e.lastPageLabel,
        length: i.value,
        "next-aria-label": e.nextPageLabel,
        "previous-aria-label": e.prevPageLabel,
        rounded: !0,
        "show-first-last-page": !0,
        "total-visible": e.showCurrentPage ? 1 : 0,
        variant: "plain"
      }, m), null)])]);
    }), {};
  }
}), Ha = Nd({
  align: {
    type: String,
    default: "start"
  },
  fixed: Boolean,
  fixedOffset: [Number, String],
  height: [Number, String],
  lastFixed: Boolean,
  noPadding: Boolean,
  tag: String,
  width: [Number, String],
  maxWidth: [Number, String],
  nowrap: Boolean
}, (e, n) => {
  var l;
  let {
    slots: t
  } = n;
  const a = (l = e.tag) != null ? l : "td";
  return s(a, {
    class: ["v-data-table__td", {
      "v-data-table-column--fixed": e.fixed,
      "v-data-table-column--last-fixed": e.lastFixed,
      "v-data-table-column--no-padding": e.noPadding,
      "v-data-table-column--nowrap": e.nowrap
    }, `v-data-table-column--align-${e.align}`],
    style: {
      height: ee(e.height),
      width: ee(e.width),
      maxWidth: ee(e.maxWidth),
      left: ee(e.fixedOffset || null)
    }
  }, {
    default: () => {
      var i;
      return [(i = t.default) == null ? void 0 : i.call(t)];
    }
  });
}), Zh = M({
  headers: Array
}, "DataTable-header"), Zu = Symbol.for("vuetify:data-table-headers"), Ju = {
  title: "",
  sortable: !1
}, Jh = J(v({}, Ju), {
  width: 48
});
function Qh() {
  const n = (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : []).map((t) => ({
    element: t,
    priority: 0
  }));
  return {
    enqueue: (t, a) => {
      let l = !1;
      for (let i = 0; i < n.length; i++)
        if (n[i].priority > a) {
          n.splice(i, 0, {
            element: t,
            priority: a
          }), l = !0;
          break;
        }
      l || n.push({
        element: t,
        priority: a
      });
    },
    size: () => n.length,
    count: () => {
      let t = 0;
      if (!n.length) return 0;
      const a = Math.floor(n[0].priority);
      for (let l = 0; l < n.length; l++)
        Math.floor(n[l].priority) === a && (t += 1);
      return t;
    },
    dequeue: () => n.shift()
  };
}
function oi(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
  if (!e.children)
    n.push(e);
  else
    for (const t of e.children)
      oi(t, n);
  return n;
}
function Qu(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : /* @__PURE__ */ new Set();
  for (const t of e)
    t.key && n.add(t.key), t.children && Qu(t.children, n);
  return n;
}
function ey(e) {
  if (e.key) {
    if (e.key === "data-table-group") return Ju;
    if (["data-table-expand", "data-table-select"].includes(e.key)) return Jh;
  }
}
function io(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  return e.children ? Math.max(n, ...e.children.map((t) => io(t, n + 1))) : n;
}
function ty(e) {
  let n = !1;
  function t(i) {
    let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    if (i)
      if (o && (i.fixed = !0), i.fixed)
        if (i.children)
          for (let r = i.children.length - 1; r >= 0; r--)
            t(i.children[r], !0);
        else
          n ? isNaN(+i.width) && Jn(`Multiple fixed columns should have a static width (key: ${i.key})`) : i.lastFixed = !0, n = !0;
      else if (i.children)
        for (let r = i.children.length - 1; r >= 0; r--)
          t(i.children[r]);
      else
        n = !1;
  }
  for (let i = e.length - 1; i >= 0; i--)
    t(e[i]);
  function a(i) {
    let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
    if (!i) return o;
    if (i.children) {
      i.fixedOffset = o;
      for (const r of i.children)
        o = a(r, o);
    } else i.fixed && (i.fixedOffset = o, o += parseFloat(i.width || "0") || 0);
    return o;
  }
  let l = 0;
  for (const i of e)
    l = a(i, l);
}
function ny(e, n) {
  const t = [];
  let a = 0;
  const l = Qh(e);
  for (; l.size() > 0; ) {
    let o = l.count();
    const r = [];
    let u = 1;
    for (; o > 0; ) {
      const {
        element: c,
        priority: d
      } = l.dequeue(), f = n - a - io(c);
      if (r.push(J(v({}, c), {
        rowspan: f != null ? f : 1,
        colspan: c.children ? oi(c).length : 1
      })), c.children)
        for (const m of c.children) {
          const g = d % 1 + u / Math.pow(10, a + 2);
          l.enqueue(m, a + f + g);
        }
      u += 1, o -= 1;
    }
    a += 1, t.push(r);
  }
  return {
    columns: e.map((o) => oi(o)).flat(),
    headers: t
  };
}
function ec(e) {
  var t, a, l, i;
  const n = [];
  for (const o of e) {
    const r = v(v({}, ey(o)), o), u = (t = r.key) != null ? t : typeof r.value == "string" ? r.value : null, c = (l = (a = r.value) != null ? a : u) != null ? l : null, d = J(v({}, r), {
      key: u,
      value: c,
      sortable: (i = r.sortable) != null ? i : r.key != null || !!r.sort,
      children: r.children ? ec(r.children) : void 0
    });
    n.push(d);
  }
  return n;
}
function oo(e, n) {
  const t = G([]), a = G([]), l = G({}), i = G({}), o = G({});
  Re(() => {
    var b, h, k, C;
    const c = (e.headers || Object.keys((b = e.items[0]) != null ? b : {}).map((I) => ({
      key: I,
      title: Nn(I)
    }))).slice(), d = Qu(c);
    (h = n == null ? void 0 : n.groupBy) != null && h.value.length && !d.has("data-table-group") && c.unshift({
      key: "data-table-group",
      title: "Group"
    }), (k = n == null ? void 0 : n.showSelect) != null && k.value && !d.has("data-table-select") && c.unshift({
      key: "data-table-select"
    }), (C = n == null ? void 0 : n.showExpand) != null && C.value && !d.has("data-table-expand") && c.push({
      key: "data-table-expand"
    });
    const f = ec(c);
    ty(f);
    const m = Math.max(...f.map((I) => io(I))) + 1, g = ny(f, m);
    t.value = g.headers, a.value = g.columns;
    const y = g.headers.flat(1);
    for (const I of y)
      I.key && (I.sortable && (I.sort && (l.value[I.key] = I.sort), I.sortRaw && (i.value[I.key] = I.sortRaw)), I.filter && (o.value[I.key] = I.filter));
  });
  const r = {
    headers: t,
    columns: a,
    sortFunctions: l,
    sortRawFunctions: i,
    filterFunctions: o
  };
  return Be(Zu, r), r;
}
function Cl() {
  const e = Ce(Zu);
  if (!e) throw new Error("Missing headers!");
  return e;
}
const tc = M(v(v({
  color: String,
  sticky: Boolean,
  disableSort: Boolean,
  multiSort: Boolean,
  sortAscIcon: {
    type: ve,
    default: "$sortAsc"
  },
  sortDescIcon: {
    type: ve,
    default: "$sortDesc"
  },
  headerProps: {
    type: Object
  }
}, yn()), nl()), "VDataTableHeaders"), vn = N()({
  name: "VDataTableHeaders",
  props: tc(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      t: a
    } = $e(), {
      toggleSort: l,
      sortBy: i,
      isSorted: o
    } = Xu(), {
      someSelected: r,
      allSelected: u,
      selectAll: c,
      showSelectAll: d
    } = bl(), {
      columns: f,
      headers: m
    } = Cl(), {
      loaderClasses: g
    } = ca(e);
    function y(w, _) {
      if (!(!e.sticky && !w.fixed))
        return {
          position: "sticky",
          left: w.fixed ? ee(w.fixedOffset) : void 0,
          top: e.sticky ? `calc(var(--v-table-header-height) * ${_})` : void 0
        };
    }
    function b(w) {
      const _ = i.value.find((B) => B.key === w.key);
      return _ ? _.order === "asc" ? e.sortAscIcon : e.sortDescIcon : e.sortAscIcon;
    }
    const {
      backgroundColorClasses: h,
      backgroundColorStyles: k
    } = Le(e, "color"), {
      displayClasses: C,
      mobile: I
    } = ht(e), A = S(() => ({
      headers: m.value,
      columns: f.value,
      toggleSort: l,
      isSorted: o,
      sortBy: i.value,
      someSelected: r.value,
      allSelected: u.value,
      selectAll: c,
      getSortIcon: b
    })), x = S(() => ["v-data-table__th", {
      "v-data-table__th--sticky": e.sticky
    }, C.value, g.value]), P = (w) => {
      var p, R;
      let {
        column: _,
        x: B,
        y: V
      } = w;
      const L = _.key === "data-table-select" || _.key === "data-table-expand", D = H((p = e.headerProps) != null ? p : {}, (R = _.headerProps) != null ? R : {});
      return s(Ha, H({
        tag: "th",
        align: _.align,
        class: [{
          "v-data-table__th--sortable": _.sortable && !e.disableSort,
          "v-data-table__th--sorted": o(_),
          "v-data-table__th--fixed": _.fixed
        }, ...x.value],
        style: v({
          width: ee(_.width),
          minWidth: ee(_.minWidth),
          maxWidth: ee(_.maxWidth)
        }, y(_, V)),
        colspan: _.colspan,
        rowspan: _.rowspan,
        onClick: _.sortable ? () => l(_) : void 0,
        fixed: _.fixed,
        nowrap: _.nowrap,
        lastFixed: _.lastFixed,
        noPadding: L
      }, D), {
        default: () => {
          var K, E;
          const U = `header.${_.key}`, q = {
            column: _,
            selectAll: c,
            isSorted: o,
            toggleSort: l,
            sortBy: i.value,
            someSelected: r.value,
            allSelected: u.value,
            getSortIcon: b
          };
          return t[U] ? t[U](q) : _.key === "data-table-select" ? (E = (K = t["header.data-table-select"]) == null ? void 0 : K.call(t, q)) != null ? E : d.value && s($t, {
            modelValue: u.value,
            indeterminate: r.value && !u.value,
            "onUpdate:modelValue": c
          }, null) : s("div", {
            class: "v-data-table-header__content"
          }, [s("span", null, [_.title]), _.sortable && !e.disableSort && s(Ve, {
            key: "icon",
            class: "v-data-table-header__sort-icon",
            icon: b(_)
          }, null), e.multiSort && o(_) && s("div", {
            key: "badge",
            class: ["v-data-table-header__sort-badge", ...h.value],
            style: k.value
          }, [i.value.findIndex((F) => F.key === _.key) + 1])]);
        }
      });
    }, T = () => {
      var V, L;
      const w = H((L = (V = e.headerProps) != null ? V : {}) != null ? L : {}), _ = S(() => f.value.filter((D) => (D == null ? void 0 : D.sortable) && !e.disableSort)), B = S(() => {
        if (f.value.find((p) => p.key === "data-table-select") != null)
          return u.value ? "$checkboxOn" : r.value ? "$checkboxIndeterminate" : "$checkboxOff";
      });
      return s(Ha, H({
        tag: "th",
        class: [...x.value],
        colspan: m.value.length + 1
      }, w), {
        default: () => [s("div", {
          class: "v-data-table-header__content"
        }, [s(Xi, {
          chips: !0,
          class: "v-data-table__td-sort-select",
          clearable: !0,
          density: "default",
          items: _.value,
          label: a("$vuetify.dataTable.sortBy"),
          multiple: e.multiSort,
          variant: "underlined",
          "onClick:clear": () => i.value = [],
          appendIcon: B.value,
          "onClick:append": () => c(!u.value)
        }, J(v({}, t), {
          chip: (D) => {
            var p;
            return s(Gn, {
              onClick: (p = D.item.raw) != null && p.sortable ? () => l(D.item.raw) : void 0,
              onMousedown: (R) => {
                R.preventDefault(), R.stopPropagation();
              }
            }, {
              default: () => [D.item.title, s(Ve, {
                class: ["v-data-table__td-sort-icon", o(D.item.raw) && "v-data-table__td-sort-icon-active"],
                icon: b(D.item.raw),
                size: "small"
              }, null)]
            });
          }
        }))])]
      });
    };
    z(() => I.value ? s("tr", null, [s(T, null, null)]) : s(re, null, [t.headers ? t.headers(A.value) : m.value.map((w, _) => s("tr", null, [w.map((B, V) => s(P, {
      column: B,
      x: V,
      y: _
    }, null))])), e.loading && s("tr", {
      class: "v-data-table-progress"
    }, [s("th", {
      colspan: f.value.length
    }, [s(da, {
      name: "v-data-table-progress",
      absolute: !0,
      active: !0,
      color: typeof e.loading == "boolean" ? void 0 : e.loading,
      indeterminate: !0
    }, {
      default: t.loader
    })])])]));
  }
}), ay = M({
  item: {
    type: Object,
    required: !0
  }
}, "VDataTableGroupHeaderRow"), ly = N()({
  name: "VDataTableGroupHeaderRow",
  props: ay(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      isGroupOpen: a,
      toggleGroup: l,
      extractRows: i
    } = Ru(), {
      isSelected: o,
      isSomeSelected: r,
      select: u
    } = bl(), {
      columns: c
    } = Cl(), d = S(() => i([e.item]));
    return () => s("tr", {
      class: "v-data-table-group-header-row",
      style: {
        "--v-data-table-group-header-row-depth": e.item.depth
      }
    }, [c.value.map((f) => {
      var m, g, y, b;
      if (f.key === "data-table-group") {
        const h = a(e.item) ? "$expand" : "$next", k = () => l(e.item);
        return (g = (m = t["data-table-group"]) == null ? void 0 : m.call(t, {
          item: e.item,
          count: d.value.length,
          props: {
            icon: h,
            onClick: k
          }
        })) != null ? g : s(Ha, {
          class: "v-data-table-group-header-row__column"
        }, {
          default: () => [s(we, {
            size: "small",
            variant: "text",
            icon: h,
            onClick: k
          }, null), s("span", null, [e.item.value]), s("span", null, [jt("("), d.value.length, jt(")")])]
        });
      }
      if (f.key === "data-table-select") {
        const h = o(d.value), k = r(d.value) && !h, C = (I) => u(d.value, I);
        return (b = (y = t["data-table-select"]) == null ? void 0 : y.call(t, {
          props: {
            modelValue: h,
            indeterminate: k,
            "onUpdate:modelValue": C
          }
        })) != null ? b : s("td", null, [s($t, {
          modelValue: h,
          indeterminate: k,
          "onUpdate:modelValue": C
        }, null)]);
      }
      return s("td", null, null);
    })]);
  }
}), iy = M(v({
  index: Number,
  item: Object,
  cellProps: [Object, Function],
  onClick: Je(),
  onContextmenu: Je(),
  onDblclick: Je()
}, yn()), "VDataTableRow"), ro = N()({
  name: "VDataTableRow",
  props: iy(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      displayClasses: a,
      mobile: l
    } = ht(e, "v-data-table__tr"), {
      isSelected: i,
      toggleSelect: o,
      someSelected: r,
      allSelected: u,
      selectAll: c
    } = bl(), {
      isExpanded: d,
      toggleExpand: f
    } = $u(), {
      toggleSort: m,
      sortBy: g,
      isSorted: y
    } = Xu(), {
      columns: b
    } = Cl();
    z(() => s("tr", {
      class: ["v-data-table__tr", {
        "v-data-table__tr--clickable": !!(e.onClick || e.onContextmenu || e.onDblclick)
      }, a.value],
      onClick: e.onClick,
      onContextmenu: e.onContextmenu,
      onDblclick: e.onDblclick
    }, [e.item && b.value.map((h, k) => {
      const C = e.item, I = `item.${h.key}`, A = `header.${h.key}`, x = {
        index: e.index,
        item: C.raw,
        internalItem: C,
        value: rn(C.columns, h.key),
        column: h,
        isSelected: i,
        toggleSelect: o,
        isExpanded: d,
        toggleExpand: f
      }, P = {
        column: h,
        selectAll: c,
        isSorted: y,
        toggleSort: m,
        sortBy: g.value,
        someSelected: r.value,
        allSelected: u.value,
        getSortIcon: () => ""
      }, T = typeof e.cellProps == "function" ? e.cellProps({
        index: x.index,
        item: x.item,
        internalItem: x.internalItem,
        value: x.value,
        column: h
      }) : e.cellProps, w = typeof h.cellProps == "function" ? h.cellProps({
        index: x.index,
        item: x.item,
        internalItem: x.internalItem,
        value: x.value
      }) : h.cellProps;
      return s(Ha, H({
        align: h.align,
        class: {
          "v-data-table__td--expanded-row": h.key === "data-table-expand",
          "v-data-table__td--select-row": h.key === "data-table-select"
        },
        fixed: h.fixed,
        fixedOffset: h.fixedOffset,
        lastFixed: h.lastFixed,
        maxWidth: l.value ? void 0 : h.maxWidth,
        noPadding: h.key === "data-table-select" || h.key === "data-table-expand",
        nowrap: h.nowrap,
        width: l.value ? void 0 : h.width
      }, T, w), {
        default: () => {
          var B, V, L, D, p, R, U, q, K;
          if (t[I] && !l.value) return (B = t[I]) == null ? void 0 : B.call(t, x);
          if (h.key === "data-table-select")
            return (L = (V = t["item.data-table-select"]) == null ? void 0 : V.call(t, x)) != null ? L : s($t, {
              disabled: !C.selectable,
              modelValue: i([C]),
              onClick: So(() => o(C), ["stop"])
            }, null);
          if (h.key === "data-table-expand")
            return (p = (D = t["item.data-table-expand"]) == null ? void 0 : D.call(t, x)) != null ? p : s(we, {
              icon: d(C) ? "$collapse" : "$expand",
              size: "small",
              variant: "text",
              onClick: So(() => f(C), ["stop"])
            }, null);
          const _ = Qc(x.value);
          return l.value ? s(re, null, [s("div", {
            class: "v-data-table__td-title"
          }, [(U = (R = t[A]) == null ? void 0 : R.call(t, P)) != null ? U : h.title]), s("div", {
            class: "v-data-table__td-value"
          }, [(K = (q = t[I]) == null ? void 0 : q.call(t, x)) != null ? K : _])]) : _;
        }
      });
    })]));
  }
}), nc = M(v({
  loading: [Boolean, String],
  loadingText: {
    type: String,
    default: "$vuetify.dataIterator.loadingText"
  },
  hideNoData: Boolean,
  items: {
    type: Array,
    default: () => []
  },
  noDataText: {
    type: String,
    default: "$vuetify.noDataText"
  },
  rowProps: [Object, Function],
  cellProps: [Object, Function]
}, yn()), "VDataTableRows"), fn = N()({
  name: "VDataTableRows",
  inheritAttrs: !1,
  props: nc(),
  setup(e, n) {
    let {
      attrs: t,
      slots: a
    } = n;
    const {
      columns: l
    } = Cl(), {
      expandOnClick: i,
      toggleExpand: o,
      isExpanded: r
    } = $u(), {
      isSelected: u,
      toggleSelect: c
    } = bl(), {
      toggleGroup: d,
      isGroupOpen: f
    } = Ru(), {
      t: m
    } = $e(), {
      mobile: g
    } = ht(e);
    return z(() => {
      var y, b, h, k;
      return e.loading && (!e.items.length || a.loading) ? s("tr", {
        class: "v-data-table-rows-loading",
        key: "loading"
      }, [s("td", {
        colspan: l.value.length
      }, [(b = (y = a.loading) == null ? void 0 : y.call(a)) != null ? b : m(e.loadingText)])]) : !e.loading && !e.items.length && !e.hideNoData ? s("tr", {
        class: "v-data-table-rows-no-data",
        key: "no-data"
      }, [s("td", {
        colspan: l.value.length
      }, [(k = (h = a["no-data"]) == null ? void 0 : h.call(a)) != null ? k : m(e.noDataText)])]) : s(re, null, [e.items.map((C, I) => {
        var P, T;
        if (C.type === "group") {
          const w = {
            index: I,
            item: C,
            columns: l.value,
            isExpanded: r,
            toggleExpand: o,
            isSelected: u,
            toggleSelect: c,
            toggleGroup: d,
            isGroupOpen: f
          };
          return a["group-header"] ? a["group-header"](w) : s(ly, H({
            key: `group-header_${C.id}`,
            item: C
          }, zo(t, ":group-header", () => w)), a);
        }
        const A = {
          index: I,
          item: C.raw,
          internalItem: C,
          columns: l.value,
          isExpanded: r,
          toggleExpand: o,
          isSelected: u,
          toggleSelect: c
        }, x = J(v({}, A), {
          props: H({
            key: `item_${(P = C.key) != null ? P : C.index}`,
            onClick: i.value ? () => {
              o(C);
            } : void 0,
            index: I,
            item: C,
            cellProps: e.cellProps,
            mobile: g.value
          }, zo(t, ":row", () => A), typeof e.rowProps == "function" ? e.rowProps({
            item: A.item,
            index: A.index,
            internalItem: A.internalItem
          }) : e.rowProps)
        });
        return s(re, {
          key: x.props.key
        }, [a.item ? a.item(x) : s(ro, x.props, a), r(C) && ((T = a["expanded-row"]) == null ? void 0 : T.call(a, A))]);
      })]);
    }), {};
  }
}), ac = M(v(v(v(v({
  fixedHeader: Boolean,
  fixedFooter: Boolean,
  height: [Number, String],
  hover: Boolean
}, te()), Ze()), me()), Se()), "VTable"), mn = N()({
  name: "VTable",
  props: ac(),
  setup(e, n) {
    let {
      slots: t,
      emit: a
    } = n;
    const {
      themeClasses: l
    } = Pe(e), {
      densityClasses: i
    } = st(e);
    return z(() => s(e.tag, {
      class: ["v-table", {
        "v-table--fixed-height": !!e.height,
        "v-table--fixed-header": e.fixedHeader,
        "v-table--fixed-footer": e.fixedFooter,
        "v-table--has-top": !!t.top,
        "v-table--has-bottom": !!t.bottom,
        "v-table--hover": e.hover
      }, l.value, i.value, e.class],
      style: e.style
    }, {
      default: () => {
        var o, r, u;
        return [(o = t.top) == null ? void 0 : o.call(t), t.default ? s("div", {
          class: "v-table__wrapper",
          style: {
            height: ee(e.height)
          }
        }, [s("table", null, [t.default()])]) : (r = t.wrapper) == null ? void 0 : r.call(t), (u = t.bottom) == null ? void 0 : u.call(t)];
      }
    })), {};
  }
}), oy = M({
  items: {
    type: Array,
    default: () => []
  },
  itemValue: {
    type: [String, Array, Function],
    default: "id"
  },
  itemSelectable: {
    type: [String, Array, Function],
    default: null
  },
  rowProps: [Object, Function],
  cellProps: [Object, Function],
  returnObject: Boolean
}, "DataTable-items");
function ry(e, n, t, a) {
  const l = e.returnObject ? n : qe(n, e.itemValue), i = qe(n, e.itemSelectable, !0), o = a.reduce((r, u) => (u.key != null && (r[u.key] = qe(n, u.value)), r), {});
  return {
    type: "item",
    key: e.returnObject ? qe(n, e.itemValue) : l,
    index: t,
    value: l,
    selectable: i,
    columns: o,
    raw: n
  };
}
function sy(e, n, t) {
  return n.map((a, l) => ry(e, a, l, t));
}
function so(e, n) {
  return {
    items: S(() => sy(e, e.items, n.value))
  };
}
const uo = M(v(v(v(v(v(v(v(v(J(v({}, nc()), {
  hideDefaultBody: Boolean,
  hideDefaultFooter: Boolean,
  hideDefaultHeader: Boolean,
  width: [String, Number],
  search: String
}), Eu()), Ji()), Zh()), oy()), Gu()), Ku()), tc()), ac()), "DataTable"), uy = M(v(v(v(v({}, eo()), uo()), ba()), lo()), "VDataTable"), cy = N()({
  name: "VDataTable",
  props: uy(),
  emits: {
    "update:modelValue": (e) => !0,
    "update:page": (e) => !0,
    "update:itemsPerPage": (e) => !0,
    "update:sortBy": (e) => !0,
    "update:options": (e) => !0,
    "update:groupBy": (e) => !0,
    "update:expanded": (e) => !0,
    "update:currentItems": (e) => !0
  },
  setup(e, n) {
    let {
      attrs: t,
      slots: a
    } = n;
    const {
      groupBy: l
    } = Qi(e), {
      sortBy: i,
      multiSort: o,
      mustSort: r
    } = Sl(e), {
      page: u,
      itemsPerPage: c
    } = to(e), {
      disableSort: d
    } = gn(e), {
      columns: f,
      headers: m,
      sortFunctions: g,
      sortRawFunctions: y,
      filterFunctions: b
    } = oo(e, {
      groupBy: l,
      showSelect: $(e, "showSelect"),
      showExpand: $(e, "showExpand")
    }), {
      items: h
    } = so(e, f), k = $(e, "search"), {
      filteredItems: C
    } = Sa(e, h, k, {
      transform: (ae) => ae.columns,
      customKeyFilter: b
    }), {
      toggleSort: I
    } = kl({
      sortBy: i,
      multiSort: o,
      mustSort: r,
      page: u
    }), {
      sortByWithGroups: A,
      opened: x,
      extractRows: P,
      isGroupOpen: T,
      toggleGroup: w
    } = ml({
      groupBy: l,
      sortBy: i,
      disableSort: d
    }), {
      sortedItems: _
    } = ao(e, C, A, {
      transform: (ae) => v(v({}, ae.raw), ae.columns),
      sortFunctions: g,
      sortRawFunctions: y
    }), {
      flatItems: B
    } = gl(_, l, x), V = S(() => B.value.length), {
      startIndex: L,
      stopIndex: D,
      pageCount: p,
      setItemsPerPage: R
    } = no({
      page: u,
      itemsPerPage: c,
      itemsLength: V
    }), {
      paginatedItems: U
    } = Wu({
      items: B,
      startIndex: L,
      stopIndex: D,
      itemsPerPage: c
    }), q = S(() => P(U.value)), {
      isSelected: K,
      select: E,
      selectAll: F,
      toggleSelect: O,
      someSelected: Y,
      allSelected: ie
    } = yl(e, {
      allItems: h,
      currentPage: q
    }), {
      isExpanded: ne,
      toggleExpand: ue
    } = fl(e);
    hl({
      page: u,
      itemsPerPage: c,
      sortBy: i,
      groupBy: l,
      search: k
    }), Ee({
      VDataTableRows: {
        hideNoData: $(e, "hideNoData"),
        noDataText: $(e, "noDataText"),
        loading: $(e, "loading"),
        loadingText: $(e, "loadingText")
      }
    });
    const W = S(() => ({
      page: u.value,
      itemsPerPage: c.value,
      sortBy: i.value,
      pageCount: p.value,
      toggleSort: I,
      setItemsPerPage: R,
      someSelected: Y.value,
      allSelected: ie.value,
      isSelected: K,
      select: E,
      selectAll: F,
      toggleSelect: O,
      isExpanded: ne,
      toggleExpand: ue,
      isGroupOpen: T,
      toggleGroup: w,
      items: q.value.map((ae) => ae.raw),
      internalItems: q.value,
      groupedItems: U.value,
      columns: f.value,
      headers: m.value
    }));
    return z(() => {
      const ae = sa.filterProps(e), se = vn.filterProps(e), ye = fn.filterProps(e), ce = mn.filterProps(e);
      return s(mn, H({
        class: ["v-data-table", {
          "v-data-table--show-select": e.showSelect,
          "v-data-table--loading": e.loading
        }, e.class],
        style: e.style
      }, ce), {
        top: () => {
          var X;
          return (X = a.top) == null ? void 0 : X.call(a, W.value);
        },
        default: () => {
          var X, ge, ke, j, le, fe;
          return a.default ? a.default(W.value) : s(re, null, [(X = a.colgroup) == null ? void 0 : X.call(a, W.value), !e.hideDefaultHeader && s("thead", {
            key: "thead"
          }, [s(vn, se, a)]), (ge = a.thead) == null ? void 0 : ge.call(a, W.value), !e.hideDefaultBody && s("tbody", null, [(ke = a["body.prepend"]) == null ? void 0 : ke.call(a, W.value), a.body ? a.body(W.value) : s(fn, H(t, ye, {
            items: U.value
          }), a), (j = a["body.append"]) == null ? void 0 : j.call(a, W.value)]), (le = a.tbody) == null ? void 0 : le.call(a, W.value), (fe = a.tfoot) == null ? void 0 : fe.call(a, W.value)]);
        },
        bottom: () => a.bottom ? a.bottom(W.value) : !e.hideDefaultFooter && s(re, null, [s(ga, null, null), s(sa, ae, {
          prepend: a["footer.prepend"]
        })])
      });
    }), {};
  }
}), dy = M(v(v(v(v({}, uo()), Ji()), gu()), ba()), "VDataTableVirtual"), vy = N()({
  name: "VDataTableVirtual",
  props: dy(),
  emits: {
    "update:modelValue": (e) => !0,
    "update:sortBy": (e) => !0,
    "update:options": (e) => !0,
    "update:groupBy": (e) => !0,
    "update:expanded": (e) => !0
  },
  setup(e, n) {
    let {
      attrs: t,
      slots: a
    } = n;
    const {
      groupBy: l
    } = Qi(e), {
      sortBy: i,
      multiSort: o,
      mustSort: r
    } = Sl(e), {
      disableSort: u
    } = gn(e), {
      columns: c,
      headers: d,
      filterFunctions: f,
      sortFunctions: m,
      sortRawFunctions: g
    } = oo(e, {
      groupBy: l,
      showSelect: $(e, "showSelect"),
      showExpand: $(e, "showExpand")
    }), {
      items: y
    } = so(e, c), b = $(e, "search"), {
      filteredItems: h
    } = Sa(e, y, b, {
      transform: (se) => se.columns,
      customKeyFilter: f
    }), {
      toggleSort: k
    } = kl({
      sortBy: i,
      multiSort: o,
      mustSort: r
    }), {
      sortByWithGroups: C,
      opened: I,
      extractRows: A,
      isGroupOpen: x,
      toggleGroup: P
    } = ml({
      groupBy: l,
      sortBy: i,
      disableSort: u
    }), {
      sortedItems: T
    } = ao(e, h, C, {
      transform: (se) => v(v({}, se.raw), se.columns),
      sortFunctions: m,
      sortRawFunctions: g
    }), {
      flatItems: w
    } = gl(T, l, I), _ = S(() => A(w.value)), {
      isSelected: B,
      select: V,
      selectAll: L,
      toggleSelect: D,
      someSelected: p,
      allSelected: R
    } = yl(e, {
      allItems: _,
      currentPage: _
    }), {
      isExpanded: U,
      toggleExpand: q
    } = fl(e), {
      containerRef: K,
      markerRef: E,
      paddingTop: F,
      paddingBottom: O,
      computedItems: Y,
      handleItemResize: ie,
      handleScroll: ne,
      handleScrollend: ue
    } = hu(e, w), W = S(() => Y.value.map((se) => se.raw));
    hl({
      sortBy: i,
      page: Z(1),
      itemsPerPage: Z(-1),
      groupBy: l,
      search: b
    }), Ee({
      VDataTableRows: {
        hideNoData: $(e, "hideNoData"),
        noDataText: $(e, "noDataText"),
        loading: $(e, "loading"),
        loadingText: $(e, "loadingText")
      }
    });
    const ae = S(() => ({
      sortBy: i.value,
      toggleSort: k,
      someSelected: p.value,
      allSelected: R.value,
      isSelected: B,
      select: V,
      selectAll: L,
      toggleSelect: D,
      isExpanded: U,
      toggleExpand: q,
      isGroupOpen: x,
      toggleGroup: P,
      items: _.value.map((se) => se.raw),
      internalItems: _.value,
      groupedItems: w.value,
      columns: c.value,
      headers: d.value
    }));
    z(() => {
      const se = vn.filterProps(e), ye = fn.filterProps(e), ce = mn.filterProps(e);
      return s(mn, H({
        class: ["v-data-table", {
          "v-data-table--loading": e.loading
        }, e.class],
        style: e.style
      }, ce), {
        top: () => {
          var X;
          return (X = a.top) == null ? void 0 : X.call(a, ae.value);
        },
        wrapper: () => {
          var X, ge, ke;
          return s("div", {
            ref: K,
            onScrollPassive: ne,
            onScrollend: ue,
            class: "v-table__wrapper",
            style: {
              height: ee(e.height)
            }
          }, [s("table", null, [(X = a.colgroup) == null ? void 0 : X.call(a, ae.value), !e.hideDefaultHeader && s("thead", {
            key: "thead"
          }, [s(vn, H(se, {
            sticky: e.fixedHeader
          }), a)]), !e.hideDefaultBody && s("tbody", null, [s("tr", {
            ref: E,
            style: {
              height: ee(F.value),
              border: 0
            }
          }, [s("td", {
            colspan: c.value.length,
            style: {
              height: 0,
              border: 0
            }
          }, null)]), (ge = a["body.prepend"]) == null ? void 0 : ge.call(a, ae.value), s(fn, H(t, ye, {
            items: W.value
          }), J(v({}, a), {
            item: (j) => s(mu, {
              key: j.internalItem.index,
              renderless: !0,
              "onUpdate:height": (le) => ie(j.internalItem.index, le)
            }, {
              default: (le) => {
                var de, be;
                let {
                  itemRef: fe
                } = le;
                return (be = (de = a.item) == null ? void 0 : de.call(a, J(v({}, j), {
                  itemRef: fe
                }))) != null ? be : s(ro, H(j.props, {
                  ref: fe,
                  key: j.internalItem.index,
                  index: j.internalItem.index
                }), a);
              }
            })
          })), (ke = a["body.append"]) == null ? void 0 : ke.call(a, ae.value), s("tr", {
            style: {
              height: ee(O.value),
              border: 0
            }
          }, [s("td", {
            colspan: c.value.length,
            style: {
              height: 0,
              border: 0
            }
          }, null)])])])]);
        },
        bottom: () => {
          var X;
          return (X = a.bottom) == null ? void 0 : X.call(a, ae.value);
        }
      });
    });
  }
}), fy = M(v(v(v({
  itemsLength: {
    type: [Number, String],
    required: !0
  }
}, eo()), uo()), lo()), "VDataTableServer"), my = N()({
  name: "VDataTableServer",
  props: fy(),
  emits: {
    "update:modelValue": (e) => !0,
    "update:page": (e) => !0,
    "update:itemsPerPage": (e) => !0,
    "update:sortBy": (e) => !0,
    "update:options": (e) => !0,
    "update:expanded": (e) => !0,
    "update:groupBy": (e) => !0
  },
  setup(e, n) {
    let {
      attrs: t,
      slots: a
    } = n;
    const {
      groupBy: l
    } = Qi(e), {
      sortBy: i,
      multiSort: o,
      mustSort: r
    } = Sl(e), {
      page: u,
      itemsPerPage: c
    } = to(e), {
      disableSort: d
    } = gn(e), f = S(() => parseInt(e.itemsLength, 10)), {
      columns: m,
      headers: g
    } = oo(e, {
      groupBy: l,
      showSelect: $(e, "showSelect"),
      showExpand: $(e, "showExpand")
    }), {
      items: y
    } = so(e, m), {
      toggleSort: b
    } = kl({
      sortBy: i,
      multiSort: o,
      mustSort: r,
      page: u
    }), {
      opened: h,
      isGroupOpen: k,
      toggleGroup: C,
      extractRows: I
    } = ml({
      groupBy: l,
      sortBy: i,
      disableSort: d
    }), {
      pageCount: A,
      setItemsPerPage: x
    } = no({
      page: u,
      itemsPerPage: c,
      itemsLength: f
    }), {
      flatItems: P
    } = gl(y, l, h), {
      isSelected: T,
      select: w,
      selectAll: _,
      toggleSelect: B,
      someSelected: V,
      allSelected: L
    } = yl(e, {
      allItems: y,
      currentPage: y
    }), {
      isExpanded: D,
      toggleExpand: p
    } = fl(e), R = S(() => I(y.value));
    hl({
      page: u,
      itemsPerPage: c,
      sortBy: i,
      groupBy: l,
      search: $(e, "search")
    }), Be("v-data-table", {
      toggleSort: b,
      sortBy: i
    }), Ee({
      VDataTableRows: {
        hideNoData: $(e, "hideNoData"),
        noDataText: $(e, "noDataText"),
        loading: $(e, "loading"),
        loadingText: $(e, "loadingText")
      }
    });
    const U = S(() => ({
      page: u.value,
      itemsPerPage: c.value,
      sortBy: i.value,
      pageCount: A.value,
      toggleSort: b,
      setItemsPerPage: x,
      someSelected: V.value,
      allSelected: L.value,
      isSelected: T,
      select: w,
      selectAll: _,
      toggleSelect: B,
      isExpanded: D,
      toggleExpand: p,
      isGroupOpen: k,
      toggleGroup: C,
      items: R.value.map((q) => q.raw),
      internalItems: R.value,
      groupedItems: P.value,
      columns: m.value,
      headers: g.value
    }));
    z(() => {
      const q = sa.filterProps(e), K = vn.filterProps(e), E = fn.filterProps(e), F = mn.filterProps(e);
      return s(mn, H({
        class: ["v-data-table", {
          "v-data-table--loading": e.loading
        }, e.class],
        style: e.style
      }, F), {
        top: () => {
          var O;
          return (O = a.top) == null ? void 0 : O.call(a, U.value);
        },
        default: () => {
          var O, Y, ie, ne, ue, W;
          return a.default ? a.default(U.value) : s(re, null, [(O = a.colgroup) == null ? void 0 : O.call(a, U.value), !e.hideDefaultHeader && s("thead", {
            key: "thead",
            class: "v-data-table__thead",
            role: "rowgroup"
          }, [s(vn, H(K, {
            sticky: e.fixedHeader
          }), a)]), (Y = a.thead) == null ? void 0 : Y.call(a, U.value), !e.hideDefaultBody && s("tbody", {
            class: "v-data-table__tbody",
            role: "rowgroup"
          }, [(ie = a["body.prepend"]) == null ? void 0 : ie.call(a, U.value), a.body ? a.body(U.value) : s(fn, H(t, E, {
            items: P.value
          }), a), (ne = a["body.append"]) == null ? void 0 : ne.call(a, U.value)]), (ue = a.tbody) == null ? void 0 : ue.call(a, U.value), (W = a.tfoot) == null ? void 0 : W.call(a, U.value)]);
        },
        bottom: () => a.bottom ? a.bottom(U.value) : !e.hideDefaultFooter && s(re, null, [s(ga, null, null), s(sa, q, {
          prepend: a["footer.prepend"]
        })])
      });
    });
  }
}), gy = M(v(v(v({
  fluid: {
    type: Boolean,
    default: !1
  }
}, te()), Ye()), me()), "VContainer"), hy = N()({
  name: "VContainer",
  props: gy(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      rtlClasses: a
    } = je(), {
      dimensionStyles: l
    } = Ge(e);
    return z(() => s(e.tag, {
      class: ["v-container", {
        "v-container--fluid": e.fluid
      }, a.value, e.class],
      style: [l.value, e.style]
    }, t)), {};
  }
}), lc = Ka.reduce((e, n) => (e[n] = {
  type: [Boolean, String, Number],
  default: !1
}, e), {}), ic = Ka.reduce((e, n) => {
  const t = "offset" + Nn(n);
  return e[t] = {
    type: [String, Number],
    default: null
  }, e;
}, {}), oc = Ka.reduce((e, n) => {
  const t = "order" + Nn(n);
  return e[t] = {
    type: [String, Number],
    default: null
  }, e;
}, {}), fr = {
  col: Object.keys(lc),
  offset: Object.keys(ic),
  order: Object.keys(oc)
};
function yy(e, n, t) {
  let a = e;
  if (!(t == null || t === !1)) {
    if (n) {
      const l = n.replace(e, "");
      a += `-${l}`;
    }
    return e === "col" && (a = "v-" + a), e === "col" && (t === "" || t === !0) || (a += `-${t}`), a.toLowerCase();
  }
}
const by = ["auto", "start", "end", "center", "baseline", "stretch"], Sy = M(v(v(J(v(J(v(J(v({
  cols: {
    type: [Boolean, String, Number],
    default: !1
  }
}, lc), {
  offset: {
    type: [String, Number],
    default: null
  }
}), ic), {
  order: {
    type: [String, Number],
    default: null
  }
}), oc), {
  alignSelf: {
    type: String,
    default: null,
    validator: (e) => by.includes(e)
  }
}), te()), me()), "VCol"), ky = N()({
  name: "VCol",
  props: Sy(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = S(() => {
      const l = [];
      let i;
      for (i in fr)
        fr[i].forEach((r) => {
          const u = e[r], c = yy(i, r, u);
          c && l.push(c);
        });
      const o = l.some((r) => r.startsWith("v-col-"));
      return l.push({
        // Default to .v-col if no other col-{bp}-* classes generated nor `cols` specified.
        "v-col": !o || !e.cols,
        [`v-col-${e.cols}`]: e.cols,
        [`offset-${e.offset}`]: e.offset,
        [`order-${e.order}`]: e.order,
        [`align-self-${e.alignSelf}`]: e.alignSelf
      }), l;
    });
    return () => {
      var l;
      return hn(e.tag, {
        class: [a.value, e.class],
        style: e.style
      }, (l = t.default) == null ? void 0 : l.call(t));
    };
  }
}), co = ["start", "end", "center"], rc = ["space-between", "space-around", "space-evenly"];
function vo(e, n) {
  return Ka.reduce((t, a) => {
    const l = e + Nn(a);
    return t[l] = n(), t;
  }, {});
}
const Cy = [...co, "baseline", "stretch"], sc = (e) => Cy.includes(e), uc = vo("align", () => ({
  type: String,
  default: null,
  validator: sc
})), xy = [...co, ...rc], cc = (e) => xy.includes(e), dc = vo("justify", () => ({
  type: String,
  default: null,
  validator: cc
})), wy = [...co, ...rc, "stretch"], vc = (e) => wy.includes(e), fc = vo("alignContent", () => ({
  type: String,
  default: null,
  validator: vc
})), mr = {
  align: Object.keys(uc),
  justify: Object.keys(dc),
  alignContent: Object.keys(fc)
}, Vy = {
  align: "align",
  justify: "justify",
  alignContent: "align-content"
};
function Py(e, n, t) {
  let a = Vy[e];
  if (t != null) {
    if (n) {
      const l = n.replace(e, "");
      a += `-${l}`;
    }
    return a += `-${t}`, a.toLowerCase();
  }
}
const Iy = M(v(v(v(J(v(J(v({
  dense: Boolean,
  noGutters: Boolean,
  align: {
    type: String,
    default: null,
    validator: sc
  }
}, uc), {
  justify: {
    type: String,
    default: null,
    validator: cc
  }
}), dc), {
  alignContent: {
    type: String,
    default: null,
    validator: vc
  }
}), fc), te()), me()), "VRow"), _y = N()({
  name: "VRow",
  props: Iy(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = S(() => {
      const l = [];
      let i;
      for (i in mr)
        mr[i].forEach((o) => {
          const r = e[o], u = Py(i, o, r);
          u && l.push(u);
        });
      return l.push({
        "v-row--no-gutters": e.noGutters,
        "v-row--dense": e.dense,
        [`align-${e.align}`]: e.align,
        [`justify-${e.justify}`]: e.justify,
        [`align-content-${e.alignContent}`]: e.alignContent
      }), l;
    });
    return () => {
      var l;
      return hn(e.tag, {
        class: ["v-row", a.value, e.class],
        style: e.style
      }, (l = t.default) == null ? void 0 : l.call(t));
    };
  }
}), mc = Bt("v-spacer", "div", "VSpacer"), gc = M({
  active: {
    type: [String, Array],
    default: void 0
  },
  disabled: {
    type: [Boolean, String, Array],
    default: !1
  },
  nextIcon: {
    type: ve,
    default: "$next"
  },
  prevIcon: {
    type: ve,
    default: "$prev"
  },
  modeIcon: {
    type: ve,
    default: "$subgroup"
  },
  text: String,
  viewMode: {
    type: String,
    default: "month"
  }
}, "VDatePickerControls"), ri = N()({
  name: "VDatePickerControls",
  props: gc(),
  emits: {
    "click:year": () => !0,
    "click:month": () => !0,
    "click:prev": () => !0,
    "click:next": () => !0,
    "click:text": () => !0
  },
  setup(e, n) {
    let {
      emit: t
    } = n;
    const a = S(() => Array.isArray(e.disabled) ? e.disabled.includes("text") : !!e.disabled), l = S(() => Array.isArray(e.disabled) ? e.disabled.includes("mode") : !!e.disabled), i = S(() => Array.isArray(e.disabled) ? e.disabled.includes("prev") : !!e.disabled), o = S(() => Array.isArray(e.disabled) ? e.disabled.includes("next") : !!e.disabled);
    function r() {
      t("click:prev");
    }
    function u() {
      t("click:next");
    }
    function c() {
      t("click:year");
    }
    function d() {
      t("click:month");
    }
    return z(() => s("div", {
      class: ["v-date-picker-controls"]
    }, [s(we, {
      class: "v-date-picker-controls__month-btn",
      disabled: a.value,
      text: e.text,
      variant: "text",
      rounded: !0,
      onClick: d
    }, null), s(we, {
      key: "mode-btn",
      class: "v-date-picker-controls__mode-btn",
      disabled: l.value,
      density: "comfortable",
      icon: e.modeIcon,
      variant: "text",
      onClick: c
    }, null), s(mc, {
      key: "mode-spacer"
    }, null), s("div", {
      key: "month-buttons",
      class: "v-date-picker-controls__month"
    }, [s(we, {
      disabled: i.value,
      icon: e.prevIcon,
      variant: "text",
      onClick: r
    }, null), s(we, {
      disabled: o.value,
      icon: e.nextIcon,
      variant: "text",
      onClick: u
    }, null)])])), {};
  }
}), Ay = M({
  appendIcon: String,
  color: String,
  header: String,
  transition: String,
  onClick: Je()
}, "VDatePickerHeader"), si = N()({
  name: "VDatePickerHeader",
  props: Ay(),
  emits: {
    click: () => !0,
    "click:append": () => !0
  },
  setup(e, n) {
    let {
      emit: t,
      slots: a
    } = n;
    const {
      backgroundColorClasses: l,
      backgroundColorStyles: i
    } = Le(e, "color");
    function o() {
      t("click");
    }
    function r() {
      t("click:append");
    }
    return z(() => {
      const u = !!(a.default || e.header), c = !!(a.append || e.appendIcon);
      return s("div", {
        class: ["v-date-picker-header", {
          "v-date-picker-header--clickable": !!e.onClick
        }, l.value],
        style: i.value,
        onClick: o
      }, [a.prepend && s("div", {
        key: "prepend",
        class: "v-date-picker-header__prepend"
      }, [a.prepend()]), u && s(lt, {
        key: "content",
        name: e.transition
      }, {
        default: () => {
          var d, f;
          return [s("div", {
            key: e.header,
            class: "v-date-picker-header__content"
          }, [(f = (d = a.default) == null ? void 0 : d.call(a)) != null ? f : e.header])];
        }
      }), c && s("div", {
        class: "v-date-picker-header__append"
      }, [a.append ? s(he, {
        key: "append-defaults",
        disabled: !e.appendIcon,
        defaults: {
          VBtn: {
            icon: e.appendIcon,
            variant: "text"
          }
        }
      }, {
        default: () => {
          var d;
          return [(d = a.append) == null ? void 0 : d.call(a)];
        }
      }) : s(we, {
        key: "append-btn",
        icon: e.appendIcon,
        variant: "text",
        onClick: r
      }, null)])]);
    }), {};
  }
}), Ly = M({
  allowedDates: [Array, Function],
  disabled: Boolean,
  displayValue: null,
  modelValue: Array,
  month: [Number, String],
  max: null,
  min: null,
  showAdjacentMonths: Boolean,
  year: [Number, String],
  weekdays: {
    type: Array,
    default: () => [0, 1, 2, 3, 4, 5, 6]
  },
  weeksInMonth: {
    type: String,
    default: "dynamic"
  },
  firstDayOfWeek: [Number, String]
}, "calendar");
function Ty(e) {
  const n = Hn(), t = oe(e, "modelValue", [], (g) => Me(g)), a = S(() => e.displayValue ? n.date(e.displayValue) : t.value.length > 0 ? n.date(t.value[0]) : e.min ? n.date(e.min) : Array.isArray(e.allowedDates) ? n.date(e.allowedDates[0]) : n.date()), l = oe(e, "year", void 0, (g) => {
    const y = g != null ? Number(g) : n.getYear(a.value);
    return n.startOfYear(n.setYear(n.date(), y));
  }, (g) => n.getYear(g)), i = oe(e, "month", void 0, (g) => {
    const y = g != null ? Number(g) : n.getMonth(a.value), b = n.setYear(n.startOfMonth(n.date()), n.getYear(l.value));
    return n.setMonth(b, y);
  }, (g) => n.getMonth(g)), o = S(() => {
    var y;
    const g = Number((y = e.firstDayOfWeek) != null ? y : 0);
    return e.weekdays.map((b) => (b + g) % 7);
  }), r = S(() => {
    const g = n.getWeekArray(i.value, e.firstDayOfWeek), y = g.flat(), b = 6 * 7;
    if (e.weeksInMonth === "static" && y.length < b) {
      const h = y[y.length - 1];
      let k = [];
      for (let C = 1; C <= b - y.length; C++)
        k.push(n.addDays(h, C)), C % 7 === 0 && (g.push(k), k = []);
    }
    return g;
  });
  function u(g, y) {
    return g.filter((b) => o.value.includes(n.toJsDate(b).getDay())).map((b, h) => {
      const k = n.toISO(b), C = !n.isSameMonth(b, i.value), I = n.isSameDay(b, n.startOfMonth(i.value)), A = n.isSameDay(b, n.endOfMonth(i.value)), x = n.isSameDay(b, i.value);
      return {
        date: b,
        isoDate: k,
        formatted: n.format(b, "keyboardDate"),
        year: n.getYear(b),
        month: n.getMonth(b),
        isDisabled: m(b),
        isWeekStart: h % 7 === 0,
        isWeekEnd: h % 7 === 6,
        isToday: n.isSameDay(b, y),
        isAdjacent: C,
        isHidden: C && !e.showAdjacentMonths,
        isStart: I,
        isSelected: t.value.some((P) => n.isSameDay(b, P)),
        isEnd: A,
        isSame: x,
        localized: n.format(b, "dayOfMonth")
      };
    });
  }
  const c = S(() => {
    const g = n.startOfWeek(a.value, e.firstDayOfWeek), y = [];
    for (let h = 0; h <= 6; h++)
      y.push(n.addDays(g, h));
    const b = n.date();
    return u(y, b);
  }), d = S(() => {
    const g = r.value.flat(), y = n.date();
    return u(g, y);
  }), f = S(() => r.value.map((g) => g.length ? Ov(n, g[0]) : null));
  function m(g) {
    if (e.disabled) return !0;
    const y = n.date(g);
    return e.min && n.isAfter(n.date(e.min), y) || e.max && n.isAfter(y, n.date(e.max)) ? !0 : Array.isArray(e.allowedDates) && e.allowedDates.length > 0 ? !e.allowedDates.some((b) => n.isSameDay(n.date(b), y)) : typeof e.allowedDates == "function" ? !e.allowedDates(y) : !1;
  }
  return {
    displayValue: a,
    daysInMonth: d,
    daysInWeek: c,
    genDays: u,
    model: t,
    weeksInMonth: r,
    weekDays: o,
    weekNumbers: f
  };
}
const hc = M(v({
  color: String,
  hideWeekdays: Boolean,
  multiple: [Boolean, Number, String],
  showWeek: Boolean,
  transition: {
    type: String,
    default: "picker-transition"
  },
  reverseTransition: {
    type: String,
    default: "picker-reverse-transition"
  }
}, Ly()), "VDatePickerMonth"), ui = N()({
  name: "VDatePickerMonth",
  props: hc(),
  emits: {
    "update:modelValue": (e) => !0,
    "update:month": (e) => !0,
    "update:year": (e) => !0
  },
  setup(e, n) {
    let {
      emit: t,
      slots: a
    } = n;
    const l = G(), {
      daysInMonth: i,
      model: o,
      weekNumbers: r
    } = Ty(e), u = Hn(), c = Z(), d = Z(), f = Z(!1), m = S(() => f.value ? e.reverseTransition : e.transition);
    e.multiple === "range" && o.value.length > 0 && (c.value = o.value[0], o.value.length > 1 && (d.value = o.value[o.value.length - 1]));
    const g = S(() => {
      const k = ["number", "string"].includes(typeof e.multiple) ? Number(e.multiple) : 1 / 0;
      return o.value.length >= k;
    });
    Q(i, (k, C) => {
      C && (f.value = u.isBefore(k[0].date, C[0].date));
    });
    function y(k) {
      const C = u.startOfDay(k);
      if (o.value.length === 0 ? c.value = void 0 : o.value.length === 1 && (c.value = o.value[0], d.value = void 0), !c.value)
        c.value = C, o.value = [c.value];
      else if (d.value)
        c.value = k, d.value = void 0, o.value = [c.value];
      else {
        if (u.isSameDay(C, c.value)) {
          c.value = void 0, o.value = [];
          return;
        } else u.isBefore(C, c.value) ? (d.value = u.endOfDay(c.value), c.value = C) : d.value = u.endOfDay(C);
        const I = u.getDiff(d.value, c.value, "days"), A = [c.value];
        for (let x = 1; x < I; x++) {
          const P = u.addDays(c.value, x);
          A.push(P);
        }
        A.push(d.value), o.value = A;
      }
    }
    function b(k) {
      const C = o.value.findIndex((I) => u.isSameDay(I, k));
      if (C === -1)
        o.value = [...o.value, k];
      else {
        const I = [...o.value];
        I.splice(C, 1), o.value = I;
      }
    }
    function h(k) {
      e.multiple === "range" ? y(k) : e.multiple ? b(k) : o.value = [k];
    }
    return () => s("div", {
      class: "v-date-picker-month"
    }, [e.showWeek && s("div", {
      key: "weeks",
      class: "v-date-picker-month__weeks"
    }, [!e.hideWeekdays && s("div", {
      key: "hide-week-days",
      class: "v-date-picker-month__day"
    }, [jt(" ")]), r.value.map((k) => s("div", {
      class: ["v-date-picker-month__day", "v-date-picker-month__day--adjacent"]
    }, [k]))]), s(lt, {
      name: m.value
    }, {
      default: () => {
        var k;
        return [s("div", {
          ref: l,
          key: (k = i.value[0].date) == null ? void 0 : k.toString(),
          class: "v-date-picker-month__days"
        }, [!e.hideWeekdays && u.getWeekdays(e.firstDayOfWeek).map((C) => s("div", {
          class: ["v-date-picker-month__day", "v-date-picker-month__weekday"]
        }, [C])), i.value.map((C, I) => {
          const A = {
            props: {
              onClick: () => h(C.date)
            },
            item: C,
            i: I
          };
          return g.value && !C.isSelected && (C.isDisabled = !0), s("div", {
            class: ["v-date-picker-month__day", {
              "v-date-picker-month__day--adjacent": C.isAdjacent,
              "v-date-picker-month__day--hide-adjacent": C.isHidden,
              "v-date-picker-month__day--selected": C.isSelected,
              "v-date-picker-month__day--week-end": C.isWeekEnd,
              "v-date-picker-month__day--week-start": C.isWeekStart
            }],
            "data-v-date": C.isDisabled ? void 0 : C.isoDate
          }, [(e.showAdjacentMonths || !C.isAdjacent) && s(he, {
            defaults: {
              VBtn: {
                class: "v-date-picker-month__day-btn",
                color: (C.isSelected || C.isToday) && !C.isDisabled ? e.color : void 0,
                disabled: C.isDisabled,
                icon: !0,
                ripple: !1,
                text: C.localized,
                variant: C.isDisabled ? C.isToday ? "outlined" : "text" : C.isToday && !C.isSelected ? "outlined" : "flat",
                onClick: () => h(C.date)
              }
            }
          }, {
            default: () => {
              var x, P;
              return [(P = (x = a.day) == null ? void 0 : x.call(a, A)) != null ? P : s(we, A.props, null)];
            }
          })]);
        })])];
      }
    })]);
  }
}), yc = M({
  color: String,
  height: [String, Number],
  min: null,
  max: null,
  modelValue: Number,
  year: Number
}, "VDatePickerMonths"), ci = N()({
  name: "VDatePickerMonths",
  props: yc(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      emit: t,
      slots: a
    } = n;
    const l = Hn(), i = oe(e, "modelValue"), o = S(() => {
      let r = l.startOfYear(l.date());
      return e.year && (r = l.setYear(r, e.year)), _t(12).map((u) => {
        const c = l.format(r, "monthShort"), d = !!(e.min && l.isAfter(l.startOfMonth(l.date(e.min)), r) || e.max && l.isAfter(r, l.startOfMonth(l.date(e.max))));
        return r = l.getNextMonth(r), {
          isDisabled: d,
          text: c,
          value: u
        };
      });
    });
    return Re(() => {
      var r;
      i.value = (r = i.value) != null ? r : l.getMonth(l.date());
    }), z(() => s("div", {
      class: "v-date-picker-months",
      style: {
        height: ee(e.height)
      }
    }, [s("div", {
      class: "v-date-picker-months__content"
    }, [o.value.map((r, u) => {
      var f, m;
      const c = {
        active: i.value === u,
        color: i.value === u ? e.color : void 0,
        disabled: r.isDisabled,
        rounded: !0,
        text: r.text,
        variant: i.value === r.value ? "flat" : "text",
        onClick: () => d(u)
      };
      function d(g) {
        if (i.value === g) {
          t("update:modelValue", i.value);
          return;
        }
        i.value = g;
      }
      return (m = (f = a.month) == null ? void 0 : f.call(a, {
        month: r,
        i: u,
        props: c
      })) != null ? m : s(we, H({
        key: "month"
      }, c), null);
    })])])), {};
  }
}), bc = M({
  color: String,
  height: [String, Number],
  min: null,
  max: null,
  modelValue: Number
}, "VDatePickerYears"), di = N()({
  name: "VDatePickerYears",
  props: bc(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      emit: t,
      slots: a
    } = n;
    const l = Hn(), i = oe(e, "modelValue"), o = S(() => {
      const u = l.getYear(l.date());
      let c = u - 100, d = u + 52;
      e.min && (c = l.getYear(l.date(e.min))), e.max && (d = l.getYear(l.date(e.max)));
      let f = l.startOfYear(l.date());
      return f = l.setYear(f, c), _t(d - c + 1, c).map((m) => {
        const g = l.format(f, "year");
        return f = l.setYear(f, l.getYear(f) + 1), {
          text: g,
          value: m
        };
      });
    });
    Re(() => {
      var u;
      i.value = (u = i.value) != null ? u : l.getYear(l.date());
    });
    const r = pa();
    return rt(() => Ke(this, null, function* () {
      var u;
      yield _e(), (u = r.el) == null || u.scrollIntoView({
        block: "center"
      });
    })), z(() => s("div", {
      class: "v-date-picker-years",
      style: {
        height: ee(e.height)
      }
    }, [s("div", {
      class: "v-date-picker-years__content"
    }, [o.value.map((u, c) => {
      var f, m;
      const d = {
        ref: i.value === u.value ? r : void 0,
        active: i.value === u.value,
        color: i.value === u.value ? e.color : void 0,
        rounded: !0,
        text: u.text,
        variant: i.value === u.value ? "flat" : "text",
        onClick: () => {
          if (i.value === u.value) {
            t("update:modelValue", i.value);
            return;
          }
          i.value = u.value;
        }
      };
      return (m = (f = a.year) == null ? void 0 : f.call(a, {
        year: u,
        i: c,
        props: d
      })) != null ? m : s(we, H({
        key: "month"
      }, d), null);
    })])])), {};
  }
}), By = Bt("v-picker-title"), Sc = M(v({
  bgColor: String,
  landscape: Boolean,
  title: String,
  hideHeader: Boolean
}, vl()), "VPicker"), gr = N()({
  name: "VPicker",
  props: Sc(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      backgroundColorClasses: a,
      backgroundColorStyles: l
    } = Le($(e, "color"));
    return z(() => {
      const i = dn.filterProps(e), o = !!(e.title || t.title);
      return s(dn, H(i, {
        color: e.bgColor,
        class: ["v-picker", {
          "v-picker--landscape": e.landscape,
          "v-picker--with-actions": !!t.actions
        }, e.class],
        style: e.style
      }), {
        default: () => {
          var r;
          return [!e.hideHeader && s("div", {
            key: "header",
            class: [a.value],
            style: [l.value]
          }, [o && s(By, {
            key: "picker-title"
          }, {
            default: () => {
              var u, c;
              return [(c = (u = t.title) == null ? void 0 : u.call(t)) != null ? c : e.title];
            }
          }), t.header && s("div", {
            class: "v-picker__header"
          }, [t.header()])]), s("div", {
            class: "v-picker__body"
          }, [(r = t.default) == null ? void 0 : r.call(t)]), t.actions && s(he, {
            defaults: {
              VBtn: {
                slim: !0,
                variant: "text"
              }
            }
          }, {
            default: () => [s("div", {
              class: "v-picker__actions"
            }, [t.actions()])]
          })];
        }
      });
    }), {};
  }
}), Dy = M(J(v(v(v(v(v({
  // TODO: implement in v3.5
  // calendarIcon: {
  //   type: String,
  //   default: '$calendar',
  // },
  // keyboardIcon: {
  //   type: String,
  //   default: '$edit',
  // },
  // inputMode: {
  //   type: String as PropType<'calendar' | 'keyboard'>,
  //   default: 'calendar',
  // },
  // inputText: {
  //   type: String,
  //   default: '$vuetify.datePicker.input.placeholder',
  // },
  // inputPlaceholder: {
  //   type: String,
  //   default: 'dd/mm/yyyy',
  // },
  header: {
    type: String,
    default: "$vuetify.datePicker.header"
  }
}, gc()), hc({
  weeksInMonth: "static"
})), We(yc(), ["modelValue"])), We(bc(), ["modelValue"])), Sc({
  title: "$vuetify.datePicker.title"
})), {
  modelValue: null
}), "VDatePicker"), My = N()({
  name: "VDatePicker",
  props: Dy(),
  emits: {
    "update:modelValue": (e) => !0,
    "update:month": (e) => !0,
    "update:year": (e) => !0,
    // 'update:inputMode': (date: any) => true,
    "update:viewMode": (e) => !0
  },
  setup(e, n) {
    var _, B;
    let {
      emit: t,
      slots: a
    } = n;
    const l = Hn(), {
      t: i
    } = $e(), o = oe(e, "modelValue", void 0, (V) => Me(V), (V) => e.multiple ? V : V[0]), r = oe(e, "viewMode"), u = S(() => {
      var L;
      const V = l.date((L = o.value) == null ? void 0 : L[0]);
      return V && l.isValid(V) ? V : l.date();
    }), c = G(Number((_ = e.month) != null ? _ : l.getMonth(l.startOfMonth(u.value)))), d = G(Number((B = e.year) != null ? B : l.getYear(l.startOfYear(l.setMonth(u.value, c.value))))), f = Z(!1), m = S(() => e.multiple && o.value.length > 1 ? i("$vuetify.datePicker.itemsSelected", o.value.length) : o.value[0] && l.isValid(o.value[0]) ? l.format(l.date(o.value[0]), "normalDateWithWeekday") : i(e.header)), g = S(() => {
      let V = l.date();
      return V = l.setDate(V, 1), V = l.setMonth(V, c.value), V = l.setYear(V, d.value), l.format(V, "monthAndYear");
    }), y = S(() => `date-picker-header${f.value ? "-reverse" : ""}-transition`), b = S(() => {
      const V = l.date(e.min);
      return e.min && l.isValid(V) ? V : null;
    }), h = S(() => {
      const V = l.date(e.max);
      return e.max && l.isValid(V) ? V : null;
    }), k = S(() => {
      if (e.disabled) return !0;
      const V = [];
      if (r.value !== "month")
        V.push("prev", "next");
      else {
        let L = l.date();
        if (L = l.setYear(L, d.value), L = l.setMonth(L, c.value), b.value) {
          const D = l.addDays(l.startOfMonth(L), -1);
          l.isAfter(b.value, D) && V.push("prev");
        }
        if (h.value) {
          const D = l.addDays(l.endOfMonth(L), 1);
          l.isAfter(D, h.value) && V.push("next");
        }
      }
      return V;
    });
    function C() {
      c.value < 11 ? c.value++ : (d.value++, c.value = 0, w(d.value)), T(c.value);
    }
    function I() {
      c.value > 0 ? c.value-- : (d.value--, c.value = 11, w(d.value)), T(c.value);
    }
    function A() {
      r.value = "month";
    }
    function x() {
      r.value = r.value === "months" ? "month" : "months";
    }
    function P() {
      r.value = r.value === "year" ? "month" : "year";
    }
    function T(V) {
      r.value === "months" && x(), t("update:month", V);
    }
    function w(V) {
      r.value === "year" && P(), t("update:year", V);
    }
    return Q(o, (V, L) => {
      const D = Me(L), p = Me(V);
      if (!p.length) return;
      const R = l.date(D[D.length - 1]), U = l.date(p[p.length - 1]), q = l.getMonth(U), K = l.getYear(U);
      q !== c.value && (c.value = q, T(c.value)), K !== d.value && (d.value = K, w(d.value)), f.value = l.isBefore(R, U);
    }), z(() => {
      const V = gr.filterProps(e), L = ri.filterProps(e), D = si.filterProps(e), p = ui.filterProps(e), R = We(ci.filterProps(e), ["modelValue"]), U = We(di.filterProps(e), ["modelValue"]), q = {
        header: m.value,
        transition: y.value
      };
      return s(gr, H(V, {
        class: ["v-date-picker", `v-date-picker--${r.value}`, {
          "v-date-picker--show-week": e.showWeek
        }, e.class],
        style: e.style
      }), {
        title: () => {
          var K, E;
          return (E = (K = a.title) == null ? void 0 : K.call(a)) != null ? E : s("div", {
            class: "v-date-picker__title"
          }, [i(e.title)]);
        },
        header: () => a.header ? s(he, {
          defaults: {
            VDatePickerHeader: v({}, q)
          }
        }, {
          default: () => {
            var K;
            return [(K = a.header) == null ? void 0 : K.call(a, q)];
          }
        }) : s(si, H({
          key: "header"
        }, D, q, {
          onClick: r.value !== "month" ? A : void 0
        }), J(v({}, a), {
          default: void 0
        })),
        default: () => s(re, null, [s(ri, H(L, {
          disabled: k.value,
          text: g.value,
          "onClick:next": C,
          "onClick:prev": I,
          "onClick:month": x,
          "onClick:year": P
        }), null), s(na, {
          hideOnLeave: !0
        }, {
          default: () => [r.value === "months" ? s(ci, H({
            key: "date-picker-months"
          }, R, {
            modelValue: c.value,
            "onUpdate:modelValue": [(K) => c.value = K, T],
            min: b.value,
            max: h.value,
            year: d.value
          }), null) : r.value === "year" ? s(di, H({
            key: "date-picker-years"
          }, U, {
            modelValue: d.value,
            "onUpdate:modelValue": [(K) => d.value = K, w],
            min: b.value,
            max: h.value
          }), null) : s(ui, H({
            key: "date-picker-month"
          }, p, {
            modelValue: o.value,
            "onUpdate:modelValue": (K) => o.value = K,
            month: c.value,
            "onUpdate:month": [(K) => c.value = K, T],
            year: d.value,
            "onUpdate:year": [(K) => d.value = K, w],
            min: b.value,
            max: h.value
          }), null)]
        })]),
        actions: a.actions
      });
    }), {};
  }
}), py = M(v(v(v(v({
  actionText: String,
  bgColor: String,
  color: String,
  icon: ve,
  image: String,
  justify: {
    type: String,
    default: "center"
  },
  headline: String,
  title: String,
  text: String,
  textWidth: {
    type: [Number, String],
    default: 500
  },
  href: String,
  to: String
}, te()), Ye()), Dt({
  size: void 0
})), Se()), "VEmptyState"), Ey = N()({
  name: "VEmptyState",
  props: py(),
  emits: {
    "click:action": (e) => !0
  },
  setup(e, n) {
    let {
      emit: t,
      slots: a
    } = n;
    const {
      themeClasses: l
    } = Pe(e), {
      backgroundColorClasses: i,
      backgroundColorStyles: o
    } = Le($(e, "bgColor")), {
      dimensionStyles: r
    } = Ge(e), {
      displayClasses: u
    } = ht();
    function c(d) {
      t("click:action", d);
    }
    return z(() => {
      var h, k, C, I, A, x, P;
      const d = !!(a.actions || e.actionText), f = !!(a.headline || e.headline), m = !!(a.title || e.title), g = !!(a.text || e.text), y = !!(a.media || e.image || e.icon), b = e.size || (e.image ? 200 : 96);
      return s("div", {
        class: ["v-empty-state", {
          [`v-empty-state--${e.justify}`]: !0
        }, l.value, i.value, u.value, e.class],
        style: [o.value, r.value, e.style]
      }, [y && s("div", {
        key: "media",
        class: "v-empty-state__media"
      }, [a.media ? s(he, {
        key: "media-defaults",
        defaults: {
          VImg: {
            src: e.image,
            height: b
          },
          VIcon: {
            size: b,
            icon: e.icon
          }
        }
      }, {
        default: () => [a.media()]
      }) : s(re, null, [e.image ? s(Ft, {
        key: "image",
        src: e.image,
        height: b
      }, null) : e.icon ? s(Ve, {
        key: "icon",
        color: e.color,
        size: b,
        icon: e.icon
      }, null) : void 0])]), f && s("div", {
        key: "headline",
        class: "v-empty-state__headline"
      }, [(k = (h = a.headline) == null ? void 0 : h.call(a)) != null ? k : e.headline]), m && s("div", {
        key: "title",
        class: "v-empty-state__title"
      }, [(I = (C = a.title) == null ? void 0 : C.call(a)) != null ? I : e.title]), g && s("div", {
        key: "text",
        class: "v-empty-state__text",
        style: {
          maxWidth: ee(e.textWidth)
        }
      }, [(x = (A = a.text) == null ? void 0 : A.call(a)) != null ? x : e.text]), a.default && s("div", {
        key: "content",
        class: "v-empty-state__content"
      }, [a.default()]), d && s("div", {
        key: "actions",
        class: "v-empty-state__actions"
      }, [s(he, {
        defaults: {
          VBtn: {
            class: "v-empty-state__action-btn",
            color: (P = e.color) != null ? P : "surface-variant",
            text: e.actionText
          }
        }
      }, {
        default: () => {
          var T, w;
          return [(w = (T = a.actions) == null ? void 0 : T.call(a, {
            props: {
              onClick: c
            }
          })) != null ? w : s(we, {
            onClick: c
          }, null)];
        }
      })])]);
    }), {};
  }
}), ua = Symbol.for("vuetify:v-expansion-panel"), kc = M(v(v({}, te()), Yi()), "VExpansionPanelText"), vi = N()({
  name: "VExpansionPanelText",
  props: kc(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = Ce(ua);
    if (!a) throw new Error("[Vuetify] v-expansion-panel-text needs to be placed inside v-expansion-panel");
    const {
      hasContent: l,
      onAfterLeave: i
    } = Gi(e, a.isSelected);
    return z(() => s(Ja, {
      onAfterLeave: i
    }, {
      default: () => {
        var o;
        return [pe(s("div", {
          class: ["v-expansion-panel-text", e.class],
          style: e.style
        }, [t.default && l.value && s("div", {
          class: "v-expansion-panel-text__wrapper"
        }, [(o = t.default) == null ? void 0 : o.call(t)])]), [[Pt, a.isSelected.value]])];
      }
    })), {};
  }
}), Cc = M(v(v({
  color: String,
  expandIcon: {
    type: ve,
    default: "$expand"
  },
  collapseIcon: {
    type: ve,
    default: "$collapse"
  },
  hideActions: Boolean,
  focusable: Boolean,
  static: Boolean,
  ripple: {
    type: [Boolean, Object],
    default: !1
  },
  readonly: Boolean
}, te()), Ye()), "VExpansionPanelTitle"), fi = N()({
  name: "VExpansionPanelTitle",
  directives: {
    Ripple: qt
  },
  props: Cc(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = Ce(ua);
    if (!a) throw new Error("[Vuetify] v-expansion-panel-title needs to be placed inside v-expansion-panel");
    const {
      backgroundColorClasses: l,
      backgroundColorStyles: i
    } = Le(e, "color"), {
      dimensionStyles: o
    } = Ge(e), r = S(() => ({
      collapseIcon: e.collapseIcon,
      disabled: a.disabled.value,
      expanded: a.isSelected.value,
      expandIcon: e.expandIcon,
      readonly: e.readonly
    })), u = S(() => a.isSelected.value ? e.collapseIcon : e.expandIcon);
    return z(() => {
      var c;
      return pe(s("button", {
        class: ["v-expansion-panel-title", {
          "v-expansion-panel-title--active": a.isSelected.value,
          "v-expansion-panel-title--focusable": e.focusable,
          "v-expansion-panel-title--static": e.static
        }, l.value, e.class],
        style: [i.value, o.value, e.style],
        type: "button",
        tabindex: a.disabled.value ? -1 : void 0,
        disabled: a.disabled.value,
        "aria-expanded": a.isSelected.value,
        onClick: e.readonly ? void 0 : a.toggle
      }, [s("span", {
        class: "v-expansion-panel-title__overlay"
      }, null), (c = t.default) == null ? void 0 : c.call(t, r.value), !e.hideActions && s(he, {
        defaults: {
          VIcon: {
            icon: u.value
          }
        }
      }, {
        default: () => {
          var d, f;
          return [s("span", {
            class: "v-expansion-panel-title__icon"
          }, [(f = (d = t.actions) == null ? void 0 : d.call(t, r.value)) != null ? f : s(Ve, null, null)])];
        }
      })]), [[mt("ripple"), e.ripple]]);
    }), {};
  }
}), xc = M(v(v(v(v(v(v({
  title: String,
  text: String,
  bgColor: String
}, Xe()), wn()), De()), me()), Cc()), kc()), "VExpansionPanel"), Fy = N()({
  name: "VExpansionPanel",
  props: xc(),
  emits: {
    "group:selected": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = Vn(e, ua), {
      backgroundColorClasses: l,
      backgroundColorStyles: i
    } = Le(e, "bgColor"), {
      elevationClasses: o
    } = et(e), {
      roundedClasses: r
    } = Oe(e), u = S(() => (a == null ? void 0 : a.disabled.value) || e.disabled), c = S(() => a.group.items.value.reduce((m, g, y) => (a.group.selected.value.includes(g.id) && m.push(y), m), [])), d = S(() => {
      const m = a.group.items.value.findIndex((g) => g.id === a.id);
      return !a.isSelected.value && c.value.some((g) => g - m === 1);
    }), f = S(() => {
      const m = a.group.items.value.findIndex((g) => g.id === a.id);
      return !a.isSelected.value && c.value.some((g) => g - m === -1);
    });
    return Be(ua, a), z(() => {
      const m = !!(t.text || e.text), g = !!(t.title || e.title), y = fi.filterProps(e), b = vi.filterProps(e);
      return s(e.tag, {
        class: ["v-expansion-panel", {
          "v-expansion-panel--active": a.isSelected.value,
          "v-expansion-panel--before-active": d.value,
          "v-expansion-panel--after-active": f.value,
          "v-expansion-panel--disabled": u.value
        }, r.value, l.value, e.class],
        style: [i.value, e.style]
      }, {
        default: () => [s("div", {
          class: ["v-expansion-panel__shadow", ...o.value]
        }, null), s(he, {
          defaults: {
            VExpansionPanelTitle: v({}, y),
            VExpansionPanelText: v({}, b)
          }
        }, {
          default: () => {
            var h;
            return [g && s(fi, {
              key: "title"
            }, {
              default: () => [t.title ? t.title() : e.title]
            }), m && s(vi, {
              key: "text"
            }, {
              default: () => [t.text ? t.text() : e.text]
            }), (h = t.default) == null ? void 0 : h.call(t)];
          }
        })]
      });
    }), {
      groupItem: a
    };
  }
}), $y = ["default", "accordion", "inset", "popout"], Oy = M(J(v(v(v(v(v({
  flat: Boolean
}, xn()), Si(xc(), ["bgColor", "collapseIcon", "color", "eager", "elevation", "expandIcon", "focusable", "hideActions", "readonly", "ripple", "rounded", "tile", "static"])), Se()), te()), me()), {
  variant: {
    type: String,
    default: "default",
    validator: (e) => $y.includes(e)
  }
}), "VExpansionPanels"), Ry = N()({
  name: "VExpansionPanels",
  props: Oy(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      next: a,
      prev: l
    } = Kt(e, ua), {
      themeClasses: i
    } = Pe(e), o = S(() => e.variant && `v-expansion-panels--variant-${e.variant}`);
    return Ee({
      VExpansionPanel: {
        bgColor: $(e, "bgColor"),
        collapseIcon: $(e, "collapseIcon"),
        color: $(e, "color"),
        eager: $(e, "eager"),
        elevation: $(e, "elevation"),
        expandIcon: $(e, "expandIcon"),
        focusable: $(e, "focusable"),
        hideActions: $(e, "hideActions"),
        readonly: $(e, "readonly"),
        ripple: $(e, "ripple"),
        rounded: $(e, "rounded"),
        static: $(e, "static")
      }
    }), z(() => s(e.tag, {
      class: ["v-expansion-panels", {
        "v-expansion-panels--flat": e.flat,
        "v-expansion-panels--tile": e.tile
      }, i.value, o.value, e.class],
      style: e.style
    }, {
      default: () => {
        var r;
        return [(r = t.default) == null ? void 0 : r.call(t, {
          prev: l,
          next: a
        })];
      }
    })), {
      next: a,
      prev: l
    };
  }
}), Ny = M(v(v(v(v({
  app: Boolean,
  appear: Boolean,
  extended: Boolean,
  layout: Boolean,
  offset: Boolean,
  modelValue: {
    type: Boolean,
    default: !0
  }
}, We(al({
  active: !0
}), ["location"])), bn()), Rt()), It({
  transition: "fab-transition"
})), "VFab"), Hy = N()({
  name: "VFab",
  props: Ny(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = oe(e, "modelValue"), l = Z(56), i = G(), {
      resizeRef: o
    } = Vt((f) => {
      f.length && (l.value = f[0].target.clientHeight);
    }), r = S(() => e.app || e.absolute), u = S(() => {
      var f, m;
      return r.value ? (m = (f = e.location) == null ? void 0 : f.split(" ").shift()) != null ? m : "bottom" : !1;
    }), c = S(() => {
      var f, m;
      return r.value ? (m = (f = e.location) == null ? void 0 : f.split(" ")[1]) != null ? m : "end" : !1;
    });
    ct(() => e.app, () => {
      const f = Sn({
        id: e.name,
        order: S(() => parseInt(e.order, 10)),
        position: u,
        layoutSize: S(() => e.layout ? l.value + 24 : 0),
        elementSize: S(() => l.value + 24),
        active: S(() => e.app && a.value),
        absolute: $(e, "absolute")
      });
      Re(() => {
        i.value = f.layoutItemStyles.value;
      });
    });
    const d = G();
    return z(() => {
      const f = we.filterProps(e);
      return s("div", {
        ref: d,
        class: ["v-fab", {
          "v-fab--absolute": e.absolute,
          "v-fab--app": !!e.app,
          "v-fab--extended": e.extended,
          "v-fab--offset": e.offset,
          [`v-fab--${u.value}`]: r.value,
          [`v-fab--${c.value}`]: r.value
        }, e.class],
        style: [e.app ? v({}, i.value) : {
          height: "inherit",
          width: void 0
        }, e.style]
      }, [s("div", {
        class: "v-fab__container"
      }, [s(lt, {
        appear: e.appear,
        transition: e.transition
      }, {
        default: () => [pe(s(we, H({
          ref: o
        }, f, {
          active: void 0,
          location: void 0
        }), t), [[Pt, e.active]])]
      })])]);
    }), {};
  }
}), zy = M(v(J(v({
  chips: Boolean,
  counter: Boolean,
  counterSizeString: {
    type: String,
    default: "$vuetify.fileInput.counterSize"
  },
  counterString: {
    type: String,
    default: "$vuetify.fileInput.counter"
  },
  hideInput: Boolean,
  multiple: Boolean,
  showSize: {
    type: [Boolean, Number, String],
    default: !1,
    validator: (e) => typeof e == "boolean" || [1e3, 1024].includes(Number(e))
  }
}, Ht({
  prependIcon: "$file"
})), {
  modelValue: {
    type: [Array, Object],
    default: (e) => e.multiple ? [] : null,
    validator: (e) => Me(e).every((n) => n != null && typeof n == "object")
  }
}), ya({
  clearable: !0
})), "VFileInput"), Wy = N()({
  name: "VFileInput",
  inheritAttrs: !1,
  props: zy(),
  emits: {
    "click:control": (e) => !0,
    "mousedown:control": (e) => !0,
    "update:focused": (e) => !0,
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      attrs: t,
      emit: a,
      slots: l
    } = n;
    const {
      t: i
    } = $e(), o = oe(e, "modelValue", e.modelValue, (_) => Me(_), (_) => !e.multiple && Array.isArray(_) ? _[0] : _), {
      isFocused: r,
      focus: u,
      blur: c
    } = Nt(e), d = S(() => typeof e.showSize != "boolean" ? e.showSize : void 0), f = S(() => {
      var _;
      return ((_ = o.value) != null ? _ : []).reduce((B, V) => {
        let {
          size: L = 0
        } = V;
        return B + L;
      }, 0);
    }), m = S(() => _o(f.value, d.value)), g = S(() => {
      var _;
      return ((_ = o.value) != null ? _ : []).map((B) => {
        const {
          name: V = "",
          size: L = 0
        } = B;
        return e.showSize ? `${V} (${_o(L, d.value)})` : V;
      });
    }), y = S(() => {
      var B, V;
      const _ = (V = (B = o.value) == null ? void 0 : B.length) != null ? V : 0;
      return e.showSize ? i(e.counterSizeString, _, m.value) : i(e.counterString, _);
    }), b = G(), h = G(), k = G(), C = S(() => r.value || e.active), I = S(() => ["plain", "underlined"].includes(e.variant));
    function A() {
      var _;
      k.value !== document.activeElement && ((_ = k.value) == null || _.focus()), r.value || u();
    }
    function x(_) {
      var B;
      (B = k.value) == null || B.click();
    }
    function P(_) {
      a("mousedown:control", _);
    }
    function T(_) {
      var B;
      (B = k.value) == null || B.click(), a("click:control", _);
    }
    function w(_) {
      _.stopPropagation(), A(), _e(() => {
        o.value = [], Ci(e["onClick:clear"], _);
      });
    }
    return Q(o, (_) => {
      (!Array.isArray(_) || !_.length) && k.value && (k.value.value = "");
    }), z(() => {
      const _ = !!(l.counter || e.counter), B = !!(_ || l.details), [V, L] = Gt(t), U = nt.filterProps(e), {
        modelValue: D
      } = U, p = He(U, [
        "modelValue"
      ]), R = Ui(e);
      return s(nt, H({
        ref: b,
        modelValue: o.value,
        "onUpdate:modelValue": (q) => o.value = q,
        class: ["v-file-input", {
          "v-file-input--chips": !!e.chips,
          "v-file-input--hide": e.hideInput,
          "v-input--plain-underlined": I.value
        }, e.class],
        style: e.style,
        "onClick:prepend": x
      }, V, p, {
        centerAffix: !I.value,
        focused: r.value
      }), J(v({}, l), {
        default: (q) => {
          let {
            id: K,
            isDisabled: E,
            isDirty: F,
            isReadonly: O,
            isValid: Y
          } = q;
          return s(Un, H({
            ref: h,
            "prepend-icon": e.prependIcon,
            onMousedown: P,
            onClick: T,
            "onClick:clear": w,
            "onClick:prependInner": e["onClick:prependInner"],
            "onClick:appendInner": e["onClick:appendInner"]
          }, R, {
            id: K.value,
            active: C.value || F.value,
            dirty: F.value || e.dirty,
            disabled: E.value,
            focused: r.value,
            error: Y.value === !1
          }), J(v({}, l), {
            default: (ie) => {
              var se;
              let {
                props: W
              } = ie, ae = W, {
                class: ne
              } = ae, ue = He(ae, [
                "class"
              ]);
              return s(re, null, [s("input", H({
                ref: k,
                type: "file",
                readonly: O.value,
                disabled: E.value,
                multiple: e.multiple,
                name: e.name,
                onClick: (ye) => {
                  ye.stopPropagation(), O.value && ye.preventDefault(), A();
                },
                onChange: (ye) => {
                  var X;
                  if (!ye.target) return;
                  const ce = ye.target;
                  o.value = [...(X = ce.files) != null ? X : []];
                },
                onFocus: A,
                onBlur: c
              }, ue, L), null), s("div", {
                class: ne
              }, [!!((se = o.value) != null && se.length) && !e.hideInput && (l.selection ? l.selection({
                fileNames: g.value,
                totalBytes: f.value,
                totalBytesReadable: m.value
              }) : e.chips ? g.value.map((ye) => s(Gn, {
                key: ye,
                size: "small",
                text: ye
              }, null)) : g.value.join(", "))])]);
            }
          }));
        },
        details: B ? (q) => {
          var K, E;
          return s(re, null, [(K = l.details) == null ? void 0 : K.call(l, q), _ && s(re, null, [s("span", null, null), s(rl, {
            active: !!((E = o.value) != null && E.length),
            value: y.value,
            disabled: e.disabled
          }, l.counter)])]);
        } : void 0
      }));
    }), xt({}, b, h, k);
  }
}), jy = M(v(v(v(v(v(v(v({
  app: Boolean,
  color: String,
  height: {
    type: [Number, String],
    default: "auto"
  }
}, vt()), te()), Xe()), bn()), De()), me({
  tag: "footer"
})), Se()), "VFooter"), Yy = N()({
  name: "VFooter",
  props: jy(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = G(), {
      themeClasses: l
    } = Pe(e), {
      backgroundColorClasses: i,
      backgroundColorStyles: o
    } = Le($(e, "color")), {
      borderClasses: r
    } = bt(e), {
      elevationClasses: u
    } = et(e), {
      roundedClasses: c
    } = Oe(e), d = Z(32), {
      resizeRef: f
    } = Vt((g) => {
      g.length && (d.value = g[0].target.clientHeight);
    }), m = S(() => e.height === "auto" ? d.value : parseInt(e.height, 10));
    return ct(() => e.app, () => {
      const g = Sn({
        id: e.name,
        order: S(() => parseInt(e.order, 10)),
        position: S(() => "bottom"),
        layoutSize: m,
        elementSize: S(() => e.height === "auto" ? void 0 : m.value),
        active: S(() => e.app),
        absolute: $(e, "absolute")
      });
      Re(() => {
        a.value = g.layoutItemStyles.value;
      });
    }), z(() => s(e.tag, {
      ref: f,
      class: ["v-footer", l.value, i.value, r.value, u.value, c.value, e.class],
      style: [o.value, e.app ? a.value : {
        height: ee(e.height)
      }, e.style]
    }, t)), {};
  }
}), Gy = M(v(v({}, te()), Jf()), "VForm"), Uy = N()({
  name: "VForm",
  props: Gy(),
  emits: {
    "update:modelValue": (e) => !0,
    submit: (e) => !0
  },
  setup(e, n) {
    let {
      slots: t,
      emit: a
    } = n;
    const l = Qf(e), i = G();
    function o(u) {
      u.preventDefault(), l.reset();
    }
    function r(u) {
      const c = u, d = l.validate();
      c.then = d.then.bind(d), c.catch = d.catch.bind(d), c.finally = d.finally.bind(d), a("submit", c), c.defaultPrevented || d.then((f) => {
        var g;
        let {
          valid: m
        } = f;
        m && ((g = i.value) == null || g.submit());
      }), c.preventDefault();
    }
    return z(() => {
      var u;
      return s("form", {
        ref: i,
        class: ["v-form", e.class],
        style: e.style,
        novalidate: !0,
        onReset: o,
        onSubmit: r
      }, [(u = t.default) == null ? void 0 : u.call(t, l)]);
    }), xt(l, i);
  }
}), Ky = M(v({
  disabled: Boolean,
  modelValue: {
    type: Boolean,
    default: null
  }
}, Wi()), "VHover"), qy = N()({
  name: "VHover",
  props: Ky(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = oe(e, "modelValue"), {
      runOpenDelay: l,
      runCloseDelay: i
    } = ji(e, (o) => !e.disabled && (a.value = o));
    return () => {
      var o;
      return (o = t.default) == null ? void 0 : o.call(t, {
        isHovering: a.value,
        props: {
          onMouseenter: l,
          onMouseleave: i
        }
      });
    };
  }
}), Xy = M(v(v({
  color: String,
  direction: {
    type: String,
    default: "vertical",
    validator: (e) => ["vertical", "horizontal"].includes(e)
  },
  side: {
    type: String,
    default: "end",
    validator: (e) => ["start", "end", "both"].includes(e)
  },
  mode: {
    type: String,
    default: "intersect",
    validator: (e) => ["intersect", "manual"].includes(e)
  },
  margin: [Number, String],
  loadMoreText: {
    type: String,
    default: "$vuetify.infiniteScroll.loadMore"
  },
  emptyText: {
    type: String,
    default: "$vuetify.infiniteScroll.empty"
  }
}, Ye()), me()), "VInfiniteScroll"), hr = gt({
  name: "VInfiniteScrollIntersect",
  props: {
    side: {
      type: String,
      required: !0
    },
    rootMargin: String
  },
  emits: {
    intersect: (e, n) => !0
  },
  setup(e, n) {
    let {
      emit: t
    } = n;
    const {
      intersectionRef: a,
      isIntersecting: l
    } = el();
    return Q(l, (i) => Ke(this, null, function* () {
      t("intersect", e.side, i);
    })), z(() => s("div", {
      class: "v-infinite-scroll-intersect",
      style: {
        "--v-infinite-margin-size": e.rootMargin
      },
      ref: a
    }, [jt(" ")])), {};
  }
}), Zy = N()({
  name: "VInfiniteScroll",
  props: Xy(),
  emits: {
    load: (e) => !0
  },
  setup(e, n) {
    let {
      slots: t,
      emit: a
    } = n;
    const l = G(), i = Z("ok"), o = Z("ok"), r = S(() => ee(e.margin)), u = Z(!1);
    function c(x) {
      if (!l.value) return;
      const P = e.direction === "vertical" ? "scrollTop" : "scrollLeft";
      l.value[P] = x;
    }
    function d() {
      if (!l.value) return 0;
      const x = e.direction === "vertical" ? "scrollTop" : "scrollLeft";
      return l.value[x];
    }
    function f() {
      if (!l.value) return 0;
      const x = e.direction === "vertical" ? "scrollHeight" : "scrollWidth";
      return l.value[x];
    }
    function m() {
      if (!l.value) return 0;
      const x = e.direction === "vertical" ? "clientHeight" : "clientWidth";
      return l.value[x];
    }
    rt(() => {
      l.value && (e.side === "start" ? c(f()) : e.side === "both" && c(f() / 2 - m() / 2));
    });
    function g(x, P) {
      x === "start" ? i.value = P : x === "end" && (o.value = P);
    }
    function y(x) {
      return x === "start" ? i.value : o.value;
    }
    let b = 0;
    function h(x, P) {
      u.value = P, u.value && k(x);
    }
    function k(x) {
      if (e.mode !== "manual" && !u.value) return;
      const P = y(x);
      if (!l.value || ["empty", "loading"].includes(P)) return;
      b = f(), g(x, "loading");
      function T(w) {
        g(x, w), _e(() => {
          w === "empty" || w === "error" || (w === "ok" && x === "start" && c(f() - b + d()), e.mode !== "manual" && _e(() => {
            window.requestAnimationFrame(() => {
              window.requestAnimationFrame(() => {
                window.requestAnimationFrame(() => {
                  k(x);
                });
              });
            });
          }));
        });
      }
      a("load", {
        side: x,
        done: T
      });
    }
    const {
      t: C
    } = $e();
    function I(x, P) {
      var _, B, V, L, D, p, R, U, q;
      if (e.side !== x && e.side !== "both") return;
      const T = () => k(x), w = {
        side: x,
        props: {
          onClick: T,
          color: e.color
        }
      };
      return P === "error" ? (_ = t.error) == null ? void 0 : _.call(t, w) : P === "empty" ? (V = (B = t.empty) == null ? void 0 : B.call(t, w)) != null ? V : s("div", null, [C(e.emptyText)]) : e.mode === "manual" ? P === "loading" ? (D = (L = t.loading) == null ? void 0 : L.call(t, w)) != null ? D : s(On, {
        indeterminate: !0,
        color: e.color
      }, null) : (R = (p = t["load-more"]) == null ? void 0 : p.call(t, w)) != null ? R : s(we, {
        variant: "outlined",
        color: e.color,
        onClick: T
      }, {
        default: () => [C(e.loadMoreText)]
      }) : (q = (U = t.loading) == null ? void 0 : U.call(t, w)) != null ? q : s(On, {
        indeterminate: !0,
        color: e.color
      }, null);
    }
    const {
      dimensionStyles: A
    } = Ge(e);
    z(() => {
      const x = e.tag, P = e.side === "start" || e.side === "both", T = e.side === "end" || e.side === "both", w = e.mode === "intersect";
      return s(x, {
        ref: l,
        class: ["v-infinite-scroll", `v-infinite-scroll--${e.direction}`, {
          "v-infinite-scroll--start": P,
          "v-infinite-scroll--end": T
        }],
        style: A.value
      }, {
        default: () => {
          var _;
          return [s("div", {
            class: "v-infinite-scroll__side"
          }, [I("start", i.value)]), P && w && s(hr, {
            key: "start",
            side: "start",
            onIntersect: h,
            rootMargin: r.value
          }, null), (_ = t.default) == null ? void 0 : _.call(t), T && w && s(hr, {
            key: "end",
            side: "end",
            onIntersect: h,
            rootMargin: r.value
          }, null), s("div", {
            class: "v-infinite-scroll__side"
          }, [I("end", o.value)])];
        }
      });
    });
  }
}), wc = Symbol.for("vuetify:v-item-group"), Jy = M(v(v(v(v({}, te()), xn({
  selectedClass: "v-item--selected"
})), me()), Se()), "VItemGroup"), Qy = N()({
  name: "VItemGroup",
  props: Jy(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      themeClasses: a
    } = Pe(e), {
      isSelected: l,
      select: i,
      next: o,
      prev: r,
      selected: u
    } = Kt(e, wc);
    return () => s(e.tag, {
      class: ["v-item-group", a.value, e.class],
      style: e.style
    }, {
      default: () => {
        var c;
        return [(c = t.default) == null ? void 0 : c.call(t, {
          isSelected: l,
          select: i,
          next: o,
          prev: r,
          selected: u.value
        })];
      }
    });
  }
}), eb = N()({
  name: "VItem",
  props: wn(),
  emits: {
    "group:selected": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      isSelected: a,
      select: l,
      toggle: i,
      selectedClass: o,
      value: r,
      disabled: u
    } = Vn(e, wc);
    return () => {
      var c;
      return (c = t.default) == null ? void 0 : c.call(t, {
        isSelected: a.value,
        selectedClass: o.value,
        select: l,
        toggle: i,
        value: r.value,
        disabled: u.value
      });
    };
  }
}), tb = Bt("v-kbd"), nb = M(v(v(v({}, te()), Ye()), vs()), "VLayout"), ab = N()({
  name: "VLayout",
  props: nb(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      layoutClasses: a,
      layoutStyles: l,
      getLayoutItem: i,
      items: o,
      layoutRef: r
    } = fs(e), {
      dimensionStyles: u
    } = Ge(e);
    return z(() => {
      var c;
      return s("div", {
        ref: r,
        class: [a.value, e.class],
        style: [u.value, l.value, e.style]
      }, [(c = t.default) == null ? void 0 : c.call(t)]);
    }), {
      getLayoutItem: i,
      items: o
    };
  }
}), lb = M(v(v({
  position: {
    type: String,
    required: !0
  },
  size: {
    type: [Number, String],
    default: 300
  },
  modelValue: Boolean
}, te()), bn()), "VLayoutItem"), ib = N()({
  name: "VLayoutItem",
  props: lb(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      layoutItemStyles: a
    } = Sn({
      id: e.name,
      order: S(() => parseInt(e.order, 10)),
      position: $(e, "position"),
      elementSize: $(e, "size"),
      layoutSize: $(e, "size"),
      active: $(e, "modelValue"),
      absolute: $(e, "absolute")
    });
    return () => {
      var l;
      return s("div", {
        class: ["v-layout-item", e.class],
        style: [a.value, e.style]
      }, [(l = t.default) == null ? void 0 : l.call(t)]);
    };
  }
}), ob = M(v(v(v(v({
  modelValue: Boolean,
  options: {
    type: Object,
    // For more information on types, navigate to:
    // https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
    default: () => ({
      root: void 0,
      rootMargin: void 0,
      threshold: void 0
    })
  }
}, te()), Ye()), me()), It({
  transition: "fade-transition"
})), "VLazy"), rb = N()({
  name: "VLazy",
  directives: {
    intersect: Qa
  },
  props: ob(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      dimensionStyles: a
    } = Ge(e), l = oe(e, "modelValue");
    function i(o) {
      l.value || (l.value = o);
    }
    return z(() => pe(s(e.tag, {
      class: ["v-lazy", e.class],
      style: [a.value, e.style]
    }, {
      default: () => [l.value && s(lt, {
        transition: e.transition,
        appear: !0
      }, {
        default: () => {
          var o;
          return [(o = t.default) == null ? void 0 : o.call(t)];
        }
      })]
    }), [[mt("intersect"), {
      handler: i,
      options: e.options
    }, null]])), {};
  }
}), sb = M(v({
  locale: String,
  fallbackLocale: String,
  messages: Object,
  rtl: {
    type: Boolean,
    default: void 0
  }
}, te()), "VLocaleProvider"), ub = N()({
  name: "VLocaleProvider",
  props: sb(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      rtlClasses: a
    } = qd(e);
    return z(() => {
      var l;
      return s("div", {
        class: ["v-locale-provider", a.value, e.class],
        style: e.style
      }, [(l = t.default) == null ? void 0 : l.call(t)]);
    }), {};
  }
}), cb = M(v(v(v({
  scrollable: Boolean
}, te()), Ye()), me({
  tag: "main"
})), "VMain"), db = N()({
  name: "VMain",
  props: cb(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      dimensionStyles: a
    } = Ge(e), {
      mainStyles: l
    } = Bi(), {
      ssrBootStyles: i
    } = kn();
    return z(() => s(e.tag, {
      class: ["v-main", {
        "v-main--scrollable": e.scrollable
      }, e.class],
      style: [l.value, i.value, a.value, e.style]
    }, {
      default: () => {
        var o, r;
        return [e.scrollable ? s("div", {
          class: "v-main__scroller"
        }, [(o = t.default) == null ? void 0 : o.call(t)]) : (r = t.default) == null ? void 0 : r.call(t)];
      }
    })), {};
  }
});
function vb(e) {
  let {
    rootEl: n,
    isSticky: t,
    layoutItemStyles: a
  } = e;
  const l = Z(!1), i = Z(0), o = S(() => {
    const c = typeof l.value == "boolean" ? "top" : l.value;
    return [t.value ? {
      top: "auto",
      bottom: "auto",
      height: void 0
    } : void 0, l.value ? {
      [c]: ee(i.value)
    } : {
      top: a.value.top
    }];
  });
  rt(() => {
    Q(t, (c) => {
      c ? window.addEventListener("scroll", u, {
        passive: !0
      }) : window.removeEventListener("scroll", u);
    }, {
      immediate: !0
    });
  }), ot(() => {
    window.removeEventListener("scroll", u);
  });
  let r = 0;
  function u() {
    var b;
    const c = r > window.scrollY ? "up" : "down", d = n.value.getBoundingClientRect(), f = parseFloat((b = a.value.top) != null ? b : 0), m = window.scrollY - Math.max(0, i.value - f), g = d.height + Math.max(i.value, f) - window.scrollY - window.innerHeight, y = parseFloat(getComputedStyle(n.value).getPropertyValue("--v-body-scroll-y")) || 0;
    d.height < window.innerHeight - f ? (l.value = "top", i.value = f) : c === "up" && l.value === "bottom" || c === "down" && l.value === "top" ? (i.value = window.scrollY + d.top - y, l.value = !0) : c === "down" && g <= 0 ? (i.value = 0, l.value = "bottom") : c === "up" && m <= 0 && (y ? l.value !== "top" && (i.value = -m + y + f, l.value = "top") : (i.value = d.top + m, l.value = "top")), r = window.scrollY;
  }
  return {
    isStuck: l,
    stickyStyles: o
  };
}
const fb = 100, mb = 20;
function yr(e) {
  return (e < 0 ? -1 : 1) * Math.sqrt(Math.abs(e)) * 1.41421356237;
}
function br(e) {
  if (e.length < 2)
    return 0;
  if (e.length === 2)
    return e[1].t === e[0].t ? 0 : (e[1].d - e[0].d) / (e[1].t - e[0].t);
  let n = 0;
  for (let t = e.length - 1; t > 0; t--) {
    if (e[t].t === e[t - 1].t)
      continue;
    const a = yr(n), l = (e[t].d - e[t - 1].d) / (e[t].t - e[t - 1].t);
    n += (l - a) * Math.abs(l), t === e.length - 1 && (n *= 0.5);
  }
  return yr(n) * 1e3;
}
function gb() {
  const e = {};
  function n(l) {
    Array.from(l.changedTouches).forEach((i) => {
      var r;
      ((r = e[i.identifier]) != null ? r : e[i.identifier] = new ud(mb)).push([l.timeStamp, i]);
    });
  }
  function t(l) {
    Array.from(l.changedTouches).forEach((i) => {
      delete e[i.identifier];
    });
  }
  function a(l) {
    var c;
    const i = (c = e[l]) == null ? void 0 : c.values().reverse();
    if (!i)
      throw new Error(`No samples for touch id ${l}`);
    const o = i[0], r = [], u = [];
    for (const d of i) {
      if (o[0] - d[0] > fb) break;
      r.push({
        t: d[0],
        d: d[1].clientX
      }), u.push({
        t: d[0],
        d: d[1].clientY
      });
    }
    return {
      x: br(r),
      y: br(u),
      get direction() {
        const {
          x: d,
          y: f
        } = this, [m, g] = [Math.abs(d), Math.abs(f)];
        return m > g && d >= 0 ? "right" : m > g && d <= 0 ? "left" : g > m && f >= 0 ? "down" : g > m && f <= 0 ? "up" : hb();
      }
    };
  }
  return {
    addMovement: n,
    endTouch: t,
    getVelocity: a
  };
}
function hb() {
  throw new Error();
}
function yb(e) {
  let {
    el: n,
    isActive: t,
    isTemporary: a,
    width: l,
    touchless: i,
    position: o
  } = e;
  rt(() => {
    window.addEventListener("touchstart", C, {
      passive: !0
    }), window.addEventListener("touchmove", I, {
      passive: !1
    }), window.addEventListener("touchend", A, {
      passive: !0
    });
  }), ot(() => {
    window.removeEventListener("touchstart", C), window.removeEventListener("touchmove", I), window.removeEventListener("touchend", A);
  });
  const r = S(() => ["left", "right"].includes(o.value)), {
    addMovement: u,
    endTouch: c,
    getVelocity: d
  } = gb();
  let f = !1;
  const m = Z(!1), g = Z(0), y = Z(0);
  let b;
  function h(P, T) {
    return (o.value === "left" ? P : o.value === "right" ? document.documentElement.clientWidth - P : o.value === "top" ? P : o.value === "bottom" ? document.documentElement.clientHeight - P : Bn()) - (T ? l.value : 0);
  }
  function k(P) {
    let T = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
    const w = o.value === "left" ? (P - y.value) / l.value : o.value === "right" ? (document.documentElement.clientWidth - P - y.value) / l.value : o.value === "top" ? (P - y.value) / l.value : o.value === "bottom" ? (document.documentElement.clientHeight - P - y.value) / l.value : Bn();
    return T ? Math.max(0, Math.min(1, w)) : w;
  }
  function C(P) {
    if (i.value) return;
    const T = P.changedTouches[0].clientX, w = P.changedTouches[0].clientY, _ = 25, B = o.value === "left" ? T < _ : o.value === "right" ? T > document.documentElement.clientWidth - _ : o.value === "top" ? w < _ : o.value === "bottom" ? w > document.documentElement.clientHeight - _ : Bn(), V = t.value && (o.value === "left" ? T < l.value : o.value === "right" ? T > document.documentElement.clientWidth - l.value : o.value === "top" ? w < l.value : o.value === "bottom" ? w > document.documentElement.clientHeight - l.value : Bn());
    (B || V || t.value && a.value) && (b = [T, w], y.value = h(r.value ? T : w, t.value), g.value = k(r.value ? T : w), f = y.value > -20 && y.value < 80, c(P), u(P));
  }
  function I(P) {
    const T = P.changedTouches[0].clientX, w = P.changedTouches[0].clientY;
    if (f) {
      if (!P.cancelable) {
        f = !1;
        return;
      }
      const B = Math.abs(T - b[0]), V = Math.abs(w - b[1]);
      (r.value ? B > V && B > 3 : V > B && V > 3) ? (m.value = !0, f = !1) : (r.value ? V : B) > 3 && (f = !1);
    }
    if (!m.value) return;
    P.preventDefault(), u(P);
    const _ = k(r.value ? T : w, !1);
    g.value = Math.max(0, Math.min(1, _)), _ > 1 ? y.value = h(r.value ? T : w, !0) : _ < 0 && (y.value = h(r.value ? T : w, !1));
  }
  function A(P) {
    if (f = !1, !m.value) return;
    u(P), m.value = !1;
    const T = d(P.changedTouches[0].identifier), w = Math.abs(T.x), _ = Math.abs(T.y);
    (r.value ? w > _ && w > 400 : _ > w && _ > 3) ? t.value = T.direction === ({
      left: "right",
      right: "left",
      top: "down",
      bottom: "up"
    }[o.value] || Bn()) : t.value = g.value > 0.5;
  }
  const x = S(() => m.value ? {
    transform: o.value === "left" ? `translateX(calc(-100% + ${g.value * l.value}px))` : o.value === "right" ? `translateX(calc(100% - ${g.value * l.value}px))` : o.value === "top" ? `translateY(calc(-100% + ${g.value * l.value}px))` : o.value === "bottom" ? `translateY(calc(100% - ${g.value * l.value}px))` : Bn(),
    transition: "none"
  } : void 0);
  return ct(m, () => {
    var w, _, B, V;
    const P = (_ = (w = n.value) == null ? void 0 : w.style.transform) != null ? _ : null, T = (V = (B = n.value) == null ? void 0 : B.style.transition) != null ? V : null;
    Re(() => {
      var L, D, p, R;
      (D = n.value) == null || D.style.setProperty("transform", ((L = x.value) == null ? void 0 : L.transform) || "none"), (R = n.value) == null || R.style.setProperty("transition", ((p = x.value) == null ? void 0 : p.transition) || null);
    }), it(() => {
      var L, D;
      (L = n.value) == null || L.style.setProperty("transform", P), (D = n.value) == null || D.style.setProperty("transition", T);
    });
  }), {
    isDragging: m,
    dragProgress: g,
    dragStyles: x
  };
}
function Bn() {
  throw new Error();
}
const bb = ["start", "end", "left", "right", "top", "bottom"], Sb = M(v(v(v(v(v(v(v(v(v({
  color: String,
  disableResizeWatcher: Boolean,
  disableRouteWatcher: Boolean,
  expandOnHover: Boolean,
  floating: Boolean,
  modelValue: {
    type: Boolean,
    default: null
  },
  permanent: Boolean,
  rail: {
    type: Boolean,
    default: null
  },
  railWidth: {
    type: [Number, String],
    default: 56
  },
  scrim: {
    type: [Boolean, String],
    default: !0
  },
  image: String,
  temporary: Boolean,
  persistent: Boolean,
  touchless: Boolean,
  width: {
    type: [Number, String],
    default: 256
  },
  location: {
    type: String,
    default: "start",
    validator: (e) => bb.includes(e)
  },
  sticky: Boolean
}, vt()), te()), Wi()), yn({
  mobile: null
})), Xe()), bn()), De()), me({
  tag: "nav"
})), Se()), "VNavigationDrawer"), kb = N()({
  name: "VNavigationDrawer",
  props: Sb(),
  emits: {
    "update:modelValue": (e) => !0,
    "update:rail": (e) => !0
  },
  setup(e, n) {
    let {
      attrs: t,
      emit: a,
      slots: l
    } = n;
    const {
      isRtl: i
    } = je(), {
      themeClasses: o
    } = Pe(e), {
      borderClasses: r
    } = bt(e), {
      backgroundColorClasses: u,
      backgroundColorStyles: c
    } = Le($(e, "color")), {
      elevationClasses: d
    } = et(e), {
      displayClasses: f,
      mobile: m
    } = ht(e), {
      roundedClasses: g
    } = Oe(e), y = Ps(), b = oe(e, "modelValue", null, (O) => !!O), {
      ssrBootStyles: h
    } = kn(), {
      scopeId: k
    } = In(), C = G(), I = Z(!1), {
      runOpenDelay: A,
      runCloseDelay: x
    } = ji(e, (O) => {
      I.value = O;
    }), P = S(() => e.rail && e.expandOnHover && I.value ? Number(e.width) : Number(e.rail ? e.railWidth : e.width)), T = S(() => Fl(e.location, i.value)), w = S(() => e.persistent), _ = S(() => !e.permanent && (m.value || e.temporary)), B = S(() => e.sticky && !_.value && T.value !== "bottom");
    ct(() => e.expandOnHover && e.rail != null, () => {
      Q(I, (O) => a("update:rail", !O));
    }), ct(() => !e.disableResizeWatcher, () => {
      Q(_, (O) => !e.permanent && _e(() => b.value = !O));
    }), ct(() => !e.disableRouteWatcher && !!y, () => {
      Q(y.currentRoute, () => _.value && (b.value = !1));
    }), Q(() => e.permanent, (O) => {
      O && (b.value = !0);
    }), e.modelValue == null && !_.value && (b.value = e.permanent || !m.value);
    const {
      isDragging: V,
      dragProgress: L
    } = yb({
      el: C,
      isActive: b,
      isTemporary: _,
      width: P,
      touchless: $(e, "touchless"),
      position: T
    }), D = S(() => {
      const O = _.value ? 0 : e.rail && e.expandOnHover ? Number(e.railWidth) : P.value;
      return V.value ? O * L.value : O;
    }), p = S(() => ["top", "bottom"].includes(e.location) ? 0 : P.value), {
      layoutItemStyles: R,
      layoutItemScrimStyles: U
    } = Sn({
      id: e.name,
      order: S(() => parseInt(e.order, 10)),
      position: T,
      layoutSize: D,
      elementSize: p,
      active: S(() => b.value || V.value),
      disableTransitions: S(() => V.value),
      absolute: S(() => (
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        e.absolute || B.value && typeof q.value != "string"
      ))
    }), {
      isStuck: q,
      stickyStyles: K
    } = vb({
      rootEl: C,
      isSticky: B,
      layoutItemStyles: R
    }), E = Le(S(() => typeof e.scrim == "string" ? e.scrim : null)), F = S(() => v(v({}, V.value ? {
      opacity: L.value * 0.2,
      transition: "none"
    } : void 0), U.value));
    return Ee({
      VList: {
        bgColor: "transparent"
      }
    }), z(() => {
      const O = l.image || e.image;
      return s(re, null, [s(e.tag, H({
        ref: C,
        onMouseenter: A,
        onMouseleave: x,
        class: ["v-navigation-drawer", `v-navigation-drawer--${T.value}`, {
          "v-navigation-drawer--expand-on-hover": e.expandOnHover,
          "v-navigation-drawer--floating": e.floating,
          "v-navigation-drawer--is-hovering": I.value,
          "v-navigation-drawer--rail": e.rail,
          "v-navigation-drawer--temporary": _.value,
          "v-navigation-drawer--persistent": w.value,
          "v-navigation-drawer--active": b.value,
          "v-navigation-drawer--sticky": B.value
        }, o.value, u.value, r.value, f.value, d.value, g.value, e.class],
        style: [c.value, R.value, h.value, K.value, e.style, ["top", "bottom"].includes(T.value) ? {
          height: "auto"
        } : {}]
      }, k, t), {
        default: () => {
          var Y, ie, ne;
          return [O && s("div", {
            key: "image",
            class: "v-navigation-drawer__img"
          }, [l.image ? s(he, {
            key: "image-defaults",
            disabled: !e.image,
            defaults: {
              VImg: {
                alt: "",
                cover: !0,
                height: "inherit",
                src: e.image
              }
            }
          }, l.image) : s(Ft, {
            key: "image-img",
            alt: "",
            cover: !0,
            height: "inherit",
            src: e.image
          }, null)]), l.prepend && s("div", {
            class: "v-navigation-drawer__prepend"
          }, [(Y = l.prepend) == null ? void 0 : Y.call(l)]), s("div", {
            class: "v-navigation-drawer__content"
          }, [(ie = l.default) == null ? void 0 : ie.call(l)]), l.append && s("div", {
            class: "v-navigation-drawer__append"
          }, [(ne = l.append) == null ? void 0 : ne.call(l)])];
        }
      }), s(Wt, {
        name: "fade-transition"
      }, {
        default: () => [_.value && (V.value || b.value) && !!e.scrim && s("div", H({
          class: ["v-navigation-drawer__scrim", E.backgroundColorClasses.value],
          style: [F.value, E.backgroundColorStyles.value],
          onClick: () => {
            w.value || (b.value = !1);
          }
        }, k), null)]
      })]);
    }), {
      isStuck: q
    };
  }
}), Cb = gt({
  name: "VNoSsr",
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = cu();
    return () => {
      var l;
      return a.value && ((l = t.default) == null ? void 0 : l.call(t));
    };
  }
}), xb = M(v(v(v({
  autofocus: Boolean,
  divider: String,
  focusAll: Boolean,
  label: {
    type: String,
    default: "$vuetify.input.otp"
  },
  length: {
    type: [Number, String],
    default: 6
  },
  modelValue: {
    type: [Number, String],
    default: void 0
  },
  placeholder: String,
  type: {
    type: String,
    default: "number"
  }
}, Ye()), ma()), Wa(ya({
  variant: "outlined"
}), ["baseColor", "bgColor", "class", "color", "disabled", "error", "loading", "rounded", "style", "theme", "variant"])), "VOtpInput"), wb = N()({
  name: "VOtpInput",
  props: xb(),
  emits: {
    finish: (e) => !0,
    "update:focused": (e) => !0,
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      attrs: t,
      emit: a,
      slots: l
    } = n;
    const {
      dimensionStyles: i
    } = Ge(e), {
      isFocused: o,
      focus: r,
      blur: u
    } = Nt(e), c = oe(e, "modelValue", "", (w) => w == null ? [] : String(w).split(""), (w) => w.join("")), {
      t: d
    } = $e(), f = S(() => Number(e.length)), m = S(() => Array(f.value).fill(0)), g = G(-1), y = G(), b = G([]), h = S(() => b.value[g.value]);
    function k() {
      if (T(h.value.value)) {
        h.value.value = "";
        return;
      }
      const w = c.value.slice(), _ = h.value.value;
      w[g.value] = _;
      let B = null;
      g.value > c.value.length ? B = c.value.length + 1 : g.value + 1 !== f.value && (B = "next"), c.value = w, B && an(y.value, B);
    }
    function C(w) {
      const _ = c.value.slice(), B = g.value;
      let V = null;
      ["ArrowLeft", "ArrowRight", "Backspace", "Delete"].includes(w.key) && (w.preventDefault(), w.key === "ArrowLeft" ? V = "prev" : w.key === "ArrowRight" ? V = "next" : ["Backspace", "Delete"].includes(w.key) && (_[g.value] = "", c.value = _, g.value > 0 && w.key === "Backspace" ? V = "prev" : requestAnimationFrame(() => {
        var L;
        (L = b.value[B]) == null || L.select();
      })), requestAnimationFrame(() => {
        V != null && an(y.value, V);
      }));
    }
    function I(w, _) {
      var V, L, D;
      _.preventDefault(), _.stopPropagation();
      const B = (L = (V = _ == null ? void 0 : _.clipboardData) == null ? void 0 : V.getData("Text").slice(0, f.value)) != null ? L : "";
      T(B) || (c.value = B.split(""), (D = b.value) == null || D[w].blur());
    }
    function A() {
      c.value = [];
    }
    function x(w, _) {
      r(), g.value = _;
    }
    function P() {
      u(), g.value = -1;
    }
    function T(w) {
      return e.type === "number" && /[^0-9]/g.test(w);
    }
    return Ee({
      VField: {
        color: S(() => e.color),
        bgColor: S(() => e.color),
        baseColor: S(() => e.baseColor),
        disabled: S(() => e.disabled),
        error: S(() => e.error),
        variant: S(() => e.variant)
      }
    }, {
      scoped: !0
    }), Q(c, (w) => {
      w.length === f.value && a("finish", w.join(""));
    }, {
      deep: !0
    }), Q(g, (w) => {
      w < 0 || _e(() => {
        var _;
        (_ = b.value[w]) == null || _.select();
      });
    }), z(() => {
      var B;
      const [w, _] = Gt(t);
      return s("div", H({
        class: ["v-otp-input", {
          "v-otp-input--divided": !!e.divider
        }, e.class],
        style: [e.style]
      }, w), [s("div", {
        ref: y,
        class: "v-otp-input__content",
        style: [i.value]
      }, [m.value.map((V, L) => s(re, null, [e.divider && L !== 0 && s("span", {
        class: "v-otp-input__divider"
      }, [e.divider]), s(Un, {
        focused: o.value && e.focusAll || g.value === L,
        key: L
      }, J(v({}, l), {
        loader: void 0,
        default: () => s("input", {
          ref: (D) => b.value[L] = D,
          "aria-label": d(e.label, L + 1),
          autofocus: L === 0 && e.autofocus,
          autocomplete: "one-time-code",
          class: ["v-otp-input__field"],
          disabled: e.disabled,
          inputmode: e.type === "number" ? "numeric" : "text",
          min: e.type === "number" ? 0 : void 0,
          maxlength: "1",
          placeholder: e.placeholder,
          type: e.type === "number" ? "text" : e.type,
          value: c.value[L],
          onInput: k,
          onFocus: (D) => x(D, L),
          onBlur: P,
          onKeydown: C,
          onPaste: (D) => I(L, D)
        }, null)
      }))])), s("input", H({
        class: "v-otp-input-input",
        type: "hidden"
      }, _, {
        value: c.value.join("")
      }), null), s(At, {
        contained: !0,
        "content-class": "v-otp-input__loader",
        "model-value": !!e.loading,
        persistent: !0
      }, {
        default: () => {
          var V, L;
          return [(L = (V = l.loader) == null ? void 0 : V.call(l)) != null ? L : s(On, {
            color: typeof e.loading == "boolean" ? void 0 : e.loading,
            indeterminate: !0,
            size: "24",
            width: "2"
          }, null)];
        }
      }), (B = l.default) == null ? void 0 : B.call(l)])]);
    }), {
      blur: () => {
        var w;
        (w = b.value) == null || w.some((_) => _.blur());
      },
      focus: () => {
        var w;
        (w = b.value) == null || w[0].focus();
      },
      reset: A,
      isFocused: o
    };
  }
});
function Vb(e) {
  return Math.floor(Math.abs(e)) * Math.sign(e);
}
const Pb = M(v({
  scale: {
    type: [Number, String],
    default: 0.5
  }
}, te()), "VParallax"), Ib = N()({
  name: "VParallax",
  props: Pb(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      intersectionRef: a,
      isIntersecting: l
    } = el(), {
      resizeRef: i,
      contentRect: o
    } = Vt(), {
      height: r
    } = ht(), u = G();
    Re(() => {
      var g;
      a.value = i.value = (g = u.value) == null ? void 0 : g.$el;
    });
    let c;
    Q(l, (g) => {
      g ? (c = Ii(a.value), c = c === document.scrollingElement ? document : c, c.addEventListener("scroll", m, {
        passive: !0
      }), m()) : c.removeEventListener("scroll", m);
    }), ot(() => {
      c == null || c.removeEventListener("scroll", m);
    }), Q(r, m), Q(() => {
      var g;
      return (g = o.value) == null ? void 0 : g.height;
    }, m);
    const d = S(() => 1 - Ne(+e.scale));
    let f = -1;
    function m() {
      l.value && (cancelAnimationFrame(f), f = requestAnimationFrame(() => {
        var x;
        const g = ((x = u.value) == null ? void 0 : x.$el).querySelector(".v-img__img");
        if (!g) return;
        const y = c instanceof Document ? document.documentElement.clientHeight : c.clientHeight, b = c instanceof Document ? window.scrollY : c.scrollTop, h = a.value.getBoundingClientRect().top + b, k = o.value.height, C = h + (k - y) / 2, I = Vb((b - C) * d.value), A = Math.max(1, (d.value * (y - k) + k) / k);
        g.style.setProperty("transform", `translateY(${I}px) scale(${A})`);
      }));
    }
    return z(() => s(Ft, {
      class: ["v-parallax", {
        "v-parallax--active": l.value
      }, e.class],
      style: e.style,
      ref: u,
      cover: !0,
      onLoadstart: m,
      onLoad: m
    }, t)), {};
  }
}), _b = M(v({}, ll({
  falseIcon: "$radioOff",
  trueIcon: "$radioOn"
})), "VRadio"), Ab = N()({
  name: "VRadio",
  props: _b(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    return z(() => {
      const a = Yt.filterProps(e);
      return s(Yt, H(a, {
        class: ["v-radio", e.class],
        style: e.style,
        type: "radio"
      }), t);
    }), {};
  }
}), Lb = M(J(v(v({
  height: {
    type: [Number, String],
    default: "auto"
  }
}, Ht()), We(Oi(), ["multiple"])), {
  trueIcon: {
    type: ve,
    default: "$radioOn"
  },
  falseIcon: {
    type: ve,
    default: "$radioOff"
  },
  type: {
    type: String,
    default: "radio"
  }
}), "VRadioGroup"), Tb = N()({
  name: "VRadioGroup",
  inheritAttrs: !1,
  props: Lb(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      attrs: t,
      slots: a
    } = n;
    const l = Qe(), i = S(() => e.id || `radio-group-${l}`), o = oe(e, "modelValue");
    return z(() => {
      const [r, u] = Gt(t), c = nt.filterProps(e), d = Yt.filterProps(e), f = a.label ? a.label({
        label: e.label,
        props: {
          for: i.value
        }
      }) : e.label;
      return s(nt, H({
        class: ["v-radio-group", e.class],
        style: e.style
      }, r, c, {
        modelValue: o.value,
        "onUpdate:modelValue": (m) => o.value = m,
        id: i.value
      }), J(v({}, a), {
        default: (m) => {
          let {
            id: g,
            messagesId: y,
            isDisabled: b,
            isReadonly: h
          } = m;
          return s(re, null, [f && s(Yn, {
            id: g.value
          }, {
            default: () => [f]
          }), s(Fs, H(d, {
            id: g.value,
            "aria-describedby": y.value,
            defaultsTarget: "VRadio",
            trueIcon: e.trueIcon,
            falseIcon: e.falseIcon,
            type: e.type,
            disabled: b.value,
            readonly: h.value,
            "aria-labelledby": f ? g.value : void 0,
            multiple: !1
          }, u, {
            modelValue: o.value,
            "onUpdate:modelValue": (k) => o.value = k
          }), a)]);
        }
      }));
    }), {};
  }
}), Bb = M(J(v(v(v({}, ma()), Ht()), Bu()), {
  strict: Boolean,
  modelValue: {
    type: Array,
    default: () => [0, 0]
  }
}), "VRangeSlider"), Db = N()({
  name: "VRangeSlider",
  props: Bb(),
  emits: {
    "update:focused": (e) => !0,
    "update:modelValue": (e) => !0,
    end: (e) => !0,
    start: (e) => !0
  },
  setup(e, n) {
    let {
      slots: t,
      emit: a
    } = n;
    const l = G(), i = G(), o = G(), {
      rtlClasses: r
    } = je();
    function u(B) {
      if (!l.value || !i.value) return;
      const V = ni(B, l.value.$el, e.direction), L = ni(B, i.value.$el, e.direction), D = Math.abs(V), p = Math.abs(L);
      return D < p || D === p && V < 0 ? l.value.$el : i.value.$el;
    }
    const c = Du(e), d = oe(e, "modelValue", void 0, (B) => B != null && B.length ? B.map((V) => c.roundValue(V)) : [0, 0]), {
      activeThumbRef: f,
      hasLabels: m,
      max: g,
      min: y,
      mousePressed: b,
      onSliderMousedown: h,
      onSliderTouchstart: k,
      position: C,
      trackContainerRef: I,
      readonly: A
    } = Mu({
      props: e,
      steps: c,
      onSliderStart: () => {
        a("start", d.value);
      },
      onSliderEnd: (B) => {
        var D;
        let {
          value: V
        } = B;
        const L = f.value === ((D = l.value) == null ? void 0 : D.$el) ? [V, d.value[1]] : [d.value[0], V];
        !e.strict && L[0] < L[1] && (d.value = L), a("end", d.value);
      },
      onSliderMove: (B) => {
        var p, R, U, q;
        let {
          value: V
        } = B;
        const [L, D] = d.value;
        !e.strict && L === D && L !== y.value && (f.value = V > L ? (p = i.value) == null ? void 0 : p.$el : (R = l.value) == null ? void 0 : R.$el, (U = f.value) == null || U.focus()), f.value === ((q = l.value) == null ? void 0 : q.$el) ? d.value = [Math.min(V, D), D] : d.value = [L, Math.max(L, V)];
      },
      getActiveThumb: u
    }), {
      isFocused: x,
      focus: P,
      blur: T
    } = Nt(e), w = S(() => C(d.value[0])), _ = S(() => C(d.value[1]));
    return z(() => {
      const B = nt.filterProps(e), V = !!(e.label || t.label || t.prepend);
      return s(nt, H({
        class: ["v-slider", "v-range-slider", {
          "v-slider--has-labels": !!t["tick-label"] || m.value,
          "v-slider--focused": x.value,
          "v-slider--pressed": b.value,
          "v-slider--disabled": e.disabled
        }, r.value, e.class],
        style: e.style,
        ref: o
      }, B, {
        focused: x.value
      }), J(v({}, t), {
        prepend: V ? (L) => {
          var D, p, R;
          return s(re, null, [(p = (D = t.label) == null ? void 0 : D.call(t, L)) != null ? p : e.label ? s(Yn, {
            class: "v-slider__label",
            text: e.label
          }, null) : void 0, (R = t.prepend) == null ? void 0 : R.call(t, L)]);
        } : void 0,
        default: (L) => {
          var R, U;
          let {
            id: D,
            messagesId: p
          } = L;
          return s("div", {
            class: "v-slider__container",
            onMousedown: A.value ? void 0 : h,
            onTouchstartPassive: A.value ? void 0 : k
          }, [s("input", {
            id: `${D.value}_start`,
            name: e.name || D.value,
            disabled: !!e.disabled,
            readonly: !!e.readonly,
            tabindex: "-1",
            value: d.value[0]
          }, null), s("input", {
            id: `${D.value}_stop`,
            name: e.name || D.value,
            disabled: !!e.disabled,
            readonly: !!e.readonly,
            tabindex: "-1",
            value: d.value[1]
          }, null), s(pu, {
            ref: I,
            start: w.value,
            stop: _.value
          }, {
            "tick-label": t["tick-label"]
          }), s(ai, {
            ref: l,
            "aria-describedby": p.value,
            focused: x && f.value === ((R = l.value) == null ? void 0 : R.$el),
            modelValue: d.value[0],
            "onUpdate:modelValue": (q) => d.value = [q, d.value[1]],
            onFocus: (q) => {
              var K, E, F, O;
              P(), f.value = (K = l.value) == null ? void 0 : K.$el, d.value[0] === d.value[1] && d.value[1] === y.value && q.relatedTarget !== ((E = i.value) == null ? void 0 : E.$el) && ((F = l.value) == null || F.$el.blur(), (O = i.value) == null || O.$el.focus());
            },
            onBlur: () => {
              T(), f.value = void 0;
            },
            min: y.value,
            max: d.value[1],
            position: w.value,
            ripple: e.ripple
          }, {
            "thumb-label": t["thumb-label"]
          }), s(ai, {
            ref: i,
            "aria-describedby": p.value,
            focused: x && f.value === ((U = i.value) == null ? void 0 : U.$el),
            modelValue: d.value[1],
            "onUpdate:modelValue": (q) => d.value = [d.value[0], q],
            onFocus: (q) => {
              var K, E, F, O;
              P(), f.value = (K = i.value) == null ? void 0 : K.$el, d.value[0] === d.value[1] && d.value[0] === g.value && q.relatedTarget !== ((E = l.value) == null ? void 0 : E.$el) && ((F = i.value) == null || F.$el.blur(), (O = l.value) == null || O.$el.focus());
            },
            onBlur: () => {
              T(), f.value = void 0;
            },
            min: d.value[0],
            max: g.value,
            position: _.value,
            ripple: e.ripple
          }, {
            "thumb-label": t["thumb-label"]
          })]);
        }
      }));
    }), {};
  }
}), Mb = M(v(v(v(v(v({
  name: String,
  itemAriaLabel: {
    type: String,
    default: "$vuetify.rating.ariaLabel.item"
  },
  activeColor: String,
  color: String,
  clearable: Boolean,
  disabled: Boolean,
  emptyIcon: {
    type: ve,
    default: "$ratingEmpty"
  },
  fullIcon: {
    type: ve,
    default: "$ratingFull"
  },
  halfIncrements: Boolean,
  hover: Boolean,
  length: {
    type: [Number, String],
    default: 5
  },
  readonly: Boolean,
  modelValue: {
    type: [Number, String],
    default: 0
  },
  itemLabels: Array,
  itemLabelPosition: {
    type: String,
    default: "top",
    validator: (e) => ["top", "bottom"].includes(e)
  },
  ripple: Boolean
}, te()), Ze()), Dt()), me()), Se()), "VRating"), pb = N()({
  name: "VRating",
  props: Mb(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      t: a
    } = $e(), {
      themeClasses: l
    } = Pe(e), i = oe(e, "modelValue"), o = S(() => Ne(parseFloat(i.value), 0, +e.length)), r = S(() => _t(Number(e.length), 1)), u = S(() => r.value.flatMap((b) => e.halfIncrements ? [b - 0.5, b] : [b])), c = Z(-1), d = S(() => u.value.map((b) => {
      var T;
      const h = e.hover && c.value > -1, k = o.value >= b, C = c.value >= b, A = (h ? C : k) ? e.fullIcon : e.emptyIcon, x = (T = e.activeColor) != null ? T : e.color, P = k || C ? x : e.color;
      return {
        isFilled: k,
        isHovered: C,
        icon: A,
        color: P
      };
    })), f = S(() => [0, ...u.value].map((b) => {
      function h() {
        c.value = b;
      }
      function k() {
        c.value = -1;
      }
      function C() {
        e.disabled || e.readonly || (i.value = o.value === b && e.clearable ? 0 : b);
      }
      return {
        onMouseenter: e.hover ? h : void 0,
        onMouseleave: e.hover ? k : void 0,
        onClick: C
      };
    })), m = S(() => {
      var b;
      return (b = e.name) != null ? b : `v-rating-${Qe()}`;
    });
    function g(b) {
      var w, _;
      let {
        value: h,
        index: k,
        showStar: C = !0
      } = b;
      const {
        onMouseenter: I,
        onMouseleave: A,
        onClick: x
      } = f.value[k + 1], P = `${m.value}-${String(h).replace(".", "-")}`, T = {
        color: (w = d.value[k]) == null ? void 0 : w.color,
        density: e.density,
        disabled: e.disabled,
        icon: (_ = d.value[k]) == null ? void 0 : _.icon,
        ripple: e.ripple,
        size: e.size,
        variant: "plain"
      };
      return s(re, null, [s("label", {
        for: P,
        class: {
          "v-rating__item--half": e.halfIncrements && h % 1 > 0,
          "v-rating__item--full": e.halfIncrements && h % 1 === 0
        },
        onMouseenter: I,
        onMouseleave: A,
        onClick: x
      }, [s("span", {
        class: "v-rating__hidden"
      }, [a(e.itemAriaLabel, h, e.length)]), C ? t.item ? t.item(J(v({}, d.value[k]), {
        props: T,
        value: h,
        index: k,
        rating: o.value
      })) : s(we, H({
        "aria-label": a(e.itemAriaLabel, h, e.length)
      }, T), null) : void 0]), s("input", {
        class: "v-rating__hidden",
        name: m.value,
        id: P,
        type: "radio",
        value: h,
        checked: o.value === h,
        tabindex: -1,
        readonly: e.readonly,
        disabled: e.disabled
      }, null)]);
    }
    function y(b) {
      return t["item-label"] ? t["item-label"](b) : b.label ? s("span", null, [b.label]) : s("span", null, [jt(" ")]);
    }
    return z(() => {
      var h;
      const b = !!((h = e.itemLabels) != null && h.length) || t["item-label"];
      return s(e.tag, {
        class: ["v-rating", {
          "v-rating--hover": e.hover,
          "v-rating--readonly": e.readonly
        }, l.value, e.class],
        style: e.style
      }, {
        default: () => [s(g, {
          value: 0,
          index: -1,
          showStar: !1
        }, null), r.value.map((k, C) => {
          var I, A;
          return s("div", {
            class: "v-rating__wrapper"
          }, [b && e.itemLabelPosition === "top" ? y({
            value: k,
            index: C,
            label: (I = e.itemLabels) == null ? void 0 : I[C]
          }) : void 0, s("div", {
            class: "v-rating__item"
          }, [e.halfIncrements ? s(re, null, [s(g, {
            value: k - 0.5,
            index: C * 2
          }, null), s(g, {
            value: k,
            index: C * 2 + 1
          }, null)]) : s(g, {
            value: k,
            index: C
          }, null)]), b && e.itemLabelPosition === "bottom" ? y({
            value: k,
            index: C,
            label: (A = e.itemLabels) == null ? void 0 : A[C]
          }) : void 0]);
        })]
      });
    }), {};
  }
}), Eb = {
  actions: "button@2",
  article: "heading, paragraph",
  avatar: "avatar",
  button: "button",
  card: "image, heading",
  "card-avatar": "image, list-item-avatar",
  chip: "chip",
  "date-picker": "list-item, heading, divider, date-picker-options, date-picker-days, actions",
  "date-picker-options": "text, avatar@2",
  "date-picker-days": "avatar@28",
  divider: "divider",
  heading: "heading",
  image: "image",
  "list-item": "text",
  "list-item-avatar": "avatar, text",
  "list-item-two-line": "sentences",
  "list-item-avatar-two-line": "avatar, sentences",
  "list-item-three-line": "paragraph",
  "list-item-avatar-three-line": "avatar, paragraph",
  ossein: "ossein",
  paragraph: "text@3",
  sentences: "text@2",
  subtitle: "text",
  table: "table-heading, table-thead, table-tbody, table-tfoot",
  "table-heading": "chip, text",
  "table-thead": "heading@6",
  "table-tbody": "table-row-divider@6",
  "table-row-divider": "table-row, divider",
  "table-row": "text@6",
  "table-tfoot": "text@2, avatar@2",
  text: "text"
};
function Fb(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
  return s("div", {
    class: ["v-skeleton-loader__bone", `v-skeleton-loader__${e}`]
  }, [n]);
}
function Sr(e) {
  const [n, t] = e.split("@");
  return Array.from({
    length: t
  }).map(() => xl(n));
}
function xl(e) {
  let n = [];
  if (!e) return n;
  const t = Eb[e];
  if (e !== t) {
    if (e.includes(",")) return kr(e);
    if (e.includes("@")) return Sr(e);
    t.includes(",") ? n = kr(t) : t.includes("@") ? n = Sr(t) : t && n.push(xl(t));
  }
  return [Fb(e, n)];
}
function kr(e) {
  return e.replace(/\s/g, "").split(",").map(xl);
}
const $b = M(v(v(v({
  boilerplate: Boolean,
  color: String,
  loading: Boolean,
  loadingText: {
    type: String,
    default: "$vuetify.loading"
  },
  type: {
    type: [String, Array],
    default: "ossein"
  }
}, Ye()), Xe()), Se()), "VSkeletonLoader"), Ob = N()({
  name: "VSkeletonLoader",
  props: $b(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      backgroundColorClasses: a,
      backgroundColorStyles: l
    } = Le($(e, "color")), {
      dimensionStyles: i
    } = Ge(e), {
      elevationClasses: o
    } = et(e), {
      themeClasses: r
    } = Pe(e), {
      t: u
    } = $e(), c = S(() => xl(Me(e.type).join(",")));
    return z(() => {
      var m;
      const d = !t.default || e.loading, f = e.boilerplate || !d ? {} : {
        ariaLive: "polite",
        ariaLabel: u(e.loadingText),
        role: "alert"
      };
      return s("div", H({
        class: ["v-skeleton-loader", {
          "v-skeleton-loader--boilerplate": e.boilerplate
        }, r.value, a.value, o.value],
        style: [l.value, d ? i.value : {}]
      }, f), [d ? c.value : (m = t.default) == null ? void 0 : m.call(t)]);
    }), {};
  }
}), Rb = N()({
  name: "VSlideGroupItem",
  props: wn(),
  emits: {
    "group:selected": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = Vn(e, Ys);
    return () => {
      var l;
      return (l = t.default) == null ? void 0 : l.call(t, {
        isSelected: a.isSelected.value,
        select: a.select,
        toggle: a.toggle,
        selectedClass: a.selectedClass.value
      });
    };
  }
});
function Nb(e) {
  const n = Z(e());
  let t = -1;
  function a() {
    clearInterval(t);
  }
  function l() {
    a(), _e(() => n.value = e());
  }
  function i(o) {
    const r = o ? getComputedStyle(o) : {
      transitionDuration: 0.2
    }, u = parseFloat(r.transitionDuration) * 1e3 || 200;
    if (a(), n.value <= 0) return;
    const c = performance.now();
    t = window.setInterval(() => {
      const d = performance.now() - c + u;
      n.value = Math.max(e() - d, 0), n.value <= 0 && a();
    }, u);
  }
  return it(a), {
    clear: a,
    time: n,
    start: i,
    reset: l
  };
}
const Hb = M(v(v(v(v(v(v({
  multiLine: Boolean,
  text: String,
  timer: [Boolean, String],
  timeout: {
    type: [Number, String],
    default: 5e3
  },
  vertical: Boolean
}, Rt({
  location: "bottom"
})), Wn()), De()), Ct()), Se()), We(ha({
  transition: "v-snackbar-transition"
}), ["persistent", "noClickAnimation", "scrim", "scrollStrategy"])), "VSnackbar"), zb = N()({
  name: "VSnackbar",
  props: Hb(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = oe(e, "modelValue"), {
      positionClasses: l
    } = jn(e), {
      scopeId: i
    } = In(), {
      themeClasses: o
    } = Pe(e), {
      colorClasses: r,
      colorStyles: u,
      variantClasses: c
    } = Cn(e), {
      roundedClasses: d
    } = Oe(e), f = Nb(() => Number(e.timeout)), m = G(), g = G(), y = Z(!1), b = Z(0), h = G(), k = Ce(ta, void 0);
    ct(() => !!k, () => {
      const V = Bi();
      Re(() => {
        h.value = V.mainStyles.value;
      });
    }), Q(a, I), Q(() => e.timeout, I), rt(() => {
      a.value && I();
    });
    let C = -1;
    function I() {
      f.reset(), window.clearTimeout(C);
      const V = Number(e.timeout);
      if (!a.value || V === -1) return;
      const L = bi(g.value);
      f.start(L), C = window.setTimeout(() => {
        a.value = !1;
      }, V);
    }
    function A() {
      f.reset(), window.clearTimeout(C);
    }
    function x() {
      y.value = !0, A();
    }
    function P() {
      y.value = !1, I();
    }
    function T(V) {
      b.value = V.touches[0].clientY;
    }
    function w(V) {
      Math.abs(b.value - V.changedTouches[0].clientY) > 50 && (a.value = !1);
    }
    function _() {
      y.value && P();
    }
    const B = S(() => e.location.split(" ").reduce((V, L) => (V[`v-snackbar--${L}`] = !0, V), {}));
    return z(() => {
      const V = At.filterProps(e), L = !!(t.default || t.text || e.text);
      return s(At, H({
        ref: m,
        class: ["v-snackbar", {
          "v-snackbar--active": a.value,
          "v-snackbar--multi-line": e.multiLine && !e.vertical,
          "v-snackbar--timer": !!e.timer,
          "v-snackbar--vertical": e.vertical
        }, B.value, l.value, e.class],
        style: [h.value, e.style]
      }, V, {
        modelValue: a.value,
        "onUpdate:modelValue": (D) => a.value = D,
        contentProps: H({
          class: ["v-snackbar__wrapper", o.value, r.value, d.value, c.value],
          style: [u.value],
          onPointerenter: x,
          onPointerleave: P
        }, V.contentProps),
        persistent: !0,
        noClickAnimation: !0,
        scrim: !1,
        scrollStrategy: "none",
        _disableGlobalStack: !0,
        onTouchstartPassive: T,
        onTouchend: w,
        onAfterLeave: _
      }, i), {
        default: () => {
          var D, p, R;
          return [Ut(!1, "v-snackbar"), e.timer && !y.value && s("div", {
            key: "timer",
            class: "v-snackbar__timer"
          }, [s(tl, {
            ref: g,
            color: typeof e.timer == "string" ? e.timer : "info",
            max: e.timeout,
            "model-value": f.time.value
          }, null)]), L && s("div", {
            key: "content",
            class: "v-snackbar__content",
            role: "status",
            "aria-live": "polite"
          }, [(p = (D = t.text) == null ? void 0 : D.call(t)) != null ? p : e.text, (R = t.default) == null ? void 0 : R.call(t)]), t.actions && s(he, {
            defaults: {
              VBtn: {
                variant: "text",
                ripple: !1,
                slim: !0
              }
            }
          }, {
            default: () => [s("div", {
              class: "v-snackbar__actions"
            }, [t.actions({
              isActive: a
            })])]
          })];
        },
        activator: t.activator
      });
    }), xt({}, m);
  }
}), Vc = M({
  autoDraw: Boolean,
  autoDrawDuration: [Number, String],
  autoDrawEasing: {
    type: String,
    default: "ease"
  },
  color: String,
  gradient: {
    type: Array,
    default: () => []
  },
  gradientDirection: {
    type: String,
    validator: (e) => ["top", "bottom", "left", "right"].includes(e),
    default: "top"
  },
  height: {
    type: [String, Number],
    default: 75
  },
  labels: {
    type: Array,
    default: () => []
  },
  labelSize: {
    type: [Number, String],
    default: 7
  },
  lineWidth: {
    type: [String, Number],
    default: 4
  },
  id: String,
  itemValue: {
    type: String,
    default: "value"
  },
  modelValue: {
    type: Array,
    default: () => []
  },
  min: [String, Number],
  max: [String, Number],
  padding: {
    type: [String, Number],
    default: 8
  },
  showLabels: Boolean,
  smooth: Boolean,
  width: {
    type: [Number, String],
    default: 300
  }
}, "Line"), Pc = M(v({
  autoLineWidth: Boolean
}, Vc()), "VBarline"), Cr = N()({
  name: "VBarline",
  props: Pc(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = Qe(), l = S(() => e.id || `barline-${a}`), i = S(() => Number(e.autoDrawDuration) || 500), o = S(() => !!(e.showLabels || e.labels.length > 0 || t != null && t.label)), r = S(() => parseFloat(e.lineWidth) || 4), u = S(() => Math.max(e.modelValue.length * r.value, Number(e.width))), c = S(() => ({
      minX: 0,
      maxX: u.value,
      minY: 0,
      maxY: parseInt(e.height, 10)
    })), d = S(() => e.modelValue.map((b) => qe(b, e.itemValue, b)));
    function f(b, h) {
      const {
        minX: k,
        maxX: C,
        minY: I,
        maxY: A
      } = h, x = b.length;
      let P = e.max != null ? Number(e.max) : Math.max(...b), T = e.min != null ? Number(e.min) : Math.min(...b);
      T > 0 && e.min == null && (T = 0), P < 0 && e.max == null && (P = 0);
      const w = C / x, _ = (A - I) / (P - T || 1), B = A - Math.abs(T * _);
      return b.map((V, L) => {
        const D = Math.abs(_ * V);
        return {
          x: k + L * w,
          y: B - D + +(V < 0) * D,
          height: D,
          value: V
        };
      });
    }
    const m = S(() => {
      const b = [], h = f(d.value, c.value), k = h.length;
      for (let C = 0; b.length < k; C++) {
        const I = h[C];
        let A = e.labels[C];
        A || (A = typeof I == "object" ? I.value : I), b.push({
          x: I.x,
          value: String(A)
        });
      }
      return b;
    }), g = S(() => f(d.value, c.value)), y = S(() => (Math.abs(g.value[0].x - g.value[1].x) - r.value) / 2);
    z(() => {
      const b = e.gradient.slice().length ? e.gradient.slice().reverse() : [""];
      return s("svg", {
        display: "block"
      }, [s("defs", null, [s("linearGradient", {
        id: l.value,
        gradientUnits: "userSpaceOnUse",
        x1: e.gradientDirection === "left" ? "100%" : "0",
        y1: e.gradientDirection === "top" ? "100%" : "0",
        x2: e.gradientDirection === "right" ? "100%" : "0",
        y2: e.gradientDirection === "bottom" ? "100%" : "0"
      }, [b.map((h, k) => s("stop", {
        offset: k / Math.max(b.length - 1, 1),
        "stop-color": h || "currentColor"
      }, null))])]), s("clipPath", {
        id: `${l.value}-clip`
      }, [g.value.map((h) => s("rect", {
        x: h.x + y.value,
        y: h.y,
        width: r.value,
        height: h.height,
        rx: typeof e.smooth == "number" ? e.smooth : e.smooth ? 2 : 0,
        ry: typeof e.smooth == "number" ? e.smooth : e.smooth ? 2 : 0
      }, [e.autoDraw && s(re, null, [s("animate", {
        attributeName: "y",
        from: h.y + h.height,
        to: h.y,
        dur: `${i.value}ms`,
        fill: "freeze"
      }, null), s("animate", {
        attributeName: "height",
        from: "0",
        to: h.height,
        dur: `${i.value}ms`,
        fill: "freeze"
      }, null)])]))]), o.value && s("g", {
        key: "labels",
        style: {
          textAnchor: "middle",
          dominantBaseline: "mathematical",
          fill: "currentColor"
        }
      }, [m.value.map((h, k) => {
        var C, I;
        return s("text", {
          x: h.x + y.value + r.value / 2,
          y: parseInt(e.height, 10) - 2 + (parseInt(e.labelSize, 10) || 7 * 0.75),
          "font-size": Number(e.labelSize) || 7
        }, [(I = (C = t.label) == null ? void 0 : C.call(t, {
          index: k,
          value: h.value
        })) != null ? I : h.value]);
      })]), s("g", {
        "clip-path": `url(#${l.value}-clip)`,
        fill: `url(#${l.value})`
      }, [s("rect", {
        x: 0,
        y: 0,
        width: Math.max(e.modelValue.length * r.value, Number(e.width)),
        height: e.height
      }, null)])]);
    });
  }
});
function Wb(e, n) {
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 75;
  if (e.length === 0) return "";
  const l = e.shift(), i = e[e.length - 1];
  return (t ? `M${l.x} ${a - l.x + 2} L${l.x} ${l.y}` : `M${l.x} ${l.y}`) + e.map((o, r) => {
    const u = e[r + 1], c = e[r - 1] || l, d = u && jb(u, o, c);
    if (!u || d)
      return `L${o.x} ${o.y}`;
    const f = Math.min(xr(c, o), xr(u, o)), g = f / 2 < n ? f / 2 : n, y = wr(c, o, g), b = wr(u, o, g);
    return `L${y.x} ${y.y}S${o.x} ${o.y} ${b.x} ${b.y}`;
  }).join("") + (t ? `L${i.x} ${a - l.x + 2} Z` : "");
}
function La(e) {
  return parseInt(e, 10);
}
function jb(e, n, t) {
  return La(e.x + t.x) === La(2 * n.x) && La(e.y + t.y) === La(2 * n.y);
}
function xr(e, n) {
  return Math.sqrt(Math.pow(n.x - e.x, 2) + Math.pow(n.y - e.y, 2));
}
function wr(e, n, t) {
  const a = {
    x: e.x - n.x,
    y: e.y - n.y
  }, l = Math.sqrt(a.x * a.x + a.y * a.y), i = {
    x: a.x / l,
    y: a.y / l
  };
  return {
    x: n.x + i.x * t,
    y: n.y + i.y * t
  };
}
const Ic = M(v({
  fill: Boolean
}, Vc()), "VTrendline"), Vr = N()({
  name: "VTrendline",
  props: Ic(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = Qe(), l = S(() => e.id || `trendline-${a}`), i = S(() => Number(e.autoDrawDuration) || (e.fill ? 500 : 2e3)), o = G(0), r = G(null);
    function u(h, k) {
      const {
        minX: C,
        maxX: I,
        minY: A,
        maxY: x
      } = k, P = h.length, T = e.max != null ? Number(e.max) : Math.max(...h), w = e.min != null ? Number(e.min) : Math.min(...h), _ = (I - C) / (P - 1), B = (x - A) / (T - w || 1);
      return h.map((V, L) => ({
        x: C + L * _,
        y: x - (V - w) * B,
        value: V
      }));
    }
    const c = S(() => !!(e.showLabels || e.labels.length > 0 || t != null && t.label)), d = S(() => parseFloat(e.lineWidth) || 4), f = S(() => Number(e.width)), m = S(() => {
      const h = Number(e.padding);
      return {
        minX: h,
        maxX: f.value - h,
        minY: h,
        maxY: parseInt(e.height, 10) - h
      };
    }), g = S(() => e.modelValue.map((h) => qe(h, e.itemValue, h))), y = S(() => {
      const h = [], k = u(g.value, m.value), C = k.length;
      for (let I = 0; h.length < C; I++) {
        const A = k[I];
        let x = e.labels[I];
        x || (x = typeof A == "object" ? A.value : A), h.push({
          x: A.x,
          value: String(x)
        });
      }
      return h;
    });
    Q(() => e.modelValue, () => Ke(this, null, function* () {
      if (yield _e(), !e.autoDraw || !r.value) return;
      const h = r.value, k = h.getTotalLength();
      e.fill ? (h.style.transformOrigin = "bottom center", h.style.transition = "none", h.style.transform = "scaleY(0)", h.getBoundingClientRect(), h.style.transition = `transform ${i.value}ms ${e.autoDrawEasing}`, h.style.transform = "scaleY(1)") : (h.style.strokeDasharray = `${k}`, h.style.strokeDashoffset = `${k}`, h.getBoundingClientRect(), h.style.transition = `stroke-dashoffset ${i.value}ms ${e.autoDrawEasing}`, h.style.strokeDashoffset = "0"), o.value = k;
    }), {
      immediate: !0
    });
    function b(h) {
      return Wb(u(g.value, m.value), e.smooth ? 8 : Number(e.smooth), h, parseInt(e.height, 10));
    }
    z(() => {
      var k, C, I;
      const h = e.gradient.slice().length ? e.gradient.slice().reverse() : [""];
      return s("svg", {
        display: "block",
        "stroke-width": (k = parseFloat(e.lineWidth)) != null ? k : 4
      }, [s("defs", null, [s("linearGradient", {
        id: l.value,
        gradientUnits: "userSpaceOnUse",
        x1: e.gradientDirection === "left" ? "100%" : "0",
        y1: e.gradientDirection === "top" ? "100%" : "0",
        x2: e.gradientDirection === "right" ? "100%" : "0",
        y2: e.gradientDirection === "bottom" ? "100%" : "0"
      }, [h.map((A, x) => s("stop", {
        offset: x / Math.max(h.length - 1, 1),
        "stop-color": A || "currentColor"
      }, null))])]), c.value && s("g", {
        key: "labels",
        style: {
          textAnchor: "middle",
          dominantBaseline: "mathematical",
          fill: "currentColor"
        }
      }, [y.value.map((A, x) => {
        var P, T;
        return s("text", {
          x: A.x + d.value / 2 + d.value / 2,
          y: parseInt(e.height, 10) - 4 + (parseInt(e.labelSize, 10) || 7 * 0.75),
          "font-size": Number(e.labelSize) || 7
        }, [(T = (P = t.label) == null ? void 0 : P.call(t, {
          index: x,
          value: A.value
        })) != null ? T : A.value]);
      })]), s("path", {
        ref: r,
        d: b(e.fill),
        fill: e.fill ? `url(#${l.value})` : "none",
        stroke: e.fill ? "none" : `url(#${l.value})`
      }, null), e.fill && s("path", {
        d: b(!1),
        fill: "none",
        stroke: (I = e.color) != null ? I : (C = e.gradient) == null ? void 0 : C[0]
      }, null)]);
    });
  }
}), Yb = M(v(v({
  type: {
    type: String,
    default: "trend"
  }
}, Pc()), Ic()), "VSparkline"), Gb = N()({
  name: "VSparkline",
  props: Yb(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      textColorClasses: a,
      textColorStyles: l
    } = tt($(e, "color")), i = S(() => !!(e.showLabels || e.labels.length > 0 || t != null && t.label)), o = S(() => {
      let r = parseInt(e.height, 10);
      return i.value && (r += parseInt(e.labelSize, 10) * 1.5), r;
    });
    z(() => {
      const r = e.type === "trend" ? Vr : Cr, u = e.type === "trend" ? Vr.filterProps(e) : Cr.filterProps(e);
      return s(r, H({
        key: e.type,
        class: a.value,
        style: l.value,
        viewBox: `0 0 ${e.width} ${parseInt(o.value, 10)}`
      }, u), t);
    });
  }
}), Ub = M(v(v({}, te()), fu({
  offset: 8,
  minWidth: 0,
  openDelay: 0,
  closeDelay: 100,
  location: "top center",
  transition: "scale-transition"
})), "VSpeedDial"), Kb = N()({
  name: "VSpeedDial",
  props: Ub(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = oe(e, "modelValue"), l = G(), i = S(() => {
      var c, d;
      const [r, u = "center"] = (d = (c = e.location) == null ? void 0 : c.split(" ")) != null ? d : [];
      return `${r} ${u}`;
    }), o = S(() => ({
      [`v-speed-dial__content--${i.value.replace(" ", "-")}`]: !0
    }));
    return z(() => {
      const r = Rn.filterProps(e);
      return s(Rn, H(r, {
        modelValue: a.value,
        "onUpdate:modelValue": (u) => a.value = u,
        class: e.class,
        style: e.style,
        contentClass: ["v-speed-dial__content", o.value, e.contentClass],
        location: i.value,
        ref: l,
        transition: "fade-transition"
      }), J(v({}, t), {
        default: (u) => s(he, {
          defaults: {
            VBtn: {
              size: "small"
            }
          }
        }, {
          default: () => [s(lt, {
            appear: !0,
            group: !0,
            transition: e.transition
          }, {
            default: () => {
              var c;
              return [(c = t.default) == null ? void 0 : c.call(t, u)];
            }
          })]
        })
      }));
    }), {};
  }
}), fo = Symbol.for("vuetify:v-stepper"), _c = M({
  color: String,
  disabled: {
    type: [Boolean, String],
    default: !1
  },
  prevText: {
    type: String,
    default: "$vuetify.stepper.prev"
  },
  nextText: {
    type: String,
    default: "$vuetify.stepper.next"
  }
}, "VStepperActions"), Ac = N()({
  name: "VStepperActions",
  props: _c(),
  emits: {
    "click:prev": () => !0,
    "click:next": () => !0
  },
  setup(e, n) {
    let {
      emit: t,
      slots: a
    } = n;
    const {
      t: l
    } = $e();
    function i() {
      t("click:prev");
    }
    function o() {
      t("click:next");
    }
    return z(() => {
      const r = {
        onClick: i
      }, u = {
        onClick: o
      };
      return s("div", {
        class: "v-stepper-actions"
      }, [s(he, {
        defaults: {
          VBtn: {
            disabled: ["prev", !0].includes(e.disabled),
            text: l(e.prevText),
            variant: "text"
          }
        }
      }, {
        default: () => {
          var c, d;
          return [(d = (c = a.prev) == null ? void 0 : c.call(a, {
            props: r
          })) != null ? d : s(we, r, null)];
        }
      }), s(he, {
        defaults: {
          VBtn: {
            color: e.color,
            disabled: ["next", !0].includes(e.disabled),
            text: l(e.nextText),
            variant: "tonal"
          }
        }
      }, {
        default: () => {
          var c, d;
          return [(d = (c = a.next) == null ? void 0 : c.call(a, {
            props: u
          })) != null ? d : s(we, u, null)];
        }
      })]);
    }), {};
  }
}), Lc = Bt("v-stepper-header"), qb = M({
  color: String,
  title: String,
  subtitle: String,
  complete: Boolean,
  completeIcon: {
    type: String,
    default: "$complete"
  },
  editable: Boolean,
  editIcon: {
    type: String,
    default: "$edit"
  },
  error: Boolean,
  errorIcon: {
    type: String,
    default: "$error"
  },
  icon: String,
  ripple: {
    type: [Boolean, Object],
    default: !0
  },
  rules: {
    type: Array,
    default: () => []
  }
}, "StepperItem"), Xb = M(v(v({}, qb()), wn()), "VStepperItem"), Tc = N()({
  name: "VStepperItem",
  directives: {
    Ripple: qt
  },
  props: Xb(),
  emits: {
    "group:selected": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = Vn(e, fo, !0), l = S(() => {
      var m;
      return (m = a == null ? void 0 : a.value.value) != null ? m : e.value;
    }), i = S(() => e.rules.every((m) => m() === !0)), o = S(() => !e.disabled && e.editable), r = S(() => !e.disabled && e.editable), u = S(() => e.error || !i.value), c = S(() => e.complete || e.rules.length > 0 && i.value), d = S(() => u.value ? e.errorIcon : c.value ? e.completeIcon : a.isSelected.value && e.editable ? e.editIcon : e.icon), f = S(() => ({
      canEdit: r.value,
      hasError: u.value,
      hasCompleted: c.value,
      title: e.title,
      subtitle: e.subtitle,
      step: l.value,
      value: e.value
    }));
    return z(() => {
      var h, k, C, I, A;
      const m = (!a || a.isSelected.value || c.value || r.value) && !u.value && !e.disabled, g = !!(e.title != null || t.title), y = !!(e.subtitle != null || t.subtitle);
      function b() {
        a == null || a.toggle();
      }
      return pe(s("button", {
        class: ["v-stepper-item", {
          "v-stepper-item--complete": c.value,
          "v-stepper-item--disabled": e.disabled,
          "v-stepper-item--error": u.value
        }, a == null ? void 0 : a.selectedClass.value],
        disabled: !e.editable,
        onClick: b
      }, [o.value && Ut(!0, "v-stepper-item"), s(kt, {
        key: "stepper-avatar",
        class: "v-stepper-item__avatar",
        color: m ? e.color : void 0,
        size: 24
      }, {
        default: () => {
          var x, P;
          return [(P = (x = t.icon) == null ? void 0 : x.call(t, f.value)) != null ? P : d.value ? s(Ve, {
            icon: d.value
          }, null) : l.value];
        }
      }), s("div", {
        class: "v-stepper-item__content"
      }, [g && s("div", {
        key: "title",
        class: "v-stepper-item__title"
      }, [(k = (h = t.title) == null ? void 0 : h.call(t, f.value)) != null ? k : e.title]), y && s("div", {
        key: "subtitle",
        class: "v-stepper-item__subtitle"
      }, [(I = (C = t.subtitle) == null ? void 0 : C.call(t, f.value)) != null ? I : e.subtitle]), (A = t.default) == null ? void 0 : A.call(t, f.value)])]), [[mt("ripple"), e.ripple && e.editable, null]]);
    }), {};
  }
}), Zb = M(v({}, We(cl(), ["continuous", "nextIcon", "prevIcon", "showArrows", "touch", "mandatory"])), "VStepperWindow"), Bc = N()({
  name: "VStepperWindow",
  props: Zb(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = Ce(fo, null), l = oe(e, "modelValue"), i = S({
      get() {
        var o;
        return l.value != null || !a ? l.value : (o = a.items.value.find((r) => a.selected.value.includes(r.id))) == null ? void 0 : o.value;
      },
      set(o) {
        l.value = o;
      }
    });
    return z(() => {
      const o = un.filterProps(e);
      return s(un, H({
        _as: "VStepperWindow"
      }, o, {
        modelValue: i.value,
        "onUpdate:modelValue": (r) => i.value = r,
        class: ["v-stepper-window", e.class],
        style: e.style,
        mandatory: !1,
        touch: !1
      }), t);
    }), {};
  }
}), Jb = M(v({}, dl()), "VStepperWindowItem"), Dc = N()({
  name: "VStepperWindowItem",
  props: Jb(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    return z(() => {
      const a = cn.filterProps(e);
      return s(cn, H({
        _as: "VStepperWindowItem"
      }, a, {
        class: ["v-stepper-window-item", e.class],
        style: e.style
      }), t);
    }), {};
  }
}), Qb = M(v({
  altLabels: Boolean,
  bgColor: String,
  completeIcon: String,
  editIcon: String,
  editable: Boolean,
  errorIcon: String,
  hideActions: Boolean,
  items: {
    type: Array,
    default: () => []
  },
  itemTitle: {
    type: String,
    default: "title"
  },
  itemValue: {
    type: String,
    default: "value"
  },
  nonLinear: Boolean,
  flat: Boolean
}, yn()), "Stepper"), e1 = M(v(v(v(v({}, Qb()), xn({
  mandatory: "force",
  selectedClass: "v-stepper-item--selected"
})), vl()), Wa(_c(), ["prevText", "nextText"])), "VStepper"), t1 = N()({
  name: "VStepper",
  props: e1(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      items: a,
      next: l,
      prev: i,
      selected: o
    } = Kt(e, fo), {
      displayClasses: r,
      mobile: u
    } = ht(e), {
      completeIcon: c,
      editIcon: d,
      errorIcon: f,
      color: m,
      editable: g,
      prevText: y,
      nextText: b
    } = gn(e), h = S(() => e.items.map((I, A) => {
      const x = qe(I, e.itemTitle, I), P = qe(I, e.itemValue, A + 1);
      return {
        title: x,
        value: P,
        raw: I
      };
    })), k = S(() => a.value.findIndex((I) => o.value.includes(I.id))), C = S(() => e.disabled ? e.disabled : k.value === 0 ? "prev" : k.value === a.value.length - 1 ? "next" : !1);
    return Ee({
      VStepperItem: {
        editable: g,
        errorIcon: f,
        completeIcon: c,
        editIcon: d,
        prevText: y,
        nextText: b
      },
      VStepperActions: {
        color: m,
        disabled: C,
        prevText: y,
        nextText: b
      }
    }), z(() => {
      const I = dn.filterProps(e), A = !!(t.header || e.items.length), x = e.items.length > 0, P = !e.hideActions && !!(x || t.actions);
      return s(dn, H(I, {
        color: e.bgColor,
        class: ["v-stepper", {
          "v-stepper--alt-labels": e.altLabels,
          "v-stepper--flat": e.flat,
          "v-stepper--non-linear": e.nonLinear,
          "v-stepper--mobile": u.value
        }, r.value, e.class],
        style: e.style
      }), {
        default: () => {
          var T, w, _;
          return [A && s(Lc, {
            key: "stepper-header"
          }, {
            default: () => [h.value.map((B, V) => {
              var R;
              let p = B, {
                raw: L
              } = p, D = He(p, [
                "raw"
              ]);
              return s(re, null, [!!V && s(ga, null, null), s(Tc, D, {
                default: (R = t[`header-item.${D.value}`]) != null ? R : t.header,
                icon: t.icon,
                title: t.title,
                subtitle: t.subtitle
              })]);
            })]
          }), x && s(Bc, {
            key: "stepper-window"
          }, {
            default: () => [h.value.map((B) => s(Dc, {
              value: B.value
            }, {
              default: () => {
                var V, L, D;
                return (D = (V = t[`item.${B.value}`]) == null ? void 0 : V.call(t, B)) != null ? D : (L = t.item) == null ? void 0 : L.call(t, B);
              }
            }))]
          }), (T = t.default) == null ? void 0 : T.call(t, {
            prev: i,
            next: l
          }), P && ((_ = (w = t.actions) == null ? void 0 : w.call(t, {
            next: l,
            prev: i
          })) != null ? _ : s(Ac, {
            key: "stepper-actions",
            "onClick:prev": i,
            "onClick:next": l
          }, t))];
        }
      });
    }), {
      prev: i,
      next: l
    };
  }
}), n1 = M(v(v({
  indeterminate: Boolean,
  inset: Boolean,
  flat: Boolean,
  loading: {
    type: [Boolean, String],
    default: !1
  }
}, Ht()), ll()), "VSwitch"), a1 = N()({
  name: "VSwitch",
  inheritAttrs: !1,
  props: n1(),
  emits: {
    "update:focused": (e) => !0,
    "update:modelValue": (e) => !0,
    "update:indeterminate": (e) => !0
  },
  setup(e, n) {
    let {
      attrs: t,
      slots: a
    } = n;
    const l = oe(e, "indeterminate"), i = oe(e, "modelValue"), {
      loaderClasses: o
    } = ca(e), {
      isFocused: r,
      focus: u,
      blur: c
    } = Nt(e), d = G(), f = Ie && window.matchMedia("(forced-colors: active)").matches, m = S(() => typeof e.loading == "string" && e.loading !== "" ? e.loading : e.color), g = Qe(), y = S(() => e.id || `switch-${g}`);
    function b() {
      l.value && (l.value = !1);
    }
    function h(k) {
      var C, I;
      k.stopPropagation(), k.preventDefault(), (I = (C = d.value) == null ? void 0 : C.input) == null || I.click();
    }
    return z(() => {
      const [k, C] = Gt(t), I = nt.filterProps(e), A = Yt.filterProps(e);
      return s(nt, H({
        class: ["v-switch", {
          "v-switch--flat": e.flat
        }, {
          "v-switch--inset": e.inset
        }, {
          "v-switch--indeterminate": l.value
        }, o.value, e.class]
      }, k, I, {
        modelValue: i.value,
        "onUpdate:modelValue": (x) => i.value = x,
        id: y.value,
        focused: r.value,
        style: e.style
      }), J(v({}, a), {
        default: (x) => {
          let {
            id: P,
            messagesId: T,
            isDisabled: w,
            isReadonly: _,
            isValid: B
          } = x;
          const V = {
            model: i,
            isValid: B
          };
          return s(Yt, H({
            ref: d
          }, A, {
            modelValue: i.value,
            "onUpdate:modelValue": [(L) => i.value = L, b],
            id: P.value,
            "aria-describedby": T.value,
            type: "checkbox",
            "aria-checked": l.value ? "mixed" : void 0,
            disabled: w.value,
            readonly: _.value,
            onFocus: u,
            onBlur: c
          }, C), J(v({}, a), {
            default: (L) => {
              let {
                backgroundColorClasses: D,
                backgroundColorStyles: p
              } = L;
              return s("div", {
                class: ["v-switch__track", f ? void 0 : D.value],
                style: p.value,
                onClick: h
              }, [a["track-true"] && s("div", {
                key: "prepend",
                class: "v-switch__track-true"
              }, [a["track-true"](V)]), a["track-false"] && s("div", {
                key: "append",
                class: "v-switch__track-false"
              }, [a["track-false"](V)])]);
            },
            input: (L) => {
              let {
                inputNode: D,
                icon: p,
                backgroundColorClasses: R,
                backgroundColorStyles: U
              } = L;
              return s(re, null, [D, s("div", {
                class: ["v-switch__thumb", {
                  "v-switch__thumb--filled": p || e.loading
                }, e.inset || f ? void 0 : R.value],
                style: e.inset ? void 0 : U.value
              }, [a.thumb ? s(he, {
                defaults: {
                  VIcon: {
                    icon: p,
                    size: "x-small"
                  }
                }
              }, {
                default: () => [a.thumb(J(v({}, V), {
                  icon: p
                }))]
              }) : s(Mi, null, {
                default: () => [e.loading ? s(da, {
                  name: "v-switch",
                  active: !0,
                  color: B.value === !1 ? void 0 : m.value
                }, {
                  default: (q) => a.loader ? a.loader(q) : s(On, {
                    active: q.isActive,
                    color: q.color,
                    indeterminate: !0,
                    size: "16",
                    width: "2"
                  }, null)
                }) : p && s(Ve, {
                  key: String(p),
                  icon: p,
                  size: "x-small"
                }, null)]
              })])]);
            }
          }));
        }
      }));
    }), {};
  }
}), l1 = M(v(v(v(v(v(v({
  color: String,
  height: [Number, String],
  window: Boolean
}, te()), Xe()), bn()), De()), me()), Se()), "VSystemBar"), i1 = N()({
  name: "VSystemBar",
  props: l1(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      themeClasses: a
    } = Pe(e), {
      backgroundColorClasses: l,
      backgroundColorStyles: i
    } = Le($(e, "color")), {
      elevationClasses: o
    } = et(e), {
      roundedClasses: r
    } = Oe(e), {
      ssrBootStyles: u
    } = kn(), c = S(() => {
      var f;
      return (f = e.height) != null ? f : e.window ? 32 : 24;
    }), {
      layoutItemStyles: d
    } = Sn({
      id: e.name,
      order: S(() => parseInt(e.order, 10)),
      position: Z("top"),
      layoutSize: c,
      elementSize: c,
      active: S(() => !0),
      absolute: $(e, "absolute")
    });
    return z(() => s(e.tag, {
      class: ["v-system-bar", {
        "v-system-bar--window": e.window
      }, a.value, l.value, o.value, r.value, e.class],
      style: [i.value, d.value, u.value, e.style]
    }, t)), {};
  }
}), mo = Symbol.for("vuetify:v-tabs"), o1 = M(v({
  fixed: Boolean,
  sliderColor: String,
  hideSlider: Boolean,
  direction: {
    type: String,
    default: "horizontal"
  }
}, We(al({
  selectedClass: "v-tab--selected",
  variant: "text"
}), ["active", "block", "flat", "location", "position", "symbol"])), "VTab"), Mc = N()({
  name: "VTab",
  props: o1(),
  setup(e, n) {
    let {
      slots: t,
      attrs: a
    } = n;
    const {
      textColorClasses: l,
      textColorStyles: i
    } = tt(e, "sliderColor"), o = G(), r = G(), u = S(() => e.direction === "horizontal"), c = S(() => {
      var f, m, g;
      return (g = (m = (f = o.value) == null ? void 0 : f.group) == null ? void 0 : m.isSelected.value) != null ? g : !1;
    });
    function d(f) {
      var g, y;
      let {
        value: m
      } = f;
      if (m) {
        const b = (y = (g = o.value) == null ? void 0 : g.$el.parentElement) == null ? void 0 : y.querySelector(".v-tab--selected .v-tab__slider"), h = r.value;
        if (!b || !h) return;
        const k = getComputedStyle(b).color, C = b.getBoundingClientRect(), I = h.getBoundingClientRect(), A = u.value ? "x" : "y", x = u.value ? "X" : "Y", P = u.value ? "right" : "bottom", T = u.value ? "width" : "height", w = C[A], _ = I[A], B = w > _ ? C[P] - I[P] : C[A] - I[A], V = Math.sign(B) > 0 ? u.value ? "right" : "bottom" : Math.sign(B) < 0 ? u.value ? "left" : "top" : "center", D = (Math.abs(B) + (Math.sign(B) < 0 ? C[T] : I[T])) / Math.max(C[T], I[T]) || 0, p = C[T] / I[T] || 0, R = 1.5;
        tn(h, {
          backgroundColor: [k, "currentcolor"],
          transform: [`translate${x}(${B}px) scale${x}(${p})`, `translate${x}(${B / R}px) scale${x}(${(D - 1) / R + 1})`, "none"],
          transformOrigin: Array(3).fill(V)
        }, {
          duration: 225,
          easing: Qn
        });
      }
    }
    return z(() => {
      const f = we.filterProps(e);
      return s(we, H({
        symbol: mo,
        ref: o,
        class: ["v-tab", e.class],
        style: e.style,
        tabindex: c.value ? 0 : -1,
        role: "tab",
        "aria-selected": String(c.value),
        active: !1
      }, f, a, {
        block: e.fixed,
        maxWidth: e.fixed ? 300 : void 0,
        "onGroup:selected": d
      }), J(v({}, t), {
        default: () => {
          var m, g;
          return s(re, null, [(g = (m = t.default) == null ? void 0 : m.call(t)) != null ? g : e.text, !e.hideSlider && s("div", {
            ref: r,
            class: ["v-tab__slider", l.value],
            style: i.value
          }, null)]);
        }
      }));
    }), xt({}, o);
  }
}), r1 = M(v({}, We(cl(), ["continuous", "nextIcon", "prevIcon", "showArrows", "touch", "mandatory"])), "VTabsWindow"), pc = N()({
  name: "VTabsWindow",
  props: r1(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = Ce(mo, null), l = oe(e, "modelValue"), i = S({
      get() {
        var o;
        return l.value != null || !a ? l.value : (o = a.items.value.find((r) => a.selected.value.includes(r.id))) == null ? void 0 : o.value;
      },
      set(o) {
        l.value = o;
      }
    });
    return z(() => {
      const o = un.filterProps(e);
      return s(un, H({
        _as: "VTabsWindow"
      }, o, {
        modelValue: i.value,
        "onUpdate:modelValue": (r) => i.value = r,
        class: ["v-tabs-window", e.class],
        style: e.style,
        mandatory: !1,
        touch: !1
      }), t);
    }), {};
  }
}), s1 = M(v({}, dl()), "VTabsWindowItem"), Ec = N()({
  name: "VTabsWindowItem",
  props: s1(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    return z(() => {
      const a = cn.filterProps(e);
      return s(cn, H({
        _as: "VTabsWindowItem"
      }, a, {
        class: ["v-tabs-window-item", e.class],
        style: e.style
      }), t);
    }), {};
  }
});
function u1(e) {
  return e ? e.map((n) => Br(n) ? n : {
    text: n,
    value: n
  }) : [];
}
const c1 = M(v(v(v({
  alignTabs: {
    type: String,
    default: "start"
  },
  color: String,
  fixedTabs: Boolean,
  items: {
    type: Array,
    default: () => []
  },
  stacked: Boolean,
  bgColor: String,
  grow: Boolean,
  height: {
    type: [Number, String],
    default: void 0
  },
  hideSlider: Boolean,
  sliderColor: String
}, Ri({
  mandatory: "force",
  selectedClass: "v-tab-item--selected"
})), Ze()), me()), "VTabs"), d1 = N()({
  name: "VTabs",
  props: c1(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      attrs: t,
      slots: a
    } = n;
    const l = oe(e, "modelValue"), i = S(() => u1(e.items)), {
      densityClasses: o
    } = st(e), {
      backgroundColorClasses: r,
      backgroundColorStyles: u
    } = Le($(e, "bgColor")), {
      scopeId: c
    } = In();
    return Ee({
      VTab: {
        color: $(e, "color"),
        direction: $(e, "direction"),
        stacked: $(e, "stacked"),
        fixed: $(e, "fixedTabs"),
        sliderColor: $(e, "sliderColor"),
        hideSlider: $(e, "hideSlider")
      }
    }), z(() => {
      const d = oa.filterProps(e), f = !!(a.window || e.items.length > 0);
      return s(re, null, [s(oa, H(d, {
        modelValue: l.value,
        "onUpdate:modelValue": (m) => l.value = m,
        class: ["v-tabs", `v-tabs--${e.direction}`, `v-tabs--align-tabs-${e.alignTabs}`, {
          "v-tabs--fixed-tabs": e.fixedTabs,
          "v-tabs--grow": e.grow,
          "v-tabs--stacked": e.stacked
        }, o.value, r.value, e.class],
        style: [{
          "--v-tabs-height": ee(e.height)
        }, u.value, e.style],
        role: "tablist",
        symbol: mo
      }, c, t), {
        default: () => {
          var m, g;
          return [(g = (m = a.default) == null ? void 0 : m.call(a)) != null ? g : i.value.map((y) => {
            var b, h;
            return (h = (b = a.tab) == null ? void 0 : b.call(a, {
              item: y
            })) != null ? h : s(Mc, H(y, {
              key: y.text,
              value: y.value
            }), {
              default: a[`tab.${y.value}`] ? () => {
                var k;
                return (k = a[`tab.${y.value}`]) == null ? void 0 : k.call(a, {
                  item: y
                });
              } : void 0
            });
          })];
        }
      }), f && s(pc, H({
        modelValue: l.value,
        "onUpdate:modelValue": (m) => l.value = m,
        key: "tabs-window"
      }, c), {
        default: () => {
          var m;
          return [i.value.map((g) => {
            var y, b;
            return (b = (y = a.item) == null ? void 0 : y.call(a, {
              item: g
            })) != null ? b : s(Ec, {
              value: g.value
            }, {
              default: () => {
                var h;
                return (h = a[`item.${g.value}`]) == null ? void 0 : h.call(a, {
                  item: g
                });
              }
            });
          }), (m = a.window) == null ? void 0 : m.call(a)];
        }
      })]);
    }), {};
  }
}), v1 = M(v(v({
  autoGrow: Boolean,
  autofocus: Boolean,
  counter: [Boolean, Number, String],
  counterValue: Function,
  prefix: String,
  placeholder: String,
  persistentPlaceholder: Boolean,
  persistentCounter: Boolean,
  noResize: Boolean,
  rows: {
    type: [Number, String],
    default: 5,
    validator: (e) => !isNaN(parseFloat(e))
  },
  maxRows: {
    type: [Number, String],
    validator: (e) => !isNaN(parseFloat(e))
  },
  suffix: String,
  modelModifiers: Object
}, Ht()), ya()), "VTextarea"), f1 = N()({
  name: "VTextarea",
  directives: {
    Intersect: Qa
  },
  inheritAttrs: !1,
  props: v1(),
  emits: {
    "click:control": (e) => !0,
    "mousedown:control": (e) => !0,
    "update:focused": (e) => !0,
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      attrs: t,
      emit: a,
      slots: l
    } = n;
    const i = oe(e, "modelValue"), {
      isFocused: o,
      focus: r,
      blur: u
    } = Nt(e), c = S(() => typeof e.counterValue == "function" ? e.counterValue(i.value) : (i.value || "").toString().length), d = S(() => {
      if (t.maxlength) return t.maxlength;
      if (!(!e.counter || typeof e.counter != "number" && typeof e.counter != "string"))
        return e.counter;
    });
    function f(V, L) {
      var D, p;
      !e.autofocus || !V || (p = (D = L[0].target) == null ? void 0 : D.focus) == null || p.call(D);
    }
    const m = G(), g = G(), y = Z(""), b = G(), h = S(() => e.persistentPlaceholder || o.value || e.active);
    function k() {
      var V;
      b.value !== document.activeElement && ((V = b.value) == null || V.focus()), o.value || r();
    }
    function C(V) {
      k(), a("click:control", V);
    }
    function I(V) {
      a("mousedown:control", V);
    }
    function A(V) {
      V.stopPropagation(), k(), _e(() => {
        i.value = "", Ci(e["onClick:clear"], V);
      });
    }
    function x(V) {
      var D;
      const L = V.target;
      if (i.value = L.value, (D = e.modelModifiers) != null && D.trim) {
        const p = [L.selectionStart, L.selectionEnd];
        _e(() => {
          L.selectionStart = p[0], L.selectionEnd = p[1];
        });
      }
    }
    const P = G(), T = G(+e.rows), w = S(() => ["plain", "underlined"].includes(e.variant));
    Re(() => {
      e.autoGrow || (T.value = +e.rows);
    });
    function _() {
      e.autoGrow && _e(() => {
        if (!P.value || !g.value) return;
        const V = getComputedStyle(P.value), L = getComputedStyle(g.value.$el), D = parseFloat(V.getPropertyValue("--v-field-padding-top")) + parseFloat(V.getPropertyValue("--v-input-padding-top")) + parseFloat(V.getPropertyValue("--v-field-padding-bottom")), p = P.value.scrollHeight, R = parseFloat(V.lineHeight), U = Math.max(parseFloat(e.rows) * R + D, parseFloat(L.getPropertyValue("--v-input-control-height"))), q = parseFloat(e.maxRows) * R + D || 1 / 0, K = Ne(p != null ? p : 0, U, q);
        T.value = Math.floor((K - D) / R), y.value = ee(K);
      });
    }
    rt(_), Q(i, _), Q(() => e.rows, _), Q(() => e.maxRows, _), Q(() => e.density, _);
    let B;
    return Q(P, (V) => {
      V ? (B = new ResizeObserver(_), B.observe(P.value)) : B == null || B.disconnect();
    }), ot(() => {
      B == null || B.disconnect();
    }), z(() => {
      const V = !!(l.counter || e.counter || e.counterValue), L = !!(V || l.details), [D, p] = Gt(t), K = nt.filterProps(e), {
        modelValue: R
      } = K, U = He(K, [
        "modelValue"
      ]), q = Ui(e);
      return s(nt, H({
        ref: m,
        modelValue: i.value,
        "onUpdate:modelValue": (E) => i.value = E,
        class: ["v-textarea v-text-field", {
          "v-textarea--prefixed": e.prefix,
          "v-textarea--suffixed": e.suffix,
          "v-text-field--prefixed": e.prefix,
          "v-text-field--suffixed": e.suffix,
          "v-textarea--auto-grow": e.autoGrow,
          "v-textarea--no-resize": e.noResize || e.autoGrow,
          "v-input--plain-underlined": w.value
        }, e.class],
        style: e.style
      }, D, U, {
        centerAffix: T.value === 1 && !w.value,
        focused: o.value
      }), J(v({}, l), {
        default: (E) => {
          let {
            id: F,
            isDisabled: O,
            isDirty: Y,
            isReadonly: ie,
            isValid: ne
          } = E;
          return s(Un, H({
            ref: g,
            style: {
              "--v-textarea-control-height": y.value
            },
            onClick: C,
            onMousedown: I,
            "onClick:clear": A,
            "onClick:prependInner": e["onClick:prependInner"],
            "onClick:appendInner": e["onClick:appendInner"]
          }, q, {
            id: F.value,
            active: h.value || Y.value,
            centerAffix: T.value === 1 && !w.value,
            dirty: Y.value || e.dirty,
            disabled: O.value,
            focused: o.value,
            error: ne.value === !1
          }), J(v({}, l), {
            default: (ue) => {
              let {
                props: se
              } = ue, ye = se, {
                class: W
              } = ye, ae = He(ye, [
                "class"
              ]);
              return s(re, null, [e.prefix && s("span", {
                class: "v-text-field__prefix"
              }, [e.prefix]), pe(s("textarea", H({
                ref: b,
                class: W,
                value: i.value,
                onInput: x,
                autofocus: e.autofocus,
                readonly: ie.value,
                disabled: O.value,
                placeholder: e.placeholder,
                rows: e.rows,
                name: e.name,
                onFocus: k,
                onBlur: u
              }, ae, p), null), [[mt("intersect"), {
                handler: f
              }, null, {
                once: !0
              }]]), e.autoGrow && pe(s("textarea", {
                class: [W, "v-textarea__sizer"],
                id: `${ae.id}-sizer`,
                "onUpdate:modelValue": (ce) => i.value = ce,
                ref: P,
                readonly: !0,
                "aria-hidden": "true"
              }, null), [[ed, i.value]]), e.suffix && s("span", {
                class: "v-text-field__suffix"
              }, [e.suffix])]);
            }
          }));
        },
        details: L ? (E) => {
          var F;
          return s(re, null, [(F = l.details) == null ? void 0 : F.call(l, E), V && s(re, null, [s("span", null, null), s(rl, {
            active: e.persistentCounter || o.value,
            value: c.value,
            max: d.value,
            disabled: e.disabled
          }, l.counter)])]);
        } : void 0
      }));
    }), xt({}, m, g, b);
  }
}), m1 = M(v(v(v({
  withBackground: Boolean
}, te()), Se()), me()), "VThemeProvider"), g1 = N()({
  name: "VThemeProvider",
  props: m1(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      themeClasses: a
    } = Pe(e);
    return () => {
      var l;
      return e.withBackground ? s(e.tag, {
        class: ["v-theme-provider", a.value, e.class],
        style: e.style
      }, {
        default: () => {
          var i;
          return [(i = t.default) == null ? void 0 : i.call(t)];
        }
      }) : (l = t.default) == null ? void 0 : l.call(t);
    };
  }
}), h1 = M(v(v(v(v({
  dotColor: String,
  fillDot: Boolean,
  hideDot: Boolean,
  icon: ve,
  iconColor: String,
  lineColor: String
}, te()), De()), Dt()), Xe()), "VTimelineDivider"), y1 = N()({
  name: "VTimelineDivider",
  props: h1(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      sizeClasses: a,
      sizeStyles: l
    } = zn(e, "v-timeline-divider__dot"), {
      backgroundColorStyles: i,
      backgroundColorClasses: o
    } = Le($(e, "dotColor")), {
      roundedClasses: r
    } = Oe(e, "v-timeline-divider__dot"), {
      elevationClasses: u
    } = et(e), {
      backgroundColorClasses: c,
      backgroundColorStyles: d
    } = Le($(e, "lineColor"));
    return z(() => s("div", {
      class: ["v-timeline-divider", {
        "v-timeline-divider--fill-dot": e.fillDot
      }, e.class],
      style: e.style
    }, [s("div", {
      class: ["v-timeline-divider__before", c.value],
      style: d.value
    }, null), !e.hideDot && s("div", {
      key: "dot",
      class: ["v-timeline-divider__dot", u.value, r.value, a.value],
      style: l.value
    }, [s("div", {
      class: ["v-timeline-divider__inner-dot", o.value, r.value],
      style: i.value
    }, [t.default ? s(he, {
      key: "icon-defaults",
      disabled: !e.icon,
      defaults: {
        VIcon: {
          color: e.iconColor,
          icon: e.icon,
          size: e.size
        }
      }
    }, t.default) : s(Ve, {
      key: "icon",
      color: e.iconColor,
      icon: e.icon,
      size: e.size
    }, null)])]), s("div", {
      class: ["v-timeline-divider__after", c.value],
      style: d.value
    }, null)])), {};
  }
}), Fc = M(v(v(v(v(v(v({
  density: String,
  dotColor: String,
  fillDot: Boolean,
  hideDot: Boolean,
  hideOpposite: {
    type: Boolean,
    default: void 0
  },
  icon: ve,
  iconColor: String,
  lineInset: [Number, String]
}, te()), Ye()), Xe()), De()), Dt()), me()), "VTimelineItem"), b1 = N()({
  name: "VTimelineItem",
  props: Fc(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      dimensionStyles: a
    } = Ge(e), l = Z(0), i = G();
    return Q(i, (o) => {
      var r, u;
      o && (l.value = (u = (r = o.$el.querySelector(".v-timeline-divider__dot")) == null ? void 0 : r.getBoundingClientRect().width) != null ? u : 0);
    }, {
      flush: "post"
    }), z(() => {
      var o, r;
      return s("div", {
        class: ["v-timeline-item", {
          "v-timeline-item--fill-dot": e.fillDot
        }, e.class],
        style: [{
          "--v-timeline-dot-size": ee(l.value),
          "--v-timeline-line-inset": e.lineInset ? `calc(var(--v-timeline-dot-size) / 2 + ${ee(e.lineInset)})` : ee(0)
        }, e.style]
      }, [s("div", {
        class: "v-timeline-item__body",
        style: a.value
      }, [(o = t.default) == null ? void 0 : o.call(t)]), s(y1, {
        ref: i,
        hideDot: e.hideDot,
        icon: e.icon,
        iconColor: e.iconColor,
        size: e.size,
        elevation: e.elevation,
        dotColor: e.dotColor,
        fillDot: e.fillDot,
        rounded: e.rounded
      }, {
        default: t.icon
      }), e.density !== "compact" && s("div", {
        class: "v-timeline-item__opposite"
      }, [!e.hideOpposite && ((r = t.opposite) == null ? void 0 : r.call(t))])]);
    }), {};
  }
}), S1 = M(v(v(v(v(v({
  align: {
    type: String,
    default: "center",
    validator: (e) => ["center", "start"].includes(e)
  },
  direction: {
    type: String,
    default: "vertical",
    validator: (e) => ["vertical", "horizontal"].includes(e)
  },
  justify: {
    type: String,
    default: "auto",
    validator: (e) => ["auto", "center"].includes(e)
  },
  side: {
    type: String,
    validator: (e) => e == null || ["start", "end"].includes(e)
  },
  lineThickness: {
    type: [String, Number],
    default: 2
  },
  lineColor: String,
  truncateLine: {
    type: String,
    validator: (e) => ["start", "end", "both"].includes(e)
  }
}, Wa(Fc({
  lineInset: 0
}), ["dotColor", "fillDot", "hideOpposite", "iconColor", "lineInset", "size"])), te()), Ze()), me()), Se()), "VTimeline"), k1 = N()({
  name: "VTimeline",
  props: S1(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      themeClasses: a
    } = Pe(e), {
      densityClasses: l
    } = st(e), {
      rtlClasses: i
    } = je();
    Ee({
      VTimelineDivider: {
        lineColor: $(e, "lineColor")
      },
      VTimelineItem: {
        density: $(e, "density"),
        dotColor: $(e, "dotColor"),
        fillDot: $(e, "fillDot"),
        hideOpposite: $(e, "hideOpposite"),
        iconColor: $(e, "iconColor"),
        lineColor: $(e, "lineColor"),
        lineInset: $(e, "lineInset"),
        size: $(e, "size")
      }
    });
    const o = S(() => {
      const u = e.side ? e.side : e.density !== "default" ? "end" : null;
      return u && `v-timeline--side-${u}`;
    }), r = S(() => {
      const u = ["v-timeline--truncate-line-start", "v-timeline--truncate-line-end"];
      switch (e.truncateLine) {
        case "both":
          return u;
        case "start":
          return u[0];
        case "end":
          return u[1];
        default:
          return null;
      }
    });
    return z(() => s(e.tag, {
      class: ["v-timeline", `v-timeline--${e.direction}`, `v-timeline--align-${e.align}`, `v-timeline--justify-${e.justify}`, r.value, {
        "v-timeline--inset-line": !!e.lineInset
      }, a.value, l.value, o.value, i.value, e.class],
      style: [{
        "--v-timeline-line-thickness": ee(e.lineThickness)
      }, e.style]
    }, t)), {};
  }
}), C1 = M(v(v({}, te()), Ct({
  variant: "text"
})), "VToolbarItems"), x1 = N()({
  name: "VToolbarItems",
  props: C1(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    return Ee({
      VBtn: {
        color: $(e, "color"),
        height: "inherit",
        variant: $(e, "variant")
      }
    }), z(() => {
      var a;
      return s("div", {
        class: ["v-toolbar-items", e.class],
        style: e.style
      }, [(a = t.default) == null ? void 0 : a.call(t)]);
    }), {};
  }
}), w1 = M(v({
  id: String,
  text: String
}, We(ha({
  closeOnBack: !1,
  location: "end",
  locationStrategy: "connected",
  eager: !0,
  minWidth: 0,
  offset: 10,
  openOnClick: !1,
  openOnHover: !0,
  origin: "auto",
  scrim: !1,
  scrollStrategy: "reposition",
  transition: !1
}), ["absolute", "persistent"])), "VTooltip"), V1 = N()({
  name: "VTooltip",
  props: w1(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = oe(e, "modelValue"), {
      scopeId: l
    } = In(), i = Qe(), o = S(() => e.id || `v-tooltip-${i}`), r = G(), u = S(() => e.location.split(" ").length > 1 ? e.location : e.location + " center"), c = S(() => e.origin === "auto" || e.origin === "overlap" || e.origin.split(" ").length > 1 || e.location.split(" ").length > 1 ? e.origin : e.origin + " center"), d = S(() => e.transition ? e.transition : a.value ? "scale-transition" : "fade-transition"), f = S(() => H({
      "aria-describedby": o.value
    }, e.activatorProps));
    return z(() => {
      const m = At.filterProps(e);
      return s(At, H({
        ref: r,
        class: ["v-tooltip", e.class],
        style: e.style,
        id: o.value
      }, m, {
        modelValue: a.value,
        "onUpdate:modelValue": (g) => a.value = g,
        transition: d.value,
        absolute: !0,
        location: u.value,
        origin: c.value,
        persistent: !0,
        role: "tooltip",
        activatorProps: f.value,
        _disableGlobalStack: !0
      }, l), {
        activator: t.activator,
        default: function() {
          var h, k;
          for (var g = arguments.length, y = new Array(g), b = 0; b < g; b++)
            y[b] = arguments[b];
          return (k = (h = t.default) == null ? void 0 : h.call(t, ...y)) != null ? k : e.text;
        }
      });
    }), xt({}, r);
  }
}), P1 = N()({
  name: "VValidation",
  props: Hs(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = zs(e, "validation");
    return () => {
      var l;
      return (l = t.default) == null ? void 0 : l.call(t, a);
    };
  }
}), L1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  VAlert: Gf,
  VAlertTitle: ps,
  VApp: ef,
  VAppBar: Cf,
  VAppBarNavIcon: zf,
  VAppBarTitle: Wf,
  VAutocomplete: gg,
  VAvatar: kt,
  VBadge: yg,
  VBanner: kg,
  VBannerActions: yu,
  VBannerText: bu,
  VBottomNavigation: xg,
  VBottomSheet: Vg,
  VBreadcrumbs: Ag,
  VBreadcrumbsDivider: ku,
  VBreadcrumbsItem: Cu,
  VBtn: we,
  VBtnGroup: Yl,
  VBtnToggle: _f,
  VCard: Mg,
  VCardActions: xu,
  VCardItem: Pu,
  VCardSubtitle: wu,
  VCardText: Iu,
  VCardTitle: Vu,
  VCarousel: zg,
  VCarouselItem: jg,
  VCheckbox: tm,
  VCheckboxBtn: $t,
  VChip: Gn,
  VChipGroup: om,
  VClassIcon: Li,
  VCode: Yg,
  VCol: ky,
  VColorPicker: Mh,
  VCombobox: Fh,
  VComponentIcon: zl,
  VConfirmEdit: Oh,
  VContainer: hy,
  VCounter: rl,
  VDataIterator: Kh,
  VDataTable: cy,
  VDataTableFooter: sa,
  VDataTableHeaders: vn,
  VDataTableRow: ro,
  VDataTableRows: fn,
  VDataTableServer: my,
  VDataTableVirtual: vy,
  VDatePicker: My,
  VDatePickerControls: ri,
  VDatePickerHeader: si,
  VDatePickerMonth: ui,
  VDatePickerMonths: ci,
  VDatePickerYears: di,
  VDefaultsProvider: he,
  VDialog: Ql,
  VDialogBottomTransition: lf,
  VDialogTopTransition: of,
  VDialogTransition: Za,
  VDivider: ga,
  VEmptyState: Ey,
  VExpandTransition: Ja,
  VExpandXTransition: Ei,
  VExpansionPanel: Fy,
  VExpansionPanelText: vi,
  VExpansionPanelTitle: fi,
  VExpansionPanels: Ry,
  VFab: Hy,
  VFabTransition: af,
  VFadeTransition: na,
  VField: Un,
  VFieldLabel: Xn,
  VFileInput: Wy,
  VFooter: Yy,
  VForm: Uy,
  VHover: qy,
  VIcon: Ve,
  VImg: Ft,
  VInfiniteScroll: Zy,
  VInput: nt,
  VItem: eb,
  VItemGroup: Qy,
  VKbd: tb,
  VLabel: Yn,
  VLayout: ab,
  VLayoutItem: ib,
  VLazy: rb,
  VLigatureIcon: Gv,
  VList: ol,
  VListGroup: ql,
  VListImg: Lm,
  VListItem: Ot,
  VListItemAction: Bm,
  VListItemMedia: Mm,
  VListItemSubtitle: eu,
  VListItemTitle: tu,
  VListSubheader: nu,
  VLocaleProvider: ub,
  VMain: db,
  VMenu: Rn,
  VMessages: Rs,
  VNavigationDrawer: kb,
  VNoSsr: Cb,
  VOtpInput: wb,
  VOverlay: At,
  VPagination: ii,
  VParallax: Ib,
  VProgressCircular: On,
  VProgressLinear: tl,
  VRadio: Ab,
  VRadioGroup: Tb,
  VRangeSlider: Db,
  VRating: pb,
  VResponsive: Wl,
  VRow: _y,
  VScaleTransition: Mi,
  VScrollXReverseTransition: sf,
  VScrollXTransition: rf,
  VScrollYReverseTransition: cf,
  VScrollYTransition: uf,
  VSelect: Xi,
  VSelectionControl: Yt,
  VSelectionControlGroup: Fs,
  VSheet: dn,
  VSkeletonLoader: Ob,
  VSlideGroup: oa,
  VSlideGroupItem: Rb,
  VSlideXReverseTransition: vf,
  VSlideXTransition: df,
  VSlideYReverseTransition: ff,
  VSlideYTransition: pi,
  VSlider: li,
  VSnackbar: zb,
  VSpacer: mc,
  VSparkline: Gb,
  VSpeedDial: Kb,
  VStepper: t1,
  VStepperActions: Ac,
  VStepperHeader: Lc,
  VStepperItem: Tc,
  VStepperWindow: Bc,
  VStepperWindowItem: Dc,
  VSvgIcon: Xa,
  VSwitch: a1,
  VSystemBar: i1,
  VTab: Mc,
  VTable: mn,
  VTabs: d1,
  VTabsWindow: pc,
  VTabsWindowItem: Ec,
  VTextField: sn,
  VTextarea: f1,
  VThemeProvider: g1,
  VTimeline: k1,
  VTimelineItem: b1,
  VToolbar: jl,
  VToolbarItems: x1,
  VToolbarTitle: Di,
  VTooltip: V1,
  VValidation: P1,
  VVirtualScroll: ul,
  VWindow: un,
  VWindowItem: cn
}, Symbol.toStringTag, { value: "Module" })), T1 = {
  collapse: "svg:M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z",
  complete: "svg:M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z",
  cancel: "svg:M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z",
  close: "svg:M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z",
  delete: "svg:M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z",
  // delete (e.g. v-chip close)
  clear: "svg:M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z",
  success: "svg:M12,2C17.52,2 22,6.48 22,12C22,17.52 17.52,22 12,22C6.48,22 2,17.52 2,12C2,6.48 6.48,2 12,2M11,16.5L18,9.5L16.59,8.09L11,13.67L7.91,10.59L6.5,12L11,16.5Z",
  info: "svg:M13,9H11V7H13M13,17H11V11H13M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2Z",
  warning: "svg:M13,13H11V7H13M13,17H11V15H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z",
  error: "svg:M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z",
  prev: "svg:M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z",
  next: "svg:M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z",
  checkboxOn: "svg:M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8M19,3H5C3.89,3 3,3.89 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.89 20.1,3 19,3Z",
  checkboxOff: "svg:M19,3H5C3.89,3 3,3.89 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.89 20.1,3 19,3M19,5V19H5V5H19Z",
  checkboxIndeterminate: "svg:M17,13H7V11H17M19,3H5C3.89,3 3,3.89 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.89 20.1,3 19,3Z",
  delimiter: "svg:M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2Z",
  // for carousel
  sortAsc: "svg:M13,20H11V8L5.5,13.5L4.08,12.08L12,4.16L19.92,12.08L18.5,13.5L13,8V20Z",
  sortDesc: "svg:M11,4H13V16L18.5,10.5L19.92,11.92L12,19.84L4.08,11.92L5.5,10.5L11,16V4Z",
  expand: "svg:M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z",
  menu: "svg:M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z",
  subgroup: "svg:M7,10L12,15L17,10H7Z",
  dropdown: "svg:M7,10L12,15L17,10H7Z",
  radioOn: "svg:M12,20C7.58,20 4,16.42 4,12C4,7.58 7.58,4 12,4C16.42,4 20,7.58 20,12C20,16.42 16.42,20 12,20M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2M12,7C9.24,7 7,9.24 7,12C7,14.76 9.24,17 12,17C14.76,17 17,14.76 17,12C17,9.24 14.76,7 12,7Z",
  radioOff: "svg:M12,20C7.58,20 4,16.42 4,12C4,7.58 7.58,4 12,4C16.42,4 20,7.58 20,12C20,16.42 16.42,20 12,20M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2Z",
  edit: "svg:M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z",
  ratingEmpty: "svg:M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z",
  ratingFull: "svg:M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z",
  ratingHalf: "svg:M12,15.4V6.1L13.71,10.13L18.09,10.5L14.77,13.39L15.76,17.67M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z",
  loading: "svg:M19,8L15,12H18C18,15.31 15.31,18 12,18C11,18 10.03,17.75 9.2,17.3L7.74,18.76C8.97,19.54 10.43,20 12,20C16.42,20 20,16.42 20,12H23M6,12C6,8.69 8.69,6 12,6C13,6 13.97,6.25 14.8,6.7L16.26,5.24C15.03,4.46 13.57,4 12,4C7.58,4 4,7.58 4,12H1L5,16L9,12",
  first: "svg:M18.41,16.59L13.82,12L18.41,7.41L17,6L11,12L17,18L18.41,16.59M6,6H8V18H6V6Z",
  last: "svg:M5.59,7.41L10.18,12L5.59,16.59L7,18L13,12L7,6L5.59,7.41M16,6H18V18H16V6Z",
  unfold: "svg:M12,18.17L8.83,15L7.42,16.41L12,21L16.59,16.41L15.17,15M12,5.83L15.17,9L16.58,7.59L12,3L7.41,7.59L8.83,9L12,5.83Z",
  file: "svg:M16.5,6V17.5C16.5,19.71 14.71,21.5 12.5,21.5C10.29,21.5 8.5,19.71 8.5,17.5V5C8.5,3.62 9.62,2.5 11,2.5C12.38,2.5 13.5,3.62 13.5,5V15.5C13.5,16.05 13.05,16.5 12.5,16.5C11.95,16.5 11.5,16.05 11.5,15.5V6H10V15.5C10,16.88 11.12,18 12.5,18C13.88,18 15,16.88 15,15.5V5C15,2.79 13.21,1 11,1C8.79,1 7,2.79 7,5V17.5C7,20.54 9.46,23 12.5,23C15.54,23 18,20.54 18,17.5V6H16.5Z",
  plus: "svg:M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z",
  minus: "svg:M19,13H5V11H19V13Z",
  calendar: "svg:M19,19H5V8H19M16,1V3H8V1H6V3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3H18V1M17,12H12V17H17V12Z",
  treeviewCollapse: "svg:M7,10L12,15L17,10H7Z",
  treeviewExpand: "svg:M10,17L15,12L10,7V17Z",
  eyeDropper: "svg:M19.35,11.72L17.22,13.85L15.81,12.43L8.1,20.14L3.5,22L2,20.5L3.86,15.9L11.57,8.19L10.15,6.78L12.28,4.65L19.35,11.72M16.76,3C17.93,1.83 19.83,1.83 21,3C22.17,4.17 22.17,6.07 21,7.24L19.08,9.16L14.84,4.92L16.76,3M5.56,17.03L4.5,19.5L6.97,18.44L14.4,11L13,9.6L5.56,17.03Z"
}, B1 = {
  component: Xa
};
export {
  Ql as $,
  db as A,
  kb as B,
  ky as C,
  _y as D,
  Mh as E,
  li as F,
  At as G,
  On as H,
  ef as I,
  ms as J,
  T1 as K,
  B1 as L,
  Fy as M,
  fi as N,
  vi as O,
  Ry as P,
  Tb as Q,
  qt as R,
  Ab as S,
  ul as T,
  om as U,
  we as V,
  dn as W,
  Zy as X,
  ii as Y,
  mc as Z,
  mn as _,
  V1 as a,
  Vu as a0,
  Iu as a1,
  xu as a2,
  un as a3,
  cn as a4,
  L1 as a5,
  A1 as a6,
  a1 as a7,
  gg as a8,
  Uy as a9,
  f1 as aa,
  nu as ab,
  Qy as ac,
  eb as ad,
  Ve as b,
  Xi as c,
  Ot as d,
  Mg as e,
  ga as f,
  Rn as g,
  Ft as h,
  sn as i,
  tm as j,
  ol as k,
  tu as l,
  Gn as m,
  Ti as n,
  d1 as o,
  Mc as p,
  pc as q,
  Ec as r,
  Cf as s,
  Ob as t,
  Bi as u,
  Fh as v,
  Yy as w,
  _f as x,
  tl as y,
  Gf as z
};
