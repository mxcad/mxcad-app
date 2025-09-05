import { br as xe, bs as Te, bt as Oe, l as ne, t as _, x as E, aK as Me, u as Ce, bg as ke, bu as ze, aY as Ae, b3 as we, d as De, aI as He, $ as Le, X as Pe, R as je } from "./lib.js";
import { h as Fe, f as G, g as ye, j as Ne, d as Ue, m as le, o as ee, w as $, l as se, a as K, c as Ee, Q as J, G as k, q as te, t as re, F as Be, b as Ve, n as _e } from "./vue.js";
import { u as $e, E as Ke } from "./@tiptap/vue-3.js";
import { S as Ge } from "./@tiptap/starter-kit.js";
import { E as W, M as Ie, C as Re } from "./@tiptap/extension-color.js";
import { T as We } from "./@tiptap/extension-text-style.js";
import { F as Je } from "./@tiptap/extension-font-family.js";
import { P as Ye, b as Xe, X as qe, Y as Qe } from "./@tiptap/pm.js";
import { a as Se, C as B } from "./mxcad.js";
import { s as Ze } from "./pinia.js";
import { C as et } from "./color.js";
import { u as tt } from "./useMultilineTextDialog.js";
import { c as de, v as rt, V as nt, b as it } from "./vuetify.js";
var ot = W.create({
  name: "fontSize",
  addOptions: function() {
    return {
      types: ["textStyle"],
      getStyle: function(e) {
        return "font-size: ".concat(e);
      }
    };
  },
  addGlobalAttributes: function() {
    var r = this;
    return [{
      types: this.options.types,
      attributes: {
        fontSize: {
          default: null,
          parseHTML: function(t) {
            return t.style.fontSize.replace(/['"]+/g, "");
          },
          renderHTML: function(t) {
            return t.fontSize ? {
              style: r.options.getStyle(t.fontSize)
            } : {};
          }
        }
      }
    }];
  },
  addCommands: function() {
    return {
      setFontSize: function(e) {
        return function(t) {
          var o = t.chain;
          return o().setMark("textStyle", {
            fontSize: e
          }).run();
        };
      },
      unsetFontSize: function() {
        return function(e) {
          var t = e.chain;
          return t().setMark("textStyle", {
            fontSize: null
          }).removeEmptyTextStyle().run();
        };
      }
    };
  }
});
W.create({
  name: "textDecoration",
  addOptions: function() {
    return {
      types: ["textStyle"],
      getStyle: function(e) {
        return "text-decoration: ".concat(e);
      }
    };
  },
  addGlobalAttributes: function() {
    var r = this;
    return [{
      types: this.options.types,
      attributes: {
        textDecoration: {
          default: null,
          parseHTML: function(t) {
            return t.style.textDecoration.replace(/['"]+/g, "");
          },
          renderHTML: function(t) {
            return t.textDecoration ? {
              style: r.options.getStyle(t.textDecoration)
            } : {};
          }
        }
      }
    }];
  },
  addCommands: function() {
    return {
      setTextDecoration: function(e) {
        return function(t) {
          var o = t.chain;
          return o().setMark("textStyle", {
            textDecoration: e
          }).run();
        };
      },
      unsetTextDecoration: function() {
        return function(e) {
          var t = e.chain;
          return t().setMark("textStyle", {
            textDecoration: null
          }).removeEmptyTextStyle().run();
        };
      }
    };
  }
});
var at = W.create({
  name: "overline",
  addOptions: function() {
    return {
      types: ["textStyle"]
    };
  },
  addGlobalAttributes: function() {
    return [{
      types: this.options.types,
      attributes: {
        overline: {
          default: !1,
          parseHTML: function(e) {
            return e.style.borderTop.replace(/['"]+/g, "");
          },
          renderHTML: function(e) {
            return e.overline ? {
              style: "border-top: 1px solid currentColor;"
            } : {};
          }
        }
      }
    }];
  },
  addCommands: function() {
    return {
      toggleOverline: function() {
        return function(e) {
          var t = e.chain, o = e.editor;
          return o.isActive("textStyle", {
            overline: !0
          }) ? t().unsetOverline().run() : t().setOverline().run();
        };
      },
      setOverline: function() {
        return function(e) {
          var t = e.chain;
          return t().setMark("textStyle", {
            overline: !0
          }).run();
        };
      },
      unsetOverline: function() {
        return function(e) {
          var t = e.chain;
          return t().setMark("textStyle", {
            overline: !1
          }).removeEmptyTextStyle().run();
        };
      }
    };
  },
  addKeyboardShortcuts: function() {
    var r = this;
    return {
      "Mod-o": function() {
        return r.editor.commands.toggleOverline();
      },
      "Mod-O": function() {
        return r.editor.commands.toggleOverline();
      }
    };
  }
}), ut = W.create({
  name: "underline",
  addOptions: function() {
    return {
      types: ["textStyle"]
    };
  },
  addGlobalAttributes: function() {
    return [{
      types: this.options.types,
      attributes: {
        underline: {
          default: !1,
          parseHTML: function(e) {
            return e.style.borderBottom.replace(/['"]+/g, "");
          },
          renderHTML: function(e) {
            return e.underline ? {
              style: "border-bottom: 1px solid currentColor;"
            } : {};
          }
        }
      }
    }];
  },
  addCommands: function() {
    return {
      toggleUnderline: function() {
        return function(e) {
          var t = e.chain, o = e.editor;
          return o.isActive("textStyle", {
            underline: !0
          }) ? t().unsetUnderline().run() : t().setUnderline().run();
        };
      },
      setUnderline: function() {
        return function(e) {
          var t = e.chain;
          return t().setMark("textStyle", {
            underline: !0
          }).run();
        };
      },
      unsetUnderline: function() {
        return function(e) {
          var t = e.chain;
          return t().setMark("textStyle", {
            underline: !1
          }).removeEmptyTextStyle().run();
        };
      }
    };
  },
  addKeyboardShortcuts: function() {
    var r = this;
    return {
      "Mod-u": function() {
        return r.editor.commands.toggleUnderline();
      },
      "Mod-U": function() {
        return r.editor.commands.toggleUnderline();
      }
    };
  }
}), lt = xe, st = Te, dt = Oe;
lt({ target: "String", proto: !0, forced: dt("strike") }, {
  strike: function() {
    return st(this, "strike", "", "");
  }
});
var ct = W.create({
  name: "Strike",
  addOptions: function() {
    return {
      types: ["textStyle"]
    };
  },
  addGlobalAttributes: function() {
    return [{
      types: this.options.types,
      attributes: {
        strike: {
          default: !1,
          parseHTML: function(e) {
            return e.style.textDecoration.replace(/['"]+/g, "");
          },
          renderHTML: function(e) {
            return e.strike ? {
              style: "text-decoration: 1px line-through currentColor;"
            } : {};
          }
        }
      }
    }];
  },
  addCommands: function() {
    return {
      toggleStrike: function() {
        return function(e) {
          var t = e.chain, o = e.editor;
          return o.isActive("textStyle", {
            strike: !0
          }) ? t().unsetStrike().run() : t().setStrike().run();
        };
      },
      setStrike: function() {
        return function(e) {
          var t = e.chain;
          return t().setMark("textStyle", {
            strike: !0
          }).run();
        };
      },
      unsetStrike: function() {
        return function(e) {
          var t = e.chain;
          return t().setMark("textStyle", {
            strike: !1
          }).removeEmptyTextStyle().run();
        };
      }
    };
  }
});
function ce(i, r) {
  var e = Object.keys(i);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(i);
    r && (t = t.filter(function(o) {
      return Object.getOwnPropertyDescriptor(i, o).enumerable;
    })), e.push.apply(e, t);
  }
  return e;
}
function ft(i) {
  for (var r = 1; r < arguments.length; r++) {
    var e = arguments[r] != null ? arguments[r] : {};
    r % 2 ? ce(Object(e), !0).forEach(function(t) {
      ne(i, t, e[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(e)) : ce(Object(e)).forEach(function(t) {
      Object.defineProperty(i, t, Object.getOwnPropertyDescriptor(e, t));
    });
  }
  return i;
}
var fe = "background-color: #00349e; color: inherit; user-select: none; pointer-events: none;", vt = Ie.create({
  name: "selectedText",
  // 添加默认选项
  addOptions: function() {
    return {
      HTMLAttributes: {
        style: fe
      }
    };
  },
  // 解析HTML
  parseHTML: function() {
    return [{
      tag: "span[data-selected]",
      getAttrs: function(e) {
        return typeof e == "string" ? {} : {
          style: e.getAttribute("style")
        };
      }
    }];
  },
  // 渲染HTML
  renderHTML: function(r) {
    var e = r.HTMLAttributes;
    return ["span", ft({
      "data-selected": "true",
      style: this.options.HTMLAttributes.style
    }, e), 0];
  },
  // 添加命令
  addCommands: function() {
    var r = this;
    return {
      setSelectedText: function(t, o) {
        return function(c) {
          var a = c.tr, y = c.dispatch;
          return y && a.addMark(t, o, r.type.create()), !0;
        };
      },
      unsetSelectedText: function(t, o) {
        return function(c) {
          var a = c.tr, y = c.dispatch;
          return y && a.removeMark(t, o, r.type), !0;
        };
      }
    };
  },
  // 添加插件
  addProseMirrorPlugins: function() {
    var r = {
      from: 0,
      to: 0
    }, e = function(a, y, v) {
      return Qe.inline(v + a, v + y, {
        style: fe,
        class: "selected-text"
      });
    }, t = function(a, y, v, x) {
      if (!a.isText) return null;
      var d = Math.max(v - y, 0), h = Math.min(x - y, a.nodeSize);
      return d < h ? e(d, h, y) : null;
    }, o = document.createElement("style");
    return o.textContent = `
      .ProseMirror ::selection {
        background-color: transparent;
        color: inherit;
      }
    `, document.head.appendChild(o), [new Ye({
      key: new Xe("selectedText"),
      props: {
        decorations: function(a) {
          var y = a.doc, v = a.selection, x = v.empty, d = v.from, h = v.to, l = [];
          return x || (Object.assign(r, {
            from: d,
            to: h
          }), y.nodesBetween(d, h, function(P, H) {
            var S = t(P, H, d, h);
            return S && l.push(S), !0;
          })), qe.create(y, l);
        },
        handleDOMEvents: {
          focus: function(a) {
            return r.from !== r.to && a.dispatch(a.state.tr.removeMark(r.from, r.to, a.state.schema.marks.selectedText)), !1;
          },
          blur: function() {
            return !1;
          }
        }
      }
    })];
  }
});
function ve(i, r) {
  var e = Object.keys(i);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(i);
    r && (t = t.filter(function(o) {
      return Object.getOwnPropertyDescriptor(i, o).enumerable;
    })), e.push.apply(e, t);
  }
  return e;
}
function pt(i) {
  for (var r = 1; r < arguments.length; r++) {
    var e = arguments[r] != null ? arguments[r] : {};
    r % 2 ? ve(Object(e), !0).forEach(function(t) {
      ne(i, t, e[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(e)) : ve(Object(e)).forEach(function(t) {
      Object.defineProperty(i, t, Object.getOwnPropertyDescriptor(e, t));
    });
  }
  return i;
}
var mt = function(r) {
  r || (r = {});
  var e = $e(pt({
    content: "",
    extensions: [
      Ge.configure({
        strike: !1
      }),
      // ...其他扩展-
      We,
      Re,
      Je,
      ot,
      at,
      ut,
      ct,
      vt.configure({
        HTMLAttributes: {
          style: "background-color: #00349e; color: inherit;display: inline-block; line-height: 1.5;"
        }
      })
    ],
    autofocus: !0
  }, r));
  return e;
}, yt = ["bold", "italic"];
function pe(i, r) {
  var e = Object.keys(i);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(i);
    r && (t = t.filter(function(o) {
      return Object.getOwnPropertyDescriptor(i, o).enumerable;
    })), e.push.apply(e, t);
  }
  return e;
}
function Y(i) {
  for (var r = 1; r < arguments.length; r++) {
    var e = arguments[r] != null ? arguments[r] : {};
    r % 2 ? pe(Object(e), !0).forEach(function(t) {
      ne(i, t, e[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(e)) : pe(Object(e)).forEach(function(t) {
      Object.defineProperty(i, t, Object.getOwnPropertyDescriptor(e, t));
    });
  }
  return i;
}
var X = 12, F = G(X), St = ye(function() {
  return U.value, q(F.value, Array.from(j), F.value);
}), j = /* @__PURE__ */ new Set(), me = function() {
  j.clear();
};
function q(i, r) {
  var e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 12, t = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 1, o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 40;
  r.includes(e) || r.push(e);
  var c = Math.min.apply(Math, E(r)), a = Math.max.apply(Math, E(r)), y = Math.max(c, t), v = i / y, x = X * t * v;
  if (x < o && a < o)
    return a < o && t * v > X ? t * v : x;
  var d;
  return i <= c ? d = 0 : i >= a ? d = 1 : d = (i - c) / (a - c), t + d * (o - t);
}
var gt = function(r, e, t) {
  return r + e * 256 + t * 256 * 256;
}, bt = function(r) {
  var e = r >> 16, t = r >> 8 & 255, o = r & 255;
  return new Se(o, t, e);
}, ht = function(r) {
  if (!r || r.length === 0) return "";
  var e = "", t = {};
  if (r.forEach(function(c) {
    var a = c.type, y = c.attrs;
    if (a === "bold" && (t.bold = !0), a === "italic" && (t.italic = !0), a === "textStyle" && y) {
      var v = y.color, x = y.fontFamily, d = y.fontSize, h = y.overline, l = y.strike, P = y.underline;
      if (v)
        if (v.method == B.kByColor) {
          var H = et(v.color);
          e += "\\c" + gt(H.red(), H.green(), H.blue()) + ";";
        } else v.method === B.kByACI ? e += "\\C" + v.index + ";" : (v.method === B.kByBlock && (e += "\\C0"), v.method === B.kByLayer && (e += "\\C256"));
      x && (t.family = x), d && (e += "\\H" + Number(d) / F.value + "x;"), h && (e += "\\O"), l && (e += "\\K"), P && (e += "\\L");
    }
  }), Object.keys(t).length !== 0) {
    var o;
    e = "\\f".concat((o = t.family) !== null && o !== void 0 ? o : "", "|").concat(t.bold ? "b1" : "b0", "|").concat(t.italic ? "i1" : "i0", "|c134|p49;") + e;
  }
  return e;
}, ge = function(r) {
  if (!r) return "";
  var e = "";
  if (r.type === "text") {
    var t = ht(r.marks);
    t && (e += "{", e += t), e += r.text, t && (e += "}");
  }
  return r.content && (e += r.content.map(function(o) {
    return ge(o);
  }).join("")), r.type === "paragraph" && (e += "\\P"), r.type === "doc" && e.endsWith("\\P") && (e = e.replace(/\\P$/, "")), e;
}, xt = function(r) {
  for (var e = [], t = {
    type: "doc",
    content: [{
      type: "paragraph",
      content: e
    }]
  }, o = 0, c = !1, a = "", y = ["c", "C", "F", "f", "H"], v = !1, x = "", d = [], h = {
    type: "textStyle",
    attrs: {}
  }, l = {}, P = Ce(), H = P.createColor, S = function() {
    if (x) {
      var g = {};
      if (v) {
        var w, D, M = l, p = M.bold, n = M.italic, T = ke(M, yt);
        g = T;
        var C = (w = d) === null || w === void 0 ? void 0 : w.some(function(O) {
          var f = O.type;
          return f === "bold";
        }), z = (D = d) === null || D === void 0 ? void 0 : D.some(function(O) {
          var f = O.type;
          return f === "italic";
        });
        if (p && p !== C) {
          var A;
          (A = d) === null || A === void 0 || A.push({
            type: "bold"
          });
        }
        if (n && n !== z) {
          var b;
          (b = d) === null || b === void 0 || b.push({
            type: "italic"
          });
        }
      }
      h.attrs = Object.assign(g, h.attrs), d && d.push(h), e.push({
        type: "text",
        text: x,
        marks: d
      }), x = "", h = {
        type: "textStyle",
        attrs: {}
      }, d = [];
    }
  }, I = function() {
    var g = r[o];
    if (o++, c) {
      if (a && g === ";") {
        var w = a.startsWith("c"), D = a.startsWith("C");
        if (w || D) {
          var M;
          if (D) {
            var p = Number(a.slice(1, a.length)), n = new Se();
            n.setColorIndex(p), M = H(Y(Y({}, n), {}, {
              name: ze(p) || n.getColorString(),
              index: p,
              color: "rgba(".concat(n.red, ",").concat(n.green, ",").concat(n.blue, ",").concat(n.n, ")")
            })), M.method = B.kByACI, p === 256 && (n.method = B.kByLayer), p === 0 && (n.method = B.kByBlock);
          }
          if (w) {
            var T = a.slice(1, a.length);
            M = H(Y({}, Ae(we(bt(Number(T))), B.kByColor)));
          }
          if (!M)
            return c = !1, 0;
          if (M.toString = function() {
            return M.color;
          }, v) {
            var C, z = typeof l.color != "undefined";
            z ? ((C = l.color) === null || C === void 0 ? void 0 : C.name) !== M.name && (S(), l.color = M) : l.color = M;
          }
          h.attrs.color = M;
        }
        if (a.startsWith("f") || a.startsWith("F")) {
          var A = a.slice(1, a.length), b = A.split("|"), O = De(b, 3), f = O[0], s = O[1], u = O[2];
          if (v) {
            var m = typeof l.fontFamily != "undefined", L = typeof l.bold != "undefined", ie = typeof l.italic != "undefined", oe = f !== l.fontFamily, ae = s === "b1" !== l.bold, ue = u === "i1" !== l.italic;
            (m && oe || L && ae || ie && ue) && S(), (!m || oe) && (l.fontFamily = f), (!L || ae) && (l.bold = s === "b1"), (!ie || ue) && (l.italic = u === "i1");
          }
          return h.attrs.fontFamily = f, s === "b1" && d.push({
            type: "bold"
          }), u === "i1" && d.push({
            type: "italic"
          }), c = !1, a = "", 0;
        }
        if (a.startsWith("H")) {
          var be = a.slice(1, a.length), Q = parseFloat(be) * F.value, R = new Number(Q);
          j.add(Q), R.toString = function() {
            return q(Q, Array.from(j), F.value) + "px";
          }, v && (typeof l.fontSize == "undefined" ? l.fontSize = R : Number(l.fontSize) !== Number(R) && (S(), l.fontSize = R)), h.attrs.fontSize = R;
        }
        return c = !1, a = "", 0;
      }
      if (a === "") {
        if (g === "P") {
          var Z;
          return S(), e = [], (Z = t.content) === null || Z === void 0 || Z.push({
            type: "paragraph",
            content: e
          }), c = !1, 0;
        }
        if (g === "O")
          return v && (typeof l.overline == "undefined" ? l.overline = !0 : l.overline || (S(), l.overline = !0)), h.attrs.overline = !0, c = !1, 0;
        if (g === "o")
          return S(), v && (l.overline = !1), c = !1, 0;
        if (g === "K")
          return v && (typeof l.strike == "undefined" ? l.strike = !0 : l.strike || (S(), l.strike = !0)), h.attrs.strike = !0, c = !1, 0;
        if (g === "k")
          return S(), v && (l.strike = !1), c = !1, 0;
        if (g === "L")
          return v && (typeof l.underline == "undefined" ? l.underline = !0 : l.underline || (S(), l.underline = !0)), h.attrs.underline = !0, c = !1, 0;
        if (g === "l")
          return S(), v && (l.underline = !1), c = !1, 0;
        if (y.includes(g) && !a)
          return a = g, 0;
      }
      return a += g, 0;
    }
    if (g === "\\") {
      var he = r[o];
      if (he !== "\\")
        return c = !0, a = "", 0;
    }
    if (g === "{")
      return S(), l = {}, v = !0, 0;
    if (g === "}" && v)
      return S(), l = {}, 0;
    x += g, o === r.length && S();
  }, V; o < r.length; )
    V = I();
  return t;
}, U = G(1), Tt = function(r) {
  var e = r.editor, t = Fe([{
    icon: "class:iconfont bold",
    title: _("2317"),
    action: function() {
      var n;
      return (n = e.value) === null || n === void 0 ? void 0 : n.chain().focus().toggleBold().run();
    },
    isActive: function() {
      var n;
      return (n = e.value) === null || n === void 0 ? void 0 : n.isActive("bold");
    }
  }, {
    icon: "class:iconfont italic",
    title: _("2318"),
    action: function() {
      var n;
      return (n = e.value) === null || n === void 0 ? void 0 : n.chain().focus().toggleItalic().run();
    },
    isActive: function() {
      var n;
      return (n = e.value) === null || n === void 0 ? void 0 : n.isActive("italic");
    }
  }, {
    icon: "class:iconfont strikethrough",
    title: _("2319"),
    action: function() {
      var n;
      return (n = e.value) === null || n === void 0 ? void 0 : n.chain().focus().toggleStrike().run();
    },
    isActive: function() {
      var n;
      return (n = e.value) === null || n === void 0 ? void 0 : n.isActive("textStyle", {
        strike: !0
      });
    }
  }, {
    icon: "class:iconfont overline",
    title: _("2320"),
    action: function() {
      var n;
      return (n = e.value) === null || n === void 0 ? void 0 : n.chain().focus().toggleOverline().run();
    },
    isActive: function() {
      var n;
      return (n = e.value) === null || n === void 0 ? void 0 : n.isActive("textStyle", {
        overline: !0
      });
    }
  }, {
    icon: "class:iconfont underline",
    title: _("2321"),
    action: function() {
      var n;
      return (n = e.value) === null || n === void 0 ? void 0 : n.chain().focus().toggleUnderline().run();
    },
    isActive: function() {
      var n;
      return (n = e.value) === null || n === void 0 ? void 0 : n.isActive("textStyle", {
        underline: !0
      });
    }
  }, {
    icon: "class:iconfont arrow-u-left-top-bold",
    title: _("1654"),
    action: function() {
      var n;
      return (n = e.value) === null || n === void 0 ? void 0 : n.chain().focus().undo().run();
    }
  }, {
    icon: "class:iconfont arrow-u-right-top-bold",
    title: _("204"),
    action: function() {
      var n;
      return (n = e.value) === null || n === void 0 ? void 0 : n.chain().focus().redo().run();
    }
  }].concat(E(r.items || []))), o = G([]), c = G(), a = G(), y = Me(), v = y.init, x = Ze(y), d = x.textStyles, h = x.txtFontNames, l = x.trueTypeFontNames, P = x.bigFontNames, H = x.current, S = G(H.value.name), I = ye(function() {
    return [].concat(E(h.value), E(l.value), E(P.value));
  }), V = function() {
    var n, T = (n = e.value) === null || n === void 0 ? void 0 : n.getAttributes("textStyle");
    if (T) {
      var C = T.color;
      a.value = C;
      var z = T.fontFamily;
      z && (c.value = z);
      var A = T.fontSize;
      A ? U.value = Number(A) : U.value = F.value;
    }
  };
  Ne(function() {
    var p;
    (p = e.value) === null || p === void 0 || p.on("selectionUpdate", V);
  });
  var N = null, g = function(n) {
    if (N) {
      var T = n.editor, C = T.state.tr, z = C.doc;
      z.textContent.length > N.textContent.length && (N = null, T.off("transaction", g), D());
    }
  }, w = function() {
    var n, T;
    if (e.value && !(U.value <= 0)) {
      var C = new Number(U.value);
      j.add(U.value), C.toString = function() {
        return q(C, Array.from(j), F.value) + "px";
      }, (n = e.value) === null || n === void 0 || n.chain().setFontSize(C).run(), (T = e.value) === null || T === void 0 || T.commands;
      var z = e.value.state.selection, A = z.from, b = z.to;
      if (A === b) {
        if (!e.value.state) return;
        var O = e.value.state.tr;
        N = O.before, e.value.off("transaction", g), e.value.on("transaction", g);
      } else
        D();
    }
  }, D = function() {
    var n;
    if (e.value) {
      var T = (n = e.value) === null || n === void 0 ? void 0 : n.state;
      if (T) {
        var C = T.tr, z = T.schema;
        me();
        var A = [];
        T.doc.descendants(function(b, O) {
          if (b.isText) {
            var f = b.marks, s = f.find(function(L) {
              return L.type.name === "textStyle";
            });
            if (s) {
              if (!b.text) return;
              var u = s.attrs.fontSize;
              if (!u) return;
              var m = u;
              j.add(Number(m)), A.push({
                originalFontSize: u,
                pos: O,
                length: b.text.length,
                markAttrs: Y({}, s.attrs)
              });
            }
          }
        }), A.forEach(function(b) {
          var O = b.originalFontSize, f = new Number(O);
          j.add(O), f.toString = function() {
            return q(O, Array.from(j), F.value) + "px";
          }, b.markAttrs.fontSize = f;
          var s = z.marks.textStyle.create(b.markAttrs);
          C.addMark(b.pos, b.pos + b.length, s);
        }), e.value.view.dispatch(C);
      }
    }
  }, M = function() {
    o.value = Array.from(/* @__PURE__ */ new Set([].concat(E(o.value), [U.value])));
  };
  return {
    items: t,
    setSize: w,
    updateSizes: D,
    sizes: o,
    size: U,
    addSize: M,
    font: c,
    fonts: I,
    styleColor: a,
    textStyles: d,
    textStyleInit: v,
    textStyle: S,
    baseCadSize: F,
    selectionUpdate: V,
    emptyCadSizes: me,
    defaultFontSize: St,
    defaultSize: X
  };
}, Ot = {
  class: "px-3"
}, Mt = {
  class: "w-100 d-flex mt-2 flex-wrap"
};
const Ct = /* @__PURE__ */ Ue({
  __name: "index",
  setup: function(r) {
    var e = mt(), t = tt(), o = t.dialog, c = o.isShow, a = o.showDialog, y = o.onReveal, v = o.confirm, x = o.cancel, d = Tt({
      editor: e
    }), h = d.items, l = d.size, P = d.sizes, H = d.updateSizes, S = d.font, I = d.styleColor, V = d.setSize, N = d.addSize, g = d.textStyles, w = d.textStyle, D = d.fonts, M = d.baseCadSize, p = d.selectionUpdate, n = d.emptyCadSizes, T = d.defaultFontSize, C = d.defaultSize, z = d.textStyleInit;
    y(function(f) {
      var s, u;
      if (n(), M.value = (f == null ? void 0 : f.textHeight) || C, f != null && f.textHeight && (l.value = f.textHeight), f != null && f.textStyle) {
        w.value = f.textStyle;
        var m = f.textStyleId.getMcDbTextStyleTableRecord();
        S.value = (m == null ? void 0 : m.fileName) || (m == null ? void 0 : m.bigFontFileName);
      } else
        S.value = D.value[0];
      var L = xt((f == null ? void 0 : f.contents) || "");
      L && ((s = e.value) === null || s === void 0 || s.commands.setContent(L, !1)), (u = e.value) === null || u === void 0 || u.commands.focus(), p(), H();
    });
    var A = [{
      name: "确定",
      fun: function() {
        var s, u = (s = e.value) === null || s === void 0 ? void 0 : s.getJSON(), m = ge(u);
        v({
          text: m,
          size: M.value
        });
      },
      primary: !0
    }, {
      name: "关闭",
      fun: function() {
        x(), a(!1);
      }
    }], b = function() {
      var s = window.getSelection();
      if (s && s.rangeCount > 0) {
        var u, m, L;
        (u = e.value) === null || u === void 0 || u.commands.setSelectedText((m = e.value) === null || m === void 0 ? void 0 : m.state.selection.from, (L = e.value) === null || L === void 0 ? void 0 : L.state.selection.to);
      }
    }, O = function() {
      var s, u, m;
      z(), (s = e.value) === null || s === void 0 || s.commands.unsetSelectedText((u = e.value) === null || u === void 0 ? void 0 : u.state.selection.from, (m = e.value) === null || m === void 0 ? void 0 : m.state.selection.to);
    };
    return function(f, s) {
      return ee(), le(Pe, {
        title: f.t("221"),
        modelValue: k(c),
        "onUpdate:modelValue": s[9] || (s[9] = function(u) {
          return J(c) ? c.value = u : null;
        }),
        footerBtnList: A,
        "max-width": "850"
      }, {
        default: $(function() {
          return [se("div", Ot, [se("div", Mt, [K(de, {
            class: "mr-1 selectBox",
            items: k(g),
            modelValue: k(w),
            "onUpdate:modelValue": s[0] || (s[0] = function(u) {
              return J(w) ? w.value = u : null;
            }),
            "onUpdate:menu": s[1] || (s[1] = function(u) {
              return u ? b() : O();
            })
          }, {
            prepend: $(function() {
              return [te(re(f.t("1624")) + ": ", 1)];
            }),
            _: 1
          }, 8, ["items", "modelValue"]), K(de, {
            class: "mr-1 selectBox",
            items: k(D),
            modelValue: k(S),
            "onUpdate:modelValue": [s[2] || (s[2] = function(u) {
              return J(S) ? S.value = u : null;
            }), s[4] || (s[4] = function(u) {
              var m;
              return (m = k(e)) === null || m === void 0 ? void 0 : m.chain().setFontFamily(u).run();
            })],
            "onUpdate:menu": s[3] || (s[3] = function(u) {
              return u ? b() : O();
            })
          }, {
            prepend: $(function() {
              return [te(re(f.t("1834")) + ": ", 1)];
            }),
            _: 1
          }, 8, ["items", "modelValue"]), K(rt, {
            class: "mr-1 selectBox",
            type: "number",
            items: k(P),
            modelValue: k(l),
            "onUpdate:modelValue": [s[5] || (s[5] = function(u) {
              return J(l) ? l.value = u : null;
            }), k(V)],
            modelModifiers: {
              lazy: !0
            },
            "onUpdate:focused": s[6] || (s[6] = function(u) {
              return u ? b() : O();
            }),
            onChange: k(N)
          }, {
            prepend: $(function() {
              return [te(re(f.t("1835")) + ": ", 1)];
            }),
            clear: $(function(u) {
              return E(s[10] || (s[10] = []));
            }),
            _: 1
          }, 8, ["items", "modelValue", "onUpdate:modelValue", "onChange"]), (ee(!0), Ee(Be, null, Ve(k(h), function(u, m) {
            return ee(), le(nt, {
              icon: "",
              key: m,
              onClick: u.action,
              active: u.isActive && u.isActive(),
              title: u.title,
              size: "24px",
              variant: "text"
            }, {
              default: $(function() {
                return [K(it, {
                  size: "large",
                  icon: u.icon
                }, null, 8, ["icon"])];
              }),
              _: 2
            }, 1032, ["onClick", "active", "title"]);
          }), 128)), K(He, {
            class: "ml-1 selectBox",
            "model-value": k(I),
            "onUpdate:menu": s[7] || (s[7] = function(u) {
              return u ? b() : O();
            }),
            onChange: s[8] || (s[8] = function(u) {
              var m;
              u.toString = function() {
                return u.color;
              }, (m = k(e)) === null || m === void 0 || m.chain().focus().setColor(u).run();
            })
          }, null, 8, ["model-value"])]), K(Le, {
            title: f.t("2039")
          }, {
            default: $(function() {
              return [K(k(Ke), {
                class: "multi_line_text_edit overflow-x-auto",
                style: _e({
                  fontSize: k(T) + "px"
                }),
                editor: k(e)
              }, null, 8, ["style", "editor"])];
            }),
            _: 1
          }, 8, ["title"])])];
        }),
        _: 1
      }, 8, ["title", "modelValue"]);
    };
  }
}), Bt = /* @__PURE__ */ je(Ct, [["__scopeId", "data-v-0f1c3af3"]]);
export {
  Bt as default
};
