import { _ as G, a as M, aG as V, a6 as O, R as P, u as q, bM as F, bN as S, $ as z, bO as u, bP as s, aI as T, W, X, bQ as J, bR as L } from "./lib.js";
import { d as Z, f as _, j as K, c as Y, o as $, a, w as n, q as D, t as k, F as ee, i as te, m as N, l as c, s as ae, Q as w, G as i } from "./vue.js";
import { i as E, j as ne, D as le, C as R, F as j, V as B } from "./vuetify.js";
import { M as I, a as re } from "./mxcad.js";
import { M as oe } from "./mxdraw.js";
import { C as A } from "./color.js";
const ue = /* @__PURE__ */ Z({
  __name: "ElectronSetUp",
  setup: function(Q, y) {
    var b = y.expose, U = _(""), f = function() {
      V.clearFileCache();
    }, m = function() {
      V.debugTools();
    }, v = _(!1);
    K(/* @__PURE__ */ G(/* @__PURE__ */ M.mark(function r() {
      var d;
      return M.wrap(function(o) {
        for (; ; ) switch (o.prev = o.next) {
          case 0:
            return o.next = 1, V.getAppConfig("isStartOpenLastFile");
          case 1:
            if (d = o.sent, d) {
              o.next = 2;
              break;
            }
            d = !1;
          case 2:
            v.value = d;
          case 3:
          case "end":
            return o.stop();
        }
      }, r);
    })));
    var h = function() {
      V && V.setAppConfig("isStartOpenLastFile", v.value);
    };
    return b({
      determine: h
    }), function(r, d) {
      return $(), Y(ee, null, [a(E, {
        "model-value": U.value,
        readonly: "",
        class: "mt-2"
      }, {
        prepend: n(function() {
          return [D(k(r.t("2086")), 1)];
        }),
        _: 1
      }, 8, ["model-value"]), a(ne, {
        label: r.t("2087"),
        modelValue: v.value,
        "onUpdate:modelValue": d[0] || (d[0] = function(o) {
          return v.value = o;
        }),
        class: "mt-2"
      }, null, 8, ["label", "modelValue"]), a(O, {
        class: "mt-2 mr-2",
        onClick: f
      }, {
        default: n(function() {
          return [D(k(r.t("2088")), 1)];
        }),
        _: 1
      }), a(O, {
        class: "mt-2",
        onClick: m
      }, {
        default: n(function() {
          return [D(k(r.t("2089")), 1)];
        }),
        _: 1
      })], 64);
    };
  }
}), se = /* @__PURE__ */ P(ue, [["__scopeId", "data-v-5cee75c9"]]);
var ie = {
  class: "px-3"
}, de = {
  class: "d-flex justify-center algin-center"
}, ce = {
  class: "d-flex justify-center algin-center"
}, fe = {
  class: "d-flex"
}, me = {
  class: "d-flex align-center mr-1 w-50"
}, pe = {
  class: "d-flex align-center w-50"
};
const ve = /* @__PURE__ */ Z({
  __name: "index",
  setup: function(Q) {
    var y = q(), b = y.createColor, U = _(), f = _(), m = _(), v = function(e) {
      f.value = e;
    };
    te(S, /* @__PURE__ */ function() {
      var l = G(/* @__PURE__ */ M.mark(function e(t) {
        var x, g, C;
        return M.wrap(function(p) {
          for (; ; ) switch (p.prev = p.next) {
            case 0:
              if (t) {
                p.next = 1;
                break;
              }
              return p.abrupt("return");
            case 1:
              x = I.getCurrentMxCAD(), g = x.mxdraw.getViewColor(), C = A(g).toString(), f.value = b({
                color: C,
                name: C
              }), m.value = b({
                color: F.value,
                name: F.value
              });
            case 2:
            case "end":
              return p.stop();
          }
        }, e);
      }));
      return function(e) {
        return l.apply(this, arguments);
      };
    }());
    var h = function(e) {
      var t = A(e.color), x = t.red(), g = t.green(), C = t.blue(), p = I.getCurrentMxCAD();
      p.setViewBackgroundColor(x, g, C), oe.callEvent("updateBackgroundColor", new re(x, g, C));
    }, r = function(e) {
      m.value = e;
    }, d = function() {
      var e;
      if (J(), (e = U.value) === null || e === void 0 || e.determine(), f.value && h(f.value), m.value) {
        var t = A(m.value.color);
        F.value = t.string();
      }
      L(!1);
    }, o = [{
      name: "确定",
      fun: d,
      primary: !0
    }, {
      name: "关闭",
      fun: function() {
        return L(!1);
      }
    }];
    return function(l, e) {
      return $(), N(X, {
        title: l.t("225"),
        "max-width": "600",
        modelValue: i(S),
        "onUpdate:modelValue": e[8] || (e[8] = function(t) {
          return w(S) ? S.value = t : null;
        }),
        footerBtnList: o
      }, {
        default: n(function() {
          return [c("div", ie, [a(le, null, {
            default: n(function() {
              return [a(R, {
                cols: "6",
                class: "mb-1"
              }, {
                default: n(function() {
                  return [a(z, {
                    title: l.t("2091")
                  }, {
                    default: n(function() {
                      return [c("div", de, [a(E, {
                        modelValue: i(u),
                        "onUpdate:modelValue": e[0] || (e[0] = function(t) {
                          return w(u) ? u.value = t : null;
                        }),
                        class: "pa-0",
                        style: {
                          "max-width": "36px"
                        }
                      }, null, 8, ["modelValue"]), a(j, {
                        "thumb-size": 10,
                        "tick-size": 1,
                        max: 128,
                        color: "#007AD9",
                        modelValue: i(u),
                        "onUpdate:modelValue": e[3] || (e[3] = function(t) {
                          return w(u) ? u.value = t : null;
                        }),
                        "hide-details": "",
                        step: 1
                      }, {
                        prepend: n(function() {
                          return [a(B, {
                            icon: "class:iconfont minus",
                            size: "x-small",
                            variant: "text",
                            onClick: e[1] || (e[1] = function(t) {
                              return i(u) > 0 && u.value--;
                            })
                          })];
                        }),
                        append: n(function() {
                          return [a(B, {
                            icon: "class:iconfont plus",
                            size: "x-small",
                            variant: "text",
                            onClick: e[2] || (e[2] = function(t) {
                              return i(u) < 128 && u.value++;
                            })
                          })];
                        }),
                        _: 1
                      }, 8, ["modelValue"])])];
                    }),
                    _: 1
                  }, 8, ["title"])];
                }),
                _: 1
              }), a(R, {
                cols: "6",
                class: "mb-1",
                "align-self": "start"
              }, {
                default: n(function() {
                  return [a(z, {
                    title: l.t("2092")
                  }, {
                    default: n(function() {
                      return [c("div", ce, [a(E, {
                        modelValue: i(s),
                        "onUpdate:modelValue": e[4] || (e[4] = function(t) {
                          return w(s) ? s.value = t : null;
                        }),
                        class: "pa-0",
                        style: {
                          "max-width": "36px"
                        }
                      }, null, 8, ["modelValue"]), a(j, {
                        "thumb-size": 10,
                        "tick-size": 1,
                        color: "#007AD9",
                        modelValue: i(s),
                        "onUpdate:modelValue": e[7] || (e[7] = function(t) {
                          return w(s) ? s.value = t : null;
                        }),
                        min: 0,
                        max: 68,
                        "hide-details": "",
                        step: 1
                      }, {
                        prepend: n(function() {
                          return [a(B, {
                            icon: "class:iconfont minus",
                            size: "x-small",
                            variant: "text",
                            onClick: e[5] || (e[5] = function(t) {
                              return i(s) > 0 && s.value--;
                            })
                          })];
                        }),
                        append: n(function() {
                          return [a(B, {
                            icon: "class:iconfont plus",
                            size: "x-small",
                            variant: "text",
                            onClick: e[6] || (e[6] = function(t) {
                              return i(s) < 68 && s.value++;
                            })
                          })];
                        }),
                        _: 1
                      }, 8, ["modelValue"])])];
                    }),
                    _: 1
                  }, 8, ["title"])];
                }),
                _: 1
              })];
            }),
            _: 1
          }), a(z, {
            title: l.t("210"),
            class: "mt-2"
          }, {
            default: n(function() {
              return [c("div", fe, [c("div", me, [c("span", null, k(l.t("2093")) + ":", 1), a(T, {
                "model-value": m.value,
                "onUpdate:modelValue": r,
                "menus-props": {
                  maxHeight: "600"
                }
              }, null, 8, ["model-value"])]), c("div", pe, [c("span", null, k(l.t("2094")) + ":", 1), a(T, {
                "model-value": f.value,
                "onUpdate:modelValue": v,
                "menus-props": {
                  maxHeight: "600"
                }
              }, null, 8, ["model-value"])])])];
            }),
            _: 1
          }, 8, ["title"]), i(W)() ? ($(), N(se, {
            key: 0,
            ref_key: "electronSetUp",
            ref: U
          }, null, 512)) : ae("", !0)])];
        }),
        _: 1
      }, 8, ["title", "modelValue"]);
    };
  }
}), ke = /* @__PURE__ */ P(ve, [["__scopeId", "data-v-2de958cc"]]);
export {
  ke as default
};
