var f = Math.pow;
var ut = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {};
function G(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var N = { exports: {} }, P = {
  aliceblue: [240, 248, 255],
  antiquewhite: [250, 235, 215],
  aqua: [0, 255, 255],
  aquamarine: [127, 255, 212],
  azure: [240, 255, 255],
  beige: [245, 245, 220],
  bisque: [255, 228, 196],
  black: [0, 0, 0],
  blanchedalmond: [255, 235, 205],
  blue: [0, 0, 255],
  blueviolet: [138, 43, 226],
  brown: [165, 42, 42],
  burlywood: [222, 184, 135],
  cadetblue: [95, 158, 160],
  chartreuse: [127, 255, 0],
  chocolate: [210, 105, 30],
  coral: [255, 127, 80],
  cornflowerblue: [100, 149, 237],
  cornsilk: [255, 248, 220],
  crimson: [220, 20, 60],
  cyan: [0, 255, 255],
  darkblue: [0, 0, 139],
  darkcyan: [0, 139, 139],
  darkgoldenrod: [184, 134, 11],
  darkgray: [169, 169, 169],
  darkgreen: [0, 100, 0],
  darkgrey: [169, 169, 169],
  darkkhaki: [189, 183, 107],
  darkmagenta: [139, 0, 139],
  darkolivegreen: [85, 107, 47],
  darkorange: [255, 140, 0],
  darkorchid: [153, 50, 204],
  darkred: [139, 0, 0],
  darksalmon: [233, 150, 122],
  darkseagreen: [143, 188, 143],
  darkslateblue: [72, 61, 139],
  darkslategray: [47, 79, 79],
  darkslategrey: [47, 79, 79],
  darkturquoise: [0, 206, 209],
  darkviolet: [148, 0, 211],
  deeppink: [255, 20, 147],
  deepskyblue: [0, 191, 255],
  dimgray: [105, 105, 105],
  dimgrey: [105, 105, 105],
  dodgerblue: [30, 144, 255],
  firebrick: [178, 34, 34],
  floralwhite: [255, 250, 240],
  forestgreen: [34, 139, 34],
  fuchsia: [255, 0, 255],
  gainsboro: [220, 220, 220],
  ghostwhite: [248, 248, 255],
  gold: [255, 215, 0],
  goldenrod: [218, 165, 32],
  gray: [128, 128, 128],
  green: [0, 128, 0],
  greenyellow: [173, 255, 47],
  grey: [128, 128, 128],
  honeydew: [240, 255, 240],
  hotpink: [255, 105, 180],
  indianred: [205, 92, 92],
  indigo: [75, 0, 130],
  ivory: [255, 255, 240],
  khaki: [240, 230, 140],
  lavender: [230, 230, 250],
  lavenderblush: [255, 240, 245],
  lawngreen: [124, 252, 0],
  lemonchiffon: [255, 250, 205],
  lightblue: [173, 216, 230],
  lightcoral: [240, 128, 128],
  lightcyan: [224, 255, 255],
  lightgoldenrodyellow: [250, 250, 210],
  lightgray: [211, 211, 211],
  lightgreen: [144, 238, 144],
  lightgrey: [211, 211, 211],
  lightpink: [255, 182, 193],
  lightsalmon: [255, 160, 122],
  lightseagreen: [32, 178, 170],
  lightskyblue: [135, 206, 250],
  lightslategray: [119, 136, 153],
  lightslategrey: [119, 136, 153],
  lightsteelblue: [176, 196, 222],
  lightyellow: [255, 255, 224],
  lime: [0, 255, 0],
  limegreen: [50, 205, 50],
  linen: [250, 240, 230],
  magenta: [255, 0, 255],
  maroon: [128, 0, 0],
  mediumaquamarine: [102, 205, 170],
  mediumblue: [0, 0, 205],
  mediumorchid: [186, 85, 211],
  mediumpurple: [147, 112, 219],
  mediumseagreen: [60, 179, 113],
  mediumslateblue: [123, 104, 238],
  mediumspringgreen: [0, 250, 154],
  mediumturquoise: [72, 209, 204],
  mediumvioletred: [199, 21, 133],
  midnightblue: [25, 25, 112],
  mintcream: [245, 255, 250],
  mistyrose: [255, 228, 225],
  moccasin: [255, 228, 181],
  navajowhite: [255, 222, 173],
  navy: [0, 0, 128],
  oldlace: [253, 245, 230],
  olive: [128, 128, 0],
  olivedrab: [107, 142, 35],
  orange: [255, 165, 0],
  orangered: [255, 69, 0],
  orchid: [218, 112, 214],
  palegoldenrod: [238, 232, 170],
  palegreen: [152, 251, 152],
  paleturquoise: [175, 238, 238],
  palevioletred: [219, 112, 147],
  papayawhip: [255, 239, 213],
  peachpuff: [255, 218, 185],
  peru: [205, 133, 63],
  pink: [255, 192, 203],
  plum: [221, 160, 221],
  powderblue: [176, 224, 230],
  purple: [128, 0, 128],
  rebeccapurple: [102, 51, 153],
  red: [255, 0, 0],
  rosybrown: [188, 143, 143],
  royalblue: [65, 105, 225],
  saddlebrown: [139, 69, 19],
  salmon: [250, 128, 114],
  sandybrown: [244, 164, 96],
  seagreen: [46, 139, 87],
  seashell: [255, 245, 238],
  sienna: [160, 82, 45],
  silver: [192, 192, 192],
  skyblue: [135, 206, 235],
  slateblue: [106, 90, 205],
  slategray: [112, 128, 144],
  slategrey: [112, 128, 144],
  snow: [255, 250, 250],
  springgreen: [0, 255, 127],
  steelblue: [70, 130, 180],
  tan: [210, 180, 140],
  teal: [0, 128, 128],
  thistle: [216, 191, 216],
  tomato: [255, 99, 71],
  turquoise: [64, 224, 208],
  violet: [238, 130, 238],
  wheat: [245, 222, 179],
  white: [255, 255, 255],
  whitesmoke: [245, 245, 245],
  yellow: [255, 255, 0],
  yellowgreen: [154, 205, 50]
}, I = { exports: {} }, J = function(n) {
  return !n || typeof n == "string" ? !1 : n instanceof Array || Array.isArray(n) || n.length >= 0 && (n.splice instanceof Function || Object.getOwnPropertyDescriptor(n, n.length - 1) && n.constructor.name !== "String");
}, L = J, _ = Array.prototype.concat, B = Array.prototype.slice, C = I.exports = function(n) {
  for (var e = [], r = 0, o = n.length; r < o; r++) {
    var a = n[r];
    L(a) ? e = _.call(e, B.call(a)) : e.push(a);
  }
  return e;
};
C.wrap = function(t) {
  return function() {
    return t(C(arguments));
  };
};
var H = I.exports, x = P, F = H, D = Object.hasOwnProperty, U = /* @__PURE__ */ Object.create(null);
for (var S in x)
  D.call(x, S) && (U[x[S]] = S);
var m = N.exports = {
  to: {},
  get: {}
};
m.get = function(t) {
  var n = t.substring(0, 3).toLowerCase(), e, r;
  switch (n) {
    case "hsl":
      e = m.get.hsl(t), r = "hsl";
      break;
    case "hwb":
      e = m.get.hwb(t), r = "hwb";
      break;
    default:
      e = m.get.rgb(t), r = "rgb";
      break;
  }
  return e ? { model: r, value: e } : null;
};
m.get.rgb = function(t) {
  if (!t)
    return null;
  var n = /^#([a-f0-9]{3,4})$/i, e = /^#([a-f0-9]{6})([a-f0-9]{2})?$/i, r = /^rgba?\(\s*([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/, o = /^rgba?\(\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/, a = /^(\w+)$/, s = [0, 0, 0, 1], l, c, h;
  if (l = t.match(e)) {
    for (h = l[2], l = l[1], c = 0; c < 3; c++) {
      var b = c * 2;
      s[c] = parseInt(l.slice(b, b + 2), 16);
    }
    h && (s[3] = parseInt(h, 16) / 255);
  } else if (l = t.match(n)) {
    for (l = l[1], h = l[3], c = 0; c < 3; c++)
      s[c] = parseInt(l[c] + l[c], 16);
    h && (s[3] = parseInt(h + h, 16) / 255);
  } else if (l = t.match(r)) {
    for (c = 0; c < 3; c++)
      s[c] = parseInt(l[c + 1], 0);
    l[4] && (l[5] ? s[3] = parseFloat(l[4]) * 0.01 : s[3] = parseFloat(l[4]));
  } else if (l = t.match(o)) {
    for (c = 0; c < 3; c++)
      s[c] = Math.round(parseFloat(l[c + 1]) * 2.55);
    l[4] && (l[5] ? s[3] = parseFloat(l[4]) * 0.01 : s[3] = parseFloat(l[4]));
  } else return (l = t.match(a)) ? l[1] === "transparent" ? [0, 0, 0, 0] : D.call(x, l[1]) ? (s = x[l[1]], s[3] = 1, s) : null : null;
  for (c = 0; c < 3; c++)
    s[c] = y(s[c], 0, 255);
  return s[3] = y(s[3], 0, 1), s;
};
m.get.hsl = function(t) {
  if (!t)
    return null;
  var n = /^hsla?\(\s*([+-]?(?:\d{0,3}\.)?\d+)(?:deg)?\s*,?\s*([+-]?[\d\.]+)%\s*,?\s*([+-]?[\d\.]+)%\s*(?:[,|\/]\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/, e = t.match(n);
  if (e) {
    var r = parseFloat(e[4]), o = (parseFloat(e[1]) % 360 + 360) % 360, a = y(parseFloat(e[2]), 0, 100), s = y(parseFloat(e[3]), 0, 100), l = y(isNaN(r) ? 1 : r, 0, 1);
    return [o, a, s, l];
  }
  return null;
};
m.get.hwb = function(t) {
  if (!t)
    return null;
  var n = /^hwb\(\s*([+-]?\d{0,3}(?:\.\d+)?)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/, e = t.match(n);
  if (e) {
    var r = parseFloat(e[4]), o = (parseFloat(e[1]) % 360 + 360) % 360, a = y(parseFloat(e[2]), 0, 100), s = y(parseFloat(e[3]), 0, 100), l = y(isNaN(r) ? 1 : r, 0, 1);
    return [o, a, s, l];
  }
  return null;
};
m.to.hex = function() {
  var t = F(arguments);
  return "#" + O(t[0]) + O(t[1]) + O(t[2]) + (t[3] < 1 ? O(Math.round(t[3] * 255)) : "");
};
m.to.rgb = function() {
  var t = F(arguments);
  return t.length < 4 || t[3] === 1 ? "rgb(" + Math.round(t[0]) + ", " + Math.round(t[1]) + ", " + Math.round(t[2]) + ")" : "rgba(" + Math.round(t[0]) + ", " + Math.round(t[1]) + ", " + Math.round(t[2]) + ", " + t[3] + ")";
};
m.to.rgb.percent = function() {
  var t = F(arguments), n = Math.round(t[0] / 255 * 100), e = Math.round(t[1] / 255 * 100), r = Math.round(t[2] / 255 * 100);
  return t.length < 4 || t[3] === 1 ? "rgb(" + n + "%, " + e + "%, " + r + "%)" : "rgba(" + n + "%, " + e + "%, " + r + "%, " + t[3] + ")";
};
m.to.hsl = function() {
  var t = F(arguments);
  return t.length < 4 || t[3] === 1 ? "hsl(" + t[0] + ", " + t[1] + "%, " + t[2] + "%)" : "hsla(" + t[0] + ", " + t[1] + "%, " + t[2] + "%, " + t[3] + ")";
};
m.to.hwb = function() {
  var t = F(arguments), n = "";
  return t.length >= 4 && t[3] !== 1 && (n = ", " + t[3]), "hwb(" + t[0] + ", " + t[1] + "%, " + t[2] + "%" + n + ")";
};
m.to.keyword = function(t) {
  return U[t.slice(0, 3)];
};
function y(t, n, e) {
  return Math.min(Math.max(n, t), e);
}
function O(t) {
  var n = Math.round(t).toString(16).toUpperCase();
  return n.length < 2 ? "0" + n : n;
}
var Q = N.exports;
const M = P, K = {};
for (const t of Object.keys(M))
  K[M[t]] = t;
const i = {
  rgb: { channels: 3, labels: "rgb" },
  hsl: { channels: 3, labels: "hsl" },
  hsv: { channels: 3, labels: "hsv" },
  hwb: { channels: 3, labels: "hwb" },
  cmyk: { channels: 4, labels: "cmyk" },
  xyz: { channels: 3, labels: "xyz" },
  lab: { channels: 3, labels: "lab" },
  lch: { channels: 3, labels: "lch" },
  hex: { channels: 1, labels: ["hex"] },
  keyword: { channels: 1, labels: ["keyword"] },
  ansi16: { channels: 1, labels: ["ansi16"] },
  ansi256: { channels: 1, labels: ["ansi256"] },
  hcg: { channels: 3, labels: ["h", "c", "g"] },
  apple: { channels: 3, labels: ["r16", "g16", "b16"] },
  gray: { channels: 1, labels: ["gray"] }
};
var j = i;
for (const t of Object.keys(i)) {
  if (!("channels" in i[t]))
    throw new Error("missing channels property: " + t);
  if (!("labels" in i[t]))
    throw new Error("missing channel labels property: " + t);
  if (i[t].labels.length !== i[t].channels)
    throw new Error("channel and label counts mismatch: " + t);
  const { channels: n, labels: e } = i[t];
  delete i[t].channels, delete i[t].labels, Object.defineProperty(i[t], "channels", { value: n }), Object.defineProperty(i[t], "labels", { value: e });
}
i.rgb.hsl = function(t) {
  const n = t[0] / 255, e = t[1] / 255, r = t[2] / 255, o = Math.min(n, e, r), a = Math.max(n, e, r), s = a - o;
  let l, c;
  a === o ? l = 0 : n === a ? l = (e - r) / s : e === a ? l = 2 + (r - n) / s : r === a && (l = 4 + (n - e) / s), l = Math.min(l * 60, 360), l < 0 && (l += 360);
  const h = (o + a) / 2;
  return a === o ? c = 0 : h <= 0.5 ? c = s / (a + o) : c = s / (2 - a - o), [l, c * 100, h * 100];
};
i.rgb.hsv = function(t) {
  let n, e, r, o, a;
  const s = t[0] / 255, l = t[1] / 255, c = t[2] / 255, h = Math.max(s, l, c), b = h - Math.min(s, l, c), v = function(R) {
    return (h - R) / 6 / b + 1 / 2;
  };
  return b === 0 ? (o = 0, a = 0) : (a = b / h, n = v(s), e = v(l), r = v(c), s === h ? o = r - e : l === h ? o = 1 / 3 + n - r : c === h && (o = 2 / 3 + e - n), o < 0 ? o += 1 : o > 1 && (o -= 1)), [
    o * 360,
    a * 100,
    h * 100
  ];
};
i.rgb.hwb = function(t) {
  const n = t[0], e = t[1];
  let r = t[2];
  const o = i.rgb.hsl(t)[0], a = 1 / 255 * Math.min(n, Math.min(e, r));
  return r = 1 - 1 / 255 * Math.max(n, Math.max(e, r)), [o, a * 100, r * 100];
};
i.rgb.cmyk = function(t) {
  const n = t[0] / 255, e = t[1] / 255, r = t[2] / 255, o = Math.min(1 - n, 1 - e, 1 - r), a = (1 - n - o) / (1 - o) || 0, s = (1 - e - o) / (1 - o) || 0, l = (1 - r - o) / (1 - o) || 0;
  return [a * 100, s * 100, l * 100, o * 100];
};
function V(t, n) {
  return f(t[0] - n[0], 2) + f(t[1] - n[1], 2) + f(t[2] - n[2], 2);
}
i.rgb.keyword = function(t) {
  const n = K[t];
  if (n)
    return n;
  let e = 1 / 0, r;
  for (const o of Object.keys(M)) {
    const a = M[o], s = V(t, a);
    s < e && (e = s, r = o);
  }
  return r;
};
i.keyword.rgb = function(t) {
  return M[t];
};
i.rgb.xyz = function(t) {
  let n = t[0] / 255, e = t[1] / 255, r = t[2] / 255;
  n = n > 0.04045 ? f((n + 0.055) / 1.055, 2.4) : n / 12.92, e = e > 0.04045 ? f((e + 0.055) / 1.055, 2.4) : e / 12.92, r = r > 0.04045 ? f((r + 0.055) / 1.055, 2.4) : r / 12.92;
  const o = n * 0.4124 + e * 0.3576 + r * 0.1805, a = n * 0.2126 + e * 0.7152 + r * 0.0722, s = n * 0.0193 + e * 0.1192 + r * 0.9505;
  return [o * 100, a * 100, s * 100];
};
i.rgb.lab = function(t) {
  const n = i.rgb.xyz(t);
  let e = n[0], r = n[1], o = n[2];
  e /= 95.047, r /= 100, o /= 108.883, e = e > 8856e-6 ? f(e, 1 / 3) : 7.787 * e + 16 / 116, r = r > 8856e-6 ? f(r, 1 / 3) : 7.787 * r + 16 / 116, o = o > 8856e-6 ? f(o, 1 / 3) : 7.787 * o + 16 / 116;
  const a = 116 * r - 16, s = 500 * (e - r), l = 200 * (r - o);
  return [a, s, l];
};
i.hsl.rgb = function(t) {
  const n = t[0] / 360, e = t[1] / 100, r = t[2] / 100;
  let o, a, s;
  if (e === 0)
    return s = r * 255, [s, s, s];
  r < 0.5 ? o = r * (1 + e) : o = r + e - r * e;
  const l = 2 * r - o, c = [0, 0, 0];
  for (let h = 0; h < 3; h++)
    a = n + 1 / 3 * -(h - 1), a < 0 && a++, a > 1 && a--, 6 * a < 1 ? s = l + (o - l) * 6 * a : 2 * a < 1 ? s = o : 3 * a < 2 ? s = l + (o - l) * (2 / 3 - a) * 6 : s = l, c[h] = s * 255;
  return c;
};
i.hsl.hsv = function(t) {
  const n = t[0];
  let e = t[1] / 100, r = t[2] / 100, o = e;
  const a = Math.max(r, 0.01);
  r *= 2, e *= r <= 1 ? r : 2 - r, o *= a <= 1 ? a : 2 - a;
  const s = (r + e) / 2, l = r === 0 ? 2 * o / (a + o) : 2 * e / (r + e);
  return [n, l * 100, s * 100];
};
i.hsv.rgb = function(t) {
  const n = t[0] / 60, e = t[1] / 100;
  let r = t[2] / 100;
  const o = Math.floor(n) % 6, a = n - Math.floor(n), s = 255 * r * (1 - e), l = 255 * r * (1 - e * a), c = 255 * r * (1 - e * (1 - a));
  switch (r *= 255, o) {
    case 0:
      return [r, c, s];
    case 1:
      return [l, r, s];
    case 2:
      return [s, r, c];
    case 3:
      return [s, l, r];
    case 4:
      return [c, s, r];
    case 5:
      return [r, s, l];
  }
};
i.hsv.hsl = function(t) {
  const n = t[0], e = t[1] / 100, r = t[2] / 100, o = Math.max(r, 0.01);
  let a, s;
  s = (2 - e) * r;
  const l = (2 - e) * o;
  return a = e * o, a /= l <= 1 ? l : 2 - l, a = a || 0, s /= 2, [n, a * 100, s * 100];
};
i.hwb.rgb = function(t) {
  const n = t[0] / 360;
  let e = t[1] / 100, r = t[2] / 100;
  const o = e + r;
  let a;
  o > 1 && (e /= o, r /= o);
  const s = Math.floor(6 * n), l = 1 - r;
  a = 6 * n - s, s & 1 && (a = 1 - a);
  const c = e + a * (l - e);
  let h, b, v;
  switch (s) {
    default:
    case 6:
    case 0:
      h = l, b = c, v = e;
      break;
    case 1:
      h = c, b = l, v = e;
      break;
    case 2:
      h = e, b = l, v = c;
      break;
    case 3:
      h = e, b = c, v = l;
      break;
    case 4:
      h = c, b = e, v = l;
      break;
    case 5:
      h = l, b = e, v = c;
      break;
  }
  return [h * 255, b * 255, v * 255];
};
i.cmyk.rgb = function(t) {
  const n = t[0] / 100, e = t[1] / 100, r = t[2] / 100, o = t[3] / 100, a = 1 - Math.min(1, n * (1 - o) + o), s = 1 - Math.min(1, e * (1 - o) + o), l = 1 - Math.min(1, r * (1 - o) + o);
  return [a * 255, s * 255, l * 255];
};
i.xyz.rgb = function(t) {
  const n = t[0] / 100, e = t[1] / 100, r = t[2] / 100;
  let o, a, s;
  return o = n * 3.2406 + e * -1.5372 + r * -0.4986, a = n * -0.9689 + e * 1.8758 + r * 0.0415, s = n * 0.0557 + e * -0.204 + r * 1.057, o = o > 31308e-7 ? 1.055 * f(o, 1 / 2.4) - 0.055 : o * 12.92, a = a > 31308e-7 ? 1.055 * f(a, 1 / 2.4) - 0.055 : a * 12.92, s = s > 31308e-7 ? 1.055 * f(s, 1 / 2.4) - 0.055 : s * 12.92, o = Math.min(Math.max(0, o), 1), a = Math.min(Math.max(0, a), 1), s = Math.min(Math.max(0, s), 1), [o * 255, a * 255, s * 255];
};
i.xyz.lab = function(t) {
  let n = t[0], e = t[1], r = t[2];
  n /= 95.047, e /= 100, r /= 108.883, n = n > 8856e-6 ? f(n, 1 / 3) : 7.787 * n + 16 / 116, e = e > 8856e-6 ? f(e, 1 / 3) : 7.787 * e + 16 / 116, r = r > 8856e-6 ? f(r, 1 / 3) : 7.787 * r + 16 / 116;
  const o = 116 * e - 16, a = 500 * (n - e), s = 200 * (e - r);
  return [o, a, s];
};
i.lab.xyz = function(t) {
  const n = t[0], e = t[1], r = t[2];
  let o, a, s;
  a = (n + 16) / 116, o = e / 500 + a, s = a - r / 200;
  const l = f(a, 3), c = f(o, 3), h = f(s, 3);
  return a = l > 8856e-6 ? l : (a - 16 / 116) / 7.787, o = c > 8856e-6 ? c : (o - 16 / 116) / 7.787, s = h > 8856e-6 ? h : (s - 16 / 116) / 7.787, o *= 95.047, a *= 100, s *= 108.883, [o, a, s];
};
i.lab.lch = function(t) {
  const n = t[0], e = t[1], r = t[2];
  let o;
  o = Math.atan2(r, e) * 360 / 2 / Math.PI, o < 0 && (o += 360);
  const s = Math.sqrt(e * e + r * r);
  return [n, s, o];
};
i.lch.lab = function(t) {
  const n = t[0], e = t[1], o = t[2] / 360 * 2 * Math.PI, a = e * Math.cos(o), s = e * Math.sin(o);
  return [n, a, s];
};
i.rgb.ansi16 = function(t, n = null) {
  const [e, r, o] = t;
  let a = n === null ? i.rgb.hsv(t)[2] : n;
  if (a = Math.round(a / 50), a === 0)
    return 30;
  let s = 30 + (Math.round(o / 255) << 2 | Math.round(r / 255) << 1 | Math.round(e / 255));
  return a === 2 && (s += 60), s;
};
i.hsv.ansi16 = function(t) {
  return i.rgb.ansi16(i.hsv.rgb(t), t[2]);
};
i.rgb.ansi256 = function(t) {
  const n = t[0], e = t[1], r = t[2];
  return n === e && e === r ? n < 8 ? 16 : n > 248 ? 231 : Math.round((n - 8) / 247 * 24) + 232 : 16 + 36 * Math.round(n / 255 * 5) + 6 * Math.round(e / 255 * 5) + Math.round(r / 255 * 5);
};
i.ansi16.rgb = function(t) {
  let n = t % 10;
  if (n === 0 || n === 7)
    return t > 50 && (n += 3.5), n = n / 10.5 * 255, [n, n, n];
  const e = (~~(t > 50) + 1) * 0.5, r = (n & 1) * e * 255, o = (n >> 1 & 1) * e * 255, a = (n >> 2 & 1) * e * 255;
  return [r, o, a];
};
i.ansi256.rgb = function(t) {
  if (t >= 232) {
    const a = (t - 232) * 10 + 8;
    return [a, a, a];
  }
  t -= 16;
  let n;
  const e = Math.floor(t / 36) / 5 * 255, r = Math.floor((n = t % 36) / 6) / 5 * 255, o = n % 6 / 5 * 255;
  return [e, r, o];
};
i.rgb.hex = function(t) {
  const e = (((Math.round(t[0]) & 255) << 16) + ((Math.round(t[1]) & 255) << 8) + (Math.round(t[2]) & 255)).toString(16).toUpperCase();
  return "000000".substring(e.length) + e;
};
i.hex.rgb = function(t) {
  const n = t.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
  if (!n)
    return [0, 0, 0];
  let e = n[0];
  n[0].length === 3 && (e = e.split("").map((l) => l + l).join(""));
  const r = parseInt(e, 16), o = r >> 16 & 255, a = r >> 8 & 255, s = r & 255;
  return [o, a, s];
};
i.rgb.hcg = function(t) {
  const n = t[0] / 255, e = t[1] / 255, r = t[2] / 255, o = Math.max(Math.max(n, e), r), a = Math.min(Math.min(n, e), r), s = o - a;
  let l, c;
  return s < 1 ? l = a / (1 - s) : l = 0, s <= 0 ? c = 0 : o === n ? c = (e - r) / s % 6 : o === e ? c = 2 + (r - n) / s : c = 4 + (n - e) / s, c /= 6, c %= 1, [c * 360, s * 100, l * 100];
};
i.hsl.hcg = function(t) {
  const n = t[1] / 100, e = t[2] / 100, r = e < 0.5 ? 2 * n * e : 2 * n * (1 - e);
  let o = 0;
  return r < 1 && (o = (e - 0.5 * r) / (1 - r)), [t[0], r * 100, o * 100];
};
i.hsv.hcg = function(t) {
  const n = t[1] / 100, e = t[2] / 100, r = n * e;
  let o = 0;
  return r < 1 && (o = (e - r) / (1 - r)), [t[0], r * 100, o * 100];
};
i.hcg.rgb = function(t) {
  const n = t[0] / 360, e = t[1] / 100, r = t[2] / 100;
  if (e === 0)
    return [r * 255, r * 255, r * 255];
  const o = [0, 0, 0], a = n % 1 * 6, s = a % 1, l = 1 - s;
  let c = 0;
  switch (Math.floor(a)) {
    case 0:
      o[0] = 1, o[1] = s, o[2] = 0;
      break;
    case 1:
      o[0] = l, o[1] = 1, o[2] = 0;
      break;
    case 2:
      o[0] = 0, o[1] = 1, o[2] = s;
      break;
    case 3:
      o[0] = 0, o[1] = l, o[2] = 1;
      break;
    case 4:
      o[0] = s, o[1] = 0, o[2] = 1;
      break;
    default:
      o[0] = 1, o[1] = 0, o[2] = l;
  }
  return c = (1 - e) * r, [
    (e * o[0] + c) * 255,
    (e * o[1] + c) * 255,
    (e * o[2] + c) * 255
  ];
};
i.hcg.hsv = function(t) {
  const n = t[1] / 100, e = t[2] / 100, r = n + e * (1 - n);
  let o = 0;
  return r > 0 && (o = n / r), [t[0], o * 100, r * 100];
};
i.hcg.hsl = function(t) {
  const n = t[1] / 100, r = t[2] / 100 * (1 - n) + 0.5 * n;
  let o = 0;
  return r > 0 && r < 0.5 ? o = n / (2 * r) : r >= 0.5 && r < 1 && (o = n / (2 * (1 - r))), [t[0], o * 100, r * 100];
};
i.hcg.hwb = function(t) {
  const n = t[1] / 100, e = t[2] / 100, r = n + e * (1 - n);
  return [t[0], (r - n) * 100, (1 - r) * 100];
};
i.hwb.hcg = function(t) {
  const n = t[1] / 100, r = 1 - t[2] / 100, o = r - n;
  let a = 0;
  return o < 1 && (a = (r - o) / (1 - o)), [t[0], o * 100, a * 100];
};
i.apple.rgb = function(t) {
  return [t[0] / 65535 * 255, t[1] / 65535 * 255, t[2] / 65535 * 255];
};
i.rgb.apple = function(t) {
  return [t[0] / 255 * 65535, t[1] / 255 * 65535, t[2] / 255 * 65535];
};
i.gray.rgb = function(t) {
  return [t[0] / 100 * 255, t[0] / 100 * 255, t[0] / 100 * 255];
};
i.gray.hsl = function(t) {
  return [0, 0, t[0]];
};
i.gray.hsv = i.gray.hsl;
i.gray.hwb = function(t) {
  return [0, 100, t[0]];
};
i.gray.cmyk = function(t) {
  return [0, 0, 0, t[0]];
};
i.gray.lab = function(t) {
  return [t[0], 0, 0];
};
i.gray.hex = function(t) {
  const n = Math.round(t[0] / 100 * 255) & 255, r = ((n << 16) + (n << 8) + n).toString(16).toUpperCase();
  return "000000".substring(r.length) + r;
};
i.rgb.gray = function(t) {
  return [(t[0] + t[1] + t[2]) / 3 / 255 * 100];
};
const z = j;
function W() {
  const t = {}, n = Object.keys(z);
  for (let e = n.length, r = 0; r < e; r++)
    t[n[r]] = {
      // http://jsperf.com/1-vs-infinity
      // micro-opt, but this is simple.
      distance: -1,
      parent: null
    };
  return t;
}
function X(t) {
  const n = W(), e = [t];
  for (n[t].distance = 0; e.length; ) {
    const r = e.pop(), o = Object.keys(z[r]);
    for (let a = o.length, s = 0; s < a; s++) {
      const l = o[s], c = n[l];
      c.distance === -1 && (c.distance = n[r].distance + 1, c.parent = r, e.unshift(l));
    }
  }
  return n;
}
function Y(t, n) {
  return function(e) {
    return n(t(e));
  };
}
function Z(t, n) {
  const e = [n[t].parent, t];
  let r = z[n[t].parent][t], o = n[t].parent;
  for (; n[o].parent; )
    e.unshift(n[o].parent), r = Y(z[n[o].parent][o], r), o = n[o].parent;
  return r.conversion = e, r;
}
var tt = function(t) {
  const n = X(t), e = {}, r = Object.keys(n);
  for (let o = r.length, a = 0; a < o; a++) {
    const s = r[a];
    n[s].parent !== null && (e[s] = Z(s, n));
  }
  return e;
};
const $ = j, nt = tt, w = {}, et = Object.keys($);
function rt(t) {
  const n = function(...e) {
    const r = e[0];
    return r == null ? r : (r.length > 1 && (e = r), t(e));
  };
  return "conversion" in t && (n.conversion = t.conversion), n;
}
function ot(t) {
  const n = function(...e) {
    const r = e[0];
    if (r == null)
      return r;
    r.length > 1 && (e = r);
    const o = t(e);
    if (typeof o == "object")
      for (let a = o.length, s = 0; s < a; s++)
        o[s] = Math.round(o[s]);
    return o;
  };
  return "conversion" in t && (n.conversion = t.conversion), n;
}
et.forEach((t) => {
  w[t] = {}, Object.defineProperty(w[t], "channels", { value: $[t].channels }), Object.defineProperty(w[t], "labels", { value: $[t].labels });
  const n = nt(t);
  Object.keys(n).forEach((r) => {
    const o = n[r];
    w[t][r] = ot(o), w[t][r].raw = rt(o);
  });
});
var st = w;
const k = Q, p = st, T = [
  // To be honest, I don't really feel like keyword belongs in color convert, but eh.
  "keyword",
  // Gray conflicts with some method names, and has its own method defined.
  "gray",
  // Shouldn't really be in color-convert either...
  "hex"
], q = {};
for (const t of Object.keys(p))
  q[[...p[t].labels].sort().join("")] = t;
const A = {};
function d(t, n) {
  if (!(this instanceof d))
    return new d(t, n);
  if (n && n in T && (n = null), n && !(n in p))
    throw new Error("Unknown model: " + n);
  let e, r;
  if (t == null)
    this.model = "rgb", this.color = [0, 0, 0], this.valpha = 1;
  else if (t instanceof d)
    this.model = t.model, this.color = [...t.color], this.valpha = t.valpha;
  else if (typeof t == "string") {
    const o = k.get(t);
    if (o === null)
      throw new Error("Unable to parse color from string: " + t);
    this.model = o.model, r = p[this.model].channels, this.color = o.value.slice(0, r), this.valpha = typeof o.value[r] == "number" ? o.value[r] : 1;
  } else if (t.length > 0) {
    this.model = n || "rgb", r = p[this.model].channels;
    const o = Array.prototype.slice.call(t, 0, r);
    this.color = E(o, r), this.valpha = typeof t[r] == "number" ? t[r] : 1;
  } else if (typeof t == "number")
    this.model = "rgb", this.color = [
      t >> 16 & 255,
      t >> 8 & 255,
      t & 255
    ], this.valpha = 1;
  else {
    this.valpha = 1;
    const o = Object.keys(t);
    "alpha" in t && (o.splice(o.indexOf("alpha"), 1), this.valpha = typeof t.alpha == "number" ? t.alpha : 0);
    const a = o.sort().join("");
    if (!(a in q))
      throw new Error("Unable to parse color from object: " + JSON.stringify(t));
    this.model = q[a];
    const { labels: s } = p[this.model], l = [];
    for (e = 0; e < s.length; e++)
      l.push(t[s[e]]);
    this.color = E(l);
  }
  if (A[this.model])
    for (r = p[this.model].channels, e = 0; e < r; e++) {
      const o = A[this.model][e];
      o && (this.color[e] = o(this.color[e]));
    }
  this.valpha = Math.max(0, Math.min(1, this.valpha)), Object.freeze && Object.freeze(this);
}
d.prototype = {
  toString() {
    return this.string();
  },
  toJSON() {
    return this[this.model]();
  },
  string(t) {
    let n = this.model in k.to ? this : this.rgb();
    n = n.round(typeof t == "number" ? t : 1);
    const e = n.valpha === 1 ? n.color : [...n.color, this.valpha];
    return k.to[n.model](e);
  },
  percentString(t) {
    const n = this.rgb().round(typeof t == "number" ? t : 1), e = n.valpha === 1 ? n.color : [...n.color, this.valpha];
    return k.to.rgb.percent(e);
  },
  array() {
    return this.valpha === 1 ? [...this.color] : [...this.color, this.valpha];
  },
  object() {
    const t = {}, { channels: n } = p[this.model], { labels: e } = p[this.model];
    for (let r = 0; r < n; r++)
      t[e[r]] = this.color[r];
    return this.valpha !== 1 && (t.alpha = this.valpha), t;
  },
  unitArray() {
    const t = this.rgb().color;
    return t[0] /= 255, t[1] /= 255, t[2] /= 255, this.valpha !== 1 && t.push(this.valpha), t;
  },
  unitObject() {
    const t = this.rgb().object();
    return t.r /= 255, t.g /= 255, t.b /= 255, this.valpha !== 1 && (t.alpha = this.valpha), t;
  },
  round(t) {
    return t = Math.max(t || 0, 0), new d([...this.color.map(lt(t)), this.valpha], this.model);
  },
  alpha(t) {
    return t !== void 0 ? new d([...this.color, Math.max(0, Math.min(1, t))], this.model) : this.valpha;
  },
  // Rgb
  red: u("rgb", 0, g(255)),
  green: u("rgb", 1, g(255)),
  blue: u("rgb", 2, g(255)),
  hue: u(["hsl", "hsv", "hsl", "hwb", "hcg"], 0, (t) => (t % 360 + 360) % 360),
  saturationl: u("hsl", 1, g(100)),
  lightness: u("hsl", 2, g(100)),
  saturationv: u("hsv", 1, g(100)),
  value: u("hsv", 2, g(100)),
  chroma: u("hcg", 1, g(100)),
  gray: u("hcg", 2, g(100)),
  white: u("hwb", 1, g(100)),
  wblack: u("hwb", 2, g(100)),
  cyan: u("cmyk", 0, g(100)),
  magenta: u("cmyk", 1, g(100)),
  yellow: u("cmyk", 2, g(100)),
  black: u("cmyk", 3, g(100)),
  x: u("xyz", 0, g(95.047)),
  y: u("xyz", 1, g(100)),
  z: u("xyz", 2, g(108.833)),
  l: u("lab", 0, g(100)),
  a: u("lab", 1),
  b: u("lab", 2),
  keyword(t) {
    return t !== void 0 ? new d(t) : p[this.model].keyword(this.color);
  },
  hex(t) {
    return t !== void 0 ? new d(t) : k.to.hex(this.rgb().round().color);
  },
  hexa(t) {
    if (t !== void 0)
      return new d(t);
    const n = this.rgb().round().color;
    let e = Math.round(this.valpha * 255).toString(16).toUpperCase();
    return e.length === 1 && (e = "0" + e), k.to.hex(n) + e;
  },
  rgbNumber() {
    const t = this.rgb().color;
    return (t[0] & 255) << 16 | (t[1] & 255) << 8 | t[2] & 255;
  },
  luminosity() {
    const t = this.rgb().color, n = [];
    for (const [e, r] of t.entries()) {
      const o = r / 255;
      n[e] = o <= 0.04045 ? o / 12.92 : f((o + 0.055) / 1.055, 2.4);
    }
    return 0.2126 * n[0] + 0.7152 * n[1] + 0.0722 * n[2];
  },
  contrast(t) {
    const n = this.luminosity(), e = t.luminosity();
    return n > e ? (n + 0.05) / (e + 0.05) : (e + 0.05) / (n + 0.05);
  },
  level(t) {
    const n = this.contrast(t);
    return n >= 7 ? "AAA" : n >= 4.5 ? "AA" : "";
  },
  isDark() {
    const t = this.rgb().color;
    return (t[0] * 2126 + t[1] * 7152 + t[2] * 722) / 1e4 < 128;
  },
  isLight() {
    return !this.isDark();
  },
  negate() {
    const t = this.rgb();
    for (let n = 0; n < 3; n++)
      t.color[n] = 255 - t.color[n];
    return t;
  },
  lighten(t) {
    const n = this.hsl();
    return n.color[2] += n.color[2] * t, n;
  },
  darken(t) {
    const n = this.hsl();
    return n.color[2] -= n.color[2] * t, n;
  },
  saturate(t) {
    const n = this.hsl();
    return n.color[1] += n.color[1] * t, n;
  },
  desaturate(t) {
    const n = this.hsl();
    return n.color[1] -= n.color[1] * t, n;
  },
  whiten(t) {
    const n = this.hwb();
    return n.color[1] += n.color[1] * t, n;
  },
  blacken(t) {
    const n = this.hwb();
    return n.color[2] += n.color[2] * t, n;
  },
  grayscale() {
    const t = this.rgb().color, n = t[0] * 0.3 + t[1] * 0.59 + t[2] * 0.11;
    return d.rgb(n, n, n);
  },
  fade(t) {
    return this.alpha(this.valpha - this.valpha * t);
  },
  opaquer(t) {
    return this.alpha(this.valpha + this.valpha * t);
  },
  rotate(t) {
    const n = this.hsl();
    let e = n.color[0];
    return e = (e + t) % 360, e = e < 0 ? 360 + e : e, n.color[0] = e, n;
  },
  mix(t, n) {
    if (!t || !t.rgb)
      throw new Error('Argument to "mix" was not a Color instance, but rather an instance of ' + typeof t);
    const e = t.rgb(), r = this.rgb(), o = n === void 0 ? 0.5 : n, a = 2 * o - 1, s = e.alpha() - r.alpha(), l = ((a * s === -1 ? a : (a + s) / (1 + a * s)) + 1) / 2, c = 1 - l;
    return d.rgb(
      l * e.red() + c * r.red(),
      l * e.green() + c * r.green(),
      l * e.blue() + c * r.blue(),
      e.alpha() * o + r.alpha() * (1 - o)
    );
  }
};
for (const t of Object.keys(p)) {
  if (T.includes(t))
    continue;
  const { channels: n } = p[t];
  d.prototype[t] = function(...e) {
    return this.model === t ? new d(this) : e.length > 0 ? new d(e, t) : new d([...ct(p[this.model][t].raw(this.color)), this.valpha], t);
  }, d[t] = function(...e) {
    let r = e[0];
    return typeof r == "number" && (r = E(e, n)), new d(r, t);
  };
}
function at(t, n) {
  return Number(t.toFixed(n));
}
function lt(t) {
  return function(n) {
    return at(n, t);
  };
}
function u(t, n, e) {
  t = Array.isArray(t) ? t : [t];
  for (const r of t)
    (A[r] || (A[r] = []))[n] = e;
  return t = t[0], function(r) {
    let o;
    return r !== void 0 ? (e && (r = e(r)), o = this[t](), o.color[n] = r, o) : (o = this[t]().color[n], e && (o = e(o)), o);
  };
}
function g(t) {
  return function(n) {
    return Math.max(0, Math.min(t, n));
  };
}
function ct(t) {
  return Array.isArray(t) ? t : [t];
}
function E(t, n) {
  for (let e = 0; e < n; e++)
    typeof t[e] != "number" && (t[e] = 0);
  return t;
}
var it = d;
const ft = /* @__PURE__ */ G(it);
export {
  ft as C,
  ut as c,
  G as g
};
