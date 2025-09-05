import { j as M, h as x, t as U, _ as T, a as g, w as F, Y as Z, Z as m, $ as z, a0 as V, x as N, X as I, R as E } from "./lib.js";
import { f as H, d as $, m as ee, o as ne, w as n, l, a as e, A as B, Q as D, G as p, q as f, t as o, B as Q } from "./vue.js";
import { r as te } from "./index39.js";
import { d as re, g as le, m as ae } from "./mxcad.js";
import { D as b, C as s, Q as ue, S as K, i as k, h as J, c as se, j as oe } from "./vuetify.js";
const P = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAcCAMAAABbGh8VAAACOlBMVEUAAAA6T2KZjT/UyoCNlr6rmiOfkDCxojLAskS3q1DKwona0ZC+qycqRnabjiuFezDCsTU/UoGjlz+/slJodHa8snAPDw4QDw+pmR6AdCAmQmmCdiayoSe3piuLgC0vRme0pTCWiDKxojuek0S3qUWek0jDtEyflkvDtlKnnVVbY5K/s16upGNoc3XSyHfBt3mGfq3NxIPVzZTX0q+xs9j///////v///ciUoH///T///n+/uv7+cghT3zn3v/KwfH//++2rd78+9L8+sSSibmBm7e9sJUyX4rl3oDe028WNVPGuE7QvTfGtDPkzTCGeSasvtD9/M718L+Op7/18rj59Lb18bB9faxig6ZtcqJSd5rw6ZhbZZTy65Lq44hKWYjz7IUnVoTg1ndAV27r32zo3GXd0WDUxl7Zylrk11fMvU/l00i0pjzWwjWDdy4JCQn19/rZ4Of+/ub+/uXR2+TK1eH8/Nz6+Nm8y9n8+9jDztj9/NSkuMz9+sb49saDn7l3lLL69bCDgK9wj65riqv59amQnKhbfqJshZ54dJ6Jk53s5pvq45b175Xq5ZRBa5Npa485ZI7q443o4YtneYry64ktW4hfaIPl3ILq4oHw537w6H1TZnnl2Xfp3nUfSnXe02ocQmgwSmUaPWEnQl5aY1ndzVgYOFjk01YcOVY1RVXZyVLdzU8cNU67rEvJukjdy0LYxkK7rEKvoELUwz/Muz/gzDvKuDu9rDW6qTWXiCuBcyBtXx5jVBKgTniJAAAANXRSTlMAlpJQRK2gnoyAR0Cpp6Wgm5GRfmhhw8GzsaurqaWjoaGflY2LiYWFfnx2cm5oWlhSTjwiIGXnqgIAAAGISURBVCjPYgADZg12VlZ2YWYGGODm4PHZkJ290VeGiQuqRCA3M8jM1NQ0aM0ONlGwGoFtqQlmwa6u7qZxadvZQOo4clN7nU2jLCy8TG2i03YyMTDo8WROdXYwbQcJOdjEreYTZVDzTWktNjNtSQQKmRWFLchRZlDwme1saWraMM1ipamppY3HejkG1i0Jgeampq7utktMTc2dJntLM0j4zKoFqgp2t10EVuUtySDsm9JobWZaM9E22dTMOswzh4mBWXZFbLW5aYDt4mRT88q+jF06DAwqW+eFWpuVdExpM7UOSdrEZAx0PfuyWCfzgtKAQiunnnRFsC8B0+aYG2pZUR8RZRWStFkT4m+2jGir5v7E5abd6fxGECFObw+HiPkL15rNWKcKDS9DJc+6qjmruso9hfRhYciXNTPQ3KpsUhY/PFg5/f3z9uzN89+tjhAysTO1d3Tz0xJigAMWl6bwyJh4XgYkIYgqQWQhFxciVIkYdE6YvpSRkQFZTDw/XwwsggC68lIwEQASemq6C8dkYAAAAABJRU5ErkJggg==";
var ie = function(w) {
  var R = M(!0, "Mx_ArrayDialog_is_array_rect"), W = M(5, "Mx_ArrayDialog_row"), c = M(5, "Mx_ArrayDialog_col"), _ = M(200, "Mx_ArrayDialog_row_offset"), O = M(200, "Mx_ArrayDialog_col_offset"), j = M(0, "Mx_ArrayDialog_angle"), A = [], C = H(0), S = /* @__PURE__ */ function() {
    var h = T(/* @__PURE__ */ g.mark(function y() {
      return g.wrap(function(i) {
        for (; ; ) switch (i.prev = i.next) {
          case 0:
            return w(!1), i.next = 1, re.userSelect(U("2192"));
          case 1:
            return A = i.sent, C.value = A.length, w(!0), i.abrupt("return", A);
          case 2:
          case "end":
            return i.stop();
        }
      }, y);
    }));
    return function() {
      return h.apply(this, arguments);
    };
  }(), q = /* @__PURE__ */ function() {
    var h = T(/* @__PURE__ */ g.mark(function y(i) {
      var v, d, r;
      return g.wrap(function(t) {
        for (; ; ) switch (t.prev = t.next) {
          case 0:
            return w(!1), v = new le(), v.clearLastInputPoint(), i && v.setMessage(i), t.next = 1, v.go();
          case 1:
            if (d = t.sent, d) {
              t.next = 2;
              break;
            }
            return t.abrupt("return", w(!0));
          case 2:
            return v.setUserDraw(function(a, u) {
              u.drawLine(a.toVector3(), d == null ? void 0 : d.toVector3());
            }), t.next = 3, v.go();
          case 3:
            if (r = t.sent, r) {
              t.next = 4;
              break;
            }
            return t.abrupt("return", w(!0));
          case 4:
            return w(!0), t.abrupt("return", d.distanceTo(r));
          case 5:
          case "end":
            return t.stop();
        }
      }, y);
    }));
    return function(i) {
      return h.apply(this, arguments);
    };
  }(), G = /* @__PURE__ */ function() {
    var h = T(/* @__PURE__ */ g.mark(function y() {
      var i, v;
      return g.wrap(function(d) {
        for (; ; ) switch (d.prev = d.next) {
          case 0:
            return w(!1), i = new ae(), i.clearLastInputPoint(), i.setMessage(U("2193")), d.next = 1, i.go();
          case 1:
            v = d.sent, typeof v == "number" && (j.value = F(v, 3)), w(!0);
          case 2:
          case "end":
            return d.stop();
        }
      }, y);
    }));
    return function() {
      return h.apply(this, arguments);
    };
  }(), Y = x(), L = function() {
    if (R.value) {
      if (C.value <= 0) return Y.error(U("2194") + "!");
      te({
        iColNum: c.value,
        iRowNum: W.value,
        dAng: j.value,
        aryId: A,
        dColOffset: O.value,
        dRowOffset: _.value
      });
    }
    w(!1);
  };
  return {
    isArrayRect: R,
    row: W,
    col: c,
    rowOffset: _,
    colOffset: O,
    angle: j,
    selectCount: C,
    selectObject: S,
    getLength: q,
    getAngle: G,
    onConfirmClick: L
  };
}, fe = {
  class: "px-3"
}, ce = {
  class: "d-flex justify-center align-center"
}, de = {
  class: "d-flex justify-center align-center"
}, me = {
  class: "px-2"
}, ve = {
  class: "w-100"
}, pe = {
  class: "w-100 mt-3"
}, ge = {
  class: "w-50"
}, we = {
  class: "w-25"
}, Ae = {
  class: "w-25 ml-1"
}, ye = {
  class: "d-flex flex-column justify-center align-center h-100"
}, be = {
  class: "w-100"
}, ke = {
  class: "w-50"
}, Ce = {
  class: "w-25"
}, _e = {
  class: "d-flex flex-column algin-center justify-center ml-4"
}, he = {
  class: "mr-12"
}, Ve = {
  class: "px-3"
}, je = {
  class: "d-flex flex-column algin-center justify-center ml-4"
}, De = {
  class: "h-100 pl-2"
}, Re = {
  class: "d-flex algin-center ml-2 mb-1",
  style: {
    "line-height": "1.5rem"
  }
}, Oe = {
  class: "mt-2"
};
const Me = /* @__PURE__ */ $({
  __name: "index",
  setup: function(w) {
    var R = Z.isShow, W = Z.showDialog, c = ie(W), _ = c.isArrayRect, O = c.row, j = c.col, A = c.rowOffset, C = c.colOffset, S = c.angle, q = c.selectCount, G = c.selectObject, Y = c.getLength, L = c.getAngle, h = c.onConfirmClick, y = /* @__PURE__ */ function() {
      var r = T(/* @__PURE__ */ g.mark(function t() {
        var a;
        return g.wrap(function(u) {
          for (; ; ) switch (u.prev = u.next) {
            case 0:
              return u.next = 1, Y(U("指定行间距"));
            case 1:
              if (a = u.sent, a) {
                u.next = 2;
                break;
              }
              return u.abrupt("return");
            case 2:
              A.value = a;
            case 3:
            case "end":
              return u.stop();
          }
        }, t);
      }));
      return function() {
        return r.apply(this, arguments);
      };
    }(), i = /* @__PURE__ */ function() {
      var r = T(/* @__PURE__ */ g.mark(function t() {
        var a;
        return g.wrap(function(u) {
          for (; ; ) switch (u.prev = u.next) {
            case 0:
              return u.next = 1, Y(U("指定列间距"));
            case 1:
              if (a = u.sent, a) {
                u.next = 2;
                break;
              }
              return u.abrupt("return");
            case 2:
              C.value = a;
            case 3:
            case "end":
              return u.stop();
          }
        }, t);
      }));
      return function() {
        return r.apply(this, arguments);
      };
    }(), v = /* @__PURE__ */ function() {
      var r = T(/* @__PURE__ */ g.mark(function t() {
        var a;
        return g.wrap(function(u) {
          for (; ; ) switch (u.prev = u.next) {
            case 0:
              return u.next = 1, Y(U("指定单位单元"));
            case 1:
              if (a = u.sent, a) {
                u.next = 2;
                break;
              }
              return u.abrupt("return");
            case 2:
              C.value = a, A.value = a;
            case 3:
            case "end":
              return u.stop();
          }
        }, t);
      }));
      return function() {
        return r.apply(this, arguments);
      };
    }(), d = [{
      name: "确定",
      fun: h,
      primary: !0
    }, {
      name: "取消",
      fun: function() {
        return W(!1);
      }
    }];
    return function(r, t) {
      return ne(), ee(I, {
        title: r.t("208"),
        modelValue: p(R),
        "onUpdate:modelValue": t[6] || (t[6] = function(a) {
          return D(R) ? R.value = a : null;
        }),
        "max-width": "520",
        footerBtnList: d
      }, {
        default: n(function() {
          return [l("div", fe, [e(b, {
            class: "mt-1",
            "align-stretch": ""
          }, {
            default: n(function() {
              return [e(s, {
                cols: 7,
                class: "h-100",
                "align-self": "start"
              }, {
                default: n(function() {
                  return [e(ue, {
                    modelValue: p(_),
                    "onUpdate:modelValue": t[0] || (t[0] = function(a) {
                      return D(_) ? _.value = a : null;
                    }),
                    inline: ""
                  }, {
                    default: n(function() {
                      return [e(K, {
                        value: !0,
                        class: "mr-12"
                      }, {
                        label: n(function() {
                          return [e(m, {
                            "key-name": "R"
                          }, {
                            default: n(function() {
                              return [f(o(r.t("1903")), 1)];
                            }),
                            _: 1
                          })];
                        }),
                        _: 1
                      }), e(K, {
                        value: !1
                      }, {
                        label: n(function() {
                          return [e(m, {
                            "key-name": "P"
                          }, {
                            default: n(function() {
                              return [f(o(r.t("1904")), 1)];
                            }),
                            _: 1
                          })];
                        }),
                        _: 1
                      })];
                    }),
                    _: 1
                  }, 8, ["modelValue"]), B(l("div", null, [e(b, null, {
                    default: n(function() {
                      return [e(s, {
                        cols: "6"
                      }, {
                        default: n(function() {
                          return [e(k, {
                            class: "mt-2 ml-2",
                            type: "number",
                            modelValue: p(O),
                            "onUpdate:modelValue": t[1] || (t[1] = function(a) {
                              return D(O) ? O.value = a : null;
                            })
                          }, {
                            prepend: n(function() {
                              return [l("div", ce, [t[7] || (t[7] = l("div", {
                                class: "box box-row mr-1"
                              }, [l("div", {
                                class: "box-line"
                              })], -1)), e(m, {
                                "key-name": "W",
                                colon: ""
                              }, {
                                default: n(function() {
                                  return [f(o(r.t("1678")), 1)];
                                }),
                                _: 1
                              })])];
                            }),
                            _: 1
                          }, 8, ["modelValue"])];
                        }),
                        _: 1
                      }), e(s, {
                        cols: "6"
                      }, {
                        default: n(function() {
                          return [e(k, {
                            class: "mt-2 ml-2",
                            type: "number",
                            modelValue: p(j),
                            "onUpdate:modelValue": t[2] || (t[2] = function(a) {
                              return D(j) ? j.value = a : null;
                            })
                          }, {
                            prepend: n(function() {
                              return [l("div", de, [t[8] || (t[8] = l("div", {
                                class: "box box-col mr-1"
                              }, [l("div", {
                                class: "box-line"
                              })], -1)), e(m, {
                                "key-name": "O",
                                colon: ""
                              }, {
                                default: n(function() {
                                  return [f(o(r.t("1679")), 1)];
                                }),
                                _: 1
                              })])];
                            }),
                            _: 1
                          }, 8, ["modelValue"])];
                        }),
                        _: 1
                      })];
                    }),
                    _: 1
                  }), e(z, {
                    class: "mt-1",
                    title: r.t("1905")
                  }, {
                    default: n(function() {
                      return [l("div", me, [e(b, {
                        class: "mt-2"
                      }, {
                        default: n(function() {
                          return [e(s, {
                            cols: "4"
                          }, {
                            default: n(function() {
                              return [l("p", ve, [e(m, {
                                "key-name": "F",
                                colon: ""
                              }, {
                                default: n(function() {
                                  return [f(o(r.t("1906")), 1)];
                                }),
                                _: 1
                              })]), l("p", pe, [e(m, {
                                "key-name": "M",
                                colon: ""
                              }, {
                                default: n(function() {
                                  return [f(o(r.t("1907")), 1)];
                                }),
                                _: 1
                              })])];
                            }),
                            _: 1
                          }), e(s, {
                            cols: "8",
                            class: "d-flex"
                          }, {
                            default: n(function() {
                              return [l("div", ge, [e(k, {
                                class: "",
                                type: "number",
                                modelValue: p(A),
                                "onUpdate:modelValue": t[3] || (t[3] = function(a) {
                                  return D(A) ? A.value = a : null;
                                })
                              }, null, 8, ["modelValue"]), e(k, {
                                class: "mt-3",
                                type: "number",
                                modelValue: p(C),
                                "onUpdate:modelValue": t[4] || (t[4] = function(a) {
                                  return D(C) ? C.value = a : null;
                                })
                              }, null, 8, ["modelValue"])]), l("div", we, [e(V, {
                                class: "h-100",
                                onClick: v
                              })]), l("div", Ae, [l("div", ye, [e(V, {
                                onClick: y
                              }), e(V, {
                                class: "mt-2",
                                onClick: i
                              })])])];
                            }),
                            _: 1
                          })];
                        }),
                        _: 1
                      }), e(b, null, {
                        default: n(function() {
                          return [e(s, {
                            cols: "4"
                          }, {
                            default: n(function() {
                              return [l("p", be, [e(m, {
                                "key-name": "A",
                                colon: ""
                              }, {
                                default: n(function() {
                                  return [f(o(r.t("1908")), 1)];
                                }),
                                _: 1
                              })])];
                            }),
                            _: 1
                          }), e(s, {
                            cols: "8",
                            class: "d-flex"
                          }, {
                            default: n(function() {
                              return [l("div", ke, [e(k, {
                                class: "mt-1",
                                type: "number",
                                step: "0.01",
                                modelValue: p(S),
                                "onUpdate:modelValue": t[5] || (t[5] = function(a) {
                                  return D(S) ? S.value = a : null;
                                })
                              }, null, 8, ["modelValue"])]), l("div", Ce, [e(V, {
                                class: "mt-1",
                                onClick: p(L)
                              }, null, 8, ["onClick"])]), t[9] || (t[9] = l("div", {
                                class: "w-25 ml-1"
                              }, null, -1))];
                            }),
                            _: 1
                          })];
                        }),
                        _: 1
                      }), e(b, {
                        class: "mt-2"
                      }, {
                        default: n(function() {
                          return [e(s, {
                            cols: "3"
                          }, {
                            default: n(function() {
                              return [l("div", _e, [e(J, {
                                src: P,
                                alt: r.t("1909"),
                                width: "24px"
                              }, null, 8, ["alt"]), f(" " + o(r.t("1909")), 1)])];
                            }),
                            _: 1
                          }), e(s, {
                            cols: "9"
                          }, {
                            default: n(function() {
                              return [f(o(r.t("1910")), 1)];
                            }),
                            _: 1
                          })];
                        }),
                        _: 1
                      })])];
                    }),
                    _: 1
                  }, 8, ["title"])], 512), [[Q, p(_)]]), B(l("div", null, [e(b, {
                    class: "d-flex mx-3 mt-1"
                  }, {
                    default: n(function() {
                      return [l("p", he, o(r.t("1911")) + ":", 1), e(k, null, {
                        prepend: n(function() {
                          return N(t[10] || (t[10] = [l("span", {
                            class: ""
                          }, "X:", -1)]));
                        }),
                        _: 1
                      }), e(k, {
                        class: "ml-1"
                      }, {
                        prepend: n(function() {
                          return N(t[11] || (t[11] = [l("span", {
                            class: ""
                          }, "Y:", -1)]));
                        }),
                        _: 1
                      }), e(V)];
                    }),
                    _: 1
                  }), e(z, {
                    title: r.t("1912")
                  }, {
                    default: n(function() {
                      return [l("div", Ve, [e(m, {
                        "key-name": "M",
                        colon: ""
                      }, {
                        default: n(function() {
                          return [f(o(r.t("1913")), 1)];
                        }),
                        _: 1
                      }), e(se, {
                        "bg-color": "grey-lighten-2",
                        class: "",
                        items: []
                      }), e(b, null, {
                        default: n(function() {
                          return [e(s, {
                            cols: "6"
                          }, {
                            default: n(function() {
                              return [e(m, {
                                "key-name": "I",
                                colon: ""
                              }, {
                                default: n(function() {
                                  return [f(o(r.t("1914")), 1)];
                                }),
                                _: 1
                              })];
                            }),
                            _: 1
                          }), e(s, {
                            cols: "3"
                          }, {
                            default: n(function() {
                              return [e(k, {
                                class: "mt-1"
                              })];
                            }),
                            _: 1
                          }), e(s, {
                            cols: "3"
                          })];
                        }),
                        _: 1
                      }), e(b, null, {
                        default: n(function() {
                          return [e(s, {
                            cols: "6"
                          }, {
                            default: n(function() {
                              return [e(m, {
                                "key-name": "F",
                                colon: ""
                              }, {
                                default: n(function() {
                                  return [f(o(r.t("1915")), 1)];
                                }),
                                _: 1
                              })];
                            }),
                            _: 1
                          }), e(s, {
                            cols: "3"
                          }, {
                            default: n(function() {
                              return [e(k, {
                                class: "mt-1"
                              })];
                            }),
                            _: 1
                          }), e(s, {
                            cols: "3"
                          }, {
                            default: n(function() {
                              return [e(V)];
                            }),
                            _: 1
                          })];
                        }),
                        _: 1
                      }), e(b, null, {
                        default: n(function() {
                          return [e(s, {
                            cols: "6"
                          }, {
                            default: n(function() {
                              return [e(m, {
                                "key-name": "B",
                                colon: ""
                              }, {
                                default: n(function() {
                                  return [f(o(r.t("1916")), 1)];
                                }),
                                _: 1
                              })];
                            }),
                            _: 1
                          }), e(s, {
                            cols: "3"
                          }, {
                            default: n(function() {
                              return [e(k, {
                                class: "mt-1",
                                disabled: ""
                              })];
                            }),
                            _: 1
                          }), e(s, {
                            cols: "3"
                          }, {
                            default: n(function() {
                              return [e(V, {
                                disabled: ""
                              })];
                            }),
                            _: 1
                          })];
                        }),
                        _: 1
                      }), e(b, {
                        class: "mt-2"
                      }, {
                        default: n(function() {
                          return [e(s, {
                            cols: "3"
                          }, {
                            default: n(function() {
                              return [l("div", je, [e(J, {
                                src: P,
                                alt: r.t("1909"),
                                width: "24px"
                              }, null, 8, ["alt"]), f(" " + o(r.t("1909")), 1)])];
                            }),
                            _: 1
                          }), e(s, {
                            cols: "9"
                          }, {
                            default: n(function() {
                              return [f(o(r.t("1917")), 1)];
                            }),
                            _: 1
                          })];
                        }),
                        _: 1
                      })])];
                    }),
                    _: 1
                  }, 8, ["title"]), e(oe, {
                    class: "mt-2"
                  }, {
                    label: n(function() {
                      return [e(m, {
                        "key-name": "T"
                      }, {
                        default: n(function() {
                          return [f(o(r.t("1918")), 1)];
                        }),
                        _: 1
                      })];
                    }),
                    _: 1
                  })], 512), [[Q, !p(_)]])];
                }),
                _: 1
              }), e(s, {
                cols: 5,
                "align-self": "start"
              }, {
                default: n(function() {
                  return [l("div", De, [l("div", Re, [e(V, {
                    onClick: p(G)
                  }, null, 8, ["onClick"]), e(m, {
                    "key-name": "S"
                  }, {
                    default: n(function() {
                      return [f(o(r.t("1602")), 1)];
                    }),
                    _: 1
                  })]), l("p", Oe, o(r.t("1919") + p(q) + r.t("1920") + r.t("177")), 1), t[12] || (t[12] = l("div", {
                    class: "obj-box"
                  }, null, -1))])];
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
}), qe = /* @__PURE__ */ E(Me, [["__scopeId", "data-v-ae4b03bb"]]);
export {
  qe as default
};
