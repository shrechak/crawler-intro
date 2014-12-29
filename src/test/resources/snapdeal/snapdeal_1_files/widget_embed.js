(function(N,l,ab){var P={html:false,photo:false,iframe:false,inline:false,transition:"elastic",speed:300,fadeOut:300,width:false,initialWidth:"600",innerWidth:false,maxWidth:false,height:false,initialHeight:"450",innerHeight:false,maxHeight:false,scalePhotos:true,scrolling:true,opacity:0.9,preloading:true,className:false,overlayClose:true,escKey:true,arrowKey:true,top:false,bottom:false,left:false,right:false,fixed:false,data:undefined,closeButton:true,fastIframe:true,open:false,reposition:true,loop:true,slideshow:false,slideshowAuto:true,slideshowSpeed:2500,slideshowStart:"start slideshow",slideshowStop:"stop slideshow",photoRegex:/\.(gif|png|jp(e|g|eg)|bmp|ico|webp|jxr|svg)((#|\?).*)?$/i,retinaImage:false,retinaUrl:false,retinaSuffix:"@2x.$1",current:"image {current} of {total}",previous:"previous",next:"next",close:"close",xhrError:"This content failed to load.",imgError:"This image failed to load.",returnFocus:true,trapFocus:true,onOpen:false,onLoad:false,onComplete:false,onCleanup:false,onClosed:false,rel:function(){return this.rel},href:function(){return N(this).attr("href")},title:function(){return this.title}},x="reglobebox",X="rgbox",s=X+"Element",aa=X+"_open",e=X+"_load",Y=X+"_complete",w=X+"_cleanup",ah=X+"_closed",i=X+"_purge",V,al,am,d,L,q,b,U,c,af,S,k,h,p,v,ac,u,W,z,C,J=N("<a/>"),aj,an,n,g,a,M,o,E,ad,R,A,Q,ai="div",H=0,ae={},ag;function K(ao,ar,aq){var ap=l.createElement(ao);if(ar){ap.id=X+ar}if(aq){ap.style.cssText=aq}return N(ap)}function t(){return ab.innerHeight?ab.innerHeight:N(ab).height()}function B(ap,ao){if(ao!==Object(ao)){ao={}}this.cache={};this.el=ap;this.value=function(aq){var ar;if(this.cache[aq]===undefined){ar=N(this.el).attr("data-rgbox-"+aq);if(ar!==undefined){this.cache[aq]=ar}else{if(ao[aq]!==undefined){this.cache[aq]=ao[aq]}else{if(P[aq]!==undefined){this.cache[aq]=P[aq]}}}}return this.cache[aq]};this.get=function(aq){var ar=this.value(aq);return N.isFunction(ar)?ar.call(this.el,this):ar}}function G(ap){var ao=c.length,aq=(M+ap)%ao;return(aq<0)?ao+aq:aq}function T(ao,ap){return Math.round((/%/.test(ao)?((ap==="x"?af.width():t())/100):1)*parseInt(ao,10))}function D(ap,ao){return ap.get("photo")||ap.get("photoRegex").test(ao)}function F(ap,ao){return ap.get("retinaUrl")&&ab.devicePixelRatio>1?ao.replace(ap.get("photoRegex"),ap.get("retinaSuffix")):ao}function ak(ao){if("contains" in al[0]&&!al[0].contains(ao.target)&&ao.target!==V[0]){ao.stopPropagation();al.focus()}}function m(ao){if(m.str!==ao){al.add(V).removeClass(m.str).addClass(ao);m.str=ao}}function O(){M=0;if(rel&&rel!=="nofollow"){c=N("."+s).filter(function(){var ao=N.data(this,x);var ap=new B(this,ao);return(ap.get("rel")===rel)});M=c.index(aj.el);if(M===-1){c=c.add(aj.el);M=c.length-1}}else{c=N(aj.el)}}function I(ao){N(l).trigger(ao);J.triggerHandler(ao)}var y=(function(){var ap,at=X+"Slideshow_",ax="click."+X,av;function aq(){clearTimeout(av)}function aw(){if(aj.get("loop")||c[M+1]){aq();av=setTimeout(Q.next,aj.get("slideshowSpeed"))}}function ao(){ac.html(aj.get("slideshowStop")).unbind(ax).one(ax,au);J.bind(Y,aw).bind(e,aq);al.removeClass(at+"off").addClass(at+"on")}function au(){aq();J.unbind(Y,aw).unbind(e,aq);ac.html(aj.get("slideshowStart")).unbind(ax).one(ax,function(){Q.next();ao()});al.removeClass(at+"on").addClass(at+"off")}function ar(){ap=false;ac.hide();aq();J.unbind(Y,aw).unbind(e,aq);al.removeClass(at+"off "+at+"on")}return function(){if(ap){if(!aj.get("slideshow")){J.unbind(w,ar);ar()}}else{if(aj.get("slideshow")&&c[1]){ap=true;J.one(w,ar);if(aj.get("slideshowAuto")){ao()}else{au()}ac.show()}}}}());function f(ap){var ao;if(!R){ao=N(ap).data("reglobebox");aj=new B(ap,ao);rel=aj.get("rel");O();if(!E){E=ad=true;m(aj.get("className"));al.css({visibility:"hidden",display:"block",opacity:""});S=K(ai,"LoadedContent","width:0; height:0; overflow:hidden; visibility:hidden");d.css({width:"",height:""}).append(S);an=L.height()+U.height()+d.outerHeight(true)-d.height();n=q.width()+b.width()+d.outerWidth(true)-d.width();g=S.outerHeight(true);a=S.outerWidth(true);var au=T(aj.get("initialWidth"),"x");var aq=T(aj.get("initialHeight"),"y");var at=aj.get("maxWidth");var ar=aj.get("maxHeight");aj.w=(at!==false?Math.min(au,T(at,"x")):au)-a-n;aj.h=(ar!==false?Math.min(aq,T(ar,"y")):aq)-g-an;S.css({width:"",height:aj.h});Q.position();I(aa);aj.get("onOpen");C.add(p).hide();al.focus();if(aj.get("trapFocus")){if(l.addEventListener){l.addEventListener("focus",ak,true);J.one(ah,function(){l.removeEventListener("focus",ak,true)})}}if(aj.get("returnFocus")){J.one(ah,function(){N(aj.el).focus()})}}V.css({opacity:parseFloat(aj.get("opacity"))||"",cursor:aj.get("overlayClose")?"pointer":"",visibility:"visible"}).show();if(aj.get("closeButton")){z.html(aj.get("close")).appendTo(d)}else{z.appendTo("<div/>")}Z()}}function r(){if(!al&&l.body){ag=false;af=N(ab);al=K(ai).attr({id:x,"class":N.support.opacity===false?X+"IE":"",role:"dialog",tabindex:"-1"}).hide();V=K(ai,"Overlay").hide();h=N([K(ai,"LoadingOverlay")[0],K(ai,"LoadingGraphic")[0]]);am=K(ai,"Wrapper");d=K(ai,"Content").append(p=K(ai,"Title"),v=K(ai,"Current"),W=N('<button type="button"/>').attr({id:X+"Previous"}),u=N('<button type="button"/>').attr({id:X+"Next"}),ac=K("button","Slideshow"),h);z=N('<button type="button"/>').attr({id:X+"Close"});am.append(K(ai).append(K(ai,"TopLeft"),L=K(ai,"TopCenter"),K(ai,"TopRight")),K(ai,false,"clear:left").append(q=K(ai,"MiddleLeft"),d,b=K(ai,"MiddleRight")),K(ai,false,"clear:left").append(K(ai,"BottomLeft"),U=K(ai,"BottomCenter"),K(ai,"BottomRight"))).find("div div").css({"float":"left"});k=K(ai,false,"position:absolute; width:9999px; visibility:hidden; display:none; max-width:none;");C=u.add(W).add(v).add(ac);N(l.body).append(V,al.append(am,k))}}function j(){function ao(ap){if(!(ap.which>1||ap.shiftKey||ap.altKey||ap.metaKey||ap.ctrlKey)){ap.preventDefault();f(this)}}if(al){if(!ag){ag=true;u.click(function(){Q.next()});W.click(function(){Q.prev()});z.click(function(){Q.close()});V.click(function(){if(aj.get("overlayClose")){Q.close()}});N(l).bind("keydown."+X,function(aq){var ap=aq.keyCode;if(E&&aj.get("escKey")&&ap===27){aq.preventDefault();Q.close()}if(E&&aj.get("arrowKey")&&c[1]&&!aq.altKey){if(ap===37){aq.preventDefault();W.click()}else{if(ap===39){aq.preventDefault();u.click()}}}});if(N.isFunction(N.fn.on)){N(l).on("click."+X,"."+s,ao)}else{N("."+s).live("click."+X,ao)}}return true}return false}if(N.reglobebox){return}N(r);Q=N.fn[x]=N[x]=function(ao,ar){var ap;var aq=this;ao=ao||{};if(N.isFunction(aq)){aq=N("<a/>");ao.open=true}else{if(!aq[0]){return aq}}if(!aq[0]){return aq}r();if(j()){if(ar){ao.onComplete=ar}aq.each(function(){var at=N.data(this,x)||{};N.data(this,x,N.extend(at,ao))}).addClass(s);ap=new B(aq[0],ao);if(ap.get("open")){f(aq[0])}}return aq};Q.position=function(aq,at){var aw,ay=0,ap=0,au=al.offset(),ao,ar;af.unbind("resize."+X);al.css({top:-90000,left:-90000});ao=af.scrollTop();ar=af.scrollLeft();if(aj.get("fixed")){au.top-=ao;au.left-=ar;al.css({position:"fixed"})}else{ay=ao;ap=ar;al.css({position:"absolute"})}if(aj.get("right")!==false){ap+=Math.max(af.width()-aj.w-a-n-T(aj.get("right"),"x"),0)}else{if(aj.get("left")!==false){ap+=T(aj.get("left"),"x")}else{ap+=Math.round(Math.max(af.width()-aj.w-a-n,0)/2)}}if(aj.get("bottom")!==false){ay+=Math.max(t()-aj.h-g-an-T(aj.get("bottom"),"y"),0)}else{if(aj.get("top")!==false){ay+=T(aj.get("top"),"y")}else{ay+=Math.round(Math.max(t()-aj.h-g-an,0)/2)}}al.css({top:au.top,left:au.left,visibility:"visible"});am[0].style.width=am[0].style.height="9999px";function ax(){L[0].style.width=U[0].style.width=d[0].style.width=(parseInt(al[0].style.width,10)-n)+"px";d[0].style.height=q[0].style.height=b[0].style.height=(parseInt(al[0].style.height,10)-an)+"px"}aw={width:aj.w+a+n,height:aj.h+g+an,top:ay,left:ap};if(aq){var av=0;N.each(aw,function(az){if(aw[az]!==ae[az]){av=aq;return}});aq=av}ae=aw;if(!aq){al.css(aw)}al.dequeue().animate(aw,{duration:aq||0,complete:function(){ax();ad=false;am[0].style.width=(aj.w+a+n)+"px";am[0].style.height=(aj.h+g+an)+"px";if(aj.get("reposition")){setTimeout(function(){af.bind("resize."+X,Q.position)},1)}if(at){at()}},step:ax})};Q.resize=function(ap){var ao;if(E){ap=ap||{};if(ap.width){aj.w=T(ap.width,"x")-a-n}if(ap.innerWidth){aj.w=T(ap.innerWidth,"x")}S.css({width:aj.w});if(ap.height){aj.h=T(ap.height,"y")-g-an}if(ap.innerHeight){aj.h=T(ap.innerHeight,"y")}if(!ap.innerHeight&&!ap.height){ao=S.scrollTop();S.css({height:"auto"});aj.h=S.height()}S.css({height:aj.h});if(ao){S.scrollTop(ao)}Q.position(aj.get("transition")==="none"?0:aj.get("speed"))}};Q.prep=function(ap){if(!E){return}var at,aq=aj.get("transition")==="none"?0:aj.get("speed");S.remove();S=K(ai,"LoadedContent").append(ap);function ao(){aj.w=aj.w||S.width();aj.w=aj.mw&&aj.mw<aj.w?aj.mw:aj.w;return aj.w}function ar(){aj.h=aj.h||S.height();aj.h=aj.mh&&aj.mh<aj.h?aj.mh:aj.h;return aj.h}S.hide().appendTo(k.show()).css({width:ao(),overflow:aj.get("scrolling")?"auto":"hidden"}).css({height:ar()}).prependTo(d);k.hide();N(o).css({"float":"none"});m(aj.get("className"));at=function(){var aw=c.length,av,au;if(!E){return}function ax(){if(N.support.opacity===false){al[0].style.removeAttribute("filter")}}au=function(){clearTimeout(A);h.hide();I(Y);aj.get("onComplete")};p.html(aj.get("title")).show();S.show();if(aw>1){if(typeof aj.get("current")==="string"){v.html(aj.get("current").replace("{current}",M+1).replace("{total}",aw)).show()}u[(aj.get("loop")||M<aw-1)?"show":"hide"]().html(aj.get("next"));W[(aj.get("loop")||M)?"show":"hide"]().html(aj.get("previous"));y();if(aj.get("preloading")){N.each([G(-1),G(1)],function(){var ay,az=c[this],aA=new B(az,N.data(az,x)),aB=aA.get("href");if(aB&&D(aA,aB)){aB=F(aA,aB);ay=l.createElement("img");ay.src=aB}})}}else{C.hide()}if(aj.get("iframe")){av=l.createElement("iframe");if("frameBorder" in av){av.frameBorder=0}if("allowTransparency" in av){av.allowTransparency="true"}if(!aj.get("scrolling")){av.scrolling="no"}N(av).attr({src:aj.get("href"),name:(new Date()).getTime(),"class":X+"Iframe",allowFullScreen:true}).one("load",au).appendTo(S);J.one(i,function(){av.src="//about:blank"});if(aj.get("fastIframe")){N(av).trigger("load")}}else{au()}if(aj.get("transition")==="fade"){al.fadeTo(aq,1,ax)}else{ax()}};if(aj.get("transition")==="fade"){al.fadeTo(aq,0,function(){Q.position(0,at)})}else{Q.position(aq,at)}};function Z(){var aq,ar,ap=Q.prep,ao,at=++H;ad=true;o=false;I(i);I(e);aj.get("onLoad");aj.h=aj.get("height")?T(aj.get("height"),"y")-g-an:aj.get("innerHeight")&&T(aj.get("innerHeight"),"y");aj.w=aj.get("width")?T(aj.get("width"),"x")-a-n:aj.get("innerWidth")&&T(aj.get("innerWidth"),"x");aj.mw=aj.w;aj.mh=aj.h;if(aj.get("maxWidth")){aj.mw=T(aj.get("maxWidth"),"x")-a-n;aj.mw=aj.w&&aj.w<aj.mw?aj.w:aj.mw}if(aj.get("maxHeight")){aj.mh=T(aj.get("maxHeight"),"y")-g-an;aj.mh=aj.h&&aj.h<aj.mh?aj.h:aj.mh}aq=aj.get("href");A=setTimeout(function(){h.show()},100);if(aj.get("inline")){ao=K(ai).hide().insertBefore(N(aq)[0]);J.one(i,function(){ao.replaceWith(S.children())});ap(N(aq))}else{if(aj.get("iframe")){ap(" ")}else{if(aj.get("html")){ap(aj.get("html"))}else{if(D(aj,aq)){aq=F(aj,aq);o=l.createElement("img");N(o).addClass(X+"Photo").bind("error",function(){ap(K(ai,"Error").html(aj.get("imgError")))}).one("load",function(){var au;if(at!==H){return}N.each(["alt","longdesc","aria-describedby"],function(aw,ax){var av=N(aj.el).attr(ax)||N(aj.el).attr("data-"+ax);if(av){o.setAttribute(ax,av)}});if(aj.get("retinaImage")&&ab.devicePixelRatio>1){o.height=o.height/ab.devicePixelRatio;o.width=o.width/ab.devicePixelRatio}if(aj.get("scalePhotos")){ar=function(){o.height-=o.height*au;o.width-=o.width*au};if(aj.mw&&o.width>aj.mw){au=(o.width-aj.mw)/o.width;ar()}if(aj.mh&&o.height>aj.mh){au=(o.height-aj.mh)/o.height;ar()}}if(aj.h){o.style.marginTop=Math.max(aj.mh-o.height,0)/2+"px"}if(c[1]&&(aj.get("loop")||c[M+1])){o.style.cursor="pointer";o.onclick=function(){Q.next()}}o.style.width=o.width+"px";o.style.height=o.height+"px";setTimeout(function(){ap(o)},1)});setTimeout(function(){o.src=aq},1)}else{if(aq){k.load(aq,aj.get("data"),function(av,au){if(at===H){ap(au==="error"?K(ai,"Error").html(aj.get("xhrError")):N(this).contents())}})}}}}}}Q.next=function(){if(!ad&&c[1]&&(aj.get("loop")||c[M+1])){M=G(1);f(c[M])}};Q.prev=function(){if(!ad&&c[1]&&(aj.get("loop")||M)){M=G(-1);f(c[M])}};Q.close=function(){if(E&&!R){R=true;E=false;I(w);aj.get("onCleanup");af.unbind("."+X);V.fadeTo(aj.get("fadeOut")||0,0);al.stop().fadeTo(aj.get("fadeOut")||0,0,function(){al.hide();V.hide();I(i);S.remove();setTimeout(function(){R=false;I(ah);aj.get("onClosed")},1)})}};Q.remove=function(){if(!al){return}al.stop();N.reglobebox.close();al.stop().remove();V.remove();R=false;al=null;N("."+s).removeData(x).removeClass(s);N(l).unbind("click."+X)};Q.element=function(){return N(aj.el)};Q.settings=P}(jQuery,document,window));
(function($){var g,d,j=1,a,b=this,f=!1,h="postMessage",e="addEventListener",c,i=b[h]&&!$.browser.opera;$[h]=function(k,l,m){if(!l){return}k=typeof k==="string"?k:$.param(k);m=m||parent;if(i){m[h](k,l.replace(/([^:]+:\/\/[^\/]+).*/,"$1"))}else{if(l){m.location=l.replace(/#.*$/,"")+"#"+(+new Date)+(j++)+"&"+k}}};$.receiveMessage=c=function(l,m,k){if(i){if(l){a&&c();a=function(n){if((typeof m==="string"&&n.origin!==m)||($.isFunction(m)&&m(n.origin)===f)){return f}l(n)}}if(b[e]){b[l?e:"removeEventListener"]("message",a,f)}else{b[l?"attachEvent":"detachEvent"]("onmessage",a)}}else{g&&clearInterval(g);g=null;if(l){k=typeof m==="number"?m:typeof k==="number"?k:100;g=setInterval(function(){var o=document.location.hash,n=/^#?\d+&/;if(o!==d&&n.test(o)){d=o;l({data:o.replace(n,"")})}},k)}}}})(jQuery);
$.reglobew = {
		_account:null,
		_cartUrl:null,
		_domain:{"DEV":"hpshopping.local.reglobe.in","PROD":"hpshopping.reglobe.in","TEST":"hpshopping.test.reglobe.in"},
		_landing:{"ALL":"/","MOBILE":"/all/mobiles.html","LAPTOP":"/all/laptops.html"},
		_sellLaptopText:"I want to Sell My Laptop",
		_notInterestedText:"Not Interested in Selling",
		_checkoutText:"Proceed to Checkout",
		_continueShoppingText:"Continue Shopping",
		_brandingText:"",
		_ifw:770,
		_ifh:444,
		_customPromotionText:"Some Thankyou Message Text",
		_customProductPromotionText:null,
		_widgetMode:'ALL',//MOBILE,LAPTOP,ALL
		_env:'TEST',
		_eventName:'_reglobe_sell',
		_eventConfigName:'_reglobe_config',
		_eventHidePopup:'_reglobe_hide_popup',
		_eventAddAnotherItem:'_reglobe_add_item',
		_currentHistory:0,
		_avoidReset:false,
		init:function(){
			if(typeof document._reglobe  === 'undefined' || !$.isPlainObject(document._reglobe)){
				$.reglobew.debug('wrong configuration');
				return;
			}
			var _allowed = ['_account','_cartUrl','_sellLaptopText','_notInterestedText','_checkoutText','_continueShoppingText','_customPromotionText','_widgetMode','_brandingText',"_ifw","_ifh","_env","_avoidReset"];
			$.each(document._reglobe,function(key,val){
				if(!key || $.trim(key).length == 0 || !val || $.trim(val).length == 0){
					$.reglobew.debug("Invalid Setup");
					return;
				}
				
				if(($.inArray(key,_allowed) < 0)){
					//BAD SETUP
					$.reglobew.debug("Invalid Setup",key);
					return;
				}
				$.reglobew[key] = $.reglobew.cleanHtml(val);
			});
			$(document).on($.reglobew._eventConfigName, $.reglobew.loadConfig);
			$(document).on($.reglobew._eventHidePopup, $.reglobew.hidePopup);
			$(document).on($.reglobew._eventAddAnotherItem, $.reglobew.addAnotherItem);
			$.receiveMessage($.reglobew.onMessage,$.reglobew._getDomain());
			$.event.trigger({type:"_reglobe_widget_loaded"});
		},
		cleanHtml:function(input) {
			if(!input || input == null || !(typeof input == 'string' || input instanceof String)){
				return input;
			}
			var allowed = "<p><ul><li><span><a><div><ol><table><td><tr><th><thead><tbody><br>";
		    allowed = (((allowed || "") + "").toLowerCase().match(/<[a-z][a-z0-9]*>/g) || []).join(''); // making sure the allowed arg is a string containing only tags in lowercase (<a><b><c>)
		    var tags = /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi,
		        commentsAndPhpTags = /<!--[\s\S]*?-->|<\?(?:php)?[\s\S]*?\?>/gi;
		    return input.replace(commentsAndPhpTags, '').replace(tags, function ($0, $1) {
		        return allowed.indexOf('<' + $1.toLowerCase() + '>') > -1 ? $0 : '';
		    });
		},
		_getEnv:function(){
			return $.reglobew._env && $.inArray($.reglobew._env.toUpperCase(),["DEV","TEST","PROD"]) > -1 ? $.reglobew._env.toUpperCase():"TEST";
		},
		_getMode:function(p_mode){
			var mode = p_mode?p_mode: $.reglobew._widgetMode;
			return  mode&& $.inArray(mode.toUpperCase(),["ALL","LAPTOP","MOBILE"]) > -1?mode.toUpperCase():"ALL";
		},
		_getLanding:function(p_mode){
			var mode = $.reglobew._getMode(p_mode);
			var env = $.reglobew._getEnv();
			var domain =  $.reglobew._getDomain();
			if(env == "DEV"){
				domain += "/reglober1";
			}
			domain += $.reglobew._landing[mode];
			domain += "?_reglb_mode="+mode;
			return domain;
			
		},
		_getDomain:function(){
			/*var env = $.reglobew._getEnv();
			var domain =  ('https:' == document.location.protocol ? 'https://' : 'http://') +$.reglobew._domain[env];
			*/
			var domain = $.reglobew._account;
			if(domain == "RGB-b0e0-49454c9649b3"){
				domain = "hpshopping.test.reglobe.in"; //ONLY TILL THE TIME HP FIXES IT
			}
			domain =  ('https:' == document.location.protocol ? 'https://' : 'http://') +domain;
			return domain;			
		},
		hidePopup:function(){
			$.reglobebox.close();
		},
		addAnotherItem:function(){
			history.go(-2);
		},
		showPopup:function(p_mode,p_promotion_text){
			$isMobile = $(window).width() <= 1;
			$.reglobew._customProductPromotionText = $.reglobew.cleanHtml(p_promotion_text);
			$.reglobew._widgetMode = $.reglobew._getMode(p_mode);
			$_config = {
				href:$.reglobew._getLanding(),
				iframe:'true',
				previous:"Back",
				className:$isMobile?"rgmob":false,
				title:'<small>Powered by <span style="color:#8FC541;font-weight:bold;">Re</span><span style="color:#0071BB;font-weight:bold;">Globe</span>&nbsp;'+$.reglobew._brandingText+"</small>",
				onComplete:function(){
					$("#reglobebox [id*='rgboxPrevious']").attr("id","rgboxPrevious").show();
				},
				onOpen:function(){
					$.reglobew._currentHistory = history.length;
					if($isMobile){
						$('html, body').css('overflow', 'hidden'); // page scrollbars off
					}
				},
				onClosed:function(){
					if($isMobile){
						$('html, body').css('overflow', ''); // page scrollbars on
					}
					if(!$.reglobew._avoidReset){
						$.reglobew.reset();
					}
				}
			};
			if($isMobile){
				$_config["width"] = "100%";
				$_config["height"] = "100%";
			}else{
				$_config["innerWidth"] = $.reglobew._ifw+20;
				$_config["innerHeight"] = $.reglobew._ifh;
			}
			$.reglobebox($_config);
			$("#rgboxPrevious").show().click(function(event) {
			    event.preventDefault();
			    history.back(1);
			});
		},
		reset:function(){
			var diff = $.reglobew._currentHistory - history.length;
			if(diff != 0){
				history.go(diff);
				$.reglobew._currentHistory = history.length;
			}
		},
		loadConfig:function(){
			$.reglobew.debug("Firing load config");
			var _data = {};
			var _pass = ['_account','_cartUrl','_sellLaptopText','_notInterestedText','_checkoutText','_continueShoppingText','_customPromotionText','_widgetMode','_customProductPromotionText'];
			$.each(_pass,function(key,val){
				_data[val] = $.reglobew[val];
			});
			$.reglobew.debug(_data,$.reglobew._getDomain(),$("iframe.rgboxIframe").get(0).contentWindow);
			$.postMessage(
					_data,
					$.reglobew._getDomain(),
					$("iframe.rgboxIframe").get(0).contentWindow
			);
		},
		parseParams:function(query) {
			var re = /([^&=]+)=?([^&]*)/g;
			var decodeRE = /\+/g;  // Regex for replacing addition symbol with a space
			var decode = function (str) {return decodeURIComponent( str.replace(decodeRE, " ") );};
		    var params = {}, e;
		    while ( e = re.exec(query) ) { 
		        var k = decode( e[1] ), v = decode( e[2] );
		        if (k.substring(k.length - 2) === '[]') {
		            k = k.substring(0, k.length - 2);
		            (params[k] || (params[k] = [])).push(v);
		        }
		        else params[k] = v;
		    }
		    return params;
		},
		onMessage:function(e){
			$.reglobew.debug("on message",e);
			$data = $.reglobew.parseParams(e.data);
			if($data && $data["type"] && $data["type"] == $.reglobew._eventConfigName){
				$data["type"] = $.reglobew._eventConfigName;
			}else if($data && $data["type"] && $data["type"] == $.reglobew._eventHidePopup){
				$data["type"] = $.reglobew._eventHidePopup;
			}else if($data && $data["type"] && $data["type"] == $.reglobew._eventAddAnotherItem){
				$data["type"] = $.reglobew._eventAddAnotherItem;
			}else{
				$data["type"]	=	$.reglobew._eventName;
			}
			$.event.trigger($data);
		},
		_tmp:function(){
			$(document).on("_reglobe_widget_loaded", $.reglobew._sampleBind);
			$(document).on($.reglobew._eventName, $.reglobew.sample);
		},
		debug:function(){
			//console.log(arguments);
		}
}
$(function(){
	$.reglobew.init();
});