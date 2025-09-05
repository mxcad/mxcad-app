import { bG as K, t as D, z as fe, I as de, Z as y, a0 as ve, aI as me, $ as ce, X as pe, C as ye, x as Ve, bH as ke, bI as T, R as ge } from "./lib.js";
import { d as be, f as c, i as W, m as q, o as z, w as a, l as xe, a as e, q as s, t as V, x as Ce, A as we, s as Y, B as Be, G as F, Q as Ie } from "./vue.js";
import { h as Le, M as Me, a as $ } from "./mxcad.js";
import { s as ee } from "./pinia.js";
import { D as w, C as n, c as B, k as Se, d as De, Q as Te, S as te, j as Ae } from "./vuetify.js";
var Ne = {
  class: "px-2 mt-5"
};
const Re = /* @__PURE__ */ be({
  __name: "index",
  setup: function(je) {
    var A, N, I = K.isShow, X = K.showDialog, p = {}, R = c([]), b = c("所有图元");
    W(I, function(u) {
      u && ye(function() {
        p = {};
        var t = new Le();
        t.allSelect(), t.forEach(function(l) {
          var r = l.getObjectName();
          p[r] ? p[r].push(l) : p[r] = [l];
        }), R.value = [{
          title: "所有图元",
          value: "all"
        }].concat(Ve(Object.keys(p).map(function(l) {
          return {
            title: ke[l] || l,
            value: l
          };
        }))), b.value = R.value[0].value;
      });
    });
    var Z = [{
      title: "Color",
      value: 1
    }, {
      title: "Layer",
      value: 2
    }, {
      title: "LineType",
      value: 3
    }], d = c(Z[0].value), _ = [{
      title: "= " + D("等于"),
      value: "="
    }, {
      title: "!= " + D("不等于"),
      value: "!="
    }, {
      title: "> " + D("大于"),
      value: ">"
    }, {
      title: D("全部选择"),
      value: "all"
    }], v = c(_[0].value), L = c(!0), ae = ee(fe()), U = ae.list, k = c((A = U.value[0]) === null || A === void 0 ? void 0 : A.name), le = ee(de()), j = le.lineTypeList, g = c((N = j.value[0]) === null || N === void 0 ? void 0 : N.name), E = c(!0);
    W(d, function() {
      k.value || (k.value = U.value[0].name), g.value || (g.value = j.value[0].name);
    });
    var M = c(), ue = function() {
      X(!1);
      var t = Me.getCurrentMxCAD(), l = function(H) {
        var S, f;
        if (d.value === 1 && (f = "trueColor"), d.value === 2 && (f = "layer"), d.value === 3 && (f = "linetype"), !!f) {
          var re = function(i) {
            if (i instanceof $ && f === "trueColor") {
              var m, o, J = new $(), x = (m = M.value) === null || m === void 0 || (m = m.color) === null || m === void 0 ? void 0 : m.method;
              if (x !== T.kByColor) {
                var C;
                if (x === T.kByLayer && i.method === x || x === T.kByBlock && i.method === x || x === T.kByACI && i.colorIndex === ((C = M.value) === null || C === void 0 || (C = C.color) === null || C === void 0 ? void 0 : C.index)) return !0;
              }
              var G = new THREE.Color((o = M.value) === null || o === void 0 || (o = o.color) === null || o === void 0 ? void 0 : o.color), ie = G.r, oe = G.g, se = G.b;
              J.setRGB(ie * 255, oe * 255, se * 255);
              var P = Number(J.getColorValue()), Q = Number(i.getColorValue());
              return v.value === "=" ? P === Q : v.value === "!=" ? P !== Q : v.value === ">" ? P < Q : !1;
            }
            return !1;
          };
          E.value || t.mxdraw.clearMxCurrentSelect();
          var O = [];
          (S = p[H]) === null || S === void 0 || S.forEach(function(h) {
            var i = !1, m = h.getMcDbEntity();
            if (m) {
              if (v.value === "all")
                i = !0;
              else {
                var o = m[f];
                re(o) && (i = !0), v.value === "=" ? (f === "layer" && o === k.value || f === "linetype" && o === g.value) && (i = !0) : v.value === "!=" ? (f === "layer" && o !== k.value || f === "linetype" && o !== g.value) && (i = !0) : v.value === ">" && (f === "layer" && o > k.value || f === "linetype" && o > g.value) && (i = !0), L.value || (i = !i);
              }
              i && O.push(h);
            }
          }), t.addCurrentSelect(O, O.length < 30);
        }
      };
      b.value === "all" ? Object.keys(p).forEach(function(r) {
        l(r);
      }) : L.value ? l(b.value) : Object.keys(p).filter(function(r) {
        return r !== b.value;
      }).forEach(function(r) {
        l(r);
      }), t.updateDisplay();
    }, ne = [{
      name: "确定",
      fun: ue,
      primary: !0
    }, {
      name: "关闭",
      fun: function() {
        return X(!1);
      }
    }];
    return function(u, t) {
      return z(), q(pe, {
        title: u.t("224"),
        "max-width": "320",
        modelValue: F(I),
        "onUpdate:modelValue": t[6] || (t[6] = function(l) {
          return Ie(I) ? I.value = l : null;
        }),
        footerBtnList: ne
      }, {
        default: a(function() {
          return [xe("div", Ne, [e(w, null, {
            default: a(function() {
              return [e(n, {
                cols: "4",
                class: "text-right"
              }, {
                default: a(function() {
                  return [e(y, {
                    "key-name": "V"
                  }, {
                    default: a(function() {
                      return [s(V(u.t("2073")), 1)];
                    }),
                    _: 1
                  }), t[7] || (t[7] = s(": ", -1))];
                }),
                _: 1
              }), e(n, {
                cols: "6"
              }, {
                default: a(function() {
                  return [e(B, {
                    class: "mx-1",
                    items: [u.t("2074")],
                    "model-value": u.t("2074")
                  }, null, 8, ["items", "model-value"])];
                }),
                _: 1
              }), e(n, {
                cols: "2"
              }, {
                default: a(function() {
                  return [e(ve, {
                    disabled: ""
                  })];
                }),
                _: 1
              })];
            }),
            _: 1
          }), e(w, null, {
            default: a(function() {
              return [e(n, {
                cols: "4",
                class: "text-right"
              }, {
                default: a(function() {
                  return [e(y, {
                    "key-name": "B"
                  }, {
                    default: a(function() {
                      return [s(V(u.t("2075")), 1)];
                    }),
                    _: 1
                  }), t[8] || (t[8] = s(": ", -1))];
                }),
                _: 1
              }), e(n, {
                cols: "6"
              }, {
                default: a(function() {
                  return [e(B, {
                    class: "mx-1",
                    items: R.value,
                    modelValue: b.value,
                    "onUpdate:modelValue": t[0] || (t[0] = function(l) {
                      return b.value = l;
                    })
                  }, null, 8, ["items", "modelValue"])];
                }),
                _: 1
              }), e(n, {
                cols: "2"
              })];
            }),
            _: 1
          }), e(w, null, {
            default: a(function() {
              return [e(n, {
                cols: "4",
                class: "text-right",
                "align-self": "start"
              }, {
                default: a(function() {
                  return [e(y, {
                    "key-name": "P"
                  }, {
                    default: a(function() {
                      return [s(V(u.t("206")), 1)];
                    }),
                    _: 1
                  }), t[9] || (t[9] = s(": ", -1))];
                }),
                _: 1
              }), e(n, {
                cols: "6"
              }, {
                default: a(function() {
                  return [e(Se, {
                    items: Z,
                    border: "",
                    height: "160",
                    density: "compact",
                    variant: "text"
                  }, {
                    item: a(function(l) {
                      var r = l.props;
                      return [e(De, Ce(r, {
                        onClick: function(S) {
                          return d.value = r.value;
                        },
                        class: d.value === r.value ? "bg-light-blue-darken-2" : ""
                      }), null, 16, ["onClick", "class"])];
                    }),
                    _: 1
                  })];
                }),
                _: 1
              }), e(n, {
                cols: "2"
              })];
            }),
            _: 1
          }), e(w, null, {
            default: a(function() {
              return [e(n, {
                cols: "4",
                class: "text-right"
              }, {
                default: a(function() {
                  return [e(y, {
                    "key-name": "O"
                  }, {
                    default: a(function() {
                      return [s(V(u.t("2077")), 1)];
                    }),
                    _: 1
                  }), t[10] || (t[10] = s(": ", -1))];
                }),
                _: 1
              }), e(n, {
                cols: "6"
              }, {
                default: a(function() {
                  return [e(B, {
                    class: "mx-1",
                    items: _,
                    modelValue: v.value,
                    "onUpdate:modelValue": t[1] || (t[1] = function(l) {
                      return v.value = l;
                    })
                  }, null, 8, ["modelValue"])];
                }),
                _: 1
              }), e(n, {
                cols: "2"
              })];
            }),
            _: 1
          }), e(w, null, {
            default: a(function() {
              return [e(n, {
                cols: "4",
                class: "text-right"
              }, {
                default: a(function() {
                  return [e(y, {
                    "key-name": "V"
                  }, {
                    default: a(function() {
                      return [s(V(u.t("2078")), 1)];
                    }),
                    _: 1
                  }), t[11] || (t[11] = s(": ", -1))];
                }),
                _: 1
              }), e(n, {
                cols: "6"
              }, {
                default: a(function() {
                  return [we(e(me, {
                    ref_key: "selectColor",
                    ref: M
                  }, null, 512), [[Be, d.value === 1]]), d.value === 2 ? (z(), q(B, {
                    key: 0,
                    modelValue: k.value,
                    "onUpdate:modelValue": t[2] || (t[2] = function(l) {
                      return k.value = l;
                    }),
                    items: F(U),
                    "item-title": "name",
                    "item-value": "name"
                  }, null, 8, ["modelValue", "items"])) : Y("", !0), d.value === 3 ? (z(), q(B, {
                    key: 1,
                    modelValue: g.value,
                    "onUpdate:modelValue": t[3] || (t[3] = function(l) {
                      return g.value = l;
                    }),
                    items: F(j),
                    "item-title": "name",
                    "item-value": "name"
                  }, null, 8, ["modelValue", "items"])) : Y("", !0)];
                }),
                _: 1
              }), e(n, {
                cols: "2"
              })];
            }),
            _: 1
          }), e(ce, {
            title: u.t("2073")
          }, {
            default: a(function() {
              return [e(Te, {
                class: "",
                inline: !1,
                modelValue: L.value,
                "onUpdate:modelValue": t[4] || (t[4] = function(l) {
                  return L.value = l;
                })
              }, {
                default: a(function() {
                  return [e(te, {
                    value: !0
                  }, {
                    label: a(function() {
                      return [e(y, {
                        "key-name": "I"
                      }, {
                        default: a(function() {
                          return [s(V(u.t("2079")), 1)];
                        }),
                        _: 1
                      })];
                    }),
                    _: 1
                  }), e(te, {
                    value: !1,
                    class: "mt-1"
                  }, {
                    label: a(function() {
                      return [e(y, {
                        "key-name": "E"
                      }, {
                        default: a(function() {
                          return [s(V(u.t("2080")), 1)];
                        }),
                        _: 1
                      })];
                    }),
                    _: 1
                  })];
                }),
                _: 1
              }, 8, ["modelValue"])];
            }),
            _: 1
          }, 8, ["title"]), e(Ae, {
            class: "mt-2",
            modelValue: E.value,
            "onUpdate:modelValue": t[5] || (t[5] = function(l) {
              return E.value = l;
            })
          }, {
            label: a(function() {
              return [e(y, {
                "key-name": "A"
              }, {
                default: a(function() {
                  return [s(V(u.t("2081")), 1)];
                }),
                _: 1
              })];
            }),
            _: 1
          }, 8, ["modelValue"])])];
        }),
        _: 1
      }, 8, ["title", "modelValue"]);
    };
  }
}), Qe = /* @__PURE__ */ ge(Re, [["__scopeId", "data-v-8cfd1a49"]]);
export {
  Qe as default
};
