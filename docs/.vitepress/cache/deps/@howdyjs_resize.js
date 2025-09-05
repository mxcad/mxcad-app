import "./chunk-FM7WUVZV.js";

// node_modules/@howdyjs/resize/dist/index.es.js
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
var CustomResize = class {
  constructor({ el, options }) {
    __publicField(this, "el");
    __publicField(this, "options");
    __publicField(this, "directionArr");
    if (el instanceof HTMLElement) {
      this.el = el;
    } else {
      this.el = document.querySelector(el);
    }
    this.options = {
      immediate: false,
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
      needParentNodeOffset: true,
      ...options
    };
    this.directionArr = this.options.direction || ["right"];
    this.el.$resize = this;
  }
  init() {
    const { position } = getComputedStyle(this.el);
    const { position: ParentPosition } = getComputedStyle(this.el.parentNode);
    if (position === "static") {
      this.el.style.position = "relative";
    }
    if (ParentPosition === "static") {
      console.warn("[@howdyjs/resize] Element parentNode position can not be static!");
    }
    this.directionArr.map((direction) => {
      if (this.options.immediate) {
        const line = this.createLineEl(direction);
        this.el.appendChild(line);
      } else {
        const dashedLine = this.createDashedLineEl(direction);
        const line = this.createLineEl(direction, dashedLine);
        this.el.appendChild(dashedLine);
        this.el.appendChild(line);
      }
    });
  }
  createDashedLineEl(direction) {
    const { tipLineColor, tipLineWidth, tipLineStyle, zIndex } = this.options;
    const dashedLine = document.createElement("div");
    const cssText = `position:absolute;z-index: ${zIndex};visibility: hidden;`;
    const isX = direction === "left" || direction === "right";
    dashedLine.style.cssText = isX ? `${cssText};top:0;bottom: 0;${direction}:0;border-${direction}:${tipLineWidth}px ${tipLineStyle} ${tipLineColor}` : `${cssText};left:0;right: 0;${direction}:0;border-${direction}:${tipLineWidth}px ${tipLineStyle} ${tipLineColor}`;
    dashedLine.setAttribute("class", "resize__dashed-line");
    return dashedLine;
  }
  createLineEl(direction, dashedLineEl) {
    const { immediate, lineColor, lineWidth, lineHoverColor, lineHoverWidth, zIndex } = this.options;
    const line = document.createElement("div");
    const cssText = `position: absolute;background: ${lineColor};z-index: ${zIndex}`;
    const isX = direction === "left" || direction === "right";
    const isBefore = direction === "right" || direction === "bottom";
    line.style.cssText = isX ? `${cssText};width: ${lineWidth}px;top:0;bottom: 0;${direction}: -${lineWidth / 2}px;cursor: col-resize;` : `${cssText};height: ${lineWidth}px;left:0;right: 0;${direction}: -${lineWidth / 2}px;cursor: row-resize;`;
    line.mouseoverEvent = function() {
      line.style.background = lineHoverColor;
      line.style[isX ? "width" : "height"] = `${lineHoverWidth}px`;
      line.style[direction] = `-${lineHoverWidth / 2}px`;
    };
    line.mouseoutEvent = function() {
      line.style.background = lineColor;
      line.style[isX ? "width" : "height"] = `${lineWidth}px`;
      line.style[direction] = `-${lineWidth / 2}px`;
    };
    const element = this.el;
    line.mousedownEvent = function(e) {
      const el = element || e.target.parentNode;
      const elParent = el.parentNode;
      let move;
      const elParentSize = isX ? elParent.offsetWidth : elParent.offsetHeight;
      document.body.style.userSelect = "none";
      let moveValidFlag = true;
      const resizeFn = () => {
        const elSize = isX ? element.offsetWidth : element.offsetHeight;
        const elOffset = isX ? element.offsetLeft : element.offsetTop;
        const moveOffset = isBefore ? elOffset + elSize + move : elOffset + move;
        const sizeOffset = isBefore ? elSize + move : elSize - move;
        const resize = document.createEvent("HTMLEvents");
        resize.initEvent("resize", false, false);
        resize["direction"] = direction;
        resize["moveOffset"] = moveOffset;
        resize["moveOffsetPercent"] = moveOffset / elParentSize * 100;
        resize[isX ? "resizeWidth" : "resizeHeight"] = sizeOffset;
        resize[isX ? "resizeWidthPercent" : "resizeHeightPercent"] = sizeOffset / elParentSize * 100;
        element.dispatchEvent(resize);
      };
      document.onmousemove = function(e2) {
        e2.preventDefault();
        const { x, y } = element.getBoundingClientRect();
        const elSize = isX ? element.offsetWidth : element.offsetHeight;
        const elOffset = isX ? element.offsetLeft : element.offsetTop;
        move = isBefore ? isX ? e2.clientX - x - elSize : e2.clientY - y - elSize : isX ? e2.clientX - x : e2.clientY - y;
        moveValidFlag = isBefore ? -move <= elSize && elOffset + elSize + move <= elParentSize : move <= elSize && elOffset + move >= 0;
        if (moveValidFlag) {
          if (immediate) {
            resizeFn();
          } else {
            if (dashedLineEl) {
              dashedLineEl.style.visibility = "visible";
              dashedLineEl.style[direction] = `${isBefore ? -move : move}px`;
            }
          }
        }
      };
      document.onmouseup = function() {
        document.onmousemove = null;
        document.onmouseup = null;
        document.body.style.userSelect = "auto";
        if (!immediate) {
          if (dashedLineEl) {
            dashedLineEl.style.visibility = "hidden";
          }
          if (moveValidFlag) {
            resizeFn();
            if (dashedLineEl) {
              dashedLineEl.style[direction] = "0px";
            }
          }
        }
      };
    };
    line.setAttribute("class", "resize__line");
    line.addEventListener("mousemove", line.mouseoverEvent);
    line.addEventListener("mouseout", line.mouseoutEvent);
    line.addEventListener("mousedown", line.mousedownEvent);
    return line;
  }
  destroy() {
    const resizeLines = Array.prototype.slice.call(this.el.querySelectorAll(".resize__line"));
    resizeLines.forEach((line) => {
      line.mouseoverEvent && line.removeEventListener("mousemove", line.mouseoverEvent);
      line.mouseoutEvent && line.removeEventListener("mouseout", line.mouseoutEvent);
      line.mousedownEvent && line.removeEventListener("mousedown", line.mousedownEvent);
      if (line.parentNode) {
        line.parentNode.removeChild(line);
      }
    });
    this.el.querySelectorAll(".resize__dashed-line").forEach((line) => {
      if (line.parentNode) {
        line.parentNode.removeChild(line);
      }
    });
  }
};
var mounted = (el, binding, userOptions) => {
  const { arg, value } = binding;
  const customGlobalOptions = userOptions || {};
  let direction;
  let options;
  if (arg) {
    if (arg === "all") {
      direction = ["top", "left", "bottom", "right"];
    } else {
      direction = [arg];
    }
  }
  if (direction) {
    options = {
      ...customGlobalOptions,
      ...value,
      direction
    };
  } else {
    options = {
      ...customGlobalOptions,
      ...value
    };
  }
  const resize = new CustomResize({
    el,
    options
  });
  resize.init();
};
var unmounted = (el) => {
  el.$resize && el.$resize.destroy();
};
var ResizeDirective = {
  mounted: (el, binding) => mounted(el, binding),
  unmounted,
  // @ts-ignore
  inserted: (el, binding) => mounted(el, binding),
  unbind: unmounted,
  install: (Vue, userOptions) => {
    Vue.directive("resize", {
      mounted: (el, binding) => mounted(el, binding, userOptions),
      unmounted,
      // @ts-ignore
      inserted: (el, binding) => mounted(el, binding, userOptions),
      unbind: unmounted
    });
  }
};
export {
  ResizeDirective,
  CustomResize as default
};
//# sourceMappingURL=@howdyjs_resize.js.map
