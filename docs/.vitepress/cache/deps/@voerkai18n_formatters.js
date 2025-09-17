import {
  __require
} from "./chunk-FM7WUVZV.js";

// node_modules/@voerkai18n/formatters/dist/index.mjs
var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __require2 = ((x2) => typeof __require !== "undefined" ? __require : typeof Proxy !== "undefined" ? new Proxy(x2, {
  get: (a, b2) => (typeof __require !== "undefined" ? __require : a)[b2]
}) : x2)(function(x2) {
  if (typeof __require !== "undefined") return __require.apply(this, arguments);
  throw Error('Dynamic require of "' + x2 + '" is not supported');
});
function r(t2, n = false) {
  if (typeof t2 == "number") return true;
  if (typeof t2 != "string" || n) return false;
  try {
    if (t2.includes(".")) {
      let e = parseFloat(t2);
      return t2.endsWith(".") ? !isNaN(e) && String(e).length === t2.length - 1 : !isNaN(e) && String(e).length === t2.length;
    } else {
      let e = parseInt(t2);
      return !isNaN(e) && String(e).length === t2.length;
    }
  } catch (e) {
    return false;
  }
}
__name(r, "r");
((a) => typeof __require2 < "u" ? __require2 : typeof Proxy < "u" ? new Proxy(a, { get: __name((b2, c2) => (typeof __require2 < "u" ? __require2 : b2)[c2], "get") }) : a)(function(a) {
  if (typeof __require2 < "u") return __require2.apply(this, arguments);
  throw Error('Dynamic require of "' + a + '" is not supported');
});
function addSplitChars(str, bits = 3) {
  let regexp = new RegExp(String.raw`(?!^)(?=(\d{${bits}})+$)`, "g");
  let r3 = str.replace(regexp, ",");
  if (r3.startsWith(",")) r3 = r3.substring(1);
  if (r3.endsWith(",")) r3 = r3.substring(0, r3.length - 2);
  return r3;
}
__name(addSplitChars, "addSplitChars");
function toCurrency(value, params) {
  let { symbol = "", division = 3, prefix = "", precision = -1, suffix = "", unit = 0, radix = 3, units = [], format = "{symbol}{value}{unit}" } = params;
  let [wholeDigits, decimalDigits] = String(value).split(".");
  if (unit > 0 && radix > 0) {
    if (wholeDigits.length < radix * unit) wholeDigits = Array.from({
      length: radix * unit - wholeDigits.length + 1
    }).fill(0).join("") + wholeDigits;
    decimalDigits = wholeDigits.substring(Number(wholeDigits), wholeDigits.length - radix * unit) + decimalDigits;
    wholeDigits = wholeDigits.substring(0, wholeDigits.length - radix * unit);
    if (wholeDigits == "") wholeDigits = "0";
  }
  let result = [];
  result.push(addSplitChars(wholeDigits, division));
  if (decimalDigits && r(precision) && precision != 0) {
    if (precision == 0) ;
    else if (precision == -1) {
      result.push(`.${decimalDigits}`);
    } else if (precision > 0) {
      if (precision < 0) {
        decimalDigits = String(parseFloat(`0.${decimalDigits}`));
      } else {
        decimalDigits = String(parseFloat(`0.${decimalDigits}`).toFixed(precision)).split(".")[1];
      }
      result.push(`.${decimalDigits}`);
    }
  }
  const unitName = units[unit] || "";
  return format.replace("{value}", result.join("")).replace("{symbol}", symbol).replace("{prefix}", prefix).replace("{suffix}", suffix).replace("{unit}", unitName);
}
__name(toCurrency, "toCurrency");
var currency_default = [
  {
    name: "currency",
    args: [
      "format",
      "unit",
      "precision",
      "prefix",
      "suffix",
      "division",
      "symbol",
      "radix"
    ],
    next(value, args, ctx) {
      const config = ctx.getConfig();
      const params = Object.assign({}, config, args);
      if (params.format in params) {
        params.format = params[params.format];
      }
      params.unit = parseInt(String(params.unit)) || 0;
      if (params.unit > params.units.length - 1) params.unit = params.units.length - 1;
      if (params.unit < 0) params.unit = 0;
      if (params.unit > 0 && params.precision == 2) {
        params.precision = -1;
      }
      return toCurrency(value, params);
    }
  },
  {
    "en-US": {
      units: [
        "",
        " thousands",
        " millions",
        " billions",
        " trillions"
      ],
      radix: 3,
      symbol: "$",
      prefix: "USD",
      suffix: "",
      division: 3,
      precision: 2
    },
    "zh-CN": {
      units: [
        "",
        "万",
        "亿",
        "万亿",
        "万万亿"
      ],
      radix: 4,
      symbol: "￥",
      prefix: "RMB",
      suffix: "元",
      division: 4,
      precision: 2
    }
  },
  {
    default: "{symbol}{value}{unit}",
    long: "{prefix} {symbol}{value}{unit}{suffix}",
    short: "{symbol}{value}{unit}",
    custom: "{prefix} {symbol}{value}{unit}{suffix}",
    format: "default"
  }
];
var number_default = [
  {
    name: "number",
    args: [
      "precision",
      "division"
    ],
    next(value, args, ctx) {
      const config = ctx.getConfig();
      return toCurrency(value, Object.assign({}, config, args));
    }
  },
  {
    "en-US": {
      division: 3
    },
    "zh-CN": {
      division: 4
    }
  }
];
function toDate(value) {
  return value instanceof Date ? value : new Date(value);
}
__name(toDate, "toDate");
var timeSlots_default = [
  {
    name: "timeSlots",
    args: [
      "upper"
    ],
    default: {
      upper: true
    },
    next(value, args, ctx) {
      const options = ctx.getConfig();
      const hour = toDate(value).getHours();
      const isUpper = Boolean(args.upper);
      let slotIndex = options.slots.findIndex((slot) => hour < slot);
      if (slotIndex === -1) slotIndex = options.upperCases.length - 1;
      return isUpper ? options.upperCases[slotIndex] : options.lowerCases[slotIndex];
    }
  },
  {
    "en-US": {
      slots: [
        12
      ],
      lowerCases: [
        "am",
        "pm"
      ],
      upperCases: [
        "AM",
        "PM"
      ]
    },
    "zh-CN": {
      slots: [
        5,
        8,
        11,
        13,
        18
      ],
      lowerCases: [
        "凌晨",
        "早上",
        "上午",
        "中午",
        "下午",
        "晚上"
      ],
      upperCases: [
        "凌晨",
        "早上",
        "上午",
        "中午",
        "下午",
        "晚上"
      ]
    }
  }
];
function u(r3, ...t2) {
  if (t2.length === 0) return r3;
  let c2 = t2.map((a, d) => {
    let i = Object.entries(a || {});
    return i.some(([e, n]) => n === void 0) ? i.reduce((e, [n, s3]) => (s3 !== void 0 && (e[n] = s3), e), {}) : a;
  });
  return Object.assign(r3, ...c2);
}
__name(u, "u");
var s = { en: { month: { long: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], short: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"] }, weekday: { long: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], short: ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"] } }, cn: { month: { long: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"], short: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"] }, weekday: { long: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"], short: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"] } } };
var p = { en: { slots: [12], names: ["AM", "PM"] }, cn: { slots: [6, 9, 11, 13, 18], names: ["凌晨", "早上", "上午", "中午", "下午", "晚上"] } };
var F = "YYYY-MM-DD HH:mm:ss";
function h(e) {
  e < 0 && e > 23 && (e = 0);
  let r3 = [0, ...p[this.language].slots, 24].findIndex((a) => a > e) - 1;
  return p[this.language].names[r3];
}
__name(h, "h");
function H(e, l, r3) {
  let a$1 = u({ language: "cn" }, r3), n = e instanceof Date ? e : new Date(e || Date.now()), t2 = n.getHours(), D = String(t2).padStart(2, "0"), m = t2 > 12 ? t2 - 12 : t2, M = String(m).padStart(2, "0"), u2 = String(n.getMinutes()), c2 = String(n.getSeconds()), T2 = String(n.getMilliseconds()), i = String(n.getFullYear()), d = n.getMonth(), o3 = n.getDay(), S3 = String(n.getDate()), Y = [["HH", D], ["H", t2], ["hh", M], ["h", m], ["mm", u2.padStart(2, "0")], ["m", u2], ["ss", c2.padStart(2, "0")], ["s", c2], ["SSS", T2.padStart(3, "0")], ["A", t2 > 12 ? "PM" : "AM"], ["a", t2 > 12 ? "pm" : "am"], ["t", h.call(a$1, t2)], ["T", h.call(a$1, t2)], ["YYYY", i], ["yyyy", i], ["YY", i.substring(2)], ["MMM", s[a$1.language].month.short[d]], ["MM", String(d + 1).padStart(2, "0")], ["M", d + 1], ["DD", S3.padStart(2, "0")], ["D", S3], ["d", o3], ["dd", s[a$1.language].weekday.short[o3]], ["ddd", s[a$1.language].weekday.short[o3]], ["dddd", s[a$1.language].weekday.long[o3]]], g = l || F;
  return Y.forEach(([b2, f]) => g = g.replaceAll(b2, f)), g;
}
__name(H, "H");
function s2(n, e, i) {
  if (typeof e == "string") {
    let t2 = 0, l;
    for (; (l = n.indexOf(e, t2)) > -1; ) {
      let g = typeof i == "function" ? i(e) : i, r3 = n.length;
      n = n.substring(0, l) + g + n.substring(l + e.length), t2 = l + g.length + n.length - r3;
    }
  } else {
    let t2;
    if (!e.global || !e.multiline) throw new Error("The search parameter must be enabled '/gm' option");
    for (; (t2 = e.exec(n)) !== null; ) {
      t2.index === e.lastIndex && e.lastIndex++;
      let l = n.length, g = t2[0].length, r3 = typeof i == "function" ? i(t2[0], ...t2) : i;
      n = n.substring(0, t2.index) + r3 + n.substring(t2.index + g), e.lastIndex += n.length - l;
    }
  }
  return n;
}
__name(s2, "s");
String.prototype.replaceAll || (String.prototype.replaceAll = function(n, e) {
  return s2(this, n, e);
});
var transformers = {
  local: __name((value) => value.toLocaleString(), "local"),
  iso: __name((value) => value.toISOString(), "iso"),
  utc: __name((value) => value.toUTCString(), "utc"),
  gmt: __name((value) => value.toGMTString(), "gmt")
};
var date_default = [
  {
    global: true,
    name: "date",
    args: [
      "format"
    ],
    next(value, args, ctx) {
      const config = ctx.getConfig();
      const dateValue = toDate(value);
      let format = args.format || config.format;
      if (format in transformers) {
        return transformers[format](dateValue);
      } else if (format in config) {
        format = config[format];
        if (typeof format === "function") {
          return format(dateValue);
        }
      }
      if (typeof format === "string") {
        return H(dateValue, format);
      }
    }
  },
  {
    "en-US": {
      long: "YYYY/MM/DD HH:mm:ss",
      short: "YYYY/MM/DD"
    },
    "zh-CN": {
      long: "YYYY年M月D日 HH点mm分ss秒",
      short: "YYYY年M月D日"
    }
  },
  {
    format: "local"
  }
];
var transformers2 = {
  local: __name((value) => value.toLocaleTimeString(), "local"),
  timestamp: __name((value) => value.getTime(), "timestamp")
};
var time_default = [
  {
    name: "time",
    args: [
      "format"
    ],
    next(value, args, ctx) {
      const config = ctx.getConfig();
      const dateValue = toDate(value);
      let format = args.format || config.format;
      if (format in transformers2) {
        return transformers2[format](dateValue);
      } else if (format in config) {
        format = config[format];
        if (typeof format === "function") {
          return format(dateValue);
        }
      }
      if (typeof format === "string") {
        return H(dateValue, format);
      }
    }
  },
  {
    "en-US": {
      long: "HH:mm:ss"
    },
    "zh-CN": {
      long: "HH点mm分ss秒"
    }
  },
  {
    format: "local",
    short: "HH:mm:ss"
  }
];
var N = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
var o2 = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
var t = ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"];
var E = ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"];
var weekday_default = [
  {
    name: "weekday",
    args: [
      "format"
    ],
    next(value, args, ctx) {
      const options = ctx.getConfig();
      const day = toDate(value).getDay();
      const format = args.format || "long";
      if (typeof format === "string" && format in options) {
        const formatVal = options[format];
        if (typeof formatVal === "function") {
          return formatVal(day);
        } else {
          return formatVal[day];
        }
      }
      return day;
    }
  },
  {
    "en-US": {
      long: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      short: [
        "Sun",
        "Mon",
        "Tues",
        "Wed",
        "Thur",
        "Fri",
        "Sat"
      ]
    },
    "zh-CN": {
      long: N,
      short: o2
    }
  },
  {
    format: "long"
  }
];
var month_default = [
  {
    name: "month",
    args: [
      "format"
    ],
    next(value, args, ctx) {
      const config = ctx.getConfig();
      const month = toDate(value).getMonth() + 1;
      const format = args.format || config.format;
      if (typeof format === "string" && format in config) {
        const formatVal = config[format];
        if (typeof formatVal === "function") {
          return formatVal(month);
        } else {
          return formatVal[month - 1];
        }
      }
      return month;
    }
  },
  {
    "en-US": {
      long: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ],
      short: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sept",
        "Oct",
        "Nov",
        "Dec"
      ]
    },
    "zh-CN": {
      long: t,
      short: E
    }
  },
  {
    format: "long"
  }
];
var quarter_default = [
  {
    name: "quarter",
    args: [
      "format"
    ],
    next(value, args, ctx) {
      const config = ctx.getConfig();
      const month = toDate(value).getMonth() + 1;
      const quarter = Math.floor(month % 3 == 0 ? month / 3 : month / 3 + 1) - 1;
      const format = args.format || config.format;
      if (typeof format === "string" && format in config) {
        const formatVal = config[format];
        if (typeof formatVal === "function") {
          return formatVal(quarter);
        } else {
          return formatVal[quarter];
        }
      }
      return quarter;
    }
  },
  {
    "en-US": {
      long: [
        "First Quarter",
        "Second Quarter",
        "Third Quarter",
        "Fourth Quarter"
      ]
    },
    "zh-CN": {
      long: [
        "一季度",
        "二季度",
        "三季度",
        "四季度"
      ]
    }
  },
  {
    format: "short",
    short: [
      "Q1",
      "Q2",
      "Q3",
      "Q4"
    ]
  }
];
var r2 = [1e3, 6e4, 36e5, 864e5, 6048e5, 2592e6, 31536e6, Number.MAX_SAFE_INTEGER];
function b(a$1, i, u2) {
  let { units: s3, now: f, before: o3, after: m } = u({ units: ["秒", "分钟", "小时", "天", "周", "个月", "年"], now: "刚刚", before: "{value}{unit}前", after: "{value}{unit}后" }, u2), p2 = typeof a$1 == "number" ? new Date(a$1).getTime() : a$1.getTime(), g = (i instanceof Date ? i : typeof i == "number" ? new Date(i) : /* @__PURE__ */ new Date()).getTime(), t2 = p2 - g, e = r2.findIndex((n) => Math.abs(t2) < n) - 1;
  if (e < 0 && (e = 0), e > r2.length - 1 && (e = r2.length - 1), t2 < 1e3 && t2 > -1e3) return f;
  if (t2 <= -1e3) {
    let n = parseInt(String(Math.abs(t2) / r2[e]));
    return o3.replace("{value}", n).replace("{unit}", s3[e]);
  } else {
    let n = parseInt(String(Math.abs(t2) / r2[e]));
    return m.replace("{value}", n).replace("{unit}", s3[e]);
  }
}
__name(b, "b");
var relativeTime_default = [
  {
    name: "relativeTime",
    args: [
      "base"
    ],
    default: __name(() => ({
      base: /* @__PURE__ */ new Date()
    }), "default"),
    next(value, args, ctx) {
      const config = ctx.getConfig();
      const baseTime = args.base || /* @__PURE__ */ new Date();
      return b(toDate(value), baseTime, config);
    }
  },
  {
    "en-US": {
      units: [
        "seconds",
        "minutes",
        "hours",
        "days",
        "weeks",
        "months",
        "years"
      ],
      now: "Just now",
      before: "{value} {unit} ago",
      after: "after {value} {unit}"
    },
    "zh-CN": {
      units: [
        "秒",
        "分钟",
        "小时",
        "天",
        "周",
        "个月",
        "年"
      ],
      now: "刚刚",
      before: "{value}{unit}前",
      after: "{value}{unit}后"
    }
  }
];
var index_default = [
  currency_default,
  number_default,
  timeSlots_default,
  date_default,
  time_default,
  weekday_default,
  month_default,
  quarter_default,
  relativeTime_default
];
export {
  index_default as default
};
//# sourceMappingURL=@voerkai18n_formatters.js.map
