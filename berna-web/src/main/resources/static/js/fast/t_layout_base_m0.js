!
    function(e, t) {
        function n(e) {
            var t = he[e] = {};
            return K.each(e.split(te), function(e, n) {
                t[n] = !0
            }), t
        }
        function r(e, n, r) {
            if (r === t && 1 === e.nodeType) {
                var i = "data-" + n.replace(ve, "-$1").toLowerCase();
                if (r = e.getAttribute(i), "string" == typeof r) {
                    try {
                        r = "true" === r || "false" !== r && ("null" === r ? null : +r + "" === r ? +r : me.test(r) ? K.parseJSON(r) : r)
                    } catch (o) {}
                    K.data(e, n, r)
                } else r = t
            }
            return r
        }
        function i(e) {
            var t;
            for (t in e) if (("data" !== t || !K.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
            return !0
        }
        function o() {
            return !1
        }
        function a() {
            return !0
        }
        function s(e) {
            return !e || !e.parentNode || 11 === e.parentNode.nodeType
        }
        function u(e, t) {
            do e = e[t];
            while (e && 1 !== e.nodeType);
            return e
        }
        function l(e, t, n) {
            if (t = t || 0, K.isFunction(t)) return K.grep(e, function(e, r) {
                var i = !! t.call(e, r, e);
                return i === n
            });
            if (t.nodeType) return K.grep(e, function(e, r) {
                return e === t === n
            });
            if ("string" == typeof t) {
                var r = K.grep(e, function(e) {
                    return 1 === e.nodeType
                });
                if (Le.test(t)) return K.filter(t, r, !n);
                t = K.filter(t, r)
            }
            return K.grep(e, function(e, r) {
                return K.inArray(e, t) >= 0 === n
            })
        }
        function c(e) {
            var t = He.split("|"),
                n = e.createDocumentFragment();
            if (n.createElement) for (; t.length;) n.createElement(t.pop());
            return n
        }
        function f(e, t) {
            return e.getElementsByTagName(t)[0] || e.appendChild(e.ownerDocument.createElement(t))
        }
        function d(e, t) {
            if (1 === t.nodeType && K.hasData(e)) {
                var n, r, i, o = K._data(e),
                    a = K._data(t, o),
                    s = o.events;
                if (s) {
                    delete a.handle, a.events = {};
                    for (n in s) for (r = 0, i = s[n].length; r < i; r++) K.event.add(t, n, s[n][r])
                }
                a.data && (a.data = K.extend({}, a.data))
            }
        }
        function p(e, t) {
            var n;
            1 === t.nodeType && (t.clearAttributes && t.clearAttributes(), t.mergeAttributes && t.mergeAttributes(e), n = t.nodeName.toLowerCase(), "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), K.support.html5Clone && e.innerHTML && !K.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Ve.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.selected = e.defaultSelected : "input" === n || "textarea" === n ? t.defaultValue = e.defaultValue : "script" === n && t.text !== e.text && (t.text = e.text), t.removeAttribute(K.expando))
        }
        function h(e) {
            return "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName("*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll("*") : []
        }
        function m(e) {
            Ve.test(e.type) && (e.defaultChecked = e.checked)
        }
        function v(e, t) {
            if (t in e) return t;
            for (var n = t.charAt(0).toUpperCase() + t.slice(1), r = t, i = gt.length; i--;) if (t = gt[i] + n, t in e) return t;
            return r
        }
        function g(e, t) {
            return e = t || e, "none" === K.css(e, "display") || !K.contains(e.ownerDocument, e)
        }
        function y(e, t) {
            for (var n, r, i = [], o = 0, a = e.length; o < a; o++) n = e[o], n.style && (i[o] = K._data(n, "olddisplay"), t ? (!i[o] && "none" === n.style.display && (n.style.display = ""), "" === n.style.display && g(n) && (i[o] = K._data(n, "olddisplay", T(n.nodeName)))) : (r = nt(n, "display"), !i[o] && "none" !== r && K._data(n, "olddisplay", r)));
            for (o = 0; o < a; o++) n = e[o], n.style && (t && "none" !== n.style.display && "" !== n.style.display || (n.style.display = t ? i[o] || "" : "none"));
            return e
        }
        function x(e, t, n) {
            var r = ct.exec(t);
            return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
        }
        function b(e, t, n, r) {
            for (var i = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, o = 0; i < 4; i += 2)"margin" === n && (o += K.css(e, n + vt[i], !0)), r ? ("content" === n && (o -= parseFloat(nt(e, "padding" + vt[i])) || 0), "margin" !== n && (o -= parseFloat(nt(e, "border" + vt[i] + "Width")) || 0)) : (o += parseFloat(nt(e, "padding" + vt[i])) || 0, "padding" !== n && (o += parseFloat(nt(e, "border" + vt[i] + "Width")) || 0));
            return o
        }
        function w(e, t, n) {
            var r = "width" === t ? e.offsetWidth : e.offsetHeight,
                i = !0,
                o = K.support.boxSizing && "border-box" === K.css(e, "boxSizing");
            if (r <= 0 || null == r) {
                if (r = nt(e, t), (r < 0 || null == r) && (r = e.style[t]), ft.test(r)) return r;
                i = o && (K.support.boxSizingReliable || r === e.style[t]), r = parseFloat(r) || 0
            }
            return r + b(e, t, n || (o ? "border" : "content"), i) + "px"
        }
        function T(e) {
            if (pt[e]) return pt[e];
            var t = K("<" + e + ">").appendTo(B.body),
                n = t.css("display");
            return t.remove(), "none" !== n && "" !== n || (rt = B.body.appendChild(rt || K.extend(B.createElement("iframe"), {
                frameBorder: 0,
                width: 0,
                height: 0
            })), it && rt.createElement || (it = (rt.contentWindow || rt.contentDocument).document, it.write("<!doctype html><html><body>"), it.close()), t = it.body.appendChild(it.createElement(e)), n = nt(t, "display"), B.body.removeChild(rt)), pt[e] = n, n
        }
        function E(e, t, n, r) {
            var i;
            if (K.isArray(t)) K.each(t, function(t, i) {
                n || bt.test(e) ? r(e, i) : E(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r)
            });
            else if (n || "object" !== K.type(t)) r(e, t);
            else for (i in t) E(e + "[" + i + "]", t[i], n, r)
        }
        function _(e) {
            return function(t, n) {
                "string" != typeof t && (n = t, t = "*");
                var r, i, o, a = t.toLowerCase().split(te),
                    s = 0,
                    u = a.length;
                if (K.isFunction(n)) for (; s < u; s++) r = a[s], o = /^\+/.test(r), o && (r = r.substr(1) || "*"), i = e[r] = e[r] || [], i[o ? "unshift" : "push"](n)
            }
        }
        function N(e, n, r, i, o, a) {
            o = o || n.dataTypes[0], a = a || {}, a[o] = !0;
            for (var s, u = e[o], l = 0, c = u ? u.length : 0, f = e === Lt; l < c && (f || !s); l++) s = u[l](n, r, i), "string" == typeof s && (!f || a[s] ? s = t : (n.dataTypes.unshift(s), s = N(e, n, r, i, s, a)));
            return (f || !s) && !a["*"] && (s = N(e, n, r, i, "*", a)), s
        }
        function C(e, n) {
            var r, i, o = K.ajaxSettings.flatOptions || {};
            for (r in n) n[r] !== t && ((o[r] ? e : i || (i = {}))[r] = n[r]);
            i && K.extend(!0, e, i)
        }
        function S(e, n, r) {
            var i, o, a, s, u = e.contents,
                l = e.dataTypes,
                c = e.responseFields;
            for (o in c) o in r && (n[c[o]] = r[o]);
            for (;
                "*" === l[0];) l.shift(), i === t && (i = e.mimeType || n.getResponseHeader("content-type"));
            if (i) for (o in u) if (u[o] && u[o].test(i)) {
                l.unshift(o);
                break
            }
            if (l[0] in r) a = l[0];
            else {
                for (o in r) {
                    if (!l[0] || e.converters[o + " " + l[0]]) {
                        a = o;
                        break
                    }
                    s || (s = o)
                }
                a = a || s
            }
            if (a) return a !== l[0] && l.unshift(a), r[a]
        }
        function A(e, t) {
            var n, r, i, o, a = e.dataTypes.slice(),
                s = a[0],
                u = {},
                l = 0;
            if (e.dataFilter && (t = e.dataFilter(t, e.dataType)), a[1]) for (n in e.converters) u[n.toLowerCase()] = e.converters[n];
            for (; i = a[++l];) if ("*" !== i) {
                if ("*" !== s && s !== i) {
                    if (n = u[s + " " + i] || u["* " + i], !n) for (r in u) if (o = r.split(" "), o[1] === i && (n = u[s + " " + o[0]] || u["* " + o[0]])) {
                        n === !0 ? n = u[r] : u[r] !== !0 && (i = o[0], a.splice(l--, 0, i));
                        break
                    }
                    if (n !== !0) if (n && e["throws"]) t = n(t);
                    else try {
                            t = n(t)
                        } catch (c) {
                            return {
                                state: "parsererror",
                                error: n ? c : "No conversion from " + s + " to " + i
                            }
                        }
                }
                s = i
            }
            return {
                state: "success",
                data: t
            }
        }
        function k() {
            try {
                return new e.XMLHttpRequest
            } catch (t) {}
        }
        function $() {
            try {
                return new e.ActiveXObject("Microsoft.XMLHTTP")
            } catch (t) {}
        }
        function j() {
            return setTimeout(function() {
                Ut = t
            }, 0), Ut = K.now()
        }
        function O(e, t) {
            K.each(t, function(t, n) {
                for (var r = (Zt[t] || []).concat(Zt["*"]), i = 0, o = r.length; i < o; i++) if (r[i].call(e, t, n)) return
            })
        }
        function D(e, t, n) {
            var r, i = 0,
                o = Kt.length,
                a = K.Deferred().always(function() {
                    delete s.elem
                }),
                s = function() {
                    for (var t = Ut || j(), n = Math.max(0, u.startTime + u.duration - t), r = 1 - (n / u.duration || 0), i = 0, o = u.tweens.length; i < o; i++) u.tweens[i].run(r);
                    return a.notifyWith(e, [u, r, n]), r < 1 && o ? n : (a.resolveWith(e, [u]), !1)
                },
                u = a.promise({
                    elem: e,
                    props: K.extend({}, t),
                    opts: K.extend(!0, {
                        specialEasing: {}
                    }, n),
                    originalProperties: t,
                    originalOptions: n,
                    startTime: Ut || j(),
                    duration: n.duration,
                    tweens: [],
                    createTween: function(t, n, r) {
                        var i = K.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
                        return u.tweens.push(i), i
                    },
                    stop: function(t) {
                        for (var n = 0, r = t ? u.tweens.length : 0; n < r; n++) u.tweens[n].run(1);
                        return t ? a.resolveWith(e, [u, t]) : a.rejectWith(e, [u, t]), this
                    }
                }),
                l = u.props;
            for (M(l, u.opts.specialEasing); i < o; i++) if (r = Kt[i].call(u, e, l, u.opts)) return r;
            return O(u, l), K.isFunction(u.opts.start) && u.opts.start.call(e, u), K.fx.timer(K.extend(s, {
                anim: u,
                queue: u.opts.queue,
                elem: e
            })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
        }
        function M(e, t) {
            var n, r, i, o, a;
            for (n in e) if (r = K.camelCase(n), i = t[r], o = e[n], K.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), a = K.cssHooks[r], a && "expand" in a) {
                o = a.expand(o), delete e[r];
                for (n in o) n in e || (e[n] = o[n], t[n] = i)
            } else t[r] = i
        }
        function I(e, t, n) {
            var r, i, o, a, s, u, l, c, f = this,
                d = e.style,
                p = {},
                h = [],
                m = e.nodeType && g(e);
            n.queue || (l = K._queueHooks(e, "fx"), null == l.unqueued && (l.unqueued = 0, c = l.empty.fire, l.empty.fire = function() {
                l.unqueued || c()
            }), l.unqueued++, f.always(function() {
                f.always(function() {
                    l.unqueued--, K.queue(e, "fx").length || l.empty.fire()
                })
            })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [d.overflow, d.overflowX, d.overflowY], "inline" === K.css(e, "display") && "none" === K.css(e, "float") && (K.support.inlineBlockNeedsLayout && "inline" !== T(e.nodeName) ? d.zoom = 1 : d.display = "inline-block")), n.overflow && (d.overflow = "hidden", K.support.shrinkWrapBlocks || f.done(function() {
                d.overflow = n.overflow[0], d.overflowX = n.overflow[1], d.overflowY = n.overflow[2]
            }));
            for (r in t) if (o = t[r], Vt.exec(o)) {
                if (delete t[r], o === (m ? "hide" : "show")) continue;
                h.push(r)
            }
            if (a = h.length) for (s = K._data(e, "fxshow") || K._data(e, "fxshow", {}), m ? K(e).show() : f.done(function() {
                K(e).hide()
            }), f.done(function() {
                var t;
                K.removeData(e, "fxshow", !0);
                for (t in p) K.style(e, t, p[t])
            }), r = 0; r < a; r++) i = h[r], u = f.createTween(i, m ? s[i] : 0), p[i] = s[i] || K.style(e, i), i in s || (s[i] = u.start, m && (u.end = u.start, u.start = "width" === i || "height" === i ? 1 : 0))
        }
        function L(e, t, n, r, i) {
            return new L.prototype.init(e, t, n, r, i)
        }
        function P(e, t) {
            var n, r = {
                    height: e
                },
                i = 0;
            for (t = t ? 1 : 0; i < 4; i += 2 - t) n = vt[i], r["margin" + n] = r["padding" + n] = e;
            return t && (r.opacity = r.width = e), r
        }
        function R(e) {
            return K.isWindow(e) ? e : 9 === e.nodeType && (e.defaultView || e.parentWindow)
        }
        var H, F, B = e.document,
            q = e.location,
            z = e.navigator,
            G = e.jQuery,
            W = e.$,
            J = Array.prototype.push,
            U = Array.prototype.slice,
            X = Array.prototype.indexOf,
            V = Object.prototype.toString,
            Y = Object.prototype.hasOwnProperty,
            Q = String.prototype.trim,
            K = function(e, t) {
                return new K.fn.init(e, t, H)
            },
            Z = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,
            ee = /\S/,
            te = /\s+/,
            ne = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            re = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
            ie = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
            oe = /^[\],:{}\s]*$/,
            ae = /(?:^|:|,)(?:\s*\[)+/g,
            se = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
            ue = /"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,
            le = /^-ms-/,
            ce = /-([\da-z])/gi,
            fe = function(e, t) {
                return (t + "").toUpperCase()
            },
            de = function() {
                B.addEventListener ? (B.removeEventListener("DOMContentLoaded", de, !1), K.ready()) : "complete" === B.readyState && (B.detachEvent("onreadystatechange", de), K.ready())
            },
            pe = {};
        K.fn = K.prototype = {
            constructor: K,
            init: function(e, n, r) {
                var i, o, a;
                if (!e) return this;
                if (e.nodeType) return this.context = this[0] = e, this.length = 1, this;
                if ("string" == typeof e) {
                    if (i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : re.exec(e), i && (i[1] || !n)) {
                        if (i[1]) return n = n instanceof K ? n[0] : n, a = n && n.nodeType ? n.ownerDocument || n : B, e = K.parseHTML(i[1], a, !0), ie.test(i[1]) && K.isPlainObject(n) && this.attr.call(e, n, !0), K.merge(this, e);
                        if (o = B.getElementById(i[2]), o && o.parentNode) {
                            if (o.id !== i[2]) return r.find(e);
                            this.length = 1, this[0] = o
                        }
                        return this.context = B, this.selector = e, this
                    }
                    return !n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e)
                }
                return K.isFunction(e) ? r.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), K.makeArray(e, this))
            },
            selector: "",
            jquery: "1.8.2",
            length: 0,
            size: function() {
                return this.length
            },
            toArray: function() {
                return U.call(this)
            },
            get: function(e) {
                return null == e ? this.toArray() : e < 0 ? this[this.length + e] : this[e]
            },
            pushStack: function(e, t, n) {
                var r = K.merge(this.constructor(), e);
                return r.prevObject = this, r.context = this.context, "find" === t ? r.selector = this.selector + (this.selector ? " " : "") + n : t && (r.selector = this.selector + "." + t + "(" + n + ")"), r
            },
            each: function(e, t) {
                return K.each(this, e, t)
            },
            ready: function(e) {
                return K.ready.promise().done(e), this
            },
            eq: function(e) {
                return e = +e, e === -1 ? this.slice(e) : this.slice(e, e + 1)
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            slice: function() {
                return this.pushStack(U.apply(this, arguments), "slice", U.call(arguments).join(","))
            },
            map: function(e) {
                return this.pushStack(K.map(this, function(t, n) {
                    return e.call(t, n, t)
                }))
            },
            end: function() {
                return this.prevObject || this.constructor(null)
            },
            push: J,
            sort: [].sort,
            splice: [].splice
        }, K.fn.init.prototype = K.fn, K.extend = K.fn.extend = function() {
            var e, n, r, i, o, a, s = arguments[0] || {},
                u = 1,
                l = arguments.length,
                c = !1;
            for ("boolean" == typeof s && (c = s, s = arguments[1] || {}, u = 2), "object" != typeof s && !K.isFunction(s) && (s = {}), l === u && (s = this, --u); u < l; u++) if (null != (e = arguments[u])) for (n in e) r = s[n], i = e[n], s !== i && (c && i && (K.isPlainObject(i) || (o = K.isArray(i))) ? (o ? (o = !1, a = r && K.isArray(r) ? r : []) : a = r && K.isPlainObject(r) ? r : {}, s[n] = K.extend(c, a, i)) : i !== t && (s[n] = i));
            return s
        }, K.extend({
            noConflict: function(t) {
                return e.$ === K && (e.$ = W), t && e.jQuery === K && (e.jQuery = G), K
            },
            isReady: !1,
            readyWait: 1,
            holdReady: function(e) {
                e ? K.readyWait++ : K.ready(!0)
            },
            ready: function(e) {
                if (e === !0 ? !--K.readyWait : !K.isReady) {
                    if (!B.body) return setTimeout(K.ready, 1);
                    K.isReady = !0, e !== !0 && --K.readyWait > 0 || (F.resolveWith(B, [K]), K.fn.trigger && K(B).trigger("ready").off("ready"))
                }
            },
            isFunction: function(e) {
                return "function" === K.type(e)
            },
            isArray: Array.isArray ||
            function(e) {
                return "array" === K.type(e)
            },
            isWindow: function(e) {
                return null != e && e == e.window
            },
            isNumeric: function(e) {
                return !isNaN(parseFloat(e)) && isFinite(e)
            },
            type: function(e) {
                return null == e ? String(e) : pe[V.call(e)] || "object"
            },
            isPlainObject: function(e) {
                if (!e || "object" !== K.type(e) || e.nodeType || K.isWindow(e)) return !1;
                try {
                    if (e.constructor && !Y.call(e, "constructor") && !Y.call(e.constructor.prototype, "isPrototypeOf")) return !1
                } catch (n) {
                    return !1
                }
                var r;
                for (r in e);
                return r === t || Y.call(e, r)
            },
            isEmptyObject: function(e) {
                var t;
                for (t in e) return !1;
                return !0
            },
            error: function(e) {
                throw new Error(e)
            },
            parseHTML: function(e, t, n) {
                var r;
                return e && "string" == typeof e ? ("boolean" == typeof t && (n = t, t = 0), t = t || B, (r = ie.exec(e)) ? [t.createElement(r[1])] : (r = K.buildFragment([e], t, n ? null : []), K.merge([], (r.cacheable ? K.clone(r.fragment) : r.fragment).childNodes))) : null
            },
            parseJSON: function(t) {
                return t && "string" == typeof t ? (t = K.trim(t), e.JSON && e.JSON.parse ? e.JSON.parse(t) : oe.test(t.replace(se, "@").replace(ue, "]").replace(ae, "")) ? new Function("return " + t)() : void K.error("Invalid JSON: " + t)) : null
            },
            parseXML: function(n) {
                var r, i;
                if (!n || "string" != typeof n) return null;
                try {
                    e.DOMParser ? (i = new DOMParser, r = i.parseFromString(n, "text/xml")) : (r = new ActiveXObject("Microsoft.XMLDOM"), r.async = "false", r.loadXML(n))
                } catch (o) {
                    r = t
                }
                return (!r || !r.documentElement || r.getElementsByTagName("parsererror").length) && K.error("Invalid XML: " + n), r
            },
            noop: function() {},
            globalEval: function(t) {
                t && ee.test(t) && (e.execScript ||
                    function(t) {
                        e.eval.call(e, t)
                    })(t)
            },
            camelCase: function(e) {
                return e.replace(le, "ms-").replace(ce, fe)
            },
            nodeName: function(e, t) {
                return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
            },
            each: function(e, n, r) {
                var i, o = 0,
                    a = e.length,
                    s = a === t || K.isFunction(e);
                if (r) if (s) {
                    for (i in e) if (n.apply(e[i], r) === !1) break
                } else for (; o < a && n.apply(e[o++], r) !== !1;);
                else if (s) {
                    for (i in e) if (n.call(e[i], i, e[i]) === !1) break
                } else for (; o < a && n.call(e[o], o, e[o++]) !== !1;);
                return e
            },
            trim: Q && !Q.call("\ufeff ") ?
                function(e) {
                    return null == e ? "" : Q.call(e)
                } : function(e) {
                    return null == e ? "" : (e + "").replace(ne, "")
                },
            makeArray: function(e, t) {
                var n, r = t || [];
                return null != e && (n = K.type(e), null == e.length || "string" === n || "function" === n || "regexp" === n || K.isWindow(e) ? J.call(r, e) : K.merge(r, e)), r
            },
            inArray: function(e, t, n) {
                var r;
                if (t) {
                    if (X) return X.call(t, e, n);
                    for (r = t.length, n = n ? n < 0 ? Math.max(0, r + n) : n : 0; n < r; n++) if (n in t && t[n] === e) return n
                }
                return -1
            },
            merge: function(e, n) {
                var r = n.length,
                    i = e.length,
                    o = 0;
                if ("number" == typeof r) for (; o < r; o++) e[i++] = n[o];
                else for (; n[o] !== t;) e[i++] = n[o++];
                return e.length = i, e
            },
            grep: function(e, t, n) {
                var r, i = [],
                    o = 0,
                    a = e.length;
                for (n = !! n; o < a; o++) r = !! t(e[o], o), n !== r && i.push(e[o]);
                return i
            },
            map: function(e, n, r) {
                var i, o, a = [],
                    s = 0,
                    u = e.length,
                    l = e instanceof K || u !== t && "number" == typeof u && (u > 0 && e[0] && e[u - 1] || 0 === u || K.isArray(e));
                if (l) for (; s < u; s++) i = n(e[s], s, r), null != i && (a[a.length] = i);
                else for (o in e) i = n(e[o], o, r), null != i && (a[a.length] = i);
                return a.concat.apply([], a)
            },
            guid: 1,
            proxy: function(e, n) {
                var r, i, o;
                return "string" == typeof n && (r = e[n], n = e, e = r), K.isFunction(e) ? (i = U.call(arguments, 2), o = function() {
                    return e.apply(n, i.concat(U.call(arguments)))
                }, o.guid = e.guid = e.guid || K.guid++, o) : t
            },
            access: function(e, n, r, i, o, a, s) {
                var u, l = null == r,
                    c = 0,
                    f = e.length;
                if (r && "object" == typeof r) {
                    for (c in r) K.access(e, n, c, r[c], 1, a, i);
                    o = 1
                } else if (i !== t) {
                    if (u = s === t && K.isFunction(i), l && (u ? (u = n, n = function(e, t, n) {
                        return u.call(K(e), n)
                    }) : (n.call(e, i), n = null)), n) for (; c < f; c++) n(e[c], r, u ? i.call(e[c], c, n(e[c], r)) : i, s);
                    o = 1
                }
                return o ? e : l ? n.call(e) : f ? n(e[0], r) : a
            },
            now: function() {
                return (new Date).getTime()
            }
        }), K.ready.promise = function(t) {
            if (!F) if (F = K.Deferred(), "complete" === B.readyState) setTimeout(K.ready, 1);
            else if (B.addEventListener) B.addEventListener("DOMContentLoaded", de, !1), e.addEventListener("load", K.ready, !1);
            else {
                B.attachEvent("onreadystatechange", de), e.attachEvent("onload", K.ready);
                var n = !1;
                try {
                    n = null == e.frameElement && B.documentElement
                } catch (r) {}
                n && n.doScroll &&
                function i() {
                    if (!K.isReady) {
                        try {
                            n.doScroll("left")
                        } catch (e) {
                            return setTimeout(i, 50)
                        }
                        K.ready()
                    }
                }()
            }
            return F.promise(t)
        }, K.each("Boolean Number String Function Array Date RegExp Object".split(" "), function(e, t) {
            pe["[object " + t + "]"] = t.toLowerCase()
        }), H = K(B);
        var he = {};
        K.Callbacks = function(e) {
            e = "string" == typeof e ? he[e] || n(e) : K.extend({}, e);
            var r, i, o, a, s, u, l = [],
                c = !e.once && [],
                f = function(t) {
                    for (r = e.memory && t, i = !0, u = a || 0, a = 0, s = l.length, o = !0; l && u < s; u++) if (l[u].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
                        r = !1;
                        break
                    }
                    o = !1, l && (c ? c.length && f(c.shift()) : r ? l = [] : d.disable())
                },
                d = {
                    add: function() {
                        if (l) {
                            var t = l.length;
                            !
                                function n(t) {
                                    K.each(t, function(t, r) {
                                        var i = K.type(r);
                                        "function" !== i || e.unique && d.has(r) ? r && r.length && "string" !== i && n(r) : l.push(r)
                                    })
                                }(arguments), o ? s = l.length : r && (a = t, f(r))
                        }
                        return this
                    },
                    remove: function() {
                        return l && K.each(arguments, function(e, t) {
                            for (var n;
                                 (n = K.inArray(t, l, n)) > -1;) l.splice(n, 1), o && (n <= s && s--, n <= u && u--)
                        }), this
                    },
                    has: function(e) {
                        return K.inArray(e, l) > -1
                    },
                    empty: function() {
                        return l = [], this
                    },
                    disable: function() {
                        return l = c = r = t, this
                    },
                    disabled: function() {
                        return !l
                    },
                    lock: function() {
                        return c = t, r || d.disable(), this
                    },
                    locked: function() {
                        return !c
                    },
                    fireWith: function(e, t) {
                        return t = t || [], t = [e, t.slice ? t.slice() : t], l && (!i || c) && (o ? c.push(t) : f(t)), this
                    },
                    fire: function() {
                        return d.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!i
                    }
                };
            return d
        }, K.extend({
            Deferred: function(e) {
                var t = [
                        ["resolve", "done", K.Callbacks("once memory"), "resolved"],
                        ["reject", "fail", K.Callbacks("once memory"), "rejected"],
                        ["notify", "progress", K.Callbacks("memory")]
                    ],
                    n = "pending",
                    r = {
                        state: function() {
                            return n
                        },
                        always: function() {
                            return i.done(arguments).fail(arguments), this
                        },
                        then: function() {
                            var e = arguments;
                            return K.Deferred(function(n) {
                                K.each(t, function(t, r) {
                                    var o = r[0],
                                        a = e[t];
                                    i[r[1]](K.isFunction(a) ?
                                        function() {
                                            var e = a.apply(this, arguments);
                                            e && K.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o + "With"](this === i ? n : this, [e])
                                        } : n[o])
                                }), e = null
                            }).promise()
                        },
                        promise: function(e) {
                            return null != e ? K.extend(e, r) : r
                        }
                    },
                    i = {};
                return r.pipe = r.then, K.each(t, function(e, o) {
                    var a = o[2],
                        s = o[3];
                    r[o[1]] = a.add, s && a.add(function() {
                        n = s
                    }, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = a.fire, i[o[0] + "With"] = a.fireWith
                }), r.promise(i), e && e.call(i, i), i
            },
            when: function(e) {
                var t, n, r, i = 0,
                    o = U.call(arguments),
                    a = o.length,
                    s = 1 !== a || e && K.isFunction(e.promise) ? a : 0,
                    u = 1 === s ? e : K.Deferred(),
                    l = function(e, n, r) {
                        return function(i) {
                            n[e] = this, r[e] = arguments.length > 1 ? U.call(arguments) : i, r === t ? u.notifyWith(n, r) : --s || u.resolveWith(n, r)
                        }
                    };
                if (a > 1) for (t = new Array(a), n = new Array(a), r = new Array(a); i < a; i++) o[i] && K.isFunction(o[i].promise) ? o[i].promise().done(l(i, r, o)).fail(u.reject).progress(l(i, n, t)) : --s;
                return s || u.resolveWith(r, o), u.promise()
            }
        }), K.support = function() {
            var t, n, r, i, o, a, s, u, l, c, f, d = B.createElement("div");
            if (d.setAttribute("className", "t"), d.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = d.getElementsByTagName("*"), r = d.getElementsByTagName("a")[0], r.style.cssText = "top:1px;float:left;opacity:.5", !n || !n.length) return {};
            i = B.createElement("select"), o = i.appendChild(B.createElement("option")), a = d.getElementsByTagName("input")[0], t = {
                leadingWhitespace: 3 === d.firstChild.nodeType,
                tbody: !d.getElementsByTagName("tbody").length,
                htmlSerialize: !! d.getElementsByTagName("link").length,
                style: /top/.test(r.getAttribute("style")),
                hrefNormalized: "/a" === r.getAttribute("href"),
                opacity: /^0.5/.test(r.style.opacity),
                cssFloat: !! r.style.cssFloat,
                checkOn: "on" === a.value,
                optSelected: o.selected,
                getSetAttribute: "t" !== d.className,
                enctype: !! B.createElement("form").enctype,
                html5Clone: "<:nav></:nav>" !== B.createElement("nav").cloneNode(!0).outerHTML,
                boxModel: "CSS1Compat" === B.compatMode,
                submitBubbles: !0,
                changeBubbles: !0,
                focusinBubbles: !1,
                deleteExpando: !0,
                noCloneEvent: !0,
                inlineBlockNeedsLayout: !1,
                shrinkWrapBlocks: !1,
                reliableMarginRight: !0,
                boxSizingReliable: !0,
                pixelPosition: !1
            }, a.checked = !0, t.noCloneChecked = a.cloneNode(!0).checked, i.disabled = !0, t.optDisabled = !o.disabled;
            try {
                delete d.test
            } catch (p) {
                t.deleteExpando = !1
            }
            if (!d.addEventListener && d.attachEvent && d.fireEvent && (d.attachEvent("onclick", f = function() {
                t.noCloneEvent = !1
            }), d.cloneNode(!0).fireEvent("onclick"), d.detachEvent("onclick", f)), a = B.createElement("input"), a.value = "t", a.setAttribute("type", "radio"), t.radioValue = "t" === a.value, a.setAttribute("checked", "checked"), a.setAttribute("name", "t"), d.appendChild(a), s = B.createDocumentFragment(), s.appendChild(d.lastChild), t.checkClone = s.cloneNode(!0).cloneNode(!0).lastChild.checked, t.appendChecked = a.checked, s.removeChild(a), s.appendChild(d), d.attachEvent) for (l in {
                submit: !0,
                change: !0,
                focusin: !0
            }) u = "on" + l, c = u in d, c || (d.setAttribute(u, "return;"), c = "function" == typeof d[u]), t[l + "Bubbles"] = c;
            return K(function() {
                var n, r, i, o, a = "padding:0;margin:0;border:0;display:block;overflow:hidden;",
                    s = B.getElementsByTagName("body")[0];
                s && (n = B.createElement("div"), n.style.cssText = "visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px", s.insertBefore(n, s.firstChild), r = B.createElement("div"), n.appendChild(r), r.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", i = r.getElementsByTagName("td"), i[0].style.cssText = "padding:0;margin:0;border:0;display:none", c = 0 === i[0].offsetHeight, i[0].style.display = "", i[1].style.display = "none", t.reliableHiddenOffsets = c && 0 === i[0].offsetHeight, r.innerHTML = "", r.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", t.boxSizing = 4 === r.offsetWidth, t.doesNotIncludeMarginInBodyOffset = 1 !== s.offsetTop, e.getComputedStyle && (t.pixelPosition = "1%" !== (e.getComputedStyle(r, null) || {}).top, t.boxSizingReliable = "4px" === (e.getComputedStyle(r, null) || {
                    width: "4px"
                }).width, o = B.createElement("div"), o.style.cssText = r.style.cssText = a, o.style.marginRight = o.style.width = "0", r.style.width = "1px", r.appendChild(o), t.reliableMarginRight = !parseFloat((e.getComputedStyle(o, null) || {}).marginRight)), "undefined" != typeof r.style.zoom && (r.innerHTML = "", r.style.cssText = a + "width:1px;padding:1px;display:inline;zoom:1", t.inlineBlockNeedsLayout = 3 === r.offsetWidth, r.style.display = "block", r.style.overflow = "visible", r.innerHTML = "<div></div>", r.firstChild.style.width = "5px", t.shrinkWrapBlocks = 3 !== r.offsetWidth, n.style.zoom = 1), s.removeChild(n), n = r = i = o = null)
            }), s.removeChild(d), n = r = i = o = a = s = d = null, t
        }();
        var me = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
            ve = /([A-Z])/g;
        K.extend({
            cache: {},
            deletedIds: [],
            uuid: 0,
            expando: "jQuery" + (K.fn.jquery + Math.random()).replace(/\D/g, ""),
            noData: {
                embed: !0,
                object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
                applet: !0
            },
            hasData: function(e) {
                return e = e.nodeType ? K.cache[e[K.expando]] : e[K.expando], !! e && !i(e)
            },
            data: function(e, n, r, i) {
                if (K.acceptData(e)) {
                    var o, a, s = K.expando,
                        u = "string" == typeof n,
                        l = e.nodeType,
                        c = l ? K.cache : e,
                        f = l ? e[s] : e[s] && s;
                    if (f && c[f] && (i || c[f].data) || !u || r !== t) return f || (l ? e[s] = f = K.deletedIds.pop() || K.guid++ : f = s), c[f] || (c[f] = {}, l || (c[f].toJSON = K.noop)), "object" != typeof n && "function" != typeof n || (i ? c[f] = K.extend(c[f], n) : c[f].data = K.extend(c[f].data, n)), o = c[f], i || (o.data || (o.data = {}), o = o.data), r !== t && (o[K.camelCase(n)] = r), u ? (a = o[n], null == a && (a = o[K.camelCase(n)])) : a = o, a
                }
            },
            removeData: function(e, t, n) {
                if (K.acceptData(e)) {
                    var r, o, a, s = e.nodeType,
                        u = s ? K.cache : e,
                        l = s ? e[K.expando] : K.expando;
                    if (u[l]) {
                        if (t && (r = n ? u[l] : u[l].data)) {
                            K.isArray(t) || (t in r ? t = [t] : (t = K.camelCase(t), t = t in r ? [t] : t.split(" ")));
                            for (o = 0, a = t.length; o < a; o++) delete r[t[o]];
                            if (!(n ? i : K.isEmptyObject)(r)) return
                        }(n || (delete u[l].data, i(u[l]))) && (s ? K.cleanData([e], !0) : K.support.deleteExpando || u != u.window ? delete u[l] : u[l] = null)
                    }
                }
            },
            _data: function(e, t, n) {
                return K.data(e, t, n, !0)
            },
            acceptData: function(e) {
                var t = e.nodeName && K.noData[e.nodeName.toLowerCase()];
                return !t || t !== !0 && e.getAttribute("classid") === t
            }
        }), K.fn.extend({
            data: function(e, n) {
                var i, o, a, s, u, l = this[0],
                    c = 0,
                    f = null;
                if (e === t) {
                    if (this.length && (f = K.data(l), 1 === l.nodeType && !K._data(l, "parsedAttrs"))) {
                        for (a = l.attributes, u = a.length; c < u; c++) s = a[c].name, s.indexOf("data-") || (s = K.camelCase(s.substring(5)), r(l, s, f[s]));
                        K._data(l, "parsedAttrs", !0)
                    }
                    return f
                }
                return "object" == typeof e ? this.each(function() {
                    K.data(this, e)
                }) : (i = e.split(".", 2), i[1] = i[1] ? "." + i[1] : "", o = i[1] + "!", K.access(this, function(n) {
                    return n === t ? (f = this.triggerHandler("getData" + o, [i[0]]), f === t && l && (f = K.data(l, e), f = r(l, e, f)), f === t && i[1] ? this.data(i[0]) : f) : (i[1] = n, void this.each(function() {
                        var t = K(this);
                        t.triggerHandler("setData" + o, i), K.data(this, e, n), t.triggerHandler("changeData" + o, i)
                    }))
                }, null, n, arguments.length > 1, null, !1))
            },
            removeData: function(e) {
                return this.each(function() {
                    K.removeData(this, e)
                })
            }
        }), K.extend({
            queue: function(e, t, n) {
                var r;
                if (e) return t = (t || "fx") + "queue", r = K._data(e, t), n && (!r || K.isArray(n) ? r = K._data(e, t, K.makeArray(n)) : r.push(n)), r || []
            },
            dequeue: function(e, t) {
                t = t || "fx";
                var n = K.queue(e, t),
                    r = n.length,
                    i = n.shift(),
                    o = K._queueHooks(e, t),
                    a = function() {
                        K.dequeue(e, t)
                    };
                "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire()
            },
            _queueHooks: function(e, t) {
                var n = t + "queueHooks";
                return K._data(e, n) || K._data(e, n, {
                    empty: K.Callbacks("once memory").add(function() {
                        K.removeData(e, t + "queue", !0), K.removeData(e, n, !0)
                    })
                })
            }
        }), K.fn.extend({
            queue: function(e, n) {
                var r = 2;
                return "string" != typeof e && (n = e, e = "fx", r--), arguments.length < r ? K.queue(this[0], e) : n === t ? this : this.each(function() {
                    var t = K.queue(this, e, n);
                    K._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && K.dequeue(this, e)
                })
            },
            dequeue: function(e) {
                return this.each(function() {
                    K.dequeue(this, e)
                })
            },
            delay: function(e, t) {
                return e = K.fx ? K.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
                    var r = setTimeout(t, e);
                    n.stop = function() {
                        clearTimeout(r)
                    }
                })
            },
            clearQueue: function(e) {
                return this.queue(e || "fx", [])
            },
            promise: function(e, n) {
                var r, i = 1,
                    o = K.Deferred(),
                    a = this,
                    s = this.length,
                    u = function() {
                        --i || o.resolveWith(a, [a])
                    };
                for ("string" != typeof e && (n = e, e = t), e = e || "fx"; s--;) r = K._data(a[s], e + "queueHooks"), r && r.empty && (i++, r.empty.add(u));
                return u(), o.promise(n)
            }
        });
        var ge, ye, xe, be = /[\t\r\n]/g,
            we = /\r/g,
            Te = /^(?:button|input)$/i,
            Ee = /^(?:button|input|object|select|textarea)$/i,
            _e = /^a(?:rea|)$/i,
            Ne = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
            Ce = K.support.getSetAttribute;
        K.fn.extend({
            attr: function(e, t) {
                return K.access(this, K.attr, e, t, arguments.length > 1)
            },
            removeAttr: function(e) {
                return this.each(function() {
                    K.removeAttr(this, e)
                })
            },
            prop: function(e, t) {
                return K.access(this, K.prop, e, t, arguments.length > 1)
            },
            removeProp: function(e) {
                return e = K.propFix[e] || e, this.each(function() {
                    try {
                        this[e] = t, delete this[e]
                    } catch (n) {}
                })
            },
            addClass: function(e) {
                var t, n, r, i, o, a, s;
                if (K.isFunction(e)) return this.each(function(t) {
                    K(this).addClass(e.call(this, t, this.className))
                });
                if (e && "string" == typeof e) for (t = e.split(te), n = 0, r = this.length; n < r; n++) if (i = this[n], 1 === i.nodeType) if (i.className || 1 !== t.length) {
                    for (o = " " + i.className + " ", a = 0, s = t.length; a < s; a++) o.indexOf(" " + t[a] + " ") < 0 && (o += t[a] + " ");
                    i.className = K.trim(o)
                } else i.className = e;
                return this
            },
            removeClass: function(e) {
                var n, r, i, o, a, s, u;
                if (K.isFunction(e)) return this.each(function(t) {
                    K(this).removeClass(e.call(this, t, this.className))
                });
                if (e && "string" == typeof e || e === t) for (n = (e || "").split(te), s = 0, u = this.length; s < u; s++) if (i = this[s], 1 === i.nodeType && i.className) {
                    for (r = (" " + i.className + " ").replace(be, " "), o = 0, a = n.length; o < a; o++) for (; r.indexOf(" " + n[o] + " ") >= 0;) r = r.replace(" " + n[o] + " ", " ");
                    i.className = e ? K.trim(r) : ""
                }
                return this
            },
            toggleClass: function(e, t) {
                var n = typeof e,
                    r = "boolean" == typeof t;
                return K.isFunction(e) ? this.each(function(n) {
                    K(this).toggleClass(e.call(this, n, this.className, t), t)
                }) : this.each(function() {
                    if ("string" === n) for (var i, o = 0, a = K(this), s = t, u = e.split(te); i = u[o++];) s = r ? s : !a.hasClass(i), a[s ? "addClass" : "removeClass"](i);
                    else "undefined" !== n && "boolean" !== n || (this.className && K._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : K._data(this, "__className__") || "")
                })
            },
            hasClass: function(e) {
                for (var t = " " + e + " ", n = 0, r = this.length; n < r; n++) if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(be, " ").indexOf(t) >= 0) return !0;
                return !1
            },
            val: function(e) {
                var n, r, i, o = this[0]; {
                    if (arguments.length) return i = K.isFunction(e), this.each(function(r) {
                        var o, a = K(this);
                        1 === this.nodeType && (o = i ? e.call(this, r, a.val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : K.isArray(o) && (o = K.map(o, function(e) {
                            return null == e ? "" : e + ""
                        })), n = K.valHooks[this.type] || K.valHooks[this.nodeName.toLowerCase()], n && "set" in n && n.set(this, o, "value") !== t || (this.value = o))
                    });
                    if (o) return n = K.valHooks[o.type] || K.valHooks[o.nodeName.toLowerCase()], n && "get" in n && (r = n.get(o, "value")) !== t ? r : (r = o.value, "string" == typeof r ? r.replace(we, "") : null == r ? "" : r)
                }
            }
        }), K.extend({
            valHooks: {
                option: {
                    get: function(e) {
                        var t = e.attributes.value;
                        return !t || t.specified ? e.value : e.text
                    }
                },
                select: {
                    get: function(e) {
                        var t, n, r, i, o = e.selectedIndex,
                            a = [],
                            s = e.options,
                            u = "select-one" === e.type;
                        if (o < 0) return null;
                        for (n = u ? o : 0, r = u ? o + 1 : s.length; n < r; n++) if (i = s[n], i.selected && (K.support.optDisabled ? !i.disabled : null === i.getAttribute("disabled")) && (!i.parentNode.disabled || !K.nodeName(i.parentNode, "optgroup"))) {
                            if (t = K(i).val(), u) return t;
                            a.push(t)
                        }
                        return u && !a.length && s.length ? K(s[o]).val() : a
                    },
                    set: function(e, t) {
                        var n = K.makeArray(t);
                        return K(e).find("option").each(function() {
                            this.selected = K.inArray(K(this).val(), n) >= 0
                        }), n.length || (e.selectedIndex = -1), n
                    }
                }
            },
            attrFn: {},
            attr: function(e, n, r, i) {
                var o, a, s, u = e.nodeType;
                if (e && 3 !== u && 8 !== u && 2 !== u) return i && K.isFunction(K.fn[n]) ? K(e)[n](r) : "undefined" == typeof e.getAttribute ? K.prop(e, n, r) : (s = 1 !== u || !K.isXMLDoc(e), s && (n = n.toLowerCase(), a = K.attrHooks[n] || (Ne.test(n) ? ye : ge)), r !== t ? null === r ? void K.removeAttr(e, n) : a && "set" in a && s && (o = a.set(e, r, n)) !== t ? o : (e.setAttribute(n, r + ""), r) : a && "get" in a && s && null !== (o = a.get(e, n)) ? o : (o = e.getAttribute(n), null === o ? t : o))
            },
            removeAttr: function(e, t) {
                var n, r, i, o, a = 0;
                if (t && 1 === e.nodeType) for (r = t.split(te); a < r.length; a++) i = r[a], i && (n = K.propFix[i] || i, o = Ne.test(i), o || K.attr(e, i, ""), e.removeAttribute(Ce ? i : n), o && n in e && (e[n] = !1))
            },
            attrHooks: {
                type: {
                    set: function(e, t) {
                        if (Te.test(e.nodeName) && e.parentNode) K.error("type property can't be changed");
                        else if (!K.support.radioValue && "radio" === t && K.nodeName(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t), n && (e.value = n), t
                        }
                    }
                },
                value: {
                    get: function(e, t) {
                        return ge && K.nodeName(e, "button") ? ge.get(e, t) : t in e ? e.value : null
                    },
                    set: function(e, t, n) {
                        return ge && K.nodeName(e, "button") ? ge.set(e, t, n) : void(e.value = t)
                    }
                }
            },
            propFix: {
                tabindex: "tabIndex",
                readonly: "readOnly",
                "for": "htmlFor",
                "class": "className",
                maxlength: "maxLength",
                cellspacing: "cellSpacing",
                cellpadding: "cellPadding",
                rowspan: "rowSpan",
                colspan: "colSpan",
                usemap: "useMap",
                frameborder: "frameBorder",
                contenteditable: "contentEditable"
            },
            prop: function(e, n, r) {
                var i, o, a, s = e.nodeType;
                if (e && 3 !== s && 8 !== s && 2 !== s) return a = 1 !== s || !K.isXMLDoc(e), a && (n = K.propFix[n] || n, o = K.propHooks[n]), r !== t ? o && "set" in o && (i = o.set(e, r, n)) !== t ? i : e[n] = r : o && "get" in o && null !== (i = o.get(e, n)) ? i : e[n]
            },
            propHooks: {
                tabIndex: {
                    get: function(e) {
                        var n = e.getAttributeNode("tabindex");
                        return n && n.specified ? parseInt(n.value, 10) : Ee.test(e.nodeName) || _e.test(e.nodeName) && e.href ? 0 : t
                    }
                }
            }
        }), ye = {
            get: function(e, n) {
                var r, i = K.prop(e, n);
                return i === !0 || "boolean" != typeof i && (r = e.getAttributeNode(n)) && r.nodeValue !== !1 ? n.toLowerCase() : t
            },
            set: function(e, t, n) {
                var r;
                return t === !1 ? K.removeAttr(e, n) : (r = K.propFix[n] || n, r in e && (e[r] = !0), e.setAttribute(n, n.toLowerCase())), n
            }
        }, Ce || (xe = {
            name: !0,
            id: !0,
            coords: !0
        }, ge = K.valHooks.button = {
            get: function(e, n) {
                var r;
                return r = e.getAttributeNode(n), r && (xe[n] ? "" !== r.value : r.specified) ? r.value : t
            },
            set: function(e, t, n) {
                var r = e.getAttributeNode(n);
                return r || (r = B.createAttribute(n), e.setAttributeNode(r)), r.value = t + ""
            }
        }, K.each(["width", "height"], function(e, t) {
            K.attrHooks[t] = K.extend(K.attrHooks[t], {
                set: function(e, n) {
                    if ("" === n) return e.setAttribute(t, "auto"), n
                }
            })
        }), K.attrHooks.contenteditable = {
            get: ge.get,
            set: function(e, t, n) {
                "" === t && (t = "false"), ge.set(e, t, n)
            }
        }), K.support.hrefNormalized || K.each(["href", "src", "width", "height"], function(e, n) {
            K.attrHooks[n] = K.extend(K.attrHooks[n], {
                get: function(e) {
                    var r = e.getAttribute(n, 2);
                    return null === r ? t : r
                }
            })
        }), K.support.style || (K.attrHooks.style = {
            get: function(e) {
                return e.style.cssText.toLowerCase() || t
            },
            set: function(e, t) {
                return e.style.cssText = t + ""
            }
        }), K.support.optSelected || (K.propHooks.selected = K.extend(K.propHooks.selected, {
            get: function(e) {
                var t = e.parentNode;
                return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
            }
        })), K.support.enctype || (K.propFix.enctype = "encoding"), K.support.checkOn || K.each(["radio", "checkbox"], function() {
            K.valHooks[this] = {
                get: function(e) {
                    return null === e.getAttribute("value") ? "on" : e.value
                }
            }
        }), K.each(["radio", "checkbox"], function() {
            K.valHooks[this] = K.extend(K.valHooks[this], {
                set: function(e, t) {
                    if (K.isArray(t)) return e.checked = K.inArray(K(e).val(), t) >= 0
                }
            })
        });
        var Se = /^(?:textarea|input|select)$/i,
            Ae = /^([^\.]*|)(?:\.(.+)|)$/,
            ke = /(?:^|\s)hover(\.\S+|)\b/,
            $e = /^key/,
            je = /^(?:mouse|contextmenu)|click/,
            Oe = /^(?:focusinfocus|focusoutblur)$/,
            De = function(e) {
                return K.event.special.hover ? e : e.replace(ke, "mouseenter$1 mouseleave$1")
            };
        K.event = {
            add: function(e, n, r, i, o) {
                var a, s, u, l, c, f, d, p, h, m, v;
                if (3 !== e.nodeType && 8 !== e.nodeType && n && r && (a = K._data(e))) {
                    for (r.handler && (h = r, r = h.handler, o = h.selector), r.guid || (r.guid = K.guid++), u = a.events, u || (a.events = u = {}), s = a.handle, s || (a.handle = s = function(e) {
                        return "undefined" == typeof K || e && K.event.triggered === e.type ? t : K.event.dispatch.apply(s.elem, arguments)
                    }, s.elem = e), n = K.trim(De(n)).split(" "), l = 0; l < n.length; l++) c = Ae.exec(n[l]) || [], f = c[1], d = (c[2] || "").split(".").sort(), v = K.event.special[f] || {}, f = (o ? v.delegateType : v.bindType) || f, v = K.event.special[f] || {}, p = K.extend({
                        type: f,
                        origType: c[1],
                        data: i,
                        handler: r,
                        guid: r.guid,
                        selector: o,
                        needsContext: o && K.expr.match.needsContext.test(o),
                        namespace: d.join(".")
                    }, h), m = u[f], m || (m = u[f] = [], m.delegateCount = 0, v.setup && v.setup.call(e, i, d, s) !== !1 || (e.addEventListener ? e.addEventListener(f, s, !1) : e.attachEvent && e.attachEvent("on" + f, s))), v.add && (v.add.call(e, p), p.handler.guid || (p.handler.guid = r.guid)), o ? m.splice(m.delegateCount++, 0, p) : m.push(p), K.event.global[f] = !0;
                    e = null
                }
            },
            global: {},
            remove: function(e, t, n, r, i) {
                var o, a, s, u, l, c, f, d, p, h, m, v = K.hasData(e) && K._data(e);
                if (v && (d = v.events)) {
                    for (t = K.trim(De(t || "")).split(" "), o = 0; o < t.length; o++) if (a = Ae.exec(t[o]) || [], s = u = a[1], l = a[2], s) {
                        for (p = K.event.special[s] || {}, s = (r ? p.delegateType : p.bindType) || s, h = d[s] || [], c = h.length, l = l ? new RegExp("(^|\\.)" + l.split(".").sort().join("\\.(?:.*\\.|)") + "(\\.|$)") : null, f = 0; f < h.length; f++) m = h[f], (i || u === m.origType) && (!n || n.guid === m.guid) && (!l || l.test(m.namespace)) && (!r || r === m.selector || "**" === r && m.selector) && (h.splice(f--, 1), m.selector && h.delegateCount--, p.remove && p.remove.call(e, m));
                        0 === h.length && c !== h.length && ((!p.teardown || p.teardown.call(e, l, v.handle) === !1) && K.removeEvent(e, s, v.handle), delete d[s])
                    } else for (s in d) K.event.remove(e, s + t[o], n, r, !0);
                    K.isEmptyObject(d) && (delete v.handle, K.removeData(e, "events", !0))
                }
            },
            customEvent: {
                getData: !0,
                setData: !0,
                changeData: !0
            },
            trigger: function(n, r, i, o) {
                if (!i || 3 !== i.nodeType && 8 !== i.nodeType) {
                    var a, s, u, l, c, f, d, p, h, m, v = n.type || n,
                        g = [];
                    if (Oe.test(v + K.event.triggered)) return;
                    if (v.indexOf("!") >= 0 && (v = v.slice(0, -1), s = !0), v.indexOf(".") >= 0 && (g = v.split("."), v = g.shift(), g.sort()), (!i || K.event.customEvent[v]) && !K.event.global[v]) return;
                    if (n = "object" == typeof n ? n[K.expando] ? n : new K.Event(v, n) : new K.Event(v), n.type = v, n.isTrigger = !0, n.exclusive = s, n.namespace = g.join("."), n.namespace_re = n.namespace ? new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, f = v.indexOf(":") < 0 ? "on" + v : "", !i) {
                        a = K.cache;
                        for (u in a) a[u].events && a[u].events[v] && K.event.trigger(n, r, a[u].handle.elem, !0);
                        return
                    }
                    if (n.result = t, n.target || (n.target = i), r = null != r ? K.makeArray(r) : [], r.unshift(n), d = K.event.special[v] || {}, d.trigger && d.trigger.apply(i, r) === !1) return;
                    if (h = [
                        [i, d.bindType || v]
                    ], !o && !d.noBubble && !K.isWindow(i)) {
                        for (m = d.delegateType || v, l = Oe.test(m + v) ? i : i.parentNode, c = i; l; l = l.parentNode) h.push([l, m]), c = l;
                        c === (i.ownerDocument || B) && h.push([c.defaultView || c.parentWindow || e, m])
                    }
                    for (u = 0; u < h.length && !n.isPropagationStopped(); u++) l = h[u][0], n.type = h[u][1], p = (K._data(l, "events") || {})[n.type] && K._data(l, "handle"), p && p.apply(l, r), p = f && l[f], p && K.acceptData(l) && p.apply && p.apply(l, r) === !1 && n.preventDefault();
                    return n.type = v, !o && !n.isDefaultPrevented() && (!d._default || d._default.apply(i.ownerDocument, r) === !1) && ("click" !== v || !K.nodeName(i, "a")) && K.acceptData(i) && f && i[v] && ("focus" !== v && "blur" !== v || 0 !== n.target.offsetWidth) && !K.isWindow(i) && (c = i[f], c && (i[f] = null), K.event.triggered = v, i[v](), K.event.triggered = t, c && (i[f] = c)), n.result
                }
            },
            dispatch: function(n) {
                n = K.event.fix(n || e.event);
                var r, i, o, a, s, u, l, c, f, d = (K._data(this, "events") || {})[n.type] || [],
                    p = d.delegateCount,
                    h = U.call(arguments),
                    m = !n.exclusive && !n.namespace,
                    v = K.event.special[n.type] || {},
                    g = [];
                if (h[0] = n, n.delegateTarget = this, !v.preDispatch || v.preDispatch.call(this, n) !== !1) {
                    if (p && (!n.button || "click" !== n.type)) for (o = n.target; o != this; o = o.parentNode || this) if (o.disabled !== !0 || "click" !== n.type) {
                        for (s = {}, l = [], r = 0; r < p; r++) c = d[r], f = c.selector, s[f] === t && (s[f] = c.needsContext ? K(f, this).index(o) >= 0 : K.find(f, this, null, [o]).length), s[f] && l.push(c);
                        l.length && g.push({
                            elem: o,
                            matches: l
                        })
                    }
                    for (d.length > p && g.push({
                        elem: this,
                        matches: d.slice(p)
                    }), r = 0; r < g.length && !n.isPropagationStopped(); r++) for (u = g[r], n.currentTarget = u.elem, i = 0; i < u.matches.length && !n.isImmediatePropagationStopped(); i++) c = u.matches[i], (m || !n.namespace && !c.namespace || n.namespace_re && n.namespace_re.test(c.namespace)) && (n.data = c.data, n.handleObj = c, a = ((K.event.special[c.origType] || {}).handle || c.handler).apply(u.elem, h), a !== t && (n.result = a, a === !1 && (n.preventDefault(), n.stopPropagation())));
                    return v.postDispatch && v.postDispatch.call(this, n), n.result
                }
            },
            props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function(e, t) {
                    return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function(e, n) {
                    var r, i, o, a = n.button,
                        s = n.fromElement;
                    return null == e.pageX && null != n.clientX && (r = e.target.ownerDocument || B, i = r.documentElement, o = r.body, e.pageX = n.clientX + (i && i.scrollLeft || o && o.scrollLeft || 0) - (i && i.clientLeft || o && o.clientLeft || 0), e.pageY = n.clientY + (i && i.scrollTop || o && o.scrollTop || 0) - (i && i.clientTop || o && o.clientTop || 0)), !e.relatedTarget && s && (e.relatedTarget = s === e.target ? n.toElement : s), !e.which && a !== t && (e.which = 1 & a ? 1 : 2 & a ? 3 : 4 & a ? 2 : 0), e
                }
            },
            fix: function(e) {
                if (e[K.expando]) return e;
                var t, n, r = e,
                    i = K.event.fixHooks[e.type] || {},
                    o = i.props ? this.props.concat(i.props) : this.props;
                for (e = K.Event(r), t = o.length; t;) n = o[--t], e[n] = r[n];
                return e.target || (e.target = r.srcElement || B), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !! e.metaKey, i.filter ? i.filter(e, r) : e
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    delegateType: "focusin"
                },
                blur: {
                    delegateType: "focusout"
                },
                beforeunload: {
                    setup: function(e, t, n) {
                        K.isWindow(this) && (this.onbeforeunload = n)
                    },
                    teardown: function(e, t) {
                        this.onbeforeunload === t && (this.onbeforeunload = null)
                    }
                }
            },
            simulate: function(e, t, n, r) {
                var i = K.extend(new K.Event, n, {
                    type: e,
                    isSimulated: !0,
                    originalEvent: {}
                });
                r ? K.event.trigger(i, null, t) : K.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
            }
        }, K.event.handle = K.event.dispatch, K.removeEvent = B.removeEventListener ?
            function(e, t, n) {
                e.removeEventListener && e.removeEventListener(t, n, !1)
            } : function(e, t, n) {
                var r = "on" + t;
                e.detachEvent && ("undefined" == typeof e[r] && (e[r] = null), e.detachEvent(r, n))
            }, K.Event = function(e, t) {
            return this instanceof K.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? a : o) : this.type = e, t && K.extend(this, t), this.timeStamp = e && e.timeStamp || K.now(), this[K.expando] = !0, void 0) : new K.Event(e, t)
        }, K.Event.prototype = {
            preventDefault: function() {
                this.isDefaultPrevented = a;
                var e = this.originalEvent;
                e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
            },
            stopPropagation: function() {
                this.isPropagationStopped = a;
                var e = this.originalEvent;
                e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
            },
            stopImmediatePropagation: function() {
                this.isImmediatePropagationStopped = a, this.stopPropagation()
            },
            isDefaultPrevented: o,
            isPropagationStopped: o,
            isImmediatePropagationStopped: o
        }, K.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout"
        }, function(e, t) {
            K.event.special[e] = {
                delegateType: t,
                bindType: t,
                handle: function(e) {
                    var n, r = this,
                        i = e.relatedTarget,
                        o = e.handleObj;
                    o.selector;
                    return i && (i === r || K.contains(r, i)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
                }
            }
        }), K.support.submitBubbles || (K.event.special.submit = {
            setup: function() {
                return !K.nodeName(this, "form") && void K.event.add(this, "click._submit keypress._submit", function(e) {
                    var n = e.target,
                        r = K.nodeName(n, "input") || K.nodeName(n, "button") ? n.form : t;
                    r && !K._data(r, "_submit_attached") && (K.event.add(r, "submit._submit", function(e) {
                        e._submit_bubble = !0
                    }), K._data(r, "_submit_attached", !0))
                })
            },
            postDispatch: function(e) {
                e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && K.event.simulate("submit", this.parentNode, e, !0))
            },
            teardown: function() {
                return !K.nodeName(this, "form") && void K.event.remove(this, "._submit")
            }
        }), K.support.changeBubbles || (K.event.special.change = {
            setup: function() {
                return Se.test(this.nodeName) ? ("checkbox" !== this.type && "radio" !== this.type || (K.event.add(this, "propertychange._change", function(e) {
                    "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
                }), K.event.add(this, "click._change", function(e) {
                    this._just_changed && !e.isTrigger && (this._just_changed = !1), K.event.simulate("change", this, e, !0)
                })), !1) : void K.event.add(this, "beforeactivate._change", function(e) {
                    var t = e.target;
                    Se.test(t.nodeName) && !K._data(t, "_change_attached") && (K.event.add(t, "change._change", function(e) {
                        this.parentNode && !e.isSimulated && !e.isTrigger && K.event.simulate("change", this.parentNode, e, !0)
                    }), K._data(t, "_change_attached", !0))
                })
            },
            handle: function(e) {
                var t = e.target;
                if (this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type) return e.handleObj.handler.apply(this, arguments)
            },
            teardown: function() {
                return K.event.remove(this, "._change"), !Se.test(this.nodeName)
            }
        }), K.support.focusinBubbles || K.each({
            focus: "focusin",
            blur: "focusout"
        }, function(e, t) {
            var n = 0,
                r = function(e) {
                    K.event.simulate(t, e.target, K.event.fix(e), !0)
                };
            K.event.special[t] = {
                setup: function() {
                    0 === n++ && B.addEventListener(e, r, !0)
                },
                teardown: function() {
                    0 === --n && B.removeEventListener(e, r, !0)
                }
            }
        }), K.fn.extend({
            on: function(e, n, r, i, a) {
                var s, u;
                if ("object" == typeof e) {
                    "string" != typeof n && (r = r || n, n = t);
                    for (u in e) this.on(u, n, r, e[u], a);
                    return this
                }
                if (null == r && null == i ? (i = n, r = n = t) : null == i && ("string" == typeof n ? (i = r, r = t) : (i = r, r = n, n = t)), i === !1) i = o;
                else if (!i) return this;
                return 1 === a && (s = i, i = function(e) {
                    return K().off(e), s.apply(this, arguments)
                }, i.guid = s.guid || (s.guid = K.guid++)), this.each(function() {
                    K.event.add(this, e, i, r, n)
                })
            },
            one: function(e, t, n, r) {
                return this.on(e, t, n, r, 1)
            },
            off: function(e, n, r) {
                var i, a;
                if (e && e.preventDefault && e.handleObj) return i = e.handleObj, K(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                if ("object" == typeof e) {
                    for (a in e) this.off(a, n, e[a]);
                    return this
                }
                return n !== !1 && "function" != typeof n || (r = n, n = t), r === !1 && (r = o), this.each(function() {
                    K.event.remove(this, e, r, n)
                })
            },
            bind: function(e, t, n) {
                return this.on(e, null, t, n)
            },
            unbind: function(e, t) {
                return this.off(e, null, t)
            },
            live: function(e, t, n) {
                return K(this.context).on(e, this.selector, t, n), this
            },
            die: function(e, t) {
                return K(this.context).off(e, this.selector || "**", t), this
            },
            delegate: function(e, t, n, r) {
                return this.on(t, e, n, r)
            },
            undelegate: function(e, t, n) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
            },
            trigger: function(e, t) {
                return this.each(function() {
                    K.event.trigger(e, t, this)
                })
            },
            triggerHandler: function(e, t) {
                if (this[0]) return K.event.trigger(e, t, this[0], !0)
            },
            toggle: function(e) {
                var t = arguments,
                    n = e.guid || K.guid++,
                    r = 0,
                    i = function(n) {
                        var i = (K._data(this, "lastToggle" + e.guid) || 0) % r;
                        return K._data(this, "lastToggle" + e.guid, i + 1), n.preventDefault(), t[i].apply(this, arguments) || !1
                    };
                for (i.guid = n; r < t.length;) t[r++].guid = n;
                return this.click(i)
            },
            hover: function(e, t) {
                return this.mouseenter(e).mouseleave(t || e)
            }
        }), K.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
            K.fn[t] = function(e, n) {
                return null == n && (n = e, e = null), arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
            }, $e.test(t) && (K.event.fixHooks[t] = K.event.keyHooks), je.test(t) && (K.event.fixHooks[t] = K.event.mouseHooks)
        }), function(e, t) {
            function n(e, t, n, r) {
                n = n || [], t = t || j;
                var i, o, a, s, u = t.nodeType;
                if (!e || "string" != typeof e) return n;
                if (1 !== u && 9 !== u) return [];
                if (a = w(t), !a && !r && (i = ne.exec(e))) if (s = i[1]) {
                    if (9 === u) {
                        if (o = t.getElementById(s), !o || !o.parentNode) return n;
                        if (o.id === s) return n.push(o), n
                    } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(s)) && T(t, o) && o.id === s) return n.push(o), n
                } else {
                    if (i[2]) return L.apply(n, P.call(t.getElementsByTagName(e), 0)), n;
                    if ((s = i[3]) && de && t.getElementsByClassName) return L.apply(n, P.call(t.getElementsByClassName(s), 0)), n
                }
                return m(e.replace(Q, "$1"), t, n, r, a)
            }
            function r(e) {
                return function(t) {
                    var n = t.nodeName.toLowerCase();
                    return "input" === n && t.type === e
                }
            }
            function i(e) {
                return function(t) {
                    var n = t.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && t.type === e
                }
            }
            function o(e) {
                return H(function(t) {
                    return t = +t, H(function(n, r) {
                        for (var i, o = e([], n.length, t), a = o.length; a--;) n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                    })
                })
            }
            function a(e, t, n) {
                if (e === t) return n;
                for (var r = e.nextSibling; r;) {
                    if (r === t) return -1;
                    r = r.nextSibling
                }
                return 1
            }
            function s(e, t) {
                var r, i, o, a, s, u, l, c = q[k][e];
                if (c) return t ? 0 : c.slice(0);
                for (s = e, u = [], l = x.preFilter; s;) {
                    r && !(i = Z.exec(s)) || (i && (s = s.slice(i[0].length)), u.push(o = [])), r = !1, (i = ee.exec(s)) && (o.push(r = new $(i.shift())), s = s.slice(r.length), r.type = i[0].replace(Q, " "));
                    for (a in x.filter)(i = se[a].exec(s)) && (!l[a] || (i = l[a](i, j, !0))) && (o.push(r = new $(i.shift())), s = s.slice(r.length), r.type = a, r.matches = i);
                    if (!r) break
                }
                return t ? s.length : s ? n.error(e) : q(e, u).slice(0)
            }
            function u(e, t, n) {
                var r = t.dir,
                    i = n && "parentNode" === t.dir,
                    o = M++;
                return t.first ?
                    function(t, n, o) {
                        for (; t = t[r];) if (i || 1 === t.nodeType) return e(t, n, o)
                    } : function(t, n, a) {
                        if (a) {
                            for (; t = t[r];) if ((i || 1 === t.nodeType) && e(t, n, a)) return t
                        } else for (var s, u = D + " " + o + " ", l = u + g; t = t[r];) if (i || 1 === t.nodeType) {
                            if ((s = t[k]) === l) return t.sizset;
                            if ("string" == typeof s && 0 === s.indexOf(u)) {
                                if (t.sizset) return t
                            } else {
                                if (t[k] = l, e(t, n, a)) return t.sizset = !0, t;
                                t.sizset = !1
                            }
                        }
                    }
            }
            function l(e) {
                return e.length > 1 ?
                    function(t, n, r) {
                        for (var i = e.length; i--;) if (!e[i](t, n, r)) return !1;
                        return !0
                    } : e[0]
            }
            function c(e, t, n, r, i) {
                for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)(o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
                return a
            }
            function f(e, t, n, r, i, o) {
                return r && !r[k] && (r = f(r)), i && !i[k] && (i = f(i, o)), H(function(o, a, s, u) {
                    if (!o || !i) {
                        var l, f, d, p = [],
                            m = [],
                            v = a.length,
                            g = o || h(t || "*", s.nodeType ? [s] : s, [], o),
                            y = !e || !o && t ? g : c(g, p, e, s, u),
                            x = n ? i || (o ? e : v || r) ? [] : a : y;
                        if (n && n(y, x, s, u), r) for (d = c(x, m), r(d, [], s, u), l = d.length; l--;)(f = d[l]) && (x[m[l]] = !(y[m[l]] = f));
                        if (o) for (l = e && x.length; l--;)(f = x[l]) && (o[p[l]] = !(a[p[l]] = f));
                        else x = c(x === a ? x.splice(v, x.length) : x), i ? i(null, a, x, u) : L.apply(a, x)
                    }
                })
            }
            function d(e) {
                for (var t, n, r, i = e.length, o = x.relative[e[0].type], a = o || x.relative[" "], s = o ? 1 : 0, c = u(function(e) {
                    return e === t
                }, a, !0), p = u(function(e) {
                    return R.call(t, e) > -1
                }, a, !0), h = [function(e, n, r) {
                    return !o && (r || n !== C) || ((t = n).nodeType ? c(e, n, r) : p(e, n, r))
                }]; s < i; s++) if (n = x.relative[e[s].type]) h = [u(l(h), n)];
                else {
                    if (n = x.filter[e[s].type].apply(null, e[s].matches), n[k]) {
                        for (r = ++s; r < i && !x.relative[e[r].type]; r++);
                        return f(s > 1 && l(h), s > 1 && e.slice(0, s - 1).join("").replace(Q, "$1"), n, s < r && d(e.slice(s, r)), r < i && d(e = e.slice(r)), r < i && e.join(""))
                    }
                    h.push(n)
                }
                return l(h)
            }
            function p(e, t) {
                var r = t.length > 0,
                    i = e.length > 0,
                    o = function(a, s, u, l, f) {
                        var d, p, h, m = [],
                            v = 0,
                            y = "0",
                            b = a && [],
                            w = null != f,
                            T = C,
                            E = a || i && x.find.TAG("*", f && s.parentNode || s),
                            _ = D += null == T ? 1 : Math.E;
                        for (w && (C = s !== j && s, g = o.el); null != (d = E[y]); y++) {
                            if (i && d) {
                                for (p = 0; h = e[p]; p++) if (h(d, s, u)) {
                                    l.push(d);
                                    break
                                }
                                w && (D = _, g = ++o.el)
                            }
                            r && ((d = !h && d) && v--, a && b.push(d))
                        }
                        if (v += y, r && y !== v) {
                            for (p = 0; h = t[p]; p++) h(b, m, s, u);
                            if (a) {
                                if (v > 0) for (; y--;)!b[y] && !m[y] && (m[y] = I.call(l));
                                m = c(m)
                            }
                            L.apply(l, m), w && !a && m.length > 0 && v + t.length > 1 && n.uniqueSort(l)
                        }
                        return w && (D = _, C = T), b
                    };
                return o.el = 0, r ? H(o) : o
            }
            function h(e, t, r, i) {
                for (var o = 0, a = t.length; o < a; o++) n(e, t[o], r, i);
                return r
            }
            function m(e, t, n, r, i) {
                var o, a, u, l, c, f = s(e);
                f.length;
                if (!r && 1 === f.length) {
                    if (a = f[0] = f[0].slice(0), a.length > 2 && "ID" === (u = a[0]).type && 9 === t.nodeType && !i && x.relative[a[1].type]) {
                        if (t = x.find.ID(u.matches[0].replace(ae, ""), t, i)[0], !t) return n;
                        e = e.slice(a.shift().length)
                    }
                    for (o = se.POS.test(e) ? -1 : a.length - 1; o >= 0 && (u = a[o], !x.relative[l = u.type]); o--) if ((c = x.find[l]) && (r = c(u.matches[0].replace(ae, ""), re.test(a[0].type) && t.parentNode || t, i))) {
                        if (a.splice(o, 1), e = r.length && a.join(""), !e) return L.apply(n, P.call(r, 0)), n;
                        break
                    }
                }
                return E(e, f)(r, t, i, n, re.test(e)), n
            }
            function v() {}
            var g, y, x, b, w, T, E, _, N, C, S = !0,
                A = "undefined",
                k = ("sizcache" + Math.random()).replace(".", ""),
                $ = String,
                j = e.document,
                O = j.documentElement,
                D = 0,
                M = 0,
                I = [].pop,
                L = [].push,
                P = [].slice,
                R = [].indexOf ||
                    function(e) {
                        for (var t = 0, n = this.length; t < n; t++) if (this[t] === e) return t;
                        return -1
                    }, H = function(e, t) {
                    return e[k] = null == t || t, e
                }, F = function() {
                    var e = {},
                        t = [];
                    return H(function(n, r) {
                        return t.push(n) > x.cacheLength && delete e[t.shift()], e[n] = r
                    }, e)
                }, B = F(), q = F(), z = F(), G = "[\\x20\\t\\r\\n\\f]", W = "(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+", J = W.replace("w", "w#"), U = "([*^$|!~]?=)", X = "\\[" + G + "*(" + W + ")" + G + "*(?:" + U + G + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + J + ")|)|)" + G + "*\\]", V = ":(" + W + ")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:" + X + ")|[^:]|\\\\.)*|.*))\\)|)", Y = ":(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + G + "*((?:-\\d)?\\d*)" + G + "*\\)|)(?=[^-]|$)", Q = new RegExp("^" + G + "+|((?:^|[^\\\\])(?:\\\\.)*)" + G + "+$", "g"), Z = new RegExp("^" + G + "*," + G + "*"), ee = new RegExp("^" + G + "*([\\x20\\t\\r\\n\\f>+~])" + G + "*"), te = new RegExp(V), ne = /^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/, re = /[\x20\t\r\n\f]*[+~]/, ie = /h\d/i, oe = /input|select|textarea|button/i, ae = /\\(?!\\)/g, se = {
                    ID: new RegExp("^#(" + W + ")"),
                    CLASS: new RegExp("^\\.(" + W + ")"),
                    NAME: new RegExp("^\\[name=['\"]?(" + W + ")['\"]?\\]"),
                    TAG: new RegExp("^(" + W.replace("w", "w*") + ")"),
                    ATTR: new RegExp("^" + X),
                    PSEUDO: new RegExp("^" + V),
                    POS: new RegExp(Y, "i"),
                    CHILD: new RegExp("^:(only|nth|first|last)-child(?:\\(" + G + "*(even|odd|(([+-]|)(\\d*)n|)" + G + "*(?:([+-]|)" + G + "*(\\d+)|))" + G + "*\\)|)", "i"),
                    needsContext: new RegExp("^" + G + "*[>+~]|" + Y, "i")
                }, ue = function(e) {
                    var t = j.createElement("div");
                    try {
                        return e(t)
                    } catch (n) {
                        return !1
                    } finally {
                        t = null
                    }
                }, le = ue(function(e) {
                    return e.appendChild(j.createComment("")), !e.getElementsByTagName("*").length
                }), ce = ue(function(e) {
                    return e.innerHTML = "<a href='#'></a>", e.firstChild && typeof e.firstChild.getAttribute !== A && "#" === e.firstChild.getAttribute("href")
                }), fe = ue(function(e) {
                    e.innerHTML = "<select></select>";
                    var t = typeof e.lastChild.getAttribute("multiple");
                    return "boolean" !== t && "string" !== t
                }), de = ue(function(e) {
                    return e.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>", !(!e.getElementsByClassName || !e.getElementsByClassName("e").length) && (e.lastChild.className = "e", 2 === e.getElementsByClassName("e").length)
                }), pe = ue(function(e) {
                    e.id = k + 0, e.innerHTML = "<a name='" + k + "'></a><div name='" + k + "'></div>", O.insertBefore(e, O.firstChild);
                    var t = j.getElementsByName && j.getElementsByName(k).length === 2 + j.getElementsByName(k + 0).length;
                    return y = !j.getElementById(k), O.removeChild(e), t
                });
            try {
                P.call(O.childNodes, 0)[0].nodeType
            } catch (he) {
                P = function(e) {
                    for (var t, n = []; t = this[e]; e++) n.push(t);
                    return n
                }
            }
            n.matches = function(e, t) {
                return n(e, null, null, t)
            }, n.matchesSelector = function(e, t) {
                return n(t, null, null, [e]).length > 0
            }, b = n.getText = function(e) {
                var t, n = "",
                    r = 0,
                    i = e.nodeType;
                if (i) {
                    if (1 === i || 9 === i || 11 === i) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += b(e)
                    } else if (3 === i || 4 === i) return e.nodeValue
                } else for (; t = e[r]; r++) n += b(t);
                return n
            }, w = n.isXML = function(e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return !!t && "HTML" !== t.nodeName
            }, T = n.contains = O.contains ?
                function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                        r = t && t.parentNode;
                    return e === r || !! (r && 1 === r.nodeType && n.contains && n.contains(r))
                } : O.compareDocumentPosition ?
                    function(e, t) {
                        return t && !! (16 & e.compareDocumentPosition(t))
                    } : function(e, t) {
                        for (; t = t.parentNode;) if (t === e) return !0;
                        return !1
                    }, n.attr = function(e, t) {
                var n, r = w(e);
                return r || (t = t.toLowerCase()), (n = x.attrHandle[t]) ? n(e) : r || fe ? e.getAttribute(t) : (n = e.getAttributeNode(t), n ? "boolean" == typeof e[t] ? e[t] ? t : null : n.specified ? n.value : null : null)
            }, x = n.selectors = {
                cacheLength: 50,
                createPseudo: H,
                match: se,
                attrHandle: ce ? {} : {
                    href: function(e) {
                        return e.getAttribute("href", 2)
                    },
                    type: function(e) {
                        return e.getAttribute("type")
                    }
                },
                find: {
                    ID: y ?
                        function(e, t, n) {
                            if (typeof t.getElementById !== A && !n) {
                                var r = t.getElementById(e);
                                return r && r.parentNode ? [r] : []
                            }
                        } : function(e, n, r) {
                            if (typeof n.getElementById !== A && !r) {
                                var i = n.getElementById(e);
                                return i ? i.id === e || typeof i.getAttributeNode !== A && i.getAttributeNode("id").value === e ? [i] : t : []
                            }
                        },
                    TAG: le ?
                        function(e, t) {
                            if (typeof t.getElementsByTagName !== A) return t.getElementsByTagName(e)
                        } : function(e, t) {
                            var n = t.getElementsByTagName(e);
                            if ("*" === e) {
                                for (var r, i = [], o = 0; r = n[o]; o++) 1 === r.nodeType && i.push(r);
                                return i
                            }
                            return n
                        },
                    NAME: pe &&
                    function(e, t) {
                        if (typeof t.getElementsByName !== A) return t.getElementsByName(name)
                    },
                    CLASS: de &&
                    function(e, t, n) {
                        if (typeof t.getElementsByClassName !== A && !n) return t.getElementsByClassName(e)
                    }
                },
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(e) {
                        return e[1] = e[1].replace(ae, ""), e[3] = (e[4] || e[5] || "").replace(ae, ""), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1] ? (e[2] || n.error(e[0]), e[3] = +(e[3] ? e[4] + (e[5] || 1) : 2 * ("even" === e[2] || "odd" === e[2])), e[4] = +(e[6] + e[7] || "odd" === e[2])) : e[2] && n.error(e[0]), e
                    },
                    PSEUDO: function(e) {
                        var t, n;
                        return se.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[3] : (t = e[4]) && (te.test(t) && (n = s(t, !0)) && (n = t.indexOf(")", t.length - n) - t.length) && (t = t.slice(0, n), e[0] = e[0].slice(0, n)), e[2] = t), e.slice(0, 3))
                    }
                },
                filter: {
                    ID: y ?
                        function(e) {
                            return e = e.replace(ae, ""), function(t) {
                                return t.getAttribute("id") === e
                            }
                        } : function(e) {
                            return e = e.replace(ae, ""), function(t) {
                                var n = typeof t.getAttributeNode !== A && t.getAttributeNode("id");
                                return n && n.value === e
                            }
                        },
                    TAG: function(e) {
                        return "*" === e ?
                            function() {
                                return !0
                            } : (e = e.replace(ae, "").toLowerCase(), function(t) {
                                return t.nodeName && t.nodeName.toLowerCase() === e
                            })
                    },
                    CLASS: function(e) {
                        var t = B[k][e];
                        return t || (t = B(e, new RegExp("(^|" + G + ")" + e + "(" + G + "|$)"))), function(e) {
                            return t.test(e.className || typeof e.getAttribute !== A && e.getAttribute("class") || "")
                        }
                    },
                    ATTR: function(e, t, r) {
                        return function(i, o) {
                            var a = n.attr(i, e);
                            return null == a ? "!=" === t : !t || (a += "", "=" === t ? a === r : "!=" === t ? a !== r : "^=" === t ? r && 0 === a.indexOf(r) : "*=" === t ? r && a.indexOf(r) > -1 : "$=" === t ? r && a.substr(a.length - r.length) === r : "~=" === t ? (" " + a + " ").indexOf(r) > -1 : "|=" === t && (a === r || a.substr(0, r.length + 1) === r + "-"))
                        }
                    },
                    CHILD: function(e, t, n, r) {
                        return "nth" === e ?
                            function(e) {
                                var t, i, o = e.parentNode;
                                if (1 === n && 0 === r) return !0;
                                if (o) for (i = 0, t = o.firstChild; t && (1 !== t.nodeType || (i++, e !== t)); t = t.nextSibling);
                                return i -= r, i === n || i % n === 0 && i / n >= 0
                            } : function(t) {
                                var n = t;
                                switch (e) {
                                    case "only":
                                    case "first":
                                        for (; n = n.previousSibling;) if (1 === n.nodeType) return !1;
                                        if ("first" === e) return !0;
                                        n = t;
                                    case "last":
                                        for (; n = n.nextSibling;) if (1 === n.nodeType) return !1;
                                        return !0
                                }
                            }
                    },
                    PSEUDO: function(e, t) {
                        var r, i = x.pseudos[e] || x.setFilters[e.toLowerCase()] || n.error("unsupported pseudo: " + e);
                        return i[k] ? i(t) : i.length > 1 ? (r = [e, e, "", t], x.setFilters.hasOwnProperty(e.toLowerCase()) ? H(function(e, n) {
                            for (var r, o = i(e, t), a = o.length; a--;) r = R.call(e, o[a]), e[r] = !(n[r] = o[a])
                        }) : function(e) {
                            return i(e, 0, r)
                        }) : i
                    }
                },
                pseudos: {
                    not: H(function(e) {
                        var t = [],
                            n = [],
                            r = E(e.replace(Q, "$1"));
                        return r[k] ? H(function(e, t, n, i) {
                            for (var o, a = r(e, null, i, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o))
                        }) : function(e, i, o) {
                            return t[0] = e, r(t, null, o, n), !n.pop()
                        }
                    }),
                    has: H(function(e) {
                        return function(t) {
                            return n(e, t).length > 0
                        }
                    }),
                    contains: H(function(e) {
                        return function(t) {
                            return (t.textContent || t.innerText || b(t)).indexOf(e) > -1
                        }
                    }),
                    enabled: function(e) {
                        return e.disabled === !1
                    },
                    disabled: function(e) {
                        return e.disabled === !0
                    },
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !! e.checked || "option" === t && !! e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                    },
                    parent: function(e) {
                        return !x.pseudos.empty(e)
                    },
                    empty: function(e) {
                        var t;
                        for (e = e.firstChild; e;) {
                            if (e.nodeName > "@" || 3 === (t = e.nodeType) || 4 === t) return !1;
                            e = e.nextSibling
                        }
                        return !0
                    },
                    header: function(e) {
                        return ie.test(e.nodeName)
                    },
                    text: function(e) {
                        var t, n;
                        return "input" === e.nodeName.toLowerCase() && "text" === (t = e.type) && (null == (n = e.getAttribute("type")) || n.toLowerCase() === t)
                    },
                    radio: r("radio"),
                    checkbox: r("checkbox"),
                    file: r("file"),
                    password: r("password"),
                    image: r("image"),
                    submit: i("submit"),
                    reset: i("reset"),
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    input: function(e) {
                        return oe.test(e.nodeName)
                    },
                    focus: function(e) {
                        var t = e.ownerDocument;
                        return e === t.activeElement && (!t.hasFocus || t.hasFocus()) && ( !! e.type || !! e.href)
                    },
                    active: function(e) {
                        return e === e.ownerDocument.activeElement
                    },
                    first: o(function(e, t, n) {
                        return [0]
                    }),
                    last: o(function(e, t, n) {
                        return [t - 1]
                    }),
                    eq: o(function(e, t, n) {
                        return [n < 0 ? n + t : n]
                    }),
                    even: o(function(e, t, n) {
                        for (var r = 0; r < t; r += 2) e.push(r);
                        return e
                    }),
                    odd: o(function(e, t, n) {
                        for (var r = 1; r < t; r += 2) e.push(r);
                        return e
                    }),
                    lt: o(function(e, t, n) {
                        for (var r = n < 0 ? n + t : n; --r >= 0;) e.push(r);
                        return e
                    }),
                    gt: o(function(e, t, n) {
                        for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                        return e
                    })
                }
            }, _ = O.compareDocumentPosition ?
                function(e, t) {
                    return e === t ? (N = !0, 0) : (e.compareDocumentPosition && t.compareDocumentPosition ? 4 & e.compareDocumentPosition(t) : e.compareDocumentPosition) ? -1 : 1
                } : function(e, t) {
                    if (e === t) return N = !0, 0;
                    if (e.sourceIndex && t.sourceIndex) return e.sourceIndex - t.sourceIndex;
                    var n, r, i = [],
                        o = [],
                        s = e.parentNode,
                        u = t.parentNode,
                        l = s;
                    if (s === u) return a(e, t);
                    if (!s) return -1;
                    if (!u) return 1;
                    for (; l;) i.unshift(l), l = l.parentNode;
                    for (l = u; l;) o.unshift(l), l = l.parentNode;
                    n = i.length, r = o.length;
                    for (var c = 0; c < n && c < r; c++) if (i[c] !== o[c]) return a(i[c], o[c]);
                    return c === n ? a(e, o[c], -1) : a(i[c], t, 1)
                }, [0, 0].sort(_), S = !N, n.uniqueSort = function(e) {
                var t, n = 1;
                if (N = S, e.sort(_), N) for (; t = e[n]; n++) t === e[n - 1] && e.splice(n--, 1);
                return e
            }, n.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, E = n.compile = function(e, t) {
                var n, r = [],
                    i = [],
                    o = z[k][e];
                if (!o) {
                    for (t || (t = s(e)), n = t.length; n--;) o = d(t[n]), o[k] ? r.push(o) : i.push(o);
                    o = z(e, p(i, r))
                }
                return o
            }, j.querySelectorAll &&
            function() {
                var e, t = m,
                    r = /'|\\/g,
                    i = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,
                    o = [":focus"],
                    a = [":active", ":focus"],
                    u = O.matchesSelector || O.mozMatchesSelector || O.webkitMatchesSelector || O.oMatchesSelector || O.msMatchesSelector;
                ue(function(e) {
                    e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || o.push("\\[" + G + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"), e.querySelectorAll(":checked").length || o.push(":checked")
                }), ue(function(e) {
                    e.innerHTML = "<p test=''></p>", e.querySelectorAll("[test^='']").length && o.push("[*^$]=" + G + "*(?:\"\"|'')"), e.innerHTML = "<input type='hidden'/>", e.querySelectorAll(":enabled").length || o.push(":enabled", ":disabled")
                }), o = new RegExp(o.join("|")), m = function(e, n, i, a, u) {
                    if (!(a || u || o && o.test(e))) {
                        var l, c, f = !0,
                            d = k,
                            p = n,
                            h = 9 === n.nodeType && e;
                        if (1 === n.nodeType && "object" !== n.nodeName.toLowerCase()) {
                            for (l = s(e), (f = n.getAttribute("id")) ? d = f.replace(r, "\\$&") : n.setAttribute("id", d), d = "[id='" + d + "'] ", c = l.length; c--;) l[c] = d + l[c].join("");
                            p = re.test(e) && n.parentNode || n, h = l.join(",")
                        }
                        if (h) try {
                            return L.apply(i, P.call(p.querySelectorAll(h), 0)), i
                        } catch (m) {} finally {
                            f || n.removeAttribute("id")
                        }
                    }
                    return t(e, n, i, a, u)
                }, u && (ue(function(t) {
                    e = u.call(t, "div");
                    try {
                        u.call(t, "[test!='']:sizzle"), a.push("!=", V)
                    } catch (n) {}
                }), a = new RegExp(a.join("|")), n.matchesSelector = function(t, r) {
                    if (r = r.replace(i, "='$1']"), !(w(t) || a.test(r) || o && o.test(r))) try {
                        var s = u.call(t, r);
                        if (s || e || t.document && 11 !== t.document.nodeType) return s
                    } catch (l) {}
                    return n(r, null, null, [t]).length > 0
                })
            }(), x.pseudos.nth = x.pseudos.eq, x.filters = v.prototype = x.pseudos, x.setFilters = new v, n.attr = K.attr, K.find = n, K.expr = n.selectors, K.expr[":"] = K.expr.pseudos, K.unique = n.uniqueSort, K.text = n.getText, K.isXMLDoc = n.isXML, K.contains = n.contains
        }(e);
        var Me = /Until$/,
            Ie = /^(?:parents|prev(?:Until|All))/,
            Le = /^.[^:#\[\.,]*$/,
            Pe = K.expr.match.needsContext,
            Re = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
        K.fn.extend({
            find: function(e) {
                var t, n, r, i, o, a, s = this;
                if ("string" != typeof e) return K(e).filter(function() {
                    for (t = 0, n = s.length; t < n; t++) if (K.contains(s[t], this)) return !0
                });
                for (a = this.pushStack("", "find", e), t = 0, n = this.length; t < n; t++) if (r = a.length, K.find(e, this[t], a), t > 0) for (i = r; i < a.length; i++) for (o = 0; o < r; o++) if (a[o] === a[i]) {
                    a.splice(i--, 1);
                    break
                }
                return a
            },
            has: function(e) {
                var t, n = K(e, this),
                    r = n.length;
                return this.filter(function() {
                    for (t = 0; t < r; t++) if (K.contains(this, n[t])) return !0
                })
            },
            not: function(e) {
                return this.pushStack(l(this, e, !1), "not", e)
            },
            filter: function(e) {
                return this.pushStack(l(this, e, !0), "filter", e)
            },
            is: function(e) {
                return !!e && ("string" == typeof e ? Pe.test(e) ? K(e, this.context).index(this[0]) >= 0 : K.filter(e, this).length > 0 : this.filter(e).length > 0)
            },
            closest: function(e, t) {
                for (var n, r = 0, i = this.length, o = [], a = Pe.test(e) || "string" != typeof e ? K(e, t || this.context) : 0; r < i; r++) for (n = this[r]; n && n.ownerDocument && n !== t && 11 !== n.nodeType;) {
                    if (a ? a.index(n) > -1 : K.find.matchesSelector(n, e)) {
                        o.push(n);
                        break
                    }
                    n = n.parentNode
                }
                return o = o.length > 1 ? K.unique(o) : o, this.pushStack(o, "closest", e)
            },
            index: function(e) {
                return e ? "string" == typeof e ? K.inArray(this[0], K(e)) : K.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.prevAll().length : -1
            },
            add: function(e, t) {
                var n = "string" == typeof e ? K(e, t) : K.makeArray(e && e.nodeType ? [e] : e),
                    r = K.merge(this.get(), n);
                return this.pushStack(s(n[0]) || s(r[0]) ? r : K.unique(r))
            },
            addBack: function(e) {
                return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
            }
        }), K.fn.andSelf = K.fn.addBack, K.each({
            parent: function(e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null
            },
            parents: function(e) {
                return K.dir(e, "parentNode")
            },
            parentsUntil: function(e, t, n) {
                return K.dir(e, "parentNode", n)
            },
            next: function(e) {
                return u(e, "nextSibling")
            },
            prev: function(e) {
                return u(e, "previousSibling")
            },
            nextAll: function(e) {
                return K.dir(e, "nextSibling")
            },
            prevAll: function(e) {
                return K.dir(e, "previousSibling")
            },
            nextUntil: function(e, t, n) {
                return K.dir(e, "nextSibling", n)
            },
            prevUntil: function(e, t, n) {
                return K.dir(e, "previousSibling", n)
            },
            siblings: function(e) {
                return K.sibling((e.parentNode || {}).firstChild, e)
            },
            children: function(e) {
                return K.sibling(e.firstChild)
            },
            contents: function(e) {
                return K.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : K.merge([], e.childNodes)
            }
        }, function(e, t) {
            K.fn[e] = function(n, r) {
                var i = K.map(this, t, n);
                return Me.test(e) || (r = n), r && "string" == typeof r && (i = K.filter(r, i)), i = this.length > 1 && !Re[e] ? K.unique(i) : i, this.length > 1 && Ie.test(e) && (i = i.reverse()), this.pushStack(i, e, U.call(arguments).join(","))
            }
        }), K.extend({
            filter: function(e, t, n) {
                return n && (e = ":not(" + e + ")"), 1 === t.length ? K.find.matchesSelector(t[0], e) ? [t[0]] : [] : K.find.matches(e, t)
            },
            dir: function(e, n, r) {
                for (var i = [], o = e[n]; o && 9 !== o.nodeType && (r === t || 1 !== o.nodeType || !K(o).is(r));) 1 === o.nodeType && i.push(o), o = o[n];
                return i
            },
            sibling: function(e, t) {
                for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                return n
            }
        });
        var He = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
            Fe = / jQuery\d+="(?:null|\d+)"/g,
            Be = /^\s+/,
            qe = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
            ze = /<([\w:]+)/,
            Ge = /<tbody/i,
            We = /<|&#?\w+;/,
            Je = /<(?:script|style|link)/i,
            Ue = /<(?:script|object|embed|option|style)/i,
            Xe = new RegExp("<(?:" + He + ")[\\s/>]", "i"),
            Ve = /^(?:checkbox|radio)$/,
            Ye = /checked\s*(?:[^=]|=\s*.checked.)/i,
            Qe = /\/(java|ecma)script/i,
            Ke = /^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,
            Ze = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                legend: [1, "<fieldset>", "</fieldset>"],
                thead: [1, "<table>", "</table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
                area: [1, "<map>", "</map>"],
                _default: [0, "", ""]
            },
            et = c(B),
            tt = et.appendChild(B.createElement("div"));
        Ze.optgroup = Ze.option, Ze.tbody = Ze.tfoot = Ze.colgroup = Ze.caption = Ze.thead, Ze.th = Ze.td, K.support.htmlSerialize || (Ze._default = [1, "X<div>", "</div>"]), K.fn.extend({
            text: function(e) {
                return K.access(this, function(e) {
                    return e === t ? K.text(this) : this.empty().append((this[0] && this[0].ownerDocument || B).createTextNode(e))
                }, null, e, arguments.length)
            },
            wrapAll: function(e) {
                if (K.isFunction(e)) return this.each(function(t) {
                    K(this).wrapAll(e.call(this, t))
                });
                if (this[0]) {
                    var t = K(e, this[0].ownerDocument).eq(0).clone(!0);
                    this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                        for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
                        return e
                    }).append(this)
                }
                return this
            },
            wrapInner: function(e) {
                return K.isFunction(e) ? this.each(function(t) {
                    K(this).wrapInner(e.call(this, t))
                }) : this.each(function() {
                    var t = K(this),
                        n = t.contents();
                    n.length ? n.wrapAll(e) : t.append(e)
                })
            },
            wrap: function(e) {
                var t = K.isFunction(e);
                return this.each(function(n) {
                    K(this).wrapAll(t ? e.call(this, n) : e)
                })
            },
            unwrap: function() {
                return this.parent().each(function() {
                    K.nodeName(this, "body") || K(this).replaceWith(this.childNodes)
                }).end()
            },
            append: function() {
                return this.domManip(arguments, !0, function(e) {
                    (1 === this.nodeType || 11 === this.nodeType) && this.appendChild(e)
                })
            },
            prepend: function() {
                return this.domManip(arguments, !0, function(e) {
                    (1 === this.nodeType || 11 === this.nodeType) && this.insertBefore(e, this.firstChild)
                })
            },
            before: function() {
                if (!s(this[0])) return this.domManip(arguments, !1, function(e) {
                    this.parentNode.insertBefore(e, this)
                });
                if (arguments.length) {
                    var e = K.clean(arguments);
                    return this.pushStack(K.merge(e, this), "before", this.selector)
                }
            },
            after: function() {
                if (!s(this[0])) return this.domManip(arguments, !1, function(e) {
                    this.parentNode.insertBefore(e, this.nextSibling)
                });
                if (arguments.length) {
                    var e = K.clean(arguments);
                    return this.pushStack(K.merge(this, e), "after", this.selector)
                }
            },
            remove: function(e, t) {
                for (var n, r = 0; null != (n = this[r]); r++) e && !K.filter(e, [n]).length || (!t && 1 === n.nodeType && (K.cleanData(n.getElementsByTagName("*")), K.cleanData([n])), n.parentNode && n.parentNode.removeChild(n));
                return this
            },
            empty: function() {
                for (var e, t = 0; null != (e = this[t]); t++) for (1 === e.nodeType && K.cleanData(e.getElementsByTagName("*")); e.firstChild;) e.removeChild(e.firstChild);
                return this
            },
            clone: function(e, t) {
                return e = null != e && e, t = null == t ? e : t, this.map(function() {
                    return K.clone(this, e, t)
                })
            },
            html: function(e) {
                return K.access(this, function(e) {
                    var n = this[0] || {},
                        r = 0,
                        i = this.length;
                    if (e === t) return 1 === n.nodeType ? n.innerHTML.replace(Fe, "") : t;
                    if ("string" == typeof e && !Je.test(e) && (K.support.htmlSerialize || !Xe.test(e)) && (K.support.leadingWhitespace || !Be.test(e)) && !Ze[(ze.exec(e) || ["", ""])[1].toLowerCase()]) {
                        e = e.replace(qe, "<$1></$2>");
                        try {
                            for (; r < i; r++) n = this[r] || {}, 1 === n.nodeType && (K.cleanData(n.getElementsByTagName("*")), n.innerHTML = e);
                            n = 0
                        } catch (o) {}
                    }
                    n && this.empty().append(e)
                }, null, e, arguments.length)
            },
            replaceWith: function(e) {
                return s(this[0]) ? this.length ? this.pushStack(K(K.isFunction(e) ? e() : e), "replaceWith", e) : this : K.isFunction(e) ? this.each(function(t) {
                    var n = K(this),
                        r = n.html();
                    n.replaceWith(e.call(this, t, r))
                }) : ("string" != typeof e && (e = K(e).detach()), this.each(function() {
                    var t = this.nextSibling,
                        n = this.parentNode;
                    K(this).remove(), t ? K(t).before(e) : K(n).append(e)
                }))
            },
            detach: function(e) {
                return this.remove(e, !0)
            },
            domManip: function(e, n, r) {
                e = [].concat.apply([], e);
                var i, o, a, s, u = 0,
                    l = e[0],
                    c = [],
                    d = this.length;
                if (!K.support.checkClone && d > 1 && "string" == typeof l && Ye.test(l)) return this.each(function() {
                    K(this).domManip(e, n, r)
                });
                if (K.isFunction(l)) return this.each(function(i) {
                    var o = K(this);
                    e[0] = l.call(this, i, n ? o.html() : t), o.domManip(e, n, r)
                });
                if (this[0]) {
                    if (i = K.buildFragment(e, this, c), a = i.fragment, o = a.firstChild, 1 === a.childNodes.length && (a = o), o) for (n = n && K.nodeName(o, "tr"), s = i.cacheable || d - 1; u < d; u++) r.call(n && K.nodeName(this[u], "table") ? f(this[u], "tbody") : this[u], u === s ? a : K.clone(a, !0, !0));
                    a = o = null, c.length && K.each(c, function(e, t) {
                        t.src ? K.ajax ? K.ajax({
                            url: t.src,
                            type: "GET",
                            dataType: "script",
                            async: !1,
                            global: !1,
                            "throws": !0
                        }) : K.error("no ajax") : K.globalEval((t.text || t.textContent || t.innerHTML || "").replace(Ke, "")), t.parentNode && t.parentNode.removeChild(t)
                    })
                }
                return this
            }
        }), K.buildFragment = function(e, n, r) {
            var i, o, a, s = e[0];
            return n = n || B, n = !n.nodeType && n[0] || n, n = n.ownerDocument || n, 1 === e.length && "string" == typeof s && s.length < 512 && n === B && "<" === s.charAt(0) && !Ue.test(s) && (K.support.checkClone || !Ye.test(s)) && (K.support.html5Clone || !Xe.test(s)) && (o = !0, i = K.fragments[s], a = i !== t), i || (i = n.createDocumentFragment(), K.clean(e, n, i, r), o && (K.fragments[s] = a && i)), {
                fragment: i,
                cacheable: o
            }
        }, K.fragments = {}, K.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(e, t) {
            K.fn[e] = function(n) {
                var r, i = 0,
                    o = [],
                    a = K(n),
                    s = a.length,
                    u = 1 === this.length && this[0].parentNode;
                if ((null == u || u && 11 === u.nodeType && 1 === u.childNodes.length) && 1 === s) return a[t](this[0]), this;
                for (; i < s; i++) r = (i > 0 ? this.clone(!0) : this).get(), K(a[i])[t](r), o = o.concat(r);
                return this.pushStack(o, e, a.selector)
            }
        }), K.extend({
            clone: function(e, t, n) {
                var r, i, o, a;
                if (K.support.html5Clone || K.isXMLDoc(e) || !Xe.test("<" + e.nodeName + ">") ? a = e.cloneNode(!0) : (tt.innerHTML = e.outerHTML, tt.removeChild(a = tt.firstChild)), !(K.support.noCloneEvent && K.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || K.isXMLDoc(e))) for (p(e, a), r = h(e), i = h(a), o = 0; r[o]; ++o) i[o] && p(r[o], i[o]);
                if (t && (d(e, a), n)) for (r = h(e), i = h(a), o = 0; r[o]; ++o) d(r[o], i[o]);
                return r = i = null, a
            },
            clean: function(e, t, n, r) {
                var i, o, a, s, u, l, f, d, p, h, v, g = t === B && et,
                    y = [];
                for (t && "undefined" != typeof t.createDocumentFragment || (t = B), i = 0; null != (a = e[i]); i++) if ("number" == typeof a && (a += ""), a) {
                    if ("string" == typeof a) if (We.test(a)) {
                        for (g = g || c(t), f = t.createElement("div"), g.appendChild(f), a = a.replace(qe, "<$1></$2>"), s = (ze.exec(a) || ["", ""])[1].toLowerCase(), u = Ze[s] || Ze._default, l = u[0], f.innerHTML = u[1] + a + u[2]; l--;) f = f.lastChild;
                        if (!K.support.tbody) for (d = Ge.test(a), p = "table" !== s || d ? "<table>" !== u[1] || d ? [] : f.childNodes : f.firstChild && f.firstChild.childNodes, o = p.length - 1; o >= 0; --o) K.nodeName(p[o], "tbody") && !p[o].childNodes.length && p[o].parentNode.removeChild(p[o]);
                        !K.support.leadingWhitespace && Be.test(a) && f.insertBefore(t.createTextNode(Be.exec(a)[0]), f.firstChild), a = f.childNodes, f.parentNode.removeChild(f)
                    } else a = t.createTextNode(a);
                    a.nodeType ? y.push(a) : K.merge(y, a)
                }
                if (f && (a = f = g = null), !K.support.appendChecked) for (i = 0; null != (a = y[i]); i++) K.nodeName(a, "input") ? m(a) : "undefined" != typeof a.getElementsByTagName && K.grep(a.getElementsByTagName("input"), m);
                if (n) for (h = function(e) {
                    if (!e.type || Qe.test(e.type)) return r ? r.push(e.parentNode ? e.parentNode.removeChild(e) : e) : n.appendChild(e)
                }, i = 0; null != (a = y[i]); i++) K.nodeName(a, "script") && h(a) || (n.appendChild(a), "undefined" != typeof a.getElementsByTagName && (v = K.grep(K.merge([], a.getElementsByTagName("script")), h), y.splice.apply(y, [i + 1, 0].concat(v)), i += v.length));
                return y
            },
            cleanData: function(e, t) {
                for (var n, r, i, o, a = 0, s = K.expando, u = K.cache, l = K.support.deleteExpando, c = K.event.special; null != (i = e[a]); a++) if ((t || K.acceptData(i)) && (r = i[s], n = r && u[r])) {
                    if (n.events) for (o in n.events) c[o] ? K.event.remove(i, o) : K.removeEvent(i, o, n.handle);
                    u[r] && (delete u[r], l ? delete i[s] : i.removeAttribute ? i.removeAttribute(s) : i[s] = null, K.deletedIds.push(r))
                }
            }
        }), function() {
            var e, t;
            K.uaMatch = function(e) {
                e = e.toLowerCase();
                var t = /(chrome)[ \/]([\w.]+)/.exec(e) || /(webkit)[ \/]([\w.]+)/.exec(e) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e) || /(msie) ([\w.]+)/.exec(e) || e.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e) || [];
                return {
                    browser: t[1] || "",
                    version: t[2] || "0"
                }
            }, e = K.uaMatch(z.userAgent), t = {}, e.browser && (t[e.browser] = !0, t.version = e.version), t.chrome ? t.webkit = !0 : t.webkit && (t.safari = !0), K.browser = t, K.sub = function() {
                function e(t, n) {
                    return new e.fn.init(t, n)
                }
                K.extend(!0, e, this), e.superclass = this, e.fn = e.prototype = this(), e.fn.constructor = e, e.sub = this.sub, e.fn.init = function n(n, r) {
                    return r && r instanceof K && !(r instanceof e) && (r = e(r)), K.fn.init.call(this, n, r, t)
                }, e.fn.init.prototype = e.fn;
                var t = e(B);
                return e
            }
        }();
        var nt, rt, it, ot = /alpha\([^)]*\)/i,
            at = /opacity=([^)]*)/,
            st = /^(top|right|bottom|left)$/,
            ut = /^(none|table(?!-c[ea]).+)/,
            lt = /^margin/,
            ct = new RegExp("^(" + Z + ")(.*)$", "i"),
            ft = new RegExp("^(" + Z + ")(?!px)[a-z%]+$", "i"),
            dt = new RegExp("^([-+])=(" + Z + ")", "i"),
            pt = {},
            ht = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            mt = {
                letterSpacing: 0,
                fontWeight: 400
            },
            vt = ["Top", "Right", "Bottom", "Left"],
            gt = ["Webkit", "O", "Moz", "ms"],
            yt = K.fn.toggle;
        K.fn.extend({
            css: function(e, n) {
                return K.access(this, function(e, n, r) {
                    return r !== t ? K.style(e, n, r) : K.css(e, n)
                }, e, n, arguments.length > 1)
            },
            show: function() {
                return y(this, !0)
            },
            hide: function() {
                return y(this)
            },
            toggle: function(e, t) {
                var n = "boolean" == typeof e;
                return K.isFunction(e) && K.isFunction(t) ? yt.apply(this, arguments) : this.each(function() {
                    (n ? e : g(this)) ? K(this).show() : K(this).hide()
                })
            }
        }), K.extend({
            cssHooks: {
                opacity: {
                    get: function(e, t) {
                        if (t) {
                            var n = nt(e, "opacity");
                            return "" === n ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
                fillOpacity: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {
                "float": K.support.cssFloat ? "cssFloat" : "styleFloat"
            },
            style: function(e, n, r, i) {
                if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                    var o, a, s, u = K.camelCase(n),
                        l = e.style;
                    if (n = K.cssProps[u] || (K.cssProps[u] = v(l, u)), s = K.cssHooks[n] || K.cssHooks[u], r === t) return s && "get" in s && (o = s.get(e, !1, i)) !== t ? o : l[n];
                    if (a = typeof r, "string" === a && (o = dt.exec(r)) && (r = (o[1] + 1) * o[2] + parseFloat(K.css(e, n)), a = "number"), !(null == r || "number" === a && isNaN(r) || ("number" === a && !K.cssNumber[u] && (r += "px"), s && "set" in s && (r = s.set(e, r, i)) === t))) try {
                        l[n] = r
                    } catch (c) {}
                }
            },
            css: function(e, n, r, i) {
                var o, a, s, u = K.camelCase(n);
                return n = K.cssProps[u] || (K.cssProps[u] = v(e.style, u)), s = K.cssHooks[n] || K.cssHooks[u], s && "get" in s && (o = s.get(e, !0, i)), o === t && (o = nt(e, n)), "normal" === o && n in mt && (o = mt[n]), r || i !== t ? (a = parseFloat(o), r || K.isNumeric(a) ? a || 0 : o) : o
            },
            swap: function(e, t, n) {
                var r, i, o = {};
                for (i in t) o[i] = e.style[i], e.style[i] = t[i];
                r = n.call(e);
                for (i in t) e.style[i] = o[i];
                return r
            }
        }), e.getComputedStyle ? nt = function(t, n) {
            var r, i, o, a, s = e.getComputedStyle(t, null),
                u = t.style;
            return s && (r = s[n], "" === r && !K.contains(t.ownerDocument, t) && (r = K.style(t, n)), ft.test(r) && lt.test(n) && (i = u.width, o = u.minWidth, a = u.maxWidth, u.minWidth = u.maxWidth = u.width = r, r = s.width, u.width = i, u.minWidth = o, u.maxWidth = a)), r
        } : B.documentElement.currentStyle && (nt = function(e, t) {
            var n, r, i = e.currentStyle && e.currentStyle[t],
                o = e.style;
            return null == i && o && o[t] && (i = o[t]), ft.test(i) && !st.test(t) && (n = o.left, r = e.runtimeStyle && e.runtimeStyle.left, r && (e.runtimeStyle.left = e.currentStyle.left), o.left = "fontSize" === t ? "1em" : i, i = o.pixelLeft + "px", o.left = n, r && (e.runtimeStyle.left = r)), "" === i ? "auto" : i
        }), K.each(["height", "width"], function(e, t) {
            K.cssHooks[t] = {
                get: function(e, n, r) {
                    if (n) return 0 === e.offsetWidth && ut.test(nt(e, "display")) ? K.swap(e, ht, function() {
                        return w(e, t, r)
                    }) : w(e, t, r)
                },
                set: function(e, n, r) {
                    return x(e, n, r ? b(e, t, r, K.support.boxSizing && "border-box" === K.css(e, "boxSizing")) : 0)
                }
            }
        }), K.support.opacity || (K.cssHooks.opacity = {
            get: function(e, t) {
                return at.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
            },
            set: function(e, t) {
                var n = e.style,
                    r = e.currentStyle,
                    i = K.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                    o = r && r.filter || n.filter || "";
                n.zoom = 1, t >= 1 && "" === K.trim(o.replace(ot, "")) && n.removeAttribute && (n.removeAttribute("filter"), r && !r.filter) || (n.filter = ot.test(o) ? o.replace(ot, i) : o + " " + i)
            }
        }), K(function() {
            K.support.reliableMarginRight || (K.cssHooks.marginRight = {
                get: function(e, t) {
                    return K.swap(e, {
                        display: "inline-block"
                    }, function() {
                        if (t) return nt(e, "marginRight")
                    })
                }
            }), !K.support.pixelPosition && K.fn.position && K.each(["top", "left"], function(e, t) {
                K.cssHooks[t] = {
                    get: function(e, n) {
                        if (n) {
                            var r = nt(e, t);
                            return ft.test(r) ? K(e).position()[t] + "px" : r
                        }
                    }
                }
            })
        }), K.expr && K.expr.filters && (K.expr.filters.hidden = function(e) {
            return 0 === e.offsetWidth && 0 === e.offsetHeight || !K.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || nt(e, "display"))
        }, K.expr.filters.visible = function(e) {
            return !K.expr.filters.hidden(e)
        }), K.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(e, t) {
            K.cssHooks[e + t] = {
                expand: function(n) {
                    var r, i = "string" == typeof n ? n.split(" ") : [n],
                        o = {};
                    for (r = 0; r < 4; r++) o[e + vt[r] + t] = i[r] || i[r - 2] || i[0];
                    return o
                }
            }, lt.test(e) || (K.cssHooks[e + t].set = x)
        });
        var xt = /%20/g,
            bt = /\[\]$/,
            wt = /\r?\n/g,
            Tt = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
            Et = /^(?:select|textarea)/i;
        K.fn.extend({
            serialize: function() {
                return K.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    return this.elements ? K.makeArray(this.elements) : this
                }).filter(function() {
                    return this.name && !this.disabled && (this.checked || Et.test(this.nodeName) || Tt.test(this.type))
                }).map(function(e, t) {
                    var n = K(this).val();
                    return null == n ? null : K.isArray(n) ? K.map(n, function(e, n) {
                        return {
                            name: t.name,
                            value: e.replace(wt, "\r\n")
                        }
                    }) : {
                        name: t.name,
                        value: n.replace(wt, "\r\n")
                    }
                }).get()
            }
        }), K.param = function(e, n) {
            var r, i = [],
                o = function(e, t) {
                    t = K.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
                };
            if (n === t && (n = K.ajaxSettings && K.ajaxSettings.traditional), K.isArray(e) || e.jquery && !K.isPlainObject(e)) K.each(e, function() {
                o(this.name, this.value)
            });
            else for (r in e) E(r, e[r], n, o);
            return i.join("&").replace(xt, "+")
        };
        var _t, Nt, Ct = /#.*$/,
            St = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
            At = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,
            kt = /^(?:GET|HEAD)$/,
            $t = /^\/\//,
            jt = /\?/,
            Ot = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
            Dt = /([?&])_=[^&]*/,
            Mt = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
            It = K.fn.load,
            Lt = {},
            Pt = {},
            Rt = ["*/"] + ["*"];
        try {
            Nt = q.href
        } catch (Ht) {
            Nt = B.createElement("a"), Nt.href = "", Nt = Nt.href
        }
        _t = Mt.exec(Nt.toLowerCase()) || [], K.fn.load = function(e, n, r) {
            if ("string" != typeof e && It) return It.apply(this, arguments);
            if (!this.length) return this;
            var i, o, a, s = this,
                u = e.indexOf(" ");
            return u >= 0 && (i = e.slice(u, e.length), e = e.slice(0, u)), K.isFunction(n) ? (r = n, n = t) : n && "object" == typeof n && (o = "POST"), K.ajax({
                url: e,
                type: o,
                dataType: "html",
                data: n,
                complete: function(e, t) {
                    r && s.each(r, a || [e.responseText, t, e])
                }
            }).done(function(e) {
                a = arguments, s.html(i ? K("<div>").append(e.replace(Ot, "")).find(i) : e)
            }), this
        }, K.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(e, t) {
            K.fn[t] = function(e) {
                return this.on(t, e)
            }
        }), K.each(["get", "post"], function(e, n) {
            K[n] = function(e, r, i, o) {
                return K.isFunction(r) && (o = o || i, i = r, r = t), K.ajax({
                    type: n,
                    url: e,
                    data: r,
                    success: i,
                    dataType: o
                })
            }
        }), K.extend({
            getScript: function(e, n) {
                return K.get(e, t, n, "script")
            },
            getJSON: function(e, t, n) {
                return K.get(e, t, n, "json")
            },
            ajaxSetup: function(e, t) {
                return t ? C(e, K.ajaxSettings) : (t = e, e = K.ajaxSettings), C(e, t), e
            },
            ajaxSettings: {
                url: Nt,
                isLocal: At.test(_t[1]),
                global: !0,
                type: "GET",
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                processData: !0,
                async: !0,
                accepts: {
                    xml: "application/xml, text/xml",
                    html: "text/html",
                    text: "text/plain",
                    json: "application/json, text/javascript",
                    "*": Rt
                },
                contents: {
                    xml: /xml/,
                    html: /html/,
                    json: /json/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText"
                },
                converters: {
                    "* text": e.String,
                    "text html": !0,
                    "text json": K.parseJSON,
                    "text xml": K.parseXML
                },
                flatOptions: {
                    context: !0,
                    url: !0
                }
            },
            ajaxPrefilter: _(Lt),
            ajaxTransport: _(Pt),
            ajax: function(e, n) {
                function r(e, n, r, a) {
                    var l, f, y, x, w, E = n;
                    2 !== b && (b = 2, u && clearTimeout(u), s = t, o = a || "", T.readyState = e > 0 ? 4 : 0, r && (x = S(d, T, r)), e >= 200 && e < 300 || 304 === e ? (d.ifModified && (w = T.getResponseHeader("Last-Modified"), w && (K.lastModified[i] = w), w = T.getResponseHeader("Etag"), w && (K.etag[i] = w)), 304 === e ? (E = "notmodified", l = !0) : (l = A(d, x), E = l.state, f = l.data, y = l.error, l = !y)) : (y = E, E && !e || (E = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (n || E) + "", l ? m.resolveWith(p, [f, E, T]) : m.rejectWith(p, [T, E, y]), T.statusCode(g), g = t, c && h.trigger("ajax" + (l ? "Success" : "Error"), [T, d, l ? f : y]), v.fireWith(p, [T, E]), c && (h.trigger("ajaxComplete", [T, d]), --K.active || K.event.trigger("ajaxStop")))
                }
                "object" == typeof e && (n = e, e = t), n = n || {};
                var i, o, a, s, u, l, c, f, d = K.ajaxSetup({}, n),
                    p = d.context || d,
                    h = p !== d && (p.nodeType || p instanceof K) ? K(p) : K.event,
                    m = K.Deferred(),
                    v = K.Callbacks("once memory"),
                    g = d.statusCode || {},
                    y = {},
                    x = {},
                    b = 0,
                    w = "canceled",
                    T = {
                        readyState: 0,
                        setRequestHeader: function(e, t) {
                            if (!b) {
                                var n = e.toLowerCase();
                                e = x[n] = x[n] || e, y[e] = t
                            }
                            return this
                        },
                        getAllResponseHeaders: function() {
                            return 2 === b ? o : null
                        },
                        getResponseHeader: function(e) {
                            var n;
                            if (2 === b) {
                                if (!a) for (a = {}; n = St.exec(o);) a[n[1].toLowerCase()] = n[2];
                                n = a[e.toLowerCase()]
                            }
                            return n === t ? null : n
                        },
                        overrideMimeType: function(e) {
                            return b || (d.mimeType = e), this
                        },
                        abort: function(e) {
                            return e = e || w, s && s.abort(e), r(0, e), this
                        }
                    };
                if (m.promise(T), T.success = T.done, T.error = T.fail, T.complete = v.add, T.statusCode = function(e) {
                    if (e) {
                        var t;
                        if (b < 2) for (t in e) g[t] = [g[t], e[t]];
                        else t = e[T.status], T.always(t)
                    }
                    return this
                }, d.url = ((e || d.url) + "").replace(Ct, "").replace($t, _t[1] + "//"), d.dataTypes = K.trim(d.dataType || "*").toLowerCase().split(te), null == d.crossDomain && (l = Mt.exec(d.url.toLowerCase()) || !1, d.crossDomain = l && l.join(":") + (l[3] ? "" : "http:" === l[1] ? 80 : 443) !== _t.join(":") + (_t[3] ? "" : "http:" === _t[1] ? 80 : 443)), d.data && d.processData && "string" != typeof d.data && (d.data = K.param(d.data, d.traditional)), N(Lt, d, n, T), 2 === b) return T;
                if (c = d.global, d.type = d.type.toUpperCase(), d.hasContent = !kt.test(d.type), c && 0 === K.active++ && K.event.trigger("ajaxStart"), !d.hasContent && (d.data && (d.url += (jt.test(d.url) ? "&" : "?") + d.data, delete d.data), i = d.url, d.cache === !1)) {
                    var E = K.now(),
                        _ = d.url.replace(Dt, "$1_=" + E);
                    d.url = _ + (_ === d.url ? (jt.test(d.url) ? "&" : "?") + "_=" + E : "")
                }(d.data && d.hasContent && d.contentType !== !1 || n.contentType) && T.setRequestHeader("Content-Type", d.contentType), d.ifModified && (i = i || d.url, K.lastModified[i] && T.setRequestHeader("If-Modified-Since", K.lastModified[i]), K.etag[i] && T.setRequestHeader("If-None-Match", K.etag[i])), T.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + Rt + "; q=0.01" : "") : d.accepts["*"]);
                for (f in d.headers) T.setRequestHeader(f, d.headers[f]);
                if (!d.beforeSend || d.beforeSend.call(p, T, d) !== !1 && 2 !== b) {
                    w = "abort";
                    for (f in {
                        success: 1,
                        error: 1,
                        complete: 1
                    }) T[f](d[f]);
                    if (s = N(Pt, d, n, T)) {
                        T.readyState = 1, c && h.trigger("ajaxSend", [T, d]), d.async && d.timeout > 0 && (u = setTimeout(function() {
                            T.abort("timeout")
                        }, d.timeout));
                        try {
                            b = 1, s.send(y, r)
                        } catch (C) {
                            if (!(b < 2)) throw C;
                            r(-1, C)
                        }
                    } else r(-1, "No Transport");
                    return T
                }
                return T.abort()
            },
            active: 0,
            lastModified: {},
            etag: {}
        });
        var Ft = [],
            Bt = /\?/,
            qt = /(=)\?(?=&|$)|\?\?/,
            zt = K.now();
        K.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var e = Ft.pop() || K.expando + "_" + zt++;
                return this[e] = !0, e
            }
        }), K.ajaxPrefilter("json jsonp", function(n, r, i) {
            var o, a, s, u = n.data,
                l = n.url,
                c = n.jsonp !== !1,
                f = c && qt.test(l),
                d = c && !f && "string" == typeof u && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && qt.test(u);
            if ("jsonp" === n.dataTypes[0] || f || d) return o = n.jsonpCallback = K.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, a = e[o], f ? n.url = l.replace(qt, "$1" + o) : d ? n.data = u.replace(qt, "$1" + o) : c && (n.url += (Bt.test(l) ? "&" : "?") + n.jsonp + "=" + o), n.converters["script json"] = function() {
                return s || K.error(o + " was not called"), s[0]
            }, n.dataTypes[0] = "json", e[o] = function() {
                s = arguments
            }, i.always(function() {
                e[o] = a, n[o] && (n.jsonpCallback = r.jsonpCallback, Ft.push(o)), s && K.isFunction(a) && a(s[0]), s = a = t
            }), "script"
        }), K.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /javascript|ecmascript/
            },
            converters: {
                "text script": function(e) {
                    return K.globalEval(e), e
                }
            }
        }), K.ajaxPrefilter("script", function(e) {
            e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
        }), K.ajaxTransport("script", function(e) {
            if (e.crossDomain) {
                var n, r = B.head || B.getElementsByTagName("head")[0] || B.documentElement;
                return {
                    send: function(i, o) {
                        n = B.createElement("script"), n.async = "async", e.scriptCharset && (n.charset = e.scriptCharset), n.src = e.url, n.onload = n.onreadystatechange = function(e, i) {
                            (i || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, r && n.parentNode && r.removeChild(n), n = t, i || o(200, "success"))
                        }, r.insertBefore(n, r.firstChild)
                    },
                    abort: function() {
                        n && n.onload(0, 1)
                    }
                }
            }
        });
        var Gt, Wt = !! e.ActiveXObject &&
            function() {
                for (var e in Gt) Gt[e](0, 1)
            }, Jt = 0;
        K.ajaxSettings.xhr = e.ActiveXObject ?
            function() {
                return !this.isLocal && k() || $()
            } : k, function(e) {
            K.extend(K.support, {
                ajax: !! e,
                cors: !! e && "withCredentials" in e
            })
        }(K.ajaxSettings.xhr()), K.support.ajax && K.ajaxTransport(function(n) {
            if (!n.crossDomain || K.support.cors) {
                var r;
                return {
                    send: function(i, o) {
                        var a, s, u = n.xhr();
                        if (n.username ? u.open(n.type, n.url, n.async, n.username, n.password) : u.open(n.type, n.url, n.async), n.xhrFields) for (s in n.xhrFields) u[s] = n.xhrFields[s];
                        n.mimeType && u.overrideMimeType && u.overrideMimeType(n.mimeType), !n.crossDomain && !i["X-Requested-With"] && (i["X-Requested-With"] = "XMLHttpRequest");
                        try {
                            for (s in i) u.setRequestHeader(s, i[s])
                        } catch (l) {}
                        u.send(n.hasContent && n.data || null), r = function(e, i) {
                            var s, l, c, f, d;
                            try {
                                if (r && (i || 4 === u.readyState)) if (r = t, a && (u.onreadystatechange = K.noop, Wt && delete Gt[a]), i) 4 !== u.readyState && u.abort();
                                else {
                                    s = u.status, c = u.getAllResponseHeaders(), f = {}, d = u.responseXML, d && d.documentElement && (f.xml = d);
                                    try {
                                        f.text = u.responseText
                                    } catch (e) {}
                                    try {
                                        l = u.statusText
                                    } catch (p) {
                                        l = ""
                                    }
                                    s || !n.isLocal || n.crossDomain ? 1223 === s && (s = 204) : s = f.text ? 200 : 404
                                }
                            } catch (h) {
                                i || o(-1, h)
                            }
                            f && o(s, l, f, c)
                        }, n.async ? 4 === u.readyState ? setTimeout(r, 0) : (a = ++Jt, Wt && (Gt || (Gt = {}, K(e).unload(Wt)), Gt[a] = r), u.onreadystatechange = r) : r()
                    },
                    abort: function() {
                        r && r(0, 1)
                    }
                }
            }
        });
        var Ut, Xt, Vt = /^(?:toggle|show|hide)$/,
            Yt = new RegExp("^(?:([-+])=|)(" + Z + ")([a-z%]*)$", "i"),
            Qt = /queueHooks$/,
            Kt = [I],
            Zt = {
                "*": [function(e, t) {
                    var n, r, i = this.createTween(e, t),
                        o = Yt.exec(t),
                        a = i.cur(),
                        s = +a || 0,
                        u = 1,
                        l = 20;
                    if (o) {
                        if (n = +o[2], r = o[3] || (K.cssNumber[e] ? "" : "px"), "px" !== r && s) {
                            s = K.css(i.elem, e, !0) || n || 1;
                            do u = u || ".5", s /= u, K.style(i.elem, e, s + r);
                            while (u !== (u = i.cur() / a) && 1 !== u && --l)
                        }
                        i.unit = r, i.start = s, i.end = o[1] ? s + (o[1] + 1) * n : n
                    }
                    return i
                }]
            };
        K.Animation = K.extend(D, {
            tweener: function(e, t) {
                K.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
                for (var n, r = 0, i = e.length; r < i; r++) n = e[r], Zt[n] = Zt[n] || [], Zt[n].unshift(t)
            },
            prefilter: function(e, t) {
                t ? Kt.unshift(e) : Kt.push(e)
            }
        }), K.Tween = L, L.prototype = {
            constructor: L,
            init: function(e, t, n, r, i, o) {
                this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (K.cssNumber[n] ? "" : "px")
            },
            cur: function() {
                var e = L.propHooks[this.prop];
                return e && e.get ? e.get(this) : L.propHooks._default.get(this)
            },
            run: function(e) {
                var t, n = L.propHooks[this.prop];
                return this.options.duration ? this.pos = t = K.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : L.propHooks._default.set(this), this
            }
        }, L.prototype.init.prototype = L.prototype, L.propHooks = {
            _default: {
                get: function(e) {
                    var t;
                    return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = K.css(e.elem, e.prop, !1, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
                },
                set: function(e) {
                    K.fx.step[e.prop] ? K.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[K.cssProps[e.prop]] || K.cssHooks[e.prop]) ? K.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
                }
            }
        }, L.propHooks.scrollTop = L.propHooks.scrollLeft = {
            set: function(e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
            }
        }, K.each(["toggle", "show", "hide"], function(e, t) {
            var n = K.fn[t];
            K.fn[t] = function(r, i, o) {
                return null == r || "boolean" == typeof r || !e && K.isFunction(r) && K.isFunction(i) ? n.apply(this, arguments) : this.animate(P(t, !0), r, i, o)
            }
        }), K.fn.extend({
            fadeTo: function(e, t, n, r) {
                return this.filter(g).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, r)
            },
            animate: function(e, t, n, r) {
                var i = K.isEmptyObject(e),
                    o = K.speed(t, n, r),
                    a = function() {
                        var t = D(this, K.extend({}, e), o);
                        i && t.stop(!0)
                    };
                return i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
            },
            stop: function(e, n, r) {
                var i = function(e) {
                    var t = e.stop;
                    delete e.stop, t(r)
                };
                return "string" != typeof e && (r = n, n = e, e = t), n && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                    var t = !0,
                        n = null != e && e + "queueHooks",
                        o = K.timers,
                        a = K._data(this);
                    if (n) a[n] && a[n].stop && i(a[n]);
                    else for (n in a) a[n] && a[n].stop && Qt.test(n) && i(a[n]);
                    for (n = o.length; n--;) o[n].elem === this && (null == e || o[n].queue === e) && (o[n].anim.stop(r), t = !1, o.splice(n, 1));
                    (t || !r) && K.dequeue(this, e)
                })
            }
        }), K.each({
            slideDown: P("show"),
            slideUp: P("hide"),
            slideToggle: P("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(e, t) {
            K.fn[e] = function(e, n, r) {
                return this.animate(t, e, n, r)
            }
        }), K.speed = function(e, t, n) {
            var r = e && "object" == typeof e ? K.extend({}, e) : {
                complete: n || !n && t || K.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !K.isFunction(t) && t
            };
            return r.duration = K.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in K.fx.speeds ? K.fx.speeds[r.duration] : K.fx.speeds._default, null != r.queue && r.queue !== !0 || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
                K.isFunction(r.old) && r.old.call(this), r.queue && K.dequeue(this, r.queue)
            }, r
        }, K.easing = {
            linear: function(e) {
                return e
            },
            swing: function(e) {
                return .5 - Math.cos(e * Math.PI) / 2
            }
        }, K.timers = [], K.fx = L.prototype.init, K.fx.tick = function() {
            for (var e, t = K.timers, n = 0; n < t.length; n++) e = t[n], !e() && t[n] === e && t.splice(n--, 1);
            t.length || K.fx.stop()
        }, K.fx.timer = function(e) {
            e() && K.timers.push(e) && !Xt && (Xt = setInterval(K.fx.tick, K.fx.interval))
        }, K.fx.interval = 13, K.fx.stop = function() {
            clearInterval(Xt), Xt = null
        }, K.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, K.fx.step = {}, K.expr && K.expr.filters && (K.expr.filters.animated = function(e) {
            return K.grep(K.timers, function(t) {
                return e === t.elem
            }).length
        });
        var en = /^(?:body|html)$/i;
        K.fn.offset = function(e) {
            if (arguments.length) return e === t ? this : this.each(function(t) {
                K.offset.setOffset(this, e, t)
            });
            var n, r, i, o, a, s, u, l = {
                    top: 0,
                    left: 0
                },
                c = this[0],
                f = c && c.ownerDocument;
            if (f) return (r = f.body) === c ? K.offset.bodyOffset(c) : (n = f.documentElement, K.contains(n, c) ? ("undefined" != typeof c.getBoundingClientRect && (l = c.getBoundingClientRect()), i = R(f), o = n.clientTop || r.clientTop || 0, a = n.clientLeft || r.clientLeft || 0, s = i.pageYOffset || n.scrollTop, u = i.pageXOffset || n.scrollLeft, {
                top: l.top + s - o,
                left: l.left + u - a
            }) : l)
        }, K.offset = {
            bodyOffset: function(e) {
                var t = e.offsetTop,
                    n = e.offsetLeft;
                return K.support.doesNotIncludeMarginInBodyOffset && (t += parseFloat(K.css(e, "marginTop")) || 0, n += parseFloat(K.css(e, "marginLeft")) || 0), {
                    top: t,
                    left: n
                }
            },
            setOffset: function(e, t, n) {
                var r = K.css(e, "position");
                "static" === r && (e.style.position = "relative");
                var i, o, a = K(e),
                    s = a.offset(),
                    u = K.css(e, "top"),
                    l = K.css(e, "left"),
                    c = ("absolute" === r || "fixed" === r) && K.inArray("auto", [u, l]) > -1,
                    f = {},
                    d = {};
                c ? (d = a.position(), i = d.top, o = d.left) : (i = parseFloat(u) || 0, o = parseFloat(l) || 0), K.isFunction(t) && (t = t.call(e, n, s)), null != t.top && (f.top = t.top - s.top + i), null != t.left && (f.left = t.left - s.left + o), "using" in t ? t.using.call(e, f) : a.css(f)
            }
        }, K.fn.extend({
            position: function() {
                if (this[0]) {
                    var e = this[0],
                        t = this.offsetParent(),
                        n = this.offset(),
                        r = en.test(t[0].nodeName) ? {
                            top: 0,
                            left: 0
                        } : t.offset();
                    return n.top -= parseFloat(K.css(e, "marginTop")) || 0, n.left -= parseFloat(K.css(e, "marginLeft")) || 0, r.top += parseFloat(K.css(t[0], "borderTopWidth")) || 0, r.left += parseFloat(K.css(t[0], "borderLeftWidth")) || 0, {
                        top: n.top - r.top,
                        left: n.left - r.left
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var e = this.offsetParent || B.body; e && !en.test(e.nodeName) && "static" === K.css(e, "position");) e = e.offsetParent;
                    return e || B.body
                })
            }
        }), K.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(e, n) {
            var r = /Y/.test(n);
            K.fn[e] = function(i) {
                return K.access(this, function(e, i, o) {
                    var a = R(e);
                    return o === t ? a ? n in a ? a[n] : a.document.documentElement[i] : e[i] : void(a ? a.scrollTo(r ? K(a).scrollLeft() : o, r ? o : K(a).scrollTop()) : e[i] = o)
                }, e, i, arguments.length, null)
            }
        }), K.each({
            Height: "height",
            Width: "width"
        }, function(e, n) {
            K.each({
                padding: "inner" + e,
                content: n,
                "": "outer" + e
            }, function(r, i) {
                K.fn[i] = function(i, o) {
                    var a = arguments.length && (r || "boolean" != typeof i),
                        s = r || (i === !0 || o === !0 ? "margin" : "border");
                    return K.access(this, function(n, r, i) {
                        var o;
                        return K.isWindow(n) ? n.document.documentElement["client" + e] : 9 === n.nodeType ? (o = n.documentElement, Math.max(n.body["scroll" + e], o["scroll" + e], n.body["offset" + e], o["offset" + e], o["client" + e])) : i === t ? K.css(n, r, i, s) : K.style(n, r, i, s)
                    }, n, a ? i : t, a, null)
                }
            })
        }), e.jQuery = e.$ = K, "function" == typeof define && define.amd && define.amd.jQuery && define("jquery", [], function() {
            return K
        })
    }(window), function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : "object" == typeof exports ? exports.Regular = t() : e.Regular = t()
}(this, function() {
    return function(e) {
        function t(r) {
            if (n[r]) return n[r].exports;
            var i = n[r] = {
                exports: {},
                id: r,
                loaded: !1
            };
            return e[r].call(i.exports, i, i.exports, t), i.loaded = !0, i.exports
        }
        var n = {};
        return t.m = e, t.c = n, t.p = "", t(0)
    }([function(e, t, n) {
        var r = n(1),
            i = n(2),
            o = e.exports = n(3),
            a = o.Parser,
            s = o.Lexer;
        r.browser && (n(6), n(7), n(8), o.dom = n(4)), o.env = r, o.util = n(5), o.parse = function(e, t) {
            t = t || {}, (t.BEGIN || t.END) && (t.BEGIN && (i.BEGIN = t.BEGIN), t.END && (i.END = t.END), s.setup());
            var n = new a(e).parse();
            return t.stringify ? JSON.stringify(n) : n
        }
    }, function(e, t, n) {
        var r = n(5);
        t.svg = function() {
            return "undefined" != typeof document && document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure", "1.1")
        }(), t.browser = "undefined" != typeof document && document.nodeType, t.exprCache = r.cache(1e3), t.isRunning = !1
    }, function(e, t, n) {
        e.exports = {
            BEGIN: "{",
            END: "}",
            PRECOMPILE: !1
        }
    }, function(e, t, n) {
        var r = n(1),
            i = n(12),
            o = n(13),
            a = n(2),
            s = n(5),
            u = n(14),
            l = {};
        if (r.browser) {
            var c = n(4),
                f = n(9),
                d = n(10),
                p = c.doc;
            l = n(15)
        }
        var h = n(16),
            m = n(17),
            v = n(18),
            g = n(19),
            y = function(e, t) {
                var n = r.isRunning;
                r.isRunning = !0;
                var i, a;
                e = e || {};
                var u = "string" == typeof this.template && !e.template;
                t = t || {}, e.data = e.data || {}, e.computed = e.computed || {}, e.events = e.events || {}, this.data && s.extend(e.data, this.data), this.computed && s.extend(e.computed, this.computed), this.events && s.extend(e.events, this.events), s.extend(this, e, !0), this.$parent && this.$parent._append(this), this._children = [], this.$refs = {}, a = this.template, "string" == typeof a && a.length < 16 && (i = c.find(a)) && (a = i.innerHTML), a && a.nodeType && (a = a.innerHTML), "string" == typeof a && (a = new o(a).parse(), u ? this.constructor.prototype.template = a : delete this.template), this.computed = x(this.computed), this.$root = this.$root || this, this.events && this.$on(this.events), this.$emit("$config"), this.config && this.config(this.data), this.$emit("$afterConfig");
                var f = this._body;
                this._body = null, f && f.ast && f.ast.length && (this.$body = s.getCompileFn(f.ast, f.ctx, {
                    outer: this,
                    namespace: t.namespace,
                    extra: t.extra,
                    record: !0
                })), a && (this.group = this.$compile(a, {
                    namespace: t.namespace
                }), l.node(this)), this.$parent || this.$update(), this.$ready = !0, this.$emit("$init"), this.init && this.init(this.data), this.$emit("$afterInit"), r.isRunning = n
            };
        f && (f.Regular = y), s.extend(y, {
            _directives: {
                __regexp__: []
            },
            _plugins: {},
            _protoInheritCache: ["directive", "use"],
            __after__: function(e, t) {
                var n;
                if (this.__after__ = e.__after__, t.name && y.component(t.name, this), n = t.template) {
                    var r, i;
                    "string" == typeof n && n.length < 16 && (r = c.find(n)) && (n = r), n && n.nodeType && ((i = c.attr(n, "name")) && y.component(i, this), n = n.innerHTML), "string" == typeof n && (this.prototype.template = a.PRECOMPILE ? new o(n).parse() : n)
                }
                t.computed && (this.prototype.computed = x(t.computed)), y._inheritConfig(this, e)
            },
            directive: function(e, t) {
                if ("object" === s.typeOf(e)) {
                    for (var n in e) e.hasOwnProperty(n) && this.directive(n, e[n]);
                    return this
                }
                var r, i = s.typeOf(e),
                    o = this._directives;
                if (null != t) return "function" == typeof t && (t = {
                    link: t
                }), "string" === i ? o[e] = t : "regexp" === i && (t.regexp = e, o.__regexp__.push(t)), this;
                if ("string" === i && (r = o[e])) return r;
                for (var a = o.__regexp__, u = 0, l = a.length; u < l; u++) {
                    r = a[u];
                    var c = r.regexp.test(e);
                    if (c) return r
                }
            },
            plugin: function(e, t) {
                var n = this._plugins;
                return null == t ? n[e] : (n[e] = t, this)
            },
            use: function(e) {
                return "string" == typeof e && (e = y.plugin(e)), "function" != typeof e ? this : (e(this, y), this)
            },
            config: function(e, t) {
                var n = !1;
                if ("object" == typeof e) for (var r in e)"END" !== r && "BEGIN" !== r || (n = !0), a[r] = e[r];
                n && i.setup()
            },
            expression: v.expression,
            Parser: o,
            Lexer: i,
            _addProtoInheritCache: function(e, t) {
                if (Array.isArray(e)) return e.forEach(y._addProtoInheritCache);
                var n = "_" + e + "s";
                y._protoInheritCache.push(e), y[n] = {}, y[e] || (y[e] = function(r, i) {
                    var o = this[n];
                    if ("object" == typeof r) {
                        for (var a in r) r.hasOwnProperty(a) && this[e](a, r[a]);
                        return this
                    }
                    return null == i ? o[r] : (o[r] = t ? t(i) : i, this)
                })
            },
            _inheritConfig: function(e, t) {
                var n = y._protoInheritCache,
                    r = s.slice(n);
                return r.forEach(function(n) {
                    e[n] = t[n];
                    var r = "_" + n + "s";
                    t[r] && (e[r] = s.createObject(t[r]))
                }), e
            }
        }), u(y), y._addProtoInheritCache("component"), y._addProtoInheritCache("filter", function(e) {
            return "function" == typeof e ? {
                get: e
            } : e
        }), h.mixTo(y), m.mixTo(y), y.implement({
            init: function() {},
            config: function() {},
            destroy: function() {
                this.$emit("$destroy"), this.group && this.group.destroy(!0), this.group = null, this.parentNode = null, this._watchers = null, this._children = [];
                var e = this.$parent;
                if (e) {
                    var t = e._children.indexOf(this);
                    e._children.splice(t, 1)
                }
                this.$parent = null, this.$root = null, this._handles = null, this.$refs = null
            },
            $compile: function(e, t) {
                t = t || {}, "string" == typeof e && (e = new o(e).parse());
                var n, r = this.__ext__,
                    i = t.record;
                t.extra && (this.__ext__ = t.extra), i && this._record();
                var a = this._walk(e, t);
                if (i) {
                    n = this._release();
                    var s = this;
                    n.length && (a.ondestroy = function() {
                        s.$unwatch(n)
                    })
                }
                return t.extra && (this.__ext__ = r), a
            },
            $bind: function(e, t, n) {
                var r = s.typeOf(t);
                if ("expression" === t.type || "string" === r) this._bind(e, t, n);
                else if ("array" === r) for (var i = 0, o = t.length; i < o; i++) this._bind(e, t[i]);
                else if ("object" === r) for (var i in t) t.hasOwnProperty(i) && this._bind(e, i, t[i]);
                return e.$update(), this
            },
            $unbind: function() {},
            $inject: l.inject,
            $mute: function(e) {
                e = !! e;
                var t = e === !1 && this._mute;
                return this._mute = !! e, t && this.$update(), this
            },
            _bind: function(e, t, n) {
                var r = this;
                if (!(e && e instanceof y)) throw "$bind() should pass Regular component as first argument";
                if (!t) throw "$bind() should  pass as least one expression to bind";
                if (n || (n = t), t = v.expression(t), n = v.expression(n), n.set) {
                    var i = this.$watch(t, function(t) {
                        e.$update(n, t)
                    });
                    e.$on("$destroy", function() {
                        r.$unwatch(i)
                    })
                }
                if (t.set) {
                    var o = e.$watch(n, function(e) {
                        r.$update(t, e)
                    });
                    this.$on("$destroy", e.$unwatch.bind(e, o))
                }
                n.set(e, t.get(this))
            },
            _walk: function(e, t) {
                if ("array" === s.typeOf(e)) {
                    for (var n = [], r = 0, i = e.length; r < i; r++) n.push(this._walk(e[r], t));
                    return new d(n)
                }
                return "string" == typeof e ? p.createTextNode(e) : f[e.type || "default"].call(this, e, t)
            },
            _append: function(e) {
                this._children.push(e), e.$parent = this
            },
            _handleEvent: function(e, t, n, r) {
                var i, o = this.constructor,
                    a = "function" != typeof n ? s.handleEvent.call(this, n, t) : n,
                    u = o.event(t);
                return u ? i = u.call(this, e, a, r) : c.on(e, t, a), u ? i : function() {
                    c.off(e, t, a)
                }
            },
            _touchExpr: function(e) {
                var t, n = this.__ext__,
                    r = {};
                if ("expression" !== e.type || e.touched) return e;
                if (t = e.get || (e.get = new Function(s.ctxName, s.extName, s.prefix + "return (" + e.body + ")")), r.get = n ?
                    function(e) {
                        return t(e, n)
                    } : t, e.setbody && !e.set) {
                    var i = e.setbody;
                    e.set = function(t, n, r) {
                        return e.set = new Function(s.ctxName, s.setName, s.extName, s.prefix + i), e.set(t, n, r)
                    }, e.setbody = null
                }
                return e.set && (r.set = n ?
                    function(t, r) {
                        return e.set(t, r, n)
                    } : e.set), s.extend(r, {
                    type: "expression",
                    touched: !0,
                    once: e.once || e.constant
                }), r
            },
            _f_: function(e) {
                var t = this.constructor,
                    n = t.filter(e);
                if (!n) throw Error("filter " + e + " is undefined");
                return n
            },
            _sg_: function(e, t, n) {
                if ("undefined" != typeof n) {
                    var r = this.computed,
                        i = r[e];
                    if (i) {
                        if ("expression" !== i.type || i.get || this._touchExpr(i), i.get) return i.get(this);
                        s.log("the computed '" + e + "' don't define the get function,  get data." + e + " altnately", "warn")
                    }
                }
                if ("undefined" != typeof t && "undefined" != typeof e) return n && "undefined" != typeof n[e] ? n[e] : t[e]
            },
            _ss_: function(e, t, n, r, i) {
                var o, i = this.computed,
                    r = r || "=",
                    a = i ? i[e] : null;
                if ("=" !== r) switch (o = a ? a.get(this) : n[e], r) {
                    case "+=":
                        t = o + t;
                        break;
                    case "-=":
                        t = o - t;
                        break;
                    case "*=":
                        t = o * t;
                        break;
                    case "/=":
                        t = o / t;
                        break;
                    case "%=":
                        t = o % t
                }
                if (a) {
                    if (a.set) return a.set(this, t);
                    s.log("the computed '" + e + "' don't define the set function,  assign data." + e + " altnately", "warn")
                }
                return n[e] = t, t
            }
        }), y.prototype.inject = function() {
            return s.log("use $inject instead of inject", "error"), this.$inject.apply(this, arguments)
        }, y.filter(g), e.exports = y;
        var x = function() {
            function e(e) {
                return function(t) {
                    return e.call(t, t.data)
                }
            }
            function t(e) {
                return function(t, n) {
                    return e.call(t, n, t.data), n
                }
            }
            return function(n) {
                if (n) {
                    var r, i, o, a = {};
                    for (var s in n) r = n[s], o = typeof r, "expression" !== r.type ? "string" === o ? a[s] = v.expression(r) : (i = a[s] = {
                        type: "expression"
                    }, "function" === o ? i.get = e(r) : (r.get && (i.get = e(r.get)), r.set && (i.set = t(r.set)))) : a[s] = r;
                    return a
                }
            }
        }()
    }, function(e, t, n) {
        function r(e) {
            return ("" + e).replace(/-\D/g, function(e) {
                return e.charAt(1).toUpperCase()
            })
        }
        function i(e, t) {
            return "change" === t && u.msie < 9 && e && e.tagName && "input" === e.tagName.toLowerCase() && ("checkbox" === e.type || "radio" === e.type) ? "click" : t
        }
        function o(e) {
            if (e = e || window.event, e._fixed) return e;
            this.event = e, this.target = e.target || e.srcElement;
            var t = this.type = e.type,
                n = this.button = e.button;
            if (v.test(t) && (this.pageX = null != e.pageX ? e.pageX : e.clientX + g.scrollLeft, this.pageY = null != e.pageX ? e.pageY : e.clientY + g.scrollTop, "mouseover" === t || "mouseout" === t)) {
                for (var r = e.relatedTarget || e[("mouseover" === t ? "from" : "to") + "Element"]; r && 3 === r.nodeType;) r = r.parentNode;
                this.relatedTarget = r
            }
            "DOMMouseScroll" !== t && "mousewheel" !== t || (this.wheelDelta = e.wheelDelta ? e.wheelDelta / 120 : -(e.detail || 0) / 3), this.which = e.which || e.keyCode, this.which || void 0 === n || (this.which = 1 & n ? 1 : 2 & n ? 3 : 4 & n ? 2 : 0), this._fixed = !0
        }
        var a, s, u = e.exports,
            l = n(1),
            c = n(5),
            f = n(11),
            d = document.createElement("div"),
            p = function() {},
            h = f.NAMESPACE;
        u.body = document.body, u.doc = document, u.tNode = d, d.addEventListener ? (a = function(e, t, n) {
            e.addEventListener(t, n, !1)
        }, s = function(e, t, n) {
            e.removeEventListener(t, n, !1)
        }) : (a = function(e, t, n) {
            e.attachEvent("on" + t, n)
        }, s = function(e, t, n) {
            e.detachEvent("on" + t, n)
        }), u.msie = parseInt((/msie (\d+)/.exec(navigator.userAgent.toLowerCase()) || [])[1]), isNaN(u.msie) && (u.msie = parseInt((/trident\/.*; rv:(\d+)/.exec(navigator.userAgent.toLowerCase()) || [])[1])), u.find = function(e) {
            if (document.querySelector) try {
                return document.querySelector(e)
            } catch (t) {}
            if (e.indexOf("#") !== -1) return document.getElementById(e.slice(1))
        }, u.inject = function(e, t, n) {
            if (n = n || "bottom", e) {
                if (Array.isArray(e)) {
                    var r = e;
                    e = u.fragment();
                    for (var i = 0, o = r.length; i < o; i++) e.appendChild(r[i])
                }
                var a, s;
                switch (n) {
                    case "bottom":
                        t.appendChild(e);
                        break;
                    case "top":
                        (a = t.firstChild) ? t.insertBefore(e, t.firstChild) : t.appendChild(e);
                        break;
                    case "after":
                        (s = t.nextSibling) ? s.parentNode.insertBefore(e, s) : t.parentNode.appendChild(e);
                        break;
                    case "before":
                        t.parentNode.insertBefore(e, t)
                }
            }
        }, u.id = function(e) {
            return document.getElementById(e)
        }, u.create = function(e, t, n) {
            if ("svg" === t) {
                if (!l.svg) throw Error("the env need svg support");
                t = h.svg
            }
            return t ? document.createElementNS(t, e) : document.createElement(e)
        }, u.fragment = function() {
            return document.createDocumentFragment()
        };
        var m = {
            "class": function(e, t) {
                "className" in e && (!e.namespaceURI || e.namespaceURI === h.html) ? e.className = t || "" : e.setAttribute("class", t)
            },
            "for": function(e, t) {
                "htmlFor" in e ? e.htmlFor = t : e.setAttribute("for", t)
            },
            style: function(e, t) {
                e.style ? e.style.cssText = t : e.setAttribute("style", t)
            },
            value: function(e, t) {
                e.value = null != t ? t : ""
            }
        };
        u.attr = function(e, t, n) {
            if (c.isBooleanAttr(t)) {
                if ("undefined" == typeof n) return e[t] || (e.attributes.getNamedItem(t) || p).specified ? t : void 0;
                n ? (e[t] = !0, e.setAttribute(t, t), u.msie && u.msie <= 7 && (e.defaultChecked = !0)) : (e[t] = !1, e.removeAttribute(t))
            } else if ("undefined" != typeof n) m[t] ? m[t](e, n) : null === n ? e.removeAttribute(t) : e.setAttribute(t, n);
            else if (e.getAttribute) {
                var r = e.getAttribute(t, 2);
                return null === r ? void 0 : r
            }
        }, u.on = function(e, t, n) {
            var r = t.split(" ");
            n.real = function(t) {
                var r = new o(t);
                r.origin = e, n.call(e, r)
            }, r.forEach(function(t) {
                t = i(e, t), a(e, t, n.real)
            })
        }, u.off = function(e, t, n) {
            var r = t.split(" ");
            n = n.real || n, r.forEach(function(t) {
                t = i(e, t), s(e, t, n)
            })
        }, u.text = function() {
            var e = {};
            return u.msie && u.msie < 9 ? (e[1] = "innerText", e[3] = "nodeValue") : e[1] = e[3] = "textContent", function(t, n) {
                var r = e[t.nodeType];
                return null == n ? r ? t[r] : "" : void(t[r] = n)
            }
        }(), u.html = function(e, t) {
            return "undefined" == typeof t ? e.innerHTML : void(e.innerHTML = t)
        }, u.replace = function(e, t) {
            t.parentNode && t.parentNode.replaceChild(e, t)
        }, u.remove = function(e) {
            e.parentNode && e.parentNode.removeChild(e)
        }, u.css = function(e, t, n) {
            if ("object" !== c.typeOf(t)) {
                if ("undefined" == typeof n) {
                    var i;
                    return u.msie <= 8 && (i = e.currentStyle && e.currentStyle[t], "" === i && (i = "auto")), i = i || e.style[t], u.msie <= 8 && (i = "" === i ? void 0 : i), i
                }
                t = r(t), t && (e.style[t] = n)
            } else for (var o in t) t.hasOwnProperty(o) && u.css(e, o, t[o])
        }, u.addClass = function(e, t) {
            var n = e.className || "";
            (" " + n + " ").indexOf(" " + t + " ") === -1 && (e.className = n ? n + " " + t : t)
        }, u.delClass = function(e, t) {
            var n = e.className || "";
            e.className = (" " + n + " ").replace(" " + t + " ", " ").trim()
        }, u.hasClass = function(e, t) {
            var n = e.className || "";
            return (" " + n + " ").indexOf(" " + t + " ") !== -1
        };
        var v = /^(?:click|dblclick|contextmenu|DOMMouseScroll|mouse(?:\w+))$/,
            g = document;
        g = g.compatMode && "CSS1Compat" !== g.compatMode ? g.body : g.documentElement, c.extend(o.prototype, {
            immediateStop: c.isFalse,
            stop: function() {
                this.preventDefault().stopPropagation()
            },
            preventDefault: function() {
                return this.event.preventDefault ? this.event.preventDefault() : this.event.returnValue = !1, this
            },
            stopPropagation: function() {
                return this.event.stopPropagation ? this.event.stopPropagation() : this.event.cancelBubble = !0, this
            },
            stopImmediatePropagation: function() {
                this.event.stopImmediatePropagation && this.event.stopImmediatePropagation()
            }
        }), u.nextFrame = function() {
            var e = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame ||
                function(e) {
                    setTimeout(e, 16)
                }, t = window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelRequestAnimationFrame ||
                function(e) {
                    clearTimeout(e)
                };
            return function(n) {
                var r = e(n);
                return function() {
                    t(r)
                }
            }
        }();
        var y;
        u.nextReflow = u.msie ?
            function(e) {
                return u.nextFrame(function() {
                    y = document.body.offsetWidth, e()
                })
            } : u.nextFrame
    }, function(e, t, n) {
        (function(t) {
            function r(e, t) {
                "undefined" != typeof console && console[t || "log"](e)
            }
            n(20)();
            var i = e.exports,
                o = n(21),
                a = [].slice,
                s = {}.toString,
                u = "undefined" != typeof window ? window : t;
            i.noop = function() {}, i.uid = function() {
                var e = 0;
                return function() {
                    return e++
                }
            }(), i.extend = function(e, t, n) {
                for (var r in t)"undefined" != typeof e[r] && n !== !0 || (e[r] = t[r]);
                return e
            }, i.keys = function(e) {
                if (Object.keys) return Object.keys(e);
                var t = [];
                for (var n in e) e.hasOwnProperty(n) && t.push(n);
                return t
            }, i.varName = "d", i.setName = "p_", i.ctxName = "c", i.extName = "e", i.rWord = /^[\$\w]+$/, i.rSimpleAccessor = /^[\$\w]+(\.[\$\w]+)*$/, i.nextTick = "function" == typeof setImmediate ? setImmediate.bind(u) : function(e) {
                setTimeout(e, 0)
            }, i.prefix = "var " + i.varName + "=" + i.ctxName + ".data;" + i.extName + "=" + i.extName + "||'';", i.slice = function(e, t, n) {
                for (var r = [], i = t || 0, o = n || e.length; i < o; i++) {
                    var a = e[i];
                    r.push(a)
                }
                return r
            }, i.typeOf = function(e) {
                return null == e ? String(e) : s.call(e).slice(8, -1).toLowerCase()
            }, i.makePredicate = function(e, t) {
                function n(e) {
                    if (1 === e.length) return r += "return str === '" + e[0] + "';";
                    r += "switch(str){";
                    for (var t = 0; t < e.length; ++t) r += "case '" + e[t] + "':";
                    r += "return true}return false;"
                }
                "string" == typeof e && (e = e.split(" "));
                var r = "",
                    i = [];
                e: for (var o = 0; o < e.length; ++o) {
                    for (var a = 0; a < i.length; ++a) if (i[a][0].length === e[o].length) {
                        i[a].push(e[o]);
                        continue e
                    }
                    i.push([e[o]])
                }
                if (i.length > 3) {
                    i.sort(function(e, t) {
                        return t.length - e.length
                    }), r += "switch(str.length){";
                    for (var o = 0; o < i.length; ++o) {
                        var s = i[o];
                        r += "case " + s[0].length + ":", n(s)
                    }
                    r += "}"
                } else n(e);
                return new Function("str", r)
            }, i.trackErrorPos = function() {
                function e(e, t) {
                    for (var n = 0, r = 0, i = e.length; r < i; r++) {
                        var o = (e[r] || "").length;
                        if (n + o > t) return {
                            num: r,
                            line: e[r],
                            start: t - r - n,
                            prev: e[r - 1],
                            next: e[r + 1]
                        };
                        n += o
                    }
                }
                function t(e, t, n, o) {
                    var a = e.length,
                        s = t - r;
                    s < 0 && (s = 0);
                    var u = t + i;
                    u > a && (u = a);
                    var l = e.slice(s, u),
                        c = "[" + (n + 1) + "] " + (s > 0 ? ".." : ""),
                        f = u < a ? ".." : "",
                        d = c + l + f;
                    return o && (d += "\n" + new Array(t - s + c.length + 1).join(" ") + "^^^"), d
                }
                var n = /\r\n|[\n\r\u2028\u2029]/g,
                    r = 20,
                    i = 20;
                return function(r, i) {
                    i > r.length - 1 && (i = r.length - 1), n.lastIndex = 0;
                    var o = r.split(n),
                        a = e(o, i),
                        s = a.start,
                        u = a.num;
                    return (a.prev ? t(a.prev, s, u - 1) + "\n" : "") + t(a.line, s, u, !0) + "\n" + (a.next ? t(a.next, s, u + 1) + "\n" : "")
                }
            }();
            var l = /\((\?\!|\?\:|\?\=)/g;
            i.findSubCapture = function(e) {
                var t = 0,
                    n = 0,
                    r = e.length,
                    i = e.match(l);
                for (i = i ? i.length : 0; r--;) {
                    var o = e.charAt(r);
                    0 !== r && "\\" === e.charAt(r - 1) || ("(" === o && t++, ")" === o && n++)
                }
                if (t !== n) throw "RegExp: " + e + "'s bracket is not marched";
                return t - i
            }, i.escapeRegExp = function(e) {
                return e.replace(/[-[\]{}()*+?.\\^$|,#\s]/g, function(e) {
                    return "\\" + e
                })
            };
            var c = new RegExp("&(?:(#x[0-9a-fA-F]+)|(#[0-9]+)|(" + i.keys(o).join("|") + "));", "gi");
            i.convertEntity = function(e) {
                return ("" + e).replace(c, function(e, t, n, r) {
                    var i;
                    return i = n ? parseInt(n.slice(1), 10) : t ? parseInt(t.slice(2), 16) : o[r], String.fromCharCode(i)
                })
            }, i.createObject = function(e, t) {
                function n() {}
                n.prototype = e;
                var r = new n;
                return t && i.extend(r, t), r
            }, i.createProto = function(e, t) {
                function n() {
                    this.constructor = e
                }
                return n.prototype = t, e.prototype = new n
            }, i.clone = function(e) {
                var t = i.typeOf(e);
                if ("array" === t) {
                    for (var n = [], r = 0, o = e.length; r < o; r++) n[r] = e[r];
                    return n
                }
                if ("object" === t) {
                    var n = {};
                    for (var r in e) e.hasOwnProperty(r) && (n[r] = e[r]);
                    return n
                }
                return e
            }, i.equals = function(e, t) {
                var n = typeof e;
                return !("number" !== n || "number" != typeof t || !isNaN(e) || !isNaN(t)) || e === t
            };
            var f = /-([a-z])/g;
            i.camelCase = function(e) {
                return e.replace(f, function(e, t) {
                    return t.toUpperCase()
                })
            }, i.throttle = function(e, t) {
                var n, r, i, t = t || 100,
                    o = null,
                    a = 0,
                    s = function() {
                        a = +new Date, o = null, i = e.apply(n, r), n = r = null
                    };
                return function() {
                    var u = +new Date,
                        l = t - (u - a);
                    return n = this, r = arguments, l <= 0 || l > t ? (clearTimeout(o), o = null, a = u, i = e.apply(n, r), n = r = null) : o || (o = setTimeout(s, l)), i
                }
            }, i.escape = function() {
                var e = /&/g,
                    t = /</g,
                    n = />/g,
                    r = /\'/g,
                    i = /\"/g,
                    o = /[&<>\"\']/;
                return function(a) {
                    return o.test(a) ? a.replace(e, "&amp;").replace(t, "&lt;").replace(n, "&gt;").replace(r, "&#39;").replace(i, "&quot;") : a
                }
            }(), i.cache = function(e) {
                e = e || 1e3;
                var t = [],
                    n = {};
                return {
                    set: function(e, r) {
                        return t.length > this.max && (n[t.shift()] = void 0), void 0 === n[e] && t.push(e), n[e] = r, r
                    },
                    get: function(e) {
                        return void 0 === e ? n : n[e]
                    },
                    max: e,
                    len: function() {
                        return t.length
                    }
                }
            }, i.handleEvent = function(e, t) {
                var n, r = this;
                return "expression" === e.type && (n = e.get), n ?
                    function(e) {
                        r.$update(function() {
                            var t = this.data;
                            t.$event = e;
                            var i = n(r);
                            i === !1 && e && e.preventDefault && e.preventDefault(), t.$event = void 0
                        })
                    } : function() {
                        var t = a.call(arguments);
                        t.unshift(e), r.$update(function() {
                            r.$emit.apply(r, t)
                        })
                    }
            }, i.once = function(e) {
                var t = 0;
                return function() {
                    0 === t++ && e.apply(this, arguments)
                }
            }, i.fixObjStr = function(e) {
                return 0 !== e.trim().indexOf("{") ? "{" + e + "}" : e
            }, i.map = function(e, t) {
                for (var n = [], r = 0, i = e.length; r < i; r++) n.push(t(e[r], r));
                return n
            }, i.log = r, i.isVoidTag = i.makePredicate("area base br col embed hr img input keygen link menuitem meta param source track wbr r-content"), i.isBooleanAttr = i.makePredicate("selected checked disabled readonly required open autofocus controls autoplay compact loop defer multiple"), i.isFalse -
            function() {
                return !1
            }, i.isTrue -
            function() {
                return !0
            }, i.isExpr = function(e) {
                return e && "expression" === e.type
            }, i.isGroup = function(e) {
                return e.inject || e.$inject
            }, i.getCompileFn = function(e, t, n) {
                return t.$compile.bind(t, e, n)
            }
        }).call(t, function() {
            return this
        }())
    }, function(e, t, n) {
        var r = n(5),
            i = n(4),
            o = (n(22), n(3)),
            a = n(11),
            s = a.NAMESPACE;
        n(23), n(24), e.exports = {
            "r-class": function(e, t) {
                "string" == typeof t && (t = r.fixObjStr(t));
                var n = e.namespaceURI && e.namespaceURI !== s.html;
                this.$watch(t, function(t) {
                    var r = n ? e.getAttribute("class") : e.className;
                    r = " " + (r || "").replace(/\s+/g, " ") + " ";
                    for (var o in t) t.hasOwnProperty(o) && (r = r.replace(" " + o + " ", " "), t[o] === !0 && (r += o + " "));
                    r = r.trim(), n ? i.attr(e, "class", r) : e.className = r
                }, !0)
            },
            "r-style": function(e, t) {
                "string" == typeof t && (t = r.fixObjStr(t)), this.$watch(t, function(t) {
                    for (var n in t) t.hasOwnProperty(n) && i.css(e, n, t[n])
                }, !0)
            },
            "r-hide": function(e, t) {
                var n, i = null;
                r.isExpr(t) || "string" == typeof t ? this.$watch(t, function(t) {
                    var r = !! t;
                    r !== i && (i = r, r ? e.onleave ? n = e.onleave(function() {
                        e.style.display = "none", n = null
                    }) : e.style.display = "none" : (n && n(), e.style.display = "", e.onenter && e.onenter()))
                }) : t && (e.style.display = "none")
            },
            "r-html": function(e, t) {
                this.$watch(t, function(t) {
                    t = t || "", i.html(e, t)
                }, {
                    force: !0
                })
            },
            ref: {
                accept: a.COMPONENT_TYPE + a.ELEMENT_TYPE,
                link: function(e, t) {
                    var n, i = this.$refs || (this.$refs = {});
                    return r.isExpr(t) ? this.$watch(t, function(t, r) {
                        n = t, i[r] === e && (i[r] = null), n && (i[n] = e)
                    }) : i[n = t] = e, function() {
                        i[n] = null
                    }
                }
            }
        }, o.directive(e.exports)
    }, function(e, t, n) {
        function r(e) {
            var t, n = [],
                r = 0,
                i = o.noop,
                a = {
                    type: e,
                    start: function(e) {
                        return t = o.uid(), "function" == typeof e && (i = e), r > 0 ? r = 0 : a.step(), a.compelete
                    },
                    compelete: function() {
                        t = null, i && i(), i = o.noop, r = 0
                    },
                    step: function() {
                        n[r] && n[r](a.done.bind(a, t))
                    },
                    done: function(e) {
                        e === t && (r < n.length - 1 ? (r++, a.step()) : a.compelete())
                    },
                    push: function(e) {
                        n.push(e)
                    }
                };
            return a
        }
        function i(e, t) {
            function n(e) {
                f && g.push(f), f = r(e)
            }
            function i(e, t) {
                t && e()
            }
            function a(e) {
                return function() {
                    e.onenter = null, e.onleave = null
                }
            }
            var s = this.constructor;
            o.isExpr(t) && (t = t.get(this)), t = t.trim();
            for (var u, f, d, p, h, m, v = t.split(";"), g = [], y = [], x = 0, b = v.length; x < b; x++) if (u = v[x], h = u.split(":"), d = h[0] && h[0].trim(), p = h[1] && h[1].trim(), d) if (d !== l) if (d !== c) {
                var m = s.animation(d);
                if (!m || !f) throw Error(m ? "you should start with `on` or `event` in animation" : "undefined animator 【" + d + "】");
                f.push(m.call(this, {
                    element: e,
                    done: f.done,
                    param: p
                }))
            } else n(p), "leave" === p ? (e.onleave = f.start, y.push(a(e))) : "enter" === p ? (e.onenter = f.start, y.push(a(e))) : "on" + p in e ? y.push(this._handleEvent(e, p, f.start)) : (this.$on(p, f.start), y.push(this.$off.bind(this, p, f.start)));
            else n("when"), this.$watch(p, i.bind(this, f.start));
            if (y.length) return function() {
                y.forEach(function(e) {
                    e()
                })
            }
        }
        var o = n(5),
            a = n(22),
            s = (n(4), n(3)),
            u = /\s+/,
            l = "when",
            c = "on";
        s._addProtoInheritCache("animation"), s.animation({
            wait: function(e) {
                var t = parseInt(e.param) || 0;
                return function(e) {
                    setTimeout(e, t)
                }
            },
            "class": function(e) {
                var t = e.param.split(","),
                    n = t[0] || "",
                    r = parseInt(t[1]) || 1;
                return function(t) {
                    a.startClassAnimate(e.element, n, t, r)
                }
            },
            call: function(e) {
                var t = this.$expression(e.param).get,
                    n = this;
                return function(e) {
                    t(n), n.$update(), e()
                }
            },
            emit: function(e) {
                var t = e.param,
                    n = t.split(","),
                    r = n[0] || "",
                    i = n[1] ? this.$expression(n[1]).get : null;
                if (!r) throw Error("you shoud specified a eventname in emit command");
                var o = this;
                return function(e) {
                    o.$emit(r, i ? i(o) : void 0), e()
                }
            },
            style: function(e) {
                var t, n = {},
                    r = e.param,
                    i = r.split(",");
                return i.forEach(function(e) {
                    if (e = e.trim()) {
                        var r = e.split(u),
                            i = r.shift(),
                            o = r.join(" ");
                        if (!i || !o) throw Error("invalid style in command: style");
                        n[i] = o, t = !0
                    }
                }), function(r) {
                    t ? a.startStyleAnimate(e.element, n, r) : r()
                }
            }
        }), s.directive("r-animation", i), s.directive("r-anim", i)
    }, function(e, t, n) {
        function r(e) {
            e.implement({
                $timeout: function(e, t) {
                    return t = t || 0, setTimeout(function() {
                        e.call(this), this.$update()
                    }.bind(this), t)
                },
                $interval: function(e, t) {
                    return t = t || 1e3 / 60, setInterval(function() {
                        e.call(this), this.$update()
                    }.bind(this), t)
                }
            })
        }
        var i = n(3);
        i.plugin("timeout", r), i.plugin("$timeout", r)
    }, function(e, t, n) {
        function r(e, t) {
            return "object" === t ? c.keys(e) : "array" === t ? e : []
        }
        function i(e, t, n) {
            for (var r = [], i = 0, o = e.length; i < o; i++) {
                var a = this._walk(e[i], {
                    element: t,
                    fromElement: !0,
                    attrs: e,
                    extra: n
                });
                a && r.push(a)
            }
            return r
        }
        var o = n(25).diffArray,
            a = n(15),
            s = n(22),
            u = (n(26), n(10)),
            l = n(4),
            c = n(5),
            f = e.exports = {};
        f.list = function(e, t) {
            function n(e, t) {
                for (var n = 0; n < t; n++) {
                    var r = T.children.splice(e + 1, 1)[0];
                    r && r.destroy(!0)
                }
            }
            function i(n, r, i, o) {
                for (var u = n; u < r; u++) {
                    var f = i[u],
                        d = {};
                    l(d, u, f, o), d = c.createObject(b, d);
                    var p = w.$compile(e.body, {
                        extra: d,
                        namespace: x,
                        record: !0,
                        outer: t.outer
                    });
                    p.data = d;
                    var h = a.last(T.get(u));
                    h.parentNode && s.inject(a.node(p), h, "after"), T.children.splice(u + 1, 0, p)
                }
            }
            function l(e, t, n, r) {
                e[E] = t, r ? (e[_] = n, e[N] = r[n]) : (e[N] = n, e[_] = null)
            }
            function d(e, t, n, r) {
                for (var i = e; i < t; i++) {
                    var o = T.get(i + 1),
                        a = n[i];
                    l(o.data, i, a, r)
                }
            }
            function p(e, t, r, a) {
                var s = 0,
                    u = e.length;
                if (r || 0 === u && 0 === t.length || (r = o(e, t, !0)), r && r.length) {
                    for (var l = 0; l < r.length; l++) {
                        var c = r[l],
                            f = c.index,
                            p = c.removed,
                            h = c.add,
                            m = p.length;
                        if (S && m && h) {
                            for (var g = Math.min(m, h), y = 0; y < g;) v(e[f], f) !== v(p[0], f) && (n(f, 1), i(f, f + 1, e, a)), p.shift(), h--, f++, y++;
                            m = p.length
                        }
                        d(s, f, e, a), n(f, m), i(f, f + h, e, a), s = f + h - m, s = s < 0 ? 0 : s
                    }
                    if (s < u) for (var l = s; l < u; l++) {
                        var x = T.get(l + 1);
                        x.data[E] = l
                    }
                }
            }
            function h(e, t, r) {
                var o = e.length,
                    a = t.length,
                    s = Math.min(o, a);
                d(0, s, e, r), o < a ? n(o, a - o) : o > a && i(a, o, e, r)
            }
            function m(e, n, i) {
                var o, u = c.typeOf(e),
                    l = c.typeOf(n),
                    f = r(e, u),
                    d = r(n, l),
                    m = f && f.length,
                    v = d && d.length;
                if (!v && m && T.get(1)) {
                    var g = T.children.pop();
                    g.destroy && g.destroy(!0)
                }
                if ("object" === u && (o = e), S === !0 ? h(f, d, o) : p(f, d, i, o), !m && C && C.length) {
                    var E = w.$compile(C, {
                        extra: b,
                        record: !0,
                        outer: t.outer,
                        namespace: x
                    });
                    T.children.push(E), y.parentNode && s.inject(a.node(E), y, "after")
                }
            }
            var v, g, y = (f.Regular, document.createComment("Regular list")),
                x = t.namespace,
                b = t.extra,
                w = this,
                T = new u([y]),
                E = e.variable + "_index",
                _ = e.variable + "_key",
                N = e.variable,
                C = e.alternate,
                S = e.track;
            return S && S !== !0 && (S = this._touchExpr(S), g = c.createObject(b), v = function(e, t) {
                return g[N] = e, g[E] = t, S.get(w, g)
            }), this.$watch(e.sequence, m, {
                init: !0,
                diff: S !== !0,
                deep: !0
            }), T
        }, f.template = function(e, t) {
            var n, n, r = e.content,
                i = document.createComment("inlcude"),
                o = t.namespace,
                a = t.extra,
                s = new u([i]);
            if (r) {
                var l = this;
                this.$watch(r, function(e) {
                    var r = s.get(1),
                        u = typeof e;
                    r && (r.destroy(!0), s.children.pop()), e && (s.push(n = "function" === u ? e() : l.$compile("object" !== u ? String(e) : e, {
                        record: !0,
                        outer: t.outer,
                        namespace: o,
                        extra: a
                    })), i.parentNode && n.$inject(i, "before"))
                }, {
                    init: !0
                })
            }
            return s
        };
        var d = 0;
        f["if"] = function(e, t) {
            var n, r, i = this,
                o = t.extra;
            if (t && t.element) {
                var l = function(s) {
                    s ? (r && a.destroy(r), e.consequent && (n = i.$compile(e.consequent, {
                        record: !0,
                        element: t.element,
                        extra: o
                    }))) : (n && a.destroy(n), e.alternate && (r = i.$compile(e.alternate, {
                        record: !0,
                        element: t.element,
                        extra: o
                    })))
                };
                return this.$watch(e.test, l, {
                    force: !0
                }), {
                    destroy: function() {
                        n ? a.destroy(n) : r && a.destroy(r)
                    }
                }
            }
            var n, r, c = document.createComment("Regular if" + d++),
                f = new u;
            f.push(c);
            var p = null,
                h = t.namespace,
                l = function(u, l) {
                    var d = !! u;
                    d !== p && (p = d, f.children[1] && (f.children[1].destroy(!0), f.children.pop()), d ? e.consequent && e.consequent.length && (n = i.$compile(e.consequent, {
                        record: !0,
                        outer: t.outer,
                        namespace: h,
                        extra: o
                    }), f.push(n), c.parentNode && s.inject(a.node(n), c, "before")) : e.alternate && e.alternate.length && (r = i.$compile(e.alternate, {
                        record: !0,
                        outer: t.outer,
                        namespace: h,
                        extra: o
                    }), f.push(r), c.parentNode && s.inject(a.node(r), c, "before")))
                };
            return this.$watch(e.test, l, {
                force: !0,
                init: !0
            }), f
        }, f.expression = function(e, t) {
            var n = document.createTextNode("");
            return this.$watch(e, function(e) {
                l.text(n, "" + (null == e ? "" : "" + e))
            }, {
                init: !0
            }), n
        }, f.text = function(e, t) {
            var n = document.createTextNode(c.convertEntity(e.text));
            return n
        };
        var p = /^on-(.+)$/;
        f.element = function(e, t) {
            var n, r, o = e.attrs,
                u = this.constructor,
                d = e.children,
                p = t.namespace,
                h = t.extra,
                m = e.tag,
                v = u.component(m);
            if ("r-content" === m) return c.log("r-content is deprecated, use {#inc this.$body} instead (`{#include}` as same)", "warn"), this.$body && this.$body();
            if (v || "r-component" === m) return t.Component = v, f.component.call(this, e, t);
            "svg" === m && (p = "svg"), d && d.length && (n = this.$compile(d, {
                outer: t.outer,
                namespace: p,
                extra: h
            })), r = l.create(m, p, o), n && !c.isVoidTag(m) && l.inject(a.node(n), r), e.touched || (o.sort(function(e, t) {
                var n = u.directive(e.name),
                    r = u.directive(t.name);
                return n && r ? (r.priority || 1) - (n.priority || 1) : n ? 1 : r ? -1 : "type" === t.name ? 1 : -1
            }), e.touched = !0);
            var g = i.call(this, o, r, h);
            return {
                type: "element",
                group: n,
                node: function() {
                    return r
                },
                last: function() {
                    return r
                },
                destroy: function(e) {
                    e ? s.remove(r, n ? n.destroy.bind(n) : c.noop) : n && n.destroy(), g.length && g.forEach(function(e) {
                        e && ("function" == typeof e.destroy ? e.destroy() : e())
                    })
                }
            }
        }, f.component = function(e, t) {
            for (var n, r, i, o, s = e.attrs, l = t.Component, f = this.constructor, d = t.extra, h = t.namespace, m = this, v = {}, g = 0, y = s.length; g < y; g++) {
                var x = s[g],
                    b = this._touchExpr(void 0 === x.value || x.value);
                b.constant && (b = x.value = b.get(this)), x.value && x.value.constant === !0 && (b = b.get(this));
                var w = x.name;
                if (!x.event) {
                    var T = w.match(p);
                    T && (x.event = T[1])
                }
                if ("cmpl" === x.mdf && (b = c.getCompileFn(b, this, {
                    record: !0,
                    namespace: h,
                    extra: d,
                    outer: t.outer
                })), "is" === w && !l) {
                    i = b;
                    var E = this.$get(b, !0);
                    if (l = f.component(E), "function" != typeof l) throw new Error("component " + E + " has not registed!")
                }
                var _;
                (_ = x.event) ? (o = o || {}, o[_] = c.handleEvent.call(this, b, _)) : (w = x.name = c.camelCase(w), b && "expression" === b.type ? v[w] = b.get(m) : v[w] = b, "ref" === w && null != b && (r = b), "isolate" === w && (n = "expression" === b.type ? b.get(m) : parseInt(b === !0 ? 3 : b, 10), v.isolate = n))
            }
            var N, C = {
                    data: v,
                    events: o,
                    $parent: 2 & n ? null : this,
                    $root: this.$root,
                    $outer: t.outer,
                    _body: {
                        ctx: this,
                        ast: e.children
                    }
                },
                t = {
                    namespace: h,
                    extra: t.extra
                },
                S = new l(C, t);
            r && this.$refs && (N = l.directive("ref").link, this.$on("$destroy", N.call(this, S, r))), r && m.$refs && (m.$refs[r] = S);
            for (var g = 0, y = s.length; g < y; g++) {
                var x = s[g],
                    b = x.value || !0,
                    w = x.name;
                "expression" !== b.type || x.event || (b = m._touchExpr(b), 2 & n || this.$watch(b, function(e, t) {
                    this.data[e] = t
                }.bind(S, w), {
                    sync: !0
                }), !b.set || 1 & n || S.$watch(w, m.$update.bind(m, b), {
                    init: !0
                }))
            }
            if (i && "expression" === i.type) {
                var A = new u;
                return A.push(S), this.$watch(i, function(e) {
                    var t = f.component(e);
                    if (!t) throw new Error("component " + e + " has not registed!");
                    var n = new t(C),
                        i = A.children.pop();
                    A.push(n), n.$inject(a.last(i), "after"), i.destroy(), r && (m.$refs[r] = n)
                }, {
                    sync: !0
                }), A
            }
            return S
        }, f.attribute = function(e, t) {
            var n = e,
                r = n.name,
                i = n.value || "",
                o = i.constant,
                a = this.constructor,
                s = a.directive(r),
                u = t.element,
                f = this;
            if (i = this._touchExpr(i), o && (i = i.get(this)), s && s.link) {
                var d = s.link.call(f, u, i, r, t.attrs);
                return "function" == typeof d && (d = {
                    destroy: d
                }), d
            }
            if ("expression" === i.type ? this.$watch(i, function(e, t) {
                l.attr(u, r, e)
            }, {
                init: !0
            }) : c.isBooleanAttr(r) ? l.attr(u, r, !0) : l.attr(u, r, i), !t.fromElement) return {
                destroy: function() {
                    l.attr(u, r, null)
                }
            }
        }
    }, function(e, t, n) {
        function r(e) {
            this.children = e || []
        }
        var i = n(5),
            o = n(15),
            a = i.extend(r.prototype, {
                destroy: function(e) {
                    o.destroy(this.children, e), this.ondestroy && this.ondestroy(), this.children = null
                },
                get: function(e) {
                    return this.children[e]
                },
                push: function(e) {
                    this.children.push(e)
                }
            });
        a.inject = a.$inject = o.inject, e.exports = r
    }, function(e, t, n) {
        e.exports = {
            COMPONENT_TYPE: 1,
            ELEMENT_TYPE: 2,
            NAMESPACE: {
                html: "http://www.w3.org/1999/xhtml",
                svg: "http://www.w3.org/2000/svg"
            }
        }
    }, function(e, t, n) {
        function r(e) {
            return function(t) {
                return {
                    type: e,
                    value: t
                }
            }
        }
        function i(e, t) {
            f[c.END] && (this.markStart = f[c.END], this.markEnd = c.END), this.input = (e || "").trim(), this.opts = t || {}, this.map = 2 !== this.opts.mode ? s : u, this.states = ["INIT"], t && t.expression && (this.states.push("JST"), this.expression = !0)
        }
        function o(e) {
            for (var t, n, r = {}, i = 0, o = e.length; i < o; i++) t = e[i], n = t[2] || "INIT", (r[n] || (r[n] = {
                rules: [],
                links: []
            })).rules.push(t);
            return a(r)
        }
        function a(e) {
            function t(e, t) {
                return "string" == typeof d[t] ? l.escapeRegExp(d[t]) : String(d[t]).slice(1, -1)
            }
            var n, i, o, a, s, u, c;
            for (var f in e) {
                n = e[f], n.curIndex = 1, i = n.rules, o = [];
                for (var p = 0, h = i.length; p < h; p++) c = i[p], s = c[0], a = c[1], "string" == typeof a && (a = r(a)), "regexp" === l.typeOf(s) && (s = s.toString().slice(1, -1)), s = s.replace(/\{(\w+)\}/g, t), u = l.findSubCapture(s) + 1, n.links.push([n.curIndex, u, a]), n.curIndex += u, o.push(s);
                n.TRUNK = new RegExp("^(?:(" + o.join(")|(") + "))")
            }
            return e
        }
        var s, u, l = n(5),
            c = n(2),
            f = {
                "}": "{",
                "]": "["
            },
            d = {
                NAME: /(?:[:_A-Za-z][-\.:_0-9A-Za-z]*)/,
                IDENT: /[\$_A-Za-z][_0-9A-Za-z\$]*/,
                SPACE: /[\r\n\t\f ]/
            },
            p = /a|(b)/.exec("a"),
            h = p && void 0 === p[1] ?
                function(e) {
                    return void 0 !== e
                } : function(e) {
                    return !!e
                }, m = i.prototype;
        m.lex = function(e) {
            e = (e || this.input).trim();
            var t, n, r, i, o, a = [];
            this.input = e, this.marks = 0, this.index = 0;
            for (var s = 0; e;) s++, o = this.state(), t = this.map[o], n = t.TRUNK.exec(e), n || this.error("Unrecoginized Token"), r = n[0].length, e = e.slice(r), i = this._process.call(this, n, t, e), i && a.push(i), this.index += r;
            return a.push({
                type: "EOF"
            }), a
        }, m.error = function(e) {
            throw Error("Parse Error: " + e + ":\n" + l.trackErrorPos(this.input, this.index))
        }, m._process = function(e, t, n) {
            for (var r, i = t.links, o = !1, a = i.length, s = 0; s < a; s++) {
                var u = i[s],
                    l = u[2],
                    c = u[0];
                if (h(e[c])) {
                    o = !0, l && (r = l.apply(this, e.slice(c, c + u[1])), r && (r.pos = this.index));
                    break
                }
            }
            if (!o) switch (n.charAt(0)) {
                case "<":
                    this.enter("TAG");
                    break;
                default:
                    this.enter("JST")
            }
            return r
        }, m.enter = function(e) {
            return this.states.push(e), this
        }, m.state = function() {
            var e = this.states;
            return e[e.length - 1]
        }, m.leave = function(e) {
            var t = this.states;
            e && t[t.length - 1] !== e || t.pop()
        }, i.setup = function() {
            d.END = c.END, d.BEGIN = c.BEGIN, s = o([v.ENTER_JST, v.ENTER_TAG, v.TEXT, v.TAG_NAME, v.TAG_OPEN, v.TAG_CLOSE, v.TAG_PUNCHOR, v.TAG_ENTER_JST, v.TAG_UNQ_VALUE, v.TAG_STRING, v.TAG_SPACE, v.TAG_COMMENT, v.JST_OPEN, v.JST_CLOSE, v.JST_COMMENT, v.JST_EXPR_OPEN, v.JST_IDENT, v.JST_SPACE, v.JST_LEAVE, v.JST_NUMBER, v.JST_PUNCHOR, v.JST_STRING, v.JST_COMMENT]), u = o([v.ENTER_JST2, v.TEXT, v.JST_COMMENT, v.JST_OPEN, v.JST_CLOSE, v.JST_EXPR_OPEN, v.JST_IDENT, v.JST_SPACE, v.JST_LEAVE, v.JST_NUMBER, v.JST_PUNCHOR, v.JST_STRING, v.JST_COMMENT])
        };
        var v = {
            ENTER_JST: [/[^\x00<]*?(?={BEGIN})/, function(e) {
                if (this.enter("JST"), e) return {
                    type: "TEXT",
                    value: e
                }
            }],
            ENTER_JST2: [/[^\x00]*?(?={BEGIN})/, function(e) {
                if (this.enter("JST"), e) return {
                    type: "TEXT",
                    value: e
                }
            }],
            ENTER_TAG: [/[^\x00]*?(?=<[\w\/\!])/, function(e) {
                if (this.enter("TAG"), e) return {
                    type: "TEXT",
                    value: e
                }
            }],
            TEXT: [/[^\x00]+/, "TEXT"],
            TAG_NAME: [/{NAME}/, "NAME", "TAG"],
            TAG_UNQ_VALUE: [/[^\{}&"'=><`\r\n\f\t ]+/, "UNQ", "TAG"],
            TAG_OPEN: [/<({NAME})\s*/, function(e, t) {
                return {
                    type: "TAG_OPEN",
                    value: t
                }
            }, "TAG"],
            TAG_CLOSE: [/<\/({NAME})[\r\n\f\t ]*>/, function(e, t) {
                return this.leave(), {
                    type: "TAG_CLOSE",
                    value: t
                }
            }, "TAG"],
            TAG_ENTER_JST: [/(?={BEGIN})/, function() {
                this.enter("JST")
            }, "TAG"],
            TAG_PUNCHOR: [/[\>\/=&]/, function(e) {
                return ">" === e && this.leave(), {
                    type: e,
                    value: e
                }
            }, "TAG"],
            TAG_STRING: [/'([^']*)'|"([^"]*)\"/, function(e, t, n) {
                var r = t || n || "";
                return {
                    type: "STRING",
                    value: r
                }
            }, "TAG"],
            TAG_SPACE: [/{SPACE}+/, null, "TAG"],
            TAG_COMMENT: [/<\!--([^\x00]*?)--\>/, function(e) {
                this.leave()
            }, "TAG"],
            JST_OPEN: ["{BEGIN}#{SPACE}*({IDENT})", function(e, t) {
                return {
                    type: "OPEN",
                    value: t
                }
            }, "JST"],
            JST_LEAVE: [/{END}/, function(e) {
                return this.markEnd === e && this.expression ? {
                    type: this.markEnd,
                    value: this.markEnd
                } : this.markEnd && this.marks ? (this.marks--, {
                    type: this.markEnd,
                    value: this.markEnd
                }) : (this.firstEnterStart = !1, this.leave("JST"), {
                    type: "END"
                })
            }, "JST"],
            JST_CLOSE: [/{BEGIN}\s*\/({IDENT})\s*{END}/, function(e, t) {
                return this.leave("JST"), {
                    type: "CLOSE",
                    value: t
                }
            }, "JST"],
            JST_COMMENT: [/{BEGIN}\!([^\x00]*?)\!{END}/, function() {
                this.leave()
            }, "JST"],
            JST_EXPR_OPEN: ["{BEGIN}", function(e, t) {
                if (e === this.markStart) {
                    if (this.expression) return {
                        type: this.markStart,
                        value: this.markStart
                    };
                    if (this.firstEnterStart || this.marks) return this.marks++, this.firstEnterStart = !1, {
                        type: this.markStart,
                        value: this.markStart
                    };
                    this.firstEnterStart = !0
                }
                return {
                    type: "EXPR_OPEN",
                    escape: !1
                }
            }, "JST"],
            JST_IDENT: ["{IDENT}", "IDENT", "JST"],
            JST_SPACE: [/[ \r\n\f]+/, null, "JST"],
            JST_PUNCHOR: [/[=!]?==|[-=><+*\/%\!]?\=|\|\||&&|\@\(|\.\.|[<\>\[\]\(\)\-\|\{}\+\*\/%?:\.!,]/, function(e) {
                return {
                    type: e,
                    value: e
                }
            }, "JST"],
            JST_STRING: [/'([^']*)'|"([^"]*)"/, function(e, t, n) {
                return {
                    type: "STRING",
                    value: t || n || ""
                }
            }, "JST"],
            JST_NUMBER: [/(?:[0-9]*\.[0-9]+|[0-9]+)(e\d+)?/, function(e) {
                return {
                    type: "NUMBER",
                    value: parseFloat(e, 10)
                }
            }, "JST"]
        };
        i.setup(), e.exports = i
    }, function(e, t, n) {
        function r(e, t) {
            t = t || {}, this.input = e, this.tokens = new s(e, t).lex(), this.pos = 0, this.length = this.tokens.length
        }
        var i = n(5),
            o = n(2),
            a = n(26),
            s = n(12),
            u = i.varName,
            l = i.ctxName,
            c = i.extName,
            f = i.makePredicate("STRING IDENT NUMBER"),
            d = i.makePredicate("true false undefined null this Array Date JSON Math NaN RegExp decodeURI decodeURIComponent encodeURI encodeURIComponent parseFloat parseInt Object"),
            p = r.prototype;
        p.parse = function() {
            this.pos = 0;
            var e = this.program();
            return "TAG_CLOSE" === this.ll().type && this.error("You may got a unclosed Tag"), e
        }, p.ll = function(e) {
            e = e || 1, e < 0 && (e += 1);
            var t = this.pos + e - 1;
            return t > this.length - 1 ? this.tokens[this.length - 1] : this.tokens[t]
        }, p.la = function(e) {
            return (this.ll(e) || "").type
        }, p.match = function(e, t) {
            var n;
            return (n = this.eat(e, t)) ? n : (n = this.ll(), void this.error("expect [" + e + (null == t ? "" : ":" + t) + ']" -> got "[' + n.type + (null == t ? "" : ":" + n.value) + "]", n.pos))
        }, p.error = function(e, t) {
            throw e = "\n【 parse failed 】 " + e + ":\n\n" + i.trackErrorPos(this.input, "number" == typeof t ? t : this.ll().pos || 0), new Error(e)
        }, p.next = function(e) {
            e = e || 1, this.pos += e
        }, p.eat = function(e, t) {
            var n = this.ll();
            if ("string" != typeof e) {
                for (var r = e.length; r--;) if (n.type === e[r]) return this.next(), n
            } else if (n.type === e && ("undefined" == typeof t || n.value === t)) return this.next(), n;
            return !1;
        }, p.program = function() {
            for (var e = [], t = this.ll();
                 "EOF" !== t.type && "TAG_CLOSE" !== t.type;) e.push(this.statement()), t = this.ll();
            return e
        }, p.statement = function() {
            var e = this.ll();
            switch (e.type) {
                case "NAME":
                case "TEXT":
                    var t = e.value;
                    for (this.next(); e = this.eat(["NAME", "TEXT"]);) t += e.value;
                    return a.text(t);
                case "TAG_OPEN":
                    return this.xml();
                case "OPEN":
                    return this.directive();
                case "EXPR_OPEN":
                    return this.interplation();
                default:
                    this.error("Unexpected token: " + this.la())
            }
        }, p.xml = function() {
            var e, t, n, r;
            return e = this.match("TAG_OPEN").value, t = this.attrs(), r = this.eat("/"), this.match(">"), r || i.isVoidTag(e) || (n = this.program(), this.eat("TAG_CLOSE", e) || this.error("expect </" + e + "> gotno matched closeTag")), a.element(e, t, n)
        }, p.xentity = function(e) {
            var t, n, r = e.value;
            if ("NAME" === e.type) {
                if (~r.indexOf(".")) {
                    var i = r.split(".");
                    r = i[0], n = i[1]
                }
                return this.eat("=") && (t = this.attvalue(n)), a.attribute(r, t, n)
            }
            return "if" !== r && this.error("current version. ONLY RULE #if #else #elseif is valid in tag, the rule #" + r + " is invalid"), this["if"](!0)
        }, p.attrs = function(e) {
            var t;
            t = e ? ["NAME"] : ["NAME", "OPEN"];
            for (var n, r = []; n = this.eat(t);) r.push(this.xentity(n));
            return r
        }, p.attvalue = function(e) {
            var t = this.ll();
            switch (t.type) {
                case "NAME":
                case "UNQ":
                case "STRING":
                    this.next();
                    var n = t.value;
                    if (~n.indexOf(o.BEGIN) && ~n.indexOf(o.END) && "cmpl" !== e) {
                        var i = !0,
                            s = new r(n, {
                                mode: 2
                            }).parse();
                        if (1 === s.length && "expression" === s[0].type) return s[0];
                        var u = [];
                        s.forEach(function(e) {
                            e.constant || (i = !1), u.push(e.body || "'" + e.text.replace(/'/g, "\\'") + "'")
                        }), u = "[" + u.join(",") + "].join('')", n = a.expression(u, null, i)
                    }
                    return n;
                case "EXPR_OPEN":
                    return this.interplation();
                default:
                    this.error("Unexpected token: " + this.la())
            }
        }, p.directive = function() {
            var e = this.ll().value;
            return this.next(), "function" == typeof this[e] ? this[e]() : void this.error("Undefined directive[" + e + "]")
        }, p.interplation = function() {
            this.match("EXPR_OPEN");
            var e = this.expression(!0);
            return this.match("END"), e
        }, p.inc = p.include = function() {
            var e = this.expression();
            return this.match("END"), a.template(e)
        }, p["if"] = function(e) {
            var t = this.expression(),
                n = [],
                r = [],
                i = n,
                o = e ? "attrs" : "statement";
            this.match("END");
            for (var s, u; !(u = this.eat("CLOSE"));) if (s = this.ll(), "OPEN" === s.type) switch (s.value) {
                case "else":
                    i = r, this.next(), this.match("END");
                    break;
                case "elseif":
                    return this.next(), r.push(this["if"](e)), a["if"](t, n, r);
                default:
                    i.push(this[o](!0))
            } else i.push(this[o](!0));
            return "if" !== u.value && this.error("Unmatched if directive"), a["if"](t, n, r)
        }, p.list = function() {
            var e, t, n, r = this.expression(),
                i = [],
                o = [],
                s = i;
            for (this.match("IDENT", "as"), e = this.match("IDENT").value, this.eat("IDENT", "by") && (this.eat("IDENT", e + "_index") ? n = !0 : (n = this.expression(), n.constant && (n = !0))), this.match("END"); !(t = this.eat("CLOSE"));) this.eat("OPEN", "else") ? (s = o, this.match("END")) : s.push(this.statement());
            return "list" !== t.value && this.error("expect list got /" + t.value + " ", t.pos), a.list(r, e, i, o, n)
        }, p.expression = function() {
            var e;
            return this.eat("@(") ? (e = this.expr(), e.once = !0, this.match(")")) : e = this.expr(), e
        }, p.expr = function() {
            this.depend = [];
            var e = this.filter(),
                t = e.get || e,
                n = e.set;
            return a.expression(t, n, !this.depend.length)
        }, p.filter = function() {
            var e, t, n, r = this.assign(),
                o = this.eat("|"),
                a = [],
                s = "t",
                u = r.set,
                c = "";
            if (o) {
                u && (e = []), t = "(function(" + s + "){";
                do c = s + " = " + l + "._f_('" + this.match("IDENT").value + "' ).get.call( " + i.ctxName + "," + s, c += this.eat(":") ? ", " + this.arguments("|").join(",") + ");" : ");", a.push(c), e && e.unshift(c.replace(" ).get.call", " ).set.call"));
                while (o = this.eat("|"));
                return a.push("return " + s), e && e.push("return " + s), n = t + a.join("") + "})(" + r.get + ")", e && (u = u.replace(i.setName, t + e.join("") + "})(" + i.setName + ")")), this.getset(n, u)
            }
            return r
        }, p.assign = function() {
            var e, t = this.condition();
            return (e = this.eat(["=", "+=", "-=", "*=", "/=", "%="])) ? (t.set || this.error("invalid lefthand expression in assignment expression"), this.getset(t.set.replace("," + i.setName, "," + this.condition().get).replace("'='", "'" + e.type + "'"), t.set)) : t
        }, p.condition = function() {
            var e = this.or();
            return this.eat("?") ? this.getset([e.get + "?", this.assign().get, this.match(":").type, this.assign().get].join("")) : e
        }, p.or = function() {
            var e = this.and();
            return this.eat("||") ? this.getset(e.get + "||" + this.or().get) : e
        }, p.and = function() {
            var e = this.equal();
            return this.eat("&&") ? this.getset(e.get + "&&" + this.and().get) : e
        }, p.equal = function() {
            var e, t = this.relation();
            return (e = this.eat(["==", "!=", "===", "!=="])) ? this.getset(t.get + e.type + this.equal().get) : t
        }, p.relation = function() {
            var e, t = this.additive();
            return (e = this.eat(["<", ">", ">=", "<="]) || this.eat("IDENT", "in")) ? this.getset(t.get + e.value + this.relation().get) : t
        }, p.additive = function() {
            var e, t = this.multive();
            return (e = this.eat(["+", "-"])) ? this.getset(t.get + e.value + this.additive().get) : t
        }, p.multive = function() {
            var e, t = this.range();
            return (e = this.eat(["*", "/", "%"])) ? this.getset(t.get + e.type + this.multive().get) : t
        }, p.range = function() {
            var e, t, n = this.unary();
            if (e = this.eat("..")) {
                t = this.unary();
                var r = "(function(start,end){var res = [],step=end>start?1:-1; for(var i = start; end>start?i <= end: i>=end; i=i+step){res.push(i); } return res })(" + n.get + "," + t.get + ")";
                return this.getset(r)
            }
            return n
        }, p.unary = function() {
            var e;
            return (e = this.eat(["+", "-", "~", "!"])) ? this.getset("(" + e.type + this.unary().get + ")") : this.member()
        }, p.member = function(e, t, n, r) {
            var o, a, s, d = !1;
            if (e)"string" == typeof t && f(t) ? n.push(t) : (n && n.length && this.depend.push(n), n = null);
            else {
                a = this.primary();
                var p = typeof a;
                "string" === p ? (n = [], n.push(a), t = a, s = c + "." + a, e = l + "._sg_('" + a + "', " + u + ", " + c + ")", d = !0) : "this" === a.get ? (e = l, n = ["this"]) : (n = null, e = a.get)
            }
            if (o = this.eat(["[", ".", "("])) switch (o.type) {
                case ".":
                    var h = this.match("IDENT").value;
                    return r = e, "(" !== this.la() ? e = l + "._sg_('" + h + "', " + e + ")" : e += "['" + h + "']", this.member(e, h, n, r);
                case "[":
                    return a = this.assign(), r = e, "(" !== this.la() ? e = l + "._sg_(" + a.get + ", " + e + ")" : e += "[" + a.get + "]", this.match("]"), this.member(e, a, n, r);
                case "(":
                    var m = this.arguments().join(",");
                    return e = e + "(" + m + ")", this.match(")"), this.member(e, null, n)
            }
            n && n.length && this.depend.push(n);
            var v = {
                get: e
            };
            return t && (v.set = l + "._ss_(" + (t.get ? t.get : "'" + t + "'") + "," + i.setName + "," + (r ? r : i.varName) + ", '=', " + (d ? 1 : 0) + ")"), v
        }, p.arguments = function(e) {
            e = e || ")";
            var t = [];
            do this.la() !== e && t.push(this.assign().get);
            while (this.eat(","));
            return t
        }, p.primary = function() {
            var e = this.ll();
            switch (e.type) {
                case "{":
                    return this.object();
                case "[":
                    return this.array();
                case "(":
                    return this.paren();
                case "STRING":
                    return this.next(), this.getset("'" + e.value + "'");
                case "NUMBER":
                    return this.next(), this.getset("" + e.value);
                case "IDENT":
                    return this.next(), d(e.value) ? this.getset(e.value) : e.value;
                default:
                    this.error("Unexpected Token: " + e.type)
            }
        }, p.object = function() {
            for (var e = [this.match("{").type], t = this.eat(["STRING", "IDENT", "NUMBER"]); t;) {
                e.push("'" + t.value + "'" + this.match(":").type);
                var n = this.assign().get;
                e.push(n), t = null, this.eat(",") && (t = this.eat(["STRING", "IDENT", "NUMBER"])) && e.push(",")
            }
            return e.push(this.match("}").type), {
                get: e.join("")
            }
        }, p.array = function() {
            var e, t = [this.match("[").type];
            if (this.eat("]")) t.push("]");
            else {
                for (;
                    (e = this.assign()) && (t.push(e.get), this.eat(","));) t.push(",");
                t.push(this.match("]").type)
            }
            return {
                get: t.join("")
            }
        }, p.paren = function() {
            this.match("(");
            var e = this.filter();
            return e.get = "(" + e.get + ")", this.match(")"), e
        }, p.getset = function(e, t) {
            return {
                get: e,
                set: t
            }
        }, e.exports = r
    }, function(e, t, n) {
        function r(e, t, n) {
            return function() {
                var r = this.supr;
                this.supr = n[e];
                var i = t.apply(this, arguments);
                return this.supr = r, i
            }
        }
        function i(e, t, n) {
            for (var i in t) t.hasOwnProperty(i) && (e[i] = s(t[i]) && s(n[i]) && a.test(t[i]) ? r(i, t[i], n) : t[i])
        }
        var o = n(5),
            a = /xy/.test(function() {
                "xy"
            }) ? /\bsupr\b/ : /.*/,
            s = function(e) {
                return "function" == typeof e
            },
            u = ["events", "data", "computed"],
            l = u.length;
        e.exports = function c(e) {
            function t() {
                a.apply(this, arguments)
            }
            function n(e) {
                for (var t = l; t--;) {
                    var n = u[t];
                    e.hasOwnProperty(n) && r.hasOwnProperty(n) && (o.extend(r[n], e[n], !0), delete e[n])
                }
                return i(r, e, s), this
            }
            e = e || {};
            var r, a = this,
                s = a && a.prototype || {};
            return "function" == typeof e ? (r = e.prototype, e.implement = n, e.extend = c, e) : (r = o.createProto(t, s), t.implement = n, t.implement(e), a.__after__ && a.__after__.call(t, a, e), t.extend = c, t)
        }
    }, function(e, t, n) {
        var r = n(4),
            i = n(22),
            o = e.exports = {
                node: function(e) {
                    var t, n, r;
                    if (e) {
                        if (e.element) return e.element;
                        if ("function" == typeof e.node) return e.node();
                        if ("number" == typeof e.nodeType) return e;
                        if (e.group) return o.node(e.group);
                        if (t = e.children) {
                            if (1 === t.length) return o.node(t[0]);
                            r = [];
                            for (var i = 0, a = t.length; i < a; i++) n = o.node(t[i]), Array.isArray(n) ? r.push.apply(r, n) : n && r.push(n);
                            return r
                        }
                    }
                },
                inject: function(e, t) {
                    var n = this,
                        a = o.node(n.group || n);
                    if (e === !1) return i.remove(a), n;
                    if (!a) return n;
                    if ("string" == typeof e && (e = r.find(e)), !e) throw Error("injected node is not found");
                    if (i.inject(a, e, t), n.$emit) {
                        var s = n.parentNode,
                            u = "after" === t || "before" === t ? e.parentNode : e;
                        n.parentNode = u, n.$emit("$inject", e, t, s)
                    }
                    return n
                },
                last: function(e) {
                    var t = e.children;
                    return "function" == typeof e.last ? e.last() : "number" == typeof e.nodeType ? e : t && t.length ? o.last(t[t.length - 1]) : e.group ? o.last(e.group) : void 0
                },
                destroy: function(e, t) {
                    if (e) {
                        if (Array.isArray(e)) for (var n = 0, i = e.length; n < i; n++) o.destroy(e[n], t);
                        var a = e.children;
                        if ("function" == typeof e.destroy) return e.destroy(t);
                        "number" == typeof e.nodeType && t && r.remove(e), a && a.length && (o.destroy(a, !0), e.children = null)
                    }
                }
            };
        r.element = function(e, t) {
            if (!e) return t ? [] : null;
            var n = o.node(e);
            if (1 === n.nodeType) return t ? [n] : n;
            for (var r = [], i = 0; i < n.length; i++) {
                var a = n[i];
                if (a && 1 === a.nodeType) {
                    if (!t) return a;
                    r.push(a)
                }
            }
            return t ? r : r[0]
        }
    }, function(e, t, n) {
        function r() {}
        var i = [].slice,
            o = n(5),
            a = {
                $on: function(e, t) {
                    if ("object" == typeof e) for (var n in e) this.$on(n, e[n]);
                    else {
                        var r = this,
                            i = r._handles || (r._handles = {}),
                            o = i[e] || (i[e] = []);
                        o.push(t)
                    }
                    return this
                },
                $off: function(e, t) {
                    var n = this;
                    if (n._handles) {
                        e || (this._handles = {});
                        var r, i = n._handles;
                        if (r = i[e]) {
                            if (!t) return i[e] = [], n;
                            for (var o = 0, a = r.length; o < a; o++) if (t === r[o]) return r.splice(o, 1), n
                        }
                        return n
                    }
                },
                $emit: function(e) {
                    var t, n, r, o = this,
                        a = o._handles;
                    if (e) {
                        var n = i.call(arguments, 1),
                            r = e;
                        if (!a) return o;
                        if (t = a[r.slice(1)]) for (var s = 0, u = t.length; s < u; s++) t[s].apply(o, n);
                        if (!(t = a[r])) return o;
                        for (var l = 0, u = t.length; l < u; l++) t[l].apply(o, n);
                        return o
                    }
                },
                $one: function() {}
            };
        o.extend(r.prototype, a), r.mixTo = function(e) {
            e = "function" == typeof e ? e.prototype : e, o.extend(e, a)
        }, e.exports = r
    }, function(e, t, n) {
        function r() {}
        var i = n(5),
            o = n(18).expression,
            a = n(25),
            s = a.diffArray,
            u = a.diffObject,
            l = {
                $watch: function(e, t, n) {
                    var r, a, s, u, l = this.__ext__;
                    this._watchers || (this._watchers = []), n = n || {}, n === !0 && (n = {
                        deep: !0
                    });
                    var c = i.uid("w_");
                    if (Array.isArray(e)) {
                        for (var f = [], d = 0, p = e.length; d < p; d++) f.push(this.$expression(e[d]).get);
                        var h = [];
                        s = function(e) {
                            for (var t = !0, n = 0, r = f.length; n < r; n++) {
                                var o = f[n](e, l);
                                i.equals(o, h[n]) || (t = !1, h[n] = i.clone(o))
                            }
                            return !t && h
                        }
                    } else "function" == typeof e ? r = e.bind(this) : (e = this._touchExpr(o(e)), r = e.get, a = e.once);
                    var m = {
                        id: c,
                        get: r,
                        fn: t,
                        once: a,
                        force: n.force,
                        diff: n.diff,
                        test: s,
                        deep: n.deep,
                        last: n.sync ? r(this) : n.last
                    };
                    if (this._watchers.push(m), u = this._records && this._records.length, u && this._records[u - 1].push(c), n.init === !0) {
                        var v = this.$phase;
                        this.$phase = "digest", this._checkSingleWatch(m, this._watchers.length - 1), this.$phase = v
                    }
                    return m
                },
                $unwatch: function(e) {
                    if (e = e.id || e, this._watchers || (this._watchers = []), Array.isArray(e)) for (var t = 0, n = e.length; t < n; t++) this.$unwatch(e[t]);
                    else {
                        var r, i, o = this._watchers;
                        if (!e || !o || !(i = o.length)) return;
                        for (; i--;) r = o[i], r && r.id === e && o.splice(i, 1)
                    }
                },
                $expression: function(e) {
                    return this._touchExpr(o(e))
                },
                $digest: function() {
                    if ("digest" !== this.$phase && !this._mute) {
                        this.$phase = "digest";
                        for (var e = !1, t = 0; e = this._digest();) if (++t > 20) throw Error("there may a circular dependencies reaches");
                        t > 0 && this.$emit && this.$emit("$update"), this.$phase = null
                    }
                },
                _digest: function() {
                    var e, t, n, r = this._watchers,
                        i = !1;
                    if (r && r.length) for (var o = 0, a = r.length; o < a; o++) t = r[o], n = this._checkSingleWatch(t, o), n && (i = !0);
                    if (e = this._children, e && e.length) for (var s = 0, u = e.length; s < u; s++) {
                        var l = e[s];
                        l && l._digest() && (i = !0)
                    }
                    return i
                },
                _checkSingleWatch: function(e, t) {
                    var n = !1;
                    if (e) {
                        var r, o, a, l, c, f;
                        if (e.test) {
                            var d = e.test(this);
                            d && (n = !0, e.fn.apply(this, d))
                        } else r = e.get(this), o = e.last, a = i.typeOf(o), l = i.typeOf(r), c = !0, f, "object" === l && "object" === a && e.deep ? (f = u(r, o, e.diff), (f === !0 || f.length) && (n = !0)) : "array" !== l || "undefined" != a && "array" !== a ? (c = i.equals(r, o), c && !e.force || (e.force = null, n = !0)) : (f = s(r, e.last || [], e.diff), ("array" !== a || f === !0 || f.length) && (n = !0));
                        return n && !e.test && ("object" === l && e.deep || "array" === l ? e.last = i.clone(r) : e.last = r, e.fn.call(this, r, o, f), e.once && this._watchers.splice(t, 1)), n
                    }
                },
                $set: function(e, t) {
                    if (null != e) {
                        var n = i.typeOf(e);
                        if ("string" === n || "expression" === e.type) e = this.$expression(e), e.set(this, t);
                        else if ("function" === n) e.call(this, this.data);
                        else for (var r in e) this.$set(r, e[r])
                    }
                },
                $get: function(e, t) {
                    return t && "string" == typeof e ? e : this.$expression(e).get(this)
                },
                $update: function() {
                    var e = this;
                    do {
                        if (e.data.isolate || !e.$parent) break;
                        e = e.$parent
                    } while (e);
                    var t = e.$phase;
                    return e.$phase = "digest", this.$set.apply(this, arguments), e.$phase = t, e.$digest(), this
                },
                _record: function() {
                    this._records || (this._records = []), this._records.push([])
                },
                _release: function() {
                    return this._records.pop()
                }
            };
        i.extend(r.prototype, l), r.mixTo = function(e) {
            return e = "function" == typeof e ? e.prototype : e, i.extend(e, l)
        }, e.exports = r
    }, function(e, t, n) {
        var r = n(1).exprCache,
            i = (n(5), n(13));
        e.exports = {
            expression: function(e, t) {
                if ("string" == typeof e && (e = e.trim()) && (e = r.get(e) || r.set(e, new i(e, {
                    mode: 2,
                    expression: !0
                }).expression())), e) return e
            },
            parse: function(e) {
                return new i(e).parse()
            }
        }
    }, function(e, t, n) {
        var r = e.exports = {};
        r.json = {
            get: function(e) {
                return "undefined" != typeof JSON ? JSON.stringify(e) : e
            },
            set: function(e) {
                return "undefined" != typeof JSON ? JSON.parse(e) : e
            }
        }, r.last = function(e) {
            return e && e[e.length - 1]
        }, r.average = function(e, t) {
            return e = e || [], e.length ? r.total(e, t) / e.length : 0
        }, r.total = function(e, t) {
            var n = 0;
            if (e) return e.forEach(function(e) {
                n += t ? e[t] : e
            }), n
        }
    }, function(e, t, n) {
        function r(e, t) {
            for (var n in t) void 0 === e[n] && (e[n] = t[n]);
            return t
        }
        var i = [].slice,
            o = {}.toString;
        e.exports = function() {
            r(String.prototype, {
                trim: function() {
                    return this.replace(/^\s+|\s+$/g, "")
                }
            }), r(Array.prototype, {
                indexOf: function(e, t) {
                    t = t || 0;
                    for (var n = t, r = this.length; n < r; n++) if (this[n] === e) return n;
                    return -1
                },
                forEach: function(e, t) {
                    var n = 0,
                        r = Object(this),
                        i = r.length >>> 0;
                    if ("function" != typeof e) throw new TypeError(e + " is not a function");
                    for (; n < i;) {
                        var o;
                        n in r && (o = r[n], e.call(t, o, n, r)), n++
                    }
                },
                filter: function(e, t) {
                    var n = Object(this),
                        r = n.length >>> 0;
                    if ("function" != typeof e) throw new TypeError;
                    for (var i = [], o = 0; o < r; o++) if (o in n) {
                        var a = n[o];
                        e.call(t, a, o, n) && i.push(a)
                    }
                    return i
                }
            }), r(Function.prototype, {
                bind: function(e) {
                    var t = this,
                        n = i.call(arguments, 1);
                    return function() {
                        var r = n.concat(i.call(arguments));
                        return t.apply(e, r)
                    }
                }
            }), r(Array, {
                isArray: function(e) {
                    return "[object Array]" === o.call(e)
                }
            })
        }
    }, function(e, t, n) {
        var r = {
            quot: 34,
            amp: 38,
            apos: 39,
            lt: 60,
            gt: 62,
            nbsp: 160,
            iexcl: 161,
            cent: 162,
            pound: 163,
            curren: 164,
            yen: 165,
            brvbar: 166,
            sect: 167,
            uml: 168,
            copy: 169,
            ordf: 170,
            laquo: 171,
            not: 172,
            shy: 173,
            reg: 174,
            macr: 175,
            deg: 176,
            plusmn: 177,
            sup2: 178,
            sup3: 179,
            acute: 180,
            micro: 181,
            para: 182,
            middot: 183,
            cedil: 184,
            sup1: 185,
            ordm: 186,
            raquo: 187,
            frac14: 188,
            frac12: 189,
            frac34: 190,
            iquest: 191,
            Agrave: 192,
            Aacute: 193,
            Acirc: 194,
            Atilde: 195,
            Auml: 196,
            Aring: 197,
            AElig: 198,
            Ccedil: 199,
            Egrave: 200,
            Eacute: 201,
            Ecirc: 202,
            Euml: 203,
            Igrave: 204,
            Iacute: 205,
            Icirc: 206,
            Iuml: 207,
            ETH: 208,
            Ntilde: 209,
            Ograve: 210,
            Oacute: 211,
            Ocirc: 212,
            Otilde: 213,
            Ouml: 214,
            times: 215,
            Oslash: 216,
            Ugrave: 217,
            Uacute: 218,
            Ucirc: 219,
            Uuml: 220,
            Yacute: 221,
            THORN: 222,
            szlig: 223,
            agrave: 224,
            aacute: 225,
            acirc: 226,
            atilde: 227,
            auml: 228,
            aring: 229,
            aelig: 230,
            ccedil: 231,
            egrave: 232,
            eacute: 233,
            ecirc: 234,
            euml: 235,
            igrave: 236,
            iacute: 237,
            icirc: 238,
            iuml: 239,
            eth: 240,
            ntilde: 241,
            ograve: 242,
            oacute: 243,
            ocirc: 244,
            otilde: 245,
            ouml: 246,
            divide: 247,
            oslash: 248,
            ugrave: 249,
            uacute: 250,
            ucirc: 251,
            uuml: 252,
            yacute: 253,
            thorn: 254,
            yuml: 255,
            fnof: 402,
            Alpha: 913,
            Beta: 914,
            Gamma: 915,
            Delta: 916,
            Epsilon: 917,
            Zeta: 918,
            Eta: 919,
            Theta: 920,
            Iota: 921,
            Kappa: 922,
            Lambda: 923,
            Mu: 924,
            Nu: 925,
            Xi: 926,
            Omicron: 927,
            Pi: 928,
            Rho: 929,
            Sigma: 931,
            Tau: 932,
            Upsilon: 933,
            Phi: 934,
            Chi: 935,
            Psi: 936,
            Omega: 937,
            alpha: 945,
            beta: 946,
            gamma: 947,
            delta: 948,
            epsilon: 949,
            zeta: 950,
            eta: 951,
            theta: 952,
            iota: 953,
            kappa: 954,
            lambda: 955,
            mu: 956,
            nu: 957,
            xi: 958,
            omicron: 959,
            pi: 960,
            rho: 961,
            sigmaf: 962,
            sigma: 963,
            tau: 964,
            upsilon: 965,
            phi: 966,
            chi: 967,
            psi: 968,
            omega: 969,
            thetasym: 977,
            upsih: 978,
            piv: 982,
            bull: 8226,
            hellip: 8230,
            prime: 8242,
            Prime: 8243,
            oline: 8254,
            frasl: 8260,
            weierp: 8472,
            image: 8465,
            real: 8476,
            trade: 8482,
            alefsym: 8501,
            larr: 8592,
            uarr: 8593,
            rarr: 8594,
            darr: 8595,
            harr: 8596,
            crarr: 8629,
            lArr: 8656,
            uArr: 8657,
            rArr: 8658,
            dArr: 8659,
            hArr: 8660,
            forall: 8704,
            part: 8706,
            exist: 8707,
            empty: 8709,
            nabla: 8711,
            isin: 8712,
            notin: 8713,
            ni: 8715,
            prod: 8719,
            sum: 8721,
            minus: 8722,
            lowast: 8727,
            radic: 8730,
            prop: 8733,
            infin: 8734,
            ang: 8736,
            and: 8743,
            or: 8744,
            cap: 8745,
            cup: 8746,
            "int": 8747,
            there4: 8756,
            sim: 8764,
            cong: 8773,
            asymp: 8776,
            ne: 8800,
            equiv: 8801,
            le: 8804,
            ge: 8805,
            sub: 8834,
            sup: 8835,
            nsub: 8836,
            sube: 8838,
            supe: 8839,
            oplus: 8853,
            otimes: 8855,
            perp: 8869,
            sdot: 8901,
            lceil: 8968,
            rceil: 8969,
            lfloor: 8970,
            rfloor: 8971,
            lang: 9001,
            rang: 9002,
            loz: 9674,
            spades: 9824,
            clubs: 9827,
            hearts: 9829,
            diams: 9830,
            OElig: 338,
            oelig: 339,
            Scaron: 352,
            scaron: 353,
            Yuml: 376,
            circ: 710,
            tilde: 732,
            ensp: 8194,
            emsp: 8195,
            thinsp: 8201,
            zwnj: 8204,
            zwj: 8205,
            lrm: 8206,
            rlm: 8207,
            ndash: 8211,
            mdash: 8212,
            lsquo: 8216,
            rsquo: 8217,
            sbquo: 8218,
            ldquo: 8220,
            rdquo: 8221,
            bdquo: 8222,
            dagger: 8224,
            Dagger: 8225,
            permil: 8240,
            lsaquo: 8249,
            rsaquo: 8250,
            euro: 8364
        };
        e.exports = r
    }, function(e, t, n) {
        function r(e) {
            var t, n = 0,
                r = 0,
                o = 0,
                a = 0,
                s = 0,
                u = 5 / 3;
            return window.getComputedStyle && (t = window.getComputedStyle(e), r = i(t[f + "Duration"]) || r, o = i(t[f + "Delay"]) || o, a = i(t[d + "Duration"]) || a, s = i(t[d + "Delay"]) || s, n = Math.max(r + o, a + s)), 1e3 * n * u
        }
        function i(e) {
            var t, n = 0;
            return e ? (e.split(",").forEach(function(e) {
                t = parseFloat(e), t > n && (n = t)
            }), n) : 0
        }
        var o = n(5),
            a = n(4),
            s = {},
            u = n(1),
            l = "transitionend",
            c = "animationend",
            f = "transition",
            d = "animation";
        "ontransitionend" in window || ("onwebkittransitionend" in window ? (l += " webkitTransitionEnd", f = "webkitTransition") : ("onotransitionend" in a.tNode || "Opera" === navigator.appName) && (l += " oTransitionEnd", f = "oTransition")), "onanimationend" in window || ("onwebkitanimationend" in window ? (c += " webkitAnimationEnd", d = "webkitAnimation") : "onoanimationend" in a.tNode && (c += " oAnimationEnd", d = "oAnimation")), s.inject = function(e, t, n, r) {
            if (r = r || o.noop, Array.isArray(e)) {
                for (var i = a.fragment(), s = 0, u = 0, l = e.length; u < l; u++) i.appendChild(e[u]);
                a.inject(i, t, n);
                var c = function() {
                    s++, s === l && r()
                };
                for (l === s && r(), u = 0; u < l; u++) e[u].onenter ? e[u].onenter(c) : c()
            } else a.inject(e, t, n), e.onenter ? e.onenter(r) : r()
        }, s.remove = function(e, t) {
            function n() {
                r++, r === o && t && t()
            }
            if (e) {
                var r = 0;
                if (Array.isArray(e)) {
                    for (var i = 0, o = e.length; i < o; i++) s.remove(e[i], n);
                    return e
                }
                e.onleave ? e.onleave(function() {
                    p(e, t)
                }) : p(e, t)
            }
        };
        var p = function(e, t) {
            a.remove(e), t && t()
        };
        s.startClassAnimate = function(e, t, n, i) {
            var s, f, d, p;
            return !c && !l || u.isRunning ? n() : (p = 4 !== i ? o.once(function() {
                d && clearTimeout(d), 2 === i && a.delClass(e, s), 3 !== i && a.delClass(e, t), a.off(e, c, p), a.off(e, l, p), n()
            }) : o.once(function() {
                d && clearTimeout(d), n()
            }), 2 === i ? (a.addClass(e, t), s = o.map(t.split(/\s+/), function(e) {
                return e + "-active"
            }).join(" "), a.nextReflow(function() {
                a.addClass(e, s), f = r(e), d = setTimeout(p, f)
            })) : 4 === i ? a.nextReflow(function() {
                a.delClass(e, t), f = r(e), d = setTimeout(p, f)
            }) : a.nextReflow(function() {
                a.addClass(e, t), f = r(e), d = setTimeout(p, f)
            }), a.on(e, c, p), a.on(e, l, p), p)
        }, s.startStyleAnimate = function(e, t, n) {
            var i, s, u;
            return a.nextReflow(function() {
                a.css(e, t), i = r(e), u = setTimeout(s, i)
            }), s = o.once(function() {
                u && clearTimeout(u), a.off(e, c, s), a.off(e, l, s), n()
            }), a.on(e, c, s), a.on(e, l, s), s
        }, e.exports = s
    }, function(e, t, n) {
        function r(e, t, n) {
            if (n) for (var r, i = e.target; i && i !== n;) {
                for (var o = 0, a = t.length; o < a; o++) r = t[o], r && r.element === i && r.fire(e);
                i = i.parentNode
            }
        }
        var i = n(5),
            o = n(4),
            a = n(3);
        a._addProtoInheritCache("event"), a.directive(/^on-\w+$/, function(e, t, n, r) {
            if (n && t) {
                var i = n.split("-")[1];
                return this._handleEvent(e, i, t, r)
            }
        }), a.directive(/^(delegate|de)-\w+$/, function(e, t, n) {
            function a(e) {
                r(e, u[l], s.parentNode)
            }
            var s = this.$root,
                u = s._delegates || (s._delegates = {});
            if (n && t) {
                var l = n.split("-")[1],
                    c = i.handleEvent.call(this, t, l);
                u[l] || (u[l] = [], s.parentNode ? o.on(s.parentNode, l, a) : s.$on("$inject", function(e, t, n) {
                    var r = this.parentNode;
                    n && o.off(n, l, a), r && o.on(this.parentNode, l, a)
                }), s.$on("$destroy", function() {
                    s.parentNode && o.off(s.parentNode, l, a), u[l] = null
                }));
                var f = {
                    element: e,
                    fire: c
                };
                return u[l].push(f), function() {
                    var e = u[l];
                    if (e && e.length) for (var t = 0, n = e.length; t < n; t++) e[t] === f && e.splice(t, 1)
                }
            }
        })
    }, function(e, t, n) {
        function r(e, t) {
            function n() {
                t.set(r, this.value), i.last = this.value, r.$update()
            }
            var r = this,
                i = this.$watch(t, function(t) {
                    var n = s.slice(e.getElementsByTagName("option"));
                    n.forEach(function(n, r) {
                        n.value == t && (e.selectedIndex = r)
                    })
                });
            return u.on(e, "change", n), void 0 === t.get(r) && e.value && t.set(r, e.value), function() {
                u.off(e, "change", n)
            }
        }
        function i(e, t) {
            var n = this,
                r = this.$watch(t, function(t) {
                    e.value !== t && (e.value = null == t ? "" : "" + t)
                }),
                i = function(e) {
                    var i = this;
                    if ("cut" === e.type || "paste" === e.type) s.nextTick(function() {
                        var e = i.value;
                        t.set(n, e), r.last = e, n.$update()
                    });
                    else {
                        var o = i.value;
                        t.set(n, o), r.last = o, n.$update()
                    }
                };
            return 9 !== u.msie && "oninput" in u.tNode ? e.addEventListener("input", i) : (u.on(e, "paste", i), u.on(e, "keyup", i), u.on(e, "cut", i), u.on(e, "change", i)), void 0 === t.get(n) && e.value && t.set(n, e.value), function() {
                9 !== u.msie && "oninput" in u.tNode ? e.removeEventListener("input", i) : (u.off(e, "paste", i), u.off(e, "keyup", i), u.off(e, "cut", i), u.off(e, "change", i))
            }
        }
        function o(e, t) {
            var n = this,
                r = this.$watch(t, function(t) {
                    u.attr(e, "checked", !! t)
                }),
                i = function() {
                    var e = this.checked;
                    t.set(n, e), r.last = e, n.$update()
                };
            return t.set && u.on(e, "change", i), void 0 === t.get(n) && t.set(n, !! e.checked), function() {
                t.set && u.off(e, "change", i)
            }
        }
        function a(e, t) {
            var n = this,
                r = (this.$watch(t, function(t) {
                    t == e.value ? e.checked = !0 : e.checked = !1
                }), function() {
                    var e = this.value;
                    t.set(n, e), n.$update()
                });
            return t.set && u.on(e, "change", r), void 0 === t.get(n) && e.checked && t.set(n, e.value), function() {
                t.set && u.off(e, "change", r)
            }
        }
        var s = n(5),
            u = n(4),
            l = n(3),
            c = {
                text: i,
                select: r,
                checkbox: o,
                radio: a
            };
        l.directive("r-model", function(e, t) {
            var n = e.tagName.toLowerCase(),
                r = n;
            return "input" === r ? r = e.type || "text" : "textarea" === r && (r = "text"), "string" == typeof t && (t = this.$expression(t)), c[r] ? c[r].call(this, e, t) : "input" === n ? c.text.call(this, e, t) : void 0
        })
    }, function(e, t, n) {
        function r(e, t) {
            var n = e.length,
                r = t.length;
            if (n !== r) return !0;
            for (var i = 0; i < n; i++) if (e[i] !== t[i]) return !0;
            return !1
        }
        function i(e, t) {
            return e === t
        }
        function o(e, t, n) {
            for (var r = e.length, o = t.length, n = n || i, a = [], s = 0; s <= r; s++) a.push([s]);
            for (var u = 1; u <= o; u++) a[0][u] = u;
            for (var s = 1; s <= r; s++) for (var u = 1; u <= o; u++) n(e[s - 1], t[u - 1]) ? a[s][u] = a[s - 1][u - 1] : a[s][u] = Math.min(a[s - 1][u] + 1, a[s][u - 1] + 1);
            return a
        }
        function a(e, t, n, i) {
            if (!n) return r(e, t);
            for (var a = o(t, e, i), s = t.length, u = s, l = e.length, c = l, f = [], d = a[u][c]; u > 0 || c > 0;) if (0 !== u) if (0 !== c) {
                var p = a[u - 1][c - 1],
                    h = a[u - 1][c],
                    m = a[u][c - 1],
                    v = Math.min(m, h, p);
                v === h ? (f.unshift(2), u--, d = h) : v === p ? (p === d ? f.unshift(0) : (f.unshift(1), d = p), u--, c--) : (f.unshift(3), c--, d = m)
            } else f.unshift(2), u--;
            else f.unshift(3), c--;
            var g = 0,
                y = 3,
                x = 2,
                b = 1,
                s = 0;
            l = 0;
            for (var w = [], T = {
                index: null,
                add: 0,
                removed: []
            }, u = 0; u < f.length; u++) switch (f[u] > 0 ? null === T.index && (T.index = l) : null != T.index && (w.push(T), T = {
                index: null,
                add: 0,
                removed: []
            }), f[u]) {
                case g:
                    s++, l++;
                    break;
                case y:
                    T.add++, l++;
                    break;
                case x:
                    T.removed.push(t[s]), s++;
                    break;
                case b:
                    T.add++, T.removed.push(t[s]), s++, l++
            }
            return null != T.index && w.push(T), w
        }
        function s(e, t, n) {
            if (n) {
                var r = u.keys(e),
                    i = u.keys(t);
                return a(r, i, n, function(n, r) {
                    return e[r] === t[n]
                })
            }
            for (var o in e) if (t[o] !== e[o]) return !0;
            for (var s in t) if (t[s] !== e[s]) return !0;
            return !1
        }
        var u = n(5);
        e.exports = {
            diffArray: a,
            diffObject: s
        }
    }, function(e, t, n) {
        e.exports = {
            element: function(e, t, n) {
                return {
                    type: "element",
                    tag: e,
                    attrs: t,
                    children: n
                }
            },
            attribute: function(e, t, n) {
                return {
                    type: "attribute",
                    name: e,
                    value: t,
                    mdf: n
                }
            },
            "if": function(e, t, n) {
                return {
                    type: "if",
                    test: e,
                    consequent: t,
                    alternate: n
                }
            },
            list: function(e, t, n, r, i) {
                return {
                    type: "list",
                    sequence: e,
                    alternate: r,
                    variable: t,
                    body: n,
                    track: i
                }
            },
            expression: function(e, t, n) {
                return {
                    type: "expression",
                    body: e,
                    constant: n || !1,
                    setbody: t || !1
                }
            },
            text: function(e) {
                return {
                    type: "text",
                    text: e
                }
            },
            template: function(e) {
                return {
                    type: "template",
                    content: e
                }
            }
        }
    }])
}), Object.keys || (Object.keys = function() {
    var e = Object.prototype.hasOwnProperty,
        t = !{
            toString: null
        }.propertyIsEnumerable("toString"),
        n = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"],
        r = n.length;
    return function(i) {
        if ("object" != typeof i && "function" != typeof i || null === i) throw new TypeError("Object.keys called on non-object");
        var o = [];
        for (var a in i) e.call(i, a) && o.push(a);
        if (t) for (var s = 0; s < r; s++) e.call(i, n[s]) && o.push(n[s]);
        return o
    }
}()), Array.prototype.find || (Array.prototype.find = function(e) {
    if (null == this) throw new TypeError("Array.prototype.find called on null or undefined");
    if ("function" != typeof e) throw new TypeError("predicate must be a function");
    for (var t, n = Object(this), r = n.length >>> 0, i = arguments[1], o = 0; o < r; o++) if (t = n[o], e.call(i, t, o, n)) return t
}), function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t(require("regularjs")) : "function" == typeof define && define.amd ? define(["Regular"], t) : "object" == typeof exports ? exports.R = t(require("regularjs")) : e.R = t(e.Regular)
}(this, function(e) {
    return function(e) {
        function t(r) {
            if (n[r]) return n[r].exports;
            var i = n[r] = {
                exports: {},
                id: r,
                loaded: !1
            };
            return e[r].call(i.exports, i, i.exports, t), i.loaded = !0, i.exports
        }
        var n = {};
        return t.m = e, t.c = n, t.p = "", t(0)
    }([function(e, t, n) {
        "use strict";
        t.__esModule = !0, t.Counter = t.Digitron = t.CarouselItem = t.Carousel = t.Tab = t.Tabs = t._ = t.Component = void 0;
        var r = n(1),
            i = n(7),
            o = n(16),
            a = n(21);
        t.Component = r.Component, t._ = r._, t.Tabs = i.Tabs, t.Tab = i.Tab, t.Carousel = o.Carousel, t.CarouselItem = o.CarouselItem, t.Digitron = a.Digitron, t.Counter = a.Counter
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        t.__esModule = !0, t._ = t.Component = void 0;
        var i = n(2),
            o = r(i),
            a = n(5),
            s = r(a);
        t.Component = o["default"], t._ = s["default"]
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        t.__esModule = !0;
        var i = n(3),
            o = r(i),
            a = n(4),
            s = r(a),
            u = n(6),
            l = r(u),
            c = n(5),
            f = r(c),
            d = o["default"].extend({
                config: function() {
                    this.defaults({
                        readonly: !1,
                        disabled: !1,
                        visible: !0,
                        "class": ""
                    }), this.supr()
                },
                defaults: function() {
                    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    return f["default"].defaults.apply(f["default"], [this.data].concat(t))
                },
                watch: function() {}
            }).filter(s["default"]).directive(l["default"]);
        t["default"] = d
    }, function(t, n) {
        t.exports = e
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        t.__esModule = !0;
        var i = n(5),
            o = r(i),
            a = {
                dateFormat: o["default"].dateFormat,
                format: o["default"].format
            };
        t["default"] = a
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        t.__esModule = !0;
        var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
            function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }, o = n(3), a = r(o), s = a["default"].dom;
        a["default"].prototype.$once || (a["default"].prototype.$once = function(e, t) {
            var n = function r() {
                for (var n = arguments.length, i = Array(n), o = 0; o < n; o++) i[o] = arguments[o];
                t && t.apply(this, i), this.$off(e, r)
            };
            return this.$on(e, n)
        });
        var u = {
            noop: a["default"].util.noop,
            defaults: function(e) {
                for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                return n.forEach(function(t) {
                    for (var n in t) t.hasOwnProperty(n) && void 0 === e[n] && (e[n] = t[n])
                }), e
            },
            createBoolDirective: function(e) {
                return function(t, n) {
                    var r = this;
                    "object" === ("undefined" == typeof n ? "undefined" : i(n)) && "expression" === n.type ? this.$watch(n, function(n, i) {
                        !n != !i && e.call(r, t, n)
                    }) : void 0 === n || "" === n ? e.call(this, t, !0) : e.call(this, t, !! n)
                }
            },
            createBoolClassDirective: function(e) {
                return u.createBoolDirective(function(t, n) {
                    s[n ? "addClass" : "delClass"](t, e)
                })
            },
            dateFormat: function() {
                var e = {
                        yyyy: function(e) {
                            return e.getFullYear()
                        },
                        MM: function(e) {
                            return String(e.getMonth() + 1).padStart(2, "0")
                        },
                        dd: function(e) {
                            return String(e.getDate()).padStart(2, "0")
                        },
                        HH: function(e) {
                            return String(e.getHours()).padStart(2, "0")
                        },
                        mm: function(e) {
                            return String(e.getMinutes()).padStart(2, "0")
                        },
                        ss: function(e) {
                            return String(e.getSeconds()).padStart(2, "0")
                        }
                    },
                    t = new RegExp(Object.keys(e).join("|"), "g");
                return function(n) {
                    var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "yyyy-MM-dd HH:mm";
                    return n ? (n = new Date(n), r.replace(t, function(t) {
                        return e[t](n)
                    })) : ""
                }
            }(),
            format: function(e, t) {
                for (var n = arguments.length, r = Array(n > 2 ? n - 2 : 0), i = 2; i < n; i++) r[i - 2] = arguments[i];
                return u[t + "Format"].apply(u, [e].concat(r))
            }
        };
        t["default"] = u
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        t.__esModule = !0;
        var i = n(5),
            o = r(i),
            a = {};
        a["z-crt"] = o["default"].createBoolClassDirective("z-crt"), a["z-sel"] = o["default"].createBoolClassDirective("z-sel"), a["z-chk"] = o["default"].createBoolClassDirective("z-chk"), a["z-act"] = o["default"].createBoolClassDirective("z-act"), a["z-dis"] = o["default"].createBoolClassDirective("z-dis"), a["r-show"] = o["default"].createBoolDirective(function(e, t) {
            e.style.display = t ? "block" : ""
        }), a["r-autofocus"] = o["default"].createBoolDirective(function(e, t) {
            t && setTimeout(function() {
                return e.focus()
            }, 0)
        }), t["default"] = a
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        t.__esModule = !0, t.Tab = t.Tabs = void 0;
        var i = n(8),
            o = r(i),
            a = n(15),
            s = r(a);
        t.Tabs = o["default"], t.Tab = s["default"]
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        t.__esModule = !0;
        var i = n(9),
            o = n(14),
            a = r(o),
            s = i.ListView.extend({
                name: "tabs",
                template: a["default"],
                config: function() {
                    this.defaults({
                        current: 0,
                        titleTemplate: void 0
                    }), this.supr()
                },
                watch: function() {
                    var e = this;
                    this.$watch("current", function(t, n) {
                        e.data._selected = e.data._list[t], e.$emit("change", {
                            sender: e,
                            selected: e.data._selected,
                            current: t
                        })
                    }), this.$watch("_selected", function(t, n) {
                        e.data.current = t ? e.data._list.indexOf(t) : t
                    })
                },
                select: function(e) {
                    this.data.readonly || this.data.disabled || (this.data._selected = e, this.$emit("select", {
                        sender: this,
                        selected: e,
                        current: this.data._list.indexOf(e)
                    }))
                }
            });
        t["default"] = s
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        t.__esModule = !0, t.Item = t.ListView = void 0;
        var i = n(10),
            o = r(i),
            a = n(12),
            s = r(a);
        t.ListView = o["default"], t.Item = s["default"]
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        t.__esModule = !0;
        var i = n(1),
            o = n(11),
            a = r(o),
            s = i.Component.extend({
                name: "listView",
                template: a["default"],
                config: function() {
                    this.defaults({
                        _list: [],
                        _selected: void 0,
                        value: void 0,
                        multiple: !1,
                        cancelable: !1
                    }), this.supr(), this.watch()
                },
                watch: function() {
                    var e = this;
                    this.$watch("value", function(t, n) {
                        e.data._selected && e.data._selected.data.value === t || (e.data._selected = e.data._list.find(function(e) {
                            return e.data.value === t
                        })), e.$emit("change", {
                            sender: e,
                            selected: e.data._selected,
                            value: t
                        })
                    }), this.$watch("_selected", function(t, n) {
                        n && (n.data.selected = !1), t && (t.data.selected = !0), e.data.value = t ? t.data.value : t
                    })
                },
                select: function(e) {
                    this.data.readonly || this.data.disabled || (this.data.multiple ? e.data.selected = !e.data.selected : this.data.cancelable && this.data._selected === e ? this.data._selected = void 0 : this.data._selected = e, this.$emit("select", {
                        sender: this,
                        selected: e,
                        value: e.data.value
                    }))
                }
            });
        t["default"] = s
    }, function(e, t) {
        e.exports = '<ul class="m-listView {class}" z-dis={disabled} r-hide={!visible}>\n    {#inc this.$body}\n</ul>\n'
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        t.__esModule = !0;
        var i = n(1),
            o = n(13),
            a = r(o),
            s = i.Component.extend({
                name: "item",
                template: a["default"],
                config: function() {
                    this.defaults({
                        value: void 0,
                        selected: !1,
                        disabled: !1,
                        divider: !1,
                        title: void 0
                    }), this.supr(), this.$outer.data._list.push(this), this.$outer.data.multiple || (void 0 !== this.data.value && this.$outer.data.value === this.data.value && (this.data.selected = !0), this.data.selected && (this.$outer.data._selected = this))
                },
                destroy: function() {
                    this.$outer.data._selected === this && (this.$outer.data._selected = void 0);
                    var e = this.$outer.data._list.indexOf(this);~e && this.$outer.data._list.splice(e, 1), this.supr()
                },
                select: function() {
                    this.data.disabled || this.data.divider || (this.$outer.select(this), this.$emit("select", {
                        sender: this,
                        selected: this,
                        value: this.data.value
                    }))
                }
            }).directive({
                "z-divider": i._.createBoolClassDirective("z-divider")
            });
        t["default"] = s
    }, function(e, t) {
        e.exports = '<li class="{class}" z-sel={selected} z-dis={disabled} z-divider={divider} title={title} r-hide={!visible} on-click={this.select()}>\n    {#inc this.$body}\n</li>\n'
    }, function(e, t) {
        e.exports = '<div class="m-tabs {class}" z-dis={disabled} r-hide={!visible}>\n    <ul class="tabs_hd">\n        {#list _list as item}\n        <li z-crt={item === _selected} z-dis={item.data.disabled} title={item.data.title} r-hide={!item.data.visible} on-click={item.select()}>\n            {#if @(titleTemplate)}\n                {#inc @(titleTemplate)}\n            {#else}\n                <span>{item.data.title}</span>\n            {/if}\n        </li>\n        {/list}\n    </ul>\n    <div class="tabs_bd">\n        {#inc this.$body}\n    </div>\n</div>\n'
    }, function(e, t, n) {
        "use strict";
        t.__esModule = !0;
        var r = n(9),
            i = r.Item.extend({
                name: "tab",
                template: '{#if this.$outer.data._selected === this}<div class="tabs_item" r-animation="on:enter;class:fadeIn;">{#inc this.$body}</div>{/if}',
                config: function() {
                    this.defaults({
                        title: ""
                    }), this.supr()
                }
            });
        t["default"] = i
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        t.__esModule = !0, t.CarouselItem = t.Carousel = void 0;
        var i = n(17),
            o = r(i),
            a = n(19),
            s = r(a);
        t.Carousel = o["default"], t.CarouselItem = s["default"]
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        t.__esModule = !0;
        var i = n(1),
            o = n(18),
            a = r(o),
            s = i.Component.extend({
                name: "carousel",
                template: a["default"],
                config: function() {
                    this.defaults({
                        _list: [],
                        current: 0,
                        active: void 0,
                        duration: 4e3,
                        animation: "",
                        titleTemplate: void 0
                    }), this.supr(), this.watch(), this.resetInterval()
                },
                watch: function() {
                    var e = this;
                    this.$watch("current", function(t) {
                        e.$emit("change", {
                            sender: e,
                            current: t
                        })
                    })
                },
                select: function(e) {
                    this.data.active = this.data.current, this.data.current = e
                },
                prev: function() {
                    var e = this.data._list.length;
                    this.data.active = this.data.current, this.data.current = (this.data.current - 1 + e) % e
                },
                next: function() {
                    var e = this.data._list.length;
                    this.data.active = this.data.current, this.data.current = (this.data.current + 1) % e
                },
                resetInterval: function() {
                    var e = this;
                    clearInterval(this._interval), this._interval = setInterval(function() {
                        e.next(), e.$update()
                    }, this.data.duration)
                },
                stop: function() {
                    clearInterval(this._interval)
                }
            });
        t["default"] = s
    }, function(e, t) {
        e.exports = '<div class="m-carousel m-carousel-{animation} {class}" z-dis={disabled} r-hide={!visible}>\n    <div class="carousel_list">\n        {#inc this.$body}\n    </div>\n    <ul class="carousel_nav">\n        {#list _list as item}\n        <li data-title={item.data.title} z-crt={current === item_index} on-click={this.select(item_index) || this.resetInterval()}>\n            {#if @(titleTemplate)}{#inc @(titleTemplate)}{#else}{item.data.title}{/if}\n        </li>\n        {/list}\n    </ul>\n    <!-- <a class="carousel_btn carousel_btn-prev" on-click={this.prev() || this.resetInterval()}></a>\n    <a class="carousel_btn carousel_btn-next" on-click={this.next() || this.resetInterval()}></a> -->\n</div>\n'
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var i = n(1),
            o = n(20),
            a = r(o);
        i.Component.extend({
            name: "carouselItem",
            template: a["default"],
            config: function() {
                this.defaults({
                    title: ""
                }), this.supr(), this.$outer.data._list.push(this)
            },
            destroy: function() {
                var e = this.$outer.data._list.indexOf(this);~e && this.$outer.data._list.splice(e, 1), this.supr()
            },
            isCurrent: function() {
                return this.$outer.data._list.indexOf(this) === this.$outer.data.current
            },
            isActive: function() {
                return this.$outer.data._list.indexOf(this) === this.$outer.data.active
            },
            isPrev: function() {
                var e = this.$outer.data._list.indexOf(this),
                    t = this.$outer.data._list.length;
                return e === (this.$outer.data.current - 1 + t) % t
            },
            isNext: function() {
                var e = this.$outer.data._list.indexOf(this),
                    t = this.$outer.data._list.length;
                return e === (this.$outer.data.current + 1) % t
            }
        }).directive({
            "z-prev": i._.createBoolClassDirective("z-prev"),
            "z-next": i._.createBoolClassDirective("z-next")
        })
    }, function(e, t) {
        e.exports = '<div class="carousel_item {class}"\n    z-crt={this.isCurrent()}\n    z-act={this.isActive()}\n    z-prev={this.isPrev()}\n    z-next={this.isNext()}>\n    {#inc this.$body}\n</div>\n'
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        t.__esModule = !0, t.Counter = t.Digitron = void 0;
        var i = n(3),
            o = (r(i), n(22)),
            a = r(o),
            s = n(24),
            u = r(s);
        t.Digitron = a["default"], t.Counter = u["default"]
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        t.__esModule = !0;
        var i = n(1),
            o = n(23),
            a = r(o),
            s = i.Component.extend({
                name: "digitron",
                template: a["default"],
                config: function() {
                    this.defaults({
                        digit: 0,
                        radix: 10,
                        _direction: "Up",
                        duration: 1e3,
                        animation: "",
                        ANIMATIONS: {
                            scrollUp: "on: enter; class: a-scrollUpIn; on: leave; class: a-scrollUpOut;",
                            scrollDown: "on: enter; class: a-scrollDownIn; on: leave; class: a-scrollDownOut;",
                            flipUp: "on: enter; class: a-flipUpIn; on: leave; class: a-flipUpOut;",
                            flipDown: "on: enter; class: a-flipDownIn; on: leave; class: a-flipDownOut;",
                            flipHalfUp: "on: enter; class: z-front a-flipUpIn; on: leave; class: a-wait;",
                            flipHalfDown: "on: enter; class: z-front a-flipDownIn; on: leave; class: a-wait;"
                        },
                        HELPER_ANIMATIONS: {
                            flipHalfUp: "on: enter; class: a-wait; on: leave; class: z-front a-flipUpOut;",
                            flipHalfDown: "on: enter; class: a-wait; on: leave; class: z-front a-flipDownOut;"
                        }
                    }), this.supr()
                },
                increase: function() {
                    this.data._direction = "Up", ++this.data.digit === this.data.radix && (this.data.digit = 0, this.$emit("carry", {
                        sender: this,
                        digit: this.data.digit
                    })), this.$emit("increase", {
                        sender: this,
                        digit: this.data.digit
                    })
                },
                decrease: function() {
                    this.data._direction = "Down", 0 === this.data.digit-- && (this.data.digit = this.data.radix - 1, this.$emit("borrow", {
                        sender: this,
                        digit: this.data.digit
                    })), this.$emit("decrease", {
                        sender: this,
                        digit: this.data.digit
                    })
                }
            });
        t["default"] = s
    }, function(e, t) {
        e.exports = '<span class="u-digitron u-digitron-{animation} {class}" r-hide={!visible}>\n    {#list 0..9 as _digit}\n    {#if digit === _digit}\n        <span class="digitron_digit"\n            r-animation={ANIMATIONS[animation + _direction] || \'\'}\n            style="animation-duration: {duration}ms;">{_digit}</span>\n        <span class="digitron_helper"\n            r-animation={HELPER_ANIMATIONS[animation + _direction] || \'\'}\n            style="animation-duration: {duration}ms;"><span>{_digit}</span></span>\n    {/if}\n    {/list}\n</span>\n'
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        t.__esModule = !0;
        var i = n(1),
            o = n(25),
            a = r(o),
            s = i.Component.extend({
                name: "counter",
                template: a["default"],
                config: function() {
                    this.defaults({
                        length: 3,
                        number: 0,
                        end: 100,
                        autoStart: !0,
                        duration: 200,
                        animation: "",
                        _digits: []
                    }), this.supr(), this.watch(), this._animate = this._animate.bind(this)
                },
                watch: function() {
                    var e = this;
                    this.$watch("number", function(t) {
                        var n = e.data.length;
                        e.data._digits = String(t).slice(-n).padStart(n, "0").split("").map(function(e) {
                            return +e
                        }), e.$emit("change", {
                            sender: e,
                            number: t
                        })
                    })
                },
                init: function() {
                    this.supr(), this.data.autoStart && this.start()
                },
                destroy: function() {
                    this.supr()
                },
                start: function() {
                    setTimeout(this._animate, 1.1 * this.data.duration >> 0)
                },
                _animate: function() {
                    this.data.number !== this.data.end && (this.data.number++, this.$emit("tick", {
                        sender: this,
                        number: this.data.number
                    }), this.$update(), setTimeout(this._animate, 1.1 * this.data.duration >> 0))
                },
                reset: function() {
                    this.data.number = this.data.start
                }
            });
        t["default"] = s
    }, function(e, t) {
        e.exports = '<div class="u-counter {class}" r-hide={!visible}>\n    {#list 0..(length - 1) as index}\n    <digitron digit={_digits[index]} duration={duration} animation={animation} />\n    {/list}\n</div>\n'
    }])
});