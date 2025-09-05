var O = Object.defineProperty;
var C = Object.getOwnPropertySymbols;
var S = Object.prototype.hasOwnProperty, $ = Object.prototype.propertyIsEnumerable;
var T = (s, t, i) => t in s ? O(s, t, { enumerable: !0, configurable: !0, writable: !0, value: i }) : s[t] = i, u = (s, t) => {
  for (var i in t || (t = {}))
    S.call(t, i) && T(s, i, t[i]);
  if (C)
    for (var i of C(t))
      $.call(t, i) && T(s, i, t[i]);
  return s;
};
var I = Object.defineProperty, X = (s, t, i) => t in s ? I(s, t, { enumerable: !0, configurable: !0, writable: !0, value: i }) : s[t] = i, h = (s, t, i) => (X(s, typeof t != "symbol" ? t + "" : t, i), i);
function L(s, t, i = !1) {
  const e = {}, o = window.getComputedStyle(s);
  return t.map((n) => {
    let r = o[n];
    if (i) {
      const l = r.match(/\d+/);
      l && (r = ~~l[0]);
    }
    e[n] = r;
  }), e;
}
class Y {
  constructor({ el: t, options: i }) {
    h(this, "el"), h(this, "isTouch"), h(this, "isDrag"), h(this, "parent"), h(this, "left", 0), h(this, "top", 0), h(this, "right", 0), h(this, "bottom", 0), h(this, "width", 0), h(this, "height", 0), h(this, "maxX", 0), h(this, "maxY", 0), h(this, "needComputeAdsorb", !0), h(this, "options"), h(this, "scrollbarWidth"), h(this, "startX", 0), h(this, "startY", 0), h(this, "getScrollbarWidth", () => {
      const e = document.createElement("div");
      e.style.cssText = "width:100px;height:100px;overflow-y:scroll", document.body.appendChild(e);
      const o = e.offsetWidth - e.clientWidth;
      return document.body.removeChild(e), o;
    }), h(this, "setBetween", (e, o, n) => e < o ? o : e > n ? n : e), h(this, "borderInfo", [0, 0, 0, 0]), this.el = t instanceof HTMLElement ? t : document.querySelector(t), this.scrollbarWidth = this.getScrollbarWidth(), this.isTouch = "ontouchstart" in document.documentElement, this.isDrag = !1, this.options = u({
      moveCursor: !0,
      adsorb: 0,
      adsorbOffset: 0,
      transitionDuration: 400,
      transitionTimingFunction: "ease-in-out",
      forbidBodyScroll: !0,
      isAbsolute: !1,
      positionMode: 1,
      needComputeBorder: !0
    }, i), this.parent = this.options.parentSelector && document.querySelector(this.options.parentSelector) || this.el.parentNode, this.options.transitionDuration && (this.options.transitionDuration = this.options.transitionDuration / 1e3), this.handleTouchStart = this.handleTouchStart.bind(this), this.handleMousedown = this.handleMousedown.bind(this), this.moveEvent = this.moveEvent.bind(this), this.endEvent = this.endEvent.bind(this), this.init();
  }
  init() {
    this.isTouch ? this.el.addEventListener("touchstart", this.handleTouchStart) : this.el.addEventListener("mousedown", this.handleMousedown), this.options.moveCursor && (this.el.style.cursor = "move"), this.setPosition(), this.setLimit(), this.handleAdsorb(), this.handlePositionMode(), setTimeout(() => {
      this.emitEvent("todraginit");
    });
  }
  handleMousedown(t) {
    if (typeof this.options.disabled == "function" && this.options.disabled())
      return;
    const { x: i, y: e } = t;
    this.setStartInfo(i, e, t), document.addEventListener("mousemove", this.moveEvent), document.addEventListener("mouseup", this.endEvent);
  }
  handleTouchStart(t) {
    if (typeof this.options.disabled == "function" && this.options.disabled())
      return;
    const i = this.isTouch ? t.changedTouches[0].clientX : t.x, e = this.isTouch ? t.changedTouches[0].clientY : t.y;
    this.setStartInfo(i, e, t), document.addEventListener("touchmove", this.moveEvent, { passive: !1 }), document.addEventListener("touchend", this.endEvent);
  }
  setPosition() {
    const { left: t, top: i, width: e, height: o } = this.el.getBoundingClientRect();
    this.left = t, this.top = i, this.width = e, this.height = o, this.options.isAbsolute ? (this.maxX = this.parent.offsetWidth - this.width, this.maxY = this.parent.offsetHeight - this.height) : (this.maxX = document.body.scrollWidth > window.innerWidth ? window.innerWidth - this.width - this.scrollbarWidth : window.innerWidth - this.width, this.maxY = document.body.scrollHeight > window.innerHeight ? window.innerHeight - this.height - this.scrollbarWidth : window.innerHeight - this.height);
  }
  setStartInfo(t, i, e) {
    this.needComputeAdsorb = !1, this.setPosition(), this.setLimit(), this.startX = t - this.left, this.startY = i - this.top, this.isDrag = !0, this.el.style.transition = "", document.body.style.userSelect = "none", this.options.forbidBodyScroll && (document.body.style.overflow = "hidden"), this.emitEvent("todragstart", e);
  }
  moveEvent(t) {
    if (!this.isDrag)
      return;
    t.preventDefault(), this.needComputeAdsorb = !0;
    let i, e;
    const o = this.isTouch ? t.changedTouches[0].clientX : t.x, n = this.isTouch ? t.changedTouches[0].clientY : t.y;
    if (!this.options.isAbsolute)
      i = o - this.startX, e = n - this.startY;
    else {
      const r = this.parent.getClientRects()[0];
      i = o - r.x - this.startX - this.borderInfo[1], e = n - r.y - this.startY - this.borderInfo[2];
    }
    this.left = this.setBetween(i, 0, this.maxX - this.borderInfo[1] - this.borderInfo[3]), this.top = this.setBetween(e, 0, this.maxY - this.borderInfo[2] - this.borderInfo[0]), this.el.style.left = this.left + "px", this.el.style.top = this.top + "px", this.emitEvent("todragmove", t);
  }
  endEvent(t) {
    this.isDrag = !1, document.removeEventListener("mousemove", this.moveEvent), document.removeEventListener("mouseup", this.endEvent), document.removeEventListener("touchmove", this.moveEvent), document.removeEventListener("touchend", this.endEvent), document.body.style.userSelect = "auto", this.options.forbidBodyScroll && (document.body.style.overflow = "visible"), this.handleAdsorb(), this.handlePositionMode(), this.emitEvent("todragend", t);
  }
  handleAdsorb() {
    if (!this.needComputeAdsorb)
      return;
    const t = [this.left + this.width / 2, this.top + this.height / 2];
    let i = 0, e = 0;
    if (this.options.isAbsolute) {
      const n = this.parent.getClientRects()[0];
      i = n.width, e = n.height;
    } else
      i = window.innerWidth, e = window.innerHeight;
    const o = [i, e];
    if (this.el.style.transition = `left ${this.options.transitionDuration}s ${this.options.transitionTimingFunction}, 
                                top ${this.options.transitionDuration}s ${this.options.transitionTimingFunction}`, this.options.adsorb === 1)
      t[0] <= i / 2 ? this.left = this.options.adsorbOffset : this.left = this.maxX - this.options.adsorbOffset - this.borderInfo[1] - this.borderInfo[3];
    else if (this.options.adsorb === 2) {
      const n = o[1] / o[0], r = o[1] / -o[0], l = t[1] / t[0], d = t[1] / (t[0] - o[0]);
      n >= l && r < d ? this.top = this.options.adsorbOffset : n >= l && r >= d ? this.left = this.maxX - this.options.adsorbOffset - this.borderInfo[1] - this.borderInfo[3] : n < l && r >= d ? this.top = this.maxY - this.options.adsorbOffset - this.borderInfo[2] - this.borderInfo[0] : this.left = this.options.adsorbOffset, this.options.adsorbOffset && (this.top === 0 && (this.top = this.options.adsorbOffset), this.top === this.maxY && (this.top = this.maxY - this.options.adsorbOffset), this.left === 0 && (this.left = this.options.adsorbOffset), this.left === this.maxX && (this.left = this.maxX - this.options.adsorbOffset));
    }
    this.el.style.left = this.left + "px", this.el.style.top = this.top + "px";
  }
  handlePositionMode() {
    if (this.options.adsorb)
      return;
    const t = this.options.isAbsolute ? this.el.offsetLeft : this.left, i = this.options.isAbsolute ? this.el.offsetTop : this.top;
    this.right = this.maxX - t - this.borderInfo[1] - this.borderInfo[3], this.bottom = this.maxY - i - this.borderInfo[2] - this.borderInfo[0], this.options.positionMode === 2 ? (this.el.style.left = "auto", this.el.style.right = this.right + "px") : this.options.positionMode === 3 ? (this.el.style.top = "auto", this.el.style.bottom = this.bottom + "px") : this.options.positionMode === 4 && (this.el.style.left = "auto", this.el.style.top = "auto", this.el.style.right = this.right + "px", this.el.style.bottom = this.bottom + "px");
  }
  emitEvent(t, i) {
    const e = document.createEvent("HTMLEvents");
    e.initEvent(t, !1, !1);
    const { left: o, top: n, right: r, bottom: l, width: d, height: c, maxX: f, maxY: x } = this;
    e.left = o, e.top = n, e.width = d, e.height = c, e.maxX = f, e.maxY = x, e.right = r, e.bottom = l, i && (e.sourceEvent = i), this.el.dispatchEvent(e);
  }
  destroy() {
    this.isTouch ? this.el.removeEventListener("touchstart", this.handleTouchStart) : this.el.removeEventListener("mousedown", this.handleMousedown);
  }
  // [top, right, bottom, left]
  setLimit() {
    if (!this.options.isAbsolute || !this.options.needComputeBorder)
      return;
    const t = ["top", "right", "bottom", "left"], i = L(this.parent, [
      ...t.map((e) => `border-${e}-width`)
    ], !0);
    this.borderInfo = t.map((e) => i[`border-${e}-width`]);
  }
}
var M = Object.defineProperty, W = (s, t, i) => t in s ? M(s, t, { enumerable: !0, configurable: !0, writable: !0, value: i }) : s[t] = i, a = (s, t, i) => (W(s, typeof t != "symbol" ? t + "" : t, i), i);
class A extends Y {
  constructor({ el: t, options: i }) {
    super({
      el: t,
      options: u({
        adsorb: 0,
        adsorbOffset: 0,
        isAbsolute: !1,
        positionMode: 1
      }, i)
    }), a(this, "arrowCtx", null), a(this, "controlOptions"), a(this, "arrowStartX", 0), a(this, "arrowStartY", 0), a(this, "elWidth", 0), a(this, "elHeight", 0), a(this, "resizeFlag", !1), a(this, "arrowMouseDownEvent", (e) => {
      if (typeof this.controlOptions.disabled == "function" && this.controlOptions.disabled())
        return;
      const o = this.isTouch ? e.changedTouches[0].clientX : e.x, n = this.isTouch ? e.changedTouches[0].clientY : e.y, { width: r, height: l, left: d, top: c } = this.el.getBoundingClientRect(), { width: f, height: x } = this.parent.getBoundingClientRect();
      this.arrowStartX = o, this.arrowStartY = n, this.elWidth = r, this.elHeight = l, this.resizeFlag = !0;
      let p, m;
      this.controlOptions.isAbsolute ? (p = f - this.el.offsetLeft - this.borderInfo[1] - this.borderInfo[3], m = x - this.el.offsetTop - this.borderInfo[0] - this.borderInfo[2]) : (p = window.innerWidth - d, m = window.innerHeight - c), setTimeout(() => {
        this.isDrag = !1;
      }), this.el.style.left = `${this.controlOptions.isAbsolute ? this.el.offsetLeft : d}px`, this.el.style.top = `${this.controlOptions.isAbsolute ? this.el.offsetTop : c}px`, this.el.style.right = "auto", this.el.style.bottom = "auto", this.emitControlEvent("tocontrolstart"), this.isTouch ? (document.ontouchmove = (b) => {
        if (!this.resizeFlag || !b.changedTouches)
          return;
        const { clientX: y, clientY: E } = b.changedTouches[0];
        this.el.style.width = `${Math.min(this.elWidth + y - this.arrowStartX, p)}px`, this.el.style.height = `${Math.min(this.elHeight + E - this.arrowStartY, m)}px`, this.emitControlEvent("tocontrolmove");
      }, document.ontouchend = () => {
        this.setPosition(), this.resizeFlag = !1, document.ontouchmove = null, document.ontouchend = null, this.emitControlEvent("tocontrolend");
      }) : (document.onmousemove = (b) => {
        if (!this.resizeFlag)
          return;
        const { x: y, y: E } = b;
        this.el.style.width = `${Math.min(this.elWidth + y - this.arrowStartX, p)}px`, this.el.style.height = `${Math.min(this.elHeight + E - this.arrowStartY, m)}px`, this.emitControlEvent("tocontrolmove");
      }, document.onmouseup = () => {
        this.setPosition(), this.resizeFlag = !1, document.onmousemove = null, document.onmouseup = null, this.emitControlEvent("tocontrolend");
      });
    }), this.controlOptions = i || {}, this.initControl();
  }
  initControl() {
    var t;
    this.arrowCtx = this.createResizeArrow((t = this.controlOptions) == null ? void 0 : t.arrowOptions), this.el.appendChild(this.arrowCtx);
  }
  updateArrow() {
    var t;
    this.arrowCtx && this.el.contains(this.arrowCtx) && this.el.removeChild(this.arrowCtx), this.arrowCtx = this.createResizeArrow((t = this.controlOptions) == null ? void 0 : t.arrowOptions), this.el.appendChild(this.arrowCtx);
  }
  createResizeArrow(t) {
    const i = typeof this.controlOptions.disabled == "function" && this.controlOptions.disabled(), e = u({
      size: 8,
      lineWidth: 2,
      lineColor: "#9a9a9a",
      padding: 2
    }, t), o = document.createElement("div");
    o.style.cssText = `
      position: absolute;
      right: 0; 
      bottom: 0;
      padding: ${e.padding}px;
      cursor: se-resize;
      background: ${e.background || "none"};
      display: ${i ? "none" : "block"}
    `, o.className = "to-control-arrow";
    const n = document.createElement("div");
    return n.style.cssText = `
      width: ${e.size}px;
      height: ${e.size}px;
      border-bottom: ${e.lineWidth}px solid ${e.lineColor};
      border-right: ${e.lineWidth}px solid ${e.lineColor};
    `, n.className = "to-control-arrow-inner", o.appendChild(n), this.isTouch ? o.addEventListener("touchstart", this.arrowMouseDownEvent) : o.addEventListener("mousedown", this.arrowMouseDownEvent), o;
  }
  destroyControl() {
    var t, i;
    this.destroy(), this.isTouch ? (t = this.arrowCtx) == null || t.removeEventListener("touchstart", this.arrowMouseDownEvent) : (i = this.arrowCtx) == null || i.removeEventListener("mousedown", this.arrowMouseDownEvent);
  }
  emitControlEvent(t) {
    const i = document.createEvent("HTMLEvents");
    i.initEvent(t, !1, !1);
    const { left: e, top: o, right: n, bottom: r, width: l, height: d, maxX: c, maxY: f } = this;
    i.left = e, i.top = o, i.width = l, i.height = d, i.maxX = c, i.maxY = f, i.right = n, i.bottom = r, this.el.dispatchEvent(i);
  }
}
const v = (s, t, i) => {
  const { value: e } = t, n = u(u({}, i || {}), e);
  s.$toControl = new A({
    el: s,
    options: n
  });
}, w = (s) => {
  s.$toControl && s.$toControl.updateArrow();
}, g = (s) => {
  s.$toControl && s.$toControl.destroy();
}, H = {
  mounted: (s, t) => v(s, t),
  unmounted: g,
  beforeUpdate: w,
  // @ts-ignore
  inserted: (s, t) => v(s, t),
  unbind: g,
  update: w,
  install: (s, t) => {
    s.directive("to-control", {
      mounted: (i, e) => v(i, e, t),
      unmounted: g,
      beforeUpdate: w,
      // @ts-ignore
      inserted: (i, e) => v(i, e, t),
      unbind: g,
      update: w
    });
  }
};
export {
  H as T
};
