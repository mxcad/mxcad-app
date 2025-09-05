import { l as q, bl as G, _ as j, a as k, bk as ie, aL as pe, a6 as ue, x as ee, X as se, y as me, bm as ge, R as he, by as te, j as ne, $ as Q, Z as X, a0 as we, t as E, a1 as be, h as ye } from "./lib.js";
import { f as $, d as oe, m as ae, o as Y, w as i, l as h, A as De, a as n, Q as U, ac as _e, G as o, q as P, t as S, c as fe, F as ce, b as ke, x as Ce } from "./vue.js";
import { V as Z, a as Se, h as de, D as z, C as N, c as Ve, b as Pe, v as re } from "./vuetify.js";
import { g as Fe, d as le, c as Ie, G as Me, M as xe } from "./mxcad.js";
import { M as Ae } from "./mxdraw.js";
function ve(p) {
  var d = [], a = null, v = p.split(`
`);
  return v.forEach(function(g) {
    if (g.trim() !== "")
      if (g.startsWith("*")) {
        a && (a.value += ")", d.push(a));
        var m = g.substring(1).split(",").map(function(s) {
          return s.trim();
        });
        a = {
          id: m[0],
          name: m[1],
          value: "(",
          imgPath: new URL("imgs/".concat(m[0], ".png"), G()).href
        };
      } else {
        if (!a) {
          console.error("Invalid pattern file format. Missing pattern start marker (*)");
          return;
        }
        var _ = g.trim().split(",").map(function(s) {
          return s.startsWith(".") ? "0" + s : s;
        }).join(), u = (a.value === "(" ? "(" : " (") + _ + ")";
        a.value += u;
      }
  }), a && d.push(a), d;
}
var H = /* @__PURE__ */ function(p) {
  return p.ANSI = "ANSI", p.ISO = "ISO", p.ANY = "ANY", p;
}(H || {}), J = q(q(q({}, "ANSI", new URL("fonts/mx.pat", G()).href), "ISO", new URL("fonts/mxiso.pat", G()).href), "ANY", new URL("fonts/mxuser.pat", G()).href), D = $(), L = $(0), K = {};
Object.keys(J).forEach(/* @__PURE__ */ function() {
  var p = j(/* @__PURE__ */ k.mark(function d(a) {
    var v, g, m, _;
    return k.wrap(function(u) {
      for (; ; ) switch (u.prev = u.next) {
        case 0:
          return v = J[a], u.next = 1, fetch(v);
        case 1:
          return g = u.sent, u.next = 2, g.blob();
        case 2:
          return m = u.sent, u.next = 3, ie(m);
        case 3:
          _ = u.sent, K[a] = ve(_), D.value || R(a);
        case 4:
        case "end":
          return u.stop();
      }
    }, d);
  }));
  return function(d) {
    return p.apply(this, arguments);
  };
}());
var O = $(""), R = function(d) {
  O.value = J[d], D.value = K[d];
  var a = 0;
  T.value && (a = D.value.indexOf(T.value)), T.value = D.value[a];
}, T = $(), Ne = function(d) {
  if (D.value) {
    var a = D.value.indexOf(d);
    a >= 0 && (L.value = a);
  }
  T.value = d;
}, Ue = function() {
  return {
    patContent: D,
    activeIndex: L,
    defaultPatContents: K,
    switchPath: R,
    filePath: O,
    item: T,
    onchange: Ne
  };
}, $e = {
  class: "px-3"
}, Be = {
  class: "d-flex algin-center mt-3"
}, je = {
  class: "mt-2"
}, Le = {
  class: "fill_box"
}, Oe = ["onClick"], Re = {
  class: "d-inline-block text-truncate"
};
const Te = /* @__PURE__ */ oe({
  __name: "FillSelectDialog",
  emits: ["change"],
  setup: function(d, a) {
    var v = a.expose, g = a.emit, m = pe(!1), _ = m.isShow, u = m.showDialog, s = $(), W = function() {
      s.value && s.value.click();
    }, I = /* @__PURE__ */ function() {
      var b = j(/* @__PURE__ */ k.mark(function r(f) {
        var C, V, x, A, l;
        return k.wrap(function(e) {
          for (; ; ) switch (e.prev = e.next) {
            case 0:
              if (C = f.target, V = C.files, V) {
                e.next = 1;
                break;
              }
              return e.abrupt("return");
            case 1:
              return x = V[0], e.next = 2, ge(x);
            case 2:
              if (A = e.sent, me(A) === "object") {
                e.next = 3;
                break;
              }
              return e.abrupt("return");
            case 3:
              return C.value = "", e.next = 4, ie(A);
            case 4:
              l = e.sent, D.value = ve(l);
            case 5:
            case "end":
              return e.stop();
          }
        }, r);
      }));
      return function(f) {
        return b.apply(this, arguments);
      };
    }(), M = g, w = function() {
      if (D.value) {
        var r = D.value[L.value];
        M("change", r);
      }
      u(!1);
    }, F = [{
      name: "确定",
      fun: w,
      primary: !0
    }, {
      name: "关闭",
      fun: function() {
        return u(!1);
      }
    }];
    return v({
      showDialog: u
    }), function(b, r) {
      return Y(), ae(se, {
        title: b.t("2040"),
        "max-width": "400",
        modelValue: o(_),
        "onUpdate:modelValue": r[4] || (r[4] = function(f) {
          return U(_) ? _.value = f : null;
        }),
        footerBtnList: F
      }, {
        default: i(function() {
          return [h("div", $e, [h("div", Be, [De(h("input", {
            class: "form__inset w-100",
            disabled: !0,
            "onUpdate:modelValue": r[0] || (r[0] = function(f) {
              return U(O) ? O.value = f : null;
            })
          }, null, 512), [[_e, o(O)]]), n(ue, {
            onClick: W,
            class: "ml-1"
          }, {
            default: i(function() {
              return [P(S(b.t("219")) + "(F)...", 1)];
            }),
            _: 1
          })]), h("input", {
            type: "file",
            ref_key: "fillFileSelect",
            ref: s,
            onChange: I,
            style: {
              display: "none"
            },
            accept: ".pat"
          }, null, 544), h("div", je, [n(Z, {
            density: "compact",
            class: "mr-2",
            onClick: r[1] || (r[1] = function(f) {
              return o(R)(o(H).ANSI);
            })
          }, {
            default: i(function() {
              return ee(r[5] || (r[5] = [P("ANSI", -1)]));
            }),
            _: 1
          }), n(Z, {
            density: "compact",
            class: "mr-2",
            onClick: r[2] || (r[2] = function(f) {
              return o(R)(o(H).ISO);
            })
          }, {
            default: i(function() {
              return ee(r[6] || (r[6] = [P("ISO", -1)]));
            }),
            _: 1
          }), n(Z, {
            density: "compact",
            onClick: r[3] || (r[3] = function(f) {
              return o(R)(o(H).ANY);
            })
          }, {
            default: i(function() {
              return [P(S(b.t("2041")), 1)];
            }),
            _: 1
          })]), h("div", Le, [(Y(!0), fe(ce, null, ke(o(D), function(f, C) {
            return Y(), ae(Se, {
              text: f.id + " " + f.name,
              location: "bottom",
              "open-delay": 800
            }, {
              activator: i(function(V) {
                var x = V.props;
                return [h("div", Ce({
                  ref_for: !0
                }, x, {
                  class: ["fill_pattern", o(L) === C ? "fill_pattern_active" : ""],
                  onClick: function(l) {
                    return L.value = C;
                  },
                  onDblclick: w
                }), [n(de, {
                  src: f.imgPath || "",
                  width: "32",
                  height: "32"
                }, null, 8, ["src"]), h("span", Re, S(f.id), 1)], 16, Oe)];
              }),
              _: 2
            }, 1032, ["text"]);
          }), 256))])])];
        }),
        _: 1
      }, 8, ["title", "modelValue"]);
    };
  }
}), Ee = /* @__PURE__ */ he(Te, [["__scopeId", "data-v-0b03bfc9"]]);
var Ge = {
  class: "px-3"
}, Ye = {
  class: "d-flex align-center"
}, He = {
  class: "mr-2"
};
const ze = /* @__PURE__ */ oe({
  __name: "index",
  setup: function(d) {
    var a = te.isShow, v = te.showDialog, g = $(), m = Ue(), _ = m.patContent, u = m.onchange, s = m.item, W = function(e) {
      var t;
      (t = g.value) === null || t === void 0 || t.showDialog(e);
    }, I = ne(0, "PatternFillingDialog_angle"), M = ne(11, "PatternFillingDialog_proportion"), w, F, b = /* @__PURE__ */ function() {
      var l = j(/* @__PURE__ */ k.mark(function e() {
        var t, y;
        return k.wrap(function(c) {
          for (; ; ) switch (c.prev = c.next) {
            case 0:
              return v(!1), t = new Fe(), t.clearLastInputPoint(), t.setMessage(`
` + E("指定填充区域内部一点") + ":"), t.disableAllTrace(!0), t.setDisableOsnap(!0), c.next = 1, t.go();
            case 1:
              y = c.sent, y && (F = y, w = "point"), v(!0);
            case 2:
            case "end":
              return c.stop();
          }
        }, e);
      }));
      return function() {
        return l.apply(this, arguments);
      };
    }(), r, f = /* @__PURE__ */ function() {
      var l = j(/* @__PURE__ */ k.mark(function e() {
        var t, y, c;
        return k.wrap(function(B) {
          for (; ; ) switch (B.prev = B.next) {
            case 0:
              return v(!1), B.next = 1, le.userSelect(E("选择对象"));
            case 1:
              t = B.sent, t && t.length > 0 && (y = t[0], c = y.getMcDbEntity(), c && (r = c), w = "object"), v(!0);
            case 2:
            case "end":
              return B.stop();
          }
        }, e);
      }));
      return function() {
        return l.apply(this, arguments);
      };
    }(), C = /* @__PURE__ */ function() {
      var l = j(/* @__PURE__ */ k.mark(function e() {
        var t, y;
        return k.wrap(function(c) {
          for (; ; ) switch (c.prev = c.next) {
            case 0:
              if (!(w === "point" && F)) {
                c.next = 2;
                break;
              }
              if (t = le.builderHatchFromPoint(F), t) {
                c.next = 1;
                break;
              }
              return Ae.acutPrintf(E("没有找到闭合区域") + `
`), ye().error(E("没有找到闭合区域")), c.abrupt("return");
            case 1:
              y = xe.getCurrentMxCAD(), s.value && (y.addPatternDefinition(s.value.id, s.value.value), y.drawPatternDefinition = s.value.id), t.patternAngle = I.value, y.drawHatch(t, M.value * 10), v(!1), be(), w = F = void 0;
            case 2:
              w === "object" && r && (r instanceof Ie && new Me(), r = w = void 0, v(!1));
            case 3:
            case "end":
              return c.stop();
          }
        }, e);
      }));
      return function() {
        return l.apply(this, arguments);
      };
    }(), V = function() {
      w = r = F = void 0, v(!1);
    }, x = [{
      name: "确定",
      fun: C,
      primary: !0,
      disabled: function() {
        return typeof w == "undefined";
      }
    }, {
      name: "关闭",
      fun: V
    }], A = {
      enter: function() {
        var e;
        ((e = document.activeElement) === null || e === void 0 ? void 0 : e.tagName) !== "INPUT" && C();
      },
      esc: V,
      k: b,
      b: f
    };
    return function(l, e) {
      return Y(), fe(ce, null, [n(se, {
        title: l.t("2042"),
        "max-width": "360",
        modelValue: o(a),
        "onUpdate:modelValue": e[4] || (e[4] = function(t) {
          return U(a) ? a.value = t : null;
        }),
        footerBtnList: x,
        keys: A
      }, {
        default: i(function() {
          return [h("div", Ge, [n(Q, {
            title: l.t("2043"),
            class: "mt-2"
          }, {
            default: i(function() {
              return [n(z, null, {
                default: i(function() {
                  return [n(N, {
                    cols: "8"
                  }, {
                    default: i(function() {
                      return [n(Ve, {
                        items: o(_),
                        "item-title": "id",
                        modelValue: o(s),
                        "onUpdate:modelValue": [e[0] || (e[0] = function(t) {
                          return U(s) ? s.value = t : null;
                        }), o(u)],
                        "return-object": ""
                      }, {
                        prepend: i(function() {
                          return [P(S(l.t("1624")) + ": ", 1)];
                        }),
                        _: 1
                      }, 8, ["items", "modelValue", "onUpdate:modelValue"])];
                    }),
                    _: 1
                  }), n(N, {
                    cols: "4"
                  }, {
                    default: i(function() {
                      return [n(ue, {
                        style: {
                          "min-width": "60px"
                        },
                        onClick: e[1] || (e[1] = function(t) {
                          return W(!0);
                        })
                      }, {
                        default: i(function() {
                          return [n(Pe, {
                            icon: "class:iconfont more"
                          })];
                        }),
                        _: 1
                      })];
                    }),
                    _: 1
                  })];
                }),
                _: 1
              }), n(z, null, {
                default: i(function() {
                  return [n(N, {
                    cols: "8"
                  }, {
                    default: i(function() {
                      var t;
                      return [h("div", Ye, [h("span", He, S(l.t("2044")) + ":", 1), n(de, {
                        src: ((t = o(s)) === null || t === void 0 ? void 0 : t.imgPath) || "",
                        width: "32",
                        height: "32",
                        style: {
                          flex: "unset"
                        }
                      }, null, 8, ["src"])])];
                    }),
                    _: 1
                  }), n(N, {
                    cols: "4"
                  })];
                }),
                _: 1
              })];
            }),
            _: 1
          }, 8, ["title"]), n(Q, {
            title: l.t("2045"),
            class: "mt-2"
          }, {
            default: i(function() {
              return [n(z, null, {
                default: i(function() {
                  return [n(N, {
                    cols: "6"
                  }, {
                    default: i(function() {
                      return [n(X, {
                        "key-name": "G",
                        colon: ""
                      }, {
                        default: i(function() {
                          return [P(S(l.t("169")), 1)];
                        }),
                        _: 1
                      }), n(re, {
                        modelValue: o(I),
                        "onUpdate:modelValue": e[2] || (e[2] = function(t) {
                          return U(I) ? I.value = t : null;
                        }),
                        items: [0, 5, 10, 15, 20, 30, 45, 60, 90, 95, 100, 120, 135, 150]
                      }, null, 8, ["modelValue"])];
                    }),
                    _: 1
                  }), n(N, {
                    cols: "6"
                  }, {
                    default: i(function() {
                      return [n(X, {
                        "key-name": "S",
                        colon: ""
                      }, {
                        default: i(function() {
                          return [P(S(l.t("1686")), 1)];
                        }),
                        _: 1
                      }), n(re, {
                        modelValue: o(M),
                        "onUpdate:modelValue": e[3] || (e[3] = function(t) {
                          return U(M) ? M.value = t : null;
                        }),
                        items: [0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2, 11]
                      }, null, 8, ["modelValue"])];
                    }),
                    _: 1
                  })];
                }),
                _: 1
              })];
            }),
            _: 1
          }, 8, ["title"]), n(Q, {
            title: l.t("2046"),
            class: "mt-2"
          }, {
            default: i(function() {
              return [h("div", null, [n(we, {
                onClick: b
              }), n(X, {
                "key-name": "K"
              }, {
                default: i(function() {
                  return [P(S(l.t("2047")) + ": " + S(l.t("1965")), 1)];
                }),
                _: 1
              })])];
            }),
            _: 1
          }, 8, ["title"])])];
        }),
        _: 1
      }, 8, ["title", "modelValue"]), n(Ee, {
        ref_key: "fillSelectDialog",
        ref: g,
        onChange: o(u)
      }, null, 8, ["onChange"])], 64);
    };
  }
});
export {
  ze as default
};
