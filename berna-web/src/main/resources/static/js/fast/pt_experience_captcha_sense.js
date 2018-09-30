!
    function(e, t) {
        "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.initNECaptcha = t() : e.initNECaptcha = t()
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
            return t.m = e, t.c = n, t.p = "/", t(0)
        }([function(e, t, n) {
            n(15), n(17), n(16), n(14);
            var r = n(12);
            e.exports = r
        }, function(e, t) {
            function n(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            function r(e, t) {
                function n() {}
                n.prototype = t.prototype, e.prototype = new n, e.prototype.constructor = e
            }
            function i(e, t, n) {
                this.name = "CaptchaError", this.code = e, this.message = e + ("(" + m[e] + ")") + (t ? " - " + t : ""), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = (new Error).stack, this.data = n || {}
            }
            var a, o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
                function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, s = "prototype", c = 100, l = 200, u = 500, d = 501, f = 502, h = 503, p = 504, v = 1e3, m = (a = {}, n(a, c, "script error"), n(a, l, "business error"), n(a, u, "request error"), n(a, d, "request api error"), n(a, f, "request script error"), n(a, h, "request img error"), n(a, p, "request timeout error"), n(a, v, "unknown error"), a);
            r(i, Error), i[s].toString = function() {
                var e = String(this.stack);
                return 0 === e.indexOf("CaptchaError:") ? e : this.name + ": " + this.message + (e ? "\n    " + e : "")
            }, i.set = function(e, t) {
                "number" == typeof e && "string" == typeof t && (m[e] = t), "object" === ("undefined" == typeof e ? "undefined" : o(e)) && e && Object.assign(m, e)
            }, i.get = function(e) {
                return m[e]
            }, i.remove = function(e) {
                String(e) in m && delete m[e]
            }, t = e.exports = i, t.SCRIPT_ERROR = c, t.BUSINESS_ERROR = l, t.REQUEST_ERROR = u, t.REQUEST_API_ERROR = d, t.REQUEST_SCRIPT_ERROR = f, t.REQUEST_IMG_ERROR = h, t.REQUEST_TIMEOUT_ERROR = p, t.UNKNOWN_ERROR = v
        }, function(e, t, n) {
            function r(e, t) {
                var n = {};
                for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
                return n
            }
            var i = Object.assign ||
                function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }, a = n(18), o = n(3), s = n(7), c = n(10), l = 0, u = function(e) {
                return "string" == typeof e ? [e, e] : Array.isArray(e) && 1 === e.length ? e.concat(e) : e
            }, d = {
                script: function(e, t) {
                    var n = this;
                    a(e, {
                        charset: "UTF-8"
                    }, function(r, i) {
                        if (r) {
                            var a = new Error("Failed to load script(" + e + ")." + r.message);
                            return a.data = {
                                url: e,
                                retry: !! n._options.retry
                            }, void t(a)
                        }
                        t(i)
                    })
                },
                image: function(e, t) {
                    var n = this,
                        r = document.createElement("img");
                    r.onload = function() {
                        r.onload = r.onerror = null, t({
                            width: r.width,
                            height: r.height,
                            src: e
                        })
                    }, r.onerror = function(i) {
                        r.onload = r.onerror = null;
                        var a = new Error("Failed to load image(" + e + ")." + i.message);
                        a.data = {
                            url: e,
                            retry: !! n._options.retry
                        }, t(a)
                    }, r.src = e
                },
                api: function(e, t, n) {
                    var r = this;
                    c(e, n, function(n, i) {
                        if (n) {
                            var a = new Error("Failed to request api(" + e + ")." + n.message);
                            return a.data = {
                                url: e,
                                retry: !! r._options.retry
                            }, void t(a)
                        }
                        t(i)
                    }, {
                        timeout: this.timeout
                    })
                }
            }, f = function(e) {
                this.id = e.id || "resource_" + l++, this.type = e.type || "script", this.url = e.url || "", this.payload = e.payload, this.timeout = e.timeout || 6e3, this._options = e, o.call(this), this.load(), this.setTimeout()
            };
            s(f, o), Object.assign(f.prototype, {
                load: function() {
                    var e = this,
                        t = d[this.type];
                    t && t.call(this, this.url, function(t) {
                        return e.resolve(t)
                    }, this.payload)
                },
                addSupport: function(e, t, n) {
                    ("function" != typeof d[e] || n) && (d[e] = t)
                },
                setTimeout: function() {
                    var e = this;
                    window.setTimeout(function() {
                        var t = String(e.url),
                            n = new Error("Timeout: failed to request " + e.type + "(" + t + ").");
                        n.data = {
                            url: t
                        }, e.resolve(n)
                    }, this.timeout)
                }
            }), f.SUPPORTS = d;
            var h = function(e) {
                d.hasOwnProperty(e) && (f[e] = function(t) {
                    var n = t.disableRetry,
                        a = t.onTryError,
                        s = r(t, ["disableRetry", "onTryError"]);
                    if (n) {
                        var c = s.url;
                        return Array.isArray(c) && (c = c[0] || ""), new f(i({}, s, {
                            url: c,
                            type: e
                        }))
                    }
                    var l = u(t.url),
                        d = new o,
                        h = function p() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                                n = l[t],
                                r = new f(i({}, s, {
                                    type: e,
                                    url: n,
                                    retry: t > 0
                                }));
                            r.then(function(e) {
                                return d.resolve(e)
                            })["catch"](function(r) {
                                var o = l.length;
                                t < o - 1 ? p(t + 1) : t === o - 1 && (r.data = i({}, r.data, {
                                    url: String(l)
                                }), d.resolve(r)), "function" == typeof a && a(r, {
                                    type: e,
                                    urls: l,
                                    url: n,
                                    index: t
                                })
                            })
                        };
                    return h(0), d
                })
            };
            for (var p in d) h(p);
            f.all = function(e) {
                var t = 0,
                    n = !1,
                    r = new o,
                    i = [];
                return e.map(function(a, o) {
                    a.then(function(a) {
                        n || (i[o] = a, t++, t === e.length && r.resolve(i))
                    })["catch"](function(e) {
                        n = !0, r.resolve(e)
                    })
                }), r
            }, e.exports = f
        }, function(e, t) {
            function n() {
                this._state = a, this._arg = void 0, this._fullfilledCallback = [], this._rejectedCallback = []
            }
            function r(e) {
                window.setTimeout(e, 1)
            }
            function i(e) {
                if (e) {
                    var t = new n;
                    e.then = function() {
                        return t.then.apply(t, arguments)
                    }, e["catch"] = function() {
                        return t["catch"].apply(t, arguments)
                    }, e["finally"] = function() {
                        return t["finally"].apply(t, arguments)
                    }, e.resolve = function() {
                        return t.resolve.apply(t, arguments)
                    }
                }
            }
            var a = "pending",
                o = "fullfilled",
                s = "rejected";
            Object.assign(n.prototype, {
                then: function(e, t) {
                    var n = function(e) {
                        return "function" == typeof e
                    };
                    return n(e) && this._fullfilledCallback.push(e), n(t) && this._rejectedCallback.push(t), this._state !== a && this._emit(this._state), this
                },
                "catch": function(e) {
                    return this.then(null, e)
                },
                "finally": function(e) {
                    return this.then(e, e)
                },
                resolve: function(e) {
                    this._state === a && (e instanceof Error ? this._state = s : this._state = o, this._arg = e, this._emit(this._state))
                },
                _emit: function(e) {
                    var t = this;
                    switch (e) {
                        case o:
                            r(function() {
                                t._fullfilledCallback.map(function(e) {
                                    return e(t._arg)
                                }), t._fullfilledCallback = [], t._rejectedCallback = []
                            });
                            break;
                        case s:
                            r(function() {
                                t._rejectedCallback.map(function(e) {
                                    return e(t._arg)
                                }), t._fullfilledCallback = [], t._rejectedCallback = []
                            })
                    }
                }
            }), n.mixin = i, e.exports = n
        }, function(e, t) {
            e.exports = function(e) {
                var t = e.protocol,
                    n = void 0 === t ? "" : t,
                    r = e.host,
                    i = void 0 === r ? "" : r,
                    a = e.port,
                    o = void 0 === a ? "" : a,
                    s = e.path,
                    c = void 0 === s ? "" : s,
                    l = e.search,
                    u = void 0 === l ? "" : l,
                    d = e.hash,
                    f = void 0 === d ? "" : d;
                if (n && (n = n.replace(/:?\/{0,2}$/, "://")), i) {
                    var h = i.match(/^([-0-9a-zA-Z.:]*)(\/.*)?/);
                    i = h[1], c = (h[2] || "") + "/" + c
                }
                if (!i && (n = ""), o) {
                    if (!i) throw Error('"host" is required, if "port" was provided');
                    o = ":" + o
                }
                return c && (c = c.replace(/^\/*|\/+/g, "/")), u && (u = u.replace(/^\??/, "?")), f && (f = f.replace(/^#?/, "#")), n + i + o + c + u + f
            }
        }, function(e, t, n) {
            var r = Object.assign ||
                function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }, i = n(2), a = n(9);
            e.exports = function(e) {
                return function(t, n, o, s) {
                    Object.assign(n, {
                        referer: a()
                    });
                    var c = r({}, e, s, {
                        url: t,
                        payload: n
                    });
                    i.api(c).then(function(e) {
                        return o(null, e)
                    })["catch"](o)
                }
            }
        }, function(e, t, n) {
            var r = Object.assign ||
                function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }, i = n(8), a = n(1), o = a.REQUEST_SCRIPT_ERROR, s = a.REQUEST_IMG_ERROR, c = a.REQUEST_API_ERROR;
            e.exports = function(e, t) {
                return function(n, l) {
                    var u = l.type,
                        d = l.url,
                        f = l.index,
                        h = {
                            script: o,
                            image: s,
                            api: c
                        },
                        p = new a(h[u], n.message, r({}, t, {
                            url: d
                        }));
                    i(p, e, {
                        times: f + 1
                    })
                }
            }
        }, function(e, t) {
            e.exports = function(e, t) {
                function n() {}
                n.prototype = t.prototype, e.prototype = new n, e.prototype.constructor = e
            }
        }, function(e, t, n) {
            function r(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            var i, a = n(5),
                o = n(4),
                s = n(1),
                c = s.REQUEST_SCRIPT_ERROR,
                l = s.REQUEST_API_ERROR,
                u = s.REQUEST_IMG_ERROR,
                d = n(3),
                f = n(2),
                h = (i = {}, r(i, l, "api"), r(i, u, "image"), r(i, c, "script"), i),
                p = null;
            e.exports = function(e, t, n) {
                var r = t.protocol,
                    i = t.apiServer,
                    s = t.__serverConfig__,
                    c = t.captchaId,
                    l = t.timeout,
                    u = new d,
                    v = function(e) {
                        var t = "/api/v2/collect";
                        return Array.isArray(e) ? e.map(function(e) {
                            return o({
                                protocol: r,
                                host: e,
                                path: t
                            })
                        }) : o({
                            protocol: r,
                            host: e,
                            path: t
                        })
                    },
                    m = v(i || s.apiServer || ["c.dun.163yun.com", "c.dun.163.com"]),
                    g = a({
                        timeout: l,
                        disableRetry: !0
                    }),
                    _ = e.data,
                    y = Object.assign({
                        id: c,
                        token: _.token || "",
                        type: h[e.code] || "other",
                        target: _.url || _.resource || "",
                        message: e.toString()
                    }, n);
                null == window.ip && (window.ip = function(e, t, n) {
                    p = {
                        ip: e,
                        dns: n
                    }
                });
                var b = new f({
                    url: r + "://nstool.netease.com/ip.js",
                    timeout: l
                });
                return b.then(function(e) {
                    e && e.parentElement.removeChild(e)
                })["finally"](function() {
                    Object.assign(y, p), g(m, y, function(e, t) {
                        if (e || t.error) {
                            console && void 0;
                            var n = new Error(e ? e.message : t.msg);
                            return n.data = {
                                url: m
                            }, void u.resolve(n)
                        }
                        u.resolve()
                    })
                }), u
            }
        }, function(e, t) {
            e.exports = function() {
                return location.href.replace(/\?[\s\S]*/, "").substring(0, 128)
            }
        }, function(e, t) {
            function n() {}
            function r(e, t, r, o) {
                function s() {
                    u.parentNode && u.parentNode.removeChild(u), window[p] = n, d && clearTimeout(d)
                }
                function c() {
                    window[p] && s()
                }
                function l(e) {
                    var t = [];
                    for (var n in e) e.hasOwnProperty(n) && t.push(g(n) + "=" + g(e[n]));
                    return t.join("&")
                }
                "object" === ("undefined" == typeof r ? "undefined" : i(r)) && (o = r, r = null), "function" == typeof t && (r = t, t = null), o || (o = {});
                var u, d, f = Math.random().toString(36).slice(2, 9),
                    h = o.prefix || "__JSONP",
                    p = o.name || h + ("_" + f) + ("_" + a++),
                    v = o.param || "callback",
                    m = o.timeout || 6e3,
                    g = window.encodeURIComponent,
                    _ = document.getElementsByTagName("script")[0] || document.head;
                return m && (d = setTimeout(function() {
                    s(), r && r(new Error("Timeout"))
                }, m)), window[p] = function(e) {
                    s(), r && r(null, e)
                }, t && (e = e.split("?")[0]), e += (~e.indexOf("?") ? "&" : "?") + l(t) + "&" + v + "=" + g(p), e = e.replace("?&", "?"), u = document.createElement("script"), u.type = "text/javascript", u.src = e, _.parentNode.insertBefore(u, _), c
            }
            var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
                function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, a = 0;
            e.exports = r
        }, function(e, t, n) {
            function r() {
                this._events = {}
            }
            var i = n(3);
            e.exports = r, Object.assign(r.prototype, {
                on: function(e, t) {
                    var n = this._events;
                    return n[e] || (n[e] = []), n[e].push(t), this
                },
                once: function(e, t) {
                    var n = this,
                        r = function i() {
                            t.apply(void 0, arguments), n.off(e, i)
                        };
                    return this.on(e, r)
                },
                off: function(e, t) {
                    if (e) if (e && !t) this._events[e] = [];
                    else {
                        var n = this._events[e] || [],
                            r = n.indexOf(t);
                        r > -1 && n.splice(r, 1);
                    } else this._events = {};
                    return this
                },
                emit: function(e) {
                    for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                    var a = this._events[e] || [],
                        o = new i,
                        s = {},
                        c = function l(e) {
                            var t = a[e];
                            if (!t) return void o.resolve(s);
                            var r = !1,
                                i = {
                                    async: function() {
                                        return r = !0, function(t) {
                                            return t instanceof Error ? void o.resolve(t) : void l(e + 1)
                                        }
                                    }
                                };
                            t.call.apply(t, [i].concat(n, [s])), !r && l(e + 1)
                        };
                    return c(0), o
                }
            })
        }, function(e, t, n) {
            function r(e, t, n) {
                t = t ||
                    function() {}, n = n ||
                    function(e) {
                        console && void 0
                    };
                var o = window.location.protocol.replace(":", ""),
                    h = {
                        protocol: "http" === o || "https" === o ? o : "https",
                        timeout: 6e3
                    };
                e = Object.assign({}, h, e);
                var p = function(t) {
                        var n = "plugins" + (d ? "" : ".min") + ".js";
                        return Array.isArray(t) ? t.map(function(t) {
                            return s({
                                protocol: e.protocol,
                                host: t,
                                path: n
                            })
                        }) : s({
                            protocol: e.protocol,
                            host: t,
                            path: n
                        })
                    },
                    v = "loader_plugins",
                    m = f[v] || a.script({
                        id: v,
                        url: p(e.staticServer || ["cstaticdun.126.net", "cstatic.dun.163yun.com"]),
                        timeout: e.timeout,
                        onTryError: u(e)
                    });
                !f[v] && (f[v] = m), m.then(function() {
                    var a = new i({
                        captchaConfig: e,
                        cache: f
                    });
                    a._hooks = {
                        onload: t,
                        onerror: n
                    }, r.apply(a), a.run()
                })["catch"](function(e) {
                    f[v] = null, n(new c(l, e.message, e.data))
                })
            }
            var i = n(13),
                a = n(2),
                o = n(3),
                s = n(4),
                c = n(1),
                l = c.REQUEST_SCRIPT_ERROR,
                u = n(6),
                d = !1,
                f = {};
            r.use = function(e) {
                this._plugins || (this._plugins = []);
                var t = e.constructor,
                    n = !! t.singleton,
                    r = this._plugins.map(function(e) {
                        return e.constructor
                    }).indexOf(t) > -1;
                r && n || this._plugins.push(e)
            }, r.apply = function(e) {
                this._plugins && this._plugins.map(function(t) {
                    return t.apply(e)
                })
            }, r.VERSION = "2.1.1", r.ResourceLoader = a, r.Thenable = o, r.CaptchaError = c, e.exports = r
        }, function(e, t, n) {
            function r(e, t) {
                if (!e) throw new Error("[NECaptcha Loader] " + t)
            }
            function i(e) {
                l.call(this), r(e.captchaConfig, 'option "captchaConfig" is required.'), r(e.cache, 'option "cache" is required.'), this._captchaConfig = e.captchaConfig, this._captchaHooks = e.captchaHooks, this._cache = e.cache, this._error = null
            }
            var a = Object.assign ||
                function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }, o = n(5), s = n(4), c = n(1), l = n(11), u = n(7), d = n(2), f = n(6), h = c.REQUEST_API_ERROR, p = c.REQUEST_SCRIPT_ERROR, v = c.UNKNOWN_ERROR, m = !1;
            u(i, l), Object.assign(i.prototype, {
                run: function() {
                    var e = this;
                    this.fetchConfig(function() {
                        return e.loadResources()
                    })
                },
                fetchConfig: function(e) {
                    var t = this,
                        n = this._captchaConfig,
                        r = n.captchaId,
                        i = n.protocol,
                        c = n.timeout,
                        l = n.apiServer,
                        u = n.__serverConfig__;
                    null == l && (l = ["c.dun.163yun.com", "c.dun.163.com"]);
                    var d = function() {
                            var e = "/api/v2/getconf";
                            return Array.isArray(l) ? l.map(function(t) {
                                return s({
                                    protocol: i,
                                    host: t,
                                    path: e
                                })
                            }) : s({
                                protocol: i,
                                host: l,
                                path: e
                            })
                        },
                        p = d(),
                        v = {
                            id: r
                        },
                        g = {
                            timeout: c
                        },
                        _ = o(a({}, g, {
                            onTryError: f(this._captchaConfig)
                        })),
                        y = function() {
                            _(p, v, function(n, r) {
                                if (n || r.error) {
                                    var i = n ? n.message : r.msg,
                                        a = new Error(i + " (" + p + ")");
                                    return a.data = {
                                        url: p
                                    }, void t.catchError(a, h)
                                }
                                var o = function(e) {
                                        var n = t._captchaConfig;
                                        null == n.apiServer && (n.apiServer = e.apiServer), null == n.staticServer && (n.staticServer = e.staticServers), n.theme = e.theme, n.__serverConfig__ = e
                                    },
                                    s = r.data;
                                m && u && (s = u), o(s), t.emit("after-config", t._captchaConfig.__serverConfig__).then(e)["catch"](function(e) {
                                    return t.catchError(e)
                                })
                            })
                        };
                    this.emit("before-config", {
                        params: v,
                        jsonpOpts: g
                    }).then(y)["catch"](function(e) {
                        return t.catchError(e)
                    })
                },
                loadResources: function() {
                    var e = this,
                        t = this._captchaConfig,
                        n = t.protocol,
                        r = t.timeout,
                        i = t.staticServer,
                        a = t.__serverConfig__,
                        o = function(e, t) {
                            return Array.isArray(e) ? e.map(function(e) {
                                return s({
                                    protocol: n,
                                    host: e,
                                    path: t
                                })
                            }) : s({
                                protocol: n,
                                host: e,
                                path: t
                            })
                        };
                    this.emit("before-load", i).then(function() {
                        var t = a.resources.map(function(t) {
                            var n = o(i, t),
                                a = Array.isArray(n) ? n[0] : n,
                                s = e._cache[a];
                            return s || (s = d.script({
                                id: a,
                                url: n,
                                timeout: r,
                                onTryError: f(e._captchaConfig)
                            }), e._cache[a] = s, s["catch"](function() {
                                e._cache[a] = null
                            })), s
                        });
                        d.all(t).then(function() {
                            e.emit("after-load")["catch"](function(t) {
                                return e.catchError(t)
                            })
                        })["catch"](function(t) {
                            return e.catchError(t, p)
                        })
                    })["catch"](function(t) {
                        return e.catchError(t)
                    })
                },
                catchError: function(e, t) {
                    if (!this._error) {
                        var n = new c(t || v, e.message, e.data);
                        this._error = n, this.emit("error", n)
                    }
                }
            }), e.exports = i
        }, function(e, t) {
            Array.isArray || (Array.isArray = function(e) {
                return "[object Array]" === Object.prototype.toString.call(e)
            })
        }, function(e, t) {
            "function" != typeof Object.assign && (Object.assign = function(e) {
                if (null == e) throw new TypeError("Cannot convert undefined or null to object");
                e = Object(e);
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    if (null != n) for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            })
        }, function(e, t) {
            Array.prototype.indexOf || (Array.prototype.indexOf = function(e, t) {
                var n;
                if (null == this) throw new TypeError('"this" is null or not defined');
                var r = Object(this),
                    i = r.length >>> 0;
                if (0 === i) return -1;
                var a = +t || 0;
                if (Math.abs(a) === 1 / 0 && (a = 0), a >= i) return -1;
                for (n = Math.max(a >= 0 ? a : i - Math.abs(a), 0); n < i;) {
                    if (n in r && r[n] === e) return n;
                    n++
                }
                return -1
            })
        }, function(e, t) {
            Array.prototype.map || (Array.prototype.map = function(e, t) {
                var n, r, i;
                if (null == this) throw new TypeError(" this is null or not defined");
                var a = Object(this),
                    o = a.length >>> 0;
                if ("[object Function]" !== Object.prototype.toString.call(e)) throw new TypeError(e + " is not a function");
                for (t && (n = t), r = new Array(o), i = 0; i < o;) {
                    var s, c;
                    i in a && (s = a[i], c = e.call(n, s, i, a), r[i] = c), i++
                }
                return r
            })
        }, function(e, t) {
            function n(e, t) {
                for (var n in t) e.setAttribute(n, t[n])
            }
            function r(e, t) {
                e.onload = function() {
                    this.onerror = this.onload = null, t(null, e)
                }, e.onerror = function() {
                    this.onerror = this.onload = null, t(new Error("Failed to load " + this.src), e)
                }
            }
            function i(e, t) {
                e.onreadystatechange = function() {
                    "complete" != this.readyState && "loaded" != this.readyState || (this.onreadystatechange = null, t(null, e))
                }
            }
            e.exports = function(e, t, a) {
                var o = document.head || document.getElementsByTagName("head")[0],
                    s = document.createElement("script");
                "function" == typeof t && (a = t, t = {}), t = t || {}, a = a ||
                    function() {}, s.type = t.type || "text/javascript", s.charset = t.charset || "utf8", s.async = !("async" in t && !t.async), s.src = e, t.attrs && n(s, t.attrs), t.text && (s.text = "" + t.text);
                var c = "onload" in s ? r : i;
                c(s, a), s.onload || r(s, a), o.appendChild(s)
            }
        }])
    });
I$("0c20216832841dcb5dce14b16e7fd49c", function(e, t, n) {
    var r = function() {
        var e = {
            drag: "eda6d7f57cf54b5d8f9b0ed24e5b6e66",
            click: "4b9d756ad5044181bfd0f7f01caf39c3",
            sms: "13096784aa1746fc99e944ded079af93",
            sense: "1f5120aead0443528966556bdfc31080"
        };
        var t = 310;
        var r = n.query(".j-captcha", !0);
        for (var i = 0, a = r.length; i < a; i++) {
            var o = r[i].getAttribute("data-type").split("_");
            var s = o[0];
            var c = o[1];
            var l = {
                element: r[i],
                captchaId: e[s],
                mode: c,
                width: t + "px"
            };
            if ("wap" !== c) initNECaptcha(l)
        }
    };
    var i = function(e, t) {
        var r = n.query(".u-fitem_error");
        if (e) r.style.display = "block";
        else {
            r.style.display = "none";
            a(".tcapt-bind--result")
        }
    };
    var a = function(e) {
        var t = n.query(".tcapt-bind", !0);
        var r = e ? n.query(e) : t[0];
        for (var i = 0, a = t.length; i < a; i++) n.delClass(t[i], "tcapt-bind--active");
        n.addClass(r, "tcapt-bind--active")
    };
    var o = function() {
        function e(e) {
            s = e;
            if (e.parentNode === document.body) {
                document.body.removeChild(e);
                c.appendChild(e)
            }
        }
        var t;
        var r = n.query(".j-bind");
        var o = n.query(".j-back");
        var s = null;
        var c = n.query(".tcapt_wrap--bind");
        if (r) {
            initNECaptcha({
                width: "288px",
                mode: "bind",
                captchaId: "1f5120aead0443528966556bdfc31080",
                onVerify: i,
                element: n.query(".j-capt")
            }, function(e) {
                t = e
            });
            n.addEvent(r, "click", function() {
                function r(t) {
                    var i = t.target;
                    if (n.hasClass(i, "yidun_popup")) {
                        n.removeEvent(document.body, "DOMNodeInserted", r);
                        e(i)
                    }
                }
                if (!s) {
                    var i = window.MutationObserver || window.WebKitMutationObserver;
                    if (i) {
                        var a = new i(function(t) {
                            for (var r = 0, i = t.length; r < i; r++) for (var o = 0; o < t[r].addedNodes.length; o++) {
                                var s = t[r].addedNodes[o];
                                if (n.hasClass(s, "yidun_popup")) {
                                    e(s);
                                    break
                                }
                            }
                            a.disconnect()
                        });
                        a.observe(document.body, {
                            childList: !0,
                            attributes: !1,
                            subtree: !1
                        })
                    } else if (document.addEventListener) n.addEvent(document.body, "DOMNodeInserted", r);
                    else var o = setInterval(function() {
                            var t = n.query(".yidun_popup--light.yidun_popup");
                            if (!t) {
                                if (n.hasClass(n.query(".tcapt-bind--result"), "tcapt-bind--active")) clearInterval(o)
                            } else {
                                e(t);
                                clearInterval(o)
                            }
                        }, 10)
                }
                t && t.verify()
            });
            n.addEvent(o, "click", function() {
                s && c.removeChild(s);
                s = null;
                t.destroy();
                t = null;
                initNECaptcha({
                    width: "288px",
                    mode: "bind",
                    captchaId: "1f5120aead0443528966556bdfc31080",
                    onVerify: i,
                    element: n.query(".j-capt")
                }, function(e) {
                    t = e
                });
                a()
            })
        }
    };
    var s = function() {
        var e = n.query("[data-captcha]", !0),
            t = n.query(".j-capt_ele", !0);
        var r = 0;
        var i = function(i) {
            return function() {
                if (r !== i) {
                    e[r].captchaIns && e[r].captchaIns.refresh();
                    n.delClass(e[r], "z-act");
                    n.addClass(e[i], "z-act");
                    n.delClass(t[r], "z-act");
                    n.addClass(t[i], "z-act");
                    r = i
                }
            }
        };
        for (var a = 0, o = e.length; a < o; a++) n.addEvent(e[a], "click", i(a))
    };
    var c = function() {
        e.init();
        new t;
        r();
        o()
    };
    c()
}, "91150511a7e91fcd90f2c37b08e5730b", "3cc4f6065fcbcec6d9f198809f81e4d0", "52a31311e138d34e969e723dd7fac76b");