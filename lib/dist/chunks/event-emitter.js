import { g as J } from "./color.js";
var S = { exports: {} }, M = { exports: {} }, N = void 0, B = function(e) {
  return e !== N && e !== null;
}, Q = B, U = {
  object: !0,
  function: !0,
  undefined: !0
  /* document.all */
}, W = function(e) {
  return Q(e) ? hasOwnProperty.call(U, typeof e) : !1;
}, X = W, Y = function(e) {
  if (!X(e)) return !1;
  try {
    return e.constructor ? e.constructor.prototype === e : !1;
  } catch (r) {
    return !1;
  }
}, Z = Y, ee = function(e) {
  if (typeof e != "function" || !hasOwnProperty.call(e, "length")) return !1;
  try {
    if (typeof e.length != "number" || typeof e.call != "function" || typeof e.apply != "function") return !1;
  } catch (r) {
    return !1;
  }
  return !Z(e);
}, re = ee, te = /^\s*class[\s{/}]/, ne = Function.prototype.toString, ie = function(e) {
  return !(!re(e) || te.test(ne.call(e)));
}, ae = function() {
  var e = Object.assign, r;
  return typeof e != "function" ? !1 : (r = { foo: "raz" }, e(r, { bar: "dwa" }, { trzy: "trzy" }), r.foo + r.bar + r.trzy === "razdwatrzy");
}, $, F;
function ue() {
  return F || (F = 1, $ = function() {
    try {
      return Object.keys("primitive"), !0;
    } catch (e) {
      return !1;
    }
  }), $;
}
var oe = function() {
}, se = oe(), k = function(e) {
  return e !== se && e !== null;
}, x, T;
function fe() {
  if (T) return x;
  T = 1;
  var e = k, r = Object.keys;
  return x = function(t) {
    return r(e(t) ? Object(t) : t);
  }, x;
}
var q, A;
function le() {
  return A || (A = 1, q = ue()() ? Object.keys : fe()), q;
}
var V, C;
function ce() {
  if (C) return V;
  C = 1;
  var e = k;
  return V = function(r) {
    if (!e(r)) throw new TypeError("Cannot use null or undefined");
    return r;
  }, V;
}
var z, L;
function pe() {
  if (L) return z;
  L = 1;
  var e = le(), r = ce(), t = Math.max;
  return z = function(o, s) {
    var a, f, b = t(arguments.length, 2), m;
    for (o = Object(r(o)), m = function(h) {
      try {
        o[h] = s[h];
      } catch (v) {
        a || (a = v);
      }
    }, f = 1; f < b; ++f)
      s = arguments[f], e(s).forEach(m);
    if (a !== void 0) throw a;
    return o;
  }, z;
}
var he = ae() ? Object.assign : pe(), me = k, ve = Array.prototype.forEach, de = Object.create, ye = function(e, r) {
  var t;
  for (t in e) r[t] = e[t];
}, _e = function(e) {
  var r = de(null);
  return ve.call(arguments, function(t) {
    me(t) && ye(Object(t), r);
  }), r;
}, E = "razdwatrzy", ge = function() {
  return typeof E.contains != "function" ? !1 : E.contains("dwa") === !0 && E.contains("foo") === !1;
}, P, K;
function be() {
  if (K) return P;
  K = 1;
  var e = String.prototype.indexOf;
  return P = function(r) {
    return e.call(this, r, arguments[1]) > -1;
  }, P;
}
var Oe = ge() ? String.prototype.contains : be(), g = B, D = ie, G = he, H = _e, d = Oe, we = M.exports = function(e, r) {
  var t, o, s, a, f;
  return arguments.length < 2 || typeof e != "string" ? (a = r, r = e, e = null) : a = arguments[2], g(e) ? (t = d.call(e, "c"), o = d.call(e, "e"), s = d.call(e, "w")) : (t = s = !0, o = !1), f = { value: r, configurable: t, enumerable: o, writable: s }, a ? G(H(a), f) : f;
};
we.gs = function(e, r, t) {
  var o, s, a, f;
  return typeof e != "string" ? (a = t, t = r, r = e, e = null) : a = arguments[3], g(r) ? D(r) ? g(t) ? D(t) || (a = t, t = void 0) : t = void 0 : (a = r, r = t = void 0) : r = void 0, g(e) ? (o = d.call(e, "c"), s = d.call(e, "e")) : (o = !0, s = !1), f = { get: r, set: t, configurable: o, enumerable: s }, a ? G(H(a), f) : f;
};
var je = M.exports, $e = function(e) {
  if (typeof e != "function") throw new TypeError(e + " is not a function");
  return e;
};
(function(e, r) {
  var t = je, o = $e, s = Function.prototype.apply, a = Function.prototype.call, f = Object.create, b = Object.defineProperty, m = Object.defineProperties, h = Object.prototype.hasOwnProperty, v = { configurable: !0, enumerable: !1, writable: !0 }, y, O, _, w, I, j, R;
  y = function(u, n) {
    var i;
    return o(n), h.call(this, "__ee__") ? i = this.__ee__ : (i = v.value = f(null), b(this, "__ee__", v), v.value = null), i[u] ? typeof i[u] == "object" ? i[u].push(n) : i[u] = [i[u], n] : i[u] = n, this;
  }, O = function(u, n) {
    var i, l;
    return o(n), l = this, y.call(this, u, i = function() {
      _.call(l, u, i), s.call(n, this, arguments);
    }), i.__eeOnceListener__ = n, this;
  }, _ = function(u, n) {
    var i, l, c, p;
    if (o(n), !h.call(this, "__ee__")) return this;
    if (i = this.__ee__, !i[u]) return this;
    if (l = i[u], typeof l == "object")
      for (p = 0; c = l[p]; ++p)
        (c === n || c.__eeOnceListener__ === n) && (l.length === 2 ? i[u] = l[p ? 0 : 1] : l.splice(p, 1));
    else
      (l === n || l.__eeOnceListener__ === n) && delete i[u];
    return this;
  }, w = function(u) {
    var n, i, l, c, p;
    if (h.call(this, "__ee__") && (c = this.__ee__[u], !!c))
      if (typeof c == "object") {
        for (i = arguments.length, p = new Array(i - 1), n = 1; n < i; ++n) p[n - 1] = arguments[n];
        for (c = c.slice(), n = 0; l = c[n]; ++n)
          s.call(l, this, p);
      } else
        switch (arguments.length) {
          case 1:
            a.call(c, this);
            break;
          case 2:
            a.call(c, this, arguments[1]);
            break;
          case 3:
            a.call(c, this, arguments[1], arguments[2]);
            break;
          default:
            for (i = arguments.length, p = new Array(i - 1), n = 1; n < i; ++n)
              p[n - 1] = arguments[n];
            s.call(c, this, p);
        }
  }, I = {
    on: y,
    once: O,
    off: _,
    emit: w
  }, j = {
    on: t(y),
    once: t(O),
    off: t(_),
    emit: t(w)
  }, R = m({}, j), e.exports = r = function(u) {
    return u == null ? f(R) : m(Object(u), j);
  }, r.methods = I;
})(S, S.exports);
var xe = S.exports;
const Ve = /* @__PURE__ */ J(xe);
export {
  Ve as e
};
