import { c as Mr, g as Ur } from "./color.js";
var ar = { exports: {} };
/*!
 * jQuery JavaScript Library v3.7.1
 * https://jquery.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2023-08-28T13:37Z
 */
(function(ve) {
  (function(M, Be) {
    ve.exports = M.document ? Be(M, !0) : function(_e) {
      if (!_e.document)
        throw new Error("jQuery requires a window with a document");
      return Be(_e);
    };
  })(typeof window != "undefined" ? window : Mr, function(M, Be) {
    var _e = [], S = Object.getPrototypeOf, A = _e.slice, E = _e.flat ? function(e) {
      return _e.flat.call(e);
    } : function(e) {
      return _e.concat.apply([], e);
    }, x = _e.push, l = _e.indexOf, a = {}, c = a.toString, p = a.hasOwnProperty, o = p.toString, f = o.call(Object), d = {}, g = function(t) {
      return typeof t == "function" && typeof t.nodeType != "number" && typeof t.item != "function";
    }, w = function(t) {
      return t != null && t === t.window;
    }, D = M.document, P = {
      type: !0,
      src: !0,
      nonce: !0,
      noModule: !0
    };
    function Y(e, t, r) {
      r = r || D;
      var i, s, u = r.createElement("script");
      if (u.text = e, t)
        for (i in P)
          s = t[i] || t.getAttribute && t.getAttribute(i), s && u.setAttribute(i, s);
      r.head.appendChild(u).parentNode.removeChild(u);
    }
    function Q(e) {
      return e == null ? e + "" : typeof e == "object" || typeof e == "function" ? a[c.call(e)] || "object" : typeof e;
    }
    var k = "3.7.1", C = /HTML$/i, n = function(e, t) {
      return new n.fn.init(e, t);
    };
    n.fn = n.prototype = {
      // The current version of jQuery being used
      jquery: k,
      constructor: n,
      // The default length of a jQuery object is 0
      length: 0,
      toArray: function() {
        return A.call(this);
      },
      // Get the Nth element in the matched element set OR
      // Get the whole matched element set as a clean array
      get: function(e) {
        return e == null ? A.call(this) : e < 0 ? this[e + this.length] : this[e];
      },
      // Take an array of elements and push it onto the stack
      // (returning the new matched element set)
      pushStack: function(e) {
        var t = n.merge(this.constructor(), e);
        return t.prevObject = this, t;
      },
      // Execute a callback for every element in the matched set.
      each: function(e) {
        return n.each(this, e);
      },
      map: function(e) {
        return this.pushStack(n.map(this, function(t, r) {
          return e.call(t, r, t);
        }));
      },
      slice: function() {
        return this.pushStack(A.apply(this, arguments));
      },
      first: function() {
        return this.eq(0);
      },
      last: function() {
        return this.eq(-1);
      },
      even: function() {
        return this.pushStack(n.grep(this, function(e, t) {
          return (t + 1) % 2;
        }));
      },
      odd: function() {
        return this.pushStack(n.grep(this, function(e, t) {
          return t % 2;
        }));
      },
      eq: function(e) {
        var t = this.length, r = +e + (e < 0 ? t : 0);
        return this.pushStack(r >= 0 && r < t ? [this[r]] : []);
      },
      end: function() {
        return this.prevObject || this.constructor();
      },
      // For internal use only.
      // Behaves like an Array's method, not like a jQuery method.
      push: x,
      sort: _e.sort,
      splice: _e.splice
    }, n.extend = n.fn.extend = function() {
      var e, t, r, i, s, u, h = arguments[0] || {}, y = 1, v = arguments.length, T = !1;
      for (typeof h == "boolean" && (T = h, h = arguments[y] || {}, y++), typeof h != "object" && !g(h) && (h = {}), y === v && (h = this, y--); y < v; y++)
        if ((e = arguments[y]) != null)
          for (t in e)
            i = e[t], !(t === "__proto__" || h === i) && (T && i && (n.isPlainObject(i) || (s = Array.isArray(i))) ? (r = h[t], s && !Array.isArray(r) ? u = [] : !s && !n.isPlainObject(r) ? u = {} : u = r, s = !1, h[t] = n.extend(T, u, i)) : i !== void 0 && (h[t] = i));
      return h;
    }, n.extend({
      // Unique for each copy of jQuery on the page
      expando: "jQuery" + (k + Math.random()).replace(/\D/g, ""),
      // Assume jQuery is ready without the ready module
      isReady: !0,
      error: function(e) {
        throw new Error(e);
      },
      noop: function() {
      },
      isPlainObject: function(e) {
        var t, r;
        return !e || c.call(e) !== "[object Object]" ? !1 : (t = S(e), t ? (r = p.call(t, "constructor") && t.constructor, typeof r == "function" && o.call(r) === f) : !0);
      },
      isEmptyObject: function(e) {
        var t;
        for (t in e)
          return !1;
        return !0;
      },
      // Evaluates a script in a provided context; falls back to the global one
      // if not specified.
      globalEval: function(e, t, r) {
        Y(e, { nonce: t && t.nonce }, r);
      },
      each: function(e, t) {
        var r, i = 0;
        if (_(e))
          for (r = e.length; i < r && t.call(e[i], i, e[i]) !== !1; i++)
            ;
        else
          for (i in e)
            if (t.call(e[i], i, e[i]) === !1)
              break;
        return e;
      },
      // Retrieve the text value of an array of DOM nodes
      text: function(e) {
        var t, r = "", i = 0, s = e.nodeType;
        if (!s)
          for (; t = e[i++]; )
            r += n.text(t);
        return s === 1 || s === 11 ? e.textContent : s === 9 ? e.documentElement.textContent : s === 3 || s === 4 ? e.nodeValue : r;
      },
      // results is for internal usage only
      makeArray: function(e, t) {
        var r = t || [];
        return e != null && (_(Object(e)) ? n.merge(
          r,
          typeof e == "string" ? [e] : e
        ) : x.call(r, e)), r;
      },
      inArray: function(e, t, r) {
        return t == null ? -1 : l.call(t, e, r);
      },
      isXMLDoc: function(e) {
        var t = e && e.namespaceURI, r = e && (e.ownerDocument || e).documentElement;
        return !C.test(t || r && r.nodeName || "HTML");
      },
      // Support: Android <=4.0 only, PhantomJS 1 only
      // push.apply(_, arraylike) throws on ancient WebKit
      merge: function(e, t) {
        for (var r = +t.length, i = 0, s = e.length; i < r; i++)
          e[s++] = t[i];
        return e.length = s, e;
      },
      grep: function(e, t, r) {
        for (var i, s = [], u = 0, h = e.length, y = !r; u < h; u++)
          i = !t(e[u], u), i !== y && s.push(e[u]);
        return s;
      },
      // arg is for internal usage only
      map: function(e, t, r) {
        var i, s, u = 0, h = [];
        if (_(e))
          for (i = e.length; u < i; u++)
            s = t(e[u], u, r), s != null && h.push(s);
        else
          for (u in e)
            s = t(e[u], u, r), s != null && h.push(s);
        return E(h);
      },
      // A global GUID counter for objects
      guid: 1,
      // jQuery.support is not used in Core but other projects attach their
      // properties to it so it needs to exist.
      support: d
    }), typeof Symbol == "function" && (n.fn[Symbol.iterator] = _e[Symbol.iterator]), n.each(
      "Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),
      function(e, t) {
        a["[object " + t + "]"] = t.toLowerCase();
      }
    );
    function _(e) {
      var t = !!e && "length" in e && e.length, r = Q(e);
      return g(e) || w(e) ? !1 : r === "array" || t === 0 || typeof t == "number" && t > 0 && t - 1 in e;
    }
    function O(e, t) {
      return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
    }
    var N = _e.pop, le = _e.sort, Oe = _e.splice, X = "[\\x20\\t\\r\\n\\f]", Re = new RegExp(
      "^" + X + "+|((?:^|[^\\\\])(?:\\\\.)*)" + X + "+$",
      "g"
    );
    n.contains = function(e, t) {
      var r = t && t.parentNode;
      return e === r || !!(r && r.nodeType === 1 && // Support: IE 9 - 11+
      // IE doesn't have `contains` on SVG.
      (e.contains ? e.contains(r) : e.compareDocumentPosition && e.compareDocumentPosition(r) & 16));
    };
    var Pe = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;
    function ft(e, t) {
      return t ? e === "\0" ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e;
    }
    n.escapeSelector = function(e) {
      return (e + "").replace(Pe, ft);
    };
    var ke = D, ct = x;
    (function() {
      var e, t, r, i, s, u = ct, h, y, v, T, L, j = n.expando, F = 0, U = 0, te = pn(), fe = pn(), oe = pn(), Fe = pn(), De = function(m, b) {
        return m === b && (s = !0), 0;
      }, Ze = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", et = "(?:\\\\[\\da-fA-F]{1,6}" + X + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+", ue = "\\[" + X + "*(" + et + ")(?:" + X + // Operator (capture 2)
      "*([*^$|!~]?=)" + X + // "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
      `*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(` + et + "))|)" + X + "*\\]", Ct = ":(" + et + `)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|` + ue + ")*)|.*)\\)|)", ce = new RegExp(X + "+", "g"), Te = new RegExp("^" + X + "*," + X + "*"), Kt = new RegExp("^" + X + "*([>+~]|" + X + ")" + X + "*"), Ln = new RegExp(X + "|>"), tt = new RegExp(Ct), Zt = new RegExp("^" + et + "$"), nt = {
        ID: new RegExp("^#(" + et + ")"),
        CLASS: new RegExp("^\\.(" + et + ")"),
        TAG: new RegExp("^(" + et + "|[*])"),
        ATTR: new RegExp("^" + ue),
        PSEUDO: new RegExp("^" + Ct),
        CHILD: new RegExp(
          "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + X + "*(even|odd|(([+-]|)(\\d*)n|)" + X + "*(?:([+-]|)" + X + "*(\\d+)|))" + X + "*\\)|)",
          "i"
        ),
        bool: new RegExp("^(?:" + Ze + ")$", "i"),
        // For use in libraries implementing .is()
        // We use this for POS matching in `select`
        needsContext: new RegExp("^" + X + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + X + "*((?:-\\d)?\\d*)" + X + "*\\)|)(?=[^-]|$)", "i")
      }, vt = /^(?:input|select|textarea|button)$/i, xt = /^h\d$/i, Ge = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, In = /[+~]/, st = new RegExp("\\\\[\\da-fA-F]{1,6}" + X + "?|\\\\([^\\r\\n\\f])", "g"), ut = function(m, b) {
        var R = "0x" + m.slice(1) - 65536;
        return b || (R < 0 ? String.fromCharCode(R + 65536) : String.fromCharCode(R >> 10 | 55296, R & 1023 | 56320));
      }, qr = function() {
        yt();
      }, Nr = mn(
        function(m) {
          return m.disabled === !0 && O(m, "fieldset");
        },
        { dir: "parentNode", next: "legend" }
      );
      function Lr() {
        try {
          return h.activeElement;
        } catch (m) {
        }
      }
      try {
        u.apply(
          _e = A.call(ke.childNodes),
          ke.childNodes
        ), _e[ke.childNodes.length].nodeType;
      } catch (m) {
        u = {
          apply: function(b, R) {
            ct.apply(b, A.call(R));
          },
          call: function(b) {
            ct.apply(b, A.call(arguments, 1));
          }
        };
      }
      function pe(m, b, R, q) {
        var I, z, W, G, B, ae, Z, ne = b && b.ownerDocument, se = b ? b.nodeType : 9;
        if (R = R || [], typeof m != "string" || !m || se !== 1 && se !== 9 && se !== 11)
          return R;
        if (!q && (yt(b), b = b || h, v)) {
          if (se !== 11 && (B = Ge.exec(m)))
            if (I = B[1]) {
              if (se === 9)
                if (W = b.getElementById(I)) {
                  if (W.id === I)
                    return u.call(R, W), R;
                } else
                  return R;
              else if (ne && (W = ne.getElementById(I)) && pe.contains(b, W) && W.id === I)
                return u.call(R, W), R;
            } else {
              if (B[2])
                return u.apply(R, b.getElementsByTagName(m)), R;
              if ((I = B[3]) && b.getElementsByClassName)
                return u.apply(R, b.getElementsByClassName(I)), R;
            }
          if (!Fe[m + " "] && (!T || !T.test(m))) {
            if (Z = m, ne = b, se === 1 && (Ln.test(m) || Kt.test(m))) {
              for (ne = In.test(m) && jn(b.parentNode) || b, (ne != b || !d.scope) && ((G = b.getAttribute("id")) ? G = n.escapeSelector(G) : b.setAttribute("id", G = j)), ae = en(m), z = ae.length; z--; )
                ae[z] = (G ? "#" + G : ":scope") + " " + gn(ae[z]);
              Z = ae.join(",");
            }
            try {
              return u.apply(
                R,
                ne.querySelectorAll(Z)
              ), R;
            } catch (K) {
              Fe(m, !0);
            } finally {
              G === j && b.removeAttribute("id");
            }
          }
        }
        return or(m.replace(Re, "$1"), b, R, q);
      }
      function pn() {
        var m = [];
        function b(R, q) {
          return m.push(R + " ") > t.cacheLength && delete b[m.shift()], b[R + " "] = q;
        }
        return b;
      }
      function Ye(m) {
        return m[j] = !0, m;
      }
      function Nt(m) {
        var b = h.createElement("fieldset");
        try {
          return !!m(b);
        } catch (R) {
          return !1;
        } finally {
          b.parentNode && b.parentNode.removeChild(b), b = null;
        }
      }
      function Ir(m) {
        return function(b) {
          return O(b, "input") && b.type === m;
        };
      }
      function jr(m) {
        return function(b) {
          return (O(b, "input") || O(b, "button")) && b.type === m;
        };
      }
      function rr(m) {
        return function(b) {
          return "form" in b ? b.parentNode && b.disabled === !1 ? "label" in b ? "label" in b.parentNode ? b.parentNode.disabled === m : b.disabled === m : b.isDisabled === m || // Where there is no isDisabled, check manually
          b.isDisabled !== !m && Nr(b) === m : b.disabled === m : "label" in b ? b.disabled === m : !1;
        };
      }
      function Et(m) {
        return Ye(function(b) {
          return b = +b, Ye(function(R, q) {
            for (var I, z = m([], R.length, b), W = z.length; W--; )
              R[I = z[W]] && (R[I] = !(q[I] = R[I]));
          });
        });
      }
      function jn(m) {
        return m && typeof m.getElementsByTagName != "undefined" && m;
      }
      function yt(m) {
        var b, R = m ? m.ownerDocument || m : ke;
        return R == h || R.nodeType !== 9 || !R.documentElement || (h = R, y = h.documentElement, v = !n.isXMLDoc(h), L = y.matches || y.webkitMatchesSelector || y.msMatchesSelector, y.msMatchesSelector && // Support: IE 11+, Edge 17 - 18+
        // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
        // two documents; shallow comparisons work.
        // eslint-disable-next-line eqeqeq
        ke != h && (b = h.defaultView) && b.top !== b && b.addEventListener("unload", qr), d.getById = Nt(function(q) {
          return y.appendChild(q).id = n.expando, !h.getElementsByName || !h.getElementsByName(n.expando).length;
        }), d.disconnectedMatch = Nt(function(q) {
          return L.call(q, "*");
        }), d.scope = Nt(function() {
          return h.querySelectorAll(":scope");
        }), d.cssHas = Nt(function() {
          try {
            return h.querySelector(":has(*,:jqfake)"), !1;
          } catch (q) {
            return !0;
          }
        }), d.getById ? (t.filter.ID = function(q) {
          var I = q.replace(st, ut);
          return function(z) {
            return z.getAttribute("id") === I;
          };
        }, t.find.ID = function(q, I) {
          if (typeof I.getElementById != "undefined" && v) {
            var z = I.getElementById(q);
            return z ? [z] : [];
          }
        }) : (t.filter.ID = function(q) {
          var I = q.replace(st, ut);
          return function(z) {
            var W = typeof z.getAttributeNode != "undefined" && z.getAttributeNode("id");
            return W && W.value === I;
          };
        }, t.find.ID = function(q, I) {
          if (typeof I.getElementById != "undefined" && v) {
            var z, W, G, B = I.getElementById(q);
            if (B) {
              if (z = B.getAttributeNode("id"), z && z.value === q)
                return [B];
              for (G = I.getElementsByName(q), W = 0; B = G[W++]; )
                if (z = B.getAttributeNode("id"), z && z.value === q)
                  return [B];
            }
            return [];
          }
        }), t.find.TAG = function(q, I) {
          return typeof I.getElementsByTagName != "undefined" ? I.getElementsByTagName(q) : I.querySelectorAll(q);
        }, t.find.CLASS = function(q, I) {
          if (typeof I.getElementsByClassName != "undefined" && v)
            return I.getElementsByClassName(q);
        }, T = [], Nt(function(q) {
          var I;
          y.appendChild(q).innerHTML = "<a id='" + j + "' href='' disabled='disabled'></a><select id='" + j + "-\r\\' disabled='disabled'><option selected=''></option></select>", q.querySelectorAll("[selected]").length || T.push("\\[" + X + "*(?:value|" + Ze + ")"), q.querySelectorAll("[id~=" + j + "-]").length || T.push("~="), q.querySelectorAll("a#" + j + "+*").length || T.push(".#.+[+~]"), q.querySelectorAll(":checked").length || T.push(":checked"), I = h.createElement("input"), I.setAttribute("type", "hidden"), q.appendChild(I).setAttribute("name", "D"), y.appendChild(q).disabled = !0, q.querySelectorAll(":disabled").length !== 2 && T.push(":enabled", ":disabled"), I = h.createElement("input"), I.setAttribute("name", ""), q.appendChild(I), q.querySelectorAll("[name='']").length || T.push("\\[" + X + "*name" + X + "*=" + X + `*(?:''|"")`);
        }), d.cssHas || T.push(":has"), T = T.length && new RegExp(T.join("|")), De = function(q, I) {
          if (q === I)
            return s = !0, 0;
          var z = !q.compareDocumentPosition - !I.compareDocumentPosition;
          return z || (z = (q.ownerDocument || q) == (I.ownerDocument || I) ? q.compareDocumentPosition(I) : (
            // Otherwise we know they are disconnected
            1
          ), z & 1 || !d.sortDetached && I.compareDocumentPosition(q) === z ? q === h || q.ownerDocument == ke && pe.contains(ke, q) ? -1 : I === h || I.ownerDocument == ke && pe.contains(ke, I) ? 1 : i ? l.call(i, q) - l.call(i, I) : 0 : z & 4 ? -1 : 1);
        }), h;
      }
      pe.matches = function(m, b) {
        return pe(m, null, null, b);
      }, pe.matchesSelector = function(m, b) {
        if (yt(m), v && !Fe[b + " "] && (!T || !T.test(b)))
          try {
            var R = L.call(m, b);
            if (R || d.disconnectedMatch || // As well, disconnected nodes are said to be in a document
            // fragment in IE 9
            m.document && m.document.nodeType !== 11)
              return R;
          } catch (q) {
            Fe(b, !0);
          }
        return pe(b, h, null, [m]).length > 0;
      }, pe.contains = function(m, b) {
        return (m.ownerDocument || m) != h && yt(m), n.contains(m, b);
      }, pe.attr = function(m, b) {
        (m.ownerDocument || m) != h && yt(m);
        var R = t.attrHandle[b.toLowerCase()], q = R && p.call(t.attrHandle, b.toLowerCase()) ? R(m, b, !v) : void 0;
        return q !== void 0 ? q : m.getAttribute(b);
      }, pe.error = function(m) {
        throw new Error("Syntax error, unrecognized expression: " + m);
      }, n.uniqueSort = function(m) {
        var b, R = [], q = 0, I = 0;
        if (s = !d.sortStable, i = !d.sortStable && A.call(m, 0), le.call(m, De), s) {
          for (; b = m[I++]; )
            b === m[I] && (q = R.push(I));
          for (; q--; )
            Oe.call(m, R[q], 1);
        }
        return i = null, m;
      }, n.fn.uniqueSort = function() {
        return this.pushStack(n.uniqueSort(A.apply(this)));
      }, t = n.expr = {
        // Can be adjusted by the user
        cacheLength: 50,
        createPseudo: Ye,
        match: nt,
        attrHandle: {},
        find: {},
        relative: {
          ">": { dir: "parentNode", first: !0 },
          " ": { dir: "parentNode" },
          "+": { dir: "previousSibling", first: !0 },
          "~": { dir: "previousSibling" }
        },
        preFilter: {
          ATTR: function(m) {
            return m[1] = m[1].replace(st, ut), m[3] = (m[3] || m[4] || m[5] || "").replace(st, ut), m[2] === "~=" && (m[3] = " " + m[3] + " "), m.slice(0, 4);
          },
          CHILD: function(m) {
            return m[1] = m[1].toLowerCase(), m[1].slice(0, 3) === "nth" ? (m[3] || pe.error(m[0]), m[4] = +(m[4] ? m[5] + (m[6] || 1) : 2 * (m[3] === "even" || m[3] === "odd")), m[5] = +(m[7] + m[8] || m[3] === "odd")) : m[3] && pe.error(m[0]), m;
          },
          PSEUDO: function(m) {
            var b, R = !m[6] && m[2];
            return nt.CHILD.test(m[0]) ? null : (m[3] ? m[2] = m[4] || m[5] || "" : R && tt.test(R) && // Get excess from tokenize (recursively)
            (b = en(R, !0)) && // advance to the next closing parenthesis
            (b = R.indexOf(")", R.length - b) - R.length) && (m[0] = m[0].slice(0, b), m[2] = R.slice(0, b)), m.slice(0, 3));
          }
        },
        filter: {
          TAG: function(m) {
            var b = m.replace(st, ut).toLowerCase();
            return m === "*" ? function() {
              return !0;
            } : function(R) {
              return O(R, b);
            };
          },
          CLASS: function(m) {
            var b = te[m + " "];
            return b || (b = new RegExp("(^|" + X + ")" + m + "(" + X + "|$)")) && te(m, function(R) {
              return b.test(
                typeof R.className == "string" && R.className || typeof R.getAttribute != "undefined" && R.getAttribute("class") || ""
              );
            });
          },
          ATTR: function(m, b, R) {
            return function(q) {
              var I = pe.attr(q, m);
              return I == null ? b === "!=" : b ? (I += "", b === "=" ? I === R : b === "!=" ? I !== R : b === "^=" ? R && I.indexOf(R) === 0 : b === "*=" ? R && I.indexOf(R) > -1 : b === "$=" ? R && I.slice(-R.length) === R : b === "~=" ? (" " + I.replace(ce, " ") + " ").indexOf(R) > -1 : b === "|=" ? I === R || I.slice(0, R.length + 1) === R + "-" : !1) : !0;
            };
          },
          CHILD: function(m, b, R, q, I) {
            var z = m.slice(0, 3) !== "nth", W = m.slice(-4) !== "last", G = b === "of-type";
            return q === 1 && I === 0 ? (
              // Shortcut for :nth-*(n)
              function(B) {
                return !!B.parentNode;
              }
            ) : function(B, ae, Z) {
              var ne, se, K, me, $e, je = z !== W ? "nextSibling" : "previousSibling", Xe = B.parentNode, rt = G && B.nodeName.toLowerCase(), Lt = !Z && !G, He = !1;
              if (Xe) {
                if (z) {
                  for (; je; ) {
                    for (K = B; K = K[je]; )
                      if (G ? O(K, rt) : K.nodeType === 1)
                        return !1;
                    $e = je = m === "only" && !$e && "nextSibling";
                  }
                  return !0;
                }
                if ($e = [W ? Xe.firstChild : Xe.lastChild], W && Lt) {
                  for (se = Xe[j] || (Xe[j] = {}), ne = se[m] || [], me = ne[0] === F && ne[1], He = me && ne[2], K = me && Xe.childNodes[me]; K = ++me && K && K[je] || // Fallback to seeking `elem` from the start
                  (He = me = 0) || $e.pop(); )
                    if (K.nodeType === 1 && ++He && K === B) {
                      se[m] = [F, me, He];
                      break;
                    }
                } else if (Lt && (se = B[j] || (B[j] = {}), ne = se[m] || [], me = ne[0] === F && ne[1], He = me), He === !1)
                  for (; (K = ++me && K && K[je] || (He = me = 0) || $e.pop()) && !((G ? O(K, rt) : K.nodeType === 1) && ++He && (Lt && (se = K[j] || (K[j] = {}), se[m] = [F, He]), K === B)); )
                    ;
                return He -= I, He === q || He % q === 0 && He / q >= 0;
              }
            };
          },
          PSEUDO: function(m, b) {
            var R, q = t.pseudos[m] || t.setFilters[m.toLowerCase()] || pe.error("unsupported pseudo: " + m);
            return q[j] ? q(b) : q.length > 1 ? (R = [m, m, "", b], t.setFilters.hasOwnProperty(m.toLowerCase()) ? Ye(function(I, z) {
              for (var W, G = q(I, b), B = G.length; B--; )
                W = l.call(I, G[B]), I[W] = !(z[W] = G[B]);
            }) : function(I) {
              return q(I, 0, R);
            }) : q;
          }
        },
        pseudos: {
          // Potentially complex pseudos
          not: Ye(function(m) {
            var b = [], R = [], q = Un(m.replace(Re, "$1"));
            return q[j] ? Ye(function(I, z, W, G) {
              for (var B, ae = q(I, null, G, []), Z = I.length; Z--; )
                (B = ae[Z]) && (I[Z] = !(z[Z] = B));
            }) : function(I, z, W) {
              return b[0] = I, q(b, null, W, R), b[0] = null, !R.pop();
            };
          }),
          has: Ye(function(m) {
            return function(b) {
              return pe(m, b).length > 0;
            };
          }),
          contains: Ye(function(m) {
            return m = m.replace(st, ut), function(b) {
              return (b.textContent || n.text(b)).indexOf(m) > -1;
            };
          }),
          // "Whether an element is represented by a :lang() selector
          // is based solely on the element's language value
          // being equal to the identifier C,
          // or beginning with the identifier C immediately followed by "-".
          // The matching of C against the element's language value is performed case-insensitively.
          // The identifier C does not have to be a valid language name."
          // https://www.w3.org/TR/selectors/#lang-pseudo
          lang: Ye(function(m) {
            return Zt.test(m || "") || pe.error("unsupported lang: " + m), m = m.replace(st, ut).toLowerCase(), function(b) {
              var R;
              do
                if (R = v ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang"))
                  return R = R.toLowerCase(), R === m || R.indexOf(m + "-") === 0;
              while ((b = b.parentNode) && b.nodeType === 1);
              return !1;
            };
          }),
          // Miscellaneous
          target: function(m) {
            var b = M.location && M.location.hash;
            return b && b.slice(1) === m.id;
          },
          root: function(m) {
            return m === y;
          },
          focus: function(m) {
            return m === Lr() && h.hasFocus() && !!(m.type || m.href || ~m.tabIndex);
          },
          // Boolean properties
          enabled: rr(!1),
          disabled: rr(!0),
          checked: function(m) {
            return O(m, "input") && !!m.checked || O(m, "option") && !!m.selected;
          },
          selected: function(m) {
            return m.parentNode && m.parentNode.selectedIndex, m.selected === !0;
          },
          // Contents
          empty: function(m) {
            for (m = m.firstChild; m; m = m.nextSibling)
              if (m.nodeType < 6)
                return !1;
            return !0;
          },
          parent: function(m) {
            return !t.pseudos.empty(m);
          },
          // Element/input types
          header: function(m) {
            return xt.test(m.nodeName);
          },
          input: function(m) {
            return vt.test(m.nodeName);
          },
          button: function(m) {
            return O(m, "input") && m.type === "button" || O(m, "button");
          },
          text: function(m) {
            var b;
            return O(m, "input") && m.type === "text" && // Support: IE <10 only
            // New HTML5 attribute values (e.g., "search") appear
            // with elem.type === "text"
            ((b = m.getAttribute("type")) == null || b.toLowerCase() === "text");
          },
          // Position-in-collection
          first: Et(function() {
            return [0];
          }),
          last: Et(function(m, b) {
            return [b - 1];
          }),
          eq: Et(function(m, b, R) {
            return [R < 0 ? R + b : R];
          }),
          even: Et(function(m, b) {
            for (var R = 0; R < b; R += 2)
              m.push(R);
            return m;
          }),
          odd: Et(function(m, b) {
            for (var R = 1; R < b; R += 2)
              m.push(R);
            return m;
          }),
          lt: Et(function(m, b, R) {
            var q;
            for (R < 0 ? q = R + b : R > b ? q = b : q = R; --q >= 0; )
              m.push(q);
            return m;
          }),
          gt: Et(function(m, b, R) {
            for (var q = R < 0 ? R + b : R; ++q < b; )
              m.push(q);
            return m;
          })
        }
      }, t.pseudos.nth = t.pseudos.eq;
      for (e in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 })
        t.pseudos[e] = Ir(e);
      for (e in { submit: !0, reset: !0 })
        t.pseudos[e] = jr(e);
      function ir() {
      }
      ir.prototype = t.filters = t.pseudos, t.setFilters = new ir();
      function en(m, b) {
        var R, q, I, z, W, G, B, ae = fe[m + " "];
        if (ae)
          return b ? 0 : ae.slice(0);
        for (W = m, G = [], B = t.preFilter; W; ) {
          (!R || (q = Te.exec(W))) && (q && (W = W.slice(q[0].length) || W), G.push(I = [])), R = !1, (q = Kt.exec(W)) && (R = q.shift(), I.push({
            value: R,
            // Cast descendant combinators to space
            type: q[0].replace(Re, " ")
          }), W = W.slice(R.length));
          for (z in t.filter)
            (q = nt[z].exec(W)) && (!B[z] || (q = B[z](q))) && (R = q.shift(), I.push({
              value: R,
              type: z,
              matches: q
            }), W = W.slice(R.length));
          if (!R)
            break;
        }
        return b ? W.length : W ? pe.error(m) : (
          // Cache the tokens
          fe(m, G).slice(0)
        );
      }
      function gn(m) {
        for (var b = 0, R = m.length, q = ""; b < R; b++)
          q += m[b].value;
        return q;
      }
      function mn(m, b, R) {
        var q = b.dir, I = b.next, z = I || q, W = R && z === "parentNode", G = U++;
        return b.first ? (
          // Check against closest ancestor/preceding element
          function(B, ae, Z) {
            for (; B = B[q]; )
              if (B.nodeType === 1 || W)
                return m(B, ae, Z);
            return !1;
          }
        ) : (
          // Check against all ancestor/preceding elements
          function(B, ae, Z) {
            var ne, se, K = [F, G];
            if (Z) {
              for (; B = B[q]; )
                if ((B.nodeType === 1 || W) && m(B, ae, Z))
                  return !0;
            } else
              for (; B = B[q]; )
                if (B.nodeType === 1 || W)
                  if (se = B[j] || (B[j] = {}), I && O(B, I))
                    B = B[q] || B;
                  else {
                    if ((ne = se[z]) && ne[0] === F && ne[1] === G)
                      return K[2] = ne[2];
                    if (se[z] = K, K[2] = m(B, ae, Z))
                      return !0;
                  }
            return !1;
          }
        );
      }
      function Hn(m) {
        return m.length > 1 ? function(b, R, q) {
          for (var I = m.length; I--; )
            if (!m[I](b, R, q))
              return !1;
          return !0;
        } : m[0];
      }
      function Hr(m, b, R) {
        for (var q = 0, I = b.length; q < I; q++)
          pe(m, b[q], R);
        return R;
      }
      function vn(m, b, R, q, I) {
        for (var z, W = [], G = 0, B = m.length, ae = b != null; G < B; G++)
          (z = m[G]) && (!R || R(z, q, I)) && (W.push(z), ae && b.push(G));
        return W;
      }
      function Pn(m, b, R, q, I, z) {
        return q && !q[j] && (q = Pn(q)), I && !I[j] && (I = Pn(I, z)), Ye(function(W, G, B, ae) {
          var Z, ne, se, K, me = [], $e = [], je = G.length, Xe = W || Hr(
            b || "*",
            B.nodeType ? [B] : B,
            []
          ), rt = m && (W || !b) ? vn(Xe, me, m, B, ae) : Xe;
          if (R ? (K = I || (W ? m : je || q) ? (
            // ...intermediate processing is necessary
            []
          ) : (
            // ...otherwise use results directly
            G
          ), R(rt, K, B, ae)) : K = rt, q)
            for (Z = vn(K, $e), q(Z, [], B, ae), ne = Z.length; ne--; )
              (se = Z[ne]) && (K[$e[ne]] = !(rt[$e[ne]] = se));
          if (W) {
            if (I || m) {
              if (I) {
                for (Z = [], ne = K.length; ne--; )
                  (se = K[ne]) && Z.push(rt[ne] = se);
                I(null, K = [], Z, ae);
              }
              for (ne = K.length; ne--; )
                (se = K[ne]) && (Z = I ? l.call(W, se) : me[ne]) > -1 && (W[Z] = !(G[Z] = se));
            }
          } else
            K = vn(
              K === G ? K.splice(je, K.length) : K
            ), I ? I(null, G, K, ae) : u.apply(G, K);
        });
      }
      function Mn(m) {
        for (var b, R, q, I = m.length, z = t.relative[m[0].type], W = z || t.relative[" "], G = z ? 1 : 0, B = mn(function(ne) {
          return ne === b;
        }, W, !0), ae = mn(function(ne) {
          return l.call(b, ne) > -1;
        }, W, !0), Z = [function(ne, se, K) {
          var me = !z && (K || se != r) || ((b = se).nodeType ? B(ne, se, K) : ae(ne, se, K));
          return b = null, me;
        }]; G < I; G++)
          if (R = t.relative[m[G].type])
            Z = [mn(Hn(Z), R)];
          else {
            if (R = t.filter[m[G].type].apply(null, m[G].matches), R[j]) {
              for (q = ++G; q < I && !t.relative[m[q].type]; q++)
                ;
              return Pn(
                G > 1 && Hn(Z),
                G > 1 && gn(
                  // If the preceding token was a descendant combinator, insert an implicit any-element `*`
                  m.slice(0, G - 1).concat({ value: m[G - 2].type === " " ? "*" : "" })
                ).replace(Re, "$1"),
                R,
                G < q && Mn(m.slice(G, q)),
                q < I && Mn(m = m.slice(q)),
                q < I && gn(m)
              );
            }
            Z.push(R);
          }
        return Hn(Z);
      }
      function Pr(m, b) {
        var R = b.length > 0, q = m.length > 0, I = function(z, W, G, B, ae) {
          var Z, ne, se, K = 0, me = "0", $e = z && [], je = [], Xe = r, rt = z || q && t.find.TAG("*", ae), Lt = F += Xe == null ? 1 : Math.random() || 0.1, He = rt.length;
          for (ae && (r = W == h || W || ae); me !== He && (Z = rt[me]) != null; me++) {
            if (q && Z) {
              for (ne = 0, !W && Z.ownerDocument != h && (yt(Z), G = !v); se = m[ne++]; )
                if (se(Z, W || h, G)) {
                  u.call(B, Z);
                  break;
                }
              ae && (F = Lt);
            }
            R && ((Z = !se && Z) && K--, z && $e.push(Z));
          }
          if (K += me, R && me !== K) {
            for (ne = 0; se = b[ne++]; )
              se($e, je, W, G);
            if (z) {
              if (K > 0)
                for (; me--; )
                  $e[me] || je[me] || (je[me] = N.call(B));
              je = vn(je);
            }
            u.apply(B, je), ae && !z && je.length > 0 && K + b.length > 1 && n.uniqueSort(B);
          }
          return ae && (F = Lt, r = Xe), $e;
        };
        return R ? Ye(I) : I;
      }
      function Un(m, b) {
        var R, q = [], I = [], z = oe[m + " "];
        if (!z) {
          for (b || (b = en(m)), R = b.length; R--; )
            z = Mn(b[R]), z[j] ? q.push(z) : I.push(z);
          z = oe(
            m,
            Pr(I, q)
          ), z.selector = m;
        }
        return z;
      }
      function or(m, b, R, q) {
        var I, z, W, G, B, ae = typeof m == "function" && m, Z = !q && en(m = ae.selector || m);
        if (R = R || [], Z.length === 1) {
          if (z = Z[0] = Z[0].slice(0), z.length > 2 && (W = z[0]).type === "ID" && b.nodeType === 9 && v && t.relative[z[1].type]) {
            if (b = (t.find.ID(
              W.matches[0].replace(st, ut),
              b
            ) || [])[0], b)
              ae && (b = b.parentNode);
            else return R;
            m = m.slice(z.shift().value.length);
          }
          for (I = nt.needsContext.test(m) ? 0 : z.length; I-- && (W = z[I], !t.relative[G = W.type]); )
            if ((B = t.find[G]) && (q = B(
              W.matches[0].replace(st, ut),
              In.test(z[0].type) && jn(b.parentNode) || b
            ))) {
              if (z.splice(I, 1), m = q.length && gn(z), !m)
                return u.apply(R, q), R;
              break;
            }
        }
        return (ae || Un(m, Z))(
          q,
          b,
          !v,
          R,
          !b || In.test(m) && jn(b.parentNode) || b
        ), R;
      }
      d.sortStable = j.split("").sort(De).join("") === j, yt(), d.sortDetached = Nt(function(m) {
        return m.compareDocumentPosition(h.createElement("fieldset")) & 1;
      }), n.find = pe, n.expr[":"] = n.expr.pseudos, n.unique = n.uniqueSort, pe.compile = Un, pe.select = or, pe.setDocument = yt, pe.tokenize = en, pe.escape = n.escapeSelector, pe.getText = n.text, pe.isXML = n.isXMLDoc, pe.selectors = n.expr, pe.support = n.support, pe.uniqueSort = n.uniqueSort;
    })();
    var it = function(e, t, r) {
      for (var i = [], s = r !== void 0; (e = e[t]) && e.nodeType !== 9; )
        if (e.nodeType === 1) {
          if (s && n(e).is(r))
            break;
          i.push(e);
        }
      return i;
    }, It = function(e, t) {
      for (var r = []; e; e = e.nextSibling)
        e.nodeType === 1 && e !== t && r.push(e);
      return r;
    }, jt = n.expr.match.needsContext, Ht = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    function Dt(e, t, r) {
      return g(t) ? n.grep(e, function(i, s) {
        return !!t.call(i, s, i) !== r;
      }) : t.nodeType ? n.grep(e, function(i) {
        return i === t !== r;
      }) : typeof t != "string" ? n.grep(e, function(i) {
        return l.call(t, i) > -1 !== r;
      }) : n.filter(t, e, r);
    }
    n.filter = function(e, t, r) {
      var i = t[0];
      return r && (e = ":not(" + e + ")"), t.length === 1 && i.nodeType === 1 ? n.find.matchesSelector(i, e) ? [i] : [] : n.find.matches(e, n.grep(t, function(s) {
        return s.nodeType === 1;
      }));
    }, n.fn.extend({
      find: function(e) {
        var t, r, i = this.length, s = this;
        if (typeof e != "string")
          return this.pushStack(n(e).filter(function() {
            for (t = 0; t < i; t++)
              if (n.contains(s[t], this))
                return !0;
          }));
        for (r = this.pushStack([]), t = 0; t < i; t++)
          n.find(e, s[t], r);
        return i > 1 ? n.uniqueSort(r) : r;
      },
      filter: function(e) {
        return this.pushStack(Dt(this, e || [], !1));
      },
      not: function(e) {
        return this.pushStack(Dt(this, e || [], !0));
      },
      is: function(e) {
        return !!Dt(
          this,
          // If this is a positional/relative selector, check membership in the returned set
          // so $("p:first").is("p:last") won't return true for a doc with two "p".
          typeof e == "string" && jt.test(e) ? n(e) : e || [],
          !1
        ).length;
      }
    });
    var tn, At = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/, xn = n.fn.init = function(e, t, r) {
      var i, s;
      if (!e)
        return this;
      if (r = r || tn, typeof e == "string")
        if (e[0] === "<" && e[e.length - 1] === ">" && e.length >= 3 ? i = [null, e, null] : i = At.exec(e), i && (i[1] || !t))
          if (i[1]) {
            if (t = t instanceof n ? t[0] : t, n.merge(this, n.parseHTML(
              i[1],
              t && t.nodeType ? t.ownerDocument || t : D,
              !0
            )), Ht.test(i[1]) && n.isPlainObject(t))
              for (i in t)
                g(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
            return this;
          } else
            return s = D.getElementById(i[2]), s && (this[0] = s, this.length = 1), this;
        else return !t || t.jquery ? (t || r).find(e) : this.constructor(t).find(e);
      else {
        if (e.nodeType)
          return this[0] = e, this.length = 1, this;
        if (g(e))
          return r.ready !== void 0 ? r.ready(e) : (
            // Execute immediately if ready is not present
            e(n)
          );
      }
      return n.makeArray(e, this);
    };
    xn.prototype = n.fn, tn = n(D);
    var yn = /^(?:parents|prev(?:Until|All))/, bn = {
      children: !0,
      contents: !0,
      next: !0,
      prev: !0
    };
    n.fn.extend({
      has: function(e) {
        var t = n(e, this), r = t.length;
        return this.filter(function() {
          for (var i = 0; i < r; i++)
            if (n.contains(this, t[i]))
              return !0;
        });
      },
      closest: function(e, t) {
        var r, i = 0, s = this.length, u = [], h = typeof e != "string" && n(e);
        if (!jt.test(e)) {
          for (; i < s; i++)
            for (r = this[i]; r && r !== t; r = r.parentNode)
              if (r.nodeType < 11 && (h ? h.index(r) > -1 : (
                // Don't pass non-elements to jQuery#find
                r.nodeType === 1 && n.find.matchesSelector(r, e)
              ))) {
                u.push(r);
                break;
              }
        }
        return this.pushStack(u.length > 1 ? n.uniqueSort(u) : u);
      },
      // Determine the position of an element within the set
      index: function(e) {
        return e ? typeof e == "string" ? l.call(n(e), this[0]) : l.call(
          this,
          // If it receives a jQuery object, the first element is used
          e.jquery ? e[0] : e
        ) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
      },
      add: function(e, t) {
        return this.pushStack(
          n.uniqueSort(
            n.merge(this.get(), n(e, t))
          )
        );
      },
      addBack: function(e) {
        return this.add(
          e == null ? this.prevObject : this.prevObject.filter(e)
        );
      }
    });
    function Qe(e, t) {
      for (; (e = e[t]) && e.nodeType !== 1; )
        ;
      return e;
    }
    n.each({
      parent: function(e) {
        var t = e.parentNode;
        return t && t.nodeType !== 11 ? t : null;
      },
      parents: function(e) {
        return it(e, "parentNode");
      },
      parentsUntil: function(e, t, r) {
        return it(e, "parentNode", r);
      },
      next: function(e) {
        return Qe(e, "nextSibling");
      },
      prev: function(e) {
        return Qe(e, "previousSibling");
      },
      nextAll: function(e) {
        return it(e, "nextSibling");
      },
      prevAll: function(e) {
        return it(e, "previousSibling");
      },
      nextUntil: function(e, t, r) {
        return it(e, "nextSibling", r);
      },
      prevUntil: function(e, t, r) {
        return it(e, "previousSibling", r);
      },
      siblings: function(e) {
        return It((e.parentNode || {}).firstChild, e);
      },
      children: function(e) {
        return It(e.firstChild);
      },
      contents: function(e) {
        return e.contentDocument != null && // Support: IE 11+
        // <object> elements with no `data` attribute has an object
        // `contentDocument` with a `null` prototype.
        S(e.contentDocument) ? e.contentDocument : (O(e, "template") && (e = e.content || e), n.merge([], e.childNodes));
      }
    }, function(e, t) {
      n.fn[e] = function(r, i) {
        var s = n.map(this, t, r);
        return e.slice(-5) !== "Until" && (i = r), i && typeof i == "string" && (s = n.filter(i, s)), this.length > 1 && (bn[e] || n.uniqueSort(s), yn.test(e) && s.reverse()), this.pushStack(s);
      };
    });
    var V = /[^\x20\t\r\n\f]+/g;
    function Ae(e) {
      var t = {};
      return n.each(e.match(V) || [], function(r, i) {
        t[i] = !0;
      }), t;
    }
    n.Callbacks = function(e) {
      e = typeof e == "string" ? Ae(e) : n.extend({}, e);
      var t, r, i, s, u = [], h = [], y = -1, v = function() {
        for (s = s || e.once, i = t = !0; h.length; y = -1)
          for (r = h.shift(); ++y < u.length; )
            u[y].apply(r[0], r[1]) === !1 && e.stopOnFalse && (y = u.length, r = !1);
        e.memory || (r = !1), t = !1, s && (r ? u = [] : u = "");
      }, T = {
        // Add a callback or a collection of callbacks to the list
        add: function() {
          return u && (r && !t && (y = u.length - 1, h.push(r)), function L(j) {
            n.each(j, function(F, U) {
              g(U) ? (!e.unique || !T.has(U)) && u.push(U) : U && U.length && Q(U) !== "string" && L(U);
            });
          }(arguments), r && !t && v()), this;
        },
        // Remove a callback from the list
        remove: function() {
          return n.each(arguments, function(L, j) {
            for (var F; (F = n.inArray(j, u, F)) > -1; )
              u.splice(F, 1), F <= y && y--;
          }), this;
        },
        // Check if a given callback is in the list.
        // If no argument is given, return whether or not list has callbacks attached.
        has: function(L) {
          return L ? n.inArray(L, u) > -1 : u.length > 0;
        },
        // Remove all callbacks from the list
        empty: function() {
          return u && (u = []), this;
        },
        // Disable .fire and .add
        // Abort any current/pending executions
        // Clear all callbacks and values
        disable: function() {
          return s = h = [], u = r = "", this;
        },
        disabled: function() {
          return !u;
        },
        // Disable .fire
        // Also disable .add unless we have memory (since it would have no effect)
        // Abort any pending executions
        lock: function() {
          return s = h = [], !r && !t && (u = r = ""), this;
        },
        locked: function() {
          return !!s;
        },
        // Call all callbacks with the given context and arguments
        fireWith: function(L, j) {
          return s || (j = j || [], j = [L, j.slice ? j.slice() : j], h.push(j), t || v()), this;
        },
        // Call all the callbacks with the given arguments
        fire: function() {
          return T.fireWith(this, arguments), this;
        },
        // To know if the callbacks have already been called at least once
        fired: function() {
          return !!i;
        }
      };
      return T;
    };
    function lt(e) {
      return e;
    }
    function Rt(e) {
      throw e;
    }
    function nn(e, t, r, i) {
      var s;
      try {
        e && g(s = e.promise) ? s.call(e).done(t).fail(r) : e && g(s = e.then) ? s.call(e, t, r) : t.apply(void 0, [e].slice(i));
      } catch (u) {
        r.apply(void 0, [u]);
      }
    }
    n.extend({
      Deferred: function(e) {
        var t = [
          // action, add listener, callbacks,
          // ... .then handlers, argument index, [final state]
          [
            "notify",
            "progress",
            n.Callbacks("memory"),
            n.Callbacks("memory"),
            2
          ],
          [
            "resolve",
            "done",
            n.Callbacks("once memory"),
            n.Callbacks("once memory"),
            0,
            "resolved"
          ],
          [
            "reject",
            "fail",
            n.Callbacks("once memory"),
            n.Callbacks("once memory"),
            1,
            "rejected"
          ]
        ], r = "pending", i = {
          state: function() {
            return r;
          },
          always: function() {
            return s.done(arguments).fail(arguments), this;
          },
          catch: function(u) {
            return i.then(null, u);
          },
          // Keep pipe for back-compat
          pipe: function() {
            var u = arguments;
            return n.Deferred(function(h) {
              n.each(t, function(y, v) {
                var T = g(u[v[4]]) && u[v[4]];
                s[v[1]](function() {
                  var L = T && T.apply(this, arguments);
                  L && g(L.promise) ? L.promise().progress(h.notify).done(h.resolve).fail(h.reject) : h[v[0] + "With"](
                    this,
                    T ? [L] : arguments
                  );
                });
              }), u = null;
            }).promise();
          },
          then: function(u, h, y) {
            var v = 0;
            function T(L, j, F, U) {
              return function() {
                var te = this, fe = arguments, oe = function() {
                  var De, Ze;
                  if (!(L < v)) {
                    if (De = F.apply(te, fe), De === j.promise())
                      throw new TypeError("Thenable self-resolution");
                    Ze = De && // Support: Promises/A+ section 2.3.4
                    // https://promisesaplus.com/#point-64
                    // Only check objects and functions for thenability
                    (typeof De == "object" || typeof De == "function") && De.then, g(Ze) ? U ? Ze.call(
                      De,
                      T(v, j, lt, U),
                      T(v, j, Rt, U)
                    ) : (v++, Ze.call(
                      De,
                      T(v, j, lt, U),
                      T(v, j, Rt, U),
                      T(
                        v,
                        j,
                        lt,
                        j.notifyWith
                      )
                    )) : (F !== lt && (te = void 0, fe = [De]), (U || j.resolveWith)(te, fe));
                  }
                }, Fe = U ? oe : function() {
                  try {
                    oe();
                  } catch (De) {
                    n.Deferred.exceptionHook && n.Deferred.exceptionHook(
                      De,
                      Fe.error
                    ), L + 1 >= v && (F !== Rt && (te = void 0, fe = [De]), j.rejectWith(te, fe));
                  }
                };
                L ? Fe() : (n.Deferred.getErrorHook ? Fe.error = n.Deferred.getErrorHook() : n.Deferred.getStackHook && (Fe.error = n.Deferred.getStackHook()), M.setTimeout(Fe));
              };
            }
            return n.Deferred(function(L) {
              t[0][3].add(
                T(
                  0,
                  L,
                  g(y) ? y : lt,
                  L.notifyWith
                )
              ), t[1][3].add(
                T(
                  0,
                  L,
                  g(u) ? u : lt
                )
              ), t[2][3].add(
                T(
                  0,
                  L,
                  g(h) ? h : Rt
                )
              );
            }).promise();
          },
          // Get a promise for this deferred
          // If obj is provided, the promise aspect is added to the object
          promise: function(u) {
            return u != null ? n.extend(u, i) : i;
          }
        }, s = {};
        return n.each(t, function(u, h) {
          var y = h[2], v = h[5];
          i[h[1]] = y.add, v && y.add(
            function() {
              r = v;
            },
            // rejected_callbacks.disable
            // fulfilled_callbacks.disable
            t[3 - u][2].disable,
            // rejected_handlers.disable
            // fulfilled_handlers.disable
            t[3 - u][3].disable,
            // progress_callbacks.lock
            t[0][2].lock,
            // progress_handlers.lock
            t[0][3].lock
          ), y.add(h[3].fire), s[h[0]] = function() {
            return s[h[0] + "With"](this === s ? void 0 : this, arguments), this;
          }, s[h[0] + "With"] = y.fireWith;
        }), i.promise(s), e && e.call(s, s), s;
      },
      // Deferred helper
      when: function(e) {
        var t = arguments.length, r = t, i = Array(r), s = A.call(arguments), u = n.Deferred(), h = function(y) {
          return function(v) {
            i[y] = this, s[y] = arguments.length > 1 ? A.call(arguments) : v, --t || u.resolveWith(i, s);
          };
        };
        if (t <= 1 && (nn(
          e,
          u.done(h(r)).resolve,
          u.reject,
          !t
        ), u.state() === "pending" || g(s[r] && s[r].then)))
          return u.then();
        for (; r--; )
          nn(s[r], h(r), u.reject);
        return u.promise();
      }
    });
    var _n = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    n.Deferred.exceptionHook = function(e, t) {
      M.console && M.console.warn && e && _n.test(e.name) && M.console.warn(
        "jQuery.Deferred exception: " + e.message,
        e.stack,
        t
      );
    }, n.readyException = function(e) {
      M.setTimeout(function() {
        throw e;
      });
    };
    var Pt = n.Deferred();
    n.fn.ready = function(e) {
      return Pt.then(e).catch(function(t) {
        n.readyException(t);
      }), this;
    }, n.extend({
      // Is the DOM ready to be used? Set to true once it occurs.
      isReady: !1,
      // A counter to track how many items to wait for before
      // the ready event fires. See trac-6781
      readyWait: 1,
      // Handle when the DOM is ready
      ready: function(e) {
        (e === !0 ? --n.readyWait : n.isReady) || (n.isReady = !0, !(e !== !0 && --n.readyWait > 0) && Pt.resolveWith(D, [n]));
      }
    }), n.ready.then = Pt.then;
    function Ft() {
      D.removeEventListener("DOMContentLoaded", Ft), M.removeEventListener("load", Ft), n.ready();
    }
    D.readyState === "complete" || D.readyState !== "loading" && !D.documentElement.doScroll ? M.setTimeout(n.ready) : (D.addEventListener("DOMContentLoaded", Ft), M.addEventListener("load", Ft));
    var ze = function(e, t, r, i, s, u, h) {
      var y = 0, v = e.length, T = r == null;
      if (Q(r) === "object") {
        s = !0;
        for (y in r)
          ze(e, t, y, r[y], !0, u, h);
      } else if (i !== void 0 && (s = !0, g(i) || (h = !0), T && (h ? (t.call(e, i), t = null) : (T = t, t = function(L, j, F) {
        return T.call(n(L), F);
      })), t))
        for (; y < v; y++)
          t(
            e[y],
            r,
            h ? i : i.call(e[y], y, t(e[y], r))
          );
      return s ? e : T ? t.call(e) : v ? t(e[0], r) : u;
    }, wn = /^-ms-/, rn = /-([a-z])/g;
    function Tn(e, t) {
      return t.toUpperCase();
    }
    function H(e) {
      return e.replace(wn, "ms-").replace(rn, Tn);
    }
    var re = function(e) {
      return e.nodeType === 1 || e.nodeType === 9 || !+e.nodeType;
    };
    function ie() {
      this.expando = n.expando + ie.uid++;
    }
    ie.uid = 1, ie.prototype = {
      cache: function(e) {
        var t = e[this.expando];
        return t || (t = {}, re(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
          value: t,
          configurable: !0
        }))), t;
      },
      set: function(e, t, r) {
        var i, s = this.cache(e);
        if (typeof t == "string")
          s[H(t)] = r;
        else
          for (i in t)
            s[H(i)] = t[i];
        return s;
      },
      get: function(e, t) {
        return t === void 0 ? this.cache(e) : (
          // Always use camelCase key (gh-2257)
          e[this.expando] && e[this.expando][H(t)]
        );
      },
      access: function(e, t, r) {
        return t === void 0 || t && typeof t == "string" && r === void 0 ? this.get(e, t) : (this.set(e, t, r), r !== void 0 ? r : t);
      },
      remove: function(e, t) {
        var r, i = e[this.expando];
        if (i !== void 0) {
          if (t !== void 0)
            for (Array.isArray(t) ? t = t.map(H) : (t = H(t), t = t in i ? [t] : t.match(V) || []), r = t.length; r--; )
              delete i[t[r]];
          (t === void 0 || n.isEmptyObject(i)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]);
        }
      },
      hasData: function(e) {
        var t = e[this.expando];
        return t !== void 0 && !n.isEmptyObject(t);
      }
    };
    var $ = new ie(), ee = new ie(), de = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, xe = /[A-Z]/g;
    function ge(e) {
      return e === "true" ? !0 : e === "false" ? !1 : e === "null" ? null : e === +e + "" ? +e : de.test(e) ? JSON.parse(e) : e;
    }
    function be(e, t, r) {
      var i;
      if (r === void 0 && e.nodeType === 1)
        if (i = "data-" + t.replace(xe, "-$&").toLowerCase(), r = e.getAttribute(i), typeof r == "string") {
          try {
            r = ge(r);
          } catch (s) {
          }
          ee.set(e, t, r);
        } else
          r = void 0;
      return r;
    }
    n.extend({
      hasData: function(e) {
        return ee.hasData(e) || $.hasData(e);
      },
      data: function(e, t, r) {
        return ee.access(e, t, r);
      },
      removeData: function(e, t) {
        ee.remove(e, t);
      },
      // TODO: Now that all calls to _data and _removeData have been replaced
      // with direct calls to dataPriv methods, these can be deprecated.
      _data: function(e, t, r) {
        return $.access(e, t, r);
      },
      _removeData: function(e, t) {
        $.remove(e, t);
      }
    }), n.fn.extend({
      data: function(e, t) {
        var r, i, s, u = this[0], h = u && u.attributes;
        if (e === void 0) {
          if (this.length && (s = ee.get(u), u.nodeType === 1 && !$.get(u, "hasDataAttrs"))) {
            for (r = h.length; r--; )
              h[r] && (i = h[r].name, i.indexOf("data-") === 0 && (i = H(i.slice(5)), be(u, i, s[i])));
            $.set(u, "hasDataAttrs", !0);
          }
          return s;
        }
        return typeof e == "object" ? this.each(function() {
          ee.set(this, e);
        }) : ze(this, function(y) {
          var v;
          if (u && y === void 0)
            return v = ee.get(u, e), v !== void 0 || (v = be(u, e), v !== void 0) ? v : void 0;
          this.each(function() {
            ee.set(this, e, y);
          });
        }, null, t, arguments.length > 1, null, !0);
      },
      removeData: function(e) {
        return this.each(function() {
          ee.remove(this, e);
        });
      }
    }), n.extend({
      queue: function(e, t, r) {
        var i;
        if (e)
          return t = (t || "fx") + "queue", i = $.get(e, t), r && (!i || Array.isArray(r) ? i = $.access(e, t, n.makeArray(r)) : i.push(r)), i || [];
      },
      dequeue: function(e, t) {
        t = t || "fx";
        var r = n.queue(e, t), i = r.length, s = r.shift(), u = n._queueHooks(e, t), h = function() {
          n.dequeue(e, t);
        };
        s === "inprogress" && (s = r.shift(), i--), s && (t === "fx" && r.unshift("inprogress"), delete u.stop, s.call(e, h, u)), !i && u && u.empty.fire();
      },
      // Not public - generate a queueHooks object, or return the current one
      _queueHooks: function(e, t) {
        var r = t + "queueHooks";
        return $.get(e, r) || $.access(e, r, {
          empty: n.Callbacks("once memory").add(function() {
            $.remove(e, [t + "queue", r]);
          })
        });
      }
    }), n.fn.extend({
      queue: function(e, t) {
        var r = 2;
        return typeof e != "string" && (t = e, e = "fx", r--), arguments.length < r ? n.queue(this[0], e) : t === void 0 ? this : this.each(function() {
          var i = n.queue(this, e, t);
          n._queueHooks(this, e), e === "fx" && i[0] !== "inprogress" && n.dequeue(this, e);
        });
      },
      dequeue: function(e) {
        return this.each(function() {
          n.dequeue(this, e);
        });
      },
      clearQueue: function(e) {
        return this.queue(e || "fx", []);
      },
      // Get a promise resolved when queues of a certain type
      // are emptied (fx is the type by default)
      promise: function(e, t) {
        var r, i = 1, s = n.Deferred(), u = this, h = this.length, y = function() {
          --i || s.resolveWith(u, [u]);
        };
        for (typeof e != "string" && (t = e, e = void 0), e = e || "fx"; h--; )
          r = $.get(u[h], e + "queueHooks"), r && r.empty && (i++, r.empty.add(y));
        return y(), s.promise(t);
      }
    });
    var we = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, J = new RegExp("^(?:([+-])=|)(" + we + ")([a-z%]*)$", "i"), he = ["Top", "Right", "Bottom", "Left"], Se = D.documentElement, qe = function(e) {
      return n.contains(e.ownerDocument, e);
    }, Ne = { composed: !0 };
    Se.getRootNode && (qe = function(e) {
      return n.contains(e.ownerDocument, e) || e.getRootNode(Ne) === e.ownerDocument;
    });
    var ye = function(e, t) {
      return e = t || e, e.style.display === "none" || e.style.display === "" && // Otherwise, check computed style
      // Support: Firefox <=43 - 45
      // Disconnected elements can have computed display: none, so first confirm that elem is
      // in the document.
      qe(e) && n.css(e, "display") === "none";
    };
    function Me(e, t, r, i) {
      var s, u, h = 20, y = i ? function() {
        return i.cur();
      } : function() {
        return n.css(e, t, "");
      }, v = y(), T = r && r[3] || (n.cssNumber[t] ? "" : "px"), L = e.nodeType && (n.cssNumber[t] || T !== "px" && +v) && J.exec(n.css(e, t));
      if (L && L[3] !== T) {
        for (v = v / 2, T = T || L[3], L = +v || 1; h--; )
          n.style(e, t, L + T), (1 - u) * (1 - (u = y() / v || 0.5)) <= 0 && (h = 0), L = L / u;
        L = L * 2, n.style(e, t, L + T), r = r || [];
      }
      return r && (L = +L || +v || 0, s = r[1] ? L + (r[1] + 1) * r[2] : +r[2], i && (i.unit = T, i.start = L, i.end = s)), s;
    }
    var We = {};
    function Ce(e) {
      var t, r = e.ownerDocument, i = e.nodeName, s = We[i];
      return s || (t = r.body.appendChild(r.createElement(i)), s = n.css(t, "display"), t.parentNode.removeChild(t), s === "none" && (s = "block"), We[i] = s, s);
    }
    function Le(e, t) {
      for (var r, i, s = [], u = 0, h = e.length; u < h; u++)
        i = e[u], i.style && (r = i.style.display, t ? (r === "none" && (s[u] = $.get(i, "display") || null, s[u] || (i.style.display = "")), i.style.display === "" && ye(i) && (s[u] = Ce(i))) : r !== "none" && (s[u] = "none", $.set(i, "display", r)));
      for (u = 0; u < h; u++)
        s[u] != null && (e[u].style.display = s[u]);
      return e;
    }
    n.fn.extend({
      show: function() {
        return Le(this, !0);
      },
      hide: function() {
        return Le(this);
      },
      toggle: function(e) {
        return typeof e == "boolean" ? e ? this.show() : this.hide() : this.each(function() {
          ye(this) ? n(this).show() : n(this).hide();
        });
      }
    });
    var Ke = /^(?:checkbox|radio)$/i, on = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i, dt = /^$|^module$|\/(?:java|ecma)script/i;
    (function() {
      var e = D.createDocumentFragment(), t = e.appendChild(D.createElement("div")), r = D.createElement("input");
      r.setAttribute("type", "radio"), r.setAttribute("checked", "checked"), r.setAttribute("name", "t"), t.appendChild(r), d.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", d.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue, t.innerHTML = "<option></option>", d.option = !!t.lastChild;
    })();
    var Ie = {
      // XHTML parsers do not magically insert elements in the
      // same way that tag soup parsers do. So we cannot shorten
      // this by omitting <tbody> or other required elements.
      thead: [1, "<table>", "</table>"],
      col: [2, "<table><colgroup>", "</colgroup></table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: [0, "", ""]
    };
    Ie.tbody = Ie.tfoot = Ie.colgroup = Ie.caption = Ie.thead, Ie.th = Ie.td, d.option || (Ie.optgroup = Ie.option = [1, "<select multiple='multiple'>", "</select>"]);
    function Ee(e, t) {
      var r;
      return typeof e.getElementsByTagName != "undefined" ? r = e.getElementsByTagName(t || "*") : typeof e.querySelectorAll != "undefined" ? r = e.querySelectorAll(t || "*") : r = [], t === void 0 || t && O(e, t) ? n.merge([e], r) : r;
    }
    function ht(e, t) {
      for (var r = 0, i = e.length; r < i; r++)
        $.set(
          e[r],
          "globalEval",
          !t || $.get(t[r], "globalEval")
        );
    }
    var an = /<|&#?\w+;/;
    function Mt(e, t, r, i, s) {
      for (var u, h, y, v, T, L, j = t.createDocumentFragment(), F = [], U = 0, te = e.length; U < te; U++)
        if (u = e[U], u || u === 0)
          if (Q(u) === "object")
            n.merge(F, u.nodeType ? [u] : u);
          else if (!an.test(u))
            F.push(t.createTextNode(u));
          else {
            for (h = h || j.appendChild(t.createElement("div")), y = (on.exec(u) || ["", ""])[1].toLowerCase(), v = Ie[y] || Ie._default, h.innerHTML = v[1] + n.htmlPrefilter(u) + v[2], L = v[0]; L--; )
              h = h.lastChild;
            n.merge(F, h.childNodes), h = j.firstChild, h.textContent = "";
          }
      for (j.textContent = "", U = 0; u = F[U++]; ) {
        if (i && n.inArray(u, i) > -1) {
          s && s.push(u);
          continue;
        }
        if (T = qe(u), h = Ee(j.appendChild(u), "script"), T && ht(h), r)
          for (L = 0; u = h[L++]; )
            dt.test(u.type || "") && r.push(u);
      }
      return j;
    }
    var Ut = /^([^.]*)(?:\.(.+)|)/;
    function ot() {
      return !0;
    }
    function at() {
      return !1;
    }
    function Ot(e, t, r, i, s, u) {
      var h, y;
      if (typeof t == "object") {
        typeof r != "string" && (i = i || r, r = void 0);
        for (y in t)
          Ot(e, y, r, i, t[y], u);
        return e;
      }
      if (i == null && s == null ? (s = r, i = r = void 0) : s == null && (typeof r == "string" ? (s = i, i = void 0) : (s = i, i = r, r = void 0)), s === !1)
        s = at;
      else if (!s)
        return e;
      return u === 1 && (h = s, s = function(v) {
        return n().off(v), h.apply(this, arguments);
      }, s.guid = h.guid || (h.guid = n.guid++)), e.each(function() {
        n.event.add(this, t, s, i, r);
      });
    }
    n.event = {
      global: {},
      add: function(e, t, r, i, s) {
        var u, h, y, v, T, L, j, F, U, te, fe, oe = $.get(e);
        if (re(e))
          for (r.handler && (u = r, r = u.handler, s = u.selector), s && n.find.matchesSelector(Se, s), r.guid || (r.guid = n.guid++), (v = oe.events) || (v = oe.events = /* @__PURE__ */ Object.create(null)), (h = oe.handle) || (h = oe.handle = function(Fe) {
            return typeof n != "undefined" && n.event.triggered !== Fe.type ? n.event.dispatch.apply(e, arguments) : void 0;
          }), t = (t || "").match(V) || [""], T = t.length; T--; )
            y = Ut.exec(t[T]) || [], U = fe = y[1], te = (y[2] || "").split(".").sort(), U && (j = n.event.special[U] || {}, U = (s ? j.delegateType : j.bindType) || U, j = n.event.special[U] || {}, L = n.extend({
              type: U,
              origType: fe,
              data: i,
              handler: r,
              guid: r.guid,
              selector: s,
              needsContext: s && n.expr.match.needsContext.test(s),
              namespace: te.join(".")
            }, u), (F = v[U]) || (F = v[U] = [], F.delegateCount = 0, (!j.setup || j.setup.call(e, i, te, h) === !1) && e.addEventListener && e.addEventListener(U, h)), j.add && (j.add.call(e, L), L.handler.guid || (L.handler.guid = r.guid)), s ? F.splice(F.delegateCount++, 0, L) : F.push(L), n.event.global[U] = !0);
      },
      // Detach an event or set of events from an element
      remove: function(e, t, r, i, s) {
        var u, h, y, v, T, L, j, F, U, te, fe, oe = $.hasData(e) && $.get(e);
        if (!(!oe || !(v = oe.events))) {
          for (t = (t || "").match(V) || [""], T = t.length; T--; ) {
            if (y = Ut.exec(t[T]) || [], U = fe = y[1], te = (y[2] || "").split(".").sort(), !U) {
              for (U in v)
                n.event.remove(e, U + t[T], r, i, !0);
              continue;
            }
            for (j = n.event.special[U] || {}, U = (i ? j.delegateType : j.bindType) || U, F = v[U] || [], y = y[2] && new RegExp("(^|\\.)" + te.join("\\.(?:.*\\.|)") + "(\\.|$)"), h = u = F.length; u--; )
              L = F[u], (s || fe === L.origType) && (!r || r.guid === L.guid) && (!y || y.test(L.namespace)) && (!i || i === L.selector || i === "**" && L.selector) && (F.splice(u, 1), L.selector && F.delegateCount--, j.remove && j.remove.call(e, L));
            h && !F.length && ((!j.teardown || j.teardown.call(e, te, oe.handle) === !1) && n.removeEvent(e, U, oe.handle), delete v[U]);
          }
          n.isEmptyObject(v) && $.remove(e, "handle events");
        }
      },
      dispatch: function(e) {
        var t, r, i, s, u, h, y = new Array(arguments.length), v = n.event.fix(e), T = ($.get(this, "events") || /* @__PURE__ */ Object.create(null))[v.type] || [], L = n.event.special[v.type] || {};
        for (y[0] = v, t = 1; t < arguments.length; t++)
          y[t] = arguments[t];
        if (v.delegateTarget = this, !(L.preDispatch && L.preDispatch.call(this, v) === !1)) {
          for (h = n.event.handlers.call(this, v, T), t = 0; (s = h[t++]) && !v.isPropagationStopped(); )
            for (v.currentTarget = s.elem, r = 0; (u = s.handlers[r++]) && !v.isImmediatePropagationStopped(); )
              (!v.rnamespace || u.namespace === !1 || v.rnamespace.test(u.namespace)) && (v.handleObj = u, v.data = u.data, i = ((n.event.special[u.origType] || {}).handle || u.handler).apply(s.elem, y), i !== void 0 && (v.result = i) === !1 && (v.preventDefault(), v.stopPropagation()));
          return L.postDispatch && L.postDispatch.call(this, v), v.result;
        }
      },
      handlers: function(e, t) {
        var r, i, s, u, h, y = [], v = t.delegateCount, T = e.target;
        if (v && // Support: IE <=9
        // Black-hole SVG <use> instance trees (trac-13180)
        T.nodeType && // Support: Firefox <=42
        // Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
        // https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
        // Support: IE 11 only
        // ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
        !(e.type === "click" && e.button >= 1)) {
          for (; T !== this; T = T.parentNode || this)
            if (T.nodeType === 1 && !(e.type === "click" && T.disabled === !0)) {
              for (u = [], h = {}, r = 0; r < v; r++)
                i = t[r], s = i.selector + " ", h[s] === void 0 && (h[s] = i.needsContext ? n(s, this).index(T) > -1 : n.find(s, this, null, [T]).length), h[s] && u.push(i);
              u.length && y.push({ elem: T, handlers: u });
            }
        }
        return T = this, v < t.length && y.push({ elem: T, handlers: t.slice(v) }), y;
      },
      addProp: function(e, t) {
        Object.defineProperty(n.Event.prototype, e, {
          enumerable: !0,
          configurable: !0,
          get: g(t) ? function() {
            if (this.originalEvent)
              return t(this.originalEvent);
          } : function() {
            if (this.originalEvent)
              return this.originalEvent[e];
          },
          set: function(r) {
            Object.defineProperty(this, e, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: r
            });
          }
        });
      },
      fix: function(e) {
        return e[n.expando] ? e : new n.Event(e);
      },
      special: {
        load: {
          // Prevent triggered image.load events from bubbling to window.load
          noBubble: !0
        },
        click: {
          // Utilize native event to ensure correct state for checkable inputs
          setup: function(e) {
            var t = this || e;
            return Ke.test(t.type) && t.click && O(t, "input") && bt(t, "click", !0), !1;
          },
          trigger: function(e) {
            var t = this || e;
            return Ke.test(t.type) && t.click && O(t, "input") && bt(t, "click"), !0;
          },
          // For cross-browser consistency, suppress native .click() on links
          // Also prevent it if we're currently inside a leveraged native-event stack
          _default: function(e) {
            var t = e.target;
            return Ke.test(t.type) && t.click && O(t, "input") && $.get(t, "click") || O(t, "a");
          }
        },
        beforeunload: {
          postDispatch: function(e) {
            e.result !== void 0 && e.originalEvent && (e.originalEvent.returnValue = e.result);
          }
        }
      }
    };
    function bt(e, t, r) {
      if (!r) {
        $.get(e, t) === void 0 && n.event.add(e, t, ot);
        return;
      }
      $.set(e, t, !1), n.event.add(e, t, {
        namespace: !1,
        handler: function(i) {
          var s, u = $.get(this, t);
          if (i.isTrigger & 1 && this[t]) {
            if (u)
              (n.event.special[t] || {}).delegateType && i.stopPropagation();
            else if (u = A.call(arguments), $.set(this, t, u), this[t](), s = $.get(this, t), $.set(this, t, !1), u !== s)
              return i.stopImmediatePropagation(), i.preventDefault(), s;
          } else u && ($.set(this, t, n.event.trigger(
            u[0],
            u.slice(1),
            this
          )), i.stopPropagation(), i.isImmediatePropagationStopped = ot);
        }
      });
    }
    n.removeEvent = function(e, t, r) {
      e.removeEventListener && e.removeEventListener(t, r);
    }, n.Event = function(e, t) {
      if (!(this instanceof n.Event))
        return new n.Event(e, t);
      e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.defaultPrevented === void 0 && // Support: Android <=2.3 only
      e.returnValue === !1 ? ot : at, this.target = e.target && e.target.nodeType === 3 ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && n.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[n.expando] = !0;
    }, n.Event.prototype = {
      constructor: n.Event,
      isDefaultPrevented: at,
      isPropagationStopped: at,
      isImmediatePropagationStopped: at,
      isSimulated: !1,
      preventDefault: function() {
        var e = this.originalEvent;
        this.isDefaultPrevented = ot, e && !this.isSimulated && e.preventDefault();
      },
      stopPropagation: function() {
        var e = this.originalEvent;
        this.isPropagationStopped = ot, e && !this.isSimulated && e.stopPropagation();
      },
      stopImmediatePropagation: function() {
        var e = this.originalEvent;
        this.isImmediatePropagationStopped = ot, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
      }
    }, n.each({
      altKey: !0,
      bubbles: !0,
      cancelable: !0,
      changedTouches: !0,
      ctrlKey: !0,
      detail: !0,
      eventPhase: !0,
      metaKey: !0,
      pageX: !0,
      pageY: !0,
      shiftKey: !0,
      view: !0,
      char: !0,
      code: !0,
      charCode: !0,
      key: !0,
      keyCode: !0,
      button: !0,
      buttons: !0,
      clientX: !0,
      clientY: !0,
      offsetX: !0,
      offsetY: !0,
      pointerId: !0,
      pointerType: !0,
      screenX: !0,
      screenY: !0,
      targetTouches: !0,
      toElement: !0,
      touches: !0,
      which: !0
    }, n.event.addProp), n.each({ focus: "focusin", blur: "focusout" }, function(e, t) {
      function r(i) {
        if (D.documentMode) {
          var s = $.get(this, "handle"), u = n.event.fix(i);
          u.type = i.type === "focusin" ? "focus" : "blur", u.isSimulated = !0, s(i), u.target === u.currentTarget && s(u);
        } else
          n.event.simulate(
            t,
            i.target,
            n.event.fix(i)
          );
      }
      n.event.special[e] = {
        // Utilize native event if possible so blur/focus sequence is correct
        setup: function() {
          var i;
          if (bt(this, e, !0), D.documentMode)
            i = $.get(this, t), i || this.addEventListener(t, r), $.set(this, t, (i || 0) + 1);
          else
            return !1;
        },
        trigger: function() {
          return bt(this, e), !0;
        },
        teardown: function() {
          var i;
          if (D.documentMode)
            i = $.get(this, t) - 1, i ? $.set(this, t, i) : (this.removeEventListener(t, r), $.remove(this, t));
          else
            return !1;
        },
        // Suppress native focus or blur if we're currently inside
        // a leveraged native-event stack
        _default: function(i) {
          return $.get(i.target, e);
        },
        delegateType: t
      }, n.event.special[t] = {
        setup: function() {
          var i = this.ownerDocument || this.document || this, s = D.documentMode ? this : i, u = $.get(s, t);
          u || (D.documentMode ? this.addEventListener(t, r) : i.addEventListener(e, r, !0)), $.set(s, t, (u || 0) + 1);
        },
        teardown: function() {
          var i = this.ownerDocument || this.document || this, s = D.documentMode ? this : i, u = $.get(s, t) - 1;
          u ? $.set(s, t, u) : (D.documentMode ? this.removeEventListener(t, r) : i.removeEventListener(e, r, !0), $.remove(s, t));
        }
      };
    }), n.each({
      mouseenter: "mouseover",
      mouseleave: "mouseout",
      pointerenter: "pointerover",
      pointerleave: "pointerout"
    }, function(e, t) {
      n.event.special[e] = {
        delegateType: t,
        bindType: t,
        handle: function(r) {
          var i, s = this, u = r.relatedTarget, h = r.handleObj;
          return (!u || u !== s && !n.contains(s, u)) && (r.type = h.origType, i = h.handler.apply(this, arguments), r.type = t), i;
        }
      };
    }), n.fn.extend({
      on: function(e, t, r, i) {
        return Ot(this, e, t, r, i);
      },
      one: function(e, t, r, i) {
        return Ot(this, e, t, r, i, 1);
      },
      off: function(e, t, r) {
        var i, s;
        if (e && e.preventDefault && e.handleObj)
          return i = e.handleObj, n(e.delegateTarget).off(
            i.namespace ? i.origType + "." + i.namespace : i.origType,
            i.selector,
            i.handler
          ), this;
        if (typeof e == "object") {
          for (s in e)
            this.off(s, t, e[s]);
          return this;
        }
        return (t === !1 || typeof t == "function") && (r = t, t = void 0), r === !1 && (r = at), this.each(function() {
          n.event.remove(this, e, r, t);
        });
      }
    });
    var sn = /<script|<style|<link/i, $t = /checked\s*(?:[^=]|=\s*.checked.)/i, un = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
    function zt(e, t) {
      return O(e, "table") && O(t.nodeType !== 11 ? t : t.firstChild, "tr") && n(e).children("tbody")[0] || e;
    }
    function fn(e) {
      return e.type = (e.getAttribute("type") !== null) + "/" + e.type, e;
    }
    function cn(e) {
      return (e.type || "").slice(0, 5) === "true/" ? e.type = e.type.slice(5) : e.removeAttribute("type"), e;
    }
    function Wt(e, t) {
      var r, i, s, u, h, y, v;
      if (t.nodeType === 1) {
        if ($.hasData(e) && (u = $.get(e), v = u.events, v)) {
          $.remove(t, "handle events");
          for (s in v)
            for (r = 0, i = v[s].length; r < i; r++)
              n.event.add(t, s, v[s][r]);
        }
        ee.hasData(e) && (h = ee.access(e), y = n.extend({}, h), ee.set(t, y));
      }
    }
    function Sn(e, t) {
      var r = t.nodeName.toLowerCase();
      r === "input" && Ke.test(e.type) ? t.checked = e.checked : (r === "input" || r === "textarea") && (t.defaultValue = e.defaultValue);
    }
    function Ve(e, t, r, i) {
      t = E(t);
      var s, u, h, y, v, T, L = 0, j = e.length, F = j - 1, U = t[0], te = g(U);
      if (te || j > 1 && typeof U == "string" && !d.checkClone && $t.test(U))
        return e.each(function(fe) {
          var oe = e.eq(fe);
          te && (t[0] = U.call(this, fe, oe.html())), Ve(oe, t, r, i);
        });
      if (j && (s = Mt(t, e[0].ownerDocument, !1, e, i), u = s.firstChild, s.childNodes.length === 1 && (s = u), u || i)) {
        for (h = n.map(Ee(s, "script"), fn), y = h.length; L < j; L++)
          v = s, L !== F && (v = n.clone(v, !0, !0), y && n.merge(h, Ee(v, "script"))), r.call(e[L], v, L);
        if (y)
          for (T = h[h.length - 1].ownerDocument, n.map(h, cn), L = 0; L < y; L++)
            v = h[L], dt.test(v.type || "") && !$.access(v, "globalEval") && n.contains(T, v) && (v.src && (v.type || "").toLowerCase() !== "module" ? n._evalUrl && !v.noModule && n._evalUrl(v.src, {
              nonce: v.nonce || v.getAttribute("nonce")
            }, T) : Y(v.textContent.replace(un, ""), v, T));
      }
      return e;
    }
    function kt(e, t, r) {
      for (var i, s = t ? n.filter(t, e) : e, u = 0; (i = s[u]) != null; u++)
        !r && i.nodeType === 1 && n.cleanData(Ee(i)), i.parentNode && (r && qe(i) && ht(Ee(i, "script")), i.parentNode.removeChild(i));
      return e;
    }
    n.extend({
      htmlPrefilter: function(e) {
        return e;
      },
      clone: function(e, t, r) {
        var i, s, u, h, y = e.cloneNode(!0), v = qe(e);
        if (!d.noCloneChecked && (e.nodeType === 1 || e.nodeType === 11) && !n.isXMLDoc(e))
          for (h = Ee(y), u = Ee(e), i = 0, s = u.length; i < s; i++)
            Sn(u[i], h[i]);
        if (t)
          if (r)
            for (u = u || Ee(e), h = h || Ee(y), i = 0, s = u.length; i < s; i++)
              Wt(u[i], h[i]);
          else
            Wt(e, y);
        return h = Ee(y, "script"), h.length > 0 && ht(h, !v && Ee(e, "script")), y;
      },
      cleanData: function(e) {
        for (var t, r, i, s = n.event.special, u = 0; (r = e[u]) !== void 0; u++)
          if (re(r)) {
            if (t = r[$.expando]) {
              if (t.events)
                for (i in t.events)
                  s[i] ? n.event.remove(r, i) : n.removeEvent(r, i, t.handle);
              r[$.expando] = void 0;
            }
            r[ee.expando] && (r[ee.expando] = void 0);
          }
      }
    }), n.fn.extend({
      detach: function(e) {
        return kt(this, e, !0);
      },
      remove: function(e) {
        return kt(this, e);
      },
      text: function(e) {
        return ze(this, function(t) {
          return t === void 0 ? n.text(this) : this.empty().each(function() {
            (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) && (this.textContent = t);
          });
        }, null, e, arguments.length);
      },
      append: function() {
        return Ve(this, arguments, function(e) {
          if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
            var t = zt(this, e);
            t.appendChild(e);
          }
        });
      },
      prepend: function() {
        return Ve(this, arguments, function(e) {
          if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
            var t = zt(this, e);
            t.insertBefore(e, t.firstChild);
          }
        });
      },
      before: function() {
        return Ve(this, arguments, function(e) {
          this.parentNode && this.parentNode.insertBefore(e, this);
        });
      },
      after: function() {
        return Ve(this, arguments, function(e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
        });
      },
      empty: function() {
        for (var e, t = 0; (e = this[t]) != null; t++)
          e.nodeType === 1 && (n.cleanData(Ee(e, !1)), e.textContent = "");
        return this;
      },
      clone: function(e, t) {
        return e = e == null ? !1 : e, t = t == null ? e : t, this.map(function() {
          return n.clone(this, e, t);
        });
      },
      html: function(e) {
        return ze(this, function(t) {
          var r = this[0] || {}, i = 0, s = this.length;
          if (t === void 0 && r.nodeType === 1)
            return r.innerHTML;
          if (typeof t == "string" && !sn.test(t) && !Ie[(on.exec(t) || ["", ""])[1].toLowerCase()]) {
            t = n.htmlPrefilter(t);
            try {
              for (; i < s; i++)
                r = this[i] || {}, r.nodeType === 1 && (n.cleanData(Ee(r, !1)), r.innerHTML = t);
              r = 0;
            } catch (u) {
            }
          }
          r && this.empty().append(t);
        }, null, e, arguments.length);
      },
      replaceWith: function() {
        var e = [];
        return Ve(this, arguments, function(t) {
          var r = this.parentNode;
          n.inArray(this, e) < 0 && (n.cleanData(Ee(this)), r && r.replaceChild(t, this));
        }, e);
      }
    }), n.each({
      appendTo: "append",
      prependTo: "prepend",
      insertBefore: "before",
      insertAfter: "after",
      replaceAll: "replaceWith"
    }, function(e, t) {
      n.fn[e] = function(r) {
        for (var i, s = [], u = n(r), h = u.length - 1, y = 0; y <= h; y++)
          i = y === h ? this : this.clone(!0), n(u[y])[t](i), x.apply(s, i.get());
        return this.pushStack(s);
      };
    });
    var pt = new RegExp("^(" + we + ")(?!px)[a-z%]+$", "i"), gt = /^--/, _t = function(e) {
      var t = e.ownerDocument.defaultView;
      return (!t || !t.opener) && (t = M), t.getComputedStyle(e);
    }, Bt = function(e, t, r) {
      var i, s, u = {};
      for (s in t)
        u[s] = e.style[s], e.style[s] = t[s];
      i = r.call(e);
      for (s in t)
        e.style[s] = u[s];
      return i;
    }, ln = new RegExp(he.join("|"), "i");
    (function() {
      function e() {
        if (T) {
          v.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", T.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", Se.appendChild(v).appendChild(T);
          var L = M.getComputedStyle(T);
          r = L.top !== "1%", y = t(L.marginLeft) === 12, T.style.right = "60%", u = t(L.right) === 36, i = t(L.width) === 36, T.style.position = "absolute", s = t(T.offsetWidth / 3) === 12, Se.removeChild(v), T = null;
        }
      }
      function t(L) {
        return Math.round(parseFloat(L));
      }
      var r, i, s, u, h, y, v = D.createElement("div"), T = D.createElement("div");
      T.style && (T.style.backgroundClip = "content-box", T.cloneNode(!0).style.backgroundClip = "", d.clearCloneStyle = T.style.backgroundClip === "content-box", n.extend(d, {
        boxSizingReliable: function() {
          return e(), i;
        },
        pixelBoxStyles: function() {
          return e(), u;
        },
        pixelPosition: function() {
          return e(), r;
        },
        reliableMarginLeft: function() {
          return e(), y;
        },
        scrollboxSize: function() {
          return e(), s;
        },
        // Support: IE 9 - 11+, Edge 15 - 18+
        // IE/Edge misreport `getComputedStyle` of table rows with width/height
        // set in CSS while `offset*` properties report correct values.
        // Behavior in IE 9 is more subtle than in newer versions & it passes
        // some versions of this test; make sure not to make it pass there!
        //
        // Support: Firefox 70+
        // Only Firefox includes border widths
        // in computed dimensions. (gh-4529)
        reliableTrDimensions: function() {
          var L, j, F, U;
          return h == null && (L = D.createElement("table"), j = D.createElement("tr"), F = D.createElement("div"), L.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", j.style.cssText = "box-sizing:content-box;border:1px solid", j.style.height = "1px", F.style.height = "9px", F.style.display = "block", Se.appendChild(L).appendChild(j).appendChild(F), U = M.getComputedStyle(j), h = parseInt(U.height, 10) + parseInt(U.borderTopWidth, 10) + parseInt(U.borderBottomWidth, 10) === j.offsetHeight, Se.removeChild(L)), h;
        }
      }));
    })();
    function mt(e, t, r) {
      var i, s, u, h, y = gt.test(t), v = e.style;
      return r = r || _t(e), r && (h = r.getPropertyValue(t) || r[t], y && h && (h = h.replace(Re, "$1") || void 0), h === "" && !qe(e) && (h = n.style(e, t)), !d.pixelBoxStyles() && pt.test(h) && ln.test(t) && (i = v.width, s = v.minWidth, u = v.maxWidth, v.minWidth = v.maxWidth = v.width = h, h = r.width, v.width = i, v.minWidth = s, v.maxWidth = u)), h !== void 0 ? (
        // Support: IE <=9 - 11 only
        // IE returns zIndex value as an integer.
        h + ""
      ) : h;
    }
    function Qt(e, t) {
      return {
        get: function() {
          if (e()) {
            delete this.get;
            return;
          }
          return (this.get = t).apply(this, arguments);
        }
      };
    }
    var Vt = ["Webkit", "Moz", "ms"], Gt = D.createElement("div").style, wt = {};
    function sr(e) {
      for (var t = e[0].toUpperCase() + e.slice(1), r = Vt.length; r--; )
        if (e = Vt[r] + t, e in Gt)
          return e;
    }
    function Cn(e) {
      var t = n.cssProps[e] || wt[e];
      return t || (e in Gt ? e : wt[e] = sr(e) || e);
    }
    var ur = /^(none|table(?!-c[ea]).+)/, fr = { position: "absolute", visibility: "hidden", display: "block" }, $n = {
      letterSpacing: "0",
      fontWeight: "400"
    };
    function zn(e, t, r) {
      var i = J.exec(t);
      return i ? (
        // Guard against undefined "subtract", e.g., when used as in cssHooks
        Math.max(0, i[2] - (r || 0)) + (i[3] || "px")
      ) : t;
    }
    function En(e, t, r, i, s, u) {
      var h = t === "width" ? 1 : 0, y = 0, v = 0, T = 0;
      if (r === (i ? "border" : "content"))
        return 0;
      for (; h < 4; h += 2)
        r === "margin" && (T += n.css(e, r + he[h], !0, s)), i ? (r === "content" && (v -= n.css(e, "padding" + he[h], !0, s)), r !== "margin" && (v -= n.css(e, "border" + he[h] + "Width", !0, s))) : (v += n.css(e, "padding" + he[h], !0, s), r !== "padding" ? v += n.css(e, "border" + he[h] + "Width", !0, s) : y += n.css(e, "border" + he[h] + "Width", !0, s));
      return !i && u >= 0 && (v += Math.max(0, Math.ceil(
        e["offset" + t[0].toUpperCase() + t.slice(1)] - u - v - y - 0.5
        // If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
        // Use an explicit zero to avoid NaN (gh-3964)
      )) || 0), v + T;
    }
    function Wn(e, t, r) {
      var i = _t(e), s = !d.boxSizingReliable() || r, u = s && n.css(e, "boxSizing", !1, i) === "border-box", h = u, y = mt(e, t, i), v = "offset" + t[0].toUpperCase() + t.slice(1);
      if (pt.test(y)) {
        if (!r)
          return y;
        y = "auto";
      }
      return (!d.boxSizingReliable() && u || // Support: IE 10 - 11+, Edge 15 - 18+
      // IE/Edge misreport `getComputedStyle` of table rows with width/height
      // set in CSS while `offset*` properties report correct values.
      // Interestingly, in some cases IE 9 doesn't suffer from this issue.
      !d.reliableTrDimensions() && O(e, "tr") || // Fall back to offsetWidth/offsetHeight when value is "auto"
      // This happens for inline elements with no explicit setting (gh-3571)
      y === "auto" || // Support: Android <=4.1 - 4.3 only
      // Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
      !parseFloat(y) && n.css(e, "display", !1, i) === "inline") && // Make sure the element is visible & connected
      e.getClientRects().length && (u = n.css(e, "boxSizing", !1, i) === "border-box", h = v in e, h && (y = e[v])), y = parseFloat(y) || 0, y + En(
        e,
        t,
        r || (u ? "border" : "content"),
        h,
        i,
        // Provide the current computed size to request scroll gutter calculation (gh-3589)
        y
      ) + "px";
    }
    n.extend({
      // Add in style property hooks for overriding the default
      // behavior of getting and setting a style property
      cssHooks: {
        opacity: {
          get: function(e, t) {
            if (t) {
              var r = mt(e, "opacity");
              return r === "" ? "1" : r;
            }
          }
        }
      },
      // Don't automatically add "px" to these possibly-unitless properties
      cssNumber: {
        animationIterationCount: !0,
        aspectRatio: !0,
        borderImageSlice: !0,
        columnCount: !0,
        flexGrow: !0,
        flexShrink: !0,
        fontWeight: !0,
        gridArea: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnStart: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowStart: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        scale: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        // SVG-related
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0
      },
      // Add in properties whose names you wish to fix before
      // setting or getting the value
      cssProps: {},
      // Get and set the style property on a DOM Node
      style: function(e, t, r, i) {
        if (!(!e || e.nodeType === 3 || e.nodeType === 8 || !e.style)) {
          var s, u, h, y = H(t), v = gt.test(t), T = e.style;
          if (v || (t = Cn(y)), h = n.cssHooks[t] || n.cssHooks[y], r !== void 0) {
            if (u = typeof r, u === "string" && (s = J.exec(r)) && s[1] && (r = Me(e, t, s), u = "number"), r == null || r !== r)
              return;
            u === "number" && !v && (r += s && s[3] || (n.cssNumber[y] ? "" : "px")), !d.clearCloneStyle && r === "" && t.indexOf("background") === 0 && (T[t] = "inherit"), (!h || !("set" in h) || (r = h.set(e, r, i)) !== void 0) && (v ? T.setProperty(t, r) : T[t] = r);
          } else
            return h && "get" in h && (s = h.get(e, !1, i)) !== void 0 ? s : T[t];
        }
      },
      css: function(e, t, r, i) {
        var s, u, h, y = H(t), v = gt.test(t);
        return v || (t = Cn(y)), h = n.cssHooks[t] || n.cssHooks[y], h && "get" in h && (s = h.get(e, !0, r)), s === void 0 && (s = mt(e, t, i)), s === "normal" && t in $n && (s = $n[t]), r === "" || r ? (u = parseFloat(s), r === !0 || isFinite(u) ? u || 0 : s) : s;
      }
    }), n.each(["height", "width"], function(e, t) {
      n.cssHooks[t] = {
        get: function(r, i, s) {
          if (i)
            return ur.test(n.css(r, "display")) && // Support: Safari 8+
            // Table columns in Safari have non-zero offsetWidth & zero
            // getBoundingClientRect().width unless display is changed.
            // Support: IE <=11 only
            // Running getBoundingClientRect on a disconnected node
            // in IE throws an error.
            (!r.getClientRects().length || !r.getBoundingClientRect().width) ? Bt(r, fr, function() {
              return Wn(r, t, s);
            }) : Wn(r, t, s);
        },
        set: function(r, i, s) {
          var u, h = _t(r), y = !d.scrollboxSize() && h.position === "absolute", v = y || s, T = v && n.css(r, "boxSizing", !1, h) === "border-box", L = s ? En(
            r,
            t,
            s,
            T,
            h
          ) : 0;
          return T && y && (L -= Math.ceil(
            r["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(h[t]) - En(r, t, "border", !1, h) - 0.5
          )), L && (u = J.exec(i)) && (u[3] || "px") !== "px" && (r.style[t] = i, i = n.css(r, t)), zn(r, i, L);
        }
      };
    }), n.cssHooks.marginLeft = Qt(
      d.reliableMarginLeft,
      function(e, t) {
        if (t)
          return (parseFloat(mt(e, "marginLeft")) || e.getBoundingClientRect().left - Bt(e, { marginLeft: 0 }, function() {
            return e.getBoundingClientRect().left;
          })) + "px";
      }
    ), n.each({
      margin: "",
      padding: "",
      border: "Width"
    }, function(e, t) {
      n.cssHooks[e + t] = {
        expand: function(r) {
          for (var i = 0, s = {}, u = typeof r == "string" ? r.split(" ") : [r]; i < 4; i++)
            s[e + he[i] + t] = u[i] || u[i - 2] || u[0];
          return s;
        }
      }, e !== "margin" && (n.cssHooks[e + t].set = zn);
    }), n.fn.extend({
      css: function(e, t) {
        return ze(this, function(r, i, s) {
          var u, h, y = {}, v = 0;
          if (Array.isArray(i)) {
            for (u = _t(r), h = i.length; v < h; v++)
              y[i[v]] = n.css(r, i[v], !1, u);
            return y;
          }
          return s !== void 0 ? n.style(r, i, s) : n.css(r, i);
        }, e, t, arguments.length > 1);
      }
    });
    function Ue(e, t, r, i, s) {
      return new Ue.prototype.init(e, t, r, i, s);
    }
    n.Tween = Ue, Ue.prototype = {
      constructor: Ue,
      init: function(e, t, r, i, s, u) {
        this.elem = e, this.prop = r, this.easing = s || n.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = u || (n.cssNumber[r] ? "" : "px");
      },
      cur: function() {
        var e = Ue.propHooks[this.prop];
        return e && e.get ? e.get(this) : Ue.propHooks._default.get(this);
      },
      run: function(e) {
        var t, r = Ue.propHooks[this.prop];
        return this.options.duration ? this.pos = t = n.easing[this.easing](
          e,
          this.options.duration * e,
          0,
          1,
          this.options.duration
        ) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), r && r.set ? r.set(this) : Ue.propHooks._default.set(this), this;
      }
    }, Ue.prototype.init.prototype = Ue.prototype, Ue.propHooks = {
      _default: {
        get: function(e) {
          var t;
          return e.elem.nodeType !== 1 || e.elem[e.prop] != null && e.elem.style[e.prop] == null ? e.elem[e.prop] : (t = n.css(e.elem, e.prop, ""), !t || t === "auto" ? 0 : t);
        },
        set: function(e) {
          n.fx.step[e.prop] ? n.fx.step[e.prop](e) : e.elem.nodeType === 1 && (n.cssHooks[e.prop] || e.elem.style[Cn(e.prop)] != null) ? n.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now;
        }
      }
    }, Ue.propHooks.scrollTop = Ue.propHooks.scrollLeft = {
      set: function(e) {
        e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
      }
    }, n.easing = {
      linear: function(e) {
        return e;
      },
      swing: function(e) {
        return 0.5 - Math.cos(e * Math.PI) / 2;
      },
      _default: "swing"
    }, n.fx = Ue.prototype.init, n.fx.step = {};
    var qt, dn, cr = /^(?:toggle|show|hide)$/, lr = /queueHooks$/;
    function Dn() {
      dn && (D.hidden === !1 && M.requestAnimationFrame ? M.requestAnimationFrame(Dn) : M.setTimeout(Dn, n.fx.interval), n.fx.tick());
    }
    function Bn() {
      return M.setTimeout(function() {
        qt = void 0;
      }), qt = Date.now();
    }
    function hn(e, t) {
      var r, i = 0, s = { height: e };
      for (t = t ? 1 : 0; i < 4; i += 2 - t)
        r = he[i], s["margin" + r] = s["padding" + r] = e;
      return t && (s.opacity = s.width = e), s;
    }
    function Qn(e, t, r) {
      for (var i, s = (Je.tweeners[t] || []).concat(Je.tweeners["*"]), u = 0, h = s.length; u < h; u++)
        if (i = s[u].call(r, t, e))
          return i;
    }
    function dr(e, t, r) {
      var i, s, u, h, y, v, T, L, j = "width" in t || "height" in t, F = this, U = {}, te = e.style, fe = e.nodeType && ye(e), oe = $.get(e, "fxshow");
      r.queue || (h = n._queueHooks(e, "fx"), h.unqueued == null && (h.unqueued = 0, y = h.empty.fire, h.empty.fire = function() {
        h.unqueued || y();
      }), h.unqueued++, F.always(function() {
        F.always(function() {
          h.unqueued--, n.queue(e, "fx").length || h.empty.fire();
        });
      }));
      for (i in t)
        if (s = t[i], cr.test(s)) {
          if (delete t[i], u = u || s === "toggle", s === (fe ? "hide" : "show"))
            if (s === "show" && oe && oe[i] !== void 0)
              fe = !0;
            else
              continue;
          U[i] = oe && oe[i] || n.style(e, i);
        }
      if (v = !n.isEmptyObject(t), !(!v && n.isEmptyObject(U))) {
        j && e.nodeType === 1 && (r.overflow = [te.overflow, te.overflowX, te.overflowY], T = oe && oe.display, T == null && (T = $.get(e, "display")), L = n.css(e, "display"), L === "none" && (T ? L = T : (Le([e], !0), T = e.style.display || T, L = n.css(e, "display"), Le([e]))), (L === "inline" || L === "inline-block" && T != null) && n.css(e, "float") === "none" && (v || (F.done(function() {
          te.display = T;
        }), T == null && (L = te.display, T = L === "none" ? "" : L)), te.display = "inline-block")), r.overflow && (te.overflow = "hidden", F.always(function() {
          te.overflow = r.overflow[0], te.overflowX = r.overflow[1], te.overflowY = r.overflow[2];
        })), v = !1;
        for (i in U)
          v || (oe ? "hidden" in oe && (fe = oe.hidden) : oe = $.access(e, "fxshow", { display: T }), u && (oe.hidden = !fe), fe && Le([e], !0), F.done(function() {
            fe || Le([e]), $.remove(e, "fxshow");
            for (i in U)
              n.style(e, i, U[i]);
          })), v = Qn(fe ? oe[i] : 0, i, F), i in oe || (oe[i] = v.start, fe && (v.end = v.start, v.start = 0));
      }
    }
    function hr(e, t) {
      var r, i, s, u, h;
      for (r in e)
        if (i = H(r), s = t[i], u = e[r], Array.isArray(u) && (s = u[1], u = e[r] = u[0]), r !== i && (e[i] = u, delete e[r]), h = n.cssHooks[i], h && "expand" in h) {
          u = h.expand(u), delete e[i];
          for (r in u)
            r in e || (e[r] = u[r], t[r] = s);
        } else
          t[i] = s;
    }
    function Je(e, t, r) {
      var i, s, u = 0, h = Je.prefilters.length, y = n.Deferred().always(function() {
        delete v.elem;
      }), v = function() {
        if (s)
          return !1;
        for (var j = qt || Bn(), F = Math.max(0, T.startTime + T.duration - j), U = F / T.duration || 0, te = 1 - U, fe = 0, oe = T.tweens.length; fe < oe; fe++)
          T.tweens[fe].run(te);
        return y.notifyWith(e, [T, te, F]), te < 1 && oe ? F : (oe || y.notifyWith(e, [T, 1, 0]), y.resolveWith(e, [T]), !1);
      }, T = y.promise({
        elem: e,
        props: n.extend({}, t),
        opts: n.extend(!0, {
          specialEasing: {},
          easing: n.easing._default
        }, r),
        originalProperties: t,
        originalOptions: r,
        startTime: qt || Bn(),
        duration: r.duration,
        tweens: [],
        createTween: function(j, F) {
          var U = n.Tween(
            e,
            T.opts,
            j,
            F,
            T.opts.specialEasing[j] || T.opts.easing
          );
          return T.tweens.push(U), U;
        },
        stop: function(j) {
          var F = 0, U = j ? T.tweens.length : 0;
          if (s)
            return this;
          for (s = !0; F < U; F++)
            T.tweens[F].run(1);
          return j ? (y.notifyWith(e, [T, 1, 0]), y.resolveWith(e, [T, j])) : y.rejectWith(e, [T, j]), this;
        }
      }), L = T.props;
      for (hr(L, T.opts.specialEasing); u < h; u++)
        if (i = Je.prefilters[u].call(T, e, L, T.opts), i)
          return g(i.stop) && (n._queueHooks(T.elem, T.opts.queue).stop = i.stop.bind(i)), i;
      return n.map(L, Qn, T), g(T.opts.start) && T.opts.start.call(e, T), T.progress(T.opts.progress).done(T.opts.done, T.opts.complete).fail(T.opts.fail).always(T.opts.always), n.fx.timer(
        n.extend(v, {
          elem: e,
          anim: T,
          queue: T.opts.queue
        })
      ), T;
    }
    n.Animation = n.extend(Je, {
      tweeners: {
        "*": [function(e, t) {
          var r = this.createTween(e, t);
          return Me(r.elem, e, J.exec(t), r), r;
        }]
      },
      tweener: function(e, t) {
        g(e) ? (t = e, e = ["*"]) : e = e.match(V);
        for (var r, i = 0, s = e.length; i < s; i++)
          r = e[i], Je.tweeners[r] = Je.tweeners[r] || [], Je.tweeners[r].unshift(t);
      },
      prefilters: [dr],
      prefilter: function(e, t) {
        t ? Je.prefilters.unshift(e) : Je.prefilters.push(e);
      }
    }), n.speed = function(e, t, r) {
      var i = e && typeof e == "object" ? n.extend({}, e) : {
        complete: r || !r && t || g(e) && e,
        duration: e,
        easing: r && t || t && !g(t) && t
      };
      return n.fx.off ? i.duration = 0 : typeof i.duration != "number" && (i.duration in n.fx.speeds ? i.duration = n.fx.speeds[i.duration] : i.duration = n.fx.speeds._default), (i.queue == null || i.queue === !0) && (i.queue = "fx"), i.old = i.complete, i.complete = function() {
        g(i.old) && i.old.call(this), i.queue && n.dequeue(this, i.queue);
      }, i;
    }, n.fn.extend({
      fadeTo: function(e, t, r, i) {
        return this.filter(ye).css("opacity", 0).show().end().animate({ opacity: t }, e, r, i);
      },
      animate: function(e, t, r, i) {
        var s = n.isEmptyObject(e), u = n.speed(t, r, i), h = function() {
          var y = Je(this, n.extend({}, e), u);
          (s || $.get(this, "finish")) && y.stop(!0);
        };
        return h.finish = h, s || u.queue === !1 ? this.each(h) : this.queue(u.queue, h);
      },
      stop: function(e, t, r) {
        var i = function(s) {
          var u = s.stop;
          delete s.stop, u(r);
        };
        return typeof e != "string" && (r = t, t = e, e = void 0), t && this.queue(e || "fx", []), this.each(function() {
          var s = !0, u = e != null && e + "queueHooks", h = n.timers, y = $.get(this);
          if (u)
            y[u] && y[u].stop && i(y[u]);
          else
            for (u in y)
              y[u] && y[u].stop && lr.test(u) && i(y[u]);
          for (u = h.length; u--; )
            h[u].elem === this && (e == null || h[u].queue === e) && (h[u].anim.stop(r), s = !1, h.splice(u, 1));
          (s || !r) && n.dequeue(this, e);
        });
      },
      finish: function(e) {
        return e !== !1 && (e = e || "fx"), this.each(function() {
          var t, r = $.get(this), i = r[e + "queue"], s = r[e + "queueHooks"], u = n.timers, h = i ? i.length : 0;
          for (r.finish = !0, n.queue(this, e, []), s && s.stop && s.stop.call(this, !0), t = u.length; t--; )
            u[t].elem === this && u[t].queue === e && (u[t].anim.stop(!0), u.splice(t, 1));
          for (t = 0; t < h; t++)
            i[t] && i[t].finish && i[t].finish.call(this);
          delete r.finish;
        });
      }
    }), n.each(["toggle", "show", "hide"], function(e, t) {
      var r = n.fn[t];
      n.fn[t] = function(i, s, u) {
        return i == null || typeof i == "boolean" ? r.apply(this, arguments) : this.animate(hn(t, !0), i, s, u);
      };
    }), n.each({
      slideDown: hn("show"),
      slideUp: hn("hide"),
      slideToggle: hn("toggle"),
      fadeIn: { opacity: "show" },
      fadeOut: { opacity: "hide" },
      fadeToggle: { opacity: "toggle" }
    }, function(e, t) {
      n.fn[e] = function(r, i, s) {
        return this.animate(t, r, i, s);
      };
    }), n.timers = [], n.fx.tick = function() {
      var e, t = 0, r = n.timers;
      for (qt = Date.now(); t < r.length; t++)
        e = r[t], !e() && r[t] === e && r.splice(t--, 1);
      r.length || n.fx.stop(), qt = void 0;
    }, n.fx.timer = function(e) {
      n.timers.push(e), n.fx.start();
    }, n.fx.interval = 13, n.fx.start = function() {
      dn || (dn = !0, Dn());
    }, n.fx.stop = function() {
      dn = null;
    }, n.fx.speeds = {
      slow: 600,
      fast: 200,
      // Default speed
      _default: 400
    }, n.fn.delay = function(e, t) {
      return e = n.fx && n.fx.speeds[e] || e, t = t || "fx", this.queue(t, function(r, i) {
        var s = M.setTimeout(r, e);
        i.stop = function() {
          M.clearTimeout(s);
        };
      });
    }, function() {
      var e = D.createElement("input"), t = D.createElement("select"), r = t.appendChild(D.createElement("option"));
      e.type = "checkbox", d.checkOn = e.value !== "", d.optSelected = r.selected, e = D.createElement("input"), e.value = "t", e.type = "radio", d.radioValue = e.value === "t";
    }();
    var Vn, Xt = n.expr.attrHandle;
    n.fn.extend({
      attr: function(e, t) {
        return ze(this, n.attr, e, t, arguments.length > 1);
      },
      removeAttr: function(e) {
        return this.each(function() {
          n.removeAttr(this, e);
        });
      }
    }), n.extend({
      attr: function(e, t, r) {
        var i, s, u = e.nodeType;
        if (!(u === 3 || u === 8 || u === 2)) {
          if (typeof e.getAttribute == "undefined")
            return n.prop(e, t, r);
          if ((u !== 1 || !n.isXMLDoc(e)) && (s = n.attrHooks[t.toLowerCase()] || (n.expr.match.bool.test(t) ? Vn : void 0)), r !== void 0) {
            if (r === null) {
              n.removeAttr(e, t);
              return;
            }
            return s && "set" in s && (i = s.set(e, r, t)) !== void 0 ? i : (e.setAttribute(t, r + ""), r);
          }
          return s && "get" in s && (i = s.get(e, t)) !== null ? i : (i = n.find.attr(e, t), i == null ? void 0 : i);
        }
      },
      attrHooks: {
        type: {
          set: function(e, t) {
            if (!d.radioValue && t === "radio" && O(e, "input")) {
              var r = e.value;
              return e.setAttribute("type", t), r && (e.value = r), t;
            }
          }
        }
      },
      removeAttr: function(e, t) {
        var r, i = 0, s = t && t.match(V);
        if (s && e.nodeType === 1)
          for (; r = s[i++]; )
            e.removeAttribute(r);
      }
    }), Vn = {
      set: function(e, t, r) {
        return t === !1 ? n.removeAttr(e, r) : e.setAttribute(r, r), r;
      }
    }, n.each(n.expr.match.bool.source.match(/\w+/g), function(e, t) {
      var r = Xt[t] || n.find.attr;
      Xt[t] = function(i, s, u) {
        var h, y, v = s.toLowerCase();
        return u || (y = Xt[v], Xt[v] = h, h = r(i, s, u) != null ? v : null, Xt[v] = y), h;
      };
    });
    var pr = /^(?:input|select|textarea|button)$/i, gr = /^(?:a|area)$/i;
    n.fn.extend({
      prop: function(e, t) {
        return ze(this, n.prop, e, t, arguments.length > 1);
      },
      removeProp: function(e) {
        return this.each(function() {
          delete this[n.propFix[e] || e];
        });
      }
    }), n.extend({
      prop: function(e, t, r) {
        var i, s, u = e.nodeType;
        if (!(u === 3 || u === 8 || u === 2))
          return (u !== 1 || !n.isXMLDoc(e)) && (t = n.propFix[t] || t, s = n.propHooks[t]), r !== void 0 ? s && "set" in s && (i = s.set(e, r, t)) !== void 0 ? i : e[t] = r : s && "get" in s && (i = s.get(e, t)) !== null ? i : e[t];
      },
      propHooks: {
        tabIndex: {
          get: function(e) {
            var t = n.find.attr(e, "tabindex");
            return t ? parseInt(t, 10) : pr.test(e.nodeName) || gr.test(e.nodeName) && e.href ? 0 : -1;
          }
        }
      },
      propFix: {
        for: "htmlFor",
        class: "className"
      }
    }), d.optSelected || (n.propHooks.selected = {
      get: function(e) {
        var t = e.parentNode;
        return t && t.parentNode && t.parentNode.selectedIndex, null;
      },
      set: function(e) {
        var t = e.parentNode;
        t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
      }
    }), n.each([
      "tabIndex",
      "readOnly",
      "maxLength",
      "cellSpacing",
      "cellPadding",
      "rowSpan",
      "colSpan",
      "useMap",
      "frameBorder",
      "contentEditable"
    ], function() {
      n.propFix[this.toLowerCase()] = this;
    });
    function Tt(e) {
      var t = e.match(V) || [];
      return t.join(" ");
    }
    function St(e) {
      return e.getAttribute && e.getAttribute("class") || "";
    }
    function An(e) {
      return Array.isArray(e) ? e : typeof e == "string" ? e.match(V) || [] : [];
    }
    n.fn.extend({
      addClass: function(e) {
        var t, r, i, s, u, h;
        return g(e) ? this.each(function(y) {
          n(this).addClass(e.call(this, y, St(this)));
        }) : (t = An(e), t.length ? this.each(function() {
          if (i = St(this), r = this.nodeType === 1 && " " + Tt(i) + " ", r) {
            for (u = 0; u < t.length; u++)
              s = t[u], r.indexOf(" " + s + " ") < 0 && (r += s + " ");
            h = Tt(r), i !== h && this.setAttribute("class", h);
          }
        }) : this);
      },
      removeClass: function(e) {
        var t, r, i, s, u, h;
        return g(e) ? this.each(function(y) {
          n(this).removeClass(e.call(this, y, St(this)));
        }) : arguments.length ? (t = An(e), t.length ? this.each(function() {
          if (i = St(this), r = this.nodeType === 1 && " " + Tt(i) + " ", r) {
            for (u = 0; u < t.length; u++)
              for (s = t[u]; r.indexOf(" " + s + " ") > -1; )
                r = r.replace(" " + s + " ", " ");
            h = Tt(r), i !== h && this.setAttribute("class", h);
          }
        }) : this) : this.attr("class", "");
      },
      toggleClass: function(e, t) {
        var r, i, s, u, h = typeof e, y = h === "string" || Array.isArray(e);
        return g(e) ? this.each(function(v) {
          n(this).toggleClass(
            e.call(this, v, St(this), t),
            t
          );
        }) : typeof t == "boolean" && y ? t ? this.addClass(e) : this.removeClass(e) : (r = An(e), this.each(function() {
          if (y)
            for (u = n(this), s = 0; s < r.length; s++)
              i = r[s], u.hasClass(i) ? u.removeClass(i) : u.addClass(i);
          else (e === void 0 || h === "boolean") && (i = St(this), i && $.set(this, "__className__", i), this.setAttribute && this.setAttribute(
            "class",
            i || e === !1 ? "" : $.get(this, "__className__") || ""
          ));
        }));
      },
      hasClass: function(e) {
        var t, r, i = 0;
        for (t = " " + e + " "; r = this[i++]; )
          if (r.nodeType === 1 && (" " + Tt(St(r)) + " ").indexOf(t) > -1)
            return !0;
        return !1;
      }
    });
    var mr = /\r/g;
    n.fn.extend({
      val: function(e) {
        var t, r, i, s = this[0];
        return arguments.length ? (i = g(e), this.each(function(u) {
          var h;
          this.nodeType === 1 && (i ? h = e.call(this, u, n(this).val()) : h = e, h == null ? h = "" : typeof h == "number" ? h += "" : Array.isArray(h) && (h = n.map(h, function(y) {
            return y == null ? "" : y + "";
          })), t = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()], (!t || !("set" in t) || t.set(this, h, "value") === void 0) && (this.value = h));
        })) : s ? (t = n.valHooks[s.type] || n.valHooks[s.nodeName.toLowerCase()], t && "get" in t && (r = t.get(s, "value")) !== void 0 ? r : (r = s.value, typeof r == "string" ? r.replace(mr, "") : r == null ? "" : r)) : void 0;
      }
    }), n.extend({
      valHooks: {
        option: {
          get: function(e) {
            var t = n.find.attr(e, "value");
            return t != null ? t : (
              // Support: IE <=10 - 11 only
              // option.text throws exceptions (trac-14686, trac-14858)
              // Strip and collapse whitespace
              // https://html.spec.whatwg.org/#strip-and-collapse-whitespace
              Tt(n.text(e))
            );
          }
        },
        select: {
          get: function(e) {
            var t, r, i, s = e.options, u = e.selectedIndex, h = e.type === "select-one", y = h ? null : [], v = h ? u + 1 : s.length;
            for (u < 0 ? i = v : i = h ? u : 0; i < v; i++)
              if (r = s[i], (r.selected || i === u) && // Don't return options that are disabled or in a disabled optgroup
              !r.disabled && (!r.parentNode.disabled || !O(r.parentNode, "optgroup"))) {
                if (t = n(r).val(), h)
                  return t;
                y.push(t);
              }
            return y;
          },
          set: function(e, t) {
            for (var r, i, s = e.options, u = n.makeArray(t), h = s.length; h--; )
              i = s[h], (i.selected = n.inArray(n.valHooks.option.get(i), u) > -1) && (r = !0);
            return r || (e.selectedIndex = -1), u;
          }
        }
      }
    }), n.each(["radio", "checkbox"], function() {
      n.valHooks[this] = {
        set: function(e, t) {
          if (Array.isArray(t))
            return e.checked = n.inArray(n(e).val(), t) > -1;
        }
      }, d.checkOn || (n.valHooks[this].get = function(e) {
        return e.getAttribute("value") === null ? "on" : e.value;
      });
    });
    var Jt = M.location, Gn = { guid: Date.now() }, Rn = /\?/;
    n.parseXML = function(e) {
      var t, r;
      if (!e || typeof e != "string")
        return null;
      try {
        t = new M.DOMParser().parseFromString(e, "text/xml");
      } catch (i) {
      }
      return r = t && t.getElementsByTagName("parsererror")[0], (!t || r) && n.error("Invalid XML: " + (r ? n.map(r.childNodes, function(i) {
        return i.textContent;
      }).join(`
`) : e)), t;
    };
    var Xn = /^(?:focusinfocus|focusoutblur)$/, Jn = function(e) {
      e.stopPropagation();
    };
    n.extend(n.event, {
      trigger: function(e, t, r, i) {
        var s, u, h, y, v, T, L, j, F = [r || D], U = p.call(e, "type") ? e.type : e, te = p.call(e, "namespace") ? e.namespace.split(".") : [];
        if (u = j = h = r = r || D, !(r.nodeType === 3 || r.nodeType === 8) && !Xn.test(U + n.event.triggered) && (U.indexOf(".") > -1 && (te = U.split("."), U = te.shift(), te.sort()), v = U.indexOf(":") < 0 && "on" + U, e = e[n.expando] ? e : new n.Event(U, typeof e == "object" && e), e.isTrigger = i ? 2 : 3, e.namespace = te.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + te.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = r), t = t == null ? [e] : n.makeArray(t, [e]), L = n.event.special[U] || {}, !(!i && L.trigger && L.trigger.apply(r, t) === !1))) {
          if (!i && !L.noBubble && !w(r)) {
            for (y = L.delegateType || U, Xn.test(y + U) || (u = u.parentNode); u; u = u.parentNode)
              F.push(u), h = u;
            h === (r.ownerDocument || D) && F.push(h.defaultView || h.parentWindow || M);
          }
          for (s = 0; (u = F[s++]) && !e.isPropagationStopped(); )
            j = u, e.type = s > 1 ? y : L.bindType || U, T = ($.get(u, "events") || /* @__PURE__ */ Object.create(null))[e.type] && $.get(u, "handle"), T && T.apply(u, t), T = v && u[v], T && T.apply && re(u) && (e.result = T.apply(u, t), e.result === !1 && e.preventDefault());
          return e.type = U, !i && !e.isDefaultPrevented() && (!L._default || L._default.apply(F.pop(), t) === !1) && re(r) && v && g(r[U]) && !w(r) && (h = r[v], h && (r[v] = null), n.event.triggered = U, e.isPropagationStopped() && j.addEventListener(U, Jn), r[U](), e.isPropagationStopped() && j.removeEventListener(U, Jn), n.event.triggered = void 0, h && (r[v] = h)), e.result;
        }
      },
      // Piggyback on a donor event to simulate a different one
      // Used only for `focus(in | out)` events
      simulate: function(e, t, r) {
        var i = n.extend(
          new n.Event(),
          r,
          {
            type: e,
            isSimulated: !0
          }
        );
        n.event.trigger(i, null, t);
      }
    }), n.fn.extend({
      trigger: function(e, t) {
        return this.each(function() {
          n.event.trigger(e, t, this);
        });
      },
      triggerHandler: function(e, t) {
        var r = this[0];
        if (r)
          return n.event.trigger(e, t, r, !0);
      }
    });
    var vr = /\[\]$/, Yn = /\r?\n/g, xr = /^(?:submit|button|image|reset|file)$/i, yr = /^(?:input|select|textarea|keygen)/i;
    function Fn(e, t, r, i) {
      var s;
      if (Array.isArray(t))
        n.each(t, function(u, h) {
          r || vr.test(e) ? i(e, h) : Fn(
            e + "[" + (typeof h == "object" && h != null ? u : "") + "]",
            h,
            r,
            i
          );
        });
      else if (!r && Q(t) === "object")
        for (s in t)
          Fn(e + "[" + s + "]", t[s], r, i);
      else
        i(e, t);
    }
    n.param = function(e, t) {
      var r, i = [], s = function(u, h) {
        var y = g(h) ? h() : h;
        i[i.length] = encodeURIComponent(u) + "=" + encodeURIComponent(y == null ? "" : y);
      };
      if (e == null)
        return "";
      if (Array.isArray(e) || e.jquery && !n.isPlainObject(e))
        n.each(e, function() {
          s(this.name, this.value);
        });
      else
        for (r in e)
          Fn(r, e[r], t, s);
      return i.join("&");
    }, n.fn.extend({
      serialize: function() {
        return n.param(this.serializeArray());
      },
      serializeArray: function() {
        return this.map(function() {
          var e = n.prop(this, "elements");
          return e ? n.makeArray(e) : this;
        }).filter(function() {
          var e = this.type;
          return this.name && !n(this).is(":disabled") && yr.test(this.nodeName) && !xr.test(e) && (this.checked || !Ke.test(e));
        }).map(function(e, t) {
          var r = n(this).val();
          return r == null ? null : Array.isArray(r) ? n.map(r, function(i) {
            return { name: t.name, value: i.replace(Yn, `\r
`) };
          }) : { name: t.name, value: r.replace(Yn, `\r
`) };
        }).get();
      }
    });
    var br = /%20/g, _r = /#.*$/, wr = /([?&])_=[^&]*/, Tr = /^(.*?):[ \t]*([^\r\n]*)$/mg, Sr = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Cr = /^(?:GET|HEAD)$/, Er = /^\/\//, Kn = {}, On = {}, Zn = "*/".concat("*"), kn = D.createElement("a");
    kn.href = Jt.href;
    function er(e) {
      return function(t, r) {
        typeof t != "string" && (r = t, t = "*");
        var i, s = 0, u = t.toLowerCase().match(V) || [];
        if (g(r))
          for (; i = u[s++]; )
            i[0] === "+" ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(r)) : (e[i] = e[i] || []).push(r);
      };
    }
    function tr(e, t, r, i) {
      var s = {}, u = e === On;
      function h(y) {
        var v;
        return s[y] = !0, n.each(e[y] || [], function(T, L) {
          var j = L(t, r, i);
          if (typeof j == "string" && !u && !s[j])
            return t.dataTypes.unshift(j), h(j), !1;
          if (u)
            return !(v = j);
        }), v;
      }
      return h(t.dataTypes[0]) || !s["*"] && h("*");
    }
    function qn(e, t) {
      var r, i, s = n.ajaxSettings.flatOptions || {};
      for (r in t)
        t[r] !== void 0 && ((s[r] ? e : i || (i = {}))[r] = t[r]);
      return i && n.extend(!0, e, i), e;
    }
    function Dr(e, t, r) {
      for (var i, s, u, h, y = e.contents, v = e.dataTypes; v[0] === "*"; )
        v.shift(), i === void 0 && (i = e.mimeType || t.getResponseHeader("Content-Type"));
      if (i) {
        for (s in y)
          if (y[s] && y[s].test(i)) {
            v.unshift(s);
            break;
          }
      }
      if (v[0] in r)
        u = v[0];
      else {
        for (s in r) {
          if (!v[0] || e.converters[s + " " + v[0]]) {
            u = s;
            break;
          }
          h || (h = s);
        }
        u = u || h;
      }
      if (u)
        return u !== v[0] && v.unshift(u), r[u];
    }
    function Ar(e, t, r, i) {
      var s, u, h, y, v, T = {}, L = e.dataTypes.slice();
      if (L[1])
        for (h in e.converters)
          T[h.toLowerCase()] = e.converters[h];
      for (u = L.shift(); u; )
        if (e.responseFields[u] && (r[e.responseFields[u]] = t), !v && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), v = u, u = L.shift(), u) {
          if (u === "*")
            u = v;
          else if (v !== "*" && v !== u) {
            if (h = T[v + " " + u] || T["* " + u], !h) {
              for (s in T)
                if (y = s.split(" "), y[1] === u && (h = T[v + " " + y[0]] || T["* " + y[0]], h)) {
                  h === !0 ? h = T[s] : T[s] !== !0 && (u = y[0], L.unshift(y[1]));
                  break;
                }
            }
            if (h !== !0)
              if (h && e.throws)
                t = h(t);
              else
                try {
                  t = h(t);
                } catch (j) {
                  return {
                    state: "parsererror",
                    error: h ? j : "No conversion from " + v + " to " + u
                  };
                }
          }
        }
      return { state: "success", data: t };
    }
    n.extend({
      // Counter for holding the number of active queries
      active: 0,
      // Last-Modified header cache for next request
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: Jt.href,
        type: "GET",
        isLocal: Sr.test(Jt.protocol),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        /*
        timeout: 0,
        data: null,
        dataType: null,
        username: null,
        password: null,
        cache: null,
        throws: false,
        traditional: false,
        headers: {},
        */
        accepts: {
          "*": Zn,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript"
        },
        contents: {
          xml: /\bxml\b/,
          html: /\bhtml/,
          json: /\bjson\b/
        },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON"
        },
        // Data converters
        // Keys separate source (or catchall "*") and destination types with a single space
        converters: {
          // Convert anything to text
          "* text": String,
          // Text to html (true = no transformation)
          "text html": !0,
          // Evaluate text as a json expression
          "text json": JSON.parse,
          // Parse text as xml
          "text xml": n.parseXML
        },
        // For options that shouldn't be deep extended:
        // you can add your own custom options here if
        // and when you create one that shouldn't be
        // deep extended (see ajaxExtend)
        flatOptions: {
          url: !0,
          context: !0
        }
      },
      // Creates a full fledged settings object into target
      // with both ajaxSettings and settings fields.
      // If target is omitted, writes into ajaxSettings.
      ajaxSetup: function(e, t) {
        return t ? (
          // Building a settings object
          qn(qn(e, n.ajaxSettings), t)
        ) : (
          // Extending ajaxSettings
          qn(n.ajaxSettings, e)
        );
      },
      ajaxPrefilter: er(Kn),
      ajaxTransport: er(On),
      // Main method
      ajax: function(e, t) {
        typeof e == "object" && (t = e, e = void 0), t = t || {};
        var r, i, s, u, h, y, v, T, L, j, F = n.ajaxSetup({}, t), U = F.context || F, te = F.context && (U.nodeType || U.jquery) ? n(U) : n.event, fe = n.Deferred(), oe = n.Callbacks("once memory"), Fe = F.statusCode || {}, De = {}, Ze = {}, et = "canceled", ue = {
          readyState: 0,
          // Builds headers hashtable if needed
          getResponseHeader: function(ce) {
            var Te;
            if (v) {
              if (!u)
                for (u = {}; Te = Tr.exec(s); )
                  u[Te[1].toLowerCase() + " "] = (u[Te[1].toLowerCase() + " "] || []).concat(Te[2]);
              Te = u[ce.toLowerCase() + " "];
            }
            return Te == null ? null : Te.join(", ");
          },
          // Raw string
          getAllResponseHeaders: function() {
            return v ? s : null;
          },
          // Caches the header
          setRequestHeader: function(ce, Te) {
            return v == null && (ce = Ze[ce.toLowerCase()] = Ze[ce.toLowerCase()] || ce, De[ce] = Te), this;
          },
          // Overrides response content-type header
          overrideMimeType: function(ce) {
            return v == null && (F.mimeType = ce), this;
          },
          // Status-dependent callbacks
          statusCode: function(ce) {
            var Te;
            if (ce)
              if (v)
                ue.always(ce[ue.status]);
              else
                for (Te in ce)
                  Fe[Te] = [Fe[Te], ce[Te]];
            return this;
          },
          // Cancel the request
          abort: function(ce) {
            var Te = ce || et;
            return r && r.abort(Te), Ct(0, Te), this;
          }
        };
        if (fe.promise(ue), F.url = ((e || F.url || Jt.href) + "").replace(Er, Jt.protocol + "//"), F.type = t.method || t.type || F.method || F.type, F.dataTypes = (F.dataType || "*").toLowerCase().match(V) || [""], F.crossDomain == null) {
          y = D.createElement("a");
          try {
            y.href = F.url, y.href = y.href, F.crossDomain = kn.protocol + "//" + kn.host != y.protocol + "//" + y.host;
          } catch (ce) {
            F.crossDomain = !0;
          }
        }
        if (F.data && F.processData && typeof F.data != "string" && (F.data = n.param(F.data, F.traditional)), tr(Kn, F, t, ue), v)
          return ue;
        T = n.event && F.global, T && n.active++ === 0 && n.event.trigger("ajaxStart"), F.type = F.type.toUpperCase(), F.hasContent = !Cr.test(F.type), i = F.url.replace(_r, ""), F.hasContent ? F.data && F.processData && (F.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && (F.data = F.data.replace(br, "+")) : (j = F.url.slice(i.length), F.data && (F.processData || typeof F.data == "string") && (i += (Rn.test(i) ? "&" : "?") + F.data, delete F.data), F.cache === !1 && (i = i.replace(wr, "$1"), j = (Rn.test(i) ? "&" : "?") + "_=" + Gn.guid++ + j), F.url = i + j), F.ifModified && (n.lastModified[i] && ue.setRequestHeader("If-Modified-Since", n.lastModified[i]), n.etag[i] && ue.setRequestHeader("If-None-Match", n.etag[i])), (F.data && F.hasContent && F.contentType !== !1 || t.contentType) && ue.setRequestHeader("Content-Type", F.contentType), ue.setRequestHeader(
          "Accept",
          F.dataTypes[0] && F.accepts[F.dataTypes[0]] ? F.accepts[F.dataTypes[0]] + (F.dataTypes[0] !== "*" ? ", " + Zn + "; q=0.01" : "") : F.accepts["*"]
        );
        for (L in F.headers)
          ue.setRequestHeader(L, F.headers[L]);
        if (F.beforeSend && (F.beforeSend.call(U, ue, F) === !1 || v))
          return ue.abort();
        if (et = "abort", oe.add(F.complete), ue.done(F.success), ue.fail(F.error), r = tr(On, F, t, ue), !r)
          Ct(-1, "No Transport");
        else {
          if (ue.readyState = 1, T && te.trigger("ajaxSend", [ue, F]), v)
            return ue;
          F.async && F.timeout > 0 && (h = M.setTimeout(function() {
            ue.abort("timeout");
          }, F.timeout));
          try {
            v = !1, r.send(De, Ct);
          } catch (ce) {
            if (v)
              throw ce;
            Ct(-1, ce);
          }
        }
        function Ct(ce, Te, Kt, Ln) {
          var tt, Zt, nt, vt, xt, Ge = Te;
          v || (v = !0, h && M.clearTimeout(h), r = void 0, s = Ln || "", ue.readyState = ce > 0 ? 4 : 0, tt = ce >= 200 && ce < 300 || ce === 304, Kt && (vt = Dr(F, ue, Kt)), !tt && n.inArray("script", F.dataTypes) > -1 && n.inArray("json", F.dataTypes) < 0 && (F.converters["text script"] = function() {
          }), vt = Ar(F, vt, ue, tt), tt ? (F.ifModified && (xt = ue.getResponseHeader("Last-Modified"), xt && (n.lastModified[i] = xt), xt = ue.getResponseHeader("etag"), xt && (n.etag[i] = xt)), ce === 204 || F.type === "HEAD" ? Ge = "nocontent" : ce === 304 ? Ge = "notmodified" : (Ge = vt.state, Zt = vt.data, nt = vt.error, tt = !nt)) : (nt = Ge, (ce || !Ge) && (Ge = "error", ce < 0 && (ce = 0))), ue.status = ce, ue.statusText = (Te || Ge) + "", tt ? fe.resolveWith(U, [Zt, Ge, ue]) : fe.rejectWith(U, [ue, Ge, nt]), ue.statusCode(Fe), Fe = void 0, T && te.trigger(
            tt ? "ajaxSuccess" : "ajaxError",
            [ue, F, tt ? Zt : nt]
          ), oe.fireWith(U, [ue, Ge]), T && (te.trigger("ajaxComplete", [ue, F]), --n.active || n.event.trigger("ajaxStop")));
        }
        return ue;
      },
      getJSON: function(e, t, r) {
        return n.get(e, t, r, "json");
      },
      getScript: function(e, t) {
        return n.get(e, void 0, t, "script");
      }
    }), n.each(["get", "post"], function(e, t) {
      n[t] = function(r, i, s, u) {
        return g(i) && (u = u || s, s = i, i = void 0), n.ajax(n.extend({
          url: r,
          type: t,
          dataType: u,
          data: i,
          success: s
        }, n.isPlainObject(r) && r));
      };
    }), n.ajaxPrefilter(function(e) {
      var t;
      for (t in e.headers)
        t.toLowerCase() === "content-type" && (e.contentType = e.headers[t] || "");
    }), n._evalUrl = function(e, t, r) {
      return n.ajax({
        url: e,
        // Make this explicit, since user can override this through ajaxSetup (trac-11264)
        type: "GET",
        dataType: "script",
        cache: !0,
        async: !1,
        global: !1,
        // Only evaluate the response if it is successful (gh-4126)
        // dataFilter is not invoked for failure responses, so using it instead
        // of the default converter is kludgy but it works.
        converters: {
          "text script": function() {
          }
        },
        dataFilter: function(i) {
          n.globalEval(i, t, r);
        }
      });
    }, n.fn.extend({
      wrapAll: function(e) {
        var t;
        return this[0] && (g(e) && (e = e.call(this[0])), t = n(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
          for (var r = this; r.firstElementChild; )
            r = r.firstElementChild;
          return r;
        }).append(this)), this;
      },
      wrapInner: function(e) {
        return g(e) ? this.each(function(t) {
          n(this).wrapInner(e.call(this, t));
        }) : this.each(function() {
          var t = n(this), r = t.contents();
          r.length ? r.wrapAll(e) : t.append(e);
        });
      },
      wrap: function(e) {
        var t = g(e);
        return this.each(function(r) {
          n(this).wrapAll(t ? e.call(this, r) : e);
        });
      },
      unwrap: function(e) {
        return this.parent(e).not("body").each(function() {
          n(this).replaceWith(this.childNodes);
        }), this;
      }
    }), n.expr.pseudos.hidden = function(e) {
      return !n.expr.pseudos.visible(e);
    }, n.expr.pseudos.visible = function(e) {
      return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
    }, n.ajaxSettings.xhr = function() {
      try {
        return new M.XMLHttpRequest();
      } catch (e) {
      }
    };
    var Rr = {
      // File protocol always yields status code 0, assume 200
      0: 200,
      // Support: IE <=9 only
      // trac-1450: sometimes IE returns 1223 when it should be 204
      1223: 204
    }, Yt = n.ajaxSettings.xhr();
    d.cors = !!Yt && "withCredentials" in Yt, d.ajax = Yt = !!Yt, n.ajaxTransport(function(e) {
      var t, r;
      if (d.cors || Yt && !e.crossDomain)
        return {
          send: function(i, s) {
            var u, h = e.xhr();
            if (h.open(
              e.type,
              e.url,
              e.async,
              e.username,
              e.password
            ), e.xhrFields)
              for (u in e.xhrFields)
                h[u] = e.xhrFields[u];
            e.mimeType && h.overrideMimeType && h.overrideMimeType(e.mimeType), !e.crossDomain && !i["X-Requested-With"] && (i["X-Requested-With"] = "XMLHttpRequest");
            for (u in i)
              h.setRequestHeader(u, i[u]);
            t = function(y) {
              return function() {
                t && (t = r = h.onload = h.onerror = h.onabort = h.ontimeout = h.onreadystatechange = null, y === "abort" ? h.abort() : y === "error" ? typeof h.status != "number" ? s(0, "error") : s(
                  // File: protocol always yields status 0; see trac-8605, trac-14207
                  h.status,
                  h.statusText
                ) : s(
                  Rr[h.status] || h.status,
                  h.statusText,
                  // Support: IE <=9 only
                  // IE9 has no XHR2 but throws on binary (trac-11426)
                  // For XHR2 non-text, let the caller handle it (gh-2498)
                  (h.responseType || "text") !== "text" || typeof h.responseText != "string" ? { binary: h.response } : { text: h.responseText },
                  h.getAllResponseHeaders()
                ));
              };
            }, h.onload = t(), r = h.onerror = h.ontimeout = t("error"), h.onabort !== void 0 ? h.onabort = r : h.onreadystatechange = function() {
              h.readyState === 4 && M.setTimeout(function() {
                t && r();
              });
            }, t = t("abort");
            try {
              h.send(e.hasContent && e.data || null);
            } catch (y) {
              if (t)
                throw y;
            }
          },
          abort: function() {
            t && t();
          }
        };
    }), n.ajaxPrefilter(function(e) {
      e.crossDomain && (e.contents.script = !1);
    }), n.ajaxSetup({
      accepts: {
        script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
      },
      contents: {
        script: /\b(?:java|ecma)script\b/
      },
      converters: {
        "text script": function(e) {
          return n.globalEval(e), e;
        }
      }
    }), n.ajaxPrefilter("script", function(e) {
      e.cache === void 0 && (e.cache = !1), e.crossDomain && (e.type = "GET");
    }), n.ajaxTransport("script", function(e) {
      if (e.crossDomain || e.scriptAttrs) {
        var t, r;
        return {
          send: function(i, s) {
            t = n("<script>").attr(e.scriptAttrs || {}).prop({ charset: e.scriptCharset, src: e.url }).on("load error", r = function(u) {
              t.remove(), r = null, u && s(u.type === "error" ? 404 : 200, u.type);
            }), D.head.appendChild(t[0]);
          },
          abort: function() {
            r && r();
          }
        };
      }
    });
    var nr = [], Nn = /(=)\?(?=&|$)|\?\?/;
    n.ajaxSetup({
      jsonp: "callback",
      jsonpCallback: function() {
        var e = nr.pop() || n.expando + "_" + Gn.guid++;
        return this[e] = !0, e;
      }
    }), n.ajaxPrefilter("json jsonp", function(e, t, r) {
      var i, s, u, h = e.jsonp !== !1 && (Nn.test(e.url) ? "url" : typeof e.data == "string" && (e.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && Nn.test(e.data) && "data");
      if (h || e.dataTypes[0] === "jsonp")
        return i = e.jsonpCallback = g(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, h ? e[h] = e[h].replace(Nn, "$1" + i) : e.jsonp !== !1 && (e.url += (Rn.test(e.url) ? "&" : "?") + e.jsonp + "=" + i), e.converters["script json"] = function() {
          return u || n.error(i + " was not called"), u[0];
        }, e.dataTypes[0] = "json", s = M[i], M[i] = function() {
          u = arguments;
        }, r.always(function() {
          s === void 0 ? n(M).removeProp(i) : M[i] = s, e[i] && (e.jsonpCallback = t.jsonpCallback, nr.push(i)), u && g(s) && s(u[0]), u = s = void 0;
        }), "script";
    }), d.createHTMLDocument = function() {
      var e = D.implementation.createHTMLDocument("").body;
      return e.innerHTML = "<form></form><form></form>", e.childNodes.length === 2;
    }(), n.parseHTML = function(e, t, r) {
      if (typeof e != "string")
        return [];
      typeof t == "boolean" && (r = t, t = !1);
      var i, s, u;
      return t || (d.createHTMLDocument ? (t = D.implementation.createHTMLDocument(""), i = t.createElement("base"), i.href = D.location.href, t.head.appendChild(i)) : t = D), s = Ht.exec(e), u = !r && [], s ? [t.createElement(s[1])] : (s = Mt([e], t, u), u && u.length && n(u).remove(), n.merge([], s.childNodes));
    }, n.fn.load = function(e, t, r) {
      var i, s, u, h = this, y = e.indexOf(" ");
      return y > -1 && (i = Tt(e.slice(y)), e = e.slice(0, y)), g(t) ? (r = t, t = void 0) : t && typeof t == "object" && (s = "POST"), h.length > 0 && n.ajax({
        url: e,
        // If "type" variable is undefined, then "GET" method will be used.
        // Make value of this field explicit since
        // user can override it through ajaxSetup method
        type: s || "GET",
        dataType: "html",
        data: t
      }).done(function(v) {
        u = arguments, h.html(i ? (
          // If a selector was specified, locate the right elements in a dummy div
          // Exclude scripts to avoid IE 'Permission Denied' errors
          n("<div>").append(n.parseHTML(v)).find(i)
        ) : (
          // Otherwise use the full result
          v
        ));
      }).always(r && function(v, T) {
        h.each(function() {
          r.apply(this, u || [v.responseText, T, v]);
        });
      }), this;
    }, n.expr.pseudos.animated = function(e) {
      return n.grep(n.timers, function(t) {
        return e === t.elem;
      }).length;
    }, n.offset = {
      setOffset: function(e, t, r) {
        var i, s, u, h, y, v, T, L = n.css(e, "position"), j = n(e), F = {};
        L === "static" && (e.style.position = "relative"), y = j.offset(), u = n.css(e, "top"), v = n.css(e, "left"), T = (L === "absolute" || L === "fixed") && (u + v).indexOf("auto") > -1, T ? (i = j.position(), h = i.top, s = i.left) : (h = parseFloat(u) || 0, s = parseFloat(v) || 0), g(t) && (t = t.call(e, r, n.extend({}, y))), t.top != null && (F.top = t.top - y.top + h), t.left != null && (F.left = t.left - y.left + s), "using" in t ? t.using.call(e, F) : j.css(F);
      }
    }, n.fn.extend({
      // offset() relates an element's border box to the document origin
      offset: function(e) {
        if (arguments.length)
          return e === void 0 ? this : this.each(function(s) {
            n.offset.setOffset(this, e, s);
          });
        var t, r, i = this[0];
        if (i)
          return i.getClientRects().length ? (t = i.getBoundingClientRect(), r = i.ownerDocument.defaultView, {
            top: t.top + r.pageYOffset,
            left: t.left + r.pageXOffset
          }) : { top: 0, left: 0 };
      },
      // position() relates an element's margin box to its offset parent's padding box
      // This corresponds to the behavior of CSS absolute positioning
      position: function() {
        if (this[0]) {
          var e, t, r, i = this[0], s = { top: 0, left: 0 };
          if (n.css(i, "position") === "fixed")
            t = i.getBoundingClientRect();
          else {
            for (t = this.offset(), r = i.ownerDocument, e = i.offsetParent || r.documentElement; e && (e === r.body || e === r.documentElement) && n.css(e, "position") === "static"; )
              e = e.parentNode;
            e && e !== i && e.nodeType === 1 && (s = n(e).offset(), s.top += n.css(e, "borderTopWidth", !0), s.left += n.css(e, "borderLeftWidth", !0));
          }
          return {
            top: t.top - s.top - n.css(i, "marginTop", !0),
            left: t.left - s.left - n.css(i, "marginLeft", !0)
          };
        }
      },
      // This method will return documentElement in the following cases:
      // 1) For the element inside the iframe without offsetParent, this method will return
      //    documentElement of the parent window
      // 2) For the hidden or detached element
      // 3) For body or html element, i.e. in case of the html node - it will return itself
      //
      // but those exceptions were never presented as a real life use-cases
      // and might be considered as more preferable results.
      //
      // This logic, however, is not guaranteed and can change at any point in the future
      offsetParent: function() {
        return this.map(function() {
          for (var e = this.offsetParent; e && n.css(e, "position") === "static"; )
            e = e.offsetParent;
          return e || Se;
        });
      }
    }), n.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(e, t) {
      var r = t === "pageYOffset";
      n.fn[e] = function(i) {
        return ze(this, function(s, u, h) {
          var y;
          if (w(s) ? y = s : s.nodeType === 9 && (y = s.defaultView), h === void 0)
            return y ? y[t] : s[u];
          y ? y.scrollTo(
            r ? y.pageXOffset : h,
            r ? h : y.pageYOffset
          ) : s[u] = h;
        }, e, i, arguments.length);
      };
    }), n.each(["top", "left"], function(e, t) {
      n.cssHooks[t] = Qt(
        d.pixelPosition,
        function(r, i) {
          if (i)
            return i = mt(r, t), pt.test(i) ? n(r).position()[t] + "px" : i;
        }
      );
    }), n.each({ Height: "height", Width: "width" }, function(e, t) {
      n.each({
        padding: "inner" + e,
        content: t,
        "": "outer" + e
      }, function(r, i) {
        n.fn[i] = function(s, u) {
          var h = arguments.length && (r || typeof s != "boolean"), y = r || (s === !0 || u === !0 ? "margin" : "border");
          return ze(this, function(v, T, L) {
            var j;
            return w(v) ? i.indexOf("outer") === 0 ? v["inner" + e] : v.document.documentElement["client" + e] : v.nodeType === 9 ? (j = v.documentElement, Math.max(
              v.body["scroll" + e],
              j["scroll" + e],
              v.body["offset" + e],
              j["offset" + e],
              j["client" + e]
            )) : L === void 0 ? (
              // Get width or height on the element, requesting but not forcing parseFloat
              n.css(v, T, y)
            ) : (
              // Set width or height on the element
              n.style(v, T, L, y)
            );
          }, t, h ? s : void 0, h);
        };
      });
    }), n.each([
      "ajaxStart",
      "ajaxStop",
      "ajaxComplete",
      "ajaxError",
      "ajaxSuccess",
      "ajaxSend"
    ], function(e, t) {
      n.fn[t] = function(r) {
        return this.on(t, r);
      };
    }), n.fn.extend({
      bind: function(e, t, r) {
        return this.on(e, null, t, r);
      },
      unbind: function(e, t) {
        return this.off(e, null, t);
      },
      delegate: function(e, t, r, i) {
        return this.on(t, e, r, i);
      },
      undelegate: function(e, t, r) {
        return arguments.length === 1 ? this.off(e, "**") : this.off(t, e || "**", r);
      },
      hover: function(e, t) {
        return this.on("mouseenter", e).on("mouseleave", t || e);
      }
    }), n.each(
      "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),
      function(e, t) {
        n.fn[t] = function(r, i) {
          return arguments.length > 0 ? this.on(t, null, r, i) : this.trigger(t);
        };
      }
    );
    var Fr = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
    n.proxy = function(e, t) {
      var r, i, s;
      if (typeof t == "string" && (r = e[t], t = e, e = r), !!g(e))
        return i = A.call(arguments, 2), s = function() {
          return e.apply(t || this, i.concat(A.call(arguments)));
        }, s.guid = e.guid = e.guid || n.guid++, s;
    }, n.holdReady = function(e) {
      e ? n.readyWait++ : n.ready(!0);
    }, n.isArray = Array.isArray, n.parseJSON = JSON.parse, n.nodeName = O, n.isFunction = g, n.isWindow = w, n.camelCase = H, n.type = Q, n.now = Date.now, n.isNumeric = function(e) {
      var t = n.type(e);
      return (t === "number" || t === "string") && // parseFloat NaNs numeric-cast false positives ("")
      // ...but misinterprets leading-number strings, particularly hex literals ("0x...")
      // subtraction forces infinities to NaN
      !isNaN(e - parseFloat(e));
    }, n.trim = function(e) {
      return e == null ? "" : (e + "").replace(Fr, "$1");
    };
    var Or = M.jQuery, kr = M.$;
    return n.noConflict = function(e) {
      return M.$ === n && (M.$ = kr), e && M.jQuery === n && (M.jQuery = Or), n;
    }, typeof Be == "undefined" && (M.jQuery = M.$ = n), n;
  });
})(ar);
var $r = ar.exports;
/*! WebUploader 0.1.6 */
var zr = $r, Wr = function(ve, M) {
  var Be = {}, _e = function(a, c) {
    var p, o, f;
    if (typeof a == "string")
      return E(a);
    for (p = [], o = a.length, f = 0; f < o; f++)
      p.push(E(a[f]));
    return c.apply(null, p);
  }, S = function(a, c, p) {
    arguments.length === 2 && (p = c, c = null), _e(c || [], function() {
      A(a, p, arguments);
    });
  }, A = function(a, c, p) {
    var o = {
      exports: c
    }, f;
    typeof c == "function" && (p.length || (p = [_e, o.exports, o]), f = c.apply(null, p), f !== void 0 && (o.exports = f)), Be[a] = o.exports;
  }, E = function(a) {
    var c = Be[a] || ve[a];
    if (!c)
      throw new Error("`" + a + "` is undefined");
    return c;
  }, x = function(a) {
    var c, p, o, f, d, g;
    g = function(w) {
      return w && w.charAt(0).toUpperCase() + w.substr(1);
    };
    for (c in Be)
      if (p = a, !!Be.hasOwnProperty(c)) {
        for (o = c.split("/"), d = g(o.pop()); f = g(o.shift()); )
          p[f] = p[f] || {}, p = p[f];
        p[d] = Be[c];
      }
    return a;
  }, l = function(a) {
    return ve.__dollar = a, x(M(ve, S, _e));
  };
  return l(zr);
}(window, function(ve, M, Be) {
  M("dollar-third", [], function() {
    var S = ve.require, A = ve.__dollar || ve.jQuery || ve.Zepto || S("jquery") || S("zepto");
    if (!A)
      throw new Error("jQuery or Zepto not found!");
    return A;
  }), M("dollar", [
    "dollar-third"
  ], function(S) {
    return S;
  }), M("promise-third", [
    "dollar"
  ], function(S) {
    return {
      Deferred: S.Deferred,
      when: S.when,
      isPromise: function(A) {
        return A && typeof A.then == "function";
      }
    };
  }), M("promise", [
    "promise-third"
  ], function(S) {
    return S;
  }), M("base", [
    "dollar",
    "promise"
  ], function(S, A) {
    var E = function() {
    }, x = Function.call;
    function l(p) {
      return function() {
        return x.apply(p, arguments);
      };
    }
    function a(p, o) {
      return function() {
        return p.apply(o, arguments);
      };
    }
    function c(p) {
      var o;
      return Object.create ? Object.create(p) : (o = function() {
      }, o.prototype = p, new o());
    }
    return {
      /**
       * @property {String} version 当前版本号。
       */
      version: "0.1.6",
      /**
       * @property {jQuery|Zepto} $ 引用依赖的jQuery或者Zepto对象。
       */
      $: S,
      Deferred: A.Deferred,
      isPromise: A.isPromise,
      when: A.when,
      /**
       * @description  简单的浏览器检查结果。
       *
       * * `webkit`  webkit版本号，如果浏览器为非webkit内核，此属性为`undefined`。
       * * `chrome`  chrome浏览器版本号，如果浏览器为chrome，此属性为`undefined`。
       * * `ie`  ie浏览器版本号，如果浏览器为非ie，此属性为`undefined`。**暂不支持ie10+**
       * * `firefox`  firefox浏览器版本号，如果浏览器为非firefox，此属性为`undefined`。
       * * `safari`  safari浏览器版本号，如果浏览器为非safari，此属性为`undefined`。
       * * `opera`  opera浏览器版本号，如果浏览器为非opera，此属性为`undefined`。
       *
       * @property {Object} [browser]
       */
      browser: function(p) {
        var o = {}, f = p.match(/WebKit\/([\d.]+)/), d = p.match(/Chrome\/([\d.]+)/) || p.match(/CriOS\/([\d.]+)/), g = p.match(/MSIE\s([\d\.]+)/) || p.match(/(?:trident)(?:.*rv:([\w.]+))?/i), w = p.match(/Firefox\/([\d.]+)/), D = p.match(/Safari\/([\d.]+)/), P = p.match(/OPR\/([\d.]+)/);
        return f && (o.webkit = parseFloat(f[1])), d && (o.chrome = parseFloat(d[1])), g && (o.ie = parseFloat(g[1])), w && (o.firefox = parseFloat(w[1])), D && (o.safari = parseFloat(D[1])), P && (o.opera = parseFloat(P[1])), o;
      }(navigator.userAgent),
      /**
       * @description  操作系统检查结果。
       *
       * * `android`  如果在android浏览器环境下，此值为对应的android版本号，否则为`undefined`。
       * * `ios` 如果在ios浏览器环境下，此值为对应的ios版本号，否则为`undefined`。
       * @property {Object} [os]
       */
      os: function(p) {
        var o = {}, f = p.match(/(?:Android);?[\s\/]+([\d.]+)?/), d = p.match(/(?:iPad|iPod|iPhone).*OS\s([\d_]+)/);
        return f && (o.android = parseFloat(f[1])), d && (o.ios = parseFloat(d[1].replace(/_/g, "."))), o;
      }(navigator.userAgent),
      /**
       * 实现类与类之间的继承。
       * @method inherits
       * @grammar Base.inherits( super ) => child
       * @grammar Base.inherits( super, protos ) => child
       * @grammar Base.inherits( super, protos, statics ) => child
       * @param  {Class} super 父类
       * @param  {Object | Function} [protos] 子类或者对象。如果对象中包含constructor，子类将是用此属性值。
       * @param  {Function} [protos.constructor] 子类构造器，不指定的话将创建个临时的直接执行父类构造器的方法。
       * @param  {Object} [statics] 静态属性或方法。
       * @return {Class} 返回子类。
       * @example
       * function Person() {
       *     console.log( 'Super' );
       * }
       * Person.prototype.hello = function() {
       *     console.log( 'hello' );
       * };
       *
       * var Manager = Base.inherits( Person, {
       *     world: function() {
       *         console.log( 'World' );
       *     }
       * });
       *
       * // 因为没有指定构造器，父类的构造器将会执行。
       * var instance = new Manager();    // => Super
       *
       * // 继承子父类的方法
       * instance.hello();    // => hello
       * instance.world();    // => World
       *
       * // 子类的__super__属性指向父类
       * console.log( Manager.__super__ === Person );    // => true
       */
      inherits: function(p, o, f) {
        var d;
        return typeof o == "function" ? (d = o, o = null) : o && o.hasOwnProperty("constructor") ? d = o.constructor : d = function() {
          return p.apply(this, arguments);
        }, S.extend(!0, d, p, f || {}), d.__super__ = p.prototype, d.prototype = c(p.prototype), o && S.extend(!0, d.prototype, o), d;
      },
      /**
       * 一个不做任何事情的方法。可以用来赋值给默认的callback.
       * @method noop
       */
      noop: E,
      /**
       * 返回一个新的方法，此方法将已指定的`context`来执行。
       * @grammar Base.bindFn( fn, context ) => Function
       * @method bindFn
       * @example
       * var doSomething = function() {
       *         console.log( this.name );
       *     },
       *     obj = {
       *         name: 'Object Name'
       *     },
       *     aliasFn = Base.bind( doSomething, obj );
       *
       *  aliasFn();    // => Object Name
       *
       */
      bindFn: a,
      /**
       * 引用Console.log如果存在的话，否则引用一个[空函数noop](#WebUploader:Base.noop)。
       * @grammar Base.log( args... ) => undefined
       * @method log
       */
      log: function() {
        return ve.console ? a(console.log, console) : E;
      }(),
      nextTick: /* @__PURE__ */ function() {
        return function(p) {
          setTimeout(p, 1);
        };
      }(),
      /**
       * 被[uncurrythis](http://www.2ality.com/2011/11/uncurrying-this.html)的数组slice方法。
       * 将用来将非数组对象转化成数组对象。
       * @grammar Base.slice( target, start[, end] ) => Array
       * @method slice
       * @example
       * function doSomthing() {
       *     var args = Base.slice( arguments, 1 );
       *     console.log( args );
       * }
       *
       * doSomthing( 'ignored', 'arg2', 'arg3' );    // => Array ["arg2", "arg3"]
       */
      slice: l([].slice),
      /**
       * 生成唯一的ID
       * @method guid
       * @grammar Base.guid() => String
       * @grammar Base.guid( prefx ) => String
       */
      guid: /* @__PURE__ */ function() {
        var p = 0;
        return function(o) {
          for (var f = (+/* @__PURE__ */ new Date()).toString(32), d = 0; d < 5; d++)
            f += Math.floor(Math.random() * 65535).toString(32);
          return (o || "wu_") + f + (p++).toString(32);
        };
      }(),
      /**
       * 格式化文件大小, 输出成带单位的字符串
       * @method formatSize
       * @grammar Base.formatSize( size ) => String
       * @grammar Base.formatSize( size, pointLength ) => String
       * @grammar Base.formatSize( size, pointLength, units ) => String
       * @param {Number} size 文件大小
       * @param {Number} [pointLength=2] 精确到的小数点数。
       * @param {Array} [units=[ 'B', 'K', 'M', 'G', 'TB' ]] 单位数组。从字节，到千字节，一直往上指定。如果单位数组里面只指定了到了K(千字节)，同时文件大小大于M, 此方法的输出将还是显示成多少K.
       * @example
       * console.log( Base.formatSize( 100 ) );    // => 100B
       * console.log( Base.formatSize( 1024 ) );    // => 1.00K
       * console.log( Base.formatSize( 1024, 0 ) );    // => 1K
       * console.log( Base.formatSize( 1024 * 1024 ) );    // => 1.00M
       * console.log( Base.formatSize( 1024 * 1024 * 1024 ) );    // => 1.00G
       * console.log( Base.formatSize( 1024 * 1024 * 1024, 0, ['B', 'KB', 'MB'] ) );    // => 1024MB
       */
      formatSize: function(p, o, f) {
        var d;
        for (f = f || ["B", "K", "M", "G", "TB"]; (d = f.shift()) && p > 1024; )
          p = p / 1024;
        return (d === "B" ? p : p.toFixed(o || 2)) + d;
      }
    };
  }), M("mediator", [
    "base"
  ], function(S) {
    var A = S.$, E = [].slice, x = /\s+/, l;
    function a(o, f, d, g) {
      return A.grep(o, function(w) {
        return w && (!f || w.e === f) && (!d || w.cb === d || w.cb._cb === d) && (!g || w.ctx === g);
      });
    }
    function c(o, f, d) {
      A.each((o || "").split(x), function(g, w) {
        d(w, f);
      });
    }
    function p(o, f) {
      for (var d = !1, g = -1, w = o.length, D; ++g < w; )
        if (D = o[g], D.cb.apply(D.ctx2, f) === !1) {
          d = !0;
          break;
        }
      return !d;
    }
    return l = {
      /**
       * 绑定事件。
       *
       * `callback`方法在执行时，arguments将会来源于trigger的时候携带的参数。如
       * ```javascript
       * var obj = {};
       *
       * // 使得obj有事件行为
       * Mediator.installTo( obj );
       *
       * obj.on( 'testa', function( arg1, arg2 ) {
       *     console.log( arg1, arg2 ); // => 'arg1', 'arg2'
       * });
       *
       * obj.trigger( 'testa', 'arg1', 'arg2' );
       * ```
       *
       * 如果`callback`中，某一个方法`return false`了，则后续的其他`callback`都不会被执行到。
       * 切会影响到`trigger`方法的返回值，为`false`。
       *
       * `on`还可以用来添加一个特殊事件`all`, 这样所有的事件触发都会响应到。同时此类`callback`中的arguments有一个不同处，
       * 就是第一个参数为`type`，记录当前是什么事件在触发。此类`callback`的优先级比脚低，会再正常`callback`执行完后触发。
       * ```javascript
       * obj.on( 'all', function( type, arg1, arg2 ) {
       *     console.log( type, arg1, arg2 ); // => 'testa', 'arg1', 'arg2'
       * });
       * ```
       *
       * @method on
       * @grammar on( name, callback[, context] ) => self
       * @param  {String}   name     事件名，支持多个事件用空格隔开
       * @param  {Function} callback 事件处理器
       * @param  {Object}   [context]  事件处理器的上下文。
       * @return {self} 返回自身，方便链式
       * @chainable
       * @class Mediator
       */
      on: function(o, f, d) {
        var g = this, w;
        return f ? (w = this._events || (this._events = []), c(o, f, function(D, P) {
          var Y = { e: D };
          Y.cb = P, Y.ctx = d, Y.ctx2 = d || g, Y.id = w.length, w.push(Y);
        }), this) : this;
      },
      /**
       * 绑定事件，且当handler执行完后，自动解除绑定。
       * @method once
       * @grammar once( name, callback[, context] ) => self
       * @param  {String}   name     事件名
       * @param  {Function} callback 事件处理器
       * @param  {Object}   [context]  事件处理器的上下文。
       * @return {self} 返回自身，方便链式
       * @chainable
       */
      once: function(o, f, d) {
        var g = this;
        return f && c(o, f, function(w, D) {
          var P = function() {
            return g.off(w, P), D.apply(d || g, arguments);
          };
          P._cb = D, g.on(w, P, d);
        }), g;
      },
      /**
       * 解除事件绑定
       * @method off
       * @grammar off( [name[, callback[, context] ] ] ) => self
       * @param  {String}   [name]     事件名
       * @param  {Function} [callback] 事件处理器
       * @param  {Object}   [context]  事件处理器的上下文。
       * @return {self} 返回自身，方便链式
       * @chainable
       */
      off: function(o, f, d) {
        var g = this._events;
        return g ? !o && !f && !d ? (this._events = [], this) : (c(o, f, function(w, D) {
          A.each(a(g, w, D, d), function() {
            delete g[this.id];
          });
        }), this) : this;
      },
      /**
       * 触发事件
       * @method trigger
       * @grammar trigger( name[, args...] ) => self
       * @param  {String}   type     事件名
       * @param  {*} [...] 任意参数
       * @return {Boolean} 如果handler中return false了，则返回false, 否则返回true
       */
      trigger: function(o) {
        var f, d, g;
        return !this._events || !o ? this : (f = E.call(arguments, 1), d = a(this._events, o), g = a(this._events, "all"), p(d, f) && p(g, arguments));
      }
    }, A.extend({
      /**
       * 可以通过这个接口，使任何对象具备事件功能。
       * @method installTo
       * @param  {Object} obj 需要具备事件行为的对象。
       * @return {Object} 返回obj.
       */
      installTo: function(o) {
        return A.extend(o, l);
      }
    }, l);
  }), M("uploader", [
    "base",
    "mediator"
  ], function(S, A) {
    var E = S.$;
    function x(l) {
      this.options = E.extend(!0, {}, x.options, l), this._init(this.options);
    }
    return x.options = {}, A.installTo(x.prototype), E.each({
      upload: "start-upload",
      stop: "stop-upload",
      getFile: "get-file",
      getFiles: "get-files",
      addFile: "add-file",
      addFiles: "add-file",
      sort: "sort-files",
      removeFile: "remove-file",
      cancelFile: "cancel-file",
      skipFile: "skip-file",
      retry: "retry",
      isInProgress: "is-in-progress",
      makeThumb: "make-thumb",
      md5File: "md5-file",
      getDimension: "get-dimension",
      addButton: "add-btn",
      predictRuntimeType: "predict-runtime-type",
      refresh: "refresh",
      disable: "disable",
      enable: "enable",
      reset: "reset"
    }, function(l, a) {
      x.prototype[l] = function() {
        return this.request(a, arguments);
      };
    }), E.extend(x.prototype, {
      state: "pending",
      _init: function(l) {
        var a = this;
        a.request("init", l, function() {
          a.state = "ready", a.trigger("ready");
        });
      },
      /**
       * 获取或者设置Uploader配置项。
       * @method option
       * @grammar option( key ) => *
       * @grammar option( key, val ) => self
       * @example
       *
       * // 初始状态图片上传前不会压缩
       * var uploader = new WebUploader.Uploader({
       *     compress: null;
       * });
       *
       * // 修改后图片上传前，尝试将图片压缩到1600 * 1600
       * uploader.option( 'compress', {
       *     width: 1600,
       *     height: 1600
       * });
       */
      option: function(l, a) {
        var c = this.options;
        if (arguments.length > 1)
          E.isPlainObject(a) && E.isPlainObject(c[l]) ? E.extend(c[l], a) : c[l] = a;
        else
          return l ? c[l] : c;
      },
      /**
       * 获取文件统计信息。返回一个包含一下信息的对象。
       * * `successNum` 上传成功的文件数
       * * `progressNum` 上传中的文件数
       * * `cancelNum` 被删除的文件数
       * * `invalidNum` 无效的文件数
       * * `uploadFailNum` 上传失败的文件数
       * * `queueNum` 还在队列中的文件数
       * * `interruptNum` 被暂停的文件数
       * @method getStats
       * @grammar getStats() => Object
       */
      getStats: function() {
        var l = this.request("get-stats");
        return l ? {
          successNum: l.numOfSuccess,
          progressNum: l.numOfProgress,
          // who care?
          // queueFailNum: 0,
          cancelNum: l.numOfCancel,
          invalidNum: l.numOfInvalid,
          uploadFailNum: l.numOfUploadFailed,
          queueNum: l.numOfQueue,
          interruptNum: l.numofInterrupt
        } : {};
      },
      // 需要重写此方法来来支持opts.onEvent和instance.onEvent的处理器
      trigger: function(l) {
        var a = [].slice.call(arguments, 1), c = this.options, p = "on" + l.substring(0, 1).toUpperCase() + l.substring(1);
        return (
          // 调用通过on方法注册的handler.
          !(A.trigger.apply(this, arguments) === !1 || // 调用opts.onEvent
          E.isFunction(c[p]) && c[p].apply(this, a) === !1 || // 调用this.onEvent
          E.isFunction(this[p]) && this[p].apply(this, a) === !1 || // 广播所有uploader的事件。
          A.trigger.apply(
            A,
            [this, l].concat(a)
          ) === !1)
        );
      },
      /**
       * 销毁 webuploader 实例
       * @method destroy
       * @grammar destroy() => undefined
       */
      destroy: function() {
        this.request("destroy", arguments), this.off();
      },
      // widgets/widget.js将补充此方法的详细文档。
      request: S.noop
    }), S.create = x.create = function(l) {
      return new x(l);
    }, S.Uploader = x, x;
  }), M("runtime/runtime", [
    "base",
    "mediator"
  ], function(S, A) {
    var E = S.$, x = {}, l = function(c) {
      for (var p in c)
        if (c.hasOwnProperty(p))
          return p;
      return null;
    };
    function a(c) {
      this.options = E.extend({
        container: document.body
      }, c), this.uid = S.guid("rt_");
    }
    return E.extend(a.prototype, {
      getContainer: function() {
        var c = this.options, p, o;
        return this._container ? this._container : (p = E(c.container || document.body), o = E(document.createElement("div")), o.attr("id", "rt_" + this.uid), o.css({
          position: "absolute",
          top: "0px",
          left: "0px",
          width: "1px",
          height: "1px",
          overflow: "hidden"
        }), p.append(o), p.addClass("webuploader-container"), this._container = o, this._parent = p, o);
      },
      init: S.noop,
      exec: S.noop,
      destroy: function() {
        this._container && this._container.remove(), this._parent && this._parent.removeClass("webuploader-container"), this.off();
      }
    }), a.orders = "html5,flash", a.addRuntime = function(c, p) {
      x[c] = p;
    }, a.hasRuntime = function(c) {
      return !!(c ? x[c] : l(x));
    }, a.create = function(c, p) {
      var o, f;
      if (p = p || a.orders, E.each(p.split(/\s*,\s*/g), function() {
        if (x[this])
          return o = this, !1;
      }), o = o || l(x), !o)
        throw new Error("Runtime Error");
      return f = new x[o](c), f;
    }, A.installTo(a.prototype), a;
  }), M("runtime/client", [
    "base",
    "mediator",
    "runtime/runtime"
  ], function(S, A, E) {
    var x;
    x = /* @__PURE__ */ function() {
      var a = {};
      return {
        add: function(c) {
          a[c.uid] = c;
        },
        get: function(c, p) {
          var o;
          if (c)
            return a[c];
          for (o in a)
            if (!(p && a[o].__standalone))
              return a[o];
          return null;
        },
        remove: function(c) {
          delete a[c.uid];
        }
      };
    }();
    function l(a, c) {
      var p = S.Deferred(), o;
      this.uid = S.guid("client_"), this.runtimeReady = function(f) {
        return p.done(f);
      }, this.connectRuntime = function(f, d) {
        if (o)
          throw new Error("already connected!");
        return p.done(d), typeof f == "string" && x.get(f) && (o = x.get(f)), o = o || x.get(null, c), o ? (S.$.extend(o.options, f), o.__promise.then(p.resolve), o.__client++) : (o = E.create(f, f.runtimeOrder), o.__promise = p.promise(), o.once("ready", p.resolve), o.init(), x.add(o), o.__client = 1), c && (o.__standalone = c), o;
      }, this.getRuntime = function() {
        return o;
      }, this.disconnectRuntime = function() {
        o && (o.__client--, o.__client <= 0 && (x.remove(o), delete o.__promise, o.destroy()), o = null);
      }, this.exec = function() {
        if (o) {
          var f = S.slice(arguments);
          return a && f.unshift(a), o.exec.apply(this, f);
        }
      }, this.getRuid = function() {
        return o && o.uid;
      }, this.destroy = /* @__PURE__ */ function(f) {
        return function() {
          f && f.apply(this, arguments), this.trigger("destroy"), this.off(), this.exec("destroy"), this.disconnectRuntime();
        };
      }(this.destroy);
    }
    return A.installTo(l.prototype), l;
  }), M("lib/dnd", [
    "base",
    "mediator",
    "runtime/client"
  ], function(S, A, E) {
    var x = S.$;
    function l(a) {
      a = this.options = x.extend({}, l.options, a), a.container = x(a.container), a.container.length && E.call(this, "DragAndDrop");
    }
    return l.options = {
      accept: null,
      disableGlobalDnd: !1
    }, S.inherits(E, {
      constructor: l,
      init: function() {
        var a = this;
        a.connectRuntime(a.options, function() {
          a.exec("init"), a.trigger("ready");
        });
      }
    }), A.installTo(l.prototype), l;
  }), M("widgets/widget", [
    "base",
    "uploader"
  ], function(S, A) {
    var E = S.$, x = A.prototype._init, l = A.prototype.destroy, a = {}, c = [];
    function p(f) {
      if (!f)
        return !1;
      var d = f.length, g = E.type(f);
      return f.nodeType === 1 && d ? !0 : g === "array" || g !== "function" && g !== "string" && (d === 0 || typeof d == "number" && d > 0 && d - 1 in f);
    }
    function o(f) {
      this.owner = f, this.options = f.options;
    }
    return E.extend(o.prototype, {
      init: S.noop,
      // 类Backbone的事件监听声明，监听uploader实例上的事件
      // widget直接无法监听事件，事件只能通过uploader来传递
      invoke: function(f, d) {
        var g = this.responseMap;
        return !g || !(f in g) || !(g[f] in this) || !E.isFunction(this[g[f]]) ? a : this[g[f]].apply(this, d);
      },
      /**
       * 发送命令。当传入`callback`或者`handler`中返回`promise`时。返回一个当所有`handler`中的promise都完成后完成的新`promise`。
       * @method request
       * @grammar request( command, args ) => * | Promise
       * @grammar request( command, args, callback ) => Promise
       * @for  Uploader
       */
      request: function() {
        return this.owner.request.apply(this.owner, arguments);
      }
    }), E.extend(A.prototype, {
      /**
       * @property {String | Array} [disableWidgets=undefined]
       * @namespace options
       * @for Uploader
       * @description 默认所有 Uploader.register 了的 widget 都会被加载，如果禁用某一部分，请通过此 option 指定黑名单。
       */
      // 覆写_init用来初始化widgets
      _init: function() {
        var f = this, d = f._widgets = [], g = f.options.disableWidgets || "";
        return E.each(c, function(w, D) {
          (!g || !~g.indexOf(D._name)) && d.push(new D(f));
        }), x.apply(f, arguments);
      },
      request: function(f, d, g) {
        var w = 0, D = this._widgets, P = D && D.length, Y = [], Q = [], k, C, n, _;
        for (d = p(d) ? d : [d]; w < P; w++)
          k = D[w], C = k.invoke(f, d), C !== a && (S.isPromise(C) ? Q.push(C) : Y.push(C));
        return g || Q.length ? (n = S.when.apply(S, Q), _ = n.pipe ? "pipe" : "then", n[_](function() {
          var O = S.Deferred(), N = arguments;
          return N.length === 1 && (N = N[0]), setTimeout(function() {
            O.resolve(N);
          }, 1), O.promise();
        })[g ? _ : "done"](g || S.noop)) : Y[0];
      },
      destroy: function() {
        l.apply(this, arguments), this._widgets = null;
      }
    }), A.register = o.register = function(f, d) {
      var g = { init: "init", destroy: "destroy", name: "anonymous" }, w;
      return arguments.length === 1 ? (d = f, E.each(d, function(D) {
        if (D[0] === "_" || D === "name") {
          D === "name" && (g.name = d.name);
          return;
        }
        g[D.replace(/[A-Z]/g, "-$&").toLowerCase()] = D;
      })) : g = E.extend(g, f), d.responseMap = g, w = S.inherits(o, d), w._name = g.name, c.push(w), w;
    }, A.unRegister = o.unRegister = function(f) {
      if (!(!f || f === "anonymous"))
        for (var d = c.length; d--; )
          c[d]._name === f && c.splice(d, 1);
    }, o;
  }), M("widgets/filednd", [
    "base",
    "uploader",
    "lib/dnd",
    "widgets/widget"
  ], function(S, A, E) {
    var x = S.$;
    return A.options.dnd = "", A.register({
      name: "dnd",
      init: function(l) {
        if (!(!l.dnd || this.request("predict-runtime-type") !== "html5")) {
          var a = this, c = S.Deferred(), p = x.extend({}, {
            disableGlobalDnd: l.disableGlobalDnd,
            container: l.dnd,
            accept: l.accept
          }), o;
          return this.dnd = o = new E(p), o.once("ready", c.resolve), o.on("drop", function(f) {
            a.request("add-file", [f]);
          }), o.on("accept", function(f) {
            return a.owner.trigger("dndAccept", f);
          }), o.init(), c.promise();
        }
      },
      destroy: function() {
        this.dnd && this.dnd.destroy();
      }
    });
  }), M("lib/filepaste", [
    "base",
    "mediator",
    "runtime/client"
  ], function(S, A, E) {
    var x = S.$;
    function l(a) {
      a = this.options = x.extend({}, a), a.container = x(a.container || document.body), E.call(this, "FilePaste");
    }
    return S.inherits(E, {
      constructor: l,
      init: function() {
        var a = this;
        a.connectRuntime(a.options, function() {
          a.exec("init"), a.trigger("ready");
        });
      }
    }), A.installTo(l.prototype), l;
  }), M("widgets/filepaste", [
    "base",
    "uploader",
    "lib/filepaste",
    "widgets/widget"
  ], function(S, A, E) {
    var x = S.$;
    return A.register({
      name: "paste",
      init: function(l) {
        if (!(!l.paste || this.request("predict-runtime-type") !== "html5")) {
          var a = this, c = S.Deferred(), p = x.extend({}, {
            container: l.paste,
            accept: l.accept
          }), o;
          return this.paste = o = new E(p), o.once("ready", c.resolve), o.on("paste", function(f) {
            a.owner.request("add-file", [f]);
          }), o.init(), c.promise();
        }
      },
      destroy: function() {
        this.paste && this.paste.destroy();
      }
    });
  }), M("lib/blob", [
    "base",
    "runtime/client"
  ], function(S, A) {
    function E(x, l) {
      var a = this;
      a.source = l, a.ruid = x, this.size = l.size || 0, !l.type && this.ext && ~"jpg,jpeg,png,gif,bmp".indexOf(this.ext) ? this.type = "image/" + (this.ext === "jpg" ? "jpeg" : this.ext) : this.type = l.type || "application/octet-stream", A.call(a, "Blob"), this.uid = l.uid || this.uid, x && a.connectRuntime(x);
    }
    return S.inherits(A, {
      constructor: E,
      slice: function(x, l) {
        return this.exec("slice", x, l);
      },
      getSource: function() {
        return this.source;
      }
    }), E;
  }), M("lib/file", [
    "base",
    "lib/blob"
  ], function(S, A) {
    var E = 1, x = /\.([^.]+)$/;
    function l(a, c) {
      var p;
      this.name = c.name || "untitled" + E++, p = x.exec(c.name) ? RegExp.$1.toLowerCase() : "", !p && c.type && (p = /\/(jpg|jpeg|png|gif|bmp)$/i.exec(c.type) ? RegExp.$1.toLowerCase() : "", this.name += "." + p), this.ext = p, this.lastModifiedDate = c.lastModifiedDate || (/* @__PURE__ */ new Date()).toLocaleString(), A.apply(this, arguments);
    }
    return S.inherits(A, l);
  }), M("lib/filepicker", [
    "base",
    "runtime/client",
    "lib/file"
  ], function(S, A, E) {
    var x = S.$;
    function l(a) {
      if (a = this.options = x.extend({}, l.options, a), a.container = x(a.id), !a.container.length)
        throw new Error("按钮指定错误");
      a.innerHTML = a.innerHTML || a.label || a.container.html() || "", a.button = x(a.button || document.createElement("div")), a.button.html(a.innerHTML), a.container.html(a.button), A.call(this, "FilePicker", !0);
    }
    return l.options = {
      button: null,
      container: null,
      label: null,
      innerHTML: null,
      multiple: !0,
      accept: null,
      name: "file",
      style: "webuploader-pick"
      //pick element class attribute, default is "webuploader-pick"
    }, S.inherits(A, {
      constructor: l,
      init: function() {
        var a = this, c = a.options, p = c.button, o = c.style;
        o && p.addClass("webuploader-pick"), a.on("all", function(f) {
          var d;
          switch (f) {
            case "mouseenter":
              o && p.addClass("webuploader-pick-hover");
              break;
            case "mouseleave":
              o && p.removeClass("webuploader-pick-hover");
              break;
            case "change":
              d = a.exec("getFiles"), a.trigger("select", x.map(d, function(g) {
                return g = new E(a.getRuid(), g), g._refer = c.container, g;
              }), c.container);
              break;
          }
        }), a.connectRuntime(c, function() {
          a.refresh(), a.exec("init", c), a.trigger("ready");
        }), this._resizeHandler = S.bindFn(this.refresh, this), x(ve).on("resize", this._resizeHandler);
      },
      refresh: function() {
        var a = this.getRuntime().getContainer(), c = this.options.button, p = c.outerWidth ? c.outerWidth() : c.width(), o = c.outerHeight ? c.outerHeight() : c.height(), f = c.offset();
        p && o && a.css({
          bottom: "auto",
          right: "auto",
          width: p + "px",
          height: o + "px"
        }).offset(f);
      },
      enable: function() {
        var a = this.options.button;
        a.removeClass("webuploader-pick-disable"), this.refresh();
      },
      disable: function() {
        var a = this.options.button;
        this.getRuntime().getContainer().css({
          top: "-99999px"
        }), a.addClass("webuploader-pick-disable");
      },
      destroy: function() {
        var a = this.options.button;
        x(ve).off("resize", this._resizeHandler), a.removeClass("webuploader-pick-disable webuploader-pick-hover webuploader-pick");
      }
    }), l;
  }), M("widgets/filepicker", [
    "base",
    "uploader",
    "lib/filepicker",
    "widgets/widget"
  ], function(S, A, E) {
    var x = S.$;
    return x.extend(A.options, {
      /**
       * @property {Selector | Object} [pick=undefined]
       * @namespace options
       * @for Uploader
       * @description 指定选择文件的按钮容器，不指定则不创建按钮。
       *
       * * `id` {Seletor|dom} 指定选择文件的按钮容器，不指定则不创建按钮。**注意** 这里虽然写的是 id, 但是不是只支持 id, 还支持 class, 或者 dom 节点。
       * * `label` {String} 请采用 `innerHTML` 代替
       * * `innerHTML` {String} 指定按钮文字。不指定时优先从指定的容器中看是否自带文字。
       * * `multiple` {Boolean} 是否开起同时选择多个文件能力。
       */
      pick: null,
      /**
       * @property {Arroy} [accept=null]
       * @namespace options
       * @for Uploader
       * @description 指定接受哪些类型的文件。 由于目前还有ext转mimeType表，所以这里需要分开指定。
       *
       * * `title` {String} 文字描述
       * * `extensions` {String} 允许的文件后缀，不带点，多个用逗号分割。
       * * `mimeTypes` {String} 多个用逗号分割。
       *
       * 如：
       *
       * ```
       * {
       *     title: 'Images',
       *     extensions: 'gif,jpg,jpeg,bmp,png',
       *     mimeTypes: 'image/*'
       * }
       * ```
       */
      accept: null
      /*{
          title: 'Images',
          extensions: 'gif,jpg,jpeg,bmp,png',
          mimeTypes: 'image/*'
      }*/
    }), A.register({
      name: "picker",
      init: function(l) {
        return this.pickers = [], l.pick && this.addBtn(l.pick);
      },
      refresh: function() {
        x.each(this.pickers, function() {
          this.refresh();
        });
      },
      /**
       * @method addBtn
       * @for Uploader
       * @grammar addBtn( pick ) => Promise
       * @description
       * 添加文件选择按钮，如果一个按钮不够，需要调用此方法来添加。参数跟[options.pick](#WebUploader:Uploader:options)一致。
       * @example
       * uploader.addBtn({
       *     id: '#btnContainer',
       *     innerHTML: '选择文件'
       * });
       */
      addBtn: function(l) {
        var a = this, c = a.options, p = c.accept, o = [];
        if (l)
          return x.isPlainObject(l) || (l = {
            id: l
          }), x(l.id).each(function() {
            var f, d, g;
            g = S.Deferred(), f = x.extend({}, l, {
              accept: x.isPlainObject(p) ? [p] : p,
              swf: c.swf,
              runtimeOrder: c.runtimeOrder,
              id: this
            }), d = new E(f), d.once("ready", g.resolve), d.on("select", function(w) {
              a.owner.request("add-file", [w]);
            }), d.on("dialogopen", function() {
              a.owner.trigger("dialogOpen", d.button);
            }), d.init(), a.pickers.push(d), o.push(g.promise());
          }), S.when.apply(S, o);
      },
      disable: function() {
        x.each(this.pickers, function() {
          this.disable();
        });
      },
      enable: function() {
        x.each(this.pickers, function() {
          this.enable();
        });
      },
      destroy: function() {
        x.each(this.pickers, function() {
          this.destroy();
        }), this.pickers = null;
      }
    });
  }), M("lib/image", [
    "base",
    "runtime/client",
    "lib/blob"
  ], function(S, A, E) {
    var x = S.$;
    function l(a) {
      this.options = x.extend({}, l.options, a), A.call(this, "Image"), this.on("load", function() {
        this._info = this.exec("info"), this._meta = this.exec("meta");
      });
    }
    return l.options = {
      // 默认的图片处理质量
      quality: 90,
      // 是否裁剪
      crop: !1,
      // 是否保留头部信息
      preserveHeaders: !1,
      // 是否允许放大。
      allowMagnify: !1
    }, S.inherits(A, {
      constructor: l,
      info: function(a) {
        return a ? (this._info = a, this) : this._info;
      },
      meta: function(a) {
        return a ? (this._meta = a, this) : this._meta;
      },
      loadFromBlob: function(a) {
        var c = this, p = a.getRuid();
        this.connectRuntime(p, function() {
          c.exec("init", c.options), c.exec("loadFromBlob", a);
        });
      },
      resize: function() {
        var a = S.slice(arguments);
        return this.exec.apply(this, ["resize"].concat(a));
      },
      crop: function() {
        var a = S.slice(arguments);
        return this.exec.apply(this, ["crop"].concat(a));
      },
      getAsDataUrl: function(a) {
        return this.exec("getAsDataUrl", a);
      },
      getAsBlob: function(a) {
        var c = this.exec("getAsBlob", a);
        return new E(this.getRuid(), c);
      }
    }), l;
  }), M("widgets/image", [
    "base",
    "uploader",
    "lib/image",
    "widgets/widget"
  ], function(S, A, E) {
    var x = S.$, l;
    return l = /* @__PURE__ */ function(a) {
      var c = 0, p = [], o = function() {
        for (var f; p.length && c < a; )
          f = p.shift(), c += f[0], f[1]();
      };
      return function(f, d, g) {
        p.push([d, g]), f.once("destroy", function() {
          c -= d, setTimeout(o, 1);
        }), setTimeout(o, 1);
      };
    }(5 * 1024 * 1024), x.extend(A.options, {
      /**
       * @property {Object} [thumb]
       * @namespace options
       * @for Uploader
       * @description 配置生成缩略图的选项。
       *
       * 默认为：
       *
       * ```javascript
       * {
       *     width: 110,
       *     height: 110,
       *
       *     // 图片质量，只有type为`image/jpeg`的时候才有效。
       *     quality: 70,
       *
       *     // 是否允许放大，如果想要生成小图的时候不失真，此选项应该设置为false.
       *     allowMagnify: true,
       *
       *     // 是否允许裁剪。
       *     crop: true,
       *
       *     // 为空的话则保留原有图片格式。
       *     // 否则强制转换成指定的类型。
       *     type: 'image/jpeg'
       * }
       * ```
       */
      thumb: {
        width: 110,
        height: 110,
        quality: 70,
        allowMagnify: !0,
        crop: !0,
        preserveHeaders: !1,
        // 为空的话则保留原有图片格式。
        // 否则强制转换成指定的类型。
        // IE 8下面 base64 大小不能超过 32K 否则预览失败，而非 jpeg 编码的图片很可
        // 能会超过 32k, 所以这里设置成预览的时候都是 image/jpeg
        type: "image/jpeg"
      },
      /**
       * @property {Object} [compress]
       * @namespace options
       * @for Uploader
       * @description 配置压缩的图片的选项。如果此选项为`false`, 则图片在上传前不进行压缩。
       *
       * 默认为：
       *
       * ```javascript
       * {
       *     width: 1600,
       *     height: 1600,
       *
       *     // 图片质量，只有type为`image/jpeg`的时候才有效。
       *     quality: 90,
       *
       *     // 是否允许放大，如果想要生成小图的时候不失真，此选项应该设置为false.
       *     allowMagnify: false,
       *
       *     // 是否允许裁剪。
       *     crop: false,
       *
       *     // 是否保留头部meta信息。
       *     preserveHeaders: true,
       *
       *     // 如果发现压缩后文件大小比原来还大，则使用原来图片
       *     // 此属性可能会影响图片自动纠正功能
       *     noCompressIfLarger: false,
       *
       *     // 单位字节，如果图片大小小于此值，不会采用压缩。
       *     compressSize: 0
       * }
       * ```
       */
      compress: {
        width: 1600,
        height: 1600,
        quality: 90,
        allowMagnify: !1,
        crop: !1,
        preserveHeaders: !0
      }
    }), A.register({
      name: "image",
      /**
       * 生成缩略图，此过程为异步，所以需要传入`callback`。
       * 通常情况在图片加入队里后调用此方法来生成预览图以增强交互效果。
       *
       * 当 width 或者 height 的值介于 0 - 1 时，被当成百分比使用。
       *
       * `callback`中可以接收到两个参数。
       * * 第一个为error，如果生成缩略图有错误，此error将为真。
       * * 第二个为ret, 缩略图的Data URL值。
       *
       * **注意**
       * Date URL在IE6/7中不支持，所以不用调用此方法了，直接显示一张暂不支持预览图片好了。
       * 也可以借助服务端，将 base64 数据传给服务端，生成一个临时文件供预览。
       *
       * @method makeThumb
       * @grammar makeThumb( file, callback ) => undefined
       * @grammar makeThumb( file, callback, width, height ) => undefined
       * @for Uploader
       * @example
       *
       * uploader.on( 'fileQueued', function( file ) {
       *     var $li = ...;
       *
       *     uploader.makeThumb( file, function( error, ret ) {
       *         if ( error ) {
       *             $li.text('预览错误');
       *         } else {
       *             $li.append('<img alt="" src="' + ret + '" />');
       *         }
       *     });
       *
       * });
       */
      makeThumb: function(a, c, p, o) {
        var f, d;
        if (a = this.request("get-file", a), !a.type.match(/^image/)) {
          c(!0);
          return;
        }
        f = x.extend({}, this.options.thumb), x.isPlainObject(p) && (f = x.extend(f, p), p = null), p = p || f.width, o = o || f.height, d = new E(f), d.once("load", function() {
          a._info = a._info || d.info(), a._meta = a._meta || d.meta(), p <= 1 && p > 0 && (p = a._info.width * p), o <= 1 && o > 0 && (o = a._info.height * o), d.resize(p, o);
        }), d.once("complete", function() {
          c(!1, d.getAsDataUrl(f.type)), d.destroy();
        }), d.once("error", function(g) {
          c(g || !0), d.destroy();
        }), l(d, a.source.size, function() {
          a._info && d.info(a._info), a._meta && d.meta(a._meta), d.loadFromBlob(a.source);
        });
      },
      beforeSendFile: function(a) {
        var c = this.options.compress || this.options.resize, p = c && c.compressSize || 0, o = c && c.noCompressIfLarger || !1, f, d;
        if (a = this.request("get-file", a), !(!c || !~"image/jpeg,image/jpg".indexOf(a.type) || a.size < p || a._compressed))
          return c = x.extend({}, c), d = S.Deferred(), f = new E(c), d.always(function() {
            f.destroy(), f = null;
          }), f.once("error", d.reject), f.once("load", function() {
            var g = c.width, w = c.height;
            a._info = a._info || f.info(), a._meta = a._meta || f.meta(), g <= 1 && g > 0 && (g = a._info.width * g), w <= 1 && w > 0 && (w = a._info.height * w), f.resize(g, w);
          }), f.once("complete", function() {
            var g, w;
            try {
              g = f.getAsBlob(c.type), w = a.size, (!o || g.size < w) && (a.source = g, a.size = g.size, a.trigger("resize", g.size, w)), a._compressed = !0, d.resolve();
            } catch (D) {
              d.resolve();
            }
          }), a._info && f.info(a._info), a._meta && f.meta(a._meta), f.loadFromBlob(a.source), d.promise();
      }
    });
  }), M("file", [
    "base",
    "mediator"
  ], function(S, A) {
    var E = S.$, x = "WU_FILE_", l = 0, a = /\.([^.]+)$/, c = {};
    function p() {
      return x + l++;
    }
    function o(f) {
      this.name = f.name || "Untitled", this.size = f.size || 0, this.type = f.type || "application/octet-stream", this.lastModifiedDate = f.lastModifiedDate || /* @__PURE__ */ new Date() * 1, this.id = p(), this.ext = a.exec(this.name) ? RegExp.$1 : "", this.statusText = "", c[this.id] = o.Status.INITED, this.source = f, this.loaded = 0, this.on("error", function(d) {
        this.setStatus(o.Status.ERROR, d);
      });
    }
    return E.extend(o.prototype, {
      /**
       * 设置状态，状态变化时会触发`change`事件。
       * @method setStatus
       * @grammar setStatus( status[, statusText] );
       * @param {File.Status|String} status [文件状态值](#WebUploader:File:File.Status)
       * @param {String} [statusText=''] 状态说明，常在error时使用，用http, abort,server等来标记是由于什么原因导致文件错误。
       */
      setStatus: function(f, d) {
        var g = c[this.id];
        typeof d != "undefined" && (this.statusText = d), f !== g && (c[this.id] = f, this.trigger("statuschange", f, g));
      },
      /**
       * 获取文件状态
       * @return {File.Status}
       * @example
               文件状态具体包括以下几种类型：
               {
                   // 初始化
                  INITED:     0,
                  // 已入队列
                  QUEUED:     1,
                  // 正在上传
                  PROGRESS:     2,
                  // 上传出错
                  ERROR:         3,
                  // 上传成功
                  COMPLETE:     4,
                  // 上传取消
                  CANCELLED:     5
              }
       */
      getStatus: function() {
        return c[this.id];
      },
      /**
       * 获取文件原始信息。
       * @return {*}
       */
      getSource: function() {
        return this.source;
      },
      destroy: function() {
        this.off(), delete c[this.id];
      }
    }), A.installTo(o.prototype), o.Status = {
      INITED: "inited",
      // 初始状态
      QUEUED: "queued",
      // 已经进入队列, 等待上传
      PROGRESS: "progress",
      // 上传中
      ERROR: "error",
      // 上传出错，可重试
      COMPLETE: "complete",
      // 上传完成。
      CANCELLED: "cancelled",
      // 上传取消。
      INTERRUPT: "interrupt",
      // 上传中断，可续传。
      INVALID: "invalid"
      // 文件不合格，不能重试上传。
    }, o;
  }), M("queue", [
    "base",
    "mediator",
    "file"
  ], function(S, A, E) {
    var x = S.$, l = E.Status;
    function a() {
      this.stats = {
        numOfQueue: 0,
        numOfSuccess: 0,
        numOfCancel: 0,
        numOfProgress: 0,
        numOfUploadFailed: 0,
        numOfInvalid: 0,
        numofDeleted: 0,
        numofInterrupt: 0
      }, this._queue = [], this._map = {};
    }
    return x.extend(a.prototype, {
      /**
       * 将新文件加入对队列尾部
       *
       * @method append
       * @param  {File} file   文件对象
       */
      append: function(c) {
        return this._queue.push(c), this._fileAdded(c), this;
      },
      /**
       * 将新文件加入对队列头部
       *
       * @method prepend
       * @param  {File} file   文件对象
       */
      prepend: function(c) {
        return this._queue.unshift(c), this._fileAdded(c), this;
      },
      /**
       * 获取文件对象
       *
       * @method getFile
       * @param  {String} fileId   文件ID
       * @return {File}
       */
      getFile: function(c) {
        return typeof c != "string" ? c : this._map[c];
      },
      /**
       * 从队列中取出一个指定状态的文件。
       * @grammar fetch( status ) => File
       * @method fetch
       * @param {String} status [文件状态值](#WebUploader:File:File.Status)
       * @return {File} [File](#WebUploader:File)
       */
      fetch: function(c) {
        var p = this._queue.length, o, f;
        for (c = c || l.QUEUED, o = 0; o < p; o++)
          if (f = this._queue[o], c === f.getStatus())
            return f;
        return null;
      },
      /**
       * 对队列进行排序，能够控制文件上传顺序。
       * @grammar sort( fn ) => undefined
       * @method sort
       * @param {Function} fn 排序方法
       */
      sort: function(c) {
        typeof c == "function" && this._queue.sort(c);
      },
      /**
       * 获取指定类型的文件列表, 列表中每一个成员为[File](#WebUploader:File)对象。
       * @grammar getFiles( [status1[, status2 ...]] ) => Array
       * @method getFiles
       * @param {String} [status] [文件状态值](#WebUploader:File:File.Status)
       */
      getFiles: function() {
        for (var c = [].slice.call(arguments, 0), p = [], o = 0, f = this._queue.length, d; o < f; o++)
          d = this._queue[o], !(c.length && !~x.inArray(d.getStatus(), c)) && p.push(d);
        return p;
      },
      /**
       * 在队列中删除文件。
       * @grammar removeFile( file ) => Array
       * @method removeFile
       * @param {File} 文件对象。
       */
      removeFile: function(c) {
        var p = this._map[c.id];
        p && (delete this._map[c.id], c.destroy(), this.stats.numofDeleted++);
      },
      _fileAdded: function(c) {
        var p = this, o = this._map[c.id];
        o || (this._map[c.id] = c, c.on("statuschange", function(f, d) {
          p._onFileStatusChange(f, d);
        }));
      },
      _onFileStatusChange: function(c, p) {
        var o = this.stats;
        switch (p) {
          case l.PROGRESS:
            o.numOfProgress--;
            break;
          case l.QUEUED:
            o.numOfQueue--;
            break;
          case l.ERROR:
            o.numOfUploadFailed--;
            break;
          case l.INVALID:
            o.numOfInvalid--;
            break;
          case l.INTERRUPT:
            o.numofInterrupt--;
            break;
        }
        switch (c) {
          case l.QUEUED:
            o.numOfQueue++;
            break;
          case l.PROGRESS:
            o.numOfProgress++;
            break;
          case l.ERROR:
            o.numOfUploadFailed++;
            break;
          case l.COMPLETE:
            o.numOfSuccess++;
            break;
          case l.CANCELLED:
            o.numOfCancel++;
            break;
          case l.INVALID:
            o.numOfInvalid++;
            break;
          case l.INTERRUPT:
            o.numofInterrupt++;
            break;
        }
      }
    }), A.installTo(a.prototype), a;
  }), M("widgets/queue", [
    "base",
    "uploader",
    "queue",
    "file",
    "lib/file",
    "runtime/client",
    "widgets/widget"
  ], function(S, A, E, x, l, a) {
    var c = S.$, p = /\.\w+$/, o = x.Status;
    return A.register({
      name: "queue",
      init: function(f) {
        var d = this, g, w, D, P, Y, Q, k;
        if (c.isPlainObject(f.accept) && (f.accept = [f.accept]), f.accept) {
          for (Y = [], D = 0, w = f.accept.length; D < w; D++)
            P = f.accept[D].extensions, P && Y.push(P);
          Y.length && (Q = "\\." + Y.join(",").replace(/,/g, "$|\\.").replace(/\*/g, ".*") + "$"), d.accept = new RegExp(Q, "i");
        }
        if (d.queue = new E(), d.stats = d.queue.stats, this.request("predict-runtime-type") === "html5")
          return g = S.Deferred(), this.placeholder = k = new a("Placeholder"), k.connectRuntime({
            runtimeOrder: "html5"
          }, function() {
            d._ruid = k.getRuid(), g.resolve();
          }), g.promise();
      },
      // 为了支持外部直接添加一个原生File对象。
      _wrapFile: function(f) {
        if (!(f instanceof x)) {
          if (!(f instanceof l)) {
            if (!this._ruid)
              throw new Error("Can't add external files.");
            f = new l(this._ruid, f);
          }
          f = new x(f);
        }
        return f;
      },
      // 判断文件是否可以被加入队列
      acceptFile: function(f) {
        var d = !f || !f.size || this.accept && // 如果名字中有后缀，才做后缀白名单处理。
        p.exec(f.name) && !this.accept.test(f.name);
        return !d;
      },
      /**
       * @event beforeFileQueued
       * @param {File} file File对象
       * @description 当文件被加入队列之前触发，此事件的handler返回值为`false`，则此文件不会被添加进入队列。
       * @for  Uploader
       */
      /**
       * @event fileQueued
       * @param {File} file File对象
       * @description 当文件被加入队列以后触发。
       * @for  Uploader
       */
      _addFile: function(f) {
        var d = this;
        if (f = d._wrapFile(f), !!d.owner.trigger("beforeFileQueued", f)) {
          if (!d.acceptFile(f)) {
            d.owner.trigger("error", "Q_TYPE_DENIED", f);
            return;
          }
          return d.queue.append(f), d.owner.trigger("fileQueued", f), f;
        }
      },
      getFile: function(f) {
        return this.queue.getFile(f);
      },
      /**
       * @event filesQueued
       * @param {File} files 数组，内容为原始File(lib/File）对象。
       * @description 当一批文件添加进队列以后触发。
       * @for  Uploader
       */
      /**
       * @property {Boolean} [auto=false]
       * @namespace options
       * @for Uploader
       * @description 设置为 true 后，不需要手动调用上传，有文件选择即开始上传。
       *
       */
      /**
       * @method addFiles
       * @grammar addFiles( file ) => undefined
       * @grammar addFiles( [file1, file2 ...] ) => undefined
       * @param {Array of File or File} [files] Files 对象 数组
       * @description 添加文件到队列
       * @for  Uploader
       */
      addFile: function(f) {
        var d = this;
        f.length || (f = [f]), f = c.map(f, function(g) {
          return d._addFile(g);
        }), f.length && (d.owner.trigger("filesQueued", f), d.options.auto && setTimeout(function() {
          d.request("start-upload");
        }, 20));
      },
      getStats: function() {
        return this.stats;
      },
      /**
       * @event fileDequeued
       * @param {File} file File对象
       * @description 当文件被移除队列后触发。
       * @for  Uploader
       */
      /**
      * @method removeFile
      * @grammar removeFile( file ) => undefined
      * @grammar removeFile( id ) => undefined
      * @grammar removeFile( file, true ) => undefined
      * @grammar removeFile( id, true ) => undefined
      * @param {File|id} file File对象或这File对象的id
      * @description 移除某一文件, 默认只会标记文件状态为已取消，如果第二个参数为 `true` 则会从 queue 中移除。
      * @for  Uploader
      * @example
      *
      * $li.on('click', '.remove-this', function() {
      *     uploader.removeFile( file );
      * })
      */
      removeFile: function(f, d) {
        var g = this;
        f = f.id ? f : g.queue.getFile(f), this.request("cancel-file", f), d && this.queue.removeFile(f);
      },
      /**
       * @method getFiles
       * @grammar getFiles() => Array
       * @grammar getFiles( status1, status2, status... ) => Array
       * @description 返回指定状态的文件集合，不传参数将返回所有状态的文件。
       * @for  Uploader
       * @example
       * console.log( uploader.getFiles() );    // => all files
       * console.log( uploader.getFiles('error') )    // => all error files.
       */
      getFiles: function() {
        return this.queue.getFiles.apply(this.queue, arguments);
      },
      fetchFile: function() {
        return this.queue.fetch.apply(this.queue, arguments);
      },
      /**
       * @method retry
       * @grammar retry() => undefined
       * @grammar retry( file ) => undefined
       * @description 重试上传，重试指定文件，或者从出错的文件开始重新上传。
       * @for  Uploader
       * @example
       * function retry() {
       *     uploader.retry();
       * }
       */
      retry: function(f, d) {
        var g = this, w, D, P;
        if (f) {
          f = f.id ? f : g.queue.getFile(f), f.setStatus(o.QUEUED), d || g.request("start-upload");
          return;
        }
        for (w = g.queue.getFiles(o.ERROR), D = 0, P = w.length; D < P; D++)
          f = w[D], f.setStatus(o.QUEUED);
        g.request("start-upload");
      },
      /**
       * @method sort
       * @grammar sort( fn ) => undefined
       * @description 排序队列中的文件，在上传之前调整可以控制上传顺序。
       * @for  Uploader
       */
      sortFiles: function() {
        return this.queue.sort.apply(this.queue, arguments);
      },
      /**
       * @event reset
       * @description 当 uploader 被重置的时候触发。
       * @for  Uploader
       */
      /**
       * @method reset
       * @grammar reset() => undefined
       * @description 重置uploader。目前只重置了队列。
       * @for  Uploader
       * @example
       * uploader.reset();
       */
      reset: function() {
        this.owner.trigger("reset"), this.queue = new E(), this.stats = this.queue.stats;
      },
      destroy: function() {
        this.reset(), this.placeholder && this.placeholder.destroy();
      }
    });
  }), M("widgets/runtime", [
    "uploader",
    "runtime/runtime",
    "widgets/widget"
  ], function(S, A) {
    return S.support = function() {
      return A.hasRuntime.apply(A, arguments);
    }, S.register({
      name: "runtime",
      init: function() {
        if (!this.predictRuntimeType())
          throw Error("Runtime Error");
      },
      /**
       * 预测Uploader将采用哪个`Runtime`
       * @grammar predictRuntimeType() => String
       * @method predictRuntimeType
       * @for  Uploader
       */
      predictRuntimeType: function() {
        var E = this.options.runtimeOrder || A.orders, x = this.type, l, a;
        if (!x) {
          for (E = E.split(/\s*,\s*/g), l = 0, a = E.length; l < a; l++)
            if (A.hasRuntime(E[l])) {
              this.type = x = E[l];
              break;
            }
        }
        return x;
      }
    });
  }), M("lib/transport", [
    "base",
    "runtime/client",
    "mediator"
  ], function(S, A, E) {
    var x = S.$;
    function l(a) {
      var c = this;
      a = c.options = x.extend(!0, {}, l.options, a || {}), A.call(this, "Transport"), this._blob = null, this._formData = a.formData || {}, this._headers = a.headers || {}, this.on("progress", this._timeout), this.on("load error", function() {
        c.trigger("progress", 1), clearTimeout(c._timer);
      });
    }
    return l.options = {
      server: "",
      method: "POST",
      // 跨域时，是否允许携带cookie, 只有html5 runtime才有效
      withCredentials: !1,
      fileVal: "file",
      timeout: 2 * 60 * 1e3,
      // 2分钟
      formData: {},
      headers: {},
      sendAsBinary: !1
    }, x.extend(l.prototype, {
      // 添加Blob, 只能添加一次，最后一次有效。
      appendBlob: function(a, c, p) {
        var o = this, f = o.options;
        o.getRuid() && o.disconnectRuntime(), o.connectRuntime(c.ruid, function() {
          o.exec("init");
        }), o._blob = c, f.fileVal = a || f.fileVal, f.filename = p || f.filename;
      },
      // 添加其他字段
      append: function(a, c) {
        typeof a == "object" ? x.extend(this._formData, a) : this._formData[a] = c;
      },
      setRequestHeader: function(a, c) {
        typeof a == "object" ? x.extend(this._headers, a) : this._headers[a] = c;
      },
      send: function(a) {
        this.exec("send", a), this._timeout();
      },
      abort: function() {
        return clearTimeout(this._timer), this.exec("abort");
      },
      destroy: function() {
        this.trigger("destroy"), this.off(), this.exec("destroy"), this.disconnectRuntime();
      },
      getResponse: function() {
        return this.exec("getResponse");
      },
      getResponseAsJson: function() {
        return this.exec("getResponseAsJson");
      },
      getStatus: function() {
        return this.exec("getStatus");
      },
      _timeout: function() {
        var a = this, c = a.options.timeout;
        c && (clearTimeout(a._timer), a._timer = setTimeout(function() {
          a.abort(), a.trigger("error", "timeout");
        }, c));
      }
    }), E.installTo(l.prototype), l;
  }), M("widgets/upload", [
    "base",
    "uploader",
    "file",
    "lib/transport",
    "widgets/widget"
  ], function(S, A, E, x) {
    var l = S.$, a = S.isPromise, c = E.Status;
    l.extend(A.options, {
      /**
       * @property {Boolean} [prepareNextFile=false]
       * @namespace options
       * @for Uploader
       * @description 是否允许在文件传输时提前把下一个文件准备好。
       * 对于一个文件的准备工作比较耗时，比如图片压缩，md5序列化。
       * 如果能提前在当前文件传输期处理，可以节省总体耗时。
       */
      prepareNextFile: !1,
      /**
       * @property {Boolean} [chunked=false]
       * @namespace options
       * @for Uploader
       * @description 是否要分片处理大文件上传。
       */
      chunked: !1,
      /**
       * @property {Boolean} [chunkSize=5242880]
       * @namespace options
       * @for Uploader
       * @description 如果要分片，分多大一片？ 默认大小为5M.
       */
      chunkSize: 5 * 1024 * 1024,
      /**
       * @property {Boolean} [chunkRetry=2]
       * @namespace options
       * @for Uploader
       * @description 如果某个分片由于网络问题出错，允许自动重传多少次？
       */
      chunkRetry: 2,
      /**
       * @property {Boolean} [threads=3]
       * @namespace options
       * @for Uploader
       * @description 上传并发数。允许同时最大上传进程数。
       */
      threads: 3,
      /**
       * @property {Object} [formData={}]
       * @namespace options
       * @for Uploader
       * @description 文件上传请求的参数表，每次发送都会发送此对象中的参数。
       */
      formData: {}
      /**
       * @property {Object} [fileVal='file']
       * @namespace options
       * @for Uploader
       * @description 设置文件上传域的name。
       */
      /**
       * @property {Object} [sendAsBinary=false]
       * @namespace options
       * @for Uploader
       * @description 是否已二进制的流的方式发送文件，这样整个上传内容`php://input`都为文件内容，
       * 其他参数在$_GET数组中。
       */
    });
    function p(o, f) {
      var d = [], g = o.source, w = g.size, D = f ? Math.ceil(w / f) : 1, P = 0, Y = 0, Q, k;
      for (k = {
        file: o,
        has: function() {
          return !!d.length;
        },
        shift: function() {
          return d.shift();
        },
        unshift: function(C) {
          d.unshift(C);
        }
      }; Y < D; )
        Q = Math.min(f, w - P), d.push({
          file: o,
          start: P,
          end: f ? P + Q : w,
          total: w,
          chunks: D,
          chunk: Y++,
          cuted: k
        }), P += Q;
      return o.blocks = d.concat(), o.remaning = d.length, k;
    }
    A.register({
      name: "upload",
      init: function() {
        var o = this.owner, f = this;
        this.runing = !1, this.progress = !1, o.on("startUpload", function() {
          f.progress = !0;
        }).on("uploadFinished", function() {
          f.progress = !1;
        }), this.pool = [], this.stack = [], this.pending = [], this.remaning = 0, this.__tick = S.bindFn(this._tick, this), o.on("uploadComplete", function(d) {
          d.blocks && l.each(d.blocks, function(g, w) {
            w.transport && (w.transport.abort(), w.transport.destroy()), delete w.transport;
          }), delete d.blocks, delete d.remaning;
        });
      },
      reset: function() {
        this.request("stop-upload", !0), this.runing = !1, this.pool = [], this.stack = [], this.pending = [], this.remaning = 0, this._trigged = !1, this._promise = null;
      },
      /**
       * @event startUpload
       * @description 当开始上传流程时触发。
       * @for  Uploader
       */
      /**
       * 开始上传。此方法可以从初始状态调用开始上传流程，也可以从暂停状态调用，继续上传流程。
       *
       * 可以指定开始某一个文件。
       * @grammar upload() => undefined
       * @grammar upload( file | fileId) => undefined
       * @method upload
       * @for  Uploader
       */
      startUpload: function(o) {
        var f = this;
        if (l.each(f.request("get-files", c.INVALID), function() {
          f.request("remove-file", this);
        }), o ? (o = o.id ? o : f.request("get-file", o), o.getStatus() === c.INTERRUPT ? (o.setStatus(c.QUEUED), l.each(f.pool, function(g, w) {
          w.file === o && (w.transport && w.transport.send(), o.setStatus(c.PROGRESS));
        })) : o.getStatus() !== c.PROGRESS && o.setStatus(c.QUEUED)) : l.each(f.request("get-files", [c.INITED]), function() {
          this.setStatus(c.QUEUED);
        }), f.runing)
          return S.nextTick(f.__tick);
        f.runing = !0;
        var d = [];
        o || l.each(f.pool, function(g, w) {
          var D = w.file;
          D.getStatus() === c.INTERRUPT && (f._trigged = !1, d.push(D), w.transport && w.transport.send());
        }), l.each(d, function() {
          this.setStatus(c.PROGRESS);
        }), o || l.each(f.request(
          "get-files",
          c.INTERRUPT
        ), function() {
          this.setStatus(c.PROGRESS);
        }), f._trigged = !1, S.nextTick(f.__tick), f.owner.trigger("startUpload");
      },
      /**
       * @event stopUpload
       * @description 当开始上传流程暂停时触发。
       * @for  Uploader
       */
      /**
       * 暂停上传。第一个参数为是否中断上传当前正在上传的文件。
       *
       * 如果第一个参数是文件，则只暂停指定文件。
       * @grammar stop() => undefined
       * @grammar stop( true ) => undefined
       * @grammar stop( file ) => undefined
       * @method stop
       * @for  Uploader
       */
      stopUpload: function(o, f) {
        var d = this, g;
        if (o === !0 && (f = o, o = null), d.runing !== !1) {
          if (o)
            return o = o.id ? o : d.request("get-file", o), o.getStatus() !== c.PROGRESS && o.getStatus() !== c.QUEUED ? void 0 : (o.setStatus(c.INTERRUPT), l.each(d.pool, function(w, D) {
              if (D.file === o)
                return g = D, !1;
            }), g.transport && g.transport.abort(), f && (d._putback(g), d._popBlock(g)), S.nextTick(d.__tick));
          d.runing = !1, this._promise && this._promise.file && this._promise.file.setStatus(c.INTERRUPT), f && l.each(d.pool, function(w, D) {
            D.transport && D.transport.abort(), D.file.setStatus(c.INTERRUPT);
          }), d.owner.trigger("stopUpload");
        }
      },
      /**
       * @method cancelFile
       * @grammar cancelFile( file ) => undefined
       * @grammar cancelFile( id ) => undefined
       * @param {File|id} file File对象或这File对象的id
       * @description 标记文件状态为已取消, 同时将中断文件传输。
       * @for  Uploader
       * @example
       *
       * $li.on('click', '.remove-this', function() {
       *     uploader.cancelFile( file );
       * })
       */
      cancelFile: function(o) {
        o = o.id ? o : this.request("get-file", o), o.blocks && l.each(o.blocks, function(f, d) {
          var g = d.transport;
          g && (g.abort(), g.destroy(), delete d.transport);
        }), o.setStatus(c.CANCELLED), this.owner.trigger("fileDequeued", o);
      },
      /**
       * 判断`Uplaode`r是否正在上传中。
       * @grammar isInProgress() => Boolean
       * @method isInProgress
       * @for  Uploader
       */
      isInProgress: function() {
        return !!this.progress;
      },
      _getStats: function() {
        return this.request("get-stats");
      },
      /**
       * 掉过一个文件上传，直接标记指定文件为已上传状态。
       * @grammar skipFile( file ) => undefined
       * @method skipFile
       * @for  Uploader
       */
      skipFile: function(o, f) {
        o = o.id ? o : this.request("get-file", o), o.setStatus(f || c.COMPLETE), o.skipped = !0, o.blocks && l.each(o.blocks, function(d, g) {
          var w = g.transport;
          w && (w.abort(), w.destroy(), delete g.transport);
        }), this.owner.trigger("uploadSkip", o);
      },
      /**
       * @event uploadFinished
       * @description 当所有文件上传结束时触发。
       * @for  Uploader
       */
      _tick: function() {
        var o = this, f = o.options, d, g;
        if (o._promise)
          return o._promise.always(o.__tick);
        o.pool.length < f.threads && (g = o._nextBlock()) ? (o._trigged = !1, d = function(w) {
          o._promise = null, w && w.file && o._startSend(w), S.nextTick(o.__tick);
        }, o._promise = a(g) ? g.always(d) : d(g)) : !o.remaning && !o._getStats().numOfQueue && !o._getStats().numofInterrupt && (o.runing = !1, o._trigged || S.nextTick(function() {
          o.owner.trigger("uploadFinished");
        }), o._trigged = !0);
      },
      _putback: function(o) {
        var f;
        o.cuted.unshift(o), f = this.stack.indexOf(o.cuted), ~f || this.stack.unshift(o.cuted);
      },
      _getStack: function() {
        for (var o = 0, f; f = this.stack[o++]; ) {
          if (f.has() && f.file.getStatus() === c.PROGRESS)
            return f;
          (!f.has() || f.file.getStatus() !== c.PROGRESS && f.file.getStatus() !== c.INTERRUPT) && this.stack.splice(--o, 1);
        }
        return null;
      },
      _nextBlock: function() {
        var o = this, f = o.options, d, g, w, D;
        if (d = this._getStack())
          return f.prepareNextFile && !o.pending.length && o._prepareNextFile(), d.shift();
        if (o.runing)
          return !o.pending.length && o._getStats().numOfQueue && o._prepareNextFile(), g = o.pending.shift(), w = function(P) {
            return P ? (d = p(P, f.chunked ? f.chunkSize : 0), o.stack.push(d), d.shift()) : null;
          }, a(g) ? (D = g.file, g = g[g.pipe ? "pipe" : "then"](w), g.file = D, g) : w(g);
      },
      /**
       * @event uploadStart
       * @param {File} file File对象
       * @description 某个文件开始上传前触发，一个文件只会触发一次。
       * @for  Uploader
       */
      _prepareNextFile: function() {
        var o = this, f = o.request("fetch-file"), d = o.pending, g;
        f && (g = o.request("before-send-file", f, function() {
          return f.getStatus() === c.PROGRESS || f.getStatus() === c.INTERRUPT ? f : o._finishFile(f);
        }), o.owner.trigger("uploadStart", f), f.setStatus(c.PROGRESS), g.file = f, g.done(function() {
          var w = l.inArray(g, d);
          ~w && d.splice(w, 1, f);
        }), g.fail(function(w) {
          f.setStatus(c.ERROR, w), o.owner.trigger("uploadError", f, w), o.owner.trigger("uploadComplete", f);
        }), d.push(g));
      },
      // 让出位置了，可以让其他分片开始上传
      _popBlock: function(o) {
        var f = l.inArray(o, this.pool);
        this.pool.splice(f, 1), o.file.remaning--, this.remaning--;
      },
      // 开始上传，可以被掉过。如果promise被reject了，则表示跳过此分片。
      _startSend: function(o) {
        var f = this, d = o.file, g;
        if (d.getStatus() !== c.PROGRESS) {
          d.getStatus() === c.INTERRUPT && f._putback(o);
          return;
        }
        f.pool.push(o), f.remaning++, o.blob = o.chunks === 1 ? d.source : d.source.slice(o.start, o.end), g = f.request("before-send", o, function() {
          d.getStatus() === c.PROGRESS ? f._doSend(o) : (f._popBlock(o), S.nextTick(f.__tick));
        }), g.fail(function() {
          d.remaning === 1 ? f._finishFile(d).always(function() {
            o.percentage = 1, f._popBlock(o), f.owner.trigger("uploadComplete", d), S.nextTick(f.__tick);
          }) : (o.percentage = 1, f.updateFileProgress(d), f._popBlock(o), S.nextTick(f.__tick));
        });
      },
      /**
       * @event uploadBeforeSend
       * @param {Object} object
       * @param {Object} data 默认的上传参数，可以扩展此对象来控制上传参数。
       * @param {Object} headers 可以扩展此对象来控制上传头部。
       * @description 当某个文件的分块在发送前触发，主要用来询问是否要添加附带参数，大文件在开起分片上传的前提下此事件可能会触发多次。
       * @for  Uploader
       */
      /**
       * @event uploadAccept
       * @param {Object} object
       * @param {Object} ret 服务端的返回数据，json格式，如果服务端不是json格式，从ret._raw中取数据，自行解析。
       * @description 当某个文件上传到服务端响应后，会派送此事件来询问服务端响应是否有效。如果此事件handler返回值为`false`, 则此文件将派送`server`类型的`uploadError`事件。
       * @for  Uploader
       */
      /**
       * @event uploadProgress
       * @param {File} file File对象
       * @param {Number} percentage 上传进度
       * @description 上传过程中触发，携带上传进度。
       * @for  Uploader
       */
      /**
       * @event uploadError
       * @param {File} file File对象
       * @param {String} reason 出错的code
       * @description 当文件上传出错时触发。
       * @for  Uploader
       */
      /**
       * @event uploadSuccess
       * @param {File} file File对象
       * @param {Object} response 服务端返回的数据
       * @description 当文件上传成功时触发。
       * @for  Uploader
       */
      /**
       * @event uploadComplete
       * @param {File} [file] File对象
       * @description 不管成功或者失败，文件上传完成时触发。
       * @for  Uploader
       */
      // 做上传操作。
      _doSend: function(o) {
        var f = this, d = f.owner, g = f.options, w = o.file, D = new x(g), P = l.extend({}, g.formData), Y = l.extend({}, g.headers), Q, k;
        o.transport = D, D.on("destroy", function() {
          delete o.transport, f._popBlock(o), S.nextTick(f.__tick);
        }), D.on("progress", function(C) {
          o.percentage = C, f.updateFileProgress(w);
        }), Q = function(C) {
          var n;
          return k = D.getResponseAsJson() || {}, k._raw = D.getResponse(), n = function(_) {
            C = _;
          }, d.trigger("uploadAccept", o, k, n) || (C = C || "server"), C;
        }, D.on("error", function(C, n) {
          o.retried = o.retried || 0, o.chunks > 1 && ~"http,abort".indexOf(C) && o.retried < g.chunkRetry ? (o.retried++, D.send()) : (!n && C === "server" && (C = Q(C)), w.setStatus(c.ERROR, C), d.trigger("uploadError", w, C), d.trigger("uploadComplete", w));
        }), D.on("load", function() {
          var C;
          if (C = Q()) {
            D.trigger("error", C, !0);
            return;
          }
          w.remaning === 1 ? f._finishFile(w, k) : D.destroy();
        }), P = l.extend(P, {
          id: w.id,
          name: w.name,
          type: w.type,
          lastModifiedDate: w.lastModifiedDate,
          size: w.size
        }), o.chunks > 1 && l.extend(P, {
          chunks: o.chunks,
          chunk: o.chunk
        }), d.trigger("uploadBeforeSend", o, P, Y), D.appendBlob(g.fileVal, o.blob, w.name), D.append(P), D.setRequestHeader(Y), D.send();
      },
      // 完成上传。
      _finishFile: function(o, f, d) {
        var g = this.owner;
        return g.request("after-send-file", arguments, function() {
          o.setStatus(c.COMPLETE), g.trigger("uploadSuccess", o, f, d);
        }).fail(function(w) {
          o.getStatus() === c.PROGRESS && o.setStatus(c.ERROR, w), g.trigger("uploadError", o, w);
        }).always(function() {
          g.trigger("uploadComplete", o);
        });
      },
      updateFileProgress: function(o) {
        var f = 0, d = 0;
        o.blocks && (l.each(o.blocks, function(g, w) {
          d += (w.percentage || 0) * (w.end - w.start);
        }), f = d / o.size, this.owner.trigger("uploadProgress", o, f || 0));
      }
    });
  }), M("widgets/validator", [
    "base",
    "uploader",
    "file",
    "widgets/widget"
  ], function(S, A, E) {
    var x = S.$, l = {}, a;
    return a = {
      // 添加验证器
      addValidator: function(c, p) {
        l[c] = p;
      },
      // 移除验证器
      removeValidator: function(c) {
        delete l[c];
      }
    }, A.register({
      name: "validator",
      init: function() {
        var c = this;
        S.nextTick(function() {
          x.each(l, function() {
            this.call(c.owner);
          });
        });
      }
    }), a.addValidator("fileNumLimit", function() {
      var c = this, p = c.options, o = 0, f = parseInt(p.fileNumLimit, 10), d = !0;
      f && (c.on("beforeFileQueued", function(g) {
        return o >= f && d && (d = !1, this.trigger("error", "Q_EXCEED_NUM_LIMIT", f, g), setTimeout(function() {
          d = !0;
        }, 1)), !(o >= f);
      }), c.on("fileQueued", function() {
        o++;
      }), c.on("fileDequeued", function() {
        o--;
      }), c.on("reset", function() {
        o = 0;
      }));
    }), a.addValidator("fileSizeLimit", function() {
      var c = this, p = c.options, o = 0, f = parseInt(p.fileSizeLimit, 10), d = !0;
      f && (c.on("beforeFileQueued", function(g) {
        var w = o + g.size > f;
        return w && d && (d = !1, this.trigger("error", "Q_EXCEED_SIZE_LIMIT", f, g), setTimeout(function() {
          d = !0;
        }, 1)), !w;
      }), c.on("fileQueued", function(g) {
        o += g.size;
      }), c.on("fileDequeued", function(g) {
        o -= g.size;
      }), c.on("reset", function() {
        o = 0;
      }));
    }), a.addValidator("fileSingleSizeLimit", function() {
      var c = this, p = c.options, o = p.fileSingleSizeLimit;
      o && c.on("beforeFileQueued", function(f) {
        if (f.size > o)
          return f.setStatus(E.Status.INVALID, "exceed_size"), this.trigger("error", "F_EXCEED_SIZE", o, f), !1;
      });
    }), a.addValidator("duplicate", function() {
      var c = this, p = c.options, o = {};
      if (p.duplicate)
        return;
      function f(d) {
        for (var g = 0, w = 0, D = d.length, P; w < D; w++)
          P = d.charCodeAt(w), g = P + (g << 6) + (g << 16) - g;
        return g;
      }
      c.on("beforeFileQueued", function(d) {
        var g = d.__hash || (d.__hash = f(d.name + d.size + d.lastModifiedDate));
        if (o[g])
          return this.trigger("error", "F_DUPLICATE", d), !1;
      }), c.on("fileQueued", function(d) {
        var g = d.__hash;
        g && (o[g] = !0);
      }), c.on("fileDequeued", function(d) {
        var g = d.__hash;
        g && delete o[g];
      }), c.on("reset", function() {
        o = {};
      });
    }), a;
  }), M("lib/md5", [
    "runtime/client",
    "mediator"
  ], function(S, A) {
    function E() {
      S.call(this, "Md5");
    }
    return A.installTo(E.prototype), E.prototype.loadFromBlob = function(x) {
      var l = this;
      l.getRuid() && l.disconnectRuntime(), l.connectRuntime(x.ruid, function() {
        l.exec("init"), l.exec("loadFromBlob", x);
      });
    }, E.prototype.getResult = function() {
      return this.exec("getResult");
    }, E;
  }), M("widgets/md5", [
    "base",
    "uploader",
    "lib/md5",
    "lib/blob",
    "widgets/widget"
  ], function(S, A, E, x) {
    return A.register({
      name: "md5",
      /**
       * 计算文件 md5 值，返回一个 promise 对象，可以监听 progress 进度。
       *
       *
       * @method md5File
       * @grammar md5File( file[, start[, end]] ) => promise
       * @for Uploader
       * @example
       *
       * uploader.on( 'fileQueued', function( file ) {
       *     var $li = ...;
       *
       *     uploader.md5File( file )
       *
       *         // 及时显示进度
       *         .progress(function(percentage) {
       *             console.log('Percentage:', percentage);
       *         })
       *
       *         // 完成
       *         .then(function(val) {
       *             console.log('md5 result:', val);
       *         });
       *
       * });
       */
      md5File: function(l, a, c) {
        var p = new E(), o = S.Deferred(), f = l instanceof x ? l : this.request("get-file", l).source;
        return p.on("progress load", function(d) {
          d = d || {}, o.notify(d.total ? d.loaded / d.total : 1);
        }), p.on("complete", function() {
          o.resolve(p.getResult());
        }), p.on("error", function(d) {
          o.reject(d);
        }), arguments.length > 1 && (a = a || 0, c = c || 0, a < 0 && (a = f.size + a), c < 0 && (c = f.size + c), c = Math.min(c, f.size), f = f.slice(a, c)), p.loadFromBlob(f), o.promise();
      }
    });
  }), M("runtime/compbase", [], function() {
    function S(A, E) {
      this.owner = A, this.options = A.options, this.getRuntime = function() {
        return E;
      }, this.getRuid = function() {
        return E.uid;
      }, this.trigger = function() {
        return A.trigger.apply(A, arguments);
      };
    }
    return S;
  }), M("runtime/html5/runtime", [
    "base",
    "runtime/runtime",
    "runtime/compbase"
  ], function(S, A, E) {
    var x = "html5", l = {};
    function a() {
      var c = {}, p = this, o = this.destroy;
      A.apply(p, arguments), p.type = x, p.exec = function(f, d) {
        var g = this, w = g.uid, D = S.slice(arguments, 2), P;
        if (l[f] && (P = c[w] = c[w] || new l[f](g, p), P[d]))
          return P[d].apply(P, D);
      }, p.destroy = function() {
        return o && o.apply(this, arguments);
      };
    }
    return S.inherits(A, {
      constructor: a,
      // 不需要连接其他程序，直接执行callback
      init: function() {
        var c = this;
        setTimeout(function() {
          c.trigger("ready");
        }, 1);
      }
    }), a.register = function(c, p) {
      var o = l[c] = S.inherits(E, p);
      return o;
    }, ve.Blob && ve.FileReader && ve.DataView && A.addRuntime(x, a), a;
  }), M("runtime/html5/blob", [
    "runtime/html5/runtime",
    "lib/blob"
  ], function(S, A) {
    return S.register("Blob", {
      slice: function(E, x) {
        var l = this.owner.source, a = l.slice || l.webkitSlice || l.mozSlice;
        return l = a.call(l, E, x), new A(this.getRuid(), l);
      }
    });
  }), M("runtime/html5/dnd", [
    "base",
    "runtime/html5/runtime",
    "lib/file"
  ], function(S, A, E) {
    var x = S.$, l = "webuploader-dnd-";
    return A.register("DragAndDrop", {
      init: function() {
        var a = this.elem = this.options.container;
        this.dragEnterHandler = S.bindFn(this._dragEnterHandler, this), this.dragOverHandler = S.bindFn(this._dragOverHandler, this), this.dragLeaveHandler = S.bindFn(this._dragLeaveHandler, this), this.dropHandler = S.bindFn(this._dropHandler, this), this.dndOver = !1, a.on("dragenter", this.dragEnterHandler), a.on("dragover", this.dragOverHandler), a.on("dragleave", this.dragLeaveHandler), a.on("drop", this.dropHandler), this.options.disableGlobalDnd && (x(document).on("dragover", this.dragOverHandler), x(document).on("drop", this.dropHandler));
      },
      _dragEnterHandler: function(a) {
        var c = this, p = c._denied || !1, o;
        return a = a.originalEvent || a, c.dndOver || (c.dndOver = !0, o = a.dataTransfer.items, o && o.length && (c._denied = p = !c.trigger("accept", o)), c.elem.addClass(l + "over"), c.elem[p ? "addClass" : "removeClass"](l + "denied")), a.dataTransfer.dropEffect = p ? "none" : "copy", !1;
      },
      _dragOverHandler: function(a) {
        var c = this.elem.parent().get(0);
        return c && !x.contains(c, a.currentTarget) || (clearTimeout(this._leaveTimer), this._dragEnterHandler.call(this, a)), !1;
      },
      _dragLeaveHandler: function() {
        var a = this, c;
        return c = function() {
          a.dndOver = !1, a.elem.removeClass(l + "over " + l + "denied");
        }, clearTimeout(a._leaveTimer), a._leaveTimer = setTimeout(c, 100), !1;
      },
      _dropHandler: function(a) {
        var c = this, p = c.getRuid(), o = c.elem.parent().get(0), f, d;
        if (o && !x.contains(o, a.currentTarget))
          return !1;
        a = a.originalEvent || a, f = a.dataTransfer;
        try {
          d = f.getData("text/html");
        } catch (g) {
        }
        if (c.dndOver = !1, c.elem.removeClass(l + "over"), !d)
          return c._getTansferFiles(f, function(g) {
            c.trigger("drop", x.map(g, function(w) {
              return new E(p, w);
            }));
          }), !1;
      },
      // 如果传入 callback 则去查看文件夹，否则只管当前文件夹。
      _getTansferFiles: function(a, c) {
        var p = [], o = [], f, d, g, w, D, P, Y;
        for (f = a.items, d = a.files, Y = !!(f && f[0].webkitGetAsEntry), D = 0, P = d.length; D < P; D++)
          g = d[D], w = f && f[D], Y && w.webkitGetAsEntry().isDirectory ? o.push(this._traverseDirectoryTree(
            w.webkitGetAsEntry(),
            p
          )) : p.push(g);
        S.when.apply(S, o).done(function() {
          p.length && c(p);
        });
      },
      _traverseDirectoryTree: function(a, c) {
        var p = S.Deferred(), o = this;
        return a.isFile ? a.file(function(f) {
          c.push(f), p.resolve();
        }) : a.isDirectory && a.createReader().readEntries(function(f) {
          var d = f.length, g = [], w = [], D;
          for (D = 0; D < d; D++)
            g.push(o._traverseDirectoryTree(
              f[D],
              w
            ));
          S.when.apply(S, g).then(function() {
            c.push.apply(c, w), p.resolve();
          }, p.reject);
        }), p.promise();
      },
      destroy: function() {
        var a = this.elem;
        a && (a.off("dragenter", this.dragEnterHandler), a.off("dragover", this.dragOverHandler), a.off("dragleave", this.dragLeaveHandler), a.off("drop", this.dropHandler), this.options.disableGlobalDnd && (x(document).off("dragover", this.dragOverHandler), x(document).off("drop", this.dropHandler)));
      }
    });
  }), M("runtime/html5/filepaste", [
    "base",
    "runtime/html5/runtime",
    "lib/file"
  ], function(S, A, E) {
    return A.register("FilePaste", {
      init: function() {
        var x = this.options, l = this.elem = x.container, a = ".*", c, p, o, f;
        if (x.accept) {
          for (c = [], p = 0, o = x.accept.length; p < o; p++)
            f = x.accept[p].mimeTypes, f && c.push(f);
          c.length && (a = c.join(","), a = a.replace(/,/g, "|").replace(/\*/g, ".*"));
        }
        this.accept = a = new RegExp(a, "i"), this.hander = S.bindFn(this._pasteHander, this), l.on("paste", this.hander);
      },
      _pasteHander: function(x) {
        var l = [], a = this.getRuid(), c, p, o, f, d;
        for (x = x.originalEvent || x, c = x.clipboardData.items, f = 0, d = c.length; f < d; f++)
          p = c[f], !(p.kind !== "file" || !(o = p.getAsFile())) && l.push(new E(a, o));
        l.length && (x.preventDefault(), x.stopPropagation(), this.trigger("paste", l));
      },
      destroy: function() {
        this.elem.off("paste", this.hander);
      }
    });
  }), M("runtime/html5/filepicker", [
    "base",
    "runtime/html5/runtime"
  ], function(S, A) {
    var E = S.$;
    return A.register("FilePicker", {
      init: function() {
        var x = this.getRuntime().getContainer(), l = this, a = l.owner, c = l.options, p = this.label = E(document.createElement("label")), o = this.input = E(document.createElement("input")), f, d, g, w;
        if (o.attr("type", "file"), o.attr("capture", "camera"), o.attr("name", c.name), o.addClass("webuploader-element-invisible"), p.on("click", function(P) {
          o.trigger("click"), P.stopPropagation(), a.trigger("dialogopen");
        }), p.css({
          opacity: 0,
          width: "100%",
          height: "100%",
          display: "block",
          cursor: "pointer",
          background: "#ffffff"
        }), c.multiple && o.attr("multiple", "multiple"), c.accept && c.accept.length > 0) {
          for (f = [], d = 0, g = c.accept.length; d < g; d++)
            f.push(c.accept[d].mimeTypes);
          o.attr("accept", f.join(","));
        }
        x.append(o), x.append(p), w = function(P) {
          a.trigger(P.type);
        };
        function D(P) {
          var Y = D, Q;
          l.files = P.target.files, Q = this.cloneNode(!0), Q.value = null, this.parentNode.replaceChild(Q, this), o.off(), o = E(Q).on("change", Y).on("mouseenter mouseleave", w), a.trigger("change");
        }
        o.on("change", D), p.on("mouseenter mouseleave", w);
      },
      getFiles: function() {
        return this.files;
      },
      destroy: function() {
        this.input.off(), this.label.off();
      }
    });
  }), M("runtime/html5/util", [
    "base"
  ], function(S) {
    var A = ve.createObjectURL && ve || ve.URL && URL.revokeObjectURL && URL || ve.webkitURL, E = S.noop, x = E;
    return A && (E = function() {
      return A.createObjectURL.apply(A, arguments);
    }, x = function() {
      return A.revokeObjectURL.apply(A, arguments);
    }), {
      createObjectURL: E,
      revokeObjectURL: x,
      dataURL2Blob: function(l) {
        var a, c, p, o, f, d;
        for (d = l.split(","), ~d[0].indexOf("base64") ? a = atob(d[1]) : a = decodeURIComponent(d[1]), p = new ArrayBuffer(a.length), c = new Uint8Array(p), o = 0; o < a.length; o++)
          c[o] = a.charCodeAt(o);
        return f = d[0].split(":")[1].split(";")[0], this.arrayBufferToBlob(p, f);
      },
      dataURL2ArrayBuffer: function(l) {
        var a, c, p, o;
        for (o = l.split(","), ~o[0].indexOf("base64") ? a = atob(o[1]) : a = decodeURIComponent(o[1]), c = new Uint8Array(a.length), p = 0; p < a.length; p++)
          c[p] = a.charCodeAt(p);
        return c.buffer;
      },
      arrayBufferToBlob: function(l, a) {
        var c = ve.BlobBuilder || ve.WebKitBlobBuilder, p;
        return c ? (p = new c(), p.append(l), p.getBlob(a)) : new Blob([l], a ? { type: a } : {});
      },
      // 抽出来主要是为了解决android下面canvas.toDataUrl不支持jpeg.
      // 你得到的结果是png.
      canvasToDataUrl: function(l, a, c) {
        return l.toDataURL(a, c / 100);
      },
      // imagemeat会复写这个方法，如果用户选择加载那个文件了的话。
      parseMeta: function(l, a) {
        a(!1, {});
      },
      // imagemeat会复写这个方法，如果用户选择加载那个文件了的话。
      updateImageHead: function(l) {
        return l;
      }
    };
  }), M("runtime/html5/imagemeta", [
    "runtime/html5/util"
  ], function(S) {
    var A;
    return A = {
      parsers: {
        65505: []
      },
      maxMetaDataSize: 262144,
      parse: function(E, x) {
        var l = this, a = new FileReader();
        a.onload = function() {
          x(!1, l._parse(this.result)), a = a.onload = a.onerror = null;
        }, a.onerror = function(c) {
          x(c.message), a = a.onload = a.onerror = null;
        }, E = E.slice(0, l.maxMetaDataSize), a.readAsArrayBuffer(E.getSource());
      },
      _parse: function(E, x) {
        if (!(E.byteLength < 6)) {
          var l = new DataView(E), a = 2, c = l.byteLength - 4, p = a, o = {}, f, d, g, w;
          if (l.getUint16(0) === 65496) {
            for (; a < c && (f = l.getUint16(a), f >= 65504 && f <= 65519 || f === 65534); ) {
              if (d = l.getUint16(a + 2) + 2, a + d > l.byteLength)
                break;
              if (g = A.parsers[f], !x && g)
                for (w = 0; w < g.length; w += 1)
                  g[w].call(
                    A,
                    l,
                    a,
                    d,
                    o
                  );
              a += d, p = a;
            }
            p > 6 && (E.slice ? o.imageHead = E.slice(2, p) : o.imageHead = new Uint8Array(E).subarray(2, p));
          }
          return o;
        }
      },
      updateImageHead: function(E, x) {
        var l = this._parse(E, !0), a, c, p;
        return p = 2, l.imageHead && (p = 2 + l.imageHead.byteLength), E.slice ? c = E.slice(p) : c = new Uint8Array(E).subarray(p), a = new Uint8Array(x.byteLength + 2 + c.byteLength), a[0] = 255, a[1] = 216, a.set(new Uint8Array(x), 2), a.set(new Uint8Array(c), x.byteLength + 2), a.buffer;
      }
    }, S.parseMeta = function() {
      return A.parse.apply(A, arguments);
    }, S.updateImageHead = function() {
      return A.updateImageHead.apply(A, arguments);
    }, A;
  }), M("runtime/html5/imagemeta/exif", [
    "base",
    "runtime/html5/imagemeta"
  ], function(S, A) {
    var E = {};
    return E.ExifMap = function() {
      return this;
    }, E.ExifMap.prototype.map = {
      Orientation: 274
    }, E.ExifMap.prototype.get = function(x) {
      return this[x] || this[this.map[x]];
    }, E.exifTagTypes = {
      // byte, 8-bit unsigned int:
      1: {
        getValue: function(x, l) {
          return x.getUint8(l);
        },
        size: 1
      },
      // ascii, 8-bit byte:
      2: {
        getValue: function(x, l) {
          return String.fromCharCode(x.getUint8(l));
        },
        size: 1,
        ascii: !0
      },
      // short, 16 bit int:
      3: {
        getValue: function(x, l, a) {
          return x.getUint16(l, a);
        },
        size: 2
      },
      // long, 32 bit int:
      4: {
        getValue: function(x, l, a) {
          return x.getUint32(l, a);
        },
        size: 4
      },
      // rational = two long values,
      // first is numerator, second is denominator:
      5: {
        getValue: function(x, l, a) {
          return x.getUint32(l, a) / x.getUint32(l + 4, a);
        },
        size: 8
      },
      // slong, 32 bit signed int:
      9: {
        getValue: function(x, l, a) {
          return x.getInt32(l, a);
        },
        size: 4
      },
      // srational, two slongs, first is numerator, second is denominator:
      10: {
        getValue: function(x, l, a) {
          return x.getInt32(l, a) / x.getInt32(l + 4, a);
        },
        size: 8
      }
    }, E.exifTagTypes[7] = E.exifTagTypes[1], E.getExifValue = function(x, l, a, c, p, o) {
      var f = E.exifTagTypes[c], d, g, w, D, P, Y;
      if (!f) {
        S.log("Invalid Exif data: Invalid tag type.");
        return;
      }
      if (d = f.size * p, g = d > 4 ? l + x.getUint32(
        a + 8,
        o
      ) : a + 8, g + d > x.byteLength) {
        S.log("Invalid Exif data: Invalid data offset.");
        return;
      }
      if (p === 1)
        return f.getValue(x, g, o);
      for (w = [], D = 0; D < p; D += 1)
        w[D] = f.getValue(
          x,
          g + D * f.size,
          o
        );
      if (f.ascii) {
        for (P = "", D = 0; D < w.length && (Y = w[D], Y !== "\0"); D += 1)
          P += Y;
        return P;
      }
      return w;
    }, E.parseExifTag = function(x, l, a, c, p) {
      var o = x.getUint16(a, c);
      p.exif[o] = E.getExifValue(
        x,
        l,
        a,
        x.getUint16(a + 2, c),
        // tag type
        x.getUint32(a + 4, c),
        // tag length
        c
      );
    }, E.parseExifTags = function(x, l, a, c, p) {
      var o, f, d;
      if (a + 6 > x.byteLength) {
        S.log("Invalid Exif data: Invalid directory offset.");
        return;
      }
      if (o = x.getUint16(a, c), f = a + 2 + 12 * o, f + 4 > x.byteLength) {
        S.log("Invalid Exif data: Invalid directory size.");
        return;
      }
      for (d = 0; d < o; d += 1)
        this.parseExifTag(
          x,
          l,
          a + 2 + 12 * d,
          // tag offset
          c,
          p
        );
      return x.getUint32(f, c);
    }, E.parseExifData = function(x, l, a, c) {
      var p = l + 10, o, f;
      if (x.getUint32(l + 4) === 1165519206) {
        if (p + 8 > x.byteLength) {
          S.log("Invalid Exif data: Invalid segment size.");
          return;
        }
        if (x.getUint16(l + 8) !== 0) {
          S.log("Invalid Exif data: Missing byte alignment offset.");
          return;
        }
        switch (x.getUint16(p)) {
          case 18761:
            o = !0;
            break;
          case 19789:
            o = !1;
            break;
          default:
            S.log("Invalid Exif data: Invalid byte alignment marker.");
            return;
        }
        if (x.getUint16(p + 2, o) !== 42) {
          S.log("Invalid Exif data: Missing TIFF marker.");
          return;
        }
        f = x.getUint32(p + 4, o), c.exif = new E.ExifMap(), f = E.parseExifTags(
          x,
          p,
          p + f,
          o,
          c
        );
      }
    }, A.parsers[65505].push(E.parseExifData), E;
  }), M("runtime/html5/jpegencoder", [], function(S, A, E) {
    function x(l) {
      var a = Math.floor, c = new Array(64), p = new Array(64), o = new Array(64), f = new Array(64), d, g, w, D, P = new Array(65535), Y = new Array(65535), Q = new Array(64), k = new Array(64), C = [], n = 0, _ = 7, O = new Array(64), N = new Array(64), le = new Array(64), Oe = new Array(256), X = new Array(2048), Re, Pe = [
        0,
        1,
        5,
        6,
        14,
        15,
        27,
        28,
        2,
        4,
        7,
        13,
        16,
        26,
        29,
        42,
        3,
        8,
        12,
        17,
        25,
        30,
        41,
        43,
        9,
        11,
        18,
        24,
        31,
        40,
        44,
        53,
        10,
        19,
        23,
        32,
        39,
        45,
        52,
        54,
        20,
        22,
        33,
        38,
        46,
        51,
        55,
        60,
        21,
        34,
        37,
        47,
        50,
        56,
        59,
        61,
        35,
        36,
        48,
        49,
        57,
        58,
        62,
        63
      ], ft = [0, 0, 1, 5, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0], ke = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], ct = [0, 0, 2, 1, 3, 3, 2, 4, 3, 5, 5, 4, 4, 0, 0, 1, 125], it = [
        1,
        2,
        3,
        0,
        4,
        17,
        5,
        18,
        33,
        49,
        65,
        6,
        19,
        81,
        97,
        7,
        34,
        113,
        20,
        50,
        129,
        145,
        161,
        8,
        35,
        66,
        177,
        193,
        21,
        82,
        209,
        240,
        36,
        51,
        98,
        114,
        130,
        9,
        10,
        22,
        23,
        24,
        25,
        26,
        37,
        38,
        39,
        40,
        41,
        42,
        52,
        53,
        54,
        55,
        56,
        57,
        58,
        67,
        68,
        69,
        70,
        71,
        72,
        73,
        74,
        83,
        84,
        85,
        86,
        87,
        88,
        89,
        90,
        99,
        100,
        101,
        102,
        103,
        104,
        105,
        106,
        115,
        116,
        117,
        118,
        119,
        120,
        121,
        122,
        131,
        132,
        133,
        134,
        135,
        136,
        137,
        138,
        146,
        147,
        148,
        149,
        150,
        151,
        152,
        153,
        154,
        162,
        163,
        164,
        165,
        166,
        167,
        168,
        169,
        170,
        178,
        179,
        180,
        181,
        182,
        183,
        184,
        185,
        186,
        194,
        195,
        196,
        197,
        198,
        199,
        200,
        201,
        202,
        210,
        211,
        212,
        213,
        214,
        215,
        216,
        217,
        218,
        225,
        226,
        227,
        228,
        229,
        230,
        231,
        232,
        233,
        234,
        241,
        242,
        243,
        244,
        245,
        246,
        247,
        248,
        249,
        250
      ], It = [0, 0, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0], jt = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], Ht = [0, 0, 2, 1, 2, 4, 4, 3, 4, 7, 5, 4, 4, 0, 1, 2, 119], Dt = [
        0,
        1,
        2,
        3,
        17,
        4,
        5,
        33,
        49,
        6,
        18,
        65,
        81,
        7,
        97,
        113,
        19,
        34,
        50,
        129,
        8,
        20,
        66,
        145,
        161,
        177,
        193,
        9,
        35,
        51,
        82,
        240,
        21,
        98,
        114,
        209,
        10,
        22,
        36,
        52,
        225,
        37,
        241,
        23,
        24,
        25,
        26,
        38,
        39,
        40,
        41,
        42,
        53,
        54,
        55,
        56,
        57,
        58,
        67,
        68,
        69,
        70,
        71,
        72,
        73,
        74,
        83,
        84,
        85,
        86,
        87,
        88,
        89,
        90,
        99,
        100,
        101,
        102,
        103,
        104,
        105,
        106,
        115,
        116,
        117,
        118,
        119,
        120,
        121,
        122,
        130,
        131,
        132,
        133,
        134,
        135,
        136,
        137,
        138,
        146,
        147,
        148,
        149,
        150,
        151,
        152,
        153,
        154,
        162,
        163,
        164,
        165,
        166,
        167,
        168,
        169,
        170,
        178,
        179,
        180,
        181,
        182,
        183,
        184,
        185,
        186,
        194,
        195,
        196,
        197,
        198,
        199,
        200,
        201,
        202,
        210,
        211,
        212,
        213,
        214,
        215,
        216,
        217,
        218,
        226,
        227,
        228,
        229,
        230,
        231,
        232,
        233,
        234,
        242,
        243,
        244,
        245,
        246,
        247,
        248,
        249,
        250
      ];
      function tn(H) {
        for (var re = [
          16,
          11,
          10,
          16,
          24,
          40,
          51,
          61,
          12,
          12,
          14,
          19,
          26,
          58,
          60,
          55,
          14,
          13,
          16,
          24,
          40,
          57,
          69,
          56,
          14,
          17,
          22,
          29,
          51,
          87,
          80,
          62,
          18,
          22,
          37,
          56,
          68,
          109,
          103,
          77,
          24,
          35,
          55,
          64,
          81,
          104,
          113,
          92,
          49,
          64,
          78,
          87,
          103,
          121,
          120,
          101,
          72,
          92,
          95,
          98,
          112,
          100,
          103,
          99
        ], ie = 0; ie < 64; ie++) {
          var $ = a((re[ie] * H + 50) / 100);
          $ < 1 ? $ = 1 : $ > 255 && ($ = 255), c[Pe[ie]] = $;
        }
        for (var ee = [
          17,
          18,
          24,
          47,
          99,
          99,
          99,
          99,
          18,
          21,
          26,
          66,
          99,
          99,
          99,
          99,
          24,
          26,
          56,
          99,
          99,
          99,
          99,
          99,
          47,
          66,
          99,
          99,
          99,
          99,
          99,
          99,
          99,
          99,
          99,
          99,
          99,
          99,
          99,
          99,
          99,
          99,
          99,
          99,
          99,
          99,
          99,
          99,
          99,
          99,
          99,
          99,
          99,
          99,
          99,
          99,
          99,
          99,
          99,
          99,
          99,
          99,
          99,
          99
        ], de = 0; de < 64; de++) {
          var xe = a((ee[de] * H + 50) / 100);
          xe < 1 ? xe = 1 : xe > 255 && (xe = 255), p[Pe[de]] = xe;
        }
        for (var ge = [
          1,
          1.387039845,
          1.306562965,
          1.175875602,
          1,
          0.785694958,
          0.5411961,
          0.275899379
        ], be = 0, we = 0; we < 8; we++)
          for (var J = 0; J < 8; J++)
            o[be] = 1 / (c[Pe[be]] * ge[we] * ge[J] * 8), f[be] = 1 / (p[Pe[be]] * ge[we] * ge[J] * 8), be++;
      }
      function At(H, re) {
        for (var ie = 0, $ = 0, ee = new Array(), de = 1; de <= 16; de++) {
          for (var xe = 1; xe <= H[de]; xe++)
            ee[re[$]] = [], ee[re[$]][0] = ie, ee[re[$]][1] = de, $++, ie++;
          ie *= 2;
        }
        return ee;
      }
      function xn() {
        d = At(ft, ke), g = At(It, jt), w = At(ct, it), D = At(Ht, Dt);
      }
      function yn() {
        for (var H = 1, re = 2, ie = 1; ie <= 15; ie++) {
          for (var $ = H; $ < re; $++)
            Y[32767 + $] = ie, P[32767 + $] = [], P[32767 + $][1] = ie, P[32767 + $][0] = $;
          for (var ee = -(re - 1); ee <= -H; ee++)
            Y[32767 + ee] = ie, P[32767 + ee] = [], P[32767 + ee][1] = ie, P[32767 + ee][0] = re - 1 + ee;
          H <<= 1, re <<= 1;
        }
      }
      function bn() {
        for (var H = 0; H < 256; H++)
          X[H] = 19595 * H, X[H + 256 >> 0] = 38470 * H, X[H + 512 >> 0] = 7471 * H + 32768, X[H + 768 >> 0] = -11059 * H, X[H + 1024 >> 0] = -21709 * H, X[H + 1280 >> 0] = 32768 * H + 8421375, X[H + 1536 >> 0] = -27439 * H, X[H + 1792 >> 0] = -5329 * H;
      }
      function Qe(H) {
        for (var re = H[0], ie = H[1] - 1; ie >= 0; )
          re & 1 << ie && (n |= 1 << _), ie--, _--, _ < 0 && (n == 255 ? (V(255), V(0)) : V(n), _ = 7, n = 0);
      }
      function V(H) {
        C.push(Oe[H]);
      }
      function Ae(H) {
        V(H >> 8 & 255), V(H & 255);
      }
      function lt(H, re) {
        var ie, $, ee, de, xe, ge, be, we, J = 0, he, Se = 8, qe = 64;
        for (he = 0; he < Se; ++he) {
          ie = H[J], $ = H[J + 1], ee = H[J + 2], de = H[J + 3], xe = H[J + 4], ge = H[J + 5], be = H[J + 6], we = H[J + 7];
          var Ne = ie + we, ye = ie - we, Me = $ + be, We = $ - be, Ce = ee + ge, Le = ee - ge, Ke = de + xe, on = de - xe, dt = Ne + Ke, Ie = Ne - Ke, Ee = Me + Ce, ht = Me - Ce;
          H[J] = dt + Ee, H[J + 4] = dt - Ee;
          var an = (ht + Ie) * 0.707106781;
          H[J + 2] = Ie + an, H[J + 6] = Ie - an, dt = on + Le, Ee = Le + We, ht = We + ye;
          var Mt = (dt - ht) * 0.382683433, Ut = 0.5411961 * dt + Mt, ot = 1.306562965 * ht + Mt, at = Ee * 0.707106781, Ot = ye + at, bt = ye - at;
          H[J + 5] = bt + Ut, H[J + 3] = bt - Ut, H[J + 1] = Ot + ot, H[J + 7] = Ot - ot, J += 8;
        }
        for (J = 0, he = 0; he < Se; ++he) {
          ie = H[J], $ = H[J + 8], ee = H[J + 16], de = H[J + 24], xe = H[J + 32], ge = H[J + 40], be = H[J + 48], we = H[J + 56];
          var sn = ie + we, $t = ie - we, un = $ + be, zt = $ - be, fn = ee + ge, cn = ee - ge, Wt = de + xe, Sn = de - xe, Ve = sn + Wt, kt = sn - Wt, pt = un + fn, gt = un - fn;
          H[J] = Ve + pt, H[J + 32] = Ve - pt;
          var _t = (gt + kt) * 0.707106781;
          H[J + 16] = kt + _t, H[J + 48] = kt - _t, Ve = Sn + cn, pt = cn + zt, gt = zt + $t;
          var Bt = (Ve - gt) * 0.382683433, ln = 0.5411961 * Ve + Bt, mt = 1.306562965 * gt + Bt, Qt = pt * 0.707106781, Vt = $t + Qt, Gt = $t - Qt;
          H[J + 40] = Gt + ln, H[J + 24] = Gt - ln, H[J + 8] = Vt + mt, H[J + 56] = Vt - mt, J++;
        }
        var wt;
        for (he = 0; he < qe; ++he)
          wt = H[he] * re[he], Q[he] = wt > 0 ? wt + 0.5 | 0 : wt - 0.5 | 0;
        return Q;
      }
      function Rt() {
        Ae(65504), Ae(16), V(74), V(70), V(73), V(70), V(0), V(1), V(1), V(0), Ae(1), Ae(1), V(0), V(0);
      }
      function nn(H, re) {
        Ae(65472), Ae(17), V(8), Ae(re), Ae(H), V(3), V(1), V(17), V(0), V(2), V(17), V(1), V(3), V(17), V(1);
      }
      function _n() {
        Ae(65499), Ae(132), V(0);
        for (var H = 0; H < 64; H++)
          V(c[H]);
        V(1);
        for (var re = 0; re < 64; re++)
          V(p[re]);
      }
      function Pt() {
        Ae(65476), Ae(418), V(0);
        for (var H = 0; H < 16; H++)
          V(ft[H + 1]);
        for (var re = 0; re <= 11; re++)
          V(ke[re]);
        V(16);
        for (var ie = 0; ie < 16; ie++)
          V(ct[ie + 1]);
        for (var $ = 0; $ <= 161; $++)
          V(it[$]);
        V(1);
        for (var ee = 0; ee < 16; ee++)
          V(It[ee + 1]);
        for (var de = 0; de <= 11; de++)
          V(jt[de]);
        V(17);
        for (var xe = 0; xe < 16; xe++)
          V(Ht[xe + 1]);
        for (var ge = 0; ge <= 161; ge++)
          V(Dt[ge]);
      }
      function Ft() {
        Ae(65498), Ae(12), V(3), V(1), V(0), V(2), V(17), V(3), V(17), V(0), V(63), V(0);
      }
      function ze(H, re, ie, $, ee) {
        for (var de = ee[0], xe = ee[240], ge, be = 16, we = 63, J = 64, he = lt(H, re), Se = 0; Se < J; ++Se)
          k[Pe[Se]] = he[Se];
        var qe = k[0] - ie;
        ie = k[0], qe == 0 ? Qe($[0]) : (ge = 32767 + qe, Qe($[Y[ge]]), Qe(P[ge]));
        for (var Ne = 63; Ne > 0 && k[Ne] == 0; Ne--)
          ;
        if (Ne == 0)
          return Qe(de), ie;
        for (var ye = 1, Me; ye <= Ne; ) {
          for (var We = ye; k[ye] == 0 && ye <= Ne; ++ye)
            ;
          var Ce = ye - We;
          if (Ce >= be) {
            Me = Ce >> 4;
            for (var Le = 1; Le <= Me; ++Le)
              Qe(xe);
            Ce = Ce & 15;
          }
          ge = 32767 + k[ye], Qe(ee[(Ce << 4) + Y[ge]]), Qe(P[ge]), ye++;
        }
        return Ne != we && Qe(de), ie;
      }
      function wn() {
        for (var H = String.fromCharCode, re = 0; re < 256; re++)
          Oe[re] = H(re);
      }
      this.encode = function(H, re) {
        re && rn(re), C = new Array(), n = 0, _ = 7, Ae(65496), Rt(), _n(), nn(H.width, H.height), Pt(), Ft();
        var ie = 0, $ = 0, ee = 0;
        n = 0, _ = 7, this.encode.displayName = "_encode_";
        for (var de = H.data, xe = H.width, ge = H.height, be = xe * 4, we, J = 0, he, Se, qe, Ne, ye, Me, We, Ce; J < ge; ) {
          for (we = 0; we < be; ) {
            for (Ne = be * J + we, ye = Ne, Me = -1, We = 0, Ce = 0; Ce < 64; Ce++)
              We = Ce >> 3, Me = (Ce & 7) * 4, ye = Ne + We * be + Me, J + We >= ge && (ye -= be * (J + 1 + We - ge)), we + Me >= be && (ye -= we + Me - be + 4), he = de[ye++], Se = de[ye++], qe = de[ye++], O[Ce] = (X[he] + X[Se + 256 >> 0] + X[qe + 512 >> 0] >> 16) - 128, N[Ce] = (X[he + 768 >> 0] + X[Se + 1024 >> 0] + X[qe + 1280 >> 0] >> 16) - 128, le[Ce] = (X[he + 1280 >> 0] + X[Se + 1536 >> 0] + X[qe + 1792 >> 0] >> 16) - 128;
            ie = ze(O, o, ie, d, w), $ = ze(N, f, $, g, D), ee = ze(le, f, ee, g, D), we += 32;
          }
          J += 8;
        }
        if (_ >= 0) {
          var Le = [];
          Le[1] = _ + 1, Le[0] = (1 << _ + 1) - 1, Qe(Le);
        }
        Ae(65497);
        var Ke = "data:image/jpeg;base64," + btoa(C.join(""));
        return C = [], Ke;
      };
      function rn(H) {
        if (H <= 0 && (H = 1), H > 100 && (H = 100), Re != H) {
          var re = 0;
          H < 50 ? re = Math.floor(5e3 / H) : re = Math.floor(200 - H * 2), tn(re), Re = H;
        }
      }
      function Tn() {
        l || (l = 50), wn(), xn(), yn(), bn(), rn(l);
      }
      Tn();
    }
    return x.encode = function(l, a) {
      var c = new x(a);
      return c.encode(l);
    }, x;
  }), M("runtime/html5/androidpatch", [
    "runtime/html5/util",
    "runtime/html5/jpegencoder",
    "base"
  ], function(S, A, E) {
    var x = S.canvasToDataUrl, l;
    S.canvasToDataUrl = function(a, c, p) {
      var o, f, d, g, w;
      return E.os.android ? (c === "image/jpeg" && typeof l == "undefined" && (g = x.apply(null, arguments), w = g.split(","), ~w[0].indexOf("base64") ? g = atob(w[1]) : g = decodeURIComponent(w[1]), g = g.substring(0, 2), l = g.charCodeAt(0) === 255 && g.charCodeAt(1) === 216), c === "image/jpeg" && !l ? (f = a.width, d = a.height, o = a.getContext("2d"), A.encode(o.getImageData(0, 0, f, d), p)) : x.apply(null, arguments)) : x.apply(null, arguments);
    };
  }), M("runtime/html5/image", [
    "base",
    "runtime/html5/runtime",
    "runtime/html5/util"
  ], function(S, A, E) {
    var x = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D";
    return A.register("Image", {
      // flag: 标记是否被修改过。
      modified: !1,
      init: function() {
        var l = this, a = new Image();
        a.onload = function() {
          l._info = {
            type: l.type,
            width: this.width,
            height: this.height
          }, !l._metas && l.type === "image/jpeg" ? E.parseMeta(l._blob, function(c, p) {
            l._metas = p, l.owner.trigger("load");
          }) : l.owner.trigger("load");
        }, a.onerror = function() {
          l.owner.trigger("error");
        }, l._img = a;
      },
      loadFromBlob: function(l) {
        var a = this, c = a._img;
        a._blob = l, a.type = l.type, c.src = E.createObjectURL(l.getSource()), a.owner.once("load", function() {
          E.revokeObjectURL(c.src);
        });
      },
      resize: function(l, a) {
        var c = this._canvas || (this._canvas = document.createElement("canvas"));
        this._resize(this._img, c, l, a), this._blob = null, this.modified = !0, this.owner.trigger("complete", "resize");
      },
      crop: function(l, a, c, p, o) {
        var f = this._canvas || (this._canvas = document.createElement("canvas")), d = this.options, g = this._img, w = g.naturalWidth, D = g.naturalHeight, P = this.getOrientation();
        o = o || 1, f.width = c, f.height = p, d.preserveHeaders || this._rotate2Orientaion(f, P), this._renderImageToCanvas(f, g, -l, -a, w * o, D * o), this._blob = null, this.modified = !0, this.owner.trigger("complete", "crop");
      },
      getAsBlob: function(l) {
        var a = this._blob, c = this.options, p;
        if (l = l || this.type, this.modified || this.type !== l) {
          if (p = this._canvas, l === "image/jpeg") {
            if (a = E.canvasToDataUrl(p, l, c.quality), c.preserveHeaders && this._metas && this._metas.imageHead)
              return a = E.dataURL2ArrayBuffer(a), a = E.updateImageHead(
                a,
                this._metas.imageHead
              ), a = E.arrayBufferToBlob(a, l), a;
          } else
            a = E.canvasToDataUrl(p, l);
          a = E.dataURL2Blob(a);
        }
        return a;
      },
      getAsDataUrl: function(l) {
        var a = this.options;
        return l = l || this.type, l === "image/jpeg" ? E.canvasToDataUrl(this._canvas, l, a.quality) : this._canvas.toDataURL(l);
      },
      getOrientation: function() {
        return this._metas && this._metas.exif && this._metas.exif.get("Orientation") || 1;
      },
      info: function(l) {
        return l ? (this._info = l, this) : this._info;
      },
      meta: function(l) {
        return l ? (this._metas = l, this) : this._metas;
      },
      destroy: function() {
        var l = this._canvas;
        this._img.onload = null, l && (l.getContext("2d").clearRect(0, 0, l.width, l.height), l.width = l.height = 0, this._canvas = null), this._img.src = x, this._img = this._blob = null;
      },
      _resize: function(l, a, c, p) {
        var o = this.options, f = l.width, d = l.height, g = this.getOrientation(), w, D, P, Y, Q;
        ~[5, 6, 7, 8].indexOf(g) && (c ^= p, p ^= c, c ^= p), w = Math[o.crop ? "max" : "min"](
          c / f,
          p / d
        ), o.allowMagnify || (w = Math.min(1, w)), D = f * w, P = d * w, o.crop ? (a.width = c, a.height = p) : (a.width = D, a.height = P), Y = (a.width - D) / 2, Q = (a.height - P) / 2, o.preserveHeaders || this._rotate2Orientaion(a, g), this._renderImageToCanvas(a, l, Y, Q, D, P);
      },
      _rotate2Orientaion: function(l, a) {
        var c = l.width, p = l.height, o = l.getContext("2d");
        switch (a) {
          case 5:
          case 6:
          case 7:
          case 8:
            l.width = p, l.height = c;
            break;
        }
        switch (a) {
          case 2:
            o.translate(c, 0), o.scale(-1, 1);
            break;
          case 3:
            o.translate(c, p), o.rotate(Math.PI);
            break;
          case 4:
            o.translate(0, p), o.scale(1, -1);
            break;
          case 5:
            o.rotate(0.5 * Math.PI), o.scale(1, -1);
            break;
          case 6:
            o.rotate(0.5 * Math.PI), o.translate(0, -p);
            break;
          case 7:
            o.rotate(0.5 * Math.PI), o.translate(c, -p), o.scale(-1, 1);
            break;
          case 8:
            o.rotate(-0.5 * Math.PI), o.translate(-c, 0);
            break;
        }
      },
      // https://github.com/stomita/ios-imagefile-megapixel/
      // blob/master/src/megapix-image.js
      _renderImageToCanvas: function() {
        if (!S.os.ios)
          return function(c) {
            var p = S.slice(arguments, 1), o = c.getContext("2d");
            o.drawImage.apply(o, p);
          };
        function l(c, p, o) {
          var f = document.createElement("canvas"), d = f.getContext("2d"), g = 0, w = o, D = o, P, Y, Q;
          for (f.width = 1, f.height = o, d.drawImage(c, 0, 0), P = d.getImageData(0, 0, 1, o).data; D > g; )
            Y = P[(D - 1) * 4 + 3], Y === 0 ? w = D : g = D, D = w + g >> 1;
          return Q = D / o, Q === 0 ? 1 : Q;
        }
        if (S.os.ios >= 7)
          return function(c, p, o, f, d, g) {
            var w = p.naturalWidth, D = p.naturalHeight, P = l(p, w, D);
            return c.getContext("2d").drawImage(
              p,
              0,
              0,
              w * P,
              D * P,
              o,
              f,
              d,
              g
            );
          };
        function a(c) {
          var p = c.naturalWidth, o = c.naturalHeight, f, d;
          return p * o > 1024 * 1024 ? (f = document.createElement("canvas"), f.width = f.height = 1, d = f.getContext("2d"), d.drawImage(c, -p + 1, 0), d.getImageData(0, 0, 1, 1).data[3] === 0) : !1;
        }
        return function(c, p, o, f, d, g) {
          var w = p.naturalWidth, D = p.naturalHeight, P = c.getContext("2d"), Y = a(p), Q = this.type === "image/jpeg", k = 1024, C = 0, n = 0, _, O, N, le, Oe, X, Re;
          for (Y && (w /= 2, D /= 2), P.save(), _ = document.createElement("canvas"), _.width = _.height = k, O = _.getContext("2d"), N = Q ? l(p, w, D) : 1, le = Math.ceil(k * d / w), Oe = Math.ceil(k * g / D / N); C < D; ) {
            for (X = 0, Re = 0; X < w; )
              O.clearRect(0, 0, k, k), O.drawImage(p, -X, -C), P.drawImage(
                _,
                0,
                0,
                k,
                k,
                o + Re,
                f + n,
                le,
                Oe
              ), X += k, Re += le;
            C += k, n += Oe;
          }
          P.restore(), _ = O = null;
        };
      }()
    });
  }), M("runtime/html5/transport", [
    "base",
    "runtime/html5/runtime"
  ], function(S, A) {
    var E = S.noop, x = S.$;
    return A.register("Transport", {
      init: function() {
        this._status = 0, this._response = null;
      },
      send: function() {
        var l = this.owner, a = this.options, c = this._initAjax(), p = l._blob, o = a.server, f, d, g;
        a.sendAsBinary ? (o += (/\?/.test(o) ? "&" : "?") + x.param(l._formData), d = p.getSource()) : (f = new FormData(), x.each(l._formData, function(w, D) {
          f.append(w, D);
        }), f.append(
          a.fileVal,
          p.getSource(),
          a.filename || l._formData.name || ""
        )), a.withCredentials && "withCredentials" in c ? (c.open(a.method, o, !0), c.withCredentials = !0) : c.open(a.method, o), this._setRequestHeader(c, a.headers), d ? (c.overrideMimeType && c.overrideMimeType("application/octet-stream"), S.os.android ? (g = new FileReader(), g.onload = function() {
          c.send(this.result), g = g.onload = null;
        }, g.readAsArrayBuffer(d)) : c.send(d)) : c.send(f);
      },
      getResponse: function() {
        return this._response;
      },
      getResponseAsJson: function() {
        return this._parseJson(this._response);
      },
      getStatus: function() {
        return this._status;
      },
      abort: function() {
        var l = this._xhr;
        l && (l.upload.onprogress = E, l.onreadystatechange = E, l.abort(), this._xhr = l = null);
      },
      destroy: function() {
        this.abort();
      },
      _initAjax: function() {
        var l = this, a = new XMLHttpRequest(), c = this.options;
        return c.withCredentials && !("withCredentials" in a) && typeof XDomainRequest != "undefined" && (a = new XDomainRequest()), a.upload.onprogress = function(p) {
          var o = 0;
          return p.lengthComputable && (o = p.loaded / p.total), l.trigger("progress", o);
        }, a.onreadystatechange = function() {
          if (a.readyState === 4)
            return a.upload.onprogress = E, a.onreadystatechange = E, l._xhr = null, l._status = a.status, a.status >= 200 && a.status < 300 ? (l._response = a.responseText, l.trigger("load")) : a.status >= 500 && a.status < 600 ? (l._response = a.responseText, l.trigger("error", "server")) : l.trigger("error", l._status ? "http" : "abort");
        }, l._xhr = a, a;
      },
      _setRequestHeader: function(l, a) {
        x.each(a, function(c, p) {
          l.setRequestHeader(c, p);
        });
      },
      _parseJson: function(l) {
        var a;
        try {
          a = JSON.parse(l);
        } catch (c) {
          a = {};
        }
        return a;
      }
    });
  }), M("runtime/html5/md5", [
    "runtime/html5/runtime"
  ], function(S) {
    var A = function(k, C) {
      return k + C & 4294967295;
    }, E = function(k, C, n, _, O, N) {
      return C = A(A(C, k), A(_, N)), A(C << O | C >>> 32 - O, n);
    }, x = function(k, C, n, _, O, N, le) {
      return E(C & n | ~C & _, k, C, O, N, le);
    }, l = function(k, C, n, _, O, N, le) {
      return E(C & _ | n & ~_, k, C, O, N, le);
    }, a = function(k, C, n, _, O, N, le) {
      return E(C ^ n ^ _, k, C, O, N, le);
    }, c = function(k, C, n, _, O, N, le) {
      return E(n ^ (C | ~_), k, C, O, N, le);
    }, p = function(k, C) {
      var n = k[0], _ = k[1], O = k[2], N = k[3];
      n = x(n, _, O, N, C[0], 7, -680876936), N = x(N, n, _, O, C[1], 12, -389564586), O = x(O, N, n, _, C[2], 17, 606105819), _ = x(_, O, N, n, C[3], 22, -1044525330), n = x(n, _, O, N, C[4], 7, -176418897), N = x(N, n, _, O, C[5], 12, 1200080426), O = x(O, N, n, _, C[6], 17, -1473231341), _ = x(_, O, N, n, C[7], 22, -45705983), n = x(n, _, O, N, C[8], 7, 1770035416), N = x(N, n, _, O, C[9], 12, -1958414417), O = x(O, N, n, _, C[10], 17, -42063), _ = x(_, O, N, n, C[11], 22, -1990404162), n = x(n, _, O, N, C[12], 7, 1804603682), N = x(N, n, _, O, C[13], 12, -40341101), O = x(O, N, n, _, C[14], 17, -1502002290), _ = x(_, O, N, n, C[15], 22, 1236535329), n = l(n, _, O, N, C[1], 5, -165796510), N = l(N, n, _, O, C[6], 9, -1069501632), O = l(O, N, n, _, C[11], 14, 643717713), _ = l(_, O, N, n, C[0], 20, -373897302), n = l(n, _, O, N, C[5], 5, -701558691), N = l(N, n, _, O, C[10], 9, 38016083), O = l(O, N, n, _, C[15], 14, -660478335), _ = l(_, O, N, n, C[4], 20, -405537848), n = l(n, _, O, N, C[9], 5, 568446438), N = l(N, n, _, O, C[14], 9, -1019803690), O = l(O, N, n, _, C[3], 14, -187363961), _ = l(_, O, N, n, C[8], 20, 1163531501), n = l(n, _, O, N, C[13], 5, -1444681467), N = l(N, n, _, O, C[2], 9, -51403784), O = l(O, N, n, _, C[7], 14, 1735328473), _ = l(_, O, N, n, C[12], 20, -1926607734), n = a(n, _, O, N, C[5], 4, -378558), N = a(N, n, _, O, C[8], 11, -2022574463), O = a(O, N, n, _, C[11], 16, 1839030562), _ = a(_, O, N, n, C[14], 23, -35309556), n = a(n, _, O, N, C[1], 4, -1530992060), N = a(N, n, _, O, C[4], 11, 1272893353), O = a(O, N, n, _, C[7], 16, -155497632), _ = a(_, O, N, n, C[10], 23, -1094730640), n = a(n, _, O, N, C[13], 4, 681279174), N = a(N, n, _, O, C[0], 11, -358537222), O = a(O, N, n, _, C[3], 16, -722521979), _ = a(_, O, N, n, C[6], 23, 76029189), n = a(n, _, O, N, C[9], 4, -640364487), N = a(N, n, _, O, C[12], 11, -421815835), O = a(O, N, n, _, C[15], 16, 530742520), _ = a(_, O, N, n, C[2], 23, -995338651), n = c(n, _, O, N, C[0], 6, -198630844), N = c(N, n, _, O, C[7], 10, 1126891415), O = c(O, N, n, _, C[14], 15, -1416354905), _ = c(_, O, N, n, C[5], 21, -57434055), n = c(n, _, O, N, C[12], 6, 1700485571), N = c(N, n, _, O, C[3], 10, -1894986606), O = c(O, N, n, _, C[10], 15, -1051523), _ = c(_, O, N, n, C[1], 21, -2054922799), n = c(n, _, O, N, C[8], 6, 1873313359), N = c(N, n, _, O, C[15], 10, -30611744), O = c(O, N, n, _, C[6], 15, -1560198380), _ = c(_, O, N, n, C[13], 21, 1309151649), n = c(n, _, O, N, C[4], 6, -145523070), N = c(N, n, _, O, C[11], 10, -1120210379), O = c(O, N, n, _, C[2], 15, 718787259), _ = c(_, O, N, n, C[9], 21, -343485551), k[0] = A(n, k[0]), k[1] = A(_, k[1]), k[2] = A(O, k[2]), k[3] = A(N, k[3]);
    }, o = function(k) {
      var C = [], n;
      for (n = 0; n < 64; n += 4)
        C[n >> 2] = k.charCodeAt(n) + (k.charCodeAt(n + 1) << 8) + (k.charCodeAt(n + 2) << 16) + (k.charCodeAt(n + 3) << 24);
      return C;
    }, f = function(k) {
      var C = [], n;
      for (n = 0; n < 64; n += 4)
        C[n >> 2] = k[n] + (k[n + 1] << 8) + (k[n + 2] << 16) + (k[n + 3] << 24);
      return C;
    }, d = function(k) {
      var C = k.length, n = [1732584193, -271733879, -1732584194, 271733878], _, O, N, le, Oe, X;
      for (_ = 64; _ <= C; _ += 64)
        p(n, o(k.substring(_ - 64, _)));
      for (k = k.substring(_ - 64), O = k.length, N = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], _ = 0; _ < O; _ += 1)
        N[_ >> 2] |= k.charCodeAt(_) << (_ % 4 << 3);
      if (N[_ >> 2] |= 128 << (_ % 4 << 3), _ > 55)
        for (p(n, N), _ = 0; _ < 16; _ += 1)
          N[_] = 0;
      return le = C * 8, le = le.toString(16).match(/(.*?)(.{0,8})$/), Oe = parseInt(le[2], 16), X = parseInt(le[1], 16) || 0, N[14] = Oe, N[15] = X, p(n, N), n;
    }, g = function(k) {
      var C = k.length, n = [1732584193, -271733879, -1732584194, 271733878], _, O, N, le, Oe, X;
      for (_ = 64; _ <= C; _ += 64)
        p(n, f(k.subarray(_ - 64, _)));
      for (k = _ - 64 < C ? k.subarray(_ - 64) : new Uint8Array(0), O = k.length, N = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], _ = 0; _ < O; _ += 1)
        N[_ >> 2] |= k[_] << (_ % 4 << 3);
      if (N[_ >> 2] |= 128 << (_ % 4 << 3), _ > 55)
        for (p(n, N), _ = 0; _ < 16; _ += 1)
          N[_] = 0;
      return le = C * 8, le = le.toString(16).match(/(.*?)(.{0,8})$/), Oe = parseInt(le[2], 16), X = parseInt(le[1], 16) || 0, N[14] = Oe, N[15] = X, p(n, N), n;
    }, w = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"], D = function(k) {
      var C = "", n;
      for (n = 0; n < 4; n += 1)
        C += w[k >> n * 8 + 4 & 15] + w[k >> n * 8 & 15];
      return C;
    }, P = function(k) {
      var C;
      for (C = 0; C < k.length; C += 1)
        k[C] = D(k[C]);
      return k.join("");
    }, Y = function(k) {
      return P(d(k));
    }, Q = function() {
      this.reset();
    };
    return Y("hello") !== "5d41402abc4b2a76b9719d911017c592" && (A = function(k, C) {
      var n = (k & 65535) + (C & 65535), _ = (k >> 16) + (C >> 16) + (n >> 16);
      return _ << 16 | n & 65535;
    }), Q.prototype.append = function(k) {
      return /[\u0080-\uFFFF]/.test(k) && (k = unescape(encodeURIComponent(k))), this.appendBinary(k), this;
    }, Q.prototype.appendBinary = function(k) {
      this._buff += k, this._length += k.length;
      var C = this._buff.length, n;
      for (n = 64; n <= C; n += 64)
        p(this._state, o(this._buff.substring(n - 64, n)));
      return this._buff = this._buff.substr(n - 64), this;
    }, Q.prototype.end = function(k) {
      var C = this._buff, n = C.length, _, O = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], N;
      for (_ = 0; _ < n; _ += 1)
        O[_ >> 2] |= C.charCodeAt(_) << (_ % 4 << 3);
      return this._finish(O, n), N = k ? this._state : P(this._state), this.reset(), N;
    }, Q.prototype._finish = function(k, C) {
      var n = C, _, O, N;
      if (k[n >> 2] |= 128 << (n % 4 << 3), n > 55)
        for (p(this._state, k), n = 0; n < 16; n += 1)
          k[n] = 0;
      _ = this._length * 8, _ = _.toString(16).match(/(.*?)(.{0,8})$/), O = parseInt(_[2], 16), N = parseInt(_[1], 16) || 0, k[14] = O, k[15] = N, p(this._state, k);
    }, Q.prototype.reset = function() {
      return this._buff = "", this._length = 0, this._state = [1732584193, -271733879, -1732584194, 271733878], this;
    }, Q.prototype.destroy = function() {
      delete this._state, delete this._buff, delete this._length;
    }, Q.hash = function(k, C) {
      /[\u0080-\uFFFF]/.test(k) && (k = unescape(encodeURIComponent(k)));
      var n = d(k);
      return C ? n : P(n);
    }, Q.hashBinary = function(k, C) {
      var n = d(k);
      return C ? n : P(n);
    }, Q.ArrayBuffer = function() {
      this.reset();
    }, Q.ArrayBuffer.prototype.append = function(k) {
      var C = this._concatArrayBuffer(this._buff, k), n = C.length, _;
      for (this._length += k.byteLength, _ = 64; _ <= n; _ += 64)
        p(this._state, f(C.subarray(_ - 64, _)));
      return this._buff = _ - 64 < n ? C.subarray(_ - 64) : new Uint8Array(0), this;
    }, Q.ArrayBuffer.prototype.end = function(k) {
      var C = this._buff, n = C.length, _ = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], O, N;
      for (O = 0; O < n; O += 1)
        _[O >> 2] |= C[O] << (O % 4 << 3);
      return this._finish(_, n), N = k ? this._state : P(this._state), this.reset(), N;
    }, Q.ArrayBuffer.prototype._finish = Q.prototype._finish, Q.ArrayBuffer.prototype.reset = function() {
      return this._buff = new Uint8Array(0), this._length = 0, this._state = [1732584193, -271733879, -1732584194, 271733878], this;
    }, Q.ArrayBuffer.prototype.destroy = Q.prototype.destroy, Q.ArrayBuffer.prototype._concatArrayBuffer = function(k, C) {
      var n = k.length, _ = new Uint8Array(n + C.byteLength);
      return _.set(k), _.set(new Uint8Array(C), n), _;
    }, Q.ArrayBuffer.hash = function(k, C) {
      var n = g(new Uint8Array(k));
      return C ? n : P(n);
    }, S.register("Md5", {
      init: function() {
      },
      loadFromBlob: function(k) {
        var C = k.getSource(), n = 2 * 1024 * 1024, _ = Math.ceil(C.size / n), O = 0, N = this.owner, le = new Q.ArrayBuffer(), Oe = this, X = C.mozSlice || C.webkitSlice || C.slice, Re, Pe;
        Pe = new FileReader(), Re = function() {
          var ft, ke;
          ft = O * n, ke = Math.min(ft + n, C.size), Pe.onload = function(ct) {
            le.append(ct.target.result), N.trigger("progress", {
              total: k.size,
              loaded: ke
            });
          }, Pe.onloadend = function() {
            Pe.onloadend = Pe.onload = null, ++O < _ ? setTimeout(Re, 1) : setTimeout(function() {
              N.trigger("load"), Oe.result = le.end(), Re = k = C = le = null, N.trigger("complete");
            }, 50);
          }, Pe.readAsArrayBuffer(X.call(C, ft, ke));
        }, Re();
      },
      getResult: function() {
        return this.result;
      }
    });
  }), M("runtime/flash/runtime", [
    "base",
    "runtime/runtime",
    "runtime/compbase"
  ], function(S, A, E) {
    var x = S.$, l = "flash", a = {};
    function c() {
      var o;
      try {
        o = navigator.plugins["Shockwave Flash"], o = o.description;
      } catch (f) {
        try {
          o = new ActiveXObject("ShockwaveFlash.ShockwaveFlash").GetVariable("$version");
        } catch (d) {
          o = "0.0";
        }
      }
      return o = o.match(/\d+/g), parseFloat(o[0] + "." + o[1], 10);
    }
    function p() {
      var o = {}, f = {}, d = this.destroy, g = this, w = S.guid("webuploader_");
      A.apply(g, arguments), g.type = l, g.exec = function(P, Y) {
        var Q = this, k = Q.uid, C = S.slice(arguments, 2), n;
        return f[k] = Q, a[P] && (o[k] || (o[k] = new a[P](Q, g)), n = o[k], n[Y]) ? n[Y].apply(n, C) : g.flashExec.apply(Q, arguments);
      };
      function D(P, Y) {
        var Q = P.type || P, k, C;
        k = Q.split("::"), C = k[0], Q = k[1], Q === "Ready" && C === g.uid ? g.trigger("ready") : f[C] && f[C].trigger(Q.toLowerCase(), P, Y);
      }
      ve[w] = function() {
        var P = arguments;
        setTimeout(function() {
          D.apply(null, P);
        }, 1);
      }, this.jsreciver = w, this.destroy = function() {
        return d && d.apply(this, arguments);
      }, this.flashExec = function(P, Y) {
        var Q = g.getFlash(), k = S.slice(arguments, 2);
        return Q.exec(this.uid, P, Y, k);
      };
    }
    return S.inherits(A, {
      constructor: p,
      init: function() {
        var o = this.getContainer(), f = this.options, d;
        o.css({
          position: "absolute",
          top: "-8px",
          left: "-8px",
          width: "9px",
          height: "9px",
          overflow: "hidden"
        }), d = '<object id="' + this.uid + '" type="application/x-shockwave-flash" data="' + f.swf + '" ', S.browser.ie && (d += 'classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" '), d += 'width="100%" height="100%" style="outline:0"><param name="movie" value="' + f.swf + '" /><param name="flashvars" value="uid=' + this.uid + "&jsreciver=" + this.jsreciver + '" /><param name="wmode" value="transparent" /><param name="allowscriptaccess" value="always" /></object>', o.html(d);
      },
      getFlash: function() {
        return this._flash ? this._flash : (this._flash = x("#" + this.uid).get(0), this._flash);
      }
    }), p.register = function(o, f) {
      return f = a[o] = S.inherits(E, x.extend({
        // @todo fix this later
        flashExec: function() {
          var d = this.owner, g = this.getRuntime();
          return g.flashExec.apply(d, arguments);
        }
      }, f)), f;
    }, c() >= 11.4 && A.addRuntime(l, p), p;
  }), M("runtime/flash/filepicker", [
    "base",
    "runtime/flash/runtime"
  ], function(S, A) {
    var E = S.$;
    return A.register("FilePicker", {
      init: function(x) {
        var l = E.extend({}, x), a, c;
        for (a = l.accept && l.accept.length, c = 0; c < a; c++)
          l.accept[c].title || (l.accept[c].title = "Files");
        delete l.button, delete l.id, delete l.container, this.flashExec("FilePicker", "init", l);
      },
      destroy: function() {
        this.flashExec("FilePicker", "destroy");
      }
    });
  }), M("runtime/flash/image", [
    "runtime/flash/runtime"
  ], function(S) {
    return S.register("Image", {
      // init: function( options ) {
      //     var owner = this.owner;
      //     this.flashExec( 'Image', 'init', options );
      //     owner.on( 'load', function() {
      //         debugger;
      //     });
      // },
      loadFromBlob: function(A) {
        var E = this.owner;
        E.info() && this.flashExec("Image", "info", E.info()), E.meta() && this.flashExec("Image", "meta", E.meta()), this.flashExec("Image", "loadFromBlob", A.uid);
      }
    });
  }), M("runtime/flash/transport", [
    "base",
    "runtime/flash/runtime",
    "runtime/client"
  ], function(S, A, E) {
    var x = S.$;
    return A.register("Transport", {
      init: function() {
        this._status = 0, this._response = null, this._responseJson = null;
      },
      send: function() {
        var l = this.owner, a = this.options, c = this._initAjax(), p = l._blob, o = a.server, f;
        c.connectRuntime(p.ruid), a.sendAsBinary ? (o += (/\?/.test(o) ? "&" : "?") + x.param(l._formData), f = p.uid) : (x.each(l._formData, function(d, g) {
          c.exec("append", d, g);
        }), c.exec(
          "appendBlob",
          a.fileVal,
          p.uid,
          a.filename || l._formData.name || ""
        )), this._setRequestHeader(c, a.headers), c.exec("send", {
          method: a.method,
          url: o,
          forceURLStream: a.forceURLStream,
          mimeType: "application/octet-stream"
        }, f);
      },
      getStatus: function() {
        return this._status;
      },
      getResponse: function() {
        return this._response || "";
      },
      getResponseAsJson: function() {
        return this._responseJson;
      },
      abort: function() {
        var l = this._xhr;
        l && (l.exec("abort"), l.destroy(), this._xhr = l = null);
      },
      destroy: function() {
        this.abort();
      },
      _initAjax: function() {
        var l = this, a = new E("XMLHttpRequest");
        return a.on("uploadprogress progress", function(c) {
          var p = c.loaded / c.total;
          return p = Math.min(1, Math.max(0, p)), l.trigger("progress", p);
        }), a.on("load", function() {
          var c = a.exec("getStatus"), p = !1, o = "", f;
          return a.off(), l._xhr = null, c >= 200 && c < 300 ? p = !0 : c >= 500 && c < 600 ? (p = !0, o = "server") : o = "http", p && (l._response = a.exec("getResponse"), l._response = decodeURIComponent(l._response), f = function(d) {
            try {
              return ve.JSON && ve.JSON.parse ? JSON.parse(d) : new Function("return " + d).call();
            } catch (g) {
              return {};
            }
          }, l._responseJson = l._response ? f(l._response) : {}), a.destroy(), a = null, o ? l.trigger("error", o) : l.trigger("load");
        }), a.on("error", function() {
          a.off(), l._xhr = null, l.trigger("error", "http");
        }), l._xhr = a, a;
      },
      _setRequestHeader: function(l, a) {
        x.each(a, function(c, p) {
          l.exec("setRequestHeader", c, p);
        });
      }
    });
  }), M("runtime/flash/blob", [
    "runtime/flash/runtime",
    "lib/blob"
  ], function(S, A) {
    return S.register("Blob", {
      slice: function(E, x) {
        var l = this.flashExec("Blob", "slice", E, x);
        return new A(this.getRuid(), l);
      }
    });
  }), M("runtime/flash/md5", [
    "runtime/flash/runtime"
  ], function(S) {
    return S.register("Md5", {
      init: function() {
      },
      loadFromBlob: function(A) {
        return this.flashExec("Md5", "loadFromBlob", A.uid);
      }
    });
  }), M("preset/all", [
    "base",
    // widgets
    "widgets/filednd",
    "widgets/filepaste",
    "widgets/filepicker",
    "widgets/image",
    "widgets/queue",
    "widgets/runtime",
    "widgets/upload",
    "widgets/validator",
    "widgets/md5",
    // runtimes
    // html5
    "runtime/html5/blob",
    "runtime/html5/dnd",
    "runtime/html5/filepaste",
    "runtime/html5/filepicker",
    "runtime/html5/imagemeta/exif",
    "runtime/html5/androidpatch",
    "runtime/html5/image",
    "runtime/html5/transport",
    "runtime/html5/md5",
    // flash
    "runtime/flash/filepicker",
    "runtime/flash/image",
    "runtime/flash/transport",
    "runtime/flash/blob",
    "runtime/flash/md5"
  ], function(S) {
    return S;
  }), M("widgets/log", [
    "base",
    "uploader",
    "widgets/widget"
  ], function(S, A) {
    var E = S.$, x = " http://static.tieba.baidu.com/tb/pms/img/st.gif??", l = (location.hostname || location.host || "protected").toLowerCase(), a = l && /baidu/i.exec(l), c;
    if (!a)
      return;
    c = {
      dv: 3,
      master: "webuploader",
      online: /test/.exec(l) ? 0 : 1,
      module: "",
      product: l,
      type: 0
    };
    function p(o) {
      var f = E.extend({}, c, o), d = x.replace(/^(.*)\?/, "$1" + E.param(f)), g = new Image();
      g.src = d;
    }
    return A.register({
      name: "log",
      init: function() {
        var o = this.owner, f = 0, d = 0;
        o.on("error", function(g) {
          p({
            type: 2,
            c_error_code: g
          });
        }).on("uploadError", function(g, w) {
          p({
            type: 2,
            c_error_code: "UPLOAD_ERROR",
            c_reason: "" + w
          });
        }).on("uploadComplete", function(g) {
          f++, d += g.size;
        }).on("uploadFinished", function() {
          p({
            c_count: f,
            c_size: d
          }), f = d = 0;
        }), p({
          c_usage: 1
        });
      }
    });
  }), M("webuploader", [
    "preset/all",
    "widgets/log"
  ], function(S) {
    return S;
  });
  var _e = Be;
  return _e("webuploader");
});
const Qr = /* @__PURE__ */ Ur(Wr);
export {
  Qr as W
};
