
/** 摆擂台 */

(function(window, document, undefined){

    function AjaxBailei( url) {
        AJAXLoader.apply( this, arguments);
		this._url = url || this._url;
        this._method = "POST";
        this._data_type = "json";
    }

    AjaxBailei.prototype = new AJAXLoader();

    /**
      * app_id ： 游戏ID
      * score：游戏分数
      * playtime：游戏时间
      * game_show_id：游戏时间
      */
    AjaxBailei.prototype.fetch_data = function( game_id, score,  playtime, game_show_id) {
        var queries = {
            app_id:game_id, 
            score:score, 
            playtime:playtime, 
            game_show_id:game_show_id
        };
        this.fetch( queries);
    }
    
    AjaxBailei.prototype._process_data = function( data) {
		GameSetting.ajax_status = data.status;
		GameSetting.ajax_msg = data.msg;
		GameSetting.ajax_isTip = data.istip;
		GameSetting.re_id = data.re_id;
    }

    window.AjaxBailei = AjaxBailei;

})(window, window.document);


/** 获取用户信息 */

(function(window, document, undefined){

    function AjaxUser( url) {
        AJAXLoader.apply( this, arguments);
		this._url = url || this._url;
        this._method = "GET";
        this._data_type = "json";
    }

    AjaxUser.prototype = new AJAXLoader();

    AjaxUser.prototype.fetch_data = function() {
        this.fetch();
    }
    
    AjaxUser.prototype._process_data = function( data) {
	
		if(data.response.user == null || data.response.user == "" || data.response.user == undefined){
			GameSetting.is_login = false;
			return false;
		}
		
		GameSetting.uid = data.response.user.uid;
		GameSetting.nick = data.response.user.nick;
		if(data.response.user.avatar == null || data.response.user.avatar == "" || data.response.user.avatar == undefined)
			GameSetting.avatar = "images/default-avatar@2x.png";
		else
			GameSetting.avatar = data.response.user.avatar;
		GameSetting.surplus_point = data.response.user.integral;
		GameSetting.is_login = true;
    }

    window.AjaxUser = AjaxUser;

})(window, window.document);

/** 获取游戏信息 */

(function(window, document, undefined){

    function AjaxGame( url) {
        AJAXLoader.apply( this, arguments);
		this._url = url || this._url;
        this._method = "GET";
        this._data_type = "json";
    }

    AjaxGame.prototype = new AJAXLoader();

    AjaxGame.prototype.fetch_data = function() {
        this.fetch();
    }
    
    AjaxGame.prototype._process_data = function(data) {
		var temp = data.response.game.score_interval.split(",");
		GameSetting.game_score_low = temp[0];
		GameSetting.game_score_high = temp[1];
		
    }

    window.AjaxGame = AjaxGame;

})(window, window.document);

/** 获取登陆信息 */

(function(window, document, undefined){

    function AjaxLogin( url) {
		AJAXLoader.apply( this, arguments);
		this._url = url || this._url;
        this._method = "GET";
        this._data_type = "json";
    }

    AjaxLogin.prototype = new AJAXLoader();

    AjaxLogin.prototype.fetch_data = function() {
        this.fetch();
    }
    
    AjaxLogin.prototype._process_data = function( data) {
		GameSetting.ajax_code = data.response.loginreward.istip;
		GameSetting.login_point = data.response.loginreward.integral;
		GameSetting.login_count = data.response.loginreward.logincount;
		
    }

    window.AjaxLogin = AjaxLogin;

})(window, window.document);


/** 保擂台 */

(function(window, document, undefined){

    function AjaxBaolei( url) {
        AJAXLoader.apply( this, arguments);
		this._url = url || this._url;
        this._method = "POST";
        this._data_type = "json";
    }

    AjaxBaolei.prototype = new AJAXLoader();

   /**
      * app_id ： 游戏ID
      * score：游戏分数
      * re_id： 游戏分享id
      * playtime：游戏时间
      */
	  
    AjaxBaolei.prototype.fetch_data = function( game_id, score,  re_id, playtime) {
        var queries = {
            app_id:game_id, 
            score:score, 
            re_id:re_id, 
            playtime:playtime
        };
        this.fetch( queries);
    }
    
    AjaxBaolei.prototype._process_data = function( data) {
        GameSetting.ajax_status = data.status;
		GameSetting.ajax_msg = data.msg;
		GameSetting.ajax_isTip = data.istip;
		GameSetting.re_id = data.re_id;
    }

    window.AjaxBaolei = AjaxBaolei;

})(window, window.document);


/** 挑战 */

(function(window, document, undefined){

    function AjaxTiaozhan( url) {
        AJAXLoader.apply( this, arguments);
		this._url = url || this._url;
        this._method = "POST";
        this._data_type = "json";
    }

    AjaxTiaozhan.prototype = new AJAXLoader();

    /**
      * app_id ： 游戏ID
      * score：游戏分数
      * playtime：游戏时间
      * game_show_id：游戏时间
      */
    AjaxTiaozhan.prototype.fetch_data = function( game_id, playtime, re_id , score) {
        var queries = {
            app_id:game_id, 
            playtime:playtime, 
            re_id:re_id, 
            score:score
        };
        this.fetch( queries);
    }
	
    AjaxTiaozhan.prototype._process_data = function( data) {
        GameSetting.ajax_status = data.status;
		GameSetting.ajax_msg = data.msg;
		GameSetting.ajax_isTip = data.istip;
    }

    window.AjaxTiaozhan = AjaxTiaozhan;

})(window, window.document);

/** 获取擂台数据 */

(function(window, document, undefined){

    function AjaxLeitai( url) {
        AJAXLoader.apply( this, arguments);
		this._url = url || this._url;
        this._method = "GET";
        this._data_type = "json";
    }

    AjaxLeitai.prototype = new AJAXLoader();

    /**
      * re_id： 游戏分享id
      */
	  
    AjaxLeitai.prototype.fetch_data = function( page , stime , pagesize ) {
        var queries = {
            page:page,
			stime:stime,
			pagesize:pagesize
        };
        this.fetch( queries);
    }
    	
    AjaxLeitai.prototype._process_data = function( data) {
		
		//擂台信息
		GameSetting.leitai_score = data.response.leitai.leizhu_score;
		GameSetting.end_time = data.response.leitai.end_time;
		GameSetting.surplus_point = data.response.leitai.integral;
		GameSetting.win_credit = data.response.leitai.win_credit;
		GameSetting.challenger_max_socre = data.response.leitai.challenger_max_socre;
		GameSetting.show_method = data.response.leitai.show_method;
		GameSetting.game_point = data.response.leitai.integral_base;
		GameSetting.leitai_state = data.response.leitai.state;
		//擂主信息
		GameSetting.nick = data.response.leizhu.nick;
		GameSetting.uid = data.response.leizhu.uid;
		if(data.response.leizhu.avatar == null || data.response.leizhu.avatar == "" || data.response.leizhu.avatar == undefined)
			GameSetting.avatar = "images/default-avatar@2x.png";
		else
			GameSetting.avatar = data.response.leizhu.avatar;
		//玩家信息
		
		if(data.response.player!=null && data.response.player!="" && data.response.player!=undefined){
		
			GameSetting.play_uid = data.response.player.uid;
			GameSetting.play_nick = data.response.player.nick;
			if(data.response.player.avatar == null || data.response.player.avatar == "" || data.response.player.avatar == undefined)
				GameSetting.play_avatar = "images/default-avatar@2x.png";
			else
				GameSetting.play_avatar = data.response.player.avatar;
			GameSetting.win = data.response.player.win;
			GameSetting.lose = data.response.player.lose;
			GameSetting.totalchallenge = data.response.player.totalchallenge;
		}	
		//榜单信息
		GameSetting.rank_data = data.response.player_result;
		GameSetting.rank_my_data = data.response.player;
		GameSetting.rank_page = data.response.player_result_page_info.page;
		GameSetting.rank_num = data.response.player_result_page_info.num;
		GameSetting.rank_total_page = data.response.player_result_page_info.totalpage;
		GameSetting.rank_total_num = data.response.player_result_page_info.totaldata;

		if( GameSetting.show_method != 0 && ( GameSetting.play_uid == "" || GameSetting.play_uid == null || GameSetting.play_uid == undefined ) )
			GameSetting.is_login = false;
		else GameSetting.is_login = true;

    }

    window.AjaxLeitai = AjaxLeitai;

})(window, window.document);


