var d = (r, e, t) => new Promise((s, n) => {
  var i = (l) => {
    try {
      o(t.next(l));
    } catch (u) {
      n(u);
    }
  }, a = (l) => {
    try {
      o(t.throw(l));
    } catch (u) {
      n(u);
    }
  }, o = (l) => l.done ? s(l.value) : Promise.resolve(l.value).then(i, a);
  o((t = t.apply(r, e)).next());
});
const X = (r, e, t = []) => {
  const s = Object.getOwnPropertyDescriptors(e);
  for (let n of t)
    delete s[n];
  Object.defineProperties(r, s);
}, S = (r, e = [r]) => {
  const t = Object.getPrototypeOf(r);
  return t === null ? e : S(t, [...e, t]);
}, Le = (...r) => {
  if (r.length === 0)
    return;
  let e;
  const t = r.map((s) => S(s));
  for (; t.every((s) => s.length > 0); ) {
    const s = t.map((i) => i.pop()), n = s[0];
    if (s.every((i) => i === n))
      e = n;
    else
      break;
  }
  return e;
}, q = (r, e, t = []) => {
  var s;
  const n = (s = Le(...r)) !== null && s !== void 0 ? s : Object.prototype, i = Object.create(n), a = S(n);
  for (let o of r) {
    let l = S(o);
    for (let u = l.length - 1; u >= 0; u--) {
      let h = l[u];
      a.indexOf(h) === -1 && (X(i, h, ["constructor", ...t]), a.push(h));
    }
  }
  return i.constructor = e, i;
}, j = (r) => r.filter((e, t) => r.indexOf(e) == t), Q = /* @__PURE__ */ new WeakMap(), Ie = (r) => Q.get(r), Pe = (r, e) => Q.set(r, e), N = (r, e) => {
  var t, s;
  const n = j([...Object.getOwnPropertyNames(r), ...Object.getOwnPropertyNames(e)]), i = {};
  for (let a of n)
    i[a] = j([...(t = r == null ? void 0 : r[a]) !== null && t !== void 0 ? t : [], ...(s = e == null ? void 0 : e[a]) !== null && s !== void 0 ? s : []]);
  return i;
}, R = (r, e) => {
  var t, s, n, i;
  return {
    property: N((t = r == null ? void 0 : r.property) !== null && t !== void 0 ? t : {}, (s = e == null ? void 0 : e.property) !== null && s !== void 0 ? s : {}),
    method: N((n = r == null ? void 0 : r.method) !== null && n !== void 0 ? n : {}, (i = e == null ? void 0 : e.method) !== null && i !== void 0 ? i : {})
  };
}, Me = (r, e) => {
  var t, s, n, i, a, o;
  return {
    class: j([...(t = r == null ? void 0 : r.class) !== null && t !== void 0 ? t : [], ...(s = e == null ? void 0 : e.class) !== null && s !== void 0 ? s : []]),
    static: R((n = r == null ? void 0 : r.static) !== null && n !== void 0 ? n : {}, (i = e == null ? void 0 : e.static) !== null && i !== void 0 ? i : {}),
    instance: R((a = r == null ? void 0 : r.instance) !== null && a !== void 0 ? a : {}, (o = e == null ? void 0 : e.instance) !== null && o !== void 0 ? o : {})
  };
}, Ae = /* @__PURE__ */ new Map(), Oe = (...r) => {
  var e;
  const t = /* @__PURE__ */ new Set(), s = /* @__PURE__ */ new Set([...r]);
  for (; s.size > 0; )
    for (let n of s) {
      const i = S(n.prototype).map((u) => u.constructor), a = (e = Ie(n)) !== null && e !== void 0 ? e : [], l = [...i, ...a].filter((u) => !t.has(u));
      for (let u of l)
        s.add(u);
      t.add(n), s.delete(n);
    }
  return [...t];
}, Fe = (...r) => {
  const e = Oe(...r).map((t) => Ae.get(t)).filter((t) => !!t);
  return e.length == 0 ? {} : e.length == 1 ? e[0] : e.reduce((t, s) => Me(t, s));
};
function ke(...r) {
  var e, t, s;
  const n = r.map((o) => o.prototype);
  function i(...o) {
    for (const l of r)
      X(this, new l(...o));
  }
  i.prototype = q(n, i), Object.setPrototypeOf(
    i,
    q(r, null, ["prototype"])
  );
  let a = i;
  {
    const o = Fe(...r);
    for (let l of (e = o == null ? void 0 : o.class) !== null && e !== void 0 ? e : []) {
      const u = l(a);
      u && (a = u);
    }
    z((t = o == null ? void 0 : o.static) !== null && t !== void 0 ? t : {}, a), z((s = o == null ? void 0 : o.instance) !== null && s !== void 0 ? s : {}, a.prototype);
  }
  return Pe(a, r), a;
}
const z = (r, e) => {
  const t = r.property, s = r.method;
  if (t)
    for (let n in t)
      for (let i of t[n])
        i(e, n);
  if (s)
    for (let n in s)
      for (let i of s[n])
        i(e, n, Object.getOwnPropertyDescriptor(e, n));
};
var Te = (r, e, t) => new Promise((s, n) => {
  var i = (l) => {
    try {
      o(t.next(l));
    } catch (u) {
      n(u);
    }
  }, a = (l) => {
    try {
      o(t.throw(l));
    } catch (u) {
      n(u);
    }
  }, o = (l) => l.done ? s(l.value) : Promise.resolve(l.value).then(i, a);
  o((t = t.apply(r, e)).next());
}), je = class extends Error {
}, Ce = 0;
function De(r, e = { timeout: 0 }) {
  let t = !1, s = !1, n = !1, i, a, o = 0, l, u = ++Ce, h = function() {
    clearTimeout(o), t = !1, s = !1, n = !1, l = new Promise((c, _) => {
      i = c, a = _;
    });
  };
  h();
  function f() {
    return Te(this, arguments, function* (c = e.timeout, _) {
      return (t || s) && h(), c > 0 && (o = setTimeout(() => {
        t = !0;
        try {
          _ instanceof Error ? a(_) : i(_);
        } catch ($e) {
        }
      }, c)), n = !0, l;
    });
  }
  return f.id = u, f.resolve = (c) => {
    clearTimeout(o), n && !(t || s) && (i(c), t = !0);
  }, f.reject = (c) => {
    clearTimeout(o), n && (t || s || (a(typeof c == "string" ? new Error(c) : c instanceof Error ? c : new Error()), s = !0));
  }, f.destroy = () => {
    clearTimeout(o), n && a(new je()), t = !1, n = !1, s = !1, l = null;
  }, f.reset = h, f.isResolved = () => t, f.isRejected = () => s, f.isPending = () => n, f;
}
var Ve = Object.defineProperty, W = Object.getOwnPropertySymbols, Be = Object.prototype.hasOwnProperty, qe = Object.prototype.propertyIsEnumerable, K = (r, e, t) => e in r ? Ve(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, G = (r, e) => {
  for (var t in e || (e = {})) Be.call(e, t) && K(r, t, e[t]);
  if (W) for (var t of W(e)) qe.call(e, t) && K(r, t, e[t]);
  return r;
}, w = ((r) => typeof require != "undefined" ? require : typeof Proxy != "undefined" ? new Proxy(r, { get: (e, t) => (typeof require != "undefined" ? require : e)[t] }) : r)(function(r) {
  if (typeof require != "undefined") return require.apply(this, arguments);
  throw Error('Dynamic require of "' + r + '" is not supported');
}), y = { Abort: Symbol("Abort"), Throw: Symbol("Throw"), Ignore: Symbol("Ignore") }, x = class extends Error {
  constructor(e) {
    super(), this.value = e;
  }
}, b = class extends x {
}, F = class extends x {
}, B = class extends x {
}, Ne = { name: "error", priority: "before", args: ["operate", "value"], default: { operate: "ignore" }, next(r, e, t) {
  let s = e.operate.toLowerCase(), n = e.value;
  return t.onError = (i, a, o, l) => {
    if (!(i instanceof Error) || i instanceof x) throw i;
    if (s == "throw") throw n ? new Error(n) : i;
    if (s == "abort") throw new b(n);
    if (s == "ignore") throw new F(n);
    return a;
  }, r;
} }, Re = { name: "empty", priority: "before", args: ["operate", "value"], default: { operate: "abort", value: "" }, next(r, e, t) {
  let s = e.operate.toLowerCase(), n = e.value;
  return t.onEmpty = () => {
    if (s == "throw") throw new B();
    if (s == "abort") throw new b(n);
    if (s == "ignore") throw new F();
    return s;
  }, r;
} };
function I(r, ...e) {
  if (e.length === 0) return r;
  let t = e.map((s, n) => {
    let i = Object.entries(s || {});
    return i.some(([a, o]) => o === void 0) ? i.reduce((a, [o, l]) => (l !== void 0 && (a[o] = l), a), {}) : s;
  });
  return Object.assign(r, ...t);
}
((r) => typeof w < "u" ? w : typeof Proxy < "u" ? new Proxy(r, { get: (e, t) => (typeof w < "u" ? w : e)[t] }) : r)(function(r) {
  if (typeof w < "u") return w.apply(this, arguments);
  throw Error('Dynamic require of "' + r + '" is not supported');
});
function Y(r) {
  if (typeof r != "object" || r === null) return !1;
  var e = Object.getPrototypeOf(r);
  if (e === null) return !0;
  for (var t = e; Object.getPrototypeOf(t) !== null; ) t = Object.getPrototypeOf(t);
  return e === t;
}
function ze(r) {
  return r && typeof r == "function";
}
function Z(r, e, t) {
  if (typeof e == "string") {
    let s = 0, n;
    for (; (n = r.indexOf(e, s)) > -1; ) {
      let i = typeof t == "function" ? t(e) : t, a = r.length;
      r = r.substring(0, n) + i + r.substring(n + e.length), s = n + i.length + r.length - a;
    }
  } else {
    let s;
    if (!e.global || !e.multiline) throw new Error("The search parameter must be enabled '/gm' option");
    for (; (s = e.exec(r)) !== null; ) {
      s.index === e.lastIndex && e.lastIndex++;
      let n = r.length, i = s[0].length, a = typeof t == "function" ? t(s[0], ...s) : t;
      r = r.substring(0, s.index) + a + r.substring(s.index + i), e.lastIndex += r.length - n;
    }
  }
  return r;
}
String.prototype.replaceAll || (String.prototype.replaceAll = function(r, e) {
  return Z(this, r, e);
});
function M(r) {
  return r.replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1");
}
function We(r, e = !1) {
  if (typeof r == "number") return !0;
  if (typeof r != "string" || e) return !1;
  try {
    if (r.includes(".")) {
      let t = parseFloat(r);
      return r.endsWith(".") ? !isNaN(t) && String(t).length === r.length - 1 : !isNaN(t) && String(t).length === r.length;
    } else {
      let t = parseInt(r);
      return !isNaN(t) && String(t).length === r.length;
    }
  } catch (t) {
    return !1;
  }
}
var Ke = /\n/gm, Ge = /(["'])(.*?)(\1)/gm, Je = /([\s\[\,\{])(\w+)(\s*\:)/gm;
function He(r, e) {
  try {
    return JSON.parse(r, (s, n) => e ? e(s, n) : n);
  } catch (s) {
  }
  let t = r.replace(Ke, (s, n, i) => {
    let a = i.slice(0, n).trim(), o = i.slice(n + 1).trim();
    return !/,$/.test(a) && !/[\[\{\}]$/.test(a) && !/^\}/.test(o) ? `,
` : `
`;
  });
  return t = t.replaceAll(Ge, (s, n, i) => `"${encodeURI(i)}"`), t = t.replaceAll(Je, (s, n, i, a) => `${n}"${i}"${a}`), t = t.replaceAll("，", ",").replaceAll("“", '"').replaceAll("”", '"'), JSON.parse(t, (s, n) => (typeof n == "string" && (n = decodeURI(n)), n));
}
function Ue(r, e = "{", t = "}") {
  let s = 0, n = 0;
  for (; s < r.length; ) {
    let i = r.slice(s, s + e.length), a = r.slice(s, s + t.length);
    if (i == e) {
      n++, r = r.substring(0, s + e.length) + `${n}%` + r.substring(s + e.length), s += e.length + String(n).length + 1;
      continue;
    }
    if (a == t) {
      n > 0 && (r = r.substring(0, s) + `%${n}` + r.substring(s)), s += t.length + String(n).length + 1, n--;
      continue;
    }
    s++;
  }
  return r;
}
function Xe(r, ...e) {
  return e.length == 0 && (e.push(["{", "}"]), e.push(["[", "]"])), e.forEach((t) => {
    r.includes(t[0]) && r.includes(t[1]) && (r = Ue(r, ...t));
  }), r;
}
function Qe(r, e, t) {
  return [[e, new RegExp(M(e) + "\\d+%")], [t, new RegExp("%\\d+" + M(t))]].forEach(([s, n]) => {
    let i;
    for (; (i = n.exec(r)) !== null; ) i.index === n.lastIndex && n.lastIndex++, r = r.replace(n, s);
  }), r;
}
function k(r, ...e) {
  return e.length == 0 && (e.push(["{", "}"]), e.push(["[", "]"])), e.forEach(([t, s]) => {
    r.includes(t) && r.includes(s) && (r = Qe(r, t, s));
  }), r;
}
function Ye(r) {
  return r ? r.trim().substring(1).trim().split("|").map((e) => e.trim()).map((e) => {
    if (e == "") return null;
    let t = e.indexOf("("), s = e.lastIndexOf(")");
    if (t !== -1 && s !== -1) {
      let n = e.substring(t + 1, s).trim(), i = tt(n);
      return [e.substring(0, t), i];
    } else return [e, []];
  }).filter((e) => Array.isArray(e)) : [];
}
function Ze(...r) {
  r.length == 0 && (r.push(["{", "}"]), r.push(["[", "]"]));
  let e = r.map(([t, s]) => `(${M(t)}1%.*?%1${M(s)})`);
  return et.replace("__TAG_REGEXP__", e.length > 0 ? e.join("|") + "|" : "");
}
var et = String.raw`((([\'\"])(.*?)\3))|__TAG_REGEXP__([\d]+\.?[\d]?)|((true|false|null)(?=[,\b\s]))|([\w\.]+)|((?<=,)\s*(?=,))(?<=\s*[,\)]?\s*)`;
function tt(r) {
  let e = [], t;
  r = Xe(r);
  try {
    let s = new RegExp(Ze(), "g");
    for (; (t = s.exec(r)) !== null; ) {
      t.index === s.lastIndex && s.lastIndex++;
      let n = t[0];
      if (n.trim() == "") n = void 0;
      else if (n.startsWith("'") && n.endsWith("'") || n.startsWith('"') && n.endsWith('"')) n = n.substring(1, n.length - 1), n = k(n);
      else if (n.startsWith("{") && n.endsWith("}") || n.startsWith("[") && n.endsWith("]")) try {
        n = k(n), n = He(n);
      } catch (i) {
      }
      else ["true", "false", "null"].includes(n) ? n = JSON.parse(n) : We(n) ? n = parseFloat(n) : n = k(String(n));
      e.push(n);
    }
  } catch (s) {
  }
  return e;
}
var rt = new RegExp("(?<!\\\\)\\{([\\S]+\\s)?\\s*(\\w+)?((\\s*\\|\\s*\\w*(\\(.*?\\)){0,1}\\s*)*)\\s*(\\s[\\S]+)?\\}", "gm");
function J(r, e, t = {}) {
  let s = r, n, i = Object.assign({ replaceAll: !0 }, t), a = rt;
  for (a.lastIndex = 0; (n = a.exec(s)) !== null; ) {
    n.index === a.lastIndex && a.lastIndex++;
    let o = n[2] || "", l = (n[1] || "").trim(), u = (n[6] || "").trim(), h = s.length, f = Ye(n[3] || "");
    if (ze(e)) {
      let c = e(o, l, u, f, n[0]);
      i.replaceAll ? s = Z(s, n[0], c) : s = s.replace(n[0], c), a.lastIndex += s.length - h;
    }
  }
  return s;
}
function H(r, e) {
  let t = e.value;
  if (r.length > 0) {
    let s = ot.call(this, r, e);
    for (let n of s) try {
      t = n.call(this, t);
    } catch (i) {
      if (i instanceof B) throw i;
      if (i instanceof x) {
        if (i.value != null && (t = i.value), i instanceof b) break;
      } else throw i;
    }
  }
  return this.options.isEmpty(t) || (t = `${e.prefix}${t}${e.suffix}`), t;
}
function st(r, e, t, s) {
  if (!this.options.isEmpty(r)) return r;
  let n = s.onEmpty || t.onEmpty || this.options.onEmpty;
  if (typeof n != "function") return r;
  let i = n.call(this, r, e, s);
  throw i instanceof Error ? i : i == y.Abort ? new b() : i == y.Ignore ? new F() : i == y.Throw ? new B() : new b(i);
}
function nt(r, e, t, s, n) {
  let i = n.onError || s.onError || this.options.onError;
  if (typeof i != "function") return e;
  let a = i.call(this, r, e, t, n);
  throw a instanceof Error ? a : a == y.Abort ? new b() : a == y.Ignore ? new F() : a == y.Throw ? r : new b(a);
}
function it(r, e, t) {
  var s;
  let n = Object.assign({}, typeof r.default == "function" ? r.default() : r.default);
  return e.length == 1 && Y(e[0]) ? I(n, e[0]) : r.args && ((s = r.args) == null ? void 0 : s.length) > 0 && r.args.forEach((i, a) => {
    e[a] !== void 0 && (n[i] = e[a]);
  }), (i) => {
    let a;
    try {
      t.args = e, a = r.next.call(this, i, n, t), a = st.call(this, a, n, r, t);
    } catch (o) {
      if (o.filter = r.name, o instanceof x) throw o;
      return this.log(`当执行过滤器器<${t.match}:${r.name}>时出错:${o.stack}`), nt.call(this, o, i, n, r, t);
    }
    return String(a);
  };
}
function at(r) {
  let e = [], t = r.map(([s, n]) => [this.getFilter.call(this, s), n]).filter(([s]) => s != null);
  return t = t.reduce((s, [n, i]) => (n && (n.priority == "before" ? s.unshift([n, i]) : n.priority == "after" ? e.push([n, i]) : s.push([n, i])), s), []), t.concat(e);
}
function ot(r, e) {
  let t = at.call(this, r), s = [];
  for (let [n, i] of t) s.push(it.call(this, n, i, e));
  return s;
}
var lt = class {
  constructor(e) {
    this.options = I({ log: console.log, filters: {}, missing: "default", filterContext: {} }, e), this.addDefaultHandlers(), this.addBuildinFilters(), this.normalizeFilters();
  }
  get filters() {
    return this.options.filters;
  }
  addDefaultHandlers() {
    this.options.onError = () => y.Ignore, this.options.onEmpty = () => "", this.options.isEmpty = (e) => e === null || e === "";
  }
  addFilter(e) {
    if (!e.name) throw new Error("Filter name cannot be empty");
    if (typeof e.next != "function") throw new Error("The filter must provide a next function");
    return e = I({ priority: "normal" }, e), this.filters[e.name] = e;
  }
  removeFilter(e) {
    delete this.filters[e];
  }
  getFilter(e) {
    var t;
    if (e in this.options.filters) return this.options.filters[e];
    {
      let s = (t = this.options.getFilter) == null ? void 0 : t.call(this, e);
      return typeof s == "function" ? { name: e, next: s } : e in String.prototype ? { name: e, next: (n, i, a) => n[e](...a.args) } : s;
    }
  }
  addBuildinFilters() {
    this.addFilter(Ne), this.addFilter(Re);
  }
  normalizeFilters() {
    Object.entries(this.options.filters).forEach(([e, t]) => {
      let s = I({ name: e, priority: "normal", args: null, next: (n) => n }, typeof t == "function" ? { filter: t } : t);
      this.options.filters[e] = s;
    });
  }
  getMissingValue(e, t) {
    let s = this.options.missing;
    if (s == "default") return "";
    if (s == "ignore") return t;
    if (typeof s == "function") return s.call(this, e);
  }
  replace(e, ...t) {
    if (t.length === 0) return e;
    if (t.length === 1 && typeof t[0] == "function" && (t[0] = t[0].call(this)), t.length === 1 && Y(t[0])) {
      let s = t[0];
      return J.call(this, e, (n, i, a, o, l) => {
        let u = n in s ? s[n] : this.getMissingValue(n, l);
        return typeof u == "function" && (u = u.call(this)), H.call(this, o, G({ name: n, value: u, prefix: i, suffix: a, template: e, match: l, args: [] }, this.options.filterContext));
      });
    } else {
      let s = t.length === 1 && Array.isArray(t[0]) ? [...t[0]] : t, n = 0;
      return J.call(this, e, (i, a, o, l, u) => {
        let h = s.length > n ? s[n++] : this.getMissingValue(n, u);
        return typeof h == "function" && (h = h.call(this)), H.call(this, l, G({ name: i, value: h, prefix: a, suffix: o, template: e, match: u, args: [] }, this.options.filterContext));
      }, { replaceAll: !1 });
    }
  }
  log(e, ...t) {
    this.options.debug && this.options.log(e, ...t);
  }
}, ee = Object.defineProperty, ut = (r, e, t) => e in r ? ee(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, g = (r, e) => ee(r, "name", { value: e, configurable: !0 }), E = ((r) => typeof require < "u" ? require : typeof Proxy < "u" ? new Proxy(r, { get: (e, t) => (typeof require < "u" ? require : e)[t] }) : r)(function(r) {
  if (typeof require < "u") return require.apply(this, arguments);
  throw Error('Dynamic require of "' + r + '" is not supported');
}), p = (r, e, t) => ut(r, typeof e != "symbol" ? e + "" : e, t), L, te = (L = class {
  constructor(r) {
    this._listeners = /* @__PURE__ */ new Map(), this._lastMessage = {}, this.options = Object.assign({ ignoreError: !1 }, r);
  }
  get listeners() {
    return this._listeners;
  }
  on() {
    let r = arguments[0], e = arguments[1], t = arguments[2], { objectify: s = !0, count: n = -1 } = Object.assign({}, t);
    this._listeners.has(r) || this._listeners.set(r, /* @__PURE__ */ new Map());
    let i = ++L.listenerSeqId, a = this._listeners.get(r);
    return a == null || a.set(i, [e, n]), this._emitRetainEvent(r, i, a), s ? { off: g(() => {
      a == null || a.delete(i), (a == null ? void 0 : a.size) == 0 && this._listeners.delete(r);
    }, "off") } : i;
  }
  onAny(r, e) {
    return this.on("*", r, e);
  }
  _emitRetainEvent(r, e, t) {
    r in this._lastMessage && this._executeListener(e, t, this._lastMessage[r]);
  }
  once(r, e, t) {
    return this.on(r, e, Object.assign({}, t, { count: 1 }));
  }
  _forEachListeners(r) {
    let e = !1;
    for (let [t, s] of this._listeners.entries()) {
      if (e) break;
      for (let [n, [i, a]] of s.entries()) {
        if (e) break;
        e = r({ event: t, listenerId: n, listener: i, count: a, eventListeners: s }) === !1;
      }
    }
  }
  _forEachEventListeners(r, e) {
    let t = !1, s = [[r, this._listeners.get(r)]];
    for (let [n, i] of s) if (i) for (let [a, [o, l]] of i) {
      if (t) break;
      t = e({ event: n, listenerId: a, listener: o, count: l, eventListeners: i }) === !1;
    }
  }
  off() {
    if (arguments.length == 1) {
      if (typeof arguments[0] == "number") this._forEachListeners(({ listenerId: r, eventListeners: e, event: t }) => {
        var s;
        if (r == arguments[0]) return e.delete(r), ((s = this._listeners.get(t)) == null ? void 0 : s.size) == 0 && this._listeners.delete(t), !1;
      });
      else if (typeof arguments[0] == "function") {
        let r = arguments[0];
        this._forEachListeners(({ listenerId: e, listener: t, eventListeners: s, event: n }) => {
          var i;
          t == r && (s.delete(e), ((i = this._listeners.get(n)) == null ? void 0 : i.size) == 0 && this._listeners.delete(n));
        });
      }
    } else arguments.length == 2 && typeof arguments[0] == "string" && typeof arguments[1] == "function" && this._forEachEventListeners(arguments[0], ({ event: r, listenerId: e, listener: t, eventListeners: s }) => {
      var n;
      r == arguments[0] && t == arguments[1] && (s.delete(e), ((n = this._listeners.get(r)) == null ? void 0 : n.size) == 0 && this._listeners.delete(r));
    });
  }
  waitFor(r, e = 0) {
    return new Promise((t, s) => {
      let n, i = !1, a;
      e > 0 && (n = setTimeout(() => {
        i = !0, this.off(a), s(new Error("Timeout"));
      }, e)), a = this.once(r, (o) => {
        i || (clearTimeout(n), t(o));
      });
    });
  }
  offAll(r) {
    r ? this._listeners.delete(r) : this._listeners.clear();
  }
  _executeListener(r, e, t) {
    if (!e) return;
    let s = e.get(r);
    if (s) try {
      return s[0](t);
    } catch (n) {
      if (!this.options.ignoreError) throw n;
    } finally {
      s[1] > -1 && (s[1] = s[1] - 1, s[1] == 0 && e.delete(r));
    }
  }
  _executeListeners(r, e, t) {
    let s = [];
    return this._forEachEventListeners(r, ({ event: n, listenerId: i, eventListeners: a }) => {
      s.push(this._executeListener(i, a, e)), typeof t == "function" && t(i), a.size == 0 && this._listeners.delete(n);
    }), s;
  }
  emit(r, e, t) {
    return t && (this._lastMessage[r] = e), this._executeListeners(r, e);
  }
  emitAsync(r, e, t) {
    return d(this, null, function* () {
      return yield Promise.allSettled(this.emit(r, e, t));
    });
  }
}, g(L, "l"), L);
te.listenerSeqId = 0;
var re = te;
((r) => typeof E < "u" ? E : typeof Proxy < "u" ? new Proxy(r, { get: g((e, t) => (typeof E < "u" ? E : e)[t], "get") }) : r)(function(r) {
  if (typeof E < "u") return E.apply(this, arguments);
  throw Error('Dynamic require of "' + r + '" is not supported');
});
function se() {
  return Date.now().toString() + parseInt(String(Math.random() * 1e3));
}
g(se, "getId");
function A(r, e = !1) {
  if (typeof r == "number") return !0;
  if (typeof r != "string" || e) return !1;
  try {
    if (r.includes(".")) {
      let t = parseFloat(r);
      return r.endsWith(".") ? !isNaN(t) && String(t).length === r.length - 1 : !isNaN(t) && String(t).length === r.length;
    } else {
      let t = parseInt(r);
      return !isNaN(t) && String(t).length === r.length;
    }
  } catch (t) {
    return !1;
  }
}
g(A, "r");
function O(r) {
  return A(r);
}
g(O, "isMessageId");
function ne(r) {
  return r && typeof r == "object" && r.__VoerkaI18nScope__;
}
g(ne, "isI18nScope");
function ie(r) {
  return d(this, null, function* () {
    let e = yield r.call(this);
    return e && "__esModule" in e || Symbol.toStringTag in e ? e.default : e;
  });
}
g(ie, "loadAsyncModule");
function ae(r) {
  return r && typeof r.get == "function" && typeof r.set == "function" && typeof r.remove == "function";
}
g(ae, "isStorage");
function oe(r) {
  return d(this, null, function* () {
    return (yield Promise.allSettled(r)).map((e) => e.status === "fulfilled" ? e.value : e.reason);
  });
}
g(oe, "execAsyncs");
function C() {
  try {
    return typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
  } catch (r) {
    return !1;
  }
}
g(C, "isBrowser");
var D = class P extends re {
  constructor(e) {
    if (super(), p(this, "__VoerkaI18nManager__", !0), p(this, "_scopes", []), p(this, "_appScope"), P.instance) return P.instance;
    if (!e) throw new Error("create VoerkaI18nManager failed, appScope is required");
    this._registerAppScope(e), this._registerScopes(), this._loadPlugins(), P.instance = this, globalThis.VoerkaI18n = this;
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
    let e = globalThis.__VoerkaI18nScopes__;
    e && Array.isArray(e) && e.forEach((t) => this.register(t)), delete globalThis.__VoerkaI18nScopes__;
  }
  getScope(e) {
    return this._scopes.find((t) => t.id === e);
  }
  _loadPlugins() {
    let e = globalThis.__VoerkaI18nPlugins__;
    e && Array.isArray(e) && e.forEach((t) => t(this)), delete globalThis.__VoerkaI18nPlugins__;
  }
  registerPlugin(e) {
    typeof e == "function" && e(this);
  }
  _registerAppScope(e) {
    this._scopes.push(e), this._appScope = e, this.logger.debug("VoerkaI18nScope<" + e.id + "> is registered as appScope"), this.emitAsync("init", () => this._appScope.activeLanguage, !0);
  }
  register(e) {
    if (!ne(e)) throw new Error("register scope failed, invalid scope");
    this._scopes.push(e), e.bind(this), this.logger.debug(`VoerkaI18nScope<${e.id}> is registered`);
  }
  change(e) {
    return d(this, null, function* () {
      yield this._refreshScopes(e);
      let t = this._appScope.activeLanguage;
      return this.scope.saveLanguage(), this.emit("change", t, !0), this.logger.info("language changed to: " + t), t;
    });
  }
  _refreshScopes(e) {
    return d(this, null, function* () {
      let t = this._scopes.map((s) => s.refresh(e));
      yield oe(t);
    });
  }
  refresh() {
    return d(this, null, function* () {
      return yield this._refreshScopes(this.activeLanguage);
    });
  }
  ready(e, t) {
    return this.waitFor("ready", t).then((s) => {
      e && e.call(this, s);
    });
  }
  clearPatchedMessages() {
    this._scopes.forEach((e) => e.clearPatchedMessages());
  }
  hasLanguage(e) {
    return this.languages.findIndex((t) => t.name == e) != -1;
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
g(D, "VoerkaI18nManager"), p(D, "instance");
var le = D, gt = { get(r) {
  if (globalThis.localStorage) return globalThis.localStorage.getItem(r);
}, set(r, e) {
  globalThis.localStorage && globalThis.localStorage.setItem(r, e);
}, remove(r) {
  globalThis.localStorage && globalThis.localStorage.removeItem(r);
} }, ht = [{ name: "zh", title: "中文", default: !0, active: !0 }, { name: "en", title: "英文" }], ue = class {
  constructor() {
    p(this, "_eventEmitter");
  }
  _getEventEmitter() {
    return this.attached ? this.manager : (this._eventEmitter || (this._eventEmitter = new re()), this._eventEmitter);
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
  emit(e, t, s) {
    return d(this, null, function* () {
      return yield this._getEventEmitter().emitAsync(e, t, s);
    });
  }
};
g(ue, "EventEmitterMixin");
var ct = ue;
function m(r) {
  return r && typeof r == "function";
}
g(m, "t");
function v(r) {
  if (typeof r != "object" || r === null) return !1;
  var e = Object.getPrototypeOf(r);
  if (e === null) return !0;
  for (var t = e; Object.getPrototypeOf(t) !== null; ) t = Object.getPrototypeOf(t);
  return e === t;
}
g(v, "o");
var T, ft = (T = class extends Error {
}, g(T, "m"), T), pt = 0;
function ge(r, e = { timeout: 0 }) {
  let t = !1, s = !1, n = !1, i, a, o = 0, l, u = ++pt, h = g(function() {
    clearTimeout(o), t = !1, s = !1, n = !1, l = new Promise((c, _) => {
      i = c, a = _;
    });
  }, "g");
  h();
  function f(c = 0, _) {
    return d(this, null, function* () {
      if (typeof r == "function" && r()) {
        t = !0;
        return;
      }
      return (t || s) && h(), c > 0 && (o = setTimeout(() => {
        t = !0;
        try {
          _ instanceof Error ? a(_) : i(_);
        } catch ($e) {
        }
      }, c)), n = !0, l;
    });
  }
  return g(f, "o"), f.id = u, f.resolve = (c) => {
    if (clearTimeout(o), !!n && !(t || s)) {
      if (typeof r == "function" && r()) if (r()) i(c);
      else return;
      else i(c);
      t = !0;
    }
  }, f.reject = (c) => {
    clearTimeout(o), n && (t || s || (a(typeof c == "string" ? new Error(c) : c instanceof Error ? c : new Error()), s = !0));
  }, f.destroy = () => {
    clearTimeout(o), n && a(new ft()), t = !1, n = !1, s = !1, l = null;
  }, f.reset = h, f.isResolved = () => t, f.isRejected = () => s, f.isPending = () => n, f;
}
g(ge, "p");
var he = class {
  constructor() {
    p(this, "_patching");
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
  _patch(e) {
    return d(this, null, function* () {
      var t;
      this._patching = ge(), e || (e = this.activeLanguage), this._restorePatchedMessages(this.activeMessages, e);
      try {
        if (m(this.loader)) {
          let s = yield this._loadMessagesFromLoader(e);
          v(s) && (Object.assign(this._activeMessages, s), this._setPatchedMessages(s, e), this.emit("patched", { language: e, scope: this.id }));
        }
      } catch (s) {
        this.logger.warn(`从远程加载语言补丁包<${e}>时出错: ${s.stack}(scope=${this.id})`);
      } finally {
        (t = this._patching) == null || t.resolve(), this._patching = void 0;
      }
    });
  }
  _restorePatchedMessages(e, t) {
    let s = this._getPatchedMessages(t);
    v(s) && (Object.assign(e, s), this.emit("restore", { language: t, scope: this.id }), this.logger.debug(`成功恢复补丁语言包<${t}>(scope=${this.id})`));
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
g(he, "PatchMessageMixin");
var dt = he, ce = class extends Error {
};
g(ce, "VoerkaI18nError");
var $ = ce, _t = class extends $ {
};
g(_t, "VoerkaI18nInvalidLanguageError");
var mt = class extends $ {
};
g(mt, "VoerkaI18nOnlyOneAppScopeError");
var yt = class extends $ {
};
g(yt, "VoerkaI18nChangeLanguageError");
var fe = class extends $ {
};
g(fe, "VoerkaI18nLoadLanguageError");
var U = fe, pe = class {
  constructor() {
    p(this, "_refreshSignal");
  }
  refresh(e, t) {
    return d(this, null, function* () {
      this._refreshSignal || (this._refreshSignal = De()), e || (e = this.activeLanguage);
      let s = e, n, { patch: i, fallback: a } = Object.assign({ fallback: !1, patch: !0 }, t);
      try {
        n = yield this._loadLanguageMessages(e), this._activeMessages = n, n && !n.$remote && i && (yield this._patch(e));
      } catch (o) {
        if (o && o instanceof $) {
          let l = this.getFallbackLanguage(e);
          l && l !== e && (s = yield this.refresh(l, { patch: i, fallback: !0 }));
        }
      } finally {
        a || (this._activeLanguage = s, (typeof this.messages[s] == "function" || !(s in this.messages)) && (this.messages[s] = this._activeMessages), this._activeParagraphs = this.paragraphs[s], this._refreshSignal.resolve(), this._refreshSignal = void 0, yield this.emit("scope/change", s, !0));
      }
      return this._setLanguageAttr(), s;
    });
  }
  _loadLanguageMessages(e) {
    return d(this, null, function* () {
      this.logger.debug(`准备加载语言包:${e}`);
      let t = this.messages[e], s;
      if (v(t)) s = t;
      else if (m(t)) try {
        s = yield ie.call(this, t);
      } catch (n) {
        this.logger.error(`加载异步语言包<${e}>失败:${n.message}`), s = void 0;
      }
      if (!s && m(this.loader)) try {
        let n = yield this._loadMessagesFromLoader(e);
        v(n) ? s = Object.assign({ $remote: !0 }, this.messages[this.defaultLanguage], n) : this.logger.error(`错误的语言包<${e}>数据:${n}`);
      } catch (n) {
        throw new U(n.message);
      }
      if (!v(s)) throw new U(e);
      return s;
    });
  }
  _loadMessagesFromLoader(e) {
    return d(this, null, function* () {
      if (m(this.loader)) return yield this.loader.call(this, e, this);
    });
  }
  ready() {
    let e = typeof arguments[0] == "function" ? arguments[0] : void 0, t = typeof arguments[0] == "number" ? arguments[0] : arguments[1];
    if (typeof e == "function") this.manager.ready(e, t);
    else return new Promise((s) => {
      this.manager.ready(s, t);
    });
  }
  changing(e) {
    return d(this, null, function* () {
      var t, s;
      !this._refreshSignal && !this._patching || (yield Promise.all([(t = this._refreshSignal) == null ? void 0 : t.call(this, e), (s = this._patching) == null ? void 0 : s.call(this, e)]));
    });
  }
};
g(pe, "ChangeLanguageMixin");
var vt = pe, bt = { warn: console.warn, error: console.error, info: console.info, debug: console.debug };
function de(r) {
  let e, t = [], s = g((n, ...i) => {
    let a = i.join(" ");
    if (e) {
      if (!e.debug) return;
      e.emit("log", { level: n, message: a });
    } else if (e = globalThis.VoerkaI18n, e && e instanceof le) if (e.debug) {
      t.push([n, a]);
      let o = g((l, u) => {
        r ? r(l, u) : bt[l](u);
      }, "log");
      e.on("log", ({ level: l, message: u }) => o(l, u)), t.forEach(([l, u]) => o(l, u));
    } else t.splice(0, t.length);
    else t.push([n, a]);
  }, "logOutput");
  return { warn: g((...n) => s("warn", ...n), "warn"), error: g((...n) => s("error", ...n), "error"), info: g((...n) => s("info", ...n), "info"), debug: g((...n) => s("debug", ...n), "debug") };
}
g(de, "createLogger");
var wt = class extends Error {
  constructor(e) {
    super(`Formatters of language<${e}> is not loaded,try to call load()`);
  }
};
g(wt, "FormattersNotLoadedError");
var _e = class {
  constructor(e) {
    p(this, "_formatters", []), p(this, "_scope"), this._scope = e, this._formatters = e == null ? void 0 : e.options.formatters, this._registerFormatters();
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
    let n = this.scope, i = e.next;
    e.next = function(a, o, l) {
      let u = l.getConfig;
      return l.getConfig = () => Object.assign({}, s, t == null ? void 0 : t[n.activeLanguage], u(e.name)), i.call(this, a, o, l);
    }, this._addFormatter(e);
  }
};
g(_e, "VoerkaI18nFormatterManager");
var Et = _e;
function me(r) {
  return r && typeof r == "object" && r.__VoerkaI18nManager__;
}
g(me, "isI18nManger");
var ye = class {
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
g(ye, "LanguageMixin");
var xt = ye, ve = class {
  _getPluraMessage(e, t) {
    try {
      return Array.isArray(e) ? e.length > t ? e[t] : e[e.length - 1] : e;
    } catch (s) {
      return Array.isArray(e) ? e[0] : e;
    }
  }
  _getPluraValue(e) {
    let t = null, s = [];
    if (v(e)) {
      let n = e;
      for (let [i, a] of Object.entries(n)) {
        if (m(a)) try {
          n[i] = a();
        } catch (l) {
          n[i] = a;
        }
        let o = typeof n[i] == "number";
        (t == null && o || i.startsWith("$") && o) && (t = n[i]);
      }
      s = [n];
    } else Array.isArray(e) ? s = e.map((n) => {
      try {
        n = m(n) ? n() : n, A(n) && !t && (t = parseInt(n));
      } catch (i) {
        return String(n);
      }
      return n;
    }) : e !== void 0 && (t = A(e) ? parseInt(e) : 0, s = [e]);
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
    let n = (s == null ? void 0 : s.language) || this.activeLanguage, i = this._getActiveMessages(n);
    e = e.replace(/\n/g, "\\n");
    let a = e;
    if (typeof e != "string") return e;
    let o = t === void 0 ? [] : m(t) ? t() : t;
    try {
      if (O(e)) a = i[e] || e;
      else {
        let h = this.idMap[e];
        a = i[h] || i[e] || e;
      }
      let [l, u] = this._getPluraValue(o);
      Array.isArray(a) && a.length > 0 && (l !== null ? a = this._getPluraMessage(a, l) : a = a[0]), o.length, a = this.interpolator.replace(a, ...u), this._translateTransformer && (s != null && s.transform) && (a = this._translateTransformer(a, u, s));
    } catch (l) {
      this.logger.error(`翻译失败：${l.stack}`);
    }
    return a;
  }
};
g(ve, "TranslateMixin");
var St = ve, be = class {
  _getStorage() {
    let e = this.storage;
    return ae(e) ? e : void 0;
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
g(be, "RestoreMixin");
var $t = be;
function we(r, e, t) {
  let { defaultValue: s, delimiter: n, matched: i } = Object.assign({ delimiter: "." }, t);
  if (!r || typeof e != "string") return s;
  if (!e) return r;
  let a = e.split(n), o = r, l, u;
  try {
    for (let h of a) if (o instanceof Map || o instanceof WeakMap) {
      if (!o.has(h)) return s;
      l = o, u = h, o = o.get(h);
    } else if (o instanceof Set) {
      let f = parseInt(h, 10);
      if (f >= o.size) return s;
      l = o, u = f, o = [...o][f];
    } else if (o && typeof o == "object" && h in o) l = o, u = Array.isArray(o) ? parseInt(h) : h, o = o[h];
    else return s;
  } catch (h) {
    return s;
  }
  return typeof i == "function" && i({ value: o, parent: l, indexOrKey: u }), o;
}
g(we, "u");
var Ee = class {
  constructor() {
    p(this, "_flexVars");
  }
  _initInterpolators() {
    this._flexVars = new lt({ filterContext: { getConfig: g((e) => {
      let t = this.activeMessages.$config || {};
      return e ? we(t, e) : t;
    }, "getConfig"), scope: this } });
  }
};
g(Ee, "InterpolatorMixin");
var Lt = Ee;
function xe(r, ...e) {
  if (e.length === 0) return r;
  let t = e.map((s, n) => {
    let i = Object.entries(s || {});
    return i.some(([a, o]) => o === void 0) ? i.reduce((a, [o, l]) => (l !== void 0 && (a[o] = l), a), {}) : s;
  });
  return Object.assign(r, ...t);
}
g(xe, "u");
var V = class Se extends ke(ct, dt, vt, xt, St, Lt, $t) {
  constructor(e) {
    super(), p(this, "__VoerkaI18nScope__", !0), p(this, "_options"), p(this, "_manager"), p(this, "_formatterManager", null), p(this, "_logger"), p(this, "_defaultLanguage", "zh-CN"), p(this, "_activeLanguage", "zh-CN"), p(this, "_activeMessages", {}), p(this, "_patchedMessages", {}), p(this, "_translateComponent"), p(this, "_translateTransformer"), p(this, "_activeParagraphs", {}), p(this, "$id", ++Se.idSeq), this._options = xe({ id: se(), library: !1, debug: !1, injectLangAttr: !0, languages: [], messages: {}, paragraphs: {}, idMap: {}, formatters: [], attached: !0, storageKey: "language", cachePatch: !0 }, e), this._init();
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
    return (e, t, s) => (this._getTranslateTransformer(), s || (s = {}), s.transform = !0, this.translate(e, t, s));
  }
  getScopeOption(e) {
    let t = this._options;
    return this.attached ? t[e] || (this.library ? this._manager[e] : void 0) : t[e];
  }
  _initOptions() {
    if (!Array.isArray(this.languages)) this.logger.warn("[VoerkaI18n] invalid language settings, will use default language settings."), this._options.languages = Object.assign([], ht);
    else if (this.languages.length == 0) throw new Error("[VoerkaI18n] must provide valid language settings.");
    let e, t;
    this.languages.forEach((n) => {
      n.default && (t = n.name), n.active && (e = n.name);
    });
    let s = this._options.messages;
    if (t in s || (t = Object.keys(s)[0]), e in s || (e = t), !(t in s)) throw new Error("[VoerkaI18n] invalid language configuration, must provide valid default and active languages.");
    if (this._activeLanguage = e, this._defaultLanguage = t, !this._options.library && !this._options.storage && (this._options.storage = gt), m(this.messages[this._defaultLanguage])) throw new Error("[VoerkaI18n] default language pack must be static content, can't use async load way.");
    this._activeMessages = this.messages[this._activeLanguage], this._activeParagraphs = this.paragraphs[this._activeLanguage];
  }
  _init() {
    this._logger = de(this._options.log), this._initOptions(), this.library || this.restoreLanguage(), this._initInterpolators(), this.registerToManager(), this._formatterManager = new Et(this);
  }
  bind(e) {
    this._manager = e, this._manager.once("init", this._initRefresh.bind(this));
  }
  _initRefresh(e) {
    if (this.library) this.refresh(e && e());
    else {
      let t = [];
      (this._defaultLanguage !== this._activeLanguage || m(this.activeMessages)) && t.push(this.refresh(void 0, { patch: !1 })), t.push(this._patch()), Promise.all(t).then(() => {
        this.emit("ready", this.activeLanguage, !0), this._setLanguageAttr();
      });
    }
  }
  registerToManager() {
    if (!this.attached) return;
    let e = !this.options.library;
    e && (globalThis.VoerkaI18n && globalThis.VoerkaI18n.scope && C() && console.warn("Only can have one i18nScope with library=false"), this._manager = new le(this));
    let t = globalThis.VoerkaI18n;
    t && me(t) ? e ? this._initRefresh() : t.register(this) : (globalThis.__VoerkaI18nScopes__ || (globalThis.__VoerkaI18nScopes__ = []), globalThis.__VoerkaI18nScopes__.push(this));
  }
  change(e) {
    return d(this, null, function* () {
      let t = this.activeLanguage;
      return this.attached ? t = yield this._manager.change(e) : t = yield this.refresh(e), t;
    });
  }
  _setLanguageAttr() {
    if (!(this.library || !C())) try {
      let e = this._options.injectLangAttr;
      if (!e) return;
      let t = e === !0 ? document.body : document.body.querySelector(e);
      t && t.setAttribute("lang", this.activeLanguage);
    } catch (e) {
    }
  }
  getRawMessage(e) {
    if (O(e)) {
      if (e in this.defaultMessages) return this.defaultMessages[e];
    } else return e;
  }
  getMessageId(e) {
    if (O(e)) return e;
    if (e in this.idMap) return this.idMap[e];
  }
};
g(V, "VoerkaI18nScope"), p(V, "idSeq", 0);
var Ht = V;
function It(r, e, t) {
  return (s) => {
    let n = r.next;
    return r.next = function(i, a, o) {
      let l = o.getConfig;
      return o.getConfig = () => Object.assign({}, t, e == null ? void 0 : e[s.activeLanguage], l(r.name)), n.call(this, i, a, o);
    }, r;
  };
}
g(It, "createFormatter");
function Pt(r) {
  let e = globalThis.VoerkaI18n;
  e ? e.registerPlugin(r) : (globalThis.__VoerkaI18nPlugins__ || (globalThis.__VoerkaI18nPlugins__ = []), globalThis.__VoerkaI18nPlugins__.push(r));
}
g(Pt, "definePlugin");
export {
  Ht as _,
  ie as n
};
