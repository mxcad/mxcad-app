import { a2 as S, j as N, a3 as d, a4 as te, a5 as ae, a6 as ne, a7 as le, Z as A, $ as g, x as L, a8 as i, X as re, _ as ue, a as X, a9 as T, t as x, h as se } from "./lib.js";
import { d as ie, f as F, h as oe, m as de, o as me, w as n, l as o, a, Q as k, G as u, q as p, t as m } from "./vue.js";
import { a as fe, m as pe, o as q, g as H, M as ve } from "./mxcad.js";
import { D as ge } from "./mxdraw.js";
import { v as Ve, b as be, D as we, C as Q, h as ye, j, i as V, F as Me } from "./vuetify.js";
var ce = {
  class: "px-3"
}, Ce = {
  class: "d-flex algin-center mt-2 w-75"
}, ke = {
  class: ""
}, De = {
  class: ""
}, Pe = {
  class: ""
}, Ue = {
  class: ""
};
const Se = /* @__PURE__ */ ie({
  __name: "index",
  setup: function(Ae) {
    var h = S.isShow, z = S.showDialog, B = F(1), s = oe({
      x: 0,
      y: 0
    }), v = N(!1, "Mx_AttachPictureDialog_isGetPt"), b = N(!1, "Mx_AttachPictureDialog_isGetZoomRatio"), w = N(!1, "Mx_AttachPictureDialog_isGetRotationAngle"), y = F(1), M = F(0), Y = /* @__PURE__ */ function() {
      var r = ue(/* @__PURE__ */ X.mark(function e() {
        var t, G, D, c, f, I, C, E, P, Z, U, R;
        return X.wrap(function(l) {
          for (; ; ) switch (l.prev = l.next) {
            case 0:
              if (d.value) {
                l.next = 1;
                break;
              }
              return l.abrupt("return");
            case 1:
              if (d.value.url !== "") {
                l.next = 2;
                break;
              }
              return l.abrupt("return", se().warning(x("请先选择图片")));
            case 2:
              if (z(!1), t = ve.getCurrentMxCAD(), !v.value) {
                l.next = 5;
                break;
              }
              return G = new H(), G.setMessage(x("指定插入点")), l.next = 3, G.go();
            case 3:
              if (D = l.sent, D) {
                l.next = 4;
                break;
              }
              return l.abrupt("return");
            case 4:
              s.x = D.x, s.y = D.y;
            case 5:
              if (!b.value) {
                l.next = 8;
                break;
              }
              return c = new H(), f = new q(s.x, s.y), c.setBasePt(f), c.setMessage(x("指定缩放比例")), c.setUserDraw(function(K, O) {
                var $ = K.distanceTo(f) / i.width, W = i.width * $, _ = i.height * $, ee = new THREE.Vector3(f.x + W, f.y + _);
                O.drawRect(f.toVector3(), ee);
              }), l.next = 6, c.go();
            case 6:
              if (I = l.sent, I) {
                l.next = 7;
                break;
              }
              return l.abrupt("return");
            case 7:
              y.value = T(I.distanceTo(f) / i.width, 3);
            case 8:
              if (!w.value) {
                l.next = 11;
                break;
              }
              return C = new pe(), C.setMessage(x("指定旋转角度")), E = new q(s.x, s.y), C.setBasePt(E), l.next = 9, C.go();
            case 9:
              if (P = l.sent, P) {
                l.next = 10;
                break;
              }
              return l.abrupt("return");
            case 10:
              C.getDetailedResult() === ge.kCoordIn ? M.value = T(P, 3) : M.value = T(P / (Math.PI / 180), 3);
            case 11:
              Z = t.drawImage(s.x, s.y, i.width * y.value, i.height * y.value, M.value, d.value.fileName || d.value.url, !0, i.width, i.height), U = Z.getMcDbEntity(), U && (R = U.trueColor, U.trueColor = new fe(R.red, R.green, R.blue, B.value * 255));
            case 12:
            case "end":
              return l.stop();
          }
        }, e);
      }));
      return function() {
        return r.apply(this, arguments);
      };
    }(), J = [{
      name: "确定",
      fun: Y,
      primary: !0
    }, {
      name: "关闭",
      fun: function() {
        return z(!1);
      }
    }];
    return function(r, e) {
      return me(), de(re, {
        title: r.t("1922"),
        modelValue: u(h),
        "onUpdate:modelValue": e[13] || (e[13] = function(t) {
          return k(h) ? h.value = t : null;
        }),
        "max-width": "600",
        footerBtnList: J
      }, {
        default: n(function() {
          return [o("div", ce, [o("div", Ce, [a(Ve, {
            class: "mt-1 mr-2",
            "return-object": "",
            "item-title": "fileName",
            "item-value": "url",
            items: u(ae),
            modelValue: u(d),
            "onUpdate:modelValue": [e[0] || (e[0] = function(t) {
              return k(d) ? d.value = t : null;
            }), e[1] || (e[1] = function(t) {
              return u(te)(t);
            })],
            modelModifiers: {
              lazy: !0
            }
          }, {
            prepend: n(function() {
              return [o("span", ke, [p(m(r.t("1923")) + "(", 1), e[14] || (e[14] = o("span", {
                class: "text-decoration-underline"
              }, "N", -1)), e[15] || (e[15] = p(") ", -1))])];
            }),
            _: 1
          }, 8, ["items", "modelValue"]), a(ne, {
            onClick: e[2] || (e[2] = function(t) {
              return u(le)(u(S));
            })
          }, {
            default: n(function() {
              return [a(A, {
                "key-name": "B"
              }, {
                default: n(function() {
                  return [p(m(r.t("1924")), 1)];
                }),
                _: 1
              }), e[16] || (e[16] = p()), a(be, {
                icon: "class:iconfont more"
              })];
            }),
            _: 1
          })]), a(we, {
            "align-stretch": "",
            class: "mt-2"
          }, {
            default: n(function() {
              return [a(Q, {
                cols: 8,
                "align-self": "auto"
              }, {
                default: n(function() {
                  return [a(g, {
                    title: r.t("1925"),
                    class: "h-100"
                  }, {
                    default: n(function() {
                      var t;
                      return [a(ye, {
                        src: (t = u(d)) === null || t === void 0 ? void 0 : t.url,
                        crossorigin: "anonymous",
                        height: "425px"
                      }, null, 8, ["src"])];
                    }),
                    _: 1
                  }, 8, ["title"])];
                }),
                _: 1
              }), a(Q, {
                cols: 4,
                "align-self": "auto"
              }, {
                default: n(function() {
                  return [a(g, {
                    title: r.t("209")
                  }, {
                    default: n(function() {
                      return [a(j, {
                        modelValue: u(v),
                        "onUpdate:modelValue": e[3] || (e[3] = function(t) {
                          return k(v) ? v.value = t : null;
                        })
                      }, {
                        label: n(function() {
                          return [a(A, {
                            "key-name": "S"
                          }, {
                            default: n(function() {
                              return [p(m(r.t("1927")), 1)];
                            }),
                            _: 1
                          })];
                        }),
                        _: 1
                      }, 8, ["modelValue"]), a(V, {
                        class: "mt-1",
                        modelValue: s.x,
                        "onUpdate:modelValue": e[4] || (e[4] = function(t) {
                          return s.x = t;
                        }),
                        disabled: u(v)
                      }, {
                        prepend: n(function() {
                          return L(e[17] || (e[17] = [o("span", {
                            class: ""
                          }, " X:", -1)]));
                        }),
                        _: 1
                      }, 8, ["modelValue", "disabled"]), a(V, {
                        class: "mt-1",
                        modelValue: s.y,
                        "onUpdate:modelValue": e[5] || (e[5] = function(t) {
                          return s.y = t;
                        }),
                        disabled: u(v)
                      }, {
                        prepend: n(function() {
                          return L(e[18] || (e[18] = [o("span", {
                            class: ""
                          }, " Y:", -1)]));
                        }),
                        _: 1
                      }, 8, ["modelValue", "disabled"])];
                    }),
                    _: 1
                  }, 8, ["title"]), a(g, {
                    title: r.t("1928")
                  }, {
                    default: n(function() {
                      return [a(j, {
                        modelValue: u(b),
                        "onUpdate:modelValue": e[6] || (e[6] = function(t) {
                          return k(b) ? b.value = t : null;
                        })
                      }, {
                        label: n(function() {
                          return [a(A, {
                            "key-name": "S"
                          }, {
                            default: n(function() {
                              return [p(m(r.t("1927")), 1)];
                            }),
                            _: 1
                          })];
                        }),
                        _: 1
                      }, 8, ["modelValue"]), a(V, {
                        class: "mt-1 ml-1",
                        type: "number",
                        disabled: u(b),
                        modelValue: y.value,
                        "onUpdate:modelValue": e[7] || (e[7] = function(t) {
                          return y.value = t;
                        })
                      }, null, 8, ["disabled", "modelValue"])];
                    }),
                    _: 1
                  }, 8, ["title"]), a(g, {
                    title: r.t("1929")
                  }, {
                    default: n(function() {
                      return [a(V, {
                        class: "mt-1",
                        type: "number",
                        modelValue: u(i).width,
                        "onUpdate:modelValue": e[8] || (e[8] = function(t) {
                          return u(i).width = t;
                        })
                      }, {
                        prepend: n(function() {
                          return [o("span", De, m(r.t("1930")) + ":", 1)];
                        }),
                        _: 1
                      }, 8, ["modelValue"]), a(V, {
                        class: "mt-1",
                        type: "number",
                        modelValue: u(i).height,
                        "onUpdate:modelValue": e[9] || (e[9] = function(t) {
                          return u(i).height = t;
                        })
                      }, {
                        prepend: n(function() {
                          return [o("span", Pe, m(r.t("1835")) + ":", 1)];
                        }),
                        _: 1
                      }, 8, ["modelValue"])];
                    }),
                    _: 1
                  }, 8, ["title"]), a(g, {
                    title: r.t("1931")
                  }, {
                    default: n(function() {
                      return [a(j, {
                        class: "",
                        modelValue: u(w),
                        "onUpdate:modelValue": e[10] || (e[10] = function(t) {
                          return k(w) ? w.value = t : null;
                        })
                      }, {
                        label: n(function() {
                          return [a(A, {
                            "key-name": "S"
                          }, {
                            default: n(function() {
                              return [p(m(r.t("1927")), 1)];
                            }),
                            _: 1
                          })];
                        }),
                        _: 1
                      }, 8, ["modelValue"]), a(V, {
                        class: "mt-1",
                        type: "number",
                        modelValue: M.value,
                        "onUpdate:modelValue": e[11] || (e[11] = function(t) {
                          return M.value = t;
                        }),
                        disabled: u(w)
                      }, {
                        prepend: n(function() {
                          return [o("span", Ue, m(r.t("169")) + ":", 1)];
                        }),
                        _: 1
                      }, 8, ["modelValue", "disabled"])];
                    }),
                    _: 1
                  }, 8, ["title"]), a(g, {
                    title: r.t("1932")
                  }, {
                    default: n(function() {
                      return [a(Me, {
                        modelValue: B.value,
                        "onUpdate:modelValue": e[12] || (e[12] = function(t) {
                          return B.value = t;
                        }),
                        max: 1,
                        min: 0,
                        step: 0.2,
                        "thumb-label": ""
                      }, null, 8, ["modelValue"])];
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
});
export {
  Se as default
};
