var y = (i, s, e) => new Promise((o, t) => {
  var l = (a) => {
    try {
      n(e.next(a));
    } catch (g) {
      t(g);
    }
  }, c = (a) => {
    try {
      n(e.throw(a));
    } catch (g) {
      t(g);
    }
  }, n = (a) => a.done ? o(a.value) : Promise.resolve(a.value).then(l, c);
  n((e = e.apply(i, s)).next());
});
import { d as O, g as C, f as v, j as $, u as S, i as x, D as B, H as E } from "../vue.js";
import { n as M } from "./runtime.js";
function D(i) {
  let { default: s = "", tagName: e, class: o = "vt-msg", style: t, loading: l } = Object.assign({}, i), c = !!l;
  return function(n) {
    return O({ name: "VoerkaI18nTranslate", props: { id: { type: String }, message: { type: [String, Function] }, vars: { type: [String, Number, Array, Boolean, Object], default: () => [] }, options: { type: Object, default: () => ({}) }, tag: { type: String }, default: { type: String, default: "" } }, setup: (a, { slots: g }) => {
      let { message: j, id: u } = a, f = typeof u == "string" && u.length > 0, d = v(f ? g.default && g.default() : typeof a.message == "function" ? a.default || s : n.translate(j, a.vars, a.options)), m = v(!1), k = typeof a.message == "function" || f, h = v(!1), b = a.tag || e, L = n.getMessageId(a.message), P = () => y(this, null, function* () {
        if (u) {
          let r = n.activeParagraphs[u];
          if (!r) return;
          m.value = !0;
          try {
            let p = yield M(r);
            d.value = p;
          } catch (p) {
            console.error(p);
          } finally {
            m.value = !1;
          }
        }
      }), I = (r) => y(this, null, function* () {
        let p = typeof a.message == "function" ? () => a.message(r, a.vars, a.options) : () => a.message, V = yield Promise.resolve(p());
        d.value = n.translate(V, a.vars, a.options);
      }), w = (r) => {
        f ? P() : I(r);
      }, T = n.on("change", w);
      return !h.value && (typeof a.message == "function" || f) && (w(n.activeLanguage), h.value = !0), S(() => {
        T.off();
      }), x(() => [a.id, a.message, a.vars, a.options], () => I(n.activeLanguage)), function() {
        if (b || f) {
          let r = { class: o, style: Object.assign({ position: "relative" }, t) };
          return L && (r["data-id"] = L), u && (r["data-id"] = u), n.library && (r["data-scope"] = n.$id), B(b || "div", r, [d.value, k && c && m.value ? l : null]);
        } else return d.value;
      };
    } });
  };
}
function F(i) {
  let s = globalThis.VoerkaI18n, e = s.scope;
  if (!s || !e) throw new Error("VoerkaI18n is not defined");
  let o = v(s.activeLanguage), t;
  return $(() => {
    t = s.on("change", () => {
      o.value = s.activeLanguage;
    });
  }), S(() => t && t.off()), { manager: s, scope: e, activeLanguage: o, defaultLanguage: e.defaultLanguage, languages: e.languages, changeLanguage: e.change, t: (...l) => (o.value, e.t.apply(e, l)) };
}
var H = { install: (i, s) => {
  let { i18nScope: e } = Object.assign({ i18nScope: void 0 }, s), o = globalThis.VoerkaI18n, t = e || o.scope;
  if (!o || !t) throw new Error("VoerkaI18n is not installed");
  let l = v(t.activeLanguage);
  t.on("change", () => {
    l.value = t.activeLanguage;
  }), i.config.globalProperties.$activeLanguage = l, i.config.globalProperties.t = function(c, ...n) {
    return l.value, t.t(c, ...n);
  }, i.component("Translate", t.Translate);
} };
function J() {
  return (i) => (s) => {
    let e = E();
    return C(() => (e == null || e.appContext.config.globalProperties.$activeLanguage.value, i.t(s)));
  };
}
export {
  D as B,
  H as J,
  J as W,
  F as z
};
