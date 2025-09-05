var Ve = Object.defineProperty, Be = Object.defineProperties;
var Ie = Object.getOwnPropertyDescriptors;
var fe = Object.getOwnPropertySymbols;
var Pe = Object.prototype.hasOwnProperty, He = Object.prototype.propertyIsEnumerable;
var G = (e, t, s) => t in e ? Ve(e, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : e[t] = s, _ = (e, t) => {
  for (var s in t || (t = {}))
    Pe.call(t, s) && G(e, s, t[s]);
  if (fe)
    for (var s of fe(t))
      He.call(t, s) && G(e, s, t[s]);
  return e;
}, L = (e, t) => Be(e, Ie(t));
var Q = (e, t, s) => G(e, typeof t != "symbol" ? t + "" : t, s);
var X = (e, t, s) => new Promise((i, c) => {
  var n = (a) => {
    try {
      l(s.next(a));
    } catch (o) {
      c(o);
    }
  }, r = (a) => {
    try {
      l(s.throw(a));
    } catch (o) {
      c(o);
    }
  }, l = (a) => a.done ? i(a.value) : Promise.resolve(a.value).then(n, r);
  l((s = s.apply(e, t)).next());
});
import { d as E, r as te, c as S, o as k, a as ke, w as N, F as A, b as ne, e as y, n as V, f as z, g as x, h as T, i as se, j as ze, k as Y, l as ae, m as $e, p as re, q as Te, t as Ae, s as pe } from "../vue.js";
var Re = !1, Ue = !0;
function bt(e, t, s) {
  return Array.isArray(e) ? (e.length = Math.max(e.length, t), e.splice(t, 1, s), s) : (e[t] = s, s);
}
function kt(e, t) {
  if (Array.isArray(e)) {
    e.splice(t, 1);
    return;
  }
  delete e[t];
}
/*!
 * helper-js v3.1.6
 * Author: phphe <phphe@outlook.com> (https://github.com/phphe)
 * Homepage: null
 * Released under the MIT License.
 */
function le(e) {
  return Object.prototype.toString.call(e) === "[object Array]";
}
function We(e, t) {
  return e < t ? e : t;
}
function Se(e, t) {
  let s, i = 0;
  for (; (s = e.indexOf(t)) > -1; )
    e.splice(s, 1), i++;
  return i;
}
function Ce(e) {
  return e[e.length - 1];
}
function Ee(e, t) {
  let s = new Set(t);
  const i = {};
  return s.forEach((c) => {
    i[c] = e[c];
  }), i;
}
function Me(e, t, s) {
  e.hasOwnProperty(t) || (e[t] = s);
}
function De(e, t) {
  return Object.keys(t).forEach((s) => {
    Me(e, s, t[s]);
  }), e;
}
function je(e) {
  const t = {};
  return Object.keys(e).forEach((s) => {
    e[s] !== void 0 && (t[s] = e[s]);
  }), t;
}
function O(e, t) {
  let s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  s = De(_({}, s), {
    childrenKey: "children"
  });
  const {
    childrenKey: i
  } = s, c = le(e) ? e : [e];
  class n {
  }
  const r = (l, a, o) => {
    s.reverse && (l = l.slice(), l.reverse());
    const d = l.length;
    for (let p = 0; p < d; p++) {
      const f = l[p], m = s.reverse ? d - p - 1 : p, w = o ? [...o, m] : [];
      s.childFirst && f[i] != null && r(f[i], f, w);
      const B = t(f, m, a, w);
      if (B === !1)
        throw new n();
      if (B === "skip children")
        continue;
      if (B === "skip siblings")
        break;
      s.childFirst || f[i] != null && r(f[i], f, w);
    }
  };
  try {
    r(c, null, le(e) ? [] : null);
  } catch (l) {
    if (!(l instanceof n)) throw l;
  }
}
function qe(e, t) {
  const s = {
    childrenKey: "children"
  }, {
    childrenKey: i,
    nodeHandler: c
  } = s, n = new ie();
  return n.childrenKey = i, O(e, (r, l, a, o) => {
    let d = Object.assign({}, r);
    d[i] && (d[i] = []), c && (d = c(d, {
      oldNode: r,
      index: l,
      parent: a,
      path: o
    })), n.set(o, d);
  }, {
    childrenKey: i
  }), n.data;
}
class ie {
  // data = null;
  constructor() {
    Q(this, "data");
    Q(this, "childrenKey", "children");
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    this.data = t;
  }
  get rootChildren() {
    const {
      childrenKey: t
    } = this, {
      data: s
    } = this;
    return le(s) ? s : s[t];
  }
  iteratePath(t) {
    var s = this;
    let i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return function* () {
      const {
        childrenKey: c,
        rootChildren: n
      } = s;
      if (i.reverse) {
        const r = [...s.iteratePath(t, L(_({}, i), {
          reverse: !1
        }))];
        r.reverse();
        for (const {
          path: l,
          node: a
        } of r)
          yield {
            path: l,
            node: a
          };
      } else {
        let r = [], l = n;
        for (const a of t) {
          const o = [...r, a], d = l[a];
          yield {
            path: o,
            node: d
          }, r = o, l = d[c];
        }
      }
    }();
  }
  getFamily(t) {
    const s = [];
    for (const {
      node: i
    } of this.iteratePath(t))
      s.push(i);
    return s;
  }
  get(t) {
    return Ce(this.getFamily(t));
  }
  getParentAndIndex(t) {
    const s = t.slice(), i = s.pop();
    return {
      parent: this.get(s),
      index: i,
      parentPath: s
    };
  }
  getParent(t) {
    return this.getParentAndIndex(t).parent;
  }
  set(t, s) {
    if (t == null || t.length === 0)
      this.data = s;
    else {
      const {
        childrenKey: i
      } = this;
      let {
        rootChildren: c
      } = this;
      const {
        parent: n,
        index: r
      } = this.getParentAndIndex(t);
      let l;
      t.length === 1 ? (c || (this.data ? this.data[i] = [] : this.data = []), l = c) : (n[i] || (n[i] = []), l = n[i]), l[r] = s;
    }
  }
  delete(t) {
    const {
      childrenKey: s,
      rootChildren: i
    } = this, {
      parent: c,
      index: n
    } = this.getParentAndIndex(t), r = t.length === 1 ? i : c[s], l = r[n];
    return r.splice(n, 1), l;
  }
  walk(t, s) {
    const {
      childrenKey: i,
      data: c
    } = this;
    return O(c, t, i, s);
  }
  clone() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return qe(this.data), je({
      childrenKey: this.childrenKey,
      nodeHandler: t.nodeHandler || void 0
    });
  }
}
function Ze(e, t) {
  return e.classList ? e.classList.contains(t) : new RegExp("(^| )" + t + "( |$)", "gi").test(e.className);
}
function ge(e, t) {
  return getComputedStyle(e)[t];
}
function me(e, t) {
  let s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  s = _({
    start: 0,
    end: e.length - 1,
    maxTimes: 1e3
  }, s);
  let {
    start: i,
    end: c
  } = s;
  const {
    returnNearestIfNoHit: n,
    maxTimes: r
  } = s;
  let l, a;
  i == null && (i = 0, c = e.length - 1);
  let o = 0, d;
  for (; i >= 0 && i <= c; ) {
    if (o >= r)
      throw Error(`binarySearch: loop times is over ${r}, you can increase the limit.`);
    l = Math.floor((c - i) / 2 + i), a = e[l];
    const p = o + 1;
    if (d = t(a, l, p), d > 0)
      c = l - 1;
    else if (d < 0)
      i = l + 1;
    else
      return {
        index: l,
        value: a,
        count: p,
        hit: !0
      };
    o++;
  }
  return n ? {
    index: l,
    value: a,
    count: o + 1,
    hit: !1,
    greater: d > 0
  } : null;
}
/*!
 * @virtual-list/vue
 * Author: phphe <phphe@outlook.com> (https://github.com/phphe)
 * Homepage: https://virtual-list.phphe.com
 * Released under the MIT License.
 */
const Ge = E({
  props: {
    table: Boolean
  }
}), xe = (e, t) => {
  const s = e.__vccOpts || e;
  for (const [i, c] of t)
    s[i] = c;
  return s;
}, Qe = { key: 0 }, Xe = { key: 1 };
function Ye(e, t, s, i, c, n) {
  return e.table ? (k(), S("table", Qe, [
    y(e.$slots, "prepend"),
    ae("tbody", null, [
      y(e.$slots, "default")
    ]),
    y(e.$slots, "append")
  ])) : (k(), S("div", Xe, [
    y(e.$slots, "prepend"),
    y(e.$slots, "default"),
    y(e.$slots, "append")
  ]));
}
const Je = /* @__PURE__ */ xe(Ge, [["render", Ye]]), et = E({
  components: { VirtualListTable: Je },
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
    const t = z(0), s = z(e.firstRender - 1), i = x(
      () => {
        var h;
        return We(s.value, (((h = e.items) == null ? void 0 : h.length) || 1) - 1);
      }
    ), c = z(0), n = x(() => f.value[t.value] ? Z(t.value) : 0), r = x(
      () => f.value.length > 0 ? Z(f.value.length - 1) + Ce(p.value) : 0
    ), l = x(
      () => f.value[i.value] ? r.value - Z(i.value) - p.value[i.value] : 0
    ), a = x(
      () => e.disabled ? {} : { overflow: "auto" }
    ), o = x(() => {
      const h = {
        display: "flex"
      };
      return e.disabled || (e.horizontal ? Object.assign(h, {
        "margin-left": n.value + "px",
        "margin-right": l.value + "px",
        width: r.value - l.value - n.value + "px"
      }) : Object.assign(h, {
        "margin-top": n.value + "px",
        "margin-bottom": l.value + "px"
      })), h["flex-direction"] = e.horizontal ? "row" : "column", e.table && (delete h.display, delete h["flex-direction"]), h;
    }), d = x(
      () => T((e.items || []).map(() => null))
    ), p = x(
      () => (e.items || []).map((h, u) => {
        var g;
        if (d[u] != null)
          return d[u];
        let I = (g = e.itemSize) == null ? void 0 : g.call(e, h, u);
        return I == null && (I = c.value), I;
      })
    ), f = x(() => {
      const h = [];
      return p.value.reduce((u, g) => (h.push(u), u + g), 0), h;
    });
    se(() => e.items, K);
    const m = x(() => {
      if (!e.items || e.disabled)
        return;
      const h = [];
      for (let u = t.value; u <= i.value; u++) {
        const g = e.items[u];
        if (!g)
          break;
        h.push({ item: g, index: u });
      }
      return h;
    }), w = z(), B = z();
    ze(() => X(this, null, function* () {
      K();
      try {
        Fe();
      } catch (h) {
        yield Y(), K();
      }
    }));
    let M;
    function _e() {
      const h = w.value;
      if (!h)
        return;
      const u = q(h);
      M != null && e.buffer - Math.abs(u - M) >= 10 || (M = u, K());
    }
    let D = !1, j = !1;
    function K() {
      return X(this, null, function* () {
        var h;
        if (D) {
          j = !0;
          return;
        }
        if (!e.items || e.disabled)
          return;
        D = !0;
        const u = w.value, g = (h = B.value) == null ? void 0 : h.$el;
        if (!u || !g)
          return;
        c.value || (c.value = Ne()), t.value = Ke(), s.value = Le(), yield Y();
        let I, ue = 0;
        const H = {}, he = e.table ? g.querySelector("tbody").children : g.children;
        for (let b = 0; b < he.length; b++) {
          const v = he[b], F = ge(v, "position");
          if (F && ["absolute", "fixed"].includes(F))
            continue;
          const P = ge(v, "display") !== "none" ? de(v) : 0, R = v.getAttribute("vt-index"), U = R ? parseInt(R) : t.value + ue;
          H[U] = (H[U] || 0) + P, ue++;
        }
        for (const b of Object.keys(H)) {
          const v = parseInt(b);
          d.value[v] !== H[v] && (d.value[v] = H[v], I = !0);
        }
        I && (yield Y()), D = !1, j && (j = !1, K());
        function Ke() {
          const b = q(u) - ce(u) - e.buffer;
          return me(
            f.value,
            (v) => v - b,
            { returnNearestIfNoHit: !0 }
          ).index;
        }
        function Le() {
          const b = q(u) - ce(u) + oe(u) + e.buffer;
          return me(
            f.value,
            (v) => v - b,
            { returnNearestIfNoHit: !0 }
          ).index;
        }
        function Ne() {
          const b = [], v = e.table ? g.querySelector("tbody").children : g.children;
          for (let F = 0; F < v.length; F++) {
            const P = v[F], R = getComputedStyle(P);
            if (["absolute", "fixed"].includes(R.position))
              continue;
            const U = de(P);
            if (b.push(U), b.length >= 10)
              break;
          }
          return b.length === 0 ? 0 : b.reduce((F, P) => F + P, 0) / b.length;
        }
      });
    }
    function oe(h) {
      const u = getComputedStyle(h);
      let g = parseFloat(e.horizontal ? u.width : u.height);
      return u.boxSizing === "border-box" && (e.horizontal ? g = g - parseFloat(u.borderLeftWidth) - parseFloat(u.borderRightWidth) : g = g - parseFloat(u.borderTopWidth) - parseFloat(u.borderBottomWidth)), g;
    }
    function de(h) {
      let u = oe(h);
      const g = getComputedStyle(h);
      return e.horizontal ? u += parseFloat(g.borderLeftWidth) + parseFloat(g.borderRightWidth) + parseFloat(g.marginLeft) + parseFloat(g.marginRight) : u += parseFloat(g.borderTopWidth) + parseFloat(g.borderBottomWidth) + parseFloat(g.marginTop) + parseFloat(g.marginBottom), u = Number.isNaN(u) ? 0 : u, u;
    }
    function q(h) {
      return e.horizontal ? h.scrollLeft : h.scrollTop;
    }
    function ce(h) {
      const u = getComputedStyle(h);
      return e.horizontal ? parseFloat(u.paddingLeft) : parseFloat(u.paddingTop);
    }
    function Z(h) {
      return f.value[h];
    }
    function Fe() {
      const h = w.value;
      new ResizeObserver((u) => {
        for (let g of u)
          if (Ze(g.target, "vtlist")) {
            K();
            break;
          }
      }).observe(h);
    }
    function Oe(h, u) {
      if (e.itemKey) {
        if (typeof e.itemKey == "string" && e.itemKey === "index")
          return u;
        if (typeof e.itemKey == "function")
          return e.itemKey(h, u);
      }
    }
    return {
      listElRef: w,
      listInnerRef: B,
      onscroll: _e,
      listStyle: a,
      listInnerStyle: o,
      visibleItemsInfo: m,
      getItemKey: Oe,
      update: K,
      sizes: p,
      positions: f,
      runtimeSizes: d
    };
  }
});
function tt(e, t, s, i, c, n) {
  const r = te("VirtualListTable");
  return k(), S("div", {
    class: "vtlist",
    ref: "listElRef",
    style: V(e.listStyle),
    onScrollPassive: t[0] || (t[0] = (...l) => e.onscroll && e.onscroll(...l))
  }, [
    ke(r, {
      class: "vtlist-inner",
      ref: "listInnerRef",
      style: V(e.listInnerStyle),
      table: e.table
    }, {
      prepend: N(() => [
        y(e.$slots, "prepend")
      ]),
      append: N(() => [
        y(e.$slots, "append")
      ]),
      default: N(() => [
        e.disabled ? (k(!0), S(A, { key: 0 }, ne(e.items, (l, a) => y(e.$slots, "default", {
          key: e.getItemKey(l, a),
          item: l,
          index: a
        })), 128)) : (k(!0), S(A, { key: 1 }, ne(e.visibleItemsInfo, ({ item: l, index: a }) => y(e.$slots, "default", {
          key: e.getItemKey(l, a),
          item: l,
          index: a
        })), 128))
      ]),
      _: 3
    }, 8, ["style", "table"])
  ], 36);
}
const nt = /* @__PURE__ */ xe(et, [["render", tt]]);
/*!
 * @he-tree/tree-utils v0.1.0-alpha.5
 * Author: phphe <phphe@outlook.com> (https://github.com/phphe)
 * Homepage: null
 * Released under the MIT License.
 */
const $ = "children";
function st(e) {
  const s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i = L(_(_({}, rt), s), {
    data: e,
    stats: null,
    statsFlat: null,
    _statsMap: null,
    initialized: !1,
    init() {
      const {
        data: n,
        childrenKey: r
      } = this, l = new ie([]);
      this._statsMap = /* @__PURE__ */ new Map(), O(n, (o, d, p, f) => {
        const m = this.statHandler(L(_({}, ye()), {
          data: o,
          open: !!this.defaultOpen,
          parent: l.getParent(f),
          children: [],
          level: f.length
        }));
        this._statsMap.set(o, m), l.set(f, m);
      }, {
        childrenKey: r
      });
      const a = [];
      l.walk((o) => {
        a.push(o);
      }), this.stats = this.statsHandler(l.rootChildren), this.statsFlat = this.statsFlatHandler(a), this.initialized = !0;
    },
    getStat(n) {
      let r = this._statsMap.get(n);
      if (!r)
        throw new ve("Stat not found");
      return r;
    },
    has(n) {
      if (n.isStat)
        return this.statsFlat.indexOf(n) > -1;
      try {
        return !!this.getStat(n);
      } catch (r) {
        if (r instanceof ve)
          return !1;
        throw r;
      }
    },
    _getPathByStat(n) {
      if (n == null)
        return [];
      const l = this.getSiblings(n).indexOf(n);
      return [...n.parent ? this._getPathByStat(n.parent) : [], l];
    },
    /**
     * call it after a stat's `checked` changed
     * @param stat
     * @returns return false mean ignored
     */
    afterOneCheckChanged(n) {
      const {
        checked: r
      } = n;
      if (n._ignoreCheckedOnce)
        return delete n._ignoreCheckedOnce, !1;
      const l = (a) => {
        const {
          parent: o
        } = a;
        if (o) {
          let d, p, f;
          for (const w of o.children)
            w.checked ? d = !0 : w.checked === 0 ? f = !0 : p = !0;
          const m = f ? 0 : p ? d ? 0 : !1 : !0;
          o.checked !== m && (this._ignoreCheckedOnce(o), o.checked = m), l(o);
        }
      };
      return l(n), O(n.children, (a) => {
        a.checked !== r && (this._ignoreCheckedOnce(a), a.checked = r);
      }, {
        childrenKey: $
      }), !0;
    },
    _ignoreCheckedOnce(n) {
      n._ignoreCheckedOnce = !0, setTimeout(() => {
        n._ignoreCheckedOnce && (n._ignoreCheckedOnce = !1);
      }, 100);
    },
    isVisible(n) {
      const r = n.isStat ? n : this.getStat(n), l = (a) => !a || !a.hidden && a.open && l(a.parent);
      return !!(!r.hidden && l(r.parent));
    },
    /**
     * call it to update all stats' `checked`
     */
    updateCheck() {
      O(this.stats, (n) => {
        if (n.children && n.children.length > 0) {
          const r = n.children.every((l) => l.checked);
          n.checked !== r && (this._ignoreCheckedOnce(n), n.checked = r);
        }
      }, {
        childFirst: !0,
        childrenKey: $
      });
    },
    getChecked() {
      let n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
      return this.statsFlat.filter((r) => r.checked || n && r.checked === 0);
    },
    getUnchecked() {
      let n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
      return this.statsFlat.filter((r) => n ? !r.checked : r.checked === !1);
    },
    /**
     * open all nodes
     */
    openAll() {
      for (const n of this.statsFlat)
        n.open = !0;
    },
    /**
     * close all nodes
     */
    closeAll() {
      for (const n of this.statsFlat)
        n.open = !1;
    },
    openNodeAndParents(n) {
      const r = n.isStat ? n : this.getStat(n);
      for (const l of this.iterateParent(r, {
        withSelf: !0
      }))
        l.open = !0;
    },
    // actions
    _calcFlatIndex(n, r) {
      let l = n ? this.statsFlat.indexOf(n) + 1 : 0;
      const a = n ? n.children : this.stats;
      for (let o = 0; o < r; o++)
        l += this._count(a[o]);
      return l;
    },
    add(n, r, l) {
      if (this.has(n))
        throw "Can't add because data exists in tree";
      const a = r ? r.children : this.stats;
      l == null && (l = a.length);
      const o = this.statHandler(L(_({}, ye()), {
        open: !!this.defaultOpen,
        data: n,
        parent: r || null,
        children: [],
        level: r ? r.level + 1 : 1
      }));
      this._setPosition(o, r || null, l);
      const d = n[this.childrenKey];
      if (d) {
        const p = d.slice();
        for (const f of p)
          this.add(f, o);
      }
    },
    remove(n) {
      const r = this.getSiblings(n);
      if (r.includes(n)) {
        Se(r, n);
        const l = this._flat(n);
        this.statsFlat.splice(this.statsFlat.indexOf(n), l.length);
        for (const a of l)
          this._statsMap.delete(a.data);
        return this.afterRemoveStat(n), !0;
      }
      return !1;
    },
    getSiblings(n) {
      const {
        parent: r
      } = n;
      return r ? r.children : this.stats;
    },
    /**
     * The node should not exsit.
     * @param node
     * @param parent
     * @param index
     */
    _setPosition(n, r, l) {
      (r ? r.children : this.stats).splice(l, 0, n), n.parent = r, n.level = r ? r.level + 1 : 1;
      const o = this._calcFlatIndex(r, l), d = this._flat(n);
      this.statsFlat.splice(o, 0, ...d);
      for (const p of d)
        this._statsMap.has(p.data) || this._statsMap.set(p.data, p);
      O(n, (p, f, m) => {
        m && (p.level = m.level + 1);
      }, {
        childrenKey: $
      }), this.afterSetStat(n, r, l);
    },
    *iterateParent(n, r) {
      let l = r != null && r.withSelf ? n : n.parent;
      for (; l; )
        yield l, l = l.parent;
    },
    move(n, r, l) {
      if (this.has(n)) {
        if (n.parent === r && this.getSiblings(n).indexOf(n) === l)
          return !1;
        if (n === r)
          throw new Error("Can't move node to it self");
        if (r && n.level < r.level) {
          let a;
          for (const o of this.iterateParent(r))
            if (o.level === n.level) {
              a = o;
              break;
            }
          if (n === a)
            throw new Error("Can't move node to its descendant");
        }
        this.remove(n);
      }
      return this._setPosition(n, r, l), !0;
    },
    /**
     * convert stat and its children to one-dimensional array
     * 转换节点和其后代节点为一维数组
     * @param stat
     * @returns
     */
    _flat(n) {
      const r = [];
      return O(n, (l) => {
        r.push(l);
      }, {
        childrenKey: $
      }), r;
    },
    /**
     * get count of stat and its all children
     * 统计节点和其后代节点数量
     * @param stat
     */
    _count(n) {
      return this._flat(n).length;
    },
    getData(n, r) {
      const {
        childrenKey: l
      } = this, a = new ie([]);
      return a.childrenKey = l, O(r || this.stats, (o, d, p, f) => {
        let m = L(_({}, o.data), {
          [l]: []
        });
        n && (m = n(m)), a.set(f, m);
      }, {
        childrenKey: $
      }), a.data;
    }
  }), c = i;
  return i.noInitialization || c.init(), c;
}
const rt = {
  childrenKey: "children",
  defaultOpen: !1,
  statsHandler(e) {
    return e;
  },
  statsFlatHandler(e) {
    return e;
  },
  afterSetStat(e, t, s) {
  },
  afterRemoveStat(e) {
  },
  statHandler(e) {
    return e;
  }
};
function ye() {
  return {
    isStat: !0,
    hidden: !1,
    checked: !1,
    style: null,
    class: null,
    draggable: null,
    droppable: null
  };
}
class ve extends Error {
  constructor(t) {
    super(t), this.name = "StatNotFoundError";
  }
}
/*!
 * @he-tree/vue v2.9.3
 * Author: phphe <phphe@outlook.com> (https://github.com/phphe)
 * Homepage: https://hetree.phphe.com/
 * Released under the MIT License.
 */
let W = !1;
const lt = () => {
  W = !0, setTimeout(() => {
    W = !1;
  }, 100);
}, it = E({
  // components: {},
  props: ["stat", "rtl", "btt", "indent", "table", "treeLine", "treeLineOffset", "processor"],
  emits: ["open", "close", "check"],
  setup(e, { emit: t }) {
    const s = x(() => ({
      [e.rtl ? "paddingRight" : "paddingLeft"]: e.indent * (e.stat.level - 1) + "px"
    }));
    se(
      () => e.stat.checked,
      (n) => {
        W || e.processor.afterOneCheckChanged(e.stat) && t("check", e.stat);
      }
    ), se(
      () => e.stat.open,
      (n) => {
        W || (t(n ? "open" : "close", e.stat), lt());
      }
    );
    const i = x(() => {
      const n = [], r = (d) => {
        var p;
        if (d.parent) {
          let f = (p = d.parent) == null ? void 0 : p.children.indexOf(d);
          do {
            f++;
            let m = d.parent.children[f];
            if (m) {
              if (!m.hidden)
                return !0;
            } else
              break;
          } while (!0);
        }
        return !1;
      }, l = e.rtl ? "right" : "left", a = e.btt ? "top" : "bottom";
      let o = e.stat;
      for (; o; ) {
        let d = (o.level - 2) * e.indent + e.treeLineOffset;
        const p = r(o), f = () => {
          n.push({
            style: {
              [l]: d + "px",
              [a]: p ? 0 : "50%"
            }
          });
        };
        o === e.stat ? o.level > 1 && f() : p && f(), o = o.parent;
      }
      return n;
    }), c = x(() => {
      let n = (e.stat.level - 2) * e.indent + e.treeLineOffset;
      return {
        [e.rtl ? "right" : "left"]: n + "px"
      };
    });
    return { indentStyle: s, vLines: i, hLineStyle: c };
  }
  // data() {
  //   return {}
  // },
  // computed: {},
  // watch: {},
  // methods: {},
  // created() {},
  // mounted() {}
}), we = (e, t) => {
  const s = e.__vccOpts || e;
  for (const [i, c] of t)
    s[i] = c;
  return s;
}, at = { class: "tree-node-inner" }, ot = {
  key: 1,
  class: "tree-node",
  ref: "el"
};
function dt(e, t, s, i, c, n) {
  return e.table ? (k(), S("tr", ot, [
    y(e.$slots, "default", { indentStyle: e.indentStyle })
  ], 512)) : (k(), S("div", {
    key: 0,
    class: re(["tree-node", { "tree-node--with-tree-line": e.treeLine }]),
    style: V(e.indentStyle),
    ref: "el"
  }, [
    e.treeLine ? (k(), S(A, { key: 0 }, [
      (k(!0), S(A, null, ne(e.vLines, (r) => (k(), S("div", {
        class: "tree-line tree-vline",
        style: V(r.style)
      }, null, 4))), 256)),
      e.stat.level > 1 ? (k(), S("div", {
        key: 0,
        class: "tree-line tree-hline",
        style: V(e.hLineStyle)
      }, null, 4)) : pe("", !0)
    ], 64)) : pe("", !0),
    ae("div", at, [
      y(e.$slots, "default", { indentStyle: e.indentStyle })
    ])
  ], 6));
}
const ct = /* @__PURE__ */ we(it, [["render", dt]]);
function ut(e, t = {}) {
  const s = L(_({}, t), {
    statHandler(i) {
      return this._statHandler2 && (i = this._statHandler2(i)), J(t.statHandler, T(i));
    },
    statsHandler(i) {
      return J(t.statsHandler, T(i));
    },
    statsFlatHandler(i) {
      return J(t.statsFlatHandler, T(i));
    }
  });
  return st(e, s);
}
function J(e, t) {
  return e ? e(t) : t;
}
const ht = E({
  components: { VirtualList: nt, TreeNode: ct },
  props: {
    // for vue2
    value: { required: Re, type: Array },
    // for vue3
    modelValue: { required: Ue, type: Array },
    updateBehavior: {
      type: String,
      default: "modify"
    },
    processor: {
      type: Object,
      default: () => ut([], {
        noInitialization: !0
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
    virtualization: { type: Boolean, default: !1 },
    /**
     * Render count for virtual list at start. 虚拟列表初始渲染数量.
     */
    virtualizationPrerenderCount: { type: Number, default: 20 },
    /**
     * Open all nodes by default. 默认打开所有节点.
     */
    defaultOpen: { type: Boolean, default: !0 },
    statHandler: { type: Function },
    /**
     * From right to left. 由右向左显示.
     */
    rtl: { type: Boolean, default: !1 },
    /**
     * From bottom to top. 由下向上显示
     */
    btt: { type: Boolean, default: !1 },
    /**
     * Display as table
     */
    table: { type: Boolean, default: !1 },
    watermark: { type: Boolean, default: !1 },
    nodeKey: {
      type: [String, Function],
      default: "index"
    },
    treeLine: { type: Boolean, default: !1 },
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
      dragOvering: !1,
      placeholderData: {},
      placeholderColspan: 1,
      batchUpdateWaiting: !1,
      self: this,
      _ignoreValueChangeOnce: !1
    };
  },
  computed: {
    valueComputed() {
      return this.modelValue || [];
    },
    visibleStats() {
      const { statsFlat: e, isVisible: t } = this;
      let s = e;
      return this.btt && (s = s.slice(), s.reverse()), s.filter((i) => t(i));
    },
    rootChildren() {
      return this.stats;
    }
  },
  methods: {
    _emitValue(e) {
      this.$emit("update:modelValue", e);
    },
    /**
     * private method
     * @param value
     */
    _updateValue(e) {
      return this.updateBehavior === "disabled" ? !1 : (e !== this.valueComputed && (this._ignoreValueChangeOnce = !0), this._emitValue(e), !0);
    },
    getStat: ee(
      C("getStat")
    ),
    has: ee(C("has")),
    updateCheck: C(
      "updateCheck"
    ),
    getChecked: C(
      "getChecked"
    ),
    getUnchecked: C(
      "getUnchecked"
    ),
    openAll: C("openAll"),
    closeAll: C("closeAll"),
    openNodeAndParents: C(
      "openNodeAndParents"
    ),
    isVisible: C("isVisible"),
    move: be("move"),
    add: ee(
      be("add")
    ),
    addMulti(e, t, s) {
      this.batchUpdate(() => {
        let i = s;
        for (const c of e)
          this.add(c, t, i), i != null && i++;
      });
    },
    remove: C("remove"),
    removeMulti(e) {
      let t = [...e];
      this.batchUpdate(() => {
        for (const s of t)
          this.remove(s);
      });
    },
    iterateParent: C(
      "iterateParent"
    ),
    getSiblings: C(
      "getSiblings"
    ),
    getData: C("getData"),
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
      this.batchUpdateWaiting = !0;
      const s = e();
      return this.batchUpdateWaiting = t, s;
    }
  },
  watch: {
    processor: {
      immediate: !0,
      handler(e) {
        if (e) {
          const t = (s) => {
            if (s) {
              const { childrenKey: i } = this;
              return s[i] || (s[i] = []), s[i];
            } else
              return this.valueComputed;
          };
          e._statHandler2 = this.statHandler ? (s) => s.data === this.placeholderData ? s : this.statHandler(s) : null, e.afterSetStat = (s, i, c) => {
            const { childrenKey: n, updateBehavior: r } = this;
            let l = this.valueComputed;
            if (r === "new") {
              if (this.batchUpdateWaiting)
                return;
              l = this.getData();
            } else if (r === "modify") {
              const a = t(i == null ? void 0 : i.data);
              a.includes(s.data) || a.splice(c, 0, s.data);
            }
            this.batchUpdateWaiting || this._updateValue(l);
          }, e.afterRemoveStat = (s) => {
            var i;
            const { childrenKey: c, updateBehavior: n } = this;
            let r = this.valueComputed;
            if (n === "new") {
              if (this.batchUpdateWaiting)
                return;
              r = this.getData();
            } else if (n === "modify") {
              const l = t((i = s.parent) == null ? void 0 : i.data);
              Se(l, s.data);
            }
            this.batchUpdateWaiting || this._updateValue(r);
          };
        }
        e.initialized || (e.data = this.valueComputed, Object.assign(
          e,
          Ee(this, ["childrenKey", "defaultOpen"])
        ), e.init(), e.updateCheck()), this.stats = e.stats, this.statsFlat = e.statsFlat, e.data !== this.valueComputed && this._updateValue(e.data);
      }
    },
    valueComputed: {
      handler(e) {
        if (this.dragOvering || this.dragNode || this._ignoreValueChangeOnce)
          this._ignoreValueChangeOnce = !1;
        else {
          const { processor: t } = this;
          t.data = e, t.init(), this.stats = t.stats, this.statsFlat = t.statsFlat;
        }
      }
    }
  },
  created() {
  },
  mounted() {
    typeof window < "u" && (this.watermark === !1 && (window._heTreeWatermarkDisabled = !0), this.watermark && !window._heTreeWatermarkDisabled && (window._heTreeWatermark || (window._heTreeWatermark = !0, console.log(
      "%c[he-tree] Vue tree component:  https://hetree.phphe.com",
      "color:#0075ff; font-size:14px;"
    ))));
  }
});
function C(e) {
  return function(...t) {
    return this.processor[e](...t);
  };
}
function be(e) {
  return function(...t) {
    return this.batchUpdate(() => this.processor[e](...t));
  };
}
function ee(e) {
  return function(t, ...s) {
    return t && (t = T(t)), e.call(this, t, ...s);
  };
}
const ft = {
  key: 0,
  class: "drag-placeholder he-tree-drag-placeholder"
}, pt = ["colspan"], gt = { class: "drag-placeholder he-tree-drag-placeholder" };
function mt(e, t, s, i, c, n) {
  const r = te("TreeNode"), l = te("VirtualList");
  return k(), $e(l, {
    class: re(["he-tree", {
      "he-tree--rtl rtl": e.rtl,
      "he-tree--drag-overing drag-overing": e.dragOvering
    }]),
    ref: "vtlist",
    items: e.visibleStats,
    disabled: !e.virtualization,
    table: e.table,
    itemKey: e.nodeKey
  }, {
    prepend: N(() => [
      y(e.$slots, "prepend", { tree: e.self })
    ]),
    default: N(({ item: a, index: o }) => [
      ke(r, {
        "vt-index": o,
        class: re([
          a.class,
          {
            "drag-placeholder-wrapper": a.data === e.placeholderData,
            "dragging-node": a === e.dragNode
          }
        ]),
        style: V(a.style),
        stat: a,
        rtl: e.rtl,
        btt: e.btt,
        indent: e.indent,
        table: e.table,
        treeLine: e.treeLine,
        treeLineOffset: e.treeLineOffset,
        processor: e.processor,
        onClick: (d) => e.$emit("click:node", a),
        onOpen: t[0] || (t[0] = (d) => e.$emit("open:node", d)),
        onClose: t[1] || (t[1] = (d) => e.$emit("close:node", d)),
        onCheck: t[2] || (t[2] = (d) => e.$emit("check:node", d))
      }, {
        default: N(({ indentStyle: d }) => [
          a.data === e.placeholderData ? (k(), S(A, { key: 0 }, [
            e.table ? (k(), S("td", {
              key: 1,
              style: V(d),
              colspan: e.placeholderColspan
            }, [
              ae("div", gt, [
                y(e.$slots, "placeholder", { tree: e.self })
              ])
            ], 12, pt)) : (k(), S("div", ft, [
              y(e.$slots, "placeholder", { tree: e.self })
            ]))
          ], 64)) : y(e.$slots, "default", {
            key: 1,
            node: a.data,
            stat: a,
            indentStyle: d,
            tree: e.self
          }, () => [
            Te(Ae(a.data[e.textKey]), 1)
          ])
        ]),
        _: 2
      }, 1032, ["vt-index", "class", "style", "stat", "rtl", "btt", "indent", "table", "treeLine", "treeLineOffset", "processor", "onClick"])
    ]),
    append: N(() => [
      y(e.$slots, "append", { tree: e.self })
    ]),
    _: 3
  }, 8, ["class", "items", "disabled", "table", "itemKey"]);
}
const St = /* @__PURE__ */ we(ht, [["render", mt]]);
export {
  St as K,
  kt as d,
  Re as i,
  bt as s
};
