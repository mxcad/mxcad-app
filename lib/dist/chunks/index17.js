import { I as U, l as G, bj as q, _ as R, a as _, h as z, t as T, H, bk as E, bl as K, a6 as Q, X as W, bm as X, R as $ } from "./lib.js";
import { f as C, d as J, j as Y, m as Z, o as M, w as S, l as c, a as F, A as ee, q as ae, t as k, Q as A, ac as re, G as j, c as I, F as te, b as ne, p as se } from "./vue.js";
import { M as ie } from "./mxcad.js";
import { s as le } from "./pinia.js";
import { _ as ue } from "./vuetify.js";
function N(d, v) {
  var s = Object.keys(d);
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(d);
    v && (l = l.filter(function(u) {
      return Object.getOwnPropertyDescriptor(d, u).enumerable;
    })), s.push.apply(s, l);
  }
  return s;
}
function oe(d) {
  for (var v = 1; v < arguments.length; v++) {
    var s = arguments[v] != null ? arguments[v] : {};
    v % 2 ? N(Object(s), !0).forEach(function(l) {
      G(d, l, s[l]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(d, Object.getOwnPropertyDescriptors(s)) : N(Object(s)).forEach(function(l) {
      Object.defineProperty(d, l, Object.getOwnPropertyDescriptor(s, l));
    });
  }
  return d;
}
var ce = function() {
  var v = C(0), s = U(), l = s.createLineType, u = le(s), y = u.currentLineType, w = u.lineTypeList, O = C([]), L = C(""), b = function(x) {
    for (var t = x.split(`
`), m = [], o = null, f = 0; f < t.length; f++) {
      var g = t[f].trim();
      if (g.startsWith("*")) {
        o && m.push(o);
        var r = g.split(","), a = r[0].slice(1).trim(), e = r.slice(1).join(",").trim(), i = t[f + 1].trim().replace(/^A,/, "");
        o = l({
          name: a,
          appearance: e,
          explain: e,
          value: i
        }), f += 1;
      }
    }
    return o && m.push(o), m;
  }, D = /* @__PURE__ */ function() {
    var P = R(/* @__PURE__ */ _.mark(function x(t) {
      var m, o, f, g, r, a;
      return _.wrap(function(e) {
        for (; ; ) switch (e.prev = e.next) {
          case 0:
            if (m = !1, o = ie.getCurrentMxCAD(), f = o.database.getLinetypeTable().get(t.name), f.isErase()) {
              e.next = 3;
              break;
            }
            return e.next = 1, function() {
              return new Promise(function(i) {
                var p = H();
                p.open({
                  title: "MxCAD",
                  text: T("218") + " " + t.name + T("2008") + "," + T("2009"),
                  cancelTitle: T("1627"),
                  defineTitle: T("1626"),
                  cancel: function() {
                    i(!1);
                  },
                  define: function() {
                    i(!0);
                  }
                });
              });
            }();
          case 1:
            if (g = e.sent, g) {
              e.next = 2;
              break;
            }
            return e.abrupt("return");
          case 2:
            f.erase(), e.next = 4;
            break;
          case 3:
            m = !0;
          case 4:
            if (r = o.addLinetypeEx(t.name, t.value || "", ""), r.isValid()) {
              e.next = 5;
              break;
            }
            return z().error(T("218") + ":" + t.name + T("2010") + "!"), e.abrupt("return");
          case 5:
            m && w.value.push(t), a = w.value.find(function(i) {
              var p = i.name;
              return t.name === p;
            }), a && (a.value = t.value, a.explain = a.appearance = t.appearance), y.value = a || t;
          case 6:
          case "end":
            return e.stop();
        }
      }, x);
    }));
    return function(t) {
      return P.apply(this, arguments);
    };
  }();
  return oe({
    lineTypeList: O,
    createLineType: l,
    index: v,
    filePath: L,
    parseTextLineTypes: b,
    addLineType: D
  }, q);
}, fe = {
  class: "d-flex algin-center mt-3"
}, pe = {
  class: "mt-2"
}, de = {
  class: "w-100"
}, ve = {
  class: "w-100"
}, me = {
  class: "text-left"
}, he = {
  class: "text-left"
}, ye = {
  class: "w-100"
}, be = ["onClick"], ge = {
  class: "text-left"
}, Te = {
  class: "text-left"
};
const we = /* @__PURE__ */ J({
  __name: "index",
  emits: ["change"],
  setup: function(v, s) {
    var l = s.expose;
    s.emit;
    var u = ce();
    u.createLineType;
    var y = u.lineTypeList, w = u.showDialog, O = u.isShow, L = u.index, b = u.filePath, D = u.parseTextLineTypes, P = u.addLineType, x = u.onReveal, t = function() {
      P(y.value[L.value]), w(!1);
    }, m = [{
      name: "确定",
      fun: t,
      primary: !0
    }, {
      name: "取消",
      fun: function() {
        return w(!1);
      }
    }], o = C(), f = function() {
      o.value && o.value.click();
    }, g = /* @__PURE__ */ function() {
      var r = R(/* @__PURE__ */ _.mark(function a(e) {
        var i, p, n, V, B;
        return _.wrap(function(h) {
          for (; ; ) switch (h.prev = h.next) {
            case 0:
              if (i = e.target, p = i.files, p) {
                h.next = 1;
                break;
              }
              return h.abrupt("return");
            case 1:
              return n = p[0], h.next = 2, X(n);
            case 2:
              return V = h.sent, h.next = 3, E(V);
            case 3:
              B = h.sent, y.value = D(B), b.value = n.name;
            case 4:
            case "end":
              return h.stop();
          }
        }, a);
      }));
      return function(e) {
        return r.apply(this, arguments);
      };
    }();
    return Y(/* @__PURE__ */ R(/* @__PURE__ */ _.mark(function r() {
      var a, e, i, p;
      return _.wrap(function(n) {
        for (; ; ) switch (n.prev = n.next) {
          case 0:
            return a = new URL("fonts/mx.lin", K()).href, n.next = 1, fetch(a);
          case 1:
            return e = n.sent, n.next = 2, e.blob();
          case 2:
            return i = n.sent, n.next = 3, E(i);
          case 3:
            p = n.sent, b.value = a, y.value = D(p);
          case 4:
          case "end":
            return n.stop();
        }
      }, r);
    }))), x(function(r) {
      L.value = y.value.findIndex(function(a) {
        var e = a.name;
        return r.name === e;
      });
    }), l({
      showDialog: w
    }), function(r, a) {
      return M(), Z(W, {
        title: r.t("2011"),
        "max-width": "600",
        modelValue: j(O),
        "onUpdate:modelValue": a[1] || (a[1] = function(e) {
          return A(O) ? O.value = e : null;
        }),
        footerBtnList: m
      }, {
        default: S(function() {
          return [c("div", fe, [F(Q, {
            onClick: f,
            class: "ml-1"
          }, {
            default: S(function() {
              return [ae(k(r.t("219")) + "(F)...", 1)];
            }),
            _: 1
          }), ee(c("input", {
            class: "form__inset w-100",
            disabled: !0,
            "onUpdate:modelValue": a[0] || (a[0] = function(e) {
              return A(b) ? b.value = e : null;
            })
          }, null, 512), [[re, j(b)]])]), c("input", {
            type: "file",
            ref_key: "fillSelectEl",
            ref: o,
            onChange: g,
            style: {
              display: "none"
            },
            accept: ".lin"
          }, null, 544), c("div", pe, [c("p", null, k(r.t("2013")), 1), F(ue, {
            class: "w-100",
            cellpadding: "20",
            height: "300"
          }, {
            default: S(function() {
              return [c("thead", de, [c("tr", ve, [c("th", me, k(r.t("218")), 1), c("th", he, k(r.t("1970")), 1)])]), c("tbody", ye, [(M(!0), I(te, null, ne(j(y), function(e, i) {
                return M(), I("tr", {
                  key: e.id,
                  class: se(j(L) === i ? "active" : ""),
                  onClick: function(n) {
                    return L.value = i;
                  },
                  onDblclick: t
                }, [c("td", ge, k(e.name), 1), c("td", Te, k(e.appearance), 1)], 42, be);
              }), 128))])];
            }),
            _: 1
          })])];
        }),
        _: 1
      }, 8, ["title", "modelValue"]);
    };
  }
}), De = /* @__PURE__ */ $(we, [["__scopeId", "data-v-1cae60df"]]);
export {
  De as default
};
