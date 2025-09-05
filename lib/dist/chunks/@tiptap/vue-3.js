var p = Object.defineProperty, h = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var s = Object.getOwnPropertySymbols;
var m = Object.prototype.hasOwnProperty, g = Object.prototype.propertyIsEnumerable;
var a = (o, e, t) => e in o ? p(o, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[e] = t, u = (o, e) => {
  for (var t in e || (e = {}))
    m.call(e, t) && a(o, t, e[t]);
  if (s)
    for (var t of s(e))
      g.call(e, t) && a(o, t, e[t]);
  return o;
}, l = (o, e) => h(o, f(e));
import { d as x, D as S, f as E, E as C, k as w, G as b, H as N, I as d, J as P, j as R, K as _, L as k } from "../vue.js";
import { e as j } from "./extension-color.js";
function c(o) {
  return k((e, t) => ({
    get() {
      return e(), o;
    },
    set(n) {
      o = n, requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          t();
        });
      });
    }
  }));
}
class q extends j {
  constructor(e = {}) {
    return super(e), this.contentComponent = null, this.appContext = null, this.reactiveState = c(this.view.state), this.reactiveExtensionStorage = c(this.extensionStorage), this.on("beforeTransaction", ({ nextState: t }) => {
      this.reactiveState.value = t, this.reactiveExtensionStorage.value = this.extensionStorage;
    }), _(this);
  }
  get state() {
    return this.reactiveState ? this.reactiveState.value : this.view.state;
  }
  get storage() {
    return this.reactiveExtensionStorage ? this.reactiveExtensionStorage.value : super.storage;
  }
  /**
   * Register a ProseMirror plugin.
   */
  registerPlugin(e, t) {
    const n = super.registerPlugin(e, t);
    return this.reactiveState && (this.reactiveState.value = n), n;
  }
  /**
   * Unregister a ProseMirror plugin.
   */
  unregisterPlugin(e) {
    const t = super.unregisterPlugin(e);
    return this.reactiveState && t && (this.reactiveState.value = t), t;
  }
}
const F = x({
  name: "EditorContent",
  props: {
    editor: {
      default: null,
      type: Object
    }
  },
  setup(o) {
    const e = E(), t = N();
    return C(() => {
      const n = o.editor;
      n && n.options.element && e.value && w(() => {
        if (!e.value || !n.options.element.firstChild)
          return;
        const i = b(e.value);
        e.value.append(...n.options.element.childNodes), n.contentComponent = t.ctx._, t && (n.appContext = l(u({}, t.appContext), {
          // Vue internally uses prototype chain to forward/shadow injects across the entire component chain
          // so don't use object spread operator or 'Object.assign' and just set `provides` as is on editor's appContext
          // @ts-expect-error forward instance's 'provides' into appContext
          provides: t.provides
        })), n.setOptions({
          element: i
        }), n.createNodeViews();
      });
    }), d(() => {
      const n = o.editor;
      n && (n.contentComponent = null, n.appContext = null);
    }), { rootEl: e };
  },
  render() {
    return S("div", {
      ref: (o) => {
        this.rootEl = o;
      }
    });
  }
}), I = (o = {}) => {
  const e = P();
  return R(() => {
    e.value = new q(o);
  }), d(() => {
    var t, n, i;
    const r = (t = e.value) === null || t === void 0 ? void 0 : t.options.element, v = r == null ? void 0 : r.cloneNode(!0);
    (n = r == null ? void 0 : r.parentNode) === null || n === void 0 || n.replaceChild(v, r), (i = e.value) === null || i === void 0 || i.destroy();
  }), e;
};
export {
  F as E,
  I as u
};
