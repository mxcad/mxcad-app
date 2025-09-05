import { h as fA, t as R, u as SA, I as pA, $ as F, Z as m, aI as IA, aJ as TA, aK as LA, d as QA, aL as bA, ac as kA, X as CA, a6 as h, aM as iA, aN as _A, R as UA } from "./lib.js";
import { f as O, i as lA, g as cA, L as NA, d as x, c as aA, o as G, a as A, w as e, q as i, t as D, Q as p, G as a, F as DA, af as AA, ag as eA, l as K, m as sA, D as oA, b as RA, p as OA } from "./vue.js";
import { M as J, a8 as YA, C as PA, a as XA, Z as dA } from "./mxcad.js";
import { C as FA } from "./color.js";
import { s as EA } from "./pinia.js";
import { C as n, D as V, c as P, i as j, j as Z, d as q, h as tA, Q as nA, S as Y, k as KA, l as $A, b as mA } from "./vuetify.js";
var ZA = function() {
  var c = J.getCurrentMxCAD().getDatabase().getDimStyleTable(), o = c.getAllRecordId();
  return (o == null ? void 0 : o.map(function(f) {
    var I = f.getMcDbDimStyleTableRecord();
    return I;
  })) || [];
}, rA = function(c) {
  var o, f = J.getCurrentMxCAD().getDatabase().getDimStyleTable();
  return (o = f.get(c)) === null || o === void 0 ? void 0 : o.getMcDbDimStyleTableRecord();
}, jA = function() {
  return J.getCurrentMxCAD().getDatabase().getCurrentlyDimStyleId().getMcDbDimStyleTableRecord();
}, zA = function(c) {
  var o = O([{
    name: "Standard"
  }, {
    name: "样式0"
  }]), f = O(0), I = O(0), C = function(t) {
    f.value = t;
  }, M = function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : f.value;
    I.value = t;
    var s = J.getCurrentMxCAD().getDatabase().getDimStyleTable();
    J.getCurrentMxCAD().getDatabase().setCurrentlyDimStyleId(s.get(o.value[t].name));
  }, u = function() {
    var t = ZA().filter(function(_) {
      return !!_;
    });
    o.value = t.map(function(_) {
      return {
        name: _.name
      };
    });
    var s = jA();
    s && M(o.value.findIndex(function(_) {
      return _.name === s.name;
    })), f.value = I.value;
  };
  lA(c, function(l) {
    l && u();
  }), u();
  var d = cA(function() {
    return o.value[I.value].name;
  }), v = function(t, s) {
    if (o.value.some(function($) {
      return $.name === t;
    }))
      return fA().error(R("2219")), !1;
    var _ = rA(t);
    if (!_ || _ != null && _.isNull()) {
      var X = J.getCurrentMxCAD().getDatabase().getDimStyleTable(), Q = new YA();
      if (s) {
        var b = rA(s), T = b == null ? void 0 : b.clone();
        T && (Q = T);
      }
      return Q.name = t, X.add(Q), u(), fA().success(R("2220")), !0;
    }
  }, w = function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : o.value[f.value].name;
    t === d.value && fA().error(R("2221"));
    var s = rA(t);
    s != null && s.isNull() || (s == null || s.erase(), u());
  };
  return {
    items: o,
    index: f,
    setIndex: C,
    currentItemText: d,
    currentIndex: I,
    setCurrentIndex: M,
    addDimStyle: v,
    deleteDimStyle: w
  };
}, HA = function() {
  var c = ["所有样式", "正在使用样式"], o = O(c[0]);
  return {
    selectItems: c,
    selectCurrentItem: o
  };
}, H = {
  /* 控制尺寸线和引线箭头的大小 */
  DIMASZ: 41,
  /* 控制圆或圆弧圆心标记以及中心线的绘制 */
  DIMCEN: 141,
  /* 基线标注中尺寸线的间距 */
  DIMDLI: 43,
  /* 尺寸线超出尺寸界线的距离 */
  DIMEXE: 44,
  /* 尺寸界线偏离原点的距离 */
  DIMEXO: 42,
  /* 标注文字周围的距离 */
  DIMGAP: 147,
  /* 线性标注测量值比例因子 */
  DIMLFAC: 144,
  /* 标注距离舍入值 */
  DIMRND: 45,
  /* 全局比例因子 */
  DIMSCALE: 40,
  /* 标注文字高度 */
  DIMTXT: 140,
  /* 尺寸线长度 */
  DIMFXL: 49
}, U = {
  /* 角度标注精度小数位数 */
  DIMADEC: 179,
  /* 角度标注单位格式 */
  DIMAUNIT: 275,
  /* 尺寸线颜色 */
  DIMCLRD: 176,
  /* 尺寸界线颜色 */
  DIMCLRE: 177,
  /* 标注文字颜色 */
  DIMCLRT: 178,
  /* 主单位小数位数 */
  DIMDEC: 271,
  /* 文字水平位置 */
  DIMJUST: 280,
  /* 箭头块显示控制 */
  DIMSAH: 173,
  /* 第一条尺寸线显示控制 */
  DIMSD1: 281,
  /* 第二条尺寸线显示控制 */
  DIMSD2: 282,
  /* 第一条尺寸界线显示控制 */
  DIMSE1: 75,
  /* 第二条尺寸界线显示控制 */
  DIMSE2: 76,
  /* 空间不足时箭头显示 */
  DIMSOXD: 175,
  /* 文字相对尺寸线垂直位置 */
  DIMTAD: 77,
  /* 文字在界线内位置 */
  DIMTIH: 73,
  /* 界线间文字绘制 */
  DIMTIX: 174,
  /* 界线间尺寸线绘制 */
  DIMTOFL: 172,
  /* 文字在界线外位置 */
  DIMTOH: 74,
  /* 主单位值消零处理 */
  DIMZIN: 78,
  /* 用户文字位置选项 */
  DIMUPT: 288,
  /* 标注单位设置 */
  DIMLUNIT: 277,
  /* 文字箭头排列 */
  DIMATFIT: 289,
  /* 文字移动规则 */
  DIMTMOVE: 279,
  /* 角度标注消零处理 */
  DIMAZIN: 79,
  /* 分数分隔符 */
  DIMDSEP: 278,
  /* 尺寸线宽度 */
  DIMLWD: 371,
  /* 尺寸界限宽度2 */
  DIMLWE: 372
}, uA = {
  /* 第二端点箭头 */
  DIMBLK: 342,
  /* 第一端点箭头 */
  DIMBLK1: 343,
  /* 第二端点箭头 */
  DIMBLK2: 344,
  /* 引线箭头类型 */
  DIMLDRBLK: 341,
  /* 文字样式 */
  DIMTXSTY: 340
}, WA = {
  /** 标注测量值前后缀 */
  DIMPOST: 3
}, vA = {
  /** 尺寸线线型 */
  DIMLTYPE: 345,
  /** 尺寸界限1线型 */
  DIMLTEX1: 346,
  /** 尺寸界限2线型 */
  DIMLTEX2: 347
};
function k(y, c) {
  var o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  return NA(function(f, I) {
    return {
      get: function() {
        f();
        var M = rA(wA.value), u;
        return c === "double" && (u = M == null ? void 0 : M.getDimVarDouble(y)), c === "int" && (u = M == null ? void 0 : M.getDimVarInt(y)), c === "id" && (u = M == null ? void 0 : M.getDimVarObjectId(y)), c === "string" && (u = M == null ? void 0 : M.getDimVarString(y)), o.get ? o.get(u, M) : u;
      },
      set: function(M) {
        var u = rA(wA.value);
        o.set && (M = o.set(M, u)), c === "double" && (u == null || u.setDimVarDouble(y, M)), c === "int" && (u == null || u.setDimVarInt(y, M)), c === "id" && (u == null || u.setDimVarObjectId(y, M)), c === "string" && (u == null || u.setDimVarString(y, M)), I();
      }
    };
  });
}
var GA = function(c) {
  var o = c >> 16, f = c >> 8 & 255, I = c & 255;
  return new XA(I, f, o);
}, JA = function(c, o, f) {
  return c + o * 256 + f * 256 * 256;
};
function BA(y, c) {
  var o = SA(), f = o.colorIndexList;
  return k(y, c, {
    get: function(C) {
      var M, u = f.findIndex(function(d) {
        return d.index === C;
      });
      return u >= 0 ? M = f[u] : M = GA(C).getColorValue(), M;
    },
    set: function(C) {
      var M, u = FA(C.color);
      return C.method === PA.kByColor ? M = JA(u.red(), u.green(), u.blue()) : M = C.index, M;
    }
  });
}
var z = function(c) {
  var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "int";
  return k(c, o, {
    get: function(I) {
      return I === 1;
    },
    set: function(I) {
      return I ? 1 : 0;
    }
  });
}, gA = function(c) {
  var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "id", f = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null, I = EA(pA()), C = I.lineTypeList;
  return k(c, o, {
    get: function(u, d) {
      if (!d) return null;
      var v = f;
      if (!u.isNull()) {
        var w = u.getMcDbLinetypeTableRecord();
        v = (w == null ? void 0 : w.name) || f;
      }
      return C.value.find(function(l) {
        return l.name === v;
      });
    },
    set: function(u) {
      return J.getCurrentDatabase().getLinetypeTable().get(u.name);
    }
  });
};
const qA = /* @__PURE__ */ x({
  __name: "Line",
  setup: function(c) {
    var o = EA(pA()), f = o.lineTypeList, I = BA(U.DIMCLRD, "int"), C = gA(vA.DIMLTYPE, "id", "Continuous"), M = k(H.DIMDLI, "double"), u = z(U.DIMSD1), d = z(U.DIMSD2), v = BA(U.DIMCLRE, "int"), w = gA(vA.DIMLTEX1, "id", "Continuous"), l = gA(vA.DIMLTEX2, "id", "Continuous"), t = z(U.DIMSE1), s = z(U.DIMSE2), _ = k(H.DIMEXE, "double"), X = k(H.DIMEXO, "double"), Q = TA(), b = k(U.DIMLWD, "int"), T = k(U.DIMLWE, "int"), $ = z(U.DIMLUNIT), W = k(H.DIMFXL, "double");
    return function(S, g) {
      return G(), aA(DA, null, [A(V, null, {
        default: e(function() {
          return [A(n, {
            cols: "12",
            "align-stretch": ""
          }, {
            default: e(function() {
              return [A(F, {
                title: S.t("2239")
              }, {
                default: e(function() {
                  return [A(V, {
                    class: "mt-2"
                  }, {
                    default: e(function() {
                      return [A(n, {
                        cols: "6"
                      }, {
                        default: e(function() {
                          return [A(m, {
                            "key-name": "C",
                            colon: ""
                          }, {
                            default: e(function() {
                              return [i(D(S.t("210")), 1)];
                            }),
                            _: 1
                          })];
                        }),
                        _: 1
                      }), A(n, {
                        cols: "6"
                      }, {
                        default: e(function() {
                          return [A(IA, {
                            modelValue: a(I),
                            "onUpdate:modelValue": g[0] || (g[0] = function(r) {
                              return p(I) ? I.value = r : null;
                            }),
                            "is-store-color": !1
                          }, null, 8, ["modelValue"])];
                        }),
                        _: 1
                      })];
                    }),
                    _: 1
                  }), A(V, {
                    class: "mt-2"
                  }, {
                    default: e(function() {
                      return [A(n, {
                        cols: "6"
                      }, {
                        default: e(function() {
                          return [A(m, {
                            "key-name": "L",
                            colon: ""
                          }, {
                            default: e(function() {
                              return [i(D(S.t("218")), 1)];
                            }),
                            _: 1
                          })];
                        }),
                        _: 1
                      }), A(n, {
                        cols: "6"
                      }, {
                        default: e(function() {
                          return [A(P, {
                            items: a(f),
                            modelValue: a(C),
                            "onUpdate:modelValue": g[1] || (g[1] = function(r) {
                              return p(C) ? C.value = r : null;
                            }),
                            "return-object": "",
                            "item-title": "name"
                          }, null, 8, ["items", "modelValue"])];
                        }),
                        _: 1
                      })];
                    }),
                    _: 1
                  }), A(V, {
                    class: "mt-2"
                  }, {
                    default: e(function() {
                      return [A(n, {
                        cols: "6"
                      }, {
                        default: e(function() {
                          return [A(m, {
                            "key-name": "G",
                            colon: ""
                          }, {
                            default: e(function() {
                              return [i(D(S.t("1810")), 1)];
                            }),
                            _: 1
                          })];
                        }),
                        _: 1
                      }), A(n, {
                        cols: "6"
                      }, {
                        default: e(function() {
                          return [A(P, {
                            modelValue: a(b),
                            "onUpdate:modelValue": g[2] || (g[2] = function(r) {
                              return p(b) ? b.value = r : null;
                            }),
                            items: a(Q),
                            "item-title": "name"
                          }, null, 8, ["modelValue", "items"])];
                        }),
                        _: 1
                      })];
                    }),
                    _: 1
                  }), A(V, {
                    class: "mt-2"
                  }, {
                    default: e(function() {
                      return [A(n, {
                        cols: "6"
                      }, {
                        default: e(function() {
                          return [A(m, {
                            "key-name": "G",
                            colon: ""
                          }, {
                            default: e(function() {
                              return [i(D(S.t("2240")), 1)];
                            }),
                            _: 1
                          })];
                        }),
                        _: 1
                      }), A(n, {
                        cols: "3"
                      }), A(n, {
                        cols: "3"
                      }, {
                        default: e(function() {
                          return [A(j, {
                            modelValue: a(M),
                            "onUpdate:modelValue": g[3] || (g[3] = function(r) {
                              return p(M) ? M.value = r : null;
                            }),
                            modelModifiers: {
                              lazy: !0
                            },
                            type: "number"
                          }, null, 8, ["modelValue"])];
                        }),
                        _: 1
                      })];
                    }),
                    _: 1
                  }), A(V, null, {
                    default: e(function() {
                      return [A(n, {
                        cols: "2"
                      }, {
                        default: e(function() {
                          return [i(D(S.t("1778")) + ": ", 1)];
                        }),
                        _: 1
                      }), A(n, {
                        cols: "5"
                      }, {
                        default: e(function() {
                          return [A(Z, {
                            modelValue: a(u),
                            "onUpdate:modelValue": g[4] || (g[4] = function(r) {
                              return p(u) ? u.value = r : null;
                            })
                          }, {
                            label: e(function() {
                              return [A(m, {
                                "key-name": "M"
                              }, {
                                default: e(function() {
                                  return [i(D(S.t("2239")) + "1", 1)];
                                }),
                                _: 1
                              })];
                            }),
                            _: 1
                          }, 8, ["modelValue"])];
                        }),
                        _: 1
                      }), A(n, {
                        cols: "5"
                      }, {
                        default: e(function() {
                          return [A(Z, {
                            modelValue: a(d),
                            "onUpdate:modelValue": g[5] || (g[5] = function(r) {
                              return p(d) ? d.value = r : null;
                            })
                          }, {
                            label: e(function() {
                              return [A(m, {
                                "key-name": "D"
                              }, {
                                default: e(function() {
                                  return [i(D(S.t("2239")) + "2", 1)];
                                }),
                                _: 1
                              })];
                            }),
                            _: 1
                          }, 8, ["modelValue"])];
                        }),
                        _: 1
                      })];
                    }),
                    _: 1
                  })];
                }),
                _: 1
              }, 8, ["title"])];
            }),
            _: 1
          })];
        }),
        _: 1
      }), A(F, {
        title: S.t("2241")
      }, {
        default: e(function() {
          return [A(V, null, {
            default: e(function() {
              return [A(n, {
                cols: "6"
              }, {
                default: e(function() {
                  return [A(V, {
                    class: "mt-2"
                  }, {
                    default: e(function() {
                      return [A(n, {
                        cols: "6"
                      }, {
                        default: e(function() {
                          return [A(m, {
                            "key-name": "C",
                            colon: ""
                          }, {
                            default: e(function() {
                              return [i(D(S.t("210")), 1)];
                            }),
                            _: 1
                          })];
                        }),
                        _: 1
                      }), A(n, {
                        cols: "6"
                      }, {
                        default: e(function() {
                          return [A(IA, {
                            class: "mr-1 selectBox",
                            modelValue: a(v),
                            "onUpdate:modelValue": g[6] || (g[6] = function(r) {
                              return p(v) ? v.value = r : null;
                            }),
                            "is-store-color": !1
                          }, null, 8, ["modelValue"])];
                        }),
                        _: 1
                      })];
                    }),
                    _: 1
                  }), A(V, {
                    class: "mt-2"
                  }, {
                    default: e(function() {
                      return [A(n, {
                        cols: "6"
                      }, {
                        default: e(function() {
                          return [A(m, {
                            "key-name": "T",
                            colon: ""
                          }, {
                            default: e(function() {
                              return [i(D(S.t("2241")) + "1" + D(S.t("2242") + S.t("218")), 1)];
                            }),
                            _: 1
                          })];
                        }),
                        _: 1
                      }), A(n, {
                        cols: "6"
                      }, {
                        default: e(function() {
                          return [A(P, {
                            items: a(f),
                            "return-object": "",
                            "item-title": "name",
                            modelValue: a(w),
                            "onUpdate:modelValue": g[7] || (g[7] = function(r) {
                              return p(w) ? w.value = r : null;
                            })
                          }, null, 8, ["items", "modelValue"])];
                        }),
                        _: 1
                      })];
                    }),
                    _: 1
                  }), A(V, {
                    class: "mt-2"
                  }, {
                    default: e(function() {
                      return [A(n, {
                        cols: "6"
                      }, {
                        default: e(function() {
                          return [A(m, {
                            "key-name": "T",
                            colon: ""
                          }, {
                            default: e(function() {
                              return [i(D(S.t("2241")) + "2" + D(S.t("2242") + S.t("218")), 1)];
                            }),
                            _: 1
                          })];
                        }),
                        _: 1
                      }), A(n, {
                        cols: "6"
                      }, {
                        default: e(function() {
                          return [A(P, {
                            items: a(f),
                            "return-object": "",
                            "item-title": "name",
                            modelValue: a(l),
                            "onUpdate:modelValue": g[8] || (g[8] = function(r) {
                              return p(l) ? l.value = r : null;
                            })
                          }, null, 8, ["items", "modelValue"])];
                        }),
                        _: 1
                      })];
                    }),
                    _: 1
                  }), A(V, {
                    class: "mt-2"
                  }, {
                    default: e(function() {
                      return [A(n, {
                        cols: "6"
                      }, {
                        default: e(function() {
                          return [A(m, {
                            "key-name": "G",
                            colon: ""
                          }, {
                            default: e(function() {
                              return [i(D(S.t("1810")), 1)];
                            }),
                            _: 1
                          })];
                        }),
                        _: 1
                      }), A(n, {
                        cols: "6"
                      }, {
                        default: e(function() {
                          return [A(P, {
                            items: a(Q),
                            "item-title": "name",
                            modelValue: a(T),
                            "onUpdate:modelValue": g[9] || (g[9] = function(r) {
                              return p(T) ? T.value = r : null;
                            })
                          }, null, 8, ["items", "modelValue"])];
                        }),
                        _: 1
                      })];
                    }),
                    _: 1
                  }), A(V, null, {
                    default: e(function() {
                      return [A(n, {
                        cols: "2"
                      }, {
                        default: e(function() {
                          return [i(D(S.t("1778")) + ": ", 1)];
                        }),
                        _: 1
                      }), A(n, {
                        cols: "5"
                      }, {
                        default: e(function() {
                          return [A(Z, {
                            modelValue: a(t),
                            "onUpdate:modelValue": g[10] || (g[10] = function(r) {
                              return p(t) ? t.value = r : null;
                            })
                          }, {
                            label: e(function() {
                              return [A(m, {
                                "key-name": "M"
                              }, {
                                default: e(function() {
                                  return [i(D(S.t("2241")) + "1", 1)];
                                }),
                                _: 1
                              })];
                            }),
                            _: 1
                          }, 8, ["modelValue"])];
                        }),
                        _: 1
                      }), A(n, {
                        cols: "5"
                      }, {
                        default: e(function() {
                          return [A(Z, {
                            modelValue: a(s),
                            "onUpdate:modelValue": g[11] || (g[11] = function(r) {
                              return p(s) ? s.value = r : null;
                            })
                          }, {
                            label: e(function() {
                              return [A(m, {
                                "key-name": "D"
                              }, {
                                default: e(function() {
                                  return [i(D(S.t("2241")) + "2", 1)];
                                }),
                                _: 1
                              })];
                            }),
                            _: 1
                          }, 8, ["modelValue"])];
                        }),
                        _: 1
                      })];
                    }),
                    _: 1
                  })];
                }),
                _: 1
              }), A(n, {
                cols: "6"
              }, {
                default: e(function() {
                  return [A(V, {
                    class: "mt-2"
                  }, {
                    default: e(function() {
                      return [A(n, {
                        cols: "8"
                      }, {
                        default: e(function() {
                          return [A(m, {
                            "key-name": "X",
                            colon: ""
                          }, {
                            default: e(function() {
                              return [i(D(S.t("2243")), 1)];
                            }),
                            _: 1
                          })];
                        }),
                        _: 1
                      }), A(n, {
                        cols: "4"
                      }, {
                        default: e(function() {
                          return [A(j, {
                            type: "number",
                            modelValue: a(_),
                            "onUpdate:modelValue": g[12] || (g[12] = function(r) {
                              return p(_) ? _.value = r : null;
                            }),
                            modelModifiers: {
                              lazy: !0
                            }
                          }, null, 8, ["modelValue"])];
                        }),
                        _: 1
                      })];
                    }),
                    _: 1
                  }), A(V, {
                    class: "mt-4"
                  }, {
                    default: e(function() {
                      return [A(n, {
                        cols: "8"
                      }, {
                        default: e(function() {
                          return [A(m, {
                            "key-name": "F",
                            colon: ""
                          }, {
                            default: e(function() {
                              return [i(D(S.t("2244")), 1)];
                            }),
                            _: 1
                          })];
                        }),
                        _: 1
                      }), A(n, {
                        cols: "4"
                      }, {
                        default: e(function() {
                          return [A(j, {
                            type: "number",
                            modelValue: a(X),
                            "onUpdate:modelValue": g[13] || (g[13] = function(r) {
                              return p(X) ? X.value = r : null;
                            }),
                            modelModifiers: {
                              lazy: !0
                            }
                          }, null, 8, ["modelValue"])];
                        }),
                        _: 1
                      })];
                    }),
                    _: 1
                  }), A(Z, {
                    modelValue: a($),
                    "onUpdate:modelValue": g[14] || (g[14] = function(r) {
                      return p($) ? $.value = r : null;
                    })
                  }, {
                    label: e(function() {
                      return [A(m, {
                        "key-name": "O"
                      }, {
                        default: e(function() {
                          return [i(D(S.t("2245")), 1)];
                        }),
                        _: 1
                      })];
                    }),
                    _: 1
                  }, 8, ["modelValue"]), A(V, {
                    class: "mt-2"
                  }, {
                    default: e(function() {
                      return [A(n, {
                        cols: "1"
                      }), A(n, {
                        cols: "7"
                      }, {
                        default: e(function() {
                          return [A(m, {
                            "key-name": "E",
                            colon: "",
                            class: "ml-3"
                          }, {
                            default: e(function() {
                              return [i(D(S.t("188")), 1)];
                            }),
                            _: 1
                          })];
                        }),
                        _: 1
                      }), A(n, {
                        cols: "4"
                      }, {
                        default: e(function() {
                          return [A(j, {
                            type: "number",
                            modelValue: a(W),
                            "onUpdate:modelValue": g[15] || (g[15] = function(r) {
                              return p(W) ? W.value = r : null;
                            }),
                            modelModifiers: {
                              lazy: !0
                            }
                          }, null, 8, ["modelValue"])];
                        }),
                        _: 1
                      })];
                    }),
                    _: 1
                  })];
                }),
                _: 1
              })];
            }),
            _: 1
          })];
        }),
        _: 1
      }, 8, ["title"])], 64);
    };
  }
}), xA = "data:image/bmp;base64,Qk3CAQAAAAAAADYAAAAoAAAACwAAAAsAAAABABgAAAAAAIwBAAAAAAAAAAAAAAAAAAAAAAAAAAAAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAAAAAAAAAwMDAwMDAAAAAwMDAwMDAwMDAwMDAwMDAwMDAgICAAAAAAAAAwMDAwMDAAAAAAAAAAAAAwMDAwMDAwMDAwMDAgICAAAAAAAAAwMDAwMDAAAAAAAAAAAAAAAAAAAAAAAAAwMDAgICAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwMDAwMDAAAAAAAAAAAAAAAAAAAAAAAAAwMDAgICAAAAAAAAAwMDAwMDAAAAAAAAAAAAAwMDAwMDAwMDAwMDAgICAAAAAAAAAwMDAwMDAAAAAwMDAwMDAwMDAwMDAwMDAwMDAgICAAAAAAAAAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAgICAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA", hA = "data:image/bmp;base64,Qk3CAQAAAAAAADYAAAAoAAAACwAAAAsAAAABABgAAAAAAIwBAAAAAAAAAAAAAAAAAAAAAAAAAAAAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAAAAAAAAAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAgICAAAAAAAAAwMDAAAAAAAAAAAAAwMDAwMDAwMDAwMDAwMDAgICAAAAAAAAAwMDAAAAA+/v7+/v7AAAAAAAAAAAAwMDAwMDAgICAAAAAAAAAwMDAAAAA+/v7+/v7+/v7+/v7+/v7AAAAwMDAgICAAAAAAAAAwMDAAAAA+/v7+/v7+/v7+/v7+/v7+/v7AAAAAAAAAAAAAAAAwMDAAAAA+/v7+/v7+/v7+/v7+/v7AAAAwMDAgICAAAAAAAAAwMDAAAAA+/v7+/v7AAAAAAAAAAAAwMDAwMDAgICAAAAAAAAAwMDAAAAAAAAAAAAAwMDAwMDAwMDAwMDAwMDAgICAAAAAAAAAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAgICAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA", Ae = "data:image/bmp;base64,Qk3CAQAAAAAAADYAAAAoAAAACwAAAAsAAAABABgAAAAAAIwBAAAAAAAAAAAAAAAAAAAAAAAAAAAAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAAAAAAAAAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAgICAAAAAAAAAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAgICAAAAAAAAAwMDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwMDAgICAAAAAAAAAwMDAAAAAwMDAwMDAwMDAwMDAwMDAwMDAAAAAgICAAAAAAAAAwMDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwMDAAAAAwMDAwMDAwMDAwMDAwMDAwMDAAAAAgICAAAAAAAAAwMDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwMDAgICAAAAAAAAAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAgICAAAAAAAAAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAgICAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA", ee = "data:image/bmp;base64,Qk3CAQAAAAAAADYAAAAoAAAACwAAAAsAAAABABgAAAAAAIwBAAAAAAAAAAAAAAAAAAAAAAAABAQEgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAAAAABAQEwMDAwMDAwMDAwMDABAQEBAQEBAQEBAQEwMDAgICAAAAABAQEwMDAwMDAwMDABAQEBAQEBAQEBAQEBAQEBAQEgICAAAAABAQEwMDAwMDABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEAAAABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEAAAABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEAAAABAQEwMDAwMDABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEAAAABAQEwMDAwMDAwMDABAQEBAQEBAQEBAQEBAQEBAQEgICAAAAABAQEwMDAwMDAwMDAwMDABAQEBAQEBAQEBAQEwMDAgICAAAAABAQEwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAgICAAAAABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEAAAA", te = "data:image/bmp;base64,Qk3CAQAAAAAAADYAAAAoAAAACwAAAAsAAAABABgAAAAAAIwBAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEgICAgICAgICAgICAgICAgICAgICAgICAAAAABAQEBAQEBAQEBAQEwMDAwMDAwMDAwMDAwMDAwMDAgICAAAAABAQEwMDABAQEBAQEBAQEwMDAwMDAwMDAwMDAwMDAgICAAAAABAQEwMDAwMDABAQEBAQEBAQEwMDAwMDAwMDAwMDAgICAAAAABAQEwMDAwMDAwMDABAQEBAQEBAQEwMDAwMDAwMDAgICAAAAABAQEwMDAwMDAwMDAwMDABAQEBAQEBAQEwMDAwMDAgICAAAAABAQEwMDAwMDAwMDAwMDAwMDABAQEBAQEBAQEwMDAgICAAAAABAQEwMDAwMDAwMDAwMDAwMDAwMDABAQEBAQEBAQEgICAAAAABAQEwMDAwMDAwMDAwMDAwMDAwMDAwMDABAQEBAQEBAQEAAAABAQEwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDABAQEBAQEAAAABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEAAAA", ne = "data:image/bmp;base64,Qk3CAQAAAAAAADYAAAAoAAAACwAAAAsAAAABABgAAAAAAIwBAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEgICAgICAgICAgICAgICAgICAgICAgICAgICAAAAABAQEwMDAAAAAwMDAwMDAwMDAwMDAwMDAwMDAwMDAgICAAAAABAQEwMDAwMDAAAAAwMDAwMDAwMDAwMDAwMDAwMDAgICAAAAABAQEwMDAwMDAwMDAAAAAwMDAwMDAwMDAwMDAwMDAgICAAAAABAQEwMDAwMDAwMDAwMDAAAAAwMDAwMDAwMDAwMDAgICAAAAABAQEwMDAwMDAwMDAwMDAwMDAAAAAwMDAwMDAwMDAgICAAAAABAQEwMDAwMDAwMDAwMDAwMDAwMDAAAAAwMDAwMDAgICAAAAABAQEwMDAwMDAwMDAwMDAwMDAwMDAwMDAAAAAwMDAgICAAAAABAQEwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAAAAAgICAAAAABAQEwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDABAQEAAAABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEAAAA", le = "data:image/bmp;base64,Qk3CAQAAAAAAADYAAAAoAAAACwAAAAsAAAABABgAAAAAAIwBAAAAAAAAAAAAAAAAAAAAAAAABAQEgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAAAAABAQEwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAgICAAAAABAQEwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAgICAAAAABAQEwMDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwMDAgICAAAAABAQEwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDABAQEgICAAAAABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEAAAABAQEwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDABAQEgICAAAAABAQEwMDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwMDAgICAAAAABAQEwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAgICAAAAABAQEwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAgICAAAAABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEAAAA", ue = "data:image/bmp;base64,Qk3CAQAAAAAAADYAAAAoAAAACwAAAAsAAAABABgAAAAAAIwBAAAAAAAAAAAAAAAAAAAAAAAAAAAAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAAAAAAAAAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAgICAAAAAAAAAwMDAwMDAwMDAwMDAwMDAAAAAAAAAAAAAwMDAgICAAAAAAAAAwMDAwMDAwMDAwMDAAAAA+/v7+/v7+/v7AAAAgICAAAAAAAAAwMDAwMDAwMDAAAAA+/v7+/v7+/v7+/v7+/v7AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+/v7+/v7AAAAAAAAAAAAwMDAwMDAwMDAAAAA+/v7+/v7+/v7+/v7+/v7AAAAAAAAAAAAwMDAwMDAwMDAwMDAAAAA+/v7+/v7+/v7AAAAgICAAAAAAAAAwMDAwMDAwMDAwMDAwMDAAAAAAAAAAAAAwMDAgICAAAAAAAAAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAgICAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA", re = "data:image/bmp;base64,Qk3CAQAAAAAAADYAAAAoAAAACwAAAAsAAAABABgAAAAAAIwBAAAAAAAAAAAAAAAAAAAAAAAAAAAAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAAAAAAAAAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAgICAAAAAAAAAwMDAwMDAwMDAwMDAwMDAAAAAAAAAAAAAwMDAgICAAAAAAAAAwMDAwMDAwMDAwMDAAAAA+/v7+/v7+/v7AAAAgICAAAAAAAAAwMDAwMDAwMDAAAAA+/v7+/v7AAAA+/v7+/v7AAAAAAAAAAAAAAAAAAAAAAAAAAAA+/v7AAAA////AAAA+/v7AAAAAAAAAAAAwMDAwMDAwMDAAAAA+/v7+/v7AAAA+/v7+/v7AAAAAAAAAAAAwMDAwMDAwMDAwMDAAAAA+/v7+/v7+/v7AAAAgICAAAAAAAAAwMDAwMDAwMDAwMDAwMDAAAAAAAAAAAAAwMDAgICAAAAAAAAAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAgICAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA", ae = "data:image/bmp;base64,Qk3CAQAAAAAAADYAAAAoAAAACwAAAAsAAAABABgAAAAAAIwBAAAAAAAAAAAAAAAAAAAAAAAAAAAAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAAAAAAAAAwMDAwMDAwMDAwMDAwMDAAAAAwMDAwMDAwMDAgICAAAAAAAAAwMDAwMDAwMDAwMDAwMDAwMDAAAAAwMDAwMDAgICAAAAAAAAAwMDAwMDAwMDAwMDAwMDAwMDAwMDAAAAAwMDAgICAAAAAAAAAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAAAAAgICAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAAAAAgICAAAAAAAAAwMDAwMDAwMDAwMDAwMDAwMDAwMDAAAAAwMDAgICAAAAAAAAAwMDAwMDAwMDAwMDAwMDAwMDAAAAAwMDAwMDAgICAAAAAAAAAwMDAwMDAwMDAwMDAwMDAAAAAwMDAwMDAwMDAgICAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA", De = "data:image/bmp;base64,Qk3CAQAAAAAAADYAAAAoAAAACwAAAAsAAAABABgAAAAAAIwBAAAAAAAAAAAAAAAAAAAAAAAAAAAAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAAAAAAAAAwMDAAAAAwMDAwMDAwMDAwMDAwMDAwMDAwMDAgICAAAAAAAAAwMDAwMDAAAAAAAAAAAAAwMDAwMDAwMDAwMDAgICAAAAAAAAAwMDAwMDAwMDAwMDAAAAAAAAAAAAAwMDAwMDAgICAAAAAAAAAwMDAwMDAwMDAwMDAwMDAwMDAwMDAAAAAAAAAgICAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwMDAwMDAwMDAwMDAwMDAwMDAwMDAAAAAAAAAAAAAAAAAAAAAwMDAwMDAwMDAwMDAAAAAAAAAAAAAwMDAwMDAAAAAAAAAAAAAwMDAwMDAAAAAAAAAAAAAwMDAwMDAwMDAwMDAAAAAAAAAAAAAwMDAAAAAwMDAwMDAwMDAwMDAwMDAwMDAwMDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA", oe = "data:image/bmp;base64,Qk3CAQAAAAAAADYAAAAoAAAACwAAAAsAAAABABgAAAAAAIwBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAAAAAAAAAAAAAwMDAwMDAwMDAwMDAAAAAAAAAwMDAwMDAwMDAAAAAAAAAAAAAwMDAwMDAwMDAAAAAAAAAAAAAAAAAwMDAwMDAAAAAAAAAAAAAwMDAwMDAAAAAAAAAAAAAAAAAAAAAAAAAwMDAAAAAAAAAAAAAwMDAwMDAAAAAAAAAAAAAAAAAAAAAAAAAwMDAAAAAAAAAAAAAwMDAwMDAwMDAAAAAAAAAAAAAAAAAwMDAwMDAAAAAAAAAAAAAwMDAwMDAwMDAwMDAAAAAAAAAwMDAwMDAwMDAAAAAAAAAAAAAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAAAAAAAAAAAAAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA", Me = "data:image/bmp;base64,Qk3CAQAAAAAAADYAAAAoAAAACwAAAAsAAAABABgAAAAAAIwBAAAAAAAAAAAAAAAAAAAAAAAAAAAAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAAAAAAAAAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAgICAAAAAAAAAwMDAwMDAwMDAwMDAwMDAAAAAAAAAAAAAwMDAgICAAAAAAAAAwMDAwMDAwMDAwMDAAAAA+/v7+/v7+/v7AAAAgICAAAAAAAAAwMDAwMDAwMDAAAAA+/v7+/v7+/v7+/v7+/v7AAAAAAAAAAAAAAAAAAAAAAAAAAAA+/v7+/v7+/v7+/v7+/v7AAAAAAAAAAAAwMDAwMDAwMDAAAAA+/v7+/v7+/v7+/v7+/v7AAAAAAAAAAAAwMDAwMDAwMDAwMDAAAAA+/v7+/v7+/v7AAAAgICAAAAAAAAAwMDAwMDAwMDAwMDAwMDAAAAAAAAAAAAAwMDAgICAAAAAAAAAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAgICAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA", ie = "data:image/bmp;base64,Qk3CAQAAAAAAADYAAAAoAAAACwAAAAsAAAABABgAAAAAAIwBAAAAAAAAAAAAAAAAAAAAAAAAAAAAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAAAAAAAAAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAgICAAAAAAAAAwMDAwMDAwMDAwMDAAAAAAAAAwMDAwMDAwMDAgICAAAAAAAAAwMDAwMDAwMDAAAAA+/v7+/v7AAAAwMDAwMDAgICAAAAAAAAAwMDAwMDAAAAA+/v7+/v7+/v7+/v7AAAAwMDAgICAAAAAAAAAwMDAwMDAAAAA+/v7+/v7+/v7+/v7AAAAwMDAgICAAAAAAAAAwMDAwMDAwMDAAAAA+/v7+/v7AAAAwMDAwMDAgICAAAAAAAAAwMDAwMDAwMDAwMDAAAAAAAAAwMDAwMDAwMDAgICAAAAAAAAAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAgICAAAAAAAAAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAgICAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA", we = "data:image/bmp;base64,Qk3CAQAAAAAAADYAAAAoAAAACwAAAAsAAAABABgAAAAAAIwBAAAAAAAAAAAAAAAAAAAAAAAAAAAAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAAAAAAAAAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAgICAAAAAAAAAwMDAwMDAwMDAAAAAAAAAAAAAAAAAAAAAAAAAgICAAAAAAAAAwMDAwMDAwMDAAAAA+/v7+/v7+/v7+/v7AAAAgICAAAAAAAAAAAAAAAAAAAAAAAAA+/v7+/v7+/v7+/v7AAAAgICAAAAAAAAAAAAAAAAAAAAAAAAA+/v7+/v7+/v7+/v7AAAAgICAAAAAAAAAwMDAwMDAwMDAAAAA+/v7+/v7+/v7+/v7AAAAgICAAAAAAAAAwMDAwMDAwMDAAAAAAAAAAAAAAAAAAAAAAAAAgICAAAAAAAAAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAgICAAAAAAAAAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAgICAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA", se = "data:image/bmp;base64,Qk3CAQAAAAAAADYAAAAoAAAACwAAAAsAAAABABgAAAAAAIwBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAAAAAAAAAAAAAwMDAwMDAwMDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwMDAwMDAwMDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwMDAwMDAwMDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwMDAwMDAwMDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAAAAAAAAAAAAAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA", fe = "data:image/bmp;base64,Qk3CAQAAAAAAADYAAAAoAAAACwAAAAsAAAABABgAAAAAAIwBAAAAAAAAAAAAAAAAAAAAAAAAAAAAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAAAAAAAAAwMDAwMDAwMDAwMDAwMDAwMDAwMDAAAAAAAAAgICAAAAAAAAAwMDAwMDAwMDAwMDAwMDAAAAAAAAA+/v7AAAAgICAAAAAAAAAwMDAwMDAwMDAAAAAAAAA+/v7+/v7+/v7AAAAgICAAAAAAAAAwMDAAAAAAAAA+/v7+/v7+/v7+/v7+/v7AAAAgICAAAAAAAAAAAAAAAAA+/v7+/v7+/v7+/v7+/v7+/v7AAAAgICAAAAAAAAAwMDAwMDAAAAAAAAA+/v7+/v7+/v7+/v7AAAAgICAAAAAAAAAwMDAwMDAwMDAwMDAAAAAAAAA+/v7+/v7AAAAgICAAAAAAAAAwMDAwMDAwMDAwMDAwMDAwMDAAAAAAAAAAAAAgICAAAAAAAAAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAgICAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA", de = "data:image/bmp;base64,Qk3CAQAAAAAAADYAAAAoAAAACwAAAAsAAAABABgAAAAAAIwBAAAAAAAAAAAAAAAAAAAAAAAAAAAAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAAAAAAAAAwMDAwMDAwMDAwMDAwMDAwMDAwMDAAAAAAAAAgICAAAAAAAAAwMDAwMDAwMDAwMDAwMDAAAAAAAAAAAAAAAAAgICAAAAAAAAAwMDAwMDAwMDAAAAAAAAAAAAAAAAAAAAAAAAAgICAAAAAAAAAwMDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgICAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgICAAAAAAAAAwMDAwMDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgICAAAAAAAAAwMDAwMDAwMDAwMDAAAAAAAAAAAAAAAAAAAAAgICAAAAAAAAAwMDAwMDAwMDAwMDAwMDAwMDAAAAAAAAAAAAAgICAAAAAAAAAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAAAAAgICAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA", me = "data:image/bmp;base64,Qk3CAQAAAAAAADYAAAAoAAAACwAAAAsAAAABABgAAAAAAIwBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgICAgICAgICAgICAgICAgICAgICAgICAAAAAAAAAwMDAAAAAAAAAAAAAwMDAwMDAwMDAwMDAwMDAgICAAAAAAAAAwMDAwMDAwMDAAAAAAAAAwMDAwMDAwMDAwMDAgICAAAAAAAAAwMDAwMDAwMDAwMDAAAAAAAAAwMDAwMDAwMDAgICAAAAAAAAAwMDAwMDAwMDAwMDAAAAAAAAAwMDAwMDAwMDAgICAAAAAAAAAwMDAwMDAwMDAwMDAAAAAAAAAwMDAwMDAwMDAgICAAAAAAAAAwMDAwMDAwMDAwMDAAAAAAAAAwMDAwMDAwMDAgICAAAAAAAAAwMDAwMDAwMDAwMDAwMDAAAAAAAAAwMDAwMDAgICAAAAAAAAAwMDAwMDAwMDAwMDAwMDAwMDAAAAAAAAAAAAAgICAAAAAAAAAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA", ve = "data:image/bmp;base64,Qk3CAQAAAAAAADYAAAAoAAAACwAAAAsAAAABABgAAAAAAIwBAAAAAAAAAAAAAAAAAAAAAAAAAAAAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAAAAAAAAAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAgICAAAAAAAAAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAgICAAAAAAAAAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAgICAAAAAAAAAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAgICAAAAAAAAAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAgICAAAAAAAAAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAgICAAAAAAAAAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAgICAAAAAAAAAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAgICAAAAAAAAAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAgICAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA";
var ge = function() {
  var c = z(U.DIMSAH), o = k(uA.DIMBLK, "id", {
    get: function(d, v) {
      if (!v) return "";
      var w = "";
      return d.isNull() && (w = v.getDimblk()), c.value || (w = ""), w;
    },
    set: function(d, v) {
    }
  }), f = k(uA.DIMBLK1, "id", {
    get: function(d, v) {
      if (o.value.length === 0) {
        var w = "_closefilled";
        if (!v) return "";
        if (d.isNull()) {
          var l = v.getDimblk1();
          l.length > 0 && (w = l);
        } else {
          var t = d.getMcDbBlockTableRecord();
          t && (w = t.name);
        }
        return w;
      }
      return o.value;
    },
    set: function(d, v) {
      if (v)
        return v.setDimblk1(d), new dA();
    }
  }), I = k(uA.DIMBLK2, "id", {
    get: function(d, v) {
      if (o.value.length === 0) {
        var w = "_closefilled";
        if (!v) return "";
        if (d.isNull()) {
          var l = v.getDimblk2();
          l.length > 0 && (w = l);
        } else {
          var t = d.getMcDbBlockTableRecord();
          t && (w = t.name);
        }
        return w;
      } else
        return o.value;
    },
    set: function(d, v) {
      if (v)
        return v.setDimblk2(d), new dA();
    }
  }), C = k(uA.DIMLDRBLK, "id", {
    get: function(d, v) {
      if (!v) return "";
      var w = "_closefilled";
      if (d.isNull()) {
        var l = v.getDimldrblk();
        l.length > 0 && (w = l);
      } else {
        var t = d.getMcDbBlockTableRecord();
        t && (w = t.name);
      }
      return w;
    },
    set: function(d, v) {
      if (v)
        return v.setDimldrblk(d), new dA();
    }
  }), M = O([{
    title: R("1783"),
    value: "_closefilled",
    icon: xA
  }, {
    title: R("1784"),
    value: "_closedblank",
    icon: hA
  }, {
    title: R("1728"),
    value: "_closed",
    icon: Ae
  }, {
    title: R("194"),
    value: "_dot",
    icon: ee
  }, {
    title: R("1786"),
    value: "_archtick",
    icon: te
  }, {
    title: R("1787"),
    value: "_oblique",
    icon: ne
  }, {
    title: R("195"),
    value: "_open",
    icon: le
  }, {
    title: R("1789"),
    value: "_origin",
    icon: ue
  }, {
    title: R("2402"),
    value: "_origin2",
    icon: re
  }, {
    title: R("1791"),
    value: "_open90",
    icon: ae
  }, {
    title: "30" + R("2403"),
    value: "_open30",
    icon: De
  }, {
    title: R("1793"),
    value: "_dotsmall",
    icon: oe
  }, {
    title: R("1794"),
    value: "_dotblank",
    icon: Me
  }, {
    title: R("1795"),
    value: "_small",
    icon: ie
  }, {
    title: R("1796"),
    value: "_boxblank",
    icon: we
  }, {
    title: R("1797"),
    value: "_boxfilled",
    icon: se
  }, {
    title: R("1798"),
    value: "_datumblank",
    icon: fe
  }, {
    title: R("1799"),
    value: "_datumfilled",
    icon: de
  }, {
    title: R("1800"),
    value: "_integral",
    icon: me
  }, {
    title: R("1688"),
    value: "_none",
    icon: ve
  }]);
  return {
    DIMBLK: o,
    DIMBLK1: f,
    DIMBLK2: I,
    DIMLDRBLK: C,
    MxArrowHeadComboBox: M
  };
}, Ie = {
  class: "h-100"
};
const Ce = /* @__PURE__ */ x({
  __name: "SymbolsAndArrows",
  setup: function(c) {
    var o = k(H.DIMASZ, "double"), f = O(1), I = k(H.DIMCEN, "double");
    I.value === 0 ? f.value = 0 : I.value > 0 ? f.value = 1 : f.value = 2;
    var C = ge(), M = C.MxArrowHeadComboBox, u = C.DIMBLK1, d = C.DIMBLK2, v = C.DIMLDRBLK;
    return function(w, l) {
      return G(), aA(DA, null, [A(V, null, {
        default: e(function() {
          return [A(n, {
            cols: "12"
          }, {
            default: e(function() {
              return [A(F, {
                title: w.t("2226")
              }, {
                default: e(function() {
                  return [A(m, {
                    "key-name": "T",
                    colon: ""
                  }, {
                    default: e(function() {
                      return [i(D(w.t("2272")), 1)];
                    }),
                    _: 1
                  }), A(P, {
                    items: a(M),
                    modelValue: a(u),
                    "onUpdate:modelValue": l[0] || (l[0] = function(t) {
                      return p(u) ? u.value = t : null;
                    })
                  }, {
                    item: e(function(t) {
                      var s = t.props, _ = t.item;
                      return [A(q, AA(eA(s)), {
                        prepend: e(function() {
                          return [A(tA, {
                            src: _.raw.icon,
                            width: "11",
                            height: "11",
                            class: "mr-1"
                          }, null, 8, ["src"])];
                        }),
                        _: 2
                      }, 1040)];
                    }),
                    selection: e(function(t) {
                      var s = t.item;
                      return [A(q, AA(eA(s.props)), {
                        prepend: e(function() {
                          return [A(tA, {
                            src: s.raw.icon,
                            width: "11",
                            height: "11",
                            class: "mr-1"
                          }, null, 8, ["src"])];
                        }),
                        _: 2
                      }, 1040)];
                    }),
                    _: 1
                  }, 8, ["items", "modelValue"]), A(m, {
                    "key-name": "D",
                    colon: ""
                  }, {
                    default: e(function() {
                      return [i(D(w.t("2273")), 1)];
                    }),
                    _: 1
                  }), A(P, {
                    items: a(M),
                    modelValue: a(d),
                    "onUpdate:modelValue": l[1] || (l[1] = function(t) {
                      return p(d) ? d.value = t : null;
                    })
                  }, {
                    item: e(function(t) {
                      var s = t.props, _ = t.item;
                      return [A(q, AA(eA(s)), {
                        prepend: e(function() {
                          return [A(tA, {
                            src: _.raw.icon,
                            width: "11",
                            height: "11",
                            class: "mr-1"
                          }, null, 8, ["src"])];
                        }),
                        _: 2
                      }, 1040)];
                    }),
                    selection: e(function(t) {
                      var s = t.item;
                      return [A(q, AA(eA(s.props)), {
                        prepend: e(function() {
                          return [A(tA, {
                            src: s.raw.icon,
                            width: "11",
                            height: "11",
                            class: "mr-1"
                          }, null, 8, ["src"])];
                        }),
                        _: 2
                      }, 1040)];
                    }),
                    _: 1
                  }, 8, ["items", "modelValue"]), A(m, {
                    "key-name": "L",
                    colon: ""
                  }, {
                    default: e(function() {
                      return [i(D(w.t("2274")), 1)];
                    }),
                    _: 1
                  }), A(P, {
                    items: a(M),
                    modelValue: a(v),
                    "onUpdate:modelValue": l[2] || (l[2] = function(t) {
                      return p(v) ? v.value = t : null;
                    })
                  }, {
                    item: e(function(t) {
                      var s = t.props, _ = t.item;
                      return [A(q, AA(eA(s)), {
                        prepend: e(function() {
                          return [A(tA, {
                            src: _.raw.icon,
                            width: "11",
                            height: "11",
                            class: "mr-1"
                          }, null, 8, ["src"])];
                        }),
                        _: 2
                      }, 1040)];
                    }),
                    selection: e(function(t) {
                      var s = t.item;
                      return [A(q, AA(eA(s.props)), {
                        prepend: e(function() {
                          return [A(tA, {
                            src: s.raw.icon,
                            width: "11",
                            height: "11",
                            class: "mr-1"
                          }, null, 8, ["src"])];
                        }),
                        _: 2
                      }, 1040)];
                    }),
                    _: 1
                  }, 8, ["items", "modelValue"]), A(V, {
                    class: "mt-1"
                  }, {
                    default: e(function() {
                      return [A(n, {
                        cols: "8"
                      }, {
                        default: e(function() {
                          return [A(m, {
                            "key-name": "I",
                            colon: ""
                          }, {
                            default: e(function() {
                              return [i(D(w.t("2275")), 1)];
                            }),
                            _: 1
                          })];
                        }),
                        _: 1
                      }), A(n, {
                        cols: "4"
                      }, {
                        default: e(function() {
                          return [A(j, {
                            modelValue: a(o),
                            "onUpdate:modelValue": l[3] || (l[3] = function(t) {
                              return p(o) ? o.value = t : null;
                            }),
                            modelModifiers: {
                              lazy: !0
                            },
                            type: "number"
                          }, null, 8, ["modelValue"])];
                        }),
                        _: 1
                      })];
                    }),
                    _: 1
                  })];
                }),
                _: 1
              }, 8, ["title"])];
            }),
            _: 1
          })];
        }),
        _: 1
      }), A(V, null, {
        default: e(function() {
          return [A(n, {
            cols: "6"
          }, {
            default: e(function() {
              return [A(F, {
                title: w.t("2276")
              }, {
                default: e(function() {
                  return [A(V, null, {
                    default: e(function() {
                      return [A(n, {
                        cols: "8"
                      }, {
                        default: e(function() {
                          return [A(nA, {
                            modelValue: f.value,
                            "onUpdate:modelValue": l[4] || (l[4] = function(t) {
                              return f.value = t;
                            }),
                            inline: !1
                          }, {
                            default: e(function() {
                              return [A(Y, {
                                value: 0
                              }, {
                                label: e(function() {
                                  return [A(m, {
                                    "key-name": "N"
                                  }, {
                                    default: e(function() {
                                      return [i(D(w.t("1688")), 1)];
                                    }),
                                    _: 1
                                  })];
                                }),
                                _: 1
                              }), A(Y, {
                                value: 1
                              }, {
                                label: e(function() {
                                  return [A(m, {
                                    "key-name": "M"
                                  }, {
                                    default: e(function() {
                                      return [i(D(w.t("2277")), 1)];
                                    }),
                                    _: 1
                                  })];
                                }),
                                _: 1
                              }), A(Y, {
                                value: 2
                              }, {
                                label: e(function() {
                                  return [A(m, {
                                    "key-name": "E"
                                  }, {
                                    default: e(function() {
                                      return [i(D(w.t("173")), 1)];
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
                      }), A(n, {
                        cols: "4"
                      }, {
                        default: e(function() {
                          return [K("div", Ie, [A(j, {
                            modelValue: a(I),
                            "onUpdate:modelValue": l[5] || (l[5] = function(t) {
                              return p(I) ? I.value = t : null;
                            }),
                            type: "number",
                            disabled: f.value !== 1 && f.value !== 2
                          }, null, 8, ["modelValue", "disabled"])])];
                        }),
                        _: 1
                      })];
                    }),
                    _: 1
                  })];
                }),
                _: 1
              }, 8, ["title"])];
            }),
            _: 1
          }), A(n, {
            cols: "6"
          }, {
            default: e(function() {
              return [A(F, {
                title: w.t("2278")
              }, {
                default: e(function() {
                  return [A(nA, {
                    class: "",
                    inline: !1
                  }, {
                    default: e(function() {
                      return [A(Y, {
                        value: "1"
                      }, {
                        label: e(function() {
                          return [A(m, {
                            "key-name": "P"
                          }, {
                            default: e(function() {
                              return [i(D(w.t("2279")), 1)];
                            }),
                            _: 1
                          })];
                        }),
                        _: 1
                      }), A(Y, {
                        value: "2"
                      }, {
                        label: e(function() {
                          return [A(m, {
                            "key-name": "A"
                          }, {
                            default: e(function() {
                              return [i(D(w.t("2280")), 1)];
                            }),
                            _: 1
                          })];
                        }),
                        _: 1
                      }), A(Y, {
                        value: "3"
                      }, {
                        label: e(function() {
                          return [A(m, {
                            "key-name": "O"
                          }, {
                            default: e(function() {
                              return [i(D(w.t("1688")), 1)];
                            }),
                            _: 1
                          })];
                        }),
                        _: 1
                      })];
                    }),
                    _: 1
                  })];
                }),
                _: 1
              }, 8, ["title"])];
            }),
            _: 1
          })];
        }),
        _: 1
      })], 64);
    };
  }
});
var ce = function(c, o) {
  return k(c, o, {
    get: function(I) {
      if (I.isNull())
        return J.getCurrentDatabase().getCurrentlyTextStyleName();
      var C = I.getMcDbTextStyleTableRecord();
      if (C) return C.name;
    },
    set: function(I) {
      return J.getCurrentDatabase().getTextStyleTable().get(I);
    }
  });
};
const Be = /* @__PURE__ */ x({
  __name: "Text",
  setup: function(c) {
    var o = LA(), f = o.initList, I = EA(o), C = I.textStyles, M = ce(uA.DIMTXSTY, "id"), u = BA(U.DIMCLRT, "int"), d = k(H.DIMTXT, "double"), v = k(U.DIMTAD, "int"), w = O(!1), l = k(H.DIMGAP, "double", {
      get: function(b) {
        return w.value = b < 0, Math.abs(b);
      },
      set: function(b) {
        return w.value ? -Math.abs(b) : Math.abs(b);
      }
    }), t = z(U.DIMTOH), s = z(U.DIMTIH), _ = k(U.DIMJUST, "int"), X = O(0);
    return t.value && s.value ? X.value = 0 : !t.value && !s.value ? X.value = 1 : X.value = 2, lA(X, function(Q) {
      Q === 0 ? (t.value = !0, s.value = !0) : Q === 1 ? (t.value = !1, s.value = !1) : (t.value = !1, s.value = !0);
    }), function(Q, b) {
      return G(), aA(DA, null, [A(V, {
        "align-stretch": ""
      }, {
        default: e(function() {
          return [A(n, {
            cols: "12",
            "align-self": "auto"
          }, {
            default: e(function() {
              return [A(F, {
                title: Q.t("2281"),
                class: "h-100"
              }, {
                default: e(function() {
                  return [A(V, null, {
                    default: e(function() {
                      return [A(n, {
                        cols: "6"
                      }, {
                        default: e(function() {
                          return [A(m, {
                            "key-name": "Y",
                            colon: ""
                          }, {
                            default: e(function() {
                              return [i(D(Q.t("230")), 1)];
                            }),
                            _: 1
                          })];
                        }),
                        _: 1
                      }), A(n, {
                        cols: "6"
                      }, {
                        default: e(function() {
                          return [A(P, {
                            class: "",
                            "onUpdate:menu": b[0] || (b[0] = function(T) {
                              return T && a(f)();
                            }),
                            items: a(C),
                            modelValue: a(M),
                            "onUpdate:modelValue": b[1] || (b[1] = function(T) {
                              return p(M) ? M.value = T : null;
                            })
                          }, null, 8, ["items", "modelValue"])];
                        }),
                        _: 1
                      })];
                    }),
                    _: 1
                  }), A(V, null, {
                    default: e(function() {
                      return [A(n, {
                        cols: "6"
                      }, {
                        default: e(function() {
                          return [A(m, {
                            "key-name": "C",
                            colon: ""
                          }, {
                            default: e(function() {
                              return [i(D(Q.t("2282")), 1)];
                            }),
                            _: 1
                          })];
                        }),
                        _: 1
                      }), A(n, {
                        cols: "6"
                      }, {
                        default: e(function() {
                          return [A(IA, {
                            modelValue: a(u),
                            "onUpdate:modelValue": b[2] || (b[2] = function(T) {
                              return p(u) ? u.value = T : null;
                            }),
                            "is-store-color": !1
                          }, null, 8, ["modelValue"])];
                        }),
                        _: 1
                      })];
                    }),
                    _: 1
                  }), A(V, null, {
                    default: e(function() {
                      return [A(n, {
                        cols: "8"
                      }, {
                        default: e(function() {
                          return [A(m, {
                            "key-name": "C",
                            colon: ""
                          }, {
                            default: e(function() {
                              return [i(D(Q.t("2283")), 1)];
                            }),
                            _: 1
                          })];
                        }),
                        _: 1
                      }), A(n, {
                        cols: "4"
                      }, {
                        default: e(function() {
                          return [A(j, {
                            class: "",
                            type: "number",
                            modelValue: a(d),
                            "onUpdate:modelValue": b[3] || (b[3] = function(T) {
                              return p(d) ? d.value = T : null;
                            }),
                            modelModifiers: {
                              lazy: !0
                            }
                          }, null, 8, ["modelValue"])];
                        }),
                        _: 1
                      })];
                    }),
                    _: 1
                  }), A(Z, {
                    modelValue: w.value,
                    "onUpdate:modelValue": b[4] || (b[4] = function(T) {
                      return w.value = T;
                    })
                  }, {
                    label: e(function() {
                      return [A(m, {
                        "key-name": "F"
                      }, {
                        default: e(function() {
                          return [i(D(Q.t("2284")), 1)];
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
          })];
        }),
        _: 1
      }), A(V, {
        "align-stretch": ""
      }, {
        default: e(function() {
          return [A(n, {
            cols: "6"
          }, {
            default: e(function() {
              return [A(F, {
                title: Q.t("2230")
              }, {
                default: e(function() {
                  return [A(V, null, {
                    default: e(function() {
                      return [A(n, {
                        cols: "6"
                      }, {
                        default: e(function() {
                          return [A(m, {
                            "key-name": "V",
                            colon: ""
                          }, {
                            default: e(function() {
                              return [i(D(Q.t("1613")), 1)];
                            }),
                            _: 1
                          })];
                        }),
                        _: 1
                      }), A(n, {
                        cols: "6"
                      }, {
                        default: e(function() {
                          return [A(P, {
                            modelValue: a(v),
                            "onUpdate:modelValue": b[5] || (b[5] = function(T) {
                              return p(v) ? v.value = T : null;
                            }),
                            items: [{
                              title: Q.t("1816"),
                              value: 0
                            }, {
                              title: Q.t("2285"),
                              value: 1
                            }, {
                              title: Q.t("2286"),
                              value: 2
                            }, {
                              title: "JIS",
                              value: 3
                            }]
                          }, null, 8, ["modelValue", "items"])];
                        }),
                        _: 1
                      })];
                    }),
                    _: 1
                  }), A(V, null, {
                    default: e(function() {
                      return [A(n, {
                        cols: "6"
                      }, {
                        default: e(function() {
                          return [A(m, {
                            "key-name": "C",
                            colon: ""
                          }, {
                            default: e(function() {
                              return [i(D(Q.t("1612")) + "Z", 1)];
                            }),
                            _: 1
                          })];
                        }),
                        _: 1
                      }), A(n, {
                        cols: "6"
                      }, {
                        default: e(function() {
                          return [A(P, {
                            modelValue: a(_),
                            "onUpdate:modelValue": b[6] || (b[6] = function(T) {
                              return p(_) ? _.value = T : null;
                            }),
                            class: "",
                            items: [{
                              title: Q.t("1816"),
                              value: 0
                            }, {
                              title: Q.t("2287"),
                              value: 1
                            }, {
                              title: Q.t("2288"),
                              value: 2
                            }, {
                              title: Q.t("2289"),
                              value: 3
                            }, {
                              title: Q.t("2290"),
                              value: 4
                            }]
                          }, null, 8, ["modelValue", "items"])];
                        }),
                        _: 1
                      })];
                    }),
                    _: 1
                  }), A(V, null, {
                    default: e(function() {
                      return [A(n, {
                        cols: "8"
                      }, {
                        default: e(function() {
                          return [A(m, {
                            "key-name": "O",
                            colon: ""
                          }, {
                            default: e(function() {
                              return [i(D(Q.t("2291")), 1)];
                            }),
                            _: 1
                          })];
                        }),
                        _: 1
                      }), A(n, {
                        cols: "4"
                      }, {
                        default: e(function() {
                          return [A(j, {
                            modelValue: a(l),
                            "onUpdate:modelValue": b[7] || (b[7] = function(T) {
                              return p(l) ? l.value = T : null;
                            }),
                            modelModifiers: {
                              lazy: !0
                            },
                            type: "number"
                          }, null, 8, ["modelValue"])];
                        }),
                        _: 1
                      })];
                    }),
                    _: 1
                  })];
                }),
                _: 1
              }, 8, ["title"])];
            }),
            _: 1
          }), A(n, {
            cols: "6",
            "align-self": "auto"
          }, {
            default: e(function() {
              return [A(F, {
                title: Q.t("2292"),
                class: "h-100"
              }, {
                default: e(function() {
                  return [A(nA, {
                    modelValue: X.value,
                    "onUpdate:modelValue": b[8] || (b[8] = function(T) {
                      return X.value = T;
                    }),
                    inline: !1
                  }, {
                    default: e(function() {
                      return [A(Y, {
                        value: 0,
                        label: Q.t("1612")
                      }, null, 8, ["label"]), A(Y, {
                        value: 1,
                        label: Q.t("2293")
                      }, null, 8, ["label"]), A(Y, {
                        value: 2,
                        label: "ISO" + Q.t("2294")
                      }, null, 8, ["label"])];
                    }),
                    _: 1
                  }, 8, ["modelValue"])];
                }),
                _: 1
              }, 8, ["title"])];
            }),
            _: 1
          })];
        }),
        _: 1
      })], 64);
    };
  }
});
var Ee = {
  class: "h-100 d-flex flex-column align-stretch justify-space-between"
}, Qe = {
  class: "w-75"
}, pe = {
  class: ""
};
const be = /* @__PURE__ */ x({
  __name: "Adjust",
  setup: function(c) {
    var o = k(H.DIMSCALE, "double"), f = O(0);
    o.value === 0 ? f.value = 0 : f.value = 1, lA(f, function(l) {
      l === 0 ? o.value = 0 : o.value = 1;
    });
    var I = z(U.DIMTIX), C = k(U.DIMATFIT, "int"), M = O(0);
    I.value && (C.value = 4), C.value === 0 ? M.value = 3 : C.value === 3 ? M.value = 0 : M.value = C.value, lA(M, function(l) {
      var t = !1;
      l === 4 ? (t = !0, C.value = 4) : l === 3 ? C.value = 0 : l === 0 ? C.value = 3 : C.value = l, I.value = t;
    });
    var u = k(U.DIMTMOVE, "int"), d = z(U.DIMUPT), v = z(U.DIMTOFL), w = z(U.DIMSOXD);
    return function(l, t) {
      return G(), sA(V, {
        "align-stretch": ""
      }, {
        default: e(function() {
          return [A(n, {
            cols: "6",
            "align-self": "auto"
          }, {
            default: e(function() {
              return [K("div", Ee, [A(F, {
                title: l.t("2222")
              }, {
                default: e(function() {
                  return [K("p", Qe, D(l.t("2223")) + ": ", 1), A(nA, {
                    modelValue: M.value,
                    "onUpdate:modelValue": t[0] || (t[0] = function(s) {
                      return M.value = s;
                    }),
                    inline: !1
                  }, {
                    default: e(function() {
                      return [A(Y, {
                        value: 0,
                        label: l.t("2224") + "(" + l.t("2225") + ")"
                      }, null, 8, ["label"]), A(Y, {
                        value: 1,
                        label: l.t("2226")
                      }, null, 8, ["label"]), A(Y, {
                        value: 2,
                        label: l.t("174")
                      }, null, 8, ["label"]), A(Y, {
                        value: 3,
                        label: l.t("2227")
                      }, null, 8, ["label"]), A(Y, {
                        value: 4,
                        label: l.t("2228")
                      }, null, 8, ["label"])];
                    }),
                    _: 1
                  }, 8, ["modelValue"]), A(Z, {
                    modelValue: a(w),
                    "onUpdate:modelValue": t[1] || (t[1] = function(s) {
                      return p(w) ? w.value = s : null;
                    }),
                    label: l.t("2229")
                  }, null, 8, ["modelValue", "label"])];
                }),
                _: 1
              }, 8, ["title"]), A(F, {
                title: l.t("2230")
              }, {
                default: e(function() {
                  return [K("p", pe, D(l.t("2231")) + ":", 1), A(nA, {
                    modelValue: a(u),
                    "onUpdate:modelValue": t[2] || (t[2] = function(s) {
                      return p(u) ? u.value = s : null;
                    }),
                    inline: !1
                  }, {
                    default: e(function() {
                      return [A(Y, {
                        value: 0,
                        label: l.t("2224") + "(" + l.t("2225") + ")"
                      }, null, 8, ["label"]), A(Y, {
                        value: 1,
                        label: l.t("2226")
                      }, null, 8, ["label"]), A(Y, {
                        value: 2,
                        label: l.t("174")
                      }, null, 8, ["label"])];
                    }),
                    _: 1
                  }, 8, ["modelValue"])];
                }),
                _: 1
              }, 8, ["title"])])];
            }),
            _: 1
          }), A(n, {
            cols: "6",
            "align-self": "start"
          }, {
            default: e(function() {
              return [A(F, {
                title: l.t("2232")
              }, {
                default: e(function() {
                  return [A(V, null, {
                    default: e(function() {
                      return [A(n, {
                        cols: "8"
                      }, {
                        default: e(function() {
                          return [A(nA, {
                            modelValue: f.value,
                            "onUpdate:modelValue": t[3] || (t[3] = function(s) {
                              return f.value = s;
                            }),
                            inline: !1
                          }, {
                            default: e(function() {
                              return [A(Y, {
                                value: 0,
                                label: l.t("2233")
                              }, null, 8, ["label"]), A(Y, {
                                value: 1
                              }, {
                                label: e(function() {
                                  return [A(m, {
                                    "key-name": "S",
                                    colon: ""
                                  }, {
                                    default: e(function() {
                                      return [i(D(l.t("2234")), 1)];
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
                      }), A(n, {
                        cols: "4",
                        "align-self": "end"
                      }, {
                        default: e(function() {
                          return [A(j, {
                            class: "",
                            type: "number",
                            disabled: f.value === 0,
                            modelValue: a(o),
                            "onUpdate:modelValue": t[4] || (t[4] = function(s) {
                              return p(o) ? o.value = s : null;
                            }),
                            modelModifiers: {
                              lazy: !0
                            }
                          }, null, 8, ["disabled", "modelValue"])];
                        }),
                        _: 1
                      })];
                    }),
                    _: 1
                  })];
                }),
                _: 1
              }, 8, ["title"]), A(F, {
                title: l.t("2235")
              }, {
                default: e(function() {
                  return [A(Z, {
                    modelValue: a(d),
                    "onUpdate:modelValue": t[5] || (t[5] = function(s) {
                      return p(d) ? d.value = s : null;
                    })
                  }, {
                    label: e(function() {
                      return [A(m, {
                        "key-name": "P"
                      }, {
                        default: e(function() {
                          return [i(D(l.t("2236")), 1)];
                        }),
                        _: 1
                      })];
                    }),
                    _: 1
                  }, 8, ["modelValue"]), A(Z, {
                    modelValue: a(v),
                    "onUpdate:modelValue": t[6] || (t[6] = function(s) {
                      return p(v) ? v.value = s : null;
                    })
                  }, {
                    label: e(function() {
                      return [A(m, {
                        "key-name": "D"
                      }, {
                        default: e(function() {
                          return [i(D(l.t("2237")), 1)];
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
          })];
        }),
        _: 1
      });
    };
  }
}), Ve = /* @__PURE__ */ x({
  __name: "MainUnit",
  setup: function(c) {
    var o = k(H.DIMLFAC, "double"), f = O(!1);
    o.value < 0 ? f.value = !0 : f.value = !1;
    var I = k(H.DIMRND, "double"), C = k(WA.DIMPOST, "string"), M = C.value.indexOf("<>"), u = O(""), d = O("");
    M === -1 ? u.value = C.value : (u.value = C.value.substring(0, M), d.value = C.value.substring(M + 2)), lA([u, d], function(B) {
      var E = QA(B, 2), L = E[0], MA = E[1];
      MA === "" ? C.value = L : C.value = L + "<>" + MA;
    });
    var v = k(U.DIMZIN, "int"), w = O(!1), l = O(!1);
    v.value & 4 ? w.value = !0 : w.value = !1;
    var t = k(U.DIMAUNIT, "int"), s = k(U.DIMADEC, "int"), _ = /* @__PURE__ */ new Map();
    _.set(0, ["0", "0.0", "0.00", "0.000", "0.0000", "0.00000", "0.000000", "0.0000000", "0.00000000"]), _.set(1, ["0d", "0d0'", "0d00'", "0d00'0", "0d00'00", "0d00'00.0", "0d00'00.00", "0d00'00.000", "0d00'00.0000"]), _.set(2, ["0g", "0.0g", "0.00g", "0.000g", "0.0000g", "0.00000g", "0.000000g", "0.0000000g", "0.00000000g"]), _.set(3, ["0r", "0.0r", "0.00r", "0.000r", "0.0000r", "0.00000r", "0.000000r", "0.0000000r", "0.00000000r"]);
    var X = cA(function() {
      return (_.get(t.value) || []).map(function(B, E) {
        return {
          title: B,
          value: E
        };
      });
    }), Q = k(U.DIMAZIN, "int"), b = O(Q.value & 1), T = O(Q.value & 2);
    lA([b, T], function(B) {
      var E = QA(B, 2), L = E[0], MA = E[1];
      Q.value = L ? Q.value | 1 : Q.value & -2, Q.value = MA ? Q.value | 2 : Q.value & -3;
    });
    var $ = k(U.DIMLUNIT, "int"), W = k(U.DIMDEC, "int"), S = /* @__PURE__ */ new Map(), g = ["0", "0.0", "0.00", "0.000", "0.0000", "0.00000", "0.000000", "0.0000000", "0.00000000"];
    S.set(1, ["0E+1", "0.0E+1", "0.00E+1", "0.000E+1", "0.0000E+1", "0.00000E+1", "0.000000E+1", "0.0000000E+1", "0.00000000E+1"]), S.set(2, g), S.set(3, [`0'-0"`, `0'-0.0"`, `0'-0.00"`, `0'-0.000"`, `0'-0.0000"`, `0'-0.00000"`, `0'-0.000000"`, `0'-0.0000000"`, `0'-0.00000000"`]), S.set(4, ["0", "0 1/2", "0 1/8", "0 1/16", "0 1/32", "0 1/64", "0 1/128", "0 1/256"]), S.set(5, [`0'-0"`, `0'-0 1/2"`, `0'-0 1/8"`, `0'-0 1/16"`, `0'-0 1/32"`, `0'-0 1/64"`, `0'-0 1/128"`, `0'-0 1/256"`]), S.set(6, g);
    var r = cA(function() {
      return (S.get($.value) || []).map(function(B, E) {
        return {
          title: B,
          value: E
        };
      });
    }), N = k(U.DIMDSEP, "int", {
      get: function(E) {
        return String.fromCharCode(E) === "," ? 0 : String.fromCharCode(E) === "." ? 1 : 2;
      },
      set: function(E) {
        return E === 0 ? 44 : E === 1 ? 46 : E;
      }
    });
    return function(B, E) {
      return G(), sA(V, {
        "align-stretch": ""
      }, {
        default: e(function() {
          return [A(n, {
            cols: "6",
            "align-self": "auto"
          }, {
            default: e(function() {
              return [A(F, {
                title: B.t("2222"),
                class: "h-100"
              }, {
                default: e(function() {
                  return [A(V, null, {
                    default: e(function() {
                      return [A(n, {
                        cols: "6"
                      }, {
                        default: e(function() {
                          return [A(m, {
                            colon: "",
                            "key-name": "U"
                          }, {
                            default: e(function() {
                              return [i(D(B.t("2246")), 1)];
                            }),
                            _: 1
                          })];
                        }),
                        _: 1
                      }), A(n, {
                        cols: "6"
                      }, {
                        default: e(function() {
                          return [A(P, {
                            modelValue: a($),
                            "onUpdate:modelValue": E[0] || (E[0] = function(L) {
                              return p($) ? $.value = L : null;
                            }),
                            items: [{
                              title: B.t("2247"),
                              value: 1
                            }, {
                              title: B.t("2248"),
                              value: 2
                            }, {
                              title: B.t("2249"),
                              value: 3
                            }, {
                              title: B.t("2250"),
                              value: 4
                            }, {
                              title: B.t("2251"),
                              value: 5
                            }, {
                              title: "Microsoft Windows " + B.t("2252"),
                              value: 6
                            }]
                          }, null, 8, ["modelValue", "items"])];
                        }),
                        _: 1
                      })];
                    }),
                    _: 1
                  }), A(V, null, {
                    default: e(function() {
                      return [A(n, {
                        cols: "6"
                      }, {
                        default: e(function() {
                          return [A(m, {
                            colon: "",
                            "key-name": "P"
                          }, {
                            default: e(function() {
                              return [i(D(B.t("2253")), 1)];
                            }),
                            _: 1
                          })];
                        }),
                        _: 1
                      }), A(n, {
                        cols: "6"
                      }, {
                        default: e(function() {
                          return [A(P, {
                            modelValue: a(W),
                            "onUpdate:modelValue": E[1] || (E[1] = function(L) {
                              return p(W) ? W.value = L : null;
                            }),
                            items: r.value
                          }, null, 8, ["modelValue", "items"])];
                        }),
                        _: 1
                      })];
                    }),
                    _: 1
                  }), A(V, null, {
                    default: e(function() {
                      return [A(n, {
                        cols: "8"
                      }, {
                        default: e(function() {
                          return [A(m, {
                            colon: "",
                            "key-name": "C"
                          }, {
                            default: e(function() {
                              return [i(D(B.t("2254")), 1)];
                            }),
                            _: 1
                          })];
                        }),
                        _: 1
                      }), A(n, {
                        cols: "4"
                      }, {
                        default: e(function() {
                          return [A(P, {
                            class: "",
                            modelValue: a(N),
                            "onUpdate:modelValue": E[2] || (E[2] = function(L) {
                              return p(N) ? N.value = L : null;
                            }),
                            items: [{
                              title: B.t("2255"),
                              value: 0
                            }, {
                              title: B.t("2256"),
                              value: 1
                            }, {
                              title: B.t("2257"),
                              value: 2
                            }]
                          }, null, 8, ["modelValue", "items"])];
                        }),
                        _: 1
                      })];
                    }),
                    _: 1
                  }), A(V, null, {
                    default: e(function() {
                      return [A(n, {
                        cols: "8"
                      }, {
                        default: e(function() {
                          return [A(m, {
                            colon: "",
                            "key-name": "R"
                          }, {
                            default: e(function() {
                              return [i(D(B.t("2258")), 1)];
                            }),
                            _: 1
                          })];
                        }),
                        _: 1
                      }), A(n, {
                        cols: "4"
                      }, {
                        default: e(function() {
                          return [A(j, {
                            modelValue: a(I),
                            "onUpdate:modelValue": E[3] || (E[3] = function(L) {
                              return p(I) ? I.value = L : null;
                            }),
                            type: "number"
                          }, null, 8, ["modelValue"])];
                        }),
                        _: 1
                      })];
                    }),
                    _: 1
                  }), A(V, null, {
                    default: e(function() {
                      return [A(n, {
                        cols: "6"
                      }, {
                        default: e(function() {
                          return [A(m, {
                            colon: "",
                            "key-name": "X"
                          }, {
                            default: e(function() {
                              return [i(D(B.t("2259")), 1)];
                            }),
                            _: 1
                          })];
                        }),
                        _: 1
                      }), A(n, {
                        cols: "6"
                      }, {
                        default: e(function() {
                          return [A(j, {
                            class: "",
                            modelValue: u.value,
                            "onUpdate:modelValue": E[4] || (E[4] = function(L) {
                              return u.value = L;
                            })
                          }, null, 8, ["modelValue"])];
                        }),
                        _: 1
                      })];
                    }),
                    _: 1
                  }), A(V, null, {
                    default: e(function() {
                      return [A(n, {
                        cols: "6"
                      }, {
                        default: e(function() {
                          return [A(m, {
                            colon: "",
                            "key-name": "S"
                          }, {
                            default: e(function() {
                              return [i(D(B.t("2260")), 1)];
                            }),
                            _: 1
                          })];
                        }),
                        _: 1
                      }), A(n, {
                        cols: "6"
                      }, {
                        default: e(function() {
                          return [A(j, {
                            class: "",
                            modelValue: d.value,
                            "onUpdate:modelValue": E[5] || (E[5] = function(L) {
                              return d.value = L;
                            })
                          }, null, 8, ["modelValue"])];
                        }),
                        _: 1
                      })];
                    }),
                    _: 1
                  }), A(F, {
                    title: B.t("2261")
                  }, {
                    default: e(function() {
                      return [A(V, null, {
                        default: e(function() {
                          return [A(n, {
                            cols: "8"
                          }, {
                            default: e(function() {
                              return [A(m, {
                                colon: "",
                                "key-name": "E"
                              }, {
                                default: e(function() {
                                  return [i(D(B.t("2262")), 1)];
                                }),
                                _: 1
                              })];
                            }),
                            _: 1
                          }), A(n, {
                            cols: "4"
                          }, {
                            default: e(function() {
                              return [A(j, {
                                type: "number",
                                modelValue: a(o),
                                "onUpdate:modelValue": E[6] || (E[6] = function(L) {
                                  return p(o) ? o.value = L : null;
                                })
                              }, null, 8, ["modelValue"])];
                            }),
                            _: 1
                          })];
                        }),
                        _: 1
                      }), A(Z, {
                        modelValue: f.value,
                        "onUpdate:modelValue": E[7] || (E[7] = function(L) {
                          return f.value = L;
                        }),
                        label: B.t("2263")
                      }, null, 8, ["modelValue", "label"])];
                    }),
                    _: 1
                  }, 8, ["title"]), A(F, {
                    title: B.t("2264")
                  }, {
                    default: e(function() {
                      return [A(Z, {
                        modelValue: w.value,
                        "onUpdate:modelValue": E[8] || (E[8] = function(L) {
                          return w.value = L;
                        })
                      }, {
                        label: e(function() {
                          return [A(m, {
                            "key-name": "L"
                          }, {
                            default: e(function() {
                              return [i(D(B.t("2265")), 1)];
                            }),
                            _: 1
                          })];
                        }),
                        _: 1
                      }, 8, ["modelValue"]), A(Z, {
                        modelValue: l.value,
                        "onUpdate:modelValue": E[9] || (E[9] = function(L) {
                          return l.value = L;
                        })
                      }, {
                        label: e(function() {
                          return [A(m, {
                            "key-name": "T"
                          }, {
                            default: e(function() {
                              return [i(D(B.t("2266")), 1)];
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
              }, 8, ["title"])];
            }),
            _: 1
          }), A(n, {
            cols: "6",
            "align-self": "start"
          }, {
            default: e(function() {
              return [A(F, {
                title: B.t("239")
              }, {
                default: e(function() {
                  return [A(V, null, {
                    default: e(function() {
                      return [A(n, {
                        cols: "5"
                      }, {
                        default: e(function() {
                          return [A(m, {
                            colon: "",
                            "key-name": "A"
                          }, {
                            default: e(function() {
                              return [i(D(B.t("2246")), 1)];
                            }),
                            _: 1
                          })];
                        }),
                        _: 1
                      }), A(n, {
                        cols: "7"
                      }, {
                        default: e(function() {
                          return [A(P, {
                            modelValue: a(t),
                            "onUpdate:modelValue": E[10] || (E[10] = function(L) {
                              return p(t) ? t.value = L : null;
                            }),
                            items: [{
                              title: B.t("2268"),
                              value: 0
                            }, {
                              title: B.t("2269"),
                              value: 1
                            }, {
                              title: B.t("2270"),
                              value: 2
                            }, {
                              title: B.t("2271"),
                              value: 3
                            }]
                          }, null, 8, ["modelValue", "items"])];
                        }),
                        _: 1
                      })];
                    }),
                    _: 1
                  }), A(V, null, {
                    default: e(function() {
                      return [A(n, {
                        cols: "5"
                      }, {
                        default: e(function() {
                          return [A(m, {
                            colon: "",
                            "key-name": "D"
                          }, {
                            default: e(function() {
                              return [i(D(B.t("2253")), 1)];
                            }),
                            _: 1
                          })];
                        }),
                        _: 1
                      }), A(n, {
                        cols: "7"
                      }, {
                        default: e(function() {
                          return [A(P, {
                            items: X.value,
                            modelValue: a(s),
                            "onUpdate:modelValue": E[11] || (E[11] = function(L) {
                              return p(s) ? s.value = L : null;
                            })
                          }, null, 8, ["items", "modelValue"])];
                        }),
                        _: 1
                      })];
                    }),
                    _: 1
                  }), A(F, {
                    title: B.t("2264")
                  }, {
                    default: e(function() {
                      return [A(Z, {
                        modelValue: b.value,
                        "onUpdate:modelValue": E[12] || (E[12] = function(L) {
                          return b.value = L;
                        })
                      }, {
                        label: e(function() {
                          return [A(m, {
                            "key-name": "L"
                          }, {
                            default: e(function() {
                              return [i(D(B.t("2265")), 1)];
                            }),
                            _: 1
                          })];
                        }),
                        _: 1
                      }, 8, ["modelValue"]), A(Z, {
                        modelValue: T.value,
                        "onUpdate:modelValue": E[13] || (E[13] = function(L) {
                          return T.value = L;
                        })
                      }, {
                        label: e(function() {
                          return [A(m, {
                            "key-name": "T"
                          }, {
                            default: e(function() {
                              return [i(D(B.t("2266")), 1)];
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
              }, 8, ["title"])];
            }),
            _: 1
          })];
        }),
        _: 1
      });
    };
  }
});
var wA = O(""), ye = function() {
  return {
    tab: "线",
    component: function() {
      return oA(qA);
    }
  };
}, Se = function() {
  return {
    tab: "符号与箭头",
    component: function() {
      return oA(Ce);
    }
  };
}, Te = function() {
  return {
    tab: "文字",
    component: function() {
      return oA(Be);
    }
  };
}, Le = function() {
  return {
    tab: "调整",
    component: function() {
      return oA(be);
    }
  };
}, ke = function() {
  return {
    tab: "主单位",
    component: function() {
      return oA(Ve);
    }
  };
}, VA = bA(!1);
VA.onReveal(function(y) {
  var c = y.dimStyleName;
  wA.value = c;
});
var yA = function() {
  return {
    dialog: VA,
    styleName: wA
  };
}, _e = {
  class: "px-3"
};
const Ue = /* @__PURE__ */ x({
  __name: "index",
  setup: function(c) {
    var o = O(0), f = yA(), I = f.dialog, C = f.styleName, M = I.isShow, u = O([ye(), Se(), Te(), Le(), ke()]), d = [{
      name: "关闭",
      fun: function() {
        return I.showDialog(!1);
      }
    }];
    return function(v, w) {
      return G(), sA(CA, {
        title: v.t("2238") + ":" + a(C),
        modelValue: a(M),
        "onUpdate:modelValue": w[1] || (w[1] = function(l) {
          return p(M) ? M.value = l : null;
        }),
        "max-width": "680",
        "footer-btn-list": d
      }, {
        default: e(function() {
          return [K("div", _e, [A(kA, {
            items: u.value,
            modelValue: o.value,
            "onUpdate:modelValue": w[0] || (w[0] = function(l) {
              return o.value = l;
            }),
            height: 400,
            isTabMinWidthAuto: ""
          }, null, 8, ["items", "modelValue"])])];
        }),
        _: 1
      }, 8, ["title", "modelValue"]);
    };
  }
});
var Ne = {
  class: "px-3 pt-2"
}, Re = {
  class: "mt-3"
}, Oe = {
  class: "d-flex flex-column justify-center algin-center w-100 h-100"
};
const Ye = /* @__PURE__ */ x({
  __name: "index",
  setup: function(c) {
    var o = yA(), f = o.dialog, I = bA(!1), C = I.isShow, M = I.showDialog, u = zA(iA), d = u.items, v = u.index, w = u.setIndex, l = u.currentItemText, t = u.setCurrentIndex, s = u.addDimStyle, _ = u.deleteDimStyle, X = HA(), Q = X.selectItems, b = X.selectCurrentItem, T = O(""), $ = O(d.value[0]), W = function(r) {
      s(T.value, r) && (M(!1), T.value = "");
    }, S = [{
      name: "关闭",
      fun: function() {
        return _A(!1);
      }
    }];
    return function(g, r) {
      return G(), aA(DA, null, [A(CA, {
        title: g.t("1971"),
        modelValue: a(iA),
        "onUpdate:modelValue": r[5] || (r[5] = function(N) {
          return p(iA) ? iA.value = N : null;
        }),
        "max-width": "400",
        footerBtnList: S
      }, {
        default: e(function() {
          return [K("div", Ne, [K("p", null, D(g.t("1972") + ":" + a(l)), 1), A(V, {
            class: "mt-1"
          }, {
            default: e(function() {
              return [A(n, {
                cols: 6,
                "align-self": "start"
              }, {
                default: e(function() {
                  return [K("p", null, [i(D(g.t("1624")) + "(", 1), r[11] || (r[11] = K("span", {
                    class: "text-decoration-underline"
                  }, "S", -1)), r[12] || (r[12] = i("):", -1))]), A(KA, {
                    density: "compact",
                    class: "list-border overflow-y py-0",
                    height: "260"
                  }, {
                    default: e(function() {
                      return [(G(!0), aA(DA, null, RA(a(Q).indexOf(a(b)) === 0 ? a(d) : a(d).filter(function(N) {
                        return N.name === a(l);
                      }), function(N, B) {
                        return G(), sA(q, {
                          key: B + N.name,
                          onClick: function(L) {
                            return a(w)(B);
                          },
                          class: OA([a(v) === B ? "bg-light-blue-darken-2" : "", "pa-0 list-item"]),
                          value: N,
                          "min-height": "24",
                          height: "24"
                        }, {
                          default: e(function() {
                            return [A($A, {
                              textContent: D(N.name)
                            }, null, 8, ["textContent"])];
                          }),
                          _: 2
                        }, 1032, ["onClick", "class", "value"]);
                      }), 128))];
                    }),
                    _: 1
                  }), K("p", Re, [i(D(g.t("1973")) + "(", 1), r[13] || (r[13] = K("span", {
                    class: "text-decoration-underline"
                  }, "L", -1)), r[14] || (r[14] = i("):", -1))]), A(P, {
                    class: "",
                    modelValue: a(b),
                    "onUpdate:modelValue": r[0] || (r[0] = function(N) {
                      return p(b) ? b.value = N : null;
                    }),
                    items: a(Q)
                  }, null, 8, ["modelValue", "items"])];
                }),
                _: 1
              }), A(n, {
                cols: 6,
                "align-self": "start"
              }, {
                default: e(function() {
                  return [A(h, {
                    class: "mt-5 w-100",
                    onClick: r[1] || (r[1] = function(N) {
                      return a(t)();
                    })
                  }, {
                    default: e(function() {
                      return [A(m, {
                        "key-name": "U"
                      }, {
                        default: e(function() {
                          return [i(D(g.t("213")), 1)];
                        }),
                        _: 1
                      })];
                    }),
                    _: 1
                  }), A(h, {
                    class: "mt-2 w-100",
                    onClick: r[2] || (r[2] = function() {
                      return a(M)(!0);
                    })
                  }, {
                    default: e(function() {
                      return [A(m, {
                        "key-name": "N"
                      }, {
                        default: e(function() {
                          return [i(D(g.t("181")), 1)];
                        }),
                        _: 1
                      }), A(mA, {
                        icon: "class:iconfont more"
                      })];
                    }),
                    _: 1
                  }), A(h, {
                    class: "mt-2 w-100",
                    onClick: r[3] || (r[3] = function(N) {
                      return a(f).showDialog(!0, {
                        dimStyleName: a(d)[a(v)].name
                      });
                    })
                  }, {
                    default: e(function() {
                      return [A(m, {
                        "key-name": "M"
                      }, {
                        default: e(function() {
                          return [i(D(g.t("214")), 1)];
                        }),
                        _: 1
                      }), A(mA, {
                        icon: "class:iconfont more"
                      })];
                    }),
                    _: 1
                  }), A(h, {
                    class: "mt-2 w-100",
                    onClick: r[4] || (r[4] = function(N) {
                      return a(_)();
                    }),
                    disabled: a(l) === a(d)[a(v)].name
                  }, {
                    default: e(function() {
                      return [A(m, {
                        "key-name": "D"
                      }, {
                        default: e(function() {
                          return [i(D(g.t("205")), 1)];
                        }),
                        _: 1
                      }), A(mA, {
                        icon: "class:iconfont more"
                      })];
                    }),
                    _: 1
                  }, 8, ["disabled"])];
                }),
                _: 1
              })];
            }),
            _: 1
          })])];
        }),
        _: 1
      }, 8, ["title", "modelValue"]), A(CA, {
        title: g.t("1976"),
        "max-width": "300",
        modelValue: a(C),
        "onUpdate:modelValue": r[10] || (r[10] = function(N) {
          return p(C) ? C.value = N : null;
        })
      }, {
        default: e(function() {
          return [A(V, {
            class: "px-3",
            align: "start"
          }, {
            default: e(function() {
              return [A(n, {
                cols: "9"
              }, {
                default: e(function() {
                  return [K("p", null, [i(D(g.t("1977")) + "(", 1), r[15] || (r[15] = K("span", {
                    class: "text-decoration-underline"
                  }, "N", -1)), r[16] || (r[16] = i(")", -1))]), A(j, {
                    class: "mt-2",
                    modelValue: T.value,
                    "onUpdate:modelValue": r[6] || (r[6] = function(N) {
                      return T.value = N;
                    })
                  }, null, 8, ["modelValue"]), K("p", null, [i(D(g.t("1978")) + "(", 1), r[17] || (r[17] = K("span", {
                    class: "text-decoration-underline"
                  }, "N", -1)), r[18] || (r[18] = i(")", -1))]), A(P, {
                    class: "",
                    modelValue: $.value,
                    "onUpdate:modelValue": r[7] || (r[7] = function(N) {
                      return $.value = N;
                    }),
                    items: a(d),
                    "item-title": "name",
                    "item-value": "name"
                  }, null, 8, ["modelValue", "items"])];
                }),
                _: 1
              }), A(n, {
                cols: "3",
                "justify-center": "",
                "align-self": "center"
              }, {
                default: e(function() {
                  return [K("div", Oe, [A(h, {
                    primary: "",
                    class: "mt-6 w-100",
                    onClick: r[8] || (r[8] = function(N) {
                      return W($.value.name);
                    })
                  }, {
                    default: e(function() {
                      return [i(D(g.t("215")), 1)];
                    }),
                    _: 1
                  }), A(h, {
                    class: "mt-6 w-100",
                    onClick: r[9] || (r[9] = function(N) {
                      return a(M)(!1);
                    })
                  }, {
                    default: e(function() {
                      return [i(D(g.t("201")), 1)];
                    }),
                    _: 1
                  })])];
                }),
                _: 1
              })];
            }),
            _: 1
          })];
        }),
        _: 1
      }, 8, ["title", "modelValue"]), A(Ue)], 64);
    };
  }
}), je = /* @__PURE__ */ UA(Ye, [["__scopeId", "data-v-b63296fc"]]);
export {
  je as default
};
