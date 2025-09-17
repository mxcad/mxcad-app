import {
  __commonJS
} from "./chunk-FM7WUVZV.js";

// node_modules/jquery/dist/jquery.js
var require_jquery = __commonJS({
  "node_modules/jquery/dist/jquery.js"(exports, module) {
    (function(global, factory) {
      "use strict";
      if (typeof module === "object" && typeof module.exports === "object") {
        module.exports = global.document ? factory(global, true) : function(w) {
          if (!w.document) {
            throw new Error("jQuery requires a window with a document");
          }
          return factory(w);
        };
      } else {
        factory(global);
      }
    })(typeof window !== "undefined" ? window : exports, function(window2, noGlobal) {
      "use strict";
      var arr = [];
      var getProto = Object.getPrototypeOf;
      var slice = arr.slice;
      var flat = arr.flat ? function(array) {
        return arr.flat.call(array);
      } : function(array) {
        return arr.concat.apply([], array);
      };
      var push = arr.push;
      var indexOf = arr.indexOf;
      var class2type = {};
      var toString = class2type.toString;
      var hasOwn = class2type.hasOwnProperty;
      var fnToString = hasOwn.toString;
      var ObjectFunctionString = fnToString.call(Object);
      var support = {};
      var isFunction = function isFunction2(obj) {
        return typeof obj === "function" && typeof obj.nodeType !== "number" && typeof obj.item !== "function";
      };
      var isWindow = function isWindow2(obj) {
        return obj != null && obj === obj.window;
      };
      var document2 = window2.document;
      var preservedScriptAttributes = {
        type: true,
        src: true,
        nonce: true,
        noModule: true
      };
      function DOMEval(code, node, doc) {
        doc = doc || document2;
        var i, val, script = doc.createElement("script");
        script.text = code;
        if (node) {
          for (i in preservedScriptAttributes) {
            val = node[i] || node.getAttribute && node.getAttribute(i);
            if (val) {
              script.setAttribute(i, val);
            }
          }
        }
        doc.head.appendChild(script).parentNode.removeChild(script);
      }
      function toType(obj) {
        if (obj == null) {
          return obj + "";
        }
        return typeof obj === "object" || typeof obj === "function" ? class2type[toString.call(obj)] || "object" : typeof obj;
      }
      var version = "3.7.1", rhtmlSuffix = /HTML$/i, jQuery = function(selector, context) {
        return new jQuery.fn.init(selector, context);
      };
      jQuery.fn = jQuery.prototype = {
        // The current version of jQuery being used
        jquery: version,
        constructor: jQuery,
        // The default length of a jQuery object is 0
        length: 0,
        toArray: function() {
          return slice.call(this);
        },
        // Get the Nth element in the matched element set OR
        // Get the whole matched element set as a clean array
        get: function(num) {
          if (num == null) {
            return slice.call(this);
          }
          return num < 0 ? this[num + this.length] : this[num];
        },
        // Take an array of elements and push it onto the stack
        // (returning the new matched element set)
        pushStack: function(elems) {
          var ret = jQuery.merge(this.constructor(), elems);
          ret.prevObject = this;
          return ret;
        },
        // Execute a callback for every element in the matched set.
        each: function(callback) {
          return jQuery.each(this, callback);
        },
        map: function(callback) {
          return this.pushStack(jQuery.map(this, function(elem, i) {
            return callback.call(elem, i, elem);
          }));
        },
        slice: function() {
          return this.pushStack(slice.apply(this, arguments));
        },
        first: function() {
          return this.eq(0);
        },
        last: function() {
          return this.eq(-1);
        },
        even: function() {
          return this.pushStack(jQuery.grep(this, function(_elem, i) {
            return (i + 1) % 2;
          }));
        },
        odd: function() {
          return this.pushStack(jQuery.grep(this, function(_elem, i) {
            return i % 2;
          }));
        },
        eq: function(i) {
          var len = this.length, j = +i + (i < 0 ? len : 0);
          return this.pushStack(j >= 0 && j < len ? [this[j]] : []);
        },
        end: function() {
          return this.prevObject || this.constructor();
        },
        // For internal use only.
        // Behaves like an Array's method, not like a jQuery method.
        push,
        sort: arr.sort,
        splice: arr.splice
      };
      jQuery.extend = jQuery.fn.extend = function() {
        var options, name, src, copy, copyIsArray, clone, target = arguments[0] || {}, i = 1, length = arguments.length, deep = false;
        if (typeof target === "boolean") {
          deep = target;
          target = arguments[i] || {};
          i++;
        }
        if (typeof target !== "object" && !isFunction(target)) {
          target = {};
        }
        if (i === length) {
          target = this;
          i--;
        }
        for (; i < length; i++) {
          if ((options = arguments[i]) != null) {
            for (name in options) {
              copy = options[name];
              if (name === "__proto__" || target === copy) {
                continue;
              }
              if (deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = Array.isArray(copy)))) {
                src = target[name];
                if (copyIsArray && !Array.isArray(src)) {
                  clone = [];
                } else if (!copyIsArray && !jQuery.isPlainObject(src)) {
                  clone = {};
                } else {
                  clone = src;
                }
                copyIsArray = false;
                target[name] = jQuery.extend(deep, clone, copy);
              } else if (copy !== void 0) {
                target[name] = copy;
              }
            }
          }
        }
        return target;
      };
      jQuery.extend({
        // Unique for each copy of jQuery on the page
        expando: "jQuery" + (version + Math.random()).replace(/\D/g, ""),
        // Assume jQuery is ready without the ready module
        isReady: true,
        error: function(msg) {
          throw new Error(msg);
        },
        noop: function() {
        },
        isPlainObject: function(obj) {
          var proto, Ctor;
          if (!obj || toString.call(obj) !== "[object Object]") {
            return false;
          }
          proto = getProto(obj);
          if (!proto) {
            return true;
          }
          Ctor = hasOwn.call(proto, "constructor") && proto.constructor;
          return typeof Ctor === "function" && fnToString.call(Ctor) === ObjectFunctionString;
        },
        isEmptyObject: function(obj) {
          var name;
          for (name in obj) {
            return false;
          }
          return true;
        },
        // Evaluates a script in a provided context; falls back to the global one
        // if not specified.
        globalEval: function(code, options, doc) {
          DOMEval(code, { nonce: options && options.nonce }, doc);
        },
        each: function(obj, callback) {
          var length, i = 0;
          if (isArrayLike(obj)) {
            length = obj.length;
            for (; i < length; i++) {
              if (callback.call(obj[i], i, obj[i]) === false) {
                break;
              }
            }
          } else {
            for (i in obj) {
              if (callback.call(obj[i], i, obj[i]) === false) {
                break;
              }
            }
          }
          return obj;
        },
        // Retrieve the text value of an array of DOM nodes
        text: function(elem) {
          var node, ret = "", i = 0, nodeType = elem.nodeType;
          if (!nodeType) {
            while (node = elem[i++]) {
              ret += jQuery.text(node);
            }
          }
          if (nodeType === 1 || nodeType === 11) {
            return elem.textContent;
          }
          if (nodeType === 9) {
            return elem.documentElement.textContent;
          }
          if (nodeType === 3 || nodeType === 4) {
            return elem.nodeValue;
          }
          return ret;
        },
        // results is for internal usage only
        makeArray: function(arr2, results) {
          var ret = results || [];
          if (arr2 != null) {
            if (isArrayLike(Object(arr2))) {
              jQuery.merge(
                ret,
                typeof arr2 === "string" ? [arr2] : arr2
              );
            } else {
              push.call(ret, arr2);
            }
          }
          return ret;
        },
        inArray: function(elem, arr2, i) {
          return arr2 == null ? -1 : indexOf.call(arr2, elem, i);
        },
        isXMLDoc: function(elem) {
          var namespace = elem && elem.namespaceURI, docElem = elem && (elem.ownerDocument || elem).documentElement;
          return !rhtmlSuffix.test(namespace || docElem && docElem.nodeName || "HTML");
        },
        // Support: Android <=4.0 only, PhantomJS 1 only
        // push.apply(_, arraylike) throws on ancient WebKit
        merge: function(first, second) {
          var len = +second.length, j = 0, i = first.length;
          for (; j < len; j++) {
            first[i++] = second[j];
          }
          first.length = i;
          return first;
        },
        grep: function(elems, callback, invert) {
          var callbackInverse, matches = [], i = 0, length = elems.length, callbackExpect = !invert;
          for (; i < length; i++) {
            callbackInverse = !callback(elems[i], i);
            if (callbackInverse !== callbackExpect) {
              matches.push(elems[i]);
            }
          }
          return matches;
        },
        // arg is for internal usage only
        map: function(elems, callback, arg) {
          var length, value, i = 0, ret = [];
          if (isArrayLike(elems)) {
            length = elems.length;
            for (; i < length; i++) {
              value = callback(elems[i], i, arg);
              if (value != null) {
                ret.push(value);
              }
            }
          } else {
            for (i in elems) {
              value = callback(elems[i], i, arg);
              if (value != null) {
                ret.push(value);
              }
            }
          }
          return flat(ret);
        },
        // A global GUID counter for objects
        guid: 1,
        // jQuery.support is not used in Core but other projects attach their
        // properties to it so it needs to exist.
        support
      });
      if (typeof Symbol === "function") {
        jQuery.fn[Symbol.iterator] = arr[Symbol.iterator];
      }
      jQuery.each(
        "Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),
        function(_i, name) {
          class2type["[object " + name + "]"] = name.toLowerCase();
        }
      );
      function isArrayLike(obj) {
        var length = !!obj && "length" in obj && obj.length, type = toType(obj);
        if (isFunction(obj) || isWindow(obj)) {
          return false;
        }
        return type === "array" || length === 0 || typeof length === "number" && length > 0 && length - 1 in obj;
      }
      function nodeName(elem, name) {
        return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
      }
      var pop = arr.pop;
      var sort = arr.sort;
      var splice = arr.splice;
      var whitespace = "[\\x20\\t\\r\\n\\f]";
      var rtrimCSS = new RegExp(
        "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$",
        "g"
      );
      jQuery.contains = function(a, b) {
        var bup = b && b.parentNode;
        return a === bup || !!(bup && bup.nodeType === 1 && // Support: IE 9 - 11+
        // IE doesn't have `contains` on SVG.
        (a.contains ? a.contains(bup) : a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16));
      };
      var rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;
      function fcssescape(ch, asCodePoint) {
        if (asCodePoint) {
          if (ch === "\0") {
            return "�";
          }
          return ch.slice(0, -1) + "\\" + ch.charCodeAt(ch.length - 1).toString(16) + " ";
        }
        return "\\" + ch;
      }
      jQuery.escapeSelector = function(sel) {
        return (sel + "").replace(rcssescape, fcssescape);
      };
      var preferredDoc = document2, pushNative = push;
      (function() {
        var i, Expr, outermostContext, sortInput, hasDuplicate, push2 = pushNative, document3, documentElement2, documentIsHTML, rbuggyQSA, matches, expando = jQuery.expando, dirruns = 0, done = 0, classCache = createCache(), tokenCache = createCache(), compilerCache = createCache(), nonnativeSelectorCache = createCache(), sortOrder = function(a, b) {
          if (a === b) {
            hasDuplicate = true;
          }
          return 0;
        }, booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", identifier = "(?:\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+", attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace + // Operator (capture 2)
        "*([*^$|!~]?=)" + whitespace + // "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
        `*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(` + identifier + "))|)" + whitespace + "*\\]", pseudos = ":(" + identifier + `)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|` + attributes + ")*)|.*)\\)|)", rwhitespace = new RegExp(whitespace + "+", "g"), rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*"), rleadingCombinator = new RegExp("^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*"), rdescend = new RegExp(whitespace + "|>"), rpseudo = new RegExp(pseudos), ridentifier = new RegExp("^" + identifier + "$"), matchExpr = {
          ID: new RegExp("^#(" + identifier + ")"),
          CLASS: new RegExp("^\\.(" + identifier + ")"),
          TAG: new RegExp("^(" + identifier + "|[*])"),
          ATTR: new RegExp("^" + attributes),
          PSEUDO: new RegExp("^" + pseudos),
          CHILD: new RegExp(
            "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace + "*(\\d+)|))" + whitespace + "*\\)|)",
            "i"
          ),
          bool: new RegExp("^(?:" + booleans + ")$", "i"),
          // For use in libraries implementing .is()
          // We use this for POS matching in `select`
          needsContext: new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i")
        }, rinputs = /^(?:input|select|textarea|button)$/i, rheader = /^h\d$/i, rquickExpr2 = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, rsibling = /[+~]/, runescape = new RegExp("\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\([^\\r\\n\\f])", "g"), funescape = function(escape, nonHex) {
          var high = "0x" + escape.slice(1) - 65536;
          if (nonHex) {
            return nonHex;
          }
          return high < 0 ? String.fromCharCode(high + 65536) : String.fromCharCode(high >> 10 | 55296, high & 1023 | 56320);
        }, unloadHandler = function() {
          setDocument();
        }, inDisabledFieldset = addCombinator(
          function(elem) {
            return elem.disabled === true && nodeName(elem, "fieldset");
          },
          { dir: "parentNode", next: "legend" }
        );
        function safeActiveElement() {
          try {
            return document3.activeElement;
          } catch (err) {
          }
        }
        try {
          push2.apply(
            arr = slice.call(preferredDoc.childNodes),
            preferredDoc.childNodes
          );
          arr[preferredDoc.childNodes.length].nodeType;
        } catch (e) {
          push2 = {
            apply: function(target, els) {
              pushNative.apply(target, slice.call(els));
            },
            call: function(target) {
              pushNative.apply(target, slice.call(arguments, 1));
            }
          };
        }
        function find(selector, context, results, seed) {
          var m, i2, elem, nid, match, groups, newSelector, newContext = context && context.ownerDocument, nodeType = context ? context.nodeType : 9;
          results = results || [];
          if (typeof selector !== "string" || !selector || nodeType !== 1 && nodeType !== 9 && nodeType !== 11) {
            return results;
          }
          if (!seed) {
            setDocument(context);
            context = context || document3;
            if (documentIsHTML) {
              if (nodeType !== 11 && (match = rquickExpr2.exec(selector))) {
                if (m = match[1]) {
                  if (nodeType === 9) {
                    if (elem = context.getElementById(m)) {
                      if (elem.id === m) {
                        push2.call(results, elem);
                        return results;
                      }
                    } else {
                      return results;
                    }
                  } else {
                    if (newContext && (elem = newContext.getElementById(m)) && find.contains(context, elem) && elem.id === m) {
                      push2.call(results, elem);
                      return results;
                    }
                  }
                } else if (match[2]) {
                  push2.apply(results, context.getElementsByTagName(selector));
                  return results;
                } else if ((m = match[3]) && context.getElementsByClassName) {
                  push2.apply(results, context.getElementsByClassName(m));
                  return results;
                }
              }
              if (!nonnativeSelectorCache[selector + " "] && (!rbuggyQSA || !rbuggyQSA.test(selector))) {
                newSelector = selector;
                newContext = context;
                if (nodeType === 1 && (rdescend.test(selector) || rleadingCombinator.test(selector))) {
                  newContext = rsibling.test(selector) && testContext(context.parentNode) || context;
                  if (newContext != context || !support.scope) {
                    if (nid = context.getAttribute("id")) {
                      nid = jQuery.escapeSelector(nid);
                    } else {
                      context.setAttribute("id", nid = expando);
                    }
                  }
                  groups = tokenize(selector);
                  i2 = groups.length;
                  while (i2--) {
                    groups[i2] = (nid ? "#" + nid : ":scope") + " " + toSelector(groups[i2]);
                  }
                  newSelector = groups.join(",");
                }
                try {
                  push2.apply(
                    results,
                    newContext.querySelectorAll(newSelector)
                  );
                  return results;
                } catch (qsaError) {
                  nonnativeSelectorCache(selector, true);
                } finally {
                  if (nid === expando) {
                    context.removeAttribute("id");
                  }
                }
              }
            }
          }
          return select(selector.replace(rtrimCSS, "$1"), context, results, seed);
        }
        function createCache() {
          var keys = [];
          function cache(key, value) {
            if (keys.push(key + " ") > Expr.cacheLength) {
              delete cache[keys.shift()];
            }
            return cache[key + " "] = value;
          }
          return cache;
        }
        function markFunction(fn) {
          fn[expando] = true;
          return fn;
        }
        function assert(fn) {
          var el = document3.createElement("fieldset");
          try {
            return !!fn(el);
          } catch (e) {
            return false;
          } finally {
            if (el.parentNode) {
              el.parentNode.removeChild(el);
            }
            el = null;
          }
        }
        function createInputPseudo(type) {
          return function(elem) {
            return nodeName(elem, "input") && elem.type === type;
          };
        }
        function createButtonPseudo(type) {
          return function(elem) {
            return (nodeName(elem, "input") || nodeName(elem, "button")) && elem.type === type;
          };
        }
        function createDisabledPseudo(disabled) {
          return function(elem) {
            if ("form" in elem) {
              if (elem.parentNode && elem.disabled === false) {
                if ("label" in elem) {
                  if ("label" in elem.parentNode) {
                    return elem.parentNode.disabled === disabled;
                  } else {
                    return elem.disabled === disabled;
                  }
                }
                return elem.isDisabled === disabled || // Where there is no isDisabled, check manually
                elem.isDisabled !== !disabled && inDisabledFieldset(elem) === disabled;
              }
              return elem.disabled === disabled;
            } else if ("label" in elem) {
              return elem.disabled === disabled;
            }
            return false;
          };
        }
        function createPositionalPseudo(fn) {
          return markFunction(function(argument) {
            argument = +argument;
            return markFunction(function(seed, matches2) {
              var j, matchIndexes = fn([], seed.length, argument), i2 = matchIndexes.length;
              while (i2--) {
                if (seed[j = matchIndexes[i2]]) {
                  seed[j] = !(matches2[j] = seed[j]);
                }
              }
            });
          });
        }
        function testContext(context) {
          return context && typeof context.getElementsByTagName !== "undefined" && context;
        }
        function setDocument(node) {
          var subWindow, doc = node ? node.ownerDocument || node : preferredDoc;
          if (doc == document3 || doc.nodeType !== 9 || !doc.documentElement) {
            return document3;
          }
          document3 = doc;
          documentElement2 = document3.documentElement;
          documentIsHTML = !jQuery.isXMLDoc(document3);
          matches = documentElement2.matches || documentElement2.webkitMatchesSelector || documentElement2.msMatchesSelector;
          if (documentElement2.msMatchesSelector && // Support: IE 11+, Edge 17 - 18+
          // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
          // two documents; shallow comparisons work.
          // eslint-disable-next-line eqeqeq
          preferredDoc != document3 && (subWindow = document3.defaultView) && subWindow.top !== subWindow) {
            subWindow.addEventListener("unload", unloadHandler);
          }
          support.getById = assert(function(el) {
            documentElement2.appendChild(el).id = jQuery.expando;
            return !document3.getElementsByName || !document3.getElementsByName(jQuery.expando).length;
          });
          support.disconnectedMatch = assert(function(el) {
            return matches.call(el, "*");
          });
          support.scope = assert(function() {
            return document3.querySelectorAll(":scope");
          });
          support.cssHas = assert(function() {
            try {
              document3.querySelector(":has(*,:jqfake)");
              return false;
            } catch (e) {
              return true;
            }
          });
          if (support.getById) {
            Expr.filter.ID = function(id) {
              var attrId = id.replace(runescape, funescape);
              return function(elem) {
                return elem.getAttribute("id") === attrId;
              };
            };
            Expr.find.ID = function(id, context) {
              if (typeof context.getElementById !== "undefined" && documentIsHTML) {
                var elem = context.getElementById(id);
                return elem ? [elem] : [];
              }
            };
          } else {
            Expr.filter.ID = function(id) {
              var attrId = id.replace(runescape, funescape);
              return function(elem) {
                var node2 = typeof elem.getAttributeNode !== "undefined" && elem.getAttributeNode("id");
                return node2 && node2.value === attrId;
              };
            };
            Expr.find.ID = function(id, context) {
              if (typeof context.getElementById !== "undefined" && documentIsHTML) {
                var node2, i2, elems, elem = context.getElementById(id);
                if (elem) {
                  node2 = elem.getAttributeNode("id");
                  if (node2 && node2.value === id) {
                    return [elem];
                  }
                  elems = context.getElementsByName(id);
                  i2 = 0;
                  while (elem = elems[i2++]) {
                    node2 = elem.getAttributeNode("id");
                    if (node2 && node2.value === id) {
                      return [elem];
                    }
                  }
                }
                return [];
              }
            };
          }
          Expr.find.TAG = function(tag, context) {
            if (typeof context.getElementsByTagName !== "undefined") {
              return context.getElementsByTagName(tag);
            } else {
              return context.querySelectorAll(tag);
            }
          };
          Expr.find.CLASS = function(className, context) {
            if (typeof context.getElementsByClassName !== "undefined" && documentIsHTML) {
              return context.getElementsByClassName(className);
            }
          };
          rbuggyQSA = [];
          assert(function(el) {
            var input;
            documentElement2.appendChild(el).innerHTML = "<a id='" + expando + "' href='' disabled='disabled'></a><select id='" + expando + "-\r\\' disabled='disabled'><option selected=''></option></select>";
            if (!el.querySelectorAll("[selected]").length) {
              rbuggyQSA.push("\\[" + whitespace + "*(?:value|" + booleans + ")");
            }
            if (!el.querySelectorAll("[id~=" + expando + "-]").length) {
              rbuggyQSA.push("~=");
            }
            if (!el.querySelectorAll("a#" + expando + "+*").length) {
              rbuggyQSA.push(".#.+[+~]");
            }
            if (!el.querySelectorAll(":checked").length) {
              rbuggyQSA.push(":checked");
            }
            input = document3.createElement("input");
            input.setAttribute("type", "hidden");
            el.appendChild(input).setAttribute("name", "D");
            documentElement2.appendChild(el).disabled = true;
            if (el.querySelectorAll(":disabled").length !== 2) {
              rbuggyQSA.push(":enabled", ":disabled");
            }
            input = document3.createElement("input");
            input.setAttribute("name", "");
            el.appendChild(input);
            if (!el.querySelectorAll("[name='']").length) {
              rbuggyQSA.push("\\[" + whitespace + "*name" + whitespace + "*=" + whitespace + `*(?:''|"")`);
            }
          });
          if (!support.cssHas) {
            rbuggyQSA.push(":has");
          }
          rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|"));
          sortOrder = function(a, b) {
            if (a === b) {
              hasDuplicate = true;
              return 0;
            }
            var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
            if (compare) {
              return compare;
            }
            compare = (a.ownerDocument || a) == (b.ownerDocument || b) ? a.compareDocumentPosition(b) : (
              // Otherwise we know they are disconnected
              1
            );
            if (compare & 1 || !support.sortDetached && b.compareDocumentPosition(a) === compare) {
              if (a === document3 || a.ownerDocument == preferredDoc && find.contains(preferredDoc, a)) {
                return -1;
              }
              if (b === document3 || b.ownerDocument == preferredDoc && find.contains(preferredDoc, b)) {
                return 1;
              }
              return sortInput ? indexOf.call(sortInput, a) - indexOf.call(sortInput, b) : 0;
            }
            return compare & 4 ? -1 : 1;
          };
          return document3;
        }
        find.matches = function(expr, elements) {
          return find(expr, null, null, elements);
        };
        find.matchesSelector = function(elem, expr) {
          setDocument(elem);
          if (documentIsHTML && !nonnativeSelectorCache[expr + " "] && (!rbuggyQSA || !rbuggyQSA.test(expr))) {
            try {
              var ret = matches.call(elem, expr);
              if (ret || support.disconnectedMatch || // As well, disconnected nodes are said to be in a document
              // fragment in IE 9
              elem.document && elem.document.nodeType !== 11) {
                return ret;
              }
            } catch (e) {
              nonnativeSelectorCache(expr, true);
            }
          }
          return find(expr, document3, null, [elem]).length > 0;
        };
        find.contains = function(context, elem) {
          if ((context.ownerDocument || context) != document3) {
            setDocument(context);
          }
          return jQuery.contains(context, elem);
        };
        find.attr = function(elem, name) {
          if ((elem.ownerDocument || elem) != document3) {
            setDocument(elem);
          }
          var fn = Expr.attrHandle[name.toLowerCase()], val = fn && hasOwn.call(Expr.attrHandle, name.toLowerCase()) ? fn(elem, name, !documentIsHTML) : void 0;
          if (val !== void 0) {
            return val;
          }
          return elem.getAttribute(name);
        };
        find.error = function(msg) {
          throw new Error("Syntax error, unrecognized expression: " + msg);
        };
        jQuery.uniqueSort = function(results) {
          var elem, duplicates = [], j = 0, i2 = 0;
          hasDuplicate = !support.sortStable;
          sortInput = !support.sortStable && slice.call(results, 0);
          sort.call(results, sortOrder);
          if (hasDuplicate) {
            while (elem = results[i2++]) {
              if (elem === results[i2]) {
                j = duplicates.push(i2);
              }
            }
            while (j--) {
              splice.call(results, duplicates[j], 1);
            }
          }
          sortInput = null;
          return results;
        };
        jQuery.fn.uniqueSort = function() {
          return this.pushStack(jQuery.uniqueSort(slice.apply(this)));
        };
        Expr = jQuery.expr = {
          // Can be adjusted by the user
          cacheLength: 50,
          createPseudo: markFunction,
          match: matchExpr,
          attrHandle: {},
          find: {},
          relative: {
            ">": { dir: "parentNode", first: true },
            " ": { dir: "parentNode" },
            "+": { dir: "previousSibling", first: true },
            "~": { dir: "previousSibling" }
          },
          preFilter: {
            ATTR: function(match) {
              match[1] = match[1].replace(runescape, funescape);
              match[3] = (match[3] || match[4] || match[5] || "").replace(runescape, funescape);
              if (match[2] === "~=") {
                match[3] = " " + match[3] + " ";
              }
              return match.slice(0, 4);
            },
            CHILD: function(match) {
              match[1] = match[1].toLowerCase();
              if (match[1].slice(0, 3) === "nth") {
                if (!match[3]) {
                  find.error(match[0]);
                }
                match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * (match[3] === "even" || match[3] === "odd"));
                match[5] = +(match[7] + match[8] || match[3] === "odd");
              } else if (match[3]) {
                find.error(match[0]);
              }
              return match;
            },
            PSEUDO: function(match) {
              var excess, unquoted = !match[6] && match[2];
              if (matchExpr.CHILD.test(match[0])) {
                return null;
              }
              if (match[3]) {
                match[2] = match[4] || match[5] || "";
              } else if (unquoted && rpseudo.test(unquoted) && // Get excess from tokenize (recursively)
              (excess = tokenize(unquoted, true)) && // advance to the next closing parenthesis
              (excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length)) {
                match[0] = match[0].slice(0, excess);
                match[2] = unquoted.slice(0, excess);
              }
              return match.slice(0, 3);
            }
          },
          filter: {
            TAG: function(nodeNameSelector) {
              var expectedNodeName = nodeNameSelector.replace(runescape, funescape).toLowerCase();
              return nodeNameSelector === "*" ? function() {
                return true;
              } : function(elem) {
                return nodeName(elem, expectedNodeName);
              };
            },
            CLASS: function(className) {
              var pattern = classCache[className + " "];
              return pattern || (pattern = new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)")) && classCache(className, function(elem) {
                return pattern.test(
                  typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || ""
                );
              });
            },
            ATTR: function(name, operator, check) {
              return function(elem) {
                var result = find.attr(elem, name);
                if (result == null) {
                  return operator === "!=";
                }
                if (!operator) {
                  return true;
                }
                result += "";
                if (operator === "=") {
                  return result === check;
                }
                if (operator === "!=") {
                  return result !== check;
                }
                if (operator === "^=") {
                  return check && result.indexOf(check) === 0;
                }
                if (operator === "*=") {
                  return check && result.indexOf(check) > -1;
                }
                if (operator === "$=") {
                  return check && result.slice(-check.length) === check;
                }
                if (operator === "~=") {
                  return (" " + result.replace(rwhitespace, " ") + " ").indexOf(check) > -1;
                }
                if (operator === "|=") {
                  return result === check || result.slice(0, check.length + 1) === check + "-";
                }
                return false;
              };
            },
            CHILD: function(type, what, _argument, first, last) {
              var simple = type.slice(0, 3) !== "nth", forward = type.slice(-4) !== "last", ofType = what === "of-type";
              return first === 1 && last === 0 ? (
                // Shortcut for :nth-*(n)
                function(elem) {
                  return !!elem.parentNode;
                }
              ) : function(elem, _context, xml) {
                var cache, outerCache, node, nodeIndex, start, dir2 = simple !== forward ? "nextSibling" : "previousSibling", parent = elem.parentNode, name = ofType && elem.nodeName.toLowerCase(), useCache = !xml && !ofType, diff = false;
                if (parent) {
                  if (simple) {
                    while (dir2) {
                      node = elem;
                      while (node = node[dir2]) {
                        if (ofType ? nodeName(node, name) : node.nodeType === 1) {
                          return false;
                        }
                      }
                      start = dir2 = type === "only" && !start && "nextSibling";
                    }
                    return true;
                  }
                  start = [forward ? parent.firstChild : parent.lastChild];
                  if (forward && useCache) {
                    outerCache = parent[expando] || (parent[expando] = {});
                    cache = outerCache[type] || [];
                    nodeIndex = cache[0] === dirruns && cache[1];
                    diff = nodeIndex && cache[2];
                    node = nodeIndex && parent.childNodes[nodeIndex];
                    while (node = ++nodeIndex && node && node[dir2] || // Fallback to seeking `elem` from the start
                    (diff = nodeIndex = 0) || start.pop()) {
                      if (node.nodeType === 1 && ++diff && node === elem) {
                        outerCache[type] = [dirruns, nodeIndex, diff];
                        break;
                      }
                    }
                  } else {
                    if (useCache) {
                      outerCache = elem[expando] || (elem[expando] = {});
                      cache = outerCache[type] || [];
                      nodeIndex = cache[0] === dirruns && cache[1];
                      diff = nodeIndex;
                    }
                    if (diff === false) {
                      while (node = ++nodeIndex && node && node[dir2] || (diff = nodeIndex = 0) || start.pop()) {
                        if ((ofType ? nodeName(node, name) : node.nodeType === 1) && ++diff) {
                          if (useCache) {
                            outerCache = node[expando] || (node[expando] = {});
                            outerCache[type] = [dirruns, diff];
                          }
                          if (node === elem) {
                            break;
                          }
                        }
                      }
                    }
                  }
                  diff -= last;
                  return diff === first || diff % first === 0 && diff / first >= 0;
                }
              };
            },
            PSEUDO: function(pseudo, argument) {
              var args, fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] || find.error("unsupported pseudo: " + pseudo);
              if (fn[expando]) {
                return fn(argument);
              }
              if (fn.length > 1) {
                args = [pseudo, pseudo, "", argument];
                return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ? markFunction(function(seed, matches2) {
                  var idx, matched = fn(seed, argument), i2 = matched.length;
                  while (i2--) {
                    idx = indexOf.call(seed, matched[i2]);
                    seed[idx] = !(matches2[idx] = matched[i2]);
                  }
                }) : function(elem) {
                  return fn(elem, 0, args);
                };
              }
              return fn;
            }
          },
          pseudos: {
            // Potentially complex pseudos
            not: markFunction(function(selector) {
              var input = [], results = [], matcher = compile(selector.replace(rtrimCSS, "$1"));
              return matcher[expando] ? markFunction(function(seed, matches2, _context, xml) {
                var elem, unmatched = matcher(seed, null, xml, []), i2 = seed.length;
                while (i2--) {
                  if (elem = unmatched[i2]) {
                    seed[i2] = !(matches2[i2] = elem);
                  }
                }
              }) : function(elem, _context, xml) {
                input[0] = elem;
                matcher(input, null, xml, results);
                input[0] = null;
                return !results.pop();
              };
            }),
            has: markFunction(function(selector) {
              return function(elem) {
                return find(selector, elem).length > 0;
              };
            }),
            contains: markFunction(function(text) {
              text = text.replace(runescape, funescape);
              return function(elem) {
                return (elem.textContent || jQuery.text(elem)).indexOf(text) > -1;
              };
            }),
            // "Whether an element is represented by a :lang() selector
            // is based solely on the element's language value
            // being equal to the identifier C,
            // or beginning with the identifier C immediately followed by "-".
            // The matching of C against the element's language value is performed case-insensitively.
            // The identifier C does not have to be a valid language name."
            // https://www.w3.org/TR/selectors/#lang-pseudo
            lang: markFunction(function(lang) {
              if (!ridentifier.test(lang || "")) {
                find.error("unsupported lang: " + lang);
              }
              lang = lang.replace(runescape, funescape).toLowerCase();
              return function(elem) {
                var elemLang;
                do {
                  if (elemLang = documentIsHTML ? elem.lang : elem.getAttribute("xml:lang") || elem.getAttribute("lang")) {
                    elemLang = elemLang.toLowerCase();
                    return elemLang === lang || elemLang.indexOf(lang + "-") === 0;
                  }
                } while ((elem = elem.parentNode) && elem.nodeType === 1);
                return false;
              };
            }),
            // Miscellaneous
            target: function(elem) {
              var hash = window2.location && window2.location.hash;
              return hash && hash.slice(1) === elem.id;
            },
            root: function(elem) {
              return elem === documentElement2;
            },
            focus: function(elem) {
              return elem === safeActiveElement() && document3.hasFocus() && !!(elem.type || elem.href || ~elem.tabIndex);
            },
            // Boolean properties
            enabled: createDisabledPseudo(false),
            disabled: createDisabledPseudo(true),
            checked: function(elem) {
              return nodeName(elem, "input") && !!elem.checked || nodeName(elem, "option") && !!elem.selected;
            },
            selected: function(elem) {
              if (elem.parentNode) {
                elem.parentNode.selectedIndex;
              }
              return elem.selected === true;
            },
            // Contents
            empty: function(elem) {
              for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
                if (elem.nodeType < 6) {
                  return false;
                }
              }
              return true;
            },
            parent: function(elem) {
              return !Expr.pseudos.empty(elem);
            },
            // Element/input types
            header: function(elem) {
              return rheader.test(elem.nodeName);
            },
            input: function(elem) {
              return rinputs.test(elem.nodeName);
            },
            button: function(elem) {
              return nodeName(elem, "input") && elem.type === "button" || nodeName(elem, "button");
            },
            text: function(elem) {
              var attr;
              return nodeName(elem, "input") && elem.type === "text" && // Support: IE <10 only
              // New HTML5 attribute values (e.g., "search") appear
              // with elem.type === "text"
              ((attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text");
            },
            // Position-in-collection
            first: createPositionalPseudo(function() {
              return [0];
            }),
            last: createPositionalPseudo(function(_matchIndexes, length) {
              return [length - 1];
            }),
            eq: createPositionalPseudo(function(_matchIndexes, length, argument) {
              return [argument < 0 ? argument + length : argument];
            }),
            even: createPositionalPseudo(function(matchIndexes, length) {
              var i2 = 0;
              for (; i2 < length; i2 += 2) {
                matchIndexes.push(i2);
              }
              return matchIndexes;
            }),
            odd: createPositionalPseudo(function(matchIndexes, length) {
              var i2 = 1;
              for (; i2 < length; i2 += 2) {
                matchIndexes.push(i2);
              }
              return matchIndexes;
            }),
            lt: createPositionalPseudo(function(matchIndexes, length, argument) {
              var i2;
              if (argument < 0) {
                i2 = argument + length;
              } else if (argument > length) {
                i2 = length;
              } else {
                i2 = argument;
              }
              for (; --i2 >= 0; ) {
                matchIndexes.push(i2);
              }
              return matchIndexes;
            }),
            gt: createPositionalPseudo(function(matchIndexes, length, argument) {
              var i2 = argument < 0 ? argument + length : argument;
              for (; ++i2 < length; ) {
                matchIndexes.push(i2);
              }
              return matchIndexes;
            })
          }
        };
        Expr.pseudos.nth = Expr.pseudos.eq;
        for (i in { radio: true, checkbox: true, file: true, password: true, image: true }) {
          Expr.pseudos[i] = createInputPseudo(i);
        }
        for (i in { submit: true, reset: true }) {
          Expr.pseudos[i] = createButtonPseudo(i);
        }
        function setFilters() {
        }
        setFilters.prototype = Expr.filters = Expr.pseudos;
        Expr.setFilters = new setFilters();
        function tokenize(selector, parseOnly) {
          var matched, match, tokens, type, soFar, groups, preFilters, cached = tokenCache[selector + " "];
          if (cached) {
            return parseOnly ? 0 : cached.slice(0);
          }
          soFar = selector;
          groups = [];
          preFilters = Expr.preFilter;
          while (soFar) {
            if (!matched || (match = rcomma.exec(soFar))) {
              if (match) {
                soFar = soFar.slice(match[0].length) || soFar;
              }
              groups.push(tokens = []);
            }
            matched = false;
            if (match = rleadingCombinator.exec(soFar)) {
              matched = match.shift();
              tokens.push({
                value: matched,
                // Cast descendant combinators to space
                type: match[0].replace(rtrimCSS, " ")
              });
              soFar = soFar.slice(matched.length);
            }
            for (type in Expr.filter) {
              if ((match = matchExpr[type].exec(soFar)) && (!preFilters[type] || (match = preFilters[type](match)))) {
                matched = match.shift();
                tokens.push({
                  value: matched,
                  type,
                  matches: match
                });
                soFar = soFar.slice(matched.length);
              }
            }
            if (!matched) {
              break;
            }
          }
          if (parseOnly) {
            return soFar.length;
          }
          return soFar ? find.error(selector) : (
            // Cache the tokens
            tokenCache(selector, groups).slice(0)
          );
        }
        function toSelector(tokens) {
          var i2 = 0, len = tokens.length, selector = "";
          for (; i2 < len; i2++) {
            selector += tokens[i2].value;
          }
          return selector;
        }
        function addCombinator(matcher, combinator, base) {
          var dir2 = combinator.dir, skip = combinator.next, key = skip || dir2, checkNonElements = base && key === "parentNode", doneName = done++;
          return combinator.first ? (
            // Check against closest ancestor/preceding element
            function(elem, context, xml) {
              while (elem = elem[dir2]) {
                if (elem.nodeType === 1 || checkNonElements) {
                  return matcher(elem, context, xml);
                }
              }
              return false;
            }
          ) : (
            // Check against all ancestor/preceding elements
            function(elem, context, xml) {
              var oldCache, outerCache, newCache = [dirruns, doneName];
              if (xml) {
                while (elem = elem[dir2]) {
                  if (elem.nodeType === 1 || checkNonElements) {
                    if (matcher(elem, context, xml)) {
                      return true;
                    }
                  }
                }
              } else {
                while (elem = elem[dir2]) {
                  if (elem.nodeType === 1 || checkNonElements) {
                    outerCache = elem[expando] || (elem[expando] = {});
                    if (skip && nodeName(elem, skip)) {
                      elem = elem[dir2] || elem;
                    } else if ((oldCache = outerCache[key]) && oldCache[0] === dirruns && oldCache[1] === doneName) {
                      return newCache[2] = oldCache[2];
                    } else {
                      outerCache[key] = newCache;
                      if (newCache[2] = matcher(elem, context, xml)) {
                        return true;
                      }
                    }
                  }
                }
              }
              return false;
            }
          );
        }
        function elementMatcher(matchers) {
          return matchers.length > 1 ? function(elem, context, xml) {
            var i2 = matchers.length;
            while (i2--) {
              if (!matchers[i2](elem, context, xml)) {
                return false;
              }
            }
            return true;
          } : matchers[0];
        }
        function multipleContexts(selector, contexts, results) {
          var i2 = 0, len = contexts.length;
          for (; i2 < len; i2++) {
            find(selector, contexts[i2], results);
          }
          return results;
        }
        function condense(unmatched, map, filter, context, xml) {
          var elem, newUnmatched = [], i2 = 0, len = unmatched.length, mapped = map != null;
          for (; i2 < len; i2++) {
            if (elem = unmatched[i2]) {
              if (!filter || filter(elem, context, xml)) {
                newUnmatched.push(elem);
                if (mapped) {
                  map.push(i2);
                }
              }
            }
          }
          return newUnmatched;
        }
        function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
          if (postFilter && !postFilter[expando]) {
            postFilter = setMatcher(postFilter);
          }
          if (postFinder && !postFinder[expando]) {
            postFinder = setMatcher(postFinder, postSelector);
          }
          return markFunction(function(seed, results, context, xml) {
            var temp, i2, elem, matcherOut, preMap = [], postMap = [], preexisting = results.length, elems = seed || multipleContexts(
              selector || "*",
              context.nodeType ? [context] : context,
              []
            ), matcherIn = preFilter && (seed || !selector) ? condense(elems, preMap, preFilter, context, xml) : elems;
            if (matcher) {
              matcherOut = postFinder || (seed ? preFilter : preexisting || postFilter) ? (
                // ...intermediate processing is necessary
                []
              ) : (
                // ...otherwise use results directly
                results
              );
              matcher(matcherIn, matcherOut, context, xml);
            } else {
              matcherOut = matcherIn;
            }
            if (postFilter) {
              temp = condense(matcherOut, postMap);
              postFilter(temp, [], context, xml);
              i2 = temp.length;
              while (i2--) {
                if (elem = temp[i2]) {
                  matcherOut[postMap[i2]] = !(matcherIn[postMap[i2]] = elem);
                }
              }
            }
            if (seed) {
              if (postFinder || preFilter) {
                if (postFinder) {
                  temp = [];
                  i2 = matcherOut.length;
                  while (i2--) {
                    if (elem = matcherOut[i2]) {
                      temp.push(matcherIn[i2] = elem);
                    }
                  }
                  postFinder(null, matcherOut = [], temp, xml);
                }
                i2 = matcherOut.length;
                while (i2--) {
                  if ((elem = matcherOut[i2]) && (temp = postFinder ? indexOf.call(seed, elem) : preMap[i2]) > -1) {
                    seed[temp] = !(results[temp] = elem);
                  }
                }
              }
            } else {
              matcherOut = condense(
                matcherOut === results ? matcherOut.splice(preexisting, matcherOut.length) : matcherOut
              );
              if (postFinder) {
                postFinder(null, results, matcherOut, xml);
              } else {
                push2.apply(results, matcherOut);
              }
            }
          });
        }
        function matcherFromTokens(tokens) {
          var checkContext, matcher, j, len = tokens.length, leadingRelative = Expr.relative[tokens[0].type], implicitRelative = leadingRelative || Expr.relative[" "], i2 = leadingRelative ? 1 : 0, matchContext = addCombinator(function(elem) {
            return elem === checkContext;
          }, implicitRelative, true), matchAnyContext = addCombinator(function(elem) {
            return indexOf.call(checkContext, elem) > -1;
          }, implicitRelative, true), matchers = [function(elem, context, xml) {
            var ret = !leadingRelative && (xml || context != outermostContext) || ((checkContext = context).nodeType ? matchContext(elem, context, xml) : matchAnyContext(elem, context, xml));
            checkContext = null;
            return ret;
          }];
          for (; i2 < len; i2++) {
            if (matcher = Expr.relative[tokens[i2].type]) {
              matchers = [addCombinator(elementMatcher(matchers), matcher)];
            } else {
              matcher = Expr.filter[tokens[i2].type].apply(null, tokens[i2].matches);
              if (matcher[expando]) {
                j = ++i2;
                for (; j < len; j++) {
                  if (Expr.relative[tokens[j].type]) {
                    break;
                  }
                }
                return setMatcher(
                  i2 > 1 && elementMatcher(matchers),
                  i2 > 1 && toSelector(
                    // If the preceding token was a descendant combinator, insert an implicit any-element `*`
                    tokens.slice(0, i2 - 1).concat({ value: tokens[i2 - 2].type === " " ? "*" : "" })
                  ).replace(rtrimCSS, "$1"),
                  matcher,
                  i2 < j && matcherFromTokens(tokens.slice(i2, j)),
                  j < len && matcherFromTokens(tokens = tokens.slice(j)),
                  j < len && toSelector(tokens)
                );
              }
              matchers.push(matcher);
            }
          }
          return elementMatcher(matchers);
        }
        function matcherFromGroupMatchers(elementMatchers, setMatchers) {
          var bySet = setMatchers.length > 0, byElement = elementMatchers.length > 0, superMatcher = function(seed, context, xml, results, outermost) {
            var elem, j, matcher, matchedCount = 0, i2 = "0", unmatched = seed && [], setMatched = [], contextBackup = outermostContext, elems = seed || byElement && Expr.find.TAG("*", outermost), dirrunsUnique = dirruns += contextBackup == null ? 1 : Math.random() || 0.1, len = elems.length;
            if (outermost) {
              outermostContext = context == document3 || context || outermost;
            }
            for (; i2 !== len && (elem = elems[i2]) != null; i2++) {
              if (byElement && elem) {
                j = 0;
                if (!context && elem.ownerDocument != document3) {
                  setDocument(elem);
                  xml = !documentIsHTML;
                }
                while (matcher = elementMatchers[j++]) {
                  if (matcher(elem, context || document3, xml)) {
                    push2.call(results, elem);
                    break;
                  }
                }
                if (outermost) {
                  dirruns = dirrunsUnique;
                }
              }
              if (bySet) {
                if (elem = !matcher && elem) {
                  matchedCount--;
                }
                if (seed) {
                  unmatched.push(elem);
                }
              }
            }
            matchedCount += i2;
            if (bySet && i2 !== matchedCount) {
              j = 0;
              while (matcher = setMatchers[j++]) {
                matcher(unmatched, setMatched, context, xml);
              }
              if (seed) {
                if (matchedCount > 0) {
                  while (i2--) {
                    if (!(unmatched[i2] || setMatched[i2])) {
                      setMatched[i2] = pop.call(results);
                    }
                  }
                }
                setMatched = condense(setMatched);
              }
              push2.apply(results, setMatched);
              if (outermost && !seed && setMatched.length > 0 && matchedCount + setMatchers.length > 1) {
                jQuery.uniqueSort(results);
              }
            }
            if (outermost) {
              dirruns = dirrunsUnique;
              outermostContext = contextBackup;
            }
            return unmatched;
          };
          return bySet ? markFunction(superMatcher) : superMatcher;
        }
        function compile(selector, match) {
          var i2, setMatchers = [], elementMatchers = [], cached = compilerCache[selector + " "];
          if (!cached) {
            if (!match) {
              match = tokenize(selector);
            }
            i2 = match.length;
            while (i2--) {
              cached = matcherFromTokens(match[i2]);
              if (cached[expando]) {
                setMatchers.push(cached);
              } else {
                elementMatchers.push(cached);
              }
            }
            cached = compilerCache(
              selector,
              matcherFromGroupMatchers(elementMatchers, setMatchers)
            );
            cached.selector = selector;
          }
          return cached;
        }
        function select(selector, context, results, seed) {
          var i2, tokens, token, type, find2, compiled = typeof selector === "function" && selector, match = !seed && tokenize(selector = compiled.selector || selector);
          results = results || [];
          if (match.length === 1) {
            tokens = match[0] = match[0].slice(0);
            if (tokens.length > 2 && (token = tokens[0]).type === "ID" && context.nodeType === 9 && documentIsHTML && Expr.relative[tokens[1].type]) {
              context = (Expr.find.ID(
                token.matches[0].replace(runescape, funescape),
                context
              ) || [])[0];
              if (!context) {
                return results;
              } else if (compiled) {
                context = context.parentNode;
              }
              selector = selector.slice(tokens.shift().value.length);
            }
            i2 = matchExpr.needsContext.test(selector) ? 0 : tokens.length;
            while (i2--) {
              token = tokens[i2];
              if (Expr.relative[type = token.type]) {
                break;
              }
              if (find2 = Expr.find[type]) {
                if (seed = find2(
                  token.matches[0].replace(runescape, funescape),
                  rsibling.test(tokens[0].type) && testContext(context.parentNode) || context
                )) {
                  tokens.splice(i2, 1);
                  selector = seed.length && toSelector(tokens);
                  if (!selector) {
                    push2.apply(results, seed);
                    return results;
                  }
                  break;
                }
              }
            }
          }
          (compiled || compile(selector, match))(
            seed,
            context,
            !documentIsHTML,
            results,
            !context || rsibling.test(selector) && testContext(context.parentNode) || context
          );
          return results;
        }
        support.sortStable = expando.split("").sort(sortOrder).join("") === expando;
        setDocument();
        support.sortDetached = assert(function(el) {
          return el.compareDocumentPosition(document3.createElement("fieldset")) & 1;
        });
        jQuery.find = find;
        jQuery.expr[":"] = jQuery.expr.pseudos;
        jQuery.unique = jQuery.uniqueSort;
        find.compile = compile;
        find.select = select;
        find.setDocument = setDocument;
        find.tokenize = tokenize;
        find.escape = jQuery.escapeSelector;
        find.getText = jQuery.text;
        find.isXML = jQuery.isXMLDoc;
        find.selectors = jQuery.expr;
        find.support = jQuery.support;
        find.uniqueSort = jQuery.uniqueSort;
      })();
      var dir = function(elem, dir2, until) {
        var matched = [], truncate = until !== void 0;
        while ((elem = elem[dir2]) && elem.nodeType !== 9) {
          if (elem.nodeType === 1) {
            if (truncate && jQuery(elem).is(until)) {
              break;
            }
            matched.push(elem);
          }
        }
        return matched;
      };
      var siblings = function(n, elem) {
        var matched = [];
        for (; n; n = n.nextSibling) {
          if (n.nodeType === 1 && n !== elem) {
            matched.push(n);
          }
        }
        return matched;
      };
      var rneedsContext = jQuery.expr.match.needsContext;
      var rsingleTag = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
      function winnow(elements, qualifier, not) {
        if (isFunction(qualifier)) {
          return jQuery.grep(elements, function(elem, i) {
            return !!qualifier.call(elem, i, elem) !== not;
          });
        }
        if (qualifier.nodeType) {
          return jQuery.grep(elements, function(elem) {
            return elem === qualifier !== not;
          });
        }
        if (typeof qualifier !== "string") {
          return jQuery.grep(elements, function(elem) {
            return indexOf.call(qualifier, elem) > -1 !== not;
          });
        }
        return jQuery.filter(qualifier, elements, not);
      }
      jQuery.filter = function(expr, elems, not) {
        var elem = elems[0];
        if (not) {
          expr = ":not(" + expr + ")";
        }
        if (elems.length === 1 && elem.nodeType === 1) {
          return jQuery.find.matchesSelector(elem, expr) ? [elem] : [];
        }
        return jQuery.find.matches(expr, jQuery.grep(elems, function(elem2) {
          return elem2.nodeType === 1;
        }));
      };
      jQuery.fn.extend({
        find: function(selector) {
          var i, ret, len = this.length, self = this;
          if (typeof selector !== "string") {
            return this.pushStack(jQuery(selector).filter(function() {
              for (i = 0; i < len; i++) {
                if (jQuery.contains(self[i], this)) {
                  return true;
                }
              }
            }));
          }
          ret = this.pushStack([]);
          for (i = 0; i < len; i++) {
            jQuery.find(selector, self[i], ret);
          }
          return len > 1 ? jQuery.uniqueSort(ret) : ret;
        },
        filter: function(selector) {
          return this.pushStack(winnow(this, selector || [], false));
        },
        not: function(selector) {
          return this.pushStack(winnow(this, selector || [], true));
        },
        is: function(selector) {
          return !!winnow(
            this,
            // If this is a positional/relative selector, check membership in the returned set
            // so $("p:first").is("p:last") won't return true for a doc with two "p".
            typeof selector === "string" && rneedsContext.test(selector) ? jQuery(selector) : selector || [],
            false
          ).length;
        }
      });
      var rootjQuery, rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/, init = jQuery.fn.init = function(selector, context, root) {
        var match, elem;
        if (!selector) {
          return this;
        }
        root = root || rootjQuery;
        if (typeof selector === "string") {
          if (selector[0] === "<" && selector[selector.length - 1] === ">" && selector.length >= 3) {
            match = [null, selector, null];
          } else {
            match = rquickExpr.exec(selector);
          }
          if (match && (match[1] || !context)) {
            if (match[1]) {
              context = context instanceof jQuery ? context[0] : context;
              jQuery.merge(this, jQuery.parseHTML(
                match[1],
                context && context.nodeType ? context.ownerDocument || context : document2,
                true
              ));
              if (rsingleTag.test(match[1]) && jQuery.isPlainObject(context)) {
                for (match in context) {
                  if (isFunction(this[match])) {
                    this[match](context[match]);
                  } else {
                    this.attr(match, context[match]);
                  }
                }
              }
              return this;
            } else {
              elem = document2.getElementById(match[2]);
              if (elem) {
                this[0] = elem;
                this.length = 1;
              }
              return this;
            }
          } else if (!context || context.jquery) {
            return (context || root).find(selector);
          } else {
            return this.constructor(context).find(selector);
          }
        } else if (selector.nodeType) {
          this[0] = selector;
          this.length = 1;
          return this;
        } else if (isFunction(selector)) {
          return root.ready !== void 0 ? root.ready(selector) : (
            // Execute immediately if ready is not present
            selector(jQuery)
          );
        }
        return jQuery.makeArray(selector, this);
      };
      init.prototype = jQuery.fn;
      rootjQuery = jQuery(document2);
      var rparentsprev = /^(?:parents|prev(?:Until|All))/, guaranteedUnique = {
        children: true,
        contents: true,
        next: true,
        prev: true
      };
      jQuery.fn.extend({
        has: function(target) {
          var targets = jQuery(target, this), l = targets.length;
          return this.filter(function() {
            var i = 0;
            for (; i < l; i++) {
              if (jQuery.contains(this, targets[i])) {
                return true;
              }
            }
          });
        },
        closest: function(selectors, context) {
          var cur, i = 0, l = this.length, matched = [], targets = typeof selectors !== "string" && jQuery(selectors);
          if (!rneedsContext.test(selectors)) {
            for (; i < l; i++) {
              for (cur = this[i]; cur && cur !== context; cur = cur.parentNode) {
                if (cur.nodeType < 11 && (targets ? targets.index(cur) > -1 : (
                  // Don't pass non-elements to jQuery#find
                  cur.nodeType === 1 && jQuery.find.matchesSelector(cur, selectors)
                ))) {
                  matched.push(cur);
                  break;
                }
              }
            }
          }
          return this.pushStack(matched.length > 1 ? jQuery.uniqueSort(matched) : matched);
        },
        // Determine the position of an element within the set
        index: function(elem) {
          if (!elem) {
            return this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
          }
          if (typeof elem === "string") {
            return indexOf.call(jQuery(elem), this[0]);
          }
          return indexOf.call(
            this,
            // If it receives a jQuery object, the first element is used
            elem.jquery ? elem[0] : elem
          );
        },
        add: function(selector, context) {
          return this.pushStack(
            jQuery.uniqueSort(
              jQuery.merge(this.get(), jQuery(selector, context))
            )
          );
        },
        addBack: function(selector) {
          return this.add(
            selector == null ? this.prevObject : this.prevObject.filter(selector)
          );
        }
      });
      function sibling(cur, dir2) {
        while ((cur = cur[dir2]) && cur.nodeType !== 1) {
        }
        return cur;
      }
      jQuery.each({
        parent: function(elem) {
          var parent = elem.parentNode;
          return parent && parent.nodeType !== 11 ? parent : null;
        },
        parents: function(elem) {
          return dir(elem, "parentNode");
        },
        parentsUntil: function(elem, _i, until) {
          return dir(elem, "parentNode", until);
        },
        next: function(elem) {
          return sibling(elem, "nextSibling");
        },
        prev: function(elem) {
          return sibling(elem, "previousSibling");
        },
        nextAll: function(elem) {
          return dir(elem, "nextSibling");
        },
        prevAll: function(elem) {
          return dir(elem, "previousSibling");
        },
        nextUntil: function(elem, _i, until) {
          return dir(elem, "nextSibling", until);
        },
        prevUntil: function(elem, _i, until) {
          return dir(elem, "previousSibling", until);
        },
        siblings: function(elem) {
          return siblings((elem.parentNode || {}).firstChild, elem);
        },
        children: function(elem) {
          return siblings(elem.firstChild);
        },
        contents: function(elem) {
          if (elem.contentDocument != null && // Support: IE 11+
          // <object> elements with no `data` attribute has an object
          // `contentDocument` with a `null` prototype.
          getProto(elem.contentDocument)) {
            return elem.contentDocument;
          }
          if (nodeName(elem, "template")) {
            elem = elem.content || elem;
          }
          return jQuery.merge([], elem.childNodes);
        }
      }, function(name, fn) {
        jQuery.fn[name] = function(until, selector) {
          var matched = jQuery.map(this, fn, until);
          if (name.slice(-5) !== "Until") {
            selector = until;
          }
          if (selector && typeof selector === "string") {
            matched = jQuery.filter(selector, matched);
          }
          if (this.length > 1) {
            if (!guaranteedUnique[name]) {
              jQuery.uniqueSort(matched);
            }
            if (rparentsprev.test(name)) {
              matched.reverse();
            }
          }
          return this.pushStack(matched);
        };
      });
      var rnothtmlwhite = /[^\x20\t\r\n\f]+/g;
      function createOptions(options) {
        var object = {};
        jQuery.each(options.match(rnothtmlwhite) || [], function(_, flag) {
          object[flag] = true;
        });
        return object;
      }
      jQuery.Callbacks = function(options) {
        options = typeof options === "string" ? createOptions(options) : jQuery.extend({}, options);
        var firing, memory, fired, locked, list = [], queue = [], firingIndex = -1, fire = function() {
          locked = locked || options.once;
          fired = firing = true;
          for (; queue.length; firingIndex = -1) {
            memory = queue.shift();
            while (++firingIndex < list.length) {
              if (list[firingIndex].apply(memory[0], memory[1]) === false && options.stopOnFalse) {
                firingIndex = list.length;
                memory = false;
              }
            }
          }
          if (!options.memory) {
            memory = false;
          }
          firing = false;
          if (locked) {
            if (memory) {
              list = [];
            } else {
              list = "";
            }
          }
        }, self = {
          // Add a callback or a collection of callbacks to the list
          add: function() {
            if (list) {
              if (memory && !firing) {
                firingIndex = list.length - 1;
                queue.push(memory);
              }
              (function add(args) {
                jQuery.each(args, function(_, arg) {
                  if (isFunction(arg)) {
                    if (!options.unique || !self.has(arg)) {
                      list.push(arg);
                    }
                  } else if (arg && arg.length && toType(arg) !== "string") {
                    add(arg);
                  }
                });
              })(arguments);
              if (memory && !firing) {
                fire();
              }
            }
            return this;
          },
          // Remove a callback from the list
          remove: function() {
            jQuery.each(arguments, function(_, arg) {
              var index;
              while ((index = jQuery.inArray(arg, list, index)) > -1) {
                list.splice(index, 1);
                if (index <= firingIndex) {
                  firingIndex--;
                }
              }
            });
            return this;
          },
          // Check if a given callback is in the list.
          // If no argument is given, return whether or not list has callbacks attached.
          has: function(fn) {
            return fn ? jQuery.inArray(fn, list) > -1 : list.length > 0;
          },
          // Remove all callbacks from the list
          empty: function() {
            if (list) {
              list = [];
            }
            return this;
          },
          // Disable .fire and .add
          // Abort any current/pending executions
          // Clear all callbacks and values
          disable: function() {
            locked = queue = [];
            list = memory = "";
            return this;
          },
          disabled: function() {
            return !list;
          },
          // Disable .fire
          // Also disable .add unless we have memory (since it would have no effect)
          // Abort any pending executions
          lock: function() {
            locked = queue = [];
            if (!memory && !firing) {
              list = memory = "";
            }
            return this;
          },
          locked: function() {
            return !!locked;
          },
          // Call all callbacks with the given context and arguments
          fireWith: function(context, args) {
            if (!locked) {
              args = args || [];
              args = [context, args.slice ? args.slice() : args];
              queue.push(args);
              if (!firing) {
                fire();
              }
            }
            return this;
          },
          // Call all the callbacks with the given arguments
          fire: function() {
            self.fireWith(this, arguments);
            return this;
          },
          // To know if the callbacks have already been called at least once
          fired: function() {
            return !!fired;
          }
        };
        return self;
      };
      function Identity(v) {
        return v;
      }
      function Thrower(ex) {
        throw ex;
      }
      function adoptValue(value, resolve, reject, noValue) {
        var method;
        try {
          if (value && isFunction(method = value.promise)) {
            method.call(value).done(resolve).fail(reject);
          } else if (value && isFunction(method = value.then)) {
            method.call(value, resolve, reject);
          } else {
            resolve.apply(void 0, [value].slice(noValue));
          }
        } catch (value2) {
          reject.apply(void 0, [value2]);
        }
      }
      jQuery.extend({
        Deferred: function(func) {
          var tuples = [
            // action, add listener, callbacks,
            // ... .then handlers, argument index, [final state]
            [
              "notify",
              "progress",
              jQuery.Callbacks("memory"),
              jQuery.Callbacks("memory"),
              2
            ],
            [
              "resolve",
              "done",
              jQuery.Callbacks("once memory"),
              jQuery.Callbacks("once memory"),
              0,
              "resolved"
            ],
            [
              "reject",
              "fail",
              jQuery.Callbacks("once memory"),
              jQuery.Callbacks("once memory"),
              1,
              "rejected"
            ]
          ], state = "pending", promise = {
            state: function() {
              return state;
            },
            always: function() {
              deferred.done(arguments).fail(arguments);
              return this;
            },
            "catch": function(fn) {
              return promise.then(null, fn);
            },
            // Keep pipe for back-compat
            pipe: function() {
              var fns = arguments;
              return jQuery.Deferred(function(newDefer) {
                jQuery.each(tuples, function(_i, tuple) {
                  var fn = isFunction(fns[tuple[4]]) && fns[tuple[4]];
                  deferred[tuple[1]](function() {
                    var returned = fn && fn.apply(this, arguments);
                    if (returned && isFunction(returned.promise)) {
                      returned.promise().progress(newDefer.notify).done(newDefer.resolve).fail(newDefer.reject);
                    } else {
                      newDefer[tuple[0] + "With"](
                        this,
                        fn ? [returned] : arguments
                      );
                    }
                  });
                });
                fns = null;
              }).promise();
            },
            then: function(onFulfilled, onRejected, onProgress) {
              var maxDepth = 0;
              function resolve(depth, deferred2, handler, special) {
                return function() {
                  var that = this, args = arguments, mightThrow = function() {
                    var returned, then;
                    if (depth < maxDepth) {
                      return;
                    }
                    returned = handler.apply(that, args);
                    if (returned === deferred2.promise()) {
                      throw new TypeError("Thenable self-resolution");
                    }
                    then = returned && // Support: Promises/A+ section 2.3.4
                    // https://promisesaplus.com/#point-64
                    // Only check objects and functions for thenability
                    (typeof returned === "object" || typeof returned === "function") && returned.then;
                    if (isFunction(then)) {
                      if (special) {
                        then.call(
                          returned,
                          resolve(maxDepth, deferred2, Identity, special),
                          resolve(maxDepth, deferred2, Thrower, special)
                        );
                      } else {
                        maxDepth++;
                        then.call(
                          returned,
                          resolve(maxDepth, deferred2, Identity, special),
                          resolve(maxDepth, deferred2, Thrower, special),
                          resolve(
                            maxDepth,
                            deferred2,
                            Identity,
                            deferred2.notifyWith
                          )
                        );
                      }
                    } else {
                      if (handler !== Identity) {
                        that = void 0;
                        args = [returned];
                      }
                      (special || deferred2.resolveWith)(that, args);
                    }
                  }, process = special ? mightThrow : function() {
                    try {
                      mightThrow();
                    } catch (e) {
                      if (jQuery.Deferred.exceptionHook) {
                        jQuery.Deferred.exceptionHook(
                          e,
                          process.error
                        );
                      }
                      if (depth + 1 >= maxDepth) {
                        if (handler !== Thrower) {
                          that = void 0;
                          args = [e];
                        }
                        deferred2.rejectWith(that, args);
                      }
                    }
                  };
                  if (depth) {
                    process();
                  } else {
                    if (jQuery.Deferred.getErrorHook) {
                      process.error = jQuery.Deferred.getErrorHook();
                    } else if (jQuery.Deferred.getStackHook) {
                      process.error = jQuery.Deferred.getStackHook();
                    }
                    window2.setTimeout(process);
                  }
                };
              }
              return jQuery.Deferred(function(newDefer) {
                tuples[0][3].add(
                  resolve(
                    0,
                    newDefer,
                    isFunction(onProgress) ? onProgress : Identity,
                    newDefer.notifyWith
                  )
                );
                tuples[1][3].add(
                  resolve(
                    0,
                    newDefer,
                    isFunction(onFulfilled) ? onFulfilled : Identity
                  )
                );
                tuples[2][3].add(
                  resolve(
                    0,
                    newDefer,
                    isFunction(onRejected) ? onRejected : Thrower
                  )
                );
              }).promise();
            },
            // Get a promise for this deferred
            // If obj is provided, the promise aspect is added to the object
            promise: function(obj) {
              return obj != null ? jQuery.extend(obj, promise) : promise;
            }
          }, deferred = {};
          jQuery.each(tuples, function(i, tuple) {
            var list = tuple[2], stateString = tuple[5];
            promise[tuple[1]] = list.add;
            if (stateString) {
              list.add(
                function() {
                  state = stateString;
                },
                // rejected_callbacks.disable
                // fulfilled_callbacks.disable
                tuples[3 - i][2].disable,
                // rejected_handlers.disable
                // fulfilled_handlers.disable
                tuples[3 - i][3].disable,
                // progress_callbacks.lock
                tuples[0][2].lock,
                // progress_handlers.lock
                tuples[0][3].lock
              );
            }
            list.add(tuple[3].fire);
            deferred[tuple[0]] = function() {
              deferred[tuple[0] + "With"](this === deferred ? void 0 : this, arguments);
              return this;
            };
            deferred[tuple[0] + "With"] = list.fireWith;
          });
          promise.promise(deferred);
          if (func) {
            func.call(deferred, deferred);
          }
          return deferred;
        },
        // Deferred helper
        when: function(singleValue) {
          var remaining = arguments.length, i = remaining, resolveContexts = Array(i), resolveValues = slice.call(arguments), primary = jQuery.Deferred(), updateFunc = function(i2) {
            return function(value) {
              resolveContexts[i2] = this;
              resolveValues[i2] = arguments.length > 1 ? slice.call(arguments) : value;
              if (!--remaining) {
                primary.resolveWith(resolveContexts, resolveValues);
              }
            };
          };
          if (remaining <= 1) {
            adoptValue(
              singleValue,
              primary.done(updateFunc(i)).resolve,
              primary.reject,
              !remaining
            );
            if (primary.state() === "pending" || isFunction(resolveValues[i] && resolveValues[i].then)) {
              return primary.then();
            }
          }
          while (i--) {
            adoptValue(resolveValues[i], updateFunc(i), primary.reject);
          }
          return primary.promise();
        }
      });
      var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
      jQuery.Deferred.exceptionHook = function(error, asyncError) {
        if (window2.console && window2.console.warn && error && rerrorNames.test(error.name)) {
          window2.console.warn(
            "jQuery.Deferred exception: " + error.message,
            error.stack,
            asyncError
          );
        }
      };
      jQuery.readyException = function(error) {
        window2.setTimeout(function() {
          throw error;
        });
      };
      var readyList = jQuery.Deferred();
      jQuery.fn.ready = function(fn) {
        readyList.then(fn).catch(function(error) {
          jQuery.readyException(error);
        });
        return this;
      };
      jQuery.extend({
        // Is the DOM ready to be used? Set to true once it occurs.
        isReady: false,
        // A counter to track how many items to wait for before
        // the ready event fires. See trac-6781
        readyWait: 1,
        // Handle when the DOM is ready
        ready: function(wait) {
          if (wait === true ? --jQuery.readyWait : jQuery.isReady) {
            return;
          }
          jQuery.isReady = true;
          if (wait !== true && --jQuery.readyWait > 0) {
            return;
          }
          readyList.resolveWith(document2, [jQuery]);
        }
      });
      jQuery.ready.then = readyList.then;
      function completed() {
        document2.removeEventListener("DOMContentLoaded", completed);
        window2.removeEventListener("load", completed);
        jQuery.ready();
      }
      if (document2.readyState === "complete" || document2.readyState !== "loading" && !document2.documentElement.doScroll) {
        window2.setTimeout(jQuery.ready);
      } else {
        document2.addEventListener("DOMContentLoaded", completed);
        window2.addEventListener("load", completed);
      }
      var access = function(elems, fn, key, value, chainable, emptyGet, raw) {
        var i = 0, len = elems.length, bulk = key == null;
        if (toType(key) === "object") {
          chainable = true;
          for (i in key) {
            access(elems, fn, i, key[i], true, emptyGet, raw);
          }
        } else if (value !== void 0) {
          chainable = true;
          if (!isFunction(value)) {
            raw = true;
          }
          if (bulk) {
            if (raw) {
              fn.call(elems, value);
              fn = null;
            } else {
              bulk = fn;
              fn = function(elem, _key, value2) {
                return bulk.call(jQuery(elem), value2);
              };
            }
          }
          if (fn) {
            for (; i < len; i++) {
              fn(
                elems[i],
                key,
                raw ? value : value.call(elems[i], i, fn(elems[i], key))
              );
            }
          }
        }
        if (chainable) {
          return elems;
        }
        if (bulk) {
          return fn.call(elems);
        }
        return len ? fn(elems[0], key) : emptyGet;
      };
      var rmsPrefix = /^-ms-/, rdashAlpha = /-([a-z])/g;
      function fcamelCase(_all, letter) {
        return letter.toUpperCase();
      }
      function camelCase(string) {
        return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase);
      }
      var acceptData = function(owner) {
        return owner.nodeType === 1 || owner.nodeType === 9 || !+owner.nodeType;
      };
      function Data() {
        this.expando = jQuery.expando + Data.uid++;
      }
      Data.uid = 1;
      Data.prototype = {
        cache: function(owner) {
          var value = owner[this.expando];
          if (!value) {
            value = {};
            if (acceptData(owner)) {
              if (owner.nodeType) {
                owner[this.expando] = value;
              } else {
                Object.defineProperty(owner, this.expando, {
                  value,
                  configurable: true
                });
              }
            }
          }
          return value;
        },
        set: function(owner, data, value) {
          var prop, cache = this.cache(owner);
          if (typeof data === "string") {
            cache[camelCase(data)] = value;
          } else {
            for (prop in data) {
              cache[camelCase(prop)] = data[prop];
            }
          }
          return cache;
        },
        get: function(owner, key) {
          return key === void 0 ? this.cache(owner) : (
            // Always use camelCase key (gh-2257)
            owner[this.expando] && owner[this.expando][camelCase(key)]
          );
        },
        access: function(owner, key, value) {
          if (key === void 0 || key && typeof key === "string" && value === void 0) {
            return this.get(owner, key);
          }
          this.set(owner, key, value);
          return value !== void 0 ? value : key;
        },
        remove: function(owner, key) {
          var i, cache = owner[this.expando];
          if (cache === void 0) {
            return;
          }
          if (key !== void 0) {
            if (Array.isArray(key)) {
              key = key.map(camelCase);
            } else {
              key = camelCase(key);
              key = key in cache ? [key] : key.match(rnothtmlwhite) || [];
            }
            i = key.length;
            while (i--) {
              delete cache[key[i]];
            }
          }
          if (key === void 0 || jQuery.isEmptyObject(cache)) {
            if (owner.nodeType) {
              owner[this.expando] = void 0;
            } else {
              delete owner[this.expando];
            }
          }
        },
        hasData: function(owner) {
          var cache = owner[this.expando];
          return cache !== void 0 && !jQuery.isEmptyObject(cache);
        }
      };
      var dataPriv = new Data();
      var dataUser = new Data();
      var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, rmultiDash = /[A-Z]/g;
      function getData(data) {
        if (data === "true") {
          return true;
        }
        if (data === "false") {
          return false;
        }
        if (data === "null") {
          return null;
        }
        if (data === +data + "") {
          return +data;
        }
        if (rbrace.test(data)) {
          return JSON.parse(data);
        }
        return data;
      }
      function dataAttr(elem, key, data) {
        var name;
        if (data === void 0 && elem.nodeType === 1) {
          name = "data-" + key.replace(rmultiDash, "-$&").toLowerCase();
          data = elem.getAttribute(name);
          if (typeof data === "string") {
            try {
              data = getData(data);
            } catch (e) {
            }
            dataUser.set(elem, key, data);
          } else {
            data = void 0;
          }
        }
        return data;
      }
      jQuery.extend({
        hasData: function(elem) {
          return dataUser.hasData(elem) || dataPriv.hasData(elem);
        },
        data: function(elem, name, data) {
          return dataUser.access(elem, name, data);
        },
        removeData: function(elem, name) {
          dataUser.remove(elem, name);
        },
        // TODO: Now that all calls to _data and _removeData have been replaced
        // with direct calls to dataPriv methods, these can be deprecated.
        _data: function(elem, name, data) {
          return dataPriv.access(elem, name, data);
        },
        _removeData: function(elem, name) {
          dataPriv.remove(elem, name);
        }
      });
      jQuery.fn.extend({
        data: function(key, value) {
          var i, name, data, elem = this[0], attrs = elem && elem.attributes;
          if (key === void 0) {
            if (this.length) {
              data = dataUser.get(elem);
              if (elem.nodeType === 1 && !dataPriv.get(elem, "hasDataAttrs")) {
                i = attrs.length;
                while (i--) {
                  if (attrs[i]) {
                    name = attrs[i].name;
                    if (name.indexOf("data-") === 0) {
                      name = camelCase(name.slice(5));
                      dataAttr(elem, name, data[name]);
                    }
                  }
                }
                dataPriv.set(elem, "hasDataAttrs", true);
              }
            }
            return data;
          }
          if (typeof key === "object") {
            return this.each(function() {
              dataUser.set(this, key);
            });
          }
          return access(this, function(value2) {
            var data2;
            if (elem && value2 === void 0) {
              data2 = dataUser.get(elem, key);
              if (data2 !== void 0) {
                return data2;
              }
              data2 = dataAttr(elem, key);
              if (data2 !== void 0) {
                return data2;
              }
              return;
            }
            this.each(function() {
              dataUser.set(this, key, value2);
            });
          }, null, value, arguments.length > 1, null, true);
        },
        removeData: function(key) {
          return this.each(function() {
            dataUser.remove(this, key);
          });
        }
      });
      jQuery.extend({
        queue: function(elem, type, data) {
          var queue;
          if (elem) {
            type = (type || "fx") + "queue";
            queue = dataPriv.get(elem, type);
            if (data) {
              if (!queue || Array.isArray(data)) {
                queue = dataPriv.access(elem, type, jQuery.makeArray(data));
              } else {
                queue.push(data);
              }
            }
            return queue || [];
          }
        },
        dequeue: function(elem, type) {
          type = type || "fx";
          var queue = jQuery.queue(elem, type), startLength = queue.length, fn = queue.shift(), hooks = jQuery._queueHooks(elem, type), next = function() {
            jQuery.dequeue(elem, type);
          };
          if (fn === "inprogress") {
            fn = queue.shift();
            startLength--;
          }
          if (fn) {
            if (type === "fx") {
              queue.unshift("inprogress");
            }
            delete hooks.stop;
            fn.call(elem, next, hooks);
          }
          if (!startLength && hooks) {
            hooks.empty.fire();
          }
        },
        // Not public - generate a queueHooks object, or return the current one
        _queueHooks: function(elem, type) {
          var key = type + "queueHooks";
          return dataPriv.get(elem, key) || dataPriv.access(elem, key, {
            empty: jQuery.Callbacks("once memory").add(function() {
              dataPriv.remove(elem, [type + "queue", key]);
            })
          });
        }
      });
      jQuery.fn.extend({
        queue: function(type, data) {
          var setter = 2;
          if (typeof type !== "string") {
            data = type;
            type = "fx";
            setter--;
          }
          if (arguments.length < setter) {
            return jQuery.queue(this[0], type);
          }
          return data === void 0 ? this : this.each(function() {
            var queue = jQuery.queue(this, type, data);
            jQuery._queueHooks(this, type);
            if (type === "fx" && queue[0] !== "inprogress") {
              jQuery.dequeue(this, type);
            }
          });
        },
        dequeue: function(type) {
          return this.each(function() {
            jQuery.dequeue(this, type);
          });
        },
        clearQueue: function(type) {
          return this.queue(type || "fx", []);
        },
        // Get a promise resolved when queues of a certain type
        // are emptied (fx is the type by default)
        promise: function(type, obj) {
          var tmp, count = 1, defer = jQuery.Deferred(), elements = this, i = this.length, resolve = function() {
            if (!--count) {
              defer.resolveWith(elements, [elements]);
            }
          };
          if (typeof type !== "string") {
            obj = type;
            type = void 0;
          }
          type = type || "fx";
          while (i--) {
            tmp = dataPriv.get(elements[i], type + "queueHooks");
            if (tmp && tmp.empty) {
              count++;
              tmp.empty.add(resolve);
            }
          }
          resolve();
          return defer.promise(obj);
        }
      });
      var pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;
      var rcssNum = new RegExp("^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i");
      var cssExpand = ["Top", "Right", "Bottom", "Left"];
      var documentElement = document2.documentElement;
      var isAttached = function(elem) {
        return jQuery.contains(elem.ownerDocument, elem);
      }, composed = { composed: true };
      if (documentElement.getRootNode) {
        isAttached = function(elem) {
          return jQuery.contains(elem.ownerDocument, elem) || elem.getRootNode(composed) === elem.ownerDocument;
        };
      }
      var isHiddenWithinTree = function(elem, el) {
        elem = el || elem;
        return elem.style.display === "none" || elem.style.display === "" && // Otherwise, check computed style
        // Support: Firefox <=43 - 45
        // Disconnected elements can have computed display: none, so first confirm that elem is
        // in the document.
        isAttached(elem) && jQuery.css(elem, "display") === "none";
      };
      function adjustCSS(elem, prop, valueParts, tween) {
        var adjusted, scale, maxIterations = 20, currentValue = tween ? function() {
          return tween.cur();
        } : function() {
          return jQuery.css(elem, prop, "");
        }, initial = currentValue(), unit = valueParts && valueParts[3] || (jQuery.cssNumber[prop] ? "" : "px"), initialInUnit = elem.nodeType && (jQuery.cssNumber[prop] || unit !== "px" && +initial) && rcssNum.exec(jQuery.css(elem, prop));
        if (initialInUnit && initialInUnit[3] !== unit) {
          initial = initial / 2;
          unit = unit || initialInUnit[3];
          initialInUnit = +initial || 1;
          while (maxIterations--) {
            jQuery.style(elem, prop, initialInUnit + unit);
            if ((1 - scale) * (1 - (scale = currentValue() / initial || 0.5)) <= 0) {
              maxIterations = 0;
            }
            initialInUnit = initialInUnit / scale;
          }
          initialInUnit = initialInUnit * 2;
          jQuery.style(elem, prop, initialInUnit + unit);
          valueParts = valueParts || [];
        }
        if (valueParts) {
          initialInUnit = +initialInUnit || +initial || 0;
          adjusted = valueParts[1] ? initialInUnit + (valueParts[1] + 1) * valueParts[2] : +valueParts[2];
          if (tween) {
            tween.unit = unit;
            tween.start = initialInUnit;
            tween.end = adjusted;
          }
        }
        return adjusted;
      }
      var defaultDisplayMap = {};
      function getDefaultDisplay(elem) {
        var temp, doc = elem.ownerDocument, nodeName2 = elem.nodeName, display = defaultDisplayMap[nodeName2];
        if (display) {
          return display;
        }
        temp = doc.body.appendChild(doc.createElement(nodeName2));
        display = jQuery.css(temp, "display");
        temp.parentNode.removeChild(temp);
        if (display === "none") {
          display = "block";
        }
        defaultDisplayMap[nodeName2] = display;
        return display;
      }
      function showHide(elements, show) {
        var display, elem, values = [], index = 0, length = elements.length;
        for (; index < length; index++) {
          elem = elements[index];
          if (!elem.style) {
            continue;
          }
          display = elem.style.display;
          if (show) {
            if (display === "none") {
              values[index] = dataPriv.get(elem, "display") || null;
              if (!values[index]) {
                elem.style.display = "";
              }
            }
            if (elem.style.display === "" && isHiddenWithinTree(elem)) {
              values[index] = getDefaultDisplay(elem);
            }
          } else {
            if (display !== "none") {
              values[index] = "none";
              dataPriv.set(elem, "display", display);
            }
          }
        }
        for (index = 0; index < length; index++) {
          if (values[index] != null) {
            elements[index].style.display = values[index];
          }
        }
        return elements;
      }
      jQuery.fn.extend({
        show: function() {
          return showHide(this, true);
        },
        hide: function() {
          return showHide(this);
        },
        toggle: function(state) {
          if (typeof state === "boolean") {
            return state ? this.show() : this.hide();
          }
          return this.each(function() {
            if (isHiddenWithinTree(this)) {
              jQuery(this).show();
            } else {
              jQuery(this).hide();
            }
          });
        }
      });
      var rcheckableType = /^(?:checkbox|radio)$/i;
      var rtagName = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i;
      var rscriptType = /^$|^module$|\/(?:java|ecma)script/i;
      (function() {
        var fragment = document2.createDocumentFragment(), div = fragment.appendChild(document2.createElement("div")), input = document2.createElement("input");
        input.setAttribute("type", "radio");
        input.setAttribute("checked", "checked");
        input.setAttribute("name", "t");
        div.appendChild(input);
        support.checkClone = div.cloneNode(true).cloneNode(true).lastChild.checked;
        div.innerHTML = "<textarea>x</textarea>";
        support.noCloneChecked = !!div.cloneNode(true).lastChild.defaultValue;
        div.innerHTML = "<option></option>";
        support.option = !!div.lastChild;
      })();
      var wrapMap = {
        // XHTML parsers do not magically insert elements in the
        // same way that tag soup parsers do. So we cannot shorten
        // this by omitting <tbody> or other required elements.
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
      };
      wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
      wrapMap.th = wrapMap.td;
      if (!support.option) {
        wrapMap.optgroup = wrapMap.option = [1, "<select multiple='multiple'>", "</select>"];
      }
      function getAll(context, tag) {
        var ret;
        if (typeof context.getElementsByTagName !== "undefined") {
          ret = context.getElementsByTagName(tag || "*");
        } else if (typeof context.querySelectorAll !== "undefined") {
          ret = context.querySelectorAll(tag || "*");
        } else {
          ret = [];
        }
        if (tag === void 0 || tag && nodeName(context, tag)) {
          return jQuery.merge([context], ret);
        }
        return ret;
      }
      function setGlobalEval(elems, refElements) {
        var i = 0, l = elems.length;
        for (; i < l; i++) {
          dataPriv.set(
            elems[i],
            "globalEval",
            !refElements || dataPriv.get(refElements[i], "globalEval")
          );
        }
      }
      var rhtml = /<|&#?\w+;/;
      function buildFragment(elems, context, scripts, selection, ignored) {
        var elem, tmp, tag, wrap, attached, j, fragment = context.createDocumentFragment(), nodes = [], i = 0, l = elems.length;
        for (; i < l; i++) {
          elem = elems[i];
          if (elem || elem === 0) {
            if (toType(elem) === "object") {
              jQuery.merge(nodes, elem.nodeType ? [elem] : elem);
            } else if (!rhtml.test(elem)) {
              nodes.push(context.createTextNode(elem));
            } else {
              tmp = tmp || fragment.appendChild(context.createElement("div"));
              tag = (rtagName.exec(elem) || ["", ""])[1].toLowerCase();
              wrap = wrapMap[tag] || wrapMap._default;
              tmp.innerHTML = wrap[1] + jQuery.htmlPrefilter(elem) + wrap[2];
              j = wrap[0];
              while (j--) {
                tmp = tmp.lastChild;
              }
              jQuery.merge(nodes, tmp.childNodes);
              tmp = fragment.firstChild;
              tmp.textContent = "";
            }
          }
        }
        fragment.textContent = "";
        i = 0;
        while (elem = nodes[i++]) {
          if (selection && jQuery.inArray(elem, selection) > -1) {
            if (ignored) {
              ignored.push(elem);
            }
            continue;
          }
          attached = isAttached(elem);
          tmp = getAll(fragment.appendChild(elem), "script");
          if (attached) {
            setGlobalEval(tmp);
          }
          if (scripts) {
            j = 0;
            while (elem = tmp[j++]) {
              if (rscriptType.test(elem.type || "")) {
                scripts.push(elem);
              }
            }
          }
        }
        return fragment;
      }
      var rtypenamespace = /^([^.]*)(?:\.(.+)|)/;
      function returnTrue() {
        return true;
      }
      function returnFalse() {
        return false;
      }
      function on(elem, types, selector, data, fn, one) {
        var origFn, type;
        if (typeof types === "object") {
          if (typeof selector !== "string") {
            data = data || selector;
            selector = void 0;
          }
          for (type in types) {
            on(elem, type, selector, data, types[type], one);
          }
          return elem;
        }
        if (data == null && fn == null) {
          fn = selector;
          data = selector = void 0;
        } else if (fn == null) {
          if (typeof selector === "string") {
            fn = data;
            data = void 0;
          } else {
            fn = data;
            data = selector;
            selector = void 0;
          }
        }
        if (fn === false) {
          fn = returnFalse;
        } else if (!fn) {
          return elem;
        }
        if (one === 1) {
          origFn = fn;
          fn = function(event) {
            jQuery().off(event);
            return origFn.apply(this, arguments);
          };
          fn.guid = origFn.guid || (origFn.guid = jQuery.guid++);
        }
        return elem.each(function() {
          jQuery.event.add(this, types, fn, data, selector);
        });
      }
      jQuery.event = {
        global: {},
        add: function(elem, types, handler, data, selector) {
          var handleObjIn, eventHandle, tmp, events, t, handleObj, special, handlers, type, namespaces, origType, elemData = dataPriv.get(elem);
          if (!acceptData(elem)) {
            return;
          }
          if (handler.handler) {
            handleObjIn = handler;
            handler = handleObjIn.handler;
            selector = handleObjIn.selector;
          }
          if (selector) {
            jQuery.find.matchesSelector(documentElement, selector);
          }
          if (!handler.guid) {
            handler.guid = jQuery.guid++;
          }
          if (!(events = elemData.events)) {
            events = elemData.events = /* @__PURE__ */ Object.create(null);
          }
          if (!(eventHandle = elemData.handle)) {
            eventHandle = elemData.handle = function(e) {
              return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ? jQuery.event.dispatch.apply(elem, arguments) : void 0;
            };
          }
          types = (types || "").match(rnothtmlwhite) || [""];
          t = types.length;
          while (t--) {
            tmp = rtypenamespace.exec(types[t]) || [];
            type = origType = tmp[1];
            namespaces = (tmp[2] || "").split(".").sort();
            if (!type) {
              continue;
            }
            special = jQuery.event.special[type] || {};
            type = (selector ? special.delegateType : special.bindType) || type;
            special = jQuery.event.special[type] || {};
            handleObj = jQuery.extend({
              type,
              origType,
              data,
              handler,
              guid: handler.guid,
              selector,
              needsContext: selector && jQuery.expr.match.needsContext.test(selector),
              namespace: namespaces.join(".")
            }, handleObjIn);
            if (!(handlers = events[type])) {
              handlers = events[type] = [];
              handlers.delegateCount = 0;
              if (!special.setup || special.setup.call(elem, data, namespaces, eventHandle) === false) {
                if (elem.addEventListener) {
                  elem.addEventListener(type, eventHandle);
                }
              }
            }
            if (special.add) {
              special.add.call(elem, handleObj);
              if (!handleObj.handler.guid) {
                handleObj.handler.guid = handler.guid;
              }
            }
            if (selector) {
              handlers.splice(handlers.delegateCount++, 0, handleObj);
            } else {
              handlers.push(handleObj);
            }
            jQuery.event.global[type] = true;
          }
        },
        // Detach an event or set of events from an element
        remove: function(elem, types, handler, selector, mappedTypes) {
          var j, origCount, tmp, events, t, handleObj, special, handlers, type, namespaces, origType, elemData = dataPriv.hasData(elem) && dataPriv.get(elem);
          if (!elemData || !(events = elemData.events)) {
            return;
          }
          types = (types || "").match(rnothtmlwhite) || [""];
          t = types.length;
          while (t--) {
            tmp = rtypenamespace.exec(types[t]) || [];
            type = origType = tmp[1];
            namespaces = (tmp[2] || "").split(".").sort();
            if (!type) {
              for (type in events) {
                jQuery.event.remove(elem, type + types[t], handler, selector, true);
              }
              continue;
            }
            special = jQuery.event.special[type] || {};
            type = (selector ? special.delegateType : special.bindType) || type;
            handlers = events[type] || [];
            tmp = tmp[2] && new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)");
            origCount = j = handlers.length;
            while (j--) {
              handleObj = handlers[j];
              if ((mappedTypes || origType === handleObj.origType) && (!handler || handler.guid === handleObj.guid) && (!tmp || tmp.test(handleObj.namespace)) && (!selector || selector === handleObj.selector || selector === "**" && handleObj.selector)) {
                handlers.splice(j, 1);
                if (handleObj.selector) {
                  handlers.delegateCount--;
                }
                if (special.remove) {
                  special.remove.call(elem, handleObj);
                }
              }
            }
            if (origCount && !handlers.length) {
              if (!special.teardown || special.teardown.call(elem, namespaces, elemData.handle) === false) {
                jQuery.removeEvent(elem, type, elemData.handle);
              }
              delete events[type];
            }
          }
          if (jQuery.isEmptyObject(events)) {
            dataPriv.remove(elem, "handle events");
          }
        },
        dispatch: function(nativeEvent) {
          var i, j, ret, matched, handleObj, handlerQueue, args = new Array(arguments.length), event = jQuery.event.fix(nativeEvent), handlers = (dataPriv.get(this, "events") || /* @__PURE__ */ Object.create(null))[event.type] || [], special = jQuery.event.special[event.type] || {};
          args[0] = event;
          for (i = 1; i < arguments.length; i++) {
            args[i] = arguments[i];
          }
          event.delegateTarget = this;
          if (special.preDispatch && special.preDispatch.call(this, event) === false) {
            return;
          }
          handlerQueue = jQuery.event.handlers.call(this, event, handlers);
          i = 0;
          while ((matched = handlerQueue[i++]) && !event.isPropagationStopped()) {
            event.currentTarget = matched.elem;
            j = 0;
            while ((handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped()) {
              if (!event.rnamespace || handleObj.namespace === false || event.rnamespace.test(handleObj.namespace)) {
                event.handleObj = handleObj;
                event.data = handleObj.data;
                ret = ((jQuery.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem, args);
                if (ret !== void 0) {
                  if ((event.result = ret) === false) {
                    event.preventDefault();
                    event.stopPropagation();
                  }
                }
              }
            }
          }
          if (special.postDispatch) {
            special.postDispatch.call(this, event);
          }
          return event.result;
        },
        handlers: function(event, handlers) {
          var i, handleObj, sel, matchedHandlers, matchedSelectors, handlerQueue = [], delegateCount = handlers.delegateCount, cur = event.target;
          if (delegateCount && // Support: IE <=9
          // Black-hole SVG <use> instance trees (trac-13180)
          cur.nodeType && // Support: Firefox <=42
          // Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
          // https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
          // Support: IE 11 only
          // ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
          !(event.type === "click" && event.button >= 1)) {
            for (; cur !== this; cur = cur.parentNode || this) {
              if (cur.nodeType === 1 && !(event.type === "click" && cur.disabled === true)) {
                matchedHandlers = [];
                matchedSelectors = {};
                for (i = 0; i < delegateCount; i++) {
                  handleObj = handlers[i];
                  sel = handleObj.selector + " ";
                  if (matchedSelectors[sel] === void 0) {
                    matchedSelectors[sel] = handleObj.needsContext ? jQuery(sel, this).index(cur) > -1 : jQuery.find(sel, this, null, [cur]).length;
                  }
                  if (matchedSelectors[sel]) {
                    matchedHandlers.push(handleObj);
                  }
                }
                if (matchedHandlers.length) {
                  handlerQueue.push({ elem: cur, handlers: matchedHandlers });
                }
              }
            }
          }
          cur = this;
          if (delegateCount < handlers.length) {
            handlerQueue.push({ elem: cur, handlers: handlers.slice(delegateCount) });
          }
          return handlerQueue;
        },
        addProp: function(name, hook) {
          Object.defineProperty(jQuery.Event.prototype, name, {
            enumerable: true,
            configurable: true,
            get: isFunction(hook) ? function() {
              if (this.originalEvent) {
                return hook(this.originalEvent);
              }
            } : function() {
              if (this.originalEvent) {
                return this.originalEvent[name];
              }
            },
            set: function(value) {
              Object.defineProperty(this, name, {
                enumerable: true,
                configurable: true,
                writable: true,
                value
              });
            }
          });
        },
        fix: function(originalEvent) {
          return originalEvent[jQuery.expando] ? originalEvent : new jQuery.Event(originalEvent);
        },
        special: {
          load: {
            // Prevent triggered image.load events from bubbling to window.load
            noBubble: true
          },
          click: {
            // Utilize native event to ensure correct state for checkable inputs
            setup: function(data) {
              var el = this || data;
              if (rcheckableType.test(el.type) && el.click && nodeName(el, "input")) {
                leverageNative(el, "click", true);
              }
              return false;
            },
            trigger: function(data) {
              var el = this || data;
              if (rcheckableType.test(el.type) && el.click && nodeName(el, "input")) {
                leverageNative(el, "click");
              }
              return true;
            },
            // For cross-browser consistency, suppress native .click() on links
            // Also prevent it if we're currently inside a leveraged native-event stack
            _default: function(event) {
              var target = event.target;
              return rcheckableType.test(target.type) && target.click && nodeName(target, "input") && dataPriv.get(target, "click") || nodeName(target, "a");
            }
          },
          beforeunload: {
            postDispatch: function(event) {
              if (event.result !== void 0 && event.originalEvent) {
                event.originalEvent.returnValue = event.result;
              }
            }
          }
        }
      };
      function leverageNative(el, type, isSetup) {
        if (!isSetup) {
          if (dataPriv.get(el, type) === void 0) {
            jQuery.event.add(el, type, returnTrue);
          }
          return;
        }
        dataPriv.set(el, type, false);
        jQuery.event.add(el, type, {
          namespace: false,
          handler: function(event) {
            var result, saved = dataPriv.get(this, type);
            if (event.isTrigger & 1 && this[type]) {
              if (!saved) {
                saved = slice.call(arguments);
                dataPriv.set(this, type, saved);
                this[type]();
                result = dataPriv.get(this, type);
                dataPriv.set(this, type, false);
                if (saved !== result) {
                  event.stopImmediatePropagation();
                  event.preventDefault();
                  return result;
                }
              } else if ((jQuery.event.special[type] || {}).delegateType) {
                event.stopPropagation();
              }
            } else if (saved) {
              dataPriv.set(this, type, jQuery.event.trigger(
                saved[0],
                saved.slice(1),
                this
              ));
              event.stopPropagation();
              event.isImmediatePropagationStopped = returnTrue;
            }
          }
        });
      }
      jQuery.removeEvent = function(elem, type, handle) {
        if (elem.removeEventListener) {
          elem.removeEventListener(type, handle);
        }
      };
      jQuery.Event = function(src, props) {
        if (!(this instanceof jQuery.Event)) {
          return new jQuery.Event(src, props);
        }
        if (src && src.type) {
          this.originalEvent = src;
          this.type = src.type;
          this.isDefaultPrevented = src.defaultPrevented || src.defaultPrevented === void 0 && // Support: Android <=2.3 only
          src.returnValue === false ? returnTrue : returnFalse;
          this.target = src.target && src.target.nodeType === 3 ? src.target.parentNode : src.target;
          this.currentTarget = src.currentTarget;
          this.relatedTarget = src.relatedTarget;
        } else {
          this.type = src;
        }
        if (props) {
          jQuery.extend(this, props);
        }
        this.timeStamp = src && src.timeStamp || Date.now();
        this[jQuery.expando] = true;
      };
      jQuery.Event.prototype = {
        constructor: jQuery.Event,
        isDefaultPrevented: returnFalse,
        isPropagationStopped: returnFalse,
        isImmediatePropagationStopped: returnFalse,
        isSimulated: false,
        preventDefault: function() {
          var e = this.originalEvent;
          this.isDefaultPrevented = returnTrue;
          if (e && !this.isSimulated) {
            e.preventDefault();
          }
        },
        stopPropagation: function() {
          var e = this.originalEvent;
          this.isPropagationStopped = returnTrue;
          if (e && !this.isSimulated) {
            e.stopPropagation();
          }
        },
        stopImmediatePropagation: function() {
          var e = this.originalEvent;
          this.isImmediatePropagationStopped = returnTrue;
          if (e && !this.isSimulated) {
            e.stopImmediatePropagation();
          }
          this.stopPropagation();
        }
      };
      jQuery.each({
        altKey: true,
        bubbles: true,
        cancelable: true,
        changedTouches: true,
        ctrlKey: true,
        detail: true,
        eventPhase: true,
        metaKey: true,
        pageX: true,
        pageY: true,
        shiftKey: true,
        view: true,
        "char": true,
        code: true,
        charCode: true,
        key: true,
        keyCode: true,
        button: true,
        buttons: true,
        clientX: true,
        clientY: true,
        offsetX: true,
        offsetY: true,
        pointerId: true,
        pointerType: true,
        screenX: true,
        screenY: true,
        targetTouches: true,
        toElement: true,
        touches: true,
        which: true
      }, jQuery.event.addProp);
      jQuery.each({ focus: "focusin", blur: "focusout" }, function(type, delegateType) {
        function focusMappedHandler(nativeEvent) {
          if (document2.documentMode) {
            var handle = dataPriv.get(this, "handle"), event = jQuery.event.fix(nativeEvent);
            event.type = nativeEvent.type === "focusin" ? "focus" : "blur";
            event.isSimulated = true;
            handle(nativeEvent);
            if (event.target === event.currentTarget) {
              handle(event);
            }
          } else {
            jQuery.event.simulate(
              delegateType,
              nativeEvent.target,
              jQuery.event.fix(nativeEvent)
            );
          }
        }
        jQuery.event.special[type] = {
          // Utilize native event if possible so blur/focus sequence is correct
          setup: function() {
            var attaches;
            leverageNative(this, type, true);
            if (document2.documentMode) {
              attaches = dataPriv.get(this, delegateType);
              if (!attaches) {
                this.addEventListener(delegateType, focusMappedHandler);
              }
              dataPriv.set(this, delegateType, (attaches || 0) + 1);
            } else {
              return false;
            }
          },
          trigger: function() {
            leverageNative(this, type);
            return true;
          },
          teardown: function() {
            var attaches;
            if (document2.documentMode) {
              attaches = dataPriv.get(this, delegateType) - 1;
              if (!attaches) {
                this.removeEventListener(delegateType, focusMappedHandler);
                dataPriv.remove(this, delegateType);
              } else {
                dataPriv.set(this, delegateType, attaches);
              }
            } else {
              return false;
            }
          },
          // Suppress native focus or blur if we're currently inside
          // a leveraged native-event stack
          _default: function(event) {
            return dataPriv.get(event.target, type);
          },
          delegateType
        };
        jQuery.event.special[delegateType] = {
          setup: function() {
            var doc = this.ownerDocument || this.document || this, dataHolder = document2.documentMode ? this : doc, attaches = dataPriv.get(dataHolder, delegateType);
            if (!attaches) {
              if (document2.documentMode) {
                this.addEventListener(delegateType, focusMappedHandler);
              } else {
                doc.addEventListener(type, focusMappedHandler, true);
              }
            }
            dataPriv.set(dataHolder, delegateType, (attaches || 0) + 1);
          },
          teardown: function() {
            var doc = this.ownerDocument || this.document || this, dataHolder = document2.documentMode ? this : doc, attaches = dataPriv.get(dataHolder, delegateType) - 1;
            if (!attaches) {
              if (document2.documentMode) {
                this.removeEventListener(delegateType, focusMappedHandler);
              } else {
                doc.removeEventListener(type, focusMappedHandler, true);
              }
              dataPriv.remove(dataHolder, delegateType);
            } else {
              dataPriv.set(dataHolder, delegateType, attaches);
            }
          }
        };
      });
      jQuery.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
      }, function(orig, fix) {
        jQuery.event.special[orig] = {
          delegateType: fix,
          bindType: fix,
          handle: function(event) {
            var ret, target = this, related = event.relatedTarget, handleObj = event.handleObj;
            if (!related || related !== target && !jQuery.contains(target, related)) {
              event.type = handleObj.origType;
              ret = handleObj.handler.apply(this, arguments);
              event.type = fix;
            }
            return ret;
          }
        };
      });
      jQuery.fn.extend({
        on: function(types, selector, data, fn) {
          return on(this, types, selector, data, fn);
        },
        one: function(types, selector, data, fn) {
          return on(this, types, selector, data, fn, 1);
        },
        off: function(types, selector, fn) {
          var handleObj, type;
          if (types && types.preventDefault && types.handleObj) {
            handleObj = types.handleObj;
            jQuery(types.delegateTarget).off(
              handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType,
              handleObj.selector,
              handleObj.handler
            );
            return this;
          }
          if (typeof types === "object") {
            for (type in types) {
              this.off(type, selector, types[type]);
            }
            return this;
          }
          if (selector === false || typeof selector === "function") {
            fn = selector;
            selector = void 0;
          }
          if (fn === false) {
            fn = returnFalse;
          }
          return this.each(function() {
            jQuery.event.remove(this, types, fn, selector);
          });
        }
      });
      var rnoInnerhtml = /<script|<style|<link/i, rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i, rcleanScript = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
      function manipulationTarget(elem, content) {
        if (nodeName(elem, "table") && nodeName(content.nodeType !== 11 ? content : content.firstChild, "tr")) {
          return jQuery(elem).children("tbody")[0] || elem;
        }
        return elem;
      }
      function disableScript(elem) {
        elem.type = (elem.getAttribute("type") !== null) + "/" + elem.type;
        return elem;
      }
      function restoreScript(elem) {
        if ((elem.type || "").slice(0, 5) === "true/") {
          elem.type = elem.type.slice(5);
        } else {
          elem.removeAttribute("type");
        }
        return elem;
      }
      function cloneCopyEvent(src, dest) {
        var i, l, type, pdataOld, udataOld, udataCur, events;
        if (dest.nodeType !== 1) {
          return;
        }
        if (dataPriv.hasData(src)) {
          pdataOld = dataPriv.get(src);
          events = pdataOld.events;
          if (events) {
            dataPriv.remove(dest, "handle events");
            for (type in events) {
              for (i = 0, l = events[type].length; i < l; i++) {
                jQuery.event.add(dest, type, events[type][i]);
              }
            }
          }
        }
        if (dataUser.hasData(src)) {
          udataOld = dataUser.access(src);
          udataCur = jQuery.extend({}, udataOld);
          dataUser.set(dest, udataCur);
        }
      }
      function fixInput(src, dest) {
        var nodeName2 = dest.nodeName.toLowerCase();
        if (nodeName2 === "input" && rcheckableType.test(src.type)) {
          dest.checked = src.checked;
        } else if (nodeName2 === "input" || nodeName2 === "textarea") {
          dest.defaultValue = src.defaultValue;
        }
      }
      function domManip(collection, args, callback, ignored) {
        args = flat(args);
        var fragment, first, scripts, hasScripts, node, doc, i = 0, l = collection.length, iNoClone = l - 1, value = args[0], valueIsFunction = isFunction(value);
        if (valueIsFunction || l > 1 && typeof value === "string" && !support.checkClone && rchecked.test(value)) {
          return collection.each(function(index) {
            var self = collection.eq(index);
            if (valueIsFunction) {
              args[0] = value.call(this, index, self.html());
            }
            domManip(self, args, callback, ignored);
          });
        }
        if (l) {
          fragment = buildFragment(args, collection[0].ownerDocument, false, collection, ignored);
          first = fragment.firstChild;
          if (fragment.childNodes.length === 1) {
            fragment = first;
          }
          if (first || ignored) {
            scripts = jQuery.map(getAll(fragment, "script"), disableScript);
            hasScripts = scripts.length;
            for (; i < l; i++) {
              node = fragment;
              if (i !== iNoClone) {
                node = jQuery.clone(node, true, true);
                if (hasScripts) {
                  jQuery.merge(scripts, getAll(node, "script"));
                }
              }
              callback.call(collection[i], node, i);
            }
            if (hasScripts) {
              doc = scripts[scripts.length - 1].ownerDocument;
              jQuery.map(scripts, restoreScript);
              for (i = 0; i < hasScripts; i++) {
                node = scripts[i];
                if (rscriptType.test(node.type || "") && !dataPriv.access(node, "globalEval") && jQuery.contains(doc, node)) {
                  if (node.src && (node.type || "").toLowerCase() !== "module") {
                    if (jQuery._evalUrl && !node.noModule) {
                      jQuery._evalUrl(node.src, {
                        nonce: node.nonce || node.getAttribute("nonce")
                      }, doc);
                    }
                  } else {
                    DOMEval(node.textContent.replace(rcleanScript, ""), node, doc);
                  }
                }
              }
            }
          }
        }
        return collection;
      }
      function remove(elem, selector, keepData) {
        var node, nodes = selector ? jQuery.filter(selector, elem) : elem, i = 0;
        for (; (node = nodes[i]) != null; i++) {
          if (!keepData && node.nodeType === 1) {
            jQuery.cleanData(getAll(node));
          }
          if (node.parentNode) {
            if (keepData && isAttached(node)) {
              setGlobalEval(getAll(node, "script"));
            }
            node.parentNode.removeChild(node);
          }
        }
        return elem;
      }
      jQuery.extend({
        htmlPrefilter: function(html) {
          return html;
        },
        clone: function(elem, dataAndEvents, deepDataAndEvents) {
          var i, l, srcElements, destElements, clone = elem.cloneNode(true), inPage = isAttached(elem);
          if (!support.noCloneChecked && (elem.nodeType === 1 || elem.nodeType === 11) && !jQuery.isXMLDoc(elem)) {
            destElements = getAll(clone);
            srcElements = getAll(elem);
            for (i = 0, l = srcElements.length; i < l; i++) {
              fixInput(srcElements[i], destElements[i]);
            }
          }
          if (dataAndEvents) {
            if (deepDataAndEvents) {
              srcElements = srcElements || getAll(elem);
              destElements = destElements || getAll(clone);
              for (i = 0, l = srcElements.length; i < l; i++) {
                cloneCopyEvent(srcElements[i], destElements[i]);
              }
            } else {
              cloneCopyEvent(elem, clone);
            }
          }
          destElements = getAll(clone, "script");
          if (destElements.length > 0) {
            setGlobalEval(destElements, !inPage && getAll(elem, "script"));
          }
          return clone;
        },
        cleanData: function(elems) {
          var data, elem, type, special = jQuery.event.special, i = 0;
          for (; (elem = elems[i]) !== void 0; i++) {
            if (acceptData(elem)) {
              if (data = elem[dataPriv.expando]) {
                if (data.events) {
                  for (type in data.events) {
                    if (special[type]) {
                      jQuery.event.remove(elem, type);
                    } else {
                      jQuery.removeEvent(elem, type, data.handle);
                    }
                  }
                }
                elem[dataPriv.expando] = void 0;
              }
              if (elem[dataUser.expando]) {
                elem[dataUser.expando] = void 0;
              }
            }
          }
        }
      });
      jQuery.fn.extend({
        detach: function(selector) {
          return remove(this, selector, true);
        },
        remove: function(selector) {
          return remove(this, selector);
        },
        text: function(value) {
          return access(this, function(value2) {
            return value2 === void 0 ? jQuery.text(this) : this.empty().each(function() {
              if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                this.textContent = value2;
              }
            });
          }, null, value, arguments.length);
        },
        append: function() {
          return domManip(this, arguments, function(elem) {
            if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
              var target = manipulationTarget(this, elem);
              target.appendChild(elem);
            }
          });
        },
        prepend: function() {
          return domManip(this, arguments, function(elem) {
            if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
              var target = manipulationTarget(this, elem);
              target.insertBefore(elem, target.firstChild);
            }
          });
        },
        before: function() {
          return domManip(this, arguments, function(elem) {
            if (this.parentNode) {
              this.parentNode.insertBefore(elem, this);
            }
          });
        },
        after: function() {
          return domManip(this, arguments, function(elem) {
            if (this.parentNode) {
              this.parentNode.insertBefore(elem, this.nextSibling);
            }
          });
        },
        empty: function() {
          var elem, i = 0;
          for (; (elem = this[i]) != null; i++) {
            if (elem.nodeType === 1) {
              jQuery.cleanData(getAll(elem, false));
              elem.textContent = "";
            }
          }
          return this;
        },
        clone: function(dataAndEvents, deepDataAndEvents) {
          dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
          deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;
          return this.map(function() {
            return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
          });
        },
        html: function(value) {
          return access(this, function(value2) {
            var elem = this[0] || {}, i = 0, l = this.length;
            if (value2 === void 0 && elem.nodeType === 1) {
              return elem.innerHTML;
            }
            if (typeof value2 === "string" && !rnoInnerhtml.test(value2) && !wrapMap[(rtagName.exec(value2) || ["", ""])[1].toLowerCase()]) {
              value2 = jQuery.htmlPrefilter(value2);
              try {
                for (; i < l; i++) {
                  elem = this[i] || {};
                  if (elem.nodeType === 1) {
                    jQuery.cleanData(getAll(elem, false));
                    elem.innerHTML = value2;
                  }
                }
                elem = 0;
              } catch (e) {
              }
            }
            if (elem) {
              this.empty().append(value2);
            }
          }, null, value, arguments.length);
        },
        replaceWith: function() {
          var ignored = [];
          return domManip(this, arguments, function(elem) {
            var parent = this.parentNode;
            if (jQuery.inArray(this, ignored) < 0) {
              jQuery.cleanData(getAll(this));
              if (parent) {
                parent.replaceChild(elem, this);
              }
            }
          }, ignored);
        }
      });
      jQuery.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
      }, function(name, original) {
        jQuery.fn[name] = function(selector) {
          var elems, ret = [], insert = jQuery(selector), last = insert.length - 1, i = 0;
          for (; i <= last; i++) {
            elems = i === last ? this : this.clone(true);
            jQuery(insert[i])[original](elems);
            push.apply(ret, elems.get());
          }
          return this.pushStack(ret);
        };
      });
      var rnumnonpx = new RegExp("^(" + pnum + ")(?!px)[a-z%]+$", "i");
      var rcustomProp = /^--/;
      var getStyles = function(elem) {
        var view = elem.ownerDocument.defaultView;
        if (!view || !view.opener) {
          view = window2;
        }
        return view.getComputedStyle(elem);
      };
      var swap = function(elem, options, callback) {
        var ret, name, old = {};
        for (name in options) {
          old[name] = elem.style[name];
          elem.style[name] = options[name];
        }
        ret = callback.call(elem);
        for (name in options) {
          elem.style[name] = old[name];
        }
        return ret;
      };
      var rboxStyle = new RegExp(cssExpand.join("|"), "i");
      (function() {
        function computeStyleTests() {
          if (!div) {
            return;
          }
          container.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0";
          div.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%";
          documentElement.appendChild(container).appendChild(div);
          var divStyle = window2.getComputedStyle(div);
          pixelPositionVal = divStyle.top !== "1%";
          reliableMarginLeftVal = roundPixelMeasures(divStyle.marginLeft) === 12;
          div.style.right = "60%";
          pixelBoxStylesVal = roundPixelMeasures(divStyle.right) === 36;
          boxSizingReliableVal = roundPixelMeasures(divStyle.width) === 36;
          div.style.position = "absolute";
          scrollboxSizeVal = roundPixelMeasures(div.offsetWidth / 3) === 12;
          documentElement.removeChild(container);
          div = null;
        }
        function roundPixelMeasures(measure) {
          return Math.round(parseFloat(measure));
        }
        var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal, reliableTrDimensionsVal, reliableMarginLeftVal, container = document2.createElement("div"), div = document2.createElement("div");
        if (!div.style) {
          return;
        }
        div.style.backgroundClip = "content-box";
        div.cloneNode(true).style.backgroundClip = "";
        support.clearCloneStyle = div.style.backgroundClip === "content-box";
        jQuery.extend(support, {
          boxSizingReliable: function() {
            computeStyleTests();
            return boxSizingReliableVal;
          },
          pixelBoxStyles: function() {
            computeStyleTests();
            return pixelBoxStylesVal;
          },
          pixelPosition: function() {
            computeStyleTests();
            return pixelPositionVal;
          },
          reliableMarginLeft: function() {
            computeStyleTests();
            return reliableMarginLeftVal;
          },
          scrollboxSize: function() {
            computeStyleTests();
            return scrollboxSizeVal;
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
            var table, tr, trChild, trStyle;
            if (reliableTrDimensionsVal == null) {
              table = document2.createElement("table");
              tr = document2.createElement("tr");
              trChild = document2.createElement("div");
              table.style.cssText = "position:absolute;left:-11111px;border-collapse:separate";
              tr.style.cssText = "box-sizing:content-box;border:1px solid";
              tr.style.height = "1px";
              trChild.style.height = "9px";
              trChild.style.display = "block";
              documentElement.appendChild(table).appendChild(tr).appendChild(trChild);
              trStyle = window2.getComputedStyle(tr);
              reliableTrDimensionsVal = parseInt(trStyle.height, 10) + parseInt(trStyle.borderTopWidth, 10) + parseInt(trStyle.borderBottomWidth, 10) === tr.offsetHeight;
              documentElement.removeChild(table);
            }
            return reliableTrDimensionsVal;
          }
        });
      })();
      function curCSS(elem, name, computed) {
        var width, minWidth, maxWidth, ret, isCustomProp = rcustomProp.test(name), style = elem.style;
        computed = computed || getStyles(elem);
        if (computed) {
          ret = computed.getPropertyValue(name) || computed[name];
          if (isCustomProp && ret) {
            ret = ret.replace(rtrimCSS, "$1") || void 0;
          }
          if (ret === "" && !isAttached(elem)) {
            ret = jQuery.style(elem, name);
          }
          if (!support.pixelBoxStyles() && rnumnonpx.test(ret) && rboxStyle.test(name)) {
            width = style.width;
            minWidth = style.minWidth;
            maxWidth = style.maxWidth;
            style.minWidth = style.maxWidth = style.width = ret;
            ret = computed.width;
            style.width = width;
            style.minWidth = minWidth;
            style.maxWidth = maxWidth;
          }
        }
        return ret !== void 0 ? (
          // Support: IE <=9 - 11 only
          // IE returns zIndex value as an integer.
          ret + ""
        ) : ret;
      }
      function addGetHookIf(conditionFn, hookFn) {
        return {
          get: function() {
            if (conditionFn()) {
              delete this.get;
              return;
            }
            return (this.get = hookFn).apply(this, arguments);
          }
        };
      }
      var cssPrefixes = ["Webkit", "Moz", "ms"], emptyStyle = document2.createElement("div").style, vendorProps = {};
      function vendorPropName(name) {
        var capName = name[0].toUpperCase() + name.slice(1), i = cssPrefixes.length;
        while (i--) {
          name = cssPrefixes[i] + capName;
          if (name in emptyStyle) {
            return name;
          }
        }
      }
      function finalPropName(name) {
        var final = jQuery.cssProps[name] || vendorProps[name];
        if (final) {
          return final;
        }
        if (name in emptyStyle) {
          return name;
        }
        return vendorProps[name] = vendorPropName(name) || name;
      }
      var rdisplayswap = /^(none|table(?!-c[ea]).+)/, cssShow = { position: "absolute", visibility: "hidden", display: "block" }, cssNormalTransform = {
        letterSpacing: "0",
        fontWeight: "400"
      };
      function setPositiveNumber(_elem, value, subtract) {
        var matches = rcssNum.exec(value);
        return matches ? (
          // Guard against undefined "subtract", e.g., when used as in cssHooks
          Math.max(0, matches[2] - (subtract || 0)) + (matches[3] || "px")
        ) : value;
      }
      function boxModelAdjustment(elem, dimension, box, isBorderBox, styles, computedVal) {
        var i = dimension === "width" ? 1 : 0, extra = 0, delta = 0, marginDelta = 0;
        if (box === (isBorderBox ? "border" : "content")) {
          return 0;
        }
        for (; i < 4; i += 2) {
          if (box === "margin") {
            marginDelta += jQuery.css(elem, box + cssExpand[i], true, styles);
          }
          if (!isBorderBox) {
            delta += jQuery.css(elem, "padding" + cssExpand[i], true, styles);
            if (box !== "padding") {
              delta += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
            } else {
              extra += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
            }
          } else {
            if (box === "content") {
              delta -= jQuery.css(elem, "padding" + cssExpand[i], true, styles);
            }
            if (box !== "margin") {
              delta -= jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
            }
          }
        }
        if (!isBorderBox && computedVal >= 0) {
          delta += Math.max(0, Math.ceil(
            elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] - computedVal - delta - extra - 0.5
            // If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
            // Use an explicit zero to avoid NaN (gh-3964)
          )) || 0;
        }
        return delta + marginDelta;
      }
      function getWidthOrHeight(elem, dimension, extra) {
        var styles = getStyles(elem), boxSizingNeeded = !support.boxSizingReliable() || extra, isBorderBox = boxSizingNeeded && jQuery.css(elem, "boxSizing", false, styles) === "border-box", valueIsBorderBox = isBorderBox, val = curCSS(elem, dimension, styles), offsetProp = "offset" + dimension[0].toUpperCase() + dimension.slice(1);
        if (rnumnonpx.test(val)) {
          if (!extra) {
            return val;
          }
          val = "auto";
        }
        if ((!support.boxSizingReliable() && isBorderBox || // Support: IE 10 - 11+, Edge 15 - 18+
        // IE/Edge misreport `getComputedStyle` of table rows with width/height
        // set in CSS while `offset*` properties report correct values.
        // Interestingly, in some cases IE 9 doesn't suffer from this issue.
        !support.reliableTrDimensions() && nodeName(elem, "tr") || // Fall back to offsetWidth/offsetHeight when value is "auto"
        // This happens for inline elements with no explicit setting (gh-3571)
        val === "auto" || // Support: Android <=4.1 - 4.3 only
        // Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
        !parseFloat(val) && jQuery.css(elem, "display", false, styles) === "inline") && // Make sure the element is visible & connected
        elem.getClientRects().length) {
          isBorderBox = jQuery.css(elem, "boxSizing", false, styles) === "border-box";
          valueIsBorderBox = offsetProp in elem;
          if (valueIsBorderBox) {
            val = elem[offsetProp];
          }
        }
        val = parseFloat(val) || 0;
        return val + boxModelAdjustment(
          elem,
          dimension,
          extra || (isBorderBox ? "border" : "content"),
          valueIsBorderBox,
          styles,
          // Provide the current computed size to request scroll gutter calculation (gh-3589)
          val
        ) + "px";
      }
      jQuery.extend({
        // Add in style property hooks for overriding the default
        // behavior of getting and setting a style property
        cssHooks: {
          opacity: {
            get: function(elem, computed) {
              if (computed) {
                var ret = curCSS(elem, "opacity");
                return ret === "" ? "1" : ret;
              }
            }
          }
        },
        // Don't automatically add "px" to these possibly-unitless properties
        cssNumber: {
          animationIterationCount: true,
          aspectRatio: true,
          borderImageSlice: true,
          columnCount: true,
          flexGrow: true,
          flexShrink: true,
          fontWeight: true,
          gridArea: true,
          gridColumn: true,
          gridColumnEnd: true,
          gridColumnStart: true,
          gridRow: true,
          gridRowEnd: true,
          gridRowStart: true,
          lineHeight: true,
          opacity: true,
          order: true,
          orphans: true,
          scale: true,
          widows: true,
          zIndex: true,
          zoom: true,
          // SVG-related
          fillOpacity: true,
          floodOpacity: true,
          stopOpacity: true,
          strokeMiterlimit: true,
          strokeOpacity: true
        },
        // Add in properties whose names you wish to fix before
        // setting or getting the value
        cssProps: {},
        // Get and set the style property on a DOM Node
        style: function(elem, name, value, extra) {
          if (!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style) {
            return;
          }
          var ret, type, hooks, origName = camelCase(name), isCustomProp = rcustomProp.test(name), style = elem.style;
          if (!isCustomProp) {
            name = finalPropName(origName);
          }
          hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];
          if (value !== void 0) {
            type = typeof value;
            if (type === "string" && (ret = rcssNum.exec(value)) && ret[1]) {
              value = adjustCSS(elem, name, ret);
              type = "number";
            }
            if (value == null || value !== value) {
              return;
            }
            if (type === "number" && !isCustomProp) {
              value += ret && ret[3] || (jQuery.cssNumber[origName] ? "" : "px");
            }
            if (!support.clearCloneStyle && value === "" && name.indexOf("background") === 0) {
              style[name] = "inherit";
            }
            if (!hooks || !("set" in hooks) || (value = hooks.set(elem, value, extra)) !== void 0) {
              if (isCustomProp) {
                style.setProperty(name, value);
              } else {
                style[name] = value;
              }
            }
          } else {
            if (hooks && "get" in hooks && (ret = hooks.get(elem, false, extra)) !== void 0) {
              return ret;
            }
            return style[name];
          }
        },
        css: function(elem, name, extra, styles) {
          var val, num, hooks, origName = camelCase(name), isCustomProp = rcustomProp.test(name);
          if (!isCustomProp) {
            name = finalPropName(origName);
          }
          hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];
          if (hooks && "get" in hooks) {
            val = hooks.get(elem, true, extra);
          }
          if (val === void 0) {
            val = curCSS(elem, name, styles);
          }
          if (val === "normal" && name in cssNormalTransform) {
            val = cssNormalTransform[name];
          }
          if (extra === "" || extra) {
            num = parseFloat(val);
            return extra === true || isFinite(num) ? num || 0 : val;
          }
          return val;
        }
      });
      jQuery.each(["height", "width"], function(_i, dimension) {
        jQuery.cssHooks[dimension] = {
          get: function(elem, computed, extra) {
            if (computed) {
              return rdisplayswap.test(jQuery.css(elem, "display")) && // Support: Safari 8+
              // Table columns in Safari have non-zero offsetWidth & zero
              // getBoundingClientRect().width unless display is changed.
              // Support: IE <=11 only
              // Running getBoundingClientRect on a disconnected node
              // in IE throws an error.
              (!elem.getClientRects().length || !elem.getBoundingClientRect().width) ? swap(elem, cssShow, function() {
                return getWidthOrHeight(elem, dimension, extra);
              }) : getWidthOrHeight(elem, dimension, extra);
            }
          },
          set: function(elem, value, extra) {
            var matches, styles = getStyles(elem), scrollboxSizeBuggy = !support.scrollboxSize() && styles.position === "absolute", boxSizingNeeded = scrollboxSizeBuggy || extra, isBorderBox = boxSizingNeeded && jQuery.css(elem, "boxSizing", false, styles) === "border-box", subtract = extra ? boxModelAdjustment(
              elem,
              dimension,
              extra,
              isBorderBox,
              styles
            ) : 0;
            if (isBorderBox && scrollboxSizeBuggy) {
              subtract -= Math.ceil(
                elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] - parseFloat(styles[dimension]) - boxModelAdjustment(elem, dimension, "border", false, styles) - 0.5
              );
            }
            if (subtract && (matches = rcssNum.exec(value)) && (matches[3] || "px") !== "px") {
              elem.style[dimension] = value;
              value = jQuery.css(elem, dimension);
            }
            return setPositiveNumber(elem, value, subtract);
          }
        };
      });
      jQuery.cssHooks.marginLeft = addGetHookIf(
        support.reliableMarginLeft,
        function(elem, computed) {
          if (computed) {
            return (parseFloat(curCSS(elem, "marginLeft")) || elem.getBoundingClientRect().left - swap(elem, { marginLeft: 0 }, function() {
              return elem.getBoundingClientRect().left;
            })) + "px";
          }
        }
      );
      jQuery.each({
        margin: "",
        padding: "",
        border: "Width"
      }, function(prefix, suffix) {
        jQuery.cssHooks[prefix + suffix] = {
          expand: function(value) {
            var i = 0, expanded = {}, parts = typeof value === "string" ? value.split(" ") : [value];
            for (; i < 4; i++) {
              expanded[prefix + cssExpand[i] + suffix] = parts[i] || parts[i - 2] || parts[0];
            }
            return expanded;
          }
        };
        if (prefix !== "margin") {
          jQuery.cssHooks[prefix + suffix].set = setPositiveNumber;
        }
      });
      jQuery.fn.extend({
        css: function(name, value) {
          return access(this, function(elem, name2, value2) {
            var styles, len, map = {}, i = 0;
            if (Array.isArray(name2)) {
              styles = getStyles(elem);
              len = name2.length;
              for (; i < len; i++) {
                map[name2[i]] = jQuery.css(elem, name2[i], false, styles);
              }
              return map;
            }
            return value2 !== void 0 ? jQuery.style(elem, name2, value2) : jQuery.css(elem, name2);
          }, name, value, arguments.length > 1);
        }
      });
      function Tween(elem, options, prop, end, easing) {
        return new Tween.prototype.init(elem, options, prop, end, easing);
      }
      jQuery.Tween = Tween;
      Tween.prototype = {
        constructor: Tween,
        init: function(elem, options, prop, end, easing, unit) {
          this.elem = elem;
          this.prop = prop;
          this.easing = easing || jQuery.easing._default;
          this.options = options;
          this.start = this.now = this.cur();
          this.end = end;
          this.unit = unit || (jQuery.cssNumber[prop] ? "" : "px");
        },
        cur: function() {
          var hooks = Tween.propHooks[this.prop];
          return hooks && hooks.get ? hooks.get(this) : Tween.propHooks._default.get(this);
        },
        run: function(percent) {
          var eased, hooks = Tween.propHooks[this.prop];
          if (this.options.duration) {
            this.pos = eased = jQuery.easing[this.easing](
              percent,
              this.options.duration * percent,
              0,
              1,
              this.options.duration
            );
          } else {
            this.pos = eased = percent;
          }
          this.now = (this.end - this.start) * eased + this.start;
          if (this.options.step) {
            this.options.step.call(this.elem, this.now, this);
          }
          if (hooks && hooks.set) {
            hooks.set(this);
          } else {
            Tween.propHooks._default.set(this);
          }
          return this;
        }
      };
      Tween.prototype.init.prototype = Tween.prototype;
      Tween.propHooks = {
        _default: {
          get: function(tween) {
            var result;
            if (tween.elem.nodeType !== 1 || tween.elem[tween.prop] != null && tween.elem.style[tween.prop] == null) {
              return tween.elem[tween.prop];
            }
            result = jQuery.css(tween.elem, tween.prop, "");
            return !result || result === "auto" ? 0 : result;
          },
          set: function(tween) {
            if (jQuery.fx.step[tween.prop]) {
              jQuery.fx.step[tween.prop](tween);
            } else if (tween.elem.nodeType === 1 && (jQuery.cssHooks[tween.prop] || tween.elem.style[finalPropName(tween.prop)] != null)) {
              jQuery.style(tween.elem, tween.prop, tween.now + tween.unit);
            } else {
              tween.elem[tween.prop] = tween.now;
            }
          }
        }
      };
      Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
        set: function(tween) {
          if (tween.elem.nodeType && tween.elem.parentNode) {
            tween.elem[tween.prop] = tween.now;
          }
        }
      };
      jQuery.easing = {
        linear: function(p) {
          return p;
        },
        swing: function(p) {
          return 0.5 - Math.cos(p * Math.PI) / 2;
        },
        _default: "swing"
      };
      jQuery.fx = Tween.prototype.init;
      jQuery.fx.step = {};
      var fxNow, inProgress, rfxtypes = /^(?:toggle|show|hide)$/, rrun = /queueHooks$/;
      function schedule() {
        if (inProgress) {
          if (document2.hidden === false && window2.requestAnimationFrame) {
            window2.requestAnimationFrame(schedule);
          } else {
            window2.setTimeout(schedule, jQuery.fx.interval);
          }
          jQuery.fx.tick();
        }
      }
      function createFxNow() {
        window2.setTimeout(function() {
          fxNow = void 0;
        });
        return fxNow = Date.now();
      }
      function genFx(type, includeWidth) {
        var which, i = 0, attrs = { height: type };
        includeWidth = includeWidth ? 1 : 0;
        for (; i < 4; i += 2 - includeWidth) {
          which = cssExpand[i];
          attrs["margin" + which] = attrs["padding" + which] = type;
        }
        if (includeWidth) {
          attrs.opacity = attrs.width = type;
        }
        return attrs;
      }
      function createTween(value, prop, animation) {
        var tween, collection = (Animation.tweeners[prop] || []).concat(Animation.tweeners["*"]), index = 0, length = collection.length;
        for (; index < length; index++) {
          if (tween = collection[index].call(animation, prop, value)) {
            return tween;
          }
        }
      }
      function defaultPrefilter(elem, props, opts) {
        var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display, isBox = "width" in props || "height" in props, anim = this, orig = {}, style = elem.style, hidden = elem.nodeType && isHiddenWithinTree(elem), dataShow = dataPriv.get(elem, "fxshow");
        if (!opts.queue) {
          hooks = jQuery._queueHooks(elem, "fx");
          if (hooks.unqueued == null) {
            hooks.unqueued = 0;
            oldfire = hooks.empty.fire;
            hooks.empty.fire = function() {
              if (!hooks.unqueued) {
                oldfire();
              }
            };
          }
          hooks.unqueued++;
          anim.always(function() {
            anim.always(function() {
              hooks.unqueued--;
              if (!jQuery.queue(elem, "fx").length) {
                hooks.empty.fire();
              }
            });
          });
        }
        for (prop in props) {
          value = props[prop];
          if (rfxtypes.test(value)) {
            delete props[prop];
            toggle = toggle || value === "toggle";
            if (value === (hidden ? "hide" : "show")) {
              if (value === "show" && dataShow && dataShow[prop] !== void 0) {
                hidden = true;
              } else {
                continue;
              }
            }
            orig[prop] = dataShow && dataShow[prop] || jQuery.style(elem, prop);
          }
        }
        propTween = !jQuery.isEmptyObject(props);
        if (!propTween && jQuery.isEmptyObject(orig)) {
          return;
        }
        if (isBox && elem.nodeType === 1) {
          opts.overflow = [style.overflow, style.overflowX, style.overflowY];
          restoreDisplay = dataShow && dataShow.display;
          if (restoreDisplay == null) {
            restoreDisplay = dataPriv.get(elem, "display");
          }
          display = jQuery.css(elem, "display");
          if (display === "none") {
            if (restoreDisplay) {
              display = restoreDisplay;
            } else {
              showHide([elem], true);
              restoreDisplay = elem.style.display || restoreDisplay;
              display = jQuery.css(elem, "display");
              showHide([elem]);
            }
          }
          if (display === "inline" || display === "inline-block" && restoreDisplay != null) {
            if (jQuery.css(elem, "float") === "none") {
              if (!propTween) {
                anim.done(function() {
                  style.display = restoreDisplay;
                });
                if (restoreDisplay == null) {
                  display = style.display;
                  restoreDisplay = display === "none" ? "" : display;
                }
              }
              style.display = "inline-block";
            }
          }
        }
        if (opts.overflow) {
          style.overflow = "hidden";
          anim.always(function() {
            style.overflow = opts.overflow[0];
            style.overflowX = opts.overflow[1];
            style.overflowY = opts.overflow[2];
          });
        }
        propTween = false;
        for (prop in orig) {
          if (!propTween) {
            if (dataShow) {
              if ("hidden" in dataShow) {
                hidden = dataShow.hidden;
              }
            } else {
              dataShow = dataPriv.access(elem, "fxshow", { display: restoreDisplay });
            }
            if (toggle) {
              dataShow.hidden = !hidden;
            }
            if (hidden) {
              showHide([elem], true);
            }
            anim.done(function() {
              if (!hidden) {
                showHide([elem]);
              }
              dataPriv.remove(elem, "fxshow");
              for (prop in orig) {
                jQuery.style(elem, prop, orig[prop]);
              }
            });
          }
          propTween = createTween(hidden ? dataShow[prop] : 0, prop, anim);
          if (!(prop in dataShow)) {
            dataShow[prop] = propTween.start;
            if (hidden) {
              propTween.end = propTween.start;
              propTween.start = 0;
            }
          }
        }
      }
      function propFilter(props, specialEasing) {
        var index, name, easing, value, hooks;
        for (index in props) {
          name = camelCase(index);
          easing = specialEasing[name];
          value = props[index];
          if (Array.isArray(value)) {
            easing = value[1];
            value = props[index] = value[0];
          }
          if (index !== name) {
            props[name] = value;
            delete props[index];
          }
          hooks = jQuery.cssHooks[name];
          if (hooks && "expand" in hooks) {
            value = hooks.expand(value);
            delete props[name];
            for (index in value) {
              if (!(index in props)) {
                props[index] = value[index];
                specialEasing[index] = easing;
              }
            }
          } else {
            specialEasing[name] = easing;
          }
        }
      }
      function Animation(elem, properties, options) {
        var result, stopped, index = 0, length = Animation.prefilters.length, deferred = jQuery.Deferred().always(function() {
          delete tick.elem;
        }), tick = function() {
          if (stopped) {
            return false;
          }
          var currentTime = fxNow || createFxNow(), remaining = Math.max(0, animation.startTime + animation.duration - currentTime), temp = remaining / animation.duration || 0, percent = 1 - temp, index2 = 0, length2 = animation.tweens.length;
          for (; index2 < length2; index2++) {
            animation.tweens[index2].run(percent);
          }
          deferred.notifyWith(elem, [animation, percent, remaining]);
          if (percent < 1 && length2) {
            return remaining;
          }
          if (!length2) {
            deferred.notifyWith(elem, [animation, 1, 0]);
          }
          deferred.resolveWith(elem, [animation]);
          return false;
        }, animation = deferred.promise({
          elem,
          props: jQuery.extend({}, properties),
          opts: jQuery.extend(true, {
            specialEasing: {},
            easing: jQuery.easing._default
          }, options),
          originalProperties: properties,
          originalOptions: options,
          startTime: fxNow || createFxNow(),
          duration: options.duration,
          tweens: [],
          createTween: function(prop, end) {
            var tween = jQuery.Tween(
              elem,
              animation.opts,
              prop,
              end,
              animation.opts.specialEasing[prop] || animation.opts.easing
            );
            animation.tweens.push(tween);
            return tween;
          },
          stop: function(gotoEnd) {
            var index2 = 0, length2 = gotoEnd ? animation.tweens.length : 0;
            if (stopped) {
              return this;
            }
            stopped = true;
            for (; index2 < length2; index2++) {
              animation.tweens[index2].run(1);
            }
            if (gotoEnd) {
              deferred.notifyWith(elem, [animation, 1, 0]);
              deferred.resolveWith(elem, [animation, gotoEnd]);
            } else {
              deferred.rejectWith(elem, [animation, gotoEnd]);
            }
            return this;
          }
        }), props = animation.props;
        propFilter(props, animation.opts.specialEasing);
        for (; index < length; index++) {
          result = Animation.prefilters[index].call(animation, elem, props, animation.opts);
          if (result) {
            if (isFunction(result.stop)) {
              jQuery._queueHooks(animation.elem, animation.opts.queue).stop = result.stop.bind(result);
            }
            return result;
          }
        }
        jQuery.map(props, createTween, animation);
        if (isFunction(animation.opts.start)) {
          animation.opts.start.call(elem, animation);
        }
        animation.progress(animation.opts.progress).done(animation.opts.done, animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);
        jQuery.fx.timer(
          jQuery.extend(tick, {
            elem,
            anim: animation,
            queue: animation.opts.queue
          })
        );
        return animation;
      }
      jQuery.Animation = jQuery.extend(Animation, {
        tweeners: {
          "*": [function(prop, value) {
            var tween = this.createTween(prop, value);
            adjustCSS(tween.elem, prop, rcssNum.exec(value), tween);
            return tween;
          }]
        },
        tweener: function(props, callback) {
          if (isFunction(props)) {
            callback = props;
            props = ["*"];
          } else {
            props = props.match(rnothtmlwhite);
          }
          var prop, index = 0, length = props.length;
          for (; index < length; index++) {
            prop = props[index];
            Animation.tweeners[prop] = Animation.tweeners[prop] || [];
            Animation.tweeners[prop].unshift(callback);
          }
        },
        prefilters: [defaultPrefilter],
        prefilter: function(callback, prepend) {
          if (prepend) {
            Animation.prefilters.unshift(callback);
          } else {
            Animation.prefilters.push(callback);
          }
        }
      });
      jQuery.speed = function(speed, easing, fn) {
        var opt = speed && typeof speed === "object" ? jQuery.extend({}, speed) : {
          complete: fn || !fn && easing || isFunction(speed) && speed,
          duration: speed,
          easing: fn && easing || easing && !isFunction(easing) && easing
        };
        if (jQuery.fx.off) {
          opt.duration = 0;
        } else {
          if (typeof opt.duration !== "number") {
            if (opt.duration in jQuery.fx.speeds) {
              opt.duration = jQuery.fx.speeds[opt.duration];
            } else {
              opt.duration = jQuery.fx.speeds._default;
            }
          }
        }
        if (opt.queue == null || opt.queue === true) {
          opt.queue = "fx";
        }
        opt.old = opt.complete;
        opt.complete = function() {
          if (isFunction(opt.old)) {
            opt.old.call(this);
          }
          if (opt.queue) {
            jQuery.dequeue(this, opt.queue);
          }
        };
        return opt;
      };
      jQuery.fn.extend({
        fadeTo: function(speed, to, easing, callback) {
          return this.filter(isHiddenWithinTree).css("opacity", 0).show().end().animate({ opacity: to }, speed, easing, callback);
        },
        animate: function(prop, speed, easing, callback) {
          var empty = jQuery.isEmptyObject(prop), optall = jQuery.speed(speed, easing, callback), doAnimation = function() {
            var anim = Animation(this, jQuery.extend({}, prop), optall);
            if (empty || dataPriv.get(this, "finish")) {
              anim.stop(true);
            }
          };
          doAnimation.finish = doAnimation;
          return empty || optall.queue === false ? this.each(doAnimation) : this.queue(optall.queue, doAnimation);
        },
        stop: function(type, clearQueue, gotoEnd) {
          var stopQueue = function(hooks) {
            var stop = hooks.stop;
            delete hooks.stop;
            stop(gotoEnd);
          };
          if (typeof type !== "string") {
            gotoEnd = clearQueue;
            clearQueue = type;
            type = void 0;
          }
          if (clearQueue) {
            this.queue(type || "fx", []);
          }
          return this.each(function() {
            var dequeue = true, index = type != null && type + "queueHooks", timers = jQuery.timers, data = dataPriv.get(this);
            if (index) {
              if (data[index] && data[index].stop) {
                stopQueue(data[index]);
              }
            } else {
              for (index in data) {
                if (data[index] && data[index].stop && rrun.test(index)) {
                  stopQueue(data[index]);
                }
              }
            }
            for (index = timers.length; index--; ) {
              if (timers[index].elem === this && (type == null || timers[index].queue === type)) {
                timers[index].anim.stop(gotoEnd);
                dequeue = false;
                timers.splice(index, 1);
              }
            }
            if (dequeue || !gotoEnd) {
              jQuery.dequeue(this, type);
            }
          });
        },
        finish: function(type) {
          if (type !== false) {
            type = type || "fx";
          }
          return this.each(function() {
            var index, data = dataPriv.get(this), queue = data[type + "queue"], hooks = data[type + "queueHooks"], timers = jQuery.timers, length = queue ? queue.length : 0;
            data.finish = true;
            jQuery.queue(this, type, []);
            if (hooks && hooks.stop) {
              hooks.stop.call(this, true);
            }
            for (index = timers.length; index--; ) {
              if (timers[index].elem === this && timers[index].queue === type) {
                timers[index].anim.stop(true);
                timers.splice(index, 1);
              }
            }
            for (index = 0; index < length; index++) {
              if (queue[index] && queue[index].finish) {
                queue[index].finish.call(this);
              }
            }
            delete data.finish;
          });
        }
      });
      jQuery.each(["toggle", "show", "hide"], function(_i, name) {
        var cssFn = jQuery.fn[name];
        jQuery.fn[name] = function(speed, easing, callback) {
          return speed == null || typeof speed === "boolean" ? cssFn.apply(this, arguments) : this.animate(genFx(name, true), speed, easing, callback);
        };
      });
      jQuery.each({
        slideDown: genFx("show"),
        slideUp: genFx("hide"),
        slideToggle: genFx("toggle"),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" }
      }, function(name, props) {
        jQuery.fn[name] = function(speed, easing, callback) {
          return this.animate(props, speed, easing, callback);
        };
      });
      jQuery.timers = [];
      jQuery.fx.tick = function() {
        var timer, i = 0, timers = jQuery.timers;
        fxNow = Date.now();
        for (; i < timers.length; i++) {
          timer = timers[i];
          if (!timer() && timers[i] === timer) {
            timers.splice(i--, 1);
          }
        }
        if (!timers.length) {
          jQuery.fx.stop();
        }
        fxNow = void 0;
      };
      jQuery.fx.timer = function(timer) {
        jQuery.timers.push(timer);
        jQuery.fx.start();
      };
      jQuery.fx.interval = 13;
      jQuery.fx.start = function() {
        if (inProgress) {
          return;
        }
        inProgress = true;
        schedule();
      };
      jQuery.fx.stop = function() {
        inProgress = null;
      };
      jQuery.fx.speeds = {
        slow: 600,
        fast: 200,
        // Default speed
        _default: 400
      };
      jQuery.fn.delay = function(time, type) {
        time = jQuery.fx ? jQuery.fx.speeds[time] || time : time;
        type = type || "fx";
        return this.queue(type, function(next, hooks) {
          var timeout = window2.setTimeout(next, time);
          hooks.stop = function() {
            window2.clearTimeout(timeout);
          };
        });
      };
      (function() {
        var input = document2.createElement("input"), select = document2.createElement("select"), opt = select.appendChild(document2.createElement("option"));
        input.type = "checkbox";
        support.checkOn = input.value !== "";
        support.optSelected = opt.selected;
        input = document2.createElement("input");
        input.value = "t";
        input.type = "radio";
        support.radioValue = input.value === "t";
      })();
      var boolHook, attrHandle = jQuery.expr.attrHandle;
      jQuery.fn.extend({
        attr: function(name, value) {
          return access(this, jQuery.attr, name, value, arguments.length > 1);
        },
        removeAttr: function(name) {
          return this.each(function() {
            jQuery.removeAttr(this, name);
          });
        }
      });
      jQuery.extend({
        attr: function(elem, name, value) {
          var ret, hooks, nType = elem.nodeType;
          if (nType === 3 || nType === 8 || nType === 2) {
            return;
          }
          if (typeof elem.getAttribute === "undefined") {
            return jQuery.prop(elem, name, value);
          }
          if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
            hooks = jQuery.attrHooks[name.toLowerCase()] || (jQuery.expr.match.bool.test(name) ? boolHook : void 0);
          }
          if (value !== void 0) {
            if (value === null) {
              jQuery.removeAttr(elem, name);
              return;
            }
            if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== void 0) {
              return ret;
            }
            elem.setAttribute(name, value + "");
            return value;
          }
          if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
            return ret;
          }
          ret = jQuery.find.attr(elem, name);
          return ret == null ? void 0 : ret;
        },
        attrHooks: {
          type: {
            set: function(elem, value) {
              if (!support.radioValue && value === "radio" && nodeName(elem, "input")) {
                var val = elem.value;
                elem.setAttribute("type", value);
                if (val) {
                  elem.value = val;
                }
                return value;
              }
            }
          }
        },
        removeAttr: function(elem, value) {
          var name, i = 0, attrNames = value && value.match(rnothtmlwhite);
          if (attrNames && elem.nodeType === 1) {
            while (name = attrNames[i++]) {
              elem.removeAttribute(name);
            }
          }
        }
      });
      boolHook = {
        set: function(elem, value, name) {
          if (value === false) {
            jQuery.removeAttr(elem, name);
          } else {
            elem.setAttribute(name, name);
          }
          return name;
        }
      };
      jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g), function(_i, name) {
        var getter = attrHandle[name] || jQuery.find.attr;
        attrHandle[name] = function(elem, name2, isXML) {
          var ret, handle, lowercaseName = name2.toLowerCase();
          if (!isXML) {
            handle = attrHandle[lowercaseName];
            attrHandle[lowercaseName] = ret;
            ret = getter(elem, name2, isXML) != null ? lowercaseName : null;
            attrHandle[lowercaseName] = handle;
          }
          return ret;
        };
      });
      var rfocusable = /^(?:input|select|textarea|button)$/i, rclickable = /^(?:a|area)$/i;
      jQuery.fn.extend({
        prop: function(name, value) {
          return access(this, jQuery.prop, name, value, arguments.length > 1);
        },
        removeProp: function(name) {
          return this.each(function() {
            delete this[jQuery.propFix[name] || name];
          });
        }
      });
      jQuery.extend({
        prop: function(elem, name, value) {
          var ret, hooks, nType = elem.nodeType;
          if (nType === 3 || nType === 8 || nType === 2) {
            return;
          }
          if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
            name = jQuery.propFix[name] || name;
            hooks = jQuery.propHooks[name];
          }
          if (value !== void 0) {
            if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== void 0) {
              return ret;
            }
            return elem[name] = value;
          }
          if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
            return ret;
          }
          return elem[name];
        },
        propHooks: {
          tabIndex: {
            get: function(elem) {
              var tabindex = jQuery.find.attr(elem, "tabindex");
              if (tabindex) {
                return parseInt(tabindex, 10);
              }
              if (rfocusable.test(elem.nodeName) || rclickable.test(elem.nodeName) && elem.href) {
                return 0;
              }
              return -1;
            }
          }
        },
        propFix: {
          "for": "htmlFor",
          "class": "className"
        }
      });
      if (!support.optSelected) {
        jQuery.propHooks.selected = {
          get: function(elem) {
            var parent = elem.parentNode;
            if (parent && parent.parentNode) {
              parent.parentNode.selectedIndex;
            }
            return null;
          },
          set: function(elem) {
            var parent = elem.parentNode;
            if (parent) {
              parent.selectedIndex;
              if (parent.parentNode) {
                parent.parentNode.selectedIndex;
              }
            }
          }
        };
      }
      jQuery.each([
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
        jQuery.propFix[this.toLowerCase()] = this;
      });
      function stripAndCollapse(value) {
        var tokens = value.match(rnothtmlwhite) || [];
        return tokens.join(" ");
      }
      function getClass(elem) {
        return elem.getAttribute && elem.getAttribute("class") || "";
      }
      function classesToArray(value) {
        if (Array.isArray(value)) {
          return value;
        }
        if (typeof value === "string") {
          return value.match(rnothtmlwhite) || [];
        }
        return [];
      }
      jQuery.fn.extend({
        addClass: function(value) {
          var classNames, cur, curValue, className, i, finalValue;
          if (isFunction(value)) {
            return this.each(function(j) {
              jQuery(this).addClass(value.call(this, j, getClass(this)));
            });
          }
          classNames = classesToArray(value);
          if (classNames.length) {
            return this.each(function() {
              curValue = getClass(this);
              cur = this.nodeType === 1 && " " + stripAndCollapse(curValue) + " ";
              if (cur) {
                for (i = 0; i < classNames.length; i++) {
                  className = classNames[i];
                  if (cur.indexOf(" " + className + " ") < 0) {
                    cur += className + " ";
                  }
                }
                finalValue = stripAndCollapse(cur);
                if (curValue !== finalValue) {
                  this.setAttribute("class", finalValue);
                }
              }
            });
          }
          return this;
        },
        removeClass: function(value) {
          var classNames, cur, curValue, className, i, finalValue;
          if (isFunction(value)) {
            return this.each(function(j) {
              jQuery(this).removeClass(value.call(this, j, getClass(this)));
            });
          }
          if (!arguments.length) {
            return this.attr("class", "");
          }
          classNames = classesToArray(value);
          if (classNames.length) {
            return this.each(function() {
              curValue = getClass(this);
              cur = this.nodeType === 1 && " " + stripAndCollapse(curValue) + " ";
              if (cur) {
                for (i = 0; i < classNames.length; i++) {
                  className = classNames[i];
                  while (cur.indexOf(" " + className + " ") > -1) {
                    cur = cur.replace(" " + className + " ", " ");
                  }
                }
                finalValue = stripAndCollapse(cur);
                if (curValue !== finalValue) {
                  this.setAttribute("class", finalValue);
                }
              }
            });
          }
          return this;
        },
        toggleClass: function(value, stateVal) {
          var classNames, className, i, self, type = typeof value, isValidValue = type === "string" || Array.isArray(value);
          if (isFunction(value)) {
            return this.each(function(i2) {
              jQuery(this).toggleClass(
                value.call(this, i2, getClass(this), stateVal),
                stateVal
              );
            });
          }
          if (typeof stateVal === "boolean" && isValidValue) {
            return stateVal ? this.addClass(value) : this.removeClass(value);
          }
          classNames = classesToArray(value);
          return this.each(function() {
            if (isValidValue) {
              self = jQuery(this);
              for (i = 0; i < classNames.length; i++) {
                className = classNames[i];
                if (self.hasClass(className)) {
                  self.removeClass(className);
                } else {
                  self.addClass(className);
                }
              }
            } else if (value === void 0 || type === "boolean") {
              className = getClass(this);
              if (className) {
                dataPriv.set(this, "__className__", className);
              }
              if (this.setAttribute) {
                this.setAttribute(
                  "class",
                  className || value === false ? "" : dataPriv.get(this, "__className__") || ""
                );
              }
            }
          });
        },
        hasClass: function(selector) {
          var className, elem, i = 0;
          className = " " + selector + " ";
          while (elem = this[i++]) {
            if (elem.nodeType === 1 && (" " + stripAndCollapse(getClass(elem)) + " ").indexOf(className) > -1) {
              return true;
            }
          }
          return false;
        }
      });
      var rreturn = /\r/g;
      jQuery.fn.extend({
        val: function(value) {
          var hooks, ret, valueIsFunction, elem = this[0];
          if (!arguments.length) {
            if (elem) {
              hooks = jQuery.valHooks[elem.type] || jQuery.valHooks[elem.nodeName.toLowerCase()];
              if (hooks && "get" in hooks && (ret = hooks.get(elem, "value")) !== void 0) {
                return ret;
              }
              ret = elem.value;
              if (typeof ret === "string") {
                return ret.replace(rreturn, "");
              }
              return ret == null ? "" : ret;
            }
            return;
          }
          valueIsFunction = isFunction(value);
          return this.each(function(i) {
            var val;
            if (this.nodeType !== 1) {
              return;
            }
            if (valueIsFunction) {
              val = value.call(this, i, jQuery(this).val());
            } else {
              val = value;
            }
            if (val == null) {
              val = "";
            } else if (typeof val === "number") {
              val += "";
            } else if (Array.isArray(val)) {
              val = jQuery.map(val, function(value2) {
                return value2 == null ? "" : value2 + "";
              });
            }
            hooks = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()];
            if (!hooks || !("set" in hooks) || hooks.set(this, val, "value") === void 0) {
              this.value = val;
            }
          });
        }
      });
      jQuery.extend({
        valHooks: {
          option: {
            get: function(elem) {
              var val = jQuery.find.attr(elem, "value");
              return val != null ? val : (
                // Support: IE <=10 - 11 only
                // option.text throws exceptions (trac-14686, trac-14858)
                // Strip and collapse whitespace
                // https://html.spec.whatwg.org/#strip-and-collapse-whitespace
                stripAndCollapse(jQuery.text(elem))
              );
            }
          },
          select: {
            get: function(elem) {
              var value, option, i, options = elem.options, index = elem.selectedIndex, one = elem.type === "select-one", values = one ? null : [], max = one ? index + 1 : options.length;
              if (index < 0) {
                i = max;
              } else {
                i = one ? index : 0;
              }
              for (; i < max; i++) {
                option = options[i];
                if ((option.selected || i === index) && // Don't return options that are disabled or in a disabled optgroup
                !option.disabled && (!option.parentNode.disabled || !nodeName(option.parentNode, "optgroup"))) {
                  value = jQuery(option).val();
                  if (one) {
                    return value;
                  }
                  values.push(value);
                }
              }
              return values;
            },
            set: function(elem, value) {
              var optionSet, option, options = elem.options, values = jQuery.makeArray(value), i = options.length;
              while (i--) {
                option = options[i];
                if (option.selected = jQuery.inArray(jQuery.valHooks.option.get(option), values) > -1) {
                  optionSet = true;
                }
              }
              if (!optionSet) {
                elem.selectedIndex = -1;
              }
              return values;
            }
          }
        }
      });
      jQuery.each(["radio", "checkbox"], function() {
        jQuery.valHooks[this] = {
          set: function(elem, value) {
            if (Array.isArray(value)) {
              return elem.checked = jQuery.inArray(jQuery(elem).val(), value) > -1;
            }
          }
        };
        if (!support.checkOn) {
          jQuery.valHooks[this].get = function(elem) {
            return elem.getAttribute("value") === null ? "on" : elem.value;
          };
        }
      });
      var location2 = window2.location;
      var nonce = { guid: Date.now() };
      var rquery = /\?/;
      jQuery.parseXML = function(data) {
        var xml, parserErrorElem;
        if (!data || typeof data !== "string") {
          return null;
        }
        try {
          xml = new window2.DOMParser().parseFromString(data, "text/xml");
        } catch (e) {
        }
        parserErrorElem = xml && xml.getElementsByTagName("parsererror")[0];
        if (!xml || parserErrorElem) {
          jQuery.error("Invalid XML: " + (parserErrorElem ? jQuery.map(parserErrorElem.childNodes, function(el) {
            return el.textContent;
          }).join("\n") : data));
        }
        return xml;
      };
      var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/, stopPropagationCallback = function(e) {
        e.stopPropagation();
      };
      jQuery.extend(jQuery.event, {
        trigger: function(event, data, elem, onlyHandlers) {
          var i, cur, tmp, bubbleType, ontype, handle, special, lastElement, eventPath = [elem || document2], type = hasOwn.call(event, "type") ? event.type : event, namespaces = hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];
          cur = lastElement = tmp = elem = elem || document2;
          if (elem.nodeType === 3 || elem.nodeType === 8) {
            return;
          }
          if (rfocusMorph.test(type + jQuery.event.triggered)) {
            return;
          }
          if (type.indexOf(".") > -1) {
            namespaces = type.split(".");
            type = namespaces.shift();
            namespaces.sort();
          }
          ontype = type.indexOf(":") < 0 && "on" + type;
          event = event[jQuery.expando] ? event : new jQuery.Event(type, typeof event === "object" && event);
          event.isTrigger = onlyHandlers ? 2 : 3;
          event.namespace = namespaces.join(".");
          event.rnamespace = event.namespace ? new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
          event.result = void 0;
          if (!event.target) {
            event.target = elem;
          }
          data = data == null ? [event] : jQuery.makeArray(data, [event]);
          special = jQuery.event.special[type] || {};
          if (!onlyHandlers && special.trigger && special.trigger.apply(elem, data) === false) {
            return;
          }
          if (!onlyHandlers && !special.noBubble && !isWindow(elem)) {
            bubbleType = special.delegateType || type;
            if (!rfocusMorph.test(bubbleType + type)) {
              cur = cur.parentNode;
            }
            for (; cur; cur = cur.parentNode) {
              eventPath.push(cur);
              tmp = cur;
            }
            if (tmp === (elem.ownerDocument || document2)) {
              eventPath.push(tmp.defaultView || tmp.parentWindow || window2);
            }
          }
          i = 0;
          while ((cur = eventPath[i++]) && !event.isPropagationStopped()) {
            lastElement = cur;
            event.type = i > 1 ? bubbleType : special.bindType || type;
            handle = (dataPriv.get(cur, "events") || /* @__PURE__ */ Object.create(null))[event.type] && dataPriv.get(cur, "handle");
            if (handle) {
              handle.apply(cur, data);
            }
            handle = ontype && cur[ontype];
            if (handle && handle.apply && acceptData(cur)) {
              event.result = handle.apply(cur, data);
              if (event.result === false) {
                event.preventDefault();
              }
            }
          }
          event.type = type;
          if (!onlyHandlers && !event.isDefaultPrevented()) {
            if ((!special._default || special._default.apply(eventPath.pop(), data) === false) && acceptData(elem)) {
              if (ontype && isFunction(elem[type]) && !isWindow(elem)) {
                tmp = elem[ontype];
                if (tmp) {
                  elem[ontype] = null;
                }
                jQuery.event.triggered = type;
                if (event.isPropagationStopped()) {
                  lastElement.addEventListener(type, stopPropagationCallback);
                }
                elem[type]();
                if (event.isPropagationStopped()) {
                  lastElement.removeEventListener(type, stopPropagationCallback);
                }
                jQuery.event.triggered = void 0;
                if (tmp) {
                  elem[ontype] = tmp;
                }
              }
            }
          }
          return event.result;
        },
        // Piggyback on a donor event to simulate a different one
        // Used only for `focus(in | out)` events
        simulate: function(type, elem, event) {
          var e = jQuery.extend(
            new jQuery.Event(),
            event,
            {
              type,
              isSimulated: true
            }
          );
          jQuery.event.trigger(e, null, elem);
        }
      });
      jQuery.fn.extend({
        trigger: function(type, data) {
          return this.each(function() {
            jQuery.event.trigger(type, data, this);
          });
        },
        triggerHandler: function(type, data) {
          var elem = this[0];
          if (elem) {
            return jQuery.event.trigger(type, data, elem, true);
          }
        }
      });
      var rbracket = /\[\]$/, rCRLF = /\r?\n/g, rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i, rsubmittable = /^(?:input|select|textarea|keygen)/i;
      function buildParams(prefix, obj, traditional, add) {
        var name;
        if (Array.isArray(obj)) {
          jQuery.each(obj, function(i, v) {
            if (traditional || rbracket.test(prefix)) {
              add(prefix, v);
            } else {
              buildParams(
                prefix + "[" + (typeof v === "object" && v != null ? i : "") + "]",
                v,
                traditional,
                add
              );
            }
          });
        } else if (!traditional && toType(obj) === "object") {
          for (name in obj) {
            buildParams(prefix + "[" + name + "]", obj[name], traditional, add);
          }
        } else {
          add(prefix, obj);
        }
      }
      jQuery.param = function(a, traditional) {
        var prefix, s = [], add = function(key, valueOrFunction) {
          var value = isFunction(valueOrFunction) ? valueOrFunction() : valueOrFunction;
          s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value == null ? "" : value);
        };
        if (a == null) {
          return "";
        }
        if (Array.isArray(a) || a.jquery && !jQuery.isPlainObject(a)) {
          jQuery.each(a, function() {
            add(this.name, this.value);
          });
        } else {
          for (prefix in a) {
            buildParams(prefix, a[prefix], traditional, add);
          }
        }
        return s.join("&");
      };
      jQuery.fn.extend({
        serialize: function() {
          return jQuery.param(this.serializeArray());
        },
        serializeArray: function() {
          return this.map(function() {
            var elements = jQuery.prop(this, "elements");
            return elements ? jQuery.makeArray(elements) : this;
          }).filter(function() {
            var type = this.type;
            return this.name && !jQuery(this).is(":disabled") && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !rcheckableType.test(type));
          }).map(function(_i, elem) {
            var val = jQuery(this).val();
            if (val == null) {
              return null;
            }
            if (Array.isArray(val)) {
              return jQuery.map(val, function(val2) {
                return { name: elem.name, value: val2.replace(rCRLF, "\r\n") };
              });
            }
            return { name: elem.name, value: val.replace(rCRLF, "\r\n") };
          }).get();
        }
      });
      var r20 = /%20/g, rhash = /#.*$/, rantiCache = /([?&])_=[^&]*/, rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg, rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, rnoContent = /^(?:GET|HEAD)$/, rprotocol = /^\/\//, prefilters = {}, transports = {}, allTypes = "*/".concat("*"), originAnchor = document2.createElement("a");
      originAnchor.href = location2.href;
      function addToPrefiltersOrTransports(structure) {
        return function(dataTypeExpression, func) {
          if (typeof dataTypeExpression !== "string") {
            func = dataTypeExpression;
            dataTypeExpression = "*";
          }
          var dataType, i = 0, dataTypes = dataTypeExpression.toLowerCase().match(rnothtmlwhite) || [];
          if (isFunction(func)) {
            while (dataType = dataTypes[i++]) {
              if (dataType[0] === "+") {
                dataType = dataType.slice(1) || "*";
                (structure[dataType] = structure[dataType] || []).unshift(func);
              } else {
                (structure[dataType] = structure[dataType] || []).push(func);
              }
            }
          }
        };
      }
      function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {
        var inspected = {}, seekingTransport = structure === transports;
        function inspect(dataType) {
          var selected;
          inspected[dataType] = true;
          jQuery.each(structure[dataType] || [], function(_, prefilterOrFactory) {
            var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);
            if (typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[dataTypeOrTransport]) {
              options.dataTypes.unshift(dataTypeOrTransport);
              inspect(dataTypeOrTransport);
              return false;
            } else if (seekingTransport) {
              return !(selected = dataTypeOrTransport);
            }
          });
          return selected;
        }
        return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*");
      }
      function ajaxExtend(target, src) {
        var key, deep, flatOptions = jQuery.ajaxSettings.flatOptions || {};
        for (key in src) {
          if (src[key] !== void 0) {
            (flatOptions[key] ? target : deep || (deep = {}))[key] = src[key];
          }
        }
        if (deep) {
          jQuery.extend(true, target, deep);
        }
        return target;
      }
      function ajaxHandleResponses(s, jqXHR, responses) {
        var ct, type, finalDataType, firstDataType, contents = s.contents, dataTypes = s.dataTypes;
        while (dataTypes[0] === "*") {
          dataTypes.shift();
          if (ct === void 0) {
            ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
          }
        }
        if (ct) {
          for (type in contents) {
            if (contents[type] && contents[type].test(ct)) {
              dataTypes.unshift(type);
              break;
            }
          }
        }
        if (dataTypes[0] in responses) {
          finalDataType = dataTypes[0];
        } else {
          for (type in responses) {
            if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) {
              finalDataType = type;
              break;
            }
            if (!firstDataType) {
              firstDataType = type;
            }
          }
          finalDataType = finalDataType || firstDataType;
        }
        if (finalDataType) {
          if (finalDataType !== dataTypes[0]) {
            dataTypes.unshift(finalDataType);
          }
          return responses[finalDataType];
        }
      }
      function ajaxConvert(s, response, jqXHR, isSuccess) {
        var conv2, current, conv, tmp, prev, converters = {}, dataTypes = s.dataTypes.slice();
        if (dataTypes[1]) {
          for (conv in s.converters) {
            converters[conv.toLowerCase()] = s.converters[conv];
          }
        }
        current = dataTypes.shift();
        while (current) {
          if (s.responseFields[current]) {
            jqXHR[s.responseFields[current]] = response;
          }
          if (!prev && isSuccess && s.dataFilter) {
            response = s.dataFilter(response, s.dataType);
          }
          prev = current;
          current = dataTypes.shift();
          if (current) {
            if (current === "*") {
              current = prev;
            } else if (prev !== "*" && prev !== current) {
              conv = converters[prev + " " + current] || converters["* " + current];
              if (!conv) {
                for (conv2 in converters) {
                  tmp = conv2.split(" ");
                  if (tmp[1] === current) {
                    conv = converters[prev + " " + tmp[0]] || converters["* " + tmp[0]];
                    if (conv) {
                      if (conv === true) {
                        conv = converters[conv2];
                      } else if (converters[conv2] !== true) {
                        current = tmp[0];
                        dataTypes.unshift(tmp[1]);
                      }
                      break;
                    }
                  }
                }
              }
              if (conv !== true) {
                if (conv && s.throws) {
                  response = conv(response);
                } else {
                  try {
                    response = conv(response);
                  } catch (e) {
                    return {
                      state: "parsererror",
                      error: conv ? e : "No conversion from " + prev + " to " + current
                    };
                  }
                }
              }
            }
          }
        }
        return { state: "success", data: response };
      }
      jQuery.extend({
        // Counter for holding the number of active queries
        active: 0,
        // Last-Modified header cache for next request
        lastModified: {},
        etag: {},
        ajaxSettings: {
          url: location2.href,
          type: "GET",
          isLocal: rlocalProtocol.test(location2.protocol),
          global: true,
          processData: true,
          async: true,
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
            "*": allTypes,
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
            "text html": true,
            // Evaluate text as a json expression
            "text json": JSON.parse,
            // Parse text as xml
            "text xml": jQuery.parseXML
          },
          // For options that shouldn't be deep extended:
          // you can add your own custom options here if
          // and when you create one that shouldn't be
          // deep extended (see ajaxExtend)
          flatOptions: {
            url: true,
            context: true
          }
        },
        // Creates a full fledged settings object into target
        // with both ajaxSettings and settings fields.
        // If target is omitted, writes into ajaxSettings.
        ajaxSetup: function(target, settings) {
          return settings ? (
            // Building a settings object
            ajaxExtend(ajaxExtend(target, jQuery.ajaxSettings), settings)
          ) : (
            // Extending ajaxSettings
            ajaxExtend(jQuery.ajaxSettings, target)
          );
        },
        ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
        ajaxTransport: addToPrefiltersOrTransports(transports),
        // Main method
        ajax: function(url, options) {
          if (typeof url === "object") {
            options = url;
            url = void 0;
          }
          options = options || {};
          var transport, cacheURL, responseHeadersString, responseHeaders, timeoutTimer, urlAnchor, completed2, fireGlobals, i, uncached, s = jQuery.ajaxSetup({}, options), callbackContext = s.context || s, globalEventContext = s.context && (callbackContext.nodeType || callbackContext.jquery) ? jQuery(callbackContext) : jQuery.event, deferred = jQuery.Deferred(), completeDeferred = jQuery.Callbacks("once memory"), statusCode = s.statusCode || {}, requestHeaders = {}, requestHeadersNames = {}, strAbort = "canceled", jqXHR = {
            readyState: 0,
            // Builds headers hashtable if needed
            getResponseHeader: function(key) {
              var match;
              if (completed2) {
                if (!responseHeaders) {
                  responseHeaders = {};
                  while (match = rheaders.exec(responseHeadersString)) {
                    responseHeaders[match[1].toLowerCase() + " "] = (responseHeaders[match[1].toLowerCase() + " "] || []).concat(match[2]);
                  }
                }
                match = responseHeaders[key.toLowerCase() + " "];
              }
              return match == null ? null : match.join(", ");
            },
            // Raw string
            getAllResponseHeaders: function() {
              return completed2 ? responseHeadersString : null;
            },
            // Caches the header
            setRequestHeader: function(name, value) {
              if (completed2 == null) {
                name = requestHeadersNames[name.toLowerCase()] = requestHeadersNames[name.toLowerCase()] || name;
                requestHeaders[name] = value;
              }
              return this;
            },
            // Overrides response content-type header
            overrideMimeType: function(type) {
              if (completed2 == null) {
                s.mimeType = type;
              }
              return this;
            },
            // Status-dependent callbacks
            statusCode: function(map) {
              var code;
              if (map) {
                if (completed2) {
                  jqXHR.always(map[jqXHR.status]);
                } else {
                  for (code in map) {
                    statusCode[code] = [statusCode[code], map[code]];
                  }
                }
              }
              return this;
            },
            // Cancel the request
            abort: function(statusText) {
              var finalText = statusText || strAbort;
              if (transport) {
                transport.abort(finalText);
              }
              done(0, finalText);
              return this;
            }
          };
          deferred.promise(jqXHR);
          s.url = ((url || s.url || location2.href) + "").replace(rprotocol, location2.protocol + "//");
          s.type = options.method || options.type || s.method || s.type;
          s.dataTypes = (s.dataType || "*").toLowerCase().match(rnothtmlwhite) || [""];
          if (s.crossDomain == null) {
            urlAnchor = document2.createElement("a");
            try {
              urlAnchor.href = s.url;
              urlAnchor.href = urlAnchor.href;
              s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !== urlAnchor.protocol + "//" + urlAnchor.host;
            } catch (e) {
              s.crossDomain = true;
            }
          }
          if (s.data && s.processData && typeof s.data !== "string") {
            s.data = jQuery.param(s.data, s.traditional);
          }
          inspectPrefiltersOrTransports(prefilters, s, options, jqXHR);
          if (completed2) {
            return jqXHR;
          }
          fireGlobals = jQuery.event && s.global;
          if (fireGlobals && jQuery.active++ === 0) {
            jQuery.event.trigger("ajaxStart");
          }
          s.type = s.type.toUpperCase();
          s.hasContent = !rnoContent.test(s.type);
          cacheURL = s.url.replace(rhash, "");
          if (!s.hasContent) {
            uncached = s.url.slice(cacheURL.length);
            if (s.data && (s.processData || typeof s.data === "string")) {
              cacheURL += (rquery.test(cacheURL) ? "&" : "?") + s.data;
              delete s.data;
            }
            if (s.cache === false) {
              cacheURL = cacheURL.replace(rantiCache, "$1");
              uncached = (rquery.test(cacheURL) ? "&" : "?") + "_=" + nonce.guid++ + uncached;
            }
            s.url = cacheURL + uncached;
          } else if (s.data && s.processData && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0) {
            s.data = s.data.replace(r20, "+");
          }
          if (s.ifModified) {
            if (jQuery.lastModified[cacheURL]) {
              jqXHR.setRequestHeader("If-Modified-Since", jQuery.lastModified[cacheURL]);
            }
            if (jQuery.etag[cacheURL]) {
              jqXHR.setRequestHeader("If-None-Match", jQuery.etag[cacheURL]);
            }
          }
          if (s.data && s.hasContent && s.contentType !== false || options.contentType) {
            jqXHR.setRequestHeader("Content-Type", s.contentType);
          }
          jqXHR.setRequestHeader(
            "Accept",
            s.dataTypes[0] && s.accepts[s.dataTypes[0]] ? s.accepts[s.dataTypes[0]] + (s.dataTypes[0] !== "*" ? ", " + allTypes + "; q=0.01" : "") : s.accepts["*"]
          );
          for (i in s.headers) {
            jqXHR.setRequestHeader(i, s.headers[i]);
          }
          if (s.beforeSend && (s.beforeSend.call(callbackContext, jqXHR, s) === false || completed2)) {
            return jqXHR.abort();
          }
          strAbort = "abort";
          completeDeferred.add(s.complete);
          jqXHR.done(s.success);
          jqXHR.fail(s.error);
          transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR);
          if (!transport) {
            done(-1, "No Transport");
          } else {
            jqXHR.readyState = 1;
            if (fireGlobals) {
              globalEventContext.trigger("ajaxSend", [jqXHR, s]);
            }
            if (completed2) {
              return jqXHR;
            }
            if (s.async && s.timeout > 0) {
              timeoutTimer = window2.setTimeout(function() {
                jqXHR.abort("timeout");
              }, s.timeout);
            }
            try {
              completed2 = false;
              transport.send(requestHeaders, done);
            } catch (e) {
              if (completed2) {
                throw e;
              }
              done(-1, e);
            }
          }
          function done(status, nativeStatusText, responses, headers) {
            var isSuccess, success, error, response, modified, statusText = nativeStatusText;
            if (completed2) {
              return;
            }
            completed2 = true;
            if (timeoutTimer) {
              window2.clearTimeout(timeoutTimer);
            }
            transport = void 0;
            responseHeadersString = headers || "";
            jqXHR.readyState = status > 0 ? 4 : 0;
            isSuccess = status >= 200 && status < 300 || status === 304;
            if (responses) {
              response = ajaxHandleResponses(s, jqXHR, responses);
            }
            if (!isSuccess && jQuery.inArray("script", s.dataTypes) > -1 && jQuery.inArray("json", s.dataTypes) < 0) {
              s.converters["text script"] = function() {
              };
            }
            response = ajaxConvert(s, response, jqXHR, isSuccess);
            if (isSuccess) {
              if (s.ifModified) {
                modified = jqXHR.getResponseHeader("Last-Modified");
                if (modified) {
                  jQuery.lastModified[cacheURL] = modified;
                }
                modified = jqXHR.getResponseHeader("etag");
                if (modified) {
                  jQuery.etag[cacheURL] = modified;
                }
              }
              if (status === 204 || s.type === "HEAD") {
                statusText = "nocontent";
              } else if (status === 304) {
                statusText = "notmodified";
              } else {
                statusText = response.state;
                success = response.data;
                error = response.error;
                isSuccess = !error;
              }
            } else {
              error = statusText;
              if (status || !statusText) {
                statusText = "error";
                if (status < 0) {
                  status = 0;
                }
              }
            }
            jqXHR.status = status;
            jqXHR.statusText = (nativeStatusText || statusText) + "";
            if (isSuccess) {
              deferred.resolveWith(callbackContext, [success, statusText, jqXHR]);
            } else {
              deferred.rejectWith(callbackContext, [jqXHR, statusText, error]);
            }
            jqXHR.statusCode(statusCode);
            statusCode = void 0;
            if (fireGlobals) {
              globalEventContext.trigger(
                isSuccess ? "ajaxSuccess" : "ajaxError",
                [jqXHR, s, isSuccess ? success : error]
              );
            }
            completeDeferred.fireWith(callbackContext, [jqXHR, statusText]);
            if (fireGlobals) {
              globalEventContext.trigger("ajaxComplete", [jqXHR, s]);
              if (!--jQuery.active) {
                jQuery.event.trigger("ajaxStop");
              }
            }
          }
          return jqXHR;
        },
        getJSON: function(url, data, callback) {
          return jQuery.get(url, data, callback, "json");
        },
        getScript: function(url, callback) {
          return jQuery.get(url, void 0, callback, "script");
        }
      });
      jQuery.each(["get", "post"], function(_i, method) {
        jQuery[method] = function(url, data, callback, type) {
          if (isFunction(data)) {
            type = type || callback;
            callback = data;
            data = void 0;
          }
          return jQuery.ajax(jQuery.extend({
            url,
            type: method,
            dataType: type,
            data,
            success: callback
          }, jQuery.isPlainObject(url) && url));
        };
      });
      jQuery.ajaxPrefilter(function(s) {
        var i;
        for (i in s.headers) {
          if (i.toLowerCase() === "content-type") {
            s.contentType = s.headers[i] || "";
          }
        }
      });
      jQuery._evalUrl = function(url, options, doc) {
        return jQuery.ajax({
          url,
          // Make this explicit, since user can override this through ajaxSetup (trac-11264)
          type: "GET",
          dataType: "script",
          cache: true,
          async: false,
          global: false,
          // Only evaluate the response if it is successful (gh-4126)
          // dataFilter is not invoked for failure responses, so using it instead
          // of the default converter is kludgy but it works.
          converters: {
            "text script": function() {
            }
          },
          dataFilter: function(response) {
            jQuery.globalEval(response, options, doc);
          }
        });
      };
      jQuery.fn.extend({
        wrapAll: function(html) {
          var wrap;
          if (this[0]) {
            if (isFunction(html)) {
              html = html.call(this[0]);
            }
            wrap = jQuery(html, this[0].ownerDocument).eq(0).clone(true);
            if (this[0].parentNode) {
              wrap.insertBefore(this[0]);
            }
            wrap.map(function() {
              var elem = this;
              while (elem.firstElementChild) {
                elem = elem.firstElementChild;
              }
              return elem;
            }).append(this);
          }
          return this;
        },
        wrapInner: function(html) {
          if (isFunction(html)) {
            return this.each(function(i) {
              jQuery(this).wrapInner(html.call(this, i));
            });
          }
          return this.each(function() {
            var self = jQuery(this), contents = self.contents();
            if (contents.length) {
              contents.wrapAll(html);
            } else {
              self.append(html);
            }
          });
        },
        wrap: function(html) {
          var htmlIsFunction = isFunction(html);
          return this.each(function(i) {
            jQuery(this).wrapAll(htmlIsFunction ? html.call(this, i) : html);
          });
        },
        unwrap: function(selector) {
          this.parent(selector).not("body").each(function() {
            jQuery(this).replaceWith(this.childNodes);
          });
          return this;
        }
      });
      jQuery.expr.pseudos.hidden = function(elem) {
        return !jQuery.expr.pseudos.visible(elem);
      };
      jQuery.expr.pseudos.visible = function(elem) {
        return !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length);
      };
      jQuery.ajaxSettings.xhr = function() {
        try {
          return new window2.XMLHttpRequest();
        } catch (e) {
        }
      };
      var xhrSuccessStatus = {
        // File protocol always yields status code 0, assume 200
        0: 200,
        // Support: IE <=9 only
        // trac-1450: sometimes IE returns 1223 when it should be 204
        1223: 204
      }, xhrSupported = jQuery.ajaxSettings.xhr();
      support.cors = !!xhrSupported && "withCredentials" in xhrSupported;
      support.ajax = xhrSupported = !!xhrSupported;
      jQuery.ajaxTransport(function(options) {
        var callback, errorCallback;
        if (support.cors || xhrSupported && !options.crossDomain) {
          return {
            send: function(headers, complete) {
              var i, xhr = options.xhr();
              xhr.open(
                options.type,
                options.url,
                options.async,
                options.username,
                options.password
              );
              if (options.xhrFields) {
                for (i in options.xhrFields) {
                  xhr[i] = options.xhrFields[i];
                }
              }
              if (options.mimeType && xhr.overrideMimeType) {
                xhr.overrideMimeType(options.mimeType);
              }
              if (!options.crossDomain && !headers["X-Requested-With"]) {
                headers["X-Requested-With"] = "XMLHttpRequest";
              }
              for (i in headers) {
                xhr.setRequestHeader(i, headers[i]);
              }
              callback = function(type) {
                return function() {
                  if (callback) {
                    callback = errorCallback = xhr.onload = xhr.onerror = xhr.onabort = xhr.ontimeout = xhr.onreadystatechange = null;
                    if (type === "abort") {
                      xhr.abort();
                    } else if (type === "error") {
                      if (typeof xhr.status !== "number") {
                        complete(0, "error");
                      } else {
                        complete(
                          // File: protocol always yields status 0; see trac-8605, trac-14207
                          xhr.status,
                          xhr.statusText
                        );
                      }
                    } else {
                      complete(
                        xhrSuccessStatus[xhr.status] || xhr.status,
                        xhr.statusText,
                        // Support: IE <=9 only
                        // IE9 has no XHR2 but throws on binary (trac-11426)
                        // For XHR2 non-text, let the caller handle it (gh-2498)
                        (xhr.responseType || "text") !== "text" || typeof xhr.responseText !== "string" ? { binary: xhr.response } : { text: xhr.responseText },
                        xhr.getAllResponseHeaders()
                      );
                    }
                  }
                };
              };
              xhr.onload = callback();
              errorCallback = xhr.onerror = xhr.ontimeout = callback("error");
              if (xhr.onabort !== void 0) {
                xhr.onabort = errorCallback;
              } else {
                xhr.onreadystatechange = function() {
                  if (xhr.readyState === 4) {
                    window2.setTimeout(function() {
                      if (callback) {
                        errorCallback();
                      }
                    });
                  }
                };
              }
              callback = callback("abort");
              try {
                xhr.send(options.hasContent && options.data || null);
              } catch (e) {
                if (callback) {
                  throw e;
                }
              }
            },
            abort: function() {
              if (callback) {
                callback();
              }
            }
          };
        }
      });
      jQuery.ajaxPrefilter(function(s) {
        if (s.crossDomain) {
          s.contents.script = false;
        }
      });
      jQuery.ajaxSetup({
        accepts: {
          script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
          script: /\b(?:java|ecma)script\b/
        },
        converters: {
          "text script": function(text) {
            jQuery.globalEval(text);
            return text;
          }
        }
      });
      jQuery.ajaxPrefilter("script", function(s) {
        if (s.cache === void 0) {
          s.cache = false;
        }
        if (s.crossDomain) {
          s.type = "GET";
        }
      });
      jQuery.ajaxTransport("script", function(s) {
        if (s.crossDomain || s.scriptAttrs) {
          var script, callback;
          return {
            send: function(_, complete) {
              script = jQuery("<script>").attr(s.scriptAttrs || {}).prop({ charset: s.scriptCharset, src: s.url }).on("load error", callback = function(evt) {
                script.remove();
                callback = null;
                if (evt) {
                  complete(evt.type === "error" ? 404 : 200, evt.type);
                }
              });
              document2.head.appendChild(script[0]);
            },
            abort: function() {
              if (callback) {
                callback();
              }
            }
          };
        }
      });
      var oldCallbacks = [], rjsonp = /(=)\?(?=&|$)|\?\?/;
      jQuery.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
          var callback = oldCallbacks.pop() || jQuery.expando + "_" + nonce.guid++;
          this[callback] = true;
          return callback;
        }
      });
      jQuery.ajaxPrefilter("json jsonp", function(s, originalSettings, jqXHR) {
        var callbackName, overwritten, responseContainer, jsonProp = s.jsonp !== false && (rjsonp.test(s.url) ? "url" : typeof s.data === "string" && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && rjsonp.test(s.data) && "data");
        if (jsonProp || s.dataTypes[0] === "jsonp") {
          callbackName = s.jsonpCallback = isFunction(s.jsonpCallback) ? s.jsonpCallback() : s.jsonpCallback;
          if (jsonProp) {
            s[jsonProp] = s[jsonProp].replace(rjsonp, "$1" + callbackName);
          } else if (s.jsonp !== false) {
            s.url += (rquery.test(s.url) ? "&" : "?") + s.jsonp + "=" + callbackName;
          }
          s.converters["script json"] = function() {
            if (!responseContainer) {
              jQuery.error(callbackName + " was not called");
            }
            return responseContainer[0];
          };
          s.dataTypes[0] = "json";
          overwritten = window2[callbackName];
          window2[callbackName] = function() {
            responseContainer = arguments;
          };
          jqXHR.always(function() {
            if (overwritten === void 0) {
              jQuery(window2).removeProp(callbackName);
            } else {
              window2[callbackName] = overwritten;
            }
            if (s[callbackName]) {
              s.jsonpCallback = originalSettings.jsonpCallback;
              oldCallbacks.push(callbackName);
            }
            if (responseContainer && isFunction(overwritten)) {
              overwritten(responseContainer[0]);
            }
            responseContainer = overwritten = void 0;
          });
          return "script";
        }
      });
      support.createHTMLDocument = function() {
        var body = document2.implementation.createHTMLDocument("").body;
        body.innerHTML = "<form></form><form></form>";
        return body.childNodes.length === 2;
      }();
      jQuery.parseHTML = function(data, context, keepScripts) {
        if (typeof data !== "string") {
          return [];
        }
        if (typeof context === "boolean") {
          keepScripts = context;
          context = false;
        }
        var base, parsed, scripts;
        if (!context) {
          if (support.createHTMLDocument) {
            context = document2.implementation.createHTMLDocument("");
            base = context.createElement("base");
            base.href = document2.location.href;
            context.head.appendChild(base);
          } else {
            context = document2;
          }
        }
        parsed = rsingleTag.exec(data);
        scripts = !keepScripts && [];
        if (parsed) {
          return [context.createElement(parsed[1])];
        }
        parsed = buildFragment([data], context, scripts);
        if (scripts && scripts.length) {
          jQuery(scripts).remove();
        }
        return jQuery.merge([], parsed.childNodes);
      };
      jQuery.fn.load = function(url, params, callback) {
        var selector, type, response, self = this, off = url.indexOf(" ");
        if (off > -1) {
          selector = stripAndCollapse(url.slice(off));
          url = url.slice(0, off);
        }
        if (isFunction(params)) {
          callback = params;
          params = void 0;
        } else if (params && typeof params === "object") {
          type = "POST";
        }
        if (self.length > 0) {
          jQuery.ajax({
            url,
            // If "type" variable is undefined, then "GET" method will be used.
            // Make value of this field explicit since
            // user can override it through ajaxSetup method
            type: type || "GET",
            dataType: "html",
            data: params
          }).done(function(responseText) {
            response = arguments;
            self.html(selector ? (
              // If a selector was specified, locate the right elements in a dummy div
              // Exclude scripts to avoid IE 'Permission Denied' errors
              jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector)
            ) : (
              // Otherwise use the full result
              responseText
            ));
          }).always(callback && function(jqXHR, status) {
            self.each(function() {
              callback.apply(this, response || [jqXHR.responseText, status, jqXHR]);
            });
          });
        }
        return this;
      };
      jQuery.expr.pseudos.animated = function(elem) {
        return jQuery.grep(jQuery.timers, function(fn) {
          return elem === fn.elem;
        }).length;
      };
      jQuery.offset = {
        setOffset: function(elem, options, i) {
          var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition, position = jQuery.css(elem, "position"), curElem = jQuery(elem), props = {};
          if (position === "static") {
            elem.style.position = "relative";
          }
          curOffset = curElem.offset();
          curCSSTop = jQuery.css(elem, "top");
          curCSSLeft = jQuery.css(elem, "left");
          calculatePosition = (position === "absolute" || position === "fixed") && (curCSSTop + curCSSLeft).indexOf("auto") > -1;
          if (calculatePosition) {
            curPosition = curElem.position();
            curTop = curPosition.top;
            curLeft = curPosition.left;
          } else {
            curTop = parseFloat(curCSSTop) || 0;
            curLeft = parseFloat(curCSSLeft) || 0;
          }
          if (isFunction(options)) {
            options = options.call(elem, i, jQuery.extend({}, curOffset));
          }
          if (options.top != null) {
            props.top = options.top - curOffset.top + curTop;
          }
          if (options.left != null) {
            props.left = options.left - curOffset.left + curLeft;
          }
          if ("using" in options) {
            options.using.call(elem, props);
          } else {
            curElem.css(props);
          }
        }
      };
      jQuery.fn.extend({
        // offset() relates an element's border box to the document origin
        offset: function(options) {
          if (arguments.length) {
            return options === void 0 ? this : this.each(function(i) {
              jQuery.offset.setOffset(this, options, i);
            });
          }
          var rect, win, elem = this[0];
          if (!elem) {
            return;
          }
          if (!elem.getClientRects().length) {
            return { top: 0, left: 0 };
          }
          rect = elem.getBoundingClientRect();
          win = elem.ownerDocument.defaultView;
          return {
            top: rect.top + win.pageYOffset,
            left: rect.left + win.pageXOffset
          };
        },
        // position() relates an element's margin box to its offset parent's padding box
        // This corresponds to the behavior of CSS absolute positioning
        position: function() {
          if (!this[0]) {
            return;
          }
          var offsetParent, offset, doc, elem = this[0], parentOffset = { top: 0, left: 0 };
          if (jQuery.css(elem, "position") === "fixed") {
            offset = elem.getBoundingClientRect();
          } else {
            offset = this.offset();
            doc = elem.ownerDocument;
            offsetParent = elem.offsetParent || doc.documentElement;
            while (offsetParent && (offsetParent === doc.body || offsetParent === doc.documentElement) && jQuery.css(offsetParent, "position") === "static") {
              offsetParent = offsetParent.parentNode;
            }
            if (offsetParent && offsetParent !== elem && offsetParent.nodeType === 1) {
              parentOffset = jQuery(offsetParent).offset();
              parentOffset.top += jQuery.css(offsetParent, "borderTopWidth", true);
              parentOffset.left += jQuery.css(offsetParent, "borderLeftWidth", true);
            }
          }
          return {
            top: offset.top - parentOffset.top - jQuery.css(elem, "marginTop", true),
            left: offset.left - parentOffset.left - jQuery.css(elem, "marginLeft", true)
          };
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
            var offsetParent = this.offsetParent;
            while (offsetParent && jQuery.css(offsetParent, "position") === "static") {
              offsetParent = offsetParent.offsetParent;
            }
            return offsetParent || documentElement;
          });
        }
      });
      jQuery.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(method, prop) {
        var top = "pageYOffset" === prop;
        jQuery.fn[method] = function(val) {
          return access(this, function(elem, method2, val2) {
            var win;
            if (isWindow(elem)) {
              win = elem;
            } else if (elem.nodeType === 9) {
              win = elem.defaultView;
            }
            if (val2 === void 0) {
              return win ? win[prop] : elem[method2];
            }
            if (win) {
              win.scrollTo(
                !top ? val2 : win.pageXOffset,
                top ? val2 : win.pageYOffset
              );
            } else {
              elem[method2] = val2;
            }
          }, method, val, arguments.length);
        };
      });
      jQuery.each(["top", "left"], function(_i, prop) {
        jQuery.cssHooks[prop] = addGetHookIf(
          support.pixelPosition,
          function(elem, computed) {
            if (computed) {
              computed = curCSS(elem, prop);
              return rnumnonpx.test(computed) ? jQuery(elem).position()[prop] + "px" : computed;
            }
          }
        );
      });
      jQuery.each({ Height: "height", Width: "width" }, function(name, type) {
        jQuery.each({
          padding: "inner" + name,
          content: type,
          "": "outer" + name
        }, function(defaultExtra, funcName) {
          jQuery.fn[funcName] = function(margin, value) {
            var chainable = arguments.length && (defaultExtra || typeof margin !== "boolean"), extra = defaultExtra || (margin === true || value === true ? "margin" : "border");
            return access(this, function(elem, type2, value2) {
              var doc;
              if (isWindow(elem)) {
                return funcName.indexOf("outer") === 0 ? elem["inner" + name] : elem.document.documentElement["client" + name];
              }
              if (elem.nodeType === 9) {
                doc = elem.documentElement;
                return Math.max(
                  elem.body["scroll" + name],
                  doc["scroll" + name],
                  elem.body["offset" + name],
                  doc["offset" + name],
                  doc["client" + name]
                );
              }
              return value2 === void 0 ? (
                // Get width or height on the element, requesting but not forcing parseFloat
                jQuery.css(elem, type2, extra)
              ) : (
                // Set width or height on the element
                jQuery.style(elem, type2, value2, extra)
              );
            }, type, chainable ? margin : void 0, chainable);
          };
        });
      });
      jQuery.each([
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend"
      ], function(_i, type) {
        jQuery.fn[type] = function(fn) {
          return this.on(type, fn);
        };
      });
      jQuery.fn.extend({
        bind: function(types, data, fn) {
          return this.on(types, null, data, fn);
        },
        unbind: function(types, fn) {
          return this.off(types, null, fn);
        },
        delegate: function(selector, types, data, fn) {
          return this.on(types, selector, data, fn);
        },
        undelegate: function(selector, types, fn) {
          return arguments.length === 1 ? this.off(selector, "**") : this.off(types, selector || "**", fn);
        },
        hover: function(fnOver, fnOut) {
          return this.on("mouseenter", fnOver).on("mouseleave", fnOut || fnOver);
        }
      });
      jQuery.each(
        "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),
        function(_i, name) {
          jQuery.fn[name] = function(data, fn) {
            return arguments.length > 0 ? this.on(name, null, data, fn) : this.trigger(name);
          };
        }
      );
      var rtrim = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
      jQuery.proxy = function(fn, context) {
        var tmp, args, proxy;
        if (typeof context === "string") {
          tmp = fn[context];
          context = fn;
          fn = tmp;
        }
        if (!isFunction(fn)) {
          return void 0;
        }
        args = slice.call(arguments, 2);
        proxy = function() {
          return fn.apply(context || this, args.concat(slice.call(arguments)));
        };
        proxy.guid = fn.guid = fn.guid || jQuery.guid++;
        return proxy;
      };
      jQuery.holdReady = function(hold) {
        if (hold) {
          jQuery.readyWait++;
        } else {
          jQuery.ready(true);
        }
      };
      jQuery.isArray = Array.isArray;
      jQuery.parseJSON = JSON.parse;
      jQuery.nodeName = nodeName;
      jQuery.isFunction = isFunction;
      jQuery.isWindow = isWindow;
      jQuery.camelCase = camelCase;
      jQuery.type = toType;
      jQuery.now = Date.now;
      jQuery.isNumeric = function(obj) {
        var type = jQuery.type(obj);
        return (type === "number" || type === "string") && // parseFloat NaNs numeric-cast false positives ("")
        // ...but misinterprets leading-number strings, particularly hex literals ("0x...")
        // subtraction forces infinities to NaN
        !isNaN(obj - parseFloat(obj));
      };
      jQuery.trim = function(text) {
        return text == null ? "" : (text + "").replace(rtrim, "$1");
      };
      if (typeof define === "function" && define.amd) {
        define("jquery", [], function() {
          return jQuery;
        });
      }
      var _jQuery = window2.jQuery, _$ = window2.$;
      jQuery.noConflict = function(deep) {
        if (window2.$ === jQuery) {
          window2.$ = _$;
        }
        if (deep && window2.jQuery === jQuery) {
          window2.jQuery = _jQuery;
        }
        return jQuery;
      };
      if (typeof noGlobal === "undefined") {
        window2.jQuery = window2.$ = jQuery;
      }
      return jQuery;
    });
  }
});

// node_modules/webuploader/dist/webuploader.fis.js
var require_webuploader_fis = __commonJS({
  "node_modules/webuploader/dist/webuploader.fis.js"(exports, module) {
    var jQuery = require_jquery();
    module.exports = function(root, factory) {
      var modules = {}, _require = function(deps, callback) {
        var args, len, i;
        if (typeof deps === "string") {
          return getModule(deps);
        } else {
          args = [];
          for (len = deps.length, i = 0; i < len; i++) {
            args.push(getModule(deps[i]));
          }
          return callback.apply(null, args);
        }
      }, _define = function(id, deps, factory2) {
        if (arguments.length === 2) {
          factory2 = deps;
          deps = null;
        }
        _require(deps || [], function() {
          setModule(id, factory2, arguments);
        });
      }, setModule = function(id, factory2, args) {
        var module2 = {
          exports: factory2
        }, returned;
        if (typeof factory2 === "function") {
          args.length || (args = [_require, module2.exports, module2]);
          returned = factory2.apply(null, args);
          returned !== void 0 && (module2.exports = returned);
        }
        modules[id] = module2.exports;
      }, getModule = function(id) {
        var module2 = modules[id] || root[id];
        if (!module2) {
          throw new Error("`" + id + "` is undefined");
        }
        return module2;
      }, exportsTo = function(obj) {
        var key, host, parts, part, last, ucFirst;
        ucFirst = function(str) {
          return str && str.charAt(0).toUpperCase() + str.substr(1);
        };
        for (key in modules) {
          host = obj;
          if (!modules.hasOwnProperty(key)) {
            continue;
          }
          parts = key.split("/");
          last = ucFirst(parts.pop());
          while (part = ucFirst(parts.shift())) {
            host[part] = host[part] || {};
            host = host[part];
          }
          host[last] = modules[key];
        }
        return obj;
      }, makeExport = function(dollar) {
        root.__dollar = dollar;
        return exportsTo(factory(root, _define, _require));
      };
      return makeExport(jQuery);
    }(window, function(window2, define2, require2) {
      define2("dollar-third", [], function() {
        var req = window2.require;
        var $ = window2.__dollar || window2.jQuery || window2.Zepto || req("jquery") || req("zepto");
        if (!$) {
          throw new Error("jQuery or Zepto not found!");
        }
        return $;
      });
      define2("dollar", [
        "dollar-third"
      ], function(_) {
        return _;
      });
      define2("promise-third", [
        "dollar"
      ], function($) {
        return {
          Deferred: $.Deferred,
          when: $.when,
          isPromise: function(anything) {
            return anything && typeof anything.then === "function";
          }
        };
      });
      define2("promise", [
        "promise-third"
      ], function(_) {
        return _;
      });
      define2("base", [
        "dollar",
        "promise"
      ], function($, promise) {
        var noop = function() {
        }, call = Function.call;
        function uncurryThis(fn) {
          return function() {
            return call.apply(fn, arguments);
          };
        }
        function bindFn(fn, context) {
          return function() {
            return fn.apply(context, arguments);
          };
        }
        function createObject(proto) {
          var f;
          if (Object.create) {
            return Object.create(proto);
          } else {
            f = function() {
            };
            f.prototype = proto;
            return new f();
          }
        }
        return {
          /**
           * @property {String} version 当前版本号。
           */
          version: "0.1.6",
          /**
           * @property {jQuery|Zepto} $ 引用依赖的jQuery或者Zepto对象。
           */
          $,
          Deferred: promise.Deferred,
          isPromise: promise.isPromise,
          when: promise.when,
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
          browser: function(ua) {
            var ret = {}, webkit = ua.match(/WebKit\/([\d.]+)/), chrome = ua.match(/Chrome\/([\d.]+)/) || ua.match(/CriOS\/([\d.]+)/), ie = ua.match(/MSIE\s([\d\.]+)/) || ua.match(/(?:trident)(?:.*rv:([\w.]+))?/i), firefox = ua.match(/Firefox\/([\d.]+)/), safari = ua.match(/Safari\/([\d.]+)/), opera = ua.match(/OPR\/([\d.]+)/);
            webkit && (ret.webkit = parseFloat(webkit[1]));
            chrome && (ret.chrome = parseFloat(chrome[1]));
            ie && (ret.ie = parseFloat(ie[1]));
            firefox && (ret.firefox = parseFloat(firefox[1]));
            safari && (ret.safari = parseFloat(safari[1]));
            opera && (ret.opera = parseFloat(opera[1]));
            return ret;
          }(navigator.userAgent),
          /**
           * @description  操作系统检查结果。
           *
           * * `android`  如果在android浏览器环境下，此值为对应的android版本号，否则为`undefined`。
           * * `ios` 如果在ios浏览器环境下，此值为对应的ios版本号，否则为`undefined`。
           * @property {Object} [os]
           */
          os: function(ua) {
            var ret = {}, android = ua.match(/(?:Android);?[\s\/]+([\d.]+)?/), ios = ua.match(/(?:iPad|iPod|iPhone).*OS\s([\d_]+)/);
            android && (ret.android = parseFloat(android[1]));
            ios && (ret.ios = parseFloat(ios[1].replace(/_/g, ".")));
            return ret;
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
          inherits: function(Super, protos, staticProtos) {
            var child;
            if (typeof protos === "function") {
              child = protos;
              protos = null;
            } else if (protos && protos.hasOwnProperty("constructor")) {
              child = protos.constructor;
            } else {
              child = function() {
                return Super.apply(this, arguments);
              };
            }
            $.extend(true, child, Super, staticProtos || {});
            child.__super__ = Super.prototype;
            child.prototype = createObject(Super.prototype);
            protos && $.extend(true, child.prototype, protos);
            return child;
          },
          /**
           * 一个不做任何事情的方法。可以用来赋值给默认的callback.
           * @method noop
           */
          noop,
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
          bindFn,
          /**
           * 引用Console.log如果存在的话，否则引用一个[空函数noop](#WebUploader:Base.noop)。
           * @grammar Base.log( args... ) => undefined
           * @method log
           */
          log: function() {
            if (window2.console) {
              return bindFn(console.log, console);
            }
            return noop;
          }(),
          nextTick: /* @__PURE__ */ function() {
            return function(cb) {
              setTimeout(cb, 1);
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
          slice: uncurryThis([].slice),
          /**
           * 生成唯一的ID
           * @method guid
           * @grammar Base.guid() => String
           * @grammar Base.guid( prefx ) => String
           */
          guid: /* @__PURE__ */ function() {
            var counter = 0;
            return function(prefix) {
              var guid = (+/* @__PURE__ */ new Date()).toString(32), i = 0;
              for (; i < 5; i++) {
                guid += Math.floor(Math.random() * 65535).toString(32);
              }
              return (prefix || "wu_") + guid + (counter++).toString(32);
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
          formatSize: function(size, pointLength, units) {
            var unit;
            units = units || ["B", "K", "M", "G", "TB"];
            while ((unit = units.shift()) && size > 1024) {
              size = size / 1024;
            }
            return (unit === "B" ? size : size.toFixed(pointLength || 2)) + unit;
          }
        };
      });
      define2("mediator", [
        "base"
      ], function(Base) {
        var $ = Base.$, slice = [].slice, separator = /\s+/, protos;
        function findHandlers(arr, name, callback, context) {
          return $.grep(arr, function(handler) {
            return handler && (!name || handler.e === name) && (!callback || handler.cb === callback || handler.cb._cb === callback) && (!context || handler.ctx === context);
          });
        }
        function eachEvent(events, callback, iterator) {
          $.each((events || "").split(separator), function(_, key) {
            iterator(key, callback);
          });
        }
        function triggerHanders(events, args) {
          var stoped = false, i = -1, len = events.length, handler;
          while (++i < len) {
            handler = events[i];
            if (handler.cb.apply(handler.ctx2, args) === false) {
              stoped = true;
              break;
            }
          }
          return !stoped;
        }
        protos = {
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
          on: function(name, callback, context) {
            var me = this, set;
            if (!callback) {
              return this;
            }
            set = this._events || (this._events = []);
            eachEvent(name, callback, function(name2, callback2) {
              var handler = { e: name2 };
              handler.cb = callback2;
              handler.ctx = context;
              handler.ctx2 = context || me;
              handler.id = set.length;
              set.push(handler);
            });
            return this;
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
          once: function(name, callback, context) {
            var me = this;
            if (!callback) {
              return me;
            }
            eachEvent(name, callback, function(name2, callback2) {
              var once = function() {
                me.off(name2, once);
                return callback2.apply(context || me, arguments);
              };
              once._cb = callback2;
              me.on(name2, once, context);
            });
            return me;
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
          off: function(name, cb, ctx) {
            var events = this._events;
            if (!events) {
              return this;
            }
            if (!name && !cb && !ctx) {
              this._events = [];
              return this;
            }
            eachEvent(name, cb, function(name2, cb2) {
              $.each(findHandlers(events, name2, cb2, ctx), function() {
                delete events[this.id];
              });
            });
            return this;
          },
          /**
           * 触发事件
           * @method trigger
           * @grammar trigger( name[, args...] ) => self
           * @param  {String}   type     事件名
           * @param  {*} [...] 任意参数
           * @return {Boolean} 如果handler中return false了，则返回false, 否则返回true
           */
          trigger: function(type) {
            var args, events, allEvents;
            if (!this._events || !type) {
              return this;
            }
            args = slice.call(arguments, 1);
            events = findHandlers(this._events, type);
            allEvents = findHandlers(this._events, "all");
            return triggerHanders(events, args) && triggerHanders(allEvents, arguments);
          }
        };
        return $.extend({
          /**
           * 可以通过这个接口，使任何对象具备事件功能。
           * @method installTo
           * @param  {Object} obj 需要具备事件行为的对象。
           * @return {Object} 返回obj.
           */
          installTo: function(obj) {
            return $.extend(obj, protos);
          }
        }, protos);
      });
      define2("uploader", [
        "base",
        "mediator"
      ], function(Base, Mediator) {
        var $ = Base.$;
        function Uploader(opts) {
          this.options = $.extend(true, {}, Uploader.options, opts);
          this._init(this.options);
        }
        Uploader.options = {};
        Mediator.installTo(Uploader.prototype);
        $.each({
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
        }, function(fn, command) {
          Uploader.prototype[fn] = function() {
            return this.request(command, arguments);
          };
        });
        $.extend(Uploader.prototype, {
          state: "pending",
          _init: function(opts) {
            var me = this;
            me.request("init", opts, function() {
              me.state = "ready";
              me.trigger("ready");
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
          option: function(key, val) {
            var opts = this.options;
            if (arguments.length > 1) {
              if ($.isPlainObject(val) && $.isPlainObject(opts[key])) {
                $.extend(opts[key], val);
              } else {
                opts[key] = val;
              }
            } else {
              return key ? opts[key] : opts;
            }
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
            var stats = this.request("get-stats");
            return stats ? {
              successNum: stats.numOfSuccess,
              progressNum: stats.numOfProgress,
              // who care?
              // queueFailNum: 0,
              cancelNum: stats.numOfCancel,
              invalidNum: stats.numOfInvalid,
              uploadFailNum: stats.numOfUploadFailed,
              queueNum: stats.numOfQueue,
              interruptNum: stats.numofInterrupt
            } : {};
          },
          // 需要重写此方法来来支持opts.onEvent和instance.onEvent的处理器
          trigger: function(type) {
            var args = [].slice.call(arguments, 1), opts = this.options, name = "on" + type.substring(0, 1).toUpperCase() + type.substring(1);
            if (
              // 调用通过on方法注册的handler.
              Mediator.trigger.apply(this, arguments) === false || // 调用opts.onEvent
              $.isFunction(opts[name]) && opts[name].apply(this, args) === false || // 调用this.onEvent
              $.isFunction(this[name]) && this[name].apply(this, args) === false || // 广播所有uploader的事件。
              Mediator.trigger.apply(
                Mediator,
                [this, type].concat(args)
              ) === false
            ) {
              return false;
            }
            return true;
          },
          /**
           * 销毁 webuploader 实例
           * @method destroy
           * @grammar destroy() => undefined
           */
          destroy: function() {
            this.request("destroy", arguments);
            this.off();
          },
          // widgets/widget.js将补充此方法的详细文档。
          request: Base.noop
        });
        Base.create = Uploader.create = function(opts) {
          return new Uploader(opts);
        };
        Base.Uploader = Uploader;
        return Uploader;
      });
      define2("runtime/runtime", [
        "base",
        "mediator"
      ], function(Base, Mediator) {
        var $ = Base.$, factories = {}, getFirstKey = function(obj) {
          for (var key in obj) {
            if (obj.hasOwnProperty(key)) {
              return key;
            }
          }
          return null;
        };
        function Runtime(options) {
          this.options = $.extend({
            container: document.body
          }, options);
          this.uid = Base.guid("rt_");
        }
        $.extend(Runtime.prototype, {
          getContainer: function() {
            var opts = this.options, parent, container;
            if (this._container) {
              return this._container;
            }
            parent = $(opts.container || document.body);
            container = $(document.createElement("div"));
            container.attr("id", "rt_" + this.uid);
            container.css({
              position: "absolute",
              top: "0px",
              left: "0px",
              width: "1px",
              height: "1px",
              overflow: "hidden"
            });
            parent.append(container);
            parent.addClass("webuploader-container");
            this._container = container;
            this._parent = parent;
            return container;
          },
          init: Base.noop,
          exec: Base.noop,
          destroy: function() {
            this._container && this._container.remove();
            this._parent && this._parent.removeClass("webuploader-container");
            this.off();
          }
        });
        Runtime.orders = "html5,flash";
        Runtime.addRuntime = function(type, factory) {
          factories[type] = factory;
        };
        Runtime.hasRuntime = function(type) {
          return !!(type ? factories[type] : getFirstKey(factories));
        };
        Runtime.create = function(opts, orders) {
          var type, runtime;
          orders = orders || Runtime.orders;
          $.each(orders.split(/\s*,\s*/g), function() {
            if (factories[this]) {
              type = this;
              return false;
            }
          });
          type = type || getFirstKey(factories);
          if (!type) {
            throw new Error("Runtime Error");
          }
          runtime = new factories[type](opts);
          return runtime;
        };
        Mediator.installTo(Runtime.prototype);
        return Runtime;
      });
      define2("runtime/client", [
        "base",
        "mediator",
        "runtime/runtime"
      ], function(Base, Mediator, Runtime) {
        var cache;
        cache = /* @__PURE__ */ function() {
          var obj = {};
          return {
            add: function(runtime) {
              obj[runtime.uid] = runtime;
            },
            get: function(ruid, standalone) {
              var i;
              if (ruid) {
                return obj[ruid];
              }
              for (i in obj) {
                if (standalone && obj[i].__standalone) {
                  continue;
                }
                return obj[i];
              }
              return null;
            },
            remove: function(runtime) {
              delete obj[runtime.uid];
            }
          };
        }();
        function RuntimeClient(component, standalone) {
          var deferred = Base.Deferred(), runtime;
          this.uid = Base.guid("client_");
          this.runtimeReady = function(cb) {
            return deferred.done(cb);
          };
          this.connectRuntime = function(opts, cb) {
            if (runtime) {
              throw new Error("already connected!");
            }
            deferred.done(cb);
            if (typeof opts === "string" && cache.get(opts)) {
              runtime = cache.get(opts);
            }
            runtime = runtime || cache.get(null, standalone);
            if (!runtime) {
              runtime = Runtime.create(opts, opts.runtimeOrder);
              runtime.__promise = deferred.promise();
              runtime.once("ready", deferred.resolve);
              runtime.init();
              cache.add(runtime);
              runtime.__client = 1;
            } else {
              Base.$.extend(runtime.options, opts);
              runtime.__promise.then(deferred.resolve);
              runtime.__client++;
            }
            standalone && (runtime.__standalone = standalone);
            return runtime;
          };
          this.getRuntime = function() {
            return runtime;
          };
          this.disconnectRuntime = function() {
            if (!runtime) {
              return;
            }
            runtime.__client--;
            if (runtime.__client <= 0) {
              cache.remove(runtime);
              delete runtime.__promise;
              runtime.destroy();
            }
            runtime = null;
          };
          this.exec = function() {
            if (!runtime) {
              return;
            }
            var args = Base.slice(arguments);
            component && args.unshift(component);
            return runtime.exec.apply(this, args);
          };
          this.getRuid = function() {
            return runtime && runtime.uid;
          };
          this.destroy = /* @__PURE__ */ function(destroy) {
            return function() {
              destroy && destroy.apply(this, arguments);
              this.trigger("destroy");
              this.off();
              this.exec("destroy");
              this.disconnectRuntime();
            };
          }(this.destroy);
        }
        Mediator.installTo(RuntimeClient.prototype);
        return RuntimeClient;
      });
      define2("lib/dnd", [
        "base",
        "mediator",
        "runtime/client"
      ], function(Base, Mediator, RuntimeClent) {
        var $ = Base.$;
        function DragAndDrop(opts) {
          opts = this.options = $.extend({}, DragAndDrop.options, opts);
          opts.container = $(opts.container);
          if (!opts.container.length) {
            return;
          }
          RuntimeClent.call(this, "DragAndDrop");
        }
        DragAndDrop.options = {
          accept: null,
          disableGlobalDnd: false
        };
        Base.inherits(RuntimeClent, {
          constructor: DragAndDrop,
          init: function() {
            var me = this;
            me.connectRuntime(me.options, function() {
              me.exec("init");
              me.trigger("ready");
            });
          }
        });
        Mediator.installTo(DragAndDrop.prototype);
        return DragAndDrop;
      });
      define2("widgets/widget", [
        "base",
        "uploader"
      ], function(Base, Uploader) {
        var $ = Base.$, _init = Uploader.prototype._init, _destroy = Uploader.prototype.destroy, IGNORE = {}, widgetClass = [];
        function isArrayLike(obj) {
          if (!obj) {
            return false;
          }
          var length = obj.length, type = $.type(obj);
          if (obj.nodeType === 1 && length) {
            return true;
          }
          return type === "array" || type !== "function" && type !== "string" && (length === 0 || typeof length === "number" && length > 0 && length - 1 in obj);
        }
        function Widget(uploader) {
          this.owner = uploader;
          this.options = uploader.options;
        }
        $.extend(Widget.prototype, {
          init: Base.noop,
          // 类Backbone的事件监听声明，监听uploader实例上的事件
          // widget直接无法监听事件，事件只能通过uploader来传递
          invoke: function(apiName, args) {
            var map = this.responseMap;
            if (!map || !(apiName in map) || !(map[apiName] in this) || !$.isFunction(this[map[apiName]])) {
              return IGNORE;
            }
            return this[map[apiName]].apply(this, args);
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
        });
        $.extend(Uploader.prototype, {
          /**
           * @property {String | Array} [disableWidgets=undefined]
           * @namespace options
           * @for Uploader
           * @description 默认所有 Uploader.register 了的 widget 都会被加载，如果禁用某一部分，请通过此 option 指定黑名单。
           */
          // 覆写_init用来初始化widgets
          _init: function() {
            var me = this, widgets = me._widgets = [], deactives = me.options.disableWidgets || "";
            $.each(widgetClass, function(_, klass) {
              (!deactives || !~deactives.indexOf(klass._name)) && widgets.push(new klass(me));
            });
            return _init.apply(me, arguments);
          },
          request: function(apiName, args, callback) {
            var i = 0, widgets = this._widgets, len = widgets && widgets.length, rlts = [], dfds = [], widget, rlt, promise, key;
            args = isArrayLike(args) ? args : [args];
            for (; i < len; i++) {
              widget = widgets[i];
              rlt = widget.invoke(apiName, args);
              if (rlt !== IGNORE) {
                if (Base.isPromise(rlt)) {
                  dfds.push(rlt);
                } else {
                  rlts.push(rlt);
                }
              }
            }
            if (callback || dfds.length) {
              promise = Base.when.apply(Base, dfds);
              key = promise.pipe ? "pipe" : "then";
              return promise[key](function() {
                var deferred = Base.Deferred(), args2 = arguments;
                if (args2.length === 1) {
                  args2 = args2[0];
                }
                setTimeout(function() {
                  deferred.resolve(args2);
                }, 1);
                return deferred.promise();
              })[callback ? key : "done"](callback || Base.noop);
            } else {
              return rlts[0];
            }
          },
          destroy: function() {
            _destroy.apply(this, arguments);
            this._widgets = null;
          }
        });
        Uploader.register = Widget.register = function(responseMap, widgetProto) {
          var map = { init: "init", destroy: "destroy", name: "anonymous" }, klass;
          if (arguments.length === 1) {
            widgetProto = responseMap;
            $.each(widgetProto, function(key) {
              if (key[0] === "_" || key === "name") {
                key === "name" && (map.name = widgetProto.name);
                return;
              }
              map[key.replace(/[A-Z]/g, "-$&").toLowerCase()] = key;
            });
          } else {
            map = $.extend(map, responseMap);
          }
          widgetProto.responseMap = map;
          klass = Base.inherits(Widget, widgetProto);
          klass._name = map.name;
          widgetClass.push(klass);
          return klass;
        };
        Uploader.unRegister = Widget.unRegister = function(name) {
          if (!name || name === "anonymous") {
            return;
          }
          for (var i = widgetClass.length; i--; ) {
            if (widgetClass[i]._name === name) {
              widgetClass.splice(i, 1);
            }
          }
        };
        return Widget;
      });
      define2("widgets/filednd", [
        "base",
        "uploader",
        "lib/dnd",
        "widgets/widget"
      ], function(Base, Uploader, Dnd) {
        var $ = Base.$;
        Uploader.options.dnd = "";
        return Uploader.register({
          name: "dnd",
          init: function(opts) {
            if (!opts.dnd || this.request("predict-runtime-type") !== "html5") {
              return;
            }
            var me = this, deferred = Base.Deferred(), options = $.extend({}, {
              disableGlobalDnd: opts.disableGlobalDnd,
              container: opts.dnd,
              accept: opts.accept
            }), dnd;
            this.dnd = dnd = new Dnd(options);
            dnd.once("ready", deferred.resolve);
            dnd.on("drop", function(files) {
              me.request("add-file", [files]);
            });
            dnd.on("accept", function(items) {
              return me.owner.trigger("dndAccept", items);
            });
            dnd.init();
            return deferred.promise();
          },
          destroy: function() {
            this.dnd && this.dnd.destroy();
          }
        });
      });
      define2("lib/filepaste", [
        "base",
        "mediator",
        "runtime/client"
      ], function(Base, Mediator, RuntimeClent) {
        var $ = Base.$;
        function FilePaste(opts) {
          opts = this.options = $.extend({}, opts);
          opts.container = $(opts.container || document.body);
          RuntimeClent.call(this, "FilePaste");
        }
        Base.inherits(RuntimeClent, {
          constructor: FilePaste,
          init: function() {
            var me = this;
            me.connectRuntime(me.options, function() {
              me.exec("init");
              me.trigger("ready");
            });
          }
        });
        Mediator.installTo(FilePaste.prototype);
        return FilePaste;
      });
      define2("widgets/filepaste", [
        "base",
        "uploader",
        "lib/filepaste",
        "widgets/widget"
      ], function(Base, Uploader, FilePaste) {
        var $ = Base.$;
        return Uploader.register({
          name: "paste",
          init: function(opts) {
            if (!opts.paste || this.request("predict-runtime-type") !== "html5") {
              return;
            }
            var me = this, deferred = Base.Deferred(), options = $.extend({}, {
              container: opts.paste,
              accept: opts.accept
            }), paste;
            this.paste = paste = new FilePaste(options);
            paste.once("ready", deferred.resolve);
            paste.on("paste", function(files) {
              me.owner.request("add-file", [files]);
            });
            paste.init();
            return deferred.promise();
          },
          destroy: function() {
            this.paste && this.paste.destroy();
          }
        });
      });
      define2("lib/blob", [
        "base",
        "runtime/client"
      ], function(Base, RuntimeClient) {
        function Blob2(ruid, source) {
          var me = this;
          me.source = source;
          me.ruid = ruid;
          this.size = source.size || 0;
          if (!source.type && this.ext && ~"jpg,jpeg,png,gif,bmp".indexOf(this.ext)) {
            this.type = "image/" + (this.ext === "jpg" ? "jpeg" : this.ext);
          } else {
            this.type = source.type || "application/octet-stream";
          }
          RuntimeClient.call(me, "Blob");
          this.uid = source.uid || this.uid;
          if (ruid) {
            me.connectRuntime(ruid);
          }
        }
        Base.inherits(RuntimeClient, {
          constructor: Blob2,
          slice: function(start, end) {
            return this.exec("slice", start, end);
          },
          getSource: function() {
            return this.source;
          }
        });
        return Blob2;
      });
      define2("lib/file", [
        "base",
        "lib/blob"
      ], function(Base, Blob2) {
        var uid = 1, rExt = /\.([^.]+)$/;
        function File(ruid, file) {
          var ext;
          this.name = file.name || "untitled" + uid++;
          ext = rExt.exec(file.name) ? RegExp.$1.toLowerCase() : "";
          if (!ext && file.type) {
            ext = /\/(jpg|jpeg|png|gif|bmp)$/i.exec(file.type) ? RegExp.$1.toLowerCase() : "";
            this.name += "." + ext;
          }
          this.ext = ext;
          this.lastModifiedDate = file.lastModifiedDate || (/* @__PURE__ */ new Date()).toLocaleString();
          Blob2.apply(this, arguments);
        }
        return Base.inherits(Blob2, File);
      });
      define2("lib/filepicker", [
        "base",
        "runtime/client",
        "lib/file"
      ], function(Base, RuntimeClient, File) {
        var $ = Base.$;
        function FilePicker(opts) {
          opts = this.options = $.extend({}, FilePicker.options, opts);
          opts.container = $(opts.id);
          if (!opts.container.length) {
            throw new Error("按钮指定错误");
          }
          opts.innerHTML = opts.innerHTML || opts.label || opts.container.html() || "";
          opts.button = $(opts.button || document.createElement("div"));
          opts.button.html(opts.innerHTML);
          opts.container.html(opts.button);
          RuntimeClient.call(this, "FilePicker", true);
        }
        FilePicker.options = {
          button: null,
          container: null,
          label: null,
          innerHTML: null,
          multiple: true,
          accept: null,
          name: "file",
          style: "webuploader-pick"
          //pick element class attribute, default is "webuploader-pick"
        };
        Base.inherits(RuntimeClient, {
          constructor: FilePicker,
          init: function() {
            var me = this, opts = me.options, button = opts.button, style = opts.style;
            if (style)
              button.addClass("webuploader-pick");
            me.on("all", function(type) {
              var files;
              switch (type) {
                case "mouseenter":
                  if (style)
                    button.addClass("webuploader-pick-hover");
                  break;
                case "mouseleave":
                  if (style)
                    button.removeClass("webuploader-pick-hover");
                  break;
                case "change":
                  files = me.exec("getFiles");
                  me.trigger("select", $.map(files, function(file) {
                    file = new File(me.getRuid(), file);
                    file._refer = opts.container;
                    return file;
                  }), opts.container);
                  break;
              }
            });
            me.connectRuntime(opts, function() {
              me.refresh();
              me.exec("init", opts);
              me.trigger("ready");
            });
            this._resizeHandler = Base.bindFn(this.refresh, this);
            $(window2).on("resize", this._resizeHandler);
          },
          refresh: function() {
            var shimContainer = this.getRuntime().getContainer(), button = this.options.button, width = button.outerWidth ? button.outerWidth() : button.width(), height = button.outerHeight ? button.outerHeight() : button.height(), pos = button.offset();
            width && height && shimContainer.css({
              bottom: "auto",
              right: "auto",
              width: width + "px",
              height: height + "px"
            }).offset(pos);
          },
          enable: function() {
            var btn = this.options.button;
            btn.removeClass("webuploader-pick-disable");
            this.refresh();
          },
          disable: function() {
            var btn = this.options.button;
            this.getRuntime().getContainer().css({
              top: "-99999px"
            });
            btn.addClass("webuploader-pick-disable");
          },
          destroy: function() {
            var btn = this.options.button;
            $(window2).off("resize", this._resizeHandler);
            btn.removeClass("webuploader-pick-disable webuploader-pick-hover webuploader-pick");
          }
        });
        return FilePicker;
      });
      define2("widgets/filepicker", [
        "base",
        "uploader",
        "lib/filepicker",
        "widgets/widget"
      ], function(Base, Uploader, FilePicker) {
        var $ = Base.$;
        $.extend(Uploader.options, {
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
        });
        return Uploader.register({
          name: "picker",
          init: function(opts) {
            this.pickers = [];
            return opts.pick && this.addBtn(opts.pick);
          },
          refresh: function() {
            $.each(this.pickers, function() {
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
          addBtn: function(pick) {
            var me = this, opts = me.options, accept = opts.accept, promises = [];
            if (!pick) {
              return;
            }
            $.isPlainObject(pick) || (pick = {
              id: pick
            });
            $(pick.id).each(function() {
              var options, picker, deferred;
              deferred = Base.Deferred();
              options = $.extend({}, pick, {
                accept: $.isPlainObject(accept) ? [accept] : accept,
                swf: opts.swf,
                runtimeOrder: opts.runtimeOrder,
                id: this
              });
              picker = new FilePicker(options);
              picker.once("ready", deferred.resolve);
              picker.on("select", function(files) {
                me.owner.request("add-file", [files]);
              });
              picker.on("dialogopen", function() {
                me.owner.trigger("dialogOpen", picker.button);
              });
              picker.init();
              me.pickers.push(picker);
              promises.push(deferred.promise());
            });
            return Base.when.apply(Base, promises);
          },
          disable: function() {
            $.each(this.pickers, function() {
              this.disable();
            });
          },
          enable: function() {
            $.each(this.pickers, function() {
              this.enable();
            });
          },
          destroy: function() {
            $.each(this.pickers, function() {
              this.destroy();
            });
            this.pickers = null;
          }
        });
      });
      define2("lib/image", [
        "base",
        "runtime/client",
        "lib/blob"
      ], function(Base, RuntimeClient, Blob2) {
        var $ = Base.$;
        function Image2(opts) {
          this.options = $.extend({}, Image2.options, opts);
          RuntimeClient.call(this, "Image");
          this.on("load", function() {
            this._info = this.exec("info");
            this._meta = this.exec("meta");
          });
        }
        Image2.options = {
          // 默认的图片处理质量
          quality: 90,
          // 是否裁剪
          crop: false,
          // 是否保留头部信息
          preserveHeaders: false,
          // 是否允许放大。
          allowMagnify: false
        };
        Base.inherits(RuntimeClient, {
          constructor: Image2,
          info: function(val) {
            if (val) {
              this._info = val;
              return this;
            }
            return this._info;
          },
          meta: function(val) {
            if (val) {
              this._meta = val;
              return this;
            }
            return this._meta;
          },
          loadFromBlob: function(blob) {
            var me = this, ruid = blob.getRuid();
            this.connectRuntime(ruid, function() {
              me.exec("init", me.options);
              me.exec("loadFromBlob", blob);
            });
          },
          resize: function() {
            var args = Base.slice(arguments);
            return this.exec.apply(this, ["resize"].concat(args));
          },
          crop: function() {
            var args = Base.slice(arguments);
            return this.exec.apply(this, ["crop"].concat(args));
          },
          getAsDataUrl: function(type) {
            return this.exec("getAsDataUrl", type);
          },
          getAsBlob: function(type) {
            var blob = this.exec("getAsBlob", type);
            return new Blob2(this.getRuid(), blob);
          }
        });
        return Image2;
      });
      define2("widgets/image", [
        "base",
        "uploader",
        "lib/image",
        "widgets/widget"
      ], function(Base, Uploader, Image2) {
        var $ = Base.$, throttle;
        throttle = /* @__PURE__ */ function(max) {
          var occupied = 0, waiting = [], tick = function() {
            var item;
            while (waiting.length && occupied < max) {
              item = waiting.shift();
              occupied += item[0];
              item[1]();
            }
          };
          return function(emiter, size, cb) {
            waiting.push([size, cb]);
            emiter.once("destroy", function() {
              occupied -= size;
              setTimeout(tick, 1);
            });
            setTimeout(tick, 1);
          };
        }(5 * 1024 * 1024);
        $.extend(Uploader.options, {
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
            allowMagnify: true,
            crop: true,
            preserveHeaders: false,
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
            allowMagnify: false,
            crop: false,
            preserveHeaders: true
          }
        });
        return Uploader.register({
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
          makeThumb: function(file, cb, width, height) {
            var opts, image;
            file = this.request("get-file", file);
            if (!file.type.match(/^image/)) {
              cb(true);
              return;
            }
            opts = $.extend({}, this.options.thumb);
            if ($.isPlainObject(width)) {
              opts = $.extend(opts, width);
              width = null;
            }
            width = width || opts.width;
            height = height || opts.height;
            image = new Image2(opts);
            image.once("load", function() {
              file._info = file._info || image.info();
              file._meta = file._meta || image.meta();
              if (width <= 1 && width > 0) {
                width = file._info.width * width;
              }
              if (height <= 1 && height > 0) {
                height = file._info.height * height;
              }
              image.resize(width, height);
            });
            image.once("complete", function() {
              cb(false, image.getAsDataUrl(opts.type));
              image.destroy();
            });
            image.once("error", function(reason) {
              cb(reason || true);
              image.destroy();
            });
            throttle(image, file.source.size, function() {
              file._info && image.info(file._info);
              file._meta && image.meta(file._meta);
              image.loadFromBlob(file.source);
            });
          },
          beforeSendFile: function(file) {
            var opts = this.options.compress || this.options.resize, compressSize = opts && opts.compressSize || 0, noCompressIfLarger = opts && opts.noCompressIfLarger || false, image, deferred;
            file = this.request("get-file", file);
            if (!opts || !~"image/jpeg,image/jpg".indexOf(file.type) || file.size < compressSize || file._compressed) {
              return;
            }
            opts = $.extend({}, opts);
            deferred = Base.Deferred();
            image = new Image2(opts);
            deferred.always(function() {
              image.destroy();
              image = null;
            });
            image.once("error", deferred.reject);
            image.once("load", function() {
              var width = opts.width, height = opts.height;
              file._info = file._info || image.info();
              file._meta = file._meta || image.meta();
              if (width <= 1 && width > 0) {
                width = file._info.width * width;
              }
              if (height <= 1 && height > 0) {
                height = file._info.height * height;
              }
              image.resize(width, height);
            });
            image.once("complete", function() {
              var blob, size;
              try {
                blob = image.getAsBlob(opts.type);
                size = file.size;
                if (!noCompressIfLarger || blob.size < size) {
                  file.source = blob;
                  file.size = blob.size;
                  file.trigger("resize", blob.size, size);
                }
                file._compressed = true;
                deferred.resolve();
              } catch (e) {
                deferred.resolve();
              }
            });
            file._info && image.info(file._info);
            file._meta && image.meta(file._meta);
            image.loadFromBlob(file.source);
            return deferred.promise();
          }
        });
      });
      define2("file", [
        "base",
        "mediator"
      ], function(Base, Mediator) {
        var $ = Base.$, idPrefix = "WU_FILE_", idSuffix = 0, rExt = /\.([^.]+)$/, statusMap = {};
        function gid() {
          return idPrefix + idSuffix++;
        }
        function WUFile(source) {
          this.name = source.name || "Untitled";
          this.size = source.size || 0;
          this.type = source.type || "application/octet-stream";
          this.lastModifiedDate = source.lastModifiedDate || /* @__PURE__ */ new Date() * 1;
          this.id = gid();
          this.ext = rExt.exec(this.name) ? RegExp.$1 : "";
          this.statusText = "";
          statusMap[this.id] = WUFile.Status.INITED;
          this.source = source;
          this.loaded = 0;
          this.on("error", function(msg) {
            this.setStatus(WUFile.Status.ERROR, msg);
          });
        }
        $.extend(WUFile.prototype, {
          /**
           * 设置状态，状态变化时会触发`change`事件。
           * @method setStatus
           * @grammar setStatus( status[, statusText] );
           * @param {File.Status|String} status [文件状态值](#WebUploader:File:File.Status)
           * @param {String} [statusText=''] 状态说明，常在error时使用，用http, abort,server等来标记是由于什么原因导致文件错误。
           */
          setStatus: function(status, text) {
            var prevStatus = statusMap[this.id];
            typeof text !== "undefined" && (this.statusText = text);
            if (status !== prevStatus) {
              statusMap[this.id] = status;
              this.trigger("statuschange", status, prevStatus);
            }
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
            return statusMap[this.id];
          },
          /**
           * 获取文件原始信息。
           * @return {*}
           */
          getSource: function() {
            return this.source;
          },
          destroy: function() {
            this.off();
            delete statusMap[this.id];
          }
        });
        Mediator.installTo(WUFile.prototype);
        WUFile.Status = {
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
        };
        return WUFile;
      });
      define2("queue", [
        "base",
        "mediator",
        "file"
      ], function(Base, Mediator, WUFile) {
        var $ = Base.$, STATUS = WUFile.Status;
        function Queue() {
          this.stats = {
            numOfQueue: 0,
            numOfSuccess: 0,
            numOfCancel: 0,
            numOfProgress: 0,
            numOfUploadFailed: 0,
            numOfInvalid: 0,
            numofDeleted: 0,
            numofInterrupt: 0
          };
          this._queue = [];
          this._map = {};
        }
        $.extend(Queue.prototype, {
          /**
           * 将新文件加入对队列尾部
           *
           * @method append
           * @param  {File} file   文件对象
           */
          append: function(file) {
            this._queue.push(file);
            this._fileAdded(file);
            return this;
          },
          /**
           * 将新文件加入对队列头部
           *
           * @method prepend
           * @param  {File} file   文件对象
           */
          prepend: function(file) {
            this._queue.unshift(file);
            this._fileAdded(file);
            return this;
          },
          /**
           * 获取文件对象
           *
           * @method getFile
           * @param  {String} fileId   文件ID
           * @return {File}
           */
          getFile: function(fileId) {
            if (typeof fileId !== "string") {
              return fileId;
            }
            return this._map[fileId];
          },
          /**
           * 从队列中取出一个指定状态的文件。
           * @grammar fetch( status ) => File
           * @method fetch
           * @param {String} status [文件状态值](#WebUploader:File:File.Status)
           * @return {File} [File](#WebUploader:File)
           */
          fetch: function(status) {
            var len = this._queue.length, i, file;
            status = status || STATUS.QUEUED;
            for (i = 0; i < len; i++) {
              file = this._queue[i];
              if (status === file.getStatus()) {
                return file;
              }
            }
            return null;
          },
          /**
           * 对队列进行排序，能够控制文件上传顺序。
           * @grammar sort( fn ) => undefined
           * @method sort
           * @param {Function} fn 排序方法
           */
          sort: function(fn) {
            if (typeof fn === "function") {
              this._queue.sort(fn);
            }
          },
          /**
           * 获取指定类型的文件列表, 列表中每一个成员为[File](#WebUploader:File)对象。
           * @grammar getFiles( [status1[, status2 ...]] ) => Array
           * @method getFiles
           * @param {String} [status] [文件状态值](#WebUploader:File:File.Status)
           */
          getFiles: function() {
            var sts = [].slice.call(arguments, 0), ret = [], i = 0, len = this._queue.length, file;
            for (; i < len; i++) {
              file = this._queue[i];
              if (sts.length && !~$.inArray(file.getStatus(), sts)) {
                continue;
              }
              ret.push(file);
            }
            return ret;
          },
          /**
           * 在队列中删除文件。
           * @grammar removeFile( file ) => Array
           * @method removeFile
           * @param {File} 文件对象。
           */
          removeFile: function(file) {
            var me = this, existing = this._map[file.id];
            if (existing) {
              delete this._map[file.id];
              file.destroy();
              this.stats.numofDeleted++;
            }
          },
          _fileAdded: function(file) {
            var me = this, existing = this._map[file.id];
            if (!existing) {
              this._map[file.id] = file;
              file.on("statuschange", function(cur, pre) {
                me._onFileStatusChange(cur, pre);
              });
            }
          },
          _onFileStatusChange: function(curStatus, preStatus) {
            var stats = this.stats;
            switch (preStatus) {
              case STATUS.PROGRESS:
                stats.numOfProgress--;
                break;
              case STATUS.QUEUED:
                stats.numOfQueue--;
                break;
              case STATUS.ERROR:
                stats.numOfUploadFailed--;
                break;
              case STATUS.INVALID:
                stats.numOfInvalid--;
                break;
              case STATUS.INTERRUPT:
                stats.numofInterrupt--;
                break;
            }
            switch (curStatus) {
              case STATUS.QUEUED:
                stats.numOfQueue++;
                break;
              case STATUS.PROGRESS:
                stats.numOfProgress++;
                break;
              case STATUS.ERROR:
                stats.numOfUploadFailed++;
                break;
              case STATUS.COMPLETE:
                stats.numOfSuccess++;
                break;
              case STATUS.CANCELLED:
                stats.numOfCancel++;
                break;
              case STATUS.INVALID:
                stats.numOfInvalid++;
                break;
              case STATUS.INTERRUPT:
                stats.numofInterrupt++;
                break;
            }
          }
        });
        Mediator.installTo(Queue.prototype);
        return Queue;
      });
      define2("widgets/queue", [
        "base",
        "uploader",
        "queue",
        "file",
        "lib/file",
        "runtime/client",
        "widgets/widget"
      ], function(Base, Uploader, Queue, WUFile, File, RuntimeClient) {
        var $ = Base.$, rExt = /\.\w+$/, Status = WUFile.Status;
        return Uploader.register({
          name: "queue",
          init: function(opts) {
            var me = this, deferred, len, i, item, arr, accept, runtime;
            if ($.isPlainObject(opts.accept)) {
              opts.accept = [opts.accept];
            }
            if (opts.accept) {
              arr = [];
              for (i = 0, len = opts.accept.length; i < len; i++) {
                item = opts.accept[i].extensions;
                item && arr.push(item);
              }
              if (arr.length) {
                accept = "\\." + arr.join(",").replace(/,/g, "$|\\.").replace(/\*/g, ".*") + "$";
              }
              me.accept = new RegExp(accept, "i");
            }
            me.queue = new Queue();
            me.stats = me.queue.stats;
            if (this.request("predict-runtime-type") !== "html5") {
              return;
            }
            deferred = Base.Deferred();
            this.placeholder = runtime = new RuntimeClient("Placeholder");
            runtime.connectRuntime({
              runtimeOrder: "html5"
            }, function() {
              me._ruid = runtime.getRuid();
              deferred.resolve();
            });
            return deferred.promise();
          },
          // 为了支持外部直接添加一个原生File对象。
          _wrapFile: function(file) {
            if (!(file instanceof WUFile)) {
              if (!(file instanceof File)) {
                if (!this._ruid) {
                  throw new Error("Can't add external files.");
                }
                file = new File(this._ruid, file);
              }
              file = new WUFile(file);
            }
            return file;
          },
          // 判断文件是否可以被加入队列
          acceptFile: function(file) {
            var invalid = !file || !file.size || this.accept && // 如果名字中有后缀，才做后缀白名单处理。
            rExt.exec(file.name) && !this.accept.test(file.name);
            return !invalid;
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
          _addFile: function(file) {
            var me = this;
            file = me._wrapFile(file);
            if (!me.owner.trigger("beforeFileQueued", file)) {
              return;
            }
            if (!me.acceptFile(file)) {
              me.owner.trigger("error", "Q_TYPE_DENIED", file);
              return;
            }
            me.queue.append(file);
            me.owner.trigger("fileQueued", file);
            return file;
          },
          getFile: function(fileId) {
            return this.queue.getFile(fileId);
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
          addFile: function(files) {
            var me = this;
            if (!files.length) {
              files = [files];
            }
            files = $.map(files, function(file) {
              return me._addFile(file);
            });
            if (files.length) {
              me.owner.trigger("filesQueued", files);
              if (me.options.auto) {
                setTimeout(function() {
                  me.request("start-upload");
                }, 20);
              }
            }
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
          removeFile: function(file, remove) {
            var me = this;
            file = file.id ? file : me.queue.getFile(file);
            this.request("cancel-file", file);
            if (remove) {
              this.queue.removeFile(file);
            }
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
          retry: function(file, noForceStart) {
            var me = this, files, i, len;
            if (file) {
              file = file.id ? file : me.queue.getFile(file);
              file.setStatus(Status.QUEUED);
              noForceStart || me.request("start-upload");
              return;
            }
            files = me.queue.getFiles(Status.ERROR);
            i = 0;
            len = files.length;
            for (; i < len; i++) {
              file = files[i];
              file.setStatus(Status.QUEUED);
            }
            me.request("start-upload");
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
            this.owner.trigger("reset");
            this.queue = new Queue();
            this.stats = this.queue.stats;
          },
          destroy: function() {
            this.reset();
            this.placeholder && this.placeholder.destroy();
          }
        });
      });
      define2("widgets/runtime", [
        "uploader",
        "runtime/runtime",
        "widgets/widget"
      ], function(Uploader, Runtime) {
        Uploader.support = function() {
          return Runtime.hasRuntime.apply(Runtime, arguments);
        };
        return Uploader.register({
          name: "runtime",
          init: function() {
            if (!this.predictRuntimeType()) {
              throw Error("Runtime Error");
            }
          },
          /**
           * 预测Uploader将采用哪个`Runtime`
           * @grammar predictRuntimeType() => String
           * @method predictRuntimeType
           * @for  Uploader
           */
          predictRuntimeType: function() {
            var orders = this.options.runtimeOrder || Runtime.orders, type = this.type, i, len;
            if (!type) {
              orders = orders.split(/\s*,\s*/g);
              for (i = 0, len = orders.length; i < len; i++) {
                if (Runtime.hasRuntime(orders[i])) {
                  this.type = type = orders[i];
                  break;
                }
              }
            }
            return type;
          }
        });
      });
      define2("lib/transport", [
        "base",
        "runtime/client",
        "mediator"
      ], function(Base, RuntimeClient, Mediator) {
        var $ = Base.$;
        function Transport(opts) {
          var me = this;
          opts = me.options = $.extend(true, {}, Transport.options, opts || {});
          RuntimeClient.call(this, "Transport");
          this._blob = null;
          this._formData = opts.formData || {};
          this._headers = opts.headers || {};
          this.on("progress", this._timeout);
          this.on("load error", function() {
            me.trigger("progress", 1);
            clearTimeout(me._timer);
          });
        }
        Transport.options = {
          server: "",
          method: "POST",
          // 跨域时，是否允许携带cookie, 只有html5 runtime才有效
          withCredentials: false,
          fileVal: "file",
          timeout: 2 * 60 * 1e3,
          // 2分钟
          formData: {},
          headers: {},
          sendAsBinary: false
        };
        $.extend(Transport.prototype, {
          // 添加Blob, 只能添加一次，最后一次有效。
          appendBlob: function(key, blob, filename) {
            var me = this, opts = me.options;
            if (me.getRuid()) {
              me.disconnectRuntime();
            }
            me.connectRuntime(blob.ruid, function() {
              me.exec("init");
            });
            me._blob = blob;
            opts.fileVal = key || opts.fileVal;
            opts.filename = filename || opts.filename;
          },
          // 添加其他字段
          append: function(key, value) {
            if (typeof key === "object") {
              $.extend(this._formData, key);
            } else {
              this._formData[key] = value;
            }
          },
          setRequestHeader: function(key, value) {
            if (typeof key === "object") {
              $.extend(this._headers, key);
            } else {
              this._headers[key] = value;
            }
          },
          send: function(method) {
            this.exec("send", method);
            this._timeout();
          },
          abort: function() {
            clearTimeout(this._timer);
            return this.exec("abort");
          },
          destroy: function() {
            this.trigger("destroy");
            this.off();
            this.exec("destroy");
            this.disconnectRuntime();
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
            var me = this, duration = me.options.timeout;
            if (!duration) {
              return;
            }
            clearTimeout(me._timer);
            me._timer = setTimeout(function() {
              me.abort();
              me.trigger("error", "timeout");
            }, duration);
          }
        });
        Mediator.installTo(Transport.prototype);
        return Transport;
      });
      define2("widgets/upload", [
        "base",
        "uploader",
        "file",
        "lib/transport",
        "widgets/widget"
      ], function(Base, Uploader, WUFile, Transport) {
        var $ = Base.$, isPromise = Base.isPromise, Status = WUFile.Status;
        $.extend(Uploader.options, {
          /**
           * @property {Boolean} [prepareNextFile=false]
           * @namespace options
           * @for Uploader
           * @description 是否允许在文件传输时提前把下一个文件准备好。
           * 对于一个文件的准备工作比较耗时，比如图片压缩，md5序列化。
           * 如果能提前在当前文件传输期处理，可以节省总体耗时。
           */
          prepareNextFile: false,
          /**
           * @property {Boolean} [chunked=false]
           * @namespace options
           * @for Uploader
           * @description 是否要分片处理大文件上传。
           */
          chunked: false,
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
        function CuteFile(file, chunkSize) {
          var pending = [], blob = file.source, total = blob.size, chunks = chunkSize ? Math.ceil(total / chunkSize) : 1, start = 0, index = 0, len, api;
          api = {
            file,
            has: function() {
              return !!pending.length;
            },
            shift: function() {
              return pending.shift();
            },
            unshift: function(block) {
              pending.unshift(block);
            }
          };
          while (index < chunks) {
            len = Math.min(chunkSize, total - start);
            pending.push({
              file,
              start,
              end: chunkSize ? start + len : total,
              total,
              chunks,
              chunk: index++,
              cuted: api
            });
            start += len;
          }
          file.blocks = pending.concat();
          file.remaning = pending.length;
          return api;
        }
        Uploader.register({
          name: "upload",
          init: function() {
            var owner = this.owner, me = this;
            this.runing = false;
            this.progress = false;
            owner.on("startUpload", function() {
              me.progress = true;
            }).on("uploadFinished", function() {
              me.progress = false;
            });
            this.pool = [];
            this.stack = [];
            this.pending = [];
            this.remaning = 0;
            this.__tick = Base.bindFn(this._tick, this);
            owner.on("uploadComplete", function(file) {
              file.blocks && $.each(file.blocks, function(_, v) {
                v.transport && (v.transport.abort(), v.transport.destroy());
                delete v.transport;
              });
              delete file.blocks;
              delete file.remaning;
            });
          },
          reset: function() {
            this.request("stop-upload", true);
            this.runing = false;
            this.pool = [];
            this.stack = [];
            this.pending = [];
            this.remaning = 0;
            this._trigged = false;
            this._promise = null;
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
          startUpload: function(file) {
            var me = this;
            $.each(me.request("get-files", Status.INVALID), function() {
              me.request("remove-file", this);
            });
            if (file) {
              file = file.id ? file : me.request("get-file", file);
              if (file.getStatus() === Status.INTERRUPT) {
                file.setStatus(Status.QUEUED);
                $.each(me.pool, function(_, v) {
                  if (v.file !== file) {
                    return;
                  }
                  v.transport && v.transport.send();
                  file.setStatus(Status.PROGRESS);
                });
              } else if (file.getStatus() !== Status.PROGRESS) {
                file.setStatus(Status.QUEUED);
              }
            } else {
              $.each(me.request("get-files", [Status.INITED]), function() {
                this.setStatus(Status.QUEUED);
              });
            }
            if (me.runing) {
              return Base.nextTick(me.__tick);
            }
            me.runing = true;
            var files = [];
            file || $.each(me.pool, function(_, v) {
              var file2 = v.file;
              if (file2.getStatus() === Status.INTERRUPT) {
                me._trigged = false;
                files.push(file2);
                v.transport && v.transport.send();
              }
            });
            $.each(files, function() {
              this.setStatus(Status.PROGRESS);
            });
            file || $.each(me.request(
              "get-files",
              Status.INTERRUPT
            ), function() {
              this.setStatus(Status.PROGRESS);
            });
            me._trigged = false;
            Base.nextTick(me.__tick);
            me.owner.trigger("startUpload");
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
          stopUpload: function(file, interrupt) {
            var me = this, block;
            if (file === true) {
              interrupt = file;
              file = null;
            }
            if (me.runing === false) {
              return;
            }
            if (file) {
              file = file.id ? file : me.request("get-file", file);
              if (file.getStatus() !== Status.PROGRESS && file.getStatus() !== Status.QUEUED) {
                return;
              }
              file.setStatus(Status.INTERRUPT);
              $.each(me.pool, function(_, v) {
                if (v.file === file) {
                  block = v;
                  return false;
                }
              });
              block.transport && block.transport.abort();
              if (interrupt) {
                me._putback(block);
                me._popBlock(block);
              }
              return Base.nextTick(me.__tick);
            }
            me.runing = false;
            if (this._promise && this._promise.file) {
              this._promise.file.setStatus(Status.INTERRUPT);
            }
            interrupt && $.each(me.pool, function(_, v) {
              v.transport && v.transport.abort();
              v.file.setStatus(Status.INTERRUPT);
            });
            me.owner.trigger("stopUpload");
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
          cancelFile: function(file) {
            file = file.id ? file : this.request("get-file", file);
            file.blocks && $.each(file.blocks, function(_, v) {
              var _tr = v.transport;
              if (_tr) {
                _tr.abort();
                _tr.destroy();
                delete v.transport;
              }
            });
            file.setStatus(Status.CANCELLED);
            this.owner.trigger("fileDequeued", file);
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
          skipFile: function(file, status) {
            file = file.id ? file : this.request("get-file", file);
            file.setStatus(status || Status.COMPLETE);
            file.skipped = true;
            file.blocks && $.each(file.blocks, function(_, v) {
              var _tr = v.transport;
              if (_tr) {
                _tr.abort();
                _tr.destroy();
                delete v.transport;
              }
            });
            this.owner.trigger("uploadSkip", file);
          },
          /**
           * @event uploadFinished
           * @description 当所有文件上传结束时触发。
           * @for  Uploader
           */
          _tick: function() {
            var me = this, opts = me.options, fn, val;
            if (me._promise) {
              return me._promise.always(me.__tick);
            }
            if (me.pool.length < opts.threads && (val = me._nextBlock())) {
              me._trigged = false;
              fn = function(val2) {
                me._promise = null;
                val2 && val2.file && me._startSend(val2);
                Base.nextTick(me.__tick);
              };
              me._promise = isPromise(val) ? val.always(fn) : fn(val);
            } else if (!me.remaning && !me._getStats().numOfQueue && !me._getStats().numofInterrupt) {
              me.runing = false;
              me._trigged || Base.nextTick(function() {
                me.owner.trigger("uploadFinished");
              });
              me._trigged = true;
            }
          },
          _putback: function(block) {
            var idx;
            block.cuted.unshift(block);
            idx = this.stack.indexOf(block.cuted);
            if (!~idx) {
              this.stack.unshift(block.cuted);
            }
          },
          _getStack: function() {
            var i = 0, act;
            while (act = this.stack[i++]) {
              if (act.has() && act.file.getStatus() === Status.PROGRESS) {
                return act;
              } else if (!act.has() || act.file.getStatus() !== Status.PROGRESS && act.file.getStatus() !== Status.INTERRUPT) {
                this.stack.splice(--i, 1);
              }
            }
            return null;
          },
          _nextBlock: function() {
            var me = this, opts = me.options, act, next, done, preparing;
            if (act = this._getStack()) {
              if (opts.prepareNextFile && !me.pending.length) {
                me._prepareNextFile();
              }
              return act.shift();
            } else if (me.runing) {
              if (!me.pending.length && me._getStats().numOfQueue) {
                me._prepareNextFile();
              }
              next = me.pending.shift();
              done = function(file) {
                if (!file) {
                  return null;
                }
                act = CuteFile(file, opts.chunked ? opts.chunkSize : 0);
                me.stack.push(act);
                return act.shift();
              };
              if (isPromise(next)) {
                preparing = next.file;
                next = next[next.pipe ? "pipe" : "then"](done);
                next.file = preparing;
                return next;
              }
              return done(next);
            }
          },
          /**
           * @event uploadStart
           * @param {File} file File对象
           * @description 某个文件开始上传前触发，一个文件只会触发一次。
           * @for  Uploader
           */
          _prepareNextFile: function() {
            var me = this, file = me.request("fetch-file"), pending = me.pending, promise;
            if (file) {
              promise = me.request("before-send-file", file, function() {
                if (file.getStatus() === Status.PROGRESS || file.getStatus() === Status.INTERRUPT) {
                  return file;
                }
                return me._finishFile(file);
              });
              me.owner.trigger("uploadStart", file);
              file.setStatus(Status.PROGRESS);
              promise.file = file;
              promise.done(function() {
                var idx = $.inArray(promise, pending);
                ~idx && pending.splice(idx, 1, file);
              });
              promise.fail(function(reason) {
                file.setStatus(Status.ERROR, reason);
                me.owner.trigger("uploadError", file, reason);
                me.owner.trigger("uploadComplete", file);
              });
              pending.push(promise);
            }
          },
          // 让出位置了，可以让其他分片开始上传
          _popBlock: function(block) {
            var idx = $.inArray(block, this.pool);
            this.pool.splice(idx, 1);
            block.file.remaning--;
            this.remaning--;
          },
          // 开始上传，可以被掉过。如果promise被reject了，则表示跳过此分片。
          _startSend: function(block) {
            var me = this, file = block.file, promise;
            if (file.getStatus() !== Status.PROGRESS) {
              if (file.getStatus() === Status.INTERRUPT) {
                me._putback(block);
              }
              return;
            }
            me.pool.push(block);
            me.remaning++;
            block.blob = block.chunks === 1 ? file.source : file.source.slice(block.start, block.end);
            promise = me.request("before-send", block, function() {
              if (file.getStatus() === Status.PROGRESS) {
                me._doSend(block);
              } else {
                me._popBlock(block);
                Base.nextTick(me.__tick);
              }
            });
            promise.fail(function() {
              if (file.remaning === 1) {
                me._finishFile(file).always(function() {
                  block.percentage = 1;
                  me._popBlock(block);
                  me.owner.trigger("uploadComplete", file);
                  Base.nextTick(me.__tick);
                });
              } else {
                block.percentage = 1;
                me.updateFileProgress(file);
                me._popBlock(block);
                Base.nextTick(me.__tick);
              }
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
          _doSend: function(block) {
            var me = this, owner = me.owner, opts = me.options, file = block.file, tr = new Transport(opts), data = $.extend({}, opts.formData), headers = $.extend({}, opts.headers), requestAccept, ret;
            block.transport = tr;
            tr.on("destroy", function() {
              delete block.transport;
              me._popBlock(block);
              Base.nextTick(me.__tick);
            });
            tr.on("progress", function(percentage) {
              block.percentage = percentage;
              me.updateFileProgress(file);
            });
            requestAccept = function(reject) {
              var fn;
              ret = tr.getResponseAsJson() || {};
              ret._raw = tr.getResponse();
              fn = function(value) {
                reject = value;
              };
              if (!owner.trigger("uploadAccept", block, ret, fn)) {
                reject = reject || "server";
              }
              return reject;
            };
            tr.on("error", function(type, flag) {
              block.retried = block.retried || 0;
              if (block.chunks > 1 && ~"http,abort".indexOf(type) && block.retried < opts.chunkRetry) {
                block.retried++;
                tr.send();
              } else {
                if (!flag && type === "server") {
                  type = requestAccept(type);
                }
                file.setStatus(Status.ERROR, type);
                owner.trigger("uploadError", file, type);
                owner.trigger("uploadComplete", file);
              }
            });
            tr.on("load", function() {
              var reason;
              if (reason = requestAccept()) {
                tr.trigger("error", reason, true);
                return;
              }
              if (file.remaning === 1) {
                me._finishFile(file, ret);
              } else {
                tr.destroy();
              }
            });
            data = $.extend(data, {
              id: file.id,
              name: file.name,
              type: file.type,
              lastModifiedDate: file.lastModifiedDate,
              size: file.size
            });
            block.chunks > 1 && $.extend(data, {
              chunks: block.chunks,
              chunk: block.chunk
            });
            owner.trigger("uploadBeforeSend", block, data, headers);
            tr.appendBlob(opts.fileVal, block.blob, file.name);
            tr.append(data);
            tr.setRequestHeader(headers);
            tr.send();
          },
          // 完成上传。
          _finishFile: function(file, ret, hds) {
            var owner = this.owner;
            return owner.request("after-send-file", arguments, function() {
              file.setStatus(Status.COMPLETE);
              owner.trigger("uploadSuccess", file, ret, hds);
            }).fail(function(reason) {
              if (file.getStatus() === Status.PROGRESS) {
                file.setStatus(Status.ERROR, reason);
              }
              owner.trigger("uploadError", file, reason);
            }).always(function() {
              owner.trigger("uploadComplete", file);
            });
          },
          updateFileProgress: function(file) {
            var totalPercent = 0, uploaded = 0;
            if (!file.blocks) {
              return;
            }
            $.each(file.blocks, function(_, v) {
              uploaded += (v.percentage || 0) * (v.end - v.start);
            });
            totalPercent = uploaded / file.size;
            this.owner.trigger("uploadProgress", file, totalPercent || 0);
          }
        });
      });
      define2("widgets/validator", [
        "base",
        "uploader",
        "file",
        "widgets/widget"
      ], function(Base, Uploader, WUFile) {
        var $ = Base.$, validators = {}, api;
        api = {
          // 添加验证器
          addValidator: function(type, cb) {
            validators[type] = cb;
          },
          // 移除验证器
          removeValidator: function(type) {
            delete validators[type];
          }
        };
        Uploader.register({
          name: "validator",
          init: function() {
            var me = this;
            Base.nextTick(function() {
              $.each(validators, function() {
                this.call(me.owner);
              });
            });
          }
        });
        api.addValidator("fileNumLimit", function() {
          var uploader = this, opts = uploader.options, count = 0, max = parseInt(opts.fileNumLimit, 10), flag = true;
          if (!max) {
            return;
          }
          uploader.on("beforeFileQueued", function(file) {
            if (count >= max && flag) {
              flag = false;
              this.trigger("error", "Q_EXCEED_NUM_LIMIT", max, file);
              setTimeout(function() {
                flag = true;
              }, 1);
            }
            return count >= max ? false : true;
          });
          uploader.on("fileQueued", function() {
            count++;
          });
          uploader.on("fileDequeued", function() {
            count--;
          });
          uploader.on("reset", function() {
            count = 0;
          });
        });
        api.addValidator("fileSizeLimit", function() {
          var uploader = this, opts = uploader.options, count = 0, max = parseInt(opts.fileSizeLimit, 10), flag = true;
          if (!max) {
            return;
          }
          uploader.on("beforeFileQueued", function(file) {
            var invalid = count + file.size > max;
            if (invalid && flag) {
              flag = false;
              this.trigger("error", "Q_EXCEED_SIZE_LIMIT", max, file);
              setTimeout(function() {
                flag = true;
              }, 1);
            }
            return invalid ? false : true;
          });
          uploader.on("fileQueued", function(file) {
            count += file.size;
          });
          uploader.on("fileDequeued", function(file) {
            count -= file.size;
          });
          uploader.on("reset", function() {
            count = 0;
          });
        });
        api.addValidator("fileSingleSizeLimit", function() {
          var uploader = this, opts = uploader.options, max = opts.fileSingleSizeLimit;
          if (!max) {
            return;
          }
          uploader.on("beforeFileQueued", function(file) {
            if (file.size > max) {
              file.setStatus(WUFile.Status.INVALID, "exceed_size");
              this.trigger("error", "F_EXCEED_SIZE", max, file);
              return false;
            }
          });
        });
        api.addValidator("duplicate", function() {
          var uploader = this, opts = uploader.options, mapping = {};
          if (opts.duplicate) {
            return;
          }
          function hashString(str) {
            var hash = 0, i = 0, len = str.length, _char;
            for (; i < len; i++) {
              _char = str.charCodeAt(i);
              hash = _char + (hash << 6) + (hash << 16) - hash;
            }
            return hash;
          }
          uploader.on("beforeFileQueued", function(file) {
            var hash = file.__hash || (file.__hash = hashString(file.name + file.size + file.lastModifiedDate));
            if (mapping[hash]) {
              this.trigger("error", "F_DUPLICATE", file);
              return false;
            }
          });
          uploader.on("fileQueued", function(file) {
            var hash = file.__hash;
            hash && (mapping[hash] = true);
          });
          uploader.on("fileDequeued", function(file) {
            var hash = file.__hash;
            hash && delete mapping[hash];
          });
          uploader.on("reset", function() {
            mapping = {};
          });
        });
        return api;
      });
      define2("lib/md5", [
        "runtime/client",
        "mediator"
      ], function(RuntimeClient, Mediator) {
        function Md5() {
          RuntimeClient.call(this, "Md5");
        }
        Mediator.installTo(Md5.prototype);
        Md5.prototype.loadFromBlob = function(blob) {
          var me = this;
          if (me.getRuid()) {
            me.disconnectRuntime();
          }
          me.connectRuntime(blob.ruid, function() {
            me.exec("init");
            me.exec("loadFromBlob", blob);
          });
        };
        Md5.prototype.getResult = function() {
          return this.exec("getResult");
        };
        return Md5;
      });
      define2("widgets/md5", [
        "base",
        "uploader",
        "lib/md5",
        "lib/blob",
        "widgets/widget"
      ], function(Base, Uploader, Md5, Blob2) {
        return Uploader.register({
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
          md5File: function(file, start, end) {
            var md5 = new Md5(), deferred = Base.Deferred(), blob = file instanceof Blob2 ? file : this.request("get-file", file).source;
            md5.on("progress load", function(e) {
              e = e || {};
              deferred.notify(e.total ? e.loaded / e.total : 1);
            });
            md5.on("complete", function() {
              deferred.resolve(md5.getResult());
            });
            md5.on("error", function(reason) {
              deferred.reject(reason);
            });
            if (arguments.length > 1) {
              start = start || 0;
              end = end || 0;
              start < 0 && (start = blob.size + start);
              end < 0 && (end = blob.size + end);
              end = Math.min(end, blob.size);
              blob = blob.slice(start, end);
            }
            md5.loadFromBlob(blob);
            return deferred.promise();
          }
        });
      });
      define2("runtime/compbase", [], function() {
        function CompBase(owner, runtime) {
          this.owner = owner;
          this.options = owner.options;
          this.getRuntime = function() {
            return runtime;
          };
          this.getRuid = function() {
            return runtime.uid;
          };
          this.trigger = function() {
            return owner.trigger.apply(owner, arguments);
          };
        }
        return CompBase;
      });
      define2("runtime/html5/runtime", [
        "base",
        "runtime/runtime",
        "runtime/compbase"
      ], function(Base, Runtime, CompBase) {
        var type = "html5", components = {};
        function Html5Runtime() {
          var pool = {}, me = this, destroy = this.destroy;
          Runtime.apply(me, arguments);
          me.type = type;
          me.exec = function(comp, fn) {
            var client = this, uid = client.uid, args = Base.slice(arguments, 2), instance;
            if (components[comp]) {
              instance = pool[uid] = pool[uid] || new components[comp](client, me);
              if (instance[fn]) {
                return instance[fn].apply(instance, args);
              }
            }
          };
          me.destroy = function() {
            return destroy && destroy.apply(this, arguments);
          };
        }
        Base.inherits(Runtime, {
          constructor: Html5Runtime,
          // 不需要连接其他程序，直接执行callback
          init: function() {
            var me = this;
            setTimeout(function() {
              me.trigger("ready");
            }, 1);
          }
        });
        Html5Runtime.register = function(name, component) {
          var klass = components[name] = Base.inherits(CompBase, component);
          return klass;
        };
        if (window2.Blob && window2.FileReader && window2.DataView) {
          Runtime.addRuntime(type, Html5Runtime);
        }
        return Html5Runtime;
      });
      define2("runtime/html5/blob", [
        "runtime/html5/runtime",
        "lib/blob"
      ], function(Html5Runtime, Blob2) {
        return Html5Runtime.register("Blob", {
          slice: function(start, end) {
            var blob = this.owner.source, slice = blob.slice || blob.webkitSlice || blob.mozSlice;
            blob = slice.call(blob, start, end);
            return new Blob2(this.getRuid(), blob);
          }
        });
      });
      define2("runtime/html5/dnd", [
        "base",
        "runtime/html5/runtime",
        "lib/file"
      ], function(Base, Html5Runtime, File) {
        var $ = Base.$, prefix = "webuploader-dnd-";
        return Html5Runtime.register("DragAndDrop", {
          init: function() {
            var elem = this.elem = this.options.container;
            this.dragEnterHandler = Base.bindFn(this._dragEnterHandler, this);
            this.dragOverHandler = Base.bindFn(this._dragOverHandler, this);
            this.dragLeaveHandler = Base.bindFn(this._dragLeaveHandler, this);
            this.dropHandler = Base.bindFn(this._dropHandler, this);
            this.dndOver = false;
            elem.on("dragenter", this.dragEnterHandler);
            elem.on("dragover", this.dragOverHandler);
            elem.on("dragleave", this.dragLeaveHandler);
            elem.on("drop", this.dropHandler);
            if (this.options.disableGlobalDnd) {
              $(document).on("dragover", this.dragOverHandler);
              $(document).on("drop", this.dropHandler);
            }
          },
          _dragEnterHandler: function(e) {
            var me = this, denied = me._denied || false, items;
            e = e.originalEvent || e;
            if (!me.dndOver) {
              me.dndOver = true;
              items = e.dataTransfer.items;
              if (items && items.length) {
                me._denied = denied = !me.trigger("accept", items);
              }
              me.elem.addClass(prefix + "over");
              me.elem[denied ? "addClass" : "removeClass"](prefix + "denied");
            }
            e.dataTransfer.dropEffect = denied ? "none" : "copy";
            return false;
          },
          _dragOverHandler: function(e) {
            var parentElem = this.elem.parent().get(0);
            if (parentElem && !$.contains(parentElem, e.currentTarget)) {
              return false;
            }
            clearTimeout(this._leaveTimer);
            this._dragEnterHandler.call(this, e);
            return false;
          },
          _dragLeaveHandler: function() {
            var me = this, handler;
            handler = function() {
              me.dndOver = false;
              me.elem.removeClass(prefix + "over " + prefix + "denied");
            };
            clearTimeout(me._leaveTimer);
            me._leaveTimer = setTimeout(handler, 100);
            return false;
          },
          _dropHandler: function(e) {
            var me = this, ruid = me.getRuid(), parentElem = me.elem.parent().get(0), dataTransfer, data;
            if (parentElem && !$.contains(parentElem, e.currentTarget)) {
              return false;
            }
            e = e.originalEvent || e;
            dataTransfer = e.dataTransfer;
            try {
              data = dataTransfer.getData("text/html");
            } catch (err) {
            }
            me.dndOver = false;
            me.elem.removeClass(prefix + "over");
            if (data) {
              return;
            }
            me._getTansferFiles(dataTransfer, function(results) {
              me.trigger("drop", $.map(results, function(file) {
                return new File(ruid, file);
              }));
            });
            return false;
          },
          // 如果传入 callback 则去查看文件夹，否则只管当前文件夹。
          _getTansferFiles: function(dataTransfer, callback) {
            var results = [], promises = [], items, files, file, item, i, len, canAccessFolder;
            items = dataTransfer.items;
            files = dataTransfer.files;
            canAccessFolder = !!(items && items[0].webkitGetAsEntry);
            for (i = 0, len = files.length; i < len; i++) {
              file = files[i];
              item = items && items[i];
              if (canAccessFolder && item.webkitGetAsEntry().isDirectory) {
                promises.push(this._traverseDirectoryTree(
                  item.webkitGetAsEntry(),
                  results
                ));
              } else {
                results.push(file);
              }
            }
            Base.when.apply(Base, promises).done(function() {
              if (!results.length) {
                return;
              }
              callback(results);
            });
          },
          _traverseDirectoryTree: function(entry, results) {
            var deferred = Base.Deferred(), me = this;
            if (entry.isFile) {
              entry.file(function(file) {
                results.push(file);
                deferred.resolve();
              });
            } else if (entry.isDirectory) {
              entry.createReader().readEntries(function(entries) {
                var len = entries.length, promises = [], arr = [], i;
                for (i = 0; i < len; i++) {
                  promises.push(me._traverseDirectoryTree(
                    entries[i],
                    arr
                  ));
                }
                Base.when.apply(Base, promises).then(function() {
                  results.push.apply(results, arr);
                  deferred.resolve();
                }, deferred.reject);
              });
            }
            return deferred.promise();
          },
          destroy: function() {
            var elem = this.elem;
            if (!elem) {
              return;
            }
            elem.off("dragenter", this.dragEnterHandler);
            elem.off("dragover", this.dragOverHandler);
            elem.off("dragleave", this.dragLeaveHandler);
            elem.off("drop", this.dropHandler);
            if (this.options.disableGlobalDnd) {
              $(document).off("dragover", this.dragOverHandler);
              $(document).off("drop", this.dropHandler);
            }
          }
        });
      });
      define2("runtime/html5/filepaste", [
        "base",
        "runtime/html5/runtime",
        "lib/file"
      ], function(Base, Html5Runtime, File) {
        return Html5Runtime.register("FilePaste", {
          init: function() {
            var opts = this.options, elem = this.elem = opts.container, accept = ".*", arr, i, len, item;
            if (opts.accept) {
              arr = [];
              for (i = 0, len = opts.accept.length; i < len; i++) {
                item = opts.accept[i].mimeTypes;
                item && arr.push(item);
              }
              if (arr.length) {
                accept = arr.join(",");
                accept = accept.replace(/,/g, "|").replace(/\*/g, ".*");
              }
            }
            this.accept = accept = new RegExp(accept, "i");
            this.hander = Base.bindFn(this._pasteHander, this);
            elem.on("paste", this.hander);
          },
          _pasteHander: function(e) {
            var allowed = [], ruid = this.getRuid(), items, item, blob, i, len;
            e = e.originalEvent || e;
            items = e.clipboardData.items;
            for (i = 0, len = items.length; i < len; i++) {
              item = items[i];
              if (item.kind !== "file" || !(blob = item.getAsFile())) {
                continue;
              }
              allowed.push(new File(ruid, blob));
            }
            if (allowed.length) {
              e.preventDefault();
              e.stopPropagation();
              this.trigger("paste", allowed);
            }
          },
          destroy: function() {
            this.elem.off("paste", this.hander);
          }
        });
      });
      define2("runtime/html5/filepicker", [
        "base",
        "runtime/html5/runtime"
      ], function(Base, Html5Runtime) {
        var $ = Base.$;
        return Html5Runtime.register("FilePicker", {
          init: function() {
            var container = this.getRuntime().getContainer(), me = this, owner = me.owner, opts = me.options, label = this.label = $(document.createElement("label")), input = this.input = $(document.createElement("input")), arr, i, len, mouseHandler;
            input.attr("type", "file");
            input.attr("capture", "camera");
            input.attr("name", opts.name);
            input.addClass("webuploader-element-invisible");
            label.on("click", function(e) {
              input.trigger("click");
              e.stopPropagation();
              owner.trigger("dialogopen");
            });
            label.css({
              opacity: 0,
              width: "100%",
              height: "100%",
              display: "block",
              cursor: "pointer",
              background: "#ffffff"
            });
            if (opts.multiple) {
              input.attr("multiple", "multiple");
            }
            if (opts.accept && opts.accept.length > 0) {
              arr = [];
              for (i = 0, len = opts.accept.length; i < len; i++) {
                arr.push(opts.accept[i].mimeTypes);
              }
              input.attr("accept", arr.join(","));
            }
            container.append(input);
            container.append(label);
            mouseHandler = function(e) {
              owner.trigger(e.type);
            };
            function onChange(e) {
              var fn = onChange, clone;
              me.files = e.target.files;
              clone = this.cloneNode(true);
              clone.value = null;
              this.parentNode.replaceChild(clone, this);
              input.off();
              input = $(clone).on("change", fn).on("mouseenter mouseleave", mouseHandler);
              owner.trigger("change");
            }
            input.on("change", onChange);
            label.on("mouseenter mouseleave", mouseHandler);
          },
          getFiles: function() {
            return this.files;
          },
          destroy: function() {
            this.input.off();
            this.label.off();
          }
        });
      });
      define2("runtime/html5/util", [
        "base"
      ], function(Base) {
        var urlAPI = window2.createObjectURL && window2 || window2.URL && URL.revokeObjectURL && URL || window2.webkitURL, createObjectURL = Base.noop, revokeObjectURL = createObjectURL;
        if (urlAPI) {
          createObjectURL = function() {
            return urlAPI.createObjectURL.apply(urlAPI, arguments);
          };
          revokeObjectURL = function() {
            return urlAPI.revokeObjectURL.apply(urlAPI, arguments);
          };
        }
        return {
          createObjectURL,
          revokeObjectURL,
          dataURL2Blob: function(dataURI) {
            var byteStr, intArray, ab, i, mimetype, parts;
            parts = dataURI.split(",");
            if (~parts[0].indexOf("base64")) {
              byteStr = atob(parts[1]);
            } else {
              byteStr = decodeURIComponent(parts[1]);
            }
            ab = new ArrayBuffer(byteStr.length);
            intArray = new Uint8Array(ab);
            for (i = 0; i < byteStr.length; i++) {
              intArray[i] = byteStr.charCodeAt(i);
            }
            mimetype = parts[0].split(":")[1].split(";")[0];
            return this.arrayBufferToBlob(ab, mimetype);
          },
          dataURL2ArrayBuffer: function(dataURI) {
            var byteStr, intArray, i, parts;
            parts = dataURI.split(",");
            if (~parts[0].indexOf("base64")) {
              byteStr = atob(parts[1]);
            } else {
              byteStr = decodeURIComponent(parts[1]);
            }
            intArray = new Uint8Array(byteStr.length);
            for (i = 0; i < byteStr.length; i++) {
              intArray[i] = byteStr.charCodeAt(i);
            }
            return intArray.buffer;
          },
          arrayBufferToBlob: function(buffer, type) {
            var builder = window2.BlobBuilder || window2.WebKitBlobBuilder, bb;
            if (builder) {
              bb = new builder();
              bb.append(buffer);
              return bb.getBlob(type);
            }
            return new Blob([buffer], type ? { type } : {});
          },
          // 抽出来主要是为了解决android下面canvas.toDataUrl不支持jpeg.
          // 你得到的结果是png.
          canvasToDataUrl: function(canvas, type, quality) {
            return canvas.toDataURL(type, quality / 100);
          },
          // imagemeat会复写这个方法，如果用户选择加载那个文件了的话。
          parseMeta: function(blob, callback) {
            callback(false, {});
          },
          // imagemeat会复写这个方法，如果用户选择加载那个文件了的话。
          updateImageHead: function(data) {
            return data;
          }
        };
      });
      define2("runtime/html5/imagemeta", [
        "runtime/html5/util"
      ], function(Util) {
        var api;
        api = {
          parsers: {
            65505: []
          },
          maxMetaDataSize: 262144,
          parse: function(blob, cb) {
            var me = this, fr = new FileReader();
            fr.onload = function() {
              cb(false, me._parse(this.result));
              fr = fr.onload = fr.onerror = null;
            };
            fr.onerror = function(e) {
              cb(e.message);
              fr = fr.onload = fr.onerror = null;
            };
            blob = blob.slice(0, me.maxMetaDataSize);
            fr.readAsArrayBuffer(blob.getSource());
          },
          _parse: function(buffer, noParse) {
            if (buffer.byteLength < 6) {
              return;
            }
            var dataview = new DataView(buffer), offset = 2, maxOffset = dataview.byteLength - 4, headLength = offset, ret = {}, markerBytes, markerLength, parsers, i;
            if (dataview.getUint16(0) === 65496) {
              while (offset < maxOffset) {
                markerBytes = dataview.getUint16(offset);
                if (markerBytes >= 65504 && markerBytes <= 65519 || markerBytes === 65534) {
                  markerLength = dataview.getUint16(offset + 2) + 2;
                  if (offset + markerLength > dataview.byteLength) {
                    break;
                  }
                  parsers = api.parsers[markerBytes];
                  if (!noParse && parsers) {
                    for (i = 0; i < parsers.length; i += 1) {
                      parsers[i].call(
                        api,
                        dataview,
                        offset,
                        markerLength,
                        ret
                      );
                    }
                  }
                  offset += markerLength;
                  headLength = offset;
                } else {
                  break;
                }
              }
              if (headLength > 6) {
                if (buffer.slice) {
                  ret.imageHead = buffer.slice(2, headLength);
                } else {
                  ret.imageHead = new Uint8Array(buffer).subarray(2, headLength);
                }
              }
            }
            return ret;
          },
          updateImageHead: function(buffer, head) {
            var data = this._parse(buffer, true), buf1, buf2, bodyoffset;
            bodyoffset = 2;
            if (data.imageHead) {
              bodyoffset = 2 + data.imageHead.byteLength;
            }
            if (buffer.slice) {
              buf2 = buffer.slice(bodyoffset);
            } else {
              buf2 = new Uint8Array(buffer).subarray(bodyoffset);
            }
            buf1 = new Uint8Array(head.byteLength + 2 + buf2.byteLength);
            buf1[0] = 255;
            buf1[1] = 216;
            buf1.set(new Uint8Array(head), 2);
            buf1.set(new Uint8Array(buf2), head.byteLength + 2);
            return buf1.buffer;
          }
        };
        Util.parseMeta = function() {
          return api.parse.apply(api, arguments);
        };
        Util.updateImageHead = function() {
          return api.updateImageHead.apply(api, arguments);
        };
        return api;
      });
      define2("runtime/html5/imagemeta/exif", [
        "base",
        "runtime/html5/imagemeta"
      ], function(Base, ImageMeta) {
        var EXIF = {};
        EXIF.ExifMap = function() {
          return this;
        };
        EXIF.ExifMap.prototype.map = {
          "Orientation": 274
        };
        EXIF.ExifMap.prototype.get = function(id) {
          return this[id] || this[this.map[id]];
        };
        EXIF.exifTagTypes = {
          // byte, 8-bit unsigned int:
          1: {
            getValue: function(dataView, dataOffset) {
              return dataView.getUint8(dataOffset);
            },
            size: 1
          },
          // ascii, 8-bit byte:
          2: {
            getValue: function(dataView, dataOffset) {
              return String.fromCharCode(dataView.getUint8(dataOffset));
            },
            size: 1,
            ascii: true
          },
          // short, 16 bit int:
          3: {
            getValue: function(dataView, dataOffset, littleEndian) {
              return dataView.getUint16(dataOffset, littleEndian);
            },
            size: 2
          },
          // long, 32 bit int:
          4: {
            getValue: function(dataView, dataOffset, littleEndian) {
              return dataView.getUint32(dataOffset, littleEndian);
            },
            size: 4
          },
          // rational = two long values,
          // first is numerator, second is denominator:
          5: {
            getValue: function(dataView, dataOffset, littleEndian) {
              return dataView.getUint32(dataOffset, littleEndian) / dataView.getUint32(dataOffset + 4, littleEndian);
            },
            size: 8
          },
          // slong, 32 bit signed int:
          9: {
            getValue: function(dataView, dataOffset, littleEndian) {
              return dataView.getInt32(dataOffset, littleEndian);
            },
            size: 4
          },
          // srational, two slongs, first is numerator, second is denominator:
          10: {
            getValue: function(dataView, dataOffset, littleEndian) {
              return dataView.getInt32(dataOffset, littleEndian) / dataView.getInt32(dataOffset + 4, littleEndian);
            },
            size: 8
          }
        };
        EXIF.exifTagTypes[7] = EXIF.exifTagTypes[1];
        EXIF.getExifValue = function(dataView, tiffOffset, offset, type, length, littleEndian) {
          var tagType = EXIF.exifTagTypes[type], tagSize, dataOffset, values, i, str, c;
          if (!tagType) {
            Base.log("Invalid Exif data: Invalid tag type.");
            return;
          }
          tagSize = tagType.size * length;
          dataOffset = tagSize > 4 ? tiffOffset + dataView.getUint32(
            offset + 8,
            littleEndian
          ) : offset + 8;
          if (dataOffset + tagSize > dataView.byteLength) {
            Base.log("Invalid Exif data: Invalid data offset.");
            return;
          }
          if (length === 1) {
            return tagType.getValue(dataView, dataOffset, littleEndian);
          }
          values = [];
          for (i = 0; i < length; i += 1) {
            values[i] = tagType.getValue(
              dataView,
              dataOffset + i * tagType.size,
              littleEndian
            );
          }
          if (tagType.ascii) {
            str = "";
            for (i = 0; i < values.length; i += 1) {
              c = values[i];
              if (c === "\0") {
                break;
              }
              str += c;
            }
            return str;
          }
          return values;
        };
        EXIF.parseExifTag = function(dataView, tiffOffset, offset, littleEndian, data) {
          var tag = dataView.getUint16(offset, littleEndian);
          data.exif[tag] = EXIF.getExifValue(
            dataView,
            tiffOffset,
            offset,
            dataView.getUint16(offset + 2, littleEndian),
            // tag type
            dataView.getUint32(offset + 4, littleEndian),
            // tag length
            littleEndian
          );
        };
        EXIF.parseExifTags = function(dataView, tiffOffset, dirOffset, littleEndian, data) {
          var tagsNumber, dirEndOffset, i;
          if (dirOffset + 6 > dataView.byteLength) {
            Base.log("Invalid Exif data: Invalid directory offset.");
            return;
          }
          tagsNumber = dataView.getUint16(dirOffset, littleEndian);
          dirEndOffset = dirOffset + 2 + 12 * tagsNumber;
          if (dirEndOffset + 4 > dataView.byteLength) {
            Base.log("Invalid Exif data: Invalid directory size.");
            return;
          }
          for (i = 0; i < tagsNumber; i += 1) {
            this.parseExifTag(
              dataView,
              tiffOffset,
              dirOffset + 2 + 12 * i,
              // tag offset
              littleEndian,
              data
            );
          }
          return dataView.getUint32(dirEndOffset, littleEndian);
        };
        EXIF.parseExifData = function(dataView, offset, length, data) {
          var tiffOffset = offset + 10, littleEndian, dirOffset;
          if (dataView.getUint32(offset + 4) !== 1165519206) {
            return;
          }
          if (tiffOffset + 8 > dataView.byteLength) {
            Base.log("Invalid Exif data: Invalid segment size.");
            return;
          }
          if (dataView.getUint16(offset + 8) !== 0) {
            Base.log("Invalid Exif data: Missing byte alignment offset.");
            return;
          }
          switch (dataView.getUint16(tiffOffset)) {
            case 18761:
              littleEndian = true;
              break;
            case 19789:
              littleEndian = false;
              break;
            default:
              Base.log("Invalid Exif data: Invalid byte alignment marker.");
              return;
          }
          if (dataView.getUint16(tiffOffset + 2, littleEndian) !== 42) {
            Base.log("Invalid Exif data: Missing TIFF marker.");
            return;
          }
          dirOffset = dataView.getUint32(tiffOffset + 4, littleEndian);
          data.exif = new EXIF.ExifMap();
          dirOffset = EXIF.parseExifTags(
            dataView,
            tiffOffset,
            tiffOffset + dirOffset,
            littleEndian,
            data
          );
        };
        ImageMeta.parsers[65505].push(EXIF.parseExifData);
        return EXIF;
      });
      define2("runtime/html5/jpegencoder", [], function(require3, exports2, module2) {
        function JPEGEncoder(quality) {
          var self = this;
          var fround = Math.round;
          var ffloor = Math.floor;
          var YTable = new Array(64);
          var UVTable = new Array(64);
          var fdtbl_Y = new Array(64);
          var fdtbl_UV = new Array(64);
          var YDC_HT;
          var UVDC_HT;
          var YAC_HT;
          var UVAC_HT;
          var bitcode = new Array(65535);
          var category = new Array(65535);
          var outputfDCTQuant = new Array(64);
          var DU = new Array(64);
          var byteout = [];
          var bytenew = 0;
          var bytepos = 7;
          var YDU = new Array(64);
          var UDU = new Array(64);
          var VDU = new Array(64);
          var clt = new Array(256);
          var RGB_YUV_TABLE = new Array(2048);
          var currentQuality;
          var ZigZag = [
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
          ];
          var std_dc_luminance_nrcodes = [0, 0, 1, 5, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0];
          var std_dc_luminance_values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
          var std_ac_luminance_nrcodes = [0, 0, 2, 1, 3, 3, 2, 4, 3, 5, 5, 4, 4, 0, 0, 1, 125];
          var std_ac_luminance_values = [
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
          ];
          var std_dc_chrominance_nrcodes = [0, 0, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0];
          var std_dc_chrominance_values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
          var std_ac_chrominance_nrcodes = [0, 0, 2, 1, 2, 4, 4, 3, 4, 7, 5, 4, 4, 0, 1, 2, 119];
          var std_ac_chrominance_values = [
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
          function initQuantTables(sf) {
            var YQT = [
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
            ];
            for (var i = 0; i < 64; i++) {
              var t = ffloor((YQT[i] * sf + 50) / 100);
              if (t < 1) {
                t = 1;
              } else if (t > 255) {
                t = 255;
              }
              YTable[ZigZag[i]] = t;
            }
            var UVQT = [
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
            ];
            for (var j = 0; j < 64; j++) {
              var u = ffloor((UVQT[j] * sf + 50) / 100);
              if (u < 1) {
                u = 1;
              } else if (u > 255) {
                u = 255;
              }
              UVTable[ZigZag[j]] = u;
            }
            var aasf = [
              1,
              1.387039845,
              1.306562965,
              1.175875602,
              1,
              0.785694958,
              0.5411961,
              0.275899379
            ];
            var k = 0;
            for (var row = 0; row < 8; row++) {
              for (var col = 0; col < 8; col++) {
                fdtbl_Y[k] = 1 / (YTable[ZigZag[k]] * aasf[row] * aasf[col] * 8);
                fdtbl_UV[k] = 1 / (UVTable[ZigZag[k]] * aasf[row] * aasf[col] * 8);
                k++;
              }
            }
          }
          function computeHuffmanTbl(nrcodes, std_table) {
            var codevalue = 0;
            var pos_in_table = 0;
            var HT = new Array();
            for (var k = 1; k <= 16; k++) {
              for (var j = 1; j <= nrcodes[k]; j++) {
                HT[std_table[pos_in_table]] = [];
                HT[std_table[pos_in_table]][0] = codevalue;
                HT[std_table[pos_in_table]][1] = k;
                pos_in_table++;
                codevalue++;
              }
              codevalue *= 2;
            }
            return HT;
          }
          function initHuffmanTbl() {
            YDC_HT = computeHuffmanTbl(std_dc_luminance_nrcodes, std_dc_luminance_values);
            UVDC_HT = computeHuffmanTbl(std_dc_chrominance_nrcodes, std_dc_chrominance_values);
            YAC_HT = computeHuffmanTbl(std_ac_luminance_nrcodes, std_ac_luminance_values);
            UVAC_HT = computeHuffmanTbl(std_ac_chrominance_nrcodes, std_ac_chrominance_values);
          }
          function initCategoryNumber() {
            var nrlower = 1;
            var nrupper = 2;
            for (var cat = 1; cat <= 15; cat++) {
              for (var nr = nrlower; nr < nrupper; nr++) {
                category[32767 + nr] = cat;
                bitcode[32767 + nr] = [];
                bitcode[32767 + nr][1] = cat;
                bitcode[32767 + nr][0] = nr;
              }
              for (var nrneg = -(nrupper - 1); nrneg <= -nrlower; nrneg++) {
                category[32767 + nrneg] = cat;
                bitcode[32767 + nrneg] = [];
                bitcode[32767 + nrneg][1] = cat;
                bitcode[32767 + nrneg][0] = nrupper - 1 + nrneg;
              }
              nrlower <<= 1;
              nrupper <<= 1;
            }
          }
          function initRGBYUVTable() {
            for (var i = 0; i < 256; i++) {
              RGB_YUV_TABLE[i] = 19595 * i;
              RGB_YUV_TABLE[i + 256 >> 0] = 38470 * i;
              RGB_YUV_TABLE[i + 512 >> 0] = 7471 * i + 32768;
              RGB_YUV_TABLE[i + 768 >> 0] = -11059 * i;
              RGB_YUV_TABLE[i + 1024 >> 0] = -21709 * i;
              RGB_YUV_TABLE[i + 1280 >> 0] = 32768 * i + 8421375;
              RGB_YUV_TABLE[i + 1536 >> 0] = -27439 * i;
              RGB_YUV_TABLE[i + 1792 >> 0] = -5329 * i;
            }
          }
          function writeBits(bs) {
            var value = bs[0];
            var posval = bs[1] - 1;
            while (posval >= 0) {
              if (value & 1 << posval) {
                bytenew |= 1 << bytepos;
              }
              posval--;
              bytepos--;
              if (bytepos < 0) {
                if (bytenew == 255) {
                  writeByte(255);
                  writeByte(0);
                } else {
                  writeByte(bytenew);
                }
                bytepos = 7;
                bytenew = 0;
              }
            }
          }
          function writeByte(value) {
            byteout.push(clt[value]);
          }
          function writeWord(value) {
            writeByte(value >> 8 & 255);
            writeByte(value & 255);
          }
          function fDCTQuant(data, fdtbl) {
            var d0, d1, d2, d3, d4, d5, d6, d7;
            var dataOff = 0;
            var i;
            var I8 = 8;
            var I64 = 64;
            for (i = 0; i < I8; ++i) {
              d0 = data[dataOff];
              d1 = data[dataOff + 1];
              d2 = data[dataOff + 2];
              d3 = data[dataOff + 3];
              d4 = data[dataOff + 4];
              d5 = data[dataOff + 5];
              d6 = data[dataOff + 6];
              d7 = data[dataOff + 7];
              var tmp0 = d0 + d7;
              var tmp7 = d0 - d7;
              var tmp1 = d1 + d6;
              var tmp6 = d1 - d6;
              var tmp2 = d2 + d5;
              var tmp5 = d2 - d5;
              var tmp3 = d3 + d4;
              var tmp4 = d3 - d4;
              var tmp10 = tmp0 + tmp3;
              var tmp13 = tmp0 - tmp3;
              var tmp11 = tmp1 + tmp2;
              var tmp12 = tmp1 - tmp2;
              data[dataOff] = tmp10 + tmp11;
              data[dataOff + 4] = tmp10 - tmp11;
              var z1 = (tmp12 + tmp13) * 0.707106781;
              data[dataOff + 2] = tmp13 + z1;
              data[dataOff + 6] = tmp13 - z1;
              tmp10 = tmp4 + tmp5;
              tmp11 = tmp5 + tmp6;
              tmp12 = tmp6 + tmp7;
              var z5 = (tmp10 - tmp12) * 0.382683433;
              var z2 = 0.5411961 * tmp10 + z5;
              var z4 = 1.306562965 * tmp12 + z5;
              var z3 = tmp11 * 0.707106781;
              var z11 = tmp7 + z3;
              var z13 = tmp7 - z3;
              data[dataOff + 5] = z13 + z2;
              data[dataOff + 3] = z13 - z2;
              data[dataOff + 1] = z11 + z4;
              data[dataOff + 7] = z11 - z4;
              dataOff += 8;
            }
            dataOff = 0;
            for (i = 0; i < I8; ++i) {
              d0 = data[dataOff];
              d1 = data[dataOff + 8];
              d2 = data[dataOff + 16];
              d3 = data[dataOff + 24];
              d4 = data[dataOff + 32];
              d5 = data[dataOff + 40];
              d6 = data[dataOff + 48];
              d7 = data[dataOff + 56];
              var tmp0p2 = d0 + d7;
              var tmp7p2 = d0 - d7;
              var tmp1p2 = d1 + d6;
              var tmp6p2 = d1 - d6;
              var tmp2p2 = d2 + d5;
              var tmp5p2 = d2 - d5;
              var tmp3p2 = d3 + d4;
              var tmp4p2 = d3 - d4;
              var tmp10p2 = tmp0p2 + tmp3p2;
              var tmp13p2 = tmp0p2 - tmp3p2;
              var tmp11p2 = tmp1p2 + tmp2p2;
              var tmp12p2 = tmp1p2 - tmp2p2;
              data[dataOff] = tmp10p2 + tmp11p2;
              data[dataOff + 32] = tmp10p2 - tmp11p2;
              var z1p2 = (tmp12p2 + tmp13p2) * 0.707106781;
              data[dataOff + 16] = tmp13p2 + z1p2;
              data[dataOff + 48] = tmp13p2 - z1p2;
              tmp10p2 = tmp4p2 + tmp5p2;
              tmp11p2 = tmp5p2 + tmp6p2;
              tmp12p2 = tmp6p2 + tmp7p2;
              var z5p2 = (tmp10p2 - tmp12p2) * 0.382683433;
              var z2p2 = 0.5411961 * tmp10p2 + z5p2;
              var z4p2 = 1.306562965 * tmp12p2 + z5p2;
              var z3p2 = tmp11p2 * 0.707106781;
              var z11p2 = tmp7p2 + z3p2;
              var z13p2 = tmp7p2 - z3p2;
              data[dataOff + 40] = z13p2 + z2p2;
              data[dataOff + 24] = z13p2 - z2p2;
              data[dataOff + 8] = z11p2 + z4p2;
              data[dataOff + 56] = z11p2 - z4p2;
              dataOff++;
            }
            var fDCTQuant2;
            for (i = 0; i < I64; ++i) {
              fDCTQuant2 = data[i] * fdtbl[i];
              outputfDCTQuant[i] = fDCTQuant2 > 0 ? fDCTQuant2 + 0.5 | 0 : fDCTQuant2 - 0.5 | 0;
            }
            return outputfDCTQuant;
          }
          function writeAPP0() {
            writeWord(65504);
            writeWord(16);
            writeByte(74);
            writeByte(70);
            writeByte(73);
            writeByte(70);
            writeByte(0);
            writeByte(1);
            writeByte(1);
            writeByte(0);
            writeWord(1);
            writeWord(1);
            writeByte(0);
            writeByte(0);
          }
          function writeSOF0(width, height) {
            writeWord(65472);
            writeWord(17);
            writeByte(8);
            writeWord(height);
            writeWord(width);
            writeByte(3);
            writeByte(1);
            writeByte(17);
            writeByte(0);
            writeByte(2);
            writeByte(17);
            writeByte(1);
            writeByte(3);
            writeByte(17);
            writeByte(1);
          }
          function writeDQT() {
            writeWord(65499);
            writeWord(132);
            writeByte(0);
            for (var i = 0; i < 64; i++) {
              writeByte(YTable[i]);
            }
            writeByte(1);
            for (var j = 0; j < 64; j++) {
              writeByte(UVTable[j]);
            }
          }
          function writeDHT() {
            writeWord(65476);
            writeWord(418);
            writeByte(0);
            for (var i = 0; i < 16; i++) {
              writeByte(std_dc_luminance_nrcodes[i + 1]);
            }
            for (var j = 0; j <= 11; j++) {
              writeByte(std_dc_luminance_values[j]);
            }
            writeByte(16);
            for (var k = 0; k < 16; k++) {
              writeByte(std_ac_luminance_nrcodes[k + 1]);
            }
            for (var l = 0; l <= 161; l++) {
              writeByte(std_ac_luminance_values[l]);
            }
            writeByte(1);
            for (var m = 0; m < 16; m++) {
              writeByte(std_dc_chrominance_nrcodes[m + 1]);
            }
            for (var n = 0; n <= 11; n++) {
              writeByte(std_dc_chrominance_values[n]);
            }
            writeByte(17);
            for (var o = 0; o < 16; o++) {
              writeByte(std_ac_chrominance_nrcodes[o + 1]);
            }
            for (var p = 0; p <= 161; p++) {
              writeByte(std_ac_chrominance_values[p]);
            }
          }
          function writeSOS() {
            writeWord(65498);
            writeWord(12);
            writeByte(3);
            writeByte(1);
            writeByte(0);
            writeByte(2);
            writeByte(17);
            writeByte(3);
            writeByte(17);
            writeByte(0);
            writeByte(63);
            writeByte(0);
          }
          function processDU(CDU, fdtbl, DC, HTDC, HTAC) {
            var EOB = HTAC[0];
            var M16zeroes = HTAC[240];
            var pos;
            var I16 = 16;
            var I63 = 63;
            var I64 = 64;
            var DU_DCT = fDCTQuant(CDU, fdtbl);
            for (var j = 0; j < I64; ++j) {
              DU[ZigZag[j]] = DU_DCT[j];
            }
            var Diff = DU[0] - DC;
            DC = DU[0];
            if (Diff == 0) {
              writeBits(HTDC[0]);
            } else {
              pos = 32767 + Diff;
              writeBits(HTDC[category[pos]]);
              writeBits(bitcode[pos]);
            }
            var end0pos = 63;
            for (; end0pos > 0 && DU[end0pos] == 0; end0pos--) {
            }
            ;
            if (end0pos == 0) {
              writeBits(EOB);
              return DC;
            }
            var i = 1;
            var lng;
            while (i <= end0pos) {
              var startpos = i;
              for (; DU[i] == 0 && i <= end0pos; ++i) {
              }
              var nrzeroes = i - startpos;
              if (nrzeroes >= I16) {
                lng = nrzeroes >> 4;
                for (var nrmarker = 1; nrmarker <= lng; ++nrmarker)
                  writeBits(M16zeroes);
                nrzeroes = nrzeroes & 15;
              }
              pos = 32767 + DU[i];
              writeBits(HTAC[(nrzeroes << 4) + category[pos]]);
              writeBits(bitcode[pos]);
              i++;
            }
            if (end0pos != I63) {
              writeBits(EOB);
            }
            return DC;
          }
          function initCharLookupTable() {
            var sfcc = String.fromCharCode;
            for (var i = 0; i < 256; i++) {
              clt[i] = sfcc(i);
            }
          }
          this.encode = function(image, quality2) {
            if (quality2) setQuality(quality2);
            byteout = new Array();
            bytenew = 0;
            bytepos = 7;
            writeWord(65496);
            writeAPP0();
            writeDQT();
            writeSOF0(image.width, image.height);
            writeDHT();
            writeSOS();
            var DCY = 0;
            var DCU = 0;
            var DCV = 0;
            bytenew = 0;
            bytepos = 7;
            this.encode.displayName = "_encode_";
            var imageData = image.data;
            var width = image.width;
            var height = image.height;
            var quadWidth = width * 4;
            var tripleWidth = width * 3;
            var x, y = 0;
            var r, g, b;
            var start, p, col, row, pos;
            while (y < height) {
              x = 0;
              while (x < quadWidth) {
                start = quadWidth * y + x;
                p = start;
                col = -1;
                row = 0;
                for (pos = 0; pos < 64; pos++) {
                  row = pos >> 3;
                  col = (pos & 7) * 4;
                  p = start + row * quadWidth + col;
                  if (y + row >= height) {
                    p -= quadWidth * (y + 1 + row - height);
                  }
                  if (x + col >= quadWidth) {
                    p -= x + col - quadWidth + 4;
                  }
                  r = imageData[p++];
                  g = imageData[p++];
                  b = imageData[p++];
                  YDU[pos] = (RGB_YUV_TABLE[r] + RGB_YUV_TABLE[g + 256 >> 0] + RGB_YUV_TABLE[b + 512 >> 0] >> 16) - 128;
                  UDU[pos] = (RGB_YUV_TABLE[r + 768 >> 0] + RGB_YUV_TABLE[g + 1024 >> 0] + RGB_YUV_TABLE[b + 1280 >> 0] >> 16) - 128;
                  VDU[pos] = (RGB_YUV_TABLE[r + 1280 >> 0] + RGB_YUV_TABLE[g + 1536 >> 0] + RGB_YUV_TABLE[b + 1792 >> 0] >> 16) - 128;
                }
                DCY = processDU(YDU, fdtbl_Y, DCY, YDC_HT, YAC_HT);
                DCU = processDU(UDU, fdtbl_UV, DCU, UVDC_HT, UVAC_HT);
                DCV = processDU(VDU, fdtbl_UV, DCV, UVDC_HT, UVAC_HT);
                x += 32;
              }
              y += 8;
            }
            if (bytepos >= 0) {
              var fillbits = [];
              fillbits[1] = bytepos + 1;
              fillbits[0] = (1 << bytepos + 1) - 1;
              writeBits(fillbits);
            }
            writeWord(65497);
            var jpegDataUri = "data:image/jpeg;base64," + btoa(byteout.join(""));
            byteout = [];
            return jpegDataUri;
          };
          function setQuality(quality2) {
            if (quality2 <= 0) {
              quality2 = 1;
            }
            if (quality2 > 100) {
              quality2 = 100;
            }
            if (currentQuality == quality2) return;
            var sf = 0;
            if (quality2 < 50) {
              sf = Math.floor(5e3 / quality2);
            } else {
              sf = Math.floor(200 - quality2 * 2);
            }
            initQuantTables(sf);
            currentQuality = quality2;
          }
          function init() {
            if (!quality) quality = 50;
            initCharLookupTable();
            initHuffmanTbl();
            initCategoryNumber();
            initRGBYUVTable();
            setQuality(quality);
          }
          init();
        }
        ;
        JPEGEncoder.encode = function(data, quality) {
          var encoder = new JPEGEncoder(quality);
          return encoder.encode(data);
        };
        return JPEGEncoder;
      });
      define2("runtime/html5/androidpatch", [
        "runtime/html5/util",
        "runtime/html5/jpegencoder",
        "base"
      ], function(Util, encoder, Base) {
        var origin = Util.canvasToDataUrl, supportJpeg;
        Util.canvasToDataUrl = function(canvas, type, quality) {
          var ctx, w, h, fragement, parts;
          if (!Base.os.android) {
            return origin.apply(null, arguments);
          }
          if (type === "image/jpeg" && typeof supportJpeg === "undefined") {
            fragement = origin.apply(null, arguments);
            parts = fragement.split(",");
            if (~parts[0].indexOf("base64")) {
              fragement = atob(parts[1]);
            } else {
              fragement = decodeURIComponent(parts[1]);
            }
            fragement = fragement.substring(0, 2);
            supportJpeg = fragement.charCodeAt(0) === 255 && fragement.charCodeAt(1) === 216;
          }
          if (type === "image/jpeg" && !supportJpeg) {
            w = canvas.width;
            h = canvas.height;
            ctx = canvas.getContext("2d");
            return encoder.encode(ctx.getImageData(0, 0, w, h), quality);
          }
          return origin.apply(null, arguments);
        };
      });
      define2("runtime/html5/image", [
        "base",
        "runtime/html5/runtime",
        "runtime/html5/util"
      ], function(Base, Html5Runtime, Util) {
        var BLANK = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D";
        return Html5Runtime.register("Image", {
          // flag: 标记是否被修改过。
          modified: false,
          init: function() {
            var me = this, img = new Image();
            img.onload = function() {
              me._info = {
                type: me.type,
                width: this.width,
                height: this.height
              };
              if (!me._metas && "image/jpeg" === me.type) {
                Util.parseMeta(me._blob, function(error, ret) {
                  me._metas = ret;
                  me.owner.trigger("load");
                });
              } else {
                me.owner.trigger("load");
              }
            };
            img.onerror = function() {
              me.owner.trigger("error");
            };
            me._img = img;
          },
          loadFromBlob: function(blob) {
            var me = this, img = me._img;
            me._blob = blob;
            me.type = blob.type;
            img.src = Util.createObjectURL(blob.getSource());
            me.owner.once("load", function() {
              Util.revokeObjectURL(img.src);
            });
          },
          resize: function(width, height) {
            var canvas = this._canvas || (this._canvas = document.createElement("canvas"));
            this._resize(this._img, canvas, width, height);
            this._blob = null;
            this.modified = true;
            this.owner.trigger("complete", "resize");
          },
          crop: function(x, y, w, h, s) {
            var cvs = this._canvas || (this._canvas = document.createElement("canvas")), opts = this.options, img = this._img, iw = img.naturalWidth, ih = img.naturalHeight, orientation = this.getOrientation();
            s = s || 1;
            cvs.width = w;
            cvs.height = h;
            opts.preserveHeaders || this._rotate2Orientaion(cvs, orientation);
            this._renderImageToCanvas(cvs, img, -x, -y, iw * s, ih * s);
            this._blob = null;
            this.modified = true;
            this.owner.trigger("complete", "crop");
          },
          getAsBlob: function(type) {
            var blob = this._blob, opts = this.options, canvas;
            type = type || this.type;
            if (this.modified || this.type !== type) {
              canvas = this._canvas;
              if (type === "image/jpeg") {
                blob = Util.canvasToDataUrl(canvas, type, opts.quality);
                if (opts.preserveHeaders && this._metas && this._metas.imageHead) {
                  blob = Util.dataURL2ArrayBuffer(blob);
                  blob = Util.updateImageHead(
                    blob,
                    this._metas.imageHead
                  );
                  blob = Util.arrayBufferToBlob(blob, type);
                  return blob;
                }
              } else {
                blob = Util.canvasToDataUrl(canvas, type);
              }
              blob = Util.dataURL2Blob(blob);
            }
            return blob;
          },
          getAsDataUrl: function(type) {
            var opts = this.options;
            type = type || this.type;
            if (type === "image/jpeg") {
              return Util.canvasToDataUrl(this._canvas, type, opts.quality);
            } else {
              return this._canvas.toDataURL(type);
            }
          },
          getOrientation: function() {
            return this._metas && this._metas.exif && this._metas.exif.get("Orientation") || 1;
          },
          info: function(val) {
            if (val) {
              this._info = val;
              return this;
            }
            return this._info;
          },
          meta: function(val) {
            if (val) {
              this._metas = val;
              return this;
            }
            return this._metas;
          },
          destroy: function() {
            var canvas = this._canvas;
            this._img.onload = null;
            if (canvas) {
              canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height);
              canvas.width = canvas.height = 0;
              this._canvas = null;
            }
            this._img.src = BLANK;
            this._img = this._blob = null;
          },
          _resize: function(img, cvs, width, height) {
            var opts = this.options, naturalWidth = img.width, naturalHeight = img.height, orientation = this.getOrientation(), scale, w, h, x, y;
            if (~[5, 6, 7, 8].indexOf(orientation)) {
              width ^= height;
              height ^= width;
              width ^= height;
            }
            scale = Math[opts.crop ? "max" : "min"](
              width / naturalWidth,
              height / naturalHeight
            );
            opts.allowMagnify || (scale = Math.min(1, scale));
            w = naturalWidth * scale;
            h = naturalHeight * scale;
            if (opts.crop) {
              cvs.width = width;
              cvs.height = height;
            } else {
              cvs.width = w;
              cvs.height = h;
            }
            x = (cvs.width - w) / 2;
            y = (cvs.height - h) / 2;
            opts.preserveHeaders || this._rotate2Orientaion(cvs, orientation);
            this._renderImageToCanvas(cvs, img, x, y, w, h);
          },
          _rotate2Orientaion: function(canvas, orientation) {
            var width = canvas.width, height = canvas.height, ctx = canvas.getContext("2d");
            switch (orientation) {
              case 5:
              case 6:
              case 7:
              case 8:
                canvas.width = height;
                canvas.height = width;
                break;
            }
            switch (orientation) {
              case 2:
                ctx.translate(width, 0);
                ctx.scale(-1, 1);
                break;
              case 3:
                ctx.translate(width, height);
                ctx.rotate(Math.PI);
                break;
              case 4:
                ctx.translate(0, height);
                ctx.scale(1, -1);
                break;
              case 5:
                ctx.rotate(0.5 * Math.PI);
                ctx.scale(1, -1);
                break;
              case 6:
                ctx.rotate(0.5 * Math.PI);
                ctx.translate(0, -height);
                break;
              case 7:
                ctx.rotate(0.5 * Math.PI);
                ctx.translate(width, -height);
                ctx.scale(-1, 1);
                break;
              case 8:
                ctx.rotate(-0.5 * Math.PI);
                ctx.translate(-width, 0);
                break;
            }
          },
          // https://github.com/stomita/ios-imagefile-megapixel/
          // blob/master/src/megapix-image.js
          _renderImageToCanvas: function() {
            if (!Base.os.ios) {
              return function(canvas) {
                var args = Base.slice(arguments, 1), ctx = canvas.getContext("2d");
                ctx.drawImage.apply(ctx, args);
              };
            }
            function detectVerticalSquash(img, iw, ih) {
              var canvas = document.createElement("canvas"), ctx = canvas.getContext("2d"), sy = 0, ey = ih, py = ih, data, alpha, ratio;
              canvas.width = 1;
              canvas.height = ih;
              ctx.drawImage(img, 0, 0);
              data = ctx.getImageData(0, 0, 1, ih).data;
              while (py > sy) {
                alpha = data[(py - 1) * 4 + 3];
                if (alpha === 0) {
                  ey = py;
                } else {
                  sy = py;
                }
                py = ey + sy >> 1;
              }
              ratio = py / ih;
              return ratio === 0 ? 1 : ratio;
            }
            if (Base.os.ios >= 7) {
              return function(canvas, img, x, y, w, h) {
                var iw = img.naturalWidth, ih = img.naturalHeight, vertSquashRatio = detectVerticalSquash(img, iw, ih);
                return canvas.getContext("2d").drawImage(
                  img,
                  0,
                  0,
                  iw * vertSquashRatio,
                  ih * vertSquashRatio,
                  x,
                  y,
                  w,
                  h
                );
              };
            }
            function detectSubsampling(img) {
              var iw = img.naturalWidth, ih = img.naturalHeight, canvas, ctx;
              if (iw * ih > 1024 * 1024) {
                canvas = document.createElement("canvas");
                canvas.width = canvas.height = 1;
                ctx = canvas.getContext("2d");
                ctx.drawImage(img, -iw + 1, 0);
                return ctx.getImageData(0, 0, 1, 1).data[3] === 0;
              } else {
                return false;
              }
            }
            return function(canvas, img, x, y, width, height) {
              var iw = img.naturalWidth, ih = img.naturalHeight, ctx = canvas.getContext("2d"), subsampled = detectSubsampling(img), doSquash = this.type === "image/jpeg", d = 1024, sy = 0, dy = 0, tmpCanvas, tmpCtx, vertSquashRatio, dw, dh, sx, dx;
              if (subsampled) {
                iw /= 2;
                ih /= 2;
              }
              ctx.save();
              tmpCanvas = document.createElement("canvas");
              tmpCanvas.width = tmpCanvas.height = d;
              tmpCtx = tmpCanvas.getContext("2d");
              vertSquashRatio = doSquash ? detectVerticalSquash(img, iw, ih) : 1;
              dw = Math.ceil(d * width / iw);
              dh = Math.ceil(d * height / ih / vertSquashRatio);
              while (sy < ih) {
                sx = 0;
                dx = 0;
                while (sx < iw) {
                  tmpCtx.clearRect(0, 0, d, d);
                  tmpCtx.drawImage(img, -sx, -sy);
                  ctx.drawImage(
                    tmpCanvas,
                    0,
                    0,
                    d,
                    d,
                    x + dx,
                    y + dy,
                    dw,
                    dh
                  );
                  sx += d;
                  dx += dw;
                }
                sy += d;
                dy += dh;
              }
              ctx.restore();
              tmpCanvas = tmpCtx = null;
            };
          }()
        });
      });
      define2("runtime/html5/transport", [
        "base",
        "runtime/html5/runtime"
      ], function(Base, Html5Runtime) {
        var noop = Base.noop, $ = Base.$;
        return Html5Runtime.register("Transport", {
          init: function() {
            this._status = 0;
            this._response = null;
          },
          send: function() {
            var owner = this.owner, opts = this.options, xhr = this._initAjax(), blob = owner._blob, server = opts.server, formData, binary, fr;
            if (opts.sendAsBinary) {
              server += (/\?/.test(server) ? "&" : "?") + $.param(owner._formData);
              binary = blob.getSource();
            } else {
              formData = new FormData();
              $.each(owner._formData, function(k, v) {
                formData.append(k, v);
              });
              formData.append(
                opts.fileVal,
                blob.getSource(),
                opts.filename || owner._formData.name || ""
              );
            }
            if (opts.withCredentials && "withCredentials" in xhr) {
              xhr.open(opts.method, server, true);
              xhr.withCredentials = true;
            } else {
              xhr.open(opts.method, server);
            }
            this._setRequestHeader(xhr, opts.headers);
            if (binary) {
              xhr.overrideMimeType && xhr.overrideMimeType("application/octet-stream");
              if (Base.os.android) {
                fr = new FileReader();
                fr.onload = function() {
                  xhr.send(this.result);
                  fr = fr.onload = null;
                };
                fr.readAsArrayBuffer(binary);
              } else {
                xhr.send(binary);
              }
            } else {
              xhr.send(formData);
            }
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
            var xhr = this._xhr;
            if (xhr) {
              xhr.upload.onprogress = noop;
              xhr.onreadystatechange = noop;
              xhr.abort();
              this._xhr = xhr = null;
            }
          },
          destroy: function() {
            this.abort();
          },
          _initAjax: function() {
            var me = this, xhr = new XMLHttpRequest(), opts = this.options;
            if (opts.withCredentials && !("withCredentials" in xhr) && typeof XDomainRequest !== "undefined") {
              xhr = new XDomainRequest();
            }
            xhr.upload.onprogress = function(e) {
              var percentage = 0;
              if (e.lengthComputable) {
                percentage = e.loaded / e.total;
              }
              return me.trigger("progress", percentage);
            };
            xhr.onreadystatechange = function() {
              if (xhr.readyState !== 4) {
                return;
              }
              xhr.upload.onprogress = noop;
              xhr.onreadystatechange = noop;
              me._xhr = null;
              me._status = xhr.status;
              if (xhr.status >= 200 && xhr.status < 300) {
                me._response = xhr.responseText;
                return me.trigger("load");
              } else if (xhr.status >= 500 && xhr.status < 600) {
                me._response = xhr.responseText;
                return me.trigger("error", "server");
              }
              return me.trigger("error", me._status ? "http" : "abort");
            };
            me._xhr = xhr;
            return xhr;
          },
          _setRequestHeader: function(xhr, headers) {
            $.each(headers, function(key, val) {
              xhr.setRequestHeader(key, val);
            });
          },
          _parseJson: function(str) {
            var json;
            try {
              json = JSON.parse(str);
            } catch (ex) {
              json = {};
            }
            return json;
          }
        });
      });
      define2("runtime/html5/md5", [
        "runtime/html5/runtime"
      ], function(FlashRuntime) {
        var add32 = function(a, b) {
          return a + b & 4294967295;
        }, cmn = function(q, a, b, x, s, t) {
          a = add32(add32(a, q), add32(x, t));
          return add32(a << s | a >>> 32 - s, b);
        }, ff = function(a, b, c, d, x, s, t) {
          return cmn(b & c | ~b & d, a, b, x, s, t);
        }, gg = function(a, b, c, d, x, s, t) {
          return cmn(b & d | c & ~d, a, b, x, s, t);
        }, hh = function(a, b, c, d, x, s, t) {
          return cmn(b ^ c ^ d, a, b, x, s, t);
        }, ii = function(a, b, c, d, x, s, t) {
          return cmn(c ^ (b | ~d), a, b, x, s, t);
        }, md5cycle = function(x, k) {
          var a = x[0], b = x[1], c = x[2], d = x[3];
          a = ff(a, b, c, d, k[0], 7, -680876936);
          d = ff(d, a, b, c, k[1], 12, -389564586);
          c = ff(c, d, a, b, k[2], 17, 606105819);
          b = ff(b, c, d, a, k[3], 22, -1044525330);
          a = ff(a, b, c, d, k[4], 7, -176418897);
          d = ff(d, a, b, c, k[5], 12, 1200080426);
          c = ff(c, d, a, b, k[6], 17, -1473231341);
          b = ff(b, c, d, a, k[7], 22, -45705983);
          a = ff(a, b, c, d, k[8], 7, 1770035416);
          d = ff(d, a, b, c, k[9], 12, -1958414417);
          c = ff(c, d, a, b, k[10], 17, -42063);
          b = ff(b, c, d, a, k[11], 22, -1990404162);
          a = ff(a, b, c, d, k[12], 7, 1804603682);
          d = ff(d, a, b, c, k[13], 12, -40341101);
          c = ff(c, d, a, b, k[14], 17, -1502002290);
          b = ff(b, c, d, a, k[15], 22, 1236535329);
          a = gg(a, b, c, d, k[1], 5, -165796510);
          d = gg(d, a, b, c, k[6], 9, -1069501632);
          c = gg(c, d, a, b, k[11], 14, 643717713);
          b = gg(b, c, d, a, k[0], 20, -373897302);
          a = gg(a, b, c, d, k[5], 5, -701558691);
          d = gg(d, a, b, c, k[10], 9, 38016083);
          c = gg(c, d, a, b, k[15], 14, -660478335);
          b = gg(b, c, d, a, k[4], 20, -405537848);
          a = gg(a, b, c, d, k[9], 5, 568446438);
          d = gg(d, a, b, c, k[14], 9, -1019803690);
          c = gg(c, d, a, b, k[3], 14, -187363961);
          b = gg(b, c, d, a, k[8], 20, 1163531501);
          a = gg(a, b, c, d, k[13], 5, -1444681467);
          d = gg(d, a, b, c, k[2], 9, -51403784);
          c = gg(c, d, a, b, k[7], 14, 1735328473);
          b = gg(b, c, d, a, k[12], 20, -1926607734);
          a = hh(a, b, c, d, k[5], 4, -378558);
          d = hh(d, a, b, c, k[8], 11, -2022574463);
          c = hh(c, d, a, b, k[11], 16, 1839030562);
          b = hh(b, c, d, a, k[14], 23, -35309556);
          a = hh(a, b, c, d, k[1], 4, -1530992060);
          d = hh(d, a, b, c, k[4], 11, 1272893353);
          c = hh(c, d, a, b, k[7], 16, -155497632);
          b = hh(b, c, d, a, k[10], 23, -1094730640);
          a = hh(a, b, c, d, k[13], 4, 681279174);
          d = hh(d, a, b, c, k[0], 11, -358537222);
          c = hh(c, d, a, b, k[3], 16, -722521979);
          b = hh(b, c, d, a, k[6], 23, 76029189);
          a = hh(a, b, c, d, k[9], 4, -640364487);
          d = hh(d, a, b, c, k[12], 11, -421815835);
          c = hh(c, d, a, b, k[15], 16, 530742520);
          b = hh(b, c, d, a, k[2], 23, -995338651);
          a = ii(a, b, c, d, k[0], 6, -198630844);
          d = ii(d, a, b, c, k[7], 10, 1126891415);
          c = ii(c, d, a, b, k[14], 15, -1416354905);
          b = ii(b, c, d, a, k[5], 21, -57434055);
          a = ii(a, b, c, d, k[12], 6, 1700485571);
          d = ii(d, a, b, c, k[3], 10, -1894986606);
          c = ii(c, d, a, b, k[10], 15, -1051523);
          b = ii(b, c, d, a, k[1], 21, -2054922799);
          a = ii(a, b, c, d, k[8], 6, 1873313359);
          d = ii(d, a, b, c, k[15], 10, -30611744);
          c = ii(c, d, a, b, k[6], 15, -1560198380);
          b = ii(b, c, d, a, k[13], 21, 1309151649);
          a = ii(a, b, c, d, k[4], 6, -145523070);
          d = ii(d, a, b, c, k[11], 10, -1120210379);
          c = ii(c, d, a, b, k[2], 15, 718787259);
          b = ii(b, c, d, a, k[9], 21, -343485551);
          x[0] = add32(a, x[0]);
          x[1] = add32(b, x[1]);
          x[2] = add32(c, x[2]);
          x[3] = add32(d, x[3]);
        }, md5blk = function(s) {
          var md5blks = [], i;
          for (i = 0; i < 64; i += 4) {
            md5blks[i >> 2] = s.charCodeAt(i) + (s.charCodeAt(i + 1) << 8) + (s.charCodeAt(i + 2) << 16) + (s.charCodeAt(i + 3) << 24);
          }
          return md5blks;
        }, md5blk_array = function(a) {
          var md5blks = [], i;
          for (i = 0; i < 64; i += 4) {
            md5blks[i >> 2] = a[i] + (a[i + 1] << 8) + (a[i + 2] << 16) + (a[i + 3] << 24);
          }
          return md5blks;
        }, md51 = function(s) {
          var n = s.length, state = [1732584193, -271733879, -1732584194, 271733878], i, length, tail, tmp, lo, hi;
          for (i = 64; i <= n; i += 64) {
            md5cycle(state, md5blk(s.substring(i - 64, i)));
          }
          s = s.substring(i - 64);
          length = s.length;
          tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
          for (i = 0; i < length; i += 1) {
            tail[i >> 2] |= s.charCodeAt(i) << (i % 4 << 3);
          }
          tail[i >> 2] |= 128 << (i % 4 << 3);
          if (i > 55) {
            md5cycle(state, tail);
            for (i = 0; i < 16; i += 1) {
              tail[i] = 0;
            }
          }
          tmp = n * 8;
          tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
          lo = parseInt(tmp[2], 16);
          hi = parseInt(tmp[1], 16) || 0;
          tail[14] = lo;
          tail[15] = hi;
          md5cycle(state, tail);
          return state;
        }, md51_array = function(a) {
          var n = a.length, state = [1732584193, -271733879, -1732584194, 271733878], i, length, tail, tmp, lo, hi;
          for (i = 64; i <= n; i += 64) {
            md5cycle(state, md5blk_array(a.subarray(i - 64, i)));
          }
          a = i - 64 < n ? a.subarray(i - 64) : new Uint8Array(0);
          length = a.length;
          tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
          for (i = 0; i < length; i += 1) {
            tail[i >> 2] |= a[i] << (i % 4 << 3);
          }
          tail[i >> 2] |= 128 << (i % 4 << 3);
          if (i > 55) {
            md5cycle(state, tail);
            for (i = 0; i < 16; i += 1) {
              tail[i] = 0;
            }
          }
          tmp = n * 8;
          tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
          lo = parseInt(tmp[2], 16);
          hi = parseInt(tmp[1], 16) || 0;
          tail[14] = lo;
          tail[15] = hi;
          md5cycle(state, tail);
          return state;
        }, hex_chr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"], rhex = function(n) {
          var s = "", j;
          for (j = 0; j < 4; j += 1) {
            s += hex_chr[n >> j * 8 + 4 & 15] + hex_chr[n >> j * 8 & 15];
          }
          return s;
        }, hex = function(x) {
          var i;
          for (i = 0; i < x.length; i += 1) {
            x[i] = rhex(x[i]);
          }
          return x.join("");
        }, md5 = function(s) {
          return hex(md51(s));
        }, SparkMD5 = function() {
          this.reset();
        };
        if (md5("hello") !== "5d41402abc4b2a76b9719d911017c592") {
          add32 = function(x, y) {
            var lsw = (x & 65535) + (y & 65535), msw = (x >> 16) + (y >> 16) + (lsw >> 16);
            return msw << 16 | lsw & 65535;
          };
        }
        SparkMD5.prototype.append = function(str) {
          if (/[\u0080-\uFFFF]/.test(str)) {
            str = unescape(encodeURIComponent(str));
          }
          this.appendBinary(str);
          return this;
        };
        SparkMD5.prototype.appendBinary = function(contents) {
          this._buff += contents;
          this._length += contents.length;
          var length = this._buff.length, i;
          for (i = 64; i <= length; i += 64) {
            md5cycle(this._state, md5blk(this._buff.substring(i - 64, i)));
          }
          this._buff = this._buff.substr(i - 64);
          return this;
        };
        SparkMD5.prototype.end = function(raw) {
          var buff = this._buff, length = buff.length, i, tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ret;
          for (i = 0; i < length; i += 1) {
            tail[i >> 2] |= buff.charCodeAt(i) << (i % 4 << 3);
          }
          this._finish(tail, length);
          ret = !!raw ? this._state : hex(this._state);
          this.reset();
          return ret;
        };
        SparkMD5.prototype._finish = function(tail, length) {
          var i = length, tmp, lo, hi;
          tail[i >> 2] |= 128 << (i % 4 << 3);
          if (i > 55) {
            md5cycle(this._state, tail);
            for (i = 0; i < 16; i += 1) {
              tail[i] = 0;
            }
          }
          tmp = this._length * 8;
          tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
          lo = parseInt(tmp[2], 16);
          hi = parseInt(tmp[1], 16) || 0;
          tail[14] = lo;
          tail[15] = hi;
          md5cycle(this._state, tail);
        };
        SparkMD5.prototype.reset = function() {
          this._buff = "";
          this._length = 0;
          this._state = [1732584193, -271733879, -1732584194, 271733878];
          return this;
        };
        SparkMD5.prototype.destroy = function() {
          delete this._state;
          delete this._buff;
          delete this._length;
        };
        SparkMD5.hash = function(str, raw) {
          if (/[\u0080-\uFFFF]/.test(str)) {
            str = unescape(encodeURIComponent(str));
          }
          var hash = md51(str);
          return !!raw ? hash : hex(hash);
        };
        SparkMD5.hashBinary = function(content, raw) {
          var hash = md51(content);
          return !!raw ? hash : hex(hash);
        };
        SparkMD5.ArrayBuffer = function() {
          this.reset();
        };
        SparkMD5.ArrayBuffer.prototype.append = function(arr) {
          var buff = this._concatArrayBuffer(this._buff, arr), length = buff.length, i;
          this._length += arr.byteLength;
          for (i = 64; i <= length; i += 64) {
            md5cycle(this._state, md5blk_array(buff.subarray(i - 64, i)));
          }
          this._buff = i - 64 < length ? buff.subarray(i - 64) : new Uint8Array(0);
          return this;
        };
        SparkMD5.ArrayBuffer.prototype.end = function(raw) {
          var buff = this._buff, length = buff.length, tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], i, ret;
          for (i = 0; i < length; i += 1) {
            tail[i >> 2] |= buff[i] << (i % 4 << 3);
          }
          this._finish(tail, length);
          ret = !!raw ? this._state : hex(this._state);
          this.reset();
          return ret;
        };
        SparkMD5.ArrayBuffer.prototype._finish = SparkMD5.prototype._finish;
        SparkMD5.ArrayBuffer.prototype.reset = function() {
          this._buff = new Uint8Array(0);
          this._length = 0;
          this._state = [1732584193, -271733879, -1732584194, 271733878];
          return this;
        };
        SparkMD5.ArrayBuffer.prototype.destroy = SparkMD5.prototype.destroy;
        SparkMD5.ArrayBuffer.prototype._concatArrayBuffer = function(first, second) {
          var firstLength = first.length, result = new Uint8Array(firstLength + second.byteLength);
          result.set(first);
          result.set(new Uint8Array(second), firstLength);
          return result;
        };
        SparkMD5.ArrayBuffer.hash = function(arr, raw) {
          var hash = md51_array(new Uint8Array(arr));
          return !!raw ? hash : hex(hash);
        };
        return FlashRuntime.register("Md5", {
          init: function() {
          },
          loadFromBlob: function(file) {
            var blob = file.getSource(), chunkSize = 2 * 1024 * 1024, chunks = Math.ceil(blob.size / chunkSize), chunk = 0, owner = this.owner, spark = new SparkMD5.ArrayBuffer(), me = this, blobSlice = blob.mozSlice || blob.webkitSlice || blob.slice, loadNext, fr;
            fr = new FileReader();
            loadNext = function() {
              var start, end;
              start = chunk * chunkSize;
              end = Math.min(start + chunkSize, blob.size);
              fr.onload = function(e) {
                spark.append(e.target.result);
                owner.trigger("progress", {
                  total: file.size,
                  loaded: end
                });
              };
              fr.onloadend = function() {
                fr.onloadend = fr.onload = null;
                if (++chunk < chunks) {
                  setTimeout(loadNext, 1);
                } else {
                  setTimeout(function() {
                    owner.trigger("load");
                    me.result = spark.end();
                    loadNext = file = blob = spark = null;
                    owner.trigger("complete");
                  }, 50);
                }
              };
              fr.readAsArrayBuffer(blobSlice.call(blob, start, end));
            };
            loadNext();
          },
          getResult: function() {
            return this.result;
          }
        });
      });
      define2("runtime/flash/runtime", [
        "base",
        "runtime/runtime",
        "runtime/compbase"
      ], function(Base, Runtime, CompBase) {
        var $ = Base.$, type = "flash", components = {};
        function getFlashVersion() {
          var version;
          try {
            version = navigator.plugins["Shockwave Flash"];
            version = version.description;
          } catch (ex) {
            try {
              version = new ActiveXObject("ShockwaveFlash.ShockwaveFlash").GetVariable("$version");
            } catch (ex2) {
              version = "0.0";
            }
          }
          version = version.match(/\d+/g);
          return parseFloat(version[0] + "." + version[1], 10);
        }
        function FlashRuntime() {
          var pool = {}, clients = {}, destroy = this.destroy, me = this, jsreciver = Base.guid("webuploader_");
          Runtime.apply(me, arguments);
          me.type = type;
          me.exec = function(comp, fn) {
            var client = this, uid = client.uid, args = Base.slice(arguments, 2), instance;
            clients[uid] = client;
            if (components[comp]) {
              if (!pool[uid]) {
                pool[uid] = new components[comp](client, me);
              }
              instance = pool[uid];
              if (instance[fn]) {
                return instance[fn].apply(instance, args);
              }
            }
            return me.flashExec.apply(client, arguments);
          };
          function handler(evt, obj) {
            var type2 = evt.type || evt, parts, uid;
            parts = type2.split("::");
            uid = parts[0];
            type2 = parts[1];
            if (type2 === "Ready" && uid === me.uid) {
              me.trigger("ready");
            } else if (clients[uid]) {
              clients[uid].trigger(type2.toLowerCase(), evt, obj);
            }
          }
          window2[jsreciver] = function() {
            var args = arguments;
            setTimeout(function() {
              handler.apply(null, args);
            }, 1);
          };
          this.jsreciver = jsreciver;
          this.destroy = function() {
            return destroy && destroy.apply(this, arguments);
          };
          this.flashExec = function(comp, fn) {
            var flash = me.getFlash(), args = Base.slice(arguments, 2);
            return flash.exec(this.uid, comp, fn, args);
          };
        }
        Base.inherits(Runtime, {
          constructor: FlashRuntime,
          init: function() {
            var container = this.getContainer(), opts = this.options, html;
            container.css({
              position: "absolute",
              top: "-8px",
              left: "-8px",
              width: "9px",
              height: "9px",
              overflow: "hidden"
            });
            html = '<object id="' + this.uid + '" type="application/x-shockwave-flash" data="' + opts.swf + '" ';
            if (Base.browser.ie) {
              html += 'classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" ';
            }
            html += 'width="100%" height="100%" style="outline:0"><param name="movie" value="' + opts.swf + '" /><param name="flashvars" value="uid=' + this.uid + "&jsreciver=" + this.jsreciver + '" /><param name="wmode" value="transparent" /><param name="allowscriptaccess" value="always" /></object>';
            container.html(html);
          },
          getFlash: function() {
            if (this._flash) {
              return this._flash;
            }
            this._flash = $("#" + this.uid).get(0);
            return this._flash;
          }
        });
        FlashRuntime.register = function(name, component) {
          component = components[name] = Base.inherits(CompBase, $.extend({
            // @todo fix this later
            flashExec: function() {
              var owner = this.owner, runtime = this.getRuntime();
              return runtime.flashExec.apply(owner, arguments);
            }
          }, component));
          return component;
        };
        if (getFlashVersion() >= 11.4) {
          Runtime.addRuntime(type, FlashRuntime);
        }
        return FlashRuntime;
      });
      define2("runtime/flash/filepicker", [
        "base",
        "runtime/flash/runtime"
      ], function(Base, FlashRuntime) {
        var $ = Base.$;
        return FlashRuntime.register("FilePicker", {
          init: function(opts) {
            var copy = $.extend({}, opts), len, i;
            len = copy.accept && copy.accept.length;
            for (i = 0; i < len; i++) {
              if (!copy.accept[i].title) {
                copy.accept[i].title = "Files";
              }
            }
            delete copy.button;
            delete copy.id;
            delete copy.container;
            this.flashExec("FilePicker", "init", copy);
          },
          destroy: function() {
            this.flashExec("FilePicker", "destroy");
          }
        });
      });
      define2("runtime/flash/image", [
        "runtime/flash/runtime"
      ], function(FlashRuntime) {
        return FlashRuntime.register("Image", {
          // init: function( options ) {
          //     var owner = this.owner;
          //     this.flashExec( 'Image', 'init', options );
          //     owner.on( 'load', function() {
          //         debugger;
          //     });
          // },
          loadFromBlob: function(blob) {
            var owner = this.owner;
            owner.info() && this.flashExec("Image", "info", owner.info());
            owner.meta() && this.flashExec("Image", "meta", owner.meta());
            this.flashExec("Image", "loadFromBlob", blob.uid);
          }
        });
      });
      define2("runtime/flash/transport", [
        "base",
        "runtime/flash/runtime",
        "runtime/client"
      ], function(Base, FlashRuntime, RuntimeClient) {
        var $ = Base.$;
        return FlashRuntime.register("Transport", {
          init: function() {
            this._status = 0;
            this._response = null;
            this._responseJson = null;
          },
          send: function() {
            var owner = this.owner, opts = this.options, xhr = this._initAjax(), blob = owner._blob, server = opts.server, binary;
            xhr.connectRuntime(blob.ruid);
            if (opts.sendAsBinary) {
              server += (/\?/.test(server) ? "&" : "?") + $.param(owner._formData);
              binary = blob.uid;
            } else {
              $.each(owner._formData, function(k, v) {
                xhr.exec("append", k, v);
              });
              xhr.exec(
                "appendBlob",
                opts.fileVal,
                blob.uid,
                opts.filename || owner._formData.name || ""
              );
            }
            this._setRequestHeader(xhr, opts.headers);
            xhr.exec("send", {
              method: opts.method,
              url: server,
              forceURLStream: opts.forceURLStream,
              mimeType: "application/octet-stream"
            }, binary);
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
            var xhr = this._xhr;
            if (xhr) {
              xhr.exec("abort");
              xhr.destroy();
              this._xhr = xhr = null;
            }
          },
          destroy: function() {
            this.abort();
          },
          _initAjax: function() {
            var me = this, xhr = new RuntimeClient("XMLHttpRequest");
            xhr.on("uploadprogress progress", function(e) {
              var percent = e.loaded / e.total;
              percent = Math.min(1, Math.max(0, percent));
              return me.trigger("progress", percent);
            });
            xhr.on("load", function() {
              var status = xhr.exec("getStatus"), readBody = false, err = "", p;
              xhr.off();
              me._xhr = null;
              if (status >= 200 && status < 300) {
                readBody = true;
              } else if (status >= 500 && status < 600) {
                readBody = true;
                err = "server";
              } else {
                err = "http";
              }
              if (readBody) {
                me._response = xhr.exec("getResponse");
                me._response = decodeURIComponent(me._response);
                p = function(s) {
                  try {
                    if (window2.JSON && window2.JSON.parse) {
                      return JSON.parse(s);
                    }
                    return new Function("return " + s).call();
                  } catch (err2) {
                    return {};
                  }
                };
                me._responseJson = me._response ? p(me._response) : {};
              }
              xhr.destroy();
              xhr = null;
              return err ? me.trigger("error", err) : me.trigger("load");
            });
            xhr.on("error", function() {
              xhr.off();
              me._xhr = null;
              me.trigger("error", "http");
            });
            me._xhr = xhr;
            return xhr;
          },
          _setRequestHeader: function(xhr, headers) {
            $.each(headers, function(key, val) {
              xhr.exec("setRequestHeader", key, val);
            });
          }
        });
      });
      define2("runtime/flash/blob", [
        "runtime/flash/runtime",
        "lib/blob"
      ], function(FlashRuntime, Blob2) {
        return FlashRuntime.register("Blob", {
          slice: function(start, end) {
            var blob = this.flashExec("Blob", "slice", start, end);
            return new Blob2(this.getRuid(), blob);
          }
        });
      });
      define2("runtime/flash/md5", [
        "runtime/flash/runtime"
      ], function(FlashRuntime) {
        return FlashRuntime.register("Md5", {
          init: function() {
          },
          loadFromBlob: function(blob) {
            return this.flashExec("Md5", "loadFromBlob", blob.uid);
          }
        });
      });
      define2("preset/all", [
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
      ], function(Base) {
        return Base;
      });
      define2("widgets/log", [
        "base",
        "uploader",
        "widgets/widget"
      ], function(Base, Uploader) {
        var $ = Base.$, logUrl = " http://static.tieba.baidu.com/tb/pms/img/st.gif??", product = (location.hostname || location.host || "protected").toLowerCase(), enable = product && /baidu/i.exec(product), base;
        if (!enable) {
          return;
        }
        base = {
          dv: 3,
          master: "webuploader",
          online: /test/.exec(product) ? 0 : 1,
          module: "",
          product,
          type: 0
        };
        function send(data) {
          var obj = $.extend({}, base, data), url = logUrl.replace(/^(.*)\?/, "$1" + $.param(obj)), image = new Image();
          image.src = url;
        }
        return Uploader.register({
          name: "log",
          init: function() {
            var owner = this.owner, count = 0, size = 0;
            owner.on("error", function(code) {
              send({
                type: 2,
                c_error_code: code
              });
            }).on("uploadError", function(file, reason) {
              send({
                type: 2,
                c_error_code: "UPLOAD_ERROR",
                c_reason: "" + reason
              });
            }).on("uploadComplete", function(file) {
              count++;
              size += file.size;
            }).on("uploadFinished", function() {
              send({
                c_count: count,
                c_size: size
              });
              count = size = 0;
            });
            send({
              c_usage: 1
            });
          }
        });
      });
      define2("webuploader", [
        "preset/all",
        "widgets/log"
      ], function(preset) {
        return preset;
      });
      var _require = require2;
      return _require("webuploader");
    });
  }
});
export default require_webuploader_fis();
/*! Bundled license information:

jquery/dist/jquery.js:
  (*!
   * jQuery JavaScript Library v3.7.1
   * https://jquery.com/
   *
   * Copyright OpenJS Foundation and other contributors
   * Released under the MIT license
   * https://jquery.org/license
   *
   * Date: 2023-08-28T13:37Z
   *)

webuploader/dist/webuploader.fis.js:
  (*! WebUploader 0.1.6 *)
*/
//# sourceMappingURL=webuploader.js.map
