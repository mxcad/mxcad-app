import "./chunk-FM7WUVZV.js";

// node_modules/@howdyjs/to-drag/dist/index.es.js
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
function getComputedStyleList(el, names, formatToNumber = false) {
  const results = {};
  const styles = window.getComputedStyle(el);
  names.map((name) => {
    let result = styles[name];
    if (formatToNumber) {
      const match = result.match(/\d+/);
      if (match)
        result = ~~match[0];
    }
    results[name] = result;
  });
  return results;
}
var ToDrag = class {
  constructor({ el, options }) {
    __publicField(this, "el");
    __publicField(this, "isTouch");
    __publicField(this, "isDrag");
    __publicField(this, "parent");
    __publicField(this, "left", 0);
    __publicField(this, "top", 0);
    __publicField(this, "right", 0);
    __publicField(this, "bottom", 0);
    __publicField(this, "width", 0);
    __publicField(this, "height", 0);
    __publicField(this, "maxX", 0);
    __publicField(this, "maxY", 0);
    __publicField(this, "needComputeAdsorb", true);
    __publicField(this, "options");
    __publicField(this, "scrollbarWidth");
    __publicField(this, "startX", 0);
    __publicField(this, "startY", 0);
    __publicField(this, "getScrollbarWidth", () => {
      const el2 = document.createElement("div");
      el2.style.cssText = "width:100px;height:100px;overflow-y:scroll";
      document.body.appendChild(el2);
      const scrollbarWidth = el2.offsetWidth - el2.clientWidth;
      document.body.removeChild(el2);
      return scrollbarWidth;
    });
    __publicField(this, "setBetween", (num, min, max) => {
      if (num < min)
        return min;
      if (num > max)
        return max;
      return num;
    });
    __publicField(this, "borderInfo", [0, 0, 0, 0]);
    this.el = el instanceof HTMLElement ? el : document.querySelector(el);
    this.scrollbarWidth = this.getScrollbarWidth();
    this.isTouch = "ontouchstart" in document.documentElement;
    this.isDrag = false;
    this.options = {
      moveCursor: true,
      adsorb: 0,
      adsorbOffset: 0,
      transitionDuration: 400,
      transitionTimingFunction: "ease-in-out",
      forbidBodyScroll: true,
      isAbsolute: false,
      positionMode: 1,
      needComputeBorder: true,
      ...options
    };
    this.parent = this.options.parentSelector && document.querySelector(this.options.parentSelector) || this.el.parentNode;
    if (this.options.transitionDuration) {
      this.options.transitionDuration = this.options.transitionDuration / 1e3;
    }
    this.handleTouchStart = this.handleTouchStart.bind(this);
    this.handleMousedown = this.handleMousedown.bind(this);
    this.moveEvent = this.moveEvent.bind(this);
    this.endEvent = this.endEvent.bind(this);
    this.init();
  }
  init() {
    if (this.isTouch) {
      this.el.addEventListener("touchstart", this.handleTouchStart);
    } else {
      this.el.addEventListener("mousedown", this.handleMousedown);
    }
    if (this.options.moveCursor) {
      this.el.style.cursor = "move";
    }
    this.setPosition();
    this.setLimit();
    this.handleAdsorb();
    this.handlePositionMode();
    setTimeout(() => {
      this.emitEvent("todraginit");
    });
  }
  handleMousedown(e) {
    if (typeof this.options.disabled === "function" && this.options.disabled()) {
      return;
    }
    const { x, y } = e;
    this.setStartInfo(x, y, e);
    document.addEventListener("mousemove", this.moveEvent);
    document.addEventListener("mouseup", this.endEvent);
  }
  handleTouchStart(e) {
    if (typeof this.options.disabled === "function" && this.options.disabled()) {
      return;
    }
    const x = this.isTouch ? e.changedTouches[0].clientX : e.x;
    const y = this.isTouch ? e.changedTouches[0].clientY : e.y;
    this.setStartInfo(x, y, e);
    document.addEventListener("touchmove", this.moveEvent, { passive: false });
    document.addEventListener("touchend", this.endEvent);
  }
  setPosition() {
    const { left, top, width, height } = this.el.getBoundingClientRect();
    this.left = left;
    this.top = top;
    this.width = width;
    this.height = height;
    if (!this.options.isAbsolute) {
      this.maxX = document.body.scrollWidth > window.innerWidth ? window.innerWidth - this.width - this.scrollbarWidth : window.innerWidth - this.width;
      this.maxY = document.body.scrollHeight > window.innerHeight ? window.innerHeight - this.height - this.scrollbarWidth : window.innerHeight - this.height;
    } else {
      this.maxX = this.parent.offsetWidth - this.width;
      this.maxY = this.parent.offsetHeight - this.height;
    }
  }
  setStartInfo(x, y, e) {
    this.needComputeAdsorb = false;
    this.setPosition();
    this.setLimit();
    this.startX = x - this.left;
    this.startY = y - this.top;
    this.isDrag = true;
    this.el.style.transition = "";
    document.body.style.userSelect = "none";
    if (this.options.forbidBodyScroll) {
      document.body.style.overflow = "hidden";
    }
    this.emitEvent("todragstart", e);
  }
  moveEvent(e) {
    if (!this.isDrag) {
      return;
    }
    e.preventDefault();
    this.needComputeAdsorb = true;
    let dragX, dragY;
    const x = this.isTouch ? e.changedTouches[0].clientX : e.x;
    const y = this.isTouch ? e.changedTouches[0].clientY : e.y;
    if (!this.options.isAbsolute) {
      dragX = x - this.startX;
      dragY = y - this.startY;
    } else {
      const parentDomRect = this.parent.getClientRects()[0];
      dragX = x - parentDomRect.x - this.startX - this.borderInfo[1];
      dragY = y - parentDomRect.y - this.startY - this.borderInfo[2];
    }
    this.left = this.setBetween(dragX, 0, this.maxX - this.borderInfo[1] - this.borderInfo[3]);
    this.top = this.setBetween(dragY, 0, this.maxY - this.borderInfo[2] - this.borderInfo[0]);
    this.el.style.left = this.left + "px";
    this.el.style.top = this.top + "px";
    this.emitEvent("todragmove", e);
  }
  endEvent(e) {
    this.isDrag = false;
    document.removeEventListener("mousemove", this.moveEvent);
    document.removeEventListener("mouseup", this.endEvent);
    document.removeEventListener("touchmove", this.moveEvent);
    document.removeEventListener("touchend", this.endEvent);
    document.body.style.userSelect = "auto";
    if (this.options.forbidBodyScroll) {
      document.body.style.overflow = "visible";
    }
    this.handleAdsorb();
    this.handlePositionMode();
    this.emitEvent("todragend", e);
  }
  handleAdsorb() {
    if (!this.needComputeAdsorb)
      return;
    const endPoint = [this.left + this.width / 2, this.top + this.height / 2];
    let maxX = 0;
    let maxY = 0;
    if (this.options.isAbsolute) {
      const parentDomRect = this.parent.getClientRects()[0];
      maxX = parentDomRect.width;
      maxY = parentDomRect.height;
    } else {
      maxX = window.innerWidth;
      maxY = window.innerHeight;
    }
    const maxPoint = [maxX, maxY];
    this.el.style.transition = `left ${this.options.transitionDuration}s ${this.options.transitionTimingFunction}, 
                                top ${this.options.transitionDuration}s ${this.options.transitionTimingFunction}`;
    if (this.options.adsorb === 1) {
      if (endPoint[0] <= maxX / 2) {
        this.left = this.options.adsorbOffset;
      } else {
        this.left = this.maxX - this.options.adsorbOffset - this.borderInfo[1] - this.borderInfo[3];
      }
    } else if (this.options.adsorb === 2) {
      const k1 = maxPoint[1] / maxPoint[0];
      const k2 = maxPoint[1] / -maxPoint[0];
      const k3 = endPoint[1] / endPoint[0];
      const k4 = endPoint[1] / (endPoint[0] - maxPoint[0]);
      if (k1 >= k3 && k2 < k4) {
        this.top = this.options.adsorbOffset;
      } else if (k1 >= k3 && k2 >= k4) {
        this.left = this.maxX - this.options.adsorbOffset - this.borderInfo[1] - this.borderInfo[3];
      } else if (k1 < k3 && k2 >= k4) {
        this.top = this.maxY - this.options.adsorbOffset - this.borderInfo[2] - this.borderInfo[0];
      } else {
        this.left = this.options.adsorbOffset;
      }
      if (this.options.adsorbOffset) {
        if (this.top === 0) {
          this.top = this.options.adsorbOffset;
        }
        if (this.top === this.maxY) {
          this.top = this.maxY - this.options.adsorbOffset;
        }
        if (this.left === 0) {
          this.left = this.options.adsorbOffset;
        }
        if (this.left === this.maxX) {
          this.left = this.maxX - this.options.adsorbOffset;
        }
      }
    }
    this.el.style.left = this.left + "px";
    this.el.style.top = this.top + "px";
  }
  handlePositionMode() {
    if (this.options.adsorb)
      return;
    const left = this.options.isAbsolute ? this.el.offsetLeft : this.left;
    const top = this.options.isAbsolute ? this.el.offsetTop : this.top;
    this.right = this.maxX - left - this.borderInfo[1] - this.borderInfo[3];
    this.bottom = this.maxY - top - this.borderInfo[2] - this.borderInfo[0];
    if (this.options.positionMode === 2) {
      this.el.style.left = "auto";
      this.el.style.right = this.right + "px";
    } else if (this.options.positionMode === 3) {
      this.el.style.top = "auto";
      this.el.style.bottom = this.bottom + "px";
    } else if (this.options.positionMode === 4) {
      this.el.style.left = "auto";
      this.el.style.top = "auto";
      this.el.style.right = this.right + "px";
      this.el.style.bottom = this.bottom + "px";
    }
  }
  emitEvent(type, e) {
    const event = document.createEvent("HTMLEvents");
    event.initEvent(type, false, false);
    const { left, top, right, bottom, width, height, maxX, maxY } = this;
    event["left"] = left;
    event["top"] = top;
    event["width"] = width;
    event["height"] = height;
    event["maxX"] = maxX;
    event["maxY"] = maxY;
    event["right"] = right;
    event["bottom"] = bottom;
    if (e) {
      event["sourceEvent"] = e;
    }
    this.el.dispatchEvent(event);
  }
  destroy() {
    if (this.isTouch) {
      this.el.removeEventListener("touchstart", this.handleTouchStart);
    } else {
      this.el.removeEventListener("mousedown", this.handleMousedown);
    }
  }
  // [top, right, bottom, left]
  setLimit() {
    if (!this.options.isAbsolute || !this.options.needComputeBorder)
      return;
    const position = ["top", "right", "bottom", "left"];
    const borderInfo = getComputedStyleList(this.parent, [
      ...position.map((p) => `border-${p}-width`)
    ], true);
    this.borderInfo = position.map((p) => borderInfo[`border-${p}-width`]);
  }
};

// node_modules/@howdyjs/to-control/dist/index.es.js
var __defProp2 = Object.defineProperty;
var __defNormalProp2 = (obj, key, value) => key in obj ? __defProp2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField2 = (obj, key, value) => {
  __defNormalProp2(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
var ToControl = class extends ToDrag {
  constructor({ el, options }) {
    super({
      el,
      options: {
        adsorb: 0,
        adsorbOffset: 0,
        isAbsolute: false,
        positionMode: 1,
        ...options
      }
    });
    __publicField2(this, "arrowCtx", null);
    __publicField2(this, "controlOptions");
    __publicField2(this, "arrowStartX", 0);
    __publicField2(this, "arrowStartY", 0);
    __publicField2(this, "elWidth", 0);
    __publicField2(this, "elHeight", 0);
    __publicField2(this, "resizeFlag", false);
    __publicField2(this, "arrowMouseDownEvent", (e) => {
      if (typeof this.controlOptions.disabled === "function" && this.controlOptions.disabled()) {
        return;
      }
      const x = this.isTouch ? e.changedTouches[0].clientX : e.x;
      const y = this.isTouch ? e.changedTouches[0].clientY : e.y;
      const { width, height, left, top } = this.el.getBoundingClientRect();
      const { width: parentWidth, height: parentHeight } = this.parent.getBoundingClientRect();
      this.arrowStartX = x;
      this.arrowStartY = y;
      this.elWidth = width;
      this.elHeight = height;
      this.resizeFlag = true;
      let maxWidth, maxHeight;
      if (this.controlOptions.isAbsolute) {
        maxWidth = parentWidth - this.el.offsetLeft - this.borderInfo[1] - this.borderInfo[3];
        maxHeight = parentHeight - this.el.offsetTop - this.borderInfo[0] - this.borderInfo[2];
      } else {
        maxWidth = window.innerWidth - left;
        maxHeight = window.innerHeight - top;
      }
      setTimeout(() => {
        this.isDrag = false;
      });
      this.el.style.left = `${this.controlOptions.isAbsolute ? this.el.offsetLeft : left}px`;
      this.el.style.top = `${this.controlOptions.isAbsolute ? this.el.offsetTop : top}px`;
      this.el.style.right = "auto";
      this.el.style.bottom = "auto";
      this.emitControlEvent("tocontrolstart");
      if (this.isTouch) {
        document.ontouchmove = (e2) => {
          if (!this.resizeFlag || !e2.changedTouches)
            return;
          const { clientX: x2, clientY: y2 } = e2.changedTouches[0];
          this.el.style.width = `${Math.min(this.elWidth + x2 - this.arrowStartX, maxWidth)}px`;
          this.el.style.height = `${Math.min(this.elHeight + y2 - this.arrowStartY, maxHeight)}px`;
          this.emitControlEvent("tocontrolmove");
        };
        document.ontouchend = () => {
          this.setPosition();
          this.resizeFlag = false;
          document.ontouchmove = null;
          document.ontouchend = null;
          this.emitControlEvent("tocontrolend");
        };
      } else {
        document.onmousemove = (e2) => {
          if (!this.resizeFlag)
            return;
          const { x: x2, y: y2 } = e2;
          this.el.style.width = `${Math.min(this.elWidth + x2 - this.arrowStartX, maxWidth)}px`;
          this.el.style.height = `${Math.min(this.elHeight + y2 - this.arrowStartY, maxHeight)}px`;
          this.emitControlEvent("tocontrolmove");
        };
        document.onmouseup = () => {
          this.setPosition();
          this.resizeFlag = false;
          document.onmousemove = null;
          document.onmouseup = null;
          this.emitControlEvent("tocontrolend");
        };
      }
    });
    this.controlOptions = options || {};
    this.initControl();
  }
  initControl() {
    var _a;
    this.arrowCtx = this.createResizeArrow((_a = this.controlOptions) == null ? void 0 : _a.arrowOptions);
    this.el.appendChild(this.arrowCtx);
  }
  updateArrow() {
    var _a;
    if (this.arrowCtx && this.el.contains(this.arrowCtx)) {
      this.el.removeChild(this.arrowCtx);
    }
    this.arrowCtx = this.createResizeArrow((_a = this.controlOptions) == null ? void 0 : _a.arrowOptions);
    this.el.appendChild(this.arrowCtx);
  }
  createResizeArrow(arrowOptions) {
    const isDisabled = typeof this.controlOptions.disabled === "function" && this.controlOptions.disabled();
    const options = {
      size: 8,
      lineWidth: 2,
      lineColor: "#9a9a9a",
      padding: 2,
      ...arrowOptions
    };
    const arrow = document.createElement("div");
    arrow.style.cssText = `
      position: absolute;
      right: 0; 
      bottom: 0;
      padding: ${options.padding}px;
      cursor: se-resize;
      background: ${options.background || "none"};
      display: ${isDisabled ? "none" : "block"}
    `;
    arrow.className = "to-control-arrow";
    const arrowInner = document.createElement("div");
    arrowInner.style.cssText = `
      width: ${options.size}px;
      height: ${options.size}px;
      border-bottom: ${options.lineWidth}px solid ${options.lineColor};
      border-right: ${options.lineWidth}px solid ${options.lineColor};
    `;
    arrowInner.className = "to-control-arrow-inner";
    arrow.appendChild(arrowInner);
    if (this.isTouch) {
      arrow.addEventListener("touchstart", this.arrowMouseDownEvent);
    } else {
      arrow.addEventListener("mousedown", this.arrowMouseDownEvent);
    }
    return arrow;
  }
  destroyControl() {
    var _a, _b;
    this.destroy();
    if (this.isTouch) {
      (_a = this.arrowCtx) == null ? void 0 : _a.removeEventListener("touchstart", this.arrowMouseDownEvent);
    } else {
      (_b = this.arrowCtx) == null ? void 0 : _b.removeEventListener("mousedown", this.arrowMouseDownEvent);
    }
  }
  emitControlEvent(type) {
    const event = document.createEvent("HTMLEvents");
    event.initEvent(type, false, false);
    const { left, top, right, bottom, width, height, maxX, maxY } = this;
    event["left"] = left;
    event["top"] = top;
    event["width"] = width;
    event["height"] = height;
    event["maxX"] = maxX;
    event["maxY"] = maxY;
    event["right"] = right;
    event["bottom"] = bottom;
    this.el.dispatchEvent(event);
  }
};
var mounted = (el, binding, userOptions) => {
  const { value } = binding;
  const customGlobalOptions = userOptions || {};
  const options = {
    ...customGlobalOptions,
    ...value
  };
  el.$toControl = new ToControl({
    el,
    options
  });
};
var beforeUpdate = (el) => {
  el.$toControl && el.$toControl.updateArrow();
};
var unmounted = (el) => {
  el.$toControl && el.$toControl.destroy();
};
var ToControlDirective = {
  mounted: (el, binding) => mounted(el, binding),
  unmounted,
  beforeUpdate,
  // @ts-ignore
  inserted: (el, binding) => mounted(el, binding),
  unbind: unmounted,
  update: beforeUpdate,
  install: (Vue, userOptions) => {
    Vue.directive("to-control", {
      mounted: (el, binding) => mounted(el, binding, userOptions),
      unmounted,
      beforeUpdate,
      // @ts-ignore
      inserted: (el, binding) => mounted(el, binding, userOptions),
      unbind: unmounted,
      update: beforeUpdate
    });
  }
};
export {
  ToControlDirective,
  ToControl as default
};
//# sourceMappingURL=@howdyjs_to-control.js.map
