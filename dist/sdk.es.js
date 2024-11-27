var Ci = { env: {}, version: '"v18.20.4"' };
typeof Ci > "u" && (window.process = {
  env: {
    NODE_ENV: "production"
  }
});
var li = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, hi = { exports: {} }, ai = { exports: {} }, si;
function Oi() {
  return si || (si = 1, function(Rn, ei) {
    (function(yn, Ur) {
      Rn.exports = Ur();
    })(typeof self < "u" ? self : li, function() {
      return function(yn) {
        var Ur = {};
        function ir(H) {
          if (Ur[H]) return Ur[H].exports;
          var mr = Ur[H] = {
            i: H,
            l: !1,
            exports: {}
          };
          return yn[H].call(mr.exports, mr, mr.exports, ir), mr.l = !0, mr.exports;
        }
        return ir.m = yn, ir.c = Ur, ir.d = function(H, mr, zr) {
          ir.o(H, mr) || Object.defineProperty(H, mr, {
            enumerable: !0,
            get: zr
          });
        }, ir.r = function(H) {
          typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(H, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(H, "__esModule", {
            value: !0
          });
        }, ir.t = function(H, mr) {
          if (1 & mr && (H = ir(H)), 8 & mr || 4 & mr && typeof H == "object" && H && H.__esModule) return H;
          var zr = /* @__PURE__ */ Object.create(null);
          if (ir.r(zr), Object.defineProperty(zr, "default", {
            enumerable: !0,
            value: H
          }), 2 & mr && typeof H != "string") for (var pe in H) ir.d(zr, pe, (function(Bn) {
            return H[Bn];
          }).bind(null, pe));
          return zr;
        }, ir.n = function(H) {
          var mr = H && H.__esModule ? function() {
            return H.default;
          } : function() {
            return H;
          };
          return ir.d(mr, "a", mr), mr;
        }, ir.o = function(H, mr) {
          return {}.hasOwnProperty.call(H, mr);
        }, ir.p = "", ir(ir.s = 0);
      }([function(yn, Ur, ir) {
        ir.r(Ur), ir.d(Ur, "PopupOpenError", function() {
          return Lo;
        }), ir.d(Ur, "create", function() {
          return ri;
        }), ir.d(Ur, "destroy", function() {
          return Re;
        }), ir.d(Ur, "destroyComponents", function() {
          return Jr;
        }), ir.d(Ur, "destroyAll", function() {
          return Ut;
        }), ir.d(Ur, "PROP_TYPE", function() {
          return qr;
        }), ir.d(Ur, "PROP_SERIALIZATION", function() {
          return pt;
        }), ir.d(Ur, "CONTEXT", function() {
          return Be;
        }), ir.d(Ur, "EVENT", function() {
          return te;
        });
        function H(e, i) {
          return (H = Object.setPrototypeOf || function(o, c) {
            return o.__proto__ = c, o;
          })(e, i);
        }
        function mr(e, i) {
          e.prototype = Object.create(i.prototype), e.prototype.constructor = e, H(e, i);
        }
        function zr() {
          return (zr = Object.assign || function(e) {
            for (var i = 1; i < arguments.length; i++) {
              var o = arguments[i];
              for (var c in o) ({}).hasOwnProperty.call(o, c) && (e[c] = o[c]);
            }
            return e;
          }).apply(this, arguments);
        }
        function pe(e) {
          try {
            if (!e) return !1;
            if (typeof Promise < "u" && e instanceof Promise) return !0;
            if (typeof window < "u" && typeof window.Window == "function" && e instanceof window.Window || typeof window < "u" && typeof window.constructor == "function" && e instanceof window.constructor) return !1;
            var i = {}.toString;
            if (i) {
              var o = i.call(e);
              if (o === "[object Window]" || o === "[object global]" || o === "[object DOMWindow]") return !1;
            }
            if (typeof e.then == "function") return !0;
          } catch {
            return !1;
          }
          return !1;
        }
        var Bn = [], xn = [], yt = 0, Cn;
        function eo() {
          if (!yt && Cn) {
            var e = Cn;
            Cn = null, e.resolve();
          }
        }
        function Et() {
          yt += 1;
        }
        function On() {
          yt -= 1, eo();
        }
        var g = function() {
          function e(o) {
            var c = this;
            if (this.resolved = void 0, this.rejected = void 0, this.errorHandled = void 0, this.value = void 0, this.error = void 0, this.handlers = void 0, this.dispatching = void 0, this.stack = void 0, this.resolved = !1, this.rejected = !1, this.errorHandled = !1, this.handlers = [], o) {
              var d, l, h = !1, C = !1, P = !1;
              Et();
              try {
                o(function(E) {
                  P ? c.resolve(E) : (h = !0, d = E);
                }, function(E) {
                  P ? c.reject(E) : (C = !0, l = E);
                });
              } catch (E) {
                On(), this.reject(E);
                return;
              }
              On(), P = !0, h ? this.resolve(d) : C && this.reject(l);
            }
          }
          var i = e.prototype;
          return i.resolve = function(o) {
            if (this.resolved || this.rejected) return this;
            if (pe(o)) throw new Error("Can not resolve promise with another promise");
            return this.resolved = !0, this.value = o, this.dispatch(), this;
          }, i.reject = function(o) {
            var c = this;
            if (this.resolved || this.rejected) return this;
            if (pe(o)) throw new Error("Can not reject promise with another promise");
            if (!o) {
              var d = o && typeof o.toString == "function" ? o.toString() : {}.toString.call(o);
              o = new Error("Expected reject to be called with Error, got " + d);
            }
            return this.rejected = !0, this.error = o, this.errorHandled || setTimeout(function() {
              c.errorHandled || function(l, h) {
                if (Bn.indexOf(l) === -1) {
                  Bn.push(l), setTimeout(function() {
                    throw l;
                  }, 1);
                  for (var C = 0; C < xn.length; C++) xn[C](l, h);
                }
              }(o, c);
            }, 1), this.dispatch(), this;
          }, i.asyncReject = function(o) {
            return this.errorHandled = !0, this.reject(o), this;
          }, i.dispatch = function() {
            var o = this.resolved, c = this.rejected, d = this.handlers;
            if (!this.dispatching && (o || c)) {
              this.dispatching = !0, Et();
              for (var l = function(D, J) {
                return D.then(function(_) {
                  J.resolve(_);
                }, function(_) {
                  J.reject(_);
                });
              }, h = 0; h < d.length; h++) {
                var C = d[h], P = C.onSuccess, E = C.onError, O = C.promise, y = void 0;
                if (o) try {
                  y = P ? P(this.value) : this.value;
                } catch (D) {
                  O.reject(D);
                  continue;
                }
                else if (c) {
                  if (!E) {
                    O.reject(this.error);
                    continue;
                  }
                  try {
                    y = E(this.error);
                  } catch (D) {
                    O.reject(D);
                    continue;
                  }
                }
                if (y instanceof e && (y.resolved || y.rejected)) {
                  var S = y;
                  S.resolved ? O.resolve(S.value) : O.reject(S.error), S.errorHandled = !0;
                } else pe(y) ? y instanceof e && (y.resolved || y.rejected) ? y.resolved ? O.resolve(y.value) : O.reject(y.error) : l(y, O) : O.resolve(y);
              }
              d.length = 0, this.dispatching = !1, On();
            }
          }, i.then = function(o, c) {
            if (o && typeof o != "function" && !o.call) throw new Error("Promise.then expected a function for success handler");
            if (c && typeof c != "function" && !c.call) throw new Error("Promise.then expected a function for error handler");
            var d = new e();
            return this.handlers.push({
              promise: d,
              onSuccess: o,
              onError: c
            }), this.errorHandled = !0, this.dispatch(), d;
          }, i.catch = function(o) {
            return this.then(void 0, o);
          }, i.finally = function(o) {
            if (o && typeof o != "function" && !o.call) throw new Error("Promise.finally expected a function");
            return this.then(function(c) {
              return e.try(o).then(function() {
                return c;
              });
            }, function(c) {
              return e.try(o).then(function() {
                throw c;
              });
            });
          }, i.timeout = function(o, c) {
            var d = this;
            if (this.resolved || this.rejected) return this;
            var l = setTimeout(function() {
              d.resolved || d.rejected || d.reject(c || new Error("Promise timed out after " + o + "ms"));
            }, o);
            return this.then(function(h) {
              return clearTimeout(l), h;
            });
          }, i.toPromise = function() {
            if (typeof Promise > "u") throw new TypeError("Could not find Promise");
            return Promise.resolve(this);
          }, i.lazy = function() {
            return this.errorHandled = !0, this;
          }, e.resolve = function(o) {
            return o instanceof e ? o : pe(o) ? new e(function(c, d) {
              return o.then(c, d);
            }) : new e().resolve(o);
          }, e.reject = function(o) {
            return new e().reject(o);
          }, e.asyncReject = function(o) {
            return new e().asyncReject(o);
          }, e.all = function(o) {
            var c = new e(), d = o.length, l = [].slice();
            if (!d)
              return c.resolve(l), c;
            for (var h = function(E, O, y) {
              return O.then(function(S) {
                l[E] = S, (d -= 1) == 0 && c.resolve(l);
              }, function(S) {
                y.reject(S);
              });
            }, C = 0; C < o.length; C++) {
              var P = o[C];
              if (P instanceof e) {
                if (P.resolved) {
                  l[C] = P.value, d -= 1;
                  continue;
                }
              } else if (!pe(P)) {
                l[C] = P, d -= 1;
                continue;
              }
              h(C, e.resolve(P), c);
            }
            return d === 0 && c.resolve(l), c;
          }, e.hash = function(o) {
            var c = {}, d = [], l = function(C) {
              if (o.hasOwnProperty(C)) {
                var P = o[C];
                pe(P) ? d.push(P.then(function(E) {
                  c[C] = E;
                })) : c[C] = P;
              }
            };
            for (var h in o) l(h);
            return e.all(d).then(function() {
              return c;
            });
          }, e.map = function(o, c) {
            return e.all(o.map(c));
          }, e.onPossiblyUnhandledException = function(o) {
            return function(c) {
              return xn.push(c), {
                cancel: function() {
                  xn.splice(xn.indexOf(c), 1);
                }
              };
            }(o);
          }, e.try = function(o, c, d) {
            if (o && typeof o != "function" && !o.call) throw new Error("Promise.try expected a function");
            var l;
            Et();
            try {
              l = o.apply(c, d || []);
            } catch (h) {
              return On(), e.reject(h);
            }
            return On(), e.resolve(l);
          }, e.delay = function(o) {
            return new e(function(c) {
              setTimeout(c, o);
            });
          }, e.isPromise = function(o) {
            return !!(o && o instanceof e) || pe(o);
          }, e.flush = function() {
            return function(o) {
              var c = Cn = Cn || new o();
              return eo(), c;
            }(e);
          }, e;
        }();
        function Wn(e) {
          return {}.toString.call(e) === "[object RegExp]";
        }
        var qn = {
          IFRAME: "iframe",
          POPUP: "popup"
        }, Ge = `Call was rejected by callee.\r
`;
        function no(e) {
          return e === void 0 && (e = window), e.location.protocol;
        }
        function to(e) {
          if (e === void 0 && (e = window), e.mockDomain) {
            var i = e.mockDomain.split("//")[0];
            if (i) return i;
          }
          return no(e);
        }
        function oo(e) {
          return e === void 0 && (e = window), to(e) === "about:";
        }
        function ce(e) {
          if (e === void 0 && (e = window), e) try {
            if (e.parent && e.parent !== e) return e.parent;
          } catch {
          }
        }
        function Ye(e) {
          if (e === void 0 && (e = window), e && !ce(e)) try {
            return e.opener;
          } catch {
          }
        }
        function Hn(e) {
          try {
            return !0;
          } catch {
          }
          return !1;
        }
        function Jn(e) {
          e === void 0 && (e = window);
          var i = e.location;
          if (!i) throw new Error("Can not read window location");
          var o = no(e);
          if (!o) throw new Error("Can not read window protocol");
          if (o === "file:") return "file://";
          if (o === "about:") {
            var c = ce(e);
            return c && Hn() ? Jn(c) : "about://";
          }
          var d = i.host;
          if (!d) throw new Error("Can not read window host");
          return o + "//" + d;
        }
        function ur(e) {
          e === void 0 && (e = window);
          var i = Jn(e);
          return i && e.mockDomain && e.mockDomain.indexOf("mock:") === 0 ? e.mockDomain : i;
        }
        function xr(e) {
          if (!function(i) {
            try {
              if (i === window) return !0;
            } catch {
            }
            try {
              var o = Object.getOwnPropertyDescriptor(i, "location");
              if (o && o.enumerable === !1) return !1;
            } catch {
            }
            try {
              if (oo(i) && Hn()) return !0;
            } catch {
            }
            try {
              if (function(c) {
                return c === void 0 && (c = window), to(c) === "mock:";
              }(i) && Hn()) return !0;
            } catch {
            }
            try {
              if (Jn(i) === Jn(window)) return !0;
            } catch {
            }
            return !1;
          }(e)) return !1;
          try {
            if (e === window || oo(e) && Hn() || ur(window) === ur(e)) return !0;
          } catch {
          }
          return !1;
        }
        function de(e) {
          if (!xr(e)) throw new Error("Expected window to be same domain");
          return e;
        }
        function io(e, i) {
          if (!e || !i) return !1;
          var o = ce(i);
          return o ? o === e : function(c) {
            var d = [];
            try {
              for (; c.parent !== c; )
                d.push(c.parent), c = c.parent;
            } catch {
            }
            return d;
          }(i).indexOf(e) !== -1;
        }
        function $n(e) {
          var i = [], o;
          try {
            o = e.frames;
          } catch {
            o = e;
          }
          var c;
          try {
            c = o.length;
          } catch {
          }
          if (c === 0) return i;
          if (c) {
            for (var d = 0; d < c; d++) {
              var l = void 0;
              try {
                l = o[d];
              } catch {
                continue;
              }
              i.push(l);
            }
            return i;
          }
          for (var h = 0; h < 100; h++) {
            var C = void 0;
            try {
              C = o[h];
            } catch {
              return i;
            }
            if (!C) return i;
            i.push(C);
          }
          return i;
        }
        function Zn(e) {
          for (var i = [], o = 0, c = $n(e); o < c.length; o++) {
            var d = c[o];
            i.push(d);
            for (var l = 0, h = Zn(d); l < h.length; l++) i.push(h[l]);
          }
          return i;
        }
        function un(e) {
          e === void 0 && (e = window);
          try {
            if (e.top) return e.top;
          } catch {
          }
          if (ce(e) === e) return e;
          try {
            if (io(window, e) && window.top) return window.top;
          } catch {
          }
          try {
            if (io(e, window) && window.top) return window.top;
          } catch {
          }
          for (var i = 0, o = Zn(e); i < o.length; i++) {
            var c = o[i];
            try {
              if (c.top) return c.top;
            } catch {
            }
            if (ce(c) === c) return c;
          }
        }
        function cn(e) {
          var i = un(e);
          if (!i) throw new Error("Can not determine top window");
          var o = [].concat(Zn(i), [i]);
          return o.indexOf(e) === -1 && (o = [].concat(o, [e], Zn(e))), o;
        }
        var Sn = [], Pt = [];
        function Fr(e, i) {
          i === void 0 && (i = !0);
          try {
            if (e === window) return !1;
          } catch {
            return !0;
          }
          try {
            if (!e) return !0;
          } catch {
            return !0;
          }
          try {
            if (e.closed) return !0;
          } catch (d) {
            return !d || d.message !== Ge;
          }
          if (i && xr(e)) try {
            if (e.mockclosed) return !0;
          } catch {
          }
          try {
            if (!e.parent || !e.top) return !0;
          } catch {
          }
          var o = function(d, l) {
            for (var h = 0; h < d.length; h++) try {
              if (d[h] === l) return h;
            } catch {
            }
            return -1;
          }(Sn, e);
          if (o !== -1) {
            var c = Pt[o];
            if (c && function(d) {
              if (!d.contentWindow || !d.parentNode) return !0;
              var l = d.ownerDocument;
              if (l && l.documentElement && !l.documentElement.contains(d)) {
                for (var h = d; h.parentNode && h.parentNode !== h; ) h = h.parentNode;
                if (!h.host || !l.documentElement.contains(h.host)) return !0;
              }
              return !1;
            }(c)) return !0;
          }
          return !1;
        }
        function ao(e, i) {
          for (var o = $n(e), c = 0; c < o.length; c++) {
            var d = o[c];
            try {
              if (xr(d) && d.name === i && o.indexOf(d) !== -1) return d;
            } catch {
            }
          }
          try {
            if (o.indexOf(e.frames[i]) !== -1) return e.frames[i];
          } catch {
          }
          try {
            if (o.indexOf(e[i]) !== -1) return e[i];
          } catch {
          }
        }
        function In(e) {
          return e === void 0 && (e = window), Ye(e = e || window) || ce(e) || void 0;
        }
        function Lt(e, i) {
          for (var o = 0; o < e.length; o++)
            for (var c = e[o], d = 0; d < i.length; d++) if (c === i[d]) return !0;
          return !1;
        }
        function Gn(e) {
          e === void 0 && (e = window);
          for (var i = 0, o = e; o; ) (o = ce(o)) && (i += 1);
          return i;
        }
        function jt(e, i) {
          var o = un(e) || e, c = un(i) || i;
          try {
            if (o && c) return o === c;
          } catch {
          }
          var d = cn(e), l = cn(i);
          if (Lt(d, l)) return !0;
          var h = Ye(o), C = Ye(c);
          return h && Lt(cn(h), l) || C && Lt(cn(C), d), !1;
        }
        function _e(e, i) {
          if (typeof e == "string") {
            if (typeof i == "string") return e === "*" || i === e;
            if (Wn(i) || Array.isArray(i)) return !1;
          }
          return Wn(e) ? Wn(i) ? e.toString() === i.toString() : !Array.isArray(i) && !!i.match(e) : !!Array.isArray(e) && (Array.isArray(i) ? JSON.stringify(e) === JSON.stringify(i) : !Wn(i) && e.some(function(o) {
            return _e(o, i);
          }));
        }
        function bt(e) {
          return e.match(/^(https?|mock|file):\/\//) ? e.split("/").slice(0, 3).join("/") : ur();
        }
        function Ve(e, i, o, c) {
          o === void 0 && (o = 1e3), c === void 0 && (c = 1 / 0);
          var d;
          return function l() {
            if (Fr(e))
              return d && clearTimeout(d), i();
            c <= 0 ? clearTimeout(d) : (c -= o, d = setTimeout(l, o));
          }(), {
            cancel: function() {
              d && clearTimeout(d);
            }
          };
        }
        function ze(e) {
          try {
            if (e === window) return !0;
          } catch (i) {
            if (i && i.message === Ge) return !0;
          }
          try {
            if ({}.toString.call(e) === "[object Window]") return !0;
          } catch (i) {
            if (i && i.message === Ge) return !0;
          }
          try {
            if (window.Window && e instanceof window.Window) return !0;
          } catch (i) {
            if (i && i.message === Ge) return !0;
          }
          try {
            if (e && e.self === e) return !0;
          } catch (i) {
            if (i && i.message === Ge) return !0;
          }
          try {
            if (e && e.parent === e) return !0;
          } catch (i) {
            if (i && i.message === Ge) return !0;
          }
          try {
            if (e && e.top === e) return !0;
          } catch (i) {
            if (i && i.message === Ge) return !0;
          }
          try {
            if (e && e.__cross_domain_utils_window_check__ === "__unlikely_value__") return !1;
          } catch {
            return !0;
          }
          try {
            if ("postMessage" in e && "self" in e && "location" in e) return !0;
          } catch {
          }
          return !1;
        }
        function uo(e) {
          if (xr(e)) return de(e).frameElement;
          for (var i = 0, o = document.querySelectorAll("iframe"); i < o.length; i++) {
            var c = o[i];
            if (c && c.contentWindow && c.contentWindow === e) return c;
          }
        }
        function Yn(e) {
          if (function(o) {
            return o === void 0 && (o = window), !!ce(o);
          }(e)) {
            var i = uo(e);
            if (i && i.parentElement) {
              i.parentElement.removeChild(i);
              return;
            }
          }
          try {
            e.close();
          } catch {
          }
        }
        function it(e, i) {
          for (var o = 0; o < e.length; o++) try {
            if (e[o] === i) return o;
          } catch {
          }
          return -1;
        }
        var xt = function() {
          function e() {
            if (this.name = void 0, this.weakmap = void 0, this.keys = void 0, this.values = void 0, this.name = "__weakmap_" + (1e9 * Math.random() >>> 0) + "__", function() {
              if (typeof WeakMap > "u" || Object.freeze === void 0) return !1;
              try {
                var o = /* @__PURE__ */ new WeakMap(), c = {};
                return Object.freeze(c), o.set(c, "__testvalue__"), o.get(c) === "__testvalue__";
              } catch {
                return !1;
              }
            }()) try {
              this.weakmap = /* @__PURE__ */ new WeakMap();
            } catch {
            }
            this.keys = [], this.values = [];
          }
          var i = e.prototype;
          return i._cleanupClosedWindows = function() {
            for (var o = this.weakmap, c = this.keys, d = 0; d < c.length; d++) {
              var l = c[d];
              if (ze(l) && Fr(l)) {
                if (o) try {
                  o.delete(l);
                } catch {
                }
                c.splice(d, 1), this.values.splice(d, 1), d -= 1;
              }
            }
          }, i.isSafeToReadWrite = function(o) {
            return !ze(o);
          }, i.set = function(o, c) {
            if (!o) throw new Error("WeakMap expected key");
            var d = this.weakmap;
            if (d) try {
              d.set(o, c);
            } catch {
              delete this.weakmap;
            }
            if (this.isSafeToReadWrite(o)) try {
              var l = this.name, h = o[l];
              h && h[0] === o ? h[1] = c : Object.defineProperty(o, l, {
                value: [o, c],
                writable: !0
              });
              return;
            } catch {
            }
            this._cleanupClosedWindows();
            var C = this.keys, P = this.values, E = it(C, o);
            E === -1 ? (C.push(o), P.push(c)) : P[E] = c;
          }, i.get = function(o) {
            if (!o) throw new Error("WeakMap expected key");
            var c = this.weakmap;
            if (c) try {
              if (c.has(o)) return c.get(o);
            } catch {
              delete this.weakmap;
            }
            if (this.isSafeToReadWrite(o)) try {
              var d = o[this.name];
              return d && d[0] === o ? d[1] : void 0;
            } catch {
            }
            this._cleanupClosedWindows();
            var l = it(this.keys, o);
            if (l !== -1) return this.values[l];
          }, i.delete = function(o) {
            if (!o) throw new Error("WeakMap expected key");
            var c = this.weakmap;
            if (c) try {
              c.delete(o);
            } catch {
              delete this.weakmap;
            }
            if (this.isSafeToReadWrite(o)) try {
              var d = o[this.name];
              d && d[0] === o && (d[0] = d[1] = void 0);
            } catch {
            }
            this._cleanupClosedWindows();
            var l = this.keys, h = it(l, o);
            h !== -1 && (l.splice(h, 1), this.values.splice(h, 1));
          }, i.has = function(o) {
            if (!o) throw new Error("WeakMap expected key");
            var c = this.weakmap;
            if (c) try {
              if (c.has(o)) return !0;
            } catch {
              delete this.weakmap;
            }
            if (this.isSafeToReadWrite(o)) try {
              var d = o[this.name];
              return !(!d || d[0] !== o);
            } catch {
            }
            return this._cleanupClosedWindows(), it(this.keys, o) !== -1;
          }, i.getOrSet = function(o, c) {
            if (this.has(o)) return this.get(o);
            var d = c();
            return this.set(o, d), d;
          }, e;
        }();
        function co(e) {
          return (co = Object.setPrototypeOf ? Object.getPrototypeOf : function(i) {
            return i.__proto__ || Object.getPrototypeOf(i);
          })(e);
        }
        function Bt() {
          if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
          if (typeof Proxy == "function") return !0;
          try {
            return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
            })), !0;
          } catch {
            return !1;
          }
        }
        function Ct(e, i, o) {
          return (Ct = Bt() ? Reflect.construct : function(c, d, l) {
            var h = [null];
            h.push.apply(h, d);
            var C = new (Function.bind.apply(c, h))();
            return l && H(C, l.prototype), C;
          }).apply(null, arguments);
        }
        function so(e) {
          var i = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
          return (so = function(o) {
            if (o === null || (c = o, Function.toString.call(c).indexOf("[native code]") === -1)) return o;
            var c;
            if (typeof o != "function") throw new TypeError("Super expression must either be null or a function");
            if (i !== void 0) {
              if (i.has(o)) return i.get(o);
              i.set(o, d);
            }
            function d() {
              return Ct(o, arguments, co(this).constructor);
            }
            return d.prototype = Object.create(o.prototype, {
              constructor: {
                value: d,
                enumerable: !1,
                writable: !0,
                configurable: !0
              }
            }), H(d, o);
          })(e);
        }
        function fo(e) {
          return e.name || e.__name__ || e.displayName || "anonymous";
        }
        function qt(e, i) {
          try {
            delete e.name, e.name = i;
          } catch {
          }
          return e.__name__ = e.displayName = i, e;
        }
        function Ht(e) {
          if (typeof btoa == "function") return btoa(encodeURIComponent(e).replace(/%([0-9A-F]{2})/g, function(i, o) {
            return String.fromCharCode(parseInt(o, 16));
          })).replace(/[=]/g, "");
          if (typeof Buffer < "u") return Buffer.from(e, "utf8").toString("base64").replace(/[=]/g, "");
          throw new Error("Can not find window.btoa or Buffer");
        }
        function xe() {
          var e = "0123456789abcdef";
          return "uid_" + "xxxxxxxxxx".replace(/./g, function() {
            return e.charAt(Math.floor(Math.random() * e.length));
          }) + "_" + Ht((/* @__PURE__ */ new Date()).toISOString().slice(11, 19).replace("T", ".")).replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
        }
        var at;
        function Ot(e) {
          try {
            return JSON.stringify([].slice.call(e), function(i, o) {
              return typeof o == "function" ? "memoize[" + function(c) {
                if (at = at || new xt(), c == null || typeof c != "object" && typeof c != "function") throw new Error("Invalid object");
                var d = at.get(c);
                return d || (d = typeof c + ":" + xe(), at.set(c, d)), d;
              }(o) + "]" : o;
            });
          } catch {
            throw new Error("Arguments not serializable -- can not be used to memoize");
          }
        }
        function We() {
          return {};
        }
        var Tn = 0, Jt = 0;
        function zn(e, i) {
          i === void 0 && (i = {});
          var o = i.thisNamespace, c = o !== void 0 && o, d = i.time, l, h, C = Tn;
          Tn += 1;
          var P = function() {
            for (var E = arguments.length, O = new Array(E), y = 0; y < E; y++) O[y] = arguments[y];
            C < Jt && (l = null, h = null, C = Tn, Tn += 1);
            var S;
            S = c ? (h = h || new xt()).getOrSet(this, We) : l = l || {};
            var D = Ot(O), J = S[D];
            if (J && d && Date.now() - J.time < d && (delete S[D], J = null), J) return J.value;
            var _ = Date.now(), er = e.apply(this, arguments);
            return S[D] = {
              time: _,
              value: er
            }, er;
          };
          return P.reset = function() {
            l = null, h = null;
          }, qt(P, (i.name || fo(e)) + "::memoized");
        }
        zn.clear = function() {
          Jt = Tn;
        };
        function Wt(e) {
          var i = {};
          function o() {
            for (var c = arguments, d = this, l = arguments.length, h = new Array(l), C = 0; C < l; C++) h[C] = arguments[C];
            var P = Ot(h);
            return i.hasOwnProperty(P) || (i[P] = g.try(function() {
              return e.apply(d, c);
            }).finally(function() {
              delete i[P];
            })), i[P];
          }
          return o.reset = function() {
            i = {};
          }, qt(o, fo(e) + "::promiseMemoized");
        }
        function se() {
        }
        function dn(e) {
          var i = !1;
          return qt(function() {
            if (!i)
              return i = !0, e.apply(this, arguments);
          }, fo(e) + "::once");
        }
        function ut(e, i) {
          if (i === void 0 && (i = 1), i >= 3) return "stringifyError stack overflow";
          try {
            if (!e) return "<unknown error: " + {}.toString.call(e) + ">";
            if (typeof e == "string") return e;
            if (e instanceof Error) {
              var o = e && e.stack, c = e && e.message;
              if (o && c) return o.indexOf(c) !== -1 ? o : c + `
` + o;
              if (o) return o;
              if (c) return c;
            }
            return e && e.toString && typeof e.toString == "function" ? e.toString() : {}.toString.call(e);
          } catch (d) {
            return "Error while stringifying error: " + ut(d, i + 1);
          }
        }
        function ne(e) {
          return typeof e == "string" ? e : e && e.toString && typeof e.toString == "function" ? e.toString() : {}.toString.call(e);
        }
        function _n(e, i) {
          if (!i) return e;
          if (Object.assign) return Object.assign(e, i);
          for (var o in i) i.hasOwnProperty(o) && (e[o] = i[o]);
          return e;
        }
        zn(function(e) {
          if (Object.values) return Object.values(e);
          var i = [];
          for (var o in e) e.hasOwnProperty(o) && i.push(e[o]);
          return i;
        });
        function ct(e) {
          return e;
        }
        function An(e, i) {
          var o;
          return function c() {
            o = setTimeout(function() {
              e(), c();
            }, i);
          }(), {
            cancel: function() {
              clearTimeout(o);
            }
          };
        }
        function dt(e) {
          return [].slice.call(e);
        }
        function Fn(e) {
          return e != null;
        }
        function Vn(e) {
          return {}.toString.call(e) === "[object RegExp]";
        }
        function Xn(e, i, o) {
          if (e.hasOwnProperty(i)) return e[i];
          var c = o();
          return e[i] = c, c;
        }
        function sn(e) {
          var i = [], o = !1, c, d = {
            set: function(l, h) {
              return o || (e[l] = h, d.register(function() {
                delete e[l];
              })), h;
            },
            register: function(l) {
              var h = dn(function() {
                return l(c);
              });
              return o ? l(c) : i.push(h), {
                cancel: function() {
                  var C = i.indexOf(h);
                  C !== -1 && i.splice(C, 1);
                }
              };
            },
            all: function(l) {
              c = l;
              var h = [];
              for (o = !0; i.length; ) {
                var C = i.shift();
                h.push(C());
              }
              return g.all(h).then(se);
            }
          };
          return d;
        }
        function st(e, i) {
          if (i == null) throw new Error("Expected " + e + " to be present");
          return i;
        }
        var St = function(e) {
          mr(i, e);
          function i(o) {
            var c;
            return (c = e.call(this, o) || this).name = c.constructor.name, typeof Error.captureStackTrace == "function" ? Error.captureStackTrace(function(d) {
              if (d === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return d;
            }(c), c.constructor) : c.stack = new Error(o).stack, c;
          }
          return i;
        }(so(Error));
        function Dt() {
          var e = document.body;
          if (!e) throw new Error("Body element not found");
          return e;
        }
        function Kn() {
          return !!document.body && document.readyState === "complete";
        }
        function Fo() {
          return !!document.body && document.readyState === "interactive";
        }
        function lo(e) {
          return encodeURIComponent(e);
        }
        zn(function() {
          return new g(function(e) {
            if (Kn() || Fo()) return e();
            var i = setInterval(function() {
              if (Kn() || Fo())
                return clearInterval(i), e();
            }, 10);
          });
        });
        function Nt(e) {
          return function(i, o, c) {
            c === void 0 && (c = []);
            var d = i.__inline_memoize_cache__ = i.__inline_memoize_cache__ || {}, l = Ot(c);
            return d.hasOwnProperty(l) ? d[l] : d[l] = (function() {
              var h = {};
              if (!e || e.indexOf("=") === -1) return h;
              for (var C = 0, P = e.split("&"); C < P.length; C++) {
                var E = P[C];
                (E = E.split("="))[0] && E[1] && (h[decodeURIComponent(E[0])] = decodeURIComponent(E[1]));
              }
              return h;
            }).apply(void 0, c);
          }(Nt, 0, [e]);
        }
        function ho(e, i) {
          return i === void 0 && (i = {}), i && Object.keys(i).length ? function(o) {
            return o === void 0 && (o = {}), Object.keys(o).filter(function(c) {
              return typeof o[c] == "string" || typeof o[c] == "boolean";
            }).map(function(c) {
              var d = o[c];
              if (typeof d != "string" && typeof d != "boolean") throw new TypeError("Invalid type for query");
              return lo(c) + "=" + lo(d.toString());
            }).join("&");
          }(zr({}, Nt(e), i)) : e;
        }
        function Mo(e, i) {
          e.appendChild(i);
        }
        function vo(e) {
          return e instanceof window.Element || e !== null && typeof e == "object" && e.nodeType === 1 && typeof e.style == "object" && typeof e.ownerDocument == "object";
        }
        function $t(e, i) {
          return i === void 0 && (i = document), vo(e) ? e : typeof e == "string" ? i.querySelector(e) : void 0;
        }
        function Uo(e) {
          return new g(function(i, o) {
            var c = ne(e), d = $t(e);
            if (d) return i(d);
            if (Kn()) return o(new Error("Document is ready and element " + c + " does not exist"));
            var l = setInterval(function() {
              if (d = $t(e))
                i(d), clearInterval(l);
              else if (Kn())
                return clearInterval(l), o(new Error("Document is ready and element " + c + " does not exist"));
            }, 10);
          });
        }
        var Lo = function(e) {
          mr(i, e);
          function i() {
            return e.apply(this, arguments) || this;
          }
          return i;
        }(St), ft;
        function wo(e) {
          if ((ft = ft || new xt()).has(e)) {
            var i = ft.get(e);
            if (i) return i;
          }
          var o = new g(function(c, d) {
            e.addEventListener("load", function() {
              (function(l) {
                if (function() {
                  for (var h = 0; h < Sn.length; h++) {
                    var C = !1;
                    try {
                      C = Sn[h].closed;
                    } catch {
                    }
                    C && (Pt.splice(h, 1), Sn.splice(h, 1));
                  }
                }(), l && l.contentWindow) try {
                  Sn.push(l.contentWindow), Pt.push(l);
                } catch {
                }
              })(e), c(e);
            }), e.addEventListener("error", function(l) {
              e.contentWindow ? c(e) : d(l);
            });
          });
          return ft.set(e, o), o;
        }
        function Rt(e) {
          return wo(e).then(function(i) {
            if (!i.contentWindow) throw new Error("Could not find window in iframe");
            return i.contentWindow;
          });
        }
        function It(e, i) {
          e === void 0 && (e = {});
          var o = e.style || {}, c = function(l, h, C) {
            l === void 0 && (l = "div"), h === void 0 && (h = {}), l = l.toLowerCase();
            var P = document.createElement(l);
            if (h.style && _n(P.style, h.style), h.class && (P.className = h.class.join(" ")), h.id && P.setAttribute("id", h.id), h.attributes) for (var E = 0, O = Object.keys(h.attributes); E < O.length; E++) {
              var y = O[E];
              P.setAttribute(y, h.attributes[y]);
            }
            if (h.styleSheet && function(S, D, J) {
              J === void 0 && (J = window.document), S.styleSheet ? S.styleSheet.cssText = D : S.appendChild(J.createTextNode(D));
            }(P, h.styleSheet), h.html) {
              if (l === "iframe") throw new Error("Iframe html can not be written unless container provided and iframe in DOM");
              P.innerHTML = h.html;
            }
            return P;
          }("iframe", {
            attributes: zr({
              allowTransparency: "true"
            }, e.attributes || {}),
            style: zr({
              backgroundColor: "transparent",
              border: "none"
            }, o),
            html: e.html,
            class: e.class
          }), d = window.navigator.userAgent.match(/MSIE|Edge/i);
          return c.hasAttribute("id") || c.setAttribute("id", xe()), wo(c), (e.url || d) && c.setAttribute("src", e.url || "about:blank"), c;
        }
        function po(e, i, o) {
          return e.addEventListener(i, o), {
            cancel: function() {
              e.removeEventListener(i, o);
            }
          };
        }
        function mo(e) {
          e.style.setProperty("display", "");
        }
        function go(e) {
          e.style.setProperty("display", "none", "important");
        }
        function lt(e) {
          e && e.parentNode && e.parentNode.removeChild(e);
        }
        function Zt(e) {
          return !(e && e.parentNode && e.ownerDocument && e.ownerDocument.documentElement && e.ownerDocument.documentElement.contains(e));
        }
        function yo(e, i, o) {
          var c = o === void 0 ? {} : o, d = c.width, l = d === void 0 || d, h = c.height, C = h === void 0 || h, P = c.interval, E = P === void 0 ? 100 : P, O = c.win, y = O === void 0 ? window : O, S = e.offsetWidth, D = e.offsetHeight, J = !1;
          i({
            width: S,
            height: D
          });
          var _ = function() {
            if (!J && function(G) {
              return !!(G.offsetWidth || G.offsetHeight || G.getClientRects().length);
            }(e)) {
              var Pr = e.offsetWidth, Sr = e.offsetHeight;
              (l && Pr !== S || C && Sr !== D) && i({
                width: Pr,
                height: Sr
              }), S = Pr, D = Sr;
            }
          }, er, nr;
          return y.addEventListener("resize", _), y.ResizeObserver !== void 0 ? ((er = new y.ResizeObserver(_)).observe(e), nr = An(_, 10 * E)) : y.MutationObserver !== void 0 ? ((er = new y.MutationObserver(_)).observe(e, {
            attributes: !0,
            childList: !0,
            subtree: !0,
            characterData: !1
          }), nr = An(_, 10 * E)) : nr = An(_, E), {
            cancel: function() {
              J = !0, er.disconnect(), window.removeEventListener("resize", _), nr.cancel();
            }
          };
        }
        function Qn(e) {
          for (; e.parentNode; ) e = e.parentNode;
          return e.toString() === "[object ShadowRoot]";
        }
        var kn = typeof document < "u" ? document.currentScript : null, jo = zn(function() {
          if (kn || (kn = function() {
            try {
              var e = function() {
                try {
                  throw new Error("_");
                } catch (h) {
                  return h.stack || "";
                }
              }(), i = /.*at [^(]*\((.*):(.+):(.+)\)$/gi.exec(e), o = i && i[1];
              if (!o) return;
              for (var c = 0, d = [].slice.call(document.getElementsByTagName("script")).reverse(); c < d.length; c++) {
                var l = d[c];
                if (l.src && l.src === o) return l;
              }
            } catch {
            }
          }())) return kn;
          throw new Error("Can not determine current script");
        }), Eo = xe();
        zn(function() {
          var e;
          try {
            e = jo();
          } catch {
            return Eo;
          }
          var i = e.getAttribute("data-uid");
          if (i && typeof i == "string" || (i = e.getAttribute("data-uid-auto")) && typeof i == "string") return i;
          if (e.src) {
            var o = function(c) {
              for (var d = "", l = 0; l < c.length; l++) {
                var h = c[l].charCodeAt(0) * l;
                c[l + 1] && (h += c[l + 1].charCodeAt(0) * (l - 1)), d += String.fromCharCode(97 + Math.abs(h) % 26);
              }
              return d;
            }(JSON.stringify({
              src: e.src,
              dataset: e.dataset
            }));
            i = "uid_" + o.slice(o.length - 30);
          } else i = xe();
          return e.setAttribute("data-uid-auto", i), i;
        });
        function Tt(e) {
          return function(i) {
            if (typeof i == "number") return i;
            var o = i.match(/^([0-9]+)(px|%)$/);
            if (!o) throw new Error("Could not match css value from " + i);
            return parseInt(o[1], 10);
          }(e) + "px";
        }
        function Bo(e) {
          return typeof e == "number" ? Tt(e) : typeof (i = e) == "string" && /^[0-9]+%$/.test(i) ? e : Tt(e);
          var i;
        }
        function ht(e) {
          e === void 0 && (e = window);
          var i = "__post_robot_10_0_44__";
          return e !== window ? e[i] : e[i] = e[i] || {};
        }
        var Po = function() {
          return {};
        };
        function fe(e, i) {
          return e === void 0 && (e = "store"), i === void 0 && (i = Po), Xn(ht(), e, function() {
            var o = i();
            return {
              has: function(c) {
                return o.hasOwnProperty(c);
              },
              get: function(c, d) {
                return o.hasOwnProperty(c) ? o[c] : d;
              },
              set: function(c, d) {
                return o[c] = d, d;
              },
              del: function(c) {
                delete o[c];
              },
              getOrSet: function(c, d) {
                return Xn(o, c, d);
              },
              reset: function() {
                o = i();
              },
              keys: function() {
                return Object.keys(o);
              }
            };
          });
        }
        var qo = function() {
        };
        function zt() {
          var e = ht();
          return e.WINDOW_WILDCARD = e.WINDOW_WILDCARD || new qo(), e.WINDOW_WILDCARD;
        }
        function Ae(e, i) {
          return e === void 0 && (e = "store"), i === void 0 && (i = Po), fe("windowStore").getOrSet(e, function() {
            var o = new xt(), c = function(d) {
              return o.getOrSet(d, i);
            };
            return {
              has: function(d) {
                return c(d).hasOwnProperty(e);
              },
              get: function(d, l) {
                var h = c(d);
                return h.hasOwnProperty(e) ? h[e] : l;
              },
              set: function(d, l) {
                return c(d)[e] = l, l;
              },
              del: function(d) {
                delete c(d)[e];
              },
              getOrSet: function(d, l) {
                return Xn(c(d), e, l);
              }
            };
          });
        }
        function fn() {
          return fe("instance").getOrSet("instanceID", xe);
        }
        function bo(e, i) {
          var o = i.domain, c = Ae("helloPromises"), d = c.get(e);
          d && d.resolve({
            domain: o
          });
          var l = g.resolve({
            domain: o
          });
          return c.set(e, l), l;
        }
        function Br(e, i) {
          return (0, i.send)(e, "postrobot_hello", {
            instanceID: fn()
          }, {
            domain: "*",
            timeout: -1
          }).then(function(o) {
            var c = o.origin, d = o.data.instanceID;
            return bo(e, {
              domain: c
            }), {
              win: e,
              domain: c,
              instanceID: d
            };
          });
        }
        function Ho(e, i) {
          var o = i.send;
          return Ae("windowInstanceIDPromises").getOrSet(e, function() {
            return Br(e, {
              send: o
            }).then(function(c) {
              return c.instanceID;
            });
          });
        }
        function At(e) {
          Ae("knownWindows").set(e, !0);
        }
        function le(e) {
          return typeof e == "object" && e !== null && typeof e.__type__ == "string";
        }
        function xo(e) {
          return e === void 0 ? "undefined" : e === null ? "null" : Array.isArray(e) ? "array" : typeof e == "function" ? "function" : typeof e == "object" ? e instanceof Error ? "error" : typeof e.then == "function" ? "promise" : {}.toString.call(e) === "[object RegExp]" ? "regex" : {}.toString.call(e) === "[object Date]" ? "date" : "object" : typeof e == "string" ? "string" : typeof e == "number" ? "number" : typeof e == "boolean" ? "boolean" : void 0;
        }
        function Mn(e, i) {
          return {
            __type__: e,
            __val__: i
          };
        }
        var Fe, Jo = ((Fe = {}).function = function() {
        }, Fe.error = function(e) {
          return Mn("error", {
            message: e.message,
            stack: e.stack,
            code: e.code,
            data: e.data
          });
        }, Fe.promise = function() {
        }, Fe.regex = function(e) {
          return Mn("regex", e.source);
        }, Fe.date = function(e) {
          return Mn("date", e.toJSON());
        }, Fe.array = function(e) {
          return e;
        }, Fe.object = function(e) {
          return e;
        }, Fe.string = function(e) {
          return e;
        }, Fe.number = function(e) {
          return e;
        }, Fe.boolean = function(e) {
          return e;
        }, Fe.null = function(e) {
          return e;
        }, Fe[void 0] = function(e) {
          return Mn("undefined", e);
        }, Fe), $o = {}, Ue, Co = ((Ue = {}).function = function() {
          throw new Error("Function serialization is not implemented; nothing to deserialize");
        }, Ue.error = function(e) {
          var i = e.stack, o = e.code, c = e.data, d = new Error(e.message);
          return d.code = o, c && (d.data = c), d.stack = i + `

` + d.stack, d;
        }, Ue.promise = function() {
          throw new Error("Promise serialization is not implemented; nothing to deserialize");
        }, Ue.regex = function(e) {
          return new RegExp(e);
        }, Ue.date = function(e) {
          return new Date(e);
        }, Ue.array = function(e) {
          return e;
        }, Ue.object = function(e) {
          return e;
        }, Ue.string = function(e) {
          return e;
        }, Ue.number = function(e) {
          return e;
        }, Ue.boolean = function(e) {
          return e;
        }, Ue.null = function(e) {
          return e;
        }, Ue[void 0] = function() {
        }, Ue), Zo = {};
        new g(function(e) {
          if (window.document && window.document.body) return e(window.document.body);
          var i = setInterval(function() {
            if (window.document && window.document.body)
              return clearInterval(i), e(window.document.body);
          }, 10);
        });
        function Dn() {
          for (var e = fe("idToProxyWindow"), i = 0, o = e.keys(); i < o.length; i++) {
            var c = o[i];
            e.get(c).shouldClean() && e.del(c);
          }
        }
        function Le(e, i) {
          var o = i.send, c = i.id, d = c === void 0 ? xe() : c, l = e.then(function(P) {
            if (xr(P)) return de(P).name;
          }), h = e.then(function(P) {
            if (Fr(P)) throw new Error("Window is closed, can not determine type");
            return Ye(P) ? qn.POPUP : qn.IFRAME;
          });
          l.catch(se), h.catch(se);
          var C = function() {
            return e.then(function(P) {
              if (!Fr(P)) return xr(P) ? de(P).name : l;
            });
          };
          return {
            id: d,
            getType: function() {
              return h;
            },
            getInstanceID: Wt(function() {
              return e.then(function(P) {
                return Ho(P, {
                  send: o
                });
              });
            }),
            close: function() {
              return e.then(Yn);
            },
            getName: C,
            focus: function() {
              return e.then(function(P) {
                P.focus();
              });
            },
            isClosed: function() {
              return e.then(function(P) {
                return Fr(P);
              });
            },
            setLocation: function(P, E) {
              return E === void 0 && (E = {}), e.then(function(O) {
                var y = window.location.protocol + "//" + window.location.host, S = E.method, D = S === void 0 ? "get" : S, J = E.body;
                if (P.indexOf("/") === 0) P = "" + y + P;
                else if (!P.match(/^https?:\/\//) && P.indexOf(y) !== 0) throw new Error("Expected url to be http or https url, or absolute path, got " + JSON.stringify(P));
                if (D === "post") return C().then(function(_) {
                  if (!_) throw new Error("Can not post to window without target name");
                  (function(er) {
                    var nr = er.url, Pr = er.target, Sr = er.body, G = er.method, dr = G === void 0 ? "post" : G, sr = document.createElement("form");
                    if (sr.setAttribute("target", Pr), sr.setAttribute("method", dr), sr.setAttribute("action", nr), sr.style.display = "none", Sr) for (var r = 0, n = Object.keys(Sr); r < n.length; r++) {
                      var t, a = n[r], u = document.createElement("input");
                      u.setAttribute("name", a), u.setAttribute("value", (t = Sr[a]) == null ? void 0 : t.toString()), sr.appendChild(u);
                    }
                    Dt().appendChild(sr), sr.submit(), Dt().removeChild(sr);
                  })({
                    url: P,
                    target: _,
                    method: D,
                    body: J
                  });
                });
                if (D !== "get") throw new Error("Unsupported method: " + D);
                if (xr(O)) try {
                  if (O.location && typeof O.location.replace == "function") {
                    O.location.replace(P);
                    return;
                  }
                } catch {
                }
                O.location = P;
              });
            },
            setName: function(P) {
              return e.then(function(E) {
                var O = xr(E), y = uo(E);
                if (!O) throw new Error("Can not set name for cross-domain window: " + P);
                de(E).name = P, y && y.setAttribute("name", P), l = g.resolve(P);
              });
            }
          };
        }
        var ln = function() {
          function e(o) {
            var c = o.send, d = o.win, l = o.serializedWindow;
            this.id = void 0, this.isProxyWindow = !0, this.serializedWindow = void 0, this.actualWindow = void 0, this.actualWindowPromise = void 0, this.send = void 0, this.name = void 0, this.actualWindowPromise = new g(), this.serializedWindow = l || Le(this.actualWindowPromise, {
              send: c
            }), fe("idToProxyWindow").set(this.getID(), this), d && this.setWindow(d, {
              send: c
            });
          }
          var i = e.prototype;
          return i.getID = function() {
            return this.serializedWindow.id;
          }, i.getType = function() {
            return this.serializedWindow.getType();
          }, i.isPopup = function() {
            return this.getType().then(function(o) {
              return o === qn.POPUP;
            });
          }, i.setLocation = function(o, c) {
            var d = this;
            return this.serializedWindow.setLocation(o, c).then(function() {
              return d;
            });
          }, i.getName = function() {
            return this.serializedWindow.getName();
          }, i.setName = function(o) {
            var c = this;
            return this.serializedWindow.setName(o).then(function() {
              return c;
            });
          }, i.close = function() {
            var o = this;
            return this.serializedWindow.close().then(function() {
              return o;
            });
          }, i.focus = function() {
            var o = this, c = this.isPopup(), d = this.getName(), l = g.hash({
              isPopup: c,
              name: d
            }).then(function(C) {
              var P = C.name;
              C.isPopup && P && window.open("", P);
            }), h = this.serializedWindow.focus();
            return g.all([l, h]).then(function() {
              return o;
            });
          }, i.isClosed = function() {
            return this.serializedWindow.isClosed();
          }, i.getWindow = function() {
            return this.actualWindow;
          }, i.setWindow = function(o, c) {
            var d = c.send;
            this.actualWindow = o, this.actualWindowPromise.resolve(this.actualWindow), this.serializedWindow = Le(this.actualWindowPromise, {
              send: d,
              id: this.getID()
            }), Ae("winToProxyWindow").set(o, this);
          }, i.awaitWindow = function() {
            return this.actualWindowPromise;
          }, i.matchWindow = function(o, c) {
            var d = this, l = c.send;
            return g.try(function() {
              return d.actualWindow ? o === d.actualWindow : g.hash({
                proxyInstanceID: d.getInstanceID(),
                knownWindowInstanceID: Ho(o, {
                  send: l
                })
              }).then(function(h) {
                var C = h.proxyInstanceID === h.knownWindowInstanceID;
                return C && d.setWindow(o, {
                  send: l
                }), C;
              });
            });
          }, i.unwrap = function() {
            return this.actualWindow || this;
          }, i.getInstanceID = function() {
            return this.serializedWindow.getInstanceID();
          }, i.shouldClean = function() {
            return !!(this.actualWindow && Fr(this.actualWindow));
          }, i.serialize = function() {
            return this.serializedWindow;
          }, e.unwrap = function(o) {
            return e.isProxyWindow(o) ? o.unwrap() : o;
          }, e.serialize = function(o, c) {
            var d = c.send;
            return Dn(), e.toProxyWindow(o, {
              send: d
            }).serialize();
          }, e.deserialize = function(o, c) {
            var d = c.send;
            return Dn(), fe("idToProxyWindow").get(o.id) || new e({
              serializedWindow: o,
              send: d
            });
          }, e.isProxyWindow = function(o) {
            return !!(o && !ze(o) && o.isProxyWindow);
          }, e.toProxyWindow = function(o, c) {
            var d = c.send;
            if (Dn(), e.isProxyWindow(o)) return o;
            var l = o;
            return Ae("winToProxyWindow").get(l) || new e({
              win: l,
              send: d
            });
          }, e;
        }();
        function Oo(e, i, o, c, d) {
          var l = Ae("methodStore"), h = fe("proxyWindowMethods");
          ln.isProxyWindow(c) ? h.set(e, {
            val: i,
            name: o,
            domain: d,
            source: c
          }) : (h.del(e), l.getOrSet(c, function() {
            return {};
          })[e] = {
            domain: d,
            name: o,
            val: i,
            source: c
          });
        }
        function je(e, i) {
          var o = Ae("methodStore"), c = fe("proxyWindowMethods");
          return o.getOrSet(e, function() {
            return {};
          })[i] || c.get(i);
        }
        function Go(e, i, o, c, d) {
          h = (l = {
            on: d.on,
            send: d.send
          }).on, C = l.send, fe("builtinListeners").getOrSet("functionCalls", function() {
            return h("postrobot_method", {
              domain: "*"
            }, function(O) {
              var y = O.source, S = O.origin, D = O.data, J = D.id, _ = D.name, er = je(y, J);
              if (!er) throw new Error("Could not find method '" + _ + "' with id: " + D.id + " in " + ur(window));
              var nr = er.source, Pr = er.domain, Sr = er.val;
              return g.try(function() {
                if (!_e(Pr, S)) throw new Error("Method '" + D.name + "' domain " + JSON.stringify(Vn(er.domain) ? er.domain.source : er.domain) + " does not match origin " + S + " in " + ur(window));
                if (ln.isProxyWindow(nr)) return nr.matchWindow(y, {
                  send: C
                }).then(function(G) {
                  if (!G) throw new Error("Method call '" + D.name + "' failed - proxy window does not match source in " + ur(window));
                });
              }).then(function() {
                return Sr.apply({
                  source: y,
                  origin: S
                }, D.args);
              }, function(G) {
                return g.try(function() {
                  if (Sr.onError) return Sr.onError(G);
                }).then(function() {
                  throw G.stack && (G.stack = "Remote call to " + _ + "(" + function(dr) {
                    return dr === void 0 && (dr = []), dt(dr).map(function(sr) {
                      return typeof sr == "string" ? "'" + sr + "'" : sr === void 0 ? "undefined" : sr === null ? "null" : typeof sr == "boolean" ? sr.toString() : Array.isArray(sr) ? "[ ... ]" : typeof sr == "object" ? "{ ... }" : typeof sr == "function" ? "() => { ... }" : "<" + typeof sr + ">";
                    }).join(", ");
                  }(D.args) + `) failed

` + G.stack), G;
                });
              }).then(function(G) {
                return {
                  result: G,
                  id: J,
                  name: _
                };
              });
            });
          });
          var l, h, C, P = o.__id__ || xe();
          e = ln.unwrap(e);
          var E = o.__name__ || o.name || c;
          return typeof E == "string" && typeof E.indexOf == "function" && E.indexOf("anonymous::") === 0 && (E = E.replace("anonymous::", c + "::")), ln.isProxyWindow(e) ? (Oo(P, o, E, e, i), e.awaitWindow().then(function(O) {
            Oo(P, o, E, O, i);
          })) : Oo(P, o, E, e, i), Mn("cross_domain_function", {
            id: P,
            name: E
          });
        }
        function Yo(e, i, o, c) {
          var d, l = c.on, h = c.send;
          return function(C, P) {
            P === void 0 && (P = $o);
            var E = JSON.stringify(C, function(O) {
              var y = this[O];
              if (le(this)) return y;
              var S = xo(y);
              if (!S) return y;
              var D = P[S] || Jo[S];
              return D ? D(y, O) : y;
            });
            return E === void 0 ? "undefined" : E;
          }(o, ((d = {}).promise = function(C, P) {
            return function(E, O, y, S, D) {
              return Mn("cross_domain_zalgo_promise", {
                then: Go(E, O, function(J, _) {
                  return y.then(J, _);
                }, S, {
                  on: D.on,
                  send: D.send
                })
              });
            }(e, i, C, P, {
              on: l,
              send: h
            });
          }, d.function = function(C, P) {
            return Go(e, i, C, P, {
              on: l,
              send: h
            });
          }, d.object = function(C) {
            return ze(C) || ln.isProxyWindow(C) ? Mn("cross_domain_window", ln.serialize(C, {
              send: h
            })) : C;
          }, d));
        }
        function Gt(e, i, o, c) {
          var d, l = c.send;
          return function(h, C) {
            if (C === void 0 && (C = Zo), h !== "undefined") return JSON.parse(h, function(P, E) {
              if (le(this)) return E;
              var O, y;
              if (le(E) ? (O = E.__type__, y = E.__val__) : (O = xo(E), y = E), !O) return y;
              var S = C[O] || Co[O];
              return S ? S(y, P) : y;
            });
          }(o, ((d = {}).cross_domain_zalgo_promise = function(h) {
            return function(C, P, E) {
              return new g(E.then);
            }(0, 0, h);
          }, d.cross_domain_function = function(h) {
            return function(C, P, E, O) {
              var y = E.id, S = E.name, D = O.send, J = function(er) {
                er === void 0 && (er = {});
                function nr() {
                  var Pr = arguments;
                  return ln.toProxyWindow(C, {
                    send: D
                  }).awaitWindow().then(function(Sr) {
                    var G = je(Sr, y);
                    if (G && G.val !== nr) return G.val.apply({
                      source: window,
                      origin: ur()
                    }, Pr);
                    var dr = [].slice.call(Pr);
                    return er.fireAndForget ? D(Sr, "postrobot_method", {
                      id: y,
                      name: S,
                      args: dr
                    }, {
                      domain: P,
                      fireAndForget: !0
                    }) : D(Sr, "postrobot_method", {
                      id: y,
                      name: S,
                      args: dr
                    }, {
                      domain: P,
                      fireAndForget: !1
                    }).then(function(sr) {
                      return sr.data.result;
                    });
                  }).catch(function(Sr) {
                    throw Sr;
                  });
                }
                return nr.__name__ = S, nr.__origin__ = P, nr.__source__ = C, nr.__id__ = y, nr.origin = P, nr;
              }, _ = J();
              return _.fireAndForget = J({
                fireAndForget: !0
              }), _;
            }(e, i, h, {
              send: l
            });
          }, d.cross_domain_window = function(h) {
            return ln.deserialize(h, {
              send: l
            });
          }, d));
        }
        var Ft = {};
        Ft.postrobot_post_message = function(e, i, o) {
          o.indexOf("file:") === 0 && (o = "*"), e.postMessage(i, o);
        }, Ft.postrobot_global = function(e, i) {
          if (!function(c) {
            return (c = c || window).navigator.mockUserAgent || c.navigator.userAgent;
          }(window).match(/MSIE|rv:11|trident|edge\/12|edge\/13/i)) throw new Error("Global messaging not needed for browser");
          if (!xr(e)) throw new Error("Post message through global disabled between different domain windows");
          if (jt(window, e) !== !1) throw new Error("Can only use global to communicate between two different windows, not between frames");
          var o = ht(e);
          if (!o) throw new Error("Can not find postRobot global on foreign window");
          o.receiveMessage({
            source: window,
            origin: ur(),
            data: i
          });
        };
        function Yt(e, i, o, c) {
          var d = c.on, l = c.send;
          return g.try(function() {
            var h = Ae().getOrSet(e, function() {
              return {};
            });
            return h.buffer = h.buffer || [], h.buffer.push(o), h.flush = h.flush || g.flush().then(function() {
              if (Fr(e)) throw new Error("Window is closed");
              var C = Yo(e, i, ((P = {}).__post_robot_10_0_44__ = h.buffer || [], P), {
                on: d,
                send: l
              }), P;
              delete h.buffer;
              for (var E = Object.keys(Ft), O = [], y = 0; y < E.length; y++) {
                var S = E[y];
                try {
                  Ft[S](e, C, i);
                } catch (D) {
                  O.push(D);
                }
              }
              if (O.length === E.length) throw new Error(`All post-robot messaging strategies failed:

` + O.map(function(D, J) {
                return J + ". " + ut(D);
              }).join(`

`));
            }), h.flush.then(function() {
              delete h.flush;
            });
          }).then(se);
        }
        function Wo(e) {
          return fe("responseListeners").get(e);
        }
        function _t(e) {
          fe("responseListeners").del(e);
        }
        function So(e) {
          return fe("erroredResponseListeners").has(e);
        }
        function _o(e) {
          var i = e.name, o = e.win, c = e.domain, d = Ae("requestListeners");
          if (o === "*" && (o = null), c === "*" && (c = null), !i) throw new Error("Name required to get request listener");
          for (var l = 0, h = [o, zt()]; l < h.length; l++) {
            var C = h[l];
            if (C) {
              var P = d.get(C);
              if (P) {
                var E = P[i];
                if (E) {
                  if (c && typeof c == "string") {
                    if (E[c]) return E[c];
                    if (E.__domain_regex__) for (var O = 0, y = E.__domain_regex__; O < y.length; O++) {
                      var S = y[O], D = S.listener;
                      if (_e(S.regex, c)) return D;
                    }
                  }
                  if (E["*"]) return E["*"];
                }
              }
            }
          }
        }
        function Vo(e, i, o, c) {
          var d = c.on, l = c.send, h = _o({
            name: o.name,
            win: e,
            domain: i
          }), C = o.name === "postrobot_method" && o.data && typeof o.data.name == "string" ? o.data.name + "()" : o.name;
          function P(E, O, y) {
            return g.flush().then(function() {
              if (!o.fireAndForget && !Fr(e)) try {
                return Yt(e, i, {
                  id: xe(),
                  origin: ur(window),
                  type: "postrobot_message_response",
                  hash: o.hash,
                  name: o.name,
                  ack: E,
                  data: O,
                  error: y
                }, {
                  on: d,
                  send: l
                });
              } catch (S) {
                throw new Error("Send response message failed for " + C + " in " + ur() + `

` + ut(S));
              }
            });
          }
          return g.all([g.flush().then(function() {
            if (!o.fireAndForget && !Fr(e)) try {
              return Yt(e, i, {
                id: xe(),
                origin: ur(window),
                type: "postrobot_message_ack",
                hash: o.hash,
                name: o.name
              }, {
                on: d,
                send: l
              });
            } catch (E) {
              throw new Error("Send ack message failed for " + C + " in " + ur() + `

` + ut(E));
            }
          }), g.try(function() {
            if (!h) throw new Error("No handler found for post message: " + o.name + " from " + i + " in " + window.location.protocol + "//" + window.location.host + window.location.pathname);
            if (!_e(h.domain, i)) throw new Error("Request origin " + i + " does not match domain " + h.domain.toString());
            return h.handler({
              source: e,
              origin: i,
              data: o.data
            });
          }).then(function(E) {
            return P("success", E);
          }, function(E) {
            return P("error", null, E);
          })]).then(se).catch(function(E) {
            if (h && h.handleError) return h.handleError(E);
            throw E;
          });
        }
        function Do(e, i, o) {
          if (!So(o.hash)) {
            var c = Wo(o.hash);
            if (!c) throw new Error("No handler found for post message ack for message: " + o.name + " from " + i + " in " + window.location.protocol + "//" + window.location.host + window.location.pathname);
            try {
              if (!_e(c.domain, i)) throw new Error("Ack origin " + i + " does not match domain " + c.domain.toString());
              if (e !== c.win) throw new Error("Ack source does not match registered window");
            } catch (d) {
              c.promise.reject(d);
            }
            c.ack = !0;
          }
        }
        function Xo(e, i, o) {
          if (!So(o.hash)) {
            var c = Wo(o.hash);
            if (!c) throw new Error("No handler found for post message response for message: " + o.name + " from " + i + " in " + window.location.protocol + "//" + window.location.host + window.location.pathname);
            if (!_e(c.domain, i)) throw new Error("Response origin " + i + " does not match domain " + (d = c.domain, Array.isArray(d) ? "(" + d.join(" | ") + ")" : Wn(d) ? "RegExp(" + d.toString() + ")" : d.toString()));
            var d;
            if (e !== c.win) throw new Error("Response source does not match registered window");
            _t(o.hash), o.ack === "error" ? c.promise.reject(o.error) : o.ack === "success" && c.promise.resolve({
              source: e,
              origin: i,
              data: o.data
            });
          }
        }
        function Vt(e, i) {
          var o = i.on, c = i.send, d = fe("receivedMessages");
          try {
            if (!window || window.closed || !e.source) return;
          } catch {
            return;
          }
          var l = e.source, h = e.origin, C = function(O, y, S, D) {
            var J = D.on, _ = D.send, er;
            try {
              er = Gt(y, S, O, {
                on: J,
                send: _
              });
            } catch {
              return;
            }
            if (er && typeof er == "object" && er !== null) {
              var nr = er.__post_robot_10_0_44__;
              if (Array.isArray(nr)) return nr;
            }
          }(e.data, l, h, {
            on: o,
            send: c
          });
          if (C) {
            At(l);
            for (var P = 0; P < C.length; P++) {
              var E = C[P];
              if (d.has(E.id) || (d.set(E.id, !0), Fr(l) && !E.fireAndForget)) return;
              E.origin.indexOf("file:") === 0 && (h = "file://");
              try {
                E.type === "postrobot_message_request" ? Vo(l, h, E, {
                  on: o,
                  send: c
                }) : E.type === "postrobot_message_response" ? Xo(l, h, E) : E.type === "postrobot_message_ack" && Do(l, h, E);
              } catch (O) {
                setTimeout(function() {
                  throw O;
                }, 0);
              }
            }
          }
        }
        function hn(e, i, o) {
          if (!e) throw new Error("Expected name");
          if (typeof (i = i || {}) == "function" && (o = i, i = {}), !o) throw new Error("Expected handler");
          (i = i || {}).name = e, i.handler = o || i.handler;
          var c = i.window, d = i.domain, l = function h(C, P) {
            var E = C.name, O = C.win, y = C.domain, S = Ae("requestListeners");
            if (!E || typeof E != "string") throw new Error("Name required to add request listener");
            if (Array.isArray(O)) {
              for (var D = [], J = 0, _ = O; J < _.length; J++) D.push(h({
                name: E,
                domain: y,
                win: _[J]
              }, P));
              return {
                cancel: function() {
                  for (var t = 0; t < D.length; t++) D[t].cancel();
                }
              };
            }
            if (Array.isArray(y)) {
              for (var er = [], nr = 0, Pr = y; nr < Pr.length; nr++) er.push(h({
                name: E,
                win: O,
                domain: Pr[nr]
              }, P));
              return {
                cancel: function() {
                  for (var t = 0; t < er.length; t++) er[t].cancel();
                }
              };
            }
            var Sr = _o({
              name: E,
              win: O,
              domain: y
            });
            if (O && O !== "*" || (O = zt()), y = y || "*", Sr) throw O && y ? new Error("Request listener already exists for " + E + " on domain " + y.toString() + " for " + (O === zt() ? "wildcard" : "specified") + " window") : O ? new Error("Request listener already exists for " + E + " for " + (O === zt() ? "wildcard" : "specified") + " window") : y ? new Error("Request listener already exists for " + E + " on domain " + y.toString()) : new Error("Request listener already exists for " + E);
            var G = S.getOrSet(O, function() {
              return {};
            }), dr = Xn(G, E, function() {
              return {};
            }), sr = y.toString(), r, n;
            return Vn(y) ? (r = Xn(dr, "__domain_regex__", function() {
              return [];
            })).push(n = {
              regex: y,
              listener: P
            }) : dr[sr] = P, {
              cancel: function() {
                delete dr[sr], n && (r.splice(r.indexOf(n, 1)), r.length || delete dr.__domain_regex__), Object.keys(dr).length || delete G[E], O && !Object.keys(G).length && S.del(O);
              }
            };
          }({
            name: e,
            win: c,
            domain: d
          }, {
            handler: i.handler,
            handleError: i.errorHandler || function(h) {
              throw h;
            },
            window: c,
            domain: d || "*",
            name: e
          });
          return {
            cancel: function() {
              l.cancel();
            }
          };
        }
        var vn = function e(i, o, c, d) {
          var l = (d = d || {}).domain || "*", h = d.timeout || -1, C = d.timeout || 5e3, P = d.fireAndForget || !1;
          return g.try(function() {
            if (function(E, O, y) {
              if (!E) throw new Error("Expected name");
              if (y && typeof y != "string" && !Array.isArray(y) && !Vn(y)) throw new TypeError("Can not send " + E + ". Expected domain " + JSON.stringify(y) + " to be a string, array, or regex");
              if (Fr(O)) throw new Error("Can not send " + E + ". Target window is closed");
            }(o, i, l), function(E, O) {
              var y = In(O);
              if (y) return y === E;
              if (O === E || un(O) === O) return !1;
              for (var S = 0, D = $n(E); S < D.length; S++) if (D[S] === O) return !0;
              return !1;
            }(window, i)) return function(E, O, y) {
              O === void 0 && (O = 5e3), y === void 0 && (y = "Window");
              var S = function(D) {
                return Ae("helloPromises").getOrSet(D, function() {
                  return new g();
                });
              }(E);
              return O !== -1 && (S = S.timeout(O, new Error(y + " did not load after " + O + "ms"))), S;
            }(i, C);
          }).then(function(E) {
            return function(O, y, S, D) {
              var J = D.send;
              return g.try(function() {
                return typeof y == "string" ? y : g.try(function() {
                  return S || Br(O, {
                    send: J
                  }).then(function(_) {
                    return _.domain;
                  });
                }).then(function(_) {
                  if (!_e(y, y)) throw new Error("Domain " + ne(y) + " does not match " + ne(y));
                  return _;
                });
              });
            }(i, l, (E === void 0 ? {} : E).domain, {
              send: e
            });
          }).then(function(E) {
            var O = E, y = o === "postrobot_method" && c && typeof c.name == "string" ? c.name + "()" : o, S = new g(), D = o + "_" + xe();
            if (!P) {
              var J = {
                name: o,
                win: i,
                domain: O,
                promise: S
              };
              (function(dr, sr) {
                fe("responseListeners").set(dr, sr);
              })(D, J);
              var _ = Ae("requestPromises").getOrSet(i, function() {
                return [];
              });
              _.push(S), S.catch(function() {
                (function(dr) {
                  fe("erroredResponseListeners").set(dr, !0);
                })(D), _t(D);
              });
              var er = function(dr) {
                return Ae("knownWindows").get(dr, !1);
              }(i) ? 1e4 : 2e3, nr = h, Pr = er, Sr = nr, G = An(function() {
                return Fr(i) ? S.reject(new Error("Window closed for " + o + " before " + (J.ack ? "response" : "ack"))) : J.cancelled ? S.reject(new Error("Response listener was cancelled for " + o)) : (Pr = Math.max(Pr - 500, 0), Sr !== -1 && (Sr = Math.max(Sr - 500, 0)), J.ack || Pr !== 0 ? Sr === 0 ? S.reject(new Error("No response for postMessage " + y + " in " + ur() + " in " + nr + "ms")) : void 0 : S.reject(new Error("No ack for postMessage " + y + " in " + ur() + " in " + er + "ms")));
              }, 500);
              S.finally(function() {
                G.cancel(), _.splice(_.indexOf(S, 1));
              }).catch(se);
            }
            return Yt(i, O, {
              id: xe(),
              origin: ur(window),
              type: "postrobot_message_request",
              hash: D,
              name: o,
              data: c,
              fireAndForget: P
            }, {
              on: hn,
              send: e
            }).then(function() {
              return P ? S.resolve() : S;
            }, function(dr) {
              throw new Error("Send request message failed for " + y + " in " + ur() + `

` + ut(dr));
            });
          });
        };
        function rt(e) {
          return ln.toProxyWindow(e, {
            send: vn
          });
        }
        function vt(e) {
          if (!xr(e)) throw new Error("Can not get global for window on different domain");
          return e.__zoid_9_0_86__ || (e.__zoid_9_0_86__ = {}), e.__zoid_9_0_86__;
        }
        function rn(e, i) {
          try {
            return i(vt(e));
          } catch {
          }
        }
        function wt(e) {
          return {
            get: function() {
              var i = this;
              return g.try(function() {
                if (i.source && i.source !== window) throw new Error("Can not call get on proxy object from a remote window");
                return e;
              });
            }
          };
        }
        function Ko(e) {
          return Ht(JSON.stringify(e));
        }
        function Xt(e) {
          var i = vt(e);
          return i.references = i.references || {}, i.references;
        }
        function No(e) {
          var i = e.data, o = e.metaData, c = e.sender, d = e.receiver, l = e.passByReference, h = l !== void 0 && l, C = e.basic, P = C !== void 0 && C, E = rt(d.win), O = P ? JSON.stringify(i) : Yo(E, d.domain, i, {
            on: hn,
            send: vn
          }), y = h ? function(S) {
            var D = xe();
            return Xt(window)[D] = S, {
              type: "uid",
              uid: D
            };
          }(O) : {
            type: "raw",
            val: O
          };
          return {
            serializedData: Ko({
              sender: {
                domain: c.domain
              },
              metaData: o,
              reference: y
            }),
            cleanReference: function() {
              S = window, (D = y).type === "uid" && delete Xt(S)[D.uid];
              var S, D;
            }
          };
        }
        function Ro(e) {
          var i = e.sender, o = e.basic, c = o !== void 0 && o, d = function(O) {
            return JSON.parse(function(y) {
              if (typeof atob == "function") return decodeURIComponent([].map.call(atob(y), function(S) {
                return "%" + ("00" + S.charCodeAt(0).toString(16)).slice(-2);
              }).join(""));
              if (typeof Buffer < "u") return Buffer.from(y, "base64").toString("utf8");
              throw new Error("Can not find window.atob or Buffer");
            }(O));
          }(e.data), l = d.reference, h = d.metaData, C;
          C = typeof i.win == "function" ? i.win({
            metaData: h
          }) : i.win;
          var P;
          P = typeof i.domain == "function" ? i.domain({
            metaData: h
          }) : typeof i.domain == "string" ? i.domain : d.sender.domain;
          var E = function(O, y) {
            if (y.type === "raw") return y.val;
            if (y.type === "uid") return Xt(O)[y.uid];
            throw new Error("Unsupported ref type: " + y.type);
          }(C, l);
          return {
            data: c ? JSON.parse(E) : function(O, y, S) {
              return Gt(O, y, S, {
                on: hn,
                send: vn
              });
            }(C, P, E),
            metaData: h,
            sender: {
              win: C,
              domain: P
            },
            reference: l
          };
        }
        var qr = {
          STRING: "string",
          OBJECT: "object",
          FUNCTION: "function",
          BOOLEAN: "boolean",
          NUMBER: "number",
          ARRAY: "array"
        }, pt = {
          JSON: "json",
          DOTIFY: "dotify",
          BASE64: "base64"
        }, Be = qn, te = {
          RENDER: "zoid-render",
          RENDERED: "zoid-rendered",
          DISPLAY: "zoid-display",
          ERROR: "zoid-error",
          CLOSE: "zoid-close",
          DESTROY: "zoid-destroy",
          PROPS: "zoid-props",
          RESIZE: "zoid-resize",
          FOCUS: "zoid-focus"
        };
        function Io(e) {
          return "__zoid__" + e.name + "__" + e.serializedPayload + "__";
        }
        function Kt(e) {
          if (!e) throw new Error("No window name");
          var i = e.split("__"), o = i[1], c = i[2], d = i[3];
          if (o !== "zoid") throw new Error("Window not rendered by zoid - got " + o);
          if (!c) throw new Error("Expected component name");
          if (!d) throw new Error("Expected serialized payload ref");
          return {
            name: c,
            serializedInitialPayload: d
          };
        }
        var ni = zn(function(e) {
          var i = Ro({
            data: Kt(e).serializedInitialPayload,
            sender: {
              win: function(o) {
                return function(c) {
                  if (c.type === "opener") return st("opener", Ye(window));
                  if (c.type === "parent" && typeof c.distance == "number") return st("parent", function(h, C) {
                    return C === void 0 && (C = 1), function(P, E) {
                      E === void 0 && (E = 1);
                      for (var O = P, y = 0; y < E; y++) {
                        if (!O) return;
                        O = ce(O);
                      }
                      return O;
                    }(h, Gn(h) - C);
                  }(window, c.distance));
                  if (c.type === "global" && c.uid && typeof c.uid == "string") {
                    var d = function() {
                      var h = c.uid, C = In(window);
                      if (!C) throw new Error("Can not find ancestor window");
                      for (var P = 0, E = cn(C); P < E.length; P++) {
                        var O = E[P];
                        if (xr(O)) {
                          var y = rn(O, function(S) {
                            return S.windows && S.windows[h];
                          });
                          if (y) return {
                            v: y
                          };
                        }
                      }
                    }();
                    if (typeof d == "object") return d.v;
                  } else if (c.type === "name") {
                    var l = c.name;
                    return st("namedWindow", function(h, C) {
                      return ao(h, C) || function P(E, O) {
                        var y = ao(E, O);
                        if (y) return y;
                        for (var S = 0, D = $n(E); S < D.length; S++) {
                          var J = P(D[S], O);
                          if (J) return J;
                        }
                      }(un(h) || h, C);
                    }(st("ancestor", In(window)), l));
                  }
                  throw new Error("Unable to find " + c.type + " parent component window");
                }(o.metaData.windowRef);
              }
            }
          });
          return {
            parent: i.sender,
            payload: i.data,
            reference: i.reference
          };
        });
        function Qo() {
          return ni(window.name);
        }
        function ti(e, i) {
          if (i === void 0 && (i = window), e === ce(i)) return {
            type: "parent",
            distance: Gn(e)
          };
          if (e === Ye(i)) return {
            type: "opener"
          };
          if (xr(e) && (c = e, c !== un(c))) {
            var o = de(e).name;
            if (o) return {
              type: "name",
              name: o
            };
          }
          var c;
        }
        function Qt(e, i, o, c, d) {
          if (!e.hasOwnProperty(o)) return c;
          var l = e[o];
          return typeof l.childDecorate == "function" ? l.childDecorate({
            value: c,
            uid: d.uid,
            tag: d.tag,
            close: d.close,
            focus: d.focus,
            onError: d.onError,
            onProps: d.onProps,
            resize: d.resize,
            getParent: d.getParent,
            getParentDomain: d.getParentDomain,
            show: d.show,
            hide: d.hide,
            export: d.export,
            getSiblings: d.getSiblings
          }) : c;
        }
        function Nn() {
          return g.try(function() {
            window.focus();
          });
        }
        function en() {
          return g.try(function() {
            window.close();
          });
        }
        var wn = function() {
          return se;
        }, mt = function(e) {
          return dn(e.value);
        };
        function En(e, i, o) {
          for (var c = 0, d = Object.keys(zr({}, e, i)); c < d.length; c++) {
            var l = d[c];
            o(l, i[l], e[l]);
          }
        }
        function gt(e, i, o) {
          var c = {};
          return g.all(function(d, l, h) {
            var C = [];
            return En(d, l, function(P, E, O) {
              var y = function(S, D, J) {
                return g.resolve().then(function() {
                  var _, er;
                  if (J != null && D) {
                    var nr = (_ = {}, _.get = D.queryParam, _.post = D.bodyParam, _)[o], Pr = (er = {}, er.get = D.queryValue, er.post = D.bodyValue, er)[o];
                    if (nr) return g.hash({
                      finalParam: g.try(function() {
                        return typeof nr == "function" ? nr({
                          value: J
                        }) : typeof nr == "string" ? nr : S;
                      }),
                      finalValue: g.try(function() {
                        return typeof Pr == "function" && Fn(J) ? Pr({
                          value: J
                        }) : J;
                      })
                    }).then(function(Sr) {
                      var G = Sr.finalParam, dr = Sr.finalValue, sr;
                      if (typeof dr == "boolean") sr = dr.toString();
                      else if (typeof dr == "string") sr = dr.toString();
                      else if (typeof dr == "object" && dr !== null) {
                        if (D.serialization === pt.JSON) sr = JSON.stringify(dr);
                        else if (D.serialization === pt.BASE64) sr = Ht(JSON.stringify(dr));
                        else if (D.serialization === pt.DOTIFY || !D.serialization) {
                          sr = function a(u, s, f) {
                            s === void 0 && (s = ""), f === void 0 && (f = {}), s = s && s + ".";
                            for (var p in u) u.hasOwnProperty(p) && u[p] != null && typeof u[p] != "function" && (u[p] && Array.isArray(u[p]) && u[p].length && u[p].every(function(w) {
                              return typeof w != "object";
                            }) ? f["" + s + p + "[]"] = u[p].join(",") : u[p] && typeof u[p] == "object" ? f = a(u[p], "" + s + p, f) : f["" + s + p] = u[p].toString());
                            return f;
                          }(dr, S);
                          for (var r = 0, n = Object.keys(sr); r < n.length; r++) {
                            var t = n[r];
                            c[t] = sr[t];
                          }
                          return;
                        }
                      } else typeof dr == "number" && (sr = dr.toString());
                      c[G] = sr;
                    });
                  }
                });
              }(P, E, O);
              C.push(y);
            }), C;
          }(i, e)).then(function() {
            return c;
          });
        }
        function To(e) {
          var i = e.uid, o = e.options, c = e.overrides, d = c === void 0 ? {} : c, l = e.parentWin, h = l === void 0 ? window : l, C = o.propsDef, P = o.containerTemplate, E = o.prerenderTemplate, O = o.tag, y = o.name, S = o.attributes, D = o.dimensions, J = o.autoResize, _ = o.url, er = o.domain, nr = o.exports, Pr = new g(), Sr = [], G = sn(), dr = {}, sr = {}, r = {
            visible: !0
          }, n = d.event ? d.event : (t = {}, a = {}, u = {
            on: function(N, j) {
              var tr = a[N] = a[N] || [];
              tr.push(j);
              var Q = !1;
              return {
                cancel: function() {
                  Q || (Q = !0, tr.splice(tr.indexOf(j), 1));
                }
              };
            },
            once: function(N, j) {
              var tr = u.on(N, function() {
                tr.cancel(), j();
              });
              return tr;
            },
            trigger: function(N) {
              for (var j = arguments.length, tr = new Array(j > 1 ? j - 1 : 0), Q = 1; Q < j; Q++) tr[Q - 1] = arguments[Q];
              var Cr = a[N], Ar = [];
              if (Cr)
                for (var Kr = function(ae) {
                  var Hr = Cr[ae];
                  Ar.push(g.try(function() {
                    return Hr.apply(void 0, tr);
                  }));
                }, Yr = 0; Yr < Cr.length; Yr++) Kr(Yr);
              return g.all(Ar).then(se);
            },
            triggerOnce: function(N) {
              if (t[N]) return g.resolve();
              t[N] = !0;
              for (var j = arguments.length, tr = new Array(j > 1 ? j - 1 : 0), Q = 1; Q < j; Q++) tr[Q - 1] = arguments[Q];
              return u.trigger.apply(u, [N].concat(tr));
            },
            reset: function() {
              a = {};
            }
          }), t, a, u, s = d.props ? d.props : {}, f, p, w, m, b, v = d.onError, x = d.getProxyContainer, W = d.show, z = d.hide, I = d.close, B = d.renderContainer, V = d.getProxyWindow, cr = d.setProxyWin, fr = d.openFrame, M = d.openPrerenderFrame, T = d.prerender, Y = d.open, F = d.openPrerender, U = d.watchForUnload, lr = d.getInternalState, hr = d.setInternalState, K = function() {
            return g.try(function() {
              return d.resolveInitPromise ? d.resolveInitPromise() : Pr.resolve();
            });
          }, L = function(N) {
            return g.try(function() {
              return d.rejectInitPromise ? d.rejectInitPromise(N) : Pr.reject(N);
            });
          }, Dr = function(N) {
            for (var j = {}, tr = 0, Q = Object.keys(s); tr < Q.length; tr++) {
              var Cr = Q[tr], Ar = C[Cr];
              Ar && Ar.sendToChild === !1 || Ar && Ar.sameDomain && !_e(N, ur(window)) || (j[Cr] = s[Cr]);
            }
            return g.hash(j);
          }, pr = function() {
            return g.try(function() {
              return lr ? lr() : r;
            });
          }, re = function(N) {
            return g.try(function() {
              return hr ? hr(N) : r = zr({}, r, N);
            });
          }, ee = function() {
            return V ? V() : g.try(function() {
              var N = s.window;
              if (N) {
                var j = rt(N);
                return G.register(function() {
                  return N.close();
                }), j;
              }
              return new ln({
                send: vn
              });
            });
          }, he = function(N) {
            return cr ? cr(N) : g.try(function() {
              f = N;
            });
          }, oe = function() {
            return W ? W() : g.hash({
              setState: re({
                visible: !0
              }),
              showElement: p ? p.get().then(mo) : null
            }).then(se);
          }, Ie = function() {
            return z ? z() : g.hash({
              setState: re({
                visible: !1
              }),
              showElement: p ? p.get().then(go) : null
            }).then(se);
          }, pn = function() {
            return typeof _ == "function" ? _({
              props: s
            }) : _;
          }, qe = function() {
            return typeof S == "function" ? S({
              props: s
            }) : S;
          }, me = function() {
            return bt(pn());
          }, mn = function(N, j) {
            var tr = j.windowName;
            return fr ? fr(N, {
              windowName: tr
            }) : g.try(function() {
              if (N === Be.IFRAME) return wt(It({
                attributes: zr({
                  name: tr,
                  title: y
                }, qe().iframe)
              }));
            });
          }, Xe = function(N) {
            return M ? M(N) : g.try(function() {
              if (N === Be.IFRAME) return wt(It({
                attributes: zr({
                  name: "__zoid_prerender_frame__" + y + "_" + xe() + "__",
                  title: "prerender__" + y
                }, qe().iframe)
              }));
            });
          }, nn = function(N, j, tr) {
            return F ? F(N, j, tr) : g.try(function() {
              if (N === Be.IFRAME) {
                if (!tr) throw new Error("Expected proxy frame to be passed");
                return tr.get().then(function(Q) {
                  return G.register(function() {
                    return lt(Q);
                  }), Rt(Q).then(function(Cr) {
                    return de(Cr);
                  }).then(function(Cr) {
                    return rt(Cr);
                  });
                });
              }
              throw new Error("No render context available for " + N);
            });
          }, tn = function() {
            return g.try(function() {
              if (f) return g.all([n.trigger(te.FOCUS), f.focus()]).then(se);
            });
          }, et = function() {
            var N = vt(window);
            return N.windows = N.windows || {}, N.windows[i] = window, G.register(function() {
              delete N.windows[i];
            }), i;
          }, Nr = function(N, j, tr, Q) {
            if (j === ur(window)) return {
              type: "global",
              uid: et()
            };
            if (N !== window) throw new Error("Can not construct cross-domain window reference for different target window");
            if (s.window) {
              var Cr = Q.getWindow();
              if (!Cr) throw new Error("Can not construct cross-domain window reference for lazy window prop");
              if (In(Cr) !== window) throw new Error("Can not construct cross-domain window reference for window prop with different ancestor");
            }
            if (tr === Be.POPUP) return {
              type: "opener"
            };
            if (tr === Be.IFRAME) return {
              type: "parent",
              distance: Gn(window)
            };
            throw new Error("Can not construct window reference for child");
          }, He = function(N, j) {
            return g.try(function() {
              m = N, w = j, K(), G.register(function() {
                return j.close.fireAndForget().catch(se);
              });
            });
          }, Mr = function(N) {
            var j = N.width, tr = N.height;
            return g.try(function() {
              n.trigger(te.RESIZE, {
                width: j,
                height: tr
              });
            });
          }, Vr = function(N) {
            return g.try(function() {
              return n.trigger(te.DESTROY);
            }).catch(se).then(function() {
              return G.all(N);
            }).then(function() {
              Pr.asyncReject(N || new Error("Component destroyed"));
            });
          }, $r = zn(function(N) {
            return g.try(function() {
              return I ? Fr(I.__source__) ? void 0 : I() : g.try(function() {
                return n.trigger(te.CLOSE);
              }).then(function() {
                return Vr(N || new Error("Component closed"));
              });
            });
          }), ie = function(N, j) {
            var tr = j.proxyWin, Q = j.proxyFrame, Cr = j.windowName;
            return Y ? Y(N, {
              proxyWin: tr,
              proxyFrame: Q,
              windowName: Cr
            }) : g.try(function() {
              if (N === Be.IFRAME) {
                if (!Q) throw new Error("Expected proxy frame to be passed");
                return Q.get().then(function(Ar) {
                  return Rt(Ar).then(function(Kr) {
                    return G.register(function() {
                      return lt(Ar);
                    }), G.register(function() {
                      return function(Yr) {
                        for (var ae = 0, Hr = Ae("requestPromises").get(Yr, []); ae < Hr.length; ae++) Hr[ae].reject(new Error("Window " + (Fr(Yr) ? "closed" : "cleaned up") + " before response")).catch(se);
                      }(Kr);
                    }), Kr;
                  });
                });
              }
              throw new Error("No render context available for " + N);
            }).then(function(Ar) {
              return tr.setWindow(Ar, {
                send: vn
              }), tr.setName(Cr).then(function() {
                return tr;
              });
            });
          }, ge = function() {
            return g.try(function() {
              var N = po(window, "unload", dn(function() {
                Vr(new Error("Window navigated away"));
              })), j = Ve(h, Vr, 3e3);
              if (G.register(j.cancel), G.register(N.cancel), U) return U();
            });
          }, ye = function(N) {
            var j = !1;
            return N.isClosed().then(function(tr) {
              return tr ? (j = !0, $r(new Error("Detected component window close"))) : g.delay(200).then(function() {
                return N.isClosed();
              }).then(function(Q) {
                if (Q)
                  return j = !0, $r(new Error("Detected component window close"));
              });
            }).then(function() {
              return j;
            });
          }, Xr = function(N) {
            return v ? v(N) : g.try(function() {
              if (Sr.indexOf(N) === -1)
                return Sr.push(N), Pr.asyncReject(N), n.trigger(te.ERROR, N);
            });
          }, Ce = new g(), Je = function(N) {
            return g.try(function() {
              Ce.resolve(N);
            });
          };
          He.onError = Xr;
          var Se = function(N, j) {
            return N({
              uid: i,
              container: j.container,
              context: j.context,
              doc: j.doc,
              frame: j.frame,
              prerenderFrame: j.prerenderFrame,
              focus: tn,
              close: $r,
              state: dr,
              props: s,
              tag: O,
              dimensions: typeof D == "function" ? D({
                props: s
              }) : D,
              event: n
            });
          }, on = function(N, j) {
            var tr = j.context;
            return T ? T(N, {
              context: tr
            }) : g.try(function() {
              if (E) {
                var Q = N.getWindow();
                if (Q && xr(Q) && function(ve) {
                  try {
                    if (!ve.location.href || ve.location.href === "about:blank") return !0;
                  } catch {
                  }
                  return !1;
                }(Q)) {
                  var Cr = (Q = de(Q)).document, Ar = Se(E, {
                    context: tr,
                    doc: Cr
                  });
                  if (Ar) {
                    if (Ar.ownerDocument !== Cr) throw new Error("Expected prerender template to have been created with document from child window");
                    (function(ve, Zr) {
                      var Ke = Zr.tagName.toLowerCase();
                      if (Ke !== "html") throw new Error("Expected element to be html, got " + Ke);
                      for (var Pe = ve.document.documentElement, Gr = 0, Me = dt(Pe.children); Gr < Me.length; Gr++) Pe.removeChild(Me[Gr]);
                      for (var Qe = 0, Te = dt(Zr.children); Qe < Te.length; Qe++) Pe.appendChild(Te[Qe]);
                    })(Q, Ar);
                    var Kr = J.width, Yr = Kr !== void 0 && Kr, ae = J.height, Hr = ae !== void 0 && ae, Qr = J.element, Ee = Qr === void 0 ? "body" : Qr;
                    if ((Ee = $t(Ee, Cr)) && (Yr || Hr)) {
                      var Ze = yo(Ee, function(ve) {
                        Mr({
                          width: Yr ? ve.width : void 0,
                          height: Hr ? ve.height : void 0
                        });
                      }, {
                        width: Yr,
                        height: Hr,
                        win: Q
                      });
                      n.on(te.RENDERED, Ze.cancel);
                    }
                  }
                }
              }
            });
          }, $e = function(N, j) {
            var tr = j.proxyFrame, Q = j.proxyPrerenderFrame, Cr = j.context, Ar = j.rerender;
            return B ? B(N, {
              proxyFrame: tr,
              proxyPrerenderFrame: Q,
              context: Cr,
              rerender: Ar
            }) : g.hash({
              container: N.get(),
              frame: tr ? tr.get() : null,
              prerenderFrame: Q ? Q.get() : null,
              internalState: pr()
            }).then(function(Kr) {
              var Yr = Kr.container, ae = Kr.internalState.visible, Hr = Se(P, {
                context: Cr,
                container: Yr,
                frame: Kr.frame,
                prerenderFrame: Kr.prerenderFrame,
                doc: document
              });
              if (Hr) {
                ae || go(Hr), Mo(Yr, Hr);
                var Qr = function(Ee, Ze) {
                  Ze = dn(Ze);
                  var ve = !1, Zr = [], Ke, Pe, Gr, Me = function() {
                    ve = !0;
                    for (var Ln = 0; Ln < Zr.length; Ln++) Zr[Ln].disconnect();
                    Ke && Ke.cancel(), Gr && Gr.removeEventListener("unload", Qe), Pe && lt(Pe);
                  }, Qe = function() {
                    ve || (Ze(), Me());
                  };
                  if (Zt(Ee))
                    return Qe(), {
                      cancel: Me
                    };
                  if (window.MutationObserver)
                    for (var Te = Ee.parentElement; Te; ) {
                      var tt = new window.MutationObserver(function() {
                        Zt(Ee) && Qe();
                      });
                      tt.observe(Te, {
                        childList: !0
                      }), Zr.push(tt), Te = Te.parentElement;
                    }
                  return (Pe = document.createElement("iframe")).setAttribute("name", "__detect_close_" + xe() + "__"), Pe.style.display = "none", Rt(Pe).then(function(Ln) {
                    (Gr = de(Ln)).addEventListener("unload", Qe);
                  }), Ee.appendChild(Pe), Ke = An(function() {
                    Zt(Ee) && Qe();
                  }, 1e3), {
                    cancel: Me
                  };
                }(Hr, function() {
                  var Ee = new Error("Detected container element removed from DOM");
                  return g.delay(1).then(function() {
                    if (!Zt(Hr))
                      return G.all(Ee), Ar().then(K, L);
                    $r(Ee);
                  });
                });
                return G.register(function() {
                  return Qr.cancel();
                }), G.register(function() {
                  return lt(Hr);
                }), p = wt(Hr);
              }
            });
          }, Pn = function() {
            return {
              state: dr,
              event: n,
              close: $r,
              focus: tn,
              resize: Mr,
              onError: Xr,
              updateProps: nt,
              show: oe,
              hide: Ie
            };
          }, Un = function(N) {
            N === void 0 && (N = {});
            var j = b, tr = Pn();
            _n(sr, N), function(Q, Cr, Ar, Kr, Yr) {
              var ae = Kr.state, Hr = Kr.close, Qr = Kr.focus, Ee = Kr.event, Ze = Kr.onError;
              En(Ar, Q, function(ve, Zr, Ke) {
                var Pe = !1, Gr = Ke;
                Object.defineProperty(Cr, ve, {
                  configurable: !0,
                  enumerable: !0,
                  get: function() {
                    return Pe ? Gr : (Pe = !0, function() {
                      if (!Zr) return Gr;
                      var Me = Zr.alias;
                      if (Me && !Fn(Ke) && Fn(Ar[Me]) && (Gr = Ar[Me]), Zr.value && (Gr = Zr.value({
                        props: Cr,
                        state: ae,
                        close: Hr,
                        focus: Qr,
                        event: Ee,
                        onError: Ze,
                        container: Yr
                      })), !Zr.default || Fn(Gr) || Fn(Ar[ve]) || (Gr = Zr.default({
                        props: Cr,
                        state: ae,
                        close: Hr,
                        focus: Qr,
                        event: Ee,
                        onError: Ze,
                        container: Yr
                      })), Fn(Gr)) {
                        if (Zr.type === qr.ARRAY ? !Array.isArray(Gr) : typeof Gr !== Zr.type) throw new TypeError("Prop is not of type " + Zr.type + ": " + ve);
                      } else if (Zr.required !== !1 && !Fn(Ar[ve])) throw new Error('Expected prop "' + ve + '" to be defined');
                      return Fn(Gr) && Zr.decorate && (Gr = Zr.decorate({
                        value: Gr,
                        props: Cr,
                        state: ae,
                        close: Hr,
                        focus: Qr,
                        event: Ee,
                        onError: Ze,
                        container: Yr
                      })), Gr;
                    }());
                  }
                });
              }), En(Cr, Q, se);
            }(C, s, sr, tr, j);
          }, nt = function(N) {
            return Un(N), Pr.then(function() {
              var j = w, tr = f;
              if (j && tr && m) return Dr(m).then(function(Q) {
                return j.updateProps(Q).catch(function(Cr) {
                  return ye(tr).then(function(Ar) {
                    if (!Ar) throw Cr;
                  });
                });
              });
            });
          }, gn = function(N) {
            return x ? x(N) : g.try(function() {
              return Uo(N);
            }).then(function(j) {
              return Qn(j) && (j = function tr(Q) {
                var Cr = function(ae) {
                  var Hr = function(Qr) {
                    for (; Qr.parentNode; ) Qr = Qr.parentNode;
                    if (Qn(Qr)) return Qr;
                  }(ae);
                  if (Hr && Hr.host) return Hr.host;
                }(Q);
                if (!Cr) throw new Error("Element is not in shadow dom");
                var Ar = "shadow-slot-" + xe(), Kr = document.createElement("slot");
                Kr.setAttribute("name", Ar), Q.appendChild(Kr);
                var Yr = document.createElement("div");
                return Yr.setAttribute("slot", Ar), Cr.appendChild(Yr), Qn(Cr) ? tr(Yr) : Yr;
              }(j)), b = j, wt(j);
            });
          };
          return {
            init: function() {
              (function() {
                n.on(te.RENDER, function() {
                  return s.onRender();
                }), n.on(te.DISPLAY, function() {
                  return s.onDisplay();
                }), n.on(te.RENDERED, function() {
                  return s.onRendered();
                }), n.on(te.CLOSE, function() {
                  return s.onClose();
                }), n.on(te.DESTROY, function() {
                  return s.onDestroy();
                }), n.on(te.RESIZE, function() {
                  return s.onResize();
                }), n.on(te.FOCUS, function() {
                  return s.onFocus();
                }), n.on(te.PROPS, function(N) {
                  return s.onProps(N);
                }), n.on(te.ERROR, function(N) {
                  return s && s.onError ? s.onError(N) : L(N).then(function() {
                    setTimeout(function() {
                      throw N;
                    }, 1);
                  });
                }), G.register(n.reset);
              })();
            },
            render: function(N) {
              var j = N.target, tr = N.container, Q = N.context, Cr = N.rerender;
              return g.try(function() {
                var Ar = me(), Kr = er || me();
                (function(X, vr, br) {
                  if (X !== window) {
                    if (!jt(window, X)) throw new Error("Can only renderTo an adjacent frame");
                    var Ir = ur();
                    if (!_e(vr, Ir) && !xr(X)) throw new Error("Can not render remotely to " + vr.toString() + " - can only render to " + Ir);
                    if (br && typeof br != "string") throw new Error("Container passed to renderTo must be a string selector, got " + typeof br + " }");
                  }
                })(j, Kr, tr);
                var Yr = g.try(function() {
                  if (j !== window) return function(X, vr) {
                    for (var br = {}, Ir = 0, Wr = Object.keys(s); Ir < Wr.length; Ir++) {
                      var Tr = Wr[Ir], Lr = C[Tr];
                      Lr && Lr.allowDelegate && (br[Tr] = s[Tr]);
                    }
                    var jr = vn(vr, "zoid_delegate_" + y, {
                      uid: i,
                      overrides: {
                        props: br,
                        event: n,
                        close: $r,
                        onError: Xr,
                        getInternalState: pr,
                        setInternalState: re,
                        resolveInitPromise: K,
                        rejectInitPromise: L
                      }
                    }).then(function(k) {
                      var q = k.data.parent;
                      return G.register(function(A) {
                        if (!Fr(vr)) return q.destroy(A);
                      }), q.getDelegateOverrides();
                    }).catch(function(k) {
                      throw new Error(`Unable to delegate rendering. Possibly the component is not loaded in the target window.

` + ut(k));
                    });
                    return x = function() {
                      for (var k = arguments.length, q = new Array(k), A = 0; A < k; A++) q[A] = arguments[A];
                      return jr.then(function(or) {
                        return or.getProxyContainer.apply(or, q);
                      });
                    }, B = function() {
                      for (var k = arguments.length, q = new Array(k), A = 0; A < k; A++) q[A] = arguments[A];
                      return jr.then(function(or) {
                        return or.renderContainer.apply(or, q);
                      });
                    }, W = function() {
                      for (var k = arguments.length, q = new Array(k), A = 0; A < k; A++) q[A] = arguments[A];
                      return jr.then(function(or) {
                        return or.show.apply(or, q);
                      });
                    }, z = function() {
                      for (var k = arguments.length, q = new Array(k), A = 0; A < k; A++) q[A] = arguments[A];
                      return jr.then(function(or) {
                        return or.hide.apply(or, q);
                      });
                    }, U = function() {
                      for (var k = arguments.length, q = new Array(k), A = 0; A < k; A++) q[A] = arguments[A];
                      return jr.then(function(or) {
                        return or.watchForUnload.apply(or, q);
                      });
                    }, X === Be.IFRAME && (V = function() {
                      for (var k = arguments.length, q = new Array(k), A = 0; A < k; A++) q[A] = arguments[A];
                      return jr.then(function(or) {
                        return or.getProxyWindow.apply(or, q);
                      });
                    }, fr = function() {
                      for (var k = arguments.length, q = new Array(k), A = 0; A < k; A++) q[A] = arguments[A];
                      return jr.then(function(or) {
                        return or.openFrame.apply(or, q);
                      });
                    }, M = function() {
                      for (var k = arguments.length, q = new Array(k), A = 0; A < k; A++) q[A] = arguments[A];
                      return jr.then(function(or) {
                        return or.openPrerenderFrame.apply(or, q);
                      });
                    }, T = function() {
                      for (var k = arguments.length, q = new Array(k), A = 0; A < k; A++) q[A] = arguments[A];
                      return jr.then(function(or) {
                        return or.prerender.apply(or, q);
                      });
                    }, Y = function() {
                      for (var k = arguments.length, q = new Array(k), A = 0; A < k; A++) q[A] = arguments[A];
                      return jr.then(function(or) {
                        return or.open.apply(or, q);
                      });
                    }, F = function() {
                      for (var k = arguments.length, q = new Array(k), A = 0; A < k; A++) q[A] = arguments[A];
                      return jr.then(function(or) {
                        return or.openPrerender.apply(or, q);
                      });
                    }), jr;
                  }(Q, j);
                }), ae = s.window, Hr = ge(), Qr = gt(C, s, "post"), Ee = n.trigger(te.RENDER), Ze = gn(tr), ve = ee(), Zr = Ze.then(function() {
                  return Un();
                }), Ke = Zr.then(function() {
                  return gt(C, s, "get").then(function(X) {
                    return function(vr, br) {
                      var Ir = br.query || {}, Wr = br.hash || {}, Tr, Lr, jr = vr.split("#");
                      Lr = jr[1];
                      var k = (Tr = jr[0]).split("?");
                      Tr = k[0];
                      var q = ho(k[1], Ir), A = ho(Lr, Wr);
                      return q && (Tr = Tr + "?" + q), A && (Tr = Tr + "#" + A), Tr;
                    }(function(vr) {
                      if (br = bt(vr), br.indexOf("mock:") !== 0) return vr;
                      var br;
                      throw new Error("Mock urls not supported out of test mode");
                    }(pn()), {
                      query: X
                    });
                  });
                }), Pe = ve.then(function(X) {
                  return function(br) {
                    var Ir = br === void 0 ? {} : br, Wr = Ir.proxyWin, Tr = Ir.initialChildDomain, Lr = Ir.childDomainMatch, jr = Ir.target, k = jr === void 0 ? window : jr, q = Ir.context;
                    return function(A) {
                      var or = A === void 0 ? {} : A, ue = or.proxyWin, ot = or.childDomainMatch, ke = or.context;
                      return Dr(or.initialChildDomain).then(function(bn) {
                        return {
                          uid: i,
                          context: ke,
                          tag: O,
                          childDomainMatch: ot,
                          version: "9_0_86",
                          props: bn,
                          exports: (Ao = ue, {
                            init: function(oi) {
                              return He(this.origin, oi);
                            },
                            close: $r,
                            checkClose: function() {
                              return ye(Ao);
                            },
                            resize: Mr,
                            onError: Xr,
                            show: oe,
                            hide: Ie,
                            export: Je
                          })
                        };
                        var Ao;
                      });
                    }({
                      proxyWin: Wr,
                      initialChildDomain: Tr,
                      childDomainMatch: Lr,
                      context: q
                    }).then(function(A) {
                      var or = No({
                        data: A,
                        metaData: {
                          windowRef: Nr(k, Tr, q, Wr)
                        },
                        sender: {
                          domain: ur(window)
                        },
                        receiver: {
                          win: Wr,
                          domain: Lr
                        },
                        passByReference: Tr === ur()
                      }), ue = or.serializedData;
                      return G.register(or.cleanReference), ue;
                    });
                  }({
                    proxyWin: (vr = {
                      proxyWin: X,
                      initialChildDomain: Ar,
                      childDomainMatch: Kr,
                      target: j,
                      context: Q
                    }).proxyWin,
                    initialChildDomain: vr.initialChildDomain,
                    childDomainMatch: vr.childDomainMatch,
                    target: vr.target,
                    context: vr.context
                  }).then(function(br) {
                    return Io({
                      name: y,
                      serializedPayload: br
                    });
                  });
                  var vr;
                }), Gr = Pe.then(function(X) {
                  return mn(Q, {
                    windowName: X
                  });
                }), Me = Xe(Q), Qe = g.hash({
                  proxyContainer: Ze,
                  proxyFrame: Gr,
                  proxyPrerenderFrame: Me
                }).then(function(X) {
                  return $e(X.proxyContainer, {
                    context: Q,
                    proxyFrame: X.proxyFrame,
                    proxyPrerenderFrame: X.proxyPrerenderFrame,
                    rerender: Cr
                  });
                }).then(function(X) {
                  return X;
                }), Te = g.hash({
                  windowName: Pe,
                  proxyFrame: Gr,
                  proxyWin: ve
                }).then(function(X) {
                  var vr = X.proxyWin;
                  return ae ? vr : ie(Q, {
                    windowName: X.windowName,
                    proxyWin: vr,
                    proxyFrame: X.proxyFrame
                  });
                }), tt = g.hash({
                  proxyWin: Te,
                  proxyPrerenderFrame: Me
                }).then(function(X) {
                  return nn(Q, X.proxyWin, X.proxyPrerenderFrame);
                }), Ln = Te.then(function(X) {
                  return f = X, he(X);
                }), ro = g.hash({
                  proxyPrerenderWin: tt,
                  state: Ln
                }).then(function(X) {
                  return on(X.proxyPrerenderWin, {
                    context: Q
                  });
                }), R = g.hash({
                  proxyWin: Te,
                  windowName: Pe
                }).then(function(X) {
                  if (ae) return X.proxyWin.setName(X.windowName);
                }), $ = g.hash({
                  body: Qr
                }).then(function(X) {
                  return o.method ? o.method : Object.keys(X.body).length ? "post" : "get";
                }), ar = g.hash({
                  proxyWin: Te,
                  windowUrl: Ke,
                  body: Qr,
                  method: $,
                  windowName: R,
                  prerender: ro
                }).then(function(X) {
                  return X.proxyWin.setLocation(X.windowUrl, {
                    method: X.method,
                    body: X.body
                  });
                }), rr = Te.then(function(X) {
                  (function vr(br, Ir) {
                    var Wr = !1;
                    return G.register(function() {
                      Wr = !0;
                    }), g.delay(2e3).then(function() {
                      return br.isClosed();
                    }).then(function(Tr) {
                      if (!Wr) return Tr ? $r(new Error("Detected " + Ir + " close")) : vr(br, Ir);
                    });
                  })(X, Q);
                }), Or = g.hash({
                  container: Qe,
                  prerender: ro
                }).then(function() {
                  return n.trigger(te.DISPLAY);
                }), Rr = Te.then(function(X) {
                }), kr = ar.then(function() {
                  return g.try(function() {
                    var X = s.timeout;
                    if (X) return Pr.timeout(X, new Error("Loading component timed out after " + X + " milliseconds"));
                  });
                }), _r = Pr.then(function() {
                  return n.trigger(te.RENDERED);
                });
                return g.hash({
                  initPromise: Pr,
                  buildUrlPromise: Ke,
                  onRenderPromise: Ee,
                  getProxyContainerPromise: Ze,
                  openFramePromise: Gr,
                  openPrerenderFramePromise: Me,
                  renderContainerPromise: Qe,
                  openPromise: Te,
                  openPrerenderPromise: tt,
                  setStatePromise: Ln,
                  prerenderPromise: ro,
                  loadUrlPromise: ar,
                  buildWindowNamePromise: Pe,
                  setWindowNamePromise: R,
                  watchForClosePromise: rr,
                  onDisplayPromise: Or,
                  openBridgePromise: Rr,
                  runTimeoutPromise: kr,
                  onRenderedPromise: _r,
                  delegatePromise: Yr,
                  watchForUnloadPromise: Hr,
                  finalSetPropsPromise: Zr
                });
              }).catch(function(Ar) {
                return g.all([Xr(Ar), Vr(Ar)]).then(function() {
                  throw Ar;
                }, function() {
                  throw Ar;
                });
              }).then(se);
            },
            destroy: Vr,
            getProps: function() {
              return s;
            },
            setProps: Un,
            export: Je,
            getHelpers: Pn,
            getDelegateOverrides: function() {
              return g.try(function() {
                return {
                  getProxyContainer: gn,
                  show: oe,
                  hide: Ie,
                  renderContainer: $e,
                  getProxyWindow: ee,
                  watchForUnload: ge,
                  openFrame: mn,
                  openPrerenderFrame: Xe,
                  prerender: on,
                  open: ie,
                  openPrerender: nn,
                  setProxyWin: he
                };
              });
            },
            getExports: function() {
              return nr({
                getExports: function() {
                  return Ce;
                }
              });
            }
          };
        }
        function kt(e) {
          var i = e.uid, o = e.frame, c = e.prerenderFrame, d = e.doc, l = e.props, h = e.event, C = e.dimensions, P = C.width, E = C.height;
          if (o && c) {
            var O = d.createElement("div");
            O.setAttribute("id", i);
            var y = d.createElement("style");
            return l.cspNonce && y.setAttribute("nonce", l.cspNonce), y.appendChild(d.createTextNode(`
            #` + i + ` {
                display: inline-block;
                position: relative;
                width: ` + P + `;
                height: ` + E + `;
            }

            #` + i + ` > iframe {
                display: inline-block;
                position: absolute;
                width: 100%;
                height: 100%;
                top: 0;
                left: 0;
                transition: opacity .2s ease-in-out;
            }

            #` + i + ` > iframe.zoid-invisible {
                opacity: 0;
            }

            #` + i + ` > iframe.zoid-visible {
                opacity: 1;
        }
        `)), O.appendChild(o), O.appendChild(c), O.appendChild(y), c.classList.add("zoid-visible"), o.classList.add("zoid-invisible"), h.on(te.RENDERED, function() {
              c.classList.remove("zoid-visible"), c.classList.add("zoid-invisible"), o.classList.remove("zoid-invisible"), o.classList.add("zoid-visible"), setTimeout(function() {
                lt(c);
              }, 1);
            }), h.on(te.RESIZE, function(S) {
              var D = S.width, J = S.height;
              typeof D == "number" && (O.style.width = Bo(D)), typeof J == "number" && (O.style.height = Bo(J));
            }), O;
          }
        }
        var zo = sn(), Mt = sn();
        function ko(e) {
          var i = function(y) {
            var S = y.tag, D = y.url, J = y.domain, _ = y.bridgeUrl, er = y.props, nr = er === void 0 ? {} : er, Pr = y.dimensions, Sr = Pr === void 0 ? {} : Pr, G = y.autoResize, dr = G === void 0 ? {} : G, sr = y.allowedParentDomains, r = sr === void 0 ? "*" : sr, n = y.attributes, t = n === void 0 ? {} : n, a = y.defaultContext, u = a === void 0 ? Be.IFRAME : a, s = y.containerTemplate, f = s === void 0 ? kt : s, p = y.prerenderTemplate, w = p === void 0 ? null : p, m = y.validate, b = y.eligible, v = b === void 0 ? function() {
              return {
                eligible: !0
              };
            } : b, x = y.logger, W = x === void 0 ? {
              info: se
            } : x, z = y.exports, I = z === void 0 ? se : z, B = y.method, V = y.children, cr = V === void 0 ? function() {
              return {};
            } : V, fr = S.replace(/-/g, "_"), M = zr({}, {
              window: {
                type: qr.OBJECT,
                sendToChild: !1,
                required: !1,
                allowDelegate: !0,
                validate: function(T) {
                  var Y = T.value;
                  if (!ze(Y) && !ln.isProxyWindow(Y)) throw new Error("Expected Window or ProxyWindow");
                  if (ze(Y)) {
                    if (Fr(Y)) throw new Error("Window is closed");
                    if (!xr(Y)) throw new Error("Window is not same domain");
                  }
                },
                decorate: function(T) {
                  return rt(T.value);
                }
              },
              timeout: {
                type: qr.NUMBER,
                required: !1,
                sendToChild: !1
              },
              cspNonce: {
                type: qr.STRING,
                required: !1
              },
              onDisplay: {
                type: qr.FUNCTION,
                required: !1,
                sendToChild: !1,
                allowDelegate: !0,
                default: wn,
                decorate: mt
              },
              onRendered: {
                type: qr.FUNCTION,
                required: !1,
                sendToChild: !1,
                default: wn,
                decorate: mt
              },
              onRender: {
                type: qr.FUNCTION,
                required: !1,
                sendToChild: !1,
                default: wn,
                decorate: mt
              },
              onClose: {
                type: qr.FUNCTION,
                required: !1,
                sendToChild: !1,
                allowDelegate: !0,
                default: wn,
                decorate: mt
              },
              onDestroy: {
                type: qr.FUNCTION,
                required: !1,
                sendToChild: !1,
                allowDelegate: !0,
                default: wn,
                decorate: mt
              },
              onResize: {
                type: qr.FUNCTION,
                required: !1,
                sendToChild: !1,
                allowDelegate: !0,
                default: wn
              },
              onFocus: {
                type: qr.FUNCTION,
                required: !1,
                sendToChild: !1,
                allowDelegate: !0,
                default: wn
              },
              close: {
                type: qr.FUNCTION,
                required: !1,
                sendToChild: !1,
                childDecorate: function(T) {
                  return T.close;
                }
              },
              focus: {
                type: qr.FUNCTION,
                required: !1,
                sendToChild: !1,
                childDecorate: function(T) {
                  return T.focus;
                }
              },
              resize: {
                type: qr.FUNCTION,
                required: !1,
                sendToChild: !1,
                childDecorate: function(T) {
                  return T.resize;
                }
              },
              uid: {
                type: qr.STRING,
                required: !1,
                sendToChild: !1,
                childDecorate: function(T) {
                  return T.uid;
                }
              },
              tag: {
                type: qr.STRING,
                required: !1,
                sendToChild: !1,
                childDecorate: function(T) {
                  return T.tag;
                }
              },
              getParent: {
                type: qr.FUNCTION,
                required: !1,
                sendToChild: !1,
                childDecorate: function(T) {
                  return T.getParent;
                }
              },
              getParentDomain: {
                type: qr.FUNCTION,
                required: !1,
                sendToChild: !1,
                childDecorate: function(T) {
                  return T.getParentDomain;
                }
              },
              show: {
                type: qr.FUNCTION,
                required: !1,
                sendToChild: !1,
                childDecorate: function(T) {
                  return T.show;
                }
              },
              hide: {
                type: qr.FUNCTION,
                required: !1,
                sendToChild: !1,
                childDecorate: function(T) {
                  return T.hide;
                }
              },
              export: {
                type: qr.FUNCTION,
                required: !1,
                sendToChild: !1,
                childDecorate: function(T) {
                  return T.export;
                }
              },
              onError: {
                type: qr.FUNCTION,
                required: !1,
                sendToChild: !1,
                childDecorate: function(T) {
                  return T.onError;
                }
              },
              onProps: {
                type: qr.FUNCTION,
                required: !1,
                sendToChild: !1,
                childDecorate: function(T) {
                  return T.onProps;
                }
              },
              getSiblings: {
                type: qr.FUNCTION,
                required: !1,
                sendToChild: !1,
                childDecorate: function(T) {
                  return T.getSiblings;
                }
              }
            }, nr);
            if (!f) throw new Error("Container template required");
            return {
              name: fr,
              tag: S,
              url: D,
              domain: J,
              bridgeUrl: _,
              method: B,
              propsDef: M,
              dimensions: Sr,
              autoResize: dr,
              allowedParentDomains: r,
              attributes: t,
              defaultContext: u,
              containerTemplate: f,
              prerenderTemplate: w,
              validate: m,
              logger: W,
              eligible: v,
              children: cr,
              exports: typeof I == "function" ? I : function(T) {
                for (var Y = T.getExports, F = {}, U = function(K, L) {
                  var Dr = L[K], pr = I[Dr].type, re = Y().then(function(ee) {
                    return ee[Dr];
                  });
                  F[Dr] = pr === qr.FUNCTION ? function() {
                    for (var ee = arguments.length, he = new Array(ee), oe = 0; oe < ee; oe++) he[oe] = arguments[oe];
                    return re.then(function(Ie) {
                      return Ie.apply(void 0, he);
                    });
                  } : re;
                }, lr = 0, hr = Object.keys(I); lr < hr.length; lr++) U(lr, hr);
                return F;
              }
            };
          }(e), o = i.name, c = i.tag, d = i.defaultContext, l = i.eligible, h = i.children, C = vt(window), P = [], E = function() {
            if (function(S) {
              try {
                return Kt(window.name).name === S;
              } catch {
              }
              return !1;
            }(o)) {
              var y = Qo().payload;
              if (y.tag === c && _e(y.childDomainMatch, ur())) return !0;
            }
            return !1;
          }, O = zn(function() {
            if (E()) {
              if (window.xprops)
                throw delete C.components[c], new Error("Can not register " + o + " as child - child already registered");
              var y = function(S) {
                var D = S.tag, J = S.propsDef, _ = S.autoResize, er = S.allowedParentDomains, nr = [], Pr = Qo(), Sr = Pr.parent, G = Pr.payload, dr = Sr.win, sr = Sr.domain, r, n = new g(), t = G.version, a = G.uid, u = G.exports, s = G.context, f = G.props;
                if (t !== "9_0_86") throw new Error("Parent window has zoid version " + t + ", child window has version 9_0_86");
                var p = u.show, w = u.hide, m = u.close, b = u.onError, v = u.checkClose, x = u.export, W = u.resize, z = u.init, I = function() {
                  return dr;
                }, B = function() {
                  return sr;
                }, V = function(F) {
                  return nr.push(F), {
                    cancel: function() {
                      nr.splice(nr.indexOf(F), 1);
                    }
                  };
                }, cr = function(F) {
                  return W.fireAndForget({
                    width: F.width,
                    height: F.height
                  });
                }, fr = function(F) {
                  return n.resolve(F), x(F);
                }, M = function(F) {
                  var U = (F === void 0 ? {} : F).anyParent, lr = [], hr = r.parent;
                  if (U === void 0 && (U = !hr), !U && !hr) throw new Error("No parent found for " + D + " child");
                  for (var K = 0, L = cn(window); K < L.length; K++) {
                    var Dr = L[K];
                    if (xr(Dr)) {
                      var pr = de(Dr).xprops;
                      if (pr && I() === pr.getParent()) {
                        var re = pr.parent;
                        if (U || !hr || re && re.uid === hr.uid) {
                          var ee = rn(Dr, function(he) {
                            return he.exports;
                          });
                          lr.push({
                            props: pr,
                            exports: ee
                          });
                        }
                      }
                    }
                  }
                  return lr;
                }, T = function(F, U, lr) {
                  lr === void 0 && (lr = !1);
                  var hr = function(L, Dr, pr, re, ee, he) {
                    he === void 0 && (he = !1);
                    for (var oe = {}, Ie = 0, pn = Object.keys(pr); Ie < pn.length; Ie++) {
                      var qe = pn[Ie], me = Dr[qe];
                      if (!me || !me.sameDomain || re === ur(window) && xr(L)) {
                        var mn = Qt(Dr, 0, qe, pr[qe], ee);
                        oe[qe] = mn, me && me.alias && !oe[me.alias] && (oe[me.alias] = mn);
                      }
                    }
                    if (!he) for (var Xe = 0, nn = Object.keys(Dr); Xe < nn.length; Xe++) {
                      var tn = nn[Xe];
                      pr.hasOwnProperty(tn) || (oe[tn] = Qt(Dr, 0, tn, void 0, ee));
                    }
                    return oe;
                  }(dr, J, F, U, {
                    tag: D,
                    show: p,
                    hide: w,
                    close: m,
                    focus: Nn,
                    onError: b,
                    resize: cr,
                    getSiblings: M,
                    onProps: V,
                    getParent: I,
                    getParentDomain: B,
                    uid: a,
                    export: fr
                  }, lr);
                  r ? _n(r, hr) : r = hr;
                  for (var K = 0; K < nr.length; K++) (0, nr[K])(r);
                }, Y = function(F) {
                  return g.try(function() {
                    return T(F, sr, !0);
                  });
                };
                return {
                  init: function() {
                    return g.try(function() {
                      return xr(dr) && function(F) {
                        var U = F.componentName, lr = F.parentComponentWindow, hr = Ro({
                          data: Kt(window.name).serializedInitialPayload,
                          sender: {
                            win: lr
                          },
                          basic: !0
                        }), K = hr.sender;
                        if (hr.reference.type === "uid" || hr.metaData.windowRef.type === "global") {
                          var L = No({
                            data: hr.data,
                            metaData: {
                              windowRef: ti(lr)
                            },
                            sender: {
                              domain: K.domain
                            },
                            receiver: {
                              win: window,
                              domain: ur()
                            },
                            basic: !0
                          });
                          window.name = Io({
                            name: U,
                            serializedPayload: L.serializedData
                          });
                        }
                      }({
                        componentName: S.name,
                        parentComponentWindow: dr
                      }), vt(window).exports = S.exports({
                        getExports: function() {
                          return n;
                        }
                      }), function(F, U) {
                        if (!_e(F, U)) throw new Error("Can not be rendered by domain: " + U);
                      }(er, sr), At(dr), function() {
                        window.addEventListener("beforeunload", function() {
                          v.fireAndForget();
                        }), window.addEventListener("unload", function() {
                          v.fireAndForget();
                        }), Ve(dr, function() {
                          en();
                        });
                      }(), z({
                        updateProps: Y,
                        close: en
                      });
                    }).then(function() {
                      return (F = _.width, U = F !== void 0 && F, lr = _.height, hr = lr !== void 0 && lr, K = _.element, Uo(K === void 0 ? "body" : K).catch(se).then(function(L) {
                        return {
                          width: U,
                          height: hr,
                          element: L
                        };
                      })).then(function(L) {
                        var Dr = L.width, pr = L.height, re = L.element;
                        re && (Dr || pr) && s !== Be.POPUP && yo(re, function(ee) {
                          cr({
                            width: Dr ? ee.width : void 0,
                            height: pr ? ee.height : void 0
                          });
                        }, {
                          width: Dr,
                          height: pr
                        });
                      });
                      var F, U, lr, hr, K;
                    }).catch(function(F) {
                      b(F);
                    });
                  },
                  getProps: function() {
                    return r || (T(f, sr), r);
                  }
                };
              }(i);
              return y.init(), y;
            }
          });
          if (O(), function() {
            var y = hn("zoid_allow_delegate_" + o, function() {
              return !0;
            }), S = hn("zoid_delegate_" + o, function(D) {
              var J = D.data;
              return {
                parent: To({
                  uid: J.uid,
                  options: i,
                  overrides: J.overrides,
                  parentWin: D.source
                })
              };
            });
            Mt.register(y.cancel), Mt.register(S.cancel);
          }(), C.components = C.components || {}, C.components[c]) throw new Error("Can not register multiple components with the same tag: " + c);
          return C.components[c] = !0, {
            init: function y(S) {
              var D, J = "zoid-" + c + "-" + xe(), _ = S || {}, er = l({
                props: _
              }), nr = er.eligible, Pr = er.reason, Sr = _.onDestroy;
              _.onDestroy = function() {
                if (D && nr && P.splice(P.indexOf(D), 1), Sr) return Sr.apply(void 0, arguments);
              };
              var G = To({
                uid: J,
                options: i
              });
              G.init(), nr ? G.setProps(_) : _.onDestroy && _.onDestroy(), zo.register(function(r) {
                return G.destroy(r || new Error("zoid destroyed all components"));
              });
              var dr = function(r) {
                var n = (r === void 0 ? {} : r).decorate;
                return y((n === void 0 ? ct : n)(_));
              }, sr = function(r, n, t) {
                return g.try(function() {
                  if (!nr) {
                    var a = new Error(Pr || o + " component is not eligible");
                    return G.destroy(a).then(function() {
                      throw a;
                    });
                  }
                  if (!ze(r)) throw new Error("Must pass window to renderTo");
                  return function(u, s) {
                    return g.try(function() {
                      if (u.window) return rt(u.window).getType();
                      if (s) {
                        if (s !== Be.IFRAME && s !== Be.POPUP) throw new Error("Unrecognized context: " + s);
                        return s;
                      }
                      return d;
                    });
                  }(_, t);
                }).then(function(a) {
                  if (n = function(u, s) {
                    if (s) {
                      if (typeof s != "string" && !vo(s)) throw new TypeError("Expected string or element selector to be passed");
                      return s;
                    }
                    if (u === Be.POPUP) return "body";
                    throw new Error("Expected element to be passed to render iframe");
                  }(a, n), r !== window && typeof n != "string") throw new Error("Must pass string element when rendering to another window");
                  return G.render({
                    target: r,
                    container: n,
                    context: a,
                    rerender: function() {
                      var u = dr();
                      return _n(D, u), u.renderTo(r, n, t);
                    }
                  });
                }).catch(function(a) {
                  return G.destroy(a).then(function() {
                    throw a;
                  });
                });
              };
              return D = zr({}, G.getExports(), G.getHelpers(), function() {
                for (var r = h(), n = {}, t = function(s, f) {
                  var p = f[s], w = r[p];
                  n[p] = function(m) {
                    var b = G.getProps(), v = zr({}, m, {
                      parent: {
                        uid: J,
                        props: b,
                        export: G.export
                      }
                    });
                    return w(v);
                  };
                }, a = 0, u = Object.keys(r); a < u.length; a++) t(a, u);
                return n;
              }(), {
                isEligible: function() {
                  return nr;
                },
                clone: dr,
                render: function(r, n) {
                  return sr(window, r, n);
                },
                renderTo: function(r, n, t) {
                  return sr(r, n, t);
                }
              }), nr && P.push(D), D;
            },
            instances: P,
            driver: function(y, S) {
              throw new Error("Driver support not enabled");
            },
            isChild: E,
            canRenderTo: function(y) {
              return vn(y, "zoid_allow_delegate_" + o).then(function(S) {
                return S.data;
              }).catch(function() {
                return !1;
              });
            },
            registerChild: O
          };
        }
        var ri = function(e) {
          (function() {
            ht().initialized || (ht().initialized = !0, l = (d = {
              on: hn,
              send: vn
            }).on, h = d.send, (C = ht()).receiveMessage = C.receiveMessage || function(P) {
              return Vt(P, {
                on: l,
                send: h
              });
            }, function(P) {
              var E = P.on, O = P.send;
              fe().getOrSet("postMessageListener", function() {
                return po(window, "message", function(y) {
                  (function(S, D) {
                    var J = D.on, _ = D.send;
                    g.try(function() {
                      var er = S.source || S.sourceElement, nr = S.origin || S.originalEvent && S.originalEvent.origin, Pr = S.data;
                      if (nr === "null" && (nr = "file://"), er) {
                        if (!nr) throw new Error("Post message did not have origin domain");
                        Vt({
                          source: er,
                          origin: nr,
                          data: Pr
                        }, {
                          on: J,
                          send: _
                        });
                      }
                    });
                  })(y, {
                    on: E,
                    send: O
                  });
                });
              });
            }({
              on: hn,
              send: vn
            }), function(P) {
              var E = P.on, O = P.send;
              fe("builtinListeners").getOrSet("helloListener", function() {
                var y = E("postrobot_hello", {
                  domain: "*"
                }, function(D) {
                  return bo(D.source, {
                    domain: D.origin
                  }), {
                    instanceID: fn()
                  };
                }), S = In();
                return S && Br(S, {
                  send: O
                }).catch(function(D) {
                }), y;
              });
            }({
              on: hn,
              send: vn
            }));
            var d, l, h, C;
          })();
          var i = ko(e), o = function(d) {
            return i.init(d);
          };
          o.driver = function(d, l) {
            return i.driver(d, l);
          }, o.isChild = function() {
            return i.isChild();
          }, o.canRenderTo = function(d) {
            return i.canRenderTo(d);
          }, o.instances = i.instances;
          var c = i.registerChild();
          return c && (window.xprops = o.xprops = c.getProps()), o;
        };
        function Jr(e) {
          var i = zo.all(e);
          return zo = sn(), i;
        }
        var Ut = Jr;
        function Re(e) {
          return Ut(), delete window.__zoid_9_0_86__, function() {
            (function() {
              for (var o = fe("responseListeners"), c = 0, d = o.keys(); c < d.length; c++) {
                var l = d[c], h = o.get(l);
                h && (h.cancelled = !0), o.del(l);
              }
            })(), (i = fe().get("postMessageListener")) && i.cancel();
            var i;
            delete window.__post_robot_10_0_44__;
          }(), Mt.all(e);
        }
      }]);
    });
  }(ai)), ai.exports;
}
var ui = { exports: {} }, fi;
function Wi() {
  return fi || (fi = 1, function(Rn, ei) {
    (function(yn, Ur) {
      Rn.exports = Ur();
    })(typeof self < "u" ? self : li, function() {
      return function(yn) {
        var Ur = {};
        function ir(H) {
          if (Ur[H]) return Ur[H].exports;
          var mr = Ur[H] = {
            i: H,
            l: !1,
            exports: {}
          };
          return yn[H].call(mr.exports, mr, mr.exports, ir), mr.l = !0, mr.exports;
        }
        return ir.m = yn, ir.c = Ur, ir.d = function(H, mr, zr) {
          ir.o(H, mr) || Object.defineProperty(H, mr, {
            enumerable: !0,
            get: zr
          });
        }, ir.r = function(H) {
          typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(H, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(H, "__esModule", {
            value: !0
          });
        }, ir.t = function(H, mr) {
          if (1 & mr && (H = ir(H)), 8 & mr || 4 & mr && typeof H == "object" && H && H.__esModule) return H;
          var zr = /* @__PURE__ */ Object.create(null);
          if (ir.r(zr), Object.defineProperty(zr, "default", {
            enumerable: !0,
            value: H
          }), 2 & mr && typeof H != "string") for (var pe in H) ir.d(zr, pe, (function(Bn) {
            return H[Bn];
          }).bind(null, pe));
          return zr;
        }, ir.n = function(H) {
          var mr = H && H.__esModule ? function() {
            return H.default;
          } : function() {
            return H;
          };
          return ir.d(mr, "a", mr), mr;
        }, ir.o = function(H, mr) {
          return {}.hasOwnProperty.call(H, mr);
        }, ir.p = "", ir(ir.s = 0);
      }([function(yn, Ur, ir) {
        ir.r(Ur), ir.d(Ur, "PopupOpenError", function() {
          return Rt;
        }), ir.d(Ur, "create", function() {
          return Sr;
        }), ir.d(Ur, "destroy", function() {
          return sr;
        }), ir.d(Ur, "destroyComponents", function() {
          return G;
        }), ir.d(Ur, "destroyAll", function() {
          return dr;
        }), ir.d(Ur, "PROP_TYPE", function() {
          return Jr;
        }), ir.d(Ur, "PROP_SERIALIZATION", function() {
          return Ut;
        }), ir.d(Ur, "CONTEXT", function() {
          return Re;
        }), ir.d(Ur, "EVENT", function() {
          return e;
        });
        function H(r, n) {
          return (H = Object.setPrototypeOf || function(t, a) {
            return t.__proto__ = a, t;
          })(r, n);
        }
        function mr(r, n) {
          r.prototype = Object.create(n.prototype), r.prototype.constructor = r, H(r, n);
        }
        function zr() {
          return (zr = Object.assign || function(r) {
            for (var n = 1; n < arguments.length; n++) {
              var t = arguments[n];
              for (var a in t) ({}).hasOwnProperty.call(t, a) && (r[a] = t[a]);
            }
            return r;
          }).apply(this, arguments);
        }
        function pe(r) {
          try {
            if (!r) return !1;
            if (typeof Promise < "u" && r instanceof Promise) return !0;
            if (typeof window < "u" && typeof window.Window == "function" && r instanceof window.Window || typeof window < "u" && typeof window.constructor == "function" && r instanceof window.constructor) return !1;
            var n = {}.toString;
            if (n) {
              var t = n.call(r);
              if (t === "[object Window]" || t === "[object global]" || t === "[object DOMWindow]") return !1;
            }
            if (typeof r.then == "function") return !0;
          } catch {
            return !1;
          }
          return !1;
        }
        var Bn = [], xn = [], yt = 0, Cn;
        function eo() {
          if (!yt && Cn) {
            var r = Cn;
            Cn = null, r.resolve();
          }
        }
        function Et() {
          yt += 1;
        }
        function On() {
          yt -= 1, eo();
        }
        var g = function() {
          function r(t) {
            var a = this;
            if (this.resolved = void 0, this.rejected = void 0, this.errorHandled = void 0, this.value = void 0, this.error = void 0, this.handlers = void 0, this.dispatching = void 0, this.stack = void 0, this.resolved = !1, this.rejected = !1, this.errorHandled = !1, this.handlers = [], t) {
              var u, s, f = !1, p = !1, w = !1;
              Et();
              try {
                t(function(m) {
                  w ? a.resolve(m) : (f = !0, u = m);
                }, function(m) {
                  w ? a.reject(m) : (p = !0, s = m);
                });
              } catch (m) {
                On(), this.reject(m);
                return;
              }
              On(), w = !0, f ? this.resolve(u) : p && this.reject(s);
            }
          }
          var n = r.prototype;
          return n.resolve = function(t) {
            if (this.resolved || this.rejected) return this;
            if (pe(t)) throw new Error("Can not resolve promise with another promise");
            return this.resolved = !0, this.value = t, this.dispatch(), this;
          }, n.reject = function(t) {
            var a = this;
            if (this.resolved || this.rejected) return this;
            if (pe(t)) throw new Error("Can not reject promise with another promise");
            if (!t) {
              var u = t && typeof t.toString == "function" ? t.toString() : {}.toString.call(t);
              t = new Error("Expected reject to be called with Error, got " + u);
            }
            return this.rejected = !0, this.error = t, this.errorHandled || setTimeout(function() {
              a.errorHandled || function(s, f) {
                if (Bn.indexOf(s) === -1) {
                  Bn.push(s), setTimeout(function() {
                    throw s;
                  }, 1);
                  for (var p = 0; p < xn.length; p++) xn[p](s, f);
                }
              }(t, a);
            }, 1), this.dispatch(), this;
          }, n.asyncReject = function(t) {
            return this.errorHandled = !0, this.reject(t), this;
          }, n.dispatch = function() {
            var t = this.resolved, a = this.rejected, u = this.handlers;
            if (!this.dispatching && (t || a)) {
              this.dispatching = !0, Et();
              for (var s = function(W, z) {
                return W.then(function(I) {
                  z.resolve(I);
                }, function(I) {
                  z.reject(I);
                });
              }, f = 0; f < u.length; f++) {
                var p = u[f], w = p.onSuccess, m = p.onError, b = p.promise, v = void 0;
                if (t) try {
                  v = w ? w(this.value) : this.value;
                } catch (W) {
                  b.reject(W);
                  continue;
                }
                else if (a) {
                  if (!m) {
                    b.reject(this.error);
                    continue;
                  }
                  try {
                    v = m(this.error);
                  } catch (W) {
                    b.reject(W);
                    continue;
                  }
                }
                if (v instanceof r && (v.resolved || v.rejected)) {
                  var x = v;
                  x.resolved ? b.resolve(x.value) : b.reject(x.error), x.errorHandled = !0;
                } else pe(v) ? v instanceof r && (v.resolved || v.rejected) ? v.resolved ? b.resolve(v.value) : b.reject(v.error) : s(v, b) : b.resolve(v);
              }
              u.length = 0, this.dispatching = !1, On();
            }
          }, n.then = function(t, a) {
            if (t && typeof t != "function" && !t.call) throw new Error("Promise.then expected a function for success handler");
            if (a && typeof a != "function" && !a.call) throw new Error("Promise.then expected a function for error handler");
            var u = new r();
            return this.handlers.push({
              promise: u,
              onSuccess: t,
              onError: a
            }), this.errorHandled = !0, this.dispatch(), u;
          }, n.catch = function(t) {
            return this.then(void 0, t);
          }, n.finally = function(t) {
            if (t && typeof t != "function" && !t.call) throw new Error("Promise.finally expected a function");
            return this.then(function(a) {
              return r.try(t).then(function() {
                return a;
              });
            }, function(a) {
              return r.try(t).then(function() {
                throw a;
              });
            });
          }, n.timeout = function(t, a) {
            var u = this;
            if (this.resolved || this.rejected) return this;
            var s = setTimeout(function() {
              u.resolved || u.rejected || u.reject(a || new Error("Promise timed out after " + t + "ms"));
            }, t);
            return this.then(function(f) {
              return clearTimeout(s), f;
            });
          }, n.toPromise = function() {
            if (typeof Promise > "u") throw new TypeError("Could not find Promise");
            return Promise.resolve(this);
          }, n.lazy = function() {
            return this.errorHandled = !0, this;
          }, r.resolve = function(t) {
            return t instanceof r ? t : pe(t) ? new r(function(a, u) {
              return t.then(a, u);
            }) : new r().resolve(t);
          }, r.reject = function(t) {
            return new r().reject(t);
          }, r.asyncReject = function(t) {
            return new r().asyncReject(t);
          }, r.all = function(t) {
            var a = new r(), u = t.length, s = [].slice();
            if (!u)
              return a.resolve(s), a;
            for (var f = function(m, b, v) {
              return b.then(function(x) {
                s[m] = x, (u -= 1) == 0 && a.resolve(s);
              }, function(x) {
                v.reject(x);
              });
            }, p = 0; p < t.length; p++) {
              var w = t[p];
              if (w instanceof r) {
                if (w.resolved) {
                  s[p] = w.value, u -= 1;
                  continue;
                }
              } else if (!pe(w)) {
                s[p] = w, u -= 1;
                continue;
              }
              f(p, r.resolve(w), a);
            }
            return u === 0 && a.resolve(s), a;
          }, r.hash = function(t) {
            var a = {}, u = [], s = function(p) {
              if (t.hasOwnProperty(p)) {
                var w = t[p];
                pe(w) ? u.push(w.then(function(m) {
                  a[p] = m;
                })) : a[p] = w;
              }
            };
            for (var f in t) s(f);
            return r.all(u).then(function() {
              return a;
            });
          }, r.map = function(t, a) {
            return r.all(t.map(a));
          }, r.onPossiblyUnhandledException = function(t) {
            return function(a) {
              return xn.push(a), {
                cancel: function() {
                  xn.splice(xn.indexOf(a), 1);
                }
              };
            }(t);
          }, r.try = function(t, a, u) {
            if (t && typeof t != "function" && !t.call) throw new Error("Promise.try expected a function");
            var s;
            Et();
            try {
              s = t.apply(a, u || []);
            } catch (f) {
              return On(), r.reject(f);
            }
            return On(), r.resolve(s);
          }, r.delay = function(t) {
            return new r(function(a) {
              setTimeout(a, t);
            });
          }, r.isPromise = function(t) {
            return !!(t && t instanceof r) || pe(t);
          }, r.flush = function() {
            return function(t) {
              var a = Cn = Cn || new t();
              return eo(), a;
            }(r);
          }, r;
        }();
        function Wn(r) {
          return {}.toString.call(r) === "[object RegExp]";
        }
        var qn = {
          IFRAME: "iframe",
          POPUP: "popup"
        }, Ge = `Call was rejected by callee.\r
`;
        function no(r) {
          return r === void 0 && (r = window), r.location.protocol;
        }
        function to(r) {
          if (r === void 0 && (r = window), r.mockDomain) {
            var n = r.mockDomain.split("//")[0];
            if (n) return n;
          }
          return no(r);
        }
        function oo(r) {
          return r === void 0 && (r = window), to(r) === "about:";
        }
        function ce(r) {
          if (r === void 0 && (r = window), r) try {
            if (r.parent && r.parent !== r) return r.parent;
          } catch {
          }
        }
        function Ye(r) {
          if (r === void 0 && (r = window), r && !ce(r)) try {
            return r.opener;
          } catch {
          }
        }
        function Hn(r) {
          try {
            return !0;
          } catch {
          }
          return !1;
        }
        function Jn(r) {
          r === void 0 && (r = window);
          var n = r.location;
          if (!n) throw new Error("Can not read window location");
          var t = no(r);
          if (!t) throw new Error("Can not read window protocol");
          if (t === "file:") return "file://";
          if (t === "about:") {
            var a = ce(r);
            return a && Hn() ? Jn(a) : "about://";
          }
          var u = n.host;
          if (!u) throw new Error("Can not read window host");
          return t + "//" + u;
        }
        function ur(r) {
          r === void 0 && (r = window);
          var n = Jn(r);
          return n && r.mockDomain && r.mockDomain.indexOf("mock:") === 0 ? r.mockDomain : n;
        }
        function xr(r) {
          if (!function(n) {
            try {
              if (n === window) return !0;
            } catch {
            }
            try {
              var t = Object.getOwnPropertyDescriptor(n, "location");
              if (t && t.enumerable === !1) return !1;
            } catch {
            }
            try {
              if (oo(n) && Hn()) return !0;
            } catch {
            }
            try {
              if (function(a) {
                return a === void 0 && (a = window), to(a) === "mock:";
              }(n) && Hn()) return !0;
            } catch {
            }
            try {
              if (Jn(n) === Jn(window)) return !0;
            } catch {
            }
            return !1;
          }(r)) return !1;
          try {
            if (r === window || oo(r) && Hn() || ur(window) === ur(r)) return !0;
          } catch {
          }
          return !1;
        }
        function de(r) {
          if (!xr(r)) throw new Error("Expected window to be same domain");
          return r;
        }
        function io(r, n) {
          if (!r || !n) return !1;
          var t = ce(n);
          return t ? t === r : function(a) {
            var u = [];
            try {
              for (; a.parent !== a; )
                u.push(a.parent), a = a.parent;
            } catch {
            }
            return u;
          }(n).indexOf(r) !== -1;
        }
        function $n(r) {
          var n = [], t;
          try {
            t = r.frames;
          } catch {
            t = r;
          }
          var a;
          try {
            a = t.length;
          } catch {
          }
          if (a === 0) return n;
          if (a) {
            for (var u = 0; u < a; u++) {
              var s = void 0;
              try {
                s = t[u];
              } catch {
                continue;
              }
              n.push(s);
            }
            return n;
          }
          for (var f = 0; f < 100; f++) {
            var p = void 0;
            try {
              p = t[f];
            } catch {
              return n;
            }
            if (!p) return n;
            n.push(p);
          }
          return n;
        }
        function Zn(r) {
          for (var n = [], t = 0, a = $n(r); t < a.length; t++) {
            var u = a[t];
            n.push(u);
            for (var s = 0, f = Zn(u); s < f.length; s++) n.push(f[s]);
          }
          return n;
        }
        function un(r) {
          r === void 0 && (r = window);
          try {
            if (r.top) return r.top;
          } catch {
          }
          if (ce(r) === r) return r;
          try {
            if (io(window, r) && window.top) return window.top;
          } catch {
          }
          try {
            if (io(r, window) && window.top) return window.top;
          } catch {
          }
          for (var n = 0, t = Zn(r); n < t.length; n++) {
            var a = t[n];
            try {
              if (a.top) return a.top;
            } catch {
            }
            if (ce(a) === a) return a;
          }
        }
        function cn(r) {
          var n = un(r);
          if (!n) throw new Error("Can not determine top window");
          var t = [].concat(Zn(n), [n]);
          return t.indexOf(r) === -1 && (t = [].concat(t, [r], Zn(r))), t;
        }
        var Sn = [], Pt = [];
        function Fr(r, n) {
          n === void 0 && (n = !0);
          try {
            if (r === window) return !1;
          } catch {
            return !0;
          }
          try {
            if (!r) return !0;
          } catch {
            return !0;
          }
          try {
            if (r.closed) return !0;
          } catch (u) {
            return !u || u.message !== Ge;
          }
          if (n && xr(r)) try {
            if (r.mockclosed) return !0;
          } catch {
          }
          try {
            if (!r.parent || !r.top) return !0;
          } catch {
          }
          var t = function(u, s) {
            for (var f = 0; f < u.length; f++) try {
              if (u[f] === s) return f;
            } catch {
            }
            return -1;
          }(Sn, r);
          if (t !== -1) {
            var a = Pt[t];
            if (a && function(u) {
              if (!u.contentWindow || !u.parentNode) return !0;
              var s = u.ownerDocument;
              if (s && s.documentElement && !s.documentElement.contains(u)) {
                for (var f = u; f.parentNode && f.parentNode !== f; ) f = f.parentNode;
                if (!f.host || !s.documentElement.contains(f.host)) return !0;
              }
              return !1;
            }(a)) return !0;
          }
          return !1;
        }
        function ao(r) {
          return (r = r || window).navigator.mockUserAgent || r.navigator.userAgent;
        }
        function In(r, n) {
          for (var t = $n(r), a = 0; a < t.length; a++) {
            var u = t[a];
            try {
              if (xr(u) && u.name === n && t.indexOf(u) !== -1) return u;
            } catch {
            }
          }
          try {
            if (t.indexOf(r.frames[n]) !== -1) return r.frames[n];
          } catch {
          }
          try {
            if (t.indexOf(r[n]) !== -1) return r[n];
          } catch {
          }
        }
        function Lt(r, n) {
          return r === Ye(n);
        }
        function Gn(r) {
          return r === void 0 && (r = window), Ye(r = r || window) || ce(r) || void 0;
        }
        function jt(r, n) {
          for (var t = 0; t < r.length; t++)
            for (var a = r[t], u = 0; u < n.length; u++) if (a === n[u]) return !0;
          return !1;
        }
        function _e(r) {
          r === void 0 && (r = window);
          for (var n = 0, t = r; t; ) (t = ce(t)) && (n += 1);
          return n;
        }
        function bt(r, n) {
          var t = un(r) || r, a = un(n) || n;
          try {
            if (t && a) return t === a;
          } catch {
          }
          var u = cn(r), s = cn(n);
          if (jt(u, s)) return !0;
          var f = Ye(t), p = Ye(a);
          return f && jt(cn(f), s) || p && jt(cn(p), u), !1;
        }
        function Ve(r, n) {
          if (typeof r == "string") {
            if (typeof n == "string") return r === "*" || n === r;
            if (Wn(n) || Array.isArray(n)) return !1;
          }
          return Wn(r) ? Wn(n) ? r.toString() === n.toString() : !Array.isArray(n) && !!n.match(r) : !!Array.isArray(r) && (Array.isArray(n) ? JSON.stringify(r) === JSON.stringify(n) : !Wn(n) && r.some(function(t) {
            return Ve(t, n);
          }));
        }
        function ze(r) {
          return r.match(/^(https?|mock|file):\/\//) ? r.split("/").slice(0, 3).join("/") : ur();
        }
        function uo(r, n, t, a) {
          t === void 0 && (t = 1e3), a === void 0 && (a = 1 / 0);
          var u;
          return function s() {
            if (Fr(r))
              return u && clearTimeout(u), n();
            a <= 0 ? clearTimeout(u) : (a -= t, u = setTimeout(s, t));
          }(), {
            cancel: function() {
              u && clearTimeout(u);
            }
          };
        }
        function Yn(r) {
          try {
            if (r === window) return !0;
          } catch (n) {
            if (n && n.message === Ge) return !0;
          }
          try {
            if ({}.toString.call(r) === "[object Window]") return !0;
          } catch (n) {
            if (n && n.message === Ge) return !0;
          }
          try {
            if (window.Window && r instanceof window.Window) return !0;
          } catch (n) {
            if (n && n.message === Ge) return !0;
          }
          try {
            if (r && r.self === r) return !0;
          } catch (n) {
            if (n && n.message === Ge) return !0;
          }
          try {
            if (r && r.parent === r) return !0;
          } catch (n) {
            if (n && n.message === Ge) return !0;
          }
          try {
            if (r && r.top === r) return !0;
          } catch (n) {
            if (n && n.message === Ge) return !0;
          }
          try {
            if (r && r.__cross_domain_utils_window_check__ === "__unlikely_value__") return !1;
          } catch {
            return !0;
          }
          try {
            if ("postMessage" in r && "self" in r && "location" in r) return !0;
          } catch {
          }
          return !1;
        }
        function it(r) {
          if (n = ze(r), n.indexOf("mock:") !== 0) return r;
          var n;
          throw new Error("Mock urls not supported out of test mode");
        }
        function xt(r) {
          if (xr(r)) return de(r).frameElement;
          for (var n = 0, t = document.querySelectorAll("iframe"); n < t.length; n++) {
            var a = t[n];
            if (a && a.contentWindow && a.contentWindow === r) return a;
          }
        }
        function co(r) {
          if (function(t) {
            return t === void 0 && (t = window), !!ce(t);
          }(r)) {
            var n = xt(r);
            if (n && n.parentElement) {
              n.parentElement.removeChild(n);
              return;
            }
          }
          try {
            r.close();
          } catch {
          }
        }
        function Bt(r, n) {
          for (var t = 0; t < r.length; t++) try {
            if (r[t] === n) return t;
          } catch {
          }
          return -1;
        }
        var Ct = function() {
          function r() {
            if (this.name = void 0, this.weakmap = void 0, this.keys = void 0, this.values = void 0, this.name = "__weakmap_" + (1e9 * Math.random() >>> 0) + "__", function() {
              if (typeof WeakMap > "u" || Object.freeze === void 0) return !1;
              try {
                var t = /* @__PURE__ */ new WeakMap(), a = {};
                return Object.freeze(a), t.set(a, "__testvalue__"), t.get(a) === "__testvalue__";
              } catch {
                return !1;
              }
            }()) try {
              this.weakmap = /* @__PURE__ */ new WeakMap();
            } catch {
            }
            this.keys = [], this.values = [];
          }
          var n = r.prototype;
          return n._cleanupClosedWindows = function() {
            for (var t = this.weakmap, a = this.keys, u = 0; u < a.length; u++) {
              var s = a[u];
              if (Yn(s) && Fr(s)) {
                if (t) try {
                  t.delete(s);
                } catch {
                }
                a.splice(u, 1), this.values.splice(u, 1), u -= 1;
              }
            }
          }, n.isSafeToReadWrite = function(t) {
            return !Yn(t);
          }, n.set = function(t, a) {
            if (!t) throw new Error("WeakMap expected key");
            var u = this.weakmap;
            if (u) try {
              u.set(t, a);
            } catch {
              delete this.weakmap;
            }
            if (this.isSafeToReadWrite(t)) try {
              var s = this.name, f = t[s];
              f && f[0] === t ? f[1] = a : Object.defineProperty(t, s, {
                value: [t, a],
                writable: !0
              });
              return;
            } catch {
            }
            this._cleanupClosedWindows();
            var p = this.keys, w = this.values, m = Bt(p, t);
            m === -1 ? (p.push(t), w.push(a)) : w[m] = a;
          }, n.get = function(t) {
            if (!t) throw new Error("WeakMap expected key");
            var a = this.weakmap;
            if (a) try {
              if (a.has(t)) return a.get(t);
            } catch {
              delete this.weakmap;
            }
            if (this.isSafeToReadWrite(t)) try {
              var u = t[this.name];
              return u && u[0] === t ? u[1] : void 0;
            } catch {
            }
            this._cleanupClosedWindows();
            var s = Bt(this.keys, t);
            if (s !== -1) return this.values[s];
          }, n.delete = function(t) {
            if (!t) throw new Error("WeakMap expected key");
            var a = this.weakmap;
            if (a) try {
              a.delete(t);
            } catch {
              delete this.weakmap;
            }
            if (this.isSafeToReadWrite(t)) try {
              var u = t[this.name];
              u && u[0] === t && (u[0] = u[1] = void 0);
            } catch {
            }
            this._cleanupClosedWindows();
            var s = this.keys, f = Bt(s, t);
            f !== -1 && (s.splice(f, 1), this.values.splice(f, 1));
          }, n.has = function(t) {
            if (!t) throw new Error("WeakMap expected key");
            var a = this.weakmap;
            if (a) try {
              if (a.has(t)) return !0;
            } catch {
              delete this.weakmap;
            }
            if (this.isSafeToReadWrite(t)) try {
              var u = t[this.name];
              return !(!u || u[0] !== t);
            } catch {
            }
            return this._cleanupClosedWindows(), Bt(this.keys, t) !== -1;
          }, n.getOrSet = function(t, a) {
            if (this.has(t)) return this.get(t);
            var u = a();
            return this.set(t, u), u;
          }, r;
        }();
        function so(r) {
          return (so = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
            return n.__proto__ || Object.getPrototypeOf(n);
          })(r);
        }
        function fo() {
          if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
          if (typeof Proxy == "function") return !0;
          try {
            return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
            })), !0;
          } catch {
            return !1;
          }
        }
        function qt(r, n, t) {
          return (qt = fo() ? Reflect.construct : function(a, u, s) {
            var f = [null];
            f.push.apply(f, u);
            var p = new (Function.bind.apply(a, f))();
            return s && H(p, s.prototype), p;
          }).apply(null, arguments);
        }
        function Ht(r) {
          var n = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
          return (Ht = function(t) {
            if (t === null || (a = t, Function.toString.call(a).indexOf("[native code]") === -1)) return t;
            var a;
            if (typeof t != "function") throw new TypeError("Super expression must either be null or a function");
            if (n !== void 0) {
              if (n.has(t)) return n.get(t);
              n.set(t, u);
            }
            function u() {
              return qt(t, arguments, so(this).constructor);
            }
            return u.prototype = Object.create(t.prototype, {
              constructor: {
                value: u,
                enumerable: !1,
                writable: !0,
                configurable: !0
              }
            }), H(u, t);
          })(r);
        }
        function xe(r) {
          return r.name || r.__name__ || r.displayName || "anonymous";
        }
        function at(r, n) {
          try {
            delete r.name, r.name = n;
          } catch {
          }
          return r.__name__ = r.displayName = n, r;
        }
        function Ot(r) {
          if (typeof btoa == "function") return btoa(encodeURIComponent(r).replace(/%([0-9A-F]{2})/g, function(n, t) {
            return String.fromCharCode(parseInt(t, 16));
          })).replace(/[=]/g, "");
          if (typeof Buffer < "u") return Buffer.from(r, "utf8").toString("base64").replace(/[=]/g, "");
          throw new Error("Can not find window.btoa or Buffer");
        }
        function We() {
          var r = "0123456789abcdef";
          return "uid_" + "xxxxxxxxxx".replace(/./g, function() {
            return r.charAt(Math.floor(Math.random() * r.length));
          }) + "_" + Ot((/* @__PURE__ */ new Date()).toISOString().slice(11, 19).replace("T", ".")).replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
        }
        var Tn;
        function Jt(r) {
          try {
            return JSON.stringify([].slice.call(r), function(n, t) {
              return typeof t == "function" ? "memoize[" + function(a) {
                if (Tn = Tn || new Ct(), a == null || typeof a != "object" && typeof a != "function") throw new Error("Invalid object");
                var u = Tn.get(a);
                return u || (u = typeof a + ":" + We(), Tn.set(a, u)), u;
              }(t) + "]" : t;
            });
          } catch {
            throw new Error("Arguments not serializable -- can not be used to memoize");
          }
        }
        function zn() {
          return {};
        }
        var Wt = 0, se = 0;
        function dn(r, n) {
          n === void 0 && (n = {});
          var t = n.thisNamespace, a = t !== void 0 && t, u = n.time, s, f, p = Wt;
          Wt += 1;
          var w = function() {
            for (var m = arguments.length, b = new Array(m), v = 0; v < m; v++) b[v] = arguments[v];
            p < se && (s = null, f = null, p = Wt, Wt += 1);
            var x;
            x = a ? (f = f || new Ct()).getOrSet(this, zn) : s = s || {};
            var W = Jt(b), z = x[W];
            if (z && u && Date.now() - z.time < u && (delete x[W], z = null), z) return z.value;
            var I = Date.now(), B = r.apply(this, arguments);
            return x[W] = {
              time: I,
              value: B
            }, B;
          };
          return w.reset = function() {
            s = null, f = null;
          }, at(w, (n.name || xe(r)) + "::memoized");
        }
        dn.clear = function() {
          se = Wt;
        };
        function ut(r) {
          var n = {};
          function t() {
            for (var a = arguments, u = this, s = arguments.length, f = new Array(s), p = 0; p < s; p++) f[p] = arguments[p];
            var w = Jt(f);
            return n.hasOwnProperty(w) || (n[w] = g.try(function() {
              return r.apply(u, a);
            }).finally(function() {
              delete n[w];
            })), n[w];
          }
          return t.reset = function() {
            n = {};
          }, at(t, xe(r) + "::promiseMemoized");
        }
        function ne() {
        }
        function _n(r) {
          var n = !1;
          return at(function() {
            if (!n)
              return n = !0, r.apply(this, arguments);
          }, xe(r) + "::once");
        }
        function ct(r, n) {
          if (n === void 0 && (n = 1), n >= 3) return "stringifyError stack overflow";
          try {
            if (!r) return "<unknown error: " + {}.toString.call(r) + ">";
            if (typeof r == "string") return r;
            if (r instanceof Error) {
              var t = r && r.stack, a = r && r.message;
              if (t && a) return t.indexOf(a) !== -1 ? t : a + `
` + t;
              if (t) return t;
              if (a) return a;
            }
            return r && r.toString && typeof r.toString == "function" ? r.toString() : {}.toString.call(r);
          } catch (u) {
            return "Error while stringifying error: " + ct(u, n + 1);
          }
        }
        function An(r) {
          return typeof r == "string" ? r : r && r.toString && typeof r.toString == "function" ? r.toString() : {}.toString.call(r);
        }
        function dt(r, n) {
          if (!n) return r;
          if (Object.assign) return Object.assign(r, n);
          for (var t in n) n.hasOwnProperty(t) && (r[t] = n[t]);
          return r;
        }
        dn(function(r) {
          if (Object.values) return Object.values(r);
          var n = [];
          for (var t in r) r.hasOwnProperty(t) && n.push(r[t]);
          return n;
        });
        function Fn(r) {
          return r;
        }
        function Vn(r, n) {
          var t;
          return function a() {
            t = setTimeout(function() {
              r(), a();
            }, n);
          }(), {
            cancel: function() {
              clearTimeout(t);
            }
          };
        }
        function Xn(r) {
          return [].slice.call(r);
        }
        function sn(r) {
          return r != null;
        }
        function st(r) {
          return {}.toString.call(r) === "[object RegExp]";
        }
        function St(r, n, t) {
          if (r.hasOwnProperty(n)) return r[n];
          var a = t();
          return r[n] = a, a;
        }
        function Dt(r) {
          var n = [], t = !1, a, u = {
            set: function(s, f) {
              return t || (r[s] = f, u.register(function() {
                delete r[s];
              })), f;
            },
            register: function(s) {
              var f = _n(function() {
                return s(a);
              });
              return t ? s(a) : n.push(f), {
                cancel: function() {
                  var p = n.indexOf(f);
                  p !== -1 && n.splice(p, 1);
                }
              };
            },
            all: function(s) {
              a = s;
              var f = [];
              for (t = !0; n.length; ) {
                var p = n.shift();
                f.push(p());
              }
              return g.all(f).then(ne);
            }
          };
          return u;
        }
        function Kn(r, n) {
          if (n == null) throw new Error("Expected " + r + " to be present");
          return n;
        }
        var Fo = function(r) {
          mr(n, r);
          function n(t) {
            var a;
            return (a = r.call(this, t) || this).name = a.constructor.name, typeof Error.captureStackTrace == "function" ? Error.captureStackTrace(function(u) {
              if (u === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return u;
            }(a), a.constructor) : a.stack = new Error(t).stack, a;
          }
          return n;
        }(Ht(Error));
        function lo() {
          var r = document.body;
          if (!r) throw new Error("Body element not found");
          return r;
        }
        function Nt() {
          return !!document.body && document.readyState === "complete";
        }
        function ho() {
          return !!document.body && document.readyState === "interactive";
        }
        function Mo(r) {
          return encodeURIComponent(r);
        }
        dn(function() {
          return new g(function(r) {
            if (Nt() || ho()) return r();
            var n = setInterval(function() {
              if (Nt() || ho())
                return clearInterval(n), r();
            }, 10);
          });
        });
        function vo(r) {
          return function(n, t, a) {
            a === void 0 && (a = []);
            var u = n.__inline_memoize_cache__ = n.__inline_memoize_cache__ || {}, s = Jt(a);
            return u.hasOwnProperty(s) ? u[s] : u[s] = (function() {
              var f = {};
              if (!r || r.indexOf("=") === -1) return f;
              for (var p = 0, w = r.split("&"); p < w.length; p++) {
                var m = w[p];
                (m = m.split("="))[0] && m[1] && (f[decodeURIComponent(m[0])] = decodeURIComponent(m[1]));
              }
              return f;
            }).apply(void 0, a);
          }(vo, 0, [r]);
        }
        function $t(r, n) {
          return n === void 0 && (n = {}), n && Object.keys(n).length ? function(t) {
            return t === void 0 && (t = {}), Object.keys(t).filter(function(a) {
              return typeof t[a] == "string" || typeof t[a] == "boolean";
            }).map(function(a) {
              var u = t[a];
              if (typeof u != "string" && typeof u != "boolean") throw new TypeError("Invalid type for query");
              return Mo(a) + "=" + Mo(u.toString());
            }).join("&");
          }(zr({}, vo(r), n)) : r;
        }
        function Uo(r, n) {
          r.appendChild(n);
        }
        function Lo(r) {
          return r instanceof window.Element || r !== null && typeof r == "object" && r.nodeType === 1 && typeof r.style == "object" && typeof r.ownerDocument == "object";
        }
        function ft(r, n) {
          return n === void 0 && (n = document), Lo(r) ? r : typeof r == "string" ? n.querySelector(r) : void 0;
        }
        function wo(r) {
          return new g(function(n, t) {
            var a = An(r), u = ft(r);
            if (u) return n(u);
            if (Nt()) return t(new Error("Document is ready and element " + a + " does not exist"));
            var s = setInterval(function() {
              if (u = ft(r))
                n(u), clearInterval(s);
              else if (Nt())
                return clearInterval(s), t(new Error("Document is ready and element " + a + " does not exist"));
            }, 10);
          });
        }
        var Rt = function(r) {
          mr(n, r);
          function n() {
            return r.apply(this, arguments) || this;
          }
          return n;
        }(Fo), It;
        function po(r) {
          if ((It = It || new Ct()).has(r)) {
            var n = It.get(r);
            if (n) return n;
          }
          var t = new g(function(a, u) {
            r.addEventListener("load", function() {
              (function(s) {
                if (function() {
                  for (var f = 0; f < Sn.length; f++) {
                    var p = !1;
                    try {
                      p = Sn[f].closed;
                    } catch {
                    }
                    p && (Pt.splice(f, 1), Sn.splice(f, 1));
                  }
                }(), s && s.contentWindow) try {
                  Sn.push(s.contentWindow), Pt.push(s);
                } catch {
                }
              })(r), a(r);
            }), r.addEventListener("error", function(s) {
              r.contentWindow ? a(r) : u(s);
            });
          });
          return It.set(r, t), t;
        }
        function mo(r) {
          return po(r).then(function(n) {
            if (!n.contentWindow) throw new Error("Could not find window in iframe");
            return n.contentWindow;
          });
        }
        function go(r, n) {
          r === void 0 && (r = {});
          var t = r.style || {}, a = function(s, f, p) {
            s === void 0 && (s = "div"), f === void 0 && (f = {}), s = s.toLowerCase();
            var w = document.createElement(s);
            if (f.style && dt(w.style, f.style), f.class && (w.className = f.class.join(" ")), f.id && w.setAttribute("id", f.id), f.attributes) for (var m = 0, b = Object.keys(f.attributes); m < b.length; m++) {
              var v = b[m];
              w.setAttribute(v, f.attributes[v]);
            }
            if (f.styleSheet && function(x, W, z) {
              z === void 0 && (z = window.document), x.styleSheet ? x.styleSheet.cssText = W : x.appendChild(z.createTextNode(W));
            }(w, f.styleSheet), f.html) {
              if (s === "iframe") throw new Error("Iframe html can not be written unless container provided and iframe in DOM");
              w.innerHTML = f.html;
            }
            return w;
          }("iframe", {
            attributes: zr({
              allowTransparency: "true"
            }, r.attributes || {}),
            style: zr({
              backgroundColor: "transparent",
              border: "none"
            }, t),
            html: r.html,
            class: r.class
          }), u = window.navigator.userAgent.match(/MSIE|Edge/i);
          return a.hasAttribute("id") || a.setAttribute("id", We()), po(a), (r.url || u) && a.setAttribute("src", r.url || "about:blank"), a;
        }
        function lt(r, n, t) {
          return r.addEventListener(n, t), {
            cancel: function() {
              r.removeEventListener(n, t);
            }
          };
        }
        function Zt(r) {
          r.style.setProperty("display", "");
        }
        function yo(r) {
          r.style.setProperty("display", "none", "important");
        }
        function Qn(r) {
          r && r.parentNode && r.parentNode.removeChild(r);
        }
        function kn(r) {
          return !(r && r.parentNode && r.ownerDocument && r.ownerDocument.documentElement && r.ownerDocument.documentElement.contains(r));
        }
        function jo(r, n, t) {
          var a = t === void 0 ? {} : t, u = a.width, s = u === void 0 || u, f = a.height, p = f === void 0 || f, w = a.interval, m = w === void 0 ? 100 : w, b = a.win, v = b === void 0 ? window : b, x = r.offsetWidth, W = r.offsetHeight, z = !1;
          n({
            width: x,
            height: W
          });
          var I = function() {
            if (!z && function(M) {
              return !!(M.offsetWidth || M.offsetHeight || M.getClientRects().length);
            }(r)) {
              var cr = r.offsetWidth, fr = r.offsetHeight;
              (s && cr !== x || p && fr !== W) && n({
                width: cr,
                height: fr
              }), x = cr, W = fr;
            }
          }, B, V;
          return v.addEventListener("resize", I), v.ResizeObserver !== void 0 ? ((B = new v.ResizeObserver(I)).observe(r), V = Vn(I, 10 * m)) : v.MutationObserver !== void 0 ? ((B = new v.MutationObserver(I)).observe(r, {
            attributes: !0,
            childList: !0,
            subtree: !0,
            characterData: !1
          }), V = Vn(I, 10 * m)) : V = Vn(I, m), {
            cancel: function() {
              z = !0, B.disconnect(), window.removeEventListener("resize", I), V.cancel();
            }
          };
        }
        function Eo(r) {
          for (; r.parentNode; ) r = r.parentNode;
          return r.toString() === "[object ShadowRoot]";
        }
        var Tt = typeof document < "u" ? document.currentScript : null, Bo = dn(function() {
          if (Tt || (Tt = function() {
            try {
              var r = function() {
                try {
                  throw new Error("_");
                } catch (f) {
                  return f.stack || "";
                }
              }(), n = /.*at [^(]*\((.*):(.+):(.+)\)$/gi.exec(r), t = n && n[1];
              if (!t) return;
              for (var a = 0, u = [].slice.call(document.getElementsByTagName("script")).reverse(); a < u.length; a++) {
                var s = u[a];
                if (s.src && s.src === t) return s;
              }
            } catch {
            }
          }())) return Tt;
          throw new Error("Can not determine current script");
        }), ht = We();
        dn(function() {
          var r;
          try {
            r = Bo();
          } catch {
            return ht;
          }
          var n = r.getAttribute("data-uid");
          if (n && typeof n == "string" || (n = r.getAttribute("data-uid-auto")) && typeof n == "string") return n;
          if (r.src) {
            var t = function(a) {
              for (var u = "", s = 0; s < a.length; s++) {
                var f = a[s].charCodeAt(0) * s;
                a[s + 1] && (f += a[s + 1].charCodeAt(0) * (s - 1)), u += String.fromCharCode(97 + Math.abs(f) % 26);
              }
              return u;
            }(JSON.stringify({
              src: r.src,
              dataset: r.dataset
            }));
            n = "uid_" + t.slice(t.length - 30);
          } else n = We();
          return r.setAttribute("data-uid-auto", n), n;
        });
        function Po(r) {
          return typeof r == "string" && /^[0-9]+%$/.test(r);
        }
        function fe(r) {
          if (typeof r == "number") return r;
          var n = r.match(/^([0-9]+)(px|%)$/);
          if (!n) throw new Error("Could not match css value from " + r);
          return parseInt(n[1], 10);
        }
        function qo(r) {
          return fe(r) + "px";
        }
        function zt(r) {
          return typeof r == "number" ? qo(r) : Po(r) ? r : qo(r);
        }
        function Ae(r, n) {
          if (typeof r == "number") return r;
          if (Po(r)) return parseInt(n * fe(r) / 100, 10);
          if (typeof (t = r) == "string" && /^[0-9]+px$/.test(t)) return fe(r);
          var t;
          throw new Error("Can not normalize dimension: " + r);
        }
        function fn(r) {
          r === void 0 && (r = window);
          var n = "__post_robot_10_0_44__";
          return r !== window ? r[n] : r[n] = r[n] || {};
        }
        var bo = function() {
          return {};
        };
        function Br(r, n) {
          return r === void 0 && (r = "store"), n === void 0 && (n = bo), St(fn(), r, function() {
            var t = n();
            return {
              has: function(a) {
                return t.hasOwnProperty(a);
              },
              get: function(a, u) {
                return t.hasOwnProperty(a) ? t[a] : u;
              },
              set: function(a, u) {
                return t[a] = u, u;
              },
              del: function(a) {
                delete t[a];
              },
              getOrSet: function(a, u) {
                return St(t, a, u);
              },
              reset: function() {
                t = n();
              },
              keys: function() {
                return Object.keys(t);
              }
            };
          });
        }
        var Ho = function() {
        };
        function At() {
          var r = fn();
          return r.WINDOW_WILDCARD = r.WINDOW_WILDCARD || new Ho(), r.WINDOW_WILDCARD;
        }
        function le(r, n) {
          return r === void 0 && (r = "store"), n === void 0 && (n = bo), Br("windowStore").getOrSet(r, function() {
            var t = new Ct(), a = function(u) {
              return t.getOrSet(u, n);
            };
            return {
              has: function(u) {
                return a(u).hasOwnProperty(r);
              },
              get: function(u, s) {
                var f = a(u);
                return f.hasOwnProperty(r) ? f[r] : s;
              },
              set: function(u, s) {
                return a(u)[r] = s, s;
              },
              del: function(u) {
                delete a(u)[r];
              },
              getOrSet: function(u, s) {
                return St(a(u), r, s);
              }
            };
          });
        }
        function xo() {
          return Br("instance").getOrSet("instanceID", We);
        }
        function Mn(r, n) {
          var t = n.domain, a = le("helloPromises"), u = a.get(r);
          u && u.resolve({
            domain: t
          });
          var s = g.resolve({
            domain: t
          });
          return a.set(r, s), s;
        }
        function Fe(r, n) {
          return (0, n.send)(r, "postrobot_hello", {
            instanceID: xo()
          }, {
            domain: "*",
            timeout: -1
          }).then(function(t) {
            var a = t.origin, u = t.data.instanceID;
            return Mn(r, {
              domain: a
            }), {
              win: r,
              domain: a,
              instanceID: u
            };
          });
        }
        function Jo(r, n) {
          var t = n.send;
          return le("windowInstanceIDPromises").getOrSet(r, function() {
            return Fe(r, {
              send: t
            }).then(function(a) {
              return a.instanceID;
            });
          });
        }
        function $o(r, n, t) {
          n === void 0 && (n = 5e3), t === void 0 && (t = "Window");
          var a = function(u) {
            return le("helloPromises").getOrSet(u, function() {
              return new g();
            });
          }(r);
          return n !== -1 && (a = a.timeout(n, new Error(t + " did not load after " + n + "ms"))), a;
        }
        function Ue(r) {
          le("knownWindows").set(r, !0);
        }
        function Co(r) {
          return typeof r == "object" && r !== null && typeof r.__type__ == "string";
        }
        function Zo(r) {
          return r === void 0 ? "undefined" : r === null ? "null" : Array.isArray(r) ? "array" : typeof r == "function" ? "function" : typeof r == "object" ? r instanceof Error ? "error" : typeof r.then == "function" ? "promise" : {}.toString.call(r) === "[object RegExp]" ? "regex" : {}.toString.call(r) === "[object Date]" ? "date" : "object" : typeof r == "string" ? "string" : typeof r == "number" ? "number" : typeof r == "boolean" ? "boolean" : void 0;
        }
        function Dn(r, n) {
          return {
            __type__: r,
            __val__: n
          };
        }
        var Le, ln = ((Le = {}).function = function() {
        }, Le.error = function(r) {
          return Dn("error", {
            message: r.message,
            stack: r.stack,
            code: r.code,
            data: r.data
          });
        }, Le.promise = function() {
        }, Le.regex = function(r) {
          return Dn("regex", r.source);
        }, Le.date = function(r) {
          return Dn("date", r.toJSON());
        }, Le.array = function(r) {
          return r;
        }, Le.object = function(r) {
          return r;
        }, Le.string = function(r) {
          return r;
        }, Le.number = function(r) {
          return r;
        }, Le.boolean = function(r) {
          return r;
        }, Le.null = function(r) {
          return r;
        }, Le[void 0] = function(r) {
          return Dn("undefined", r);
        }, Le), Oo = {}, je, Go = ((je = {}).function = function() {
          throw new Error("Function serialization is not implemented; nothing to deserialize");
        }, je.error = function(r) {
          var n = r.stack, t = r.code, a = r.data, u = new Error(r.message);
          return u.code = t, a && (u.data = a), u.stack = n + `

` + u.stack, u;
        }, je.promise = function() {
          throw new Error("Promise serialization is not implemented; nothing to deserialize");
        }, je.regex = function(r) {
          return new RegExp(r);
        }, je.date = function(r) {
          return new Date(r);
        }, je.array = function(r) {
          return r;
        }, je.object = function(r) {
          return r;
        }, je.string = function(r) {
          return r;
        }, je.number = function(r) {
          return r;
        }, je.boolean = function(r) {
          return r;
        }, je.null = function(r) {
          return r;
        }, je[void 0] = function() {
        }, je), Yo = {};
        function Gt() {
          return !!ao(window).match(/MSIE|trident|edge\/12|edge\/13/i);
        }
        function Ft(r) {
          return !bt(window, r);
        }
        function Yt(r, n) {
          if (r) {
            if (ur() !== ze(r)) return !0;
          } else if (n && !xr(n)) return !0;
          return !1;
        }
        function Wo(r) {
          var n = r.win, t = r.domain;
          return !(!Gt() || t && !Yt(t, n) || n && !Ft(n));
        }
        function _t(r) {
          return "__postrobot_bridge___" + (r = r || ze(r)).replace(/[^a-zA-Z0-9]+/g, "_");
        }
        function So() {
          return !!(window.name && window.name === _t(ur()));
        }
        var _o = new g(function(r) {
          if (window.document && window.document.body) return r(window.document.body);
          var n = setInterval(function() {
            if (window.document && window.document.body)
              return clearInterval(n), r(window.document.body);
          }, 10);
        });
        function Vo(r) {
          le("remoteWindowPromises").getOrSet(r, function() {
            return new g();
          });
        }
        function Do(r) {
          var n = le("remoteWindowPromises").get(r);
          if (!n) throw new Error("Remote window promise not found");
          return n;
        }
        function Xo(r, n, t) {
          Do(r).resolve(function(a, u, s) {
            if (a !== r) throw new Error("Remote window does not match window");
            if (!Ve(u, n)) throw new Error("Remote domain " + u + " does not match domain " + n);
            t.fireAndForget(s);
          });
        }
        function Vt(r, n) {
          Do(r).reject(n).catch(ne);
        }
        function hn(r) {
          for (var n = r.win, t = r.name, a = r.domain, u = Br("popupWindowsByName"), s = le("popupWindowsByWin"), f = 0, p = u.keys(); f < p.length; f++) {
            var w = p[f], m = u.get(w);
            m && !Fr(m.win) || u.del(w);
          }
          if (Fr(n)) return {
            win: n,
            name: t,
            domain: a
          };
          var b = s.getOrSet(n, function() {
            return t ? u.getOrSet(t, function() {
              return {
                win: n,
                name: t
              };
            }) : {
              win: n
            };
          });
          if (b.win && b.win !== n) throw new Error("Different window already linked for window: " + (t || "undefined"));
          return t && (b.name = t, u.set(t, b)), a && (b.domain = a, Vo(n)), s.set(n, b), b;
        }
        function vn(r) {
          var n = r.on, t = r.send, a = r.receiveMessage;
          u = window.open, window.open = function(s, f, p, w) {
            var m = u.call(this, it(s), f, p, w);
            return m && (hn({
              win: m,
              name: f,
              domain: s ? ze(s) : null
            }), m);
          };
          var u;
          (function(s) {
            var f = s.on, p = s.send, w = s.receiveMessage, m = Br("popupWindowsByName");
            f("postrobot_open_tunnel", function(b) {
              var v = b.source, x = b.origin, W = b.data, z = Br("bridges").get(x);
              if (!z) throw new Error("Can not find bridge promise for domain " + x);
              return z.then(function(I) {
                if (v !== I) throw new Error("Message source does not matched registered bridge for domain " + x);
                if (!W.name) throw new Error("Register window expected to be passed window name");
                if (!W.sendMessage) throw new Error("Register window expected to be passed sendMessage method");
                if (!m.has(W.name)) throw new Error("Window with name " + W.name + " does not exist, or was not opened by this window");
                var B = function() {
                  return m.get(W.name);
                };
                if (!B().domain) throw new Error("We do not have a registered domain for window " + W.name);
                if (B().domain !== x) throw new Error("Message origin " + x + " does not matched registered window origin " + (B().domain || "unknown"));
                return Xo(B().win, x, W.sendMessage), {
                  sendMessage: function(V) {
                    if (window && !window.closed && B()) {
                      var cr = B().domain;
                      if (cr) try {
                        w({
                          data: V,
                          origin: cr,
                          source: B().win
                        }, {
                          on: f,
                          send: p
                        });
                      } catch (fr) {
                        g.reject(fr);
                      }
                    }
                  }
                };
              });
            });
          })({
            on: n,
            send: t,
            receiveMessage: a
          }), function(s) {
            var f = s.send;
            fn(window).openTunnelToParent = function(p) {
              var w = p.name, m = p.source, b = p.canary, v = p.sendMessage, x = Br("tunnelWindows"), W = ce(window);
              if (!W) throw new Error("No parent window found to open tunnel to");
              var z = function(I) {
                var B = I.name, V = I.source, cr = I.canary, fr = I.sendMessage;
                (function() {
                  for (var T = Br("tunnelWindows"), Y = 0, F = T.keys(); Y < F.length; Y++) {
                    var U = F[Y];
                    Fr(T[U].source) && T.del(U);
                  }
                })();
                var M = We();
                return Br("tunnelWindows").set(M, {
                  name: B,
                  source: V,
                  canary: cr,
                  sendMessage: fr
                }), M;
              }({
                name: w,
                source: m,
                canary: b,
                sendMessage: v
              });
              return f(W, "postrobot_open_tunnel", {
                name: w,
                sendMessage: function() {
                  var I = x.get(z);
                  if (I && I.source && !Fr(I.source)) {
                    try {
                      I.canary();
                    } catch {
                      return;
                    }
                    I.sendMessage.apply(this, arguments);
                  }
                }
              }, {
                domain: "*"
              });
            };
          }({
            send: t
          }), function(s) {
            var f = s.on, p = s.send, w = s.receiveMessage;
            g.try(function() {
              var m = Ye(window);
              if (m && Wo({
                win: m
              })) {
                return Vo(m), (b = m, le("remoteBridgeAwaiters").getOrSet(b, function() {
                  return g.try(function() {
                    var v = In(b, _t(ur()));
                    if (v) return xr(v) && fn(de(v)) ? v : new g(function(x) {
                      var W, z;
                      W = setInterval(function() {
                        if (v && xr(v) && fn(de(v)))
                          return clearInterval(W), clearTimeout(z), x(v);
                      }, 100), z = setTimeout(function() {
                        return clearInterval(W), x();
                      }, 2e3);
                    });
                  });
                })).then(function(v) {
                  return v ? window.name ? fn(de(v)).openTunnelToParent({
                    name: window.name,
                    source: window,
                    canary: function() {
                    },
                    sendMessage: function(x) {
                      try {
                      } catch {
                        return;
                      }
                      if (window && !window.closed) try {
                        w({
                          data: x,
                          origin: this.origin,
                          source: this.source
                        }, {
                          on: f,
                          send: p
                        });
                      } catch (W) {
                        g.reject(W);
                      }
                    }
                  }).then(function(x) {
                    var W = x.source, z = x.origin, I = x.data;
                    if (W !== m) throw new Error("Source does not match opener");
                    Xo(W, z, I.sendMessage);
                  }).catch(function(x) {
                    throw Vt(m, x), x;
                  }) : Vt(m, new Error("Can not register with opener: window does not have a name")) : Vt(m, new Error("Can not register with opener: no bridge found in opener"));
                });
                var b;
              }
            });
          }({
            on: n,
            send: t,
            receiveMessage: a
          });
        }
        function rt() {
          for (var r = Br("idToProxyWindow"), n = 0, t = r.keys(); n < t.length; n++) {
            var a = t[n];
            r.get(a).shouldClean() && r.del(a);
          }
        }
        function vt(r, n) {
          var t = n.send, a = n.id, u = a === void 0 ? We() : a, s = r.then(function(w) {
            if (xr(w)) return de(w).name;
          }), f = r.then(function(w) {
            if (Fr(w)) throw new Error("Window is closed, can not determine type");
            return Ye(w) ? qn.POPUP : qn.IFRAME;
          });
          s.catch(ne), f.catch(ne);
          var p = function() {
            return r.then(function(w) {
              if (!Fr(w)) return xr(w) ? de(w).name : s;
            });
          };
          return {
            id: u,
            getType: function() {
              return f;
            },
            getInstanceID: ut(function() {
              return r.then(function(w) {
                return Jo(w, {
                  send: t
                });
              });
            }),
            close: function() {
              return r.then(co);
            },
            getName: p,
            focus: function() {
              return r.then(function(w) {
                w.focus();
              });
            },
            isClosed: function() {
              return r.then(function(w) {
                return Fr(w);
              });
            },
            setLocation: function(w, m) {
              return m === void 0 && (m = {}), r.then(function(b) {
                var v = window.location.protocol + "//" + window.location.host, x = m.method, W = x === void 0 ? "get" : x, z = m.body;
                if (w.indexOf("/") === 0) w = "" + v + w;
                else if (!w.match(/^https?:\/\//) && w.indexOf(v) !== 0) throw new Error("Expected url to be http or https url, or absolute path, got " + JSON.stringify(w));
                if (W === "post") return p().then(function(I) {
                  if (!I) throw new Error("Can not post to window without target name");
                  (function(B) {
                    var V = B.url, cr = B.target, fr = B.body, M = B.method, T = M === void 0 ? "post" : M, Y = document.createElement("form");
                    if (Y.setAttribute("target", cr), Y.setAttribute("method", T), Y.setAttribute("action", V), Y.style.display = "none", fr) for (var F = 0, U = Object.keys(fr); F < U.length; F++) {
                      var lr, hr = U[F], K = document.createElement("input");
                      K.setAttribute("name", hr), K.setAttribute("value", (lr = fr[hr]) == null ? void 0 : lr.toString()), Y.appendChild(K);
                    }
                    lo().appendChild(Y), Y.submit(), lo().removeChild(Y);
                  })({
                    url: w,
                    target: I,
                    method: W,
                    body: z
                  });
                });
                if (W !== "get") throw new Error("Unsupported method: " + W);
                if (xr(b)) try {
                  if (b.location && typeof b.location.replace == "function") {
                    b.location.replace(w);
                    return;
                  }
                } catch {
                }
                b.location = w;
              });
            },
            setName: function(w) {
              return r.then(function(m) {
                hn({
                  win: m,
                  name: w
                });
                var b = xr(m), v = xt(m);
                if (!b) throw new Error("Can not set name for cross-domain window: " + w);
                de(m).name = w, v && v.setAttribute("name", w), s = g.resolve(w);
              });
            }
          };
        }
        var rn = function() {
          function r(t) {
            var a = t.send, u = t.win, s = t.serializedWindow;
            this.id = void 0, this.isProxyWindow = !0, this.serializedWindow = void 0, this.actualWindow = void 0, this.actualWindowPromise = void 0, this.send = void 0, this.name = void 0, this.actualWindowPromise = new g(), this.serializedWindow = s || vt(this.actualWindowPromise, {
              send: a
            }), Br("idToProxyWindow").set(this.getID(), this), u && this.setWindow(u, {
              send: a
            });
          }
          var n = r.prototype;
          return n.getID = function() {
            return this.serializedWindow.id;
          }, n.getType = function() {
            return this.serializedWindow.getType();
          }, n.isPopup = function() {
            return this.getType().then(function(t) {
              return t === qn.POPUP;
            });
          }, n.setLocation = function(t, a) {
            var u = this;
            return this.serializedWindow.setLocation(t, a).then(function() {
              return u;
            });
          }, n.getName = function() {
            return this.serializedWindow.getName();
          }, n.setName = function(t) {
            var a = this;
            return this.serializedWindow.setName(t).then(function() {
              return a;
            });
          }, n.close = function() {
            var t = this;
            return this.serializedWindow.close().then(function() {
              return t;
            });
          }, n.focus = function() {
            var t = this, a = this.isPopup(), u = this.getName(), s = g.hash({
              isPopup: a,
              name: u
            }).then(function(p) {
              var w = p.name;
              p.isPopup && w && window.open("", w);
            }), f = this.serializedWindow.focus();
            return g.all([s, f]).then(function() {
              return t;
            });
          }, n.isClosed = function() {
            return this.serializedWindow.isClosed();
          }, n.getWindow = function() {
            return this.actualWindow;
          }, n.setWindow = function(t, a) {
            var u = a.send;
            this.actualWindow = t, this.actualWindowPromise.resolve(this.actualWindow), this.serializedWindow = vt(this.actualWindowPromise, {
              send: u,
              id: this.getID()
            }), le("winToProxyWindow").set(t, this);
          }, n.awaitWindow = function() {
            return this.actualWindowPromise;
          }, n.matchWindow = function(t, a) {
            var u = this, s = a.send;
            return g.try(function() {
              return u.actualWindow ? t === u.actualWindow : g.hash({
                proxyInstanceID: u.getInstanceID(),
                knownWindowInstanceID: Jo(t, {
                  send: s
                })
              }).then(function(f) {
                var p = f.proxyInstanceID === f.knownWindowInstanceID;
                return p && u.setWindow(t, {
                  send: s
                }), p;
              });
            });
          }, n.unwrap = function() {
            return this.actualWindow || this;
          }, n.getInstanceID = function() {
            return this.serializedWindow.getInstanceID();
          }, n.shouldClean = function() {
            return !!(this.actualWindow && Fr(this.actualWindow));
          }, n.serialize = function() {
            return this.serializedWindow;
          }, r.unwrap = function(t) {
            return r.isProxyWindow(t) ? t.unwrap() : t;
          }, r.serialize = function(t, a) {
            var u = a.send;
            return rt(), r.toProxyWindow(t, {
              send: u
            }).serialize();
          }, r.deserialize = function(t, a) {
            var u = a.send;
            return rt(), Br("idToProxyWindow").get(t.id) || new r({
              serializedWindow: t,
              send: u
            });
          }, r.isProxyWindow = function(t) {
            return !!(t && !Yn(t) && t.isProxyWindow);
          }, r.toProxyWindow = function(t, a) {
            var u = a.send;
            if (rt(), r.isProxyWindow(t)) return t;
            var s = t;
            return le("winToProxyWindow").get(s) || new r({
              win: s,
              send: u
            });
          }, r;
        }();
        function wt(r, n, t, a, u) {
          var s = le("methodStore"), f = Br("proxyWindowMethods");
          rn.isProxyWindow(a) ? f.set(r, {
            val: n,
            name: t,
            domain: u,
            source: a
          }) : (f.del(r), s.getOrSet(a, function() {
            return {};
          })[r] = {
            domain: u,
            name: t,
            val: n,
            source: a
          });
        }
        function Ko(r, n) {
          var t = le("methodStore"), a = Br("proxyWindowMethods");
          return t.getOrSet(r, function() {
            return {};
          })[n] || a.get(n);
        }
        function Xt(r, n, t, a, u) {
          f = (s = {
            on: u.on,
            send: u.send
          }).on, p = s.send, Br("builtinListeners").getOrSet("functionCalls", function() {
            return f("postrobot_method", {
              domain: "*"
            }, function(b) {
              var v = b.source, x = b.origin, W = b.data, z = W.id, I = W.name, B = Ko(v, z);
              if (!B) throw new Error("Could not find method '" + I + "' with id: " + W.id + " in " + ur(window));
              var V = B.source, cr = B.domain, fr = B.val;
              return g.try(function() {
                if (!Ve(cr, x)) throw new Error("Method '" + W.name + "' domain " + JSON.stringify(st(B.domain) ? B.domain.source : B.domain) + " does not match origin " + x + " in " + ur(window));
                if (rn.isProxyWindow(V)) return V.matchWindow(v, {
                  send: p
                }).then(function(M) {
                  if (!M) throw new Error("Method call '" + W.name + "' failed - proxy window does not match source in " + ur(window));
                });
              }).then(function() {
                return fr.apply({
                  source: v,
                  origin: x
                }, W.args);
              }, function(M) {
                return g.try(function() {
                  if (fr.onError) return fr.onError(M);
                }).then(function() {
                  throw M.stack && (M.stack = "Remote call to " + I + "(" + function(T) {
                    return T === void 0 && (T = []), Xn(T).map(function(Y) {
                      return typeof Y == "string" ? "'" + Y + "'" : Y === void 0 ? "undefined" : Y === null ? "null" : typeof Y == "boolean" ? Y.toString() : Array.isArray(Y) ? "[ ... ]" : typeof Y == "object" ? "{ ... }" : typeof Y == "function" ? "() => { ... }" : "<" + typeof Y + ">";
                    }).join(", ");
                  }(W.args) + `) failed

` + M.stack), M;
                });
              }).then(function(M) {
                return {
                  result: M,
                  id: z,
                  name: I
                };
              });
            });
          });
          var s, f, p, w = t.__id__ || We();
          r = rn.unwrap(r);
          var m = t.__name__ || t.name || a;
          return typeof m == "string" && typeof m.indexOf == "function" && m.indexOf("anonymous::") === 0 && (m = m.replace("anonymous::", a + "::")), rn.isProxyWindow(r) ? (wt(w, t, m, r, n), r.awaitWindow().then(function(b) {
            wt(w, t, m, b, n);
          })) : wt(w, t, m, r, n), Dn("cross_domain_function", {
            id: w,
            name: m
          });
        }
        function No(r, n, t, a) {
          var u, s = a.on, f = a.send;
          return function(p, w) {
            w === void 0 && (w = Oo);
            var m = JSON.stringify(p, function(b) {
              var v = this[b];
              if (Co(this)) return v;
              var x = Zo(v);
              if (!x) return v;
              var W = w[x] || ln[x];
              return W ? W(v, b) : v;
            });
            return m === void 0 ? "undefined" : m;
          }(t, ((u = {}).promise = function(p, w) {
            return function(m, b, v, x, W) {
              return Dn("cross_domain_zalgo_promise", {
                then: Xt(m, b, function(z, I) {
                  return v.then(z, I);
                }, x, {
                  on: W.on,
                  send: W.send
                })
              });
            }(r, n, p, w, {
              on: s,
              send: f
            });
          }, u.function = function(p, w) {
            return Xt(r, n, p, w, {
              on: s,
              send: f
            });
          }, u.object = function(p) {
            return Yn(p) || rn.isProxyWindow(p) ? Dn("cross_domain_window", rn.serialize(p, {
              send: f
            })) : p;
          }, u));
        }
        function Ro(r, n, t, a) {
          var u, s = a.send;
          return function(f, p) {
            if (p === void 0 && (p = Yo), f !== "undefined") return JSON.parse(f, function(w, m) {
              if (Co(this)) return m;
              var b, v;
              if (Co(m) ? (b = m.__type__, v = m.__val__) : (b = Zo(m), v = m), !b) return v;
              var x = p[b] || Go[b];
              return x ? x(v, w) : v;
            });
          }(t, ((u = {}).cross_domain_zalgo_promise = function(f) {
            return function(p, w, m) {
              return new g(m.then);
            }(0, 0, f);
          }, u.cross_domain_function = function(f) {
            return function(p, w, m, b) {
              var v = m.id, x = m.name, W = b.send, z = function(B) {
                B === void 0 && (B = {});
                function V() {
                  var cr = arguments;
                  return rn.toProxyWindow(p, {
                    send: W
                  }).awaitWindow().then(function(fr) {
                    var M = Ko(fr, v);
                    if (M && M.val !== V) return M.val.apply({
                      source: window,
                      origin: ur()
                    }, cr);
                    var T = [].slice.call(cr);
                    return B.fireAndForget ? W(fr, "postrobot_method", {
                      id: v,
                      name: x,
                      args: T
                    }, {
                      domain: w,
                      fireAndForget: !0
                    }) : W(fr, "postrobot_method", {
                      id: v,
                      name: x,
                      args: T
                    }, {
                      domain: w,
                      fireAndForget: !1
                    }).then(function(Y) {
                      return Y.data.result;
                    });
                  }).catch(function(fr) {
                    throw fr;
                  });
                }
                return V.__name__ = x, V.__origin__ = w, V.__source__ = p, V.__id__ = v, V.origin = w, V;
              }, I = z();
              return I.fireAndForget = z({
                fireAndForget: !0
              }), I;
            }(r, n, f, {
              send: s
            });
          }, u.cross_domain_window = function(f) {
            return rn.deserialize(f, {
              send: s
            });
          }, u));
        }
        var qr = {};
        qr.postrobot_post_message = function(r, n, t) {
          t.indexOf("file:") === 0 && (t = "*"), r.postMessage(n, t);
        }, qr.postrobot_bridge = function(r, n, t) {
          if (!Gt() && !So()) throw new Error("Bridge not needed for browser");
          if (xr(r)) throw new Error("Post message through bridge disabled between same domain windows");
          if (bt(window, r) !== !1) throw new Error("Can only use bridge to communicate between two different windows, not between frames");
          (function(a, u, s) {
            var f = Lt(window, a), p = Lt(a, window);
            if (!f && !p) throw new Error("Can only send messages to and from parent and popup windows");
            Do(a).then(function(w) {
              return w(a, u, s);
            });
          })(r, t, n);
        }, qr.postrobot_global = function(r, n) {
          if (!ao(window).match(/MSIE|rv:11|trident|edge\/12|edge\/13/i)) throw new Error("Global messaging not needed for browser");
          if (!xr(r)) throw new Error("Post message through global disabled between different domain windows");
          if (bt(window, r) !== !1) throw new Error("Can only use global to communicate between two different windows, not between frames");
          var t = fn(r);
          if (!t) throw new Error("Can not find postRobot global on foreign window");
          t.receiveMessage({
            source: window,
            origin: ur(),
            data: n
          });
        };
        function pt(r, n, t, a) {
          var u = a.on, s = a.send;
          return g.try(function() {
            var f = le().getOrSet(r, function() {
              return {};
            });
            return f.buffer = f.buffer || [], f.buffer.push(t), f.flush = f.flush || g.flush().then(function() {
              if (Fr(r)) throw new Error("Window is closed");
              var p = No(r, n, ((w = {}).__post_robot_10_0_44__ = f.buffer || [], w), {
                on: u,
                send: s
              }), w;
              delete f.buffer;
              for (var m = Object.keys(qr), b = [], v = 0; v < m.length; v++) {
                var x = m[v];
                try {
                  qr[x](r, p, n);
                } catch (W) {
                  b.push(W);
                }
              }
              if (b.length === m.length) throw new Error(`All post-robot messaging strategies failed:

` + b.map(function(W, z) {
                return z + ". " + ct(W);
              }).join(`

`));
            }), f.flush.then(function() {
              delete f.flush;
            });
          }).then(ne);
        }
        function Be(r) {
          return Br("responseListeners").get(r);
        }
        function te(r) {
          Br("responseListeners").del(r);
        }
        function Io(r) {
          return Br("erroredResponseListeners").has(r);
        }
        function Kt(r) {
          var n = r.name, t = r.win, a = r.domain, u = le("requestListeners");
          if (t === "*" && (t = null), a === "*" && (a = null), !n) throw new Error("Name required to get request listener");
          for (var s = 0, f = [t, At()]; s < f.length; s++) {
            var p = f[s];
            if (p) {
              var w = u.get(p);
              if (w) {
                var m = w[n];
                if (m) {
                  if (a && typeof a == "string") {
                    if (m[a]) return m[a];
                    if (m.__domain_regex__) for (var b = 0, v = m.__domain_regex__; b < v.length; b++) {
                      var x = v[b], W = x.listener;
                      if (Ve(x.regex, a)) return W;
                    }
                  }
                  if (m["*"]) return m["*"];
                }
              }
            }
          }
        }
        function ni(r, n, t, a) {
          var u = a.on, s = a.send, f = Kt({
            name: t.name,
            win: r,
            domain: n
          }), p = t.name === "postrobot_method" && t.data && typeof t.data.name == "string" ? t.data.name + "()" : t.name;
          function w(m, b, v) {
            return g.flush().then(function() {
              if (!t.fireAndForget && !Fr(r)) try {
                return pt(r, n, {
                  id: We(),
                  origin: ur(window),
                  type: "postrobot_message_response",
                  hash: t.hash,
                  name: t.name,
                  ack: m,
                  data: b,
                  error: v
                }, {
                  on: u,
                  send: s
                });
              } catch (x) {
                throw new Error("Send response message failed for " + p + " in " + ur() + `

` + ct(x));
              }
            });
          }
          return g.all([g.flush().then(function() {
            if (!t.fireAndForget && !Fr(r)) try {
              return pt(r, n, {
                id: We(),
                origin: ur(window),
                type: "postrobot_message_ack",
                hash: t.hash,
                name: t.name
              }, {
                on: u,
                send: s
              });
            } catch (m) {
              throw new Error("Send ack message failed for " + p + " in " + ur() + `

` + ct(m));
            }
          }), g.try(function() {
            if (!f) throw new Error("No handler found for post message: " + t.name + " from " + n + " in " + window.location.protocol + "//" + window.location.host + window.location.pathname);
            if (!Ve(f.domain, n)) throw new Error("Request origin " + n + " does not match domain " + f.domain.toString());
            return f.handler({
              source: r,
              origin: n,
              data: t.data
            });
          }).then(function(m) {
            return w("success", m);
          }, function(m) {
            return w("error", null, m);
          })]).then(ne).catch(function(m) {
            if (f && f.handleError) return f.handleError(m);
            throw m;
          });
        }
        function Qo(r, n, t) {
          if (!Io(t.hash)) {
            var a = Be(t.hash);
            if (!a) throw new Error("No handler found for post message ack for message: " + t.name + " from " + n + " in " + window.location.protocol + "//" + window.location.host + window.location.pathname);
            try {
              if (!Ve(a.domain, n)) throw new Error("Ack origin " + n + " does not match domain " + a.domain.toString());
              if (r !== a.win) throw new Error("Ack source does not match registered window");
            } catch (u) {
              a.promise.reject(u);
            }
            a.ack = !0;
          }
        }
        function ti(r, n, t) {
          if (!Io(t.hash)) {
            var a = Be(t.hash);
            if (!a) throw new Error("No handler found for post message response for message: " + t.name + " from " + n + " in " + window.location.protocol + "//" + window.location.host + window.location.pathname);
            if (!Ve(a.domain, n)) throw new Error("Response origin " + n + " does not match domain " + (u = a.domain, Array.isArray(u) ? "(" + u.join(" | ") + ")" : Wn(u) ? "RegExp(" + u.toString() + ")" : u.toString()));
            var u;
            if (r !== a.win) throw new Error("Response source does not match registered window");
            te(t.hash), t.ack === "error" ? a.promise.reject(t.error) : t.ack === "success" && a.promise.resolve({
              source: r,
              origin: n,
              data: t.data
            });
          }
        }
        function Qt(r, n) {
          var t = n.on, a = n.send, u = Br("receivedMessages");
          try {
            if (!window || window.closed || !r.source) return;
          } catch {
            return;
          }
          var s = r.source, f = r.origin, p = function(b, v, x, W) {
            var z = W.on, I = W.send, B;
            try {
              B = Ro(v, x, b, {
                on: z,
                send: I
              });
            } catch {
              return;
            }
            if (B && typeof B == "object" && B !== null) {
              var V = B.__post_robot_10_0_44__;
              if (Array.isArray(V)) return V;
            }
          }(r.data, s, f, {
            on: t,
            send: a
          });
          if (p) {
            Ue(s);
            for (var w = 0; w < p.length; w++) {
              var m = p[w];
              if (u.has(m.id) || (u.set(m.id, !0), Fr(s) && !m.fireAndForget)) return;
              m.origin.indexOf("file:") === 0 && (f = "file://");
              try {
                m.type === "postrobot_message_request" ? ni(s, f, m, {
                  on: t,
                  send: a
                }) : m.type === "postrobot_message_response" ? ti(s, f, m) : m.type === "postrobot_message_ack" && Qo(s, f, m);
              } catch (b) {
                setTimeout(function() {
                  throw b;
                }, 0);
              }
            }
          }
        }
        function Nn(r, n, t) {
          if (!r) throw new Error("Expected name");
          if (typeof (n = n || {}) == "function" && (t = n, n = {}), !t) throw new Error("Expected handler");
          (n = n || {}).name = r, n.handler = t || n.handler;
          var a = n.window, u = n.domain, s = function f(p, w) {
            var m = p.name, b = p.win, v = p.domain, x = le("requestListeners");
            if (!m || typeof m != "string") throw new Error("Name required to add request listener");
            if (Array.isArray(b)) {
              for (var W = [], z = 0, I = b; z < I.length; z++) W.push(f({
                name: m,
                domain: v,
                win: I[z]
              }, w));
              return {
                cancel: function() {
                  for (var lr = 0; lr < W.length; lr++) W[lr].cancel();
                }
              };
            }
            if (Array.isArray(v)) {
              for (var B = [], V = 0, cr = v; V < cr.length; V++) B.push(f({
                name: m,
                win: b,
                domain: cr[V]
              }, w));
              return {
                cancel: function() {
                  for (var lr = 0; lr < B.length; lr++) B[lr].cancel();
                }
              };
            }
            var fr = Kt({
              name: m,
              win: b,
              domain: v
            });
            if (b && b !== "*" || (b = At()), v = v || "*", fr) throw b && v ? new Error("Request listener already exists for " + m + " on domain " + v.toString() + " for " + (b === At() ? "wildcard" : "specified") + " window") : b ? new Error("Request listener already exists for " + m + " for " + (b === At() ? "wildcard" : "specified") + " window") : v ? new Error("Request listener already exists for " + m + " on domain " + v.toString()) : new Error("Request listener already exists for " + m);
            var M = x.getOrSet(b, function() {
              return {};
            }), T = St(M, m, function() {
              return {};
            }), Y = v.toString(), F, U;
            return st(v) ? (F = St(T, "__domain_regex__", function() {
              return [];
            })).push(U = {
              regex: v,
              listener: w
            }) : T[Y] = w, {
              cancel: function() {
                delete T[Y], U && (F.splice(F.indexOf(U, 1)), F.length || delete T.__domain_regex__), Object.keys(T).length || delete M[m], b && !Object.keys(M).length && x.del(b);
              }
            };
          }({
            name: r,
            win: a,
            domain: u
          }, {
            handler: n.handler,
            handleError: n.errorHandler || function(f) {
              throw f;
            },
            window: a,
            domain: u || "*",
            name: r
          });
          return {
            cancel: function() {
              s.cancel();
            }
          };
        }
        var en = function r(n, t, a, u) {
          var s = (u = u || {}).domain || "*", f = u.timeout || -1, p = u.timeout || 5e3, w = u.fireAndForget || !1;
          return g.try(function() {
            if (function(m, b, v) {
              if (!m) throw new Error("Expected name");
              if (v && typeof v != "string" && !Array.isArray(v) && !st(v)) throw new TypeError("Can not send " + m + ". Expected domain " + JSON.stringify(v) + " to be a string, array, or regex");
              if (Fr(b)) throw new Error("Can not send " + m + ". Target window is closed");
            }(t, n, s), function(m, b) {
              var v = Gn(b);
              if (v) return v === m;
              if (b === m || un(b) === b) return !1;
              for (var x = 0, W = $n(m); x < W.length; x++) if (W[x] === b) return !0;
              return !1;
            }(window, n)) return $o(n, p);
          }).then(function(m) {
            return function(b, v, x, W) {
              var z = W.send;
              return g.try(function() {
                return typeof v == "string" ? v : g.try(function() {
                  return x || Fe(b, {
                    send: z
                  }).then(function(I) {
                    return I.domain;
                  });
                }).then(function(I) {
                  if (!Ve(v, v)) throw new Error("Domain " + An(v) + " does not match " + An(v));
                  return I;
                });
              });
            }(n, s, (m === void 0 ? {} : m).domain, {
              send: r
            });
          }).then(function(m) {
            var b = m, v = t === "postrobot_method" && a && typeof a.name == "string" ? a.name + "()" : t, x = new g(), W = t + "_" + We();
            if (!w) {
              var z = {
                name: t,
                win: n,
                domain: b,
                promise: x
              };
              (function(T, Y) {
                Br("responseListeners").set(T, Y);
              })(W, z);
              var I = le("requestPromises").getOrSet(n, function() {
                return [];
              });
              I.push(x), x.catch(function() {
                (function(T) {
                  Br("erroredResponseListeners").set(T, !0);
                })(W), te(W);
              });
              var B = function(T) {
                return le("knownWindows").get(T, !1);
              }(n) ? 1e4 : 2e3, V = f, cr = B, fr = V, M = Vn(function() {
                return Fr(n) ? x.reject(new Error("Window closed for " + t + " before " + (z.ack ? "response" : "ack"))) : z.cancelled ? x.reject(new Error("Response listener was cancelled for " + t)) : (cr = Math.max(cr - 500, 0), fr !== -1 && (fr = Math.max(fr - 500, 0)), z.ack || cr !== 0 ? fr === 0 ? x.reject(new Error("No response for postMessage " + v + " in " + ur() + " in " + V + "ms")) : void 0 : x.reject(new Error("No ack for postMessage " + v + " in " + ur() + " in " + B + "ms")));
              }, 500);
              x.finally(function() {
                M.cancel(), I.splice(I.indexOf(x, 1));
              }).catch(ne);
            }
            return pt(n, b, {
              id: We(),
              origin: ur(window),
              type: "postrobot_message_request",
              hash: W,
              name: t,
              data: a,
              fireAndForget: w
            }, {
              on: Nn,
              send: r
            }).then(function() {
              return w ? x.resolve() : x;
            }, function(T) {
              throw new Error("Send request message failed for " + v + " in " + ur() + `

` + ct(T));
            });
          });
        };
        function wn(r) {
          return rn.toProxyWindow(r, {
            send: en
          });
        }
        function mt(r) {
          for (var n = 0, t = le("requestPromises").get(r, []); n < t.length; n++) t[n].reject(new Error("Window " + (Fr(r) ? "closed" : "cleaned up") + " before response")).catch(ne);
        }
        var En;
        En = {
          setupBridge: vn,
          openBridge: function(r, n) {
            var t = Br("bridges"), a = Br("bridgeFrames");
            return n = n || ze(r), t.getOrSet(n, function() {
              return g.try(function() {
                if (ur() === n) throw new Error("Can not open bridge on the same domain as current domain: " + n);
                var u = _t(n);
                if (In(window, u)) throw new Error("Frame with name " + u + " already exists on page");
                var s = function(f, p) {
                  var w = document.createElement("iframe");
                  return w.setAttribute("name", f), w.setAttribute("id", f), w.setAttribute("style", "display: none; margin: 0; padding: 0; border: 0px none; overflow: hidden;"), w.setAttribute("frameborder", "0"), w.setAttribute("border", "0"), w.setAttribute("scrolling", "no"), w.setAttribute("allowTransparency", "true"), w.setAttribute("tabindex", "-1"), w.setAttribute("hidden", "true"), w.setAttribute("title", ""), w.setAttribute("role", "presentation"), w.src = p, w;
                }(u, r);
                return a.set(n, s), _o.then(function(f) {
                  f.appendChild(s);
                  var p = s.contentWindow;
                  return new g(function(w, m) {
                    s.addEventListener("load", w), s.addEventListener("error", m);
                  }).then(function() {
                    return $o(p, 5e3, "Bridge " + r);
                  }).then(function() {
                    return p;
                  });
                });
              });
            });
          },
          linkWindow: hn,
          linkUrl: function(r, n) {
            hn({
              win: r,
              domain: ze(n)
            });
          },
          isBridge: So,
          needsBridge: Wo,
          needsBridgeForBrowser: Gt,
          hasBridge: function(r, n) {
            return Br("bridges").has(n || ze(r));
          },
          needsBridgeForWin: Ft,
          needsBridgeForDomain: Yt,
          destroyBridges: function() {
            for (var r = Br("bridges"), n = Br("bridgeFrames"), t = 0, a = n.keys(); t < a.length; t++) {
              var u = n.get(a[t]);
              u && u.parentNode && u.parentNode.removeChild(u);
            }
            n.reset(), r.reset();
          }
        };
        function gt(r) {
          if (!xr(r)) throw new Error("Can not get global for window on different domain");
          return r.__zoid_9_0_86__ || (r.__zoid_9_0_86__ = {}), r.__zoid_9_0_86__;
        }
        function To(r, n) {
          try {
            return n(gt(r));
          } catch {
          }
        }
        function kt(r) {
          return {
            get: function() {
              var n = this;
              return g.try(function() {
                if (n.source && n.source !== window) throw new Error("Can not call get on proxy object from a remote window");
                return r;
              });
            }
          };
        }
        function zo(r) {
          return Ot(JSON.stringify(r));
        }
        function Mt(r) {
          var n = gt(r);
          return n.references = n.references || {}, n.references;
        }
        function ko(r) {
          var n = r.data, t = r.metaData, a = r.sender, u = r.receiver, s = r.passByReference, f = s !== void 0 && s, p = r.basic, w = p !== void 0 && p, m = wn(u.win), b = w ? JSON.stringify(n) : No(m, u.domain, n, {
            on: Nn,
            send: en
          }), v = f ? function(x) {
            var W = We();
            return Mt(window)[W] = x, {
              type: "uid",
              uid: W
            };
          }(b) : {
            type: "raw",
            val: b
          };
          return {
            serializedData: zo({
              sender: {
                domain: a.domain
              },
              metaData: t,
              reference: v
            }),
            cleanReference: function() {
              x = window, (W = v).type === "uid" && delete Mt(x)[W.uid];
              var x, W;
            }
          };
        }
        function ri(r) {
          var n = r.sender, t = r.basic, a = t !== void 0 && t, u = function(b) {
            return JSON.parse(function(v) {
              if (typeof atob == "function") return decodeURIComponent([].map.call(atob(v), function(x) {
                return "%" + ("00" + x.charCodeAt(0).toString(16)).slice(-2);
              }).join(""));
              if (typeof Buffer < "u") return Buffer.from(v, "base64").toString("utf8");
              throw new Error("Can not find window.atob or Buffer");
            }(b));
          }(r.data), s = u.reference, f = u.metaData, p;
          p = typeof n.win == "function" ? n.win({
            metaData: f
          }) : n.win;
          var w;
          w = typeof n.domain == "function" ? n.domain({
            metaData: f
          }) : typeof n.domain == "string" ? n.domain : u.sender.domain;
          var m = function(b, v) {
            if (v.type === "raw") return v.val;
            if (v.type === "uid") return Mt(b)[v.uid];
            throw new Error("Unsupported ref type: " + v.type);
          }(p, s);
          return {
            data: a ? JSON.parse(m) : function(b, v, x) {
              return Ro(b, v, x, {
                on: Nn,
                send: en
              });
            }(p, w, m),
            metaData: f,
            sender: {
              win: p,
              domain: w
            },
            reference: s
          };
        }
        var Jr = {
          STRING: "string",
          OBJECT: "object",
          FUNCTION: "function",
          BOOLEAN: "boolean",
          NUMBER: "number",
          ARRAY: "array"
        }, Ut = {
          JSON: "json",
          DOTIFY: "dotify",
          BASE64: "base64"
        }, Re = qn, e = {
          RENDER: "zoid-render",
          RENDERED: "zoid-rendered",
          DISPLAY: "zoid-display",
          ERROR: "zoid-error",
          CLOSE: "zoid-close",
          DESTROY: "zoid-destroy",
          PROPS: "zoid-props",
          RESIZE: "zoid-resize",
          FOCUS: "zoid-focus"
        };
        function i(r) {
          return "__zoid__" + r.name + "__" + r.serializedPayload + "__";
        }
        function o(r) {
          if (!r) throw new Error("No window name");
          var n = r.split("__"), t = n[1], a = n[2], u = n[3];
          if (t !== "zoid") throw new Error("Window not rendered by zoid - got " + t);
          if (!a) throw new Error("Expected component name");
          if (!u) throw new Error("Expected serialized payload ref");
          return {
            name: a,
            serializedInitialPayload: u
          };
        }
        var c = dn(function(r) {
          var n = ri({
            data: o(r).serializedInitialPayload,
            sender: {
              win: function(t) {
                return function(a) {
                  if (a.type === "opener") return Kn("opener", Ye(window));
                  if (a.type === "parent" && typeof a.distance == "number") return Kn("parent", function(f, p) {
                    return p === void 0 && (p = 1), function(w, m) {
                      m === void 0 && (m = 1);
                      for (var b = w, v = 0; v < m; v++) {
                        if (!b) return;
                        b = ce(b);
                      }
                      return b;
                    }(f, _e(f) - p);
                  }(window, a.distance));
                  if (a.type === "global" && a.uid && typeof a.uid == "string") {
                    var u = function() {
                      var f = a.uid, p = Gn(window);
                      if (!p) throw new Error("Can not find ancestor window");
                      for (var w = 0, m = cn(p); w < m.length; w++) {
                        var b = m[w];
                        if (xr(b)) {
                          var v = To(b, function(x) {
                            return x.windows && x.windows[f];
                          });
                          if (v) return {
                            v
                          };
                        }
                      }
                    }();
                    if (typeof u == "object") return u.v;
                  } else if (a.type === "name") {
                    var s = a.name;
                    return Kn("namedWindow", function(f, p) {
                      return In(f, p) || function w(m, b) {
                        var v = In(m, b);
                        if (v) return v;
                        for (var x = 0, W = $n(m); x < W.length; x++) {
                          var z = w(W[x], b);
                          if (z) return z;
                        }
                      }(un(f) || f, p);
                    }(Kn("ancestor", Gn(window)), s));
                  }
                  throw new Error("Unable to find " + a.type + " parent component window");
                }(t.metaData.windowRef);
              }
            }
          });
          return {
            parent: n.sender,
            payload: n.data,
            reference: n.reference
          };
        });
        function d() {
          return c(window.name);
        }
        function l(r, n) {
          if (n === void 0 && (n = window), r === ce(n)) return {
            type: "parent",
            distance: _e(r)
          };
          if (r === Ye(n)) return {
            type: "opener"
          };
          if (xr(r) && (a = r, a !== un(a))) {
            var t = de(r).name;
            if (t) return {
              type: "name",
              name: t
            };
          }
          var a;
        }
        function h(r, n, t, a, u) {
          if (!r.hasOwnProperty(t)) return a;
          var s = r[t];
          return typeof s.childDecorate == "function" ? s.childDecorate({
            value: a,
            uid: u.uid,
            tag: u.tag,
            close: u.close,
            focus: u.focus,
            onError: u.onError,
            onProps: u.onProps,
            resize: u.resize,
            getParent: u.getParent,
            getParentDomain: u.getParentDomain,
            show: u.show,
            hide: u.hide,
            export: u.export,
            getSiblings: u.getSiblings
          }) : a;
        }
        function C() {
          return g.try(function() {
            window.focus();
          });
        }
        function P() {
          return g.try(function() {
            window.close();
          });
        }
        var E = function() {
          return ne;
        }, O = function(r) {
          return _n(r.value);
        };
        function y(r, n, t) {
          for (var a = 0, u = Object.keys(zr({}, r, n)); a < u.length; a++) {
            var s = u[a];
            t(s, n[s], r[s]);
          }
        }
        function S(r, n, t) {
          var a = {};
          return g.all(function(u, s, f) {
            var p = [];
            return y(u, s, function(w, m, b) {
              var v = function(x, W, z) {
                return g.resolve().then(function() {
                  var I, B;
                  if (z != null && W) {
                    var V = (I = {}, I.get = W.queryParam, I.post = W.bodyParam, I)[t], cr = (B = {}, B.get = W.queryValue, B.post = W.bodyValue, B)[t];
                    if (V) return g.hash({
                      finalParam: g.try(function() {
                        return typeof V == "function" ? V({
                          value: z
                        }) : typeof V == "string" ? V : x;
                      }),
                      finalValue: g.try(function() {
                        return typeof cr == "function" && sn(z) ? cr({
                          value: z
                        }) : z;
                      })
                    }).then(function(fr) {
                      var M = fr.finalParam, T = fr.finalValue, Y;
                      if (typeof T == "boolean") Y = T.toString();
                      else if (typeof T == "string") Y = T.toString();
                      else if (typeof T == "object" && T !== null) {
                        if (W.serialization === Ut.JSON) Y = JSON.stringify(T);
                        else if (W.serialization === Ut.BASE64) Y = Ot(JSON.stringify(T));
                        else if (W.serialization === Ut.DOTIFY || !W.serialization) {
                          Y = function hr(K, L, Dr) {
                            L === void 0 && (L = ""), Dr === void 0 && (Dr = {}), L = L && L + ".";
                            for (var pr in K) K.hasOwnProperty(pr) && K[pr] != null && typeof K[pr] != "function" && (K[pr] && Array.isArray(K[pr]) && K[pr].length && K[pr].every(function(re) {
                              return typeof re != "object";
                            }) ? Dr["" + L + pr + "[]"] = K[pr].join(",") : K[pr] && typeof K[pr] == "object" ? Dr = hr(K[pr], "" + L + pr, Dr) : Dr["" + L + pr] = K[pr].toString());
                            return Dr;
                          }(T, x);
                          for (var F = 0, U = Object.keys(Y); F < U.length; F++) {
                            var lr = U[F];
                            a[lr] = Y[lr];
                          }
                          return;
                        }
                      } else typeof T == "number" && (Y = T.toString());
                      a[M] = Y;
                    });
                  }
                });
              }(w, m, b);
              p.push(v);
            }), p;
          }(n, r)).then(function() {
            return a;
          });
        }
        function D(r) {
          var n = r.uid, t = r.options, a = r.overrides, u = a === void 0 ? {} : a, s = r.parentWin, f = s === void 0 ? window : s, p = t.propsDef, w = t.containerTemplate, m = t.prerenderTemplate, b = t.tag, v = t.name, x = t.attributes, W = t.dimensions, z = t.autoResize, I = t.url, B = t.domain, V = t.exports, cr = new g(), fr = [], M = Dt(), T = {}, Y = {}, F = {
            visible: !0
          }, U = u.event ? u.event : (lr = {}, hr = {}, K = {
            on: function(R, $) {
              var ar = hr[R] = hr[R] || [];
              ar.push($);
              var rr = !1;
              return {
                cancel: function() {
                  rr || (rr = !0, ar.splice(ar.indexOf($), 1));
                }
              };
            },
            once: function(R, $) {
              var ar = K.on(R, function() {
                ar.cancel(), $();
              });
              return ar;
            },
            trigger: function(R) {
              for (var $ = arguments.length, ar = new Array($ > 1 ? $ - 1 : 0), rr = 1; rr < $; rr++) ar[rr - 1] = arguments[rr];
              var Or = hr[R], Rr = [];
              if (Or)
                for (var kr = function(X) {
                  var vr = Or[X];
                  Rr.push(g.try(function() {
                    return vr.apply(void 0, ar);
                  }));
                }, _r = 0; _r < Or.length; _r++) kr(_r);
              return g.all(Rr).then(ne);
            },
            triggerOnce: function(R) {
              if (lr[R]) return g.resolve();
              lr[R] = !0;
              for (var $ = arguments.length, ar = new Array($ > 1 ? $ - 1 : 0), rr = 1; rr < $; rr++) ar[rr - 1] = arguments[rr];
              return K.trigger.apply(K, [R].concat(ar));
            },
            reset: function() {
              hr = {};
            }
          }), lr, hr, K, L = u.props ? u.props : {}, Dr, pr, re, ee, he, oe = u.onError, Ie = u.getProxyContainer, pn = u.show, qe = u.hide, me = u.close, mn = u.renderContainer, Xe = u.getProxyWindow, nn = u.setProxyWin, tn = u.openFrame, et = u.openPrerenderFrame, Nr = u.prerender, He = u.open, Mr = u.openPrerender, Vr = u.watchForUnload, $r = u.getInternalState, ie = u.setInternalState, ge = function() {
            return typeof W == "function" ? W({
              props: L
            }) : W;
          }, ye = function() {
            return g.try(function() {
              return u.resolveInitPromise ? u.resolveInitPromise() : cr.resolve();
            });
          }, Xr = function(R) {
            return g.try(function() {
              return u.rejectInitPromise ? u.rejectInitPromise(R) : cr.reject(R);
            });
          }, Ce = function(R) {
            for (var $ = {}, ar = 0, rr = Object.keys(L); ar < rr.length; ar++) {
              var Or = rr[ar], Rr = p[Or];
              Rr && Rr.sendToChild === !1 || Rr && Rr.sameDomain && !Ve(R, ur(window)) || ($[Or] = L[Or]);
            }
            return g.hash($);
          }, Je = function() {
            return g.try(function() {
              return $r ? $r() : F;
            });
          }, Se = function(R) {
            return g.try(function() {
              return ie ? ie(R) : F = zr({}, F, R);
            });
          }, on = function() {
            return Xe ? Xe() : g.try(function() {
              var R = L.window;
              if (R) {
                var $ = wn(R);
                return M.register(function() {
                  return R.close();
                }), $;
              }
              return new rn({
                send: en
              });
            });
          }, $e = function(R) {
            return nn ? nn(R) : g.try(function() {
              Dr = R;
            });
          }, Pn = function() {
            return pn ? pn() : g.hash({
              setState: Se({
                visible: !0
              }),
              showElement: pr ? pr.get().then(Zt) : null
            }).then(ne);
          }, Un = function() {
            return qe ? qe() : g.hash({
              setState: Se({
                visible: !1
              }),
              showElement: pr ? pr.get().then(yo) : null
            }).then(ne);
          }, nt = function() {
            return typeof I == "function" ? I({
              props: L
            }) : I;
          }, gn = function() {
            return typeof x == "function" ? x({
              props: L
            }) : x;
          }, N = function() {
            return ze(nt());
          }, j = function(R, $) {
            var ar = $.windowName;
            return tn ? tn(R, {
              windowName: ar
            }) : g.try(function() {
              if (R === Re.IFRAME) return kt(go({
                attributes: zr({
                  name: ar,
                  title: v
                }, gn().iframe)
              }));
            });
          }, tr = function(R) {
            return et ? et(R) : g.try(function() {
              if (R === Re.IFRAME) return kt(go({
                attributes: zr({
                  name: "__zoid_prerender_frame__" + v + "_" + We() + "__",
                  title: "prerender__" + v
                }, gn().iframe)
              }));
            });
          }, Q = function(R, $, ar) {
            return Mr ? Mr(R, $, ar) : g.try(function() {
              if (R === Re.IFRAME) {
                if (!ar) throw new Error("Expected proxy frame to be passed");
                return ar.get().then(function(rr) {
                  return M.register(function() {
                    return Qn(rr);
                  }), mo(rr).then(function(Or) {
                    return de(Or);
                  }).then(function(Or) {
                    return wn(Or);
                  });
                });
              }
              if (R === Re.POPUP) return $;
              throw new Error("No render context available for " + R);
            });
          }, Cr = function() {
            return g.try(function() {
              if (Dr) return g.all([U.trigger(e.FOCUS), Dr.focus()]).then(ne);
            });
          }, Ar = function() {
            var R = gt(window);
            return R.windows = R.windows || {}, R.windows[n] = window, M.register(function() {
              delete R.windows[n];
            }), n;
          }, Kr = function(R, $, ar, rr) {
            if ($ === ur(window)) return {
              type: "global",
              uid: Ar()
            };
            if (R !== window) throw new Error("Can not construct cross-domain window reference for different target window");
            if (L.window) {
              var Or = rr.getWindow();
              if (!Or) throw new Error("Can not construct cross-domain window reference for lazy window prop");
              if (Gn(Or) !== window) throw new Error("Can not construct cross-domain window reference for window prop with different ancestor");
            }
            if (ar === Re.POPUP) return {
              type: "opener"
            };
            if (ar === Re.IFRAME) return {
              type: "parent",
              distance: _e(window)
            };
            throw new Error("Can not construct window reference for child");
          }, Yr = function(R, $) {
            return g.try(function() {
              ee = R, re = $, ye(), M.register(function() {
                return $.close.fireAndForget().catch(ne);
              });
            });
          }, ae = function(R) {
            var $ = R.width, ar = R.height;
            return g.try(function() {
              U.trigger(e.RESIZE, {
                width: $,
                height: ar
              });
            });
          }, Hr = function(R) {
            return g.try(function() {
              return U.trigger(e.DESTROY);
            }).catch(ne).then(function() {
              return M.all(R);
            }).then(function() {
              cr.asyncReject(R || new Error("Component destroyed"));
            });
          }, Qr = dn(function(R) {
            return g.try(function() {
              return me ? Fr(me.__source__) ? void 0 : me() : g.try(function() {
                return U.trigger(e.CLOSE);
              }).then(function() {
                return Hr(R || new Error("Component closed"));
              });
            });
          }), Ee = function(R, $) {
            var ar = $.proxyWin, rr = $.proxyFrame, Or = $.windowName;
            return He ? He(R, {
              proxyWin: ar,
              proxyFrame: rr,
              windowName: Or
            }) : g.try(function() {
              if (R === Re.IFRAME) {
                if (!rr) throw new Error("Expected proxy frame to be passed");
                return rr.get().then(function(Ir) {
                  return mo(Ir).then(function(Wr) {
                    return M.register(function() {
                      return Qn(Ir);
                    }), M.register(function() {
                      return mt(Wr);
                    }), Wr;
                  });
                });
              }
              if (R === Re.POPUP) {
                var Rr = ge(), kr = Rr.width, _r = kr === void 0 ? "300px" : kr, X = Rr.height, vr = X === void 0 ? "150px" : X;
                _r = Ae(_r, window.outerWidth), vr = Ae(vr, window.outerWidth);
                var br = function(Ir, Wr) {
                  var Tr = (Wr = Wr || {}).closeOnUnload, Lr = Tr === void 0 ? 1 : Tr, jr = Wr.name, k = jr === void 0 ? "" : jr, q = Wr.width, A = Wr.height, or = 0, ue = 0;
                  q && (window.outerWidth ? ue = Math.round((window.outerWidth - q) / 2) + window.screenX : window.screen.width && (ue = Math.round((window.screen.width - q) / 2))), A && (window.outerHeight ? or = Math.round((window.outerHeight - A) / 2) + window.screenY : window.screen.height && (or = Math.round((window.screen.height - A) / 2))), delete Wr.closeOnUnload, delete Wr.name, q && A && (Wr = zr({
                    top: or,
                    left: ue,
                    width: q,
                    height: A,
                    status: 1,
                    toolbar: 0,
                    menubar: 0,
                    resizable: 1,
                    scrollbars: 1
                  }, Wr));
                  var ot = Object.keys(Wr).map(function(bn) {
                    if (Wr[bn] != null) return bn + "=" + An(Wr[bn]);
                  }).filter(Boolean).join(","), ke;
                  try {
                    ke = window.open("", k, ot);
                  } catch (bn) {
                    throw new Rt("Can not open popup window - " + (bn.stack || bn.message));
                  }
                  if (Fr(ke))
                    throw new Rt("Can not open popup window - blocked");
                  return Lr && window.addEventListener("unload", function() {
                    return ke.close();
                  }), ke;
                }(0, zr({
                  name: Or,
                  width: _r,
                  height: vr
                }, gn().popup));
                return M.register(function() {
                  return co(br);
                }), M.register(function() {
                  return mt(br);
                }), br;
              }
              throw new Error("No render context available for " + R);
            }).then(function(Rr) {
              return ar.setWindow(Rr, {
                send: en
              }), ar.setName(Or).then(function() {
                return ar;
              });
            });
          }, Ze = function() {
            return g.try(function() {
              var R = lt(window, "unload", _n(function() {
                Hr(new Error("Window navigated away"));
              })), $ = uo(f, Hr, 3e3);
              if (M.register($.cancel), M.register(R.cancel), Vr) return Vr();
            });
          }, ve = function(R) {
            var $ = !1;
            return R.isClosed().then(function(ar) {
              return ar ? ($ = !0, Qr(new Error("Detected component window close"))) : g.delay(200).then(function() {
                return R.isClosed();
              }).then(function(rr) {
                if (rr)
                  return $ = !0, Qr(new Error("Detected component window close"));
              });
            }).then(function() {
              return $;
            });
          }, Zr = function(R) {
            return oe ? oe(R) : g.try(function() {
              if (fr.indexOf(R) === -1)
                return fr.push(R), cr.asyncReject(R), U.trigger(e.ERROR, R);
            });
          }, Ke = new g(), Pe = function(R) {
            return g.try(function() {
              Ke.resolve(R);
            });
          };
          Yr.onError = Zr;
          var Gr = function(R, $) {
            return R({
              uid: n,
              container: $.container,
              context: $.context,
              doc: $.doc,
              frame: $.frame,
              prerenderFrame: $.prerenderFrame,
              focus: Cr,
              close: Qr,
              state: T,
              props: L,
              tag: b,
              dimensions: ge(),
              event: U
            });
          }, Me = function(R, $) {
            var ar = $.context;
            return Nr ? Nr(R, {
              context: ar
            }) : g.try(function() {
              if (m) {
                var rr = R.getWindow();
                if (rr && xr(rr) && function(Tr) {
                  try {
                    if (!Tr.location.href || Tr.location.href === "about:blank") return !0;
                  } catch {
                  }
                  return !1;
                }(rr)) {
                  var Or = (rr = de(rr)).document, Rr = Gr(m, {
                    context: ar,
                    doc: Or
                  });
                  if (Rr) {
                    if (Rr.ownerDocument !== Or) throw new Error("Expected prerender template to have been created with document from child window");
                    (function(Tr, Lr) {
                      var jr = Lr.tagName.toLowerCase();
                      if (jr !== "html") throw new Error("Expected element to be html, got " + jr);
                      for (var k = Tr.document.documentElement, q = 0, A = Xn(k.children); q < A.length; q++) k.removeChild(A[q]);
                      for (var or = 0, ue = Xn(Lr.children); or < ue.length; or++) k.appendChild(ue[or]);
                    })(rr, Rr);
                    var kr = z.width, _r = kr !== void 0 && kr, X = z.height, vr = X !== void 0 && X, br = z.element, Ir = br === void 0 ? "body" : br;
                    if ((Ir = ft(Ir, Or)) && (_r || vr)) {
                      var Wr = jo(Ir, function(Tr) {
                        ae({
                          width: _r ? Tr.width : void 0,
                          height: vr ? Tr.height : void 0
                        });
                      }, {
                        width: _r,
                        height: vr,
                        win: rr
                      });
                      U.on(e.RENDERED, Wr.cancel);
                    }
                  }
                }
              }
            });
          }, Qe = function(R, $) {
            var ar = $.proxyFrame, rr = $.proxyPrerenderFrame, Or = $.context, Rr = $.rerender;
            return mn ? mn(R, {
              proxyFrame: ar,
              proxyPrerenderFrame: rr,
              context: Or,
              rerender: Rr
            }) : g.hash({
              container: R.get(),
              frame: ar ? ar.get() : null,
              prerenderFrame: rr ? rr.get() : null,
              internalState: Je()
            }).then(function(kr) {
              var _r = kr.container, X = kr.internalState.visible, vr = Gr(w, {
                context: Or,
                container: _r,
                frame: kr.frame,
                prerenderFrame: kr.prerenderFrame,
                doc: document
              });
              if (vr) {
                X || yo(vr), Uo(_r, vr);
                var br = function(Ir, Wr) {
                  Wr = _n(Wr);
                  var Tr = !1, Lr = [], jr, k, q, A = function() {
                    Tr = !0;
                    for (var ke = 0; ke < Lr.length; ke++) Lr[ke].disconnect();
                    jr && jr.cancel(), q && q.removeEventListener("unload", or), k && Qn(k);
                  }, or = function() {
                    Tr || (Wr(), A());
                  };
                  if (kn(Ir))
                    return or(), {
                      cancel: A
                    };
                  if (window.MutationObserver)
                    for (var ue = Ir.parentElement; ue; ) {
                      var ot = new window.MutationObserver(function() {
                        kn(Ir) && or();
                      });
                      ot.observe(ue, {
                        childList: !0
                      }), Lr.push(ot), ue = ue.parentElement;
                    }
                  return (k = document.createElement("iframe")).setAttribute("name", "__detect_close_" + We() + "__"), k.style.display = "none", mo(k).then(function(ke) {
                    (q = de(ke)).addEventListener("unload", or);
                  }), Ir.appendChild(k), jr = Vn(function() {
                    kn(Ir) && or();
                  }, 1e3), {
                    cancel: A
                  };
                }(vr, function() {
                  var Ir = new Error("Detected container element removed from DOM");
                  return g.delay(1).then(function() {
                    if (!kn(vr))
                      return M.all(Ir), Rr().then(ye, Xr);
                    Qr(Ir);
                  });
                });
                return M.register(function() {
                  return br.cancel();
                }), M.register(function() {
                  return Qn(vr);
                }), pr = kt(vr);
              }
            });
          }, Te = function() {
            return {
              state: T,
              event: U,
              close: Qr,
              focus: Cr,
              resize: ae,
              onError: Zr,
              updateProps: Ln,
              show: Pn,
              hide: Un
            };
          }, tt = function(R) {
            R === void 0 && (R = {});
            var $ = he, ar = Te();
            dt(Y, R), function(rr, Or, Rr, kr, _r) {
              var X = kr.state, vr = kr.close, br = kr.focus, Ir = kr.event, Wr = kr.onError;
              y(Rr, rr, function(Tr, Lr, jr) {
                var k = !1, q = jr;
                Object.defineProperty(Or, Tr, {
                  configurable: !0,
                  enumerable: !0,
                  get: function() {
                    return k ? q : (k = !0, function() {
                      if (!Lr) return q;
                      var A = Lr.alias;
                      if (A && !sn(jr) && sn(Rr[A]) && (q = Rr[A]), Lr.value && (q = Lr.value({
                        props: Or,
                        state: X,
                        close: vr,
                        focus: br,
                        event: Ir,
                        onError: Wr,
                        container: _r
                      })), !Lr.default || sn(q) || sn(Rr[Tr]) || (q = Lr.default({
                        props: Or,
                        state: X,
                        close: vr,
                        focus: br,
                        event: Ir,
                        onError: Wr,
                        container: _r
                      })), sn(q)) {
                        if (Lr.type === Jr.ARRAY ? !Array.isArray(q) : typeof q !== Lr.type) throw new TypeError("Prop is not of type " + Lr.type + ": " + Tr);
                      } else if (Lr.required !== !1 && !sn(Rr[Tr])) throw new Error('Expected prop "' + Tr + '" to be defined');
                      return sn(q) && Lr.decorate && (q = Lr.decorate({
                        value: q,
                        props: Or,
                        state: X,
                        close: vr,
                        focus: br,
                        event: Ir,
                        onError: Wr,
                        container: _r
                      })), q;
                    }());
                  }
                });
              }), y(Or, rr, ne);
            }(p, L, Y, ar, $);
          }, Ln = function(R) {
            return tt(R), cr.then(function() {
              var $ = re, ar = Dr;
              if ($ && ar && ee) return Ce(ee).then(function(rr) {
                return $.updateProps(rr).catch(function(Or) {
                  return ve(ar).then(function(Rr) {
                    if (!Rr) throw Or;
                  });
                });
              });
            });
          }, ro = function(R) {
            return Ie ? Ie(R) : g.try(function() {
              return wo(R);
            }).then(function($) {
              return Eo($) && ($ = function ar(rr) {
                var Or = function(X) {
                  var vr = function(br) {
                    for (; br.parentNode; ) br = br.parentNode;
                    if (Eo(br)) return br;
                  }(X);
                  if (vr && vr.host) return vr.host;
                }(rr);
                if (!Or) throw new Error("Element is not in shadow dom");
                var Rr = "shadow-slot-" + We(), kr = document.createElement("slot");
                kr.setAttribute("name", Rr), rr.appendChild(kr);
                var _r = document.createElement("div");
                return _r.setAttribute("slot", Rr), Or.appendChild(_r), Eo(Or) ? ar(_r) : _r;
              }($)), he = $, kt($);
            });
          };
          return {
            init: function() {
              (function() {
                U.on(e.RENDER, function() {
                  return L.onRender();
                }), U.on(e.DISPLAY, function() {
                  return L.onDisplay();
                }), U.on(e.RENDERED, function() {
                  return L.onRendered();
                }), U.on(e.CLOSE, function() {
                  return L.onClose();
                }), U.on(e.DESTROY, function() {
                  return L.onDestroy();
                }), U.on(e.RESIZE, function() {
                  return L.onResize();
                }), U.on(e.FOCUS, function() {
                  return L.onFocus();
                }), U.on(e.PROPS, function(R) {
                  return L.onProps(R);
                }), U.on(e.ERROR, function(R) {
                  return L && L.onError ? L.onError(R) : Xr(R).then(function() {
                    setTimeout(function() {
                      throw R;
                    }, 1);
                  });
                }), M.register(U.reset);
              })();
            },
            render: function(R) {
              var $ = R.target, ar = R.container, rr = R.context, Or = R.rerender;
              return g.try(function() {
                var Rr = N(), kr = B || N();
                (function(wr, Oe, we) {
                  if (wr !== window) {
                    if (!bt(window, wr)) throw new Error("Can only renderTo an adjacent frame");
                    var De = ur();
                    if (!Ve(Oe, De) && !xr(wr)) throw new Error("Can not render remotely to " + Oe.toString() + " - can only render to " + De);
                    if (we && typeof we != "string") throw new Error("Container passed to renderTo must be a string selector, got " + typeof we + " }");
                  }
                })($, kr, ar);
                var _r = g.try(function() {
                  if ($ !== window) return function(wr, Oe) {
                    for (var we = {}, De = 0, an = Object.keys(L); De < an.length; De++) {
                      var be = an[De], jn = p[be];
                      jn && jn.allowDelegate && (we[be] = L[be]);
                    }
                    var Ne = en(Oe, "zoid_delegate_" + v, {
                      uid: n,
                      overrides: {
                        props: we,
                        event: U,
                        close: Qr,
                        onError: Zr,
                        getInternalState: Je,
                        setInternalState: Se,
                        resolveInitPromise: ye,
                        rejectInitPromise: Xr
                      }
                    }).then(function(gr) {
                      var yr = gr.data.parent;
                      return M.register(function(Z) {
                        if (!Fr(Oe)) return yr.destroy(Z);
                      }), yr.getDelegateOverrides();
                    }).catch(function(gr) {
                      throw new Error(`Unable to delegate rendering. Possibly the component is not loaded in the target window.

` + ct(gr));
                    });
                    return Ie = function() {
                      for (var gr = arguments.length, yr = new Array(gr), Z = 0; Z < gr; Z++) yr[Z] = arguments[Z];
                      return Ne.then(function(Er) {
                        return Er.getProxyContainer.apply(Er, yr);
                      });
                    }, mn = function() {
                      for (var gr = arguments.length, yr = new Array(gr), Z = 0; Z < gr; Z++) yr[Z] = arguments[Z];
                      return Ne.then(function(Er) {
                        return Er.renderContainer.apply(Er, yr);
                      });
                    }, pn = function() {
                      for (var gr = arguments.length, yr = new Array(gr), Z = 0; Z < gr; Z++) yr[Z] = arguments[Z];
                      return Ne.then(function(Er) {
                        return Er.show.apply(Er, yr);
                      });
                    }, qe = function() {
                      for (var gr = arguments.length, yr = new Array(gr), Z = 0; Z < gr; Z++) yr[Z] = arguments[Z];
                      return Ne.then(function(Er) {
                        return Er.hide.apply(Er, yr);
                      });
                    }, Vr = function() {
                      for (var gr = arguments.length, yr = new Array(gr), Z = 0; Z < gr; Z++) yr[Z] = arguments[Z];
                      return Ne.then(function(Er) {
                        return Er.watchForUnload.apply(Er, yr);
                      });
                    }, wr === Re.IFRAME ? (Xe = function() {
                      for (var gr = arguments.length, yr = new Array(gr), Z = 0; Z < gr; Z++) yr[Z] = arguments[Z];
                      return Ne.then(function(Er) {
                        return Er.getProxyWindow.apply(Er, yr);
                      });
                    }, tn = function() {
                      for (var gr = arguments.length, yr = new Array(gr), Z = 0; Z < gr; Z++) yr[Z] = arguments[Z];
                      return Ne.then(function(Er) {
                        return Er.openFrame.apply(Er, yr);
                      });
                    }, et = function() {
                      for (var gr = arguments.length, yr = new Array(gr), Z = 0; Z < gr; Z++) yr[Z] = arguments[Z];
                      return Ne.then(function(Er) {
                        return Er.openPrerenderFrame.apply(Er, yr);
                      });
                    }, Nr = function() {
                      for (var gr = arguments.length, yr = new Array(gr), Z = 0; Z < gr; Z++) yr[Z] = arguments[Z];
                      return Ne.then(function(Er) {
                        return Er.prerender.apply(Er, yr);
                      });
                    }, He = function() {
                      for (var gr = arguments.length, yr = new Array(gr), Z = 0; Z < gr; Z++) yr[Z] = arguments[Z];
                      return Ne.then(function(Er) {
                        return Er.open.apply(Er, yr);
                      });
                    }, Mr = function() {
                      for (var gr = arguments.length, yr = new Array(gr), Z = 0; Z < gr; Z++) yr[Z] = arguments[Z];
                      return Ne.then(function(Er) {
                        return Er.openPrerender.apply(Er, yr);
                      });
                    }) : wr === Re.POPUP && (nn = function() {
                      for (var gr = arguments.length, yr = new Array(gr), Z = 0; Z < gr; Z++) yr[Z] = arguments[Z];
                      return Ne.then(function(Er) {
                        return Er.setProxyWin.apply(Er, yr);
                      });
                    }), Ne;
                  }(rr, $);
                }), X = L.window, vr = Ze(), br = S(p, L, "post"), Ir = U.trigger(e.RENDER), Wr = ro(ar), Tr = on(), Lr = Wr.then(function() {
                  return tt();
                }), jr = Lr.then(function() {
                  return S(p, L, "get").then(function(wr) {
                    return function(Oe, we) {
                      var De = we.query || {}, an = we.hash || {}, be, jn, Ne = Oe.split("#");
                      jn = Ne[1];
                      var gr = (be = Ne[0]).split("?");
                      be = gr[0];
                      var yr = $t(gr[1], De), Z = $t(jn, an);
                      return yr && (be = be + "?" + yr), Z && (be = be + "#" + Z), be;
                    }(it(nt()), {
                      query: wr
                    });
                  });
                }), k = Tr.then(function(wr) {
                  return function(we) {
                    var De = we === void 0 ? {} : we, an = De.proxyWin, be = De.initialChildDomain, jn = De.childDomainMatch, Ne = De.target, gr = Ne === void 0 ? window : Ne, yr = De.context;
                    return function(Z) {
                      var Er = Z === void 0 ? {} : Z, ii = Er.proxyWin, Ei = Er.childDomainMatch, Pi = Er.context;
                      return Ce(Er.initialChildDomain).then(function(bi) {
                        return {
                          uid: n,
                          context: Pi,
                          tag: b,
                          childDomainMatch: Ei,
                          version: "9_0_86",
                          props: bi,
                          exports: (di = ii, {
                            init: function(xi) {
                              return Yr(this.origin, xi);
                            },
                            close: Qr,
                            checkClose: function() {
                              return ve(di);
                            },
                            resize: ae,
                            onError: Zr,
                            show: Pn,
                            hide: Un,
                            export: Pe
                          })
                        };
                        var di;
                      });
                    }({
                      proxyWin: an,
                      initialChildDomain: be,
                      childDomainMatch: jn,
                      context: yr
                    }).then(function(Z) {
                      var Er = ko({
                        data: Z,
                        metaData: {
                          windowRef: Kr(gr, be, yr, an)
                        },
                        sender: {
                          domain: ur(window)
                        },
                        receiver: {
                          win: an,
                          domain: jn
                        },
                        passByReference: be === ur()
                      }), ii = Er.serializedData;
                      return M.register(Er.cleanReference), ii;
                    });
                  }({
                    proxyWin: (Oe = {
                      proxyWin: wr,
                      initialChildDomain: Rr,
                      childDomainMatch: kr,
                      target: $,
                      context: rr
                    }).proxyWin,
                    initialChildDomain: Oe.initialChildDomain,
                    childDomainMatch: Oe.childDomainMatch,
                    target: Oe.target,
                    context: Oe.context
                  }).then(function(we) {
                    return i({
                      name: v,
                      serializedPayload: we
                    });
                  });
                  var Oe;
                }), q = k.then(function(wr) {
                  return j(rr, {
                    windowName: wr
                  });
                }), A = tr(rr), or = g.hash({
                  proxyContainer: Wr,
                  proxyFrame: q,
                  proxyPrerenderFrame: A
                }).then(function(wr) {
                  return Qe(wr.proxyContainer, {
                    context: rr,
                    proxyFrame: wr.proxyFrame,
                    proxyPrerenderFrame: wr.proxyPrerenderFrame,
                    rerender: Or
                  });
                }).then(function(wr) {
                  return wr;
                }), ue = g.hash({
                  windowName: k,
                  proxyFrame: q,
                  proxyWin: Tr
                }).then(function(wr) {
                  var Oe = wr.proxyWin;
                  return X ? Oe : Ee(rr, {
                    windowName: wr.windowName,
                    proxyWin: Oe,
                    proxyFrame: wr.proxyFrame
                  });
                }), ot = g.hash({
                  proxyWin: ue,
                  proxyPrerenderFrame: A
                }).then(function(wr) {
                  return Q(rr, wr.proxyWin, wr.proxyPrerenderFrame);
                }), ke = ue.then(function(wr) {
                  return Dr = wr, $e(wr);
                }), bn = g.hash({
                  proxyPrerenderWin: ot,
                  state: ke
                }).then(function(wr) {
                  return Me(wr.proxyPrerenderWin, {
                    context: rr
                  });
                }), Ao = g.hash({
                  proxyWin: ue,
                  windowName: k
                }).then(function(wr) {
                  if (X) return wr.proxyWin.setName(wr.windowName);
                }), oi = g.hash({
                  body: br
                }).then(function(wr) {
                  return t.method ? t.method : Object.keys(wr.body).length ? "post" : "get";
                }), ci = g.hash({
                  proxyWin: ue,
                  windowUrl: jr,
                  body: br,
                  method: oi,
                  windowName: Ao,
                  prerender: bn
                }).then(function(wr) {
                  return wr.proxyWin.setLocation(wr.windowUrl, {
                    method: wr.method,
                    body: wr.body
                  });
                }), wi = ue.then(function(wr) {
                  (function Oe(we, De) {
                    var an = !1;
                    return M.register(function() {
                      an = !0;
                    }), g.delay(2e3).then(function() {
                      return we.isClosed();
                    }).then(function(be) {
                      if (!an) return be ? Qr(new Error("Detected " + De + " close")) : Oe(we, De);
                    });
                  })(wr, rr);
                }), pi = g.hash({
                  container: or,
                  prerender: bn
                }).then(function() {
                  return U.trigger(e.DISPLAY);
                }), mi = ue.then(function(wr) {
                  return function(Oe, we, De) {
                    return g.try(function() {
                      return Oe.awaitWindow();
                    }).then(function(an) {
                      if (En && En.needsBridge({
                        win: an,
                        domain: we
                      }) && !En.hasBridge(we, we)) {
                        var be = typeof t.bridgeUrl == "function" ? t.bridgeUrl({
                          props: L
                        }) : t.bridgeUrl;
                        if (!be) throw new Error("Bridge needed to render " + De);
                        var jn = ze(be);
                        return En.linkUrl(an, we), En.openBridge(it(be), jn);
                      }
                    });
                  }(wr, Rr, rr);
                }), gi = ci.then(function() {
                  return g.try(function() {
                    var wr = L.timeout;
                    if (wr) return cr.timeout(wr, new Error("Loading component timed out after " + wr + " milliseconds"));
                  });
                }), yi = cr.then(function() {
                  return U.trigger(e.RENDERED);
                });
                return g.hash({
                  initPromise: cr,
                  buildUrlPromise: jr,
                  onRenderPromise: Ir,
                  getProxyContainerPromise: Wr,
                  openFramePromise: q,
                  openPrerenderFramePromise: A,
                  renderContainerPromise: or,
                  openPromise: ue,
                  openPrerenderPromise: ot,
                  setStatePromise: ke,
                  prerenderPromise: bn,
                  loadUrlPromise: ci,
                  buildWindowNamePromise: k,
                  setWindowNamePromise: Ao,
                  watchForClosePromise: wi,
                  onDisplayPromise: pi,
                  openBridgePromise: mi,
                  runTimeoutPromise: gi,
                  onRenderedPromise: yi,
                  delegatePromise: _r,
                  watchForUnloadPromise: vr,
                  finalSetPropsPromise: Lr
                });
              }).catch(function(Rr) {
                return g.all([Zr(Rr), Hr(Rr)]).then(function() {
                  throw Rr;
                }, function() {
                  throw Rr;
                });
              }).then(ne);
            },
            destroy: Hr,
            getProps: function() {
              return L;
            },
            setProps: tt,
            export: Pe,
            getHelpers: Te,
            getDelegateOverrides: function() {
              return g.try(function() {
                return {
                  getProxyContainer: ro,
                  show: Pn,
                  hide: Un,
                  renderContainer: Qe,
                  getProxyWindow: on,
                  watchForUnload: Ze,
                  openFrame: j,
                  openPrerenderFrame: tr,
                  prerender: Me,
                  open: Ee,
                  openPrerender: Q,
                  setProxyWin: $e
                };
              });
            },
            getExports: function() {
              return V({
                getExports: function() {
                  return Ke;
                }
              });
            }
          };
        }
        function J(r) {
          var n = r.uid, t = r.frame, a = r.prerenderFrame, u = r.doc, s = r.props, f = r.event, p = r.dimensions, w = p.width, m = p.height;
          if (t && a) {
            var b = u.createElement("div");
            b.setAttribute("id", n);
            var v = u.createElement("style");
            return s.cspNonce && v.setAttribute("nonce", s.cspNonce), v.appendChild(u.createTextNode(`
            #` + n + ` {
                display: inline-block;
                position: relative;
                width: ` + w + `;
                height: ` + m + `;
            }

            #` + n + ` > iframe {
                display: inline-block;
                position: absolute;
                width: 100%;
                height: 100%;
                top: 0;
                left: 0;
                transition: opacity .2s ease-in-out;
            }

            #` + n + ` > iframe.zoid-invisible {
                opacity: 0;
            }

            #` + n + ` > iframe.zoid-visible {
                opacity: 1;
        }
        `)), b.appendChild(t), b.appendChild(a), b.appendChild(v), a.classList.add("zoid-visible"), t.classList.add("zoid-invisible"), f.on(e.RENDERED, function() {
              a.classList.remove("zoid-visible"), a.classList.add("zoid-invisible"), t.classList.remove("zoid-invisible"), t.classList.add("zoid-visible"), setTimeout(function() {
                Qn(a);
              }, 1);
            }), f.on(e.RESIZE, function(x) {
              var W = x.width, z = x.height;
              typeof W == "number" && (b.style.width = zt(W)), typeof z == "number" && (b.style.height = zt(z));
            }), b;
          }
        }
        function _(r) {
          var n = r.doc, t = r.props, a = n.createElement("html"), u = n.createElement("body"), s = n.createElement("style"), f = n.createElement("div");
          return f.classList.add("spinner"), t.cspNonce && s.setAttribute("nonce", t.cspNonce), a.appendChild(u), u.appendChild(f), u.appendChild(s), s.appendChild(n.createTextNode(`
            html, body {
                width: 100%;
                height: 100%;
            }

            .spinner {
                position: fixed;
                max-height: 60vmin;
                max-width: 60vmin;
                height: 40px;
                width: 40px;
                top: 50%;
                left: 50%;
                box-sizing: border-box;
                border: 3px solid rgba(0, 0, 0, .2);
                border-top-color: rgba(33, 128, 192, 0.8);
                border-radius: 100%;
                animation: rotation .7s infinite linear;
            }

            @keyframes rotation {
                from {
                    transform: translateX(-50%) translateY(-50%) rotate(0deg);
                }
                to {
                    transform: translateX(-50%) translateY(-50%) rotate(359deg);
                }
            }
        `)), a;
        }
        var er = Dt(), nr = Dt();
        function Pr(r) {
          var n = function(v) {
            var x = v.tag, W = v.url, z = v.domain, I = v.bridgeUrl, B = v.props, V = B === void 0 ? {} : B, cr = v.dimensions, fr = cr === void 0 ? {} : cr, M = v.autoResize, T = M === void 0 ? {} : M, Y = v.allowedParentDomains, F = Y === void 0 ? "*" : Y, U = v.attributes, lr = U === void 0 ? {} : U, hr = v.defaultContext, K = hr === void 0 ? Re.IFRAME : hr, L = v.containerTemplate, Dr = L === void 0 ? J : L, pr = v.prerenderTemplate, re = pr === void 0 ? _ : pr, ee = v.validate, he = v.eligible, oe = he === void 0 ? function() {
              return {
                eligible: !0
              };
            } : he, Ie = v.logger, pn = Ie === void 0 ? {
              info: ne
            } : Ie, qe = v.exports, me = qe === void 0 ? ne : qe, mn = v.method, Xe = v.children, nn = Xe === void 0 ? function() {
              return {};
            } : Xe, tn = x.replace(/-/g, "_"), et = zr({}, {
              window: {
                type: Jr.OBJECT,
                sendToChild: !1,
                required: !1,
                allowDelegate: !0,
                validate: function(Nr) {
                  var He = Nr.value;
                  if (!Yn(He) && !rn.isProxyWindow(He)) throw new Error("Expected Window or ProxyWindow");
                  if (Yn(He)) {
                    if (Fr(He)) throw new Error("Window is closed");
                    if (!xr(He)) throw new Error("Window is not same domain");
                  }
                },
                decorate: function(Nr) {
                  return wn(Nr.value);
                }
              },
              timeout: {
                type: Jr.NUMBER,
                required: !1,
                sendToChild: !1
              },
              cspNonce: {
                type: Jr.STRING,
                required: !1
              },
              onDisplay: {
                type: Jr.FUNCTION,
                required: !1,
                sendToChild: !1,
                allowDelegate: !0,
                default: E,
                decorate: O
              },
              onRendered: {
                type: Jr.FUNCTION,
                required: !1,
                sendToChild: !1,
                default: E,
                decorate: O
              },
              onRender: {
                type: Jr.FUNCTION,
                required: !1,
                sendToChild: !1,
                default: E,
                decorate: O
              },
              onClose: {
                type: Jr.FUNCTION,
                required: !1,
                sendToChild: !1,
                allowDelegate: !0,
                default: E,
                decorate: O
              },
              onDestroy: {
                type: Jr.FUNCTION,
                required: !1,
                sendToChild: !1,
                allowDelegate: !0,
                default: E,
                decorate: O
              },
              onResize: {
                type: Jr.FUNCTION,
                required: !1,
                sendToChild: !1,
                allowDelegate: !0,
                default: E
              },
              onFocus: {
                type: Jr.FUNCTION,
                required: !1,
                sendToChild: !1,
                allowDelegate: !0,
                default: E
              },
              close: {
                type: Jr.FUNCTION,
                required: !1,
                sendToChild: !1,
                childDecorate: function(Nr) {
                  return Nr.close;
                }
              },
              focus: {
                type: Jr.FUNCTION,
                required: !1,
                sendToChild: !1,
                childDecorate: function(Nr) {
                  return Nr.focus;
                }
              },
              resize: {
                type: Jr.FUNCTION,
                required: !1,
                sendToChild: !1,
                childDecorate: function(Nr) {
                  return Nr.resize;
                }
              },
              uid: {
                type: Jr.STRING,
                required: !1,
                sendToChild: !1,
                childDecorate: function(Nr) {
                  return Nr.uid;
                }
              },
              tag: {
                type: Jr.STRING,
                required: !1,
                sendToChild: !1,
                childDecorate: function(Nr) {
                  return Nr.tag;
                }
              },
              getParent: {
                type: Jr.FUNCTION,
                required: !1,
                sendToChild: !1,
                childDecorate: function(Nr) {
                  return Nr.getParent;
                }
              },
              getParentDomain: {
                type: Jr.FUNCTION,
                required: !1,
                sendToChild: !1,
                childDecorate: function(Nr) {
                  return Nr.getParentDomain;
                }
              },
              show: {
                type: Jr.FUNCTION,
                required: !1,
                sendToChild: !1,
                childDecorate: function(Nr) {
                  return Nr.show;
                }
              },
              hide: {
                type: Jr.FUNCTION,
                required: !1,
                sendToChild: !1,
                childDecorate: function(Nr) {
                  return Nr.hide;
                }
              },
              export: {
                type: Jr.FUNCTION,
                required: !1,
                sendToChild: !1,
                childDecorate: function(Nr) {
                  return Nr.export;
                }
              },
              onError: {
                type: Jr.FUNCTION,
                required: !1,
                sendToChild: !1,
                childDecorate: function(Nr) {
                  return Nr.onError;
                }
              },
              onProps: {
                type: Jr.FUNCTION,
                required: !1,
                sendToChild: !1,
                childDecorate: function(Nr) {
                  return Nr.onProps;
                }
              },
              getSiblings: {
                type: Jr.FUNCTION,
                required: !1,
                sendToChild: !1,
                childDecorate: function(Nr) {
                  return Nr.getSiblings;
                }
              }
            }, V);
            if (!Dr) throw new Error("Container template required");
            return {
              name: tn,
              tag: x,
              url: W,
              domain: z,
              bridgeUrl: I,
              method: mn,
              propsDef: et,
              dimensions: fr,
              autoResize: T,
              allowedParentDomains: F,
              attributes: lr,
              defaultContext: K,
              containerTemplate: Dr,
              prerenderTemplate: re,
              validate: ee,
              logger: pn,
              eligible: oe,
              children: nn,
              exports: typeof me == "function" ? me : function(Nr) {
                for (var He = Nr.getExports, Mr = {}, Vr = function(ge, ye) {
                  var Xr = ye[ge], Ce = me[Xr].type, Je = He().then(function(Se) {
                    return Se[Xr];
                  });
                  Mr[Xr] = Ce === Jr.FUNCTION ? function() {
                    for (var Se = arguments.length, on = new Array(Se), $e = 0; $e < Se; $e++) on[$e] = arguments[$e];
                    return Je.then(function(Pn) {
                      return Pn.apply(void 0, on);
                    });
                  } : Je;
                }, $r = 0, ie = Object.keys(me); $r < ie.length; $r++) Vr($r, ie);
                return Mr;
              }
            };
          }(r), t = n.name, a = n.tag, u = n.defaultContext, s = n.eligible, f = n.children, p = gt(window), w = [], m = function() {
            if (function(x) {
              try {
                return o(window.name).name === x;
              } catch {
              }
              return !1;
            }(t)) {
              var v = d().payload;
              if (v.tag === a && Ve(v.childDomainMatch, ur())) return !0;
            }
            return !1;
          }, b = dn(function() {
            if (m()) {
              if (window.xprops)
                throw delete p.components[a], new Error("Can not register " + t + " as child - child already registered");
              var v = function(x) {
                var W = x.tag, z = x.propsDef, I = x.autoResize, B = x.allowedParentDomains, V = [], cr = d(), fr = cr.parent, M = cr.payload, T = fr.win, Y = fr.domain, F, U = new g(), lr = M.version, hr = M.uid, K = M.exports, L = M.context, Dr = M.props;
                if (lr !== "9_0_86") throw new Error("Parent window has zoid version " + lr + ", child window has version 9_0_86");
                var pr = K.show, re = K.hide, ee = K.close, he = K.onError, oe = K.checkClose, Ie = K.export, pn = K.resize, qe = K.init, me = function() {
                  return T;
                }, mn = function() {
                  return Y;
                }, Xe = function(Mr) {
                  return V.push(Mr), {
                    cancel: function() {
                      V.splice(V.indexOf(Mr), 1);
                    }
                  };
                }, nn = function(Mr) {
                  return pn.fireAndForget({
                    width: Mr.width,
                    height: Mr.height
                  });
                }, tn = function(Mr) {
                  return U.resolve(Mr), Ie(Mr);
                }, et = function(Mr) {
                  var Vr = (Mr === void 0 ? {} : Mr).anyParent, $r = [], ie = F.parent;
                  if (Vr === void 0 && (Vr = !ie), !Vr && !ie) throw new Error("No parent found for " + W + " child");
                  for (var ge = 0, ye = cn(window); ge < ye.length; ge++) {
                    var Xr = ye[ge];
                    if (xr(Xr)) {
                      var Ce = de(Xr).xprops;
                      if (Ce && me() === Ce.getParent()) {
                        var Je = Ce.parent;
                        if (Vr || !ie || Je && Je.uid === ie.uid) {
                          var Se = To(Xr, function(on) {
                            return on.exports;
                          });
                          $r.push({
                            props: Ce,
                            exports: Se
                          });
                        }
                      }
                    }
                  }
                  return $r;
                }, Nr = function(Mr, Vr, $r) {
                  $r === void 0 && ($r = !1);
                  var ie = function(ye, Xr, Ce, Je, Se, on) {
                    on === void 0 && (on = !1);
                    for (var $e = {}, Pn = 0, Un = Object.keys(Ce); Pn < Un.length; Pn++) {
                      var nt = Un[Pn], gn = Xr[nt];
                      if (!gn || !gn.sameDomain || Je === ur(window) && xr(ye)) {
                        var N = h(Xr, 0, nt, Ce[nt], Se);
                        $e[nt] = N, gn && gn.alias && !$e[gn.alias] && ($e[gn.alias] = N);
                      }
                    }
                    if (!on) for (var j = 0, tr = Object.keys(Xr); j < tr.length; j++) {
                      var Q = tr[j];
                      Ce.hasOwnProperty(Q) || ($e[Q] = h(Xr, 0, Q, void 0, Se));
                    }
                    return $e;
                  }(T, z, Mr, Vr, {
                    tag: W,
                    show: pr,
                    hide: re,
                    close: ee,
                    focus: C,
                    onError: he,
                    resize: nn,
                    getSiblings: et,
                    onProps: Xe,
                    getParent: me,
                    getParentDomain: mn,
                    uid: hr,
                    export: tn
                  }, $r);
                  F ? dt(F, ie) : F = ie;
                  for (var ge = 0; ge < V.length; ge++) (0, V[ge])(F);
                }, He = function(Mr) {
                  return g.try(function() {
                    return Nr(Mr, Y, !0);
                  });
                };
                return {
                  init: function() {
                    return g.try(function() {
                      return xr(T) && function(Mr) {
                        var Vr = Mr.componentName, $r = Mr.parentComponentWindow, ie = ri({
                          data: o(window.name).serializedInitialPayload,
                          sender: {
                            win: $r
                          },
                          basic: !0
                        }), ge = ie.sender;
                        if (ie.reference.type === "uid" || ie.metaData.windowRef.type === "global") {
                          var ye = ko({
                            data: ie.data,
                            metaData: {
                              windowRef: l($r)
                            },
                            sender: {
                              domain: ge.domain
                            },
                            receiver: {
                              win: window,
                              domain: ur()
                            },
                            basic: !0
                          });
                          window.name = i({
                            name: Vr,
                            serializedPayload: ye.serializedData
                          });
                        }
                      }({
                        componentName: x.name,
                        parentComponentWindow: T
                      }), gt(window).exports = x.exports({
                        getExports: function() {
                          return U;
                        }
                      }), function(Mr, Vr) {
                        if (!Ve(Mr, Vr)) throw new Error("Can not be rendered by domain: " + Vr);
                      }(B, Y), Ue(T), function() {
                        window.addEventListener("beforeunload", function() {
                          oe.fireAndForget();
                        }), window.addEventListener("unload", function() {
                          oe.fireAndForget();
                        }), uo(T, function() {
                          P();
                        });
                      }(), qe({
                        updateProps: He,
                        close: P
                      });
                    }).then(function() {
                      return (Mr = I.width, Vr = Mr !== void 0 && Mr, $r = I.height, ie = $r !== void 0 && $r, ge = I.element, wo(ge === void 0 ? "body" : ge).catch(ne).then(function(ye) {
                        return {
                          width: Vr,
                          height: ie,
                          element: ye
                        };
                      })).then(function(ye) {
                        var Xr = ye.width, Ce = ye.height, Je = ye.element;
                        Je && (Xr || Ce) && L !== Re.POPUP && jo(Je, function(Se) {
                          nn({
                            width: Xr ? Se.width : void 0,
                            height: Ce ? Se.height : void 0
                          });
                        }, {
                          width: Xr,
                          height: Ce
                        });
                      });
                      var Mr, Vr, $r, ie, ge;
                    }).catch(function(Mr) {
                      he(Mr);
                    });
                  },
                  getProps: function() {
                    return F || (Nr(Dr, Y), F);
                  }
                };
              }(n);
              return v.init(), v;
            }
          });
          if (b(), function() {
            var v = Nn("zoid_allow_delegate_" + t, function() {
              return !0;
            }), x = Nn("zoid_delegate_" + t, function(W) {
              var z = W.data;
              return {
                parent: D({
                  uid: z.uid,
                  options: n,
                  overrides: z.overrides,
                  parentWin: W.source
                })
              };
            });
            nr.register(v.cancel), nr.register(x.cancel);
          }(), p.components = p.components || {}, p.components[a]) throw new Error("Can not register multiple components with the same tag: " + a);
          return p.components[a] = !0, {
            init: function v(x) {
              var W, z = "zoid-" + a + "-" + We(), I = x || {}, B = s({
                props: I
              }), V = B.eligible, cr = B.reason, fr = I.onDestroy;
              I.onDestroy = function() {
                if (W && V && w.splice(w.indexOf(W), 1), fr) return fr.apply(void 0, arguments);
              };
              var M = D({
                uid: z,
                options: n
              });
              M.init(), V ? M.setProps(I) : I.onDestroy && I.onDestroy(), er.register(function(F) {
                return M.destroy(F || new Error("zoid destroyed all components"));
              });
              var T = function(F) {
                var U = (F === void 0 ? {} : F).decorate;
                return v((U === void 0 ? Fn : U)(I));
              }, Y = function(F, U, lr) {
                return g.try(function() {
                  if (!V) {
                    var hr = new Error(cr || t + " component is not eligible");
                    return M.destroy(hr).then(function() {
                      throw hr;
                    });
                  }
                  if (!Yn(F)) throw new Error("Must pass window to renderTo");
                  return function(K, L) {
                    return g.try(function() {
                      if (K.window) return wn(K.window).getType();
                      if (L) {
                        if (L !== Re.IFRAME && L !== Re.POPUP) throw new Error("Unrecognized context: " + L);
                        return L;
                      }
                      return u;
                    });
                  }(I, lr);
                }).then(function(hr) {
                  if (U = function(K, L) {
                    if (L) {
                      if (typeof L != "string" && !Lo(L)) throw new TypeError("Expected string or element selector to be passed");
                      return L;
                    }
                    if (K === Re.POPUP) return "body";
                    throw new Error("Expected element to be passed to render iframe");
                  }(hr, U), F !== window && typeof U != "string") throw new Error("Must pass string element when rendering to another window");
                  return M.render({
                    target: F,
                    container: U,
                    context: hr,
                    rerender: function() {
                      var K = T();
                      return dt(W, K), K.renderTo(F, U, lr);
                    }
                  });
                }).catch(function(hr) {
                  return M.destroy(hr).then(function() {
                    throw hr;
                  });
                });
              };
              return W = zr({}, M.getExports(), M.getHelpers(), function() {
                for (var F = f(), U = {}, lr = function(L, Dr) {
                  var pr = Dr[L], re = F[pr];
                  U[pr] = function(ee) {
                    var he = M.getProps(), oe = zr({}, ee, {
                      parent: {
                        uid: z,
                        props: he,
                        export: M.export
                      }
                    });
                    return re(oe);
                  };
                }, hr = 0, K = Object.keys(F); hr < K.length; hr++) lr(hr, K);
                return U;
              }(), {
                isEligible: function() {
                  return V;
                },
                clone: T,
                render: function(F, U) {
                  return Y(window, F, U);
                },
                renderTo: function(F, U, lr) {
                  return Y(F, U, lr);
                }
              }), V && w.push(W), W;
            },
            instances: w,
            driver: function(v, x) {
              throw new Error("Driver support not enabled");
            },
            isChild: m,
            canRenderTo: function(v) {
              return en(v, "zoid_allow_delegate_" + t).then(function(x) {
                return x.data;
              }).catch(function() {
                return !1;
              });
            },
            registerChild: b
          };
        }
        var Sr = function(r) {
          (function() {
            fn().initialized || (fn().initialized = !0, s = (u = {
              on: Nn,
              send: en
            }).on, f = u.send, (p = fn()).receiveMessage = p.receiveMessage || function(w) {
              return Qt(w, {
                on: s,
                send: f
              });
            }, function(w) {
              var m = w.on, b = w.send;
              Br().getOrSet("postMessageListener", function() {
                return lt(window, "message", function(v) {
                  (function(x, W) {
                    var z = W.on, I = W.send;
                    g.try(function() {
                      var B = x.source || x.sourceElement, V = x.origin || x.originalEvent && x.originalEvent.origin, cr = x.data;
                      if (V === "null" && (V = "file://"), B) {
                        if (!V) throw new Error("Post message did not have origin domain");
                        Qt({
                          source: B,
                          origin: V,
                          data: cr
                        }, {
                          on: z,
                          send: I
                        });
                      }
                    });
                  })(v, {
                    on: m,
                    send: b
                  });
                });
              });
            }({
              on: Nn,
              send: en
            }), vn({
              on: Nn,
              send: en,
              receiveMessage: Qt
            }), function(w) {
              var m = w.on, b = w.send;
              Br("builtinListeners").getOrSet("helloListener", function() {
                var v = m("postrobot_hello", {
                  domain: "*"
                }, function(W) {
                  return Mn(W.source, {
                    domain: W.origin
                  }), {
                    instanceID: xo()
                  };
                }), x = Gn();
                return x && Fe(x, {
                  send: b
                }).catch(function(W) {
                }), v;
              });
            }({
              on: Nn,
              send: en
            }));
            var u, s, f, p;
          })();
          var n = Pr(r), t = function(u) {
            return n.init(u);
          };
          t.driver = function(u, s) {
            return n.driver(u, s);
          }, t.isChild = function() {
            return n.isChild();
          }, t.canRenderTo = function(u) {
            return n.canRenderTo(u);
          }, t.instances = n.instances;
          var a = n.registerChild();
          return a && (window.xprops = t.xprops = a.getProps()), t;
        };
        function G(r) {
          En && En.destroyBridges();
          var n = er.all(r);
          return er = Dt(), n;
        }
        var dr = G;
        function sr(r) {
          return dr(), delete window.__zoid_9_0_86__, function() {
            (function() {
              for (var t = Br("responseListeners"), a = 0, u = t.keys(); a < u.length; a++) {
                var s = u[a], f = t.get(s);
                f && (f.cancelled = !0), t.del(s);
              }
            })(), (n = Br().get("postMessageListener")) && n.cancel();
            var n;
            delete window.__post_robot_10_0_44__;
          }(), nr.all(r);
        }
      }]);
    });
  }(ui)), ui.exports;
}
(function(Rn) {
  var ei = { env: {}, version: '"v18.20.4"' }, yn = {};
  ei && yn && yn.ZOID_FRAME_ONLY ? (Rn.exports = Oi(), Rn.exports.default = Rn.exports) : (Rn.exports = Wi(), Rn.exports.default = Rn.exports);
})(hi);
var vi = hi.exports;
const Si = vi.create({
  tag: "my-button-component",
  url: "/button",
  dimensions: {
    width: "150px",
    height: "40px"
  },
  props: {
    buttonText: {
      type: "string",
      default: "Click Me"
    }
  }
}), Di = vi.create({
  tag: "popup-component",
  url: "/popup",
  dimensions: {
    width: "500px",
    height: "300px"
  },
  props: {
    onClose: {
      type: "function",
      required: !0
    },
    title: {
      type: "string",
      queryParam: !0,
      default: "Modal Title"
    },
    content: {
      type: "string",
      queryParam: !0,
      default: "Modal Content"
    }
  }
});
export {
  Di as PopupComponent,
  Si as SepaButton
};
