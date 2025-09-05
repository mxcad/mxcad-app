import {
  __require
} from "./chunk-FM7WUVZV.js";

// node_modules/ts-mixer/dist/esm/index.js
var copyProps = (dest, src, exclude = []) => {
  const props = Object.getOwnPropertyDescriptors(src);
  for (let prop of exclude)
    delete props[prop];
  Object.defineProperties(dest, props);
};
var protoChain = (obj, currentChain = [obj]) => {
  const proto = Object.getPrototypeOf(obj);
  if (proto === null)
    return currentChain;
  return protoChain(proto, [...currentChain, proto]);
};
var nearestCommonProto = (...objs) => {
  if (objs.length === 0)
    return void 0;
  let commonProto = void 0;
  const protoChains = objs.map((obj) => protoChain(obj));
  while (protoChains.every((protoChain2) => protoChain2.length > 0)) {
    const protos = protoChains.map((protoChain2) => protoChain2.pop());
    const potentialCommonProto = protos[0];
    if (protos.every((proto) => proto === potentialCommonProto))
      commonProto = potentialCommonProto;
    else
      break;
  }
  return commonProto;
};
var hardMixProtos = (ingredients, constructor, exclude = []) => {
  var _a;
  const base = (_a = nearestCommonProto(...ingredients)) !== null && _a !== void 0 ? _a : Object.prototype;
  const mixedProto = Object.create(base);
  const visitedProtos = protoChain(base);
  for (let prototype of ingredients) {
    let protos = protoChain(prototype);
    for (let i2 = protos.length - 1; i2 >= 0; i2--) {
      let newProto = protos[i2];
      if (visitedProtos.indexOf(newProto) === -1) {
        copyProps(mixedProto, newProto, ["constructor", ...exclude]);
        visitedProtos.push(newProto);
      }
    }
  }
  mixedProto.constructor = constructor;
  return mixedProto;
};
var unique = (arr) => arr.filter((e, i2) => arr.indexOf(e) == i2);
var getIngredientWithProp = (prop, ingredients) => {
  const protoChains = ingredients.map((ingredient) => protoChain(ingredient));
  let protoDepth = 0;
  let protosAreLeftToSearch = true;
  while (protosAreLeftToSearch) {
    protosAreLeftToSearch = false;
    for (let i2 = ingredients.length - 1; i2 >= 0; i2--) {
      const searchTarget = protoChains[i2][protoDepth];
      if (searchTarget !== void 0 && searchTarget !== null) {
        protosAreLeftToSearch = true;
        if (Object.getOwnPropertyDescriptor(searchTarget, prop) != void 0) {
          return protoChains[i2][0];
        }
      }
    }
    protoDepth++;
  }
  return void 0;
};
var proxyMix = (ingredients, prototype = Object.prototype) => new Proxy({}, {
  getPrototypeOf() {
    return prototype;
  },
  setPrototypeOf() {
    throw Error("Cannot set prototype of Proxies created by ts-mixer");
  },
  getOwnPropertyDescriptor(_3, prop) {
    return Object.getOwnPropertyDescriptor(getIngredientWithProp(prop, ingredients) || {}, prop);
  },
  defineProperty() {
    throw new Error("Cannot define new properties on Proxies created by ts-mixer");
  },
  has(_3, prop) {
    return getIngredientWithProp(prop, ingredients) !== void 0 || prototype[prop] !== void 0;
  },
  get(_3, prop) {
    return (getIngredientWithProp(prop, ingredients) || prototype)[prop];
  },
  set(_3, prop, val) {
    const ingredientWithProp = getIngredientWithProp(prop, ingredients);
    if (ingredientWithProp === void 0)
      throw new Error("Cannot set new properties on Proxies created by ts-mixer");
    ingredientWithProp[prop] = val;
    return true;
  },
  deleteProperty() {
    throw new Error("Cannot delete properties on Proxies created by ts-mixer");
  },
  ownKeys() {
    return ingredients.map(Object.getOwnPropertyNames).reduce((prev, curr) => curr.concat(prev.filter((key) => curr.indexOf(key) < 0)));
  }
});
var softMixProtos = (ingredients, constructor) => proxyMix([...ingredients, { constructor }]);
var settings = {
  initFunction: null,
  staticsStrategy: "copy",
  prototypeStrategy: "copy",
  decoratorInheritance: "deep"
};
var mixins = /* @__PURE__ */ new WeakMap();
var getMixinsForClass = (clazz) => mixins.get(clazz);
var registerMixins = (mixedClass, constituents) => mixins.set(mixedClass, constituents);
var mergeObjectsOfDecorators = (o1, o2) => {
  var _a, _b;
  const allKeys = unique([...Object.getOwnPropertyNames(o1), ...Object.getOwnPropertyNames(o2)]);
  const mergedObject = {};
  for (let key of allKeys)
    mergedObject[key] = unique([...(_a = o1 === null || o1 === void 0 ? void 0 : o1[key]) !== null && _a !== void 0 ? _a : [], ...(_b = o2 === null || o2 === void 0 ? void 0 : o2[key]) !== null && _b !== void 0 ? _b : []]);
  return mergedObject;
};
var mergePropertyAndMethodDecorators = (d1, d2) => {
  var _a, _b, _c, _d;
  return {
    property: mergeObjectsOfDecorators((_a = d1 === null || d1 === void 0 ? void 0 : d1.property) !== null && _a !== void 0 ? _a : {}, (_b = d2 === null || d2 === void 0 ? void 0 : d2.property) !== null && _b !== void 0 ? _b : {}),
    method: mergeObjectsOfDecorators((_c = d1 === null || d1 === void 0 ? void 0 : d1.method) !== null && _c !== void 0 ? _c : {}, (_d = d2 === null || d2 === void 0 ? void 0 : d2.method) !== null && _d !== void 0 ? _d : {})
  };
};
var mergeDecorators = (d1, d2) => {
  var _a, _b, _c, _d, _e2, _f;
  return {
    class: unique([...(_a = d1 === null || d1 === void 0 ? void 0 : d1.class) !== null && _a !== void 0 ? _a : [], ...(_b = d2 === null || d2 === void 0 ? void 0 : d2.class) !== null && _b !== void 0 ? _b : []]),
    static: mergePropertyAndMethodDecorators((_c = d1 === null || d1 === void 0 ? void 0 : d1.static) !== null && _c !== void 0 ? _c : {}, (_d = d2 === null || d2 === void 0 ? void 0 : d2.static) !== null && _d !== void 0 ? _d : {}),
    instance: mergePropertyAndMethodDecorators((_e2 = d1 === null || d1 === void 0 ? void 0 : d1.instance) !== null && _e2 !== void 0 ? _e2 : {}, (_f = d2 === null || d2 === void 0 ? void 0 : d2.instance) !== null && _f !== void 0 ? _f : {})
  };
};
var decorators = /* @__PURE__ */ new Map();
var findAllConstituentClasses = (...classes) => {
  var _a;
  const allClasses = /* @__PURE__ */ new Set();
  const frontier = /* @__PURE__ */ new Set([...classes]);
  while (frontier.size > 0) {
    for (let clazz of frontier) {
      const protoChainClasses = protoChain(clazz.prototype).map((proto) => proto.constructor);
      const mixinClasses = (_a = getMixinsForClass(clazz)) !== null && _a !== void 0 ? _a : [];
      const potentiallyNewClasses = [...protoChainClasses, ...mixinClasses];
      const newClasses = potentiallyNewClasses.filter((c3) => !allClasses.has(c3));
      for (let newClass of newClasses)
        frontier.add(newClass);
      allClasses.add(clazz);
      frontier.delete(clazz);
    }
  }
  return [...allClasses];
};
var deepDecoratorSearch = (...classes) => {
  const decoratorsForClassChain = findAllConstituentClasses(...classes).map((clazz) => decorators.get(clazz)).filter((decorators2) => !!decorators2);
  if (decoratorsForClassChain.length == 0)
    return {};
  if (decoratorsForClassChain.length == 1)
    return decoratorsForClassChain[0];
  return decoratorsForClassChain.reduce((d1, d2) => mergeDecorators(d1, d2));
};
var directDecoratorSearch = (...classes) => {
  const classDecorators = classes.map((clazz) => getDecoratorsForClass(clazz));
  if (classDecorators.length === 0)
    return {};
  if (classDecorators.length === 1)
    return classDecorators[0];
  return classDecorators.reduce((d1, d2) => mergeDecorators(d1, d2));
};
var getDecoratorsForClass = (clazz) => {
  let decoratorsForClass = decorators.get(clazz);
  if (!decoratorsForClass) {
    decoratorsForClass = {};
    decorators.set(clazz, decoratorsForClass);
  }
  return decoratorsForClass;
};
function Mixin(...constructors) {
  var _a, _b, _c;
  const prototypes = constructors.map((constructor) => constructor.prototype);
  const initFunctionName = settings.initFunction;
  if (initFunctionName !== null) {
    const initFunctions = prototypes.map((proto) => proto[initFunctionName]).filter((func) => typeof func === "function");
    const combinedInitFunction = function(...args) {
      for (let initFunction of initFunctions)
        initFunction.apply(this, args);
    };
    const extraProto = { [initFunctionName]: combinedInitFunction };
    prototypes.push(extraProto);
  }
  function MixedClass(...args) {
    for (const constructor of constructors)
      copyProps(this, new constructor(...args));
    if (initFunctionName !== null && typeof this[initFunctionName] === "function")
      this[initFunctionName].apply(this, args);
  }
  MixedClass.prototype = settings.prototypeStrategy === "copy" ? hardMixProtos(prototypes, MixedClass) : softMixProtos(prototypes, MixedClass);
  Object.setPrototypeOf(MixedClass, settings.staticsStrategy === "copy" ? hardMixProtos(constructors, null, ["prototype"]) : proxyMix(constructors, Function.prototype));
  let DecoratedMixedClass = MixedClass;
  if (settings.decoratorInheritance !== "none") {
    const classDecorators = settings.decoratorInheritance === "deep" ? deepDecoratorSearch(...constructors) : directDecoratorSearch(...constructors);
    for (let decorator of (_a = classDecorators === null || classDecorators === void 0 ? void 0 : classDecorators.class) !== null && _a !== void 0 ? _a : []) {
      const result = decorator(DecoratedMixedClass);
      if (result) {
        DecoratedMixedClass = result;
      }
    }
    applyPropAndMethodDecorators((_b = classDecorators === null || classDecorators === void 0 ? void 0 : classDecorators.static) !== null && _b !== void 0 ? _b : {}, DecoratedMixedClass);
    applyPropAndMethodDecorators((_c = classDecorators === null || classDecorators === void 0 ? void 0 : classDecorators.instance) !== null && _c !== void 0 ? _c : {}, DecoratedMixedClass.prototype);
  }
  registerMixins(DecoratedMixedClass, constructors);
  return DecoratedMixedClass;
}
var applyPropAndMethodDecorators = (propAndMethodDecorators, target) => {
  const propDecorators = propAndMethodDecorators.property;
  const methodDecorators = propAndMethodDecorators.method;
  if (propDecorators)
    for (let key in propDecorators)
      for (let decorator of propDecorators[key])
        decorator(target, key);
  if (methodDecorators)
    for (let key in methodDecorators)
      for (let decorator of methodDecorators[key])
        decorator(target, key, Object.getOwnPropertyDescriptor(target, key));
};

// node_modules/asyncsignal/dist/index.mjs
var j = (t, r, e) => new Promise((n, o) => {
  var f2 = (l) => {
    try {
      u(e.next(l));
    } catch (y3) {
      o(y3);
    }
  }, d2 = (l) => {
    try {
      u(e.throw(l));
    } catch (y3) {
      o(y3);
    }
  }, u = (l) => l.done ? n(l.value) : Promise.resolve(l.value).then(f2, d2);
  u((e = e.apply(t, r)).next());
});
var b = class extends Error {
};
var I = 0;
function R(t, r = { timeout: 0 }) {
  let e = false, n = false, o = false, f2, d2, u = 0, l, y3 = ++I, m2 = function() {
    clearTimeout(u), e = false, n = false, o = false, l = new Promise((s, g2) => {
      f2 = s, d2 = g2;
    });
  };
  m2();
  function c3() {
    return j(this, arguments, function* (s = r.timeout, g2) {
      if (typeof t == "function" && t()) {
        e = true;
        return;
      }
      return (e || n) && m2(), s > 0 && (u = setTimeout(() => {
        e = true;
        try {
          g2 instanceof Error ? d2(g2) : f2(g2);
        } catch (P3) {
        }
      }, s)), o = true, l;
    });
  }
  return c3.id = y3, c3.resolve = (s) => {
    if (clearTimeout(u), !!o && !(e || n)) {
      if (typeof t == "function" && t()) if (t()) f2(s);
      else return;
      else f2(s);
      e = true;
    }
  }, c3.reject = (s) => {
    clearTimeout(u), o && (e || n || (d2(typeof s == "string" ? new Error(s) : s instanceof Error ? s : new Error()), n = true));
  }, c3.destroy = () => {
    clearTimeout(u), o && d2(new b()), e = false, o = false, n = false, l = null;
  }, c3.reset = m2, c3.isResolved = () => e, c3.isRejected = () => n, c3.isPending = () => o, c3;
}
var i;
i = /* @__PURE__ */ new WeakMap();

// node_modules/flexvars/dist/index.mjs
var T = Object.defineProperty;
var D = Object.getOwnPropertySymbols;
var _ = Object.prototype.hasOwnProperty;
var B = Object.prototype.propertyIsEnumerable;
var R2 = (e, t, r) => t in e ? T(e, t, { enumerable: true, configurable: true, writable: true, value: r }) : e[t] = r;
var b2 = (e, t) => {
  for (var r in t || (t = {})) _.call(t, r) && R2(e, r, t[r]);
  if (D) for (var r of D(t)) B.call(t, r) && R2(e, r, t[r]);
  return e;
};
var h = ((e) => typeof __require != "undefined" ? __require : typeof Proxy != "undefined" ? new Proxy(e, { get: (t, r) => (typeof __require != "undefined" ? __require : t)[r] }) : e)(function(e) {
  if (typeof __require != "undefined") return __require.apply(this, arguments);
  throw Error('Dynamic require of "' + e + '" is not supported');
});
var c = { Abort: Symbol("Abort"), Throw: Symbol("Throw"), Ignore: Symbol("Ignore") };
var a = class extends Error {
  constructor(r) {
    super();
    this.value = r;
  }
};
var p = class extends a {
};
var x = class extends a {
};
var g = class extends a {
};
var S = { name: "error", priority: "before", args: ["operate", "value"], default: { operate: "ignore" }, next(e, t, r) {
  let n = t.operate.toLowerCase(), i2 = t.value;
  return r.onError = (l, o, s, f2) => {
    if (!(l instanceof Error) || l instanceof a) throw l;
    if (n == "throw") throw i2 ? new Error(i2) : l;
    if (n == "abort") throw new p(i2);
    if (n == "ignore") throw new x(i2);
    return o;
  }, e;
} };
var P = { name: "empty", priority: "before", args: ["operate", "value"], default: { operate: "abort", value: "" }, next(e, t, r) {
  let n = t.operate.toLowerCase(), i2 = t.value;
  return r.onEmpty = () => {
    if (n == "throw") throw new g();
    if (n == "abort") throw new p(i2);
    if (n == "ignore") throw new x();
    return n;
  }, e;
} };
function F(e, ...t) {
  if (t.length === 0) return e;
  let r = t.map((n, i2) => {
    let l = Object.entries(n || {});
    return l.some(([o, s]) => s === void 0) ? l.reduce((o, [s, f2]) => (f2 !== void 0 && (o[s] = f2), o), {}) : n;
  });
  return Object.assign(e, ...r);
}
((e) => typeof h < "u" ? h : typeof Proxy < "u" ? new Proxy(e, { get: (t, r) => (typeof h < "u" ? h : t)[r] }) : e)(function(e) {
  if (typeof h < "u") return h.apply(this, arguments);
  throw Error('Dynamic require of "' + e + '" is not supported');
});
function y(e) {
  if (typeof e != "object" || e === null) return false;
  var t = Object.getPrototypeOf(e);
  if (t === null) return true;
  for (var r = t; Object.getPrototypeOf(r) !== null; ) r = Object.getPrototypeOf(r);
  return t === r;
}
function v(e) {
  return e && typeof e == "function";
}
function w(e, t, r) {
  if (typeof t == "string") {
    let n = 0, i2;
    for (; (i2 = e.indexOf(t, n)) > -1; ) {
      let l = typeof r == "function" ? r(t) : r, o = e.length;
      e = e.substring(0, i2) + l + e.substring(i2 + t.length), n = i2 + l.length + e.length - o;
    }
  } else {
    let n;
    if (!t.global || !t.multiline) throw new Error("The search parameter must be enabled '/gm' option");
    for (; (n = t.exec(e)) !== null; ) {
      n.index === t.lastIndex && t.lastIndex++;
      let i2 = e.length, l = n[0].length, o = typeof r == "function" ? r(n[0], ...n) : r;
      e = e.substring(0, n.index) + o + e.substring(n.index + l), t.lastIndex += e.length - i2;
    }
  }
  return e;
}
String.prototype.replaceAll || (String.prototype.replaceAll = function(e, t) {
  return w(this, e, t);
});
function m(e) {
  return e.replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1");
}
function C(e, t = false) {
  if (typeof e == "number") return true;
  if (typeof e != "string" || t) return false;
  try {
    if (e.includes(".")) {
      let r = parseFloat(e);
      return e.endsWith(".") ? !isNaN(r) && String(r).length === e.length - 1 : !isNaN(r) && String(r).length === e.length;
    } else {
      let r = parseInt(e);
      return !isNaN(r) && String(r).length === e.length;
    }
  } catch (r) {
    return false;
  }
}
var q = /\n/gm;
var W = /(["'])(.*?)(\1)/gm;
var k = /([\s\[\,\{])(\w+)(\s*\:)/gm;
function V(e, t) {
  try {
    return JSON.parse(e, (n, i2) => t ? t(n, i2) : i2);
  } catch (n) {
  }
  let r = e.replace(q, (n, i2, l) => {
    let o = l.slice(0, i2).trim(), s = l.slice(i2 + 1).trim();
    return !/,$/.test(o) && !/[\[\{\}]$/.test(o) && !/^\}/.test(s) ? `,
` : `
`;
  });
  return r = r.replaceAll(W, (n, i2, l) => `"${encodeURI(l)}"`), r = r.replaceAll(k, (n, i2, l, o) => `${i2}"${l}"${o}`), r = r.replaceAll("，", ",").replaceAll("“", '"').replaceAll("”", '"'), JSON.parse(r, (n, i2) => (typeof i2 == "string" && (i2 = decodeURI(i2)), i2));
}
function J(e, t = "{", r = "}") {
  let n = 0, i2 = 0;
  for (; n < e.length; ) {
    let l = e.slice(n, n + t.length), o = e.slice(n, n + r.length);
    if (l == t) {
      i2++, e = e.substring(0, n + t.length) + `${i2}%` + e.substring(n + t.length), n += t.length + String(i2).length + 1;
      continue;
    }
    if (o == r) {
      i2 > 0 && (e = e.substring(0, n) + `%${i2}` + e.substring(n)), n += r.length + String(i2).length + 1, i2--;
      continue;
    }
    n++;
  }
  return e;
}
function H(e, ...t) {
  return t.length == 0 && (t.push(["{", "}"]), t.push(["[", "]"])), t.forEach((r) => {
    e.includes(r[0]) && e.includes(r[1]) && (e = J(e, ...r));
  }), e;
}
function G(e, t, r) {
  return [[t, new RegExp(m(t) + "\\d+%")], [r, new RegExp("%\\d+" + m(r))]].forEach(([i2, l]) => {
    let o;
    for (; (o = l.exec(e)) !== null; ) o.index === l.lastIndex && l.lastIndex++, e = e.replace(l, i2);
  }), e;
}
function E(e, ...t) {
  return t.length == 0 && (t.push(["{", "}"]), t.push(["[", "]"])), t.forEach(([r, n]) => {
    e.includes(r) && e.includes(n) && (e = G(e, r, n));
  }), e;
}
function M(e) {
  return e ? e.trim().substring(1).trim().split("|").map((r) => r.trim()).map((r) => {
    if (r == "") return null;
    let n = r.indexOf("("), i2 = r.lastIndexOf(")");
    if (n !== -1 && i2 !== -1) {
      let l = r.substring(n + 1, i2).trim(), o = U(l);
      return [r.substring(0, n), o];
    } else return [r, []];
  }).filter((r) => Array.isArray(r)) : [];
}
function z(...e) {
  e.length == 0 && (e.push(["{", "}"]), e.push(["[", "]"]));
  let t = e.map(([r, n]) => `(${m(r)}1%.*?%1${m(n)})`);
  return L.replace("__TAG_REGEXP__", t.length > 0 ? t.join("|") + "|" : "");
}
var L = String.raw`((([\'\"])(.*?)\3))|__TAG_REGEXP__([\d]+\.?[\d]?)|((true|false|null)(?=[,\b\s]))|([\w\.]+)|((?<=,)\s*(?=,))(?<=\s*[,\)]?\s*)`;
function U(e) {
  let t = [], r;
  e = H(e);
  try {
    let n = new RegExp(z(), "g");
    for (; (r = n.exec(e)) !== null; ) {
      r.index === n.lastIndex && n.lastIndex++;
      let i2 = r[0];
      if (i2.trim() == "") i2 = void 0;
      else if (i2.startsWith("'") && i2.endsWith("'") || i2.startsWith('"') && i2.endsWith('"')) i2 = i2.substring(1, i2.length - 1), i2 = E(i2);
      else if (i2.startsWith("{") && i2.endsWith("}") || i2.startsWith("[") && i2.endsWith("]")) try {
        i2 = E(i2), i2 = V(i2);
      } catch (l) {
      }
      else ["true", "false", "null"].includes(i2) ? i2 = JSON.parse(i2) : C(i2) ? i2 = parseFloat(i2) : i2 = E(String(i2));
      t.push(i2);
    }
  } catch (n) {
  }
  return t;
}
var X = new RegExp("(?<!\\\\)\\{([\\S]+\\s)?\\s*(\\w+)?((\\s*\\|\\s*\\w*(\\(.*?\\)){0,1}\\s*)*)\\s*(\\s[\\S]+)?\\}", "gm");
function O(e, t, r = {}) {
  let n = e, i2, l = Object.assign({ replaceAll: true }, r), o = X;
  for (o.lastIndex = 0; (i2 = o.exec(n)) !== null; ) {
    i2.index === o.lastIndex && o.lastIndex++;
    let s = i2[2] || "", f2 = (i2[1] || "").trim(), u = (i2[6] || "").trim(), d2 = n.length, N2 = M(i2[3] || "");
    if (v(t)) {
      let A2 = t(s, f2, u, N2, i2[0]);
      l.replaceAll ? n = w(n, i2[0], A2) : n = n.replace(i2[0], A2), o.lastIndex += n.length - d2;
    }
  }
  return n;
}
function I2(e, t) {
  let r = t.value;
  if (e.length > 0) {
    let n = ee.call(this, e, t);
    for (let i2 of n) try {
      r = i2.call(this, r);
    } catch (l) {
      if (l instanceof g) throw l;
      if (l instanceof a) {
        if (l.value != null && (r = l.value), l instanceof p) break;
      } else throw l;
    }
  }
  return this.options.isEmpty(r) || (r = `${t.prefix}${r}${t.suffix}`), r;
}
function K(e, t, r, n) {
  if (!this.options.isEmpty(e)) return e;
  let i2 = n.onEmpty || r.onEmpty || this.options.onEmpty;
  if (typeof i2 != "function") return e;
  let l = i2.call(this, e, t, n);
  throw l instanceof Error ? l : l == c.Abort ? new p() : l == c.Ignore ? new x() : l == c.Throw ? new g() : new p(l);
}
function Q(e, t, r, n, i2) {
  let l = i2.onError || n.onError || this.options.onError;
  if (typeof l != "function") return t;
  let o = l.call(this, e, t, r, i2);
  throw o instanceof Error ? o : o == c.Abort ? new p() : o == c.Ignore ? new x() : o == c.Throw ? e : new p(o);
}
function Y(e, t, r) {
  var i2;
  let n = Object.assign({}, typeof e.default == "function" ? e.default() : e.default);
  return t.length == 1 && y(t[0]) ? F(n, t[0]) : e.args && ((i2 = e.args) == null ? void 0 : i2.length) > 0 && e.args.forEach((l, o) => {
    t[o] !== void 0 && (n[l] = t[o]);
  }), (l) => {
    let o;
    try {
      r.args = t, o = e.next.call(this, l, n, r), o = K.call(this, o, n, e, r);
    } catch (s) {
      if (s.filter = e.name, s instanceof a) throw s;
      return this.log(`当执行过滤器器<${r.match}:${e.name}>时出错:${s.stack}`), Q.call(this, s, l, n, e, r);
    }
    return String(o);
  };
}
function Z(e) {
  let t = [], r = e.map(([n, i2]) => [this.getFilter.call(this, n), i2]).filter(([n]) => n != null);
  return r = r.reduce((n, [i2, l]) => (i2 && (i2.priority == "before" ? n.unshift([i2, l]) : i2.priority == "after" ? t.push([i2, l]) : n.push([i2, l])), n), []), r.concat(t);
}
function ee(e, t) {
  let r = Z.call(this, e), n = [];
  for (let [i2, l] of r) n.push(Y.call(this, i2, l, t));
  return n;
}
var $ = class {
  constructor(t) {
    this.options = F({ log: console.log, filters: {}, missing: "default", filterContext: {} }, t), this.addDefaultHandlers(), this.addBuildinFilters(), this.normalizeFilters();
  }
  get filters() {
    return this.options.filters;
  }
  addDefaultHandlers() {
    this.options.onError = () => c.Ignore, this.options.onEmpty = () => "", this.options.isEmpty = (t) => t === null || t === "";
  }
  addFilter(t) {
    if (!t.name) throw new Error("Filter name cannot be empty");
    if (typeof t.next != "function") throw new Error("The filter must provide a next function");
    return t = F({ priority: "normal" }, t), this.filters[t.name] = t;
  }
  removeFilter(t) {
    delete this.filters[t];
  }
  getFilter(t) {
    var r;
    if (t in this.options.filters) return this.options.filters[t];
    {
      let n = (r = this.options.getFilter) == null ? void 0 : r.call(this, t);
      return typeof n == "function" ? { name: t, next: n } : t in String.prototype ? { name: t, next: (i2, l, o) => i2[t](...o.args) } : n;
    }
  }
  addBuildinFilters() {
    this.addFilter(S), this.addFilter(P);
  }
  normalizeFilters() {
    Object.entries(this.options.filters).forEach(([t, r]) => {
      let n = F({ name: t, priority: "normal", args: null, next: (i2) => i2 }, typeof r == "function" ? { filter: r } : r);
      this.options.filters[t] = n;
    });
  }
  getMissingValue(t, r) {
    let n = this.options.missing;
    if (n == "default") return "";
    if (n == "ignore") return r;
    if (typeof n == "function") return n.call(this, t);
  }
  replace(t, ...r) {
    if (r.length === 0) return t;
    if (r.length === 1 && typeof r[0] == "function" && (r[0] = r[0].call(this)), r.length === 1 && y(r[0])) {
      let n = r[0];
      return O.call(this, t, (i2, l, o, s, f2) => {
        let u = i2 in n ? n[i2] : this.getMissingValue(i2, f2);
        return typeof u == "function" && (u = u.call(this)), I2.call(this, s, b2({ name: i2, value: u, prefix: l, suffix: o, template: t, match: f2, args: [] }, this.options.filterContext));
      });
    } else {
      let n = r.length === 1 && Array.isArray(r[0]) ? [...r[0]] : r, i2 = 0;
      return O.call(this, t, (l, o, s, f2, u) => {
        let d2 = n.length > i2 ? n[i2++] : this.getMissingValue(i2, u);
        return typeof d2 == "function" && (d2 = d2.call(this)), I2.call(this, f2, b2({ name: l, value: d2, prefix: o, suffix: s, template: t, match: u, args: [] }, this.options.filterContext));
      }, { replaceAll: false });
    }
  }
  log(t, ...r) {
    this.options.debug && this.options.log(t, ...r);
  }
};

// node_modules/@voerkai18n/runtime/dist/index.mjs
var se = Object.defineProperty;
var ye = (i2, e, t) => e in i2 ? se(i2, e, { enumerable: true, configurable: true, writable: true, value: t }) : i2[e] = t;
var a2 = (i2, e) => se(i2, "name", { value: e, configurable: true });
var y2 = ((i2) => typeof __require < "u" ? __require : typeof Proxy < "u" ? new Proxy(i2, { get: (e, t) => (typeof __require < "u" ? __require : e)[t] }) : i2)(function(i2) {
  if (typeof __require < "u") return __require.apply(this, arguments);
  throw Error('Dynamic require of "' + i2 + '" is not supported');
});
var c2 = (i2, e, t) => ye(i2, typeof e != "symbol" ? e + "" : e, t);
var v2;
var re = (v2 = class {
  constructor(e) {
    this._listeners = /* @__PURE__ */ new Map(), this._lastMessage = {}, this.options = Object.assign({ ignoreError: false }, e);
  }
  get listeners() {
    return this._listeners;
  }
  on() {
    let e = arguments[0], t = arguments[1], s = arguments[2], { objectify: r = true, count: g2 = -1 } = Object.assign({}, s);
    this._listeners.has(e) || this._listeners.set(e, /* @__PURE__ */ new Map());
    let o = ++v2.listenerSeqId, n = this._listeners.get(e);
    return n == null ? void 0 : n.set(o, [t, g2]), this._emitRetainEvent(e, o, n), r ? { off: a2(() => {
      n == null ? void 0 : n.delete(o), (n == null ? void 0 : n.size) == 0 && this._listeners.delete(e);
    }, "off") } : o;
  }
  onAny(e, t) {
    return this.on("*", e, t);
  }
  _emitRetainEvent(e, t, s) {
    e in this._lastMessage && this._executeListener(t, s, this._lastMessage[e]);
  }
  once(e, t, s) {
    return this.on(e, t, Object.assign({}, s, { count: 1 }));
  }
  _forEachListeners(e) {
    let t = false;
    for (let [s, r] of this._listeners.entries()) {
      if (t) break;
      for (let [g2, [o, n]] of r.entries()) {
        if (t) break;
        t = e({ event: s, listenerId: g2, listener: o, count: n, eventListeners: r }) === false;
      }
    }
  }
  _forEachEventListeners(e, t) {
    let s = false, r = [[e, this._listeners.get(e)]];
    for (let [g2, o] of r) if (o) for (let [n, [l, h2]] of o) {
      if (s) break;
      s = t({ event: g2, listenerId: n, listener: l, count: h2, eventListeners: o }) === false;
    }
  }
  off() {
    if (arguments.length == 1) {
      if (typeof arguments[0] == "number") this._forEachListeners(({ listenerId: e, eventListeners: t, event: s }) => {
        var _a;
        if (e == arguments[0]) return t.delete(e), ((_a = this._listeners.get(s)) == null ? void 0 : _a.size) == 0 && this._listeners.delete(s), false;
      });
      else if (typeof arguments[0] == "function") {
        let e = arguments[0];
        this._forEachListeners(({ listenerId: t, listener: s, eventListeners: r, event: g2 }) => {
          var _a;
          s == e && (r.delete(t), ((_a = this._listeners.get(g2)) == null ? void 0 : _a.size) == 0 && this._listeners.delete(g2));
        });
      }
    } else arguments.length == 2 && typeof arguments[0] == "string" && typeof arguments[1] == "function" && this._forEachEventListeners(arguments[0], ({ event: e, listenerId: t, listener: s, eventListeners: r }) => {
      var _a;
      e == arguments[0] && s == arguments[1] && (r.delete(t), ((_a = this._listeners.get(e)) == null ? void 0 : _a.size) == 0 && this._listeners.delete(e));
    });
  }
  waitFor(e, t = 0) {
    return new Promise((s, r) => {
      let g2, o = false, n;
      t > 0 && (g2 = setTimeout(() => {
        o = true, this.off(n), r(new Error("Timeout"));
      }, t)), n = this.once(e, (l) => {
        o || (clearTimeout(g2), s(l));
      });
    });
  }
  offAll(e) {
    e ? this._listeners.delete(e) : this._listeners.clear();
  }
  _executeListener(e, t, s) {
    if (!t) return;
    let r = t.get(e);
    if (r) try {
      return r[0](s);
    } catch (g2) {
      if (!this.options.ignoreError) throw g2;
    } finally {
      r[1] > -1 && (r[1] = r[1] - 1, r[1] == 0 && t.delete(e));
    }
  }
  _executeListeners(e, t, s) {
    let r = [];
    return this._forEachEventListeners(e, ({ event: g2, listenerId: o, eventListeners: n }) => {
      r.push(this._executeListener(o, n, t)), typeof s == "function" && s(o), n.size == 0 && this._listeners.delete(g2);
    }), r;
  }
  emit(e, t, s) {
    return s && (this._lastMessage[e] = t), this._executeListeners(e, t);
  }
  async emitAsync(e, t, s) {
    return await Promise.allSettled(this.emit(e, t, s));
  }
}, a2(v2, "l"), v2);
re.listenerSeqId = 0;
var M2 = re;
((i2) => typeof y2 < "u" ? y2 : typeof Proxy < "u" ? new Proxy(i2, { get: a2((e, t) => (typeof y2 < "u" ? y2 : e)[t], "get") }) : i2)(function(i2) {
  if (typeof y2 < "u") return y2.apply(this, arguments);
  throw Error('Dynamic require of "' + i2 + '" is not supported');
});
function ie() {
  return Date.now().toString() + parseInt(String(Math.random() * 1e3));
}
a2(ie, "getId");
function x2(i2, e = false) {
  if (typeof i2 == "number") return true;
  if (typeof i2 != "string" || e) return false;
  try {
    if (i2.includes(".")) {
      let t = parseFloat(i2);
      return i2.endsWith(".") ? !isNaN(t) && String(t).length === i2.length - 1 : !isNaN(t) && String(t).length === i2.length;
    } else {
      let t = parseInt(i2);
      return !isNaN(t) && String(t).length === i2.length;
    }
  } catch {
    return false;
  }
}
a2(x2, "r");
function P2(i2) {
  return x2(i2);
}
a2(P2, "isMessageId");
function ae(i2) {
  return i2 && typeof i2 == "object" && i2.__VoerkaI18nScope__;
}
a2(ae, "isI18nScope");
async function ne(i2) {
  let e = await i2.call(this);
  return e && "__esModule" in e || Symbol.toStringTag in e ? e.default : e;
}
a2(ne, "loadAsyncModule");
function oe(i2) {
  return i2 && typeof i2.get == "function" && typeof i2.set == "function" && typeof i2.remove == "function";
}
a2(oe, "isStorage");
async function ge(i2) {
  return (await Promise.allSettled(i2)).map((t) => t.status === "fulfilled" ? t.value : t.reason);
}
a2(ge, "execAsyncs");
function C2() {
  try {
    return typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
  } catch {
    return false;
  }
}
a2(C2, "isBrowser");
var b3 = class b4 extends M2 {
  constructor(t) {
    super();
    c2(this, "__VoerkaI18nManager__", true);
    c2(this, "_scopes", []);
    c2(this, "_appScope");
    if (b4.instance) return b4.instance;
    if (!t) throw new Error("create VoerkaI18nManager failed, appScope is required");
    this._registerAppScope(t), this._registerScopes(), this._loadPlugins(), b4.instance = this, globalThis.VoerkaI18n = this;
  }
  get debug() {
    return this.scope.debug;
  }
  get logger() {
    return this.scope.logger;
  }
  get scopes() {
    return this._scopes;
  }
  get activeLanguage() {
    return this._appScope.activeLanguage;
  }
  get defaultLanguage() {
    return this._appScope.defaultLanguage;
  }
  get loader() {
    return this._appScope.loader;
  }
  get storage() {
    return this.scope.storage;
  }
  get languages() {
    return this.scope.languages;
  }
  get scope() {
    return this._appScope;
  }
  _registerScopes() {
    let t = globalThis.__VoerkaI18nScopes__;
    t && Array.isArray(t) && t.forEach((s) => this.register(s)), delete globalThis.__VoerkaI18nScopes__;
  }
  getScope(t) {
    return this._scopes.find((s) => s.id === t);
  }
  _loadPlugins() {
    let t = globalThis.__VoerkaI18nPlugins__;
    t && Array.isArray(t) && t.forEach((s) => s(this)), delete globalThis.__VoerkaI18nPlugins__;
  }
  registerPlugin(t) {
    typeof t == "function" && t(this);
  }
  _registerAppScope(t) {
    this._scopes.push(t), this._appScope = t, this.logger.debug("VoerkaI18nScope<" + t.id + "> is registered as appScope"), this.emitAsync("init", () => this._appScope.activeLanguage, true);
  }
  register(t) {
    if (!ae(t)) throw new Error("register scope failed, invalid scope");
    this._scopes.push(t), t.bind(this), this.logger.debug(`VoerkaI18nScope<${t.id}> is registered`);
  }
  async change(t) {
    await this._refreshScopes(t);
    let s = this._appScope.activeLanguage;
    return this.scope.saveLanguage(), this.emit("change", s, true), this.logger.info("language changed to: " + s), s;
  }
  async _refreshScopes(t) {
    let s = this._scopes.map((r) => r.refresh(t));
    await ge(s);
  }
  async refresh() {
    return await this._refreshScopes(this.activeLanguage);
  }
  ready(t, s) {
    return this.waitFor("ready", s).then((r) => {
      t && t.call(this, r);
    });
  }
  clearPatchedMessages() {
    this._scopes.forEach((t) => t.clearPatchedMessages());
  }
  hasLanguage(t) {
    return this.languages.findIndex((s) => s.name == t) != -1;
  }
  clearLanguage() {
    this.scope.clearLanguage();
  }
  saveLanguage() {
    this.scope.saveLanguage();
  }
  restoreLanguage() {
    this.scope.restoreLanguage();
  }
};
a2(b3, "VoerkaI18nManager"), c2(b3, "instance");
var L2 = b3;
var T2 = { get(i2) {
  if (globalThis.localStorage) return globalThis.localStorage.getItem(i2);
}, set(i2, e) {
  globalThis.localStorage && globalThis.localStorage.setItem(i2, e);
}, remove(i2) {
  globalThis.localStorage && globalThis.localStorage.removeItem(i2);
} };
var pt = "en";
var le = [{ name: "zh", title: "中文", default: true, active: true }, { name: "en", title: "英文" }];
var mt = ["String", "Number", "Boolean", "Object", "Array", "Function", "Error", "Symbol", "RegExp", "Date", "Null", "Undefined", "Set", "Map", "WeakSet", "WeakMap"];
var dt = Symbol("VoerkaI18nFormatter");
var _t = Symbol("VoerkaI18nFormatterBuilder");
var yt = { debug: true, storage: T2, languages: [{ name: "zh", title: "中文", default: true, active: true }, { name: "en", title: "英文" }] };
var vt = "vt-msg";
var bt = "data-id";
var xt = "data-scope";
var R3 = class R4 {
  constructor() {
    c2(this, "_eventEmitter");
  }
  _getEventEmitter() {
    return this.attached ? this.manager : (this._eventEmitter || (this._eventEmitter = new M2()), this._eventEmitter);
  }
  on(e, t) {
    return this._getEventEmitter().on(e, t);
  }
  once(e, t) {
    return this._getEventEmitter().once(e, t);
  }
  off(e, t) {
    return this._getEventEmitter().off(e, t);
  }
  waitFor(e, t) {
    return this._getEventEmitter().waitFor(e, t);
  }
  async emit(e, t, s) {
    return await this._getEventEmitter().emitAsync(e, t, s);
  }
};
a2(R3, "EventEmitterMixin");
var A = R3;
function f(i2) {
  return i2 && typeof i2 == "function";
}
a2(f, "t");
function d(i2) {
  if (typeof i2 != "object" || i2 === null) return false;
  var e = Object.getPrototypeOf(i2);
  if (e === null) return true;
  for (var t = e; Object.getPrototypeOf(t) !== null; ) t = Object.getPrototypeOf(t);
  return e === t;
}
a2(d, "o");
var S2;
var ce = (S2 = class extends Error {
}, a2(S2, "m"), S2);
var ve = 0;
function K2(i2, e = { timeout: 0 }) {
  let t = false, s = false, r = false, g2, o, n = 0, l, h2 = ++ve, u = a2(function() {
    clearTimeout(n), t = false, s = false, r = false, l = new Promise((m2, w2) => {
      g2 = m2, o = w2;
    });
  }, "g");
  u();
  async function p2(m2 = 0, w2) {
    if (typeof i2 == "function" && i2()) {
      t = true;
      return;
    }
    return (t || s) && u(), m2 > 0 && (n = setTimeout(() => {
      t = true;
      try {
        w2 instanceof Error ? o(w2) : g2(w2);
      } catch {
      }
    }, m2)), r = true, l;
  }
  return a2(p2, "o"), p2.id = h2, p2.resolve = (m2) => {
    if (clearTimeout(n), !!r && !(t || s)) {
      if (typeof i2 == "function" && i2()) if (i2()) g2(m2);
      else return;
      else g2(m2);
      t = true;
    }
  }, p2.reject = (m2) => {
    clearTimeout(n), r && (t || s || (o(typeof m2 == "string" ? new Error(m2) : m2 instanceof Error ? m2 : new Error()), s = true));
  }, p2.destroy = () => {
    clearTimeout(n), r && o(new ce()), t = false, r = false, s = false, l = null;
  }, p2.reset = u, p2.isResolved = () => t, p2.isRejected = () => s, p2.isPending = () => r, p2;
}
a2(K2, "p");
var q2 = class q3 {
  constructor() {
    c2(this, "_patching");
  }
  _getPatchKey(e) {
    return `voerkai18n_${this.id}_${e}_patched_messages`;
  }
  clearPatchedMessages(e) {
    if (this.storage) {
      let t = e ? [e] : this.languages.map((s) => s.name);
      for (let s of t) this.storage.remove(this._getPatchKey(s));
    }
  }
  async _patch(e) {
    var _a;
    this._patching = K2(), e || (e = this.activeLanguage), this._restorePatchedMessages(this.activeMessages, e);
    try {
      if (f(this.loader)) {
        let t = await this._loadMessagesFromLoader(e);
        d(t) && (Object.assign(this._activeMessages, t), this._setPatchedMessages(t, e), this.emit("patched", { language: e, scope: this.id }));
      }
    } catch (t) {
      this.logger.warn(`从远程加载语言补丁包<${e}>时出错: ${t.stack}(scope=${this.id})`);
    } finally {
      (_a = this._patching) == null ? void 0 : _a.resolve(), this._patching = void 0;
    }
  }
  _restorePatchedMessages(e, t) {
    let s = this._getPatchedMessages(t);
    d(s) && (Object.assign(e, s), this.emit("restore", { language: t, scope: this.id }), this.logger.debug(`成功恢复补丁语言包<${t}>(scope=${this.id})`));
  }
  _setPatchedMessages(e, t) {
    if (!(!this.attached && !this.storage)) try {
      this.storage && this.storage.set(this._getPatchKey(t), JSON.stringify(e));
    } catch (s) {
      this.logger.error(`保存语言包补丁(${t})时出错: ${s.stack}(scope=${this.id})`);
    }
  }
  _getPatchedMessages(e) {
    try {
      return this.storage && this.options.cachePatch ? this.storage.get(this._getPatchKey(e)) : {};
    } catch (t) {
      return this.logger.error(`读取语言包补丁(${e})时出错:${t.stack}(scope=${this.id})`), {};
    }
  }
};
a2(q2, "PatchMessageMixin");
var I3 = q2;
var z2 = class z3 extends Error {
};
a2(z2, "VoerkaI18nError");
var _2 = z2;
var D2 = class D3 extends _2 {
};
a2(D2, "VoerkaI18nInvalidLanguageError");
var he = D2;
var W2 = class W3 extends _2 {
};
a2(W2, "VoerkaI18nOnlyOneAppScopeError");
var ue = W2;
var B2 = class B3 extends _2 {
};
a2(B2, "VoerkaI18nChangeLanguageError");
var fe = B2;
var U2 = class U3 extends _2 {
};
a2(U2, "VoerkaI18nLoadLanguageError");
var E2 = U2;
var J2 = class J3 {
  constructor() {
    c2(this, "_refreshSignal");
  }
  async refresh(e, t) {
    this._refreshSignal || (this._refreshSignal = R()), e || (e = this.activeLanguage);
    let s = e, r, { patch: g2, fallback: o } = Object.assign({ fallback: false, patch: true }, t);
    try {
      r = await this._loadLanguageMessages(e), this._activeMessages = r, r && !r.$remote && g2 && await this._patch(e);
    } catch (n) {
      if (n && n instanceof _2) {
        let l = this.getFallbackLanguage(e);
        l && l !== e && (s = await this.refresh(l, { patch: g2, fallback: true }));
      }
    } finally {
      o || (this._activeLanguage = s, (typeof this.messages[s] == "function" || !(s in this.messages)) && (this.messages[s] = this._activeMessages), this._activeParagraphs = this.paragraphs[s], this._refreshSignal.resolve(), this._refreshSignal = void 0, await this.emit("scope/change", s, true));
    }
    return this._setLanguageAttr(), s;
  }
  async _loadLanguageMessages(e) {
    this.logger.debug(`准备加载语言包:${e}`);
    let t = this.messages[e], s;
    if (d(t)) s = t;
    else if (f(t)) try {
      s = await ne.call(this, t);
    } catch (r) {
      this.logger.error(`加载异步语言包<${e}>失败:${r.message}`), s = void 0;
    }
    if (!s && f(this.loader)) try {
      let r = await this._loadMessagesFromLoader(e);
      d(r) ? s = Object.assign({ $remote: true }, this.messages[this.defaultLanguage], r) : this.logger.error(`错误的语言包<${e}>数据:${r}`);
    } catch (r) {
      throw new E2(r.message);
    }
    if (!d(s)) throw new E2(e);
    return s;
  }
  async _loadMessagesFromLoader(e) {
    if (f(this.loader)) return await this.loader.call(this, e, this);
  }
  ready() {
    let e = typeof arguments[0] == "function" ? arguments[0] : void 0, t = typeof arguments[0] == "number" ? arguments[0] : arguments[1];
    if (typeof e == "function") this.manager.ready(e, t);
    else return new Promise((s) => {
      this.manager.ready(s, t);
    });
  }
  async changing(e) {
    var _a, _b;
    !this._refreshSignal && !this._patching || await Promise.all([(_a = this._refreshSignal) == null ? void 0 : _a.call(this, e), (_b = this._patching) == null ? void 0 : _b.call(this, e)]);
  }
};
a2(J2, "ChangeLanguageMixin");
var j2 = J2;
var Le = { warn: console.warn, error: console.error, info: console.info, debug: console.debug };
function pe(i2) {
  let e, t = [], s = a2((r, ...g2) => {
    let o = g2.join(" ");
    if (e) {
      if (!e.debug) return;
      e.emit("log", { level: r, message: o });
    } else if (e = globalThis.VoerkaI18n, e && e instanceof L2) if (e.debug) {
      t.push([r, o]);
      let n = a2((l, h2) => {
        i2 ? i2(l, h2) : Le[l](h2);
      }, "log");
      e.on("log", ({ level: l, message: h2 }) => n(l, h2)), t.forEach(([l, h2]) => n(l, h2));
    } else t.splice(0, t.length);
    else t.push([r, o]);
  }, "logOutput");
  return { warn: a2((...r) => s("warn", ...r), "warn"), error: a2((...r) => s("error", ...r), "error"), info: a2((...r) => s("info", ...r), "info"), debug: a2((...r) => s("debug", ...r), "debug") };
}
a2(pe, "createLogger");
var G2 = class G3 extends Error {
  constructor(e) {
    super(`Formatters of language<${e}> is not loaded,try to call load()`);
  }
};
a2(G2, "FormattersNotLoadedError");
var me = G2;
var H2 = class H3 {
  constructor(e) {
    c2(this, "_formatters", []);
    c2(this, "_scope");
    this._scope = e, this._formatters = e == null ? void 0 : e.options.formatters, this._registerFormatters();
  }
  get scope() {
    return this._scope;
  }
  get formatters() {
    return this._formatters;
  }
  _registerFormatters() {
    this._formatters && this._formatters.forEach((e) => {
      Array.isArray(e) ? this.register.apply(this, e) : this.register.apply(this, [e]);
    });
  }
  _addFormatter(e) {
    try {
      if (this.scope.interpolator.addFilter(e), e) {
        let t = this.scope.manager.scope;
        t.id !== this.scope.id && t.interpolator.addFilter(e);
      }
    } catch (t) {
      this.scope.logger.error(`fail while register formatter<${e.name}>：${t.stack}`);
    }
  }
  register(e, t, s) {
    let r = this.scope, g2 = e.next;
    e.next = function(o, n, l) {
      let h2 = l.getConfig;
      return l.getConfig = () => Object.assign({}, s, t == null ? void 0 : t[r.activeLanguage], h2(e.name)), g2.call(this, o, n, l);
    }, this._addFormatter(e);
  }
};
a2(H2, "VoerkaI18nFormatterManager");
var k2 = H2;
function de(i2) {
  return i2 && typeof i2 == "object" && i2.__VoerkaI18nManager__;
}
a2(de, "isI18nManger");
var Q2 = class Q3 {
  getLanguage(e) {
    let t = this.languages.findIndex((s) => s.name == e);
    if (t !== -1) return this.languages[t];
  }
  getFallbackLanguage(e) {
    let t = this.getLanguage(e);
    return t && t.fallback || this.options.fallback || this._defaultLanguage;
  }
  hasLanguage(e) {
    return this.languages.findIndex((t) => t.name == e) != -1;
  }
};
a2(Q2, "LanguageMixin");
var $2 = Q2;
var X2 = class X3 {
  _getPluraMessage(e, t) {
    try {
      return Array.isArray(e) ? e.length > t ? e[t] : e[e.length - 1] : e;
    } catch {
      return Array.isArray(e) ? e[0] : e;
    }
  }
  _getPluraValue(e) {
    let t = null, s = [];
    if (d(e)) {
      let r = e;
      for (let [g2, o] of Object.entries(r)) {
        if (f(o)) try {
          r[g2] = o();
        } catch {
          r[g2] = o;
        }
        let n = typeof r[g2] == "number";
        (t == null && n || g2.startsWith("$") && n) && (t = r[g2]);
      }
      s = [r];
    } else Array.isArray(e) ? s = e.map((r) => {
      try {
        r = f(r) ? r() : r, x2(r) && !t && (t = parseInt(r));
      } catch {
        return String(r);
      }
      return r;
    }) : e !== void 0 && (t = x2(e) ? parseInt(e) : 0, s = [e]);
    return [t, s];
  }
  _getTranslateComponent() {
    if (!this._translateComponent) {
      let e = this.options.component || this.appScope.options.component;
      typeof e == "function" ? this._translateComponent = e.call(this, this) : (this._translateComponent = () => {
      }, this.logger.warn("No translate component builder configured"));
    }
    return this._translateComponent;
  }
  _getTranslateTransformer() {
    if (!this._translateTransformer) {
      let e = this.options.transform || this.appScope.options.transform;
      typeof e == "function" && (this._translateTransformer = e.call(this, this));
    }
    return this._translateTransformer;
  }
  _getActiveMessages(e) {
    return typeof this.messages[e] == "function" ? (this.logger.warn(`When the t function specifies the language <${e}> , only synchronized language packs can be used`), this.activeMessages) : this.messages[e];
  }
  translate(e, t, s) {
    if (typeof e != "string") return this.logger.debug(`failed to translate message:${e},it is not a string`), "";
    let r = (s == null ? void 0 : s.language) || this.activeLanguage, g2 = this._getActiveMessages(r);
    e = e.replace(/\n/g, "\\n");
    let o = e;
    if (typeof e != "string") return e;
    let n = t === void 0 ? [] : f(t) ? t() : t;
    try {
      if (P2(e)) o = g2[e] || e;
      else {
        let u = this.idMap[e];
        o = g2[u] || g2[e] || e;
      }
      let [l, h2] = this._getPluraValue(n);
      Array.isArray(o) && o.length > 0 && (l !== null ? o = this._getPluraMessage(o, l) : o = o[0]), n.length, o = this.interpolator.replace(o, ...h2), this._translateTransformer && (s == null ? void 0 : s.transform) && (o = this._translateTransformer(o, h2, s));
    } catch (l) {
      this.logger.error(`翻译失败：${l.stack}`);
    }
    return o;
  }
};
a2(X2, "TranslateMixin");
var V2 = X2;
var Y2 = class Y3 {
  _getStorage() {
    let e = this.storage;
    return oe(e) ? e : void 0;
  }
  _getStorageKey() {
    return this.options.storageKey.replace("{scope}", this.id);
  }
  restoreLanguage() {
    let e = this._getStorage();
    if (e) {
      let t = this._getStorageKey(), s = e.get(t);
      if (!s || !this.hasLanguage(s)) return;
      this._activeLanguage = s, this.logger.debug(`从存储<${t}>中恢复保存的语言：${s}`);
    }
  }
  saveLanguage() {
    let e = this._getStorage();
    if (e) {
      if (!this._activeLanguage) return;
      let t = this._getStorageKey();
      e.set(t, this.activeLanguage), this.logger.debug(`当前语言已保存到存储${t}=${this.activeLanguage}`);
    }
  }
  clearLanguage() {
    let e = this._getStorage();
    e && e.remove(this._getStorageKey());
  }
};
a2(Y2, "RestoreMixin");
var F2 = Y2;
function Z2(i2, e, t) {
  let { defaultValue: s, delimiter: r, matched: g2 } = Object.assign({ delimiter: "." }, t);
  if (!i2 || typeof e != "string") return s;
  if (!e) return i2;
  let o = e.split(r), n = i2, l, h2;
  try {
    for (let u of o) if (n instanceof Map || n instanceof WeakMap) {
      if (!n.has(u)) return s;
      l = n, h2 = u, n = n.get(u);
    } else if (n instanceof Set) {
      let p2 = parseInt(u, 10);
      if (p2 >= n.size) return s;
      l = n, h2 = p2, n = [...n][p2];
    } else if (n && typeof n == "object" && u in n) l = n, h2 = Array.isArray(n) ? parseInt(u) : u, n = n[u];
    else return s;
  } catch {
    return s;
  }
  return typeof g2 == "function" && g2({ value: n, parent: l, indexOrKey: h2 }), n;
}
a2(Z2, "u");
var ee2 = class ee3 {
  constructor() {
    c2(this, "_flexVars");
  }
  _initInterpolators() {
    this._flexVars = new $({ filterContext: { getConfig: a2((e) => {
      let t = this.activeMessages.$config || {};
      return e ? Z2(t, e) : t;
    }, "getConfig"), scope: this } });
  }
};
a2(ee2, "InterpolatorMixin");
var N = ee2;
function te(i2, ...e) {
  if (e.length === 0) return i2;
  let t = e.map((s, r) => {
    let g2 = Object.entries(s || {});
    return g2.some(([o, n]) => n === void 0) ? g2.reduce((o, [n, l]) => (l !== void 0 && (o[n] = l), o), {}) : s;
  });
  return Object.assign(i2, ...t);
}
a2(te, "u");
var O2 = class O3 extends Mixin(A, I3, j2, $2, V2, N, F2) {
  constructor(t) {
    super();
    c2(this, "__VoerkaI18nScope__", true);
    c2(this, "_options");
    c2(this, "_manager");
    c2(this, "_formatterManager", null);
    c2(this, "_logger");
    c2(this, "_defaultLanguage", "zh-CN");
    c2(this, "_activeLanguage", "zh-CN");
    c2(this, "_activeMessages", {});
    c2(this, "_patchedMessages", {});
    c2(this, "_translateComponent");
    c2(this, "_translateTransformer");
    c2(this, "_activeParagraphs", {});
    c2(this, "$id", ++O3.idSeq);
    this._options = te({ id: ie(), library: false, debug: false, injectLangAttr: true, languages: [], messages: {}, paragraphs: {}, idMap: {}, formatters: [], attached: true, storageKey: "language", cachePatch: true }, t), this._init();
  }
  get id() {
    return this._options.id;
  }
  get options() {
    return this._options;
  }
  get attached() {
    return this._options.attached;
  }
  get debug() {
    return this._options.debug;
  }
  get library() {
    return this._options.library;
  }
  get formatters() {
    return this._formatterManager;
  }
  get defaultLanguage() {
    return this._defaultLanguage;
  }
  get defaultMessages() {
    return this.messages[this.defaultLanguage];
  }
  get messages() {
    return this._options.messages;
  }
  get paragraphs() {
    return this._options.paragraphs;
  }
  get idMap() {
    return this._options.idMap;
  }
  get languages() {
    return this._options.languages;
  }
  get manager() {
    return this._manager;
  }
  get appScope() {
    return this._manager.scope;
  }
  get interpolator() {
    return this._flexVars;
  }
  get logger() {
    return this._logger;
  }
  get t() {
    return this.translate.bind(this);
  }
  get Translate() {
    return this._getTranslateComponent();
  }
  get activeMessages() {
    return this._activeMessages;
  }
  get activeParagraphs() {
    return this._activeParagraphs;
  }
  get activeLanguage() {
    return this._activeLanguage;
  }
  get storage() {
    return this.getScopeOption("storage");
  }
  get loader() {
    return this.getScopeOption("loader");
  }
  get $t() {
    return (t, s, r) => (this._getTranslateTransformer(), r || (r = {}), r.transform = true, this.translate(t, s, r));
  }
  getScopeOption(t) {
    let s = this._options;
    return this.attached ? s[t] || (this.library ? this._manager[t] : void 0) : s[t];
  }
  _initOptions() {
    if (!Array.isArray(this.languages)) this.logger.warn("[VoerkaI18n] invalid language settings, will use default language settings."), this._options.languages = Object.assign([], le);
    else if (this.languages.length == 0) throw new Error("[VoerkaI18n] must provide valid language settings.");
    let t, s;
    this.languages.forEach((g2) => {
      g2.default && (s = g2.name), g2.active && (t = g2.name);
    });
    let r = this._options.messages;
    if (s in r || (s = Object.keys(r)[0]), t in r || (t = s), !(s in r)) throw new Error("[VoerkaI18n] invalid language configuration, must provide valid default and active languages.");
    if (this._activeLanguage = t, this._defaultLanguage = s, !this._options.library && !this._options.storage && (this._options.storage = T2), f(this.messages[this._defaultLanguage])) throw new Error("[VoerkaI18n] default language pack must be static content, can't use async load way.");
    this._activeMessages = this.messages[this._activeLanguage], this._activeParagraphs = this.paragraphs[this._activeLanguage];
  }
  _init() {
    this._logger = pe(this._options.log), this._initOptions(), this.library || this.restoreLanguage(), this._initInterpolators(), this.registerToManager(), this._formatterManager = new k2(this);
  }
  bind(t) {
    this._manager = t, this._manager.once("init", this._initRefresh.bind(this));
  }
  _initRefresh(t) {
    if (this.library) this.refresh(t && t());
    else {
      let s = [];
      (this._defaultLanguage !== this._activeLanguage || f(this.activeMessages)) && s.push(this.refresh(void 0, { patch: false })), s.push(this._patch()), Promise.all(s).then(() => {
        this.emit("ready", this.activeLanguage, true), this._setLanguageAttr();
      });
    }
  }
  registerToManager() {
    if (!this.attached) return;
    let t = !this.options.library;
    t && (globalThis.VoerkaI18n && globalThis.VoerkaI18n.scope && C2() && console.warn("Only can have one i18nScope with library=false"), this._manager = new L2(this));
    let s = globalThis.VoerkaI18n;
    s && de(s) ? t ? this._initRefresh() : s.register(this) : (globalThis.__VoerkaI18nScopes__ || (globalThis.__VoerkaI18nScopes__ = []), globalThis.__VoerkaI18nScopes__.push(this));
  }
  async change(t) {
    let s = this.activeLanguage;
    return this.attached ? s = await this._manager.change(t) : s = await this.refresh(t), s;
  }
  _setLanguageAttr() {
    if (!(this.library || !C2())) try {
      let t = this._options.injectLangAttr;
      if (!t) return;
      let s = t === true ? document.body : document.body.querySelector(t);
      s && s.setAttribute("lang", this.activeLanguage);
    } catch {
    }
  }
  getRawMessage(t) {
    if (P2(t)) {
      if (t in this.defaultMessages) return this.defaultMessages[t];
    } else return t;
  }
  getMessageId(t) {
    if (P2(t)) return t;
    if (t in this.idMap) return this.idMap[t];
  }
};
a2(O2, "VoerkaI18nScope"), c2(O2, "idSeq", 0);
var _e = O2;
function ir(i2, e, t) {
  return (s) => {
    let r = i2.next;
    return i2.next = function(g2, o, n) {
      let l = n.getConfig;
      return n.getConfig = () => Object.assign({}, t, e == null ? void 0 : e[s.activeLanguage], l(i2.name)), r.call(this, g2, o, n);
    }, i2;
  };
}
a2(ir, "createFormatter");
function hr(i2) {
  let e = globalThis.VoerkaI18n;
  e ? e.registerPlugin(i2) : (globalThis.__VoerkaI18nPlugins__ || (globalThis.__VoerkaI18nPlugins__ = []), globalThis.__VoerkaI18nPlugins__.push(i2));
}
a2(hr, "definePlugin");

export {
  ie,
  P2 as P,
  ae,
  ne,
  oe,
  ge,
  C2 as C,
  L2 as L,
  T2 as T,
  pt,
  le,
  mt,
  dt,
  _t,
  yt,
  vt,
  bt,
  xt,
  _2 as _,
  he,
  ue,
  fe,
  E2 as E,
  me,
  k2 as k,
  _e,
  ir,
  hr
};
//# sourceMappingURL=chunk-AQEPC7HU.js.map
