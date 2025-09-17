import {
  ne
} from "./chunk-AQEPC7HU.js";
import {
  computed,
  defineComponent,
  getCurrentInstance,
  h,
  onMounted,
  onUnmounted,
  ref,
  watch
} from "./chunk-YUH2BBWQ.js";
import "./chunk-FM7WUVZV.js";

// node_modules/@voerkai18n/vue/dist/index.mjs
function B(s) {
  let { default: a = "", tagName: n, class: i = "vt-msg", style: t, loading: g } = Object.assign({}, s), m = !!g;
  return function(o) {
    return defineComponent({ name: "VoerkaI18nTranslate", props: { id: { type: String }, message: { type: [String, Function] }, vars: { type: [String, Number, Array, Boolean, Object], default: () => [] }, options: { type: Object, default: () => ({}) }, tag: { type: String }, default: { type: String, default: "" } }, setup: (e, { slots: v }) => {
      let { message: h$1, id: l } = e, u = typeof l == "string" && l.length > 0, f = ref(u ? v.default && v.default() : typeof e.message == "function" ? e.default || a : o.translate(h$1, e.vars, e.options)), p = ref(false), C = typeof e.message == "function" || u, y = ref(false), I = e.tag || n, V = o.getMessageId(e.message), P = async () => {
        if (l) {
          let r = o.activeParagraphs[l];
          if (!r) return;
          p.value = true;
          try {
            let c = await ne(r);
            f.value = c;
          } catch (c) {
            console.error(c);
          } finally {
            p.value = false;
          }
        }
      }, k = async (r) => {
        let c = typeof e.message == "function" ? () => e.message(r, e.vars, e.options) : () => e.message, L = await Promise.resolve(c());
        f.value = o.translate(L, e.vars, e.options);
      }, T = (r) => {
        u ? P() : k(r);
      }, b = o.on("change", T);
      return !y.value && (typeof e.message == "function" || u) && (T(o.activeLanguage), y.value = true), onUnmounted(() => {
        b.off();
      }), watch(() => [e.id, e.message, e.vars, e.options], () => k(o.activeLanguage)), function() {
        if (I || u) {
          let r = { class: i, style: Object.assign({ position: "relative" }, t) };
          return V && (r["data-id"] = V), l && (r["data-id"] = l), o.library && (r["data-scope"] = o.$id), h(I || "div", r, [f.value, C && m && p.value ? g : null]);
        } else return f.value;
      };
    } });
  };
}
function z(s) {
  let a = globalThis.VoerkaI18n, n = s || a.scope;
  if (!a || !n) throw new Error("VoerkaI18n is not defined");
  let i = ref(a.activeLanguage), t;
  return onMounted(() => {
    t = a.on("change", () => {
      i.value = a.activeLanguage;
    });
  }), onUnmounted(() => t && t.off()), { manager: a, scope: n, activeLanguage: i, defaultLanguage: n.defaultLanguage, languages: n.languages, changeLanguage: n.change, t: (...g) => (i.value, n.t.apply(n, g)) };
}
var J = { install: (s, a) => {
  let { i18nScope: n } = Object.assign({ i18nScope: void 0 }, a), i = globalThis.VoerkaI18n, t = n || i.scope;
  if (!i || !t) throw new Error("VoerkaI18n is not installed");
  let g = ref(t.activeLanguage);
  t.on("change", () => {
    g.value = t.activeLanguage;
  }), s.config.globalProperties.$activeLanguage = g, s.config.globalProperties.t = function(m, ...o) {
    return g.value, t.t(m, ...o);
  }, s.component("Translate", t.Translate);
} };
function W() {
  return (s) => (a) => {
    let n = getCurrentInstance();
    return computed(() => (n == null ? void 0 : n.appContext.config.globalProperties.$activeLanguage.value, s.t(a)));
  };
}
export {
  B as createTranslateComponent,
  W as createTranslateTransform,
  J as i18nPlugin,
  z as useVoerkaI18n
};
//# sourceMappingURL=@voerkai18n_vue.js.map
