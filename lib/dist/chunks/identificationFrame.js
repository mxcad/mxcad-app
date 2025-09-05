import { _ as T, a as S, t as w, h as L } from "./lib.js";
import { p as N, f as x, h as B, a9 as j, E as O, d as z, o as E } from "./mxcad.js";
function I(r, s) {
  var e = typeof Symbol != "undefined" && r[Symbol.iterator] || r["@@iterator"];
  if (!e) {
    if (Array.isArray(r) || (e = G(r)) || s) {
      e && (r = e);
      var c = 0, o = function() {
      };
      return { s: o, n: function() {
        return c >= r.length ? { done: !0 } : { done: !1, value: r[c++] };
      }, e: function(a) {
        throw a;
      }, f: o };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var d, f = !0, u = !1;
  return { s: function() {
    e = e.call(r);
  }, n: function() {
    var a = e.next();
    return f = a.done, a;
  }, e: function(a) {
    u = !0, d = a;
  }, f: function() {
    try {
      f || e.return == null || e.return();
    } finally {
      if (u) throw d;
    }
  } };
}
function G(r, s) {
  if (r) {
    if (typeof r == "string") return C(r, s);
    var e = {}.toString.call(r).slice(8, -1);
    return e === "Object" && r.constructor && (e = r.constructor.name), e === "Map" || e === "Set" ? Array.from(r) : e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e) ? C(r, s) : void 0;
  }
}
function C(r, s) {
  (s == null || s > r.length) && (s = r.length);
  for (var e = 0, c = Array(s); e < s; e++) c[e] = r[e];
  return c;
}
function U(r) {
  r.sort(function(a, m) {
    return a.minPt.y === m.minPt.y ? a.minPt.x - m.minPt.x : a.minPt.y - m.minPt.y;
  });
  var s = [], e = I(r), c;
  try {
    for (e.s(); !(c = e.n()).done; ) {
      var o = c.value, d = !0, f = I(s), u;
      try {
        for (f.s(); !(u = f.n()).done; ) {
          var t = u.value;
          if (o.minPt.x >= t.minPt.x && o.minPt.y >= t.minPt.y && o.maxPt.x <= t.maxPt.x && o.maxPt.y <= t.maxPt.y) {
            d = !1;
            break;
          }
        }
      } catch (a) {
        f.e(a);
      } finally {
        f.f();
      }
      d && s.push(o);
    }
  } catch (a) {
    e.e(a);
  } finally {
    e.f();
  }
  return s;
}
var $ = /* @__PURE__ */ function() {
  var r = T(/* @__PURE__ */ S.mark(function s(e) {
    var c, o, d, f, u, t, a, m, P, R, k, h, M;
    return S.wrap(function(i) {
      for (; ; ) switch (i.prev = i.next) {
        case 0:
          if (c = e || {}, o = c.blockName, d = c.isSpecifiedRange, f = d === void 0 ? !1 : d, u = c.layerName, t = [], a = o, a) {
            i.next = 5;
            break;
          }
          return i.next = 1, z.userSelect(w("3603"));
        case 1:
          if (m = i.sent, m.length !== 0) {
            i.next = 2;
            break;
          }
          return i.abrupt("return", t);
        case 2:
          if (P = m[0].getMcDbEntity(), P instanceof x) {
            i.next = 3;
            break;
          }
          return L().error(w("3604")), i.abrupt("return", t);
        case 3:
          if (R = P, k = R.blockTableRecordId.getMcDbBlockTableRecord(), k) {
            i.next = 4;
            break;
          }
          return i.abrupt("return", t);
        case 4:
          a = k.name;
        case 5:
          if (h = new B(), M = new O(), M.AddMcDbEntityTypes("INSERT"), !f) {
            i.next = 7;
            break;
          }
          return i.next = 6, h.userSelect(w("2322"), M);
        case 6:
          i.next = 8;
          break;
        case 7:
          h.allSelect(M);
        case 8:
          return h.forEach(function(v) {
            var n = v.getMcDbEntity();
            if (n instanceof x) {
              var l = n, y = l.blockTableRecordId.getMcDbBlockTableRecord();
              if (u && l.layer !== u)
                return;
              if (y && y.name === a) {
                var b = l.getBoundingBox(), p = b.minPt, g = b.maxPt, D = new E(Math.min(p.x, g.x), Math.min(p.y, g.y), Math.min(p.z, g.z)), A = new E(Math.max(p.x, g.x), Math.max(p.y, g.y), Math.max(p.z, g.z));
                t.push({
                  minPt: D,
                  maxPt: A
                });
              }
            }
          }), i.abrupt("return", t);
        case 9:
        case "end":
          return i.stop();
      }
    }, s);
  }));
  return function(e) {
    return r.apply(this, arguments);
  };
}(), H = /* @__PURE__ */ function() {
  var r = T(/* @__PURE__ */ S.mark(function s(e) {
    var c, o, d, f, u, t, a, m, P, R, k, h, M;
    return S.wrap(function(i) {
      for (; ; ) switch (i.prev = i.next) {
        case 0:
          if (c = e || {}, o = c.isSpecifiedRange, d = o === void 0 ? !0 : o, f = c.layerName, u = [], !d) {
            i.next = 2;
            break;
          }
          return i.next = 1, z.userSelect(w("3754"));
        case 1:
          u = i.sent, i.next = 3;
          break;
        case 2:
          t = new B(), a = new O(), a.AddMcDbEntityTypes("LWPOLYLINE"), t.allSelect(a), u = t.getIds();
        case 3:
          return m = [], P = function(n, l, y) {
            return (l.x - n.x) * (l.x - y.x) + (l.y - n.y) * (l.y - y.y) == 0;
          }, R = function(n, l, y, b) {
            return P(n, l, y);
          }, k = function(n) {
            if (n instanceof N) {
              if (f && n.layer !== f)
                return;
              var l = n.numVerts();
              if (l === 0 || (n.isClosed ? l > 4 : l > 5)) return;
              for (var y = 0; y < l; y++) {
                var b = n.getBulgeAt(y);
                if (b > 1e-3) return;
              }
              var p = n.getPointAt(0).val;
              if (R(p, n.getPointAt(1).val, n.getPointAt(2).val, n.isClosed ? p : n.getPointAt(3).val)) {
                var g = n.getBoundingBox(), D = g.minPt, A = g.maxPt;
                m.push({
                  minPt: D,
                  maxPt: A
                });
              }
            }
          }, h = function(n) {
            var l = n.blockTableRecordId.getMcDbBlockTableRecord();
            l && l.getAllEntityId().forEach(function(y) {
              var b = y.getMcDbEntity();
              b && (b instanceof N && k(b), b instanceof x && h(b));
            });
          }, u.forEach(function(v) {
            var n = v.getMcDbEntity();
            if (n instanceof N)
              k(n);
            else if (n instanceof x) {
              if (f && n.layer !== f)
                return;
              h(n);
            }
          }), M = U(m).filter(function(v) {
            var n = v.minPt, l = v.maxPt, y = new B();
            return y.imp.userSelect(n.x, n.y, l.x, l.y, j(), !1), y.count() !== 0;
          }), i.abrupt("return", M);
        case 4:
        case "end":
          return i.stop();
      }
    }, s);
  }));
  return function(e) {
    return r.apply(this, arguments);
  };
}(), Y = /* @__PURE__ */ function() {
  var r = T(/* @__PURE__ */ S.mark(function s(e) {
    var c, o, d, f, u, t;
    return S.wrap(function(a) {
      for (; ; ) switch (a.prev = a.next) {
        case 0:
          if (c = e || {}, o = c.method, d = o === void 0 ? "polyline" : o, f = c.blockName, u = c.isSpecifiedRange, t = c.layerName, d !== "block") {
            a.next = 1;
            break;
          }
          return a.abrupt("return", $({
            blockName: f,
            isSpecifiedRange: u,
            layerName: t
          }));
        case 1:
          return a.abrupt("return", H({
            isSpecifiedRange: u,
            layerName: t
          }));
        case 2:
        case "end":
          return a.stop();
      }
    }, s);
  }));
  return function(e) {
    return r.apply(this, arguments);
  };
}();
export {
  Y as i
};
