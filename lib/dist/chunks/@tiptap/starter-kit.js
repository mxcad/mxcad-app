var B = Object.defineProperty, v = Object.defineProperties;
var O = Object.getOwnPropertyDescriptors;
var M = Object.getOwnPropertySymbols;
var H = Object.prototype.hasOwnProperty, x = Object.prototype.propertyIsEnumerable;
var T = (t, e, s) => e in t ? B(t, e, { enumerable: !0, configurable: !0, writable: !0, value: s }) : t[e] = s, L = (t, e) => {
  for (var s in e || (e = {}))
    H.call(e, s) && T(t, s, e[s]);
  if (M)
    for (var s of M(e))
      x.call(e, s) && T(t, s, e[s]);
  return t;
}, S = (t, e) => v(t, O(e));
var C = (t, e) => {
  var s = {};
  for (var r in t)
    H.call(t, r) && e.indexOf(r) < 0 && (s[r] = t[r]);
  if (t != null && M)
    for (var r of M(t))
      e.indexOf(r) < 0 && x.call(t, r) && (s[r] = t[r]);
  return s;
};
import { N as l, w as g, m as a, M as y, a as c, b as h, t as A, E as b, c as P, g as w, n as K, d as E, i as D } from "./extension-color.js";
import { P as z, b as q, T as k, S as W, O as G, Q as V, U as j, V as F, W as J, N as Q } from "./pm.js";
const U = /^\s*>\s$/, X = l.create({
  name: "blockquote",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  content: "block+",
  group: "block",
  defining: !0,
  parseHTML() {
    return [
      { tag: "blockquote" }
    ];
  },
  renderHTML({ HTMLAttributes: t }) {
    return ["blockquote", a(this.options.HTMLAttributes, t), 0];
  },
  addCommands() {
    return {
      setBlockquote: () => ({ commands: t }) => t.wrapIn(this.name),
      toggleBlockquote: () => ({ commands: t }) => t.toggleWrap(this.name),
      unsetBlockquote: () => ({ commands: t }) => t.lift(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Shift-b": () => this.editor.commands.toggleBlockquote()
    };
  },
  addInputRules() {
    return [
      g({
        find: U,
        type: this.type
      })
    ];
  }
}), Y = /(?:^|\s)(\*\*(?!\s+\*\*)((?:[^*]+))\*\*(?!\s+\*\*))$/, Z = /(?:^|\s)(\*\*(?!\s+\*\*)((?:[^*]+))\*\*(?!\s+\*\*))/g, tt = /(?:^|\s)(__(?!\s+__)((?:[^_]+))__(?!\s+__))$/, et = /(?:^|\s)(__(?!\s+__)((?:[^_]+))__(?!\s+__))/g, st = y.create({
  name: "bold",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  parseHTML() {
    return [
      {
        tag: "strong"
      },
      {
        tag: "b",
        getAttrs: (t) => t.style.fontWeight !== "normal" && null
      },
      {
        style: "font-weight=400",
        clearMark: (t) => t.type.name === this.name
      },
      {
        style: "font-weight",
        getAttrs: (t) => /^(bold(er)?|[5-9]\d{2,})$/.test(t) && null
      }
    ];
  },
  renderHTML({ HTMLAttributes: t }) {
    return ["strong", a(this.options.HTMLAttributes, t), 0];
  },
  addCommands() {
    return {
      setBold: () => ({ commands: t }) => t.setMark(this.name),
      toggleBold: () => ({ commands: t }) => t.toggleMark(this.name),
      unsetBold: () => ({ commands: t }) => t.unsetMark(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-b": () => this.editor.commands.toggleBold(),
      "Mod-B": () => this.editor.commands.toggleBold()
    };
  },
  addInputRules() {
    return [
      h({
        find: Y,
        type: this.type
      }),
      h({
        find: tt,
        type: this.type
      })
    ];
  },
  addPasteRules() {
    return [
      c({
        find: Z,
        type: this.type
      }),
      c({
        find: et,
        type: this.type
      })
    ];
  }
}), rt = "listItem", R = "textStyle", I = /^\s*([-+*])\s$/, nt = l.create({
  name: "bulletList",
  addOptions() {
    return {
      itemTypeName: "listItem",
      HTMLAttributes: {},
      keepMarks: !1,
      keepAttributes: !1
    };
  },
  group: "block list",
  content() {
    return `${this.options.itemTypeName}+`;
  },
  parseHTML() {
    return [
      { tag: "ul" }
    ];
  },
  renderHTML({ HTMLAttributes: t }) {
    return ["ul", a(this.options.HTMLAttributes, t), 0];
  },
  addCommands() {
    return {
      toggleBulletList: () => ({ commands: t, chain: e }) => this.options.keepAttributes ? e().toggleList(this.name, this.options.itemTypeName, this.options.keepMarks).updateAttributes(rt, this.editor.getAttributes(R)).run() : t.toggleList(this.name, this.options.itemTypeName, this.options.keepMarks)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Shift-8": () => this.editor.commands.toggleBulletList()
    };
  },
  addInputRules() {
    let t = g({
      find: I,
      type: this.type
    });
    return (this.options.keepMarks || this.options.keepAttributes) && (t = g({
      find: I,
      type: this.type,
      keepMarks: this.options.keepMarks,
      keepAttributes: this.options.keepAttributes,
      getAttributes: () => this.editor.getAttributes(R),
      editor: this.editor
    })), [
      t
    ];
  }
}), ot = /(^|[^`])`([^`]+)`(?!`)/, it = /(^|[^`])`([^`]+)`(?!`)/g, at = y.create({
  name: "code",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  excludes: "_",
  code: !0,
  exitable: !0,
  parseHTML() {
    return [
      { tag: "code" }
    ];
  },
  renderHTML({ HTMLAttributes: t }) {
    return ["code", a(this.options.HTMLAttributes, t), 0];
  },
  addCommands() {
    return {
      setCode: () => ({ commands: t }) => t.setMark(this.name),
      toggleCode: () => ({ commands: t }) => t.toggleMark(this.name),
      unsetCode: () => ({ commands: t }) => t.unsetMark(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-e": () => this.editor.commands.toggleCode()
    };
  },
  addInputRules() {
    return [
      h({
        find: ot,
        type: this.type
      })
    ];
  },
  addPasteRules() {
    return [
      c({
        find: it,
        type: this.type
      })
    ];
  }
}), ut = /^```([a-z]+)?[\s\n]$/, dt = /^~~~([a-z]+)?[\s\n]$/, lt = l.create({
  name: "codeBlock",
  addOptions() {
    return {
      languageClassPrefix: "language-",
      exitOnTripleEnter: !0,
      exitOnArrowDown: !0,
      defaultLanguage: null,
      HTMLAttributes: {}
    };
  },
  content: "text*",
  marks: "",
  group: "block",
  code: !0,
  defining: !0,
  addAttributes() {
    return {
      language: {
        default: this.options.defaultLanguage,
        parseHTML: (t) => {
          var e;
          const { languageClassPrefix: s } = this.options, i = [...((e = t.firstElementChild) === null || e === void 0 ? void 0 : e.classList) || []].filter((n) => n.startsWith(s)).map((n) => n.replace(s, ""))[0];
          return i || null;
        },
        rendered: !1
      }
    };
  },
  parseHTML() {
    return [
      {
        tag: "pre",
        preserveWhitespace: "full"
      }
    ];
  },
  renderHTML({ node: t, HTMLAttributes: e }) {
    return [
      "pre",
      a(this.options.HTMLAttributes, e),
      [
        "code",
        {
          class: t.attrs.language ? this.options.languageClassPrefix + t.attrs.language : null
        },
        0
      ]
    ];
  },
  addCommands() {
    return {
      setCodeBlock: (t) => ({ commands: e }) => e.setNode(this.name, t),
      toggleCodeBlock: (t) => ({ commands: e }) => e.toggleNode(this.name, "paragraph", t)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Alt-c": () => this.editor.commands.toggleCodeBlock(),
      // remove code block when at start of document or code block is empty
      Backspace: () => {
        const { empty: t, $anchor: e } = this.editor.state.selection, s = e.pos === 1;
        return !t || e.parent.type.name !== this.name ? !1 : s || !e.parent.textContent.length ? this.editor.commands.clearNodes() : !1;
      },
      // exit node on triple enter
      Enter: ({ editor: t }) => {
        if (!this.options.exitOnTripleEnter)
          return !1;
        const { state: e } = t, { selection: s } = e, { $from: r, empty: o } = s;
        if (!o || r.parent.type !== this.type)
          return !1;
        const i = r.parentOffset === r.parent.nodeSize - 2, n = r.parent.textContent.endsWith(`

`);
        return !i || !n ? !1 : t.chain().command(({ tr: d }) => (d.delete(r.pos - 2, r.pos), !0)).exitCode().run();
      },
      // exit node on arrow down
      ArrowDown: ({ editor: t }) => {
        if (!this.options.exitOnArrowDown)
          return !1;
        const { state: e } = t, { selection: s, doc: r } = e, { $from: o, empty: i } = s;
        if (!i || o.parent.type !== this.type || !(o.parentOffset === o.parent.nodeSize - 2))
          return !1;
        const d = o.after();
        return d === void 0 ? !1 : r.nodeAt(d) ? t.commands.command(({ tr: u }) => (u.setSelection(W.near(r.resolve(d))), !0)) : t.commands.exitCode();
      }
    };
  },
  addInputRules() {
    return [
      A({
        find: ut,
        type: this.type,
        getAttributes: (t) => ({
          language: t[1]
        })
      }),
      A({
        find: dt,
        type: this.type,
        getAttributes: (t) => ({
          language: t[1]
        })
      })
    ];
  },
  addProseMirrorPlugins() {
    return [
      // this plugin creates a code block for pasted content from VS Code
      // we can also detect the copied code language
      new z({
        key: new q("codeBlockVSCodeHandler"),
        props: {
          handlePaste: (t, e) => {
            if (!e.clipboardData || this.editor.isActive(this.type.name))
              return !1;
            const s = e.clipboardData.getData("text/plain"), r = e.clipboardData.getData("vscode-editor-data"), o = r ? JSON.parse(r) : void 0, i = o == null ? void 0 : o.mode;
            if (!s || !i)
              return !1;
            const { tr: n, schema: d } = t.state, p = d.text(s.replace(/\r\n?/g, `
`));
            return n.replaceSelectionWith(this.type.create({ language: i }, p)), n.selection.$from.parent.type !== this.type && n.setSelection(k.near(n.doc.resolve(Math.max(0, n.selection.from - 2)))), n.setMeta("paste", !0), t.dispatch(n), !0;
          }
        }
      })
    ];
  }
}), pt = l.create({
  name: "doc",
  topNode: !0,
  content: "block+"
}), ct = b.create({
  name: "dropCursor",
  addOptions() {
    return {
      color: "currentColor",
      width: 1,
      class: void 0
    };
  },
  addProseMirrorPlugins() {
    return [
      G(this.options)
    ];
  }
}), ht = b.create({
  name: "gapCursor",
  addProseMirrorPlugins() {
    return [
      V()
    ];
  },
  extendNodeSchema(t) {
    var e;
    const s = {
      name: t.name,
      options: t.options,
      storage: t.storage
    };
    return {
      allowGapCursor: (e = P(w(t, "allowGapCursor", s))) !== null && e !== void 0 ? e : null
    };
  }
}), gt = l.create({
  name: "hardBreak",
  addOptions() {
    return {
      keepMarks: !0,
      HTMLAttributes: {}
    };
  },
  inline: !0,
  group: "inline",
  selectable: !1,
  linebreakReplacement: !0,
  parseHTML() {
    return [
      { tag: "br" }
    ];
  },
  renderHTML({ HTMLAttributes: t }) {
    return ["br", a(this.options.HTMLAttributes, t)];
  },
  renderText() {
    return `
`;
  },
  addCommands() {
    return {
      setHardBreak: () => ({ commands: t, chain: e, state: s, editor: r }) => t.first([
        () => t.exitCode(),
        () => t.command(() => {
          const { selection: o, storedMarks: i } = s;
          if (o.$from.parent.type.spec.isolating)
            return !1;
          const { keepMarks: n } = this.options, { splittableMarks: d } = r.extensionManager, p = i || o.$to.parentOffset && o.$from.marks();
          return e().insertContent({ type: this.name }).command(({ tr: u, dispatch: m }) => {
            if (m && p && n) {
              const f = p.filter((N) => d.includes(N.type.name));
              u.ensureMarks(f);
            }
            return !0;
          }).run();
        })
      ])
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Enter": () => this.editor.commands.setHardBreak(),
      "Shift-Enter": () => this.editor.commands.setHardBreak()
    };
  }
}), mt = l.create({
  name: "heading",
  addOptions() {
    return {
      levels: [1, 2, 3, 4, 5, 6],
      HTMLAttributes: {}
    };
  },
  content: "inline*",
  group: "block",
  defining: !0,
  addAttributes() {
    return {
      level: {
        default: 1,
        rendered: !1
      }
    };
  },
  parseHTML() {
    return this.options.levels.map((t) => ({
      tag: `h${t}`,
      attrs: { level: t }
    }));
  },
  renderHTML({ node: t, HTMLAttributes: e }) {
    return [`h${this.options.levels.includes(t.attrs.level) ? t.attrs.level : this.options.levels[0]}`, a(this.options.HTMLAttributes, e), 0];
  },
  addCommands() {
    return {
      setHeading: (t) => ({ commands: e }) => this.options.levels.includes(t.level) ? e.setNode(this.name, t) : !1,
      toggleHeading: (t) => ({ commands: e }) => this.options.levels.includes(t.level) ? e.toggleNode(this.name, "paragraph", t) : !1
    };
  },
  addKeyboardShortcuts() {
    return this.options.levels.reduce((t, e) => S(L({}, t), {
      [`Mod-Alt-${e}`]: () => this.editor.commands.toggleHeading({ level: e })
    }), {});
  },
  addInputRules() {
    return this.options.levels.map((t) => A({
      find: new RegExp(`^(#{${Math.min(...this.options.levels)},${t}})\\s$`),
      type: this.type,
      getAttributes: {
        level: t
      }
    }));
  }
}), ft = b.create({
  name: "history",
  addOptions() {
    return {
      depth: 100,
      newGroupDelay: 500
    };
  },
  addCommands() {
    return {
      undo: () => ({ state: t, dispatch: e }) => J(t, e),
      redo: () => ({ state: t, dispatch: e }) => F(t, e)
    };
  },
  addProseMirrorPlugins() {
    return [
      j(this.options)
    ];
  },
  addKeyboardShortcuts() {
    return {
      "Mod-z": () => this.editor.commands.undo(),
      "Shift-Mod-z": () => this.editor.commands.redo(),
      "Mod-y": () => this.editor.commands.redo(),
      // Russian keyboard layouts
      "Mod-я": () => this.editor.commands.undo(),
      "Shift-Mod-я": () => this.editor.commands.redo()
    };
  }
}), Mt = l.create({
  name: "horizontalRule",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  group: "block",
  parseHTML() {
    return [{ tag: "hr" }];
  },
  renderHTML({ HTMLAttributes: t }) {
    return ["hr", a(this.options.HTMLAttributes, t)];
  },
  addCommands() {
    return {
      setHorizontalRule: () => ({ chain: t, state: e }) => {
        if (!E(e, e.schema.nodes[this.name]))
          return !1;
        const { selection: s } = e, { $from: r, $to: o } = s, i = t();
        return r.parentOffset === 0 ? i.insertContentAt({
          from: Math.max(r.pos - 1, 0),
          to: o.pos
        }, {
          type: this.name
        }) : D(s) ? i.insertContentAt(o.pos, {
          type: this.name
        }) : i.insertContent({ type: this.name }), i.command(({ tr: n, dispatch: d }) => {
          var p;
          if (d) {
            const { $to: u } = n.selection, m = u.end();
            if (u.nodeAfter)
              u.nodeAfter.isTextblock ? n.setSelection(k.create(n.doc, u.pos + 1)) : u.nodeAfter.isBlock ? n.setSelection(Q.create(n.doc, u.pos)) : n.setSelection(k.create(n.doc, u.pos));
            else {
              const f = (p = u.parent.type.contentMatch.defaultType) === null || p === void 0 ? void 0 : p.create();
              f && (n.insert(m, f), n.setSelection(k.create(n.doc, m + 1)));
            }
            n.scrollIntoView();
          }
          return !0;
        }).run();
      }
    };
  },
  addInputRules() {
    return [
      K({
        find: /^(?:---|—-|___\s|\*\*\*\s)$/,
        type: this.type
      })
    ];
  }
}), kt = /(?:^|\s)(\*(?!\s+\*)((?:[^*]+))\*(?!\s+\*))$/, yt = /(?:^|\s)(\*(?!\s+\*)((?:[^*]+))\*(?!\s+\*))/g, bt = /(?:^|\s)(_(?!\s+_)((?:[^_]+))_(?!\s+_))$/, Lt = /(?:^|\s)(_(?!\s+_)((?:[^_]+))_(?!\s+_))/g, At = y.create({
  name: "italic",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  parseHTML() {
    return [
      {
        tag: "em"
      },
      {
        tag: "i",
        getAttrs: (t) => t.style.fontStyle !== "normal" && null
      },
      {
        style: "font-style=normal",
        clearMark: (t) => t.type.name === this.name
      },
      {
        style: "font-style=italic"
      }
    ];
  },
  renderHTML({ HTMLAttributes: t }) {
    return ["em", a(this.options.HTMLAttributes, t), 0];
  },
  addCommands() {
    return {
      setItalic: () => ({ commands: t }) => t.setMark(this.name),
      toggleItalic: () => ({ commands: t }) => t.toggleMark(this.name),
      unsetItalic: () => ({ commands: t }) => t.unsetMark(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-i": () => this.editor.commands.toggleItalic(),
      "Mod-I": () => this.editor.commands.toggleItalic()
    };
  },
  addInputRules() {
    return [
      h({
        find: kt,
        type: this.type
      }),
      h({
        find: bt,
        type: this.type
      })
    ];
  },
  addPasteRules() {
    return [
      c({
        find: yt,
        type: this.type
      }),
      c({
        find: Lt,
        type: this.type
      })
    ];
  }
}), Tt = l.create({
  name: "listItem",
  addOptions() {
    return {
      HTMLAttributes: {},
      bulletListTypeName: "bulletList",
      orderedListTypeName: "orderedList"
    };
  },
  content: "paragraph block*",
  defining: !0,
  parseHTML() {
    return [
      {
        tag: "li"
      }
    ];
  },
  renderHTML({ HTMLAttributes: t }) {
    return ["li", a(this.options.HTMLAttributes, t), 0];
  },
  addKeyboardShortcuts() {
    return {
      Enter: () => this.editor.commands.splitListItem(this.name),
      Tab: () => this.editor.commands.sinkListItem(this.name),
      "Shift-Tab": () => this.editor.commands.liftListItem(this.name)
    };
  }
}), Ht = "listItem", $ = "textStyle", _ = /^(\d+)\.\s$/, xt = l.create({
  name: "orderedList",
  addOptions() {
    return {
      itemTypeName: "listItem",
      HTMLAttributes: {},
      keepMarks: !1,
      keepAttributes: !1
    };
  },
  group: "block list",
  content() {
    return `${this.options.itemTypeName}+`;
  },
  addAttributes() {
    return {
      start: {
        default: 1,
        parseHTML: (t) => t.hasAttribute("start") ? parseInt(t.getAttribute("start") || "", 10) : 1
      },
      type: {
        default: null,
        parseHTML: (t) => t.getAttribute("type")
      }
    };
  },
  parseHTML() {
    return [
      {
        tag: "ol"
      }
    ];
  },
  renderHTML({ HTMLAttributes: t }) {
    const r = t, { start: e } = r, s = C(r, ["start"]);
    return e === 1 ? ["ol", a(this.options.HTMLAttributes, s), 0] : ["ol", a(this.options.HTMLAttributes, t), 0];
  },
  addCommands() {
    return {
      toggleOrderedList: () => ({ commands: t, chain: e }) => this.options.keepAttributes ? e().toggleList(this.name, this.options.itemTypeName, this.options.keepMarks).updateAttributes(Ht, this.editor.getAttributes($)).run() : t.toggleList(this.name, this.options.itemTypeName, this.options.keepMarks)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Shift-7": () => this.editor.commands.toggleOrderedList()
    };
  },
  addInputRules() {
    let t = g({
      find: _,
      type: this.type,
      getAttributes: (e) => ({ start: +e[1] }),
      joinPredicate: (e, s) => s.childCount + s.attrs.start === +e[1]
    });
    return (this.options.keepMarks || this.options.keepAttributes) && (t = g({
      find: _,
      type: this.type,
      keepMarks: this.options.keepMarks,
      keepAttributes: this.options.keepAttributes,
      getAttributes: (e) => L({ start: +e[1] }, this.editor.getAttributes($)),
      joinPredicate: (e, s) => s.childCount + s.attrs.start === +e[1],
      editor: this.editor
    })), [
      t
    ];
  }
}), St = l.create({
  name: "paragraph",
  priority: 1e3,
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  group: "block",
  content: "inline*",
  parseHTML() {
    return [
      { tag: "p" }
    ];
  },
  renderHTML({ HTMLAttributes: t }) {
    return ["p", a(this.options.HTMLAttributes, t), 0];
  },
  addCommands() {
    return {
      setParagraph: () => ({ commands: t }) => t.setNode(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Alt-0": () => this.editor.commands.setParagraph()
    };
  }
}), Ct = /(?:^|\s)(~~(?!\s+~~)((?:[^~]+))~~(?!\s+~~))$/, Rt = /(?:^|\s)(~~(?!\s+~~)((?:[^~]+))~~(?!\s+~~))/g, It = y.create({
  name: "strike",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  parseHTML() {
    return [
      {
        tag: "s"
      },
      {
        tag: "del"
      },
      {
        tag: "strike"
      },
      {
        style: "text-decoration",
        consuming: !1,
        getAttrs: (t) => t.includes("line-through") ? {} : !1
      }
    ];
  },
  renderHTML({ HTMLAttributes: t }) {
    return ["s", a(this.options.HTMLAttributes, t), 0];
  },
  addCommands() {
    return {
      setStrike: () => ({ commands: t }) => t.setMark(this.name),
      toggleStrike: () => ({ commands: t }) => t.toggleMark(this.name),
      unsetStrike: () => ({ commands: t }) => t.unsetMark(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Shift-s": () => this.editor.commands.toggleStrike()
    };
  },
  addInputRules() {
    return [
      h({
        find: Ct,
        type: this.type
      })
    ];
  },
  addPasteRules() {
    return [
      c({
        find: Rt,
        type: this.type
      })
    ];
  }
}), $t = l.create({
  name: "text",
  group: "inline"
}), vt = b.create({
  name: "starterKit",
  addExtensions() {
    const t = [];
    return this.options.bold !== !1 && t.push(st.configure(this.options.bold)), this.options.blockquote !== !1 && t.push(X.configure(this.options.blockquote)), this.options.bulletList !== !1 && t.push(nt.configure(this.options.bulletList)), this.options.code !== !1 && t.push(at.configure(this.options.code)), this.options.codeBlock !== !1 && t.push(lt.configure(this.options.codeBlock)), this.options.document !== !1 && t.push(pt.configure(this.options.document)), this.options.dropcursor !== !1 && t.push(ct.configure(this.options.dropcursor)), this.options.gapcursor !== !1 && t.push(ht.configure(this.options.gapcursor)), this.options.hardBreak !== !1 && t.push(gt.configure(this.options.hardBreak)), this.options.heading !== !1 && t.push(mt.configure(this.options.heading)), this.options.history !== !1 && t.push(ft.configure(this.options.history)), this.options.horizontalRule !== !1 && t.push(Mt.configure(this.options.horizontalRule)), this.options.italic !== !1 && t.push(At.configure(this.options.italic)), this.options.listItem !== !1 && t.push(Tt.configure(this.options.listItem)), this.options.orderedList !== !1 && t.push(xt.configure(this.options.orderedList)), this.options.paragraph !== !1 && t.push(St.configure(this.options.paragraph)), this.options.strike !== !1 && t.push(It.configure(this.options.strike)), this.options.text !== !1 && t.push($t.configure(this.options.text)), t;
  }
});
export {
  vt as S
};
