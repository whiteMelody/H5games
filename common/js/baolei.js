
/**  */

function game_over(score){
	
	$(".baolei_btn").removeAttr("disabled");
	
	GameSetting.score = myNum.formartScore(score,GameSetting.score_ratio); 
	GameSetting.play_time  = (GameSetting.game_over_time - GameSetting.game_start_time) / 1000;
	
	$(".new_score").text(GameSetting.score + GameSetting.score_unit);	
	$(".leitai_score").text(GameSetting.leitai_score + GameSetting.score_unit);	
	
	if(GameSetting.compare_type){
		if(GameSetting.score > GameSetting.leitai_score){
			
			if(GameSetting.score > GameSetting.challenger_max_socre) $.mobile.changePage( "#page_break", {transition:"pop", changeHash:true});	
			else $.mobile.changePage( "#page_success", {transition:"pop", changeHash:true});
			GameSetting.game_result = true;
		}else{
			$.mobile.changePage( "#page_fail", {transition:"pop", changeHash:true});
			GameSetting.game_result = false;
		}
	}else{
		if(GameSetting.score < GameSetting.leitai_score){
			if(GameSetting.score > GameSetting.challenger_max_socre) $.mobile.changePage( "#page_break", {transition:"pop", changeHash:true});	
			else $.mobile.changePage( "#page_success", {transition:"pop", changeHash:true});
			GameSetting.game_result = true;
		}else{
			$.mobile.changePage( "#page_fail", {transition:"pop", changeHash:true});
			GameSetting.game_result = false;
		}
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
			
			//需要手动修改
			GameSetting.re_id = Request.getParmar("re_id");
			GameSetting.leitai_data_url = API_URL_PREFIX + "wydlz_game/one_leitai/"+ GameSetting.re_id +".json";
			
			//请求擂台数据
			self._ajax_leitai = new AjaxLeitai( GameSetting.leitai_data_url );
            $( self._ajax_leitai).bind( AJAXLoader.SUCCESS, function (){ self._leitai_success()});
            $( self._ajax_leitai).bind( AJAXLoader.ERROR, function (){ self._leitai_error()});
            self._ajax_leitai.fetch_data();
			
        },
		_leitai_success : function(){
			
		},
		_leitai_error : function(){
			
		}
		
    }
    
})(window.jQuery);



/** baolei success page */

(function($, undefined){

    /* -------- jQuery ready -------- */
    $(document).on("pageshow", "#page_success", function(){
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

			//重玩按钮
            self._re_try_btn = new FLBtn(".re_try");		
			$( self._re_try_btn ).bind( FLBtn.CLICKED, function(evt, target) {   self._re_try_btn_clicked( target ); });
			
			//保擂按钮
			self._baolei_btn = new FLBtn(".baolei_btn");		
			$( self._baolei_btn ).bind( FLBtn.CLICKED, function(evt, target) {   self._baolei_btn_clicked( target ); });
			
        },
		
        _re_try_btn_clicked : function( target ){
             $.mobile.changePage( "#game", {transition:"pop", changeHash:true});
			 
			 document.getElementById("game_frame").contentWindow.myReset();
        },
		
		_baolei_btn_clicked :function( target ){
			
			$(".baolei_btn").attr("disabled","disabled");
			
			var self = this;
			//提交保擂成绩
            self._ajax_baolei = new AjaxBaolei( GameSetting.bailei_url );
            $( self._ajax_baolei).bind( AJAXLoader.SUCCESS, function (){ self._baolei_success()});
            $( self._ajax_baolei).bind( AJAXLoader.ERROR, function (){ self._baolei_error()});
            self._ajax_baolei.fetch_data( GameSetting.game_id, GameSetting.score, GameSetting.re_id, GameSetting.play_time  );
			
        },
		
		_baolei_success : function  () {
			if(GameSetting.ajax_isTip){
				Dialog.openDialog(GameSetting.ajax_status,GameSetting.ajax_msg,2);
				if (GameSetting.browser.versions.iPhone || GameSetting.browser.versions.iPad || GameSetting.browser.versions.ios){
					goGameCenter();	
				}
				else if (GameSetting.browser.versions.android){
					window.wst.returnToRoom();
				}	
			}
			else	Dialog.openDialog(GameSetting.ajax_status,"保擂提交失败",2);
        },

        _baolei_error : function  () {
            Dialog.openDialog(GameSetting.ajax_status,"保擂提交失败",2);
        }
		

    }
    
})(window.jQuery);


/** baolei fail page */

(function($, undefined){

    /* -------- jQuery ready -------- */
    $(document).on("pageshow", "#page_fail", function(){
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

            self._re_try_btn = new FLBtn(".re_try");
           			
			$( self._re_try_btn ).bind( FLBtn.CLICKED, function(evt, target) { 
                self._re_try_btn_clicked( target );
            });
		
        },
        _re_try_btn_clicked : function( target ){
             $.mobile.changePage( "#game", {transition:"pop", changeHash:true});
			 
			document.getElementById("game_frame").contentWindow.myReset();
        }

    }
    
})(window.jQuery);

/** baolei success page */

(function($, undefined){

    /* -------- jQuery ready -------- */
    $(document).on("pageshow", "#page_break", function(){
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

			//重玩按钮
            self._re_try_btn = new FLBtn(".re_try");		
			$( self._re_try_btn ).bind( FLBtn.CLICKED, function(evt, target) {   self._re_try_btn_clicked( target ); });
			
			//保擂按钮
			self._baolei_btn = new FLBtn(".baolei_btn");		
			$( self._baolei_btn ).bind( FLBtn.CLICKED, function(evt, target) {   self._baolei_btn_clicked( target ); });
			
        },
		
        _re_try_btn_clicked : function( target ){
             $.mobile.changePage( "#game", {transition:"pop", changeHash:true});
			 
			 document.getElementById("game_frame").contentWindow.myReset();
        },
		
		_baolei_btn_clicked :function( target ){
			
			$(".baolei_btn").attr("disabled","disabled");
			
			var self = this;
			//提交保擂成绩
            self._ajax_baolei = new AjaxBaolei( GameSetting.bailei_url );
            $( self._ajax_baolei).bind( AJAXLoader.SUCCESS, function (){ self._baolei_success()});
            $( self._ajax_baolei).bind( AJAXLoader.ERROR, function (){ self._baolei_error()});
            self._ajax_baolei.fetch_data( GameSetting.game_id, GameSetting.score, GameSetting.re_id, GameSetting.play_time  );
			
        },
		
		_baolei_success : function  () {

			if(GameSetting.ajax_isTip){
				if (GameSetting.browser.versions.iPhone || GameSetting.browser.versions.iPad || GameSetting.browser.versions.ios){
					goGameCenter();	
				}
				else if (GameSetting.browser.versions.android){
					window.wst.returnToRoom();
				}else{
					if(GameSetting.ajax_status == 709)
						Dialog.openDialog(GameSetting.ajax_status,"擂台已经结束，无法进行保擂",4);	
					else
						Dialog.openDialog(GameSetting.ajax_status,GameSetting.ajax_msg,4);
				}
			}
			else	Dialog.openDialog(GameSetting.ajax_status,"保擂提交失败",4);
        },

        _baolei_error : function  () {
           Dialog.openDialog(GameSetting.ajax_status,"保擂提交失败",4);
        }
		

    }
    
})(window.jQuery);


