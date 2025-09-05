import { f as E, d as S, i as U, m as R, o as B, w as g, l as c, a as w, Q as T, G as C, t as h } from "./vue.js";
import { bW as m, w as L, b as k, _ as V, a as v, bX as X, t as D, $ as F, X as G } from "./lib.js";
import { f as H } from "./mxdraw.js";
import { i as N, w as _, k as A, M as y, E as z, L as I, o as O, r as Q, g as W } from "./mxcad.js";
import { aa as Y, i as $ } from "./vuetify.js";
var l = E(""), d = E(0), x = m.isShow, M = m.showDialog, j = m.confirm, q = m.onReveal, P = m.onConfirm;
q(function() {
  var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  typeof o.text == "string" && (l.value = o.text), typeof o.angle == "number" && (d.value = L(THREE.MathUtils.radToDeg(o.angle), 2));
});
var J = /* @__PURE__ */ function() {
  var o = V(/* @__PURE__ */ v.mark(function f() {
    var i, s, u, e, r, a;
    return v.wrap(function(n) {
      for (; ; ) switch (n.prev = n.next) {
        case 0:
          return i = new W(), i.setMessage(D("2105") + ":"), i.setCursorType(H.kCross), n.next = 1, i.go();
        case 1:
          if (s = n.sent, s) {
            n.next = 2;
            break;
          }
          return n.abrupt("return");
        case 2:
          return u = new Q(), u.setMessage(D("2106") + ":"), n.next = 3, u.go();
        case 3:
          if (e = n.sent, e !== null) {
            n.next = 4;
            break;
          }
          return n.abrupt("return");
        case 4:
          return r = P(function(p) {
            var t = new A();
            t.textString = p.text, t.position = new O(s), t.alignmentPoint = t.position, t.height = e, t.rotation = p.angle, y.getCurrentMxCAD().drawEntity(t), y.getCurrentMxCAD().updateDisplay(), a();
          }), a = r.off, n.next = 5, M(!0, {
            text: "测试"
          });
        case 5:
          a();
        case 6:
        case "end":
          return n.stop();
      }
    }, f);
  }));
  return function() {
    return o.apply(this, arguments);
  };
}(), K = /* @__PURE__ */ function() {
  var o = V(/* @__PURE__ */ v.mark(function f() {
    var i, s, u, e, r, a, n, p;
    return v.wrap(function(t) {
      for (; ; ) switch (t.prev = t.next) {
        case 0:
          return i = new z(), i.AddMcDbEntityTypes("TEXT,MTEXT,CUSTOMENTITY"), s = new I(), s.setFilter(i), s.setMessage(D("2107")), t.next = 1, s.go();
        case 1:
          if (u = t.sent, u.isValid()) {
            t.next = 2;
            break;
          }
          return t.abrupt("return");
        case 2:
          if (e = u.getMcDbEntity(), e) {
            t.next = 3;
            break;
          }
          return t.abrupt("return");
        case 3:
          if (!(e instanceof A)) {
            t.next = 5;
            break;
          }
          return r = e.textString, a = e.rotation, n = P(function(b) {
            e.textString = b.text, e.rotation = b.angle, y.getCurrentMxCAD().updateDisplay(), p();
          }), p = n.off, t.next = 4, M(!0, {
            text: r,
            angle: a
          });
        case 4:
          p(), t.next = 6;
          break;
        case 5:
          (e instanceof N || e instanceof _) && X(u, s.pickPoint());
        case 6:
        case "end":
          return t.stop();
      }
    }, f);
  }));
  return function() {
    return o.apply(this, arguments);
  };
}();
k("Mx_EditText", K);
k("_DrawText", function() {
  J();
});
var Z = {
  class: "px-3"
}, ee = {
  class: "px-2"
}, te = {
  class: ""
}, ne = {
  class: ""
};
const oe = /* @__PURE__ */ S({
  __name: "index",
  setup: function(f) {
    U(x, function(e) {
      e || (l.value = "", d.value = 0);
    });
    var i = function() {
      j({
        text: l.value,
        angle: THREE.MathUtils.degToRad(d.value)
      }), l.value = "";
    }, s = [{
      name: "确定",
      fun: function() {
        i();
      },
      primary: !0
    }, {
      name: "关闭",
      fun: function() {
        return M(!1);
      }
    }], u = {
      esc: function() {
        return M(!1);
      },
      enter: function() {
        i();
      }
    };
    return function(e, r) {
      return B(), R(G, {
        title: e.t("227"),
        "max-width": "480",
        modelValue: C(x),
        "onUpdate:modelValue": r[2] || (r[2] = function(a) {
          return T(x) ? x.value = a : null;
        }),
        footerBtnList: s,
        persistent: "",
        keys: u
      }, {
        default: g(function() {
          return [c("div", Z, [w(F, {
            title: e.t("2109")
          }, {
            default: g(function() {
              return [c("div", ee, [w(Y, {
                class: "mt-1",
                modelValue: C(l),
                "onUpdate:modelValue": r[0] || (r[0] = function(a) {
                  return T(l) ? l.value = a : null;
                }),
                autofocus: "",
                rows: "3",
                "no-resize": ""
              }, {
                prepend: g(function() {
                  return [c("span", te, h(e.t("2039")) + ":", 1)];
                }),
                _: 1
              }, 8, ["modelValue"]), w($, {
                class: "mt-1 w-50",
                modelValue: C(d),
                "onUpdate:modelValue": r[1] || (r[1] = function(a) {
                  return T(d) ? d.value = a : null;
                }),
                type: "number"
              }, {
                prepend: g(function() {
                  return [c("span", ne, h(e.t("1931")) + ":", 1)];
                }),
                _: 1
              }, 8, ["modelValue"])])];
            }),
            _: 1
          }, 8, ["title"])])];
        }),
        _: 1
      }, 8, ["title", "modelValue"]);
    };
  }
});
export {
  oe as default
};
