import {
  isVue2,
  isVue3
} from "./chunk-6NMAXBHK.js";
import {
  Fragment,
  computed,
  createBaseVNode,
  createBlock,
  createCommentVNode,
  createElementBlock,
  createTextVNode,
  createVNode,
  defineComponent,
  nextTick,
  normalizeClass,
  normalizeStyle,
  onMounted,
  openBlock,
  reactive,
  ref,
  renderList,
  renderSlot,
  resolveComponent,
  toDisplayString,
  watch,
  withCtx
} from "./chunk-YUH2BBWQ.js";
import {
  __publicField
} from "./chunk-FM7WUVZV.js";

// node_modules/helper-js/dist/index.esm.js
function isArray(v) {
  return Object.prototype.toString.call(v) === "[object Array]";
}
function isObject(v) {
  return Object.prototype.toString.call(v) === "[object Object]";
}
function isFunction(v) {
  return typeof v === "function";
}
function notGreaterThan(n, max) {
  return n < max ? n : max;
}
function arrayRemove(arr, v) {
  let index;
  let count = 0;
  while ((index = arr.indexOf(v)) > -1) {
    arr.splice(index, 1);
    count++;
  }
  return count;
}
function arrayLast(arr) {
  return arr[arr.length - 1];
}
function toArrayIfNot(arrOrNot) {
  return isArray(arrOrNot) ? arrOrNot : [arrOrNot];
}
function objectOnly(obj, keys) {
  let keysSet = new Set(keys);
  const r2 = {};
  keysSet.forEach((key) => {
    r2[key] = obj[key];
  });
  return r2;
}
function iterateAll(val) {
  let opt = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return function* () {
    if (!opt.reverse) {
      if (val.length != null) {
        for (let i = 0; i < val.length; i++) {
          const info = {
            value: val[i],
            index: i
          };
          if (!opt.exclude || !opt.exclude(info)) {
            yield info;
          }
        }
      } else if (isObject(val)) {
        for (const key of Object.keys(val)) {
          const info = {
            value: val[key],
            key
          };
          if (!opt.exclude || !opt.exclude(info)) {
            yield info;
          }
        }
      } else {
        throw "Unsupported type";
      }
    } else {
      if (val.length != null) {
        for (let i = val.length - 1; i >= 0; i--) {
          const info = {
            value: val[i],
            index: i
          };
          if (!opt.exclude || !opt.exclude(info)) {
            yield info;
          }
        }
      } else if (isObject(val)) {
        const keys = Object.keys(val);
        keys.reverse();
        for (const key of keys) {
          const info = {
            value: val[key],
            key
          };
          if (!opt.exclude || !opt.exclude(info)) {
            yield info;
          }
        }
      } else {
        throw "Unsupported type";
      }
    }
  }();
}
function assignIfNoKey(obj, key, val) {
  if (!obj.hasOwnProperty(key)) {
    obj[key] = val;
  }
}
function objectAssignIfNoKey(obj1, obj2) {
  Object.keys(obj2).forEach((key) => {
    assignIfNoKey(obj1, key, obj2[key]);
  });
  return obj1;
}
function withoutUndefined(obj) {
  const r2 = {};
  Object.keys(obj).forEach((key) => {
    if (obj[key] !== void 0) {
      r2[key] = obj[key];
    }
  });
  return r2;
}
function walkTreeData(obj, handler) {
  let opt = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  opt = objectAssignIfNoKey({
    ...opt
  }, {
    childrenKey: "children"
  });
  const {
    childrenKey
  } = opt;
  const rootChildren = isArray(obj) ? obj : [obj];
  class StopException {
  }
  const func = (children, parent, parentPath) => {
    if (opt.reverse) {
      children = children.slice();
      children.reverse();
    }
    const len = children.length;
    for (let i = 0; i < len; i++) {
      const item = children[i];
      const index = opt.reverse ? len - i - 1 : i;
      const path = parentPath ? [...parentPath, index] : [];
      if (opt.childFirst) {
        if (item[childrenKey] != null) {
          func(item[childrenKey], item, path);
        }
      }
      const r2 = handler(item, index, parent, path);
      if (r2 === false) {
        throw new StopException();
      } else if (r2 === "skip children") {
        continue;
      } else if (r2 === "skip siblings") {
        break;
      }
      if (!opt.childFirst) {
        if (item[childrenKey] != null) {
          func(item[childrenKey], item, path);
        }
      }
    }
  };
  try {
    func(rootChildren, null, isArray(obj) ? [] : null);
  } catch (e) {
    if (e instanceof StopException) ;
    else {
      throw e;
    }
  }
}
function findInfoInTreeData(obj, handler) {
  let opt = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  let r2;
  walkTreeData(obj, function() {
    if (handler(...arguments)) {
      r2 = {
        node: arguments.length <= 0 ? void 0 : arguments[0],
        index: arguments.length <= 1 ? void 0 : arguments[1],
        parent: arguments.length <= 2 ? void 0 : arguments[2],
        path: arguments.length <= 3 ? void 0 : arguments[3]
      };
      return false;
    }
  }, opt);
  return r2;
}
function findTreeData(obj, handler) {
  let opt = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const r2 = findInfoInTreeData(obj, handler, opt);
  return r2 == null ? void 0 : r2.node;
}
function cloneTreeData(root, options) {
  const opt = {
    childrenKey: "children"
  };
  if (options) {
    Object.assign(opt, options);
  }
  const {
    childrenKey,
    nodeHandler
  } = opt;
  const td = new TreeData();
  td.childrenKey = childrenKey;
  walkTreeData(root, (node, index, parent, path) => {
    let newNode = Object.assign({}, node);
    if (newNode[childrenKey]) {
      newNode[childrenKey] = [];
    }
    if (nodeHandler) {
      newNode = nodeHandler(newNode, {
        oldNode: node,
        index,
        parent,
        path
      });
    }
    td.set(path, newNode);
  }, {
    childrenKey
  });
  return td.data;
}
var TreeData = class {
  // data = null;
  constructor() {
    __publicField(this, "data");
    __publicField(this, "childrenKey", "children");
    let data = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    this.data = data;
  }
  get rootChildren() {
    const {
      childrenKey
    } = this;
    const {
      data
    } = this;
    return isArray(data) ? data : data[childrenKey];
  }
  iteratePath(path) {
    var _this = this;
    let opt = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return function* () {
      const {
        childrenKey,
        rootChildren
      } = _this;
      if (!opt.reverse) {
        let prevPath = [];
        let prevChildren = rootChildren;
        for (const index of path) {
          const currentPath = [...prevPath, index];
          const currentNode = prevChildren[index];
          yield {
            path: currentPath,
            node: currentNode
          };
          prevPath = currentPath;
          prevChildren = currentNode[childrenKey];
        }
      } else {
        const list = [..._this.iteratePath(path, {
          ...opt,
          reverse: false
        })];
        list.reverse();
        for (const {
          path: path0,
          node
        } of list) {
          const path2 = path0;
          yield {
            path: path2,
            node
          };
        }
      }
    }();
  }
  getFamily(path) {
    const all = [];
    for (const {
      node
    } of this.iteratePath(path)) {
      all.push(node);
    }
    return all;
  }
  get(path) {
    return arrayLast(this.getFamily(path));
  }
  getParentAndIndex(path) {
    const parentPath = path.slice();
    const index = parentPath.pop();
    return {
      parent: this.get(parentPath),
      index,
      parentPath
    };
  }
  getParent(path) {
    return this.getParentAndIndex(path).parent;
  }
  set(path, node) {
    if (path == null || path.length === 0) {
      this.data = node;
    } else {
      const {
        childrenKey
      } = this;
      let {
        rootChildren
      } = this;
      const {
        parent,
        index
      } = this.getParentAndIndex(path);
      let parentChildren;
      if (path.length === 1) {
        if (!rootChildren) {
          if (this.data) {
            this.data[childrenKey] = [];
          } else {
            this.data = [];
          }
        }
        parentChildren = rootChildren;
      } else {
        if (!parent[childrenKey]) {
          parent[childrenKey] = [];
        }
        parentChildren = parent[childrenKey];
      }
      parentChildren[index] = node;
    }
  }
  delete(path) {
    const {
      childrenKey,
      rootChildren
    } = this;
    const {
      parent,
      index
    } = this.getParentAndIndex(path);
    const parentChildren = path.length === 1 ? rootChildren : parent[childrenKey];
    const node = parentChildren[index];
    parentChildren.splice(index, 1);
    return node;
  }
  walk(handler, opt) {
    const {
      childrenKey,
      data
    } = this;
    return walkTreeData(data, handler, childrenKey, opt);
  }
  clone() {
    let opt = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return cloneTreeData(this.data), withoutUndefined({
      childrenKey: this.childrenKey,
      nodeHandler: opt.nodeHandler || void 0
    });
  }
};
function resolveValueOrGettter(valueOrGetter) {
  let args = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
  if (isFunction(valueOrGetter)) {
    return valueOrGetter(...args);
  } else {
    return valueOrGetter;
  }
}
function applyFinally(func, finallyFunc) {
  const wrapped = function() {
    let r2, e;
    try {
      r2 = func(...arguments);
    } catch (error) {
      e = error;
    } finally {
      finallyFunc();
    }
    if (!e) {
      return r2;
    } else {
      throw e;
    }
  };
  return wrapped;
}
function cacheFunction(func) {
  let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const cachedArgsArr = [];
  let map;
  const defaultValue = {};
  let noArgsCache = defaultValue;
  const wrapped = function() {
    for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
      args[_key6] = arguments[_key6];
    }
    if (args.length === 0) {
      if (noArgsCache === defaultValue) {
        noArgsCache = func();
      }
      return noArgsCache;
    }
    if (!map) {
      map = new ArrayKeyMap();
    }
    if (!map.has(args)) {
      map.set(args, func(...args));
      if (options.capacity != null) {
        cachedArgsArr.push(args);
        const removed = cachedArgsArr.splice(0, cachedArgsArr.length - options.capacity);
        for (const args2 of removed) {
          map.delete(args2);
        }
      }
    }
    return map.get(args);
  };
  const clearCache = () => {
    map = null;
    cachedArgsArr.splice(0, cachedArgsArr.length);
  };
  return {
    // @ts-ignore
    action: wrapped,
    clearCache
  };
}
function promisePin() {
  let resolve, reject;
  const promise = new Promise((resolve2, reject2) => {
    resolve = resolve2;
    reject = reject2;
  });
  return {
    promise,
    resolve,
    reject
  };
}
function isDescendantOf(el, parent) {
  while (true) {
    if (el.parentNode == null) {
      return false;
    } else if (el.parentNode === parent) {
      return true;
    } else {
      el = el.parentNode;
    }
  }
}
function getBoundingClientRect(el) {
  let xy = el.getBoundingClientRect();
  if (document.documentElement.clientTop > 0) {
    const top = xy.top - document.documentElement.clientTop, bottom = xy.bottom, left = xy.left - document.documentElement.clientLeft, right = xy.right, width = xy.width || right - left, height = xy.height || bottom - top;
    const x = left;
    const y = top;
    const json = {
      top,
      right,
      bottom,
      left,
      width,
      height,
      x,
      y
    };
    xy = {
      ...json,
      toJSON: () => json
    };
  }
  return xy;
}
function findParent(el, callback) {
  let opt = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  let cur = opt && opt.withSelf ? el : el.parentElement;
  while (cur) {
    const shouldBreak = opt.until && cur === opt.until;
    if (shouldBreak && !opt.withUntil) {
      return;
    }
    const r2 = callback(cur);
    if (r2 === "break") {
      return;
    } else if (r2) {
      return cur;
    } else if (shouldBreak) {
      return;
    } else {
      cur = cur.parentElement;
    }
  }
}
function hasClass(el, className) {
  if (el.classList) {
    return el.classList.contains(className);
  } else {
    return new RegExp("(^| )" + className + "( |$)", "gi").test(el.className);
  }
}
function hasClassIn(el, classNames) {
  for (const className of classNames) {
    if (hasClass(el, className)) {
      return true;
    }
  }
  return false;
}
function on(el, name, handler, options) {
  if (el.addEventListener) {
    el.addEventListener(name, handler, options);
  } else if (el.attachEvent) {
    el.attachEvent(`on${name}`, handler, options);
  }
}
function off(el, name, handler, options) {
  if (el.removeEventListener) {
    el.removeEventListener(name, handler, options);
  } else if (el.detachEvent) {
    el.detachEvent(`on${name}`, handler, options);
  }
}
function extendedListen(info) {
  let destroyFuncs = [];
  const listenAll = () => {
    if (r2.listening) {
      return;
    }
    for (const item of info) {
      on.apply(this, item);
      const destroy = () => off.apply(this, item);
      destroyFuncs.push(destroy);
    }
    r2.listening = true;
  };
  const destroyAll = () => {
    if (!r2.listening) {
      return;
    }
    for (const destroy of destroyFuncs) {
      destroy();
    }
    destroyFuncs = [];
    r2.listening = false;
  };
  const r2 = {
    listening: false,
    stop: destroyAll,
    resume: listenAll,
    start: listenAll
  };
  r2.start();
  return r2;
}
function css(el, name) {
  const stl = getComputedStyle(el);
  return stl[name];
}
function binarySearch(arr, callback) {
  let opt = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  opt = {
    start: 0,
    end: arr.length - 1,
    maxTimes: 1e3,
    ...opt
  };
  let {
    start,
    end
  } = opt;
  const {
    returnNearestIfNoHit,
    maxTimes
  } = opt;
  let midNum;
  let mid;
  if (start == null) {
    start = 0;
    end = arr.length - 1;
  }
  let i = 0;
  let r2;
  while (start >= 0 && start <= end) {
    if (i >= maxTimes) {
      throw Error(`binarySearch: loop times is over ${maxTimes}, you can increase the limit.`);
    }
    midNum = Math.floor((end - start) / 2 + start);
    mid = arr[midNum];
    const count = i + 1;
    r2 = callback(mid, midNum, count);
    if (r2 > 0) {
      end = midNum - 1;
    } else if (r2 < 0) {
      start = midNum + 1;
    } else {
      return {
        index: midNum,
        value: mid,
        count,
        hit: true
      };
    }
    i++;
  }
  return returnNearestIfNoHit ? {
    index: midNum,
    value: mid,
    count: i + 1,
    hit: false,
    greater: r2 > 0
  } : null;
}
function makeStorageHelper(storage) {
  return {
    storage,
    set(name, value, minutes) {
      if (value == null) {
        this.storage.removeItem(name);
      } else {
        this.storage.setItem(name, JSON.stringify({
          value,
          expired_at: minutes ? (/* @__PURE__ */ new Date()).getTime() + minutes * 60 * 1e3 : null
        }));
      }
    },
    get(name) {
      let t = this.storage.getItem(name);
      if (t) {
        t = JSON.parse(t);
        if (!t.expired_at || t.expired_at > (/* @__PURE__ */ new Date()).getTime()) {
          return t.value;
        } else {
          this.storage.removeItem(name);
        }
      }
      return null;
    },
    clear() {
      this.storage.clear();
    }
  };
}
var extendedLocalStorage = cacheFunction(function() {
  return makeStorageHelper(localStorage);
});
var extendedSessionStorage = cacheFunction(function() {
  return makeStorageHelper(sessionStorage);
});
var ArrayKeyMap = class {
  constructor() {
    __publicField(this, "_map", /* @__PURE__ */ (() => /* @__PURE__ */ new Map())());
    __publicField(this, "_values", {});
    __publicField(this, "_objCount", 0);
  }
  _keysToString(keys) {
    const {
      _map
    } = this;
    let t = [];
    for (const key of keys) {
      if (!_map.has(key)) {
        return null;
      }
      t.push(_map.get(key)[0]);
    }
    return t.toString();
  }
  has(keys) {
    if (this._keysToString(keys) == null) {
      return false;
    }
    return true;
  }
  /**
   * throw error if not found
   * @param keys
   * @returns
   */
  get(keys) {
    const {
      _values
    } = this;
    const key2 = this._keysToString(keys);
    if (key2 == null) {
      throw "Value not found by specified keys";
    }
    return _values[key2][1];
  }
  set(keys, value) {
    const {
      _map,
      _values
    } = this;
    let t = [];
    for (const key of keys) {
      let str;
      let count = 1;
      if (_map.has(key)) {
        [str, count] = _map.get(key);
        count++;
      } else {
        this._objCount++;
        str = this._objCount.toString();
      }
      _map.set(key, [str, count]);
      t.push(str);
    }
    _values[t.toString()] = [keys.slice(), value];
  }
  delete(keys) {
    const {
      _values,
      _map
    } = this;
    const key2 = this._keysToString(keys);
    if (key2 == null) {
      throw "Value not found by specified keys";
    }
    delete _values[key2];
    for (const key of keys) {
      let [str, count] = _map.get(key);
      count--;
      if (count === 0) {
        _map.delete(key);
      } else {
        _map.set(key, [str, count]);
      }
    }
  }
  clear() {
    this._map.clear();
    this._values = {};
  }
  *entries() {
    const {
      _values
    } = this;
    for (const key in _values) {
      const [keys, value] = _values[key];
      yield [keys, value];
    }
  }
  count() {
    return [...this.entries()].length;
  }
};

// node_modules/@virtual-list/vue/dist/v3/index.mjs
var ce = defineComponent({
  props: {
    table: Boolean
  }
});
var Q = (e, i) => {
  const m = e.__vccOpts || e;
  for (const [d, v] of i)
    m[d] = v;
  return m;
};
var de = { key: 0 };
var fe = { key: 1 };
function me(e, i, m, d, v, z) {
  return e.table ? (openBlock(), createElementBlock("table", de, [
    renderSlot(e.$slots, "prepend"),
    createBaseVNode("tbody", null, [
      renderSlot(e.$slots, "default")
    ]),
    renderSlot(e.$slots, "append")
  ])) : (openBlock(), createElementBlock("div", fe, [
    renderSlot(e.$slots, "prepend"),
    renderSlot(e.$slots, "default"),
    renderSlot(e.$slots, "append")
  ]));
}
var ve = Q(ce, [["render", me]]);
var be = defineComponent({
  components: { VirtualListTable: ve },
  props: {
    items: Array,
    disabled: Boolean,
    horizontal: Boolean,
    firstRender: { type: Number, default: 10 },
    buffer: { type: Number, default: 100 },
    itemKey: {
      type: [String, Function]
    },
    itemSize: {
      type: Function
    },
    table: Boolean
  },
  setup(e) {
    const i = ref(0), m = ref(e.firstRender - 1), d = computed(
      () => {
        var t;
        return notGreaterThan(m.value, (((t = e.items) == null ? void 0 : t.length) || 1) - 1);
      }
    ), v = ref(0), z = computed(() => f.value[i.value] ? E(i.value) : 0), C = computed(
      () => f.value.length > 0 ? E(f.value.length - 1) + arrayLast(L.value) : 0
    ), o = computed(
      () => f.value[d.value] ? C.value - E(d.value) - L.value[d.value] : 0
    ), b = computed(
      () => e.disabled ? {} : { overflow: "auto" }
    ), U2 = computed(() => {
      const t = {
        display: "flex"
      };
      return e.disabled || (e.horizontal ? Object.assign(t, {
        "margin-left": z.value + "px",
        "margin-right": o.value + "px",
        width: C.value - o.value - z.value + "px"
      }) : Object.assign(t, {
        "margin-top": z.value + "px",
        "margin-bottom": o.value + "px"
      })), t["flex-direction"] = e.horizontal ? "row" : "column", e.table && (delete t.display, delete t["flex-direction"]), t;
    }), $ = computed(
      () => reactive((e.items || []).map(() => null))
    ), L = computed(
      () => (e.items || []).map((t, n) => {
        var g;
        if ($[n] != null)
          return $[n];
        let l = (g = e.itemSize) == null ? void 0 : g.call(e, t, n);
        return l == null && (l = v.value), l;
      })
    ), f = computed(() => {
      const t = [];
      return L.value.reduce((n, l) => (t.push(n), n + l), 0), t;
    });
    watch(() => e.items, y);
    const X = computed(() => {
      if (!e.items || e.disabled)
        return;
      const t = [];
      for (let n = i.value; n <= d.value; n++) {
        const l = e.items[n];
        if (!l)
          break;
        t.push({ item: l, index: n });
      }
      return t;
    }), N2 = ref(), V = ref();
    onMounted(async () => {
      y();
      try {
        Z2();
      } catch {
        await nextTick(), y();
      }
    });
    let T;
    function Y() {
      const t = N2.value;
      if (!t)
        return;
      const n = O(t);
      T != null && e.buffer - Math.abs(n - T) >= 10 || (T = n, y());
    }
    let B = false, K2 = false;
    async function y() {
      var H;
      if (B) {
        K2 = true;
        return;
      }
      if (!e.items || e.disabled)
        return;
      B = true;
      const t = N2.value, n = (H = V.value) == null ? void 0 : H.$el;
      if (!t || !n)
        return;
      v.value || (v.value = ne2()), i.value = ee(), m.value = te(), await nextTick();
      let l, g = 0;
      const F = {}, q2 = e.table ? n.querySelector("tbody").children : n.children;
      for (let a2 = 0; a2 < q2.length; a2++) {
        const r2 = q2[a2], c = css(r2, "position");
        if (c && ["absolute", "fixed"].includes(c))
          continue;
        const h = css(r2, "display") !== "none" ? A(r2) : 0, S2 = r2.getAttribute("vt-index"), R = S2 ? parseInt(S2) : i.value + g;
        F[R] = (F[R] || 0) + h, g++;
      }
      for (const a2 of Object.keys(F)) {
        const r2 = parseInt(a2);
        $.value[r2] !== F[r2] && ($.value[r2] = F[r2], l = true);
      }
      l && await nextTick(), B = false, K2 && (K2 = false, y());
      function ee() {
        const a2 = O(t) - j(t) - e.buffer;
        return binarySearch(
          f.value,
          (c) => c - a2,
          { returnNearestIfNoHit: true }
        ).index;
      }
      function te() {
        const a2 = O(t) - j(t) + x(t) + e.buffer;
        return binarySearch(
          f.value,
          (c) => c - a2,
          { returnNearestIfNoHit: true }
        ).index;
      }
      function ne2() {
        const r2 = [], c = e.table ? n.querySelector("tbody").children : n.children;
        for (let h = 0; h < c.length; h++) {
          const S2 = c[h], R = getComputedStyle(S2);
          if (["absolute", "fixed"].includes(R.position))
            continue;
          const le2 = A(S2);
          if (r2.push(le2), r2.length >= 10)
            break;
        }
        return r2.length === 0 ? 0 : r2.reduce((h, S2) => h + S2, 0) / r2.length;
      }
    }
    function x(t) {
      const n = getComputedStyle(t);
      let l = parseFloat(e.horizontal ? n.width : n.height);
      return n.boxSizing === "border-box" && (e.horizontal ? l = l - parseFloat(n.borderLeftWidth) - parseFloat(n.borderRightWidth) : l = l - parseFloat(n.borderTopWidth) - parseFloat(n.borderBottomWidth)), l;
    }
    function A(t) {
      let n = x(t);
      const l = getComputedStyle(t);
      return e.horizontal ? n += parseFloat(l.borderLeftWidth) + parseFloat(l.borderRightWidth) + parseFloat(l.marginLeft) + parseFloat(l.marginRight) : n += parseFloat(l.borderTopWidth) + parseFloat(l.borderBottomWidth) + parseFloat(l.marginTop) + parseFloat(l.marginBottom), n = Number.isNaN(n) ? 0 : n, n;
    }
    function O(t) {
      return e.horizontal ? t.scrollLeft : t.scrollTop;
    }
    function j(t) {
      const n = getComputedStyle(t);
      return e.horizontal ? parseFloat(n.paddingLeft) : parseFloat(n.paddingTop);
    }
    function E(t) {
      return f.value[t];
    }
    function Z2() {
      const t = N2.value;
      new ResizeObserver((l) => {
        for (let g of l)
          if (hasClass(g.target, "vtlist")) {
            y();
            break;
          }
      }).observe(t);
    }
    function _(t, n) {
      if (e.itemKey) {
        if (typeof e.itemKey == "string" && e.itemKey === "index")
          return n;
        if (typeof e.itemKey == "function")
          return e.itemKey(t, n);
      }
    }
    return {
      listElRef: N2,
      listInnerRef: V,
      onscroll: Y,
      listStyle: b,
      listInnerStyle: U2,
      visibleItemsInfo: X,
      getItemKey: _,
      update: y,
      sizes: L,
      positions: f,
      runtimeSizes: $
    };
  }
});
function ye(e, i, m, d, v, z) {
  const C = resolveComponent("VirtualListTable");
  return openBlock(), createElementBlock("div", {
    class: "vtlist",
    ref: "listElRef",
    style: normalizeStyle(e.listStyle),
    onScrollPassive: i[0] || (i[0] = (...o) => e.onscroll && e.onscroll(...o))
  }, [
    createVNode(C, {
      class: "vtlist-inner",
      ref: "listInnerRef",
      style: normalizeStyle(e.listInnerStyle),
      table: e.table
    }, {
      prepend: withCtx(() => [
        renderSlot(e.$slots, "prepend")
      ]),
      append: withCtx(() => [
        renderSlot(e.$slots, "append")
      ]),
      default: withCtx(() => [
        e.disabled ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(e.items, (o, b) => renderSlot(e.$slots, "default", {
          key: e.getItemKey(o, b),
          item: o,
          index: b
        })), 128)) : (openBlock(true), createElementBlock(Fragment, { key: 1 }, renderList(e.visibleItemsInfo, ({ item: o, index: b }) => renderSlot(e.$slots, "default", {
          key: e.getItemKey(o, b),
          item: o,
          index: b
        })), 128))
      ]),
      _: 3
    }, 8, ["style", "table"])
  ], 36);
}
var Se = Q(be, [["render", ye]]);

// node_modules/@he-tree/tree-utils/dist/index.esm.js
var CHILDREN = "children";
function makeTreeProcessor(data) {
  let opt = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const opt2 = opt;
  const utilsBase = {
    ...defaultOptions,
    ...opt2,
    data,
    stats: null,
    statsFlat: null,
    _statsMap: null,
    initialized: false,
    init() {
      const {
        data: data2,
        childrenKey
      } = this;
      const td = new TreeData([]);
      this._statsMap = /* @__PURE__ */ new Map();
      walkTreeData(data2, (nodeData, index, parent, path) => {
        const stat = this.statHandler({
          ...statDefault(),
          data: nodeData,
          open: Boolean(this.defaultOpen),
          parent: td.getParent(path),
          children: [],
          level: path.length
        });
        this._statsMap.set(nodeData, stat);
        td.set(path, stat);
      }, {
        childrenKey
      });
      const statsFlat = [];
      td.walk((stat) => {
        statsFlat.push(stat);
      });
      this.stats = this.statsHandler(td.rootChildren);
      this.statsFlat = this.statsFlatHandler(statsFlat);
      this.initialized = true;
    },
    getStat(nodeData) {
      let r2 = this._statsMap.get(nodeData);
      if (!r2) {
        throw new StatNotFoundError("Stat not found");
      }
      return r2;
    },
    has(nodeData) {
      if (nodeData["isStat"]) {
        return this.statsFlat.indexOf(nodeData) > -1;
      } else {
        try {
          let r2 = this.getStat(nodeData);
          return Boolean(r2);
        } catch (error) {
          if (error instanceof StatNotFoundError) {
            return false;
          }
          throw error;
        }
      }
    },
    _getPathByStat(stat) {
      if (stat == null) {
        return [];
      }
      const siblings = this.getSiblings(stat);
      const index = siblings.indexOf(stat);
      return [...stat.parent ? this._getPathByStat(stat.parent) : [], index];
    },
    /**
     * call it after a stat's `checked` changed
     * @param stat
     * @returns return false mean ignored
     */
    afterOneCheckChanged(stat) {
      const {
        checked
      } = stat;
      if (stat._ignoreCheckedOnce) {
        delete stat._ignoreCheckedOnce;
        return false;
      }
      const checkParent = (stat2) => {
        const {
          parent
        } = stat2;
        if (parent) {
          let hasChecked;
          let hasUnchecked;
          let hasHalfChecked;
          for (const child of parent.children) {
            if (child.checked) {
              hasChecked = true;
            } else if (child.checked === 0) {
              hasHalfChecked = true;
            } else {
              hasUnchecked = true;
            }
          }
          const parentChecked = hasHalfChecked ? 0 : !hasUnchecked ? true : hasChecked ? 0 : false;
          if (parent.checked !== parentChecked) {
            this._ignoreCheckedOnce(parent);
            parent.checked = parentChecked;
          }
          checkParent(parent);
        }
      };
      checkParent(stat);
      walkTreeData(stat.children, (child) => {
        if (child.checked !== checked) {
          this._ignoreCheckedOnce(child);
          child.checked = checked;
        }
      }, {
        childrenKey: CHILDREN
      });
      return true;
    },
    _ignoreCheckedOnce(stat) {
      stat._ignoreCheckedOnce = true;
      setTimeout(() => {
        if (stat._ignoreCheckedOnce) {
          stat._ignoreCheckedOnce = false;
        }
      }, 100);
    },
    isVisible(statOrNodeData) {
      const stat = statOrNodeData["isStat"] ? statOrNodeData : this.getStat(statOrNodeData);
      const walk = (stat2) => {
        return !stat2 || !stat2.hidden && stat2.open && walk(stat2.parent);
      };
      return Boolean(!stat.hidden && walk(stat.parent));
    },
    /**
     * call it to update all stats' `checked`
     */
    updateCheck() {
      walkTreeData(this.stats, (stat) => {
        if (stat.children && stat.children.length > 0) {
          const checked = stat.children.every((v) => v.checked);
          if (stat.checked !== checked) {
            this._ignoreCheckedOnce(stat);
            stat.checked = checked;
          }
        }
      }, {
        childFirst: true,
        childrenKey: CHILDREN
      });
    },
    getChecked() {
      let withDemi = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
      return this.statsFlat.filter((v) => {
        return v.checked || withDemi && v.checked === 0;
      });
    },
    getUnchecked() {
      let withDemi = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
      return this.statsFlat.filter((v) => {
        return withDemi ? !v.checked : v.checked === false;
      });
    },
    /**
     * open all nodes
     */
    openAll() {
      for (const stat of this.statsFlat) {
        stat.open = true;
      }
    },
    /**
     * close all nodes
     */
    closeAll() {
      for (const stat of this.statsFlat) {
        stat.open = false;
      }
    },
    openNodeAndParents(nodeOrStat) {
      const stat = nodeOrStat["isStat"] ? nodeOrStat : this.getStat(nodeOrStat);
      for (const parentStat of this.iterateParent(stat, {
        withSelf: true
      })) {
        parentStat.open = true;
      }
    },
    // actions
    _calcFlatIndex(parent, index) {
      let flatIndex = parent ? this.statsFlat.indexOf(parent) + 1 : 0;
      const siblings = parent ? parent.children : this.stats;
      for (let i = 0; i < index; i++) {
        flatIndex += this._count(siblings[i]);
      }
      return flatIndex;
    },
    add(nodeData, parent, index) {
      if (this.has(nodeData)) {
        throw "Can't add because data exists in tree";
      }
      const siblings = parent ? parent.children : this.stats;
      if (index == null) {
        index = siblings.length;
      }
      const stat = this.statHandler({
        ...statDefault(),
        open: Boolean(this.defaultOpen),
        data: nodeData,
        parent: parent || null,
        children: [],
        level: parent ? parent.level + 1 : 1
      });
      this._setPosition(stat, parent || null, index);
      const children = nodeData[this.childrenKey];
      if (children) {
        const childrenSnap = children.slice();
        for (const child of childrenSnap) {
          this.add(child, stat);
        }
      }
    },
    remove(stat) {
      const siblings = this.getSiblings(stat);
      if (siblings.includes(stat)) {
        arrayRemove(siblings, stat);
        const stats = this._flat(stat);
        this.statsFlat.splice(this.statsFlat.indexOf(stat), stats.length);
        for (const stat2 of stats) {
          this._statsMap.delete(stat2.data);
        }
        this.afterRemoveStat(stat);
        return true;
      }
      return false;
    },
    getSiblings(stat) {
      const {
        parent
      } = stat;
      return parent ? parent.children : this.stats;
    },
    /**
     * The node should not exsit.
     * @param node
     * @param parent
     * @param index
     */
    _setPosition(stat, parent, index) {
      const siblings = parent ? parent.children : this.stats;
      siblings.splice(index, 0, stat);
      stat.parent = parent;
      stat.level = parent ? parent.level + 1 : 1;
      const flatIndex = this._calcFlatIndex(parent, index);
      const stats = this._flat(stat);
      this.statsFlat.splice(flatIndex, 0, ...stats);
      for (const stat2 of stats) {
        if (!this._statsMap.has(stat2.data)) {
          this._statsMap.set(stat2.data, stat2);
        }
      }
      walkTreeData(stat, (node, index2, parent2) => {
        if (parent2) {
          node.level = parent2.level + 1;
        }
      }, {
        childrenKey: CHILDREN
      });
      this.afterSetStat(stat, parent, index);
    },
    *iterateParent(stat, opt3) {
      let t = opt3 !== null && opt3 !== void 0 && opt3.withSelf ? stat : stat.parent;
      while (t) {
        yield t;
        t = t.parent;
      }
    },
    move(stat, parent, index) {
      if (this.has(stat)) {
        if (stat.parent === parent && this.getSiblings(stat).indexOf(stat) === index) {
          return false;
        }
        if (stat === parent) {
          throw new Error("Can't move node to it self");
        }
        if (parent && stat.level < parent.level) {
          let t;
          for (const item of this.iterateParent(parent)) {
            if (item.level === stat.level) {
              t = item;
              break;
            }
          }
          if (stat === t) {
            throw new Error("Can't move node to its descendant");
          }
        }
        this.remove(stat);
      }
      this._setPosition(stat, parent, index);
      return true;
    },
    /**
     * convert stat and its children to one-dimensional array
     * 转换节点和其后代节点为一维数组
     * @param stat
     * @returns
     */
    _flat(stat) {
      const r2 = [];
      walkTreeData(stat, (child) => {
        r2.push(child);
      }, {
        childrenKey: CHILDREN
      });
      return r2;
    },
    /**
     * get count of stat and its all children
     * 统计节点和其后代节点数量
     * @param stat
     */
    _count(stat) {
      return this._flat(stat).length;
    },
    getData(filter, root) {
      const {
        childrenKey
      } = this;
      const td = new TreeData([]);
      td.childrenKey = childrenKey;
      walkTreeData(root || this.stats, (stat, index, parent, path) => {
        let newData = {
          ...stat.data,
          [childrenKey]: []
        };
        if (filter) {
          newData = filter(newData);
        }
        td.set(path, newData);
      }, {
        childrenKey: CHILDREN
      });
      return td.data;
    }
  };
  const utils = utilsBase;
  if (!utilsBase.noInitialization) {
    utils.init();
  }
  return utils;
}
var defaultOptions = {
  childrenKey: "children",
  defaultOpen: false,
  statsHandler(stats) {
    return stats;
  },
  statsFlatHandler(statsFlat) {
    return statsFlat;
  },
  afterSetStat(stat, parent, index) {
  },
  afterRemoveStat(stat) {
  },
  statHandler(stat) {
    return stat;
  }
};
function statDefault() {
  return {
    isStat: true,
    hidden: false,
    checked: false,
    style: null,
    class: null,
    draggable: null,
    droppable: null
  };
}
var StatNotFoundError = class extends Error {
  constructor(message) {
    super(message);
    this.name = "StatNotFoundError";
  }
};

// node_modules/drag-event-service/dist/index.esm.js
var events = {
  start: ["mousedown", "touchstart"],
  move: ["mousemove", "touchmove"],
  end: ["mouseup", "touchend"]
};
var DragEventService = {
  isTouch(e) {
    return e.type && e.type.startsWith("touch");
  },
  _getStore(el) {
    if (!el._wrapperStore) {
      el._wrapperStore = [];
    }
    return el._wrapperStore;
  },
  on(el, name, handler, options) {
    const {
      args,
      mouseArgs,
      touchArgs
    } = resolveOptions(options);
    const store = this._getStore(el);
    const ts = this;
    const wrapper = function(e) {
      let mouse;
      const isTouch = ts.isTouch(e);
      if (isTouch) {
        mouse = {
          x: e.changedTouches[0].pageX,
          y: e.changedTouches[0].pageY,
          pageX: e.changedTouches[0].pageX,
          pageY: e.changedTouches[0].pageY,
          clientX: e.changedTouches[0].clientX,
          clientY: e.changedTouches[0].clientY,
          screenX: e.changedTouches[0].screenX,
          screenY: e.changedTouches[0].screenY
        };
      } else {
        mouse = {
          x: e.pageX,
          y: e.pageY,
          pageX: e.pageX,
          pageY: e.pageY,
          clientX: e.clientX,
          clientY: e.clientY,
          screenX: e.screenX,
          screenY: e.screenY
        };
        if (name === "start" && e.which !== 1) {
          return;
        }
      }
      return handler.call(this, e, mouse);
    };
    store.push({
      handler,
      wrapper
    });
    on.call(null, el, events[name][0], wrapper, ...[...args, ...mouseArgs]);
    on.call(null, el, events[name][1], wrapper, ...[...args, ...touchArgs]);
  },
  off(el, name, handler, options) {
    const {
      args,
      mouseArgs,
      touchArgs
    } = resolveOptions(options);
    const store = this._getStore(el);
    for (let i = store.length - 1; i >= 0; i--) {
      const {
        handler: handler2,
        wrapper
      } = store[i];
      if (handler === handler2) {
        off.call(null, el, events[name][0], wrapper, ...[...args, ...mouseArgs]);
        off.call(null, el, events[name][1], wrapper, ...[...args, ...mouseArgs]);
        store.splice(i, 1);
      }
    }
  }
};
function resolveOptions(options) {
  if (!options) {
    options = {};
  }
  const args = options.args || [];
  const mouseArgs = options.mouseArgs || [];
  const touchArgs = options.touchArgs || [];
  return {
    args,
    mouseArgs,
    touchArgs
  };
}

// node_modules/@he-tree/dnd-utils/dist/index.esm.js
var instances = /* @__PURE__ */ new Map();
var context = {
  triggerElement: null,
  dragElement: null,
  internal: false,
  dropEffect: "none",
  preventDefault: false
};
var ctx = context;
function syncDropEffect(e) {
  if (e.dataTransfer) {
    e.dataTransfer.dropEffect = ctx.dropEffect;
  }
}
function extendedDND(root) {
  let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (instances.has(root)) {
    throw "Already registered on specified element";
  }
  const opt = {
    ...options
  };
  const ins = opt;
  objectAssignIfNoKey(opt, defaultOptions2);
  DragEventService.on(root, "start", beforeDragStart, {
    touchArgs: [{
      passive: true
    }]
  });
  DragEventService.on(root, "end", onClickEnd);
  function beforeDragStart(e) {
    var _opt$beforeDragStart;
    const node = e.target;
    if (node.nodeType === Node.ELEMENT_NODE) {
      ctx.triggerElement = node;
    }
    const el = node;
    if (opt.ingoreHTMLTags && el.tagName) {
      if (opt.ingoreHTMLTags.find((tag) => tag.toUpperCase() === el.tagName)) {
        return;
      }
    }
    const dragElement = (_opt$beforeDragStart = opt.beforeDragStart) === null || _opt$beforeDragStart === void 0 ? void 0 : _opt$beforeDragStart.call(opt, e);
    if (dragElement) {
      dragElement.setAttribute("draggable", "true");
      ctx.dragElement = dragElement;
    }
  }
  function onClickEnd(e) {
    if (ctx.dragElement) {
      ctx.dragElement.removeAttribute("draggable");
    }
  }
  function onDragStart(e) {
    var _opt$onDragStart;
    ctx.internal = true;
    (_opt$onDragStart = opt.onDragStart) === null || _opt$onDragStart === void 0 ? void 0 : _opt$onDragStart.call(opt, e);
    syncDropEffect(e);
  }
  function onDrag(e) {
    var _opt$onDrag;
    (_opt$onDrag = opt.onDrag) === null || _opt$onDrag === void 0 ? void 0 : _opt$onDrag.call(opt, e);
    syncDropEffect(e);
  }
  function onDragEnd(e) {
    var _opt$onDragEnd;
    (_opt$onDragEnd = opt.onDragEnd) === null || _opt$onDragEnd === void 0 ? void 0 : _opt$onDragEnd.call(opt, e);
    ctx.internal = false;
    if (ctx.dragElement) {
      ctx.dragElement.removeAttribute("draggable");
    }
    ctx.triggerElement = null;
    ctx.dragElement = null;
    ctx.dropEffect = "none";
  }
  const destroyDropZoneListeners = extendedDropZone(root, {
    onDragLeave(e) {
      var _opt$onDragLeave;
      (_opt$onDragLeave = opt.onDragLeave) === null || _opt$onDragLeave === void 0 ? void 0 : _opt$onDragLeave.call(opt, e);
      syncDropEffect(e);
    },
    onDragEnter(e) {
      var _opt$onDragEnter;
      ins.ifPreventDefault(e) && e.preventDefault();
      (_opt$onDragEnter = opt.onDragEnter) === null || _opt$onDragEnter === void 0 ? void 0 : _opt$onDragEnter.call(opt, e);
      syncDropEffect(e);
    },
    onDragOver(e) {
      var _opt$onDragOver;
      ins.ifPreventDefault(e) && e.preventDefault();
      (_opt$onDragOver = opt.onDragOver) === null || _opt$onDragOver === void 0 ? void 0 : _opt$onDragOver.call(opt, e);
      syncDropEffect(e);
    },
    onDrop(e) {
      var _opt$onDrop;
      ins.ifPreventDefault(e) && e.preventDefault();
      (_opt$onDrop = opt.onDrop) === null || _opt$onDrop === void 0 ? void 0 : _opt$onDrop.call(opt, e);
    },
    onEnter(e) {
      var _opt$onEnter;
      (_opt$onEnter = opt.onEnter) === null || _opt$onEnter === void 0 ? void 0 : _opt$onEnter.call(opt, e);
    },
    onLeave(e) {
      var _opt$onLeave;
      (_opt$onLeave = opt.onLeave) === null || _opt$onLeave === void 0 ? void 0 : _opt$onLeave.call(opt, e);
    }
  });
  on(root, "dragstart", onDragStart);
  on(root, "drag", onDrag);
  on(root, "dragend", onDragEnd);
  const destroy = () => {
    DragEventService.off(root, "start", beforeDragStart, {
      touchArgs: [{
        passive: true
      }]
    });
    off(root, "dragstart", onDragStart);
    off(root, "drag", onDrag);
    off(root, "dragend", onDragEnd);
    destroyDropZoneListeners();
    instances.delete(root);
  };
  Object.assign(opt, {
    root,
    destroy
  });
  instances.set(root, ins);
  return ins;
}
var defaultOptions2 = {
  ingoreHTMLTags: ["INPUT", "TEXTAREA", "SELECT", "OPTGROUP", "OPTION"],
  ifPreventDefault(event) {
    if (context.dragElement) {
      return true;
    }
    return ctx.preventDefault;
  },
  beforeDragStart(event) {
  },
  onDragStart(event) {
  },
  onDrag(event) {
  },
  onDragEnter(event) {
  },
  onDragLeave(event) {
  },
  onDragOver(event) {
  },
  onDragEnd(event) {
  },
  onDrop(event) {
  }
};
var justEnteredTarget = null;
var setJustEnteredTarget = (el) => {
  justEnteredTarget = el;
  setTimeout(() => {
    justEnteredTarget = null;
  }, 20);
};
function extendedDropZone(el) {
  let opt = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const dropZone = el;
  let entered = false;
  const onEnter = (e) => {
    var _opt$onEnter2;
    entered = true;
    (_opt$onEnter2 = opt.onEnter) === null || _opt$onEnter2 === void 0 ? void 0 : _opt$onEnter2.call(opt, e);
    endListeners.resume();
  };
  const onDragEnter = (e) => {
    var _opt$onDragEnter2;
    setJustEnteredTarget(e.target);
    (_opt$onDragEnter2 = opt.onDragEnter) === null || _opt$onDragEnter2 === void 0 ? void 0 : _opt$onDragEnter2.call(opt, e);
    if (!entered) {
      onEnter(e);
    }
  };
  const onDragOver = (e) => {
    var _opt$onDragOver2;
    if (!entered) {
      onEnter(e);
    }
    (_opt$onDragOver2 = opt.onDragOver) === null || _opt$onDragOver2 === void 0 ? void 0 : _opt$onDragOver2.call(opt, e);
  };
  const onDragLeave = (e) => {
    var _opt$onDragLeave2;
    (_opt$onDragLeave2 = opt.onDragLeave) === null || _opt$onDragLeave2 === void 0 ? void 0 : _opt$onDragLeave2.call(opt, e);
    const doLeave = function() {
      var _opt$onLeave2;
      let event = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : e;
      entered = false;
      (_opt$onLeave2 = opt.onLeave) === null || _opt$onLeave2 === void 0 ? void 0 : _opt$onLeave2.call(opt, event);
      endListeners.stop();
    };
    const justEnter = justEnteredTarget;
    justEnteredTarget = null;
    if (justEnter && isDescendantOf(justEnter, dropZone)) ;
    else {
      doLeave();
    }
  };
  const onDrop = (e) => {
    var _opt$onDrop2;
    (_opt$onDrop2 = opt.onDrop) === null || _opt$onDrop2 === void 0 ? void 0 : _opt$onDrop2.call(opt, e);
  };
  const onEndBeforeLeave = (e) => {
    var _opt$onEndBeforeLeave;
    if (e instanceof KeyboardEvent) {
      if (e.key !== "Escape") {
        return;
      }
    }
    entered = false;
    endListeners.stop();
    (_opt$onEndBeforeLeave = opt.onEndBeforeLeave) === null || _opt$onEndBeforeLeave === void 0 ? void 0 : _opt$onEndBeforeLeave.call(opt, e);
  };
  const endListeners = extendedListen([[el, "drop", onEndBeforeLeave], [window, "mouseup", onEndBeforeLeave], [window, "touchend", onEndBeforeLeave], [window, "keydown", onEndBeforeLeave]]);
  endListeners.stop();
  const resume = () => {
    on(el, "dragenter", onDragEnter);
    on(el, "dragover", onDragOver);
    on(el, "dragleave", onDragLeave);
    on(el, "drop", onDrop);
  };
  const destroy = () => {
    off(el, "dragenter", onDragEnter);
    off(el, "dragover", onDragOver);
    off(el, "dragleave", onDragLeave);
    off(el, "drop", onDrop);
    endListeners.stop();
  };
  resume();
  return destroy;
}

// node_modules/@he-tree/vue/dist/v3/index.mjs
var Z = false;
var Ee = () => {
  Z = true, setTimeout(() => {
    Z = false;
  }, 100);
};
var Ve = defineComponent({
  // components: {},
  props: ["stat", "rtl", "btt", "indent", "table", "treeLine", "treeLineOffset", "processor"],
  emits: ["open", "close", "check"],
  setup(e, { emit: t }) {
    const n = computed(() => ({
      [e.rtl ? "paddingRight" : "paddingLeft"]: e.indent * (e.stat.level - 1) + "px"
    }));
    watch(
      () => e.stat.checked,
      (y) => {
        Z || e.processor.afterOneCheckChanged(e.stat) && t("check", e.stat);
      }
    ), watch(
      () => e.stat.open,
      (y) => {
        Z || (t(y ? "open" : "close", e.stat), Ee());
      }
    );
    const l = computed(() => {
      const y = [], C = (o) => {
        var c;
        if (o.parent) {
          let d = (c = o.parent) == null ? void 0 : c.children.indexOf(o);
          do {
            d++;
            let g = o.parent.children[d];
            if (g) {
              if (!g.hidden)
                return true;
            } else
              break;
          } while (true);
        }
        return false;
      }, b = e.rtl ? "right" : "left", D = e.btt ? "top" : "bottom";
      let i = e.stat;
      for (; i; ) {
        let o = (i.level - 2) * e.indent + e.treeLineOffset;
        const c = C(i), d = () => {
          y.push({
            style: {
              [b]: o + "px",
              [D]: c ? 0 : "50%"
            }
          });
        };
        i === e.stat ? i.level > 1 && d() : c && d(), i = i.parent;
      }
      return y;
    }), s = computed(() => {
      let y = (e.stat.level - 2) * e.indent + e.treeLineOffset;
      return {
        [e.rtl ? "right" : "left"]: y + "px"
      };
    });
    return { indentStyle: n, vLines: l, hLineStyle: s };
  }
  // data() {
  //   return {}
  // },
  // computed: {},
  // watch: {},
  // methods: {},
  // created() {},
  // mounted() {}
});
var se = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [l, s] of t)
    n[l] = s;
  return n;
};
var Pe = { class: "tree-node-inner" };
var Fe = {
  key: 1,
  class: "tree-node",
  ref: "el"
};
function Ie(e, t, n, l, s, y) {
  return e.table ? (openBlock(), createElementBlock("tr", Fe, [
    renderSlot(e.$slots, "default", { indentStyle: e.indentStyle })
  ], 512)) : (openBlock(), createElementBlock("div", {
    key: 0,
    class: normalizeClass(["tree-node", { "tree-node--with-tree-line": e.treeLine }]),
    style: normalizeStyle(e.indentStyle),
    ref: "el"
  }, [
    e.treeLine ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(e.vLines, (C) => (openBlock(), createElementBlock("div", {
        class: "tree-line tree-vline",
        style: normalizeStyle(C.style)
      }, null, 4))), 256)),
      e.stat.level > 1 ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: "tree-line tree-hline",
        style: normalizeStyle(e.hLineStyle)
      }, null, 4)) : createCommentVNode("", true)
    ], 64)) : createCommentVNode("", true),
    createBaseVNode("div", Pe, [
      renderSlot(e.$slots, "default", { indentStyle: e.indentStyle })
    ])
  ], 6));
}
var Re = se(Ve, [["render", Ie]]);
function Ue(e, t = {}) {
  const n = {
    ...t,
    statHandler(l) {
      return this._statHandler2 && (l = this._statHandler2(l)), ne(t.statHandler, reactive(l));
    },
    statsHandler(l) {
      return ne(t.statsHandler, reactive(l));
    },
    statsFlatHandler(l) {
      return ne(t.statsFlatHandler, reactive(l));
    }
  };
  return makeTreeProcessor(e, n);
}
function ne(e, t) {
  return e ? e(t) : t;
}
var _e = defineComponent({
  components: { VirtualList: Se, TreeNode: Re },
  props: {
    // for vue2
    value: { required: isVue2, type: Array },
    // for vue3
    modelValue: { required: isVue3, type: Array },
    updateBehavior: {
      type: String,
      default: "modify"
    },
    processor: {
      type: Object,
      default: () => Ue([], {
        noInitialization: true
      })
    },
    childrenKey: { type: String, default: "children" },
    /**
     * for default slot. 用于默认插槽
     */
    textKey: { type: String, default: "text" },
    /**
     * node indent. 节点缩进
     */
    indent: { type: Number, default: 20 },
    /**
     * Enable virtual list. 启用虚拟列表
     */
    virtualization: { type: Boolean, default: false },
    /**
     * Render count for virtual list at start. 虚拟列表初始渲染数量.
     */
    virtualizationPrerenderCount: { type: Number, default: 20 },
    /**
     * Open all nodes by default. 默认打开所有节点.
     */
    defaultOpen: { type: Boolean, default: true },
    statHandler: { type: Function },
    /**
     * From right to left. 由右向左显示.
     */
    rtl: { type: Boolean, default: false },
    /**
     * From bottom to top. 由下向上显示
     */
    btt: { type: Boolean, default: false },
    /**
     * Display as table
     */
    table: { type: Boolean, default: false },
    watermark: { type: Boolean, default: false },
    nodeKey: {
      type: [String, Function],
      default: "index"
    },
    treeLine: { type: Boolean, default: false },
    treeLineOffset: { type: Number, default: 8 }
  },
  emits: [
    "update:modelValue",
    "click:node",
    "open:node",
    "close:node",
    "check:node",
    "beforeDragStart",
    "before-drag-start",
    "after-drop",
    "change",
    "enter",
    "leave"
  ],
  data() {
    return {
      stats: [],
      statsFlat: [],
      dragNode: null,
      dragOvering: false,
      placeholderData: {},
      placeholderColspan: 1,
      batchUpdateWaiting: false,
      self: this,
      _ignoreValueChangeOnce: false
    };
  },
  computed: {
    valueComputed() {
      return (isVue2 ? this.value : this.modelValue) || [];
    },
    visibleStats() {
      const { statsFlat: e, isVisible: t } = this;
      let n = e;
      return this.btt && (n = n.slice(), n.reverse()), n.filter((l) => t(l));
    },
    rootChildren() {
      return this.stats;
    }
  },
  methods: {
    _emitValue(e) {
      this.$emit(isVue2 ? "input" : "update:modelValue", e);
    },
    /**
     * private method
     * @param value
     */
    _updateValue(e) {
      return this.updateBehavior === "disabled" ? false : (e !== this.valueComputed && (this._ignoreValueChangeOnce = true), this._emitValue(e), true);
    },
    getStat: ae(
      S("getStat")
    ),
    has: ae(S("has")),
    updateCheck: S(
      "updateCheck"
    ),
    getChecked: S(
      "getChecked"
    ),
    getUnchecked: S(
      "getUnchecked"
    ),
    openAll: S("openAll"),
    closeAll: S("closeAll"),
    openNodeAndParents: S(
      "openNodeAndParents"
    ),
    isVisible: S("isVisible"),
    move: be2("move"),
    add: ae(
      be2("add")
    ),
    addMulti(e, t, n) {
      this.batchUpdate(() => {
        let l = n;
        for (const s of e)
          this.add(s, t, l), l != null && l++;
      });
    },
    remove: S("remove"),
    removeMulti(e) {
      let t = [...e];
      this.batchUpdate(() => {
        for (const n of t)
          this.remove(n);
      });
    },
    iterateParent: S(
      "iterateParent"
    ),
    getSiblings: S(
      "getSiblings"
    ),
    getData: S("getData"),
    getRootEl() {
      return this.$refs.vtlist.listElRef;
    },
    batchUpdate(e) {
      const t = this.ignoreUpdate(e);
      return this.batchUpdateWaiting || this._updateValue(
        this.updateBehavior === "new" ? this.getData() : this.valueComputed
      ), t;
    },
    ignoreUpdate(e) {
      const t = this.batchUpdateWaiting;
      this.batchUpdateWaiting = true;
      const n = e();
      return this.batchUpdateWaiting = t, n;
    }
  },
  watch: {
    processor: {
      immediate: true,
      handler(e) {
        if (e) {
          const t = (n) => {
            if (n) {
              const { childrenKey: l } = this;
              return n[l] || (n[l] = []), n[l];
            } else
              return this.valueComputed;
          };
          e._statHandler2 = this.statHandler ? (n) => n.data === this.placeholderData ? n : this.statHandler(n) : null, e.afterSetStat = (n, l, s) => {
            const { childrenKey: y, updateBehavior: C } = this;
            let b = this.valueComputed;
            if (C === "new") {
              if (this.batchUpdateWaiting)
                return;
              b = this.getData();
            } else if (C === "modify") {
              const D = t(l == null ? void 0 : l.data);
              D.includes(n.data) || D.splice(s, 0, n.data);
            }
            this.batchUpdateWaiting || this._updateValue(b);
          }, e.afterRemoveStat = (n) => {
            var C;
            const { childrenKey: l, updateBehavior: s } = this;
            let y = this.valueComputed;
            if (s === "new") {
              if (this.batchUpdateWaiting)
                return;
              y = this.getData();
            } else if (s === "modify") {
              const b = t((C = n.parent) == null ? void 0 : C.data);
              arrayRemove(b, n.data);
            }
            this.batchUpdateWaiting || this._updateValue(y);
          };
        }
        e.initialized || (e.data = this.valueComputed, Object.assign(
          e,
          objectOnly(this, ["childrenKey", "defaultOpen"])
        ), e.init(), e.updateCheck()), this.stats = e.stats, this.statsFlat = e.statsFlat, e.data !== this.valueComputed && this._updateValue(e.data);
      }
    },
    valueComputed: {
      handler(e) {
        if (this.dragOvering || this.dragNode || this._ignoreValueChangeOnce)
          this._ignoreValueChangeOnce = false;
        else {
          const { processor: n } = this;
          n.data = e, n.init(), this.stats = n.stats, this.statsFlat = n.statsFlat;
        }
      }
    }
  },
  created() {
  },
  mounted() {
    typeof window < "u" && (this.watermark === false && (window._heTreeWatermarkDisabled = true), this.watermark && !window._heTreeWatermarkDisabled && (window._heTreeWatermark || (window._heTreeWatermark = true, console.log(
      "%c[he-tree] Vue tree component:  https://hetree.phphe.com",
      "color:#0075ff; font-size:14px;"
    ))));
  }
});
function S(e) {
  return function(...t) {
    return this.processor[e](...t);
  };
}
function be2(e) {
  return function(...t) {
    return this.batchUpdate(() => this.processor[e](...t));
  };
}
function ae(e) {
  return function(t, ...n) {
    return t && (t = reactive(t)), e.call(this, t, ...n);
  };
}
var Me = {
  key: 0,
  class: "drag-placeholder he-tree-drag-placeholder"
};
var Te = ["colspan"];
var He = { class: "drag-placeholder he-tree-drag-placeholder" };
function We(e, t, n, l, s, y) {
  const C = resolveComponent("TreeNode"), b = resolveComponent("VirtualList");
  return openBlock(), createBlock(b, {
    class: normalizeClass(["he-tree", {
      "he-tree--rtl rtl": e.rtl,
      "he-tree--drag-overing drag-overing": e.dragOvering
    }]),
    ref: "vtlist",
    items: e.visibleStats,
    disabled: !e.virtualization,
    table: e.table,
    itemKey: e.nodeKey
  }, {
    prepend: withCtx(() => [
      renderSlot(e.$slots, "prepend", { tree: e.self })
    ]),
    default: withCtx(({ item: D, index: i }) => [
      createVNode(C, {
        "vt-index": i,
        class: normalizeClass([
          D.class,
          {
            "drag-placeholder-wrapper": D.data === e.placeholderData,
            "dragging-node": D === e.dragNode
          }
        ]),
        style: normalizeStyle(D.style),
        stat: D,
        rtl: e.rtl,
        btt: e.btt,
        indent: e.indent,
        table: e.table,
        treeLine: e.treeLine,
        treeLineOffset: e.treeLineOffset,
        processor: e.processor,
        onClick: (o) => e.$emit("click:node", D),
        onOpen: t[0] || (t[0] = (o) => e.$emit("open:node", o)),
        onClose: t[1] || (t[1] = (o) => e.$emit("close:node", o)),
        onCheck: t[2] || (t[2] = (o) => e.$emit("check:node", o))
      }, {
        default: withCtx(({ indentStyle: o }) => [
          D.data === e.placeholderData ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
            e.table ? (openBlock(), createElementBlock("td", {
              key: 1,
              style: normalizeStyle(o),
              colspan: e.placeholderColspan
            }, [
              createBaseVNode("div", He, [
                renderSlot(e.$slots, "placeholder", { tree: e.self })
              ])
            ], 12, Te)) : (openBlock(), createElementBlock("div", Me, [
              renderSlot(e.$slots, "placeholder", { tree: e.self })
            ]))
          ], 64)) : renderSlot(e.$slots, "default", {
            key: 1,
            node: D.data,
            stat: D,
            indentStyle: o,
            tree: e.self
          }, () => [
            createTextVNode(toDisplayString(D.data[e.textKey]), 1)
          ])
        ]),
        _: 2
      }, 1032, ["vt-index", "class", "style", "stat", "rtl", "btt", "indent", "table", "treeLine", "treeLineOffset", "processor", "onClick"])
    ]),
    append: withCtx(() => [
      renderSlot(e.$slots, "append", { tree: e.self })
    ]),
    _: 3
  }, 8, ["class", "items", "disabled", "table", "itemKey"]);
}
var Ke = se(_e, [["render", We]]);
var a = null;
var r = null;
var G;
var K;
var U;
var q;
var le;
var N;
var oe;
var lt = {
  get startInfo() {
    return G;
  },
  get targetInfo() {
    return K;
  },
  get dragNode() {
    return N;
  },
  get startTree() {
    return a;
  },
  get targetTree() {
    return r;
  },
  get closestNode() {
    return oe;
  }
};
var Ae = defineComponent({
  extends: Ke,
  props: {
    triggerClass: { type: [String, Array] },
    disableDrag: Boolean,
    disableDrop: Boolean,
    eachDraggable: {
      type: Function
    },
    eachDroppable: {
      type: Function
    },
    rootDroppable: {
      type: [Boolean, Function],
      default: true
    },
    /**
     * open closed node when drag over
     */
    dragOpen: { type: Boolean, default: true },
    dragOpenDelay: { type: Number, default: 0 },
    /**
     * e.g.: you can load children by ajax in the hook
     */
    beforeDragOpen: { type: Function },
    resolveStartMovePoint: {
      type: [String, Function]
    },
    /**
     * if remove placeholder when drag leave a tree
     */
    keepPlaceholder: { type: Boolean },
    /**
     * prevent drop if greater than maxLevel
     */
    maxLevel: { type: Number },
    /**
     * copy when drag
     */
    dragCopy: { type: Boolean },
    /**
     * return new data when drag copy
     */
    dragCopyDataHandler: {
      type: Function
    },
    onExternalDragOver: {
      type: Function
    },
    externalDataHandler: {
      type: Function
    },
    // hook of event HTML5 Drag and Drop API's dragstart event
    ondragstart: {
      type: Function
    }
  },
  data() {
    return {
      treeDraggableInstance: null
    };
  },
  computed: {},
  methods: {
    getNodeByElement(e) {
      const t = e.getAttribute("vt-index");
      return t == null ? null : this.visibleStats[t];
    },
    isDraggable(e) {
      if (this.disableDrag)
        return false;
      if (e.draggable != null)
        return e.draggable;
      if (this.eachDraggable) {
        const n = this.eachDraggable(e);
        if (n != null)
          return n;
      }
      const { parent: t } = e;
      return t ? this.isDraggable(t) : true;
    },
    isDroppable(e) {
      if (this.disableDrop)
        return false;
      if (!e)
        return resolveValueOrGettter(this.rootDroppable, [this, a]);
      if (e.droppable != null)
        return e.droppable;
      if (this.eachDroppable) {
        const n = this.eachDroppable(e);
        if (n != null)
          return n;
      }
      const { parent: t } = e;
      return t ? this.isDroppable(t) : true;
    },
    _eachDroppable() {
      var e;
      return resolveValueOrGettter((e = this._isDragCopy) == null ? void 0 : e.call(this), [this]);
    }
  },
  mounted() {
    const e = (i, o) => {
      let c = true;
      return a && a !== this && (c = c && this._isMoved), this.table && !this._isDragCopy && (c = c && this._isDragCopy), c && (i.x !== o.x || i.y !== o.y);
    }, t = (i, o) => {
      r.ignoreUpdate(() => {
        if (!r.has(r.placeholderData)) {
          if (r.table) {
            let d = 0;
            const g = r.getRootEl().querySelector("tr");
            if (g)
              for (const {
                value: v
              } of iterateAll(g.children))
                css(v, "display") !== "none" && (d += v.colSpan || 1);
            d < 1 && (d = 1), r.placeholderColspan = d;
          }
          r.add(r.placeholderData);
        }
        const c = r.getStat(r.placeholderData);
        r.move(c, i, o);
      });
    }, n = () => {
      const i = this;
      if (i.has(i.placeholderData))
        return i.remove(i.getStat(i.placeholderData)), true;
    }, l = (i) => {
      i ? context.dropEffect = a != null && a.dragCopy ? "copy" : "move" : context.dropEffect = "none";
    }, s = (i) => {
      const o = this;
      i ? l(true) : o.keepPlaceholder ? o.has(o.placeholderData) || l(false) : (n(), l(false));
    };
    let y = { x: 0, y: 0 };
    const C = this.getRootEl();
    let b = null;
    const D = () => {
      r != null && r.has(r.placeholderData) && r.ignoreUpdate(() => {
        r.remove(r.getStat(r.placeholderData)), a && (a.dragNode.hidden = false, a.dragOvering = false);
      });
    };
    this.treeDraggableInstance = extendedDND(C, {
      beforeDragStart: (i) => {
        if (!context.triggerElement)
          return;
        let o = this.triggerClass;
        (!o || o.length === 0) && (o = "tree-node");
        let c = toArrayIfNot(o), d = findParent(
          context.triggerElement,
          (g) => {
            if (hasClassIn(g, c))
              return true;
            if (hasClass(g, "tree-node"))
              return "break";
          },
          { withSelf: true, until: C }
        );
        if (b = findParent(
          d,
          (g) => {
            if (hasClass(g, "tree-node"))
              return true;
          },
          { withSelf: true, until: C }
        ), !!b) {
          if (N = this.getNodeByElement(b), !N)
            throw "Can't find drag node";
          if (this.isDraggable(N))
            return this.$emit("before-drag-start", N), this.$emit("beforeDragStart", N), C;
        }
      },
      onDragStart: (i) => {
        var g, v, u;
        if (!b || !N)
          return;
        {
          const { x: p, y: k } = b.getBoundingClientRect(), { clientX: m, clientY: V } = i;
          (g = i.dataTransfer) == null || g.setDragImage(
            b,
            m - p,
            V - k
          );
        }
        le = { x: i.clientX, y: i.clientY }, a = this, a.dragNode = N, q = (() => {
          if (this.resolveStartMovePoint === "mouse")
            return { x: i.clientX, y: i.clientY };
          if (typeof this.resolveStartMovePoint == "function")
            return this.resolveStartMovePoint(b);
          {
            let p, k = 0;
            if (this.table) {
              let m = b.getBoundingClientRect();
              p = { x: m.x, y: m.y }, this.rtl && (p.x = m.right), k = m.height;
            } else if (!this.rtl)
              p = b.children[0].getBoundingClientRect().toJSON(), k = p.height;
            else {
              const m = b.children[0].getBoundingClientRect();
              p = {
                x: m.right,
                y: m.y
              }, k = m.height;
            }
            return this.btt && (p.y += k), p;
          }
        })(), this.dragOvering = true;
        const c = a.getSiblings(a.dragNode), d = c.indexOf(N);
        G = {
          tree: a,
          dragNode: N,
          parent: N.parent,
          siblings: c,
          indexBeforeDrop: d
        }, r = this, (v = i.dataTransfer) == null || v.setData(
          "text",
          `he-tree drag start at ${(/* @__PURE__ */ new Date()).toISOString()}`
        ), a._eachDroppable() || setTimeout(() => {
          N.hidden = true, t(N.parent, d + 1);
        }, 0), (u = this.ondragstart) == null || u.call(this, i);
      },
      // onDragEnter, onDragLeave, onDragOver, onDrop execute on target tree
      onEnter: (i) => {
        this.$emit("enter", i);
      },
      onLeave: (i) => {
        U = null, this.dragOvering = false, context.preventDefault = false, n(), this.$emit("leave", i);
      },
      onDragOver: applyFinally(
        (i) => {
          if (!a) {
            if (!this.onExternalDragOver || this.onExternalDragOver(i) === false)
              return;
            context.preventDefault = true;
          }
          const o = { x: i.clientX, y: i.clientY }, c = e(o, y);
          if (y = o, !c)
            return;
          this.dragOvering = true, r = this;
          const d = q ? {
            x: q.x + (o.x - le.x),
            y: q.y + (o.y - le.y)
          } : { ...o }, { btt: g, rtl: v } = r;
          if (r.disableDrop) {
            context.dropEffect = "none";
            return;
          }
          let u, p;
          const k = r.getRootEl().querySelectorAll(".tree-node"), m = [];
          k.forEach((f) => {
            !hasClassIn(f, [
              "drag-placeholder-wrapper",
              "dragging-node"
            ]) && css(f, "display") !== "none" && m.push(f);
          });
          const V = binarySearch(
            m,
            (f) => getBoundingClientRect(f)[g ? "bottom" : "top"] - d.y,
            { returnNearestIfNoHit: true }
          );
          let O = null, F, ee;
          V.hit || (V.greater ? g || (O = V.index - 1, m[O] || O++) : g && (O = V.index + 1, m[O] || O--)), O == null && (O = V.index), F = m[O], ee = g ? m[O - 1] : m[O + 1], u = F && r.getNodeByElement(F), p = ee && r.getNodeByElement(ee);
          const { indent: j } = r, $ = cacheFunction(() => {
            if (r.table) {
              let f = getBoundingClientRect(F).toJSON();
              const x = j * (u.level - 1);
              return v ? (f.width -= x, f.right -= x) : f.x += x, f;
            } else
              return getBoundingClientRect(F.firstElementChild);
          }).action, de2 = cacheFunction(() => g ? d.y > $().y + $().height / 2 : d.y < $().y + $().height / 2).action, De = cacheFunction(() => g ? !F || O === m.length - 1 && de2() : !F || O === 0 && de2()).action, ue = cacheFunction(
            () => v ? d.x - ($().x + $().width) : $().x - d.x
          ).action, Ce = cacheFunction(
            () => v ? d.x < $().x + $().width - j : d.x > $().x + j
          ).action;
          let P;
          if (De())
            P = 1, u = null;
          else if (u)
            ue() > 0 ? P = u.level - Math.ceil(ue() / j) : Ce() ? P = u.level + 1 : P = u.level;
          else return;
          p && P < p.level && (P = p.level), (async () => {
            let f, x, I = false, M = null;
            const H = async (w) => {
              if (w.open)
                return true;
              if (r.dragOpen)
                if (r.dragOpenDelay)
                  if (M = w, U === w)
                    I = true;
                  else {
                    let B = promisePin();
                    U = w;
                    const T = w;
                    return setTimeout(async () => {
                      T !== U ? (I = true, B.resolve(true)) : (r.beforeDragOpen && await r.beforeDragOpen(w), T !== U ? (I = true, B.resolve(true)) : (w.open = true, M = null, B.resolve(true)));
                    }, r.dragOpenDelay), await B.promise;
                  }
                else
                  return r.beforeDragOpen && await r.beforeDragOpen(w), w.open = true, true;
              else
                return false;
            }, W = async () => {
              if (r.isDroppable(u) && await H(u)) {
                if (I)
                  return;
                f = u, x = null;
              } else
                return false;
            }, he = (w = P) => {
              let B = u, T = [];
              for (; B && B.level >= w; )
                B = B.parent || null, T.unshift(B);
              let ce2 = 0;
              for (const pe of T) {
                if (r.isDroppable(pe))
                  return f = pe, x = T[ce2 + 1] || u, true;
                ce2++;
              }
              return false;
            };
            oe = u || null, u ? P > u.level ? await W() === false && he(u.level) : he() === false && await W() : r.isDroppable(null) && (f = null), U = M;
            const fe2 = !!(!I && (f || f === null));
            return {
              cancelled: I,
              success: fe2,
              parent: f,
              index: fe2 ? x ? (f ? f.children : r.stats).filter((w) => w.data !== r.placeholderData).indexOf(x) + 1 : 0 : -1
            };
          })().then((f) => {
            if (!f.cancelled) {
              if (!f.success) {
                s(false);
                return;
              }
              if (r.maxLevel != null && r.maxLevel > 0) {
                let x = 1;
                if (a) {
                  const M = a.dragNode;
                  let H = 0;
                  walkTreeData(
                    M,
                    (W) => {
                      W.level > H && (H = W.level);
                    },
                    {
                      childrenKey: CHILDREN
                    }
                  ), x = H - M.level + 1;
                }
                if (x + (f.parent ? f.parent.level : 0) > r.maxLevel) {
                  s(false);
                  return;
                }
              }
              s(true), t(f.parent, f.index);
            }
          });
        },
        () => {
        }
      ),
      onDrop: (i) => {
        r = this;
        const o = !a;
        if (!r)
          return;
        const c = a == null ? void 0 : a.dragNode;
        let d, g = (() => {
          var u;
          let v = true;
          if (!r.has(r.placeholderData))
            v = false;
          else if (o)
            d = (u = this.externalDataHandler) == null ? void 0 : u.call(this, i), v = d != null;
          else if (!a.dragCopy) {
            const p = r.getStat(
              r.placeholderData
            );
            a === r && p.parent === c.parent && (findTreeData(c, (k) => k === p), CHILDREN);
          }
          return v;
        })();
        if (g) {
          const v = r.getStat(r.placeholderData), u = r.getSiblings(v);
          K = {
            tree: r,
            dragNode: c,
            parent: v.parent,
            siblings: u,
            indexBeforeDrop: u.indexOf(v)
          };
        }
        (() => {
          if (D(), g) {
            let v = K.indexBeforeDrop;
            a && !a.dragCopy && a === r && G.parent == K.parent && G.indexBeforeDrop < v && v--, a && a !== r && !a._eachDroppable() && a.batchUpdate(() => {
              a.remove(c), a.updateCheck();
            }), r.batchUpdate(() => {
              let u = a == null ? void 0 : a.dragNode, p;
              d ? p = d : a._eachDroppable() && (p = cloneTreeData(a.dragNode.data, {
                childrenKey: a.childrenKey
              }), a.dragCopyDataHandler && (p = a.dragCopyDataHandler(p))), p && (r.add(p), u = r.getStat(p)), r.move(u, K.parent, v), r.updateCheck();
            });
          }
          r.$emit("after-drop"), g && (a && (a.dragCopy || a.$emit("change")), r !== a && r.$emit("change"));
        })();
      },
      onDragEnd: (i) => {
        D(), a && (a.dragNode && (a.dragNode.hidden = false), a.dragNode = null, a.dragOvering = false, a = null), r = null, U = null, N = null, oe = null;
      }
    });
  },
  unmounted() {
    var e;
    (e = this.treeDraggableInstance) == null || e.destroy();
  }
});
var ze = defineComponent({
  props: {
    open: { type: Boolean }
  }
});
var je = createBaseVNode("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, [
  createBaseVNode("title", null, "chevron-right"),
  createBaseVNode("path", { d: "M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" })
], -1);
var Xe = [
  je
];
function qe(e, t, n, l, s, y) {
  return openBlock(), createElementBlock("a", {
    class: normalizeClass(["he-tree__open-icon", { open: e.open }])
  }, Xe, 2);
}
var it = se(ze, [["render", qe]]);
function ot(e, t) {
  try {
    return {
      mixins: [Ae],
      created: new Function(Ye(e, t))()
    };
  } catch {
    throw new Error("he-tree-pro: wrong secret key");
  }
}
function Ye(e, t) {
  e = encodeURIComponent(e), e.length % 2 === 1 && (e += "h"), e = e.split("").reverse().join(""), t = atob(t);
  for (let n = 0; n < e.length; n += 2) {
    const l = e[n], s = e[n + 1];
    t = Ge(t, l, s);
  }
  return Je(
    "arb=inowc=ocmet;etrnfucton){are=1,=tistr{evod !=b}ath(){e&(c_htreWtemak=)=e,._sMve=(=>._eteeatrmrkd.israCoy=)=d.abe,._acDrppbl=(=>.dagop)}",
    t
  );
}
function Ge(e, t, n) {
  let l = "";
  for (let s = 0; s < e.length; s++) {
    const y = e[s];
    y === t ? l += n : y === n ? l += t : l += y;
  }
  return l;
}
function Je(e, t) {
  let n = 0, l = "";
  for (; ; ) {
    let s;
    if (s = n, s >= t.length || (l += t[s], s = n * 2, s >= e.length) || (l += e[s], s += 1, s >= e.length))
      break;
    l += e[s], n++;
  }
  return l;
}
export {
  Ke as BaseTree,
  Ae as Draggable,
  it as OpenIcon,
  Re as TreeNode,
  lt as context,
  lt as dragContext,
  ot as pro,
  walkTreeData
};
/*! Bundled license information:

helper-js/dist/index.esm.js:
  (*!
   * helper-js v3.1.6
   * Author: phphe <phphe@outlook.com> (https://github.com/phphe)
   * Homepage: null
   * Released under the MIT License.
   *)

@virtual-list/vue/dist/v3/index.mjs:
  (*!
   * @virtual-list/vue
   * Author: phphe <phphe@outlook.com> (https://github.com/phphe)
   * Homepage: https://virtual-list.phphe.com
   * Released under the MIT License.
   *)

@he-tree/tree-utils/dist/index.esm.js:
  (*!
   * @he-tree/tree-utils v0.1.0-alpha.5
   * Author: phphe <phphe@outlook.com> (https://github.com/phphe)
   * Homepage: null
   * Released under the MIT License.
   *)

drag-event-service/dist/index.esm.js:
  (*!
   * drag-event-service v2.0.0
   * Author: phphe <phphe@outlook.com> (https://github.com/phphe)
   * Homepage: null
   * Released under the MIT License.
   *)

@he-tree/dnd-utils/dist/index.esm.js:
  (*!
   * @he-tree/dnd-utils v0.1.0-alpha.4
   * Author: phphe <phphe@outlook.com> (https://github.com/phphe)
   * Homepage: null
   * Released under the MIT License.
   *)

@he-tree/vue/dist/v3/index.mjs:
  (*!
   * @he-tree/vue v2.9.3
   * Author: phphe <phphe@outlook.com> (https://github.com/phphe)
   * Homepage: https://hetree.phphe.com/
   * Released under the MIT License.
   *)
*/
//# sourceMappingURL=@he-tree_vue.js.map
