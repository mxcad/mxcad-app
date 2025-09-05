import { bL as T, X as P, F as G, G as N, _ as X, a as U, R as z } from "./lib.js";
import { d as H, f as j, g as M, m as v, o as u, w as k, l as s, a as g, t as C, c as _, F as $, b as q, s as J, G as V } from "./vue.js";
import { u as K } from "./hooks.js";
import { _ as O, b as Q, H as W, y as Y } from "./vuetify.js";
import { a as Z } from "./axios.js";
var I = {
  class: "mt-2"
}, ee = {
  style: {
    width: "90px"
  }
}, te = {
  class: "text-center"
}, ae = {
  class: "text-left"
}, re = {
  style: {
    height: "26px"
  }
}, oe = {
  style: {
    width: "90px"
  }
}, se = {
  class: "d-flex justify-center"
}, ne = {
  key: 0,
  class: "border_box"
}, le = {
  style: {
    width: "auto"
  }
}, ue = {
  style: {
    height: "3px"
  }
};
const ie = /* @__PURE__ */ H({
  __name: "index",
  setup: function(ce) {
    var D = K(), l = D.dialog, i = j([]), F = function(t) {
      if (t === 0) return "class:iconfont gou";
      if (t === 1) return "class:iconfont cha";
    }, A = function(t) {
      if (t === 0) return "#33CD2A";
      if (t === 1) return "#ff0000";
    };
    l.onReveal(function(e) {
      var t = [];
      e.externalReference.forEach(function(a) {
        t.push({
          name: a,
          uploadState: 3,
          progress: 0,
          type: "ref",
          hash: e.hash
        });
      }), e.images.forEach(function(a) {
        t.push({
          name: a,
          uploadState: 3,
          progress: 0,
          hash: e.hash,
          type: "img"
        });
      }), i.value = t;
    });
    var B = function() {
      var t = G() || {}, a = t.baseUrl, d = a === void 0 ? "" : a;
      d.substring(0, 16) == "http://localhost" && (d = N() + d.substring(16));
      var r = document.createElement("input");
      r.setAttribute("type", "file"), r.setAttribute("accept", ".dwg,image/*"), r.style.display = "none", r.setAttribute("multiple", "multiple"), r.setAttribute("capture", "camera"), document.body.appendChild(r), r.onchange = function() {
        if (r.files && !(r.files.length < 1)) {
          var L = Array.from(r.files);
          i.value.filter(function(f) {
            return L.some(function(c) {
              if (c.name === f.name)
                return f.source = c, !0;
            });
          }).forEach(/* @__PURE__ */ function() {
            var f = X(/* @__PURE__ */ U.mark(function c(o) {
              var y, b, m, S, p, x;
              return U.wrap(function(n) {
                for (; ; ) switch (n.prev = n.next) {
                  case 0:
                    y = o.type, b = o.name, m = o.source, S = o.hash, o.uploadState = 2;
                    {
                      n.next = 5;
                      break;
                    }
                  case 2:
                    o.uploadState = 0, n.next = 4;
                    break;
                  case 3:
                    n.prev = 3, x = n.catch(1), o.uploadState = 1, console.warn(x);
                  case 4:
                    n.next = 6;
                    break;
                  case 5:
                    p = new FormData(), m && p.append("file", m), p.append("src_dwgfile_hash", S), p.append("ext_ref_file", b), Z({
                      url: d + (y === "img" ? "/mxcad/up_ext_reference_image" : "/mxcad/up_ext_reference_dwg"),
                      method: "post",
                      headers: {
                        "Content-Type": "multipart/form-data"
                      },
                      data: p,
                      onUploadProgress: function(h) {
                        h.total && (o.progress = h.loaded / h.total * 100, console.log(o.progress));
                      }
                    }).then(function(w) {
                      w.data.code === 0 ? (o.uploadState = 0, r.remove()) : (o.uploadState = 1, r.remove());
                    }, function() {
                      o.uploadState = 1, r.remove();
                    });
                  case 6:
                  case "end":
                    return n.stop();
                }
              }, c, null, [[1, 3]]);
            }));
            return function(c) {
              return f.apply(this, arguments);
            };
          }());
        }
      }, setTimeout(function() {
        r.click();
      }, 100);
    }, E = M(function() {
      return i.value.some(
        function(e) {
          return e.uploadState === 2;
        }
        /* uploading */
      );
    }), R = [{
      name: "选择文件",
      fun: B,
      disabled: function() {
        return i.value.every(
          function(t) {
            return t.uploadState === 0;
          }
          /* success */
        );
      }
    }, {
      name: "取消",
      fun: function() {
        l.cancel(!1), l.showDialog(!1);
      }
    }, {
      name: "继续打开文件",
      fun: function() {
        l.confirm(!0), l.showDialog(!1);
      }
    }];
    return function(e, t) {
      return u(), v(P, {
        title: e.t("2083"),
        width: "450",
        modelValue: V(l).isShow.value,
        "onUpdate:modelValue": t[0] || (t[0] = function(a) {
          return V(l).isShow.value = a;
        }),
        footerBtnList: R
      }, {
        default: k(function() {
          return [s("div", I, [g(O, {
            height: "150",
            class: "mb-2",
            style: {
              overflow: "hidden"
            },
            hover: !1
          }, {
            default: k(function() {
              return [s("thead", null, [s("tr", null, [s("th", ee, C(e.t("2084")), 1), s("th", te, C(e.t("2085")), 1)])]), s("tbody", ae, [(u(!0), _($, null, q(i.value, function(a, d) {
                return u(), _("tr", re, [s("td", oe, [s("div", se, [a.uploadState !== 2 ? (u(), _("div", ne, [g(Q, {
                  icon: F(a.uploadState),
                  color: A(a.uploadState),
                  size: "16"
                }, null, 8, ["icon", "color"])])) : (u(), v(W, {
                  key: 1,
                  rotate: 360,
                  size: 16,
                  width: 2,
                  "model-value": a.progress,
                  color: "teal",
                  indeterminate: a.progress === 100
                }, null, 8, ["model-value", "indeterminate"]))])]), s("td", le, [g(T, {
                  class: "text-left",
                  width: 285,
                  text: a.name,
                  "slice-num": 10
                }, null, 8, ["text"])])]);
              }), 256))])];
            }),
            _: 1
          }), s("div", ue, [E.value ? (u(), v(Y, {
            key: 0,
            indeterminate: "",
            color: "green"
          })) : J("", !0)])])];
        }),
        _: 1
      }, 8, ["title", "modelValue"]);
    };
  }
}), ge = /* @__PURE__ */ z(ie, [["__scopeId", "data-v-f3c61bd6"]]);
export {
  ge as default
};
