var _t = Object.defineProperty, Vt = Object.defineProperties;
var Wt = Object.getOwnPropertyDescriptors;
var kt = Object.getOwnPropertySymbols;
var Kt = Object.prototype.hasOwnProperty, Ut = Object.prototype.propertyIsEnumerable;
var bt = (n, t, e) => t in n ? _t(n, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : n[t] = e, y = (n, t) => {
  for (var e in t || (t = {}))
    Kt.call(t, e) && bt(n, e, t[e]);
  if (kt)
    for (var e of kt(t))
      Ut.call(t, e) && bt(n, e, t[e]);
  return n;
}, C = (n, t) => Vt(n, Wt(t));
import "./extension-text-style.js";
import { E as Gt, a as qt, f as Jt, c as ut, N as Y, P as I, b as D, S as L, k as Yt, T as $, D as Qt, d as At, F as B, e as Xt, g as rt, w as Zt, h as te, i as ee, j as U, s as ne, l as vt, m as re, n as se, o as oe, p as ie, q as ae, A as ce, r as le, t as de, u as ue, v as pe, x as fe, y as he, z as me, B as Pt, C as ge, G as ye, H as ke, I as be, J as ve, K as we, L as Me, R as Se, M as Ee } from "./pm.js";
function Q(n) {
  const { state: t, transaction: e } = n;
  let { selection: r } = e, { doc: s } = e, { storedMarks: o } = e;
  return C(y({}, t), {
    apply: t.apply.bind(t),
    applyTransaction: t.applyTransaction.bind(t),
    plugins: t.plugins,
    schema: t.schema,
    reconfigure: t.reconfigure.bind(t),
    toJSON: t.toJSON.bind(t),
    get storedMarks() {
      return o;
    },
    get selection() {
      return r;
    },
    get doc() {
      return s;
    },
    get tr() {
      return r = e.selection, s = e.doc, o = e.storedMarks, e;
    }
  });
}
class X {
  constructor(t) {
    this.editor = t.editor, this.rawCommands = this.editor.extensionManager.commands, this.customState = t.state;
  }
  get hasCustomState() {
    return !!this.customState;
  }
  get state() {
    return this.customState || this.editor.state;
  }
  get commands() {
    const { rawCommands: t, editor: e, state: r } = this, { view: s } = e, { tr: o } = r, i = this.buildProps(o);
    return Object.fromEntries(Object.entries(t).map(([c, a]) => [c, (...u) => {
      const d = a(...u)(i);
      return !o.getMeta("preventDispatch") && !this.hasCustomState && s.dispatch(o), d;
    }]));
  }
  get chain() {
    return () => this.createChain();
  }
  get can() {
    return () => this.createCan();
  }
  createChain(t, e = !0) {
    const { rawCommands: r, editor: s, state: o } = this, { view: i } = s, c = [], a = !!t, l = t || o.tr, u = () => (!a && e && !l.getMeta("preventDispatch") && !this.hasCustomState && i.dispatch(l), c.every((p) => p === !0)), d = C(y({}, Object.fromEntries(Object.entries(r).map(([p, f]) => [p, (...h) => {
      const m = this.buildProps(l, e), b = f(...h)(m);
      return c.push(b), d;
    }]))), {
      run: u
    });
    return d;
  }
  createCan(t) {
    const { rawCommands: e, state: r } = this, s = !1, o = t || r.tr, i = this.buildProps(o, s), c = Object.fromEntries(Object.entries(e).map(([a, l]) => [a, (...u) => l(...u)(C(y({}, i), { dispatch: void 0 }))]));
    return C(y({}, c), {
      chain: () => this.createChain(o, s)
    });
  }
  buildProps(t, e = !0) {
    const { rawCommands: r, editor: s, state: o } = this, { view: i } = s, c = {
      tr: t,
      editor: s,
      view: i,
      state: Q({
        state: o,
        transaction: t
      }),
      dispatch: e ? () => {
      } : void 0,
      chain: () => this.createChain(t, e),
      can: () => this.createCan(t),
      get commands() {
        return Object.fromEntries(Object.entries(r).map(([a, l]) => [a, (...u) => l(...u)(c)]));
      }
    };
    return c;
  }
}
class xe {
  constructor() {
    this.callbacks = {};
  }
  on(t, e) {
    return this.callbacks[t] || (this.callbacks[t] = []), this.callbacks[t].push(e), this;
  }
  emit(t, ...e) {
    const r = this.callbacks[t];
    return r && r.forEach((s) => s.apply(this, e)), this;
  }
  off(t, e) {
    const r = this.callbacks[t];
    return r && (e ? this.callbacks[t] = r.filter((s) => s !== e) : delete this.callbacks[t]), this;
  }
  once(t, e) {
    const r = (...s) => {
      this.off(t, r), e.apply(this, s);
    };
    return this.on(t, r);
  }
  removeAllListeners() {
    this.callbacks = {};
  }
}
function k(n, t, e) {
  return n.config[t] === void 0 && n.parent ? k(n.parent, t, e) : typeof n.config[t] == "function" ? n.config[t].bind(C(y({}, e), {
    parent: n.parent ? k(n.parent, t, e) : null
  })) : n.config[t];
}
function Z(n) {
  const t = n.filter((s) => s.type === "extension"), e = n.filter((s) => s.type === "node"), r = n.filter((s) => s.type === "mark");
  return {
    baseExtensions: t,
    nodeExtensions: e,
    markExtensions: r
  };
}
function Ot(n) {
  const t = [], { nodeExtensions: e, markExtensions: r } = Z(n), s = [...e, ...r], o = {
    default: null,
    rendered: !0,
    renderHTML: null,
    parseHTML: null,
    keepOnSplit: !0,
    isRequired: !1
  };
  return n.forEach((i) => {
    const c = {
      name: i.name,
      options: i.options,
      storage: i.storage,
      extensions: s
    }, a = k(i, "addGlobalAttributes", c);
    if (!a)
      return;
    a().forEach((u) => {
      u.types.forEach((d) => {
        Object.entries(u.attributes).forEach(([p, f]) => {
          t.push({
            type: d,
            name: p,
            attribute: y(y({}, o), f)
          });
        });
      });
    });
  }), s.forEach((i) => {
    const c = {
      name: i.name,
      options: i.options,
      storage: i.storage
    }, a = k(i, "addAttributes", c);
    if (!a)
      return;
    const l = a();
    Object.entries(l).forEach(([u, d]) => {
      const p = y(y({}, o), d);
      typeof (p == null ? void 0 : p.default) == "function" && (p.default = p.default()), p != null && p.isRequired && (p == null ? void 0 : p.default) === void 0 && delete p.default, t.push({
        type: i.name,
        name: u,
        attribute: p
      });
    });
  }), t;
}
function E(n, t) {
  if (typeof n == "string") {
    if (!t.nodes[n])
      throw Error(`There is no node type named '${n}'. Maybe you forgot to add the extension?`);
    return t.nodes[n];
  }
  return n;
}
function Ce(...n) {
  return n.filter((t) => !!t).reduce((t, e) => {
    const r = y({}, t);
    return Object.entries(e).forEach(([s, o]) => {
      if (!r[s]) {
        r[s] = o;
        return;
      }
      if (s === "class") {
        const c = o ? String(o).split(" ") : [], a = r[s] ? r[s].split(" ") : [], l = c.filter((u) => !a.includes(u));
        r[s] = [...a, ...l].join(" ");
      } else if (s === "style") {
        const c = o ? o.split(";").map((u) => u.trim()).filter(Boolean) : [], a = r[s] ? r[s].split(";").map((u) => u.trim()).filter(Boolean) : [], l = /* @__PURE__ */ new Map();
        a.forEach((u) => {
          const [d, p] = u.split(":").map((f) => f.trim());
          l.set(d, p);
        }), c.forEach((u) => {
          const [d, p] = u.split(":").map((f) => f.trim());
          l.set(d, p);
        }), r[s] = Array.from(l.entries()).map(([u, d]) => `${u}: ${d}`).join("; ");
      } else
        r[s] = o;
    }), r;
  }, {});
}
function at(n, t) {
  return t.filter((e) => e.type === n.type.name).filter((e) => e.attribute.rendered).map((e) => e.attribute.renderHTML ? e.attribute.renderHTML(n.attrs) || {} : {
    [e.name]: n.attrs[e.name]
  }).reduce((e, r) => Ce(e, r), {});
}
function $t(n) {
  return typeof n == "function";
}
function v(n, t = void 0, ...e) {
  return $t(n) ? t ? n.bind(t)(...e) : n(...e) : n;
}
function Te(n = {}) {
  return Object.keys(n).length === 0 && n.constructor === Object;
}
function Ae(n) {
  return typeof n != "string" ? n : n.match(/^[+-]?(?:\d*\.)?\d+$/) ? Number(n) : n === "true" ? !0 : n === "false" ? !1 : n;
}
function wt(n, t) {
  return "style" in n ? n : C(y({}, n), {
    getAttrs: (e) => {
      const r = n.getAttrs ? n.getAttrs(e) : n.attrs;
      if (r === !1)
        return !1;
      const s = t.reduce((o, i) => {
        const c = i.attribute.parseHTML ? i.attribute.parseHTML(e) : Ae(e.getAttribute(i.name));
        return c == null ? o : C(y({}, o), {
          [i.name]: c
        });
      }, {});
      return y(y({}, r), s);
    }
  });
}
function Mt(n) {
  return Object.fromEntries(
    // @ts-ignore
    Object.entries(n).filter(([t, e]) => t === "attrs" && Te(e) ? !1 : e != null)
  );
}
function Pe(n, t) {
  var e;
  const r = Ot(n), { nodeExtensions: s, markExtensions: o } = Z(n), i = (e = s.find((l) => k(l, "topNode"))) === null || e === void 0 ? void 0 : e.name, c = Object.fromEntries(s.map((l) => {
    const u = r.filter((b) => b.type === l.name), d = {
      name: l.name,
      options: l.options,
      storage: l.storage,
      editor: t
    }, p = n.reduce((b, w) => {
      const M = k(w, "extendNodeSchema", d);
      return y(y({}, b), M ? M(l) : {});
    }, {}), f = Mt(C(y({}, p), {
      content: v(k(l, "content", d)),
      marks: v(k(l, "marks", d)),
      group: v(k(l, "group", d)),
      inline: v(k(l, "inline", d)),
      atom: v(k(l, "atom", d)),
      selectable: v(k(l, "selectable", d)),
      draggable: v(k(l, "draggable", d)),
      code: v(k(l, "code", d)),
      whitespace: v(k(l, "whitespace", d)),
      linebreakReplacement: v(k(l, "linebreakReplacement", d)),
      defining: v(k(l, "defining", d)),
      isolating: v(k(l, "isolating", d)),
      attrs: Object.fromEntries(u.map((b) => {
        var w;
        return [b.name, { default: (w = b == null ? void 0 : b.attribute) === null || w === void 0 ? void 0 : w.default }];
      }))
    })), g = v(k(l, "parseHTML", d));
    g && (f.parseDOM = g.map((b) => wt(b, u)));
    const h = k(l, "renderHTML", d);
    h && (f.toDOM = (b) => h({
      node: b,
      HTMLAttributes: at(b, u)
    }));
    const m = k(l, "renderText", d);
    return m && (f.toText = m), [l.name, f];
  })), a = Object.fromEntries(o.map((l) => {
    const u = r.filter((m) => m.type === l.name), d = {
      name: l.name,
      options: l.options,
      storage: l.storage,
      editor: t
    }, p = n.reduce((m, b) => {
      const w = k(b, "extendMarkSchema", d);
      return y(y({}, m), w ? w(l) : {});
    }, {}), f = Mt(C(y({}, p), {
      inclusive: v(k(l, "inclusive", d)),
      excludes: v(k(l, "excludes", d)),
      group: v(k(l, "group", d)),
      spanning: v(k(l, "spanning", d)),
      code: v(k(l, "code", d)),
      attrs: Object.fromEntries(u.map((m) => {
        var b;
        return [m.name, { default: (b = m == null ? void 0 : m.attribute) === null || b === void 0 ? void 0 : b.default }];
      }))
    })), g = v(k(l, "parseHTML", d));
    g && (f.parseDOM = g.map((m) => wt(m, u)));
    const h = k(l, "renderHTML", d);
    return h && (f.toDOM = (m) => h({
      mark: m,
      HTMLAttributes: at(m, u)
    })), [l.name, f];
  }));
  return new At({
    topNode: i,
    nodes: c,
    marks: a
  });
}
function st(n, t) {
  return t.nodes[n] || t.marks[n] || null;
}
function St(n, t) {
  return Array.isArray(t) ? t.some((e) => (typeof e == "string" ? e : e.name) === n.name) : t;
}
function pt(n, t) {
  const e = Qt.fromSchema(t).serializeFragment(n), s = document.implementation.createHTMLDocument().createElement("div");
  return s.appendChild(e), s.innerHTML;
}
const Oe = (n, t = 500) => {
  let e = "";
  const r = n.parentOffset;
  return n.parent.nodesBetween(Math.max(0, r - t), r, (s, o, i, c) => {
    var a, l;
    const u = ((l = (a = s.type.spec).toText) === null || l === void 0 ? void 0 : l.call(a, {
      node: s,
      pos: o,
      parent: i,
      index: c
    })) || s.textContent || "%leaf%";
    e += s.isAtom && !s.isText ? u : u.slice(0, Math.max(0, r - o));
  }), e;
};
function ft(n) {
  return Object.prototype.toString.call(n) === "[object RegExp]";
}
class tt {
  constructor(t) {
    this.find = t.find, this.handler = t.handler;
  }
}
const $e = (n, t) => {
  if (ft(t))
    return t.exec(n);
  const e = t(n);
  if (!e)
    return null;
  const r = [e.text];
  return r.index = e.index, r.input = n, r.data = e.data, e.replaceWith && (e.text.includes(e.replaceWith) || console.warn('[tiptap warn]: "inputRuleMatch.replaceWith" must be part of "inputRuleMatch.text".'), r.push(e.replaceWith)), r;
};
function _(n) {
  var t;
  const { editor: e, from: r, to: s, text: o, rules: i, plugin: c } = n, { view: a } = e;
  if (a.composing)
    return !1;
  const l = a.state.doc.resolve(r);
  if (
    // check for code node
    l.parent.type.spec.code || !((t = l.nodeBefore || l.nodeAfter) === null || t === void 0) && t.marks.find((p) => p.type.spec.code)
  )
    return !1;
  let u = !1;
  const d = Oe(l) + o;
  return i.forEach((p) => {
    if (u)
      return;
    const f = $e(d, p.find);
    if (!f)
      return;
    const g = a.state.tr, h = Q({
      state: a.state,
      transaction: g
    }), m = {
      from: r - (f[0].length - o.length),
      to: s
    }, { commands: b, chain: w, can: M } = new X({
      editor: e,
      state: h
    });
    p.handler({
      state: h,
      range: m,
      match: f,
      commands: b,
      chain: w,
      can: M
    }) === null || !g.steps.length || (g.setMeta(c, {
      transform: g,
      from: r,
      to: s,
      text: o
    }), a.dispatch(g), u = !0);
  }), u;
}
function Ie(n) {
  const { editor: t, rules: e } = n, r = new I({
    state: {
      init() {
        return null;
      },
      apply(s, o, i) {
        const c = s.getMeta(r);
        if (c)
          return c;
        const a = s.getMeta("applyInputRules");
        return !!a && setTimeout(() => {
          let { text: u } = a;
          typeof u == "string" ? u = u : u = pt(B.from(u), i.schema);
          const { from: d } = a, p = d + u.length;
          _({
            editor: t,
            from: d,
            to: p,
            text: u,
            rules: e,
            plugin: r
          });
        }), s.selectionSet || s.docChanged ? null : o;
      }
    },
    props: {
      handleTextInput(s, o, i, c) {
        return _({
          editor: t,
          from: o,
          to: i,
          text: c,
          rules: e,
          plugin: r
        });
      },
      handleDOMEvents: {
        compositionend: (s) => (setTimeout(() => {
          const { $cursor: o } = s.state.selection;
          o && _({
            editor: t,
            from: o.pos,
            to: o.pos,
            text: "",
            rules: e,
            plugin: r
          });
        }), !1)
      },
      // add support for input rules to trigger on enter
      // this is useful for example for code blocks
      handleKeyDown(s, o) {
        if (o.key !== "Enter")
          return !1;
        const { $cursor: i } = s.state.selection;
        return i ? _({
          editor: t,
          from: i.pos,
          to: i.pos,
          text: `
`,
          rules: e,
          plugin: r
        }) : !1;
      }
    },
    // @ts-ignore
    isInputRules: !0
  });
  return r;
}
function Be(n) {
  return Object.prototype.toString.call(n).slice(8, -1);
}
function V(n) {
  return Be(n) !== "Object" ? !1 : n.constructor === Object && Object.getPrototypeOf(n) === Object.prototype;
}
function et(n, t) {
  const e = y({}, n);
  return V(n) && V(t) && Object.keys(t).forEach((r) => {
    V(t[r]) && V(n[r]) ? e[r] = et(n[r], t[r]) : e[r] = t[r];
  }), e;
}
class q {
  constructor(t = {}) {
    this.type = "mark", this.name = "mark", this.parent = null, this.child = null, this.config = {
      name: this.name,
      defaultOptions: {}
    }, this.config = y(y({}, this.config), t), this.name = this.config.name, t.defaultOptions && Object.keys(t.defaultOptions).length > 0 && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${this.name}".`), this.options = this.config.defaultOptions, this.config.addOptions && (this.options = v(k(this, "addOptions", {
      name: this.name
    }))), this.storage = v(k(this, "addStorage", {
      name: this.name,
      options: this.options
    })) || {};
  }
  static create(t = {}) {
    return new q(t);
  }
  configure(t = {}) {
    const e = this.extend(C(y({}, this.config), {
      addOptions: () => et(this.options, t)
    }));
    return e.name = this.name, e.parent = this.parent, e;
  }
  extend(t = {}) {
    const e = new q(t);
    return e.parent = this, this.child = e, e.name = t.name ? t.name : e.parent.name, t.defaultOptions && Object.keys(t.defaultOptions).length > 0 && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${e.name}".`), e.options = v(k(e, "addOptions", {
      name: e.name
    })), e.storage = v(k(e, "addStorage", {
      name: e.name,
      options: e.options
    })), e;
  }
  static handleExit({ editor: t, mark: e }) {
    const { tr: r } = t.state, s = t.state.selection.$from;
    if (s.pos === s.end()) {
      const i = s.marks();
      if (!!!i.find((l) => (l == null ? void 0 : l.type.name) === e.name))
        return !1;
      const a = i.find((l) => (l == null ? void 0 : l.type.name) === e.name);
      return a && r.removeStoredMark(a), r.insertText(" ", s.pos), t.view.dispatch(r), !0;
    }
    return !1;
  }
}
function Ne(n) {
  return typeof n == "number";
}
class je {
  constructor(t) {
    this.find = t.find, this.handler = t.handler;
  }
}
const Fe = (n, t, e) => {
  if (ft(t))
    return [...n.matchAll(t)];
  const r = t(n, e);
  return r ? r.map((s) => {
    const o = [s.text];
    return o.index = s.index, o.input = n, o.data = s.data, s.replaceWith && (s.text.includes(s.replaceWith) || console.warn('[tiptap warn]: "pasteRuleMatch.replaceWith" must be part of "pasteRuleMatch.text".'), o.push(s.replaceWith)), o;
  }) : [];
};
function De(n) {
  const { editor: t, state: e, from: r, to: s, rule: o, pasteEvent: i, dropEvent: c } = n, { commands: a, chain: l, can: u } = new X({
    editor: t,
    state: e
  }), d = [];
  return e.doc.nodesBetween(r, s, (f, g) => {
    if (!f.isTextblock || f.type.spec.code)
      return;
    const h = Math.max(r, g), m = Math.min(s, g + f.content.size), b = f.textBetween(h - g, m - g, void 0, "￼");
    Fe(b, o.find, i).forEach((M) => {
      if (M.index === void 0)
        return;
      const x = h + M.index + 1, S = x + M[0].length, T = {
        from: e.tr.mapping.map(x),
        to: e.tr.mapping.map(S)
      }, P = o.handler({
        state: e,
        range: T,
        match: M,
        commands: a,
        chain: l,
        can: u,
        pasteEvent: i,
        dropEvent: c
      });
      d.push(P);
    });
  }), d.every((f) => f !== null);
}
let W = null;
const Re = (n) => {
  var t;
  const e = new ClipboardEvent("paste", {
    clipboardData: new DataTransfer()
  });
  return (t = e.clipboardData) === null || t === void 0 || t.setData("text/html", n), e;
};
function Le(n) {
  const { editor: t, rules: e } = n;
  let r = null, s = !1, o = !1, i = typeof ClipboardEvent != "undefined" ? new ClipboardEvent("paste") : null, c;
  try {
    c = typeof DragEvent != "undefined" ? new DragEvent("drop") : null;
  } catch (u) {
    c = null;
  }
  const a = ({ state: u, from: d, to: p, rule: f, pasteEvt: g }) => {
    const h = u.tr, m = Q({
      state: u,
      transaction: h
    });
    if (!(!De({
      editor: t,
      state: m,
      from: Math.max(d - 1, 0),
      to: p.b - 1,
      rule: f,
      pasteEvent: g,
      dropEvent: c
    }) || !h.steps.length)) {
      try {
        c = typeof DragEvent != "undefined" ? new DragEvent("drop") : null;
      } catch (w) {
        c = null;
      }
      return i = typeof ClipboardEvent != "undefined" ? new ClipboardEvent("paste") : null, h;
    }
  };
  return e.map((u) => new I({
    // we register a global drag handler to track the current drag source element
    view(d) {
      const p = (g) => {
        var h;
        r = !((h = d.dom.parentElement) === null || h === void 0) && h.contains(g.target) ? d.dom.parentElement : null, r && (W = t);
      }, f = () => {
        W && (W = null);
      };
      return window.addEventListener("dragstart", p), window.addEventListener("dragend", f), {
        destroy() {
          window.removeEventListener("dragstart", p), window.removeEventListener("dragend", f);
        }
      };
    },
    props: {
      handleDOMEvents: {
        drop: (d, p) => {
          if (o = r === d.dom.parentElement, c = p, !o) {
            const f = W;
            f != null && f.isEditable && setTimeout(() => {
              const g = f.state.selection;
              g && f.commands.deleteRange({ from: g.from, to: g.to });
            }, 10);
          }
          return !1;
        },
        paste: (d, p) => {
          var f;
          const g = (f = p.clipboardData) === null || f === void 0 ? void 0 : f.getData("text/html");
          return i = p, s = !!(g != null && g.includes("data-pm-slice")), !1;
        }
      }
    },
    appendTransaction: (d, p, f) => {
      const g = d[0], h = g.getMeta("uiEvent") === "paste" && !s, m = g.getMeta("uiEvent") === "drop" && !o, b = g.getMeta("applyPasteRules"), w = !!b;
      if (!h && !m && !w)
        return;
      if (w) {
        let { text: S } = b;
        typeof S == "string" ? S = S : S = pt(B.from(S), f.schema);
        const { from: T } = b, P = T + S.length, O = Re(S);
        return a({
          rule: u,
          state: f,
          from: T,
          to: { b: P },
          pasteEvt: O
        });
      }
      const M = p.doc.content.findDiffStart(f.doc.content), x = p.doc.content.findDiffEnd(f.doc.content);
      if (!(!Ne(M) || !x || M === x.b))
        return a({
          rule: u,
          state: f,
          from: M,
          to: x,
          pasteEvt: i
        });
    }
  }));
}
function ze(n) {
  const t = n.filter((e, r) => n.indexOf(e) !== r);
  return Array.from(new Set(t));
}
class R {
  constructor(t, e) {
    this.splittableMarks = [], this.editor = e, this.extensions = R.resolve(t), this.schema = Pe(this.extensions, e), this.setupExtensions();
  }
  /**
   * Returns a flattened and sorted extension list while
   * also checking for duplicated extensions and warns the user.
   * @param extensions An array of Tiptap extensions
   * @returns An flattened and sorted array of Tiptap extensions
   */
  static resolve(t) {
    const e = R.sort(R.flatten(t)), r = ze(e.map((s) => s.name));
    return r.length && console.warn(`[tiptap warn]: Duplicate extension names found: [${r.map((s) => `'${s}'`).join(", ")}]. This can lead to issues.`), e;
  }
  /**
   * Create a flattened array of extensions by traversing the `addExtensions` field.
   * @param extensions An array of Tiptap extensions
   * @returns A flattened array of Tiptap extensions
   */
  static flatten(t) {
    return t.map((e) => {
      const r = {
        name: e.name,
        options: e.options,
        storage: e.storage
      }, s = k(e, "addExtensions", r);
      return s ? [e, ...this.flatten(s())] : e;
    }).flat(10);
  }
  /**
   * Sort extensions by priority.
   * @param extensions An array of Tiptap extensions
   * @returns A sorted array of Tiptap extensions by priority
   */
  static sort(t) {
    return t.sort((r, s) => {
      const o = k(r, "priority") || 100, i = k(s, "priority") || 100;
      return o > i ? -1 : o < i ? 1 : 0;
    });
  }
  /**
   * Get all commands from the extensions.
   * @returns An object with all commands where the key is the command name and the value is the command function
   */
  get commands() {
    return this.extensions.reduce((t, e) => {
      const r = {
        name: e.name,
        options: e.options,
        storage: e.storage,
        editor: this.editor,
        type: st(e.name, this.schema)
      }, s = k(e, "addCommands", r);
      return s ? y(y({}, t), s()) : t;
    }, {});
  }
  /**
   * Get all registered Prosemirror plugins from the extensions.
   * @returns An array of Prosemirror plugins
   */
  get plugins() {
    const { editor: t } = this, e = R.sort([...this.extensions].reverse()), r = [], s = [], o = e.map((i) => {
      const c = {
        name: i.name,
        options: i.options,
        storage: i.storage,
        editor: t,
        type: st(i.name, this.schema)
      }, a = [], l = k(i, "addKeyboardShortcuts", c);
      let u = {};
      if (i.type === "mark" && k(i, "exitable", c) && (u.ArrowRight = () => q.handleExit({ editor: t, mark: i })), l) {
        const h = Object.fromEntries(Object.entries(l()).map(([m, b]) => [m, () => b({ editor: t })]));
        u = y(y({}, u), h);
      }
      const d = Yt(u);
      a.push(d);
      const p = k(i, "addInputRules", c);
      St(i, t.options.enableInputRules) && p && r.push(...p());
      const f = k(i, "addPasteRules", c);
      St(i, t.options.enablePasteRules) && f && s.push(...f());
      const g = k(i, "addProseMirrorPlugins", c);
      if (g) {
        const h = g();
        a.push(...h);
      }
      return a;
    }).flat();
    return [
      Ie({
        editor: t,
        rules: r
      }),
      ...Le({
        editor: t,
        rules: s
      }),
      ...o
    ];
  }
  /**
   * Get all attributes from the extensions.
   * @returns An array of attributes
   */
  get attributes() {
    return Ot(this.extensions);
  }
  /**
   * Get all node views from the extensions.
   * @returns An object with all node views where the key is the node name and the value is the node view function
   */
  get nodeViews() {
    const { editor: t } = this, { nodeExtensions: e } = Z(this.extensions);
    return Object.fromEntries(e.filter((r) => !!k(r, "addNodeView")).map((r) => {
      const s = this.attributes.filter((a) => a.type === r.name), o = {
        name: r.name,
        options: r.options,
        storage: r.storage,
        editor: t,
        type: E(r.name, this.schema)
      }, i = k(r, "addNodeView", o);
      if (!i)
        return [];
      const c = (a, l, u, d, p) => {
        const f = at(a, s);
        return i()({
          // pass-through
          node: a,
          view: l,
          getPos: u,
          decorations: d,
          innerDecorations: p,
          // tiptap-specific
          editor: t,
          extension: r,
          HTMLAttributes: f
        });
      };
      return [r.name, c];
    }));
  }
  /**
   * Go through all extensions, create extension storages & setup marks
   * & bind editor event listener.
   */
  setupExtensions() {
    this.extensions.forEach((t) => {
      var e;
      this.editor.extensionStorage[t.name] = t.storage;
      const r = {
        name: t.name,
        options: t.options,
        storage: t.storage,
        editor: this.editor,
        type: st(t.name, this.schema)
      };
      t.type === "mark" && (!((e = v(k(t, "keepOnSplit", r))) !== null && e !== void 0) || e) && this.splittableMarks.push(t.name);
      const s = k(t, "onBeforeCreate", r), o = k(t, "onCreate", r), i = k(t, "onUpdate", r), c = k(t, "onSelectionUpdate", r), a = k(t, "onTransaction", r), l = k(t, "onFocus", r), u = k(t, "onBlur", r), d = k(t, "onDestroy", r);
      s && this.editor.on("beforeCreate", s), o && this.editor.on("create", o), i && this.editor.on("update", i), c && this.editor.on("selectionUpdate", c), a && this.editor.on("transaction", a), l && this.editor.on("focus", l), u && this.editor.on("blur", u), d && this.editor.on("destroy", d);
    });
  }
}
class A {
  constructor(t = {}) {
    this.type = "extension", this.name = "extension", this.parent = null, this.child = null, this.config = {
      name: this.name,
      defaultOptions: {}
    }, this.config = y(y({}, this.config), t), this.name = this.config.name, t.defaultOptions && Object.keys(t.defaultOptions).length > 0 && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${this.name}".`), this.options = this.config.defaultOptions, this.config.addOptions && (this.options = v(k(this, "addOptions", {
      name: this.name
    }))), this.storage = v(k(this, "addStorage", {
      name: this.name,
      options: this.options
    })) || {};
  }
  static create(t = {}) {
    return new A(t);
  }
  configure(t = {}) {
    const e = this.extend(C(y({}, this.config), {
      addOptions: () => et(this.options, t)
    }));
    return e.name = this.name, e.parent = this.parent, e;
  }
  extend(t = {}) {
    const e = new A(y(y({}, this.config), t));
    return e.parent = this, this.child = e, e.name = t.name ? t.name : e.parent.name, t.defaultOptions && Object.keys(t.defaultOptions).length > 0 && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${e.name}".`), e.options = v(k(e, "addOptions", {
      name: e.name
    })), e.storage = v(k(e, "addStorage", {
      name: e.name,
      options: e.options
    })), e;
  }
}
function It(n, t, e) {
  const { from: r, to: s } = t, { blockSeparator: o = `

`, textSerializers: i = {} } = e || {};
  let c = "";
  return n.nodesBetween(r, s, (a, l, u, d) => {
    var p;
    a.isBlock && l > r && (c += o);
    const f = i == null ? void 0 : i[a.type.name];
    if (f)
      return u && (c += f({
        node: a,
        pos: l,
        parent: u,
        index: d,
        range: t
      })), !1;
    a.isText && (c += (p = a == null ? void 0 : a.text) === null || p === void 0 ? void 0 : p.slice(Math.max(r, l) - l, s - l));
  }), c;
}
function Bt(n) {
  return Object.fromEntries(Object.entries(n.nodes).filter(([, t]) => t.spec.toText).map(([t, e]) => [t, e.spec.toText]));
}
const He = A.create({
  name: "clipboardTextSerializer",
  addOptions() {
    return {
      blockSeparator: void 0
    };
  },
  addProseMirrorPlugins() {
    return [
      new I({
        key: new D("clipboardTextSerializer"),
        props: {
          clipboardTextSerializer: () => {
            const { editor: n } = this, { state: t, schema: e } = n, { doc: r, selection: s } = t, { ranges: o } = s, i = Math.min(...o.map((u) => u.$from.pos)), c = Math.max(...o.map((u) => u.$to.pos)), a = Bt(e);
            return It(r, { from: i, to: c }, C(y({}, this.options.blockSeparator !== void 0 ? { blockSeparator: this.options.blockSeparator } : {}), {
              textSerializers: a
            }));
          }
        }
      })
    ];
  }
}), _e = () => ({ editor: n, view: t }) => (requestAnimationFrame(() => {
  var e;
  n.isDestroyed || (t.dom.blur(), (e = window == null ? void 0 : window.getSelection()) === null || e === void 0 || e.removeAllRanges());
}), !0), Ve = (n = !1) => ({ commands: t }) => t.setContent("", n), We = () => ({ state: n, tr: t, dispatch: e }) => {
  const { selection: r } = t, { ranges: s } = r;
  return e && s.forEach(({ $from: o, $to: i }) => {
    n.doc.nodesBetween(o.pos, i.pos, (c, a) => {
      if (c.type.isText)
        return;
      const { doc: l, mapping: u } = t, d = l.resolve(u.map(a)), p = l.resolve(u.map(a + c.nodeSize)), f = d.blockRange(p);
      if (!f)
        return;
      const g = Me(f);
      if (c.type.isTextblock) {
        const { defaultType: h } = d.parent.contentMatchAt(d.index());
        t.setNodeMarkup(f.start, h);
      }
      (g || g === 0) && t.lift(f, g);
    });
  }), !0;
}, Ke = (n) => (t) => n(t), Ue = () => ({ state: n, dispatch: t }) => we(n, t), Ge = (n, t) => ({ editor: e, tr: r }) => {
  const { state: s } = e, o = s.doc.slice(n.from, n.to);
  r.deleteRange(n.from, n.to);
  const i = r.mapping.map(t);
  return r.insert(i, o.content), r.setSelection(new $(r.doc.resolve(Math.max(i - 1, 0)))), !0;
}, qe = () => ({ tr: n, dispatch: t }) => {
  const { selection: e } = n, r = e.$anchor.node();
  if (r.content.size > 0)
    return !1;
  const s = n.selection.$anchor;
  for (let o = s.depth; o > 0; o -= 1)
    if (s.node(o).type === r.type) {
      if (t) {
        const c = s.before(o), a = s.after(o);
        n.delete(c, a).scrollIntoView();
      }
      return !0;
    }
  return !1;
}, Je = (n) => ({ tr: t, state: e, dispatch: r }) => {
  const s = E(n, e.schema), o = t.selection.$anchor;
  for (let i = o.depth; i > 0; i -= 1)
    if (o.node(i).type === s) {
      if (r) {
        const a = o.before(i), l = o.after(i);
        t.delete(a, l).scrollIntoView();
      }
      return !0;
    }
  return !1;
}, Ye = (n) => ({ tr: t, dispatch: e }) => {
  const { from: r, to: s } = n;
  return e && t.delete(r, s), !0;
}, Qe = () => ({ state: n, dispatch: t }) => ve(n, t), Xe = () => ({ commands: n }) => n.keyboardShortcut("Enter"), Ze = () => ({ state: n, dispatch: t }) => be(n, t);
function J(n, t, e = { strict: !0 }) {
  const r = Object.keys(t);
  return r.length ? r.every((s) => e.strict ? t[s] === n[s] : ft(t[s]) ? t[s].test(n[s]) : t[s] === n[s]) : !0;
}
function Nt(n, t, e = {}) {
  return n.find((r) => r.type === t && J(
    // Only check equality for the attributes that are provided
    Object.fromEntries(Object.keys(e).map((s) => [s, r.attrs[s]])),
    e
  ));
}
function Et(n, t, e = {}) {
  return !!Nt(n, t, e);
}
function ht(n, t, e) {
  var r;
  if (!n || !t)
    return;
  let s = n.parent.childAfter(n.parentOffset);
  if ((!s.node || !s.node.marks.some((u) => u.type === t)) && (s = n.parent.childBefore(n.parentOffset)), !s.node || !s.node.marks.some((u) => u.type === t) || (e = e || ((r = s.node.marks[0]) === null || r === void 0 ? void 0 : r.attrs), !Nt([...s.node.marks], t, e)))
    return;
  let i = s.index, c = n.start() + s.offset, a = i + 1, l = c + s.node.nodeSize;
  for (; i > 0 && Et([...n.parent.child(i - 1).marks], t, e); )
    i -= 1, c -= n.parent.child(i).nodeSize;
  for (; a < n.parent.childCount && Et([...n.parent.child(a).marks], t, e); )
    l += n.parent.child(a).nodeSize, a += 1;
  return {
    from: c,
    to: l
  };
}
function N(n, t) {
  if (typeof n == "string") {
    if (!t.marks[n])
      throw Error(`There is no mark type named '${n}'. Maybe you forgot to add the extension?`);
    return t.marks[n];
  }
  return n;
}
const tn = (n, t = {}) => ({ tr: e, state: r, dispatch: s }) => {
  const o = N(n, r.schema), { doc: i, selection: c } = e, { $from: a, from: l, to: u } = c;
  if (s) {
    const d = ht(a, o, t);
    if (d && d.from <= l && d.to >= u) {
      const p = $.create(i, d.from, d.to);
      e.setSelection(p);
    }
  }
  return !0;
}, en = (n) => (t) => {
  const e = typeof n == "function" ? n(t) : n;
  for (let r = 0; r < e.length; r += 1)
    if (e[r](t))
      return !0;
  return !1;
};
function jt(n) {
  return n instanceof $;
}
function F(n = 0, t = 0, e = 0) {
  return Math.min(Math.max(n, t), e);
}
function Ft(n, t = null) {
  if (!t)
    return null;
  const e = L.atStart(n), r = L.atEnd(n);
  if (t === "start" || t === !0)
    return e;
  if (t === "end")
    return r;
  const s = e.from, o = r.to;
  return t === "all" ? $.create(n, F(0, s, o), F(n.content.size, s, o)) : $.create(n, F(t, s, o), F(t, s, o));
}
function nn() {
  return navigator.platform === "Android" || /android/i.test(navigator.userAgent);
}
function mt() {
  return [
    "iPad Simulator",
    "iPhone Simulator",
    "iPod Simulator",
    "iPad",
    "iPhone",
    "iPod"
  ].includes(navigator.platform) || navigator.userAgent.includes("Mac") && "ontouchend" in document;
}
const rn = (n = null, t = {}) => ({ editor: e, view: r, tr: s, dispatch: o }) => {
  t = y({
    scrollIntoView: !0
  }, t);
  const i = () => {
    (mt() || nn()) && r.dom.focus(), requestAnimationFrame(() => {
      e.isDestroyed || (r.focus(), t != null && t.scrollIntoView && e.commands.scrollIntoView());
    });
  };
  if (r.hasFocus() && n === null || n === !1)
    return !0;
  if (o && n === null && !jt(e.state.selection))
    return i(), !0;
  const c = Ft(s.doc, n) || e.state.selection, a = e.state.selection.eq(c);
  return o && (a || s.setSelection(c), a && s.storedMarks && s.setStoredMarks(s.storedMarks), i()), !0;
}, sn = (n, t) => (e) => n.every((r, s) => t(r, C(y({}, e), { index: s }))), on = (n, t) => ({ tr: e, commands: r }) => r.insertContentAt({ from: e.selection.from, to: e.selection.to }, n, t), Dt = (n) => {
  const t = n.childNodes;
  for (let e = t.length - 1; e >= 0; e -= 1) {
    const r = t[e];
    r.nodeType === 3 && r.nodeValue && /^(\n\s\s|\n)$/.test(r.nodeValue) ? n.removeChild(r) : r.nodeType === 1 && Dt(r);
  }
  return n;
};
function K(n) {
  const t = `<body>${n}</body>`, e = new window.DOMParser().parseFromString(t, "text/html").body;
  return Dt(e);
}
function z(n, t, e) {
  if (n instanceof Xt || n instanceof B)
    return n;
  e = y({
    slice: !0,
    parseOptions: {}
  }, e);
  const r = typeof n == "object" && n !== null, s = typeof n == "string";
  if (r)
    try {
      if (Array.isArray(n) && n.length > 0)
        return B.fromArray(n.map((c) => t.nodeFromJSON(c)));
      const i = t.nodeFromJSON(n);
      return e.errorOnInvalidContent && i.check(), i;
    } catch (o) {
      if (e.errorOnInvalidContent)
        throw new Error("[tiptap error]: Invalid JSON content", { cause: o });
      return console.warn("[tiptap warn]: Invalid content.", "Passed value:", n, "Error:", o), z("", t, e);
    }
  if (s) {
    if (e.errorOnInvalidContent) {
      let i = !1, c = "";
      const a = new At({
        topNode: t.spec.topNode,
        marks: t.spec.marks,
        // Prosemirror's schemas are executed such that: the last to execute, matches last
        // This means that we can add a catch-all node at the end of the schema to catch any content that we don't know how to handle
        nodes: t.spec.nodes.append({
          __tiptap__private__unknown__catch__all__node: {
            content: "inline*",
            group: "block",
            parseDOM: [
              {
                tag: "*",
                getAttrs: (l) => (i = !0, c = typeof l == "string" ? l : l.outerHTML, null)
              }
            ]
          }
        })
      });
      if (e.slice ? rt.fromSchema(a).parseSlice(K(n), e.parseOptions) : rt.fromSchema(a).parse(K(n), e.parseOptions), e.errorOnInvalidContent && i)
        throw new Error("[tiptap error]: Invalid HTML content", { cause: new Error(`Invalid element found: ${c}`) });
    }
    const o = rt.fromSchema(t);
    return e.slice ? o.parseSlice(K(n), e.parseOptions).content : o.parse(K(n), e.parseOptions);
  }
  return z("", t, e);
}
function an(n, t, e) {
  const r = n.steps.length - 1;
  if (r < t)
    return;
  const s = n.steps[r];
  if (!(s instanceof Se || s instanceof Ee))
    return;
  const o = n.mapping.maps[r];
  let i = 0;
  o.forEach((c, a, l, u) => {
    i === 0 && (i = u);
  }), n.setSelection(L.near(n.doc.resolve(i), e));
}
const cn = (n) => !("type" in n), ln = (n, t, e) => ({ tr: r, dispatch: s, editor: o }) => {
  var i;
  if (s) {
    e = y({
      parseOptions: o.options.parseOptions,
      updateSelection: !0,
      applyInputRules: !1,
      applyPasteRules: !1
    }, e);
    let c;
    const a = (m) => {
      o.emit("contentError", {
        editor: o,
        error: m,
        disableCollaboration: () => {
          o.storage.collaboration && (o.storage.collaboration.isDisabled = !0);
        }
      });
    }, l = y({
      preserveWhitespace: "full"
    }, e.parseOptions);
    if (!e.errorOnInvalidContent && !o.options.enableContentCheck && o.options.emitContentError)
      try {
        z(t, o.schema, {
          parseOptions: l,
          errorOnInvalidContent: !0
        });
      } catch (m) {
        a(m);
      }
    try {
      c = z(t, o.schema, {
        parseOptions: l,
        errorOnInvalidContent: (i = e.errorOnInvalidContent) !== null && i !== void 0 ? i : o.options.enableContentCheck
      });
    } catch (m) {
      return a(m), !1;
    }
    let { from: u, to: d } = typeof n == "number" ? { from: n, to: n } : { from: n.from, to: n.to }, p = !0, f = !0;
    if ((cn(c) ? c : [c]).forEach((m) => {
      m.check(), p = p ? m.isText && m.marks.length === 0 : !1, f = f ? m.isBlock : !1;
    }), u === d && f) {
      const { parent: m } = r.doc.resolve(u);
      m.isTextblock && !m.type.spec.code && !m.childCount && (u -= 1, d += 1);
    }
    let h;
    if (p) {
      if (Array.isArray(t))
        h = t.map((m) => m.text || "").join("");
      else if (t instanceof B) {
        let m = "";
        t.forEach((b) => {
          b.text && (m += b.text);
        }), h = m;
      } else typeof t == "object" && t && t.text ? h = t.text : h = t;
      r.insertText(h, u, d);
    } else
      h = c, r.replaceWith(u, d, h);
    e.updateSelection && an(r, r.steps.length - 1, -1), e.applyInputRules && r.setMeta("applyInputRules", { from: u, text: h }), e.applyPasteRules && r.setMeta("applyPasteRules", { from: u, text: h });
  }
  return !0;
}, dn = () => ({ state: n, dispatch: t }) => fe(n, t), un = () => ({ state: n, dispatch: t }) => ye(n, t), pn = () => ({ state: n, dispatch: t }) => ke(n, t), fn = () => ({ state: n, dispatch: t }) => ge(n, t), hn = () => ({ state: n, dispatch: t, tr: e }) => {
  try {
    const r = Pt(n.doc, n.selection.$from.pos, -1);
    return r == null ? !1 : (e.join(r, 2), t && t(e), !0);
  } catch (r) {
    return !1;
  }
}, mn = () => ({ state: n, dispatch: t, tr: e }) => {
  try {
    const r = Pt(n.doc, n.selection.$from.pos, 1);
    return r == null ? !1 : (e.join(r, 2), t && t(e), !0);
  } catch (r) {
    return !1;
  }
}, gn = () => ({ state: n, dispatch: t }) => me(n, t), yn = () => ({ state: n, dispatch: t }) => he(n, t);
function Rt() {
  return typeof navigator != "undefined" ? /Mac/.test(navigator.platform) : !1;
}
function kn(n) {
  const t = n.split(/-(?!$)/);
  let e = t[t.length - 1];
  e === "Space" && (e = " ");
  let r, s, o, i;
  for (let c = 0; c < t.length - 1; c += 1) {
    const a = t[c];
    if (/^(cmd|meta|m)$/i.test(a))
      i = !0;
    else if (/^a(lt)?$/i.test(a))
      r = !0;
    else if (/^(c|ctrl|control)$/i.test(a))
      s = !0;
    else if (/^s(hift)?$/i.test(a))
      o = !0;
    else if (/^mod$/i.test(a))
      mt() || Rt() ? i = !0 : s = !0;
    else
      throw new Error(`Unrecognized modifier name: ${a}`);
  }
  return r && (e = `Alt-${e}`), s && (e = `Ctrl-${e}`), i && (e = `Meta-${e}`), o && (e = `Shift-${e}`), e;
}
const bn = (n) => ({ editor: t, view: e, tr: r, dispatch: s }) => {
  const o = kn(n).split(/-(?!$)/), i = o.find((l) => !["Alt", "Ctrl", "Meta", "Shift"].includes(l)), c = new KeyboardEvent("keydown", {
    key: i === "Space" ? " " : i,
    altKey: o.includes("Alt"),
    ctrlKey: o.includes("Ctrl"),
    metaKey: o.includes("Meta"),
    shiftKey: o.includes("Shift"),
    bubbles: !0,
    cancelable: !0
  }), a = t.captureTransaction(() => {
    e.someProp("handleKeyDown", (l) => l(e, c));
  });
  return a == null || a.steps.forEach((l) => {
    const u = l.map(r.mapping);
    u && s && r.maybeStep(u);
  }), !0;
};
function H(n, t, e = {}) {
  const { from: r, to: s, empty: o } = n.selection, i = t ? E(t, n.schema) : null, c = [];
  n.doc.nodesBetween(r, s, (d, p) => {
    if (d.isText)
      return;
    const f = Math.max(r, p), g = Math.min(s, p + d.nodeSize);
    c.push({
      node: d,
      from: f,
      to: g
    });
  });
  const a = s - r, l = c.filter((d) => i ? i.name === d.node.type.name : !0).filter((d) => J(d.node.attrs, e, { strict: !1 }));
  return o ? !!l.length : l.reduce((d, p) => d + p.to - p.from, 0) >= a;
}
const vn = (n, t = {}) => ({ state: e, dispatch: r }) => {
  const s = E(n, e.schema);
  return H(e, s, t) ? pe(e, r) : !1;
}, wn = () => ({ state: n, dispatch: t }) => ue(n, t), Mn = (n) => ({ state: t, dispatch: e }) => {
  const r = E(n, t.schema);
  return de(r)(t, e);
}, Sn = () => ({ state: n, dispatch: t }) => le(n, t);
function nt(n, t) {
  return t.nodes[n] ? "node" : t.marks[n] ? "mark" : null;
}
function xt(n, t) {
  const e = typeof t == "string" ? [t] : t;
  return Object.keys(n).reduce((r, s) => (e.includes(s) || (r[s] = n[s]), r), {});
}
const En = (n, t) => ({ tr: e, state: r, dispatch: s }) => {
  let o = null, i = null;
  const c = nt(typeof n == "string" ? n : n.name, r.schema);
  return c ? (c === "node" && (o = E(n, r.schema)), c === "mark" && (i = N(n, r.schema)), s && e.selection.ranges.forEach((a) => {
    r.doc.nodesBetween(a.$from.pos, a.$to.pos, (l, u) => {
      o && o === l.type && e.setNodeMarkup(u, void 0, xt(l.attrs, t)), i && l.marks.length && l.marks.forEach((d) => {
        i === d.type && e.addMark(u, u + l.nodeSize, i.create(xt(d.attrs, t)));
      });
    });
  }), !0) : !1;
}, xn = () => ({ tr: n, dispatch: t }) => (t && n.scrollIntoView(), !0), Cn = () => ({ tr: n, dispatch: t }) => {
  if (t) {
    const e = new ce(n.doc);
    n.setSelection(e);
  }
  return !0;
}, Tn = () => ({ state: n, dispatch: t }) => ae(n, t), An = () => ({ state: n, dispatch: t }) => ie(n, t), Pn = () => ({ state: n, dispatch: t }) => oe(n, t), On = () => ({ state: n, dispatch: t }) => se(n, t), $n = () => ({ state: n, dispatch: t }) => re(n, t);
function ct(n, t, e = {}, r = {}) {
  return z(n, t, {
    slice: !1,
    parseOptions: e,
    errorOnInvalidContent: r.errorOnInvalidContent
  });
}
const In = (n, t = !1, e = {}, r = {}) => ({ editor: s, tr: o, dispatch: i, commands: c }) => {
  var a, l;
  const { doc: u } = o;
  if (e.preserveWhitespace !== "full") {
    const d = ct(n, s.schema, e, {
      errorOnInvalidContent: (a = r.errorOnInvalidContent) !== null && a !== void 0 ? a : s.options.enableContentCheck
    });
    return i && o.replaceWith(0, u.content.size, d).setMeta("preventUpdate", !t), !0;
  }
  return i && o.setMeta("preventUpdate", !t), c.insertContentAt({ from: 0, to: u.content.size }, n, {
    parseOptions: e,
    errorOnInvalidContent: (l = r.errorOnInvalidContent) !== null && l !== void 0 ? l : s.options.enableContentCheck
  });
};
function Lt(n, t) {
  const e = N(t, n.schema), { from: r, to: s, empty: o } = n.selection, i = [];
  o ? (n.storedMarks && i.push(...n.storedMarks), i.push(...n.selection.$head.marks())) : n.doc.nodesBetween(r, s, (a) => {
    i.push(...a.marks);
  });
  const c = i.find((a) => a.type.name === e.name);
  return c ? y({}, c.attrs) : {};
}
function Bn(n) {
  for (let t = 0; t < n.edgeCount; t += 1) {
    const { type: e } = n.edge(t);
    if (e.isTextblock && !e.hasRequiredAttrs())
      return e;
  }
  return null;
}
function Nn(n, t) {
  for (let e = n.depth; e > 0; e -= 1) {
    const r = n.node(e);
    if (t(r))
      return {
        pos: e > 0 ? n.before(e) : 0,
        start: n.start(e),
        depth: e,
        node: r
      };
  }
}
function gt(n) {
  return (t) => Nn(t.$from, n);
}
function jn(n, t) {
  const e = {
    from: 0,
    to: n.content.size
  };
  return It(n, e, t);
}
function Fn(n, t) {
  const e = E(t, n.schema), { from: r, to: s } = n.selection, o = [];
  n.doc.nodesBetween(r, s, (c) => {
    o.push(c);
  });
  const i = o.reverse().find((c) => c.type.name === e.name);
  return i ? y({}, i.attrs) : {};
}
function Dn(n, t) {
  const e = nt(typeof t == "string" ? t : t.name, n.schema);
  return e === "node" ? Fn(n, t) : e === "mark" ? Lt(n, t) : {};
}
function zt(n, t, e) {
  const r = [];
  return n === t ? e.resolve(n).marks().forEach((s) => {
    const o = e.resolve(n), i = ht(o, s.type);
    i && r.push(y({
      mark: s
    }, i));
  }) : e.nodesBetween(n, t, (s, o) => {
    !s || (s == null ? void 0 : s.nodeSize) === void 0 || r.push(...s.marks.map((i) => ({
      from: o,
      to: o + s.nodeSize,
      mark: i
    })));
  }), r;
}
function G(n, t, e) {
  return Object.fromEntries(Object.entries(e).filter(([r]) => {
    const s = n.find((o) => o.type === t && o.name === r);
    return s ? s.attribute.keepOnSplit : !1;
  }));
}
function lt(n, t, e = {}) {
  const { empty: r, ranges: s } = n.selection, o = t ? N(t, n.schema) : null;
  if (r)
    return !!(n.storedMarks || n.selection.$from.marks()).filter((d) => o ? o.name === d.type.name : !0).find((d) => J(d.attrs, e, { strict: !1 }));
  let i = 0;
  const c = [];
  if (s.forEach(({ $from: d, $to: p }) => {
    const f = d.pos, g = p.pos;
    n.doc.nodesBetween(f, g, (h, m) => {
      if (!h.isText && !h.marks.length)
        return;
      const b = Math.max(f, m), w = Math.min(g, m + h.nodeSize), M = w - b;
      i += M, c.push(...h.marks.map((x) => ({
        mark: x,
        from: b,
        to: w
      })));
    });
  }), i === 0)
    return !1;
  const a = c.filter((d) => o ? o.name === d.mark.type.name : !0).filter((d) => J(d.mark.attrs, e, { strict: !1 })).reduce((d, p) => d + p.to - p.from, 0), l = c.filter((d) => o ? d.mark.type !== o && d.mark.type.excludes(o) : !0).reduce((d, p) => d + p.to - p.from, 0);
  return (a > 0 ? a + l : a) >= i;
}
function Rn(n, t, e = {}) {
  if (!t)
    return H(n, null, e) || lt(n, null, e);
  const r = nt(t, n.schema);
  return r === "node" ? H(n, t, e) : r === "mark" ? lt(n, t, e) : !1;
}
function Ct(n, t) {
  const { nodeExtensions: e } = Z(t), r = e.find((i) => i.name === n);
  if (!r)
    return !1;
  const s = {
    name: r.name,
    options: r.options,
    storage: r.storage
  }, o = v(k(r, "group", s));
  return typeof o != "string" ? !1 : o.split(" ").includes("list");
}
function yt(n, { checkChildren: t = !0, ignoreWhitespace: e = !1 } = {}) {
  var r;
  if (e) {
    if (n.type.name === "hardBreak")
      return !0;
    if (n.isText)
      return /^\s*$/m.test((r = n.text) !== null && r !== void 0 ? r : "");
  }
  if (n.isText)
    return !n.text;
  if (n.isAtom || n.isLeaf)
    return !1;
  if (n.content.childCount === 0)
    return !0;
  if (t) {
    let s = !0;
    return n.content.forEach((o) => {
      s !== !1 && (yt(o, { ignoreWhitespace: e, checkChildren: t }) || (s = !1));
    }), s;
  }
  return !1;
}
function kr(n) {
  return n instanceof Y;
}
function Ln(n, t, e) {
  var r;
  const { selection: s } = t;
  let o = null;
  if (jt(s) && (o = s.$cursor), o) {
    const c = (r = n.storedMarks) !== null && r !== void 0 ? r : o.marks();
    return !!e.isInSet(c) || !c.some((a) => a.type.excludes(e));
  }
  const { ranges: i } = s;
  return i.some(({ $from: c, $to: a }) => {
    let l = c.depth === 0 ? n.doc.inlineContent && n.doc.type.allowsMarkType(e) : !1;
    return n.doc.nodesBetween(c.pos, a.pos, (u, d, p) => {
      if (l)
        return !1;
      if (u.isInline) {
        const f = !p || p.type.allowsMarkType(e), g = !!e.isInSet(u.marks) || !u.marks.some((h) => h.type.excludes(e));
        l = f && g;
      }
      return !l;
    }), l;
  });
}
const zn = (n, t = {}) => ({ tr: e, state: r, dispatch: s }) => {
  const { selection: o } = e, { empty: i, ranges: c } = o, a = N(n, r.schema);
  if (s)
    if (i) {
      const l = Lt(r, a);
      e.addStoredMark(a.create(y(y({}, l), t)));
    } else
      c.forEach((l) => {
        const u = l.$from.pos, d = l.$to.pos;
        r.doc.nodesBetween(u, d, (p, f) => {
          const g = Math.max(f, u), h = Math.min(f + p.nodeSize, d);
          p.marks.find((b) => b.type === a) ? p.marks.forEach((b) => {
            a === b.type && e.addMark(g, h, a.create(y(y({}, b.attrs), t)));
          }) : e.addMark(g, h, a.create(t));
        });
      });
  return Ln(r, e, a);
}, Hn = (n, t) => ({ tr: e }) => (e.setMeta(n, t), !0), _n = (n, t = {}) => ({ state: e, dispatch: r, chain: s }) => {
  const o = E(n, e.schema);
  let i;
  return e.selection.$anchor.sameParent(e.selection.$head) && (i = e.selection.$anchor.parent.attrs), o.isTextblock ? s().command(({ commands: c }) => vt(o, y(y({}, i), t))(e) ? !0 : c.clearNodes()).command(({ state: c }) => vt(o, y(y({}, i), t))(c, r)).run() : (console.warn('[tiptap warn]: Currently "setNode()" only supports text block nodes.'), !1);
}, Vn = (n) => ({ tr: t, dispatch: e }) => {
  if (e) {
    const { doc: r } = t, s = F(n, 0, r.content.size), o = Y.create(r, s);
    t.setSelection(o);
  }
  return !0;
}, Wn = (n) => ({ tr: t, dispatch: e }) => {
  if (e) {
    const { doc: r } = t, { from: s, to: o } = typeof n == "number" ? { from: n, to: n } : n, i = $.atStart(r).from, c = $.atEnd(r).to, a = F(s, i, c), l = F(o, i, c), u = $.create(r, a, l);
    t.setSelection(u);
  }
  return !0;
}, Kn = (n) => ({ state: t, dispatch: e }) => {
  const r = E(n, t.schema);
  return ne(r)(t, e);
};
function Tt(n, t) {
  const e = n.storedMarks || n.selection.$to.parentOffset && n.selection.$from.marks();
  if (e) {
    const r = e.filter((s) => t == null ? void 0 : t.includes(s.type.name));
    n.tr.ensureMarks(r);
  }
}
const Un = ({ keepMarks: n = !0 } = {}) => ({ tr: t, state: e, dispatch: r, editor: s }) => {
  const { selection: o, doc: i } = t, { $from: c, $to: a } = o, l = s.extensionManager.attributes, u = G(l, c.node().type.name, c.node().attrs);
  if (o instanceof Y && o.node.isBlock)
    return !c.parentOffset || !U(i, c.pos) ? !1 : (r && (n && Tt(e, s.extensionManager.splittableMarks), t.split(c.pos).scrollIntoView()), !0);
  if (!c.parent.isBlock)
    return !1;
  const d = a.parentOffset === a.parent.content.size, p = c.depth === 0 ? void 0 : Bn(c.node(-1).contentMatchAt(c.indexAfter(-1)));
  let f = d && p ? [
    {
      type: p,
      attrs: u
    }
  ] : void 0, g = U(t.doc, t.mapping.map(c.pos), 1, f);
  if (!f && !g && U(t.doc, t.mapping.map(c.pos), 1, p ? [{ type: p }] : void 0) && (g = !0, f = p ? [
    {
      type: p,
      attrs: u
    }
  ] : void 0), r) {
    if (g && (o instanceof $ && t.deleteSelection(), t.split(t.mapping.map(c.pos), 1, f), p && !d && !c.parentOffset && c.parent.type !== p)) {
      const h = t.mapping.map(c.before()), m = t.doc.resolve(h);
      c.node(-1).canReplaceWith(m.index(), m.index() + 1, p) && t.setNodeMarkup(t.mapping.map(c.before()), p);
    }
    n && Tt(e, s.extensionManager.splittableMarks), t.scrollIntoView();
  }
  return g;
}, Gn = (n, t = {}) => ({ tr: e, state: r, dispatch: s, editor: o }) => {
  var i;
  const c = E(n, r.schema), { $from: a, $to: l } = r.selection, u = r.selection.node;
  if (u && u.isBlock || a.depth < 2 || !a.sameParent(l))
    return !1;
  const d = a.node(-1);
  if (d.type !== c)
    return !1;
  const p = o.extensionManager.attributes;
  if (a.parent.content.size === 0 && a.node(-1).childCount === a.indexAfter(-1)) {
    if (a.depth === 2 || a.node(-3).type !== c || a.index(-2) !== a.node(-2).childCount - 1)
      return !1;
    if (s) {
      let b = B.empty;
      const w = a.index(-1) ? 1 : a.index(-2) ? 2 : 3;
      for (let O = a.depth - w; O >= a.depth - 3; O -= 1)
        b = B.from(a.node(O).copy(b));
      const M = a.indexAfter(-1) < a.node(-2).childCount ? 1 : a.indexAfter(-2) < a.node(-3).childCount ? 2 : 3, x = y(y({}, G(p, a.node().type.name, a.node().attrs)), t), S = ((i = c.contentMatch.defaultType) === null || i === void 0 ? void 0 : i.createAndFill(x)) || void 0;
      b = b.append(B.from(c.createAndFill(null, S) || void 0));
      const T = a.before(a.depth - (w - 1));
      e.replace(T, a.after(-M), new ee(b, 4 - w, 0));
      let P = -1;
      e.doc.nodesBetween(T, e.doc.content.size, (O, Ht) => {
        if (P > -1)
          return !1;
        O.isTextblock && O.content.size === 0 && (P = Ht + 1);
      }), P > -1 && e.setSelection($.near(e.doc.resolve(P))), e.scrollIntoView();
    }
    return !0;
  }
  const f = l.pos === a.end() ? d.contentMatchAt(0).defaultType : null, g = y(y({}, G(p, d.type.name, d.attrs)), t), h = y(y({}, G(p, a.node().type.name, a.node().attrs)), t);
  e.delete(a.pos, l.pos);
  const m = f ? [
    { type: c, attrs: g },
    { type: f, attrs: h }
  ] : [{ type: c, attrs: g }];
  if (!U(e.doc, a.pos, 2))
    return !1;
  if (s) {
    const { selection: b, storedMarks: w } = r, { splittableMarks: M } = o.extensionManager, x = w || b.$to.parentOffset && b.$from.marks();
    if (e.split(a.pos, 2, m).scrollIntoView(), !x || !s)
      return !0;
    const S = x.filter((T) => M.includes(T.type.name));
    e.ensureMarks(S);
  }
  return !0;
}, ot = (n, t) => {
  const e = gt((i) => i.type === t)(n.selection);
  if (!e)
    return !0;
  const r = n.doc.resolve(Math.max(0, e.pos - 1)).before(e.depth);
  if (r === void 0)
    return !0;
  const s = n.doc.nodeAt(r);
  return e.node.type === (s == null ? void 0 : s.type) && ut(n.doc, e.pos) && n.join(e.pos), !0;
}, it = (n, t) => {
  const e = gt((i) => i.type === t)(n.selection);
  if (!e)
    return !0;
  const r = n.doc.resolve(e.start).after(e.depth);
  if (r === void 0)
    return !0;
  const s = n.doc.nodeAt(r);
  return e.node.type === (s == null ? void 0 : s.type) && ut(n.doc, r) && n.join(r), !0;
}, qn = (n, t, e, r = {}) => ({ editor: s, tr: o, state: i, dispatch: c, chain: a, commands: l, can: u }) => {
  const { extensions: d, splittableMarks: p } = s.extensionManager, f = E(n, i.schema), g = E(t, i.schema), { selection: h, storedMarks: m } = i, { $from: b, $to: w } = h, M = b.blockRange(w), x = m || h.$to.parentOffset && h.$from.marks();
  if (!M)
    return !1;
  const S = gt((T) => Ct(T.type.name, d))(h);
  if (M.depth >= 1 && S && M.depth - S.depth <= 1) {
    if (S.node.type === f)
      return l.liftListItem(g);
    if (Ct(S.node.type.name, d) && f.validContent(S.node.content) && c)
      return a().command(() => (o.setNodeMarkup(S.pos, f), !0)).command(() => ot(o, f)).command(() => it(o, f)).run();
  }
  return !e || !x || !c ? a().command(() => u().wrapInList(f, r) ? !0 : l.clearNodes()).wrapInList(f, r).command(() => ot(o, f)).command(() => it(o, f)).run() : a().command(() => {
    const T = u().wrapInList(f, r), P = x.filter((O) => p.includes(O.type.name));
    return o.ensureMarks(P), T ? !0 : l.clearNodes();
  }).wrapInList(f, r).command(() => ot(o, f)).command(() => it(o, f)).run();
}, Jn = (n, t = {}, e = {}) => ({ state: r, commands: s }) => {
  const { extendEmptyMarkRange: o = !1 } = e, i = N(n, r.schema);
  return lt(r, i, t) ? s.unsetMark(i, { extendEmptyMarkRange: o }) : s.setMark(i, t);
}, Yn = (n, t, e = {}) => ({ state: r, commands: s }) => {
  const o = E(n, r.schema), i = E(t, r.schema), c = H(r, o, e);
  let a;
  return r.selection.$anchor.sameParent(r.selection.$head) && (a = r.selection.$anchor.parent.attrs), c ? s.setNode(i, a) : s.setNode(o, y(y({}, a), e));
}, Qn = (n, t = {}) => ({ state: e, commands: r }) => {
  const s = E(n, e.schema);
  return H(e, s, t) ? r.lift(s) : r.wrapIn(s, t);
}, Xn = () => ({ state: n, dispatch: t }) => {
  const e = n.plugins;
  for (let r = 0; r < e.length; r += 1) {
    const s = e[r];
    let o;
    if (s.spec.isInputRules && (o = s.getState(n))) {
      if (t) {
        const i = n.tr, c = o.transform;
        for (let a = c.steps.length - 1; a >= 0; a -= 1)
          i.step(c.steps[a].invert(c.docs[a]));
        if (o.text) {
          const a = i.doc.resolve(o.from).marks();
          i.replaceWith(o.from, o.to, n.schema.text(o.text, a));
        } else
          i.delete(o.from, o.to);
      }
      return !0;
    }
  }
  return !1;
}, Zn = () => ({ tr: n, dispatch: t }) => {
  const { selection: e } = n, { empty: r, ranges: s } = e;
  return r || t && s.forEach((o) => {
    n.removeMark(o.$from.pos, o.$to.pos);
  }), !0;
}, tr = (n, t = {}) => ({ tr: e, state: r, dispatch: s }) => {
  var o;
  const { extendEmptyMarkRange: i = !1 } = t, { selection: c } = e, a = N(n, r.schema), { $from: l, empty: u, ranges: d } = c;
  if (!s)
    return !0;
  if (u && i) {
    let { from: p, to: f } = c;
    const g = (o = l.marks().find((m) => m.type === a)) === null || o === void 0 ? void 0 : o.attrs, h = ht(l, a, g);
    h && (p = h.from, f = h.to), e.removeMark(p, f, a);
  } else
    d.forEach((p) => {
      e.removeMark(p.$from.pos, p.$to.pos, a);
    });
  return e.removeStoredMark(a), !0;
}, er = (n, t = {}) => ({ tr: e, state: r, dispatch: s }) => {
  let o = null, i = null;
  const c = nt(typeof n == "string" ? n : n.name, r.schema);
  return c ? (c === "node" && (o = E(n, r.schema)), c === "mark" && (i = N(n, r.schema)), s && e.selection.ranges.forEach((a) => {
    const l = a.$from.pos, u = a.$to.pos;
    let d, p, f, g;
    e.selection.empty ? r.doc.nodesBetween(l, u, (h, m) => {
      o && o === h.type && (f = Math.max(m, l), g = Math.min(m + h.nodeSize, u), d = m, p = h);
    }) : r.doc.nodesBetween(l, u, (h, m) => {
      m < l && o && o === h.type && (f = Math.max(m, l), g = Math.min(m + h.nodeSize, u), d = m, p = h), m >= l && m <= u && (o && o === h.type && e.setNodeMarkup(m, void 0, y(y({}, h.attrs), t)), i && h.marks.length && h.marks.forEach((b) => {
        if (i === b.type) {
          const w = Math.max(m, l), M = Math.min(m + h.nodeSize, u);
          e.addMark(w, M, i.create(y(y({}, b.attrs), t)));
        }
      }));
    }), p && (d !== void 0 && e.setNodeMarkup(d, void 0, y(y({}, p.attrs), t)), i && p.marks.length && p.marks.forEach((h) => {
      i === h.type && e.addMark(f, g, i.create(y(y({}, h.attrs), t)));
    }));
  }), !0) : !1;
}, nr = (n, t = {}) => ({ state: e, dispatch: r }) => {
  const s = E(n, e.schema);
  return te(s, t)(e, r);
}, rr = (n, t = {}) => ({ state: e, dispatch: r }) => {
  const s = E(n, e.schema);
  return Zt(s, t)(e, r);
};
var sr = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  blur: _e,
  clearContent: Ve,
  clearNodes: We,
  command: Ke,
  createParagraphNear: Ue,
  cut: Ge,
  deleteCurrentNode: qe,
  deleteNode: Je,
  deleteRange: Ye,
  deleteSelection: Qe,
  enter: Xe,
  exitCode: Ze,
  extendMarkRange: tn,
  first: en,
  focus: rn,
  forEach: sn,
  insertContent: on,
  insertContentAt: ln,
  joinBackward: pn,
  joinDown: un,
  joinForward: fn,
  joinItemBackward: hn,
  joinItemForward: mn,
  joinTextblockBackward: gn,
  joinTextblockForward: yn,
  joinUp: dn,
  keyboardShortcut: bn,
  lift: vn,
  liftEmptyBlock: wn,
  liftListItem: Mn,
  newlineInCode: Sn,
  resetAttributes: En,
  scrollIntoView: xn,
  selectAll: Cn,
  selectNodeBackward: Tn,
  selectNodeForward: An,
  selectParentNode: Pn,
  selectTextblockEnd: On,
  selectTextblockStart: $n,
  setContent: In,
  setMark: zn,
  setMeta: Hn,
  setNode: _n,
  setNodeSelection: Vn,
  setTextSelection: Wn,
  sinkListItem: Kn,
  splitBlock: Un,
  splitListItem: Gn,
  toggleList: qn,
  toggleMark: Jn,
  toggleNode: Yn,
  toggleWrap: Qn,
  undoInputRule: Xn,
  unsetAllMarks: Zn,
  unsetMark: tr,
  updateAttributes: er,
  wrapIn: nr,
  wrapInList: rr
});
const or = A.create({
  name: "commands",
  addCommands() {
    return y({}, sr);
  }
}), ir = A.create({
  name: "drop",
  addProseMirrorPlugins() {
    return [
      new I({
        key: new D("tiptapDrop"),
        props: {
          handleDrop: (n, t, e, r) => {
            this.editor.emit("drop", {
              editor: this.editor,
              event: t,
              slice: e,
              moved: r
            });
          }
        }
      })
    ];
  }
}), ar = A.create({
  name: "editable",
  addProseMirrorPlugins() {
    return [
      new I({
        key: new D("editable"),
        props: {
          editable: () => this.editor.options.editable
        }
      })
    ];
  }
}), cr = new D("focusEvents"), lr = A.create({
  name: "focusEvents",
  addProseMirrorPlugins() {
    const { editor: n } = this;
    return [
      new I({
        key: cr,
        props: {
          handleDOMEvents: {
            focus: (t, e) => {
              n.isFocused = !0;
              const r = n.state.tr.setMeta("focus", { event: e }).setMeta("addToHistory", !1);
              return t.dispatch(r), !1;
            },
            blur: (t, e) => {
              n.isFocused = !1;
              const r = n.state.tr.setMeta("blur", { event: e }).setMeta("addToHistory", !1);
              return t.dispatch(r), !1;
            }
          }
        }
      })
    ];
  }
}), dr = A.create({
  name: "keymap",
  addKeyboardShortcuts() {
    const n = () => this.editor.commands.first(({ commands: i }) => [
      () => i.undoInputRule(),
      // maybe convert first text block node to default node
      () => i.command(({ tr: c }) => {
        const { selection: a, doc: l } = c, { empty: u, $anchor: d } = a, { pos: p, parent: f } = d, g = d.parent.isTextblock && p > 0 ? c.doc.resolve(p - 1) : d, h = g.parent.type.spec.isolating, m = d.pos - d.parentOffset, b = h && g.parent.childCount === 1 ? m === d.pos : L.atStart(l).from === p;
        return !u || !f.type.isTextblock || f.textContent.length || !b || b && d.parent.type.name === "paragraph" ? !1 : i.clearNodes();
      }),
      () => i.deleteSelection(),
      () => i.joinBackward(),
      () => i.selectNodeBackward()
    ]), t = () => this.editor.commands.first(({ commands: i }) => [
      () => i.deleteSelection(),
      () => i.deleteCurrentNode(),
      () => i.joinForward(),
      () => i.selectNodeForward()
    ]), r = {
      Enter: () => this.editor.commands.first(({ commands: i }) => [
        () => i.newlineInCode(),
        () => i.createParagraphNear(),
        () => i.liftEmptyBlock(),
        () => i.splitBlock()
      ]),
      "Mod-Enter": () => this.editor.commands.exitCode(),
      Backspace: n,
      "Mod-Backspace": n,
      "Shift-Backspace": n,
      Delete: t,
      "Mod-Delete": t,
      "Mod-a": () => this.editor.commands.selectAll()
    }, s = y({}, r), o = C(y({}, r), {
      "Ctrl-h": n,
      "Alt-Backspace": n,
      "Ctrl-d": t,
      "Ctrl-Alt-Backspace": t,
      "Alt-Delete": t,
      "Alt-d": t,
      "Ctrl-a": () => this.editor.commands.selectTextblockStart(),
      "Ctrl-e": () => this.editor.commands.selectTextblockEnd()
    });
    return mt() || Rt() ? o : s;
  },
  addProseMirrorPlugins() {
    return [
      // With this plugin we check if the whole document was selected and deleted.
      // In this case we will additionally call `clearNodes()` to convert e.g. a heading
      // to a paragraph if necessary.
      // This is an alternative to ProseMirror's `AllSelection`, which doesn’t work well
      // with many other commands.
      new I({
        key: new D("clearDocument"),
        appendTransaction: (n, t, e) => {
          if (n.some((h) => h.getMeta("composition")))
            return;
          const r = n.some((h) => h.docChanged) && !t.doc.eq(e.doc), s = n.some((h) => h.getMeta("preventClearDocument"));
          if (!r || s)
            return;
          const { empty: o, from: i, to: c } = t.selection, a = L.atStart(t.doc).from, l = L.atEnd(t.doc).to;
          if (o || !(i === a && c === l) || !yt(e.doc))
            return;
          const p = e.tr, f = Q({
            state: e,
            transaction: p
          }), { commands: g } = new X({
            editor: this.editor,
            state: f
          });
          if (g.clearNodes(), !!p.steps.length)
            return p;
        }
      })
    ];
  }
}), ur = A.create({
  name: "paste",
  addProseMirrorPlugins() {
    return [
      new I({
        key: new D("tiptapPaste"),
        props: {
          handlePaste: (n, t, e) => {
            this.editor.emit("paste", {
              editor: this.editor,
              event: t,
              slice: e
            });
          }
        }
      })
    ];
  }
}), pr = A.create({
  name: "tabindex",
  addProseMirrorPlugins() {
    return [
      new I({
        key: new D("tabindex"),
        props: {
          attributes: () => this.editor.isEditable ? { tabindex: "0" } : {}
        }
      })
    ];
  }
});
class j {
  get name() {
    return this.node.type.name;
  }
  constructor(t, e, r = !1, s = null) {
    this.currentNode = null, this.actualDepth = null, this.isBlock = r, this.resolvedPos = t, this.editor = e, this.currentNode = s;
  }
  get node() {
    return this.currentNode || this.resolvedPos.node();
  }
  get element() {
    return this.editor.view.domAtPos(this.pos).node;
  }
  get depth() {
    var t;
    return (t = this.actualDepth) !== null && t !== void 0 ? t : this.resolvedPos.depth;
  }
  get pos() {
    return this.resolvedPos.pos;
  }
  get content() {
    return this.node.content;
  }
  set content(t) {
    let e = this.from, r = this.to;
    if (this.isBlock) {
      if (this.content.size === 0) {
        console.error(`You can’t set content on a block node. Tried to set content on ${this.name} at ${this.pos}`);
        return;
      }
      e = this.from + 1, r = this.to - 1;
    }
    this.editor.commands.insertContentAt({ from: e, to: r }, t);
  }
  get attributes() {
    return this.node.attrs;
  }
  get textContent() {
    return this.node.textContent;
  }
  get size() {
    return this.node.nodeSize;
  }
  get from() {
    return this.isBlock ? this.pos : this.resolvedPos.start(this.resolvedPos.depth);
  }
  get range() {
    return {
      from: this.from,
      to: this.to
    };
  }
  get to() {
    return this.isBlock ? this.pos + this.size : this.resolvedPos.end(this.resolvedPos.depth) + (this.node.isText ? 0 : 1);
  }
  get parent() {
    if (this.depth === 0)
      return null;
    const t = this.resolvedPos.start(this.resolvedPos.depth - 1), e = this.resolvedPos.doc.resolve(t);
    return new j(e, this.editor);
  }
  get before() {
    let t = this.resolvedPos.doc.resolve(this.from - (this.isBlock ? 1 : 2));
    return t.depth !== this.depth && (t = this.resolvedPos.doc.resolve(this.from - 3)), new j(t, this.editor);
  }
  get after() {
    let t = this.resolvedPos.doc.resolve(this.to + (this.isBlock ? 2 : 1));
    return t.depth !== this.depth && (t = this.resolvedPos.doc.resolve(this.to + 3)), new j(t, this.editor);
  }
  get children() {
    const t = [];
    return this.node.content.forEach((e, r) => {
      const s = e.isBlock && !e.isTextblock, o = e.isAtom && !e.isText, i = this.pos + r + (o ? 0 : 1);
      if (i < 0 || i > this.resolvedPos.doc.nodeSize - 2)
        return;
      const c = this.resolvedPos.doc.resolve(i);
      if (!s && c.depth <= this.depth)
        return;
      const a = new j(c, this.editor, s, s ? e : null);
      s && (a.actualDepth = this.depth + 1), t.push(new j(c, this.editor, s, s ? e : null));
    }), t;
  }
  get firstChild() {
    return this.children[0] || null;
  }
  get lastChild() {
    const t = this.children;
    return t[t.length - 1] || null;
  }
  closest(t, e = {}) {
    let r = null, s = this.parent;
    for (; s && !r; ) {
      if (s.node.type.name === t)
        if (Object.keys(e).length > 0) {
          const o = s.node.attrs, i = Object.keys(e);
          for (let c = 0; c < i.length; c += 1) {
            const a = i[c];
            if (o[a] !== e[a])
              break;
          }
        } else
          r = s;
      s = s.parent;
    }
    return r;
  }
  querySelector(t, e = {}) {
    return this.querySelectorAll(t, e, !0)[0] || null;
  }
  querySelectorAll(t, e = {}, r = !1) {
    let s = [];
    if (!this.children || this.children.length === 0)
      return s;
    const o = Object.keys(e);
    return this.children.forEach((i) => {
      r && s.length > 0 || (i.node.type.name === t && o.every((a) => e[a] === i.node.attrs[a]) && s.push(i), !(r && s.length > 0) && (s = s.concat(i.querySelectorAll(t, e, r))));
    }), s;
  }
  setAttribute(t) {
    const { tr: e } = this.editor.state;
    e.setNodeMarkup(this.from, void 0, y(y({}, this.node.attrs), t)), this.editor.view.dispatch(e);
  }
}
const fr = `.ProseMirror {
  position: relative;
}

.ProseMirror {
  word-wrap: break-word;
  white-space: pre-wrap;
  white-space: break-spaces;
  -webkit-font-variant-ligatures: none;
  font-variant-ligatures: none;
  font-feature-settings: "liga" 0; /* the above doesn't seem to work in Edge */
}

.ProseMirror [contenteditable="false"] {
  white-space: normal;
}

.ProseMirror [contenteditable="false"] [contenteditable="true"] {
  white-space: pre-wrap;
}

.ProseMirror pre {
  white-space: pre-wrap;
}

img.ProseMirror-separator {
  display: inline !important;
  border: none !important;
  margin: 0 !important;
  width: 0 !important;
  height: 0 !important;
}

.ProseMirror-gapcursor {
  display: none;
  pointer-events: none;
  position: absolute;
  margin: 0;
}

.ProseMirror-gapcursor:after {
  content: "";
  display: block;
  position: absolute;
  top: -2px;
  width: 20px;
  border-top: 1px solid black;
  animation: ProseMirror-cursor-blink 1.1s steps(2, start) infinite;
}

@keyframes ProseMirror-cursor-blink {
  to {
    visibility: hidden;
  }
}

.ProseMirror-hideselection *::selection {
  background: transparent;
}

.ProseMirror-hideselection *::-moz-selection {
  background: transparent;
}

.ProseMirror-hideselection * {
  caret-color: transparent;
}

.ProseMirror-focused .ProseMirror-gapcursor {
  display: block;
}

.tippy-box[data-animation=fade][data-state=hidden] {
  opacity: 0
}`;
function hr(n, t, e) {
  const r = document.querySelector("style[data-tiptap-style]");
  if (r !== null)
    return r;
  const s = document.createElement("style");
  return t && s.setAttribute("nonce", t), s.setAttribute("data-tiptap-style", ""), s.innerHTML = n, document.getElementsByTagName("head")[0].appendChild(s), s;
}
let br = class extends xe {
  constructor(t = {}) {
    super(), this.isFocused = !1, this.isInitialized = !1, this.extensionStorage = {}, this.options = {
      element: document.createElement("div"),
      content: "",
      injectCSS: !0,
      injectNonce: void 0,
      extensions: [],
      autofocus: !1,
      editable: !0,
      editorProps: {},
      parseOptions: {},
      coreExtensionOptions: {},
      enableInputRules: !0,
      enablePasteRules: !0,
      enableCoreExtensions: !0,
      enableContentCheck: !1,
      emitContentError: !1,
      onBeforeCreate: () => null,
      onCreate: () => null,
      onUpdate: () => null,
      onSelectionUpdate: () => null,
      onTransaction: () => null,
      onFocus: () => null,
      onBlur: () => null,
      onDestroy: () => null,
      onContentError: ({ error: e }) => {
        throw e;
      },
      onPaste: () => null,
      onDrop: () => null
    }, this.isCapturingTransaction = !1, this.capturedTransaction = null, this.setOptions(t), this.createExtensionManager(), this.createCommandManager(), this.createSchema(), this.on("beforeCreate", this.options.onBeforeCreate), this.emit("beforeCreate", { editor: this }), this.on("contentError", this.options.onContentError), this.createView(), this.injectCSS(), this.on("create", this.options.onCreate), this.on("update", this.options.onUpdate), this.on("selectionUpdate", this.options.onSelectionUpdate), this.on("transaction", this.options.onTransaction), this.on("focus", this.options.onFocus), this.on("blur", this.options.onBlur), this.on("destroy", this.options.onDestroy), this.on("drop", ({ event: e, slice: r, moved: s }) => this.options.onDrop(e, r, s)), this.on("paste", ({ event: e, slice: r }) => this.options.onPaste(e, r)), window.setTimeout(() => {
      this.isDestroyed || (this.commands.focus(this.options.autofocus), this.emit("create", { editor: this }), this.isInitialized = !0);
    }, 0);
  }
  /**
   * Returns the editor storage.
   */
  get storage() {
    return this.extensionStorage;
  }
  /**
   * An object of all registered commands.
   */
  get commands() {
    return this.commandManager.commands;
  }
  /**
   * Create a command chain to call multiple commands at once.
   */
  chain() {
    return this.commandManager.chain();
  }
  /**
   * Check if a command or a command chain can be executed. Without executing it.
   */
  can() {
    return this.commandManager.can();
  }
  /**
   * Inject CSS styles.
   */
  injectCSS() {
    this.options.injectCSS && document && (this.css = hr(fr, this.options.injectNonce));
  }
  /**
   * Update editor options.
   *
   * @param options A list of options
   */
  setOptions(t = {}) {
    this.options = y(y({}, this.options), t), !(!this.view || !this.state || this.isDestroyed) && (this.options.editorProps && this.view.setProps(this.options.editorProps), this.view.updateState(this.state));
  }
  /**
   * Update editable state of the editor.
   */
  setEditable(t, e = !0) {
    this.setOptions({ editable: t }), e && this.emit("update", { editor: this, transaction: this.state.tr });
  }
  /**
   * Returns whether the editor is editable.
   */
  get isEditable() {
    return this.options.editable && this.view && this.view.editable;
  }
  /**
   * Returns the editor state.
   */
  get state() {
    return this.view.state;
  }
  /**
   * Register a ProseMirror plugin.
   *
   * @param plugin A ProseMirror plugin
   * @param handlePlugins Control how to merge the plugin into the existing plugins.
   * @returns The new editor state
   */
  registerPlugin(t, e) {
    const r = $t(e) ? e(t, [...this.state.plugins]) : [...this.state.plugins, t], s = this.state.reconfigure({ plugins: r });
    return this.view.updateState(s), s;
  }
  /**
   * Unregister a ProseMirror plugin.
   *
   * @param nameOrPluginKeyToRemove The plugins name
   * @returns The new editor state or undefined if the editor is destroyed
   */
  unregisterPlugin(t) {
    if (this.isDestroyed)
      return;
    const e = this.state.plugins;
    let r = e;
    if ([].concat(t).forEach((o) => {
      const i = typeof o == "string" ? `${o}$` : o.key;
      r = r.filter((c) => !c.key.startsWith(i));
    }), e.length === r.length)
      return;
    const s = this.state.reconfigure({
      plugins: r
    });
    return this.view.updateState(s), s;
  }
  /**
   * Creates an extension manager.
   */
  createExtensionManager() {
    var t, e;
    const s = [...this.options.enableCoreExtensions ? [
      ar,
      He.configure({
        blockSeparator: (e = (t = this.options.coreExtensionOptions) === null || t === void 0 ? void 0 : t.clipboardTextSerializer) === null || e === void 0 ? void 0 : e.blockSeparator
      }),
      or,
      lr,
      dr,
      pr,
      ir,
      ur
    ].filter((o) => typeof this.options.enableCoreExtensions == "object" ? this.options.enableCoreExtensions[o.name] !== !1 : !0) : [], ...this.options.extensions].filter((o) => ["extension", "node", "mark"].includes(o == null ? void 0 : o.type));
    this.extensionManager = new R(s, this);
  }
  /**
   * Creates an command manager.
   */
  createCommandManager() {
    this.commandManager = new X({
      editor: this
    });
  }
  /**
   * Creates a ProseMirror schema.
   */
  createSchema() {
    this.schema = this.extensionManager.schema;
  }
  /**
   * Creates a ProseMirror view.
   */
  createView() {
    var t;
    let e;
    try {
      e = ct(this.options.content, this.schema, this.options.parseOptions, { errorOnInvalidContent: this.options.enableContentCheck });
    } catch (i) {
      if (!(i instanceof Error) || !["[tiptap error]: Invalid JSON content", "[tiptap error]: Invalid HTML content"].includes(i.message))
        throw i;
      this.emit("contentError", {
        editor: this,
        error: i,
        disableCollaboration: () => {
          this.storage.collaboration && (this.storage.collaboration.isDisabled = !0), this.options.extensions = this.options.extensions.filter((c) => c.name !== "collaboration"), this.createExtensionManager();
        }
      }), e = ct(this.options.content, this.schema, this.options.parseOptions, { errorOnInvalidContent: !1 });
    }
    const r = Ft(e, this.options.autofocus);
    this.view = new Gt(this.options.element, C(y({}, this.options.editorProps), {
      attributes: y({
        // add `role="textbox"` to the editor element
        role: "textbox"
      }, (t = this.options.editorProps) === null || t === void 0 ? void 0 : t.attributes),
      dispatchTransaction: this.dispatchTransaction.bind(this),
      state: qt.create({
        doc: e,
        selection: r || void 0
      })
    }));
    const s = this.state.reconfigure({
      plugins: this.extensionManager.plugins
    });
    this.view.updateState(s), this.createNodeViews(), this.prependClass();
    const o = this.view.dom;
    o.editor = this;
  }
  /**
   * Creates all node views.
   */
  createNodeViews() {
    this.view.isDestroyed || this.view.setProps({
      nodeViews: this.extensionManager.nodeViews
    });
  }
  /**
   * Prepend class name to element.
   */
  prependClass() {
    this.view.dom.className = `tiptap ${this.view.dom.className}`;
  }
  captureTransaction(t) {
    this.isCapturingTransaction = !0, t(), this.isCapturingTransaction = !1;
    const e = this.capturedTransaction;
    return this.capturedTransaction = null, e;
  }
  /**
   * The callback over which to send transactions (state updates) produced by the view.
   *
   * @param transaction An editor state transaction
   */
  dispatchTransaction(t) {
    if (this.view.isDestroyed)
      return;
    if (this.isCapturingTransaction) {
      if (!this.capturedTransaction) {
        this.capturedTransaction = t;
        return;
      }
      t.steps.forEach((i) => {
        var c;
        return (c = this.capturedTransaction) === null || c === void 0 ? void 0 : c.step(i);
      });
      return;
    }
    const e = this.state.apply(t), r = !this.state.selection.eq(e.selection);
    this.emit("beforeTransaction", {
      editor: this,
      transaction: t,
      nextState: e
    }), this.view.updateState(e), this.emit("transaction", {
      editor: this,
      transaction: t
    }), r && this.emit("selectionUpdate", {
      editor: this,
      transaction: t
    });
    const s = t.getMeta("focus"), o = t.getMeta("blur");
    s && this.emit("focus", {
      editor: this,
      event: s.event,
      transaction: t
    }), o && this.emit("blur", {
      editor: this,
      event: o.event,
      transaction: t
    }), !(!t.docChanged || t.getMeta("preventUpdate")) && this.emit("update", {
      editor: this,
      transaction: t
    });
  }
  /**
   * Get attributes of the currently selected node or mark.
   */
  getAttributes(t) {
    return Dn(this.state, t);
  }
  isActive(t, e) {
    const r = typeof t == "string" ? t : null, s = typeof t == "string" ? e : t;
    return Rn(this.state, r, s);
  }
  /**
   * Get the document as JSON.
   */
  getJSON() {
    return this.state.doc.toJSON();
  }
  /**
   * Get the document as HTML.
   */
  getHTML() {
    return pt(this.state.doc.content, this.schema);
  }
  /**
   * Get the document as text.
   */
  getText(t) {
    const { blockSeparator: e = `

`, textSerializers: r = {} } = t || {};
    return jn(this.state.doc, {
      blockSeparator: e,
      textSerializers: y(y({}, Bt(this.schema)), r)
    });
  }
  /**
   * Check if there is no content.
   */
  get isEmpty() {
    return yt(this.state.doc);
  }
  /**
   * Get the number of characters for the current document.
   *
   * @deprecated
   */
  getCharacterCount() {
    return console.warn('[tiptap warn]: "editor.getCharacterCount()" is deprecated. Please use "editor.storage.characterCount.characters()" instead.'), this.state.doc.content.size - 2;
  }
  /**
   * Destroy the editor.
   */
  destroy() {
    if (this.emit("destroy"), this.view) {
      const t = this.view.dom;
      t && t.editor && delete t.editor, this.view.destroy();
    }
    this.removeAllListeners();
  }
  /**
   * Check if the editor is already destroyed.
   */
  get isDestroyed() {
    var t;
    return !(!((t = this.view) === null || t === void 0) && t.docView);
  }
  $node(t, e) {
    var r;
    return ((r = this.$doc) === null || r === void 0 ? void 0 : r.querySelector(t, e)) || null;
  }
  $nodes(t, e) {
    var r;
    return ((r = this.$doc) === null || r === void 0 ? void 0 : r.querySelectorAll(t, e)) || null;
  }
  $pos(t) {
    const e = this.state.doc.resolve(t);
    return new j(e, this);
  }
  get $doc() {
    return this.$pos(0);
  }
};
function wr(n) {
  return new tt({
    find: n.find,
    handler: ({ state: t, range: e, match: r }) => {
      const s = v(n.getAttributes, void 0, r);
      if (s === !1 || s === null)
        return null;
      const { tr: o } = t, i = r[r.length - 1], c = r[0];
      if (i) {
        const a = c.search(/\S/), l = e.from + c.indexOf(i), u = l + i.length;
        if (zt(e.from, e.to, t.doc).filter((f) => f.mark.type.excluded.find((h) => h === n.type && h !== f.mark.type)).filter((f) => f.to > l).length)
          return null;
        u < e.to && o.delete(u, e.to), l > e.from && o.delete(e.from + a, l);
        const p = e.from + a + i.length;
        o.addMark(e.from + a, p, n.type.create(s || {})), o.removeStoredMark(n.type);
      }
    }
  });
}
function Mr(n) {
  return new tt({
    find: n.find,
    handler: ({ state: t, range: e, match: r }) => {
      const s = v(n.getAttributes, void 0, r) || {}, { tr: o } = t, i = e.from;
      let c = e.to;
      const a = n.type.create(s);
      if (r[1]) {
        const l = r[0].lastIndexOf(r[1]);
        let u = i + l;
        u > c ? u = c : c = u + r[1].length;
        const d = r[0][r[0].length - 1];
        o.insertText(d, i + r[0].length - 1), o.replaceWith(u, c, a);
      } else if (r[0]) {
        const l = n.type.isInline ? i : i - 1;
        o.insert(l, n.type.create(s)).delete(o.mapping.map(i), o.mapping.map(c));
      }
      o.scrollIntoView();
    }
  });
}
function Sr(n) {
  return new tt({
    find: n.find,
    handler: ({ state: t, range: e, match: r }) => {
      const s = t.doc.resolve(e.from), o = v(n.getAttributes, void 0, r) || {};
      if (!s.node(-1).canReplaceWith(s.index(-1), s.indexAfter(-1), n.type))
        return null;
      t.tr.delete(e.from, e.to).setBlockType(e.from, e.from, n.type, o);
    }
  });
}
function Er(n) {
  return new tt({
    find: n.find,
    handler: ({ state: t, range: e, match: r, chain: s }) => {
      const o = v(n.getAttributes, void 0, r) || {}, i = t.tr.delete(e.from, e.to), a = i.doc.resolve(e.from).blockRange(), l = a && Jt(a, n.type, o);
      if (!l)
        return null;
      if (i.wrap(a, l), n.keepMarks && n.editor) {
        const { selection: d, storedMarks: p } = t, { splittableMarks: f } = n.editor.extensionManager, g = p || d.$to.parentOffset && d.$from.marks();
        if (g) {
          const h = g.filter((m) => f.includes(m.type.name));
          i.ensureMarks(h);
        }
      }
      if (n.keepAttributes) {
        const d = n.type.name === "bulletList" || n.type.name === "orderedList" ? "listItem" : "taskList";
        s().updateAttributes(d, o).run();
      }
      const u = i.doc.resolve(e.from - 1).nodeBefore;
      u && u.type === n.type && ut(i.doc, e.from - 1) && (!n.joinPredicate || n.joinPredicate(r, u)) && i.join(e.from - 1);
    }
  });
}
class dt {
  constructor(t = {}) {
    this.type = "node", this.name = "node", this.parent = null, this.child = null, this.config = {
      name: this.name,
      defaultOptions: {}
    }, this.config = y(y({}, this.config), t), this.name = this.config.name, t.defaultOptions && Object.keys(t.defaultOptions).length > 0 && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${this.name}".`), this.options = this.config.defaultOptions, this.config.addOptions && (this.options = v(k(this, "addOptions", {
      name: this.name
    }))), this.storage = v(k(this, "addStorage", {
      name: this.name,
      options: this.options
    })) || {};
  }
  static create(t = {}) {
    return new dt(t);
  }
  configure(t = {}) {
    const e = this.extend(C(y({}, this.config), {
      addOptions: () => et(this.options, t)
    }));
    return e.name = this.name, e.parent = this.parent, e;
  }
  extend(t = {}) {
    const e = new dt(t);
    return e.parent = this, this.child = e, e.name = t.name ? t.name : e.parent.name, t.defaultOptions && Object.keys(t.defaultOptions).length > 0 && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${e.name}".`), e.options = v(k(e, "addOptions", {
      name: e.name
    })), e.storage = v(k(e, "addStorage", {
      name: e.name,
      options: e.options
    })), e;
  }
}
function xr(n) {
  return new je({
    find: n.find,
    handler: ({ state: t, range: e, match: r, pasteEvent: s }) => {
      const o = v(n.getAttributes, void 0, r, s);
      if (o === !1 || o === null)
        return null;
      const { tr: i } = t, c = r[r.length - 1], a = r[0];
      let l = e.to;
      if (c) {
        const u = a.search(/\S/), d = e.from + a.indexOf(c), p = d + c.length;
        if (zt(e.from, e.to, t.doc).filter((g) => g.mark.type.excluded.find((m) => m === n.type && m !== g.mark.type)).filter((g) => g.to > d).length)
          return null;
        p < e.to && i.delete(p, e.to), d > e.from && i.delete(e.from + u, d), l = e.from + u + c.length, i.addMark(e.from + u, l, n.type.create(o || {})), i.removeStoredMark(n.type);
      }
    }
  });
}
function Cr(n, t) {
  const { selection: e } = n, { $from: r } = e;
  if (e instanceof Y) {
    const o = r.index();
    return r.parent.canReplaceWith(o, o + 1, t);
  }
  let s = r.depth;
  for (; s >= 0; ) {
    const o = r.index(s);
    if (r.node(s).contentMatchAt(o).matchType(t))
      return !0;
    s -= 1;
  }
  return !1;
}
const Tr = A.create({
  name: "color",
  addOptions() {
    return {
      types: ["textStyle"]
    };
  },
  addGlobalAttributes() {
    return [
      {
        types: this.options.types,
        attributes: {
          color: {
            default: null,
            parseHTML: (n) => {
              var t;
              return (t = n.style.color) === null || t === void 0 ? void 0 : t.replace(/['"]+/g, "");
            },
            renderHTML: (n) => n.color ? {
              style: `color: ${n.color}`
            } : {}
          }
        }
      }
    ];
  },
  addCommands() {
    return {
      setColor: (n) => ({ chain: t }) => t().setMark("textStyle", { color: n }).run(),
      unsetColor: () => ({ chain: n }) => n().setMark("textStyle", { color: null }).removeEmptyTextStyle().run()
    };
  }
});
export {
  Tr as C,
  A as E,
  q as M,
  dt as N,
  xr as a,
  wr as b,
  v as c,
  Cr as d,
  br as e,
  k as g,
  kr as i,
  Ce as m,
  Mr as n,
  Sr as t,
  Er as w
};
