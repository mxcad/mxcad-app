import { bv as n, _ as c, a as t } from "./lib.js";
var l = function(o) {
  return new Promise(/* @__PURE__ */ function() {
    var u = c(/* @__PURE__ */ t.mark(function r(a) {
      return t.wrap(function(e) {
        for (; ; ) switch (e.prev = e.next) {
          case 0:
            n.onConfirm(function(s) {
              a(s);
            }), n.cancel(function() {
              a(!1);
            }), n.showDialog(!0, o);
          case 1:
          case "end":
            return e.stop();
        }
      }, r);
    }));
    return function(r) {
      return u.apply(this, arguments);
    };
  }());
}, p = function() {
  return {
    dialog: n,
    open: l
  };
};
export {
  p as u
};
