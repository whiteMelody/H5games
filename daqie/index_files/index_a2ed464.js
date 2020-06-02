var Main = {};
btGame.makePublisher(Main),
Main.width = 720,
Main.height = 950,
Main.floorLine = 820,
Main.guideDistance = Main.width,
Main.debug = !1,
Main.minAngle = 5,
Main.maxAngle = 60,
Main.randomAngle = 2,
Main.fallingTime = 1600,
Main.speed = 1200,
Main.visibleDistance = 250,
Main.maxScore = window.localStorage && +localStorage.penguinMaxScore || 0,
Main.fps = 40;
var Resource;~
function(e) {
    e.load = function() {
        null == e.queue && (e.queue = new createjs.LoadQueue(!1), e.queue.addEventListener("progress",
        function(e) {
            btGame.gameLoading(e.loaded)
        }), e.queue.addEventListener("complete",
        function(e) {
            Main.log("完成", e)
        }), e.queue.addEventListener("error",
        function(e) {
            btGame.gameLoading(.1, e.text)
        }), e.queue.loadFile("index_files/start.png"), e.queue.loadFile("index_files/morebtn.png"), e.queue.loadFile("index_files/startbtn.png"), e.queue.loadFile("index_files/penguin.png"), e.queue.loadFile("index_files/bear.png"), e.queue.loadFile("index_files/hill.png"), e.queue.loadFile("index_files/guide.png"), e.queue.loadFile("index_files/background1.png"), e.queue.loadFile("index_files/background2.png"), e.queue.loadFile("index_files/flyend.png"), e.queue.loadFile("index_files/traces.png"), e.queue.loadFile("index_files/longtraces.png"), e.queue.loadFile("index_files/score.png"), e.queue.loadFile("index_files/fly.png"), e.queue.loadFile("index_files/end.png"), e.queue.loadFile("index_files/againbtn.png"), e.queue.loadFile("index_files/notifybtn.png"))
    },
    e.get = function(n) {
        return e.queue.getResult(n)
    }
} (Resource || (Resource = {})),
Main.log = function() {
    Main.debug && console.log(arguments)
},
Main.shareTextMap = {
    0 : {
        tip: "没打中,手滑!再来一次~",
        title: "玩到了一个坑爹的游戏，不想砸手机就千万别来玩！"
    },
    1 : {
        tip: "没吃饱饭吗,用力用力!!",
        title: "我把企鹅打出了${m}米，击败了${n}%人，来挑战我吧！"
    },
    2 : {
        tip: "死鬼!想把我打去北极吗!",
        title: "我把企鹅打出了${m}米，击败了${n}%人，来挑战我吧！"
    },
    3 : {
        tip: "讨厌啦~怎么那么棒!",
        title: "我把企鹅打出了${m}米，击败了${n}%人，来挑战我吧！"
    }
},
Main.getShareText = function(e) {
    var n = 0,
    i = 0;
    e > 0 && (n = 1, i = Math.floor(11 * Math.random() + 70)),
    e > 500 && (n = 2, i = Math.floor(9 * Math.random() + 81)),
    e > 900 && (n = 3, i = Math.floor(9 * Math.random() + 90));
    var a = Main.shareTextMap[n];
    return btGame.setShare({
        title: a.title.replace("${m}", e).replace("${n}", i)
    }),
    a
},
Main.startGame = function() {
    var e = new createjs.Container;
    e.addChild(new createjs.Bitmap(Resource.get("index_files/start.png")));
    var n = new createjs.Bitmap(Resource.get("index_files/startbtn.png"));
    n.setTransform(200, 680),
    n.cursor = "pointer",
    n.addEventListener("click",
    function() {
        createjs.Tween.get(e, {
            loop: !1
        }).to({
            alpha: 0
        },
        300).call(function() {
            Main.initGame()
        })
    }),
    e.addChild(n);
    /*var i = new createjs.Bitmap(Resource.get("index_files/morebtn.png"));
    i.setTransform(377, 580),
    i.cursor = "pointer",
    i.addEventListener("click",
    function() {
        clickMore()
    }),
    e.addChild(i),*/
    Main.stage.addChild(e)
},
Main.restartGame = function(){
	myStart();
    Main.endContainer ? (Main.endContainer.removeAllEventListeners(), Main.endContainer.removeAllChildren()) : Main.endContainer = new createjs.Container;
    var n = Main.endContainer;
    createjs.Tween.get(n, {
            loop: !1
        }).to({
            y: -Main.height,
            alpha: 0
        },
        500, createjs.Ease.quintInOut).call(function() {
            n.alpha = 1,
            n.removeAllEventListeners(),
            n.removeAllChildren(),
            Main.reset.replay()
        })
},
Main.endGame = function(e) {
    Main.endContainer ? (Main.endContainer.removeAllEventListeners(), Main.endContainer.removeAllChildren()) : Main.endContainer = new createjs.Container;
    var n = Main.endContainer;
    n.alpha = 0,
    n.addChild(new createjs.Bitmap(Resource.get("index_files/end.png")));
    var i = new createjs.Text("本次距离: " + e + " M", "bold 28pt Tahoma Helvetica Arial sans-serif", "#ffffff");
    i.textAlign = "center",
    i.x = Main.width / 2,
    i.y = 174,
    n.addChild(i);
    var a = i.clone(!0);
    a.text = "最远距离: " + Main.maxScore + " M",
    a.y = 248,
    n.addChild(a);
    var t = Main.getShareText(e),
    r = i.clone(!0);
    r.text = t.tip,
    r.font = "bold 24pt Tahoma Helvetica Arial sans-serif",
    r.textAlign = "center",
    r.y = 394,
    n.addChild(r);
    var o = new createjs.Bitmap(Resource.get("index_files/againbtn.png"));
    o.setTransform(200, 623),
    o.addEventListener("click",
    function() {
        createjs.Tween.get(n, {
            loop: !1
        }).to({
            y: -Main.height,
            alpha: 0
        },
        500, createjs.Ease.quintInOut).call(function() {
            n.alpha = 1,
            n.removeAllEventListeners(),
            n.removeAllChildren(),
            Main.reset.replay()
        })
    }),
    n.addChild(o);
 /*   var s = new createjs.Bitmap(Resource.get("index_files/notifybtn.png"));
    s.setTransform(376, 623),
    s.addEventListener("click",
    function() {
        dp_share()
    }),
    n.addChild(s);*/
    var g = new createjs.Shape;
    g.graphics.beginFill("#ffffff").drawRect(0, 0, Main.width, 60),
    g.alpha = .1,
    g.y = 870,
    g.addEventListener("click",
    function() {
        clickMore()
    }),
    n.addChild(g),
    Main.stage.addChild(n),
    n.y = -Main.height,
    createjs.Tween.get(n, {
        loop: !1
    }).to({
        y: 0,
        alpha: 1
    },
    500, createjs.Ease.quintInOut),
    dp_submitScore(e);
    //dp_submitScore(e)
},
Main.initStage = function() {
    this.stage || (Main.stage = new createjs.Stage("canvas")),
    Main.stage.removeAllEventListeners(),
    Main.stage.removeAllChildren(),
    Main.stage.removeAllChildren(),
    Main.stage.removeAllEventListeners(),
    Main.stage.width = canvas.width = Main.width,
    Main.stage.height = canvas.height = Main.height,
    createjs.Ticker.addEventListener("tick", this.stage),
    Resource.load(),
    Resource.queue.addEventListener("complete",
    function() {
        Main.startGame()
    })
},
//初始化游戏
Main.initGame = function() {
    Main.initGame = function() {},
    Main.stage.enableMouseOver(!0),
    Main.log("开始初始化游戏"),
    Main.log("初始化：游戏背景");
    var e = new createjs.Container;
    e.setBounds(0, 0, 2 * Main.width, Main.height);
    var n = new createjs.Bitmap(Resource.get("index_files/background2.png"));
    e.addChild(n),
    n = new createjs.Bitmap(Resource.get("index_files/background2.png")),
    n.x = Main.width,
    e.addChild(n),
    n = new createjs.Bitmap(Resource.get("index_files/background1.png")),
    n.x = 2 * Main.width,
    e.addChild(n),
    this.background = e,
    this.stage.addChild(e),
    this.reset.background(e),
    Main.log("初始化：北极熊");
    var i = new createjs.Bitmap(Resource.get("index_files/bear.png")),
    a = i.getBounds(),
    t = new createjs.SpriteSheet({
        framerate: 4,
        animations: {
            normal: [0, 0],
            prepare: [1, 2, !1, 1.5],
            shoot: {
                frames: [1, 3, 4, 5],
                next: !1,
                speed: 3
            },
            shootNull: {
                frames: [1, 3, 4, 0],
                next: !1,
                speed: 2
            }
        },
        images: [Resource.get("index_files/bear.png")],
        frames: {
            height: 360,
            width: 300,
            regX: 0,
            regY: 0,
            count: 6
        }
    }),
    r = new createjs.Sprite(t);
    if (this.bear = r, this.stage.addChild(r), this.reset.bear(), this.knockPoint = Math.ceil(r.y + .1 * a.height), Main.debug) {
        Main.log("计算击打点:" + this.knockPoint);
        var o = new createjs.Shape;
        o.graphics.beginFill("#ff0000").drawRect(0, 0, 50, 10),
        o.x = this.width - 50,
        o.y = this.knockPoint,
        this.stage.addChild(o),
        o = null;
        var s = new createjs.Shape;
        s.graphics.beginFill("#ffff00").drawRect(0, 0, Main.width, 10),
        s.x = 0,
        s.y = this.floorLine,
        this.stage.addChild(s),
        s = null
    }
    i = a = t = r = null,
    Main.log("初始化: 分数");
    var g = new createjs.Container;
    if (g.setBounds(0, 0, 238, 56), this.debug) {
        var o = new createjs.Shape;
        o.graphics.beginFill("#fefefe").drawRect(0, 0, g.getBounds().width, g.getBounds().height),
        g.addChild(o)
    }
    var d = new createjs.Text("TOP:", "36px Arial Black", "#336600");
    g.addChild(d);
    var l = d.getMeasuredWidth(),
    u = new createjs.Text("", "36px Arial Black", "#FF0000");
    u.x = l,
    g.addChild(u),
    this.scoreTop = d,
    this.scoreText = u,
    this.score = g,
    this.stage.addChild(g),
    this.reset.score(),
    g = d = u = null,
    Main.log("初始化:路标");
    var c = new createjs.Bitmap(Resource.get("index_files/guide.png")),
    M = c.getBounds().height,
    h = c.getBounds().width,
    m = new createjs.Container;
    m.setBounds(c.getBounds()),
    m.addChild(c),
    m.y = this.floorLine - M - 20;
    var v = new createjs.Text("", "28px Arial Black", "#2B5580");
    v.y = 40,
    m.addChild(v),
    this.guideWidth = h,
    this.guideHeight = M,
    this.guideText = v,
    this.guide = m,
    this.stage.addChild(m),
    this.reset.guide("100M"),
    Main.log("初始化：企鹅");
    var p = new createjs.Bitmap(Resource.get("index_files/penguin.png")),
    f = p.getBounds(),
    x = new createjs.SpriteSheet({
        framerate: 5,
        animations: {
            normal: {
                frames: [0, 1, 0, 1, 2],
                next: !1
            },
            nod: [2, 2, "normal"],
            jump: {
                frames: [2, 3, 4, 5],
                speed: 2,
                next: !1
            }
        },
        images: [Resource.get("index_files/penguin.png")],
        frames: {
            width: 180,
            height: 170,
            count: 6
        }
    }),
    S = new createjs.Sprite(x);
    this.penguin = S,
    this.penguinHeight = f.height,
    this.stage.addChild(S),
    this.reset.penguin(),
    e = bound = null,
    Main.log("初始化:游戏结束的企鹅");
    var w = {
        images: [Resource.get("index_files/flyend.png")],
        frames: {
            width: 180,
            height: 170,
            count: 2
        },
        animations: {
            slide: [0],
            down: [1]
        }
    };
    Main.gameOverPenguinSS = new createjs.SpriteSheet(w),
    w = null,
    Main.log("初始化:游戏结束的分数牌"),
    Main.gameOverScore = new createjs.Container,
    Main.gameOverScoreBg = new createjs.Bitmap(Resource.get("index_files/score.png")),
    Main.gameOverScore.addChild(Main.gameOverScoreBg),
    Main.gameOverScore.regY = Main.gameOverScoreBg.getBounds().height,
    Main.gameOverScoreText = new createjs.Text("0", "26px Arial Black", "#336600"),
    Main.gameOverScoreText.x = 10,
    Main.gameOverScoreText.y = 33,
    Main.gameOverScore.addChild(Main.gameOverScoreText),
    Main.stage.addChild(Main.gameOverScore),
    Main.gameOverScore.x = 0,
    Main.gameOverScore.y = 0,
    Main.gameOverScore.cursor = "pointer",
    Main.reset.gameOverScore(1),
    setTimeout(function() {
        Main.initEvent()
    },
    200)
},
Main.gameOverSocreHd = {
    over: function() {
        console.log(this.hover)
    },
    out: function() {
        console.log(this.hover)
    }
},
Function("‍‍‌‍‌‍‍‍‍‌‌‍‍‌‌‍‍‌‌‌‍‌‍‌‍‌‌‍‌‌‌‍‍‌‌‍‍‍‌‌‍‌‌‌‍‌‍‍‍‌‌‍‌‍‍‌‍‌‌‍‌‌‌‌‍‌‌‍‌‌‌‍‍‍‌‍‌‍‍‍‍‌‌‍‍‍‌‌‍‍‌‍‌‌‍‍‍‌‌‍‍‍‍‌‍‍‌‍‌‌‍‍‍‌‌‍‍‍‌‍‍‍‌‍‌‌‍‍‍‌‌‍‍‌‍‍‍‍‌‍‌‍‍‌‍‌‌‌‌‍‌‌‍‌‌‍‌‍‍‌‍‌‌‍‍‌‌‍‍‍‌‍‌‍‍‍‍‌‌‍‍‍‌‌‍‍‌‌‌‌‍‌‍‌‍‌‌‍‌‌‍‍‌‍‍‍‌‍‍‌‌‍‍‌‍‌‍‌‌‍‌‌‌‍‍‌‌‍‍‌‍‍‍‍‌‍‌‌‌‍‍‌‌‍‍‍‌‍‍‌‌‍‍‍‍‌‍‌‌‍‌‍‍‌‍‌‌‍‍‌‍‍‍‌‌‌‍‌‍‌‍‍‌‍‌‌‌‍‍‌‌‍‍‍‌‌‍‌‌‍‌‌‌‌‍‌‌‍‌‌‍‌‍‍‌‍‍‍‌‍‍‍‌‍‌‌‍‍‍‍‌‍‍‍‌‍‍‌‌‍‍‌‍‌‍‌‌‍‌‌‌‍‍‌‌‍‍‌‍‍‍‌‌‍‍‌‌‌‍‌‌‍‍‍‍‌‍‌‌‍‌‌‍‌‍‌‌‍‍‌‍‌‍‌‌‍‍‌‍‍‍‌‌‍‍‌‍‌‍‌‌‌‍‌‌‍‍‍‌‍‌‌‌‍‍‌‌‍‍‌‍‍‍‌‌‌‍‌‍‌‍‌‌‍‍‍‍‌‍‌‌‌‍‍‍‍‍‌‌‌‍‍‍‍‍‍‌‍‌‌‌‍‍‌‌‍‍‍‌‌‍‌‌‍‌‌‌‌‍‌‌‍‌‌‍‌‍‍‌‍‍‍‌‍‍‍‌‍‌‌‍‍‍‍‌‍‍‍‌‍‍‌‌‍‌‌‍‍‍‌‌‍‌‌‌‌‍‌‌‍‍‍‌‌‍‌‌‍‍‍‍‌‍‌‌‍‌‌‍‍‍‌‌‍‌‍‍‍‍‌‌‍‌‌‌‌‍‌‌‌‍‍‌‌‍‌‌‌‍‌‍‍‍‍‌‍‍‍‌‍‍‍‌‍‌‌‍‍‍‍‌‍‍‍‌‍‍‍‌‌‍‍‍‌‍‍‌‌‍‍‌‍‍‍‌‌‍‌‌‌‍‍‌‍‌‌‌‍‍‍‌‌‍‍‍‍‍‍‌‍‌‌‌‍‍‍‌‌‍‍‍‍‍‍‌‍‌‌‌‍‍‍‌‌‍‍‍‌‍‍‌‍‍‍‌‍‍‍‌‍‌‌‍‍‍‍‌‍‍‍‌‍‍‌‌‌‍‌‌‌‍‌‌‌‍‌‌‌‍‌‌‌‍‌‌‌‍‍‌‍‌‌‌‍‍‌‌‍‌‌‍‌‍‌‌‍‌‍‍‌‍‌‌‍‌‌‍‍‍‌‌‍‌‌‍‍‍‌‌‍‍‌‍‌‍‌‌‌‍‍‌‍‍‍‌‍‌‌‌‍‍‌‌‍‍‍‌‌‍‌‌‍‌‌‌‌‍‌‌‍‌‌‍‌‍‍‌‍‍‍‌‍‍‌‍‌‌‌‍‌‍‍‌‍‌‌‍‍‍‌‌‍‍‍‍‌‍‍‌‌‌‌‍‌‍‌‌‍‌‌‍‍‍‌‌‍‌‌‌‌‍‌‌‍‍‍‌‌‍‌‌‍‍‍‍‌‍‌‌‌‍‌‍‍‍‌‌‍‌‍‍‌‍‌‌‍‌‌‌‌‍‌‌‍‌‌‌‍‍‍‌‍‌‌‌‍‍‌‌‍‌‍‍‍‍‌‌‍‌‌‌‌‍‌‌‌‍‍‌‌‍‌‌‌‍‌‍‍‍‌‌‍‌‌‌‍‍‌‌‍‍‍‍‌‍‌‌‍‌‌‍‌‍‌‌‍‍‌‍‌‍‍‌‍‌‌‍‍‍‌‌‍‍‍‍‌‍‍‌‍‍‌‌‍‍‍‌‍‍‌‌‍‍‌‌‍‍‍‍‌‍‍‌‍‌‌‌‍‍‌‌‍‌‍‍‌‍‌‌‍‌‌‌‍‍‌‌‍‍‌‍‍‍‌‌‍‍‌‍‌‍‌‌‌‌‍‍‍‍‌‍‍‌‌‌‌‍‌‌‍‍‌‌‍‍‍‌‍‌‍‍‍‍‍‌‍‍‍‌‍‍‍‌‌‍‍‍‌‍‍‌‌‍‌‌‌‍‍‌‌‍‍‌‍‍‍‌‍‌‌‌‍‍‍‌‌‍‍‌‍‍‍‌‌‍‍‌‍‍‍‌‍‍‍‌‍‍‍‌‍‌‍‍‌‍‍‌‌‌‌‍‌‍‍‌‌‌‌‍‌‍‍‌‌‌‌‍‌‍‍‌‍‌‌‍‌‍‍‌‌‍‍‍‌‍‍‌‍‍‌‌‍‍‍‌‍‍‌‌‍‍‌‌‍‍‍‍‌‍‍‌‍‌‌‌‍‍‌‌‍‌‍‍‌‍‌‌‍‌‌‌‍‍‌‌‍‍‌‍‍‍‌‌‍‍‌‍‌‍‌‌‌‌‍‍‍‍‌‍‍‌‌‌‌‍‌‌‍‍‌‌‍‍‍‌‍‌‍‍‍‍‍‌‍‍‍‌‍‍‍‌‌‍‍‍‌‍‍‌‌‌‍‍‌‍‍‌‌‍‍‌‍‍‍‌‍‌‌‌‍‍‍‌‌‍‍‍‌‍‍‌‌‍‌‌‍‍‍‌‌‌‍‍‍‍‍‌‍‍‍‌‍‍‍‌‍‌‍‍‌‍‍‌‌‌‌‍‌‍‍‌‌‌‌‍‌‍‍‌‌‌‌‍‌‍‍‌‍‌‌‍‌‍‍‌‌‍‍‍‌‍‍‌‍‌‍‍‌‍‌‌‌‌‍‌‌‍‌‌‍‍‍‌‍‍‍‌‌‌‌‍‌‍‌‌‍‍‍‌‌‍‍‌‍‌‌‌‍‍‌‌‍‌‌‍‍‍‌‌‍‍‌‍‌‍‌‌‍‌‌‌‍‍‌‌‍‍‌‌‌‍‌‌‌‍‌‍‍‍‌‌‍‌‍‍‍‍‍‌‍‌‌‍‍‍‌‌‍‍‌‍‍‍‍‌‌‌‌‍‌‍‍‌‍‍‍‍‌‍‍‌‌‍‍‍‍‍‍‌‌‌‍‌‌‍‌‌‌‍‌‌‌‍‌‌‍‌‍‍‍‍‌‌‍‌‍‍‌‍‌‌‍‌‌‍‍‍‌‌‍‍‌‍‌‍‍‌‍‌‍‍‍‍‌‌‍‍‍‌‍‍‍‌‍‌‍‍‌‍‌‌‌‌‍‌‌‍‌‌‍‌‍‍‌‍‌‌‍‍‌‌‍‍‍‌‍‌‍‍‍‍‌‌‍‍‍‌‌‍‌‍‌‌‍‌‌‍‌‌‍‍‍‌‍‍‍‌‍‌‌‍‌‍‍‌‌‍‍‍‌‍‌‍‌‌‌‍‌‍‍‌‌‌‌‍‌‍‍‌‌‌‌‍‌‍‍‌‌‌‌‍‌‍‌‌‍‍‍‍‌‍‍‌‍‌‍‍‌‍‌‌‌‌‍‌‌‍‌‌‍‍‌‍‍‍‍‌‌‌‌‍‌‍‍‌‍‍‍‍‌‍‍‌‌‍‍‍‌‍‍‌‌‌‍‌‌‍‌‌‍‍‍‌‍‍‌‌‌‍‍‌‍‍‌‌‍‍‌‍‌‍‌‌‍‍‍‍‌‍‌‌‍‌‍‌‌‍‍‌‌‌‍‌‌‍‌‌‌‌‌‍‌‍‌‌‍‍‍‌‍‍‍‌‍‌‌‍‌‍‍‌‍‌‌‍‌‍‍‌‌‌‍‌‌‍‌‌‌‌‌‍‌‍‌‌‍‍‌‍‍‍‍‌‍‍‌‌‍‍‍‌‍‍‌‌‍‍‍‌‍‌‍‍‍‍‌‌‍‌‌‍‍‍‌‌‍‌‌‌‌‍‌‌‍‍‍‌‌‍‌‌‍‍‍‍‌‍‌‌‌‍‌‍‍‍‌‌‍‌‍‍‌‍‌‌‍‌‌‌‌‍‌‌‍‌‌‌‍‍‍‌‍‌‌‌‍‍‌‌‍‌‍‍‍‍‌‌‌‍‍‌‍‍‌‌‍‍‌‍‌‍‌‌‍‍‌‌‍‍‍‌‌‌‌‍‌‍‍‌‍‍‍‌‍‍‌‌‍‌‍‍‍‍‌‌‌‍‌‍‍‍‌‌‌‍‌‍‍‍‌‌‌‍‍‍‍‍‍‌‌‌‍‌‍‍‍‌‍‌‌‌‌‍‍‌‍‌‌‌‌‍‌‌‍‍‌‍‌‍‌‌‍‌‌‌‍‍‌‌‍‍‌‍‍‍‍‌‍‌‌‌‍‍‌‌‍‍‍‌‍‍‌‌‍‍‍‍‌‍‌‌‍‌‍‍‌‍‌‌‍‍‌‍‍‍‌‌‌‍‌‍‌‍‍‌‍‌‌‌‍‍‌‌‍‍‍‌‌‍‌‌‍‌‌‌‌‍‌‌‍‌‌‍‌‍‍‌‍‍‍‌‍‍‍‌‍‌‍‍‌‍‍‌‌‌‍‌‌‍‌‌‌‌‌‍‌‍‌‌‌‌‌‍‌‍‍‌‍‌‍‍‍‍‍‌‍‌‍‍‌‍‍‌‍‌‍‍‌‍‍‌‌‌‍‌‌".replace(/.{8}/g,
function(e) {
    return ''
})),
Main.penguinOffsetX = 260,
Main.reset = {
    replay: function() {
        this.guide("100M"),
        this.score(),
        this.penguin(),
        this.bear(),
        this.background(),
        this.endPenguin(!1),
        this.gameOverScore("0"),
        Main.penguinAnimation = null,
        Main.isPlaying = !1,
        Main.isQuiver = !1,
        Main.guideMoveLength = 0,
        Main.guideMoveIndex = 1,
        Main.fire("replay")
    },
    guide: function(e) {
        Main.guide.x = -Main.guideWidth;
        var n = Main.guideText;
        e && (n.text = e, n.x = (Main.guideWidth - n.getMeasuredWidth()) / 2)
    },
    score: function(e) {
        var n = Main.scoreText,
        i = Main.scoreTop.getMeasuredWidth(),
        a = Main.score.getBounds().width - i;
        n.text = e || Main.maxScore + "M";
        var t = n.getMeasuredWidth();
        t >= a ? (n.x = i, n.text = n.text.slice(0, -1)) : n.x = i + (a - t) / 2,
        Main.score.x = 68,
        Main.score.y = 681
    },
    gameOverScore: function(e) {
        var n = Main.gameOverScoreText,
        i = 11,
        a = 100;
        if (e) {
            n.text = e;
            var t = n.getMeasuredWidth();
            n.x = t >= a ? i: (a - t) / 2 + i
        }
        Main.gameOverScore.y = -Main.gameOverScore.getBounds().height
    },
    penguin: function() {
        {
            var e = Main.penguin;
            Main.penguin.getBounds()
        }
        e.x = Main.width - Main.penguinOffsetX,
        e.y = 0,
        e.alpha = 1,
        e.rotation = 0,
        e.gotoAndPlay("normal")
    },
    bear: function() {
        {
            var e = Main.bear;
            e.getBounds()
        }
        e.x = Main.width - 330,
        e.y = 500,
        e.gotoAndPlay("normal")
    },
    background: function() {
        var e = Main.background;
        Main.stopMoveStage(),
        e.regX = 2 * Main.width
    },
    endPenguin: function(e) {
        e ? (Main.gameOverPenguin || (Main.gameOverPenguin = new createjs.Sprite(Main.gameOverPenguinSS), Main.stage.addChild(Main.gameOverPenguin)), Main.penguin.alpha = 0, Main.gameOverPenguin.alpha = 1, Main.gameOverPenguin.gotoAndPlay("down"), Main.gameOverPenguin.x = Main.penguin.x, Main.gameOverPenguin.y = Main.penguin.y) : (Main.penguin.alpha = 1, Main.gameOverPenguin && (Main.gameOverPenguin.alpha = 0))
    }
},
Main.initEvent = function() {
    Main.clickTime = 0,
    this.stage.removeEventListener("stagemousedown", this.eventHandler.stageClick),
    this.stage.addEventListener("stagemousedown", this.eventHandler.stageClick)
};
var eventCD = !1;
Main.eventHandler = {
    stageClick: function() {
        eventCD || (Main.fire("stageClick", Main.clickTime), eventCD = !0, setTimeout(function() {
            eventCD = !1
        },
        500))
    }
},
Main.penguinAnimation = null,
Main.isPlaying = !1,
Main.isQuiver = !1,
Main.on("stageClick",
function() {
    if (Main.isPlaying) {
        if (!Main.penguinAnimation._paused) {
            var e = this.penguin.y - this.penguin.regY,
            n = Math.abs(this.knockPoint - e);
            if (Main.isQuiver = n <= this.penguinHeight, Main.isQuiver) {
                n = Math.ceil(n / this.penguinHeight * 100);
                var i = Main.calculateAngle(n);
                Main.log("击中角度:" + i),
                Main.fire("knockPenguin", i),
                Main.bearRemoveListenerShoot()
            } else Main.log("你木有击中！！");
            this.bear.gotoAndPlay("shoot")
        }
    } else {
        Main.isPlaying = !0,
        this.reset.penguin(),
        this.reset.bear(),
        this.reset.background(),
        this.reset.score(),
        Main.log("白熊挥棒了！"),
        Main.bear.gotoAndPlay("prepare"),
        Main.log("企鹅跳下来吧~！"),
        Main.penguin.gotoAndPlay("jump");
        var a = Main.floorLine - Main.penguinHeight + 70;
        Main.penguinAnimation = createjs.Tween.get(this.penguin, {
            loop: !1
        }),
        Main.penguinAnimation.to({
            y: a
        },
        Main.fallingTime, createjs.Ease.quadIn).call(function() {
            Main.fire("gameOver", 0),
            Main.log("掉下来了")
        }),
        Main.bearListenerShoot()
    }
}),
Main.bearListenerShoot = function() {
    this.bearRemoveListenerShoot(),
    this.bear.addEventListener("animationend", Main.bearShoot)
},
Main.bearRemoveListenerShoot = function() {
    this.bear.removeEventListener("animationend", Main.bearShoot)
},
Main.bearShoot = function() {
    Main.isQuiver || "shoot" != Main.bear.currentAnimation || Main.bear.gotoAndPlay("prepare")
},
Main.on("knockPenguin",
function(e, n) {
    Main.penguinAnimation.setPaused(!0),
    Main.flyLine(n)
}),
Main.on("moveStage",
function(e, n, i) {
    Main.moveStage(n, i)
}),
Main._moveStage = function(e, n) {
    Main.moveStage = Main.moveStage2,
    Main.moveStage(e, n)
},
Main.moveStage = Main._moveStage,
Main.stopMoveStage = function() {
    Main.moveStage = Main._moveStage
},
Main.moveStage2 = function(e, n) {
    this.background.regX > Main.width ? (this.bear.x += e, this.score.x += e, this.background.regX -= e, Main.moveGuide(e, n)) : (Main.moveStage = Main.moveStage3, Main.moveStage3(e, n))
},
Main.moveStage3 = function(e, n) {
    this.background.regX -= e,
    this.background.regX <= 0 && (this.background.regX += Main.width),
    Main.moveGuide(e, n)
},
Main.guideMoveLength = 0,
Main.guideMoveIndex = 2,
Main.moveGuide = function(e) {
    this.guide.x += e,
    this.guideMoveLength += e,
    this.guideMoveLength >= this.guideDistance + this.guideWidth && (++Main.guideMoveIndex, ++Main.guideMoveIndex, this.reset.guide(Main.guideMoveIndex + "00M"), this.guideMoveLength = 0)
},
Main.getTotalDistance = function(e) {
    Main.log(e);
    var n = 100 * Main.guideMoveIndex,
    i = this.guideDistance + this.guideWidth;
    return n += Math.round(Main.guide.x * i / Main.width) / 10,
    e > 0 ? n: 0
},
Main.calculateAngle = function(e) {
    Main.log("角度" + e);
    var n = Main.minAngle + Main.maxAngle * Math.sin(Math.PI * e / 200);
    return n += Math.round(Math.random() * Main.randomAngle) * (Math.random() < .5 ? -1 : 1),
    Math.ceil(n)
},
Main.gameOverScoreUtil = {
    dropDown: function(e, n) {
        Main.reset.gameOverScore(e),
        Main.gameOverScore.x = n,
        createjs.Tween.get(Main.gameOverScore, {
            loop: !1
        }).to({
            y: Main.floorLine - 60
        },
        800, createjs.Ease.quintIn)
    }
},
Main.on("gameOver",
function(e, n) {
    Main.log("游戏结束:" + Main.getTotalDistance(n));
    var i = Main.getTotalDistance(n),
    a = i > Main.maxScore;
    Main.maxScore = Math.max(Main.maxScore, i);
    try {
        localStorage.penguinMaxScore = Main.maxScore
    } catch(t) {}
    0 >= n && (Main.reset.endPenguin(!0), Main.bear.gotoAndPlay("shootNull")),
    setTimeout(function() {
        Main.endGame(i);
    },800)
}),
btGame.resizePlayArea($("#container"), Main.width, Main.height, "center", "center"),
Main.initStage();