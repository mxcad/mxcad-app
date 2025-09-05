import { ah as D, ai as U, aj as $, ak as F, al as j, am as k, an as G, ao as B, ap as K, aq as Y, ar as q, as as H, at as M, au as L, av as z, aw as J, ax as Q, ay as V, az as X, aA as Z, aB as W, aC as rr } from "./lib.js";
var er = D.f, ar = function(t, e, r) {
  r in t || er(t, r, {
    configurable: !0,
    get: function() {
      return e[r];
    },
    set: function(i) {
      e[r] = i;
    }
  });
}, tr = Y, p = j, y = k, ir = K, nr = X, sr = Z, or = W, vr = U.f, R = z, cr = J, w = V, ur = Q, N = G, lr = ar, fr = M, dr = B, hr = rr, Sr = $.enforce, yr = L, gr = F, T = q, _ = H, xr = gr("match"), u = p.RegExp, d = u.prototype, Er = p.SyntaxError, Pr = y(d.exec), x = y("".charAt), I = y("".replace), O = y("".indexOf), b = y("".slice), pr = /^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/, f = /a/g, P = /a/g, Rr = new u(f) !== f, C = N.MISSED_STICKY, wr = N.UNSUPPORTED_Y, Ir = tr && (!Rr || C || T || _ || dr(function() {
  return P[xr] = !1, u(f) !== f || u(P) === P || String(u(f, "i")) !== "/a/i";
})), Or = function(t) {
  for (var e = t.length, r = 0, i = "", o = !1, n; r <= e; r++) {
    if (n = x(t, r), n === "\\") {
      i += n + x(t, ++r);
      continue;
    }
    !o && n === "." ? i += "[\\s\\S]" : (n === "[" ? o = !0 : n === "]" && (o = !1), i += n);
  }
  return i;
}, br = function(t) {
  for (var e = t.length, r = 0, i = "", o = [], n = or(null), c = !1, v = !1, h = 0, s = "", a; r <= e; r++) {
    if (a = x(t, r), a === "\\")
      a += x(t, ++r);
    else if (a === "]")
      c = !1;
    else if (!c) switch (!0) {
      case a === "[":
        c = !0;
        break;
      case a === "(":
        if (i += a, b(t, r + 1, r + 3) === "?:")
          continue;
        Pr(pr, b(t, r + 1)) && (r += 2, v = !0), h++;
        continue;
      case (a === ">" && v):
        if (s === "" || hr(n, s))
          throw new Er("Invalid capture group name");
        n[s] = !0, o[o.length] = [s, h], v = !1, s = "";
        continue;
    }
    v ? s += a : i += a;
  }
  return [i, o];
};
if (ir("RegExp", Ir)) {
  for (var l = function(e, r) {
    var i = R(d, this), o = cr(e), n = r === void 0, c = [], v = e, h, s, a, E, g, S;
    if (!i && o && n && e.constructor === l)
      return e;
    if ((o || R(d, e)) && (e = e.source, n && (r = ur(v))), e = e === void 0 ? "" : w(e), r = r === void 0 ? "" : w(r), v = e, T && "dotAll" in f && (s = !!r && O(r, "s") > -1, s && (r = I(r, /s/g, ""))), h = r, C && "sticky" in f && (a = !!r && O(r, "y") > -1, a && wr && (r = I(r, /y/g, ""))), _ && (E = br(e), e = E[0], c = E[1]), g = nr(u(e, r), i ? this : d, l), (s || a || c.length) && (S = Sr(g), s && (S.dotAll = !0, S.raw = l(Or(e), h)), a && (S.sticky = !0), c.length && (S.groups = c)), e !== v) try {
      sr(g, "source", v === "" ? "(?:)" : v);
    } catch (mr) {
    }
    return g;
  }, m = vr(u), A = 0; m.length > A; )
    lr(l, u, m[A++]);
  d.constructor = l, l.prototype = d, fr(p, "RegExp", l, { constructor: !0 });
}
yr("RegExp");
