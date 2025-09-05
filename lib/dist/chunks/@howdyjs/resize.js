var N = Object.defineProperty, A = Object.defineProperties;
var O = Object.getOwnPropertyDescriptors;
var S = Object.getOwnPropertySymbols;
var T = Object.prototype.hasOwnProperty, D = Object.prototype.propertyIsEnumerable;
var H = (o, e, t) => e in o ? N(o, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[e] = t, p = (o, e) => {
  for (var t in e || (e = {}))
    T.call(e, t) && H(o, t, e[t]);
  if (S)
    for (var t of S(e))
      D.call(e, t) && H(o, t, e[t]);
  return o;
}, P = (o, e) => A(o, O(e));
var R = Object.defineProperty, X = (o, e, t) => e in o ? R(o, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[e] = t, L = (o, e, t) => (X(o, typeof e != "symbol" ? e + "" : e, t), t);
class q {
  constructor({ el: e, options: t }) {
    L(this, "el"), L(this, "options"), L(this, "directionArr"), e instanceof HTMLElement ? this.el = e : this.el = document.querySelector(e), this.options = p({
      immediate: !1,
      direction: ["right"],
      scrollElSelector: null,
      lineColor: "#aab",
      lineWidth: 2,
      lineHoverColor: "#88f",
      lineHoverWidth: 4,
      tipLineColor: "#262626",
      tipLineWidth: 1,
      tipLineStyle: "dashed",
      zIndex: 999,
      needParentNodeOffset: !0
    }, t), this.directionArr = this.options.direction || ["right"], this.el.$resize = this;
  }
  init() {
    const { position: e } = getComputedStyle(this.el), { position: t } = getComputedStyle(this.el.parentNode);
    e === "static" && (this.el.style.position = "relative"), t === "static" && console.warn("[@howdyjs/resize] Element parentNode position can not be static!"), this.directionArr.map((i) => {
      if (this.options.immediate) {
        const n = this.createLineEl(i);
        this.el.appendChild(n);
      } else {
        const n = this.createDashedLineEl(i), r = this.createLineEl(i, n);
        this.el.appendChild(n), this.el.appendChild(r);
      }
    });
  }
  createDashedLineEl(e) {
    const { tipLineColor: t, tipLineWidth: i, tipLineStyle: n, zIndex: r } = this.options, u = document.createElement("div"), a = `position:absolute;z-index: ${r};visibility: hidden;`, $ = e === "left" || e === "right";
    return u.style.cssText = $ ? `${a};top:0;bottom: 0;${e}:0;border-${e}:${i}px ${n} ${t}` : `${a};left:0;right: 0;${e}:0;border-${e}:${i}px ${n} ${t}`, u.setAttribute("class", "resize__dashed-line"), u;
  }
  createLineEl(e, t) {
    const { immediate: i, lineColor: n, lineWidth: r, lineHoverColor: u, lineHoverWidth: a, zIndex: $ } = this.options, s = document.createElement("div"), C = `position: absolute;background: ${n};z-index: ${$}`, l = e === "left" || e === "right", v = e === "right" || e === "bottom";
    s.style.cssText = l ? `${C};width: ${r}px;top:0;bottom: 0;${e}: -${r / 2}px;cursor: col-resize;` : `${C};height: ${r}px;left:0;right: 0;${e}: -${r / 2}px;cursor: row-resize;`, s.mouseoverEvent = function() {
      s.style.background = u, s.style[l ? "width" : "height"] = `${a}px`, s.style[e] = `-${a / 2}px`;
    }, s.mouseoutEvent = function() {
      s.style.background = n, s.style[l ? "width" : "height"] = `${r}px`, s.style[e] = `-${r / 2}px`;
    };
    const c = this.el;
    return s.mousedownEvent = function(W) {
      const w = (c || W.target.parentNode).parentNode;
      let d;
      const g = l ? w.offsetWidth : w.offsetHeight;
      document.body.style.userSelect = "none";
      let x = !0;
      const _ = () => {
        const m = l ? c.offsetWidth : c.offsetHeight, z = l ? c.offsetLeft : c.offsetTop, y = v ? z + m + d : z + d, h = v ? m + d : m - d, f = document.createEvent("HTMLEvents");
        f.initEvent("resize", !1, !1), f.direction = e, f.moveOffset = y, f.moveOffsetPercent = y / g * 100, f[l ? "resizeWidth" : "resizeHeight"] = h, f[l ? "resizeWidthPercent" : "resizeHeightPercent"] = h / g * 100, c.dispatchEvent(f);
      };
      document.onmousemove = function(m) {
        m.preventDefault();
        const { x: z, y } = c.getBoundingClientRect(), h = l ? c.offsetWidth : c.offsetHeight, f = l ? c.offsetLeft : c.offsetTop;
        d = v ? l ? m.clientX - z - h : m.clientY - y - h : l ? m.clientX - z : m.clientY - y, x = v ? -d <= h && f + h + d <= g : d <= h && f + d >= 0, x && (i ? _() : t && (t.style.visibility = "visible", t.style[e] = `${v ? -d : d}px`));
      }, document.onmouseup = function() {
        document.onmousemove = null, document.onmouseup = null, document.body.style.userSelect = "auto", i || (t && (t.style.visibility = "hidden"), x && (_(), t && (t.style[e] = "0px")));
      };
    }, s.setAttribute("class", "resize__line"), s.addEventListener("mousemove", s.mouseoverEvent), s.addEventListener("mouseout", s.mouseoutEvent), s.addEventListener("mousedown", s.mousedownEvent), s;
  }
  destroy() {
    Array.prototype.slice.call(this.el.querySelectorAll(".resize__line")).forEach((t) => {
      t.mouseoverEvent && t.removeEventListener("mousemove", t.mouseoverEvent), t.mouseoutEvent && t.removeEventListener("mouseout", t.mouseoutEvent), t.mousedownEvent && t.removeEventListener("mousedown", t.mousedownEvent), t.parentNode && t.parentNode.removeChild(t);
    }), this.el.querySelectorAll(".resize__dashed-line").forEach((t) => {
      t.parentNode && t.parentNode.removeChild(t);
    });
  }
}
const b = (o, e, t) => {
  const { arg: i, value: n } = e, r = t || {};
  let u, a;
  i && (i === "all" ? u = ["top", "left", "bottom", "right"] : u = [i]), u ? a = P(p(p({}, r), n), {
    direction: u
  }) : a = p(p({}, r), n), new q({
    el: o,
    options: a
  }).init();
}, E = (o) => {
  o.$resize && o.$resize.destroy();
}, B = {
  mounted: (o, e) => b(o, e),
  unmounted: E,
  // @ts-ignore
  inserted: (o, e) => b(o, e),
  unbind: E,
  install: (o, e) => {
    o.directive("resize", {
      mounted: (t, i) => b(t, i, e),
      unmounted: E,
      // @ts-ignore
      inserted: (t, i) => b(t, i, e),
      unbind: E
    });
  }
};
export {
  q as C,
  B as R
};
