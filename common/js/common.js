var WeixinApi=(function(){"use strict";function weixinShareTimeline(data,callbacks){callbacks=callbacks||{};var shareTimeline=function(theData){WeixinJSBridge.invoke('shareTimeline',{"appid":theData.appId?theData.appId:'',"img_url":theData.imgUrl,"link":theData.link,"desc":theData.title,"title":theData.desc,"img_width":"120","img_height":"120"},function(resp){switch(resp.err_msg){case'share_timeline:cancel':callbacks.cancel&&callbacks.cancel(resp);break;case'share_timeline:fail':callbacks.fail&&callbacks.fail(resp);break;case'share_timeline:confirm':case'share_timeline:ok':callbacks.confirm&&callbacks.confirm(resp);break}callbacks.all&&callbacks.all(resp)})};WeixinJSBridge.on('menu:share:timeline',function(argv){if(callbacks.async&&callbacks.ready){window["_wx_loadedCb_"]=callbacks.dataLoaded||new Function();if(window["_wx_loadedCb_"].toString().indexOf("_wx_loadedCb_")>0){window["_wx_loadedCb_"]=new Function()}callbacks.dataLoaded=function(newData){window["_wx_loadedCb_"](newData);shareTimeline(newData)};callbacks.ready&&callbacks.ready(argv)}else{callbacks.ready&&callbacks.ready(argv);shareTimeline(data)}})}function weixinSendAppMessage(data,callbacks){callbacks=callbacks||{};var sendAppMessage=function(theData){WeixinJSBridge.invoke('sendAppMessage',{"appid":theData.appId?theData.appId:'',"img_url":theData.imgUrl,"link":theData.link,"desc":theData.desc,"title":theData.title,"img_width":"120","img_height":"120"},function(resp){switch(resp.err_msg){case'send_app_msg:cancel':callbacks.cancel&&callbacks.cancel(resp);break;case'send_app_msg:fail':callbacks.fail&&callbacks.fail(resp);break;case'send_app_msg:confirm':case'send_app_msg:ok':callbacks.confirm&&callbacks.confirm(resp);break}callbacks.all&&callbacks.all(resp)})};WeixinJSBridge.on('menu:share:appmessage',function(argv){if(callbacks.async&&callbacks.ready){window["_wx_loadedCb_"]=callbacks.dataLoaded||new Function();if(window["_wx_loadedCb_"].toString().indexOf("_wx_loadedCb_")>0){window["_wx_loadedCb_"]=new Function()}callbacks.dataLoaded=function(newData){window["_wx_loadedCb_"](newData);sendAppMessage(newData)};callbacks.ready&&callbacks.ready(argv)}else{callbacks.ready&&callbacks.ready(argv);sendAppMessage(data)}})}function weixinShareWeibo(data,callbacks){callbacks=callbacks||{};var shareWeibo=function(theData){WeixinJSBridge.invoke('shareWeibo',{"content":theData.desc,"url":theData.link},function(resp){switch(resp.err_msg){case'share_weibo:cancel':callbacks.cancel&&callbacks.cancel(resp);break;case'share_weibo:fail':callbacks.fail&&callbacks.fail(resp);break;case'share_weibo:confirm':case'share_weibo:ok':callbacks.confirm&&callbacks.confirm(resp);break}callbacks.all&&callbacks.all(resp)})};WeixinJSBridge.on('menu:share:weibo',function(argv){if(callbacks.async&&callbacks.ready){window["_wx_loadedCb_"]=callbacks.dataLoaded||new Function();if(window["_wx_loadedCb_"].toString().indexOf("_wx_loadedCb_")>0){window["_wx_loadedCb_"]=new Function()}callbacks.dataLoaded=function(newData){window["_wx_loadedCb_"](newData);shareWeibo(newData)};callbacks.ready&&callbacks.ready(argv)}else{callbacks.ready&&callbacks.ready(argv);shareWeibo(data)}})}function imagePreview(curSrc,srcList){if(!curSrc||!srcList||srcList.length==0){return}WeixinJSBridge.invoke('imagePreview',{'current':curSrc,'urls':srcList})}function showOptionMenu(){WeixinJSBridge.call('showOptionMenu')}function hideOptionMenu(){WeixinJSBridge.call('hideOptionMenu')}function showToolbar(){WeixinJSBridge.call('showToolbar')}function hideToolbar(){WeixinJSBridge.call('hideToolbar')}function getNetworkType(callback){if(callback&&typeof callback=='function'){WeixinJSBridge.invoke('getNetworkType',{},function(e){callback(e.err_msg)})}}function closeWindow(){WeixinJSBridge.call("closeWindow")}function wxJsBridgeReady(readyCallback){if(readyCallback&&typeof readyCallback=='function'){var Api=this;var wxReadyFunc=function(){readyCallback(Api)};if(typeof window.WeixinJSBridge=="undefined"){if(document.addEventListener){document.addEventListener('WeixinJSBridgeReady',wxReadyFunc,false)}else if(document.attachEvent){document.attachEvent('WeixinJSBridgeReady',wxReadyFunc);document.attachEvent('onWeixinJSBridgeReady',wxReadyFunc)}}else{wxReadyFunc()}}}return{version:"1.8",ready:wxJsBridgeReady,shareToTimeline:weixinShareTimeline,shareToWeibo:weixinShareWeibo,shareToFriend:weixinSendAppMessage,showOptionMenu:showOptionMenu,hideOptionMenu:hideOptionMenu,showToolbar:showToolbar,hideToolbar:hideToolbar,getNetworkType:getNetworkType,imagePreview:imagePreview,closeWindow:closeWindow}})();(function(){var require,define;(function(){var modules={},requireStack=[],inProgressModules={},SEPERATOR=".";function build(module){var factory=module.factory,localRequire=function(id){var resultantId=id;if(id.charAt(0)==="."){resultantId=module.id.slice(0,module.id.lastIndexOf(SEPERATOR))+SEPERATOR+id.slice(2)}return require(resultantId)};module.exports={};delete module.factory;factory(localRequire,module.exports,module);return module.exports}require=function(id){if(!modules[id]){throw"module "+id+" not found"}else if(id in inProgressModules){var cycle=requireStack.slice(inProgressModules[id]).join('->')+'->'+id;throw"Cycle in require graph: "+cycle}if(modules[id].factory){try{inProgressModules[id]=requireStack.length;requireStack.push(id);return build(modules[id])}finally{delete inProgressModules[id];requireStack.pop()}}return modules[id].exports};define=function(id,factory){if(modules[id]){throw"module "+id+" already defined"}modules[id]={id:id,factory:factory}};define.remove=function(id){delete modules[id]};define.moduleMap=modules})();define("ov_gap",function(require,exports,module){var ovGap={callbackId:Math.floor(Math.random()*2000000000),callbacks:{},commandQueue:[],groupId:Math.floor(Math.random()*300),groups:{},listeners:{},invoke:function(cmd,params,onSuccess,onFail){if(!cmd)cmd="defaultCommand";if(!params)params={};this.callbackId++;this.callbacks[this.callbackId]={success:onSuccess,fail:onFail};var rurl="ovgap://"+cmd+"/"+JSON.stringify(params)+"/"+this.callbackId;document.location=rurl},dispatchCommand:function(cmd,params,onSuccess,onFail){if(!cmd)cmd="defaultCommand";if(!params)params={};this.callbackId++;this.callbacks[this.callbackId]={success:onSuccess,fail:onFail};var command=cmd+"/"+JSON.stringify(params)+"/"+this.callbackId;this.commandQueue.push(command)},fetchNativeCommands:function(){var json=JSON.stringify(this.commandQueue);this.commandQueue=[];return json},activate:function(){document.location="ovgap://ready"},createGroup:function(){this.groupId++;this.groups[this.groupId]=[];return this.groupId},dispatchCommandInGroup:function(cmd,params,onSuccess,onFail,groupId){if(!this.groups[groupId])return false;if(!cmd)cmd="defaultCommand";if(!params)params={};this.callbackId++;this.callbacks[this.callbackId]={success:onSuccess,fail:onFail};var command=cmd+"/"+JSON.stringify(params)+"/"+this.callbackId;this.groups[groupId].push(command);return true},activateGroup:function(groupId){if(!this.groups[groupId])return false;document.location="ovgap://group/"+groupId},fetchNativeGroupCommands:function(groupId){if(!this.groups[groupId])return[];var json=JSON.stringify(this.groups[groupId]);this.groups[groupId]=[];return json},callbackSuccess:function(callbackId,params){try{ovGap.callbackFromNative(callbackId,params,true)}catch(e){console.log("Error in error callback: "+callbackId+" = "+e)}},callbackError:function(callbackId,params){try{ovGap.callbackFromNative(callbackId,params,false)}catch(e){console.log("Error in error callback: "+callbackId+" = "+e)}},callbackFromNative:function(callbackId,params,isSuccess){var callback=this.callbacks[callbackId];if(callback){if(isSuccess){callback.success&&callback.success(callbackId,params)}else{callback.fail&&callback.fail(callbackId,params)}delete ovGap.callbacks[callbackId]}},addGapListener:function(listenId,onSuccess,onFail){if(!listenId||!onSuccess||!onFail)return;this.listeners[listenId]={success:onSuccess,fail:onFail}},removeListener:function(listenId){if(!this.listeners[listenId])return;this.listeners[listenId]=null},triggerListenerSuccess:function(listenId,params){if(!this.listeners[listenId])return;var listener=this.listeners[listenId];listener.success&&listener.success(listenId,params)},triggerListenerFail:function(listenId,params){if(!this.listeners[listenId])return;var listener=this.listeners[listenId];listener.fail&&listener.fail(listenId,params)}};module.exports=ovGap});window.ov_gap=require("ov_gap")})();

var Settings={CLICK_EVENT:'click',};var Utils={remove_px:function(a){return Utils.is_typeof("String",a)?Number(a.replace("px","")):a},is_array:function(a){return Utils.is_typeof("Array",a)},is_number:function(a){return isNaN(a)?!1:Utils.is_typeof("Number",a)},is_undefined:function(a){return"undefined"==typeof a},is_typeof:function(a,b){var c=Object.prototype.toString.call(b).slice(8,-1);return void 0!==b&&null!==b&&c===a},as_array:function(a){return Utils.is_array(a)?a:"undefined"==typeof a?[]:[a]}};function FLBtn(btn_container_sel){var self=this;this._btn_container_sel=btn_container_sel;if(!Utils.is_undefined(btn_container_sel)){self.btn_obj=$(this._btn_container_sel);self.btn_obj.unbind(Settings.CLICK_EVENT);self.btn_obj.bind(Settings.CLICK_EVENT,function(evt){self._btn_clicked(evt)})}};FLBtn.CLICKED='fl_btn_clicked';FLBtn.prototype._btn_container_sel=undefined;FLBtn.prototype._btn_clicked=function(evt){$(this).trigger(FLBtn.CLICKED,[evt.target])};function AJAXLoader(a,b){this._url=a||this._url;this._method=b||this._method};AJAXLoader.FETCH="fetch";AJAXLoader.COMPLETE="complete";AJAXLoader.SUCCESS="php_loader_success";AJAXLoader.ERROR="php_loader_error";AJAXLoader.prototype.fetch=function(a){var self=this;this._state==AJAXLoader.FETCH&&this.cancel();this._state=AJAXLoader.FETCH;$.ajax({type:self._method,url:self._url,dataType:self._data_type,data:a,success:function(data){self._success_handler(data)},error:function(XMLHttpRequest,textStatus,errorThrown){self._error_handler()}})};AJAXLoader.prototype._url=void 0;AJAXLoader.prototype._method="GET";AJAXLoader.prototype._data_type="json";AJAXLoader.prototype._success_handler=function(a){this._state=AJAXLoader.COMPLETE;this._process_data(a);$(this).trigger(AJAXLoader.SUCCESS,[a])};AJAXLoader.prototype._process_data=function(a){};AJAXLoader.prototype._error_handler=function(){this._state=AJAXLoader.COMPLETE;$(this).trigger(AJAXLoader.ERROR)};


// 禁止回弹效果
window.onload = function(){ 
	document.ontouchmove = function(e){ e.preventDefault(); }
	window.ontouchmove = function(e){ e.preventDefault(); }
}

/* -------- ShareClass -------- */

var ShareClass = function (){};

GameSetting.browser={
    versions:function(){
        var u = navigator.userAgent, app = navigator.appVersion;
        return {         //移动终端浏览器版本信息
            trident: u.indexOf('Trident') > -1, //IE内核
            presto: u.indexOf('Presto') > -1, //opera内核
            webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
            gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
            mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
            ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
            android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或uc浏览器
            iPhone: u.indexOf('iPhone') > -1 , //是否为iPhone或者QQHD浏览器
            iPad: u.indexOf('iPad') > -1, //是否iPad
            webApp: u.indexOf('Safari') == -1, //是否web应该程序，没有头部与底部
			weixin: (u.match(/MicroMessenger/i) == 'MicroMessenger' || u.match(/MicroMessenger/i) == 'micromessenger')	//微信浏览器
        };
    }(),
    language:(navigator.browserLanguage || navigator.language).toLowerCase()
};

if (!GameSetting.browser.versions.weixin && 
	(GameSetting.browser.versions.iPhone || GameSetting.browser.versions.iPad || GameSetting.browser.versions.ios) ){
	GameSetting.share_source = "wslz-Ios";
}
else if (!GameSetting.browser.versions.weixin && 
		GameSetting.browser.versions.android){
	GameSetting.share_source = "wslz-Android";
}
else {
	$(".guanggao").show();
	$(".zz_contentdiv").show();
	$(".zz_tx_bigdiv").show();
	GameSetting.share_source = "wslz";
}		

ShareClass.prototype.share = function(shareData){
	if (GameSetting.browser.versions.weixin) {
		$("#share_bg").show();
	}if (GameSetting.browser.versions.iPhone || GameSetting.browser.versions.iPad || GameSetting.browser.versions.ios){
		var success_n = function (callbackId, params_arr) {
			myShare();
		};
        var fail_n = function (callbackId, params_arr) {};
        var shareParams = {title:shareData._title, url:shareData._contents_url, content:shareData._contents, icon:shareData._icon};
        window.ov_gap.invoke("testShare", shareParams, success_n,fail_n);
        
    }if (GameSetting.browser.versions.android) {
		myShare();
		var shareParams = "{'title': '"+shareData._title+"','url':'"+shareData._contents_url+"','content':'"+shareData._contents+"','icon':'"+shareData._icon+"','scorce':'"+shareData._score+"'}";
        window.wst.shareFunction(shareParams);
    }
};

ShareClass.prototype.shareComment = function(shareData){
	jQuery.ajax({
		type: "POST",                                        
		url: shareData.url,  
		dataType: "json",                
		data: shareData,       
		success: function (data) { }
	});
};

// -------- /ShareClass --------

/* -------- Dialog -------- */

var Dialog = {
    openDialog : function(a, b, c, d) {
		$(".status").text(a);
		$(".msg").text(b);
		if(d!=null && d!="" && d!=undefined)
			$(".msg_title").text(d);
		
		switch(c){
			case 1: $("#msg_dialog1").popup("open"); break;
			case 2: $("#msg_dialog2").popup("open"); break;
			case 3: $("#msg_dialog3").popup("open"); break;
			case 4: $("#msg_dialog4").popup("open"); break;
			case 5: $("#msg_dialog5").popup("open"); break;
			case 6: $("#msg_dialog6").popup("open"); break;
			case 7: $("#msg_dialog7").popup("open"); break;
			case 8: $("#msg_dialog8").popup("open"); break;
			case 9: $("#msg_dialog9").popup("open"); break;
		}
	}
};

// -------- /Dialog --------

/* -------- MyRank -------- */
var MyRank = {
	
    loadRank : function() {
		//加载榜单
		MyRank.clearRank();
		MyRank.appendRank();
		MyRank.prependRank();
	},
	clearRank : function($target){
		var $target = $(".tzp_table");
		$target.html("");
	},
	appendRank : function(){
		var $target = $(".tzp_table");
		
		if(GameSetting.rank_data == null || GameSetting.rank_data == "" || GameSetting.rank_data == undefined)
			return false;

		for(var i=0; i<GameSetting.rank_data.length; i++){
			var $temp_item,icon,head,play_nick,rank_num;
			rank_num = parseInt(GameSetting.rank_data[i].challenge_pm);
			if(rank_num<4) icon = "quan_child";
			else icon = "number_child_div"
			if(GameSetting.rank_data[i].avatar == "" || GameSetting.rank_data[i].avatar == null || GameSetting.rank_data[i].avatar == undefined) head = "images/default-avatar@2x.png";
			else head = GameSetting.rank_data[i].avatar;
			
			if(myString.getByteLen(GameSetting.rank_data[i].nick)>8)
				play_nick = myString.cutStrForNum(GameSetting.rank_data[i].nick,8);
			else
				play_nick = GameSetting.rank_data[i].nick;
		
			if(GameSetting.play_uid == GameSetting.rank_data[i].uid){
				
			}else{
				$temp_item = '<tr><td class="tb_child-1"><div  class="'+ icon +'">'+rank_num+'</div></td><td class="tb_child-2"><img src="'+head+'" style="border-radius:50%;float:left" width="60"><div class="tz_user_div_message"><div  style="font-size:1.2em;margin-top:.5em">'+ play_nick +'</div><div style="font-size:.8em">'+ GameSetting.rank_data[i].win +'胜'+ GameSetting.rank_data[i].lose +'败</div></div></td><td class="tb_child-3">'+ GameSetting.rank_data[i].allingetral +'</td></tr>';
				$target.append($temp_item);
			}	
		}
		MyRank.prependRank();
	},
	prependRank : function(){
		var $target = $(".tzp_table");
		
		$("#my_rank").remove();
		
		var $temp_item,icon,head,play_nick,rank_num;
		
		rank_num = parseInt(GameSetting.rank_my_data.challenge_pm);
		if(rank_num<4) icon = "quan_child";
		else icon = "number_child_div"
		if(GameSetting.rank_my_data.avatar == "" || GameSetting.rank_my_data.avatar == null || GameSetting.rank_my_data.avatar == undefined) head = "images/default-avatar@2x.png";
		else head = GameSetting.rank_my_data.avatar;
		
		if(myString.getByteLen(GameSetting.rank_my_data.nick)>8)
			play_nick = myString.cutStrForNum(GameSetting.rank_my_data.nick,8);
		else
			play_nick = GameSetting.rank_my_data.nick;
	
		if(GameSetting.play_uid == GameSetting.rank_my_data.uid){
			$temp_item = '<tr style="border-bottom: .4em solid #F2F1F0 !important" class="tzb_tr" id="my_rank"><td class="tb_child-1"><div  class="'+icon+'">'+rank_num+'</div></td><td class="tb_child-2"><img src="'+ head +'" style="border-radius:50%;float:left" width="60"><div class="tz_user_div_message"><div style="font-size:1.2em;margin-top:.5em">'+ play_nick +'</div><div style="font-size:.8em;color:#000"> '+  GameSetting.rank_my_data.win +'胜'+  GameSetting.rank_my_data.lose +'败</div></div></td><td class="tb_child-3">'+  GameSetting.rank_my_data.allingetral +'</td></tr>';
			$target.prepend($temp_item);
		}
	
	}
	
};


// -------- /MyRank --------
/* -------- request -------- */

var Request = {
	getParmar : function(paras){ 
		var url = location.href; 
		var paraString = url.substring(url.indexOf("?")+1,url.length).split("&"); 
		var paraObj = {}; 
		for (i=0; j=paraString[i]; i++){ 
			paraObj[j.substring(0,j.indexOf("=")).toLowerCase()] = j.substring(j.indexOf("=")+1,j.length); 
		} 
		var returnValue = paraObj[paras.toLowerCase()]; 
		if(typeof(returnValue)=="undefined"){ 
			return ""; 
		}else{ 
			returnValue = returnValue.split("#")[0];
			return returnValue; 
		} 
	}
};
// -------- /request --------

/* -------- myString -------- */

var myString = {
	getByteLen : function (val) {
		var len = 0;
		for (var i = 0; i < val.length; i++) {
			if (val[i].match(/[^\x00-\xff]/ig) != null) //全角
				len += 2;
			else
				len += 1;
		};
		return len;
	},
	cutStrForNum : function (str, num) {
		var len = 0;
		var index = 0;
		for (var i = 0; i < str.length; i++) {
			if (str[i].match(/[^\x00-\xff]/ig) != null) //全角
				len += 2;
			else
				len += 1;
			index++;
			if (len >= num) {
				break;
			}
		}
		if (len >= num) 
			newStr = str.substring(0, index) + "...";
		else
			newStr = str;
    	return newStr;
	}
};

// -------- /myString --------

/* -------- myNum -------- */

var myNum = {
	mathRandom : function(){
		var num=""; 
		for(var i=0;i<6;i++) 
		{ 
			num+=Math.floor(Math.random()*10); 
		}
		return num; 	
	},
	twoDecimal : function(oNum){
		var num = parseFloat(oNum);
		if (isNaN(length)) return false;
		
		var num = Math.round(oNum*100)/100;
		return num;
	},
	formartScore : function(score,ratio){
		
		score = parseFloat(score);
		ratio = parseFloat(ratio);
		
		var score_str = score.toString();
		var ratio_str = ratio.toString();
		
		var score_length = 0;

		score_str.indexOf(".") == -1 ? score_length += 0 : score_length += score_str.substring(score_str.indexOf("."),score_str.length).length ;
		
		ratio_str.indexOf(".") == -1 ? score_length += 0 : score_length += ratio_str.substring(ratio_str.indexOf("."),ratio_str.length).length ;
		
		var temp_length = 1;
		
		for(var i=0 ; i<score_length ; i++) temp_length *= 10;
			
		return Math.round(score*ratio*temp_length)/temp_length;
		
	}
};

// -------- /myNum --------

/* -------- myCookie -------- */
var myCookie = {
	delCookie : function(name){
		document.cookie = name+"=;expires="+(new Date(0)).toGMTString();
	},
	getCookie : function(objName){
		var arrStr = document.cookie.split("; ");
		for(var i = 0;i < arrStr.length;i ++){
			var temp = arrStr[i].split("=");
			if(temp[0] == objName) return unescape(temp[1]);
		}
	},
	setCookie : function(name,value,day){
		if(day==null || day=="" || day==undefined)
			day = 30; 
		var exp = new Date();
		exp.setTime(exp.getTime() + day*24*60*60*1000);
		document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();
	}
	
};


// -------- /myCookie --------

/* -------- myTool -------- */

var myTool = {
	importJS : function(src, callback){
		var script = document.createElement("SCRIPT"), done = false;
		script.type = "text/javascript";
		script.src = src;
		script.charset = "GB2312";
		script.onload = script.onreadystatechange = function(){
			if ( !done && (!this.readyState || this.readyState == "loaded" || this.readyState == "complete") ) {
				done = true;
				callback();
			}
		};
		document.getElementsByTagName("HEAD")[0].appendChild(script);
	},
	initGame : function(src){
		document.getElementById("game_frame").contentWindow.location.href = "../"+ src +"/game.html";
		myTool.initParames(src);
	},
	initParames : function(name){
		GameSetting.bailei_url = API_URL_PREFIX + "wydlz_game/gameing/"+ name +".json";		// 摆擂、保擂post路径
		GameSetting.tiaozhan_url = API_URL_PREFIX + "wydlz_game/gameing_challenge/"+ name +".json";		//挑战提交成绩路径
		GameSetting.share_icon = API_URL_PREFIX + "games/"+ name +"/icon.png";		//游戏分享图标
	}
};

// -------- /myTool --------


function PostTongji(game_name , zftag_top , zftag_parent , zftag_my , level , share_source , share_url , cip) {
	if(zftag_top == zftag_my) zftag_parent=0;
	jQuery.ajax({
		type: "POST",                                         //ajax的方式为post(get方式对传送数据长度有限制)
		url: API_URL_PREFIX + "light_game/tongji/addZfTongji",  
		dataType: "json",                                   //数据传回的格式为json
		data: { game_name: game_name ,zftag_top: zftag_top ,zftag_parent: zftag_parent  ,zftag_my: zftag_my  ,level: level ,share_source: share_source ,share_url: share_url , cip:cip },       //要传送的数据键值对adduserName为键（方便2中的文件用此名称接受数据）txtuserName为值（要传递的变量，例如用户名）
		success: function (data) {                       //成功回传值后触发的方法
			//alert(data.msg);
		}
	});
}

function myShare(){
	var ip = remote_ip_info.province;
	var alltag = Request.getParmar('alltag'); //初始转发标识
	var parenttag = Request.getParmar('parenttag'); //父级来源标识
	var nowtag = "";  //当前分享标识
	var level = Request.getParmar('level')*1;  //第几次分享
	if(level==0 || level =='') level=1;
	var time=Math.round(new Date().getTime()/1000);
	nowtag  = time +""+ myNum.mathRandom();
	if(parenttag =='') parenttag = nowtag;
	if(alltag =='') alltag = nowtag;
	var urllevel=level*1+1; //下一个链接中的分享层次
	var _contents_url = API_URL_PREFIX + "wydlz_game/gameing.html?appid="+ GameSetting.game_id +"&g_type=3&re_id="+GameSetting.re_id
	
	PostTongji(GameSetting.share_game ,alltag ,  parenttag , nowtag , level , GameSetting.share_source , _contents_url , ip);	
}

function share_andorid_callbackId(){
	//myShare();
}

function userAuth(url) {
  var success = function (callbackId, params) { 
	GameSetting.token = params.token;
  	if(GameSetting.login_type == 101)
		login_callback_bailei();
	else if(GameSetting.login_type == 102){
		login_callback_tiaozhan();
	}else
		alert("error");
  }
  var fail = function (callbackId, params) {}
  window.ov_gap.invoke("userAuth", {url : url} , success, fail);
}

function goGameCenter() {
  var success = function (callbackId, params) { };
  var fail = function (callbackId, params) {}
  window.ov_gap.invoke("goGameCenter", null , success, fail);
}


function login_andorid_callbackUid(token){
	
	GameSetting.token = token;
	
	if(GameSetting.login_type == 101)
		login_callback_bailei();
	else if(GameSetting.login_type == 102){
		login_callback_tiaozhan();
	} else
		alert("error");
	
}

function callXJ(){
	
}


function login_callback_bailei(){
	GameSetting.login_flag = true;
	$.post(GameSetting.token_url,{token : GameSetting.token},function(){
		$.mobile.changePage( "#bl_page", {transition:"pop", changeHash:true});
	});
}

function login_callback_tiaozhan(){
	GameSetting.login_flag = true;
	$.post(GameSetting.token_url,{token : GameSetting.token},function(){
		$.mobile.changePage( "#bl_success_page", {transition:"pop", changeHash:true});
	});
}

function login_callback_other(){
	document.location.href = API_URL_PREFIX;
}
