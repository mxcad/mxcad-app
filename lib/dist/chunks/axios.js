var ct = Object.defineProperty, lt = Object.defineProperties;
var ut = Object.getOwnPropertyDescriptors;
var Re = Object.getOwnPropertySymbols;
var ft = Object.prototype.hasOwnProperty, dt = Object.prototype.propertyIsEnumerable;
var q = (e, t) => (t = Symbol[e]) ? t : Symbol.for("Symbol." + e), pt = (e) => {
  throw TypeError(e);
};
var Se = (e, t, n) => t in e ? ct(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, _ = (e, t) => {
  for (var n in t || (t = {}))
    ft.call(t, n) && Se(e, n, t[n]);
  if (Re)
    for (var n of Re(t))
      dt.call(t, n) && Se(e, n, t[n]);
  return e;
}, ge = (e, t) => lt(e, ut(t));
var L = (e, t, n) => new Promise((r, s) => {
  var o = (f) => {
    try {
      c(n.next(f));
    } catch (l) {
      s(l);
    }
  }, i = (f) => {
    try {
      c(n.throw(f));
    } catch (l) {
      s(l);
    }
  }, c = (f) => f.done ? r(f.value) : Promise.resolve(f.value).then(o, i);
  c((n = n.apply(e, t)).next());
}), B = function(e, t) {
  this[0] = e, this[1] = t;
}, oe = (e, t, n) => {
  var r = (i, c, f, l) => {
    try {
      var u = n[i](c), d = (c = u.value) instanceof B, w = u.done;
      Promise.resolve(d ? c[0] : c).then((b) => d ? r(i === "return" ? i : "next", c[1] ? { done: b.done, value: b.value } : b, f, l) : f({ value: b, done: w })).catch((b) => r("throw", b, f, l));
    } catch (b) {
      l(b);
    }
  }, s = (i) => o[i] = (c) => new Promise((f, l) => r(i, c, f, l)), o = {};
  return n = n.apply(e, t), o[q("asyncIterator")] = () => o, s("next"), s("throw"), s("return"), o;
}, ie = (e) => {
  var t = e[q("asyncIterator")], n = !1, r, s = {};
  return t == null ? (t = e[q("iterator")](), r = (o) => s[o] = (i) => t[o](i)) : (t = t.call(e), r = (o) => s[o] = (i) => {
    if (n) {
      if (n = !1, o === "throw") throw i;
      return i;
    }
    return n = !0, {
      done: !1,
      value: new B(new Promise((c) => {
        var f = t[o](i);
        f instanceof Object || pt("Object expected"), c(f);
      }), 1)
    };
  }), s[q("iterator")] = () => s, r("next"), "throw" in t ? r("throw") : s.throw = (o) => {
    throw o;
  }, "return" in t && r("return"), s;
}, Oe = (e, t, n) => (t = e[q("asyncIterator")]) ? t.call(e) : (e = e[q("iterator")](), t = {}, n = (r, s) => (s = e[r]) && (t[r] = (o) => new Promise((i, c, f) => (o = s.call(e, o), f = o.done, Promise.resolve(o.value).then((l) => i({ value: l, done: f }), c)))), n("next"), n("return"), t);
function je(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: ht } = Object.prototype, { getPrototypeOf: ye } = Object, { iterator: Y, toStringTag: qe } = Symbol, ee = /* @__PURE__ */ ((e) => (t) => {
  const n = ht.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), C = (e) => (e = e.toLowerCase(), (t) => ee(t) === e), te = (e) => (t) => typeof t === e, { isArray: H } = Array, z = te("undefined");
function $(e) {
  return e !== null && !z(e) && e.constructor !== null && !z(e.constructor) && A(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const He = C("ArrayBuffer");
function mt(e) {
  let t;
  return typeof ArrayBuffer != "undefined" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && He(e.buffer), t;
}
const yt = te("string"), A = te("function"), Ie = te("number"), J = (e) => e !== null && typeof e == "object", bt = (e) => e === !0 || e === !1, v = (e) => {
  if (ee(e) !== "object")
    return !1;
  const t = ye(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(qe in e) && !(Y in e);
}, wt = (e) => {
  if (!J(e) || $(e))
    return !1;
  try {
    return Object.keys(e).length === 0 && Object.getPrototypeOf(e) === Object.prototype;
  } catch (t) {
    return !1;
  }
}, Et = C("Date"), Rt = C("File"), St = C("Blob"), gt = C("FileList"), Ot = (e) => J(e) && A(e.pipe), Tt = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || A(e.append) && ((t = ee(e)) === "formdata" || // detect form-data instance
  t === "object" && A(e.toString) && e.toString() === "[object FormData]"));
}, At = C("URLSearchParams"), [xt, Ct, Nt, Pt] = ["ReadableStream", "Request", "Response", "Headers"].map(C), Ft = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function V(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e == "undefined")
    return;
  let r, s;
  if (typeof e != "object" && (e = [e]), H(e))
    for (r = 0, s = e.length; r < s; r++)
      t.call(null, e[r], r, e);
  else {
    if ($(e))
      return;
    const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e), i = o.length;
    let c;
    for (r = 0; r < i; r++)
      c = o[r], t.call(null, e[c], c, e);
  }
}
function Me(e, t) {
  if ($(e))
    return null;
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length, s;
  for (; r-- > 0; )
    if (s = n[r], t === s.toLowerCase())
      return s;
  return null;
}
const D = typeof globalThis != "undefined" ? globalThis : typeof self != "undefined" ? self : typeof window != "undefined" ? window : global, ze = (e) => !z(e) && e !== D;
function ue() {
  const { caseless: e } = ze(this) && this || {}, t = {}, n = (r, s) => {
    const o = e && Me(t, s) || s;
    v(t[o]) && v(r) ? t[o] = ue(t[o], r) : v(r) ? t[o] = ue({}, r) : H(r) ? t[o] = r.slice() : t[o] = r;
  };
  for (let r = 0, s = arguments.length; r < s; r++)
    arguments[r] && V(arguments[r], n);
  return t;
}
const _t = (e, t, n, { allOwnKeys: r } = {}) => (V(t, (s, o) => {
  n && A(s) ? e[o] = je(s, n) : e[o] = s;
}, { allOwnKeys: r }), e), Ut = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), Lt = (e, t, n, r) => {
  e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, Bt = (e, t, n, r) => {
  let s, o, i;
  const c = {};
  if (t = t || {}, e == null) return t;
  do {
    for (s = Object.getOwnPropertyNames(e), o = s.length; o-- > 0; )
      i = s[o], (!r || r(i, e, t)) && !c[i] && (t[i] = e[i], c[i] = !0);
    e = n !== !1 && ye(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, Dt = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, kt = (e) => {
  if (!e) return null;
  if (H(e)) return e;
  let t = e.length;
  if (!Ie(t)) return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, jt = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array != "undefined" && ye(Uint8Array)), qt = (e, t) => {
  const r = (e && e[Y]).call(e);
  let s;
  for (; (s = r.next()) && !s.done; ) {
    const o = s.value;
    t.call(e, o[0], o[1]);
  }
}, Ht = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, It = C("HTMLFormElement"), Mt = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, r, s) {
    return r.toUpperCase() + s;
  }
), Te = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), zt = C("RegExp"), $e = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  V(n, (s, o) => {
    let i;
    (i = t(s, o, e)) !== !1 && (r[o] = i || s);
  }), Object.defineProperties(e, r);
}, $t = (e) => {
  $e(e, (t, n) => {
    if (A(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const r = e[n];
    if (A(r)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, Jt = (e, t) => {
  const n = {}, r = (s) => {
    s.forEach((o) => {
      n[o] = !0;
    });
  };
  return H(e) ? r(e) : r(String(e).split(t)), n;
}, Vt = () => {
}, Wt = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function Kt(e) {
  return !!(e && A(e.append) && e[qe] === "FormData" && e[Y]);
}
const vt = (e) => {
  const t = new Array(10), n = (r, s) => {
    if (J(r)) {
      if (t.indexOf(r) >= 0)
        return;
      if ($(r))
        return r;
      if (!("toJSON" in r)) {
        t[s] = r;
        const o = H(r) ? [] : {};
        return V(r, (i, c) => {
          const f = n(i, s + 1);
          !z(f) && (o[c] = f);
        }), t[s] = void 0, o;
      }
    }
    return r;
  };
  return n(e, 0);
}, Xt = C("AsyncFunction"), Gt = (e) => e && (J(e) || A(e)) && A(e.then) && A(e.catch), Je = ((e, t) => e ? setImmediate : t ? ((n, r) => (D.addEventListener("message", ({ source: s, data: o }) => {
  s === D && o === n && r.length && r.shift()();
}, !1), (s) => {
  r.push(s), D.postMessage(n, "*");
}))(`axios@${Math.random()}`, []) : (n) => setTimeout(n))(
  typeof setImmediate == "function",
  A(D.postMessage)
), Qt = typeof queueMicrotask != "undefined" ? queueMicrotask.bind(D) : typeof process != "undefined" && process.nextTick || Je, Zt = (e) => e != null && A(e[Y]), a = {
  isArray: H,
  isArrayBuffer: He,
  isBuffer: $,
  isFormData: Tt,
  isArrayBufferView: mt,
  isString: yt,
  isNumber: Ie,
  isBoolean: bt,
  isObject: J,
  isPlainObject: v,
  isEmptyObject: wt,
  isReadableStream: xt,
  isRequest: Ct,
  isResponse: Nt,
  isHeaders: Pt,
  isUndefined: z,
  isDate: Et,
  isFile: Rt,
  isBlob: St,
  isRegExp: zt,
  isFunction: A,
  isStream: Ot,
  isURLSearchParams: At,
  isTypedArray: jt,
  isFileList: gt,
  forEach: V,
  merge: ue,
  extend: _t,
  trim: Ft,
  stripBOM: Ut,
  inherits: Lt,
  toFlatObject: Bt,
  kindOf: ee,
  kindOfTest: C,
  endsWith: Dt,
  toArray: kt,
  forEachEntry: qt,
  matchAll: Ht,
  isHTMLForm: It,
  hasOwnProperty: Te,
  hasOwnProp: Te,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: $e,
  freezeMethods: $t,
  toObjectSet: Jt,
  toCamelCase: Mt,
  noop: Vt,
  toFiniteNumber: Wt,
  findKey: Me,
  global: D,
  isContextDefined: ze,
  isSpecCompliantForm: Kt,
  toJSONObject: vt,
  isAsyncFn: Xt,
  isThenable: Gt,
  setImmediate: Je,
  asap: Qt,
  isIterable: Zt
};
function m(e, t, n, r, s) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), r && (this.request = r), s && (this.response = s, this.status = s.status ? s.status : null);
}
a.inherits(m, Error, {
  toJSON: function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: a.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const Ve = m.prototype, We = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((e) => {
  We[e] = { value: e };
});
Object.defineProperties(m, We);
Object.defineProperty(Ve, "isAxiosError", { value: !0 });
m.from = (e, t, n, r, s, o) => {
  const i = Object.create(Ve);
  return a.toFlatObject(e, i, function(f) {
    return f !== Error.prototype;
  }, (c) => c !== "isAxiosError"), m.call(i, e.message, t, n, r, s), i.cause = e, i.name = e.name, o && Object.assign(i, o), i;
};
const Yt = null;
function fe(e) {
  return a.isPlainObject(e) || a.isArray(e);
}
function Ke(e) {
  return a.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Ae(e, t, n) {
  return e ? e.concat(t).map(function(s, o) {
    return s = Ke(s), !n && o ? "[" + s + "]" : s;
  }).join(n ? "." : "") : t;
}
function en(e) {
  return a.isArray(e) && !e.some(fe);
}
const tn = a.toFlatObject(a, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function ne(e, t, n) {
  if (!a.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = a.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(y, h) {
    return !a.isUndefined(h[y]);
  });
  const r = n.metaTokens, s = n.visitor || u, o = n.dots, i = n.indexes, f = (n.Blob || typeof Blob != "undefined" && Blob) && a.isSpecCompliantForm(t);
  if (!a.isFunction(s))
    throw new TypeError("visitor must be a function");
  function l(p) {
    if (p === null) return "";
    if (a.isDate(p))
      return p.toISOString();
    if (a.isBoolean(p))
      return p.toString();
    if (!f && a.isBlob(p))
      throw new m("Blob is not supported. Use a Buffer instead.");
    return a.isArrayBuffer(p) || a.isTypedArray(p) ? f && typeof Blob == "function" ? new Blob([p]) : Buffer.from(p) : p;
  }
  function u(p, y, h) {
    let E = p;
    if (p && !h && typeof p == "object") {
      if (a.endsWith(y, "{}"))
        y = r ? y : y.slice(0, -2), p = JSON.stringify(p);
      else if (a.isArray(p) && en(p) || (a.isFileList(p) || a.endsWith(y, "[]")) && (E = a.toArray(p)))
        return y = Ke(y), E.forEach(function(g, P) {
          !(a.isUndefined(g) || g === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            i === !0 ? Ae([y], P, o) : i === null ? y : y + "[]",
            l(g)
          );
        }), !1;
    }
    return fe(p) ? !0 : (t.append(Ae(h, y, o), l(p)), !1);
  }
  const d = [], w = Object.assign(tn, {
    defaultVisitor: u,
    convertValue: l,
    isVisitable: fe
  });
  function b(p, y) {
    if (!a.isUndefined(p)) {
      if (d.indexOf(p) !== -1)
        throw Error("Circular reference detected in " + y.join("."));
      d.push(p), a.forEach(p, function(E, S) {
        (!(a.isUndefined(E) || E === null) && s.call(
          t,
          E,
          a.isString(S) ? S.trim() : S,
          y,
          w
        )) === !0 && b(E, y ? y.concat(S) : [S]);
      }), d.pop();
    }
  }
  if (!a.isObject(e))
    throw new TypeError("data must be an object");
  return b(e), t;
}
function xe(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(r) {
    return t[r];
  });
}
function be(e, t) {
  this._pairs = [], e && ne(e, this, t);
}
const ve = be.prototype;
ve.append = function(t, n) {
  this._pairs.push([t, n]);
};
ve.toString = function(t) {
  const n = t ? function(r) {
    return t.call(this, r, xe);
  } : xe;
  return this._pairs.map(function(s) {
    return n(s[0]) + "=" + n(s[1]);
  }, "").join("&");
};
function nn(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Xe(e, t, n) {
  if (!t)
    return e;
  const r = n && n.encode || nn;
  a.isFunction(n) && (n = {
    serialize: n
  });
  const s = n && n.serialize;
  let o;
  if (s ? o = s(t, n) : o = a.isURLSearchParams(t) ? t.toString() : new be(t, n).toString(r), o) {
    const i = e.indexOf("#");
    i !== -1 && (e = e.slice(0, i)), e += (e.indexOf("?") === -1 ? "?" : "&") + o;
  }
  return e;
}
class Ce {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(t, n, r) {
    return this.handlers.push({
      fulfilled: t,
      rejected: n,
      synchronous: r ? r.synchronous : !1,
      runWhen: r ? r.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(t) {
    a.forEach(this.handlers, function(r) {
      r !== null && t(r);
    });
  }
}
const Ge = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, rn = typeof URLSearchParams != "undefined" ? URLSearchParams : be, sn = typeof FormData != "undefined" ? FormData : null, on = typeof Blob != "undefined" ? Blob : null, an = {
  isBrowser: !0,
  classes: {
    URLSearchParams: rn,
    FormData: sn,
    Blob: on
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, we = typeof window != "undefined" && typeof document != "undefined", de = typeof navigator == "object" && navigator || void 0, cn = we && (!de || ["ReactNative", "NativeScript", "NS"].indexOf(de.product) < 0), ln = typeof WorkerGlobalScope != "undefined" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", un = we && window.location.href || "http://localhost", fn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: we,
  hasStandardBrowserEnv: cn,
  hasStandardBrowserWebWorkerEnv: ln,
  navigator: de,
  origin: un
}, Symbol.toStringTag, { value: "Module" })), O = _(_({}, fn), an);
function dn(e, t) {
  return ne(e, new O.classes.URLSearchParams(), _({
    visitor: function(n, r, s, o) {
      return O.isNode && a.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : o.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function pn(e) {
  return a.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function hn(e) {
  const t = {}, n = Object.keys(e);
  let r;
  const s = n.length;
  let o;
  for (r = 0; r < s; r++)
    o = n[r], t[o] = e[o];
  return t;
}
function Qe(e) {
  function t(n, r, s, o) {
    let i = n[o++];
    if (i === "__proto__") return !0;
    const c = Number.isFinite(+i), f = o >= n.length;
    return i = !i && a.isArray(s) ? s.length : i, f ? (a.hasOwnProp(s, i) ? s[i] = [s[i], r] : s[i] = r, !c) : ((!s[i] || !a.isObject(s[i])) && (s[i] = []), t(n, r, s[i], o) && a.isArray(s[i]) && (s[i] = hn(s[i])), !c);
  }
  if (a.isFormData(e) && a.isFunction(e.entries)) {
    const n = {};
    return a.forEachEntry(e, (r, s) => {
      t(pn(r), s, n, 0);
    }), n;
  }
  return null;
}
function mn(e, t, n) {
  if (a.isString(e))
    try {
      return (t || JSON.parse)(e), a.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(e);
}
const W = {
  transitional: Ge,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(t, n) {
    const r = n.getContentType() || "", s = r.indexOf("application/json") > -1, o = a.isObject(t);
    if (o && a.isHTMLForm(t) && (t = new FormData(t)), a.isFormData(t))
      return s ? JSON.stringify(Qe(t)) : t;
    if (a.isArrayBuffer(t) || a.isBuffer(t) || a.isStream(t) || a.isFile(t) || a.isBlob(t) || a.isReadableStream(t))
      return t;
    if (a.isArrayBufferView(t))
      return t.buffer;
    if (a.isURLSearchParams(t))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let c;
    if (o) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return dn(t, this.formSerializer).toString();
      if ((c = a.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
        const f = this.env && this.env.FormData;
        return ne(
          c ? { "files[]": t } : t,
          f && new f(),
          this.formSerializer
        );
      }
    }
    return o || s ? (n.setContentType("application/json", !1), mn(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || W.transitional, r = n && n.forcedJSONParsing, s = this.responseType === "json";
    if (a.isResponse(t) || a.isReadableStream(t))
      return t;
    if (t && a.isString(t) && (r && !this.responseType || s)) {
      const i = !(n && n.silentJSONParsing) && s;
      try {
        return JSON.parse(t);
      } catch (c) {
        if (i)
          throw c.name === "SyntaxError" ? m.from(c, m.ERR_BAD_RESPONSE, this, null, this.response) : c;
      }
    }
    return t;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: O.classes.FormData,
    Blob: O.classes.Blob
  },
  validateStatus: function(t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
a.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  W.headers[e] = {};
});
const yn = a.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]), bn = (e) => {
  const t = {};
  let n, r, s;
  return e && e.split(`
`).forEach(function(i) {
    s = i.indexOf(":"), n = i.substring(0, s).trim().toLowerCase(), r = i.substring(s + 1).trim(), !(!n || t[n] && yn[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
}, Ne = Symbol("internals");
function M(e) {
  return e && String(e).trim().toLowerCase();
}
function X(e) {
  return e === !1 || e == null ? e : a.isArray(e) ? e.map(X) : String(e);
}
function wn(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const En = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function ae(e, t, n, r, s) {
  if (a.isFunction(r))
    return r.call(this, t, n);
  if (s && (t = n), !!a.isString(t)) {
    if (a.isString(r))
      return t.indexOf(r) !== -1;
    if (a.isRegExp(r))
      return r.test(t);
  }
}
function Rn(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function Sn(e, t) {
  const n = a.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function(s, o, i) {
        return this[r].call(this, t, s, o, i);
      },
      configurable: !0
    });
  });
}
let x = class {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const s = this;
    function o(c, f, l) {
      const u = M(f);
      if (!u)
        throw new Error("header name must be a non-empty string");
      const d = a.findKey(s, u);
      (!d || s[d] === void 0 || l === !0 || l === void 0 && s[d] !== !1) && (s[d || f] = X(c));
    }
    const i = (c, f) => a.forEach(c, (l, u) => o(l, u, f));
    if (a.isPlainObject(t) || t instanceof this.constructor)
      i(t, n);
    else if (a.isString(t) && (t = t.trim()) && !En(t))
      i(bn(t), n);
    else if (a.isObject(t) && a.isIterable(t)) {
      let c = {}, f, l;
      for (const u of t) {
        if (!a.isArray(u))
          throw TypeError("Object iterator must return a key-value pair");
        c[l = u[0]] = (f = c[l]) ? a.isArray(f) ? [...f, u[1]] : [f, u[1]] : u[1];
      }
      i(c, n);
    } else
      t != null && o(n, t, r);
    return this;
  }
  get(t, n) {
    if (t = M(t), t) {
      const r = a.findKey(this, t);
      if (r) {
        const s = this[r];
        if (!n)
          return s;
        if (n === !0)
          return wn(s);
        if (a.isFunction(n))
          return n.call(this, s, r);
        if (a.isRegExp(n))
          return n.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = M(t), t) {
      const r = a.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || ae(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let s = !1;
    function o(i) {
      if (i = M(i), i) {
        const c = a.findKey(r, i);
        c && (!n || ae(r, r[c], c, n)) && (delete r[c], s = !0);
      }
    }
    return a.isArray(t) ? t.forEach(o) : o(t), s;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length, s = !1;
    for (; r--; ) {
      const o = n[r];
      (!t || ae(this, this[o], o, t, !0)) && (delete this[o], s = !0);
    }
    return s;
  }
  normalize(t) {
    const n = this, r = {};
    return a.forEach(this, (s, o) => {
      const i = a.findKey(r, o);
      if (i) {
        n[i] = X(s), delete n[o];
        return;
      }
      const c = t ? Rn(o) : String(o).trim();
      c !== o && delete n[o], n[c] = X(s), r[c] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = /* @__PURE__ */ Object.create(null);
    return a.forEach(this, (r, s) => {
      r != null && r !== !1 && (n[s] = t && a.isArray(r) ? r.join(", ") : r);
    }), n;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  getSetCookie() {
    return this.get("set-cookie") || [];
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return n.forEach((s) => r.set(s)), r;
  }
  static accessor(t) {
    const r = (this[Ne] = this[Ne] = {
      accessors: {}
    }).accessors, s = this.prototype;
    function o(i) {
      const c = M(i);
      r[c] || (Sn(s, i), r[c] = !0);
    }
    return a.isArray(t) ? t.forEach(o) : o(t), this;
  }
};
x.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
a.reduceDescriptors(x.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    }
  };
});
a.freezeMethods(x);
function ce(e, t) {
  const n = this || W, r = t || n, s = x.from(r.headers);
  let o = r.data;
  return a.forEach(e, function(c) {
    o = c.call(n, o, s.normalize(), t ? t.status : void 0);
  }), s.normalize(), o;
}
function Ze(e) {
  return !!(e && e.__CANCEL__);
}
function I(e, t, n) {
  m.call(this, e == null ? "canceled" : e, m.ERR_CANCELED, t, n), this.name = "CanceledError";
}
a.inherits(I, m, {
  __CANCEL__: !0
});
function Ye(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e(n) : t(new m(
    "Request failed with status code " + n.status,
    [m.ERR_BAD_REQUEST, m.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
function gn(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function On(e, t) {
  e = e || 10;
  const n = new Array(e), r = new Array(e);
  let s = 0, o = 0, i;
  return t = t !== void 0 ? t : 1e3, function(f) {
    const l = Date.now(), u = r[o];
    i || (i = l), n[s] = f, r[s] = l;
    let d = o, w = 0;
    for (; d !== s; )
      w += n[d++], d = d % e;
    if (s = (s + 1) % e, s === o && (o = (o + 1) % e), l - i < t)
      return;
    const b = u && l - u;
    return b ? Math.round(w * 1e3 / b) : void 0;
  };
}
function Tn(e, t) {
  let n = 0, r = 1e3 / t, s, o;
  const i = (l, u = Date.now()) => {
    n = u, s = null, o && (clearTimeout(o), o = null), e(...l);
  };
  return [(...l) => {
    const u = Date.now(), d = u - n;
    d >= r ? i(l, u) : (s = l, o || (o = setTimeout(() => {
      o = null, i(s);
    }, r - d)));
  }, () => s && i(s)];
}
const Q = (e, t, n = 3) => {
  let r = 0;
  const s = On(50, 250);
  return Tn((o) => {
    const i = o.loaded, c = o.lengthComputable ? o.total : void 0, f = i - r, l = s(f), u = i <= c;
    r = i;
    const d = {
      loaded: i,
      total: c,
      progress: c ? i / c : void 0,
      bytes: f,
      rate: l || void 0,
      estimated: l && c && u ? (c - i) / l : void 0,
      event: o,
      lengthComputable: c != null,
      [t ? "download" : "upload"]: !0
    };
    e(d);
  }, n);
}, Pe = (e, t) => {
  const n = e != null;
  return [(r) => t[0]({
    lengthComputable: n,
    total: e,
    loaded: r
  }), t[1]];
}, Fe = (e) => (...t) => a.asap(() => e(...t)), An = O.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, t) => (n) => (n = new URL(n, O.origin), e.protocol === n.protocol && e.host === n.host && (t || e.port === n.port)))(
  new URL(O.origin),
  O.navigator && /(msie|trident)/i.test(O.navigator.userAgent)
) : () => !0, xn = O.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, n, r, s, o) {
      const i = [e + "=" + encodeURIComponent(t)];
      a.isNumber(n) && i.push("expires=" + new Date(n).toGMTString()), a.isString(r) && i.push("path=" + r), a.isString(s) && i.push("domain=" + s), o === !0 && i.push("secure"), document.cookie = i.join("; ");
    },
    read(e) {
      const t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
      return t ? decodeURIComponent(t[3]) : null;
    },
    remove(e) {
      this.write(e, "", Date.now() - 864e5);
    }
  }
) : (
  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {
    },
    read() {
      return null;
    },
    remove() {
    }
  }
);
function Cn(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Nn(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function et(e, t, n) {
  let r = !Cn(t);
  return e && (r || n == !1) ? Nn(e, t) : t;
}
const _e = (e) => e instanceof x ? _({}, e) : e;
function j(e, t) {
  t = t || {};
  const n = {};
  function r(l, u, d, w) {
    return a.isPlainObject(l) && a.isPlainObject(u) ? a.merge.call({ caseless: w }, l, u) : a.isPlainObject(u) ? a.merge({}, u) : a.isArray(u) ? u.slice() : u;
  }
  function s(l, u, d, w) {
    if (a.isUndefined(u)) {
      if (!a.isUndefined(l))
        return r(void 0, l, d, w);
    } else return r(l, u, d, w);
  }
  function o(l, u) {
    if (!a.isUndefined(u))
      return r(void 0, u);
  }
  function i(l, u) {
    if (a.isUndefined(u)) {
      if (!a.isUndefined(l))
        return r(void 0, l);
    } else return r(void 0, u);
  }
  function c(l, u, d) {
    if (d in t)
      return r(l, u);
    if (d in e)
      return r(void 0, l);
  }
  const f = {
    url: o,
    method: o,
    data: o,
    baseURL: i,
    transformRequest: i,
    transformResponse: i,
    paramsSerializer: i,
    timeout: i,
    timeoutMessage: i,
    withCredentials: i,
    withXSRFToken: i,
    adapter: i,
    responseType: i,
    xsrfCookieName: i,
    xsrfHeaderName: i,
    onUploadProgress: i,
    onDownloadProgress: i,
    decompress: i,
    maxContentLength: i,
    maxBodyLength: i,
    beforeRedirect: i,
    transport: i,
    httpAgent: i,
    httpsAgent: i,
    cancelToken: i,
    socketPath: i,
    responseEncoding: i,
    validateStatus: c,
    headers: (l, u, d) => s(_e(l), _e(u), d, !0)
  };
  return a.forEach(Object.keys(_(_({}, e), t)), function(u) {
    const d = f[u] || s, w = d(e[u], t[u], u);
    a.isUndefined(w) && d !== c || (n[u] = w);
  }), n;
}
const tt = (e) => {
  const t = j({}, e);
  let { data: n, withXSRFToken: r, xsrfHeaderName: s, xsrfCookieName: o, headers: i, auth: c } = t;
  t.headers = i = x.from(i), t.url = Xe(et(t.baseURL, t.url, t.allowAbsoluteUrls), e.params, e.paramsSerializer), c && i.set(
    "Authorization",
    "Basic " + btoa((c.username || "") + ":" + (c.password ? unescape(encodeURIComponent(c.password)) : ""))
  );
  let f;
  if (a.isFormData(n)) {
    if (O.hasStandardBrowserEnv || O.hasStandardBrowserWebWorkerEnv)
      i.setContentType(void 0);
    else if ((f = i.getContentType()) !== !1) {
      const [l, ...u] = f ? f.split(";").map((d) => d.trim()).filter(Boolean) : [];
      i.setContentType([l || "multipart/form-data", ...u].join("; "));
    }
  }
  if (O.hasStandardBrowserEnv && (r && a.isFunction(r) && (r = r(t)), r || r !== !1 && An(t.url))) {
    const l = s && o && xn.read(o);
    l && i.set(s, l);
  }
  return t;
}, Pn = typeof XMLHttpRequest != "undefined", Fn = Pn && function(e) {
  return new Promise(function(n, r) {
    const s = tt(e);
    let o = s.data;
    const i = x.from(s.headers).normalize();
    let { responseType: c, onUploadProgress: f, onDownloadProgress: l } = s, u, d, w, b, p;
    function y() {
      b && b(), p && p(), s.cancelToken && s.cancelToken.unsubscribe(u), s.signal && s.signal.removeEventListener("abort", u);
    }
    let h = new XMLHttpRequest();
    h.open(s.method.toUpperCase(), s.url, !0), h.timeout = s.timeout;
    function E() {
      if (!h)
        return;
      const g = x.from(
        "getAllResponseHeaders" in h && h.getAllResponseHeaders()
      ), T = {
        data: !c || c === "text" || c === "json" ? h.responseText : h.response,
        status: h.status,
        statusText: h.statusText,
        headers: g,
        config: e,
        request: h
      };
      Ye(function(U) {
        n(U), y();
      }, function(U) {
        r(U), y();
      }, T), h = null;
    }
    "onloadend" in h ? h.onloadend = E : h.onreadystatechange = function() {
      !h || h.readyState !== 4 || h.status === 0 && !(h.responseURL && h.responseURL.indexOf("file:") === 0) || setTimeout(E);
    }, h.onabort = function() {
      h && (r(new m("Request aborted", m.ECONNABORTED, e, h)), h = null);
    }, h.onerror = function() {
      r(new m("Network Error", m.ERR_NETWORK, e, h)), h = null;
    }, h.ontimeout = function() {
      let P = s.timeout ? "timeout of " + s.timeout + "ms exceeded" : "timeout exceeded";
      const T = s.transitional || Ge;
      s.timeoutErrorMessage && (P = s.timeoutErrorMessage), r(new m(
        P,
        T.clarifyTimeoutError ? m.ETIMEDOUT : m.ECONNABORTED,
        e,
        h
      )), h = null;
    }, o === void 0 && i.setContentType(null), "setRequestHeader" in h && a.forEach(i.toJSON(), function(P, T) {
      h.setRequestHeader(T, P);
    }), a.isUndefined(s.withCredentials) || (h.withCredentials = !!s.withCredentials), c && c !== "json" && (h.responseType = s.responseType), l && ([w, p] = Q(l, !0), h.addEventListener("progress", w)), f && h.upload && ([d, b] = Q(f), h.upload.addEventListener("progress", d), h.upload.addEventListener("loadend", b)), (s.cancelToken || s.signal) && (u = (g) => {
      h && (r(!g || g.type ? new I(null, e, h) : g), h.abort(), h = null);
    }, s.cancelToken && s.cancelToken.subscribe(u), s.signal && (s.signal.aborted ? u() : s.signal.addEventListener("abort", u)));
    const S = gn(s.url);
    if (S && O.protocols.indexOf(S) === -1) {
      r(new m("Unsupported protocol " + S + ":", m.ERR_BAD_REQUEST, e));
      return;
    }
    h.send(o || null);
  });
}, _n = (e, t) => {
  const { length: n } = e = e ? e.filter(Boolean) : [];
  if (t || n) {
    let r = new AbortController(), s;
    const o = function(l) {
      if (!s) {
        s = !0, c();
        const u = l instanceof Error ? l : this.reason;
        r.abort(u instanceof m ? u : new I(u instanceof Error ? u.message : u));
      }
    };
    let i = t && setTimeout(() => {
      i = null, o(new m(`timeout ${t} of ms exceeded`, m.ETIMEDOUT));
    }, t);
    const c = () => {
      e && (i && clearTimeout(i), i = null, e.forEach((l) => {
        l.unsubscribe ? l.unsubscribe(o) : l.removeEventListener("abort", o);
      }), e = null);
    };
    e.forEach((l) => l.addEventListener("abort", o));
    const { signal: f } = r;
    return f.unsubscribe = () => a.asap(c), f;
  }
}, Un = function* (e, t) {
  let n = e.byteLength;
  if (n < t) {
    yield e;
    return;
  }
  let r = 0, s;
  for (; r < n; )
    s = r + t, yield e.slice(r, s), r = s;
}, Ln = function(e, t) {
  return oe(this, null, function* () {
    try {
      for (var n = Oe(Bn(e)), r, s, o; r = !(s = yield new B(n.next())).done; r = !1) {
        const i = s.value;
        yield* ie(Un(i, t));
      }
    } catch (s) {
      o = [s];
    } finally {
      try {
        r && (s = n.return) && (yield new B(s.call(n)));
      } finally {
        if (o)
          throw o[0];
      }
    }
  });
}, Bn = function(e) {
  return oe(this, null, function* () {
    if (e[Symbol.asyncIterator]) {
      yield* ie(e);
      return;
    }
    const t = e.getReader();
    try {
      for (; ; ) {
        const { done: n, value: r } = yield new B(t.read());
        if (n)
          break;
        yield r;
      }
    } finally {
      yield new B(t.cancel());
    }
  });
}, Ue = (e, t, n, r) => {
  const s = Ln(e, t);
  let o = 0, i, c = (l) => {
    i || (i = !0, r && r(l));
  };
  return new ReadableStream({
    pull(l) {
      return L(this, null, function* () {
        try {
          const { done: u, value: d } = yield s.next();
          if (u) {
            c(), l.close();
            return;
          }
          let w = d.byteLength;
          if (n) {
            let b = o += w;
            n(b);
          }
          l.enqueue(new Uint8Array(d));
        } catch (u) {
          throw c(u), u;
        }
      });
    },
    cancel(l) {
      return c(l), s.return();
    }
  }, {
    highWaterMark: 2
  });
}, re = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", nt = re && typeof ReadableStream == "function", Dn = re && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((e) => (t) => e.encode(t))(new TextEncoder()) : (e) => L(void 0, null, function* () {
  return new Uint8Array(yield new Response(e).arrayBuffer());
})), rt = (e, ...t) => {
  try {
    return !!e(...t);
  } catch (n) {
    return !1;
  }
}, kn = nt && rt(() => {
  let e = !1;
  const t = new Request(O.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return e = !0, "half";
    }
  }).headers.has("Content-Type");
  return e && !t;
}), Le = 64 * 1024, pe = nt && rt(() => a.isReadableStream(new Response("").body)), Z = {
  stream: pe && ((e) => e.body)
};
re && ((e) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
    !Z[t] && (Z[t] = a.isFunction(e[t]) ? (n) => n[t]() : (n, r) => {
      throw new m(`Response type '${t}' is not supported`, m.ERR_NOT_SUPPORT, r);
    });
  });
})(new Response());
const jn = (e) => L(void 0, null, function* () {
  if (e == null)
    return 0;
  if (a.isBlob(e))
    return e.size;
  if (a.isSpecCompliantForm(e))
    return (yield new Request(O.origin, {
      method: "POST",
      body: e
    }).arrayBuffer()).byteLength;
  if (a.isArrayBufferView(e) || a.isArrayBuffer(e))
    return e.byteLength;
  if (a.isURLSearchParams(e) && (e = e + ""), a.isString(e))
    return (yield Dn(e)).byteLength;
}), qn = (e, t) => L(void 0, null, function* () {
  const n = a.toFiniteNumber(e.getContentLength());
  return n == null ? jn(t) : n;
}), Hn = re && ((e) => L(void 0, null, function* () {
  let {
    url: t,
    method: n,
    data: r,
    signal: s,
    cancelToken: o,
    timeout: i,
    onDownloadProgress: c,
    onUploadProgress: f,
    responseType: l,
    headers: u,
    withCredentials: d = "same-origin",
    fetchOptions: w
  } = tt(e);
  l = l ? (l + "").toLowerCase() : "text";
  let b = _n([s, o && o.toAbortSignal()], i), p;
  const y = b && b.unsubscribe && (() => {
    b.unsubscribe();
  });
  let h;
  try {
    if (f && kn && n !== "get" && n !== "head" && (h = yield qn(u, r)) !== 0) {
      let T = new Request(t, {
        method: "POST",
        body: r,
        duplex: "half"
      }), F;
      if (a.isFormData(r) && (F = T.headers.get("content-type")) && u.setContentType(F), T.body) {
        const [U, K] = Pe(
          h,
          Q(Fe(f))
        );
        r = Ue(T.body, Le, U, K);
      }
    }
    a.isString(d) || (d = d ? "include" : "omit");
    const E = "credentials" in Request.prototype;
    p = new Request(t, ge(_({}, w), {
      signal: b,
      method: n.toUpperCase(),
      headers: u.normalize().toJSON(),
      body: r,
      duplex: "half",
      credentials: E ? d : void 0
    }));
    let S = yield fetch(p, w);
    const g = pe && (l === "stream" || l === "response");
    if (pe && (c || g && y)) {
      const T = {};
      ["status", "statusText", "headers"].forEach((Ee) => {
        T[Ee] = S[Ee];
      });
      const F = a.toFiniteNumber(S.headers.get("content-length")), [U, K] = c && Pe(
        F,
        Q(Fe(c), !0)
      ) || [];
      S = new Response(
        Ue(S.body, Le, U, () => {
          K && K(), y && y();
        }),
        T
      );
    }
    l = l || "text";
    let P = yield Z[a.findKey(Z, l) || "text"](S, e);
    return !g && y && y(), yield new Promise((T, F) => {
      Ye(T, F, {
        data: P,
        headers: x.from(S.headers),
        status: S.status,
        statusText: S.statusText,
        config: e,
        request: p
      });
    });
  } catch (E) {
    throw y && y(), E && E.name === "TypeError" && /Load failed|fetch/i.test(E.message) ? Object.assign(
      new m("Network Error", m.ERR_NETWORK, e, p),
      {
        cause: E.cause || E
      }
    ) : m.from(E, E && E.code, e, p);
  }
})), he = {
  http: Yt,
  xhr: Fn,
  fetch: Hn
};
a.forEach(he, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch (n) {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const Be = (e) => `- ${e}`, In = (e) => a.isFunction(e) || e === null || e === !1, st = {
  getAdapter: (e) => {
    e = a.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, r;
    const s = {};
    for (let o = 0; o < t; o++) {
      n = e[o];
      let i;
      if (r = n, !In(n) && (r = he[(i = String(n)).toLowerCase()], r === void 0))
        throw new m(`Unknown adapter '${i}'`);
      if (r)
        break;
      s[i || "#" + o] = r;
    }
    if (!r) {
      const o = Object.entries(s).map(
        ([c, f]) => `adapter ${c} ` + (f === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let i = t ? o.length > 1 ? `since :
` + o.map(Be).join(`
`) : " " + Be(o[0]) : "as no adapter specified";
      throw new m(
        "There is no suitable adapter to dispatch the request " + i,
        "ERR_NOT_SUPPORT"
      );
    }
    return r;
  },
  adapters: he
};
function le(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new I(null, e);
}
function De(e) {
  return le(e), e.headers = x.from(e.headers), e.data = ce.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), st.getAdapter(e.adapter || W.adapter)(e).then(function(r) {
    return le(e), r.data = ce.call(
      e,
      e.transformResponse,
      r
    ), r.headers = x.from(r.headers), r;
  }, function(r) {
    return Ze(r) || (le(e), r && r.response && (r.response.data = ce.call(
      e,
      e.transformResponse,
      r.response
    ), r.response.headers = x.from(r.response.headers))), Promise.reject(r);
  });
}
const ot = "1.11.0", se = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  se[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const ke = {};
se.transitional = function(t, n, r) {
  function s(o, i) {
    return "[Axios v" + ot + "] Transitional option '" + o + "'" + i + (r ? ". " + r : "");
  }
  return (o, i, c) => {
    if (t === !1)
      throw new m(
        s(i, " has been removed" + (n ? " in " + n : "")),
        m.ERR_DEPRECATED
      );
    return n && !ke[i] && (ke[i] = !0, console.warn(
      s(
        i,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(o, i, c) : !0;
  };
};
se.spelling = function(t) {
  return (n, r) => (console.warn(`${r} is likely a misspelling of ${t}`), !0);
};
function Mn(e, t, n) {
  if (typeof e != "object")
    throw new m("options must be an object", m.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let s = r.length;
  for (; s-- > 0; ) {
    const o = r[s], i = t[o];
    if (i) {
      const c = e[o], f = c === void 0 || i(c, o, e);
      if (f !== !0)
        throw new m("option " + o + " must be " + f, m.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new m("Unknown option " + o, m.ERR_BAD_OPTION);
  }
}
const G = {
  assertOptions: Mn,
  validators: se
}, N = G.validators;
let k = class {
  constructor(t) {
    this.defaults = t || {}, this.interceptors = {
      request: new Ce(),
      response: new Ce()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  request(t, n) {
    return L(this, null, function* () {
      try {
        return yield this._request(t, n);
      } catch (r) {
        if (r instanceof Error) {
          let s = {};
          Error.captureStackTrace ? Error.captureStackTrace(s) : s = new Error();
          const o = s.stack ? s.stack.replace(/^.+\n/, "") : "";
          try {
            r.stack ? o && !String(r.stack).endsWith(o.replace(/^.+\n.+\n/, "")) && (r.stack += `
` + o) : r.stack = o;
          } catch (i) {
          }
        }
        throw r;
      }
    });
  }
  _request(t, n) {
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = j(this.defaults, n);
    const { transitional: r, paramsSerializer: s, headers: o } = n;
    r !== void 0 && G.assertOptions(r, {
      silentJSONParsing: N.transitional(N.boolean),
      forcedJSONParsing: N.transitional(N.boolean),
      clarifyTimeoutError: N.transitional(N.boolean)
    }, !1), s != null && (a.isFunction(s) ? n.paramsSerializer = {
      serialize: s
    } : G.assertOptions(s, {
      encode: N.function,
      serialize: N.function
    }, !0)), n.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? n.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : n.allowAbsoluteUrls = !0), G.assertOptions(n, {
      baseUrl: N.spelling("baseURL"),
      withXsrfToken: N.spelling("withXSRFToken")
    }, !0), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let i = o && a.merge(
      o.common,
      o[n.method]
    );
    o && a.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (p) => {
        delete o[p];
      }
    ), n.headers = x.concat(i, o);
    const c = [];
    let f = !0;
    this.interceptors.request.forEach(function(y) {
      typeof y.runWhen == "function" && y.runWhen(n) === !1 || (f = f && y.synchronous, c.unshift(y.fulfilled, y.rejected));
    });
    const l = [];
    this.interceptors.response.forEach(function(y) {
      l.push(y.fulfilled, y.rejected);
    });
    let u, d = 0, w;
    if (!f) {
      const p = [De.bind(this), void 0];
      for (p.unshift(...c), p.push(...l), w = p.length, u = Promise.resolve(n); d < w; )
        u = u.then(p[d++], p[d++]);
      return u;
    }
    w = c.length;
    let b = n;
    for (d = 0; d < w; ) {
      const p = c[d++], y = c[d++];
      try {
        b = p(b);
      } catch (h) {
        y.call(this, h);
        break;
      }
    }
    try {
      u = De.call(this, b);
    } catch (p) {
      return Promise.reject(p);
    }
    for (d = 0, w = l.length; d < w; )
      u = u.then(l[d++], l[d++]);
    return u;
  }
  getUri(t) {
    t = j(this.defaults, t);
    const n = et(t.baseURL, t.url, t.allowAbsoluteUrls);
    return Xe(n, t.params, t.paramsSerializer);
  }
};
a.forEach(["delete", "get", "head", "options"], function(t) {
  k.prototype[t] = function(n, r) {
    return this.request(j(r || {}, {
      method: t,
      url: n,
      data: (r || {}).data
    }));
  };
});
a.forEach(["post", "put", "patch"], function(t) {
  function n(r) {
    return function(o, i, c) {
      return this.request(j(c || {}, {
        method: t,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: o,
        data: i
      }));
    };
  }
  k.prototype[t] = n(), k.prototype[t + "Form"] = n(!0);
});
let zn = class it {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function(o) {
      n = o;
    });
    const r = this;
    this.promise.then((s) => {
      if (!r._listeners) return;
      let o = r._listeners.length;
      for (; o-- > 0; )
        r._listeners[o](s);
      r._listeners = null;
    }), this.promise.then = (s) => {
      let o;
      const i = new Promise((c) => {
        r.subscribe(c), o = c;
      }).then(s);
      return i.cancel = function() {
        r.unsubscribe(o);
      }, i;
    }, t(function(o, i, c) {
      r.reason || (r.reason = new I(o, i, c), n(r.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : this._listeners = [t];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(t) {
    if (!this._listeners)
      return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  toAbortSignal() {
    const t = new AbortController(), n = (r) => {
      t.abort(r);
    };
    return this.subscribe(n), t.signal.unsubscribe = () => this.unsubscribe(n), t.signal;
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let t;
    return {
      token: new it(function(s) {
        t = s;
      }),
      cancel: t
    };
  }
};
function $n(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function Jn(e) {
  return a.isObject(e) && e.isAxiosError === !0;
}
const me = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries(me).forEach(([e, t]) => {
  me[t] = e;
});
function at(e) {
  const t = new k(e), n = je(k.prototype.request, t);
  return a.extend(n, k.prototype, t, { allOwnKeys: !0 }), a.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(s) {
    return at(j(e, s));
  }, n;
}
const R = at(W);
R.Axios = k;
R.CanceledError = I;
R.CancelToken = zn;
R.isCancel = Ze;
R.VERSION = ot;
R.toFormData = ne;
R.AxiosError = m;
R.Cancel = R.CanceledError;
R.all = function(t) {
  return Promise.all(t);
};
R.spread = $n;
R.isAxiosError = Jn;
R.mergeConfig = j;
R.AxiosHeaders = x;
R.formToJSON = (e) => Qe(a.isHTMLForm(e) ? new FormData(e) : e);
R.getAdapter = st.getAdapter;
R.HttpStatusCode = me;
R.default = R;
const {
  Axios: vn,
  AxiosError: Xn,
  CanceledError: Gn,
  isCancel: Qn,
  CancelToken: Zn,
  VERSION: Yn,
  all: er,
  Cancel: tr,
  isAxiosError: nr,
  spread: rr,
  toFormData: sr,
  AxiosHeaders: or,
  HttpStatusCode: ir,
  formToJSON: ar,
  getAdapter: cr,
  mergeConfig: lr
} = R;
export {
  R as a
};
