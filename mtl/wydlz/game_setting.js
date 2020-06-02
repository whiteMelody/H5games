/** 游戏常用设置*/
var GameSetting = {
	
	/***********************************需要修改的部分****************************************/
	
    game_id : null,			// 游戏appId
	game_acrony : null,	//游戏缩写
	compare_type : null,	// true 成绩大者胜利， false 成绩小者胜利
	score_unit : null,		// 游戏单位
	share_game : null,		//游戏分享名称
	share_unit : null,			//游戏分享单位
	bailei_url: "http://app.game.zhaopian.com/wydlz_game/gameing/mtl.json",		// 摆擂、保擂post路径
	tiaozhan_url : "http://app.game.zhaopian.com/wydlz_game/gameing_challenge/mtl.json",		//挑战提交成绩路径
	share_icon : "http://app.game.zhaopian.com/games/mtl/icon.png",		//游戏分享图标
	
	/***********************************游戏内置参数****************************************/
	share_title : "全民擂台，我是擂主，不服来挑战",	//游戏分享标题&描述
	share_url : "",								//分享链接
	share_content : "",							//分享内容
	leitai_data_url : "http://app.game.zhaopian.com/wydlz_game/one_leitai/{result_id}.json",	//擂台详细信息路径
	max_score : 0,		// 游戏擂台成绩
	score : -1,			// 游戏成绩
	re_id : 0,			// 游戏分享id
	game_show_id : 0,	// 游戏场次id
	play_time : 0,		// 游戏时间
	leitai_point : 0,	// 擂台底分
	leitai_score : 0,	// 擂台成绩
	surplus_point : 0,	//擂台剩余擂豆
	end_time : 0,		//擂台结束时间（秒数）
	uid : 0,			//擂主id
	nick : ""	,	//擂主昵称
	avatar : "",		//擂主头像
	play_uid : 0,		//挑战者id
	play_nick : "",		//挑战者昵称
	play_avatar : "",	//挑战者头像
	win : 0,			//挑战者胜场
	lose : 0,			//挑战者败场
	totalchallenge : 0,	//挑战次数
	win_credit : 0,		//游戏单局分数
	rank_data : null,		//榜单数据
	ajax_status : -1,	//请求返回状态码
	ajax_msg : "",			//请求返回消息
	ajax_isTip : null,		//请求返回类型
	seconds : 0,			//倒计时秒数
	count_down_timer : null,	//倒计时timer 
	browser	: null,		//浏览器版本
	share_source : "wslz",	//分享源
	challenger_max_socre : 0,		//擂台最高成绩
	game_start_time : 0,	//游戏开始时间
	game_over_time : 0,		//游戏结束时间
	is_login : false,		//是否登录
	token : null,			//登录token
	show_method : -1		// 0为擂主查看时，1 为挑战者查看时 ， 2其他用户查看时。
}
