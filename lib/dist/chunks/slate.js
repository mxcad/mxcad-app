var Or = Object.defineProperty;
var he = Object.getOwnPropertySymbols;
var Pr = Object.prototype.hasOwnProperty, xr = Object.prototype.propertyIsEnumerable;
var Qu = (u, e) => (e = Symbol[u]) ? e : Symbol.for("Symbol." + u), Nr = (u) => {
  throw TypeError(u);
};
var Ae = (u, e, r) => e in u ? Or(u, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : u[e] = r, Fe = (u, e) => {
  for (var r in e || (e = {}))
    Pr.call(e, r) && Ae(u, r, e[r]);
  if (he)
    for (var r of he(e))
      xr.call(e, r) && Ae(u, r, e[r]);
  return u;
};
var jr = function(u, e) {
  this[0] = u, this[1] = e;
};
var ku = (u) => {
  var e = u[Qu("asyncIterator")], r = !1, t, n = {};
  return e == null ? (e = u[Qu("iterator")](), t = (a) => n[a] = (s) => e[a](s)) : (e = e.call(u), t = (a) => n[a] = (s) => {
    if (r) {
      if (r = !1, a === "throw") throw s;
      return s;
    }
    return r = !0, {
      done: !1,
      value: new jr(new Promise((f) => {
        var o = e[a](s);
        o instanceof Object || Nr("Object expected"), f(o);
      }), 1)
    };
  }), n[Qu("iterator")] = () => n, t("next"), "throw" in e ? t("throw") : n.throw = (a) => {
    throw a;
  }, "return" in e && t("return"), n;
};
/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */
function Ee(u) {
  return Object.prototype.toString.call(u) === "[object Object]";
}
function H(u) {
  var e, r;
  return Ee(u) === !1 ? !1 : (e = u.constructor, e === void 0 ? !0 : (r = e.prototype, !(Ee(r) === !1 || r.hasOwnProperty("isPrototypeOf") === !1)));
}
var Su = {}, sr = Symbol.for("immer-nothing"), de = Symbol.for("immer-draftable"), Q = Symbol.for("immer-state"), Rr = Su.NODE_ENV !== "production" ? [
  // All error codes, starting by 0:
  function(u) {
    return `The plugin for '${u}' has not been loaded into Immer. To enable the plugin, import and call \`enable${u}()\` when initializing your application.`;
  },
  function(u) {
    return `produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '${u}'`;
  },
  "This object has been frozen and should not be mutated",
  function(u) {
    return "Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? " + u;
  },
  "An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.",
  "Immer forbids circular references",
  "The first or second argument to `produce` must be a function",
  "The third argument to `produce` must be a function or undefined",
  "First argument to `createDraft` must be a plain object, an array, or an immerable object",
  "First argument to `finishDraft` must be a draft returned by `createDraft`",
  function(u) {
    return `'current' expects a draft, got: ${u}`;
  },
  "Object.defineProperty() cannot be used on an Immer draft",
  "Object.setPrototypeOf() cannot be used on an Immer draft",
  "Immer only supports deleting array indices",
  "Immer only supports setting array indices and the 'length' property",
  function(u) {
    return `'original' expects a draft, got: ${u}`;
  }
  // Note: if more errors are added, the errorOffset in Patches.ts should be increased
  // See Patches.ts for additional errors
] : [];
function U(u, ...e) {
  if (Su.NODE_ENV !== "production") {
    const r = Rr[u], t = typeof r == "function" ? r.apply(null, e) : r;
    throw new Error(`[Immer] ${t}`);
  }
  throw new Error(
    `[Immer] minified error nr: ${u}. Full error at: https://bit.ly/3cXEKWf`
  );
}
var Eu = Object.getPrototypeOf;
function cu(u) {
  return !!u && !!u[Q];
}
function Cu(u) {
  var e;
  return u ? ir(u) || Array.isArray(u) || !!u[de] || !!((e = u.constructor) != null && e[de]) || $u(u) || Ju(u) : !1;
}
var Sr = Object.prototype.constructor.toString();
function ir(u) {
  if (!u || typeof u != "object")
    return !1;
  const e = Eu(u);
  if (e === null)
    return !0;
  const r = Object.hasOwnProperty.call(e, "constructor") && e.constructor;
  return r === Object ? !0 : typeof r == "function" && Function.toString.call(r) === Sr;
}
function qu(u, e) {
  Hu(u) === 0 ? Reflect.ownKeys(u).forEach((r) => {
    e(r, u[r], u);
  }) : u.forEach((r, t) => e(t, r, u));
}
function Hu(u) {
  const e = u[Q];
  return e ? e.type_ : Array.isArray(u) ? 1 : $u(u) ? 2 : Ju(u) ? 3 : 0;
}
function ee(u, e) {
  return Hu(u) === 2 ? u.has(e) : Object.prototype.hasOwnProperty.call(u, e);
}
function fr(u, e, r) {
  const t = Hu(u);
  t === 2 ? u.set(e, r) : t === 3 ? u.add(r) : u[e] = r;
}
function $r(u, e) {
  return u === e ? u !== 0 || 1 / u === 1 / e : u !== u && e !== e;
}
function $u(u) {
  return u instanceof Map;
}
function Ju(u) {
  return u instanceof Set;
}
function lu(u) {
  return u.copy_ || u.base_;
}
function re(u, e) {
  if ($u(u))
    return new Map(u);
  if (Ju(u))
    return new Set(u);
  if (Array.isArray(u))
    return Array.prototype.slice.call(u);
  const r = ir(u);
  if (e === !0 || e === "class_only" && !r) {
    const t = Object.getOwnPropertyDescriptors(u);
    delete t[Q];
    let n = Reflect.ownKeys(t);
    for (let a = 0; a < n.length; a++) {
      const s = n[a], f = t[s];
      f.writable === !1 && (f.writable = !0, f.configurable = !0), (f.get || f.set) && (t[s] = {
        configurable: !0,
        writable: !0,
        // could live with !!desc.set as well here...
        enumerable: f.enumerable,
        value: u[s]
      });
    }
    return Object.create(Eu(u), t);
  } else {
    const t = Eu(u);
    if (t !== null && r)
      return Fe({}, u);
    const n = Object.create(t);
    return Object.assign(n, u);
  }
}
function ie(u, e = !1) {
  return Zu(u) || cu(u) || !Cu(u) || (Hu(u) > 1 && Object.defineProperties(u, {
    set: { value: zu },
    add: { value: zu },
    clear: { value: zu },
    delete: { value: zu }
  }), Object.freeze(u), e && Object.values(u).forEach((r) => ie(r, !0))), u;
}
function zu() {
  U(2);
}
function Zu(u) {
  return Object.isFrozen(u);
}
var Tr = {};
function vu(u) {
  const e = Tr[u];
  return e || U(0, u), e;
}
var xu;
function or() {
  return xu;
}
function zr(u, e) {
  return {
    drafts_: [],
    parent_: u,
    immer_: e,
    // Whenever the modified draft contains a draft from another scope, we
    // need to prevent auto-freezing so the unowned draft can be finalized.
    canAutoFreeze_: !0,
    unfinalizedDrafts_: 0
  };
}
function pe(u, e) {
  e && (vu("Patches"), u.patches_ = [], u.inversePatches_ = [], u.patchListener_ = e);
}
function te(u) {
  ne(u), u.drafts_.forEach(Ir), u.drafts_ = null;
}
function ne(u) {
  u === xu && (xu = u.parent_);
}
function be(u) {
  return xu = zr(xu, u);
}
function Ir(u) {
  const e = u[Q];
  e.type_ === 0 || e.type_ === 1 ? e.revoke_() : e.revoked_ = !0;
}
function we(u, e) {
  e.unfinalizedDrafts_ = e.drafts_.length;
  const r = e.drafts_[0];
  return u !== void 0 && u !== r ? (r[Q].modified_ && (te(e), U(4)), Cu(u) && (u = Lu(e, u), e.parent_ || Vu(e, u)), e.patches_ && vu("Patches").generateReplacementPatches_(
    r[Q].base_,
    u,
    e.patches_,
    e.inversePatches_
  )) : u = Lu(e, r, []), te(e), e.patches_ && e.patchListener_(e.patches_, e.inversePatches_), u !== sr ? u : void 0;
}
function Lu(u, e, r) {
  if (Zu(e))
    return e;
  const t = e[Q];
  if (!t)
    return qu(
      e,
      (n, a) => ye(u, t, e, n, a, r)
    ), e;
  if (t.scope_ !== u)
    return e;
  if (!t.modified_)
    return Vu(u, t.base_, !0), t.base_;
  if (!t.finalized_) {
    t.finalized_ = !0, t.scope_.unfinalizedDrafts_--;
    const n = t.copy_;
    let a = n, s = !1;
    t.type_ === 3 && (a = new Set(n), n.clear(), s = !0), qu(
      a,
      (f, o) => ye(u, t, n, f, o, r, s)
    ), Vu(u, n, !1), r && u.patches_ && vu("Patches").generatePatches_(
      t,
      r,
      u.patches_,
      u.inversePatches_
    );
  }
  return t.copy_;
}
function ye(u, e, r, t, n, a, s) {
  if (Su.NODE_ENV !== "production" && n === r && U(5), cu(n)) {
    const f = a && e && e.type_ !== 3 && // Set objects are atomic since they have no keys.
    !ee(e.assigned_, t) ? a.concat(t) : void 0, o = Lu(u, n, f);
    if (fr(r, t, o), cu(o))
      u.canAutoFreeze_ = !1;
    else
      return;
  } else s && r.add(n);
  if (Cu(n) && !Zu(n)) {
    if (!u.immer_.autoFreeze_ && u.unfinalizedDrafts_ < 1)
      return;
    Lu(u, n), (!e || !e.scope_.parent_) && typeof t != "symbol" && ($u(r) ? r.has(t) : Object.prototype.propertyIsEnumerable.call(r, t)) && Vu(u, n);
  }
}
function Vu(u, e, r = !1) {
  !u.parent_ && u.immer_.autoFreeze_ && u.canAutoFreeze_ && ie(e, r);
}
function Mr(u, e) {
  const r = Array.isArray(u), t = {
    type_: r ? 1 : 0,
    // Track which produce call this is associated with.
    scope_: e ? e.scope_ : or(),
    // True for both shallow and deep changes.
    modified_: !1,
    // Used during finalization.
    finalized_: !1,
    // Track which properties have been assigned (true) or deleted (false).
    assigned_: {},
    // The parent draft state.
    parent_: e,
    // The base state.
    base_: u,
    // The base proxy.
    draft_: null,
    // set below
    // The base copy with any updated values.
    copy_: null,
    // Called by the `produce` function.
    revoke_: null,
    isManual_: !1
  };
  let n = t, a = fe;
  r && (n = [t], a = Nu);
  const { revoke: s, proxy: f } = Proxy.revocable(n, a);
  return t.draft_ = f, t.revoke_ = s, f;
}
var fe = {
  get(u, e) {
    if (e === Q)
      return u;
    const r = lu(u);
    if (!ee(r, e))
      return qr(u, r, e);
    const t = r[e];
    return u.finalized_ || !Cu(t) ? t : t === _u(u.base_, e) ? (ue(u), u.copy_[e] = se(t, u)) : t;
  },
  has(u, e) {
    return e in lu(u);
  },
  ownKeys(u) {
    return Reflect.ownKeys(lu(u));
  },
  set(u, e, r) {
    const t = Dr(lu(u), e);
    if (t != null && t.set)
      return t.set.call(u.draft_, r), !0;
    if (!u.modified_) {
      const n = _u(lu(u), e), a = n == null ? void 0 : n[Q];
      if (a && a.base_ === r)
        return u.copy_[e] = r, u.assigned_[e] = !1, !0;
      if ($r(r, n) && (r !== void 0 || ee(u.base_, e)))
        return !0;
      ue(u), ae(u);
    }
    return u.copy_[e] === r && // special case: handle new props with value 'undefined'
    (r !== void 0 || e in u.copy_) || // special case: NaN
    Number.isNaN(r) && Number.isNaN(u.copy_[e]) || (u.copy_[e] = r, u.assigned_[e] = !0), !0;
  },
  deleteProperty(u, e) {
    return _u(u.base_, e) !== void 0 || e in u.base_ ? (u.assigned_[e] = !1, ue(u), ae(u)) : delete u.assigned_[e], u.copy_ && delete u.copy_[e], !0;
  },
  // Note: We never coerce `desc.value` into an Immer draft, because we can't make
  // the same guarantee in ES5 mode.
  getOwnPropertyDescriptor(u, e) {
    const r = lu(u), t = Reflect.getOwnPropertyDescriptor(r, e);
    return t && {
      writable: !0,
      configurable: u.type_ !== 1 || e !== "length",
      enumerable: t.enumerable,
      value: r[e]
    };
  },
  defineProperty() {
    U(11);
  },
  getPrototypeOf(u) {
    return Eu(u.base_);
  },
  setPrototypeOf() {
    U(12);
  }
}, Nu = {};
qu(fe, (u, e) => {
  Nu[u] = function() {
    return arguments[0] = arguments[0][0], e.apply(this, arguments);
  };
});
Nu.deleteProperty = function(u, e) {
  return Su.NODE_ENV !== "production" && isNaN(parseInt(e)) && U(13), Nu.set.call(this, u, e, void 0);
};
Nu.set = function(u, e, r) {
  return Su.NODE_ENV !== "production" && e !== "length" && isNaN(parseInt(e)) && U(14), fe.set.call(this, u[0], e, r, u[0]);
};
function _u(u, e) {
  const r = u[Q];
  return (r ? lu(r) : u)[e];
}
function qr(u, e, r) {
  var n;
  const t = Dr(e, r);
  return t ? "value" in t ? t.value : (
    // This is a very special case, if the prop is a getter defined by the
    // prototype, we should invoke it with the draft as context!
    (n = t.get) == null ? void 0 : n.call(u.draft_)
  ) : void 0;
}
function Dr(u, e) {
  if (!(e in u))
    return;
  let r = Eu(u);
  for (; r; ) {
    const t = Object.getOwnPropertyDescriptor(r, e);
    if (t)
      return t;
    r = Eu(r);
  }
}
function ae(u) {
  u.modified_ || (u.modified_ = !0, u.parent_ && ae(u.parent_));
}
function ue(u) {
  u.copy_ || (u.copy_ = re(
    u.base_,
    u.scope_.immer_.useStrictShallowCopy_
  ));
}
var Lr = class {
  constructor(u) {
    this.autoFreeze_ = !0, this.useStrictShallowCopy_ = !1, this.produce = (e, r, t) => {
      if (typeof e == "function" && typeof r != "function") {
        const a = r;
        r = e;
        const s = this;
        return function(o = a, ...l) {
          return s.produce(o, (c) => r.call(this, c, ...l));
        };
      }
      typeof r != "function" && U(6), t !== void 0 && typeof t != "function" && U(7);
      let n;
      if (Cu(e)) {
        const a = be(this), s = se(e, void 0);
        let f = !0;
        try {
          n = r(s), f = !1;
        } finally {
          f ? te(a) : ne(a);
        }
        return pe(a, t), we(n, a);
      } else if (!e || typeof e != "object") {
        if (n = r(e), n === void 0 && (n = e), n === sr && (n = void 0), this.autoFreeze_ && ie(n, !0), t) {
          const a = [], s = [];
          vu("Patches").generateReplacementPatches_(e, n, a, s), t(a, s);
        }
        return n;
      } else
        U(1, e);
    }, this.produceWithPatches = (e, r) => {
      if (typeof e == "function")
        return (s, ...f) => this.produceWithPatches(s, (o) => e(o, ...f));
      let t, n;
      return [this.produce(e, r, (s, f) => {
        t = s, n = f;
      }), t, n];
    }, typeof (u == null ? void 0 : u.autoFreeze) == "boolean" && this.setAutoFreeze(u.autoFreeze), typeof (u == null ? void 0 : u.useStrictShallowCopy) == "boolean" && this.setUseStrictShallowCopy(u.useStrictShallowCopy);
  }
  createDraft(u) {
    Cu(u) || U(8), cu(u) && (u = Vr(u));
    const e = be(this), r = se(u, void 0);
    return r[Q].isManual_ = !0, ne(e), r;
  }
  finishDraft(u, e) {
    const r = u && u[Q];
    (!r || !r.isManual_) && U(9);
    const { scope_: t } = r;
    return pe(t, e), we(void 0, t);
  }
  /**
   * Pass true to automatically freeze all copies created by Immer.
   *
   * By default, auto-freezing is enabled.
   */
  setAutoFreeze(u) {
    this.autoFreeze_ = u;
  }
  /**
   * Pass true to enable strict shallow copy.
   *
   * By default, immer does not copy the object descriptors such as getter, setter and non-enumrable properties.
   */
  setUseStrictShallowCopy(u) {
    this.useStrictShallowCopy_ = u;
  }
  applyPatches(u, e) {
    let r;
    for (r = e.length - 1; r >= 0; r--) {
      const n = e[r];
      if (n.path.length === 0 && n.op === "replace") {
        u = n.value;
        break;
      }
    }
    r > -1 && (e = e.slice(r + 1));
    const t = vu("Patches").applyPatches_;
    return cu(u) ? t(u, e) : this.produce(
      u,
      (n) => t(n, e)
    );
  }
};
function se(u, e) {
  const r = $u(u) ? vu("MapSet").proxyMap_(u, e) : Ju(u) ? vu("MapSet").proxySet_(u, e) : Mr(u, e);
  return (e ? e.scope_ : or()).drafts_.push(r), r;
}
function Vr(u) {
  return cu(u) || U(10, u), lr(u);
}
function lr(u) {
  if (!Cu(u) || Zu(u))
    return u;
  const e = u[Q];
  let r;
  if (e) {
    if (!e.modified_)
      return e.base_;
    e.finalized_ = !0, r = re(u, e.scope_.immer_.useStrictShallowCopy_);
  } else
    r = re(u, !0);
  return qu(r, (t, n) => {
    fr(r, t, lr(n));
  }), e && (e.finalized_ = !1), r;
}
var ju = new Lr(), oe = ju.produce, Oe = /* @__PURE__ */ ju.createDraft.bind(ju), Pe = /* @__PURE__ */ ju.finishDraft.bind(ju), Wr = {
  transform(u, e) {
    var {
      current: r,
      affinity: t
    } = u;
    if (r != null) {
      var n = D.transform(r, e, {
        affinity: t
      });
      u.current = n, n == null && u.unref();
    }
  }
}, Kr = {
  transform(u, e) {
    var {
      current: r,
      affinity: t
    } = u;
    if (r != null) {
      var n = $.transform(r, e, {
        affinity: t
      });
      u.current = n, n == null && u.unref();
    }
  }
}, Hr = {
  transform(u, e) {
    var {
      current: r,
      affinity: t
    } = u;
    if (r != null) {
      var n = B.transform(r, e, {
        affinity: t
      });
      u.current = n, n == null && u.unref();
    }
  }
}, Wu = /* @__PURE__ */ new WeakMap(), Ku = /* @__PURE__ */ new WeakMap(), Pu = /* @__PURE__ */ new WeakMap(), cr = /* @__PURE__ */ new WeakMap(), xe = /* @__PURE__ */ new WeakMap(), Ne = /* @__PURE__ */ new WeakMap(), je = /* @__PURE__ */ new WeakMap(), D = {
  ancestors(u) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, {
      reverse: r = !1
    } = e, t = D.levels(u, e);
    return r ? t = t.slice(1) : t = t.slice(0, -1), t;
  },
  common(u, e) {
    for (var r = [], t = 0; t < u.length && t < e.length; t++) {
      var n = u[t], a = e[t];
      if (n !== a)
        break;
      r.push(n);
    }
    return r;
  },
  compare(u, e) {
    for (var r = Math.min(u.length, e.length), t = 0; t < r; t++) {
      if (u[t] < e[t]) return -1;
      if (u[t] > e[t]) return 1;
    }
    return 0;
  },
  endsAfter(u, e) {
    var r = u.length - 1, t = u.slice(0, r), n = e.slice(0, r), a = u[r], s = e[r];
    return D.equals(t, n) && a > s;
  },
  endsAt(u, e) {
    var r = u.length, t = u.slice(0, r), n = e.slice(0, r);
    return D.equals(t, n);
  },
  endsBefore(u, e) {
    var r = u.length - 1, t = u.slice(0, r), n = e.slice(0, r), a = u[r], s = e[r];
    return D.equals(t, n) && a < s;
  },
  equals(u, e) {
    return u.length === e.length && u.every((r, t) => r === e[t]);
  },
  hasPrevious(u) {
    return u[u.length - 1] > 0;
  },
  isAfter(u, e) {
    return D.compare(u, e) === 1;
  },
  isAncestor(u, e) {
    return u.length < e.length && D.compare(u, e) === 0;
  },
  isBefore(u, e) {
    return D.compare(u, e) === -1;
  },
  isChild(u, e) {
    return u.length === e.length + 1 && D.compare(u, e) === 0;
  },
  isCommon(u, e) {
    return u.length <= e.length && D.compare(u, e) === 0;
  },
  isDescendant(u, e) {
    return u.length > e.length && D.compare(u, e) === 0;
  },
  isParent(u, e) {
    return u.length + 1 === e.length && D.compare(u, e) === 0;
  },
  isPath(u) {
    return Array.isArray(u) && (u.length === 0 || typeof u[0] == "number");
  },
  isSibling(u, e) {
    if (u.length !== e.length)
      return !1;
    var r = u.slice(0, -1), t = e.slice(0, -1), n = u[u.length - 1], a = e[e.length - 1];
    return n !== a && D.equals(r, t);
  },
  levels(u) {
    for (var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, {
      reverse: r = !1
    } = e, t = [], n = 0; n <= u.length; n++)
      t.push(u.slice(0, n));
    return r && t.reverse(), t;
  },
  next(u) {
    if (u.length === 0)
      throw new Error("Cannot get the next path of a root path [".concat(u, "], because it has no next index."));
    var e = u[u.length - 1];
    return u.slice(0, -1).concat(e + 1);
  },
  operationCanTransformPath(u) {
    switch (u.type) {
      case "insert_node":
      case "remove_node":
      case "merge_node":
      case "split_node":
      case "move_node":
        return !0;
      default:
        return !1;
    }
  },
  parent(u) {
    if (u.length === 0)
      throw new Error("Cannot get the parent path of the root path [".concat(u, "]."));
    return u.slice(0, -1);
  },
  previous(u) {
    if (u.length === 0)
      throw new Error("Cannot get the previous path of a root path [".concat(u, "], because it has no previous index."));
    var e = u[u.length - 1];
    if (e <= 0)
      throw new Error("Cannot get the previous path of a first child path [".concat(u, "] because it would result in a negative index."));
    return u.slice(0, -1).concat(e - 1);
  },
  relative(u, e) {
    if (!D.isAncestor(e, u) && !D.equals(u, e))
      throw new Error("Cannot get the relative path of [".concat(u, "] inside ancestor [").concat(e, "], because it is not above or equal to the path."));
    return u.slice(e.length);
  },
  transform(u, e) {
    var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    if (!u) return null;
    var t = [...u], {
      affinity: n = "forward"
    } = r;
    if (u.length === 0)
      return t;
    switch (e.type) {
      case "insert_node": {
        var {
          path: a
        } = e;
        (D.equals(a, t) || D.endsBefore(a, t) || D.isAncestor(a, t)) && (t[a.length - 1] += 1);
        break;
      }
      case "remove_node": {
        var {
          path: s
        } = e;
        if (D.equals(s, t) || D.isAncestor(s, t))
          return null;
        D.endsBefore(s, t) && (t[s.length - 1] -= 1);
        break;
      }
      case "merge_node": {
        var {
          path: f,
          position: o
        } = e;
        D.equals(f, t) || D.endsBefore(f, t) ? t[f.length - 1] -= 1 : D.isAncestor(f, t) && (t[f.length - 1] -= 1, t[f.length] += o);
        break;
      }
      case "split_node": {
        var {
          path: l,
          position: c
        } = e;
        if (D.equals(l, t)) {
          if (n === "forward")
            t[t.length - 1] += 1;
          else if (n !== "backward") return null;
        } else D.endsBefore(l, t) ? t[l.length - 1] += 1 : D.isAncestor(l, t) && u[l.length] >= c && (t[l.length - 1] += 1, t[l.length] -= c);
        break;
      }
      case "move_node": {
        var {
          path: C,
          newPath: v
        } = e;
        if (D.equals(C, v))
          return t;
        if (D.isAncestor(C, t) || D.equals(C, t)) {
          var g = v.slice();
          return D.endsBefore(C, v) && C.length < v.length && (g[C.length - 1] -= 1), g.concat(t.slice(C.length));
        } else D.isSibling(C, v) && (D.isAncestor(v, t) || D.equals(v, t)) ? D.endsBefore(C, t) ? t[C.length - 1] -= 1 : t[C.length - 1] += 1 : D.endsBefore(v, t) || D.equals(v, t) || D.isAncestor(v, t) ? (D.endsBefore(C, t) && (t[C.length - 1] -= 1), t[v.length - 1] += 1) : D.endsBefore(C, t) && (D.equals(v, t) && (t[v.length - 1] += 1), t[C.length - 1] -= 1);
        break;
      }
    }
    return t;
  }
};
function Ru(u) {
  "@babel/helpers - typeof";
  return Ru = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Ru(u);
}
function Jr(u, e) {
  if (Ru(u) !== "object" || u === null) return u;
  var r = u[Symbol.toPrimitive];
  if (r !== void 0) {
    var t = r.call(u, e);
    if (Ru(t) !== "object") return t;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(u);
}
function Zr(u) {
  var e = Jr(u, "string");
  return Ru(e) === "symbol" ? e : String(e);
}
function G(u, e, r) {
  return e = Zr(e), e in u ? Object.defineProperty(u, e, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : u[e] = r, u;
}
function Re(u, e) {
  var r = Object.keys(u);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(u);
    e && (t = t.filter(function(n) {
      return Object.getOwnPropertyDescriptor(u, n).enumerable;
    })), r.push.apply(r, t);
  }
  return r;
}
function yu(u) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Re(Object(r), !0).forEach(function(t) {
      G(u, t, r[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(u, Object.getOwnPropertyDescriptors(r)) : Re(Object(r)).forEach(function(t) {
      Object.defineProperty(u, t, Object.getOwnPropertyDescriptor(r, t));
    });
  }
  return u;
}
var Gr = (u, e, r) => {
  switch (r.type) {
    case "insert_node": {
      var {
        path: t,
        node: n
      } = r, a = h.parent(u, t), s = t[t.length - 1];
      if (s > a.children.length)
        throw new Error('Cannot apply an "insert_node" operation at path ['.concat(t, "] because the destination is past the end of the node."));
      if (a.children.splice(s, 0, n), e)
        for (var [f, o] of B.points(e))
          e[o] = $.transform(f, r);
      break;
    }
    case "insert_text": {
      var {
        path: l,
        offset: c,
        text: C
      } = r;
      if (C.length === 0) break;
      var v = h.leaf(u, l), g = v.text.slice(0, c), m = v.text.slice(c);
      if (v.text = g + C + m, e)
        for (var [d, F] of B.points(e))
          e[F] = $.transform(d, r);
      break;
    }
    case "merge_node": {
      var {
        path: p
      } = r, E = h.get(u, p), O = D.previous(p), x = h.get(u, O), y = h.parent(u, p), S = p[p.length - 1];
      if (b.isText(E) && b.isText(x))
        x.text += E.text;
      else if (!b.isText(E) && !b.isText(x))
        x.children.push(...E.children);
      else
        throw new Error('Cannot apply a "merge_node" operation at path ['.concat(p, "] to nodes of different interfaces: ").concat(X.stringify(E), " ").concat(X.stringify(x)));
      if (y.children.splice(S, 1), e)
        for (var [N, I] of B.points(e))
          e[I] = $.transform(N, r);
      break;
    }
    case "move_node": {
      var {
        path: T,
        newPath: j
      } = r;
      if (D.isAncestor(T, j))
        throw new Error("Cannot move a path [".concat(T, "] to new path [").concat(j, "] because the destination is inside itself."));
      var z = h.get(u, T), M = h.parent(u, T), W = T[T.length - 1];
      M.children.splice(W, 1);
      var V = D.transform(T, r), J = h.get(u, D.parent(V)), k = V[V.length - 1];
      if (J.children.splice(k, 0, z), e)
        for (var [_, uu] of B.points(e))
          e[uu] = $.transform(_, r);
      break;
    }
    case "remove_node": {
      var {
        path: L
      } = r, Y = L[L.length - 1], ru = h.parent(u, L);
      if (ru.children.splice(Y, 1), e)
        for (var [eu, tu] of B.points(e)) {
          var iu = $.transform(eu, r);
          if (e != null && iu != null)
            e[tu] = iu;
          else {
            var R = void 0, K = void 0;
            for (var [su, fu] of h.texts(u))
              if (D.compare(fu, L) === -1)
                R = [su, fu];
              else {
                K = [su, fu];
                break;
              }
            var Bu = !1;
            R && K && (D.equals(K[1], L) ? Bu = !D.hasPrevious(K[1]) : Bu = D.common(R[1], L).length < D.common(K[1], L).length), R && !Bu ? (eu.path = R[1], eu.offset = R[0].text.length) : K ? (eu.path = K[1], eu.offset = 0) : e = null;
          }
        }
      break;
    }
    case "remove_text": {
      var {
        path: pu,
        offset: bu,
        text: wu
      } = r;
      if (wu.length === 0) break;
      var gu = h.leaf(u, pu), Z = gu.text.slice(0, bu), Gu = gu.text.slice(bu + wu.length);
      if (gu.text = Z + Gu, e)
        for (var [gr, mr] of B.points(e))
          e[mr] = $.transform(gr, r);
      break;
    }
    case "set_node": {
      var {
        path: Ce,
        properties: hr,
        newProperties: Uu
      } = r;
      if (Ce.length === 0)
        throw new Error("Cannot set properties on the root node!");
      var Yu = h.get(u, Ce);
      for (var mu in Uu) {
        if (mu === "children" || mu === "text")
          throw new Error('Cannot set the "'.concat(mu, '" property of nodes!'));
        var ve = Uu[mu];
        ve == null ? delete Yu[mu] : Yu[mu] = ve;
      }
      for (var Be in hr)
        Uu.hasOwnProperty(Be) || delete Yu[Be];
      break;
    }
    case "set_selection": {
      var {
        newProperties: ou
      } = r;
      if (ou == null)
        e = ou;
      else {
        if (e == null) {
          if (!B.isRange(ou))
            throw new Error('Cannot apply an incomplete "set_selection" operation properties '.concat(X.stringify(ou), " when there is no current selection."));
          e = yu({}, ou);
        }
        for (var hu in ou) {
          var ge = ou[hu];
          if (ge == null) {
            if (hu === "anchor" || hu === "focus")
              throw new Error('Cannot remove the "'.concat(hu, '" selection property'));
            delete e[hu];
          } else
            e[hu] = ge;
        }
      }
      break;
    }
    case "split_node": {
      var {
        path: Au,
        position: Tu,
        properties: me
      } = r;
      if (Au.length === 0)
        throw new Error('Cannot apply a "split_node" operation at path ['.concat(Au, "] because the root node cannot be split."));
      var Du = h.get(u, Au), Ar = h.parent(u, Au), Fr = Au[Au.length - 1], Xu;
      if (b.isText(Du)) {
        var Er = Du.text.slice(0, Tu), dr = Du.text.slice(Tu);
        Du.text = Er, Xu = yu(yu({}, me), {}, {
          text: dr
        });
      } else {
        var pr = Du.children.slice(0, Tu), br = Du.children.slice(Tu);
        Du.children = pr, Xu = yu(yu({}, me), {}, {
          children: br
        });
      }
      if (Ar.children.splice(Fr + 1, 0, Xu), e)
        for (var [wr, yr] of B.points(e))
          e[yr] = $.transform(wr, r);
      break;
    }
  }
  return e;
}, Ur = {
  transform(u, e) {
    u.children = Oe(u.children);
    var r = u.selection && Oe(u.selection);
    try {
      r = Gr(u, r, e);
    } finally {
      u.children = Pe(u.children), r ? u.selection = cu(r) ? Pe(r) : r : u.selection = null;
    }
  }
}, Yr = {
  insertNodes(u, e, r) {
    u.insertNodes(e, r);
  },
  liftNodes(u, e) {
    u.liftNodes(e);
  },
  mergeNodes(u, e) {
    u.mergeNodes(e);
  },
  moveNodes(u, e) {
    u.moveNodes(e);
  },
  removeNodes(u, e) {
    u.removeNodes(e);
  },
  setNodes(u, e, r) {
    u.setNodes(e, r);
  },
  splitNodes(u, e) {
    u.splitNodes(e);
  },
  unsetNodes(u, e, r) {
    u.unsetNodes(e, r);
  },
  unwrapNodes(u, e) {
    u.unwrapNodes(e);
  },
  wrapNodes(u, e, r) {
    u.wrapNodes(e, r);
  }
}, Xr = {
  collapse(u, e) {
    u.collapse(e);
  },
  deselect(u) {
    u.deselect();
  },
  move(u, e) {
    u.move(e);
  },
  select(u, e) {
    u.select(e);
  },
  setPoint(u, e, r) {
    u.setPoint(e, r);
  },
  setSelection(u, e) {
    u.setSelection(e);
  }
}, Cr = (u, e) => {
  for (var r in u) {
    var t = u[r], n = e[r];
    if (H(t) && H(n)) {
      if (!Cr(t, n)) return !1;
    } else if (Array.isArray(t) && Array.isArray(n)) {
      if (t.length !== n.length) return !1;
      for (var a = 0; a < t.length; a++)
        if (t[a] !== n[a]) return !1;
    } else if (t !== n)
      return !1;
  }
  for (var s in e)
    if (u[s] === void 0 && e[s] !== void 0)
      return !1;
  return !0;
};
function Qr(u, e) {
  if (u == null) return {};
  var r = {}, t = Object.keys(u), n, a;
  for (a = 0; a < t.length; a++)
    n = t[a], !(e.indexOf(n) >= 0) && (r[n] = u[n]);
  return r;
}
function au(u, e) {
  if (u == null) return {};
  var r = Qr(u, e), t, n;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(u);
    for (n = 0; n < a.length; n++)
      t = a[n], !(e.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(u, t) && (r[t] = u[t]);
  }
  return r;
}
var kr = ["anchor", "focus"];
function Se(u, e) {
  var r = Object.keys(u);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(u);
    e && (t = t.filter(function(n) {
      return Object.getOwnPropertyDescriptor(u, n).enumerable;
    })), r.push.apply(r, t);
  }
  return r;
}
function _r(u) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Se(Object(r), !0).forEach(function(t) {
      G(u, t, r[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(u, Object.getOwnPropertyDescriptors(r)) : Se(Object(r)).forEach(function(t) {
      Object.defineProperty(u, t, Object.getOwnPropertyDescriptor(r, t));
    });
  }
  return u;
}
var B = {
  edges(u) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, {
      reverse: r = !1
    } = e, {
      anchor: t,
      focus: n
    } = u;
    return B.isBackward(u) === r ? [t, n] : [n, t];
  },
  end(u) {
    var [, e] = B.edges(u);
    return e;
  },
  equals(u, e) {
    return $.equals(u.anchor, e.anchor) && $.equals(u.focus, e.focus);
  },
  surrounds(u, e) {
    var r = B.intersection(u, e);
    return r ? B.equals(r, e) : !1;
  },
  includes(u, e) {
    if (B.isRange(e)) {
      if (B.includes(u, e.anchor) || B.includes(u, e.focus))
        return !0;
      var [r, t] = B.edges(u), [n, a] = B.edges(e);
      return $.isBefore(r, n) && $.isAfter(t, a);
    }
    var [s, f] = B.edges(u), o = !1, l = !1;
    return $.isPoint(e) ? (o = $.compare(e, s) >= 0, l = $.compare(e, f) <= 0) : (o = D.compare(e, s.path) >= 0, l = D.compare(e, f.path) <= 0), o && l;
  },
  intersection(u, e) {
    var r = au(u, kr), [t, n] = B.edges(u), [a, s] = B.edges(e), f = $.isBefore(t, a) ? a : t, o = $.isBefore(n, s) ? n : s;
    return $.isBefore(o, f) ? null : _r({
      anchor: f,
      focus: o
    }, r);
  },
  isBackward(u) {
    var {
      anchor: e,
      focus: r
    } = u;
    return $.isAfter(e, r);
  },
  isCollapsed(u) {
    var {
      anchor: e,
      focus: r
    } = u;
    return $.equals(e, r);
  },
  isExpanded(u) {
    return !B.isCollapsed(u);
  },
  isForward(u) {
    return !B.isBackward(u);
  },
  isRange(u) {
    return H(u) && $.isPoint(u.anchor) && $.isPoint(u.focus);
  },
  *points(u) {
    yield [u.anchor, "anchor"], yield [u.focus, "focus"];
  },
  start(u) {
    var [e] = B.edges(u);
    return e;
  },
  transform(u, e) {
    var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return oe(u, (t) => {
      if (t === null)
        return null;
      var {
        affinity: n = "inward"
      } = r, a, s;
      if (n === "inward") {
        var f = B.isCollapsed(t);
        B.isForward(t) ? (a = "forward", s = f ? a : "backward") : (a = "backward", s = f ? a : "forward");
      } else n === "outward" ? B.isForward(t) ? (a = "backward", s = "forward") : (a = "forward", s = "backward") : (a = n, s = n);
      var o = $.transform(t.anchor, e, {
        affinity: a
      }), l = $.transform(t.focus, e, {
        affinity: s
      });
      if (!o || !l)
        return null;
      t.anchor = o, t.focus = l;
    });
  }
}, $e = (u) => H(u) && h.isNodeList(u.children) && !i.isEditor(u), w = {
  isAncestor(u) {
    return H(u) && h.isNodeList(u.children);
  },
  isElement: $e,
  isElementList(u) {
    return Array.isArray(u) && u.every((e) => w.isElement(e));
  },
  isElementProps(u) {
    return u.children !== void 0;
  },
  isElementType: function(e, r) {
    var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "type";
    return $e(e) && e[t] === r;
  },
  matches(u, e) {
    for (var r in e)
      if (r !== "children" && u[r] !== e[r])
        return !1;
    return !0;
  }
}, ut = ["children"], et = ["text"], Te = /* @__PURE__ */ new WeakMap(), h = {
  ancestor(u, e) {
    var r = h.get(u, e);
    if (b.isText(r))
      throw new Error("Cannot get the ancestor node at path [".concat(e, "] because it refers to a text node instead: ").concat(X.stringify(r)));
    return r;
  },
  ancestors(u, e) {
    var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return function* () {
      for (var t of D.ancestors(e, r)) {
        var n = h.ancestor(u, t), a = [n, t];
        yield a;
      }
    }();
  },
  child(u, e) {
    if (b.isText(u))
      throw new Error("Cannot get the child of a text node: ".concat(X.stringify(u)));
    var r = u.children[e];
    if (r == null)
      throw new Error("Cannot get child at index `".concat(e, "` in node: ").concat(X.stringify(u)));
    return r;
  },
  children(u, e) {
    var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return function* () {
      for (var {
        reverse: t = !1
      } = r, n = h.ancestor(u, e), {
        children: a
      } = n, s = t ? a.length - 1 : 0; t ? s >= 0 : s < a.length; ) {
        var f = h.child(n, s), o = e.concat(s);
        yield [f, o], s = t ? s - 1 : s + 1;
      }
    }();
  },
  common(u, e, r) {
    var t = D.common(e, r), n = h.get(u, t);
    return [n, t];
  },
  descendant(u, e) {
    var r = h.get(u, e);
    if (i.isEditor(r))
      throw new Error("Cannot get the descendant node at path [".concat(e, "] because it refers to the root editor node instead: ").concat(X.stringify(r)));
    return r;
  },
  descendants(u) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return function* () {
      for (var [r, t] of h.nodes(u, e))
        t.length !== 0 && (yield [r, t]);
    }();
  },
  elements(u) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return function* () {
      for (var [r, t] of h.nodes(u, e))
        w.isElement(r) && (yield [r, t]);
    }();
  },
  extractProps(u) {
    if (w.isAncestor(u)) {
      var e = au(u, ut);
      return e;
    } else {
      var e = au(u, et);
      return e;
    }
  },
  first(u, e) {
    for (var r = e.slice(), t = h.get(u, r); t && !(b.isText(t) || t.children.length === 0); )
      t = t.children[0], r.push(0);
    return [t, r];
  },
  fragment(u, e) {
    if (b.isText(u))
      throw new Error("Cannot get a fragment starting from a root text node: ".concat(X.stringify(u)));
    var r = oe({
      children: u.children
    }, (t) => {
      var [n, a] = B.edges(e), s = h.nodes(t, {
        reverse: !0,
        pass: (v) => {
          var [, g] = v;
          return !B.includes(e, g);
        }
      });
      for (var [, f] of s) {
        if (!B.includes(e, f)) {
          var o = h.parent(t, f), l = f[f.length - 1];
          o.children.splice(l, 1);
        }
        if (D.equals(f, a.path)) {
          var c = h.leaf(t, f);
          c.text = c.text.slice(0, a.offset);
        }
        if (D.equals(f, n.path)) {
          var C = h.leaf(t, f);
          C.text = C.text.slice(n.offset);
        }
      }
      i.isEditor(t) && (t.selection = null);
    });
    return r.children;
  },
  get(u, e) {
    var r = h.getIf(u, e);
    if (r === void 0)
      throw new Error("Cannot find a descendant at path [".concat(e, "] in node: ").concat(X.stringify(u)));
    return r;
  },
  getIf(u, e) {
    for (var r = u, t = 0; t < e.length; t++) {
      var n = e[t];
      if (b.isText(r) || !r.children[n])
        return;
      r = r.children[n];
    }
    return r;
  },
  has(u, e) {
    for (var r = u, t = 0; t < e.length; t++) {
      var n = e[t];
      if (b.isText(r) || !r.children[n])
        return !1;
      r = r.children[n];
    }
    return !0;
  },
  isNode(u) {
    return b.isText(u) || w.isElement(u) || i.isEditor(u);
  },
  isNodeList(u) {
    if (!Array.isArray(u))
      return !1;
    var e = Te.get(u);
    if (e !== void 0)
      return e;
    var r = u.every((t) => h.isNode(t));
    return Te.set(u, r), r;
  },
  last(u, e) {
    for (var r = e.slice(), t = h.get(u, r); t && !(b.isText(t) || t.children.length === 0); ) {
      var n = t.children.length - 1;
      t = t.children[n], r.push(n);
    }
    return [t, r];
  },
  leaf(u, e) {
    var r = h.get(u, e);
    if (!b.isText(r))
      throw new Error("Cannot get the leaf node at path [".concat(e, "] because it refers to a non-leaf node: ").concat(X.stringify(r)));
    return r;
  },
  levels(u, e) {
    var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return function* () {
      for (var t of D.levels(e, r)) {
        var n = h.get(u, t);
        yield [n, t];
      }
    }();
  },
  matches(u, e) {
    return w.isElement(u) && w.isElementProps(e) && w.matches(u, e) || b.isText(u) && b.isTextProps(e) && b.matches(u, e);
  },
  nodes(u) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return function* () {
      for (var {
        pass: r,
        reverse: t = !1
      } = e, {
        from: n = [],
        to: a
      } = e, s = /* @__PURE__ */ new Set(), f = [], o = u; !(a && (t ? D.isBefore(f, a) : D.isAfter(f, a))); ) {
        if (s.has(o) || (yield [o, f]), !s.has(o) && !b.isText(o) && o.children.length !== 0 && (r == null || r([o, f]) === !1)) {
          s.add(o);
          var l = t ? o.children.length - 1 : 0;
          D.isAncestor(f, n) && (l = n[f.length]), f = f.concat(l), o = h.get(u, f);
          continue;
        }
        if (f.length === 0)
          break;
        if (!t) {
          var c = D.next(f);
          if (h.has(u, c)) {
            f = c, o = h.get(u, f);
            continue;
          }
        }
        if (t && f[f.length - 1] !== 0) {
          var C = D.previous(f);
          f = C, o = h.get(u, f);
          continue;
        }
        f = D.parent(f), o = h.get(u, f), s.add(o);
      }
    }();
  },
  parent(u, e) {
    var r = D.parent(e), t = h.get(u, r);
    if (b.isText(t))
      throw new Error("Cannot get the parent of path [".concat(e, "] because it does not exist in the root."));
    return t;
  },
  string(u) {
    return b.isText(u) ? u.text : u.children.map(h.string).join("");
  },
  texts(u) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return function* () {
      for (var [r, t] of h.nodes(u, e))
        b.isText(r) && (yield [r, t]);
    }();
  }
};
function ze(u, e) {
  var r = Object.keys(u);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(u);
    e && (t = t.filter(function(n) {
      return Object.getOwnPropertyDescriptor(u, n).enumerable;
    })), r.push.apply(r, t);
  }
  return r;
}
function q(u) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? ze(Object(r), !0).forEach(function(t) {
      G(u, t, r[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(u, Object.getOwnPropertyDescriptors(r)) : ze(Object(r)).forEach(function(t) {
      Object.defineProperty(u, t, Object.getOwnPropertyDescriptor(r, t));
    });
  }
  return u;
}
var Ou = {
  isNodeOperation(u) {
    return Ou.isOperation(u) && u.type.endsWith("_node");
  },
  isOperation(u) {
    if (!H(u))
      return !1;
    switch (u.type) {
      case "insert_node":
        return D.isPath(u.path) && h.isNode(u.node);
      case "insert_text":
        return typeof u.offset == "number" && typeof u.text == "string" && D.isPath(u.path);
      case "merge_node":
        return typeof u.position == "number" && D.isPath(u.path) && H(u.properties);
      case "move_node":
        return D.isPath(u.path) && D.isPath(u.newPath);
      case "remove_node":
        return D.isPath(u.path) && h.isNode(u.node);
      case "remove_text":
        return typeof u.offset == "number" && typeof u.text == "string" && D.isPath(u.path);
      case "set_node":
        return D.isPath(u.path) && H(u.properties) && H(u.newProperties);
      case "set_selection":
        return u.properties === null && B.isRange(u.newProperties) || u.newProperties === null && B.isRange(u.properties) || H(u.properties) && H(u.newProperties);
      case "split_node":
        return D.isPath(u.path) && typeof u.position == "number" && H(u.properties);
      default:
        return !1;
    }
  },
  isOperationList(u) {
    return Array.isArray(u) && u.every((e) => Ou.isOperation(e));
  },
  isSelectionOperation(u) {
    return Ou.isOperation(u) && u.type.endsWith("_selection");
  },
  isTextOperation(u) {
    return Ou.isOperation(u) && u.type.endsWith("_text");
  },
  inverse(u) {
    switch (u.type) {
      case "insert_node":
        return q(q({}, u), {}, {
          type: "remove_node"
        });
      case "insert_text":
        return q(q({}, u), {}, {
          type: "remove_text"
        });
      case "merge_node":
        return q(q({}, u), {}, {
          type: "split_node",
          path: D.previous(u.path)
        });
      case "move_node": {
        var {
          newPath: e,
          path: r
        } = u;
        if (D.equals(e, r))
          return u;
        if (D.isSibling(r, e))
          return q(q({}, u), {}, {
            path: e,
            newPath: r
          });
        var t = D.transform(r, u), n = D.transform(D.next(r), u);
        return q(q({}, u), {}, {
          path: t,
          newPath: n
        });
      }
      case "remove_node":
        return q(q({}, u), {}, {
          type: "insert_node"
        });
      case "remove_text":
        return q(q({}, u), {}, {
          type: "insert_text"
        });
      case "set_node": {
        var {
          properties: a,
          newProperties: s
        } = u;
        return q(q({}, u), {}, {
          properties: s,
          newProperties: a
        });
      }
      case "set_selection": {
        var {
          properties: f,
          newProperties: o
        } = u;
        return f == null ? q(q({}, u), {}, {
          properties: o,
          newProperties: null
        }) : o == null ? q(q({}, u), {}, {
          properties: null,
          newProperties: f
        }) : q(q({}, u), {}, {
          properties: o,
          newProperties: f
        });
      }
      case "split_node":
        return q(q({}, u), {}, {
          type: "merge_node",
          path: D.next(u.path)
        });
    }
  }
}, Ie = /* @__PURE__ */ new WeakMap(), rt = (u) => {
  var e = Ie.get(u);
  if (e !== void 0)
    return e;
  if (!H(u))
    return !1;
  var r = typeof u.addMark == "function" && typeof u.apply == "function" && typeof u.deleteFragment == "function" && typeof u.insertBreak == "function" && typeof u.insertSoftBreak == "function" && typeof u.insertFragment == "function" && typeof u.insertNode == "function" && typeof u.insertText == "function" && typeof u.isElementReadOnly == "function" && typeof u.isInline == "function" && typeof u.isSelectable == "function" && typeof u.isVoid == "function" && typeof u.normalizeNode == "function" && typeof u.onChange == "function" && typeof u.removeMark == "function" && typeof u.getDirtyPaths == "function" && (u.marks === null || H(u.marks)) && (u.selection === null || B.isRange(u.selection)) && h.isNodeList(u.children) && Ou.isOperationList(u.operations);
  return Ie.set(u, r), r;
}, i = {
  above(u, e) {
    return u.above(e);
  },
  addMark(u, e, r) {
    u.addMark(e, r);
  },
  after(u, e, r) {
    return u.after(e, r);
  },
  before(u, e, r) {
    return u.before(e, r);
  },
  deleteBackward(u) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, {
      unit: r = "character"
    } = e;
    u.deleteBackward(r);
  },
  deleteForward(u) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, {
      unit: r = "character"
    } = e;
    u.deleteForward(r);
  },
  deleteFragment(u, e) {
    u.deleteFragment(e);
  },
  edges(u, e) {
    return u.edges(e);
  },
  elementReadOnly(u) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return u.elementReadOnly(e);
  },
  end(u, e) {
    return u.end(e);
  },
  first(u, e) {
    return u.first(e);
  },
  fragment(u, e) {
    return u.fragment(e);
  },
  hasBlocks(u, e) {
    return u.hasBlocks(e);
  },
  hasInlines(u, e) {
    return u.hasInlines(e);
  },
  hasPath(u, e) {
    return u.hasPath(e);
  },
  hasTexts(u, e) {
    return u.hasTexts(e);
  },
  insertBreak(u) {
    u.insertBreak();
  },
  insertFragment(u, e, r) {
    u.insertFragment(e, r);
  },
  insertNode(u, e) {
    u.insertNode(e);
  },
  insertSoftBreak(u) {
    u.insertSoftBreak();
  },
  insertText(u, e) {
    u.insertText(e);
  },
  isBlock(u, e) {
    return u.isBlock(e);
  },
  isEdge(u, e, r) {
    return u.isEdge(e, r);
  },
  isEditor(u) {
    return rt(u);
  },
  isElementReadOnly(u, e) {
    return u.isElementReadOnly(e);
  },
  isEmpty(u, e) {
    return u.isEmpty(e);
  },
  isEnd(u, e, r) {
    return u.isEnd(e, r);
  },
  isInline(u, e) {
    return u.isInline(e);
  },
  isNormalizing(u) {
    return u.isNormalizing();
  },
  isSelectable(u, e) {
    return u.isSelectable(e);
  },
  isStart(u, e, r) {
    return u.isStart(e, r);
  },
  isVoid(u, e) {
    return u.isVoid(e);
  },
  last(u, e) {
    return u.last(e);
  },
  leaf(u, e, r) {
    return u.leaf(e, r);
  },
  levels(u, e) {
    return u.levels(e);
  },
  marks(u) {
    return u.getMarks();
  },
  next(u, e) {
    return u.next(e);
  },
  node(u, e, r) {
    return u.node(e, r);
  },
  nodes(u, e) {
    return u.nodes(e);
  },
  normalize(u, e) {
    u.normalize(e);
  },
  parent(u, e, r) {
    return u.parent(e, r);
  },
  path(u, e, r) {
    return u.path(e, r);
  },
  pathRef(u, e, r) {
    return u.pathRef(e, r);
  },
  pathRefs(u) {
    return u.pathRefs();
  },
  point(u, e, r) {
    return u.point(e, r);
  },
  pointRef(u, e, r) {
    return u.pointRef(e, r);
  },
  pointRefs(u) {
    return u.pointRefs();
  },
  positions(u, e) {
    return u.positions(e);
  },
  previous(u, e) {
    return u.previous(e);
  },
  range(u, e, r) {
    return u.range(e, r);
  },
  rangeRef(u, e, r) {
    return u.rangeRef(e, r);
  },
  rangeRefs(u) {
    return u.rangeRefs();
  },
  removeMark(u, e) {
    u.removeMark(e);
  },
  setNormalizing(u, e) {
    u.setNormalizing(e);
  },
  start(u, e) {
    return u.start(e);
  },
  string(u, e, r) {
    return u.string(e, r);
  },
  unhangRange(u, e, r) {
    return u.unhangRange(e, r);
  },
  void(u, e) {
    return u.void(e);
  },
  withoutNormalizing(u, e) {
    u.withoutNormalizing(e);
  },
  shouldMergeNodesRemovePrevNode: (u, e, r) => u.shouldMergeNodesRemovePrevNode(e, r)
}, tt = {
  isSpan(u) {
    return Array.isArray(u) && u.length === 2 && u.every(D.isPath);
  }
};
function Me(u, e) {
  var r = Object.keys(u);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(u);
    e && (t = t.filter(function(n) {
      return Object.getOwnPropertyDescriptor(u, n).enumerable;
    })), r.push.apply(r, t);
  }
  return r;
}
function qe(u) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Me(Object(r), !0).forEach(function(t) {
      G(u, t, r[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(u, Object.getOwnPropertyDescriptors(r)) : Me(Object(r)).forEach(function(t) {
      Object.defineProperty(u, t, Object.getOwnPropertyDescriptor(r, t));
    });
  }
  return u;
}
var $ = {
  compare(u, e) {
    var r = D.compare(u.path, e.path);
    return r === 0 ? u.offset < e.offset ? -1 : u.offset > e.offset ? 1 : 0 : r;
  },
  isAfter(u, e) {
    return $.compare(u, e) === 1;
  },
  isBefore(u, e) {
    return $.compare(u, e) === -1;
  },
  equals(u, e) {
    return u.offset === e.offset && D.equals(u.path, e.path);
  },
  isPoint(u) {
    return H(u) && typeof u.offset == "number" && D.isPath(u.path);
  },
  transform(u, e) {
    var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return oe(u, (t) => {
      if (t === null)
        return null;
      var {
        affinity: n = "forward"
      } = r, {
        path: a,
        offset: s
      } = t;
      switch (e.type) {
        case "insert_node":
        case "move_node": {
          t.path = D.transform(a, e, r);
          break;
        }
        case "insert_text": {
          D.equals(e.path, a) && (e.offset < s || e.offset === s && n === "forward") && (t.offset += e.text.length);
          break;
        }
        case "merge_node": {
          D.equals(e.path, a) && (t.offset += e.position), t.path = D.transform(a, e, r);
          break;
        }
        case "remove_text": {
          D.equals(e.path, a) && e.offset <= s && (t.offset -= Math.min(s - e.offset, e.text.length));
          break;
        }
        case "remove_node": {
          if (D.equals(e.path, a) || D.isAncestor(e.path, a))
            return null;
          t.path = D.transform(a, e, r);
          break;
        }
        case "split_node": {
          if (D.equals(e.path, a)) {
            if (e.position === s && n == null)
              return null;
            (e.position < s || e.position === s && n === "forward") && (t.offset -= e.position, t.path = D.transform(a, e, qe(qe({}, r), {}, {
              affinity: "forward"
            })));
          } else
            t.path = D.transform(a, e, r);
          break;
        }
      }
    });
  }
}, Le = void 0, X = {
  setScrubber(u) {
    Le = u;
  },
  stringify(u) {
    return JSON.stringify(u, Le);
  }
}, nt = ["text"], at = ["anchor", "focus", "merge"];
function Ve(u, e) {
  var r = Object.keys(u);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(u);
    e && (t = t.filter(function(n) {
      return Object.getOwnPropertyDescriptor(u, n).enumerable;
    })), r.push.apply(r, t);
  }
  return r;
}
function nu(u) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Ve(Object(r), !0).forEach(function(t) {
      G(u, t, r[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(u, Object.getOwnPropertyDescriptors(r)) : Ve(Object(r)).forEach(function(t) {
      Object.defineProperty(u, t, Object.getOwnPropertyDescriptor(r, t));
    });
  }
  return u;
}
var b = {
  equals(u, e) {
    var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, {
      loose: t = !1
    } = r;
    function n(a) {
      var s = au(a, nt);
      return s;
    }
    return Cr(t ? n(u) : u, t ? n(e) : e);
  },
  isText(u) {
    return H(u) && typeof u.text == "string";
  },
  isTextList(u) {
    return Array.isArray(u) && u.every((e) => b.isText(e));
  },
  isTextProps(u) {
    return u.text !== void 0;
  },
  matches(u, e) {
    for (var r in e)
      if (r !== "text" && (!u.hasOwnProperty(r) || u[r] !== e[r]))
        return !1;
    return !0;
  },
  decorations(u, e) {
    var r = [nu({}, u)];
    for (var t of e) {
      var {
        anchor: n,
        focus: a,
        merge: s
      } = t, f = au(t, at), [o, l] = B.edges(t), c = [], C = 0, v = o.offset, g = l.offset, m = s != null ? s : Object.assign;
      for (var d of r) {
        var {
          length: F
        } = d.text, p = C;
        if (C += F, v <= p && C <= g) {
          m(d, f), c.push(d);
          continue;
        }
        if (v !== g && (v === C || g === p) || v > C || g < p || g === p && p !== 0) {
          c.push(d);
          continue;
        }
        var E = d, O = void 0, x = void 0;
        if (g < C) {
          var y = g - p;
          x = nu(nu({}, E), {}, {
            text: E.text.slice(y)
          }), E = nu(nu({}, E), {}, {
            text: E.text.slice(0, y)
          });
        }
        if (v > p) {
          var S = v - p;
          O = nu(nu({}, E), {}, {
            text: E.text.slice(0, S)
          }), E = nu(nu({}, E), {}, {
            text: E.text.slice(S)
          });
        }
        m(E, f), O && c.push(O), c.push(E), x && c.push(x);
      }
      r = c;
    }
    return r;
  }
}, De = (u) => u.selection ? u.selection : u.children.length > 0 ? i.end(u, []) : [0], du = (u, e) => {
  var [r] = i.node(u, e);
  return (t) => t === r;
}, le = function(e) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, t = !r, n = r ? lt(e) : e, a = P.None, s = P.None, f = 0, o = null, l = null;
  for (var c of n) {
    var C = c.codePointAt(0);
    if (!C) break;
    var v = pt(c, C);
    if ([a, s] = t ? [s, v] : [v, a], Fu(a, P.ZWJ) && Fu(s, P.ExtPict) && (t ? o = We(e.substring(0, f)) : o = We(e.substring(0, e.length - f)), !o) || Fu(a, P.RI) && Fu(s, P.RI) && (l !== null ? l = !l : t ? l = !0 : l = Pt(e.substring(0, e.length - f)), !l) || a !== P.None && s !== P.None && wt(a, s))
      break;
    f += c.length;
  }
  return f || 1;
}, st = /\s/, it = /[\u002B\u0021-\u0023\u0025-\u002A\u002C-\u002F\u003A\u003B\u003F\u0040\u005B-\u005D\u005F\u007B\u007D\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u0AF0\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E3B\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/, ft = /['\u2018\u2019]/, ot = function(e) {
  for (var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, t = 0, n = !1; e.length > 0; ) {
    var a = le(e, r), [s, f] = ce(e, a, r);
    if (Dt(s, f, r))
      n = !0, t += a;
    else if (!n)
      t += a;
    else
      break;
    e = f;
  }
  return t;
}, ce = (u, e, r) => {
  if (r) {
    var t = u.length - e;
    return [u.slice(t, u.length), u.slice(0, t)];
  }
  return [u.slice(0, e), u.slice(e)];
}, Dt = function u(e, r) {
  var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
  if (st.test(e))
    return !1;
  if (ft.test(e)) {
    var n = le(r, t), [a, s] = ce(r, n, t);
    if (u(a, s, t))
      return !0;
  }
  return !it.test(e);
}, lt = function* (e) {
  for (var r = e.length - 1, t = 0; t < e.length; t++) {
    var n = e.charAt(r - t);
    if (Ct(n.charCodeAt(0))) {
      var a = e.charAt(r - t - 1);
      if (ct(a.charCodeAt(0))) {
        yield a + n, t++;
        continue;
      }
    }
    yield n;
  }
}, ct = (u) => u >= 55296 && u <= 56319, Ct = (u) => u >= 56320 && u <= 57343, P;
(function(u) {
  u[u.None = 0] = "None", u[u.Extend = 1] = "Extend", u[u.ZWJ = 2] = "ZWJ", u[u.RI = 4] = "RI", u[u.Prepend = 8] = "Prepend", u[u.SpacingMark = 16] = "SpacingMark", u[u.L = 32] = "L", u[u.V = 64] = "V", u[u.T = 128] = "T", u[u.LV = 256] = "LV", u[u.LVT = 512] = "LVT", u[u.ExtPict = 1024] = "ExtPict", u[u.Any = 2048] = "Any";
})(P || (P = {}));
var vt = /^(?:[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u0898-\u089F\u08CA-\u08E1\u08E3-\u0902\u093A\u093C\u0941-\u0948\u094D\u0951-\u0957\u0962\u0963\u0981\u09BC\u09BE\u09C1-\u09C4\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01\u0A02\u0A3C\u0A41\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81\u0A82\u0ABC\u0AC1-\u0AC5\u0AC7\u0AC8\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01\u0B3C\u0B3E\u0B3F\u0B41-\u0B44\u0B4D\u0B55-\u0B57\u0B62\u0B63\u0B82\u0BBE\u0BC0\u0BCD\u0BD7\u0C00\u0C04\u0C3C\u0C3E-\u0C40\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81\u0CBC\u0CBF\u0CC2\u0CC6\u0CCC\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00\u0D01\u0D3B\u0D3C\u0D3E\u0D41-\u0D44\u0D4D\u0D57\u0D62\u0D63\u0D81\u0DCA\u0DCF\u0DD2-\u0DD4\u0DD6\u0DDF\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECE\u0F18\u0F19\u0F35\u0F37\u0F39\u0F71-\u0F7E\u0F80-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102D-\u1030\u1032-\u1037\u1039\u103A\u103D\u103E\u1058\u1059\u105E-\u1060\u1071-\u1074\u1082\u1085\u1086\u108D\u109D\u135D-\u135F\u1712-\u1714\u1732\u1733\u1752\u1753\u1772\u1773\u17B4\u17B5\u17B7-\u17BD\u17C6\u17C9-\u17D3\u17DD\u180B-\u180D\u180F\u1885\u1886\u18A9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193B\u1A17\u1A18\u1A1B\u1A56\u1A58-\u1A5E\u1A60\u1A62\u1A65-\u1A6C\u1A73-\u1A7C\u1A7F\u1AB0-\u1ACE\u1B00-\u1B03\u1B34-\u1B3A\u1B3C\u1B42\u1B6B-\u1B73\u1B80\u1B81\u1BA2-\u1BA5\u1BA8\u1BA9\u1BAB-\u1BAD\u1BE6\u1BE8\u1BE9\u1BED\u1BEF-\u1BF1\u1C2C-\u1C33\u1C36\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE0\u1CE2-\u1CE8\u1CED\u1CF4\u1CF8\u1CF9\u1DC0-\u1DFF\u200C\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA825\uA826\uA82C\uA8C4\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA951\uA980-\uA982\uA9B3\uA9B6-\uA9B9\uA9BC\uA9BD\uA9E5\uAA29-\uAA2E\uAA31\uAA32\uAA35\uAA36\uAA43\uAA4C\uAA7C\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEC\uAAED\uAAF6\uABE5\uABE8\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\uFF9E\uFF9F]|\uD800[\uDDFD\uDEE0\uDF76-\uDF7A]|\uD802[\uDE01-\uDE03\uDE05\uDE06\uDE0C-\uDE0F\uDE38-\uDE3A\uDE3F\uDEE5\uDEE6]|\uD803[\uDD24-\uDD27\uDEAB\uDEAC\uDEFD-\uDEFF\uDF46-\uDF50\uDF82-\uDF85]|\uD804[\uDC01\uDC38-\uDC46\uDC70\uDC73\uDC74\uDC7F-\uDC81\uDCB3-\uDCB6\uDCB9\uDCBA\uDCC2\uDD00-\uDD02\uDD27-\uDD2B\uDD2D-\uDD34\uDD73\uDD80\uDD81\uDDB6-\uDDBE\uDDC9-\uDDCC\uDDCF\uDE2F-\uDE31\uDE34\uDE36\uDE37\uDE3E\uDE41\uDEDF\uDEE3-\uDEEA\uDF00\uDF01\uDF3B\uDF3C\uDF3E\uDF40\uDF57\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC38-\uDC3F\uDC42-\uDC44\uDC46\uDC5E\uDCB0\uDCB3-\uDCB8\uDCBA\uDCBD\uDCBF\uDCC0\uDCC2\uDCC3\uDDAF\uDDB2-\uDDB5\uDDBC\uDDBD\uDDBF\uDDC0\uDDDC\uDDDD\uDE33-\uDE3A\uDE3D\uDE3F\uDE40\uDEAB\uDEAD\uDEB0-\uDEB5\uDEB7\uDF1D-\uDF1F\uDF22-\uDF25\uDF27-\uDF2B]|\uD806[\uDC2F-\uDC37\uDC39\uDC3A\uDD30\uDD3B\uDD3C\uDD3E\uDD43\uDDD4-\uDDD7\uDDDA\uDDDB\uDDE0\uDE01-\uDE0A\uDE33-\uDE38\uDE3B-\uDE3E\uDE47\uDE51-\uDE56\uDE59-\uDE5B\uDE8A-\uDE96\uDE98\uDE99]|\uD807[\uDC30-\uDC36\uDC38-\uDC3D\uDC3F\uDC92-\uDCA7\uDCAA-\uDCB0\uDCB2\uDCB3\uDCB5\uDCB6\uDD31-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD45\uDD47\uDD90\uDD91\uDD95\uDD97\uDEF3\uDEF4\uDF00\uDF01\uDF36-\uDF3A\uDF40\uDF42]|\uD80D[\uDC40\uDC47-\uDC55]|\uD81A[\uDEF0-\uDEF4\uDF30-\uDF36]|\uD81B[\uDF4F\uDF8F-\uDF92\uDFE4]|\uD82F[\uDC9D\uDC9E]|\uD833[\uDF00-\uDF2D\uDF30-\uDF46]|\uD834[\uDD65\uDD67-\uDD69\uDD6E-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDC8F\uDD30-\uDD36\uDEAE\uDEEC-\uDEEF]|\uD839[\uDCEC-\uDCEF]|\uD83A[\uDCD0-\uDCD6\uDD44-\uDD4A]|\uD83C[\uDFFB-\uDFFF]|\uDB40[\uDC20-\uDC7F\uDD00-\uDDEF])$/, Bt = /^(?:[\u0600-\u0605\u06DD\u070F\u0890\u0891\u08E2\u0D4E]|\uD804[\uDCBD\uDCCD\uDDC2\uDDC3]|\uD806[\uDD3F\uDD41\uDE3A\uDE84-\uDE89]|\uD807\uDD46)$/, gt = /^(?:[\u0903\u093B\u093E-\u0940\u0949-\u094C\u094E\u094F\u0982\u0983\u09BF\u09C0\u09C7\u09C8\u09CB\u09CC\u0A03\u0A3E-\u0A40\u0A83\u0ABE-\u0AC0\u0AC9\u0ACB\u0ACC\u0B02\u0B03\u0B40\u0B47\u0B48\u0B4B\u0B4C\u0BBF\u0BC1\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCC\u0C01-\u0C03\u0C41-\u0C44\u0C82\u0C83\u0CBE\u0CC0\u0CC1\u0CC3\u0CC4\u0CC7\u0CC8\u0CCA\u0CCB\u0D02\u0D03\u0D3F\u0D40\u0D46-\u0D48\u0D4A-\u0D4C\u0D82\u0D83\u0DD0\u0DD1\u0DD8-\u0DDE\u0DF2\u0DF3\u0E33\u0EB3\u0F3E\u0F3F\u0F7F\u1031\u103B\u103C\u1056\u1057\u1084\u1715\u1734\u17B6\u17BE-\u17C5\u17C7\u17C8\u1923-\u1926\u1929-\u192B\u1930\u1931\u1933-\u1938\u1A19\u1A1A\u1A55\u1A57\u1A6D-\u1A72\u1B04\u1B3B\u1B3D-\u1B41\u1B43\u1B44\u1B82\u1BA1\u1BA6\u1BA7\u1BAA\u1BE7\u1BEA-\u1BEC\u1BEE\u1BF2\u1BF3\u1C24-\u1C2B\u1C34\u1C35\u1CE1\u1CF7\uA823\uA824\uA827\uA880\uA881\uA8B4-\uA8C3\uA952\uA953\uA983\uA9B4\uA9B5\uA9BA\uA9BB\uA9BE-\uA9C0\uAA2F\uAA30\uAA33\uAA34\uAA4D\uAAEB\uAAEE\uAAEF\uAAF5\uABE3\uABE4\uABE6\uABE7\uABE9\uABEA\uABEC]|\uD804[\uDC00\uDC02\uDC82\uDCB0-\uDCB2\uDCB7\uDCB8\uDD2C\uDD45\uDD46\uDD82\uDDB3-\uDDB5\uDDBF\uDDC0\uDDCE\uDE2C-\uDE2E\uDE32\uDE33\uDE35\uDEE0-\uDEE2\uDF02\uDF03\uDF3F\uDF41-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF62\uDF63]|\uD805[\uDC35-\uDC37\uDC40\uDC41\uDC45\uDCB1\uDCB2\uDCB9\uDCBB\uDCBC\uDCBE\uDCC1\uDDB0\uDDB1\uDDB8-\uDDBB\uDDBE\uDE30-\uDE32\uDE3B\uDE3C\uDE3E\uDEAC\uDEAE\uDEAF\uDEB6\uDF26]|\uD806[\uDC2C-\uDC2E\uDC38\uDD31-\uDD35\uDD37\uDD38\uDD3D\uDD40\uDD42\uDDD1-\uDDD3\uDDDC-\uDDDF\uDDE4\uDE39\uDE57\uDE58\uDE97]|\uD807[\uDC2F\uDC3E\uDCA9\uDCB1\uDCB4\uDD8A-\uDD8E\uDD93\uDD94\uDD96\uDEF5\uDEF6]|\uD81B[\uDF51-\uDF87\uDFF0\uDFF1]|\uD834[\uDD66\uDD6D])$/, mt = /^[\u1100-\u115F\uA960-\uA97C]$/, ht = /^[\u1160-\u11A7\uD7B0-\uD7C6]$/, At = /^[\u11A8-\u11FF\uD7CB-\uD7FB]$/, Ft = /^[\uAC00\uAC1C\uAC38\uAC54\uAC70\uAC8C\uACA8\uACC4\uACE0\uACFC\uAD18\uAD34\uAD50\uAD6C\uAD88\uADA4\uADC0\uADDC\uADF8\uAE14\uAE30\uAE4C\uAE68\uAE84\uAEA0\uAEBC\uAED8\uAEF4\uAF10\uAF2C\uAF48\uAF64\uAF80\uAF9C\uAFB8\uAFD4\uAFF0\uB00C\uB028\uB044\uB060\uB07C\uB098\uB0B4\uB0D0\uB0EC\uB108\uB124\uB140\uB15C\uB178\uB194\uB1B0\uB1CC\uB1E8\uB204\uB220\uB23C\uB258\uB274\uB290\uB2AC\uB2C8\uB2E4\uB300\uB31C\uB338\uB354\uB370\uB38C\uB3A8\uB3C4\uB3E0\uB3FC\uB418\uB434\uB450\uB46C\uB488\uB4A4\uB4C0\uB4DC\uB4F8\uB514\uB530\uB54C\uB568\uB584\uB5A0\uB5BC\uB5D8\uB5F4\uB610\uB62C\uB648\uB664\uB680\uB69C\uB6B8\uB6D4\uB6F0\uB70C\uB728\uB744\uB760\uB77C\uB798\uB7B4\uB7D0\uB7EC\uB808\uB824\uB840\uB85C\uB878\uB894\uB8B0\uB8CC\uB8E8\uB904\uB920\uB93C\uB958\uB974\uB990\uB9AC\uB9C8\uB9E4\uBA00\uBA1C\uBA38\uBA54\uBA70\uBA8C\uBAA8\uBAC4\uBAE0\uBAFC\uBB18\uBB34\uBB50\uBB6C\uBB88\uBBA4\uBBC0\uBBDC\uBBF8\uBC14\uBC30\uBC4C\uBC68\uBC84\uBCA0\uBCBC\uBCD8\uBCF4\uBD10\uBD2C\uBD48\uBD64\uBD80\uBD9C\uBDB8\uBDD4\uBDF0\uBE0C\uBE28\uBE44\uBE60\uBE7C\uBE98\uBEB4\uBED0\uBEEC\uBF08\uBF24\uBF40\uBF5C\uBF78\uBF94\uBFB0\uBFCC\uBFE8\uC004\uC020\uC03C\uC058\uC074\uC090\uC0AC\uC0C8\uC0E4\uC100\uC11C\uC138\uC154\uC170\uC18C\uC1A8\uC1C4\uC1E0\uC1FC\uC218\uC234\uC250\uC26C\uC288\uC2A4\uC2C0\uC2DC\uC2F8\uC314\uC330\uC34C\uC368\uC384\uC3A0\uC3BC\uC3D8\uC3F4\uC410\uC42C\uC448\uC464\uC480\uC49C\uC4B8\uC4D4\uC4F0\uC50C\uC528\uC544\uC560\uC57C\uC598\uC5B4\uC5D0\uC5EC\uC608\uC624\uC640\uC65C\uC678\uC694\uC6B0\uC6CC\uC6E8\uC704\uC720\uC73C\uC758\uC774\uC790\uC7AC\uC7C8\uC7E4\uC800\uC81C\uC838\uC854\uC870\uC88C\uC8A8\uC8C4\uC8E0\uC8FC\uC918\uC934\uC950\uC96C\uC988\uC9A4\uC9C0\uC9DC\uC9F8\uCA14\uCA30\uCA4C\uCA68\uCA84\uCAA0\uCABC\uCAD8\uCAF4\uCB10\uCB2C\uCB48\uCB64\uCB80\uCB9C\uCBB8\uCBD4\uCBF0\uCC0C\uCC28\uCC44\uCC60\uCC7C\uCC98\uCCB4\uCCD0\uCCEC\uCD08\uCD24\uCD40\uCD5C\uCD78\uCD94\uCDB0\uCDCC\uCDE8\uCE04\uCE20\uCE3C\uCE58\uCE74\uCE90\uCEAC\uCEC8\uCEE4\uCF00\uCF1C\uCF38\uCF54\uCF70\uCF8C\uCFA8\uCFC4\uCFE0\uCFFC\uD018\uD034\uD050\uD06C\uD088\uD0A4\uD0C0\uD0DC\uD0F8\uD114\uD130\uD14C\uD168\uD184\uD1A0\uD1BC\uD1D8\uD1F4\uD210\uD22C\uD248\uD264\uD280\uD29C\uD2B8\uD2D4\uD2F0\uD30C\uD328\uD344\uD360\uD37C\uD398\uD3B4\uD3D0\uD3EC\uD408\uD424\uD440\uD45C\uD478\uD494\uD4B0\uD4CC\uD4E8\uD504\uD520\uD53C\uD558\uD574\uD590\uD5AC\uD5C8\uD5E4\uD600\uD61C\uD638\uD654\uD670\uD68C\uD6A8\uD6C4\uD6E0\uD6FC\uD718\uD734\uD750\uD76C\uD788]$/, Et = /^[\uAC01-\uAC1B\uAC1D-\uAC37\uAC39-\uAC53\uAC55-\uAC6F\uAC71-\uAC8B\uAC8D-\uACA7\uACA9-\uACC3\uACC5-\uACDF\uACE1-\uACFB\uACFD-\uAD17\uAD19-\uAD33\uAD35-\uAD4F\uAD51-\uAD6B\uAD6D-\uAD87\uAD89-\uADA3\uADA5-\uADBF\uADC1-\uADDB\uADDD-\uADF7\uADF9-\uAE13\uAE15-\uAE2F\uAE31-\uAE4B\uAE4D-\uAE67\uAE69-\uAE83\uAE85-\uAE9F\uAEA1-\uAEBB\uAEBD-\uAED7\uAED9-\uAEF3\uAEF5-\uAF0F\uAF11-\uAF2B\uAF2D-\uAF47\uAF49-\uAF63\uAF65-\uAF7F\uAF81-\uAF9B\uAF9D-\uAFB7\uAFB9-\uAFD3\uAFD5-\uAFEF\uAFF1-\uB00B\uB00D-\uB027\uB029-\uB043\uB045-\uB05F\uB061-\uB07B\uB07D-\uB097\uB099-\uB0B3\uB0B5-\uB0CF\uB0D1-\uB0EB\uB0ED-\uB107\uB109-\uB123\uB125-\uB13F\uB141-\uB15B\uB15D-\uB177\uB179-\uB193\uB195-\uB1AF\uB1B1-\uB1CB\uB1CD-\uB1E7\uB1E9-\uB203\uB205-\uB21F\uB221-\uB23B\uB23D-\uB257\uB259-\uB273\uB275-\uB28F\uB291-\uB2AB\uB2AD-\uB2C7\uB2C9-\uB2E3\uB2E5-\uB2FF\uB301-\uB31B\uB31D-\uB337\uB339-\uB353\uB355-\uB36F\uB371-\uB38B\uB38D-\uB3A7\uB3A9-\uB3C3\uB3C5-\uB3DF\uB3E1-\uB3FB\uB3FD-\uB417\uB419-\uB433\uB435-\uB44F\uB451-\uB46B\uB46D-\uB487\uB489-\uB4A3\uB4A5-\uB4BF\uB4C1-\uB4DB\uB4DD-\uB4F7\uB4F9-\uB513\uB515-\uB52F\uB531-\uB54B\uB54D-\uB567\uB569-\uB583\uB585-\uB59F\uB5A1-\uB5BB\uB5BD-\uB5D7\uB5D9-\uB5F3\uB5F5-\uB60F\uB611-\uB62B\uB62D-\uB647\uB649-\uB663\uB665-\uB67F\uB681-\uB69B\uB69D-\uB6B7\uB6B9-\uB6D3\uB6D5-\uB6EF\uB6F1-\uB70B\uB70D-\uB727\uB729-\uB743\uB745-\uB75F\uB761-\uB77B\uB77D-\uB797\uB799-\uB7B3\uB7B5-\uB7CF\uB7D1-\uB7EB\uB7ED-\uB807\uB809-\uB823\uB825-\uB83F\uB841-\uB85B\uB85D-\uB877\uB879-\uB893\uB895-\uB8AF\uB8B1-\uB8CB\uB8CD-\uB8E7\uB8E9-\uB903\uB905-\uB91F\uB921-\uB93B\uB93D-\uB957\uB959-\uB973\uB975-\uB98F\uB991-\uB9AB\uB9AD-\uB9C7\uB9C9-\uB9E3\uB9E5-\uB9FF\uBA01-\uBA1B\uBA1D-\uBA37\uBA39-\uBA53\uBA55-\uBA6F\uBA71-\uBA8B\uBA8D-\uBAA7\uBAA9-\uBAC3\uBAC5-\uBADF\uBAE1-\uBAFB\uBAFD-\uBB17\uBB19-\uBB33\uBB35-\uBB4F\uBB51-\uBB6B\uBB6D-\uBB87\uBB89-\uBBA3\uBBA5-\uBBBF\uBBC1-\uBBDB\uBBDD-\uBBF7\uBBF9-\uBC13\uBC15-\uBC2F\uBC31-\uBC4B\uBC4D-\uBC67\uBC69-\uBC83\uBC85-\uBC9F\uBCA1-\uBCBB\uBCBD-\uBCD7\uBCD9-\uBCF3\uBCF5-\uBD0F\uBD11-\uBD2B\uBD2D-\uBD47\uBD49-\uBD63\uBD65-\uBD7F\uBD81-\uBD9B\uBD9D-\uBDB7\uBDB9-\uBDD3\uBDD5-\uBDEF\uBDF1-\uBE0B\uBE0D-\uBE27\uBE29-\uBE43\uBE45-\uBE5F\uBE61-\uBE7B\uBE7D-\uBE97\uBE99-\uBEB3\uBEB5-\uBECF\uBED1-\uBEEB\uBEED-\uBF07\uBF09-\uBF23\uBF25-\uBF3F\uBF41-\uBF5B\uBF5D-\uBF77\uBF79-\uBF93\uBF95-\uBFAF\uBFB1-\uBFCB\uBFCD-\uBFE7\uBFE9-\uC003\uC005-\uC01F\uC021-\uC03B\uC03D-\uC057\uC059-\uC073\uC075-\uC08F\uC091-\uC0AB\uC0AD-\uC0C7\uC0C9-\uC0E3\uC0E5-\uC0FF\uC101-\uC11B\uC11D-\uC137\uC139-\uC153\uC155-\uC16F\uC171-\uC18B\uC18D-\uC1A7\uC1A9-\uC1C3\uC1C5-\uC1DF\uC1E1-\uC1FB\uC1FD-\uC217\uC219-\uC233\uC235-\uC24F\uC251-\uC26B\uC26D-\uC287\uC289-\uC2A3\uC2A5-\uC2BF\uC2C1-\uC2DB\uC2DD-\uC2F7\uC2F9-\uC313\uC315-\uC32F\uC331-\uC34B\uC34D-\uC367\uC369-\uC383\uC385-\uC39F\uC3A1-\uC3BB\uC3BD-\uC3D7\uC3D9-\uC3F3\uC3F5-\uC40F\uC411-\uC42B\uC42D-\uC447\uC449-\uC463\uC465-\uC47F\uC481-\uC49B\uC49D-\uC4B7\uC4B9-\uC4D3\uC4D5-\uC4EF\uC4F1-\uC50B\uC50D-\uC527\uC529-\uC543\uC545-\uC55F\uC561-\uC57B\uC57D-\uC597\uC599-\uC5B3\uC5B5-\uC5CF\uC5D1-\uC5EB\uC5ED-\uC607\uC609-\uC623\uC625-\uC63F\uC641-\uC65B\uC65D-\uC677\uC679-\uC693\uC695-\uC6AF\uC6B1-\uC6CB\uC6CD-\uC6E7\uC6E9-\uC703\uC705-\uC71F\uC721-\uC73B\uC73D-\uC757\uC759-\uC773\uC775-\uC78F\uC791-\uC7AB\uC7AD-\uC7C7\uC7C9-\uC7E3\uC7E5-\uC7FF\uC801-\uC81B\uC81D-\uC837\uC839-\uC853\uC855-\uC86F\uC871-\uC88B\uC88D-\uC8A7\uC8A9-\uC8C3\uC8C5-\uC8DF\uC8E1-\uC8FB\uC8FD-\uC917\uC919-\uC933\uC935-\uC94F\uC951-\uC96B\uC96D-\uC987\uC989-\uC9A3\uC9A5-\uC9BF\uC9C1-\uC9DB\uC9DD-\uC9F7\uC9F9-\uCA13\uCA15-\uCA2F\uCA31-\uCA4B\uCA4D-\uCA67\uCA69-\uCA83\uCA85-\uCA9F\uCAA1-\uCABB\uCABD-\uCAD7\uCAD9-\uCAF3\uCAF5-\uCB0F\uCB11-\uCB2B\uCB2D-\uCB47\uCB49-\uCB63\uCB65-\uCB7F\uCB81-\uCB9B\uCB9D-\uCBB7\uCBB9-\uCBD3\uCBD5-\uCBEF\uCBF1-\uCC0B\uCC0D-\uCC27\uCC29-\uCC43\uCC45-\uCC5F\uCC61-\uCC7B\uCC7D-\uCC97\uCC99-\uCCB3\uCCB5-\uCCCF\uCCD1-\uCCEB\uCCED-\uCD07\uCD09-\uCD23\uCD25-\uCD3F\uCD41-\uCD5B\uCD5D-\uCD77\uCD79-\uCD93\uCD95-\uCDAF\uCDB1-\uCDCB\uCDCD-\uCDE7\uCDE9-\uCE03\uCE05-\uCE1F\uCE21-\uCE3B\uCE3D-\uCE57\uCE59-\uCE73\uCE75-\uCE8F\uCE91-\uCEAB\uCEAD-\uCEC7\uCEC9-\uCEE3\uCEE5-\uCEFF\uCF01-\uCF1B\uCF1D-\uCF37\uCF39-\uCF53\uCF55-\uCF6F\uCF71-\uCF8B\uCF8D-\uCFA7\uCFA9-\uCFC3\uCFC5-\uCFDF\uCFE1-\uCFFB\uCFFD-\uD017\uD019-\uD033\uD035-\uD04F\uD051-\uD06B\uD06D-\uD087\uD089-\uD0A3\uD0A5-\uD0BF\uD0C1-\uD0DB\uD0DD-\uD0F7\uD0F9-\uD113\uD115-\uD12F\uD131-\uD14B\uD14D-\uD167\uD169-\uD183\uD185-\uD19F\uD1A1-\uD1BB\uD1BD-\uD1D7\uD1D9-\uD1F3\uD1F5-\uD20F\uD211-\uD22B\uD22D-\uD247\uD249-\uD263\uD265-\uD27F\uD281-\uD29B\uD29D-\uD2B7\uD2B9-\uD2D3\uD2D5-\uD2EF\uD2F1-\uD30B\uD30D-\uD327\uD329-\uD343\uD345-\uD35F\uD361-\uD37B\uD37D-\uD397\uD399-\uD3B3\uD3B5-\uD3CF\uD3D1-\uD3EB\uD3ED-\uD407\uD409-\uD423\uD425-\uD43F\uD441-\uD45B\uD45D-\uD477\uD479-\uD493\uD495-\uD4AF\uD4B1-\uD4CB\uD4CD-\uD4E7\uD4E9-\uD503\uD505-\uD51F\uD521-\uD53B\uD53D-\uD557\uD559-\uD573\uD575-\uD58F\uD591-\uD5AB\uD5AD-\uD5C7\uD5C9-\uD5E3\uD5E5-\uD5FF\uD601-\uD61B\uD61D-\uD637\uD639-\uD653\uD655-\uD66F\uD671-\uD68B\uD68D-\uD6A7\uD6A9-\uD6C3\uD6C5-\uD6DF\uD6E1-\uD6FB\uD6FD-\uD717\uD719-\uD733\uD735-\uD74F\uD751-\uD76B\uD76D-\uD787\uD789-\uD7A3]$/, dt = /^(?:[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u2388\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2605\u2607-\u2612\u2614-\u2685\u2690-\u2705\u2708-\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763-\u2767\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC00-\uDCFF\uDD0D-\uDD0F\uDD2F\uDD6C-\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDAD-\uDDE5\uDE01-\uDE0F\uDE1A\uDE2F\uDE32-\uDE3A\uDE3C-\uDE3F\uDE49-\uDFFA]|\uD83D[\uDC00-\uDD3D\uDD46-\uDE4F\uDE80-\uDEFF\uDF74-\uDF7F\uDFD5-\uDFFF]|\uD83E[\uDC0C-\uDC0F\uDC48-\uDC4F\uDC5A-\uDC5F\uDC88-\uDC8F\uDCAE-\uDCFF\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDEFF]|\uD83F[\uDC00-\uDFFD])$/, pt = (u, e) => {
  var r = P.Any;
  return u.search(vt) !== -1 && (r |= P.Extend), e === 8205 && (r |= P.ZWJ), e >= 127462 && e <= 127487 && (r |= P.RI), u.search(Bt) !== -1 && (r |= P.Prepend), u.search(gt) !== -1 && (r |= P.SpacingMark), u.search(mt) !== -1 && (r |= P.L), u.search(ht) !== -1 && (r |= P.V), u.search(At) !== -1 && (r |= P.T), u.search(Ft) !== -1 && (r |= P.LV), u.search(Et) !== -1 && (r |= P.LVT), u.search(dt) !== -1 && (r |= P.ExtPict), r;
};
function Fu(u, e) {
  return (u & e) !== 0;
}
var bt = [
  // GB6
  [P.L, P.L | P.V | P.LV | P.LVT],
  // GB7
  [P.LV | P.V, P.V | P.T],
  // GB8
  [P.LVT | P.T, P.T],
  // GB9
  [P.Any, P.Extend | P.ZWJ],
  // GB9a
  [P.Any, P.SpacingMark],
  // GB9b
  [P.Prepend, P.Any],
  // GB11
  [P.ZWJ, P.ExtPict],
  // GB12 and GB13
  [P.RI, P.RI]
];
function wt(u, e) {
  return bt.findIndex((r) => Fu(u, r[0]) && Fu(e, r[1])) === -1;
}
var yt = /(?:[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u2388\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2605\u2607-\u2612\u2614-\u2685\u2690-\u2705\u2708-\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763-\u2767\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC00-\uDCFF\uDD0D-\uDD0F\uDD2F\uDD6C-\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDAD-\uDDE5\uDE01-\uDE0F\uDE1A\uDE2F\uDE32-\uDE3A\uDE3C-\uDE3F\uDE49-\uDFFA]|\uD83D[\uDC00-\uDD3D\uDD46-\uDE4F\uDE80-\uDEFF\uDF74-\uDF7F\uDFD5-\uDFFF]|\uD83E[\uDC0C-\uDC0F\uDC48-\uDC4F\uDC5A-\uDC5F\uDC88-\uDC8F\uDCAE-\uDCFF\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDEFF]|\uD83F[\uDC00-\uDFFD])(?:[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u0898-\u089F\u08CA-\u08E1\u08E3-\u0902\u093A\u093C\u0941-\u0948\u094D\u0951-\u0957\u0962\u0963\u0981\u09BC\u09BE\u09C1-\u09C4\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01\u0A02\u0A3C\u0A41\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81\u0A82\u0ABC\u0AC1-\u0AC5\u0AC7\u0AC8\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01\u0B3C\u0B3E\u0B3F\u0B41-\u0B44\u0B4D\u0B55-\u0B57\u0B62\u0B63\u0B82\u0BBE\u0BC0\u0BCD\u0BD7\u0C00\u0C04\u0C3C\u0C3E-\u0C40\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81\u0CBC\u0CBF\u0CC2\u0CC6\u0CCC\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00\u0D01\u0D3B\u0D3C\u0D3E\u0D41-\u0D44\u0D4D\u0D57\u0D62\u0D63\u0D81\u0DCA\u0DCF\u0DD2-\u0DD4\u0DD6\u0DDF\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECE\u0F18\u0F19\u0F35\u0F37\u0F39\u0F71-\u0F7E\u0F80-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102D-\u1030\u1032-\u1037\u1039\u103A\u103D\u103E\u1058\u1059\u105E-\u1060\u1071-\u1074\u1082\u1085\u1086\u108D\u109D\u135D-\u135F\u1712-\u1714\u1732\u1733\u1752\u1753\u1772\u1773\u17B4\u17B5\u17B7-\u17BD\u17C6\u17C9-\u17D3\u17DD\u180B-\u180D\u180F\u1885\u1886\u18A9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193B\u1A17\u1A18\u1A1B\u1A56\u1A58-\u1A5E\u1A60\u1A62\u1A65-\u1A6C\u1A73-\u1A7C\u1A7F\u1AB0-\u1ACE\u1B00-\u1B03\u1B34-\u1B3A\u1B3C\u1B42\u1B6B-\u1B73\u1B80\u1B81\u1BA2-\u1BA5\u1BA8\u1BA9\u1BAB-\u1BAD\u1BE6\u1BE8\u1BE9\u1BED\u1BEF-\u1BF1\u1C2C-\u1C33\u1C36\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE0\u1CE2-\u1CE8\u1CED\u1CF4\u1CF8\u1CF9\u1DC0-\u1DFF\u200C\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA825\uA826\uA82C\uA8C4\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA951\uA980-\uA982\uA9B3\uA9B6-\uA9B9\uA9BC\uA9BD\uA9E5\uAA29-\uAA2E\uAA31\uAA32\uAA35\uAA36\uAA43\uAA4C\uAA7C\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEC\uAAED\uAAF6\uABE5\uABE8\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\uFF9E\uFF9F]|\uD800[\uDDFD\uDEE0\uDF76-\uDF7A]|\uD802[\uDE01-\uDE03\uDE05\uDE06\uDE0C-\uDE0F\uDE38-\uDE3A\uDE3F\uDEE5\uDEE6]|\uD803[\uDD24-\uDD27\uDEAB\uDEAC\uDEFD-\uDEFF\uDF46-\uDF50\uDF82-\uDF85]|\uD804[\uDC01\uDC38-\uDC46\uDC70\uDC73\uDC74\uDC7F-\uDC81\uDCB3-\uDCB6\uDCB9\uDCBA\uDCC2\uDD00-\uDD02\uDD27-\uDD2B\uDD2D-\uDD34\uDD73\uDD80\uDD81\uDDB6-\uDDBE\uDDC9-\uDDCC\uDDCF\uDE2F-\uDE31\uDE34\uDE36\uDE37\uDE3E\uDE41\uDEDF\uDEE3-\uDEEA\uDF00\uDF01\uDF3B\uDF3C\uDF3E\uDF40\uDF57\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC38-\uDC3F\uDC42-\uDC44\uDC46\uDC5E\uDCB0\uDCB3-\uDCB8\uDCBA\uDCBD\uDCBF\uDCC0\uDCC2\uDCC3\uDDAF\uDDB2-\uDDB5\uDDBC\uDDBD\uDDBF\uDDC0\uDDDC\uDDDD\uDE33-\uDE3A\uDE3D\uDE3F\uDE40\uDEAB\uDEAD\uDEB0-\uDEB5\uDEB7\uDF1D-\uDF1F\uDF22-\uDF25\uDF27-\uDF2B]|\uD806[\uDC2F-\uDC37\uDC39\uDC3A\uDD30\uDD3B\uDD3C\uDD3E\uDD43\uDDD4-\uDDD7\uDDDA\uDDDB\uDDE0\uDE01-\uDE0A\uDE33-\uDE38\uDE3B-\uDE3E\uDE47\uDE51-\uDE56\uDE59-\uDE5B\uDE8A-\uDE96\uDE98\uDE99]|\uD807[\uDC30-\uDC36\uDC38-\uDC3D\uDC3F\uDC92-\uDCA7\uDCAA-\uDCB0\uDCB2\uDCB3\uDCB5\uDCB6\uDD31-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD45\uDD47\uDD90\uDD91\uDD95\uDD97\uDEF3\uDEF4\uDF00\uDF01\uDF36-\uDF3A\uDF40\uDF42]|\uD80D[\uDC40\uDC47-\uDC55]|\uD81A[\uDEF0-\uDEF4\uDF30-\uDF36]|\uD81B[\uDF4F\uDF8F-\uDF92\uDFE4]|\uD82F[\uDC9D\uDC9E]|\uD833[\uDF00-\uDF2D\uDF30-\uDF46]|\uD834[\uDD65\uDD67-\uDD69\uDD6E-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDC8F\uDD30-\uDD36\uDEAE\uDEEC-\uDEEF]|\uD839[\uDCEC-\uDCEF]|\uD83A[\uDCD0-\uDCD6\uDD44-\uDD4A]|\uD83C[\uDFFB-\uDFFF]|\uDB40[\uDC20-\uDC7F\uDD00-\uDDEF])*\u200D$/, We = (u) => u.search(yt) !== -1, Ot = /(?:\uD83C[\uDDE6-\uDDFF])+$/g, Pt = (u) => {
  var e = u.match(Ot);
  if (e === null)
    return !1;
  var r = e[0].length / 2;
  return r % 2 === 1;
}, xt = {
  delete(u, e) {
    u.delete(e);
  },
  insertFragment(u, e, r) {
    u.insertFragment(e, r);
  },
  insertText(u, e) {
    var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    i.withoutNormalizing(u, () => {
      var {
        voids: t = !1
      } = r, {
        at: n = De(u)
      } = r;
      if (D.isPath(n) && (n = i.range(u, n)), B.isRange(n))
        if (B.isCollapsed(n))
          n = n.anchor;
        else {
          var a = B.end(n);
          if (!t && i.void(u, {
            at: a
          }))
            return;
          var s = B.start(n), f = i.pointRef(u, s), o = i.pointRef(u, a);
          A.delete(u, {
            at: n,
            voids: t
          });
          var l = f.unref(), c = o.unref();
          n = l || c, A.setSelection(u, {
            anchor: n,
            focus: n
          });
        }
      if (!(!t && i.void(u, {
        at: n
      }) || i.elementReadOnly(u, {
        at: n
      }))) {
        var {
          path: C,
          offset: v
        } = n;
        e.length > 0 && u.apply({
          type: "insert_text",
          path: C,
          offset: v,
          text: e
        });
      }
    });
  }
};
function Ke(u, e) {
  var r = Object.keys(u);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(u);
    e && (t = t.filter(function(n) {
      return Object.getOwnPropertyDescriptor(u, n).enumerable;
    })), r.push.apply(r, t);
  }
  return r;
}
function Iu(u) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Ke(Object(r), !0).forEach(function(t) {
      G(u, t, r[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(u, Object.getOwnPropertyDescriptors(r)) : Ke(Object(r)).forEach(function(t) {
      Object.defineProperty(u, t, Object.getOwnPropertyDescriptor(r, t));
    });
  }
  return u;
}
var A = Iu(Iu(Iu(Iu({}, Ur), Yr), Xr), xt), Mu = /* @__PURE__ */ new WeakMap(), Nt = (u) => Mu.get(u) || !1, jt = (u, e, r) => {
  var t = Mu.get(u) || !1;
  Mu.set(u, !0);
  try {
    e(), r();
  } finally {
    Mu.set(u, t);
  }
};
function vr(u, e, r) {
  var t = Wu.get(u) || [], n = Ku.get(u) || /* @__PURE__ */ new Set(), a, s, f = (C) => {
    if (C) {
      var v = C.join(",");
      s.has(v) || (s.add(v), a.push(C));
    }
  };
  if (r) {
    a = [], s = /* @__PURE__ */ new Set();
    for (var o of t) {
      var l = r(o);
      f(l);
    }
  } else
    a = t, s = n;
  for (var c of e)
    f(c);
  Wu.set(u, a), Ku.set(u, s);
}
var Rt = (u, e) => {
  for (var r of i.pathRefs(u))
    Wr.transform(r, e);
  for (var t of i.pointRefs(u))
    Kr.transform(t, e);
  for (var n of i.rangeRefs(u))
    Hr.transform(n, e);
  if (!Nt(u)) {
    var a = D.operationCanTransformPath(e) ? (s) => D.transform(s, e) : void 0;
    vr(u, u.getDirtyPaths(e), a);
  }
  A.transform(u, e), u.operations.push(e), i.normalize(u, {
    operation: e
  }), e.type === "set_selection" && (u.marks = null), Pu.get(u) || (Pu.set(u, !0), Promise.resolve().then(() => {
    Pu.set(u, !1), u.onChange({
      operation: e
    }), u.operations = [];
  }));
}, St = (u, e) => {
  switch (e.type) {
    case "insert_text":
    case "remove_text":
    case "set_node": {
      var {
        path: r
      } = e;
      return D.levels(r);
    }
    case "insert_node": {
      var {
        node: t,
        path: n
      } = e, a = D.levels(n), s = b.isText(t) ? [] : Array.from(h.nodes(t), (j) => {
        var [, z] = j;
        return n.concat(z);
      });
      return [...a, ...s];
    }
    case "merge_node": {
      var {
        path: f
      } = e, o = D.ancestors(f), l = D.previous(f);
      return [...o, l];
    }
    case "move_node": {
      var {
        path: c,
        newPath: C
      } = e;
      if (D.equals(c, C))
        return [];
      var v = [], g = [];
      for (var m of D.ancestors(c)) {
        var d = D.transform(m, e);
        v.push(d);
      }
      for (var F of D.ancestors(C)) {
        var p = D.transform(F, e);
        g.push(p);
      }
      var E = g[g.length - 1], O = C[C.length - 1], x = E.concat(O);
      return [...v, ...g, x];
    }
    case "remove_node": {
      var {
        path: y
      } = e, S = D.ancestors(y);
      return [...S];
    }
    case "split_node": {
      var {
        path: N
      } = e, I = D.levels(N), T = D.next(N);
      return [...I, T];
    }
    default:
      return [];
  }
}, $t = (u) => {
  var {
    selection: e
  } = u;
  return e ? h.fragment(u, e) : [];
}, Tt = (u, e) => {
  var [r, t] = e;
  if (!b.isText(r)) {
    if (w.isElement(r) && r.children.length === 0) {
      var n = {
        text: ""
      };
      A.insertNodes(u, n, {
        at: t.concat(0),
        voids: !0
      });
      return;
    }
    for (var a = i.isEditor(r) ? !1 : w.isElement(r) && (u.isInline(r) || r.children.length === 0 || b.isText(r.children[0]) || u.isInline(r.children[0])), s = 0, f = 0; f < r.children.length; f++, s++) {
      var o = h.get(u, t);
      if (!b.isText(o)) {
        var l = o.children[s], c = o.children[s - 1], C = f === r.children.length - 1, v = b.isText(l) || w.isElement(l) && u.isInline(l);
        if (v !== a)
          v ? A.removeNodes(u, {
            at: t.concat(s),
            voids: !0
          }) : A.unwrapNodes(u, {
            at: t.concat(s),
            voids: !0
          }), s--;
        else if (w.isElement(l)) {
          if (u.isInline(l)) {
            if (c == null || !b.isText(c)) {
              var g = {
                text: ""
              };
              A.insertNodes(u, g, {
                at: t.concat(s),
                voids: !0
              }), s++;
            } else if (C) {
              var m = {
                text: ""
              };
              A.insertNodes(u, m, {
                at: t.concat(s + 1),
                voids: !0
              }), s++;
            }
          }
        } else {
          if (!b.isText(l) && !("children" in l)) {
            var d = l;
            d.children = [];
          }
          c != null && b.isText(c) && (b.equals(l, c, {
            loose: !0
          }) ? (A.mergeNodes(u, {
            at: t.concat(s),
            voids: !0
          }), s--) : c.text === "" ? (A.removeNodes(u, {
            at: t.concat(s - 1),
            voids: !0
          }), s--) : l.text === "" && (A.removeNodes(u, {
            at: t.concat(s),
            voids: !0
          }), s--));
        }
      }
    }
  }
}, zt = (u, e) => {
  var {
    iteration: r,
    initialDirtyPathsLength: t
  } = e, n = t * 42;
  if (r > n)
    throw new Error("Could not completely normalize the editor after ".concat(n, " iterations! This is usually due to incorrect normalization logic that leaves a node in an invalid state."));
  return !0;
}, It = function(e) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, {
    voids: t = !1,
    mode: n = "lowest",
    at: a = e.selection,
    match: s
  } = r;
  if (a) {
    var f = i.path(e, a), o = n === "lowest";
    for (var [l, c] of i.levels(e, {
      at: f,
      voids: t,
      match: s,
      reverse: o
    }))
      if (!b.isText(l)) {
        if (B.isRange(a)) {
          if (D.isAncestor(c, a.anchor.path) && D.isAncestor(c, a.focus.path))
            return [l, c];
        } else if (!D.equals(f, c))
          return [l, c];
      }
  }
};
function He(u, e) {
  var r = Object.keys(u);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(u);
    e && (t = t.filter(function(n) {
      return Object.getOwnPropertyDescriptor(u, n).enumerable;
    })), r.push.apply(r, t);
  }
  return r;
}
function Je(u) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? He(Object(r), !0).forEach(function(t) {
      G(u, t, r[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(u, Object.getOwnPropertyDescriptors(r)) : He(Object(r)).forEach(function(t) {
      Object.defineProperty(u, t, Object.getOwnPropertyDescriptor(r, t));
    });
  }
  return u;
}
var Mt = (u, e, r) => {
  var {
    selection: t
  } = u;
  if (t) {
    var n = (C, v) => {
      if (!b.isText(C))
        return !1;
      var [g, m] = i.parent(u, v);
      return !u.isVoid(g) || u.markableVoid(g);
    }, a = B.isExpanded(t), s = !1;
    if (!a) {
      var [f, o] = i.node(u, t);
      if (f && n(f, o)) {
        var [l] = i.parent(u, o);
        s = l && u.markableVoid(l);
      }
    }
    if (a || s)
      A.setNodes(u, {
        [e]: r
      }, {
        match: n,
        split: !0,
        voids: !0
      });
    else {
      var c = Je(Je({}, i.marks(u) || {}), {}, {
        [e]: r
      });
      u.marks = c, Pu.get(u) || u.onChange();
    }
  }
};
function Ze(u, e) {
  var r = Object.keys(u);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(u);
    e && (t = t.filter(function(n) {
      return Object.getOwnPropertyDescriptor(u, n).enumerable;
    })), r.push.apply(r, t);
  }
  return r;
}
function Ge(u) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Ze(Object(r), !0).forEach(function(t) {
      G(u, t, r[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(u, Object.getOwnPropertyDescriptors(r)) : Ze(Object(r)).forEach(function(t) {
      Object.defineProperty(u, t, Object.getOwnPropertyDescriptor(r, t));
    });
  }
  return u;
}
var qt = function(e, r) {
  var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, n = i.point(e, r, {
    edge: "end"
  }), a = i.end(e, []), s = {
    anchor: n,
    focus: a
  }, {
    distance: f = 1
  } = t, o = 0, l;
  for (var c of i.positions(e, Ge(Ge({}, t), {}, {
    at: s
  }))) {
    if (o > f)
      break;
    o !== 0 && (l = c), o++;
  }
  return l;
};
function Ue(u, e) {
  var r = Object.keys(u);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(u);
    e && (t = t.filter(function(n) {
      return Object.getOwnPropertyDescriptor(u, n).enumerable;
    })), r.push.apply(r, t);
  }
  return r;
}
function Ye(u) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Ue(Object(r), !0).forEach(function(t) {
      G(u, t, r[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(u, Object.getOwnPropertyDescriptors(r)) : Ue(Object(r)).forEach(function(t) {
      Object.defineProperty(u, t, Object.getOwnPropertyDescriptor(r, t));
    });
  }
  return u;
}
var Lt = function(e, r) {
  var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, n = i.start(e, []), a = i.point(e, r, {
    edge: "start"
  }), s = {
    anchor: n,
    focus: a
  }, {
    distance: f = 1
  } = t, o = 0, l;
  for (var c of i.positions(e, Ye(Ye({}, t), {}, {
    at: s,
    reverse: !0
  }))) {
    if (o > f)
      break;
    o !== 0 && (l = c), o++;
  }
  return l;
}, Vt = (u, e) => {
  var {
    selection: r
  } = u;
  r && B.isCollapsed(r) && A.delete(u, {
    unit: e,
    reverse: !0
  });
}, Wt = (u, e) => {
  var {
    selection: r
  } = u;
  r && B.isCollapsed(r) && A.delete(u, {
    unit: e
  });
}, Kt = function(e) {
  var {
    direction: r = "forward"
  } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, {
    selection: t
  } = e;
  t && B.isExpanded(t) && A.delete(e, {
    reverse: r === "backward"
  });
}, Ht = (u, e) => [i.start(u, e), i.end(u, e)];
function Xe(u, e) {
  var r = Object.keys(u);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(u);
    e && (t = t.filter(function(n) {
      return Object.getOwnPropertyDescriptor(u, n).enumerable;
    })), r.push.apply(r, t);
  }
  return r;
}
function Qe(u) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Xe(Object(r), !0).forEach(function(t) {
      G(u, t, r[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(u, Object.getOwnPropertyDescriptors(r)) : Xe(Object(r)).forEach(function(t) {
      Object.defineProperty(u, t, Object.getOwnPropertyDescriptor(r, t));
    });
  }
  return u;
}
var Jt = function(e) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return i.above(e, Qe(Qe({}, r), {}, {
    match: (t) => w.isElement(t) && i.isElementReadOnly(e, t)
  }));
}, Zt = (u, e) => i.point(u, e, {
  edge: "end"
}), Gt = (u, e) => {
  var r = i.path(u, e, {
    edge: "start"
  });
  return i.node(u, r);
}, Ut = (u, e) => {
  var r = i.range(u, e);
  return h.fragment(u, r);
};
function ke(u, e) {
  var r = Object.keys(u);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(u);
    e && (t = t.filter(function(n) {
      return Object.getOwnPropertyDescriptor(u, n).enumerable;
    })), r.push.apply(r, t);
  }
  return r;
}
function _e(u) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? ke(Object(r), !0).forEach(function(t) {
      G(u, t, r[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(u, Object.getOwnPropertyDescriptors(r)) : ke(Object(r)).forEach(function(t) {
      Object.defineProperty(u, t, Object.getOwnPropertyDescriptor(r, t));
    });
  }
  return u;
}
var Yt = function(e) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return i.above(e, _e(_e({}, r), {}, {
    match: (t) => w.isElement(t) && i.isVoid(e, t)
  }));
}, Xt = (u, e) => e.children.some((r) => w.isElement(r) && i.isBlock(u, r)), Qt = (u, e) => e.children.some((r) => b.isText(r) || i.isInline(u, r)), kt = (u, e) => h.has(u, e), _t = (u, e) => e.children.every((r) => b.isText(r)), un = (u) => {
  A.splitNodes(u, {
    always: !0
  });
}, en = (u, e, r) => {
  A.insertNodes(u, e, r);
}, rn = (u) => {
  A.splitNodes(u, {
    always: !0
  });
};
function ur(u, e) {
  var r = Object.keys(u);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(u);
    e && (t = t.filter(function(n) {
      return Object.getOwnPropertyDescriptor(u, n).enumerable;
    })), r.push.apply(r, t);
  }
  return r;
}
function tn(u) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? ur(Object(r), !0).forEach(function(t) {
      G(u, t, r[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(u, Object.getOwnPropertyDescriptors(r)) : ur(Object(r)).forEach(function(t) {
      Object.defineProperty(u, t, Object.getOwnPropertyDescriptor(r, t));
    });
  }
  return u;
}
var nn = function(e, r) {
  var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, {
    selection: n,
    marks: a
  } = e;
  if (n) {
    if (a) {
      var s = tn({
        text: r
      }, a);
      A.insertNodes(e, s, {
        at: t.at,
        voids: t.voids
      });
    } else
      A.insertText(e, r, t);
    e.marks = null;
  }
}, an = (u, e) => !u.isInline(e), sn = (u, e, r) => i.isStart(u, e, r) || i.isEnd(u, e, r), fn = (u, e) => {
  var {
    children: r
  } = e, [t] = r;
  return r.length === 0 || r.length === 1 && b.isText(t) && t.text === "" && !u.isVoid(e);
}, on = (u, e, r) => {
  var t = i.end(u, r);
  return $.equals(e, t);
}, Dn = (u) => {
  var e = cr.get(u);
  return e === void 0 ? !0 : e;
}, ln = (u, e, r) => {
  if (e.offset !== 0)
    return !1;
  var t = i.start(u, r);
  return $.equals(e, t);
}, cn = (u, e) => {
  var r = i.path(u, e, {
    edge: "end"
  });
  return i.node(u, r);
}, Cn = function(e, r) {
  var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, n = i.path(e, r, t), a = h.leaf(e, n);
  return [a, n];
};
function vn(u) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return function* () {
    var {
      at: r = u.selection,
      reverse: t = !1,
      voids: n = !1
    } = e, {
      match: a
    } = e;
    if (a == null && (a = () => !0), !!r) {
      var s = [], f = i.path(u, r);
      for (var [o, l] of h.levels(u, f))
        if (a(o, l) && (s.push([o, l]), !n && w.isElement(o) && i.isVoid(u, o)))
          break;
      t && s.reverse(), yield* ku(s);
    }
  }();
}
var Bn = ["text"], gn = ["text"], mn = function(e) {
  var {
    marks: r,
    selection: t
  } = e;
  if (!t)
    return null;
  var {
    anchor: n,
    focus: a
  } = t;
  if (r)
    return r;
  if (B.isExpanded(t)) {
    var s = B.isBackward(t);
    s && ([a, n] = [n, a]);
    var f = i.isEnd(e, n, n.path);
    if (f) {
      var o = i.after(e, n);
      o && (n = o);
    }
    var [l] = i.nodes(e, {
      match: b.isText,
      at: {
        anchor: n,
        focus: a
      }
    });
    if (l) {
      var [c] = l, C = au(c, Bn);
      return C;
    } else
      return {};
  }
  var {
    path: v
  } = n, [g] = i.leaf(e, v);
  if (n.offset === 0) {
    var m = i.previous(e, {
      at: v,
      match: b.isText
    }), d = i.above(e, {
      match: (y) => w.isElement(y) && i.isVoid(e, y) && e.markableVoid(y)
    });
    if (!d) {
      var F = i.above(e, {
        match: (y) => w.isElement(y) && i.isBlock(e, y)
      });
      if (m && F) {
        var [p, E] = m, [, O] = F;
        D.isAncestor(O, E) && (g = p);
      }
    }
  }
  var x = au(g, gn);
  return x;
}, hn = function(e) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, {
    mode: t = "lowest",
    voids: n = !1
  } = r, {
    match: a,
    at: s = e.selection
  } = r;
  if (s) {
    var f = i.after(e, s, {
      voids: n
    });
    if (f) {
      var [, o] = i.last(e, []), l = [f.path, o];
      if (D.isPath(s) && s.length === 0)
        throw new Error("Cannot get the next node from the root node!");
      if (a == null)
        if (D.isPath(s)) {
          var [c] = i.parent(e, s);
          a = (v) => c.children.includes(v);
        } else
          a = () => !0;
      var [C] = i.nodes(e, {
        at: l,
        match: a,
        mode: t,
        voids: n
      });
      return C;
    }
  }
}, An = function(e, r) {
  var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, n = i.path(e, r, t), a = h.get(e, n);
  return [a, n];
};
function Fn(u) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return function* () {
    var {
      at: r = u.selection,
      mode: t = "all",
      universal: n = !1,
      reverse: a = !1,
      voids: s = !1,
      ignoreNonSelectable: f = !1
    } = e, {
      match: o
    } = e;
    if (o || (o = () => !0), !!r) {
      var l, c;
      if (tt.isSpan(r))
        l = r[0], c = r[1];
      else {
        var C = i.path(u, r, {
          edge: "start"
        }), v = i.path(u, r, {
          edge: "end"
        });
        l = a ? v : C, c = a ? C : v;
      }
      var g = h.nodes(u, {
        reverse: a,
        from: l,
        to: c,
        pass: (x) => {
          var [y] = x;
          return w.isElement(y) ? !!(!s && (i.isVoid(u, y) || i.isElementReadOnly(u, y)) || f && !i.isSelectable(u, y)) : !1;
        }
      }), m = [], d;
      for (var [F, p] of g)
        if (!(f && w.isElement(F) && !i.isSelectable(u, F))) {
          var E = d && D.compare(p, d[1]) === 0;
          if (!(t === "highest" && E)) {
            if (!o(F, p)) {
              if (n && !E && b.isText(F))
                return;
              continue;
            }
            if (t === "lowest" && E) {
              d = [F, p];
              continue;
            }
            var O = t === "lowest" ? d : [F, p];
            O && (n ? m.push(O) : yield O), d = [F, p];
          }
        }
      t === "lowest" && d && (n ? m.push(d) : yield d), n && (yield* ku(m));
    }
  }();
}
var En = function(e) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, {
    force: t = !1,
    operation: n
  } = r, a = (c) => Wu.get(c) || [], s = (c) => Ku.get(c) || /* @__PURE__ */ new Set(), f = (c) => {
    var C = a(c).pop(), v = C.join(",");
    return s(c).delete(v), C;
  };
  if (i.isNormalizing(e)) {
    if (t) {
      var o = Array.from(h.nodes(e), (c) => {
        var [, C] = c;
        return C;
      }), l = new Set(o.map((c) => c.join(",")));
      Wu.set(e, o), Ku.set(e, l);
    }
    a(e).length !== 0 && i.withoutNormalizing(e, () => {
      for (var c of a(e))
        if (h.has(e, c)) {
          var C = i.node(e, c), [v, g] = C;
          w.isElement(v) && v.children.length === 0 && e.normalizeNode(C, {
            operation: n
          });
        }
      for (var m = a(e), d = m.length, F = 0; m.length !== 0; ) {
        if (!e.shouldNormalize({
          dirtyPaths: m,
          iteration: F,
          initialDirtyPathsLength: d,
          operation: n
        }))
          return;
        var p = f(e);
        if (h.has(e, p)) {
          var E = i.node(e, p);
          e.normalizeNode(E, {
            operation: n
          });
        }
        F++, m = a(e);
      }
    });
  }
}, dn = function(e, r) {
  var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, n = i.path(e, r, t), a = D.parent(n), s = i.node(e, a);
  return s;
}, pn = function(e, r) {
  var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, {
    affinity: n = "forward"
  } = t, a = {
    current: r,
    affinity: n,
    unref() {
      var {
        current: f
      } = a, o = i.pathRefs(e);
      return o.delete(a), a.current = null, f;
    }
  }, s = i.pathRefs(e);
  return s.add(a), a;
}, bn = (u) => {
  var e = xe.get(u);
  return e || (e = /* @__PURE__ */ new Set(), xe.set(u, e)), e;
}, wn = function(e, r) {
  var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, {
    depth: n,
    edge: a
  } = t;
  if (D.isPath(r)) {
    if (a === "start") {
      var [, s] = h.first(e, r);
      r = s;
    } else if (a === "end") {
      var [, f] = h.last(e, r);
      r = f;
    }
  }
  return B.isRange(r) && (a === "start" ? r = B.start(r) : a === "end" ? r = B.end(r) : r = D.common(r.anchor.path, r.focus.path)), $.isPoint(r) && (r = r.path), n != null && (r = r.slice(0, n)), r;
}, yn = function(e, r) {
  var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, {
    affinity: n = "forward"
  } = t, a = {
    current: r,
    affinity: n,
    unref() {
      var {
        current: f
      } = a, o = i.pointRefs(e);
      return o.delete(a), a.current = null, f;
    }
  }, s = i.pointRefs(e);
  return s.add(a), a;
}, On = (u) => {
  var e = Ne.get(u);
  return e || (e = /* @__PURE__ */ new Set(), Ne.set(u, e)), e;
}, Pn = function(e, r) {
  var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, {
    edge: n = "start"
  } = t;
  if (D.isPath(r)) {
    var a;
    if (n === "end") {
      var [, s] = h.last(e, r);
      a = s;
    } else {
      var [, f] = h.first(e, r);
      a = f;
    }
    var o = h.get(e, a);
    if (!b.isText(o))
      throw new Error("Cannot get the ".concat(n, " point in the node at path [").concat(r, "] because it has no ").concat(n, " text node."));
    return {
      path: a,
      offset: n === "end" ? o.text.length : 0
    };
  }
  if (B.isRange(r)) {
    var [l, c] = B.edges(r);
    return n === "start" ? l : c;
  }
  return r;
};
function xn(u) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return function* () {
    var {
      at: r = u.selection,
      unit: t = "offset",
      reverse: n = !1,
      voids: a = !1,
      ignoreNonSelectable: s = !1
    } = e;
    if (!r)
      return;
    var f = i.range(u, r), [o, l] = B.edges(f), c = n ? l : o, C = !1, v = "", g = 0, m = 0, d = 0;
    for (var [F, p] of i.nodes(u, {
      at: r,
      reverse: n,
      voids: a,
      ignoreNonSelectable: s
    })) {
      if (w.isElement(F)) {
        if (!a && (u.isVoid(F) || u.isElementReadOnly(F))) {
          yield i.start(u, p);
          continue;
        }
        if (u.isInline(F)) continue;
        if (i.hasInlines(u, F)) {
          var E = D.isAncestor(p, l.path) ? l : i.end(u, p), O = D.isAncestor(p, o.path) ? o : i.start(u, p);
          v = i.string(u, {
            anchor: O,
            focus: E
          }, {
            voids: a
          }), C = !0;
        }
      }
      if (b.isText(F)) {
        var x = D.equals(p, c.path);
        for (x ? (m = n ? c.offset : F.text.length - c.offset, d = c.offset) : (m = F.text.length, d = n ? m : 0), (x || C || t === "offset") && (yield {
          path: p,
          offset: d
        }, C = !1); ; ) {
          if (g === 0) {
            if (v === "") break;
            g = y(v, t, n), v = ce(v, g, n)[1];
          }
          if (d = n ? d - g : d + g, m = m - g, m < 0) {
            g = -m;
            break;
          }
          g = 0, yield {
            path: p,
            offset: d
          };
        }
      }
    }
    function y(S, N, I) {
      return N === "character" ? le(S, I) : N === "word" ? ot(S, I) : N === "line" || N === "block" ? S.length : 1;
    }
  }();
}
var Nn = function(e) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, {
    mode: t = "lowest",
    voids: n = !1
  } = r, {
    match: a,
    at: s = e.selection
  } = r;
  if (s) {
    var f = i.before(e, s, {
      voids: n
    });
    if (f) {
      var [, o] = i.first(e, []), l = [f.path, o];
      if (D.isPath(s) && s.length === 0)
        throw new Error("Cannot get the previous node from the root node!");
      if (a == null)
        if (D.isPath(s)) {
          var [c] = i.parent(e, s);
          a = (v) => c.children.includes(v);
        } else
          a = () => !0;
      var [C] = i.nodes(e, {
        reverse: !0,
        at: l,
        match: a,
        mode: t,
        voids: n
      });
      return C;
    }
  }
}, jn = function(e, r) {
  var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, {
    affinity: n = "forward"
  } = t, a = {
    current: r,
    affinity: n,
    unref() {
      var {
        current: f
      } = a, o = i.rangeRefs(e);
      return o.delete(a), a.current = null, f;
    }
  }, s = i.rangeRefs(e);
  return s.add(a), a;
}, Rn = (u) => {
  var e = je.get(u);
  return e || (e = /* @__PURE__ */ new Set(), je.set(u, e)), e;
}, Sn = (u, e, r) => {
  if (B.isRange(e) && !r)
    return e;
  var t = i.start(u, e), n = i.end(u, r || e);
  return {
    anchor: t,
    focus: n
  };
};
function er(u, e) {
  var r = Object.keys(u);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(u);
    e && (t = t.filter(function(n) {
      return Object.getOwnPropertyDescriptor(u, n).enumerable;
    })), r.push.apply(r, t);
  }
  return r;
}
function $n(u) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? er(Object(r), !0).forEach(function(t) {
      G(u, t, r[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(u, Object.getOwnPropertyDescriptors(r)) : er(Object(r)).forEach(function(t) {
      Object.defineProperty(u, t, Object.getOwnPropertyDescriptor(r, t));
    });
  }
  return u;
}
var Tn = (u, e) => {
  var {
    selection: r
  } = u;
  if (r) {
    var t = (c, C) => {
      if (!b.isText(c))
        return !1;
      var [v, g] = i.parent(u, C);
      return !u.isVoid(v) || u.markableVoid(v);
    }, n = B.isExpanded(r), a = !1;
    if (!n) {
      var [s, f] = i.node(u, r);
      if (s && t(s, f)) {
        var [o] = i.parent(u, f);
        a = o && u.markableVoid(o);
      }
    }
    if (n || a)
      A.unsetNodes(u, e, {
        match: t,
        split: !0,
        voids: !0
      });
    else {
      var l = $n({}, i.marks(u) || {});
      delete l[e], u.marks = l, Pu.get(u) || u.onChange();
    }
  }
}, zn = (u, e) => {
  cr.set(u, e);
}, In = (u, e) => i.point(u, e, {
  edge: "start"
}), Mn = function(e, r) {
  var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, {
    voids: n = !1
  } = t, a = i.range(e, r), [s, f] = B.edges(a), o = "";
  for (var [l, c] of i.nodes(e, {
    at: a,
    match: b.isText,
    voids: n
  })) {
    var C = l.text;
    D.equals(c, f.path) && (C = C.slice(0, f.offset)), D.equals(c, s.path) && (C = C.slice(s.offset)), o += C;
  }
  return o;
}, qn = function(e, r) {
  var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, {
    voids: n = !1
  } = t, [a, s] = B.edges(r);
  if (a.offset !== 0 || s.offset !== 0 || B.isCollapsed(r) || D.hasPrevious(s.path))
    return r;
  var f = i.above(e, {
    at: s,
    match: (m) => w.isElement(m) && i.isBlock(e, m),
    voids: n
  }), o = f ? f[1] : [], l = i.start(e, a), c = {
    anchor: l,
    focus: s
  }, C = !0;
  for (var [v, g] of i.nodes(e, {
    at: c,
    match: b.isText,
    reverse: !0,
    voids: n
  })) {
    if (C) {
      C = !1;
      continue;
    }
    if (v.text !== "" || D.isBefore(g, o)) {
      s = {
        path: g,
        offset: v.text.length
      };
      break;
    }
  }
  return {
    anchor: a,
    focus: s
  };
}, Ln = (u, e) => {
  var r = i.isNormalizing(u);
  i.setNormalizing(u, !1);
  try {
    e();
  } finally {
    i.setNormalizing(u, r);
  }
  i.normalize(u);
}, Vn = (u, e, r) => {
  var [t, n] = e;
  return w.isElement(t) && i.isEmpty(u, t) || b.isText(t) && t.text === "" && n[n.length - 1] !== 0;
}, Wn = function(e) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  i.withoutNormalizing(e, () => {
    var t, n, {
      reverse: a = !1,
      unit: s = "character",
      distance: f = 1,
      voids: o = !1
    } = r, {
      at: l = e.selection,
      hanging: c = !1
    } = r;
    if (l) {
      var C = !1;
      if (B.isRange(l) && B.isCollapsed(l) && (C = !0, l = l.anchor), $.isPoint(l)) {
        var v = i.void(e, {
          at: l,
          mode: "highest"
        });
        if (!o && v) {
          var [, g] = v;
          l = g;
        } else {
          var m = {
            unit: s,
            distance: f
          }, d = a ? i.before(e, l, m) || i.start(e, []) : i.after(e, l, m) || i.end(e, []);
          l = {
            anchor: l,
            focus: d
          }, c = !0;
        }
      }
      if (D.isPath(l)) {
        A.removeNodes(e, {
          at: l,
          voids: o
        });
        return;
      }
      if (!B.isCollapsed(l)) {
        if (!c) {
          var [, F] = B.edges(l), p = i.end(e, []);
          $.equals(F, p) || (l = i.unhangRange(e, l, {
            voids: o
          }));
        }
        var [E, O] = B.edges(l), x = i.above(e, {
          match: (Z) => w.isElement(Z) && i.isBlock(e, Z),
          at: E,
          voids: o
        }), y = i.above(e, {
          match: (Z) => w.isElement(Z) && i.isBlock(e, Z),
          at: O,
          voids: o
        }), S = x && y && !D.equals(x[1], y[1]), N = D.equals(E.path, O.path), I = o ? null : (t = i.void(e, {
          at: E,
          mode: "highest"
        })) !== null && t !== void 0 ? t : i.elementReadOnly(e, {
          at: E,
          mode: "highest"
        }), T = o ? null : (n = i.void(e, {
          at: O,
          mode: "highest"
        })) !== null && n !== void 0 ? n : i.elementReadOnly(e, {
          at: O,
          mode: "highest"
        });
        if (I) {
          var j = i.before(e, E);
          j && x && D.isAncestor(x[1], j.path) && (E = j);
        }
        if (T) {
          var z = i.after(e, O);
          z && y && D.isAncestor(y[1], z.path) && (O = z);
        }
        var M = [], W;
        for (var V of i.nodes(e, {
          at: l,
          voids: o
        })) {
          var [J, k] = V;
          W && D.compare(k, W) === 0 || (!o && w.isElement(J) && (i.isVoid(e, J) || i.isElementReadOnly(e, J)) || !D.isCommon(k, E.path) && !D.isCommon(k, O.path)) && (M.push(V), W = k);
        }
        var _ = Array.from(M, (Z) => {
          var [, Gu] = Z;
          return i.pathRef(e, Gu);
        }), uu = i.pointRef(e, E), L = i.pointRef(e, O), Y = "";
        if (!N && !I) {
          var ru = uu.current, [eu] = i.leaf(e, ru), {
            path: tu
          } = ru, {
            offset: iu
          } = E, R = eu.text.slice(iu);
          R.length > 0 && (e.apply({
            type: "remove_text",
            path: tu,
            offset: iu,
            text: R
          }), Y = R);
        }
        if (_.reverse().map((Z) => Z.unref()).filter((Z) => Z !== null).forEach((Z) => A.removeNodes(e, {
          at: Z,
          voids: o
        })), !T) {
          var K = L.current, [su] = i.leaf(e, K), {
            path: fu
          } = K, Bu = N ? E.offset : 0, pu = su.text.slice(Bu, O.offset);
          pu.length > 0 && (e.apply({
            type: "remove_text",
            path: fu,
            offset: Bu,
            text: pu
          }), Y = pu);
        }
        !N && S && L.current && uu.current && A.mergeNodes(e, {
          at: L.current,
          hanging: !0,
          voids: o
        }), C && a && s === "character" && Y.length > 1 && Y.match(/[\u0E00-\u0E7F]+/) && A.insertText(e, Y.slice(0, Y.length - f));
        var bu = uu.unref(), wu = L.unref(), gu = a ? bu || wu : wu || bu;
        r.at == null && gu && A.select(e, gu);
      }
    }
  });
}, Kn = function(e, r) {
  var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  i.withoutNormalizing(e, () => {
    var {
      hanging: n = !1,
      voids: a = !1
    } = t, {
      at: s = De(e),
      batchDirty: f = !0
    } = t;
    if (r.length) {
      if (B.isRange(s))
        if (n || (s = i.unhangRange(e, s, {
          voids: a
        })), B.isCollapsed(s))
          s = s.anchor;
        else {
          var [, o] = B.edges(s);
          if (!a && i.void(e, {
            at: o
          }))
            return;
          var l = i.pointRef(e, o);
          A.delete(e, {
            at: s
          }), s = l.unref();
        }
      else D.isPath(s) && (s = i.start(e, s));
      if (!(!a && i.void(e, {
        at: s
      }))) {
        var c = i.above(e, {
          at: s,
          match: (R) => w.isElement(R) && i.isInline(e, R),
          mode: "highest",
          voids: a
        });
        if (c) {
          var [, C] = c;
          if (i.isEnd(e, s, C)) {
            var v = i.after(e, C);
            s = v;
          } else if (i.isStart(e, s, C)) {
            var g = i.before(e, C);
            s = g;
          }
        }
        var m = i.above(e, {
          match: (R) => w.isElement(R) && i.isBlock(e, R),
          at: s,
          voids: a
        }), [, d] = m, F = i.isStart(e, s, d), p = i.isEnd(e, s, d), E = F && p, O = !F || F && p, x = !p, [, y] = h.first({
          children: r
        }, []), [, S] = h.last({
          children: r
        }, []), N = [], I = (R) => {
          var [K, su] = R, fu = su.length === 0;
          return fu ? !1 : E ? !0 : !(O && D.isAncestor(su, y) && w.isElement(K) && !e.isVoid(K) && !e.isInline(K) || x && D.isAncestor(su, S) && w.isElement(K) && !e.isVoid(K) && !e.isInline(K));
        };
        for (var T of h.nodes({
          children: r
        }, {
          pass: I
        }))
          I(T) && N.push(T);
        var j = [], z = [], M = [], W = !0, V = !1;
        for (var [J] of N)
          w.isElement(J) && !e.isInline(J) ? (W = !1, V = !0, z.push(J)) : W ? j.push(J) : M.push(J);
        var [k] = i.nodes(e, {
          at: s,
          match: (R) => b.isText(R) || i.isInline(e, R),
          mode: "highest",
          voids: a
        }), [, _] = k, uu = i.isStart(e, s, _), L = i.isEnd(e, s, _), Y = i.pathRef(e, p && !M.length ? D.next(d) : d), ru = i.pathRef(e, L ? D.next(_) : _);
        A.splitNodes(e, {
          at: s,
          match: (R) => V ? w.isElement(R) && i.isBlock(e, R) : b.isText(R) || i.isInline(e, R),
          mode: V ? "lowest" : "highest",
          always: V && (!F || j.length > 0) && (!p || M.length > 0),
          voids: a
        });
        var eu = i.pathRef(e, !uu || uu && L ? D.next(_) : _);
        if (A.insertNodes(e, j, {
          at: eu.current,
          match: (R) => b.isText(R) || i.isInline(e, R),
          mode: "highest",
          voids: a,
          batchDirty: f
        }), E && !j.length && z.length && !M.length && A.delete(e, {
          at: d,
          voids: a
        }), A.insertNodes(e, z, {
          at: Y.current,
          match: (R) => w.isElement(R) && i.isBlock(e, R),
          mode: "lowest",
          voids: a,
          batchDirty: f
        }), A.insertNodes(e, M, {
          at: ru.current,
          match: (R) => b.isText(R) || i.isInline(e, R),
          mode: "highest",
          voids: a,
          batchDirty: f
        }), !t.at) {
          var tu;
          if (M.length > 0 && ru.current ? tu = D.previous(ru.current) : z.length > 0 && Y.current ? tu = D.previous(Y.current) : eu.current && (tu = D.previous(eu.current)), tu) {
            var iu = i.end(e, tu);
            A.select(e, iu);
          }
        }
        eu.unref(), Y.unref(), ru.unref();
      }
    }
  });
}, Hn = function(e) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, {
    edge: t = "anchor"
  } = r, {
    selection: n
  } = e;
  if (n) {
    if (t === "anchor")
      A.select(e, n.anchor);
    else if (t === "focus")
      A.select(e, n.focus);
    else if (t === "start") {
      var [a] = B.edges(n);
      A.select(e, a);
    } else if (t === "end") {
      var [, s] = B.edges(n);
      A.select(e, s);
    }
  } else return;
}, Jn = (u) => {
  var {
    selection: e
  } = u;
  e && u.apply({
    type: "set_selection",
    properties: e,
    newProperties: null
  });
}, Zn = function(e) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, {
    selection: t
  } = e, {
    distance: n = 1,
    unit: a = "character",
    reverse: s = !1
  } = r, {
    edge: f = null
  } = r;
  if (t) {
    f === "start" && (f = B.isBackward(t) ? "focus" : "anchor"), f === "end" && (f = B.isBackward(t) ? "anchor" : "focus");
    var {
      anchor: o,
      focus: l
    } = t, c = {
      distance: n,
      unit: a,
      ignoreNonSelectable: !0
    }, C = {};
    if (f == null || f === "anchor") {
      var v = s ? i.before(e, o, c) : i.after(e, o, c);
      v && (C.anchor = v);
    }
    if (f == null || f === "focus") {
      var g = s ? i.before(e, l, c) : i.after(e, l, c);
      g && (C.focus = g);
    }
    A.setSelection(e, C);
  }
}, Gn = (u, e) => {
  var {
    selection: r
  } = u;
  if (e = i.range(u, e), r) {
    A.setSelection(u, e);
    return;
  }
  if (!B.isRange(e))
    throw new Error("When setting the selection and the current selection is `null` you must provide at least an `anchor` and `focus`, but you passed: ".concat(X.stringify(e)));
  u.apply({
    type: "set_selection",
    properties: r,
    newProperties: e
  });
};
function rr(u, e) {
  var r = Object.keys(u);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(u);
    e && (t = t.filter(function(n) {
      return Object.getOwnPropertyDescriptor(u, n).enumerable;
    })), r.push.apply(r, t);
  }
  return r;
}
function tr(u) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? rr(Object(r), !0).forEach(function(t) {
      G(u, t, r[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(u, Object.getOwnPropertyDescriptors(r)) : rr(Object(r)).forEach(function(t) {
      Object.defineProperty(u, t, Object.getOwnPropertyDescriptor(r, t));
    });
  }
  return u;
}
var Un = function(e, r) {
  var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, {
    selection: n
  } = e, {
    edge: a = "both"
  } = t;
  if (n) {
    a === "start" && (a = B.isBackward(n) ? "focus" : "anchor"), a === "end" && (a = B.isBackward(n) ? "anchor" : "focus");
    var {
      anchor: s,
      focus: f
    } = n, o = a === "anchor" ? s : f;
    A.setSelection(e, {
      [a === "anchor" ? "anchor" : "focus"]: tr(tr({}, o), r)
    });
  }
}, Yn = (u, e) => {
  var {
    selection: r
  } = u, t = {}, n = {};
  if (r) {
    for (var a in e)
      (a === "anchor" && e.anchor != null && !$.equals(e.anchor, r.anchor) || a === "focus" && e.focus != null && !$.equals(e.focus, r.focus) || a !== "anchor" && a !== "focus" && e[a] !== r[a]) && (t[a] = r[a], n[a] = e[a]);
    Object.keys(t).length > 0 && u.apply({
      type: "set_selection",
      properties: t,
      newProperties: n
    });
  }
}, Xn = function(e, r) {
  var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  i.withoutNormalizing(e, () => {
    var {
      hanging: n = !1,
      voids: a = !1,
      mode: s = "lowest",
      batchDirty: f = !0
    } = t, {
      at: o,
      match: l,
      select: c
    } = t;
    if (h.isNode(r) && (r = [r]), r.length !== 0) {
      var [C] = r;
      if (o || (o = De(e), c !== !1 && (c = !0)), c == null && (c = !1), B.isRange(o))
        if (n || (o = i.unhangRange(e, o, {
          voids: a
        })), B.isCollapsed(o))
          o = o.anchor;
        else {
          var [, v] = B.edges(o), g = i.pointRef(e, v);
          A.delete(e, {
            at: o
          }), o = g.unref();
        }
      if ($.isPoint(o)) {
        l == null && (b.isText(C) ? l = (j) => b.isText(j) : e.isInline(C) ? l = (j) => b.isText(j) || i.isInline(e, j) : l = (j) => w.isElement(j) && i.isBlock(e, j));
        var [m] = i.nodes(e, {
          at: o.path,
          match: l,
          mode: s,
          voids: a
        });
        if (m) {
          var [, d] = m, F = i.pathRef(e, d), p = i.isEnd(e, o, d);
          A.splitNodes(e, {
            at: o,
            match: l,
            mode: s,
            voids: a
          });
          var E = F.unref();
          o = p ? D.next(E) : E;
        } else
          return;
      }
      var O = D.parent(o), x = o[o.length - 1];
      if (!(!a && i.void(e, {
        at: O
      }))) {
        if (f) {
          var y = [], S = D.levels(O);
          jt(e, () => {
            var j = function() {
              var W = O.concat(x);
              x++;
              var V = {
                type: "insert_node",
                path: W,
                node: z
              };
              e.apply(V), o = D.next(o), y.push(V), b.isText ? S.push(...Array.from(h.nodes(z), (J) => {
                var [, k] = J;
                return W.concat(k);
              })) : S.push(W);
            };
            for (var z of r)
              j();
          }, () => {
            vr(e, S, (j) => {
              var z = j;
              for (var M of y)
                if (D.operationCanTransformPath(M) && (z = D.transform(z, M), !z))
                  return null;
              return z;
            });
          });
        } else
          for (var N of r) {
            var I = O.concat(x);
            x++, e.apply({
              type: "insert_node",
              path: I,
              node: N
            }), o = D.next(o);
          }
        if (o = D.previous(o), c) {
          var T = i.end(e, o);
          T && A.select(e, T);
        }
      }
    }
  });
}, Qn = function(e) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  i.withoutNormalizing(e, () => {
    var {
      at: t = e.selection,
      mode: n = "lowest",
      voids: a = !1
    } = r, {
      match: s
    } = r;
    if (s == null && (s = D.isPath(t) ? du(e, t) : (x) => w.isElement(x) && i.isBlock(e, x)), !!t) {
      var f = i.nodes(e, {
        at: t,
        match: s,
        mode: n,
        voids: a
      }), o = Array.from(f, (x) => {
        var [, y] = x;
        return i.pathRef(e, y);
      });
      for (var l of o) {
        var c = l.unref();
        if (c.length < 2)
          throw new Error("Cannot lift node at a path [".concat(c, "] because it has a depth of less than `2`."));
        var C = i.node(e, D.parent(c)), [v, g] = C, m = c[c.length - 1], {
          length: d
        } = v.children;
        if (d === 1) {
          var F = D.next(g);
          A.moveNodes(e, {
            at: c,
            to: F,
            voids: a
          }), A.removeNodes(e, {
            at: g,
            voids: a
          });
        } else if (m === 0)
          A.moveNodes(e, {
            at: c,
            to: g,
            voids: a
          });
        else if (m === d - 1) {
          var p = D.next(g);
          A.moveNodes(e, {
            at: c,
            to: p,
            voids: a
          });
        } else {
          var E = D.next(c), O = D.next(g);
          A.splitNodes(e, {
            at: E,
            voids: a
          }), A.moveNodes(e, {
            at: c,
            to: O,
            voids: a
          });
        }
      }
    }
  });
}, kn = ["text"], _n = ["children"], Br = (u, e) => {
  if (w.isElement(e)) {
    var r = e;
    return i.isVoid(u, e) ? !0 : r.children.length === 1 ? Br(u, r.children[0]) : !1;
  } else return !i.isEditor(e);
}, ua = function(e) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  i.withoutNormalizing(e, () => {
    var {
      match: t,
      at: n = e.selection
    } = r, {
      hanging: a = !1,
      voids: s = !1,
      mode: f = "lowest"
    } = r;
    if (n) {
      if (t == null)
        if (D.isPath(n)) {
          var [o] = i.parent(e, n);
          t = (j) => o.children.includes(j);
        } else
          t = (j) => w.isElement(j) && i.isBlock(e, j);
      if (!a && B.isRange(n) && (n = i.unhangRange(e, n, {
        voids: s
      })), B.isRange(n))
        if (B.isCollapsed(n))
          n = n.anchor;
        else {
          var [, l] = B.edges(n), c = i.pointRef(e, l);
          A.delete(e, {
            at: n
          }), n = c.unref(), r.at == null && A.select(e, n);
        }
      var [C] = i.nodes(e, {
        at: n,
        match: t,
        voids: s,
        mode: f
      }), v = i.previous(e, {
        at: n,
        match: t,
        voids: s,
        mode: f
      });
      if (!(!C || !v)) {
        var [g, m] = C, [d, F] = v;
        if (!(m.length === 0 || F.length === 0)) {
          var p = D.next(F), E = D.common(m, F), O = D.isSibling(m, F), x = Array.from(i.levels(e, {
            at: m
          }), (j) => {
            var [z] = j;
            return z;
          }).slice(E.length).slice(0, -1), y = i.above(e, {
            at: m,
            mode: "highest",
            match: (j) => x.includes(j) && Br(e, j)
          }), S = y && i.pathRef(e, y[1]), N, I;
          if (b.isText(g) && b.isText(d)) {
            var T = au(g, kn);
            I = d.text.length, N = T;
          } else if (w.isElement(g) && w.isElement(d)) {
            var T = au(g, _n);
            I = d.children.length, N = T;
          } else
            throw new Error("Cannot merge the node at path [".concat(m, "] with the previous sibling because it is not the same kind: ").concat(X.stringify(g), " ").concat(X.stringify(d)));
          O || A.moveNodes(e, {
            at: m,
            to: p,
            voids: s
          }), S && A.removeNodes(e, {
            at: S.current,
            voids: s
          }), i.shouldMergeNodesRemovePrevNode(e, v, C) ? A.removeNodes(e, {
            at: F,
            voids: s
          }) : e.apply({
            type: "merge_node",
            path: p,
            position: I,
            properties: N
          }), S && S.unref();
        }
      }
    }
  });
}, ea = (u, e) => {
  i.withoutNormalizing(u, () => {
    var {
      to: r,
      at: t = u.selection,
      mode: n = "lowest",
      voids: a = !1
    } = e, {
      match: s
    } = e;
    if (t) {
      s == null && (s = D.isPath(t) ? du(u, t) : (g) => w.isElement(g) && i.isBlock(u, g));
      var f = i.pathRef(u, r), o = i.nodes(u, {
        at: t,
        match: s,
        mode: n,
        voids: a
      }), l = Array.from(o, (g) => {
        var [, m] = g;
        return i.pathRef(u, m);
      });
      for (var c of l) {
        var C = c.unref(), v = f.current;
        C.length !== 0 && u.apply({
          type: "move_node",
          path: C,
          newPath: v
        }), f.current && D.isSibling(v, C) && D.isAfter(v, C) && (f.current = D.next(f.current));
      }
      f.unref();
    }
  });
}, ra = function(e) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  i.withoutNormalizing(e, () => {
    var {
      hanging: t = !1,
      voids: n = !1,
      mode: a = "lowest"
    } = r, {
      at: s = e.selection,
      match: f
    } = r;
    if (s) {
      f == null && (f = D.isPath(s) ? du(e, s) : (g) => w.isElement(g) && i.isBlock(e, g)), !t && B.isRange(s) && (s = i.unhangRange(e, s, {
        voids: n
      }));
      var o = i.nodes(e, {
        at: s,
        match: f,
        mode: a,
        voids: n
      }), l = Array.from(o, (g) => {
        var [, m] = g;
        return i.pathRef(e, m);
      });
      for (var c of l) {
        var C = c.unref();
        if (C) {
          var [v] = i.node(e, C);
          e.apply({
            type: "remove_node",
            path: C,
            node: v
          });
        }
      }
    }
  });
}, ta = function(e, r) {
  var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  i.withoutNormalizing(e, () => {
    var {
      match: n,
      at: a = e.selection,
      compare: s,
      merge: f
    } = t, {
      hanging: o = !1,
      mode: l = "lowest",
      split: c = !1,
      voids: C = !1
    } = t;
    if (a) {
      if (n == null && (n = D.isPath(a) ? du(e, a) : (I) => w.isElement(I) && i.isBlock(e, I)), !o && B.isRange(a) && (a = i.unhangRange(e, a, {
        voids: C
      })), c && B.isRange(a)) {
        if (B.isCollapsed(a) && i.leaf(e, a.anchor)[0].text.length > 0)
          return;
        var v = i.rangeRef(e, a, {
          affinity: "inward"
        }), [g, m] = B.edges(a), d = l === "lowest" ? "lowest" : "highest", F = i.isEnd(e, m, m.path);
        A.splitNodes(e, {
          at: m,
          match: n,
          mode: d,
          voids: C,
          always: !F
        });
        var p = i.isStart(e, g, g.path);
        A.splitNodes(e, {
          at: g,
          match: n,
          mode: d,
          voids: C,
          always: !p
        }), a = v.unref(), t.at == null && A.select(e, a);
      }
      s || (s = (I, T) => I !== T);
      for (var [E, O] of i.nodes(e, {
        at: a,
        match: n,
        mode: l,
        voids: C
      })) {
        var x = {}, y = {};
        if (O.length !== 0) {
          var S = !1;
          for (var N in r)
            N === "children" || N === "text" || s(r[N], E[N]) && (S = !0, E.hasOwnProperty(N) && (x[N] = E[N]), f ? r[N] != null && (y[N] = f(E[N], r[N])) : r[N] != null && (y[N] = r[N]));
          S && e.apply({
            type: "set_node",
            path: O,
            properties: x,
            newProperties: y
          });
        }
      }
    }
  });
}, na = (u, e) => {
  if (B.isCollapsed(e))
    return e.anchor;
  var [, r] = B.edges(e), t = i.pointRef(u, r);
  return A.delete(u, {
    at: e
  }), t.unref();
}, aa = function(e) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  i.withoutNormalizing(e, () => {
    var {
      mode: t = "lowest",
      voids: n = !1
    } = r, {
      match: a,
      at: s = e.selection,
      height: f = 0,
      always: o = !1
    } = r;
    if (a == null && (a = (L) => w.isElement(L) && i.isBlock(e, L)), B.isRange(s) && (s = na(e, s)), D.isPath(s)) {
      var l = s, c = i.point(e, l), [C] = i.parent(e, l);
      a = (L) => L === C, f = c.path.length - l.length + 1, s = c, o = !0;
    }
    if (s) {
      var v = i.pointRef(e, s, {
        affinity: "backward"
      }), g;
      try {
        var [m] = i.nodes(e, {
          at: s,
          match: a,
          mode: t,
          voids: n
        });
        if (!m)
          return;
        var d = i.void(e, {
          at: s,
          mode: "highest"
        }), F = 0;
        if (!n && d) {
          var [p, E] = d;
          if (w.isElement(p) && e.isInline(p)) {
            var O = i.after(e, E);
            if (!O) {
              var x = {
                text: ""
              }, y = D.next(E);
              A.insertNodes(e, x, {
                at: y,
                voids: n
              }), O = i.point(e, y);
            }
            s = O, o = !0;
          }
          var S = s.path.length - E.length;
          f = S + 1, o = !0;
        }
        g = i.pointRef(e, s);
        var N = s.path.length - f, [, I] = m, T = s.path.slice(0, N), j = f === 0 ? s.offset : s.path[N] + F;
        for (var [z, M] of i.levels(e, {
          at: T,
          reverse: !0,
          voids: n
        })) {
          var W = !1;
          if (M.length < I.length || M.length === 0 || !n && w.isElement(z) && i.isVoid(e, z))
            break;
          var V = v.current, J = i.isEnd(e, V, M);
          if (o || !v || !i.isEdge(e, V, M)) {
            W = !0;
            var k = h.extractProps(z);
            e.apply({
              type: "split_node",
              path: M,
              position: j,
              properties: k
            });
          }
          j = M[M.length - 1] + (W || J ? 1 : 0);
        }
        if (r.at == null) {
          var _ = g.current || i.end(e, []);
          A.select(e, _);
        }
      } finally {
        var uu;
        v.unref(), (uu = g) === null || uu === void 0 || uu.unref();
      }
    }
  });
}, sa = function(e, r) {
  var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  Array.isArray(r) || (r = [r]);
  var n = {};
  for (var a of r)
    n[a] = null;
  A.setNodes(e, n, t);
}, ia = function(e) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  i.withoutNormalizing(e, () => {
    var {
      mode: t = "lowest",
      split: n = !1,
      voids: a = !1
    } = r, {
      at: s = e.selection,
      match: f
    } = r;
    if (s) {
      f == null && (f = D.isPath(s) ? du(e, s) : (g) => w.isElement(g) && i.isBlock(e, g)), D.isPath(s) && (s = i.range(e, s));
      var o = B.isRange(s) ? i.rangeRef(e, s) : null, l = i.nodes(e, {
        at: s,
        match: f,
        mode: t,
        voids: a
      }), c = Array.from(
        l,
        (g) => {
          var [, m] = g;
          return i.pathRef(e, m);
        }
        // unwrapNode will call liftNode which does not support splitting the node when nested.
        // If we do not reverse the order and call it from top to the bottom, it will remove all blocks
        // that wrap target node. So we reverse the order.
      ).reverse(), C = function() {
        var m = v.unref(), [d] = i.node(e, m), F = i.range(e, m);
        n && o && (F = B.intersection(o.current, F)), A.liftNodes(e, {
          at: F,
          match: (p) => w.isAncestor(d) && d.children.includes(p),
          voids: a
        });
      };
      for (var v of c)
        C();
      o && o.unref();
    }
  });
};
function nr(u, e) {
  var r = Object.keys(u);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(u);
    e && (t = t.filter(function(n) {
      return Object.getOwnPropertyDescriptor(u, n).enumerable;
    })), r.push.apply(r, t);
  }
  return r;
}
function ar(u) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? nr(Object(r), !0).forEach(function(t) {
      G(u, t, r[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(u, Object.getOwnPropertyDescriptors(r)) : nr(Object(r)).forEach(function(t) {
      Object.defineProperty(u, t, Object.getOwnPropertyDescriptor(r, t));
    });
  }
  return u;
}
var fa = function(e, r) {
  var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  i.withoutNormalizing(e, () => {
    var {
      mode: n = "lowest",
      split: a = !1,
      voids: s = !1
    } = t, {
      match: f,
      at: o = e.selection
    } = t;
    if (o) {
      if (f == null && (D.isPath(o) ? f = du(e, o) : e.isInline(r) ? f = (F) => w.isElement(F) && i.isInline(e, F) || b.isText(F) : f = (F) => w.isElement(F) && i.isBlock(e, F)), a && B.isRange(o)) {
        var [l, c] = B.edges(o), C = i.rangeRef(e, o, {
          affinity: "inward"
        });
        A.splitNodes(e, {
          at: c,
          match: f,
          voids: s
        }), A.splitNodes(e, {
          at: l,
          match: f,
          voids: s
        }), o = C.unref(), t.at == null && A.select(e, o);
      }
      var v = Array.from(i.nodes(e, {
        at: o,
        match: e.isInline(r) ? (F) => w.isElement(F) && i.isBlock(e, F) : (F) => i.isEditor(F),
        mode: "lowest",
        voids: s
      })), g = function() {
        var p = B.isRange(o) ? B.intersection(o, i.range(e, d)) : o;
        if (!p)
          return 0;
        var E = Array.from(i.nodes(e, {
          at: p,
          match: f,
          mode: n,
          voids: s
        }));
        if (E.length > 0) {
          var [O] = E, x = E[E.length - 1], [, y] = O, [, S] = x;
          if (y.length === 0 && S.length === 0)
            return 0;
          var N = D.equals(y, S) ? D.parent(y) : D.common(y, S), I = i.range(e, y, S), T = i.node(e, N), [j] = T, z = N.length + 1, M = D.next(S.slice(0, z)), W = ar(ar({}, r), {}, {
            children: []
          });
          A.insertNodes(e, W, {
            at: M,
            voids: s
          }), A.moveNodes(e, {
            at: I,
            match: (V) => w.isAncestor(j) && j.children.includes(V),
            to: M.concat(0),
            voids: s
          });
        }
      }, m;
      for (var [, d] of v)
        m = g();
    }
  });
}, Da = () => {
  var u = {
    children: [],
    operations: [],
    selection: null,
    marks: null,
    isElementReadOnly: () => !1,
    isInline: () => !1,
    isSelectable: () => !0,
    isVoid: () => !1,
    markableVoid: () => !1,
    onChange: () => {
    },
    // Core
    apply: function() {
      for (var r = arguments.length, t = new Array(r), n = 0; n < r; n++)
        t[n] = arguments[n];
      return Rt(u, ...t);
    },
    // Editor
    addMark: function() {
      for (var r = arguments.length, t = new Array(r), n = 0; n < r; n++)
        t[n] = arguments[n];
      return Mt(u, ...t);
    },
    deleteBackward: function() {
      for (var r = arguments.length, t = new Array(r), n = 0; n < r; n++)
        t[n] = arguments[n];
      return Vt(u, ...t);
    },
    deleteForward: function() {
      for (var r = arguments.length, t = new Array(r), n = 0; n < r; n++)
        t[n] = arguments[n];
      return Wt(u, ...t);
    },
    deleteFragment: function() {
      for (var r = arguments.length, t = new Array(r), n = 0; n < r; n++)
        t[n] = arguments[n];
      return Kt(u, ...t);
    },
    getFragment: function() {
      for (var r = arguments.length, t = new Array(r), n = 0; n < r; n++)
        t[n] = arguments[n];
      return $t(u, ...t);
    },
    insertBreak: function() {
      for (var r = arguments.length, t = new Array(r), n = 0; n < r; n++)
        t[n] = arguments[n];
      return un(u, ...t);
    },
    insertSoftBreak: function() {
      for (var r = arguments.length, t = new Array(r), n = 0; n < r; n++)
        t[n] = arguments[n];
      return rn(u, ...t);
    },
    insertFragment: function() {
      for (var r = arguments.length, t = new Array(r), n = 0; n < r; n++)
        t[n] = arguments[n];
      return Kn(u, ...t);
    },
    insertNode: function() {
      for (var r = arguments.length, t = new Array(r), n = 0; n < r; n++)
        t[n] = arguments[n];
      return en(u, ...t);
    },
    insertText: function() {
      for (var r = arguments.length, t = new Array(r), n = 0; n < r; n++)
        t[n] = arguments[n];
      return nn(u, ...t);
    },
    normalizeNode: function() {
      for (var r = arguments.length, t = new Array(r), n = 0; n < r; n++)
        t[n] = arguments[n];
      return Tt(u, ...t);
    },
    removeMark: function() {
      for (var r = arguments.length, t = new Array(r), n = 0; n < r; n++)
        t[n] = arguments[n];
      return Tn(u, ...t);
    },
    getDirtyPaths: function() {
      for (var r = arguments.length, t = new Array(r), n = 0; n < r; n++)
        t[n] = arguments[n];
      return St(u, ...t);
    },
    shouldNormalize: function() {
      for (var r = arguments.length, t = new Array(r), n = 0; n < r; n++)
        t[n] = arguments[n];
      return zt(u, ...t);
    },
    // Editor interface
    above: function() {
      for (var r = arguments.length, t = new Array(r), n = 0; n < r; n++)
        t[n] = arguments[n];
      return It(u, ...t);
    },
    after: function() {
      for (var r = arguments.length, t = new Array(r), n = 0; n < r; n++)
        t[n] = arguments[n];
      return qt(u, ...t);
    },
    before: function() {
      for (var r = arguments.length, t = new Array(r), n = 0; n < r; n++)
        t[n] = arguments[n];
      return Lt(u, ...t);
    },
    collapse: function() {
      for (var r = arguments.length, t = new Array(r), n = 0; n < r; n++)
        t[n] = arguments[n];
      return Hn(u, ...t);
    },
    delete: function() {
      for (var r = arguments.length, t = new Array(r), n = 0; n < r; n++)
        t[n] = arguments[n];
      return Wn(u, ...t);
    },
    deselect: function() {
      for (var r = arguments.length, t = new Array(r), n = 0; n < r; n++)
        t[n] = arguments[n];
      return Jn(u, ...t);
    },
    edges: function() {
      for (var r = arguments.length, t = new Array(r), n = 0; n < r; n++)
        t[n] = arguments[n];
      return Ht(u, ...t);
    },
    elementReadOnly: function() {
      for (var r = arguments.length, t = new Array(r), n = 0; n < r; n++)
        t[n] = arguments[n];
      return Jt(u, ...t);
    },
    end: function() {
      for (var r = arguments.length, t = new Array(r), n = 0; n < r; n++)
        t[n] = arguments[n];
      return Zt(u, ...t);
    },
    first: function() {
      for (var r = arguments.length, t = new Array(r), n = 0; n < r; n++)
        t[n] = arguments[n];
      return Gt(u, ...t);
    },
    fragment: function() {
      for (var r = arguments.length, t = new Array(r), n = 0; n < r; n++)
        t[n] = arguments[n];
      return Ut(u, ...t);
    },
    getMarks: function() {
      for (var r = arguments.length, t = new Array(r), n = 0; n < r; n++)
        t[n] = arguments[n];
      return mn(u, ...t);
    },
    hasBlocks: function() {
      for (var r = arguments.length, t = new Array(r), n = 0; n < r; n++)
        t[n] = arguments[n];
      return Xt(u, ...t);
    },
    hasInlines: function() {
      for (var r = arguments.length, t = new Array(r), n = 0; n < r; n++)
        t[n] = arguments[n];
      return Qt(u, ...t);
    },
    hasPath: function() {
      for (var r = arguments.length, t = new Array(r), n = 0; n < r; n++)
        t[n] = arguments[n];
      return kt(u, ...t);
    },
    hasTexts: function() {
      for (var r = arguments.length, t = new Array(r), n = 0; n < r; n++)
        t[n] = arguments[n];
      return _t(u, ...t);
    },
    insertNodes: function() {
      for (var r = arguments.length, t = new Array(r), n = 0; n < r; n++)
        t[n] = arguments[n];
      return Xn(u, ...t);
    },
    isBlock: function() {
      for (var r = arguments.length, t = new Array(r), n = 0; n < r; n++)
        t[n] = arguments[n];
      return an(u, ...t);
    },
    isEdge: function() {
      for (var r = arguments.length, t = new Array(r), n = 0; n < r; n++)
        t[n] = arguments[n];
      return sn(u, ...t);
    },
    isEmpty: function() {
      for (var r = arguments.length, t = new Array(r), n = 0; n < r; n++)
        t[n] = arguments[n];
      return fn(u, ...t);
    },
    isEnd: function() {
      for (var r = arguments.length, t = new Array(r), n = 0; n < r; n++)
        t[n] = arguments[n];
      return on(u, ...t);
    },
    isNormalizing: function() {
      for (var r = arguments.length, t = new Array(r), n = 0; n < r; n++)
        t[n] = arguments[n];
      return Dn(u, ...t);
    },
    isStart: function() {
      for (var r = arguments.length, t = new Array(r), n = 0; n < r; n++)
        t[n] = arguments[n];
      return ln(u, ...t);
    },
    last: function() {
      for (var r = arguments.length, t = new Array(r), n = 0; n < r; n++)
        t[n] = arguments[n];
      return cn(u, ...t);
    },
    leaf: function() {
      for (var r = arguments.length, t = new Array(r), n = 0; n < r; n++)
        t[n] = arguments[n];
      return Cn(u, ...t);
    },
    levels: function() {
      for (var r = arguments.length, t = new Array(r), n = 0; n < r; n++)
        t[n] = arguments[n];
      return vn(u, ...t);
    },
    liftNodes: function() {
      for (var r = arguments.length, t = new Array(r), n = 0; n < r; n++)
        t[n] = arguments[n];
      return Qn(u, ...t);
    },
    mergeNodes: function() {
      for (var r = arguments.length, t = new Array(r), n = 0; n < r; n++)
        t[n] = arguments[n];
      return ua(u, ...t);
    },
    move: function() {
      for (var r = arguments.length, t = new Array(r), n = 0; n < r; n++)
        t[n] = arguments[n];
      return Zn(u, ...t);
    },
    moveNodes: function() {
      for (var r = arguments.length, t = new Array(r), n = 0; n < r; n++)
        t[n] = arguments[n];
      return ea(u, ...t);
    },
    next: function() {
      for (var r = arguments.length, t = new Array(r), n = 0; n < r; n++)
        t[n] = arguments[n];
      return hn(u, ...t);
    },
    node: function() {
      for (var r = arguments.length, t = new Array(r), n = 0; n < r; n++)
        t[n] = arguments[n];
      return An(u, ...t);
    },
    nodes: function() {
      for (var r = arguments.length, t = new Array(r), n = 0; n < r; n++)
        t[n] = arguments[n];
      return Fn(u, ...t);
    },
    normalize: function() {
      for (var r = arguments.length, t = new Array(r), n = 0; n < r; n++)
        t[n] = arguments[n];
      return En(u, ...t);
    },
    parent: function() {
      for (var r = arguments.length, t = new Array(r), n = 0; n < r; n++)
        t[n] = arguments[n];
      return dn(u, ...t);
    },
    path: function() {
      for (var r = arguments.length, t = new Array(r), n = 0; n < r; n++)
        t[n] = arguments[n];
      return wn(u, ...t);
    },
    pathRef: function() {
      for (var r = arguments.length, t = new Array(r), n = 0; n < r; n++)
        t[n] = arguments[n];
      return pn(u, ...t);
    },
    pathRefs: function() {
      for (var r = arguments.length, t = new Array(r), n = 0; n < r; n++)
        t[n] = arguments[n];
      return bn(u, ...t);
    },
    point: function() {
      for (var r = arguments.length, t = new Array(r), n = 0; n < r; n++)
        t[n] = arguments[n];
      return Pn(u, ...t);
    },
    pointRef: function() {
      for (var r = arguments.length, t = new Array(r), n = 0; n < r; n++)
        t[n] = arguments[n];
      return yn(u, ...t);
    },
    pointRefs: function() {
      for (var r = arguments.length, t = new Array(r), n = 0; n < r; n++)
        t[n] = arguments[n];
      return On(u, ...t);
    },
    positions: function() {
      for (var r = arguments.length, t = new Array(r), n = 0; n < r; n++)
        t[n] = arguments[n];
      return xn(u, ...t);
    },
    previous: function() {
      for (var r = arguments.length, t = new Array(r), n = 0; n < r; n++)
        t[n] = arguments[n];
      return Nn(u, ...t);
    },
    range: function() {
      for (var r = arguments.length, t = new Array(r), n = 0; n < r; n++)
        t[n] = arguments[n];
      return Sn(u, ...t);
    },
    rangeRef: function() {
      for (var r = arguments.length, t = new Array(r), n = 0; n < r; n++)
        t[n] = arguments[n];
      return jn(u, ...t);
    },
    rangeRefs: function() {
      for (var r = arguments.length, t = new Array(r), n = 0; n < r; n++)
        t[n] = arguments[n];
      return Rn(u, ...t);
    },
    removeNodes: function() {
      for (var r = arguments.length, t = new Array(r), n = 0; n < r; n++)
        t[n] = arguments[n];
      return ra(u, ...t);
    },
    select: function() {
      for (var r = arguments.length, t = new Array(r), n = 0; n < r; n++)
        t[n] = arguments[n];
      return Gn(u, ...t);
    },
    setNodes: function() {
      for (var r = arguments.length, t = new Array(r), n = 0; n < r; n++)
        t[n] = arguments[n];
      return ta(u, ...t);
    },
    setNormalizing: function() {
      for (var r = arguments.length, t = new Array(r), n = 0; n < r; n++)
        t[n] = arguments[n];
      return zn(u, ...t);
    },
    setPoint: function() {
      for (var r = arguments.length, t = new Array(r), n = 0; n < r; n++)
        t[n] = arguments[n];
      return Un(u, ...t);
    },
    setSelection: function() {
      for (var r = arguments.length, t = new Array(r), n = 0; n < r; n++)
        t[n] = arguments[n];
      return Yn(u, ...t);
    },
    splitNodes: function() {
      for (var r = arguments.length, t = new Array(r), n = 0; n < r; n++)
        t[n] = arguments[n];
      return aa(u, ...t);
    },
    start: function() {
      for (var r = arguments.length, t = new Array(r), n = 0; n < r; n++)
        t[n] = arguments[n];
      return In(u, ...t);
    },
    string: function() {
      for (var r = arguments.length, t = new Array(r), n = 0; n < r; n++)
        t[n] = arguments[n];
      return Mn(u, ...t);
    },
    unhangRange: function() {
      for (var r = arguments.length, t = new Array(r), n = 0; n < r; n++)
        t[n] = arguments[n];
      return qn(u, ...t);
    },
    unsetNodes: function() {
      for (var r = arguments.length, t = new Array(r), n = 0; n < r; n++)
        t[n] = arguments[n];
      return sa(u, ...t);
    },
    unwrapNodes: function() {
      for (var r = arguments.length, t = new Array(r), n = 0; n < r; n++)
        t[n] = arguments[n];
      return ia(u, ...t);
    },
    void: function() {
      for (var r = arguments.length, t = new Array(r), n = 0; n < r; n++)
        t[n] = arguments[n];
      return Yt(u, ...t);
    },
    withoutNormalizing: function() {
      for (var r = arguments.length, t = new Array(r), n = 0; n < r; n++)
        t[n] = arguments[n];
      return Ln(u, ...t);
    },
    wrapNodes: function() {
      for (var r = arguments.length, t = new Array(r), n = 0; n < r; n++)
        t[n] = arguments[n];
      return fa(u, ...t);
    },
    shouldMergeNodesRemovePrevNode: function() {
      for (var r = arguments.length, t = new Array(r), n = 0; n < r; n++)
        t[n] = arguments[n];
      return Vn(u, ...t);
    }
  };
  return u;
};
export {
  i as E,
  h as N,
  Ou as O,
  D as P,
  B as R,
  A as T,
  w as a,
  b,
  Da as c,
  H as i
};
