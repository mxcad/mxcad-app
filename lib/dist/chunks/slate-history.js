import { T as d, E as v, O as y, P as w, i as O } from "./slate.js";
var c = {
  /**
   * Check if a value is a `History` object.
   */
  isHistory(e) {
    return O(e) && Array.isArray(e.redos) && Array.isArray(e.undos) && (e.redos.length === 0 || y.isOperationList(e.redos[0].operations)) && (e.undos.length === 0 || y.isOperationList(e.undos[0].operations));
  }
}, p = /* @__PURE__ */ new WeakMap(), g = /* @__PURE__ */ new WeakMap(), u = /* @__PURE__ */ new WeakMap(), n = {
  /**
   * Check if a value is a `HistoryEditor` object.
   */
  isHistoryEditor(e) {
    return c.isHistory(e.history) && v.isEditor(e);
  },
  /**
   * Get the merge flag's current value.
   */
  isMerging(e) {
    return g.get(e);
  },
  /**
   * Get the splitting once flag's current value.
   */
  isSplittingOnce(e) {
    return u.get(e);
  },
  setSplittingOnce(e, t) {
    u.set(e, t);
  },
  /**
   * Get the saving flag's current value.
   */
  isSaving(e) {
    return p.get(e);
  },
  /**
   * Redo to the previous saved state.
   */
  redo(e) {
    e.redo();
  },
  /**
   * Undo to the previous saved state.
   */
  undo(e) {
    e.undo();
  },
  /**
   * Apply a series of changes inside a synchronous `fn`, These operations will
   * be merged into the previous history.
   */
  withMerging(e, t) {
    var o = n.isMerging(e);
    g.set(e, !0), t(), g.set(e, o);
  },
  /**
   * Apply a series of changes inside a synchronous `fn`, ensuring that the first
   * operation starts a new batch in the history. Subsequent operations will be
   * merged as usual.
   */
  withNewBatch(e, t) {
    var o = n.isMerging(e);
    g.set(e, !0), u.set(e, !0), t(), g.set(e, o), u.delete(e);
  },
  /**
   * Apply a series of changes inside a synchronous `fn`, without merging any of
   * the new operations into previous save point in the history.
   */
  withoutMerging(e, t) {
    var o = n.isMerging(e);
    g.set(e, !1), t(), g.set(e, o);
  },
  /**
   * Apply a series of changes inside a synchronous `fn`, without saving any of
   * their operations into the history.
   */
  withoutSaving(e, t) {
    var o = n.isSaving(e);
    p.set(e, !1), t(), p.set(e, o);
  }
}, B = (e) => {
  var t = e, {
    apply: o
  } = t;
  return t.history = {
    undos: [],
    redos: []
  }, t.redo = () => {
    var {
      history: r
    } = t, {
      redos: i
    } = r;
    if (i.length > 0) {
      var s = i[i.length - 1];
      s.selectionBefore && d.setSelection(t, s.selectionBefore), n.withoutSaving(t, () => {
        v.withoutNormalizing(t, () => {
          for (var a of s.operations)
            t.apply(a);
        });
      }), r.redos.pop(), t.writeHistory("undos", s);
    }
  }, t.undo = () => {
    var {
      history: r
    } = t, {
      undos: i
    } = r;
    if (i.length > 0) {
      var s = i[i.length - 1];
      n.withoutSaving(t, () => {
        v.withoutNormalizing(t, () => {
          var a = s.operations.map(y.inverse).reverse();
          for (var l of a)
            t.apply(l);
          s.selectionBefore && d.setSelection(t, s.selectionBefore);
        });
      }), t.writeHistory("redos", s), r.undos.pop();
    }
  }, t.apply = (r) => {
    var {
      operations: i,
      history: s
    } = t, {
      undos: a
    } = s, l = a[a.length - 1], S = l && l.operations[l.operations.length - 1], h = n.isSaving(t), f = n.isMerging(t);
    if (h == null && (h = m(r)), h) {
      if (f == null && (l == null ? f = !1 : i.length !== 0 ? f = !0 : f = H(r, S)), n.isSplittingOnce(t) && (f = !1, n.setSplittingOnce(t, void 0)), l && f)
        l.operations.push(r);
      else {
        var M = {
          operations: [r],
          selectionBefore: t.selection
        };
        t.writeHistory("undos", M);
      }
      for (; a.length > 100; )
        a.shift();
      s.redos = [];
    }
    o(r);
  }, t.writeHistory = (r, i) => {
    t.history[r].push(i);
  }, t;
}, H = (e, t) => !!(t && e.type === "insert_text" && t.type === "insert_text" && e.offset === t.offset + t.text.length && w.equals(e.path, t.path) || t && e.type === "remove_text" && t.type === "remove_text" && e.offset + e.text.length === t.offset && w.equals(e.path, t.path)), m = (e, t) => e.type !== "set_selection";
export {
  B as w
};
