var H = (e, u, i) => new Promise((s, r) => {
  var w = (t) => {
    try {
      l(i.next(t));
    } catch (b) {
      r(b);
    }
  }, _ = (t) => {
    try {
      l(i.throw(t));
    } catch (b) {
      r(b);
    }
  }, l = (t) => t.done ? s(t.value) : Promise.resolve(t.value).then(w, _);
  l((i = i.apply(e, u)).next());
});
import { d as ee, m as N, c as v, s as f, F as x, b as R, n as $, p as O, T as ne, f as p, g as j, i as I, k as q, u as te, a as ae, v as ie, o as c, x as K, y as V, z as D, l as S, A as z, B as T, C as _e, t as L } from "../vue.js";
const U = function(e) {
  let u = Array.isArray(e) ? [] : {};
  if (e && typeof e == "object")
    for (let i in e)
      e.hasOwnProperty(i) && (e[i] && typeof e[i] == "object" ? u[i] = U(e[i]) : u[i] = e[i]);
  return u;
};
var y = ee({
  name: "MouseMenu",
  props: {
    appendToBody: {
      type: Boolean,
      default: !0
    },
    menuWidth: {
      type: Number,
      default: 200
    },
    menuList: {
      type: Array,
      required: !0
    },
    menuHiddenFn: {
      type: Function
    },
    hasIcon: {
      type: Boolean,
      default: !1
    },
    iconType: {
      type: String,
      default: "font-icon"
    },
    menuWrapperCss: Object,
    menuItemCss: Object,
    el: {
      type: Object,
      required: !0
    },
    params: {
      type: [String, Number, Array, Object]
    },
    useLongPressInMobile: Boolean,
    longPressDuration: Number,
    longPressPreventDefault: [Function, Boolean],
    injectCloseListener: {
      type: Boolean,
      default: !0
    },
    customClass: String,
    disabled: {
      type: Function
    }
  },
  emits: ["open", "close"],
  setup(e, { emit: u }) {
    const i = p(0), s = p(0), r = p(!1), w = p(0), _ = p(0), l = p(!1), t = p(null), b = p([]), F = j(() => e.menuList.some((a) => a.children && a.children.length > 0)), k = p(10), g = p();
    I(l, (a) => H(this, null, function* () {
      var o, d;
      if (a) {
        yield q();
        let m = g.value;
        e.menuWrapperCss && Object.keys(e.menuWrapperCss).map((h) => {
          m.style.setProperty(`--menu-${h}`, e.menuWrapperCss && e.menuWrapperCss[h]);
        }), e.menuItemCss && Object.keys(e.menuItemCss).map((h) => {
          m.style.setProperty(`--menu-item-${h}`, e.menuItemCss && e.menuItemCss[h]);
        });
        let n = (d = (o = e.menuItemCss) == null ? void 0 : o.arrowSize) == null ? void 0 : d.match(/\d+/);
        n ? k.value = ~~n[0] || 10 : k.value = 10, m.style.setProperty("--menu-item-arrowRealSize", k.value / 2 + "px"), u("open", e.params, t.value, e.el);
      } else
        u("close", e.params, t.value, e.el);
    }));
    const G = (a, o) => {
      a.disabled || (a.fn && typeof a.fn == "function" && a.fn(e.params, t.value, e.el, o), l.value = !1);
    }, J = (a, o) => {
      a.disabled || (a.fn && typeof a.fn == "function" && !a.disabled && (a.fn(e.params, t.value, e.el, o), r.value = !1), l.value = !1);
    }, Q = (a, o) => {
      if (o.children && !o.disabled) {
        r.value = !0;
        const d = a.currentTarget;
        if (!d)
          return;
        const { offsetWidth: m } = d, n = d.querySelector(".__menu__sub__wrapper");
        if (!n)
          return;
        const { offsetWidth: h, offsetHeight: C } = n, { innerWidth: Z, innerHeight: A } = window, { top: E, left: W } = d.getBoundingClientRect();
        W + m + h > Z - 5 ? i.value = W - h + 5 : i.value = W + m, E + C > A - 5 ? s.value = A - C : s.value = E + 5;
      }
    }, P = (a, o, d, m) => a.map((n) => (n.children && (n.children = P(n.children, o, d, m)), n.label && typeof n.label == "function" && (n.label = n.label(m, o, d)), n.tips && typeof n.tips == "function" && (n.tips = n.tips(m, o, d)), n.icon && typeof n.icon == "function" && (n.icon = n.icon(m, o, d)), n.hidden && typeof n.hidden == "function" && (n.hidden = n.hidden(m, o, d)), n.disabled && typeof n.disabled == "function" && (n.disabled = n.disabled(m, o, d)), n)), X = (a = 0, o = 0) => H(this, null, function* () {
      if (t.value = document.elementFromPoint(a - 1, o - 1), e.menuHiddenFn ? l.value = !e.menuHiddenFn(e.params, t.value, e.el) : l.value = !0, !l.value)
        return;
      b.value = U(e.menuList), b.value = P(b.value, t.value, e.el, e.params), yield q();
      const { innerWidth: d, innerHeight: m } = window, h = g.value.offsetHeight, C = e.menuWidth || 200;
      _.value = a + C + 1 > d ? d - C - 5 : a + 1, w.value = o + h + 1 > m ? m - h - 5 : o + 1;
    }), Y = () => {
      l.value = !1;
    }, M = j(() => e.useLongPressInMobile && "ontouchstart" in window ? "touchstart" : "mousedown"), B = (a) => {
      g.value && !g.value.contains(a.currentTarget) && (l.value = !1, document.oncontextmenu = null);
    };
    return I(() => e.injectCloseListener, (a) => {
      a ? document.addEventListener(M.value, B) : document.removeEventListener(M.value, B);
    }, {
      immediate: !0
    }), te(() => {
      document.removeEventListener(M.value, B);
    }), {
      subLeft: i,
      subTop: s,
      hoverFlag: r,
      menuTop: w,
      menuLeft: _,
      showMenu: l,
      clickDomEl: t,
      calcMenuList: b,
      arrowSize: k,
      hasSubMenu: F,
      MenuWrapper: g,
      handleMenuItemClick: G,
      handleSubMenuItemClick: J,
      handleMenuMouseEnter: Q,
      show: X,
      close: Y,
      clickEventKey: M
    };
  }
});
const oe = ["onMouseenter"], ue = {
  key: 0,
  class: "__menu__item-icon"
}, se = ["innerHTML"], re = { class: "__menu__item-label" }, de = { class: "__menu__item-tips" }, le = { class: "__menu__item-arrow-after" }, me = { class: "__menu__sub__item-label" }, ce = { class: "__menu__sub__item-tips" };
function ve(e, u, i, s, r, w) {
  return c(), N(ne, {
    to: "body",
    disabled: !e.appendToBody
  }, [
    e.showMenu ? (c(), v(
      "div",
      {
        key: 0,
        ref: "MenuWrapper",
        class: O(["__menu__wrapper", e.customClass]),
        style: $({ width: `${e.menuWidth}px`, top: `${e.menuTop}px`, left: `${e.menuLeft}px` })
      },
      [
        (c(!0), v(
          x,
          null,
          R(e.calcMenuList, (_, l) => (c(), v(
            x,
            null,
            [
              !_.hidden && !_.line ? (c(), v("div", K({
                key: l,
                class: ["__menu__item", _.disabled && "disabled", _.customClass]
              }, {
                [D(e.clickEventKey)]: V((t) => e.handleMenuItemClick(_, t), ["stop"])
              }, {
                onMouseenter: (t) => e.handleMenuMouseEnter(t, _)
              }), [
                e.hasIcon ? (c(), v("div", ue, [
                  e.iconType === "font-icon" ? z((c(), v(
                    "i",
                    {
                      key: 0,
                      class: O(_.icon)
                    },
                    null,
                    2
                    /* CLASS */
                  )), [
                    [T, _.icon]
                  ]) : e.iconType === "svg-icon" ? z((c(), v("div", {
                    key: 1,
                    class: "__menu__item-icon-svg",
                    innerHTML: _.icon
                  }, null, 8, se)), [
                    [T, _.icon]
                  ]) : e.iconType === "vnode-icon" ? (c(), N(_e(_.icon), { key: 2 })) : f("v-if", !0)
                ])) : f("v-if", !0),
                S(
                  "span",
                  re,
                  L(_.label),
                  1
                  /* TEXT */
                ),
                S(
                  "span",
                  de,
                  L(_.tips || ""),
                  1
                  /* TEXT */
                ),
                e.hasSubMenu ? (c(), v(
                  "span",
                  {
                    key: 1,
                    class: O(["__menu__item-arrow", { show: e.hasSubMenu && _.children }]),
                    style: $({ width: e.arrowSize + "px", height: e.arrowSize + "px" })
                  },
                  [
                    z(S(
                      "span",
                      le,
                      null,
                      512
                      /* NEED_PATCH */
                    ), [
                      [T, e.hasSubMenu && _.children]
                    ])
                  ],
                  6
                  /* CLASS, STYLE */
                )) : f("v-if", !0),
                _.children && _.children.length > 0 ? z((c(), v(
                  "div",
                  {
                    key: 2,
                    class: "__menu__sub__wrapper",
                    style: $({ top: `${e.subTop}px`, left: `${e.subLeft}px` })
                  },
                  [
                    (c(!0), v(
                      x,
                      null,
                      R(_.children, (t, b) => (c(), v(
                        x,
                        null,
                        [
                          !t.hidden && !t.line ? (c(), v(
                            "div",
                            K({
                              key: b,
                              class: ["__menu__sub__item", t.disabled && "disabled", t.customClass]
                            }, {
                              [D(e.clickEventKey)]: V((F) => e.handleSubMenuItemClick(t, F), ["stop"])
                            }),
                            [
                              S(
                                "span",
                                me,
                                L(t.label),
                                1
                                /* TEXT */
                              ),
                              S(
                                "span",
                                ce,
                                L(t.tips || ""),
                                1
                                /* TEXT */
                              )
                            ],
                            16
                            /* FULL_PROPS */
                          )) : f("v-if", !0),
                          t.line ? (c(), v("div", {
                            key: b,
                            class: "__menu__line"
                          })) : f("v-if", !0)
                        ],
                        64
                        /* STABLE_FRAGMENT */
                      ))),
                      256
                      /* UNKEYED_FRAGMENT */
                    ))
                  ],
                  4
                  /* STYLE */
                )), [
                  [T, e.hoverFlag]
                ]) : f("v-if", !0)
              ], 16, oe)) : f("v-if", !0),
              !_.hidden && _.line ? (c(), v("div", {
                key: l,
                class: "__menu__line"
              })) : f("v-if", !0)
            ],
            64
            /* STABLE_FRAGMENT */
          ))),
          256
          /* UNKEYED_FRAGMENT */
        ))
      ],
      6
      /* CLASS, STYLE */
    )) : f("v-if", !0)
  ], 8, ["disabled"]);
}
function be(e, u) {
  u === void 0 && (u = {});
  var i = u.insertAt;
  if (typeof document != "undefined") {
    var s = document.head || document.getElementsByTagName("head")[0], r = document.createElement("style");
    r.type = "text/css", i === "top" && s.firstChild ? s.insertBefore(r, s.firstChild) : s.appendChild(r), r.styleSheet ? r.styleSheet.cssText = e : r.appendChild(document.createTextNode(e));
  }
}
var he = `.__menu__mask[data-v-3d21bc0a] {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 999;
}
.__menu__wrapper[data-v-3d21bc0a] {
  --menu-background: #c8f2f0;
  --menu-boxShadow: 0 1px 5px #888;
  --menu-padding: 5px 0;
  --menu-borderRadius: 0;
  --menu-item-height: 30px;
  --menu-item-padding: 0 10px;
  --menu-item-iconSize: 20px;
  --menu-item-iconFontSize: 14px;
  --menu-item-iconColor: #484852;
  --menu-item-labelColor: #484852;
  --menu-item-labelFontSize: 14px;
  --menu-item-tipsColor: #889;
  --menu-item-tipsFontSize: 12px;
  --menu-item-arrowColor: #484852;
  --menu-item-disabledColor: #bcc;
  --menu-item-hoverBackground: rgba(255, 255, 255, 0.8);
  --menu-item-hoverIconColor: inherit;
  --menu-item-hoverLabelColor: inherit;
  --menu-item-hoverTipsColor: inherit;
  --menu-item-hoverArrowColor: inherit;
  --menu-lineColor: #ccc;
  --menu-lineMargin: 5px 0;
}
.__menu__wrapper[data-v-3d21bc0a] {
  position: fixed;
  width: 200px;
  background: var(--menu-background);
  box-shadow: var(--menu-boxShadow);
  padding: var(--menu-padding);
  border-radius: var(--menu-borderRadius);
  z-index: 99999;
}
.__menu__line[data-v-3d21bc0a],
.__menu__sub__line[data-v-3d21bc0a] {
  border-top: 1px solid var(--menu-lineColor);
  margin: var(--menu-lineMargin);
}
.__menu__item[data-v-3d21bc0a],
.__menu__sub__item[data-v-3d21bc0a] {
  display: flex;
  height: var(--menu-item-height);
  align-items: center;
  cursor: pointer;
  padding: var(--menu-item-padding);
}
.__menu__item .__menu__item-icon[data-v-3d21bc0a],
.__menu__sub__item .__menu__item-icon[data-v-3d21bc0a] {
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--menu-item-iconColor);
  width: var(--menu-item-iconSize);
  height: var(--menu-item-iconSize);
}
.__menu__item .__menu__item-icon i[data-v-3d21bc0a],
.__menu__sub__item .__menu__item-icon i[data-v-3d21bc0a] {
  font-size: var(--menu-item-iconFontSize);
}
.__menu__item .__menu__item-icon .__menu__item-icon-svg[data-v-3d21bc0a],
.__menu__sub__item .__menu__item-icon .__menu__item-icon-svg[data-v-3d21bc0a] {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}
.__menu__item .__menu__item-label[data-v-3d21bc0a],
.__menu__item .__menu__sub__item-label[data-v-3d21bc0a],
.__menu__sub__item .__menu__item-label[data-v-3d21bc0a],
.__menu__sub__item .__menu__sub__item-label[data-v-3d21bc0a] {
  width: 100%;
  max-height: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
  font-size: var(--menu-item-labelFontSize);
  color: var(--menu-item-labelColor);
  margin-right: 5px;
  overflow: hidden;
}
.__menu__item .__menu__item-tips[data-v-3d21bc0a],
.__menu__item .__menu__sub__item-tips[data-v-3d21bc0a],
.__menu__sub__item .__menu__item-tips[data-v-3d21bc0a],
.__menu__sub__item .__menu__sub__item-tips[data-v-3d21bc0a] {
  font-size: var(--menu-item-tipsFontSize);
  color: var(--menu-item-tipsColor);
}
.__menu__item .__menu__item-arrow[data-v-3d21bc0a],
.__menu__sub__item .__menu__item-arrow[data-v-3d21bc0a] {
  width: 10px;
  height: 10px;
  margin-left: 5px;
  position: relative;
}
.__menu__item.disabled[data-v-3d21bc0a],
.__menu__sub__item.disabled[data-v-3d21bc0a] {
  cursor: not-allowed;
}
.__menu__item.disabled .__menu__item-icon[data-v-3d21bc0a],
.__menu__item.disabled .__menu__item-label[data-v-3d21bc0a],
.__menu__item.disabled .__menu__sub__item-label[data-v-3d21bc0a],
.__menu__item.disabled .__menu__item-tips[data-v-3d21bc0a],
.__menu__item.disabled .__menu__sub__item-tips[data-v-3d21bc0a],
.__menu__sub__item.disabled .__menu__item-icon[data-v-3d21bc0a],
.__menu__sub__item.disabled .__menu__item-label[data-v-3d21bc0a],
.__menu__sub__item.disabled .__menu__sub__item-label[data-v-3d21bc0a],
.__menu__sub__item.disabled .__menu__item-tips[data-v-3d21bc0a],
.__menu__sub__item.disabled .__menu__sub__item-tips[data-v-3d21bc0a] {
  color: var(--menu-item-disabledColor);
}
.__menu__item.disabled .__menu__item-arrow .__menu__item-arrow-after[data-v-3d21bc0a],
.__menu__sub__item.disabled .__menu__item-arrow .__menu__item-arrow-after[data-v-3d21bc0a] {
  border-left: var(--menu-item-arrowRealSize) solid var(--menu-item-disabledColor);
}
.__menu__item[data-v-3d21bc0a]:not(.disabled):hover {
  background: var(--menu-item-hoverBackground);
}
.__menu__item:not(.disabled):hover .__menu__item-icon[data-v-3d21bc0a] {
  color: var(--menu-item-hoverIconColor);
}
.__menu__item:not(.disabled):hover .__menu__item-label[data-v-3d21bc0a] {
  color: var(--menu-item-hoverLabelColor);
}
.__menu__item:not(.disabled):hover .__menu__item-tips[data-v-3d21bc0a] {
  color: var(--menu-item-hoverTipsColor);
}
.__menu__item:not(.disabled):hover .__menu__item-arrow[data-v-3d21bc0a] {
  color: var(--menu-item-hoverArrowColor);
}
.__menu__sub__item[data-v-3d21bc0a]:not(.disabled):hover {
  background: var(--menu-item-hoverBackground);
}
.__menu__sub__item:not(.disabled):hover .__menu__sub__item-label[data-v-3d21bc0a] {
  color: var(--menu-item-hoverLabelColor);
}
.__menu__sub__item:not(.disabled):hover .__menu__sub__item-tips[data-v-3d21bc0a] {
  color: var(--menu-item-hoverTipsColor);
}
.__menu__item-icon[data-v-3d21bc0a] {
  width: 20px;
  height: 20px;
  text-align: center;
  line-height: 20px;
  margin-right: 4px;
}
.__menu__item-arrow.show .__menu__item-arrow-after[data-v-3d21bc0a] {
  position: absolute;
  width: 0;
  height: 0;
  left: 8px;
  border-left: var(--menu-item-arrowRealSize) solid var(--menu-item-arrowColor);
  border-top: var(--menu-item-arrowRealSize) solid transparent;
  border-bottom: var(--menu-item-arrowRealSize) solid transparent;
}
.__menu__sub__wrapper[data-v-3d21bc0a] {
  position: fixed;
  visibility: hidden;
  width: 200px;
  background: var(--menu-background);
  box-shadow: var(--menu-boxShadow);
  padding: var(--menu-padding);
  border-radius: var(--menu-borderRadius);
}
.__menu__item:hover .__menu__sub__wrapper[data-v-3d21bc0a] {
  visibility: visible;
}`;
be(he);
y.render = ve;
y.__scopeId = "data-v-3d21bc0a";
y.__file = "packages/mouse-menu/mouse-menu.vue";
function pe(e, u, i) {
  let s = document.createElement(e);
  return s.setAttribute("class", u), s;
}
y.install = (e) => {
  e.component(y.name, y);
};
function we(e) {
  var r;
  const u = "__mouse__menu__container";
  let i;
  document.querySelector(`.${u}`) ? i = document.querySelector(`.${u}`) : i = pe("div", u);
  const s = ae(y, e);
  return ie(s, i), document.body.appendChild(i), (r = s.component) == null ? void 0 : r.proxy;
}
export {
  we as C
};
