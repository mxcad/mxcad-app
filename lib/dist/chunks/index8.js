import { aD as A, j as F, _ as G, a as y, w as Q, t as p, aE as le, Z as V, $ as se, a0 as ue, x as X, X as pe, a1 as me, h as Z, H as be, R as ve } from "./lib.js";
import { f as _, h as ke, d as ge, i as ye, m as Be, o as q, w as l, l as T, a as r, G as s, Q as x, q as D, t as g, p as ie, c as oe } from "./vue.js";
import { f as Ce, M as W, l as Ve, g as De, h as Oe, o as we } from "./mxcad.js";
import { v as Me, D as Se, C as ce, j as fe, i as Y, Q as Ee, S as J, b as Te } from "./vuetify.js";
var j = /* @__PURE__ */ function(B) {
  return B[B.HOLD = 0] = "HOLD", B[B.CONVERT_TO_BLOCK = 1] = "CONVERT_TO_BLOCK", B[B.DELETE = 2] = "DELETE", B;
}(j || {}), Ne = function() {
  var I = _(""), N = _(A()), k = F(!1, "Mx_CreateBlocksDialog_is_specify_on_screen_get_base_point"), m = ke({
    x: 0,
    y: 0,
    z: 0
  }), c = /* @__PURE__ */ function() {
    var E = G(/* @__PURE__ */ y.mark(function v() {
      var o, n, w, C, M;
      return y.wrap(function(d) {
        for (; ; ) switch (d.prev = d.next) {
          case 0:
            return o = new De(), o.clearLastInputPoint(), o.setMessage(p("2218")), d.next = 1, o.go();
          case 1:
            if (n = d.sent, n) {
              d.next = 2;
              break;
            }
            return d.abrupt("return");
          case 2:
            return w = n.x, C = n.y, M = n.z, m.x = Q(w, 3), m.y = Q(C, 3), m.z = Q(M, 3), d.abrupt("return", n);
          case 3:
          case "end":
            return d.stop();
        }
      }, v);
    }));
    return function() {
      return E.apply(this, arguments);
    };
  }(), b = F(!1, "Mx_CreateBlocksDialog_is_specify_on_screen_select_object"), P = F(2, "Mx_CreateBlocksDialog_select_Object_operation_type"), i = _(!0), h = _(0), f, R = /* @__PURE__ */ function() {
    var E = G(/* @__PURE__ */ y.mark(function v() {
      var o;
      return y.wrap(function(n) {
        for (; ; ) switch (n.prev = n.next) {
          case 0:
            return f = new Oe(), h.value = 0, n.next = 1, f.userSelect(p("1639"));
          case 1:
            if (n.sent) {
              n.next = 2;
              break;
            }
            return n.abrupt("return");
          case 2:
            if (o = f.count(), h.value = o, o !== 0) {
              n.next = 3;
              break;
            }
            return i.value = !0, n.abrupt("return");
          case 3:
            return i.value = !1, n.abrupt("return", f);
          case 4:
          case "end":
            return n.stop();
        }
      }, v);
    }));
    return function() {
      return E.apply(this, arguments);
    };
  }(), O = function() {
    var v = W.getCurrentMxCAD(), o = v.getDatabase().getBlockTable(), n = new Ve();
    return n.name = I.value, o.add(n);
  }, S = function(v, o, n) {
    var w;
    (w = o.getMcDbBlockTableRecord()) === null || w === void 0 || w.getAllEntityId().forEach(function(d) {
      var a;
      (a = d.getMcDbEntity()) === null || a === void 0 || a.erase();
    });
    var C = o.getMcDbBlockTableRecord();
    if (C) {
      v.forEach(function(d) {
        var a = d.getMcDbEntity();
        if (a) {
          var e = a.clone();
          C && C.appendAcDbEntity(e);
        }
      }), C.origin = n;
      var M = new Ce();
      return M.blockTableRecordId = o, M.position = n, M;
    }
  }, L = _("");
  return {
    blockName: I,
    blockNames: N,
    getBlockNames: A,
    basePoint: m,
    getMouseClickGetBasePoint: c,
    isSpecifyOnScreenGetBasePoint: k,
    isNoSelectObject: i,
    isSpecifyOnScreenSelectObject: b,
    selectObjectOperationType: P,
    selectObject: R,
    createBlock: O,
    loadBlock: S,
    explainText: L,
    selectCount: h
  };
}, Pe = {
  class: "px-3"
}, he = {
  class: "f-flex justify-center align-center mt-2"
}, je = {
  class: "f-flex justify-center align-center mt-2"
}, Re = {
  class: "d-flex flex-column"
}, _e = {
  key: 0,
  class: "f-flex justify-center align-center mt-2"
}, xe = {
  key: 1
};
const Ge = /* @__PURE__ */ ge({
  __name: "index",
  setup: function(I) {
    var N = le.isShow, k = le.showDialog, m, c = Ne(), b = c.blockName, P = c.blockNames, i = c.basePoint, h = c.getMouseClickGetBasePoint, f = c.isSpecifyOnScreenGetBasePoint, R = c.isNoSelectObject, O = c.isSpecifyOnScreenSelectObject, S = c.selectObjectOperationType, L = c.selectObject, E = c.selectCount, v = c.createBlock, o = c.loadBlock;
    ye(N, function(a) {
      a && (P.value = A());
    });
    var n = function() {
      i.x = 0, i.y = 0, i.z = 0, b.value = "", m = void 0, R.value = !0, P.value = A();
    }, w = /* @__PURE__ */ function() {
      var a = G(/* @__PURE__ */ y.mark(function e() {
        return y.wrap(function(t) {
          for (; ; ) switch (t.prev = t.next) {
            case 0:
              return k(!1), t.next = 1, h();
            case 1:
              k(!0);
            case 2:
            case "end":
              return t.stop();
          }
        }, e);
      }));
      return function() {
        return a.apply(this, arguments);
      };
    }(), C = /* @__PURE__ */ function() {
      var a = G(/* @__PURE__ */ y.mark(function e() {
        return y.wrap(function(t) {
          for (; ; ) switch (t.prev = t.next) {
            case 0:
              return k(!1), t.next = 1, L();
            case 1:
              m = t.sent, k(!0);
            case 2:
            case "end":
              return t.stop();
          }
        }, e);
      }));
      return function() {
        return a.apply(this, arguments);
      };
    }(), M = /* @__PURE__ */ function() {
      var a = G(/* @__PURE__ */ y.mark(function e() {
        var t, ee, z, ae, H, te, ne, $, re;
        return y.wrap(function(u) {
          for (; ; ) switch (u.prev = u.next) {
            case 0:
              if (t = be(), ee = t.open, z = !1, ae = P.value.includes(b.value), b.value !== "") {
                u.next = 1;
                break;
              }
              return u.abrupt("return", Z().error(p("图块名不能为空") + "!"));
            case 1:
              if (!ae) {
                u.next = 5;
                break;
              }
              return u.prev = 2, u.next = 3, function() {
                return new Promise(function(K, U) {
                  ee({
                    title: p("是否替换该图块"),
                    text: p("已定义") + b.value + p("的") + p("图块") + "，" + p("是否替换") + "?",
                    define: function() {
                      z = !0, K();
                    },
                    cancel: function() {
                      z = !1, U();
                    },
                    defineTitle: p("是"),
                    cancelTitle: p("否")
                  });
                });
              }();
            case 3:
              u.next = 5;
              break;
            case 4:
              return u.prev = 4, u.catch(2), u.abrupt("return");
            case 5:
              if (z ? (te = W.getCurrentMxCAD(), ne = te.getDatabase().getBlockTable(), H = ne.get(b.value)) : H = v(), !f.value) {
                u.next = 6;
                break;
              }
              return k(!1), u.next = 6, h();
            case 6:
              if (!O.value) {
                u.next = 8;
                break;
              }
              return k(!1), u.next = 7, L();
            case 7:
              m = u.sent;
            case 8:
              if (!(!m || R.value)) {
                u.next = 9;
                break;
              }
              return u.abrupt("return", Z().error(p("没有为块") + b.value + p("选择对象") + "!"));
            case 9:
              if ($ = o(m, H, new we(i.x, i.y, i.z)), $) {
                u.next = 10;
                break;
              }
              return u.abrupt("return", Z().error(p("创建块失败") + "!"));
            case 10:
              S.value !== j.HOLD && (m.forEach(function(K) {
                var U = K.getMcDbEntity();
                U && U.erase();
              }), me()), S.value === j.CONVERT_TO_BLOCK && (re = W.getCurrentMxCAD(), re.drawEntity($)), k(!1), n();
            case 11:
            case "end":
              return u.stop();
          }
        }, e, null, [[2, 4]]);
      }));
      return function() {
        return a.apply(this, arguments);
      };
    }(), d = [{
      name: "确定",
      fun: M,
      primary: !0
    }, {
      name: "关闭",
      fun: function() {
        k(!1), n();
      }
    }];
    return function(a, e) {
      return q(), Be(pe, {
        title: a.t("212"),
        onClickClose: n,
        modelValue: s(N),
        "onUpdate:modelValue": e[7] || (e[7] = function(t) {
          return x(N) ? N.value = t : null;
        }),
        "max-width": "400",
        footerBtnList: d
      }, {
        default: l(function() {
          return [T("div", Pe, [r(Me, {
            class: "mt-2",
            modelValue: s(b),
            "onUpdate:modelValue": e[0] || (e[0] = function(t) {
              return x(b) ? b.value = t : null;
            }),
            items: s(P)
          }, {
            prepend: l(function() {
              return [r(V, {
                "key-name": "N"
              }, {
                default: l(function() {
                  return [D(g(a.t("1923")), 1)];
                }),
                _: 1
              })];
            }),
            _: 1
          }, 8, ["modelValue", "items"]), r(Se, {
            "align-stretch": ""
          }, {
            default: l(function() {
              return [r(ce, {
                cols: 6,
                "align-self": "stretch"
              }, {
                default: l(function() {
                  return [r(se, {
                    title: a.t("1964"),
                    class: "h-100"
                  }, {
                    default: l(function() {
                      return [r(fe, {
                        modelValue: s(f),
                        "onUpdate:modelValue": e[1] || (e[1] = function(t) {
                          return x(f) ? f.value = t : null;
                        })
                      }, {
                        label: l(function() {
                          return [r(V, {
                            "key-name": "S"
                          }, {
                            default: l(function() {
                              return [D(g(a.t("1927")), 1)];
                            }),
                            _: 1
                          })];
                        }),
                        _: 1
                      }, 8, ["modelValue"]), T("div", he, [r(ue, {
                        disabled: s(f),
                        onClick: w
                      }, null, 8, ["disabled"]), r(V, {
                        class: ie(s(f) ? "text-disabled" : ""),
                        "key-name": "S"
                      }, {
                        default: l(function() {
                          return [D(g(a.t("1965")), 1)];
                        }),
                        _: 1
                      }, 8, ["class"])]), r(Y, {
                        class: "mt-3",
                        modelValue: s(i).x,
                        "onUpdate:modelValue": e[2] || (e[2] = function(t) {
                          return s(i).x = t;
                        }),
                        type: "number",
                        disabled: s(f)
                      }, {
                        prepend: l(function() {
                          return X(e[8] || (e[8] = [T("span", {
                            class: ""
                          }, " X:", -1)]));
                        }),
                        _: 1
                      }, 8, ["modelValue", "disabled"]), r(Y, {
                        class: "mt-1",
                        modelValue: s(i).y,
                        "onUpdate:modelValue": e[3] || (e[3] = function(t) {
                          return s(i).y = t;
                        }),
                        type: "number",
                        disabled: s(f)
                      }, {
                        prepend: l(function() {
                          return X(e[9] || (e[9] = [T("span", {
                            class: ""
                          }, " Y: ", -1)]));
                        }),
                        _: 1
                      }, 8, ["modelValue", "disabled"]), r(Y, {
                        class: "mt-1",
                        modelValue: s(i).z,
                        "onUpdate:modelValue": e[4] || (e[4] = function(t) {
                          return s(i).z = t;
                        }),
                        type: "number",
                        disabled: s(f)
                      }, {
                        prepend: l(function() {
                          return X(e[10] || (e[10] = [T("span", {
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
              }), r(ce, {
                cols: 6,
                "align-self": "stretch"
              }, {
                default: l(function() {
                  return [r(se, {
                    title: a.t("177"),
                    class: "h-100"
                  }, {
                    default: l(function() {
                      return [r(fe, {
                        modelValue: s(O),
                        "onUpdate:modelValue": e[5] || (e[5] = function(t) {
                          return x(O) ? O.value = t : null;
                        })
                      }, {
                        label: l(function() {
                          return [r(V, {
                            class: "",
                            "key-name": "S"
                          }, {
                            default: l(function() {
                              return [D(g(a.t("1927")), 1)];
                            }),
                            _: 1
                          })];
                        }),
                        _: 1
                      }, 8, ["modelValue"]), T("div", je, [r(ue, {
                        disabled: s(O),
                        onClick: C
                      }, null, 8, ["disabled"]), r(V, {
                        class: ie(s(O) ? "text-disabled" : ""),
                        "key-name": "I"
                      }, {
                        default: l(function() {
                          return [D(g(a.t("1602")), 1)];
                        }),
                        _: 1
                      }, 8, ["class"])]), r(Ee, {
                        column: "",
                        class: "mt-2",
                        modelValue: s(S),
                        "onUpdate:modelValue": e[6] || (e[6] = function(t) {
                          return x(S) ? S.value = t : null;
                        })
                      }, {
                        default: l(function() {
                          return [T("div", Re, [r(J, {
                            value: s(j).HOLD,
                            class: "mt-1"
                          }, {
                            label: l(function() {
                              return [r(V, {
                                class: "",
                                "key-name": "R"
                              }, {
                                default: l(function() {
                                  return [D(g(a.t("1966")), 1)];
                                }),
                                _: 1
                              })];
                            }),
                            _: 1
                          }, 8, ["value"]), r(J, {
                            value: s(j).CONVERT_TO_BLOCK,
                            class: "mt-1"
                          }, {
                            label: l(function() {
                              return [r(V, {
                                class: "",
                                "key-name": "C"
                              }, {
                                default: l(function() {
                                  return [D(g(a.t("1967")), 1)];
                                }),
                                _: 1
                              })];
                            }),
                            _: 1
                          }, 8, ["value"]), r(J, {
                            value: s(j).DELETE,
                            class: "mt-1"
                          }, {
                            label: l(function() {
                              return [r(V, {
                                class: "",
                                "key-name": "D"
                              }, {
                                default: l(function() {
                                  return [D(g(a.t("205")), 1)];
                                }),
                                _: 1
                              })];
                            }),
                            _: 1
                          }, 8, ["value"])])];
                        }),
                        _: 1
                      }, 8, ["modelValue"]), s(R) ? (q(), oe("div", _e, [r(Te, {
                        icon: "jinggao"
                      }), r(V, {
                        class: "",
                        "key-name": "I"
                      }, {
                        default: l(function() {
                          return [D(g(a.t("1968")), 1)];
                        }),
                        _: 1
                      })])) : (q(), oe("div", xe, g(a.t("1969") + ":" + s(E) + a.t("1920")), 1))];
                    }),
                    _: 1
                  }, 8, ["title"])];
                }),
                _: 1
              })];
            }),
            _: 1
          })])];
        }),
        _: 1
      }, 8, ["title", "modelValue"]);
    };
  }
}), Ie = /* @__PURE__ */ ve(Ge, [["__scopeId", "data-v-766b5b64"]]);
export {
  Ie as default
};
