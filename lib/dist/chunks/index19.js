import { aL as b, bq as L, X as x } from "./lib.js";
import { d as D, m as g, o as s, G as l, Q as C, w as S, l as w, s as v, c as y, t as k, f as B, b as U, F as M } from "./vue.js";
import { b as q } from "./vuetify.js";
var F = {
  class: "my-2 d-flex align-center"
}, N = {
  key: 0,
  style: {
    "white-space": "pre"
  }
}, j = {
  key: 1,
  style: {
    "white-space": "pre"
  },
  class: ""
};
const z = /* @__PURE__ */ D({
  __name: "MessageBoxDialog",
  props: {
    options: {}
  },
  setup: function(n, u) {
    var p = u.expose, t = b(!1), f = t.isShow, i = t.showDialog, d = t.confirm, h = t.cancel, r = Object.assign(L, {
      question: {
        icon: "class:iconfont info",
        color: "rgb(47,144,207)"
      },
      none: void 0
    }), c = [{
      name: "确定",
      fun: function() {
      },
      primary: !0
    }, {
      name: "取消",
      fun: function() {
        return i(!1);
      }
    }], I = function() {
      if (n.options.cancelId) {
        var o = c[n.options.cancelId];
        o.fun.apply(o);
      } else
        i(!1), h();
    }, $ = function() {
      if (n.options.defaultId) {
        var o = c[n.options.defaultId];
        o.fun.apply(o);
      }
    }, _ = {
      escape: I,
      enter: $
    };
    return n.options.buttons && (c = n.options.buttons.map(function(e, o) {
      return {
        name: e,
        fun: function() {
          d(o), i(!1);
        },
        primary: n.options.defaultId === o
      };
    })), p({
      useDialog: t
    }), function(e, o) {
      return s(), g(x, {
        title: e.options.title,
        modelValue: l(f),
        "onUpdate:modelValue": o[0] || (o[0] = function(a) {
          return C(f) ? f.value = a : null;
        }),
        footerBtnList: l(c),
        keys: _,
        "max-width": "620",
        width: "auto"
      }, {
        default: S(function() {
          var a, m;
          return [w("div", F, [e.options.type && l(r)[e.options.type] ? (s(), g(q, {
            key: 0,
            size: 36,
            icon: (a = l(r)[e.options.type]) === null || a === void 0 ? void 0 : a.icon,
            class: "mr-2",
            color: (m = l(r)[e.options.type]) === null || m === void 0 ? void 0 : m.color
          }, null, 8, ["icon", "color"])) : v("", !0), w("div", null, [e.options.message ? (s(), y("p", N, k(e.options.message), 1)) : v("", !0), e.options.detail ? (s(), y("p", j, k(e.options.detail), 1)) : v("", !0)])])];
        }),
        _: 1
      }, 8, ["title", "modelValue", "footerBtnList"]);
    };
  }
}), Q = /* @__PURE__ */ D({
  __name: "index",
  setup: function(n) {
    var u = B([]), p = B([]);
    return function(t, f) {
      return s(!0), y(M, null, U(u.value, function(i, d) {
        return s(), g(z, {
          ref_for: !0,
          ref_key: "dialogs",
          ref: p,
          "onUpdate:modelValue": function(r) {
            return !r && u.value.splice(d, 1);
          },
          options: i
        }, null, 8, ["onUpdate:modelValue", "options"]);
      }), 256);
    };
  }
});
export {
  Q as default
};
