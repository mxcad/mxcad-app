Number.EPSILON === void 0 && (Number.EPSILON = Math.pow(2, -52));
Number.isInteger === void 0 && (Number.isInteger = function(e) {
  return typeof e == "number" && isFinite(e) && Math.floor(e) === e;
});
Math.sign === void 0 && (Math.sign = function(e) {
  return e < 0 ? -1 : e > 0 ? 1 : +e;
});
"name" in Function.prototype || Object.defineProperty(Function.prototype, "name", {
  get: function() {
    return this.toString().match(/^\s*function\s*([^\(\s]*)/)[1];
  }
});
Object.assign === void 0 && (Object.assign = function(e) {
  if (e == null)
    throw new TypeError("Cannot convert undefined or null to object");
  for (var t = Object(e), n = 1; n < arguments.length; n++) {
    var r = arguments[n];
    if (r != null)
      for (var i in r)
        Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i]);
  }
  return t;
});
var Dh = "113", Ih = 0, Gl = 1, Oh = 2, _u = 1, Nh = 2, Mi = 3, ua = 0, ht = 1, zs = 2, wu = 1, Mu = 0, Fh = 1, ha = 2, In = 0, Ei = 1, Vl = 2, Hl = 3, kl = 4, Bh = 5, Ir = 100, zh = 101, Uh = 102, Wl = 103, jl = 104, Gh = 200, Vh = 201, Hh = 202, kh = 203, bu = 204, Eu = 205, Wh = 206, jh = 207, qh = 208, Xh = 209, Yh = 210, Zh = 0, Jh = 1, $h = 2, bo = 3, Qh = 4, Kh = 5, ef = 6, tf = 7, Us = 0, nf = 1, rf = 2, $a = 0, Ml = 1, af = 2, sf = 3, of = 4, lf = 5, bl = 300, El = 301, Sl = 302, Su = 303, Tl = 304, Tu = 305, fa = 306, Al = 307, Ka = 1e3, Et = 1001, es = 1002, ot = 1003, Eo = 1004, So = 1005, ft = 1006, Au = 1007, Gs = 1008, Vs = 1009, cf = 1010, uf = 1011, ts = 1012, hf = 1013, Lu = 1014, Li = 1015, Ll = 1016, ff = 1017, df = 1018, pf = 1019, ns = 1020, vf = 1021, ir = 1022, rn = 1023, mf = 1024, gf = 1025, yf = rn, Gr = 1026, Ci = 1027, xf = 1028, _f = 1029, wf = 1030, Mf = 1031, bf = 1032, Ef = 1033, ql = 33776, Xl = 33777, Yl = 33778, Zl = 33779, Jl = 35840, $l = 35841, Ql = 35842, Kl = 35843, Sf = 36196, Tf = 37808, Af = 37809, Lf = 37810, Cf = 37811, Rf = 37812, Pf = 37813, Df = 37814, If = 37815, Of = 37816, Nf = 37817, Ff = 37818, Bf = 37819, zf = 37820, Uf = 37821, Gf = 2200, Vf = 2201, Hf = 2202, rs = 2300, Qa = 2301, qs = 2302, Hr = 2400, Nr = 2401, is = 2402, kf = 0, Pt = 3e3, Cl = 3001, Cu = 3007, Rl = 3002, Wf = 3003, Ru = 3004, Pu = 3005, Du = 3006, jf = 3200, qf = 3201, li = 0, Xf = 1, Xs = 7680, Yf = 519, Hs = 35044, Ri = 35048;
function En() {
}
Object.assign(En.prototype, {
  addEventListener: function(e, t) {
    this._listeners === void 0 && (this._listeners = {});
    var n = this._listeners;
    n[e] === void 0 && (n[e] = []), n[e].indexOf(t) === -1 && n[e].push(t);
  },
  hasEventListener: function(e, t) {
    if (this._listeners === void 0) return !1;
    var n = this._listeners;
    return n[e] !== void 0 && n[e].indexOf(t) !== -1;
  },
  removeEventListener: function(e, t) {
    if (this._listeners !== void 0) {
      var n = this._listeners, r = n[e];
      if (r !== void 0) {
        var i = r.indexOf(t);
        i !== -1 && r.splice(i, 1);
      }
    }
  },
  dispatchEvent: function(e) {
    if (this._listeners !== void 0) {
      var t = this._listeners, n = t[e.type];
      if (n !== void 0) {
        e.target = this;
        for (var r = n.slice(0), i = 0, a = r.length; i < a; i++)
          r[i].call(this, e);
      }
    }
  }
});
var dt = [];
for (var fi = 0; fi < 256; fi++)
  dt[fi] = (fi < 16 ? "0" : "") + fi.toString(16);
var Ae = {
  DEG2RAD: Math.PI / 180,
  RAD2DEG: 180 / Math.PI,
  generateUUID: function() {
    var e = Math.random() * 4294967295 | 0, t = Math.random() * 4294967295 | 0, n = Math.random() * 4294967295 | 0, r = Math.random() * 4294967295 | 0, i = dt[e & 255] + dt[e >> 8 & 255] + dt[e >> 16 & 255] + dt[e >> 24 & 255] + "-" + dt[t & 255] + dt[t >> 8 & 255] + "-" + dt[t >> 16 & 15 | 64] + dt[t >> 24 & 255] + "-" + dt[n & 63 | 128] + dt[n >> 8 & 255] + "-" + dt[n >> 16 & 255] + dt[n >> 24 & 255] + dt[r & 255] + dt[r >> 8 & 255] + dt[r >> 16 & 255] + dt[r >> 24 & 255];
    return i.toUpperCase();
  },
  clamp: function(e, t, n) {
    return Math.max(t, Math.min(n, e));
  },
  // compute euclidian modulo of m % n
  // https://en.wikipedia.org/wiki/Modulo_operation
  euclideanModulo: function(e, t) {
    return (e % t + t) % t;
  },
  // Linear mapping from range <a1, a2> to range <b1, b2>
  mapLinear: function(e, t, n, r, i) {
    return r + (e - t) * (i - r) / (n - t);
  },
  // https://en.wikipedia.org/wiki/Linear_interpolation
  lerp: function(e, t, n) {
    return (1 - n) * e + n * t;
  },
  // http://en.wikipedia.org/wiki/Smoothstep
  smoothstep: function(e, t, n) {
    return e <= t ? 0 : e >= n ? 1 : (e = (e - t) / (n - t), e * e * (3 - 2 * e));
  },
  smootherstep: function(e, t, n) {
    return e <= t ? 0 : e >= n ? 1 : (e = (e - t) / (n - t), e * e * e * (e * (e * 6 - 15) + 10));
  },
  // Random integer from <low, high> interval
  randInt: function(e, t) {
    return e + Math.floor(Math.random() * (t - e + 1));
  },
  // Random float from <low, high> interval
  randFloat: function(e, t) {
    return e + Math.random() * (t - e);
  },
  // Random float from <-range/2, range/2> interval
  randFloatSpread: function(e) {
    return e * (0.5 - Math.random());
  },
  degToRad: function(e) {
    return e * Ae.DEG2RAD;
  },
  radToDeg: function(e) {
    return e * Ae.RAD2DEG;
  },
  isPowerOfTwo: function(e) {
    return (e & e - 1) === 0 && e !== 0;
  },
  ceilPowerOfTwo: function(e) {
    return Math.pow(2, Math.ceil(Math.log(e) / Math.LN2));
  },
  floorPowerOfTwo: function(e) {
    return Math.pow(2, Math.floor(Math.log(e) / Math.LN2));
  },
  setQuaternionFromProperEuler: function(e, t, n, r, i) {
    var a = Math.cos, s = Math.sin, o = a(n / 2), l = s(n / 2), c = a((t + r) / 2), u = s((t + r) / 2), h = a((t - r) / 2), f = s((t - r) / 2), d = a((r - t) / 2), p = s((r - t) / 2);
    i === "XYX" ? e.set(o * u, l * h, l * f, o * c) : i === "YZY" ? e.set(l * f, o * u, l * h, o * c) : i === "ZXZ" ? e.set(l * h, l * f, o * u, o * c) : i === "XZX" ? e.set(o * u, l * p, l * d, o * c) : i === "YXY" ? e.set(l * d, o * u, l * p, o * c) : i === "ZYZ" ? e.set(l * p, l * d, o * u, o * c) : console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order.");
  }
};
function G(e, t) {
  this.x = e || 0, this.y = t || 0;
}
Object.defineProperties(G.prototype, {
  width: {
    get: function() {
      return this.x;
    },
    set: function(e) {
      this.x = e;
    }
  },
  height: {
    get: function() {
      return this.y;
    },
    set: function(e) {
      this.y = e;
    }
  }
});
Object.assign(G.prototype, {
  isVector2: !0,
  set: function(e, t) {
    return this.x = e, this.y = t, this;
  },
  setScalar: function(e) {
    return this.x = e, this.y = e, this;
  },
  setX: function(e) {
    return this.x = e, this;
  },
  setY: function(e) {
    return this.y = e, this;
  },
  setComponent: function(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  },
  getComponent: function(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      default:
        throw new Error("index is out of range: " + e);
    }
  },
  clone: function() {
    return new this.constructor(this.x, this.y);
  },
  copy: function(e) {
    return this.x = e.x, this.y = e.y, this;
  },
  add: function(e, t) {
    return t !== void 0 ? (console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(e, t)) : (this.x += e.x, this.y += e.y, this);
  },
  addScalar: function(e) {
    return this.x += e, this.y += e, this;
  },
  addVectors: function(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this;
  },
  addScaledVector: function(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this;
  },
  sub: function(e, t) {
    return t !== void 0 ? (console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(e, t)) : (this.x -= e.x, this.y -= e.y, this);
  },
  subScalar: function(e) {
    return this.x -= e, this.y -= e, this;
  },
  subVectors: function(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this;
  },
  multiply: function(e) {
    return this.x *= e.x, this.y *= e.y, this;
  },
  multiplyScalar: function(e) {
    return this.x *= e, this.y *= e, this;
  },
  divide: function(e) {
    return this.x /= e.x, this.y /= e.y, this;
  },
  divideScalar: function(e) {
    return this.multiplyScalar(1 / e);
  },
  applyMatrix3: function(e) {
    var t = this.x, n = this.y, r = e.elements;
    return this.x = r[0] * t + r[3] * n + r[6], this.y = r[1] * t + r[4] * n + r[7], this;
  },
  min: function(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this;
  },
  max: function(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this;
  },
  clamp: function(e, t) {
    return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this;
  },
  clampScalar: function(e, t) {
    return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this;
  },
  clampLength: function(e, t) {
    var n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)));
  },
  floor: function() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this;
  },
  ceil: function() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this;
  },
  round: function() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
  },
  roundToZero: function() {
    return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this;
  },
  negate: function() {
    return this.x = -this.x, this.y = -this.y, this;
  },
  dot: function(e) {
    return this.x * e.x + this.y * e.y;
  },
  cross: function(e) {
    return this.x * e.y - this.y * e.x;
  },
  lengthSq: function() {
    return this.x * this.x + this.y * this.y;
  },
  length: function() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  },
  manhattanLength: function() {
    return Math.abs(this.x) + Math.abs(this.y);
  },
  normalize: function() {
    return this.divideScalar(this.length() || 1);
  },
  angle: function() {
    var e = Math.atan2(this.y, this.x);
    return e < 0 && (e += 2 * Math.PI), e;
  },
  distanceTo: function(e) {
    return Math.sqrt(this.distanceToSquared(e));
  },
  distanceToSquared: function(e) {
    var t = this.x - e.x, n = this.y - e.y;
    return t * t + n * n;
  },
  manhattanDistanceTo: function(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y);
  },
  setLength: function(e) {
    return this.normalize().multiplyScalar(e);
  },
  lerp: function(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this;
  },
  lerpVectors: function(e, t, n) {
    return this.subVectors(t, e).multiplyScalar(n).add(e);
  },
  equals: function(e) {
    return e.x === this.x && e.y === this.y;
  },
  fromArray: function(e, t) {
    return t === void 0 && (t = 0), this.x = e[t], this.y = e[t + 1], this;
  },
  toArray: function(e, t) {
    return e === void 0 && (e = []), t === void 0 && (t = 0), e[t] = this.x, e[t + 1] = this.y, e;
  },
  fromBufferAttribute: function(e, t, n) {
    return n !== void 0 && console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."), this.x = e.getX(t), this.y = e.getY(t), this;
  },
  rotateAround: function(e, t) {
    var n = Math.cos(t), r = Math.sin(t), i = this.x - e.x, a = this.y - e.y;
    return this.x = i * n - a * r + e.x, this.y = i * r + a * n + e.y, this;
  }
});
function gt() {
  this.elements = [
    1,
    0,
    0,
    0,
    1,
    0,
    0,
    0,
    1
  ], arguments.length > 0 && console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.");
}
Object.assign(gt.prototype, {
  isMatrix3: !0,
  set: function(e, t, n, r, i, a, s, o, l) {
    var c = this.elements;
    return c[0] = e, c[1] = r, c[2] = s, c[3] = t, c[4] = i, c[5] = o, c[6] = n, c[7] = a, c[8] = l, this;
  },
  identity: function() {
    return this.set(
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1
    ), this;
  },
  clone: function() {
    return new this.constructor().fromArray(this.elements);
  },
  copy: function(e) {
    var t = this.elements, n = e.elements;
    return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], this;
  },
  setFromMatrix4: function(e) {
    var t = e.elements;
    return this.set(
      t[0],
      t[4],
      t[8],
      t[1],
      t[5],
      t[9],
      t[2],
      t[6],
      t[10]
    ), this;
  },
  multiply: function(e) {
    return this.multiplyMatrices(this, e);
  },
  premultiply: function(e) {
    return this.multiplyMatrices(e, this);
  },
  multiplyMatrices: function(e, t) {
    var n = e.elements, r = t.elements, i = this.elements, a = n[0], s = n[3], o = n[6], l = n[1], c = n[4], u = n[7], h = n[2], f = n[5], d = n[8], p = r[0], v = r[3], m = r[6], y = r[1], x = r[4], M = r[7], E = r[2], w = r[5], A = r[8];
    return i[0] = a * p + s * y + o * E, i[3] = a * v + s * x + o * w, i[6] = a * m + s * M + o * A, i[1] = l * p + c * y + u * E, i[4] = l * v + c * x + u * w, i[7] = l * m + c * M + u * A, i[2] = h * p + f * y + d * E, i[5] = h * v + f * x + d * w, i[8] = h * m + f * M + d * A, this;
  },
  multiplyScalar: function(e) {
    var t = this.elements;
    return t[0] *= e, t[3] *= e, t[6] *= e, t[1] *= e, t[4] *= e, t[7] *= e, t[2] *= e, t[5] *= e, t[8] *= e, this;
  },
  determinant: function() {
    var e = this.elements, t = e[0], n = e[1], r = e[2], i = e[3], a = e[4], s = e[5], o = e[6], l = e[7], c = e[8];
    return t * a * c - t * s * l - n * i * c + n * s * o + r * i * l - r * a * o;
  },
  getInverse: function(e, t) {
    e && e.isMatrix4 && console.error("THREE.Matrix3: .getInverse() no longer takes a Matrix4 argument.");
    var n = e.elements, r = this.elements, i = n[0], a = n[1], s = n[2], o = n[3], l = n[4], c = n[5], u = n[6], h = n[7], f = n[8], d = f * l - c * h, p = c * u - f * o, v = h * o - l * u, m = i * d + a * p + s * v;
    if (m === 0) {
      var y = "THREE.Matrix3: .getInverse() can't invert matrix, determinant is 0";
      if (t === !0)
        throw new Error(y);
      return console.warn(y), this.identity();
    }
    var x = 1 / m;
    return r[0] = d * x, r[1] = (s * h - f * a) * x, r[2] = (c * a - s * l) * x, r[3] = p * x, r[4] = (f * i - s * u) * x, r[5] = (s * o - c * i) * x, r[6] = v * x, r[7] = (a * u - h * i) * x, r[8] = (l * i - a * o) * x, this;
  },
  transpose: function() {
    var e, t = this.elements;
    return e = t[1], t[1] = t[3], t[3] = e, e = t[2], t[2] = t[6], t[6] = e, e = t[5], t[5] = t[7], t[7] = e, this;
  },
  getNormalMatrix: function(e) {
    return this.setFromMatrix4(e).getInverse(this).transpose();
  },
  transposeIntoArray: function(e) {
    var t = this.elements;
    return e[0] = t[0], e[1] = t[3], e[2] = t[6], e[3] = t[1], e[4] = t[4], e[5] = t[7], e[6] = t[2], e[7] = t[5], e[8] = t[8], this;
  },
  setUvTransform: function(e, t, n, r, i, a, s) {
    var o = Math.cos(i), l = Math.sin(i);
    this.set(
      n * o,
      n * l,
      -n * (o * a + l * s) + a + e,
      -r * l,
      r * o,
      -r * (-l * a + o * s) + s + t,
      0,
      0,
      1
    );
  },
  scale: function(e, t) {
    var n = this.elements;
    return n[0] *= e, n[3] *= e, n[6] *= e, n[1] *= t, n[4] *= t, n[7] *= t, this;
  },
  rotate: function(e) {
    var t = Math.cos(e), n = Math.sin(e), r = this.elements, i = r[0], a = r[3], s = r[6], o = r[1], l = r[4], c = r[7];
    return r[0] = t * i + n * o, r[3] = t * a + n * l, r[6] = t * s + n * c, r[1] = -n * i + t * o, r[4] = -n * a + t * l, r[7] = -n * s + t * c, this;
  },
  translate: function(e, t) {
    var n = this.elements;
    return n[0] += e * n[2], n[3] += e * n[5], n[6] += e * n[8], n[1] += t * n[2], n[4] += t * n[5], n[7] += t * n[8], this;
  },
  equals: function(e) {
    for (var t = this.elements, n = e.elements, r = 0; r < 9; r++)
      if (t[r] !== n[r]) return !1;
    return !0;
  },
  fromArray: function(e, t) {
    t === void 0 && (t = 0);
    for (var n = 0; n < 9; n++)
      this.elements[n] = e[n + t];
    return this;
  },
  toArray: function(e, t) {
    e === void 0 && (e = []), t === void 0 && (t = 0);
    var n = this.elements;
    return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e;
  }
});
var vr, ar = {
  getDataURL: function(e) {
    var t;
    if (typeof HTMLCanvasElement == "undefined")
      return e.src;
    if (e instanceof HTMLCanvasElement)
      t = e;
    else {
      vr === void 0 && (vr = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas")), vr.width = e.width, vr.height = e.height;
      var n = vr.getContext("2d");
      e instanceof ImageData ? n.putImageData(e, 0, 0) : n.drawImage(e, 0, 0, e.width, e.height), t = vr;
    }
    return t.width > 2048 || t.height > 2048 ? t.toDataURL("image/jpeg", 0.6) : t.toDataURL("image/png");
  }
}, Zf = 0;
function Ze(e, t, n, r, i, a, s, o, l, c) {
  Object.defineProperty(this, "id", { value: Zf++ }), this.uuid = Ae.generateUUID(), this.name = "", this.image = e !== void 0 ? e : Ze.DEFAULT_IMAGE, this.mipmaps = [], this.mapping = t !== void 0 ? t : Ze.DEFAULT_MAPPING, this.wrapS = n !== void 0 ? n : Et, this.wrapT = r !== void 0 ? r : Et, this.magFilter = i !== void 0 ? i : ft, this.minFilter = a !== void 0 ? a : Gs, this.anisotropy = l !== void 0 ? l : 1, this.format = s !== void 0 ? s : rn, this.internalFormat = null, this.type = o !== void 0 ? o : Vs, this.offset = new G(0, 0), this.repeat = new G(1, 1), this.center = new G(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new gt(), this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.encoding = c !== void 0 ? c : Pt, this.version = 0, this.onUpdate = null;
}
Ze.DEFAULT_IMAGE = void 0;
Ze.DEFAULT_MAPPING = bl;
Ze.prototype = Object.assign(Object.create(En.prototype), {
  constructor: Ze,
  isTexture: !0,
  updateMatrix: function() {
    this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y);
  },
  clone: function() {
    return new this.constructor().copy(this);
  },
  copy: function(e) {
    return this.name = e.name, this.image = e.image, this.mipmaps = e.mipmaps.slice(0), this.mapping = e.mapping, this.wrapS = e.wrapS, this.wrapT = e.wrapT, this.magFilter = e.magFilter, this.minFilter = e.minFilter, this.anisotropy = e.anisotropy, this.format = e.format, this.internalFormat = e.internalFormat, this.type = e.type, this.offset.copy(e.offset), this.repeat.copy(e.repeat), this.center.copy(e.center), this.rotation = e.rotation, this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrix.copy(e.matrix), this.generateMipmaps = e.generateMipmaps, this.premultiplyAlpha = e.premultiplyAlpha, this.flipY = e.flipY, this.unpackAlignment = e.unpackAlignment, this.encoding = e.encoding, this;
  },
  toJSON: function(e) {
    var t = e === void 0 || typeof e == "string";
    if (!t && e.textures[this.uuid] !== void 0)
      return e.textures[this.uuid];
    var n = {
      metadata: {
        version: 4.5,
        type: "Texture",
        generator: "Texture.toJSON"
      },
      uuid: this.uuid,
      name: this.name,
      mapping: this.mapping,
      repeat: [this.repeat.x, this.repeat.y],
      offset: [this.offset.x, this.offset.y],
      center: [this.center.x, this.center.y],
      rotation: this.rotation,
      wrap: [this.wrapS, this.wrapT],
      format: this.format,
      type: this.type,
      encoding: this.encoding,
      minFilter: this.minFilter,
      magFilter: this.magFilter,
      anisotropy: this.anisotropy,
      flipY: this.flipY,
      premultiplyAlpha: this.premultiplyAlpha,
      unpackAlignment: this.unpackAlignment
    };
    if (this.image !== void 0) {
      var r = this.image;
      if (r.uuid === void 0 && (r.uuid = Ae.generateUUID()), !t && e.images[r.uuid] === void 0) {
        var i;
        if (Array.isArray(r)) {
          i = [];
          for (var a = 0, s = r.length; a < s; a++)
            i.push(ar.getDataURL(r[a]));
        } else
          i = ar.getDataURL(r);
        e.images[r.uuid] = {
          uuid: r.uuid,
          url: i
        };
      }
      n.image = r.uuid;
    }
    return t || (e.textures[this.uuid] = n), n;
  },
  dispose: function() {
    this.dispatchEvent({ type: "dispose" });
  },
  transformUv: function(e) {
    if (this.mapping !== bl) return e;
    if (e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1)
      switch (this.wrapS) {
        case Ka:
          e.x = e.x - Math.floor(e.x);
          break;
        case Et:
          e.x = e.x < 0 ? 0 : 1;
          break;
        case es:
          Math.abs(Math.floor(e.x) % 2) === 1 ? e.x = Math.ceil(e.x) - e.x : e.x = e.x - Math.floor(e.x);
          break;
      }
    if (e.y < 0 || e.y > 1)
      switch (this.wrapT) {
        case Ka:
          e.y = e.y - Math.floor(e.y);
          break;
        case Et:
          e.y = e.y < 0 ? 0 : 1;
          break;
        case es:
          Math.abs(Math.floor(e.y) % 2) === 1 ? e.y = Math.ceil(e.y) - e.y : e.y = e.y - Math.floor(e.y);
          break;
      }
    return this.flipY && (e.y = 1 - e.y), e;
  }
});
Object.defineProperty(Ze.prototype, "needsUpdate", {
  set: function(e) {
    e === !0 && this.version++;
  }
});
function Ye(e, t, n, r) {
  this.x = e || 0, this.y = t || 0, this.z = n || 0, this.w = r !== void 0 ? r : 1;
}
Object.defineProperties(Ye.prototype, {
  width: {
    get: function() {
      return this.z;
    },
    set: function(e) {
      this.z = e;
    }
  },
  height: {
    get: function() {
      return this.w;
    },
    set: function(e) {
      this.w = e;
    }
  }
});
Object.assign(Ye.prototype, {
  isVector4: !0,
  set: function(e, t, n, r) {
    return this.x = e, this.y = t, this.z = n, this.w = r, this;
  },
  setScalar: function(e) {
    return this.x = e, this.y = e, this.z = e, this.w = e, this;
  },
  setX: function(e) {
    return this.x = e, this;
  },
  setY: function(e) {
    return this.y = e, this;
  },
  setZ: function(e) {
    return this.z = e, this;
  },
  setW: function(e) {
    return this.w = e, this;
  },
  setComponent: function(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      case 3:
        this.w = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  },
  getComponent: function(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      case 3:
        return this.w;
      default:
        throw new Error("index is out of range: " + e);
    }
  },
  clone: function() {
    return new this.constructor(this.x, this.y, this.z, this.w);
  },
  copy: function(e) {
    return this.x = e.x, this.y = e.y, this.z = e.z, this.w = e.w !== void 0 ? e.w : 1, this;
  },
  add: function(e, t) {
    return t !== void 0 ? (console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(e, t)) : (this.x += e.x, this.y += e.y, this.z += e.z, this.w += e.w, this);
  },
  addScalar: function(e) {
    return this.x += e, this.y += e, this.z += e, this.w += e, this;
  },
  addVectors: function(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this.w = e.w + t.w, this;
  },
  addScaledVector: function(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this.w += e.w * t, this;
  },
  sub: function(e, t) {
    return t !== void 0 ? (console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(e, t)) : (this.x -= e.x, this.y -= e.y, this.z -= e.z, this.w -= e.w, this);
  },
  subScalar: function(e) {
    return this.x -= e, this.y -= e, this.z -= e, this.w -= e, this;
  },
  subVectors: function(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this.w = e.w - t.w, this;
  },
  multiplyScalar: function(e) {
    return this.x *= e, this.y *= e, this.z *= e, this.w *= e, this;
  },
  applyMatrix4: function(e) {
    var t = this.x, n = this.y, r = this.z, i = this.w, a = e.elements;
    return this.x = a[0] * t + a[4] * n + a[8] * r + a[12] * i, this.y = a[1] * t + a[5] * n + a[9] * r + a[13] * i, this.z = a[2] * t + a[6] * n + a[10] * r + a[14] * i, this.w = a[3] * t + a[7] * n + a[11] * r + a[15] * i, this;
  },
  divideScalar: function(e) {
    return this.multiplyScalar(1 / e);
  },
  setAxisAngleFromQuaternion: function(e) {
    this.w = 2 * Math.acos(e.w);
    var t = Math.sqrt(1 - e.w * e.w);
    return t < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = e.x / t, this.y = e.y / t, this.z = e.z / t), this;
  },
  setAxisAngleFromRotationMatrix: function(e) {
    var t, n, r, i, a = 0.01, s = 0.1, o = e.elements, l = o[0], c = o[4], u = o[8], h = o[1], f = o[5], d = o[9], p = o[2], v = o[6], m = o[10];
    if (Math.abs(c - h) < a && Math.abs(u - p) < a && Math.abs(d - v) < a) {
      if (Math.abs(c + h) < s && Math.abs(u + p) < s && Math.abs(d + v) < s && Math.abs(l + f + m - 3) < s)
        return this.set(1, 0, 0, 0), this;
      t = Math.PI;
      var y = (l + 1) / 2, x = (f + 1) / 2, M = (m + 1) / 2, E = (c + h) / 4, w = (u + p) / 4, A = (d + v) / 4;
      return y > x && y > M ? y < a ? (n = 0, r = 0.707106781, i = 0.707106781) : (n = Math.sqrt(y), r = E / n, i = w / n) : x > M ? x < a ? (n = 0.707106781, r = 0, i = 0.707106781) : (r = Math.sqrt(x), n = E / r, i = A / r) : M < a ? (n = 0.707106781, r = 0.707106781, i = 0) : (i = Math.sqrt(M), n = w / i, r = A / i), this.set(n, r, i, t), this;
    }
    var C = Math.sqrt((v - d) * (v - d) + (u - p) * (u - p) + (h - c) * (h - c));
    return Math.abs(C) < 1e-3 && (C = 1), this.x = (v - d) / C, this.y = (u - p) / C, this.z = (h - c) / C, this.w = Math.acos((l + f + m - 1) / 2), this;
  },
  min: function(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this.w = Math.min(this.w, e.w), this;
  },
  max: function(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this.w = Math.max(this.w, e.w), this;
  },
  clamp: function(e, t) {
    return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this.z = Math.max(e.z, Math.min(t.z, this.z)), this.w = Math.max(e.w, Math.min(t.w, this.w)), this;
  },
  clampScalar: function(e, t) {
    return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this.z = Math.max(e, Math.min(t, this.z)), this.w = Math.max(e, Math.min(t, this.w)), this;
  },
  clampLength: function(e, t) {
    var n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)));
  },
  floor: function() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this;
  },
  ceil: function() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this;
  },
  round: function() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this;
  },
  roundToZero: function() {
    return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this.w = this.w < 0 ? Math.ceil(this.w) : Math.floor(this.w), this;
  },
  negate: function() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this;
  },
  dot: function(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w;
  },
  lengthSq: function() {
    return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
  },
  length: function() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
  },
  manhattanLength: function() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w);
  },
  normalize: function() {
    return this.divideScalar(this.length() || 1);
  },
  setLength: function(e) {
    return this.normalize().multiplyScalar(e);
  },
  lerp: function(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this.w += (e.w - this.w) * t, this;
  },
  lerpVectors: function(e, t, n) {
    return this.subVectors(t, e).multiplyScalar(n).add(e);
  },
  equals: function(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w;
  },
  fromArray: function(e, t) {
    return t === void 0 && (t = 0), this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this.w = e[t + 3], this;
  },
  toArray: function(e, t) {
    return e === void 0 && (e = []), t === void 0 && (t = 0), e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e[t + 3] = this.w, e;
  },
  fromBufferAttribute: function(e, t, n) {
    return n !== void 0 && console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."), this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this.w = e.getW(t), this;
  }
});
function Mt(e, t, n) {
  this.width = e, this.height = t, this.scissor = new Ye(0, 0, e, t), this.scissorTest = !1, this.viewport = new Ye(0, 0, e, t), n = n || {}, this.texture = new Ze(void 0, n.mapping, n.wrapS, n.wrapT, n.magFilter, n.minFilter, n.format, n.type, n.anisotropy, n.encoding), this.texture.image = {}, this.texture.image.width = e, this.texture.image.height = t, this.texture.generateMipmaps = n.generateMipmaps !== void 0 ? n.generateMipmaps : !1, this.texture.minFilter = n.minFilter !== void 0 ? n.minFilter : ft, this.depthBuffer = n.depthBuffer !== void 0 ? n.depthBuffer : !0, this.stencilBuffer = n.stencilBuffer !== void 0 ? n.stencilBuffer : !0, this.depthTexture = n.depthTexture !== void 0 ? n.depthTexture : null;
}
Mt.prototype = Object.assign(Object.create(En.prototype), {
  constructor: Mt,
  isWebGLRenderTarget: !0,
  setSize: function(e, t) {
    (this.width !== e || this.height !== t) && (this.width = e, this.height = t, this.texture.image.width = e, this.texture.image.height = t, this.dispose()), this.viewport.set(0, 0, e, t), this.scissor.set(0, 0, e, t);
  },
  clone: function() {
    return new this.constructor().copy(this);
  },
  copy: function(e) {
    return this.width = e.width, this.height = e.height, this.viewport.copy(e.viewport), this.texture = e.texture.clone(), this.depthBuffer = e.depthBuffer, this.stencilBuffer = e.stencilBuffer, this.depthTexture = e.depthTexture, this;
  },
  dispose: function() {
    this.dispatchEvent({ type: "dispose" });
  }
});
function ec(e, t, n) {
  Mt.call(this, e, t, n), this.samples = 4;
}
ec.prototype = Object.assign(Object.create(Mt.prototype), {
  constructor: ec,
  isWebGLMultisampleRenderTarget: !0,
  copy: function(e) {
    return Mt.prototype.copy.call(this, e), this.samples = e.samples, this;
  }
});
function Tt(e, t, n, r) {
  this._x = e || 0, this._y = t || 0, this._z = n || 0, this._w = r !== void 0 ? r : 1;
}
Object.assign(Tt, {
  slerp: function(e, t, n, r) {
    return n.copy(e).slerp(t, r);
  },
  slerpFlat: function(e, t, n, r, i, a, s) {
    var o = n[r + 0], l = n[r + 1], c = n[r + 2], u = n[r + 3], h = i[a + 0], f = i[a + 1], d = i[a + 2], p = i[a + 3];
    if (u !== p || o !== h || l !== f || c !== d) {
      var v = 1 - s, m = o * h + l * f + c * d + u * p, y = m >= 0 ? 1 : -1, x = 1 - m * m;
      if (x > Number.EPSILON) {
        var M = Math.sqrt(x), E = Math.atan2(M, m * y);
        v = Math.sin(v * E) / M, s = Math.sin(s * E) / M;
      }
      var w = s * y;
      if (o = o * v + h * w, l = l * v + f * w, c = c * v + d * w, u = u * v + p * w, v === 1 - s) {
        var A = 1 / Math.sqrt(o * o + l * l + c * c + u * u);
        o *= A, l *= A, c *= A, u *= A;
      }
    }
    e[t] = o, e[t + 1] = l, e[t + 2] = c, e[t + 3] = u;
  }
});
Object.defineProperties(Tt.prototype, {
  x: {
    get: function() {
      return this._x;
    },
    set: function(e) {
      this._x = e, this._onChangeCallback();
    }
  },
  y: {
    get: function() {
      return this._y;
    },
    set: function(e) {
      this._y = e, this._onChangeCallback();
    }
  },
  z: {
    get: function() {
      return this._z;
    },
    set: function(e) {
      this._z = e, this._onChangeCallback();
    }
  },
  w: {
    get: function() {
      return this._w;
    },
    set: function(e) {
      this._w = e, this._onChangeCallback();
    }
  }
});
Object.assign(Tt.prototype, {
  isQuaternion: !0,
  set: function(e, t, n, r) {
    return this._x = e, this._y = t, this._z = n, this._w = r, this._onChangeCallback(), this;
  },
  clone: function() {
    return new this.constructor(this._x, this._y, this._z, this._w);
  },
  copy: function(e) {
    return this._x = e.x, this._y = e.y, this._z = e.z, this._w = e.w, this._onChangeCallback(), this;
  },
  setFromEuler: function(e, t) {
    if (!(e && e.isEuler))
      throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");
    var n = e._x, r = e._y, i = e._z, a = e.order, s = Math.cos, o = Math.sin, l = s(n / 2), c = s(r / 2), u = s(i / 2), h = o(n / 2), f = o(r / 2), d = o(i / 2);
    return a === "XYZ" ? (this._x = h * c * u + l * f * d, this._y = l * f * u - h * c * d, this._z = l * c * d + h * f * u, this._w = l * c * u - h * f * d) : a === "YXZ" ? (this._x = h * c * u + l * f * d, this._y = l * f * u - h * c * d, this._z = l * c * d - h * f * u, this._w = l * c * u + h * f * d) : a === "ZXY" ? (this._x = h * c * u - l * f * d, this._y = l * f * u + h * c * d, this._z = l * c * d + h * f * u, this._w = l * c * u - h * f * d) : a === "ZYX" ? (this._x = h * c * u - l * f * d, this._y = l * f * u + h * c * d, this._z = l * c * d - h * f * u, this._w = l * c * u + h * f * d) : a === "YZX" ? (this._x = h * c * u + l * f * d, this._y = l * f * u + h * c * d, this._z = l * c * d - h * f * u, this._w = l * c * u - h * f * d) : a === "XZY" && (this._x = h * c * u - l * f * d, this._y = l * f * u - h * c * d, this._z = l * c * d + h * f * u, this._w = l * c * u + h * f * d), t !== !1 && this._onChangeCallback(), this;
  },
  setFromAxisAngle: function(e, t) {
    var n = t / 2, r = Math.sin(n);
    return this._x = e.x * r, this._y = e.y * r, this._z = e.z * r, this._w = Math.cos(n), this._onChangeCallback(), this;
  },
  setFromRotationMatrix: function(e) {
    var t = e.elements, n = t[0], r = t[4], i = t[8], a = t[1], s = t[5], o = t[9], l = t[2], c = t[6], u = t[10], h = n + s + u, f;
    return h > 0 ? (f = 0.5 / Math.sqrt(h + 1), this._w = 0.25 / f, this._x = (c - o) * f, this._y = (i - l) * f, this._z = (a - r) * f) : n > s && n > u ? (f = 2 * Math.sqrt(1 + n - s - u), this._w = (c - o) / f, this._x = 0.25 * f, this._y = (r + a) / f, this._z = (i + l) / f) : s > u ? (f = 2 * Math.sqrt(1 + s - n - u), this._w = (i - l) / f, this._x = (r + a) / f, this._y = 0.25 * f, this._z = (o + c) / f) : (f = 2 * Math.sqrt(1 + u - n - s), this._w = (a - r) / f, this._x = (i + l) / f, this._y = (o + c) / f, this._z = 0.25 * f), this._onChangeCallback(), this;
  },
  setFromUnitVectors: function(e, t) {
    var n = 1e-6, r = e.dot(t) + 1;
    return r < n ? (r = 0, Math.abs(e.x) > Math.abs(e.z) ? (this._x = -e.y, this._y = e.x, this._z = 0, this._w = r) : (this._x = 0, this._y = -e.z, this._z = e.y, this._w = r)) : (this._x = e.y * t.z - e.z * t.y, this._y = e.z * t.x - e.x * t.z, this._z = e.x * t.y - e.y * t.x, this._w = r), this.normalize();
  },
  angleTo: function(e) {
    return 2 * Math.acos(Math.abs(Ae.clamp(this.dot(e), -1, 1)));
  },
  rotateTowards: function(e, t) {
    var n = this.angleTo(e);
    if (n === 0) return this;
    var r = Math.min(1, t / n);
    return this.slerp(e, r), this;
  },
  inverse: function() {
    return this.conjugate();
  },
  conjugate: function() {
    return this._x *= -1, this._y *= -1, this._z *= -1, this._onChangeCallback(), this;
  },
  dot: function(e) {
    return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w;
  },
  lengthSq: function() {
    return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
  },
  length: function() {
    return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
  },
  normalize: function() {
    var e = this.length();
    return e === 0 ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (e = 1 / e, this._x = this._x * e, this._y = this._y * e, this._z = this._z * e, this._w = this._w * e), this._onChangeCallback(), this;
  },
  multiply: function(e, t) {
    return t !== void 0 ? (console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."), this.multiplyQuaternions(e, t)) : this.multiplyQuaternions(this, e);
  },
  premultiply: function(e) {
    return this.multiplyQuaternions(e, this);
  },
  multiplyQuaternions: function(e, t) {
    var n = e._x, r = e._y, i = e._z, a = e._w, s = t._x, o = t._y, l = t._z, c = t._w;
    return this._x = n * c + a * s + r * l - i * o, this._y = r * c + a * o + i * s - n * l, this._z = i * c + a * l + n * o - r * s, this._w = a * c - n * s - r * o - i * l, this._onChangeCallback(), this;
  },
  slerp: function(e, t) {
    if (t === 0) return this;
    if (t === 1) return this.copy(e);
    var n = this._x, r = this._y, i = this._z, a = this._w, s = a * e._w + n * e._x + r * e._y + i * e._z;
    if (s < 0 ? (this._w = -e._w, this._x = -e._x, this._y = -e._y, this._z = -e._z, s = -s) : this.copy(e), s >= 1)
      return this._w = a, this._x = n, this._y = r, this._z = i, this;
    var o = 1 - s * s;
    if (o <= Number.EPSILON) {
      var l = 1 - t;
      return this._w = l * a + t * this._w, this._x = l * n + t * this._x, this._y = l * r + t * this._y, this._z = l * i + t * this._z, this.normalize(), this._onChangeCallback(), this;
    }
    var c = Math.sqrt(o), u = Math.atan2(c, s), h = Math.sin((1 - t) * u) / c, f = Math.sin(t * u) / c;
    return this._w = a * h + this._w * f, this._x = n * h + this._x * f, this._y = r * h + this._y * f, this._z = i * h + this._z * f, this._onChangeCallback(), this;
  },
  equals: function(e) {
    return e._x === this._x && e._y === this._y && e._z === this._z && e._w === this._w;
  },
  fromArray: function(e, t) {
    return t === void 0 && (t = 0), this._x = e[t], this._y = e[t + 1], this._z = e[t + 2], this._w = e[t + 3], this._onChangeCallback(), this;
  },
  toArray: function(e, t) {
    return e === void 0 && (e = []), t === void 0 && (t = 0), e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._w, e;
  },
  _onChange: function(e) {
    return this._onChangeCallback = e, this;
  },
  _onChangeCallback: function() {
  }
});
var Ys = new b(), tc = new Tt();
function b(e, t, n) {
  this.x = e || 0, this.y = t || 0, this.z = n || 0;
}
Object.assign(b.prototype, {
  isVector3: !0,
  set: function(e, t, n) {
    return this.x = e, this.y = t, this.z = n, this;
  },
  setScalar: function(e) {
    return this.x = e, this.y = e, this.z = e, this;
  },
  setX: function(e) {
    return this.x = e, this;
  },
  setY: function(e) {
    return this.y = e, this;
  },
  setZ: function(e) {
    return this.z = e, this;
  },
  setComponent: function(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  },
  getComponent: function(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      default:
        throw new Error("index is out of range: " + e);
    }
  },
  clone: function() {
    return new this.constructor(this.x, this.y, this.z);
  },
  copy: function(e) {
    return this.x = e.x, this.y = e.y, this.z = e.z, this;
  },
  add: function(e, t) {
    return t !== void 0 ? (console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(e, t)) : (this.x += e.x, this.y += e.y, this.z += e.z, this);
  },
  addScalar: function(e) {
    return this.x += e, this.y += e, this.z += e, this;
  },
  addVectors: function(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this;
  },
  addScaledVector: function(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this;
  },
  sub: function(e, t) {
    return t !== void 0 ? (console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(e, t)) : (this.x -= e.x, this.y -= e.y, this.z -= e.z, this);
  },
  subScalar: function(e) {
    return this.x -= e, this.y -= e, this.z -= e, this;
  },
  subVectors: function(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this;
  },
  multiply: function(e, t) {
    return t !== void 0 ? (console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."), this.multiplyVectors(e, t)) : (this.x *= e.x, this.y *= e.y, this.z *= e.z, this);
  },
  multiplyScalar: function(e) {
    return this.x *= e, this.y *= e, this.z *= e, this;
  },
  multiplyVectors: function(e, t) {
    return this.x = e.x * t.x, this.y = e.y * t.y, this.z = e.z * t.z, this;
  },
  applyEuler: function(e) {
    return e && e.isEuler || console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."), this.applyQuaternion(tc.setFromEuler(e));
  },
  applyAxisAngle: function(e, t) {
    return this.applyQuaternion(tc.setFromAxisAngle(e, t));
  },
  applyMatrix3: function(e) {
    var t = this.x, n = this.y, r = this.z, i = e.elements;
    return this.x = i[0] * t + i[3] * n + i[6] * r, this.y = i[1] * t + i[4] * n + i[7] * r, this.z = i[2] * t + i[5] * n + i[8] * r, this;
  },
  applyNormalMatrix: function(e) {
    return this.applyMatrix3(e).normalize();
  },
  applyMatrix4: function(e) {
    var t = this.x, n = this.y, r = this.z, i = e.elements, a = 1 / (i[3] * t + i[7] * n + i[11] * r + i[15]);
    return this.x = (i[0] * t + i[4] * n + i[8] * r + i[12]) * a, this.y = (i[1] * t + i[5] * n + i[9] * r + i[13]) * a, this.z = (i[2] * t + i[6] * n + i[10] * r + i[14]) * a, this;
  },
  applyQuaternion: function(e) {
    var t = this.x, n = this.y, r = this.z, i = e.x, a = e.y, s = e.z, o = e.w, l = o * t + a * r - s * n, c = o * n + s * t - i * r, u = o * r + i * n - a * t, h = -i * t - a * n - s * r;
    return this.x = l * o + h * -i + c * -s - u * -a, this.y = c * o + h * -a + u * -i - l * -s, this.z = u * o + h * -s + l * -a - c * -i, this;
  },
  project: function(e) {
    return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix);
  },
  unproject: function(e) {
    return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld);
  },
  transformDirection: function(e) {
    var t = this.x, n = this.y, r = this.z, i = e.elements;
    return this.x = i[0] * t + i[4] * n + i[8] * r, this.y = i[1] * t + i[5] * n + i[9] * r, this.z = i[2] * t + i[6] * n + i[10] * r, this.normalize();
  },
  divide: function(e) {
    return this.x /= e.x, this.y /= e.y, this.z /= e.z, this;
  },
  divideScalar: function(e) {
    return this.multiplyScalar(1 / e);
  },
  min: function(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this;
  },
  max: function(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this;
  },
  clamp: function(e, t) {
    return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this.z = Math.max(e.z, Math.min(t.z, this.z)), this;
  },
  clampScalar: function(e, t) {
    return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this.z = Math.max(e, Math.min(t, this.z)), this;
  },
  clampLength: function(e, t) {
    var n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)));
  },
  floor: function() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this;
  },
  ceil: function() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this;
  },
  round: function() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this;
  },
  roundToZero: function() {
    return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this;
  },
  negate: function() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this;
  },
  dot: function(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z;
  },
  // TODO lengthSquared?
  lengthSq: function() {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  },
  length: function() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  },
  manhattanLength: function() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
  },
  normalize: function() {
    return this.divideScalar(this.length() || 1);
  },
  setLength: function(e) {
    return this.normalize().multiplyScalar(e);
  },
  lerp: function(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this;
  },
  lerpVectors: function(e, t, n) {
    return this.subVectors(t, e).multiplyScalar(n).add(e);
  },
  cross: function(e, t) {
    return t !== void 0 ? (console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."), this.crossVectors(e, t)) : this.crossVectors(this, e);
  },
  crossVectors: function(e, t) {
    var n = e.x, r = e.y, i = e.z, a = t.x, s = t.y, o = t.z;
    return this.x = r * o - i * s, this.y = i * a - n * o, this.z = n * s - r * a, this;
  },
  projectOnVector: function(e) {
    var t = e.lengthSq();
    if (t === 0) return this.set(0, 0, 0);
    var n = e.dot(this) / t;
    return this.copy(e).multiplyScalar(n);
  },
  projectOnPlane: function(e) {
    return Ys.copy(this).projectOnVector(e), this.sub(Ys);
  },
  reflect: function(e) {
    return this.sub(Ys.copy(e).multiplyScalar(2 * this.dot(e)));
  },
  angleTo: function(e) {
    var t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0) return Math.PI / 2;
    var n = this.dot(e) / t;
    return Math.acos(Ae.clamp(n, -1, 1));
  },
  distanceTo: function(e) {
    return Math.sqrt(this.distanceToSquared(e));
  },
  distanceToSquared: function(e) {
    var t = this.x - e.x, n = this.y - e.y, r = this.z - e.z;
    return t * t + n * n + r * r;
  },
  manhattanDistanceTo: function(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z);
  },
  setFromSpherical: function(e) {
    return this.setFromSphericalCoords(e.radius, e.phi, e.theta);
  },
  setFromSphericalCoords: function(e, t, n) {
    var r = Math.sin(t) * e;
    return this.x = r * Math.sin(n), this.y = Math.cos(t) * e, this.z = r * Math.cos(n), this;
  },
  setFromCylindrical: function(e) {
    return this.setFromCylindricalCoords(e.radius, e.theta, e.y);
  },
  setFromCylindricalCoords: function(e, t, n) {
    return this.x = e * Math.sin(t), this.y = n, this.z = e * Math.cos(t), this;
  },
  setFromMatrixPosition: function(e) {
    var t = e.elements;
    return this.x = t[12], this.y = t[13], this.z = t[14], this;
  },
  setFromMatrixScale: function(e) {
    var t = this.setFromMatrixColumn(e, 0).length(), n = this.setFromMatrixColumn(e, 1).length(), r = this.setFromMatrixColumn(e, 2).length();
    return this.x = t, this.y = n, this.z = r, this;
  },
  setFromMatrixColumn: function(e, t) {
    return this.fromArray(e.elements, t * 4);
  },
  setFromMatrix3Column: function(e, t) {
    return this.fromArray(e.elements, t * 3);
  },
  equals: function(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z;
  },
  fromArray: function(e, t) {
    return t === void 0 && (t = 0), this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this;
  },
  toArray: function(e, t) {
    return e === void 0 && (e = []), t === void 0 && (t = 0), e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e;
  },
  fromBufferAttribute: function(e, t, n) {
    return n !== void 0 && console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."), this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this;
  }
});
var mr = new b(), Wt = new Ce(), Jf = new b(0, 0, 0), $f = new b(1, 1, 1), Sn = new b(), ga = new b(), Ct = new b();
function Ce() {
  this.elements = [
    1,
    0,
    0,
    0,
    0,
    1,
    0,
    0,
    0,
    0,
    1,
    0,
    0,
    0,
    0,
    1
  ], arguments.length > 0 && console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.");
}
Object.assign(Ce.prototype, {
  isMatrix4: !0,
  set: function(e, t, n, r, i, a, s, o, l, c, u, h, f, d, p, v) {
    var m = this.elements;
    return m[0] = e, m[4] = t, m[8] = n, m[12] = r, m[1] = i, m[5] = a, m[9] = s, m[13] = o, m[2] = l, m[6] = c, m[10] = u, m[14] = h, m[3] = f, m[7] = d, m[11] = p, m[15] = v, this;
  },
  identity: function() {
    return this.set(
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  },
  clone: function() {
    return new Ce().fromArray(this.elements);
  },
  copy: function(e) {
    var t = this.elements, n = e.elements;
    return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], t[9] = n[9], t[10] = n[10], t[11] = n[11], t[12] = n[12], t[13] = n[13], t[14] = n[14], t[15] = n[15], this;
  },
  copyPosition: function(e) {
    var t = this.elements, n = e.elements;
    return t[12] = n[12], t[13] = n[13], t[14] = n[14], this;
  },
  extractBasis: function(e, t, n) {
    return e.setFromMatrixColumn(this, 0), t.setFromMatrixColumn(this, 1), n.setFromMatrixColumn(this, 2), this;
  },
  makeBasis: function(e, t, n) {
    return this.set(
      e.x,
      t.x,
      n.x,
      0,
      e.y,
      t.y,
      n.y,
      0,
      e.z,
      t.z,
      n.z,
      0,
      0,
      0,
      0,
      1
    ), this;
  },
  extractRotation: function(e) {
    var t = this.elements, n = e.elements, r = 1 / mr.setFromMatrixColumn(e, 0).length(), i = 1 / mr.setFromMatrixColumn(e, 1).length(), a = 1 / mr.setFromMatrixColumn(e, 2).length();
    return t[0] = n[0] * r, t[1] = n[1] * r, t[2] = n[2] * r, t[3] = 0, t[4] = n[4] * i, t[5] = n[5] * i, t[6] = n[6] * i, t[7] = 0, t[8] = n[8] * a, t[9] = n[9] * a, t[10] = n[10] * a, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
  },
  makeRotationFromEuler: function(e) {
    e && e.isEuler || console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");
    var t = this.elements, n = e.x, r = e.y, i = e.z, a = Math.cos(n), s = Math.sin(n), o = Math.cos(r), l = Math.sin(r), c = Math.cos(i), u = Math.sin(i);
    if (e.order === "XYZ") {
      var h = a * c, f = a * u, d = s * c, p = s * u;
      t[0] = o * c, t[4] = -o * u, t[8] = l, t[1] = f + d * l, t[5] = h - p * l, t[9] = -s * o, t[2] = p - h * l, t[6] = d + f * l, t[10] = a * o;
    } else if (e.order === "YXZ") {
      var v = o * c, m = o * u, y = l * c, x = l * u;
      t[0] = v + x * s, t[4] = y * s - m, t[8] = a * l, t[1] = a * u, t[5] = a * c, t[9] = -s, t[2] = m * s - y, t[6] = x + v * s, t[10] = a * o;
    } else if (e.order === "ZXY") {
      var v = o * c, m = o * u, y = l * c, x = l * u;
      t[0] = v - x * s, t[4] = -a * u, t[8] = y + m * s, t[1] = m + y * s, t[5] = a * c, t[9] = x - v * s, t[2] = -a * l, t[6] = s, t[10] = a * o;
    } else if (e.order === "ZYX") {
      var h = a * c, f = a * u, d = s * c, p = s * u;
      t[0] = o * c, t[4] = d * l - f, t[8] = h * l + p, t[1] = o * u, t[5] = p * l + h, t[9] = f * l - d, t[2] = -l, t[6] = s * o, t[10] = a * o;
    } else if (e.order === "YZX") {
      var M = a * o, E = a * l, w = s * o, A = s * l;
      t[0] = o * c, t[4] = A - M * u, t[8] = w * u + E, t[1] = u, t[5] = a * c, t[9] = -s * c, t[2] = -l * c, t[6] = E * u + w, t[10] = M - A * u;
    } else if (e.order === "XZY") {
      var M = a * o, E = a * l, w = s * o, A = s * l;
      t[0] = o * c, t[4] = -u, t[8] = l * c, t[1] = M * u + A, t[5] = a * c, t[9] = E * u - w, t[2] = w * u - E, t[6] = s * c, t[10] = A * u + M;
    }
    return t[3] = 0, t[7] = 0, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
  },
  makeRotationFromQuaternion: function(e) {
    return this.compose(Jf, e, $f);
  },
  lookAt: function(e, t, n) {
    var r = this.elements;
    return Ct.subVectors(e, t), Ct.lengthSq() === 0 && (Ct.z = 1), Ct.normalize(), Sn.crossVectors(n, Ct), Sn.lengthSq() === 0 && (Math.abs(n.z) === 1 ? Ct.x += 1e-4 : Ct.z += 1e-4, Ct.normalize(), Sn.crossVectors(n, Ct)), Sn.normalize(), ga.crossVectors(Ct, Sn), r[0] = Sn.x, r[4] = ga.x, r[8] = Ct.x, r[1] = Sn.y, r[5] = ga.y, r[9] = Ct.y, r[2] = Sn.z, r[6] = ga.z, r[10] = Ct.z, this;
  },
  multiply: function(e, t) {
    return t !== void 0 ? (console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."), this.multiplyMatrices(e, t)) : this.multiplyMatrices(this, e);
  },
  premultiply: function(e) {
    return this.multiplyMatrices(e, this);
  },
  multiplyMatrices: function(e, t) {
    var n = e.elements, r = t.elements, i = this.elements, a = n[0], s = n[4], o = n[8], l = n[12], c = n[1], u = n[5], h = n[9], f = n[13], d = n[2], p = n[6], v = n[10], m = n[14], y = n[3], x = n[7], M = n[11], E = n[15], w = r[0], A = r[4], C = r[8], T = r[12], D = r[1], I = r[5], B = r[9], O = r[13], F = r[2], N = r[6], z = r[10], H = r[14], te = r[3], $ = r[7], X = r[11], Y = r[15];
    return i[0] = a * w + s * D + o * F + l * te, i[4] = a * A + s * I + o * N + l * $, i[8] = a * C + s * B + o * z + l * X, i[12] = a * T + s * O + o * H + l * Y, i[1] = c * w + u * D + h * F + f * te, i[5] = c * A + u * I + h * N + f * $, i[9] = c * C + u * B + h * z + f * X, i[13] = c * T + u * O + h * H + f * Y, i[2] = d * w + p * D + v * F + m * te, i[6] = d * A + p * I + v * N + m * $, i[10] = d * C + p * B + v * z + m * X, i[14] = d * T + p * O + v * H + m * Y, i[3] = y * w + x * D + M * F + E * te, i[7] = y * A + x * I + M * N + E * $, i[11] = y * C + x * B + M * z + E * X, i[15] = y * T + x * O + M * H + E * Y, this;
  },
  multiplyScalar: function(e) {
    var t = this.elements;
    return t[0] *= e, t[4] *= e, t[8] *= e, t[12] *= e, t[1] *= e, t[5] *= e, t[9] *= e, t[13] *= e, t[2] *= e, t[6] *= e, t[10] *= e, t[14] *= e, t[3] *= e, t[7] *= e, t[11] *= e, t[15] *= e, this;
  },
  determinant: function() {
    var e = this.elements, t = e[0], n = e[4], r = e[8], i = e[12], a = e[1], s = e[5], o = e[9], l = e[13], c = e[2], u = e[6], h = e[10], f = e[14], d = e[3], p = e[7], v = e[11], m = e[15];
    return d * (+i * o * u - r * l * u - i * s * h + n * l * h + r * s * f - n * o * f) + p * (+t * o * f - t * l * h + i * a * h - r * a * f + r * l * c - i * o * c) + v * (+t * l * u - t * s * f - i * a * u + n * a * f + i * s * c - n * l * c) + m * (-r * s * c - t * o * u + t * s * h + r * a * u - n * a * h + n * o * c);
  },
  transpose: function() {
    var e = this.elements, t;
    return t = e[1], e[1] = e[4], e[4] = t, t = e[2], e[2] = e[8], e[8] = t, t = e[6], e[6] = e[9], e[9] = t, t = e[3], e[3] = e[12], e[12] = t, t = e[7], e[7] = e[13], e[13] = t, t = e[11], e[11] = e[14], e[14] = t, this;
  },
  setPosition: function(e, t, n) {
    var r = this.elements;
    return e.isVector3 ? (r[12] = e.x, r[13] = e.y, r[14] = e.z) : (r[12] = e, r[13] = t, r[14] = n), this;
  },
  getInverse: function(e, t) {
    var n = this.elements, r = e.elements, i = r[0], a = r[1], s = r[2], o = r[3], l = r[4], c = r[5], u = r[6], h = r[7], f = r[8], d = r[9], p = r[10], v = r[11], m = r[12], y = r[13], x = r[14], M = r[15], E = d * x * h - y * p * h + y * u * v - c * x * v - d * u * M + c * p * M, w = m * p * h - f * x * h - m * u * v + l * x * v + f * u * M - l * p * M, A = f * y * h - m * d * h + m * c * v - l * y * v - f * c * M + l * d * M, C = m * d * u - f * y * u - m * c * p + l * y * p + f * c * x - l * d * x, T = i * E + a * w + s * A + o * C;
    if (T === 0) {
      var D = "THREE.Matrix4: .getInverse() can't invert matrix, determinant is 0";
      if (t === !0)
        throw new Error(D);
      return console.warn(D), this.identity();
    }
    var I = 1 / T;
    return n[0] = E * I, n[1] = (y * p * o - d * x * o - y * s * v + a * x * v + d * s * M - a * p * M) * I, n[2] = (c * x * o - y * u * o + y * s * h - a * x * h - c * s * M + a * u * M) * I, n[3] = (d * u * o - c * p * o - d * s * h + a * p * h + c * s * v - a * u * v) * I, n[4] = w * I, n[5] = (f * x * o - m * p * o + m * s * v - i * x * v - f * s * M + i * p * M) * I, n[6] = (m * u * o - l * x * o - m * s * h + i * x * h + l * s * M - i * u * M) * I, n[7] = (l * p * o - f * u * o + f * s * h - i * p * h - l * s * v + i * u * v) * I, n[8] = A * I, n[9] = (m * d * o - f * y * o - m * a * v + i * y * v + f * a * M - i * d * M) * I, n[10] = (l * y * o - m * c * o + m * a * h - i * y * h - l * a * M + i * c * M) * I, n[11] = (f * c * o - l * d * o - f * a * h + i * d * h + l * a * v - i * c * v) * I, n[12] = C * I, n[13] = (f * y * s - m * d * s + m * a * p - i * y * p - f * a * x + i * d * x) * I, n[14] = (m * c * s - l * y * s - m * a * u + i * y * u + l * a * x - i * c * x) * I, n[15] = (l * d * s - f * c * s + f * a * u - i * d * u - l * a * p + i * c * p) * I, this;
  },
  scale: function(e) {
    var t = this.elements, n = e.x, r = e.y, i = e.z;
    return t[0] *= n, t[4] *= r, t[8] *= i, t[1] *= n, t[5] *= r, t[9] *= i, t[2] *= n, t[6] *= r, t[10] *= i, t[3] *= n, t[7] *= r, t[11] *= i, this;
  },
  getMaxScaleOnAxis: function() {
    var e = this.elements, t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2], n = e[4] * e[4] + e[5] * e[5] + e[6] * e[6], r = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
    return Math.sqrt(Math.max(t, n, r));
  },
  makeTranslation: function(e, t, n) {
    return this.set(
      1,
      0,
      0,
      e,
      0,
      1,
      0,
      t,
      0,
      0,
      1,
      n,
      0,
      0,
      0,
      1
    ), this;
  },
  makeRotationX: function(e) {
    var t = Math.cos(e), n = Math.sin(e);
    return this.set(
      1,
      0,
      0,
      0,
      0,
      t,
      -n,
      0,
      0,
      n,
      t,
      0,
      0,
      0,
      0,
      1
    ), this;
  },
  makeRotationY: function(e) {
    var t = Math.cos(e), n = Math.sin(e);
    return this.set(
      t,
      0,
      n,
      0,
      0,
      1,
      0,
      0,
      -n,
      0,
      t,
      0,
      0,
      0,
      0,
      1
    ), this;
  },
  makeRotationZ: function(e) {
    var t = Math.cos(e), n = Math.sin(e);
    return this.set(
      t,
      -n,
      0,
      0,
      n,
      t,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  },
  makeRotationAxis: function(e, t) {
    var n = Math.cos(t), r = Math.sin(t), i = 1 - n, a = e.x, s = e.y, o = e.z, l = i * a, c = i * s;
    return this.set(
      l * a + n,
      l * s - r * o,
      l * o + r * s,
      0,
      l * s + r * o,
      c * s + n,
      c * o - r * a,
      0,
      l * o - r * s,
      c * o + r * a,
      i * o * o + n,
      0,
      0,
      0,
      0,
      1
    ), this;
  },
  makeScale: function(e, t, n) {
    return this.set(
      e,
      0,
      0,
      0,
      0,
      t,
      0,
      0,
      0,
      0,
      n,
      0,
      0,
      0,
      0,
      1
    ), this;
  },
  makeShear: function(e, t, n) {
    return this.set(
      1,
      t,
      n,
      0,
      e,
      1,
      n,
      0,
      e,
      t,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  },
  compose: function(e, t, n) {
    var r = this.elements, i = t._x, a = t._y, s = t._z, o = t._w, l = i + i, c = a + a, u = s + s, h = i * l, f = i * c, d = i * u, p = a * c, v = a * u, m = s * u, y = o * l, x = o * c, M = o * u, E = n.x, w = n.y, A = n.z;
    return r[0] = (1 - (p + m)) * E, r[1] = (f + M) * E, r[2] = (d - x) * E, r[3] = 0, r[4] = (f - M) * w, r[5] = (1 - (h + m)) * w, r[6] = (v + y) * w, r[7] = 0, r[8] = (d + x) * A, r[9] = (v - y) * A, r[10] = (1 - (h + p)) * A, r[11] = 0, r[12] = e.x, r[13] = e.y, r[14] = e.z, r[15] = 1, this;
  },
  decompose: function(e, t, n) {
    var r = this.elements, i = mr.set(r[0], r[1], r[2]).length(), a = mr.set(r[4], r[5], r[6]).length(), s = mr.set(r[8], r[9], r[10]).length(), o = this.determinant();
    o < 0 && (i = -i), e.x = r[12], e.y = r[13], e.z = r[14], Wt.copy(this);
    var l = 1 / i, c = 1 / a, u = 1 / s;
    return Wt.elements[0] *= l, Wt.elements[1] *= l, Wt.elements[2] *= l, Wt.elements[4] *= c, Wt.elements[5] *= c, Wt.elements[6] *= c, Wt.elements[8] *= u, Wt.elements[9] *= u, Wt.elements[10] *= u, t.setFromRotationMatrix(Wt), n.x = i, n.y = a, n.z = s, this;
  },
  makePerspective: function(e, t, n, r, i, a) {
    a === void 0 && console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");
    var s = this.elements, o = 2 * i / (t - e), l = 2 * i / (n - r), c = (t + e) / (t - e), u = (n + r) / (n - r), h = -(a + i) / (a - i), f = -2 * a * i / (a - i);
    return s[0] = o, s[4] = 0, s[8] = c, s[12] = 0, s[1] = 0, s[5] = l, s[9] = u, s[13] = 0, s[2] = 0, s[6] = 0, s[10] = h, s[14] = f, s[3] = 0, s[7] = 0, s[11] = -1, s[15] = 0, this;
  },
  makeOrthographic: function(e, t, n, r, i, a) {
    var s = this.elements, o = 1 / (t - e), l = 1 / (n - r), c = 1 / (a - i), u = (t + e) * o, h = (n + r) * l, f = (a + i) * c;
    return s[0] = 2 * o, s[4] = 0, s[8] = 0, s[12] = -u, s[1] = 0, s[5] = 2 * l, s[9] = 0, s[13] = -h, s[2] = 0, s[6] = 0, s[10] = -2 * c, s[14] = -f, s[3] = 0, s[7] = 0, s[11] = 0, s[15] = 1, this;
  },
  equals: function(e) {
    for (var t = this.elements, n = e.elements, r = 0; r < 16; r++)
      if (t[r] !== n[r]) return !1;
    return !0;
  },
  fromArray: function(e, t) {
    t === void 0 && (t = 0);
    for (var n = 0; n < 16; n++)
      this.elements[n] = e[n + t];
    return this;
  },
  toArray: function(e, t) {
    e === void 0 && (e = []), t === void 0 && (t = 0);
    var n = this.elements;
    return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e[t + 9] = n[9], e[t + 10] = n[10], e[t + 11] = n[11], e[t + 12] = n[12], e[t + 13] = n[13], e[t + 14] = n[14], e[t + 15] = n[15], e;
  }
});
var nc = new Ce(), rc = new Tt();
function ci(e, t, n, r) {
  this._x = e || 0, this._y = t || 0, this._z = n || 0, this._order = r || ci.DefaultOrder;
}
ci.RotationOrders = ["XYZ", "YZX", "ZXY", "XZY", "YXZ", "ZYX"];
ci.DefaultOrder = "XYZ";
Object.defineProperties(ci.prototype, {
  x: {
    get: function() {
      return this._x;
    },
    set: function(e) {
      this._x = e, this._onChangeCallback();
    }
  },
  y: {
    get: function() {
      return this._y;
    },
    set: function(e) {
      this._y = e, this._onChangeCallback();
    }
  },
  z: {
    get: function() {
      return this._z;
    },
    set: function(e) {
      this._z = e, this._onChangeCallback();
    }
  },
  order: {
    get: function() {
      return this._order;
    },
    set: function(e) {
      this._order = e, this._onChangeCallback();
    }
  }
});
Object.assign(ci.prototype, {
  isEuler: !0,
  set: function(e, t, n, r) {
    return this._x = e, this._y = t, this._z = n, this._order = r || this._order, this._onChangeCallback(), this;
  },
  clone: function() {
    return new this.constructor(this._x, this._y, this._z, this._order);
  },
  copy: function(e) {
    return this._x = e._x, this._y = e._y, this._z = e._z, this._order = e._order, this._onChangeCallback(), this;
  },
  setFromRotationMatrix: function(e, t, n) {
    var r = Ae.clamp, i = e.elements, a = i[0], s = i[4], o = i[8], l = i[1], c = i[5], u = i[9], h = i[2], f = i[6], d = i[10];
    return t = t || this._order, t === "XYZ" ? (this._y = Math.asin(r(o, -1, 1)), Math.abs(o) < 0.9999999 ? (this._x = Math.atan2(-u, d), this._z = Math.atan2(-s, a)) : (this._x = Math.atan2(f, c), this._z = 0)) : t === "YXZ" ? (this._x = Math.asin(-r(u, -1, 1)), Math.abs(u) < 0.9999999 ? (this._y = Math.atan2(o, d), this._z = Math.atan2(l, c)) : (this._y = Math.atan2(-h, a), this._z = 0)) : t === "ZXY" ? (this._x = Math.asin(r(f, -1, 1)), Math.abs(f) < 0.9999999 ? (this._y = Math.atan2(-h, d), this._z = Math.atan2(-s, c)) : (this._y = 0, this._z = Math.atan2(l, a))) : t === "ZYX" ? (this._y = Math.asin(-r(h, -1, 1)), Math.abs(h) < 0.9999999 ? (this._x = Math.atan2(f, d), this._z = Math.atan2(l, a)) : (this._x = 0, this._z = Math.atan2(-s, c))) : t === "YZX" ? (this._z = Math.asin(r(l, -1, 1)), Math.abs(l) < 0.9999999 ? (this._x = Math.atan2(-u, c), this._y = Math.atan2(-h, a)) : (this._x = 0, this._y = Math.atan2(o, d))) : t === "XZY" ? (this._z = Math.asin(-r(s, -1, 1)), Math.abs(s) < 0.9999999 ? (this._x = Math.atan2(f, c), this._y = Math.atan2(o, a)) : (this._x = Math.atan2(-u, d), this._y = 0)) : console.warn("THREE.Euler: .setFromRotationMatrix() given unsupported order: " + t), this._order = t, n !== !1 && this._onChangeCallback(), this;
  },
  setFromQuaternion: function(e, t, n) {
    return nc.makeRotationFromQuaternion(e), this.setFromRotationMatrix(nc, t, n);
  },
  setFromVector3: function(e, t) {
    return this.set(e.x, e.y, e.z, t || this._order);
  },
  reorder: function(e) {
    return rc.setFromEuler(this), this.setFromQuaternion(rc, e);
  },
  equals: function(e) {
    return e._x === this._x && e._y === this._y && e._z === this._z && e._order === this._order;
  },
  fromArray: function(e) {
    return this._x = e[0], this._y = e[1], this._z = e[2], e[3] !== void 0 && (this._order = e[3]), this._onChangeCallback(), this;
  },
  toArray: function(e, t) {
    return e === void 0 && (e = []), t === void 0 && (t = 0), e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._order, e;
  },
  toVector3: function(e) {
    return e ? e.set(this._x, this._y, this._z) : new b(this._x, this._y, this._z);
  },
  _onChange: function(e) {
    return this._onChangeCallback = e, this;
  },
  _onChangeCallback: function() {
  }
});
function Iu() {
  this.mask = 1;
}
Object.assign(Iu.prototype, {
  set: function(e) {
    this.mask = 1 << e | 0;
  },
  enable: function(e) {
    this.mask |= 1 << e | 0;
  },
  enableAll: function() {
    this.mask = -1;
  },
  toggle: function(e) {
    this.mask ^= 1 << e | 0;
  },
  disable: function(e) {
    this.mask &= ~(1 << e | 0);
  },
  disableAll: function() {
    this.mask = 0;
  },
  test: function(e) {
    return (this.mask & e.mask) !== 0;
  }
});
var Qf = 0, ic = new b(), gr = new Tt(), fn = new Ce(), ya = new b(), di = new b(), Kf = new b(), ed = new Tt(), ac = new b(1, 0, 0), sc = new b(0, 1, 0), oc = new b(0, 0, 1), td = { type: "added" }, nd = { type: "removed" };
function K() {
  Object.defineProperty(this, "id", { value: Qf++ }), this.uuid = Ae.generateUUID(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = K.DefaultUp.clone();
  var e = new b(), t = new ci(), n = new Tt(), r = new b(1, 1, 1);
  function i() {
    n.setFromEuler(t, !1);
  }
  function a() {
    t.setFromQuaternion(n, void 0, !1);
  }
  t._onChange(i), n._onChange(a), Object.defineProperties(this, {
    position: {
      configurable: !0,
      enumerable: !0,
      value: e
    },
    rotation: {
      configurable: !0,
      enumerable: !0,
      value: t
    },
    quaternion: {
      configurable: !0,
      enumerable: !0,
      value: n
    },
    scale: {
      configurable: !0,
      enumerable: !0,
      value: r
    },
    modelViewMatrix: {
      value: new Ce()
    },
    normalMatrix: {
      value: new gt()
    }
  }), this.matrix = new Ce(), this.matrixWorld = new Ce(), this.matrixAutoUpdate = K.DefaultMatrixAutoUpdate, this.matrixWorldNeedsUpdate = !1, this.layers = new Iu(), this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.userData = {};
}
K.DefaultUp = new b(0, 1, 0);
K.DefaultMatrixAutoUpdate = !0;
K.prototype = Object.assign(Object.create(En.prototype), {
  constructor: K,
  isObject3D: !0,
  onBeforeRender: function() {
  },
  onAfterRender: function() {
  },
  applyMatrix4: function(e) {
    this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(e), this.matrix.decompose(this.position, this.quaternion, this.scale);
  },
  applyQuaternion: function(e) {
    return this.quaternion.premultiply(e), this;
  },
  setRotationFromAxisAngle: function(e, t) {
    this.quaternion.setFromAxisAngle(e, t);
  },
  setRotationFromEuler: function(e) {
    this.quaternion.setFromEuler(e, !0);
  },
  setRotationFromMatrix: function(e) {
    this.quaternion.setFromRotationMatrix(e);
  },
  setRotationFromQuaternion: function(e) {
    this.quaternion.copy(e);
  },
  rotateOnAxis: function(e, t) {
    return gr.setFromAxisAngle(e, t), this.quaternion.multiply(gr), this;
  },
  rotateOnWorldAxis: function(e, t) {
    return gr.setFromAxisAngle(e, t), this.quaternion.premultiply(gr), this;
  },
  rotateX: function(e) {
    return this.rotateOnAxis(ac, e);
  },
  rotateY: function(e) {
    return this.rotateOnAxis(sc, e);
  },
  rotateZ: function(e) {
    return this.rotateOnAxis(oc, e);
  },
  translateOnAxis: function(e, t) {
    return ic.copy(e).applyQuaternion(this.quaternion), this.position.add(ic.multiplyScalar(t)), this;
  },
  translateX: function(e) {
    return this.translateOnAxis(ac, e);
  },
  translateY: function(e) {
    return this.translateOnAxis(sc, e);
  },
  translateZ: function(e) {
    return this.translateOnAxis(oc, e);
  },
  localToWorld: function(e) {
    return e.applyMatrix4(this.matrixWorld);
  },
  worldToLocal: function(e) {
    return e.applyMatrix4(fn.getInverse(this.matrixWorld));
  },
  lookAt: function(e, t, n) {
    e.isVector3 ? ya.copy(e) : ya.set(e, t, n);
    var r = this.parent;
    this.updateWorldMatrix(!0, !1), di.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? fn.lookAt(di, ya, this.up) : fn.lookAt(ya, di, this.up), this.quaternion.setFromRotationMatrix(fn), r && (fn.extractRotation(r.matrixWorld), gr.setFromRotationMatrix(fn), this.quaternion.premultiply(gr.inverse()));
  },
  add: function(e) {
    if (arguments.length > 1) {
      for (var t = 0; t < arguments.length; t++)
        this.add(arguments[t]);
      return this;
    }
    return e === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", e), this) : (e && e.isObject3D ? (e.parent !== null && e.parent.remove(e), e.parent = this, this.children.push(e), e.dispatchEvent(td)) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", e), this);
  },
  remove: function(e) {
    if (arguments.length > 1) {
      for (var t = 0; t < arguments.length; t++)
        this.remove(arguments[t]);
      return this;
    }
    var n = this.children.indexOf(e);
    return n !== -1 && (e.parent = null, this.children.splice(n, 1), e.dispatchEvent(nd)), this;
  },
  attach: function(e) {
    return this.updateWorldMatrix(!0, !1), fn.getInverse(this.matrixWorld), e.parent !== null && (e.parent.updateWorldMatrix(!0, !1), fn.multiply(e.parent.matrixWorld)), e.applyMatrix4(fn), e.updateWorldMatrix(!1, !1), this.add(e), this;
  },
  getObjectById: function(e) {
    return this.getObjectByProperty("id", e);
  },
  getObjectByName: function(e) {
    return this.getObjectByProperty("name", e);
  },
  getObjectByProperty: function(e, t) {
    if (this[e] === t) return this;
    for (var n = 0, r = this.children.length; n < r; n++) {
      var i = this.children[n], a = i.getObjectByProperty(e, t);
      if (a !== void 0)
        return a;
    }
  },
  getWorldPosition: function(e) {
    return e === void 0 && (console.warn("THREE.Object3D: .getWorldPosition() target is now required"), e = new b()), this.updateMatrixWorld(!0), e.setFromMatrixPosition(this.matrixWorld);
  },
  getWorldQuaternion: function(e) {
    return e === void 0 && (console.warn("THREE.Object3D: .getWorldQuaternion() target is now required"), e = new Tt()), this.updateMatrixWorld(!0), this.matrixWorld.decompose(di, e, Kf), e;
  },
  getWorldScale: function(e) {
    return e === void 0 && (console.warn("THREE.Object3D: .getWorldScale() target is now required"), e = new b()), this.updateMatrixWorld(!0), this.matrixWorld.decompose(di, ed, e), e;
  },
  getWorldDirection: function(e) {
    e === void 0 && (console.warn("THREE.Object3D: .getWorldDirection() target is now required"), e = new b()), this.updateMatrixWorld(!0);
    var t = this.matrixWorld.elements;
    return e.set(t[8], t[9], t[10]).normalize();
  },
  raycast: function() {
  },
  traverse: function(e) {
    e(this);
    for (var t = this.children, n = 0, r = t.length; n < r; n++)
      t[n].traverse(e);
  },
  traverseVisible: function(e) {
    if (this.visible !== !1) {
      e(this);
      for (var t = this.children, n = 0, r = t.length; n < r; n++)
        t[n].traverseVisible(e);
    }
  },
  traverseAncestors: function(e) {
    var t = this.parent;
    t !== null && (e(t), t.traverseAncestors(e));
  },
  updateMatrix: function() {
    this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = !0;
  },
  updateMatrixWorld: function(e) {
    this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || e) && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), this.matrixWorldNeedsUpdate = !1, e = !0);
    for (var t = this.children, n = 0, r = t.length; n < r; n++)
      t[n].updateMatrixWorld(e);
  },
  updateWorldMatrix: function(e, t) {
    var n = this.parent;
    if (e === !0 && n !== null && n.updateWorldMatrix(!0, !1), this.matrixAutoUpdate && this.updateMatrix(), this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), t === !0)
      for (var r = this.children, i = 0, a = r.length; i < a; i++)
        r[i].updateWorldMatrix(!1, !0);
  },
  toJSON: function(e) {
    var t = e === void 0 || typeof e == "string", n = {};
    t && (e = {
      geometries: {},
      materials: {},
      textures: {},
      images: {},
      shapes: {}
    }, n.metadata = {
      version: 4.5,
      type: "Object",
      generator: "Object3D.toJSON"
    });
    var r = {};
    r.uuid = this.uuid, r.type = this.type, this.name !== "" && (r.name = this.name), this.castShadow === !0 && (r.castShadow = !0), this.receiveShadow === !0 && (r.receiveShadow = !0), this.visible === !1 && (r.visible = !1), this.frustumCulled === !1 && (r.frustumCulled = !1), this.renderOrder !== 0 && (r.renderOrder = this.renderOrder), JSON.stringify(this.userData) !== "{}" && (r.userData = this.userData), r.layers = this.layers.mask, r.matrix = this.matrix.toArray(), this.matrixAutoUpdate === !1 && (r.matrixAutoUpdate = !1), this.isInstancedMesh && (r.type = "InstancedMesh", r.count = this.count, r.instanceMatrix = this.instanceMatrix.toJSON());
    function i(m, y) {
      return m[y.uuid] === void 0 && (m[y.uuid] = y.toJSON(e)), y.uuid;
    }
    if (this.isMesh || this.isLine || this.isPoints) {
      r.geometry = i(e.geometries, this.geometry);
      var a = this.geometry.parameters;
      if (a !== void 0 && a.shapes !== void 0) {
        var s = a.shapes;
        if (Array.isArray(s))
          for (var o = 0, l = s.length; o < l; o++) {
            var c = s[o];
            i(e.shapes, c);
          }
        else
          i(e.shapes, s);
      }
    }
    if (this.material !== void 0)
      if (Array.isArray(this.material)) {
        for (var u = [], o = 0, l = this.material.length; o < l; o++)
          u.push(i(e.materials, this.material[o]));
        r.material = u;
      } else
        r.material = i(e.materials, this.material);
    if (this.children.length > 0) {
      r.children = [];
      for (var o = 0; o < this.children.length; o++)
        r.children.push(this.children[o].toJSON(e).object);
    }
    if (t) {
      var h = v(e.geometries), f = v(e.materials), d = v(e.textures), p = v(e.images), s = v(e.shapes);
      h.length > 0 && (n.geometries = h), f.length > 0 && (n.materials = f), d.length > 0 && (n.textures = d), p.length > 0 && (n.images = p), s.length > 0 && (n.shapes = s);
    }
    return n.object = r, n;
    function v(m) {
      var y = [];
      for (var x in m) {
        var M = m[x];
        delete M.metadata, y.push(M);
      }
      return y;
    }
  },
  clone: function(e) {
    return new this.constructor().copy(this, e);
  },
  copy: function(e, t) {
    if (t === void 0 && (t = !0), this.name = e.name, this.up.copy(e.up), this.position.copy(e.position), this.quaternion.copy(e.quaternion), this.scale.copy(e.scale), this.matrix.copy(e.matrix), this.matrixWorld.copy(e.matrixWorld), this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate, this.layers.mask = e.layers.mask, this.visible = e.visible, this.castShadow = e.castShadow, this.receiveShadow = e.receiveShadow, this.frustumCulled = e.frustumCulled, this.renderOrder = e.renderOrder, this.userData = JSON.parse(JSON.stringify(e.userData)), t === !0)
      for (var n = 0; n < e.children.length; n++) {
        var r = e.children[n];
        this.add(r.clone());
      }
    return this;
  }
});
function Bn() {
  K.call(this), this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.overrideMaterial = null, this.autoUpdate = !0, typeof __THREE_DEVTOOLS__ != "undefined" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
}
Bn.prototype = Object.assign(Object.create(K.prototype), {
  constructor: Bn,
  isScene: !0,
  copy: function(e, t) {
    return K.prototype.copy.call(this, e, t), e.background !== null && (this.background = e.background.clone()), e.environment !== null && (this.environment = e.environment.clone()), e.fog !== null && (this.fog = e.fog.clone()), e.overrideMaterial !== null && (this.overrideMaterial = e.overrideMaterial.clone()), this.autoUpdate = e.autoUpdate, this.matrixAutoUpdate = e.matrixAutoUpdate, this;
  },
  toJSON: function(e) {
    var t = K.prototype.toJSON.call(this, e);
    return this.background !== null && (t.object.background = this.background.toJSON(e)), this.environment !== null && (t.object.environment = this.environment.toJSON(e)), this.fog !== null && (t.object.fog = this.fog.toJSON()), t;
  },
  dispose: function() {
    this.dispatchEvent({ type: "dispose" });
  }
});
var dn = [
  new b(),
  new b(),
  new b(),
  new b(),
  new b(),
  new b(),
  new b(),
  new b()
], pi = new b(), xa = new hn(), yr = new b(), xr = new b(), _r = new b(), Tn = new b(), An = new b(), Wn = new b(), vi = new b(), _a = new b(), wa = new b(), jn = new b();
function hn(e, t) {
  this.min = e !== void 0 ? e : new b(1 / 0, 1 / 0, 1 / 0), this.max = t !== void 0 ? t : new b(-1 / 0, -1 / 0, -1 / 0);
}
Object.assign(hn.prototype, {
  isBox3: !0,
  set: function(e, t) {
    return this.min.copy(e), this.max.copy(t), this;
  },
  setFromArray: function(e) {
    for (var t = 1 / 0, n = 1 / 0, r = 1 / 0, i = -1 / 0, a = -1 / 0, s = -1 / 0, o = 0, l = e.length; o < l; o += 3) {
      var c = e[o], u = e[o + 1], h = e[o + 2];
      c < t && (t = c), u < n && (n = u), h < r && (r = h), c > i && (i = c), u > a && (a = u), h > s && (s = h);
    }
    return this.min.set(t, n, r), this.max.set(i, a, s), this;
  },
  setFromBufferAttribute: function(e) {
    for (var t = 1 / 0, n = 1 / 0, r = 1 / 0, i = -1 / 0, a = -1 / 0, s = -1 / 0, o = 0, l = e.count; o < l; o++) {
      var c = e.getX(o), u = e.getY(o), h = e.getZ(o);
      c < t && (t = c), u < n && (n = u), h < r && (r = h), c > i && (i = c), u > a && (a = u), h > s && (s = h);
    }
    return this.min.set(t, n, r), this.max.set(i, a, s), this;
  },
  setFromPoints: function(e) {
    this.makeEmpty();
    for (var t = 0, n = e.length; t < n; t++)
      this.expandByPoint(e[t]);
    return this;
  },
  setFromCenterAndSize: function(e, t) {
    var n = pi.copy(t).multiplyScalar(0.5);
    return this.min.copy(e).sub(n), this.max.copy(e).add(n), this;
  },
  setFromObject: function(e) {
    return this.makeEmpty(), this.expandByObject(e);
  },
  clone: function() {
    return new this.constructor().copy(this);
  },
  copy: function(e) {
    return this.min.copy(e.min), this.max.copy(e.max), this;
  },
  makeEmpty: function() {
    return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this;
  },
  isEmpty: function() {
    return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z;
  },
  getCenter: function(e) {
    return e === void 0 && (console.warn("THREE.Box3: .getCenter() target is now required"), e = new b()), this.isEmpty() ? e.set(0, 0, 0) : e.addVectors(this.min, this.max).multiplyScalar(0.5);
  },
  getSize: function(e) {
    return e === void 0 && (console.warn("THREE.Box3: .getSize() target is now required"), e = new b()), this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min);
  },
  expandByPoint: function(e) {
    return this.min.min(e), this.max.max(e), this;
  },
  expandByVector: function(e) {
    return this.min.sub(e), this.max.add(e), this;
  },
  expandByScalar: function(e) {
    return this.min.addScalar(-e), this.max.addScalar(e), this;
  },
  expandByObject: function(e) {
    e.updateWorldMatrix(!1, !1);
    var t = e.geometry;
    t !== void 0 && (t.boundingBox === null && t.computeBoundingBox(), xa.copy(t.boundingBox), xa.applyMatrix4(e.matrixWorld), this.expandByPoint(xa.min), this.expandByPoint(xa.max));
    for (var n = e.children, r = 0, i = n.length; r < i; r++)
      this.expandByObject(n[r]);
    return this;
  },
  containsPoint: function(e) {
    return !(e.x < this.min.x || e.x > this.max.x || e.y < this.min.y || e.y > this.max.y || e.z < this.min.z || e.z > this.max.z);
  },
  containsBox: function(e) {
    return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y && this.min.z <= e.min.z && e.max.z <= this.max.z;
  },
  getParameter: function(e, t) {
    return t === void 0 && (console.warn("THREE.Box3: .getParameter() target is now required"), t = new b()), t.set(
      (e.x - this.min.x) / (this.max.x - this.min.x),
      (e.y - this.min.y) / (this.max.y - this.min.y),
      (e.z - this.min.z) / (this.max.z - this.min.z)
    );
  },
  intersectsBox: function(e) {
    return !(e.max.x < this.min.x || e.min.x > this.max.x || e.max.y < this.min.y || e.min.y > this.max.y || e.max.z < this.min.z || e.min.z > this.max.z);
  },
  intersectsSphere: function(e) {
    return this.clampPoint(e.center, pi), pi.distanceToSquared(e.center) <= e.radius * e.radius;
  },
  intersectsPlane: function(e) {
    var t, n;
    return e.normal.x > 0 ? (t = e.normal.x * this.min.x, n = e.normal.x * this.max.x) : (t = e.normal.x * this.max.x, n = e.normal.x * this.min.x), e.normal.y > 0 ? (t += e.normal.y * this.min.y, n += e.normal.y * this.max.y) : (t += e.normal.y * this.max.y, n += e.normal.y * this.min.y), e.normal.z > 0 ? (t += e.normal.z * this.min.z, n += e.normal.z * this.max.z) : (t += e.normal.z * this.max.z, n += e.normal.z * this.min.z), t <= -e.constant && n >= -e.constant;
  },
  intersectsTriangle: function(e) {
    if (this.isEmpty())
      return !1;
    this.getCenter(vi), _a.subVectors(this.max, vi), yr.subVectors(e.a, vi), xr.subVectors(e.b, vi), _r.subVectors(e.c, vi), Tn.subVectors(xr, yr), An.subVectors(_r, xr), Wn.subVectors(yr, _r);
    var t = [
      0,
      -Tn.z,
      Tn.y,
      0,
      -An.z,
      An.y,
      0,
      -Wn.z,
      Wn.y,
      Tn.z,
      0,
      -Tn.x,
      An.z,
      0,
      -An.x,
      Wn.z,
      0,
      -Wn.x,
      -Tn.y,
      Tn.x,
      0,
      -An.y,
      An.x,
      0,
      -Wn.y,
      Wn.x,
      0
    ];
    return !Zs(t, yr, xr, _r, _a) || (t = [1, 0, 0, 0, 1, 0, 0, 0, 1], !Zs(t, yr, xr, _r, _a)) ? !1 : (wa.crossVectors(Tn, An), t = [wa.x, wa.y, wa.z], Zs(t, yr, xr, _r, _a));
  },
  clampPoint: function(e, t) {
    return t === void 0 && (console.warn("THREE.Box3: .clampPoint() target is now required"), t = new b()), t.copy(e).clamp(this.min, this.max);
  },
  distanceToPoint: function(e) {
    var t = pi.copy(e).clamp(this.min, this.max);
    return t.sub(e).length();
  },
  getBoundingSphere: function(e) {
    return e === void 0 && console.error("THREE.Box3: .getBoundingSphere() target is now required"), this.getCenter(e.center), e.radius = this.getSize(pi).length() * 0.5, e;
  },
  intersect: function(e) {
    return this.min.max(e.min), this.max.min(e.max), this.isEmpty() && this.makeEmpty(), this;
  },
  union: function(e) {
    return this.min.min(e.min), this.max.max(e.max), this;
  },
  applyMatrix4: function(e) {
    return this.isEmpty() ? this : (dn[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e), dn[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e), dn[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e), dn[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e), dn[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e), dn[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e), dn[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e), dn[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e), this.setFromPoints(dn), this);
  },
  translate: function(e) {
    return this.min.add(e), this.max.add(e), this;
  },
  equals: function(e) {
    return e.min.equals(this.min) && e.max.equals(this.max);
  }
});
function Zs(e, t, n, r, i) {
  var a, s;
  for (a = 0, s = e.length - 3; a <= s; a += 3) {
    jn.fromArray(e, a);
    var o = i.x * Math.abs(jn.x) + i.y * Math.abs(jn.y) + i.z * Math.abs(jn.z), l = t.dot(jn), c = n.dot(jn), u = r.dot(jn);
    if (Math.max(-Math.max(l, c, u), Math.min(l, c, u)) > o)
      return !1;
  }
  return !0;
}
var rd = new hn();
function kn(e, t) {
  this.center = e !== void 0 ? e : new b(), this.radius = t !== void 0 ? t : 0;
}
Object.assign(kn.prototype, {
  set: function(e, t) {
    return this.center.copy(e), this.radius = t, this;
  },
  setFromPoints: function(e, t) {
    var n = this.center;
    t !== void 0 ? n.copy(t) : rd.setFromPoints(e).getCenter(n);
    for (var r = 0, i = 0, a = e.length; i < a; i++)
      r = Math.max(r, n.distanceToSquared(e[i]));
    return this.radius = Math.sqrt(r), this;
  },
  clone: function() {
    return new this.constructor().copy(this);
  },
  copy: function(e) {
    return this.center.copy(e.center), this.radius = e.radius, this;
  },
  empty: function() {
    return this.radius <= 0;
  },
  containsPoint: function(e) {
    return e.distanceToSquared(this.center) <= this.radius * this.radius;
  },
  distanceToPoint: function(e) {
    return e.distanceTo(this.center) - this.radius;
  },
  intersectsSphere: function(e) {
    var t = this.radius + e.radius;
    return e.center.distanceToSquared(this.center) <= t * t;
  },
  intersectsBox: function(e) {
    return e.intersectsSphere(this);
  },
  intersectsPlane: function(e) {
    return Math.abs(e.distanceToPoint(this.center)) <= this.radius;
  },
  clampPoint: function(e, t) {
    var n = this.center.distanceToSquared(e);
    return t === void 0 && (console.warn("THREE.Sphere: .clampPoint() target is now required"), t = new b()), t.copy(e), n > this.radius * this.radius && (t.sub(this.center).normalize(), t.multiplyScalar(this.radius).add(this.center)), t;
  },
  getBoundingBox: function(e) {
    return e === void 0 && (console.warn("THREE.Sphere: .getBoundingBox() target is now required"), e = new hn()), e.set(this.center, this.center), e.expandByScalar(this.radius), e;
  },
  applyMatrix4: function(e) {
    return this.center.applyMatrix4(e), this.radius = this.radius * e.getMaxScaleOnAxis(), this;
  },
  translate: function(e) {
    return this.center.add(e), this;
  },
  equals: function(e) {
    return e.center.equals(this.center) && e.radius === this.radius;
  }
});
var pn = new b(), Js = new b(), Ma = new b(), Ln = new b(), $s = new b(), ba = new b(), Qs = new b();
function ui(e, t) {
  this.origin = e !== void 0 ? e : new b(), this.direction = t !== void 0 ? t : new b(0, 0, -1);
}
Object.assign(ui.prototype, {
  set: function(e, t) {
    return this.origin.copy(e), this.direction.copy(t), this;
  },
  clone: function() {
    return new this.constructor().copy(this);
  },
  copy: function(e) {
    return this.origin.copy(e.origin), this.direction.copy(e.direction), this;
  },
  at: function(e, t) {
    return t === void 0 && (console.warn("THREE.Ray: .at() target is now required"), t = new b()), t.copy(this.direction).multiplyScalar(e).add(this.origin);
  },
  lookAt: function(e) {
    return this.direction.copy(e).sub(this.origin).normalize(), this;
  },
  recast: function(e) {
    return this.origin.copy(this.at(e, pn)), this;
  },
  closestPointToPoint: function(e, t) {
    t === void 0 && (console.warn("THREE.Ray: .closestPointToPoint() target is now required"), t = new b()), t.subVectors(e, this.origin);
    var n = t.dot(this.direction);
    return n < 0 ? t.copy(this.origin) : t.copy(this.direction).multiplyScalar(n).add(this.origin);
  },
  distanceToPoint: function(e) {
    return Math.sqrt(this.distanceSqToPoint(e));
  },
  distanceSqToPoint: function(e) {
    var t = pn.subVectors(e, this.origin).dot(this.direction);
    return t < 0 ? this.origin.distanceToSquared(e) : (pn.copy(this.direction).multiplyScalar(t).add(this.origin), pn.distanceToSquared(e));
  },
  distanceSqToSegment: function(e, t, n, r) {
    Js.copy(e).add(t).multiplyScalar(0.5), Ma.copy(t).sub(e).normalize(), Ln.copy(this.origin).sub(Js);
    var i = e.distanceTo(t) * 0.5, a = -this.direction.dot(Ma), s = Ln.dot(this.direction), o = -Ln.dot(Ma), l = Ln.lengthSq(), c = Math.abs(1 - a * a), u, h, f, d;
    if (c > 0)
      if (u = a * o - s, h = a * s - o, d = i * c, u >= 0)
        if (h >= -d)
          if (h <= d) {
            var p = 1 / c;
            u *= p, h *= p, f = u * (u + a * h + 2 * s) + h * (a * u + h + 2 * o) + l;
          } else
            h = i, u = Math.max(0, -(a * h + s)), f = -u * u + h * (h + 2 * o) + l;
        else
          h = -i, u = Math.max(0, -(a * h + s)), f = -u * u + h * (h + 2 * o) + l;
      else
        h <= -d ? (u = Math.max(0, -(-a * i + s)), h = u > 0 ? -i : Math.min(Math.max(-i, -o), i), f = -u * u + h * (h + 2 * o) + l) : h <= d ? (u = 0, h = Math.min(Math.max(-i, -o), i), f = h * (h + 2 * o) + l) : (u = Math.max(0, -(a * i + s)), h = u > 0 ? i : Math.min(Math.max(-i, -o), i), f = -u * u + h * (h + 2 * o) + l);
    else
      h = a > 0 ? -i : i, u = Math.max(0, -(a * h + s)), f = -u * u + h * (h + 2 * o) + l;
    return n && n.copy(this.direction).multiplyScalar(u).add(this.origin), r && r.copy(Ma).multiplyScalar(h).add(Js), f;
  },
  intersectSphere: function(e, t) {
    pn.subVectors(e.center, this.origin);
    var n = pn.dot(this.direction), r = pn.dot(pn) - n * n, i = e.radius * e.radius;
    if (r > i) return null;
    var a = Math.sqrt(i - r), s = n - a, o = n + a;
    return s < 0 && o < 0 ? null : s < 0 ? this.at(o, t) : this.at(s, t);
  },
  intersectsSphere: function(e) {
    return this.distanceSqToPoint(e.center) <= e.radius * e.radius;
  },
  distanceToPlane: function(e) {
    var t = e.normal.dot(this.direction);
    if (t === 0)
      return e.distanceToPoint(this.origin) === 0 ? 0 : null;
    var n = -(this.origin.dot(e.normal) + e.constant) / t;
    return n >= 0 ? n : null;
  },
  intersectPlane: function(e, t) {
    var n = this.distanceToPlane(e);
    return n === null ? null : this.at(n, t);
  },
  intersectsPlane: function(e) {
    var t = e.distanceToPoint(this.origin);
    if (t === 0)
      return !0;
    var n = e.normal.dot(this.direction);
    return n * t < 0;
  },
  intersectBox: function(e, t) {
    var n, r, i, a, s, o, l = 1 / this.direction.x, c = 1 / this.direction.y, u = 1 / this.direction.z, h = this.origin;
    return l >= 0 ? (n = (e.min.x - h.x) * l, r = (e.max.x - h.x) * l) : (n = (e.max.x - h.x) * l, r = (e.min.x - h.x) * l), c >= 0 ? (i = (e.min.y - h.y) * c, a = (e.max.y - h.y) * c) : (i = (e.max.y - h.y) * c, a = (e.min.y - h.y) * c), n > a || i > r || ((i > n || n !== n) && (n = i), (a < r || r !== r) && (r = a), u >= 0 ? (s = (e.min.z - h.z) * u, o = (e.max.z - h.z) * u) : (s = (e.max.z - h.z) * u, o = (e.min.z - h.z) * u), n > o || s > r) || ((s > n || n !== n) && (n = s), (o < r || r !== r) && (r = o), r < 0) ? null : this.at(n >= 0 ? n : r, t);
  },
  intersectsBox: function(e) {
    return this.intersectBox(e, pn) !== null;
  },
  intersectTriangle: function(e, t, n, r, i) {
    $s.subVectors(t, e), ba.subVectors(n, e), Qs.crossVectors($s, ba);
    var a = this.direction.dot(Qs), s;
    if (a > 0) {
      if (r) return null;
      s = 1;
    } else if (a < 0)
      s = -1, a = -a;
    else
      return null;
    Ln.subVectors(this.origin, e);
    var o = s * this.direction.dot(ba.crossVectors(Ln, ba));
    if (o < 0)
      return null;
    var l = s * this.direction.dot($s.cross(Ln));
    if (l < 0 || o + l > a)
      return null;
    var c = -s * Ln.dot(Qs);
    return c < 0 ? null : this.at(c / a, i);
  },
  applyMatrix4: function(e) {
    return this.origin.applyMatrix4(e), this.direction.transformDirection(e), this;
  },
  equals: function(e) {
    return e.origin.equals(this.origin) && e.direction.equals(this.direction);
  }
});
var Ks = new b(), id = new b(), ad = new gt();
function Kt(e, t) {
  this.normal = e !== void 0 ? e : new b(1, 0, 0), this.constant = t !== void 0 ? t : 0;
}
Object.assign(Kt.prototype, {
  isPlane: !0,
  set: function(e, t) {
    return this.normal.copy(e), this.constant = t, this;
  },
  setComponents: function(e, t, n, r) {
    return this.normal.set(e, t, n), this.constant = r, this;
  },
  setFromNormalAndCoplanarPoint: function(e, t) {
    return this.normal.copy(e), this.constant = -t.dot(this.normal), this;
  },
  setFromCoplanarPoints: function(e, t, n) {
    var r = Ks.subVectors(n, t).cross(id.subVectors(e, t)).normalize();
    return this.setFromNormalAndCoplanarPoint(r, e), this;
  },
  clone: function() {
    return new this.constructor().copy(this);
  },
  copy: function(e) {
    return this.normal.copy(e.normal), this.constant = e.constant, this;
  },
  normalize: function() {
    var e = 1 / this.normal.length();
    return this.normal.multiplyScalar(e), this.constant *= e, this;
  },
  negate: function() {
    return this.constant *= -1, this.normal.negate(), this;
  },
  distanceToPoint: function(e) {
    return this.normal.dot(e) + this.constant;
  },
  distanceToSphere: function(e) {
    return this.distanceToPoint(e.center) - e.radius;
  },
  projectPoint: function(e, t) {
    return t === void 0 && (console.warn("THREE.Plane: .projectPoint() target is now required"), t = new b()), t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e);
  },
  intersectLine: function(e, t) {
    t === void 0 && (console.warn("THREE.Plane: .intersectLine() target is now required"), t = new b());
    var n = e.delta(Ks), r = this.normal.dot(n);
    if (r === 0)
      return this.distanceToPoint(e.start) === 0 ? t.copy(e.start) : void 0;
    var i = -(e.start.dot(this.normal) + this.constant) / r;
    if (!(i < 0 || i > 1))
      return t.copy(n).multiplyScalar(i).add(e.start);
  },
  intersectsLine: function(e) {
    var t = this.distanceToPoint(e.start), n = this.distanceToPoint(e.end);
    return t < 0 && n > 0 || n < 0 && t > 0;
  },
  intersectsBox: function(e) {
    return e.intersectsPlane(this);
  },
  intersectsSphere: function(e) {
    return e.intersectsPlane(this);
  },
  coplanarPoint: function(e) {
    return e === void 0 && (console.warn("THREE.Plane: .coplanarPoint() target is now required"), e = new b()), e.copy(this.normal).multiplyScalar(-this.constant);
  },
  applyMatrix4: function(e, t) {
    var n = t || ad.getNormalMatrix(e), r = this.coplanarPoint(Ks).applyMatrix4(e), i = this.normal.applyMatrix3(n).normalize();
    return this.constant = -r.dot(i), this;
  },
  translate: function(e) {
    return this.constant -= e.dot(this.normal), this;
  },
  equals: function(e) {
    return e.normal.equals(this.normal) && e.constant === this.constant;
  }
});
var Xt = new b(), mn = new b(), eo = new b(), vn = new b(), wr = new b(), Mr = new b(), lc = new b(), to = new b(), no = new b(), ro = new b();
function pt(e, t, n) {
  this.a = e !== void 0 ? e : new b(), this.b = t !== void 0 ? t : new b(), this.c = n !== void 0 ? n : new b();
}
Object.assign(pt, {
  getNormal: function(e, t, n, r) {
    r === void 0 && (console.warn("THREE.Triangle: .getNormal() target is now required"), r = new b()), r.subVectors(n, t), Xt.subVectors(e, t), r.cross(Xt);
    var i = r.lengthSq();
    return i > 0 ? r.multiplyScalar(1 / Math.sqrt(i)) : r.set(0, 0, 0);
  },
  // static/instance method to calculate barycentric coordinates
  // based on: http://www.blackpawn.com/texts/pointinpoly/default.html
  getBarycoord: function(e, t, n, r, i) {
    Xt.subVectors(r, t), mn.subVectors(n, t), eo.subVectors(e, t);
    var a = Xt.dot(Xt), s = Xt.dot(mn), o = Xt.dot(eo), l = mn.dot(mn), c = mn.dot(eo), u = a * l - s * s;
    if (i === void 0 && (console.warn("THREE.Triangle: .getBarycoord() target is now required"), i = new b()), u === 0)
      return i.set(-2, -1, -1);
    var h = 1 / u, f = (l * o - s * c) * h, d = (a * c - s * o) * h;
    return i.set(1 - f - d, d, f);
  },
  containsPoint: function(e, t, n, r) {
    return pt.getBarycoord(e, t, n, r, vn), vn.x >= 0 && vn.y >= 0 && vn.x + vn.y <= 1;
  },
  getUV: function(e, t, n, r, i, a, s, o) {
    return this.getBarycoord(e, t, n, r, vn), o.set(0, 0), o.addScaledVector(i, vn.x), o.addScaledVector(a, vn.y), o.addScaledVector(s, vn.z), o;
  },
  isFrontFacing: function(e, t, n, r) {
    return Xt.subVectors(n, t), mn.subVectors(e, t), Xt.cross(mn).dot(r) < 0;
  }
});
Object.assign(pt.prototype, {
  set: function(e, t, n) {
    return this.a.copy(e), this.b.copy(t), this.c.copy(n), this;
  },
  setFromPointsAndIndices: function(e, t, n, r) {
    return this.a.copy(e[t]), this.b.copy(e[n]), this.c.copy(e[r]), this;
  },
  clone: function() {
    return new this.constructor().copy(this);
  },
  copy: function(e) {
    return this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this;
  },
  getArea: function() {
    return Xt.subVectors(this.c, this.b), mn.subVectors(this.a, this.b), Xt.cross(mn).length() * 0.5;
  },
  getMidpoint: function(e) {
    return e === void 0 && (console.warn("THREE.Triangle: .getMidpoint() target is now required"), e = new b()), e.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
  },
  getNormal: function(e) {
    return pt.getNormal(this.a, this.b, this.c, e);
  },
  getPlane: function(e) {
    return e === void 0 && (console.warn("THREE.Triangle: .getPlane() target is now required"), e = new Kt()), e.setFromCoplanarPoints(this.a, this.b, this.c);
  },
  getBarycoord: function(e, t) {
    return pt.getBarycoord(e, this.a, this.b, this.c, t);
  },
  getUV: function(e, t, n, r, i) {
    return pt.getUV(e, this.a, this.b, this.c, t, n, r, i);
  },
  containsPoint: function(e) {
    return pt.containsPoint(e, this.a, this.b, this.c);
  },
  isFrontFacing: function(e) {
    return pt.isFrontFacing(this.a, this.b, this.c, e);
  },
  intersectsBox: function(e) {
    return e.intersectsTriangle(this);
  },
  closestPointToPoint: function(e, t) {
    t === void 0 && (console.warn("THREE.Triangle: .closestPointToPoint() target is now required"), t = new b());
    var n = this.a, r = this.b, i = this.c, a, s;
    wr.subVectors(r, n), Mr.subVectors(i, n), to.subVectors(e, n);
    var o = wr.dot(to), l = Mr.dot(to);
    if (o <= 0 && l <= 0)
      return t.copy(n);
    no.subVectors(e, r);
    var c = wr.dot(no), u = Mr.dot(no);
    if (c >= 0 && u <= c)
      return t.copy(r);
    var h = o * u - c * l;
    if (h <= 0 && o >= 0 && c <= 0)
      return a = o / (o - c), t.copy(n).addScaledVector(wr, a);
    ro.subVectors(e, i);
    var f = wr.dot(ro), d = Mr.dot(ro);
    if (d >= 0 && f <= d)
      return t.copy(i);
    var p = f * l - o * d;
    if (p <= 0 && l >= 0 && d <= 0)
      return s = l / (l - d), t.copy(n).addScaledVector(Mr, s);
    var v = c * d - f * u;
    if (v <= 0 && u - c >= 0 && f - d >= 0)
      return lc.subVectors(i, r), s = (u - c) / (u - c + (f - d)), t.copy(r).addScaledVector(lc, s);
    var m = 1 / (v + p + h);
    return a = p * m, s = h * m, t.copy(n).addScaledVector(wr, a).addScaledVector(Mr, s);
  },
  equals: function(e) {
    return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c);
  }
});
var Ou = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
}, jt = { h: 0, s: 0, l: 0 }, Ea = { h: 0, s: 0, l: 0 };
function ee(e, t, n) {
  return t === void 0 && n === void 0 ? this.set(e) : this.setRGB(e, t, n);
}
function io(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * 6 * (2 / 3 - n) : e;
}
function ao(e) {
  return e < 0.04045 ? e * 0.0773993808 : Math.pow(e * 0.9478672986 + 0.0521327014, 2.4);
}
function so(e) {
  return e < 31308e-7 ? e * 12.92 : 1.055 * Math.pow(e, 0.41666) - 0.055;
}
Object.assign(ee.prototype, {
  isColor: !0,
  r: 1,
  g: 1,
  b: 1,
  set: function(e) {
    return e && e.isColor ? this.copy(e) : typeof e == "number" ? this.setHex(e) : typeof e == "string" && this.setStyle(e), this;
  },
  setScalar: function(e) {
    return this.r = e, this.g = e, this.b = e, this;
  },
  setHex: function(e) {
    return e = Math.floor(e), this.r = (e >> 16 & 255) / 255, this.g = (e >> 8 & 255) / 255, this.b = (e & 255) / 255, this;
  },
  setRGB: function(e, t, n) {
    return this.r = e, this.g = t, this.b = n, this;
  },
  setHSL: function(e, t, n) {
    if (e = Ae.euclideanModulo(e, 1), t = Ae.clamp(t, 0, 1), n = Ae.clamp(n, 0, 1), t === 0)
      this.r = this.g = this.b = n;
    else {
      var r = n <= 0.5 ? n * (1 + t) : n + t - n * t, i = 2 * n - r;
      this.r = io(i, r, e + 1 / 3), this.g = io(i, r, e), this.b = io(i, r, e - 1 / 3);
    }
    return this;
  },
  setStyle: function(e) {
    function t(h) {
      h !== void 0 && parseFloat(h) < 1 && console.warn("THREE.Color: Alpha component of " + e + " will be ignored.");
    }
    var n;
    if (n = /^((?:rgb|hsl)a?)\(\s*([^\)]*)\)/.exec(e)) {
      var r, i = n[1], a = n[2];
      switch (i) {
        case "rgb":
        case "rgba":
          if (r = /^(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(a))
            return this.r = Math.min(255, parseInt(r[1], 10)) / 255, this.g = Math.min(255, parseInt(r[2], 10)) / 255, this.b = Math.min(255, parseInt(r[3], 10)) / 255, t(r[5]), this;
          if (r = /^(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(a))
            return this.r = Math.min(100, parseInt(r[1], 10)) / 100, this.g = Math.min(100, parseInt(r[2], 10)) / 100, this.b = Math.min(100, parseInt(r[3], 10)) / 100, t(r[5]), this;
          break;
        case "hsl":
        case "hsla":
          if (r = /^([0-9]*\.?[0-9]+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(a)) {
            var s = parseFloat(r[1]) / 360, o = parseInt(r[2], 10) / 100, l = parseInt(r[3], 10) / 100;
            return t(r[5]), this.setHSL(s, o, l);
          }
          break;
      }
    } else if (n = /^\#([A-Fa-f0-9]+)$/.exec(e)) {
      var c = n[1], u = c.length;
      if (u === 3)
        return this.r = parseInt(c.charAt(0) + c.charAt(0), 16) / 255, this.g = parseInt(c.charAt(1) + c.charAt(1), 16) / 255, this.b = parseInt(c.charAt(2) + c.charAt(2), 16) / 255, this;
      if (u === 6)
        return this.r = parseInt(c.charAt(0) + c.charAt(1), 16) / 255, this.g = parseInt(c.charAt(2) + c.charAt(3), 16) / 255, this.b = parseInt(c.charAt(4) + c.charAt(5), 16) / 255, this;
    }
    return e && e.length > 0 ? this.setColorName(e) : this;
  },
  setColorName: function(e) {
    var t = Ou[e];
    return t !== void 0 ? this.setHex(t) : console.warn("THREE.Color: Unknown color " + e), this;
  },
  clone: function() {
    return new this.constructor(this.r, this.g, this.b);
  },
  copy: function(e) {
    return this.r = e.r, this.g = e.g, this.b = e.b, this;
  },
  copyGammaToLinear: function(e, t) {
    return t === void 0 && (t = 2), this.r = Math.pow(e.r, t), this.g = Math.pow(e.g, t), this.b = Math.pow(e.b, t), this;
  },
  copyLinearToGamma: function(e, t) {
    t === void 0 && (t = 2);
    var n = t > 0 ? 1 / t : 1;
    return this.r = Math.pow(e.r, n), this.g = Math.pow(e.g, n), this.b = Math.pow(e.b, n), this;
  },
  convertGammaToLinear: function(e) {
    return this.copyGammaToLinear(this, e), this;
  },
  convertLinearToGamma: function(e) {
    return this.copyLinearToGamma(this, e), this;
  },
  copySRGBToLinear: function(e) {
    return this.r = ao(e.r), this.g = ao(e.g), this.b = ao(e.b), this;
  },
  copyLinearToSRGB: function(e) {
    return this.r = so(e.r), this.g = so(e.g), this.b = so(e.b), this;
  },
  convertSRGBToLinear: function() {
    return this.copySRGBToLinear(this), this;
  },
  convertLinearToSRGB: function() {
    return this.copyLinearToSRGB(this), this;
  },
  getHex: function() {
    return this.r * 255 << 16 ^ this.g * 255 << 8 ^ this.b * 255 << 0;
  },
  getHexString: function() {
    return ("000000" + this.getHex().toString(16)).slice(-6);
  },
  getHSL: function(e) {
    e === void 0 && (console.warn("THREE.Color: .getHSL() target is now required"), e = { h: 0, s: 0, l: 0 });
    var t = this.r, n = this.g, r = this.b, i = Math.max(t, n, r), a = Math.min(t, n, r), s, o, l = (a + i) / 2;
    if (a === i)
      s = 0, o = 0;
    else {
      var c = i - a;
      switch (o = l <= 0.5 ? c / (i + a) : c / (2 - i - a), i) {
        case t:
          s = (n - r) / c + (n < r ? 6 : 0);
          break;
        case n:
          s = (r - t) / c + 2;
          break;
        case r:
          s = (t - n) / c + 4;
          break;
      }
      s /= 6;
    }
    return e.h = s, e.s = o, e.l = l, e;
  },
  getStyle: function() {
    return "rgb(" + (this.r * 255 | 0) + "," + (this.g * 255 | 0) + "," + (this.b * 255 | 0) + ")";
  },
  offsetHSL: function(e, t, n) {
    return this.getHSL(jt), jt.h += e, jt.s += t, jt.l += n, this.setHSL(jt.h, jt.s, jt.l), this;
  },
  add: function(e) {
    return this.r += e.r, this.g += e.g, this.b += e.b, this;
  },
  addColors: function(e, t) {
    return this.r = e.r + t.r, this.g = e.g + t.g, this.b = e.b + t.b, this;
  },
  addScalar: function(e) {
    return this.r += e, this.g += e, this.b += e, this;
  },
  sub: function(e) {
    return this.r = Math.max(0, this.r - e.r), this.g = Math.max(0, this.g - e.g), this.b = Math.max(0, this.b - e.b), this;
  },
  multiply: function(e) {
    return this.r *= e.r, this.g *= e.g, this.b *= e.b, this;
  },
  multiplyScalar: function(e) {
    return this.r *= e, this.g *= e, this.b *= e, this;
  },
  lerp: function(e, t) {
    return this.r += (e.r - this.r) * t, this.g += (e.g - this.g) * t, this.b += (e.b - this.b) * t, this;
  },
  lerpHSL: function(e, t) {
    this.getHSL(jt), e.getHSL(Ea);
    var n = Ae.lerp(jt.h, Ea.h, t), r = Ae.lerp(jt.s, Ea.s, t), i = Ae.lerp(jt.l, Ea.l, t);
    return this.setHSL(n, r, i), this;
  },
  equals: function(e) {
    return e.r === this.r && e.g === this.g && e.b === this.b;
  },
  fromArray: function(e, t) {
    return t === void 0 && (t = 0), this.r = e[t], this.g = e[t + 1], this.b = e[t + 2], this;
  },
  toArray: function(e, t) {
    return e === void 0 && (e = []), t === void 0 && (t = 0), e[t] = this.r, e[t + 1] = this.g, e[t + 2] = this.b, e;
  },
  toJSON: function() {
    return this.getHex();
  }
});
ee.NAMES = Ou;
function as(e, t, n, r, i, a) {
  this.a = e, this.b = t, this.c = n, this.normal = r && r.isVector3 ? r : new b(), this.vertexNormals = Array.isArray(r) ? r : [], this.color = i && i.isColor ? i : new ee(), this.vertexColors = Array.isArray(i) ? i : [], this.materialIndex = a !== void 0 ? a : 0;
}
Object.assign(as.prototype, {
  clone: function() {
    return new this.constructor().copy(this);
  },
  copy: function(e) {
    this.a = e.a, this.b = e.b, this.c = e.c, this.normal.copy(e.normal), this.color.copy(e.color), this.materialIndex = e.materialIndex;
    for (var t = 0, n = e.vertexNormals.length; t < n; t++)
      this.vertexNormals[t] = e.vertexNormals[t].clone();
    for (var t = 0, n = e.vertexColors.length; t < n; t++)
      this.vertexColors[t] = e.vertexColors[t].clone();
    return this;
  }
});
var sd = 0;
function xe() {
  Object.defineProperty(this, "id", { value: sd++ }), this.uuid = Ae.generateUUID(), this.name = "", this.type = "Material", this.fog = !0, this.blending = Ei, this.side = ua, this.flatShading = !1, this.vertexTangents = !1, this.vertexColors = Mu, this.opacity = 1, this.transparent = !1, this.blendSrc = bu, this.blendDst = Eu, this.blendEquation = Ir, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.depthFunc = bo, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = Yf, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = Xs, this.stencilZFail = Xs, this.stencilZPass = Xs, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaTest = 0, this.premultipliedAlpha = !1, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0;
}
xe.prototype = Object.assign(Object.create(En.prototype), {
  constructor: xe,
  isMaterial: !0,
  onBeforeCompile: function() {
  },
  setValues: function(e) {
    if (e !== void 0)
      for (var t in e) {
        var n = e[t];
        if (n === void 0) {
          console.warn("THREE.Material: '" + t + "' parameter is undefined.");
          continue;
        }
        if (t === "shading") {
          console.warn("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead."), this.flatShading = n === wu;
          continue;
        }
        var r = this[t];
        if (r === void 0) {
          console.warn("THREE." + this.type + ": '" + t + "' is not a property of this material.");
          continue;
        }
        r && r.isColor ? r.set(n) : r && r.isVector3 && n && n.isVector3 ? r.copy(n) : this[t] = n;
      }
  },
  toJSON: function(e) {
    var t = e === void 0 || typeof e == "string";
    t && (e = {
      textures: {},
      images: {}
    });
    var n = {
      metadata: {
        version: 4.5,
        type: "Material",
        generator: "Material.toJSON"
      }
    };
    n.uuid = this.uuid, n.type = this.type, this.name !== "" && (n.name = this.name), this.color && this.color.isColor && (n.color = this.color.getHex()), this.roughness !== void 0 && (n.roughness = this.roughness), this.metalness !== void 0 && (n.metalness = this.metalness), this.sheen && this.sheen.isColor && (n.sheen = this.sheen.getHex()), this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()), this.emissiveIntensity && this.emissiveIntensity !== 1 && (n.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (n.specular = this.specular.getHex()), this.shininess !== void 0 && (n.shininess = this.shininess), this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat), this.clearcoatRoughness !== void 0 && (n.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid, n.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.map && this.map.isTexture && (n.map = this.map.toJSON(e).uuid), this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(e).uuid), this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(e).uuid), this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(e).uuid), this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(e).uuid, n.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(e).uuid, n.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(e).uuid, n.normalMapType = this.normalMapType, n.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(e).uuid, n.displacementScale = this.displacementScale, n.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(e).uuid), this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(e).uuid), this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(e).uuid), this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(e).uuid), this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(e).uuid, n.reflectivity = this.reflectivity, n.refractionRatio = this.refractionRatio, this.combine !== void 0 && (n.combine = this.combine), this.envMapIntensity !== void 0 && (n.envMapIntensity = this.envMapIntensity)), this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(e).uuid), this.size !== void 0 && (n.size = this.size), this.sizeAttenuation !== void 0 && (n.sizeAttenuation = this.sizeAttenuation), this.blending !== Ei && (n.blending = this.blending), this.flatShading === !0 && (n.flatShading = this.flatShading), this.side !== ua && (n.side = this.side), this.vertexColors !== Mu && (n.vertexColors = this.vertexColors), this.opacity < 1 && (n.opacity = this.opacity), this.transparent === !0 && (n.transparent = this.transparent), n.depthFunc = this.depthFunc, n.depthTest = this.depthTest, n.depthWrite = this.depthWrite, n.stencilWrite = this.stencilWrite, n.stencilWriteMask = this.stencilWriteMask, n.stencilFunc = this.stencilFunc, n.stencilRef = this.stencilRef, n.stencilFuncMask = this.stencilFuncMask, n.stencilFail = this.stencilFail, n.stencilZFail = this.stencilZFail, n.stencilZPass = this.stencilZPass, this.rotation && this.rotation !== 0 && (n.rotation = this.rotation), this.polygonOffset === !0 && (n.polygonOffset = !0), this.polygonOffsetFactor !== 0 && (n.polygonOffsetFactor = this.polygonOffsetFactor), this.polygonOffsetUnits !== 0 && (n.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth && this.linewidth !== 1 && (n.linewidth = this.linewidth), this.dashSize !== void 0 && (n.dashSize = this.dashSize), this.gapSize !== void 0 && (n.gapSize = this.gapSize), this.scale !== void 0 && (n.scale = this.scale), this.dithering === !0 && (n.dithering = !0), this.alphaTest > 0 && (n.alphaTest = this.alphaTest), this.premultipliedAlpha === !0 && (n.premultipliedAlpha = this.premultipliedAlpha), this.wireframe === !0 && (n.wireframe = this.wireframe), this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth), this.wireframeLinecap !== "round" && (n.wireframeLinecap = this.wireframeLinecap), this.wireframeLinejoin !== "round" && (n.wireframeLinejoin = this.wireframeLinejoin), this.morphTargets === !0 && (n.morphTargets = !0), this.morphNormals === !0 && (n.morphNormals = !0), this.skinning === !0 && (n.skinning = !0), this.visible === !1 && (n.visible = !1), this.toneMapped === !1 && (n.toneMapped = !1), JSON.stringify(this.userData) !== "{}" && (n.userData = this.userData);
    function r(s) {
      var o = [];
      for (var l in s) {
        var c = s[l];
        delete c.metadata, o.push(c);
      }
      return o;
    }
    if (t) {
      var i = r(e.textures), a = r(e.images);
      i.length > 0 && (n.textures = i), a.length > 0 && (n.images = a);
    }
    return n;
  },
  clone: function() {
    return new this.constructor().copy(this);
  },
  copy: function(e) {
    this.name = e.name, this.fog = e.fog, this.blending = e.blending, this.side = e.side, this.flatShading = e.flatShading, this.vertexTangents = e.vertexTangents, this.vertexColors = e.vertexColors, this.opacity = e.opacity, this.transparent = e.transparent, this.blendSrc = e.blendSrc, this.blendDst = e.blendDst, this.blendEquation = e.blendEquation, this.blendSrcAlpha = e.blendSrcAlpha, this.blendDstAlpha = e.blendDstAlpha, this.blendEquationAlpha = e.blendEquationAlpha, this.depthFunc = e.depthFunc, this.depthTest = e.depthTest, this.depthWrite = e.depthWrite, this.stencilWriteMask = e.stencilWriteMask, this.stencilFunc = e.stencilFunc, this.stencilRef = e.stencilRef, this.stencilFuncMask = e.stencilFuncMask, this.stencilFail = e.stencilFail, this.stencilZFail = e.stencilZFail, this.stencilZPass = e.stencilZPass, this.stencilWrite = e.stencilWrite;
    var t = e.clippingPlanes, n = null;
    if (t !== null) {
      var r = t.length;
      n = new Array(r);
      for (var i = 0; i !== r; ++i)
        n[i] = t[i].clone();
    }
    return this.clippingPlanes = n, this.clipIntersection = e.clipIntersection, this.clipShadows = e.clipShadows, this.shadowSide = e.shadowSide, this.colorWrite = e.colorWrite, this.precision = e.precision, this.polygonOffset = e.polygonOffset, this.polygonOffsetFactor = e.polygonOffsetFactor, this.polygonOffsetUnits = e.polygonOffsetUnits, this.dithering = e.dithering, this.alphaTest = e.alphaTest, this.premultipliedAlpha = e.premultipliedAlpha, this.visible = e.visible, this.toneMapped = e.toneMapped, this.userData = JSON.parse(JSON.stringify(e.userData)), this;
  },
  dispose: function() {
    this.dispatchEvent({ type: "dispose" });
  }
});
Object.defineProperty(xe.prototype, "needsUpdate", {
  set: function(e) {
    e === !0 && this.version++;
  }
});
function Zt(e) {
  xe.call(this), this.type = "MeshBasicMaterial", this.color = new ee(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = Us, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.skinning = !1, this.morphTargets = !1, this.setValues(e);
}
Zt.prototype = Object.create(xe.prototype);
Zt.prototype.constructor = Zt;
Zt.prototype.isMeshBasicMaterial = !0;
Zt.prototype.copy = function(e) {
  return xe.prototype.copy.call(this, e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.skinning = e.skinning, this.morphTargets = e.morphTargets, this;
};
var We = new b();
function _e(e, t, n) {
  if (Array.isArray(e))
    throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
  this.name = "", this.array = e, this.itemSize = t, this.count = e !== void 0 ? e.length / t : 0, this.normalized = n === !0, this.usage = Hs, this.updateRange = { offset: 0, count: -1 }, this.version = 0;
}
Object.defineProperty(_e.prototype, "needsUpdate", {
  set: function(e) {
    e === !0 && this.version++;
  }
});
Object.assign(_e.prototype, {
  isBufferAttribute: !0,
  onUploadCallback: function() {
  },
  setUsage: function(e) {
    return this.usage = e, this;
  },
  copy: function(e) {
    return this.name = e.name, this.array = new e.array.constructor(e.array), this.itemSize = e.itemSize, this.count = e.count, this.normalized = e.normalized, this.usage = e.usage, this;
  },
  copyAt: function(e, t, n) {
    e *= this.itemSize, n *= t.itemSize;
    for (var r = 0, i = this.itemSize; r < i; r++)
      this.array[e + r] = t.array[n + r];
    return this;
  },
  copyArray: function(e) {
    return this.array.set(e), this;
  },
  copyColorsArray: function(e) {
    for (var t = this.array, n = 0, r = 0, i = e.length; r < i; r++) {
      var a = e[r];
      a === void 0 && (console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined", r), a = new ee()), t[n++] = a.r, t[n++] = a.g, t[n++] = a.b;
    }
    return this;
  },
  copyVector2sArray: function(e) {
    for (var t = this.array, n = 0, r = 0, i = e.length; r < i; r++) {
      var a = e[r];
      a === void 0 && (console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined", r), a = new G()), t[n++] = a.x, t[n++] = a.y;
    }
    return this;
  },
  copyVector3sArray: function(e) {
    for (var t = this.array, n = 0, r = 0, i = e.length; r < i; r++) {
      var a = e[r];
      a === void 0 && (console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined", r), a = new b()), t[n++] = a.x, t[n++] = a.y, t[n++] = a.z;
    }
    return this;
  },
  copyVector4sArray: function(e) {
    for (var t = this.array, n = 0, r = 0, i = e.length; r < i; r++) {
      var a = e[r];
      a === void 0 && (console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined", r), a = new Ye()), t[n++] = a.x, t[n++] = a.y, t[n++] = a.z, t[n++] = a.w;
    }
    return this;
  },
  applyMatrix3: function(e) {
    for (var t = 0, n = this.count; t < n; t++)
      We.x = this.getX(t), We.y = this.getY(t), We.z = this.getZ(t), We.applyMatrix3(e), this.setXYZ(t, We.x, We.y, We.z);
    return this;
  },
  applyMatrix4: function(e) {
    for (var t = 0, n = this.count; t < n; t++)
      We.x = this.getX(t), We.y = this.getY(t), We.z = this.getZ(t), We.applyMatrix4(e), this.setXYZ(t, We.x, We.y, We.z);
    return this;
  },
  applyNormalMatrix: function(e) {
    for (var t = 0, n = this.count; t < n; t++)
      We.x = this.getX(t), We.y = this.getY(t), We.z = this.getZ(t), We.applyNormalMatrix(e), this.setXYZ(t, We.x, We.y, We.z);
    return this;
  },
  transformDirection: function(e) {
    for (var t = 0, n = this.count; t < n; t++)
      We.x = this.getX(t), We.y = this.getY(t), We.z = this.getZ(t), We.transformDirection(e), this.setXYZ(t, We.x, We.y, We.z);
    return this;
  },
  set: function(e, t) {
    return t === void 0 && (t = 0), this.array.set(e, t), this;
  },
  getX: function(e) {
    return this.array[e * this.itemSize];
  },
  setX: function(e, t) {
    return this.array[e * this.itemSize] = t, this;
  },
  getY: function(e) {
    return this.array[e * this.itemSize + 1];
  },
  setY: function(e, t) {
    return this.array[e * this.itemSize + 1] = t, this;
  },
  getZ: function(e) {
    return this.array[e * this.itemSize + 2];
  },
  setZ: function(e, t) {
    return this.array[e * this.itemSize + 2] = t, this;
  },
  getW: function(e) {
    return this.array[e * this.itemSize + 3];
  },
  setW: function(e, t) {
    return this.array[e * this.itemSize + 3] = t, this;
  },
  setXY: function(e, t, n) {
    return e *= this.itemSize, this.array[e + 0] = t, this.array[e + 1] = n, this;
  },
  setXYZ: function(e, t, n, r) {
    return e *= this.itemSize, this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = r, this;
  },
  setXYZW: function(e, t, n, r, i) {
    return e *= this.itemSize, this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = r, this.array[e + 3] = i, this;
  },
  onUpload: function(e) {
    return this.onUploadCallback = e, this;
  },
  clone: function() {
    return new this.constructor(this.array, this.itemSize).copy(this);
  },
  toJSON: function() {
    return {
      itemSize: this.itemSize,
      type: this.array.constructor.name,
      array: Array.prototype.slice.call(this.array),
      normalized: this.normalized
    };
  }
});
function To(e, t, n) {
  _e.call(this, new Int8Array(e), t, n);
}
To.prototype = Object.create(_e.prototype);
To.prototype.constructor = To;
function Ao(e, t, n) {
  _e.call(this, new Uint8Array(e), t, n);
}
Ao.prototype = Object.create(_e.prototype);
Ao.prototype.constructor = Ao;
function Lo(e, t, n) {
  _e.call(this, new Uint8ClampedArray(e), t, n);
}
Lo.prototype = Object.create(_e.prototype);
Lo.prototype.constructor = Lo;
function Co(e, t, n) {
  _e.call(this, new Int16Array(e), t, n);
}
Co.prototype = Object.create(_e.prototype);
Co.prototype.constructor = Co;
function Pi(e, t, n) {
  _e.call(this, new Uint16Array(e), t, n);
}
Pi.prototype = Object.create(_e.prototype);
Pi.prototype.constructor = Pi;
function Ro(e, t, n) {
  _e.call(this, new Int32Array(e), t, n);
}
Ro.prototype = Object.create(_e.prototype);
Ro.prototype.constructor = Ro;
function Di(e, t, n) {
  _e.call(this, new Uint32Array(e), t, n);
}
Di.prototype = Object.create(_e.prototype);
Di.prototype.constructor = Di;
function Q(e, t, n) {
  _e.call(this, new Float32Array(e), t, n);
}
Q.prototype = Object.create(_e.prototype);
Q.prototype.constructor = Q;
function Po(e, t, n) {
  _e.call(this, new Float64Array(e), t, n);
}
Po.prototype = Object.create(_e.prototype);
Po.prototype.constructor = Po;
function Nu() {
  this.vertices = [], this.normals = [], this.colors = [], this.uvs = [], this.uvs2 = [], this.groups = [], this.morphTargets = {}, this.skinWeights = [], this.skinIndices = [], this.boundingBox = null, this.boundingSphere = null, this.verticesNeedUpdate = !1, this.normalsNeedUpdate = !1, this.colorsNeedUpdate = !1, this.uvsNeedUpdate = !1, this.groupsNeedUpdate = !1;
}
Object.assign(Nu.prototype, {
  computeGroups: function(e) {
    for (var t, n = [], r = void 0, i = e.faces, a = 0; a < i.length; a++) {
      var s = i[a];
      s.materialIndex !== r && (r = s.materialIndex, t !== void 0 && (t.count = a * 3 - t.start, n.push(t)), t = {
        start: a * 3,
        materialIndex: r
      });
    }
    t !== void 0 && (t.count = a * 3 - t.start, n.push(t)), this.groups = n;
  },
  fromGeometry: function(e) {
    var t = e.faces, n = e.vertices, r = e.faceVertexUvs, i = r[0] && r[0].length > 0, a = r[1] && r[1].length > 0, s = e.morphTargets, o = s.length, l;
    if (o > 0) {
      l = [];
      for (var c = 0; c < o; c++)
        l[c] = {
          name: s[c].name,
          data: []
        };
      this.morphTargets.position = l;
    }
    var u = e.morphNormals, h = u.length, f;
    if (h > 0) {
      f = [];
      for (var c = 0; c < h; c++)
        f[c] = {
          name: u[c].name,
          data: []
        };
      this.morphTargets.normal = f;
    }
    var d = e.skinIndices, p = e.skinWeights, v = d.length === n.length, m = p.length === n.length;
    n.length > 0 && t.length === 0 && console.error("THREE.DirectGeometry: Faceless geometries are not supported.");
    for (var c = 0; c < t.length; c++) {
      var y = t[c];
      this.vertices.push(n[y.a], n[y.b], n[y.c]);
      var x = y.vertexNormals;
      if (x.length === 3)
        this.normals.push(x[0], x[1], x[2]);
      else {
        var M = y.normal;
        this.normals.push(M, M, M);
      }
      var E = y.vertexColors;
      if (E.length === 3)
        this.colors.push(E[0], E[1], E[2]);
      else {
        var w = y.color;
        this.colors.push(w, w, w);
      }
      if (i === !0) {
        var A = r[0][c];
        A !== void 0 ? this.uvs.push(A[0], A[1], A[2]) : (console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv ", c), this.uvs.push(new G(), new G(), new G()));
      }
      if (a === !0) {
        var A = r[1][c];
        A !== void 0 ? this.uvs2.push(A[0], A[1], A[2]) : (console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv2 ", c), this.uvs2.push(new G(), new G(), new G()));
      }
      for (var C = 0; C < o; C++) {
        var T = s[C].vertices;
        l[C].data.push(T[y.a], T[y.b], T[y.c]);
      }
      for (var C = 0; C < h; C++) {
        var D = u[C].vertexNormals[c];
        f[C].data.push(D.a, D.b, D.c);
      }
      v && this.skinIndices.push(d[y.a], d[y.b], d[y.c]), m && this.skinWeights.push(p[y.a], p[y.b], p[y.c]);
    }
    return this.computeGroups(e), this.verticesNeedUpdate = e.verticesNeedUpdate, this.normalsNeedUpdate = e.normalsNeedUpdate, this.colorsNeedUpdate = e.colorsNeedUpdate, this.uvsNeedUpdate = e.uvsNeedUpdate, this.groupsNeedUpdate = e.groupsNeedUpdate, e.boundingSphere !== null && (this.boundingSphere = e.boundingSphere.clone()), e.boundingBox !== null && (this.boundingBox = e.boundingBox.clone()), this;
  }
});
function Fu(e) {
  if (e.length === 0) return -1 / 0;
  for (var t = e[0], n = 1, r = e.length; n < r; ++n)
    e[n] > t && (t = e[n]);
  return t;
}
var od = 1, $t = new Ce(), oo = new K(), br = new b(), Rt = new hn(), mi = new hn(), st = new b();
function ne() {
  Object.defineProperty(this, "id", { value: od += 2 }), this.uuid = Ae.generateUUID(), this.name = "", this.type = "BufferGeometry", this.index = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = { start: 0, count: 1 / 0 }, this.userData = {};
}
ne.prototype = Object.assign(Object.create(En.prototype), {
  constructor: ne,
  isBufferGeometry: !0,
  getIndex: function() {
    return this.index;
  },
  setIndex: function(e) {
    Array.isArray(e) ? this.index = new (Fu(e) > 65535 ? Di : Pi)(e, 1) : this.index = e;
  },
  getAttribute: function(e) {
    return this.attributes[e];
  },
  setAttribute: function(e, t) {
    return this.attributes[e] = t, this;
  },
  deleteAttribute: function(e) {
    return delete this.attributes[e], this;
  },
  addGroup: function(e, t, n) {
    this.groups.push({
      start: e,
      count: t,
      materialIndex: n !== void 0 ? n : 0
    });
  },
  clearGroups: function() {
    this.groups = [];
  },
  setDrawRange: function(e, t) {
    this.drawRange.start = e, this.drawRange.count = t;
  },
  applyMatrix4: function(e) {
    var t = this.attributes.position;
    t !== void 0 && (t.applyMatrix4(e), t.needsUpdate = !0);
    var n = this.attributes.normal;
    if (n !== void 0) {
      var r = new gt().getNormalMatrix(e);
      n.applyNormalMatrix(r), n.needsUpdate = !0;
    }
    var i = this.attributes.tangent;
    return i !== void 0 && (i.transformDirection(e), i.needsUpdate = !0), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this;
  },
  rotateX: function(e) {
    return $t.makeRotationX(e), this.applyMatrix4($t), this;
  },
  rotateY: function(e) {
    return $t.makeRotationY(e), this.applyMatrix4($t), this;
  },
  rotateZ: function(e) {
    return $t.makeRotationZ(e), this.applyMatrix4($t), this;
  },
  translate: function(e, t, n) {
    return $t.makeTranslation(e, t, n), this.applyMatrix4($t), this;
  },
  scale: function(e, t, n) {
    return $t.makeScale(e, t, n), this.applyMatrix4($t), this;
  },
  lookAt: function(e) {
    return oo.lookAt(e), oo.updateMatrix(), this.applyMatrix4(oo.matrix), this;
  },
  center: function() {
    return this.computeBoundingBox(), this.boundingBox.getCenter(br).negate(), this.translate(br.x, br.y, br.z), this;
  },
  setFromObject: function(e) {
    var t = e.geometry;
    if (e.isPoints || e.isLine) {
      var n = new Q(t.vertices.length * 3, 3), r = new Q(t.colors.length * 3, 3);
      if (this.setAttribute("position", n.copyVector3sArray(t.vertices)), this.setAttribute("color", r.copyColorsArray(t.colors)), t.lineDistances && t.lineDistances.length === t.vertices.length) {
        var i = new Q(t.lineDistances.length, 1);
        this.setAttribute("lineDistance", i.copyArray(t.lineDistances));
      }
      t.boundingSphere !== null && (this.boundingSphere = t.boundingSphere.clone()), t.boundingBox !== null && (this.boundingBox = t.boundingBox.clone());
    } else e.isMesh && t && t.isGeometry && this.fromGeometry(t);
    return this;
  },
  setFromPoints: function(e) {
    for (var t = [], n = 0, r = e.length; n < r; n++) {
      var i = e[n];
      t.push(i.x, i.y, i.z || 0);
    }
    return this.setAttribute("position", new Q(t, 3)), this;
  },
  updateFromObject: function(e) {
    var t = e.geometry;
    if (e.isMesh) {
      var n = t.__directGeometry;
      if (t.elementsNeedUpdate === !0 && (n = void 0, t.elementsNeedUpdate = !1), n === void 0)
        return this.fromGeometry(t);
      n.verticesNeedUpdate = t.verticesNeedUpdate, n.normalsNeedUpdate = t.normalsNeedUpdate, n.colorsNeedUpdate = t.colorsNeedUpdate, n.uvsNeedUpdate = t.uvsNeedUpdate, n.groupsNeedUpdate = t.groupsNeedUpdate, t.verticesNeedUpdate = !1, t.normalsNeedUpdate = !1, t.colorsNeedUpdate = !1, t.uvsNeedUpdate = !1, t.groupsNeedUpdate = !1, t = n;
    }
    var r;
    return t.verticesNeedUpdate === !0 && (r = this.attributes.position, r !== void 0 && (r.copyVector3sArray(t.vertices), r.needsUpdate = !0), t.verticesNeedUpdate = !1), t.normalsNeedUpdate === !0 && (r = this.attributes.normal, r !== void 0 && (r.copyVector3sArray(t.normals), r.needsUpdate = !0), t.normalsNeedUpdate = !1), t.colorsNeedUpdate === !0 && (r = this.attributes.color, r !== void 0 && (r.copyColorsArray(t.colors), r.needsUpdate = !0), t.colorsNeedUpdate = !1), t.uvsNeedUpdate && (r = this.attributes.uv, r !== void 0 && (r.copyVector2sArray(t.uvs), r.needsUpdate = !0), t.uvsNeedUpdate = !1), t.lineDistancesNeedUpdate && (r = this.attributes.lineDistance, r !== void 0 && (r.copyArray(t.lineDistances), r.needsUpdate = !0), t.lineDistancesNeedUpdate = !1), t.groupsNeedUpdate && (t.computeGroups(e.geometry), this.groups = t.groups, t.groupsNeedUpdate = !1), this;
  },
  fromGeometry: function(e) {
    return e.__directGeometry = new Nu().fromGeometry(e), this.fromDirectGeometry(e.__directGeometry);
  },
  fromDirectGeometry: function(e) {
    var t = new Float32Array(e.vertices.length * 3);
    if (this.setAttribute("position", new _e(t, 3).copyVector3sArray(e.vertices)), e.normals.length > 0) {
      var n = new Float32Array(e.normals.length * 3);
      this.setAttribute("normal", new _e(n, 3).copyVector3sArray(e.normals));
    }
    if (e.colors.length > 0) {
      var r = new Float32Array(e.colors.length * 3);
      this.setAttribute("color", new _e(r, 3).copyColorsArray(e.colors));
    }
    if (e.uvs.length > 0) {
      var i = new Float32Array(e.uvs.length * 2);
      this.setAttribute("uv", new _e(i, 2).copyVector2sArray(e.uvs));
    }
    if (e.uvs2.length > 0) {
      var a = new Float32Array(e.uvs2.length * 2);
      this.setAttribute("uv2", new _e(a, 2).copyVector2sArray(e.uvs2));
    }
    this.groups = e.groups;
    for (var s in e.morphTargets) {
      for (var o = [], l = e.morphTargets[s], c = 0, u = l.length; c < u; c++) {
        var h = l[c], f = new Q(h.data.length * 3, 3);
        f.name = h.name, o.push(f.copyVector3sArray(h.data));
      }
      this.morphAttributes[s] = o;
    }
    if (e.skinIndices.length > 0) {
      var d = new Q(e.skinIndices.length * 4, 4);
      this.setAttribute("skinIndex", d.copyVector4sArray(e.skinIndices));
    }
    if (e.skinWeights.length > 0) {
      var p = new Q(e.skinWeights.length * 4, 4);
      this.setAttribute("skinWeight", p.copyVector4sArray(e.skinWeights));
    }
    return e.boundingSphere !== null && (this.boundingSphere = e.boundingSphere.clone()), e.boundingBox !== null && (this.boundingBox = e.boundingBox.clone()), this;
  },
  computeBoundingBox: function() {
    this.boundingBox === null && (this.boundingBox = new hn());
    var e = this.attributes.position, t = this.morphAttributes.position;
    if (e !== void 0) {
      if (this.boundingBox.setFromBufferAttribute(e), t)
        for (var n = 0, r = t.length; n < r; n++) {
          var i = t[n];
          Rt.setFromBufferAttribute(i), this.morphTargetsRelative ? (st.addVectors(this.boundingBox.min, Rt.min), this.boundingBox.expandByPoint(st), st.addVectors(this.boundingBox.max, Rt.max), this.boundingBox.expandByPoint(st)) : (this.boundingBox.expandByPoint(Rt.min), this.boundingBox.expandByPoint(Rt.max));
        }
    } else
      this.boundingBox.makeEmpty();
    (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox: Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this);
  },
  computeBoundingSphere: function() {
    this.boundingSphere === null && (this.boundingSphere = new kn());
    var e = this.attributes.position, t = this.morphAttributes.position;
    if (e) {
      var n = this.boundingSphere.center;
      if (Rt.setFromBufferAttribute(e), t)
        for (var r = 0, i = t.length; r < i; r++) {
          var a = t[r];
          mi.setFromBufferAttribute(a), this.morphTargetsRelative ? (st.addVectors(Rt.min, mi.min), Rt.expandByPoint(st), st.addVectors(Rt.max, mi.max), Rt.expandByPoint(st)) : (Rt.expandByPoint(mi.min), Rt.expandByPoint(mi.max));
        }
      Rt.getCenter(n);
      for (var s = 0, r = 0, i = e.count; r < i; r++)
        st.fromBufferAttribute(e, r), s = Math.max(s, n.distanceToSquared(st));
      if (t)
        for (var r = 0, i = t.length; r < i; r++)
          for (var a = t[r], o = this.morphTargetsRelative, l = 0, c = a.count; l < c; l++)
            st.fromBufferAttribute(a, l), o && (br.fromBufferAttribute(e, l), st.add(br)), s = Math.max(s, n.distanceToSquared(st));
      this.boundingSphere.radius = Math.sqrt(s), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this);
    }
  },
  computeFaceNormals: function() {
  },
  computeVertexNormals: function() {
    var e = this.index, t = this.attributes;
    if (t.position) {
      var n = t.position.array;
      if (t.normal === void 0)
        this.setAttribute("normal", new _e(new Float32Array(n.length), 3));
      else
        for (var r = t.normal.array, i = 0, a = r.length; i < a; i++)
          r[i] = 0;
      var s = t.normal.array, o, l, c, u = new b(), h = new b(), f = new b(), d = new b(), p = new b();
      if (e)
        for (var v = e.array, i = 0, a = e.count; i < a; i += 3)
          o = v[i + 0] * 3, l = v[i + 1] * 3, c = v[i + 2] * 3, u.fromArray(n, o), h.fromArray(n, l), f.fromArray(n, c), d.subVectors(f, h), p.subVectors(u, h), d.cross(p), s[o] += d.x, s[o + 1] += d.y, s[o + 2] += d.z, s[l] += d.x, s[l + 1] += d.y, s[l + 2] += d.z, s[c] += d.x, s[c + 1] += d.y, s[c + 2] += d.z;
      else
        for (var i = 0, a = n.length; i < a; i += 9)
          u.fromArray(n, i), h.fromArray(n, i + 3), f.fromArray(n, i + 6), d.subVectors(f, h), p.subVectors(u, h), d.cross(p), s[i] = d.x, s[i + 1] = d.y, s[i + 2] = d.z, s[i + 3] = d.x, s[i + 4] = d.y, s[i + 5] = d.z, s[i + 6] = d.x, s[i + 7] = d.y, s[i + 8] = d.z;
      this.normalizeNormals(), t.normal.needsUpdate = !0;
    }
  },
  merge: function(e, t) {
    if (!(e && e.isBufferGeometry)) {
      console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.", e);
      return;
    }
    t === void 0 && (t = 0, console.warn(
      "THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."
    ));
    var n = this.attributes;
    for (var r in n)
      if (e.attributes[r] !== void 0)
        for (var i = n[r], a = i.array, s = e.attributes[r], o = s.array, l = s.itemSize * t, c = Math.min(o.length, a.length - l), u = 0, h = l; u < c; u++, h++)
          a[h] = o[u];
    return this;
  },
  normalizeNormals: function() {
    for (var e = this.attributes.normal, t = 0, n = e.count; t < n; t++)
      st.x = e.getX(t), st.y = e.getY(t), st.z = e.getZ(t), st.normalize(), e.setXYZ(t, st.x, st.y, st.z);
  },
  toNonIndexed: function() {
    function e(v, m) {
      for (var y = v.array, x = v.itemSize, M = new y.constructor(m.length * x), E = 0, w = 0, A = 0, C = m.length; A < C; A++) {
        E = m[A] * x;
        for (var T = 0; T < x; T++)
          M[w++] = y[E++];
      }
      return new _e(M, x);
    }
    if (this.index === null)
      return console.warn("THREE.BufferGeometry.toNonIndexed(): Geometry is already non-indexed."), this;
    var t = new ne(), n = this.index.array, r = this.attributes;
    for (var i in r) {
      var a = r[i], s = e(a, n);
      t.setAttribute(i, s);
    }
    var o = this.morphAttributes;
    for (i in o) {
      for (var l = [], c = o[i], u = 0, h = c.length; u < h; u++) {
        var a = c[u], s = e(a, n);
        l.push(s);
      }
      t.morphAttributes[i] = l;
    }
    t.morphTargetsRelative = this.morphTargetsRelative;
    for (var f = this.groups, u = 0, d = f.length; u < d; u++) {
      var p = f[u];
      t.addGroup(p.start, p.count, p.materialIndex);
    }
    return t;
  },
  toJSON: function() {
    var e = {
      metadata: {
        version: 4.5,
        type: "BufferGeometry",
        generator: "BufferGeometry.toJSON"
      }
    };
    if (e.uuid = this.uuid, e.type = this.type, this.name !== "" && (e.name = this.name), Object.keys(this.userData).length > 0 && (e.userData = this.userData), this.parameters !== void 0) {
      var t = this.parameters;
      for (var n in t)
        t[n] !== void 0 && (e[n] = t[n]);
      return e;
    }
    e.data = { attributes: {} };
    var r = this.index;
    r !== null && (e.data.index = {
      type: r.array.constructor.name,
      array: Array.prototype.slice.call(r.array)
    });
    var i = this.attributes;
    for (var n in i) {
      var a = i[n], s = a.toJSON();
      a.name !== "" && (s.name = a.name), e.data.attributes[n] = s;
    }
    var o = {}, l = !1;
    for (var n in this.morphAttributes) {
      for (var c = this.morphAttributes[n], u = [], h = 0, f = c.length; h < f; h++) {
        var a = c[h], s = a.toJSON();
        a.name !== "" && (s.name = a.name), u.push(s);
      }
      u.length > 0 && (o[n] = u, l = !0);
    }
    l && (e.data.morphAttributes = o, e.data.morphTargetsRelative = this.morphTargetsRelative);
    var d = this.groups;
    d.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(d)));
    var p = this.boundingSphere;
    return p !== null && (e.data.boundingSphere = {
      center: p.center.toArray(),
      radius: p.radius
    }), e;
  },
  clone: function() {
    return new ne().copy(this);
  },
  copy: function(e) {
    var t, n, r;
    this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.name = e.name;
    var i = e.index;
    i !== null && this.setIndex(i.clone());
    var a = e.attributes;
    for (t in a) {
      var s = a[t];
      this.setAttribute(t, s.clone());
    }
    var o = e.morphAttributes;
    for (t in o) {
      var l = [], c = o[t];
      for (n = 0, r = c.length; n < r; n++)
        l.push(c[n].clone());
      this.morphAttributes[t] = l;
    }
    this.morphTargetsRelative = e.morphTargetsRelative;
    var u = e.groups;
    for (n = 0, r = u.length; n < r; n++) {
      var h = u[n];
      this.addGroup(h.start, h.count, h.materialIndex);
    }
    var f = e.boundingBox;
    f !== null && (this.boundingBox = f.clone());
    var d = e.boundingSphere;
    return d !== null && (this.boundingSphere = d.clone()), this.drawRange.start = e.drawRange.start, this.drawRange.count = e.drawRange.count, this.userData = e.userData, this;
  },
  dispose: function() {
    this.dispatchEvent({ type: "dispose" });
  }
});
var cc = new Ce(), qn = new ui(), lo = new kn(), Xn = new b(), Yn = new b(), Zn = new b(), co = new b(), uo = new b(), ho = new b(), Sa = new b(), Ta = new b(), Aa = new b(), Fr = new G(), Br = new G(), zr = new G(), Si = new b(), La = new b();
function et(e, t) {
  K.call(this), this.type = "Mesh", this.geometry = e !== void 0 ? e : new ne(), this.material = t !== void 0 ? t : new Zt(), this.updateMorphTargets();
}
et.prototype = Object.assign(Object.create(K.prototype), {
  constructor: et,
  isMesh: !0,
  copy: function(e) {
    return K.prototype.copy.call(this, e), e.morphTargetInfluences !== void 0 && (this.morphTargetInfluences = e.morphTargetInfluences.slice()), e.morphTargetDictionary !== void 0 && (this.morphTargetDictionary = Object.assign({}, e.morphTargetDictionary)), this;
  },
  updateMorphTargets: function() {
    var e = this.geometry, t, n, r;
    if (e.isBufferGeometry) {
      var i = e.morphAttributes, a = Object.keys(i);
      if (a.length > 0) {
        var s = i[a[0]];
        if (s !== void 0)
          for (this.morphTargetInfluences = [], this.morphTargetDictionary = {}, t = 0, n = s.length; t < n; t++)
            r = s[t].name || String(t), this.morphTargetInfluences.push(0), this.morphTargetDictionary[r] = t;
      }
    } else {
      var o = e.morphTargets;
      o !== void 0 && o.length > 0 && console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");
    }
  },
  raycast: function(e, t) {
    var n = this.geometry, r = this.material, i = this.matrixWorld;
    if (r !== void 0 && (n.boundingSphere === null && n.computeBoundingSphere(), lo.copy(n.boundingSphere), lo.applyMatrix4(i), e.ray.intersectsSphere(lo) !== !1 && (cc.getInverse(i), qn.copy(e.ray).applyMatrix4(cc), !(n.boundingBox !== null && qn.intersectsBox(n.boundingBox) === !1)))) {
      var a;
      if (n.isBufferGeometry) {
        var s, o, l, c = n.index, u = n.attributes.position, h = n.morphAttributes.position, f = n.morphTargetsRelative, d = n.attributes.uv, p = n.attributes.uv2, v = n.groups, m = n.drawRange, y, x, M, E, w, A, C, T;
        if (c !== null)
          if (Array.isArray(r))
            for (y = 0, M = v.length; y < M; y++)
              for (w = v[y], A = r[w.materialIndex], C = Math.max(w.start, m.start), T = Math.min(w.start + w.count, m.start + m.count), x = C, E = T; x < E; x += 3)
                s = c.getX(x), o = c.getX(x + 1), l = c.getX(x + 2), a = Ca(this, A, e, qn, u, h, f, d, p, s, o, l), a && (a.faceIndex = Math.floor(x / 3), a.face.materialIndex = w.materialIndex, t.push(a));
          else
            for (C = Math.max(0, m.start), T = Math.min(c.count, m.start + m.count), y = C, M = T; y < M; y += 3)
              s = c.getX(y), o = c.getX(y + 1), l = c.getX(y + 2), a = Ca(this, r, e, qn, u, h, f, d, p, s, o, l), a && (a.faceIndex = Math.floor(y / 3), t.push(a));
        else if (u !== void 0)
          if (Array.isArray(r))
            for (y = 0, M = v.length; y < M; y++)
              for (w = v[y], A = r[w.materialIndex], C = Math.max(w.start, m.start), T = Math.min(w.start + w.count, m.start + m.count), x = C, E = T; x < E; x += 3)
                s = x, o = x + 1, l = x + 2, a = Ca(this, A, e, qn, u, h, f, d, p, s, o, l), a && (a.faceIndex = Math.floor(x / 3), a.face.materialIndex = w.materialIndex, t.push(a));
          else
            for (C = Math.max(0, m.start), T = Math.min(u.count, m.start + m.count), y = C, M = T; y < M; y += 3)
              s = y, o = y + 1, l = y + 2, a = Ca(this, r, e, qn, u, h, f, d, p, s, o, l), a && (a.faceIndex = Math.floor(y / 3), t.push(a));
      } else if (n.isGeometry) {
        var D, I, B, O = Array.isArray(r), F = n.vertices, N = n.faces, z, H = n.faceVertexUvs[0];
        H.length > 0 && (z = H);
        for (var te = 0, $ = N.length; te < $; te++) {
          var X = N[te], Y = O ? r[X.materialIndex] : r;
          if (Y !== void 0 && (D = F[X.a], I = F[X.b], B = F[X.c], a = Bu(this, Y, e, qn, D, I, B, Si), a)) {
            if (z && z[te]) {
              var re = z[te];
              Fr.copy(re[0]), Br.copy(re[1]), zr.copy(re[2]), a.uv = pt.getUV(Si, D, I, B, Fr, Br, zr, new G());
            }
            a.face = X, a.faceIndex = te, t.push(a);
          }
        }
      }
    }
  },
  clone: function() {
    return new this.constructor(this.geometry, this.material).copy(this);
  }
});
function Bu(e, t, n, r, i, a, s, o) {
  var l;
  if (t.side === ht ? l = r.intersectTriangle(s, a, i, !0, o) : l = r.intersectTriangle(i, a, s, t.side !== zs, o), l === null) return null;
  La.copy(o), La.applyMatrix4(e.matrixWorld);
  var c = n.ray.origin.distanceTo(La);
  return c < n.near || c > n.far ? null : {
    distance: c,
    point: La.clone(),
    object: e
  };
}
function Ca(e, t, n, r, i, a, s, o, l, c, u, h) {
  Xn.fromBufferAttribute(i, c), Yn.fromBufferAttribute(i, u), Zn.fromBufferAttribute(i, h);
  var f = e.morphTargetInfluences;
  if (t.morphTargets && a && f) {
    Sa.set(0, 0, 0), Ta.set(0, 0, 0), Aa.set(0, 0, 0);
    for (var d = 0, p = a.length; d < p; d++) {
      var v = f[d], m = a[d];
      v !== 0 && (co.fromBufferAttribute(m, c), uo.fromBufferAttribute(m, u), ho.fromBufferAttribute(m, h), s ? (Sa.addScaledVector(co, v), Ta.addScaledVector(uo, v), Aa.addScaledVector(ho, v)) : (Sa.addScaledVector(co.sub(Xn), v), Ta.addScaledVector(uo.sub(Yn), v), Aa.addScaledVector(ho.sub(Zn), v)));
    }
    Xn.add(Sa), Yn.add(Ta), Zn.add(Aa);
  }
  var y = Bu(e, t, n, r, Xn, Yn, Zn, Si);
  if (y) {
    o && (Fr.fromBufferAttribute(o, c), Br.fromBufferAttribute(o, u), zr.fromBufferAttribute(o, h), y.uv = pt.getUV(Si, Xn, Yn, Zn, Fr, Br, zr, new G())), l && (Fr.fromBufferAttribute(l, c), Br.fromBufferAttribute(l, u), zr.fromBufferAttribute(l, h), y.uv2 = pt.getUV(Si, Xn, Yn, Zn, Fr, Br, zr, new G()));
    var x = new as(c, u, h);
    pt.getNormal(Xn, Yn, Zn, x.normal), y.face = x;
  }
  return y;
}
var ld = 0, Qt = new Ce(), fo = new K(), Ra = new b();
function we() {
  Object.defineProperty(this, "id", { value: ld += 2 }), this.uuid = Ae.generateUUID(), this.name = "", this.type = "Geometry", this.vertices = [], this.colors = [], this.faces = [], this.faceVertexUvs = [[]], this.morphTargets = [], this.morphNormals = [], this.skinWeights = [], this.skinIndices = [], this.lineDistances = [], this.boundingBox = null, this.boundingSphere = null, this.elementsNeedUpdate = !1, this.verticesNeedUpdate = !1, this.uvsNeedUpdate = !1, this.normalsNeedUpdate = !1, this.colorsNeedUpdate = !1, this.lineDistancesNeedUpdate = !1, this.groupsNeedUpdate = !1;
}
we.prototype = Object.assign(Object.create(En.prototype), {
  constructor: we,
  isGeometry: !0,
  applyMatrix4: function(e) {
    for (var t = new gt().getNormalMatrix(e), n = 0, r = this.vertices.length; n < r; n++) {
      var i = this.vertices[n];
      i.applyMatrix4(e);
    }
    for (var n = 0, r = this.faces.length; n < r; n++) {
      var a = this.faces[n];
      a.normal.applyMatrix3(t).normalize();
      for (var s = 0, o = a.vertexNormals.length; s < o; s++)
        a.vertexNormals[s].applyMatrix3(t).normalize();
    }
    return this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this.verticesNeedUpdate = !0, this.normalsNeedUpdate = !0, this;
  },
  rotateX: function(e) {
    return Qt.makeRotationX(e), this.applyMatrix4(Qt), this;
  },
  rotateY: function(e) {
    return Qt.makeRotationY(e), this.applyMatrix4(Qt), this;
  },
  rotateZ: function(e) {
    return Qt.makeRotationZ(e), this.applyMatrix4(Qt), this;
  },
  translate: function(e, t, n) {
    return Qt.makeTranslation(e, t, n), this.applyMatrix4(Qt), this;
  },
  scale: function(e, t, n) {
    return Qt.makeScale(e, t, n), this.applyMatrix4(Qt), this;
  },
  lookAt: function(e) {
    return fo.lookAt(e), fo.updateMatrix(), this.applyMatrix4(fo.matrix), this;
  },
  fromBufferGeometry: function(e) {
    var t = this, n = e.index !== null ? e.index.array : void 0, r = e.attributes;
    if (r.position === void 0)
      return console.error("THREE.Geometry.fromBufferGeometry(): Position attribute required for conversion."), this;
    var i = r.position.array, a = r.normal !== void 0 ? r.normal.array : void 0, s = r.color !== void 0 ? r.color.array : void 0, o = r.uv !== void 0 ? r.uv.array : void 0, l = r.uv2 !== void 0 ? r.uv2.array : void 0;
    l !== void 0 && (this.faceVertexUvs[1] = []);
    for (var c = 0; c < i.length; c += 3)
      t.vertices.push(new b().fromArray(i, c)), s !== void 0 && t.colors.push(new ee().fromArray(s, c));
    function u(y, x, M, E) {
      var w = s === void 0 ? [] : [
        t.colors[y].clone(),
        t.colors[x].clone(),
        t.colors[M].clone()
      ], A = a === void 0 ? [] : [
        new b().fromArray(a, y * 3),
        new b().fromArray(a, x * 3),
        new b().fromArray(a, M * 3)
      ], C = new as(y, x, M, A, w, E);
      t.faces.push(C), o !== void 0 && t.faceVertexUvs[0].push([
        new G().fromArray(o, y * 2),
        new G().fromArray(o, x * 2),
        new G().fromArray(o, M * 2)
      ]), l !== void 0 && t.faceVertexUvs[1].push([
        new G().fromArray(l, y * 2),
        new G().fromArray(l, x * 2),
        new G().fromArray(l, M * 2)
      ]);
    }
    var h = e.groups;
    if (h.length > 0)
      for (var c = 0; c < h.length; c++)
        for (var f = h[c], d = f.start, p = f.count, v = d, m = d + p; v < m; v += 3)
          n !== void 0 ? u(n[v], n[v + 1], n[v + 2], f.materialIndex) : u(v, v + 1, v + 2, f.materialIndex);
    else if (n !== void 0)
      for (var c = 0; c < n.length; c += 3)
        u(n[c], n[c + 1], n[c + 2]);
    else
      for (var c = 0; c < i.length / 3; c += 3)
        u(c, c + 1, c + 2);
    return this.computeFaceNormals(), e.boundingBox !== null && (this.boundingBox = e.boundingBox.clone()), e.boundingSphere !== null && (this.boundingSphere = e.boundingSphere.clone()), this;
  },
  center: function() {
    return this.computeBoundingBox(), this.boundingBox.getCenter(Ra).negate(), this.translate(Ra.x, Ra.y, Ra.z), this;
  },
  normalize: function() {
    this.computeBoundingSphere();
    var e = this.boundingSphere.center, t = this.boundingSphere.radius, n = t === 0 ? 1 : 1 / t, r = new Ce();
    return r.set(
      n,
      0,
      0,
      -n * e.x,
      0,
      n,
      0,
      -n * e.y,
      0,
      0,
      n,
      -n * e.z,
      0,
      0,
      0,
      1
    ), this.applyMatrix4(r), this;
  },
  computeFaceNormals: function() {
    for (var e = new b(), t = new b(), n = 0, r = this.faces.length; n < r; n++) {
      var i = this.faces[n], a = this.vertices[i.a], s = this.vertices[i.b], o = this.vertices[i.c];
      e.subVectors(o, s), t.subVectors(a, s), e.cross(t), e.normalize(), i.normal.copy(e);
    }
  },
  computeVertexNormals: function(e) {
    e === void 0 && (e = !0);
    var t, n, r, i, a, s;
    for (s = new Array(this.vertices.length), t = 0, n = this.vertices.length; t < n; t++)
      s[t] = new b();
    if (e) {
      var o, l, c, u = new b(), h = new b();
      for (r = 0, i = this.faces.length; r < i; r++)
        a = this.faces[r], o = this.vertices[a.a], l = this.vertices[a.b], c = this.vertices[a.c], u.subVectors(c, l), h.subVectors(o, l), u.cross(h), s[a.a].add(u), s[a.b].add(u), s[a.c].add(u);
    } else
      for (this.computeFaceNormals(), r = 0, i = this.faces.length; r < i; r++)
        a = this.faces[r], s[a.a].add(a.normal), s[a.b].add(a.normal), s[a.c].add(a.normal);
    for (t = 0, n = this.vertices.length; t < n; t++)
      s[t].normalize();
    for (r = 0, i = this.faces.length; r < i; r++) {
      a = this.faces[r];
      var f = a.vertexNormals;
      f.length === 3 ? (f[0].copy(s[a.a]), f[1].copy(s[a.b]), f[2].copy(s[a.c])) : (f[0] = s[a.a].clone(), f[1] = s[a.b].clone(), f[2] = s[a.c].clone());
    }
    this.faces.length > 0 && (this.normalsNeedUpdate = !0);
  },
  computeFlatVertexNormals: function() {
    var e, t, n;
    for (this.computeFaceNormals(), e = 0, t = this.faces.length; e < t; e++) {
      n = this.faces[e];
      var r = n.vertexNormals;
      r.length === 3 ? (r[0].copy(n.normal), r[1].copy(n.normal), r[2].copy(n.normal)) : (r[0] = n.normal.clone(), r[1] = n.normal.clone(), r[2] = n.normal.clone());
    }
    this.faces.length > 0 && (this.normalsNeedUpdate = !0);
  },
  computeMorphNormals: function() {
    var e, t, n, r, i;
    for (n = 0, r = this.faces.length; n < r; n++)
      for (i = this.faces[n], i.__originalFaceNormal ? i.__originalFaceNormal.copy(i.normal) : i.__originalFaceNormal = i.normal.clone(), i.__originalVertexNormals || (i.__originalVertexNormals = []), e = 0, t = i.vertexNormals.length; e < t; e++)
        i.__originalVertexNormals[e] ? i.__originalVertexNormals[e].copy(i.vertexNormals[e]) : i.__originalVertexNormals[e] = i.vertexNormals[e].clone();
    var a = new we();
    for (a.faces = this.faces, e = 0, t = this.morphTargets.length; e < t; e++) {
      if (!this.morphNormals[e]) {
        this.morphNormals[e] = {}, this.morphNormals[e].faceNormals = [], this.morphNormals[e].vertexNormals = [];
        var s = this.morphNormals[e].faceNormals, o = this.morphNormals[e].vertexNormals, c, u;
        for (n = 0, r = this.faces.length; n < r; n++)
          c = new b(), u = { a: new b(), b: new b(), c: new b() }, s.push(c), o.push(u);
      }
      var l = this.morphNormals[e];
      a.vertices = this.morphTargets[e].vertices, a.computeFaceNormals(), a.computeVertexNormals();
      var c, u;
      for (n = 0, r = this.faces.length; n < r; n++)
        i = this.faces[n], c = l.faceNormals[n], u = l.vertexNormals[n], c.copy(i.normal), u.a.copy(i.vertexNormals[0]), u.b.copy(i.vertexNormals[1]), u.c.copy(i.vertexNormals[2]);
    }
    for (n = 0, r = this.faces.length; n < r; n++)
      i = this.faces[n], i.normal = i.__originalFaceNormal, i.vertexNormals = i.__originalVertexNormals;
  },
  computeBoundingBox: function() {
    this.boundingBox === null && (this.boundingBox = new hn()), this.boundingBox.setFromPoints(this.vertices);
  },
  computeBoundingSphere: function() {
    this.boundingSphere === null && (this.boundingSphere = new kn()), this.boundingSphere.setFromPoints(this.vertices);
  },
  merge: function(e, t, n) {
    if (!(e && e.isGeometry)) {
      console.error("THREE.Geometry.merge(): geometry not an instance of THREE.Geometry.", e);
      return;
    }
    var r, i = this.vertices.length, a = this.vertices, s = e.vertices, o = this.faces, l = e.faces, c = this.colors, u = e.colors;
    n === void 0 && (n = 0), t !== void 0 && (r = new gt().getNormalMatrix(t));
    for (var h = 0, f = s.length; h < f; h++) {
      var d = s[h], p = d.clone();
      t !== void 0 && p.applyMatrix4(t), a.push(p);
    }
    for (var h = 0, f = u.length; h < f; h++)
      c.push(u[h].clone());
    for (h = 0, f = l.length; h < f; h++) {
      var v = l[h], m, y, x, M = v.vertexNormals, E = v.vertexColors;
      m = new as(v.a + i, v.b + i, v.c + i), m.normal.copy(v.normal), r !== void 0 && m.normal.applyMatrix3(r).normalize();
      for (var w = 0, A = M.length; w < A; w++)
        y = M[w].clone(), r !== void 0 && y.applyMatrix3(r).normalize(), m.vertexNormals.push(y);
      m.color.copy(v.color);
      for (var w = 0, A = E.length; w < A; w++)
        x = E[w], m.vertexColors.push(x.clone());
      m.materialIndex = v.materialIndex + n, o.push(m);
    }
    for (var h = 0, f = e.faceVertexUvs.length; h < f; h++) {
      var C = e.faceVertexUvs[h];
      this.faceVertexUvs[h] === void 0 && (this.faceVertexUvs[h] = []);
      for (var w = 0, A = C.length; w < A; w++) {
        for (var T = C[w], D = [], I = 0, B = T.length; I < B; I++)
          D.push(T[I].clone());
        this.faceVertexUvs[h].push(D);
      }
    }
  },
  mergeMesh: function(e) {
    if (!(e && e.isMesh)) {
      console.error("THREE.Geometry.mergeMesh(): mesh not an instance of THREE.Mesh.", e);
      return;
    }
    e.matrixAutoUpdate && e.updateMatrix(), this.merge(e.geometry, e.matrix);
  },
  /*
   * Checks for duplicate vertices with hashmap.
   * Duplicated vertices are removed
   * and faces' vertices are updated.
   */
  mergeVertices: function() {
    var e = {}, t = [], n = [], r, i, a = 4, s = Math.pow(10, a), o, l, c, u, h, f;
    for (o = 0, l = this.vertices.length; o < l; o++)
      r = this.vertices[o], i = Math.round(r.x * s) + "_" + Math.round(r.y * s) + "_" + Math.round(r.z * s), e[i] === void 0 ? (e[i] = o, t.push(this.vertices[o]), n[o] = t.length - 1) : n[o] = n[e[i]];
    var d = [];
    for (o = 0, l = this.faces.length; o < l; o++) {
      c = this.faces[o], c.a = n[c.a], c.b = n[c.b], c.c = n[c.c], u = [c.a, c.b, c.c];
      for (var p = 0; p < 3; p++)
        if (u[p] === u[(p + 1) % 3]) {
          d.push(o);
          break;
        }
    }
    for (o = d.length - 1; o >= 0; o--) {
      var v = d[o];
      for (this.faces.splice(v, 1), h = 0, f = this.faceVertexUvs.length; h < f; h++)
        this.faceVertexUvs[h].splice(v, 1);
    }
    var m = this.vertices.length - t.length;
    return this.vertices = t, m;
  },
  setFromPoints: function(e) {
    this.vertices = [];
    for (var t = 0, n = e.length; t < n; t++) {
      var r = e[t];
      this.vertices.push(new b(r.x, r.y, r.z || 0));
    }
    return this;
  },
  sortFacesByMaterialIndex: function() {
    for (var e = this.faces, t = e.length, n = 0; n < t; n++)
      e[n]._id = n;
    function r(c, u) {
      return c.materialIndex - u.materialIndex;
    }
    e.sort(r);
    var i = this.faceVertexUvs[0], a = this.faceVertexUvs[1], s, o;
    i && i.length === t && (s = []), a && a.length === t && (o = []);
    for (var n = 0; n < t; n++) {
      var l = e[n]._id;
      s && s.push(i[l]), o && o.push(a[l]);
    }
    s && (this.faceVertexUvs[0] = s), o && (this.faceVertexUvs[1] = o);
  },
  toJSON: function() {
    var e = {
      metadata: {
        version: 4.5,
        type: "Geometry",
        generator: "Geometry.toJSON"
      }
    };
    if (e.uuid = this.uuid, e.type = this.type, this.name !== "" && (e.name = this.name), this.parameters !== void 0) {
      var t = this.parameters;
      for (var n in t)
        t[n] !== void 0 && (e[n] = t[n]);
      return e;
    }
    for (var r = [], i = 0; i < this.vertices.length; i++) {
      var a = this.vertices[i];
      r.push(a.x, a.y, a.z);
    }
    for (var s = [], o = [], l = {}, c = [], u = {}, h = [], f = {}, i = 0; i < this.faces.length; i++) {
      var d = this.faces[i], p = !0, v = !1, m = this.faceVertexUvs[0][i] !== void 0, y = d.normal.length() > 0, x = d.vertexNormals.length > 0, M = d.color.r !== 1 || d.color.g !== 1 || d.color.b !== 1, E = d.vertexColors.length > 0, w = 0;
      if (w = D(w, 0, 0), w = D(w, 1, p), w = D(w, 2, v), w = D(w, 3, m), w = D(w, 4, y), w = D(w, 5, x), w = D(w, 6, M), w = D(w, 7, E), s.push(w), s.push(d.a, d.b, d.c), s.push(d.materialIndex), m) {
        var A = this.faceVertexUvs[0][i];
        s.push(
          O(A[0]),
          O(A[1]),
          O(A[2])
        );
      }
      if (y && s.push(I(d.normal)), x) {
        var C = d.vertexNormals;
        s.push(
          I(C[0]),
          I(C[1]),
          I(C[2])
        );
      }
      if (M && s.push(B(d.color)), E) {
        var T = d.vertexColors;
        s.push(
          B(T[0]),
          B(T[1]),
          B(T[2])
        );
      }
    }
    function D(F, N, z) {
      return z ? F | 1 << N : F & ~(1 << N);
    }
    function I(F) {
      var N = F.x.toString() + F.y.toString() + F.z.toString();
      return l[N] !== void 0 || (l[N] = o.length / 3, o.push(F.x, F.y, F.z)), l[N];
    }
    function B(F) {
      var N = F.r.toString() + F.g.toString() + F.b.toString();
      return u[N] !== void 0 || (u[N] = c.length, c.push(F.getHex())), u[N];
    }
    function O(F) {
      var N = F.x.toString() + F.y.toString();
      return f[N] !== void 0 || (f[N] = h.length / 2, h.push(F.x, F.y)), f[N];
    }
    return e.data = {}, e.data.vertices = r, e.data.normals = o, c.length > 0 && (e.data.colors = c), h.length > 0 && (e.data.uvs = [h]), e.data.faces = s, e;
  },
  clone: function() {
    return new we().copy(this);
  },
  copy: function(e) {
    var t, n, r, i, a, s;
    this.vertices = [], this.colors = [], this.faces = [], this.faceVertexUvs = [[]], this.morphTargets = [], this.morphNormals = [], this.skinWeights = [], this.skinIndices = [], this.lineDistances = [], this.boundingBox = null, this.boundingSphere = null, this.name = e.name;
    var o = e.vertices;
    for (t = 0, n = o.length; t < n; t++)
      this.vertices.push(o[t].clone());
    var l = e.colors;
    for (t = 0, n = l.length; t < n; t++)
      this.colors.push(l[t].clone());
    var c = e.faces;
    for (t = 0, n = c.length; t < n; t++)
      this.faces.push(c[t].clone());
    for (t = 0, n = e.faceVertexUvs.length; t < n; t++) {
      var u = e.faceVertexUvs[t];
      for (this.faceVertexUvs[t] === void 0 && (this.faceVertexUvs[t] = []), r = 0, i = u.length; r < i; r++) {
        var h = u[r], f = [];
        for (a = 0, s = h.length; a < s; a++) {
          var d = h[a];
          f.push(d.clone());
        }
        this.faceVertexUvs[t].push(f);
      }
    }
    var p = e.morphTargets;
    for (t = 0, n = p.length; t < n; t++) {
      var v = {};
      if (v.name = p[t].name, p[t].vertices !== void 0)
        for (v.vertices = [], r = 0, i = p[t].vertices.length; r < i; r++)
          v.vertices.push(p[t].vertices[r].clone());
      if (p[t].normals !== void 0)
        for (v.normals = [], r = 0, i = p[t].normals.length; r < i; r++)
          v.normals.push(p[t].normals[r].clone());
      this.morphTargets.push(v);
    }
    var m = e.morphNormals;
    for (t = 0, n = m.length; t < n; t++) {
      var y = {};
      if (m[t].vertexNormals !== void 0)
        for (y.vertexNormals = [], r = 0, i = m[t].vertexNormals.length; r < i; r++) {
          var x = m[t].vertexNormals[r], M = {};
          M.a = x.a.clone(), M.b = x.b.clone(), M.c = x.c.clone(), y.vertexNormals.push(M);
        }
      if (m[t].faceNormals !== void 0)
        for (y.faceNormals = [], r = 0, i = m[t].faceNormals.length; r < i; r++)
          y.faceNormals.push(m[t].faceNormals[r].clone());
      this.morphNormals.push(y);
    }
    var E = e.skinWeights;
    for (t = 0, n = E.length; t < n; t++)
      this.skinWeights.push(E[t].clone());
    var w = e.skinIndices;
    for (t = 0, n = w.length; t < n; t++)
      this.skinIndices.push(w[t].clone());
    var A = e.lineDistances;
    for (t = 0, n = A.length; t < n; t++)
      this.lineDistances.push(A[t]);
    var C = e.boundingBox;
    C !== null && (this.boundingBox = C.clone());
    var T = e.boundingSphere;
    return T !== null && (this.boundingSphere = T.clone()), this.elementsNeedUpdate = e.elementsNeedUpdate, this.verticesNeedUpdate = e.verticesNeedUpdate, this.uvsNeedUpdate = e.uvsNeedUpdate, this.normalsNeedUpdate = e.normalsNeedUpdate, this.colorsNeedUpdate = e.colorsNeedUpdate, this.lineDistancesNeedUpdate = e.lineDistancesNeedUpdate, this.groupsNeedUpdate = e.groupsNeedUpdate, this;
  },
  dispose: function() {
    this.dispatchEvent({ type: "dispose" });
  }
});
class cd extends we {
  constructor(t, n, r, i, a, s) {
    super(), this.type = "BoxGeometry", this.parameters = {
      width: t,
      height: n,
      depth: r,
      widthSegments: i,
      heightSegments: a,
      depthSegments: s
    }, this.fromBufferGeometry(new ks(t, n, r, i, a, s)), this.mergeVertices();
  }
}
class ks extends ne {
  constructor(t, n, r, i, a, s) {
    super(), this.type = "BoxBufferGeometry", this.parameters = {
      width: t,
      height: n,
      depth: r,
      widthSegments: i,
      heightSegments: a,
      depthSegments: s
    };
    var o = this;
    t = t || 1, n = n || 1, r = r || 1, i = Math.floor(i) || 1, a = Math.floor(a) || 1, s = Math.floor(s) || 1;
    var l = [], c = [], u = [], h = [], f = 0, d = 0;
    p("z", "y", "x", -1, -1, r, n, t, s, a, 0), p("z", "y", "x", 1, -1, r, n, -t, s, a, 1), p("x", "z", "y", 1, 1, t, r, n, i, s, 2), p("x", "z", "y", 1, -1, t, r, -n, i, s, 3), p("x", "y", "z", 1, -1, t, n, r, i, a, 4), p("x", "y", "z", -1, -1, t, n, -r, i, a, 5), this.setIndex(l), this.setAttribute("position", new Q(c, 3)), this.setAttribute("normal", new Q(u, 3)), this.setAttribute("uv", new Q(h, 2));
    function p(v, m, y, x, M, E, w, A, C, T, D) {
      var I = E / C, B = w / T, O = E / 2, F = w / 2, N = A / 2, z = C + 1, H = T + 1, te = 0, $ = 0, X, Y, re = new b();
      for (Y = 0; Y < H; Y++) {
        var Ue = Y * B - F;
        for (X = 0; X < z; X++) {
          var ze = X * I - O;
          re[v] = ze * x, re[m] = Ue * M, re[y] = N, c.push(re.x, re.y, re.z), re[v] = 0, re[m] = 0, re[y] = A > 0 ? 1 : -1, u.push(re.x, re.y, re.z), h.push(X / C), h.push(1 - Y / T), te += 1;
        }
      }
      for (Y = 0; Y < T; Y++)
        for (X = 0; X < C; X++) {
          var Fe = f + X + z * Y, be = f + X + z * (Y + 1), V = f + (X + 1) + z * (Y + 1), He = f + (X + 1) + z * Y;
          l.push(Fe, be, He), l.push(be, V, He), $ += 6;
        }
      o.addGroup(d, $, D), d += $, f += te;
    }
  }
}
function kr(e) {
  var t = {};
  for (var n in e) {
    t[n] = {};
    for (var r in e[n]) {
      var i = e[n][r];
      i && (i.isColor || i.isMatrix3 || i.isMatrix4 || i.isVector2 || i.isVector3 || i.isVector4 || i.isTexture) ? t[n][r] = i.clone() : Array.isArray(i) ? t[n][r] = i.slice() : t[n][r] = i;
    }
  }
  return t;
}
function mt(e) {
  for (var t = {}, n = 0; n < e.length; n++) {
    var r = kr(e[n]);
    for (var i in r)
      t[i] = r[i];
  }
  return t;
}
var ud = { clone: kr, merge: mt }, hd = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`, fd = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
function St(e) {
  xe.call(this), this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.vertexShader = hd, this.fragmentShader = fd, this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.extensions = {
    derivatives: !1,
    // set to use derivatives
    fragDepth: !1,
    // set to use fragment depth values
    drawBuffers: !1,
    // set to use draw buffers
    shaderTextureLOD: !1
    // set to use shader texture LOD
  }, this.defaultAttributeValues = {
    color: [1, 1, 1],
    uv: [0, 0],
    uv2: [0, 0]
  }, this.index0AttributeName = void 0, this.uniformsNeedUpdate = !1, e !== void 0 && (e.attributes !== void 0 && console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."), this.setValues(e));
}
St.prototype = Object.create(xe.prototype);
St.prototype.constructor = St;
St.prototype.isShaderMaterial = !0;
St.prototype.copy = function(e) {
  return xe.prototype.copy.call(this, e), this.fragmentShader = e.fragmentShader, this.vertexShader = e.vertexShader, this.uniforms = kr(e.uniforms), this.defines = Object.assign({}, e.defines), this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.lights = e.lights, this.clipping = e.clipping, this.skinning = e.skinning, this.morphTargets = e.morphTargets, this.morphNormals = e.morphNormals, this.extensions = e.extensions, this;
};
St.prototype.toJSON = function(e) {
  var t = xe.prototype.toJSON.call(this, e);
  t.uniforms = {};
  for (var n in this.uniforms) {
    var r = this.uniforms[n], i = r.value;
    i && i.isTexture ? t.uniforms[n] = {
      type: "t",
      value: i.toJSON(e).uuid
    } : i && i.isColor ? t.uniforms[n] = {
      type: "c",
      value: i.getHex()
    } : i && i.isVector2 ? t.uniforms[n] = {
      type: "v2",
      value: i.toArray()
    } : i && i.isVector3 ? t.uniforms[n] = {
      type: "v3",
      value: i.toArray()
    } : i && i.isVector4 ? t.uniforms[n] = {
      type: "v4",
      value: i.toArray()
    } : i && i.isMatrix3 ? t.uniforms[n] = {
      type: "m3",
      value: i.toArray()
    } : i && i.isMatrix4 ? t.uniforms[n] = {
      type: "m4",
      value: i.toArray()
    } : t.uniforms[n] = {
      value: i
    };
  }
  Object.keys(this.defines).length > 0 && (t.defines = this.defines), t.vertexShader = this.vertexShader, t.fragmentShader = this.fragmentShader;
  var a = {};
  for (var s in this.extensions)
    this.extensions[s] === !0 && (a[s] = !0);
  return Object.keys(a).length > 0 && (t.extensions = a), t;
};
function yn() {
  K.call(this), this.type = "Camera", this.matrixWorldInverse = new Ce(), this.projectionMatrix = new Ce(), this.projectionMatrixInverse = new Ce();
}
yn.prototype = Object.assign(Object.create(K.prototype), {
  constructor: yn,
  isCamera: !0,
  copy: function(e, t) {
    return K.prototype.copy.call(this, e, t), this.matrixWorldInverse.copy(e.matrixWorldInverse), this.projectionMatrix.copy(e.projectionMatrix), this.projectionMatrixInverse.copy(e.projectionMatrixInverse), this;
  },
  getWorldDirection: function(e) {
    e === void 0 && (console.warn("THREE.Camera: .getWorldDirection() target is now required"), e = new b()), this.updateMatrixWorld(!0);
    var t = this.matrixWorld.elements;
    return e.set(-t[8], -t[9], -t[10]).normalize();
  },
  updateMatrixWorld: function(e) {
    K.prototype.updateMatrixWorld.call(this, e), this.matrixWorldInverse.getInverse(this.matrixWorld);
  },
  updateWorldMatrix: function(e, t) {
    K.prototype.updateWorldMatrix.call(this, e, t), this.matrixWorldInverse.getInverse(this.matrixWorld);
  },
  clone: function() {
    return new this.constructor().copy(this);
  }
});
function ut(e, t, n, r) {
  yn.call(this), this.type = "PerspectiveCamera", this.fov = e !== void 0 ? e : 50, this.zoom = 1, this.near = n !== void 0 ? n : 0.1, this.far = r !== void 0 ? r : 2e3, this.focus = 10, this.aspect = t !== void 0 ? t : 1, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix();
}
ut.prototype = Object.assign(Object.create(yn.prototype), {
  constructor: ut,
  isPerspectiveCamera: !0,
  copy: function(e, t) {
    return yn.prototype.copy.call(this, e, t), this.fov = e.fov, this.zoom = e.zoom, this.near = e.near, this.far = e.far, this.focus = e.focus, this.aspect = e.aspect, this.view = e.view === null ? null : Object.assign({}, e.view), this.filmGauge = e.filmGauge, this.filmOffset = e.filmOffset, this;
  },
  /**
   * Sets the FOV by focal length in respect to the current .filmGauge.
   *
   * The default film gauge is 35, so that the focal length can be specified for
   * a 35mm (full frame) camera.
   *
   * Values for focal length and film gauge must have the same unit.
   */
  setFocalLength: function(e) {
    var t = 0.5 * this.getFilmHeight() / e;
    this.fov = Ae.RAD2DEG * 2 * Math.atan(t), this.updateProjectionMatrix();
  },
  /**
   * Calculates the focal length from the current .fov and .filmGauge.
   */
  getFocalLength: function() {
    var e = Math.tan(Ae.DEG2RAD * 0.5 * this.fov);
    return 0.5 * this.getFilmHeight() / e;
  },
  getEffectiveFOV: function() {
    return Ae.RAD2DEG * 2 * Math.atan(
      Math.tan(Ae.DEG2RAD * 0.5 * this.fov) / this.zoom
    );
  },
  getFilmWidth: function() {
    return this.filmGauge * Math.min(this.aspect, 1);
  },
  getFilmHeight: function() {
    return this.filmGauge / Math.max(this.aspect, 1);
  },
  /**
   * Sets an offset in a larger frustum. This is useful for multi-window or
   * multi-monitor/multi-machine setups.
   *
   * For example, if you have 3x2 monitors and each monitor is 1920x1080 and
   * the monitors are in grid like this
   *
   *   +---+---+---+
   *   | A | B | C |
   *   +---+---+---+
   *   | D | E | F |
   *   +---+---+---+
   *
   * then for each monitor you would call it like this
   *
   *   var w = 1920;
   *   var h = 1080;
   *   var fullWidth = w * 3;
   *   var fullHeight = h * 2;
   *
   *   --A--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 0, h * 0, w, h );
   *   --B--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 1, h * 0, w, h );
   *   --C--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 2, h * 0, w, h );
   *   --D--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 0, h * 1, w, h );
   *   --E--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 1, h * 1, w, h );
   *   --F--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 2, h * 1, w, h );
   *
   *   Note there is no reason monitors have to be the same size or in a grid.
   */
  setViewOffset: function(e, t, n, r, i, a) {
    this.aspect = e / t, this.view === null && (this.view = {
      enabled: !0,
      fullWidth: 1,
      fullHeight: 1,
      offsetX: 0,
      offsetY: 0,
      width: 1,
      height: 1
    }), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = r, this.view.width = i, this.view.height = a, this.updateProjectionMatrix();
  },
  clearViewOffset: function() {
    this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
  },
  updateProjectionMatrix: function() {
    var e = this.near, t = e * Math.tan(Ae.DEG2RAD * 0.5 * this.fov) / this.zoom, n = 2 * t, r = this.aspect * n, i = -0.5 * r, a = this.view;
    if (this.view !== null && this.view.enabled) {
      var s = a.fullWidth, o = a.fullHeight;
      i += a.offsetX * r / s, t -= a.offsetY * n / o, r *= a.width / s, n *= a.height / o;
    }
    var l = this.filmOffset;
    l !== 0 && (i += e * l / this.getFilmWidth()), this.projectionMatrix.makePerspective(i, i + r, t, t - n, e, this.far), this.projectionMatrixInverse.getInverse(this.projectionMatrix);
  },
  toJSON: function(e) {
    var t = K.prototype.toJSON.call(this, e);
    return t.object.fov = this.fov, t.object.zoom = this.zoom, t.object.near = this.near, t.object.far = this.far, t.object.focus = this.focus, t.object.aspect = this.aspect, this.view !== null && (t.object.view = Object.assign({}, this.view)), t.object.filmGauge = this.filmGauge, t.object.filmOffset = this.filmOffset, t;
  }
});
var Er = 90, Sr = 1;
function Ii(e, t, n, r) {
  K.call(this), this.type = "CubeCamera";
  var i = new ut(Er, Sr, e, t);
  i.up.set(0, -1, 0), i.lookAt(new b(1, 0, 0)), this.add(i);
  var a = new ut(Er, Sr, e, t);
  a.up.set(0, -1, 0), a.lookAt(new b(-1, 0, 0)), this.add(a);
  var s = new ut(Er, Sr, e, t);
  s.up.set(0, 0, 1), s.lookAt(new b(0, 1, 0)), this.add(s);
  var o = new ut(Er, Sr, e, t);
  o.up.set(0, 0, -1), o.lookAt(new b(0, -1, 0)), this.add(o);
  var l = new ut(Er, Sr, e, t);
  l.up.set(0, -1, 0), l.lookAt(new b(0, 0, 1)), this.add(l);
  var c = new ut(Er, Sr, e, t);
  c.up.set(0, -1, 0), c.lookAt(new b(0, 0, -1)), this.add(c), r = r || { format: ir, magFilter: ft, minFilter: ft }, this.renderTarget = new Wr(n, r), this.renderTarget.texture.name = "CubeCamera", this.update = function(u, h) {
    this.parent === null && this.updateMatrixWorld();
    var f = u.getRenderTarget(), d = this.renderTarget, p = d.texture.generateMipmaps;
    d.texture.generateMipmaps = !1, u.setRenderTarget(d, 0), u.render(h, i), u.setRenderTarget(d, 1), u.render(h, a), u.setRenderTarget(d, 2), u.render(h, s), u.setRenderTarget(d, 3), u.render(h, o), u.setRenderTarget(d, 4), u.render(h, l), d.texture.generateMipmaps = p, u.setRenderTarget(d, 5), u.render(h, c), u.setRenderTarget(f);
  }, this.clear = function(u, h, f, d) {
    for (var p = u.getRenderTarget(), v = this.renderTarget, m = 0; m < 6; m++)
      u.setRenderTarget(v, m), u.clear(h, f, d);
    u.setRenderTarget(p);
  };
}
Ii.prototype = Object.create(K.prototype);
Ii.prototype.constructor = Ii;
function Wr(e, t, n) {
  Number.isInteger(t) && (console.warn("THREE.WebGLCubeRenderTarget: constructor signature is now WebGLCubeRenderTarget( size, options )"), t = n), Mt.call(this, e, e, t);
}
Wr.prototype = Object.create(Mt.prototype);
Wr.prototype.constructor = Wr;
Wr.prototype.isWebGLCubeRenderTarget = !0;
Wr.prototype.fromEquirectangularTexture = function(e, t) {
  this.texture.type = t.type, this.texture.format = t.format, this.texture.encoding = t.encoding;
  var n = new Bn(), r = {
    uniforms: {
      tEquirect: { value: null }
    },
    vertexShader: [
      "varying vec3 vWorldDirection;",
      "vec3 transformDirection( in vec3 dir, in mat4 matrix ) {",
      "	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );",
      "}",
      "void main() {",
      "	vWorldDirection = transformDirection( position, modelMatrix );",
      "	#include <begin_vertex>",
      "	#include <project_vertex>",
      "}"
    ].join(`
`),
    fragmentShader: [
      "uniform sampler2D tEquirect;",
      "varying vec3 vWorldDirection;",
      "#define RECIPROCAL_PI 0.31830988618",
      "#define RECIPROCAL_PI2 0.15915494",
      "void main() {",
      "	vec3 direction = normalize( vWorldDirection );",
      "	vec2 sampleUV;",
      "	sampleUV.y = asin( clamp( direction.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;",
      "	sampleUV.x = atan( direction.z, direction.x ) * RECIPROCAL_PI2 + 0.5;",
      "	gl_FragColor = texture2D( tEquirect, sampleUV );",
      "}"
    ].join(`
`)
  }, i = new St({
    type: "CubemapFromEquirect",
    uniforms: kr(r.uniforms),
    vertexShader: r.vertexShader,
    fragmentShader: r.fragmentShader,
    side: ht,
    blending: In
  });
  i.uniforms.tEquirect.value = t;
  var a = new et(new ks(5, 5, 5), i);
  n.add(a);
  var s = new Ii(1, 10, 1);
  return s.renderTarget = this, s.renderTarget.texture.name = "CubeCameraTexture", s.update(e, n), a.geometry.dispose(), a.material.dispose(), this;
};
function jr(e, t, n, r, i, a, s, o, l, c, u, h) {
  Ze.call(this, null, a, s, o, l, c, r, i, u, h), this.image = { data: e || null, width: t || 1, height: n || 1 }, this.magFilter = l !== void 0 ? l : ot, this.minFilter = c !== void 0 ? c : ot, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1, this.needsUpdate = !0;
}
jr.prototype = Object.create(Ze.prototype);
jr.prototype.constructor = jr;
jr.prototype.isDataTexture = !0;
var Tr = new kn(), Pa = new b();
function da(e, t, n, r, i, a) {
  this.planes = [
    e !== void 0 ? e : new Kt(),
    t !== void 0 ? t : new Kt(),
    n !== void 0 ? n : new Kt(),
    r !== void 0 ? r : new Kt(),
    i !== void 0 ? i : new Kt(),
    a !== void 0 ? a : new Kt()
  ];
}
Object.assign(da.prototype, {
  set: function(e, t, n, r, i, a) {
    var s = this.planes;
    return s[0].copy(e), s[1].copy(t), s[2].copy(n), s[3].copy(r), s[4].copy(i), s[5].copy(a), this;
  },
  clone: function() {
    return new this.constructor().copy(this);
  },
  copy: function(e) {
    for (var t = this.planes, n = 0; n < 6; n++)
      t[n].copy(e.planes[n]);
    return this;
  },
  setFromProjectionMatrix: function(e) {
    var t = this.planes, n = e.elements, r = n[0], i = n[1], a = n[2], s = n[3], o = n[4], l = n[5], c = n[6], u = n[7], h = n[8], f = n[9], d = n[10], p = n[11], v = n[12], m = n[13], y = n[14], x = n[15];
    return t[0].setComponents(s - r, u - o, p - h, x - v).normalize(), t[1].setComponents(s + r, u + o, p + h, x + v).normalize(), t[2].setComponents(s + i, u + l, p + f, x + m).normalize(), t[3].setComponents(s - i, u - l, p - f, x - m).normalize(), t[4].setComponents(s - a, u - c, p - d, x - y).normalize(), t[5].setComponents(s + a, u + c, p + d, x + y).normalize(), this;
  },
  intersectsObject: function(e) {
    var t = e.geometry;
    return t.boundingSphere === null && t.computeBoundingSphere(), Tr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld), this.intersectsSphere(Tr);
  },
  intersectsSprite: function(e) {
    return Tr.center.set(0, 0, 0), Tr.radius = 0.7071067811865476, Tr.applyMatrix4(e.matrixWorld), this.intersectsSphere(Tr);
  },
  intersectsSphere: function(e) {
    for (var t = this.planes, n = e.center, r = -e.radius, i = 0; i < 6; i++) {
      var a = t[i].distanceToPoint(n);
      if (a < r)
        return !1;
    }
    return !0;
  },
  intersectsBox: function(e) {
    for (var t = this.planes, n = 0; n < 6; n++) {
      var r = t[n];
      if (Pa.x = r.normal.x > 0 ? e.max.x : e.min.x, Pa.y = r.normal.y > 0 ? e.max.y : e.min.y, Pa.z = r.normal.z > 0 ? e.max.z : e.min.z, r.distanceToPoint(Pa) < 0)
        return !1;
    }
    return !0;
  },
  containsPoint: function(e) {
    for (var t = this.planes, n = 0; n < 6; n++)
      if (t[n].distanceToPoint(e) < 0)
        return !1;
    return !0;
  }
});
var J = {
  common: {
    diffuse: { value: new ee(15658734) },
    opacity: { value: 1 },
    map: { value: null },
    uvTransform: { value: new gt() },
    uv2Transform: { value: new gt() },
    alphaMap: { value: null }
  },
  specularmap: {
    specularMap: { value: null }
  },
  envmap: {
    envMap: { value: null },
    flipEnvMap: { value: -1 },
    reflectivity: { value: 1 },
    refractionRatio: { value: 0.98 },
    maxMipLevel: { value: 0 }
  },
  aomap: {
    aoMap: { value: null },
    aoMapIntensity: { value: 1 }
  },
  lightmap: {
    lightMap: { value: null },
    lightMapIntensity: { value: 1 }
  },
  emissivemap: {
    emissiveMap: { value: null }
  },
  bumpmap: {
    bumpMap: { value: null },
    bumpScale: { value: 1 }
  },
  normalmap: {
    normalMap: { value: null },
    normalScale: { value: new G(1, 1) }
  },
  displacementmap: {
    displacementMap: { value: null },
    displacementScale: { value: 1 },
    displacementBias: { value: 0 }
  },
  roughnessmap: {
    roughnessMap: { value: null }
  },
  metalnessmap: {
    metalnessMap: { value: null }
  },
  gradientmap: {
    gradientMap: { value: null }
  },
  fog: {
    fogDensity: { value: 25e-5 },
    fogNear: { value: 1 },
    fogFar: { value: 2e3 },
    fogColor: { value: new ee(16777215) }
  },
  lights: {
    ambientLightColor: { value: [] },
    lightProbe: { value: [] },
    directionalLights: { value: [], properties: {
      direction: {},
      color: {},
      shadow: {},
      shadowBias: {},
      shadowRadius: {},
      shadowMapSize: {}
    } },
    directionalShadowMap: { value: [] },
    directionalShadowMatrix: { value: [] },
    spotLights: { value: [], properties: {
      color: {},
      position: {},
      direction: {},
      distance: {},
      coneCos: {},
      penumbraCos: {},
      decay: {},
      shadow: {},
      shadowBias: {},
      shadowRadius: {},
      shadowMapSize: {}
    } },
    spotShadowMap: { value: [] },
    spotShadowMatrix: { value: [] },
    pointLights: { value: [], properties: {
      color: {},
      position: {},
      decay: {},
      distance: {},
      shadow: {},
      shadowBias: {},
      shadowRadius: {},
      shadowMapSize: {},
      shadowCameraNear: {},
      shadowCameraFar: {}
    } },
    pointShadowMap: { value: [] },
    pointShadowMatrix: { value: [] },
    hemisphereLights: { value: [], properties: {
      direction: {},
      skyColor: {},
      groundColor: {}
    } },
    // TODO (abelnation): RectAreaLight BRDF data needs to be moved from example to main src
    rectAreaLights: { value: [], properties: {
      color: {},
      position: {},
      width: {},
      height: {}
    } }
  },
  points: {
    diffuse: { value: new ee(15658734) },
    opacity: { value: 1 },
    size: { value: 1 },
    scale: { value: 1 },
    map: { value: null },
    alphaMap: { value: null },
    uvTransform: { value: new gt() }
  },
  sprite: {
    diffuse: { value: new ee(15658734) },
    opacity: { value: 1 },
    center: { value: new G(0.5, 0.5) },
    rotation: { value: 0 },
    map: { value: null },
    alphaMap: { value: null },
    uvTransform: { value: new gt() }
  }
};
function zu() {
  var e = null, t = !1, n = null;
  function r(i, a) {
    t !== !1 && (n(i, a), e.requestAnimationFrame(r));
  }
  return {
    start: function() {
      t !== !0 && n !== null && (e.requestAnimationFrame(r), t = !0);
    },
    stop: function() {
      t = !1;
    },
    setAnimationLoop: function(i) {
      n = i;
    },
    setContext: function(i) {
      e = i;
    }
  };
}
function dd(e, t) {
  var n = t.isWebGL2, r = /* @__PURE__ */ new WeakMap();
  function i(c, u) {
    var h = c.array, f = c.usage, d = e.createBuffer();
    e.bindBuffer(u, d), e.bufferData(u, h, f), c.onUploadCallback();
    var p = 5126;
    return h instanceof Float32Array ? p = 5126 : h instanceof Float64Array ? console.warn("THREE.WebGLAttributes: Unsupported data buffer format: Float64Array.") : h instanceof Uint16Array ? p = 5123 : h instanceof Int16Array ? p = 5122 : h instanceof Uint32Array ? p = 5125 : h instanceof Int32Array ? p = 5124 : h instanceof Int8Array ? p = 5120 : h instanceof Uint8Array && (p = 5121), {
      buffer: d,
      type: p,
      bytesPerElement: h.BYTES_PER_ELEMENT,
      version: c.version
    };
  }
  function a(c, u, h) {
    var f = u.array, d = u.updateRange;
    e.bindBuffer(h, c), d.count === -1 ? e.bufferSubData(h, 0, f) : (n ? e.bufferSubData(
      h,
      d.offset * f.BYTES_PER_ELEMENT,
      f,
      d.offset,
      d.count
    ) : e.bufferSubData(
      h,
      d.offset * f.BYTES_PER_ELEMENT,
      f.subarray(d.offset, d.offset + d.count)
    ), d.count = -1);
  }
  function s(c) {
    return c.isInterleavedBufferAttribute && (c = c.data), r.get(c);
  }
  function o(c) {
    c.isInterleavedBufferAttribute && (c = c.data);
    var u = r.get(c);
    u && (e.deleteBuffer(u.buffer), r.delete(c));
  }
  function l(c, u) {
    c.isInterleavedBufferAttribute && (c = c.data);
    var h = r.get(c);
    h === void 0 ? r.set(c, i(c, u)) : h.version < c.version && (a(h.buffer, c, u), h.version = c.version);
  }
  return {
    get: s,
    remove: o,
    update: l
  };
}
function ss(e, t, n, r) {
  we.call(this), this.type = "PlaneGeometry", this.parameters = {
    width: e,
    height: t,
    widthSegments: n,
    heightSegments: r
  }, this.fromBufferGeometry(new qr(e, t, n, r)), this.mergeVertices();
}
ss.prototype = Object.create(we.prototype);
ss.prototype.constructor = ss;
function qr(e, t, n, r) {
  ne.call(this), this.type = "PlaneBufferGeometry", this.parameters = {
    width: e,
    height: t,
    widthSegments: n,
    heightSegments: r
  }, e = e || 1, t = t || 1;
  var i = e / 2, a = t / 2, s = Math.floor(n) || 1, o = Math.floor(r) || 1, l = s + 1, c = o + 1, u = e / s, h = t / o, f, d, p = [], v = [], m = [], y = [];
  for (d = 0; d < c; d++) {
    var x = d * h - a;
    for (f = 0; f < l; f++) {
      var M = f * u - i;
      v.push(M, -x, 0), m.push(0, 0, 1), y.push(f / s), y.push(1 - d / o);
    }
  }
  for (d = 0; d < o; d++)
    for (f = 0; f < s; f++) {
      var E = f + l * d, w = f + l * (d + 1), A = f + 1 + l * (d + 1), C = f + 1 + l * d;
      p.push(E, w, C), p.push(w, A, C);
    }
  this.setIndex(p), this.setAttribute("position", new Q(v, 3)), this.setAttribute("normal", new Q(m, 3)), this.setAttribute("uv", new Q(y, 2));
}
qr.prototype = Object.create(ne.prototype);
qr.prototype.constructor = qr;
var pd = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`, vd = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, md = `#ifdef ALPHATEST
	if ( diffuseColor.a < ALPHATEST ) discard;
#endif`, gd = `#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );
	#endif
#endif`, yd = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`, xd = "vec3 transformed = vec3( position );", _d = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`, wd = `vec2 integrateSpecularBRDF( const in float dotNV, const in float roughness ) {
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	return vec2( -1.04, 1.04 ) * a004 + r.zw;
}
float punctualLightIntensityToIrradianceFactor( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
#if defined ( PHYSICALLY_CORRECT_LIGHTS )
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
#else
	if( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
		return pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );
	}
	return 1.0;
#endif
}
vec3 BRDF_Diffuse_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 specularColor, const in float dotLH ) {
	float fresnel = exp2( ( -5.55473 * dotLH - 6.98316 ) * dotLH );
	return ( 1.0 - specularColor ) * fresnel + specularColor;
}
vec3 F_Schlick_RoughnessDependent( const in vec3 F0, const in float dotNV, const in float roughness ) {
	float fresnel = exp2( ( -5.55473 * dotNV - 6.98316 ) * dotNV );
	vec3 Fr = max( vec3( 1.0 - roughness ), F0 ) - F0;
	return Fr * fresnel + F0;
}
float G_GGX_Smith( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gl = dotNL + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	float gv = dotNV + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	return 1.0 / ( gl * gv );
}
float G_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_Specular_GGX( const in IncidentLight incidentLight, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( incidentLight.direction + viewDir );
	float dotNL = saturate( dot( normal, incidentLight.direction ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotLH = saturate( dot( incidentLight.direction, halfDir ) );
	vec3 F = F_Schlick( specularColor, dotLH );
	float G = G_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( G * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE  = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS  = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
vec3 BRDF_Specular_GGX_Environment( const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 brdf = integrateSpecularBRDF( dotNV, roughness );
	return specularColor * brdf.x + brdf.y;
}
void BRDF_Specular_Multiscattering_Environment( const in GeometricContext geometry, const in vec3 specularColor, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
	float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
	vec3 F = F_Schlick_RoughnessDependent( specularColor, dotNV, roughness );
	vec2 brdf = integrateSpecularBRDF( dotNV, roughness );
	vec3 FssEss = F * brdf.x + brdf.y;
	float Ess = brdf.x + brdf.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_Specular_BlinnPhong( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );
	float dotNH = saturate( dot( geometry.normal, halfDir ) );
	float dotLH = saturate( dot( incidentLight.direction, halfDir ) );
	vec3 F = F_Schlick( specularColor, dotLH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
float GGXRoughnessToBlinnExponent( const in float ggxRoughness ) {
	return ( 2.0 / pow2( ggxRoughness + 0.0001 ) - 2.0 );
}
float BlinnExponentToGGXRoughness( const in float blinnExponent ) {
	return sqrt( 2.0 / ( blinnExponent + 2.0 ) );
}
#if defined( USE_SHEEN )
float D_Charlie(float roughness, float NoH) {
	float invAlpha  = 1.0 / roughness;
	float cos2h = NoH * NoH;
	float sin2h = max(1.0 - cos2h, 0.0078125);	return (2.0 + invAlpha) * pow(sin2h, invAlpha * 0.5) / (2.0 * PI);
}
float V_Neubelt(float NoV, float NoL) {
	return saturate(1.0 / (4.0 * (NoL + NoV - NoL * NoV)));
}
vec3 BRDF_Specular_Sheen( const in float roughness, const in vec3 L, const in GeometricContext geometry, vec3 specularColor ) {
	vec3 N = geometry.normal;
	vec3 V = geometry.viewDir;
	vec3 H = normalize( V + L );
	float dotNH = saturate( dot( N, H ) );
	return specularColor * D_Charlie( roughness, dotNH ) * V_Neubelt( dot(N, V), dot(N, L) );
}
#endif`, Md = `#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy ) {
		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 );
		fDet *= ( float( gl_FrontFacing ) * 2.0 - 1.0 );
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`, bd = `#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vViewPosition, plane.xyz ) > plane.w ) discard;
	}
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vViewPosition, plane.xyz ) > plane.w ) && clipped;
		}
		if ( clipped ) discard;
	#endif
#endif`, Ed = `#if NUM_CLIPPING_PLANES > 0
	#if ! defined( STANDARD ) && ! defined( PHONG ) && ! defined( MATCAP )
		varying vec3 vViewPosition;
	#endif
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`, Sd = `#if NUM_CLIPPING_PLANES > 0 && ! defined( STANDARD ) && ! defined( PHONG ) && ! defined( MATCAP )
	varying vec3 vViewPosition;
#endif`, Td = `#if NUM_CLIPPING_PLANES > 0 && ! defined( STANDARD ) && ! defined( PHONG ) && ! defined( MATCAP )
	vViewPosition = - mvPosition.xyz;
#endif`, Ad = `#ifdef USE_COLOR
	diffuseColor.rgb *= vColor;
#endif`, Ld = `#ifdef USE_COLOR
	varying vec3 vColor;
#endif`, Cd = `#ifdef USE_COLOR
	varying vec3 vColor;
#endif`, Rd = `#ifdef USE_COLOR
	vColor.xyz = color.xyz;
#endif`, Pd = `#define PI 3.14159265359
#define PI2 6.28318530718
#define PI_HALF 1.5707963267949
#define RECIPROCAL_PI 0.31830988618
#define RECIPROCAL_PI2 0.15915494
#define LOG2 1.442695
#define EPSILON 1e-6
#ifndef saturate
#define saturate(a) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement(a) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract(sin(sn) * c);
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float max3( vec3 v ) { return max( max( v.x, v.y ), v.z ); }
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
vec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {
	float distance = dot( planeNormal, point - pointOnPlane );
	return - distance * planeNormal + point;
}
float sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {
	return sign( dot( point - pointOnPlane, planeNormal ) );
}
vec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {
	return lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float linearToRelativeLuminance( const in vec3 color ) {
	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
	return dot( weights, color.rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
  return m[ 2 ][ 3 ] == - 1.0;
}`, Dd = `#ifdef ENVMAP_TYPE_CUBE_UV
#define cubeUV_maxMipLevel 8.0
#define cubeUV_minMipLevel 4.0
#define cubeUV_maxTileSize 256.0
#define cubeUV_minTileSize 16.0
float getFace(vec3 direction) {
    vec3 absDirection = abs(direction);
    float face = -1.0;
    if (absDirection.x > absDirection.z) {
      if (absDirection.x > absDirection.y)
        face = direction.x > 0.0 ? 0.0 : 3.0;
      else
        face = direction.y > 0.0 ? 1.0 : 4.0;
    } else {
      if (absDirection.z > absDirection.y)
        face = direction.z > 0.0 ? 2.0 : 5.0;
      else
        face = direction.y > 0.0 ? 1.0 : 4.0;
    }
    return face;
}
vec2 getUV(vec3 direction, float face) {
    vec2 uv;
    if (face == 0.0) {
      uv = vec2(-direction.z, direction.y) / abs(direction.x);
    } else if (face == 1.0) {
      uv = vec2(direction.x, -direction.z) / abs(direction.y);
    } else if (face == 2.0) {
      uv = direction.xy / abs(direction.z);
    } else if (face == 3.0) {
      uv = vec2(direction.z, direction.y) / abs(direction.x);
    } else if (face == 4.0) {
      uv = direction.xz / abs(direction.y);
    } else {
      uv = vec2(-direction.x, direction.y) / abs(direction.z);
    }
    return 0.5 * (uv + 1.0);
}
vec3 bilinearCubeUV(sampler2D envMap, vec3 direction, float mipInt) {
  float face = getFace(direction);
  float filterInt = max(cubeUV_minMipLevel - mipInt, 0.0);
  mipInt = max(mipInt, cubeUV_minMipLevel);
  float faceSize = exp2(mipInt);
  float texelSize = 1.0 / (3.0 * cubeUV_maxTileSize);
  vec2 uv = getUV(direction, face) * (faceSize - 1.0);
  vec2 f = fract(uv);
  uv += 0.5 - f;
  if (face > 2.0) {
    uv.y += faceSize;
    face -= 3.0;
  }
  uv.x += face * faceSize;
  if(mipInt < cubeUV_maxMipLevel){
    uv.y += 2.0 * cubeUV_maxTileSize;
  }
  uv.y += filterInt * 2.0 * cubeUV_minTileSize;
  uv.x += 3.0 * max(0.0, cubeUV_maxTileSize - 2.0 * faceSize);
  uv *= texelSize;
  vec3 tl = envMapTexelToLinear(texture2D(envMap, uv)).rgb;
  uv.x += texelSize;
  vec3 tr = envMapTexelToLinear(texture2D(envMap, uv)).rgb;
  uv.y += texelSize;
  vec3 br = envMapTexelToLinear(texture2D(envMap, uv)).rgb;
  uv.x -= texelSize;
  vec3 bl = envMapTexelToLinear(texture2D(envMap, uv)).rgb;
  vec3 tm = mix(tl, tr, f.x);
  vec3 bm = mix(bl, br, f.x);
  return mix(tm, bm, f.y);
}
#define r0 1.0
#define v0 0.339
#define m0 -2.0
#define r1 0.8
#define v1 0.276
#define m1 -1.0
#define r4 0.4
#define v4 0.046
#define m4 2.0
#define r5 0.305
#define v5 0.016
#define m5 3.0
#define r6 0.21
#define v6 0.0038
#define m6 4.0
float roughnessToMip(float roughness) {
  float mip = 0.0;
  if (roughness >= r1) {
    mip = (r0 - roughness) * (m1 - m0) / (r0 - r1) + m0;
  } else if (roughness >= r4) {
    mip = (r1 - roughness) * (m4 - m1) / (r1 - r4) + m1;
  } else if (roughness >= r5) {
    mip = (r4 - roughness) * (m5 - m4) / (r4 - r5) + m4;
  } else if (roughness >= r6) {
    mip = (r5 - roughness) * (m6 - m5) / (r5 - r6) + m5;
  } else {
    mip = -2.0 * log2(1.16 * roughness);  }
  return mip;
}
vec4 textureCubeUV(sampler2D envMap, vec3 sampleDir, float roughness) {
  float mip = clamp(roughnessToMip(roughness), m0, cubeUV_maxMipLevel);
  float mipF = fract(mip);
  float mipInt = floor(mip);
  vec3 color0 = bilinearCubeUV(envMap, sampleDir, mipInt);
  if (mipF == 0.0) {
    return vec4(color0, 1.0);
  } else {
    vec3 color1 = bilinearCubeUV(envMap, sampleDir, mipInt + 1.0);
    return vec4(mix(color0, color1, mipF), 1.0);
  }
}
#endif`, Id = `vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	transformedNormal = mat3( instanceMatrix ) * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`, Od = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`, Nd = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`, Fd = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	emissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`, Bd = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`, zd = "gl_FragColor = linearToOutputTexel( gl_FragColor );", Ud = `
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 GammaToLinear( in vec4 value, in float gammaFactor ) {
	return vec4( pow( value.rgb, vec3( gammaFactor ) ), value.a );
}
vec4 LinearToGamma( in vec4 value, in float gammaFactor ) {
	return vec4( pow( value.rgb, vec3( 1.0 / gammaFactor ) ), value.a );
}
vec4 sRGBToLinear( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 RGBEToLinear( in vec4 value ) {
	return vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );
}
vec4 LinearToRGBE( in vec4 value ) {
	float maxComponent = max( max( value.r, value.g ), value.b );
	float fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );
	return vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );
}
vec4 RGBMToLinear( in vec4 value, in float maxRange ) {
	return vec4( value.rgb * value.a * maxRange, 1.0 );
}
vec4 LinearToRGBM( in vec4 value, in float maxRange ) {
	float maxRGB = max( value.r, max( value.g, value.b ) );
	float M = clamp( maxRGB / maxRange, 0.0, 1.0 );
	M = ceil( M * 255.0 ) / 255.0;
	return vec4( value.rgb / ( M * maxRange ), M );
}
vec4 RGBDToLinear( in vec4 value, in float maxRange ) {
	return vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );
}
vec4 LinearToRGBD( in vec4 value, in float maxRange ) {
	float maxRGB = max( value.r, max( value.g, value.b ) );
	float D = max( maxRange / maxRGB, 1.0 );
	D = clamp( floor( D ) / 255.0, 0.0, 1.0 );
	return vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );
}
const mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );
vec4 LinearToLogLuv( in vec4 value )  {
	vec3 Xp_Y_XYZp = cLogLuvM * value.rgb;
	Xp_Y_XYZp = max( Xp_Y_XYZp, vec3( 1e-6, 1e-6, 1e-6 ) );
	vec4 vResult;
	vResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;
	float Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;
	vResult.w = fract( Le );
	vResult.z = ( Le - ( floor( vResult.w * 255.0 ) ) / 255.0 ) / 255.0;
	return vResult;
}
const mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );
vec4 LogLuvToLinear( in vec4 value ) {
	float Le = value.z * 255.0 + value.w;
	vec3 Xp_Y_XYZp;
	Xp_Y_XYZp.y = exp2( ( Le - 127.0 ) / 2.0 );
	Xp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;
	Xp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;
	vec3 vRGB = cLogLuvInverseM * Xp_Y_XYZp.rgb;
	return vec4( max( vRGB, 0.0 ), 1.0 );
}`, Gd = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		}  else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#elif defined( ENVMAP_TYPE_EQUIREC )
		vec2 sampleUV;
		reflectVec = normalize( reflectVec );
		sampleUV.y = asin( clamp( reflectVec.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
		sampleUV.x = atan( reflectVec.z, reflectVec.x ) * RECIPROCAL_PI2 + 0.5;
		vec4 envColor = texture2D( envMap, sampleUV );
	#elif defined( ENVMAP_TYPE_SPHERE )
		reflectVec = normalize( reflectVec );
		vec3 reflectView = normalize( ( viewMatrix * vec4( reflectVec, 0.0 ) ).xyz + vec3( 0.0, 0.0, 1.0 ) );
		vec4 envColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifndef ENVMAP_TYPE_CUBE_UV
		envColor = envMapTexelToLinear( envColor );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`, Vd = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform int maxMipLevel;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`, Hd = `#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`, kd = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`, Wd = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) { 
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`, jd = `#ifdef USE_FOG
	fogDepth = -mvPosition.z;
#endif`, qd = `#ifdef USE_FOG
	varying float fogDepth;
#endif`, Xd = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * fogDepth * fogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, fogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`, Yd = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float fogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`, Zd = `#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return texture2D( gradientMap, coord ).rgb;
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`, Jd = `#ifdef USE_LIGHTMAP
	vec4 lightMapTexel= texture2D( lightMap, vUv2 );
	reflectedLight.indirectDiffuse += PI * lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
#endif`, $d = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`, Qd = `vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointDirectLightIrradiance( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
		#endif
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotDirectLightIrradiance( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
		#endif
	}
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalDirectLightIrradiance( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
		#endif
	}
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry );
		#endif
	}
#endif`, Kd = `uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in GeometricContext geometry ) {
	vec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	return irradiance;
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
		int shadow;
		float shadowBias;
		float shadowRadius;
		vec2 shadowMapSize;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalDirectLightIrradiance( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight directLight ) {
		directLight.color = directionalLight.color;
		directLight.direction = directionalLight.direction;
		directLight.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
		int shadow;
		float shadowBias;
		float shadowRadius;
		vec2 shadowMapSize;
		float shadowCameraNear;
		float shadowCameraFar;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointDirectLightIrradiance( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight directLight ) {
		vec3 lVector = pointLight.position - geometry.position;
		directLight.direction = normalize( lVector );
		float lightDistance = length( lVector );
		directLight.color = pointLight.color;
		directLight.color *= punctualLightIntensityToIrradianceFactor( lightDistance, pointLight.distance, pointLight.decay );
		directLight.visible = ( directLight.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
		int shadow;
		float shadowBias;
		float shadowRadius;
		vec2 shadowMapSize;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotDirectLightIrradiance( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight directLight  ) {
		vec3 lVector = spotLight.position - geometry.position;
		directLight.direction = normalize( lVector );
		float lightDistance = length( lVector );
		float angleCos = dot( directLight.direction, spotLight.direction );
		if ( angleCos > spotLight.coneCos ) {
			float spotEffect = smoothstep( spotLight.coneCos, spotLight.penumbraCos, angleCos );
			directLight.color = spotLight.color;
			directLight.color *= spotEffect * punctualLightIntensityToIrradianceFactor( lightDistance, spotLight.distance, spotLight.decay );
			directLight.visible = true;
		} else {
			directLight.color = vec3( 0.0 );
			directLight.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in GeometricContext geometry ) {
		float dotNL = dot( geometry.normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			irradiance *= PI;
		#endif
		return irradiance;
	}
#endif`, ep = `#if defined( USE_ENVMAP )
	#ifdef ENVMAP_MODE_REFRACTION
		uniform float refractionRatio;
	#endif
	vec3 getLightProbeIndirectIrradiance( const in GeometricContext geometry, const in int maxMIPLevel ) {
		vec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );
		#ifdef ENVMAP_TYPE_CUBE
			vec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );
			#ifdef TEXTURE_LOD_EXT
				vec4 envMapColor = textureCubeLodEXT( envMap, queryVec, float( maxMIPLevel ) );
			#else
				vec4 envMapColor = textureCube( envMap, queryVec, float( maxMIPLevel ) );
			#endif
			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;
		#elif defined( ENVMAP_TYPE_CUBE_UV )
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
		#else
			vec4 envMapColor = vec4( 0.0 );
		#endif
		return PI * envMapColor.rgb * envMapIntensity;
	}
	float getSpecularMIPLevel( const in float roughness, const in int maxMIPLevel ) {
		float maxMIPLevelScalar = float( maxMIPLevel );
		float sigma = PI * roughness * roughness / ( 1.0 + roughness );
		float desiredMIPLevel = maxMIPLevelScalar + log2( sigma );
		return clamp( desiredMIPLevel, 0.0, maxMIPLevelScalar );
	}
	vec3 getLightProbeIndirectRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in int maxMIPLevel ) {
		#ifdef ENVMAP_MODE_REFLECTION
		  vec3 reflectVec = reflect( -viewDir, normal );
		  reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
		#else
		  vec3 reflectVec = refract( -viewDir, normal, refractionRatio );
		#endif
		reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
		float specularMIPLevel = getSpecularMIPLevel( roughness, maxMIPLevel );
		#ifdef ENVMAP_TYPE_CUBE
			vec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );
			#ifdef TEXTURE_LOD_EXT
				vec4 envMapColor = textureCubeLodEXT( envMap, queryReflectVec, specularMIPLevel );
			#else
				vec4 envMapColor = textureCube( envMap, queryReflectVec, specularMIPLevel );
			#endif
			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;
		#elif defined( ENVMAP_TYPE_CUBE_UV )
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
		#elif defined( ENVMAP_TYPE_EQUIREC )
			vec2 sampleUV;
			sampleUV.y = asin( clamp( reflectVec.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
			sampleUV.x = atan( reflectVec.z, reflectVec.x ) * RECIPROCAL_PI2 + 0.5;
			#ifdef TEXTURE_LOD_EXT
				vec4 envMapColor = texture2DLodEXT( envMap, sampleUV, specularMIPLevel );
			#else
				vec4 envMapColor = texture2D( envMap, sampleUV, specularMIPLevel );
			#endif
			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;
		#elif defined( ENVMAP_TYPE_SPHERE )
			vec3 reflectView = normalize( ( viewMatrix * vec4( reflectVec, 0.0 ) ).xyz + vec3( 0.0,0.0,1.0 ) );
			#ifdef TEXTURE_LOD_EXT
				vec4 envMapColor = texture2DLodEXT( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );
			#else
				vec4 envMapColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );
			#endif
			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;
		#endif
		return envMapColor.rgb * envMapIntensity;
	}
#endif`, tp = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`, np = `varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
struct ToonMaterial {
	vec3	diffuseColor;
	vec3	specularColor;
	float	specularShininess;
	float	specularStrength;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`, rp = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`, ip = `varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
struct BlinnPhongMaterial {
	vec3	diffuseColor;
	vec3	specularColor;
	float	specularShininess;
	float	specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`, ap = `PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.specularRoughness = max( roughnessFactor, 0.0525 );material.specularRoughness += geometryRoughness;
material.specularRoughness = min( material.specularRoughness, 1.0 );
#ifdef REFLECTIVITY
	material.specularColor = mix( vec3( MAXIMUM_SPECULAR_COEFFICIENT * pow2( reflectivity ) ), diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( DEFAULT_SPECULAR_COEFFICIENT ), diffuseColor.rgb, metalnessFactor );
#endif
#ifdef CLEARCOAT
	material.clearcoat = saturate( clearcoat );	material.clearcoatRoughness = max( clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheen;
#endif`, sp = `struct PhysicalMaterial {
	vec3	diffuseColor;
	float	specularRoughness;
	vec3	specularColor;
#ifdef CLEARCOAT
	float clearcoat;
	float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
	vec3 sheenColor;
#endif
};
#define MAXIMUM_SPECULAR_COEFFICIENT 0.16
#define DEFAULT_SPECULAR_COEFFICIENT 0.04
float clearcoatDHRApprox( const in float roughness, const in float dotNL ) {
	return DEFAULT_SPECULAR_COEFFICIENT + ( 1.0 - DEFAULT_SPECULAR_COEFFICIENT ) * ( pow( 1.0 - dotNL, 5.0 ) * pow( 1.0 - roughness, 2.0 ) );
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.specularRoughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	#ifdef CLEARCOAT
		float ccDotNL = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = ccDotNL * directLight.color;
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			ccIrradiance *= PI;
		#endif
		float clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );
		reflectedLight.directSpecular += ccIrradiance * material.clearcoat * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );
	#else
		float clearcoatDHR = 0.0;
	#endif
	#ifdef USE_SHEEN
		reflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_Sheen(
			material.specularRoughness,
			directLight.direction,
			geometry,
			material.sheenColor
		);
	#else
		reflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.normal, material.specularColor, material.specularRoughness);
	#endif
	reflectedLight.directDiffuse += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef CLEARCOAT
		float ccDotNV = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		reflectedLight.indirectSpecular += clearcoatRadiance * material.clearcoat * BRDF_Specular_GGX_Environment( geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );
		float ccDotNL = ccDotNV;
		float clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );
	#else
		float clearcoatDHR = 0.0;
	#endif
	float clearcoatInv = 1.0 - clearcoatDHR;
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	BRDF_Specular_Multiscattering_Environment( geometry, material.specularColor, material.specularRoughness, singleScattering, multiScattering );
	vec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );
	reflectedLight.indirectSpecular += clearcoatInv * radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`, op = `
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#pragma unroll_loop
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointDirectLightIrradiance( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		directLight.color *= all( bvec3( pointLight.shadow, directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#pragma unroll_loop
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotDirectLightIrradiance( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		directLight.color *= all( bvec3( spotLight.shadow, directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#pragma unroll_loop
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalDirectLightIrradiance( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directLight.color *= all( bvec3( directionalLight.shadow, directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );
		}
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`, lp = `#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel= texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			lightMapIrradiance *= PI;
		#endif
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getLightProbeIndirectIrradiance( geometry, maxMipLevel );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.normal, material.specularRoughness, maxMipLevel );
	#ifdef CLEARCOAT
		clearcoatRadiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness, maxMipLevel );
	#endif
#endif`, cp = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`, up = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`, hp = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, fp = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`, dp = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`, pp = `#ifdef USE_MAP
	vec4 texelColor = texture2D( map, vUv );
	texelColor = mapTexelToLinear( texelColor );
	diffuseColor *= texelColor;
#endif`, vp = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`, mp = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	vec4 mapTexel = texture2D( map, uv );
	diffuseColor *= mapTexelToLinear( mapTexel );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`, gp = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, yp = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`, xp = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`, _p = `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
	objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
	objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
	objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
#endif`, wp = `#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifndef USE_MORPHNORMALS
	uniform float morphTargetInfluences[ 8 ];
	#else
	uniform float morphTargetInfluences[ 4 ];
	#endif
#endif`, Mp = `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	transformed += morphTarget0 * morphTargetInfluences[ 0 ];
	transformed += morphTarget1 * morphTargetInfluences[ 1 ];
	transformed += morphTarget2 * morphTargetInfluences[ 2 ];
	transformed += morphTarget3 * morphTargetInfluences[ 3 ];
	#ifndef USE_MORPHNORMALS
	transformed += morphTarget4 * morphTargetInfluences[ 4 ];
	transformed += morphTarget5 * morphTargetInfluences[ 5 ];
	transformed += morphTarget6 * morphTargetInfluences[ 6 ];
	transformed += morphTarget7 * morphTargetInfluences[ 7 ];
	#endif
#endif`, bp = `#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * ( float( gl_FrontFacing ) * 2.0 - 1.0 );
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * ( float( gl_FrontFacing ) * 2.0 - 1.0 );
			bitangent = bitangent * ( float( gl_FrontFacing ) * 2.0 - 1.0 );
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`, Ep = `#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * ( float( gl_FrontFacing ) * 2.0 - 1.0 );
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( -vViewPosition, normal, mapN );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );
#endif`, Sp = `#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN ) {
		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		float scale = sign( st1.t * st0.s - st0.t * st1.s );
		vec3 S = normalize( ( q0 * st1.t - q1 * st0.t ) * scale );
		vec3 T = normalize( ( - q0 * st1.s + q1 * st0.s ) * scale );
		vec3 N = normalize( surf_norm );
		mat3 tsn = mat3( S, T, N );
		mapN.xy *= ( float( gl_FrontFacing ) * 2.0 - 1.0 );
		return normalize( tsn * mapN );
	}
#endif`, Tp = `#ifdef CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`, Ap = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN );
	#endif
#endif`, Lp = `#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`, Cp = `vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256.,  256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ));
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w);
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return (( near + viewZ ) * far ) / (( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`, Rp = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`, Pp = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`, Dp = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`, Ip = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`, Op = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`, Np = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`, Fp = `#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`, Bp = `#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`, zp = `#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * worldPosition;
	}
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * worldPosition;
	}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * worldPosition;
	}
	#endif
#endif`, Up = `float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLight directionalLight;
	#pragma unroll_loop
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLights[ i ];
		shadow *= all( bvec2( directionalLight.shadow, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLight spotLight;
	#pragma unroll_loop
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLights[ i ];
		shadow *= all( bvec2( spotLight.shadow, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLight pointLight;
	#pragma unroll_loop
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLights[ i ];
		shadow *= all( bvec2( pointLight.shadow, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#endif
	#endif
	return shadow;
}`, Gp = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`, Vp = `#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	#ifdef BONE_TEXTURE
		uniform highp sampler2D boneTexture;
		uniform int boneTextureSize;
		mat4 getBoneMatrix( const in float i ) {
			float j = i * 4.0;
			float x = mod( j, float( boneTextureSize ) );
			float y = floor( j / float( boneTextureSize ) );
			float dx = 1.0 / float( boneTextureSize );
			float dy = 1.0 / float( boneTextureSize );
			y = dy * ( y + 0.5 );
			vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
			vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
			vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
			vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
			mat4 bone = mat4( v1, v2, v3, v4 );
			return bone;
		}
	#else
		uniform mat4 boneMatrices[ MAX_BONES ];
		mat4 getBoneMatrix( const in float i ) {
			mat4 bone = boneMatrices[ int(i) ];
			return bone;
		}
	#endif
#endif`, Hp = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`, kp = `#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix  = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`, Wp = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`, jp = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`, qp = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`, Xp = `#ifndef saturate
#define saturate(a) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
uniform float toneMappingWhitePoint;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
#define Uncharted2Helper( x ) max( ( ( x * ( 0.15 * x + 0.10 * 0.50 ) + 0.20 * 0.02 ) / ( x * ( 0.15 * x + 0.50 ) + 0.20 * 0.30 ) ) - 0.02 / 0.30, vec3( 0.0 ) )
vec3 Uncharted2ToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( Uncharted2Helper( color ) / Uncharted2Helper( vec3( toneMappingWhitePoint ) ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( ( color * ( 2.51 * color + 0.03 ) ) / ( color * ( 2.43 * color + 0.59 ) + 0.14 ) );
}`, Yp = `#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`, Zp = `#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`, Jp = `#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`, $p = `#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`, Qp = `#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`, Kp = `#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`, ev = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`, tv = `uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`, nv = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`, rv = `#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`, iv = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, av = `#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - gl_FragCoord.z ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( gl_FragCoord.z );
	#endif
}`, sv = `#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
}`, ov = `#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`, lv = `#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`, cv = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV;
	sampleUV.y = asin( clamp( direction.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	sampleUV.x = atan( direction.z, direction.x ) * RECIPROCAL_PI2 + 0.5;
	vec4 texColor = texture2D( tEquirect, sampleUV );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`, uv = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`, hv = `uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, fv = `uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	vLineDistance = scale * lineDistance;
	vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, dv = `uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
	
		vec4 lightMapTexel= texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, pv = `#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <skinbase_vertex>
	#ifdef USE_ENVMAP
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`, vv = `uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	reflectedLight.indirectDiffuse = getAmbientLightIrradiance( ambientLightColor );
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, mv = `#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, gv = `#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <fog_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
		matcapColor = matcapTexelToLinear( matcapColor );
	#else
		vec4 matcapColor = vec4( 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, yv = `#define MATCAP
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#ifndef FLAT_SHADED
		vNormal = normalize( transformedNormal );
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`, xv = `#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, _v = `#define TOON
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, wv = `#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Mv = `#define PHONG
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, bv = `#define STANDARD
#ifdef PHYSICAL
	#define REFLECTIVITY
	#define CLEARCOAT
	#define TRANSPARENCY
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef TRANSPARENCY
	uniform float transparency;
#endif
#ifdef REFLECTIVITY
	uniform float reflectivity;
#endif
#ifdef CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheen;
#endif
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <lights_physical_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_normalmap_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#ifdef TRANSPARENCY
		diffuseColor.a *= saturate( 1. - transparency + linearToRelativeLuminance( reflectedLight.directSpecular + reflectedLight.indirectSpecular ) );
	#endif
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Ev = `#define STANDARD
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, Sv = `#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <packing>
#include <uv_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
}`, Tv = `#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`, Av = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, Lv = `uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`, Cv = `uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`, Rv = `#include <fog_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <begin_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, Pv = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`, Dv = `uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, Re = {
  alphamap_fragment: pd,
  alphamap_pars_fragment: vd,
  alphatest_fragment: md,
  aomap_fragment: gd,
  aomap_pars_fragment: yd,
  begin_vertex: xd,
  beginnormal_vertex: _d,
  bsdfs: wd,
  bumpmap_pars_fragment: Md,
  clipping_planes_fragment: bd,
  clipping_planes_pars_fragment: Ed,
  clipping_planes_pars_vertex: Sd,
  clipping_planes_vertex: Td,
  color_fragment: Ad,
  color_pars_fragment: Ld,
  color_pars_vertex: Cd,
  color_vertex: Rd,
  common: Pd,
  cube_uv_reflection_fragment: Dd,
  defaultnormal_vertex: Id,
  displacementmap_pars_vertex: Od,
  displacementmap_vertex: Nd,
  emissivemap_fragment: Fd,
  emissivemap_pars_fragment: Bd,
  encodings_fragment: zd,
  encodings_pars_fragment: Ud,
  envmap_fragment: Gd,
  envmap_common_pars_fragment: Vd,
  envmap_pars_fragment: Hd,
  envmap_pars_vertex: kd,
  envmap_physical_pars_fragment: ep,
  envmap_vertex: Wd,
  fog_vertex: jd,
  fog_pars_vertex: qd,
  fog_fragment: Xd,
  fog_pars_fragment: Yd,
  gradientmap_pars_fragment: Zd,
  lightmap_fragment: Jd,
  lightmap_pars_fragment: $d,
  lights_lambert_vertex: Qd,
  lights_pars_begin: Kd,
  lights_toon_fragment: tp,
  lights_toon_pars_fragment: np,
  lights_phong_fragment: rp,
  lights_phong_pars_fragment: ip,
  lights_physical_fragment: ap,
  lights_physical_pars_fragment: sp,
  lights_fragment_begin: op,
  lights_fragment_maps: lp,
  lights_fragment_end: cp,
  logdepthbuf_fragment: up,
  logdepthbuf_pars_fragment: hp,
  logdepthbuf_pars_vertex: fp,
  logdepthbuf_vertex: dp,
  map_fragment: pp,
  map_pars_fragment: vp,
  map_particle_fragment: mp,
  map_particle_pars_fragment: gp,
  metalnessmap_fragment: yp,
  metalnessmap_pars_fragment: xp,
  morphnormal_vertex: _p,
  morphtarget_pars_vertex: wp,
  morphtarget_vertex: Mp,
  normal_fragment_begin: bp,
  normal_fragment_maps: Ep,
  normalmap_pars_fragment: Sp,
  clearcoat_normal_fragment_begin: Tp,
  clearcoat_normal_fragment_maps: Ap,
  clearcoat_normalmap_pars_fragment: Lp,
  packing: Cp,
  premultiplied_alpha_fragment: Rp,
  project_vertex: Pp,
  dithering_fragment: Dp,
  dithering_pars_fragment: Ip,
  roughnessmap_fragment: Op,
  roughnessmap_pars_fragment: Np,
  shadowmap_pars_fragment: Fp,
  shadowmap_pars_vertex: Bp,
  shadowmap_vertex: zp,
  shadowmask_pars_fragment: Up,
  skinbase_vertex: Gp,
  skinning_pars_vertex: Vp,
  skinning_vertex: Hp,
  skinnormal_vertex: kp,
  specularmap_fragment: Wp,
  specularmap_pars_fragment: jp,
  tonemapping_fragment: qp,
  tonemapping_pars_fragment: Xp,
  uv_pars_fragment: Yp,
  uv_pars_vertex: Zp,
  uv_vertex: Jp,
  uv2_pars_fragment: $p,
  uv2_pars_vertex: Qp,
  uv2_vertex: Kp,
  worldpos_vertex: ev,
  background_frag: tv,
  background_vert: nv,
  cube_frag: rv,
  cube_vert: iv,
  depth_frag: av,
  depth_vert: sv,
  distanceRGBA_frag: ov,
  distanceRGBA_vert: lv,
  equirect_frag: cv,
  equirect_vert: uv,
  linedashed_frag: hv,
  linedashed_vert: fv,
  meshbasic_frag: dv,
  meshbasic_vert: pv,
  meshlambert_frag: vv,
  meshlambert_vert: mv,
  meshmatcap_frag: gv,
  meshmatcap_vert: yv,
  meshtoon_frag: xv,
  meshtoon_vert: _v,
  meshphong_frag: wv,
  meshphong_vert: Mv,
  meshphysical_frag: bv,
  meshphysical_vert: Ev,
  normal_frag: Sv,
  normal_vert: Tv,
  points_frag: Av,
  points_vert: Lv,
  shadow_frag: Cv,
  shadow_vert: Rv,
  sprite_frag: Pv,
  sprite_vert: Dv
}, gn = {
  basic: {
    uniforms: mt([
      J.common,
      J.specularmap,
      J.envmap,
      J.aomap,
      J.lightmap,
      J.fog
    ]),
    vertexShader: Re.meshbasic_vert,
    fragmentShader: Re.meshbasic_frag
  },
  lambert: {
    uniforms: mt([
      J.common,
      J.specularmap,
      J.envmap,
      J.aomap,
      J.lightmap,
      J.emissivemap,
      J.fog,
      J.lights,
      {
        emissive: { value: new ee(0) }
      }
    ]),
    vertexShader: Re.meshlambert_vert,
    fragmentShader: Re.meshlambert_frag
  },
  phong: {
    uniforms: mt([
      J.common,
      J.specularmap,
      J.envmap,
      J.aomap,
      J.lightmap,
      J.emissivemap,
      J.bumpmap,
      J.normalmap,
      J.displacementmap,
      J.fog,
      J.lights,
      {
        emissive: { value: new ee(0) },
        specular: { value: new ee(1118481) },
        shininess: { value: 30 }
      }
    ]),
    vertexShader: Re.meshphong_vert,
    fragmentShader: Re.meshphong_frag
  },
  standard: {
    uniforms: mt([
      J.common,
      J.envmap,
      J.aomap,
      J.lightmap,
      J.emissivemap,
      J.bumpmap,
      J.normalmap,
      J.displacementmap,
      J.roughnessmap,
      J.metalnessmap,
      J.fog,
      J.lights,
      {
        emissive: { value: new ee(0) },
        roughness: { value: 0.5 },
        metalness: { value: 0.5 },
        envMapIntensity: { value: 1 }
        // temporary
      }
    ]),
    vertexShader: Re.meshphysical_vert,
    fragmentShader: Re.meshphysical_frag
  },
  toon: {
    uniforms: mt([
      J.common,
      J.specularmap,
      J.aomap,
      J.lightmap,
      J.emissivemap,
      J.bumpmap,
      J.normalmap,
      J.displacementmap,
      J.gradientmap,
      J.fog,
      J.lights,
      {
        emissive: { value: new ee(0) },
        specular: { value: new ee(1118481) },
        shininess: { value: 30 }
      }
    ]),
    vertexShader: Re.meshtoon_vert,
    fragmentShader: Re.meshtoon_frag
  },
  matcap: {
    uniforms: mt([
      J.common,
      J.bumpmap,
      J.normalmap,
      J.displacementmap,
      J.fog,
      {
        matcap: { value: null }
      }
    ]),
    vertexShader: Re.meshmatcap_vert,
    fragmentShader: Re.meshmatcap_frag
  },
  points: {
    uniforms: mt([
      J.points,
      J.fog
    ]),
    vertexShader: Re.points_vert,
    fragmentShader: Re.points_frag
  },
  dashed: {
    uniforms: mt([
      J.common,
      J.fog,
      {
        scale: { value: 1 },
        dashSize: { value: 1 },
        totalSize: { value: 2 }
      }
    ]),
    vertexShader: Re.linedashed_vert,
    fragmentShader: Re.linedashed_frag
  },
  depth: {
    uniforms: mt([
      J.common,
      J.displacementmap
    ]),
    vertexShader: Re.depth_vert,
    fragmentShader: Re.depth_frag
  },
  normal: {
    uniforms: mt([
      J.common,
      J.bumpmap,
      J.normalmap,
      J.displacementmap,
      {
        opacity: { value: 1 }
      }
    ]),
    vertexShader: Re.normal_vert,
    fragmentShader: Re.normal_frag
  },
  sprite: {
    uniforms: mt([
      J.sprite,
      J.fog
    ]),
    vertexShader: Re.sprite_vert,
    fragmentShader: Re.sprite_frag
  },
  background: {
    uniforms: {
      uvTransform: { value: new gt() },
      t2D: { value: null }
    },
    vertexShader: Re.background_vert,
    fragmentShader: Re.background_frag
  },
  /* -------------------------------------------------------------------------
  //	Cube map shader
   ------------------------------------------------------------------------- */
  cube: {
    uniforms: mt([
      J.envmap,
      {
        opacity: { value: 1 }
      }
    ]),
    vertexShader: Re.cube_vert,
    fragmentShader: Re.cube_frag
  },
  equirect: {
    uniforms: {
      tEquirect: { value: null }
    },
    vertexShader: Re.equirect_vert,
    fragmentShader: Re.equirect_frag
  },
  distanceRGBA: {
    uniforms: mt([
      J.common,
      J.displacementmap,
      {
        referencePosition: { value: new b() },
        nearDistance: { value: 1 },
        farDistance: { value: 1e3 }
      }
    ]),
    vertexShader: Re.distanceRGBA_vert,
    fragmentShader: Re.distanceRGBA_frag
  },
  shadow: {
    uniforms: mt([
      J.lights,
      J.fog,
      {
        color: { value: new ee(0) },
        opacity: { value: 1 }
      }
    ]),
    vertexShader: Re.shadow_vert,
    fragmentShader: Re.shadow_frag
  }
};
gn.physical = {
  uniforms: mt([
    gn.standard.uniforms,
    {
      transparency: { value: 0 },
      clearcoat: { value: 0 },
      clearcoatRoughness: { value: 0 },
      sheen: { value: new ee(0) },
      clearcoatNormalScale: { value: new G(1, 1) },
      clearcoatNormalMap: { value: null }
    }
  ]),
  vertexShader: Re.meshphysical_vert,
  fragmentShader: Re.meshphysical_frag
};
function Iv(e, t, n, r) {
  var i = new ee(0), a = 0, s, o, l = null, c = 0, u = null;
  function h(d, p, v, m) {
    var y = p.background, x = e.xr, M = x.getSession && x.getSession();
    if (M && M.environmentBlendMode === "additive" && (y = null), y === null ? f(i, a) : y && y.isColor && (f(y, 1), m = !0), (e.autoClear || m) && e.clear(e.autoClearColor, e.autoClearDepth, e.autoClearStencil), y && (y.isCubeTexture || y.isWebGLCubeRenderTarget || y.mapping === fa)) {
      o === void 0 && (o = new et(
        new ks(1, 1, 1),
        new St({
          type: "BackgroundCubeMaterial",
          uniforms: kr(gn.cube.uniforms),
          vertexShader: gn.cube.vertexShader,
          fragmentShader: gn.cube.fragmentShader,
          side: ht,
          depthTest: !1,
          depthWrite: !1,
          fog: !1
        })
      ), o.geometry.deleteAttribute("normal"), o.geometry.deleteAttribute("uv"), o.onBeforeRender = function(w, A, C) {
        this.matrixWorld.copyPosition(C.matrixWorld);
      }, Object.defineProperty(o.material, "envMap", {
        get: function() {
          return this.uniforms.envMap.value;
        }
      }), n.update(o));
      var E = y.isWebGLCubeRenderTarget ? y.texture : y;
      o.material.uniforms.envMap.value = E, o.material.uniforms.flipEnvMap.value = E.isCubeTexture ? -1 : 1, (l !== y || c !== E.version || u !== e.toneMapping) && (o.material.needsUpdate = !0, l = y, c = E.version, u = e.toneMapping), d.unshift(o, o.geometry, o.material, 0, 0, null);
    } else y && y.isTexture && (s === void 0 && (s = new et(
      new qr(2, 2),
      new St({
        type: "BackgroundMaterial",
        uniforms: kr(gn.background.uniforms),
        vertexShader: gn.background.vertexShader,
        fragmentShader: gn.background.fragmentShader,
        side: ua,
        depthTest: !1,
        depthWrite: !1,
        fog: !1
      })
    ), s.geometry.deleteAttribute("normal"), Object.defineProperty(s.material, "map", {
      get: function() {
        return this.uniforms.t2D.value;
      }
    }), n.update(s)), s.material.uniforms.t2D.value = y, y.matrixAutoUpdate === !0 && y.updateMatrix(), s.material.uniforms.uvTransform.value.copy(y.matrix), (l !== y || c !== y.version || u !== e.toneMapping) && (s.material.needsUpdate = !0, l = y, c = y.version, u = e.toneMapping), d.unshift(s, s.geometry, s.material, 0, 0, null));
  }
  function f(d, p) {
    t.buffers.color.setClear(d.r, d.g, d.b, p, r);
  }
  return {
    getClearColor: function() {
      return i;
    },
    setClearColor: function(d, p) {
      i.set(d), a = p !== void 0 ? p : 1, f(i, a);
    },
    getClearAlpha: function() {
      return a;
    },
    setClearAlpha: function(d) {
      a = d, f(i, a);
    },
    render: h
  };
}
function Ov(e, t, n, r) {
  var i = r.isWebGL2, a;
  function s(c) {
    a = c;
  }
  function o(c, u) {
    e.drawArrays(a, c, u), n.update(u, a);
  }
  function l(c, u, h, f) {
    if (f !== 0) {
      var d, p;
      if (i)
        d = e, p = "drawArraysInstanced";
      else if (d = t.get("ANGLE_instanced_arrays"), p = "drawArraysInstancedANGLE", d === null) {
        console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
        return;
      }
      d[p](a, u, h, f), n.update(h, a, f);
    }
  }
  this.setMode = s, this.render = o, this.renderInstances = l;
}
function Nv(e, t, n) {
  var r;
  function i() {
    if (r !== void 0) return r;
    var A = t.get("EXT_texture_filter_anisotropic");
    return A !== null ? r = e.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT) : r = 0, r;
  }
  function a(A) {
    if (A === "highp") {
      if (e.getShaderPrecisionFormat(35633, 36338).precision > 0 && e.getShaderPrecisionFormat(35632, 36338).precision > 0)
        return "highp";
      A = "mediump";
    }
    return A === "mediump" && e.getShaderPrecisionFormat(35633, 36337).precision > 0 && e.getShaderPrecisionFormat(35632, 36337).precision > 0 ? "mediump" : "lowp";
  }
  var s = typeof WebGL2RenderingContext != "undefined" && e instanceof WebGL2RenderingContext || typeof WebGL2ComputeRenderingContext != "undefined" && e instanceof WebGL2ComputeRenderingContext, o = n.precision !== void 0 ? n.precision : "highp", l = a(o);
  l !== o && (console.warn("THREE.WebGLRenderer:", o, "not supported, using", l, "instead."), o = l);
  var c = n.logarithmicDepthBuffer === !0, u = e.getParameter(34930), h = e.getParameter(35660), f = e.getParameter(3379), d = e.getParameter(34076), p = e.getParameter(34921), v = e.getParameter(36347), m = e.getParameter(36348), y = e.getParameter(36349), x = h > 0, M = s || !!t.get("OES_texture_float"), E = x && M, w = s ? e.getParameter(36183) : 0;
  return {
    isWebGL2: s,
    getMaxAnisotropy: i,
    getMaxPrecision: a,
    precision: o,
    logarithmicDepthBuffer: c,
    maxTextures: u,
    maxVertexTextures: h,
    maxTextureSize: f,
    maxCubemapSize: d,
    maxAttributes: p,
    maxVertexUniforms: v,
    maxVaryings: m,
    maxFragmentUniforms: y,
    vertexTextures: x,
    floatFragmentTextures: M,
    floatVertexTextures: E,
    maxSamples: w
  };
}
function Fv() {
  var e = this, t = null, n = 0, r = !1, i = !1, a = new Kt(), s = new gt(), o = { value: null, needsUpdate: !1 };
  this.uniform = o, this.numPlanes = 0, this.numIntersection = 0, this.init = function(u, h, f) {
    var d = u.length !== 0 || h || // enable state of previous frame - the clipping code has to
    // run another frame in order to reset the state:
    n !== 0 || r;
    return r = h, t = c(u, f, 0), n = u.length, d;
  }, this.beginShadows = function() {
    i = !0, c(null);
  }, this.endShadows = function() {
    i = !1, l();
  }, this.setState = function(u, h, f, d, p, v) {
    if (!r || u === null || u.length === 0 || i && !f)
      i ? c(null) : l();
    else {
      var m = i ? 0 : n, y = m * 4, x = p.clippingState || null;
      o.value = x, x = c(u, d, y, v);
      for (var M = 0; M !== y; ++M)
        x[M] = t[M];
      p.clippingState = x, this.numIntersection = h ? this.numPlanes : 0, this.numPlanes += m;
    }
  };
  function l() {
    o.value !== t && (o.value = t, o.needsUpdate = n > 0), e.numPlanes = n, e.numIntersection = 0;
  }
  function c(u, h, f, d) {
    var p = u !== null ? u.length : 0, v = null;
    if (p !== 0) {
      if (v = o.value, d !== !0 || v === null) {
        var m = f + p * 4, y = h.matrixWorldInverse;
        s.getNormalMatrix(y), (v === null || v.length < m) && (v = new Float32Array(m));
        for (var x = 0, M = f; x !== p; ++x, M += 4)
          a.copy(u[x]).applyMatrix4(y, s), a.normal.toArray(v, M), v[M + 3] = a.constant;
      }
      o.value = v, o.needsUpdate = !0;
    }
    return e.numPlanes = p, v;
  }
}
function Bv(e) {
  var t = {};
  return {
    get: function(n) {
      if (t[n] !== void 0)
        return t[n];
      var r;
      switch (n) {
        case "WEBGL_depth_texture":
          r = e.getExtension("WEBGL_depth_texture") || e.getExtension("MOZ_WEBGL_depth_texture") || e.getExtension("WEBKIT_WEBGL_depth_texture");
          break;
        case "EXT_texture_filter_anisotropic":
          r = e.getExtension("EXT_texture_filter_anisotropic") || e.getExtension("MOZ_EXT_texture_filter_anisotropic") || e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
          break;
        case "WEBGL_compressed_texture_s3tc":
          r = e.getExtension("WEBGL_compressed_texture_s3tc") || e.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
          break;
        case "WEBGL_compressed_texture_pvrtc":
          r = e.getExtension("WEBGL_compressed_texture_pvrtc") || e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
          break;
        default:
          r = e.getExtension(n);
      }
      return r === null && console.warn("THREE.WebGLRenderer: " + n + " extension not supported."), t[n] = r, r;
    }
  };
}
function zv(e, t, n) {
  var r = /* @__PURE__ */ new WeakMap(), i = /* @__PURE__ */ new WeakMap();
  function a(u) {
    var h = u.target, f = r.get(h);
    f.index !== null && t.remove(f.index);
    for (var d in f.attributes)
      t.remove(f.attributes[d]);
    h.removeEventListener("dispose", a), r.delete(h);
    var p = i.get(f);
    p && (t.remove(p), i.delete(f)), n.memory.geometries--;
  }
  function s(u, h) {
    var f = r.get(h);
    return f || (h.addEventListener("dispose", a), h.isBufferGeometry ? f = h : h.isGeometry && (h._bufferGeometry === void 0 && (h._bufferGeometry = new ne().setFromObject(u)), f = h._bufferGeometry), r.set(h, f), n.memory.geometries++, f);
  }
  function o(u) {
    var h = u.index, f = u.attributes;
    h !== null && t.update(h, 34963);
    for (var d in f)
      t.update(f[d], 34962);
    var p = u.morphAttributes;
    for (var d in p)
      for (var v = p[d], m = 0, y = v.length; m < y; m++)
        t.update(v[m], 34962);
  }
  function l(u) {
    var h = [], f = u.index, d = u.attributes.position, p = 0;
    if (f !== null) {
      var v = f.array;
      p = f.version;
      for (var m = 0, y = v.length; m < y; m += 3) {
        var x = v[m + 0], M = v[m + 1], E = v[m + 2];
        h.push(x, M, M, E, E, x);
      }
    } else {
      var v = d.array;
      p = d.version;
      for (var m = 0, y = v.length / 3 - 1; m < y; m += 3) {
        var x = m + 0, M = m + 1, E = m + 2;
        h.push(x, M, M, E, E, x);
      }
    }
    var w = new (Fu(h) > 65535 ? Di : Pi)(h, 1);
    w.version = p, t.update(w, 34963);
    var A = i.get(u);
    A && t.remove(A), i.set(u, w);
  }
  function c(u) {
    var h = i.get(u);
    if (h) {
      var f = u.index;
      f !== null && h.version < f.version && l(u);
    } else
      l(u);
    return i.get(u);
  }
  return {
    get: s,
    update: o,
    getWireframeAttribute: c
  };
}
function Uv(e, t, n, r) {
  var i = r.isWebGL2, a;
  function s(f) {
    a = f;
  }
  var o, l;
  function c(f) {
    o = f.type, l = f.bytesPerElement;
  }
  function u(f, d) {
    e.drawElements(a, d, o, f * l), n.update(d, a);
  }
  function h(f, d, p, v) {
    if (v !== 0) {
      var m, y;
      if (i)
        m = e, y = "drawElementsInstanced";
      else if (m = t.get("ANGLE_instanced_arrays"), y = "drawElementsInstancedANGLE", m === null) {
        console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
        return;
      }
      m[y](a, p, o, d * l, v), n.update(p, a, v);
    }
  }
  this.setMode = s, this.setIndex = c, this.render = u, this.renderInstances = h;
}
function Gv(e) {
  var t = {
    geometries: 0,
    textures: 0
  }, n = {
    frame: 0,
    calls: 0,
    triangles: 0,
    points: 0,
    lines: 0
  };
  function r(a, s, o) {
    switch (o = o || 1, n.calls++, s) {
      case 4:
        n.triangles += o * (a / 3);
        break;
      case 1:
        n.lines += o * (a / 2);
        break;
      case 3:
        n.lines += o * (a - 1);
        break;
      case 2:
        n.lines += o * a;
        break;
      case 0:
        n.points += o * a;
        break;
      default:
        console.error("THREE.WebGLInfo: Unknown draw mode:", s);
        break;
    }
  }
  function i() {
    n.frame++, n.calls = 0, n.triangles = 0, n.points = 0, n.lines = 0;
  }
  return {
    memory: t,
    render: n,
    programs: null,
    autoReset: !0,
    reset: i,
    update: r
  };
}
function Vv(e, t) {
  return Math.abs(t[1]) - Math.abs(e[1]);
}
function Hv(e) {
  var t = {}, n = new Float32Array(8);
  function r(i, a, s, o) {
    var l = i.morphTargetInfluences, c = l === void 0 ? 0 : l.length, u = t[a.id];
    if (u === void 0) {
      u = [];
      for (var h = 0; h < c; h++)
        u[h] = [h, 0];
      t[a.id] = u;
    }
    for (var f = s.morphTargets && a.morphAttributes.position, d = s.morphNormals && a.morphAttributes.normal, h = 0; h < c; h++) {
      var p = u[h];
      p[1] !== 0 && (f && a.deleteAttribute("morphTarget" + h), d && a.deleteAttribute("morphNormal" + h));
    }
    for (var h = 0; h < c; h++) {
      var p = u[h];
      p[0] = h, p[1] = l[h];
    }
    u.sort(Vv);
    for (var v = 0, h = 0; h < 8; h++) {
      var p = u[h];
      if (p) {
        var m = p[0], y = p[1];
        if (y) {
          f && a.setAttribute("morphTarget" + h, f[m]), d && a.setAttribute("morphNormal" + h, d[m]), n[h] = y, v += y;
          continue;
        }
      }
      n[h] = 0;
    }
    var x = a.morphTargetsRelative ? 1 : 1 - v;
    o.getUniforms().setValue(e, "morphTargetBaseInfluence", x), o.getUniforms().setValue(e, "morphTargetInfluences", n);
  }
  return {
    update: r
  };
}
function kv(e, t, n, r) {
  var i = {};
  function a(o) {
    var l = r.render.frame, c = o.geometry, u = t.get(o, c);
    return i[u.id] !== l && (c.isGeometry && u.updateFromObject(o), t.update(u), i[u.id] = l), o.isInstancedMesh && n.update(o.instanceMatrix, 34962), u;
  }
  function s() {
    i = {};
  }
  return {
    update: a,
    dispose: s
  };
}
function zn(e, t, n, r, i, a, s, o, l, c) {
  e = e !== void 0 ? e : [], t = t !== void 0 ? t : El, s = s !== void 0 ? s : ir, Ze.call(this, e, t, n, r, i, a, s, o, l, c), this.flipY = !1;
}
zn.prototype = Object.create(Ze.prototype);
zn.prototype.constructor = zn;
zn.prototype.isCubeTexture = !0;
Object.defineProperty(zn.prototype, "images", {
  get: function() {
    return this.image;
  },
  set: function(e) {
    this.image = e;
  }
});
function Oi(e, t, n, r) {
  Ze.call(this, null), this.image = { data: e || null, width: t || 1, height: n || 1, depth: r || 1 }, this.magFilter = ot, this.minFilter = ot, this.wrapR = Et, this.generateMipmaps = !1, this.flipY = !1, this.needsUpdate = !0;
}
Oi.prototype = Object.create(Ze.prototype);
Oi.prototype.constructor = Oi;
Oi.prototype.isDataTexture2DArray = !0;
function Ni(e, t, n, r) {
  Ze.call(this, null), this.image = { data: e || null, width: t || 1, height: n || 1, depth: r || 1 }, this.magFilter = ot, this.minFilter = ot, this.wrapR = Et, this.generateMipmaps = !1, this.flipY = !1, this.needsUpdate = !0;
}
Ni.prototype = Object.create(Ze.prototype);
Ni.prototype.constructor = Ni;
Ni.prototype.isDataTexture3D = !0;
var Uu = new Ze(), Wv = new Oi(), jv = new Ni(), Gu = new zn(), uc = [], hc = [], fc = new Float32Array(16), dc = new Float32Array(9), pc = new Float32Array(4);
function hi(e, t, n) {
  var r = e[0];
  if (r <= 0 || r > 0) return e;
  var i = t * n, a = uc[i];
  if (a === void 0 && (a = new Float32Array(i), uc[i] = a), t !== 0) {
    r.toArray(a, 0);
    for (var s = 1, o = 0; s !== t; ++s)
      o += n, e[s].toArray(a, o);
  }
  return a;
}
function zt(e, t) {
  if (e.length !== t.length) return !1;
  for (var n = 0, r = e.length; n < r; n++)
    if (e[n] !== t[n]) return !1;
  return !0;
}
function Dt(e, t) {
  for (var n = 0, r = t.length; n < r; n++)
    e[n] = t[n];
}
function Vu(e, t) {
  var n = hc[t];
  n === void 0 && (n = new Int32Array(t), hc[t] = n);
  for (var r = 0; r !== t; ++r)
    n[r] = e.allocateTextureUnit();
  return n;
}
function qv(e, t) {
  var n = this.cache;
  n[0] !== t && (e.uniform1f(this.addr, t), n[0] = t);
}
function Xv(e, t) {
  var n = this.cache;
  if (t.x !== void 0)
    (n[0] !== t.x || n[1] !== t.y) && (e.uniform2f(this.addr, t.x, t.y), n[0] = t.x, n[1] = t.y);
  else {
    if (zt(n, t)) return;
    e.uniform2fv(this.addr, t), Dt(n, t);
  }
}
function Yv(e, t) {
  var n = this.cache;
  if (t.x !== void 0)
    (n[0] !== t.x || n[1] !== t.y || n[2] !== t.z) && (e.uniform3f(this.addr, t.x, t.y, t.z), n[0] = t.x, n[1] = t.y, n[2] = t.z);
  else if (t.r !== void 0)
    (n[0] !== t.r || n[1] !== t.g || n[2] !== t.b) && (e.uniform3f(this.addr, t.r, t.g, t.b), n[0] = t.r, n[1] = t.g, n[2] = t.b);
  else {
    if (zt(n, t)) return;
    e.uniform3fv(this.addr, t), Dt(n, t);
  }
}
function Zv(e, t) {
  var n = this.cache;
  if (t.x !== void 0)
    (n[0] !== t.x || n[1] !== t.y || n[2] !== t.z || n[3] !== t.w) && (e.uniform4f(this.addr, t.x, t.y, t.z, t.w), n[0] = t.x, n[1] = t.y, n[2] = t.z, n[3] = t.w);
  else {
    if (zt(n, t)) return;
    e.uniform4fv(this.addr, t), Dt(n, t);
  }
}
function Jv(e, t) {
  var n = this.cache, r = t.elements;
  if (r === void 0) {
    if (zt(n, t)) return;
    e.uniformMatrix2fv(this.addr, !1, t), Dt(n, t);
  } else {
    if (zt(n, r)) return;
    pc.set(r), e.uniformMatrix2fv(this.addr, !1, pc), Dt(n, r);
  }
}
function $v(e, t) {
  var n = this.cache, r = t.elements;
  if (r === void 0) {
    if (zt(n, t)) return;
    e.uniformMatrix3fv(this.addr, !1, t), Dt(n, t);
  } else {
    if (zt(n, r)) return;
    dc.set(r), e.uniformMatrix3fv(this.addr, !1, dc), Dt(n, r);
  }
}
function Qv(e, t) {
  var n = this.cache, r = t.elements;
  if (r === void 0) {
    if (zt(n, t)) return;
    e.uniformMatrix4fv(this.addr, !1, t), Dt(n, t);
  } else {
    if (zt(n, r)) return;
    fc.set(r), e.uniformMatrix4fv(this.addr, !1, fc), Dt(n, r);
  }
}
function Kv(e, t, n) {
  var r = this.cache, i = n.allocateTextureUnit();
  r[0] !== i && (e.uniform1i(this.addr, i), r[0] = i), n.safeSetTexture2D(t || Uu, i);
}
function em(e, t, n) {
  var r = this.cache, i = n.allocateTextureUnit();
  r[0] !== i && (e.uniform1i(this.addr, i), r[0] = i), n.setTexture2DArray(t || Wv, i);
}
function tm(e, t, n) {
  var r = this.cache, i = n.allocateTextureUnit();
  r[0] !== i && (e.uniform1i(this.addr, i), r[0] = i), n.setTexture3D(t || jv, i);
}
function nm(e, t, n) {
  var r = this.cache, i = n.allocateTextureUnit();
  r[0] !== i && (e.uniform1i(this.addr, i), r[0] = i), n.safeSetTextureCube(t || Gu, i);
}
function rm(e, t) {
  var n = this.cache;
  n[0] !== t && (e.uniform1i(this.addr, t), n[0] = t);
}
function im(e, t) {
  var n = this.cache;
  zt(n, t) || (e.uniform2iv(this.addr, t), Dt(n, t));
}
function am(e, t) {
  var n = this.cache;
  zt(n, t) || (e.uniform3iv(this.addr, t), Dt(n, t));
}
function sm(e, t) {
  var n = this.cache;
  zt(n, t) || (e.uniform4iv(this.addr, t), Dt(n, t));
}
function om(e, t) {
  var n = this.cache;
  n[0] !== t && (e.uniform1ui(this.addr, t), n[0] = t);
}
function lm(e) {
  switch (e) {
    case 5126:
      return qv;
    case 35664:
      return Xv;
    case 35665:
      return Yv;
    case 35666:
      return Zv;
    case 35674:
      return Jv;
    case 35675:
      return $v;
    case 35676:
      return Qv;
    case 5124:
    case 35670:
      return rm;
    case 35667:
    case 35671:
      return im;
    case 35668:
    case 35672:
      return am;
    case 35669:
    case 35673:
      return sm;
    case 5125:
      return om;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return Kv;
    case 35679:
    case 36299:
    case 36307:
      return tm;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return nm;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return em;
  }
}
function cm(e, t) {
  e.uniform1fv(this.addr, t);
}
function um(e, t) {
  e.uniform1iv(this.addr, t);
}
function hm(e, t) {
  e.uniform2iv(this.addr, t);
}
function fm(e, t) {
  e.uniform3iv(this.addr, t);
}
function dm(e, t) {
  e.uniform4iv(this.addr, t);
}
function pm(e, t) {
  var n = hi(t, this.size, 2);
  e.uniform2fv(this.addr, n);
}
function vm(e, t) {
  var n = hi(t, this.size, 3);
  e.uniform3fv(this.addr, n);
}
function mm(e, t) {
  var n = hi(t, this.size, 4);
  e.uniform4fv(this.addr, n);
}
function gm(e, t) {
  var n = hi(t, this.size, 4);
  e.uniformMatrix2fv(this.addr, !1, n);
}
function ym(e, t) {
  var n = hi(t, this.size, 9);
  e.uniformMatrix3fv(this.addr, !1, n);
}
function xm(e, t) {
  var n = hi(t, this.size, 16);
  e.uniformMatrix4fv(this.addr, !1, n);
}
function _m(e, t, n) {
  var r = t.length, i = Vu(n, r);
  e.uniform1iv(this.addr, i);
  for (var a = 0; a !== r; ++a)
    n.safeSetTexture2D(t[a] || Uu, i[a]);
}
function wm(e, t, n) {
  var r = t.length, i = Vu(n, r);
  e.uniform1iv(this.addr, i);
  for (var a = 0; a !== r; ++a)
    n.safeSetTextureCube(t[a] || Gu, i[a]);
}
function Mm(e) {
  switch (e) {
    case 5126:
      return cm;
    case 35664:
      return pm;
    case 35665:
      return vm;
    case 35666:
      return mm;
    case 35674:
      return gm;
    case 35675:
      return ym;
    case 35676:
      return xm;
    case 5124:
    case 35670:
      return um;
    case 35667:
    case 35671:
      return hm;
    case 35668:
    case 35672:
      return fm;
    case 35669:
    case 35673:
      return dm;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return _m;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return wm;
  }
}
function bm(e, t, n) {
  this.id = e, this.addr = n, this.cache = [], this.setValue = lm(t.type);
}
function Hu(e, t, n) {
  this.id = e, this.addr = n, this.cache = [], this.size = t.size, this.setValue = Mm(t.type);
}
Hu.prototype.updateCache = function(e) {
  var t = this.cache;
  e instanceof Float32Array && t.length !== e.length && (this.cache = new Float32Array(e.length)), Dt(t, e);
};
function ku(e) {
  this.id = e, this.seq = [], this.map = {};
}
ku.prototype.setValue = function(e, t, n) {
  for (var r = this.seq, i = 0, a = r.length; i !== a; ++i) {
    var s = r[i];
    s.setValue(e, t[s.id], n);
  }
};
var po = /([\w\d_]+)(\])?(\[|\.)?/g;
function vc(e, t) {
  e.seq.push(t), e.map[t.id] = t;
}
function Em(e, t, n) {
  var r = e.name, i = r.length;
  for (po.lastIndex = 0; ; ) {
    var a = po.exec(r), s = po.lastIndex, o = a[1], l = a[2] === "]", c = a[3];
    if (l && (o = o | 0), c === void 0 || c === "[" && s + 2 === i) {
      vc(n, c === void 0 ? new bm(o, e, t) : new Hu(o, e, t));
      break;
    } else {
      var u = n.map, h = u[o];
      h === void 0 && (h = new ku(o), vc(n, h)), n = h;
    }
  }
}
function On(e, t) {
  this.seq = [], this.map = {};
  for (var n = e.getProgramParameter(t, 35718), r = 0; r < n; ++r) {
    var i = e.getActiveUniform(t, r), a = e.getUniformLocation(t, i.name);
    Em(i, a, this);
  }
}
On.prototype.setValue = function(e, t, n, r) {
  var i = this.map[t];
  i !== void 0 && i.setValue(e, n, r);
};
On.prototype.setOptional = function(e, t, n) {
  var r = t[n];
  r !== void 0 && this.setValue(e, n, r);
};
On.upload = function(e, t, n, r) {
  for (var i = 0, a = t.length; i !== a; ++i) {
    var s = t[i], o = n[s.id];
    o.needsUpdate !== !1 && s.setValue(e, o.value, r);
  }
};
On.seqWithValue = function(e, t) {
  for (var n = [], r = 0, i = e.length; r !== i; ++r) {
    var a = e[r];
    a.id in t && n.push(a);
  }
  return n;
};
function mc(e, t, n) {
  var r = e.createShader(t);
  return e.shaderSource(r, n), e.compileShader(r), r;
}
var Sm = 0;
function Tm(e) {
  for (var t = e.split(`
`), n = 0; n < t.length; n++)
    t[n] = n + 1 + ": " + t[n];
  return t.join(`
`);
}
function Wu(e) {
  switch (e) {
    case Pt:
      return ["Linear", "( value )"];
    case Cl:
      return ["sRGB", "( value )"];
    case Rl:
      return ["RGBE", "( value )"];
    case Ru:
      return ["RGBM", "( value, 7.0 )"];
    case Pu:
      return ["RGBM", "( value, 16.0 )"];
    case Du:
      return ["RGBD", "( value, 256.0 )"];
    case Cu:
      return ["Gamma", "( value, float( GAMMA_FACTOR ) )"];
    case Wf:
      return ["LogLuv", "( value )"];
    default:
      throw new Error("unsupported encoding: " + e);
  }
}
function gc(e, t, n) {
  var r = e.getShaderParameter(t, 35713), i = e.getShaderInfoLog(t).trim();
  if (r && i === "") return "";
  var a = e.getShaderSource(t);
  return "THREE.WebGLShader: gl.getShaderInfoLog() " + n + `
` + i + Tm(a);
}
function gi(e, t) {
  var n = Wu(t);
  return "vec4 " + e + "( vec4 value ) { return " + n[0] + "ToLinear" + n[1] + "; }";
}
function Am(e, t) {
  var n = Wu(t);
  return "vec4 " + e + "( vec4 value ) { return LinearTo" + n[0] + n[1] + "; }";
}
function Lm(e, t) {
  var n;
  switch (t) {
    case Ml:
      n = "Linear";
      break;
    case af:
      n = "Reinhard";
      break;
    case sf:
      n = "Uncharted2";
      break;
    case of:
      n = "OptimizedCineon";
      break;
    case lf:
      n = "ACESFilmic";
      break;
    default:
      throw new Error("unsupported toneMapping: " + t);
  }
  return "vec3 " + e + "( vec3 color ) { return " + n + "ToneMapping( color ); }";
}
function Cm(e) {
  var t = [
    e.extensionDerivatives || e.envMapCubeUV || e.bumpMap || e.tangentSpaceNormalMap || e.clearcoatNormalMap || e.flatShading || e.shaderID === "physical" ? "#extension GL_OES_standard_derivatives : enable" : "",
    (e.extensionFragDepth || e.logarithmicDepthBuffer) && e.rendererExtensionFragDepth ? "#extension GL_EXT_frag_depth : enable" : "",
    e.extensionDrawBuffers && e.rendererExtensionDrawBuffers ? "#extension GL_EXT_draw_buffers : require" : "",
    (e.extensionShaderTextureLOD || e.envMap) && e.rendererExtensionShaderTextureLod ? "#extension GL_EXT_shader_texture_lod : enable" : ""
  ];
  return t.filter(bi).join(`
`);
}
function Rm(e) {
  var t = [];
  for (var n in e) {
    var r = e[n];
    r !== !1 && t.push("#define " + n + " " + r);
  }
  return t.join(`
`);
}
function Pm(e, t) {
  for (var n = {}, r = e.getProgramParameter(t, 35721), i = 0; i < r; i++) {
    var a = e.getActiveAttrib(t, i), s = a.name;
    n[s] = e.getAttribLocation(t, s);
  }
  return n;
}
function bi(e) {
  return e !== "";
}
function yc(e, t) {
  return e.replace(/NUM_DIR_LIGHTS/g, t.numDirLights).replace(/NUM_SPOT_LIGHTS/g, t.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g, t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, t.numPointLights).replace(/NUM_HEMI_LIGHTS/g, t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g, t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, t.numPointLightShadows);
}
function xc(e, t) {
  return e.replace(/NUM_CLIPPING_PLANES/g, t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, t.numClippingPlanes - t.numClipIntersection);
}
var Dm = /^[ \t]*#include +<([\w\d./]+)>/gm;
function Do(e) {
  return e.replace(Dm, Im);
}
function Im(e, t) {
  var n = Re[t];
  if (n === void 0)
    throw new Error("Can not resolve #include <" + t + ">");
  return Do(n);
}
var Om = /#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g;
function _c(e) {
  return e.replace(Om, Nm);
}
function Nm(e, t, n, r) {
  for (var i = "", a = parseInt(t); a < parseInt(n); a++)
    i += r.replace(/\[ i \]/g, "[ " + a + " ]").replace(/UNROLLED_LOOP_INDEX/g, a);
  return i;
}
function wc(e) {
  var t = "precision " + e.precision + ` float;
precision ` + e.precision + " int;";
  return e.precision === "highp" ? t += `
#define HIGH_PRECISION` : e.precision === "mediump" ? t += `
#define MEDIUM_PRECISION` : e.precision === "lowp" && (t += `
#define LOW_PRECISION`), t;
}
function Fm(e) {
  var t = "SHADOWMAP_TYPE_BASIC";
  return e.shadowMapType === _u ? t = "SHADOWMAP_TYPE_PCF" : e.shadowMapType === Nh ? t = "SHADOWMAP_TYPE_PCF_SOFT" : e.shadowMapType === Mi && (t = "SHADOWMAP_TYPE_VSM"), t;
}
function Bm(e) {
  var t = "ENVMAP_TYPE_CUBE";
  if (e.envMap)
    switch (e.envMapMode) {
      case El:
      case Sl:
        t = "ENVMAP_TYPE_CUBE";
        break;
      case fa:
      case Al:
        t = "ENVMAP_TYPE_CUBE_UV";
        break;
      case Su:
      case Tl:
        t = "ENVMAP_TYPE_EQUIREC";
        break;
      case Tu:
        t = "ENVMAP_TYPE_SPHERE";
        break;
    }
  return t;
}
function zm(e) {
  var t = "ENVMAP_MODE_REFLECTION";
  if (e.envMap)
    switch (e.envMapMode) {
      case Sl:
      case Tl:
        t = "ENVMAP_MODE_REFRACTION";
        break;
    }
  return t;
}
function Um(e) {
  var t = "ENVMAP_BLENDING_NONE";
  if (e.envMap)
    switch (e.combine) {
      case Us:
        t = "ENVMAP_BLENDING_MULTIPLY";
        break;
      case nf:
        t = "ENVMAP_BLENDING_MIX";
        break;
      case rf:
        t = "ENVMAP_BLENDING_ADD";
        break;
    }
  return t;
}
function Gm(e, t, n) {
  var r = e.getContext(), i = n.defines, a = n.vertexShader, s = n.fragmentShader, o = Fm(n), l = Bm(n), c = zm(n), u = Um(n), h = e.gammaFactor > 0 ? e.gammaFactor : 1, f = n.isWebGL2 ? "" : Cm(n), d = Rm(i), p = r.createProgram(), v, m, y = n.numMultiviewViews;
  if (n.isRawShaderMaterial ? (v = [
    d
  ].filter(bi).join(`
`), v.length > 0 && (v += `
`), m = [
    f,
    d
  ].filter(bi).join(`
`), m.length > 0 && (m += `
`)) : (v = [
    wc(n),
    "#define SHADER_NAME " + n.shaderName,
    d,
    n.instancing ? "#define USE_INSTANCING" : "",
    n.supportsVertexTextures ? "#define VERTEX_TEXTURES" : "",
    "#define GAMMA_FACTOR " + h,
    "#define MAX_BONES " + n.maxBones,
    n.useFog && n.fog ? "#define USE_FOG" : "",
    n.useFog && n.fogExp2 ? "#define FOG_EXP2" : "",
    n.map ? "#define USE_MAP" : "",
    n.envMap ? "#define USE_ENVMAP" : "",
    n.envMap ? "#define " + c : "",
    n.lightMap ? "#define USE_LIGHTMAP" : "",
    n.aoMap ? "#define USE_AOMAP" : "",
    n.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
    n.bumpMap ? "#define USE_BUMPMAP" : "",
    n.normalMap ? "#define USE_NORMALMAP" : "",
    n.normalMap && n.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "",
    n.normalMap && n.tangentSpaceNormalMap ? "#define TANGENTSPACE_NORMALMAP" : "",
    n.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
    n.displacementMap && n.supportsVertexTextures ? "#define USE_DISPLACEMENTMAP" : "",
    n.specularMap ? "#define USE_SPECULARMAP" : "",
    n.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
    n.metalnessMap ? "#define USE_METALNESSMAP" : "",
    n.alphaMap ? "#define USE_ALPHAMAP" : "",
    n.vertexTangents ? "#define USE_TANGENT" : "",
    n.vertexColors ? "#define USE_COLOR" : "",
    n.vertexUvs ? "#define USE_UV" : "",
    n.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "",
    n.flatShading ? "#define FLAT_SHADED" : "",
    n.skinning ? "#define USE_SKINNING" : "",
    n.useVertexTexture ? "#define BONE_TEXTURE" : "",
    n.morphTargets ? "#define USE_MORPHTARGETS" : "",
    n.morphNormals && n.flatShading === !1 ? "#define USE_MORPHNORMALS" : "",
    n.doubleSided ? "#define DOUBLE_SIDED" : "",
    n.flipSided ? "#define FLIP_SIDED" : "",
    n.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
    n.shadowMapEnabled ? "#define " + o : "",
    n.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "",
    n.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
    n.logarithmicDepthBuffer && n.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "",
    "uniform mat4 modelMatrix;",
    "uniform mat4 modelViewMatrix;",
    "uniform mat4 projectionMatrix;",
    "uniform mat4 viewMatrix;",
    "uniform mat3 normalMatrix;",
    "uniform vec3 cameraPosition;",
    "uniform bool isOrthographic;",
    "#ifdef USE_INSTANCING",
    " attribute mat4 instanceMatrix;",
    "#endif",
    "attribute vec3 position;",
    "attribute vec3 normal;",
    "attribute vec2 uv;",
    "#ifdef USE_TANGENT",
    "	attribute vec4 tangent;",
    "#endif",
    "#ifdef USE_COLOR",
    "	attribute vec3 color;",
    "#endif",
    "#ifdef USE_MORPHTARGETS",
    "	attribute vec3 morphTarget0;",
    "	attribute vec3 morphTarget1;",
    "	attribute vec3 morphTarget2;",
    "	attribute vec3 morphTarget3;",
    "	#ifdef USE_MORPHNORMALS",
    "		attribute vec3 morphNormal0;",
    "		attribute vec3 morphNormal1;",
    "		attribute vec3 morphNormal2;",
    "		attribute vec3 morphNormal3;",
    "	#else",
    "		attribute vec3 morphTarget4;",
    "		attribute vec3 morphTarget5;",
    "		attribute vec3 morphTarget6;",
    "		attribute vec3 morphTarget7;",
    "	#endif",
    "#endif",
    "#ifdef USE_SKINNING",
    "	attribute vec4 skinIndex;",
    "	attribute vec4 skinWeight;",
    "#endif",
    `
`
  ].filter(bi).join(`
`), m = [
    f,
    wc(n),
    "#define SHADER_NAME " + n.shaderName,
    d,
    n.alphaTest ? "#define ALPHATEST " + n.alphaTest + (n.alphaTest % 1 ? "" : ".0") : "",
    // add '.0' if integer
    "#define GAMMA_FACTOR " + h,
    n.useFog && n.fog ? "#define USE_FOG" : "",
    n.useFog && n.fogExp2 ? "#define FOG_EXP2" : "",
    n.map ? "#define USE_MAP" : "",
    n.matcap ? "#define USE_MATCAP" : "",
    n.envMap ? "#define USE_ENVMAP" : "",
    n.envMap ? "#define " + l : "",
    n.envMap ? "#define " + c : "",
    n.envMap ? "#define " + u : "",
    n.lightMap ? "#define USE_LIGHTMAP" : "",
    n.aoMap ? "#define USE_AOMAP" : "",
    n.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
    n.bumpMap ? "#define USE_BUMPMAP" : "",
    n.normalMap ? "#define USE_NORMALMAP" : "",
    n.normalMap && n.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "",
    n.normalMap && n.tangentSpaceNormalMap ? "#define TANGENTSPACE_NORMALMAP" : "",
    n.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
    n.specularMap ? "#define USE_SPECULARMAP" : "",
    n.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
    n.metalnessMap ? "#define USE_METALNESSMAP" : "",
    n.alphaMap ? "#define USE_ALPHAMAP" : "",
    n.sheen ? "#define USE_SHEEN" : "",
    n.vertexTangents ? "#define USE_TANGENT" : "",
    n.vertexColors ? "#define USE_COLOR" : "",
    n.vertexUvs ? "#define USE_UV" : "",
    n.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "",
    n.gradientMap ? "#define USE_GRADIENTMAP" : "",
    n.flatShading ? "#define FLAT_SHADED" : "",
    n.doubleSided ? "#define DOUBLE_SIDED" : "",
    n.flipSided ? "#define FLIP_SIDED" : "",
    n.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
    n.shadowMapEnabled ? "#define " + o : "",
    n.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "",
    n.physicallyCorrectLights ? "#define PHYSICALLY_CORRECT_LIGHTS" : "",
    n.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
    n.logarithmicDepthBuffer && n.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "",
    (n.extensionShaderTextureLOD || n.envMap) && n.rendererExtensionShaderTextureLod ? "#define TEXTURE_LOD_EXT" : "",
    "uniform mat4 viewMatrix;",
    "uniform vec3 cameraPosition;",
    "uniform bool isOrthographic;",
    n.toneMapping !== $a ? "#define TONE_MAPPING" : "",
    n.toneMapping !== $a ? Re.tonemapping_pars_fragment : "",
    // this code is required here because it is used by the toneMapping() function defined below
    n.toneMapping !== $a ? Lm("toneMapping", n.toneMapping) : "",
    n.dithering ? "#define DITHERING" : "",
    n.outputEncoding || n.mapEncoding || n.matcapEncoding || n.envMapEncoding || n.emissiveMapEncoding || n.lightMapEncoding ? Re.encodings_pars_fragment : "",
    // this code is required here because it is used by the various encoding/decoding function defined below
    n.mapEncoding ? gi("mapTexelToLinear", n.mapEncoding) : "",
    n.matcapEncoding ? gi("matcapTexelToLinear", n.matcapEncoding) : "",
    n.envMapEncoding ? gi("envMapTexelToLinear", n.envMapEncoding) : "",
    n.emissiveMapEncoding ? gi("emissiveMapTexelToLinear", n.emissiveMapEncoding) : "",
    n.lightMapEncoding ? gi("lightMapTexelToLinear", n.lightMapEncoding) : "",
    n.outputEncoding ? Am("linearToOutputTexel", n.outputEncoding) : "",
    n.depthPacking ? "#define DEPTH_PACKING " + n.depthPacking : "",
    `
`
  ].filter(bi).join(`
`)), a = Do(a), a = yc(a, n), a = xc(a, n), s = Do(s), s = yc(s, n), s = xc(s, n), a = _c(a), s = _c(s), n.isWebGL2 && !n.isRawShaderMaterial) {
    var x = !1, M = /^\s*#version\s+300\s+es\s*\n/;
    n.isShaderMaterial && a.match(M) !== null && s.match(M) !== null && (x = !0, a = a.replace(M, ""), s = s.replace(M, "")), v = [
      `#version 300 es
`,
      "#define attribute in",
      "#define varying out",
      "#define texture2D texture"
    ].join(`
`) + `
` + v, m = [
      `#version 300 es
`,
      "#define varying in",
      x ? "" : "out highp vec4 pc_fragColor;",
      x ? "" : "#define gl_FragColor pc_fragColor",
      "#define gl_FragDepthEXT gl_FragDepth",
      "#define texture2D texture",
      "#define textureCube texture",
      "#define texture2DProj textureProj",
      "#define texture2DLodEXT textureLod",
      "#define texture2DProjLodEXT textureProjLod",
      "#define textureCubeLodEXT textureLod",
      "#define texture2DGradEXT textureGrad",
      "#define texture2DProjGradEXT textureProjGrad",
      "#define textureCubeGradEXT textureGrad"
    ].join(`
`) + `
` + m, y > 0 && (v = v.replace(
      `#version 300 es
`,
      [
        `#version 300 es
`,
        "#extension GL_OVR_multiview2 : require",
        "layout(num_views = " + y + ") in;",
        "#define VIEW_ID gl_ViewID_OVR"
      ].join(`
`)
    ), v = v.replace(
      [
        "uniform mat4 modelViewMatrix;",
        "uniform mat4 projectionMatrix;",
        "uniform mat4 viewMatrix;",
        "uniform mat3 normalMatrix;"
      ].join(`
`),
      [
        "uniform mat4 modelViewMatrices[" + y + "];",
        "uniform mat4 projectionMatrices[" + y + "];",
        "uniform mat4 viewMatrices[" + y + "];",
        "uniform mat3 normalMatrices[" + y + "];",
        "#define modelViewMatrix modelViewMatrices[VIEW_ID]",
        "#define projectionMatrix projectionMatrices[VIEW_ID]",
        "#define viewMatrix viewMatrices[VIEW_ID]",
        "#define normalMatrix normalMatrices[VIEW_ID]"
      ].join(`
`)
    ), m = m.replace(
      `#version 300 es
`,
      [
        `#version 300 es
`,
        "#extension GL_OVR_multiview2 : require",
        "#define VIEW_ID gl_ViewID_OVR"
      ].join(`
`)
    ), m = m.replace(
      "uniform mat4 viewMatrix;",
      [
        "uniform mat4 viewMatrices[" + y + "];",
        "#define viewMatrix viewMatrices[VIEW_ID]"
      ].join(`
`)
    ));
  }
  var E = v + a, w = m + s, A = mc(r, 35633, E), C = mc(r, 35632, w);
  if (r.attachShader(p, A), r.attachShader(p, C), n.index0AttributeName !== void 0 ? r.bindAttribLocation(p, 0, n.index0AttributeName) : n.morphTargets === !0 && r.bindAttribLocation(p, 0, "position"), r.linkProgram(p), e.debug.checkShaderErrors) {
    var T = r.getProgramInfoLog(p).trim(), D = r.getShaderInfoLog(A).trim(), I = r.getShaderInfoLog(C).trim(), B = !0, O = !0;
    if (r.getProgramParameter(p, 35714) === !1) {
      B = !1;
      var F = gc(r, A, "vertex"), N = gc(r, C, "fragment");
      console.error("THREE.WebGLProgram: shader error: ", r.getError(), "35715", r.getProgramParameter(p, 35715), "gl.getProgramInfoLog", T, F, N);
    } else T !== "" ? console.warn("THREE.WebGLProgram: gl.getProgramInfoLog()", T) : (D === "" || I === "") && (O = !1);
    O && (this.diagnostics = {
      runnable: B,
      programLog: T,
      vertexShader: {
        log: D,
        prefix: v
      },
      fragmentShader: {
        log: I,
        prefix: m
      }
    });
  }
  r.deleteShader(A), r.deleteShader(C);
  var z;
  this.getUniforms = function() {
    return z === void 0 && (z = new On(r, p)), z;
  };
  var H;
  return this.getAttributes = function() {
    return H === void 0 && (H = Pm(r, p)), H;
  }, this.destroy = function() {
    r.deleteProgram(p), this.program = void 0;
  }, this.name = n.shaderName, this.id = Sm++, this.cacheKey = t, this.usedTimes = 1, this.program = p, this.vertexShader = A, this.fragmentShader = C, this.numMultiviewViews = y, this;
}
function Vm(e, t, n) {
  var r = [], i = n.isWebGL2, a = n.logarithmicDepthBuffer, s = n.floatVertexTextures, o = n.precision, l = n.maxVertexUniforms, c = n.vertexTextures, u = {
    MeshDepthMaterial: "depth",
    MeshDistanceMaterial: "distanceRGBA",
    MeshNormalMaterial: "normal",
    MeshBasicMaterial: "basic",
    MeshLambertMaterial: "lambert",
    MeshPhongMaterial: "phong",
    MeshToonMaterial: "toon",
    MeshStandardMaterial: "physical",
    MeshPhysicalMaterial: "physical",
    MeshMatcapMaterial: "matcap",
    LineBasicMaterial: "basic",
    LineDashedMaterial: "dashed",
    PointsMaterial: "points",
    ShadowMaterial: "shadow",
    SpriteMaterial: "sprite"
  }, h = [
    "precision",
    "isWebGL2",
    "supportsVertexTextures",
    "outputEncoding",
    "instancing",
    "numMultiviewViews",
    "map",
    "mapEncoding",
    "matcap",
    "matcapEncoding",
    "envMap",
    "envMapMode",
    "envMapEncoding",
    "envMapCubeUV",
    "lightMap",
    "lightMapEncoding",
    "aoMap",
    "emissiveMap",
    "emissiveMapEncoding",
    "bumpMap",
    "normalMap",
    "objectSpaceNormalMap",
    "tangentSpaceNormalMap",
    "clearcoatNormalMap",
    "displacementMap",
    "specularMap",
    "roughnessMap",
    "metalnessMap",
    "gradientMap",
    "alphaMap",
    "combine",
    "vertexColors",
    "vertexTangents",
    "vertexUvs",
    "uvsVertexOnly",
    "fog",
    "useFog",
    "fogExp2",
    "flatShading",
    "sizeAttenuation",
    "logarithmicDepthBuffer",
    "skinning",
    "maxBones",
    "useVertexTexture",
    "morphTargets",
    "morphNormals",
    "maxMorphTargets",
    "maxMorphNormals",
    "premultipliedAlpha",
    "numDirLights",
    "numPointLights",
    "numSpotLights",
    "numHemiLights",
    "numRectAreaLights",
    "numDirLightShadows",
    "numPointLightShadows",
    "numSpotLightShadows",
    "shadowMapEnabled",
    "shadowMapType",
    "toneMapping",
    "physicallyCorrectLights",
    "alphaTest",
    "doubleSided",
    "flipSided",
    "numClippingPlanes",
    "numClipIntersection",
    "depthPacking",
    "dithering",
    "sheen"
  ];
  function f(v, m) {
    var y;
    if (m) {
      var x = gn[m];
      y = {
        name: v.type,
        uniforms: ud.clone(x.uniforms),
        vertexShader: x.vertexShader,
        fragmentShader: x.fragmentShader
      };
    } else
      y = {
        name: v.type,
        uniforms: v.uniforms,
        vertexShader: v.vertexShader,
        fragmentShader: v.fragmentShader
      };
    return y;
  }
  function d(v) {
    var m = v.skeleton, y = m.bones;
    if (s)
      return 1024;
    var x = l, M = Math.floor((x - 20) / 4), E = Math.min(M, y.length);
    return E < y.length ? (console.warn("THREE.WebGLRenderer: Skeleton has " + y.length + " bones. This GPU supports " + E + "."), 0) : E;
  }
  function p(v) {
    var m;
    return v ? v.isTexture ? m = v.encoding : v.isWebGLRenderTarget && (console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."), m = v.texture.encoding) : m = Pt, m;
  }
  this.getParameters = function(v, m, y, x, M, E, w) {
    var A = x.fog, C = v.isMeshStandardMaterial ? x.environment : null, T = v.envMap || C, D = u[v.type], I = w.isSkinnedMesh ? d(w) : 0;
    v.precision !== null && (o = n.getMaxPrecision(v.precision), o !== v.precision && console.warn("THREE.WebGLProgram.getParameters:", v.precision, "not supported, using", o, "instead."));
    var B = f(v, D);
    v.onBeforeCompile(B, e);
    var O = e.getRenderTarget(), F = O && O.isWebGLMultiviewRenderTarget ? O.numViews : 0, N = {
      isWebGL2: i,
      shaderID: D,
      shaderName: B.name,
      uniforms: B.uniforms,
      vertexShader: B.vertexShader,
      fragmentShader: B.fragmentShader,
      defines: v.defines,
      isRawShaderMaterial: v.isRawShaderMaterial,
      isShaderMaterial: v.isShaderMaterial,
      precision: o,
      instancing: w.isInstancedMesh === !0,
      supportsVertexTextures: c,
      numMultiviewViews: F,
      outputEncoding: O !== null ? p(O.texture) : e.outputEncoding,
      map: !!v.map,
      mapEncoding: p(v.map),
      matcap: !!v.matcap,
      matcapEncoding: p(v.matcap),
      envMap: !!T,
      envMapMode: T && T.mapping,
      envMapEncoding: p(T),
      envMapCubeUV: !!T && (T.mapping === fa || T.mapping === Al),
      lightMap: !!v.lightMap,
      lightMapEncoding: p(v.lightMap),
      aoMap: !!v.aoMap,
      emissiveMap: !!v.emissiveMap,
      emissiveMapEncoding: p(v.emissiveMap),
      bumpMap: !!v.bumpMap,
      normalMap: !!v.normalMap,
      objectSpaceNormalMap: v.normalMapType === Xf,
      tangentSpaceNormalMap: v.normalMapType === li,
      clearcoatNormalMap: !!v.clearcoatNormalMap,
      displacementMap: !!v.displacementMap,
      roughnessMap: !!v.roughnessMap,
      metalnessMap: !!v.metalnessMap,
      specularMap: !!v.specularMap,
      alphaMap: !!v.alphaMap,
      gradientMap: !!v.gradientMap,
      sheen: !!v.sheen,
      combine: v.combine,
      vertexTangents: v.normalMap && v.vertexTangents,
      vertexColors: v.vertexColors,
      vertexUvs: !!v.map || !!v.bumpMap || !!v.normalMap || !!v.specularMap || !!v.alphaMap || !!v.emissiveMap || !!v.roughnessMap || !!v.metalnessMap || !!v.clearcoatNormalMap || !!v.displacementMap,
      uvsVertexOnly: !(v.map || v.bumpMap || v.normalMap || v.specularMap || v.alphaMap || v.emissiveMap || v.roughnessMap || v.metalnessMap || v.clearcoatNormalMap) && !!v.displacementMap,
      fog: !!A,
      useFog: v.fog,
      fogExp2: A && A.isFogExp2,
      flatShading: v.flatShading,
      sizeAttenuation: v.sizeAttenuation,
      logarithmicDepthBuffer: a,
      skinning: v.skinning && I > 0,
      maxBones: I,
      useVertexTexture: s,
      morphTargets: v.morphTargets,
      morphNormals: v.morphNormals,
      maxMorphTargets: e.maxMorphTargets,
      maxMorphNormals: e.maxMorphNormals,
      numDirLights: m.directional.length,
      numPointLights: m.point.length,
      numSpotLights: m.spot.length,
      numRectAreaLights: m.rectArea.length,
      numHemiLights: m.hemi.length,
      numDirLightShadows: m.directionalShadowMap.length,
      numPointLightShadows: m.pointShadowMap.length,
      numSpotLightShadows: m.spotShadowMap.length,
      numClippingPlanes: M,
      numClipIntersection: E,
      dithering: v.dithering,
      shadowMapEnabled: e.shadowMap.enabled && y.length > 0,
      shadowMapType: e.shadowMap.type,
      toneMapping: v.toneMapped ? e.toneMapping : $a,
      physicallyCorrectLights: e.physicallyCorrectLights,
      premultipliedAlpha: v.premultipliedAlpha,
      alphaTest: v.alphaTest,
      doubleSided: v.side === zs,
      flipSided: v.side === ht,
      depthPacking: v.depthPacking !== void 0 ? v.depthPacking : !1,
      index0AttributeName: v.index0AttributeName,
      extensionDerivatives: v.extensions && v.extensions.derivatives,
      extensionFragDepth: v.extensions && v.extensions.frawbuffers,
      extensionDrawbuffers: v.extensions && v.extensions.drawbuffers,
      extensionShaderTextureLOD: v.extensions && v.extensions.shaderTextureLOD,
      rendererExtensionFragDepth: i || t.get("EXT_frag_depth") !== null,
      rendererExtensionDrawBuffers: i || t.get("WEBGL_draw_buffers") !== null,
      rendererExtensionShaderTextureLod: i || t.get("EXT_shader_texture_lod") !== null,
      onBeforeCompile: v.onBeforeCompile
    };
    return N;
  }, this.getProgramCacheKey = function(v) {
    var m = [];
    if (v.shaderID ? m.push(v.shaderID) : (m.push(v.fragmentShader), m.push(v.vertexShader)), v.defines !== void 0)
      for (var y in v.defines)
        m.push(y), m.push(v.defines[y]);
    if (v.isRawShaderMaterial === void 0) {
      for (var x = 0; x < h.length; x++)
        m.push(v[h[x]]);
      m.push(e.outputEncoding), m.push(e.gammaFactor);
    }
    return m.push(v.onBeforeCompile.toString()), m.join();
  }, this.acquireProgram = function(v, m) {
    for (var y, x = 0, M = r.length; x < M; x++) {
      var E = r[x];
      if (E.cacheKey === m) {
        y = E, ++y.usedTimes;
        break;
      }
    }
    return y === void 0 && (y = new Gm(e, m, v), r.push(y)), y;
  }, this.releaseProgram = function(v) {
    if (--v.usedTimes === 0) {
      var m = r.indexOf(v);
      r[m] = r[r.length - 1], r.pop(), v.destroy();
    }
  }, this.programs = r;
}
function Hm() {
  var e = /* @__PURE__ */ new WeakMap();
  function t(a) {
    var s = e.get(a);
    return s === void 0 && (s = {}, e.set(a, s)), s;
  }
  function n(a) {
    e.delete(a);
  }
  function r(a, s, o) {
    e.get(a)[s] = o;
  }
  function i() {
    e = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: t,
    remove: n,
    update: r,
    dispose: i
  };
}
function km(e, t) {
  return e.groupOrder !== t.groupOrder ? e.groupOrder - t.groupOrder : e.renderOrder !== t.renderOrder ? e.renderOrder - t.renderOrder : e.program !== t.program ? e.program.id - t.program.id : e.material.id !== t.material.id ? e.material.id - t.material.id : e.z !== t.z ? e.z - t.z : e.id - t.id;
}
function Wm(e, t) {
  return e.groupOrder !== t.groupOrder ? e.groupOrder - t.groupOrder : e.renderOrder !== t.renderOrder ? e.renderOrder - t.renderOrder : e.z !== t.z ? t.z - e.z : e.id - t.id;
}
function Mc() {
  var e = [], t = 0, n = [], r = [], i = { id: -1 };
  function a() {
    t = 0, n.length = 0, r.length = 0;
  }
  function s(u, h, f, d, p, v) {
    var m = e[t];
    return m === void 0 ? (m = {
      id: u.id,
      object: u,
      geometry: h,
      material: f,
      program: f.program || i,
      groupOrder: d,
      renderOrder: u.renderOrder,
      z: p,
      group: v
    }, e[t] = m) : (m.id = u.id, m.object = u, m.geometry = h, m.material = f, m.program = f.program || i, m.groupOrder = d, m.renderOrder = u.renderOrder, m.z = p, m.group = v), t++, m;
  }
  function o(u, h, f, d, p, v) {
    var m = s(u, h, f, d, p, v);
    (f.transparent === !0 ? r : n).push(m);
  }
  function l(u, h, f, d, p, v) {
    var m = s(u, h, f, d, p, v);
    (f.transparent === !0 ? r : n).unshift(m);
  }
  function c(u, h) {
    n.length > 1 && n.sort(u || km), r.length > 1 && r.sort(h || Wm);
  }
  return {
    opaque: n,
    transparent: r,
    init: a,
    push: o,
    unshift: l,
    sort: c
  };
}
function jm() {
  var e = /* @__PURE__ */ new WeakMap();
  function t(i) {
    var a = i.target;
    a.removeEventListener("dispose", t), e.delete(a);
  }
  function n(i, a) {
    var s = e.get(i), o;
    return s === void 0 ? (o = new Mc(), e.set(i, /* @__PURE__ */ new WeakMap()), e.get(i).set(a, o), i.addEventListener("dispose", t)) : (o = s.get(a), o === void 0 && (o = new Mc(), s.set(a, o))), o;
  }
  function r() {
    e = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: n,
    dispose: r
  };
}
function qm() {
  var e = {};
  return {
    get: function(t) {
      if (e[t.id] !== void 0)
        return e[t.id];
      var n;
      switch (t.type) {
        case "DirectionalLight":
          n = {
            direction: new b(),
            color: new ee(),
            shadow: !1,
            shadowBias: 0,
            shadowRadius: 1,
            shadowMapSize: new G()
          };
          break;
        case "SpotLight":
          n = {
            position: new b(),
            direction: new b(),
            color: new ee(),
            distance: 0,
            coneCos: 0,
            penumbraCos: 0,
            decay: 0,
            shadow: !1,
            shadowBias: 0,
            shadowRadius: 1,
            shadowMapSize: new G()
          };
          break;
        case "PointLight":
          n = {
            position: new b(),
            color: new ee(),
            distance: 0,
            decay: 0,
            shadow: !1,
            shadowBias: 0,
            shadowRadius: 1,
            shadowMapSize: new G(),
            shadowCameraNear: 1,
            shadowCameraFar: 1e3
          };
          break;
        case "HemisphereLight":
          n = {
            direction: new b(),
            skyColor: new ee(),
            groundColor: new ee()
          };
          break;
        case "RectAreaLight":
          n = {
            color: new ee(),
            position: new b(),
            halfWidth: new b(),
            halfHeight: new b()
            // TODO (abelnation): set RectAreaLight shadow uniforms
          };
          break;
      }
      return e[t.id] = n, n;
    }
  };
}
var Xm = 0;
function Ym(e, t) {
  return (t.castShadow ? 1 : 0) - (e.castShadow ? 1 : 0);
}
function Zm() {
  for (var e = new qm(), t = {
    version: 0,
    hash: {
      directionalLength: -1,
      pointLength: -1,
      spotLength: -1,
      rectAreaLength: -1,
      hemiLength: -1,
      numDirectionalShadows: -1,
      numPointShadows: -1,
      numSpotShadows: -1
    },
    ambient: [0, 0, 0],
    probe: [],
    directional: [],
    directionalShadowMap: [],
    directionalShadowMatrix: [],
    spot: [],
    spotShadowMap: [],
    spotShadowMatrix: [],
    rectArea: [],
    point: [],
    pointShadowMap: [],
    pointShadowMatrix: [],
    hemi: [],
    numDirectionalShadows: -1,
    numPointShadows: -1,
    numSpotShadows: -1
  }, n = 0; n < 9; n++) t.probe.push(new b());
  var r = new b(), i = new Ce(), a = new Ce();
  function s(o, l, c) {
    for (var u = 0, h = 0, f = 0, d = 0; d < 9; d++) t.probe[d].set(0, 0, 0);
    var p = 0, v = 0, m = 0, y = 0, x = 0, M = 0, E = 0, w = 0, A = c.matrixWorldInverse;
    o.sort(Ym);
    for (var d = 0, C = o.length; d < C; d++) {
      var T = o[d], D = T.color, I = T.intensity, B = T.distance, O = T.shadow && T.shadow.map ? T.shadow.map.texture : null;
      if (T.isAmbientLight)
        u += D.r * I, h += D.g * I, f += D.b * I;
      else if (T.isLightProbe)
        for (var F = 0; F < 9; F++)
          t.probe[F].addScaledVector(T.sh.coefficients[F], I);
      else if (T.isDirectionalLight) {
        var N = e.get(T);
        if (N.color.copy(T.color).multiplyScalar(T.intensity), N.direction.setFromMatrixPosition(T.matrixWorld), r.setFromMatrixPosition(T.target.matrixWorld), N.direction.sub(r), N.direction.transformDirection(A), N.shadow = T.castShadow, T.castShadow) {
          var z = T.shadow;
          N.shadowBias = z.bias, N.shadowRadius = z.radius, N.shadowMapSize = z.mapSize, t.directionalShadowMap[p] = O, t.directionalShadowMatrix[p] = T.shadow.matrix, M++;
        }
        t.directional[p] = N, p++;
      } else if (T.isSpotLight) {
        var N = e.get(T);
        if (N.position.setFromMatrixPosition(T.matrixWorld), N.position.applyMatrix4(A), N.color.copy(D).multiplyScalar(I), N.distance = B, N.direction.setFromMatrixPosition(T.matrixWorld), r.setFromMatrixPosition(T.target.matrixWorld), N.direction.sub(r), N.direction.transformDirection(A), N.coneCos = Math.cos(T.angle), N.penumbraCos = Math.cos(T.angle * (1 - T.penumbra)), N.decay = T.decay, N.shadow = T.castShadow, T.castShadow) {
          var z = T.shadow;
          N.shadowBias = z.bias, N.shadowRadius = z.radius, N.shadowMapSize = z.mapSize, t.spotShadowMap[m] = O, t.spotShadowMatrix[m] = T.shadow.matrix, w++;
        }
        t.spot[m] = N, m++;
      } else if (T.isRectAreaLight) {
        var N = e.get(T);
        N.color.copy(D).multiplyScalar(I), N.position.setFromMatrixPosition(T.matrixWorld), N.position.applyMatrix4(A), a.identity(), i.copy(T.matrixWorld), i.premultiply(A), a.extractRotation(i), N.halfWidth.set(T.width * 0.5, 0, 0), N.halfHeight.set(0, T.height * 0.5, 0), N.halfWidth.applyMatrix4(a), N.halfHeight.applyMatrix4(a), t.rectArea[y] = N, y++;
      } else if (T.isPointLight) {
        var N = e.get(T);
        if (N.position.setFromMatrixPosition(T.matrixWorld), N.position.applyMatrix4(A), N.color.copy(T.color).multiplyScalar(T.intensity), N.distance = T.distance, N.decay = T.decay, N.shadow = T.castShadow, T.castShadow) {
          var z = T.shadow;
          N.shadowBias = z.bias, N.shadowRadius = z.radius, N.shadowMapSize = z.mapSize, N.shadowCameraNear = z.camera.near, N.shadowCameraFar = z.camera.far, t.pointShadowMap[v] = O, t.pointShadowMatrix[v] = T.shadow.matrix, E++;
        }
        t.point[v] = N, v++;
      } else if (T.isHemisphereLight) {
        var N = e.get(T);
        N.direction.setFromMatrixPosition(T.matrixWorld), N.direction.transformDirection(A), N.direction.normalize(), N.skyColor.copy(T.color).multiplyScalar(I), N.groundColor.copy(T.groundColor).multiplyScalar(I), t.hemi[x] = N, x++;
      }
    }
    t.ambient[0] = u, t.ambient[1] = h, t.ambient[2] = f;
    var H = t.hash;
    (H.directionalLength !== p || H.pointLength !== v || H.spotLength !== m || H.rectAreaLength !== y || H.hemiLength !== x || H.numDirectionalShadows !== M || H.numPointShadows !== E || H.numSpotShadows !== w) && (t.directional.length = p, t.spot.length = m, t.rectArea.length = y, t.point.length = v, t.hemi.length = x, t.directionalShadowMap.length = M, t.pointShadowMap.length = E, t.spotShadowMap.length = w, t.directionalShadowMatrix.length = M, t.pointShadowMatrix.length = E, t.spotShadowMatrix.length = w, H.directionalLength = p, H.pointLength = v, H.spotLength = m, H.rectAreaLength = y, H.hemiLength = x, H.numDirectionalShadows = M, H.numPointShadows = E, H.numSpotShadows = w, t.version = Xm++);
  }
  return {
    setup: s,
    state: t
  };
}
function bc() {
  var e = new Zm(), t = [], n = [];
  function r() {
    t.length = 0, n.length = 0;
  }
  function i(l) {
    t.push(l);
  }
  function a(l) {
    n.push(l);
  }
  function s(l) {
    e.setup(t, n, l);
  }
  var o = {
    lightsArray: t,
    shadowsArray: n,
    lights: e
  };
  return {
    init: r,
    state: o,
    setupLights: s,
    pushLight: i,
    pushShadow: a
  };
}
function Jm() {
  var e = /* @__PURE__ */ new WeakMap();
  function t(i) {
    var a = i.target;
    a.removeEventListener("dispose", t), e.delete(a);
  }
  function n(i, a) {
    var s;
    return e.has(i) === !1 ? (s = new bc(), e.set(i, /* @__PURE__ */ new WeakMap()), e.get(i).set(a, s), i.addEventListener("dispose", t)) : e.get(i).has(a) === !1 ? (s = new bc(), e.get(i).set(a, s)) : s = e.get(i).get(a), s;
  }
  function r() {
    e = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: n,
    dispose: r
  };
}
function sr(e) {
  xe.call(this), this.type = "MeshDepthMaterial", this.depthPacking = jf, this.skinning = !1, this.morphTargets = !1, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.setValues(e);
}
sr.prototype = Object.create(xe.prototype);
sr.prototype.constructor = sr;
sr.prototype.isMeshDepthMaterial = !0;
sr.prototype.copy = function(e) {
  return xe.prototype.copy.call(this, e), this.depthPacking = e.depthPacking, this.skinning = e.skinning, this.morphTargets = e.morphTargets, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this;
};
function or(e) {
  xe.call(this), this.type = "MeshDistanceMaterial", this.referencePosition = new b(), this.nearDistance = 1, this.farDistance = 1e3, this.skinning = !1, this.morphTargets = !1, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.fog = !1, this.setValues(e);
}
or.prototype = Object.create(xe.prototype);
or.prototype.constructor = or;
or.prototype.isMeshDistanceMaterial = !0;
or.prototype.copy = function(e) {
  return xe.prototype.copy.call(this, e), this.referencePosition.copy(e.referencePosition), this.nearDistance = e.nearDistance, this.farDistance = e.farDistance, this.skinning = e.skinning, this.morphTargets = e.morphTargets, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this;
};
var $m = `uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
  float mean = 0.0;
  float squared_mean = 0.0;
	float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy  ) / resolution ) );
  for ( float i = -1.0; i < 1.0 ; i += SAMPLE_RATE) {
    #ifdef HORIZONAL_PASS
      vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( i, 0.0 ) * radius ) / resolution ) );
      mean += distribution.x;
      squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
    #else
      float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0,  i )  * radius ) / resolution ) );
      mean += depth;
      squared_mean += depth * depth;
    #endif
  }
  mean = mean * HALF_SAMPLE_RATE;
  squared_mean = squared_mean * HALF_SAMPLE_RATE;
  float std_dev = sqrt( squared_mean - mean * mean );
  gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`, Qm = `void main() {
	gl_Position = vec4( position, 1.0 );
}`;
function ju(e, t, n) {
  var r = new da(), i = new G(), a = new G(), s = new Ye(), o = [], l = [], c = {}, u = { 0: ht, 1: ua, 2: zs }, h = new St({
    defines: {
      SAMPLE_RATE: 2 / 8,
      HALF_SAMPLE_RATE: 1 / 8
    },
    uniforms: {
      shadow_pass: { value: null },
      resolution: { value: new G() },
      radius: { value: 4 }
    },
    vertexShader: Qm,
    fragmentShader: $m
  }), f = h.clone();
  f.defines.HORIZONAL_PASS = 1;
  var d = new ne();
  d.setAttribute(
    "position",
    new _e(
      new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]),
      3
    )
  );
  var p = new et(d, h), v = this;
  this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = _u, this.render = function(w, A, C) {
    if (v.enabled !== !1 && !(v.autoUpdate === !1 && v.needsUpdate === !1) && w.length !== 0) {
      var T = e.getRenderTarget(), D = e.getActiveCubeFace(), I = e.getActiveMipmapLevel(), B = e.state;
      B.setBlending(In), B.buffers.color.setClear(1, 1, 1, 1), B.buffers.depth.setTest(!0), B.setScissorTest(!1);
      for (var O = 0, F = w.length; O < F; O++) {
        var N = w[O], z = N.shadow;
        if (z === void 0) {
          console.warn("THREE.WebGLShadowMap:", N, "has no shadow.");
          continue;
        }
        i.copy(z.mapSize);
        var H = z.getFrameExtents();
        if (i.multiply(H), a.copy(z.mapSize), (i.x > n || i.y > n) && (console.warn("THREE.WebGLShadowMap:", N, "has shadow exceeding max texture size, reducing"), i.x > n && (a.x = Math.floor(n / H.x), i.x = a.x * H.x, z.mapSize.x = a.x), i.y > n && (a.y = Math.floor(n / H.y), i.y = a.y * H.y, z.mapSize.y = a.y)), z.map === null && !z.isPointLightShadow && this.type === Mi) {
          var te = { minFilter: ft, magFilter: ft, format: rn };
          z.map = new Mt(i.x, i.y, te), z.map.texture.name = N.name + ".shadowMap", z.mapPass = new Mt(i.x, i.y, te), z.camera.updateProjectionMatrix();
        }
        if (z.map === null) {
          var te = { minFilter: ot, magFilter: ot, format: rn };
          z.map = new Mt(i.x, i.y, te), z.map.texture.name = N.name + ".shadowMap", z.camera.updateProjectionMatrix();
        }
        e.setRenderTarget(z.map), e.clear();
        for (var $ = z.getViewportCount(), X = 0; X < $; X++) {
          var Y = z.getViewport(X);
          s.set(
            a.x * Y.x,
            a.y * Y.y,
            a.x * Y.z,
            a.y * Y.w
          ), B.viewport(s), z.updateMatrices(N, X), r = z.getFrustum(), E(A, C, z.camera, N, this.type);
        }
        !z.isPointLightShadow && this.type === Mi && m(z, C);
      }
      v.needsUpdate = !1, e.setRenderTarget(T, D, I);
    }
  };
  function m(w, A) {
    var C = t.update(p);
    h.uniforms.shadow_pass.value = w.map.texture, h.uniforms.resolution.value = w.mapSize, h.uniforms.radius.value = w.radius, e.setRenderTarget(w.mapPass), e.clear(), e.renderBufferDirect(A, null, C, h, p, null), f.uniforms.shadow_pass.value = w.mapPass.texture, f.uniforms.resolution.value = w.mapSize, f.uniforms.radius.value = w.radius, e.setRenderTarget(w.map), e.clear(), e.renderBufferDirect(A, null, C, f, p, null);
  }
  function y(w, A, C) {
    var T = w << 0 | A << 1 | C << 2, D = o[T];
    return D === void 0 && (D = new sr({
      depthPacking: qf,
      morphTargets: w,
      skinning: A
    }), o[T] = D), D;
  }
  function x(w, A, C) {
    var T = w << 0 | A << 1 | C << 2, D = l[T];
    return D === void 0 && (D = new or({
      morphTargets: w,
      skinning: A
    }), l[T] = D), D;
  }
  function M(w, A, C, T, D, I) {
    var B = w.geometry, O = null, F = y, N = w.customDepthMaterial;
    if (C.isPointLight === !0 && (F = x, N = w.customDistanceMaterial), N === void 0) {
      var z = !1;
      A.morphTargets === !0 && (B.isBufferGeometry === !0 ? z = B.morphAttributes && B.morphAttributes.position && B.morphAttributes.position.length > 0 : B.isGeometry === !0 && (z = B.morphTargets && B.morphTargets.length > 0));
      var H = !1;
      w.isSkinnedMesh === !0 && (A.skinning === !0 ? H = !0 : console.warn("THREE.WebGLShadowMap: THREE.SkinnedMesh with material.skinning set to false:", w));
      var te = w.isInstancedMesh === !0;
      O = F(z, H, te);
    } else
      O = N;
    if (e.localClippingEnabled && A.clipShadows === !0 && A.clippingPlanes.length !== 0) {
      var $ = O.uuid, X = A.uuid, Y = c[$];
      Y === void 0 && (Y = {}, c[$] = Y);
      var re = Y[X];
      re === void 0 && (re = O.clone(), Y[X] = re), O = re;
    }
    return O.visible = A.visible, O.wireframe = A.wireframe, I === Mi ? O.side = A.shadowSide !== null ? A.shadowSide : A.side : O.side = A.shadowSide !== null ? A.shadowSide : u[A.side], O.clipShadows = A.clipShadows, O.clippingPlanes = A.clippingPlanes, O.clipIntersection = A.clipIntersection, O.wireframeLinewidth = A.wireframeLinewidth, O.linewidth = A.linewidth, C.isPointLight === !0 && O.isMeshDistanceMaterial === !0 && (O.referencePosition.setFromMatrixPosition(C.matrixWorld), O.nearDistance = T, O.farDistance = D), O;
  }
  function E(w, A, C, T, D) {
    if (w.visible !== !1) {
      var I = w.layers.test(A.layers);
      if (I && (w.isMesh || w.isLine || w.isPoints) && (w.castShadow || w.receiveShadow && D === Mi) && (!w.frustumCulled || r.intersectsObject(w))) {
        w.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse, w.matrixWorld);
        var B = t.update(w), O = w.material;
        if (Array.isArray(O))
          for (var F = B.groups, N = 0, z = F.length; N < z; N++) {
            var H = F[N], te = O[H.materialIndex];
            if (te && te.visible) {
              var $ = M(w, te, T, C.near, C.far, D);
              e.renderBufferDirect(C, null, B, $, w, H);
            }
          }
        else if (O.visible) {
          var $ = M(w, O, T, C.near, C.far, D);
          e.renderBufferDirect(C, null, B, $, w, null);
        }
      }
      for (var X = w.children, Y = 0, re = X.length; Y < re; Y++)
        E(X[Y], A, C, T, D);
    }
  }
}
function Km(e, t, n) {
  var r = n.isWebGL2;
  function i() {
    var R = !1, q = new Ye(), se = null, Ee = new Ye(0, 0, 0, 0);
    return {
      setMask: function(ae) {
        se !== ae && !R && (e.colorMask(ae, ae, ae, ae), se = ae);
      },
      setLocked: function(ae) {
        R = ae;
      },
      setClear: function(ae, Oe, Je, Ke, Ht) {
        Ht === !0 && (ae *= Ke, Oe *= Ke, Je *= Ke), q.set(ae, Oe, Je, Ke), Ee.equals(q) === !1 && (e.clearColor(ae, Oe, Je, Ke), Ee.copy(q));
      },
      reset: function() {
        R = !1, se = null, Ee.set(-1, 0, 0, 0);
      }
    };
  }
  function a() {
    var R = !1, q = null, se = null, Ee = null;
    return {
      setTest: function(ae) {
        ae ? Me(2929) : Be(2929);
      },
      setMask: function(ae) {
        q !== ae && !R && (e.depthMask(ae), q = ae);
      },
      setFunc: function(ae) {
        if (se !== ae) {
          if (ae)
            switch (ae) {
              case Zh:
                e.depthFunc(512);
                break;
              case Jh:
                e.depthFunc(519);
                break;
              case $h:
                e.depthFunc(513);
                break;
              case bo:
                e.depthFunc(515);
                break;
              case Qh:
                e.depthFunc(514);
                break;
              case Kh:
                e.depthFunc(518);
                break;
              case ef:
                e.depthFunc(516);
                break;
              case tf:
                e.depthFunc(517);
                break;
              default:
                e.depthFunc(515);
            }
          else
            e.depthFunc(515);
          se = ae;
        }
      },
      setLocked: function(ae) {
        R = ae;
      },
      setClear: function(ae) {
        Ee !== ae && (e.clearDepth(ae), Ee = ae);
      },
      reset: function() {
        R = !1, q = null, se = null, Ee = null;
      }
    };
  }
  function s() {
    var R = !1, q = null, se = null, Ee = null, ae = null, Oe = null, Je = null, Ke = null, Ht = null;
    return {
      setTest: function(je) {
        R || (je ? Me(2960) : Be(2960));
      },
      setMask: function(je) {
        q !== je && !R && (e.stencilMask(je), q = je);
      },
      setFunc: function(je, At, xt) {
        (se !== je || Ee !== At || ae !== xt) && (e.stencilFunc(je, At, xt), se = je, Ee = At, ae = xt);
      },
      setOp: function(je, At, xt) {
        (Oe !== je || Je !== At || Ke !== xt) && (e.stencilOp(je, At, xt), Oe = je, Je = At, Ke = xt);
      },
      setLocked: function(je) {
        R = je;
      },
      setClear: function(je) {
        Ht !== je && (e.clearStencil(je), Ht = je);
      },
      reset: function() {
        R = !1, q = null, se = null, Ee = null, ae = null, Oe = null, Je = null, Ke = null, Ht = null;
      }
    };
  }
  var o = new i(), l = new a(), c = new s(), u = e.getParameter(34921), h = new Uint8Array(u), f = new Uint8Array(u), d = new Uint8Array(u), p = {}, v = null, m = null, y = null, x = null, M = null, E = null, w = null, A = null, C = null, T = !1, D = null, I = null, B = null, O = null, F = null, N = e.getParameter(35661), z = !1, H = 0, te = e.getParameter(7938);
  te.indexOf("WebGL") !== -1 ? (H = parseFloat(/^WebGL\ ([0-9])/.exec(te)[1]), z = H >= 1) : te.indexOf("OpenGL ES") !== -1 && (H = parseFloat(/^OpenGL\ ES\ ([0-9])/.exec(te)[1]), z = H >= 2);
  var $ = null, X = {}, Y = new Ye(), re = new Ye();
  function Ue(R, q, se) {
    var Ee = new Uint8Array(4), ae = e.createTexture();
    e.bindTexture(R, ae), e.texParameteri(R, 10241, 9728), e.texParameteri(R, 10240, 9728);
    for (var Oe = 0; Oe < se; Oe++)
      e.texImage2D(q + Oe, 0, 6408, 1, 1, 0, 6408, 5121, Ee);
    return ae;
  }
  var ze = {};
  ze[3553] = Ue(3553, 3553, 1), ze[34067] = Ue(34067, 34069, 6), o.setClear(0, 0, 0, 1), l.setClear(1), c.setClear(0), Me(2929), l.setFunc(bo), nt(!1), S(Gl), Me(2884), Qe(In);
  function Fe() {
    for (var R = 0, q = h.length; R < q; R++)
      h[R] = 0;
  }
  function be(R) {
    V(R, 0);
  }
  function V(R, q) {
    if (h[R] = 1, f[R] === 0 && (e.enableVertexAttribArray(R), f[R] = 1), d[R] !== q) {
      var se = r ? e : t.get("ANGLE_instanced_arrays");
      se[r ? "vertexAttribDivisor" : "vertexAttribDivisorANGLE"](R, q), d[R] = q;
    }
  }
  function He() {
    for (var R = 0, q = f.length; R !== q; ++R)
      f[R] !== h[R] && (e.disableVertexAttribArray(R), f[R] = 0);
  }
  function Me(R) {
    p[R] !== !0 && (e.enable(R), p[R] = !0);
  }
  function Be(R) {
    p[R] !== !1 && (e.disable(R), p[R] = !1);
  }
  function de(R) {
    return v !== R ? (e.useProgram(R), v = R, !0) : !1;
  }
  var W = {
    [Ir]: 32774,
    [zh]: 32778,
    [Uh]: 32779
  };
  if (r)
    W[Wl] = 32775, W[jl] = 32776;
  else {
    var Le = t.get("EXT_blend_minmax");
    Le !== null && (W[Wl] = Le.MIN_EXT, W[jl] = Le.MAX_EXT);
  }
  var Ge = {
    [Gh]: 0,
    [Vh]: 1,
    [Hh]: 768,
    [bu]: 770,
    [Yh]: 776,
    [qh]: 774,
    [Wh]: 772,
    [kh]: 769,
    [Eu]: 771,
    [Xh]: 775,
    [jh]: 773
  };
  function Qe(R, q, se, Ee, ae, Oe, Je, Ke) {
    if (R === In) {
      m && (Be(3042), m = !1);
      return;
    }
    if (m || (Me(3042), m = !0), R !== Bh) {
      if (R !== y || Ke !== T) {
        if ((x !== Ir || w !== Ir) && (e.blendEquation(32774), x = Ir, w = Ir), Ke)
          switch (R) {
            case Ei:
              e.blendFuncSeparate(1, 771, 1, 771);
              break;
            case Vl:
              e.blendFunc(1, 1);
              break;
            case Hl:
              e.blendFuncSeparate(0, 0, 769, 771);
              break;
            case kl:
              e.blendFuncSeparate(0, 768, 0, 770);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", R);
              break;
          }
        else
          switch (R) {
            case Ei:
              e.blendFuncSeparate(770, 771, 1, 771);
              break;
            case Vl:
              e.blendFunc(770, 1);
              break;
            case Hl:
              e.blendFunc(0, 769);
              break;
            case kl:
              e.blendFunc(0, 768);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", R);
              break;
          }
        M = null, E = null, A = null, C = null, y = R, T = Ke;
      }
      return;
    }
    ae = ae || q, Oe = Oe || se, Je = Je || Ee, (q !== x || ae !== w) && (e.blendEquationSeparate(W[q], W[ae]), x = q, w = ae), (se !== M || Ee !== E || Oe !== A || Je !== C) && (e.blendFuncSeparate(Ge[se], Ge[Ee], Ge[Oe], Ge[Je]), M = se, E = Ee, A = Oe, C = Je), y = R, T = null;
  }
  function Vt(R, q) {
    R.side === zs ? Be(2884) : Me(2884);
    var se = R.side === ht;
    q && (se = !se), nt(se), R.blending === Ei && R.transparent === !1 ? Qe(In) : Qe(R.blending, R.blendEquation, R.blendSrc, R.blendDst, R.blendEquationAlpha, R.blendSrcAlpha, R.blendDstAlpha, R.premultipliedAlpha), l.setFunc(R.depthFunc), l.setTest(R.depthTest), l.setMask(R.depthWrite), o.setMask(R.colorWrite);
    var Ee = R.stencilWrite;
    c.setTest(Ee), Ee && (c.setMask(R.stencilWriteMask), c.setFunc(R.stencilFunc, R.stencilRef, R.stencilFuncMask), c.setOp(R.stencilFail, R.stencilZFail, R.stencilZPass)), Z(R.polygonOffset, R.polygonOffsetFactor, R.polygonOffsetUnits);
  }
  function nt(R) {
    D !== R && (R ? e.frontFace(2304) : e.frontFace(2305), D = R);
  }
  function S(R) {
    R !== Ih ? (Me(2884), R !== I && (R === Gl ? e.cullFace(1029) : R === Oh ? e.cullFace(1028) : e.cullFace(1032))) : Be(2884), I = R;
  }
  function L(R) {
    R !== B && (z && e.lineWidth(R), B = R);
  }
  function Z(R, q, se) {
    R ? (Me(32823), (O !== q || F !== se) && (e.polygonOffset(q, se), O = q, F = se)) : Be(32823);
  }
  function k(R) {
    R ? Me(3089) : Be(3089);
  }
  function Pe(R) {
    R === void 0 && (R = 33984 + N - 1), $ !== R && (e.activeTexture(R), $ = R);
  }
  function pe(R, q) {
    $ === null && Pe();
    var se = X[$];
    se === void 0 && (se = { type: void 0, texture: void 0 }, X[$] = se), (se.type !== R || se.texture !== q) && (e.bindTexture(R, q || ze[R]), se.type = R, se.texture = q);
  }
  function ce() {
    var R = X[$];
    R !== void 0 && R.type !== void 0 && (e.bindTexture(R.type, null), R.type = void 0, R.texture = void 0);
  }
  function ge() {
    try {
      e.compressedTexImage2D.apply(e, arguments);
    } catch (R) {
      console.error("THREE.WebGLState:", R);
    }
  }
  function De() {
    try {
      e.texImage2D.apply(e, arguments);
    } catch (R) {
      console.error("THREE.WebGLState:", R);
    }
  }
  function ve() {
    try {
      e.texImage3D.apply(e, arguments);
    } catch (R) {
      console.error("THREE.WebGLState:", R);
    }
  }
  function ie(R) {
    Y.equals(R) === !1 && (e.scissor(R.x, R.y, R.z, R.w), Y.copy(R));
  }
  function he(R) {
    re.equals(R) === !1 && (e.viewport(R.x, R.y, R.z, R.w), re.copy(R));
  }
  function oe() {
    for (var R = 0; R < f.length; R++)
      f[R] === 1 && (e.disableVertexAttribArray(R), f[R] = 0);
    p = {}, $ = null, X = {}, v = null, y = null, D = null, I = null, o.reset(), l.reset(), c.reset();
  }
  return {
    buffers: {
      color: o,
      depth: l,
      stencil: c
    },
    initAttributes: Fe,
    enableAttribute: be,
    enableAttributeAndDivisor: V,
    disableUnusedAttributes: He,
    enable: Me,
    disable: Be,
    useProgram: de,
    setBlending: Qe,
    setMaterial: Vt,
    setFlipSided: nt,
    setCullFace: S,
    setLineWidth: L,
    setPolygonOffset: Z,
    setScissorTest: k,
    activeTexture: Pe,
    bindTexture: pe,
    unbindTexture: ce,
    compressedTexImage2D: ge,
    texImage2D: De,
    texImage3D: ve,
    scissor: ie,
    viewport: he,
    reset: oe
  };
}
function eg(e, t, n, r, i, a, s) {
  var o = i.isWebGL2, l = i.maxTextures, c = i.maxCubemapSize, u = i.maxTextureSize, h = i.maxSamples, f = /* @__PURE__ */ new WeakMap(), d, p = !1;
  try {
    p = typeof OffscreenCanvas != "undefined" && new OffscreenCanvas(1, 1).getContext("2d") !== null;
  } catch (S) {
  }
  function v(S, L) {
    return p ? new OffscreenCanvas(S, L) : document.createElementNS("http://www.w3.org/1999/xhtml", "canvas");
  }
  function m(S, L, Z, k) {
    var Pe = 1;
    if ((S.width > k || S.height > k) && (Pe = k / Math.max(S.width, S.height)), Pe < 1 || L === !0)
      if (typeof HTMLImageElement != "undefined" && S instanceof HTMLImageElement || typeof HTMLCanvasElement != "undefined" && S instanceof HTMLCanvasElement || typeof ImageBitmap != "undefined" && S instanceof ImageBitmap) {
        var pe = L ? Ae.floorPowerOfTwo : Math.floor, ce = pe(Pe * S.width), ge = pe(Pe * S.height);
        d === void 0 && (d = v(ce, ge));
        var De = Z ? v(ce, ge) : d;
        De.width = ce, De.height = ge;
        var ve = De.getContext("2d");
        return ve.drawImage(S, 0, 0, ce, ge), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + S.width + "x" + S.height + ") to (" + ce + "x" + ge + ")."), De;
      } else
        return "data" in S && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + S.width + "x" + S.height + ")."), S;
    return S;
  }
  function y(S) {
    return Ae.isPowerOfTwo(S.width) && Ae.isPowerOfTwo(S.height);
  }
  function x(S) {
    return o ? !1 : S.wrapS !== Et || S.wrapT !== Et || S.minFilter !== ot && S.minFilter !== ft;
  }
  function M(S, L) {
    return S.generateMipmaps && L && S.minFilter !== ot && S.minFilter !== ft;
  }
  function E(S, L, Z, k) {
    e.generateMipmap(S);
    var Pe = r.get(L);
    Pe.__maxMipLevel = Math.log(Math.max(Z, k)) * Math.LOG2E;
  }
  function w(S, L, Z) {
    if (o === !1) return L;
    if (S !== null) {
      if (e[S] !== void 0) return e[S];
      console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + S + "'");
    }
    var k = L;
    return L === 6403 && (Z === 5126 && (k = 33326), Z === 5131 && (k = 33325), Z === 5121 && (k = 33321)), L === 6407 && (Z === 5126 && (k = 34837), Z === 5131 && (k = 34843), Z === 5121 && (k = 32849)), L === 6408 && (Z === 5126 && (k = 34836), Z === 5131 && (k = 34842), Z === 5121 && (k = 32856)), k === 33325 || k === 33326 || k === 34842 || k === 34836 ? t.get("EXT_color_buffer_float") : (k === 34843 || k === 34837) && console.warn("THREE.WebGLRenderer: Floating point textures with RGB format not supported. Please use RGBA instead."), k;
  }
  function A(S) {
    return S === ot || S === Eo || S === So ? 9728 : 9729;
  }
  function C(S) {
    var L = S.target;
    L.removeEventListener("dispose", C), D(L), L.isVideoTexture && f.delete(L), s.memory.textures--;
  }
  function T(S) {
    var L = S.target;
    L.removeEventListener("dispose", T), I(L), s.memory.textures--;
  }
  function D(S) {
    var L = r.get(S);
    L.__webglInit !== void 0 && (e.deleteTexture(L.__webglTexture), r.remove(S));
  }
  function I(S) {
    var L = r.get(S), Z = r.get(S.texture);
    if (S) {
      if (Z.__webglTexture !== void 0 && e.deleteTexture(Z.__webglTexture), S.depthTexture && S.depthTexture.dispose(), S.isWebGLCubeRenderTarget)
        for (var k = 0; k < 6; k++)
          e.deleteFramebuffer(L.__webglFramebuffer[k]), L.__webglDepthbuffer && e.deleteRenderbuffer(L.__webglDepthbuffer[k]);
      else
        e.deleteFramebuffer(L.__webglFramebuffer), L.__webglDepthbuffer && e.deleteRenderbuffer(L.__webglDepthbuffer);
      if (S.isWebGLMultiviewRenderTarget) {
        e.deleteTexture(L.__webglColorTexture), e.deleteTexture(L.__webglDepthStencilTexture), s.memory.textures -= 2;
        for (var k = 0, Pe = L.__webglViewFramebuffers.length; k < Pe; k++)
          e.deleteFramebuffer(L.__webglViewFramebuffers[k]);
      }
      r.remove(S.texture), r.remove(S);
    }
  }
  var B = 0;
  function O() {
    B = 0;
  }
  function F() {
    var S = B;
    return S >= l && console.warn("THREE.WebGLTextures: Trying to use " + S + " texture units while this GPU supports only " + l), B += 1, S;
  }
  function N(S, L) {
    var Z = r.get(S);
    if (S.isVideoTexture && Le(S), S.version > 0 && Z.__version !== S.version) {
      var k = S.image;
      if (k === void 0)
        console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined");
      else if (k.complete === !1)
        console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");
      else {
        ze(Z, S, L);
        return;
      }
    }
    n.activeTexture(33984 + L), n.bindTexture(3553, Z.__webglTexture);
  }
  function z(S, L) {
    var Z = r.get(S);
    if (S.version > 0 && Z.__version !== S.version) {
      ze(Z, S, L);
      return;
    }
    n.activeTexture(33984 + L), n.bindTexture(35866, Z.__webglTexture);
  }
  function H(S, L) {
    var Z = r.get(S);
    if (S.version > 0 && Z.__version !== S.version) {
      ze(Z, S, L);
      return;
    }
    n.activeTexture(33984 + L), n.bindTexture(32879, Z.__webglTexture);
  }
  function te(S, L) {
    if (S.image.length === 6) {
      var Z = r.get(S);
      if (S.version > 0 && Z.__version !== S.version) {
        Ue(Z, S), n.activeTexture(33984 + L), n.bindTexture(34067, Z.__webglTexture), e.pixelStorei(37440, S.flipY);
        for (var k = S && (S.isCompressedTexture || S.image[0].isCompressedTexture), Pe = S.image[0] && S.image[0].isDataTexture, pe = [], ce = 0; ce < 6; ce++)
          !k && !Pe ? pe[ce] = m(S.image[ce], !1, !0, c) : pe[ce] = Pe ? S.image[ce].image : S.image[ce];
        var ge = pe[0], De = y(ge) || o, ve = a.convert(S.format), ie = a.convert(S.type), he = w(S.internalFormat, ve, ie);
        re(34067, S, De);
        var oe;
        if (k) {
          for (var ce = 0; ce < 6; ce++) {
            oe = pe[ce].mipmaps;
            for (var R = 0; R < oe.length; R++) {
              var q = oe[R];
              S.format !== rn && S.format !== ir ? ve !== null ? n.compressedTexImage2D(34069 + ce, R, he, q.width, q.height, 0, q.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : n.texImage2D(34069 + ce, R, he, q.width, q.height, 0, ve, ie, q.data);
            }
          }
          Z.__maxMipLevel = oe.length - 1;
        } else {
          oe = S.mipmaps;
          for (var ce = 0; ce < 6; ce++)
            if (Pe) {
              n.texImage2D(34069 + ce, 0, he, pe[ce].width, pe[ce].height, 0, ve, ie, pe[ce].data);
              for (var R = 0; R < oe.length; R++) {
                var q = oe[R], se = q.image[ce].image;
                n.texImage2D(34069 + ce, R + 1, he, se.width, se.height, 0, ve, ie, se.data);
              }
            } else {
              n.texImage2D(34069 + ce, 0, he, ve, ie, pe[ce]);
              for (var R = 0; R < oe.length; R++) {
                var q = oe[R];
                n.texImage2D(34069 + ce, R + 1, he, ve, ie, q.image[ce]);
              }
            }
          Z.__maxMipLevel = oe.length;
        }
        M(S, De) && E(34067, S, ge.width, ge.height), Z.__version = S.version, S.onUpdate && S.onUpdate(S);
      } else
        n.activeTexture(33984 + L), n.bindTexture(34067, Z.__webglTexture);
    }
  }
  function $(S, L) {
    n.activeTexture(33984 + L), n.bindTexture(34067, r.get(S).__webglTexture);
  }
  var X = {
    [Ka]: 10497,
    [Et]: 33071,
    [es]: 33648
  }, Y = {
    [ot]: 9728,
    [Eo]: 9984,
    [So]: 9986,
    [ft]: 9729,
    [Au]: 9985,
    [Gs]: 9987
  };
  function re(S, L, Z) {
    Z ? (e.texParameteri(S, 10242, X[L.wrapS]), e.texParameteri(S, 10243, X[L.wrapT]), (S === 32879 || S === 35866) && e.texParameteri(S, 32882, X[L.wrapR]), e.texParameteri(S, 10240, Y[L.magFilter]), e.texParameteri(S, 10241, Y[L.minFilter])) : (e.texParameteri(S, 10242, 33071), e.texParameteri(S, 10243, 33071), (S === 32879 || S === 35866) && e.texParameteri(S, 32882, 33071), (L.wrapS !== Et || L.wrapT !== Et) && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."), e.texParameteri(S, 10240, A(L.magFilter)), e.texParameteri(S, 10241, A(L.minFilter)), L.minFilter !== ot && L.minFilter !== ft && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter."));
    var k = t.get("EXT_texture_filter_anisotropic");
    if (k) {
      if (L.type === Li && t.get("OES_texture_float_linear") === null || L.type === Ll && (o || t.get("OES_texture_half_float_linear")) === null) return;
      (L.anisotropy > 1 || r.get(L).__currentAnisotropy) && (e.texParameterf(S, k.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(L.anisotropy, i.getMaxAnisotropy())), r.get(L).__currentAnisotropy = L.anisotropy);
    }
  }
  function Ue(S, L) {
    S.__webglInit === void 0 && (S.__webglInit = !0, L.addEventListener("dispose", C), S.__webglTexture = e.createTexture(), s.memory.textures++);
  }
  function ze(S, L, Z) {
    var k = 3553;
    L.isDataTexture2DArray && (k = 35866), L.isDataTexture3D && (k = 32879), Ue(S, L), n.activeTexture(33984 + Z), n.bindTexture(k, S.__webglTexture), e.pixelStorei(37440, L.flipY), e.pixelStorei(37441, L.premultiplyAlpha), e.pixelStorei(3317, L.unpackAlignment);
    var Pe = x(L) && y(L.image) === !1, pe = m(L.image, Pe, !1, u), ce = y(pe) || o, ge = a.convert(L.format), De = a.convert(L.type), ve = w(L.internalFormat, ge, De);
    re(k, L, ce);
    var ie, he = L.mipmaps;
    if (L.isDepthTexture) {
      if (ve = 6402, L.type === Li) {
        if (o === !1) throw new Error("Float Depth Texture only supported in WebGL2.0");
        ve = 36012;
      } else o && (ve = 33189);
      L.format === Gr && ve === 6402 && L.type !== ts && L.type !== Lu && (console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."), L.type = ts, De = a.convert(L.type)), L.format === Ci && (ve = 34041, L.type !== ns && (console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."), L.type = ns, De = a.convert(L.type))), n.texImage2D(3553, 0, ve, pe.width, pe.height, 0, ge, De, null);
    } else if (L.isDataTexture)
      if (he.length > 0 && ce) {
        for (var oe = 0, R = he.length; oe < R; oe++)
          ie = he[oe], n.texImage2D(3553, oe, ve, ie.width, ie.height, 0, ge, De, ie.data);
        L.generateMipmaps = !1, S.__maxMipLevel = he.length - 1;
      } else
        n.texImage2D(3553, 0, ve, pe.width, pe.height, 0, ge, De, pe.data), S.__maxMipLevel = 0;
    else if (L.isCompressedTexture) {
      for (var oe = 0, R = he.length; oe < R; oe++)
        ie = he[oe], L.format !== rn && L.format !== ir ? ge !== null ? n.compressedTexImage2D(3553, oe, ve, ie.width, ie.height, 0, ie.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : n.texImage2D(3553, oe, ve, ie.width, ie.height, 0, ge, De, ie.data);
      S.__maxMipLevel = he.length - 1;
    } else if (L.isDataTexture2DArray)
      n.texImage3D(35866, 0, ve, pe.width, pe.height, pe.depth, 0, ge, De, pe.data), S.__maxMipLevel = 0;
    else if (L.isDataTexture3D)
      n.texImage3D(32879, 0, ve, pe.width, pe.height, pe.depth, 0, ge, De, pe.data), S.__maxMipLevel = 0;
    else if (he.length > 0 && ce) {
      for (var oe = 0, R = he.length; oe < R; oe++)
        ie = he[oe], n.texImage2D(3553, oe, ve, ge, De, ie);
      L.generateMipmaps = !1, S.__maxMipLevel = he.length - 1;
    } else
      n.texImage2D(3553, 0, ve, ge, De, pe), S.__maxMipLevel = 0;
    M(L, ce) && E(k, L, pe.width, pe.height), S.__version = L.version, L.onUpdate && L.onUpdate(L);
  }
  function Fe(S, L, Z, k) {
    var Pe = a.convert(L.texture.format), pe = a.convert(L.texture.type), ce = w(L.texture.internalFormat, Pe, pe);
    n.texImage2D(k, 0, ce, L.width, L.height, 0, Pe, pe, null), e.bindFramebuffer(36160, S), e.framebufferTexture2D(36160, Z, k, r.get(L.texture).__webglTexture, 0), e.bindFramebuffer(36160, null);
  }
  function be(S, L, Z) {
    if (e.bindRenderbuffer(36161, S), L.depthBuffer && !L.stencilBuffer) {
      if (Z) {
        var k = W(L);
        e.renderbufferStorageMultisample(36161, k, 33189, L.width, L.height);
      } else
        e.renderbufferStorage(36161, 33189, L.width, L.height);
      e.framebufferRenderbuffer(36160, 36096, 36161, S);
    } else if (L.depthBuffer && L.stencilBuffer) {
      if (Z) {
        var k = W(L);
        e.renderbufferStorageMultisample(36161, k, 35056, L.width, L.height);
      } else
        e.renderbufferStorage(36161, 34041, L.width, L.height);
      e.framebufferRenderbuffer(36160, 33306, 36161, S);
    } else {
      var Pe = a.convert(L.texture.format), pe = a.convert(L.texture.type), ce = w(L.texture.internalFormat, Pe, pe);
      if (Z) {
        var k = W(L);
        e.renderbufferStorageMultisample(36161, k, ce, L.width, L.height);
      } else
        e.renderbufferStorage(36161, ce, L.width, L.height);
    }
    e.bindRenderbuffer(36161, null);
  }
  function V(S, L) {
    var Z = L && L.isWebGLCubeRenderTarget;
    if (Z) throw new Error("Depth Texture with cube render targets is not supported");
    if (e.bindFramebuffer(36160, S), !(L.depthTexture && L.depthTexture.isDepthTexture))
      throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
    (!r.get(L.depthTexture).__webglTexture || L.depthTexture.image.width !== L.width || L.depthTexture.image.height !== L.height) && (L.depthTexture.image.width = L.width, L.depthTexture.image.height = L.height, L.depthTexture.needsUpdate = !0), N(L.depthTexture, 0);
    var k = r.get(L.depthTexture).__webglTexture;
    if (L.depthTexture.format === Gr)
      e.framebufferTexture2D(36160, 36096, 3553, k, 0);
    else if (L.depthTexture.format === Ci)
      e.framebufferTexture2D(36160, 33306, 3553, k, 0);
    else
      throw new Error("Unknown depthTexture format");
  }
  function He(S) {
    var L = r.get(S), Z = S.isWebGLCubeRenderTarget === !0;
    if (S.depthTexture) {
      if (Z) throw new Error("target.depthTexture not supported in Cube render targets");
      V(L.__webglFramebuffer, S);
    } else if (Z) {
      L.__webglDepthbuffer = [];
      for (var k = 0; k < 6; k++)
        e.bindFramebuffer(36160, L.__webglFramebuffer[k]), L.__webglDepthbuffer[k] = e.createRenderbuffer(), be(L.__webglDepthbuffer[k], S);
    } else
      e.bindFramebuffer(36160, L.__webglFramebuffer), L.__webglDepthbuffer = e.createRenderbuffer(), be(L.__webglDepthbuffer, S);
    e.bindFramebuffer(36160, null);
  }
  function Me(S) {
    var L = r.get(S), Z = r.get(S.texture);
    S.addEventListener("dispose", T), Z.__webglTexture = e.createTexture(), s.memory.textures++;
    var k = S.isWebGLCubeRenderTarget === !0, Pe = S.isWebGLMultisampleRenderTarget === !0, pe = S.isWebGLMultiviewRenderTarget === !0, ce = y(S) || o;
    if (k) {
      L.__webglFramebuffer = [];
      for (var ge = 0; ge < 6; ge++)
        L.__webglFramebuffer[ge] = e.createFramebuffer();
    } else if (L.__webglFramebuffer = e.createFramebuffer(), Pe)
      if (o) {
        L.__webglMultisampledFramebuffer = e.createFramebuffer(), L.__webglColorRenderbuffer = e.createRenderbuffer(), e.bindRenderbuffer(36161, L.__webglColorRenderbuffer);
        var De = a.convert(S.texture.format), ve = a.convert(S.texture.type), ie = w(S.texture.internalFormat, De, ve), he = W(S);
        e.renderbufferStorageMultisample(36161, he, ie, S.width, S.height), e.bindFramebuffer(36160, L.__webglMultisampledFramebuffer), e.framebufferRenderbuffer(36160, 36064, 36161, L.__webglColorRenderbuffer), e.bindRenderbuffer(36161, null), S.depthBuffer && (L.__webglDepthRenderbuffer = e.createRenderbuffer(), be(L.__webglDepthRenderbuffer, S, !0)), e.bindFramebuffer(36160, null);
      } else
        console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.");
    else if (pe) {
      var oe = S.width, R = S.height, q = S.numViews;
      e.bindFramebuffer(36160, L.__webglFramebuffer);
      var se = t.get("OVR_multiview2");
      s.memory.textures += 2;
      var Ee = e.createTexture();
      e.bindTexture(35866, Ee), e.texParameteri(35866, 10240, 9728), e.texParameteri(35866, 10241, 9728), e.texImage3D(35866, 0, 32856, oe, R, q, 0, 6408, 5121, null), se.framebufferTextureMultiviewOVR(36160, 36064, Ee, 0, 0, q);
      var ae = e.createTexture();
      e.bindTexture(35866, ae), e.texParameteri(35866, 10240, 9728), e.texParameteri(35866, 10241, 9728), e.texImage3D(35866, 0, 35056, oe, R, q, 0, 34041, 34042, null), se.framebufferTextureMultiviewOVR(36160, 33306, ae, 0, 0, q);
      for (var Oe = new Array(q), ge = 0; ge < q; ++ge)
        Oe[ge] = e.createFramebuffer(), e.bindFramebuffer(36160, Oe[ge]), e.framebufferTextureLayer(36160, 36064, Ee, 0, ge);
      L.__webglColorTexture = Ee, L.__webglDepthStencilTexture = ae, L.__webglViewFramebuffers = Oe, e.bindFramebuffer(36160, null), e.bindTexture(35866, null);
    }
    if (k) {
      n.bindTexture(34067, Z.__webglTexture), re(34067, S.texture, ce);
      for (var ge = 0; ge < 6; ge++)
        Fe(L.__webglFramebuffer[ge], S, 36064, 34069 + ge);
      M(S.texture, ce) && E(34067, S.texture, S.width, S.height), n.bindTexture(34067, null);
    } else pe || (n.bindTexture(3553, Z.__webglTexture), re(3553, S.texture, ce), Fe(L.__webglFramebuffer, S, 36064, 3553), M(S.texture, ce) && E(3553, S.texture, S.width, S.height), n.bindTexture(3553, null));
    S.depthBuffer && He(S);
  }
  function Be(S) {
    var L = S.texture, Z = y(S) || o;
    if (M(L, Z)) {
      var k = S.isWebGLCubeRenderTarget ? 34067 : 3553, Pe = r.get(L).__webglTexture;
      n.bindTexture(k, Pe), E(k, L, S.width, S.height), n.bindTexture(k, null);
    }
  }
  function de(S) {
    if (S.isWebGLMultisampleRenderTarget)
      if (o) {
        var L = r.get(S);
        e.bindFramebuffer(36008, L.__webglMultisampledFramebuffer), e.bindFramebuffer(36009, L.__webglFramebuffer);
        var Z = S.width, k = S.height, Pe = 16384;
        S.depthBuffer && (Pe |= 256), S.stencilBuffer && (Pe |= 1024), e.blitFramebuffer(0, 0, Z, k, 0, 0, Z, k, Pe, 9728);
      } else
        console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.");
  }
  function W(S) {
    return o && S.isWebGLMultisampleRenderTarget ? Math.min(h, S.samples) : 0;
  }
  function Le(S) {
    var L = s.render.frame;
    f.get(S) !== L && (f.set(S, L), S.update());
  }
  var Ge = !1, Qe = !1;
  function Vt(S, L) {
    S && S.isWebGLRenderTarget && (Ge === !1 && (console.warn("THREE.WebGLTextures.safeSetTexture2D: don't use render targets as textures. Use their .texture property instead."), Ge = !0), S = S.texture), N(S, L);
  }
  function nt(S, L) {
    S && S.isWebGLCubeRenderTarget && (Qe === !1 && (console.warn("THREE.WebGLTextures.safeSetTextureCube: don't use cube render targets as textures. Use their .texture property instead."), Qe = !0), S = S.texture), S && S.isCubeTexture || Array.isArray(S.image) && S.image.length === 6 ? te(S, L) : $(S, L);
  }
  this.allocateTextureUnit = F, this.resetTextureUnits = O, this.setTexture2D = N, this.setTexture2DArray = z, this.setTexture3D = H, this.setTextureCube = te, this.setTextureCubeDynamic = $, this.setupRenderTarget = Me, this.updateRenderTargetMipmap = Be, this.updateMultisampleRenderTarget = de, this.safeSetTexture2D = Vt, this.safeSetTextureCube = nt;
}
function tg(e, t, n) {
  var r = n.isWebGL2;
  function i(a) {
    var s;
    if (a === Vs) return 5121;
    if (a === ff) return 32819;
    if (a === df) return 32820;
    if (a === pf) return 33635;
    if (a === cf) return 5120;
    if (a === uf) return 5122;
    if (a === ts) return 5123;
    if (a === hf) return 5124;
    if (a === Lu) return 5125;
    if (a === Li) return 5126;
    if (a === Ll)
      return r ? 5131 : (s = t.get("OES_texture_half_float"), s !== null ? s.HALF_FLOAT_OES : null);
    if (a === vf) return 6406;
    if (a === ir) return 6407;
    if (a === rn) return 6408;
    if (a === mf) return 6409;
    if (a === gf) return 6410;
    if (a === Gr) return 6402;
    if (a === Ci) return 34041;
    if (a === xf) return 6403;
    if (a === _f) return 36244;
    if (a === wf) return 33319;
    if (a === Mf) return 33320;
    if (a === bf) return 36248;
    if (a === Ef) return 36249;
    if (a === ql || a === Xl || a === Yl || a === Zl)
      if (s = t.get("WEBGL_compressed_texture_s3tc"), s !== null) {
        if (a === ql) return s.COMPRESSED_RGB_S3TC_DXT1_EXT;
        if (a === Xl) return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;
        if (a === Yl) return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;
        if (a === Zl) return s.COMPRESSED_RGBA_S3TC_DXT5_EXT;
      } else
        return null;
    if (a === Jl || a === $l || a === Ql || a === Kl)
      if (s = t.get("WEBGL_compressed_texture_pvrtc"), s !== null) {
        if (a === Jl) return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
        if (a === $l) return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
        if (a === Ql) return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
        if (a === Kl) return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
      } else
        return null;
    if (a === Sf)
      return s = t.get("WEBGL_compressed_texture_etc1"), s !== null ? s.COMPRESSED_RGB_ETC1_WEBGL : null;
    if (a === Tf || a === Af || a === Lf || a === Cf || a === Rf || a === Pf || a === Df || a === If || a === Of || a === Nf || a === Ff || a === Bf || a === zf || a === Uf)
      return s = t.get("WEBGL_compressed_texture_astc"), s !== null ? a : null;
    if (a === ns)
      return r ? 34042 : (s = t.get("WEBGL_depth_texture"), s !== null ? s.UNSIGNED_INT_24_8_WEBGL : null);
  }
  return { convert: i };
}
function Io(e, t, n, r) {
  Mt.call(this, e, t, r), this.depthBuffer = !1, this.stencilBuffer = !1, this.numViews = n;
}
Io.prototype = Object.assign(Object.create(Mt.prototype), {
  constructor: Io,
  isWebGLMultiviewRenderTarget: !0,
  copy: function(e) {
    return Mt.prototype.copy.call(this, e), this.numViews = e.numViews, this;
  },
  setNumViews: function(e) {
    return this.numViews !== e && (this.numViews = e, this.dispose()), this;
  }
});
function ng(e, t) {
  var n = 2, r = e.extensions, i = e.properties, a, s, o, l, c, u, h, f = 0;
  function d() {
    if (h === void 0) {
      var C = r.get("OVR_multiview2");
      if (h = C !== null && t.getContextAttributes().antialias === !1, h) {
        f = t.getParameter(C.MAX_VIEWS_OVR), a = new Io(0, 0, n), u = new G(), l = [], o = [], c = [];
        for (var T = 0; T < f; T++)
          l[T] = new Ce(), o[T] = new gt();
      }
    }
    return h;
  }
  function p(C) {
    return C.isArrayCamera ? C.cameras : (c[0] = C, c);
  }
  function v(C, T) {
    for (var D = p(C), I = 0; I < D.length; I++)
      l[I].copy(D[I].projectionMatrix);
    T.setValue(t, "projectionMatrices", l);
  }
  function m(C, T) {
    for (var D = p(C), I = 0; I < D.length; I++)
      l[I].copy(D[I].matrixWorldInverse);
    T.setValue(t, "viewMatrices", l);
  }
  function y(C, T, D) {
    for (var I = p(T), B = 0; B < I.length; B++)
      l[B].multiplyMatrices(I[B].matrixWorldInverse, C.matrixWorld), o[B].getNormalMatrix(l[B]);
    D.setValue(t, "modelViewMatrices", l), D.setValue(t, "normalMatrices", o);
  }
  function x(C) {
    if (C.isArrayCamera === void 0) return !0;
    var T = C.cameras;
    if (T.length > f) return !1;
    for (var D = 1, I = T.length; D < I; D++)
      if (T[0].viewport.z !== T[D].viewport.z || T[0].viewport.w !== T[D].viewport.w) return !1;
    return !0;
  }
  function M(C) {
    if (s ? u.set(s.width, s.height) : e.getDrawingBufferSize(u), C.isArrayCamera) {
      var T = C.cameras[0].viewport;
      a.setSize(T.z, T.w), a.setNumViews(C.cameras.length);
    } else
      a.setSize(u.x, u.y), a.setNumViews(n);
  }
  function E(C) {
    x(C) !== !1 && (s = e.getRenderTarget(), M(C), e.setRenderTarget(a));
  }
  function w(C) {
    a === e.getRenderTarget() && (e.setRenderTarget(s), A(C));
  }
  function A(C) {
    var T = a, D = T.numViews, I = i.get(T).__webglViewFramebuffers, B = T.width, O = T.height;
    if (C.isArrayCamera)
      for (var F = 0; F < D; F++) {
        var N = C.cameras[F].viewport, z = N.x, H = N.y, te = z + N.z, $ = H + N.w;
        t.bindFramebuffer(36008, I[F]), t.blitFramebuffer(0, 0, B, O, z, H, te, $, 16384, 9728);
      }
    else
      t.bindFramebuffer(36008, I[0]), t.blitFramebuffer(0, 0, B, O, 0, 0, u.x, u.y, 16384, 9728);
  }
  this.isAvailable = d, this.attachCamera = E, this.detachCamera = w, this.updateCameraProjectionMatricesUniform = v, this.updateCameraViewMatricesUniform = m, this.updateObjectMatricesUniforms = y;
}
function Oo(e) {
  ut.call(this), this.cameras = e || [];
}
Oo.prototype = Object.assign(Object.create(ut.prototype), {
  constructor: Oo,
  isArrayCamera: !0
});
function Fi() {
  K.call(this), this.type = "Group";
}
Fi.prototype = Object.assign(Object.create(K.prototype), {
  constructor: Fi,
  isGroup: !0
});
function qu(e, t) {
  var n = this, r = null, i = null, a = "local-floor", s = null, o = [], l = /* @__PURE__ */ new Map(), c = new ut();
  c.layers.enable(1), c.viewport = new Ye();
  var u = new ut();
  u.layers.enable(2), u.viewport = new Ye();
  var h = new Oo([c, u]);
  h.layers.enable(1), h.layers.enable(2);
  var f = null, d = null;
  this.enabled = !1, this.isPresenting = !1, this.getController = function(D) {
    var I = o[D];
    return I === void 0 && (I = {}, o[D] = I), I.targetRay === void 0 && (I.targetRay = new Fi(), I.targetRay.matrixAutoUpdate = !1, I.targetRay.visible = !1), I.targetRay;
  }, this.getControllerGrip = function(D) {
    var I = o[D];
    return I === void 0 && (I = {}, o[D] = I), I.grip === void 0 && (I.grip = new Fi(), I.grip.matrixAutoUpdate = !1, I.grip.visible = !1), I.grip;
  };
  function p(D) {
    var I = l.get(D.inputSource);
    I && (I.targetRay && I.targetRay.dispatchEvent({ type: D.type }), I.grip && I.grip.dispatchEvent({ type: D.type }));
  }
  function v() {
    l.forEach(function(D, I) {
      D.targetRay && (D.targetRay.dispatchEvent({ type: "disconnected", data: I }), D.targetRay.visible = !1), D.grip && (D.grip.dispatchEvent({ type: "disconnected", data: I }), D.grip.visible = !1);
    }), l.clear(), e.setFramebuffer(null), e.setRenderTarget(e.getRenderTarget()), T.stop(), n.isPresenting = !1, n.dispatchEvent({ type: "sessionend" });
  }
  function m(D) {
    i = D, T.setContext(r), T.start(), n.isPresenting = !0, n.dispatchEvent({ type: "sessionstart" });
  }
  this.setFramebufferScaleFactor = function() {
  }, this.setReferenceSpaceType = function(D) {
    a = D;
  }, this.getReferenceSpace = function() {
    return i;
  }, this.getSession = function() {
    return r;
  }, this.setSession = function(D) {
    if (r = D, r !== null) {
      r.addEventListener("select", p), r.addEventListener("selectstart", p), r.addEventListener("selectend", p), r.addEventListener("squeeze", p), r.addEventListener("squeezestart", p), r.addEventListener("squeezeend", p), r.addEventListener("end", v);
      var I = t.getContextAttributes(), B = {
        antialias: I.antialias,
        alpha: I.alpha,
        depth: I.depth,
        stencil: I.stencil
      }, O = new XRWebGLLayer(r, t, B);
      r.updateRenderState({ baseLayer: O }), r.requestReferenceSpace(a).then(m), r.addEventListener("inputsourceschange", y);
    }
  };
  function y(D) {
    for (var I = r.inputSources, B = 0; B < o.length; B++)
      l.set(I[B], o[B]);
    for (var B = 0; B < D.removed.length; B++) {
      var O = D.removed[B], F = l.get(O);
      F && (F.targetRay && F.targetRay.dispatchEvent({ type: "disconnected", data: O }), F.grip && F.grip.dispatchEvent({ type: "disconnected", data: O }), l.delete(O));
    }
    for (var B = 0; B < D.added.length; B++) {
      var O = D.added[B], F = l.get(O);
      F && (F.targetRay && F.targetRay.dispatchEvent({ type: "connected", data: O }), F.grip && F.grip.dispatchEvent({ type: "connected", data: O }));
    }
  }
  var x = new b(), M = new b();
  function E(D, I, B) {
    x.setFromMatrixPosition(I.matrixWorld), M.setFromMatrixPosition(B.matrixWorld);
    var O = x.distanceTo(M), F = I.projectionMatrix.elements, N = B.projectionMatrix.elements, z = F[14] / (F[10] - 1), H = F[14] / (F[10] + 1), te = (F[9] + 1) / F[5], $ = (F[9] - 1) / F[5], X = (F[8] - 1) / F[0], Y = (N[8] + 1) / N[0], re = z * X, Ue = z * Y, ze = O / (-X + Y), Fe = ze * -X;
    I.matrixWorld.decompose(D.position, D.quaternion, D.scale), D.translateX(Fe), D.translateZ(ze), D.matrixWorld.compose(D.position, D.quaternion, D.scale), D.matrixWorldInverse.getInverse(D.matrixWorld);
    var be = z + ze, V = H + ze, He = re - Fe, Me = Ue + (O - Fe), Be = te * H / V * be, de = $ * H / V * be;
    D.projectionMatrix.makePerspective(He, Me, Be, de, be, V);
  }
  function w(D, I) {
    I === null ? D.matrixWorld.copy(D.matrix) : D.matrixWorld.multiplyMatrices(I.matrixWorld, D.matrix), D.matrixWorldInverse.getInverse(D.matrixWorld);
  }
  this.getCamera = function(D) {
    h.near = u.near = c.near = D.near, h.far = u.far = c.far = D.far, (f !== h.near || d !== h.far) && (r.updateRenderState({
      depthNear: h.near,
      depthFar: h.far
    }), f = h.near, d = h.far);
    var I = D.parent, B = h.cameras;
    w(h, I);
    for (var O = 0; O < B.length; O++)
      w(B[O], I);
    D.matrixWorld.copy(h.matrixWorld);
    for (var F = D.children, O = 0, N = F.length; O < N; O++)
      F[O].updateMatrixWorld(!0);
    return E(h, c, u), h;
  };
  var A = null;
  function C(D, I) {
    if (s = I.getViewerPose(i), s !== null) {
      var B = s.views, O = r.renderState.baseLayer;
      e.setFramebuffer(O.framebuffer);
      for (var F = 0; F < B.length; F++) {
        var N = B[F], z = O.getViewport(N), H = h.cameras[F];
        H.matrix.fromArray(N.transform.matrix), H.projectionMatrix.fromArray(N.projectionMatrix), H.viewport.set(z.x, z.y, z.width, z.height), F === 0 && h.matrix.copy(H.matrix);
      }
    }
    for (var te = r.inputSources, F = 0; F < o.length; F++) {
      var $ = o[F], X = te[F], Y = null, re = null;
      X && ($.targetRay && (Y = I.getPose(X.targetRaySpace, i), Y !== null && ($.targetRay.matrix.fromArray(Y.transform.matrix), $.targetRay.matrix.decompose($.targetRay.position, $.targetRay.rotation, $.targetRay.scale))), $.grip && X.gripSpace && (re = I.getPose(X.gripSpace, i), re !== null && ($.grip.matrix.fromArray(re.transform.matrix), $.grip.matrix.decompose($.grip.position, $.grip.rotation, $.grip.scale)))), $.targetRay && ($.targetRay.visible = Y !== null), $.grip && ($.grip.visible = re !== null);
    }
    A && A(D, I);
  }
  var T = new zu();
  T.setAnimationLoop(C), this.setAnimationLoop = function(D) {
    A = D;
  }, this.dispose = function() {
  };
}
Object.assign(qu.prototype, En.prototype);
function Xu(e) {
  e = e || {};
  var t = e.canvas !== void 0 ? e.canvas : document.createElementNS("http://www.w3.org/1999/xhtml", "canvas"), n = e.context !== void 0 ? e.context : null, r = e.alpha !== void 0 ? e.alpha : !1, i = e.depth !== void 0 ? e.depth : !0, a = e.stencil !== void 0 ? e.stencil : !0, s = e.antialias !== void 0 ? e.antialias : !1, o = e.premultipliedAlpha !== void 0 ? e.premultipliedAlpha : !0, l = e.preserveDrawingBuffer !== void 0 ? e.preserveDrawingBuffer : !1, c = e.powerPreference !== void 0 ? e.powerPreference : "default", u = e.failIfMajorPerformanceCaveat !== void 0 ? e.failIfMajorPerformanceCaveat : !1, h = null, f = null;
  this.domElement = t, this.debug = {
    /**
     * Enables error checking and reporting when shader programs are being compiled
     * @type {boolean}
     */
    checkShaderErrors: !0
  }, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this.gammaFactor = 2, this.outputEncoding = Pt, this.physicallyCorrectLights = !1, this.toneMapping = Ml, this.toneMappingExposure = 1, this.toneMappingWhitePoint = 1, this.maxMorphTargets = 8, this.maxMorphNormals = 4;
  var d = this, p = !1, v = null, m = 0, y = 0, x = null, M = null, E = -1, w = {
    geometry: null,
    program: null,
    wireframe: !1
  }, A = null, C = null, T = new Ye(), D = new Ye(), I = null, B = t.width, O = t.height, F = 1, N = null, z = null, H = new Ye(0, 0, B, O), te = new Ye(0, 0, B, O), $ = !1, X = new da(), Y = new Fv(), re = !1, Ue = !1, ze = new Ce(), Fe = new b();
  function be() {
    return x === null ? F : 1;
  }
  var V;
  try {
    var He = {
      alpha: r,
      depth: i,
      stencil: a,
      antialias: s,
      premultipliedAlpha: o,
      preserveDrawingBuffer: l,
      powerPreference: c,
      failIfMajorPerformanceCaveat: u,
      xrCompatible: !0
    };
    if (t.addEventListener("webglcontextlost", oe, !1), t.addEventListener("webglcontextrestored", R, !1), V = n || t.getContext("webgl", He) || t.getContext("experimental-webgl", He), V === null)
      throw t.getContext("webgl") !== null ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.");
    V.getShaderPrecisionFormat === void 0 && (V.getShaderPrecisionFormat = function() {
      return { rangeMin: 1, rangeMax: 1, precision: 1 };
    });
  } catch (g) {
    throw console.error("THREE.WebGLRenderer: " + g.message), g;
  }
  var Me, Be, de, W, Le, Ge, Qe, Vt, nt, S, L, Z, k, Pe, pe, ce, ge;
  function De() {
    Me = new Bv(V), Be = new Nv(V, Me, e), Be.isWebGL2 === !1 && (Me.get("WEBGL_depth_texture"), Me.get("OES_texture_float"), Me.get("OES_texture_half_float"), Me.get("OES_texture_half_float_linear"), Me.get("OES_standard_derivatives"), Me.get("OES_element_index_uint"), Me.get("ANGLE_instanced_arrays")), Me.get("OES_texture_float_linear"), ge = new tg(V, Me, Be), de = new Km(V, Me, Be), de.scissor(D.copy(te).multiplyScalar(F).floor()), de.viewport(T.copy(H).multiplyScalar(F).floor()), W = new Gv(), Le = new Hm(), Ge = new eg(V, Me, de, Le, Be, ge, W), Qe = new dd(V, Be), Vt = new zv(V, Qe, W), nt = new kv(V, Vt, Qe, W), Pe = new Hv(V), S = new Vm(d, Me, Be), L = new jm(), Z = new Jm(), k = new Iv(d, de, nt, o), pe = new Ov(V, Me, W, Be), ce = new Uv(V, Me, W, Be), W.programs = S.programs, d.capabilities = Be, d.extensions = Me, d.properties = Le, d.renderLists = L, d.state = de, d.info = W;
  }
  De();
  var ve = new qu(d, V);
  this.xr = ve;
  var ie = new ng(d, V), he = new ju(d, nt, Be.maxTextureSize);
  this.shadowMap = he, this.getContext = function() {
    return V;
  }, this.getContextAttributes = function() {
    return V.getContextAttributes();
  }, this.forceContextLoss = function() {
    var g = Me.get("WEBGL_lose_context");
    g && g.loseContext();
  }, this.forceContextRestore = function() {
    var g = Me.get("WEBGL_lose_context");
    g && g.restoreContext();
  }, this.getPixelRatio = function() {
    return F;
  }, this.setPixelRatio = function(g) {
    g !== void 0 && (F = g, this.setSize(B, O, !1));
  }, this.getSize = function(g) {
    return g === void 0 && (console.warn("WebGLRenderer: .getsize() now requires a Vector2 as an argument"), g = new G()), g.set(B, O);
  }, this.setSize = function(g, _, P) {
    if (ve.isPresenting) {
      console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");
      return;
    }
    B = g, O = _, t.width = Math.floor(g * F), t.height = Math.floor(_ * F), P !== !1 && (t.style.width = g + "px", t.style.height = _ + "px"), this.setViewport(0, 0, g, _);
  }, this.getDrawingBufferSize = function(g) {
    return g === void 0 && (console.warn("WebGLRenderer: .getdrawingBufferSize() now requires a Vector2 as an argument"), g = new G()), g.set(B * F, O * F).floor();
  }, this.setDrawingBufferSize = function(g, _, P) {
    B = g, O = _, F = P, t.width = Math.floor(g * P), t.height = Math.floor(_ * P), this.setViewport(0, 0, g, _);
  }, this.getCurrentViewport = function(g) {
    return g === void 0 && (console.warn("WebGLRenderer: .getCurrentViewport() now requires a Vector4 as an argument"), g = new Ye()), g.copy(T);
  }, this.getViewport = function(g) {
    return g.copy(H);
  }, this.setViewport = function(g, _, P, U) {
    g.isVector4 ? H.set(g.x, g.y, g.z, g.w) : H.set(g, _, P, U), de.viewport(T.copy(H).multiplyScalar(F).floor());
  }, this.getScissor = function(g) {
    return g.copy(te);
  }, this.setScissor = function(g, _, P, U) {
    g.isVector4 ? te.set(g.x, g.y, g.z, g.w) : te.set(g, _, P, U), de.scissor(D.copy(te).multiplyScalar(F).floor());
  }, this.getScissorTest = function() {
    return $;
  }, this.setScissorTest = function(g) {
    de.setScissorTest($ = g);
  }, this.setOpaqueSort = function(g) {
    N = g;
  }, this.setTransparentSort = function(g) {
    z = g;
  }, this.getClearColor = function() {
    return k.getClearColor();
  }, this.setClearColor = function() {
    k.setClearColor.apply(k, arguments);
  }, this.getClearAlpha = function() {
    return k.getClearAlpha();
  }, this.setClearAlpha = function() {
    k.setClearAlpha.apply(k, arguments);
  }, this.clear = function(g, _, P) {
    var U = 0;
    (g === void 0 || g) && (U |= 16384), (_ === void 0 || _) && (U |= 256), (P === void 0 || P) && (U |= 1024), V.clear(U);
  }, this.clearColor = function() {
    this.clear(!0, !1, !1);
  }, this.clearDepth = function() {
    this.clear(!1, !0, !1);
  }, this.clearStencil = function() {
    this.clear(!1, !1, !0);
  }, this.dispose = function() {
    t.removeEventListener("webglcontextlost", oe, !1), t.removeEventListener("webglcontextrestored", R, !1), L.dispose(), Z.dispose(), Le.dispose(), nt.dispose(), ve.dispose(), je.stop();
  };
  function oe(g) {
    g.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), p = !0;
  }
  function R() {
    console.log("THREE.WebGLRenderer: Context Restored."), p = !1, De();
  }
  function q(g) {
    var _ = g.target;
    _.removeEventListener("dispose", q), se(_);
  }
  function se(g) {
    Ee(g), Le.remove(g);
  }
  function Ee(g) {
    var _ = Le.get(g).program;
    g.program = void 0, _ !== void 0 && S.releaseProgram(_);
  }
  function ae(g, _) {
    g.render(function(P) {
      d.renderBufferImmediate(P, _);
    });
  }
  this.renderBufferImmediate = function(g, _) {
    de.initAttributes();
    var P = Le.get(g);
    g.hasPositions && !P.position && (P.position = V.createBuffer()), g.hasNormals && !P.normal && (P.normal = V.createBuffer()), g.hasUvs && !P.uv && (P.uv = V.createBuffer()), g.hasColors && !P.color && (P.color = V.createBuffer());
    var U = _.getAttributes();
    g.hasPositions && (V.bindBuffer(34962, P.position), V.bufferData(34962, g.positionArray, 35048), de.enableAttribute(U.position), V.vertexAttribPointer(U.position, 3, 5126, !1, 0, 0)), g.hasNormals && (V.bindBuffer(34962, P.normal), V.bufferData(34962, g.normalArray, 35048), de.enableAttribute(U.normal), V.vertexAttribPointer(U.normal, 3, 5126, !1, 0, 0)), g.hasUvs && (V.bindBuffer(34962, P.uv), V.bufferData(34962, g.uvArray, 35048), de.enableAttribute(U.uv), V.vertexAttribPointer(U.uv, 2, 5126, !1, 0, 0)), g.hasColors && (V.bindBuffer(34962, P.color), V.bufferData(34962, g.colorArray, 35048), de.enableAttribute(U.color), V.vertexAttribPointer(U.color, 3, 5126, !1, 0, 0)), de.disableUnusedAttributes(), V.drawArrays(4, 0, g.count), g.count = 0;
  };
  var Oe = new Bn();
  this.renderBufferDirect = function(g, _, P, U, j, me) {
    _ === null && (_ = Oe);
    var le = j.isMesh && j.matrixWorld.determinant() < 0, Ie = pa(g, _, U, j);
    de.setMaterial(U, le);
    var Se = !1;
    (w.geometry !== P.id || w.program !== Ie.id || w.wireframe !== (U.wireframe === !0)) && (w.geometry = P.id, w.program = Ie.id, w.wireframe = U.wireframe === !0, Se = !0), (U.morphTargets || U.morphNormals) && (Pe.update(j, P, U, Ie), Se = !0);
    var Te = P.index, qe = P.attributes.position;
    if (Te === null) {
      if (qe === void 0 || qe.count === 0) return;
    } else if (Te.count === 0)
      return;
    var ke = 1;
    U.wireframe === !0 && (Te = Vt.getWireframeAttribute(P), ke = 2);
    var Ne, ue = pe;
    Te !== null && (Ne = Qe.get(Te), ue = ce, ue.setIndex(Ne)), Se && (Je(j, P, U, Ie), Te !== null && V.bindBuffer(34963, Ne.buffer));
    var ye = Te !== null ? Te.count : qe.count, Jt = P.drawRange.start * ke, ct = P.drawRange.count * ke, pr = me !== null ? me.start * ke : 0, Lt = me !== null ? me.count * ke : 1 / 0, _t = Math.max(Jt, pr), Ws = Math.min(ye, Jt + ct, pr + Lt) - 1, ma = Math.max(0, Ws - _t + 1);
    if (ma !== 0) {
      if (j.isMesh)
        U.wireframe === !0 ? (de.setLineWidth(U.wireframeLinewidth * be()), ue.setMode(1)) : ue.setMode(4);
      else if (j.isLine) {
        var js = U.linewidth;
        js === void 0 && (js = 1), de.setLineWidth(js * be()), j.isLineSegments ? ue.setMode(1) : j.isLineLoop ? ue.setMode(2) : ue.setMode(3);
      } else j.isPoints ? ue.setMode(0) : j.isSprite && ue.setMode(4);
      j.isInstancedMesh ? ue.renderInstances(P, _t, ma, j.count) : P.isInstancedBufferGeometry ? ue.renderInstances(P, _t, ma, P.maxInstancedCount) : ue.render(_t, ma);
    }
  };
  function Je(g, _, P, U) {
    if (!(Be.isWebGL2 === !1 && (g.isInstancedMesh || _.isInstancedBufferGeometry) && Me.get("ANGLE_instanced_arrays") === null)) {
      de.initAttributes();
      var j = _.attributes, me = U.getAttributes(), le = P.defaultAttributeValues;
      for (var Ie in me) {
        var Se = me[Ie];
        if (Se >= 0) {
          var Te = j[Ie];
          if (Te !== void 0) {
            var qe = Te.normalized, ke = Te.itemSize, Ne = Qe.get(Te);
            if (Ne === void 0) continue;
            var ue = Ne.buffer, ye = Ne.type, Jt = Ne.bytesPerElement;
            if (Te.isInterleavedBufferAttribute) {
              var ct = Te.data, pr = ct.stride, Lt = Te.offset;
              ct && ct.isInstancedInterleavedBuffer ? (de.enableAttributeAndDivisor(Se, ct.meshPerAttribute), _.maxInstancedCount === void 0 && (_.maxInstancedCount = ct.meshPerAttribute * ct.count)) : de.enableAttribute(Se), V.bindBuffer(34962, ue), V.vertexAttribPointer(Se, ke, ye, qe, pr * Jt, Lt * Jt);
            } else
              Te.isInstancedBufferAttribute ? (de.enableAttributeAndDivisor(Se, Te.meshPerAttribute), _.maxInstancedCount === void 0 && (_.maxInstancedCount = Te.meshPerAttribute * Te.count)) : de.enableAttribute(Se), V.bindBuffer(34962, ue), V.vertexAttribPointer(Se, ke, ye, qe, 0, 0);
          } else if (Ie === "instanceMatrix") {
            var Ne = Qe.get(g.instanceMatrix);
            if (Ne === void 0) continue;
            var ue = Ne.buffer, ye = Ne.type;
            de.enableAttributeAndDivisor(Se + 0, 1), de.enableAttributeAndDivisor(Se + 1, 1), de.enableAttributeAndDivisor(Se + 2, 1), de.enableAttributeAndDivisor(Se + 3, 1), V.bindBuffer(34962, ue), V.vertexAttribPointer(Se + 0, 4, ye, !1, 64, 0), V.vertexAttribPointer(Se + 1, 4, ye, !1, 64, 16), V.vertexAttribPointer(Se + 2, 4, ye, !1, 64, 32), V.vertexAttribPointer(Se + 3, 4, ye, !1, 64, 48);
          } else if (le !== void 0) {
            var _t = le[Ie];
            if (_t !== void 0)
              switch (_t.length) {
                case 2:
                  V.vertexAttrib2fv(Se, _t);
                  break;
                case 3:
                  V.vertexAttrib3fv(Se, _t);
                  break;
                case 4:
                  V.vertexAttrib4fv(Se, _t);
                  break;
                default:
                  V.vertexAttrib1fv(Se, _t);
              }
          }
        }
      }
      de.disableUnusedAttributes();
    }
  }
  this.compile = function(g, _) {
    f = Z.get(g, _), f.init(), g.traverse(function(U) {
      U.isLight && (f.pushLight(U), U.castShadow && f.pushShadow(U));
    }), f.setupLights(_);
    var P = {};
    g.traverse(function(U) {
      if (U.material)
        if (Array.isArray(U.material))
          for (var j = 0; j < U.material.length; j++)
            U.material[j].uuid in P || (kt(U.material[j], g, U), P[U.material[j].uuid] = !0);
        else U.material.uuid in P || (kt(U.material, g, U), P[U.material.uuid] = !0);
    });
  };
  var Ke = null;
  function Ht(g) {
    ve.isPresenting || Ke && Ke(g);
  }
  var je = new zu();
  je.setAnimationLoop(Ht), typeof window != "undefined" && je.setContext(window), this.setAnimationLoop = function(g) {
    Ke = g, ve.setAnimationLoop(g), je.start();
  }, this.render = function(g, _) {
    var P, U;
    if (arguments[2] !== void 0 && (console.warn("THREE.WebGLRenderer.render(): the renderTarget argument has been removed. Use .setRenderTarget() instead."), P = arguments[2]), arguments[3] !== void 0 && (console.warn("THREE.WebGLRenderer.render(): the forceClear argument has been removed. Use .clear() instead."), U = arguments[3]), !(_ && _.isCamera)) {
      console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
      return;
    }
    if (!p) {
      w.geometry = null, w.program = null, w.wireframe = !1, E = -1, A = null, g.autoUpdate === !0 && g.updateMatrixWorld(), _.parent === null && _.updateMatrixWorld(), ve.enabled && ve.isPresenting && (_ = ve.getCamera(_)), f = Z.get(g, _), f.init(), g.onBeforeRender(d, g, _, P || x), ze.multiplyMatrices(_.projectionMatrix, _.matrixWorldInverse), X.setFromProjectionMatrix(ze), Ue = this.localClippingEnabled, re = Y.init(this.clippingPlanes, Ue, _), h = L.get(g, _), h.init(), At(g, _, 0, d.sortObjects), d.sortObjects === !0 && h.sort(N, z), re && Y.beginShadows();
      var j = f.state.shadowsArray;
      he.render(j, g, _), f.setupLights(_), re && Y.endShadows(), this.info.autoReset && this.info.reset(), P !== void 0 && this.setRenderTarget(P), ve.enabled && ie.isAvailable() && ie.attachCamera(_), k.render(h, g, _, U);
      var me = h.opaque, le = h.transparent;
      if (g.overrideMaterial) {
        var Ie = g.overrideMaterial;
        me.length && xt(me, g, _, Ie), le.length && xt(le, g, _, Ie);
      } else
        me.length && xt(me, g, _), le.length && xt(le, g, _);
      g.onAfterRender(d, g, _), x !== null && (Ge.updateRenderTargetMipmap(x), Ge.updateMultisampleRenderTarget(x)), de.buffers.depth.setTest(!0), de.buffers.depth.setMask(!0), de.buffers.color.setMask(!0), de.setPolygonOffset(!1), ve.enabled && ie.isAvailable() && ie.detachCamera(_), h = null, f = null;
    }
  };
  function At(g, _, P, U) {
    if (g.visible !== !1) {
      var j = g.layers.test(_.layers);
      if (j) {
        if (g.isGroup)
          P = g.renderOrder;
        else if (g.isLOD)
          g.autoUpdate === !0 && g.update(_);
        else if (g.isLight)
          f.pushLight(g), g.castShadow && f.pushShadow(g);
        else if (g.isSprite) {
          if (!g.frustumCulled || X.intersectsSprite(g)) {
            U && Fe.setFromMatrixPosition(g.matrixWorld).applyMatrix4(ze);
            var me = nt.update(g), le = g.material;
            le.visible && h.push(g, me, le, P, Fe.z, null);
          }
        } else if (g.isImmediateRenderObject)
          U && Fe.setFromMatrixPosition(g.matrixWorld).applyMatrix4(ze), h.push(g, null, g.material, P, Fe.z, null);
        else if ((g.isMesh || g.isLine || g.isPoints) && (g.isSkinnedMesh && g.skeleton.frame !== W.render.frame && (g.skeleton.update(), g.skeleton.frame = W.render.frame), !g.frustumCulled || X.intersectsObject(g))) {
          U && Fe.setFromMatrixPosition(g.matrixWorld).applyMatrix4(ze);
          var me = nt.update(g), le = g.material;
          if (Array.isArray(le))
            for (var Ie = me.groups, Se = 0, Te = Ie.length; Se < Te; Se++) {
              var qe = Ie[Se], ke = le[qe.materialIndex];
              ke && ke.visible && h.push(g, me, ke, P, Fe.z, qe);
            }
          else le.visible && h.push(g, me, le, P, Fe.z, null);
        }
      }
      for (var Ne = g.children, Se = 0, Te = Ne.length; Se < Te; Se++)
        At(Ne[Se], _, P, U);
    }
  }
  function xt(g, _, P, U) {
    for (var j = 0, me = g.length; j < me; j++) {
      var le = g[j], Ie = le.object, Se = le.geometry, Te = U === void 0 ? le.material : U, qe = le.group;
      if (P.isArrayCamera)
        if (C = P, ve.enabled && ie.isAvailable())
          fr(Ie, _, P, Se, Te, qe);
        else
          for (var ke = P.cameras, Ne = 0, ue = ke.length; Ne < ue; Ne++) {
            var ye = ke[Ne];
            Ie.layers.test(ye.layers) && (de.viewport(T.copy(ye.viewport)), f.setupLights(ye), fr(Ie, _, ye, Se, Te, qe));
          }
      else
        C = null, fr(Ie, _, P, Se, Te, qe);
    }
  }
  function fr(g, _, P, U, j, me) {
    if (g.onBeforeRender(d, _, P, U, j, me), f = Z.get(_, C || P), g.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse, g.matrixWorld), g.normalMatrix.getNormalMatrix(g.modelViewMatrix), g.isImmediateRenderObject) {
      var le = pa(P, _, j, g);
      de.setMaterial(j), w.geometry = null, w.program = null, w.wireframe = !1, ae(g, le);
    } else
      d.renderBufferDirect(P, _, U, j, g, me);
    g.onAfterRender(d, _, P, U, j, me), f = Z.get(_, C || P);
  }
  function kt(g, _, P) {
    var U = Le.get(g), j = f.state.lights, me = f.state.shadowsArray, le = j.state.version, Ie = S.getParameters(g, j.state, me, _, Y.numPlanes, Y.numIntersection, P), Se = S.getProgramCacheKey(Ie), Te = U.program, qe = !0;
    if (Te === void 0)
      g.addEventListener("dispose", q);
    else if (Te.cacheKey !== Se)
      Ee(g);
    else if (U.lightsStateVersion !== le)
      U.lightsStateVersion = le, qe = !1;
    else {
      if (Ie.shaderID !== void 0)
        return;
      qe = !1;
    }
    qe && (Te = S.acquireProgram(Ie, Se), U.program = Te, U.uniforms = Ie.uniforms, U.environment = g.isMeshStandardMaterial ? _.environment : null, U.outputEncoding = d.outputEncoding, g.program = Te);
    var ke = Te.getAttributes();
    if (g.morphTargets) {
      g.numSupportedMorphTargets = 0;
      for (var Ne = 0; Ne < d.maxMorphTargets; Ne++)
        ke["morphTarget" + Ne] >= 0 && g.numSupportedMorphTargets++;
    }
    if (g.morphNormals) {
      g.numSupportedMorphNormals = 0;
      for (var Ne = 0; Ne < d.maxMorphNormals; Ne++)
        ke["morphNormal" + Ne] >= 0 && g.numSupportedMorphNormals++;
    }
    var ue = U.uniforms;
    (!g.isShaderMaterial && !g.isRawShaderMaterial || g.clipping === !0) && (U.numClippingPlanes = Y.numPlanes, U.numIntersection = Y.numIntersection, ue.clippingPlanes = Y.uniform), U.fog = _.fog, U.needsLights = Ph(g), U.lightsStateVersion = le, U.needsLights && (ue.ambientLightColor.value = j.state.ambient, ue.lightProbe.value = j.state.probe, ue.directionalLights.value = j.state.directional, ue.spotLights.value = j.state.spot, ue.rectAreaLights.value = j.state.rectArea, ue.pointLights.value = j.state.point, ue.hemisphereLights.value = j.state.hemi, ue.directionalShadowMap.value = j.state.directionalShadowMap, ue.directionalShadowMatrix.value = j.state.directionalShadowMatrix, ue.spotShadowMap.value = j.state.spotShadowMap, ue.spotShadowMatrix.value = j.state.spotShadowMatrix, ue.pointShadowMap.value = j.state.pointShadowMap, ue.pointShadowMatrix.value = j.state.pointShadowMatrix);
    var ye = U.program.getUniforms(), Jt = On.seqWithValue(ye.seq, ue);
    U.uniformsList = Jt;
  }
  function pa(g, _, P, U) {
    Ge.resetTextureUnits();
    var j = _.fog, me = P.isMeshStandardMaterial ? _.environment : null, le = Le.get(P), Ie = f.state.lights;
    if (re && (Ue || g !== A)) {
      var Se = g === A && P.id === E;
      Y.setState(
        P.clippingPlanes,
        P.clipIntersection,
        P.clipShadows,
        g,
        le,
        Se
      );
    }
    P.version === le.__version ? (le.program === void 0 || P.fog && le.fog !== j || le.environment !== me || le.needsLights && le.lightsStateVersion !== Ie.state.version || le.numClippingPlanes !== void 0 && (le.numClippingPlanes !== Y.numPlanes || le.numIntersection !== Y.numIntersection) || le.outputEncoding !== d.outputEncoding) && kt(P, _, U) : (kt(P, _, U), le.__version = P.version);
    var Te = !1, qe = !1, ke = !1, Ne = le.program, ue = Ne.getUniforms(), ye = le.uniforms;
    if (de.useProgram(Ne.program) && (Te = !0, qe = !0, ke = !0), P.id !== E && (E = P.id, qe = !0), Te || A !== g) {
      if (Ne.numMultiviewViews > 0 ? ie.updateCameraProjectionMatricesUniform(g, ue) : ue.setValue(V, "projectionMatrix", g.projectionMatrix), Be.logarithmicDepthBuffer && ue.setValue(
        V,
        "logDepthBufFC",
        2 / (Math.log(g.far + 1) / Math.LN2)
      ), A !== g && (A = g, qe = !0, ke = !0), P.isShaderMaterial || P.isMeshPhongMaterial || P.isMeshToonMaterial || P.isMeshStandardMaterial || P.envMap) {
        var Jt = ue.map.cameraPosition;
        Jt !== void 0 && Jt.setValue(
          V,
          Fe.setFromMatrixPosition(g.matrixWorld)
        );
      }
      (P.isMeshPhongMaterial || P.isMeshToonMaterial || P.isMeshLambertMaterial || P.isMeshBasicMaterial || P.isMeshStandardMaterial || P.isShaderMaterial) && ue.setValue(V, "isOrthographic", g.isOrthographicCamera === !0), (P.isMeshPhongMaterial || P.isMeshToonMaterial || P.isMeshLambertMaterial || P.isMeshBasicMaterial || P.isMeshStandardMaterial || P.isShaderMaterial || P.skinning) && (Ne.numMultiviewViews > 0 ? ie.updateCameraViewMatricesUniform(g, ue) : ue.setValue(V, "viewMatrix", g.matrixWorldInverse));
    }
    if (P.skinning) {
      ue.setOptional(V, U, "bindMatrix"), ue.setOptional(V, U, "bindMatrixInverse");
      var ct = U.skeleton;
      if (ct) {
        var pr = ct.bones;
        if (Be.floatVertexTextures) {
          if (ct.boneTexture === void 0) {
            var Lt = Math.sqrt(pr.length * 4);
            Lt = Ae.ceilPowerOfTwo(Lt), Lt = Math.max(Lt, 4);
            var _t = new Float32Array(Lt * Lt * 4);
            _t.set(ct.boneMatrices);
            var Ws = new jr(_t, Lt, Lt, rn, Li);
            ct.boneMatrices = _t, ct.boneTexture = Ws, ct.boneTextureSize = Lt;
          }
          ue.setValue(V, "boneTexture", ct.boneTexture, Ge), ue.setValue(V, "boneTextureSize", ct.boneTextureSize);
        } else
          ue.setOptional(V, ct, "boneMatrices");
      }
    }
    return (qe || le.receiveShadow !== U.receiveShadow) && (le.receiveShadow = U.receiveShadow, ue.setValue(V, "receiveShadow", U.receiveShadow)), qe && (ue.setValue(V, "toneMappingExposure", d.toneMappingExposure), ue.setValue(V, "toneMappingWhitePoint", d.toneMappingWhitePoint), le.needsLights && Rh(ye, ke), j && P.fog && wh(ye, j), P.isMeshBasicMaterial ? Ft(ye, P) : P.isMeshLambertMaterial ? (Ft(ye, P), Mh(ye, P)) : P.isMeshToonMaterial ? (Ft(ye, P), Eh(ye, P)) : P.isMeshPhongMaterial ? (Ft(ye, P), bh(ye, P)) : P.isMeshStandardMaterial ? (Ft(ye, P, me), P.isMeshPhysicalMaterial ? Sh(ye, P, me) : Ul(ye, P, me)) : P.isMeshMatcapMaterial ? (Ft(ye, P), Th(ye, P)) : P.isMeshDepthMaterial ? (Ft(ye, P), Ah(ye, P)) : P.isMeshDistanceMaterial ? (Ft(ye, P), Lh(ye, P)) : P.isMeshNormalMaterial ? (Ft(ye, P), Ch(ye, P)) : P.isLineBasicMaterial ? (va(ye, P), P.isLineDashedMaterial && dr(ye, P)) : P.isPointsMaterial ? xh(ye, P) : P.isSpriteMaterial ? _h(ye, P) : P.isShadowMaterial && (ye.color.value.copy(P.color), ye.opacity.value = P.opacity), ye.ltc_1 !== void 0 && (ye.ltc_1.value = J.LTC_1), ye.ltc_2 !== void 0 && (ye.ltc_2.value = J.LTC_2), On.upload(V, le.uniformsList, ye, Ge), P.isShaderMaterial && (P.uniformsNeedUpdate = !1)), P.isShaderMaterial && P.uniformsNeedUpdate === !0 && (On.upload(V, le.uniformsList, ye, Ge), P.uniformsNeedUpdate = !1), P.isSpriteMaterial && ue.setValue(V, "center", U.center), Ne.numMultiviewViews > 0 ? ie.updateObjectMatricesUniforms(U, g, ue) : (ue.setValue(V, "modelViewMatrix", U.modelViewMatrix), ue.setValue(V, "normalMatrix", U.normalMatrix)), ue.setValue(V, "modelMatrix", U.matrixWorld), Ne;
  }
  function Ft(g, _, P) {
    g.opacity.value = _.opacity, _.color && g.diffuse.value.copy(_.color), _.emissive && g.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity), _.map && (g.map.value = _.map), _.alphaMap && (g.alphaMap.value = _.alphaMap), _.specularMap && (g.specularMap.value = _.specularMap);
    var U = _.envMap || P;
    U && (g.envMap.value = U, g.flipEnvMap.value = U.isCubeTexture ? -1 : 1, g.reflectivity.value = _.reflectivity, g.refractionRatio.value = _.refractionRatio, g.maxMipLevel.value = Le.get(U).__maxMipLevel), _.lightMap && (g.lightMap.value = _.lightMap, g.lightMapIntensity.value = _.lightMapIntensity), _.aoMap && (g.aoMap.value = _.aoMap, g.aoMapIntensity.value = _.aoMapIntensity);
    var j;
    _.map ? j = _.map : _.specularMap ? j = _.specularMap : _.displacementMap ? j = _.displacementMap : _.normalMap ? j = _.normalMap : _.bumpMap ? j = _.bumpMap : _.roughnessMap ? j = _.roughnessMap : _.metalnessMap ? j = _.metalnessMap : _.alphaMap ? j = _.alphaMap : _.emissiveMap && (j = _.emissiveMap), j !== void 0 && (j.isWebGLRenderTarget && (j = j.texture), j.matrixAutoUpdate === !0 && j.updateMatrix(), g.uvTransform.value.copy(j.matrix));
    var me;
    _.aoMap ? me = _.aoMap : _.lightMap && (me = _.lightMap), me !== void 0 && (me.isWebGLRenderTarget && (me = me.texture), me.matrixAutoUpdate === !0 && me.updateMatrix(), g.uv2Transform.value.copy(me.matrix));
  }
  function va(g, _) {
    g.diffuse.value.copy(_.color), g.opacity.value = _.opacity;
  }
  function dr(g, _) {
    g.dashSize.value = _.dashSize, g.totalSize.value = _.dashSize + _.gapSize, g.scale.value = _.scale;
  }
  function xh(g, _) {
    g.diffuse.value.copy(_.color), g.opacity.value = _.opacity, g.size.value = _.size * F, g.scale.value = O * 0.5, _.map && (g.map.value = _.map), _.alphaMap && (g.alphaMap.value = _.alphaMap);
    var P;
    _.map ? P = _.map : _.alphaMap && (P = _.alphaMap), P !== void 0 && (P.matrixAutoUpdate === !0 && P.updateMatrix(), g.uvTransform.value.copy(P.matrix));
  }
  function _h(g, _) {
    g.diffuse.value.copy(_.color), g.opacity.value = _.opacity, g.rotation.value = _.rotation, _.map && (g.map.value = _.map), _.alphaMap && (g.alphaMap.value = _.alphaMap);
    var P;
    _.map ? P = _.map : _.alphaMap && (P = _.alphaMap), P !== void 0 && (P.matrixAutoUpdate === !0 && P.updateMatrix(), g.uvTransform.value.copy(P.matrix));
  }
  function wh(g, _) {
    g.fogColor.value.copy(_.color), _.isFog ? (g.fogNear.value = _.near, g.fogFar.value = _.far) : _.isFogExp2 && (g.fogDensity.value = _.density);
  }
  function Mh(g, _) {
    _.emissiveMap && (g.emissiveMap.value = _.emissiveMap);
  }
  function bh(g, _) {
    g.specular.value.copy(_.specular), g.shininess.value = Math.max(_.shininess, 1e-4), _.emissiveMap && (g.emissiveMap.value = _.emissiveMap), _.bumpMap && (g.bumpMap.value = _.bumpMap, g.bumpScale.value = _.bumpScale, _.side === ht && (g.bumpScale.value *= -1)), _.normalMap && (g.normalMap.value = _.normalMap, g.normalScale.value.copy(_.normalScale), _.side === ht && g.normalScale.value.negate()), _.displacementMap && (g.displacementMap.value = _.displacementMap, g.displacementScale.value = _.displacementScale, g.displacementBias.value = _.displacementBias);
  }
  function Eh(g, _) {
    g.specular.value.copy(_.specular), g.shininess.value = Math.max(_.shininess, 1e-4), _.gradientMap && (g.gradientMap.value = _.gradientMap), _.emissiveMap && (g.emissiveMap.value = _.emissiveMap), _.bumpMap && (g.bumpMap.value = _.bumpMap, g.bumpScale.value = _.bumpScale, _.side === ht && (g.bumpScale.value *= -1)), _.normalMap && (g.normalMap.value = _.normalMap, g.normalScale.value.copy(_.normalScale), _.side === ht && g.normalScale.value.negate()), _.displacementMap && (g.displacementMap.value = _.displacementMap, g.displacementScale.value = _.displacementScale, g.displacementBias.value = _.displacementBias);
  }
  function Ul(g, _, P) {
    g.roughness.value = _.roughness, g.metalness.value = _.metalness, _.roughnessMap && (g.roughnessMap.value = _.roughnessMap), _.metalnessMap && (g.metalnessMap.value = _.metalnessMap), _.emissiveMap && (g.emissiveMap.value = _.emissiveMap), _.bumpMap && (g.bumpMap.value = _.bumpMap, g.bumpScale.value = _.bumpScale, _.side === ht && (g.bumpScale.value *= -1)), _.normalMap && (g.normalMap.value = _.normalMap, g.normalScale.value.copy(_.normalScale), _.side === ht && g.normalScale.value.negate()), _.displacementMap && (g.displacementMap.value = _.displacementMap, g.displacementScale.value = _.displacementScale, g.displacementBias.value = _.displacementBias), (_.envMap || P) && (g.envMapIntensity.value = _.envMapIntensity);
  }
  function Sh(g, _, P) {
    Ul(g, _, P), g.reflectivity.value = _.reflectivity, g.clearcoat.value = _.clearcoat, g.clearcoatRoughness.value = _.clearcoatRoughness, _.sheen && g.sheen.value.copy(_.sheen), _.clearcoatNormalMap && (g.clearcoatNormalScale.value.copy(_.clearcoatNormalScale), g.clearcoatNormalMap.value = _.clearcoatNormalMap, _.side === ht && g.clearcoatNormalScale.value.negate()), g.transparency.value = _.transparency;
  }
  function Th(g, _) {
    _.matcap && (g.matcap.value = _.matcap), _.bumpMap && (g.bumpMap.value = _.bumpMap, g.bumpScale.value = _.bumpScale, _.side === ht && (g.bumpScale.value *= -1)), _.normalMap && (g.normalMap.value = _.normalMap, g.normalScale.value.copy(_.normalScale), _.side === ht && g.normalScale.value.negate()), _.displacementMap && (g.displacementMap.value = _.displacementMap, g.displacementScale.value = _.displacementScale, g.displacementBias.value = _.displacementBias);
  }
  function Ah(g, _) {
    _.displacementMap && (g.displacementMap.value = _.displacementMap, g.displacementScale.value = _.displacementScale, g.displacementBias.value = _.displacementBias);
  }
  function Lh(g, _) {
    _.displacementMap && (g.displacementMap.value = _.displacementMap, g.displacementScale.value = _.displacementScale, g.displacementBias.value = _.displacementBias), g.referencePosition.value.copy(_.referencePosition), g.nearDistance.value = _.nearDistance, g.farDistance.value = _.farDistance;
  }
  function Ch(g, _) {
    _.bumpMap && (g.bumpMap.value = _.bumpMap, g.bumpScale.value = _.bumpScale, _.side === ht && (g.bumpScale.value *= -1)), _.normalMap && (g.normalMap.value = _.normalMap, g.normalScale.value.copy(_.normalScale), _.side === ht && g.normalScale.value.negate()), _.displacementMap && (g.displacementMap.value = _.displacementMap, g.displacementScale.value = _.displacementScale, g.displacementBias.value = _.displacementBias);
  }
  function Rh(g, _) {
    g.ambientLightColor.needsUpdate = _, g.lightProbe.needsUpdate = _, g.directionalLights.needsUpdate = _, g.pointLights.needsUpdate = _, g.spotLights.needsUpdate = _, g.rectAreaLights.needsUpdate = _, g.hemisphereLights.needsUpdate = _;
  }
  function Ph(g) {
    return g.isMeshLambertMaterial || g.isMeshToonMaterial || g.isMeshPhongMaterial || g.isMeshStandardMaterial || g.isShadowMaterial || g.isShaderMaterial && g.lights === !0;
  }
  this.setFramebuffer = function(g) {
    v !== g && x === null && V.bindFramebuffer(36160, g), v = g;
  }, this.getActiveCubeFace = function() {
    return m;
  }, this.getActiveMipmapLevel = function() {
    return y;
  }, this.getRenderTarget = function() {
    return x;
  }, this.setRenderTarget = function(g, _, P) {
    x = g, m = _, y = P, g && Le.get(g).__webglFramebuffer === void 0 && Ge.setupRenderTarget(g);
    var U = v, j = !1;
    if (g) {
      var me = Le.get(g).__webglFramebuffer;
      g.isWebGLCubeRenderTarget ? (U = me[_ || 0], j = !0) : g.isWebGLMultisampleRenderTarget ? U = Le.get(g).__webglMultisampledFramebuffer : U = me, T.copy(g.viewport), D.copy(g.scissor), I = g.scissorTest;
    } else
      T.copy(H).multiplyScalar(F).floor(), D.copy(te).multiplyScalar(F).floor(), I = $;
    if (M !== U && (V.bindFramebuffer(36160, U), M = U), de.viewport(T), de.scissor(D), de.setScissorTest(I), j) {
      var le = Le.get(g.texture);
      V.framebufferTexture2D(36160, 36064, 34069 + (_ || 0), le.__webglTexture, P || 0);
    }
  }, this.readRenderTargetPixels = function(g, _, P, U, j, me, le) {
    if (!(g && g.isWebGLRenderTarget)) {
      console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
      return;
    }
    var Ie = Le.get(g).__webglFramebuffer;
    if (g.isWebGLCubeRenderTarget && le !== void 0 && (Ie = Ie[le]), Ie) {
      var Se = !1;
      Ie !== M && (V.bindFramebuffer(36160, Ie), Se = !0);
      try {
        var Te = g.texture, qe = Te.format, ke = Te.type;
        if (qe !== rn && ge.convert(qe) !== V.getParameter(35739)) {
          console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
          return;
        }
        if (ke !== Vs && ge.convert(ke) !== V.getParameter(35738) && // IE11, Edge and Chrome Mac < 52 (#9513)
        !(ke === Li && (Be.isWebGL2 || Me.get("OES_texture_float") || Me.get("WEBGL_color_buffer_float"))) && // Chrome Mac >= 52 and Firefox
        !(ke === Ll && (Be.isWebGL2 ? Me.get("EXT_color_buffer_float") : Me.get("EXT_color_buffer_half_float")))) {
          console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
          return;
        }
        V.checkFramebufferStatus(36160) === 36053 ? _ >= 0 && _ <= g.width - U && P >= 0 && P <= g.height - j && V.readPixels(_, P, U, j, ge.convert(qe), ge.convert(ke), me) : console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.");
      } finally {
        Se && V.bindFramebuffer(36160, M);
      }
    }
  }, this.copyFramebufferToTexture = function(g, _, P) {
    P === void 0 && (P = 0);
    var U = Math.pow(2, -P), j = Math.floor(_.image.width * U), me = Math.floor(_.image.height * U), le = ge.convert(_.format);
    Ge.setTexture2D(_, 0), V.copyTexImage2D(3553, P, le, g.x, g.y, j, me, 0), de.unbindTexture();
  }, this.copyTextureToTexture = function(g, _, P, U) {
    var j = _.image.width, me = _.image.height, le = ge.convert(P.format), Ie = ge.convert(P.type);
    Ge.setTexture2D(P, 0), _.isDataTexture ? V.texSubImage2D(3553, U || 0, g.x, g.y, j, me, le, Ie, _.image.data) : V.texSubImage2D(3553, U || 0, g.x, g.y, le, Ie, _.image), de.unbindTexture();
  }, this.initTexture = function(g) {
    Ge.setTexture2D(g, 0), de.unbindTexture();
  }, typeof __THREE_DEVTOOLS__ != "undefined" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
}
function No(e, t) {
  this.name = "", this.color = new ee(e), this.density = t !== void 0 ? t : 25e-5;
}
Object.assign(No.prototype, {
  isFogExp2: !0,
  clone: function() {
    return new No(this.color, this.density);
  },
  toJSON: function() {
    return {
      type: "FogExp2",
      color: this.color.getHex(),
      density: this.density
    };
  }
});
function Fo(e, t, n) {
  this.name = "", this.color = new ee(e), this.near = t !== void 0 ? t : 1, this.far = n !== void 0 ? n : 1e3;
}
Object.assign(Fo.prototype, {
  isFog: !0,
  clone: function() {
    return new Fo(this.color, this.near, this.far);
  },
  toJSON: function() {
    return {
      type: "Fog",
      color: this.color.getHex(),
      near: this.near,
      far: this.far
    };
  }
});
function Un(e, t) {
  this.array = e, this.stride = t, this.count = e !== void 0 ? e.length / t : 0, this.usage = Hs, this.updateRange = { offset: 0, count: -1 }, this.version = 0;
}
Object.defineProperty(Un.prototype, "needsUpdate", {
  set: function(e) {
    e === !0 && this.version++;
  }
});
Object.assign(Un.prototype, {
  isInterleavedBuffer: !0,
  onUploadCallback: function() {
  },
  setUsage: function(e) {
    return this.usage = e, this;
  },
  copy: function(e) {
    return this.array = new e.array.constructor(e.array), this.count = e.count, this.stride = e.stride, this.usage = e.usage, this;
  },
  copyAt: function(e, t, n) {
    e *= this.stride, n *= t.stride;
    for (var r = 0, i = this.stride; r < i; r++)
      this.array[e + r] = t.array[n + r];
    return this;
  },
  set: function(e, t) {
    return t === void 0 && (t = 0), this.array.set(e, t), this;
  },
  clone: function() {
    return new this.constructor().copy(this);
  },
  onUpload: function(e) {
    return this.onUploadCallback = e, this;
  }
});
var Jn = new b();
function os(e, t, n, r) {
  this.data = e, this.itemSize = t, this.offset = n, this.normalized = r === !0;
}
Object.defineProperties(os.prototype, {
  count: {
    get: function() {
      return this.data.count;
    }
  },
  array: {
    get: function() {
      return this.data.array;
    }
  }
});
Object.assign(os.prototype, {
  isInterleavedBufferAttribute: !0,
  applyMatrix4: function(e) {
    for (var t = 0, n = this.data.count; t < n; t++)
      Jn.x = this.getX(t), Jn.y = this.getY(t), Jn.z = this.getZ(t), Jn.applyMatrix4(e), this.setXYZ(t, Jn.x, Jn.y, Jn.z);
    return this;
  },
  setX: function(e, t) {
    return this.data.array[e * this.data.stride + this.offset] = t, this;
  },
  setY: function(e, t) {
    return this.data.array[e * this.data.stride + this.offset + 1] = t, this;
  },
  setZ: function(e, t) {
    return this.data.array[e * this.data.stride + this.offset + 2] = t, this;
  },
  setW: function(e, t) {
    return this.data.array[e * this.data.stride + this.offset + 3] = t, this;
  },
  getX: function(e) {
    return this.data.array[e * this.data.stride + this.offset];
  },
  getY: function(e) {
    return this.data.array[e * this.data.stride + this.offset + 1];
  },
  getZ: function(e) {
    return this.data.array[e * this.data.stride + this.offset + 2];
  },
  getW: function(e) {
    return this.data.array[e * this.data.stride + this.offset + 3];
  },
  setXY: function(e, t, n) {
    return e = e * this.data.stride + this.offset, this.data.array[e + 0] = t, this.data.array[e + 1] = n, this;
  },
  setXYZ: function(e, t, n, r) {
    return e = e * this.data.stride + this.offset, this.data.array[e + 0] = t, this.data.array[e + 1] = n, this.data.array[e + 2] = r, this;
  },
  setXYZW: function(e, t, n, r, i) {
    return e = e * this.data.stride + this.offset, this.data.array[e + 0] = t, this.data.array[e + 1] = n, this.data.array[e + 2] = r, this.data.array[e + 3] = i, this;
  }
});
function lr(e) {
  xe.call(this), this.type = "SpriteMaterial", this.color = new ee(16777215), this.map = null, this.alphaMap = null, this.rotation = 0, this.sizeAttenuation = !0, this.transparent = !0, this.setValues(e);
}
lr.prototype = Object.create(xe.prototype);
lr.prototype.constructor = lr;
lr.prototype.isSpriteMaterial = !0;
lr.prototype.copy = function(e) {
  return xe.prototype.copy.call(this, e), this.color.copy(e.color), this.map = e.map, this.alphaMap = e.alphaMap, this.rotation = e.rotation, this.sizeAttenuation = e.sizeAttenuation, this;
};
var Ar, yi = new b(), Lr = new b(), Cr = new b(), Rr = new G(), xi = new G(), Yu = new Ce(), Da = new b(), _i = new b(), Ia = new b(), Ec = new G(), vo = new G(), Sc = new G();
function Bo(e) {
  if (K.call(this), this.type = "Sprite", Ar === void 0) {
    Ar = new ne();
    var t = new Float32Array([
      -0.5,
      -0.5,
      0,
      0,
      0,
      0.5,
      -0.5,
      0,
      1,
      0,
      0.5,
      0.5,
      0,
      1,
      1,
      -0.5,
      0.5,
      0,
      0,
      1
    ]), n = new Un(t, 5);
    Ar.setIndex([0, 1, 2, 0, 2, 3]), Ar.setAttribute("position", new os(n, 3, 0, !1)), Ar.setAttribute("uv", new os(n, 2, 3, !1));
  }
  this.geometry = Ar, this.material = e !== void 0 ? e : new lr(), this.center = new G(0.5, 0.5);
}
Bo.prototype = Object.assign(Object.create(K.prototype), {
  constructor: Bo,
  isSprite: !0,
  raycast: function(e, t) {
    e.camera === null && console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'), Lr.setFromMatrixScale(this.matrixWorld), Yu.copy(e.camera.matrixWorld), this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse, this.matrixWorld), Cr.setFromMatrixPosition(this.modelViewMatrix), e.camera.isPerspectiveCamera && this.material.sizeAttenuation === !1 && Lr.multiplyScalar(-Cr.z);
    var n = this.material.rotation, r, i;
    n !== 0 && (i = Math.cos(n), r = Math.sin(n));
    var a = this.center;
    Oa(Da.set(-0.5, -0.5, 0), Cr, a, Lr, r, i), Oa(_i.set(0.5, -0.5, 0), Cr, a, Lr, r, i), Oa(Ia.set(0.5, 0.5, 0), Cr, a, Lr, r, i), Ec.set(0, 0), vo.set(1, 0), Sc.set(1, 1);
    var s = e.ray.intersectTriangle(Da, _i, Ia, !1, yi);
    if (!(s === null && (Oa(_i.set(-0.5, 0.5, 0), Cr, a, Lr, r, i), vo.set(0, 1), s = e.ray.intersectTriangle(Da, Ia, _i, !1, yi), s === null))) {
      var o = e.ray.origin.distanceTo(yi);
      o < e.near || o > e.far || t.push({
        distance: o,
        point: yi.clone(),
        uv: pt.getUV(yi, Da, _i, Ia, Ec, vo, Sc, new G()),
        face: null,
        object: this
      });
    }
  },
  clone: function() {
    return new this.constructor(this.material).copy(this);
  },
  copy: function(e) {
    return K.prototype.copy.call(this, e), e.center !== void 0 && this.center.copy(e.center), this;
  }
});
function Oa(e, t, n, r, i, a) {
  Rr.subVectors(e, n).addScalar(0.5).multiply(r), i !== void 0 ? (xi.x = a * Rr.x - i * Rr.y, xi.y = i * Rr.x + a * Rr.y) : xi.copy(Rr), e.copy(t), e.x += xi.x, e.y += xi.y, e.applyMatrix4(Yu);
}
var Na = new b(), Tc = new b();
function ls() {
  K.call(this), this.type = "LOD", Object.defineProperties(this, {
    levels: {
      enumerable: !0,
      value: []
    }
  }), this.autoUpdate = !0;
}
ls.prototype = Object.assign(Object.create(K.prototype), {
  constructor: ls,
  isLOD: !0,
  copy: function(e) {
    K.prototype.copy.call(this, e, !1);
    for (var t = e.levels, n = 0, r = t.length; n < r; n++) {
      var i = t[n];
      this.addLevel(i.object.clone(), i.distance);
    }
    return this.autoUpdate = e.autoUpdate, this;
  },
  addLevel: function(e, t) {
    t === void 0 && (t = 0), t = Math.abs(t);
    for (var n = this.levels, r = 0; r < n.length && !(t < n[r].distance); r++)
      ;
    return n.splice(r, 0, { distance: t, object: e }), this.add(e), this;
  },
  getObjectForDistance: function(e) {
    var t = this.levels;
    if (t.length > 0) {
      for (var n = 1, r = t.length; n < r && !(e < t[n].distance); n++)
        ;
      return t[n - 1].object;
    }
    return null;
  },
  raycast: function(e, t) {
    var n = this.levels;
    if (n.length > 0) {
      Na.setFromMatrixPosition(this.matrixWorld);
      var r = e.ray.origin.distanceTo(Na);
      this.getObjectForDistance(r).raycast(e, t);
    }
  },
  update: function(e) {
    var t = this.levels;
    if (t.length > 1) {
      Na.setFromMatrixPosition(e.matrixWorld), Tc.setFromMatrixPosition(this.matrixWorld);
      var n = Na.distanceTo(Tc);
      t[0].object.visible = !0;
      for (var r = 1, i = t.length; r < i && n >= t[r].distance; r++)
        t[r - 1].object.visible = !1, t[r].object.visible = !0;
      for (; r < i; r++)
        t[r].object.visible = !1;
    }
  },
  toJSON: function(e) {
    var t = K.prototype.toJSON.call(this, e);
    this.autoUpdate === !1 && (t.object.autoUpdate = !1), t.object.levels = [];
    for (var n = this.levels, r = 0, i = n.length; r < i; r++) {
      var a = n[r];
      t.object.levels.push({
        object: a.object.uuid,
        distance: a.distance
      });
    }
    return t;
  }
});
function cs(e, t) {
  e && e.isGeometry && console.error("THREE.SkinnedMesh no longer supports THREE.Geometry. Use THREE.BufferGeometry instead."), et.call(this, e, t), this.type = "SkinnedMesh", this.bindMode = "attached", this.bindMatrix = new Ce(), this.bindMatrixInverse = new Ce();
}
cs.prototype = Object.assign(Object.create(et.prototype), {
  constructor: cs,
  isSkinnedMesh: !0,
  bind: function(e, t) {
    this.skeleton = e, t === void 0 && (this.updateMatrixWorld(!0), this.skeleton.calculateInverses(), t = this.matrixWorld), this.bindMatrix.copy(t), this.bindMatrixInverse.getInverse(t);
  },
  pose: function() {
    this.skeleton.pose();
  },
  normalizeSkinWeights: function() {
    for (var e = new Ye(), t = this.geometry.attributes.skinWeight, n = 0, r = t.count; n < r; n++) {
      e.x = t.getX(n), e.y = t.getY(n), e.z = t.getZ(n), e.w = t.getW(n);
      var i = 1 / e.manhattanLength();
      i !== 1 / 0 ? e.multiplyScalar(i) : e.set(1, 0, 0, 0), t.setXYZW(n, e.x, e.y, e.z, e.w);
    }
  },
  updateMatrixWorld: function(e) {
    et.prototype.updateMatrixWorld.call(this, e), this.bindMode === "attached" ? this.bindMatrixInverse.getInverse(this.matrixWorld) : this.bindMode === "detached" ? this.bindMatrixInverse.getInverse(this.bindMatrix) : console.warn("THREE.SkinnedMesh: Unrecognized bindMode: " + this.bindMode);
  },
  clone: function() {
    return new this.constructor(this.geometry, this.material).copy(this);
  }
});
var Ac = new Ce(), rg = new Ce();
function zo(e, t) {
  if (e = e || [], this.bones = e.slice(0), this.boneMatrices = new Float32Array(this.bones.length * 16), this.frame = -1, t === void 0)
    this.calculateInverses();
  else if (this.bones.length === t.length)
    this.boneInverses = t.slice(0);
  else {
    console.warn("THREE.Skeleton boneInverses is the wrong length."), this.boneInverses = [];
    for (var n = 0, r = this.bones.length; n < r; n++)
      this.boneInverses.push(new Ce());
  }
}
Object.assign(zo.prototype, {
  calculateInverses: function() {
    this.boneInverses = [];
    for (var e = 0, t = this.bones.length; e < t; e++) {
      var n = new Ce();
      this.bones[e] && n.getInverse(this.bones[e].matrixWorld), this.boneInverses.push(n);
    }
  },
  pose: function() {
    var e, t, n;
    for (t = 0, n = this.bones.length; t < n; t++)
      e = this.bones[t], e && e.matrixWorld.getInverse(this.boneInverses[t]);
    for (t = 0, n = this.bones.length; t < n; t++)
      e = this.bones[t], e && (e.parent && e.parent.isBone ? (e.matrix.getInverse(e.parent.matrixWorld), e.matrix.multiply(e.matrixWorld)) : e.matrix.copy(e.matrixWorld), e.matrix.decompose(e.position, e.quaternion, e.scale));
  },
  update: function() {
    for (var e = this.bones, t = this.boneInverses, n = this.boneMatrices, r = this.boneTexture, i = 0, a = e.length; i < a; i++) {
      var s = e[i] ? e[i].matrixWorld : rg;
      Ac.multiplyMatrices(s, t[i]), Ac.toArray(n, i * 16);
    }
    r !== void 0 && (r.needsUpdate = !0);
  },
  clone: function() {
    return new zo(this.bones, this.boneInverses);
  },
  getBoneByName: function(e) {
    for (var t = 0, n = this.bones.length; t < n; t++) {
      var r = this.bones[t];
      if (r.name === e)
        return r;
    }
  }
});
function Lc() {
  K.call(this), this.type = "Bone";
}
Lc.prototype = Object.assign(Object.create(K.prototype), {
  constructor: Lc,
  isBone: !0
});
var Cc = new Ce(), Rc = new Ce(), Pr = [], wi = new et();
function Uo(e, t, n) {
  et.call(this, e, t), this.instanceMatrix = new _e(new Float32Array(n * 16), 16), this.count = n, this.frustumCulled = !1;
}
Uo.prototype = Object.assign(Object.create(et.prototype), {
  constructor: Uo,
  isInstancedMesh: !0,
  getMatrixAt: function(e, t) {
    t.fromArray(this.instanceMatrix.array, e * 16);
  },
  raycast: function(e, t) {
    var n = this.matrixWorld, r = this.count;
    if (wi.geometry = this.geometry, wi.material = this.material, wi.material !== void 0)
      for (var i = 0; i < r; i++)
        this.getMatrixAt(i, Cc), Rc.multiplyMatrices(n, Cc), wi.matrixWorld = Rc, wi.raycast(e, Pr), Pr.length > 0 && (Pr[0].instanceId = i, Pr[0].object = this, t.push(Pr[0]), Pr.length = 0);
  },
  setMatrixAt: function(e, t) {
    t.toArray(this.instanceMatrix.array, e * 16);
  },
  updateMorphTargets: function() {
  }
});
function at(e) {
  xe.call(this), this.type = "LineBasicMaterial", this.color = new ee(16777215), this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.setValues(e);
}
at.prototype = Object.create(xe.prototype);
at.prototype.constructor = at;
at.prototype.isLineBasicMaterial = !0;
at.prototype.copy = function(e) {
  return xe.prototype.copy.call(this, e), this.color.copy(e.color), this.linewidth = e.linewidth, this.linecap = e.linecap, this.linejoin = e.linejoin, this;
};
var Pc = new b(), Dc = new b(), Ic = new Ce(), Fa = new ui(), Ba = new kn();
function Ut(e, t, n) {
  n === 1 && console.error("THREE.Line: parameter THREE.LinePieces no longer supported. Use THREE.LineSegments instead."), K.call(this), this.type = "Line", this.geometry = e !== void 0 ? e : new ne(), this.material = t !== void 0 ? t : new at();
}
Ut.prototype = Object.assign(Object.create(K.prototype), {
  constructor: Ut,
  isLine: !0,
  computeLineDistances: function() {
    var e = this.geometry;
    if (e.isBufferGeometry)
      if (e.index === null) {
        for (var t = e.attributes.position, n = [0], r = 1, i = t.count; r < i; r++)
          Pc.fromBufferAttribute(t, r - 1), Dc.fromBufferAttribute(t, r), n[r] = n[r - 1], n[r] += Pc.distanceTo(Dc);
        e.setAttribute("lineDistance", new Q(n, 1));
      } else
        console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    else if (e.isGeometry) {
      var a = e.vertices, n = e.lineDistances;
      n[0] = 0;
      for (var r = 1, i = a.length; r < i; r++)
        n[r] = n[r - 1], n[r] += a[r - 1].distanceTo(a[r]);
    }
    return this;
  },
  raycast: function(e, t) {
    var n = e.linePrecision, r = this.geometry, i = this.matrixWorld;
    if (r.boundingSphere === null && r.computeBoundingSphere(), Ba.copy(r.boundingSphere), Ba.applyMatrix4(i), Ba.radius += n, e.ray.intersectsSphere(Ba) !== !1) {
      Ic.getInverse(i), Fa.copy(e.ray).applyMatrix4(Ic);
      var a = n / ((this.scale.x + this.scale.y + this.scale.z) / 3), s = a * a, o = new b(), l = new b(), c = new b(), u = new b(), h = this && this.isLineSegments ? 2 : 1;
      if (r.isBufferGeometry) {
        var f = r.index, d = r.attributes, p = d.position.array;
        if (f !== null)
          for (var v = f.array, m = 0, y = v.length - 1; m < y; m += h) {
            var x = v[m], M = v[m + 1];
            o.fromArray(p, x * 3), l.fromArray(p, M * 3);
            var E = Fa.distanceSqToSegment(o, l, u, c);
            if (!(E > s)) {
              u.applyMatrix4(this.matrixWorld);
              var w = e.ray.origin.distanceTo(u);
              w < e.near || w > e.far || t.push({
                distance: w,
                // What do we want? intersection point on the ray or on the segment??
                // point: raycaster.ray.at( distance ),
                point: c.clone().applyMatrix4(this.matrixWorld),
                index: m,
                face: null,
                faceIndex: null,
                object: this
              });
            }
          }
        else
          for (var m = 0, y = p.length / 3 - 1; m < y; m += h) {
            o.fromArray(p, 3 * m), l.fromArray(p, 3 * m + 3);
            var E = Fa.distanceSqToSegment(o, l, u, c);
            if (!(E > s)) {
              u.applyMatrix4(this.matrixWorld);
              var w = e.ray.origin.distanceTo(u);
              w < e.near || w > e.far || t.push({
                distance: w,
                // What do we want? intersection point on the ray or on the segment??
                // point: raycaster.ray.at( distance ),
                point: c.clone().applyMatrix4(this.matrixWorld),
                index: m,
                face: null,
                faceIndex: null,
                object: this
              });
            }
          }
      } else if (r.isGeometry)
        for (var A = r.vertices, C = A.length, m = 0; m < C - 1; m += h) {
          var E = Fa.distanceSqToSegment(A[m], A[m + 1], u, c);
          if (!(E > s)) {
            u.applyMatrix4(this.matrixWorld);
            var w = e.ray.origin.distanceTo(u);
            w < e.near || w > e.far || t.push({
              distance: w,
              // What do we want? intersection point on the ray or on the segment??
              // point: raycaster.ray.at( distance ),
              point: c.clone().applyMatrix4(this.matrixWorld),
              index: m,
              face: null,
              faceIndex: null,
              object: this
            });
          }
        }
    }
  },
  clone: function() {
    return new this.constructor(this.geometry, this.material).copy(this);
  }
});
var za = new b(), Ua = new b();
function lt(e, t) {
  Ut.call(this, e, t), this.type = "LineSegments";
}
lt.prototype = Object.assign(Object.create(Ut.prototype), {
  constructor: lt,
  isLineSegments: !0,
  computeLineDistances: function() {
    var e = this.geometry;
    if (e.isBufferGeometry)
      if (e.index === null) {
        for (var t = e.attributes.position, n = [], r = 0, i = t.count; r < i; r += 2)
          za.fromBufferAttribute(t, r), Ua.fromBufferAttribute(t, r + 1), n[r] = r === 0 ? 0 : n[r - 1], n[r + 1] = n[r] + za.distanceTo(Ua);
        e.setAttribute("lineDistance", new Q(n, 1));
      } else
        console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    else if (e.isGeometry)
      for (var a = e.vertices, n = e.lineDistances, r = 0, i = a.length; r < i; r += 2)
        za.copy(a[r]), Ua.copy(a[r + 1]), n[r] = r === 0 ? 0 : n[r - 1], n[r + 1] = n[r] + za.distanceTo(Ua);
    return this;
  }
});
function Go(e, t) {
  Ut.call(this, e, t), this.type = "LineLoop";
}
Go.prototype = Object.assign(Object.create(Ut.prototype), {
  constructor: Go,
  isLineLoop: !0
});
function cr(e) {
  xe.call(this), this.type = "PointsMaterial", this.color = new ee(16777215), this.map = null, this.alphaMap = null, this.size = 1, this.sizeAttenuation = !0, this.morphTargets = !1, this.setValues(e);
}
cr.prototype = Object.create(xe.prototype);
cr.prototype.constructor = cr;
cr.prototype.isPointsMaterial = !0;
cr.prototype.copy = function(e) {
  return xe.prototype.copy.call(this, e), this.color.copy(e.color), this.map = e.map, this.alphaMap = e.alphaMap, this.size = e.size, this.sizeAttenuation = e.sizeAttenuation, this.morphTargets = e.morphTargets, this;
};
var Oc = new Ce(), Vo = new ui(), Ga = new kn(), Va = new b();
function Ho(e, t) {
  K.call(this), this.type = "Points", this.geometry = e !== void 0 ? e : new ne(), this.material = t !== void 0 ? t : new cr(), this.updateMorphTargets();
}
Ho.prototype = Object.assign(Object.create(K.prototype), {
  constructor: Ho,
  isPoints: !0,
  raycast: function(e, t) {
    var n = this.geometry, r = this.matrixWorld, i = e.params.Points.threshold;
    if (n.boundingSphere === null && n.computeBoundingSphere(), Ga.copy(n.boundingSphere), Ga.applyMatrix4(r), Ga.radius += i, e.ray.intersectsSphere(Ga) !== !1) {
      Oc.getInverse(r), Vo.copy(e.ray).applyMatrix4(Oc);
      var a = i / ((this.scale.x + this.scale.y + this.scale.z) / 3), s = a * a;
      if (n.isBufferGeometry) {
        var o = n.index, l = n.attributes, c = l.position.array;
        if (o !== null)
          for (var u = o.array, h = 0, f = u.length; h < f; h++) {
            var d = u[h];
            Va.fromArray(c, d * 3), mo(Va, d, s, r, e, t, this);
          }
        else
          for (var h = 0, p = c.length / 3; h < p; h++)
            Va.fromArray(c, h * 3), mo(Va, h, s, r, e, t, this);
      } else
        for (var v = n.vertices, h = 0, p = v.length; h < p; h++)
          mo(v[h], h, s, r, e, t, this);
    }
  },
  updateMorphTargets: function() {
    var e = this.geometry, t, n, r;
    if (e.isBufferGeometry) {
      var i = e.morphAttributes, a = Object.keys(i);
      if (a.length > 0) {
        var s = i[a[0]];
        if (s !== void 0)
          for (this.morphTargetInfluences = [], this.morphTargetDictionary = {}, t = 0, n = s.length; t < n; t++)
            r = s[t].name || String(t), this.morphTargetInfluences.push(0), this.morphTargetDictionary[r] = t;
      }
    } else {
      var o = e.morphTargets;
      o !== void 0 && o.length > 0 && console.error("THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.");
    }
  },
  clone: function() {
    return new this.constructor(this.geometry, this.material).copy(this);
  }
});
function mo(e, t, n, r, i, a, s) {
  var o = Vo.distanceSqToPoint(e);
  if (o < n) {
    var l = new b();
    Vo.closestPointToPoint(e, l), l.applyMatrix4(r);
    var c = i.ray.origin.distanceTo(l);
    if (c < i.near || c > i.far) return;
    a.push({
      distance: c,
      distanceToRay: Math.sqrt(o),
      point: l,
      index: t,
      face: null,
      object: s
    });
  }
}
function Nc(e, t, n, r, i, a, s, o, l) {
  Ze.call(this, e, t, n, r, i, a, s, o, l), this.format = s !== void 0 ? s : ir, this.minFilter = a !== void 0 ? a : ft, this.magFilter = i !== void 0 ? i : ft, this.generateMipmaps = !1;
}
Nc.prototype = Object.assign(Object.create(Ze.prototype), {
  constructor: Nc,
  isVideoTexture: !0,
  update: function() {
    var e = this.image;
    e.readyState >= e.HAVE_CURRENT_DATA && (this.needsUpdate = !0);
  }
});
function Bi(e, t, n, r, i, a, s, o, l, c, u, h) {
  Ze.call(this, null, a, s, o, l, c, r, i, u, h), this.image = { width: t, height: n }, this.mipmaps = e, this.flipY = !1, this.generateMipmaps = !1;
}
Bi.prototype = Object.create(Ze.prototype);
Bi.prototype.constructor = Bi;
Bi.prototype.isCompressedTexture = !0;
function us(e, t, n, r, i, a, s, o, l) {
  Ze.call(this, e, t, n, r, i, a, s, o, l), this.needsUpdate = !0;
}
us.prototype = Object.create(Ze.prototype);
us.prototype.constructor = us;
us.prototype.isCanvasTexture = !0;
function hs(e, t, n, r, i, a, s, o, l, c) {
  if (c = c !== void 0 ? c : Gr, c !== Gr && c !== Ci)
    throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
  n === void 0 && c === Gr && (n = ts), n === void 0 && c === Ci && (n = ns), Ze.call(this, null, r, i, a, s, o, c, n, l), this.image = { width: e, height: t }, this.magFilter = s !== void 0 ? s : ot, this.minFilter = o !== void 0 ? o : ot, this.flipY = !1, this.generateMipmaps = !1;
}
hs.prototype = Object.create(Ze.prototype);
hs.prototype.constructor = hs;
hs.prototype.isDepthTexture = !0;
function fs(e) {
  ne.call(this), this.type = "WireframeGeometry";
  var t = [], n, r, i, a, s, o = [0, 0], l = {}, c, u, h, f, d = ["a", "b", "c"], p;
  if (e && e.isGeometry) {
    var v = e.faces;
    for (n = 0, i = v.length; n < i; n++) {
      var m = v[n];
      for (r = 0; r < 3; r++)
        u = m[d[r]], h = m[d[(r + 1) % 3]], o[0] = Math.min(u, h), o[1] = Math.max(u, h), f = o[0] + "," + o[1], l[f] === void 0 && (l[f] = { index1: o[0], index2: o[1] });
    }
    for (f in l)
      c = l[f], p = e.vertices[c.index1], t.push(p.x, p.y, p.z), p = e.vertices[c.index2], t.push(p.x, p.y, p.z);
  } else if (e && e.isBufferGeometry) {
    var y, x, M, E, w, A, C, T;
    if (p = new b(), e.index !== null) {
      for (y = e.attributes.position, x = e.index, M = e.groups, M.length === 0 && (M = [{ start: 0, count: x.count, materialIndex: 0 }]), a = 0, s = M.length; a < s; ++a)
        for (E = M[a], w = E.start, A = E.count, n = w, i = w + A; n < i; n += 3)
          for (r = 0; r < 3; r++)
            u = x.getX(n + r), h = x.getX(n + (r + 1) % 3), o[0] = Math.min(u, h), o[1] = Math.max(u, h), f = o[0] + "," + o[1], l[f] === void 0 && (l[f] = { index1: o[0], index2: o[1] });
      for (f in l)
        c = l[f], p.fromBufferAttribute(y, c.index1), t.push(p.x, p.y, p.z), p.fromBufferAttribute(y, c.index2), t.push(p.x, p.y, p.z);
    } else
      for (y = e.attributes.position, n = 0, i = y.count / 3; n < i; n++)
        for (r = 0; r < 3; r++)
          C = 3 * n + r, p.fromBufferAttribute(y, C), t.push(p.x, p.y, p.z), T = 3 * n + (r + 1) % 3, p.fromBufferAttribute(y, T), t.push(p.x, p.y, p.z);
  }
  this.setAttribute("position", new Q(t, 3));
}
fs.prototype = Object.create(ne.prototype);
fs.prototype.constructor = fs;
function ds(e, t, n) {
  we.call(this), this.type = "ParametricGeometry", this.parameters = {
    func: e,
    slices: t,
    stacks: n
  }, this.fromBufferGeometry(new zi(e, t, n)), this.mergeVertices();
}
ds.prototype = Object.create(we.prototype);
ds.prototype.constructor = ds;
function zi(e, t, n) {
  ne.call(this), this.type = "ParametricBufferGeometry", this.parameters = {
    func: e,
    slices: t,
    stacks: n
  };
  var r = [], i = [], a = [], s = [], o = 1e-5, l = new b(), c = new b(), u = new b(), h = new b(), f = new b(), d, p;
  e.length < 3 && console.error("THREE.ParametricGeometry: Function must now modify a Vector3 as third parameter.");
  var v = t + 1;
  for (d = 0; d <= n; d++) {
    var m = d / n;
    for (p = 0; p <= t; p++) {
      var y = p / t;
      e(y, m, c), i.push(c.x, c.y, c.z), y - o >= 0 ? (e(y - o, m, u), h.subVectors(c, u)) : (e(y + o, m, u), h.subVectors(u, c)), m - o >= 0 ? (e(y, m - o, u), f.subVectors(c, u)) : (e(y, m + o, u), f.subVectors(u, c)), l.crossVectors(h, f).normalize(), a.push(l.x, l.y, l.z), s.push(y, m);
    }
  }
  for (d = 0; d < n; d++)
    for (p = 0; p < t; p++) {
      var x = d * v + p, M = d * v + p + 1, E = (d + 1) * v + p + 1, w = (d + 1) * v + p;
      r.push(x, M, w), r.push(M, E, w);
    }
  this.setIndex(r), this.setAttribute("position", new Q(i, 3)), this.setAttribute("normal", new Q(a, 3)), this.setAttribute("uv", new Q(s, 2));
}
zi.prototype = Object.create(ne.prototype);
zi.prototype.constructor = zi;
function ps(e, t, n, r) {
  we.call(this), this.type = "PolyhedronGeometry", this.parameters = {
    vertices: e,
    indices: t,
    radius: n,
    detail: r
  }, this.fromBufferGeometry(new It(e, t, n, r)), this.mergeVertices();
}
ps.prototype = Object.create(we.prototype);
ps.prototype.constructor = ps;
function It(e, t, n, r) {
  ne.call(this), this.type = "PolyhedronBufferGeometry", this.parameters = {
    vertices: e,
    indices: t,
    radius: n,
    detail: r
  }, n = n || 1, r = r || 0;
  var i = [], a = [];
  s(r), l(n), c(), this.setAttribute("position", new Q(i, 3)), this.setAttribute("normal", new Q(i.slice(), 3)), this.setAttribute("uv", new Q(a, 2)), r === 0 ? this.computeVertexNormals() : this.normalizeNormals();
  function s(y) {
    for (var x = new b(), M = new b(), E = new b(), w = 0; w < t.length; w += 3)
      f(t[w + 0], x), f(t[w + 1], M), f(t[w + 2], E), o(x, M, E, y);
  }
  function o(y, x, M, E) {
    var w = Math.pow(2, E), A = [], C, T;
    for (C = 0; C <= w; C++) {
      A[C] = [];
      var D = y.clone().lerp(M, C / w), I = x.clone().lerp(M, C / w), B = w - C;
      for (T = 0; T <= B; T++)
        T === 0 && C === w ? A[C][T] = D : A[C][T] = D.clone().lerp(I, T / B);
    }
    for (C = 0; C < w; C++)
      for (T = 0; T < 2 * (w - C) - 1; T++) {
        var O = Math.floor(T / 2);
        T % 2 === 0 ? (h(A[C][O + 1]), h(A[C + 1][O]), h(A[C][O])) : (h(A[C][O + 1]), h(A[C + 1][O + 1]), h(A[C + 1][O]));
      }
  }
  function l(y) {
    for (var x = new b(), M = 0; M < i.length; M += 3)
      x.x = i[M + 0], x.y = i[M + 1], x.z = i[M + 2], x.normalize().multiplyScalar(y), i[M + 0] = x.x, i[M + 1] = x.y, i[M + 2] = x.z;
  }
  function c() {
    for (var y = new b(), x = 0; x < i.length; x += 3) {
      y.x = i[x + 0], y.y = i[x + 1], y.z = i[x + 2];
      var M = v(y) / 2 / Math.PI + 0.5, E = m(y) / Math.PI + 0.5;
      a.push(M, 1 - E);
    }
    d(), u();
  }
  function u() {
    for (var y = 0; y < a.length; y += 6) {
      var x = a[y + 0], M = a[y + 2], E = a[y + 4], w = Math.max(x, M, E), A = Math.min(x, M, E);
      w > 0.9 && A < 0.1 && (x < 0.2 && (a[y + 0] += 1), M < 0.2 && (a[y + 2] += 1), E < 0.2 && (a[y + 4] += 1));
    }
  }
  function h(y) {
    i.push(y.x, y.y, y.z);
  }
  function f(y, x) {
    var M = y * 3;
    x.x = e[M + 0], x.y = e[M + 1], x.z = e[M + 2];
  }
  function d() {
    for (var y = new b(), x = new b(), M = new b(), E = new b(), w = new G(), A = new G(), C = new G(), T = 0, D = 0; T < i.length; T += 9, D += 6) {
      y.set(i[T + 0], i[T + 1], i[T + 2]), x.set(i[T + 3], i[T + 4], i[T + 5]), M.set(i[T + 6], i[T + 7], i[T + 8]), w.set(a[D + 0], a[D + 1]), A.set(a[D + 2], a[D + 3]), C.set(a[D + 4], a[D + 5]), E.copy(y).add(x).add(M).divideScalar(3);
      var I = v(E);
      p(w, D + 0, y, I), p(A, D + 2, x, I), p(C, D + 4, M, I);
    }
  }
  function p(y, x, M, E) {
    E < 0 && y.x === 1 && (a[x] = y.x - 1), M.x === 0 && M.z === 0 && (a[x] = E / 2 / Math.PI + 0.5);
  }
  function v(y) {
    return Math.atan2(y.z, -y.x);
  }
  function m(y) {
    return Math.atan2(-y.y, Math.sqrt(y.x * y.x + y.z * y.z));
  }
}
It.prototype = Object.create(ne.prototype);
It.prototype.constructor = It;
function vs(e, t) {
  we.call(this), this.type = "TetrahedronGeometry", this.parameters = {
    radius: e,
    detail: t
  }, this.fromBufferGeometry(new Ui(e, t)), this.mergeVertices();
}
vs.prototype = Object.create(we.prototype);
vs.prototype.constructor = vs;
function Ui(e, t) {
  var n = [
    1,
    1,
    1,
    -1,
    -1,
    1,
    -1,
    1,
    -1,
    1,
    -1,
    -1
  ], r = [
    2,
    1,
    0,
    0,
    3,
    2,
    1,
    3,
    0,
    2,
    3,
    1
  ];
  It.call(this, n, r, e, t), this.type = "TetrahedronBufferGeometry", this.parameters = {
    radius: e,
    detail: t
  };
}
Ui.prototype = Object.create(It.prototype);
Ui.prototype.constructor = Ui;
function ms(e, t) {
  we.call(this), this.type = "OctahedronGeometry", this.parameters = {
    radius: e,
    detail: t
  }, this.fromBufferGeometry(new Xr(e, t)), this.mergeVertices();
}
ms.prototype = Object.create(we.prototype);
ms.prototype.constructor = ms;
function Xr(e, t) {
  var n = [
    1,
    0,
    0,
    -1,
    0,
    0,
    0,
    1,
    0,
    0,
    -1,
    0,
    0,
    0,
    1,
    0,
    0,
    -1
  ], r = [
    0,
    2,
    4,
    0,
    4,
    3,
    0,
    3,
    5,
    0,
    5,
    2,
    1,
    2,
    5,
    1,
    5,
    3,
    1,
    3,
    4,
    1,
    4,
    2
  ];
  It.call(this, n, r, e, t), this.type = "OctahedronBufferGeometry", this.parameters = {
    radius: e,
    detail: t
  };
}
Xr.prototype = Object.create(It.prototype);
Xr.prototype.constructor = Xr;
function gs(e, t) {
  we.call(this), this.type = "IcosahedronGeometry", this.parameters = {
    radius: e,
    detail: t
  }, this.fromBufferGeometry(new Gi(e, t)), this.mergeVertices();
}
gs.prototype = Object.create(we.prototype);
gs.prototype.constructor = gs;
function Gi(e, t) {
  var n = (1 + Math.sqrt(5)) / 2, r = [
    -1,
    n,
    0,
    1,
    n,
    0,
    -1,
    -n,
    0,
    1,
    -n,
    0,
    0,
    -1,
    n,
    0,
    1,
    n,
    0,
    -1,
    -n,
    0,
    1,
    -n,
    n,
    0,
    -1,
    n,
    0,
    1,
    -n,
    0,
    -1,
    -n,
    0,
    1
  ], i = [
    0,
    11,
    5,
    0,
    5,
    1,
    0,
    1,
    7,
    0,
    7,
    10,
    0,
    10,
    11,
    1,
    5,
    9,
    5,
    11,
    4,
    11,
    10,
    2,
    10,
    7,
    6,
    7,
    1,
    8,
    3,
    9,
    4,
    3,
    4,
    2,
    3,
    2,
    6,
    3,
    6,
    8,
    3,
    8,
    9,
    4,
    9,
    5,
    2,
    4,
    11,
    6,
    2,
    10,
    8,
    6,
    7,
    9,
    8,
    1
  ];
  It.call(this, r, i, e, t), this.type = "IcosahedronBufferGeometry", this.parameters = {
    radius: e,
    detail: t
  };
}
Gi.prototype = Object.create(It.prototype);
Gi.prototype.constructor = Gi;
function ys(e, t) {
  we.call(this), this.type = "DodecahedronGeometry", this.parameters = {
    radius: e,
    detail: t
  }, this.fromBufferGeometry(new Vi(e, t)), this.mergeVertices();
}
ys.prototype = Object.create(we.prototype);
ys.prototype.constructor = ys;
function Vi(e, t) {
  var n = (1 + Math.sqrt(5)) / 2, r = 1 / n, i = [
    // (±1, ±1, ±1)
    -1,
    -1,
    -1,
    -1,
    -1,
    1,
    -1,
    1,
    -1,
    -1,
    1,
    1,
    1,
    -1,
    -1,
    1,
    -1,
    1,
    1,
    1,
    -1,
    1,
    1,
    1,
    // (0, ±1/φ, ±φ)
    0,
    -r,
    -n,
    0,
    -r,
    n,
    0,
    r,
    -n,
    0,
    r,
    n,
    // (±1/φ, ±φ, 0)
    -r,
    -n,
    0,
    -r,
    n,
    0,
    r,
    -n,
    0,
    r,
    n,
    0,
    // (±φ, 0, ±1/φ)
    -n,
    0,
    -r,
    n,
    0,
    -r,
    -n,
    0,
    r,
    n,
    0,
    r
  ], a = [
    3,
    11,
    7,
    3,
    7,
    15,
    3,
    15,
    13,
    7,
    19,
    17,
    7,
    17,
    6,
    7,
    6,
    15,
    17,
    4,
    8,
    17,
    8,
    10,
    17,
    10,
    6,
    8,
    0,
    16,
    8,
    16,
    2,
    8,
    2,
    10,
    0,
    12,
    1,
    0,
    1,
    18,
    0,
    18,
    16,
    6,
    10,
    2,
    6,
    2,
    13,
    6,
    13,
    15,
    2,
    16,
    18,
    2,
    18,
    3,
    2,
    3,
    13,
    18,
    1,
    9,
    18,
    9,
    11,
    18,
    11,
    3,
    4,
    14,
    12,
    4,
    12,
    0,
    4,
    0,
    8,
    11,
    9,
    5,
    11,
    5,
    19,
    11,
    19,
    7,
    19,
    5,
    14,
    19,
    14,
    4,
    19,
    4,
    17,
    1,
    12,
    14,
    1,
    14,
    5,
    1,
    5,
    9
  ];
  It.call(this, i, a, e, t), this.type = "DodecahedronBufferGeometry", this.parameters = {
    radius: e,
    detail: t
  };
}
Vi.prototype = Object.create(It.prototype);
Vi.prototype.constructor = Vi;
function xs(e, t, n, r, i, a) {
  we.call(this), this.type = "TubeGeometry", this.parameters = {
    path: e,
    tubularSegments: t,
    radius: n,
    radialSegments: r,
    closed: i
  }, a !== void 0 && console.warn("THREE.TubeGeometry: taper has been removed.");
  var s = new Yr(e, t, n, r, i);
  this.tangents = s.tangents, this.normals = s.normals, this.binormals = s.binormals, this.fromBufferGeometry(s), this.mergeVertices();
}
xs.prototype = Object.create(we.prototype);
xs.prototype.constructor = xs;
function Yr(e, t, n, r, i) {
  ne.call(this), this.type = "TubeBufferGeometry", this.parameters = {
    path: e,
    tubularSegments: t,
    radius: n,
    radialSegments: r,
    closed: i
  }, t = t || 64, n = n || 1, r = r || 8, i = i || !1;
  var a = e.computeFrenetFrames(t, i);
  this.tangents = a.tangents, this.normals = a.normals, this.binormals = a.binormals;
  var s = new b(), o = new b(), l = new G(), c = new b(), u, h, f = [], d = [], p = [], v = [];
  m(), this.setIndex(v), this.setAttribute("position", new Q(f, 3)), this.setAttribute("normal", new Q(d, 3)), this.setAttribute("uv", new Q(p, 2));
  function m() {
    for (u = 0; u < t; u++)
      y(u);
    y(i === !1 ? t : 0), M(), x();
  }
  function y(E) {
    c = e.getPointAt(E / t, c);
    var w = a.normals[E], A = a.binormals[E];
    for (h = 0; h <= r; h++) {
      var C = h / r * Math.PI * 2, T = Math.sin(C), D = -Math.cos(C);
      o.x = D * w.x + T * A.x, o.y = D * w.y + T * A.y, o.z = D * w.z + T * A.z, o.normalize(), d.push(o.x, o.y, o.z), s.x = c.x + n * o.x, s.y = c.y + n * o.y, s.z = c.z + n * o.z, f.push(s.x, s.y, s.z);
    }
  }
  function x() {
    for (h = 1; h <= t; h++)
      for (u = 1; u <= r; u++) {
        var E = (r + 1) * (h - 1) + (u - 1), w = (r + 1) * h + (u - 1), A = (r + 1) * h + u, C = (r + 1) * (h - 1) + u;
        v.push(E, w, C), v.push(w, A, C);
      }
  }
  function M() {
    for (u = 0; u <= t; u++)
      for (h = 0; h <= r; h++)
        l.x = u / t, l.y = h / r, p.push(l.x, l.y);
  }
}
Yr.prototype = Object.create(ne.prototype);
Yr.prototype.constructor = Yr;
Yr.prototype.toJSON = function() {
  var e = ne.prototype.toJSON.call(this);
  return e.path = this.parameters.path.toJSON(), e;
};
function _s(e, t, n, r, i, a, s) {
  we.call(this), this.type = "TorusKnotGeometry", this.parameters = {
    radius: e,
    tube: t,
    tubularSegments: n,
    radialSegments: r,
    p: i,
    q: a
  }, s !== void 0 && console.warn("THREE.TorusKnotGeometry: heightScale has been deprecated. Use .scale( x, y, z ) instead."), this.fromBufferGeometry(new Hi(e, t, n, r, i, a)), this.mergeVertices();
}
_s.prototype = Object.create(we.prototype);
_s.prototype.constructor = _s;
function Hi(e, t, n, r, i, a) {
  ne.call(this), this.type = "TorusKnotBufferGeometry", this.parameters = {
    radius: e,
    tube: t,
    tubularSegments: n,
    radialSegments: r,
    p: i,
    q: a
  }, e = e || 1, t = t || 0.4, n = Math.floor(n) || 64, r = Math.floor(r) || 8, i = i || 2, a = a || 3;
  var s = [], o = [], l = [], c = [], u, h, f = new b(), d = new b(), p = new b(), v = new b(), m = new b(), y = new b(), x = new b();
  for (u = 0; u <= n; ++u) {
    var M = u / n * i * Math.PI * 2;
    for (B(M, i, a, e, p), B(M + 0.01, i, a, e, v), y.subVectors(v, p), x.addVectors(v, p), m.crossVectors(y, x), x.crossVectors(m, y), m.normalize(), x.normalize(), h = 0; h <= r; ++h) {
      var E = h / r * Math.PI * 2, w = -t * Math.cos(E), A = t * Math.sin(E);
      f.x = p.x + (w * x.x + A * m.x), f.y = p.y + (w * x.y + A * m.y), f.z = p.z + (w * x.z + A * m.z), o.push(f.x, f.y, f.z), d.subVectors(f, p).normalize(), l.push(d.x, d.y, d.z), c.push(u / n), c.push(h / r);
    }
  }
  for (h = 1; h <= n; h++)
    for (u = 1; u <= r; u++) {
      var C = (r + 1) * (h - 1) + (u - 1), T = (r + 1) * h + (u - 1), D = (r + 1) * h + u, I = (r + 1) * (h - 1) + u;
      s.push(C, T, I), s.push(T, D, I);
    }
  this.setIndex(s), this.setAttribute("position", new Q(o, 3)), this.setAttribute("normal", new Q(l, 3)), this.setAttribute("uv", new Q(c, 2));
  function B(O, F, N, z, H) {
    var te = Math.cos(O), $ = Math.sin(O), X = N / F * O, Y = Math.cos(X);
    H.x = z * (2 + Y) * 0.5 * te, H.y = z * (2 + Y) * $ * 0.5, H.z = z * Math.sin(X) * 0.5;
  }
}
Hi.prototype = Object.create(ne.prototype);
Hi.prototype.constructor = Hi;
function ws(e, t, n, r, i) {
  we.call(this), this.type = "TorusGeometry", this.parameters = {
    radius: e,
    tube: t,
    radialSegments: n,
    tubularSegments: r,
    arc: i
  }, this.fromBufferGeometry(new ki(e, t, n, r, i)), this.mergeVertices();
}
ws.prototype = Object.create(we.prototype);
ws.prototype.constructor = ws;
function ki(e, t, n, r, i) {
  ne.call(this), this.type = "TorusBufferGeometry", this.parameters = {
    radius: e,
    tube: t,
    radialSegments: n,
    tubularSegments: r,
    arc: i
  }, e = e || 1, t = t || 0.4, n = Math.floor(n) || 8, r = Math.floor(r) || 6, i = i || Math.PI * 2;
  var a = [], s = [], o = [], l = [], c = new b(), u = new b(), h = new b(), f, d;
  for (f = 0; f <= n; f++)
    for (d = 0; d <= r; d++) {
      var p = d / r * i, v = f / n * Math.PI * 2;
      u.x = (e + t * Math.cos(v)) * Math.cos(p), u.y = (e + t * Math.cos(v)) * Math.sin(p), u.z = t * Math.sin(v), s.push(u.x, u.y, u.z), c.x = e * Math.cos(p), c.y = e * Math.sin(p), h.subVectors(u, c).normalize(), o.push(h.x, h.y, h.z), l.push(d / r), l.push(f / n);
    }
  for (f = 1; f <= n; f++)
    for (d = 1; d <= r; d++) {
      var m = (r + 1) * f + d - 1, y = (r + 1) * (f - 1) + d - 1, x = (r + 1) * (f - 1) + d, M = (r + 1) * f + d;
      a.push(m, y, M), a.push(y, x, M);
    }
  this.setIndex(a), this.setAttribute("position", new Q(s, 3)), this.setAttribute("normal", new Q(o, 3)), this.setAttribute("uv", new Q(l, 2));
}
ki.prototype = Object.create(ne.prototype);
ki.prototype.constructor = ki;
var ig = {
  triangulate: function(e, t, n) {
    n = n || 2;
    var r = t && t.length, i = r ? t[0] * n : e.length, a = Zu(e, 0, i, n, !0), s = [];
    if (!a || a.next === a.prev) return s;
    var o, l, c, u, h, f, d;
    if (r && (a = cg(e, t, a, n)), e.length > 80 * n) {
      o = c = e[0], l = u = e[1];
      for (var p = n; p < i; p += n)
        h = e[p], f = e[p + 1], h < o && (o = h), f < l && (l = f), h > c && (c = h), f > u && (u = f);
      d = Math.max(c - o, u - l), d = d !== 0 ? 1 / d : 0;
    }
    return ji(a, s, n, o, l, d), s;
  }
};
function Zu(e, t, n, r, i) {
  var a, s;
  if (i === xg(e, t, n, r) > 0)
    for (a = t; a < n; a += r) s = Fc(a, e[a], e[a + 1], s);
  else
    for (a = n - r; a >= t; a -= r) s = Fc(a, e[a], e[a + 1], s);
  return s && nr(s, s.next) && (Xi(s), s = s.next), s;
}
function Wi(e, t) {
  if (!e) return e;
  t || (t = e);
  var n = e, r;
  do
    if (r = !1, !n.steiner && (nr(n, n.next) || vt(n.prev, n, n.next) === 0)) {
      if (Xi(n), n = t = n.prev, n === n.next) break;
      r = !0;
    } else
      n = n.next;
  while (r || n !== t);
  return t;
}
function ji(e, t, n, r, i, a, s) {
  if (e) {
    !s && a && dg(e, r, i, a);
    for (var o = e, l, c; e.prev !== e.next; ) {
      if (l = e.prev, c = e.next, a ? sg(e, r, i, a) : ag(e)) {
        t.push(l.i / n), t.push(e.i / n), t.push(c.i / n), Xi(e), e = c.next, o = c.next;
        continue;
      }
      if (e = c, e === o) {
        s ? s === 1 ? (e = og(e, t, n), ji(e, t, n, r, i, a, 2)) : s === 2 && lg(e, t, n, r, i, a) : ji(Wi(e), t, n, r, i, a, 1);
        break;
      }
    }
  }
}
function ag(e) {
  var t = e.prev, n = e, r = e.next;
  if (vt(t, n, r) >= 0) return !1;
  for (var i = e.next.next; i !== e.prev; ) {
    if (Ur(t.x, t.y, n.x, n.y, r.x, r.y, i.x, i.y) && vt(i.prev, i, i.next) >= 0) return !1;
    i = i.next;
  }
  return !0;
}
function sg(e, t, n, r) {
  var i = e.prev, a = e, s = e.next;
  if (vt(i, a, s) >= 0) return !1;
  for (var o = i.x < a.x ? i.x < s.x ? i.x : s.x : a.x < s.x ? a.x : s.x, l = i.y < a.y ? i.y < s.y ? i.y : s.y : a.y < s.y ? a.y : s.y, c = i.x > a.x ? i.x > s.x ? i.x : s.x : a.x > s.x ? a.x : s.x, u = i.y > a.y ? i.y > s.y ? i.y : s.y : a.y > s.y ? a.y : s.y, h = ko(o, l, t, n, r), f = ko(c, u, t, n, r), d = e.prevZ, p = e.nextZ; d && d.z >= h && p && p.z <= f; ) {
    if (d !== e.prev && d !== e.next && Ur(i.x, i.y, a.x, a.y, s.x, s.y, d.x, d.y) && vt(d.prev, d, d.next) >= 0 || (d = d.prevZ, p !== e.prev && p !== e.next && Ur(i.x, i.y, a.x, a.y, s.x, s.y, p.x, p.y) && vt(p.prev, p, p.next) >= 0)) return !1;
    p = p.nextZ;
  }
  for (; d && d.z >= h; ) {
    if (d !== e.prev && d !== e.next && Ur(i.x, i.y, a.x, a.y, s.x, s.y, d.x, d.y) && vt(d.prev, d, d.next) >= 0) return !1;
    d = d.prevZ;
  }
  for (; p && p.z <= f; ) {
    if (p !== e.prev && p !== e.next && Ur(i.x, i.y, a.x, a.y, s.x, s.y, p.x, p.y) && vt(p.prev, p, p.next) >= 0) return !1;
    p = p.nextZ;
  }
  return !0;
}
function og(e, t, n) {
  var r = e;
  do {
    var i = r.prev, a = r.next.next;
    !nr(i, a) && Ju(i, r, r.next, a) && qi(i, a) && qi(a, i) && (t.push(i.i / n), t.push(r.i / n), t.push(a.i / n), Xi(r), Xi(r.next), r = e = a), r = r.next;
  } while (r !== e);
  return r;
}
function lg(e, t, n, r, i, a) {
  var s = e;
  do {
    for (var o = s.next.next; o !== s.prev; ) {
      if (s.i !== o.i && mg(s, o)) {
        var l = $u(s, o);
        s = Wi(s, s.next), l = Wi(l, l.next), ji(s, t, n, r, i, a), ji(l, t, n, r, i, a);
        return;
      }
      o = o.next;
    }
    s = s.next;
  } while (s !== e);
}
function cg(e, t, n, r) {
  var i = [], a, s, o, l, c;
  for (a = 0, s = t.length; a < s; a++)
    o = t[a] * r, l = a < s - 1 ? t[a + 1] * r : e.length, c = Zu(e, o, l, r, !1), c === c.next && (c.steiner = !0), i.push(vg(c));
  for (i.sort(ug), a = 0; a < i.length; a++)
    hg(i[a], n), n = Wi(n, n.next);
  return n;
}
function ug(e, t) {
  return e.x - t.x;
}
function hg(e, t) {
  if (t = fg(e, t), t) {
    var n = $u(t, e);
    Wi(n, n.next);
  }
}
function fg(e, t) {
  var n = t, r = e.x, i = e.y, a = -1 / 0, s;
  do {
    if (i <= n.y && i >= n.next.y && n.next.y !== n.y) {
      var o = n.x + (i - n.y) * (n.next.x - n.x) / (n.next.y - n.y);
      if (o <= r && o > a) {
        if (a = o, o === r) {
          if (i === n.y) return n;
          if (i === n.next.y) return n.next;
        }
        s = n.x < n.next.x ? n : n.next;
      }
    }
    n = n.next;
  } while (n !== t);
  if (!s) return null;
  if (r === a) return s.prev;
  var l = s, c = s.x, u = s.y, h = 1 / 0, f;
  for (n = s.next; n !== l; )
    r >= n.x && n.x >= c && r !== n.x && Ur(i < u ? r : a, i, c, u, i < u ? a : r, i, n.x, n.y) && (f = Math.abs(i - n.y) / (r - n.x), (f < h || f === h && n.x > s.x) && qi(n, e) && (s = n, h = f)), n = n.next;
  return s;
}
function dg(e, t, n, r) {
  var i = e;
  do
    i.z === null && (i.z = ko(i.x, i.y, t, n, r)), i.prevZ = i.prev, i.nextZ = i.next, i = i.next;
  while (i !== e);
  i.prevZ.nextZ = null, i.prevZ = null, pg(i);
}
function pg(e) {
  var t, n, r, i, a, s, o, l, c = 1;
  do {
    for (n = e, e = null, a = null, s = 0; n; ) {
      for (s++, r = n, o = 0, t = 0; t < c && (o++, r = r.nextZ, !!r); t++)
        ;
      for (l = c; o > 0 || l > 0 && r; )
        o !== 0 && (l === 0 || !r || n.z <= r.z) ? (i = n, n = n.nextZ, o--) : (i = r, r = r.nextZ, l--), a ? a.nextZ = i : e = i, i.prevZ = a, a = i;
      n = r;
    }
    a.nextZ = null, c *= 2;
  } while (s > 1);
  return e;
}
function ko(e, t, n, r, i) {
  return e = 32767 * (e - n) * i, t = 32767 * (t - r) * i, e = (e | e << 8) & 16711935, e = (e | e << 4) & 252645135, e = (e | e << 2) & 858993459, e = (e | e << 1) & 1431655765, t = (t | t << 8) & 16711935, t = (t | t << 4) & 252645135, t = (t | t << 2) & 858993459, t = (t | t << 1) & 1431655765, e | t << 1;
}
function vg(e) {
  var t = e, n = e;
  do
    (t.x < n.x || t.x === n.x && t.y < n.y) && (n = t), t = t.next;
  while (t !== e);
  return n;
}
function Ur(e, t, n, r, i, a, s, o) {
  return (i - s) * (t - o) - (e - s) * (a - o) >= 0 && (e - s) * (r - o) - (n - s) * (t - o) >= 0 && (n - s) * (a - o) - (i - s) * (r - o) >= 0;
}
function mg(e, t) {
  return e.next.i !== t.i && e.prev.i !== t.i && !gg(e, t) && qi(e, t) && qi(t, e) && yg(e, t);
}
function vt(e, t, n) {
  return (t.y - e.y) * (n.x - t.x) - (t.x - e.x) * (n.y - t.y);
}
function nr(e, t) {
  return e.x === t.x && e.y === t.y;
}
function Ju(e, t, n, r) {
  return nr(e, n) && nr(t, r) || nr(e, r) && nr(n, t) ? !0 : vt(e, t, n) > 0 != vt(e, t, r) > 0 && vt(n, r, e) > 0 != vt(n, r, t) > 0;
}
function gg(e, t) {
  var n = e;
  do {
    if (n.i !== e.i && n.next.i !== e.i && n.i !== t.i && n.next.i !== t.i && Ju(n, n.next, e, t)) return !0;
    n = n.next;
  } while (n !== e);
  return !1;
}
function qi(e, t) {
  return vt(e.prev, e, e.next) < 0 ? vt(e, t, e.next) >= 0 && vt(e, e.prev, t) >= 0 : vt(e, t, e.prev) < 0 || vt(e, e.next, t) < 0;
}
function yg(e, t) {
  var n = e, r = !1, i = (e.x + t.x) / 2, a = (e.y + t.y) / 2;
  do
    n.y > a != n.next.y > a && n.next.y !== n.y && i < (n.next.x - n.x) * (a - n.y) / (n.next.y - n.y) + n.x && (r = !r), n = n.next;
  while (n !== e);
  return r;
}
function $u(e, t) {
  var n = new Wo(e.i, e.x, e.y), r = new Wo(t.i, t.x, t.y), i = e.next, a = t.prev;
  return e.next = t, t.prev = e, n.next = i, i.prev = n, r.next = n, n.prev = r, a.next = r, r.prev = a, r;
}
function Fc(e, t, n, r) {
  var i = new Wo(e, t, n);
  return r ? (i.next = r.next, i.prev = r, r.next.prev = i, r.next = i) : (i.prev = i, i.next = i), i;
}
function Xi(e) {
  e.next.prev = e.prev, e.prev.next = e.next, e.prevZ && (e.prevZ.nextZ = e.nextZ), e.nextZ && (e.nextZ.prevZ = e.prevZ);
}
function Wo(e, t, n) {
  this.i = e, this.x = t, this.y = n, this.prev = null, this.next = null, this.z = null, this.prevZ = null, this.nextZ = null, this.steiner = !1;
}
function xg(e, t, n, r) {
  for (var i = 0, a = t, s = n - r; a < n; a += r)
    i += (e[s] - e[a]) * (e[a + 1] + e[s + 1]), s = a;
  return i;
}
var Nn = {
  // calculate area of the contour polygon
  area: function(e) {
    for (var t = e.length, n = 0, r = t - 1, i = 0; i < t; r = i++)
      n += e[r].x * e[i].y - e[i].x * e[r].y;
    return n * 0.5;
  },
  isClockWise: function(e) {
    return Nn.area(e) < 0;
  },
  triangulateShape: function(e, t) {
    var n = [], r = [], i = [];
    Bc(e), zc(n, e);
    var a = e.length;
    t.forEach(Bc);
    for (var s = 0; s < t.length; s++)
      r.push(a), a += t[s].length, zc(n, t[s]);
    for (var o = ig.triangulate(n, r), s = 0; s < o.length; s += 3)
      i.push(o.slice(s, s + 3));
    return i;
  }
};
function Bc(e) {
  var t = e.length;
  t > 2 && e[t - 1].equals(e[0]) && e.pop();
}
function zc(e, t) {
  for (var n = 0; n < t.length; n++)
    e.push(t[n].x), e.push(t[n].y);
}
function Zr(e, t) {
  we.call(this), this.type = "ExtrudeGeometry", this.parameters = {
    shapes: e,
    options: t
  }, this.fromBufferGeometry(new xn(e, t)), this.mergeVertices();
}
Zr.prototype = Object.create(we.prototype);
Zr.prototype.constructor = Zr;
Zr.prototype.toJSON = function() {
  var e = we.prototype.toJSON.call(this), t = this.parameters.shapes, n = this.parameters.options;
  return Qu(t, n, e);
};
function xn(e, t) {
  ne.call(this), this.type = "ExtrudeBufferGeometry", this.parameters = {
    shapes: e,
    options: t
  }, e = Array.isArray(e) ? e : [e];
  for (var n = this, r = [], i = [], a = 0, s = e.length; a < s; a++) {
    var o = e[a];
    l(o);
  }
  this.setAttribute("position", new Q(r, 3)), this.setAttribute("uv", new Q(i, 2)), this.computeVertexNormals();
  function l(c) {
    var u = [], h = t.curveSegments !== void 0 ? t.curveSegments : 12, f = t.steps !== void 0 ? t.steps : 1, d = t.depth !== void 0 ? t.depth : 100, p = t.bevelEnabled !== void 0 ? t.bevelEnabled : !0, v = t.bevelThickness !== void 0 ? t.bevelThickness : 6, m = t.bevelSize !== void 0 ? t.bevelSize : v - 2, y = t.bevelOffset !== void 0 ? t.bevelOffset : 0, x = t.bevelSegments !== void 0 ? t.bevelSegments : 3, M = t.extrudePath, E = t.UVGenerator !== void 0 ? t.UVGenerator : _g;
    t.amount !== void 0 && (console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed to depth."), d = t.amount);
    var w, A = !1, C, T, D, I;
    M && (w = M.getSpacedPoints(f), A = !0, p = !1, C = M.computeFrenetFrames(f, !1), T = new b(), D = new b(), I = new b()), p || (x = 0, v = 0, m = 0, y = 0);
    var B, O, F, N = c.extractPoints(h), z = N.shape, H = N.holes, te = !Nn.isClockWise(z);
    if (te)
      for (z = z.reverse(), O = 0, F = H.length; O < F; O++)
        B = H[O], Nn.isClockWise(B) && (H[O] = B.reverse());
    var $ = Nn.triangulateShape(z, H), X = z;
    for (O = 0, F = H.length; O < F; O++)
      B = H[O], z = z.concat(B);
    function Y(ie, he, oe) {
      return he || console.error("THREE.ExtrudeGeometry: vec does not exist"), he.clone().multiplyScalar(oe).add(ie);
    }
    var re, Ue, ze, Fe, be, V = z.length, He, Me = $.length;
    function Be(ie, he, oe) {
      var R, q, se, Ee = ie.x - he.x, ae = ie.y - he.y, Oe = oe.x - ie.x, Je = oe.y - ie.y, Ke = Ee * Ee + ae * ae, Ht = Ee * Je - ae * Oe;
      if (Math.abs(Ht) > Number.EPSILON) {
        var je = Math.sqrt(Ke), At = Math.sqrt(Oe * Oe + Je * Je), xt = he.x - ae / je, fr = he.y + Ee / je, kt = oe.x - Je / At, pa = oe.y + Oe / At, Ft = ((kt - xt) * Je - (pa - fr) * Oe) / (Ee * Je - ae * Oe);
        R = xt + Ee * Ft - ie.x, q = fr + ae * Ft - ie.y;
        var va = R * R + q * q;
        if (va <= 2)
          return new G(R, q);
        se = Math.sqrt(va / 2);
      } else {
        var dr = !1;
        Ee > Number.EPSILON ? Oe > Number.EPSILON && (dr = !0) : Ee < -Number.EPSILON ? Oe < -Number.EPSILON && (dr = !0) : Math.sign(ae) === Math.sign(Je) && (dr = !0), dr ? (R = -ae, q = Ee, se = Math.sqrt(Ke)) : (R = Ee, q = ae, se = Math.sqrt(Ke / 2));
      }
      return new G(R / se, q / se);
    }
    for (var de = [], W = 0, Le = X.length, Ge = Le - 1, Qe = W + 1; W < Le; W++, Ge++, Qe++)
      Ge === Le && (Ge = 0), Qe === Le && (Qe = 0), de[W] = Be(X[W], X[Ge], X[Qe]);
    var Vt = [], nt, S = de.concat();
    for (O = 0, F = H.length; O < F; O++) {
      for (B = H[O], nt = [], W = 0, Le = B.length, Ge = Le - 1, Qe = W + 1; W < Le; W++, Ge++, Qe++)
        Ge === Le && (Ge = 0), Qe === Le && (Qe = 0), nt[W] = Be(B[W], B[Ge], B[Qe]);
      Vt.push(nt), S = S.concat(nt);
    }
    for (re = 0; re < x; re++) {
      for (ze = re / x, Fe = v * Math.cos(ze * Math.PI / 2), Ue = m * Math.sin(ze * Math.PI / 2) + y, W = 0, Le = X.length; W < Le; W++)
        be = Y(X[W], de[W], Ue), pe(be.x, be.y, -Fe);
      for (O = 0, F = H.length; O < F; O++)
        for (B = H[O], nt = Vt[O], W = 0, Le = B.length; W < Le; W++)
          be = Y(B[W], nt[W], Ue), pe(be.x, be.y, -Fe);
    }
    for (Ue = m + y, W = 0; W < V; W++)
      be = p ? Y(z[W], S[W], Ue) : z[W], A ? (D.copy(C.normals[0]).multiplyScalar(be.x), T.copy(C.binormals[0]).multiplyScalar(be.y), I.copy(w[0]).add(D).add(T), pe(I.x, I.y, I.z)) : pe(be.x, be.y, 0);
    var L;
    for (L = 1; L <= f; L++)
      for (W = 0; W < V; W++)
        be = p ? Y(z[W], S[W], Ue) : z[W], A ? (D.copy(C.normals[L]).multiplyScalar(be.x), T.copy(C.binormals[L]).multiplyScalar(be.y), I.copy(w[L]).add(D).add(T), pe(I.x, I.y, I.z)) : pe(be.x, be.y, d / f * L);
    for (re = x - 1; re >= 0; re--) {
      for (ze = re / x, Fe = v * Math.cos(ze * Math.PI / 2), Ue = m * Math.sin(ze * Math.PI / 2) + y, W = 0, Le = X.length; W < Le; W++)
        be = Y(X[W], de[W], Ue), pe(be.x, be.y, d + Fe);
      for (O = 0, F = H.length; O < F; O++)
        for (B = H[O], nt = Vt[O], W = 0, Le = B.length; W < Le; W++)
          be = Y(B[W], nt[W], Ue), A ? pe(be.x, be.y + w[f - 1].y, w[f - 1].x + Fe) : pe(be.x, be.y, d + Fe);
    }
    Z(), k();
    function Z() {
      var ie = r.length / 3;
      if (p) {
        var he = 0, oe = V * he;
        for (W = 0; W < Me; W++)
          He = $[W], ce(He[2] + oe, He[1] + oe, He[0] + oe);
        for (he = f + x * 2, oe = V * he, W = 0; W < Me; W++)
          He = $[W], ce(He[0] + oe, He[1] + oe, He[2] + oe);
      } else {
        for (W = 0; W < Me; W++)
          He = $[W], ce(He[2], He[1], He[0]);
        for (W = 0; W < Me; W++)
          He = $[W], ce(He[0] + V * f, He[1] + V * f, He[2] + V * f);
      }
      n.addGroup(ie, r.length / 3 - ie, 0);
    }
    function k() {
      var ie = r.length / 3, he = 0;
      for (Pe(X, he), he += X.length, O = 0, F = H.length; O < F; O++)
        B = H[O], Pe(B, he), he += B.length;
      n.addGroup(ie, r.length / 3 - ie, 1);
    }
    function Pe(ie, he) {
      var oe, R;
      for (W = ie.length; --W >= 0; ) {
        oe = W, R = W - 1, R < 0 && (R = ie.length - 1);
        var q = 0, se = f + x * 2;
        for (q = 0; q < se; q++) {
          var Ee = V * q, ae = V * (q + 1), Oe = he + oe + Ee, Je = he + R + Ee, Ke = he + R + ae, Ht = he + oe + ae;
          ge(Oe, Je, Ke, Ht);
        }
      }
    }
    function pe(ie, he, oe) {
      u.push(ie), u.push(he), u.push(oe);
    }
    function ce(ie, he, oe) {
      De(ie), De(he), De(oe);
      var R = r.length / 3, q = E.generateTopUV(n, r, R - 3, R - 2, R - 1);
      ve(q[0]), ve(q[1]), ve(q[2]);
    }
    function ge(ie, he, oe, R) {
      De(ie), De(he), De(R), De(he), De(oe), De(R);
      var q = r.length / 3, se = E.generateSideWallUV(n, r, q - 6, q - 3, q - 2, q - 1);
      ve(se[0]), ve(se[1]), ve(se[3]), ve(se[1]), ve(se[2]), ve(se[3]);
    }
    function De(ie) {
      r.push(u[ie * 3 + 0]), r.push(u[ie * 3 + 1]), r.push(u[ie * 3 + 2]);
    }
    function ve(ie) {
      i.push(ie.x), i.push(ie.y);
    }
  }
}
xn.prototype = Object.create(ne.prototype);
xn.prototype.constructor = xn;
xn.prototype.toJSON = function() {
  var e = ne.prototype.toJSON.call(this), t = this.parameters.shapes, n = this.parameters.options;
  return Qu(t, n, e);
};
var _g = {
  generateTopUV: function(e, t, n, r, i) {
    var a = t[n * 3], s = t[n * 3 + 1], o = t[r * 3], l = t[r * 3 + 1], c = t[i * 3], u = t[i * 3 + 1];
    return [
      new G(a, s),
      new G(o, l),
      new G(c, u)
    ];
  },
  generateSideWallUV: function(e, t, n, r, i, a) {
    var s = t[n * 3], o = t[n * 3 + 1], l = t[n * 3 + 2], c = t[r * 3], u = t[r * 3 + 1], h = t[r * 3 + 2], f = t[i * 3], d = t[i * 3 + 1], p = t[i * 3 + 2], v = t[a * 3], m = t[a * 3 + 1], y = t[a * 3 + 2];
    return Math.abs(o - u) < 0.01 ? [
      new G(s, 1 - l),
      new G(c, 1 - h),
      new G(f, 1 - p),
      new G(v, 1 - y)
    ] : [
      new G(o, 1 - l),
      new G(u, 1 - h),
      new G(d, 1 - p),
      new G(m, 1 - y)
    ];
  }
};
function Qu(e, t, n) {
  if (n.shapes = [], Array.isArray(e))
    for (var r = 0, i = e.length; r < i; r++) {
      var a = e[r];
      n.shapes.push(a.uuid);
    }
  else
    n.shapes.push(e.uuid);
  return t.extrudePath !== void 0 && (n.options.extrudePath = t.extrudePath.toJSON()), n;
}
function Ms(e, t) {
  we.call(this), this.type = "TextGeometry", this.parameters = {
    text: e,
    parameters: t
  }, this.fromBufferGeometry(new Yi(e, t)), this.mergeVertices();
}
Ms.prototype = Object.create(we.prototype);
Ms.prototype.constructor = Ms;
function Yi(e, t) {
  t = t || {};
  var n = t.font;
  if (!(n && n.isFont))
    return console.error("THREE.TextGeometry: font parameter is not an instance of THREE.Font."), new we();
  var r = n.generateShapes(e, t.size);
  t.depth = t.height !== void 0 ? t.height : 50, t.bevelThickness === void 0 && (t.bevelThickness = 10), t.bevelSize === void 0 && (t.bevelSize = 8), t.bevelEnabled === void 0 && (t.bevelEnabled = !1), xn.call(this, r, t), this.type = "TextBufferGeometry";
}
Yi.prototype = Object.create(xn.prototype);
Yi.prototype.constructor = Yi;
function bs(e, t, n, r, i, a, s) {
  we.call(this), this.type = "SphereGeometry", this.parameters = {
    radius: e,
    widthSegments: t,
    heightSegments: n,
    phiStart: r,
    phiLength: i,
    thetaStart: a,
    thetaLength: s
  }, this.fromBufferGeometry(new Jr(e, t, n, r, i, a, s)), this.mergeVertices();
}
bs.prototype = Object.create(we.prototype);
bs.prototype.constructor = bs;
function Jr(e, t, n, r, i, a, s) {
  ne.call(this), this.type = "SphereBufferGeometry", this.parameters = {
    radius: e,
    widthSegments: t,
    heightSegments: n,
    phiStart: r,
    phiLength: i,
    thetaStart: a,
    thetaLength: s
  }, e = e || 1, t = Math.max(3, Math.floor(t) || 8), n = Math.max(2, Math.floor(n) || 6), r = r !== void 0 ? r : 0, i = i !== void 0 ? i : Math.PI * 2, a = a !== void 0 ? a : 0, s = s !== void 0 ? s : Math.PI;
  var o = Math.min(a + s, Math.PI), l, c, u = 0, h = [], f = new b(), d = new b(), p = [], v = [], m = [], y = [];
  for (c = 0; c <= n; c++) {
    var x = [], M = c / n, E = 0;
    for (c == 0 && a == 0 ? E = 0.5 / t : c == n && o == Math.PI && (E = -0.5 / t), l = 0; l <= t; l++) {
      var w = l / t;
      f.x = -e * Math.cos(r + w * i) * Math.sin(a + M * s), f.y = e * Math.cos(a + M * s), f.z = e * Math.sin(r + w * i) * Math.sin(a + M * s), v.push(f.x, f.y, f.z), d.copy(f).normalize(), m.push(d.x, d.y, d.z), y.push(w + E, 1 - M), x.push(u++);
    }
    h.push(x);
  }
  for (c = 0; c < n; c++)
    for (l = 0; l < t; l++) {
      var A = h[c][l + 1], C = h[c][l], T = h[c + 1][l], D = h[c + 1][l + 1];
      (c !== 0 || a > 0) && p.push(A, C, D), (c !== n - 1 || o < Math.PI) && p.push(C, T, D);
    }
  this.setIndex(p), this.setAttribute("position", new Q(v, 3)), this.setAttribute("normal", new Q(m, 3)), this.setAttribute("uv", new Q(y, 2));
}
Jr.prototype = Object.create(ne.prototype);
Jr.prototype.constructor = Jr;
function Es(e, t, n, r, i, a) {
  we.call(this), this.type = "RingGeometry", this.parameters = {
    innerRadius: e,
    outerRadius: t,
    thetaSegments: n,
    phiSegments: r,
    thetaStart: i,
    thetaLength: a
  }, this.fromBufferGeometry(new Zi(e, t, n, r, i, a)), this.mergeVertices();
}
Es.prototype = Object.create(we.prototype);
Es.prototype.constructor = Es;
function Zi(e, t, n, r, i, a) {
  ne.call(this), this.type = "RingBufferGeometry", this.parameters = {
    innerRadius: e,
    outerRadius: t,
    thetaSegments: n,
    phiSegments: r,
    thetaStart: i,
    thetaLength: a
  }, e = e || 0.5, t = t || 1, i = i !== void 0 ? i : 0, a = a !== void 0 ? a : Math.PI * 2, n = n !== void 0 ? Math.max(3, n) : 8, r = r !== void 0 ? Math.max(1, r) : 1;
  var s = [], o = [], l = [], c = [], u, h = e, f = (t - e) / r, d = new b(), p = new G(), v, m;
  for (v = 0; v <= r; v++) {
    for (m = 0; m <= n; m++)
      u = i + m / n * a, d.x = h * Math.cos(u), d.y = h * Math.sin(u), o.push(d.x, d.y, d.z), l.push(0, 0, 1), p.x = (d.x / t + 1) / 2, p.y = (d.y / t + 1) / 2, c.push(p.x, p.y);
    h += f;
  }
  for (v = 0; v < r; v++) {
    var y = v * (n + 1);
    for (m = 0; m < n; m++) {
      u = m + y;
      var x = u, M = u + n + 1, E = u + n + 2, w = u + 1;
      s.push(x, M, w), s.push(M, E, w);
    }
  }
  this.setIndex(s), this.setAttribute("position", new Q(o, 3)), this.setAttribute("normal", new Q(l, 3)), this.setAttribute("uv", new Q(c, 2));
}
Zi.prototype = Object.create(ne.prototype);
Zi.prototype.constructor = Zi;
function Ss(e, t, n, r) {
  we.call(this), this.type = "LatheGeometry", this.parameters = {
    points: e,
    segments: t,
    phiStart: n,
    phiLength: r
  }, this.fromBufferGeometry(new Ji(e, t, n, r)), this.mergeVertices();
}
Ss.prototype = Object.create(we.prototype);
Ss.prototype.constructor = Ss;
function Ji(e, t, n, r) {
  ne.call(this), this.type = "LatheBufferGeometry", this.parameters = {
    points: e,
    segments: t,
    phiStart: n,
    phiLength: r
  }, t = Math.floor(t) || 12, n = n || 0, r = r || Math.PI * 2, r = Ae.clamp(r, 0, Math.PI * 2);
  var i = [], a = [], s = [], o, l = 1 / t, c = new b(), u = new G(), h, f;
  for (h = 0; h <= t; h++) {
    var d = n + h * l * r, p = Math.sin(d), v = Math.cos(d);
    for (f = 0; f <= e.length - 1; f++)
      c.x = e[f].x * p, c.y = e[f].y, c.z = e[f].x * v, a.push(c.x, c.y, c.z), u.x = h / t, u.y = f / (e.length - 1), s.push(u.x, u.y);
  }
  for (h = 0; h < t; h++)
    for (f = 0; f < e.length - 1; f++) {
      o = f + h * e.length;
      var m = o, y = o + e.length, x = o + e.length + 1, M = o + 1;
      i.push(m, y, M), i.push(y, x, M);
    }
  if (this.setIndex(i), this.setAttribute("position", new Q(a, 3)), this.setAttribute("uv", new Q(s, 2)), this.computeVertexNormals(), r === Math.PI * 2) {
    var E = this.attributes.normal.array, w = new b(), A = new b(), C = new b();
    for (o = t * e.length * 3, h = 0, f = 0; h < e.length; h++, f += 3)
      w.x = E[f + 0], w.y = E[f + 1], w.z = E[f + 2], A.x = E[o + f + 0], A.y = E[o + f + 1], A.z = E[o + f + 2], C.addVectors(w, A).normalize(), E[f + 0] = E[o + f + 0] = C.x, E[f + 1] = E[o + f + 1] = C.y, E[f + 2] = E[o + f + 2] = C.z;
  }
}
Ji.prototype = Object.create(ne.prototype);
Ji.prototype.constructor = Ji;
function $r(e, t) {
  we.call(this), this.type = "ShapeGeometry", typeof t == "object" && (console.warn("THREE.ShapeGeometry: Options parameter has been removed."), t = t.curveSegments), this.parameters = {
    shapes: e,
    curveSegments: t
  }, this.fromBufferGeometry(new Qr(e, t)), this.mergeVertices();
}
$r.prototype = Object.create(we.prototype);
$r.prototype.constructor = $r;
$r.prototype.toJSON = function() {
  var e = we.prototype.toJSON.call(this), t = this.parameters.shapes;
  return Ku(t, e);
};
function Qr(e, t) {
  ne.call(this), this.type = "ShapeBufferGeometry", this.parameters = {
    shapes: e,
    curveSegments: t
  }, t = t || 12;
  var n = [], r = [], i = [], a = [], s = 0, o = 0;
  if (Array.isArray(e) === !1)
    c(e);
  else
    for (var l = 0; l < e.length; l++)
      c(e[l]), this.addGroup(s, o, l), s += o, o = 0;
  this.setIndex(n), this.setAttribute("position", new Q(r, 3)), this.setAttribute("normal", new Q(i, 3)), this.setAttribute("uv", new Q(a, 2));
  function c(u) {
    var h, f, d, p = r.length / 3, v = u.extractPoints(t), m = v.shape, y = v.holes;
    for (Nn.isClockWise(m) === !1 && (m = m.reverse()), h = 0, f = y.length; h < f; h++)
      d = y[h], Nn.isClockWise(d) === !0 && (y[h] = d.reverse());
    var x = Nn.triangulateShape(m, y);
    for (h = 0, f = y.length; h < f; h++)
      d = y[h], m = m.concat(d);
    for (h = 0, f = m.length; h < f; h++) {
      var M = m[h];
      r.push(M.x, M.y, 0), i.push(0, 0, 1), a.push(M.x, M.y);
    }
    for (h = 0, f = x.length; h < f; h++) {
      var E = x[h], w = E[0] + p, A = E[1] + p, C = E[2] + p;
      n.push(w, A, C), o += 3;
    }
  }
}
Qr.prototype = Object.create(ne.prototype);
Qr.prototype.constructor = Qr;
Qr.prototype.toJSON = function() {
  var e = ne.prototype.toJSON.call(this), t = this.parameters.shapes;
  return Ku(t, e);
};
function Ku(e, t) {
  if (t.shapes = [], Array.isArray(e))
    for (var n = 0, r = e.length; n < r; n++) {
      var i = e[n];
      t.shapes.push(i.uuid);
    }
  else
    t.shapes.push(e.uuid);
  return t;
}
function Ts(e, t) {
  ne.call(this), this.type = "EdgesGeometry", this.parameters = {
    thresholdAngle: t
  }, t = t !== void 0 ? t : 1;
  var n = [], r = Math.cos(Ae.DEG2RAD * t), i = [0, 0], a = {}, s, o, l, c = ["a", "b", "c"], u;
  e.isBufferGeometry ? (u = new we(), u.fromBufferGeometry(e)) : u = e.clone(), u.mergeVertices(), u.computeFaceNormals();
  for (var h = u.vertices, f = u.faces, d = 0, p = f.length; d < p; d++)
    for (var v = f[d], m = 0; m < 3; m++)
      s = v[c[m]], o = v[c[(m + 1) % 3]], i[0] = Math.min(s, o), i[1] = Math.max(s, o), l = i[0] + "," + i[1], a[l] === void 0 ? a[l] = { index1: i[0], index2: i[1], face1: d, face2: void 0 } : a[l].face2 = d;
  for (l in a) {
    var y = a[l];
    if (y.face2 === void 0 || f[y.face1].normal.dot(f[y.face2].normal) <= r) {
      var x = h[y.index1];
      n.push(x.x, x.y, x.z), x = h[y.index2], n.push(x.x, x.y, x.z);
    }
  }
  this.setAttribute("position", new Q(n, 3));
}
Ts.prototype = Object.create(ne.prototype);
Ts.prototype.constructor = Ts;
function Kr(e, t, n, r, i, a, s, o) {
  we.call(this), this.type = "CylinderGeometry", this.parameters = {
    radiusTop: e,
    radiusBottom: t,
    height: n,
    radialSegments: r,
    heightSegments: i,
    openEnded: a,
    thetaStart: s,
    thetaLength: o
  }, this.fromBufferGeometry(new Gn(e, t, n, r, i, a, s, o)), this.mergeVertices();
}
Kr.prototype = Object.create(we.prototype);
Kr.prototype.constructor = Kr;
function Gn(e, t, n, r, i, a, s, o) {
  ne.call(this), this.type = "CylinderBufferGeometry", this.parameters = {
    radiusTop: e,
    radiusBottom: t,
    height: n,
    radialSegments: r,
    heightSegments: i,
    openEnded: a,
    thetaStart: s,
    thetaLength: o
  };
  var l = this;
  e = e !== void 0 ? e : 1, t = t !== void 0 ? t : 1, n = n || 1, r = Math.floor(r) || 8, i = Math.floor(i) || 1, a = a !== void 0 ? a : !1, s = s !== void 0 ? s : 0, o = o !== void 0 ? o : Math.PI * 2;
  var c = [], u = [], h = [], f = [], d = 0, p = [], v = n / 2, m = 0;
  y(), a === !1 && (e > 0 && x(!0), t > 0 && x(!1)), this.setIndex(c), this.setAttribute("position", new Q(u, 3)), this.setAttribute("normal", new Q(h, 3)), this.setAttribute("uv", new Q(f, 2));
  function y() {
    var M, E, w = new b(), A = new b(), C = 0, T = (t - e) / n;
    for (E = 0; E <= i; E++) {
      var D = [], I = E / i, B = I * (t - e) + e;
      for (M = 0; M <= r; M++) {
        var O = M / r, F = O * o + s, N = Math.sin(F), z = Math.cos(F);
        A.x = B * N, A.y = -I * n + v, A.z = B * z, u.push(A.x, A.y, A.z), w.set(N, T, z).normalize(), h.push(w.x, w.y, w.z), f.push(O, 1 - I), D.push(d++);
      }
      p.push(D);
    }
    for (M = 0; M < r; M++)
      for (E = 0; E < i; E++) {
        var H = p[E][M], te = p[E + 1][M], $ = p[E + 1][M + 1], X = p[E][M + 1];
        c.push(H, te, X), c.push(te, $, X), C += 6;
      }
    l.addGroup(m, C, 0), m += C;
  }
  function x(M) {
    var E, w, A, C = new G(), T = new b(), D = 0, I = M === !0 ? e : t, B = M === !0 ? 1 : -1;
    for (w = d, E = 1; E <= r; E++)
      u.push(0, v * B, 0), h.push(0, B, 0), f.push(0.5, 0.5), d++;
    for (A = d, E = 0; E <= r; E++) {
      var O = E / r, F = O * o + s, N = Math.cos(F), z = Math.sin(F);
      T.x = I * z, T.y = v * B, T.z = I * N, u.push(T.x, T.y, T.z), h.push(0, B, 0), C.x = N * 0.5 + 0.5, C.y = z * 0.5 * B + 0.5, f.push(C.x, C.y), d++;
    }
    for (E = 0; E < r; E++) {
      var H = w + E, te = A + E;
      M === !0 ? c.push(te, te + 1, H) : c.push(te + 1, te, H), D += 3;
    }
    l.addGroup(m, D, M === !0 ? 1 : 2), m += D;
  }
}
Gn.prototype = Object.create(ne.prototype);
Gn.prototype.constructor = Gn;
function As(e, t, n, r, i, a, s) {
  Kr.call(this, 0, e, t, n, r, i, a, s), this.type = "ConeGeometry", this.parameters = {
    radius: e,
    height: t,
    radialSegments: n,
    heightSegments: r,
    openEnded: i,
    thetaStart: a,
    thetaLength: s
  };
}
As.prototype = Object.create(Kr.prototype);
As.prototype.constructor = As;
function Ls(e, t, n, r, i, a, s) {
  Gn.call(this, 0, e, t, n, r, i, a, s), this.type = "ConeBufferGeometry", this.parameters = {
    radius: e,
    height: t,
    radialSegments: n,
    heightSegments: r,
    openEnded: i,
    thetaStart: a,
    thetaLength: s
  };
}
Ls.prototype = Object.create(Gn.prototype);
Ls.prototype.constructor = Ls;
function Cs(e, t, n, r) {
  we.call(this), this.type = "CircleGeometry", this.parameters = {
    radius: e,
    segments: t,
    thetaStart: n,
    thetaLength: r
  }, this.fromBufferGeometry(new $i(e, t, n, r)), this.mergeVertices();
}
Cs.prototype = Object.create(we.prototype);
Cs.prototype.constructor = Cs;
function $i(e, t, n, r) {
  ne.call(this), this.type = "CircleBufferGeometry", this.parameters = {
    radius: e,
    segments: t,
    thetaStart: n,
    thetaLength: r
  }, e = e || 1, t = t !== void 0 ? Math.max(3, t) : 8, n = n !== void 0 ? n : 0, r = r !== void 0 ? r : Math.PI * 2;
  var i = [], a = [], s = [], o = [], l, c, u = new b(), h = new G();
  for (a.push(0, 0, 0), s.push(0, 0, 1), o.push(0.5, 0.5), c = 0, l = 3; c <= t; c++, l += 3) {
    var f = n + c / t * r;
    u.x = e * Math.cos(f), u.y = e * Math.sin(f), a.push(u.x, u.y, u.z), s.push(0, 0, 1), h.x = (a[l] / e + 1) / 2, h.y = (a[l + 1] / e + 1) / 2, o.push(h.x, h.y);
  }
  for (l = 1; l <= t; l++)
    i.push(l, l + 1, 0);
  this.setIndex(i), this.setAttribute("position", new Q(a, 3)), this.setAttribute("normal", new Q(s, 3)), this.setAttribute("uv", new Q(o, 2));
}
$i.prototype = Object.create(ne.prototype);
$i.prototype.constructor = $i;
var wt = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  WireframeGeometry: fs,
  ParametricGeometry: ds,
  ParametricBufferGeometry: zi,
  TetrahedronGeometry: vs,
  TetrahedronBufferGeometry: Ui,
  OctahedronGeometry: ms,
  OctahedronBufferGeometry: Xr,
  IcosahedronGeometry: gs,
  IcosahedronBufferGeometry: Gi,
  DodecahedronGeometry: ys,
  DodecahedronBufferGeometry: Vi,
  PolyhedronGeometry: ps,
  PolyhedronBufferGeometry: It,
  TubeGeometry: xs,
  TubeBufferGeometry: Yr,
  TorusKnotGeometry: _s,
  TorusKnotBufferGeometry: Hi,
  TorusGeometry: ws,
  TorusBufferGeometry: ki,
  TextGeometry: Ms,
  TextBufferGeometry: Yi,
  SphereGeometry: bs,
  SphereBufferGeometry: Jr,
  RingGeometry: Es,
  RingBufferGeometry: Zi,
  PlaneGeometry: ss,
  PlaneBufferGeometry: qr,
  LatheGeometry: Ss,
  LatheBufferGeometry: Ji,
  ShapeGeometry: $r,
  ShapeBufferGeometry: Qr,
  ExtrudeGeometry: Zr,
  ExtrudeBufferGeometry: xn,
  EdgesGeometry: Ts,
  ConeGeometry: As,
  ConeBufferGeometry: Ls,
  CylinderGeometry: Kr,
  CylinderBufferGeometry: Gn,
  CircleGeometry: Cs,
  CircleBufferGeometry: $i,
  BoxGeometry: cd,
  BoxBufferGeometry: ks
});
function ei(e) {
  xe.call(this), this.type = "ShadowMaterial", this.color = new ee(0), this.transparent = !0, this.setValues(e);
}
ei.prototype = Object.create(xe.prototype);
ei.prototype.constructor = ei;
ei.prototype.isShadowMaterial = !0;
ei.prototype.copy = function(e) {
  return xe.prototype.copy.call(this, e), this.color.copy(e.color), this;
};
function Vn(e) {
  St.call(this, e), this.type = "RawShaderMaterial";
}
Vn.prototype = Object.create(St.prototype);
Vn.prototype.constructor = Vn;
Vn.prototype.isRawShaderMaterial = !0;
function _n(e) {
  xe.call(this), this.defines = { STANDARD: "" }, this.type = "MeshStandardMaterial", this.color = new ee(16777215), this.roughness = 1, this.metalness = 0, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new ee(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = li, this.normalScale = new G(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapIntensity = 1, this.refractionRatio = 0.98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.setValues(e);
}
_n.prototype = Object.create(xe.prototype);
_n.prototype.constructor = _n;
_n.prototype.isMeshStandardMaterial = !0;
_n.prototype.copy = function(e) {
  return xe.prototype.copy.call(this, e), this.defines = { STANDARD: "" }, this.color.copy(e.color), this.roughness = e.roughness, this.metalness = e.metalness, this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.roughnessMap = e.roughnessMap, this.metalnessMap = e.metalnessMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapIntensity = e.envMapIntensity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.skinning = e.skinning, this.morphTargets = e.morphTargets, this.morphNormals = e.morphNormals, this;
};
function ti(e) {
  _n.call(this), this.defines = {
    STANDARD: "",
    PHYSICAL: ""
  }, this.type = "MeshPhysicalMaterial", this.reflectivity = 0.5, this.clearcoat = 0, this.clearcoatRoughness = 0, this.sheen = null, this.clearcoatNormalScale = new G(1, 1), this.clearcoatNormalMap = null, this.transparency = 0, this.setValues(e);
}
ti.prototype = Object.create(_n.prototype);
ti.prototype.constructor = ti;
ti.prototype.isMeshPhysicalMaterial = !0;
ti.prototype.copy = function(e) {
  return _n.prototype.copy.call(this, e), this.defines = {
    STANDARD: "",
    PHYSICAL: ""
  }, this.reflectivity = e.reflectivity, this.clearcoat = e.clearcoat, this.clearcoatRoughness = e.clearcoatRoughness, e.sheen ? this.sheen = (this.sheen || new ee()).copy(e.sheen) : this.sheen = null, this.clearcoatNormalMap = e.clearcoatNormalMap, this.clearcoatNormalScale.copy(e.clearcoatNormalScale), this.transparency = e.transparency, this;
};
function ur(e) {
  xe.call(this), this.type = "MeshPhongMaterial", this.color = new ee(16777215), this.specular = new ee(1118481), this.shininess = 30, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new ee(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = li, this.normalScale = new G(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = Us, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.setValues(e);
}
ur.prototype = Object.create(xe.prototype);
ur.prototype.constructor = ur;
ur.prototype.isMeshPhongMaterial = !0;
ur.prototype.copy = function(e) {
  return xe.prototype.copy.call(this, e), this.color.copy(e.color), this.specular.copy(e.specular), this.shininess = e.shininess, this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.skinning = e.skinning, this.morphTargets = e.morphTargets, this.morphNormals = e.morphNormals, this;
};
function ni(e) {
  xe.call(this), this.defines = { TOON: "" }, this.type = "MeshToonMaterial", this.color = new ee(16777215), this.specular = new ee(1118481), this.shininess = 30, this.map = null, this.gradientMap = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new ee(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = li, this.normalScale = new G(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.specularMap = null, this.alphaMap = null, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.setValues(e);
}
ni.prototype = Object.create(xe.prototype);
ni.prototype.constructor = ni;
ni.prototype.isMeshToonMaterial = !0;
ni.prototype.copy = function(e) {
  return xe.prototype.copy.call(this, e), this.color.copy(e.color), this.specular.copy(e.specular), this.shininess = e.shininess, this.map = e.map, this.gradientMap = e.gradientMap, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.skinning = e.skinning, this.morphTargets = e.morphTargets, this.morphNormals = e.morphNormals, this;
};
function ri(e) {
  xe.call(this), this.type = "MeshNormalMaterial", this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = li, this.normalScale = new G(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.setValues(e);
}
ri.prototype = Object.create(xe.prototype);
ri.prototype.constructor = ri;
ri.prototype.isMeshNormalMaterial = !0;
ri.prototype.copy = function(e) {
  return xe.prototype.copy.call(this, e), this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.skinning = e.skinning, this.morphTargets = e.morphTargets, this.morphNormals = e.morphNormals, this;
};
function ii(e) {
  xe.call(this), this.type = "MeshLambertMaterial", this.color = new ee(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new ee(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = Us, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.setValues(e);
}
ii.prototype = Object.create(xe.prototype);
ii.prototype.constructor = ii;
ii.prototype.isMeshLambertMaterial = !0;
ii.prototype.copy = function(e) {
  return xe.prototype.copy.call(this, e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.skinning = e.skinning, this.morphTargets = e.morphTargets, this.morphNormals = e.morphNormals, this;
};
function ai(e) {
  xe.call(this), this.defines = { MATCAP: "" }, this.type = "MeshMatcapMaterial", this.color = new ee(16777215), this.matcap = null, this.map = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = li, this.normalScale = new G(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.alphaMap = null, this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.setValues(e);
}
ai.prototype = Object.create(xe.prototype);
ai.prototype.constructor = ai;
ai.prototype.isMeshMatcapMaterial = !0;
ai.prototype.copy = function(e) {
  return xe.prototype.copy.call(this, e), this.defines = { MATCAP: "" }, this.color.copy(e.color), this.matcap = e.matcap, this.map = e.map, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.alphaMap = e.alphaMap, this.skinning = e.skinning, this.morphTargets = e.morphTargets, this.morphNormals = e.morphNormals, this;
};
function si(e) {
  at.call(this), this.type = "LineDashedMaterial", this.scale = 1, this.dashSize = 3, this.gapSize = 1, this.setValues(e);
}
si.prototype = Object.create(at.prototype);
si.prototype.constructor = si;
si.prototype.isLineDashedMaterial = !0;
si.prototype.copy = function(e) {
  return at.prototype.copy.call(this, e), this.scale = e.scale, this.dashSize = e.dashSize, this.gapSize = e.gapSize, this;
};
var wg = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ShadowMaterial: ei,
  SpriteMaterial: lr,
  RawShaderMaterial: Vn,
  ShaderMaterial: St,
  PointsMaterial: cr,
  MeshPhysicalMaterial: ti,
  MeshStandardMaterial: _n,
  MeshPhongMaterial: ur,
  MeshToonMaterial: ni,
  MeshNormalMaterial: ri,
  MeshLambertMaterial: ii,
  MeshDepthMaterial: sr,
  MeshDistanceMaterial: or,
  MeshBasicMaterial: Zt,
  MeshMatcapMaterial: ai,
  LineDashedMaterial: si,
  LineBasicMaterial: at,
  Material: xe
}), it = {
  // same as Array.prototype.slice, but also works on typed arrays
  arraySlice: function(e, t, n) {
    return it.isTypedArray(e) ? new e.constructor(e.subarray(t, n !== void 0 ? n : e.length)) : e.slice(t, n);
  },
  // converts an array to a specific type
  convertArray: function(e, t, n) {
    return !e || // let 'undefined' and 'null' pass
    !n && e.constructor === t ? e : typeof t.BYTES_PER_ELEMENT == "number" ? new t(e) : Array.prototype.slice.call(e);
  },
  isTypedArray: function(e) {
    return ArrayBuffer.isView(e) && !(e instanceof DataView);
  },
  // returns an array by which times and values can be sorted
  getKeyframeOrder: function(e) {
    function t(a, s) {
      return e[a] - e[s];
    }
    for (var n = e.length, r = new Array(n), i = 0; i !== n; ++i) r[i] = i;
    return r.sort(t), r;
  },
  // uses the array previously returned by 'getKeyframeOrder' to sort data
  sortedArray: function(e, t, n) {
    for (var r = e.length, i = new e.constructor(r), a = 0, s = 0; s !== r; ++a)
      for (var o = n[a] * t, l = 0; l !== t; ++l)
        i[s++] = e[o + l];
    return i;
  },
  // function for parsing AOS keyframe formats
  flattenJSON: function(e, t, n, r) {
    for (var i = 1, a = e[0]; a !== void 0 && a[r] === void 0; )
      a = e[i++];
    if (a !== void 0) {
      var s = a[r];
      if (s !== void 0)
        if (Array.isArray(s))
          do
            s = a[r], s !== void 0 && (t.push(a.time), n.push.apply(n, s)), a = e[i++];
          while (a !== void 0);
        else if (s.toArray !== void 0)
          do
            s = a[r], s !== void 0 && (t.push(a.time), s.toArray(n, n.length)), a = e[i++];
          while (a !== void 0);
        else
          do
            s = a[r], s !== void 0 && (t.push(a.time), n.push(s)), a = e[i++];
          while (a !== void 0);
    }
  },
  subclip: function(e, t, n, r, i) {
    i = i || 30;
    var a = e.clone();
    a.name = t;
    for (var s = [], o = 0; o < a.tracks.length; ++o) {
      for (var l = a.tracks[o], c = l.getValueSize(), u = [], h = [], f = 0; f < l.times.length; ++f) {
        var d = l.times[f] * i;
        if (!(d < n || d >= r)) {
          u.push(l.times[f]);
          for (var p = 0; p < c; ++p)
            h.push(l.values[f * c + p]);
        }
      }
      u.length !== 0 && (l.times = it.convertArray(u, l.times.constructor), l.values = it.convertArray(h, l.values.constructor), s.push(l));
    }
    a.tracks = s;
    for (var v = 1 / 0, o = 0; o < a.tracks.length; ++o)
      v > a.tracks[o].times[0] && (v = a.tracks[o].times[0]);
    for (var o = 0; o < a.tracks.length; ++o)
      a.tracks[o].shift(-1 * v);
    return a.resetDuration(), a;
  }
};
function Bt(e, t, n, r) {
  this.parameterPositions = e, this._cachedIndex = 0, this.resultBuffer = r !== void 0 ? r : new t.constructor(n), this.sampleValues = t, this.valueSize = n;
}
Object.assign(Bt.prototype, {
  evaluate: function(e) {
    var t = this.parameterPositions, n = this._cachedIndex, r = t[n], i = t[n - 1];
    e: {
      t: {
        var a;
        n: {
          r: if (!(e < r)) {
            for (var s = n + 2; ; ) {
              if (r === void 0) {
                if (e < i) break r;
                return n = t.length, this._cachedIndex = n, this.afterEnd_(n - 1, e, i);
              }
              if (n === s) break;
              if (i = r, r = t[++n], e < r)
                break t;
            }
            a = t.length;
            break n;
          }
          if (!(e >= i)) {
            var o = t[1];
            e < o && (n = 2, i = o);
            for (var s = n - 2; ; ) {
              if (i === void 0)
                return this._cachedIndex = 0, this.beforeStart_(0, e, r);
              if (n === s) break;
              if (r = i, i = t[--n - 1], e >= i)
                break t;
            }
            a = n, n = 0;
            break n;
          }
          break e;
        }
        for (; n < a; ) {
          var l = n + a >>> 1;
          e < t[l] ? a = l : n = l + 1;
        }
        if (r = t[n], i = t[n - 1], i === void 0)
          return this._cachedIndex = 0, this.beforeStart_(0, e, r);
        if (r === void 0)
          return n = t.length, this._cachedIndex = n, this.afterEnd_(n - 1, i, e);
      }
      this._cachedIndex = n, this.intervalChanged_(n, i, r);
    }
    return this.interpolate_(n, i, e, r);
  },
  settings: null,
  // optional, subclass-specific settings structure
  // Note: The indirection allows central control of many interpolants.
  // --- Protected interface
  DefaultSettings_: {},
  getSettings_: function() {
    return this.settings || this.DefaultSettings_;
  },
  copySampleValue_: function(e) {
    for (var t = this.resultBuffer, n = this.sampleValues, r = this.valueSize, i = e * r, a = 0; a !== r; ++a)
      t[a] = n[i + a];
    return t;
  },
  // Template methods for derived classes:
  interpolate_: function() {
    throw new Error("call to abstract method");
  },
  intervalChanged_: function() {
  }
});
//!\ DECLARE ALIAS AFTER assign prototype !
Object.assign(Bt.prototype, {
  //( 0, t, t0 ), returns this.resultBuffer
  beforeStart_: Bt.prototype.copySampleValue_,
  //( N-1, tN-1, t ), returns this.resultBuffer
  afterEnd_: Bt.prototype.copySampleValue_
});
function jo(e, t, n, r) {
  Bt.call(this, e, t, n, r), this._weightPrev = -0, this._offsetPrev = -0, this._weightNext = -0, this._offsetNext = -0;
}
jo.prototype = Object.assign(Object.create(Bt.prototype), {
  constructor: jo,
  DefaultSettings_: {
    endingStart: Hr,
    endingEnd: Hr
  },
  intervalChanged_: function(e, t, n) {
    var r = this.parameterPositions, i = e - 2, a = e + 1, s = r[i], o = r[a];
    if (s === void 0)
      switch (this.getSettings_().endingStart) {
        case Nr:
          i = e, s = 2 * t - n;
          break;
        case is:
          i = r.length - 2, s = t + r[i] - r[i + 1];
          break;
        default:
          i = e, s = n;
      }
    if (o === void 0)
      switch (this.getSettings_().endingEnd) {
        case Nr:
          a = e, o = 2 * n - t;
          break;
        case is:
          a = 1, o = n + r[1] - r[0];
          break;
        default:
          a = e - 1, o = t;
      }
    var l = (n - t) * 0.5, c = this.valueSize;
    this._weightPrev = l / (t - s), this._weightNext = l / (o - n), this._offsetPrev = i * c, this._offsetNext = a * c;
  },
  interpolate_: function(e, t, n, r) {
    for (var i = this.resultBuffer, a = this.sampleValues, s = this.valueSize, o = e * s, l = o - s, c = this._offsetPrev, u = this._offsetNext, h = this._weightPrev, f = this._weightNext, d = (n - t) / (r - t), p = d * d, v = p * d, m = -h * v + 2 * h * p - h * d, y = (1 + h) * v + (-1.5 - 2 * h) * p + (-0.5 + h) * d + 1, x = (-1 - f) * v + (1.5 + f) * p + 0.5 * d, M = f * v - f * p, E = 0; E !== s; ++E)
      i[E] = m * a[c + E] + y * a[l + E] + x * a[o + E] + M * a[u + E];
    return i;
  }
});
function Rs(e, t, n, r) {
  Bt.call(this, e, t, n, r);
}
Rs.prototype = Object.assign(Object.create(Bt.prototype), {
  constructor: Rs,
  interpolate_: function(e, t, n, r) {
    for (var i = this.resultBuffer, a = this.sampleValues, s = this.valueSize, o = e * s, l = o - s, c = (n - t) / (r - t), u = 1 - c, h = 0; h !== s; ++h)
      i[h] = a[l + h] * u + a[o + h] * c;
    return i;
  }
});
function qo(e, t, n, r) {
  Bt.call(this, e, t, n, r);
}
qo.prototype = Object.assign(Object.create(Bt.prototype), {
  constructor: qo,
  interpolate_: function(e) {
    return this.copySampleValue_(e - 1);
  }
});
function yt(e, t, n, r) {
  if (e === void 0) throw new Error("THREE.KeyframeTrack: track name is undefined");
  if (t === void 0 || t.length === 0) throw new Error("THREE.KeyframeTrack: no keyframes in track named " + e);
  this.name = e, this.times = it.convertArray(t, this.TimeBufferType), this.values = it.convertArray(n, this.ValueBufferType), this.setInterpolation(r || this.DefaultInterpolation);
}
Object.assign(yt, {
  // Serialization (in static context, because of constructor invocation
  // and automatic invocation of .toJSON):
  toJSON: function(e) {
    var t = e.constructor, n;
    if (t.toJSON !== void 0)
      n = t.toJSON(e);
    else {
      n = {
        name: e.name,
        times: it.convertArray(e.times, Array),
        values: it.convertArray(e.values, Array)
      };
      var r = e.getInterpolation();
      r !== e.DefaultInterpolation && (n.interpolation = r);
    }
    return n.type = e.ValueTypeName, n;
  }
});
Object.assign(yt.prototype, {
  constructor: yt,
  TimeBufferType: Float32Array,
  ValueBufferType: Float32Array,
  DefaultInterpolation: Qa,
  InterpolantFactoryMethodDiscrete: function(e) {
    return new qo(this.times, this.values, this.getValueSize(), e);
  },
  InterpolantFactoryMethodLinear: function(e) {
    return new Rs(this.times, this.values, this.getValueSize(), e);
  },
  InterpolantFactoryMethodSmooth: function(e) {
    return new jo(this.times, this.values, this.getValueSize(), e);
  },
  setInterpolation: function(e) {
    var t;
    switch (e) {
      case rs:
        t = this.InterpolantFactoryMethodDiscrete;
        break;
      case Qa:
        t = this.InterpolantFactoryMethodLinear;
        break;
      case qs:
        t = this.InterpolantFactoryMethodSmooth;
        break;
    }
    if (t === void 0) {
      var n = "unsupported interpolation for " + this.ValueTypeName + " keyframe track named " + this.name;
      if (this.createInterpolant === void 0)
        if (e !== this.DefaultInterpolation)
          this.setInterpolation(this.DefaultInterpolation);
        else
          throw new Error(n);
      return console.warn("THREE.KeyframeTrack:", n), this;
    }
    return this.createInterpolant = t, this;
  },
  getInterpolation: function() {
    switch (this.createInterpolant) {
      case this.InterpolantFactoryMethodDiscrete:
        return rs;
      case this.InterpolantFactoryMethodLinear:
        return Qa;
      case this.InterpolantFactoryMethodSmooth:
        return qs;
    }
  },
  getValueSize: function() {
    return this.values.length / this.times.length;
  },
  // move all keyframes either forwards or backwards in time
  shift: function(e) {
    if (e !== 0)
      for (var t = this.times, n = 0, r = t.length; n !== r; ++n)
        t[n] += e;
    return this;
  },
  // scale all keyframe times by a factor (useful for frame <-> seconds conversions)
  scale: function(e) {
    if (e !== 1)
      for (var t = this.times, n = 0, r = t.length; n !== r; ++n)
        t[n] *= e;
    return this;
  },
  // removes keyframes before and after animation without changing any values within the range [startTime, endTime].
  // IMPORTANT: We do not shift around keys to the start of the track time, because for interpolated keys this will change their values
  trim: function(e, t) {
    for (var n = this.times, r = n.length, i = 0, a = r - 1; i !== r && n[i] < e; )
      ++i;
    for (; a !== -1 && n[a] > t; )
      --a;
    if (++a, i !== 0 || a !== r) {
      i >= a && (a = Math.max(a, 1), i = a - 1);
      var s = this.getValueSize();
      this.times = it.arraySlice(n, i, a), this.values = it.arraySlice(this.values, i * s, a * s);
    }
    return this;
  },
  // ensure we do not get a GarbageInGarbageOut situation, make sure tracks are at least minimally viable
  validate: function() {
    var e = !0, t = this.getValueSize();
    t - Math.floor(t) !== 0 && (console.error("THREE.KeyframeTrack: Invalid value size in track.", this), e = !1);
    var n = this.times, r = this.values, i = n.length;
    i === 0 && (console.error("THREE.KeyframeTrack: Track is empty.", this), e = !1);
    for (var a = null, s = 0; s !== i; s++) {
      var o = n[s];
      if (typeof o == "number" && isNaN(o)) {
        console.error("THREE.KeyframeTrack: Time is not a valid number.", this, s, o), e = !1;
        break;
      }
      if (a !== null && a > o) {
        console.error("THREE.KeyframeTrack: Out of order keys.", this, s, o, a), e = !1;
        break;
      }
      a = o;
    }
    if (r !== void 0 && it.isTypedArray(r))
      for (var s = 0, l = r.length; s !== l; ++s) {
        var c = r[s];
        if (isNaN(c)) {
          console.error("THREE.KeyframeTrack: Value is not a valid number.", this, s, c), e = !1;
          break;
        }
      }
    return e;
  },
  // removes equivalent sequential keys as common in morph target sequences
  // (0,0,0,0,1,1,1,0,0,0,0,0,0,0) --> (0,0,1,1,0,0)
  optimize: function() {
    for (var e = it.arraySlice(this.times), t = it.arraySlice(this.values), n = this.getValueSize(), r = this.getInterpolation() === qs, i = 1, a = e.length - 1, s = 1; s < a; ++s) {
      var o = !1, l = e[s], c = e[s + 1];
      if (l !== c && (s !== 1 || l !== l[0]))
        if (r)
          o = !0;
        else
          for (var u = s * n, h = u - n, f = u + n, d = 0; d !== n; ++d) {
            var p = t[u + d];
            if (p !== t[h + d] || p !== t[f + d]) {
              o = !0;
              break;
            }
          }
      if (o) {
        if (s !== i) {
          e[i] = e[s];
          for (var v = s * n, m = i * n, d = 0; d !== n; ++d)
            t[m + d] = t[v + d];
        }
        ++i;
      }
    }
    if (a > 0) {
      e[i] = e[a];
      for (var v = a * n, m = i * n, d = 0; d !== n; ++d)
        t[m + d] = t[v + d];
      ++i;
    }
    return i !== e.length ? (this.times = it.arraySlice(e, 0, i), this.values = it.arraySlice(t, 0, i * n)) : (this.times = e, this.values = t), this;
  },
  clone: function() {
    var e = it.arraySlice(this.times, 0), t = it.arraySlice(this.values, 0), n = this.constructor, r = new n(this.name, e, t);
    return r.createInterpolant = this.createInterpolant, r;
  }
});
function Xo(e, t, n) {
  yt.call(this, e, t, n);
}
Xo.prototype = Object.assign(Object.create(yt.prototype), {
  constructor: Xo,
  ValueTypeName: "bool",
  ValueBufferType: Array,
  DefaultInterpolation: rs,
  InterpolantFactoryMethodLinear: void 0,
  InterpolantFactoryMethodSmooth: void 0
  // Note: Actually this track could have a optimized / compressed
  // representation of a single value and a custom interpolant that
  // computes "firstValue ^ isOdd( index )".
});
function Yo(e, t, n, r) {
  yt.call(this, e, t, n, r);
}
Yo.prototype = Object.assign(Object.create(yt.prototype), {
  constructor: Yo,
  ValueTypeName: "color"
  // ValueBufferType is inherited
  // DefaultInterpolation is inherited
  // Note: Very basic implementation and nothing special yet.
  // However, this is the place for color space parameterization.
});
function Qi(e, t, n, r) {
  yt.call(this, e, t, n, r);
}
Qi.prototype = Object.assign(Object.create(yt.prototype), {
  constructor: Qi,
  ValueTypeName: "number"
  // ValueBufferType is inherited
  // DefaultInterpolation is inherited
});
function Zo(e, t, n, r) {
  Bt.call(this, e, t, n, r);
}
Zo.prototype = Object.assign(Object.create(Bt.prototype), {
  constructor: Zo,
  interpolate_: function(e, t, n, r) {
    for (var i = this.resultBuffer, a = this.sampleValues, s = this.valueSize, o = e * s, l = (n - t) / (r - t), c = o + s; o !== c; o += 4)
      Tt.slerpFlat(i, 0, a, o - s, a, o, l);
    return i;
  }
});
function Ps(e, t, n, r) {
  yt.call(this, e, t, n, r);
}
Ps.prototype = Object.assign(Object.create(yt.prototype), {
  constructor: Ps,
  ValueTypeName: "quaternion",
  // ValueBufferType is inherited
  DefaultInterpolation: Qa,
  InterpolantFactoryMethodLinear: function(e) {
    return new Zo(this.times, this.values, this.getValueSize(), e);
  },
  InterpolantFactoryMethodSmooth: void 0
  // not yet implemented
});
function Jo(e, t, n, r) {
  yt.call(this, e, t, n, r);
}
Jo.prototype = Object.assign(Object.create(yt.prototype), {
  constructor: Jo,
  ValueTypeName: "string",
  ValueBufferType: Array,
  DefaultInterpolation: rs,
  InterpolantFactoryMethodLinear: void 0,
  InterpolantFactoryMethodSmooth: void 0
});
function Ki(e, t, n, r) {
  yt.call(this, e, t, n, r);
}
Ki.prototype = Object.assign(Object.create(yt.prototype), {
  constructor: Ki,
  ValueTypeName: "vector"
  // ValueBufferType is inherited
  // DefaultInterpolation is inherited
});
function Yt(e, t, n) {
  this.name = e, this.tracks = n, this.duration = t !== void 0 ? t : -1, this.uuid = Ae.generateUUID(), this.duration < 0 && this.resetDuration();
}
function Mg(e) {
  switch (e.toLowerCase()) {
    case "scalar":
    case "double":
    case "float":
    case "number":
    case "integer":
      return Qi;
    case "vector":
    case "vector2":
    case "vector3":
    case "vector4":
      return Ki;
    case "color":
      return Yo;
    case "quaternion":
      return Ps;
    case "bool":
    case "boolean":
      return Xo;
    case "string":
      return Jo;
  }
  throw new Error("THREE.KeyframeTrack: Unsupported typeName: " + e);
}
function bg(e) {
  if (e.type === void 0)
    throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");
  var t = Mg(e.type);
  if (e.times === void 0) {
    var n = [], r = [];
    it.flattenJSON(e.keys, n, r, "value"), e.times = n, e.values = r;
  }
  return t.parse !== void 0 ? t.parse(e) : new t(e.name, e.times, e.values, e.interpolation);
}
Object.assign(Yt, {
  parse: function(e) {
    for (var t = [], n = e.tracks, r = 1 / (e.fps || 1), i = 0, a = n.length; i !== a; ++i)
      t.push(bg(n[i]).scale(r));
    return new Yt(e.name, e.duration, t);
  },
  toJSON: function(e) {
    for (var t = [], n = e.tracks, r = {
      name: e.name,
      duration: e.duration,
      tracks: t,
      uuid: e.uuid
    }, i = 0, a = n.length; i !== a; ++i)
      t.push(yt.toJSON(n[i]));
    return r;
  },
  CreateFromMorphTargetSequence: function(e, t, n, r) {
    for (var i = t.length, a = [], s = 0; s < i; s++) {
      var o = [], l = [];
      o.push(
        (s + i - 1) % i,
        s,
        (s + 1) % i
      ), l.push(0, 1, 0);
      var c = it.getKeyframeOrder(o);
      o = it.sortedArray(o, 1, c), l = it.sortedArray(l, 1, c), !r && o[0] === 0 && (o.push(i), l.push(l[0])), a.push(
        new Qi(
          ".morphTargetInfluences[" + t[s].name + "]",
          o,
          l
        ).scale(1 / n)
      );
    }
    return new Yt(e, -1, a);
  },
  findByName: function(e, t) {
    var n = e;
    if (!Array.isArray(e)) {
      var r = e;
      n = r.geometry && r.geometry.animations || r.animations;
    }
    for (var i = 0; i < n.length; i++)
      if (n[i].name === t)
        return n[i];
    return null;
  },
  CreateClipsFromMorphTargetSequences: function(e, t, n) {
    for (var r = {}, i = /^([\w-]*?)([\d]+)$/, a = 0, s = e.length; a < s; a++) {
      var o = e[a], l = o.name.match(i);
      if (l && l.length > 1) {
        var c = l[1], u = r[c];
        u || (r[c] = u = []), u.push(o);
      }
    }
    var h = [];
    for (var c in r)
      h.push(Yt.CreateFromMorphTargetSequence(c, r[c], t, n));
    return h;
  },
  // parse the animation.hierarchy format
  parseAnimation: function(e, t) {
    if (!e)
      return console.error("THREE.AnimationClip: No animation in JSONLoader data."), null;
    for (var n = function(M, E, w, A, C) {
      if (w.length !== 0) {
        var T = [], D = [];
        it.flattenJSON(w, T, D, A), T.length !== 0 && C.push(new M(E, T, D));
      }
    }, r = [], i = e.name || "default", a = e.length || -1, s = e.fps || 30, o = e.hierarchy || [], l = 0; l < o.length; l++) {
      var c = o[l].keys;
      if (!(!c || c.length === 0))
        if (c[0].morphTargets) {
          for (var u = {}, h = 0; h < c.length; h++)
            if (c[h].morphTargets)
              for (var f = 0; f < c[h].morphTargets.length; f++)
                u[c[h].morphTargets[f]] = -1;
          for (var d in u) {
            for (var p = [], v = [], f = 0; f !== c[h].morphTargets.length; ++f) {
              var m = c[h];
              p.push(m.time), v.push(m.morphTarget === d ? 1 : 0);
            }
            r.push(new Qi(".morphTargetInfluence[" + d + "]", p, v));
          }
          a = u.length * s;
        } else {
          var y = ".bones[" + t[l].name + "]";
          n(
            Ki,
            y + ".position",
            c,
            "pos",
            r
          ), n(
            Ps,
            y + ".quaternion",
            c,
            "rot",
            r
          ), n(
            Ki,
            y + ".scale",
            c,
            "scl",
            r
          );
        }
    }
    if (r.length === 0)
      return null;
    var x = new Yt(i, a, r);
    return x;
  }
});
Object.assign(Yt.prototype, {
  resetDuration: function() {
    for (var e = this.tracks, t = 0, n = 0, r = e.length; n !== r; ++n) {
      var i = this.tracks[n];
      t = Math.max(t, i.times[i.times.length - 1]);
    }
    return this.duration = t, this;
  },
  trim: function() {
    for (var e = 0; e < this.tracks.length; e++)
      this.tracks[e].trim(0, this.duration);
    return this;
  },
  validate: function() {
    for (var e = !0, t = 0; t < this.tracks.length; t++)
      e = e && this.tracks[t].validate();
    return e;
  },
  optimize: function() {
    for (var e = 0; e < this.tracks.length; e++)
      this.tracks[e].optimize();
    return this;
  },
  clone: function() {
    for (var e = [], t = 0; t < this.tracks.length; t++)
      e.push(this.tracks[t].clone());
    return new Yt(this.name, this.duration, e);
  }
});
var oi = {
  enabled: !1,
  files: {},
  add: function(e, t) {
    this.enabled !== !1 && (this.files[e] = t);
  },
  get: function(e) {
    if (this.enabled !== !1)
      return this.files[e];
  },
  remove: function(e) {
    delete this.files[e];
  },
  clear: function() {
    this.files = {};
  }
};
function eh(e, t, n) {
  var r = this, i = !1, a = 0, s = 0, o = void 0, l = [];
  this.onStart = void 0, this.onLoad = e, this.onProgress = t, this.onError = n, this.itemStart = function(c) {
    s++, i === !1 && r.onStart !== void 0 && r.onStart(c, a, s), i = !0;
  }, this.itemEnd = function(c) {
    a++, r.onProgress !== void 0 && r.onProgress(c, a, s), a === s && (i = !1, r.onLoad !== void 0 && r.onLoad());
  }, this.itemError = function(c) {
    r.onError !== void 0 && r.onError(c);
  }, this.resolveURL = function(c) {
    return o ? o(c) : c;
  }, this.setURLModifier = function(c) {
    return o = c, this;
  }, this.addHandler = function(c, u) {
    return l.push(c, u), this;
  }, this.removeHandler = function(c) {
    var u = l.indexOf(c);
    return u !== -1 && l.splice(u, 2), this;
  }, this.getHandler = function(c) {
    for (var u = 0, h = l.length; u < h; u += 2) {
      var f = l[u], d = l[u + 1];
      if (f.global && (f.lastIndex = 0), f.test(c))
        return d;
    }
    return null;
  };
}
var Eg = new eh();
function Ve(e) {
  this.manager = e !== void 0 ? e : Eg, this.crossOrigin = "anonymous", this.path = "", this.resourcePath = "";
}
Object.assign(Ve.prototype, {
  load: function() {
  },
  parse: function() {
  },
  setCrossOrigin: function(e) {
    return this.crossOrigin = e, this;
  },
  setPath: function(e) {
    return this.path = e, this;
  },
  setResourcePath: function(e) {
    return this.resourcePath = e, this;
  }
});
var qt = {};
function an(e) {
  Ve.call(this, e);
}
an.prototype = Object.assign(Object.create(Ve.prototype), {
  constructor: an,
  load: function(e, t, n, r) {
    e === void 0 && (e = ""), this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
    var i = this, a = oi.get(e);
    if (a !== void 0)
      return i.manager.itemStart(e), setTimeout(function() {
        t && t(a), i.manager.itemEnd(e);
      }, 0), a;
    if (qt[e] !== void 0) {
      qt[e].push({
        onLoad: t,
        onProgress: n,
        onError: r
      });
      return;
    }
    var s = /^data:(.*?)(;base64)?,(.*)$/, o = e.match(s);
    if (o) {
      var l = o[1], c = !!o[2], u = o[3];
      u = decodeURIComponent(u), c && (u = atob(u));
      try {
        var h, f = (this.responseType || "").toLowerCase();
        switch (f) {
          case "arraybuffer":
          case "blob":
            for (var d = new Uint8Array(u.length), p = 0; p < u.length; p++)
              d[p] = u.charCodeAt(p);
            f === "blob" ? h = new Blob([d.buffer], { type: l }) : h = d.buffer;
            break;
          case "document":
            var v = new DOMParser();
            h = v.parseFromString(u, l);
            break;
          case "json":
            h = JSON.parse(u);
            break;
          default:
            h = u;
            break;
        }
        setTimeout(function() {
          t && t(h), i.manager.itemEnd(e);
        }, 0);
      } catch (x) {
        setTimeout(function() {
          r && r(x), i.manager.itemError(e), i.manager.itemEnd(e);
        }, 0);
      }
    } else {
      qt[e] = [], qt[e].push({
        onLoad: t,
        onProgress: n,
        onError: r
      });
      var m = new XMLHttpRequest();
      m.open("GET", e, !0), m.addEventListener("load", function(x) {
        var M = this.response, E = qt[e];
        if (delete qt[e], this.status === 200 || this.status === 0) {
          this.status === 0 && console.warn("THREE.FileLoader: HTTP Status 0 received."), oi.add(e, M);
          for (var w = 0, A = E.length; w < A; w++) {
            var C = E[w];
            C.onLoad && C.onLoad(M);
          }
          i.manager.itemEnd(e);
        } else {
          for (var w = 0, A = E.length; w < A; w++) {
            var C = E[w];
            C.onError && C.onError(x);
          }
          i.manager.itemError(e), i.manager.itemEnd(e);
        }
      }, !1), m.addEventListener("progress", function(x) {
        for (var M = qt[e], E = 0, w = M.length; E < w; E++) {
          var A = M[E];
          A.onProgress && A.onProgress(x);
        }
      }, !1), m.addEventListener("error", function(x) {
        var M = qt[e];
        delete qt[e];
        for (var E = 0, w = M.length; E < w; E++) {
          var A = M[E];
          A.onError && A.onError(x);
        }
        i.manager.itemError(e), i.manager.itemEnd(e);
      }, !1), m.addEventListener("abort", function(x) {
        var M = qt[e];
        delete qt[e];
        for (var E = 0, w = M.length; E < w; E++) {
          var A = M[E];
          A.onError && A.onError(x);
        }
        i.manager.itemError(e), i.manager.itemEnd(e);
      }, !1), this.responseType !== void 0 && (m.responseType = this.responseType), this.withCredentials !== void 0 && (m.withCredentials = this.withCredentials), m.overrideMimeType && m.overrideMimeType(this.mimeType !== void 0 ? this.mimeType : "text/plain");
      for (var y in this.requestHeader)
        m.setRequestHeader(y, this.requestHeader[y]);
      m.send(null);
    }
    return i.manager.itemStart(e), m;
  },
  setResponseType: function(e) {
    return this.responseType = e, this;
  },
  setWithCredentials: function(e) {
    return this.withCredentials = e, this;
  },
  setMimeType: function(e) {
    return this.mimeType = e, this;
  },
  setRequestHeader: function(e) {
    return this.requestHeader = e, this;
  }
});
function Uc(e) {
  Ve.call(this, e);
}
Uc.prototype = Object.assign(Object.create(Ve.prototype), {
  constructor: Uc,
  load: function(e, t, n, r) {
    var i = this, a = new an(i.manager);
    a.setPath(i.path), a.load(e, function(s) {
      t(i.parse(JSON.parse(s)));
    }, n, r);
  },
  parse: function(e) {
    for (var t = [], n = 0; n < e.length; n++) {
      var r = Yt.parse(e[n]);
      t.push(r);
    }
    return t;
  }
});
function Gc(e) {
  Ve.call(this, e);
}
Gc.prototype = Object.assign(Object.create(Ve.prototype), {
  constructor: Gc,
  load: function(e, t, n, r) {
    var i = this, a = [], s = new Bi();
    s.image = a;
    var o = new an(this.manager);
    o.setPath(this.path), o.setResponseType("arraybuffer");
    function l(f) {
      o.load(e[f], function(d) {
        var p = i.parse(d, !0);
        a[f] = {
          width: p.width,
          height: p.height,
          format: p.format,
          mipmaps: p.mipmaps
        }, c += 1, c === 6 && (p.mipmapCount === 1 && (s.minFilter = ft), s.format = p.format, s.needsUpdate = !0, t && t(s));
      }, n, r);
    }
    if (Array.isArray(e))
      for (var c = 0, u = 0, h = e.length; u < h; ++u)
        l(u);
    else
      o.load(e, function(f) {
        var d = i.parse(f, !0);
        if (d.isCubemap)
          for (var p = d.mipmaps.length / d.mipmapCount, v = 0; v < p; v++) {
            a[v] = { mipmaps: [] };
            for (var m = 0; m < d.mipmapCount; m++)
              a[v].mipmaps.push(d.mipmaps[v * d.mipmapCount + m]), a[v].format = d.format, a[v].width = d.width, a[v].height = d.height;
          }
        else
          s.image.width = d.width, s.image.height = d.height, s.mipmaps = d.mipmaps;
        d.mipmapCount === 1 && (s.minFilter = ft), s.format = d.format, s.needsUpdate = !0, t && t(s);
      }, n, r);
    return s;
  }
});
function Vc(e) {
  Ve.call(this, e);
}
Vc.prototype = Object.assign(Object.create(Ve.prototype), {
  constructor: Vc,
  load: function(e, t, n, r) {
    var i = this, a = new jr(), s = new an(this.manager);
    return s.setResponseType("arraybuffer"), s.setPath(this.path), s.load(e, function(o) {
      var l = i.parse(o);
      l && (l.image !== void 0 ? a.image = l.image : l.data !== void 0 && (a.image.width = l.width, a.image.height = l.height, a.image.data = l.data), a.wrapS = l.wrapS !== void 0 ? l.wrapS : Et, a.wrapT = l.wrapT !== void 0 ? l.wrapT : Et, a.magFilter = l.magFilter !== void 0 ? l.magFilter : ft, a.minFilter = l.minFilter !== void 0 ? l.minFilter : ft, a.anisotropy = l.anisotropy !== void 0 ? l.anisotropy : 1, l.format !== void 0 && (a.format = l.format), l.type !== void 0 && (a.type = l.type), l.mipmaps !== void 0 && (a.mipmaps = l.mipmaps, a.minFilter = Gs), l.mipmapCount === 1 && (a.minFilter = ft), a.needsUpdate = !0, t && t(a, l));
    }, n, r), a;
  }
});
function ea(e) {
  Ve.call(this, e);
}
ea.prototype = Object.assign(Object.create(Ve.prototype), {
  constructor: ea,
  load: function(e, t, n, r) {
    this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
    var i = this, a = oi.get(e);
    if (a !== void 0)
      return i.manager.itemStart(e), setTimeout(function() {
        t && t(a), i.manager.itemEnd(e);
      }, 0), a;
    var s = document.createElementNS("http://www.w3.org/1999/xhtml", "img");
    function o() {
      s.removeEventListener("load", o, !1), s.removeEventListener("error", l, !1), oi.add(e, this), t && t(this), i.manager.itemEnd(e);
    }
    function l(c) {
      s.removeEventListener("load", o, !1), s.removeEventListener("error", l, !1), r && r(c), i.manager.itemError(e), i.manager.itemEnd(e);
    }
    return s.addEventListener("load", o, !1), s.addEventListener("error", l, !1), e.substr(0, 5) !== "data:" && this.crossOrigin !== void 0 && (s.crossOrigin = this.crossOrigin), i.manager.itemStart(e), s.src = e, s;
  }
});
function $o(e) {
  Ve.call(this, e);
}
$o.prototype = Object.assign(Object.create(Ve.prototype), {
  constructor: $o,
  load: function(e, t, n, r) {
    var i = new zn(), a = new ea(this.manager);
    a.setCrossOrigin(this.crossOrigin), a.setPath(this.path);
    var s = 0;
    function o(c) {
      a.load(e[c], function(u) {
        i.images[c] = u, s++, s === 6 && (i.needsUpdate = !0, t && t(i));
      }, void 0, r);
    }
    for (var l = 0; l < e.length; ++l)
      o(l);
    return i;
  }
});
function Qo(e) {
  Ve.call(this, e);
}
Qo.prototype = Object.assign(Object.create(Ve.prototype), {
  constructor: Qo,
  load: function(e, t, n, r) {
    var i = new Ze(), a = new ea(this.manager);
    return a.setCrossOrigin(this.crossOrigin), a.setPath(this.path), a.load(e, function(s) {
      i.image = s;
      var o = e.search(/\.jpe?g($|\?)/i) > 0 || e.search(/^data\:image\/jpeg/) === 0;
      i.format = o ? ir : rn, i.needsUpdate = !0, t !== void 0 && t(i);
    }, n, r), i;
  }
});
function fe() {
  this.type = "Curve", this.arcLengthDivisions = 200;
}
Object.assign(fe.prototype, {
  // Virtual base class method to overwrite and implement in subclasses
  //	- t [0 .. 1]
  getPoint: function() {
    return console.warn("THREE.Curve: .getPoint() not implemented."), null;
  },
  // Get point at relative position in curve according to arc length
  // - u [0 .. 1]
  getPointAt: function(e, t) {
    var n = this.getUtoTmapping(e);
    return this.getPoint(n, t);
  },
  // Get sequence of points using getPoint( t )
  getPoints: function(e) {
    e === void 0 && (e = 5);
    for (var t = [], n = 0; n <= e; n++)
      t.push(this.getPoint(n / e));
    return t;
  },
  // Get sequence of points using getPointAt( u )
  getSpacedPoints: function(e) {
    e === void 0 && (e = 5);
    for (var t = [], n = 0; n <= e; n++)
      t.push(this.getPointAt(n / e));
    return t;
  },
  // Get total curve arc length
  getLength: function() {
    var e = this.getLengths();
    return e[e.length - 1];
  },
  // Get list of cumulative segment lengths
  getLengths: function(e) {
    if (e === void 0 && (e = this.arcLengthDivisions), this.cacheArcLengths && this.cacheArcLengths.length === e + 1 && !this.needsUpdate)
      return this.cacheArcLengths;
    this.needsUpdate = !1;
    var t = [], n, r = this.getPoint(0), i, a = 0;
    for (t.push(0), i = 1; i <= e; i++)
      n = this.getPoint(i / e), a += n.distanceTo(r), t.push(a), r = n;
    return this.cacheArcLengths = t, t;
  },
  updateArcLengths: function() {
    this.needsUpdate = !0, this.getLengths();
  },
  // Given u ( 0 .. 1 ), get a t to find p. This gives you points which are equidistant
  getUtoTmapping: function(e, t) {
    var n = this.getLengths(), r = 0, i = n.length, a;
    t ? a = t : a = e * n[i - 1];
    for (var s = 0, o = i - 1, l; s <= o; )
      if (r = Math.floor(s + (o - s) / 2), l = n[r] - a, l < 0)
        s = r + 1;
      else if (l > 0)
        o = r - 1;
      else {
        o = r;
        break;
      }
    if (r = o, n[r] === a)
      return r / (i - 1);
    var c = n[r], u = n[r + 1], h = u - c, f = (a - c) / h, d = (r + f) / (i - 1);
    return d;
  },
  // Returns a unit vector tangent at t
  // In case any sub curve does not implement its tangent derivation,
  // 2 points a small delta apart will be used to find its gradient
  // which seems to give a reasonable approximation
  getTangent: function(e) {
    var t = 1e-4, n = e - t, r = e + t;
    n < 0 && (n = 0), r > 1 && (r = 1);
    var i = this.getPoint(n), a = this.getPoint(r), s = a.clone().sub(i);
    return s.normalize();
  },
  getTangentAt: function(e) {
    var t = this.getUtoTmapping(e);
    return this.getTangent(t);
  },
  computeFrenetFrames: function(e, t) {
    var n = new b(), r = [], i = [], a = [], s = new b(), o = new Ce(), l, c, u;
    for (l = 0; l <= e; l++)
      c = l / e, r[l] = this.getTangentAt(c), r[l].normalize();
    i[0] = new b(), a[0] = new b();
    var h = Number.MAX_VALUE, f = Math.abs(r[0].x), d = Math.abs(r[0].y), p = Math.abs(r[0].z);
    for (f <= h && (h = f, n.set(1, 0, 0)), d <= h && (h = d, n.set(0, 1, 0)), p <= h && n.set(0, 0, 1), s.crossVectors(r[0], n).normalize(), i[0].crossVectors(r[0], s), a[0].crossVectors(r[0], i[0]), l = 1; l <= e; l++)
      i[l] = i[l - 1].clone(), a[l] = a[l - 1].clone(), s.crossVectors(r[l - 1], r[l]), s.length() > Number.EPSILON && (s.normalize(), u = Math.acos(Ae.clamp(r[l - 1].dot(r[l]), -1, 1)), i[l].applyMatrix4(o.makeRotationAxis(s, u))), a[l].crossVectors(r[l], i[l]);
    if (t === !0)
      for (u = Math.acos(Ae.clamp(i[0].dot(i[e]), -1, 1)), u /= e, r[0].dot(s.crossVectors(i[0], i[e])) > 0 && (u = -u), l = 1; l <= e; l++)
        i[l].applyMatrix4(o.makeRotationAxis(r[l], u * l)), a[l].crossVectors(r[l], i[l]);
    return {
      tangents: r,
      normals: i,
      binormals: a
    };
  },
  clone: function() {
    return new this.constructor().copy(this);
  },
  copy: function(e) {
    return this.arcLengthDivisions = e.arcLengthDivisions, this;
  },
  toJSON: function() {
    var e = {
      metadata: {
        version: 4.5,
        type: "Curve",
        generator: "Curve.toJSON"
      }
    };
    return e.arcLengthDivisions = this.arcLengthDivisions, e.type = this.type, e;
  },
  fromJSON: function(e) {
    return this.arcLengthDivisions = e.arcLengthDivisions, this;
  }
});
function Gt(e, t, n, r, i, a, s, o) {
  fe.call(this), this.type = "EllipseCurve", this.aX = e || 0, this.aY = t || 0, this.xRadius = n || 1, this.yRadius = r || 1, this.aStartAngle = i || 0, this.aEndAngle = a || 2 * Math.PI, this.aClockwise = s || !1, this.aRotation = o || 0;
}
Gt.prototype = Object.create(fe.prototype);
Gt.prototype.constructor = Gt;
Gt.prototype.isEllipseCurve = !0;
Gt.prototype.getPoint = function(e, t) {
  for (var n = t || new G(), r = Math.PI * 2, i = this.aEndAngle - this.aStartAngle, a = Math.abs(i) < Number.EPSILON; i < 0; ) i += r;
  for (; i > r; ) i -= r;
  i < Number.EPSILON && (a ? i = 0 : i = r), this.aClockwise === !0 && !a && (i === r ? i = -r : i = i - r);
  var s = this.aStartAngle + e * i, o = this.aX + this.xRadius * Math.cos(s), l = this.aY + this.yRadius * Math.sin(s);
  if (this.aRotation !== 0) {
    var c = Math.cos(this.aRotation), u = Math.sin(this.aRotation), h = o - this.aX, f = l - this.aY;
    o = h * c - f * u + this.aX, l = h * u + f * c + this.aY;
  }
  return n.set(o, l);
};
Gt.prototype.copy = function(e) {
  return fe.prototype.copy.call(this, e), this.aX = e.aX, this.aY = e.aY, this.xRadius = e.xRadius, this.yRadius = e.yRadius, this.aStartAngle = e.aStartAngle, this.aEndAngle = e.aEndAngle, this.aClockwise = e.aClockwise, this.aRotation = e.aRotation, this;
};
Gt.prototype.toJSON = function() {
  var e = fe.prototype.toJSON.call(this);
  return e.aX = this.aX, e.aY = this.aY, e.xRadius = this.xRadius, e.yRadius = this.yRadius, e.aStartAngle = this.aStartAngle, e.aEndAngle = this.aEndAngle, e.aClockwise = this.aClockwise, e.aRotation = this.aRotation, e;
};
Gt.prototype.fromJSON = function(e) {
  return fe.prototype.fromJSON.call(this, e), this.aX = e.aX, this.aY = e.aY, this.xRadius = e.xRadius, this.yRadius = e.yRadius, this.aStartAngle = e.aStartAngle, this.aEndAngle = e.aEndAngle, this.aClockwise = e.aClockwise, this.aRotation = e.aRotation, this;
};
function ta(e, t, n, r, i, a) {
  Gt.call(this, e, t, n, n, r, i, a), this.type = "ArcCurve";
}
ta.prototype = Object.create(Gt.prototype);
ta.prototype.constructor = ta;
ta.prototype.isArcCurve = !0;
function Pl() {
  var e = 0, t = 0, n = 0, r = 0;
  function i(a, s, o, l) {
    e = a, t = o, n = -3 * a + 3 * s - 2 * o - l, r = 2 * a - 2 * s + o + l;
  }
  return {
    initCatmullRom: function(a, s, o, l, c) {
      i(s, o, c * (o - a), c * (l - s));
    },
    initNonuniformCatmullRom: function(a, s, o, l, c, u, h) {
      var f = (s - a) / c - (o - a) / (c + u) + (o - s) / u, d = (o - s) / u - (l - s) / (u + h) + (l - o) / h;
      f *= u, d *= u, i(s, o, f, d);
    },
    calc: function(a) {
      var s = a * a, o = s * a;
      return e + t * a + n * s + r * o;
    }
  };
}
var Ha = new b(), go = new Pl(), yo = new Pl(), xo = new Pl();
function Ot(e, t, n, r) {
  fe.call(this), this.type = "CatmullRomCurve3", this.points = e || [], this.closed = t || !1, this.curveType = n || "centripetal", this.tension = r || 0.5;
}
Ot.prototype = Object.create(fe.prototype);
Ot.prototype.constructor = Ot;
Ot.prototype.isCatmullRomCurve3 = !0;
Ot.prototype.getPoint = function(e, t) {
  var n = t || new b(), r = this.points, i = r.length, a = (i - (this.closed ? 0 : 1)) * e, s = Math.floor(a), o = a - s;
  this.closed ? s += s > 0 ? 0 : (Math.floor(Math.abs(s) / i) + 1) * i : o === 0 && s === i - 1 && (s = i - 2, o = 1);
  var l, c, u, h;
  if (this.closed || s > 0 ? l = r[(s - 1) % i] : (Ha.subVectors(r[0], r[1]).add(r[0]), l = Ha), c = r[s % i], u = r[(s + 1) % i], this.closed || s + 2 < i ? h = r[(s + 2) % i] : (Ha.subVectors(r[i - 1], r[i - 2]).add(r[i - 1]), h = Ha), this.curveType === "centripetal" || this.curveType === "chordal") {
    var f = this.curveType === "chordal" ? 0.5 : 0.25, d = Math.pow(l.distanceToSquared(c), f), p = Math.pow(c.distanceToSquared(u), f), v = Math.pow(u.distanceToSquared(h), f);
    p < 1e-4 && (p = 1), d < 1e-4 && (d = p), v < 1e-4 && (v = p), go.initNonuniformCatmullRom(l.x, c.x, u.x, h.x, d, p, v), yo.initNonuniformCatmullRom(l.y, c.y, u.y, h.y, d, p, v), xo.initNonuniformCatmullRom(l.z, c.z, u.z, h.z, d, p, v);
  } else this.curveType === "catmullrom" && (go.initCatmullRom(l.x, c.x, u.x, h.x, this.tension), yo.initCatmullRom(l.y, c.y, u.y, h.y, this.tension), xo.initCatmullRom(l.z, c.z, u.z, h.z, this.tension));
  return n.set(
    go.calc(o),
    yo.calc(o),
    xo.calc(o)
  ), n;
};
Ot.prototype.copy = function(e) {
  fe.prototype.copy.call(this, e), this.points = [];
  for (var t = 0, n = e.points.length; t < n; t++) {
    var r = e.points[t];
    this.points.push(r.clone());
  }
  return this.closed = e.closed, this.curveType = e.curveType, this.tension = e.tension, this;
};
Ot.prototype.toJSON = function() {
  var e = fe.prototype.toJSON.call(this);
  e.points = [];
  for (var t = 0, n = this.points.length; t < n; t++) {
    var r = this.points[t];
    e.points.push(r.toArray());
  }
  return e.closed = this.closed, e.curveType = this.curveType, e.tension = this.tension, e;
};
Ot.prototype.fromJSON = function(e) {
  fe.prototype.fromJSON.call(this, e), this.points = [];
  for (var t = 0, n = e.points.length; t < n; t++) {
    var r = e.points[t];
    this.points.push(new b().fromArray(r));
  }
  return this.closed = e.closed, this.curveType = e.curveType, this.tension = e.tension, this;
};
function Hc(e, t, n, r, i) {
  var a = (r - t) * 0.5, s = (i - n) * 0.5, o = e * e, l = e * o;
  return (2 * n - 2 * r + a + s) * l + (-3 * n + 3 * r - 2 * a - s) * o + a * e + n;
}
function Sg(e, t) {
  var n = 1 - e;
  return n * n * t;
}
function Tg(e, t) {
  return 2 * (1 - e) * e * t;
}
function Ag(e, t) {
  return e * e * t;
}
function Ti(e, t, n, r) {
  return Sg(e, t) + Tg(e, n) + Ag(e, r);
}
function Lg(e, t) {
  var n = 1 - e;
  return n * n * n * t;
}
function Cg(e, t) {
  var n = 1 - e;
  return 3 * n * n * e * t;
}
function Rg(e, t) {
  return 3 * (1 - e) * e * e * t;
}
function Pg(e, t) {
  return e * e * e * t;
}
function Ai(e, t, n, r, i) {
  return Lg(e, t) + Cg(e, n) + Rg(e, r) + Pg(e, i);
}
function sn(e, t, n, r) {
  fe.call(this), this.type = "CubicBezierCurve", this.v0 = e || new G(), this.v1 = t || new G(), this.v2 = n || new G(), this.v3 = r || new G();
}
sn.prototype = Object.create(fe.prototype);
sn.prototype.constructor = sn;
sn.prototype.isCubicBezierCurve = !0;
sn.prototype.getPoint = function(e, t) {
  var n = t || new G(), r = this.v0, i = this.v1, a = this.v2, s = this.v3;
  return n.set(
    Ai(e, r.x, i.x, a.x, s.x),
    Ai(e, r.y, i.y, a.y, s.y)
  ), n;
};
sn.prototype.copy = function(e) {
  return fe.prototype.copy.call(this, e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this.v3.copy(e.v3), this;
};
sn.prototype.toJSON = function() {
  var e = fe.prototype.toJSON.call(this);
  return e.v0 = this.v0.toArray(), e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e.v3 = this.v3.toArray(), e;
};
sn.prototype.fromJSON = function(e) {
  return fe.prototype.fromJSON.call(this, e), this.v0.fromArray(e.v0), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this.v3.fromArray(e.v3), this;
};
function wn(e, t, n, r) {
  fe.call(this), this.type = "CubicBezierCurve3", this.v0 = e || new b(), this.v1 = t || new b(), this.v2 = n || new b(), this.v3 = r || new b();
}
wn.prototype = Object.create(fe.prototype);
wn.prototype.constructor = wn;
wn.prototype.isCubicBezierCurve3 = !0;
wn.prototype.getPoint = function(e, t) {
  var n = t || new b(), r = this.v0, i = this.v1, a = this.v2, s = this.v3;
  return n.set(
    Ai(e, r.x, i.x, a.x, s.x),
    Ai(e, r.y, i.y, a.y, s.y),
    Ai(e, r.z, i.z, a.z, s.z)
  ), n;
};
wn.prototype.copy = function(e) {
  return fe.prototype.copy.call(this, e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this.v3.copy(e.v3), this;
};
wn.prototype.toJSON = function() {
  var e = fe.prototype.toJSON.call(this);
  return e.v0 = this.v0.toArray(), e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e.v3 = this.v3.toArray(), e;
};
wn.prototype.fromJSON = function(e) {
  return fe.prototype.fromJSON.call(this, e), this.v0.fromArray(e.v0), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this.v3.fromArray(e.v3), this;
};
function Nt(e, t) {
  fe.call(this), this.type = "LineCurve", this.v1 = e || new G(), this.v2 = t || new G();
}
Nt.prototype = Object.create(fe.prototype);
Nt.prototype.constructor = Nt;
Nt.prototype.isLineCurve = !0;
Nt.prototype.getPoint = function(e, t) {
  var n = t || new G();
  return e === 1 ? n.copy(this.v2) : (n.copy(this.v2).sub(this.v1), n.multiplyScalar(e).add(this.v1)), n;
};
Nt.prototype.getPointAt = function(e, t) {
  return this.getPoint(e, t);
};
Nt.prototype.getTangent = function() {
  var e = this.v2.clone().sub(this.v1);
  return e.normalize();
};
Nt.prototype.copy = function(e) {
  return fe.prototype.copy.call(this, e), this.v1.copy(e.v1), this.v2.copy(e.v2), this;
};
Nt.prototype.toJSON = function() {
  var e = fe.prototype.toJSON.call(this);
  return e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e;
};
Nt.prototype.fromJSON = function(e) {
  return fe.prototype.fromJSON.call(this, e), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this;
};
function on(e, t) {
  fe.call(this), this.type = "LineCurve3", this.v1 = e || new b(), this.v2 = t || new b();
}
on.prototype = Object.create(fe.prototype);
on.prototype.constructor = on;
on.prototype.isLineCurve3 = !0;
on.prototype.getPoint = function(e, t) {
  var n = t || new b();
  return e === 1 ? n.copy(this.v2) : (n.copy(this.v2).sub(this.v1), n.multiplyScalar(e).add(this.v1)), n;
};
on.prototype.getPointAt = function(e, t) {
  return this.getPoint(e, t);
};
on.prototype.copy = function(e) {
  return fe.prototype.copy.call(this, e), this.v1.copy(e.v1), this.v2.copy(e.v2), this;
};
on.prototype.toJSON = function() {
  var e = fe.prototype.toJSON.call(this);
  return e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e;
};
on.prototype.fromJSON = function(e) {
  return fe.prototype.fromJSON.call(this, e), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this;
};
function ln(e, t, n) {
  fe.call(this), this.type = "QuadraticBezierCurve", this.v0 = e || new G(), this.v1 = t || new G(), this.v2 = n || new G();
}
ln.prototype = Object.create(fe.prototype);
ln.prototype.constructor = ln;
ln.prototype.isQuadraticBezierCurve = !0;
ln.prototype.getPoint = function(e, t) {
  var n = t || new G(), r = this.v0, i = this.v1, a = this.v2;
  return n.set(
    Ti(e, r.x, i.x, a.x),
    Ti(e, r.y, i.y, a.y)
  ), n;
};
ln.prototype.copy = function(e) {
  return fe.prototype.copy.call(this, e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this;
};
ln.prototype.toJSON = function() {
  var e = fe.prototype.toJSON.call(this);
  return e.v0 = this.v0.toArray(), e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e;
};
ln.prototype.fromJSON = function(e) {
  return fe.prototype.fromJSON.call(this, e), this.v0.fromArray(e.v0), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this;
};
function Mn(e, t, n) {
  fe.call(this), this.type = "QuadraticBezierCurve3", this.v0 = e || new b(), this.v1 = t || new b(), this.v2 = n || new b();
}
Mn.prototype = Object.create(fe.prototype);
Mn.prototype.constructor = Mn;
Mn.prototype.isQuadraticBezierCurve3 = !0;
Mn.prototype.getPoint = function(e, t) {
  var n = t || new b(), r = this.v0, i = this.v1, a = this.v2;
  return n.set(
    Ti(e, r.x, i.x, a.x),
    Ti(e, r.y, i.y, a.y),
    Ti(e, r.z, i.z, a.z)
  ), n;
};
Mn.prototype.copy = function(e) {
  return fe.prototype.copy.call(this, e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this;
};
Mn.prototype.toJSON = function() {
  var e = fe.prototype.toJSON.call(this);
  return e.v0 = this.v0.toArray(), e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e;
};
Mn.prototype.fromJSON = function(e) {
  return fe.prototype.fromJSON.call(this, e), this.v0.fromArray(e.v0), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this;
};
function cn(e) {
  fe.call(this), this.type = "SplineCurve", this.points = e || [];
}
cn.prototype = Object.create(fe.prototype);
cn.prototype.constructor = cn;
cn.prototype.isSplineCurve = !0;
cn.prototype.getPoint = function(e, t) {
  var n = t || new G(), r = this.points, i = (r.length - 1) * e, a = Math.floor(i), s = i - a, o = r[a === 0 ? a : a - 1], l = r[a], c = r[a > r.length - 2 ? r.length - 1 : a + 1], u = r[a > r.length - 3 ? r.length - 1 : a + 2];
  return n.set(
    Hc(s, o.x, l.x, c.x, u.x),
    Hc(s, o.y, l.y, c.y, u.y)
  ), n;
};
cn.prototype.copy = function(e) {
  fe.prototype.copy.call(this, e), this.points = [];
  for (var t = 0, n = e.points.length; t < n; t++) {
    var r = e.points[t];
    this.points.push(r.clone());
  }
  return this;
};
cn.prototype.toJSON = function() {
  var e = fe.prototype.toJSON.call(this);
  e.points = [];
  for (var t = 0, n = this.points.length; t < n; t++) {
    var r = this.points[t];
    e.points.push(r.toArray());
  }
  return e;
};
cn.prototype.fromJSON = function(e) {
  fe.prototype.fromJSON.call(this, e), this.points = [];
  for (var t = 0, n = e.points.length; t < n; t++) {
    var r = e.points[t];
    this.points.push(new G().fromArray(r));
  }
  return this;
};
var Ko = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ArcCurve: ta,
  CatmullRomCurve3: Ot,
  CubicBezierCurve: sn,
  CubicBezierCurve3: wn,
  EllipseCurve: Gt,
  LineCurve: Nt,
  LineCurve3: on,
  QuadraticBezierCurve: ln,
  QuadraticBezierCurve3: Mn,
  SplineCurve: cn
});
function Dn() {
  fe.call(this), this.type = "CurvePath", this.curves = [], this.autoClose = !1;
}
Dn.prototype = Object.assign(Object.create(fe.prototype), {
  constructor: Dn,
  add: function(e) {
    this.curves.push(e);
  },
  closePath: function() {
    var e = this.curves[0].getPoint(0), t = this.curves[this.curves.length - 1].getPoint(1);
    e.equals(t) || this.curves.push(new Nt(t, e));
  },
  // To get accurate point with reference to
  // entire path distance at time t,
  // following has to be done:
  // 1. Length of each sub path have to be known
  // 2. Locate and identify type of curve
  // 3. Get t for the curve
  // 4. Return curve.getPointAt(t')
  getPoint: function(e) {
    for (var t = e * this.getLength(), n = this.getCurveLengths(), r = 0; r < n.length; ) {
      if (n[r] >= t) {
        var i = n[r] - t, a = this.curves[r], s = a.getLength(), o = s === 0 ? 0 : 1 - i / s;
        return a.getPointAt(o);
      }
      r++;
    }
    return null;
  },
  // We cannot use the default THREE.Curve getPoint() with getLength() because in
  // THREE.Curve, getLength() depends on getPoint() but in THREE.CurvePath
  // getPoint() depends on getLength
  getLength: function() {
    var e = this.getCurveLengths();
    return e[e.length - 1];
  },
  // cacheLengths must be recalculated.
  updateArcLengths: function() {
    this.needsUpdate = !0, this.cacheLengths = null, this.getCurveLengths();
  },
  // Compute lengths and cache them
  // We cannot overwrite getLengths() because UtoT mapping uses it.
  getCurveLengths: function() {
    if (this.cacheLengths && this.cacheLengths.length === this.curves.length)
      return this.cacheLengths;
    for (var e = [], t = 0, n = 0, r = this.curves.length; n < r; n++)
      t += this.curves[n].getLength(), e.push(t);
    return this.cacheLengths = e, e;
  },
  getSpacedPoints: function(e) {
    e === void 0 && (e = 40);
    for (var t = [], n = 0; n <= e; n++)
      t.push(this.getPoint(n / e));
    return this.autoClose && t.push(t[0]), t;
  },
  getPoints: function(e) {
    e = e || 12;
    for (var t = [], n, r = 0, i = this.curves; r < i.length; r++)
      for (var a = i[r], s = a && a.isEllipseCurve ? e * 2 : a && (a.isLineCurve || a.isLineCurve3) ? 1 : a && a.isSplineCurve ? e * a.points.length : e, o = a.getPoints(s), l = 0; l < o.length; l++) {
        var c = o[l];
        n && n.equals(c) || (t.push(c), n = c);
      }
    return this.autoClose && t.length > 1 && !t[t.length - 1].equals(t[0]) && t.push(t[0]), t;
  },
  copy: function(e) {
    fe.prototype.copy.call(this, e), this.curves = [];
    for (var t = 0, n = e.curves.length; t < n; t++) {
      var r = e.curves[t];
      this.curves.push(r.clone());
    }
    return this.autoClose = e.autoClose, this;
  },
  toJSON: function() {
    var e = fe.prototype.toJSON.call(this);
    e.autoClose = this.autoClose, e.curves = [];
    for (var t = 0, n = this.curves.length; t < n; t++) {
      var r = this.curves[t];
      e.curves.push(r.toJSON());
    }
    return e;
  },
  fromJSON: function(e) {
    fe.prototype.fromJSON.call(this, e), this.autoClose = e.autoClose, this.curves = [];
    for (var t = 0, n = e.curves.length; t < n; t++) {
      var r = e.curves[t];
      this.curves.push(new Ko[r.type]().fromJSON(r));
    }
    return this;
  }
});
function en(e) {
  Dn.call(this), this.type = "Path", this.currentPoint = new G(), e && this.setFromPoints(e);
}
en.prototype = Object.assign(Object.create(Dn.prototype), {
  constructor: en,
  setFromPoints: function(e) {
    this.moveTo(e[0].x, e[0].y);
    for (var t = 1, n = e.length; t < n; t++)
      this.lineTo(e[t].x, e[t].y);
    return this;
  },
  moveTo: function(e, t) {
    return this.currentPoint.set(e, t), this;
  },
  lineTo: function(e, t) {
    var n = new Nt(this.currentPoint.clone(), new G(e, t));
    return this.curves.push(n), this.currentPoint.set(e, t), this;
  },
  quadraticCurveTo: function(e, t, n, r) {
    var i = new ln(
      this.currentPoint.clone(),
      new G(e, t),
      new G(n, r)
    );
    return this.curves.push(i), this.currentPoint.set(n, r), this;
  },
  bezierCurveTo: function(e, t, n, r, i, a) {
    var s = new sn(
      this.currentPoint.clone(),
      new G(e, t),
      new G(n, r),
      new G(i, a)
    );
    return this.curves.push(s), this.currentPoint.set(i, a), this;
  },
  splineThru: function(e) {
    var t = [this.currentPoint.clone()].concat(e), n = new cn(t);
    return this.curves.push(n), this.currentPoint.copy(e[e.length - 1]), this;
  },
  arc: function(e, t, n, r, i, a) {
    var s = this.currentPoint.x, o = this.currentPoint.y;
    return this.absarc(
      e + s,
      t + o,
      n,
      r,
      i,
      a
    ), this;
  },
  absarc: function(e, t, n, r, i, a) {
    return this.absellipse(e, t, n, n, r, i, a), this;
  },
  ellipse: function(e, t, n, r, i, a, s, o) {
    var l = this.currentPoint.x, c = this.currentPoint.y;
    return this.absellipse(e + l, t + c, n, r, i, a, s, o), this;
  },
  absellipse: function(e, t, n, r, i, a, s, o) {
    var l = new Gt(e, t, n, r, i, a, s, o);
    if (this.curves.length > 0) {
      var c = l.getPoint(0);
      c.equals(this.currentPoint) || this.lineTo(c.x, c.y);
    }
    this.curves.push(l);
    var u = l.getPoint(1);
    return this.currentPoint.copy(u), this;
  },
  copy: function(e) {
    return Dn.prototype.copy.call(this, e), this.currentPoint.copy(e.currentPoint), this;
  },
  toJSON: function() {
    var e = Dn.prototype.toJSON.call(this);
    return e.currentPoint = this.currentPoint.toArray(), e;
  },
  fromJSON: function(e) {
    return Dn.prototype.fromJSON.call(this, e), this.currentPoint.fromArray(e.currentPoint), this;
  }
});
function rr(e) {
  en.call(this, e), this.uuid = Ae.generateUUID(), this.type = "Shape", this.holes = [];
}
rr.prototype = Object.assign(Object.create(en.prototype), {
  constructor: rr,
  getPointsHoles: function(e) {
    for (var t = [], n = 0, r = this.holes.length; n < r; n++)
      t[n] = this.holes[n].getPoints(e);
    return t;
  },
  // get points of shape and holes (keypoints based on segments parameter)
  extractPoints: function(e) {
    return {
      shape: this.getPoints(e),
      holes: this.getPointsHoles(e)
    };
  },
  copy: function(e) {
    en.prototype.copy.call(this, e), this.holes = [];
    for (var t = 0, n = e.holes.length; t < n; t++) {
      var r = e.holes[t];
      this.holes.push(r.clone());
    }
    return this;
  },
  toJSON: function() {
    var e = en.prototype.toJSON.call(this);
    e.uuid = this.uuid, e.holes = [];
    for (var t = 0, n = this.holes.length; t < n; t++) {
      var r = this.holes[t];
      e.holes.push(r.toJSON());
    }
    return e;
  },
  fromJSON: function(e) {
    en.prototype.fromJSON.call(this, e), this.uuid = e.uuid, this.holes = [];
    for (var t = 0, n = e.holes.length; t < n; t++) {
      var r = e.holes[t];
      this.holes.push(new en().fromJSON(r));
    }
    return this;
  }
});
function $e(e, t) {
  K.call(this), this.type = "Light", this.color = new ee(e), this.intensity = t !== void 0 ? t : 1, this.receiveShadow = void 0;
}
$e.prototype = Object.assign(Object.create(K.prototype), {
  constructor: $e,
  isLight: !0,
  copy: function(e) {
    return K.prototype.copy.call(this, e), this.color.copy(e.color), this.intensity = e.intensity, this;
  },
  toJSON: function(e) {
    var t = K.prototype.toJSON.call(this, e);
    return t.object.color = this.color.getHex(), t.object.intensity = this.intensity, this.groundColor !== void 0 && (t.object.groundColor = this.groundColor.getHex()), this.distance !== void 0 && (t.object.distance = this.distance), this.angle !== void 0 && (t.object.angle = this.angle), this.decay !== void 0 && (t.object.decay = this.decay), this.penumbra !== void 0 && (t.object.penumbra = this.penumbra), this.shadow !== void 0 && (t.object.shadow = this.shadow.toJSON()), t;
  }
});
function el(e, t, n) {
  $e.call(this, e, n), this.type = "HemisphereLight", this.castShadow = void 0, this.position.copy(K.DefaultUp), this.updateMatrix(), this.groundColor = new ee(t);
}
el.prototype = Object.assign(Object.create($e.prototype), {
  constructor: el,
  isHemisphereLight: !0,
  copy: function(e) {
    return $e.prototype.copy.call(this, e), this.groundColor.copy(e.groundColor), this;
  }
});
function bn(e) {
  this.camera = e, this.bias = 0, this.radius = 1, this.mapSize = new G(512, 512), this.map = null, this.mapPass = null, this.matrix = new Ce(), this._frustum = new da(), this._frameExtents = new G(1, 1), this._viewportCount = 1, this._viewports = [
    new Ye(0, 0, 1, 1)
  ];
}
Object.assign(bn.prototype, {
  _projScreenMatrix: new Ce(),
  _lightPositionWorld: new b(),
  _lookTarget: new b(),
  getViewportCount: function() {
    return this._viewportCount;
  },
  getFrustum: function() {
    return this._frustum;
  },
  updateMatrices: function(e) {
    var t = this.camera, n = this.matrix, r = this._projScreenMatrix, i = this._lookTarget, a = this._lightPositionWorld;
    a.setFromMatrixPosition(e.matrixWorld), t.position.copy(a), i.setFromMatrixPosition(e.target.matrixWorld), t.lookAt(i), t.updateMatrixWorld(), r.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse), this._frustum.setFromProjectionMatrix(r), n.set(
      0.5,
      0,
      0,
      0.5,
      0,
      0.5,
      0,
      0.5,
      0,
      0,
      0.5,
      0.5,
      0,
      0,
      0,
      1
    ), n.multiply(t.projectionMatrix), n.multiply(t.matrixWorldInverse);
  },
  getViewport: function(e) {
    return this._viewports[e];
  },
  getFrameExtents: function() {
    return this._frameExtents;
  },
  copy: function(e) {
    return this.camera = e.camera.clone(), this.bias = e.bias, this.radius = e.radius, this.mapSize.copy(e.mapSize), this;
  },
  clone: function() {
    return new this.constructor().copy(this);
  },
  toJSON: function() {
    var e = {};
    return this.bias !== 0 && (e.bias = this.bias), this.radius !== 1 && (e.radius = this.radius), (this.mapSize.x !== 512 || this.mapSize.y !== 512) && (e.mapSize = this.mapSize.toArray()), e.camera = this.camera.toJSON(!1).object, delete e.camera.matrix, e;
  }
});
function tl() {
  bn.call(this, new ut(50, 1, 0.5, 500));
}
tl.prototype = Object.assign(Object.create(bn.prototype), {
  constructor: tl,
  isSpotLightShadow: !0,
  updateMatrices: function(e) {
    var t = this.camera, n = Ae.RAD2DEG * 2 * e.angle, r = this.mapSize.width / this.mapSize.height, i = e.distance || t.far;
    (n !== t.fov || r !== t.aspect || i !== t.far) && (t.fov = n, t.aspect = r, t.far = i, t.updateProjectionMatrix()), bn.prototype.updateMatrices.call(this, e);
  }
});
function nl(e, t, n, r, i, a) {
  $e.call(this, e, t), this.type = "SpotLight", this.position.copy(K.DefaultUp), this.updateMatrix(), this.target = new K(), Object.defineProperty(this, "power", {
    get: function() {
      return this.intensity * Math.PI;
    },
    set: function(s) {
      this.intensity = s / Math.PI;
    }
  }), this.distance = n !== void 0 ? n : 0, this.angle = r !== void 0 ? r : Math.PI / 3, this.penumbra = i !== void 0 ? i : 0, this.decay = a !== void 0 ? a : 1, this.shadow = new tl();
}
nl.prototype = Object.assign(Object.create($e.prototype), {
  constructor: nl,
  isSpotLight: !0,
  copy: function(e) {
    return $e.prototype.copy.call(this, e), this.distance = e.distance, this.angle = e.angle, this.penumbra = e.penumbra, this.decay = e.decay, this.target = e.target.clone(), this.shadow = e.shadow.clone(), this;
  }
});
function rl() {
  bn.call(this, new ut(90, 1, 0.5, 500)), this._frameExtents = new G(4, 2), this._viewportCount = 6, this._viewports = [
    // These viewports map a cube-map onto a 2D texture with the
    // following orientation:
    //
    //  xzXZ
    //   y Y
    //
    // X - Positive x direction
    // x - Negative x direction
    // Y - Positive y direction
    // y - Negative y direction
    // Z - Positive z direction
    // z - Negative z direction
    // positive X
    new Ye(2, 1, 1, 1),
    // negative X
    new Ye(0, 1, 1, 1),
    // positive Z
    new Ye(3, 1, 1, 1),
    // negative Z
    new Ye(1, 1, 1, 1),
    // positive Y
    new Ye(3, 0, 1, 1),
    // negative Y
    new Ye(1, 0, 1, 1)
  ], this._cubeDirections = [
    new b(1, 0, 0),
    new b(-1, 0, 0),
    new b(0, 0, 1),
    new b(0, 0, -1),
    new b(0, 1, 0),
    new b(0, -1, 0)
  ], this._cubeUps = [
    new b(0, 1, 0),
    new b(0, 1, 0),
    new b(0, 1, 0),
    new b(0, 1, 0),
    new b(0, 0, 1),
    new b(0, 0, -1)
  ];
}
rl.prototype = Object.assign(Object.create(bn.prototype), {
  constructor: rl,
  isPointLightShadow: !0,
  updateMatrices: function(e, t) {
    t === void 0 && (t = 0);
    var n = this.camera, r = this.matrix, i = this._lightPositionWorld, a = this._lookTarget, s = this._projScreenMatrix;
    i.setFromMatrixPosition(e.matrixWorld), n.position.copy(i), a.copy(n.position), a.add(this._cubeDirections[t]), n.up.copy(this._cubeUps[t]), n.lookAt(a), n.updateMatrixWorld(), r.makeTranslation(-i.x, -i.y, -i.z), s.multiplyMatrices(n.projectionMatrix, n.matrixWorldInverse), this._frustum.setFromProjectionMatrix(s);
  }
});
function il(e, t, n, r) {
  $e.call(this, e, t), this.type = "PointLight", Object.defineProperty(this, "power", {
    get: function() {
      return this.intensity * 4 * Math.PI;
    },
    set: function(i) {
      this.intensity = i / (4 * Math.PI);
    }
  }), this.distance = n !== void 0 ? n : 0, this.decay = r !== void 0 ? r : 1, this.shadow = new rl();
}
il.prototype = Object.assign(Object.create($e.prototype), {
  constructor: il,
  isPointLight: !0,
  copy: function(e) {
    return $e.prototype.copy.call(this, e), this.distance = e.distance, this.decay = e.decay, this.shadow = e.shadow.clone(), this;
  }
});
function na(e, t, n, r, i, a) {
  yn.call(this), this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = e !== void 0 ? e : -1, this.right = t !== void 0 ? t : 1, this.top = n !== void 0 ? n : 1, this.bottom = r !== void 0 ? r : -1, this.near = i !== void 0 ? i : 0.1, this.far = a !== void 0 ? a : 2e3, this.updateProjectionMatrix();
}
na.prototype = Object.assign(Object.create(yn.prototype), {
  constructor: na,
  isOrthographicCamera: !0,
  copy: function(e, t) {
    return yn.prototype.copy.call(this, e, t), this.left = e.left, this.right = e.right, this.top = e.top, this.bottom = e.bottom, this.near = e.near, this.far = e.far, this.zoom = e.zoom, this.view = e.view === null ? null : Object.assign({}, e.view), this;
  },
  setViewOffset: function(e, t, n, r, i, a) {
    this.view === null && (this.view = {
      enabled: !0,
      fullWidth: 1,
      fullHeight: 1,
      offsetX: 0,
      offsetY: 0,
      width: 1,
      height: 1
    }), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = r, this.view.width = i, this.view.height = a, this.updateProjectionMatrix();
  },
  clearViewOffset: function() {
    this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
  },
  updateProjectionMatrix: function() {
    var e = (this.right - this.left) / (2 * this.zoom), t = (this.top - this.bottom) / (2 * this.zoom), n = (this.right + this.left) / 2, r = (this.top + this.bottom) / 2, i = n - e, a = n + e, s = r + t, o = r - t;
    if (this.view !== null && this.view.enabled) {
      var l = (this.right - this.left) / this.view.fullWidth / this.zoom, c = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
      i += l * this.view.offsetX, a = i + l * this.view.width, s -= c * this.view.offsetY, o = s - c * this.view.height;
    }
    this.projectionMatrix.makeOrthographic(i, a, s, o, this.near, this.far), this.projectionMatrixInverse.getInverse(this.projectionMatrix);
  },
  toJSON: function(e) {
    var t = K.prototype.toJSON.call(this, e);
    return t.object.zoom = this.zoom, t.object.left = this.left, t.object.right = this.right, t.object.top = this.top, t.object.bottom = this.bottom, t.object.near = this.near, t.object.far = this.far, this.view !== null && (t.object.view = Object.assign({}, this.view)), t;
  }
});
function al() {
  bn.call(this, new na(-5, 5, 5, -5, 0.5, 500));
}
al.prototype = Object.assign(Object.create(bn.prototype), {
  constructor: al,
  isDirectionalLightShadow: !0,
  updateMatrices: function(e) {
    bn.prototype.updateMatrices.call(this, e);
  }
});
function sl(e, t) {
  $e.call(this, e, t), this.type = "DirectionalLight", this.position.copy(K.DefaultUp), this.updateMatrix(), this.target = new K(), this.shadow = new al();
}
sl.prototype = Object.assign(Object.create($e.prototype), {
  constructor: sl,
  isDirectionalLight: !0,
  copy: function(e) {
    return $e.prototype.copy.call(this, e), this.target = e.target.clone(), this.shadow = e.shadow.clone(), this;
  }
});
function ol(e, t) {
  $e.call(this, e, t), this.type = "AmbientLight", this.castShadow = void 0;
}
ol.prototype = Object.assign(Object.create($e.prototype), {
  constructor: ol,
  isAmbientLight: !0
});
function ll(e, t, n, r) {
  $e.call(this, e, t), this.type = "RectAreaLight", this.width = n !== void 0 ? n : 10, this.height = r !== void 0 ? r : 10;
}
ll.prototype = Object.assign(Object.create($e.prototype), {
  constructor: ll,
  isRectAreaLight: !0,
  copy: function(e) {
    return $e.prototype.copy.call(this, e), this.width = e.width, this.height = e.height, this;
  },
  toJSON: function(e) {
    var t = $e.prototype.toJSON.call(this, e);
    return t.object.width = this.width, t.object.height = this.height, t;
  }
});
function cl(e) {
  Ve.call(this, e), this.textures = {};
}
cl.prototype = Object.assign(Object.create(Ve.prototype), {
  constructor: cl,
  load: function(e, t, n, r) {
    var i = this, a = new an(i.manager);
    a.setPath(i.path), a.load(e, function(s) {
      t(i.parse(JSON.parse(s)));
    }, n, r);
  },
  parse: function(e) {
    var t = this.textures;
    function n(l) {
      return t[l] === void 0 && console.warn("THREE.MaterialLoader: Undefined texture", l), t[l];
    }
    var r = new wg[e.type]();
    if (e.uuid !== void 0 && (r.uuid = e.uuid), e.name !== void 0 && (r.name = e.name), e.color !== void 0 && r.color.setHex(e.color), e.roughness !== void 0 && (r.roughness = e.roughness), e.metalness !== void 0 && (r.metalness = e.metalness), e.sheen !== void 0 && (r.sheen = new ee().setHex(e.sheen)), e.emissive !== void 0 && r.emissive.setHex(e.emissive), e.specular !== void 0 && r.specular.setHex(e.specular), e.shininess !== void 0 && (r.shininess = e.shininess), e.clearcoat !== void 0 && (r.clearcoat = e.clearcoat), e.clearcoatRoughness !== void 0 && (r.clearcoatRoughness = e.clearcoatRoughness), e.vertexColors !== void 0 && (r.vertexColors = e.vertexColors), e.fog !== void 0 && (r.fog = e.fog), e.flatShading !== void 0 && (r.flatShading = e.flatShading), e.blending !== void 0 && (r.blending = e.blending), e.combine !== void 0 && (r.combine = e.combine), e.side !== void 0 && (r.side = e.side), e.opacity !== void 0 && (r.opacity = e.opacity), e.transparent !== void 0 && (r.transparent = e.transparent), e.alphaTest !== void 0 && (r.alphaTest = e.alphaTest), e.depthTest !== void 0 && (r.depthTest = e.depthTest), e.depthWrite !== void 0 && (r.depthWrite = e.depthWrite), e.colorWrite !== void 0 && (r.colorWrite = e.colorWrite), e.stencilWrite !== void 0 && (r.stencilWrite = e.stencilWrite), e.stencilWriteMask !== void 0 && (r.stencilWriteMask = e.stencilWriteMask), e.stencilFunc !== void 0 && (r.stencilFunc = e.stencilFunc), e.stencilRef !== void 0 && (r.stencilRef = e.stencilRef), e.stencilFuncMask !== void 0 && (r.stencilFuncMask = e.stencilFuncMask), e.stencilFail !== void 0 && (r.stencilFail = e.stencilFail), e.stencilZFail !== void 0 && (r.stencilZFail = e.stencilZFail), e.stencilZPass !== void 0 && (r.stencilZPass = e.stencilZPass), e.wireframe !== void 0 && (r.wireframe = e.wireframe), e.wireframeLinewidth !== void 0 && (r.wireframeLinewidth = e.wireframeLinewidth), e.wireframeLinecap !== void 0 && (r.wireframeLinecap = e.wireframeLinecap), e.wireframeLinejoin !== void 0 && (r.wireframeLinejoin = e.wireframeLinejoin), e.rotation !== void 0 && (r.rotation = e.rotation), e.linewidth !== 1 && (r.linewidth = e.linewidth), e.dashSize !== void 0 && (r.dashSize = e.dashSize), e.gapSize !== void 0 && (r.gapSize = e.gapSize), e.scale !== void 0 && (r.scale = e.scale), e.polygonOffset !== void 0 && (r.polygonOffset = e.polygonOffset), e.polygonOffsetFactor !== void 0 && (r.polygonOffsetFactor = e.polygonOffsetFactor), e.polygonOffsetUnits !== void 0 && (r.polygonOffsetUnits = e.polygonOffsetUnits), e.skinning !== void 0 && (r.skinning = e.skinning), e.morphTargets !== void 0 && (r.morphTargets = e.morphTargets), e.morphNormals !== void 0 && (r.morphNormals = e.morphNormals), e.dithering !== void 0 && (r.dithering = e.dithering), e.visible !== void 0 && (r.visible = e.visible), e.toneMapped !== void 0 && (r.toneMapped = e.toneMapped), e.userData !== void 0 && (r.userData = e.userData), e.uniforms !== void 0)
      for (var i in e.uniforms) {
        var a = e.uniforms[i];
        switch (r.uniforms[i] = {}, a.type) {
          case "t":
            r.uniforms[i].value = n(a.value);
            break;
          case "c":
            r.uniforms[i].value = new ee().setHex(a.value);
            break;
          case "v2":
            r.uniforms[i].value = new G().fromArray(a.value);
            break;
          case "v3":
            r.uniforms[i].value = new b().fromArray(a.value);
            break;
          case "v4":
            r.uniforms[i].value = new Ye().fromArray(a.value);
            break;
          case "m3":
            r.uniforms[i].value = new gt().fromArray(a.value);
          case "m4":
            r.uniforms[i].value = new Ce().fromArray(a.value);
            break;
          default:
            r.uniforms[i].value = a.value;
        }
      }
    if (e.defines !== void 0 && (r.defines = e.defines), e.vertexShader !== void 0 && (r.vertexShader = e.vertexShader), e.fragmentShader !== void 0 && (r.fragmentShader = e.fragmentShader), e.extensions !== void 0)
      for (var s in e.extensions)
        r.extensions[s] = e.extensions[s];
    if (e.shading !== void 0 && (r.flatShading = e.shading === 1), e.size !== void 0 && (r.size = e.size), e.sizeAttenuation !== void 0 && (r.sizeAttenuation = e.sizeAttenuation), e.map !== void 0 && (r.map = n(e.map)), e.matcap !== void 0 && (r.matcap = n(e.matcap)), e.alphaMap !== void 0 && (r.alphaMap = n(e.alphaMap), r.transparent = !0), e.bumpMap !== void 0 && (r.bumpMap = n(e.bumpMap)), e.bumpScale !== void 0 && (r.bumpScale = e.bumpScale), e.normalMap !== void 0 && (r.normalMap = n(e.normalMap)), e.normalMapType !== void 0 && (r.normalMapType = e.normalMapType), e.normalScale !== void 0) {
      var o = e.normalScale;
      Array.isArray(o) === !1 && (o = [o, o]), r.normalScale = new G().fromArray(o);
    }
    return e.displacementMap !== void 0 && (r.displacementMap = n(e.displacementMap)), e.displacementScale !== void 0 && (r.displacementScale = e.displacementScale), e.displacementBias !== void 0 && (r.displacementBias = e.displacementBias), e.roughnessMap !== void 0 && (r.roughnessMap = n(e.roughnessMap)), e.metalnessMap !== void 0 && (r.metalnessMap = n(e.metalnessMap)), e.emissiveMap !== void 0 && (r.emissiveMap = n(e.emissiveMap)), e.emissiveIntensity !== void 0 && (r.emissiveIntensity = e.emissiveIntensity), e.specularMap !== void 0 && (r.specularMap = n(e.specularMap)), e.envMap !== void 0 && (r.envMap = n(e.envMap)), e.envMapIntensity !== void 0 && (r.envMapIntensity = e.envMapIntensity), e.reflectivity !== void 0 && (r.reflectivity = e.reflectivity), e.refractionRatio !== void 0 && (r.refractionRatio = e.refractionRatio), e.lightMap !== void 0 && (r.lightMap = n(e.lightMap)), e.lightMapIntensity !== void 0 && (r.lightMapIntensity = e.lightMapIntensity), e.aoMap !== void 0 && (r.aoMap = n(e.aoMap)), e.aoMapIntensity !== void 0 && (r.aoMapIntensity = e.aoMapIntensity), e.gradientMap !== void 0 && (r.gradientMap = n(e.gradientMap)), e.clearcoatNormalMap !== void 0 && (r.clearcoatNormalMap = n(e.clearcoatNormalMap)), e.clearcoatNormalScale !== void 0 && (r.clearcoatNormalScale = new G().fromArray(e.clearcoatNormalScale)), r;
  },
  setTextures: function(e) {
    return this.textures = e, this;
  }
});
var th = {
  decodeText: function(e) {
    if (typeof TextDecoder != "undefined")
      return new TextDecoder().decode(e);
    for (var t = "", n = 0, r = e.length; n < r; n++)
      t += String.fromCharCode(e[n]);
    try {
      return decodeURIComponent(escape(t));
    } catch (i) {
      return t;
    }
  },
  extractUrlBase: function(e) {
    var t = e.lastIndexOf("/");
    return t === -1 ? "./" : e.substr(0, t + 1);
  }
};
function ul() {
  ne.call(this), this.type = "InstancedBufferGeometry", this.maxInstancedCount = void 0;
}
ul.prototype = Object.assign(Object.create(ne.prototype), {
  constructor: ul,
  isInstancedBufferGeometry: !0,
  copy: function(e) {
    return ne.prototype.copy.call(this, e), this.maxInstancedCount = e.maxInstancedCount, this;
  },
  clone: function() {
    return new this.constructor().copy(this);
  },
  toJSON: function() {
    var e = ne.prototype.toJSON.call(this);
    return e.maxInstancedCount = this.maxInstancedCount, e.isInstancedBufferGeometry = !0, e;
  }
});
function hl(e, t, n, r) {
  typeof n == "number" && (r = n, n = !1, console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument.")), _e.call(this, e, t, n), this.meshPerAttribute = r || 1;
}
hl.prototype = Object.assign(Object.create(_e.prototype), {
  constructor: hl,
  isInstancedBufferAttribute: !0,
  copy: function(e) {
    return _e.prototype.copy.call(this, e), this.meshPerAttribute = e.meshPerAttribute, this;
  },
  toJSON: function() {
    var e = _e.prototype.toJSON.call(this);
    return e.meshPerAttribute = this.meshPerAttribute, e.isInstancedBufferAttribute = !0, e;
  }
});
function fl(e) {
  Ve.call(this, e);
}
fl.prototype = Object.assign(Object.create(Ve.prototype), {
  constructor: fl,
  load: function(e, t, n, r) {
    var i = this, a = new an(i.manager);
    a.setPath(i.path), a.load(e, function(s) {
      t(i.parse(JSON.parse(s)));
    }, n, r);
  },
  parse: function(e) {
    var t = e.isInstancedBufferGeometry ? new ul() : new ne(), n = e.data.index;
    if (n !== void 0) {
      var r = new _o[n.type](n.array);
      t.setIndex(new _e(r, 1));
    }
    var i = e.data.attributes;
    for (var a in i) {
      var s = i[a], r = new _o[s.type](s.array), o = s.isInstancedBufferAttribute ? hl : _e, l = new o(r, s.itemSize, s.normalized);
      s.name !== void 0 && (l.name = s.name), t.setAttribute(a, l);
    }
    var c = e.data.morphAttributes;
    if (c)
      for (var a in c) {
        for (var u = c[a], h = [], f = 0, d = u.length; f < d; f++) {
          var s = u[f], r = new _o[s.type](s.array), l = new _e(r, s.itemSize, s.normalized);
          s.name !== void 0 && (l.name = s.name), h.push(l);
        }
        t.morphAttributes[a] = h;
      }
    var p = e.data.morphTargetsRelative;
    p && (t.morphTargetsRelative = !0);
    var v = e.data.groups || e.data.drawcalls || e.data.offsets;
    if (v !== void 0)
      for (var f = 0, m = v.length; f !== m; ++f) {
        var y = v[f];
        t.addGroup(y.start, y.count, y.materialIndex);
      }
    var x = e.data.boundingSphere;
    if (x !== void 0) {
      var M = new b();
      x.center !== void 0 && M.fromArray(x.center), t.boundingSphere = new kn(M, x.radius);
    }
    return e.name && (t.name = e.name), e.userData && (t.userData = e.userData), t;
  }
});
var _o = {
  Int8Array,
  Uint8Array,
  // Workaround for IE11 pre KB2929437. See #11440
  Uint8ClampedArray: typeof Uint8ClampedArray != "undefined" ? Uint8ClampedArray : Uint8Array,
  Int16Array,
  Uint16Array,
  Int32Array,
  Uint32Array,
  Float32Array,
  Float64Array
};
function dl(e) {
  Ve.call(this, e);
}
dl.prototype = Object.assign(Object.create(Ve.prototype), {
  constructor: dl,
  load: function(e, t, n, r) {
    var i = this, a = this.path === "" ? th.extractUrlBase(e) : this.path;
    this.resourcePath = this.resourcePath || a;
    var s = new an(i.manager);
    s.setPath(this.path), s.load(e, function(o) {
      var l = null;
      try {
        l = JSON.parse(o);
      } catch (u) {
        r !== void 0 && r(u), console.error("THREE:ObjectLoader: Can't parse " + e + ".", u.message);
        return;
      }
      var c = l.metadata;
      if (c === void 0 || c.type === void 0 || c.type.toLowerCase() === "geometry") {
        console.error("THREE.ObjectLoader: Can't load " + e);
        return;
      }
      i.parse(l, t);
    }, n, r);
  },
  parse: function(e, t) {
    var n = this.parseShape(e.shapes), r = this.parseGeometries(e.geometries, n), i = this.parseImages(e.images, function() {
      t !== void 0 && t(o);
    }), a = this.parseTextures(e.textures, i), s = this.parseMaterials(e.materials, a), o = this.parseObject(e.object, r, s);
    return e.animations && (o.animations = this.parseAnimations(e.animations)), (e.images === void 0 || e.images.length === 0) && t !== void 0 && t(o), o;
  },
  parseShape: function(e) {
    var t = {};
    if (e !== void 0)
      for (var n = 0, r = e.length; n < r; n++) {
        var i = new rr().fromJSON(e[n]);
        t[i.uuid] = i;
      }
    return t;
  },
  parseGeometries: function(e, t) {
    var n = {};
    if (e !== void 0)
      for (var r = new fl(), i = 0, a = e.length; i < a; i++) {
        var s, o = e[i];
        switch (o.type) {
          case "PlaneGeometry":
          case "PlaneBufferGeometry":
            s = new wt[o.type](
              o.width,
              o.height,
              o.widthSegments,
              o.heightSegments
            );
            break;
          case "BoxGeometry":
          case "BoxBufferGeometry":
          case "CubeGeometry":
            s = new wt[o.type](
              o.width,
              o.height,
              o.depth,
              o.widthSegments,
              o.heightSegments,
              o.depthSegments
            );
            break;
          case "CircleGeometry":
          case "CircleBufferGeometry":
            s = new wt[o.type](
              o.radius,
              o.segments,
              o.thetaStart,
              o.thetaLength
            );
            break;
          case "CylinderGeometry":
          case "CylinderBufferGeometry":
            s = new wt[o.type](
              o.radiusTop,
              o.radiusBottom,
              o.height,
              o.radialSegments,
              o.heightSegments,
              o.openEnded,
              o.thetaStart,
              o.thetaLength
            );
            break;
          case "ConeGeometry":
          case "ConeBufferGeometry":
            s = new wt[o.type](
              o.radius,
              o.height,
              o.radialSegments,
              o.heightSegments,
              o.openEnded,
              o.thetaStart,
              o.thetaLength
            );
            break;
          case "SphereGeometry":
          case "SphereBufferGeometry":
            s = new wt[o.type](
              o.radius,
              o.widthSegments,
              o.heightSegments,
              o.phiStart,
              o.phiLength,
              o.thetaStart,
              o.thetaLength
            );
            break;
          case "DodecahedronGeometry":
          case "DodecahedronBufferGeometry":
          case "IcosahedronGeometry":
          case "IcosahedronBufferGeometry":
          case "OctahedronGeometry":
          case "OctahedronBufferGeometry":
          case "TetrahedronGeometry":
          case "TetrahedronBufferGeometry":
            s = new wt[o.type](
              o.radius,
              o.detail
            );
            break;
          case "RingGeometry":
          case "RingBufferGeometry":
            s = new wt[o.type](
              o.innerRadius,
              o.outerRadius,
              o.thetaSegments,
              o.phiSegments,
              o.thetaStart,
              o.thetaLength
            );
            break;
          case "TorusGeometry":
          case "TorusBufferGeometry":
            s = new wt[o.type](
              o.radius,
              o.tube,
              o.radialSegments,
              o.tubularSegments,
              o.arc
            );
            break;
          case "TorusKnotGeometry":
          case "TorusKnotBufferGeometry":
            s = new wt[o.type](
              o.radius,
              o.tube,
              o.tubularSegments,
              o.radialSegments,
              o.p,
              o.q
            );
            break;
          case "TubeGeometry":
          case "TubeBufferGeometry":
            s = new wt[o.type](
              new Ko[o.path.type]().fromJSON(o.path),
              o.tubularSegments,
              o.radius,
              o.radialSegments,
              o.closed
            );
            break;
          case "LatheGeometry":
          case "LatheBufferGeometry":
            s = new wt[o.type](
              o.points,
              o.segments,
              o.phiStart,
              o.phiLength
            );
            break;
          case "PolyhedronGeometry":
          case "PolyhedronBufferGeometry":
            s = new wt[o.type](
              o.vertices,
              o.indices,
              o.radius,
              o.details
            );
            break;
          case "ShapeGeometry":
          case "ShapeBufferGeometry":
            for (var h = [], l = 0, c = o.shapes.length; l < c; l++) {
              var u = t[o.shapes[l]];
              h.push(u);
            }
            s = new wt[o.type](
              h,
              o.curveSegments
            );
            break;
          case "ExtrudeGeometry":
          case "ExtrudeBufferGeometry":
            for (var h = [], l = 0, c = o.shapes.length; l < c; l++) {
              var u = t[o.shapes[l]];
              h.push(u);
            }
            var f = o.options.extrudePath;
            f !== void 0 && (o.options.extrudePath = new Ko[f.type]().fromJSON(f)), s = new wt[o.type](
              h,
              o.options
            );
            break;
          case "BufferGeometry":
          case "InstancedBufferGeometry":
            s = r.parse(o);
            break;
          case "Geometry":
            if ("THREE" in window && "LegacyJSONLoader" in THREE) {
              var d = new THREE.LegacyJSONLoader();
              s = d.parse(o, this.resourcePath).geometry;
            } else
              console.error('THREE.ObjectLoader: You have to import LegacyJSONLoader in order load geometry data of type "Geometry".');
            break;
          default:
            console.warn('THREE.ObjectLoader: Unsupported geometry type "' + o.type + '"');
            continue;
        }
        s.uuid = o.uuid, o.name !== void 0 && (s.name = o.name), s.isBufferGeometry === !0 && o.userData !== void 0 && (s.userData = o.userData), n[o.uuid] = s;
      }
    return n;
  },
  parseMaterials: function(e, t) {
    var n = {}, r = {};
    if (e !== void 0) {
      var i = new cl();
      i.setTextures(t);
      for (var a = 0, s = e.length; a < s; a++) {
        var o = e[a];
        if (o.type === "MultiMaterial") {
          for (var l = [], c = 0; c < o.materials.length; c++) {
            var u = o.materials[c];
            n[u.uuid] === void 0 && (n[u.uuid] = i.parse(u)), l.push(n[u.uuid]);
          }
          r[o.uuid] = l;
        } else
          n[o.uuid] === void 0 && (n[o.uuid] = i.parse(o)), r[o.uuid] = n[o.uuid];
      }
    }
    return r;
  },
  parseAnimations: function(e) {
    for (var t = [], n = 0; n < e.length; n++) {
      var r = e[n], i = Yt.parse(r);
      r.uuid !== void 0 && (i.uuid = r.uuid), t.push(i);
    }
    return t;
  },
  parseImages: function(e, t) {
    var n = this, r = {};
    function i(v) {
      return n.manager.itemStart(v), s.load(v, function() {
        n.manager.itemEnd(v);
      }, void 0, function() {
        n.manager.itemError(v), n.manager.itemEnd(v);
      });
    }
    if (e !== void 0 && e.length > 0) {
      var a = new eh(t), s = new ea(a);
      s.setCrossOrigin(this.crossOrigin);
      for (var o = 0, l = e.length; o < l; o++) {
        var c = e[o], u = c.url;
        if (Array.isArray(u)) {
          r[c.uuid] = [];
          for (var h = 0, f = u.length; h < f; h++) {
            var d = u[h], p = /^(\/\/)|([a-z]+:(\/\/)?)/i.test(d) ? d : n.resourcePath + d;
            r[c.uuid].push(i(p));
          }
        } else {
          var p = /^(\/\/)|([a-z]+:(\/\/)?)/i.test(c.url) ? c.url : n.resourcePath + c.url;
          r[c.uuid] = i(p);
        }
      }
    }
    return r;
  },
  parseTextures: function(e, t) {
    function n(l, c) {
      return typeof l == "number" ? l : (console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.", l), c[l]);
    }
    var r = {};
    if (e !== void 0)
      for (var i = 0, a = e.length; i < a; i++) {
        var s = e[i];
        s.image === void 0 && console.warn('THREE.ObjectLoader: No "image" specified for', s.uuid), t[s.image] === void 0 && console.warn("THREE.ObjectLoader: Undefined image", s.image);
        var o;
        Array.isArray(t[s.image]) ? o = new zn(t[s.image]) : o = new Ze(t[s.image]), o.needsUpdate = !0, o.uuid = s.uuid, s.name !== void 0 && (o.name = s.name), s.mapping !== void 0 && (o.mapping = n(s.mapping, Dg)), s.offset !== void 0 && o.offset.fromArray(s.offset), s.repeat !== void 0 && o.repeat.fromArray(s.repeat), s.center !== void 0 && o.center.fromArray(s.center), s.rotation !== void 0 && (o.rotation = s.rotation), s.wrap !== void 0 && (o.wrapS = n(s.wrap[0], kc), o.wrapT = n(s.wrap[1], kc)), s.format !== void 0 && (o.format = s.format), s.type !== void 0 && (o.type = s.type), s.encoding !== void 0 && (o.encoding = s.encoding), s.minFilter !== void 0 && (o.minFilter = n(s.minFilter, Wc)), s.magFilter !== void 0 && (o.magFilter = n(s.magFilter, Wc)), s.anisotropy !== void 0 && (o.anisotropy = s.anisotropy), s.flipY !== void 0 && (o.flipY = s.flipY), s.premultiplyAlpha !== void 0 && (o.premultiplyAlpha = s.premultiplyAlpha), s.unpackAlignment !== void 0 && (o.unpackAlignment = s.unpackAlignment), r[s.uuid] = o;
      }
    return r;
  },
  parseObject: function(e, t, n) {
    var r;
    function i(m) {
      return t[m] === void 0 && console.warn("THREE.ObjectLoader: Undefined geometry", m), t[m];
    }
    function a(m) {
      if (m !== void 0) {
        if (Array.isArray(m)) {
          for (var y = [], x = 0, M = m.length; x < M; x++) {
            var E = m[x];
            n[E] === void 0 && console.warn("THREE.ObjectLoader: Undefined material", E), y.push(n[E]);
          }
          return y;
        }
        return n[m] === void 0 && console.warn("THREE.ObjectLoader: Undefined material", m), n[m];
      }
    }
    switch (e.type) {
      case "Scene":
        r = new Bn(), e.background !== void 0 && Number.isInteger(e.background) && (r.background = new ee(e.background)), e.fog !== void 0 && (e.fog.type === "Fog" ? r.fog = new Fo(e.fog.color, e.fog.near, e.fog.far) : e.fog.type === "FogExp2" && (r.fog = new No(e.fog.color, e.fog.density)));
        break;
      case "PerspectiveCamera":
        r = new ut(e.fov, e.aspect, e.near, e.far), e.focus !== void 0 && (r.focus = e.focus), e.zoom !== void 0 && (r.zoom = e.zoom), e.filmGauge !== void 0 && (r.filmGauge = e.filmGauge), e.filmOffset !== void 0 && (r.filmOffset = e.filmOffset), e.view !== void 0 && (r.view = Object.assign({}, e.view));
        break;
      case "OrthographicCamera":
        r = new na(e.left, e.right, e.top, e.bottom, e.near, e.far), e.zoom !== void 0 && (r.zoom = e.zoom), e.view !== void 0 && (r.view = Object.assign({}, e.view));
        break;
      case "AmbientLight":
        r = new ol(e.color, e.intensity);
        break;
      case "DirectionalLight":
        r = new sl(e.color, e.intensity);
        break;
      case "PointLight":
        r = new il(e.color, e.intensity, e.distance, e.decay);
        break;
      case "RectAreaLight":
        r = new ll(e.color, e.intensity, e.width, e.height);
        break;
      case "SpotLight":
        r = new nl(e.color, e.intensity, e.distance, e.angle, e.penumbra, e.decay);
        break;
      case "HemisphereLight":
        r = new el(e.color, e.groundColor, e.intensity);
        break;
      case "SkinnedMesh":
        console.warn("THREE.ObjectLoader.parseObject() does not support SkinnedMesh yet.");
      case "Mesh":
        var s = i(e.geometry), o = a(e.material);
        s.bones && s.bones.length > 0 ? r = new cs(s, o) : r = new et(s, o);
        break;
      case "InstancedMesh":
        var s = i(e.geometry), o = a(e.material), l = e.count, c = e.instanceMatrix;
        r = new Uo(s, o, l), r.instanceMatrix = new _e(new Float32Array(c.array), 16);
        break;
      case "LOD":
        r = new ls();
        break;
      case "Line":
        r = new Ut(i(e.geometry), a(e.material), e.mode);
        break;
      case "LineLoop":
        r = new Go(i(e.geometry), a(e.material));
        break;
      case "LineSegments":
        r = new lt(i(e.geometry), a(e.material));
        break;
      case "PointCloud":
      case "Points":
        r = new Ho(i(e.geometry), a(e.material));
        break;
      case "Sprite":
        r = new Bo(a(e.material));
        break;
      case "Group":
        r = new Fi();
        break;
      default:
        r = new K();
    }
    if (r.uuid = e.uuid, e.name !== void 0 && (r.name = e.name), e.matrix !== void 0 ? (r.matrix.fromArray(e.matrix), e.matrixAutoUpdate !== void 0 && (r.matrixAutoUpdate = e.matrixAutoUpdate), r.matrixAutoUpdate && r.matrix.decompose(r.position, r.quaternion, r.scale)) : (e.position !== void 0 && r.position.fromArray(e.position), e.rotation !== void 0 && r.rotation.fromArray(e.rotation), e.quaternion !== void 0 && r.quaternion.fromArray(e.quaternion), e.scale !== void 0 && r.scale.fromArray(e.scale)), e.castShadow !== void 0 && (r.castShadow = e.castShadow), e.receiveShadow !== void 0 && (r.receiveShadow = e.receiveShadow), e.shadow && (e.shadow.bias !== void 0 && (r.shadow.bias = e.shadow.bias), e.shadow.radius !== void 0 && (r.shadow.radius = e.shadow.radius), e.shadow.mapSize !== void 0 && r.shadow.mapSize.fromArray(e.shadow.mapSize), e.shadow.camera !== void 0 && (r.shadow.camera = this.parseObject(e.shadow.camera))), e.visible !== void 0 && (r.visible = e.visible), e.frustumCulled !== void 0 && (r.frustumCulled = e.frustumCulled), e.renderOrder !== void 0 && (r.renderOrder = e.renderOrder), e.userData !== void 0 && (r.userData = e.userData), e.layers !== void 0 && (r.layers.mask = e.layers), e.children !== void 0)
      for (var u = e.children, h = 0; h < u.length; h++)
        r.add(this.parseObject(u[h], t, n));
    if (e.type === "LOD") {
      e.autoUpdate !== void 0 && (r.autoUpdate = e.autoUpdate);
      for (var f = e.levels, d = 0; d < f.length; d++) {
        var p = f[d], v = r.getObjectByProperty("uuid", p.object);
        v !== void 0 && r.addLevel(v, p.distance);
      }
    }
    return r;
  }
});
var Dg = {
  UVMapping: bl,
  CubeReflectionMapping: El,
  CubeRefractionMapping: Sl,
  EquirectangularReflectionMapping: Su,
  EquirectangularRefractionMapping: Tl,
  SphericalReflectionMapping: Tu,
  CubeUVReflectionMapping: fa,
  CubeUVRefractionMapping: Al
}, kc = {
  RepeatWrapping: Ka,
  ClampToEdgeWrapping: Et,
  MirroredRepeatWrapping: es
}, Wc = {
  NearestFilter: ot,
  NearestMipmapNearestFilter: Eo,
  NearestMipmapLinearFilter: So,
  LinearFilter: ft,
  LinearMipmapNearestFilter: Au,
  LinearMipmapLinearFilter: Gs
};
function jc(e) {
  typeof createImageBitmap == "undefined" && console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."), typeof fetch == "undefined" && console.warn("THREE.ImageBitmapLoader: fetch() not supported."), Ve.call(this, e), this.options = void 0;
}
jc.prototype = Object.assign(Object.create(Ve.prototype), {
  constructor: jc,
  setOptions: function(t) {
    return this.options = t, this;
  },
  load: function(e, t, n, r) {
    e === void 0 && (e = ""), this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
    var i = this, a = oi.get(e);
    if (a !== void 0)
      return i.manager.itemStart(e), setTimeout(function() {
        t && t(a), i.manager.itemEnd(e);
      }, 0), a;
    fetch(e).then(function(s) {
      return s.blob();
    }).then(function(s) {
      return i.options === void 0 ? createImageBitmap(s) : createImageBitmap(s, i.options);
    }).then(function(s) {
      oi.add(e, s), t && t(s), i.manager.itemEnd(e);
    }).catch(function(s) {
      r && r(s), i.manager.itemError(e), i.manager.itemEnd(e);
    }), i.manager.itemStart(e);
  }
});
function nh() {
  this.type = "ShapePath", this.color = new ee(), this.subPaths = [], this.currentPath = null;
}
Object.assign(nh.prototype, {
  moveTo: function(e, t) {
    return this.currentPath = new en(), this.subPaths.push(this.currentPath), this.currentPath.moveTo(e, t), this;
  },
  lineTo: function(e, t) {
    return this.currentPath.lineTo(e, t), this;
  },
  quadraticCurveTo: function(e, t, n, r) {
    return this.currentPath.quadraticCurveTo(e, t, n, r), this;
  },
  bezierCurveTo: function(e, t, n, r, i, a) {
    return this.currentPath.bezierCurveTo(e, t, n, r, i, a), this;
  },
  splineThru: function(e) {
    return this.currentPath.splineThru(e), this;
  },
  toShapes: function(e, t) {
    function n(z) {
      for (var H = [], te = 0, $ = z.length; te < $; te++) {
        var X = z[te], Y = new rr();
        Y.curves = X.curves, H.push(Y);
      }
      return H;
    }
    function r(z, H) {
      for (var te = H.length, $ = !1, X = te - 1, Y = 0; Y < te; X = Y++) {
        var re = H[X], Ue = H[Y], ze = Ue.x - re.x, Fe = Ue.y - re.y;
        if (Math.abs(Fe) > Number.EPSILON) {
          if (Fe < 0 && (re = H[Y], ze = -ze, Ue = H[X], Fe = -Fe), z.y < re.y || z.y > Ue.y) continue;
          if (z.y === re.y) {
            if (z.x === re.x) return !0;
          } else {
            var be = Fe * (z.x - re.x) - ze * (z.y - re.y);
            if (be === 0) return !0;
            if (be < 0) continue;
            $ = !$;
          }
        } else {
          if (z.y !== re.y) continue;
          if (Ue.x <= z.x && z.x <= re.x || re.x <= z.x && z.x <= Ue.x) return !0;
        }
      }
      return $;
    }
    var i = Nn.isClockWise, a = this.subPaths;
    if (a.length === 0) return [];
    if (t === !0) return n(a);
    var s, o, l, c = [];
    if (a.length === 1)
      return o = a[0], l = new rr(), l.curves = o.curves, c.push(l), c;
    var u = !i(a[0].getPoints());
    u = e ? !u : u;
    var h = [], f = [], d = [], p = 0, v;
    f[p] = void 0, d[p] = [];
    for (var m = 0, y = a.length; m < y; m++)
      o = a[m], v = o.getPoints(), s = i(v), s = e ? !s : s, s ? (!u && f[p] && p++, f[p] = { s: new rr(), p: v }, f[p].s.curves = o.curves, u && p++, d[p] = []) : d[p].push({ h: o, p: v[0] });
    if (!f[0]) return n(a);
    if (f.length > 1) {
      for (var x = !1, M = [], E = 0, w = f.length; E < w; E++)
        h[E] = [];
      for (var E = 0, w = f.length; E < w; E++)
        for (var A = d[E], C = 0; C < A.length; C++) {
          for (var T = A[C], D = !0, I = 0; I < f.length; I++)
            r(T.p, f[I].p) && (E !== I && M.push({ froms: E, tos: I, hole: C }), D ? (D = !1, h[I].push(T)) : x = !0);
          D && h[E].push(T);
        }
      M.length > 0 && (x || (d = h));
    }
    for (var B, m = 0, O = f.length; m < O; m++) {
      l = f[m].s, c.push(l), B = d[m];
      for (var F = 0, N = B.length; F < N; F++)
        l.holes.push(B[F].h);
    }
    return c;
  }
});
function rh(e) {
  this.type = "Font", this.data = e;
}
Object.assign(rh.prototype, {
  isFont: !0,
  generateShapes: function(e, t) {
    t === void 0 && (t = 100);
    for (var n = [], r = Ig(e, t, this.data), i = 0, a = r.length; i < a; i++)
      Array.prototype.push.apply(n, r[i].toShapes());
    return n;
  }
});
function Ig(e, t, n) {
  for (var r = Array.from ? Array.from(e) : String(e).split(""), i = t / n.resolution, a = (n.boundingBox.yMax - n.boundingBox.yMin + n.underlineThickness) * i, s = [], o = 0, l = 0, c = 0; c < r.length; c++) {
    var u = r[c];
    if (u === `
`)
      o = 0, l -= a;
    else {
      var h = Og(u, i, o, l, n);
      o += h.offsetX, s.push(h.path);
    }
  }
  return s;
}
function Og(e, t, n, r, i) {
  var a = i.glyphs[e] || i.glyphs["?"];
  if (!a) {
    console.error('THREE.Font: character "' + e + '" does not exists in font family ' + i.familyName + ".");
    return;
  }
  var s = new nh(), o, l, c, u, h, f, d, p;
  if (a.o)
    for (var v = a._cachedOutline || (a._cachedOutline = a.o.split(" ")), m = 0, y = v.length; m < y; ) {
      var x = v[m++];
      switch (x) {
        case "m":
          o = v[m++] * t + n, l = v[m++] * t + r, s.moveTo(o, l);
          break;
        case "l":
          o = v[m++] * t + n, l = v[m++] * t + r, s.lineTo(o, l);
          break;
        case "q":
          c = v[m++] * t + n, u = v[m++] * t + r, h = v[m++] * t + n, f = v[m++] * t + r, s.quadraticCurveTo(h, f, c, u);
          break;
        case "b":
          c = v[m++] * t + n, u = v[m++] * t + r, h = v[m++] * t + n, f = v[m++] * t + r, d = v[m++] * t + n, p = v[m++] * t + r, s.bezierCurveTo(h, f, d, p, c, u);
          break;
      }
    }
  return { offsetX: a.ha * t, path: s };
}
function qc(e) {
  Ve.call(this, e);
}
qc.prototype = Object.assign(Object.create(Ve.prototype), {
  constructor: qc,
  load: function(e, t, n, r) {
    var i = this, a = new an(this.manager);
    a.setPath(this.path), a.load(e, function(s) {
      var o;
      try {
        o = JSON.parse(s);
      } catch (c) {
        console.warn("THREE.FontLoader: typeface.js support is being deprecated. Use typeface.json instead."), o = JSON.parse(s.substring(65, s.length - 2));
      }
      var l = i.parse(o);
      t && t(l);
    }, n, r);
  },
  parse: function(e) {
    return new rh(e);
  }
});
var ka, ih = {
  getContext: function() {
    return ka === void 0 && (ka = new (window.AudioContext || window.webkitAudioContext)()), ka;
  },
  setContext: function(e) {
    ka = e;
  }
};
function pl(e) {
  Ve.call(this, e);
}
pl.prototype = Object.assign(Object.create(Ve.prototype), {
  constructor: pl,
  load: function(e, t, n, r) {
    var i = new an(this.manager);
    i.setResponseType("arraybuffer"), i.setPath(this.path), i.load(e, function(a) {
      var s = a.slice(0), o = ih.getContext();
      o.decodeAudioData(s, function(l) {
        t(l);
      });
    }, n, r);
  }
});
function Dl() {
  this.coefficients = [];
  for (var e = 0; e < 9; e++)
    this.coefficients.push(new b());
}
Object.assign(Dl.prototype, {
  isSphericalHarmonics3: !0,
  set: function(e) {
    for (var t = 0; t < 9; t++)
      this.coefficients[t].copy(e[t]);
    return this;
  },
  zero: function() {
    for (var e = 0; e < 9; e++)
      this.coefficients[e].set(0, 0, 0);
    return this;
  },
  // get the radiance in the direction of the normal
  // target is a Vector3
  getAt: function(e, t) {
    var n = e.x, r = e.y, i = e.z, a = this.coefficients;
    return t.copy(a[0]).multiplyScalar(0.282095), t.addScale(a[1], 0.488603 * r), t.addScale(a[2], 0.488603 * i), t.addScale(a[3], 0.488603 * n), t.addScale(a[4], 1.092548 * (n * r)), t.addScale(a[5], 1.092548 * (r * i)), t.addScale(a[6], 0.315392 * (3 * i * i - 1)), t.addScale(a[7], 1.092548 * (n * i)), t.addScale(a[8], 0.546274 * (n * n - r * r)), t;
  },
  // get the irradiance (radiance convolved with cosine lobe) in the direction of the normal
  // target is a Vector3
  // https://graphics.stanford.edu/papers/envmap/envmap.pdf
  getIrradianceAt: function(e, t) {
    var n = e.x, r = e.y, i = e.z, a = this.coefficients;
    return t.copy(a[0]).multiplyScalar(0.886227), t.addScale(a[1], 2 * 0.511664 * r), t.addScale(a[2], 2 * 0.511664 * i), t.addScale(a[3], 2 * 0.511664 * n), t.addScale(a[4], 2 * 0.429043 * n * r), t.addScale(a[5], 2 * 0.429043 * r * i), t.addScale(a[6], 0.743125 * i * i - 0.247708), t.addScale(a[7], 2 * 0.429043 * n * i), t.addScale(a[8], 0.429043 * (n * n - r * r)), t;
  },
  add: function(e) {
    for (var t = 0; t < 9; t++)
      this.coefficients[t].add(e.coefficients[t]);
    return this;
  },
  scale: function(e) {
    for (var t = 0; t < 9; t++)
      this.coefficients[t].multiplyScalar(e);
    return this;
  },
  lerp: function(e, t) {
    for (var n = 0; n < 9; n++)
      this.coefficients[n].lerp(e.coefficients[n], t);
    return this;
  },
  equals: function(e) {
    for (var t = 0; t < 9; t++)
      if (!this.coefficients[t].equals(e.coefficients[t]))
        return !1;
    return !0;
  },
  copy: function(e) {
    return this.set(e.coefficients);
  },
  clone: function() {
    return new this.constructor().copy(this);
  },
  fromArray: function(e, t) {
    t === void 0 && (t = 0);
    for (var n = this.coefficients, r = 0; r < 9; r++)
      n[r].fromArray(e, t + r * 3);
    return this;
  },
  toArray: function(e, t) {
    e === void 0 && (e = []), t === void 0 && (t = 0);
    for (var n = this.coefficients, r = 0; r < 9; r++)
      n[r].toArray(e, t + r * 3);
    return e;
  }
});
Object.assign(Dl, {
  // evaluate the basis functions
  // shBasis is an Array[ 9 ]
  getBasisAt: function(e, t) {
    var n = e.x, r = e.y, i = e.z;
    t[0] = 0.282095, t[1] = 0.488603 * r, t[2] = 0.488603 * i, t[3] = 0.488603 * n, t[4] = 1.092548 * n * r, t[5] = 1.092548 * r * i, t[6] = 0.315392 * (3 * i * i - 1), t[7] = 1.092548 * n * i, t[8] = 0.546274 * (n * n - r * r);
  }
});
function nn(e, t) {
  $e.call(this, void 0, t), this.sh = e !== void 0 ? e : new Dl();
}
nn.prototype = Object.assign(Object.create($e.prototype), {
  constructor: nn,
  isLightProbe: !0,
  copy: function(e) {
    return $e.prototype.copy.call(this, e), this.sh.copy(e.sh), this.intensity = e.intensity, this;
  },
  toJSON: function(e) {
    var t = $e.prototype.toJSON.call(this, e);
    return t;
  }
});
function Xc(e, t, n) {
  nn.call(this, void 0, n);
  var r = new ee().set(e), i = new ee().set(t), a = new b(r.r, r.g, r.b), s = new b(i.r, i.g, i.b), o = Math.sqrt(Math.PI), l = o * Math.sqrt(0.75);
  this.sh.coefficients[0].copy(a).add(s).multiplyScalar(o), this.sh.coefficients[1].copy(a).sub(s).multiplyScalar(l);
}
Xc.prototype = Object.assign(Object.create(nn.prototype), {
  constructor: Xc,
  isHemisphereLightProbe: !0,
  copy: function(e) {
    return nn.prototype.copy.call(this, e), this;
  },
  toJSON: function(e) {
    var t = nn.prototype.toJSON.call(this, e);
    return t;
  }
});
function Yc(e, t) {
  nn.call(this, void 0, t);
  var n = new ee().set(e);
  this.sh.coefficients[0].set(n.r, n.g, n.b).multiplyScalar(2 * Math.sqrt(Math.PI));
}
Yc.prototype = Object.assign(Object.create(nn.prototype), {
  constructor: Yc,
  isAmbientLightProbe: !0,
  copy: function(e) {
    return nn.prototype.copy.call(this, e), this;
  },
  toJSON: function(e) {
    var t = nn.prototype.toJSON.call(this, e);
    return t;
  }
});
var Zc = new Ce(), Jc = new Ce();
function Ng() {
  this.type = "StereoCamera", this.aspect = 1, this.eyeSep = 0.064, this.cameraL = new ut(), this.cameraL.layers.enable(1), this.cameraL.matrixAutoUpdate = !1, this.cameraR = new ut(), this.cameraR.layers.enable(2), this.cameraR.matrixAutoUpdate = !1, this._cache = {
    focus: null,
    fov: null,
    aspect: null,
    near: null,
    far: null,
    zoom: null,
    eyeSep: null
  };
}
Object.assign(Ng.prototype, {
  update: function(e) {
    var t = this._cache, n = t.focus !== e.focus || t.fov !== e.fov || t.aspect !== e.aspect * this.aspect || t.near !== e.near || t.far !== e.far || t.zoom !== e.zoom || t.eyeSep !== this.eyeSep;
    if (n) {
      t.focus = e.focus, t.fov = e.fov, t.aspect = e.aspect * this.aspect, t.near = e.near, t.far = e.far, t.zoom = e.zoom, t.eyeSep = this.eyeSep;
      var r = e.projectionMatrix.clone(), i = t.eyeSep / 2, a = i * t.near / t.focus, s = t.near * Math.tan(Ae.DEG2RAD * t.fov * 0.5) / t.zoom, o, l;
      Jc.elements[12] = -i, Zc.elements[12] = i, o = -s * t.aspect + a, l = s * t.aspect + a, r.elements[0] = 2 * t.near / (l - o), r.elements[8] = (l + o) / (l - o), this.cameraL.projectionMatrix.copy(r), o = -s * t.aspect - a, l = s * t.aspect - a, r.elements[0] = 2 * t.near / (l - o), r.elements[8] = (l + o) / (l - o), this.cameraR.projectionMatrix.copy(r);
    }
    this.cameraL.matrixWorld.copy(e.matrixWorld).multiply(Jc), this.cameraR.matrixWorld.copy(e.matrixWorld).multiply(Zc);
  }
});
function ah(e) {
  this.autoStart = e !== void 0 ? e : !0, this.startTime = 0, this.oldTime = 0, this.elapsedTime = 0, this.running = !1;
}
Object.assign(ah.prototype, {
  start: function() {
    this.startTime = (typeof performance == "undefined" ? Date : performance).now(), this.oldTime = this.startTime, this.elapsedTime = 0, this.running = !0;
  },
  stop: function() {
    this.getElapsedTime(), this.running = !1, this.autoStart = !1;
  },
  getElapsedTime: function() {
    return this.getDelta(), this.elapsedTime;
  },
  getDelta: function() {
    var e = 0;
    if (this.autoStart && !this.running)
      return this.start(), 0;
    if (this.running) {
      var t = (typeof performance == "undefined" ? Date : performance).now();
      e = (t - this.oldTime) / 1e3, this.oldTime = t, this.elapsedTime += e;
    }
    return e;
  }
});
var $n = new b(), $c = new Tt(), Fg = new b(), Qn = new b();
function Qc() {
  K.call(this), this.type = "AudioListener", this.context = ih.getContext(), this.gain = this.context.createGain(), this.gain.connect(this.context.destination), this.filter = null, this.timeDelta = 0, this._clock = new ah();
}
Qc.prototype = Object.assign(Object.create(K.prototype), {
  constructor: Qc,
  getInput: function() {
    return this.gain;
  },
  removeFilter: function() {
    return this.filter !== null && (this.gain.disconnect(this.filter), this.filter.disconnect(this.context.destination), this.gain.connect(this.context.destination), this.filter = null), this;
  },
  getFilter: function() {
    return this.filter;
  },
  setFilter: function(e) {
    return this.filter !== null ? (this.gain.disconnect(this.filter), this.filter.disconnect(this.context.destination)) : this.gain.disconnect(this.context.destination), this.filter = e, this.gain.connect(this.filter), this.filter.connect(this.context.destination), this;
  },
  getMasterVolume: function() {
    return this.gain.gain.value;
  },
  setMasterVolume: function(e) {
    return this.gain.gain.setTargetAtTime(e, this.context.currentTime, 0.01), this;
  },
  updateMatrixWorld: function(e) {
    K.prototype.updateMatrixWorld.call(this, e);
    var t = this.context.listener, n = this.up;
    if (this.timeDelta = this._clock.getDelta(), this.matrixWorld.decompose($n, $c, Fg), Qn.set(0, 0, -1).applyQuaternion($c), t.positionX) {
      var r = this.context.currentTime + this.timeDelta;
      t.positionX.linearRampToValueAtTime($n.x, r), t.positionY.linearRampToValueAtTime($n.y, r), t.positionZ.linearRampToValueAtTime($n.z, r), t.forwardX.linearRampToValueAtTime(Qn.x, r), t.forwardY.linearRampToValueAtTime(Qn.y, r), t.forwardZ.linearRampToValueAtTime(Qn.z, r), t.upX.linearRampToValueAtTime(n.x, r), t.upY.linearRampToValueAtTime(n.y, r), t.upZ.linearRampToValueAtTime(n.z, r);
    } else
      t.setPosition($n.x, $n.y, $n.z), t.setOrientation(Qn.x, Qn.y, Qn.z, n.x, n.y, n.z);
  }
});
function ra(e) {
  K.call(this), this.type = "Audio", this.listener = e, this.context = e.context, this.gain = this.context.createGain(), this.gain.connect(e.getInput()), this.autoplay = !1, this.buffer = null, this.detune = 0, this.loop = !1, this.loopStart = 0, this.loopEnd = 0, this.offset = 0, this.duration = void 0, this.playbackRate = 1, this.isPlaying = !1, this.hasPlaybackControl = !0, this.sourceType = "empty", this._startedAt = 0, this._pausedAt = 0, this.filters = [];
}
ra.prototype = Object.assign(Object.create(K.prototype), {
  constructor: ra,
  getOutput: function() {
    return this.gain;
  },
  setNodeSource: function(e) {
    return this.hasPlaybackControl = !1, this.sourceType = "audioNode", this.source = e, this.connect(), this;
  },
  setMediaElementSource: function(e) {
    return this.hasPlaybackControl = !1, this.sourceType = "mediaNode", this.source = this.context.createMediaElementSource(e), this.connect(), this;
  },
  setMediaStreamSource: function(e) {
    return this.hasPlaybackControl = !1, this.sourceType = "mediaStreamNode", this.source = this.context.createMediaStreamSource(e), this.connect(), this;
  },
  setBuffer: function(e) {
    return this.buffer = e, this.sourceType = "buffer", this.autoplay && this.play(), this;
  },
  play: function(e) {
    if (e === void 0 && (e = 0), this.isPlaying === !0) {
      console.warn("THREE.Audio: Audio is already playing.");
      return;
    }
    if (this.hasPlaybackControl === !1) {
      console.warn("THREE.Audio: this Audio has no playback control.");
      return;
    }
    this._startedAt = this.context.currentTime + e;
    var t = this.context.createBufferSource();
    return t.buffer = this.buffer, t.loop = this.loop, t.loopStart = this.loopStart, t.loopEnd = this.loopEnd, t.onended = this.onEnded.bind(this), t.start(this._startedAt, this._pausedAt + this.offset, this.duration), this.isPlaying = !0, this.source = t, this.setDetune(this.detune), this.setPlaybackRate(this.playbackRate), this.connect();
  },
  pause: function() {
    if (this.hasPlaybackControl === !1) {
      console.warn("THREE.Audio: this Audio has no playback control.");
      return;
    }
    return this.isPlaying === !0 && (this._pausedAt = (this.context.currentTime - this._startedAt) * this.playbackRate, this.source.stop(), this.source.onended = null, this.isPlaying = !1), this;
  },
  stop: function() {
    if (this.hasPlaybackControl === !1) {
      console.warn("THREE.Audio: this Audio has no playback control.");
      return;
    }
    return this._pausedAt = 0, this.source.stop(), this.source.onended = null, this.isPlaying = !1, this;
  },
  connect: function() {
    if (this.filters.length > 0) {
      this.source.connect(this.filters[0]);
      for (var e = 1, t = this.filters.length; e < t; e++)
        this.filters[e - 1].connect(this.filters[e]);
      this.filters[this.filters.length - 1].connect(this.getOutput());
    } else
      this.source.connect(this.getOutput());
    return this;
  },
  disconnect: function() {
    if (this.filters.length > 0) {
      this.source.disconnect(this.filters[0]);
      for (var e = 1, t = this.filters.length; e < t; e++)
        this.filters[e - 1].disconnect(this.filters[e]);
      this.filters[this.filters.length - 1].disconnect(this.getOutput());
    } else
      this.source.disconnect(this.getOutput());
    return this;
  },
  getFilters: function() {
    return this.filters;
  },
  setFilters: function(e) {
    return e || (e = []), this.isPlaying === !0 ? (this.disconnect(), this.filters = e, this.connect()) : this.filters = e, this;
  },
  setDetune: function(e) {
    if (this.detune = e, this.source.detune !== void 0)
      return this.isPlaying === !0 && this.source.detune.setTargetAtTime(this.detune, this.context.currentTime, 0.01), this;
  },
  getDetune: function() {
    return this.detune;
  },
  getFilter: function() {
    return this.getFilters()[0];
  },
  setFilter: function(e) {
    return this.setFilters(e ? [e] : []);
  },
  setPlaybackRate: function(e) {
    if (this.hasPlaybackControl === !1) {
      console.warn("THREE.Audio: this Audio has no playback control.");
      return;
    }
    return this.playbackRate = e, this.isPlaying === !0 && this.source.playbackRate.setTargetAtTime(this.playbackRate, this.context.currentTime, 0.01), this;
  },
  getPlaybackRate: function() {
    return this.playbackRate;
  },
  onEnded: function() {
    this.isPlaying = !1;
  },
  getLoop: function() {
    return this.hasPlaybackControl === !1 ? (console.warn("THREE.Audio: this Audio has no playback control."), !1) : this.loop;
  },
  setLoop: function(e) {
    if (this.hasPlaybackControl === !1) {
      console.warn("THREE.Audio: this Audio has no playback control.");
      return;
    }
    return this.loop = e, this.isPlaying === !0 && (this.source.loop = this.loop), this;
  },
  setLoopStart: function(e) {
    return this.loopStart = e, this;
  },
  setLoopEnd: function(e) {
    return this.loopEnd = e, this;
  },
  getVolume: function() {
    return this.gain.gain.value;
  },
  setVolume: function(e) {
    return this.gain.gain.setTargetAtTime(e, this.context.currentTime, 0.01), this;
  }
});
var Kn = new b(), Kc = new Tt(), Bg = new b(), er = new b();
function eu(e) {
  ra.call(this, e), this.panner = this.context.createPanner(), this.panner.panningModel = "HRTF", this.panner.connect(this.gain);
}
eu.prototype = Object.assign(Object.create(ra.prototype), {
  constructor: eu,
  getOutput: function() {
    return this.panner;
  },
  getRefDistance: function() {
    return this.panner.refDistance;
  },
  setRefDistance: function(e) {
    return this.panner.refDistance = e, this;
  },
  getRolloffFactor: function() {
    return this.panner.rolloffFactor;
  },
  setRolloffFactor: function(e) {
    return this.panner.rolloffFactor = e, this;
  },
  getDistanceModel: function() {
    return this.panner.distanceModel;
  },
  setDistanceModel: function(e) {
    return this.panner.distanceModel = e, this;
  },
  getMaxDistance: function() {
    return this.panner.maxDistance;
  },
  setMaxDistance: function(e) {
    return this.panner.maxDistance = e, this;
  },
  setDirectionalCone: function(e, t, n) {
    return this.panner.coneInnerAngle = e, this.panner.coneOuterAngle = t, this.panner.coneOuterGain = n, this;
  },
  updateMatrixWorld: function(e) {
    if (K.prototype.updateMatrixWorld.call(this, e), !(this.hasPlaybackControl === !0 && this.isPlaying === !1)) {
      this.matrixWorld.decompose(Kn, Kc, Bg), er.set(0, 0, 1).applyQuaternion(Kc);
      var t = this.panner;
      if (t.positionX) {
        var n = this.context.currentTime + this.listener.timeDelta;
        t.positionX.linearRampToValueAtTime(Kn.x, n), t.positionY.linearRampToValueAtTime(Kn.y, n), t.positionZ.linearRampToValueAtTime(Kn.z, n), t.orientationX.linearRampToValueAtTime(er.x, n), t.orientationY.linearRampToValueAtTime(er.y, n), t.orientationZ.linearRampToValueAtTime(er.z, n);
      } else
        t.setPosition(Kn.x, Kn.y, Kn.z), t.setOrientation(er.x, er.y, er.z);
    }
  }
});
function sh(e, t) {
  this.analyser = e.context.createAnalyser(), this.analyser.fftSize = t !== void 0 ? t : 2048, this.data = new Uint8Array(this.analyser.frequencyBinCount), e.getOutput().connect(this.analyser);
}
Object.assign(sh.prototype, {
  getFrequencyData: function() {
    return this.analyser.getByteFrequencyData(this.data), this.data;
  },
  getAverageFrequency: function() {
    for (var e = 0, t = this.getFrequencyData(), n = 0; n < t.length; n++)
      e += t[n];
    return e / t.length;
  }
});
function oh(e, t, n) {
  this.binding = e, this.valueSize = n;
  var r = Float64Array, i;
  switch (t) {
    case "quaternion":
      i = this._slerp;
      break;
    case "string":
    case "bool":
      r = Array, i = this._select;
      break;
    default:
      i = this._lerp;
  }
  this.buffer = new r(n * 4), this._mixBufferRegion = i, this.cumulativeWeight = 0, this.useCount = 0, this.referenceCount = 0;
}
Object.assign(oh.prototype, {
  // accumulate data in the 'incoming' region into 'accu<i>'
  accumulate: function(e, t) {
    var n = this.buffer, r = this.valueSize, i = e * r + r, a = this.cumulativeWeight;
    if (a === 0) {
      for (var s = 0; s !== r; ++s)
        n[i + s] = n[s];
      a = t;
    } else {
      a += t;
      var o = t / a;
      this._mixBufferRegion(n, i, 0, o, r);
    }
    this.cumulativeWeight = a;
  },
  // apply the state of 'accu<i>' to the binding when accus differ
  apply: function(e) {
    var t = this.valueSize, n = this.buffer, r = e * t + t, i = this.cumulativeWeight, a = this.binding;
    if (this.cumulativeWeight = 0, i < 1) {
      var s = t * 3;
      this._mixBufferRegion(
        n,
        r,
        s,
        1 - i,
        t
      );
    }
    for (var o = t, l = t + t; o !== l; ++o)
      if (n[o] !== n[o + t]) {
        a.setValue(n, r);
        break;
      }
  },
  // remember the state of the bound property and copy it to both accus
  saveOriginalState: function() {
    var e = this.binding, t = this.buffer, n = this.valueSize, r = n * 3;
    e.getValue(t, r);
    for (var i = n, a = r; i !== a; ++i)
      t[i] = t[r + i % n];
    this.cumulativeWeight = 0;
  },
  // apply the state previously taken via 'saveOriginalState' to the binding
  restoreOriginalState: function() {
    var e = this.valueSize * 3;
    this.binding.setValue(this.buffer, e);
  },
  // mix functions
  _select: function(e, t, n, r, i) {
    if (r >= 0.5)
      for (var a = 0; a !== i; ++a)
        e[t + a] = e[n + a];
  },
  _slerp: function(e, t, n, r) {
    Tt.slerpFlat(e, t, e, t, e, n, r);
  },
  _lerp: function(e, t, n, r, i) {
    for (var a = 1 - r, s = 0; s !== i; ++s) {
      var o = t + s;
      e[o] = e[o] * a + e[n + s] * r;
    }
  }
});
var Il = "\\[\\]\\.:\\/", zg = new RegExp("[" + Il + "]", "g"), Ol = "[^" + Il + "]", Ug = "[^" + Il.replace("\\.", "") + "]", Gg = /((?:WC+[\/:])*)/.source.replace("WC", Ol), Vg = /(WCOD+)?/.source.replace("WCOD", Ug), Hg = /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", Ol), kg = /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", Ol), Wg = new RegExp(
  "^" + Gg + Vg + Hg + kg + "$"
), jg = ["material", "materials", "bones"];
function lh(e, t, n) {
  var r = n || bt.parseTrackName(t);
  this._targetGroup = e, this._bindings = e.subscribe_(t, r);
}
Object.assign(lh.prototype, {
  getValue: function(e, t) {
    this.bind();
    var n = this._targetGroup.nCachedObjects_, r = this._bindings[n];
    r !== void 0 && r.getValue(e, t);
  },
  setValue: function(e, t) {
    for (var n = this._bindings, r = this._targetGroup.nCachedObjects_, i = n.length; r !== i; ++r)
      n[r].setValue(e, t);
  },
  bind: function() {
    for (var e = this._bindings, t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t)
      e[t].bind();
  },
  unbind: function() {
    for (var e = this._bindings, t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t)
      e[t].unbind();
  }
});
function bt(e, t, n) {
  this.path = t, this.parsedPath = n || bt.parseTrackName(t), this.node = bt.findNode(e, this.parsedPath.nodeName) || e, this.rootNode = e;
}
Object.assign(bt, {
  Composite: lh,
  create: function(e, t, n) {
    return e && e.isAnimationObjectGroup ? new bt.Composite(e, t, n) : new bt(e, t, n);
  },
  /**
   * Replaces spaces with underscores and removes unsupported characters from
   * node names, to ensure compatibility with parseTrackName().
   *
   * @param {string} name Node name to be sanitized.
   * @return {string}
   */
  sanitizeNodeName: function(e) {
    return e.replace(/\s/g, "_").replace(zg, "");
  },
  parseTrackName: function(e) {
    var t = Wg.exec(e);
    if (!t)
      throw new Error("PropertyBinding: Cannot parse trackName: " + e);
    var n = {
      // directoryName: matches[ 1 ], // (tschw) currently unused
      nodeName: t[2],
      objectName: t[3],
      objectIndex: t[4],
      propertyName: t[5],
      // required
      propertyIndex: t[6]
    }, r = n.nodeName && n.nodeName.lastIndexOf(".");
    if (r !== void 0 && r !== -1) {
      var i = n.nodeName.substring(r + 1);
      jg.indexOf(i) !== -1 && (n.nodeName = n.nodeName.substring(0, r), n.objectName = i);
    }
    if (n.propertyName === null || n.propertyName.length === 0)
      throw new Error("PropertyBinding: can not parse propertyName from trackName: " + e);
    return n;
  },
  findNode: function(e, t) {
    if (!t || t === "" || t === "root" || t === "." || t === -1 || t === e.name || t === e.uuid)
      return e;
    if (e.skeleton) {
      var n = e.skeleton.getBoneByName(t);
      if (n !== void 0)
        return n;
    }
    if (e.children) {
      var r = function(a) {
        for (var s = 0; s < a.length; s++) {
          var o = a[s];
          if (o.name === t || o.uuid === t)
            return o;
          var l = r(o.children);
          if (l) return l;
        }
        return null;
      }, i = r(e.children);
      if (i)
        return i;
    }
    return null;
  }
});
Object.assign(bt.prototype, {
  // prototype, continued
  // these are used to "bind" a nonexistent property
  _getValue_unavailable: function() {
  },
  _setValue_unavailable: function() {
  },
  BindingType: {
    Direct: 0,
    EntireArray: 1,
    ArrayElement: 2,
    HasFromToArray: 3
  },
  Versioning: {
    None: 0,
    NeedsUpdate: 1,
    MatrixWorldNeedsUpdate: 2
  },
  GetterByBindingType: [
    function(t, n) {
      t[n] = this.node[this.propertyName];
    },
    function(t, n) {
      for (var r = this.resolvedProperty, i = 0, a = r.length; i !== a; ++i)
        t[n++] = r[i];
    },
    function(t, n) {
      t[n] = this.resolvedProperty[this.propertyIndex];
    },
    function(t, n) {
      this.resolvedProperty.toArray(t, n);
    }
  ],
  SetterByBindingTypeAndVersioning: [
    [
      // Direct
      function(t, n) {
        this.targetObject[this.propertyName] = t[n];
      },
      function(t, n) {
        this.targetObject[this.propertyName] = t[n], this.targetObject.needsUpdate = !0;
      },
      function(t, n) {
        this.targetObject[this.propertyName] = t[n], this.targetObject.matrixWorldNeedsUpdate = !0;
      }
    ],
    [
      // EntireArray
      function(t, n) {
        for (var r = this.resolvedProperty, i = 0, a = r.length; i !== a; ++i)
          r[i] = t[n++];
      },
      function(t, n) {
        for (var r = this.resolvedProperty, i = 0, a = r.length; i !== a; ++i)
          r[i] = t[n++];
        this.targetObject.needsUpdate = !0;
      },
      function(t, n) {
        for (var r = this.resolvedProperty, i = 0, a = r.length; i !== a; ++i)
          r[i] = t[n++];
        this.targetObject.matrixWorldNeedsUpdate = !0;
      }
    ],
    [
      // ArrayElement
      function(t, n) {
        this.resolvedProperty[this.propertyIndex] = t[n];
      },
      function(t, n) {
        this.resolvedProperty[this.propertyIndex] = t[n], this.targetObject.needsUpdate = !0;
      },
      function(t, n) {
        this.resolvedProperty[this.propertyIndex] = t[n], this.targetObject.matrixWorldNeedsUpdate = !0;
      }
    ],
    [
      // HasToFromArray
      function(t, n) {
        this.resolvedProperty.fromArray(t, n);
      },
      function(t, n) {
        this.resolvedProperty.fromArray(t, n), this.targetObject.needsUpdate = !0;
      },
      function(t, n) {
        this.resolvedProperty.fromArray(t, n), this.targetObject.matrixWorldNeedsUpdate = !0;
      }
    ]
  ],
  getValue: function(t, n) {
    this.bind(), this.getValue(t, n);
  },
  setValue: function(t, n) {
    this.bind(), this.setValue(t, n);
  },
  // create getter / setter pair for a property in the scene graph
  bind: function() {
    var e = this.node, t = this.parsedPath, n = t.objectName, r = t.propertyName, i = t.propertyIndex;
    if (e || (e = bt.findNode(this.rootNode, t.nodeName) || this.rootNode, this.node = e), this.getValue = this._getValue_unavailable, this.setValue = this._setValue_unavailable, !e) {
      console.error("THREE.PropertyBinding: Trying to update node for track: " + this.path + " but it wasn't found.");
      return;
    }
    if (n) {
      var a = t.objectIndex;
      switch (n) {
        case "materials":
          if (!e.material) {
            console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this);
            return;
          }
          if (!e.material.materials) {
            console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.", this);
            return;
          }
          e = e.material.materials;
          break;
        case "bones":
          if (!e.skeleton) {
            console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.", this);
            return;
          }
          e = e.skeleton.bones;
          for (var s = 0; s < e.length; s++)
            if (e[s].name === a) {
              a = s;
              break;
            }
          break;
        default:
          if (e[n] === void 0) {
            console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.", this);
            return;
          }
          e = e[n];
      }
      if (a !== void 0) {
        if (e[a] === void 0) {
          console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.", this, e);
          return;
        }
        e = e[a];
      }
    }
    var o = e[r];
    if (o === void 0) {
      var l = t.nodeName;
      console.error("THREE.PropertyBinding: Trying to update property for track: " + l + "." + r + " but it wasn't found.", e);
      return;
    }
    var c = this.Versioning.None;
    this.targetObject = e, e.needsUpdate !== void 0 ? c = this.Versioning.NeedsUpdate : e.matrixWorldNeedsUpdate !== void 0 && (c = this.Versioning.MatrixWorldNeedsUpdate);
    var u = this.BindingType.Direct;
    if (i !== void 0) {
      if (r === "morphTargetInfluences") {
        if (!e.geometry) {
          console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.", this);
          return;
        }
        if (e.geometry.isBufferGeometry) {
          if (!e.geometry.morphAttributes) {
            console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.", this);
            return;
          }
          for (var s = 0; s < this.node.geometry.morphAttributes.position.length; s++)
            if (e.geometry.morphAttributes.position[s].name === i) {
              i = s;
              break;
            }
        } else {
          if (!e.geometry.morphTargets) {
            console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphTargets.", this);
            return;
          }
          for (var s = 0; s < this.node.geometry.morphTargets.length; s++)
            if (e.geometry.morphTargets[s].name === i) {
              i = s;
              break;
            }
        }
      }
      u = this.BindingType.ArrayElement, this.resolvedProperty = o, this.propertyIndex = i;
    } else o.fromArray !== void 0 && o.toArray !== void 0 ? (u = this.BindingType.HasFromToArray, this.resolvedProperty = o) : Array.isArray(o) ? (u = this.BindingType.EntireArray, this.resolvedProperty = o) : this.propertyName = r;
    this.getValue = this.GetterByBindingType[u], this.setValue = this.SetterByBindingTypeAndVersioning[u][c];
  },
  unbind: function() {
    this.node = null, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
  }
});
//!\ DECLARE ALIAS AFTER assign prototype !
Object.assign(bt.prototype, {
  // initial state of these methods that calls 'bind'
  _getValue_unbound: bt.prototype.getValue,
  _setValue_unbound: bt.prototype.setValue
});
function qg() {
  this.uuid = Ae.generateUUID(), this._objects = Array.prototype.slice.call(arguments), this.nCachedObjects_ = 0;
  var e = {};
  this._indicesByUUID = e;
  for (var t = 0, n = arguments.length; t !== n; ++t)
    e[arguments[t].uuid] = t;
  this._paths = [], this._parsedPaths = [], this._bindings = [], this._bindingsIndicesByPath = {};
  var r = this;
  this.stats = {
    objects: {
      get total() {
        return r._objects.length;
      },
      get inUse() {
        return this.total - r.nCachedObjects_;
      }
    },
    get bindingsPerObject() {
      return r._bindings.length;
    }
  };
}
Object.assign(qg.prototype, {
  isAnimationObjectGroup: !0,
  add: function() {
    for (var e = this._objects, t = e.length, n = this.nCachedObjects_, r = this._indicesByUUID, i = this._paths, a = this._parsedPaths, s = this._bindings, o = s.length, l = void 0, c = 0, u = arguments.length; c !== u; ++c) {
      var h = arguments[c], f = h.uuid, d = r[f];
      if (d === void 0) {
        d = t++, r[f] = d, e.push(h);
        for (var p = 0, v = o; p !== v; ++p)
          s[p].push(new bt(h, i[p], a[p]));
      } else if (d < n) {
        l = e[d];
        var m = --n, y = e[m];
        r[y.uuid] = d, e[d] = y, r[f] = m, e[m] = h;
        for (var p = 0, v = o; p !== v; ++p) {
          var x = s[p], M = x[m], E = x[d];
          x[d] = M, E === void 0 && (E = new bt(h, i[p], a[p])), x[m] = E;
        }
      } else e[d] !== l && console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.");
    }
    this.nCachedObjects_ = n;
  },
  remove: function() {
    for (var e = this._objects, t = this.nCachedObjects_, n = this._indicesByUUID, r = this._bindings, i = r.length, a = 0, s = arguments.length; a !== s; ++a) {
      var o = arguments[a], l = o.uuid, c = n[l];
      if (c !== void 0 && c >= t) {
        var u = t++, h = e[u];
        n[h.uuid] = c, e[c] = h, n[l] = u, e[u] = o;
        for (var f = 0, d = i; f !== d; ++f) {
          var p = r[f], v = p[u], m = p[c];
          p[c] = v, p[u] = m;
        }
      }
    }
    this.nCachedObjects_ = t;
  },
  // remove & forget
  uncache: function() {
    for (var e = this._objects, t = e.length, n = this.nCachedObjects_, r = this._indicesByUUID, i = this._bindings, a = i.length, s = 0, o = arguments.length; s !== o; ++s) {
      var l = arguments[s], c = l.uuid, u = r[c];
      if (u !== void 0)
        if (delete r[c], u < n) {
          var h = --n, f = e[h], d = --t, p = e[d];
          r[f.uuid] = u, e[u] = f, r[p.uuid] = h, e[h] = p, e.pop();
          for (var v = 0, m = a; v !== m; ++v) {
            var y = i[v], x = y[h], M = y[d];
            y[u] = x, y[h] = M, y.pop();
          }
        } else {
          var d = --t, p = e[d];
          r[p.uuid] = u, e[u] = p, e.pop();
          for (var v = 0, m = a; v !== m; ++v) {
            var y = i[v];
            y[u] = y[d], y.pop();
          }
        }
    }
    this.nCachedObjects_ = n;
  },
  // Internal interface used by befriended PropertyBinding.Composite:
  subscribe_: function(e, t) {
    var n = this._bindingsIndicesByPath, r = n[e], i = this._bindings;
    if (r !== void 0) return i[r];
    var a = this._paths, s = this._parsedPaths, o = this._objects, l = o.length, c = this.nCachedObjects_, u = new Array(l);
    r = i.length, n[e] = r, a.push(e), s.push(t), i.push(u);
    for (var h = c, f = o.length; h !== f; ++h) {
      var d = o[h];
      u[h] = new bt(d, e, t);
    }
    return u;
  },
  unsubscribe_: function(e) {
    var t = this._bindingsIndicesByPath, n = t[e];
    if (n !== void 0) {
      var r = this._paths, i = this._parsedPaths, a = this._bindings, s = a.length - 1, o = a[s], l = e[s];
      t[l] = n, a[n] = o, a.pop(), i[n] = i[s], i.pop(), r[n] = r[s], r.pop();
    }
  }
});
function ch(e, t, n) {
  this._mixer = e, this._clip = t, this._localRoot = n || null;
  for (var r = t.tracks, i = r.length, a = new Array(i), s = {
    endingStart: Hr,
    endingEnd: Hr
  }, o = 0; o !== i; ++o) {
    var l = r[o].createInterpolant(null);
    a[o] = l, l.settings = s;
  }
  this._interpolantSettings = s, this._interpolants = a, this._propertyBindings = new Array(i), this._cacheIndex = null, this._byClipCacheIndex = null, this._timeScaleInterpolant = null, this._weightInterpolant = null, this.loop = Vf, this._loopCount = -1, this._startTime = null, this.time = 0, this.timeScale = 1, this._effectiveTimeScale = 1, this.weight = 1, this._effectiveWeight = 1, this.repetitions = 1 / 0, this.paused = !1, this.enabled = !0, this.clampWhenFinished = !1, this.zeroSlopeAtStart = !0, this.zeroSlopeAtEnd = !0;
}
Object.assign(ch.prototype, {
  // State & Scheduling
  play: function() {
    return this._mixer._activateAction(this), this;
  },
  stop: function() {
    return this._mixer._deactivateAction(this), this.reset();
  },
  reset: function() {
    return this.paused = !1, this.enabled = !0, this.time = 0, this._loopCount = -1, this._startTime = null, this.stopFading().stopWarping();
  },
  isRunning: function() {
    return this.enabled && !this.paused && this.timeScale !== 0 && this._startTime === null && this._mixer._isActiveAction(this);
  },
  // return true when play has been called
  isScheduled: function() {
    return this._mixer._isActiveAction(this);
  },
  startAt: function(e) {
    return this._startTime = e, this;
  },
  setLoop: function(e, t) {
    return this.loop = e, this.repetitions = t, this;
  },
  // Weight
  // set the weight stopping any scheduled fading
  // although .enabled = false yields an effective weight of zero, this
  // method does *not* change .enabled, because it would be confusing
  setEffectiveWeight: function(e) {
    return this.weight = e, this._effectiveWeight = this.enabled ? e : 0, this.stopFading();
  },
  // return the weight considering fading and .enabled
  getEffectiveWeight: function() {
    return this._effectiveWeight;
  },
  fadeIn: function(e) {
    return this._scheduleFading(e, 0, 1);
  },
  fadeOut: function(e) {
    return this._scheduleFading(e, 1, 0);
  },
  crossFadeFrom: function(e, t, n) {
    if (e.fadeOut(t), this.fadeIn(t), n) {
      var r = this._clip.duration, i = e._clip.duration, a = i / r, s = r / i;
      e.warp(1, a, t), this.warp(s, 1, t);
    }
    return this;
  },
  crossFadeTo: function(e, t, n) {
    return e.crossFadeFrom(this, t, n);
  },
  stopFading: function() {
    var e = this._weightInterpolant;
    return e !== null && (this._weightInterpolant = null, this._mixer._takeBackControlInterpolant(e)), this;
  },
  // Time Scale Control
  // set the time scale stopping any scheduled warping
  // although .paused = true yields an effective time scale of zero, this
  // method does *not* change .paused, because it would be confusing
  setEffectiveTimeScale: function(e) {
    return this.timeScale = e, this._effectiveTimeScale = this.paused ? 0 : e, this.stopWarping();
  },
  // return the time scale considering warping and .paused
  getEffectiveTimeScale: function() {
    return this._effectiveTimeScale;
  },
  setDuration: function(e) {
    return this.timeScale = this._clip.duration / e, this.stopWarping();
  },
  syncWith: function(e) {
    return this.time = e.time, this.timeScale = e.timeScale, this.stopWarping();
  },
  halt: function(e) {
    return this.warp(this._effectiveTimeScale, 0, e);
  },
  warp: function(e, t, n) {
    var r = this._mixer, i = r.time, a = this._timeScaleInterpolant, s = this.timeScale;
    a === null && (a = r._lendControlInterpolant(), this._timeScaleInterpolant = a);
    var o = a.parameterPositions, l = a.sampleValues;
    return o[0] = i, o[1] = i + n, l[0] = e / s, l[1] = t / s, this;
  },
  stopWarping: function() {
    var e = this._timeScaleInterpolant;
    return e !== null && (this._timeScaleInterpolant = null, this._mixer._takeBackControlInterpolant(e)), this;
  },
  // Object Accessors
  getMixer: function() {
    return this._mixer;
  },
  getClip: function() {
    return this._clip;
  },
  getRoot: function() {
    return this._localRoot || this._mixer._root;
  },
  // Interna
  _update: function(e, t, n, r) {
    if (!this.enabled) {
      this._updateWeight(e);
      return;
    }
    var i = this._startTime;
    if (i !== null) {
      var a = (e - i) * n;
      if (a < 0 || n === 0)
        return;
      this._startTime = null, t = n * a;
    }
    t *= this._updateTimeScale(e);
    var s = this._updateTime(t), o = this._updateWeight(e);
    if (o > 0)
      for (var l = this._interpolants, c = this._propertyBindings, u = 0, h = l.length; u !== h; ++u)
        l[u].evaluate(s), c[u].accumulate(r, o);
  },
  _updateWeight: function(e) {
    var t = 0;
    if (this.enabled) {
      t = this.weight;
      var n = this._weightInterpolant;
      if (n !== null) {
        var r = n.evaluate(e)[0];
        t *= r, e > n.parameterPositions[1] && (this.stopFading(), r === 0 && (this.enabled = !1));
      }
    }
    return this._effectiveWeight = t, t;
  },
  _updateTimeScale: function(e) {
    var t = 0;
    if (!this.paused) {
      t = this.timeScale;
      var n = this._timeScaleInterpolant;
      if (n !== null) {
        var r = n.evaluate(e)[0];
        t *= r, e > n.parameterPositions[1] && (this.stopWarping(), t === 0 ? this.paused = !0 : this.timeScale = t);
      }
    }
    return this._effectiveTimeScale = t, t;
  },
  _updateTime: function(e) {
    var t = this.time + e, n = this._clip.duration, r = this.loop, i = this._loopCount, a = r === Hf;
    if (e === 0)
      return i === -1 ? t : a && (i & 1) === 1 ? n - t : t;
    if (r === Gf) {
      i === -1 && (this._loopCount = 0, this._setEndings(!0, !0, !1));
      e: {
        if (t >= n)
          t = n;
        else if (t < 0)
          t = 0;
        else {
          this.time = t;
          break e;
        }
        this.clampWhenFinished ? this.paused = !0 : this.enabled = !1, this.time = t, this._mixer.dispatchEvent({
          type: "finished",
          action: this,
          direction: e < 0 ? -1 : 1
        });
      }
    } else {
      if (i === -1 && (e >= 0 ? (i = 0, this._setEndings(!0, this.repetitions === 0, a)) : this._setEndings(this.repetitions === 0, !0, a)), t >= n || t < 0) {
        var s = Math.floor(t / n);
        t -= n * s, i += Math.abs(s);
        var o = this.repetitions - i;
        if (o <= 0)
          this.clampWhenFinished ? this.paused = !0 : this.enabled = !1, t = e > 0 ? n : 0, this.time = t, this._mixer.dispatchEvent({
            type: "finished",
            action: this,
            direction: e > 0 ? 1 : -1
          });
        else {
          if (o === 1) {
            var l = e < 0;
            this._setEndings(l, !l, a);
          } else
            this._setEndings(!1, !1, a);
          this._loopCount = i, this.time = t, this._mixer.dispatchEvent({
            type: "loop",
            action: this,
            loopDelta: s
          });
        }
      } else
        this.time = t;
      if (a && (i & 1) === 1)
        return n - t;
    }
    return t;
  },
  _setEndings: function(e, t, n) {
    var r = this._interpolantSettings;
    n ? (r.endingStart = Nr, r.endingEnd = Nr) : (e ? r.endingStart = this.zeroSlopeAtStart ? Nr : Hr : r.endingStart = is, t ? r.endingEnd = this.zeroSlopeAtEnd ? Nr : Hr : r.endingEnd = is);
  },
  _scheduleFading: function(e, t, n) {
    var r = this._mixer, i = r.time, a = this._weightInterpolant;
    a === null && (a = r._lendControlInterpolant(), this._weightInterpolant = a);
    var s = a.parameterPositions, o = a.sampleValues;
    return s[0] = i, o[0] = t, s[1] = i + e, o[1] = n, this;
  }
});
function tu(e) {
  this._root = e, this._initMemoryManager(), this._accuIndex = 0, this.time = 0, this.timeScale = 1;
}
tu.prototype = Object.assign(Object.create(En.prototype), {
  constructor: tu,
  _bindAction: function(e, t) {
    var n = e._localRoot || this._root, r = e._clip.tracks, i = r.length, a = e._propertyBindings, s = e._interpolants, o = n.uuid, l = this._bindingsByRootAndName, c = l[o];
    c === void 0 && (c = {}, l[o] = c);
    for (var u = 0; u !== i; ++u) {
      var h = r[u], f = h.name, d = c[f];
      if (d !== void 0)
        a[u] = d;
      else {
        if (d = a[u], d !== void 0) {
          d._cacheIndex === null && (++d.referenceCount, this._addInactiveBinding(d, o, f));
          continue;
        }
        var p = t && t._propertyBindings[u].binding.parsedPath;
        d = new oh(
          bt.create(n, f, p),
          h.ValueTypeName,
          h.getValueSize()
        ), ++d.referenceCount, this._addInactiveBinding(d, o, f), a[u] = d;
      }
      s[u].resultBuffer = d.buffer;
    }
  },
  _activateAction: function(e) {
    if (!this._isActiveAction(e)) {
      if (e._cacheIndex === null) {
        var t = (e._localRoot || this._root).uuid, n = e._clip.uuid, r = this._actionsByClip[n];
        this._bindAction(
          e,
          r && r.knownActions[0]
        ), this._addInactiveAction(e, n, t);
      }
      for (var i = e._propertyBindings, a = 0, s = i.length; a !== s; ++a) {
        var o = i[a];
        o.useCount++ === 0 && (this._lendBinding(o), o.saveOriginalState());
      }
      this._lendAction(e);
    }
  },
  _deactivateAction: function(e) {
    if (this._isActiveAction(e)) {
      for (var t = e._propertyBindings, n = 0, r = t.length; n !== r; ++n) {
        var i = t[n];
        --i.useCount === 0 && (i.restoreOriginalState(), this._takeBackBinding(i));
      }
      this._takeBackAction(e);
    }
  },
  // Memory manager
  _initMemoryManager: function() {
    this._actions = [], this._nActiveActions = 0, this._actionsByClip = {}, this._bindings = [], this._nActiveBindings = 0, this._bindingsByRootAndName = {}, this._controlInterpolants = [], this._nActiveControlInterpolants = 0;
    var e = this;
    this.stats = {
      actions: {
        get total() {
          return e._actions.length;
        },
        get inUse() {
          return e._nActiveActions;
        }
      },
      bindings: {
        get total() {
          return e._bindings.length;
        },
        get inUse() {
          return e._nActiveBindings;
        }
      },
      controlInterpolants: {
        get total() {
          return e._controlInterpolants.length;
        },
        get inUse() {
          return e._nActiveControlInterpolants;
        }
      }
    };
  },
  // Memory management for AnimationAction objects
  _isActiveAction: function(e) {
    var t = e._cacheIndex;
    return t !== null && t < this._nActiveActions;
  },
  _addInactiveAction: function(e, t, n) {
    var r = this._actions, i = this._actionsByClip, a = i[t];
    if (a === void 0)
      a = {
        knownActions: [e],
        actionByRoot: {}
      }, e._byClipCacheIndex = 0, i[t] = a;
    else {
      var s = a.knownActions;
      e._byClipCacheIndex = s.length, s.push(e);
    }
    e._cacheIndex = r.length, r.push(e), a.actionByRoot[n] = e;
  },
  _removeInactiveAction: function(e) {
    var t = this._actions, n = t[t.length - 1], r = e._cacheIndex;
    n._cacheIndex = r, t[r] = n, t.pop(), e._cacheIndex = null;
    var i = e._clip.uuid, a = this._actionsByClip, s = a[i], o = s.knownActions, l = o[o.length - 1], c = e._byClipCacheIndex;
    l._byClipCacheIndex = c, o[c] = l, o.pop(), e._byClipCacheIndex = null;
    var u = s.actionByRoot, h = (e._localRoot || this._root).uuid;
    delete u[h], o.length === 0 && delete a[i], this._removeInactiveBindingsForAction(e);
  },
  _removeInactiveBindingsForAction: function(e) {
    for (var t = e._propertyBindings, n = 0, r = t.length; n !== r; ++n) {
      var i = t[n];
      --i.referenceCount === 0 && this._removeInactiveBinding(i);
    }
  },
  _lendAction: function(e) {
    var t = this._actions, n = e._cacheIndex, r = this._nActiveActions++, i = t[r];
    e._cacheIndex = r, t[r] = e, i._cacheIndex = n, t[n] = i;
  },
  _takeBackAction: function(e) {
    var t = this._actions, n = e._cacheIndex, r = --this._nActiveActions, i = t[r];
    e._cacheIndex = r, t[r] = e, i._cacheIndex = n, t[n] = i;
  },
  // Memory management for PropertyMixer objects
  _addInactiveBinding: function(e, t, n) {
    var r = this._bindingsByRootAndName, i = r[t], a = this._bindings;
    i === void 0 && (i = {}, r[t] = i), i[n] = e, e._cacheIndex = a.length, a.push(e);
  },
  _removeInactiveBinding: function(e) {
    var t = this._bindings, n = e.binding, r = n.rootNode.uuid, i = n.path, a = this._bindingsByRootAndName, s = a[r], o = t[t.length - 1], l = e._cacheIndex;
    o._cacheIndex = l, t[l] = o, t.pop(), delete s[i], Object.keys(s).length === 0 && delete a[r];
  },
  _lendBinding: function(e) {
    var t = this._bindings, n = e._cacheIndex, r = this._nActiveBindings++, i = t[r];
    e._cacheIndex = r, t[r] = e, i._cacheIndex = n, t[n] = i;
  },
  _takeBackBinding: function(e) {
    var t = this._bindings, n = e._cacheIndex, r = --this._nActiveBindings, i = t[r];
    e._cacheIndex = r, t[r] = e, i._cacheIndex = n, t[n] = i;
  },
  // Memory management of Interpolants for weight and time scale
  _lendControlInterpolant: function() {
    var e = this._controlInterpolants, t = this._nActiveControlInterpolants++, n = e[t];
    return n === void 0 && (n = new Rs(
      new Float32Array(2),
      new Float32Array(2),
      1,
      this._controlInterpolantsResultBuffer
    ), n.__cacheIndex = t, e[t] = n), n;
  },
  _takeBackControlInterpolant: function(e) {
    var t = this._controlInterpolants, n = e.__cacheIndex, r = --this._nActiveControlInterpolants, i = t[r];
    e.__cacheIndex = r, t[r] = e, i.__cacheIndex = n, t[n] = i;
  },
  _controlInterpolantsResultBuffer: new Float32Array(1),
  // return an action for a clip optionally using a custom root target
  // object (this method allocates a lot of dynamic memory in case a
  // previously unknown clip/root combination is specified)
  clipAction: function(e, t) {
    var n = t || this._root, r = n.uuid, i = typeof e == "string" ? Yt.findByName(n, e) : e, a = i !== null ? i.uuid : e, s = this._actionsByClip[a], o = null;
    if (s !== void 0) {
      var l = s.actionByRoot[r];
      if (l !== void 0)
        return l;
      o = s.knownActions[0], i === null && (i = o._clip);
    }
    if (i === null) return null;
    var c = new ch(this, i, t);
    return this._bindAction(c, o), this._addInactiveAction(c, a, r), c;
  },
  // get an existing action
  existingAction: function(e, t) {
    var n = t || this._root, r = n.uuid, i = typeof e == "string" ? Yt.findByName(n, e) : e, a = i ? i.uuid : e, s = this._actionsByClip[a];
    return s !== void 0 && s.actionByRoot[r] || null;
  },
  // deactivates all previously scheduled actions
  stopAllAction: function() {
    var e = this._actions, t = this._nActiveActions, n = this._bindings, r = this._nActiveBindings;
    this._nActiveActions = 0, this._nActiveBindings = 0;
    for (var i = 0; i !== t; ++i)
      e[i].reset();
    for (var i = 0; i !== r; ++i)
      n[i].useCount = 0;
    return this;
  },
  // advance the time and update apply the animation
  update: function(e) {
    e *= this.timeScale;
    for (var t = this._actions, n = this._nActiveActions, r = this.time += e, i = Math.sign(e), a = this._accuIndex ^= 1, s = 0; s !== n; ++s) {
      var o = t[s];
      o._update(r, e, i, a);
    }
    for (var l = this._bindings, c = this._nActiveBindings, s = 0; s !== c; ++s)
      l[s].apply(a);
    return this;
  },
  // Allows you to seek to a specific time in an animation.
  setTime: function(e) {
    this.time = 0;
    for (var t = 0; t < this._actions.length; t++)
      this._actions[t].time = 0;
    return this.update(e);
  },
  // return this mixer's root target object
  getRoot: function() {
    return this._root;
  },
  // free all resources specific to a particular clip
  uncacheClip: function(e) {
    var t = this._actions, n = e.uuid, r = this._actionsByClip, i = r[n];
    if (i !== void 0) {
      for (var a = i.knownActions, s = 0, o = a.length; s !== o; ++s) {
        var l = a[s];
        this._deactivateAction(l);
        var c = l._cacheIndex, u = t[t.length - 1];
        l._cacheIndex = null, l._byClipCacheIndex = null, u._cacheIndex = c, t[c] = u, t.pop(), this._removeInactiveBindingsForAction(l);
      }
      delete r[n];
    }
  },
  // free all resources specific to a particular root target object
  uncacheRoot: function(e) {
    var t = e.uuid, n = this._actionsByClip;
    for (var r in n) {
      var i = n[r].actionByRoot, a = i[t];
      a !== void 0 && (this._deactivateAction(a), this._removeInactiveAction(a));
    }
    var s = this._bindingsByRootAndName, o = s[t];
    if (o !== void 0)
      for (var l in o) {
        var c = o[l];
        c.restoreOriginalState(), this._removeInactiveBinding(c);
      }
  },
  // remove a targeted clip from the cache
  uncacheAction: function(e, t) {
    var n = this.existingAction(e, t);
    n !== null && (this._deactivateAction(n), this._removeInactiveAction(n));
  }
});
function vl(e) {
  typeof e == "string" && (console.warn("THREE.Uniform: Type parameter is no longer needed."), e = arguments[1]), this.value = e;
}
vl.prototype.clone = function() {
  return new vl(this.value.clone === void 0 ? this.value : this.value.clone());
};
function nu(e, t, n) {
  Un.call(this, e, t), this.meshPerAttribute = n || 1;
}
nu.prototype = Object.assign(Object.create(Un.prototype), {
  constructor: nu,
  isInstancedInterleavedBuffer: !0,
  copy: function(e) {
    return Un.prototype.copy.call(this, e), this.meshPerAttribute = e.meshPerAttribute, this;
  }
});
function Xg(e, t, n, r) {
  this.ray = new ui(e, t), this.near = n || 0, this.far = r || 1 / 0, this.camera = null, this.params = {
    Mesh: {},
    Line: {},
    LOD: {},
    Points: { threshold: 1 },
    Sprite: {}
  }, Object.defineProperties(this.params, {
    PointCloud: {
      get: function() {
        return console.warn("THREE.Raycaster: params.PointCloud has been renamed to params.Points."), this.Points;
      }
    }
  });
}
function ru(e, t) {
  return e.distance - t.distance;
}
function ml(e, t, n, r) {
  if (e.visible !== !1 && (e.raycast(t, n), r === !0))
    for (var i = e.children, a = 0, s = i.length; a < s; a++)
      ml(i[a], t, n, !0);
}
Object.assign(Xg.prototype, {
  linePrecision: 1,
  set: function(e, t) {
    this.ray.set(e, t);
  },
  setFromCamera: function(e, t) {
    t && t.isPerspectiveCamera ? (this.ray.origin.setFromMatrixPosition(t.matrixWorld), this.ray.direction.set(e.x, e.y, 0.5).unproject(t).sub(this.ray.origin).normalize(), this.camera = t) : t && t.isOrthographicCamera ? (this.ray.origin.set(e.x, e.y, (t.near + t.far) / (t.near - t.far)).unproject(t), this.ray.direction.set(0, 0, -1).transformDirection(t.matrixWorld), this.camera = t) : console.error("THREE.Raycaster: Unsupported camera type.");
  },
  intersectObject: function(e, t, n) {
    var r = n || [];
    return ml(e, this, r, t), r.sort(ru), r;
  },
  intersectObjects: function(e, t, n) {
    var r = n || [];
    if (Array.isArray(e) === !1)
      return console.warn("THREE.Raycaster.intersectObjects: objects is not an Array."), r;
    for (var i = 0, a = e.length; i < a; i++)
      ml(e[i], this, r, t);
    return r.sort(ru), r;
  }
});
function Yg(e, t, n) {
  return this.radius = e !== void 0 ? e : 1, this.phi = t !== void 0 ? t : 0, this.theta = n !== void 0 ? n : 0, this;
}
Object.assign(Yg.prototype, {
  set: function(e, t, n) {
    return this.radius = e, this.phi = t, this.theta = n, this;
  },
  clone: function() {
    return new this.constructor().copy(this);
  },
  copy: function(e) {
    return this.radius = e.radius, this.phi = e.phi, this.theta = e.theta, this;
  },
  // restrict phi to be betwee EPS and PI-EPS
  makeSafe: function() {
    var e = 1e-6;
    return this.phi = Math.max(e, Math.min(Math.PI - e, this.phi)), this;
  },
  setFromVector3: function(e) {
    return this.setFromCartesianCoords(e.x, e.y, e.z);
  },
  setFromCartesianCoords: function(e, t, n) {
    return this.radius = Math.sqrt(e * e + t * t + n * n), this.radius === 0 ? (this.theta = 0, this.phi = 0) : (this.theta = Math.atan2(e, n), this.phi = Math.acos(Ae.clamp(t / this.radius, -1, 1))), this;
  }
});
function Zg(e, t, n) {
  return this.radius = e !== void 0 ? e : 1, this.theta = t !== void 0 ? t : 0, this.y = n !== void 0 ? n : 0, this;
}
Object.assign(Zg.prototype, {
  set: function(e, t, n) {
    return this.radius = e, this.theta = t, this.y = n, this;
  },
  clone: function() {
    return new this.constructor().copy(this);
  },
  copy: function(e) {
    return this.radius = e.radius, this.theta = e.theta, this.y = e.y, this;
  },
  setFromVector3: function(e) {
    return this.setFromCartesianCoords(e.x, e.y, e.z);
  },
  setFromCartesianCoords: function(e, t, n) {
    return this.radius = Math.sqrt(e * e + n * n), this.theta = Math.atan2(e, n), this.y = t, this;
  }
});
var iu = new G();
function uh(e, t) {
  this.min = e !== void 0 ? e : new G(1 / 0, 1 / 0), this.max = t !== void 0 ? t : new G(-1 / 0, -1 / 0);
}
Object.assign(uh.prototype, {
  set: function(e, t) {
    return this.min.copy(e), this.max.copy(t), this;
  },
  setFromPoints: function(e) {
    this.makeEmpty();
    for (var t = 0, n = e.length; t < n; t++)
      this.expandByPoint(e[t]);
    return this;
  },
  setFromCenterAndSize: function(e, t) {
    var n = iu.copy(t).multiplyScalar(0.5);
    return this.min.copy(e).sub(n), this.max.copy(e).add(n), this;
  },
  clone: function() {
    return new this.constructor().copy(this);
  },
  copy: function(e) {
    return this.min.copy(e.min), this.max.copy(e.max), this;
  },
  makeEmpty: function() {
    return this.min.x = this.min.y = 1 / 0, this.max.x = this.max.y = -1 / 0, this;
  },
  isEmpty: function() {
    return this.max.x < this.min.x || this.max.y < this.min.y;
  },
  getCenter: function(e) {
    return e === void 0 && (console.warn("THREE.Box2: .getCenter() target is now required"), e = new G()), this.isEmpty() ? e.set(0, 0) : e.addVectors(this.min, this.max).multiplyScalar(0.5);
  },
  getSize: function(e) {
    return e === void 0 && (console.warn("THREE.Box2: .getSize() target is now required"), e = new G()), this.isEmpty() ? e.set(0, 0) : e.subVectors(this.max, this.min);
  },
  expandByPoint: function(e) {
    return this.min.min(e), this.max.max(e), this;
  },
  expandByVector: function(e) {
    return this.min.sub(e), this.max.add(e), this;
  },
  expandByScalar: function(e) {
    return this.min.addScalar(-e), this.max.addScalar(e), this;
  },
  containsPoint: function(e) {
    return !(e.x < this.min.x || e.x > this.max.x || e.y < this.min.y || e.y > this.max.y);
  },
  containsBox: function(e) {
    return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y;
  },
  getParameter: function(e, t) {
    return t === void 0 && (console.warn("THREE.Box2: .getParameter() target is now required"), t = new G()), t.set(
      (e.x - this.min.x) / (this.max.x - this.min.x),
      (e.y - this.min.y) / (this.max.y - this.min.y)
    );
  },
  intersectsBox: function(e) {
    return !(e.max.x < this.min.x || e.min.x > this.max.x || e.max.y < this.min.y || e.min.y > this.max.y);
  },
  clampPoint: function(e, t) {
    return t === void 0 && (console.warn("THREE.Box2: .clampPoint() target is now required"), t = new G()), t.copy(e).clamp(this.min, this.max);
  },
  distanceToPoint: function(e) {
    var t = iu.copy(e).clamp(this.min, this.max);
    return t.sub(e).length();
  },
  intersect: function(e) {
    return this.min.max(e.min), this.max.min(e.max), this;
  },
  union: function(e) {
    return this.min.min(e.min), this.max.max(e.max), this;
  },
  translate: function(e) {
    return this.min.add(e), this.max.add(e), this;
  },
  equals: function(e) {
    return e.min.equals(this.min) && e.max.equals(this.max);
  }
});
var au = new b(), Wa = new b();
function hh(e, t) {
  this.start = e !== void 0 ? e : new b(), this.end = t !== void 0 ? t : new b();
}
Object.assign(hh.prototype, {
  set: function(e, t) {
    return this.start.copy(e), this.end.copy(t), this;
  },
  clone: function() {
    return new this.constructor().copy(this);
  },
  copy: function(e) {
    return this.start.copy(e.start), this.end.copy(e.end), this;
  },
  getCenter: function(e) {
    return e === void 0 && (console.warn("THREE.Line3: .getCenter() target is now required"), e = new b()), e.addVectors(this.start, this.end).multiplyScalar(0.5);
  },
  delta: function(e) {
    return e === void 0 && (console.warn("THREE.Line3: .delta() target is now required"), e = new b()), e.subVectors(this.end, this.start);
  },
  distanceSq: function() {
    return this.start.distanceToSquared(this.end);
  },
  distance: function() {
    return this.start.distanceTo(this.end);
  },
  at: function(e, t) {
    return t === void 0 && (console.warn("THREE.Line3: .at() target is now required"), t = new b()), this.delta(t).multiplyScalar(e).add(this.start);
  },
  closestPointToPointParameter: function(e, t) {
    au.subVectors(e, this.start), Wa.subVectors(this.end, this.start);
    var n = Wa.dot(Wa), r = Wa.dot(au), i = r / n;
    return t && (i = Ae.clamp(i, 0, 1)), i;
  },
  closestPointToPoint: function(e, t, n) {
    var r = this.closestPointToPointParameter(e, t);
    return n === void 0 && (console.warn("THREE.Line3: .closestPointToPoint() target is now required"), n = new b()), this.delta(n).multiplyScalar(r).add(this.start);
  },
  applyMatrix4: function(e) {
    return this.start.applyMatrix4(e), this.end.applyMatrix4(e), this;
  },
  equals: function(e) {
    return e.start.equals(this.start) && e.end.equals(this.end);
  }
});
function Ds(e) {
  K.call(this), this.material = e, this.render = function() {
  };
}
Ds.prototype = Object.create(K.prototype);
Ds.prototype.constructor = Ds;
Ds.prototype.isImmediateRenderObject = !0;
var su = new b();
function ia(e, t) {
  K.call(this), this.light = e, this.light.updateMatrixWorld(), this.matrix = e.matrixWorld, this.matrixAutoUpdate = !1, this.color = t;
  for (var n = new ne(), r = [
    0,
    0,
    0,
    0,
    0,
    1,
    0,
    0,
    0,
    1,
    0,
    1,
    0,
    0,
    0,
    -1,
    0,
    1,
    0,
    0,
    0,
    0,
    1,
    1,
    0,
    0,
    0,
    0,
    -1,
    1
  ], i = 0, a = 1, s = 32; i < s; i++, a++) {
    var o = i / s * Math.PI * 2, l = a / s * Math.PI * 2;
    r.push(
      Math.cos(o),
      Math.sin(o),
      1,
      Math.cos(l),
      Math.sin(l),
      1
    );
  }
  n.setAttribute("position", new Q(r, 3));
  var c = new at({ fog: !1 });
  this.cone = new lt(n, c), this.add(this.cone), this.update();
}
ia.prototype = Object.create(K.prototype);
ia.prototype.constructor = ia;
ia.prototype.dispose = function() {
  this.cone.geometry.dispose(), this.cone.material.dispose();
};
ia.prototype.update = function() {
  this.light.updateMatrixWorld();
  var e = this.light.distance ? this.light.distance : 1e3, t = e * Math.tan(this.light.angle);
  this.cone.scale.set(t, t, e), su.setFromMatrixPosition(this.light.target.matrixWorld), this.cone.lookAt(su), this.color !== void 0 ? this.cone.material.color.set(this.color) : this.cone.material.color.copy(this.light.color);
};
var Cn = new b(), ja = new Ce(), wo = new Ce();
function fh(e) {
  var t = [];
  e && e.isBone && t.push(e);
  for (var n = 0; n < e.children.length; n++)
    t.push.apply(t, fh(e.children[n]));
  return t;
}
function aa(e) {
  for (var t = fh(e), n = new ne(), r = [], i = [], a = new ee(0, 0, 1), s = new ee(0, 1, 0), o = 0; o < t.length; o++) {
    var l = t[o];
    l.parent && l.parent.isBone && (r.push(0, 0, 0), r.push(0, 0, 0), i.push(a.r, a.g, a.b), i.push(s.r, s.g, s.b));
  }
  n.setAttribute("position", new Q(r, 3)), n.setAttribute("color", new Q(i, 3));
  var c = new at({ vertexColors: ha, depthTest: !1, depthWrite: !1, transparent: !0 });
  lt.call(this, n, c), this.root = e, this.bones = t, this.matrix = e.matrixWorld, this.matrixAutoUpdate = !1;
}
aa.prototype = Object.create(lt.prototype);
aa.prototype.constructor = aa;
aa.prototype.updateMatrixWorld = function(e) {
  var t = this.bones, n = this.geometry, r = n.getAttribute("position");
  wo.getInverse(this.root.matrixWorld);
  for (var i = 0, a = 0; i < t.length; i++) {
    var s = t[i];
    s.parent && s.parent.isBone && (ja.multiplyMatrices(wo, s.matrixWorld), Cn.setFromMatrixPosition(ja), r.setXYZ(a, Cn.x, Cn.y, Cn.z), ja.multiplyMatrices(wo, s.parent.matrixWorld), Cn.setFromMatrixPosition(ja), r.setXYZ(a + 1, Cn.x, Cn.y, Cn.z), a += 2);
  }
  n.getAttribute("position").needsUpdate = !0, K.prototype.updateMatrixWorld.call(this, e);
};
function sa(e, t, n) {
  this.light = e, this.light.updateMatrixWorld(), this.color = n;
  var r = new Jr(t, 4, 2), i = new Zt({ wireframe: !0, fog: !1 });
  et.call(this, r, i), this.matrix = this.light.matrixWorld, this.matrixAutoUpdate = !1, this.update();
}
sa.prototype = Object.create(et.prototype);
sa.prototype.constructor = sa;
sa.prototype.dispose = function() {
  this.geometry.dispose(), this.material.dispose();
};
sa.prototype.update = function() {
  this.color !== void 0 ? this.material.color.set(this.color) : this.material.color.copy(this.light.color);
};
var Jg = new b(), ou = new ee(), lu = new ee();
function oa(e, t, n) {
  K.call(this), this.light = e, this.light.updateMatrixWorld(), this.matrix = e.matrixWorld, this.matrixAutoUpdate = !1, this.color = n;
  var r = new Xr(t);
  r.rotateY(Math.PI * 0.5), this.material = new Zt({ wireframe: !0, fog: !1 }), this.color === void 0 && (this.material.vertexColors = ha);
  var i = r.getAttribute("position"), a = new Float32Array(i.count * 3);
  r.setAttribute("color", new _e(a, 3)), this.add(new et(r, this.material)), this.update();
}
oa.prototype = Object.create(K.prototype);
oa.prototype.constructor = oa;
oa.prototype.dispose = function() {
  this.children[0].geometry.dispose(), this.children[0].material.dispose();
};
oa.prototype.update = function() {
  var e = this.children[0];
  if (this.color !== void 0)
    this.material.color.set(this.color);
  else {
    var t = e.geometry.getAttribute("color");
    ou.copy(this.light.color), lu.copy(this.light.groundColor);
    for (var n = 0, r = t.count; n < r; n++) {
      var i = n < r / 2 ? ou : lu;
      t.setXYZ(n, i.r, i.g, i.b);
    }
    t.needsUpdate = !0;
  }
  e.lookAt(Jg.setFromMatrixPosition(this.light.matrixWorld).negate());
};
function gl(e, t, n, r) {
  e = e || 10, t = t || 10, n = new ee(n !== void 0 ? n : 4473924), r = new ee(r !== void 0 ? r : 8947848);
  for (var i = t / 2, a = e / t, s = e / 2, o = [], l = [], c = 0, u = 0, h = -s; c <= t; c++, h += a) {
    o.push(-s, 0, h, s, 0, h), o.push(h, 0, -s, h, 0, s);
    var f = c === i ? n : r;
    f.toArray(l, u), u += 3, f.toArray(l, u), u += 3, f.toArray(l, u), u += 3, f.toArray(l, u), u += 3;
  }
  var d = new ne();
  d.setAttribute("position", new Q(o, 3)), d.setAttribute("color", new Q(l, 3));
  var p = new at({ vertexColors: ha });
  lt.call(this, d, p);
}
gl.prototype = Object.assign(Object.create(lt.prototype), {
  constructor: gl,
  copy: function(e) {
    return lt.prototype.copy.call(this, e), this.geometry.copy(e.geometry), this.material.copy(e.material), this;
  },
  clone: function() {
    return new this.constructor().copy(this);
  }
});
function yl(e, t, n, r, i, a) {
  e = e || 10, t = t || 16, n = n || 8, r = r || 64, i = new ee(i !== void 0 ? i : 4473924), a = new ee(a !== void 0 ? a : 8947848);
  var s = [], o = [], l, c, u, h, f, d, p;
  for (h = 0; h <= t; h++)
    u = h / t * (Math.PI * 2), l = Math.sin(u) * e, c = Math.cos(u) * e, s.push(0, 0, 0), s.push(l, 0, c), p = h & 1 ? i : a, o.push(p.r, p.g, p.b), o.push(p.r, p.g, p.b);
  for (h = 0; h <= n; h++)
    for (p = h & 1 ? i : a, d = e - e / n * h, f = 0; f < r; f++)
      u = f / r * (Math.PI * 2), l = Math.sin(u) * d, c = Math.cos(u) * d, s.push(l, 0, c), o.push(p.r, p.g, p.b), u = (f + 1) / r * (Math.PI * 2), l = Math.sin(u) * d, c = Math.cos(u) * d, s.push(l, 0, c), o.push(p.r, p.g, p.b);
  var v = new ne();
  v.setAttribute("position", new Q(s, 3)), v.setAttribute("color", new Q(o, 3));
  var m = new at({ vertexColors: ha });
  lt.call(this, v, m);
}
yl.prototype = Object.create(lt.prototype);
yl.prototype.constructor = yl;
var cu = new b(), qa = new b(), uu = new b();
function la(e, t, n) {
  K.call(this), this.light = e, this.light.updateMatrixWorld(), this.matrix = e.matrixWorld, this.matrixAutoUpdate = !1, this.color = n, t === void 0 && (t = 1);
  var r = new ne();
  r.setAttribute("position", new Q([
    -t,
    t,
    0,
    t,
    t,
    0,
    t,
    -t,
    0,
    -t,
    -t,
    0,
    -t,
    t,
    0
  ], 3));
  var i = new at({ fog: !1 });
  this.lightPlane = new Ut(r, i), this.add(this.lightPlane), r = new ne(), r.setAttribute("position", new Q([0, 0, 0, 0, 0, 1], 3)), this.targetLine = new Ut(r, i), this.add(this.targetLine), this.update();
}
la.prototype = Object.create(K.prototype);
la.prototype.constructor = la;
la.prototype.dispose = function() {
  this.lightPlane.geometry.dispose(), this.lightPlane.material.dispose(), this.targetLine.geometry.dispose(), this.targetLine.material.dispose();
};
la.prototype.update = function() {
  cu.setFromMatrixPosition(this.light.matrixWorld), qa.setFromMatrixPosition(this.light.target.matrixWorld), uu.subVectors(qa, cu), this.lightPlane.lookAt(qa), this.color !== void 0 ? (this.lightPlane.material.color.set(this.color), this.targetLine.material.color.set(this.color)) : (this.lightPlane.material.color.copy(this.light.color), this.targetLine.material.color.copy(this.light.color)), this.targetLine.lookAt(qa), this.targetLine.scale.z = uu.length();
};
var Xa = new b(), tt = new yn();
function Is(e) {
  var t = new ne(), n = new at({ color: 16777215, vertexColors: Fh }), r = [], i = [], a = {}, s = new ee(16755200), o = new ee(16711680), l = new ee(43775), c = new ee(16777215), u = new ee(3355443);
  h("n1", "n2", s), h("n2", "n4", s), h("n4", "n3", s), h("n3", "n1", s), h("f1", "f2", s), h("f2", "f4", s), h("f4", "f3", s), h("f3", "f1", s), h("n1", "f1", s), h("n2", "f2", s), h("n3", "f3", s), h("n4", "f4", s), h("p", "n1", o), h("p", "n2", o), h("p", "n3", o), h("p", "n4", o), h("u1", "u2", l), h("u2", "u3", l), h("u3", "u1", l), h("c", "t", c), h("p", "c", u), h("cn1", "cn2", u), h("cn3", "cn4", u), h("cf1", "cf2", u), h("cf3", "cf4", u);
  function h(d, p, v) {
    f(d, v), f(p, v);
  }
  function f(d, p) {
    r.push(0, 0, 0), i.push(p.r, p.g, p.b), a[d] === void 0 && (a[d] = []), a[d].push(r.length / 3 - 1);
  }
  t.setAttribute("position", new Q(r, 3)), t.setAttribute("color", new Q(i, 3)), lt.call(this, t, n), this.camera = e, this.camera.updateProjectionMatrix && this.camera.updateProjectionMatrix(), this.matrix = e.matrixWorld, this.matrixAutoUpdate = !1, this.pointMap = a, this.update();
}
Is.prototype = Object.create(lt.prototype);
Is.prototype.constructor = Is;
Is.prototype.update = function() {
  var e = this.geometry, t = this.pointMap, n = 1, r = 1;
  tt.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse), rt("c", t, e, tt, 0, 0, -1), rt("t", t, e, tt, 0, 0, 1), rt("n1", t, e, tt, -n, -r, -1), rt("n2", t, e, tt, n, -r, -1), rt("n3", t, e, tt, -n, r, -1), rt("n4", t, e, tt, n, r, -1), rt("f1", t, e, tt, -n, -r, 1), rt("f2", t, e, tt, n, -r, 1), rt("f3", t, e, tt, -n, r, 1), rt("f4", t, e, tt, n, r, 1), rt("u1", t, e, tt, n * 0.7, r * 1.1, -1), rt("u2", t, e, tt, -n * 0.7, r * 1.1, -1), rt("u3", t, e, tt, 0, r * 2, -1), rt("cf1", t, e, tt, -n, 0, 1), rt("cf2", t, e, tt, n, 0, 1), rt("cf3", t, e, tt, 0, -r, 1), rt("cf4", t, e, tt, 0, r, 1), rt("cn1", t, e, tt, -n, 0, -1), rt("cn2", t, e, tt, n, 0, -1), rt("cn3", t, e, tt, 0, -r, -1), rt("cn4", t, e, tt, 0, r, -1), e.getAttribute("position").needsUpdate = !0;
};
function rt(e, t, n, r, i, a, s) {
  Xa.set(i, a, s).unproject(r);
  var o = t[e];
  if (o !== void 0)
    for (var l = n.getAttribute("position"), c = 0, u = o.length; c < u; c++)
      l.setXYZ(o[c], Xa.x, Xa.y, Xa.z);
}
var Ya = new hn();
function hr(e, t) {
  this.object = e, t === void 0 && (t = 16776960);
  var n = new Uint16Array([0, 1, 1, 2, 2, 3, 3, 0, 4, 5, 5, 6, 6, 7, 7, 4, 0, 4, 1, 5, 2, 6, 3, 7]), r = new Float32Array(8 * 3), i = new ne();
  i.setIndex(new _e(n, 1)), i.setAttribute("position", new _e(r, 3)), lt.call(this, i, new at({ color: t })), this.matrixAutoUpdate = !1, this.update();
}
hr.prototype = Object.create(lt.prototype);
hr.prototype.constructor = hr;
hr.prototype.update = function(e) {
  if (e !== void 0 && console.warn("THREE.BoxHelper: .update() has no longer arguments."), this.object !== void 0 && Ya.setFromObject(this.object), !Ya.isEmpty()) {
    var t = Ya.min, n = Ya.max, r = this.geometry.attributes.position, i = r.array;
    i[0] = n.x, i[1] = n.y, i[2] = n.z, i[3] = t.x, i[4] = n.y, i[5] = n.z, i[6] = t.x, i[7] = t.y, i[8] = n.z, i[9] = n.x, i[10] = t.y, i[11] = n.z, i[12] = n.x, i[13] = n.y, i[14] = t.z, i[15] = t.x, i[16] = n.y, i[17] = t.z, i[18] = t.x, i[19] = t.y, i[20] = t.z, i[21] = n.x, i[22] = t.y, i[23] = t.z, r.needsUpdate = !0, this.geometry.computeBoundingSphere();
  }
};
hr.prototype.setFromObject = function(e) {
  return this.object = e, this.update(), this;
};
hr.prototype.copy = function(e) {
  return lt.prototype.copy.call(this, e), this.object = e.object, this;
};
hr.prototype.clone = function() {
  return new this.constructor().copy(this);
};
function Os(e, t) {
  this.type = "Box3Helper", this.box = e, t = t || 16776960;
  var n = new Uint16Array([0, 1, 1, 2, 2, 3, 3, 0, 4, 5, 5, 6, 6, 7, 7, 4, 0, 4, 1, 5, 2, 6, 3, 7]), r = [1, 1, 1, -1, 1, 1, -1, -1, 1, 1, -1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1], i = new ne();
  i.setIndex(new _e(n, 1)), i.setAttribute("position", new Q(r, 3)), lt.call(this, i, new at({ color: t })), this.geometry.computeBoundingSphere();
}
Os.prototype = Object.create(lt.prototype);
Os.prototype.constructor = Os;
Os.prototype.updateMatrixWorld = function(e) {
  var t = this.box;
  t.isEmpty() || (t.getCenter(this.position), t.getSize(this.scale), this.scale.multiplyScalar(0.5), K.prototype.updateMatrixWorld.call(this, e));
};
function Ns(e, t, n) {
  this.type = "PlaneHelper", this.plane = e, this.size = t === void 0 ? 1 : t;
  var r = n !== void 0 ? n : 16776960, i = [1, -1, 1, -1, 1, 1, -1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, 1, -1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0], a = new ne();
  a.setAttribute("position", new Q(i, 3)), a.computeBoundingSphere(), Ut.call(this, a, new at({ color: r }));
  var s = [1, 1, 1, -1, 1, 1, -1, -1, 1, 1, 1, 1, -1, -1, 1, 1, -1, 1], o = new ne();
  o.setAttribute("position", new Q(s, 3)), o.computeBoundingSphere(), this.add(new et(o, new Zt({ color: r, opacity: 0.2, transparent: !0, depthWrite: !1 })));
}
Ns.prototype = Object.create(Ut.prototype);
Ns.prototype.constructor = Ns;
Ns.prototype.updateMatrixWorld = function(e) {
  var t = -this.plane.constant;
  Math.abs(t) < 1e-8 && (t = 1e-8), this.scale.set(0.5 * this.size, 0.5 * this.size, t), this.children[0].material.side = t < 0 ? ht : ua, this.lookAt(this.plane.normal), K.prototype.updateMatrixWorld.call(this, e);
};
var hu = new b(), Za, Mo;
function Hn(e, t, n, r, i, a) {
  K.call(this), e === void 0 && (e = new b(0, 0, 1)), t === void 0 && (t = new b(0, 0, 0)), n === void 0 && (n = 1), r === void 0 && (r = 16776960), i === void 0 && (i = 0.2 * n), a === void 0 && (a = 0.2 * i), Za === void 0 && (Za = new ne(), Za.setAttribute("position", new Q([0, 0, 0, 0, 1, 0], 3)), Mo = new Gn(0, 0.5, 1, 5, 1), Mo.translate(0, -0.5, 0)), this.position.copy(t), this.line = new Ut(Za, new at({ color: r })), this.line.matrixAutoUpdate = !1, this.add(this.line), this.cone = new et(Mo, new Zt({ color: r })), this.cone.matrixAutoUpdate = !1, this.add(this.cone), this.setDirection(e), this.setLength(n, i, a);
}
Hn.prototype = Object.create(K.prototype);
Hn.prototype.constructor = Hn;
Hn.prototype.setDirection = function(e) {
  if (e.y > 0.99999)
    this.quaternion.set(0, 0, 0, 1);
  else if (e.y < -0.99999)
    this.quaternion.set(1, 0, 0, 0);
  else {
    hu.set(e.z, 0, -e.x).normalize();
    var t = Math.acos(e.y);
    this.quaternion.setFromAxisAngle(hu, t);
  }
};
Hn.prototype.setLength = function(e, t, n) {
  t === void 0 && (t = 0.2 * e), n === void 0 && (n = 0.2 * t), this.line.scale.set(1, Math.max(1e-4, e - t), 1), this.line.updateMatrix(), this.cone.scale.set(n, t, n), this.cone.position.y = e, this.cone.updateMatrix();
};
Hn.prototype.setColor = function(e) {
  this.line.material.color.set(e), this.cone.material.color.set(e);
};
Hn.prototype.copy = function(e) {
  return K.prototype.copy.call(this, e, !1), this.line.copy(e.line), this.cone.copy(e.cone), this;
};
Hn.prototype.clone = function() {
  return new this.constructor().copy(this);
};
function xl(e) {
  e = e || 1;
  var t = [
    0,
    0,
    0,
    e,
    0,
    0,
    0,
    0,
    0,
    0,
    e,
    0,
    0,
    0,
    0,
    0,
    0,
    e
  ], n = [
    1,
    0,
    0,
    1,
    0.6,
    0,
    0,
    1,
    0,
    0.6,
    1,
    0,
    0,
    0,
    1,
    0,
    0.6,
    1
  ], r = new ne();
  r.setAttribute("position", new Q(t, 3)), r.setAttribute("color", new Q(n, 3));
  var i = new at({ vertexColors: ha });
  lt.call(this, r, i);
}
xl.prototype = Object.create(lt.prototype);
xl.prototype.constructor = xl;
var Vr = 4, Fn = 8, tn = Math.pow(2, Fn), dh = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582], ph = Fn - Vr + 1 + dh.length, Or = 20, un = {
  [Pt]: 0,
  [Cl]: 1,
  [Rl]: 2,
  [Ru]: 3,
  [Pu]: 4,
  [Du]: 5,
  [Cu]: 6
}, Nl = new na(), Fs = ey(Or), Rn = null, Pn = null, { _lodPlanes: ca, _sizeLods: fu, _sigmas: Ja } = $g(), Bs = null, Xe = null, _l = null, tr = (1 + Math.sqrt(5)) / 2, Dr = 1 / tr, du = [
  new b(1, 1, 1),
  new b(-1, 1, 1),
  new b(1, 1, -1),
  new b(-1, 1, -1),
  new b(0, tr, Dr),
  new b(0, tr, -Dr),
  new b(Dr, 0, tr),
  new b(-Dr, 0, tr),
  new b(tr, Dr, 0),
  new b(-tr, Dr, 0)
];
function pu(e) {
  Xe = e, wl(Fs);
}
pu.prototype = {
  constructor: pu,
  /**
   * Generates a PMREM from a supplied Scene, which can be faster than using an
   * image if networking bandwidth is low. Optional sigma specifies a blur radius
   * in radians to be applied to the scene before PMREM generation. Optional near
   * and far planes ensure the scene is rendered in its entirety (the cubeCamera
   * is placed at the origin).
   */
  fromScene: function(e, t = 0, n = 0.1, r = 100) {
    _l = Xe.getRenderTarget();
    var i = vu();
    return Qg(e, n, r, i), t > 0 && vh(i, 0, 0, t), yu(i), mu(i), i;
  },
  /**
   * Generates a PMREM from an equirectangular texture, which can be either LDR
   * (RGBFormat) or HDR (RGBEFormat). The ideal input image size is 1k (1024 x 512),
   * as this matches best with the 256 x 256 cubemap output.
   */
  fromEquirectangular: function(e) {
    return e.magFilter = ot, e.minFilter = ot, e.generateMipmaps = !1, this.fromCubemap(e);
  },
  /**
   * Generates a PMREM from an cubemap texture, which can be either LDR
   * (RGBFormat) or HDR (RGBEFormat). The ideal input cube size is 256 x 256,
   * as this matches best with the 256 x 256 cubemap output.
   */
  fromCubemap: function(e) {
    _l = Xe.getRenderTarget();
    var t = vu(e);
    return Kg(e, t), yu(t), mu(t), t;
  },
  /**
   * Pre-compiles the cubemap shader. You can get faster start-up by invoking this method during
   * your texture's network fetch for increased concurrency.
   */
  compileCubemapShader: function() {
    Pn == null && (Pn = gh(), wl(Pn));
  },
  /**
   * Pre-compiles the equirectangular shader. You can get faster start-up by invoking this method during
   * your texture's network fetch for increased concurrency.
   */
  compileEquirectangularShader: function() {
    Rn == null && (Rn = mh(), wl(Rn));
  },
  /**
   * Disposes of the PMREMGenerator's internal memory. Note that PMREMGenerator is a static class,
   * so you should not need more than one PMREMGenerator object. If you do, calling dispose() on
   * one of them will cause any others to also become unusable.
   */
  dispose: function() {
    Fs.dispose(), Pn != null && Pn.dispose(), Rn != null && Rn.dispose();
    for (var e = 0; e < ca.length; e++)
      ca[e].dispose();
  }
};
function $g() {
  for (var e = [], t = [], n = [], r = Fn, i = 0; i < ph; i++) {
    var a = Math.pow(2, r);
    t.push(a);
    var s = 1 / a;
    i > Fn - Vr ? s = dh[i - Fn + Vr - 1] : i == 0 && (s = 0), n.push(s);
    for (var o = 1 / (a - 1), l = -o / 2, c = 1 + o / 2, u = [l, l, c, l, c, c, l, l, c, c, l, c], h = 6, f = 6, d = 3, p = 2, v = 1, m = new Float32Array(d * f * h), y = new Float32Array(p * f * h), x = new Float32Array(v * f * h), M = 0; M < h; M++) {
      var E = M % 3 * 2 / 3 - 1, w = M > 2 ? 0 : -1, A = [
        E,
        w,
        0,
        E + 2 / 3,
        w,
        0,
        E + 2 / 3,
        w + 1,
        0,
        E,
        w,
        0,
        E + 2 / 3,
        w + 1,
        0,
        E,
        w + 1,
        0
      ];
      m.set(A, d * f * M), y.set(u, p * f * M);
      var C = [M, M, M, M, M, M];
      x.set(C, v * f * M);
    }
    var T = new ne();
    T.setAttribute("position", new _e(m, d)), T.setAttribute("uv", new _e(y, p)), T.setAttribute("faceIndex", new _e(x, v)), e.push(T), r > Vr && r--;
  }
  return { _lodPlanes: e, _sizeLods: t, _sigmas: n };
}
function vu(e) {
  var t = {
    magFilter: ot,
    minFilter: ot,
    generateMipmaps: !1,
    type: e ? e.type : Vs,
    format: e ? e.format : yf,
    encoding: e ? e.encoding : Rl,
    depthBuffer: !1,
    stencilBuffer: !1
  }, n = gu(t);
  return n.depthBuffer = !e, Bs = gu(t), n;
}
function mu(e) {
  Bs.dispose(), Xe.setRenderTarget(_l), e.scissorTest = !1, e.setSize(e.width, e.height);
}
function Qg(e, t, n, r) {
  var i = 90, a = 1, s = new ut(i, a, t, n), o = [1, 1, 1, 1, -1, 1], l = [1, 1, -1, -1, -1, 1], c = Xe.outputEncoding, u = Xe.toneMapping, h = Xe.toneMappingExposure, f = Xe.getClearColor(), d = Xe.getClearAlpha();
  Xe.toneMapping = Ml, Xe.toneMappingExposure = 1, Xe.outputEncoding = Pt, e.scale.z *= -1;
  var p = e.background;
  if (p && p.isColor) {
    p.convertSRGBToLinear();
    var v = Math.max(p.r, p.g, p.b), m = Math.min(Math.max(Math.ceil(Math.log2(v)), -128), 127);
    p = p.multiplyScalar(Math.pow(2, -m));
    var y = (m + 128) / 255;
    Xe.setClearColor(p, y), e.background = null;
  }
  for (var x = 0; x < 6; x++) {
    var M = x % 3;
    M == 0 ? (s.up.set(0, o[x], 0), s.lookAt(l[x], 0, 0)) : M == 1 ? (s.up.set(0, 0, o[x]), s.lookAt(0, l[x], 0)) : (s.up.set(0, o[x], 0), s.lookAt(0, 0, l[x])), Fl(
      r,
      M * tn,
      x > 2 ? tn : 0,
      tn,
      tn
    ), Xe.setRenderTarget(r), Xe.render(e, s);
  }
  Xe.toneMapping = u, Xe.toneMappingExposure = h, Xe.outputEncoding = c, Xe.setClearColor(f, d), e.scale.z *= -1;
}
function Kg(e, t) {
  var n = new Bn();
  e.isCubeTexture ? Pn == null && (Pn = gh()) : Rn == null && (Rn = mh());
  var r = e.isCubeTexture ? Pn : Rn;
  n.add(new et(ca[0], r));
  var i = r.uniforms;
  i.envMap.value = e, e.isCubeTexture || i.texelSize.value.set(1 / e.image.width, 1 / e.image.height), i.inputEncoding.value = un[e.encoding], i.outputEncoding.value = un[e.encoding], Fl(t, 0, 0, 3 * tn, 2 * tn), Xe.setRenderTarget(t), Xe.render(n, Nl);
}
function wl(e) {
  var t = new Bn();
  t.add(new et(ca[0], e)), Xe.compile(t, Nl);
}
function gu(e) {
  var t = new Mt(3 * tn, 3 * tn, e);
  return t.texture.mapping = fa, t.texture.name = "PMREM.cubeUv", t.scissorTest = !0, t;
}
function Fl(e, t, n, r, i) {
  e.viewport.set(t, n, r, i), e.scissor.set(t, n, r, i);
}
function yu(e) {
  var t = Xe.autoClear;
  Xe.autoClear = !1;
  for (var n = 1; n < ph; n++) {
    var r = Math.sqrt(
      Ja[n] * Ja[n] - Ja[n - 1] * Ja[n - 1]
    ), i = du[(n - 1) % du.length];
    vh(e, n - 1, n, r, i);
  }
  Xe.autoClear = t;
}
function vh(e, t, n, r, i) {
  xu(
    e,
    Bs,
    t,
    n,
    r,
    "latitudinal",
    i
  ), xu(
    Bs,
    e,
    n,
    n,
    r,
    "longitudinal",
    i
  );
}
function xu(e, t, n, r, i, a, s) {
  a !== "latitudinal" && a !== "longitudinal" && console.error(
    "blur direction must be either latitudinal or longitudinal!"
  );
  var o = 3, l = new Bn();
  l.add(new et(ca[r], Fs));
  var c = Fs.uniforms, u = fu[n] - 1, h = isFinite(i) ? Math.PI / (2 * u) : 2 * Math.PI / (2 * Or - 1), f = i / h, d = isFinite(i) ? 1 + Math.floor(o * f) : Or;
  d > Or && console.warn(`sigmaRadians, ${i}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${Or}`);
  for (var p = [], v = 0, m = 0; m < Or; ++m) {
    var M = m / f, y = Math.exp(-M * M / 2);
    p.push(y), m == 0 ? v += y : m < d && (v += 2 * y);
  }
  for (var m = 0; m < p.length; m++)
    p[m] = p[m] / v;
  c.envMap.value = e.texture, c.samples.value = d, c.weights.value = p, c.latitudinal.value = a === "latitudinal", s && (c.poleAxis.value = s), c.dTheta.value = h, c.mipInt.value = Fn - n, c.inputEncoding.value = un[e.texture.encoding], c.outputEncoding.value = un[e.texture.encoding];
  var x = fu[r], M = 3 * Math.max(0, tn - 2 * x), E = (r === 0 ? 0 : 2 * tn) + 2 * x * (r > Fn - Vr ? r - Fn + Vr : 0);
  Fl(t, M, E, 3 * x, 2 * x), Xe.setRenderTarget(t), Xe.render(l, Nl);
}
function ey(e) {
  var t = new Float32Array(e), n = new b(0, 1, 0), r = new Vn({
    defines: { n: e },
    uniforms: {
      envMap: { value: null },
      samples: { value: 1 },
      weights: { value: t },
      latitudinal: { value: !1 },
      dTheta: { value: 0 },
      mipInt: { value: 0 },
      poleAxis: { value: n },
      inputEncoding: { value: un[Pt] },
      outputEncoding: { value: un[Pt] }
    },
    vertexShader: Bl(),
    fragmentShader: `
precision mediump float;
precision mediump int;
varying vec3 vOutputDirection;
uniform sampler2D envMap;
uniform int samples;
uniform float weights[n];
uniform bool latitudinal;
uniform float dTheta;
uniform float mipInt;
uniform vec3 poleAxis;

${zl()}

#define ENVMAP_TYPE_CUBE_UV
#include <cube_uv_reflection_fragment>

void main() {
	gl_FragColor = vec4(0.0);
	for (int i = 0; i < n; i++) {
		if (i >= samples)
			break;
		for (int dir = -1; dir < 2; dir += 2) {
			if (i == 0 && dir == 1)
				continue;
			vec3 axis = latitudinal ? poleAxis : cross(poleAxis, vOutputDirection);
			if (all(equal(axis, vec3(0.0))))
				axis = cross(vec3(0.0, 1.0, 0.0), vOutputDirection);
			axis = normalize(axis);
			float theta = dTheta * float(dir * i);
			float cosTheta = cos(theta);
			// Rodrigues' axis-angle rotation
			vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross(axis, vOutputDirection) * sin(theta)
					+ axis * dot(axis, vOutputDirection) * (1.0 - cosTheta);
			gl_FragColor.rgb +=
					weights[i] * bilinearCubeUV(envMap, sampleDirection, mipInt);
		}
	}
	gl_FragColor = linearToOutputTexel(gl_FragColor);
}
		`,
    blending: In,
    depthTest: !1,
    depthWrite: !1
  });
  return r.type = "SphericalGaussianBlur", r;
}
function mh() {
  var e = new G(1, 1), t = new Vn({
    uniforms: {
      envMap: { value: null },
      texelSize: { value: e },
      inputEncoding: { value: un[Pt] },
      outputEncoding: { value: un[Pt] }
    },
    vertexShader: Bl(),
    fragmentShader: `
precision mediump float;
precision mediump int;
varying vec3 vOutputDirection;
uniform sampler2D envMap;
uniform vec2 texelSize;

${zl()}

#define RECIPROCAL_PI 0.31830988618
#define RECIPROCAL_PI2 0.15915494

void main() {
	gl_FragColor = vec4(0.0);
	vec3 outputDirection = normalize(vOutputDirection);
	vec2 uv;
	uv.y = asin(clamp(outputDirection.y, -1.0, 1.0)) * RECIPROCAL_PI + 0.5;
	uv.x = atan(outputDirection.z, outputDirection.x) * RECIPROCAL_PI2 + 0.5;
	vec2 f = fract(uv / texelSize - 0.5);
	uv -= f * texelSize;
	vec3 tl = envMapTexelToLinear(texture2D(envMap, uv)).rgb;
	uv.x += texelSize.x;
	vec3 tr = envMapTexelToLinear(texture2D(envMap, uv)).rgb;
	uv.y += texelSize.y;
	vec3 br = envMapTexelToLinear(texture2D(envMap, uv)).rgb;
	uv.x -= texelSize.x;
	vec3 bl = envMapTexelToLinear(texture2D(envMap, uv)).rgb;
	vec3 tm = mix(tl, tr, f.x);
	vec3 bm = mix(bl, br, f.x);
	gl_FragColor.rgb = mix(tm, bm, f.y);
	gl_FragColor = linearToOutputTexel(gl_FragColor);
}
		`,
    blending: In,
    depthTest: !1,
    depthWrite: !1
  });
  return t.type = "EquirectangularToCubeUV", t;
}
function gh() {
  var e = new Vn({
    uniforms: {
      envMap: { value: null },
      inputEncoding: { value: un[Pt] },
      outputEncoding: { value: un[Pt] }
    },
    vertexShader: Bl(),
    fragmentShader: `
precision mediump float;
precision mediump int;
varying vec3 vOutputDirection;
uniform samplerCube envMap;

${zl()}

void main() {
	gl_FragColor = vec4(0.0);
	gl_FragColor.rgb = envMapTexelToLinear(textureCube(envMap, vec3( - vOutputDirection.x, vOutputDirection.yz ))).rgb;
	gl_FragColor = linearToOutputTexel(gl_FragColor);
}
		`,
    blending: In,
    depthTest: !1,
    depthWrite: !1
  });
  return e.type = "CubemapToCubeUV", e;
}
function Bl() {
  return `
precision mediump float;
precision mediump int;
attribute vec3 position;
attribute vec2 uv;
attribute float faceIndex;
varying vec3 vOutputDirection;
vec3 getDirection(vec2 uv, float face) {
	uv = 2.0 * uv - 1.0;
	vec3 direction = vec3(uv, 1.0);
	if (face == 0.0) {
		direction = direction.zyx;
		direction.z *= -1.0;
	} else if (face == 1.0) {
		direction = direction.xzy;
		direction.z *= -1.0;
	} else if (face == 3.0) {
		direction = direction.zyx;
		direction.x *= -1.0;
	} else if (face == 4.0) {
		direction = direction.xzy;
		direction.y *= -1.0;
	} else if (face == 5.0) {
		direction.xz *= -1.0;
	}
	return direction;
}
void main() {
	vOutputDirection = getDirection(uv, faceIndex);
	gl_Position = vec4( position, 1.0 );
}
	`;
}
function zl() {
  return `
uniform int inputEncoding;
uniform int outputEncoding;

#include <encodings_pars_fragment>

vec4 inputTexelToLinear(vec4 value){
	if(inputEncoding == 0){
		return value;
	}else if(inputEncoding == 1){
		return sRGBToLinear(value);
	}else if(inputEncoding == 2){
		return RGBEToLinear(value);
	}else if(inputEncoding == 3){
		return RGBMToLinear(value, 7.0);
	}else if(inputEncoding == 4){
		return RGBMToLinear(value, 16.0);
	}else if(inputEncoding == 5){
		return RGBDToLinear(value, 256.0);
	}else{
		return GammaToLinear(value, 2.2);
	}
}

vec4 linearToOutputTexel(vec4 value){
	if(outputEncoding == 0){
		return value;
	}else if(outputEncoding == 1){
		return LinearTosRGB(value);
	}else if(outputEncoding == 2){
		return LinearToRGBE(value);
	}else if(outputEncoding == 3){
		return LinearToRGBM(value, 7.0);
	}else if(outputEncoding == 4){
		return LinearToRGBM(value, 16.0);
	}else if(outputEncoding == 5){
		return LinearToRGBD(value, 256.0);
	}else{
		return LinearToGamma(value, 2.2);
	}
}

vec4 envMapTexelToLinear(vec4 color) {
	return inputTexelToLinear(color);
}
	`;
}
fe.create = function(e, t) {
  return console.log("THREE.Curve.create() has been deprecated"), e.prototype = Object.create(fe.prototype), e.prototype.constructor = e, e.prototype.getPoint = t, e;
};
Object.assign(Dn.prototype, {
  createPointsGeometry: function(e) {
    console.warn("THREE.CurvePath: .createPointsGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.");
    var t = this.getPoints(e);
    return this.createGeometry(t);
  },
  createSpacedPointsGeometry: function(e) {
    console.warn("THREE.CurvePath: .createSpacedPointsGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.");
    var t = this.getSpacedPoints(e);
    return this.createGeometry(t);
  },
  createGeometry: function(e) {
    console.warn("THREE.CurvePath: .createGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.");
    for (var t = new we(), n = 0, r = e.length; n < r; n++) {
      var i = e[n];
      t.vertices.push(new b(i.x, i.y, i.z || 0));
    }
    return t;
  }
});
Object.assign(en.prototype, {
  fromPoints: function(e) {
    return console.warn("THREE.Path: .fromPoints() has been renamed to .setFromPoints()."), this.setFromPoints(e);
  }
});
Object.create(Ot.prototype);
Object.create(Ot.prototype);
function yh(e) {
  console.warn("THREE.Spline has been removed. Use THREE.CatmullRomCurve3 instead."), Ot.call(this, e), this.type = "catmullrom";
}
yh.prototype = Object.create(Ot.prototype);
Object.assign(yh.prototype, {
  initFromArray: function() {
    console.error("THREE.Spline: .initFromArray() has been removed.");
  },
  getControlPointsArray: function() {
    console.error("THREE.Spline: .getControlPointsArray() has been removed.");
  },
  reparametrizeByArcLength: function() {
    console.error("THREE.Spline: .reparametrizeByArcLength() has been removed.");
  }
});
gl.prototype.setColors = function() {
  console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.");
};
aa.prototype.update = function() {
  console.error("THREE.SkeletonHelper: update() no longer needs to be called.");
};
Object.assign(Ve.prototype, {
  extractUrlBase: function(e) {
    return console.warn("THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead."), th.extractUrlBase(e);
  }
});
Ve.Handlers = {
  add: function() {
    console.error("THREE.Loader: Handlers.add() has been removed. Use LoadingManager.addHandler() instead.");
  },
  get: function() {
    console.error("THREE.Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead.");
  }
};
Object.assign(dl.prototype, {
  setTexturePath: function(e) {
    return console.warn("THREE.ObjectLoader: .setTexturePath() has been renamed to .setResourcePath()."), this.setResourcePath(e);
  }
});
Object.assign(uh.prototype, {
  center: function(e) {
    return console.warn("THREE.Box2: .center() has been renamed to .getCenter()."), this.getCenter(e);
  },
  empty: function() {
    return console.warn("THREE.Box2: .empty() has been renamed to .isEmpty()."), this.isEmpty();
  },
  isIntersectionBox: function(e) {
    return console.warn("THREE.Box2: .isIntersectionBox() has been renamed to .intersectsBox()."), this.intersectsBox(e);
  },
  size: function(e) {
    return console.warn("THREE.Box2: .size() has been renamed to .getSize()."), this.getSize(e);
  }
});
Object.assign(hn.prototype, {
  center: function(e) {
    return console.warn("THREE.Box3: .center() has been renamed to .getCenter()."), this.getCenter(e);
  },
  empty: function() {
    return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."), this.isEmpty();
  },
  isIntersectionBox: function(e) {
    return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."), this.intersectsBox(e);
  },
  isIntersectionSphere: function(e) {
    return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."), this.intersectsSphere(e);
  },
  size: function(e) {
    return console.warn("THREE.Box3: .size() has been renamed to .getSize()."), this.getSize(e);
  }
});
da.prototype.setFromMatrix = function(e) {
  return console.warn("THREE.Frustum: .setFromMatrix() has been renamed to .setFromProjectionMatrix()."), this.setFromProjectionMatrix(e);
};
hh.prototype.center = function(e) {
  return console.warn("THREE.Line3: .center() has been renamed to .getCenter()."), this.getCenter(e);
};
Object.assign(Ae, {
  random16: function() {
    return console.warn("THREE.Math: .random16() has been deprecated. Use Math.random() instead."), Math.random();
  },
  nearestPowerOfTwo: function(e) {
    return console.warn("THREE.Math: .nearestPowerOfTwo() has been renamed to .floorPowerOfTwo()."), Ae.floorPowerOfTwo(e);
  },
  nextPowerOfTwo: function(e) {
    return console.warn("THREE.Math: .nextPowerOfTwo() has been renamed to .ceilPowerOfTwo()."), Ae.ceilPowerOfTwo(e);
  }
});
Object.assign(gt.prototype, {
  flattenToArrayOffset: function(e, t) {
    return console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."), this.toArray(e, t);
  },
  multiplyVector3: function(e) {
    return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."), e.applyMatrix3(this);
  },
  multiplyVector3Array: function() {
    console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.");
  },
  applyToBufferAttribute: function(e) {
    return console.warn("THREE.Matrix3: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix3( matrix ) instead."), e.applyMatrix3(this);
  },
  applyToVector3Array: function() {
    console.error("THREE.Matrix3: .applyToVector3Array() has been removed.");
  }
});
Object.assign(Ce.prototype, {
  extractPosition: function(e) {
    return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."), this.copyPosition(e);
  },
  flattenToArrayOffset: function(e, t) {
    return console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."), this.toArray(e, t);
  },
  getPosition: function() {
    return console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."), new b().setFromMatrixColumn(this, 3);
  },
  setRotationFromQuaternion: function(e) {
    return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."), this.makeRotationFromQuaternion(e);
  },
  multiplyToArray: function() {
    console.warn("THREE.Matrix4: .multiplyToArray() has been removed.");
  },
  multiplyVector3: function(e) {
    return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."), e.applyMatrix4(this);
  },
  multiplyVector4: function(e) {
    return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."), e.applyMatrix4(this);
  },
  multiplyVector3Array: function() {
    console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.");
  },
  rotateAxis: function(e) {
    console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."), e.transformDirection(this);
  },
  crossVector: function(e) {
    return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."), e.applyMatrix4(this);
  },
  translate: function() {
    console.error("THREE.Matrix4: .translate() has been removed.");
  },
  rotateX: function() {
    console.error("THREE.Matrix4: .rotateX() has been removed.");
  },
  rotateY: function() {
    console.error("THREE.Matrix4: .rotateY() has been removed.");
  },
  rotateZ: function() {
    console.error("THREE.Matrix4: .rotateZ() has been removed.");
  },
  rotateByAxis: function() {
    console.error("THREE.Matrix4: .rotateByAxis() has been removed.");
  },
  applyToBufferAttribute: function(e) {
    return console.warn("THREE.Matrix4: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix4( matrix ) instead."), e.applyMatrix4(this);
  },
  applyToVector3Array: function() {
    console.error("THREE.Matrix4: .applyToVector3Array() has been removed.");
  },
  makeFrustum: function(e, t, n, r, i, a) {
    return console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."), this.makePerspective(e, t, r, n, i, a);
  }
});
Kt.prototype.isIntersectionLine = function(e) {
  return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."), this.intersectsLine(e);
};
Tt.prototype.multiplyVector3 = function(e) {
  return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."), e.applyQuaternion(this);
};
Object.assign(ui.prototype, {
  isIntersectionBox: function(e) {
    return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."), this.intersectsBox(e);
  },
  isIntersectionPlane: function(e) {
    return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."), this.intersectsPlane(e);
  },
  isIntersectionSphere: function(e) {
    return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."), this.intersectsSphere(e);
  }
});
Object.assign(pt.prototype, {
  area: function() {
    return console.warn("THREE.Triangle: .area() has been renamed to .getArea()."), this.getArea();
  },
  barycoordFromPoint: function(e, t) {
    return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."), this.getBarycoord(e, t);
  },
  midpoint: function(e) {
    return console.warn("THREE.Triangle: .midpoint() has been renamed to .getMidpoint()."), this.getMidpoint(e);
  },
  normal: function(e) {
    return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."), this.getNormal(e);
  },
  plane: function(e) {
    return console.warn("THREE.Triangle: .plane() has been renamed to .getPlane()."), this.getPlane(e);
  }
});
Object.assign(pt, {
  barycoordFromPoint: function(e, t, n, r, i) {
    return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."), pt.getBarycoord(e, t, n, r, i);
  },
  normal: function(e, t, n, r) {
    return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."), pt.getNormal(e, t, n, r);
  }
});
Object.assign(rr.prototype, {
  extractAllPoints: function(e) {
    return console.warn("THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead."), this.extractPoints(e);
  },
  extrude: function(e) {
    return console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead."), new Zr(this, e);
  },
  makeGeometry: function(e) {
    return console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead."), new $r(this, e);
  }
});
Object.assign(G.prototype, {
  fromAttribute: function(e, t, n) {
    return console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."), this.fromBufferAttribute(e, t, n);
  },
  distanceToManhattan: function(e) {
    return console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."), this.manhattanDistanceTo(e);
  },
  lengthManhattan: function() {
    return console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength()."), this.manhattanLength();
  }
});
Object.assign(b.prototype, {
  setEulerFromRotationMatrix: function() {
    console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.");
  },
  setEulerFromQuaternion: function() {
    console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.");
  },
  getPositionFromMatrix: function(e) {
    return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."), this.setFromMatrixPosition(e);
  },
  getScaleFromMatrix: function(e) {
    return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."), this.setFromMatrixScale(e);
  },
  getColumnFromMatrix: function(e, t) {
    return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."), this.setFromMatrixColumn(t, e);
  },
  applyProjection: function(e) {
    return console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."), this.applyMatrix4(e);
  },
  fromAttribute: function(e, t, n) {
    return console.warn("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."), this.fromBufferAttribute(e, t, n);
  },
  distanceToManhattan: function(e) {
    return console.warn("THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."), this.manhattanDistanceTo(e);
  },
  lengthManhattan: function() {
    return console.warn("THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength()."), this.manhattanLength();
  }
});
Object.assign(Ye.prototype, {
  fromAttribute: function(e, t, n) {
    return console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."), this.fromBufferAttribute(e, t, n);
  },
  lengthManhattan: function() {
    return console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength()."), this.manhattanLength();
  }
});
Object.assign(we.prototype, {
  computeTangents: function() {
    console.error("THREE.Geometry: .computeTangents() has been removed.");
  },
  computeLineDistances: function() {
    console.error("THREE.Geometry: .computeLineDistances() has been removed. Use THREE.Line.computeLineDistances() instead.");
  },
  applyMatrix: function(e) {
    return console.warn("THREE.Geometry: .applyMatrix() has been renamed to .applyMatrix4()."), this.applyMatrix4(e);
  }
});
Object.assign(K.prototype, {
  getChildByName: function(e) {
    return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."), this.getObjectByName(e);
  },
  renderDepth: function() {
    console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.");
  },
  translate: function(e, t) {
    return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."), this.translateOnAxis(t, e);
  },
  getWorldRotation: function() {
    console.error("THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.");
  },
  applyMatrix: function(e) {
    return console.warn("THREE.Object3D: .applyMatrix() has been renamed to .applyMatrix4()."), this.applyMatrix4(e);
  }
});
Object.defineProperties(K.prototype, {
  eulerOrder: {
    get: function() {
      return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."), this.rotation.order;
    },
    set: function(e) {
      console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."), this.rotation.order = e;
    }
  },
  useQuaternion: {
    get: function() {
      console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.");
    },
    set: function() {
      console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.");
    }
  }
});
Object.assign(et.prototype, {
  setDrawMode: function() {
    console.error("THREE.Mesh: .setDrawMode() has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.");
  }
});
Object.defineProperties(et.prototype, {
  drawMode: {
    get: function() {
      return console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode."), kf;
    },
    set: function() {
      console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.");
    }
  }
});
Object.defineProperties(ls.prototype, {
  objects: {
    get: function() {
      return console.warn("THREE.LOD: .objects has been renamed to .levels."), this.levels;
    }
  }
});
Object.defineProperty(zo.prototype, "useVertexTexture", {
  get: function() {
    console.warn("THREE.Skeleton: useVertexTexture has been removed.");
  },
  set: function() {
    console.warn("THREE.Skeleton: useVertexTexture has been removed.");
  }
});
cs.prototype.initBones = function() {
  console.error("THREE.SkinnedMesh: initBones() has been removed.");
};
Object.defineProperty(fe.prototype, "__arcLengthDivisions", {
  get: function() {
    return console.warn("THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions."), this.arcLengthDivisions;
  },
  set: function(e) {
    console.warn("THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions."), this.arcLengthDivisions = e;
  }
});
ut.prototype.setLens = function(e, t) {
  console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."), t !== void 0 && (this.filmGauge = t), this.setFocalLength(e);
};
Object.defineProperties($e.prototype, {
  onlyShadow: {
    set: function() {
      console.warn("THREE.Light: .onlyShadow has been removed.");
    }
  },
  shadowCameraFov: {
    set: function(e) {
      console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."), this.shadow.camera.fov = e;
    }
  },
  shadowCameraLeft: {
    set: function(e) {
      console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."), this.shadow.camera.left = e;
    }
  },
  shadowCameraRight: {
    set: function(e) {
      console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."), this.shadow.camera.right = e;
    }
  },
  shadowCameraTop: {
    set: function(e) {
      console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."), this.shadow.camera.top = e;
    }
  },
  shadowCameraBottom: {
    set: function(e) {
      console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."), this.shadow.camera.bottom = e;
    }
  },
  shadowCameraNear: {
    set: function(e) {
      console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."), this.shadow.camera.near = e;
    }
  },
  shadowCameraFar: {
    set: function(e) {
      console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."), this.shadow.camera.far = e;
    }
  },
  shadowCameraVisible: {
    set: function() {
      console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.");
    }
  },
  shadowBias: {
    set: function(e) {
      console.warn("THREE.Light: .shadowBias is now .shadow.bias."), this.shadow.bias = e;
    }
  },
  shadowDarkness: {
    set: function() {
      console.warn("THREE.Light: .shadowDarkness has been removed.");
    }
  },
  shadowMapWidth: {
    set: function(e) {
      console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."), this.shadow.mapSize.width = e;
    }
  },
  shadowMapHeight: {
    set: function(e) {
      console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."), this.shadow.mapSize.height = e;
    }
  }
});
Object.defineProperties(_e.prototype, {
  length: {
    get: function() {
      return console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead."), this.array.length;
    }
  },
  dynamic: {
    get: function() {
      return console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."), this.usage === Ri;
    },
    set: function() {
      console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."), this.setUsage(Ri);
    }
  }
});
Object.assign(_e.prototype, {
  setDynamic: function(e) {
    return console.warn("THREE.BufferAttribute: .setDynamic() has been deprecated. Use .setUsage() instead."), this.setUsage(e === !0 ? Ri : Hs), this;
  },
  copyIndicesArray: function() {
    console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed.");
  },
  setArray: function() {
    console.error("THREE.BufferAttribute: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers");
  }
});
Object.assign(ne.prototype, {
  addIndex: function(e) {
    console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."), this.setIndex(e);
  },
  addAttribute: function(e, t) {
    return console.warn("THREE.BufferGeometry: .addAttribute() has been renamed to .setAttribute()."), !(t && t.isBufferAttribute) && !(t && t.isInterleavedBufferAttribute) ? (console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."), this.setAttribute(e, new _e(arguments[1], arguments[2]))) : e === "index" ? (console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."), this.setIndex(t), this) : this.setAttribute(e, t);
  },
  addDrawCall: function(e, t, n) {
    n !== void 0 && console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."), console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."), this.addGroup(e, t);
  },
  clearDrawCalls: function() {
    console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."), this.clearGroups();
  },
  computeTangents: function() {
    console.warn("THREE.BufferGeometry: .computeTangents() has been removed.");
  },
  computeOffsets: function() {
    console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.");
  },
  removeAttribute: function(e) {
    return console.warn("THREE.BufferGeometry: .removeAttribute() has been renamed to .deleteAttribute()."), this.deleteAttribute(e);
  },
  applyMatrix: function(e) {
    return console.warn("THREE.BufferGeometry: .applyMatrix() has been renamed to .applyMatrix4()."), this.applyMatrix4(e);
  }
});
Object.defineProperties(ne.prototype, {
  drawcalls: {
    get: function() {
      return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."), this.groups;
    }
  },
  offsets: {
    get: function() {
      return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."), this.groups;
    }
  }
});
Object.defineProperties(Un.prototype, {
  dynamic: {
    get: function() {
      return console.warn("THREE.InterleavedBuffer: .length has been deprecated. Use .usage instead."), this.usage === Ri;
    },
    set: function(e) {
      console.warn("THREE.InterleavedBuffer: .length has been deprecated. Use .usage instead."), this.setUsage(e);
    }
  }
});
Object.assign(Un.prototype, {
  setDynamic: function(e) {
    return console.warn("THREE.InterleavedBuffer: .setDynamic() has been deprecated. Use .setUsage() instead."), this.setUsage(e === !0 ? Ri : Hs), this;
  },
  setArray: function() {
    console.error("THREE.InterleavedBuffer: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers");
  }
});
Object.assign(xn.prototype, {
  getArrays: function() {
    console.error("THREE.ExtrudeBufferGeometry: .getArrays() has been removed.");
  },
  addShapeList: function() {
    console.error("THREE.ExtrudeBufferGeometry: .addShapeList() has been removed.");
  },
  addShape: function() {
    console.error("THREE.ExtrudeBufferGeometry: .addShape() has been removed.");
  }
});
Object.defineProperties(vl.prototype, {
  dynamic: {
    set: function() {
      console.warn("THREE.Uniform: .dynamic has been removed. Use object.onBeforeRender() instead.");
    }
  },
  onUpdate: {
    value: function() {
      return console.warn("THREE.Uniform: .onUpdate() has been removed. Use object.onBeforeRender() instead."), this;
    }
  }
});
Object.defineProperties(xe.prototype, {
  wrapAround: {
    get: function() {
      console.warn("THREE.Material: .wrapAround has been removed.");
    },
    set: function() {
      console.warn("THREE.Material: .wrapAround has been removed.");
    }
  },
  overdraw: {
    get: function() {
      console.warn("THREE.Material: .overdraw has been removed.");
    },
    set: function() {
      console.warn("THREE.Material: .overdraw has been removed.");
    }
  },
  wrapRGB: {
    get: function() {
      return console.warn("THREE.Material: .wrapRGB has been removed."), new ee();
    }
  },
  shading: {
    get: function() {
      console.error("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead.");
    },
    set: function(e) {
      console.warn("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead."), this.flatShading = e === wu;
    }
  },
  stencilMask: {
    get: function() {
      return console.warn("THREE." + this.type + ": .stencilMask has been removed. Use .stencilFuncMask instead."), this.stencilFuncMask;
    },
    set: function(e) {
      console.warn("THREE." + this.type + ": .stencilMask has been removed. Use .stencilFuncMask instead."), this.stencilFuncMask = e;
    }
  }
});
Object.defineProperties(ur.prototype, {
  metal: {
    get: function() {
      return console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead."), !1;
    },
    set: function() {
      console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead");
    }
  }
});
Object.defineProperties(St.prototype, {
  derivatives: {
    get: function() {
      return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."), this.extensions.derivatives;
    },
    set: function(e) {
      console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."), this.extensions.derivatives = e;
    }
  }
});
Object.assign(Xu.prototype, {
  clearTarget: function(e, t, n, r) {
    console.warn("THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead."), this.setRenderTarget(e), this.clear(t, n, r);
  },
  animate: function(e) {
    console.warn("THREE.WebGLRenderer: .animate() is now .setAnimationLoop()."), this.setAnimationLoop(e);
  },
  getCurrentRenderTarget: function() {
    return console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget()."), this.getRenderTarget();
  },
  getMaxAnisotropy: function() {
    return console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy()."), this.capabilities.getMaxAnisotropy();
  },
  getPrecision: function() {
    return console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision."), this.capabilities.precision;
  },
  resetGLState: function() {
    return console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset()."), this.state.reset();
  },
  supportsFloatTextures: function() {
    return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."), this.extensions.get("OES_texture_float");
  },
  supportsHalfFloatTextures: function() {
    return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."), this.extensions.get("OES_texture_half_float");
  },
  supportsStandardDerivatives: function() {
    return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."), this.extensions.get("OES_standard_derivatives");
  },
  supportsCompressedTextureS3TC: function() {
    return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."), this.extensions.get("WEBGL_compressed_texture_s3tc");
  },
  supportsCompressedTexturePVRTC: function() {
    return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."), this.extensions.get("WEBGL_compressed_texture_pvrtc");
  },
  supportsBlendMinMax: function() {
    return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."), this.extensions.get("EXT_blend_minmax");
  },
  supportsVertexTextures: function() {
    return console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."), this.capabilities.vertexTextures;
  },
  supportsInstancedArrays: function() {
    return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."), this.extensions.get("ANGLE_instanced_arrays");
  },
  enableScissorTest: function(e) {
    console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."), this.setScissorTest(e);
  },
  initMaterial: function() {
    console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.");
  },
  addPrePlugin: function() {
    console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.");
  },
  addPostPlugin: function() {
    console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.");
  },
  updateShadowMap: function() {
    console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.");
  },
  setFaceCulling: function() {
    console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.");
  },
  allocTextureUnit: function() {
    console.warn("THREE.WebGLRenderer: .allocTextureUnit() has been removed.");
  },
  setTexture: function() {
    console.warn("THREE.WebGLRenderer: .setTexture() has been removed.");
  },
  setTexture2D: function() {
    console.warn("THREE.WebGLRenderer: .setTexture2D() has been removed.");
  },
  setTextureCube: function() {
    console.warn("THREE.WebGLRenderer: .setTextureCube() has been removed.");
  },
  getActiveMipMapLevel: function() {
    return console.warn("THREE.WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel()."), this.getActiveMipmapLevel();
  }
});
Object.defineProperties(Xu.prototype, {
  shadowMapEnabled: {
    get: function() {
      return this.shadowMap.enabled;
    },
    set: function(e) {
      console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."), this.shadowMap.enabled = e;
    }
  },
  shadowMapType: {
    get: function() {
      return this.shadowMap.type;
    },
    set: function(e) {
      console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."), this.shadowMap.type = e;
    }
  },
  shadowMapCullFace: {
    get: function() {
      console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.");
    },
    set: function() {
      console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.");
    }
  },
  context: {
    get: function() {
      return console.warn("THREE.WebGLRenderer: .context has been removed. Use .getContext() instead."), this.getContext();
    }
  },
  vr: {
    get: function() {
      return console.warn("THREE.WebGLRenderer: .vr has been renamed to .xr"), this.xr;
    }
  },
  gammaInput: {
    get: function() {
      return console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead."), !1;
    },
    set: function() {
      console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead.");
    }
  },
  gammaOutput: {
    get: function() {
      return console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."), !1;
    },
    set: function(e) {
      console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."), this.outputEncoding = e === !0 ? Cl : Pt;
    }
  }
});
Object.defineProperties(ju.prototype, {
  cullFace: {
    get: function() {
      console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.");
    },
    set: function() {
      console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.");
    }
  },
  renderReverseSided: {
    get: function() {
      console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.");
    },
    set: function() {
      console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.");
    }
  },
  renderSingleSided: {
    get: function() {
      console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.");
    },
    set: function() {
      console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.");
    }
  }
});
Object.defineProperties(Mt.prototype, {
  wrapS: {
    get: function() {
      return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."), this.texture.wrapS;
    },
    set: function(e) {
      console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."), this.texture.wrapS = e;
    }
  },
  wrapT: {
    get: function() {
      return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."), this.texture.wrapT;
    },
    set: function(e) {
      console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."), this.texture.wrapT = e;
    }
  },
  magFilter: {
    get: function() {
      return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."), this.texture.magFilter;
    },
    set: function(e) {
      console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."), this.texture.magFilter = e;
    }
  },
  minFilter: {
    get: function() {
      return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."), this.texture.minFilter;
    },
    set: function(e) {
      console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."), this.texture.minFilter = e;
    }
  },
  anisotropy: {
    get: function() {
      return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."), this.texture.anisotropy;
    },
    set: function(e) {
      console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."), this.texture.anisotropy = e;
    }
  },
  offset: {
    get: function() {
      return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."), this.texture.offset;
    },
    set: function(e) {
      console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."), this.texture.offset = e;
    }
  },
  repeat: {
    get: function() {
      return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."), this.texture.repeat;
    },
    set: function(e) {
      console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."), this.texture.repeat = e;
    }
  },
  format: {
    get: function() {
      return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."), this.texture.format;
    },
    set: function(e) {
      console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."), this.texture.format = e;
    }
  },
  type: {
    get: function() {
      return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."), this.texture.type;
    },
    set: function(e) {
      console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."), this.texture.type = e;
    }
  },
  generateMipmaps: {
    get: function() {
      return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."), this.texture.generateMipmaps;
    },
    set: function(e) {
      console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."), this.texture.generateMipmaps = e;
    }
  }
});
Object.defineProperties(ra.prototype, {
  load: {
    value: function(e) {
      console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.");
      var t = this, n = new pl();
      return n.load(e, function(r) {
        t.setBuffer(r);
      }), this;
    }
  },
  startTime: {
    set: function() {
      console.warn("THREE.Audio: .startTime is now .play( delay ).");
    }
  }
});
sh.prototype.getData = function() {
  return console.warn("THREE.AudioAnalyser: .getData() is now .getFrequencyData()."), this.getFrequencyData();
};
Ii.prototype.updateCubeMap = function(e, t) {
  return console.warn("THREE.CubeCamera: .updateCubeMap() is now .update()."), this.update(e, t);
};
ar.crossOrigin = void 0;
ar.loadTexture = function(e, t, n, r) {
  console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");
  var i = new Qo();
  i.setCrossOrigin(this.crossOrigin);
  var a = i.load(e, n, void 0, r);
  return t && (a.mapping = t), a;
};
ar.loadTextureCube = function(e, t, n, r) {
  console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");
  var i = new $o();
  i.setCrossOrigin(this.crossOrigin);
  var a = i.load(e, n, void 0, r);
  return t && (a.mapping = t), a;
};
ar.loadCompressedTexture = function() {
  console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.");
};
ar.loadCompressedTextureCube = function() {
  console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.");
};
typeof __THREE_DEVTOOLS__ != "undefined" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: {
  revision: Dh
} }));
export {
  ne as B,
  zs as D,
  Zt as M,
  b as V,
  et as a
};
