var P = (t, o, n) => new Promise((e, s) => {
  var i = (u) => {
    try {
      r(n.next(u));
    } catch (h) {
      s(h);
    }
  }, a = (u) => {
    try {
      r(n.throw(u));
    } catch (h) {
      s(h);
    }
  }, r = (u) => u.done ? e(u.value) : Promise.resolve(u.value).then(i, a);
  r((n = n.apply(t, o)).next());
});
import { s as J, d as ot, i as Ot } from "./@he-tree/vue.js";
import { P as F, g as ct, Q as H, R as K, S as B, f as ut, h as Yt, K as A, U as Nt, i as wt, k as gt, V as _t, W as $t, X as Pt, G as Xt, M as qt, N as Kt, H as Zt } from "./vue.js";
function te() {
  return It().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function It() {
  return typeof navigator != "undefined" && typeof window != "undefined" ? window : typeof globalThis != "undefined" ? globalThis : {};
}
const ee = typeof Proxy == "function", ne = "devtools-plugin:setup", oe = "plugin:settings:set";
let L, rt;
function se() {
  var t;
  return L !== void 0 || (typeof window != "undefined" && window.performance ? (L = !0, rt = window.performance) : typeof globalThis != "undefined" && (!((t = globalThis.perf_hooks) === null || t === void 0) && t.performance) ? (L = !0, rt = globalThis.perf_hooks.performance) : L = !1), L;
}
function re() {
  return se() ? rt.now() : Date.now();
}
class ie {
  constructor(o, n) {
    this.target = null, this.targetQueue = [], this.onQueue = [], this.plugin = o, this.hook = n;
    const e = {};
    if (o.settings)
      for (const a in o.settings) {
        const r = o.settings[a];
        e[a] = r.defaultValue;
      }
    const s = `__vue-devtools-plugin-settings__${o.id}`;
    let i = Object.assign({}, e);
    try {
      const a = localStorage.getItem(s), r = JSON.parse(a);
      Object.assign(i, r);
    } catch (a) {
    }
    this.fallbacks = {
      getSettings() {
        return i;
      },
      setSettings(a) {
        try {
          localStorage.setItem(s, JSON.stringify(a));
        } catch (r) {
        }
        i = a;
      },
      now() {
        return re();
      }
    }, n && n.on(oe, (a, r) => {
      a === this.plugin.id && this.fallbacks.setSettings(r);
    }), this.proxiedOn = new Proxy({}, {
      get: (a, r) => this.target ? this.target.on[r] : (...u) => {
        this.onQueue.push({
          method: r,
          args: u
        });
      }
    }), this.proxiedTarget = new Proxy({}, {
      get: (a, r) => this.target ? this.target[r] : r === "on" ? this.proxiedOn : Object.keys(this.fallbacks).includes(r) ? (...u) => (this.targetQueue.push({
        method: r,
        args: u,
        resolve: () => {
        }
      }), this.fallbacks[r](...u)) : (...u) => new Promise((h) => {
        this.targetQueue.push({
          method: r,
          args: u,
          resolve: h
        });
      })
    });
  }
  setRealTarget(o) {
    return P(this, null, function* () {
      this.target = o;
      for (const n of this.onQueue)
        this.target.on[n.method](...n.args);
      for (const n of this.targetQueue)
        n.resolve(yield this.target[n.method](...n.args));
    });
  }
}
function Vt(t, o) {
  const n = t, e = It(), s = te(), i = ee && n.enableEarlyProxy;
  if (s && (e.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !i))
    s.emit(ne, t, o);
  else {
    const a = i ? new ie(n, s) : null;
    (e.__VUE_DEVTOOLS_PLUGINS__ = e.__VUE_DEVTOOLS_PLUGINS__ || []).push({
      pluginDescriptor: n,
      setupFn: o,
      proxy: a
    }), a && o(a.proxiedTarget);
  }
}
var f = {};
let k;
const j = (t) => k = t, ae = () => Pt() && $t(Z) || k, Z = f.NODE_ENV !== "production" ? Symbol("pinia") : (
  /* istanbul ignore next */
  Symbol()
);
function x(t) {
  return t && typeof t == "object" && Object.prototype.toString.call(t) === "[object Object]" && typeof t.toJSON != "function";
}
var w;
(function(t) {
  t.direct = "direct", t.patchObject = "patch object", t.patchFunction = "patch function";
})(w || (w = {}));
const $ = typeof window != "undefined", mt = typeof window == "object" && window.window === window ? window : typeof self == "object" && self.self === self ? self : typeof global == "object" && global.global === global ? global : typeof globalThis == "object" ? globalThis : { HTMLElement: null };
function ce(t, { autoBom: o = !1 } = {}) {
  return o && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type) ? new Blob(["\uFEFF", t], { type: t.type }) : t;
}
function lt(t, o, n) {
  const e = new XMLHttpRequest();
  e.open("GET", t), e.responseType = "blob", e.onload = function() {
    At(e.response, o, n);
  }, e.onerror = function() {
    console.error("could not download file");
  }, e.send();
}
function Tt(t) {
  const o = new XMLHttpRequest();
  o.open("HEAD", t, !1);
  try {
    o.send();
  } catch (n) {
  }
  return o.status >= 200 && o.status <= 299;
}
function Q(t) {
  try {
    t.dispatchEvent(new MouseEvent("click"));
  } catch (o) {
    const n = document.createEvent("MouseEvents");
    n.initMouseEvent("click", !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0, null), t.dispatchEvent(n);
  }
}
const z = typeof navigator == "object" ? navigator : { userAgent: "" }, Dt = /Macintosh/.test(z.userAgent) && /AppleWebKit/.test(z.userAgent) && !/Safari/.test(z.userAgent), At = $ ? (
  // Use download attribute first if possible (#193 Lumia mobile) unless this is a macOS WebView or mini program
  typeof HTMLAnchorElement != "undefined" && "download" in HTMLAnchorElement.prototype && !Dt ? ue : (
    // Use msSaveOrOpenBlob as a second approach
    "msSaveOrOpenBlob" in z ? le : (
      // Fallback to using FileReader and a popup
      fe
    )
  )
) : () => {
};
function ue(t, o = "download", n) {
  const e = document.createElement("a");
  e.download = o, e.rel = "noopener", typeof t == "string" ? (e.href = t, e.origin !== location.origin ? Tt(e.href) ? lt(t, o, n) : (e.target = "_blank", Q(e)) : Q(e)) : (e.href = URL.createObjectURL(t), setTimeout(function() {
    URL.revokeObjectURL(e.href);
  }, 4e4), setTimeout(function() {
    Q(e);
  }, 0));
}
function le(t, o = "download", n) {
  if (typeof t == "string")
    if (Tt(t))
      lt(t, o, n);
    else {
      const e = document.createElement("a");
      e.href = t, e.target = "_blank", setTimeout(function() {
        Q(e);
      });
    }
  else
    navigator.msSaveOrOpenBlob(ce(t, n), o);
}
function fe(t, o, n, e) {
  if (e = e || open("", "_blank"), e && (e.document.title = e.document.body.innerText = "downloading..."), typeof t == "string")
    return lt(t, o, n);
  const s = t.type === "application/octet-stream", i = /constructor/i.test(String(mt.HTMLElement)) || "safari" in mt, a = /CriOS\/[\d]+/.test(navigator.userAgent);
  if ((a || s && i || Dt) && typeof FileReader != "undefined") {
    const r = new FileReader();
    r.onloadend = function() {
      let u = r.result;
      if (typeof u != "string")
        throw e = null, new Error("Wrong reader.result type");
      u = a ? u : u.replace(/^data:[^;]*;/, "data:attachment/file;"), e ? e.location.href = u : location.assign(u), e = null;
    }, r.readAsDataURL(t);
  } else {
    const r = URL.createObjectURL(t);
    e ? e.location.assign(r) : location.href = r, e = null, setTimeout(function() {
      URL.revokeObjectURL(r);
    }, 4e4);
  }
}
function m(t, o) {
  const n = "🍍 " + t;
  typeof __VUE_DEVTOOLS_TOAST__ == "function" ? __VUE_DEVTOOLS_TOAST__(n, o) : o === "error" ? console.error(n) : o === "warn" ? console.warn(n) : console.log(n);
}
function ft(t) {
  return "_a" in t && "install" in t;
}
function jt() {
  if (!("clipboard" in navigator))
    return m("Your browser doesn't support the Clipboard API", "error"), !0;
}
function xt(t) {
  return t instanceof Error && t.message.toLowerCase().includes("document is not focused") ? (m('You need to activate the "Emulate a focused page" setting in the "Rendering" panel of devtools.', "warn"), !0) : !1;
}
function de(t) {
  return P(this, null, function* () {
    if (!jt())
      try {
        yield navigator.clipboard.writeText(JSON.stringify(t.state.value)), m("Global state copied to clipboard.");
      } catch (o) {
        if (xt(o))
          return;
        m("Failed to serialize the state. Check the console for more details.", "error"), console.error(o);
      }
  });
}
function he(t) {
  return P(this, null, function* () {
    if (!jt())
      try {
        Ct(t, JSON.parse(yield navigator.clipboard.readText())), m("Global state pasted from clipboard.");
      } catch (o) {
        if (xt(o))
          return;
        m("Failed to deserialize the state from clipboard. Check the console for more details.", "error"), console.error(o);
      }
  });
}
function pe(t) {
  return P(this, null, function* () {
    try {
      At(new Blob([JSON.stringify(t.state.value)], {
        type: "text/plain;charset=utf-8"
      }), "pinia-state.json");
    } catch (o) {
      m("Failed to export the state as JSON. Check the console for more details.", "error"), console.error(o);
    }
  });
}
let I;
function ge() {
  I || (I = document.createElement("input"), I.type = "file", I.accept = ".json");
  function t() {
    return new Promise((o, n) => {
      I.onchange = () => P(this, null, function* () {
        const e = I.files;
        if (!e)
          return o(null);
        const s = e.item(0);
        return o(s ? { text: yield s.text(), file: s } : null);
      }), I.oncancel = () => o(null), I.onerror = n, I.click();
    });
  }
  return t;
}
function _e(t) {
  return P(this, null, function* () {
    try {
      const n = yield ge()();
      if (!n)
        return;
      const { text: e, file: s } = n;
      Ct(t, JSON.parse(e)), m(`Global state imported from "${s.name}".`);
    } catch (o) {
      m("Failed to import the state from JSON. Check the console for more details.", "error"), console.error(o);
    }
  });
}
function Ct(t, o) {
  for (const n in o) {
    const e = t.state.value[n];
    e ? Object.assign(e, o[n]) : t.state.value[n] = o[n];
  }
}
function N(t) {
  return {
    _custom: {
      display: t
    }
  };
}
const Lt = "🍍 Pinia (root)", Y = "_root";
function me(t) {
  return ft(t) ? {
    id: Y,
    label: Lt
  } : {
    id: t.$id,
    label: t.$id
  };
}
function ye(t) {
  if (ft(t)) {
    const n = Array.from(t._s.keys()), e = t._s;
    return {
      state: n.map((i) => ({
        editable: !0,
        key: i,
        value: t.state.value[i]
      })),
      getters: n.filter((i) => e.get(i)._getters).map((i) => {
        const a = e.get(i);
        return {
          editable: !1,
          key: i,
          value: a._getters.reduce((r, u) => (r[u] = a[u], r), {})
        };
      })
    };
  }
  const o = {
    state: Object.keys(t.$state).map((n) => ({
      editable: !0,
      key: n,
      value: t.$state[n]
    }))
  };
  return t._getters && t._getters.length && (o.getters = t._getters.map((n) => ({
    editable: !1,
    key: n,
    value: t[n]
  }))), t._customProperties.size && (o.customProperties = Array.from(t._customProperties).map((n) => ({
    editable: !0,
    key: n,
    value: t[n]
  }))), o;
}
function Ee(t) {
  return t ? Array.isArray(t) ? t.reduce((o, n) => (o.keys.push(n.key), o.operations.push(n.type), o.oldValue[n.key] = n.oldValue, o.newValue[n.key] = n.newValue, o), {
    oldValue: {},
    keys: [],
    operations: [],
    newValue: {}
  }) : {
    operation: N(t.type),
    key: N(t.key),
    oldValue: t.oldValue,
    newValue: t.newValue
  } : {};
}
function be(t) {
  switch (t) {
    case w.direct:
      return "mutation";
    case w.patchFunction:
      return "$patch";
    case w.patchObject:
      return "$patch";
    default:
      return "unknown";
  }
}
let U = !0;
const X = [], D = "pinia:mutations", y = "pinia", { assign: Se } = Object, q = (t) => "🍍 " + t;
function Rt(t, o) {
  Vt({
    id: "dev.esm.pinia",
    label: "Pinia 🍍",
    logo: "https://pinia.vuejs.org/logo.svg",
    packageName: "pinia",
    homepage: "https://pinia.vuejs.org",
    componentStateTypes: X,
    app: t
  }, (n) => {
    typeof n.now != "function" && m("You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."), n.addTimelineLayer({
      id: D,
      label: "Pinia 🍍",
      color: 15064968
    }), n.addInspector({
      id: y,
      label: "Pinia 🍍",
      icon: "storage",
      treeFilterPlaceholder: "Search stores",
      actions: [
        {
          icon: "content_copy",
          action: () => {
            de(o);
          },
          tooltip: "Serialize and copy the state"
        },
        {
          icon: "content_paste",
          action: () => P(this, null, function* () {
            yield he(o), n.sendInspectorTree(y), n.sendInspectorState(y);
          }),
          tooltip: "Replace the state with the content of your clipboard"
        },
        {
          icon: "save",
          action: () => {
            pe(o);
          },
          tooltip: "Save the state as a JSON file"
        },
        {
          icon: "folder_open",
          action: () => P(this, null, function* () {
            yield _e(o), n.sendInspectorTree(y), n.sendInspectorState(y);
          }),
          tooltip: "Import the state from a JSON file"
        }
      ],
      nodeActions: [
        {
          icon: "restore",
          tooltip: 'Reset the state (with "$reset")',
          action: (e) => {
            const s = o._s.get(e);
            s ? typeof s.$reset != "function" ? m(`Cannot reset "${e}" store because it doesn't have a "$reset" method implemented.`, "warn") : (s.$reset(), m(`Store "${e}" reset.`)) : m(`Cannot reset "${e}" store because it wasn't found.`, "warn");
          }
        }
      ]
    }), n.on.inspectComponent((e, s) => {
      const i = e.componentInstance && e.componentInstance.proxy;
      if (i && i._pStores) {
        const a = e.componentInstance.proxy._pStores;
        Object.values(a).forEach((r) => {
          e.instanceData.state.push({
            type: q(r.$id),
            key: "state",
            editable: !0,
            value: r._isOptionsAPI ? {
              _custom: {
                value: F(r.$state),
                actions: [
                  {
                    icon: "restore",
                    tooltip: "Reset the state of this store",
                    action: () => r.$reset()
                  }
                ]
              }
            } : (
              // NOTE: workaround to unwrap transferred refs
              Object.keys(r.$state).reduce((u, h) => (u[h] = r.$state[h], u), {})
            )
          }), r._getters && r._getters.length && e.instanceData.state.push({
            type: q(r.$id),
            key: "getters",
            editable: !1,
            value: r._getters.reduce((u, h) => {
              try {
                u[h] = r[h];
              } catch (_) {
                u[h] = _;
              }
              return u;
            }, {})
          });
        });
      }
    }), n.on.getInspectorTree((e) => {
      if (e.app === t && e.inspectorId === y) {
        let s = [o];
        s = s.concat(Array.from(o._s.values())), e.rootNodes = (e.filter ? s.filter((i) => "$id" in i ? i.$id.toLowerCase().includes(e.filter.toLowerCase()) : Lt.toLowerCase().includes(e.filter.toLowerCase())) : s).map(me);
      }
    }), globalThis.$pinia = o, n.on.getInspectorState((e) => {
      if (e.app === t && e.inspectorId === y) {
        const s = e.nodeId === Y ? o : o._s.get(e.nodeId);
        if (!s)
          return;
        s && (e.nodeId !== Y && (globalThis.$store = F(s)), e.state = ye(s));
      }
    }), n.on.editInspectorState((e, s) => {
      if (e.app === t && e.inspectorId === y) {
        const i = e.nodeId === Y ? o : o._s.get(e.nodeId);
        if (!i)
          return m(`store "${e.nodeId}" not found`, "error");
        const { path: a } = e;
        ft(i) ? a.unshift("state") : (a.length !== 1 || !i._customProperties.has(a[0]) || a[0] in i.$state) && a.unshift("$state"), U = !1, e.set(i, a, e.state.value), U = !0;
      }
    }), n.on.editComponentState((e) => {
      if (e.type.startsWith("🍍")) {
        const s = e.type.replace(/^🍍\s*/, ""), i = o._s.get(s);
        if (!i)
          return m(`store "${s}" not found`, "error");
        const { path: a } = e;
        if (a[0] !== "state")
          return m(`Invalid path for store "${s}":
${a}
Only state can be modified.`);
        a[0] = "$state", U = !1, e.set(i, a, e.state.value), U = !0;
      }
    });
  });
}
function ve(t, o) {
  X.includes(q(o.$id)) || X.push(q(o.$id)), Vt({
    id: "dev.esm.pinia",
    label: "Pinia 🍍",
    logo: "https://pinia.vuejs.org/logo.svg",
    packageName: "pinia",
    homepage: "https://pinia.vuejs.org",
    componentStateTypes: X,
    app: t,
    settings: {
      logStoreChanges: {
        label: "Notify about new/deleted stores",
        type: "boolean",
        defaultValue: !0
      }
      // useEmojis: {
      //   label: 'Use emojis in messages ⚡️',
      //   type: 'boolean',
      //   defaultValue: true,
      // },
    }
  }, (n) => {
    const e = typeof n.now == "function" ? n.now.bind(n) : Date.now;
    o.$onAction(({ after: a, onError: r, name: u, args: h }) => {
      const _ = kt++;
      n.addTimelineEvent({
        layerId: D,
        event: {
          time: e(),
          title: "🛫 " + u,
          subtitle: "start",
          data: {
            store: N(o.$id),
            action: N(u),
            args: h
          },
          groupId: _
        }
      }), a((g) => {
        T = void 0, n.addTimelineEvent({
          layerId: D,
          event: {
            time: e(),
            title: "🛬 " + u,
            subtitle: "end",
            data: {
              store: N(o.$id),
              action: N(u),
              args: h,
              result: g
            },
            groupId: _
          }
        });
      }), r((g) => {
        T = void 0, n.addTimelineEvent({
          layerId: D,
          event: {
            time: e(),
            logType: "error",
            title: "💥 " + u,
            subtitle: "end",
            data: {
              store: N(o.$id),
              action: N(u),
              args: h,
              error: g
            },
            groupId: _
          }
        });
      });
    }, !0), o._customProperties.forEach((a) => {
      wt(() => Xt(o[a]), (r, u) => {
        n.notifyComponentUpdate(), n.sendInspectorState(y), U && n.addTimelineEvent({
          layerId: D,
          event: {
            time: e(),
            title: "Change",
            subtitle: a,
            data: {
              newValue: r,
              oldValue: u
            },
            groupId: T
          }
        });
      }, { deep: !0 });
    }), o.$subscribe(({ events: a, type: r }, u) => {
      if (n.notifyComponentUpdate(), n.sendInspectorState(y), !U)
        return;
      const h = {
        time: e(),
        title: be(r),
        data: Se({ store: N(o.$id) }, Ee(a)),
        groupId: T
      };
      r === w.patchFunction ? h.subtitle = "⤵️" : r === w.patchObject ? h.subtitle = "🧩" : a && !Array.isArray(a) && (h.subtitle = a.type), a && (h.data["rawEvent(s)"] = {
        _custom: {
          display: "DebuggerEvent",
          type: "object",
          tooltip: "raw DebuggerEvent[]",
          value: a
        }
      }), n.addTimelineEvent({
        layerId: D,
        event: h
      });
    }, { detached: !0, flush: "sync" });
    const s = o._hotUpdate;
    o._hotUpdate = A((a) => {
      s(a), n.addTimelineEvent({
        layerId: D,
        event: {
          time: e(),
          title: "🔥 " + o.$id,
          subtitle: "HMR update",
          data: {
            store: N(o.$id),
            info: N("HMR update")
          }
        }
      }), n.notifyComponentUpdate(), n.sendInspectorTree(y), n.sendInspectorState(y);
    });
    const { $dispose: i } = o;
    o.$dispose = () => {
      i(), n.notifyComponentUpdate(), n.sendInspectorTree(y), n.sendInspectorState(y), n.getSettings().logStoreChanges && m(`Disposed "${o.$id}" store 🗑`);
    }, n.notifyComponentUpdate(), n.sendInspectorTree(y), n.sendInspectorState(y), n.getSettings().logStoreChanges && m(`"${o.$id}" store installed 🆕`);
  });
}
let kt = 0, T;
function yt(t, o, n) {
  const e = o.reduce((s, i) => (s[i] = F(t)[i], s), {});
  for (const s in e)
    t[s] = function() {
      const i = kt, a = n ? new Proxy(t, {
        get(...u) {
          return T = i, Reflect.get(...u);
        },
        set(...u) {
          return T = i, Reflect.set(...u);
        }
      }) : t;
      T = i;
      const r = e[s].apply(a, arguments);
      return T = void 0, r;
    };
}
function Oe({ app: t, store: o, options: n }) {
  if (!o.$id.startsWith("__hot:")) {
    if (o._isOptionsAPI = !!n.state, !o._p._testing) {
      yt(o, Object.keys(n.actions), o._isOptionsAPI);
      const e = o._hotUpdate;
      F(o)._hotUpdate = function(s) {
        e.apply(this, arguments), yt(o, Object.keys(s._hmrPayload.actions), !!o._isOptionsAPI);
      };
    }
    ve(
      t,
      // FIXME: is there a way to allow the assignment from Store<Id, S, G, A> to StoreGeneric?
      o
    );
  }
}
function Ne() {
  const t = Nt(!0), o = t.run(() => ut({}));
  let n = [], e = [];
  const s = A({
    install(i) {
      j(s), s._a = i, i.provide(Z, s), i.config.globalProperties.$pinia = s, f.NODE_ENV !== "production" && f.NODE_ENV !== "test" && $ && Rt(i, s), e.forEach((a) => n.push(a)), e = [];
    },
    use(i) {
      return !this._a && !Ot ? e.push(i) : n.push(i), this;
    },
    _p: n,
    // it's actually undefined here
    // @ts-expect-error
    _a: null,
    _e: t,
    _s: /* @__PURE__ */ new Map(),
    state: o
  });
  return f.NODE_ENV !== "production" && f.NODE_ENV !== "test" && $ && typeof Proxy != "undefined" && s.use(Oe), s;
}
function we(t) {
  t._e.stop(), t._s.clear(), t._p.splice(0), t.state.value = {}, t._a = null;
}
const $e = (t) => typeof t == "function" && typeof t.$id == "string";
function Ut(t, o) {
  for (const n in o) {
    const e = o[n];
    if (!(n in t))
      continue;
    const s = t[n];
    x(s) && x(e) && !H(e) && !K(e) ? t[n] = Ut(s, e) : t[n] = e;
  }
  return t;
}
function Pe(t, o) {
  return f.NODE_ENV === "production" ? () => {
  } : (n) => {
    const e = o.data.pinia || t._pinia;
    if (e) {
      o.data.pinia = e;
      for (const s in n) {
        const i = n[s];
        if ($e(i) && e._s.has(i.$id)) {
          const a = i.$id;
          if (a !== t.$id)
            return console.warn(`The id of the store changed from "${t.$id}" to "${a}". Reloading.`), o.invalidate();
          const r = e._s.get(a);
          if (!r) {
            console.log("[Pinia]: skipping hmr because store doesn't exist yet");
            return;
          }
          i(e, r);
        }
      }
    }
  };
}
const Ft = () => {
};
function Et(t, o, n, e = Ft) {
  t.push(o);
  const s = () => {
    const i = t.indexOf(o);
    i > -1 && (t.splice(i, 1), e());
  };
  return !n && qt() && Kt(s), s;
}
function R(t, ...o) {
  t.slice().forEach((n) => {
    n(...o);
  });
}
const Ie = (t) => t(), bt = Symbol(), st = Symbol();
function it(t, o) {
  t instanceof Map && o instanceof Map ? o.forEach((n, e) => t.set(e, n)) : t instanceof Set && o instanceof Set && o.forEach(t.add, t);
  for (const n in o) {
    if (!o.hasOwnProperty(n))
      continue;
    const e = o[n], s = t[n];
    x(s) && x(e) && t.hasOwnProperty(n) && !H(e) && !K(e) ? t[n] = it(s, e) : t[n] = e;
  }
  return t;
}
const Ht = f.NODE_ENV !== "production" ? Symbol("pinia:skipHydration") : (
  /* istanbul ignore next */
  Symbol()
);
function Ve(t) {
  return Object.defineProperty(t, Ht, {});
}
function Gt(t) {
  return !x(t) || !t.hasOwnProperty(Ht);
}
const { assign: O } = Object;
function St(t) {
  return !!(H(t) && t.effect);
}
function vt(t, o, n, e) {
  const { state: s, actions: i, getters: a } = o, r = n.state.value[t];
  let u;
  function h() {
    !r && (f.NODE_ENV === "production" || !e) && (n.state.value[t] = s ? s() : {});
    const _ = f.NODE_ENV !== "production" && e ? (
      // use ref() to unwrap refs inside state TODO: check if this is still necessary
      _t(ut(s ? s() : {}).value)
    ) : _t(n.state.value[t]);
    return O(_, i, Object.keys(a || {}).reduce((g, E) => (f.NODE_ENV !== "production" && E in _ && console.warn(`[🍍]: A getter cannot have the same name as another state property. Rename one of them. Found with "${E}" in store "${t}".`), g[E] = A(ct(() => {
      j(n);
      const b = n._s.get(t);
      return a[E].call(b, b);
    })), g), {}));
  }
  return u = at(t, h, o, n, e, !0), u;
}
function at(t, o, n = {}, e, s, i) {
  let a;
  const r = O({ actions: {} }, n);
  if (f.NODE_ENV !== "production" && !e._e.active)
    throw new Error("Pinia destroyed");
  const u = { deep: !0 };
  f.NODE_ENV !== "production" && !Ot && (u.onTrigger = (l) => {
    h ? b = l : h == !1 && !d._hotUpdating && (Array.isArray(b) ? b.push(l) : console.error("🍍 debuggerEvents should be an array. This is most likely an internal Pinia bug."));
  });
  let h, _, g = [], E = [], b;
  const C = e.state.value[t];
  !i && !C && (f.NODE_ENV === "production" || !s) && (e.state.value[t] = {});
  const tt = ut({});
  let dt;
  function ht(l) {
    let c;
    h = _ = !1, f.NODE_ENV !== "production" && (b = []), typeof l == "function" ? (l(e.state.value[t]), c = {
      type: w.patchFunction,
      storeId: t,
      events: b
    }) : (it(e.state.value[t], l), c = {
      type: w.patchObject,
      payload: l,
      storeId: t,
      events: b
    });
    const p = dt = Symbol();
    gt().then(() => {
      dt === p && (h = !0);
    }), _ = !0, R(g, c, e.state.value[t]);
  }
  const Jt = i ? function() {
    const { state: c } = n, p = c ? c() : {};
    this.$patch((S) => {
      O(S, p);
    });
  } : (
    /* istanbul ignore next */
    f.NODE_ENV !== "production" ? () => {
      throw new Error(`🍍: Store "${t}" is built using the setup syntax and does not implement $reset().`);
    } : Ft
  );
  function Bt() {
    a.stop(), g = [], E = [], e._s.delete(t);
  }
  const et = (l, c = "") => {
    if (bt in l)
      return l[st] = c, l;
    const p = function() {
      j(e);
      const S = Array.from(arguments), G = [], nt = [];
      function Qt(v) {
        G.push(v);
      }
      function zt(v) {
        nt.push(v);
      }
      R(E, {
        args: S,
        name: p[st],
        store: d,
        after: Qt,
        onError: zt
      });
      let M;
      try {
        M = l.apply(this && this.$id === t ? this : d, S);
      } catch (v) {
        throw R(nt, v), v;
      }
      return M instanceof Promise ? M.then((v) => (R(G, v), v)).catch((v) => (R(nt, v), Promise.reject(v))) : (R(G, M), M);
    };
    return p[bt] = !0, p[st] = c, p;
  }, W = /* @__PURE__ */ A({
    actions: {},
    getters: {},
    state: [],
    hotState: tt
  }), pt = {
    _p: e,
    // _s: scope,
    $id: t,
    $onAction: Et.bind(null, E),
    $patch: ht,
    $reset: Jt,
    $subscribe(l, c = {}) {
      const p = Et(g, l, c.detached, () => S()), S = a.run(() => wt(() => e.state.value[t], (G) => {
        (c.flush === "sync" ? _ : h) && l({
          storeId: t,
          type: w.direct,
          events: b
        }, G);
      }, O({}, u, c)));
      return p;
    },
    $dispose: Bt
  }, d = Yt(f.NODE_ENV !== "production" || f.NODE_ENV !== "production" && f.NODE_ENV !== "test" && $ ? O(
    {
      _hmrPayload: W,
      _customProperties: A(/* @__PURE__ */ new Set())
      // devtools custom properties
    },
    pt
    // must be added later
    // setupStore
  ) : pt);
  e._s.set(t, d);
  const V = (e._a && e._a.runWithContext || Ie)(() => e._e.run(() => (a = Nt()).run(() => o({ action: et }))));
  for (const l in V) {
    const c = V[l];
    if (H(c) && !St(c) || K(c))
      f.NODE_ENV !== "production" && s ? J(tt.value, l, B(V, l)) : i || (C && Gt(c) && (H(c) ? c.value = C[l] : it(c, C[l])), e.state.value[t][l] = c), f.NODE_ENV !== "production" && W.state.push(l);
    else if (typeof c == "function") {
      const p = f.NODE_ENV !== "production" && s ? c : et(c, l);
      V[l] = p, f.NODE_ENV !== "production" && (W.actions[l] = c), r.actions[l] = c;
    } else f.NODE_ENV !== "production" && St(c) && (W.getters[l] = i ? (
      // @ts-expect-error
      n.getters[l]
    ) : c, $ && (V._getters || // @ts-expect-error: same
    (V._getters = A([]))).push(l));
  }
  if (O(d, V), O(F(d), V), Object.defineProperty(d, "$state", {
    get: () => f.NODE_ENV !== "production" && s ? tt.value : e.state.value[t],
    set: (l) => {
      if (f.NODE_ENV !== "production" && s)
        throw new Error("cannot set hotState");
      ht((c) => {
        O(c, l);
      });
    }
  }), f.NODE_ENV !== "production" && (d._hotUpdate = A((l) => {
    d._hotUpdating = !0, l._hmrPayload.state.forEach((c) => {
      if (c in d.$state) {
        const p = l.$state[c], S = d.$state[c];
        typeof p == "object" && x(p) && x(S) ? Ut(p, S) : l.$state[c] = S;
      }
      J(d, c, B(l.$state, c));
    }), Object.keys(d.$state).forEach((c) => {
      c in l.$state || ot(d, c);
    }), h = !1, _ = !1, e.state.value[t] = B(l._hmrPayload, "hotState"), _ = !0, gt().then(() => {
      h = !0;
    });
    for (const c in l._hmrPayload.actions) {
      const p = l[c];
      J(d, c, et(p, c));
    }
    for (const c in l._hmrPayload.getters) {
      const p = l._hmrPayload.getters[c], S = i ? (
        // special handling of options api
        ct(() => (j(e), p.call(d, d)))
      ) : p;
      J(d, c, S);
    }
    Object.keys(d._hmrPayload.getters).forEach((c) => {
      c in l._hmrPayload.getters || ot(d, c);
    }), Object.keys(d._hmrPayload.actions).forEach((c) => {
      c in l._hmrPayload.actions || ot(d, c);
    }), d._hmrPayload = l._hmrPayload, d._getters = l._getters, d._hotUpdating = !1;
  })), f.NODE_ENV !== "production" && f.NODE_ENV !== "test" && $) {
    const l = {
      writable: !0,
      configurable: !0,
      // avoid warning on devtools trying to display this property
      enumerable: !1
    };
    ["_p", "_hmrPayload", "_getters", "_customProperties"].forEach((c) => {
      Object.defineProperty(d, c, O({ value: d[c] }, l));
    });
  }
  return e._p.forEach((l) => {
    if (f.NODE_ENV !== "production" && f.NODE_ENV !== "test" && $) {
      const c = a.run(() => l({
        store: d,
        app: e._a,
        pinia: e,
        options: r
      }));
      Object.keys(c || {}).forEach((p) => d._customProperties.add(p)), O(d, c);
    } else
      O(d, a.run(() => l({
        store: d,
        app: e._a,
        pinia: e,
        options: r
      })));
  }), f.NODE_ENV !== "production" && d.$state && typeof d.$state == "object" && typeof d.$state.constructor == "function" && !d.$state.constructor.toString().includes("[native code]") && console.warn(`[🍍]: The "state" must be a plain object. It cannot be
	state: () => new MyClass()
Found in store "${d.$id}".`), C && i && n.hydrate && n.hydrate(d.$state, C), h = !0, _ = !0, d;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Te(t, o, n) {
  let e, s;
  const i = typeof o == "function";
  if (typeof t == "string")
    e = t, s = i ? n : o;
  else if (s = t, e = t.id, f.NODE_ENV !== "production" && typeof e != "string")
    throw new Error('[🍍]: "defineStore()" must be passed a store id as its first argument.');
  function a(r, u) {
    const h = Pt();
    if (r = // in test mode, ignore the argument provided as we can always retrieve a
    // pinia instance with getActivePinia()
    (f.NODE_ENV === "test" && k && k._testing ? null : r) || (h ? $t(Z, null) : null), r && j(r), f.NODE_ENV !== "production" && !k)
      throw new Error(`[🍍]: "getActivePinia()" was called but there was no active Pinia. Are you trying to use a store before calling "app.use(pinia)"?
See https://pinia.vuejs.org/core-concepts/outside-component-usage.html for help.
This will fail in production.`);
    r = k, r._s.has(e) || (i ? at(e, o, s, r) : vt(e, s, r), f.NODE_ENV !== "production" && (a._pinia = r));
    const _ = r._s.get(e);
    if (f.NODE_ENV !== "production" && u) {
      const g = "__hot:" + e, E = i ? at(g, o, s, r, !0) : vt(g, O({}, s), r, !0);
      u._hotUpdate(E), delete r.state.value[g], r._s.delete(g);
    }
    if (f.NODE_ENV !== "production" && $) {
      const g = Zt();
      if (g && g.proxy && // avoid adding stores that are just built for hot module replacement
      !u) {
        const E = g.proxy, b = "_pStores" in E ? E._pStores : E._pStores = {};
        b[e] = _;
      }
    }
    return _;
  }
  return a.$id = e, a;
}
let Mt = "Store";
function De(t) {
  Mt = t;
}
function Ae(...t) {
  return f.NODE_ENV !== "production" && Array.isArray(t[0]) && (console.warn(`[🍍]: Directly pass all stores to "mapStores()" without putting them in an array:
Replace
	mapStores([useAuthStore, useCartStore])
with
	mapStores(useAuthStore, useCartStore)
This will fail in production if not fixed.`), t = t[0]), t.reduce((o, n) => (o[n.$id + Mt] = function() {
    return n(this.$pinia);
  }, o), {});
}
function Wt(t, o) {
  return Array.isArray(o) ? o.reduce((n, e) => (n[e] = function() {
    return t(this.$pinia)[e];
  }, n), {}) : Object.keys(o).reduce((n, e) => (n[e] = function() {
    const s = t(this.$pinia), i = o[e];
    return typeof i == "function" ? i.call(this, s) : (
      // @ts-expect-error: FIXME: should work?
      s[i]
    );
  }, n), {});
}
const je = Wt;
function xe(t, o) {
  return Array.isArray(o) ? o.reduce((n, e) => (n[e] = function(...s) {
    return t(this.$pinia)[e](...s);
  }, n), {}) : Object.keys(o).reduce((n, e) => (n[e] = function(...s) {
    return t(this.$pinia)[o[e]](...s);
  }, n), {});
}
function Ce(t, o) {
  return Array.isArray(o) ? o.reduce((n, e) => (n[e] = {
    get() {
      return t(this.$pinia)[e];
    },
    set(s) {
      return t(this.$pinia)[e] = s;
    }
  }, n), {}) : Object.keys(o).reduce((n, e) => (n[e] = {
    get() {
      return t(this.$pinia)[o[e]];
    },
    set(s) {
      return t(this.$pinia)[o[e]] = s;
    }
  }, n), {});
}
function Le(t) {
  {
    const o = F(t), n = {};
    for (const e in o) {
      const s = o[e];
      s.effect ? n[e] = // ...
      ct({
        get: () => t[e],
        set(i) {
          t[e] = i;
        }
      }) : (H(s) || K(s)) && (n[e] = // ---
      B(t, e));
    }
    return n;
  }
}
const Re = function(t) {
  t.mixin({
    beforeCreate() {
      const o = this.$options;
      if (o.pinia) {
        const n = o.pinia;
        if (!this._provided) {
          const e = {};
          Object.defineProperty(this, "_provided", {
            get: () => e,
            set: (s) => Object.assign(e, s)
          });
        }
        this._provided[Z] = n, this.$pinia || (this.$pinia = n), n._a = this, $ && j(n), f.NODE_ENV !== "production" && f.NODE_ENV !== "test" && $ && Rt(n._a, n);
      } else !this.$pinia && o.parent && o.parent.$pinia && (this.$pinia = o.parent.$pinia);
    },
    destroyed() {
      delete this._pStores;
    }
  });
}, Ge = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get MutationType() {
    return w;
  },
  PiniaVuePlugin: Re,
  acceptHMRUpdate: Pe,
  createPinia: Ne,
  defineStore: Te,
  disposePinia: we,
  getActivePinia: ae,
  mapActions: xe,
  mapGetters: je,
  mapState: Wt,
  mapStores: Ae,
  mapWritableState: Ce,
  setActivePinia: j,
  setMapStoreSuffix: De,
  shouldHydrate: Gt,
  skipHydrate: Ve,
  storeToRefs: Le
}, Symbol.toStringTag, { value: "Module" }));
export {
  Ne as c,
  Te as d,
  Ge as p,
  Le as s
};
