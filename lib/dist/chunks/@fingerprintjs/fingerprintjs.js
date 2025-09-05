var N = function() {
  return N = Object.assign || function(t) {
    for (var n, a = 1, o = arguments.length; a < o; a++) {
      n = arguments[a];
      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
    }
    return t;
  }, N.apply(this, arguments);
};
function F(e, t, n, a) {
  function o(r) {
    return r instanceof n ? r : new n(function(i) {
      i(r);
    });
  }
  return new (n || (n = Promise))(function(r, i) {
    function c(u) {
      try {
        s(a.next(u));
      } catch (f) {
        i(f);
      }
    }
    function l(u) {
      try {
        s(a.throw(u));
      } catch (f) {
        i(f);
      }
    }
    function s(u) {
      u.done ? r(u.value) : o(u.value).then(c, l);
    }
    s((a = a.apply(e, t || [])).next());
  });
}
function W(e, t) {
  var n = { label: 0, sent: function() {
    if (r[0] & 1) throw r[1];
    return r[1];
  }, trys: [], ops: [] }, a, o, r, i = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
  return i.next = c(0), i.throw = c(1), i.return = c(2), typeof Symbol == "function" && (i[Symbol.iterator] = function() {
    return this;
  }), i;
  function c(s) {
    return function(u) {
      return l([s, u]);
    };
  }
  function l(s) {
    if (a) throw new TypeError("Generator is already executing.");
    for (; i && (i = 0, s[0] && (n = 0)), n; ) try {
      if (a = 1, o && (r = s[0] & 2 ? o.return : s[0] ? o.throw || ((r = o.return) && r.call(o), 0) : o.next) && !(r = r.call(o, s[1])).done) return r;
      switch (o = 0, r && (s = [s[0] & 2, r.value]), s[0]) {
        case 0:
        case 1:
          r = s;
          break;
        case 4:
          return n.label++, { value: s[1], done: !1 };
        case 5:
          n.label++, o = s[1], s = [0];
          continue;
        case 7:
          s = n.ops.pop(), n.trys.pop();
          continue;
        default:
          if (r = n.trys, !(r = r.length > 0 && r[r.length - 1]) && (s[0] === 6 || s[0] === 2)) {
            n = 0;
            continue;
          }
          if (s[0] === 3 && (!r || s[1] > r[0] && s[1] < r[3])) {
            n.label = s[1];
            break;
          }
          if (s[0] === 6 && n.label < r[1]) {
            n.label = r[1], r = s;
            break;
          }
          if (r && n.label < r[2]) {
            n.label = r[2], n.ops.push(s);
            break;
          }
          r[2] && n.ops.pop(), n.trys.pop();
          continue;
      }
      s = t.call(e, n);
    } catch (u) {
      s = [6, u], o = 0;
    } finally {
      a = r = 0;
    }
    if (s[0] & 5) throw s[1];
    return { value: s[0] ? s[1] : void 0, done: !0 };
  }
}
function ce(e, t, n) {
  if (n || arguments.length === 2) for (var a = 0, o = t.length, r; a < o; a++)
    (r || !(a in t)) && (r || (r = Array.prototype.slice.call(t, 0, a)), r[a] = t[a]);
  return e.concat(r || Array.prototype.slice.call(t));
}
var ue = "3.4.2";
function I(e, t) {
  return new Promise(function(n) {
    return setTimeout(n, e, t);
  });
}
function pe(e, t) {
  t === void 0 && (t = 1 / 0);
  var n = window.requestIdleCallback;
  return n ? new Promise(function(a) {
    return n.call(window, function() {
      return a();
    }, { timeout: t });
  }) : I(Math.min(e, t));
}
function se(e) {
  return !!e && typeof e.then == "function";
}
function K(e, t) {
  try {
    var n = e();
    se(n) ? n.then(function(a) {
      return t(!0, a);
    }, function(a) {
      return t(!1, a);
    }) : t(!0, n);
  } catch (a) {
    t(!1, a);
  }
}
function _(e, t, n) {
  return n === void 0 && (n = 16), F(this, void 0, void 0, function() {
    var a, o, r, i;
    return W(this, function(c) {
      switch (c.label) {
        case 0:
          a = Array(e.length), o = Date.now(), r = 0, c.label = 1;
        case 1:
          return r < e.length ? (a[r] = t(e[r], r), i = Date.now(), i >= o + n ? (o = i, [4, I(0)]) : [3, 3]) : [3, 4];
        case 2:
          c.sent(), c.label = 3;
        case 3:
          return ++r, [3, 1];
        case 4:
          return [2, a];
      }
    });
  });
}
function Y(e) {
  e.then(void 0, function() {
  });
}
function Z(e, t) {
  e = [e[0] >>> 16, e[0] & 65535, e[1] >>> 16, e[1] & 65535], t = [t[0] >>> 16, t[0] & 65535, t[1] >>> 16, t[1] & 65535];
  var n = [0, 0, 0, 0];
  return n[3] += e[3] + t[3], n[2] += n[3] >>> 16, n[3] &= 65535, n[2] += e[2] + t[2], n[1] += n[2] >>> 16, n[2] &= 65535, n[1] += e[1] + t[1], n[0] += n[1] >>> 16, n[1] &= 65535, n[0] += e[0] + t[0], n[0] &= 65535, [n[0] << 16 | n[1], n[2] << 16 | n[3]];
}
function x(e, t) {
  e = [e[0] >>> 16, e[0] & 65535, e[1] >>> 16, e[1] & 65535], t = [t[0] >>> 16, t[0] & 65535, t[1] >>> 16, t[1] & 65535];
  var n = [0, 0, 0, 0];
  return n[3] += e[3] * t[3], n[2] += n[3] >>> 16, n[3] &= 65535, n[2] += e[2] * t[3], n[1] += n[2] >>> 16, n[2] &= 65535, n[2] += e[3] * t[2], n[1] += n[2] >>> 16, n[2] &= 65535, n[1] += e[1] * t[3], n[0] += n[1] >>> 16, n[1] &= 65535, n[1] += e[2] * t[2], n[0] += n[1] >>> 16, n[1] &= 65535, n[1] += e[3] * t[1], n[0] += n[1] >>> 16, n[1] &= 65535, n[0] += e[0] * t[3] + e[1] * t[2] + e[2] * t[1] + e[3] * t[0], n[0] &= 65535, [n[0] << 16 | n[1], n[2] << 16 | n[3]];
}
function R(e, t) {
  return t %= 64, t === 32 ? [e[1], e[0]] : t < 32 ? [e[0] << t | e[1] >>> 32 - t, e[1] << t | e[0] >>> 32 - t] : (t -= 32, [e[1] << t | e[0] >>> 32 - t, e[0] << t | e[1] >>> 32 - t]);
}
function S(e, t) {
  return t %= 64, t === 0 ? e : t < 32 ? [e[0] << t | e[1] >>> 32 - t, e[1] << t] : [e[1] << t - 32, 0];
}
function h(e, t) {
  return [e[0] ^ t[0], e[1] ^ t[1]];
}
function q(e) {
  return e = h(e, [0, e[0] >>> 1]), e = x(e, [4283543511, 3981806797]), e = h(e, [0, e[0] >>> 1]), e = x(e, [3301882366, 444984403]), e = h(e, [0, e[0] >>> 1]), e;
}
function ge(e, t) {
  e = e || "", t = t || 0;
  var n = e.length % 16, a = e.length - n, o = [0, t], r = [0, t], i = [0, 0], c = [0, 0], l = [2277735313, 289559509], s = [1291169091, 658871167], u;
  for (u = 0; u < a; u = u + 16)
    i = [
      e.charCodeAt(u + 4) & 255 | (e.charCodeAt(u + 5) & 255) << 8 | (e.charCodeAt(u + 6) & 255) << 16 | (e.charCodeAt(u + 7) & 255) << 24,
      e.charCodeAt(u) & 255 | (e.charCodeAt(u + 1) & 255) << 8 | (e.charCodeAt(u + 2) & 255) << 16 | (e.charCodeAt(u + 3) & 255) << 24
    ], c = [
      e.charCodeAt(u + 12) & 255 | (e.charCodeAt(u + 13) & 255) << 8 | (e.charCodeAt(u + 14) & 255) << 16 | (e.charCodeAt(u + 15) & 255) << 24,
      e.charCodeAt(u + 8) & 255 | (e.charCodeAt(u + 9) & 255) << 8 | (e.charCodeAt(u + 10) & 255) << 16 | (e.charCodeAt(u + 11) & 255) << 24
    ], i = x(i, l), i = R(i, 31), i = x(i, s), o = h(o, i), o = R(o, 27), o = Z(o, r), o = Z(x(o, [0, 5]), [0, 1390208809]), c = x(c, s), c = R(c, 33), c = x(c, l), r = h(r, c), r = R(r, 31), r = Z(r, o), r = Z(x(r, [0, 5]), [0, 944331445]);
  switch (i = [0, 0], c = [0, 0], n) {
    case 15:
      c = h(c, S([0, e.charCodeAt(u + 14)], 48));
    case 14:
      c = h(c, S([0, e.charCodeAt(u + 13)], 40));
    case 13:
      c = h(c, S([0, e.charCodeAt(u + 12)], 32));
    case 12:
      c = h(c, S([0, e.charCodeAt(u + 11)], 24));
    case 11:
      c = h(c, S([0, e.charCodeAt(u + 10)], 16));
    case 10:
      c = h(c, S([0, e.charCodeAt(u + 9)], 8));
    case 9:
      c = h(c, [0, e.charCodeAt(u + 8)]), c = x(c, s), c = R(c, 33), c = x(c, l), r = h(r, c);
    case 8:
      i = h(i, S([0, e.charCodeAt(u + 7)], 56));
    case 7:
      i = h(i, S([0, e.charCodeAt(u + 6)], 48));
    case 6:
      i = h(i, S([0, e.charCodeAt(u + 5)], 40));
    case 5:
      i = h(i, S([0, e.charCodeAt(u + 4)], 32));
    case 4:
      i = h(i, S([0, e.charCodeAt(u + 3)], 24));
    case 3:
      i = h(i, S([0, e.charCodeAt(u + 2)], 16));
    case 2:
      i = h(i, S([0, e.charCodeAt(u + 1)], 8));
    case 1:
      i = h(i, [0, e.charCodeAt(u)]), i = x(i, l), i = R(i, 31), i = x(i, s), o = h(o, i);
  }
  return o = h(o, [0, e.length]), r = h(r, [0, e.length]), o = Z(o, r), r = Z(r, o), o = q(o), r = q(r), o = Z(o, r), r = Z(r, o), ("00000000" + (o[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (o[1] >>> 0).toString(16)).slice(-8) + ("00000000" + (r[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (r[1] >>> 0).toString(16)).slice(-8);
}
function be(e) {
  var t;
  return N({ name: e.name, message: e.message, stack: (t = e.stack) === null || t === void 0 ? void 0 : t.split(`
`) }, e);
}
function ye(e, t) {
  for (var n = 0, a = e.length; n < a; ++n)
    if (e[n] === t)
      return !0;
  return !1;
}
function we(e, t) {
  return !ye(e, t);
}
function O(e) {
  return parseInt(e);
}
function C(e) {
  return parseFloat(e);
}
function k(e, t) {
  return typeof e == "number" && isNaN(e) ? t : e;
}
function V(e) {
  return e.reduce(function(t, n) {
    return t + (n ? 1 : 0);
  }, 0);
}
function le(e, t) {
  if (t === void 0 && (t = 1), Math.abs(t) >= 1)
    return Math.round(e / t) * t;
  var n = 1 / t;
  return Math.round(e * n) / n;
}
function Le(e) {
  for (var t, n, a = "Unexpected syntax '".concat(e, "'"), o = /^\s*([a-z-]*)(.*)$/i.exec(e), r = o[1] || void 0, i = {}, c = /([.:#][\w-]+|\[.+?\])/gi, l = function(v, p) {
    i[v] = i[v] || [], i[v].push(p);
  }; ; ) {
    var s = c.exec(o[2]);
    if (!s)
      break;
    var u = s[0];
    switch (u[0]) {
      case ".":
        l("class", u.slice(1));
        break;
      case "#":
        l("id", u.slice(1));
        break;
      case "[": {
        var f = /^\[([\w-]+)([~|^$*]?=("(.*?)"|([\w-]+)))?(\s+[is])?\]$/.exec(u);
        if (f)
          l(f[1], (n = (t = f[4]) !== null && t !== void 0 ? t : f[5]) !== null && n !== void 0 ? n : "");
        else
          throw new Error(a);
        break;
      }
      default:
        throw new Error(a);
    }
  }
  return [r, i];
}
function $(e) {
  return e && typeof e == "object" && "message" in e ? e : { message: e };
}
function Se(e) {
  return typeof e != "function";
}
function xe(e, t) {
  var n = new Promise(function(a) {
    var o = Date.now();
    K(e.bind(null, t), function() {
      for (var r = [], i = 0; i < arguments.length; i++)
        r[i] = arguments[i];
      var c = Date.now() - o;
      if (!r[0])
        return a(function() {
          return { error: $(r[1]), duration: c };
        });
      var l = r[1];
      if (Se(l))
        return a(function() {
          return { value: l, duration: c };
        });
      a(function() {
        return new Promise(function(s) {
          var u = Date.now();
          K(l, function() {
            for (var f = [], v = 0; v < arguments.length; v++)
              f[v] = arguments[v];
            var p = c + Date.now() - u;
            if (!f[0])
              return s({ error: $(f[1]), duration: p });
            s({ value: f[1], duration: p });
          });
        });
      });
    });
  });
  return Y(n), function() {
    return n.then(function(o) {
      return o();
    });
  };
}
function Ce(e, t, n) {
  var a = Object.keys(e).filter(function(r) {
    return we(n, r);
  }), o = _(a, function(r) {
    return xe(e[r], t);
  });
  return Y(o), function() {
    return F(this, void 0, void 0, function() {
      var i, c, l, s, u;
      return W(this, function(f) {
        switch (f.label) {
          case 0:
            return [4, o];
          case 1:
            return i = f.sent(), [4, _(i, function(v) {
              var p = v();
              return Y(p), p;
            })];
          case 2:
            return c = f.sent(), [
              4,
              Promise.all(c)
              // Keeping the component keys order the same as the source keys order
            ];
          case 3:
            for (l = f.sent(), s = {}, u = 0; u < a.length; ++u)
              s[a[u]] = l[u];
            return [2, s];
        }
      });
    });
  };
}
function fe() {
  var e = window, t = navigator;
  return V([
    "MSCSSMatrix" in e,
    "msSetImmediate" in e,
    "msIndexedDB" in e,
    "msMaxTouchPoints" in t,
    "msPointerEnabled" in t
  ]) >= 4;
}
function Ve() {
  var e = window, t = navigator;
  return V(["msWriteProfilerMark" in e, "MSStream" in e, "msLaunchUri" in t, "msSaveBlob" in t]) >= 3 && !fe();
}
function U() {
  var e = window, t = navigator;
  return V([
    "webkitPersistentStorage" in t,
    "webkitTemporaryStorage" in t,
    t.vendor.indexOf("Google") === 0,
    "webkitResolveLocalFileSystemURL" in e,
    "BatteryManager" in e,
    "webkitMediaStream" in e,
    "webkitSpeechGrammar" in e
  ]) >= 5;
}
function X() {
  var e = window, t = navigator;
  return V([
    "ApplePayError" in e,
    "CSSPrimitiveValue" in e,
    "Counter" in e,
    t.vendor.indexOf("Apple") === 0,
    "getStorageUpdates" in t,
    "WebKitMediaKeys" in e
  ]) >= 4;
}
function Q() {
  var e = window;
  return V([
    "safari" in e,
    !("DeviceMotionEvent" in e),
    !("ongestureend" in e),
    !("standalone" in navigator)
  ]) >= 3;
}
function ke() {
  var e, t, n = window;
  return V([
    "buildID" in navigator,
    "MozAppearance" in ((t = (e = document.documentElement) === null || e === void 0 ? void 0 : e.style) !== null && t !== void 0 ? t : {}),
    "onmozfullscreenchange" in n,
    "mozInnerScreenX" in n,
    "CSSMozDocumentRule" in n,
    "CanvasCaptureMediaStream" in n
  ]) >= 4;
}
function Fe() {
  var e = window;
  return V([
    !("MediaSettingsRange" in e),
    "RTCEncodedAudioFrame" in e,
    "" + e.Intl == "[object Intl]",
    "" + e.Reflect == "[object Reflect]"
  ]) >= 3;
}
function We() {
  var e = window;
  return V([
    "DOMRectList" in e,
    "RTCPeerConnectionIceEvent" in e,
    "SVGGeometryElement" in e,
    "ontransitioncancel" in e
  ]) >= 3;
}
function Ze() {
  if (navigator.platform === "iPad")
    return !0;
  var e = screen, t = e.width / e.height;
  return V([
    "MediaSource" in window,
    !!Element.prototype.webkitRequestFullscreen,
    // iPhone 4S that runs iOS 9 matches this. But it won't match the criteria above, so it won't be detected as iPad.
    t > 0.65 && t < 1.53
  ]) >= 2;
}
function Me() {
  var e = document;
  return e.fullscreenElement || e.msFullscreenElement || e.mozFullScreenElement || e.webkitFullscreenElement || null;
}
function Re() {
  var e = document;
  return (e.exitFullscreen || e.msExitFullscreen || e.mozCancelFullScreen || e.webkitExitFullscreen).call(e);
}
function de() {
  var e = U(), t = ke();
  if (!e && !t)
    return !1;
  var n = window;
  return V([
    "onorientationchange" in n,
    "orientation" in n,
    e && !("SharedWorker" in n),
    t && /android/i.test(navigator.appVersion)
  ]) >= 2;
}
function Ae() {
  var e = window, t = e.OfflineAudioContext || e.webkitOfflineAudioContext;
  if (!t)
    return -2;
  if (Ge())
    return -1;
  var n = 4500, a = 5e3, o = new t(1, a, 44100), r = o.createOscillator();
  r.type = "triangle", r.frequency.value = 1e4;
  var i = o.createDynamicsCompressor();
  i.threshold.value = -50, i.knee.value = 40, i.ratio.value = 12, i.attack.value = 0, i.release.value = 0.25, r.connect(i), i.connect(o.destination), r.start(0);
  var c = Ie(o), l = c[0], s = c[1], u = l.then(function(f) {
    return Ye(f.getChannelData(0).subarray(n));
  }, function(f) {
    if (f.name === "timeout" || f.name === "suspended")
      return -3;
    throw f;
  });
  return Y(u), function() {
    return s(), u;
  };
}
function Ge() {
  return X() && !Q() && !We();
}
function Ie(e) {
  var t = 3, n = 500, a = 500, o = 5e3, r = function() {
  }, i = new Promise(function(c, l) {
    var s = !1, u = 0, f = 0;
    e.oncomplete = function(g) {
      return c(g.renderedBuffer);
    };
    var v = function() {
      setTimeout(function() {
        return l(ee(
          "timeout"
          /* InnerErrorName.Timeout */
        ));
      }, Math.min(a, f + o - Date.now()));
    }, p = function() {
      try {
        var g = e.startRendering();
        switch (se(g) && Y(g), e.state) {
          case "running":
            f = Date.now(), s && v();
            break;
          case "suspended":
            document.hidden || u++, s && u >= t ? l(ee(
              "suspended"
              /* InnerErrorName.Suspended */
            )) : setTimeout(p, n);
            break;
        }
      } catch (y) {
        l(y);
      }
    };
    p(), r = function() {
      s || (s = !0, f > 0 && v());
    };
  });
  return [i, r];
}
function Ye(e) {
  for (var t = 0, n = 0; n < e.length; ++n)
    t += Math.abs(e[n]);
  return t;
}
function ee(e) {
  var t = new Error(e);
  return t.name = e, t;
}
function ve(e, t, n) {
  var a, o, r;
  return n === void 0 && (n = 50), F(this, void 0, void 0, function() {
    var i, c;
    return W(this, function(l) {
      switch (l.label) {
        case 0:
          i = document, l.label = 1;
        case 1:
          return i.body ? [3, 3] : [4, I(n)];
        case 2:
          return l.sent(), [3, 1];
        case 3:
          c = i.createElement("iframe"), l.label = 4;
        case 4:
          return l.trys.push([4, , 10, 11]), [4, new Promise(function(s, u) {
            var f = !1, v = function() {
              f = !0, s();
            }, p = function(b) {
              f = !0, u(b);
            };
            c.onload = v, c.onerror = p;
            var g = c.style;
            g.setProperty("display", "block", "important"), g.position = "absolute", g.top = "0", g.left = "0", g.visibility = "hidden", t && "srcdoc" in c ? c.srcdoc = t : c.src = "about:blank", i.body.appendChild(c);
            var y = function() {
              var b, w;
              f || (((w = (b = c.contentWindow) === null || b === void 0 ? void 0 : b.document) === null || w === void 0 ? void 0 : w.readyState) === "complete" ? v() : setTimeout(y, 10));
            };
            y();
          })];
        case 5:
          l.sent(), l.label = 6;
        case 6:
          return !((o = (a = c.contentWindow) === null || a === void 0 ? void 0 : a.document) === null || o === void 0) && o.body ? [3, 8] : [4, I(n)];
        case 7:
          return l.sent(), [3, 6];
        case 8:
          return [4, e(c, c.contentWindow)];
        case 9:
          return [2, l.sent()];
        case 10:
          return (r = c.parentNode) === null || r === void 0 || r.removeChild(c), [
            7
            /*endfinally*/
          ];
        case 11:
          return [
            2
            /*return*/
          ];
      }
    });
  });
}
function Xe(e) {
  for (var t = Le(e), n = t[0], a = t[1], o = document.createElement(n != null ? n : "div"), r = 0, i = Object.keys(a); r < i.length; r++) {
    var c = i[r], l = a[c].join(" ");
    c === "style" ? je(o.style, l) : o.setAttribute(c, l);
  }
  return o;
}
function je(e, t) {
  for (var n = 0, a = t.split(";"); n < a.length; n++) {
    var o = a[n], r = /^\s*([\w-]+)\s*:\s*(.+?)(\s*!([\w-]+))?\s*$/.exec(o);
    if (r) {
      var i = r[1], c = r[2], l = r[4];
      e.setProperty(i, c, l || "");
    }
  }
}
var Pe = "mmMwWLliI0O&1", Te = "48px", A = ["monospace", "sans-serif", "serif"], te = [
  // This is android-specific font from "Roboto" family
  "sans-serif-thin",
  "ARNO PRO",
  "Agency FB",
  "Arabic Typesetting",
  "Arial Unicode MS",
  "AvantGarde Bk BT",
  "BankGothic Md BT",
  "Batang",
  "Bitstream Vera Sans Mono",
  "Calibri",
  "Century",
  "Century Gothic",
  "Clarendon",
  "EUROSTILE",
  "Franklin Gothic",
  "Futura Bk BT",
  "Futura Md BT",
  "GOTHAM",
  "Gill Sans",
  "HELV",
  "Haettenschweiler",
  "Helvetica Neue",
  "Humanst521 BT",
  "Leelawadee",
  "Letter Gothic",
  "Levenim MT",
  "Lucida Bright",
  "Lucida Sans",
  "Menlo",
  "MS Mincho",
  "MS Outlook",
  "MS Reference Specialty",
  "MS UI Gothic",
  "MT Extra",
  "MYRIAD PRO",
  "Marlett",
  "Meiryo UI",
  "Microsoft Uighur",
  "Minion Pro",
  "Monotype Corsiva",
  "PMingLiU",
  "Pristina",
  "SCRIPTINA",
  "Segoe UI Light",
  "Serifa",
  "SimHei",
  "Small Fonts",
  "Staccato222 BT",
  "TRAJAN PRO",
  "Univers CE 55 Medium",
  "Vrinda",
  "ZWAdobeF"
];
function He() {
  return ve(function(e, t) {
    var n = t.document, a = n.body;
    a.style.fontSize = Te;
    var o = n.createElement("div"), r = {}, i = {}, c = function(y) {
      var b = n.createElement("span"), w = b.style;
      return w.position = "absolute", w.top = "0", w.left = "0", w.fontFamily = y, b.textContent = Pe, o.appendChild(b), b;
    }, l = function(y, b) {
      return c("'".concat(y, "',").concat(b));
    }, s = function() {
      return A.map(c);
    }, u = function() {
      for (var y = {}, b = function(j) {
        y[j] = A.map(function(H) {
          return l(j, H);
        });
      }, w = 0, M = te; w < M.length; w++) {
        var T = M[w];
        b(T);
      }
      return y;
    }, f = function(y) {
      return A.some(function(b, w) {
        return y[w].offsetWidth !== r[b] || y[w].offsetHeight !== i[b];
      });
    }, v = s(), p = u();
    a.appendChild(o);
    for (var g = 0; g < A.length; g++)
      r[A[g]] = v[g].offsetWidth, i[A[g]] = v[g].offsetHeight;
    return te.filter(function(y) {
      return f(p[y]);
    });
  });
}
function Je() {
  var e = navigator.plugins;
  if (e) {
    for (var t = [], n = 0; n < e.length; ++n) {
      var a = e[n];
      if (a) {
        for (var o = [], r = 0; r < a.length; ++r) {
          var i = a[r];
          o.push({
            type: i.type,
            suffixes: i.suffixes
          });
        }
        t.push({
          name: a.name,
          description: a.description,
          mimeTypes: o
        });
      }
    }
    return t;
  }
}
function ze() {
  var e = !1, t, n, a = De(), o = a[0], r = a[1];
  if (!Ne(o, r))
    t = n = "";
  else {
    e = Ee(r), Be(o, r);
    var i = J(o), c = J(o);
    i !== c ? t = n = "unstable" : (n = i, Oe(o, r), t = J(o));
  }
  return { winding: e, geometry: t, text: n };
}
function De() {
  var e = document.createElement("canvas");
  return e.width = 1, e.height = 1, [e, e.getContext("2d")];
}
function Ne(e, t) {
  return !!(t && e.toDataURL);
}
function Ee(e) {
  return e.rect(0, 0, 10, 10), e.rect(2, 2, 6, 6), !e.isPointInPath(5, 5, "evenodd");
}
function Be(e, t) {
  e.width = 240, e.height = 60, t.textBaseline = "alphabetic", t.fillStyle = "#f60", t.fillRect(100, 1, 62, 20), t.fillStyle = "#069", t.font = '11pt "Times New Roman"';
  var n = "Cwm fjordbank gly ".concat(
    "😃"
    /* 😃 */
  );
  t.fillText(n, 2, 15), t.fillStyle = "rgba(102, 204, 0, 0.2)", t.font = "18pt Arial", t.fillText(n, 4, 45);
}
function Oe(e, t) {
  e.width = 122, e.height = 110, t.globalCompositeOperation = "multiply";
  for (var n = 0, a = [
    ["#f2f", 40, 40],
    ["#2ff", 80, 40],
    ["#ff2", 60, 80]
  ]; n < a.length; n++) {
    var o = a[n], r = o[0], i = o[1], c = o[2];
    t.fillStyle = r, t.beginPath(), t.arc(i, c, 40, 0, Math.PI * 2, !0), t.closePath(), t.fill();
  }
  t.fillStyle = "#f9c", t.arc(60, 60, 60, 0, Math.PI * 2, !0), t.arc(60, 60, 20, 0, Math.PI * 2, !0), t.fill("evenodd");
}
function J(e) {
  return e.toDataURL();
}
function Ue() {
  var e = navigator, t = 0, n;
  e.maxTouchPoints !== void 0 ? t = O(e.maxTouchPoints) : e.msMaxTouchPoints !== void 0 && (t = e.msMaxTouchPoints);
  try {
    document.createEvent("TouchEvent"), n = !0;
  } catch (o) {
    n = !1;
  }
  var a = "ontouchstart" in window;
  return {
    maxTouchPoints: t,
    touchEvent: n,
    touchStart: a
  };
}
function Qe() {
  return navigator.oscpu;
}
function Ke() {
  var e = navigator, t = [], n = e.language || e.userLanguage || e.browserLanguage || e.systemLanguage;
  if (n !== void 0 && t.push([n]), Array.isArray(e.languages))
    U() && Fe() || t.push(e.languages);
  else if (typeof e.languages == "string") {
    var a = e.languages;
    a && t.push(a.split(","));
  }
  return t;
}
function _e() {
  return window.screen.colorDepth;
}
function qe() {
  return k(C(navigator.deviceMemory), void 0);
}
function $e() {
  var e = screen, t = function(a) {
    return k(O(a), null);
  }, n = [t(e.width), t(e.height)];
  return n.sort().reverse(), n;
}
var et = 2500, tt = 10, P, z;
function nt() {
  if (z === void 0) {
    var e = function() {
      var t = E();
      B(t) ? z = setTimeout(e, et) : (P = t, z = void 0);
    };
    e();
  }
}
function rt() {
  var e = this;
  return nt(), function() {
    return F(e, void 0, void 0, function() {
      var t;
      return W(this, function(n) {
        switch (n.label) {
          case 0:
            return t = E(), B(t) ? P ? [2, ce([], P, !0)] : Me() ? [4, Re()] : [3, 2] : [3, 2];
          case 1:
            n.sent(), t = E(), n.label = 2;
          case 2:
            return B(t) || (P = t), [2, t];
        }
      });
    });
  };
}
function at() {
  var e = this, t = rt();
  return function() {
    return F(e, void 0, void 0, function() {
      var n, a;
      return W(this, function(o) {
        switch (o.label) {
          case 0:
            return [4, t()];
          case 1:
            return n = o.sent(), a = function(r) {
              return r === null ? null : le(r, tt);
            }, [2, [a(n[0]), a(n[1]), a(n[2]), a(n[3])]];
        }
      });
    });
  };
}
function E() {
  var e = screen;
  return [
    k(C(e.availTop), null),
    k(C(e.width) - C(e.availWidth) - k(C(e.availLeft), 0), null),
    k(C(e.height) - C(e.availHeight) - k(C(e.availTop), 0), null),
    k(C(e.availLeft), null)
  ];
}
function B(e) {
  for (var t = 0; t < 4; ++t)
    if (e[t])
      return !1;
  return !0;
}
function it() {
  return k(O(navigator.hardwareConcurrency), void 0);
}
function ot() {
  var e, t = (e = window.Intl) === null || e === void 0 ? void 0 : e.DateTimeFormat;
  if (t) {
    var n = new t().resolvedOptions().timeZone;
    if (n)
      return n;
  }
  var a = -ct();
  return "UTC".concat(a >= 0 ? "+" : "").concat(Math.abs(a));
}
function ct() {
  var e = (/* @__PURE__ */ new Date()).getFullYear();
  return Math.max(
    // `getTimezoneOffset` returns a number as a string in some unidentified cases
    C(new Date(e, 0, 1).getTimezoneOffset()),
    C(new Date(e, 6, 1).getTimezoneOffset())
  );
}
function ut() {
  try {
    return !!window.sessionStorage;
  } catch (e) {
    return !0;
  }
}
function st() {
  try {
    return !!window.localStorage;
  } catch (e) {
    return !0;
  }
}
function lt() {
  if (!(fe() || Ve()))
    try {
      return !!window.indexedDB;
    } catch (e) {
      return !0;
    }
}
function ft() {
  return !!window.openDatabase;
}
function dt() {
  return navigator.cpuClass;
}
function vt() {
  var e = navigator.platform;
  return e === "MacIntel" && X() && !Q() ? Ze() ? "iPad" : "iPhone" : e;
}
function mt() {
  return navigator.vendor || "";
}
function ht() {
  for (var e = [], t = 0, n = [
    // Blink and some browsers on iOS
    "chrome",
    // Safari on macOS
    "safari",
    // Chrome on iOS (checked in 85 on 13 and 87 on 14)
    "__crWeb",
    "__gCrWeb",
    // Yandex Browser on iOS, macOS and Android (checked in 21.2 on iOS 14, macOS and Android)
    "yandex",
    // Yandex Browser on iOS (checked in 21.2 on 14)
    "__yb",
    "__ybro",
    // Firefox on iOS (checked in 32 on 14)
    "__firefox__",
    // Edge on iOS (checked in 46 on 14)
    "__edgeTrackingPreventionStatistics",
    "webkit",
    // Opera Touch on iOS (checked in 2.6 on 14)
    "oprt",
    // Samsung Internet on Android (checked in 11.1)
    "samsungAr",
    // UC Browser on Android (checked in 12.10 and 13.0)
    "ucweb",
    "UCShellJava",
    // Puffin on Android (checked in 9.0)
    "puffinDevice"
    // UC on iOS and Opera on Android have no specific global variables
    // Edge for Android isn't checked
  ]; t < n.length; t++) {
    var a = n[t], o = window[a];
    o && typeof o == "object" && e.push(a);
  }
  return e.sort();
}
function pt() {
  var e = document;
  try {
    e.cookie = "cookietest=1; SameSite=Strict;";
    var t = e.cookie.indexOf("cookietest=") !== -1;
    return e.cookie = "cookietest=1; SameSite=Strict; expires=Thu, 01-Jan-1970 00:00:01 GMT", t;
  } catch (n) {
    return !1;
  }
}
function gt() {
  var e = atob;
  return {
    abpIndo: [
      "#Iklan-Melayang",
      "#Kolom-Iklan-728",
      "#SidebarIklan-wrapper",
      '[title="ALIENBOLA" i]',
      e("I0JveC1CYW5uZXItYWRz")
    ],
    abpvn: [".quangcao", "#mobileCatfish", e("LmNsb3NlLWFkcw=="), '[id^="bn_bottom_fixed_"]', "#pmadv"],
    adBlockFinland: [
      ".mainostila",
      e("LnNwb25zb3JpdA=="),
      ".ylamainos",
      e("YVtocmVmKj0iL2NsaWNrdGhyZ2guYXNwPyJd"),
      e("YVtocmVmXj0iaHR0cHM6Ly9hcHAucmVhZHBlYWsuY29tL2FkcyJd")
    ],
    adBlockPersian: [
      "#navbar_notice_50",
      ".kadr",
      'TABLE[width="140px"]',
      "#divAgahi",
      e("YVtocmVmXj0iaHR0cDovL2cxLnYuZndtcm0ubmV0L2FkLyJd")
    ],
    adBlockWarningRemoval: [
      "#adblock-honeypot",
      ".adblocker-root",
      ".wp_adblock_detect",
      e("LmhlYWRlci1ibG9ja2VkLWFk"),
      e("I2FkX2Jsb2NrZXI=")
    ],
    adGuardAnnoyances: [
      ".hs-sosyal",
      "#cookieconsentdiv",
      'div[class^="app_gdpr"]',
      ".as-oil",
      '[data-cypress="soft-push-notification-modal"]'
    ],
    adGuardBase: [
      ".BetterJsPopOverlay",
      e("I2FkXzMwMFgyNTA="),
      e("I2Jhbm5lcmZsb2F0MjI="),
      e("I2NhbXBhaWduLWJhbm5lcg=="),
      e("I0FkLUNvbnRlbnQ=")
    ],
    adGuardChinese: [
      e("LlppX2FkX2FfSA=="),
      e("YVtocmVmKj0iLmh0aGJldDM0LmNvbSJd"),
      "#widget-quan",
      e("YVtocmVmKj0iLzg0OTkyMDIwLnh5eiJd"),
      e("YVtocmVmKj0iLjE5NTZobC5jb20vIl0=")
    ],
    adGuardFrench: [
      "#pavePub",
      e("LmFkLWRlc2t0b3AtcmVjdGFuZ2xl"),
      ".mobile_adhesion",
      ".widgetadv",
      e("LmFkc19iYW4=")
    ],
    adGuardGerman: ['aside[data-portal-id="leaderboard"]'],
    adGuardJapanese: [
      "#kauli_yad_1",
      e("YVtocmVmXj0iaHR0cDovL2FkMi50cmFmZmljZ2F0ZS5uZXQvIl0="),
      e("Ll9wb3BJbl9pbmZpbml0ZV9hZA=="),
      e("LmFkZ29vZ2xl"),
      e("Ll9faXNib29zdFJldHVybkFk")
    ],
    adGuardMobile: [
      e("YW1wLWF1dG8tYWRz"),
      e("LmFtcF9hZA=="),
      'amp-embed[type="24smi"]',
      "#mgid_iframe1",
      e("I2FkX2ludmlld19hcmVh")
    ],
    adGuardRussian: [
      e("YVtocmVmXj0iaHR0cHM6Ly9hZC5sZXRtZWFkcy5jb20vIl0="),
      e("LnJlY2xhbWE="),
      'div[id^="smi2adblock"]',
      e("ZGl2W2lkXj0iQWRGb3hfYmFubmVyXyJd"),
      "#psyduckpockeball"
    ],
    adGuardSocial: [
      e("YVtocmVmXj0iLy93d3cuc3R1bWJsZXVwb24uY29tL3N1Ym1pdD91cmw9Il0="),
      e("YVtocmVmXj0iLy90ZWxlZ3JhbS5tZS9zaGFyZS91cmw/Il0="),
      ".etsy-tweet",
      "#inlineShare",
      ".popup-social"
    ],
    adGuardSpanishPortuguese: ["#barraPublicidade", "#Publicidade", "#publiEspecial", "#queTooltip", ".cnt-publi"],
    adGuardTrackingProtection: [
      "#qoo-counter",
      e("YVtocmVmXj0iaHR0cDovL2NsaWNrLmhvdGxvZy5ydS8iXQ=="),
      e("YVtocmVmXj0iaHR0cDovL2hpdGNvdW50ZXIucnUvdG9wL3N0YXQucGhwIl0="),
      e("YVtocmVmXj0iaHR0cDovL3RvcC5tYWlsLnJ1L2p1bXAiXQ=="),
      "#top100counter"
    ],
    adGuardTurkish: [
      "#backkapat",
      e("I3Jla2xhbWk="),
      e("YVtocmVmXj0iaHR0cDovL2Fkc2Vydi5vbnRlay5jb20udHIvIl0="),
      e("YVtocmVmXj0iaHR0cDovL2l6bGVuemkuY29tL2NhbXBhaWduLyJd"),
      e("YVtocmVmXj0iaHR0cDovL3d3dy5pbnN0YWxsYWRzLm5ldC8iXQ==")
    ],
    bulgarian: [e("dGQjZnJlZW5ldF90YWJsZV9hZHM="), "#ea_intext_div", ".lapni-pop-over", "#xenium_hot_offers"],
    easyList: [
      ".yb-floorad",
      e("LndpZGdldF9wb19hZHNfd2lkZ2V0"),
      e("LnRyYWZmaWNqdW5reS1hZA=="),
      ".textad_headline",
      e("LnNwb25zb3JlZC10ZXh0LWxpbmtz")
    ],
    easyListChina: [
      e("LmFwcGd1aWRlLXdyYXBbb25jbGljayo9ImJjZWJvcy5jb20iXQ=="),
      e("LmZyb250cGFnZUFkdk0="),
      "#taotaole",
      "#aafoot.top_box",
      ".cfa_popup"
    ],
    easyListCookie: [
      ".ezmob-footer",
      ".cc-CookieWarning",
      "[data-cookie-number]",
      e("LmF3LWNvb2tpZS1iYW5uZXI="),
      ".sygnal24-gdpr-modal-wrap"
    ],
    easyListCzechSlovak: [
      "#onlajny-stickers",
      e("I3Jla2xhbW5pLWJveA=="),
      e("LnJla2xhbWEtbWVnYWJvYXJk"),
      ".sklik",
      e("W2lkXj0ic2tsaWtSZWtsYW1hIl0=")
    ],
    easyListDutch: [
      e("I2FkdmVydGVudGll"),
      e("I3ZpcEFkbWFya3RCYW5uZXJCbG9jaw=="),
      ".adstekst",
      e("YVtocmVmXj0iaHR0cHM6Ly94bHR1YmUubmwvY2xpY2svIl0="),
      "#semilo-lrectangle"
    ],
    easyListGermany: [
      "#SSpotIMPopSlider",
      e("LnNwb25zb3JsaW5rZ3J1ZW4="),
      e("I3dlcmJ1bmdza3k="),
      e("I3Jla2xhbWUtcmVjaHRzLW1pdHRl"),
      e("YVtocmVmXj0iaHR0cHM6Ly9iZDc0Mi5jb20vIl0=")
    ],
    easyListItaly: [
      e("LmJveF9hZHZfYW5udW5jaQ=="),
      ".sb-box-pubbliredazionale",
      e("YVtocmVmXj0iaHR0cDovL2FmZmlsaWF6aW9uaWFkcy5zbmFpLml0LyJd"),
      e("YVtocmVmXj0iaHR0cHM6Ly9hZHNlcnZlci5odG1sLml0LyJd"),
      e("YVtocmVmXj0iaHR0cHM6Ly9hZmZpbGlhemlvbmlhZHMuc25haS5pdC8iXQ==")
    ],
    easyListLithuania: [
      e("LnJla2xhbW9zX3RhcnBhcw=="),
      e("LnJla2xhbW9zX251b3JvZG9z"),
      e("aW1nW2FsdD0iUmVrbGFtaW5pcyBza3lkZWxpcyJd"),
      e("aW1nW2FsdD0iRGVkaWt1b3RpLmx0IHNlcnZlcmlhaSJd"),
      e("aW1nW2FsdD0iSG9zdGluZ2FzIFNlcnZlcmlhaS5sdCJd")
    ],
    estonian: [e("QVtocmVmKj0iaHR0cDovL3BheTRyZXN1bHRzMjQuZXUiXQ==")],
    fanboyAnnoyances: ["#ac-lre-player", ".navigate-to-top", "#subscribe_popup", ".newsletter_holder", "#back-top"],
    fanboyAntiFacebook: [".util-bar-module-firefly-visible"],
    fanboyEnhancedTrackers: [
      ".open.pushModal",
      "#issuem-leaky-paywall-articles-zero-remaining-nag",
      "#sovrn_container",
      'div[class$="-hide"][zoompage-fontsize][style="display: block;"]',
      ".BlockNag__Card"
    ],
    fanboySocial: ["#FollowUs", "#meteored_share", "#social_follow", ".article-sharer", ".community__social-desc"],
    frellwitSwedish: [
      e("YVtocmVmKj0iY2FzaW5vcHJvLnNlIl1bdGFyZ2V0PSJfYmxhbmsiXQ=="),
      e("YVtocmVmKj0iZG9rdG9yLXNlLm9uZWxpbmsubWUiXQ=="),
      "article.category-samarbete",
      e("ZGl2LmhvbGlkQWRz"),
      "ul.adsmodern"
    ],
    greekAdBlock: [
      e("QVtocmVmKj0iYWRtYW4ub3RlbmV0LmdyL2NsaWNrPyJd"),
      e("QVtocmVmKj0iaHR0cDovL2F4aWFiYW5uZXJzLmV4b2R1cy5nci8iXQ=="),
      e("QVtocmVmKj0iaHR0cDovL2ludGVyYWN0aXZlLmZvcnRobmV0LmdyL2NsaWNrPyJd"),
      "DIV.agores300",
      "TABLE.advright"
    ],
    hungarian: [
      "#cemp_doboz",
      ".optimonk-iframe-container",
      e("LmFkX19tYWlu"),
      e("W2NsYXNzKj0iR29vZ2xlQWRzIl0="),
      "#hirdetesek_box"
    ],
    iDontCareAboutCookies: [
      '.alert-info[data-block-track*="CookieNotice"]',
      ".ModuleTemplateCookieIndicator",
      ".o--cookies--container",
      "#cookies-policy-sticky",
      "#stickyCookieBar"
    ],
    icelandicAbp: [e("QVtocmVmXj0iL2ZyYW1ld29yay9yZXNvdXJjZXMvZm9ybXMvYWRzLmFzcHgiXQ==")],
    latvian: [
      e("YVtocmVmPSJodHRwOi8vd3d3LnNhbGlkemluaS5sdi8iXVtzdHlsZT0iZGlzcGxheTogYmxvY2s7IHdpZHRoOiAxMjBweDsgaGVpZ2h0OiA0MHB4OyBvdmVyZmxvdzogaGlkZGVuOyBwb3NpdGlvbjogcmVsYXRpdmU7Il0="),
      e("YVtocmVmPSJodHRwOi8vd3d3LnNhbGlkemluaS5sdi8iXVtzdHlsZT0iZGlzcGxheTogYmxvY2s7IHdpZHRoOiA4OHB4OyBoZWlnaHQ6IDMxcHg7IG92ZXJmbG93OiBoaWRkZW47IHBvc2l0aW9uOiByZWxhdGl2ZTsiXQ==")
    ],
    listKr: [
      e("YVtocmVmKj0iLy9hZC5wbGFuYnBsdXMuY28ua3IvIl0="),
      e("I2xpdmVyZUFkV3JhcHBlcg=="),
      e("YVtocmVmKj0iLy9hZHYuaW1hZHJlcC5jby5rci8iXQ=="),
      e("aW5zLmZhc3R2aWV3LWFk"),
      ".revenue_unit_item.dable"
    ],
    listeAr: [
      e("LmdlbWluaUxCMUFk"),
      ".right-and-left-sponsers",
      e("YVtocmVmKj0iLmFmbGFtLmluZm8iXQ=="),
      e("YVtocmVmKj0iYm9vcmFxLm9yZyJd"),
      e("YVtocmVmKj0iZHViaXp6bGUuY29tL2FyLz91dG1fc291cmNlPSJd")
    ],
    listeFr: [
      e("YVtocmVmXj0iaHR0cDovL3Byb21vLnZhZG9yLmNvbS8iXQ=="),
      e("I2FkY29udGFpbmVyX3JlY2hlcmNoZQ=="),
      e("YVtocmVmKj0id2Vib3JhbWEuZnIvZmNnaS1iaW4vIl0="),
      ".site-pub-interstitiel",
      'div[id^="crt-"][data-criteo-id]'
    ],
    officialPolish: [
      "#ceneo-placeholder-ceneo-12",
      e("W2hyZWZePSJodHRwczovL2FmZi5zZW5kaHViLnBsLyJd"),
      e("YVtocmVmXj0iaHR0cDovL2Fkdm1hbmFnZXIudGVjaGZ1bi5wbC9yZWRpcmVjdC8iXQ=="),
      e("YVtocmVmXj0iaHR0cDovL3d3dy50cml6ZXIucGwvP3V0bV9zb3VyY2UiXQ=="),
      e("ZGl2I3NrYXBpZWNfYWQ=")
    ],
    ro: [
      e("YVtocmVmXj0iLy9hZmZ0cmsuYWx0ZXgucm8vQ291bnRlci9DbGljayJd"),
      e("YVtocmVmXj0iaHR0cHM6Ly9ibGFja2ZyaWRheXNhbGVzLnJvL3Ryay9zaG9wLyJd"),
      e("YVtocmVmXj0iaHR0cHM6Ly9ldmVudC4ycGVyZm9ybWFudC5jb20vZXZlbnRzL2NsaWNrIl0="),
      e("YVtocmVmXj0iaHR0cHM6Ly9sLnByb2ZpdHNoYXJlLnJvLyJd"),
      'a[href^="/url/"]'
    ],
    ruAd: [
      e("YVtocmVmKj0iLy9mZWJyYXJlLnJ1LyJd"),
      e("YVtocmVmKj0iLy91dGltZy5ydS8iXQ=="),
      e("YVtocmVmKj0iOi8vY2hpa2lkaWtpLnJ1Il0="),
      "#pgeldiz",
      ".yandex-rtb-block"
    ],
    thaiAds: [
      "a[href*=macau-uta-popup]",
      e("I2Fkcy1nb29nbGUtbWlkZGxlX3JlY3RhbmdsZS1ncm91cA=="),
      e("LmFkczMwMHM="),
      ".bumq",
      ".img-kosana"
    ],
    webAnnoyancesUltralist: [
      "#mod-social-share-2",
      "#social-tools",
      e("LmN0cGwtZnVsbGJhbm5lcg=="),
      ".zergnet-recommend",
      ".yt.btn-link.btn-md.btn"
    ]
  };
}
function bt(e) {
  var t = e === void 0 ? {} : e, n = t.debug;
  return F(this, void 0, void 0, function() {
    var a, o, r, i, c, l;
    return W(this, function(s) {
      switch (s.label) {
        case 0:
          return yt() ? (a = gt(), o = Object.keys(a), r = (l = []).concat.apply(l, o.map(function(u) {
            return a[u];
          })), [4, wt(r)]) : [2, void 0];
        case 1:
          return i = s.sent(), n && Lt(a, i), c = o.filter(function(u) {
            var f = a[u], v = V(f.map(function(p) {
              return i[p];
            }));
            return v > f.length * 0.6;
          }), c.sort(), [2, c];
      }
    });
  });
}
function yt() {
  return X() || de();
}
function wt(e) {
  var t;
  return F(this, void 0, void 0, function() {
    var n, a, o, r, l, i, c, l;
    return W(this, function(s) {
      switch (s.label) {
        case 0:
          for (n = document, a = n.createElement("div"), o = new Array(e.length), r = {}, ne(a), l = 0; l < e.length; ++l)
            i = Xe(e[l]), i.tagName === "DIALOG" && i.show(), c = n.createElement("div"), ne(c), c.appendChild(i), a.appendChild(c), o[l] = i;
          s.label = 1;
        case 1:
          return n.body ? [3, 3] : [4, I(50)];
        case 2:
          return s.sent(), [3, 1];
        case 3:
          n.body.appendChild(a);
          try {
            for (l = 0; l < e.length; ++l)
              o[l].offsetParent || (r[e[l]] = !0);
          } finally {
            (t = a.parentNode) === null || t === void 0 || t.removeChild(a);
          }
          return [2, r];
      }
    });
  });
}
function ne(e) {
  e.style.setProperty("display", "block", "important");
}
function Lt(e, t) {
  for (var n = "DOM blockers debug:\n```", a = 0, o = Object.keys(e); a < o.length; a++) {
    var r = o[a];
    n += `
`.concat(r, ":");
    for (var i = 0, c = e[r]; i < c.length; i++) {
      var l = c[i];
      n += `
  `.concat(t[l] ? "🚫" : "➡️", " ").concat(l);
    }
  }
  console.log("".concat(n, "\n```"));
}
function St() {
  for (var e = 0, t = ["rec2020", "p3", "srgb"]; e < t.length; e++) {
    var n = t[e];
    if (matchMedia("(color-gamut: ".concat(n, ")")).matches)
      return n;
  }
}
function xt() {
  if (re("inverted"))
    return !0;
  if (re("none"))
    return !1;
}
function re(e) {
  return matchMedia("(inverted-colors: ".concat(e, ")")).matches;
}
function Ct() {
  if (ae("active"))
    return !0;
  if (ae("none"))
    return !1;
}
function ae(e) {
  return matchMedia("(forced-colors: ".concat(e, ")")).matches;
}
var Vt = 100;
function kt() {
  if (matchMedia("(min-monochrome: 0)").matches) {
    for (var e = 0; e <= Vt; ++e)
      if (matchMedia("(max-monochrome: ".concat(e, ")")).matches)
        return e;
    throw new Error("Too high value");
  }
}
function Ft() {
  if (G("no-preference"))
    return 0;
  if (G("high") || G("more"))
    return 1;
  if (G("low") || G("less"))
    return -1;
  if (G("forced"))
    return 10;
}
function G(e) {
  return matchMedia("(prefers-contrast: ".concat(e, ")")).matches;
}
function Wt() {
  if (ie("reduce"))
    return !0;
  if (ie("no-preference"))
    return !1;
}
function ie(e) {
  return matchMedia("(prefers-reduced-motion: ".concat(e, ")")).matches;
}
function Zt() {
  if (oe("high"))
    return !0;
  if (oe("standard"))
    return !1;
}
function oe(e) {
  return matchMedia("(dynamic-range: ".concat(e, ")")).matches;
}
var d = Math, L = function() {
  return 0;
};
function Mt() {
  var e = d.acos || L, t = d.acosh || L, n = d.asin || L, a = d.asinh || L, o = d.atanh || L, r = d.atan || L, i = d.sin || L, c = d.sinh || L, l = d.cos || L, s = d.cosh || L, u = d.tan || L, f = d.tanh || L, v = d.exp || L, p = d.expm1 || L, g = d.log1p || L, y = function(m) {
    return d.pow(d.PI, m);
  }, b = function(m) {
    return d.log(m + d.sqrt(m * m - 1));
  }, w = function(m) {
    return d.log(m + d.sqrt(m * m + 1));
  }, M = function(m) {
    return d.log((1 + m) / (1 - m)) / 2;
  }, T = function(m) {
    return d.exp(m) - 1 / d.exp(m) / 2;
  }, j = function(m) {
    return (d.exp(m) + 1 / d.exp(m)) / 2;
  }, H = function(m) {
    return d.exp(m) - 1;
  }, me = function(m) {
    return (d.exp(2 * m) - 1) / (d.exp(2 * m) + 1);
  }, he = function(m) {
    return d.log(1 + m);
  };
  return {
    acos: e(0.12312423423423424),
    acosh: t(1e308),
    acoshPf: b(1e154),
    asin: n(0.12312423423423424),
    asinh: a(1),
    asinhPf: w(1),
    atanh: o(0.5),
    atanhPf: M(0.5),
    atan: r(0.5),
    sin: i(-1e300),
    sinh: c(1),
    sinhPf: T(1),
    cos: l(10.000000000123),
    cosh: s(1),
    coshPf: j(1),
    tan: u(-1e300),
    tanh: f(1),
    tanhPf: me(1),
    exp: v(1),
    expm1: p(1),
    expm1Pf: H(1),
    log1p: g(10),
    log1pPf: he(10),
    powPI: y(-100)
  };
}
var Rt = "mmMwWLliI0fiflO&1", D = {
  /**
   * The default font. User can change it in desktop Chrome, desktop Firefox, IE 11,
   * Android Chrome (but only when the size is ≥ than the default) and Android Firefox.
   */
  default: [],
  /** OS font on macOS. User can change its size and weight. Applies after Safari restart. */
  apple: [{ font: "-apple-system-body" }],
  /** User can change it in desktop Chrome and desktop Firefox. */
  serif: [{ fontFamily: "serif" }],
  /** User can change it in desktop Chrome and desktop Firefox. */
  sans: [{ fontFamily: "sans-serif" }],
  /** User can change it in desktop Chrome and desktop Firefox. */
  mono: [{ fontFamily: "monospace" }],
  /**
   * Check the smallest allowed font size. User can change it in desktop Chrome, desktop Firefox and desktop Safari.
   * The height can be 0 in Chrome on a retina display.
   */
  min: [{ fontSize: "1px" }],
  /** Tells one OS from another in desktop Chrome. */
  system: [{ fontFamily: "system-ui" }]
};
function At() {
  return Gt(function(e, t) {
    for (var n = {}, a = {}, o = 0, r = Object.keys(D); o < r.length; o++) {
      var i = r[o], c = D[i], l = c[0], s = l === void 0 ? {} : l, u = c[1], f = u === void 0 ? Rt : u, v = e.createElement("span");
      v.textContent = f, v.style.whiteSpace = "nowrap";
      for (var p = 0, g = Object.keys(s); p < g.length; p++) {
        var y = g[p], b = s[y];
        b !== void 0 && (v.style[y] = b);
      }
      n[i] = v, t.appendChild(e.createElement("br")), t.appendChild(v);
    }
    for (var w = 0, M = Object.keys(D); w < M.length; w++) {
      var i = M[w];
      a[i] = n[i].getBoundingClientRect().width;
    }
    return a;
  });
}
function Gt(e, t) {
  return t === void 0 && (t = 4e3), ve(function(n, a) {
    var o = a.document, r = o.body, i = r.style;
    i.width = "".concat(t, "px"), i.webkitTextSizeAdjust = i.textSizeAdjust = "none", U() ? r.style.zoom = "".concat(1 / a.devicePixelRatio) : X() && (r.style.zoom = "reset");
    var c = o.createElement("div");
    return c.textContent = ce([], Array(t / 20 << 0), !0).map(function() {
      return "word";
    }).join(" "), r.appendChild(c), e(o, r);
  }, '<!doctype html><html><head><meta name="viewport" content="width=device-width, initial-scale=1">');
}
function It() {
  var e, t = document.createElement("canvas"), n = (e = t.getContext("webgl")) !== null && e !== void 0 ? e : t.getContext("experimental-webgl");
  if (n && "getExtension" in n) {
    var a = n.getExtension("WEBGL_debug_renderer_info");
    if (a)
      return {
        vendor: (n.getParameter(a.UNMASKED_VENDOR_WEBGL) || "").toString(),
        renderer: (n.getParameter(a.UNMASKED_RENDERER_WEBGL) || "").toString()
      };
  }
}
function Yt() {
  return navigator.pdfViewerEnabled;
}
function Xt() {
  var e = new Float32Array(1), t = new Uint8Array(e.buffer);
  return e[0] = 1 / 0, e[0] = e[0] - e[0], t[3];
}
var jt = {
  // READ FIRST:
  // See https://github.com/fingerprintjs/fingerprintjs/blob/master/contributing.md#how-to-make-an-entropy-source
  // to learn how entropy source works and how to make your own.
  // The sources run in this exact order.
  // The asynchronous sources are at the start to run in parallel with other sources.
  fonts: He,
  domBlockers: bt,
  fontPreferences: At,
  audio: Ae,
  screenFrame: at,
  osCpu: Qe,
  languages: Ke,
  colorDepth: _e,
  deviceMemory: qe,
  screenResolution: $e,
  hardwareConcurrency: it,
  timezone: ot,
  sessionStorage: ut,
  localStorage: st,
  indexedDB: lt,
  openDatabase: ft,
  cpuClass: dt,
  platform: vt,
  plugins: Je,
  canvas: ze,
  touchSupport: Ue,
  vendor: mt,
  vendorFlavors: ht,
  cookiesEnabled: pt,
  colorGamut: St,
  invertedColors: xt,
  forcedColors: Ct,
  monochrome: kt,
  contrast: Ft,
  reducedMotion: Wt,
  hdr: Zt,
  math: Mt,
  videoCard: It,
  pdfViewerEnabled: Yt,
  architecture: Xt
};
function Pt(e) {
  return Ce(jt, e, []);
}
var Tt = "$ if upgrade to Pro: https://fpjs.dev/pro";
function Ht(e) {
  var t = Jt(e), n = zt(t);
  return { score: t, comment: Tt.replace(/\$/g, "".concat(n)) };
}
function Jt(e) {
  if (de())
    return 0.4;
  if (X())
    return Q() ? 0.5 : 0.3;
  var t = e.platform.value || "";
  return /^Win/.test(t) ? 0.6 : /^Mac/.test(t) ? 0.5 : 0.7;
}
function zt(e) {
  return le(0.99 + 0.01 * e, 1e-4);
}
function Dt(e) {
  for (var t = "", n = 0, a = Object.keys(e).sort(); n < a.length; n++) {
    var o = a[n], r = e[o], i = r.error ? "error" : JSON.stringify(r.value);
    t += "".concat(t ? "|" : "").concat(o.replace(/([:|\\])/g, "\\$1"), ":").concat(i);
  }
  return t;
}
function Nt(e) {
  return JSON.stringify(e, function(t, n) {
    return n instanceof Error ? be(n) : n;
  }, 2);
}
function Et(e) {
  return ge(Dt(e));
}
function Bt(e) {
  var t, n = Ht(e);
  return {
    get visitorId() {
      return t === void 0 && (t = Et(this.components)), t;
    },
    set visitorId(a) {
      t = a;
    },
    confidence: n,
    components: e,
    version: ue
  };
}
function Ot(e) {
  return e === void 0 && (e = 50), pe(e, e * 2);
}
function Ut(e, t) {
  var n = Date.now();
  return {
    get: function(a) {
      return F(this, void 0, void 0, function() {
        var o, r, i;
        return W(this, function(c) {
          switch (c.label) {
            case 0:
              return o = Date.now(), [4, e()];
            case 1:
              return r = c.sent(), i = Bt(r), (t || a != null && a.debug) && console.log("Copy the text below to get the debug data:\n\n```\nversion: ".concat(i.version, `
userAgent: `).concat(navigator.userAgent, `
timeBetweenLoadAndGet: `).concat(o - n, `
visitorId: `).concat(i.visitorId, `
components: `).concat(Nt(r), "\n```")), [2, i];
          }
        });
      });
    }
  };
}
function Qt() {
  if (!(window.__fpjs_d_m || Math.random() >= 1e-3))
    try {
      var e = new XMLHttpRequest();
      e.open("get", "https://m1.openfpcdn.io/fingerprintjs/v".concat(ue, "/npm-monitoring"), !0), e.send();
    } catch (t) {
      console.error(t);
    }
}
function Kt(e) {
  var t = e === void 0 ? {} : e, n = t.delayFallback, a = t.debug, o = t.monitoring, r = o === void 0 ? !0 : o;
  return F(this, void 0, void 0, function() {
    var i;
    return W(this, function(c) {
      switch (c.label) {
        case 0:
          return r && Qt(), [4, Ot(n)];
        case 1:
          return c.sent(), i = Pt({ debug: a }), [2, Ut(i, a)];
      }
    });
  });
}
export {
  Kt as l
};
