
/**  */
function game_over(score){

	GameSetting.score = myNum.formartScore(score,GameSetting.score_ratio); 
	GameSetting.play_time  = (GameSetting.game_over_time - GameSetting.game_start_time) / 1000;
	
	$("#my_score").text(GameSetting.score + GameSetting.score_unit);
	
	if (GameSetting.compare_type){
		if(GameSetting.score > GameSetting.max_score){
			GameSetting.max_score = GameSetting.score;
		}
	}
	else {
		if(GameSetting.score < GameSetting.max_score){
			GameSetting.max_score = GameSetting.score;
		} 	
	}
	
	$("#max_score").text(GameSetting.max_score + GameSetting.score_unit);	
	$("#save_btn").removeAttr("disabled");
    $("#to_bailei").attr("disabled","disabled");
	
	if (GameSetting.score > 0){
		$("#result_desc").text("这成绩还行，摆个擂台试试。");
		$("#to_bailei").removeAttr("disabled");
	}
	else if(GameSetting.score >= GameSetting.game_score_high){
		$("#result_desc").text("简直闪瞎24K钛合金狗眼，赶快摆擂看谁敢来挑战！");
	}
		
	if (GameSetting.score<=0){
		$("#result_desc").text("你的分数为0，不能摆擂，重玩试试。");
	}
	
	$.mobile.changePage( "#bl_success_page", {transition:"pop", changeHash:true});
}

/* --------game page -------- */
(function($, undefined){

    /* -------- jQuery ready -------- */
    $(document).on("pageshow", "#game", function(){
        MainController.prepare();
    });

    /* -------- MainController -------- */
    var MainController = {
        prepare: function() {
            UIController.prepare();
        }
    }

    /* -------- UIController -------- */
    var UIController = {
        prepare: function() {
            var self = this;
       		self._ajax_user = new AjaxUser( GameSetting.userinfo_url);
            $( self._ajax_user).bind( AJAXLoader.SUCCESS, function (){ self._user_success()});
            $( self._ajax_user).bind( AJAXLoader.ERROR, function (){ self._user_error()});
            self._ajax_user.fetch_data();
        },
		_user_success : function(){
			$("#player_point").text(GameSetting.surplus_point);
			$("#player_head").attr("src",GameSetting.avatar);
			$("#player_name").text(GameSetting.nick);
		},
		_user_error : function(){
			Dialog.openDialog(101,"用户未登录",2);
		}
    }
    
})(window.jQuery);

/** game over page */
(function($, undefined){
    /* -------- jQuery ready -------- */
    $(document).on("pageshow", "#bl_success_page", function(){
        MainController.prepare();
    });

    /* -------- MainController -------- */
    var MainController = {
        prepare: function() {
            UIController.prepare();
        }
    }

    /* -------- UIController -------- */
    var UIController = {
        prepare: function() {
            var self = this;
			
			// 重玩按钮
            self._replay_btn = new FLBtn("#replay_btn");
            $( self._replay_btn ).bind( FLBtn.CLICKED, function(evt, target) { self._replay_btn_clicked()});
			
			self._to_bailei_btn = new FLBtn("#to_bailei");
            $( self._to_bailei_btn ).bind( FLBtn.CLICKED, function(evt, target) { self._to_bailei_btn_clicked()});
			
			self._ajax_game = new AjaxGame( GameSetting.gameinfo_url );
            $( self._ajax_game).bind( AJAXLoader.SUCCESS, function (){ self._game_success()});
            $( self._ajax_game).bind( AJAXLoader.ERROR, function (){ self._game_error()});
            self._ajax_game.fetch_data();
		},
		_game_success : function(){
			
		},
		_game_error : function(){
			
		},
		
        _replay_btn_clicked : function() {
			// 重玩按钮事件
            $.mobile.changePage( "#game", {transition:"pop", changeHash:true});
			document.getElementById("game_frame").contentWindow.myReset();
        },
		
		 _to_bailei_btn_clicked : function() { 
			// 去摆擂按钮事件
			if(!GameSetting.is_login){
				if (!GameSetting.browser.versions.weixin && 
				   (GameSetting.browser.versions.iPhone || 
				    GameSetting.browser.versions.iPad || 
					GameSetting.browser.versions.ios) ){
					// alert("Kuping ios browser");
					GameSetting.login_type = 101;
					userAuth("url");	
				}
				else if (!GameSetting.browser.versions.weixin && 
				         GameSetting.browser.versions.android){
					// alert("Kuping android browser");
					GameSetting.login_type = 101;
					window.wst.userLogin("url");
				}
				else {
					// alert("weixin or other web browser");
					GameSetting.login_type = 101;
					document.getElementById("login_frame").contentWindow.location.href = "http://apptest.game.zhaopian.com/wydlz/user/login?callback=http://apptest.game.zhaopian.com/games/common/login_callBack.html";
					$.mobile.changePage( "#login", {transition:"pop", changeHash:true});	
				}	
			}
			else {
				$.mobile.changePage( "#bl_page", {transition:"pop", changeHash:true});
			}
        }
    }
    
})(window.jQuery);


/** 摆擂成功 */

(function($, undefined){

    /* -------- jQuery ready -------- */
    $(document).on("pageshow", "#bl_page", function(){
        MainController.prepare();
    });

    /* -------- MainController -------- */
    
    var MainController = {

        prepare: function() {
            
            UIController.prepare();
        }
    }

    /* -------- UIController -------- */

    var UIController = {

        prepare: function() {
			
			var self = this;
			
			// 分享按钮
			self._save_btn = new FLBtn("#save_btn");
            $( self._save_btn ).bind( FLBtn.CLICKED, function(evt, target) {  self._save_btn_clicked(); });
			
			// 重玩按钮
            self._retry_btn = new FLBtn("#bailei_success_retry_btn");
            $( self._retry_btn ).bind( FLBtn.CLICKED, function(evt, target) { self._retry_btn_clicked()});
			
			if(!GameSetting.is_login){
				self._ajax_user = new AjaxUser( "http://app.game.zhaopian.com/wydlz/user/getinfo.json" );
				$( self._ajax_user).bind( AJAXLoader.SUCCESS, function (){ self._user_success()});
				$( self._ajax_user).bind( AJAXLoader.ERROR, function (){ self._user_error()});
				self._ajax_user.fetch_data();
				$("#ajax_load").fadeIn();
			}
		},
		_user_success : function(){
			$("#ajax_load").fadeOut();
            $('.bl_gh_img').show();
            $('.bl_gou_img').show();
			$("#player_point").text(GameSetting.surplus_point);
			$("#player_head").attr("src",GameSetting.avatar);
			$("#player_name").text(GameSetting.nick);
            
			
		},
		
		_user_error : function(){
			
			Dialog.openDialog(101,"用户未登录",2);
		},	
		
		_retry_btn_clicked : function() {
			// 重玩按钮事件
            $.mobile.changePage( "#game", {transition:"pop", changeHash:true});
			
			document.getElementById("game_frame").contentWindow.myReset();
        },
		
		_save_btn_clicked : function(){
			
			// 摆擂按钮事件
			
			var self = this;
		
			var temp = parseFloat($(".leidou_number_font").text());
			
			if(temp == 1000) GameSetting.game_show_id = 1;
			if(temp == 2000) GameSetting.game_show_id = 2;
			if(temp == 4000) GameSetting.game_show_id = 3;
			if(temp == 8000) GameSetting.game_show_id = 4;
			
			GameSetting.game_point = temp;
		
			// 提交摆擂信息
            self._ajax_bailei = new AjaxBailei( GameSetting.bailei_url );
			$( self._ajax_bailei).bind( AJAXLoader.SUCCESS, function (){ self._bailei_success()});
            $( self._ajax_bailei).bind( AJAXLoader.ERROR, function (){ self._bailei_error()});
            self._ajax_bailei.fetch_data( GameSetting.game_id, GameSetting.score, GameSetting.play_time, GameSetting.game_show_id );
			
			$("#ajax_load").fadeIn();
		},
		
		_bailei_success : function(){
			
			var self = this;
			$("#ajax_load").fadeOut();
			if ( GameSetting.ajax_status == 200){
				
				$("#save_btn").attr("disabled","disabled");
				$.mobile.changePage( "#success_page", {transition:"pop", changeHash:true});
			}else{
				if(GameSetting.ajax_isTip) Dialog.openDialog(GameSetting.ajax_status,GameSetting.ajax_msg,3);
				else	Dialog.openDialog(GameSetting.ajax_status,"擂台生成失败",3);	
			}
		},
		
		_bailei_error : function(){
			if(GameSetting.ajax_isTip) Dialog.openDialog(GameSetting.ajax_status,GameSetting.ajax_msg,3);
			else	Dialog.openDialog(GameSetting.ajax_status,"擂台生成失败",3);
		}
		
    }
    
})(window.jQuery);


(function($, undefined){

    /* -------- jQuery ready -------- */
    $(document).on("pageshow", "#success_page", function(){
        MainController.prepare();
    });

  
    /* -------- MainController -------- */

    var MainController = {

        prepare: function() {
            
            UIController.prepare();
        }
    }

    /* -------- UIController -------- */

    var UIController = {

        prepare: function() {

            var self = this;
			
			// 分享按钮
            self._share_btn = new FLBtn("#share_btn");
            $( self._share_btn ).bind( FLBtn.CLICKED, function(evt, target) { self._share_btn_clicked()});
			
			// 返回按钮
            self._back_btn = new FLBtn("#back_btn");
            $( self._back_btn ).bind( FLBtn.CLICKED, function(evt, target) { self._back_btn_clicked()});
	
		},	
		
        _share_btn_clicked : function() {
			// 分享按钮事件
			var _title = GameSetting.share_title,
				_contents_url = "http://app.game.zhaopian.com/wydlz_game/gameing.html?appid="+ GameSetting.game_id +"&g_type=3&re_id="+GameSetting.re_id,
				//_contents = GameSetting.share_game+"，我"+ GameSetting.share_unit + GameSetting.score+ GameSetting.score_unit + "，快来挑战我吧",
				_contents = "我花了"+ GameSetting.game_point +"擂豆摆了个擂台，小伙伴们赶快来赢走它，擂豆可以参与抽奖哦。",
				_icon = GameSetting.share_icon,
				_score = GameSetting.score;
			
			var shareData = {_title : _title , _contents_url : _contents_url , _contents : _contents , _icon : _icon , _score : _score };
			
			var shareClass = new ShareClass();
			
			shareClass.share(shareData);
        },	
		
        _back_btn_clicked : function() {
			// 返回按钮事件

			if (GameSetting.browser.versions.iPhone || GameSetting.browser.versions.iPad || GameSetting.browser.versions.ios){
				goGameCenter();	
			}
			else if (GameSetting.browser.versions.android){
				window.wst.returnToRoom();
			}
			
        }
    }
    
})(window.jQuery);

