import { z as ue, aW as se, t as s, aX as _, u as ce, I as fe, c as ve, aY as ye, aZ as pe, x as z, l as de } from "./lib.js";
import { c as J } from "./@vueuse/core.js";
import { s as B } from "./pinia.js";
import { h as Le } from "./vue.js";
import "./mxcad.js";
function $(f, i) {
  var l = Object.keys(f);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(f);
    i && (a = a.filter(function(p) {
      return Object.getOwnPropertyDescriptor(f, p).enumerable;
    })), l.push.apply(l, a);
  }
  return l;
}
function me(f) {
  for (var i = 1; i < arguments.length; i++) {
    var l = arguments[i] != null ? arguments[i] : {};
    i % 2 ? $(Object(l), !0).forEach(function(a) {
      de(f, a, l[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(f, Object.getOwnPropertyDescriptors(l)) : $(Object(l)).forEach(function(a) {
      Object.defineProperty(f, a, Object.getOwnPropertyDescriptor(l, a));
    });
  }
  return f;
}
var k = !1, S, ge = function(i) {
  var l = S, a = l.setValue;
  l.setLayerList;
  var p = B(S), u = p.list;
  i = typeof i == "boolean" ? i : k, a("visible", i, u.value.map(function(N, O) {
    return O;
  })), k = !i;
}, Ie = function(i) {
  var l = i.onAddLayer;
  S = ue();
  var a = J("Shift"), p = J("Control"), u = S, N = u.add, O = u.remove, j = u.putCurrent, F = u.toggle, g = u.setValue, d = u.setIndex, M = u.getIndex, H = u.stringifyJSON;
  u.create;
  var U = u.initLayerList, W = u.setLayerList, I = B(S), n = I.index, y = I.list, X = I.currentLayer, A = I.rootId, C = function() {
    return Array.isArray(n.value) && n.value.length > 1;
  }, Y = function(e, r) {
    for (var o = arguments.length, c = new Array(o > 2 ? o - 2 : 0), v = 2; v < o; v++)
      c[v - 2] = arguments[v];
    var m = c[0], T = c[1], E = c[2];
    if (a.value || p.value) return e.preventDefault();
    if (!r.isSelect) return g(m, T, E);
    if (C())
      return e.stopPropagation(), g(m, T), !1;
    g(m, T, E);
  }, L, w = function(e, r) {
    if (r && r.target && D(r.target), a.value) {
      typeof L == "undefined" && (L = n.value);
      var o = Math.max(L, e), c = o === e ? L : e;
      d(pe(c, o));
      return;
    }
    if (p.value) {
      var v = [];
      if (Array.isArray(n.value)) {
        var m = n.value.indexOf(e);
        m >= 0 && n.value.length > 1 ? (v = z(n.value), v.splice(m, 1)) : v = [].concat(z(n.value), [e]);
      } else
        v = [n.value, e];
      d(v);
      return;
    }
    d(e), L = e, x();
  }, Z = function(e, r) {
    (!C() || !y.value[e].isSelect) && w(e, r);
  }, b, x = function() {
    Array.isArray(n.value) ? b = n.value[n.value.length - 1] : b = n.value;
  }, P = function() {
    l && l(N()), a && (L = y.value.length - 1);
  }, h, D = function(e) {
    if (e) {
      var r = e.tagName;
      if (r === "INPUT")
        h = e;
      else {
        var o = e == null ? void 0 : e.getElementsByTagName("input")[0];
        o ? h = o : D(e.parentNode);
      }
    }
  }, R = function(e) {
    var r = M();
    if (!(Array.isArray(r) && r.length > 1)) {
      var o = Array.isArray(r) ? r[0] : r;
      X.value !== y.value[o] && y.value[o].id !== A.value && e && setTimeout(function() {
        e.focus({
          preventScroll: !0
        }), e.select();
      });
    }
  }, q = function(e, r) {
    h = e.target, n.value === r && R(h);
  }, G = function() {
    b && d(b), b = void 0;
  }, Q = function() {
    d(y.value.map(function(e, r) {
      return r;
    }));
  }, ee = function() {
    d([]), x();
  }, K = function() {
    var e = Array.isArray(n.value) ? n.value : [n.value], r = [];
    x(), F("isSelect", y.value.map(function(o, c) {
      return e.includes(c) || r.push(c), c;
    })), n.value = r;
  }, re = se({
    hasIcon: !0,
    iconType: "svg-icon",
    menuList: [{
      label: s("213"),
      fn: function() {
        return j(void 0, !0);
      },
      disabled: C
    }, {
      label: s("1674"),
      fn: function() {
        return P();
      }
    }, {
      label: s("205"),
      fn: function() {
        return O();
      },
      disabled: function() {
        var e;
        if (C())
          return !1;
        var r = M(n.value);
        return r = typeof r == "number" ? r : r[0], ((e = y.value[r]) === null || e === void 0 ? void 0 : e.id) === A.value;
      },
      icon: _("youjianshanchu")
    }, {
      label: s("4104"),
      tips: "F2",
      fn: function() {
        return R(h);
      },
      disabled: C,
      icon: _("youjianzhongmingming")
    }, {
      line: !0
    }, {
      label: s("197"),
      fn: function() {
        return Q();
      }
    }, {
      label: s("4262"),
      fn: function() {
        return ee();
      }
    }, {
      label: s("4263"),
      fn: function() {
        return K();
      }
    }]
  }), te = ce(), ne = te.createColor, ae = function(e) {
    ve("Mx_Color", {
      call: function(o, c) {
        g("color", ne(me({}, ye(o, c))), n);
      },
      color: e
    });
  }, ie = fe();
  ie.createLineType;
  var le = function(e) {
    g("lineType", e, n);
  }, V = Le([{
    name: s("4264"),
    fun: function() {
      P();
    }
  }, {
    name: s("4265"),
    fun: function() {
      return O();
    }
  }, {
    name: s("213"),
    fun: function() {
      return j();
    }
  }, {
    name: s("4266"),
    fun: function() {
      ge(), V[3].name = k ? s("4267") : s("4266");
    }
  }]), oe = function() {
    W(H());
  };
  return {
    onClickLayer: w,
    onClickStopTD: Y,
    onClickLayerName: q,
    resumeIndex: G,
    reverseSelection: K,
    selectColor: ae,
    selectLineType: le,
    setIndex: d,
    onRightClickLayer: Z,
    initLayerList: U,
    setLayerList: oe,
    list: y,
    bodyRightClickMenuOptions: re,
    isShiftKeyMultipleChoice: a,
    isCtrlKeyMultipleChoice: p,
    btnList: V,
    rootId: A
  };
};
export {
  ge as d,
  Ie as u
};
