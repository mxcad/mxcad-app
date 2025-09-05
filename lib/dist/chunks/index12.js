import { aS as K, Z as s, a6 as _, $ as F, x as C, X as h } from "./lib.js";
import { d as ee, f as te, g as M, m as G, o as T, w as l, l as m, a as u, G as t, Q as f, q as d, t as i, x as ne } from "./vue.js";
import { D as X, C as P, a8 as le, v as ue, b as oe, a as ae, j as V, i as k } from "./vuetify.js";
var re = {
  class: "px-3"
}, ie = {
  class: "d-flex"
}, se = {
  class: ""
};
const ce = /* @__PURE__ */ ee({
  __name: "index",
  setup: function(me) {
    var a = K(), x = a.isShow, Z = a.showDialog, E = a.insertBlock, I = a.list, r = a.currentItem, O = a.openFile, p = a.isGetInsertionPoint, U = a.insertionPoint, v = a.isGetProportion, g = a.proportion, b = a.isUniformProportion, B = a.isGetRotation, N = a.rotation, w = a.isDecomposition, R = a.isAutoComputeOrigin, D = a.isBlockLibrary, $ = a.isBlockLibraryDecomposition, z = a.isBlockLibraryAutoComputeOrigin, L = a.isShowTextAttribute, A = a.isExtractBlock, S = te(), Y = [{
      name: "确定",
      fun: E,
      primary: !0
    }, {
      name: "关闭",
      fun: function() {
        return Z(!1);
      }
    }], c = !1, q = {
      n: function() {
        var e;
        if (!c) {
          var n = (e = S.value) === null || e === void 0 ? void 0 : e.$el, y = n.getElementsByTagName("input")[0];
          y == null || y.focus({
            preventScroll: !0
          });
        }
      },
      b: function() {
        c || O();
      },
      s: function() {
        c || (p.value = !p.value);
      },
      e: function() {
        c || (v.value = !v.value);
      },
      c: function() {
        c || (B.value = !B.value);
      },
      u: function() {
        c || (b.value = !b.value);
      },
      d: function() {
        c || (w.value = !w.value);
      },
      enter: function() {
        E();
      }
    }, Q = M(function() {
      var o;
      if (!((o = r.value) !== null && o !== void 0 && o.filePath)) return "";
      var e = new URL(r.value.filePath), n = e.pathname, y = n.split("/").pop();
      return y;
    }), j = function(e) {
      c = e;
    }, W = M(function() {
      return I.value.map(function(o) {
        return o.name;
      });
    }), H = function(e) {
      var n = W.value.indexOf(e.name);
      n !== -1 && (r.value = I.value[n]);
    }, J = function(e) {
      if (r.value && r.value.filePath) {
        r.value.name = e;
        return;
      }
    };
    return function(o, e) {
      return T(), G(h, {
        title: o.t("1993"),
        modelValue: t(x),
        "onUpdate:modelValue": e[16] || (e[16] = function(n) {
          return f(x) ? x.value = n : null;
        }),
        "max-width": "470",
        footerBtnList: Y,
        keys: q
      }, {
        default: l(function() {
          return [m("div", re, [u(X, null, {
            default: l(function() {
              return [u(P, {
                class: "mt-1"
              }, {
                default: l(function() {
                  return [m("div", ie, [t(D) || t(r) && !t(r).filePath ? (T(), G(t(le), {
                    key: 0,
                    class: "mt-1",
                    ref_key: "autocomplete",
                    ref: S,
                    "onUpdate:focused": j,
                    items: t(I),
                    "item-title": "name",
                    "return-object": "",
                    modelValue: t(r),
                    "onUpdate:modelValue": e[0] || (e[0] = function(n) {
                      return f(r) ? r.value = n : null;
                    })
                  }, {
                    prepend: l(function() {
                      return [u(s, {
                        class: "",
                        "key-name": "N"
                      }, {
                        default: l(function() {
                          return [d(i(o.t("1923")), 1)];
                        }),
                        _: 1
                      })];
                    }),
                    _: 1
                  }, 8, ["items", "modelValue"])) : (T(), G(ue, {
                    key: 1,
                    class: "mt-1",
                    ref_key: "autocomplete",
                    ref: S,
                    "onUpdate:focused": j,
                    items: t(I),
                    "item-title": "name",
                    "return-object": "",
                    "model-value": t(r),
                    "onUpdate:search": J,
                    "onUpdate:modelValue": H
                  }, {
                    prepend: l(function() {
                      return [u(s, {
                        class: "",
                        "key-name": "N"
                      }, {
                        default: l(function() {
                          return [d(i(o.t("1923")), 1)];
                        }),
                        _: 1
                      })];
                    }),
                    _: 1
                  }, 8, ["items", "model-value"])), u(_, {
                    onClick: t(O),
                    class: "ml-1"
                  }, {
                    default: l(function() {
                      return [u(s, {
                        "key-name": "B"
                      }, {
                        default: l(function() {
                          return [d(i(o.t("1924")), 1)];
                        }),
                        _: 1
                      }), u(oe, {
                        icon: "class:iconfont more"
                      })];
                    }),
                    _: 1
                  }, 8, ["onClick"])]), u(ae, {
                    text: t(r) && t(r).filePath || o.t("1994")
                  }, {
                    activator: l(function(n) {
                      var y = n.props;
                      return [m("p", ne({
                        class: "mt-1 text-truncate"
                      }, y), i(o.t("1994")) + ": " + i(Q.value), 17)];
                    }),
                    _: 1
                  }, 8, ["text"])];
                }),
                _: 1
              }), u(P, {
                cols: 3,
                class: "h-100"
              })];
            }),
            _: 1
          }), u(X, {
            "align-stretch": ""
          }, {
            default: l(function() {
              return [u(P, {
                cols: "4",
                "align-self": "stretch"
              }, {
                default: l(function() {
                  return [u(F, {
                    title: o.t("209"),
                    class: "h-100"
                  }, {
                    default: l(function() {
                      return [u(V, {
                        class: "",
                        modelValue: t(p),
                        "onUpdate:modelValue": e[1] || (e[1] = function(n) {
                          return f(p) ? p.value = n : null;
                        })
                      }, {
                        label: l(function() {
                          return [u(s, {
                            "key-name": "S"
                          }, {
                            default: l(function() {
                              return [d(i(o.t("1927")), 1)];
                            }),
                            _: 1
                          })];
                        }),
                        _: 1
                      }, 8, ["modelValue"]), u(k, {
                        class: "mt-1",
                        type: "number",
                        modelValue: t(U).x,
                        "onUpdate:modelValue": e[2] || (e[2] = function(n) {
                          return t(U).x = n;
                        }),
                        disabled: t(p)
                      }, {
                        prepend: l(function() {
                          return C(e[17] || (e[17] = [m("span", {
                            class: ""
                          }, " X:", -1)]));
                        }),
                        _: 1
                      }, 8, ["modelValue", "disabled"]), u(k, {
                        class: "mt-1",
                        type: "number",
                        modelValue: t(U).y,
                        "onUpdate:modelValue": e[3] || (e[3] = function(n) {
                          return t(U).y = n;
                        }),
                        disabled: t(p)
                      }, {
                        prepend: l(function() {
                          return C(e[18] || (e[18] = [m("span", {
                            class: ""
                          }, " Y:", -1)]));
                        }),
                        _: 1
                      }, 8, ["modelValue", "disabled"]), u(k, {
                        class: "mt-1",
                        type: "number",
                        modelValue: t(U).z,
                        "onUpdate:modelValue": e[4] || (e[4] = function(n) {
                          return t(U).z = n;
                        }),
                        disabled: t(p)
                      }, {
                        prepend: l(function() {
                          return C(e[19] || (e[19] = [m("span", {
                            class: ""
                          }, " Z:", -1)]));
                        }),
                        _: 1
                      }, 8, ["modelValue", "disabled"])];
                    }),
                    _: 1
                  }, 8, ["title"])];
                }),
                _: 1
              }), u(P, {
                cols: "4",
                "align-self": "stretch"
              }, {
                default: l(function() {
                  return [u(F, {
                    title: o.t("1686"),
                    class: "h-100"
                  }, {
                    default: l(function() {
                      return [u(V, {
                        class: "",
                        modelValue: t(v),
                        "onUpdate:modelValue": e[5] || (e[5] = function(n) {
                          return f(v) ? v.value = n : null;
                        })
                      }, {
                        label: l(function() {
                          return [u(s, {
                            "key-name": "E"
                          }, {
                            default: l(function() {
                              return [d(i(o.t("1927")), 1)];
                            }),
                            _: 1
                          })];
                        }),
                        _: 1
                      }, 8, ["modelValue"]), u(k, {
                        class: "mt-1",
                        type: "number",
                        step: "0.001",
                        modelValue: t(g).x,
                        "onUpdate:modelValue": e[6] || (e[6] = function(n) {
                          return t(g).x = n;
                        }),
                        disabled: t(v)
                      }, {
                        prepend: l(function() {
                          return C(e[20] || (e[20] = [m("span", {
                            class: ""
                          }, " X:", -1)]));
                        }),
                        _: 1
                      }, 8, ["modelValue", "disabled"]), u(k, {
                        class: "mt-1",
                        type: "number",
                        modelValue: t(g).y,
                        "onUpdate:modelValue": e[7] || (e[7] = function(n) {
                          return t(g).y = n;
                        }),
                        step: "0.001",
                        disabled: t(v) || t(b)
                      }, {
                        prepend: l(function() {
                          return C(e[21] || (e[21] = [m("span", {
                            class: ""
                          }, " Y:", -1)]));
                        }),
                        _: 1
                      }, 8, ["modelValue", "disabled"]), u(k, {
                        class: "mt-1",
                        type: "number",
                        modelValue: t(g).z,
                        "onUpdate:modelValue": e[8] || (e[8] = function(n) {
                          return t(g).z = n;
                        }),
                        step: "0.001",
                        disabled: t(v) || t(b)
                      }, {
                        prepend: l(function() {
                          return C(e[22] || (e[22] = [m("span", {
                            class: ""
                          }, " Z:", -1)]));
                        }),
                        _: 1
                      }, 8, ["modelValue", "disabled"]), u(V, {
                        class: "ml-4 mt-1",
                        modelValue: t(b),
                        "onUpdate:modelValue": e[9] || (e[9] = function(n) {
                          return f(b) ? b.value = n : null;
                        })
                      }, {
                        label: l(function() {
                          return [u(s, {
                            "key-name": "U"
                          }, {
                            default: l(function() {
                              return [d(i(o.t("1995")), 1)];
                            }),
                            _: 1
                          })];
                        }),
                        _: 1
                      }, 8, ["modelValue"])];
                    }),
                    _: 1
                  }, 8, ["title"])];
                }),
                _: 1
              }), u(P, {
                cols: "4",
                "align-self": "stretch"
              }, {
                default: l(function() {
                  return [u(F, {
                    title: o.t("176"),
                    class: "h-100"
                  }, {
                    default: l(function() {
                      return [u(V, {
                        class: "",
                        modelValue: t(B),
                        "onUpdate:modelValue": e[10] || (e[10] = function(n) {
                          return f(B) ? B.value = n : null;
                        })
                      }, {
                        label: l(function() {
                          return [u(s, {
                            "key-name": "C"
                          }, {
                            default: l(function() {
                              return [d(i(o.t("1927")), 1)];
                            }),
                            _: 1
                          })];
                        }),
                        _: 1
                      }, 8, ["modelValue"]), u(k, {
                        class: "mt-1",
                        type: "number",
                        modelValue: t(N),
                        "onUpdate:modelValue": e[11] || (e[11] = function(n) {
                          return f(N) ? N.value = n : null;
                        }),
                        disabled: t(B)
                      }, {
                        prepend: l(function() {
                          return [m("span", se, i(o.t("169")) + ":", 1)];
                        }),
                        _: 1
                      }, 8, ["modelValue", "disabled"])];
                    }),
                    _: 1
                  }, 8, ["title"])];
                }),
                _: 1
              })];
            }),
            _: 1
          }), u(V, {
            class: "mt-2",
            "model-value": t(D) ? t($) : t(w),
            "onUpdate:modelValue": e[12] || (e[12] = function(n) {
              t(D) ? $.value = !!n : w.value = !!n;
            })
          }, {
            label: l(function() {
              return [u(s, {
                "key-name": "D"
              }, {
                default: l(function() {
                  return [d(i(o.t("216")), 1)];
                }),
                _: 1
              })];
            }),
            _: 1
          }, 8, ["model-value"]), u(V, {
            class: "mt-2",
            modelValue: t(A),
            "onUpdate:modelValue": e[13] || (e[13] = function(n) {
              return f(A) ? A.value = n : null;
            })
          }, {
            label: l(function() {
              return [u(s, {
                "key-name": "D"
              }, {
                default: l(function() {
                  return [d(i(o.t("1997")), 1)];
                }),
                _: 1
              })];
            }),
            _: 1
          }, 8, ["modelValue"]), u(V, {
            class: "mt-2",
            modelValue: t(L),
            "onUpdate:modelValue": e[14] || (e[14] = function(n) {
              return f(L) ? L.value = n : null;
            })
          }, {
            label: l(function() {
              return [u(s, {
                "key-name": "D"
              }, {
                default: l(function() {
                  return [d(i(o.t("1998")), 1)];
                }),
                _: 1
              })];
            }),
            _: 1
          }, 8, ["modelValue"]), u(V, {
            class: "mt-2",
            "model-value": t(D) ? t(z) : t(R),
            "onUpdate:modelValue": e[15] || (e[15] = function(n) {
              t(D) ? z.value = !!n : R.value = !!n;
            })
          }, {
            label: l(function() {
              return [u(s, {
                "key-name": "D"
              }, {
                default: l(function() {
                  return [d(i(o.t("1999")), 1)];
                }),
                _: 1
              })];
            }),
            _: 1
          }, 8, ["model-value"])])];
        }),
        _: 1
      }, 8, ["title", "modelValue"]);
    };
  }
});
export {
  ce as default
};
