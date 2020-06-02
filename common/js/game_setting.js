/** 游戏常用设置*/

const API_URL_PREFIX = "http://apptest.game.zhaopian.com/";			//游戏数据提交站点
var GameSetting = {
	
	/***********************************游戏描述参数****************************************/
	
    game_id : -1,																// 游戏appId
	game_acrony : null,															// 游戏缩写
	compare_type : true,														// true 成绩大者胜利， false 成绩小者胜利
	score_unit : null,															// 游戏单位
	share_game : null,															// 游戏分享名称
	share_unit : null,															// 游戏分享单位
	share_url : "",																// 分享链接
	share_content : "",															// 分享内容
	share_title : "天天打擂，天天有惊喜",											// 游戏分享标题&描述
	
	/***********************************游戏成绩参数****************************************/
	
	score_ratio : 1,															// 游戏成绩比例  成绩会乘以这个数
	max_score : 0,																// 游戏擂台成绩
	score : -1,																	// 游戏成绩
	re_id : 0,																	// 游戏分享id
	game_show_id : 0,															// 游戏场次id
	play_time : 0,																// 游戏时间
	game_score_low : -1,														// 游戏低成绩区间
	game_score_high : -1,														// 游戏高成绩区间
	game_result : false,														// 游戏结果 true 胜/成功 false 败/失败
	
	/***********************************用户信息参数****************************************/
	
	uid : 0,																	// 擂主id
	nick : ""	,																// 擂主昵称
	avatar : "",																// 擂主头像
	play_uid : 0,																// 挑战者id
	play_nick : "",																// 挑战者昵称
	play_avatar : "",															// 挑战者头像
	win : 0,																	// 挑战者胜场
	lose : 0,																	// 挑战者败场
	totalchallenge : 0,															// 挑战次数
	login_point : 0,															// 登陆赠送豆数
	login_count : 0,															// 连续登陆次数
	
	/***********************************擂台信息参数****************************************/
	
	leitai_point : 0,															// 擂台底分
	leitai_score : 0,															// 擂台成绩
	surplus_point : 0,															// 擂台剩余擂豆
	end_time : 0,																// 擂台结束时间（秒数）
	win_credit : 0,																// 游戏单局分数
	challenger_max_socre : 0,													// 擂台最高成绩
	show_method : -1,															// 0为擂主查看时，1 为挑战者查看时 ， 2其他用户查看时。
	game_point : 1000,															// 游戏擂台场次分数
	rank_page : 1,																// 榜单页码
	rank_num : 0,																// 榜单每页显示条数
	rank_total_num : 0,															// 榜单总条数
	rank_total_page : 0,														// 榜单总页数
	rank_timer : null,															// 榜单时间戳 
	rank_show_num : 5,															// 榜单显示条数
	rank_data : null,															// 榜单数据
	rank_my_data : null,														// 自己榜单数据
	leitai_state : -1,															// 擂台状态
		
	/***********************************游戏内置参数****************************************/
	
	ajax_status : -1,															// 请求返回状态码
	ajax_msg : "",																// 请求返回消息
	ajax_isTip : null,															// 请求返回类型
	ajax_code : -1,																// 请求返回码
	seconds : 0,																// 倒计时秒数
	browser	: null,																// 浏览器版本
	share_source : "wslz",														// 分享源
	game_start_time : 0,														// 游戏开始时间
	game_over_time : 0,															// 游戏结束时间
	is_login : false,															// 是否登录
	token : null,																// 登录token
	login_flag : false,															// 登录标记
	send_score_flag : false,													// 提交成绩标记
	login_type : -1,															// 登录类型标记 101 摆擂  102挑战
	isSendScore : false,														// 成绩提交标记 
	
	/***********************************游戏路径参数****************************************/
	
	bailei_url : API_URL_PREFIX + "wydlz_game/gameing/{app_name}.json",					// 摆擂、保擂post路径
	tiaozhan_url : API_URL_PREFIX + "wydlz_game/gameing_challenge/{app_name}.json",		// 挑战提交成绩路径
	share_icon : API_URL_PREFIX + "games/{app_name}/icon.png",							// 游戏分享图标
	gameinfo_url : API_URL_PREFIX + "wydlz_game/games/{app_id}.json",					// 游戏信息路径
	leitai_data_url : API_URL_PREFIX + "wydlz_game/one_leitai/{app_id}.json",			// 擂台详细信息路径
	userinfo_url : API_URL_PREFIX + "wydlz/user/getinfo.json",							// 用户信息路径
	token_url : API_URL_PREFIX + "wydlz/user/dologin",									// 提交token路径
	logininfo_url : API_URL_PREFIX + "wydlz/task/loginReward"							// 每日登陆路径
}
