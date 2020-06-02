
/**  */

function game_over(score,isCallBack){
	
	if(isCallBack == "" || isCallBack == null || isCallBack == undefined)
		isCallBack = false;
		
	if(!isCallBack){
		GameSetting.score = myNum.formartScore(score,GameSetting.score_ratio);
		GameSetting.play_time  = (GameSetting.game_over_time - GameSetting.game_start_time) / 1000; 
		GameSetting.rank_page = 1;
		GameSetting.rank_timer = new Date().getTime();
	}
	var count = 10 - GameSetting.totalchallenge;
	
	$("#re_try").attr("disabled","disabled");
	$("#load_btn").removeAttr("disabled");
	$("#load_btn").css("padding","1em .7em");
	if(count<=0){
		count = 0;
	}else{
		if(GameSetting.leitai_state == 1)
			$("#re_try").removeAttr("disabled");
	}
	
	// 用户信息 修改--控制border显示隐藏
	if(GameSetting.compare_type){
		if(GameSetting.score > GameSetting.leitai_score){
			$("#result_img").attr("src","images/sl.png");
			$("#leizhu_get_point").text("-"+ GameSetting.win_credit);
			$("#player_get_point").text("+"+ GameSetting.win_credit);
            if(count<=0){
                $("#game_result").text("恭喜，赢得"+ GameSetting.win_credit +"擂豆，你已挑战10次，去别的擂台看看吧。"); 
            }else{
			    $("#game_result").text("恭喜你打败擂主，赢得"+ GameSetting.win_credit +"擂豆，你还可以挑战"+ count +"次，快发到朋友圈炫一炫吧!");
            }
			GameSetting.game_result = true;
		}else{
			$("#result_img").attr("src","images/sb.png");
			$("#leizhu_get_point").text("+"+ GameSetting.win_credit);
			$("#player_get_point").text("-"+ GameSetting.win_credit);
            if(count<=0){
                $("#game_result").text("真遗憾，损失了"+ GameSetting.win_credit +"擂豆，你已挑战10次，去别的擂台看看吧。"); 
            }else{
                $("#game_result").text("差一点就成功了，损失了"+ GameSetting.win_credit +"擂豆，你还可以挑战"+ count +"次，召唤小伙伴帮你一起挑战吧。");
			}
            GameSetting.game_result = false;
		}
		
		if(GameSetting.score > GameSetting.max_score )
			GameSetting.max_score = GameSetting.score;
		
	}else{
		if(GameSetting.score < GameSetting.leitai_score){
			$("#result_img").attr("src","images/sl.png");
			$("#leizhu_get_point").text("-"+ GameSetting.win_credit);
			$("#player_get_point").text("+"+ GameSetting.win_credit);
            if(count<=0){
                $("#game_result").text("恭喜，赢得"+ GameSetting.win_credit +"擂豆，你已挑战10次，去别的擂台看看吧。"); 
            }else{
			    $("#game_result").text("恭喜你打败擂主，赢得"+ GameSetting.win_credit +"擂豆，你还可以挑战"+ count +"次，快发到朋友圈炫一炫吧!");
            }
			GameSetting.game_result = true;
		}else{
			$("#result_img").attr("src","images/sb.png");
			$("#leizhu_get_point").text("+"+ GameSetting.win_credit);
			$("#player_get_point").text("-"+ GameSetting.win_credit);
			//$("#game_result").text("很遗憾您没有挑战成功，失去"+ GameSetting.win_credit +"擂豆，剩余挑战次数"+ count +"次.");
            if(count<=0){
                $("#game_result").text("真遗憾，损失了"+ GameSetting.win_credit +"擂豆，你已挑战10次，去别的擂台看看吧。"); 
            }else{
                $("#game_result").text("差一点就成功了，损失了"+ GameSetting.win_credit +"擂豆，你还可以挑战"+ count +"次，召唤小伙伴帮你一起挑战吧。");
			}
            GameSetting.game_result = false;
		}
		
		if(GameSetting.score > GameSetting.max_score )
			GameSetting.max_score = GameSetting.score;
		
	}
	
	$("#max_score").text(GameSetting.max_score);
	$("#my_score").text(GameSetting.score);

	// 擂台信息
	$("#player_head").attr("src",GameSetting.play_avatar);
	$("#player_name").text(GameSetting.play_nick);
	$("#player_score").text(GameSetting.score + GameSetting.score_unit);
	$("#leizhu_head").attr("src",GameSetting.avatar);
	$("#leizhu_name").text(" [擂主] "+GameSetting.nick);
	$("#leizhu_score").text(GameSetting.leitai_score + GameSetting.score_unit);
	
	if(GameSetting.game_result)
		share_desc ="我在"+ GameSetting.nick +"的擂台，一不小心赢了"+ GameSetting.win_credit +"擂豆，你也快来挑战吧。";
	else
		share_desc = "在"+ GameSetting.nick +"的擂台，惜败擂主，损失了"+ GameSetting.win_credit +"擂豆，小伙伴们赶快来帮帮我吧。"
	
	if(!isCallBack){
		
		GameSetting.isSendScore = true;
		if(GameSetting.is_login){
			//alert("toTheOverPage");
			$.mobile.changePage( "#bl_success_page", {transition:"pop", changeHash:true});
		}
		else
			$.mobile.changePage( "#score_page", {transition:"pop", changeHash:true});
	}
	
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
			
			GameSetting.re_id = Request.getParmar("re_id");
			GameSetting.leitai_data_url = API_URL_PREFIX + "wydlz_game/one_leitai/"+ GameSetting.re_id +".json";
			//请求擂台数据
			self._ajax_leitai = new AjaxLeitai( GameSetting.leitai_data_url );
            $( self._ajax_leitai).bind( AJAXLoader.SUCCESS, function (){ self._leitai_success()});
            $( self._ajax_leitai).bind( AJAXLoader.ERROR, function (){ self._leitai_error()});
            self._ajax_leitai.fetch_data();
			
			self._zz_gamestart_btn = new FLBtn(".zz_gamestart_btn");
            $( self._zz_gamestart_btn ).bind( FLBtn.CLICKED, function() { self._zz_gamestart_btn_clicked()});
		
//			self._ajax_logininfo = new AjaxLogin( GameSetting.logininfo_url );
//			$( self._ajax_logininfo).bind( AJAXLoader.SUCCESS, function (){ self._logininfo_success()});
//			$( self._ajax_logininfo).bind( AJAXLoader.ERROR, function (){ self._logininfo_error()});
//			self._ajax_logininfo.fetch_data();
//			GameSetting.login_flag = false;
//			
        },
		_leitai_success : function(){
			
			$(".zz_leizhu_img").attr("src",GameSetting.avatar);
			$("#leizhu_nick").text(GameSetting.nick);

			if(GameSetting.totalchallenge == 0){
				$(".tiaozhan_point").text(GameSetting.win_credit);
			}else
				$("#tiaozhan_desc").text("你还可以挑战"+ (10 - GameSetting.totalchallenge) +"次，挑战成功将赢得"+ GameSetting.win_credit +"擂豆，失败将损失"+ GameSetting.win_credit +"擂豆。");
			
			share_desc = GameSetting.nick + "花了"+ GameSetting.game_point +"豆摆下擂台，小伙伴们赶快来扒光Ta的擂豆吧";
		},
		_leitai_error : function(){

		},
		_zz_gamestart_btn_clicked : function(){
			$(".zz_contentdiv").hide();
			$(".zz_tx_bigdiv").hide();
			
			document.getElementById("game_frame").contentWindow.myStart();
		},
		_logininfo_success : function(){
			
			var msg = "恭喜您登陆成功，第"+GameSetting.login_count + "天，系统赠送您" + GameSetting.login_point + "擂豆";
			
			if(GameSetting.ajax_code == 0){
				Dialog.openDialog(GameSetting.ajax_code,msg,1);
			}
		
		},
		
		_logininfo_error : function(){
		
		}
    }
    
})(window.jQuery);

/* --------game page -------- */
(function($, undefined){

    /* -------- jQuery ready -------- */
    $(document).on("pageshow", "#score_page", function(){
      
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
		
			GameSetting.re_id = Request.getParmar("re_id");
			GameSetting.leitai_data_url = API_URL_PREFIX + "wydlz_game/one_leitai/"+ GameSetting.re_id +".json";
		
			//登录按钮
			self._login_btn = new FLBtn("#login_btn");
            $( self._login_btn ).bind( FLBtn.CLICKED, function() { self._login_btn_clicked()});
			// 重玩按钮
            self._replay_btn = new FLBtn("#replay_btn");
            $( self._replay_btn ).bind( FLBtn.CLICKED, function(evt, target) { self._replay_btn_clicked()});
		
			
			$("#max_score").text(GameSetting.score);
			$("#my_score").text(GameSetting.score);
        },
		_login_btn_clicked : function(){

				if (!GameSetting.browser.versions.weixin && 
				   (GameSetting.browser.versions.iPhone || GameSetting.browser.versions.iPad || GameSetting.browser.versions.ios) ){
					//alert("Kuping ios browser");
					GameSetting.login_type = 102;
					userAuth("url");	
				}else if (!GameSetting.browser.versions.weixin && 
				         GameSetting.browser.versions.android){
					//alert("Kuping android browser");
					GameSetting.login_type = 102;
					window.wst.userLogin("url");
				}else {
					//alert("weixin or other web browser");
					GameSetting.login_type = 102;
					document.getElementById("login_frame").contentWindow.location.href = API_URL_PREFIX + "wydlz/user/login?callback="+API_URL_PREFIX+"games/common/login_callBack.html";
					$.mobile.changePage( "#login", {transition:"pop", changeHash:true});	
				}	
		},	
		
        _replay_btn_clicked : function() {
			// 重玩按钮事件
			MyRank.clearRank();
            $.mobile.changePage( "#game", {transition:"pop", changeHash:true});
			document.getElementById("game_frame").contentWindow.myReset();
        }
    }
    
})(window.jQuery);



/** 挑战结果 */

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
			
			//分享按钮
			self._share_btn = new FLBtn("#my_share");
            $( self._share_btn ).bind( FLBtn.CLICKED, function() { self._share_btn_clicked()});
			
			GameSetting.re_id = Request.getParmar("re_id").split("#")[0];
			//重玩按钮
			self._re_try_btn = new FLBtn("#re_try");
            $( self._re_try_btn ).bind( FLBtn.CLICKED, function() { self._re_try_clicked()});
			
			//加载按钮
			self._load_btn = new FLBtn("#load_btn");
            $( self._load_btn ).bind( FLBtn.CLICKED, function() { self._load_btn_clicked()});
			
			
			
			var time = new Date().getTime();
			 
			time /= 1000;
			GameSetting.seconds = Math.ceil(GameSetting.end_time - time);

			$("#share_bg").unbind("click");
			$("#share_bg").click(function(){ $(this).hide(); })
			
			if(GameSetting.isSendScore){
				
				//alert("sendTheScore");
			
				self._ajax_tiaozhan = new AjaxTiaozhan( GameSetting.tiaozhan_url );
				$( self._ajax_tiaozhan).bind( AJAXLoader.SUCCESS, function (){ self._tiaozhan_success()});
				$( self._ajax_tiaozhan).bind( AJAXLoader.ERROR, function (){ self._tiaozhan_error()});
				self._ajax_tiaozhan.fetch_data(GameSetting.game_id, GameSetting.play_time ,  GameSetting.re_id ,GameSetting.score);
				
				GameSetting.isSendScore = false;
			}
			
			if(GameSetting.login_flag){
				self._ajax_logininfo = new AjaxLogin( GameSetting.logininfo_url );
				$( self._ajax_logininfo).bind( AJAXLoader.SUCCESS, function (){ self._logininfo_success()});
				$( self._ajax_logininfo).bind( AJAXLoader.ERROR, function (){ self._logininfo_error()});
				self._ajax_logininfo.fetch_data();
				GameSetting.login_flag = false;
			}
			
        },
		
		_logininfo_success : function(){
			
			var msg = "你已连续登陆"+GameSetting.login_count + "天，系统奖励了你" + GameSetting.login_point + "擂豆，连续登陆天数越多获得的奖励越丰厚哦！";
			
			if(GameSetting.ajax_code == 0){
				Dialog.openDialog(GameSetting.ajax_code,msg,2,"每日登陆奖励");
			}
		
		},
		
		_logininfo_error : function(){
		
		},
		
		_re_try_clicked : function(){
			MyRank.clearRank();
			$.mobile.changePage( "#game", {transition:"pop", changeHash:true});
			document.getElementById("game_frame").contentWindow.myReset();
		},
		
		_share_btn_clicked : function() {
			
			$("#share_bg").unbind("click");
			$("#share_bg").click(function(){
				$(this).fadeOut();	
			})
			
			var _title = GameSetting.share_title,
				_contents_url = API_URL_PREFIX + "wydlz_game/gameing.html?appid="+ GameSetting.game_id +"&g_type=3&re_id="+GameSetting.re_id,
				_contents ="我在"+ GameSetting.nick +"的擂台，一不小心赢了"+ GameSetting.win_credit +"擂豆，你也快来挑战吧。",
				_icon = GameSetting.share_icon,
				_score = GameSetting.score;
			
			if(GameSetting.game_result)
				_contents ="我在"+ GameSetting.nick +"的擂台，一不小心赢了"+ GameSetting.win_credit +"擂豆，你也快来挑战吧。";
			else
				_contents = "在"+ GameSetting.nick +"的擂台，惜败擂主，损失了"+ GameSetting.win_credit +"擂豆，小伙伴们赶快来帮帮我吧。"
			
			// 分享按钮事件
					
			var shareData = {_title : _title , _contents_url : _contents_url , _contents : _contents , _icon : _icon , _score : _score };
			
			var shareClass = new ShareClass();
			
			
			if (!GameSetting.browser.versions.weixin && 
			   (GameSetting.browser.versions.iPhone || GameSetting.browser.versions.iPad || GameSetting.browser.versions.ios) ){
				shareClass.share(shareData);
			}else if (!GameSetting.browser.versions.weixin && 
					 GameSetting.browser.versions.android){
				shareClass.share(shareData);
			}else {
				$("#share_bg").fadeIn();		
			}	
			
		},
		
		_tiaozhan_success : function(){
			
			//alert("CallBackTheLeitaiData");
			
			 var self = this;
			//发送成绩

			self._ajax_leitai = new AjaxLeitai( GameSetting.leitai_data_url );
            $( self._ajax_leitai).bind( AJAXLoader.SUCCESS, function (){ self._leitai_success()});
            $( self._ajax_leitai).bind( AJAXLoader.ERROR, function (){ self._leitai_error()});
            self._ajax_leitai.fetch_data(GameSetting.rank_page,GameSetting.rank_timer,GameSetting.rank_show_num);
			
			$("#load_btn img").fadeIn();
			$("#load_desc").text("正在加载");	
			
			if(GameSetting.ajax_status!=200){
				if(GameSetting.ajax_isTip){
					if(GameSetting.ajax_status == 709)
						Dialog.openDialog(GameSetting.ajax_status,"擂台已经结束，无法进行挑战",2);	
					else
						Dialog.openDialog(GameSetting.ajax_status,GameSetting.ajax_msg,2);
				
				}else	Dialog.openDialog(GameSetting.ajax_status,"挑战提交失败",2);	
			}
			
		},
		
		_tiaozhan_error : function(){
			
		},
		
		_leitai_success : function(){
			
			//alert("ShowTheRank");
			
			// 擂台信息
			game_over(GameSetting.score,true);
			
			$("#load_btn img").fadeOut();
			$("#load_desc").text("点击加载更多");
			
			MyRank.loadRank();
			
			$("#rank_length").text(GameSetting.rank_total_num);
			
			if(GameSetting.ajax_status!=200){
				if(GameSetting.ajax_isTip){
					if(GameSetting.ajax_status == 709)
						Dialog.openDialog(GameSetting.ajax_status,"擂台已经结束，无法进行挑战",2);	
					else
						Dialog.openDialog(GameSetting.ajax_status,GameSetting.ajax_msg,2);
				
				}else	Dialog.openDialog(GameSetting.ajax_status,"挑战提交失败",2);	
			}
			
		},
		_leitai_error : function(){
			
		},
		_load_btn_clicked : function(){
			$("#load_btn img").fadeIn();
			$("#load_desc").text("正在加载");	
			var self = this;
			if(GameSetting.rank_page < GameSetting.rank_total_page){
				GameSetting.rank_page ++;
				
				self._load_rank = new AjaxLeitai( GameSetting.leitai_data_url );
				$( self._load_rank).bind( AJAXLoader.SUCCESS, function (){ self._load_rank_success()});
				$( self._load_rank).bind( AJAXLoader.ERROR, function (){ self._load_rank_error()});
				self._load_rank.fetch_data(GameSetting.rank_page,GameSetting.rank_timer,GameSetting.rank_show_num);
			}else{
				$("#load_btn img").fadeOut();
				$("#load_desc").text("已经到底啦");	
				$("#load_btn").attr("disabled","disabled");
				$("#load_btn").css("padding","0");
			}
			
		},
		_load_rank_success : function(){
			$("#load_btn img").fadeOut();
			$("#load_desc").text("点击加载更多");
			MyRank.appendRank();
		},
		
		_load_rank_error : function(){
			if(GameSetting.ajax_status!=200){
				if(GameSetting.ajax_isTip)
					Dialog.openDialog(GameSetting.ajax_status,GameSetting.ajax_msg,2);
				else	
					Dialog.openDialog(GameSetting.ajax_status,"请求榜单失败",2);	
			}
		}
		
    }
    
})(window.jQuery);

