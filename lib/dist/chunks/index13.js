import { I as re, aL as ue, X as P, R as Y, a6 as B, aT as ce, aJ as de, aU as Q, x as ve, aV as O } from "./lib.js";
import { d as Z, f as M, m as N, o as s, w as _, l as e, a as c, t as l, c as r, F as W, b as q, G as i, p as I, Q as ee, g as me, a7 as X, A as f, q as b, y as K, s as pe, ac as fe, n as _e, k as he } from "./vue.js";
import { s as ge } from "./pinia.js";
import { _ as te, i as ke, b as $, R as C, c as Ce, f as Le } from "./vuetify.js";
import { u as ye } from "./hooks2.js";
import { b as we } from "./@vueuse/core.js";
var be = function() {
  var R = re(), k = R.createLineType, o = ge(R), x = o.lineTypeList;
  return {
    lineTypeList: x,
    createLineType: k
  };
}, xe = {
  class: "mt-2"
}, De = {
  class: "text-center"
}, Ve = {
  class: "text-center"
}, Te = {
  class: "text-center"
}, Se = ["onClick"];
const $e = /* @__PURE__ */ Z({
  __name: "index",
  emits: ["change"],
  setup: function(R, k) {
    var o = k.expose, x = k.emit, L = be(), D = L.lineTypeList, y = M(0), V = ue(!1), T = V.isShow, S = V.showDialog, j = V.onReveal, A = x, F = [{
      name: "确定",
      fun: function() {
        A("change", D.value[y.value]), S(!1);
      },
      primary: !0
    }, {
      name: "取消",
      fun: function() {
        return S(!1);
      }
    }];
    return j(function(d) {
      y.value = D.value.findIndex(function(w) {
        return w.name === d.name;
      });
    }), o({
      showDialog: S
    }), function(d, w) {
      return s(), N(P, {
        title: d.t("2300"),
        "max-width": "500",
        modelValue: i(T),
        "onUpdate:modelValue": w[0] || (w[0] = function(h) {
          return ee(T) ? T.value = h : null;
        }),
        footerBtnList: F
      }, {
        default: _(function() {
          return [e("div", xe, [e("p", null, l(d.t("2301")), 1), c(te, {
            height: "300"
          }, {
            default: _(function() {
              return [e("thead", null, [e("tr", null, [e("th", De, l(d.t("218")), 1), e("th", Ve, l(d.t("2302")), 1), e("th", Te, l(d.t("1970")), 1)])]), e("tbody", null, [(s(!0), r(W, null, q(i(D), function(h, U) {
                return s(), r("tr", {
                  key: h.id,
                  class: I(y.value === U ? "active" : ""),
                  onClick: function(z) {
                    return y.value = U;
                  }
                }, [e("td", null, l(h.name), 1), e("td", null, l(h.explain), 1), e("td", null, l(h.appearance), 1)], 10, Se);
              }), 128))])];
            }),
            _: 1
          })])];
        }),
        _: 1
      }, 8, ["title", "modelValue"]);
    };
  }
}), Me = /* @__PURE__ */ Y($e, [["__scopeId", "data-v-964f83a9"]]);
var Re = {
  class: "d-flex align-center"
}, Ue = {
  class: "d-flex align-center my-2"
}, Be = {
  class: "w-100"
}, Ne = {
  class: "w-100"
}, We = {
  class: "w-20"
}, je = {
  class: ""
}, Ae = {
  class: ""
}, Fe = {
  class: ""
}, ze = {
  class: "w-20"
}, Ee = {
  class: "w-20"
}, Oe = {
  class: "w-20"
}, qe = {
  class: "w-100",
  ref: "tbody"
}, He = ["id", "onClick", "onContextmenu"], Ge = {
  class: "text-no-wrap"
}, Je = {
  style: {
    width: "18px"
  },
  class: "d-inline-block"
}, Qe = ["for"], Xe = ["disabled", "id", "onClick", "onUpdate:modelValue"], Ke = ["onClick"], Pe = ["onClick"], Ye = ["onClick"], Ze = ["onClick"], Ie = ["onClick"], et = {
  class: "w-20 text-truncate"
}, tt = {
  class: "w-100 my-3",
  cellpadding: "20"
}, nt = {
  class: "w-100"
}, at = {
  class: "w-100"
}, it = {
  class: "w-auto px-6"
}, lt = {
  class: "d-flex justify-end w-auto"
};
const ot = /* @__PURE__ */ Z({
  __name: "index",
  setup: function(R) {
    var k = M(), o = ye({
      onAddLayer: function() {
        var n, v = (n = k.value) === null || n === void 0 ? void 0 : n.$el, g = v.getElementsByClassName("v-table__wrapper")[0];
        he(function() {
          g.scrollTo({
            top: g.scrollHeight - g.clientHeight,
            behavior: "smooth"
          });
        });
      }
    }), x = o.onClickLayer, L = o.onClickStopTD, D = o.onClickLayerName, y = o.resumeIndex, V = o.reverseSelection, T = o.selectColor, S = o.selectLineType, j = o.setIndex, A = o.onRightClickLayer, F = o.initLayerList, d = o.setLayerList, w = o.list, h = o.bodyRightClickMenuOptions, U = o.btnList, G = o.rootId;
    F();
    var z = M([]), ne = function(n) {
      var v = n(z.value, function(t, m) {
        return m;
      }), g = v.map;
      g.length > 0 && j(g);
    }, J = M(), ae = function(n) {
      var v;
      (v = J.value) === null || v === void 0 || v.showDialog(!0, n);
    }, E = M(""), ie = we(function(a) {
      a === null && (a = ""), E.value = a;
    }, 500), le = me(function() {
      return w.value.filter(function(a) {
        return a.name.toLowerCase().includes(E.value.toLowerCase());
      });
    }), oe = de(), se = function(n, v) {
      L(new MouseEvent("click"), n, "lineWeight", v);
    };
    return function(a, n) {
      var v = X("box-selection"), g = X("right-click-menu");
      return s(), r(W, null, [c(P, {
        maxWidth: "900",
        ref: "layerDialog",
        modelValue: i(O),
        "onUpdate:modelValue": n[4] || (n[4] = function(t) {
          return ee(O) ? O.value = t : null;
        }),
        title: a.t("2000")
      }, {
        actions: _(function() {
          return ve(n[9] || (n[9] = [e("div", {
            class: "mt-1"
          }, null, -1)]));
        }),
        default: _(function() {
          return [e("div", Re, [e("div", Ue, [(s(!0), r(W, null, q(i(U), function(t, m) {
            return s(), N(B, {
              onClick: t.fun,
              class: "mx-2 px-2",
              key: t.name + m
            }, {
              default: _(function() {
                return [b(l(a.t(t.name)), 1)];
              }),
              _: 2
            }, 1032, ["onClick"]);
          }), 128))]), c(ke, {
            "model-values": E.value,
            "onUpdate:modelValue": i(ie),
            class: "pa-1",
            clearable: "",
            density: "compact",
            label: a.t("2001"),
            variant: "solo",
            "hide-details": "",
            "single-line": ""
          }, {
            "append-inner": _(function() {
              return [c($, {
                icon: "$mdi-magnify",
                class: "v-icon--clickable"
              })];
            }),
            _: 1
          }, 8, ["model-values", "onUpdate:modelValue", "label"])]), f((s(), N(i(te), {
            class: "w-100 layer-table",
            height: "300",
            ref_key: "boxRef",
            ref: k,
            onClick: n[0] || (n[0] = function(t) {
              return i(y)();
            })
          }, {
            default: _(function() {
              return [e("thead", Be, [e("tr", Ne, [e("th", We, [n[5] || (n[5] = e("div", {
                style: {
                  width: "10px"
                },
                class: "d-inline-block"
              }, null, -1)), n[6] || (n[6] = b()), e("span", null, l(a.t("196") + a.t("1923")), 1)]), e("th", je, l(a.t("2002")), 1), e("th", Ae, l(a.t("2003")), 1), e("th", Fe, l(a.t("203")), 1), e("th", ze, l(a.t("210")), 1), e("th", Ee, l(a.t("217")), 1), e("th", Oe, l(a.t("1810")), 1)])]), f((s(), r("tbody", qe, [(s(!0), r(W, null, q(le.value, function(t, m) {
                return s(), r("tr", {
                  class: I(["text-center layer-info", t.isSelect ? "active" : ""]),
                  ref_for: !0,
                  ref_key: "refItems",
                  ref: z,
                  key: t.id,
                  id: t.id.toString(),
                  onClick: K(function(p) {
                    return i(x)(m);
                  }, ["prevent"]),
                  onContextmenu: K(function(p) {
                    return i(A)(m, p);
                  }, ["prevent"])
                }, [f((s(), r("td", Ge, [e("div", Je, [t.status ? (s(), N($, {
                  key: 0,
                  icon: "class:iconfont gou",
                  size: "x-small",
                  color: "#16FD21"
                })) : pe("", !0)]), e("label", {
                  class: "d-inline-block",
                  for: t.id.toString()
                }, [f(e("input", {
                  disabled: t.id === i(G),
                  id: t.id.toString(),
                  class: "text-truncate text-center",
                  type: "text",
                  onClick: function(u) {
                    return i(D)(u, m);
                  },
                  "onUpdate:modelValue": function(u) {
                    return t.name = u;
                  }
                }, null, 8, Xe), [[fe, t.name]])], 8, Qe)])), [[C]]), f((s(), r("td", {
                  class: "text-orange",
                  onClick: function(u) {
                    return i(L)(u, t, "visible", !t.visible, m);
                  }
                }, [c($, {
                  icon: t.visible ? "yanjing1" : "yanjing"
                }, null, 8, ["icon"])], 8, Ke)), [[C, void 0, void 0, {
                  prevent: !0
                }]]), f((s(), r("td", {
                  class: "text-orange",
                  onClick: function(u) {
                    return i(L)(u, t, "lock", !t.lock, m);
                  }
                }, [c($, {
                  icon: t.lock ? "suo" : "jiesuo1"
                }, null, 8, ["icon"])], 8, Pe)), [[C]]), f((s(), r("td", {
                  onClick: function(u) {
                    return i(L)(u, t, "print", !t.print, m);
                  }
                }, [c($, {
                  icon: t.print ? "dayin" : "budayinbiaoqian"
                }, null, 8, ["icon"])], 8, Ye)), [[C]]), f((s(), r("td", {
                  class: "d-flex align-center justify-center",
                  onClick: function(u) {
                    return i(T)(t.color);
                  }
                }, [e("div", {
                  class: "colorBox mr-2",
                  style: _e({
                    background: "".concat(t.color.color)
                  })
                }, null, 4), e("span", null, l(i(ce)(t.color.name)), 1)], 8, Ze)), [[C]]), f((s(), r("td", {
                  class: "w-20 text-truncate",
                  onClick: function(u) {
                    return ae(t.lineType);
                  }
                }, [b(l(t.lineType.name), 1)], 8, Ie)), [[C]]), f((s(), r("td", et, [c(Ce, {
                  items: i(oe),
                  "item-title": "name",
                  "bg-color": "transparent",
                  "model-value": t.lineWeight,
                  "onUpdate:modelValue": function(u) {
                    return se(t, u);
                  }
                }, null, 8, ["items", "model-value", "onUpdate:modelValue"])])), [[C]])], 42, He);
              }), 128))])), [[v, ne]])];
            }),
            _: 1
          })), [[g, i(h)]]), c(Le, {
            color: "#576375",
            class: "border-opacity-75"
          }), e("table", tt, [e("thead", nt, [e("tr", at, [n[7] || (n[7] = e("th", {
            class: "w-20"
          }, null, -1)), e("th", it, [c(B, {
            onClick: n[1] || (n[1] = function(t) {
              return i(V)();
            })
          }, {
            default: _(function() {
              return [b(l(a.t("2005")), 1)];
            }),
            _: 1
          })]), n[8] || (n[8] = e("th", {
            class: "w-50"
          }, null, -1)), e("th", lt, [c(B, {
            isAction: "",
            primary: "",
            onClick: n[2] || (n[2] = function(t) {
              return i(d)(), i(Q)(!1);
            })
          }, {
            default: _(function() {
              return [b(l(a.t("1829")), 1)];
            }),
            _: 1
          }), c(B, {
            class: "ml-10 mr-6",
            onClick: n[3] || (n[3] = function(t) {
              return i(Q)();
            })
          }, {
            default: _(function() {
              return [b(l(a.t("2006")), 1)];
            }),
            _: 1
          })])])])])];
        }),
        _: 1
      }, 8, ["modelValue", "title"]), c(Me, {
        ref_key: "linearManager",
        ref: J,
        onChange: i(S)
      }, null, 8, ["onChange"])], 64);
    };
  }
}), mt = /* @__PURE__ */ Y(ot, [["__scopeId", "data-v-2a567250"]]);
export {
  mt as default
};
