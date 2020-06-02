function l() {
    return function() {}
}
function m(t) {
    return function(i) {
        this[t] = i
    }
}
function p(t) {
    return function() {
        return this[t]
    }
}
function r(t) {
    return function() {
        return t
    }
}
var dataForWeixin;
var d = !0,
f = null,
h = !1;
if (cc.sys._supportWebAudio) {
    var t = cc.ck = new(window.AudioContext || window.webkitAudioContext || window.mozAudioContext);
    cc.Da = cc.Class.extend({
        M: f,
        K: f,
        I: f,
        Wa: f,
        src: f,
        preload: f,
        autoplay: f,
        controls: f,
        $h: f,
        currentTime: 0,
        startTime: 0,
        duration: 0,
        Ma: f,
        Va: 1,
        pa: 0,
        _paused: h,
        ba: d,
        n: -1,
        ctor: function(i) {
            this.M = {},
            this.src = i,
            this.Wa = t.createGain ? t.createGain() : t.createGainNode(),
            this.Bc = this.Ac.bind(this),
            this.zc = this.yc.bind(this)
        },
        Pa: function(i) {
            var n = this.I = t.createBufferSource(),
            e = this.Wa;
            i = i || 0,
            n.buffer = this.K,
            e.gain.value = this.Va,
            n.connect(e),
            e.connect(t.destination),
            n.loop = this.Ma,
            this.ba = this._paused = h,
            n.start ? n.start(0, i) : n.noteGrainOn ? (e = n.buffer.duration, this.loop ? n.noteGrainOn(0, i, e) : n.noteGrainOn(0, i, e - i)) : n.noteOn(0),
            this.pa = 0
        },
        Ib: function() {
            var t = this.I;
            this.ba || (t.stop ? t.stop(0) : t.noteOff(0), this.ba = d)
        },
        play: function() {
            if ( - 1 == this.n) this.n = 0;
            else if (1 == this.n) {
                var i = this.I; (this.ba || !i || 2 != i.playbackState) && (this.startTime = t.currentTime, this.Pa(0))
            }
        },
        pause: function() {
            this.pa = t.currentTime,
            this._paused = d,
            this.Ib()
        },
        resume: function() {
            this._paused && this.Pa(this.K ? (this.pa - this.startTime) % this.K.duration: 0)
        },
        stop: function() {
            this.pa = 0,
            this._paused = h,
            this.Ib()
        },
        load: function() {
            var i = this;
            if (1 != i.n) {
                i.n = -1,
                i.played = h,
                i.ended = d;
                var n = new XMLHttpRequest;
                n.open("GET", i.src, d),
                n.responseType = "arraybuffer",
                n.onload = function() {
                    t.decodeAudioData(n.response, i.Bc, i.zc)
                },
                n.send()
            }
        },
        addEventListener: function(t, i) {
            this.M[t] = i.bind(this)
        },
        removeEventListener: function(t) {
            delete this.M[t]
        },
        uf: function() {
            return cc.sys._supportWebAudio
        },
        Ac: function(t) {
            this.K = t,
            t = this.M.success;
            var i = this.M.canplaythrough;
            t && t(),
            i && i(),
            (0 == this.n || "autoplay" == this.autoplay || this.autoplay == d) && this.Pa(),
            this.n = 1
        },
        yc: function() {
            var t = this.M.error;
            t && t(),
            this.n = -2
        },
        cloneNode: function() {
            var t = new cc.Da(this.src);
            return t.volume = this.volume,
            t.n = this.n,
            t.K = this.K,
            (0 == t.n || -1 == t.n) && t.load(),
            t
        }
    });
    var v = cc.Da.prototype;
    cc.defineGetterSetter(v, "loop", p("Ma"),
    function(t) {
        this.Ma = t,
        this.I && (this.I.loop = t)
    }),
    cc.defineGetterSetter(v, "volume", p("Va"),
    function(t) {
        this.Va = t,
        this.Wa.gain.value = t
    }),
    cc.defineGetterSetter(v, "paused", p("_paused")),
    cc.defineGetterSetter(v, "ended",
    function() {
        var t = this.I;
        return ! this._paused && (this.ba || !t || 3 == t.playbackState)
    }),
    cc.defineGetterSetter(v, "played",
    function() {
        var t = this.I;
        return t && 2 == t.playbackState
    })
}
cc.nb = cc.Class.extend({
    Ta: h,
    h: f,
    ja: f,
    l: 0,
    sb: 0,
    j: {},
    V: {},
    ma: 1,
    Na: 5,
    v: f,
    aa: [],
    ctor: function() {
        this.Ta = 0 < cc.Ea.qa.length,
        this.v && (this.v = this.v.bind(this))
    },
    dk: r(h),
    dg: p("ma"),
    va: function(t, i) {
        if (this.Ta) {
            var n = this.h;
            n && this.z(n),
            t != this.ja && (this.h = n = this.Ha(t), this.ja = t),
            n && (n.loop = i || h, this.O(n))
        }
    },
    Ha: function(t) {
        var i = cc.loader,
        n = i.getRes(t);
        return n || (i.load(t), n = i.getRes(t)),
        n
    },
    O: function(t) {
        t.ended || (t.stop ? t.stop() : (t.pause(), t.currentTime = 0)),
        this.l = 2,
        t.play()
    },
    T: function(t) {
        if (0 < this.l) {
            var i = this.h;
            i && this.z(i) && (t && cc.loader.release(this.ja), this.ja = this.h = f, this.l = 0)
        }
    },
    z: function(t) {
        return t && !t.ended ? (t.stop ? t.stop() : t.duration && 1 / 0 != t.duration ? t.currentTime = t.duration: t.pause(), d) : h
    },
    Vb: function() {
        2 == this.l && (this.h.pause(), this.l = 1)
    },
    Jd: function() {
        1 == this.l && (this.u(this.h), this.l = 2)
    },
    u: function(t) {
        t && !t.ended && (t.resume ? t.resume() : t.play())
    },
    Ei: function() {
        this.h && this.O(this.h)
    },
    Nb: function() {
        return 0 == this.l ? 0 : this.h.volume
    },
    ya: function(t) {
        0 < this.l && (this.h.volume = Math.min(Math.max(t, 0), 1))
    },
    eb: function() {
        return 2 == this.l && this.h && !this.h.ended
    },
    Ia: function(t) {
        var i = this.V[t];
        return i || (i = this.V[t] = []),
        i
    },
    yb: function(t) {
        var i;
        if (!this.Ta) return f;
        for (var n = this.Ia(t), e = 0, c = n.length; c > e; e++) {
            var r = n[e];
            if (r.ended) {
                i = r,
                i.currentTime = 0,
                window.xf && i.load();
                break
            }
        }
        if (!i) {
            if (n.length >= this.Na) return cc.log("Error: " + t + " greater than " + this.Na),
            f;
            if (i = this.Ha(t), !i) return f;
            i = i.cloneNode(d),
            this.v && cc._addEventListener(i, "pause", this.v),
            i.volume = this.ma,
            n.push(i)
        }
        return i
    },
    S: function(t, i) {
        var n = this.yb(t);
        if (!n) return f;
        n.loop = i || h,
        n.play();
        var e = this.sb++;
        return this.j[e] = n,
        e
    },
    $b: function(t) {
        t = this.ma = Math.min(Math.max(t, 0), 1);
        var i, n = this.j;
        for (i in n) n[i].volume = t
    },
    wd: function(t) { (t = this.j[t]) && !t.ended && t.pause()
    },
    vd: function() {
        var t, i = this.j;
        for (t in i) {
            var n = i[t];
            n.ended || n.pause()
        }
    },
    Id: function(t) {
        this.u(this.j[t])
    },
    Hd: function() {
        var t, i = this.j;
        for (t in i) this.u(i[t])
    },
    Ba: function(t) {
        this.z(this.j[t]),
        delete this.j[t]
    },
    ga: function() {
        var t, i = this.j;
        for (t in i) this.z(i[t]),
        delete i[t]
    },
    ce: function(t) {
        var i = cc.loader,
        n = this.j,
        e = this.Ia(t);
        if (i.release(t), 0 != e.length) {
            i = e[0].src,
            delete this.V[t];
            for (var c in n) n[c].src == i && (this.z(n[c]), delete n[c])
        }
    },
    end: function() {
        this.T(),
        this.ga()
    },
    Fb: function() {
        var t, i, n = this.j;
        for (i in n) ! (t = n[i]) || t.ended || t.paused || (this.aa.push(t), t.pause());
        this.eb() && (this.aa.push(this.h), this.h.pause())
    },
    Gb: function() {
        for (var t = this.aa,
        i = 0,
        n = t.length; n > i; i++) this.u(t[i]);
        t.length = 0
    }
}),
!cc.sys._supportWebAudio && 0 > cc.sys._supportMultipleAudio && (cc.ob = cc.nb.extend({
    A: [],
    Z: [],
    m: f,
    Na: 2,
    la: {},
    H: h,
    N: 0,
    Ja: h,
    O: function(t) {
        this.Ua(),
        this._super(t)
    },
    Jd: function() {
        1 == this.l && (this.Ua(), this.H = h, this.N = 0, this._super())
    },
    S: function(t, i) {
        var n = this.m,
        e = i ? this.yb(t) : this.vc(t);
        if (!e) return f;
        e.loop = i || h;
        var c = this.sb++;
        return this.j[c] = e,
        this.eb() && (this.Vb(), this.H = d),
        n ? (n != e && this.A.push(this.L), this.A.push(c), n.pause()) : (this.m = e, this.L = c, e.play()),
        c
    },
    wd: function() {
        cc.log("pauseEffect not supported in single audio mode!")
    },
    vd: function() {
        var t = this.A,
        i = this.Z,
        n = this.m;
        if (n) {
            for (var e = 0,
            c = t.length; c > e; e++) i.push(t[e]);
            t.length = 0,
            i.push(this.L),
            n.pause()
        }
    },
    Id: function() {
        cc.log("resumeEffect not supported in single audio mode!")
    },
    Hd: function() {
        var t = this.A,
        i = this.Z;
        this.eb() && (this.Vb(), this.H = d);
        for (var n = 0,
        e = i.length; e > n; n++) t.push(i[n]);
        i.length = 0,
        !this.m && 0 <= t.length && (t = t.pop(), i = this.j[t]) && (this.L = t, this.m = i, this.u(i))
    },
    Ba: function(t) {
        var i = this.m,
        n = this.A,
        e = this.Z;
        i && this.L == t ? this.z(i) : (i = n.indexOf(t), i >= 0 ? n.splice(i, 1) : (i = e.indexOf(t), i >= 0 && e.splice(i, 1)))
    },
    ga: function() {
        this.Ua(),
        !this.m && this.H && (this.u(this.h), this.l = 2, this.H = h, this.N = 0)
    },
    ce: function(t) {
        var i = cc.loader,
        n = this.j,
        e = this.la,
        c = this.Ia(t),
        r = this.m;
        if (i.release(t), 0 != c.length || e[t]) {
            i = 0 < c.length ? c[0].src: e[t].src,
            delete this.V[t],
            delete e[t];
            for (var s in n) n[s].src == i && delete n[s];
            r && r.src == i && this.z(r)
        }
    },
    vc: function(t) {
        var i = this.la[t],
        n = this.A,
        e = this.Z,
        c = this.j;
        if (i) i.currentTime = 0;
        else {
            if (i = this.Ha(t), !i) return f;
            i = i.cloneNode(d),
            this.v && cc._addEventListener(i, "pause", this.v),
            i.volume = this.ma,
            this.la[t] = i
        }
        t = 0;
        for (var r = n.length; r > t;) c[n[t]] == i ? n.splice(t, 1) : t++;
        for (t = 0, r = e.length; r > t;) c[e[t]] == i ? e.splice(t, 1) : t++;
        return i.X = d,
        i
    },
    Ua: function() {
        var t = this.m,
        i = this.V,
        n = this.la,
        e = this.A,
        c = this.Z;
        if (t || 0 != e.length || 0 != c.length) {
            for (var r in n) {
                var s = n[r];
                s.duration && 1 / 0 != s.duration && (s.currentTime = s.duration)
            }
            e.length = 0,
            c.length = 0;
            for (r in i) for (n = i[r], e = 0, c = n.length; c > e; e++) s = n[e],
            s.loop = h,
            s.duration && 1 / 0 != s.duration && (s.currentTime = s.duration);
            t && this.z(t)
        }
    },
    v: function() {
        if (!this.Ja) {
            var t = this.wc();
            if (t) t.X ? (delete t.X, t.play()) : this.u(t);
            else if (this.H) {
                if (t = this.h, t.duration && 1 / 0 != t.duration) {
                    var i = t.currentTime + this.N,
                    i = i - t.duration * (i / t.duration | 0);
                    t.currentTime = i
                }
                this.N = 0,
                this.u(t),
                this.l = 2,
                this.H = h
            }
        }
    },
    wc: function() {
        var t = this.A,
        i = this.j,
        n = this.m,
        e = n ? n.currentTime - (n.startTime || 0) : 0;
        for (this.N += e; 0 != t.length;) {
            var c = t.pop();
            if (n = i[c]) {
                if (n.X || n.loop || n.duration && n.currentTime + e < n.duration) return this.L = c,
                this.m = n,
                !n.X && n.duration && 1 / 0 != n.duration && (t = n.currentTime + e, t -= n.duration * (t / n.duration | 0), n.currentTime = t),
                n.X = h,
                n;
                n.duration && 1 / 0 != n.duration && (n.currentTime = n.duration)
            }
        }
        return this.m = this.L = f
    },
    Fb: function() {
        var t = this.m;
        this.Ja = d,
        (t = 2 == this.l ? this.h: t) && (this.aa.push(t), t.pause())
    },
    Gb: function() {
        var t = this.aa;
        this.Ja = h,
        0 < t.length && (this.u(t[0]), t.length = 0)
    }
})),
cc.Ea = {
    qa: f,
    Vf: function() {
        return cc.loader.audioPath
    },
    La: function(t, i, n, e, c, r, s) {
        var o = this,
        h = cc.loader,
        a = cc.path,
        u = this.qa,
        d = "";
        if (0 == u.length) return s("can not support audio!");
        if ( - 1 == e) d = (a.extname(t) || "").toLowerCase(),
        o.Gc(d) || (d = u[0], e = 0);
        else {
            if (! (e < u.length)) return s("can not found the resource of audio! Last match url is : " + t);
            d = u[e]
        }
        return 0 <= c.indexOf(d) ? o.La(t, i, n, e + 1, c, r, s) : (t = a.changeExtname(t, d), c.push(d), r = o.xc(t, r,
        function(h) {
            return h ? o.La(t, i, n, e + 1, c, r, s) : void s(f, r)
        },
        e == u.length - 1), void(h.cache[i] = r))
    },
    Gc: function(t) {
        return t ? 0 <= this.qa.indexOf(t.toLowerCase()) : h
    },
    xc: function(t, i, n, e) {
        var c = "file://" == location.origin ? Audio: cc.Da || Audio;
        return 2 == arguments.length ? (n = i, i = new c) : 3 < arguments.length && !i && (i = new c),
        i.src = t,
        i.preload = "auto",
        c = navigator.userAgent,
        /Mobile/.test(c) && (/iPhone OS/.test(c) || /iPad/.test(c) || /Firefox/.test(c)) || /MSIE/.test(c) ? (i.load(), n(f, i)) : (cc._addEventListener(i, "canplaythrough",
        function() {
            n(f, i),
            this.removeEventListener("canplaythrough", arguments.callee, h),
            this.removeEventListener("error", arguments.callee, h)
        },
        h), cc._addEventListener(i, "error",
        function() {
            n("load " + t + " failed"),
            e && (this.removeEventListener("canplaythrough", arguments.callee, h), this.removeEventListener("error", arguments.callee, h))
        },
        h), i.load()),
        i
    },
    load: function(t, i, n, e) {
        this.La(t, i, n, -1, [], f, e)
    }
},
cc.Ea.qa = function() {
    var t = cc.newElement("audio"),
    i = [];
    if (t.canPlayType) {
        var n = function(i) {
            return i = t.canPlayType(i),
            "no" != i && "" != i
        };
        n('audio/ogg; codecs="vorbis"') && i.push(".ogg"),
        n("audio/mpeg") && i.push(".mp3"),
        n('audio/wav; codecs="1"') && i.push(".wav"),
        n("audio/mp4") && i.push(".mp4"),
        (n("audio/x-m4a") || n("audio/aac")) && i.push(".m4a")
    }
    return i
} (),
cc.loader.register(["mp3", "ogg", "wav", "mp4", "m4a"], cc.Ea),
cc.k = cc.ob ? new cc.ob: new cc.nb,
cc.eventManager.addCustomListener(cc.game.EVENT_HIDE,
function() {
    cc.k.Fb()
}),
cc.eventManager.addCustomListener(cc.game.EVENT_SHOW,
function() {
    cc.k.Gb()
});
var y = y || {};
y.F = {
    ai: l(),
    Zh: function() {
        return this
    },
    oi: l(),
    Cf: function() {
        return this
    },
    oj: l(),
    bg: function() {
        return this
    },
    ff: function() {
        return this
    },
    Xc: function() {
        return this
    },
    wi: l(),
    Bf: l(),
    Gg: function() {
        return this
    },
    ad: function() {
        return this
    },
    Yg: function() {
        return this
    },
    Yj: function() {
        return this
    },
    Uf: function() {
        return this
    },
    ng: function() {
        return this
    },
    sf: function() {
        return this
    },
    Yh: function() {
        return this
    },
    ag: function() {
        return this
    },
    Th: l(),
    yf: function() {
        return this
    },
    bh: function() {
        return this
    },
    Fj: l(),
    cg: function() {
        return this
    }
},
y.Ke = {
    i: l(),
    init: function() {
        return this
    },
    tf: l(),
    Ii: l(),
    d: function() {
        return this
    },
    qe: l()
},
y.gf = {
    Sc: l(),
    Wc: function() {
        return this
    },
    Ic: l(),
    Pf: l(),
    Sh: l(),
    Vc: function() {
        return this
    },
    Wi: l(),
    init: function() {
        return this
    },
    yj: l(),
    Yd: l(),
    gg: function() {
        return this
    },
    Uh: l(),
    i: l(),
    Uc: function() {
        return this
    },
    Hj: l(),
    Qf: l(),
    Vh: l(),
    ld: function() {
        return this
    },
    d: function() {
        return this
    },
    Ee: l()
},
y.cf = {
    jj: l(),
    Uj: l(),
    Oj: l(),
    J: l(),
    Tj: l(),
    Yd: l(),
    Qj: l(),
    Qi: l(),
    ld: function() {
        return this
    },
    Vj: l(),
    Wc: function() {
        return this
    },
    Td: l(),
    init: function() {
        return this
    },
    i: l(),
    Nj: l(),
    Rj: l(),
    Vc: function() {
        return this
    },
    Ri: l(),
    Pj: l(),
    Wj: l(),
    Uc: function() {
        return this
    },
    Sj: l(),
    d: function() {
        return this
    },
    De: l()
},
y.o = {
    Ed: l(),
    Dj: l(),
    Bj: l(),
    Cj: l(),
    init: function() {
        return this
    },
    ni: l(),
    i: l(),
    d: function() {
        return this
    },
    ze: l()
},
y.Ye = {
    i: l(),
    init: function() {
        return this
    },
    Ed: l(),
    d: function() {
        return this
    },
    Ae: l()
},
y.je = {
    Lj: l(),
    create: function() {
        return this
    },
    me: l()
},
y.Ze = {
    Ug: l(),
    cb: function() {
        return this
    },
    Tg: l(),
    Wg: function() {
        return this
    },
    rd: l(),
    ti: l(),
    Be: l()
},
y.$e = {
    cb: function() {
        return this
    },
    d: function() {
        return this
    }
},
y.af = {
    Oi: l(),
    cb: function() {
        return this
    },
    $f: function() {
        return this
    },
    d: function() {
        return this
    }
},
y.bf = {
    cb: function() {
        return this
    },
    d: function() {
        return this
    }
},
y.ic = {
    Lf: function() {
        return this
    },
    init: function() {
        return this
    },
    Xi: l(),
    qd: function() {
        return this
    },
    i: l(),
    d: function() {
        return this
    },
    ne: l()
},
y.Te = {
    Sc: l(),
    fj: l(),
    sg: function() {
        return this
    },
    Yi: l(),
    Di: l(),
    wg: function() {
        return this
    },
    ui: l(),
    Jg: function() {
        return this
    },
    Ui: l(),
    Ki: l(),
    mf: l(),
    init: function() {
        return this
    },
    Lg: function() {
        return this
    },
    ij: l(),
    mj: l(),
    rg: function() {
        return this
    },
    Qg: function() {
        return this
    },
    pj: l(),
    Pg: function() {
        return this
    },
    Gj: l(),
    Aj: l(),
    yg: function() {
        return this
    },
    $i: l(),
    Xj: l(),
    Nf: l(),
    eg: function() {
        return this
    },
    pf: l(),
    ei: l(),
    zj: l(),
    hj: l(),
    of: l(),
    Ti: l(),
    ig: function() {
        return this
    },
    Xg: function() {
        return this
    },
    Kg: function() {
        return this
    },
    tg: function() {
        return this
    },
    kg: function() {
        return this
    },
    rd: l(),
    we: l()
},
y.Se = {
    gj: l(),
    d: function() {
        return this
    }
},
y.pc = {
    ga: l(),
    $d: l(),
    Qd: l(),
    ya: l(),
    kb: l(),
    Ba: l(),
    Yc: function() {
        return this
    },
    zd: function() {
        return this
    },
    Nb: function() {
        return this
    },
    T: l(),
    dump: l(),
    $c: function() {
        return this
    },
    jb: l(),
    va: l(),
    Rd: l(),
    xd: l(),
    i: l(),
    Zc: function() {
        return this
    },
    Jc: l(),
    S: function() {
        return this
    },
    Cc: l(),
    Zd: l(),
    init: function() {
        return this
    },
    bb: function() {
        return this
    },
    d: function() {
        return this
    },
    Ce: l()
},
y.ie = {
    i: l(),
    init: function() {
        return this
    },
    Ej: l(),
    fa: l(),
    d: function() {
        return this
    },
    le: l()
},
y.Le = {
    fa: l(),
    Aa: l(),
    ra: l()
},
y.Me = {
    ra: l(),
    init: function() {
        return this
    },
    Aa: l(),
    i: l(),
    fa: l(),
    d: function() {
        return this
    },
    re: l()
},
y.Ne = {
    ra: l(),
    init: function() {
        return this
    },
    Aa: l(),
    i: l(),
    fa: l(),
    d: function() {
        return this
    },
    se: l()
},
y.Pe = {
    ra: l(),
    init: function() {
        return this
    },
    Aa: l(),
    i: l(),
    fa: l(),
    d: function() {
        return this
    },
    ue: l()
},
y.Oe = {
    ra: l(),
    init: function() {
        return this
    },
    Aa: l(),
    i: l(),
    fa: l(),
    d: function() {
        return this
    },
    te: l()
},
y.Fe = {
    Ud: l(),
    $j: l(),
    lj: l(),
    init: function() {
        return this
    },
    i: l(),
    d: function() {
        return this
    },
    oe: l()
},
y.s = {
    ug: function() {
        return this
    },
    bj: l(),
    fg: function() {
        return this
    },
    Vi: l(),
    xi: l(),
    qg: function() {
        return this
    },
    rj: l(),
    og: function() {
        return this
    },
    kj: l(),
    Td: l(),
    init: function() {
        return this
    },
    xg: function() {
        return this
    },
    i: l(),
    vg: function() {
        return this
    },
    cj: l(),
    ji: l(),
    Bg: function() {
        return this
    },
    dj: l(),
    Ci: l(),
    lg: function() {
        return this
    },
    nj: l(),
    pg: function() {
        return this
    },
    aj: l(),
    ej: l(),
    qf: l(),
    d: function() {
        return this
    },
    ve: l()
},
y.Ca = {
    fc: l(),
    vj: l(),
    Fg: function() {
        return this
    },
    Ic: l(),
    Zi: l(),
    Dg: function() {
        return this
    },
    qj: l(),
    uj: l(),
    zg: function() {
        return this
    },
    init: function() {
        return this
    },
    Ij: l(),
    jg: function() {
        return this
    },
    i: l(),
    Ig: function() {
        return this
    },
    Yf: function() {
        return this
    },
    gc: l(),
    d: function() {
        return this
    },
    ye: l()
},
y.Ue = {
    Ud: l(),
    Ji: l(),
    init: function() {
        return this
    },
    i: l(),
    d: function() {
        return this
    },
    xe: l()
},
y.Ie = {
    Rg: l(),
    Li: l(),
    show: l(),
    isEnabled: function() {
        return this
    },
    Mf: l(),
    Zg: function() {
        return this
    },
    init: function() {
        return this
    },
    i: l(),
    d: function() {
        return this
    },
    pe: l()
},
y.F.Xc = function() {
    var t = cc.sys.localStorage.getItem("device_id");
    return t ? t: (t = y.cd(), cc.sys.localStorage.setItem("device_id", t), t)
},
y.F.ad = function() {
    return Math.ceil((new Date).getTime() / 1e3)
},
y.F.Oc = function() {
    return (new Date).getTime()
},
y.F.Cg = function(t) {
    y.f.get("http://week.pictoword.hortorgame.com/week/serverTime",
    function(i, n) {
        if (i) t(i, f);
        else {
            var e = parseInt(n);
            isNaN(e) || 0 > e ? (cc.log("[BSHTTP] server time request error:" + JSON.stringify(n)), t("", f)) : t(f, e)
        }
    })
},
y.platform = "html5",
y.pi = "appstore",
y.rc = cc.Class.extend({
    P: f,
    init: function() {
        this.P = {}
    },
    gc: function(t) {
        this.P[t] || (this.P[t] = 0, cc.spriteFrameCache.addSpriteFrames(t)),
        this.P[t]++
    },
    fc: function(t) {
        this.P[t]--,
        0 == this.P[t] && cc.spriteFrameCache.removeSpriteFramesFromFile(t)
    }
}),
y.Ca = {
    oa: f,
    d: function() {
        return this.oa || (this.oa = new y.rc, this.oa.init()),
        this.oa
    }
},
y = y || {},
y.Gi = "js_bscommon/res/shareLayer.ccbi",
y.init = function() {
    cc.Sequence.Nc = function(t) {
        if (0 === t.length) return cc.Sequence.create();
        if (1 === t.length) return cc.Sequence.create(t[0]);
        if (2 === t.length) return cc.Sequence.create(t[0], t[1]);
        var i = t.pop();
        return cc.Sequence.create(cc.Sequence.Nc(t), i)
    },
    y.Qb() && (y.Db || (y.Db = cc.view.Kc), cc.view.Kc = function(t, i, n) {
        return t = y.Db.call(cc.view, t, i, n),
        window && window.Hc && (i = window.Hc, t.x /= i, t.y /= i),
        t
    }),
    cc.nc && (cc.nc.extend = cc.Class.extend),
    cc.pb && (cc.pb.extend = cc.Class.extend),
    cc.Scale9Sprite && (cc.Scale9Sprite.extend = cc.Class.extend),
    cc.mc && (cc.mc.extend = cc.Class.extend)
},
y.F = y.F || {},
y.F.Oc = function() {
    return (new Date).getTime()
},
y.gi = l(),
y.fi = l(),
y.ii = l(),
y.hi = l(),
y.s = y.s || {},
y.s.qh = 1,
y.s.rh = 2,
y.s.th = 3,
y.s.sh = 4,
y.s.ph = 5,
y.s.vh = 6,
y.s.uh = 7,
"undefined" == typeof cc.kc && (cc.kc = {
    r: 166,
    g: 166,
    b: 166
}),
String.prototype.sa = function(t) {
    return this.replace(String.prototype.sa.Dd,
    function(i) {
        return i = parseInt(i.substring(1, i.length - 1)),
        i >= 0 ? t[i] : -1 === i ? "{": -2 === i ? "}": ""
    })
},
String.prototype.sa.Dd = /{-?[0-9]+}/g,
y.Jj = function(t, i) {
    return t.sa(i)
},
y.Of = function(t) {
    return 0 > t ? -t: t
},
y.Kj = function(t) {
    var i = Math.floor(t / 3600),
    n = Math.floor((t - 3600 * i) / 60);
    return "{0}:{1}:{2}".sa([i, n, t - 3600 * i - 60 * n])
},
y.bi = function(t) {
    return cc.p(t.getContentSize().width / 2, t.getContentSize().height / 2)
},
y.ci = function() {
    var t = cc.director.Og();
    return cc.p(t.width / 2, t.height / 2)
},
y.rf = function(t) {
    return cc.color(t.r, t.g, t.b, 255)
},
y.eh = function(a) {
    return eval("(" + cc.Ge.B().Eg(a) + ")")
},
y.gb = function(t) {
    try {
        return JSON.parse(t)
    } catch(i) {
        return cc.log("[JSON]:" + i.message),
        cc.log("[JSON]:" + i.description),
        f
    }
},
y.Mj = function(t) {
    try {
        return JSON.stringify(t)
    } catch(i) {
        return cc.log(i.message),
        cc.log(i.description),
        f
    }
},
y.Xe = function(t) {
    t && t.removeFromParent()
},
y.Ve = function(t, i) {
    return t + Math.floor(Math.random() * (i - t))
},
y.surround = function(t, i, n, e) {
    return _.filter([[t - 1, i - 1], [t, i - 1], [t + 1, i - 1], [t - 1, i], [t, i], [t + 1, i], [t - 1, i + 1], [t, i + 1], [t + 1, i + 1]],
    function(t) {
        return 0 <= t[0] && 0 <= t[1] && t[0] < n && t[1] < e
    })
},
y.Qb = function() {
    return ! cc.sys.isNative
},
y.he = function() {
    return y.U.B().Ec()
},
y.w = function() {
    return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
},
y.cd = function() {
    return y.w() + y.w() + "-" + y.w() + "-" + y.w() + "-" + y.w() + "-" + y.w() + y.w() + y.w()
},
y.wa = function(t, i) {
    t.wa ? t.wa(i) : t.setFlippedX(i)
},
y.xa = function(t, i) {
    t.xa ? t.xa(i) : t.setFlippedY(i)
},
y.da = function(t) {
    return cc.rectGetMaxY(t.getBoundingBox())
},
y.Hg = function(t) {
    return cc.rectGetMaxY(t.getBoundingBoxToWorld())
},
y.R = function(t) {
    return cc.rectGetMinY(t.getBoundingBox())
},
y.Xf = function(t) {
    return cc.rectGetMinY(t.getBoundingBoxToWorld())
},
y.hg = function(t) {
    return cc.rectGetMinX(t.getBoundingBox())
},
y.Ag = function(t) {
    return cc.rectGetMaxX(t.getBoundingBox())
},
y.Ng = function(t) {
    return t.width * t.scaleX
},
y.Mg = function(t) {
    return t.height * t.scaleY
},
y.ta = function(t) {
    return cc.size(t.width * t.scaleX, t.height * t.scaleY)
},
y.Lb = function(t) {
    y.C(t, void 0, .5, .5)
},
y.C = function(t, i, n, e) {
    i = (i || t.getParent()).getContentSize();
    var c = y.ta(t),
    r = t.isIgnoreAnchorPointForPosition() ? cc.p(0, 0) : t.getAnchorPoint();
    t.setPosition(cc.p(i.width * n + (r.x - .5) * c.width, i.height * e + (r.y - .5) * c.height))
},
y.vf = function(t, i) {
    i = i || t.getParent(),
    t.setPositionX(i.getContentSize().width / 2 + (t.getAnchorPoint().x - .5) * t.getContentSize().width)
},
y.wf = function(t, i) {
    i = i || t.getParent(),
    t.setPositionY(i.getContentSize().height / 2 + (t.getAnchorPoint().y - .5) * t.getContentSize().height)
},
y.Ld = function(t, i) {
    t.setScale(i / t.getContentSize().width)
},
y.Kd = function(t, i) {
    t.setScale(i / t.getContentSize().height)
},
y.Hi = function(t, i, n) {
    var e = n ? i: i.width;
    n = n ? n: i.height,
    y.Md(t, e),
    y.Nd(t, n)
},
y.Md = function(t, i) {
    t.setScaleX(i / t.getContentSize().width)
},
y.Nd = function(t, i) {
    t.setScaleY(i / t.getContentSize().height)
},
y.df = function(t, i, n, e) {
    var c = {};
    return c.di = t || 0,
    c.Wh = i || 0,
    c.ek = n || 0,
    c.fk = e || 0,
    c
},
y.nf = function(t) {
    return cc.spriteFrameCache.getSpriteFrame(t) ? new cc.Sprite("#" + t) : cc.Sprite.create(t)
},
y.Vg = function() {
    return _.isUndefined(navigator) || _.isUndefined(navigator.userAgent) ? h: -1 != navigator.userAgent.toLowerCase().indexOf("micromessenger")
},
y.Sg = function(t, i) {
    return "/proxy?url=" + encodeURIComponent(t.replace(/\/[0-9]+$/, "/" + i))
},
y.Od = function(t, i) {
    for (var n = 0; n < t.getChildrenCount(); ++n) this.Od(t.getChildren()[n], i);
    t instanceof cc.Je && t.setEnabled(i)
},
y.bk = function(t, i) {
    if ("stringstring" != typeof t + typeof i) return h;
    for (var n = t.split("."), e = i.split("."), c = 0, r = Math.max(n.length, e.length); r > c; c++) {
        if (n[c] && !e[c] && 0 < parseInt(n[c]) || parseInt(n[c]) > parseInt(e[c])) return 1;
        if (e[c] && !n[c] && 0 < parseInt(e[c]) || parseInt(n[c]) < parseInt(e[c])) return - 1
    }
    return 0
},
y.Ef = function(t, i, n, e, c, r) {
    var s = new cc.Sprite("#" + t + i + ".png");
    return t = y.Lc(t, i + 1, n, e),
    -1 == c ? s.runAction(cc.RepeatForever.create(t)) : (c > 0 && (t = cc.Repeat.create(t, c)), r && (t = cc.Sequence.create(t, cc.RemoveSelf.create())), s.runAction(t)),
    s
},
y.Lc = function(t, i, n, e) {
    var c = t + "_" + i + "_" + n,
    r = cc.animationCache.getAnimation(c);
    if (!r) {
        for (r = []; - 1 == n || n >= i; ++i) {
            var s = y.mb(t + i + ".png");
            if (!s) break;
            r.push(s)
        }
        r = new cc.Animation(r, e),
        cc.animationCache.addAnimation(r, c)
    }
    return cc.Animate.create(r)
},
y.Mc = function(t) {
    var i = 1 / 12,
    n = t[0] + "_" + t.length + "_" + i,
    e = cc.animationCache.getAnimation(n);
    if (!e) {
        for (var e = [], c = 0; c < t.length; ++c) {
            var r = y.mb(t[c]);
            if (!r) break;
            e.push(r)
        }
        e = new cc.Animation(e, i),
        cc.animationCache.addAnimation(e, n)
    }
    return cc.Animate.create(e)
},
y.mb = function(t) {
    return _.endsWith(t, ".png") || (t += ".png"),
    cc.spriteFrameCache.getSpriteFrame(t)
},
y.tj = function(t, i, n) {
    i = y.mb(i),
    t.setSpriteFrame(i),
    n && t.setContentSize(i.mg())
},
y.fb = function() {
    var t = _.sprintf.apply(_, arguments);
    cc.sys.isNative ? cc.log(t) : cc.He ? cc.kf(t) : console.log(t)
},
y.ah = function(t, i, n) {
    t = i.convertTouchToNodeSpace(t);
    var e = i.getContentSize().width * i.getScaleX();
    return i = i.getContentSize().height * i.getScaleY(),
    n = n || cc.rect(0, 0, e, i),
    cc.rectContainsPoint(n, t)
},
y.Df = function(t) {
    var i = cc.jc.create(),
    n = cc.color(1, 1, 1, 1);
    return t = [cc.p(t.x, t.y), cc.p(t.x + t.width, t.y), cc.p(t.x + t.width, t.y + t.height), cc.p(t.x, t.y + t.height)],
    i.Rc(t, n, 1, n),
    cc.pb.create(i)
},
y.clone = function(t) {
    var i, n = t instanceof Array ? [] : {};
    for (i in t) t.hasOwnProperty(i) && !_.isFunction(t[i]) && (n[i] = _.isObject(t[i]) ? y.clone(t[i]) : t[i]);
    return n
},
y.Af = function(t, i, n) {
    var e = t.getAnchorPoint(),
    c = t.getContentSize();
    return n = n || cc.p(c.width * e.x, c.height * e.y),
    t = t.convertToWorldSpace(n),
    i.convertToNodeSpace(t)
},
y.dh = function(t) {
    if (this.Qb()) {
        var i = cc.loader.getRes("conf/" + t + ".json");
        if (i) return i;
        t = cc.loader.jf("res/conf/" + t + ".json")
    } else t = y.ic.d().qd("conf/" + t + ".bjs");
    return y.gb(t)
},
y.md = function(t) {
    for (; t && t.isVisible();) t = t.getParent();
    return ! t
},
y.Qh = function(t, i, n, e) {
    var c = cc.Layer.create(),
    r = 0;
    n == f && (n = cc.VERTICAL_TEXT_ALIGNMENT_CENTER),
    e || (e = 0, _.each(t,
    function(t) {
        t = y.ta(t).height,
        t > e && (e = t)
    }));
    var s = [1, .5, 0];
    return _.each(t,
    function(t) {
        if (t) {
            var o = y.ta(t),
            h = t.getAnchorPoint();
            t.isIgnoreAnchorPointForPosition() && (h = cc.p(0, 0));
            var a = cc.p(r, s[n] * (e - o.height));
            t.setPosition(cc.pAdd(a, cc.pCompMult(h, cc.pFromSize(o)))),
            r += o.width + i,
            c.addChild(t)
        }
    }),
    c.setContentSize(r - i, e),
    c.setAnchorPoint(0, 0),
    c
},
y.Rh = function(t, i, n, e) {
    var c = cc.Layer.create(),
    r = 0; (_.isUndefined(n) || _.isNull(n)) && (n = cc.TEXT_ALIGNMENT_CENTER),
    e || (e = 0, _.each(t,
    function(t) {
        t && (t = t.getContentSize().width, t > e && (e = t))
    }));
    var s = [0, .5, 1];
    return t.reverse(),
    _.each(t,
    function(t) {
        if (t) {
            var o = y.ta(t),
            h = t.getAnchorPoint();
            t.isIgnoreAnchorPointForPosition() && (h = cc.p(0, 0));
            var a = cc.p(s[n] * (e - o.width), r);
            t.setPosition(cc.pAdd(a, cc.pCompMult(h, cc.pFromSize(o)))),
            r += o.height + i,
            c.addChild(t)
        }
    }),
    c.setContentSize(e, r - i),
    c.setAnchorPoint(0, 0),
    c
},
y.Tf = function(t) {
    var i = Math.floor(t / 3600);
    t = Math.floor(t % 3600);
    var n = Math.floor(t / 60);
    t %= 60;
    var e = "",
    e = i >= 10 ? i: "0" + i,
    e = n >= 10 ? e + ":" + n: e + ":0" + n;
    return t >= 10 ? e + ":" + t: e + ":0" + t
},
y.Fi = function(t) {
    var i = Math.floor(t / 86400),
    n = Math.floor(t / 3600),
    e = Math.floor(t / 60);
    return 0 != i ? i + "天": 0 != n ? n + "小时": 0 != e ? e + "分钟": t + "秒"
},
y.Yb = function(t, i) {
    var n = {
        event: cc.EventListener.TOUCH_ONE_BY_ONE,
        swallowTouches: i == f ? d: i,
        onTouchBegan: t.onTouchBegan.bind(t)
    };
    return t.onTouchMoved && (n.onTouchMoved = t.onTouchMoved.bind(t)),
    t.onTouchEnded && (n.onTouchEnded = t.onTouchEnded.bind(t)),
    t.onTouchCanceled && (n.onTouchCanceled = t.onTouchCanceled.bind(t)),
    n = cc.EventListener.create(n),
    cc.eventManager.addListener(n, t),
    n
},
y.Jh = 0,
y.Kh = 1,
y.Lh = 2,
y.Ih = 3,
y.gh = 4,
y.pc = {
    Bb: h,
    Ab: h,
    zb: h,
    Oa: 1,
    Ga: 1,
    Hb: [],
    Yc: p("Ga"),
    Qd: function(t) {
        this.Ga = t,
        cc.k.$b(t)
    },
    Nb: p("Oa"),
    ya: function(t) {
        this.Oa = t,
        cc.k.ya(t)
    },
    $c: p("Bb"),
    Rd: function(t) {
        this.Bb = t,
        this.jb(t),
        this.kb(t)
    },
    Zc: p("Ab"),
    kb: function(t) {
        this.Ab = t,
        cc.k.ya(t ? 0 : this.Oa)
    },
    $d: function() {
        this.kb(!this.bb())
    },
    bb: p("zb"),
    jb: function(t) {
        this.zb = t,
        cc.k.$b(t ? 0 : this.Ga)
    },
    Zd: function() {
        this.jb(!this.bb())
    },
    S: function(t, i) {
        return cc.k.S(t, i)
    },
    Ba: function(t) {
        cc.k.Ba(t)
    },
    ga: function() {
        cc.k.ga()
    },
    va: function(t) {
        cc.k.va(t)
    },
    T: function() {
        cc.k.T()
    },
    zd: function(t, i) {
        var n = this.Hb;
        return 0 >= n.length || i <= _.last(n).ri ? (n.push({
            file: t,
            priority: i
        }), this.O(t), d) : h
    },
    xd: function() {
        var t = this.Hb;
        0 >= t.length || (cc.k.T(), t.pop(), 0 < t.length && this.O(_.last(t).file))
    },
    dump: function() {
        cc.log("bs.Sound.dump not implemented.")
    },
    i: l(),
    Jc: l(),
    Cc: l(),
    init: l(),
    O: function(t) {
        cc.k.T(),
        cc.k.va(t, d)
    },
    d: function() {
        return this
    }
},
y.Ah = -3,
y.wh = -2,
y.Bh = -1,
y.Ch = 0,
y.xh = 1,
y.zh = 2,
y.Dh = 3,
y.yh = 4,
y.Rb = "message-resource-status-changed",
y.pd = "message-resource-update-progress-changed",
y.ki = function(t, i) {
    y.postMessage(y.Rb, {
        Sb: t,
        status: i
    }),
    y.fb("[BSResource] onResourceCheckStatusChanged: %s, %d", t, i)
},
y.mi = function(t, i) {
    y.postMessage(y.Rb, {
        Sb: t,
        status: i
    }),
    y.fb("[BSResource] onResourceUpdateStatusChanged: %s, %d", t, i)
},
y.li = function(t, i, n) {
    y.postMessage(y.pd, {
        Sb: t,
        Rf: i,
        total: n
    }),
    y.fb("[BSResource] onResourceUpdateProgressChanged: %s, %d, %d", t, i, n)
},
y.f = y.f || {},
y.f.rb = 1e4,
y.f.si = function(t, i) {
    y.f.get("/proxy?url=" + encodeURIComponent(t), i)
},
y.f.get = function(t, i) {
    var n = new XMLHttpRequest;
    n.open("GET", t, d),
    n.onreadystatechange = function() {
        4 == n.readyState && _.isFunction(i) && (200 == n.status ? i(f, n.responseText) : (cc.log("[BSHttp] response status error :" + n.status), 0 >= n.status ? i(n.status, f) : i(n.status, n.responseText)))
    },
    n.timeout = y.f.rb,
    n.ontimeout = i,
    n.send()
},
y.f.yd = function(t, i, n) {
    var e = new XMLHttpRequest;
    e.open("POST", t, d),
    e.setRequestHeader("Content-Type", "application/json"),
    e.onreadystatechange = function() {
        4 == e.readyState && _.isFunction(n) && (200 == e.status ? n(f, e.responseText) : (cc.log("[BSHttp] response status error :" + e.status), 0 >= e.status ? n(e.status, f) : n(e.status, e.responseText)))
    },
    e.timeout = y.f.rb,
    e.send(i)
},
y.f.Sa = f,
y.f.sj = function(t) {
    y.f.Sa = t
},
y.f.Dc = function(t, i) {
    if (_.isFunction(y.f.Sa)) {
        var n = y.f.Sa(t, i);
        _.isArray(i) ? i.push(n) : i.lf = n
    }
},
y.f.fh = function(t, i, n, e) {
    y.f.Dc(i, n),
    y.f.yd(t, JSON.stringify({
        jsonrpc: "2.0",
        method: i,
        params: n,
        id: 0
    }),
    function(t, n) {
        if (t) e(t, f);
        else {
            var c = y.gb(n); ! c || c.error ? (cc.log("[BSHTTP] rpc:" + i + ", return error:" + JSON.stringify(c)), e(c, f)) : e(f, y.gb(n).result)
        }
    })
},
y.U = cc.Class.extend({
    ka: 1e6,
    Ec: function() {
        return this.ka--,
        this.ka == this.nd && (cc.log("[TouchPriorityManager] touch priority overflow"), this.ka = this.od),
        this.ka
    }
}),
y.Ya = f,
y.U.B = function() {
    return y.Ya == f && (y.Ya = new y.U),
    y.Ya
},
y.U.od = 1e6,
y.U.nd = 1024,
y.t = cc.Layer.extend({
    We: d,
    Jb: f,
    tb: f,
    hf: h,
    Ka: h,
    ia: f,
    e: f,
    ub: h,
    vb: d,
    W: d,
    Eb: f,
    uc: f,
    Y: f,
    Ra: f,
    Fa: f,
    na: f,
    ctor: function() {
        this._super()
    },
    Cb: function(t) {
        t = this.convertToNodeSpace(t.getLocation());
        var i = this.rect();
        return i.x = 0,
        i.y = 0,
        cc.rectEqualToRect(this.ia, cc.rect(0, 0, 0, 0)) ? cc.rectContainsPoint(i, t) : cc.rectContainsPoint(this.ia, t)
    },
    init: function(t, i) {
        this._super(),
        this.Jb = i,
        this.tb = t,
        this.ia = cc.rect(0, 0, 0, 0),
        this.sc = y.Yb(this),
        this.ignoreAnchorPointForPosition(h)
    },
    fd: function(t, i, n) {
        this.init(i, n),
        this.setContentSize(t)
    },
    hd: function(t, i, n) {
        this.init(i, n),
        t = this.e = new cc.Sprite(t),
        t.setAnchorPoint(0, 0),
        this.addChild(t),
        this.setContentSize(t.getContentSize())
    },
    initWithSpriteFrameName: function(t, i, n) {
        this.init(i, n),
        t = this.e = new cc.Sprite("#" + t),
        t.setAnchorPoint(0, 0),
        this.addChild(t),
        this.setContentSize(t.getContentSize())
    },
    kd: function(t, i, n, e) {
        this.init(n, e),
        n = this.e = new cc.Sprite("#" + t),
        this.ac(t),
        this.bc(i),
        n.setAnchorPoint(0, 0),
        this.addChild(n),
        this.setContentSize(n.getContentSize())
    },
    jd: function(t, i, n, e, c) {
        this.init(e, c),
        e = this.e = new cc.Sprite("#" + t),
        this.ac(t),
        this.bc(i),
        this.Pd(n),
        e.setAnchorPoint(0, 0),
        this.addChild(e),
        this.setContentSize(e.getContentSize())
    },
    ed: function(t, i, n, e, c) {
        this.init(e, c),
        t = this.e = cc.Scale9Sprite.Mb(t, i),
        t.setAnchorPoint(0, 0),
        this.addChild(t),
        this.setContentSize(n)
    },
    gd: function(t, i, n) {
        this.init(i, n),
        this.e = t,
        t.setAnchorPoint(0, 0),
        this.addChild(t),
        this.setContentSize(t.getContentSize())
    },
    Sd: function(t) {
        this.sc.setSwallowTouches(t)
    },
    xj: m("ia"),
    rect: function() {
        var t = this.getPosition(),
        i = this.getContentSize(),
        n = this.getAnchorPoint();
        return cc.rect(t.x - i.width * n.x, t.y - i.height * n.y, i.width, i.height)
    },
    Si: function(t, i, n) {
        this.uc = {
            node: t,
            anchor: _.clone(i),
            qi: _.clone(n)
        };
        var e = this.getContentSize();
        i && (t.setAnchorPoint(i), t.setPosition(n.x + e.width * i.x, n.y + e.height * i.y)),
        this.addChild(t, 1)
    },
    setContentSize: function(t) {
        cc.sizeEqualToSize(t, this.getContentSize()) || (this._super(t), this.e && this.e.setContentSize(t))
    },
    wa: function(t) {
        y.wa(this.e, t)
    },
    xa: function(t) {
        y.xa(this.e, t)
    },
    setSpriteFrame: function(t) {
        if (cc.Scale9Sprite && this.e instanceof cc.Scale9Sprite) {
            var i = this.e.Zf(),
            n = _.clone(this.e.getContentSize()),
            e = _.clone(this.e.getAnchorPoint());
            this.e.initWithSpriteFrame(t, i),
            this.e.setAnchorPoint(e),
            this.e.setContentSize(n)
        } else this.ca(t)
    },
    ac: function(t) {
        var i = !!this.Y;
        this.Y = t,
        i && (t = cc.spriteFrameCache.getSpriteFrame(t), this.ca(t))
    },
    bc: m("Ra"),
    Pd: m("Fa"),
    Mi: m("ub"),
    Ni: m("vb"),
    onTouchBegan: function(t) {
        return y.md(this) ? (this.Eb = _.clone(t.getLocation()), this.Cb(t) && this.W ? (this.Ra && (t = cc.spriteFrameCache.getSpriteFrame(this.Ra), this.ca(t)), d) : h) : h
    },
    onTouchMoved: function(t) {
        15 < cc.pDistance(t.getLocation(), this.Eb) && (this.Ka = d)
    },
    onTouchEnded: function(t) {
        if (this.Y && this.W) {
            var i = cc.spriteFrameCache.getSpriteFrame(this.Y);
            this.ca(i)
        }
        if (this.W && (!this.vb || this.Cb(t)) && (i = this.Ka, this.Ka = h, !i || !this.ub)) {
            var i = this.Jb,
            n = this.tb;
            n && (i && "string" == typeof n ? i[n](this) : i && "function" == typeof n ? n.call(i, this, t) : n(this))
        }
    },
    isCascadeColorEnabled: r(h),
    isCascadeOpacityEnabled: r(h),
    getColor: function() {
        return this.e.getColor()
    },
    setColor: function(t) {
        for (var i = this.getChildren(), n = 0; n < i.length; n++) {
            var e = i[n];
            e && e.setColor && e.setColor(t)
        }
    },
    getOpacity: function() {
        return this.e.getOpacity()
    },
    setOpacity: function(t) {
        for (var i = this.getChildren(), n = 0; n < i.length; n++) {
            var e = i[n];
            e && e.setOpacity && e.setOpacity(t)
        }
    },
    setEnabled: function(t) {
        t != this.W && (this.W = t, this.Fa && (t = cc.spriteFrameCache.getSpriteFrame(t ? this.Y: this.Fa), this.ca(t)))
    },
    wj: function() {
        cc.log("do not use bs.TouchableSprite.setTouchEnabled, use setEnabled instead")
    },
    ca: function(t) {
        this.e.setSpriteFrame(t)
    },
    fadeOut: function(t, i) {
        this.tc = 255 / t,
        this.na = i,
        this.scheduleUpdate()
    },
    update: function(t) {
        t = this.getOpacity() - this.tc * t,
        0 >= t && (t = 0, this.unscheduleUpdate(), this.na && (this.na(), this.na = f)),
        this.setOpacity(t)
    }
}),
y.t.Gf = function(t, i, n) {
    var e = new this;
    return e.fd(t, i, n),
    e
},
y.t.Hf = function(t, i, n) {
    return t = new this,
    t.gd(t, i, n),
    t
},
y.t.If = function(t, i, n) {
    var e = new this;
    return e.hd(t, i, n),
    e
},
y.t.Mb = function(t, i, n) {
    var e = new this;
    return e.initWithSpriteFrameName(t, i, n),
    e
},
y.t.Kf = function(t, i, n, e) {
    var c = new this;
    return c.kd(t, i, n, e),
    c
},
y.t.Jf = function(t, i, n, e, c) {
    var r = new this;
    return r.jd(t, i, n, e, c),
    r
},
y.t.Ff = function(t, i, n, e, c) {
    var r = new this;
    return r.ed(t, i, n, e, c),
    r
},
y.ih = "bs-message-app-enter-foreground",
y.hh = "bs-message-app-enter-background",
y.nh = "bs-message-social-user-info-updated",
y.mh = "bs-message-register-remote-notification",
y.oh = "bs-message-social-wechat-code",
y.kh = "bs-message-pay-restore-finish",
y.lh = "bs-message-pay-success",
y.jh = "bs-message-pay-fail",
y.D = cc.Class.extend({
    G: {},
    wb: [],
    Fd: function(t, i, n) {
        this.G[t] == f && (this.G[t] = []),
        this.G[t].push({
            target: i,
            Kb: n
        })
    },
    fe: function(t, i, n) {
        var e = this.G[t];
        e != f && (this.G[t] = _.filter(e,
        function(t) {
            return t.target != i || t.Kb != n
        }))
    },
    de: function(t) {
        var i = this.G;
        _.each(i,
        function(n, e) {
            _.isEmpty(n) || (i[e] = _.filter(n,
            function(i) {
                return i.target != t
            }))
        })
    },
    hb: function(t, i) {
        this.wb.push([t, i])
    },
    Sf: function() {
        _.each(this.wb,
        function(t) {
            this.postMessage(t[0], t[1])
        }.bind(this))
    },
    postMessage: function(t, i) {
        var n = this.G[t];
        if (n != f) for (var e = 0; e < _.size(n); e++) {
            var c = n[e];
            c.Kb.call(c.target, i, t)
        }
    }
}),
y.Za = f,
y.D.B = function() {
    return y.Za == f && (y.Za = new y.D),
    y.Za
},
y.Xb = function(t, i, n) {
    y.D.B().Fd(t, i, n)
},
y.ge = function(t, i, n) {
    y.D.B().fe(t, i, n)
},
y.ee = function(t) {
    y.D.B().de(t)
},
y.postMessage = function(t, i) {
    y.D.B().postMessage(t, i)
},
y.hb = function(t, i) {
    y.D.B().hb(t, i)
},
y.ke = y.Xb,
y.ef = y.ge,
y.Re = y.postMessage,
y.Qe = y.hb,
y.o = y.o || {},
y.o.Gh = 0,
y.o.Hh = 1,
y.o.Eh = 2,
y.o.Fh = 3,
y.o.Oh = 0,
y.o.Ph = 1,
y.o.Mh = 2,
y.o.Nh = 3,
y.Layer = cc.Layer.extend({
    Qa: f,
    init: function() {
        this._super(),
        this.Qa = []
    },
    Zj: function(t) {
        this.Qa.push(t),
        y.Ca.d().gc(t)
    },
    onExit: function() {
        this._super(),
        y.ee(this),
        _.each(this.Qa,
        function(t) {
            y.Ca.d().fc(t)
        })
    },
    Pi: function() {
        var t = this.getContentSize(),
        t = [cc.p(0, 0), cc.p(t.width, 0), cc.p(t.width, t.height), cc.p(0, t.height)],
        i = cc.jc.create();
        this.addChild(i, -1),
        i.Rc(t, new cc.hc(0, 0, 1, .5), 1, new cc.hc(1, 0, 1, 1))
    }
});
var A = {
    scene: function(t) {
        var i = new cc.Scene;
        return t = t instanceof cc.Layer ? t: new t,
        i.addChild(t),
        i
    },
    Tc: function(t, i) {
        i && t.setContentSize(i);
        var n = cc.winSize;
        t.width / t.height > n.width / n.height ? (y.Kd(t, n.height), t.x = (n.width - t.width * t.scale) / 2) : (y.Ld(t, n.width), t.y = (n.height - t.height * t.scale) / 2)
    },
    Cd: function(t, i) {
        return _.isArray(t) && (i = t[1], t = t[0]),
        Math.random() * (i - t) + t
    },
    Ad: function(t, i) {
        return Math.floor(Math.random() * (i - t + 1)) + t
    },
    Bd: function(t) {
        return Math.random() < t
    },
    vi: function(t, i, n) {
        var e = 0,
        c = 0;
        _.each(t,
        function(t) {
            void 0 == t[i] || _.isFunction(n) && !n(t) || (e += t[i])
        });
        var r, e = 1e4 * e,
        s = this.Cd(0, e);
        for (r in t) {
            var o = t[r];
            if (!_.isFunction(n) || n(o)) {
                var h = c + 1e4 * o[i];
                if (s > c && h >= s) return o;
                c = h
            }
        }
        return f
    },
    J: function(t, i, n) {
        if (window._hmt) {
            var e = ["_trackEvent", z.game, t];
            i || (i = z.game + "-" + t),
            i && e.push(i),
            n && e.push(n),
            _hmt.push(e)
        }
    },
    zi: function(t) {
        var i = t.Wf();
        i && (i.Wd && _.each(i.Wd,
        function(t) {
            t && z.lb.zf(t) && (t.$g ? z.lb.Bi(t) : z.lb.Ai(t))
        }), z.lb.yi(i)),
        t.removeFromParent()
    },
    Vd: function() {}
},
z = z || {};
z.Fc = "",
z.domain = "",
z.url = function() {
    return ""
},
z.sd = "/game/",
z = z || {},
z.game = "caiquan.htm",
z.za = {
    Pc: r("欢乐小游戏-今日热门《史上最坑爹猜拳》，等你来战！"),
    title: function() {
        return dataForWeixin.tTitle = "我在《史上最坑爹猜拳》中得了" + z.c.ua + "分，获得【" + z.c.bd(z.c.ua) + "】称号，you can you up, no can no BB",
        "我在《史上最坑爹猜拳》中得了" + z.c.ua + "分，获得【" + z.c.bd(z.c.ua) + "】称号，you can you up, no can no BB"
    }
},
z.c = {
    Qc: 533,
    font: "Helvetica",
    Gd: ["texture.png", "texture.plist", "cy_error.mp3", "cy_correct.mp3", "cy_bg.jpg"],
    dd: 15,
    ak: 10,
    bd: function(t) {
        return t = t || z.c.ua || 0,
        t >= 20 ? "江湖传说": t >= 17 && 20 > t ? "武林盟主": t >= 14 && 17 > t ? "宗师": t >= 11 && 14 > t ? "掌门": t >= 8 && 11 > t ? "大侠": t >= 5 && 8 > t ? "少侠": t >= 1 && 5 > t ? "新秀": "废柴"
    },
    ua: 0
},
cc.game.onStart = function() {
	myStart();
    cc.view.adjustViewPort(d);
    var t = cc.winSize,
    i = t.width,
    t = t.height;
    cc.view.enableAutoFullScreen(h),
    cc.view.setDesignResolutionSize(320, 320 * (t / i), cc.ResolutionPolicy.FIXED_WIDTH),
    cc.view.resizeWithBrowserSize(d),
    cc.LoaderScene.preload(z.c.Gd,
    function() {
        z.init(),
        cc.director.runScene(A.scene(z.c.qc))
    },
    this)
},
cc.game.run(),
z.c.lc = y.Layer.extend({
    ea: 0,
    Zb: f,
    be: f,
    dc: 30,
    ec: f,
    options: f,
    Pb: h,
    ctor: function() {
        this._super(),
        this.init(),
        this.options = [];
        for (var t = cc.winSize.width,
        i = 0; 3 > i; ++i) {
            var n = y.t.Mb("cy_0_0.png", this.td, this);
            n.attr({
                x: t / 2 + 90 * (i - 1),
                y: .4 * (n.height / 2) + 50 + 30,
                scale: .3
            });
            var e = new cc.Sprite("#cy_option_bg.png");
            e.attr({
                x: n.x,
                y: n.y
            }),
            this.addChild(e),
            this.addChild(n),
            this.options.push(n)
        }
        n = this.Wb = new cc.Sprite("#cy_0_0.png"),
        n.attr({
            anchorY: 0,
            x: t / 2,
            y: y.da(this.options[0]) + hr(20) + 8
        }),
        this.addChild(n),
        i = this.be = cc.LabelTTF.create("黑色：选赢Ta的手势\n白色：选输Ta的手势", z.c.font, 18),
        i.attr({
            x: t / 2,
            y: y.da(n) + hr(45) - 20,
            color: cc.color(0, 0, 0)
        }),
        this.addChild(i),
        n = new cc.Sprite("#cy_timer.png"),
        n.attr({
            x: t / 2 - 80,
            y: y.da(i) + hr(50),
            scale: .7
        }),
        this.addChild(n),
        i = this.ec = cc.LabelTTF.create("30", z.c.font, 24),
        i.attr({
            x: n.x + 40,
            y: n.y,
            color: cc.color(0, 0, 0)
        }),
        this.addChild(i),
        n = cc.LabelTTF.create("得分:", z.c.font, 18),
        n.attr({
            x: t / 2 + 40,
            y: i.y,
            color: cc.color(0, 0, 0)
        }),
        this.addChild(n),
        n = this.Zb = cc.LabelTTF.create("0", z.c.font, 24),
        n.attr({
            x: t / 2 + 80,
            y: i.y,
            color: cc.color(0, 0, 0)
        }),
        this.addChild(n),
        this.width = t,
        this.height = y.da(n),
        this.Ub(),
        this.schedule(this.ud.bind(this), 1, cc.REPEAT_FOREVER, 1)
    },
    adv: function() {
        window.location.href = ""
    },
    ud: function() {
        if (0 < this.dc) {
            var t = --this.dc,
            i = this.ec;
            5 >= t && i.setColor(cc.color(255, 0, 0)),
            i.runAction(cc.sequence(cc.scaleTo(.15, 1.4), cc.callFunc(i.setString.bind(i, t + "")), cc.scaleTo(.15, 1))),
            0 == t && (this.unscheduleAllCallbacks(), this.ab())
        }
    },
    td: function(t) {
        this.Pb || (t.Xa == this.Xa ? (this.ea++, cc.k.S("cy_correct.mp3"), t = new cc.Sprite("#cy_right.png")) : (this.ea = Math.max(this.ea - 1, 0), cc.k.S("cy_error.mp3"), t = new cc.Sprite("#cy_wrong.png")), this.Zb.setString(this.ea + ""), t.attr({
            x: cc.winSize.width / 2,
            y: y.R(this.Wb) + 35
        }), t.runAction(cc.sequence(cc.delayTime(.3), cc.callFunc(this.Ub.bind(this)), cc.removeSelf())), this.addChild(t))
    },
    xb: function(t, i) {
        var n = _.map([(t + 1) % 3, (t + 2) % 3, t],
        function(t) {
            return "cy_" + t + "_" + (i ? 0 : 1) + ".png"
        });
        return y.Mc(n)
    },
    Ub: function() {
        var t = A.Ad(0, 2),
        i = A.Bd(.5);
        this.Xa = i ? (t + 2) % 3 : (t + 1) % 3,
        this.Wb.runAction(this.xb(t, i)),
        _.each(_.shuffle([0, 1, 2]),
        function(t, i) {
            this.options[i].runAction(this.xb(t, d)),
            this.options[i].Xa = t
        },
        this)
    },
    ab: function() {
        this.Pb = d,
        this.unscheduleAllCallbacks(),
        this.scheduleOnce(function() {
            y.postMessage("game-over", this.ea)
        },
        .6)
    }
}),
z.init = function() {
    y.init(),
    A.Vd(),
    cc.spriteFrameCache.addSpriteFrames("texture.plist")
},
z.c.ha = y.t.extend({
    ctor: function(t, i, n, e) {
        this._super(),
        this.initWithSpriteFrameName(i + ".png", n, e),
        this.Sd(d),
        t && (t = cc.LabelTTF.create(t, "黑体", 20), this.addChild(t), y.C(t, this, .5, .56))
    }
}),
z.c.oc = cc.LayerColor.extend({
    ae: f,
    ctor: function() {
        this._super(),
        this.init(cc.color(0, 0, 0, 200)),
        this.setContentSize(cc.winSize),
        y.Yb(this, d);
        var t = this.ae = new cc.Sprite("#cy_sharetip.png");
        t.setAnchorPoint(1, 1),
        t.setPosition(cc.winSize.width, cc.winSize.height),
        this.addChild(t)
    },
    onTouchBegan: function() {
        return this.scheduleOnce(this.removeFromParent.bind(this), 0),
        d
    }
}),
z.c.qc = cc.Layer.extend({
    Xh: f,
    $a: f,
    Xd: f,
    first: d,
    Ob: f,
    ctor: function() {
        this._super(),
        this.init();
        var t = cc.winSize,
        i = t.height / z.c.Qc,
        n = window.hr = function(t) {
            return i * t
        },
        e = new cc.Sprite("cy_bg.jpg");
        e.setAnchorPoint(0, 0),
        A.Tc(e, cc.size(320, 480)),
        this.addChild(e),
        e = cc.LabelTTF.create("", "Arial", 16),
        e.setHorizontalAlignment(cc.TEXT_ALIGNMENT_CENTER),
        e.setColor(cc.color(0, 0, 0)),
        y.C(e, this, .5, 1),
        e.anchorY = 1,
        this.addChild(e);
        var c = this.title = new cc.Sprite("#cy_title.png");
        c.x = t.width / 2,
        c.y = t.height - n(60) + z.c.dd,
        this.addChild(c),
        e = this.Ob = cc.Node.create(),
        this.addChild(e),
        e.x = t.width / 2,
        e.y = y.R(c) - n(20),
        c = new cc.Sprite("#cy_example.png"),
        c.anchorY = 1,
        e.addChild(c),
        t = cc.LabelTTF.create("答对加一分，答错减一分\n30秒内答对尽可能多的题目", z.c.font, 12),
        t.setColor(cc.color(0, 0, 0)),
        t.setHorizontalAlignment(cc.TEXT_ALIGNMENT_CENTER),
        t.y = y.R(c) - n(20),
        e.addChild(t);
        var c = new z.c.ha("开始游戏", "cy_btn_red", this.play, this);
       /* r = new z.c.ha("更多游戏", "cy_btn_green", this.Tb, this),
        s = new z.c.ha("关注我们", "cy_btn_green", this.about, this);*/
        c.scale = 1.3,
        c.y = y.R(t) - n(40),e.addChild(c)
        /*r.x = t.width / 2 - n(140),
        r.y = y.R(c) - n(40),
        s.x = t.width / 2 + n(10),
        s.y = y.R(c) - n(40),*/
        /*,
        e.addChild(r),
        e.addChild(s)*/
    },
    onEnter: function() {
        this._super(),
        y.Xb("game-over", this, this.ab)
    },
    play: function() {
        this.ib && (this.ib.removeFromParent(), delete this.ib),
        this.Ob.setVisible(h),
        this.$a && this.$a.removeFromParent();
        var t = this.$a = new z.c.lc;
        this.addChild(t);
        var i = y.R(this.title) - y.da(t);
        t.y = i / 2,
        A.J(this.first ? "play": "replay"),
        this.first = h
    },
    Tb: function() {
        A.J("more"),
        window.location.href = "http://iwan.baidu.com/xxx_xiaoyouxi/xyz_abc/"
    },
    about: function() {
        window.location.href = "http://iwan.baidu.com/xxx_xiaoyouxi/index.html"
    },
    za: function() {
        A.J("share");
        var t = this.Xd = new z.c.oc;
        this.addChild(t)
    },
    ab: function(t) {
        /*z.c.ua = t,
        A.J("end", "score", t),
        t = _.sprintf("你竟然得了%d分，还是蛮拼的了！分享到朋友圈可以【查看称号】，还能PK小伙伴！", t),
        t = new z.c.qb(t, "取消",
        function() {
            this.cc()
        }.bind(this), "分享",
        function() {
            this.cc(),
            endgame.share.set("tTitle", dataForWeixin.tTitle),
            endgame.share.trigger()
        }.bind(this), "关注我们", this.about.bind(this)),
        this.addChild(t),
        z.za.title(),
        y.Lb(t)*/
        dp_submitScore(t);
    },
    cc: function() {
       /* var t = this.ib = new z.c.qb("", "再玩一次", this.play.bind(this), "更多游戏", this.Tb.bind(this), "关注我们", this.about.bind(this));
        this.addChild(t),
        y.Lb(t)*/
    }
}),
z.c.qb = cc.Sprite.extend({
    ctor: function(t, i, n, e, c, r, s) {
        function o(t) {
            return function() {
                a.removeFromParent(),
                t()
            }
        }
        if (this._super(), this.initWithSpriteFrameName("cy_dlg_bg.png"), t) {
            var h = cc.LabelTTF.create(t, "黑体", 18);
            h.setColor(cc.color(0, 0, 0)),
            h.setHorizontalAlignment(cc.TEXT_ALIGNMENT_CENTER),
            h.setDimensions(cc.size(this.width - 40, 0)),
            y.C(h, this, .5, .65),
            this.addChild(h)
        }
        var a = this;
        i = new z.c.ha(i, "cy_btn_red", o(n), this),
        this.addChild(i),
        e = new z.c.ha(e, "cy_btn_green", o(c), this),
        this.addChild(e),
        r = new z.c.ha(r, "cy_btn_green", o(s), this),
        this.addChild(r),
        t ? (y.C(i, this, .28, .3), y.C(e, this, .72, .3), y.C(r, this, .5, .1)) : (i.scale = e.scale = r.scale = 1.2, y.C(i, this, .5, .8), y.C(e, this, .5, .5), y.C(r, this, .5, .2))
    }
});